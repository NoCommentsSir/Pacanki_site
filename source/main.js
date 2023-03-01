$(document).ready(function(){
    $(".content").slice(0, 3).show();
    $(".button").on("click", function(e){
      $(".content:hidden").slice(0, 3).slideDown();
      if($(".news-box:hidden").length == 0) {
        $(".button").text("No Content").addClass("noContent");
      } else{
        $(".button").text("Показать больше")
      }
    });  
  })
  $(document).ready(function(){
    $(".submenu").hide();
			$(".drop-down").hover(
			function(){
					$(".submenu").stop().fadeToggle(300);
				}
			);
      $(".submenu2").hide();
			$(".drop-down-next").hover(
			function(){
					$(".submenu2").stop().fadeToggle(300);
				}
			);
})
$(document).ready(function(){
    $(".part-link").hover(
      function(){
        let par = '#'+$(this).parent().attr("id");
        $(par + ' .photo').css('animation', 'pIn 1.5s ease forwards');
        $(par+ ' .photo').css('box-shadow', 'inset  0px -35px 50px 0px black');
        $(par + ' .photo').css('transition', '1.5s');
        $(par + ' .name').css('color', '#E60086');
      }, function() {
        $('.photo').css('animation', '');
        $('.photo').css('box-shadow', '');
        $('.name').css('color', 'white');
      }
    );
})
$(document).ready(function(){
  $(".participant").slice(0, 6).show();
  $(".button").on("click", function(e){
    e.preventDefault();
    $(".participant:hidden").slice(0, 6).slideDown();
    if($(".part-link:hidden").length == 0) {
      $(".button").text("No Content").addClass("noContent");
    } else{
      $(".button").text("Показать больше")
    }
  });  
})
$(document).ready(function(){
  $(".series").hover(
    function(){
      let par = '#'+$(this).attr("id");
      $(par + ' .series-photo').css('animation', 'pLn 1.5s ease forwards');
      $(par+ ' .series-photo').css('box-shadow', 'inset  0px -35px 50px 0px black');
      $(par + ' .series-photo').css('transition', '1.5s');
      $(par + ' .series-tittle').css('color', '#E60086');
    }, function() {
      $('.series-tittle').css('color', 'white');
      $('.series-photo').css('animation', '');
      $('.series-photo').css('box-shadow', '');
    }
  );
})
$(document).ready(function(){
  $(".series").slice(0, 4).show();
  $(".button").on("click", function(e){
    e.preventDefault();
    $(".series:hidden").slice(0, 4).slideDown();
    if($(".series-link:hidden").length == 0) {
      $(".button").text("No Content").addClass("noContent");
    } else{
      $(".button").text("Показать больше")
    }
  });  
})
