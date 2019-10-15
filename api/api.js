const Router = require("koa-router");
const router = Router();
// const action = require('../security/alarm/alarmProcess')

// 引入外部js
const a = require('./action/a')
const b = require('./action/b')
const c = require('./action/c')
const d = require('./action/d')
const menuManage = require('./action/menuManage/menuManage')

router.post('/action', function (ctx, next) {
	ctx.set('Content-Type', 'application/json');
	var data = {
		code: 200,
		message: 'ok',
		data: {
			name: "action"
		}
	};
	ctx.body = JSON.stringify(data);
});

// router.use('/alarm', alarmProcess.routes());
//路由 action
router.use('/action', a.routes());
router.use('/action', b.routes());
router.use('/action', c.routes());
router.use('/action', d.routes());
router.use('/action', menuManage.routes());
exports = module.exports = router;
