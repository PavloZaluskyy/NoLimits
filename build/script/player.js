"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var count = 1,
    togglePlay = true;
var audio = new Audio();
renderSongs();
document.querySelector(".iconPrevious").addEventListener('click', function () {
  prev();
  showPreview();
  play();
});
document.querySelector(".iconNext").addEventListener('click', function () {
  next();
  showPreview();
  play();
});
document.querySelector(".iconPlay").addEventListener('click', function () {
  togglePlay = !togglePlay;

  if (togglePlay !== true) {
    removeClass(".playOrPause", ".iconPlay");
    document.querySelector(".playOrPause").classList.add("iconPause");
    play();
  } else {
    removeClass(".playOrPause", ".iconPause");
    document.querySelector(".playOrPause").classList.add("iconPlay");
    pause();
  }
});
document.querySelector(".statusVolume").addEventListener('input', function (event) {
  return audio.volume = event.target.value * 0.01;
});
document.querySelector(".mainStatus").addEventListener('input', function (event) {
  return audio.currentTime = event.target.value * audio.duration / 100;
});
document.querySelector(".m_playlist").addEventListener('click', function (event) {
  count = +event.target.dataset.songid + 1;
  prev();
  showPreview();
  play();
});

function renderSongs() {
  var renderNameSong = "",
      renderImg = document.querySelector('.preview');

  var _iterator = _createForOfIteratorHelper(dataSongs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;

      if (key.id === 1) {
        renderImg.style.background = "url(data/player/img/".concat(key.urlImg, ")");
        renderNameSong += "<li data-songId=\"".concat(key.id, "\" class=\"active songs\">").concat(key.nameSong, "</li>");
      } else renderNameSong += "<li data-songId=\"".concat(key.id, "\" class=\"songs\">").concat(key.nameSong, "</li>");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  document.querySelector('.m_playlist').innerHTML = renderNameSong;
  audio.src = "data/player/songs/".concat(dataSongs[0].urlSong);
}

function removeClass(yourSelectClass, removeYourClass) {
  var selectClass = document.querySelector(yourSelectClass);
  selectClass.classList.remove(removeYourClass);
}

function play() {
  audio.play();
  setInterval(function () {
    traker(+audio.duration.toFixed(2), +audio.currentTime.toFixed(2));
    time(audio.currentTime);
  }, 1000);
}

function pause() {
  audio.pause();
}

function time(currentTime) {
  return document.querySelector('#time').innerText = "".concat(Math.floor(currentTime / 60), " : ").concat((currentTime % 60).toFixed(0), " ");
}

function showPreview() {
  var renderImg = document.querySelector('.preview');
  renderImg.style.background = "url(data/player/img/".concat(dataSongs[count - 1].urlImg, ")");
}

function traker(duration, currentTime) {
  var valueTraker = (100 * currentTime / duration).toFixed(1);

  if (valueTraker === '100.0') {
    next();
    play();
  }

  return document.querySelector('.mainStatus').value = valueTraker;
}

function next() {
  removeClass("li.active", "active");

  if (count < dataSongs.length) {
    count++;
    document.querySelector("[data-songId=\"".concat(count, "\"]")).classList.add("active");
  } else {
    count = 1;
    document.querySelector("[data-songId=\"".concat(count, "\"]")).classList.add("active");
  }

  audio.src = "data/player/songs/".concat(dataSongs[count - 1].urlSong);
  togglePlay = false;
}

function prev() {
  removeClass("li.active", "active");

  if (count > 1) {
    count--;
    document.querySelector("[data-songId=\"".concat(count, "\"]")).classList.add("active");
  } else {
    count = dataSongs.length;
    document.querySelector("[data-songId=\"".concat(count, "\"]")).classList.add("active");
  }

  togglePlay = false;
  audio.src = "data/player/songs/".concat(dataSongs[count - 1].urlSong);
}