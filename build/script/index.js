"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.querySelector(".moreInfo").addEventListener("click", function () {
  return $('.showHistory').slideToggle(300);
});

function slowScroll(id) {
  var offset = 0;
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 500);
  return false;
}

var toggleMobileMenu = function toggleMobileMenu() {
  return $('#myLinks').slideToggle(300);
};

showPhoto(dataPhoto);

function showPhoto(data) {
  var out = '';

  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      out += "\t<img src=\"data/photo/".concat(key, "\" class=\"imgSlayder\" alt=\"\">");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  document.querySelector('.polosa').innerHTML = out;
}

var left = 0,
    right = 0;
document.querySelector('.arrowBack').addEventListener('click', function () {
  var polosa = document.querySelector('.polosa');
  if (left === 0) left = -3040;
  left += 380;
  polosa.style.left = left + 'px';
});
document.querySelector('.arrowForwardt').addEventListener('click', function () {
  var polosa = document.querySelector('.polosa');
  left -= 380;

  if (left < -2660) {
    left = 0;
  }

  polosa.style.left = left + 'px';
});