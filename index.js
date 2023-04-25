var hx = require("hbuilderx");
const authorize = require('./action/auth/index.ts');
//该方法将在插件激活的时候调用
function activate(context) {
	let laf_login = hx.commands.registerCommand('lafcloud.lafLogin', () => {
		authorize.login();
		
	});
	//订阅销毁钩子，插件禁用的时候，自动注销该command。
	context.subscriptions.push(laf_login);
	
	let bind_cloud = hx.commands.registerCommand('lafcloud.bindCloud', () => {
		authorize.logout();
	});
	//订阅销毁钩子，插件禁用的时候，自动注销该command。
	context.subscriptions.push(bind_cloud);
}
//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {

}
module.exports = {
	activate,
	deactivate
}
