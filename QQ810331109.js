// ==UserScript==
// @name         QQ:810331109
// @namespace    QQ:810331109
// @author       QQ:810331109
// ==/UserScript==

var allNodes=[];
var tags=['UL','DIV','CANVAS','FOOTER','FORM','TABLE'];
function getChildNode(node){
    var nodeList = node.childNodes;
    for(var i = 0;i < nodeList.length;i++){
        var childNode = nodeList[i];
        if(childNode.nodeType === 1){
        	if (tags.indexOf(childNode.nodeName) !== -1) {
        		childNode.style.opacity=0.93;
        	}
            getChildNode(childNode);
        }
    }
}
getChildNode(document.body);


document.body.style.background="rgba(120, 120, 120, 0.7)";
var canvas=document.createElement("canvas");
var child0=document.body.childNodes[0];
document.body.insertBefore(canvas,child0);
canvas.style.zIndex="-1";
canvas.style.position="fixed";
var can=canvas.getContext("2d");
var s=window.screen;//��ȡ��Ļ
var w=canvas.width=s.width;//��ȡ��Ļ����
var h=canvas.height=s.height;//��ȡ��Ļ�߶�

can.fillStyle=color2();

var words = Array(256).join("1").split("");
//����һ������256����Ԫ�ص����飬join("1")�������������Ԫ��ƴ�ӳ��ַ�����split("")���˵�������Ŀ�Ԫ��

setInterval(draw,50);

// can.font="30px ΢���ź�"; //ֻ����һ������Ч��һ��Ҫ�������Զ���
// //����ʵ�ĵ��ı������Ƶ��ı����ı�������x���ı�������y
// can.fillText("QQ:810331109",100,100);
// // setInterval(draw,50);

function draw(){
	//can.fillRect()��һ��ʵ�ľ���:����x������y�����ο������и�
	can.fillStyle='rgba(0,0,0,0.05)';
	can.fillRect(0,0,w,h);
	can.fillStyle=color2();
	words.map(function(y,n){
		text=String.fromCharCode(Math.ceil(65+Math.random()*57)); //ת��Ϊ������ֵ
		x = n*20;
		can.fillText(text,x,y);
		words[n]=( y > 758 + Math.random()*484 ? 0:y+10 );
	});//����Ԫ�ص�һ��ӳ��
}

//��ȡ�����ɫ�����ַ���
function color1(){
	var colors=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
	var color="";
	for( var i=0; i<6; i++){
		//Math.random()����һ��0-1֮���С��
		var n=Math.ceil(Math.random()*15);
		color += "" + colors[n];
		// console.log(color);
	}
	return '#'+color;
}

function color2(){
	var color = Math.ceil(Math.random()*16777215).toString(16); 
	// for( var i=color.length; i<6; i++ ){
	// 	color = '0'+color;
	// }
	while(color.length<6){
		color = '0'+color;
	}
	return '#'+color;
}

function color3(){
	return "#" + (function(color){
		return new Array(7-color.length).join("0")+color;
		//����ķ������ܹ��ַ�����6λ�����ֻ������3λ����ǰ��Ӧ�ò�����0���ڳ���Ϊ7-3=4�Ŀ�����������join����0����Ϊ['',0,'',0,'',0,''],�պ�����0����ǰ��
	})((Math.random()*0x1000000 << 0).toString(16));
	// << 0 Ҳ��һ��ȡ���ķ���
}