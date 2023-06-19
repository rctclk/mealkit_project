package com.project.mealbong.board;

import com.project.mealbong.critest.PageMaker;
import com.project.mealbong.critest.SearchCriteria;
import com.project.mealbong.product.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;


@Controller
@RequestMapping("/qna")
@AllArgsConstructor
public class QnaController {
    private QnaService qnaService;
    private ProductService productService;

    @GetMapping("/qnalist") // 문의글 리스트
    public ModelAndView inquiry_list(ModelAndView mv, SearchCriteria cri, PageMaker pageMaker, HttpSession session) {
        if (session.getAttribute("user_id") == null) {
            mv.setViewName("html/user/login");
            return mv;
        }

        cri.setSnoEno();

        cri.setKeyword((String) session.getAttribute("user_id"));
        mv.addObject("qnaList", qnaService.criList(cri));

        pageMaker.setCriteria(cri);
        pageMaker.setTotalRowsCount(qnaService.criTotalCount(cri));
        mv.addObject("pageMaker", pageMaker);

        mv.setViewName("html/service_page/inquiry/inquiry_list");
        mv.addObject("code_number", productService.categoryList());

        return mv;
    }

    @GetMapping("/qnaform") // 문의글 작성 폼
    public String inquiry_getForm() {
        return "html/service_page/inquiry/inquiry_form";
    }

    @PostMapping("/qnaform") // 글 등록 처리
    public String inquiry_postForm(QnaDTO dto, HttpSession session, HttpServletRequest request) {

        String uri = "redirect:/qna/qnalist";
        dto.setUser_id((String) session.getAttribute("user_id"));
        // 글등록 실패 시
        if (qnaService.insert(dto) < 0) {
            uri = "html/service_page/inquiry/inquiry_form";
        }
        return uri;
    }
    @PostMapping("/qnacheck")
    public String qna_check(QnaDTO dto) {
        if (dto != null) {
            return "insert";
        } else {
            return "fail";
        }
    }

    @GetMapping("/qnaupdate")
    public String inquiry_getUpdate(QnaDTO dto, Model model) {
        QnaDTO detail = qnaService.detail(dto);
        model.addAttribute("qnaList", detail);
        return "html/service_page/inquiry/inquiry_update";
    }

    @PostMapping("/qnaupdate")
    public String inquiry_postUpdate(QnaDTO dto, Model model, RedirectAttributes rttr) {
        String uri = "redirect:/qna/qnalist";
        int update = qnaService.update(dto);

        rttr.addAttribute("qna_num", dto.getQna_num());
        model.addAttribute("qnaList", dto);
        // 글 수정 실패 시
        if (update < 0) {
            uri = "html/service_page/inquiry/inquiry_update/{qna_num}";
        }
        return uri;
    }

    @PostMapping("/qnadelete")
    public String inquiry_delete(@RequestParam("qna_num") int qna_num, QnaDTO dto) {
        dto.setQna_num(qna_num);
        qnaService.delete(dto);
        return "redirect:/qna/qnalist";
    }



}

