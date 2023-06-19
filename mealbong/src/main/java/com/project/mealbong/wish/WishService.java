package com.project.mealbong.wish;

import com.project.mealbong.critest.Criteria;
import com.project.mealbong.critest.SearchCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishService {
    @Autowired
    private WishMapper mapper;

    public List<WishDTO> wishList(WishDTO dto) {
        try {
            return mapper.wishList(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
//
//    public WishDTO noticeDetail(WishDTO dto){
//        try {
//            return mapper.noticeDetail(dto);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//    }
//    public void noticeDelete(WishDTO dto){
//        try {
//            mapper.noticeDelete(dto);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//    }
//    public int noticeCountUp(WishDTO dto){
//        try {
//            return mapper.noticeCountUp(dto);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//    }
//    public void noticeInsert(WishDTO dto){
//        try {
//            mapper.noticeInsert(dto);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//    }
//
//    public void noticeUpdate(WishDTO dto) {
//        try {
//            mapper.noticeUpdate(dto);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//    }
//    public List<WishDTO> criList(Criteria cri) {
//        return mapper.criList(cri);
//    }
//    public int criTotalCount(Criteria cri) {
//        return mapper.criTotalCount(cri);
//    }
//
//    // admin page
//    public List<WishDTO> searchList(SearchCriteria cri) {
//        return mapper.searchList(cri);
//    }
//    public int searchTotalCount(SearchCriteria cri) {
//        return mapper.searchTotalCount(cri);
//    }

}
