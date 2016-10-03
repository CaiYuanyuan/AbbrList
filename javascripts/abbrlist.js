/*
window.onload = function()
{
    displayAbbreviations();
}
*/
//函数添加到加载事件中
addLoadEvent(displayAbbreviations);


//缩略词语表
function displayAbbreviations(){
   
  //对象检查
  if (!document.getElementsByTagName)
  {
	  return false;
  }
  if (!document.createElement)
  {
	  return false;
  }
  if (!document.createTextNode)
  {
	  return false;
  }  
  
  
  
  
  //获取缩略词语 元素节点
  var abbr = document.getElementsByTagName("abbr");
  
  //不存在缩略词语，就终止函数
  /*abbr.length < 1与下面等同，加childNodes，
  是因为IE不承认abbr的元素地位,
  在统计它的子节点的个数时，会返回0,
  在IE浏览器下，下面的代码是不会执行的*/
 
  /*if (abbr.childNodes.length < 1)
  {
	  //return false;
	  continue;

  }
  */
  if (abbr.length < 1)
  {
	  return false;
	  

  }
  
  //声明定义列表数组
  var defs = new Array();
  
  //遍历所有缩略词语元素
  for (var i=0;i<abbr.length ;i++ )
  {
	  //提取title属性值和文本值
	  var definition = abbr[i].getAttribute("title");
	  var key = abbr[i].lastChild.nodeValue;
	 
	  //定义列表填充：下标+元素值
	  defs[key] = definition;
  }
 
  //创建定义列表
  var dlist = document.createElement("dl");
  
  //按下标顺序，建立定义列表
  for (key in defs )
  {
	  //取出数组中的值
	  var definition = defs[key];

	  //定义列表的标题以及标题里的文本
	  var dtitle = document.createElement("dt");
	  var dtitle_text = document.createTextNode(key);
	  dtitle.appendChild(dtitle_text);

	  //定义列表里的定义描述，以及包含的文本
	  var ddesc = document.createElement("dd");
	  var ddesc_text = document.createTextNode(definition);
	  ddesc.appendChild(ddesc_text);

	  //把列表标题和列表描述，加到列表上
	  dlist.appendChild(dtitle);
	  dlist.appendChild(ddesc);	 	
  }
  //创建标题
  var header = document.createElement("h2");
  var header_text = document.createTextNode("Abbreviations");
  //把标题的文本，加到标题里
  header.appendChild(header_text);
  
  //把标题和列表，插入文档body元素中
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(header);
  body.appendChild(dlist);
}