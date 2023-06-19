package com.project.mealbong.board;

import com.project.mealbong.critest.Criteria;
import com.project.mealbong.critest.SearchCriteria;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface QnaMapper {
    List<QnaDTO> qnaList(QnaDTO dto) throws Exception;

    int insert (QnaDTO dto);

    QnaDTO detail(QnaDTO dto);

    int update(QnaDTO dto);

    void delete(QnaDTO dto);

    int ainsert(QnaDTO dto);

    int adelete(QnaDTO dto);

    List<QnaDTO> criList(Criteria cri);
    int criTotalCount(Criteria cri);

    List<QnaDTO> searchList(SearchCriteria cri);
    int searchTotalCount(SearchCriteria cri);

    void adminDelete (QnaDTO dto);

    int adminUpdate(QnaDTO dto);
}
