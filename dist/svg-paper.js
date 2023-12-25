(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SvgPaper"] = factory();
	else
		root["SvgPaper"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/adjust-text.js":
/*!*******************************!*\
  !*** ./js/src/adjust-text.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = (function (selector, config) {
  var paperPixelRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var $this = document.querySelector(selector);
  if (!$this) {
    return;
  }

  // shrink text element to specified width
  if (!!config['textLength']) {
    // for firefox
    // @see https://developer.mozilla.org/ja/docs/Web/API/Element/clientWidth
    $this.style.display = 'block';
    if ($this.getBoundingClientRect().width * paperPixelRatio > config.textLength) {
      $this.querySelector('tspan').setAttribute('textLength', config.textLength);
      $this.querySelector('tspan').setAttribute('lengthAdjust', 'spacingAndGlyphs');

      // for firefox
      // @see https://bugzilla.mozilla.org/show_bug.cgi?id=890692
      $this.setAttribute('textLength', config.textLength);
      $this.setAttribute('lengthAdjust', 'spacingAndGlyphs');
    }
  }

  // alignment
  if (!!config['text-anchor'] && config['text-anchor'] !== 'start') {
    var w = parseFloat(config['textLength']);
    var x = 0;
    var y = 0;
    if ($this.getAttribute('transform')) {
      x = parseFloat($this.getAttribute('transform').match(/translate\((\S+) .+\)/)[1]);
      y = parseFloat($this.getAttribute('transform').match(/translate\(\S+ (.+)\)/)[1]);
    }
    if (config['text-anchor'] === 'middle') {
      $this.setAttribute('transform', "translate(".concat(x + w / 2, " ").concat(y, ")"));
    }
    if (config['text-anchor'] === 'end') {
      $this.setAttribute('transform', "translate(".concat(x + w, " ").concat(y, ")"));
    }
    $this.setAttribute('text-anchor', config['text-anchor']);
  }
});

/***/ }),

/***/ "./js/src/adjust-textarea.js":
/*!***********************************!*\
  !*** ./js/src/adjust-textarea.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_split_string_by_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/split-string-by-width */ "./js/src/utility/split-string-by-width.js");
/* harmony import */ var _utility_fix_text_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility/fix-text-transform */ "./js/src/utility/fix-text-transform.js");




/* harmony default export */ __webpack_exports__["default"] = (function (textSvg, textContent, width, height) {
  var lineHeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.2;
  var paddingX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.5;
  var paddingY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0.5;
  var nowrap = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  if (!textSvg.match(new RegExp('<text [^>]*font-size="\\d+"[^>]*><tspan( [^>]*>|>)[^<>]*</tspan></text>'))) {
    console.error('Invalid svg string of text element', textSvg);
    return textSvg;
  }
  var originalFontSize = parseInt(textSvg.match(/.+font-size="(\d+)".+/)[1]);
  var fontSize = originalFontSize;

  // find the right-size font-size
  var physicalLines = textContent.split("\n");
  var logicalLines = [];
  var _loop = function _loop() {
    var maxRows = Math.floor((height - 2 * fontSize * paddingY) / (fontSize * lineHeight));
    var maxColumns = Math.floor((width - 2 * fontSize * paddingX) / fontSize); // doesn't care about proportional font

    if (nowrap) {
      logicalLines = physicalLines;
    } else {
      logicalLines = [];
      physicalLines.forEach(function (line) {
        logicalLines = logicalLines.concat(Object(_utility_split_string_by_width__WEBPACK_IMPORTED_MODULE_0__["default"])(line, maxColumns * 2)); // 2 single-byte characters can be placed in 1 column
      });
    }
    if (logicalLines.length > maxRows) {
      fontSize *= 0.95;
    } else {
      return 1; // break
    }
  };
  while (true) {
    if (_loop()) break;
  }

  // raise y-coordinate up because y-coordinate of <text transform="translate(x y)"> or <tspan y=""> is on lower base of text object
  var adjustY = fontSize - originalFontSize;
  var adjustedTextSvg = Object(_utility_fix_text_transform__WEBPACK_IMPORTED_MODULE_1__["default"])(textSvg);
  adjustedTextSvg = adjustedTextSvg.replace(new RegExp('<tspan(.|\\s)+</text>'), '');
  adjustedTextSvg = adjustedTextSvg.replace(new RegExp('font-size="\\d+"'), "font-size=\"".concat(fontSize, "\""));
  adjustedTextSvg += '{tspan}</text>';
  var tspan = '';
  var x = fontSize * paddingX;
  logicalLines.forEach(function (line, i) {
    var y = adjustY + fontSize * (paddingY + i * lineHeight);
    tspan += "<tspan x=\"".concat(x, "\" y=\"").concat(y, "\">").concat(line, "</tspan>");
  });
  adjustedTextSvg = adjustedTextSvg.replace('{tspan}', tspan);
  return adjustedTextSvg;
});

/***/ }),

/***/ "./js/src/svg-paper.js":
/*!*****************************!*\
  !*** ./js/src/svg-paper.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SvgPaper; });
/* harmony import */ var _adjust_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adjust-text */ "./js/src/adjust-text.js");
/* harmony import */ var _adjust_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adjust-textarea */ "./js/src/adjust-textarea.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var SvgPaper = /*#__PURE__*/function () {
  function SvgPaper() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.paper svg';
    _classCallCheck(this, SvgPaper);
    if (!document.querySelector(selector)) {
      throw new Error('Invalid selector');
    }
    this.selector = selector;
    this.svg = document.querySelector(selector).outerHTML.replace(/[\r|\n]+/g, "\n");
    this.adjustTextQueries = [];
  }
  _createClass(SvgPaper, [{
    key: "replace",
    value: function replace(search, replacement) {
      if (search instanceof RegExp) {
        search = new RegExp(search.source, search.flags.replace(/g/g, '') + 'g');
      } else {
        search = search.replace(/[\r|\n]+/g, "\n");

        // @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
        search = search.replace(/[.*+?^=!:${}()|[\]\/\\]/g, '\\$&');
        search = new RegExp(search, 'g');
      }

      // cast to string
      replacement = replacement !== undefined && replacement !== null ? replacement + '' : '';
      replacement = replacement.replace(/[\r|\n]+/g, "\n");
      this.svg = this.svg.replace(search, replacement);
      return this;
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(selector, property, value) {
      var doc = new DOMParser().parseFromString(this.svg, 'text/html');
      var textElement = doc.querySelector(selector);
      if (!textElement) {
        return this;
      }
      var textSvg = textElement.outerHTML;
      textElement.setAttribute(property, value);
      var replacedTextSvg = textElement.outerHTML;
      this.replace(textSvg, replacedTextSvg);
      return this;
    }
  }, {
    key: "adjustText",
    value: function adjustText(selector) {
      var textLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var textAnchor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'start';
      this.adjustTextQueries.push({
        selector: selector,
        textLength: textLength,
        textAnchor: textAnchor
      });
      return this;
    }
  }, {
    key: "adjustTextarea",
    value: function adjustTextarea(selector, width, height) {
      var lineHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1.2;
      var paddingX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.5;
      var paddingY = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.5;
      var nowrap = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      var doc = new DOMParser().parseFromString(this.svg, 'text/html');
      var textElement = doc.querySelector(selector);
      if (!textElement) {
        return this;
      }
      var textSvg = textElement.outerHTML;
      // SVGElement doesn't have innerText
      // @see https://developer.mozilla.org/en-US/docs/Web/API/SVGElement
      var textContent = textElement.innerHTML.replace(new RegExp('^<tspan[^>]*>([\\S|\\s]*)</tspan>$'), '$1');
      var adjustedTextSvg = Object(_adjust_textarea__WEBPACK_IMPORTED_MODULE_1__["default"])(textSvg, textContent, width, height, lineHeight, paddingX, paddingY, nowrap);
      this.replace(textSvg, adjustedTextSvg);
      return this;
    }
  }, {
    key: "apply",
    value: function apply() {
      var _this = this;
      if (this.svg !== document.querySelector(this.selector).outerHTML) {
        document.querySelector(this.selector).outerHTML = this.svg;
      }
      this.adjustTextQueries.forEach(function (query) {
        var _$svg$getAttribute$sp, _$svg$getAttribute;
        // if viewBox is specified, Element.clientWidth and Element.getBoundingClientRect() return different values
        //   clientWidth: ???
        //   getBoundingClientRect(): pure pixel value
        // so this library uses getBoundingClientRect() and pre-calculated ratio to specify the width of some elements
        // @see https://stackoverflow.com/questions/15335926/how-to-use-the-svg-viewbox-attribute
        var $svg = document.querySelector(_this.selector);
        var viewBoxWidth = (_$svg$getAttribute$sp = (_$svg$getAttribute = $svg.getAttribute('viewBox')) === null || _$svg$getAttribute === void 0 ? void 0 : _$svg$getAttribute.split(/ +/)[2]) !== null && _$svg$getAttribute$sp !== void 0 ? _$svg$getAttribute$sp : null;
        var paperPixelRatio = viewBoxWidth ? parseFloat(viewBoxWidth) / $svg.getBoundingClientRect().width : 1;
        Object(_adjust_text__WEBPACK_IMPORTED_MODULE_0__["default"])(query.selector, {
          textLength: query.textLength,
          'text-anchor': query.textAnchor
        }, paperPixelRatio);
      });

      // initialize
      this.svg = document.querySelector(this.selector).outerHTML;
      this.adjustTextQueries = [];
    }
  }]);
  return SvgPaper;
}();


/***/ }),

