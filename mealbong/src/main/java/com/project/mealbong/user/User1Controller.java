package com.project.mealbong.user;

import com.project.mealbong.delivery.DeliveryDTO;
import com.project.mealbong.delivery.DeliveryService;
import com.project.mealbong.order.CartMapperDTO;
import com.project.mealbong.product.ProductService;
import com.sun.org.apache.xpath.internal.operations.Mod;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/user1")
@AllArgsConstructor
@Log4j2
public class User1Controller {


    PasswordEncoder passwordEncoder;

    @Resource
    private User1Service us;
    private DeliveryService ds;
    private ProductService productService;


//    **------- 이용약관

    @GetMapping("/terms")
    public ModelAndView terms() {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("html/user/Terms");
        return mav;
    }


//    **-------- 회원가입

    @GetMapping("/save")
    public ModelAndView saveForm() {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("html/user/account");
        return mav;
    }

    @PostMapping("/save")
    public ModelAndView save(@ModelAttribute User1MapperDTO user1MapperDTO, DeliveryDTO deliveryDTO) throws Exception {
        ModelAndView mav = new ModelAndView();
        user1MapperDTO.setUser_password(passwordEncoder.encode(user1MapperDTO.getUser_password()));
        us.user_save(user1MapperDTO);
        deliveryDTO.setUser_id(user1MapperDTO.getUser_id());
        deliveryDTO.setDely_zip(user1MapperDTO.getUser_zip());
        deliveryDTO.setDely_address2(user1MapperDTO.getUser_address2());
        deliveryDTO.setDely_address1(user1MapperDTO.getUser_address1());
        deliveryDTO.setDely_name(user1MapperDTO.getUser_name());
        deliveryDTO.setDely_phone(user1MapperDTO.getUser_phone());
        ds.newdeliveryInsert(deliveryDTO);

        mav.addObject("user_name", user1MapperDTO);
        mav.setViewName("html/user/account_submit");
        return mav;
    }


    //    **-------- 회원삭제
    @PostMapping("/delete")
    public ModelAndView delete(ModelAndView mav, HttpSession session) {

        //user1MapperDTO.setUser_password(user_password);
        //user1MapperDTO.setUser_id((String) session.getAttribute("user_id"));


        if (session.getAttribute("user_id") == null) {

            mav.setViewName("html/user/login");
            return mav;
        } // session 확인


        us.user_delete((String) session.getAttribute("user_id"));
        //     mav.setViewName("html/user/user_delete");

        session.invalidate();
        mav.setViewName("html/user/user_delete");

        return mav;
    }


//    **-------- 회원정보 수정

    @GetMapping("/{user_id}")
    public ModelAndView user_updateForm(User1MapperDTO user1MapperDTO, HttpSession session, ModelAndView mav) {
//        String uri = "html/user/user_detail";
        String uri = "html/user/user_update";

        if (session.getAttribute("user_id") == null) {

            mav.addObject("message", "로그인 후 이용하세요");
            mav.setViewName("html/user/login");
            return mav;
        } // session 확인

        user1MapperDTO = us.find_id(user1MapperDTO.getUser_id());
        mav.addObject("user_detail", user1MapperDTO);


//        if("U".equals(request.getParameter("jCode"))) {
//            uri = "html/user/user_update";
//        }

        mav.setViewName(uri);

        return mav;
    }

    @PostMapping("/update")
    public ModelAndView update(ModelAndView mav, User1MapperDTO user1MapperDTO, HttpSession session) {
        if ("".equals(user1MapperDTO.getUser_password())) {
            user1MapperDTO.setUser_password((String) session.getAttribute("user_password"));
        } else {
            user1MapperDTO.setUser_password(passwordEncoder.encode(user1MapperDTO.getUser_password()));
        }
        us.user_update(user1MapperDTO);
        session.setAttribute("user_name", user1MapperDTO.getUser_name());
        session.setAttribute("user_password", user1MapperDTO.getUser_password());
        mav.setViewName("redirect:/");
        return mav;
    }


//    **-------- 로그인,로그아웃


    @GetMapping("/login")
    public ModelAndView loginForm(ModelAndView mav) {
        mav.setViewName("html/user/login");
        mav.addObject("code_number", productService.categoryList());
        return mav;
    }

    @PostMapping("/login")
    public ModelAndView login(HttpSession session, ModelAndView mav, @ModelAttribute User1MapperDTO user1MapperDTO, RedirectAttributes rttr) {
        String uri;
        String user_id = user1MapperDTO.getUser_id();

        user1MapperDTO = us.find_id(user_id);

        session.setAttribute("user_id", user1MapperDTO.getUser_id());
        session.setAttribute("user_name", user1MapperDTO.getUser_name());
        session.setAttribute("user_password", user1MapperDTO.getUser_password());
        uri = "redirect:/";

        mav.setViewName(uri);

        return mav;
    }


