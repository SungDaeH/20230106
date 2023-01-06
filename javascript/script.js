// JavaScript Document

jQuery(document).ready(function(){

  $(".navi>li").mouseover(function(){
    $(this).find('.submenu').stop().slideDown(500);
  }).mouseout(function(){
    $(this).find('.submenu').stop().slideUp(500);
  });

  $('.imgslide a:gt(0)').hide();
  setInterval(function(){
    $('.imgslide a:first-child').fadeOut(1000)
    .next('a')
    .fadeIn(1000)
    .end('a') //이전요소 선택
    .appendTo('.imgslide');
  },3000)
})