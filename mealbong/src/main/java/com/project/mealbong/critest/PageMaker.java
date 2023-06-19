package com.project.mealbong.critest;

import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class PageMaker {
	private int totalRowsCount; // DB 에서 읽어와야하는 값 
	private int spageNo; // 계산
	private int epageNo; // 계산
	private int displayPageNo = 3; // 1page 당 표시 할 pageNo 갯수
	private int lastPageNo; // 출력 가능한 마지막 PageNo : 계산 필요
	private boolean prev; // 이전 PageBlock 으로
	private boolean next; // 다음 PageBlock 으로
	
	// Criteria cri; 	// ver01
	SearchCriteria cri; // ver02
	
	// ** 필요한 값 set 
	// 1) Criteria 
	// public void setCriteria(Criteria cri) { // ver01
	public void setCriteria(SearchCriteria cri) { // ver02
		this.cri = cri;
	}
	
	// 2) totalRowsCount
	public void setTotalRowsCount(int totalRowsCount) {
		this.totalRowsCount = totalRowsCount; // 데이터 전달 받음 
		calcData(); // 메서드 호출 
	}

	public void calcData() {

	    epageNo = (int)Math.ceil(cri.getCurrPage()/(double)displayPageNo) * displayPageNo;
	    spageNo = (epageNo-displayPageNo) + 1;
		
		// 3.2) lastPageNo 계산, epageNo 확인 
		lastPageNo = (int)Math.ceil(totalRowsCount/ (double)cri.getRowsPerPage());

		if (lastPageNo == 0) {
			lastPageNo = 1;
		}

		if (epageNo > lastPageNo) {
			epageNo = lastPageNo;
		}

		// 3.3) prev, next 
		prev = spageNo == 1 ? false : true;
		next = epageNo == lastPageNo ? false : true;
		
	} // calcData 

	
	public String searchQuery(int currPage) {
		// ** check 처리 ( -> MultiValueMap 으로 재탄생 )
		// => MultiValueMap 생성 
		MultiValueMap<String, String> checkMap = new LinkedMultiValueMap<String, String>();
	    // => check 에 선택한 값이 있는 경우에만
	    //    배열 check 의 원소들을 checkMap 으로		
		if(cri.getCheck() != null ) {
			for( String c : cri.getCheck()) {
				checkMap.add("check", c);
			} // for 
		} else checkMap=null; 
		
		UriComponents uriComponents = 
				UriComponentsBuilder.newInstance(). 
				queryParam("currPage", currPage).
				queryParam("rowsPerPage", cri.getRowsPerPage()).
				queryParam("searchType", cri.getSearchType()).
				queryParam("keyword", cri.getKeyword()).
				queryParams(checkMap).
				build().encode();
		return uriComponents.toString();
		
	} // searchQuery
	
} // class 
