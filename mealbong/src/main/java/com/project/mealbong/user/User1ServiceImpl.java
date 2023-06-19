package com.project.mealbong.user;

import com.project.mealbong.critest.SearchCriteria;
import com.project.mealbong.delivery.DeliveryDTO;
import com.project.mealbong.order.CartMapperDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class User1ServiceImpl implements User1Service{

    @Autowired
    private User1Mapper user1Mapper;

    @Override
    public int user_update(User1MapperDTO user1MapperDTO) {
        return user1Mapper.user_update(user1MapperDTO);
    }

    @Override
    public int user_save(User1MapperDTO user1MapperDTO) {
        return user1Mapper.user_save(user1MapperDTO);

    }

    @Override
    public List<User1MapperDTO> user_list() {
        return user1Mapper.user_list();
    }

    @Override
    public int user_delete(String user_id) {
        return user1Mapper.user_delete(user_id);

    }

    @Override
    public int id_check(String user_id) {
        return user1Mapper.id_check(user_id);
    }

    @Override
    public int email_check(String user_email) {
        return user1Mapper.email_check(user_email);
    }

    @Override
    public int phone_check(String user_phone) {
        return user1Mapper.phone_check(user_phone);
    }

    @Override
    public int product_check(CartMapperDTO cartMapperDTO) {
        return user1Mapper.product_check(cartMapperDTO);
    }

//    @Override
//    public User1MapperDTO pw_check(User1MapperDTO user1MapperDTO) {
//        return user1Mapper.pw_check(user1MapperDTO);
//    }

    @Override
    public User1MapperDTO find_id(String user_id) {
        return user1Mapper.find_id(user_id);
    }

    @Override
    public DeliveryDTO dely_info(String user_id) {
        return user1Mapper.dely_info(user_id);
    }

    //    ===============추가한거

    @Override
    public List<User1MapperDTO> searchList(SearchCriteria cri) {
        return user1Mapper.searchList(cri);
    }

    @Override
    public int searchTotalCount(SearchCriteria cri) {
        return user1Mapper.searchTotalCount(cri);
    }


}
