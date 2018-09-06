package com.survey.sys.service.impl;

import com.youguu.base.BaseTest;
import com.survey.sys.pojo.SysRolePermission;
import com.survey.sys.service.SysRolePermissionService;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class SysRolePermissionServiceImplTest extends BaseTest {

	SysRolePermissionService sysRolePermissionService = (SysRolePermissionService) getBean("sysRolePermissionService");

	@Test
	public void testBatchSaveSysRolePermission() throws Exception {
		List<SysRolePermission> list = new ArrayList<>();

		SysRolePermission permission = new SysRolePermission();
		permission.setRid(1);
		permission.setPid(1);
		permission.setCreateTime(new Date());
		list.add(permission);

		sysRolePermissionService.batchSaveSysRolePermission(list);
	}

	@Test
	public void testListSysRolePermissionByRole() throws Exception {
		List<SysRolePermission> list = sysRolePermissionService.listSysRolePermissionByRole(1,5);
		System.out.println(list.size());
	}
}