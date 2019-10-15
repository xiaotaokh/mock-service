const Router = require("koa-router");
const router = Router();

const c = require('./a/c')

router.post('/a', function (ctx, next) {
	ctx.set('Content-Type', 'application/json');
	var data = {
		code: 200,
		message: 'ok',
		data: {
			name: "a"
		}
	};
	ctx.body = JSON.stringify(data);
});

// 权限管理-管理角色 mock数据
router.get("/a", function (ctx, next) {
	ctx.set('Content-Type', 'application/json');
	var data = {
		"code": "0",
		"msg": "",
		"count": 25,
		"data": [{
				"id": 10000,
				"rolesName": "超级管理员",
				"status": 0,
				"content": "可以修改一切，权利最大",
				"roleType": 1,
				"distributionOfDown": "向下分配"
			},{
				"id": 10002,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			},{
				"id": 10080,
				"rolesName": "预算单位（部门）经办人",
				"status": 0,
				"content": "普通权限",
				"roleType": 1,
				"distributionOfDown": "null"
			}
		]
	};
	ctx.body = JSON.stringify(data);
});

// action
router.use('/a', c.routes());
exports = module.exports = router;