    @GetMapping("/logout")
    public ModelAndView logout(ModelAndView mav, HttpSession session) {
//        session.removeAttribute("user_id");
//        session.removeAttribute("user_name");
        session.invalidate();
        mav.setViewName("redirect:/");
        return mav;
    }


//    **-------- 어드민 관련

    @GetMapping("/admin/{user_id}")
    public ModelAndView admin_userInfo(@PathVariable String user_id, ModelAndView mav) {
        String uri = "html/user/user_detail";

        User1MapperDTO find_id = us.find_id(user_id);
        mav.addObject("user_detail", find_id);
        mav.setViewName(uri);


        return mav;
    }

    @PostMapping("/admin/delete")
    public ModelAndView admin_userDelete(User1MapperDTO user1MapperDTO, ModelAndView mav) {
        String user_id = user1MapperDTO.getUser_id();
        us.user_delete(user_id);
        mav.setViewName("redirect:/admin/useradmin");
        return mav;
    }


//    **-------- 중복체크,패스워드체크

    @PostMapping("/pw_check")
    @ResponseBody
    public int pw_check(User1MapperDTO user1MapperDTO, HttpSession session) {
        String password = (String) session.getAttribute("user_password");
        if (!passwordEncoder.matches(user1MapperDTO.getUser_password(), password)) {
            return 1;
        }
        return 0;
    }


    @PostMapping("/login_check")
    @ResponseBody
    public int login_check(User1MapperDTO user1MapperDTO) {
        String password = user1MapperDTO.getUser_password();
        user1MapperDTO = us.find_id(user1MapperDTO.getUser_id());
        if (user1MapperDTO != null) {
            if (passwordEncoder.matches(password, user1MapperDTO.getUser_password())) {
                return 1;
            } else {
                return 2;
            }
        } else {
            return 3;
        }
    }


    @PostMapping("/id_check")
    @ResponseBody
    public int id_check(String user_id) {

        int result = us.id_check(user_id);
        System.out.println("asdfasdf" + user_id);
        return result;
    }

    @PostMapping("/email_check")
    @ResponseBody
    public int email_check(String user_email) {

        int result = us.email_check(user_email);
        return result;
    }

    @PostMapping("/phone_check")
    @ResponseBody
    public int phone_check(String user_phone) {

        int result = us.phone_check(user_phone);
        return result;
    }


    @PostMapping("/product_check")
    @ResponseBody
    public int product_check(CartMapperDTO cartMapperDTO) {

        int result = us.product_check(cartMapperDTO);
        return result;
    }

//    REST API
//    **--------

    //    @PostMapping("/save")
//    public ModelAndView save(@ModelAttribute User1MapperDTO user1MapperDTO) {
//        ModelAndView mav = new ModelAndView();
//        System.out.println(user1MapperDTO);
//        user1MapperDTO.setUser_password(passwordEncoder.encode(user1MapperDTO.getUser_password()));
//        us.user_save(user1MapperDTO);
//        mav.addObject("user_name",user1MapperDTO);
//        mav.setViewName("html/user/account_submit");
//        return mav;
//    }
    @PostMapping
    public ModelAndView user_create(User1MapperDTO user1MapperDTO, ModelAndView mav) {
        log.info("testetsetsetset" + user1MapperDTO);
        user1MapperDTO.setUser_password(passwordEncoder.encode(user1MapperDTO.getUser_password()));
        us.user_save(user1MapperDTO);
        mav.addObject("user_name", user1MapperDTO);
        mav.setViewName("html/user/account_submit");
        return mav;
    }

    //    @PostMapping("/update")
//    public ModelAndView update(ModelAndView mav, User1MapperDTO user1MapperDTO,HttpSession session) {
//        if("".equals(user1MapperDTO.getUser_password())) {
//            user1MapperDTO.setUser_password((String) session.getAttribute("user_password"));
//        } else {
//            user1MapperDTO.setUser_password(passwordEncoder.encode(user1MapperDTO.getUser_password()));
//        }
//        us.user_update(user1MapperDTO);
//        session.setAttribute("user_name",user1MapperDTO.getUser_name());
//        session.setAttribute("user_password",user1MapperDTO.getUser_password());
//        mav.setViewName("redirect:/");
//        return mav;
//    }
    @PutMapping
    public ModelAndView user_update2(User1MapperDTO user1MapperDTO, ModelAndView mav, HttpSession session) {
        log.info("테스트ㅡ" + user1MapperDTO);

        if ("".equals(user1MapperDTO.getUser_password())) {
            user1MapperDTO.setUser_password((String) session.getAttribute("user_password"));
        } else {
            user1MapperDTO.setUser_password(passwordEncoder.encode(user1MapperDTO.getUser_password()));
        }
        us.user_update(user1MapperDTO);
        session.setAttribute("user_name", user1MapperDTO.getUser_name());
        session.setAttribute("user_password", user1MapperDTO.getUser_password());

        mav.setViewName("html/user/findid");
        return mav;
    }


}
