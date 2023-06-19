package com.project.mealbong.home;

import com.project.mealbong.critest.PageMaker;
import com.project.mealbong.critest.SearchCriteria;
import com.project.mealbong.product.ProductDTO;
import com.project.mealbong.product.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/search")
public class SearchController {
    private ProductService productService;

    @GetMapping("/searchlist")
    public ModelAndView searchPage (ModelAndView mv, SearchCriteria cri, PageMaker pageMaker) {

        cri.setSnoEno();

        mv.addObject("productList", productService.searchPage(cri));

        pageMaker.setCriteria(cri);
        pageMaker.setTotalRowsCount(productService.searchPageTotalCount(cri));
        mv.addObject("pageMaker", pageMaker);

        mv.setViewName("/html/search/search");

        return mv;

    }

}
