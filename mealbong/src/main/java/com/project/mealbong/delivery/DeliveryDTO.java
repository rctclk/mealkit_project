package com.project.mealbong.delivery;

import lombok.Data;

@Data
public class DeliveryDTO {
    private int dely_number;
    private String user_id;
    private int dely_zip;
    private String dely_address1;
    private String dely_address2;
    private String dely_name;
    private String dely_phone;
    private String dely_check;
}
