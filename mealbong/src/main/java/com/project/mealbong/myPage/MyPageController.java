package com.project.mealbong.myPage;

import com.project.mealbong.critest.PageMaker;
import com.project.mealbong.critest.SearchCriteria;
import com.project.mealbong.order.OrderMapperDTO;
import com.project.mealbong.order.OrderService;
import com.project.mealbong.product.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/myPage")
public class MyPageController {
    @Resource
    OrderService os;
    private ProductService productService;

    @GetMapping
    public ModelAndView myPage(@RequestParam("currPage") int currPage, @RequestParam("rowsPerPage") int rowsPerPage, ModelAndView mav, HttpSession session, SearchCriteria cri, PageMaker pageMaker
            , OrderMapperDTO orderMapperDTO) {
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
        mav.addObject("code_number", productService.categoryList());

        mav.setViewName("html/my_page/mypage");
        return mav;
    }
    @GetMapping("/user_update")
    public ModelAndView user_update(ModelAndView mav) {
        mav.setViewName("html/my_page/info");
        mav.addObject("code_number", productService.categoryList());
        return mav;
    }
}
