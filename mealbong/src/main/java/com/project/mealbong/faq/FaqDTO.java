package com.project.mealbong.faq;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

@Data
public class FaqDTO {
    private int faq_number;
    private String faq_code;
    private String faq_question;
    private String faq_answer;
}
