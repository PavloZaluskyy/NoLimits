"use strict";jQuery(document).ready(function(){var t,e=$(".m_tracker"),i=$(".m_volume");function a(i){var a=i.attr("audiourl"),l=i.text(),n=i.attr("cover"),r=i.attr("m_artist");$(".m_player .m_title").text(l),$(".m_player .m_artist").text(r),$(".m_cover").css("background-image","url(data/music/"+n+")"),(t=new Audio("data/music/"+a)).addEventListener("timeupdate",function(){var i=parseInt(t.currentTime,10);e.slider("value",i),document.getElementById("m_time").innerHTML=Math.floor(i/60)+": "+i%60}),$(".m_playlist li").removeClass("active"),i.addClass("active")}function l(){t.pause(),$(".m_play").removeClass("hidden"),$(".m_pause").removeClass("visible")}$(".m_play").click(function(i){i.preventDefault(),t.play(),e.slider("option","max",t.duration),$(".m_play").addClass("hidden"),$(".m_pause").addClass("visible")}),$(".m_pause").click(function(t){t.preventDefault(),l()}),$(".m_fwd").click(function(t){t.preventDefault(),l();var e=$(".m_playlist li.active").next();0==e.length&&(e=$(".m_playlist li:first-child")),a(e)}),$(".m_rew").click(function(t){t.preventDefault(),l();var e=$(".m_playlist li.active").prev();0==e.length&&(e=$(".m_playlist li:last-child")),a(m_prev)}),$(".m_playlist li").click(function(){l(),a($(this))}),a($(".m_playlist li:first-child")),t.volume=.8,i.slider({range:"min",min:0,max:100,value:80,start:function(t,e){},slide:function(e,i){t.volume=i.value/100},stop:function(t,e){}}),e.slider({range:"min",min:0,max:10,start:function(t,e){},slide:function(e,i){t.currentTime=i.value},stop:function(t,e){}})});