/***/ "./js/src/utility/fix-text-transform.js":
/*!**********************************************!*\
  !*** ./js/src/utility/fix-text-transform.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (textSvg) {
  var fixedTextSvg = textSvg;

  // if <text> doesn't have transform="translate(x y)", just add it with (0 0)
  if (!fixedTextSvg.match(/<text [^>]*transform="[^"]*"[^>]*>/)) {
    fixedTextSvg = fixedTextSvg.replace(new RegExp('<text([^>]*)>'), '<text$1 transform="translate(0 0)">');
  }

  // if <tspan> doesn't have x="" y="", just add it with x="0" y="0"
  if (!fixedTextSvg.match(/<tspan [^>]*x="[^"]*"[^>]*>/)) {
    fixedTextSvg = fixedTextSvg.replace(new RegExp('<tspan([^>]*)>'), '<tspan$1 x="0">');
  }
  if (!fixedTextSvg.match(/<tspan [^>]*y="[^"]*"[^>]*>/)) {
    fixedTextSvg = fixedTextSvg.replace(new RegExp('<tspan([^>]*)>'), '<tspan$1 y="0">');
  }

  // copy x from <tspan x=""> and add it to <text transform="translate(x y)">
  fixedTextSvg = fixedTextSvg.replace(new RegExp('<text([\\s\\S]+)transform="translate\\((\\S+)\\s+(.+)\\)"([^>]*)>\s*<tspan([^>]+)x="([^"]+)"'), '<text$1transform="translate(###$2+$6### $3)"$4><tspan$5x="0"');
  var expression1 = fixedTextSvg.match(new RegExp('<text[\\s\\S]+transform="translate\\(###(.+)###.+\\)"'))[1];
  var x = expression1.match(/\d+\+\d+/) ? eval(expression1) : 0;
  fixedTextSvg = fixedTextSvg.replace(new RegExp('<text([\\s\\S]+)transform="translate\\(###.+###(.+)\\)"'), "<text$1transform=\"translate(".concat(x, "$2)\""));

  // copy y from <tspan y=""> and add it to <text transform="translate(x y)">
  fixedTextSvg = fixedTextSvg.replace(new RegExp('<text([\\s\\S]+)transform="translate\\((.+)\\s+(\\S+)\\)"([^>]*)>\s*<tspan([^>]+)y="([^"]+)"'), '<text$1transform="translate($2 ###$3+$6###)"$4><tspan$5y="0"');
  var expression2 = fixedTextSvg.match(new RegExp('<text[\\s\\S]+transform="translate\\(.+###(.+)###\\)"'))[1];
  var y = expression2.match(/\d+\+\d+/) ? eval(expression2) : 0;
  fixedTextSvg = fixedTextSvg.replace(new RegExp('<text([\\s\\S]+)transform="translate\\((.+)###.+###\\)"'), "<text$1transform=\"translate($2".concat(y, ")\""));
  return fixedTextSvg;
});

/***/ }),

/***/ "./js/src/utility/split-string-by-width.js":
/*!*************************************************!*\
  !*** ./js/src/utility/split-string-by-width.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sub_string_by_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-string-by-width */ "./js/src/utility/sub-string-by-width.js");

/* harmony default export */ __webpack_exports__["default"] = (function (string, width) {
  var splits = [];
  while (true) {
    var split = Object(_sub_string_by_width__WEBPACK_IMPORTED_MODULE_0__["default"])(string, 0, width);
    splits.push(split);
    string = string.replace(split, '');
    if (!string) {
      break;
    }
  }
  return splits;
});

/***/ }),

/***/ "./js/src/utility/sub-string-by-width.js":
/*!***********************************************!*\
  !*** ./js/src/utility/sub-string-by-width.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var string_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-width */ "./node_modules/string-width/index.js");
/* harmony import */ var string_width__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(string_width__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (string, start, width) {
  var currentWidth = 0;
  var subString = '';
  for (var i = start;; i++) {
    var _char = string.substr(i, 1);
    currentWidth += string_width__WEBPACK_IMPORTED_MODULE_0___default()(_char);
    if (currentWidth <= width && i <= string.length) {
      subString += _char;
    }
    if (currentWidth >= width || i >= string.length) {
      return subString;
    }
  }
});

/***/ }),

/***/ "./node_modules/emoji-regex/index.js":
/*!*******************************************!*\
  !*** ./node_modules/emoji-regex/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  // https://mths.be/emoji
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};

/***/ }),

/***/ "./node_modules/is-fullwidth-code-point/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/is-fullwidth-code-point/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable yoda */


var isFullwidthCodePoint = function isFullwidthCodePoint(codePoint) {
  if (Number.isNaN(codePoint)) {
    return false;
  }

  // Code points are derived from:
  // http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt
  if (codePoint >= 0x1100 && (codePoint <= 0x115F ||
  // Hangul Jamo
  codePoint === 0x2329 ||
  // LEFT-POINTING ANGLE BRACKET
  codePoint === 0x232A ||
  // RIGHT-POINTING ANGLE BRACKET
  // CJK Radicals Supplement .. Enclosed CJK Letters and Months
  0x2E80 <= codePoint && codePoint <= 0x3247 && codePoint !== 0x303F ||
  // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
  0x3250 <= codePoint && codePoint <= 0x4DBF ||
  // CJK Unified Ideographs .. Yi Radicals
  0x4E00 <= codePoint && codePoint <= 0xA4C6 ||
  // Hangul Jamo Extended-A
  0xA960 <= codePoint && codePoint <= 0xA97C ||
  // Hangul Syllables
  0xAC00 <= codePoint && codePoint <= 0xD7A3 ||
  // CJK Compatibility Ideographs
  0xF900 <= codePoint && codePoint <= 0xFAFF ||
  // Vertical Forms
  0xFE10 <= codePoint && codePoint <= 0xFE19 ||
  // CJK Compatibility Forms .. Small Form Variants
  0xFE30 <= codePoint && codePoint <= 0xFE6B ||
  // Halfwidth and Fullwidth Forms
  0xFF01 <= codePoint && codePoint <= 0xFF60 || 0xFFE0 <= codePoint && codePoint <= 0xFFE6 ||
  // Kana Supplement
  0x1B000 <= codePoint && codePoint <= 0x1B001 ||
  // Enclosed Ideographic Supplement
  0x1F200 <= codePoint && codePoint <= 0x1F251 ||
  // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
  0x20000 <= codePoint && codePoint <= 0x3FFFD)) {
    return true;
  }
  return false;
};
module.exports = isFullwidthCodePoint;
module.exports["default"] = isFullwidthCodePoint;

/***/ }),

/***/ "./node_modules/string-width/index.js":
/*!********************************************!*\
  !*** ./node_modules/string-width/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stripAnsi = __webpack_require__(/*! strip-ansi */ "./node_modules/strip-ansi/index.js");
var isFullwidthCodePoint = __webpack_require__(/*! is-fullwidth-code-point */ "./node_modules/is-fullwidth-code-point/index.js");
var emojiRegex = __webpack_require__(/*! emoji-regex */ "./node_modules/emoji-regex/index.js");
var stringWidth = function stringWidth(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return 0;
  }
  string = stripAnsi(string);
  if (string.length === 0) {
    return 0;
  }
  string = string.replace(emojiRegex(), '  ');
  var width = 0;
  for (var i = 0; i < string.length; i++) {
    var code = string.codePointAt(i);

    // Ignore control characters
    if (code <= 0x1F || code >= 0x7F && code <= 0x9F) {
      continue;
    }

    // Ignore combining characters
    if (code >= 0x300 && code <= 0x36F) {
      continue;
    }

    // Surrogates
    if (code > 0xFFFF) {
      i++;
    }
    width += isFullwidthCodePoint(code) ? 2 : 1;
  }
  return width;
};
module.exports = stringWidth;
// TODO: remove this in the next major version
module.exports["default"] = stringWidth;

/***/ }),

/***/ "./node_modules/strip-ansi/index.js":
/*!******************************************!*\
  !*** ./node_modules/strip-ansi/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/strip-ansi/node_modules/ansi-regex/index.js");
module.exports = function (string) {
  return typeof string === 'string' ? string.replace(ansiRegex(), '') : string;
};

/***/ }),

/***/ "./node_modules/strip-ansi/node_modules/ansi-regex/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/strip-ansi/node_modules/ansi-regex/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$onlyFirst = _ref.onlyFirst,
    onlyFirst = _ref$onlyFirst === void 0 ? false : _ref$onlyFirst;
  var pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|');
  return new RegExp(pattern, onlyFirst ? undefined : 'g');
};

/***/ }),

/***/ "./scss/svg-paper.scss":
/*!*****************************!*\
  !*** ./scss/svg-paper.scss ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 0:
/*!*********************************************************!*\
  !*** multi ./scss/svg-paper.scss ./js/src/svg-paper.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./scss/svg-paper.scss */"./scss/svg-paper.scss");
