define(["mui"], (mui) => {
    function init(){
		addMoney()
		bind()
	}
	function bind(){
		let header=document.querySelector(".header");
		header.addEventListener("tap",(e)=>{
			let tar=e.target;
			let act=document.querySelector(".active");
			act.classList.remove("active");
			if(tar.classList.contains("add")){
				
				tar.classList.add("active")
			}else if(tar.classList.contains("curt")){
				tar.classList.add("active")
			}
		})
		
		}
	function addMoney(){
		let btn=document.querySelector(".btn");
		btn.addEventListener("tap",()=>{
			let active=document.querySelector(".active").innerHTML;
			let money=document.querySelector(".money").value;
			let people=document.querySelector(".people").value;
			let info=document.querySelector(".info").value;
			let fl=document.querySelector(".fl").value;
			console.log(money,people,info,fl)
			mui.ajax("/api/addMoney",{
				type:"post",
				data:{
					add:active.innerHTML,
					money:money,
					info:info,
					people:people,
					fl:fl
				},
				success(re){
					render(re.data)
					}
			})
		})
	}
	function render(data){
		let detail=document.querySelector('.detail');
		console.log(data)
		detail.innerHTML=`<ul>
                    <li class="date">${data.ops[0].name}</li>
                    <li class="lb">类别</li>
                    <li class="my">金额</li>
                    <li class="peo">成员</li>
                    <li class="det">备注</li>
                </ul>`
		
	}
	init()
})