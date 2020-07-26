"use strict";

/**
 *
 * HTML5 Audio player with playlist
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Script Tutorials
 * http://www.script-tutorials.com/
 */
jQuery(document).ready(function () {
  // inner variables
  var msong;
  var mtracker = $('.m_tracker');
  var mvolume = $('.m_volume');

  function m_initAudio(elem) {
    var url = elem.attr('audiourl');
    var mtitle = elem.text();
    var cover = elem.attr('cover');
    var martist = elem.attr('m_artist');
    $('.m_player .m_title').text(mtitle);
    $('.m_player .m_artist').text(martist);
    $('.m_cover').css('background-image', 'url(data/music/' + cover + ')');
    msong = new Audio('data/music/' + url); // timeupdate event listener

    msong.addEventListener('timeupdate', function () {
      var mcurtime = parseInt(msong.currentTime, 10);
      mtracker.slider('value', mcurtime); //curtime.getMinutes();

      document.getElementById("m_time").innerHTML = Math.floor(mcurtime / 60) + ': ' + mcurtime % 60;
      ;
    });
    $('.m_playlist li').removeClass('active');
    elem.addClass('active');
  }

  function m_playAudio() {
    msong.play();
    mtracker.slider("option", "max", msong.duration);
    $('.m_play').addClass('hidden');
    $('.m_pause').addClass('visible');
  }

  function m_stopAudio() {
    msong.pause();
    $('.m_play').removeClass('hidden');
    $('.m_pause').removeClass('visible');
  } // play click


  $('.m_play').click(function (e) {
    e.preventDefault();
    m_playAudio();
  }); // pause click

  $('.m_pause').click(function (e) {
    e.preventDefault();
    m_stopAudio();
  }); // forward click

  $('.m_fwd').click(function (e) {
    e.preventDefault();
    m_stopAudio();
    var mnext = $('.m_playlist li.active').next();

    if (mnext.length == 0) {
      mnext = $('.m_playlist li:first-child');
    }

    m_initAudio(mnext);
  }); // rewind click

  $('.m_rew').click(function (e) {
    e.preventDefault();
    m_stopAudio();
    var mprev = $('.m_playlist li.active').prev();

    if (mprev.length == 0) {
      mprev = $('.m_playlist li:last-child');
    }

    m_initAudio(m_prev);
  });
  /* // show playlist
   $('.pl').click(function (e) {
       e.preventDefault();
         $('.playlist').fadeIn(300);
   });*/
  // playlist elements - click

  $('.m_playlist li').click(function () {
    m_stopAudio();
    m_initAudio($(this));
  }); // initialization - first element in playlist

  m_initAudio($('.m_playlist li:first-child')); // set volume

  msong.volume = 0.8; // initialize the volume slider

  mvolume.slider({
    range: 'min',
    min: 0,
    max: 100,
    value: 80,
    start: function start(event, ui) {},
    slide: function slide(event, ui) {
      msong.volume = ui.value / 100;
    },
    stop: function stop(event, ui) {}
  }); // empty tracker slider

  mtracker.slider({
    range: 'min',
    min: 0,
    max: 10,
    start: function start(event, ui) {},
    slide: function slide(event, ui) {
      msong.currentTime = ui.value;
    },
    stop: function stop(event, ui) {}
  }); // show time song

  /* $('.time').function(){
        var second = allTime - ui.value;
        alert(second);
   };
  */
});