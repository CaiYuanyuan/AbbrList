

//把函数，绑定到加载事件处理函数上
function addLoadEvent(func){
	//获取现有的加载时间函数的值
	var oldonload = window.onnload;

	//如果事件上没绑定函数，则直接把函数添加到加载时间上
	if(typeof oldonload != "function"){
		window.onload = func;
	}
	// 如果加载事件上，已经绑定函数，把新函数，追加在后面
	else {
		//创建一个匿名函数，来容纳多个函数
		window.onload = function(){
		oldonload();
		func();
		}
	}
}