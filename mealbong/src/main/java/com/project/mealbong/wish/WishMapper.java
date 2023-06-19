package com.project.mealbong.wish;
import com.project.mealbong.critest.Criteria;
import com.project.mealbong.critest.SearchCriteria;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface WishMapper {

    List<WishDTO> wishList(WishDTO dto) throws Exception;


//    List<WishDTO> noticeList() throws Exception;
//    WishDTO noticeDetail(WishDTO dto) throws Exception;
//    void noticeDelete(WishDTO dto) throws Exception;
//    int noticeCountUp(WishDTO dto) throws Exception;
//    void noticeInsert(WishDTO dto) throws Exception;
//
//    void noticeUpdate(WishDTO dto) throws Exception;
//
//    List<WishDTO> criList(Criteria cri);
//    int criTotalCount(Criteria cri);
//
//    // admin page
//    List<WishDTO> searchList(SearchCriteria cri);
//    int searchTotalCount(SearchCriteria cri);

}
