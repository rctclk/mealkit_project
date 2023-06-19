package com.project.mealbong.delivery;


import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.mealbong.faq.FaqDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Controller
@AllArgsConstructor
@RequestMapping("/address")
public class DeliveryController {

    DeliveryService service;

    @GetMapping("/list")
    public ModelAndView list(DeliveryDTO dto, ModelAndView mv, HttpSession session) {
        dto.setUser_id((String) session.getAttribute("user_id"));
        List<DeliveryDTO> deliveryList = service.deliveryList(dto);
        mv.addObject("deliveryList", deliveryList);
        mv.setViewName("/html/my_page/address");
        return mv;
    }

    @PostMapping("/delyInsert")
    public String delyInsert(DeliveryDTO dto) {
        service.deliveryInsert(dto);
        return "redirect:/address/list";
    }

    @PostMapping("/dely_default")
    public String dely_default(HttpSession session, @RequestParam("dely_number") int dely_number, DeliveryDTO dto) {
        dto.setDely_number(dely_number);
        dto.setUser_id((String) session.getAttribute("user_id"));
        service.deliveryDefault(dto);
        return "redirect:/address/list";
    }

    @GetMapping("/delyUpdate")
    public ModelAndView delyUpdate(@RequestParam("dely_number") int dely_number, ModelAndView mv, DeliveryDTO dto) {
        dto.setDely_number(dely_number);

        mv.addObject("deliveryDetail", service.deliveryDetail(dto));
        mv.setViewName("/html/my_page/addressUpdateForm");
        return mv;
    }

    @PostMapping("/delyUpdate")
    public String delyUpdate(DeliveryDTO dto) {
        service.deliveryUpdate(dto);
        return "redirect:/address/list";
    }

    @PostMapping("/delyDelete")
    public String delyDelete(@RequestParam("dely_number") int dely_number,DeliveryDTO dto ) {
        dto.setDely_number(dely_number);
        service.deliveryDelete(dto);
        return "redirect:/address/list";
    }
}
