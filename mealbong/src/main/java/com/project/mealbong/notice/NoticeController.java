package com.project.mealbong.notice;


import com.project.mealbong.critest.PageMaker;
import com.project.mealbong.critest.SearchCriteria;
import com.project.mealbong.product.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/notice")
public class NoticeController {

    NoticeService service;
    ProductService productService;

    @GetMapping("/noticeDetail")
    public ModelAndView noticeDetail(@RequestParam("notice_number") int noticeNumber, ModelAndView mv, NoticeDTO dto) {
        dto.setNotice_number(noticeNumber);
        dto = service.noticeDetail(dto);

        if (dto != null) {
            // ** 조회수 증가
            if (service.noticeCountUp(dto) > 0) dto.setNotice_cnt(dto.getNotice_cnt() + 1);
        } //if_증가조건
        mv.addObject("noticeDetail", dto);
        mv.setViewName("/html/service_page/noticeDetail");
        mv.addObject("code_number", productService.categoryList());
        return mv;
    }

    @GetMapping("/list")
    public ModelAndView noticeList(ModelAndView mv, SearchCriteria cri, PageMaker pageMaker) {
        cri.setSnoEno();

        mv.addObject("noticeList", service.criList(cri));

        pageMaker.setCriteria(cri);

        pageMaker.setTotalRowsCount(service.criTotalCount(cri));

        mv.addObject("pageMaker", pageMaker);
        mv.addObject("code_number", productService.categoryList());

        mv.setViewName("/html/service_page/notice");
        return mv;
    }

    @GetMapping("/noticeUpdate")
    public ModelAndView noticeUpdate(@RequestParam("notice_number") int noticeNumber, ModelAndView mv, NoticeDTO dto) {
        dto.setNotice_number(noticeNumber);
        dto = service.noticeDetail(dto);
        mv.addObject("noticeDetail", dto);
        mv.setViewName("/html/service_page/noticeUpdateForm");
        mv.addObject("code_number", productService.categoryList());
        return mv;
    }

    @PostMapping("/noticeUpdate")
    public String noticeUpdate(NoticeDTO dto) {
        String uri = "redirect:/admin/noticeadmin";
        service.noticeUpdate(dto);
        return uri;
    }

    @GetMapping("/noticeInsert")
    public ModelAndView noticeInsert(ModelAndView mv) {
        mv.setViewName("/html/service_page/noticeInsertForm");
        return mv;
    }

    @PostMapping("/noticeInsert")
    public String noticeInsert(@RequestParam("uploadfile") MultipartFile file, NoticeDTO dto) {

        if (!file.isEmpty()) {
            try {
                byte[] bytes = file.getBytes();
                String fileName = file.getOriginalFilename();
                String uploadDir = "src/main/resources/static/image/Notice/";
                String filePath = uploadDir + fileName;
                Path path = Paths.get(filePath);
                dto.setNotice_file("/image/Notice/" + fileName);
                Files.write(path, bytes);
                service.noticeInsert(dto);


                return "redirect:/admin/noticeadmin";
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return "redirect:/admin/noticeadmin";
    }

    @PostMapping("/noticeDelete")
    public String noticeInsert(@RequestParam("notice_number") int noticeNumber, NoticeDTO dto) {
        dto.setNotice_number(noticeNumber);
        service.noticeDelete(dto);
        return "redirect:/admin/noticeadmin";
    }

//    @GetMapping("/{id}")
//    public ModelAndView noticeDetail(@PathVariable("id") Long id, ModelAndView mv) {
//        try {
//            NoticeDTO notice = noticeService.noticeDetail(id);
//            mv.addObject("notice", notice);
//            mv.setViewName("/html/service_page/noticeDetail");
//        } catch (Exception e) {
//            // 예외 처리
//        }
//        return mv;
//    }
//
//    @PostMapping("/delete/{id}")
//    public String noticeDelete(@PathVariable("id") Long id) {
//        try {
//            noticeService.noticeDelete(id);
//        } catch (Exception e) {
//            // 예외 처리
//        }
//        return "redirect:/notice/list";
//    }
//
//    @PostMapping("/countUp/{id}")
//    @ResponseBody
//    public ResponseEntity<String> noticeCountUp(@PathVariable("id") Long id) {
//        try {
//            noticeService.noticeCountUp(id);
//            return ResponseEntity.ok("Success");
//        } catch (Exception e) {
//            return ResponseEntity.badRequest().body("Failed");
//        }
//    }
//
//    @GetMapping("/insert")
//    public String noticeInsertForm(Model model) {
//        model.addAttribute("notice", new NoticeDTO());
//        return "/html/service_page/noticeInsertForm";
//    }
//
//    @PostMapping("/insert")
//    public String noticeInsert(@Valid NoticeDTO noticeDTO, BindingResult bindingResult) {
//        if (bindingResult.hasErrors()) {
//            // 예외 처리
//        }
//        try {
//            noticeService.noticeInsert(noticeDTO);
//            return "redirect:/notice/list";
//        } catch (Exception e) {
//            // 예외 처리
//        }
//        return "redirect:/notice/list";
//    }
//
//    @GetMapping("/update/{id}")
//    public String noticeUpdateForm(@PathVariable("id") Long id, Model model) {
//        try {
//            NoticeDTO notice = noticeService.noticeDetail(id);
//            model.addAttribute("notice", notice);
//            return "/html/service_page/noticeUpdateForm";
//        } catch (Exception e) {
//            // 예외 처리
//        }
//        return "redirect:/notice/list";
//    }
//
//    @PostMapping("/update/{id}")
//    public String noticeUpdate(@PathVariable("id") Long id, @Valid NoticeDTO noticeDTO,
//                               BindingResult bindingResult) {
//        if (bindingResult.hasErrors()) {
//            // 예외 처리
//        }
//        try {
//            noticeDTO.setId(id);
//            noticeService.noticeUpdate(noticeDTO);
//            return "redirect:/notice/list";
//        } catch (Exception e) {
//            // 예외 처리
//        }
//        return "redirect:/notice/list";
//    }

}
