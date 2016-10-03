/*
window.onload = function()
{
    displayAbbreviations();
}
*/
//������ӵ������¼���
addLoadEvent(displayAbbreviations);


//���Դ����
function displayAbbreviations(){
   
  //������
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
  
  
  
  
  //��ȡ���Դ��� Ԫ�ؽڵ�
  var abbr = document.getElementsByTagName("abbr");
  
  //���������Դ������ֹ����
  /*abbr.length < 1�������ͬ����childNodes��
  ����ΪIE������abbr��Ԫ�ص�λ,
  ��ͳ�������ӽڵ�ĸ���ʱ���᷵��0,
  ��IE������£�����Ĵ����ǲ���ִ�е�*/
 
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
  
  //���������б�����
  var defs = new Array();
  
  //�����������Դ���Ԫ��
  for (var i=0;i<abbr.length ;i++ )
  {
	  //��ȡtitle����ֵ���ı�ֵ
	  var definition = abbr[i].getAttribute("title");
	  var key = abbr[i].lastChild.nodeValue;
	 
	  //�����б���䣺�±�+Ԫ��ֵ
	  defs[key] = definition;
  }
 
  //���������б�
  var dlist = document.createElement("dl");
  
  //���±�˳�򣬽��������б�
  for (key in defs )
  {
	  //ȡ�������е�ֵ
	  var definition = defs[key];

	  //�����б�ı����Լ���������ı�
	  var dtitle = document.createElement("dt");
	  var dtitle_text = document.createTextNode(key);
	  dtitle.appendChild(dtitle_text);

	  //�����б���Ķ����������Լ��������ı�
	  var ddesc = document.createElement("dd");
	  var ddesc_text = document.createTextNode(definition);
	  ddesc.appendChild(ddesc_text);

	  //���б������б��������ӵ��б���
	  dlist.appendChild(dtitle);
	  dlist.appendChild(ddesc);	 	
  }
  //��������
  var header = document.createElement("h2");
  var header_text = document.createTextNode("Abbreviations");
  //�ѱ�����ı����ӵ�������
  header.appendChild(header_text);
  
  //�ѱ�����б������ĵ�bodyԪ����
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(header);
  body.appendChild(dlist);
}