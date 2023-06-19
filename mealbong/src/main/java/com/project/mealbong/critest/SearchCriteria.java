package com.project.mealbong.critest;

import lombok.Data;

@Data
public class SearchCriteria extends Criteria {
	
	private String searchType;
	private String keyword;
	private String[] check;
	private String code_number;
	private String code_desc;
	private String category_code;

} // class
