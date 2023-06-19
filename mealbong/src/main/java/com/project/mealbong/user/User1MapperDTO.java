package com.project.mealbong.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User1MapperDTO {

    private String user_id;
    private String user_password;
    private String user_name;
    private String user_email;
    private String user_phone;
    private int user_zip;
    private String user_address1;
    private String user_address2;
    private String user_gender;
    private String user_birth;
    private LocalDate user_date;
    private String user_status;
    private String etc1;
}
