package com.project.mealbong.order;

import lombok.Data;

@Data
public class CartMapperDTO {
    private int cart_number;
    private String user_id;
    private int product_number;
    private int product_count;
    private int product_price;
    private int price_total;
    private String product_name;
    private String image_file;
    private int dir;
}