module.exports = __webpack_require__(/*! ./js/src/svg-paper.js */"./js/src/svg-paper.js");


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdmdQYXBlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9qcy9zcmMvYWRqdXN0LXRleHQuanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9qcy9zcmMvYWRqdXN0LXRleHRhcmVhLmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vanMvc3JjL3N2Zy1wYXBlci5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L2ZpeC10ZXh0LXRyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L3NwbGl0LXN0cmluZy1ieS13aWR0aC5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL2pzL3NyYy91dGlsaXR5L3N1Yi1zdHJpbmctYnktd2lkdGguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvZW1vamktcmVnZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvaXMtZnVsbHdpZHRoLWNvZGUtcG9pbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvc3RyaW5nLXdpZHRoL2luZGV4LmpzIiwid2VicGFjazovL1N2Z1BhcGVyLy4vbm9kZV9tb2R1bGVzL3N0cmlwLWFuc2kvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU3ZnUGFwZXIvLi9ub2RlX21vZHVsZXMvc3RyaXAtYW5zaS9ub2RlX21vZHVsZXMvYW5zaS1yZWdleC9pbmRleC5qcyIsIndlYnBhY2s6Ly9TdmdQYXBlci8uL3Njc3Mvc3ZnLXBhcGVyLnNjc3M/ZjlkMiJdLCJuYW1lcyI6WyJzZWxlY3RvciIsImNvbmZpZyIsInBhcGVyUGl4ZWxSYXRpbyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIiR0aGlzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ0ZXh0TGVuZ3RoIiwic2V0QXR0cmlidXRlIiwidyIsInBhcnNlRmxvYXQiLCJ4IiwieSIsImdldEF0dHJpYnV0ZSIsIm1hdGNoIiwiY29uY2F0IiwidGV4dFN2ZyIsInRleHRDb250ZW50IiwiaGVpZ2h0IiwibGluZUhlaWdodCIsInBhZGRpbmdYIiwicGFkZGluZ1kiLCJub3dyYXAiLCJSZWdFeHAiLCJjb25zb2xlIiwiZXJyb3IiLCJvcmlnaW5hbEZvbnRTaXplIiwicGFyc2VJbnQiLCJmb250U2l6ZSIsInBoeXNpY2FsTGluZXMiLCJzcGxpdCIsImxvZ2ljYWxMaW5lcyIsIl9sb29wIiwibWF4Um93cyIsIk1hdGgiLCJmbG9vciIsIm1heENvbHVtbnMiLCJmb3JFYWNoIiwibGluZSIsInNwbGl0U3RyaW5nQnlXaWR0aCIsImFkanVzdFkiLCJhZGp1c3RlZFRleHRTdmciLCJmaXhUZXh0VHJhbnNmb3JtIiwicmVwbGFjZSIsInRzcGFuIiwiaSIsIl90eXBlb2YiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJ0IiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiciIsImUiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJOdW1iZXIiLCJTdmdQYXBlciIsIkVycm9yIiwic3ZnIiwib3V0ZXJIVE1MIiwiYWRqdXN0VGV4dFF1ZXJpZXMiLCJ2YWx1ZSIsInNlYXJjaCIsInJlcGxhY2VtZW50Iiwic291cmNlIiwiZmxhZ3MiLCJwcm9wZXJ0eSIsImRvYyIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInRleHRFbGVtZW50IiwicmVwbGFjZWRUZXh0U3ZnIiwiYWRqdXN0VGV4dCIsInRleHRBbmNob3IiLCJwdXNoIiwiYWRqdXN0VGV4dGFyZWEiLCJpbm5lckhUTUwiLCJhcHBseSIsIl90aGlzIiwicXVlcnkiLCJfJHN2ZyRnZXRBdHRyaWJ1dGUkc3AiLCJfJHN2ZyRnZXRBdHRyaWJ1dGUiLCIkc3ZnIiwidmlld0JveFdpZHRoIiwiZml4ZWRUZXh0U3ZnIiwiZXhwcmVzc2lvbjEiLCJldmFsIiwiZXhwcmVzc2lvbjIiLCJzdHJpbmciLCJzcGxpdHMiLCJzdWJTdHJpbmdCeVdpZHRoIiwic3RhcnQiLCJjdXJyZW50V2lkdGgiLCJzdWJTdHJpbmciLCJjaGFyIiwic3Vic3RyIiwic3RyaW5nV2lkdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiaXNGdWxsd2lkdGhDb2RlUG9pbnQiLCJjb2RlUG9pbnQiLCJpc05hTiIsInN0cmlwQW5zaSIsInJlcXVpcmUiLCJlbW9qaVJlZ2V4IiwiY29kZSIsImNvZGVQb2ludEF0IiwiYW5zaVJlZ2V4IiwiX3JlZiIsIl9yZWYkb25seUZpcnN0Iiwib25seUZpcnN0IiwicGF0dGVybiIsImpvaW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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T3pILEtBQUs7QUFDYixDQUFDO0FBRURpSCxNQUFNLENBQUNDLE9BQU8sR0FBR0YsV0FBVztBQUM1QjtBQUNBQyxNQUFNLENBQUNDLE9BQU8sV0FBUSxHQUFHRixXQUFXLEM7Ozs7Ozs7Ozs7OztBQzlDdkI7O0FBQ2IsSUFBTVcsU0FBUyxHQUFHSixtQkFBTyxDQUFDLDhFQUFZLENBQUM7QUFFdkNOLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLFVBQUFWLE1BQU07RUFBQSxPQUFJLE9BQU9BLE1BQU0sS0FBSyxRQUFRLEdBQUdBLE1BQU0sQ0FBQ25FLE9BQU8sQ0FBQ3NGLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUduQixNQUFNO0FBQUEsRTs7Ozs7Ozs7Ozs7O0FDSG5GOztBQUViUyxNQUFNLENBQUNDLE9BQU8sR0FBRyxZQUE4QjtFQUFBLElBQUFVLElBQUEsR0FBQXJJLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFQLENBQUMsQ0FBQztJQUFBc0ksY0FBQSxHQUFBRCxJQUFBLENBQXZCRSxTQUFTO0lBQVRBLFNBQVMsR0FBQUQsY0FBQSxjQUFHLEtBQUssR0FBQUEsY0FBQTtFQUNuQyxJQUFNRSxPQUFPLEdBQUcsQ0FDZiw4SEFBOEgsRUFDOUgsMERBQTBELENBQzFELENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUM7RUFFWCxPQUFPLElBQUkvRyxNQUFNLENBQUM4RyxPQUFPLEVBQUVELFNBQVMsR0FBR3JJLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDeEQsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNURDtBQUFBIiwiZmlsZSI6InN2Zy1wYXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlN2Z1BhcGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlN2Z1BhcGVyXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0IGRlZmF1bHQgKHNlbGVjdG9yLCBjb25maWcsIHBhcGVyUGl4ZWxSYXRpbyA9IDEpID0+IHtcbiAgY29uc3QgJHRoaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuXG4gIGlmICghJHRoaXMpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIHNocmluayB0ZXh0IGVsZW1lbnQgdG8gc3BlY2lmaWVkIHdpZHRoXG4gIGlmICghIWNvbmZpZ1sndGV4dExlbmd0aCddKSB7XG4gICAgLy8gZm9yIGZpcmVmb3hcbiAgICAvLyBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2phL2RvY3MvV2ViL0FQSS9FbGVtZW50L2NsaWVudFdpZHRoXG4gICAgJHRoaXMuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcblxuICAgIGlmICgkdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAqIHBhcGVyUGl4ZWxSYXRpbyA+IGNvbmZpZy50ZXh0TGVuZ3RoKSB7XG4gICAgICAkdGhpcy5xdWVyeVNlbGVjdG9yKCd0c3BhbicpLnNldEF0dHJpYnV0ZSgndGV4dExlbmd0aCcsIGNvbmZpZy50ZXh0TGVuZ3RoKVxuICAgICAgJHRoaXMucXVlcnlTZWxlY3RvcigndHNwYW4nKS5zZXRBdHRyaWJ1dGUoJ2xlbmd0aEFkanVzdCcsICdzcGFjaW5nQW5kR2x5cGhzJylcblxuICAgICAgLy8gZm9yIGZpcmVmb3hcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODkwNjkyXG4gICAgICAkdGhpcy5zZXRBdHRyaWJ1dGUoJ3RleHRMZW5ndGgnLCBjb25maWcudGV4dExlbmd0aClcbiAgICAgICR0aGlzLnNldEF0dHJpYnV0ZSgnbGVuZ3RoQWRqdXN0JywgJ3NwYWNpbmdBbmRHbHlwaHMnKVxuICAgIH1cbiAgfVxuXG4gIC8vIGFsaWdubWVudFxuICBpZiAoISFjb25maWdbJ3RleHQtYW5jaG9yJ10gJiYgY29uZmlnWyd0ZXh0LWFuY2hvciddICE9PSAnc3RhcnQnKSB7XG4gICAgY29uc3QgdyA9IHBhcnNlRmxvYXQoY29uZmlnWyd0ZXh0TGVuZ3RoJ10pXG4gICAgbGV0IHggPSAwXG4gICAgbGV0IHkgPSAwXG4gICAgaWYgKCR0aGlzLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJykpIHtcbiAgICAgIHggPSBwYXJzZUZsb2F0KCR0aGlzLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJykubWF0Y2goL3RyYW5zbGF0ZVxcKChcXFMrKSAuK1xcKS8pWzFdKVxuICAgICAgeSA9IHBhcnNlRmxvYXQoJHRoaXMuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKS5tYXRjaCgvdHJhbnNsYXRlXFwoXFxTKyAoLispXFwpLylbMV0pXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZ1sndGV4dC1hbmNob3InXSA9PT0gJ21pZGRsZScpIHtcbiAgICAgICR0aGlzLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3ggKyAodyAvIDIpfSAke3l9KWApXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZ1sndGV4dC1hbmNob3InXSA9PT0gJ2VuZCcpIHtcbiAgICAgICR0aGlzLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3ggKyB3fSAke3l9KWApXG4gICAgfVxuXG4gICAgJHRoaXMuc2V0QXR0cmlidXRlKCd0ZXh0LWFuY2hvcicsIGNvbmZpZ1sndGV4dC1hbmNob3InXSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBzcGxpdFN0cmluZ0J5V2lkdGggZnJvbSAnLi91dGlsaXR5L3NwbGl0LXN0cmluZy1ieS13aWR0aCdcbmltcG9ydCBmaXhUZXh0VHJhbnNmb3JtIGZyb20gJy4vdXRpbGl0eS9maXgtdGV4dC10cmFuc2Zvcm0nXG5cbmV4cG9ydCBkZWZhdWx0ICh0ZXh0U3ZnLCB0ZXh0Q29udGVudCwgd2lkdGgsIGhlaWdodCwgbGluZUhlaWdodCA9IDEuMiwgcGFkZGluZ1ggPSAwLjUsIHBhZGRpbmdZID0gMC41LCBub3dyYXAgPSBmYWxzZSkgPT4ge1xuICBpZiAoIXRleHRTdmcubWF0Y2gobmV3IFJlZ0V4cCgnPHRleHQgW14+XSpmb250LXNpemU9XCJcXFxcZCtcIltePl0qPjx0c3BhbiggW14+XSo+fD4pW148Pl0qPC90c3Bhbj48L3RleHQ+JykpKSB7XG4gICAgY29uc29sZS5lcnJvcignSW52YWxpZCBzdmcgc3RyaW5nIG9mIHRleHQgZWxlbWVudCcsIHRleHRTdmcpXG4gICAgcmV0dXJuIHRleHRTdmdcbiAgfVxuXG4gIGNvbnN0IG9yaWdpbmFsRm9udFNpemUgPSBwYXJzZUludCh0ZXh0U3ZnLm1hdGNoKC8uK2ZvbnQtc2l6ZT1cIihcXGQrKVwiLisvKVsxXSlcbiAgbGV0IGZvbnRTaXplID0gb3JpZ2luYWxGb250U2l6ZVxuXG4gIC8vIGZpbmQgdGhlIHJpZ2h0LXNpemUgZm9udC1zaXplXG4gIGNvbnN0IHBoeXNpY2FsTGluZXMgPSB0ZXh0Q29udGVudC5zcGxpdChcIlxcblwiKVxuICBsZXQgbG9naWNhbExpbmVzID0gW11cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBsZXQgbWF4Um93cyA9IE1hdGguZmxvb3IoKGhlaWdodCAtICgyICogZm9udFNpemUgKiBwYWRkaW5nWSkpIC8gKGZvbnRTaXplICogbGluZUhlaWdodCkpXG4gICAgbGV0IG1heENvbHVtbnMgPSBNYXRoLmZsb29yKCh3aWR0aCAtICgyICogZm9udFNpemUgKiBwYWRkaW5nWCkpIC8gZm9udFNpemUpIC8vIGRvZXNuJ3QgY2FyZSBhYm91dCBwcm9wb3J0aW9uYWwgZm9udFxuXG4gICAgaWYgKG5vd3JhcCkge1xuICAgICAgbG9naWNhbExpbmVzID0gcGh5c2ljYWxMaW5lc1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dpY2FsTGluZXMgPSBbXVxuICAgICAgcGh5c2ljYWxMaW5lcy5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICBsb2dpY2FsTGluZXMgPSBsb2dpY2FsTGluZXMuY29uY2F0KHNwbGl0U3RyaW5nQnlXaWR0aChsaW5lLCBtYXhDb2x1bW5zICogMikpIC8vIDIgc2luZ2xlLWJ5dGUgY2hhcmFjdGVycyBjYW4gYmUgcGxhY2VkIGluIDEgY29sdW1uXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChsb2dpY2FsTGluZXMubGVuZ3RoID4gbWF4Um93cykge1xuICAgICAgZm9udFNpemUgKj0gMC45NVxuICAgIH0gZWxzZSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIC8vIHJhaXNlIHktY29vcmRpbmF0ZSB1cCBiZWNhdXNlIHktY29vcmRpbmF0ZSBvZiA8dGV4dCB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoeCB5KVwiPiBvciA8dHNwYW4geT1cIlwiPiBpcyBvbiBsb3dlciBiYXNlIG9mIHRleHQgb2JqZWN0XG4gIGNvbnN0IGFkanVzdFkgPSBmb250U2l6ZSAtIG9yaWdpbmFsRm9udFNpemVcblxuICBsZXQgYWRqdXN0ZWRUZXh0U3ZnID0gZml4VGV4dFRyYW5zZm9ybSh0ZXh0U3ZnKVxuICBhZGp1c3RlZFRleHRTdmcgPSBhZGp1c3RlZFRleHRTdmcucmVwbGFjZShuZXcgUmVnRXhwKCc8dHNwYW4oLnxcXFxccykrPC90ZXh0PicpLCAnJylcbiAgYWRqdXN0ZWRUZXh0U3ZnID0gYWRqdXN0ZWRUZXh0U3ZnLnJlcGxhY2UobmV3IFJlZ0V4cCgnZm9udC1zaXplPVwiXFxcXGQrXCInKSwgYGZvbnQtc2l6ZT1cIiR7Zm9udFNpemV9XCJgKVxuICBhZGp1c3RlZFRleHRTdmcgKz0gJ3t0c3Bhbn08L3RleHQ+J1xuXG4gIGxldCB0c3BhbiA9ICcnXG4gIGNvbnN0IHggPSBmb250U2l6ZSAqIHBhZGRpbmdYXG4gIGxvZ2ljYWxMaW5lcy5mb3JFYWNoKChsaW5lLCBpKSA9PiB7XG4gICAgY29uc3QgeSA9IGFkanVzdFkgKyBmb250U2l6ZSAqIChwYWRkaW5nWSArIChpICogbGluZUhlaWdodCkpXG4gICAgdHNwYW4gKz0gYDx0c3BhbiB4PVwiJHt4fVwiIHk9XCIke3l9XCI+JHtsaW5lfTwvdHNwYW4+YFxuICB9KVxuXG4gIGFkanVzdGVkVGV4dFN2ZyA9IGFkanVzdGVkVGV4dFN2Zy5yZXBsYWNlKCd7dHNwYW59JywgdHNwYW4pXG5cbiAgcmV0dXJuIGFkanVzdGVkVGV4dFN2Z1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBhZGp1c3RUZXh0IGZyb20gJy4vYWRqdXN0LXRleHQnXG5pbXBvcnQgYWRqdXN0VGV4dGFyZWEgZnJvbSAnLi9hZGp1c3QtdGV4dGFyZWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN2Z1BhcGVyIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSAnLnBhcGVyIHN2ZycpIHtcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2VsZWN0b3InKVxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgIHRoaXMuc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcikub3V0ZXJIVE1MLnJlcGxhY2UoL1tcXHJ8XFxuXSsvZywgXCJcXG5cIilcbiAgICB0aGlzLmFkanVzdFRleHRRdWVyaWVzID0gW11cbiAgfVxuXG4gIHJlcGxhY2Uoc2VhcmNoLCByZXBsYWNlbWVudCkge1xuICAgIGlmIChzZWFyY2ggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHNlYXJjaCA9IG5ldyBSZWdFeHAoc2VhcmNoLnNvdXJjZSwgc2VhcmNoLmZsYWdzLnJlcGxhY2UoL2cvZywgJycpICsgJ2cnKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgvW1xccnxcXG5dKy9nLCBcIlxcblwiKVxuXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2phL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvUmVndWxhcl9FeHByZXNzaW9ucyNlc2NhcGluZ1xuICAgICAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoL1suKis/Xj0hOiR7fSgpfFtcXF1cXC9cXFxcXS9nLCAnXFxcXCQmJylcbiAgICAgIHNlYXJjaCA9IG5ldyBSZWdFeHAoc2VhcmNoLCAnZycpXG4gICAgfVxuXG4gICAgLy8gY2FzdCB0byBzdHJpbmdcbiAgICByZXBsYWNlbWVudCA9IHJlcGxhY2VtZW50ICE9PSB1bmRlZmluZWQgJiYgcmVwbGFjZW1lbnQgIT09IG51bGwgPyByZXBsYWNlbWVudCArICcnIDogJydcblxuICAgIHJlcGxhY2VtZW50ID0gcmVwbGFjZW1lbnQucmVwbGFjZSgvW1xccnxcXG5dKy9nLCBcIlxcblwiKVxuXG4gICAgdGhpcy5zdmcgPSB0aGlzLnN2Zy5yZXBsYWNlKHNlYXJjaCwgcmVwbGFjZW1lbnQpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc2V0QXR0cmlidXRlKHNlbGVjdG9yLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHRoaXMuc3ZnLCAndGV4dC9odG1sJylcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvYy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIGlmICghdGV4dEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgY29uc3QgdGV4dFN2ZyA9IHRleHRFbGVtZW50Lm91dGVySFRNTFxuXG4gICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB2YWx1ZSlcblxuICAgIGNvbnN0IHJlcGxhY2VkVGV4dFN2ZyA9IHRleHRFbGVtZW50Lm91dGVySFRNTFxuXG4gICAgdGhpcy5yZXBsYWNlKHRleHRTdmcsIHJlcGxhY2VkVGV4dFN2ZylcblxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgXG4gIGFkanVzdFRleHQoc2VsZWN0b3IsIHRleHRMZW5ndGggPSBudWxsLCB0ZXh0QW5jaG9yID0gJ3N0YXJ0Jykge1xuICAgIHRoaXMuYWRqdXN0VGV4dFF1ZXJpZXMucHVzaCh7c2VsZWN0b3IsIHRleHRMZW5ndGgsIHRleHRBbmNob3J9KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFkanVzdFRleHRhcmVhKHNlbGVjdG9yLCB3aWR0aCwgaGVpZ2h0LCBsaW5lSGVpZ2h0ID0gMS4yLCBwYWRkaW5nWCA9IDAuNSwgcGFkZGluZ1kgPSAwLjUsIG5vd3JhcCA9IGZhbHNlKSB7XG4gICAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyh0aGlzLnN2ZywgJ3RleHQvaHRtbCcpXG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2MucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICBpZiAoIXRleHRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGNvbnN0IHRleHRTdmcgPSB0ZXh0RWxlbWVudC5vdXRlckhUTUxcbiAgICAvLyBTVkdFbGVtZW50IGRvZXNuJ3QgaGF2ZSBpbm5lclRleHRcbiAgICAvLyBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9TVkdFbGVtZW50XG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSB0ZXh0RWxlbWVudC5pbm5lckhUTUwucmVwbGFjZShuZXcgUmVnRXhwKCdePHRzcGFuW14+XSo+KFtcXFxcU3xcXFxcc10qKTwvdHNwYW4+JCcpLCAnJDEnKVxuXG4gICAgY29uc3QgYWRqdXN0ZWRUZXh0U3ZnID0gYWRqdXN0VGV4dGFyZWEodGV4dFN2ZywgdGV4dENvbnRlbnQsIHdpZHRoLCBoZWlnaHQsIGxpbmVIZWlnaHQsIHBhZGRpbmdYLCBwYWRkaW5nWSwgbm93cmFwKVxuXG4gICAgdGhpcy5yZXBsYWNlKHRleHRTdmcsIGFkanVzdGVkVGV4dFN2ZylcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBhcHBseSgpIHtcbiAgICBpZiAodGhpcy5zdmcgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcikub3V0ZXJIVE1MKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpLm91dGVySFRNTCA9IHRoaXMuc3ZnXG4gICAgfVxuXG4gICAgdGhpcy5hZGp1c3RUZXh0UXVlcmllcy5mb3JFYWNoKHF1ZXJ5ID0+IHtcbiAgICAgIC8vIGlmIHZpZXdCb3ggaXMgc3BlY2lmaWVkLCBFbGVtZW50LmNsaWVudFdpZHRoIGFuZCBFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIHJldHVybiBkaWZmZXJlbnQgdmFsdWVzXG4gICAgICAvLyAgIGNsaWVudFdpZHRoOiA/Pz9cbiAgICAgIC8vICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6IHB1cmUgcGl4ZWwgdmFsdWVcbiAgICAgIC8vIHNvIHRoaXMgbGlicmFyeSB1c2VzIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFuZCBwcmUtY2FsY3VsYXRlZCByYXRpbyB0byBzcGVjaWZ5IHRoZSB3aWR0aCBvZiBzb21lIGVsZW1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE1MzM1OTI2L2hvdy10by11c2UtdGhlLXN2Zy12aWV3Ym94LWF0dHJpYnV0ZVxuICAgICAgY29uc3QgJHN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcilcbiAgICAgIGNvbnN0IHZpZXdCb3hXaWR0aCA9ICRzdmcuZ2V0QXR0cmlidXRlKCd2aWV3Qm94Jyk/LnNwbGl0KC8gKy8pWzJdID8/IG51bGxcbiAgICAgIGNvbnN0IHBhcGVyUGl4ZWxSYXRpbyA9IHZpZXdCb3hXaWR0aCA/IHBhcnNlRmxvYXQodmlld0JveFdpZHRoKSAvICRzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggOiAxXG5cbiAgICAgIGFkanVzdFRleHQocXVlcnkuc2VsZWN0b3IsIHtcbiAgICAgICAgdGV4dExlbmd0aDogcXVlcnkudGV4dExlbmd0aCxcbiAgICAgICAgJ3RleHQtYW5jaG9yJzogcXVlcnkudGV4dEFuY2hvcixcbiAgICAgIH0sIHBhcGVyUGl4ZWxSYXRpbylcbiAgICB9KVxuXG4gICAgLy8gaW5pdGlhbGl6ZVxuICAgIHRoaXMuc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKS5vdXRlckhUTUxcbiAgICB0aGlzLmFkanVzdFRleHRRdWVyaWVzID0gW11cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgKHRleHRTdmcpID0+IHtcbiAgbGV0IGZpeGVkVGV4dFN2ZyA9IHRleHRTdmdcblxuICAvLyBpZiA8dGV4dD4gZG9lc24ndCBoYXZlIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSh4IHkpXCIsIGp1c3QgYWRkIGl0IHdpdGggKDAgMClcbiAgaWYgKCFmaXhlZFRleHRTdmcubWF0Y2goLzx0ZXh0IFtePl0qdHJhbnNmb3JtPVwiW15cIl0qXCJbXj5dKj4vKSkge1xuICAgIGZpeGVkVGV4dFN2ZyA9IGZpeGVkVGV4dFN2Zy5yZXBsYWNlKG5ldyBSZWdFeHAoJzx0ZXh0KFtePl0qKT4nKSwgJzx0ZXh0JDEgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMClcIj4nKVxuICB9XG5cbiAgLy8gaWYgPHRzcGFuPiBkb2Vzbid0IGhhdmUgeD1cIlwiIHk9XCJcIiwganVzdCBhZGQgaXQgd2l0aCB4PVwiMFwiIHk9XCIwXCJcbiAgaWYgKCFmaXhlZFRleHRTdmcubWF0Y2goLzx0c3BhbiBbXj5dKng9XCJbXlwiXSpcIltePl0qPi8pKSB7XG4gICAgZml4ZWRUZXh0U3ZnID0gZml4ZWRUZXh0U3ZnLnJlcGxhY2UobmV3IFJlZ0V4cCgnPHRzcGFuKFtePl0qKT4nKSwgJzx0c3BhbiQxIHg9XCIwXCI+JylcbiAgfVxuICBpZiAoIWZpeGVkVGV4dFN2Zy5tYXRjaCgvPHRzcGFuIFtePl0qeT1cIlteXCJdKlwiW14+XSo+LykpIHtcbiAgICBmaXhlZFRleHRTdmcgPSBmaXhlZFRleHRTdmcucmVwbGFjZShuZXcgUmVnRXhwKCc8dHNwYW4oW14+XSopPicpLCAnPHRzcGFuJDEgeT1cIjBcIj4nKVxuICB9XG5cbiAgLy8gY29weSB4IGZyb20gPHRzcGFuIHg9XCJcIj4gYW5kIGFkZCBpdCB0byA8dGV4dCB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoeCB5KVwiPlxuICBmaXhlZFRleHRTdmcgPSBmaXhlZFRleHRTdmcucmVwbGFjZShuZXcgUmVnRXhwKCc8dGV4dChbXFxcXHNcXFxcU10rKXRyYW5zZm9ybT1cInRyYW5zbGF0ZVxcXFwoKFxcXFxTKylcXFxccysoLispXFxcXClcIihbXj5dKik+XFxzKjx0c3BhbihbXj5dKyl4PVwiKFteXCJdKylcIicpLCAnPHRleHQkMXRyYW5zZm9ybT1cInRyYW5zbGF0ZSgjIyMkMiskNiMjIyAkMylcIiQ0Pjx0c3BhbiQ1eD1cIjBcIicpXG4gIGNvbnN0IGV4cHJlc3Npb24xID0gZml4ZWRUZXh0U3ZnLm1hdGNoKG5ldyBSZWdFeHAoJzx0ZXh0W1xcXFxzXFxcXFNdK3RyYW5zZm9ybT1cInRyYW5zbGF0ZVxcXFwoIyMjKC4rKSMjIy4rXFxcXClcIicpKVsxXVxuICBjb25zdCB4ID0gZXhwcmVzc2lvbjEubWF0Y2goL1xcZCtcXCtcXGQrLykgPyBldmFsKGV4cHJlc3Npb24xKSA6IDBcbiAgZml4ZWRUZXh0U3ZnID0gZml4ZWRUZXh0U3ZnLnJlcGxhY2UobmV3IFJlZ0V4cCgnPHRleHQoW1xcXFxzXFxcXFNdKyl0cmFuc2Zvcm09XCJ0cmFuc2xhdGVcXFxcKCMjIy4rIyMjKC4rKVxcXFwpXCInKSwgYDx0ZXh0JDF0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJHt4fSQyKVwiYClcblxuICAvLyBjb3B5IHkgZnJvbSA8dHNwYW4geT1cIlwiPiBhbmQgYWRkIGl0IHRvIDx0ZXh0IHRyYW5zZm9ybT1cInRyYW5zbGF0ZSh4IHkpXCI+XG4gIGZpeGVkVGV4dFN2ZyA9IGZpeGVkVGV4dFN2Zy5yZXBsYWNlKG5ldyBSZWdFeHAoJzx0ZXh0KFtcXFxcc1xcXFxTXSspdHJhbnNmb3JtPVwidHJhbnNsYXRlXFxcXCgoLispXFxcXHMrKFxcXFxTKylcXFxcKVwiKFtePl0qKT5cXHMqPHRzcGFuKFtePl0rKXk9XCIoW15cIl0rKVwiJyksICc8dGV4dCQxdHJhbnNmb3JtPVwidHJhbnNsYXRlKCQyICMjIyQzKyQ2IyMjKVwiJDQ+PHRzcGFuJDV5PVwiMFwiJylcbiAgY29uc3QgZXhwcmVzc2lvbjIgPSBmaXhlZFRleHRTdmcubWF0Y2gobmV3IFJlZ0V4cCgnPHRleHRbXFxcXHNcXFxcU10rdHJhbnNmb3JtPVwidHJhbnNsYXRlXFxcXCguKyMjIyguKykjIyNcXFxcKVwiJykpWzFdXG4gIGNvbnN0IHkgPSBleHByZXNzaW9uMi5tYXRjaCgvXFxkK1xcK1xcZCsvKSA/IGV2YWwoZXhwcmVzc2lvbjIpIDogMFxuICBmaXhlZFRleHRTdmcgPSBmaXhlZFRleHRTdmcucmVwbGFjZShuZXcgUmVnRXhwKCc8dGV4dChbXFxcXHNcXFxcU10rKXRyYW5zZm9ybT1cInRyYW5zbGF0ZVxcXFwoKC4rKSMjIy4rIyMjXFxcXClcIicpLCBgPHRleHQkMXRyYW5zZm9ybT1cInRyYW5zbGF0ZSgkMiR7eX0pXCJgKVxuXG4gIHJldHVybiBmaXhlZFRleHRTdmdcbn1cbiIsImltcG9ydCBzdWJTdHJpbmdCeVdpZHRoIGZyb20gJy4vc3ViLXN0cmluZy1ieS13aWR0aCdcblxuZXhwb3J0IGRlZmF1bHQgKHN0cmluZywgd2lkdGgpID0+IHtcbiAgbGV0IHNwbGl0cyA9IFtdXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBsZXQgc3BsaXQgPSBzdWJTdHJpbmdCeVdpZHRoKHN0cmluZywgMCwgd2lkdGgpXG4gICAgc3BsaXRzLnB1c2goc3BsaXQpXG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2Uoc3BsaXQsICcnKVxuICAgIGlmICghc3RyaW5nKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzcGxpdHNcbn1cbiIsImltcG9ydCBzdHJpbmdXaWR0aCBmcm9tICdzdHJpbmctd2lkdGgnXG5cbmV4cG9ydCBkZWZhdWx0IChzdHJpbmcsIHN0YXJ0LCB3aWR0aCkgPT4ge1xuICBsZXQgY3VycmVudFdpZHRoID0gMFxuICBsZXQgc3ViU3RyaW5nID0gJydcblxuICBmb3IgKGxldCBpID0gc3RhcnQ7IDsgaSsrKSB7XG4gICAgY29uc3QgY2hhciA9IHN0cmluZy5zdWJzdHIoaSwgMSlcbiAgICBjdXJyZW50V2lkdGggKz0gc3RyaW5nV2lkdGgoY2hhcilcbiAgICBpZiAoY3VycmVudFdpZHRoIDw9IHdpZHRoICYmIGkgPD0gc3RyaW5nLmxlbmd0aCkge1xuICAgICAgc3ViU3RyaW5nICs9IGNoYXJcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRXaWR0aCA+PSB3aWR0aCB8fCBpID49IHN0cmluZy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBzdWJTdHJpbmdcbiAgICB9XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gaHR0cHM6Ly9tdGhzLmJlL2Vtb2ppXG4gIHJldHVybiAvXFx1RDgzQ1xcdURGRjRcXHVEQjQwXFx1REM2N1xcdURCNDBcXHVEQzYyKD86XFx1REI0MFxcdURDNjVcXHVEQjQwXFx1REM2RVxcdURCNDBcXHVEQzY3fFxcdURCNDBcXHVEQzczXFx1REI0MFxcdURDNjNcXHVEQjQwXFx1REM3NHxcXHVEQjQwXFx1REM3N1xcdURCNDBcXHVEQzZDXFx1REI0MFxcdURDNzMpXFx1REI0MFxcdURDN0Z8XFx1RDgzRFxcdURDNjgoPzpcXHVEODNDXFx1REZGQ1xcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NcXHVERkZCfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGRlxcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZFXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkRdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkRcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkJcXHVERkZDXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdTIwMEQoPzpcXHUyNzY0XFx1RkUwRlxcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0RcXHVEQzY4fCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdTIwMEQoPzpcXHVEODNEXFx1REM2NlxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2N1xcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSkpfFxcdUQ4M0RcXHVEQzY2XFx1MjAwRFxcdUQ4M0RcXHVEQzY2fFxcdUQ4M0RcXHVEQzY3XFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2NlxcdURDNjddKXwoPzpcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pfFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRnxcXHVEODNEW1xcdURDNjZcXHVEQzY3XXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8KD86XFx1RDgzQ1xcdURGRkJcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkZcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkVcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkRcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkNcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF0pXFx1RkUwRnxcXHVEODNDXFx1REZGQlxcdTIwMEQoPzpcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXwoPzpcXHVEODNFXFx1REREMVxcdUQ4M0NcXHVERkZCXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1xcdURGRkNcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjkpXFx1RDgzQ1xcdURGRkJ8XFx1RDgzRVxcdURERDEoPzpcXHVEODNDXFx1REZGRlxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8XFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxKXwoPzpcXHVEODNFXFx1REREMVxcdUQ4M0NcXHVERkZFXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1xcdURGRkZcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pKSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSl8KD86XFx1RDgzRVxcdURERDFcXHVEODNDXFx1REZGQ1xcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMXxcXHVEODNEXFx1REM2OVxcdUQ4M0NcXHVERkZEXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY5KSg/OlxcdUQ4M0NbXFx1REZGQlxcdURGRkNdKXxcXHVEODNEXFx1REM2OSg/OlxcdUQ4M0NcXHVERkZFXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZDXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCXFx1REZGRC1cXHVERkZGXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZCXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkRcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1MjAwRCg/OlxcdTI3NjRcXHVGRTBGXFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKXxcXHVEODNEW1xcdURDNjhcXHVEQzY5XSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZGXFx1MjAwRCg/OlxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKSl8XFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzRFxcdURDNjlcXHUyMDBEKD86XFx1RDgzRFxcdURDNjZcXHUyMDBEXFx1RDgzRFxcdURDNjZ8XFx1RDgzRFxcdURDNjdcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pKXwoPzpcXHVEODNFXFx1REREMVxcdUQ4M0NcXHVERkZEXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1xcdURGRkVcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjkpKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkRdKXxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2NlxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2OVxcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSl8KD86XFx1RDgzRFxcdURDNDFcXHVGRTBGXFx1MjAwRFxcdUQ4M0RcXHVEREU4fFxcdUQ4M0RcXHVEQzY5KD86XFx1RDgzQ1xcdURGRkZcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkVcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkNcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkJcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzQ1xcdURGRkRcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdKXwoPzooPzpcXHUyNkY5fFxcdUQ4M0NbXFx1REZDQlxcdURGQ0NdfFxcdUQ4M0RcXHVERDc1KVxcdUZFMEZ8XFx1RDgzRFxcdURDNkZ8XFx1RDgzRVtcXHVERDNDXFx1RERERVxcdUREREZdKVxcdTIwMERbXFx1MjY0MFxcdTI2NDJdfCg/OlxcdTI2Rjl8XFx1RDgzQ1tcXHVERkNCXFx1REZDQ118XFx1RDgzRFxcdURENzUpKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKVxcdTIwMERbXFx1MjY0MFxcdTI2NDJdfCg/OlxcdUQ4M0NbXFx1REZDM1xcdURGQzRcXHVERkNBXXxcXHVEODNEW1xcdURDNkVcXHVEQzcxXFx1REM3M1xcdURDNzdcXHVEQzgxXFx1REM4MlxcdURDODZcXHVEQzg3XFx1REU0NS1cXHVERTQ3XFx1REU0QlxcdURFNERcXHVERTRFXFx1REVBM1xcdURFQjQtXFx1REVCNl18XFx1RDgzRVtcXHVERDI2XFx1REQzNy1cXHVERDM5XFx1REQzRFxcdUREM0VcXHVEREI4XFx1RERCOVxcdUREQ0QtXFx1RERDRlxcdURERDYtXFx1RERERF0pKD86KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKVxcdTIwMERbXFx1MjY0MFxcdTI2NDJdfFxcdTIwMERbXFx1MjY0MFxcdTI2NDJdKXxcXHVEODNDXFx1REZGNFxcdTIwMERcXHUyNjIwKVxcdUZFMEZ8XFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzRFxcdURDNjdcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pfFxcdUQ4M0NcXHVERkYzXFx1RkUwRlxcdTIwMERcXHVEODNDXFx1REYwOHxcXHVEODNEXFx1REMxNVxcdTIwMERcXHVEODNFXFx1RERCQXxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2N3xcXHVEODNDXFx1RERGRFxcdUQ4M0NcXHVEREYwfFxcdUQ4M0NcXHVEREY0XFx1RDgzQ1xcdURERjJ8XFx1RDgzQ1xcdURERjZcXHVEODNDXFx1RERFNnxbI1xcKjAtOV1cXHVGRTBGXFx1MjBFM3xcXHVEODNDXFx1RERFNyg/OlxcdUQ4M0NbXFx1RERFNlxcdURERTdcXHVEREU5LVxcdURERUZcXHVEREYxLVxcdURERjRcXHVEREY2LVxcdURERjlcXHVEREZCXFx1RERGQ1xcdURERkVcXHVEREZGXSl8XFx1RDgzQ1xcdURERjkoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFOVxcdURERUItXFx1RERFRFxcdURERUYtXFx1RERGNFxcdURERjdcXHVEREY5XFx1RERGQlxcdURERkNcXHVEREZGXSl8XFx1RDgzQ1xcdURERUEoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVEXFx1RERGNy1cXHVEREZBXSl8XFx1RDgzRVxcdURERDEoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfFxcdUQ4M0NcXHVEREY3KD86XFx1RDgzQ1tcXHVEREVBXFx1RERGNFxcdURERjhcXHVEREZBXFx1RERGQ10pfFxcdUQ4M0RcXHVEQzY5KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXxcXHVEODNDXFx1RERGMig/OlxcdUQ4M0NbXFx1RERFNlxcdURERTgtXFx1RERFRFxcdURERjAtXFx1RERGRl0pfFxcdUQ4M0NcXHVEREU2KD86XFx1RDgzQ1tcXHVEREU4LVxcdURERUNcXHVEREVFXFx1RERGMVxcdURERjJcXHVEREY0XFx1RERGNi1cXHVEREZBXFx1RERGQ1xcdURERkRcXHVEREZGXSl8XFx1RDgzQ1xcdURERjAoPzpcXHVEODNDW1xcdURERUFcXHVEREVDLVxcdURERUVcXHVEREYyXFx1RERGM1xcdURERjVcXHVEREY3XFx1RERGQ1xcdURERkVcXHVEREZGXSl8XFx1RDgzQ1xcdURERUQoPzpcXHVEODNDW1xcdURERjBcXHVEREYyXFx1RERGM1xcdURERjdcXHVEREY5XFx1RERGQV0pfFxcdUQ4M0NcXHVEREU5KD86XFx1RDgzQ1tcXHVEREVBXFx1RERFQ1xcdURERUZcXHVEREYwXFx1RERGMlxcdURERjRcXHVEREZGXSl8XFx1RDgzQ1xcdURERkUoPzpcXHVEODNDW1xcdURERUFcXHVEREY5XSl8XFx1RDgzQ1xcdURERUMoPzpcXHVEODNDW1xcdURERTZcXHVEREU3XFx1RERFOS1cXHVEREVFXFx1RERGMS1cXHVEREYzXFx1RERGNS1cXHVEREZBXFx1RERGQ1xcdURERkVdKXxcXHVEODNDXFx1RERGOCg/OlxcdUQ4M0NbXFx1RERFNi1cXHVEREVBXFx1RERFQy1cXHVEREY0XFx1RERGNy1cXHVEREY5XFx1RERGQlxcdURERkQtXFx1RERGRl0pfFxcdUQ4M0NcXHVEREVCKD86XFx1RDgzQ1tcXHVEREVFLVxcdURERjBcXHVEREYyXFx1RERGNFxcdURERjddKXxcXHVEODNDXFx1RERGNSg/OlxcdUQ4M0NbXFx1RERFNlxcdURERUEtXFx1RERFRFxcdURERjAtXFx1RERGM1xcdURERjctXFx1RERGOVxcdURERkNcXHVEREZFXSl8XFx1RDgzQ1xcdURERkIoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVFXFx1RERGM1xcdURERkFdKXxcXHVEODNDXFx1RERGMyg/OlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBLVxcdURERUNcXHVEREVFXFx1RERGMVxcdURERjRcXHVEREY1XFx1RERGN1xcdURERkFcXHVEREZGXSl8XFx1RDgzQ1xcdURERTgoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFOVxcdURERUItXFx1RERFRVxcdURERjAtXFx1RERGNVxcdURERjdcXHVEREZBLVxcdURERkZdKXxcXHVEODNDXFx1RERGMSg/OlxcdUQ4M0NbXFx1RERFNi1cXHVEREU4XFx1RERFRVxcdURERjBcXHVEREY3LVxcdURERkJcXHVEREZFXSl8XFx1RDgzQ1xcdURERkYoPzpcXHVEODNDW1xcdURERTZcXHVEREYyXFx1RERGQ10pfFxcdUQ4M0NcXHVEREZDKD86XFx1RDgzQ1tcXHVEREVCXFx1RERGOF0pfFxcdUQ4M0NcXHVEREZBKD86XFx1RDgzQ1tcXHVEREU2XFx1RERFQ1xcdURERjJcXHVEREYzXFx1RERGOFxcdURERkVcXHVEREZGXSl8XFx1RDgzQ1xcdURERUUoPzpcXHVEODNDW1xcdURERTgtXFx1RERFQVxcdURERjEtXFx1RERGNFxcdURERjYtXFx1RERGOV0pfFxcdUQ4M0NcXHVEREVGKD86XFx1RDgzQ1tcXHVEREVBXFx1RERGMlxcdURERjRcXHVEREY1XSl8KD86XFx1RDgzQ1tcXHVERkMzXFx1REZDNFxcdURGQ0FdfFxcdUQ4M0RbXFx1REM2RVxcdURDNzFcXHVEQzczXFx1REM3N1xcdURDODFcXHVEQzgyXFx1REM4NlxcdURDODdcXHVERTQ1LVxcdURFNDdcXHVERTRCXFx1REU0RFxcdURFNEVcXHVERUEzXFx1REVCNC1cXHVERUI2XXxcXHVEODNFW1xcdUREMjZcXHVERDM3LVxcdUREMzlcXHVERDNEXFx1REQzRVxcdUREQjhcXHVEREI5XFx1RERDRC1cXHVERENGXFx1RERENi1cXHVEREREXSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfCg/OlxcdTI2Rjl8XFx1RDgzQ1tcXHVERkNCXFx1REZDQ118XFx1RDgzRFxcdURENzUpKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXwoPzpbXFx1MjYxRFxcdTI3MEEtXFx1MjcwRF18XFx1RDgzQ1tcXHVERjg1XFx1REZDMlxcdURGQzddfFxcdUQ4M0RbXFx1REM0MlxcdURDNDNcXHVEQzQ2LVxcdURDNTBcXHVEQzY2XFx1REM2N1xcdURDNkItXFx1REM2RFxcdURDNzBcXHVEQzcyXFx1REM3NC1cXHVEQzc2XFx1REM3OFxcdURDN0NcXHVEQzgzXFx1REM4NVxcdURDQUFcXHVERDc0XFx1REQ3QVxcdUREOTBcXHVERDk1XFx1REQ5NlxcdURFNENcXHVERTRGXFx1REVDMFxcdURFQ0NdfFxcdUQ4M0VbXFx1REQwRlxcdUREMTgtXFx1REQxQ1xcdUREMUVcXHVERDFGXFx1REQzMC1cXHVERDM2XFx1RERCNVxcdUREQjZcXHVEREJCXFx1REREMi1cXHVEREQ1XSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfCg/OltcXHUyMzFBXFx1MjMxQlxcdTIzRTktXFx1MjNFQ1xcdTIzRjBcXHUyM0YzXFx1MjVGRFxcdTI1RkVcXHUyNjE0XFx1MjYxNVxcdTI2NDgtXFx1MjY1M1xcdTI2N0ZcXHUyNjkzXFx1MjZBMVxcdTI2QUFcXHUyNkFCXFx1MjZCRFxcdTI2QkVcXHUyNkM0XFx1MjZDNVxcdTI2Q0VcXHUyNkQ0XFx1MjZFQVxcdTI2RjJcXHUyNkYzXFx1MjZGNVxcdTI2RkFcXHUyNkZEXFx1MjcwNVxcdTI3MEFcXHUyNzBCXFx1MjcyOFxcdTI3NENcXHUyNzRFXFx1Mjc1My1cXHUyNzU1XFx1Mjc1N1xcdTI3OTUtXFx1Mjc5N1xcdTI3QjBcXHUyN0JGXFx1MkIxQlxcdTJCMUNcXHUyQjUwXFx1MkI1NV18XFx1RDgzQ1tcXHVEQzA0XFx1RENDRlxcdUREOEVcXHVERDkxLVxcdUREOUFcXHVEREU2LVxcdURERkZcXHVERTAxXFx1REUxQVxcdURFMkZcXHVERTMyLVxcdURFMzZcXHVERTM4LVxcdURFM0FcXHVERTUwXFx1REU1MVxcdURGMDAtXFx1REYyMFxcdURGMkQtXFx1REYzNVxcdURGMzctXFx1REY3Q1xcdURGN0UtXFx1REY5M1xcdURGQTAtXFx1REZDQVxcdURGQ0YtXFx1REZEM1xcdURGRTAtXFx1REZGMFxcdURGRjRcXHVERkY4LVxcdURGRkZdfFxcdUQ4M0RbXFx1REMwMC1cXHVEQzNFXFx1REM0MFxcdURDNDItXFx1RENGQ1xcdURDRkYtXFx1REQzRFxcdURENEItXFx1REQ0RVxcdURENTAtXFx1REQ2N1xcdUREN0FcXHVERDk1XFx1REQ5NlxcdUREQTRcXHVEREZCLVxcdURFNEZcXHVERTgwLVxcdURFQzVcXHVERUNDXFx1REVEMC1cXHVERUQyXFx1REVENVxcdURFRUJcXHVERUVDXFx1REVGNC1cXHVERUZBXFx1REZFMC1cXHVERkVCXXxcXHVEODNFW1xcdUREMEQtXFx1REQzQVxcdUREM0MtXFx1REQ0NVxcdURENDctXFx1REQ3MVxcdURENzMtXFx1REQ3NlxcdUREN0EtXFx1RERBMlxcdUREQTUtXFx1RERBQVxcdUREQUUtXFx1RERDQVxcdUREQ0QtXFx1RERGRlxcdURFNzAtXFx1REU3M1xcdURFNzgtXFx1REU3QVxcdURFODAtXFx1REU4MlxcdURFOTAtXFx1REU5NV0pfCg/OlsjXFwqMC05XFx4QTlcXHhBRVxcdTIwM0NcXHUyMDQ5XFx1MjEyMlxcdTIxMzlcXHUyMTk0LVxcdTIxOTlcXHUyMUE5XFx1MjFBQVxcdTIzMUFcXHUyMzFCXFx1MjMyOFxcdTIzQ0ZcXHUyM0U5LVxcdTIzRjNcXHUyM0Y4LVxcdTIzRkFcXHUyNEMyXFx1MjVBQVxcdTI1QUJcXHUyNUI2XFx1MjVDMFxcdTI1RkItXFx1MjVGRVxcdTI2MDAtXFx1MjYwNFxcdTI2MEVcXHUyNjExXFx1MjYxNFxcdTI2MTVcXHUyNjE4XFx1MjYxRFxcdTI2MjBcXHUyNjIyXFx1MjYyM1xcdTI2MjZcXHUyNjJBXFx1MjYyRVxcdTI2MkZcXHUyNjM4LVxcdTI2M0FcXHUyNjQwXFx1MjY0MlxcdTI2NDgtXFx1MjY1M1xcdTI2NUZcXHUyNjYwXFx1MjY2M1xcdTI2NjVcXHUyNjY2XFx1MjY2OFxcdTI2N0JcXHUyNjdFXFx1MjY3RlxcdTI2OTItXFx1MjY5N1xcdTI2OTlcXHUyNjlCXFx1MjY5Q1xcdTI2QTBcXHUyNkExXFx1MjZBQVxcdTI2QUJcXHUyNkIwXFx1MjZCMVxcdTI2QkRcXHUyNkJFXFx1MjZDNFxcdTI2QzVcXHUyNkM4XFx1MjZDRVxcdTI2Q0ZcXHUyNkQxXFx1MjZEM1xcdTI2RDRcXHUyNkU5XFx1MjZFQVxcdTI2RjAtXFx1MjZGNVxcdTI2RjctXFx1MjZGQVxcdTI2RkRcXHUyNzAyXFx1MjcwNVxcdTI3MDgtXFx1MjcwRFxcdTI3MEZcXHUyNzEyXFx1MjcxNFxcdTI3MTZcXHUyNzFEXFx1MjcyMVxcdTI3MjhcXHUyNzMzXFx1MjczNFxcdTI3NDRcXHUyNzQ3XFx1Mjc0Q1xcdTI3NEVcXHUyNzUzLVxcdTI3NTVcXHUyNzU3XFx1Mjc2M1xcdTI3NjRcXHUyNzk1LVxcdTI3OTdcXHUyN0ExXFx1MjdCMFxcdTI3QkZcXHUyOTM0XFx1MjkzNVxcdTJCMDUtXFx1MkIwN1xcdTJCMUJcXHUyQjFDXFx1MkI1MFxcdTJCNTVcXHUzMDMwXFx1MzAzRFxcdTMyOTdcXHUzMjk5XXxcXHVEODNDW1xcdURDMDRcXHVEQ0NGXFx1REQ3MFxcdURENzFcXHVERDdFXFx1REQ3RlxcdUREOEVcXHVERDkxLVxcdUREOUFcXHVEREU2LVxcdURERkZcXHVERTAxXFx1REUwMlxcdURFMUFcXHVERTJGXFx1REUzMi1cXHVERTNBXFx1REU1MFxcdURFNTFcXHVERjAwLVxcdURGMjFcXHVERjI0LVxcdURGOTNcXHVERjk2XFx1REY5N1xcdURGOTktXFx1REY5QlxcdURGOUUtXFx1REZGMFxcdURGRjMtXFx1REZGNVxcdURGRjctXFx1REZGRl18XFx1RDgzRFtcXHVEQzAwLVxcdURDRkRcXHVEQ0ZGLVxcdUREM0RcXHVERDQ5LVxcdURENEVcXHVERDUwLVxcdURENjdcXHVERDZGXFx1REQ3MFxcdURENzMtXFx1REQ3QVxcdUREODdcXHVERDhBLVxcdUREOERcXHVERDkwXFx1REQ5NVxcdUREOTZcXHVEREE0XFx1RERBNVxcdUREQThcXHVEREIxXFx1RERCMlxcdUREQkNcXHVEREMyLVxcdUREQzRcXHVEREQxLVxcdURERDNcXHVERERDLVxcdUREREVcXHVEREUxXFx1RERFM1xcdURERThcXHVEREVGXFx1RERGM1xcdURERkEtXFx1REU0RlxcdURFODAtXFx1REVDNVxcdURFQ0ItXFx1REVEMlxcdURFRDVcXHVERUUwLVxcdURFRTVcXHVERUU5XFx1REVFQlxcdURFRUNcXHVERUYwXFx1REVGMy1cXHVERUZBXFx1REZFMC1cXHVERkVCXXxcXHVEODNFW1xcdUREMEQtXFx1REQzQVxcdUREM0MtXFx1REQ0NVxcdURENDctXFx1REQ3MVxcdURENzMtXFx1REQ3NlxcdUREN0EtXFx1RERBMlxcdUREQTUtXFx1RERBQVxcdUREQUUtXFx1RERDQVxcdUREQ0QtXFx1RERGRlxcdURFNzAtXFx1REU3M1xcdURFNzgtXFx1REU3QVxcdURFODAtXFx1REU4MlxcdURFOTAtXFx1REU5NV0pXFx1RkUwRnwoPzpbXFx1MjYxRFxcdTI2RjlcXHUyNzBBLVxcdTI3MERdfFxcdUQ4M0NbXFx1REY4NVxcdURGQzItXFx1REZDNFxcdURGQzdcXHVERkNBLVxcdURGQ0NdfFxcdUQ4M0RbXFx1REM0MlxcdURDNDNcXHVEQzQ2LVxcdURDNTBcXHVEQzY2LVxcdURDNzhcXHVEQzdDXFx1REM4MS1cXHVEQzgzXFx1REM4NS1cXHVEQzg3XFx1REM4RlxcdURDOTFcXHVEQ0FBXFx1REQ3NFxcdURENzVcXHVERDdBXFx1REQ5MFxcdUREOTVcXHVERDk2XFx1REU0NS1cXHVERTQ3XFx1REU0Qi1cXHVERTRGXFx1REVBM1xcdURFQjQtXFx1REVCNlxcdURFQzBcXHVERUNDXXxcXHVEODNFW1xcdUREMEZcXHVERDE4LVxcdUREMUZcXHVERDI2XFx1REQzMC1cXHVERDM5XFx1REQzQy1cXHVERDNFXFx1RERCNVxcdUREQjZcXHVEREI4XFx1RERCOVxcdUREQkJcXHVERENELVxcdUREQ0ZcXHVEREQxLVxcdURERERdKS9nO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHlvZGEgKi9cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgaXNGdWxsd2lkdGhDb2RlUG9pbnQgPSBjb2RlUG9pbnQgPT4ge1xuXHRpZiAoTnVtYmVyLmlzTmFOKGNvZGVQb2ludCkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBDb2RlIHBvaW50cyBhcmUgZGVyaXZlZCBmcm9tOlxuXHQvLyBodHRwOi8vd3d3LnVuaXgub3JnL1B1YmxpYy9VTklEQVRBL0Vhc3RBc2lhbldpZHRoLnR4dFxuXHRpZiAoXG5cdFx0Y29kZVBvaW50ID49IDB4MTEwMCAmJiAoXG5cdFx0XHRjb2RlUG9pbnQgPD0gMHgxMTVGIHx8IC8vIEhhbmd1bCBKYW1vXG5cdFx0XHRjb2RlUG9pbnQgPT09IDB4MjMyOSB8fCAvLyBMRUZULVBPSU5USU5HIEFOR0xFIEJSQUNLRVRcblx0XHRcdGNvZGVQb2ludCA9PT0gMHgyMzJBIHx8IC8vIFJJR0hULVBPSU5USU5HIEFOR0xFIEJSQUNLRVRcblx0XHRcdC8vIENKSyBSYWRpY2FscyBTdXBwbGVtZW50IC4uIEVuY2xvc2VkIENKSyBMZXR0ZXJzIGFuZCBNb250aHNcblx0XHRcdCgweDJFODAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweDMyNDcgJiYgY29kZVBvaW50ICE9PSAweDMwM0YpIHx8XG5cdFx0XHQvLyBFbmNsb3NlZCBDSksgTGV0dGVycyBhbmQgTW9udGhzIC4uIENKSyBVbmlmaWVkIElkZW9ncmFwaHMgRXh0ZW5zaW9uIEFcblx0XHRcdCgweDMyNTAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweDREQkYpIHx8XG5cdFx0XHQvLyBDSksgVW5pZmllZCBJZGVvZ3JhcGhzIC4uIFlpIFJhZGljYWxzXG5cdFx0XHQoMHg0RTAwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhBNEM2KSB8fFxuXHRcdFx0Ly8gSGFuZ3VsIEphbW8gRXh0ZW5kZWQtQVxuXHRcdFx0KDB4QTk2MCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4QTk3QykgfHxcblx0XHRcdC8vIEhhbmd1bCBTeWxsYWJsZXNcblx0XHRcdCgweEFDMDAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEQ3QTMpIHx8XG5cdFx0XHQvLyBDSksgQ29tcGF0aWJpbGl0eSBJZGVvZ3JhcGhzXG5cdFx0XHQoMHhGOTAwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhGQUZGKSB8fFxuXHRcdFx0Ly8gVmVydGljYWwgRm9ybXNcblx0XHRcdCgweEZFMTAgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEZFMTkpIHx8XG5cdFx0XHQvLyBDSksgQ29tcGF0aWJpbGl0eSBGb3JtcyAuLiBTbWFsbCBGb3JtIFZhcmlhbnRzXG5cdFx0XHQoMHhGRTMwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhGRTZCKSB8fFxuXHRcdFx0Ly8gSGFsZndpZHRoIGFuZCBGdWxsd2lkdGggRm9ybXNcblx0XHRcdCgweEZGMDEgPD0gY29kZVBvaW50ICYmIGNvZGVQb2ludCA8PSAweEZGNjApIHx8XG5cdFx0XHQoMHhGRkUwIDw9IGNvZGVQb2ludCAmJiBjb2RlUG9pbnQgPD0gMHhGRkU2KSB8fFxuXHRcdFx0Ly8gS2FuYSBTdXBwbGVtZW50XG5cdFx0XHQoMHgxQjAwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4MUIwMDEpIHx8XG5cdFx0XHQvLyBFbmNsb3NlZCBJZGVvZ3JhcGhpYyBTdXBwbGVtZW50XG5cdFx0XHQoMHgxRjIwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4MUYyNTEpIHx8XG5cdFx0XHQvLyBDSksgVW5pZmllZCBJZGVvZ3JhcGhzIEV4dGVuc2lvbiBCIC4uIFRlcnRpYXJ5IElkZW9ncmFwaGljIFBsYW5lXG5cdFx0XHQoMHgyMDAwMCA8PSBjb2RlUG9pbnQgJiYgY29kZVBvaW50IDw9IDB4M0ZGRkQpXG5cdFx0KVxuXHQpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdWxsd2lkdGhDb2RlUG9pbnQ7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gaXNGdWxsd2lkdGhDb2RlUG9pbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBzdHJpcEFuc2kgPSByZXF1aXJlKCdzdHJpcC1hbnNpJyk7XG5jb25zdCBpc0Z1bGx3aWR0aENvZGVQb2ludCA9IHJlcXVpcmUoJ2lzLWZ1bGx3aWR0aC1jb2RlLXBvaW50Jyk7XG5jb25zdCBlbW9qaVJlZ2V4ID0gcmVxdWlyZSgnZW1vamktcmVnZXgnKTtcblxuY29uc3Qgc3RyaW5nV2lkdGggPSBzdHJpbmcgPT4ge1xuXHRpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycgfHwgc3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0c3RyaW5nID0gc3RyaXBBbnNpKHN0cmluZyk7XG5cblx0aWYgKHN0cmluZy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGVtb2ppUmVnZXgoKSwgJyAgJyk7XG5cblx0bGV0IHdpZHRoID0gMDtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGNvZGUgPSBzdHJpbmcuY29kZVBvaW50QXQoaSk7XG5cblx0XHQvLyBJZ25vcmUgY29udHJvbCBjaGFyYWN0ZXJzXG5cdFx0aWYgKGNvZGUgPD0gMHgxRiB8fCAoY29kZSA+PSAweDdGICYmIGNvZGUgPD0gMHg5RikpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIElnbm9yZSBjb21iaW5pbmcgY2hhcmFjdGVyc1xuXHRcdGlmIChjb2RlID49IDB4MzAwICYmIGNvZGUgPD0gMHgzNkYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIFN1cnJvZ2F0ZXNcblx0XHRpZiAoY29kZSA+IDB4RkZGRikge1xuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdHdpZHRoICs9IGlzRnVsbHdpZHRoQ29kZVBvaW50KGNvZGUpID8gMiA6IDE7XG5cdH1cblxuXHRyZXR1cm4gd2lkdGg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1dpZHRoO1xuLy8gVE9ETzogcmVtb3ZlIHRoaXMgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvblxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IHN0cmluZ1dpZHRoO1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgYW5zaVJlZ2V4ID0gcmVxdWlyZSgnYW5zaS1yZWdleCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZyA9PiB0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJyA/IHN0cmluZy5yZXBsYWNlKGFuc2lSZWdleCgpLCAnJykgOiBzdHJpbmc7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gKHtvbmx5Rmlyc3QgPSBmYWxzZX0gPSB7fSkgPT4ge1xuXHRjb25zdCBwYXR0ZXJuID0gW1xuXHRcdCdbXFxcXHUwMDFCXFxcXHUwMDlCXVtbXFxcXF0oKSM7P10qKD86KD86KD86KD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKykqfFthLXpBLVpcXFxcZF0rKD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKikqKT9cXFxcdTAwMDcpJyxcblx0XHQnKD86KD86XFxcXGR7MSw0fSg/OjtcXFxcZHswLDR9KSopP1tcXFxcZEEtUFItVFpjZi1udHFyeT0+PH5dKSknXG5cdF0uam9pbignfCcpO1xuXG5cdHJldHVybiBuZXcgUmVnRXhwKHBhdHRlcm4sIG9ubHlGaXJzdCA/IHVuZGVmaW5lZCA6ICdnJyk7XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==