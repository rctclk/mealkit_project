package com.project.mealbong.order;

import com.project.mealbong.critest.Criteria;
import com.project.mealbong.critest.SearchCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{
    @Autowired
    OrderMapper orderMapper;

    @Override
    public int order_insert(OrderMapperDTO orderMapperDTO) {
        return orderMapper.order_insert(orderMapperDTO);
    }

    @Override
    public int order_number() {
        return orderMapper.order_number();
    }

    @Override
    public int orderDetail_insert(OrderDetailMapperDTO orderDetailMapperDTO) {
        return orderMapper.orderDetail_insert(orderDetailMapperDTO);
    }

    @Override
    public List<OrderDetailMapperDTO> order_submit(int order_number) {
        return orderMapper.order_submit(order_number);
    }

    @Override
    public List<OrderDetailMapperDTO> order_detail(int order_number) {
        return orderMapper.order_detail(order_number);
    }

    @Override
    public OrderDetailMapperDTO order_info(int order_number) {
        return orderMapper.order_info(order_number);
    }

    @Override
    public OrderMapperDTO order_list(int order_number) {
        return orderMapper.order_list(order_number);
    }

    @Override
    public List<Integer> user_order(OrderMapperDTO orderMapperDTO) {
        return orderMapper.user_order(orderMapperDTO);
    }

    @Override
    public int criTotalCount(String user_id) {
        return orderMapper.criTotalCount(user_id);
    }

    @Override
    public void product_sale(OrderDetailMapperDTO orderDetailMapperDTO) {
        orderMapper.product_sale(orderDetailMapperDTO);
    }

    //    *************** 추가한거


    // admin page
    @Override
    public List<OrderMapperDTO> searchList(SearchCriteria cri) {
        return orderMapper.searchList(cri);
    }

    @Override
    public int searchTotalCount(SearchCriteria cri) {
        return orderMapper.searchTotalCount(cri);
    }

//    @Override
//    public List<OrderDetailMapperDTO> order_admin_detail(OrderDetailMapperDTO dto) {
//        return orderMapper.order_detail(dto);
//    }

    @Override
    public int delete(OrderMapperDTO dto) {
        return orderMapper.delete(dto);
    }
}
