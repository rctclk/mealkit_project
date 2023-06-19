package com.project.mealbong.wish;

import com.project.mealbong.product.ImageDTO;
import com.project.mealbong.product.ProductDTO;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;

@Data
public class WishDTO {
    private int wishlist_number;
    private String user_id;
    private int product_number;

    private String product_name;
    private String image_file;
    private int product_price;




}
