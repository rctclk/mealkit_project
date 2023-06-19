package com.project.mealbong.notice;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

@Data
public class NoticeDTO {
    private int notice_number;
    private String notice_title;
    private String notice_content;
    private String notice_name;
    private LocalDate notice_date;
    private int notice_cnt;
    private String notice_file;

    private MultipartFile uploadfile;
}
