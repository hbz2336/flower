$((()=>{
	let lis=$("#outdoor .outdoor-photos ul.cut li");
	lis.each(i=>{
		lis[i].style.left=`${Math.ceil(Math.random()*1200)}px`;
		lis[i].style.top=`${Math.ceil(Math.random()*500)}px`;//涓烘瘡涓猯i闅忔満鐢熸垚涓€涓綅缃�	
	});

	$(window).scroll(()=>{
		(()=>{
			let wTop=$(window).scrollTop();
			let wH=$(window).height();
			let viewBottom=wTop+wH;
			let lis=$(`#outdoor .outdoor-photos ul.cut li`);
			let ulCutTop=$(`#outdoor .outdoor-photos ul.cut`).offset().top;
			if(viewBottom>ulCutTop+200){
				lis.each(i=>lis[i].style.opacity=1);
				let arr1=$("li").filter(".o1");	
				arr1[0].style.left=0;
				arr1[0].style.top=0;
				arr1[1].style.left=`133px`;
				arr1[1].style.top=0;
				arr1[2].style.left=`267px`;
				arr1[2].style.top=0;
				arr1[3].style.left=0;
				arr1[3].style.top=`90px`;
				arr1[4].style.left=`133px`;
				arr1[4].style.top=`90px`;
				arr1[5].style.left=`267px`;
				arr1[5].style.top=`90px`;
				arr1[6].style.left=0;
				arr1[6].style.top=`180px`;
				arr1[7].style.left=`133px`;
				arr1[7].style.top=`180px`;
				arr1[8].style.left=`267px`;
				arr1[8].style.top=`180px`;

				let arr2=$("li").filter(".o2");	
				arr2[0].style.left=`420px`;
				arr2[0].style.top=0;
				arr2[1].style.left=`553px`;
				arr2[1].style.top=0;
				arr2[2].style.left=`687px`;
				arr2[2].style.top=0;
				arr2[3].style.left=`420px`;
				arr2[3].style.top=`90px`;
				arr2[4].style.left=`553px`;
				arr2[4].style.top=`90px`;
				arr2[5].style.left=`687px`;
				arr2[5].style.top=`90px`;
				arr2[6].style.left=`420px`;
				arr2[6].style.top=`180px`;
				arr2[7].style.left=`553px`;
				arr2[7].style.top=`180px`;
				arr2[8].style.left=`687px`;
				arr2[8].style.top=`180px`;

				let arr3=$("li").filter(".o3");		
				arr3[0].style.left=`840px`;
				arr3[0].style.top=0;
				arr3[1].style.left=`973px`;
				arr3[1].style.top=0;
				arr3[2].style.left=`1107px`;
				arr3[2].style.top=0;
				arr3[3].style.left=`840px`;
				arr3[3].style.top=`90px`;
				arr3[4].style.left=`973px`;
				arr3[4].style.top=`90px`;
				arr3[5].style.left=`1107px`;
				arr3[5].style.top=`90px`;
				arr3[6].style.left=`840px`;
				arr3[6].style.top=`180px`;
				arr3[7].style.left=`973px`;
				arr3[7].style.top=`180px`;
				arr3[8].style.left=`1107px`;
				arr3[8].style.top=`180px`;

				let arr4=$("li").filter(".o4");
				arr4[0].style.left=0;
				arr4[0].style.top=`310px`;
				arr4[1].style.left=`133px`;
				arr4[1].style.top=`310px`;
				arr4[2].style.left=`267px`;
				arr4[2].style.top=`310px`;
				arr4[3].style.left=0;
				arr4[3].style.top=`400px`;
				arr4[4].style.left=`133px`;
				arr4[4].style.top=`400px`;
				arr4[5].style.left=`267px`;
				arr4[5].style.top=`400px`;
				arr4[6].style.left=0;
				arr4[6].style.top=`490px`;
				arr4[7].style.left=`133px`;
				arr4[7].style.top=`490px`;
				arr4[8].style.left=`267px`;
				arr4[8].style.top=`490px`;

				let arr5=$("li").filter(".o5");
				arr5[0].style.left=`420px`;
				arr5[0].style.top=`310px`;
				arr5[1].style.left=`553px`;
				arr5[1].style.top=`310px`;
				arr5[2].style.left=`687px`;
				arr5[2].style.top=`310px`;
				arr5[3].style.left=`420px`;
				arr5[3].style.top=`400px`;
				arr5[4].style.left=`553px`;
				arr5[4].style.top=`400px`;
				arr5[5].style.left=`687px`;
				arr5[5].style.top=`400px`;
				arr5[6].style.left=`420px`;
				arr5[6].style.top=`490px`;
				arr5[7].style.left=`553px`;
				arr5[7].style.top=`490px`;
				arr5[8].style.left=`687px`;
				arr5[8].style.top=`490px`;

				let arr6=$("li").filter(".o6");
				arr6[0].style.left=`840px`;
				arr6[0].style.top=`310px`;
				arr6[1].style.left=`973px`;
				arr6[1].style.top=`310px`;
				arr6[2].style.left=`1107px`;
				arr6[2].style.top=`310px`;
				arr6[3].style.left=`840px`;
				arr6[3].style.top=`400px`;
				arr6[4].style.left=`973px`;
				arr6[4].style.top=`400px`;
				arr6[5].style.left=`1107px`;
				arr6[5].style.top=`400px`;
				arr6[6].style.left=`840px`;
				arr6[6].style.top=`490px`;
				arr6[7].style.left=`973px`;
				arr6[7].style.top=`490px`;
				arr6[8].style.left=`1107px`;
				arr6[8].style.top=`490px`;
				setTimeout(()=>$("#outdoor>.outdoor-photos>div").css("opacity","1"),2500);
			}
		})()
	})

})());
