package com.survey.data.response;

import com.survey.common.BaseResponse;
import com.survey.data.vo.Option;

import java.util.List;

public class SelectListResponse extends BaseResponse {
	private List<Option> data;

	public List<Option> getData() {
		return data;
	}

	public void setData(List<Option> data) {
		this.data = data;
	}
}
