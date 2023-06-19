package com.project.mealbong.order;

import com.project.mealbong.critest.Criteria;
import com.project.mealbong.critest.PageMaker;
import com.project.mealbong.critest.SearchCriteria;
import com.project.mealbong.delivery.DeliveryDTO;
import com.project.mealbong.product.ImageService;
import com.project.mealbong.product.ProductDTO;
import com.project.mealbong.product.ProductService;
import com.project.mealbong.user.User1MapperDTO;
import com.project.mealbong.user.User1Service;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/order/")
@AllArgsConstructor
@Log4j2
public class OrderController {
    @Resource
    private CartService cs;
    @Resource
    private User1Service us;
    @Resource
    private OrderService os;

    @Autowired
    private ProductService productService;
    @Autowired
    private ImageService imageService;






    //    **--------- 주문

    @GetMapping("order_list")
    public ModelAndView order_list(@RequestParam("currPage") int currPage, @RequestParam("rowsPerPage") int rowsPerPage,ModelAndView mav, HttpSession session, SearchCriteria cri, PageMaker pageMaker
            ,OrderMapperDTO orderMapperDTO) {
        String user_id = (String) session.getAttribute("user_id");
        orderMapperDTO.setUser_id(user_id);
        cri.setRowsPerPage(rowsPerPage);
        cri.setCurrPage(currPage);
        cri.setSnoEno();
        orderMapperDTO.setSno(cri.getSno());
        orderMapperDTO.setRowsPerPage(rowsPerPage);



        List<Integer> order_number = os.user_order(orderMapperDTO);
        List<OrderMapperDTO> lists = new ArrayList<>();

        for(int o:order_number) {
            lists.add(os.order_list(o));

        }
        pageMaker.setCriteria(cri);
        pageMaker.setTotalRowsCount(os.criTotalCount(user_id));

        mav.addObject("pageMaker",pageMaker);
        mav.addObject("order_list",lists);

        mav.setViewName("html/my_page/mypage");
        return mav;
    }


    @GetMapping("order_form")
    public ModelAndView order_form(ModelAndView mav,@RequestParam String[] cart_numberV,@RequestParam String[] product_countV,CartMapperDTO cartMapperDTO,HttpSession session) {
        int total = 0;
        String user_id = (String) session.getAttribute("user_id");
        User1MapperDTO user_info = us.find_id(user_id);
        DeliveryDTO dely = us.dely_info(user_id);
        Map<Integer,CartMapperDTO> result = new HashMap<>();

        for(int i=0; i<cart_numberV.length; i++) {
            cartMapperDTO.setCart_number(Integer.parseInt(cart_numberV[i]));
//            cartMapperDTO.setProduct_count(Integer.parseInt(product_countV[i]));
//            cs.cart_update(cartMapperDTO);
            total += cs.cart_order(cartMapperDTO.getCart_number()).getPrice_total();
            result.put(i, cs.cart_order(cartMapperDTO.getCart_number()));


        }
//        for(CartMapperDTO ca : result.values()) {
//            System.out.println(ca);
//
//        }
        mav.addObject("product", result);
        mav.addObject("total",total);
        mav.addObject("user_info",user_info);
        mav.addObject("dely",dely);
        mav.setViewName("html/order/order");
//        mav.addObject("arr",arr);
        return mav;
    }


