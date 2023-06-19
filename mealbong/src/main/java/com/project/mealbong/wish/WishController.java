package com.project.mealbong.wish;


import com.project.mealbong.delivery.DeliveryDTO;
import com.project.mealbong.order.OrderMapperDTO;
import com.project.mealbong.product.ImageDTO;
import com.project.mealbong.product.ImageService;
import com.project.mealbong.product.ProductDTO;
import com.project.mealbong.product.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/wish")
public class WishController {

    private WishService wishservice;
    private ProductService productService;
    private ImageService imageService;

    @GetMapping("/list")
    public ModelAndView wishList(ModelAndView mv, HttpSession session, WishDTO wishDTO) {
        wishDTO.setUser_id((String) session.getAttribute("user_id"));

        List<WishDTO> wishList = wishservice.wishList(wishDTO);

        for (int i = 0; i < wishList.size(); i++) {
            WishDTO wish = wishList.get(i);
            ProductDTO productDetail = productService.productDetail(wish.getProduct_number());
            List<ImageDTO> imageList = imageService.imageList(wish.getProduct_number());
            wish.setImage_file(imageList.get(0).getImage_file());
            wish.setProduct_name(productDetail.getProduct_name());
            wish.setProduct_price(productDetail.getProduct_price());
        }

        System.out.println(wishList);

        mv.addObject("wishList", wishList);
        mv.setViewName("/html/my_page/wish");

        return mv;
    }
}
