"use strict";function _createForOfIteratorHelper(r,t){var e;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(e=_unsupportedIterableToArray(r))||t&&r&&"number"==typeof r.length){e&&(r=e);var n=0,a=function(){};return{s:a,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){e=r[Symbol.iterator]()},n:function(){var r=e.next();return i=r.done,r},e:function(r){l=!0,o=r},f:function(){try{i||null==e.return||e.return()}finally{if(l)throw o}}}}function _unsupportedIterableToArray(r,t){if(r){if("string"==typeof r)return _arrayLikeToArray(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(r,t):void 0}}function _arrayLikeToArray(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function renderSongs(){var r,t="",e=document.querySelector(".pla_f"),n=_createForOfIteratorHelper(dataSongs);try{for(n.s();!(r=n.n()).done;){var a=r.value;1===a.id?(e.style.background="url(/data/player/img/".concat(a.urlImg,")"),t+='<li data-id="'.concat(a.id,'" class="active songs">').concat(a.nameSong,"</li>")):t+='<li data-id="'.concat(a.id,'" class="songs">').concat(a.nameSong,"</li>")}}catch(r){n.e(r)}finally{n.f()}document.querySelector(".m_playlist").innerHTML=t}function playSong(r){new Audio("../data/player/songs/".concat(r.urlSong)).play()}renderSongs(),document.querySelector(".m_playlist").addEventListener("click",function(r){console.log(+r.target.dataset.id-1),playSong(dataSongs[+r.target.dataset.id-1])});