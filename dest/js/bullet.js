"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),Bullet=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return _inherits(t,Base),_createClass(t,[{key:"init",value:function(){return this.ele=document.createElement("div"),gameEngine.ele.appendChild(this.ele),gameEngine.allBullets.push(this),this.ele.className="bullet",this.ele.style.left=myPlane().ele.offsetLeft+myPlane().ele.offsetWidth/2-this.ele.offsetWidth/2+1+"px",this.ele.style.top=myPlane().ele.offsetTop-this.ele.offsetHeight+"px",this}},{key:"move",value:function(){var e=this;this.timer=setInterval(function(){if(e.ele.offsetTop<-18){clearInterval(e.timer),gameEngine.ele.removeChild(e.ele);var t=gameEngine.allBullets.indexOf(e);gameEngine.allBullets.splice(t,1)}else e.ele.style.top=e.ele.offsetTop-14+"px"},30)}},{key:"boom",value:function(){var e=this;clearInterval(this.timer),this.ele.className="bullet-die";var t=["images2/die1.png","images2/die2.png"],n=0,l=setInterval(function(){n>=1?(clearInterval(l),gameEngine.ele.removeChild(e.ele)):e.ele.style.backgroundImage="url("+t[++n]+")"},200)}}]),t}();