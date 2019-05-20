window.onload = function() {



  // auto number show
	function countup(className){
		var countBlockTop = $("."+className).offset().top;
		var windowHeight = window.innerHeight;
		var show = true;
					
		$(window).scroll( function (){
			if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
				show = false;
						
				$('.'+className).spincrement({
					from: 1,
					duration: 4000,
				});
			}
		})	
	}

  $(function() {
		countup("item__title-one", $(".item__title-one").text());
    countup("item__title-one-two", $(".item__title-one-two").text());
    countup("item__title-three", $(".item__title-three").text());
    countup("item__title-four", $(".item__title-four").text());
  });




  //paralax
  function paralax(e) {
    var layer = document.querySelector(".layer");
    layer.style.transform = `translateX(${e.clientX*10/1000}px)`
  }
  document.addEventListener('mousemove', paralax);




  //open new input
  var select = document.querySelector("#select");
  select.addEventListener('change', function(){
    switch(this.value) {
      case 'telegram': 
      document.querySelector(".form__link-facebook" ).classList.remove("form__link-active");
      document.querySelector(".form__link-" + this.value).classList.add("form__link-active");
      break;
    
      case 'facebook': 
        document.querySelector(".form__link-telegram" ).classList.remove("form__link-active");
        document.querySelector(".form__link-" + this.value).classList.add("form__link-active");
      break;
  
    }
  });
  
  //open mobile menu
  var btn = document.querySelector(".header__telmenu");
  var menu = document.querySelector(".header__nav");
    btn.onclick = function() {
      menu.classList.toggle("header__nav-active");
    }


  // menu fixed
  window.onscroll = function() { 
    var fixMenu = document.querySelector(".header__nav");
      if ($(this).scrollTop() > 150){
        document.querySelector(".header__nav").style.cssText = "padding: 0px; transition: all 1s";
        document.querySelector(".header").style.cssText =" box-shadow: 0px 4px 16px black"
      }
      else{
        document.querySelector(".header__nav").style.cssText = "padding: 10px 0; transition: all 1s";
        document.querySelector(".header").style.cssText =" box-shadow: none;"
      }
  }  
};

