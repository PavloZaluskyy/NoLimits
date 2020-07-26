"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

renderSongs();

function renderSongs() {
  var renderNameSong = "",
      renderImg = document.querySelector('.pla_f');

  var _iterator = _createForOfIteratorHelper(dataSongs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;

      if (key.id === 1) {
        renderImg.style.background = "url(/data/player/img/".concat(key.urlImg, ")");
        renderNameSong += "<li data-id=\"".concat(key.id, "\" class=\"active songs\">").concat(key.nameSong, "</li>");
      } else renderNameSong += "<li data-id=\"".concat(key.id, "\" class=\"songs\">").concat(key.nameSong, "</li>");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  document.querySelector('.m_playlist').innerHTML = renderNameSong;
}

document.querySelector('.m_playlist').addEventListener('click', function (event) {
  console.log(+event.target.dataset.id - 1);
  playSong(dataSongs[+event.target.dataset.id - 1]);
});

function playSong(url) {
  var audio = new Audio("../data/player/songs/".concat(url.urlSong));
  audio.play();
}