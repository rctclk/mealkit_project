package com.project.mealbong.board;

import com.project.mealbong.critest.Criteria;
import com.project.mealbong.critest.SearchCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.QAbstractAuditable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QnaService {
    @Autowired
    private QnaMapper mapper;

    public List<QnaDTO> qnaList(QnaDTO dto) {
        List<QnaDTO> qnaList = new ArrayList<QnaDTO>();

        try {
            qnaList = mapper.qnaList(dto);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return qnaList;
    }
    public QnaDTO detail(QnaDTO dto) {
       return mapper.detail(dto);
    }
    public int insert(QnaDTO dto) {
        return mapper.insert(dto);
    }
    public int update(QnaDTO dto) {
        return mapper.update(dto);
    }
    public void delete(QnaDTO dto) {
        mapper.delete(dto);
    }
    public int ainsert (QnaDTO dto) {
        return mapper.ainsert(dto);
    }
    public int adelete (QnaDTO dto) {
        return mapper.adelete(dto);
    }

    public List<QnaDTO> criList(Criteria cri) {
        return mapper.criList(cri);
    }
    public int criTotalCount(Criteria cri) {
        return mapper.criTotalCount(cri);
    }

    // ** SearchCriteria PageList
    public List<QnaDTO> searchList(SearchCriteria cri) {
        return mapper.searchList(cri);
    }
    public int searchTotalCount(SearchCriteria cri) {
        return mapper.searchTotalCount(cri);
    }

    public void adminDelete (QnaDTO dto) {
        mapper.adminDelete(dto);
    }

    public int adminUpdate (QnaDTO dto) {
        return mapper.adminUpdate(dto);
    }

}
