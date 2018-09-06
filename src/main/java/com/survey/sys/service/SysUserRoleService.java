package com.survey.sys.service;

import com.survey.sys.pojo.SysUserRole;

/**
 * Created by leo on 2017/11/23.
 */
public interface SysUserRoleService {
	int saveSysUserRole(SysUserRole userRole);

	int updateSysUserRole(SysUserRole userRole);

	SysUserRole findSysUserRoleByUid(int uid);

	int deleteSysUserRoleByUid(int uid);
}
