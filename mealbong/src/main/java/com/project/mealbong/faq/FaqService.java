package com.project.mealbong.faq;

import com.project.mealbong.critest.Criteria;
import com.project.mealbong.critest.SearchCriteria;
import com.project.mealbong.notice.NoticeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FaqService {
    @Autowired
    private FaqMapper mapper;

    public List<FaqDTO> faqList() {
        try {
            return mapper.faqList();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public FaqDTO faqDetail(FaqDTO dto){
        try {
            return mapper.faqDetail(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public void faqDelete(FaqDTO dto){
        try {
            mapper.faqDelete(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public void faqInsert(FaqDTO dto){
        try {
            mapper.faqInsert(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void faqUpdate(FaqDTO dto) {
        try {
            mapper.faqUpdate(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public List<FaqDTO> criList(Criteria cri) {
        return mapper.criList(cri);
    }
    public int criTotalCount(Criteria cri) {
        return mapper.criTotalCount(cri);
    }

    // admin page
    public List<FaqDTO> searchList(SearchCriteria cri) {
        return mapper.searchList(cri);
    }
    public int searchTotalCount(SearchCriteria cri) {
        return mapper.searchTotalCount(cri);
    }



}
