package com.project.mealbong.order;

import lombok.Data;

import java.time.LocalDate;

@Data
public class OrderDetailMapperDTO {
    private String user_id;
    private String order_status;
    private int order_detail_number;
    private int order_number;
    private int product_number;
    private String product_name;
    private int product_count;
    private int product_price;
    private int price_total;
    private int order_amount;
    private String review_check;
    private String image_file;
    private String payment;
    private LocalDate order_date;
}
