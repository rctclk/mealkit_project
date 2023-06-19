package com.project.mealbong.order;

import com.project.mealbong.product.ProductDTO;

import java.util.List;


public interface CartService {
    List<CartMapperDTO> cart_list(String user_id);
    int cart_count(String user_id);

    int cart_update(CartMapperDTO cartMapperDTO);

    int cart_delete(int cart_number);

    CartMapperDTO cart_order(int cart_number);

    int wish_insert(ProductDTO productDTO);
    int cart_insert(ProductDTO productDTO);
}
