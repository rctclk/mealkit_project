package com.project.mealbong.notice;
import com.project.mealbong.board.QnaDTO;
import com.project.mealbong.critest.Criteria;
import com.project.mealbong.critest.SearchCriteria;
import com.project.mealbong.faq.FaqDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface NoticeMapper {




    List<NoticeDTO> noticeList() throws Exception;
    NoticeDTO noticeDetail(NoticeDTO dto) throws Exception;
    void noticeDelete(NoticeDTO dto) throws Exception;
    int noticeCountUp(NoticeDTO dto) throws Exception;
    void noticeInsert(NoticeDTO dto) throws Exception;

    void noticeUpdate(NoticeDTO dto) throws Exception;

    List<NoticeDTO> criList(Criteria cri);
    int criTotalCount(Criteria cri);

    // admin page
    List<NoticeDTO> searchList(SearchCriteria cri);
    int searchTotalCount(SearchCriteria cri);

}
