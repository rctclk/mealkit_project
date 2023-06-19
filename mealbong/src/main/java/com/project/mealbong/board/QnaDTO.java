package com.project.mealbong.board;

import lombok.Data;

import java.time.LocalDate;

@Data
public class QnaDTO {
    private int qna_num;
    private String user_id;
    private String qna_title;
    private String qna_content;
    private LocalDate qna_date;
    private String qna_file;
    private String ans_content;
    private LocalDate ans_date;
    private String qna_type;
    private String user_name;
}
