package com.project.mealbong.admin;

import com.project.mealbong.board.QnaDTO;
import com.project.mealbong.board.QnaService;
import com.project.mealbong.critest.PageMaker;
import com.project.mealbong.critest.SearchCriteria;
import com.project.mealbong.faq.FaqDTO;
import com.project.mealbong.faq.FaqService;
import com.project.mealbong.notice.NoticeDTO;
import com.project.mealbong.notice.NoticeService;
import com.project.mealbong.order.OrderDetailMapperDTO;
import com.project.mealbong.order.OrderMapperDTO;
import com.project.mealbong.order.OrderService;
import com.project.mealbong.product.ProductService;
import com.project.mealbong.user.User1MapperDTO;
import com.project.mealbong.user.User1Service;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


@Controller
@AllArgsConstructor
@RequestMapping("/admin")
public class AdminController {
    private QnaService qnaService;
    private ProductService productService;
    private User1Service userService;
    private OrderService orderService;
    private NoticeService noticeService;
    private FaqService faqService;


    // 회원관리 (관리자 페이지 메인)
    @GetMapping("/useradmin")
    public ModelAndView user_admin(ModelAndView mv, SearchCriteria cri, PageMaker pageMaker) {

        cri.setSnoEno();

        mv.addObject("userList", userService.searchList(cri));
        pageMaker.setCriteria(cri);
        pageMaker.setTotalRowsCount(userService.searchTotalCount(cri));
        mv.addObject("pageMaker", pageMaker);
        mv.addObject("code_number", productService.categoryList());

        mv.setViewName("html/admin/user_admin");

        return mv;
    }

    @GetMapping("/{user_id}")
    public ModelAndView user_detail(ModelAndView mav, User1MapperDTO user1MapperDTO) {
        user1MapperDTO = userService.find_id(user1MapperDTO.getUser_id());
        mav.addObject("user_detail",user1MapperDTO);
        mav.setViewName("html/admin/user_admin_detail");
        return mav;
    }

    // 주문관리
    @GetMapping("/orderadmin")
    public ModelAndView order_admin (ModelAndView mv, SearchCriteria cri, PageMaker pageMaker) {
        cri.setSnoEno();

        mv.addObject("orderList", orderService.searchList(cri));

        pageMaker.setCriteria(cri);
        pageMaker.setTotalRowsCount(orderService.searchTotalCount(cri));
        mv.addObject("pageMaker", pageMaker);
        mv.addObject("code_number", productService.categoryList());

        mv.setViewName("html/admin/order_admin");

        return mv;
    }

    // 주문 관리 detail
    @GetMapping("/orderdetail")
    public String order_admin_detail (@RequestParam("order_number") int order_number, Model model, OrderDetailMapperDTO dto) {
        dto.setOrder_number(order_number);
        System.out.println(dto);

        model.addAttribute("orderListDetail", orderService.order_detail(order_number));
        return "html/admin/order_admin_detail";
    }

    // 주문 취소
    @PostMapping("/orderdelete")
    public String order_delete (OrderMapperDTO dto) {
        System.out.println(dto);
        orderService.delete(dto);
        return "redirect:/admin/orderadmin";
    }

    // 상품관리
    @GetMapping("/productadmin") // 상품 리스트
    public ModelAndView product_admin(ModelAndView mv, SearchCriteria cri, PageMaker pageMaker){
        cri.setSnoEno();
        mv.addObject("productAdmin", productService.searchList(cri));

        pageMaker.setCriteria(cri);
        pageMaker.setTotalRowsCount(productService.searchTotalCount(cri));
        mv.addObject("pageMaker", pageMaker);
        mv.addObject("code_number", productService.categoryList());

        mv.setViewName("html/admin/product_admin");

        return mv;
    }

    // 게시판 관리 - 1대1 문의
    @GetMapping("/qnaadmin")
    public ModelAndView qna_admin(ModelAndView mv, SearchCriteria cri, PageMaker pageMaker) {
        cri.setSnoEno();

        mv.addObject("qnaList", qnaService.searchList(cri));
        pageMaker.setCriteria(cri);
        pageMaker.setTotalRowsCount(qnaService.searchTotalCount(cri));
        mv.addObject("pageMaker", pageMaker);

        mv.setViewName("html/admin/qna_admin");

        return mv;
    }

    @GetMapping("/qnadetail")
    public String qna_detail (@RequestParam("qna_num") int qna_num, Model model, QnaDTO dto) {
        dto.setQna_num(qna_num);
        model.addAttribute("qnaDetail", qnaService.detail(dto));
        return "html/admin/qna_admin_detail";

    }


