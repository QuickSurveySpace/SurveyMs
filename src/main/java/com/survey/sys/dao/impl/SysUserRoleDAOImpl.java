package com.survey.sys.dao.impl;

import com.survey.sys.base.SurveyMsDAO;
import com.survey.sys.dao.SysUserRoleDAO;
import com.survey.sys.pojo.SysUserRole;
import org.springframework.stereotype.Repository;

/**
 * Created by leo on 2017/11/23.
 */
@Repository
public class SysUserRoleDAOImpl extends SurveyMsDAO<SysUserRole> implements SysUserRoleDAO {
	@Override
	public int saveSysUserRole(SysUserRole userRole) {
		return this.insert(userRole);
	}

	@Override
	public int updateSysUserRole(SysUserRole userRole) {
		return this.update(userRole);
	}

	@Override
	public SysUserRole findSysUserRoleByUid(int uid) {
		return this.findUniqueBy("selectByUid", uid);
	}

	@Override
	public int deleteSysUserRoleByUid(int uid) {
		return this.deleteBy("deleteByUid", uid);
	}
}
