package com.project.mealbong.faq;
import com.project.mealbong.board.QnaDTO;
import com.project.mealbong.critest.Criteria;
import com.project.mealbong.critest.SearchCriteria;
import com.project.mealbong.notice.NoticeDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FaqMapper {

    List<FaqDTO> faqList() throws Exception;
    FaqDTO faqDetail(FaqDTO dto) throws Exception;
    void faqDelete(FaqDTO dto) throws Exception;
    void faqInsert(FaqDTO dto) throws Exception;
    void faqUpdate(FaqDTO dto) throws Exception;
    List<FaqDTO> criList(Criteria cri);
    int criTotalCount(Criteria cri);


    // admin page
    List<FaqDTO> searchList(SearchCriteria cri);
    int searchTotalCount(SearchCriteria cri);
}
