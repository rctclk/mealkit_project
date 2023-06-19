package com.project.mealbong.order;

import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class OrderMapperDTO {
    private int order_number;
    private String user_id;
    private LocalDate order_date;
    private int order_amount;
    private String order_status;
    private String payment;
    private int order_count;
    private String product_name;
    private String image_file;
    private int sno;
    private int rowsPerPage;
    private int product_number;
}
