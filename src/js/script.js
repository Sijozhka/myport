	new WOW().init();
	var list_team = document.querySelectorAll(".ourteam__list__item");
	var tooltip_arrow = document.querySelector(".ourteam__descr__block");
	console.log(list_team);
	console.log(tooltip_arrow);
	list_team.onclick =  function(){
		this.classList.add('active_list');
		tooltip_arrow.style.left += '200px' ;

	};