    @PostMapping("order")
    public ModelAndView order(ModelAndView mav,@RequestParam String[] cart_number,OrderMapperDTO orderMapperDTO,OrderDetailMapperDTO orderDetailMapperDTO,CartMapperDTO cartMapperDTO,HttpSession session) {
        String user_id = (String) session.getAttribute("user_id");
        String user_name = (String) session.getAttribute("user_name");
        orderMapperDTO.setUser_id(user_id);

        os.order_insert(orderMapperDTO);
        int total = orderMapperDTO.getOrder_amount();
        int order_number = os.order_number();
        orderDetailMapperDTO.setOrder_number(order_number);
        for(int i=0;i<cart_number.length;i++) {
            cartMapperDTO=cs.cart_order(Integer.parseInt(cart_number[i]));

            orderDetailMapperDTO.setProduct_number(cartMapperDTO.getProduct_number());
            orderDetailMapperDTO.setProduct_price(cartMapperDTO.getProduct_price());
            orderDetailMapperDTO.setProduct_count(cartMapperDTO.getProduct_count());
            os.product_sale(orderDetailMapperDTO);
            os.orderDetail_insert(orderDetailMapperDTO);
            cs.cart_delete(Integer.parseInt(cart_number[i]));
        }
        List<OrderDetailMapperDTO> lists =os.order_submit(order_number);
        mav.addObject("total",total);
//        mav.addObject("order_number",order_number);
        mav.addObject("order_submit",lists);
        mav.addObject("user_name",user_name);
        mav.addObject("order_number",order_number);
        mav.setViewName("/html/order/order_submit");
        mav.addObject("code_number", productService.categoryList());
        return mav;
    }


    @GetMapping("detail")
    public ModelAndView order_detail(ModelAndView mav,OrderDetailMapperDTO orderDetailMapperDTO) {
        int order_number = orderDetailMapperDTO.getOrder_number();
        OrderDetailMapperDTO info = os.order_info(order_number);

        String user_id = info.getUser_id();
        User1MapperDTO user_info = us.find_id(user_id);
        DeliveryDTO dely = us.dely_info(user_id);
        List<OrderDetailMapperDTO> lists = os.order_detail(order_number);
//        for(OrderDetailMapperDTO test : lists) {
//            System.out.println("order_detail ++"+test);
//        }
        info.setOrder_number(order_number);
//        System.out.println("info ++"+info);
        mav.addObject("info",info);
        mav.addObject("dely",dely);
        mav.addObject("detail_list",lists);
        mav.addObject("user_info",user_info);
        mav.setViewName("/html/order/order_details");
        return mav;
    }

//    **--------- 장바구니

    @GetMapping("cart")
    public ModelAndView cart_form(ModelAndView mav,HttpSession session) {

        if(session.getAttribute("user_id") == null) {
            mav.setViewName("html/user/login");
            return mav;
        }

        String user_id = (String) session.getAttribute("user_id");
        int total = 0;
        DeliveryDTO dely = us.dely_info(user_id);
        List<CartMapperDTO> cart_list = cs.cart_list(user_id);
        int result = cs.cart_count(user_id);
        for (CartMapperDTO t:cart_list
        ) {
            total += t.getPrice_total();
        }


        if(result > 0) {
            mav.addObject("fee",3000);
        } else {
            mav.addObject("fee",0);
        }

        mav.addObject("dely",dely);
        mav.addObject("cart_list",cart_list);
        mav.addObject("total",total);
        mav.addObject("count",result);
        mav.addObject("code_number", productService.categoryList());


        mav.setViewName("html/order/cart");
        return mav;

    }


    @ResponseBody
    @PostMapping("cartInsert") // 장바구니 등록
    public int cart_insert(ProductDTO productDTO) {

        return cs.cart_insert(productDTO);

    } // cart_insert


    @PostMapping("cart_delete")
    @ResponseBody
    public int cart_delete(CartMapperDTO cartMapperDTO) {

        log.info("테스트테스트" + cartMapperDTO.getCart_number());
        cs.cart_delete(cartMapperDTO.getCart_number());
        return 1;
    }


    @PostMapping("cart_update")
    @ResponseBody
    public int cart_update(CartMapperDTO cartMapperDTO) {
        cs.cart_update(cartMapperDTO);
        return 1;
    }



//    **-------------- 찜하기


    @ResponseBody
    @PostMapping("wishInsert") // Wish 등록
    public int wish_insert(ProductDTO productDTO){

        return cs.wish_insert(productDTO);
    }




}
