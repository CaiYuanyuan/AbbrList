

//�Ѻ������󶨵������¼���������
function addLoadEvent(func){
	//��ȡ���еļ���ʱ�亯����ֵ
	var oldonload = window.onnload;

	//����¼���û�󶨺�������ֱ�ӰѺ�����ӵ�����ʱ����
	if(typeof oldonload != "function"){
		window.onload = func;
	}
	// ��������¼��ϣ��Ѿ��󶨺��������º�����׷���ں���
	else {
		//����һ�����������������ɶ������
		window.onload = function(){
		oldonload();
		func();
		}
	}
}