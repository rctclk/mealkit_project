package com.project.mealbong.notice;

import com.project.mealbong.board.QnaDTO;
import com.project.mealbong.critest.Criteria;
import com.project.mealbong.critest.SearchCriteria;
import com.project.mealbong.faq.FaqDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NoticeService {
    @Autowired
    private NoticeMapper mapper;

    public List<NoticeDTO> noticeList() {
        try {
            return mapper.noticeList();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public NoticeDTO noticeDetail(NoticeDTO dto){
        try {
            return mapper.noticeDetail(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public void noticeDelete(NoticeDTO dto){
        try {
            mapper.noticeDelete(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public int noticeCountUp(NoticeDTO dto){
        try {
            return mapper.noticeCountUp(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public void noticeInsert(NoticeDTO dto){
        try {
            mapper.noticeInsert(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void noticeUpdate(NoticeDTO dto) {
        try {
            mapper.noticeUpdate(dto);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public List<NoticeDTO> criList(Criteria cri) {
        return mapper.criList(cri);
    }
    public int criTotalCount(Criteria cri) {
        return mapper.criTotalCount(cri);
    }

    // admin page
    public List<NoticeDTO> searchList(SearchCriteria cri) {
        return mapper.searchList(cri);
    }
    public int searchTotalCount(SearchCriteria cri) {
        return mapper.searchTotalCount(cri);
    }

}
