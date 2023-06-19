package com.project.mealbong.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ImageService {
    @Autowired
    private ProductMapper mapper;

    public List<ImageDTO> imageList(int product_number){
        List<ImageDTO> imageList = new ArrayList<ImageDTO>();

        try{
            imageList = mapper.imageList(product_number);
        } catch(Exception e) {
            e.printStackTrace();
        }
        return imageList;
    }
}
