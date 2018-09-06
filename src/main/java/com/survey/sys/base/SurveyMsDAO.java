package com.survey.sys.base;

import com.youguu.core.dao.SqlDAO;
import org.apache.ibatis.session.SqlSessionFactory;

import javax.annotation.Resource;

public class SurveyMsDAO<T> extends SqlDAO<T> {
	public SurveyMsDAO() {
		super();
		setUseSimpleName(true);
	}

	@Resource(name = "surveyMsSessionFactory")
	@Override
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		super.setSqlSessionFactory(sqlSessionFactory);
	}

}
