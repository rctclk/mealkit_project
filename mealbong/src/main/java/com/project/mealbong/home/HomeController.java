package com.project.mealbong.home;

import com.project.mealbong.product.ProductDTO;
import com.project.mealbong.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class HomeController {
    @Autowired
    private ProductService productService;
    @GetMapping("/")
    public String mainPage (Model model) {

        List<ProductDTO> popList = productService.popList(); // 인기상품
        List<ProductDTO> randomList = productService.randomList(); // 오늘의추천, 이런건 어때요?
        List<ProductDTO> newList = productService.newList(); // 밀봉 신상


        model.addAttribute("productList", popList);
        model.addAttribute("randomList", randomList);
        model.addAttribute("newList", newList);
        model.addAttribute("code_number", productService.categoryList());

        return "index";
    }

    @GetMapping("personal")
    public String personal () {
        return "html/footer/personal";
    }

}
