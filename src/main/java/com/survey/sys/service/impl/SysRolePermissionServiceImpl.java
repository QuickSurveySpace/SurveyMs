package com.survey.sys.service.impl;

import com.survey.sys.dao.SysRolePermissionDAO;
import com.survey.sys.pojo.SysRolePermission;
import com.survey.sys.service.SysRolePermissionService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by leo on 2017/11/23.
 */
@Service("sysRolePermissionService")
public class SysRolePermissionServiceImpl implements SysRolePermissionService {

	@Resource
	private SysRolePermissionDAO sysRolePermissionDAO;

	@Transactional("surveyMsTx")
	@Override
	public int batchSaveSysRolePermission(List<SysRolePermission> sysRolePermissionList) {
		sysRolePermissionDAO.deleteSysRolePermissionByRole(sysRolePermissionList.get(0).getRid());
		return sysRolePermissionDAO.batchSaveSysRolePermission(sysRolePermissionList);
	}

	@Override
	public List<SysRolePermission> listSysRolePermissionByRole(Integer... roleId) {
		return sysRolePermissionDAO.listSysRolePermissionByRole(roleId);
	}
}
