const Router = require("koa-router");
const router = Router();

// 权限管理-管理用户mock数据
router.get("/b", function (ctx, next) {
	ctx.set('Content-Type', 'application/json');
	var data = {
		"code": "0",
		"msg": "",
		"count": 25,
		"data": [{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			},{
				"id": 10000,
				"userName": "admin",
				"name":"超级管理员",
				"status": 0,
				"gender": "男",
				"content": "",
				"address": "国贸",
				"userType": "哈哈",
				"infoOrganization.oName":"政府机构",
				"userCode": "编号"
			}
		]
	};
	ctx.body = JSON.stringify(data);
});

exports = module.exports = router;