    // 답변
    @GetMapping("/ansform")
    public String ans_getForm(QnaDTO dto, Model model) {
        QnaDTO detail = qnaService.detail(dto);
        model.addAttribute("qnaList", detail);
        return "html/service_page/inquiry/ans_form";
    }

    @PostMapping("/ansform")
    public String ans_postForm(QnaDTO dto, Model model, RedirectAttributes rttr) {
        String uri = "redirect:/admin/qnaadmin?searchType=n";
        int ainsert = qnaService.ainsert(dto);

        rttr.addFlashAttribute("qna_num", dto.getQna_num());
        model.addAttribute("qnaList", dto);

        // 글 수정 실패 시
        if (ainsert < 0) {
            uri = "html/service_page/inquiry/ans_form/{qna_num}";
        }

        return uri;
    }

    @PostMapping("/ansdelete")
    public String ans_delete(@RequestParam("qna_num") int qna_num, QnaDTO dto) {
        dto.setQna_num(qna_num);
        qnaService.adelete(dto);
        return "redirect:/admin/qnaadmin";
    }

    @PostMapping("/qdelete")
    public String admin_delete(@RequestParam("qna_num") int qna_num, QnaDTO dto) {
        dto.setQna_num(qna_num);
        qnaService.adminDelete(dto);
        return "redirect:/admin/qnaadmin?searchType=n";
    }

    @GetMapping("/qupdate")
    public String admin_getUpdate(QnaDTO dto, Model model) {
        QnaDTO detail = qnaService.detail(dto);
        model.addAttribute("qnaList", detail);
        return "html/admin/qna_admin_update";
    }

    @PostMapping("/qupdate")
    public String admin_postUpdate(QnaDTO dto, Model model, RedirectAttributes rttr) {
        String uri = "redirect:/admin/qnaadmin?searchType=n";
        int adminUpdate = qnaService.adminUpdate(dto);

        rttr.addAttribute("qna_num", dto.getQna_num());
        model.addAttribute("qnaList", dto);
        // 글 수정 실패 시
        if (adminUpdate < 0) {
            uri = "html/admin/qna_admin_update/{qna_num}";
        }

        return uri;
    }

    // 게시판 관리 - 공지사항
    @GetMapping("/noticeadmin")
    public ModelAndView admin_noticeList(ModelAndView mv, SearchCriteria cri, PageMaker pageMaker) {
        cri.setSnoEno();

        mv.addObject("noticeList", noticeService.searchList(cri));

        pageMaker.setCriteria(cri);

        pageMaker.setTotalRowsCount(noticeService.searchTotalCount(cri));

        mv.addObject("pageMaker", pageMaker);
        mv.addObject("code_number", productService.categoryList());

        mv.setViewName("/html/admin/notice_admin");
        return mv;
    }

    // 공지사항 상세 페이지
    @GetMapping("/noticedetail")
    public ModelAndView noticeDetail(@RequestParam("notice_number") int noticeNumber, ModelAndView mv, NoticeDTO dto) {
        dto.setNotice_number(noticeNumber);
        dto = noticeService.noticeDetail(dto);

        if (dto != null) {
            // ** 조회수 증가
            if (noticeService.noticeCountUp(dto) > 0) dto.setNotice_cnt(dto.getNotice_cnt() + 1);
        } //if_증가조건
        mv.addObject("noticeDetail", dto);
        mv.setViewName("/html/admin/notice_admin_detail");
        return mv;
    }

    // 게시판 관리 - faq
    @GetMapping("/faqadmin")
    public ModelAndView admin_faqList(ModelAndView mv, SearchCriteria cri, PageMaker pageMaker) {
        cri.setSnoEno();

        mv.addObject("faqList", faqService.searchList(cri));

        pageMaker.setCriteria(cri);
        pageMaker.setTotalRowsCount(faqService.searchTotalCount(cri));

        mv.addObject("pageMaker", pageMaker);

        mv.setViewName("/html/admin/faq_admin");
        return mv;
    }

    // faq 상세

    @GetMapping("/faqdetail")
    public String qna_detail (@RequestParam("faq_number") int faq_number, Model model, FaqDTO dto) {
        dto.setFaq_number(faq_number);
        model.addAttribute("faqDetail", faqService.faqDetail(dto));
        return "html/admin/faq_admin_detail";

    }

}

