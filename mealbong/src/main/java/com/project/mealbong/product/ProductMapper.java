package com.project.mealbong.product;

import com.project.mealbong.critest.Criteria;
import com.project.mealbong.critest.SearchCriteria;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface ProductMapper {
    // 상품 리스트
    List<ProductDTO> productList() throws Exception;
    // 상품 이미지 리스트로 불러오기
    List<ImageDTO> imageList(int product_number) throws Exception;
    // 카테고리 리스트
    List<ProductDTO> categoryList() throws Exception;
    // 상품 상세
    ProductDTO productDetail(int product_number);
    ProductDTO detail(ProductDTO dto);

    // 상품 등록
    int insert(ProductDTO dto);

    // 상품 수정
    int update(ProductDTO dto);

    // 상품 삭제
    void delete(ProductDTO dto);

    List<ProductDTO> criList(Criteria cri);

    int criTotalCount(Criteria cri);

    // admin page
    List<ProductDTO> productAdmin() throws Exception;
    List<ProductDTO> searchList(SearchCriteria cri);
    int searchTotalCount(SearchCriteria cri);
    // search page
    List<ProductDTO> searchPage(SearchCriteria cri) throws Exception;
    int searchPageTotalCount(SearchCriteria cri);

    // main page
    List<ProductDTO> popList() throws Exception; // 인기상품
    List<ProductDTO> randomList() throws Exception; // 오늘의 추천
    List<ProductDTO> newList() throws Exception; // 밀봉 신상

}
