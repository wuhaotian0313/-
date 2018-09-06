/*
* @Author: Lenovo
* @Date:   2018-09-03 15:42:32
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-04 23:42:27
*/

window.onload=function(){
	//banner图
	let imgs=document.querySelectorAll(".banner .imgs img");
	let dots=document.querySelectorAll(".banner .dots .box");
	let banner=document.querySelectorAll(".banner")[0];
	let leftbtn=document.querySelector(".leftbtn");
	let rightbtn=document.querySelector(".rightbtn");
	let widths=parseInt(getComputedStyle(imgs[0],null).width);
	// console.log(imgs,dots,banner,leftbtn,rightbtn,widths);

	imgs[0].style.left=0;
	dots[0].classList.add("active");
	let now=0;
	let next=0;
	let flag=true;

	//自动轮播
	let t=setInterval(move, 3000);
	function move(){
		next++;
		if(next==imgs.length){
			next=0;
		}
		imgs[next].style.left=widths+"px";
		animate(imgs[now],{left:-widths});
		animate(imgs[next],{left:0},function(){
			flag=true;
		});

		dots[now].classList.remove("active");
		dots[next].classList.add("active");
		now=next;
	}
	
	
	function moveleft(){
		next--;
		if(next<0){
			next=imgs.length-1;
		}
		imgs[next].style.left=-widths+"px";
		animate(imgs[now],{left:widths});
		animate(imgs[next],{left:0},function(){
			flag=true;
		});
		dots[now].classList.remove("active");
		dots[next].classList.add("active");
		now=next;
	}

	leftbtn.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		moveleft();
	}
	rightbtn.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		move();
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move, 2000);
	}


	for(let i=0;i<dots.length;i++){
		dots[i].onclick=function(){
			for(let j=0;j<dots.length;j++){
				imgs[j].style.left=widths+"px";
				dots[j].classList.remove("active");
			}
			imgs[i].style.left=0;
			dots[i].classList.add("active");
			next=i;
			now=i;

		}

	}

	// window.onfocus=function(){
	// 	t=setInterval(move,2000);
	// }
	// window.onblur=function(){
	// 	clearInterval(t);
	// }






	//内容轮播
	
function contentbanner(imgs,dots,leftBtn,rightBtn,widths,active){

	let now1=0;
	let next1=0;
	let flag1=true;
	
	// console.log(box,leftBtn,rightBtn,dot,width1);
	imgs[0].style.left=0;
	dots[0].classList.add(active);

    function moveL() {
        next1++;
        if (next1==imgs.length){
            next1=0;
        }
            imgs[next1].style.left=widths+"px";
            animate(imgs[next1],{left:0},function(){
            	flag1=true;
            });
            animate(imgs[now1],{left:-widths});
            dots[next1].classList.add(active);
            dots[now1].classList.remove(active);
            now1=next1;
            
    }
    function moveR() {
        next1--;
        if (next1<0){
            next1=imgs.length-1;
        }
        imgs[next1].style.left=-widths+"px";
        animate(imgs[next1],{left:0},function(){
        	flag1=true;
        });
        animate(imgs[now1],{left:widths});
        dots[next1].classList.add(active);
        dots[now1].classList.remove(active);
        now1=next1;
    }
    leftBtn.onclick=function () {
    	if(!flag1){
    		return;
    	}
    	if(next1==0){
    		return;
    	}
    	flag1=false;
        moveR();
    };
    rightBtn.onclick=function () {
    	if(!flag1){
    		return;
    	}
    	if(next1==dots.length-1){
    		return;
    	}
    	flag1=false;
        moveL();
    };

    //鼠标点击
    
    for(let i=0;i<dots.length;i++){
    	dots[i].onclick=function(){
    		if(next1==i){
    			return;
    		}else if(next1>i){
    			imgs[i].style.left=`${-widths}px`;
    			animate(imgs[now1],{left:widths});
    			animate(imgs[i],{left:0});
    			dots[now1].classList.remove(active);
    			dots[i].classList.add(active)
    		}else if(next1<i){
    			imgs[i].style.left=`${widths}px`;
    			animate(imgs[i],{left:0});
    			animate(imgs[now1],{left:-widths});
    			dots[now1].classList.remove(active);
    			dots[i].classList.add(active);
    		}
    		now1=i;
    		next1=i;
    	}
    }

}

let box=document.querySelectorAll(".border .innerBox1");
let leftBtn=document.querySelectorAll(".border .tip1")[0];
let rightBtn=document.querySelectorAll(".border .tip2")[0];
let dot=document.querySelectorAll(".border .dot .box");
let width1=parseInt(getComputedStyle(box[0],null).width);
console.log(width1);
contentbanner(box,dot,leftBtn,rightBtn,width1,"boxdot");



let box2=document.querySelectorAll(".border2 .innerBox1");
let leftBtn2=document.querySelectorAll(".border2  .tip1")[0];
let rightBtn2=document.querySelectorAll(".border2  .tip2")[0];
let dot2=document.querySelectorAll(".border2  .dot .box");
let width2=parseInt(getComputedStyle(box2[0],null).width);
contentbanner(box2,dot2,leftBtn2,rightBtn2,width2,"boxdot");


let box3=document.querySelectorAll(".border3 .innerBox1");
let leftBtn3=document.querySelectorAll(".border3  .tip1")[0];
let rightBtn3=document.querySelectorAll(".border3  .tip2")[0];
let dot3=document.querySelectorAll(".border3  .dot .box");
let width3=parseInt(getComputedStyle(box2[0],null).width);
contentbanner(box3,dot3,leftBtn3,rightBtn3,width3,"boxdot");

let box4=document.querySelectorAll(".border4 .innerBox1");
let leftBtn4=document.querySelectorAll(".border4  .tip1")[0];
let rightBtn4=document.querySelectorAll(".border4  .tip2")[0];
let dot4=document.querySelectorAll(".border4  .dot .box");
let width4=parseInt(getComputedStyle(box2[0],null).width);
contentbanner(box4,dot4,leftBtn4,rightBtn4,width4,"boxdot");




//为你推荐

let out=document.querySelector(".recommend .two");
let btnleft=document.querySelector(".recommend .left");
let btnright=document.querySelector(".recommend .right");
let wh=parseInt(getComputedStyle(out,null).width)/3;
let times=0;
// console.log(out,btnleft,btnright,wh);
btnright.onclick=function(){
	times++;
	if(times==3){
		times=2;
	}
	out.style.transform=`translate(${(-wh*times)}px)`;

}
btnleft.onclick=function(){
	times--;
	if(times==-1){
		times=0;
	}
	out.style.transform=`translate(${(-wh*times)}px)`;

}


//小米闪购

let out1=document.querySelector(".shop ul");
let btnleft1=document.querySelector(".shop .left");
let btnright1=document.querySelector(".shop .right");
let wh1=parseInt(getComputedStyle(out1,null).width)/2;
let time=0;
console.log(out1,btnleft1,btnright1,wh1);
btnright1.onclick=function(){
	time++;
	if(time==2){
		time=1;
	}
	out1.style.transform=`translate(${(-wh1*time)}px)`;


}
btnleft1.onclick=function(){
	time--;
	if(time==-1){
		time=0;
	}
	out1.style.transform=`translate(${(-wh1*time)}px)`;

}


//头部购物车
 
let head=document.querySelector(".pic");
console.log(head);









}
