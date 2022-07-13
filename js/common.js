$(window).on("load",function(){
  $("#title").delay(1800).animate({opacity: 0},1000).animate({width:"0"},0)
  $(".tit1").delay(300).animate({opacity:1},100).addClass("rol").delay(1200).animate({opacity: 0},0).delay(1200).animate({width:"0"},0)
  $(".tit2").delay(300).animate({opacity:1},100).addClass("roll").delay(1200).animate({opacity: 0},0).delay(1200).animate({width:"0"},0)
  $(".tit3").delay(330).animate({opacity:1},300).delay(2000).animate({opacity: 0},1200).delay(900).animate({width:"0"},0)
  $(".tit4").delay(730).animate({opacity:1},300).delay(1600).animate({opacity: 0},1200).delay(900).animate({width:"0"},0)
  $(".tit5").delay(1130).animate({opacity:1},300).delay(1000).animate({opacity: 0},1200).delay(900).animate({width:"0"},0)
  $("#cart").delay(2200).animate({opacity:1},1000)
  $(".head1").addClass("rot")
  $(".head2").addClass("rot")
})

$(window).scroll(function(){
  if($("body,html").scrollTop() >= 50){
    $(".head3").css({width:0,opacity:0}).removeClass("hed3")
  } else {
    $(".head3").css({width:200,opacity:1}).addClass("hed3")
  }
})
$(window).scroll(function(){
  if($("body,html").scrollTop() >= 400 && $("body,html").scrollTop() <= 1499){
    $("#top").animate({opacity:1},0)
    $("#top").removeClass("top1")
    $("#top").addClass("top2")
  } else if($("body,html").scrollTop() >= 1500 && $("body,html").scrollTop() <= 6599){
    $("#top").animate({opacity:1},0)
    $("#top").removeClass("top2")
    $("#top").addClass("top1")
  } else if ($("body,html").scrollTop() <= 399){
    $("#top").animate({opacity:0},0)
  } else if ($("body,html").scrollTop() >= 6600){
    $("#top").animate({opacity:1},0)
    $("#top").removeClass("top1")
    $("#top").addClass("top2")
  }
})

$(window).scroll(function(){
  if($("body,html").scrollTop() >= 400){
    $("table").animate({opacity: 1},1000);
    $(".cert").animate({opacity:1},1000)
    $("#cert").addClass("hp");
  }
})

$(window).scroll(function(){
  if($("body,html").scrollTop() >= 700 && $("body,html").scrollTop() <= 1800 ){
    $("#ab").css({opacity:1})
  }
})

$(window).scroll(function(){
  if($("body,html").scrollTop() >= 1400){
    $("#port").animate({opacity:1},500).addClass("ht");
  }
})
$(window).scroll(function(){
  if($("body,html").scrollTop() >= 700 && $("body,html").scrollTop() <= 1400 ){
    $("#cart ul li a").css({color:"#797979"}).removeClass("don")
    $("#cart ul li a:eq(0)").css({color:"#fff"}).addClass("don")
  } else if($("body,html").scrollTop() >= 1401 && $("body,html").scrollTop() <= 2100){
    $("#cart ul li a").css({color:"#797979"}).removeClass("don")
    $("#cart ul li a:eq(1)").css({color:"#fff"}).addClass("don")
  } else if($("body,html").scrollTop() >= 2101 && $("body,html").scrollTop() <= 5100){
    $("#cart ul li a").css({color:"#797979"}).removeClass("don")
    $("#cart ul li a:eq(2)").css({color:"#fff"}).addClass("don")
  } else if($("body,html").scrollTop() >= 5101){
    $("#cart ul li a").css({color:"#797979"}).removeClass("don")
    $("#cart ul li a:eq(3)").css({color:"#fff"}).addClass("don")
  } else if($("body,html").scrollTop() <= 699){
    $("#cart ul li a").css({color:"#fff"}).removeClass("don")
  }
})

$(window).on("load",function(){

  $(".hd1").delay(2400).animate({opacity:1},500)
  $(".hd2").delay(2500).animate({opacity:1},500)
  $(".hd3").delay(2600).animate({opacity:1},500)
  $(".hd4").delay(2700).animate({opacity:1},500)
  $(".hd5").delay(2800).animate({opacity:1},500)
  $(".hd6").delay(2900).animate({opacity:1},500)
  $(".hd7").delay(3000).animate({opacity:1},500)
  $(".hd8").delay(3100).animate({opacity:1},500)
  $(".hd9").delay(3200).animate({opacity:1},500)
  $(".hd10").delay(3300).animate({opacity:1},500)
  $(".hd11").delay(3400).animate({opacity:1},500)
  $(".hd12").delay(3500).animate({opacity:1},500)
  $(".hd13").delay(3600).animate({opacity:1},500)
  $(".hd14").delay(3700).animate({opacity:1},500)
  $(".hd15").delay(3800).animate({opacity:1},500)
  $(".hd16").delay(3900).animate({opacity:1},500)
  $(".hd17").delay(4000).animate({opacity:1},500)
  $(".hd18").delay(4100).animate({opacity:1},500)
  $(".hd19").delay(4200).animate({opacity:1},500)
  $(".hd20").delay(4300).animate({opacity:1},500)
  $(".hd21").delay(4400).animate({opacity:1},500)
  $(".hd22").delay(4500).animate({opacity:1},500)
})


$(document).ready(function(){
  $(".btn:eq(0)").on("click", function(){
    $(".btn").removeClass("on")
    $(".btn1").addClass("on")
    $(".dess").css({display:"none"})
    $(".de1").css({display:"block"})
  })
  $(".btn:eq(1)").on("click", function(){
    $(".btn").removeClass("on")
    $(".btn2").addClass("on")
    $(".dess").css({display:"none"})
    $(".de2").css({display:"block"})
  })
  $(".btn:eq(2)").on("click", function(){
    $(".btn").removeClass("on")
    $(".btn3").addClass("on")
    $(".dess").css({display:"none"})
    $(".de3").css({display:"block"})
  })

  $(".about1").on("mouseenter",function(){
    $("#about1").removeClass("html1")
    $("#about1").removeClass("js1")
    $("#about1").removeClass("jq1")
    $("#about1").addClass("photo1")
  })
  $(".about2").on("mouseenter",function(){
    $("#about1").removeClass("photo1")
    $("#about1").removeClass("js1")
    $("#about1").removeClass("jq1")
    $("#about1").addClass("html1")
  })
  $(".about3").on("mouseenter",function(){
    $("#about1").removeClass("html1")
    $("#about1").removeClass("photo1")
    $("#about1").removeClass("jq1")
    $("#about1").addClass("js1")
  })
  $(".about4").on("mouseenter",function(){
    $("#about1").removeClass("html1")
    $("#about1").removeClass("js1")
    $("#about1").removeClass("photo1")
    $("#about1").addClass("jq1")
  })
  $(".about").on("mouseleave",function(){
    $("#about1").removeClass("html1")
    $("#about1").removeClass("js1")
    $("#about1").removeClass("photo1")
    $("#about1").removeClass("jq1")
  })
})
