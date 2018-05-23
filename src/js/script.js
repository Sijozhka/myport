	new WOW().init();
	var list_team = document.querySelectorAll(".ourteam__list__item");
	var descr = document.querySelector(".ourteam__descr__block");
	
	var classNameDefault = 'ourteam__descr__block';
	[].forEach.call(list_team,function(el){
		el.addEventListener('click', function (e) {
			descr.className = classNameDefault + ' ' +this.dataset.name;
    		
    	});
	});

	


