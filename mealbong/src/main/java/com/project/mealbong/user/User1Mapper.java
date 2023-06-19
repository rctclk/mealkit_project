package com.project.mealbong.user;

import com.project.mealbong.critest.SearchCriteria;
import com.project.mealbong.delivery.DeliveryDTO;
import com.project.mealbong.order.CartMapperDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface User1Mapper {

    //    @Insert("insert into user(user_id,user_password,user_name," +
//            "user_email,user_phone,user_zip," +
//            "user_address1,user_address2,user_gender,user_birth,etc1)" +
//            " values(#{user_id},#{user_password},#{user_name}," +
//            "#{user_email},#{user_phone},#{user_zip},#{user_address1},#{user_address2}," +
//            "#{user_gender},#{user_birth},#{etc1}) ")
    int user_save(User1MapperDTO user1MapperDTO);


    // @Select("select * from user")
    List<User1MapperDTO> user_list();


    // @Delete("delete from user where user_id = #{user_id}")
    int user_delete(String user_id);


    //@Select("select * from user where user_id = #{user_id}")
    User1MapperDTO find_id(String user_id);

    //    @Update("update user set user_password=#{user_password},user_name=#{user_name}, user_email=#{user_email},user_phone=#{user_phone}," +
//            "user_zip=#{user_zip}," +
//            "user_gender=#{user_gender} where user_id = #{user_id}")
    int user_update(User1MapperDTO user1MapperDTO);


    // @Select("select COUNT(*) from user where user_id = '${user_id}' ")
    int id_check(String user_id);
    // @Select("select COUNT(*) from user where user_email = '${user_email}' ")
    int email_check(String user_email);
    // @Select("select COUNT(*) from user where user_phone = '${user_phone}' ")
    int phone_check(String user_phone);

    int product_check(CartMapperDTO cartMapperDTO);

    User1MapperDTO pw_check(User1MapperDTO user1MapperDTO);

    DeliveryDTO dely_info(String user_id);

    //    ========================추가한거
// admin page
    List<User1MapperDTO> searchList(SearchCriteria cri);
    int searchTotalCount(SearchCriteria cri);

}
