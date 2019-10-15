const Router = require("koa-router");
const router = Router();

// 菜单管理 mock数据
router.post("/menuManage", function (ctx, next) {
	ctx.set('Content-Type', 'application/json');
	var data = {
		"code": 200,
		"msg": "ok",
		"data": [
			{
			  id: 1,
			  date: "2016-05-01",
			  name: "王小虎",
			  address: "上海市普陀区金沙江路 1519 弄",
			  children: [
				{
				  id: 11,
				  date: "2016-05-01",
				  name: "王小虎",
				  address: "上海市普陀区金沙江路 1519 弄",
				  children: [
					{
					  id: 111,
					  date: "2016-05-01",
					  name: "王小虎",
					  address: "上海市普陀区金沙江路 1519 弄"
					},
					{
					  id: 112,
					  date: "2016-05-01",
					  name: "王小虎",
					  address: "上海市普陀区金沙江路 1519 弄"
					}
				  ]
				}
			  ]
			},
			{
			  id: 2,
			  date: "2016-05-03",
			  name: "王小虎",
			  address: "上海市普陀区金沙江路 1516 弄"
			}
		]
	};
	ctx.body = JSON.stringify(data);
});

exports = module.exports = router;
