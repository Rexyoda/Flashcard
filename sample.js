'use strict';
window.onload=()=>{
	const words=[
		['稼ぐ','earn'],
		['運賃','fare'],
		['正式な','formal'],
		['合う','suit'],
		['心配して','worried'],
		['気付いて','aware'],
		['残額','balance'],
		['中身','content'],
		['持ち上げる','lift'],
		['行事','occasion'],
	];

	const ja =document.getElementById('ja');
	const entry=document.getElementById('entry');
	const btn=document.getElementById('btn');
	const result=document.getElementById('result');
	let index=0;
	let correct=0;

	btn.addEventListener('click',()=>{
		let ans=entry.value.toLowerCase();
		let msg='';
		if (ans == words[index][1]){
			correct++;
			msg='正解!';
		    }else{
			msg=`不正解!${words[index][0]}の英単語は${words[index][1]}`;
		}

		if(index==words.length-1){
			msg+=`<br>全${animals.length}問中,${correct}問正解`;
			index=-1;
		}

		result.innerHTML=msg;
		result.classList.remove('fade');
		setTimeout(function(){
			result.classList.add('fade');
		},1500);
		setItem(++index);
		entry.focus();
	});
    
	function setItem(index){
		entry.value='';
		ja.textContent=words[index][0];
	}
	setItem(index);
}
