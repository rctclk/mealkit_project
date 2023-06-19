package com.project.mealbong.product;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ProductDTO {
    private int product_number;
    private String category_code;
    private String product_name;
    private int product_price;
    private String level_code;
    private int product_serving;
    private String package_code;
    private LocalDate product_date;
    private String image_file;
    private String code_number;
    private String code_desc;
    private int product_count;
    private String user_id;
}
