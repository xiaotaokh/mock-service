const Router = require("koa-router");
const router = Router();

// 权限管理-单位管理mock数据
router.get("/d", function (ctx, next) {
	ctx.set('Content-Type', 'application/json');
	var data = {
		"code": "0",
		"msg": "",
		"count": 62,
		"data": [{
				"deptno": 001001,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001002,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"政协办",                       // 单位名称
				// 单位简介
				"intro": "我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的我是政协办的",      
				"type": "行政单位",						// 单位类型
				"superior": "全额事业",					// 上级单位
				"location": "立水桥",					// 地址
			},{
				"deptno": 001003,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001004,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001005,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			},{
				"deptno": 001006,   					// 单位编码
				"state": 0,       						// 单位状态
				"oName":"人大办",                       // 单位名称
				"intro": "我是人大办的我是人大办的",      // 单位简介
				"type": "行政单位",						// 单位类型
				"superior": "参公事业",					// 上级单位
				"location": "国贸",						// 地址
			}
		]
	};
	ctx.body = JSON.stringify(data);
});

exports = module.exports = router;
