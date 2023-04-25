const hx = require('hbuilderx');

function login() {
	hx.window.showFormDialog({
	    formItems: [
	        {
	            type: "input",
	            name: "projectName",
	            label: "项目名称",
	            placeholder: '请输入项目名称...',
	            value: ""
	        },
			{
			  type: "comboBox",
			  placeholder: "请输入",
			  name: "functionNameInput",
			  editable: true,
			  items: ["item1","item2","item3"],
			  text: "item1"
			}	
	    ],
	    title: "showFormDialog",
	    subtitle: "演示插件API hx.window.showFormDialog使用",
	    width: 480,
	    height: 180,
	    submitButtonText: "提交(&S)",
	    cancelButtonText: "取消(&C)",
	    validate: function(formData) {
	        if (!formData.projectName) {
	            this.showError("项目名称不能为空，请填写");
	            return false;
	        };
	        return true;
	    },
	    onOpened: function() { },
	    onChanged: function(field, value) { 
			console.log(field);
		}
	}).then((res) => {
	    console.log("返回结果：", JSON.stringify(res));
	});
}


function logout() {
   hx.window.showInformationMessage('你好，这是我的第一个插件扩展。');
}
module.exports = {
    login,
    logout
};