const navbarToggler=document.querySelector(".navbar-toggler");

const navbarLinks=document.querySelectorAll(".navbar a");


// navbarMenu.style.display="block";
// console.log(navbarLinks.addEventListener());

// navbarLinks.forEach(elem => elem.addEventListener("click",navbarLinkClick));
 
 for(let i=0;i<navbarLinks.length;i++){
 	navbarLinks[i].addEventListener("click",navbarLinkClick);
 };



 function navbarLinkClick(event){
    smoothScroll(event);
};

// use  window scroll behavior

// function smoothScroll(event){
// 	event.preventDefault();
// 	const targetId=event.currentTarget.getAttribute("href");
// 	var scrollheight;
// 	if(targetId==="#") scrollheight=0;
// 	else{
// 		scrollheight = document.querySelector(targetId).offsetTop;
// 	}
	

// 	window.scrollTo({
// 		top:scrollheight,
// 		behavior:"smooth"
// 	});
// 	console.log(scrollheight);
// }
 


  // ##### use window.requestAnimationFrame()

function smoothScroll(event){
	event.preventDefault();
	const targetId= event.currentTarget.getAttribute("href") ==="#" ? "header" : event.currentTarget.getAttribute("href");
	const targetPossition = document.querySelector(targetId).offsetTop;

	const startPossition =  window.pageYOffset;
	const distance = targetPossition-startPossition;
	// console.log(distance);
	const duration = 1000;
	let start = null;
	window.requestAnimationFrame(step);
	 function step(timestamp){
	 	if(!start) start = timestamp;
	 	const progress = timestamp-start;
	 	// window.scrollTo(0,distance*(progress/duration)+startPossition);
	 	window.scrollTo(0,linear(progress, startPossition, distance, duration));

	 	if(progress<duration)
	 		window.requestAnimationFrame(step);
	 	}
	
}
 function linear(t,b,c,d){
 	return c*t/d+b;
 }
// ?####toggler section#######

const navbarMenu=document.querySelector(".navbar ul");
const navbarBrand=document.querySelector(".navbar");
navbarToggler.addEventListener("click",navbarTogglerClick);
var bolean=true;

function navbarTogglerClick(){
	
	if(!bolean){
		navbarBrand.style.height="55px";
         bolean=true;
	}
	else{
		navbarBrand.style.height="170px";
		bolean=false;
	}
}
