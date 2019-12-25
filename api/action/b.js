const Router = require("koa-router");
const router = Router();

// 权限管理-管理用户mock数据
router.post("/b", function (ctx, next) {
	ctx.set('Content-Type', 'application/json');
	var data = {
		"code": 1,
		"msg": "",
		"data": [{
			id: 1,
			name: "港口工程建筑",
			level: 4,
			fiveList: [{
					id: "11",
					name: "电力、热力、燃气及水生产和供应业",
					level: 5,
				},
				{
					id: "12",
					name: "水利和内河港口工程建筑",
					level: 5,
				},
				{
					id: "13",
					name: "水利和内河港",
					level: 5,
				},
				{
					id: "14",
					name: "ad",
					level: 5,
				},
				{
					id: "15",
					name: "ae",
					level: 5,
				},
				{
					id: "16",
					name: "af",
					level: 5,
				}
			]
		}, {
			id: 2,
			name: "我是五个字",
			level: 4,
			fiveList: [{
					id: "21",
					name: "ba",
					level: 5,
				},
				{
					id: "22",
					name: "bb",
					level: 5,
				},
				{
					id: "23",
					name: "bc",
					level: 5,
				},
				{
					id: "24",
					name: "bd",
					level: 5,
				},
				{
					id: "25",
					name: "be",
					level: 5,
				},
				{
					id: "26",
					name: "bf",
					level: 5,
				}
			]
		}, {
			id: 3,
			name: "c",
			level: 4,
			fiveList: [{
					id: "31",
					name: "ca",
					level: 5,
				},
				{
					id: "32",
					name: "cb",
					level: 5,
				},
				{
					id: "33",
					name: "cc",
					level: 5,
				},
				{
					id: "34",
					name: "cd",
					level: 5,
				},
				{
					id: "35",
					name: "ce",
					level: 5,
				},
				{
					id: "36",
					name: "cf",
					level: 5,
				}
			]
		}]
	};
	ctx.body = JSON.stringify(data);
});

exports = module.exports = router;