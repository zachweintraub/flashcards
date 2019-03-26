$(function(){
  $('.term').click(function(){
    $(this).toggle();
    $(this).next().toggle();
  });
  $('.definition').click(function(){
    $(this).toggle();
    $(this).prev().toggle();
  });


});
