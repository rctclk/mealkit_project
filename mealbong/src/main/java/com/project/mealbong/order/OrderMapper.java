package com.project.mealbong.order;

import com.project.mealbong.critest.SearchCriteria;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderMapper {
    int order_insert(OrderMapperDTO orderMapperDTO);
    int order_number();
    int orderDetail_insert(OrderDetailMapperDTO orderDetailMapperDTO);
    List<OrderDetailMapperDTO> order_submit(int order_number);
    List<OrderDetailMapperDTO> order_detail(int order_number);
    OrderDetailMapperDTO order_info(int order_number);
    OrderMapperDTO order_list(int order_number);
    List<Integer> user_order(OrderMapperDTO orderMapperDTO);
    int criTotalCount(String user_id);

    void product_sale(OrderDetailMapperDTO orderDetailMapperDTO);

    //    ******** 추가한거
// admin page
    List<OrderMapperDTO> searchList(SearchCriteria cri);
    int searchTotalCount(SearchCriteria cri);
    //    List<OrderDetailMapperDTO> order_detail (OrderDetailMapperDTO dto);
    int delete (OrderMapperDTO dto);


}
