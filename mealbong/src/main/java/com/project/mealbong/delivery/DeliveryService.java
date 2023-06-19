package com.project.mealbong.delivery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryService {
    @Autowired
    private DeliveryMapper mapper;

    public List<DeliveryDTO> deliveryList(DeliveryDTO dto) {
        try {
            return mapper.deliveryList(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public DeliveryDTO deliveryDetail(DeliveryDTO dto) {
        try {
          return mapper.deliveryDetail(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void deliveryDelete(DeliveryDTO dto) {
        try {
            mapper.deliveryDelete(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void deliveryInsert(DeliveryDTO dto) {
        try {
            mapper.deliveryInsert(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void deliveryUpdate(DeliveryDTO dto) {
        try {
            mapper.deliveryUpdate(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void deliveryDefault(DeliveryDTO dto) {
        try {
            mapper.deliveryDefault(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void newdeliveryInsert(DeliveryDTO dto) {
        try {
            mapper.newdeliveryInsert(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
