(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("price", [], factory);
	else if(typeof exports === 'object')
		exports["price"] = factory();
	else
		root["price"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createHierarchicalMenu = exports.createMultirange = exports.tables = exports.configureFormValidation = exports.createProgressBar = exports.createTabpanel = exports.createSlider = exports.createMenu = exports.createTree = exports.createRadioGroup = exports.checkbox = exports.button = exports.initializeLink = exports.createDialogTooltip = exports.createTooltip = exports.createExpander = exports.createDialog = exports.createAutocomplete = exports.createAlert = undefined;
	
	var _index = __webpack_require__(32);
	
	var content = _interopRequireWildcard(_index);
	
	__webpack_require__(98);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// so, this is a big pain in the butt, but we need a separate entry
	// for the drop-in library (webpack-compiled stuff in output/)
	// and for the module library (babel-compiled stuff in lib/)
	// because of the way the CSS works.
	
	// webpack wants us to import the LESS into our javascript, as we
	// do above - but if we do this in babel, it craps out in any
	// project importing it, since the LESS file is no longer available.
	
	// so this file is an additional abstraction that's here to allow
	// webpack to include what it needs without corrupting the modular
	// library build.
	var createAlert = exports.createAlert = content.createAlert;
	var createAutocomplete = exports.createAutocomplete = content.createAutocomplete;
	var createDialog = exports.createDialog = content.createDialog;
	var createExpander = exports.createExpander = content.createExpander;
	var createTooltip = exports.createTooltip = content.createTooltip;
	var createDialogTooltip = exports.createDialogTooltip = content.createDialogTooltip;
	var initializeLink = exports.initializeLink = content.initializeLink;
	var button = exports.button = content.button;
	var checkbox = exports.checkbox = content.checkbox;
	var createRadioGroup = exports.createRadioGroup = content.createRadioGroup;
	var createTree = exports.createTree = content.createTree;
	var createMenu = exports.createMenu = content.createMenu;
	var createSlider = exports.createSlider = content.createSlider;
	var createTabpanel = exports.createTabpanel = content.createTabpanel;
	var createProgressBar = exports.createProgressBar = content.createProgressBar;
	var configureFormValidation = exports.configureFormValidation = content.configureFormValidation;
	var tables = exports.tables = content.tables;
	var createMultirange = exports.createMultirange = content.createMultirange;
	var createHierarchicalMenu = exports.createHierarchicalMenu = content.createHierarchicalMenu;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.tables = exports.createHierarchicalMenu = exports.createSlider = exports.configureFormValidation = exports.createProgressBar = exports.createTabpanel = exports.createMultirange = exports.createMenu = exports.createTree = exports.createRadioGroup = exports.checkbox = exports.button = exports.initializeLink = exports.createDialogTooltip = exports.createTooltip = exports.createExpander = exports.createDialog = exports.createAutocomplete = exports.createAlert = undefined;
	
	var _alert = __webpack_require__(33);
	
	var _alert2 = _interopRequireDefault(_alert);
	
	var _dialog = __webpack_require__(34);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	var _tooltip = __webpack_require__(43);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	var _tooltipDialog = __webpack_require__(46);
	
	var _tooltipDialog2 = _interopRequireDefault(_tooltipDialog);
	
	var _link = __webpack_require__(47);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _button = __webpack_require__(48);
	
	var button = _interopRequireWildcard(_button);
	
	var _checkbox = __webpack_require__(49);
	
	var checkbox = _interopRequireWildcard(_checkbox);
	
	var _radio = __webpack_require__(51);
	
	var _radio2 = _interopRequireDefault(_radio);
	
	var _tree = __webpack_require__(52);
	
	var _tree2 = _interopRequireDefault(_tree);
	
	var _menu = __webpack_require__(57);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _multirange = __webpack_require__(68);
	
	var _multirange2 = _interopRequireDefault(_multirange);
	
	var _autocomplete = __webpack_require__(71);
	
	var _autocomplete2 = _interopRequireDefault(_autocomplete);
	
	var _tabpanel = __webpack_require__(75);
	
	var _tabpanel2 = _interopRequireDefault(_tabpanel);
	
	var _progressBar = __webpack_require__(80);
	
	var _progressBar2 = _interopRequireDefault(_progressBar);
	
	var _expander = __webpack_require__(81);
	
	var _expander2 = _interopRequireDefault(_expander);
	
	var _formValidation = __webpack_require__(84);
	
	var _formValidation2 = _interopRequireDefault(_formValidation);
	
	var _sortableTable = __webpack_require__(93);
	
	var _sortableTable2 = _interopRequireDefault(_sortableTable);
	
	var _collapsingTable = __webpack_require__(94);
	
	var collapsingTable = _interopRequireWildcard(_collapsingTable);
	
	var _slider = __webpack_require__(69);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _hierarchicalMenu = __webpack_require__(95);
	
	var _hierarchicalMenu2 = _interopRequireDefault(_hierarchicalMenu);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (!('remove' in Element.prototype)) {
	  Element.prototype.remove = function () {
	    if (this.parentNode) {
	      this.parentNode.removeChild(this);
	    }
	  };
	}
	
	var tables = {
	  createSortableTable: _sortableTable2.default,
	  makeTableResponsive: collapsingTable.makeTableResponsive
	};
	
	exports.createAlert = _alert2.default;
	exports.createAutocomplete = _autocomplete2.default;
	exports.createDialog = _dialog2.default;
	exports.createExpander = _expander2.default;
	exports.createTooltip = _tooltip2.default;
	exports.createDialogTooltip = _tooltipDialog2.default;
	exports.initializeLink = _link2.default;
	exports.button = button;
	exports.checkbox = checkbox;
	exports.createRadioGroup = _radio2.default;
	exports.createTree = _tree2.default;
	exports.createMenu = _menu2.default;
	exports.createMultirange = _multirange2.default;
	exports.createTabpanel = _tabpanel2.default;
	exports.createProgressBar = _progressBar2.default;
	exports.configureFormValidation = _formValidation2.default;
	exports.createSlider = _slider2.default;
	exports.createHierarchicalMenu = _hierarchicalMenu2.default;
	exports.tables = tables;

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createAlert;
	function createAlert(message) {
	  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  var timeout = arguments[2];
	
	  var output = document.createElement('div');
	  classes.forEach(function (c) {
	    return output.classList.add(c);
	  });
	
	  output.classList.add('price');
	
	  output.innerHTML = message;
	  if (timeout) {
	    setTimeout(function () {
	      if (output.parentElement) {
	        output.remove();
	      }
	    }, timeout);
	  }
	
	  return output;
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createDialog;
	
	var _focusUtils = __webpack_require__(35);
	
	var _header = __webpack_require__(38);
	
	var _contentArea = __webpack_require__(40);
	
	var _buttonBar = __webpack_require__(41);
	
	var _lightboxScreen = __webpack_require__(42);
	
	function createDialog(id) {
	  var screen = (0, _lightboxScreen.createScreen)();
	
	  var alert = document.getElementById(id);
	
	  // close button
	  var xButton = document.createElement('button');
	  xButton.classList.add('closeButton');
	  xButton.setAttribute('aria-label', 'Close dialog');
	  xButton.innerHTML = '<span aria-hidden="true"></span>';
	  alert.appendChild(xButton);
	
	  alert.classList.add('price');
	  alert.classList.add('dialog_box');
	
	  var defaultClassList = ['price', 'dialog_box'];
	  for (var i = 0; i < alert.classList.length; i++) {
	    defaultClassList.push(alert.classList[i]);
	  }
	
	  function setInitialFocus(config) {
	    if (!config.isAlert) {
	      // select the content...? Spec says 'first focusable item' and also
	      // says that the content area should be role=document and tabindex=0, so shouldn't it
	      // 100% of the time be the 'first focusable item'?
	      var target = (0, _focusUtils.getFirstFocusableChild)(alert);
	      if (target.classList.contains('closeButton')) {
	        target = (0, _focusUtils.getNextFocusableChild)(alert, target);
	      }
	
	      if (target) {
	        return target.focus();
	      }
	    }
	
	    if (config.isAlert && config.isDetail) {
	      return content.focus();
	    }
	
	    if (buttonBar.getFirstButton()) {
	      return buttonBar.getFirstButton().focus();
	    }
	
	    // not sure this would ever get called, or what it should do if it did.
	    alert.focus();
	  }
	
	  function reset() {
	    clearClasses();
	    clearKeyHandlers();
	    header.deactivate();
	    content.clear();
	    buttonBar.clear();
	    screen.clear();
	    currentConfig = null;
	  }
	
	  function addClasses(classes) {
	    classes.forEach(function (item) {
	      return alert.classList.add(item);
	    });
	  }
	
	  function clearClasses() {
	    var toRemove = [];
	    for (var i = 0; i < alert.classList.length; i++) {
	      toRemove.push(alert.classList[i]);
	    }
	
	    toRemove.forEach(function (c) {
	      alert.classList.remove(c);
	    });
	
	    addClasses(defaultClassList);
	  }
	
	  function setRole(role) {
	    alert.setAttribute('role', role);
	  }
	
	  function hideCloseButton() {
	    xButton.classList.add('hidden');
	  }
	
	  function showCloseButton() {
	    xButton.classList.remove('hidden');
	  }
	
	  var header = (0, _header.createHeader)();
	  function setTitle(text, show) {
	    if (show) {
	      header.activate(text);
	      alert.setAttribute('aria-labelledby', header.id);
	      alert.insertBefore(header, xButton);
	      alert.setAttribute('tabindex', '-1');
	      alert.classList.remove('noTitle');
	    } else {
	      header.deactivate();
	      alert.removeAttribute('tabindex');
	      alert.setAttribute('aria-label', text);
	      alert.classList.add('noTitle');
	    }
	  }
	
	  alert.setAttribute('aria-hidden', 'true');
	  alert.classList.add('hidden');
	
	  var content = (0, _contentArea.createContentArea)();
	  alert.setAttribute('aria-describedby', content.id);
	  alert.appendChild(content);
	
	  xButton.addEventListener('click', handleEscape);
	
	  var buttonBar = (0, _buttonBar.createButtonBar)();
	  alert.appendChild(buttonBar);
	
	  var escapeHandler;
	  var currentConfig;
	  function show(config) {
	    currentConfig = config;
	
	    if (config.classes) {
	      addClasses(config.classes);
	    }
	
	    if (config.describedby) {
	      alert.setAttribute('aria-describedby', config.describedby);
	    }
	
	    if (config.lifecycle.preOpen) {
	      config.lifecycle.preOpen();
	    }
	
	    if (config.hideCloseButton) {
	      hideCloseButton();
	    } else {
	      showCloseButton();
	    }
	
	    if (config.wrapperID) {
	      document.getElementById(config.wrapperID).setAttribute('aria-hidden', 'true');
	    }
	
	    config.isAlert ? setRole('alertdialog') : setRole('dialog');
	    setTitle(config.title, config.showHeader);
	    buttonBar.initialize(config.buttons, hide);
	    setKeyHandlers(config.buttons);
	
	    content.render(config.message);
	
	    if (config.description) {
	      var desc_box = document.createElement('div');
	      desc_box.id = 'desc';
	
	      var description = document.createElement('p');
	      description.innerText = config.description;
	
	      desc_box.appendChild(description);
	
	      content.insertBefore(desc_box, content.children[0]);
	      alert.setAttribute('aria-describedby', desc_box.id);
	    }
	
	    screen.show();
	    document.body.appendChild(alert);
	
	    if (config.lifecycle.postOpen) {
	      config.lifecycle.postOpen();
	    }
	
	    alert.setAttribute('aria-hidden', 'false');
	    alert.classList.remove('hidden');
	
	    setInitialFocus(config);
	  }
	
	  function hide() {
	    if (currentConfig.lifecycle.preClose) {
	      currentConfig.lifecycle.preClose();
	    }
	
	    if (currentConfig.wrapperID) {
	      document.getElementById(currentConfig.wrapperID).removeAttribute('aria-hidden');
	    }
	
	    if (alert.hasAttribute('aria-describedby')) {
	      alert.removeAttribute('aria-describedby');
	    }
	
	    var postHide = currentConfig.lifecycle.postClose || function () {};
	    reset();
	    alert.setAttribute('aria-hidden', 'true');
	    alert.classList.add('hidden');
	    returnFocusTo.focus();
	    postHide();
	  }
	
	  function handleEscape() {
	    if (escapeHandler.preClose) {
	      escapeHandler.preClose();
	    }
	
	    // escapeHandler gets nulled out by hide, so
	    // pull this out here.
	    var postClose = escapeHandler.postClose;
	
	    hide();
	
	    if (postClose) {
	      postClose();
	    }
	  }
	
	  function setKeyHandlers(buttons) {
	
	    escapeHandler = buttons.reduce(function (acc, val) {
	      if (acc) {
	        return acc;
	      }
	      if (val.handleEscape) {
	        return {
	          preClose: val.preClose,
	          postClose: val.postClose
	        };
	      }
	    }, null) || {};
	  }
	
	  function clearKeyHandlers() {
	    escapeHandler = null;
	  }
	
	  function keyUpHandler(e) {
	    if (e.which === 27) {
	      handleEscape();
	      e.stopPropagation();
	    }
	  }
	
	  alert.addEventListener('keyup', keyUpHandler);
	
	  (0, _focusUtils.initTabTrap)(alert);
	
	  var returnFocusTo;
	  return function (triggerElement, config) {
	    returnFocusTo = triggerElement;
	
	    // make sure we never end up with a case where a non-alert box is treated
	    // as a simple alert.
	    if (!config.isAlert) {
	      config.isDetail = true;
	    }
	
	    if (!config.lifecycle) {
	      config.lifecycle = {};
	    }
	
	    show(config);
	  };
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getFirstFocusableChild = getFirstFocusableChild;
	exports.getNextFocusableChild = getNextFocusableChild;
	exports.getLastFocusableChild = getLastFocusableChild;
	exports.initTabTrap = initTabTrap;
	
	var _selectionUtils = __webpack_require__(36);
	
	var focusableQuery = 'input:not([tabindex^="-"]), select:not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), object:not([tabindex^="-"]), [href]:not([tabindex^="-"]), [tabindex]:not([tabindex^="-"]):not(.tabtrap)';
	
	function getFirstFocusableChild(element) {
	  return element.querySelector(focusableQuery);
	}
	
	function getNextFocusableChild(element, current) {
	  var all = (0, _selectionUtils.queryAll)(focusableQuery);
	  var targetReturnIndex = all.indexOf(current) + 1;
	
	  if (targetReturnIndex <= all.length - 1) {
	    return all[targetReturnIndex];
	  }
	
	  return null;
	}
	
	function getLastFocusableChild(element) {
	  var all = element.querySelectorAll(focusableQuery);
	  return all[all.length - 1];
	}
	
	function initTabTrap(element) {
	  function createTrap() {
	    var trap = document.createElement('div');
	    trap.classList.add('tabtrap');
	    trap.setAttribute('tabindex', '0');
	
	    return trap;
	  }
	
	  function applyTraps(element, firstTrap, lastTrap) {
	    firstTrap.addEventListener('focus', function () {
	      getLastFocusableChild(element).focus();
	    });
	
	    lastTrap.addEventListener('focus', function () {
	      getFirstFocusableChild(element).focus();
	    });
	
	    element.insertBefore(firstTrap, element.firstChild);
	    element.appendChild(lastTrap);
	  }
	
	  var firstTrap = createTrap();
	  var lastTrap = createTrap();
	
	  applyTraps(element, firstTrap, lastTrap);
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.queryAll = queryAll;
	
	var _collectionUtils = __webpack_require__(37);
	
	function queryAll(selector, context) {
	  context = context || document;
	  return (0, _collectionUtils.toArray)(context.querySelectorAll(selector));
	}

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArray = toArray;
	function toArray(arraylike) {
	  return Array.prototype.slice.call(arraylike);
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createHeader = createHeader;
	
	var _guidUtils = __webpack_require__(39);
	
	function activate(header, text) {
	  header.isActive = true;
	  header.innerText = text;
	  header.classList.remove('hidden');
	}
	
	function deactivate(header) {
	  header.innerText = '';
	  header.isActive = false;
	  header.classList.add('hidden');
	}
	
	function createHeader() {
	  var header = document.createElement('p');
	  header.classList.add('header');
	  // header.setAttribute('role', 'heading');
	  // header.setAttribute('aria-level', '1');
	  header.id = (0, _guidUtils.generateGuid)();
	  header.isActive = false;
	
	  header.activate = activate.bind(null, header);
	  header.deactivate = deactivate.bind(null, header);
	
	  return header;
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.generateGuid = generateGuid;
	/*
	  note - not a true guid. I prepend 'g' because browsers cry
	  if an element ID starts with a number.
	*/
	
	function generateGuid() {
	  var S4 = function S4() {
	    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
	  };
	  return 'g' + (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createContentArea = createContentArea;
	
	var _guidUtils = __webpack_require__(39);
	
	function renderContent(contentArea, message) {
	  if (message.substr) {
	    var p = document.createElement('p');
	    p.innerText = message;
	    contentArea.appendChild(p);
	  } else {
	    contentArea.appendChild(message);
	  }
	}
	
	function clearContent(contentArea) {
	  contentArea.innerText = '';
	}
	
	function createContentArea() {
	  var contentArea = document.createElement('div');
	  var contentID = (0, _guidUtils.generateGuid)();
	  contentArea.id = contentID;
	  contentArea.classList.add('content');
	  contentArea.setAttribute('role', 'document');
	  contentArea.setAttribute('tabindex', '-1');
	
	  contentArea.render = renderContent.bind(null, contentArea);
	  contentArea.clear = clearContent.bind(null, contentArea);
	
	  return contentArea;
	}

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createButtonBar = createButtonBar;
	function getFirstButton(buttonBar) {
	  return buttonBar.children[0] || null;
	}
	
	function getLastButton(buttonBar) {
	  var buttons = buttonBar.children;
	  return buttons[buttons.length - 1] || null;
	}
	
	function clearButtons(buttonBar) {
	  buttonBar.innerHTML = '';
	}
	
	function initializeButtonBar(buttonBar, config, hide) {
	  clearButtons(buttonBar);
	
	  formatButtons(config, hide).forEach(function (button, index, buttons) {
	    buttonBar.appendChild(button.button);
	
	    if (index < buttons.length - 1) {
	      var space = document.createElement('span');
	      space.innerHTML = 'Â ';
	      buttonBar.appendChild(space);
	    }
	  });
	}
	
	function formatButtons(config, hide) {
	  return config.map(function (buttonConfig) {
	    var button;
	
	    if (buttonConfig.markup) {
	      var wrapper = document.createElement('div');
	      wrapper.innerHTML = buttonConfig.markup;
	      button = wrapper.querySelector('button');
	      wrapper = null;
	    } else {
	      button = document.createElement('button');
	      button.innerText = buttonConfig.label;
	    }
	
	    if (buttonConfig.classes) {
	      buttonConfig.classes.forEach(function (c) {
	        return button.classList.add(c);
	      });
	    }
	
	    var handler = function handler() {
	      if (buttonConfig.preClose) {
	        buttonConfig.preClose();
	      }
	
	      hide();
	
	      if (buttonConfig.postClose) {
	        buttonConfig.postClose();
	      }
	    };
	
	    button.addEventListener('click', handler);
	
	    return {
	      button: button,
	      handler: handler
	    };
	  });
	}
	
	function createButtonBar() {
	  var buttonBar = document.createElement('div');
	  buttonBar.classList.add('buttons');
	
	  buttonBar.getFirstButton = getFirstButton.bind(null, buttonBar);
	  buttonBar.getLastButton = getLastButton.bind(null, buttonBar);
	  buttonBar.clear = clearButtons.bind(null, buttonBar);
	  buttonBar.initialize = initializeButtonBar.bind(null, buttonBar);
	
	  return buttonBar;
	}

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createScreen = createScreen;
	function clearScreen(screen) {
	  screen.remove();
	}
	
	function showScreen(screen) {
	  document.body.appendChild(screen);
	}
	
	function createScreen() {
	  var screen = document.createElement('div');
	  screen.classList.add('price');
	  screen.classList.add('screen');
	  screen.show = showScreen.bind(null, screen);
	  screen.clear = clearScreen.bind(null, screen);
	
	  return screen;
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createTooltip;
	
	var _guidUtils = __webpack_require__(39);
	
	var _keyboardUtils = __webpack_require__(44);
	
	var _noclobberUtils = __webpack_require__(45);
	
	function createTooltip(trigger) {
	  var tipText = trigger.getAttribute('data-tooltip');
	  var tipID = (0, _guidUtils.generateGuid)();
	  var tip = document.createElement('span');
	
	  tip.setAttribute('role', 'tooltip');
	  tip.id = tipID;
	  tip.classList.add('price');
	  tip.classList.add('tooltip');
	  tip.innerText = tipText;
	  trigger.parentElement.insertBefore(tip, trigger);
	  trigger.parentElement.insertBefore(trigger, tip);
	
	  (0, _noclobberUtils.noClobber)(trigger, 'aria-describedby', tipID);
	
	  var causes = {
	    INITIAL: 'initial',
	    FOCUS: 'focus',
	    MOUSE: 'mouse',
	    ESCAPE: 'escape'
	  };
	
	  var currentCause = causes.INITIAL;
	
	  function showTip(cause) {
	    if (currentCause === causes.FOCUS) {
	      // prevents 'MOUSE' cause from replacing 'FOCUS' cause.
	      return;
	    }
	
	    tip.classList.remove('hidden');
	    tip.setAttribute('aria-hidden', 'false');
	
	    currentCause = cause;
	  }
	
	  function hideTip(cause) {
	    if (cause === causes.ESCAPE || currentCause === cause) {
	      tip.classList.add('hidden');
	      tip.setAttribute('aria-hidden', 'true');
	      currentCause = '';
	    }
	  }
	
	  function escapeHandler() {
	    hideTip(causes.ESCAPE);
	  }
	
	  var cancelElementEscape = (0, _keyboardUtils.onElementEscape)(document.body, escapeHandler);
	
	  var focusHandler = showTip.bind(null, causes.FOCUS);
	  var blurHandler = hideTip.bind(null, causes.FOCUS);
	  var overHandler = showTip.bind(null, causes.MOUSE);
	  var outHandler = hideTip.bind(null, causes.MOUSE);
	
	  trigger.addEventListener('focus', focusHandler);
	  trigger.addEventListener('blur', blurHandler);
	  trigger.addEventListener('mouseover', overHandler);
	  trigger.addEventListener('mouseout', outHandler);
	
	  hideTip(causes.INITIAL);
	
	  return function disableTooltip() {
	    hideTip(causes.ESCAPE);
	
	    cancelElementEscape();
	
	    try {
	      tip.remove();
	    } catch (err) {
	      /*no op*/
	    }
	
	    trigger.removeEventListener('focus', focusHandler);
	    trigger.removeEventListener('blur', blurHandler);
	    trigger.removeEventListener('mouseover', overHandler);
	    trigger.removeEventListener('mouseout', outHandler);
	    trigger.removeAttribute('aria-describedby');
	  };
	}

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.onElementEnter = onElementEnter;
	exports.onElementEscape = onElementEscape;
	exports.onElementSpace = onElementSpace;
	exports.onElementLeft = onElementLeft;
	exports.onElementRight = onElementRight;
	exports.onElementUp = onElementUp;
	exports.onElementDown = onElementDown;
	exports.onElementHome = onElementHome;
	exports.onElementEnd = onElementEnd;
	exports.onElementPageUp = onElementPageUp;
	exports.onElementPageDown = onElementPageDown;
	exports.onElementF10 = onElementF10;
	exports.isAlphaNumeric = isAlphaNumeric;
	exports.onElementCharacter = onElementCharacter;
	exports.trapEnter = trapEnter;
	var KEYS = exports.KEYS = {
	  BACKSPACE: 8,
	  TAB: 9,
	  ENTER: 13,
	  SHIFT: 16,
	  CTRL: 17,
	  ALT: 18,
	  ESCAPE: 27,
	  SPACE: 32,
	  LEFT: 37,
	  RIGHT: 39,
	  UP: 38,
	  DOWN: 40,
	  F10: 121,
	  HOME: 36,
	  END: 35,
	  PAGE_UP: 33,
	  PAGE_DOWN: 34
	};
	
	function bindElementToEventValue(element, eventName, testValue, handler) {
	  function localHandler(e) {
	    if (e.which === testValue) {
	      handler(e);
	    }
	  }
	
	  element.addEventListener(eventName, localHandler);
	  return function () {
	    element.removeEventListener(eventName, localHandler);
	  };
	}
	
	function bindElementToKeypressValue(element, testValue, handler) {
	  return bindElementToEventValue(element, 'keypress', testValue, handler);
	}
	
	function bindElementToKeydownValue(element, testValue, handler) {
	  return bindElementToEventValue(element, 'keydown', testValue, handler);
	}
	
	function onElementEnter(element, handler) {
	  return bindElementToKeypressValue(element, KEYS.ENTER, handler);
	}
	
	function onElementEscape(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.ESCAPE, handler);
	}
	
	function onElementSpace(element, handler) {
	  return bindElementToKeypressValue(element, KEYS.SPACE, handler);
	}
	
	function onElementLeft(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.LEFT, handler);
	}
	
	function onElementRight(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.RIGHT, handler);
	}
	
	function onElementUp(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.UP, handler);
	}
	
	function onElementDown(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.DOWN, handler);
	}
	
	function onElementHome(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.HOME, handler);
	}
	
	function onElementEnd(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.END, handler);
	}
	
	function onElementPageUp(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.PAGE_UP, handler);
	}
	
	function onElementPageDown(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.PAGE_DOWN, handler);
	}
	
	function onElementF10(element, handler) {
	  return bindElementToKeydownValue(element, KEYS.F10, handler);
	}
	
	function isAlphaNumeric(charCode) {
	  return charCode >= 48 && charCode <= 90 /* numbers, uppercase letters */
	  || charCode >= 97 && charCode <= 122 /* lowercase letters */;
	}
	
	function onElementCharacter(element, handler) {
	  function localHandler(e) {
	    var charCode = e.which;
	    if (isAlphaNumeric(charCode)) {
	      handler(e);
	    }
	  }
	
	  element.addEventListener('keypress', localHandler);
	  return function () {
	    element.removeEventListener('keypress', localHandler);
	  };
	}
	
	function trapEnter(element) {
	  onElementEnter(element, function (e) {
	    e.stopPropagation();
	    e.preventDefault();
	  });
	}

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.noClobber = noClobber;
	/**
	 * Whitespace RegExp.
	 */
	
	var whitespace = /\s+/;
	
	/**
	 * Add `attr=val` without clobbering an existing value.
	 * @param  {Element}  element [Element object]
	 * @param  {String}   attr    [Attribute to update]
	 * @param  {Array}    ids     [rest parameters of ids to add]
	 */
	function noClobber(element, attr) {
	  var current = element.getAttribute(attr);
	  // if there is no value, just add the new one
	
	  for (var _len = arguments.length, ids = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    ids[_key - 2] = arguments[_key];
	  }
	
	  if (!current) {
	    return element.setAttribute(attr, ids.join(' '));
	  }
	
	  // remove "extra" whitespace, then split by any whitespace
	  var parts = current.trim().split(whitespace);
	
	  ids.map(function (val) {
	    if (!~parts.indexOf(val)) {
	      parts.push(val);
	    }
	  });
	
	  // set new val
	  return element.setAttribute(attr, parts.join(' '));
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createDialogTooltip;
	
	var _focusUtils = __webpack_require__(35);
	
	var _guidUtils = __webpack_require__(39);
	
	var _keyboardUtils = __webpack_require__(44);
	
	function createDialogTooltip(trigger, _ref) {
	  var contentID = _ref.contentID,
	      submitID = _ref.submitID,
	      cancelID = _ref.cancelID,
	      onCancel = _ref.onCancel,
	      onSubmit = _ref.onSubmit,
	      onOpen = _ref.onOpen,
	      label = _ref.label,
	      position = _ref.position;
	
	  var content = document.getElementById(contentID);
	  var tipID = (0, _guidUtils.generateGuid)();
	  var tip = document.createElement('div');
	
	  if (!position) {
	    position = getTipPosition;
	  }
	
	  tip.setAttribute('aria-label', label);
	
	  tip.setAttribute('role', 'dialog');
	  tip.id = tipID;
	
	  // see tooltip/style.less for tooltip style.
	  tip.classList.add('price');
	  tip.classList.add('tooltip');
	
	  tip.appendChild(content);
	  content.classList.remove('hidden');
	
	  trigger.parentElement.insertBefore(tip, trigger);
	  trigger.parentElement.insertBefore(trigger, tip);
	
	  var submitButton = submitID ? document.getElementById(submitID) : null;
	  var cancelButton = cancelID ? document.getElementById(cancelID) : null;
	
	  function submit() {
	    onSubmit && onSubmit();
	    hideTip();
	  }
	
	  function cancel(returnFocus) {
	    onCancel && onCancel();
	    hideTip();
	    if (returnFocus) {
	      trigger.focus();
	    }
	  }
	
	  function showTip() {
	    document.addEventListener('mousedown', cancel);
	    onOpen && onOpen();
	    trigger.setAttribute('aria-describedby', tip.id);
	    tip.classList.remove('hidden');
	    tip.setAttribute('aria-hidden', 'false');
	
	    (0, _focusUtils.getFirstFocusableChild)(tip).focus();
	  }
	
	  function hideTip() {
	    document.removeEventListener('mousedown', cancel);
	    tip.classList.add('hidden');
	    tip.setAttribute('aria-hidden', 'true');
	    trigger.removeAttribute('aria-describedby');
	  }
	
	  trigger.addEventListener('click', function () {
	    if (tip.classList.contains('hidden')) {
	      showTip();
	    } else {
	      hideTip();
	    }
	  });
	
	  tip.addEventListener('mousedown', function (e) {
	    e.stopPropagation();
	  });
	
	  var cancelBodyListener = (0, _keyboardUtils.onElementEscape)(document.body, cancel.bind({}, true));
	
	  if (submitButton) {
	    submitButton.addEventListener('click', submit);
	  }
	
	  if (cancelButton) {
	    cancelButton.addEventListener('click', cancel);
	  }
	
	  function getTipPosition(trigger, tip) {
	
	    var triggerBounds = trigger.getClientRects()[0];
	    var tipBounds = tip.getClientRects()[0];
	
	    return {
	      left: triggerBounds.left + triggerBounds.width + 10,
	      top: triggerBounds.top + triggerBounds.height / 2 - tipBounds.height / 2
	    };
	  }
	
	  hideTip();
	  (0, _focusUtils.initTabTrap)(tip);
	
	  return function disableTooltip() {
	    trigger.removeEventListener('focus', showTip);
	    cancelBodyListener();
	    hideTip();
	    if (tip.parentNode) {
	      tip.parentNode.removeChild(tip);
	    }
	  };
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = initializeLink;
	
	var _keyboardUtils = __webpack_require__(44);
	
	function initializeLink(element) {
	  // if it's an anchor tag, fall back on default browser behavior.
	  if (element.tagName.toLowerCase() === 'a') {
	    return;
	  }
	  var targetURL;
	  element.classList.add('price');
	
	  if (element.getAttribute('href')) {
	    targetURL = element.getAttribute('href');
	  } else if (element.getAttribute('data-url')) {
	    targetURL = element.getAttribute('data-url');
	  } else {
	    return;
	  }
	
	  function navigateToLink(e) {
	    e.preventDefault();
	    e.stopPropagation();
      var dataTarget = element.getAttribute('data-target')
      if (dataTarget) {
        window.open(targetURL,dataTarget);
      }
	    else window.location.href = targetURL;
	  }
	
	  element.setAttribute('tabindex', 0);
	  element.setAttribute('role', 'link');
	  element.addEventListener('click', navigateToLink);
	  (0, _keyboardUtils.onElementEnter)(element, navigateToLink);
	  (0, _keyboardUtils.onElementF10)(element, function (e) {
	    if (e.shiftKey) {
	      if (window.CustomEvent) {
	        try {
	          element.dispatchEvent(new CustomEvent('contextmenu'));
	        } catch (e) {
	          return;
	        }
	      } else if (document.createEvent) {
	        var ev = document.createEvent('HTMLEvents');
	        ev.initEvent('contextmenu', true, false);
	        element.dispatchEvent(ev);
	      } else {
	        // Internet Explorer
	        element.fireEvent('oncontextmenu');
	      }
	    }
	  });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initializeButton = initializeButton;
	exports.initializeToggleButton = initializeToggleButton;
	
	var _keyboardUtils = __webpack_require__(44);
	
	function bindElementToInputs(element, behavior) {
	  if (element.tagName.toUpperCase() !== 'BUTTON') {
	    (0, _keyboardUtils.onElementSpace)(element, function (e) {
	      e.preventDefault();
	      e.stopPropagation();
	
	      behavior(e);
	    });
	
	    (0, _keyboardUtils.onElementEnter)(element, function (e) {
	      e.preventDefault();
	      e.stopPropagation();
	
	      behavior(e);
	    });
	  }
	
	  element.addEventListener('click', behavior);
	}
	
	function assignRoleIfNecessary(element) {
	  if (element.tagName.toLowerCase() !== 'button') {
	    element.setAttribute('role', 'button');
	    element.setAttribute('tabindex', '0');
	  }
	}
	
	function initializeIcon(element) {
	  var icon = document.createElement('span');
	  icon.setAttribute('aria-hidden', true);
	  icon.classList.add('pressed-on-icon');
	  element.insertBefore(icon, element.firstChild);
	}
	
	function initializeButton(element, behavior) {
	  element.classList.add('price');
	  assignRoleIfNecessary(element);
	  bindElementToInputs(element, behavior);
	}
	
	function initializeToggleButton(element, toggleFunction) {
	  var initialState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	  element.classList.add('price');
	  assignRoleIfNecessary(element);
	  element.setAttribute('aria-pressed', initialState);
	  initializeIcon(element);
	
	  if (!toggleFunction) {
	    throw new Error('You must provide a toggle function to a toggle button. It should return \'true\' when the button should have a \'pressed\' state, and \'false\' otherwise.');
	  }
	
	  function toggle(e) {
	    var toggledOn = toggleFunction(e);
	    element.setAttribute('aria-pressed', toggledOn ? 'true' : 'false');
	  }
	
	  bindElementToInputs(element, toggle);
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggle = toggle;
	exports.isToggledOn = isToggledOn;
	exports.toggleOn = toggleOn;
	exports.toggleOff = toggleOff;
	exports.toggleMixed = toggleMixed;
	exports.createSingleCheckbox = createSingleCheckbox;
	exports.createCheckboxGroup = createCheckboxGroup;
	
	var _containerUtils = __webpack_require__(50);
	
	var _guidUtils = __webpack_require__(39);
	
	var _keyboardUtils = __webpack_require__(44);
	
	function toggle(element) {
	  if (isToggledOn(element)) {
	    toggleOff(element);
	  } else {
	    toggleOn(element);
	  }
	}
	
	function isToggledOn(element) {
	  return element.getAttribute('aria-checked') === 'true';
	}
	
	function toggleOn(element) {
	  element.setAttribute('aria-checked', 'true');
	}
	
	function toggleOff(element) {
	  element.setAttribute('aria-checked', 'false');
	}
	
	function toggleMixed(element) {
	  element.setAttribute('aria-checked', 'mixed');
	}
	
	function createSingleCheckbox(label, id) {
	  var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	  var isChecked = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	  var onChange = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
	
	  var spanID = (0, _guidUtils.generateGuid)();
	
	  var checkbox = document.createElement('div');
	  checkbox.id = id;
	  classes.forEach(function (c) {
	    return checkbox.classList.add(c);
	  });
	  checkbox.classList.add('price');
	  checkbox.setAttribute('tabindex', '0');
	  checkbox.setAttribute('role', 'checkbox');
	  checkbox.setAttribute('aria-labelledby', spanID);
	
	  var indicator = document.createElement('div');
	  indicator.classList.add('toggle-indicator');
	
	  checkbox.appendChild(indicator);
	
	  var span = document.createElement('span');
	  span.id = spanID;
	  span.classList.add('toggle-label');
	  span.innerText = label;
	  checkbox.appendChild(span);
	
	  if (isChecked) {
	    toggleOn(checkbox);
	  } else {
	    toggleOff(checkbox);
	  }
	
	  function changeHandler(e) {
	    e.stopPropagation();
	    e.preventDefault();
	    toggle(checkbox);
	    broadcastChange();
	  }
	
	  function broadcastChange() {
	    onChange({ element: checkbox, isToggledOn: isToggledOn(span) });
	  }
	
	  checkbox.addEventListener('click', changeHandler);
	  (0, _keyboardUtils.onElementSpace)(checkbox, changeHandler);
	
	  checkbox.addEventListener('focus', function () {
	    checkbox.classList.add('focused');
	  });
	
	  checkbox.addEventListener('blur', function () {
	    checkbox.classList.remove('focused');
	  });
	
	  return checkbox;
	}
	
	function createCheckboxGroup(_ref, _ref2, items) {
	  var groupLabel = _ref.groupLabel,
	      useHTML5 = _ref.useHTML5;
	  var label = _ref2.label,
	      id = _ref2.id,
	      classes = _ref2.classes,
	      isChecked = _ref2.isChecked,
	      onChange = _ref2.onChange;
	
	  var rootItem = createSingleCheckbox(label, id, classes, isChecked, function (e) {
	    if (onChange) {
	      onChange(e);
	    }
	
	    rootClicked(getCorrectRootState());
	  });
	
	  rootItem.classList.add('rootCheckbox');
	
	  items = items.map(function (_ref3) {
	    var label = _ref3.label,
	        id = _ref3.id,
	        classes = _ref3.classes,
	        isChecked = _ref3.isChecked,
	        onChange = _ref3.onChange;
	
	    return createSingleCheckbox(label, id, classes, isChecked, function (e) {
	      onChange(e);
	      setCorrectRootState();
	    });
	  });
	
	  var rootClickHandlers = {
	    'true': function _true() {
	      items.forEach(toggleOff);
	      toggleOff(rootItem);
	    },
	    'false': function _false() {
	      items.forEach(toggleOn);
	      toggleOn(rootItem);
	    },
	    'mixed': function mixed() {
	      items.forEach(toggleOn);
	      toggleOn(rootItem);
	    }
	  };
	
	  function rootClicked(rootState) {
	    rootClickHandlers[rootState]();
	  }
	
	  function getCorrectRootState() {
	    if (items.every(isToggledOn)) {
	      return 'true';
	    } else if (items.every(function (item) {
	      return !isToggledOn(item);
	    })) {
	      return 'false';
	    } else {
	      return 'mixed';
	    }
	  }
	
	  var leafClickHandlers = {
	    'true': function _true() {
	      return toggleOn(rootItem);
	    },
	    'false': function _false() {
	      return toggleOff(rootItem);
	    },
	    'mixed': function mixed() {
	      return toggleMixed(rootItem);
	    }
	  };
	
	  function setCorrectRootState() {
	    leafClickHandlers[getCorrectRootState()]();
	  }
	
	  var group = (0, _containerUtils.createFieldset)(groupLabel);
	
	  group.appendChild(rootItem);
	  items.forEach(function (item) {
	    group.appendChild(item);
	  });
	
	  group.classList.add('price');
	  group.classList.add('checkbox-group');
	  return group;
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.elementIsChildOfElement = elementIsChildOfElement;
	exports.createFieldset = createFieldset;
	exports.createLiveRegion = createLiveRegion;
	
	var _guidUtils = __webpack_require__(39);
	
	function elementIsChildOfElement(child, potentialParent) {
	  while (child) {
	    if (child === potentialParent) {
	      return true;
	    }
	
	    child = child.parentNode;
	  }
	
	  return false;
	}
	
	function createFieldset(label) {
	  var fieldset = document.createElement('fieldset');
	  var legend = document.createElement('legend');
	  legend.classList.add('legend'); // for easy lookup regardless of mode
	  legend.id = (0, _guidUtils.generateGuid)();
	  legend.innerText = label;
	  fieldset.appendChild(legend);
	  return fieldset;
	}
	
	function createLiveRegion() {
	  var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'polite';
	  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	
	  var output = document.createElement('span');
	  classes.forEach(function (c) {
	    return output.classList.add(c);
	  });
	  output.id = (0, _guidUtils.generateGuid)();
	  output.setAttribute('aria-live', level);
	  output.classList.add('visuallyhidden');
	  output.innerText = '';
	  output.notify = function (text) {
	    output.innerText = text;
	  };
	
	  return output;
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createRadioGroup;
	
	var _containerUtils = __webpack_require__(50);
	
	var _keyboardUtils = __webpack_require__(44);
	
	var _checkbox = __webpack_require__(49);
	
	function createRadioGroup(_ref, items, onChange) {
	  var label = _ref.label,
	      useHTML5 = _ref.useHTML5; /* It appears this isn't being used */
    
    var groupId = label.replace(/\W/g, '');
	
	  var output = (0, _containerUtils.createFieldset)(label);
	  output.classList.add('price');
	  var group = document.createElement('div');
	  group.setAttribute('role', 'radiogroup');
	
	  var legendID = output.querySelector('.legend').id;
	  group.setAttribute('aria-labelledby', legendID);
	
	  var currentFocus = 0;
	  output.appendChild(group);
	
	  function handleFocus(e) {
	    var index = e.target.id.split('_')[1];
	    currentFocus = parseInt(index);
	  }
	
	  function handleKeydown(e) {
	    var key = e.which;
	    if (key === _keyboardUtils.KEYS.RIGHT || key === _keyboardUtils.KEYS.DOWN) {
	      focusNext(e);
	    } else if (key === _keyboardUtils.KEYS.LEFT || key === _keyboardUtils.KEYS.UP) {
	      focusPrev(e);
	    }
	  }
	
	  function setUniqueToggle(button) {
	    buttons.forEach(function (b) {
	      b === button ? (0, _checkbox.toggleOn)(b) : (0, _checkbox.toggleOff)(b);
	      b.setAttribute('tabindex', b === button ? '0' : '-1');
	    });
	  }
	
	  function focusPrev(e) {
	    if (buttons[currentFocus - 1]) {
	      buttons[--currentFocus].focus();
	    }
	    buttons[currentFocus].click();
	
	    e.preventDefault();
	  }
	
	  function focusNext(e) {
	    if (buttons[currentFocus + 1]) {
	      buttons[++currentFocus].focus();
	    }
	    buttons[currentFocus].click();
	
	    e.preventDefault();
	  }
	
	  var buttons = items.map(function (item, index) {
	    var button = (0, _checkbox.createSingleCheckbox)(item, groupId + '_' + index, [], false, function (e) {
	      // note that we are ignoring e.isToggledOn - we are using checkboxes
	      // to implement radio buttons, so we don't toggle it on click. We manually
	      // override the toggle state by calling toggleOn() or toggleOff() explicitly.
	      setUniqueToggle(e.element);
	
	      if (onChange) {
	        onChange(item);
	      }
	    });
	
	    button.setAttribute('role', 'radio');
	    button.setAttribute('tabindex', '-1');
	
	    return button;
	  });
	
	  buttons[0].setAttribute('tabindex', '0');
	
	  buttons.forEach(function (button) {
	    group.appendChild(button);
	    button.addEventListener('focus', handleFocus);
	    button.addEventListener('keydown', handleKeydown);
	  });
	
	  return output;
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createTree;
	
	var _NodeUtils = __webpack_require__(53);
	
	var _noSelection = __webpack_require__(54);
	
	var _noSelection2 = _interopRequireDefault(_noSelection);
	
	var _singleSelection = __webpack_require__(55);
	
	var _singleSelection2 = _interopRequireDefault(_singleSelection);
	
	var _multiSelection = __webpack_require__(56);
	
	var _multiSelection2 = _interopRequireDefault(_multiSelection);
	
	var _guidUtils = __webpack_require__(39);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var behaviors = {
	  default: _noSelection2.default,
	  single: _singleSelection2.default,
	  multi: _multiSelection2.default
	};
	
	var nodeBuilders = {
	  link: function link(item) {
	    var node = document.createElement('a');
	    node.classList.add('treelabel');
	    node.setAttribute('href', item.url);
	    node.innerText = item.label;
	    return node;
	  },
	  span: function span(item) {
	    var node = document.createElement('span');
	    node.classList.add('treelabel');
	    node.innerText = item.label;
	    return node;
	  }
	};
	
	function createNode(item) {
	  var builder = nodeBuilders[item.type] || nodeBuilders.span;
	  return builder(item);
	}
	
	function createIndicator(item) {
	  var node = document.createElement('div');
	  if (item.children) {
	    node.classList.add('branch');
	  } else {
	    node.classList.add('leaf');
	  }
	
	  return node;
	}
	
	function mapDataToElement(treeID, item, config) {
	  var li = document.createElement('li');
	  li.setAttribute('role', 'treeitem');
	  li.setAttribute('aria-label', item.label);
	
	  li.appendChild(createIndicator(item));
	  li.appendChild(createNode(item));
	  li.setAttribute('tabindex', '-1');
	  li.setAttribute('data-tree-root', treeID);
	
	  var behavior = behaviors[config.selectStyle] || behaviors.default;
	  behavior(li);
	
	  if (item.children) {
	    li.setAttribute('aria-expanded', 'false');
	
	    var ul = document.createElement('ul');
	    ul.setAttribute('role', 'group');
	
	    item.children.map(function (item) {
	      return mapDataToElement(treeID, item, config);
	    }).forEach(function (element) {
	      ul.appendChild(element);
	    });
	
	    li.appendChild(ul);
	  }
	
	  return li;
	}
	
	function createTree(config, data) {
	  var rootID = (0, _guidUtils.generateGuid)();
	  var holder = document.createElement('div');
	  holder.id = rootID;
	
	  var treeRoot = document.createElement('ul');
	
	  treeRoot.setAttribute('role', 'tree');
	  treeRoot.classList.add('price');
	
	  if (config.selectStyle === 'multi') {
	    treeRoot.setAttribute('aria-multiselectable', 'true');
	  }
	
	  var initialNode = mapDataToElement(rootID, data, config);
	  treeRoot.appendChild(initialNode);
	  holder.appendChild(treeRoot);
	
	  (0, _NodeUtils.focusOnNode)(initialNode);
	
	  if (config.selectStyle) {
	    (0, _NodeUtils.selectNode)(initialNode);
	  }
	
	  return holder;
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hasChildren = hasChildren;
	exports.isOpen = isOpen;
	exports.getRootNode = getRootNode;
	exports.getVisibleNodes = getVisibleNodes;
	exports.getPreviousVisibleNode = getPreviousVisibleNode;
	exports.getNextVisibleNode = getNextVisibleNode;
	exports.focusOnNode = focusOnNode;
	exports.closeNode = closeNode;
	exports.openNode = openNode;
	exports.getFirstChild = getFirstChild;
	exports.getParent = getParent;
	exports.getNextSibling = getNextSibling;
	exports.getPreviousSibling = getPreviousSibling;
	exports.selectNode = selectNode;
	exports.addNodeToSelection = addNodeToSelection;
	exports.isSelected = isSelected;
	exports.toggleNodeSelection = toggleNodeSelection;
	
	var _selectionUtils = __webpack_require__(36);
	
	/* used only internally */
	function getNextNodeInSequence(node, sequence) {
	  var returnNextOne = false;
	  return sequence.reduce(function (acc, val) {
	    if (acc) {
	      return acc;
	    }
	    if (returnNextOne) {
	      return val;
	    }
	    if (node === val) {
	      returnNextOne = true;
	    }
	  }, null) || node;
	}
	
	function getAllTreeNodes(treeID) {
	  return (0, _selectionUtils.queryAll)('#' + treeID + ' [role="treeitem"]');
	}
	
	/* public API starts here */
	
	function hasChildren(node) {
	  return node.hasAttribute('aria-expanded');
	}
	
	function isOpen(node) {
	  return node.getAttribute('aria-expanded') === 'true';
	}
	
	function getRootNode(treeID) {
	  return document.querySelector('#' + treeID + ' > ul > [role=\'treeitem\']');
	}
	
	function getVisibleNodes(treeID) {
	  var output = [getRootNode(treeID)];
	  var nodes = (0, _selectionUtils.queryAll)('#' + treeID + ' [aria-expanded=\'true\'] > ul > [role=\'treeitem\']');
	  return output.concat(nodes);
	}
	
	function getPreviousVisibleNode(node) {
	  var treeID = node.getAttribute('data-tree-root');
	  var nodes = getVisibleNodes(treeID);
	
	  return getNextNodeInSequence(node, nodes.reverse()) || node;
	}
	
	function getNextVisibleNode(node) {
	  var treeID = node.getAttribute('data-tree-root');
	  var nodes = getVisibleNodes(treeID);
	  return getNextNodeInSequence(node, nodes) || node;
	}
	
	function focusOnNode(node) {
	  var treeID = node.getAttribute('data-tree-root');
	
	  getAllTreeNodes(treeID).forEach(function (item) {
	    item.setAttribute('tabindex', '-1');
	  });
	
	  node.setAttribute('tabindex', '0');
	  node.focus();
	  return node;
	}
	
	function closeNode(node) {
	  node.setAttribute('aria-expanded', 'false');
	  return node;
	}
	
	function openNode(node) {
	  node.setAttribute('aria-expanded', 'true');
	  return node;
	}
	
	function getFirstChild(node) {
	  return node.querySelector('[role="treeitem"]') || node;
	}
	
	function getParent(node) {
	  if (node.parentNode.parentNode.getAttribute('role') === 'treeitem') {
	    return node.parentNode.parentNode;
	  }
	
	  return node;
	}
	
	function getNextSibling(node) {
	  return node.nextElementSibling || node;
	}
	
	function getPreviousSibling(node) {
	  return node.previousSibling || node;
	}
	
	function selectNode(node, multimode) {
	  var treeID = node.getAttribute('data-tree-root');
	
	  getAllTreeNodes(treeID).forEach(function (item) {
	    if (node === item) {
	      item.setAttribute('aria-selected', 'true');
	    } else if (multimode) {
	      item.setAttribute('aria-selected', 'false');
	    } else {
	      item.removeAttribute('aria-selected');
	    }
	  });
	
	  node.setAttribute('aria-selected', 'true');
	  return node;
	}
	
	function addNodeToSelection(node) {
	  node.setAttribute('aria-selected', 'true');
	}
	
	function isSelected(node) {
	  return node.getAttribute('aria-selected') === 'true';
	}
	
	function toggleNodeSelection(node, multimode) {
	  if (node.getAttribute('aria-selected') === 'true') {
	    if (multimode) {
	      node.setAttribute('aria-selected', 'false');
	    } else {
	      node.removeAttribute('aria-selected');
	    }
	  } else {
	    node.setAttribute('aria-selected', 'true');
	  }
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = applyLogic;
	
	var _keyboardUtils = __webpack_require__(44);
	
	var KeyboardUtils = _interopRequireWildcard(_keyboardUtils);
	
	var _NodeUtils = __webpack_require__(53);
	
	var NodeUtils = _interopRequireWildcard(_NodeUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function applyLogic(node) {
	  node.addEventListener('click', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    NodeUtils.focusOnNode(node);
	
	    if (NodeUtils.isOpen(node)) {
	      NodeUtils.closeNode(node);
	    } else if (NodeUtils.hasChildren(node)) {
	      NodeUtils.openNode(node);
	    }
	  });
	
	  KeyboardUtils.onElementEnter(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var activateable = void 0;
	    for (var i = 0; i < node.children.length; i++) {
	      var item = node.children[i];
	      if (item.tagName === 'A' || item.tagName === 'BUTTON') {
	        activateable = item;
	        break;
	      }
	    }
	
	    if (activateable) {
	      var click = new MouseEvent('click');
	      activateable.dispatchEvent(click);
	    }
	  });
	
	  KeyboardUtils.onElementCharacter(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var character = String.fromCharCode(e.which).toUpperCase();
	    var nodes = NodeUtils.getVisibleNodes(node.getAttribute('data-tree-root'));
	
	    var thisFound = false;
	    var target = nodes.filter(function (item) {
	      // discard 'previous' nodes:
	      if (thisFound) {
	        return true;
	      }
	      if (item === node) {
	        thisFound = true;
	      }
	      return false;
	    }).reduce(function (acc, val) {
	      // grab next one starting with char
	      if (acc) {
	        return acc;
	      }
	      if (val.innerText.charAt(0).toUpperCase() === character) {
	        return val;
	      }
	    }, null);
	
	    if (target) {
	      NodeUtils.focusOnNode(target);
	    }
	  });
	
	  KeyboardUtils.onElementHome(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var target = NodeUtils.getRootNode(node.getAttribute('data-tree-root'));
	    NodeUtils.focusOnNode(target);
	  });
	
	  KeyboardUtils.onElementEnd(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var nodes = NodeUtils.getVisibleNodes(node.getAttribute('data-tree-root'));
	    var target = nodes.reverse()[0];
	    NodeUtils.focusOnNode(target);
	  });
	
	  KeyboardUtils.onElementDown(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var sibling = NodeUtils.getNextVisibleNode(node);
	    NodeUtils.focusOnNode(sibling);
	  });
	
	  KeyboardUtils.onElementUp(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var sibling = NodeUtils.getPreviousVisibleNode(node);
	    NodeUtils.focusOnNode(sibling);
	  });
	
	  KeyboardUtils.onElementRight(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (NodeUtils.hasChildren(node) && !NodeUtils.isOpen(node)) {
	      NodeUtils.openNode(node);
	    } else {
	      var child = NodeUtils.getFirstChild(node);
	      NodeUtils.focusOnNode(child);
	    }
	  });
	
	  KeyboardUtils.onElementLeft(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (!NodeUtils.hasChildren(node) || !NodeUtils.isOpen(node)) {
	      var parent = NodeUtils.getParent(node);
	      NodeUtils.focusOnNode(parent);
	
	      return parent;
	    }
	
	    return NodeUtils.closeNode(node);
	  });
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = applyLogic;
	
	var _keyboardUtils = __webpack_require__(44);
	
	var KeyboardUtils = _interopRequireWildcard(_keyboardUtils);
	
	var _NodeUtils = __webpack_require__(53);
	
	var NodeUtils = _interopRequireWildcard(_NodeUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function applyLogic(node) {
	  node.addEventListener('click', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    NodeUtils.focusOnNode(node);
	    NodeUtils.selectNode(node);
	
	    if (NodeUtils.isOpen(node)) {
	      NodeUtils.closeNode(node);
	    } else if (NodeUtils.hasChildren(node)) {
	      NodeUtils.openNode(node);
	    }
	  });
	
	  KeyboardUtils.onElementEnter(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var activateable = void 0;
	    for (var i = 0; i < node.children.length; i++) {
	      var item = node.children[i];
	      if (item.tagName === 'A' || item.tagName === 'BUTTON') {
	        activateable = item;
	        break;
	      }
	    }
	
	    if (activateable) {
	      var click = new MouseEvent('click');
	      activateable.dispatchEvent(click);
	    }
	  });
	
	  KeyboardUtils.onElementSpace(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    if (e.ctrlKey) {
	      NodeUtils.toggleNodeSelection(node);
	    }
	  });
	
	  KeyboardUtils.onElementCharacter(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var character = String.fromCharCode(e.which).toUpperCase();
	    var nodes = NodeUtils.getVisibleNodes(node.getAttribute('data-tree-root'));
	
	    var thisFound = false;
	    var target = nodes.filter(function (item) {
	      // discard 'previous' nodes:
	      if (thisFound) {
	        return true;
	      }
	      if (item === node) {
	        thisFound = true;
	      }
	      return false;
	    }).reduce(function (acc, val) {
	      // grab next one starting with char
	      if (acc) {
	        return acc;
	      }
	      if (val.innerText.charAt(0).toUpperCase() === character) {
	        return val;
	      }
	    }, null);
	
	    if (target) {
	      NodeUtils.focusOnNode(target);
	      NodeUtils.selectNode(target);
	    }
	  });
	
	  KeyboardUtils.onElementHome(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var target = NodeUtils.getRootNode(node.getAttribute('data-tree-root'));
	    NodeUtils.focusOnNode(target);
	    NodeUtils.selectNode(target);
	  });
	
	  KeyboardUtils.onElementEnd(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var nodes = NodeUtils.getVisibleNodes(node.getAttribute('data-tree-root'));
	    var target = nodes.reverse()[0];
	    NodeUtils.focusOnNode(target);
	    NodeUtils.selectNode(target);
	  });
	
	  KeyboardUtils.onElementDown(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var sibling = NodeUtils.getNextVisibleNode(node);
	    NodeUtils.focusOnNode(sibling);
	
	    if (!e.ctrlKey) {
	      NodeUtils.selectNode(sibling);
	    }
	  });
	
	  KeyboardUtils.onElementUp(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var sibling = NodeUtils.getPreviousVisibleNode(node);
	    NodeUtils.focusOnNode(sibling);
	
	    if (!e.ctrlKey) {
	      NodeUtils.selectNode(sibling);
	    }
	  });
	
	  KeyboardUtils.onElementRight(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (NodeUtils.hasChildren(node) && !NodeUtils.isOpen(node)) {
	      NodeUtils.openNode(node);
	    } else {
	      var child = NodeUtils.getFirstChild(node);
	      NodeUtils.focusOnNode(child);
	
	      if (!e.ctrlKey) {
	        NodeUtils.selectNode(child);
	      }
	    }
	  });
	
	  KeyboardUtils.onElementLeft(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (!NodeUtils.hasChildren(node) || !NodeUtils.isOpen(node)) {
	      var parent = NodeUtils.getParent(node);
	      NodeUtils.focusOnNode(parent);
	
	      if (!e.ctrlKey) {
	        NodeUtils.selectNode(parent);
	      }
	
	      return parent;
	    }
	
	    return NodeUtils.closeNode(node);
	  });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = applyLogic;
	
	var _keyboardUtils = __webpack_require__(44);
	
	var KeyboardUtils = _interopRequireWildcard(_keyboardUtils);
	
	var _NodeUtils = __webpack_require__(53);
	
	var NodeUtils = _interopRequireWildcard(_NodeUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function applyLogic(node) {
	  node.setAttribute('aria-selected', 'false');
	
	  node.addEventListener('click', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (NodeUtils.isOpen(node)) {
	      NodeUtils.closeNode(node);
	    } else if (NodeUtils.hasChildren(node)) {
	      NodeUtils.openNode(node);
	    }
	
	    NodeUtils.focusOnNode(node);
	    NodeUtils.selectNode(node, true);
	  });
	
	  KeyboardUtils.onElementEnter(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var activateable = void 0;
	    for (var i = 0; i < node.children.length; i++) {
	      var item = node.children[i];
	      if (item.tagName === 'A' || item.tagName === 'BUTTON') {
	        activateable = item;
	        break;
	      }
	    }
	
	    if (activateable) {
	      var click = new MouseEvent('click');
	      activateable.dispatchEvent(click);
	    }
	  });
	
	  KeyboardUtils.onElementSpace(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    if (e.ctrlKey) {
	      NodeUtils.toggleNodeSelection(node, true);
	    }
	  });
	
	  KeyboardUtils.onElementCharacter(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var character = String.fromCharCode(e.which).toUpperCase();
	    var nodes = NodeUtils.getVisibleNodes(node.getAttribute('data-tree-root'));
	
	    var thisFound = false;
	    var target = nodes.filter(function (item) {
	      // discard 'previous' nodes:
	      if (thisFound) {
	        return true;
	      }
	      if (item === node) {
	        thisFound = true;
	      }
	      return false;
	    }).reduce(function (acc, val) {
	      // grab next one starting with char
	      if (acc) {
	        return acc;
	      }
	      if (val.innerText.charAt(0).toUpperCase() === character) {
	        return val;
	      }
	    }, null);
	
	    if (target) {
	      NodeUtils.focusOnNode(target);
	      NodeUtils.selectNode(target, true);
	    }
	  });
	
	  KeyboardUtils.onElementHome(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var target = NodeUtils.getRootNode(node.getAttribute('data-tree-root'));
	    NodeUtils.focusOnNode(target);
	
	    if (e.shiftKey) {
	      var current = NodeUtils.getPreviousVisibleNode(node);
	      if (current.getAttribute('aria-selected') === node.getAttribute('aria-selected')) {
	        NodeUtils.toggleNodeSelection(node, true);
	      }
	
	      while (current !== target) {
	        NodeUtils.toggleNodeSelection(current, true);
	        current = NodeUtils.getPreviousVisibleNode(current);
	      }
	
	      NodeUtils.toggleNodeSelection(target, true);
	    } else {
	      NodeUtils.selectNode(target, true);
	    }
	  });
	
	  KeyboardUtils.onElementEnd(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var nodes = NodeUtils.getVisibleNodes(node.getAttribute('data-tree-root'));
	    var target = nodes.reverse()[0];
	    NodeUtils.focusOnNode(target);
	
	    if (e.shiftKey) {
	      var current = NodeUtils.getNextVisibleNode(node);
	
	      if (current.getAttribute('aria-selected') === node.getAttribute('aria-selected')) {
	        NodeUtils.toggleNodeSelection(node, true);
	      }
	
	      while (current !== target) {
	        NodeUtils.toggleNodeSelection(current, true);
	        current = NodeUtils.getNextVisibleNode(current);
	      }
	
	      NodeUtils.toggleNodeSelection(target, true);
	    } else {
	      NodeUtils.selectNode(target, true);
	    }
	  });
	
	  KeyboardUtils.onElementDown(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var sibling = NodeUtils.getNextVisibleNode(node);
	    NodeUtils.focusOnNode(sibling);
	
	    if (e.ctrlKey) {
	      return;
	    }
	    if (e.shiftKey) {
	      if (sibling.getAttribute('aria-selected') === node.getAttribute('aria-selected')) {
	        return NodeUtils.toggleNodeSelection(node, true);
	      }
	      return NodeUtils.toggleNodeSelection(sibling, true);
	    }
	
	    NodeUtils.selectNode(sibling, true);
	  });
	
	  KeyboardUtils.onElementUp(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var sibling = NodeUtils.getPreviousVisibleNode(node);
	    NodeUtils.focusOnNode(sibling);
	
	    if (e.ctrlKey) {
	      return;
	    }
	    if (e.shiftKey) {
	      if (sibling.getAttribute('aria-selected') === node.getAttribute('aria-selected')) {
	        return NodeUtils.toggleNodeSelection(node, true);
	      }
	
	      return NodeUtils.toggleNodeSelection(sibling, true);
	    }
	
	    NodeUtils.selectNode(sibling, true);
	  });
	
	  KeyboardUtils.onElementRight(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (NodeUtils.hasChildren(node) && !NodeUtils.isOpen(node)) {
	      NodeUtils.openNode(node);
	    } else {
	      var child = NodeUtils.getFirstChild(node);
	      NodeUtils.focusOnNode(child);
	
	      if (e.ctrlKey) {
	        return;
	      }
	      if (e.shiftKey) {
	        return NodeUtils.addNodeToSelection(child);
	      }
	
	      NodeUtils.selectNode(child, true);
	    }
	  });
	
	  KeyboardUtils.onElementLeft(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (!NodeUtils.hasChildren(node) || !NodeUtils.isOpen(node)) {
	      var parent = NodeUtils.getParent(node);
	      NodeUtils.focusOnNode(parent);
	
	      if (e.ctrlKey) {
	        return;
	      }
	      if (e.shiftKey) {
	        return NodeUtils.addNodeToSelection(parent);
	      }
	
	      return NodeUtils.selectNode(parent, true);
	    }
	
	    return NodeUtils.closeNode(node);
	  });
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createMenu;
	
	var _navigationLogic = __webpack_require__(58);
	
	var _navigationLogic2 = _interopRequireDefault(_navigationLogic);
	
	var _buildMenuItem = __webpack_require__(62);
	
	var _buildMenuItem2 = _interopRequireDefault(_buildMenuItem);
	
	var _containerUtils = __webpack_require__(50);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function setOrientation(menu, _ref) {
	  var _ref$orientation = _ref.orientation,
	      orientation = _ref$orientation === undefined ? 'horizontal' : _ref$orientation;
	
	  if (orientation === 'horizontal') {
	    menu.classList.add('horizontal');
	    menu.setAttribute('aria-orientation', 'horizontal');
	  }
	
	  if (orientation === 'vertical') {
	    menu.classList.add('vertical');
	    menu.setAttribute('aria-orientation', 'vertical');
	  }
	
	  return menu;
	}
	
	function setRole(menu, _ref2) {
	  var trigger = _ref2.trigger;
	
	  if (trigger) {
	    trigger.setAttribute('aria-haspopup', 'true');
	    menu.setAttribute('role', 'menu');
	    menu.classList.add('hidden');
	
	    trigger.addEventListener('click', function () {
	      menu.classList.remove('hidden');
	    });
	
	    return menu;
	  }
	
	  menu.setAttribute('role', 'menubar');
	  return menu;
	}
	
	function createMenu(container, data, config) {
	  var menu = document.createElement('ul');
	  menu.classList.add('price');
	  setRole(menu, config);
	  setOrientation(menu, config);
	
	  container.appendChild(menu);
	
	  var currentRadioGroup = null;
	  var currentCheckboxGroup = null;
	
	  data.map(function (item) {
	    return (0, _buildMenuItem2.default)(item, config);
	  }).forEach(function (li) {
	    var itemRole = li.getAttribute('role');
	    var dataGroup = li.getAttribute('data-group');
	    if (itemRole === 'menuitemcheckbox' && dataGroup) {
	      var groupName = dataGroup;
	
	      if (!currentCheckboxGroup || currentCheckboxGroup.getAttribute('group-name') !== groupName) {
	        currentCheckboxGroup = (0, _containerUtils.createFieldset)(groupName);
	        currentCheckboxGroup.setAttribute('group-name', groupName);
	        menu.appendChild(currentCheckboxGroup);
	      }
	
	      return currentCheckboxGroup.appendChild(li);
	    } else {
	      currentCheckboxGroup = null;
	    }
	
	    if (itemRole === 'menuitemradio') {
	      var _groupName = li.getAttribute('data-group');
	
	      if (!currentRadioGroup || currentRadioGroup.getAttribute('group-name') !== _groupName) {
	        currentRadioGroup = (0, _containerUtils.createFieldset)(_groupName);
	        currentRadioGroup.setAttribute('group-name', _groupName);
	        menu.appendChild(currentRadioGroup);
	      }
	
	      return currentRadioGroup.appendChild(li);
	    } else {
	      currentRadioGroup = null;
	    }
	
	    menu.appendChild(li);
	  });
	
	  (0, _navigationLogic2.default)(menu, config);
	
	  var firstChild = menu.querySelector('li');
	  firstChild.setAttribute('tabindex', '0');
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = applyNavigationLogic;
	
	var _keyboardUtils = __webpack_require__(44);
	
	var kb = _interopRequireWildcard(_keyboardUtils);
	
	var _menuItemUtils = __webpack_require__(59);
	
	var mu = _interopRequireWildcard(_menuItemUtils);
	
	var _vertical = __webpack_require__(60);
	
	var vertical = _interopRequireWildcard(_vertical);
	
	var _horizontal = __webpack_require__(61);
	
	var horizontal = _interopRequireWildcard(_horizontal);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var keyHandlers = { vertical: vertical, horizontal: horizontal };
	
	function getLatestParentItem(node) {
	  var role = node.getAttribute('role') || '';
	  if (role.indexOf('menuitem') === 0) {
	    return node;
	  }
	
	  var parent = node.parentElement;
	  if (!parent) {
	    return null;
	  }
	  if (node === parent) {
	    return null;
	  }
	
	  return getLatestParentItem(parent);
	}
	
	function applyNavigationLogic(menu, _ref) {
	  var _ref$orientation = _ref.orientation,
	      orientation = _ref$orientation === undefined ? 'vertical' : _ref$orientation,
	      _ref$wrap = _ref.wrap,
	      wrap = _ref$wrap === undefined ? false : _ref$wrap;
	
	  if (orientation !== 'vertical' && orientation !== 'horizontal') {
	    throw new Error('orientation must be either `vertical` or `horizontal`');
	  }
	
	  menu.addEventListener('click', function (e) {
	    var target = getLatestParentItem(e.target);
	    if (!target) {
	      return;
	    }
	    mu.setFocus(target);
	  });
	
	  kb.onElementUp(menu, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var target = getLatestParentItem(e.target);
	    if (!target) {
	      return;
	    }
	
	    keyHandlers[orientation].up(target, wrap);
	  });
	
	  kb.onElementDown(menu, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var target = getLatestParentItem(e.target);
	    if (!target) {
	      return;
	    }
	
	    keyHandlers[orientation].down(target, wrap);
	  });
	
	  kb.onElementLeft(menu, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var target = getLatestParentItem(e.target);
	    if (!target) {
	      return;
	    }
	
	    keyHandlers[orientation].left(target, wrap);
	  });
	
	  kb.onElementRight(menu, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var target = getLatestParentItem(e.target);
	    if (!target) {
	      return;
	    }
	
	    keyHandlers[orientation].right(target, wrap);
	  });
	
	  kb.onElementHome(menu, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var target = getLatestParentItem(e.target);
	    if (!target) {
	      return;
	    }
	
	    keyHandlers[orientation].home(target, wrap);
	  });
	
	  kb.onElementEnd(menu, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var target = getLatestParentItem(e.target);
	    if (!target) {
	      return;
	    }
	
	    keyHandlers[orientation].end(target, wrap);
	  });
	
	  kb.onElementCharacter(menu, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var target = getLatestParentItem(e.target);
	    if (!target) {
	      return;
	    }
	
	    var char = String.fromCharCode(e.which);
	    keyHandlers[orientation].char(target, char);
	  });
	}

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.finishInteraction = finishInteraction;
	exports.getMenuFromItem = getMenuFromItem;
	exports.getAllItemsInMenu = getAllItemsInMenu;
	exports.hasChildren = hasChildren;
	exports.isOpen = isOpen;
	exports.openSubmenu = openSubmenu;
	exports.closeSubmenu = closeSubmenu;
	exports.setFocus = setFocus;
	exports.getParent = getParent;
	exports.getFirstChild = getFirstChild;
	exports.getFirstSibling = getFirstSibling;
	exports.getPreviousSibling = getPreviousSibling;
	exports.getNextSibling = getNextSibling;
	exports.getLastSibling = getLastSibling;
	exports.getFirstMenuItem = getFirstMenuItem;
	exports.getLastMenuItem = getLastMenuItem;
	exports.getPreviousSiblingWhere = getPreviousSiblingWhere;
	exports.getNextSiblingWhere = getNextSiblingWhere;
	function finishInteraction(menuitem) {
	  var menu = getMenuFromItem(menuitem);
	  if (menu) {
	    var role = menu.getAttribute('role');
	
	    getAllItemsInMenu(menu).forEach(closeSubmenu);
	
	    if (role === 'menu') {
	      menu.classList.add('hidden');
	    }
	  }
	}
	
	// given some menu item, return the entire menu.
	function getMenuFromItem(menuitem) {
	  var parentItem = getParent(menuitem);
	
	  while (1) {
	    var newParent = getParent(parentItem);
	
	    // this will always be true eventually
	    if (parentItem === newParent) {
	      break;
	    }
	    parentItem = newParent;
	  }
	
	  var maybeParent = parentItem.parentElement;
	  var role = maybeParent.getAttribute('role');
	  if (role === 'menu' || role === 'menubar') {
	    return maybeParent;
	  }
	
	  return null;
	}
	
	function getAllItemsInMenu(menu) {
	  var output = [];
	
	  var result = menu.querySelectorAll('[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]');
	  for (var i = 0; i < result.length; i++) {
	    output.push(result[i]);
	  }
	
	  return output;
	}
	
	function hasChildren(menuitem) {
	  return !!menuitem.querySelector('ul');
	}
	
	function isOpen(menuitem) {
	  return hasChildren(menuitem) && menuitem.classList.contains('menu-open');
	}
	
	function openSubmenu(menuitem) {
	  if (!hasChildren(menuitem)) {
	    return;
	  }
	
	  menuitem.classList.add('menu-open');
	  menuitem.setAttribute('aria-expanded', 'true');
	  var firstChild = getFirstChild(menuitem);
	  setFocus(firstChild);
	}
	
	function closeSubmenu(menuitem) {
	  if (!hasChildren(menuitem) || !isOpen(menuitem)) {
	    return;
	  }
	
	  menuitem.classList.remove('menu-open');
	  menuitem.setAttribute('aria-expanded', 'false');
	  setFocus(menuitem);
	}
	
	function setFocus(menuitem) {
	  var rootMenu = getMenuFromItem(menuitem);
	
	  var allMenuItems = getAllItemsInMenu(rootMenu);
	  allMenuItems.forEach(function (item) {
	    if (item === menuitem) {
	      item.setAttribute('tabindex', '0');
	      item.focus();
	    } else {
	      item.setAttribute('tabindex', '-1');
	    }
	
	    // close all submenus that aren't ancestors of the item
	    var isParent = item.contains(menuitem);
	    if (!isParent && hasChildren(item)) {
	      item.classList.remove('menu-open');
	    }
	  });
	}
	
	function getParent(menuitem) {
	  var parentCandidate = menuitem.parentElement.parentElement;
	
	  if (menuitem.parentElement.tagName.toUpperCase() === 'FIELDSET') {
	    parentCandidate = menuitem.parentElement.parentElement.parentElement;
	  }
	
	  if (parentCandidate.getAttribute('role') === 'menuitem') {
	    return parentCandidate;
	  }
	
	  return menuitem;
	}
	
	function getFirstChild(menuitem) {
	  return menuitem.querySelector('ul li:not([role="separator"])') || menuitem;
	}
	
	function getFirstSibling(menuitem) {
	  return menuitem.parentElement.children[0];
	}
	
	function getPreviousSibling(menuitem) {
	  var prev = menuitem.previousElementSibling;
	  while (prev && prev.getAttribute('role') === 'separator') {
	    prev = prev.previousElementSibling;
	  }
	
	  return prev || menuitem;
	}
	
	function getNextSibling(menuitem) {
	  var next = menuitem.nextElementSibling;
	  while (next && next.getAttribute('role') === 'separator') {
	    next = next.nextElementSibling;
	  }
	  return next || menuitem;
	}
	
	function getLastSibling(menuitem) {
	  var parentMenu = menuitem.parentElement;
	  var childrenOfParent = parentMenu.children;
	  return childrenOfParent[childrenOfParent.length - 1];
	}
	
	function getFirstMenuItem(menuitem) {
	  return getMenuFromItem(menuitem).children[0];
	}
	
	function getLastMenuItem(menuitem) {
	  var items = getMenuFromItem(menuitem).children;
	  return items[items.length - 1];
	}
	
	function getPreviousSiblingWhere(menuitem, predicate) {
	  var prev = getPreviousSibling(menuitem);
	  if (prev === menuitem) {
	    return predicate(prev) ? prev : null;
	  }
	
	  return predicate(prev) ? prev : getPreviousSiblingWhere(prev, predicate);
	}
	
	function getNextSiblingWhere(menuitem, predicate) {
	  var next = getNextSibling(menuitem);
	  if (next === menuitem) {
	    return predicate(next) ? next : null;
	  }
	
	  return predicate(next) ? next : getNextSiblingWhere(next, predicate);
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.up = up;
	exports.down = down;
	exports.right = right;
	exports.left = left;
	exports.home = home;
	exports.end = end;
	exports.char = char;
	
	var _menuItemUtils = __webpack_require__(59);
	
	var mu = _interopRequireWildcard(_menuItemUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function up(node, wraps) {
	  var target = mu.getPreviousSibling(node);
	
	  if (node === target && wraps) {
	    target = mu.getLastSibling(node);
	  }
	
	  mu.setFocus(target);
	}
	
	function down(node, wraps) {
	  var target = mu.getNextSibling(node);
	  if (target === node && wraps) {
	    target = mu.getFirstSibling(node);
	  }
	
	  mu.setFocus(target);
	}
	
	function right(node) {
	  if (mu.hasChildren(node) && !mu.isOpen(node)) {
	    return mu.openSubmenu(node);
	  }
	
	  var parent = mu.getParent(node);
	  if (node === parent) {
	    return;
	  }
	
	  var aunt = mu.getNextSiblingWhere(parent, function (item) {
	    return mu.hasChildren(item);
	  });
	  if (aunt && aunt !== parent) {
	    mu.closeSubmenu(parent);
	    mu.openSubmenu(aunt);
	  }
	}
	
	function left(node) {
	  var parent = mu.getParent(node);
	  if (node === parent) {
	    return;
	  }
	  // always close the parent, if this is a subnode
	  mu.closeSubmenu(parent);
	
	  // if parent has a previous sibling that has children, open it.
	  var uncle = mu.getPreviousSiblingWhere(parent, function (item) {
	    return mu.hasChildren(item);
	  });
	
	  if (uncle && uncle !== parent) {
	    mu.openSubmenu(uncle);
	  }
	}
	
	function home(node, wraps) {
	  if (wraps) {
	    return;
	  }
	
	  var target = mu.getFirstMenuItem(node);
	  mu.setFocus(target);
	}
	
	function end(node, wraps) {
	  if (wraps) {
	    return;
	  }
	
	  mu.setFocus(mu.getLastMenuItem(node));
	}
	
	function char(node, letter) {
	  var target = mu.getNextSiblingWhere(node, function (item) {
	    return item.textContent.charAt(0).toUpperCase() === letter.toUpperCase();
	  });
	
	  if (target) {
	    mu.setFocus(target);
	  }
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.up = up;
	exports.down = down;
	exports.left = left;
	exports.right = right;
	exports.home = home;
	exports.end = end;
	exports.char = char;
	
	var _menuItemUtils = __webpack_require__(59);
	
	var mu = _interopRequireWildcard(_menuItemUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function up(node) {
	  var parent = mu.getParent(node);
	  if (node === parent) {
	    return;
	  }
	  // always close the parent, if this is a subnode
	  mu.closeSubmenu(parent);
	
	  // if parent has a previous sibling that has children, open it.
	  var uncle = mu.getPreviousSiblingWhere(parent, function (item) {
	    return mu.hasChildren(item);
	  });
	
	  if (uncle && uncle !== parent) {
	    mu.openSubmenu(uncle);
	  }
	}
	
	function down(node) {
	  if (mu.hasChildren(node) && !mu.isOpen(node)) {
	    return mu.openSubmenu(node);
	  }
	
	  var parent = mu.getParent(node);
	  if (node === parent) {
	    return;
	  }
	
	  var aunt = mu.getNextSiblingWhere(parent, function (item) {
	    return mu.hasChildren(item);
	  });
	  if (aunt && aunt !== parent) {
	    mu.closeSubmenu(parent);
	    mu.openSubmenu(aunt);
	  }
	}
	
	function left(node, wraps) {
	  var target = mu.getPreviousSibling(node);
	
	  if (node === target && wraps) {
	    target = mu.getLastSibling(node);
	  }
	
	  mu.setFocus(target);
	}
	
	function right(node, wraps) {
	  var target = mu.getNextSibling(node);
	  if (target === node && wraps) {
	    target = mu.getFirstSibling(node);
	  }
	
	  mu.setFocus(target);
	}
	
	function home(node, wraps) {
	  if (wraps) {
	    return;
	  }
	
	  var target = mu.getFirstMenuItem(node);
	  mu.setFocus(target);
	}
	
	function end(node, wraps) {
	  if (wraps) {
	    return;
	  }
	
	  mu.setFocus(mu.getLastMenuItem(node));
	}
	
	function char(node, letter) {
	  var target = mu.getNextSiblingWhere(node, function (item) {
	    return item.textContent.charAt(0).toUpperCase() === letter.toUpperCase();
	  });
	
	  if (target) {
	    mu.setFocus(target);
	  }
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = buildMenuItem;
	
	var _item = __webpack_require__(63);
	
	var itemFactory = _interopRequireWildcard(_item);
	
	var _submenu = __webpack_require__(64);
	
	var submenuFactory = _interopRequireWildcard(_submenu);
	
	var _radio = __webpack_require__(65);
	
	var radioFactory = _interopRequireWildcard(_radio);
	
	var _checkbox = __webpack_require__(66);
	
	var checkboxFactory = _interopRequireWildcard(_checkbox);
	
	var _separator = __webpack_require__(67);
	
	var separatorFactory = _interopRequireWildcard(_separator);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var builders = {
	  item: itemFactory.build,
	  separator: separatorFactory.build,
	  checkbox: checkboxFactory.build,
	  radio: radioFactory.build,
	  submenu: submenuFactory.build
	};
	
	function buildMenuItem(data, config) {
	  var output = builders[data.type](data, config);
	  if (data.classes) {
	    data.classes.forEach(function (c) {
	      output.classList.add(c);
	    });
	  }
	
	  if (data.disabled) {
	    output.setAttribute('aria-disabled', 'true');
	  }
	
	  return output;
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.activate = activate;
	exports.build = build;
	
	var _menuItemUtils = __webpack_require__(59);
	
	var mu = _interopRequireWildcard(_menuItemUtils);
	
	var _keyboardUtils = __webpack_require__(44);
	
	var kb = _interopRequireWildcard(_keyboardUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function activate(item, handler, e) {
	  if (item.getAttribute('aria-disabled') === 'true') {
	    return;
	  }
	
	  mu.finishInteraction(item);
	
	  if (handler) {
	    handler(e);
	  }
	}
	
	function build(data) {
	  var output = document.createElement('li');
	  output.setAttribute('role', 'menuitem');
	
	  if (data.label) {
	    output.innerText = data.label;
	  } else if (data.markup) {
	    output.innerHTML = data.markup;
	  }
	
	  var boundActionHandler = activate.bind(null, output, data.handler);
	  output.addEventListener('click', boundActionHandler);
	  kb.onElementEnter(output, boundActionHandler);
	
	  return output;
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.activate = activate;
	exports.build = build;
	
	var _menuItemUtils = __webpack_require__(59);
	
	var mu = _interopRequireWildcard(_menuItemUtils);
	
	var _keyboardUtils = __webpack_require__(44);
	
	var kb = _interopRequireWildcard(_keyboardUtils);
	
	var _buildMenuItem = __webpack_require__(62);
	
	var _buildMenuItem2 = _interopRequireDefault(_buildMenuItem);
	
	var _containerUtils = __webpack_require__(50);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function activate(item) {
	  if (item.getAttribute('aria-disabled') === 'true') {
	    return;
	  }
	
	  if (mu.isOpen(item)) {
	    mu.closeSubmenu(item);
	  } else {
	    mu.openSubmenu(item);
	  }
	}
	
	function build(data, config) {
	  var output = document.createElement('li');
	  output.setAttribute('role', 'menuitem');
	  output.setAttribute('aria-haspopup', 'true');
	  output.setAttribute('aria-expanded', 'false');
	
	  if (data.label) {
	    output.innerText = data.label;
	  } else if (data.markup) {
	    output.innerHTML = data.markup;
	  }
	
	  var currentRadioGroup = null;
	  var currentCheckboxGroup = null;
	
	  var submenu = document.createElement('ul');
	  data.children.map(function (item) {
	    return (0, _buildMenuItem2.default)(item, config);
	  }).forEach(function (li) {
	    var itemRole = li.getAttribute('role');
	    var dataGroup = li.getAttribute('data-group');
	    if (itemRole === 'menuitemcheckbox' && dataGroup) {
	      var groupName = dataGroup;
	
	      if (!currentCheckboxGroup || currentCheckboxGroup.getAttribute('group-name') !== groupName) {
	        currentCheckboxGroup = (0, _containerUtils.createFieldset)(groupName);
	        currentCheckboxGroup.setAttribute('group-name', groupName);
	        submenu.appendChild(currentCheckboxGroup);
	      }
	
	      return currentCheckboxGroup.appendChild(li);
	    } else {
	      currentCheckboxGroup = null;
	    }
	
	    if (itemRole === 'menuitemradio') {
	      var _groupName = li.getAttribute('data-group');
	
	      if (!currentRadioGroup || currentRadioGroup.getAttribute('group-name') !== _groupName) {
	        currentRadioGroup = (0, _containerUtils.createFieldset)(_groupName);
	        currentRadioGroup.setAttribute('group-name', _groupName);
	        submenu.appendChild(currentRadioGroup);
	      }
	
	      return currentRadioGroup.appendChild(li);
	    } else {
	      currentRadioGroup = null;
	    }
	
	    submenu.appendChild(li);
	  });
	
	  var boundActivation = activate.bind(null, output);
	
	  output.addEventListener('click', boundActivation);
	  kb.onElementEnter(output, boundActivation);
	
	  kb.onElementEscape(submenu, function () {
	    mu.closeSubmenu(output);
	  });
	
	  var indicator = document.createElement('div');
	  indicator.classList.add('indicator');
	  output.appendChild(indicator);
	
	  output.appendChild(submenu);
	  return output;
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.activate = activate;
	exports.build = build;
	
	var _menuItemUtils = __webpack_require__(59);
	
	var mu = _interopRequireWildcard(_menuItemUtils);
	
	var _keyboardUtils = __webpack_require__(44);
	
	var kb = _interopRequireWildcard(_keyboardUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function activate(item, e) {
	  e.stopPropagation();
	  e.preventDefault();
	
	  if (item.getAttribute('aria-disabled') === 'true') {
	    return;
	  }
	
	  var groupName = item.getAttribute('data-group');
	  var query = '[data-group="' + groupName + '"]';
	  var radioGroupMembers = document.querySelectorAll(query);
	
	  for (var i = 0; i < radioGroupMembers.length; i++) {
	    var target = radioGroupMembers[i];
	    if (target !== item) {
	      target.setAttribute('aria-checked', 'false');
	      target.querySelector('input').checked = false;
	    } else {
	      target.setAttribute('aria-checked', 'true');
	      target.querySelector('input').checked = true;
	    }
	  }
	
	  mu.finishInteraction(item);
	}
	
	function build(data) {
	  var output = document.createElement('li');
	  output.setAttribute('role', 'menuitemradio');
	
	  var label = document.createElement('label');
	  var radio = document.createElement('input');
	  radio.setAttribute('type', 'radio');
	  radio.name = data.radioGroup;
	  label.innerText = data.label;
	  label.appendChild(radio);
	  output.appendChild(label);
	
	  output.setAttribute('data-group', data.radioGroup);
	
	  radio.setAttribute('tabindex', '-1');
	  radio.setAttribute('style', 'pointer-events: none;');
	  radio.addEventListener('click', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	  });
	  radio.addEventListener('keypress', function (e) {
	    e.preventDefault();
	  });
	
	  var boundActivation = activate.bind(null, output);
	
	  output.setAttribute('aria-checked', 'false');
	  output.addEventListener('click', boundActivation);
	  kb.onElementEnter(output, boundActivation);
	  kb.onElementSpace(output, boundActivation);
	
	  return output;
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.activate = activate;
	exports.build = build;
	
	var _menuItemUtils = __webpack_require__(59);
	
	var mu = _interopRequireWildcard(_menuItemUtils);
	
	var _keyboardUtils = __webpack_require__(44);
	
	var kb = _interopRequireWildcard(_keyboardUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function activate(item, e) {
	  e.stopPropagation();
	  e.preventDefault();
	
	  if (item.getAttribute('aria-disabled') === 'true') {
	    return;
	  }
	
	  var wasChecked = item.getAttribute('aria-checked') === 'true';
	  var checkbox = item.querySelector('[type="checkbox"]');
	  checkbox.checked = !wasChecked;
	  item.setAttribute('aria-checked', !wasChecked);
	  mu.finishInteraction(item);
	}
	
	function build(data) {
	  var output = document.createElement('li');
	  var label = document.createElement('label');
	  var checkbox = document.createElement('input');
	  checkbox.setAttribute('type', 'checkbox');
	  label.innerText = data.label;
	  label.appendChild(checkbox);
	  output.appendChild(label);
	  output.setAttribute('role', 'menuitemcheckbox');
	
	  if (data.groupName) {
	    output.setAttribute('data-group', data.groupName);
	  }
	
	  var boundActivation = activate.bind(null, output);
	
	  checkbox.setAttribute('tabindex', '-1');
	  checkbox.setAttribute('style', 'pointer-events: none;');
	  checkbox.addEventListener('click', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	  });
	  checkbox.addEventListener('keypress', function (e) {
	    e.preventDefault();
	  });
	
	  output.addEventListener('click', boundActivation);
	  kb.onElementEnter(output, boundActivation);
	  kb.onElementSpace(output, boundActivation);
	
	  if (data.checked) {
	    checkbox.checked = true;
	    output.setAttribute('aria-checked', 'true');
	  } else {
	    output.setAttribute('aria-checked', 'false');
	  }
	
	  return output;
	}

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.build = build;
	function build(data, config) {
	  var output = document.createElement('li');
	  output.setAttribute('role', 'separator');
	  output.setAttribute('aria-orientation', config.orientation);
	
	  return output;
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createMultirange;
	
	var _slider = __webpack_require__(69);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _thumb = __webpack_require__(70);
	
	var _keyboardUtils = __webpack_require__(44);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createMultirange(config) {
	  var id = config.id,
	      thumbs = config.thumbs,
	      _config$orientation = config.orientation,
	      orientation = _config$orientation === undefined ? 'horizontal' : _config$orientation,
	      _config$reverse = config.reverse,
	      reverse = _config$reverse === undefined ? false : _config$reverse,
	      _config$minValue = config.minValue,
	      minValue = _config$minValue === undefined ? 0 : _config$minValue,
	      _config$maxValue = config.maxValue,
	      maxValue = _config$maxValue === undefined ? 100 : _config$maxValue,
	      _config$classes = config.classes,
	      classes = _config$classes === undefined ? [] : _config$classes,
	      _config$pixels = config.pixels,
	      pixels = _config$pixels === undefined ? 200 : _config$pixels;
	
	
	  if (minValue >= maxValue) {
	    throw new Error('Multirange min must be less than Multirange max.');
	  }
	
	  if (isNaN(minValue) || isNaN(maxValue)) {
	    throw new Error('Multirange values for min and max must be numbers.');
	  }
	
	  if (reverse) {
	    thumbs.forEach(function (t) {
	      return t.stepSize *= -1;
	    });
	  }
	
	  if (thumbs.length === 1) {
	    var _thumbs$ = thumbs[0],
	        label = _thumbs$.label,
	        stepSize = _thumbs$.stepSize,
	        labelFromValue = _thumbs$.labelFromValue,
	        initialValue = _thumbs$.initialValue,
	        _classes = _thumbs$.classes;
	
	
	    return (0, _slider2.default)(minValue, maxValue, initialValue, stepSize, label, orientation, _classes, labelFromValue);
	  }
	
	  // the rest of this code is only relevant if there is
	  // more than one thumb.
	  var output = document.createElement('div');
	  var slider = document.createElement('div');
	  slider.classList.add('slider');
	  if (id) {
	    slider.id = id;
	  }
	
	  var minValueInput = document.createElement('input');
	  var maxValueInput = document.createElement('input');
	
	  var minLabel = document.createElement('label');
	  minLabel.innerText = 'min';
	  minLabel.appendChild(minValueInput);
	
	  var maxLabel = document.createElement('label');
	  maxLabel.innerText = 'max';
	  maxLabel.appendChild(maxValueInput);
	
	  output.appendChild(minLabel);
	  output.appendChild(slider);
	  output.appendChild(maxLabel);
	
	  output.classList.add('price');
	  output.classList.add('multirange-widget');
	  output.classList.add(orientation);
	  classes.forEach(function (c) {
	    return output.classList.add(c);
	  });
	  slider.style.height = orientation === 'horizontal' ? '2px' : pixels + 'px';
	  slider.style.width = orientation === 'horizontal' ? pixels + 'px' : '2px';
	
	  thumbs.map(function (t) {
	    return (0, _thumb.createThumbControl)(minValue, maxValue, pixels, orientation, t);
	  }).forEach(function (t, i) {
	    if (i === 0) {
	      bindInputToThumb(minValueInput, t, minValue, maxValue);
	    } else if (i === 1) {
	      bindInputToThumb(maxValueInput, t, minValue, maxValue);
	    }
	
	    slider.appendChild(t);
	  });
	
	  return output;
	}
	
	function bindInputToThumb(input, thumb, min, max) {
	  input.addEventListener('blur', updateThumb);
	
	  (0, _keyboardUtils.onElementEnter)(input, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    updateThumb();
	  });
	
	  function updateThumb() {
	    var val = input.value;
	    if (thumb.textParser) {
	      val = thumb.textParser(val);
	    }
	
	    val = parseFloat(val);
	    if (!isNaN(val) && val <= max && val >= min && val != thumb.getAttribute('aria-valuenow')) {
	      thumb.setValue(val);
	    }
	  }
	
	  thumb.addEventListener('change', updateTextInput);
	
	  function updateTextInput() {
	    if (thumb.textParser) {
	      input.value = thumb.getAttribute('aria-valuetext');
	    } else {
	      input.value = thumb.getAttribute('aria-valuenow');
	    }
	  }
	
	  updateTextInput();
	}

/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createSlider;
	function createSlider() {
	  var minValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var maxValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
	  var initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : minValue;
	  var stepSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	  var label = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'slider';
	  var orientation = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'horizontal';
	  var classes = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
	  var labelFromValue = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : function (v) {
	    return v;
	  };
	
	  var output = document.createElement('input');
	  output.classList.add('price');
	  output.classList.add('slider-widget');
	
	  if (isNaN(minValue) || isNaN(maxValue) || isNaN(initialValue) || isNaN(stepSize)) {
	    throw new Error('min, max, initial values must all be numbers. StepSize must be a number.');
	  }
	
	  if (minValue >= maxValue) {
	    throw new Error('minvalue must be less than maxvalue.');
	  }
	
	  if (initialValue < minValue || initialValue > maxValue) {
	    throw new Error('initial value not within bounds.');
	  }
	
	  if (orientation !== 'horizontal' && orientation !== 'vertical') {
	    throw new Error('orientation must be either "horizontal" or "vertical", or blank (defaults to horizontal)');
	  }
	
	  if (!Array.isArray(classes)) {
	    throw new Error('classes must be passed as an array.');
	  }
	
	  output.setAttribute('type', 'range');
	  output.setAttribute('min', minValue);
	  output.setAttribute('max', maxValue);
	  output.setAttribute('value', initialValue);
	  output.setAttribute('step', stepSize);
	
	  if (orientation === 'vertical') {
	    var shouldSetOrient = function shouldSetOrient() {
	      // Internet Explorer 6-11
	      var isIE = /*@cc_on!@*/false || !!document.documentMode;
	      // Edge 20+
	      var isEdge = !isIE && !!window.StyleMedia;
	      // Firefox 1.0+
	      var isFirefox = typeof InstallTrigger !== 'undefined';
	
	      return isIE || isEdge || isFirefox;
	    };
	
	    if (shouldSetOrient() === true) {
	      output.setAttribute('orient', 'vertical');
	      output.setAttribute('aria-orientation', 'vertical');
	    } else {
	      output.setAttribute('aria-orientation', 'vertical');
	    }
	  }
	
	  classes.forEach(function (c) {
	    return output.classList.add(c);
	  });
	
	  if (label) {
	    output.setAttribute('aria-label', label);
	  }
	
	  if (labelFromValue) {
	    output.addEventListener('change', function () {
	      output.setAttribute('aria-valuetext', 'value: ' + labelFromValue(output.value));
	    });
	  }
	
	  output.setAttribute('aria-valuetext', 'value: ' + labelFromValue(output.value));
	
	  return output;
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createThumbControl = createThumbControl;
	
	var _keyboardUtils = __webpack_require__(44);
	
	var kb = _interopRequireWildcard(_keyboardUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function createThumbControl(min, max, pixels, orientation, _ref) {
	  var label = _ref.label,
	      _ref$initialValue = _ref.initialValue,
	      initialValue = _ref$initialValue === undefined ? min : _ref$initialValue,
	      _ref$stepSize = _ref.stepSize,
	      stepSize = _ref$stepSize === undefined ? 1 : _ref$stepSize,
	      _ref$classes = _ref.classes,
	      classes = _ref$classes === undefined ? [] : _ref$classes,
	      _ref$labelFromValue = _ref.labelFromValue,
	      labelFromValue = _ref$labelFromValue === undefined ? function (v) {
	    return v;
	  } : _ref$labelFromValue,
	      textParser = _ref.textParser;
	
	  if (orientation !== 'horizontal' && orientation !== 'vertical') {
	    throw new Error('Orientation must be either \'horizontal\' or \'vertical\'');
	  }
	
	  if (isNaN(stepSize)) {
	    throw new Error('Step size must be a number.');
	  }
	
	  if (!Array.isArray(classes)) {
	    throw new Error('Classes must be provided as an array.');
	  }
	
	  if (isNaN(initialValue)) {
	    throw new Error('initial value must be a number.');
	  }
	
	  if (initialValue < min || initialValue > max) {
	    throw new Error('initial value must be between min and max, inclusive.');
	  }
	
	  var output = document.createElement('button');
	  output.classList.add('thumb');
	  output.setAttribute('role', 'slider');
	  output.setAttribute('aria-valuemin', min);
	  output.setAttribute('aria-valuemax', max);
	
	  output.setAttribute('aria-orientation', orientation);
	
	  if (label) {
	    output.setAttribute('aria-label', label);
	  }
	
	  adjustAppearance(initialValue);
	  output.setAttribute('aria-valuenow', initialValue);
	  var valueText = labelFromValue(initialValue);
	  if (valueText !== initialValue) {
	    output.setAttribute('aria-valuetext', valueText);
	  }
	  output.setAttribute('data-increment', stepSize);
	  classes.forEach(function (c) {
	    return output.classList.add(c);
	  });
	
	  // output.style.position = 'absolute';
	  // output.style.height = '10px';
	  // if (orientation === 'horizontal') {
	  //   output.style.top = '-7px';
	  // } else {
	  //   output.style.left = '-2px';
	  // }
	  //
	  // output.style.width = '10px';
	  // output.style.marginLeft = '-5px';
	
	  function setValueAttributes(value) {
	    var valueText = labelFromValue(value);
	    output.setAttribute('aria-valuenow', value);
	    if (valueText !== value) {
	      output.setAttribute('aria-valuetext', valueText);
	    } else {
	      output.removeAttribute('aria-valuetext');
	    }
	
	    var e;
	
	    try {
	      e = new CustomEvent('change', { 'bubbles': true, 'cancelable': true });
	    } catch (error) {
	      // hi IE, you're great. Let's go for a walk.
	      e = document.createEvent('CustomEvent');
	      e.initCustomEvent('change', true, true, {});
	    }
	
	    output.dispatchEvent(e);
	  }
	
	  var range = max - min;
	  function getPercentage(val) {
	    var normalizedValue = val - min;
	    var percent = normalizedValue / range;
	    return percent;
	  }
	
	  // this should round to the nearest value that is
	  // an integer factor of the stepSize.
	  // when using keyboard, you always move up/down
	  // by either 1 or 10 times the stepSize; when using
	  // a mouse, though, the dragging is more analog - so
	  // you might get floating point values that are
	  // outside of the allowable range. This fixes that.
	  function normalize(v) {
	    var range = {
	      low: Math.floor(v / stepSize) * stepSize,
	      high: Math.ceil(v / stepSize) * stepSize
	    };
	
	    var lowDelta = range.low - v;
	    var highDelta = range.high - v;
	
	    if (Math.abs(lowDelta) <= Math.abs(highDelta)) {
	      return range.low;
	    }
	
	    return range.high;
	  }
	
	  function adjustValue(pixelPosition) {
	    var percent = pixelPosition / pixels;
	    var oldValue = parseFloat(output.getAttribute('aria-valuenow'));
	    var newValue = min + range * percent;
	
	    newValue = normalize(newValue);
	
	    if (newValue !== oldValue) {
	      setValueAttributes(newValue);
	    }
	  }
	
	  function adjustAppearance(value) {
	    var offset = pixels * getPercentage(value);
	    if (orientation === 'horizontal') {
	      output.style.left = offset + 'px';
	    } else {
	      output.style.bottom = offset - 7 + 'px';
	    }
	  }
	
	  function applyDelta(delta) {
	    var oldValue = output.getAttribute('aria-valuenow');
	    var newValue = parseFloat(oldValue) + delta;
	    while (newValue < min) {
	      newValue++;
	    }
	
	    while (newValue > max) {
	      newValue--;
	    }
	
	    if (newValue !== oldValue) {
	      setValueAttributes(newValue);
	      adjustAppearance(newValue);
	    }
	  }
	
	  kb.onElementRight(output, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(stepSize);
	  });
	
	  kb.onElementUp(output, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(stepSize);
	  });
	
	  kb.onElementLeft(output, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(-stepSize);
	  });
	
	  kb.onElementDown(output, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(-stepSize);
	  });
	
	  kb.onElementPageUp(output, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(10 * stepSize);
	  });
	
	  kb.onElementPageDown(output, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    applyDelta(-10 * stepSize);
	  });
	
	  output.addEventListener('mousedown', function () {
	    startDrag();
	  });
	
	  function startDrag() {
	    output.classList.add('dragging');
	    document.body.addEventListener('mousemove', onDrag);
	    document.body.addEventListener('mouseup', stopDrag);
	  }
	
	  function getPoint(e) {
	    var x = e.clientX - output.parentElement.getBoundingClientRect().left;
	    var y = e.clientY - output.parentElement.getBoundingClientRect().top;
	
	    return { x: x, y: y };
	  }
	
	  function onDrag(e) {
	    var _getPoint = getPoint(e),
	        x = _getPoint.x,
	        y = _getPoint.y;
	
	    var targetValue = orientation === 'horizontal' ? x - 10 : pixels - y;
	
	    while (targetValue < 0) {
	      targetValue++;
	    }
	
	    while (targetValue > pixels) {
	      targetValue--;
	    }
	
	    if (orientation === 'horizontal') {
	      output.style.left = targetValue + 'px';
	    } else {
	      output.style.bottom = targetValue - 7 + 'px';
	    }
	
	    adjustValue(targetValue);
	  }
	
	  function stopDrag() {
	    output.classList.remove('dragging');
	    document.body.removeEventListener('mousemove', onDrag);
	    document.body.removeEventListener('mouseup', stopDrag);
	
	    var finalValue = output.getAttribute('aria-valuenow');
	
	    adjustAppearance(parseFloat(finalValue));
	  }
	
	  adjustAppearance(initialValue);
	
	  output.setValue = function (v) {
	    var value = normalize(v);
	    setValueAttributes(value);
	    adjustAppearance(value);
	  };
	
	  output.textParser = textParser;
	
	  return output;
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createAutocomplete;
	
	var _dataValidator = __webpack_require__(72);
	
	var _formatter = __webpack_require__(73);
	
	var _guidUtils = __webpack_require__(39);
	
	var _keyboardUtils = __webpack_require__(44);
	
	var kb = _interopRequireWildcard(_keyboardUtils);
	
	var _navigation = __webpack_require__(74);
	
	var nav = _interopRequireWildcard(_navigation);
	
	var _containerUtils = __webpack_require__(50);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function createAutocomplete(data) {
	  if (!data) {
	    throw new Error('data must be provided');
	  }
	  if (!(0, _dataValidator.validateData)(data)) {
	    throw new Error('data format invalid. Must either be an array of strings or an array of objects with a "label" field.');
	  }
	
	  var output = document.createElement('div');
	  output.classList.add('price');
	  output.classList.add('autocomplete');
	
	  var input = document.createElement('input');
	  var hintId = (0, _guidUtils.generateGuid)();
	  // this prevents the browsers from helpfully suggesting
	  // their own autocomplete feedback.
	  input.setAttribute('autocomplete', 'off');
	  input.setAttribute('type', 'text');
	  input.setAttribute('role', 'combobox');
	  input.setAttribute('aria-expanded', 'false');
	  input.setAttribute('aria-autocomplete', 'list');
	  input.setAttribute('aria-owns', hintId);
	
	  var hints = document.createElement('ul');
	  hints.id = hintId;
	  hints.classList.add('autocomplete_hints');
	  hints.setAttribute('role', 'listbox');
	
	  var live = document.createElement('p');
	  live.classList.add('visuallyhidden');
	
	  var notificationTimeout = void 0;
	
	  function immediateNotification() {
	    var highlight = hints.querySelector('.highlight');
	    if (highlight) {
	      notify(live, highlight.innerText);
	    }
	  }
	
	  function prepareNotification() {
	    if (notificationTimeout) {
	      clearTimeout(notificationTimeout);
	      notificationTimeout = null;
	    }
	
	    var filteredOptions = hints.children;
	    if (filteredOptions.length === 0) {
	      return;
	    }
	
	    notificationTimeout = setTimeout(function () {
	      var message = 'There are currently ' + filteredOptions.length + ' options starting with ' + input.value.split('').join('-') + '.';
	      var highlight = hints.querySelector('.highlight');
	      if (highlight) {
	        message += ' Press down arrow for options, or Press enter to select ' + highlight.innerText;
	      }
	
	      notify(live, message);
	    }, 1200);
	  }
	
	  function showOptions() {
	    var filteredOptions = input.value.length > 0 ? filter(data, input.value) : data;
	    if (renderOptions(hints, filteredOptions)) {
        input.setAttribute('aria-expanded', 'true');
        hints.className = "autocomplete_hints expanded"; /* added by Paul; this method can be improved */
        prepareNotification();
      }
      else {
        hints.className = "autocomplete_hints collapsed"; /* added by Paul; this method can be improved */
      }
	  }
	
	  input.addEventListener('input', function () {
	    if (input.value.length > 0) {
	      showOptions();
	    }
	  });
	
	  kb.onElementSpace(input, function (e) {
	    if (e.ctrlKey && e.altKey) {
	      e.preventDefault();
	      e.stopPropagation();
	      showOptions();
	    }
	  });
	
	  kb.onElementUp(input, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (hints.children.length === 0) {
	      return showOptions();
	    }
	
	    nav.highlightPrev(hints);
	    var highlighted = hints.querySelector('[aria-selected="true"]');
	    if (highlighted) {
	      input.setAttribute('aria-activedescendant', highlighted.id);
	    }
	    immediateNotification();
	  });
	
	  kb.onElementDown(input, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (hints.children.length === 0) {
	      return showOptions();
	    }
	
	    nav.highlightNext(hints);
	    var highlighted = hints.querySelector('[aria-selected="true"]');
	    if (highlighted) {
	      input.setAttribute('aria-activedescendant', highlighted.id);
	    }
	    immediateNotification();
	  });
	
	  kb.onElementEnter(input, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    nav.confirmValue(input, hints);
	    nav.clearList(hints);
	    input.setAttribute('aria-expanded', 'false');
      hints.className += " collapsed"; /* added by Paul */
	    clearTimeout(notificationTimeout);
	  });
	
	  document.body.addEventListener('click', function (e) {
	    var clickTarget = e.target;
	    if (!(0, _containerUtils.elementIsChildOfElement)(clickTarget, output)) {
	      nav.clearList(hints);
        input.setAttribute('aria-expanded', 'false'); /* added by Paul */
        hints.className = "autocomplete_hints collapsed"; /* added by Paul; this method can be improved */
	    }
	  });
	
	  document.body.addEventListener('focusin', function (e) {
	    var focusTarget = e.target;
	    if (!(0, _containerUtils.elementIsChildOfElement)(focusTarget, output)) {
	      nav.clearList(hints);
	    }
	  });
	
	  kb.onElementEscape(input, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (hints.children.length > 0) {
	      nav.clearList(hints);
	      input.setAttribute('aria-expanded', 'false');
        hints.className = "autocomplete_hints collapsed"; /* added by Paul; this method can be improved */
	      clearTimeout(notificationTimeout);
	    } else {
	      input.value = '';
	    }
	  });
	
	  hints.addEventListener('click', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    nav.confirmValue(input, hints);
	    nav.clearList(hints);
	    input.setAttribute('aria-expanded', 'false');
      hints.className = "autocomplete_hints collapsed"; /* added by Paul; this method can be improved */
	    clearTimeout(notificationTimeout);
	  });
	
	  live.classList.add('live-update-region');
	  live.setAttribute('aria-live', 'polite');
	
	  output.appendChild(input);
	  output.appendChild(hints);
	  document.body.appendChild(live);
	
	  output.getInputElement = function () {
	    return input;
	  };
	
	  return output;
	}
	
	function renderOptions(list, options) {
	  list.innerHTML = '';
	  options.map(function (item) {
	    return (0, _formatter.createHint)(list, item);
	  }).forEach(function (item) {
	    return list.appendChild(item);
	  });
	
	  var firstItem = list.querySelector('li');
	  if (firstItem) {
	    firstItem.classList.add('highlight');
      return true; /* added by Paul Bohman */
	  }
	}
	
	function filter(data, prompt) {
	  if (prompt.length === 0) {
	    return [];
	  }
	  return data.filter(function (str) {
	    return str.toLowerCase().indexOf(prompt.toLowerCase()) === 0;
	  });
	}
	
	var clearNotificationTimeout = void 0;
	function notify(live, message) {
	  if (clearNotificationTimeout) {
	    clearTimeout(clearNotificationTimeout);
	    clearNotificationTimeout = null;
	  }
	
	  live.innerText = message;
	  clearNotificationTimeout = setTimeout(function () {
	    live.innerText = '';
	  }, 6000);
	}

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.validateData = validateData;
	function isString(v) {
	  return v && typeof v === 'string';
	}
	
	function isValidObject(v) {
	  return v && typeof v.label === 'string';
	}
	
	function validateData(data) {
	  if (!Array.isArray(data)) {
	    return false;
	  }
	  if (data.length === 0) {
	    return false;
	  }
	
	  return data.every(isString) || data.every(isValidObject);
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createHint = createHint;
	
	var _navigation = __webpack_require__(74);
	
	var _guidUtils = __webpack_require__(39);
	
	function createHint(list, item) {
	  if (item.label) {
	    return wrapItem(list, item);
	  }
	
	  return wrapString(list, item);
	}
	
	function wrapItem(list, item) {
	  var output = wrapString(list, item.label);
	  output.classList.add('complex_item');
	  output.$item = item;
	
	  return output;
	}
	
	function wrapString(list, string) {
	  var output = document.createElement('li');
	  output.id = (0, _guidUtils.generateGuid)();
	  output.innerText = string;
	  output.classList.add('autocomplete_hint');
	  output.setAttribute('role', 'option');
	
	  output.addEventListener('mouseover', function () {
	    (0, _navigation.setHighlight)(list, output);
	  });
	
	  return output;
	}

/***/ },
/* 74 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setHighlight = setHighlight;
	exports.highlightNext = highlightNext;
	exports.highlightPrev = highlightPrev;
	exports.clearList = clearList;
	exports.confirmValue = confirmValue;
	function setHighlight(list, item) {
	  var allItems = list.querySelectorAll('li');
	  for (var i = 0; i < allItems.length; i++) {
	    if (item === allItems[i]) {
	      allItems[i].classList.add('highlight');
	      allItems[i].setAttribute('aria-selected', 'true');
	    } else {
	      allItems[i].classList.remove('highlight');
	      allItems[i].setAttribute('aria-selected', 'false');
	    }
	  }
	}
	
	function highlightNext(list) {
	  if (list.children.length === 0) {
	    return;
	  }
	
	  var target = void 0;
	  var current = list.querySelector('.highlight');
	  if (!current) {
	    target = list.querySelector('li');
	    return setHighlight(list, target);
	  }
	
	  target = current.nextElementSibling;
	  if (!target) {
	    target = list.querySelector('li');
	  }
	
	  setHighlight(list, target);
	}
	
	function highlightPrev(list) {
	  if (list.children.length === 0) {
	    return;
	  }
	
	  var target = void 0;
	  var current = list.querySelector('.highlight');
	  if (!current) {
	    target = list.querySelector('li');
	    return setHighlight(list, target);
	  }
	
	  target = current.previousElementSibling;
	  if (!target) {
	    var children = list.querySelectorAll('li');
	    target = children[children.length - 1];
	  }
	
	  setHighlight(list, target);
	}
	
	function clearList(list) {
	  if (list) {
	    list.innerHTML = '';
	  }
	}
	
	function confirmValue(input, list) {
	  var li = list.querySelector('.highlight');
	  if (li) {
	    input.value = li.innerText;
	  }
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createTabpanel;
	
	var _validator = __webpack_require__(76);
	
	var _builder = __webpack_require__(77);
	
	var builder = _interopRequireWildcard(_builder);
	
	var _guidUtils = __webpack_require__(39);
	
	var _tabstopUtils = __webpack_require__(78);
	
	var _carouselControls = __webpack_require__(79);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function createTabpanel(data, config) {
	  (0, _validator.validateInput)(data);
	
	  var output = document.createElement('div');
	  output.classList.add('price');
	  output.classList.add('tabPanel');
	  output.id = (0, _guidUtils.generateGuid)();
	
	  var tablist = document.createElement('ul');
	  tablist.setAttribute('role', 'tablist');
	
	  var content = document.createElement('div');
	  content.classList.add('contentArea');
	
	  var elements = data.map(function (item) {
	    var contentID = (0, _guidUtils.generateGuid)();
	    var tabID = (0, _guidUtils.generateGuid)();
	    var tab = builder.createTab(item.header, tabID, contentID);
	    var panel = builder.createPanel(item.content, tabID, contentID);
	
	    tablist.appendChild(tab);
	    content.appendChild(panel);
	
	    tab.activate = function () {
	      for (var i = 0; i < content.children.length; i++) {
	        if (content.children[i].id === contentID) {
	          content.children[i].classList.remove('hidden');
	        } else {
	          content.children[i].classList.add('hidden');
	        }
	      }
	    };
	
	    return { tab: tab, panel: panel };
	  });
	
	  var tabs = elements.map(function (e) {
	    return e.tab;
	  });
	
	  applyNavigationLogic(tabs, config);
	
	  output.appendChild(tablist);
	  output.appendChild(content);
	
	  var autoplayControls = void 0;
	  if (config.autoplay) {
	    var autoplayConfig = {
	      onPlay: function onPlay() {},
	      onPause: function onPause() {},
	      onNext: function onNext() {
	        selectTab(getNext(getCurrentTab()));
	      },
	      onPrevious: function onPrevious() {
	        selectTab(getPrev(getCurrentTab()));
	      }
	    };
	
	    autoplayControls = (0, _carouselControls.buildCarouselControls)(autoplayConfig, config.autoplay || 3000);
	    output.appendChild(autoplayControls);
	  }
	
	  tablist.children[0].setAttribute('tabindex', '0');
	  tablist.children[0].setAttribute('aria-selected', 'true');
	  content.children[0].classList.remove('hidden');
	
	  var getCurrentTab = function getCurrentTab() {
	    return tabs.filter(function (t) {
	      return t.getAttribute('tabindex') === '0';
	    })[0];
	  };
	
	  function getPrev(item) {
	    var output = item.previousElementSibling || tabs[tabs.length - 1];
	    return output;
	  }
	
	  function getNext(item) {
	    var output = item.nextElementSibling || tabs[0];
	    return output;
	  }
	
	  function selectTab(item) {
	    tabs.forEach(function (i) {
	      if (i === item) {
	        i.setAttribute('tabindex', '0');
	
	        if (typeof i.activate === 'function') {
	          i.activate();
	        }
	        i.setAttribute('aria-selected', 'true');
	      } else {
	        i.setAttribute('tabindex', '-1');
	        i.removeAttribute('aria-selected');
	      }
	    });
	  }
	
	  function applyNavigationLogic(tabs, _ref) {
	    var autoselect = _ref.autoselect,
	        vertical = _ref.vertical;
	
	    var tabstopConfig = {
	      onSpace: function onSpace(item) {
	        if (item.activate) {
	          item.activate();
	        }
	      },
	      onClick: function onClick(item) {
	        item.activate();
	      },
	      select: selectTab,
	      useAriaSelected: true,
	      autoselect: autoselect
	    };
	
	    if (vertical) {
	      tabstopConfig.onUp = function (item) {
	        if (autoplayControls) {
	          autoplayControls.pause();
	        }
	
	        return getPrev(item);
	      };
	
	      tabstopConfig.onDown = function (item) {
	        if (autoplayControls) {
	          autoplayControls.pause();
	        }
	
	        return getNext(item);
	      };
	    } else {
	      tabstopConfig.onLeft = function (item) {
	        if (autoplayControls) {
	          autoplayControls.pause();
	        }
	
	        return getPrev(item);
	      };
	
	      tabstopConfig.onRight = function (item) {
	        if (autoplayControls) {
	          autoplayControls.pause();
	        }
	
	        return getNext(item);
	      };
	    }
	
	    (0, _tabstopUtils.createSingleTabstopStructure)(tabs, tabstopConfig);
	  }
	
	  return output;
	}

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.validateInput = validateInput;
	function validateInput(data) {
	  if (!Array.isArray(data)) {
	    throw new Error('data must be an array');
	  }
	
	  if (!data.every(function (item) {
	    return item.header && item.content;
	  })) {
	    throw new Error('each item in your data must have a header field and a content field.');
	  }
	}

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createTab = createTab;
	exports.createPanel = createPanel;
	function createTab(data, tabID, contentID) {
	  var output = document.createElement('li');
	  output.setAttribute('role', 'tab');
	  output.setAttribute('tabindex', '-1');
	  output.id = tabID;
	  if (contentID) {
	    output.setAttribute('aria-controls', contentID);
	  }
	
	  if (data.markup) {
	    output.innerHTML = data.markup;
	  } else {
	    output.innerText = data.label;
	  }
	  if (!data.classes) {
	    data.classes = [];
	  }
	
	  data.classes.forEach(function (c) {
	    return output.classList.add(c);
	  });
	
	  return output;
	}
	
	function createPanel(data, tabID, contentID) {
	  var output = document.createElement('div');
	  output.setAttribute('role', 'tabpanel');
	  output.id = contentID;
	  output.appendChild(data.element);
	  output.setAttribute('aria-labelledby', tabID);
	
	  output.classList.add('hidden');
	
	  return output;
	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createSingleTabstopStructure = createSingleTabstopStructure;
	
	var _keyboardUtils = __webpack_require__(44);
	
	var kb = _interopRequireWildcard(_keyboardUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function createSingleTabstopStructure(items, config) {
	  items.forEach(function (item) {
	    item.addEventListener('focus', function () {
	      if (config.onFocus) {
	        config.onFocus(item);
	      }
	    });
	
	    if (!config.select) {
	      config.select = function () {};
	    }
	
	    if (config.onClick) {
	      item.addEventListener('click', function () {
	        config.onClick(item);
	        config.select(item);
	      });
	    }
	
	    if (config.onSpace) {
	      kb.onElementSpace(item, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        config.onSpace(item);
	        config.select(item);
	      });
	    }
	
	    if (config.onLeft) {
	      kb.onElementLeft(item, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	
	        var target = config.onLeft(item);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target);
	          }
	        }
	      });
	    }
	
	    if (config.onRight) {
	      kb.onElementRight(item, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var target = config.onRight(item);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target);
	          }
	        }
	      });
	    }
	
	    if (config.onUp) {
	      kb.onElementUp(item, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var target = config.onUp(item);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target);
	          }
	        }
	      });
	    }
	
	    if (config.onDown) {
	      kb.onElementDown(item, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var target = config.onDown(item);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target);
	          }
	        }
	      });
	    }
	
	    if (config.onHome) {
	      kb.onElementHome(item, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var target = config.onHome(item);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target);
	          }
	        }
	      });
	    }
	
	    if (config.onEnd) {
	      kb.onElementEnd(item, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var target = config.onEnd(item);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target);
	          }
	        }
	      });
	    }
	
	    if (config.onPageUp) {
	      kb.onElementPageUp(item, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var target = config.onPageUp(item);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target);
	          }
	        }
	      });
	    }
	
	    if (config.onPageDown) {
	      kb.onElementPageDown(item, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var target = config.onPageDown(item);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target);
	          }
	        }
	      });
	    }
	
	    if (config.onCharacter) {
	      kb.onElementCharacter(item, function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        var target = config.onCharacter(item);
	        if (target) {
	          target.focus();
	          if (config.autoselect) {
	            config.select(target);
	          }
	        }
	      });
	    }
	  });
	}

/***/ },
/* 79 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.buildCarouselControls = buildCarouselControls;
	function createButton(label) {
	  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	
	  var output = document.createElement('button');
	  output.innerText = label;
	  classes.forEach(function (c) {
	    return output.classList.add(c);
	  });
	  return output;
	}
	
	function buildCarouselControls(_ref) {
	  var onPlay = _ref.onPlay,
	      onPause = _ref.onPause,
	      onNext = _ref.onNext,
	      onPrevious = _ref.onPrevious;
	  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
	
	  var output = document.createElement('div');
	  output.className = 'output-wrap';
	  var prevButton = createButton('prev', ['prev']);
	  var playButton = createButton('play', ['play', 'hidden']);
	  var pauseButton = createButton('pause', ['pause']);
	  var nextButton = createButton('next', ['next']);
	
	  var playInterval = void 0;
	
	  var startPlaying = function startPlaying() {
	    if (playInterval) {
	      stopPlaying();
	    }
	    playInterval = setInterval(next, duration);
	    playButton.classList.add('hidden');
	    pauseButton.classList.remove('hidden');
	    if (onPlay) {
	      onPlay();
	    }
	  };
	
	  var stopPlaying = function stopPlaying() {
	    clearInterval(playInterval);
	    playInterval = null;
	    playButton.classList.remove('hidden');
	    pauseButton.classList.add('hidden');
	    if (onPause) {
	      onPause();
	    }
	  };
	
	  var next = function next() {
	    if (onNext) {
	      onNext();
	    }
	  };
	
	  var prev = function prev() {
	    if (onPrevious) {
	      onPrevious();
	    }
	  };
	
	  nextButton.addEventListener('click', next);
	  prevButton.addEventListener('click', prev);
	  playButton.addEventListener('click', startPlaying);
	  pauseButton.addEventListener('click', stopPlaying);
	
	  output.appendChild(prevButton);
	  output.appendChild(playButton);
	  output.appendChild(pauseButton);
	  output.appendChild(nextButton);
	
	  startPlaying();
	
	  output.start = startPlaying;
	  output.pause = stopPlaying;
	  output.prev = prev;
	  output.next = next;
	  return output;
	}

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createProgressBar;
	function createProgressBar(_ref) {
	  var _ref$bounded = _ref.bounded,
	      bounded = _ref$bounded === undefined ? false : _ref$bounded,
	      _ref$initialValue = _ref.initialValue,
	      initialValue = _ref$initialValue === undefined ? 0 : _ref$initialValue,
	      _ref$minValue = _ref.minValue,
	      minValue = _ref$minValue === undefined ? 0 : _ref$minValue,
	      _ref$maxValue = _ref.maxValue,
	      maxValue = _ref$maxValue === undefined ? 100 : _ref$maxValue,
	      _ref$unboundMessage = _ref.unboundMessage,
	      unboundMessage = _ref$unboundMessage === undefined ? 'In progress, please wait...' : _ref$unboundMessage;
	
	  var output = document.createElement('progress');
	  output.classList.add('price');
	  output.setAttribute('role', 'progressbar');
	  output.setAttribute('aria-valuemin', minValue);
	  output.setAttribute('aria-valuemax', maxValue);
	
	  if (bounded) {
	    output.setAttribute('value-now', initialValue);
	    output.setAttribute('max', maxValue);
	    output.setValue = function (v) {
	      if (v < minValue) {
	        v = minValue;
	      }
	
	      if (v > maxValue) {
	        v = maxValue;
	      }
	
	      var percent = parseInt(v / maxValue * 100);
	
	      output.innerText = percent + '%';
	      output.setAttribute('aria-valuenow', v);
	      output.setAttribute('value-now', v);
	      output.setAttribute('value', v);
	    };
	
	    output.setValue(initialValue);
	  } else {
	    output.setAttribute('aria-valuetext', unboundMessage);
	  }
	
	  return output;
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createExpander;
	
	var _isDetailsSupported = __webpack_require__(82);
	
	var _isIOS = __webpack_require__(83);
	
	var _isIOS2 = _interopRequireDefault(_isIOS);
	
	var _keyboardUtils = __webpack_require__(44);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createExpander(label, content, forceHTML4) {
	  if ((0, _isDetailsSupported.isDetailsSupported)() && !forceHTML4 && !(0, _isIOS2.default)()) {
	    return html5Version(label, content);
	  } else {
	    return html4Version(label, content);
	  }
	}
	
	function html5Version(label, content) {
	  var output = document.createElement('details');
	  var summary = document.createElement('summary');
	  output.classList.add('price');
	  output.classList.add('expander');
	  summary.innerHTML = label;
	
	  var expandedContent = document.createElement('div');
	  expandedContent.classList.add('content');
	  expandedContent.innerHTML = content;
	
	  summary.setAttribute('tabindex', '0');
	
	  // it would seem that browsers treat the <summary>
	  // element as if it were a button, i.e. automagically
	  // treat space and enter as 'click' events.
	  summary.setAttribute('role', 'button');
	  summary.setAttribute('aria-expanded', 'false');
	
	  function setOpenStatus() {
	    if (output.hasAttribute('open')) {
	      summary.setAttribute('aria-expanded', 'true');
	    } else {
	      summary.setAttribute('aria-expanded', 'false');
	    }
	  }
	
	  summary.addEventListener('click', setOpenStatus);
	
	  output.appendChild(summary);
	  output.appendChild(expandedContent);
	  return output;
	}
	
	// const arrows = {
	//   RIGHT: 'images/rightArrow.png',
	//   DOWN: 'images/downArrow.png'
	// };
	
	function html4Version(label, content) {
	  var output = document.createElement('div');
	  output.classList.add('price');
	  output.classList.add('expander');
	
	  var header = document.createElement('div');
	  header.classList.add('summary');
	  header.setAttribute('role', 'button');
	  // Got rid of img and added custom arrow to match Microsoft site
	  // let indicator = document.createElement('img');
	  // indicator.classList.add('indicator');
	  //
	  // indicator.setAttribute('width', '13');
	  // indicator.setAttribute('height', '13');
	  // indicator.setAttribute('src', arrows.RIGHT);
	  // indicator.setAttribute('alt', '');
	  //
	  // indicator.setAttribute('role', 'img');
	  // header.appendChild(indicator);
	
	  var headerText = document.createElement('span');
	  headerText.classList.add('summaryText');
	  headerText.innerHTML = label;
	  header.appendChild(headerText);
	  header.setAttribute('aria-expanded', 'false');
	
	  var expandedContent = document.createElement('div');
	  expandedContent.classList.add('content');
	  expandedContent.innerHTML = content;
	
	  expandedContent.classList.add('hidden');
	  output.appendChild(header);
	  output.appendChild(expandedContent);
	
	  var clearFix = document.createElement('div');
	  clearFix.classList.add('clearfix');
	  output.appendChild(clearFix);
	
	  header.setAttribute('tabindex', '0');
	
	  function toggle(e) {
	    e.stopPropagation();
	    e.preventDefault();
	
	    expandedContent.classList.toggle('hidden');
	    if (expandedContent.classList.contains('hidden')) {
	      output.removeAttribute('open');
	      header.setAttribute('aria-expanded', 'false');
	      ///indicator.setAttribute('src', arrows.RIGHT);
	    } else {
	      output.setAttribute('open', 'true');
	      header.setAttribute('aria-expanded', 'true');
	      //indicator.setAttribute('src', arrows.DOWN);
	    }
	  }
	
	  (0, _keyboardUtils.onElementEnter)(header, toggle);
	  (0, _keyboardUtils.onElementSpace)(header, toggle);
	  header.addEventListener('click', toggle);
	
	  return output;
	}

/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isDetailsSupported = isDetailsSupported;
	function isDetailsSupported() {
	  var el = document.createElement('details');
	  var diff;
	
	  // return early if possible; thanks @aFarkas!
	  if (!('open' in el)) {
	    return false;
	  }
	
	  document.body.appendChild(el);
	  el.innerHTML = '<summary>a</summary>b';
	  diff = el.offsetHeight;
	  el.open = true;
	  diff = diff != el.offsetHeight;
	
	  document.body.removeChild(el);
	
	  return diff;
	}

/***/ },
/* 83 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
	  );
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = configureFormValidation;
	
	var _selectionUtils = __webpack_require__(36);
	
	var _default = __webpack_require__(85);
	
	var defaultValidators = _interopRequireWildcard(_default);
	
	var _validation = __webpack_require__(86);
	
	var _tooltip = __webpack_require__(43);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	var _password = __webpack_require__(87);
	
	var _text = __webpack_require__(90);
	
	var _feedbackArea = __webpack_require__(92);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var FEEDBACK_TYPES = {
	  TOP: 'top',
	  INLINE: 'inline'
	};
	
	function configureFormValidation(form, config) {
	  form.classList.add('price');
	  form.setAttribute('novalidate', 'true');
	
	  var feedbackType = form.getAttribute('data-feedback-type') || FEEDBACK_TYPES.TOP;
	
	  var feedbackArea = (0, _feedbackArea.createFeedbackArea)();
	  form.insertBefore(feedbackArea, form.children[0]);
	
	  var passwordInputs = (0, _selectionUtils.queryAll)('[type="password"]', form);
	  if (config.passwordEvaluator && passwordInputs.length > 0) {
	    (0, _password.wireupPasswordEvaluator)(passwordInputs, config.passwordEvaluator, function (message, id, classes) {
	      feedbackArea.logNotification(message, id, classes);
	    });
	  }
	
	  var maxcharsInputs = (0, _selectionUtils.queryAll)('[maxlength]', form);
	
	  if (maxcharsInputs.length > 0) {
	    (0, _text.wireupMaxLengthNotifications)(maxcharsInputs, function (message, id, classes) {
	      feedbackArea.logNotification(message, id, classes);
	    });
	  }
	
	  var validators = _extends({}, config, defaultValidators);
	
	  function notifySuccess() {
	    feedbackArea.clear();
	    feedbackArea.logNotification('Form submission successful', 'successReport', ['success']);
		 
		  var errors = document.getElementsByClassName('errorExplanationOuterWrapper');
			for (var i = 0; i < errors.length; i++) {
			    errors[i].remove();
			}
	  }
	
	  function notifyFailure(errors) {
	    feedbackArea.clear();
	    if (feedbackType === FEEDBACK_TYPES.TOP) {
		  /* the code below was added by Paul Bohman */
		  var plural = 'is';
		  var s = '';
		  if (errors.length > 1) {
			  plural = 'are';
			  s = 's';
		  }
		  /* end code added by Paul Bohman */
			
		  /* the code below was modified by Paul Bohman */
	      feedbackArea.logNotification('<h4><strong>Error:</strong> There ' + plural + ' ' + errors.length + ' problem' + s + ' to fix in this form</h4>');
			/* end modified code */
	      errors.forEach(function (m) {
	        return feedbackArea.logNotification(m, null, ['error']);
	      });

			var inputs = document.getElementsByTagName('input');
			for (var i = 0; i < inputs.length; i++) {
					var thisInput = inputs[i];
			    if (thisInput.getAttribute('aria-invalid')) {
			    	var failedRequire = thisInput.getAttribute('data-validate-failed-require');
						var failedPattern = thisInput.getAttribute('data-validate-failed-pattern');
						var describedByOriginal = thisInput.getAttribute('aria-describedby');
						var inputId = thisInput.id;
						if (failedRequire || failedPattern) {
							var descId = 'errorExplanation-' + inputId
							var describedBy = describedByOriginal + ' ' + descId;
							thisInput.setAttribute('aria-describedby', describedBy);
							if (failedRequire) {
								var failedRequire = '<span class="errorExplanation required">' + failedRequire + '</span>';
							}
							else failedRequire = '';
							if (failedPattern) {
								var failedPattern = '<span class="errorExplanation pattern">' + failedPattern + '</span>';
							}
							else failedPattern = '';
							//$(this).after('<span class="errorExplanationOuterWrapper"><span class="errorExplanationWrapper icon message" id="' + descId + '"><span class="price glyph exclamation-triangle" aria-hidden="true"></span> ' + failedRequire + ' ' + failedPattern + '</span></span>');
							var el = document.createElement('span');
							el.className = 'errorExplanationOuterWrapper';
							el.innerHTML = '<span class="errorExplanationWrapper icon message" id="' + descId + '"><span class="price glyph exclamation-triangle" aria-hidden="true"></span> ' + failedRequire + ' ' + failedPattern + '</span>';
							thisInput.parentNode.insertBefore(el, thisInput.nextSibling);
						}
			    }
				}			
	    }
		/* the code below was added by Paul Bohman 
			TO DO:
				- we need to allow the option to put the error messages after the inputs and make them always invisible. When this option is chosen, the tooltips will not be available. 
				  it will either be 1) visible always or 2) tooltip
		*/
		else if (feedbackType === FEEDBACK_TYPES.INLINE) {
			var inputs = document.getElementsByTagName('input');
			for (var i = 0; i < inputs.length; i++) {
				var thisInput = inputs[i];
			  if (thisInput.getAttribute('aria-invalid')) {
			  	var el = document.createElement('span');
					el.className = 'errorExplanationOuterWrapper';
					el.innerHTML = '<span class="errorExplanationWrapper icon"><span class="fa fa-exclamation-triangle" aria-hidden="true"></span></span>';
					thisInput.parentNode.insertBefore(el, thisInput.nextSibling);
			  }
			}
		}
		/* end added code */
	  }
    
	/*
	  function notifyFailure(errors) {
	    feedbackArea.clear();
	    if (feedbackType === FEEDBACK_TYPES.TOP) {
	      feedbackArea.logNotification('<h4>There were ' + errors.length + ' problems detected on your form submission:</h4>');
	      errors.forEach(function (m) {
	        return feedbackArea.logNotification(m, null, ['error']);
	      });
	    }
	  }
  
  */
	
	  form.addEventListener('submit', function (e) {
	    var inputs = (0, _selectionUtils.queryAll)('[data-validate]', form);
	    inputs.forEach(function (i) {
	      var validate = (0, _validation.getValidationFunction)(validators, i);
	
	      i.classList.remove('invalid');
	      i.removeAttribute('aria-invalid');
	      if (!validate()) {
	        i.classList.add('invalid');
	        i.setAttribute('aria-invalid', 'true');
	      }
	    });
	
	    var validated = inputs.every(function (i) {
	      return !i.classList.contains('invalid');
	    });
	
	    if (!validated) {
	      e.preventDefault();
	      e.stopPropagation();
	
	      var invalidInputs = inputs.filter(function (i) {
	        return i.classList.contains('invalid');
	      });
	      var errors = (0, _validation.getValidationErrors)(invalidInputs, feedbackType === FEEDBACK_TYPES.INLINE);
	      notifyFailure(errors);
	      if (feedbackType === FEEDBACK_TYPES.TOP) {
	        var header = feedbackArea.querySelector('h4');
	        header.setAttribute('tabindex', '-1');
	        header.focus();
	      } else {
	        clearTooltips(form);
	        initTooltips(form);
	        form.querySelector('.invalid').focus();
	      }
	    } else {
	      notifySuccess();
	      clearTooltips(form);
	    }
	  });
	}
	
	function initTooltips(form) {
	  (0, _selectionUtils.queryAll)('[data-tooltip]', form).forEach(function (i) {
	    i.cancelTooltip = (0, _tooltip2.default)(i);
	  });
	}
	
	function clearTooltips(form) {
	  (0, _selectionUtils.queryAll)('[data-tooltip]', form).forEach(function (i) {
	    if (i.cancelTooltip) {
	      i.cancelTooltip();
	    }
	  });
	}

/***/ },
/* 85 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.required = required;
	exports.maxChars = maxChars;
	exports.isEmail = isEmail;
	exports.pattern = pattern;
	exports.isNumeric = isNumeric;
	exports.passwordStrength = passwordStrength;
	function required(input) {
	  var val = !!input.value;
	
	  var errorMessage = input.getAttribute('data-validate-errormessage-required') || 'failed to provide a required value.';
	
	  if (!val) {
	    input.setAttribute('data-validate-failed-require', errorMessage);
	  } else {
	    input.removeAttribute('data-validate-failed-require');
	  }
	
	  return val;
	}
	
	function maxChars(input) {
	  var threshold = input.getAttribute('maxlength');
	
	  if (!threshold) {
	    throw new Error('The maxChars validator needs a maxlength attribute to test against.');
	  }
	
	  var errorMessage = input.getAttribute('data-validate-errormessage-maxchars') || 'Value length exceeds threshold of ' + threshold;
	
	  var val = input.value.length <= threshold;
	  if (!val) {
	    input.setAttribute('data-validate-failed-max_chars', errorMessage);
	  } else {
	    input.removeAttribute('data-validate-failed-max_chars');
	  }
	
	  return val;
	}
	
	function isEmail(input) {
	  var val = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(input.value);
	
	  var errorMessage = input.getAttribute('data-validate-errormessage-is_email') || 'value must be a valid email address';
	
	  if (!val) {
	    input.setAttribute('data-validate-failed-is_email', errorMessage);
	  } else {
	    input.removeAttribute('data-validate-failed-is_email');
	  }
	
	  return val;
	}
	
	function pattern(input) {
	  var pattern = input.getAttribute('pattern');
	  if (!pattern) {
	    throw new Error('The pattern validator requires a pattern attribute to test against.');
	  }
	
	  var regExp = new RegExp(pattern);
	  var val = regExp.test(input.value);
	
	  var errorMessage = input.getAttribute('data-validate-errormessage-pattern') || 'Value did not match pattern <' + pattern + '>';
	
	  if (!val) {
	    input.setAttribute('data-validate-failed-pattern', errorMessage);
	  } else {
	    input.removeAttribute('data-validate-failed-pattern');
	  }
	
	  return val;
	}
	
	function isNumeric(input) {
	  var val = !isNaN(parseFloat(input.value));
	
	  var errorMessage = input.getAttribute('data-validate-errormessage-is_numeric') || 'input is not a numeric value';
	
	  if (!val) {
	    input.setAttribute('data-validate-failed-is_numeric', errorMessage);
	  } else {
	    input.removeAttribute('data-validate-failed-is_numeric');
	  }
	
	  return val;
	}
	
	function passwordStrength(input) {
	  var threshold = parseInt(input.getAttribute('data-validate-password-strength'));
	  if (!threshold || threshold < 0 || threshold > 4 || isNaN(threshold)) {
	    throw new Error('Using the password strength validator requires you to specify "data-validate-password-strength" with a value between 0-4');
	  }
	
	  var qualityMeterId = input.getAttribute('aria-describedby');
	  if (!qualityMeterId) {
	    throw new Error('Your input should be `aria-describedby` a password quality feedback component. If not, did you pass in a `passwordEvaluator` function into your config?');
	  }
	
	  var qualityMeter = document.getElementById(qualityMeterId);
	  if (!qualityMeter) {
	    throw new Error('Your input should be `aria-describedby` a password quality feedback component. If not, did you pass in a `passwordEvaluator` function into your config?');
	  }
	
	  var quality = parseInt(qualityMeter.getAttribute('data-password-quality'));
	
	  if (isNaN(quality) || quality < 0 || quality > 4) {
	    throw new Error('Unable to read password quality from quality meter.');
	  }
	
	  var errorMessage = input.getAttribute('data-validate-errormessage-password_strength') || 'Your password quality is ' + (quality + 1) + '/5 but needs to be at least ' + (threshold + 1) + '/5';
	
	  var val = quality >= threshold;
	
	  if (!val) {
	    input.setAttribute('data-validate-failed-password_strength', errorMessage);
	  }
	
	  return val;
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getValidationFunction = getValidationFunction;
	exports.getValidationErrors = getValidationErrors;
	
	var _collectionUtils = __webpack_require__(37);
	
	function getValidationFunction(validators, item) {
	  return item.getAttribute('data-validate').split(' ').map(function (validatorName) {
	    if (validators[validatorName]) {
	      return validators[validatorName].bind(null, item);
	    }
	
	    throw new Error('no validator defined for ' + validatorName);
	  }).reduce(function (f, v) {
	    return f.bind(null, v);
	  }, function () {
	    for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	      funcs[_key] = arguments[_key];
	    }
	
	    return funcs.every(function (v) {
	      return v();
	    });
	  });
	}
	
	function getValidationErrors(inputs, appendTooltips) {
	  return inputs.map(function (input) {
	    var specifier = input.id || input.name;
	    var label = document.querySelector('[for=' + specifier + ']');
	    if (label) {
	      label = label.innerText;
	    } else {
	      label = 'An input';
	    }
	
	    var output = (0, _collectionUtils.toArray)(input.attributes).filter(function (a) {
	      return a.name.indexOf('data-validate-failed-') === 0;
	    }).map(function (a) {
	      return '<strong>' + label + ' </strong>: ' + a.value;
	    });
	
	    if (appendTooltips) {
	      var tt = output[0].split('</strong>: ')[1];
	      input.setAttribute('data-tooltip', tt);
	    }
	
	    return output;
	  }).reduce(function (acc, val) {
	    return acc.concat(val);
	  }, []);
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wireupPasswordEvaluator = wireupPasswordEvaluator;
	
	var _passwordEvaluation = __webpack_require__(88);
	
	var _formUtils = __webpack_require__(89);
	
	var _noclobberUtils = __webpack_require__(45);
	
	function wireupPasswordEvaluator(inputs, evaluator) {
	  var ratings = ['unacceptable', 'poor', 'ok', 'good', 'great'];
	
	  var timeout = void 0;
	  function queueNotification(input, score, sendNotification) {
	    if (timeout) {
	      clearTimeout(timeout);
	      timeout = null;
	    }
	
	    timeout = setTimeout(function () {
	      var label = (0, _formUtils.getLabel)(input);
	      var rating = ratings[score];
	      sendNotification('The password you\'ve entered for ' + label + ' is ' + rating + '.');
	    }, 2000);
	  }
	
	  if (evaluator && typeof evaluator === 'function') {
	    // this function should return a value between '0' and '4'.
	    // 0 means it's a really weak password, like 'password'
	    // 4 means it's a really good password
	    inputs.forEach(function (i) {
	      var passwordEvaluation = (0, _passwordEvaluation.createPasswordEvaluation)();
	      i.parentElement.insertBefore(passwordEvaluation, i);
	      i.parentElement.insertBefore(i, passwordEvaluation);
	      (0, _noclobberUtils.noClobber)(i, 'aria-describedby', passwordEvaluation.id);
	      i.addEventListener('input', function () {
	        var score = evaluator(i.value);
	        passwordEvaluation.update(score, ratings);
	        queueNotification(i, score, passwordEvaluation.notify);
	      });
	
	      var initialScore = evaluator(i.value);
	      passwordEvaluation.update(initialScore, ratings);
	    });
	  }
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createPasswordEvaluation = createPasswordEvaluation;
	
	var _guidUtils = __webpack_require__(39);
	
	var _containerUtils = __webpack_require__(50);
	
	function createLevelIndicator(level) {
	  var output = document.createElement('div');
	  output.classList.add('password_level');
	  output.classList.add('level' + level);
	
	  var indicator = document.createElement('img');
	  indicator.setAttribute('alt', '');
	  indicator.setAttribute('role', 'presentation');
	  output.appendChild(indicator);
	  return output;
	}
	
function createPasswordEvaluation() {
	  var output = document.createElement('div');
	  output.id = (0, _guidUtils.generateGuid)();
		/* altered by Paul Bohman
			TO DO:
				- This whole section needs to be altered so that it does not use images at all
				- we just need to create an inner container that can be set to red, orange, yellow, green, with different widths
				- also, we need to put real text on the screen, not ::before and ::after text for the password strength indicator
	  output.setAttribute('role', 'img');
	*/
	  output.classList.add('passwordEvaluation');
	  var level0 = createLevelIndicator(0);
	  var level1 = createLevelIndicator(1);
	  var level2 = createLevelIndicator(2);
	  var level3 = createLevelIndicator(3);
	  var level4 = createLevelIndicator(4);
	
	  output.appendChild(level0);
	  output.appendChild(level1);
	  output.appendChild(level2);
	  output.appendChild(level3);
	  output.appendChild(level4);
	
	  var levelIndicators = [level0, level1, level2, level3, level4];
	
	  var alert = (0, _containerUtils.createLiveRegion)('polite');
	
	  output.update = function (score, ratings) {
	    output.setAttribute('data-password-quality', score);
	    output.setAttribute('aria-label', 'Password quality is ' + ratings[score]);
	    levelIndicators.forEach(function (li) {
			/* altered by Paul Bohman
	      li.querySelector('img').setAttribute('src', 'images/pw' + score + '.png');
		  */
	    });
	  };
	
	  output.setAttribute('aria-describedby', alert.id);
	
	  // adding to body, as per Paul B's request
	  document.body.appendChild(alert);
	  var emptyInterval;
	  output.notify = function (text) {
	    alert.innerText = text;
	    if (emptyInterval) {
	      clearInterval(emptyInterval);
	    }
	
	    emptyInterval = setTimeout(function () {
	      alert.innerText = '';
	      emptyInterval = null;
	    }, 5000);
	  };
	
	  return output;
	}

/***/ },
/* 89 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLabel = getLabel;
	function getLabel(input) {
	  if (input.hasAttribute('aria-label')) {
	    return input.getAttribute('aria-label');
	  }
	
	  var name = input.id || input.name;
	  if (!name) {
	    return 'unlabeled input';
	  }
	
	  var labelElement = document.querySelector('[for=' + name + ']');
	  var label = void 0;
	  if (labelElement) {
	    label = labelElement.innerText;
	  } else {
	    label = 'unlabeled input';
	  }
	
	  return label;
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wireupMaxLengthNotifications = wireupMaxLengthNotifications;
	
	var _charsRemaining = __webpack_require__(91);
	
	var _formUtils = __webpack_require__(89);
	
	function wireupMaxLengthNotifications(inputs) {
	
	  var timeout = void 0;
	  function queueNotification(input, sendNotification) {
	    if (timeout) {
	      clearTimeout(timeout);
	      timeout = null;
	    }
	
	    timeout = setTimeout(function () {
	      var label = (0, _formUtils.getLabel)(input);
	      var charCount = input.value.length;
	      var maxChars = parseInt(input.getAttribute('maxlength'));
	      var remaining = maxChars - charCount;
	
	      sendNotification(label + ': You\'ve used ' + charCount + ' out of ' + maxChars + ' characters and have ' + remaining + ' left.');
	    }, 500);
	  }
	
	  inputs.forEach(function (i) {
	    var maxChars = parseInt(i.getAttribute('maxlength'));
	    var feedback = (0, _charsRemaining.createCharsRemaining)(i);
	    i.setAttribute('aria-describedby', feedback.id);
	    i.addEventListener('input', function (e) {
	      var charCount = i.value.length;
	      if (charCount >= maxChars) {
	        e.preventDefault();
	        feedback.notify((0, _formUtils.getLabel)(i) + ': You\'ve used all ' + maxChars + ' characters available to this input.');
	      }
	
	      feedback.update(charCount, maxChars);
	    });
	
	    i.addEventListener('keyup', postUpdate);
	    i.addEventListener('paste', postUpdate);
	
	    // the notification queue gets invoked here, not on input,
	    // in case the form starts with this field populated. You
	    // don't want to get a dozen notifications from pre-pop'd
	    // inputs on page load.
	    function postUpdate() {
	      if (charCount > maxChars) {
	        i.value = i.value.substr(0, maxChars - 1);
	      }
	
	      var charCount = i.value.length;
	      feedback.update(charCount, maxChars);
	      queueNotification(i, feedback.notify);
	    }
	
	    i.parentElement.insertBefore(feedback, i);
	    i.parentElement.insertBefore(i, feedback);
	  });
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createCharsRemaining = createCharsRemaining;
	
	var _guidUtils = __webpack_require__(39);
	
	function createCharsRemaining() {
	  var output = document.createElement('div');
	  output.id = (0, _guidUtils.generateGuid)();
	  var span = document.createElement('span');
	  output.appendChild(span);
	
	  output.classList.add('chars-remaining');
	  output.update = function (current, max) {
	    var newText = '(' + current + '/' + max + ')';
	    if (span.innerText === newText) {
	      return;
	    }
	
	    span.innerText = newText;
	  };
	
	  var alert = document.createElement('span');
	  alert.id = (0, _guidUtils.generateGuid)();
	  alert.setAttribute('aria-live', 'polite');
	  alert.setAttribute('role', 'log');
	  alert.setAttribute('aria-atomic', false);
	  alert.setAttribute('aria-relevant', 'additions');
	  alert.classList.add('visuallyhidden');
	  output.setAttribute('aria-describedby', alert.id);
	
	  // as per Paul B's request, live update region gets shunted to the
	  // end of the document so as not to confuse anyone.
	  document.body.appendChild(alert);
	
	  output.notify = function (text) {
	    alert.innerText = text;
	  };
	
	  return output;
	}

/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createFeedbackArea = createFeedbackArea;
	function createFeedbackArea() {
	  var output = document.createElement('div');
	  output.classList.add('feedback-holder');
	  output.setAttribute('role', 'alert');
	
	  output.clear = function () {
	    output.innerHTML = '';
	  };
	
	  output.clearID = function (id) {
	    if (!id) {
	      return;
	    }
	    var existing = output.querySelector('#' + id);
	    if (existing) {
	      output.removeChild(existing);
	    }
	  };
	
	  output.logNotification = function (message, id) {
	    var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	
	    output.clearID(id);
	    var container = document.createElement('p');
	    container.innerHTML = message;
	    classes.forEach(function (c) {
	      return container.classList.add(c);
	    });
	    output.appendChild(container);
	  };
	
	  return output;
	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createSortableTable;
	
	var _containerUtils = __webpack_require__(50);
	
	function createSortableTable(caption, headers, rows) {
	  var wrapper = document.createElement('div');
	
	  var output = document.createElement('table');
	
	  output.classList.add('price');
	  output.setAttribute('role', 'grid');
	  output.setAttribute('aria-readonly', 'true');
	
	  var captionElement = document.createElement('caption');
	  captionElement.innerText = caption;
	
	  var liveRegion = (0, _containerUtils.createLiveRegion)('polite');
	
	  var sortOrder = null;
	  var sortDirection = -1;
	
	  function getSortHeader() {
	    if (sortOrder === null) {
	      return null;
	    }
	    return headerRow.children[sortOrder];
	  }
	
	  function getSortLabel() {
	    var header = getSortHeader();
	    if (!header) {
	      return null;
	    }
	    return header.innerText;
	  }
	
	  function getSortDirection() {
	    return sortDirection > 0 ? 'ascending' : 'descending';
	  }
	
	  function getSortInfo() {
	    if (sortOrder === null) {
	      return 'unsorted';
	    }
	
	    return 'sorted by ' + getSortLabel() + ', ' + getSortDirection();
	  }
	
	  function renderSorting() {
	    updateCaption();
	    updateAriaSort();
	    updateLiveRegion();
	  }
	
	  function updateAriaSort() {
	    for (var i = 0; i < headerRow.children.length; i++) {
	      var child = headerRow.children[i];
	
	      if (sortOrder !== null && i === Math.abs(sortOrder)) {
	        var direction = getSortDirection();
	        child.setAttribute('aria-sort', direction);
	      } else {
	        child.removeAttribute('aria-sort');
	      }
	    }
	  }
	
	  function updateCaption() {
	    var captionText = caption + ', ' + getSortInfo();
	    captionElement.innerText = captionText;
	  }
	
	  function updateLiveRegion() {
	    var captionText = 'Table ' + caption + ' is now ' + getSortInfo();
	    liveRegion.notify(captionText);
	  }
	
	  var isValid = rows.every(function (row) {
	    return row.length === headers.length;
	  });
	
	  if (!isValid) {
	    throw new Error('Each row must be the same length as the headers row.');
	  }
	
	  var head = document.createElement('thead');
	  var body = document.createElement('tbody');
	
	  output.appendChild(captionElement);
	  output.appendChild(head);
	  output.appendChild(body);
	
	  var headerRow = document.createElement('tr');
	  headerRow.setAttribute('role', 'row');
	  head.appendChild(headerRow);
	
	  // this adds row headers
	  headers = ['Index'].concat(headers);
	  rows = rows.map(function (row, index) {
	    return [index + 1].concat(row);
	  });
	
	  headers.forEach(function (header, i) {
	    var headerCell = createHeaderCell(header, function (e) {
	      e.preventDefault();
	      rows = sortByIndex(rows, i);
	      output.renderData(rows);
	    });
	
	    headerRow.appendChild(headerCell);
	  });
	
	  output.renderData = function (rows) {
	    body.innerHTML = toHTML(rows);
	    renderSorting();
	  };
	
	  output.renderData(rows);
	
	  function sortByIndex(rows, index) {
	    if (sortOrder === index) {
	      sortDirection = -sortDirection;
	      return rows.reverse();
	    } else {
	      sortOrder = index;
	      return rows.sort(function (a, b) {
	        var aVal = a[index];
	        var bVal = b[index];
	        if (!isNaN(parseInt(aVal)) && !isNaN(parseInt(bVal))) {
	          return parseInt(aVal) > parseInt(bVal);
	        }
	
	        return aVal > bVal;
	      });
	    }
	  }
	
	  wrapper.appendChild(output);
	  wrapper.appendChild(liveRegion);
	  var firstOne = wrapper.querySelector('.sortableColumnLabel');
	  if (firstOne) {
	    firstOne.click();
	  } // give the table a default sort...
	  return wrapper;
	}
	
	function createHeaderCell(string, handler) {
	  var output = document.createElement('th');
	  output.setAttribute('role', 'columnheader');
	  output.setAttribute('scope', 'col');
	
	  var label = document.createElement('button');
	  label.setAttribute('tabindex', '0');
	  label.classList.add('sortableColumnLabel');
	  label.innerText = string;
	  label.addEventListener('click', handler);
	
	  var icon = document.createElement('img');
	  icon.classList.add('sort-icon');
	  icon.setAttribute('width', '10');
	  icon.setAttribute('height', '10');
	
	  output.appendChild(label);
	  return output;
	}
	
	function toHTML(rows) {
	  return rows.map(function (row) {
	    return '<tr role="row">\n    ' + row.map(function (item, index) {
	      if (index === 0) {
	        return '<th scope="row" role="rowheader">' + item + '</th>';
	      }
	      return '<td role="gridcell">' + item + '</td>';
	    }).join('') + '</tr>';
	  }).join('');
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.makeTableResponsive = makeTableResponsive;
	exports.collapseTableToList = collapseTableToList;
	
	var _selectionUtils = __webpack_require__(36);
	
	function getTableName(table) {
	  var caption = table.querySelector('caption');
	  if (caption) {
	    return caption.innerText;
	  }
	
	  return table.getAttribute('aria-label') || 'unnamed table';
	}
	
	function makeTableResponsive(table) {
	  var labelDetails = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var inflectionPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
	
	  var resizeTimeout;
	
	  function resizeThrottler() {
	    // ignore resize events as long as an handleResponsiveLogic execution is in the queue
	    if (!resizeTimeout) {
	      resizeTimeout = setTimeout(function () {
	        resizeTimeout = null;
	        handleResponsiveLogic();
	
	        // The handleResponsiveLogic will execute at a rate of 15fps
	      }, 66);
	    }
	  }
	
	  function handleResponsiveLogic() {
	    // handle the resize event
	    if (window.innerWidth < inflectionPoint) {
	      renderAsList();
	    } else {
	      renderAsTable();
	    }
	  }
	
	  var list = void 0;
	  var wrapper = document.createElement('div');
	  wrapper.classList.add('responsive-table-wrapper');
	
	  var notificationRegion = document.createElement('div');
	  notificationRegion.setAttribute('role', 'alert');
	  notificationRegion.setAttribute('aria-live', 'polite');
	  notificationRegion.classList.add('visuallyhidden');
	  wrapper.appendChild(notificationRegion);
	
	  function notify(message) {
	    notificationRegion.innerText = message;
	  }
	
	  var tableParent = table.parentElement;
	
	  tableParent.insertBefore(wrapper, table);
	  wrapper.appendChild(table);
	
	  function renderAsList() {
	    if (!list) {
	      var focusID = document.activeElement.id;
	      list = collapseTableToList(table, labelDetails);
	      wrapper.appendChild(list);
	      wrapper.removeChild(table);
	      notify('The data for ' + getTableName(table) + ' is now being rendered as a list.');
	      if (focusID) {
	        var focusTarget = document.querySelector('#' + focusID);
	        if (focusTarget) {
	          focusTarget.focus();
	        }
	      }
	    }
	  }
	
	  function renderAsTable() {
	    if (list) {
	      var focusID = document.activeElement.id;
	      wrapper.removeChild(list);
	      wrapper.appendChild(table);
	      list = null;
	      notify('The data for ' + getTableName(table) + ' is now being rendered as a table.');
	
	      if (focusID) {
	        var focusTarget = document.querySelector('#' + focusID);
	        if (focusTarget) {
	          focusTarget.focus();
	        }
	      }
	    }
	  }
	
	  window.addEventListener('resize', resizeThrottler);
	  handleResponsiveLogic();
	  return table;
	}
	
	function collapseTableToList(table, _ref) {
	  var _ref$labelColumns = _ref.labelColumns,
	      labelColumns = _ref$labelColumns === undefined ? [] : _ref$labelColumns,
	      _ref$labelFunction = _ref.labelFunction,
	      labelFunction = _ref$labelFunction === undefined ? function () {
	    return 'Row:';
	  } : _ref$labelFunction;
	
	  var output = document.createElement('div');
	  output.classList.add('price');
	  output.classList.add('responsive-table-list-holder');
	
	  var caption = document.createElement('h3');
	  caption.innerText = getTableName(table);
	  output.appendChild(caption);
	
	  var headers = (0, _selectionUtils.queryAll)('th', table);
	  var rows = (0, _selectionUtils.queryAll)('tbody tr', table);
	
	  var list = document.createElement('ul');
	  list.classList.add('collapsed-table');
	  list.setAttribute('data-num-columns', headers.length);
	
	  rows.reduce(function (list, row) {
	    var labelData = [];
	    labelColumns.forEach(function (i) {
	      labelData.push(row.children[i]);
	    });
	
	    var header = labelFunction.apply(null, labelData);
	    var li = document.createElement('li');
	    var label = document.createElement('span');
	    label.classList.add('collapsed-table-header');
	    label.innerHTML = header.outerHTML ? header.outerHTML : header;
	    li.appendChild(label);
	
	    var sublist = document.createElement('ul');
	    sublist.classList.add('collapsed-table-content');
	
	    (0, _selectionUtils.queryAll)('th, td', row).forEach(function (cell, index) {
	      var contentColumns = [];
	      if (labelColumns.indexOf(index) === -1) {
	        contentColumns.push({ cell: cell, label: headers[index].innerHTML });
	      }
	
	      if (contentColumns.length > 0) {
	
	        contentColumns.forEach(function (datum) {
	          var item = document.createElement('li');
	
	          item.setAttribute('data-table-column-index', index);
	
	          var labelSpan = document.createElement('span');
	          labelSpan.innerHTML = datum.label;
	          item.appendChild(labelSpan);
	
	          var content = document.createElement('div');
	          content.innerHTML = datum.cell.innerHTML;
	          item.appendChild(content);
	          sublist.appendChild(item);
	        });
	      }
	      // preserve focus!
	
	
	      list.appendChild(li);
	    });
	
	    if (sublist.children.length > 0) {
	      li.appendChild(sublist);
	    }
	
	    return list;
	  }, list);
	
	  output.appendChild(list);
	  return output;
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createHierarchicalMenu;
	
	var _guidUtils = __webpack_require__(39);
	
	var _NodeUtils = __webpack_require__(96);
	
	var _NodeUtils2 = __webpack_require__(96);
	
	var nu = _interopRequireWildcard(_NodeUtils2);
	
	var _behavior = __webpack_require__(97);
	
	var _behavior2 = _interopRequireDefault(_behavior);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function createBranch(root_id, parent_id, item) {
	  var output = document.createElement('li');
	
	  var button = document.createElement('button');
	  button.setAttribute('aria-expanded', 'false');
	  button.setAttribute('data-menu-id', root_id);
	
	  if (parent_id) {
	    button.setAttribute('data-parent-id', parent_id);
	  }
	
	  button.id = (0, _guidUtils.generateGuid)();
	
	  var labelSpan = document.createElement('span');
	
	  labelSpan.innerText = item.label;
	
	  button.addEventListener('click', function () {
	    if (nu.isOpen(button)) {
	      nu.closeNode(button);
	      return true;
	    } else {
	      nu.openNode(button);
	      return false;
	    }
	  });
	
	  button.appendChild(labelSpan);
	  output.appendChild(button);
	
	  var childNodes = document.createElement('ul');
	
	  item.children.map(function (item) {
	    return mapDataToElement(root_id, button.id, item);
	  }).forEach(function (node) {
	    childNodes.appendChild(node);
	  });
	
	  output.appendChild(childNodes);
	  (0, _behavior2.default)(button);
	  return output;
	}
	
	function createLeaf(root_id, parent_id, item) {
	  var output = document.createElement('li');
	  var link = document.createElement('a');
	
	  link.setAttribute('href', item.url);
	  link.innerText = item.label;
	  link.setAttribute('data-menu-id', root_id);
	
	  if (parent_id) {
	    link.setAttribute('data-parent-id', parent_id);
	  }
	
	  output.appendChild(link);
	  (0, _behavior2.default)(link);
	  return output;
	}
	
	function mapDataToElement(root_id, parent_id, item) {
	  if (item.children) {
	    return createBranch(root_id, parent_id, item);
	  } else if (item.url) {
	    return createLeaf(root_id, parent_id, item);
	  }
	}
	
	function createHierarchicalMenu(data) {
	  var holder = document.createElement('div');
	  holder.id = (0, _guidUtils.generateGuid)();
	  var menuRoot = document.createElement('ul');
	
	  menuRoot.classList.add('price');
	  menuRoot.classList.add('hierarchicalMenu');
	
	  var initialNode = mapDataToElement(holder.id, null, data);
	  menuRoot.appendChild(initialNode);
	  holder.appendChild(menuRoot);
	
	  (0, _NodeUtils.focusOnNode)(initialNode);
	  return holder;
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hasChildren = hasChildren;
	exports.isOpen = isOpen;
	exports.getRootNode = getRootNode;
	exports.getVisibleNodes = getVisibleNodes;
	exports.getPreviousVisibleNode = getPreviousVisibleNode;
	exports.getNextVisibleNode = getNextVisibleNode;
	exports.focusOnNode = focusOnNode;
	exports.closeNode = closeNode;
	exports.openNode = openNode;
	exports.getFirstChild = getFirstChild;
	exports.getParent = getParent;
	exports.getNextSibling = getNextSibling;
	exports.getPreviousSibling = getPreviousSibling;
	
	var _selectionUtils = __webpack_require__(36);
	
	/* used only internally */
	function getNextNodeInSequence(node, sequence) {
	  var returnNextOne = false;
	  return sequence.reduce(function (acc, val) {
	    if (acc) {
	      return acc;
	    }
	    if (returnNextOne) {
	      return val;
	    }
	    if (node === val) {
	      returnNextOne = true;
	    }
	  }, null) || node;
	}
	
	function getAllTreeNodes(id) {
	  return (0, _selectionUtils.queryAll)('[data-menu-id=\'' + id + '\']');
	}
	
	/* public API starts here */
	
	function hasChildren(node) {
	  return node.hasAttribute('aria-expanded');
	}
	
	function isOpen(node) {
	  return node.getAttribute('aria-expanded') === 'true';
	}
	
	function getRootNode(id) {
	  return document.querySelector('[data-menu-id=\'' + id + '\']');
	}
	
	function getVisibleNodes(id) {
	  var output = [getRootNode(id)];
	  var nodes = (0, _selectionUtils.queryAll)('[aria-expanded=\'true\'] + ul > li > [data-menu-id=\'' + id + '\']');
	  return output.concat(nodes);
	}
	
	function getPreviousVisibleNode(node) {
	  var id = node.getAttribute('data-menu-id');
	  var nodes = getVisibleNodes(id);
	
	  return getNextNodeInSequence(node, nodes.reverse()) || node;
	}
	
	function getNextVisibleNode(node) {
	  var id = node.getAttribute('data-menu-id');
	  var nodes = getVisibleNodes(id);
	  return getNextNodeInSequence(node, nodes) || node;
	}
	
	function focusOnNode(node) {
	  var id = node.getAttribute('data-menu-id');
	
	  getAllTreeNodes(id).forEach(function (item) {
	    item.setAttribute('tabindex', item === node ? '0' : '-1');
	  });
	
	  node.focus();
	  return node;
	}
	
	function closeNode(node) {
	  node.setAttribute('aria-expanded', 'false');
	  return node;
	}
	
	function openNode(node) {
	  node.setAttribute('aria-expanded', 'true');
	  return node;
	}
	
	function getFirstChild(node) {
	  return node.querySelector('[data-menu-id]') || node;
	}
	
	function getParent(node) {
	  var parent = document.getElementById(node.getAttribute('data-parent-id'));
	  return parent || node;
	}
	
	function getNextSibling(node) {
	  var parentid = node.getAttribute('data-parent-id');
	  var siblings = (0, _selectionUtils.queryAll)('[data-parent-id=' + parentid);
	  return getNextNodeInSequence(node, siblings);
	}
	
	function getPreviousSibling(node) {
	  var parentid = node.getAttribute('data-parent-id');
	  var siblings = (0, _selectionUtils.queryAll)('[data-parent-id=' + parentid);
	  return getNextNodeInSequence(node, siblings.reverse());
	}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = applyLogic;
	
	var _keyboardUtils = __webpack_require__(44);
	
	var KeyboardUtils = _interopRequireWildcard(_keyboardUtils);
	
	var _NodeUtils = __webpack_require__(96);
	
	var NodeUtils = _interopRequireWildcard(_NodeUtils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function applyLogic(node) {
	  KeyboardUtils.onElementCharacter(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    var character = String.fromCharCode(e.which).toUpperCase();
	    var nodes = NodeUtils.getVisibleNodes(node.getAttribute('data-menu-id'));
	
	    var thisFound = false;
	    var target = nodes.filter(function (item) {
	      // discard 'previous' nodes:
	      if (thisFound) {
	        return true;
	      }
	      if (item === node) {
	        thisFound = true;
	      }
	      return false;
	    }).reduce(function (acc, val) {
	      // grab next one starting with char
	      if (acc) {
	        return acc;
	      }
	      if (val.innerText.charAt(0).toUpperCase() === character) {
	        return val;
	      }
	    }, null);
	
	    if (target) {
	      NodeUtils.focusOnNode(target);
	    }
	  });
	
	  KeyboardUtils.onElementHome(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var target = NodeUtils.getRootNode(node.getAttribute('data-menu-id'));
	    NodeUtils.focusOnNode(target);
	  });
	
	  KeyboardUtils.onElementEnd(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var nodes = NodeUtils.getVisibleNodes(node.getAttribute('data-menu-id'));
	    var target = nodes.reverse()[0];
	    NodeUtils.focusOnNode(target);
	  });
	
	  KeyboardUtils.onElementDown(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var next = NodeUtils.getNextVisibleNode(node);
	    NodeUtils.focusOnNode(next);
	  });
	
	  KeyboardUtils.onElementUp(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var sibling = NodeUtils.getPreviousVisibleNode(node);
	    NodeUtils.focusOnNode(sibling);
	  });
	
	  KeyboardUtils.onElementRight(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (NodeUtils.hasChildren(node) && !NodeUtils.isOpen(node)) {
	      NodeUtils.openNode(node);
	    } else {
	      var child = NodeUtils.getFirstChild(node);
	      NodeUtils.focusOnNode(child);
	    }
	  });
	
	  KeyboardUtils.onElementLeft(node, function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	
	    if (!NodeUtils.hasChildren(node) || !NodeUtils.isOpen(node)) {
	      var parent = NodeUtils.getParent(node);
	      NodeUtils.focusOnNode(parent);
	
	      return parent;
	    }
	
	    return NodeUtils.closeNode(node);
	  });
	}

/***/ },
/* 98 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiZmZiZTAzMzljZTBjYzQ5NDY0YiIsIndlYnBhY2s6Ly8vLi9saWJyYXJ5RW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hbGVydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9nL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9fdXRpbHMvZm9jdXNVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX3V0aWxzL3NlbGVjdGlvblV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9fdXRpbHMvY29sbGVjdGlvblV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2cvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL191dGlscy9ndWlkVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZy9jb21wb25lbnRzL2NvbnRlbnRBcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2cvY29tcG9uZW50cy9idXR0b25CYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZy9jb21wb25lbnRzL2xpZ2h0Ym94U2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy90b29sdGlwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9fdXRpbHMva2V5Ym9hcmRVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX3V0aWxzL25vY2xvYmJlclV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy90b29sdGlwRGlhbG9nL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saW5rL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrYm94L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9fdXRpbHMvY29udGFpbmVyVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhZGlvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90cmVlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90cmVlL05vZGVVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlZS9zZWxlY3Rpb25Nb2Rlcy9ub1NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlZS9zZWxlY3Rpb25Nb2Rlcy9zaW5nbGVTZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyZWUvc2VsZWN0aW9uTW9kZXMvbXVsdGlTZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvbmF2aWdhdGlvbkxvZ2ljLmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51L21lbnVJdGVtVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvbmF2aWdhdGlvbi92ZXJ0aWNhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9uYXZpZ2F0aW9uL2hvcml6b250YWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvYnVpbGRNZW51SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9pdGVtRmFjdG9yaWVzL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvaXRlbUZhY3Rvcmllcy9zdWJtZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51L2l0ZW1GYWN0b3JpZXMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUvaXRlbUZhY3Rvcmllcy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9pdGVtRmFjdG9yaWVzL3NlcGFyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbXVsdGlyYW5nZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tdWx0aXJhbmdlL3RodW1iLmpzIiwid2VicGFjazovLy8uL3NyYy9hdXRvY29tcGxldGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1dG9jb21wbGV0ZS91dGlscy9kYXRhVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9hdXRvY29tcGxldGUvdXRpbHMvZm9ybWF0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hdXRvY29tcGxldGUvdXRpbHMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFicGFuZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYnBhbmVsL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFicGFuZWwvYnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX3V0aWxzL3RhYnN0b3BVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFicGFuZWwvY2Fyb3VzZWxDb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3Jlc3NCYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4cGFuZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9leHBhbmRlci9pc0RldGFpbHNTdXBwb3J0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4cGFuZGVyL2lzSU9TLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtVmFsaWRhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybVZhbGlkYXRpb24vdmFsaWRhdG9ycy9kZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtVmFsaWRhdGlvbi92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtVmFsaWRhdGlvbi9iZWhhdmlvci9wYXNzd29yZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybVZhbGlkYXRpb24vY29tcG9uZW50cy9wYXNzd29yZEV2YWx1YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL191dGlscy9mb3JtVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1WYWxpZGF0aW9uL2JlaGF2aW9yL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1WYWxpZGF0aW9uL2NvbXBvbmVudHMvY2hhcnNSZW1haW5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1WYWxpZGF0aW9uL2NvbXBvbmVudHMvZmVlZGJhY2tBcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9zb3J0YWJsZVRhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb2xsYXBzaW5nVGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hpZXJhcmNoaWNhbE1lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hpZXJhcmNoaWNhbE1lbnUvTm9kZVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9oaWVyYXJjaGljYWxNZW51L2JlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5sZXNzIl0sIm5hbWVzIjpbImNvbnRlbnQiLCJjcmVhdGVBbGVydCIsImNyZWF0ZUF1dG9jb21wbGV0ZSIsImNyZWF0ZURpYWxvZyIsImNyZWF0ZUV4cGFuZGVyIiwiY3JlYXRlVG9vbHRpcCIsImNyZWF0ZURpYWxvZ1Rvb2x0aXAiLCJpbml0aWFsaXplTGluayIsImJ1dHRvbiIsImNoZWNrYm94IiwiY3JlYXRlUmFkaW9Hcm91cCIsImNyZWF0ZVRyZWUiLCJjcmVhdGVNZW51IiwiY3JlYXRlU2xpZGVyIiwiY3JlYXRlVGFicGFuZWwiLCJjcmVhdGVQcm9ncmVzc0JhciIsImNvbmZpZ3VyZUZvcm1WYWxpZGF0aW9uIiwidGFibGVzIiwiY3JlYXRlTXVsdGlyYW5nZSIsImNyZWF0ZUhpZXJhcmNoaWNhbE1lbnUiLCJjb2xsYXBzaW5nVGFibGUiLCJFbGVtZW50IiwicHJvdG90eXBlIiwicmVtb3ZlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlU29ydGFibGVUYWJsZSIsIm1ha2VUYWJsZVJlc3BvbnNpdmUiLCJtZXNzYWdlIiwiY2xhc3NlcyIsInRpbWVvdXQiLCJvdXRwdXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwiYWRkIiwiYyIsImlubmVySFRNTCIsInNldFRpbWVvdXQiLCJwYXJlbnRFbGVtZW50IiwiaWQiLCJzY3JlZW4iLCJhbGVydCIsImdldEVsZW1lbnRCeUlkIiwieEJ1dHRvbiIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiZGVmYXVsdENsYXNzTGlzdCIsImkiLCJsZW5ndGgiLCJwdXNoIiwic2V0SW5pdGlhbEZvY3VzIiwiY29uZmlnIiwiaXNBbGVydCIsInRhcmdldCIsImNvbnRhaW5zIiwiZm9jdXMiLCJpc0RldGFpbCIsImJ1dHRvbkJhciIsImdldEZpcnN0QnV0dG9uIiwicmVzZXQiLCJjbGVhckNsYXNzZXMiLCJjbGVhcktleUhhbmRsZXJzIiwiaGVhZGVyIiwiZGVhY3RpdmF0ZSIsImNsZWFyIiwiY3VycmVudENvbmZpZyIsImFkZENsYXNzZXMiLCJpdGVtIiwidG9SZW1vdmUiLCJzZXRSb2xlIiwicm9sZSIsImhpZGVDbG9zZUJ1dHRvbiIsInNob3dDbG9zZUJ1dHRvbiIsInNldFRpdGxlIiwidGV4dCIsInNob3ciLCJhY3RpdmF0ZSIsImluc2VydEJlZm9yZSIsInJlbW92ZUF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVFc2NhcGUiLCJlc2NhcGVIYW5kbGVyIiwiZGVzY3JpYmVkYnkiLCJsaWZlY3ljbGUiLCJwcmVPcGVuIiwid3JhcHBlcklEIiwidGl0bGUiLCJzaG93SGVhZGVyIiwiaW5pdGlhbGl6ZSIsImJ1dHRvbnMiLCJoaWRlIiwic2V0S2V5SGFuZGxlcnMiLCJyZW5kZXIiLCJkZXNjcmlwdGlvbiIsImRlc2NfYm94IiwiaW5uZXJUZXh0IiwiY2hpbGRyZW4iLCJib2R5IiwicG9zdE9wZW4iLCJwcmVDbG9zZSIsImhhc0F0dHJpYnV0ZSIsInBvc3RIaWRlIiwicG9zdENsb3NlIiwicmV0dXJuRm9jdXNUbyIsInJlZHVjZSIsImFjYyIsInZhbCIsImtleVVwSGFuZGxlciIsImUiLCJ3aGljaCIsInN0b3BQcm9wYWdhdGlvbiIsInRyaWdnZXJFbGVtZW50IiwiZ2V0Rmlyc3RGb2N1c2FibGVDaGlsZCIsImdldE5leHRGb2N1c2FibGVDaGlsZCIsImdldExhc3RGb2N1c2FibGVDaGlsZCIsImluaXRUYWJUcmFwIiwiZm9jdXNhYmxlUXVlcnkiLCJlbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImN1cnJlbnQiLCJhbGwiLCJ0YXJnZXRSZXR1cm5JbmRleCIsImluZGV4T2YiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlVHJhcCIsInRyYXAiLCJhcHBseVRyYXBzIiwiZmlyc3RUcmFwIiwibGFzdFRyYXAiLCJmaXJzdENoaWxkIiwicXVlcnlBbGwiLCJzZWxlY3RvciIsImNvbnRleHQiLCJ0b0FycmF5IiwiYXJyYXlsaWtlIiwiQXJyYXkiLCJzbGljZSIsImNhbGwiLCJjcmVhdGVIZWFkZXIiLCJpc0FjdGl2ZSIsImJpbmQiLCJnZW5lcmF0ZUd1aWQiLCJTNCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImNyZWF0ZUNvbnRlbnRBcmVhIiwicmVuZGVyQ29udGVudCIsImNvbnRlbnRBcmVhIiwic3Vic3RyIiwicCIsImNsZWFyQ29udGVudCIsImNvbnRlbnRJRCIsImNyZWF0ZUJ1dHRvbkJhciIsImdldExhc3RCdXR0b24iLCJjbGVhckJ1dHRvbnMiLCJpbml0aWFsaXplQnV0dG9uQmFyIiwiZm9ybWF0QnV0dG9ucyIsImluZGV4Iiwic3BhY2UiLCJtYXAiLCJidXR0b25Db25maWciLCJtYXJrdXAiLCJ3cmFwcGVyIiwibGFiZWwiLCJoYW5kbGVyIiwiY3JlYXRlU2NyZWVuIiwiY2xlYXJTY3JlZW4iLCJzaG93U2NyZWVuIiwidHJpZ2dlciIsInRpcFRleHQiLCJnZXRBdHRyaWJ1dGUiLCJ0aXBJRCIsInRpcCIsImNhdXNlcyIsIklOSVRJQUwiLCJGT0NVUyIsIk1PVVNFIiwiRVNDQVBFIiwiY3VycmVudENhdXNlIiwic2hvd1RpcCIsImNhdXNlIiwiaGlkZVRpcCIsImNhbmNlbEVsZW1lbnRFc2NhcGUiLCJmb2N1c0hhbmRsZXIiLCJibHVySGFuZGxlciIsIm92ZXJIYW5kbGVyIiwib3V0SGFuZGxlciIsImRpc2FibGVUb29sdGlwIiwiZXJyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uRWxlbWVudEVudGVyIiwib25FbGVtZW50RXNjYXBlIiwib25FbGVtZW50U3BhY2UiLCJvbkVsZW1lbnRMZWZ0Iiwib25FbGVtZW50UmlnaHQiLCJvbkVsZW1lbnRVcCIsIm9uRWxlbWVudERvd24iLCJvbkVsZW1lbnRIb21lIiwib25FbGVtZW50RW5kIiwib25FbGVtZW50UGFnZVVwIiwib25FbGVtZW50UGFnZURvd24iLCJvbkVsZW1lbnRGMTAiLCJpc0FscGhhTnVtZXJpYyIsIm9uRWxlbWVudENoYXJhY3RlciIsInRyYXBFbnRlciIsIktFWVMiLCJCQUNLU1BBQ0UiLCJUQUIiLCJFTlRFUiIsIlNISUZUIiwiQ1RSTCIsIkFMVCIsIlNQQUNFIiwiTEVGVCIsIlJJR0hUIiwiVVAiLCJET1dOIiwiRjEwIiwiSE9NRSIsIkVORCIsIlBBR0VfVVAiLCJQQUdFX0RPV04iLCJiaW5kRWxlbWVudFRvRXZlbnRWYWx1ZSIsImV2ZW50TmFtZSIsInRlc3RWYWx1ZSIsImxvY2FsSGFuZGxlciIsImJpbmRFbGVtZW50VG9LZXlwcmVzc1ZhbHVlIiwiYmluZEVsZW1lbnRUb0tleWRvd25WYWx1ZSIsImNoYXJDb2RlIiwicHJldmVudERlZmF1bHQiLCJub0Nsb2JiZXIiLCJ3aGl0ZXNwYWNlIiwiYXR0ciIsImlkcyIsImpvaW4iLCJwYXJ0cyIsInRyaW0iLCJzcGxpdCIsInN1Ym1pdElEIiwiY2FuY2VsSUQiLCJvbkNhbmNlbCIsIm9uU3VibWl0Iiwib25PcGVuIiwicG9zaXRpb24iLCJnZXRUaXBQb3NpdGlvbiIsInN1Ym1pdEJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsInN1Ym1pdCIsImNhbmNlbCIsInJldHVybkZvY3VzIiwiY2FuY2VsQm9keUxpc3RlbmVyIiwidHJpZ2dlckJvdW5kcyIsImdldENsaWVudFJlY3RzIiwidGlwQm91bmRzIiwibGVmdCIsIndpZHRoIiwidG9wIiwiaGVpZ2h0IiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwidGFyZ2V0VVJMIiwibmF2aWdhdGVUb0xpbmsiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzaGlmdEtleSIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImNyZWF0ZUV2ZW50IiwiZXYiLCJpbml0RXZlbnQiLCJmaXJlRXZlbnQiLCJpbml0aWFsaXplQnV0dG9uIiwiaW5pdGlhbGl6ZVRvZ2dsZUJ1dHRvbiIsImJpbmRFbGVtZW50VG9JbnB1dHMiLCJiZWhhdmlvciIsInRvVXBwZXJDYXNlIiwiYXNzaWduUm9sZUlmTmVjZXNzYXJ5IiwiaW5pdGlhbGl6ZUljb24iLCJpY29uIiwidG9nZ2xlRnVuY3Rpb24iLCJpbml0aWFsU3RhdGUiLCJFcnJvciIsInRvZ2dsZSIsInRvZ2dsZWRPbiIsImlzVG9nZ2xlZE9uIiwidG9nZ2xlT24iLCJ0b2dnbGVPZmYiLCJ0b2dnbGVNaXhlZCIsImNyZWF0ZVNpbmdsZUNoZWNrYm94IiwiY3JlYXRlQ2hlY2tib3hHcm91cCIsImlzQ2hlY2tlZCIsIm9uQ2hhbmdlIiwic3BhbklEIiwiaW5kaWNhdG9yIiwic3BhbiIsImNoYW5nZUhhbmRsZXIiLCJicm9hZGNhc3RDaGFuZ2UiLCJpdGVtcyIsImdyb3VwTGFiZWwiLCJ1c2VIVE1MNSIsInJvb3RJdGVtIiwicm9vdENsaWNrZWQiLCJnZXRDb3JyZWN0Um9vdFN0YXRlIiwic2V0Q29ycmVjdFJvb3RTdGF0ZSIsInJvb3RDbGlja0hhbmRsZXJzIiwicm9vdFN0YXRlIiwiZXZlcnkiLCJsZWFmQ2xpY2tIYW5kbGVycyIsImdyb3VwIiwiZWxlbWVudElzQ2hpbGRPZkVsZW1lbnQiLCJjcmVhdGVGaWVsZHNldCIsImNyZWF0ZUxpdmVSZWdpb24iLCJjaGlsZCIsInBvdGVudGlhbFBhcmVudCIsImZpZWxkc2V0IiwibGVnZW5kIiwibGV2ZWwiLCJub3RpZnkiLCJsZWdlbmRJRCIsImN1cnJlbnRGb2N1cyIsImhhbmRsZUZvY3VzIiwicGFyc2VJbnQiLCJoYW5kbGVLZXlkb3duIiwia2V5IiwiZm9jdXNOZXh0IiwiZm9jdXNQcmV2Iiwic2V0VW5pcXVlVG9nZ2xlIiwiYiIsImNsaWNrIiwiYmVoYXZpb3JzIiwiZGVmYXVsdCIsInNpbmdsZSIsIm11bHRpIiwibm9kZUJ1aWxkZXJzIiwibGluayIsIm5vZGUiLCJ1cmwiLCJjcmVhdGVOb2RlIiwiYnVpbGRlciIsInR5cGUiLCJjcmVhdGVJbmRpY2F0b3IiLCJtYXBEYXRhVG9FbGVtZW50IiwidHJlZUlEIiwibGkiLCJzZWxlY3RTdHlsZSIsInVsIiwiZGF0YSIsInJvb3RJRCIsImhvbGRlciIsInRyZWVSb290IiwiaW5pdGlhbE5vZGUiLCJoYXNDaGlsZHJlbiIsImlzT3BlbiIsImdldFJvb3ROb2RlIiwiZ2V0VmlzaWJsZU5vZGVzIiwiZ2V0UHJldmlvdXNWaXNpYmxlTm9kZSIsImdldE5leHRWaXNpYmxlTm9kZSIsImZvY3VzT25Ob2RlIiwiY2xvc2VOb2RlIiwib3Blbk5vZGUiLCJnZXRGaXJzdENoaWxkIiwiZ2V0UGFyZW50IiwiZ2V0TmV4dFNpYmxpbmciLCJnZXRQcmV2aW91c1NpYmxpbmciLCJzZWxlY3ROb2RlIiwiYWRkTm9kZVRvU2VsZWN0aW9uIiwiaXNTZWxlY3RlZCIsInRvZ2dsZU5vZGVTZWxlY3Rpb24iLCJnZXROZXh0Tm9kZUluU2VxdWVuY2UiLCJzZXF1ZW5jZSIsInJldHVybk5leHRPbmUiLCJnZXRBbGxUcmVlTm9kZXMiLCJub2RlcyIsImNvbmNhdCIsInJldmVyc2UiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwcmV2aW91c1NpYmxpbmciLCJtdWx0aW1vZGUiLCJhcHBseUxvZ2ljIiwiS2V5Ym9hcmRVdGlscyIsIk5vZGVVdGlscyIsImFjdGl2YXRlYWJsZSIsIk1vdXNlRXZlbnQiLCJjaGFyYWN0ZXIiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJ0aGlzRm91bmQiLCJmaWx0ZXIiLCJjaGFyQXQiLCJzaWJsaW5nIiwicGFyZW50IiwiY3RybEtleSIsInNldE9yaWVudGF0aW9uIiwibWVudSIsIm9yaWVudGF0aW9uIiwiY29udGFpbmVyIiwiY3VycmVudFJhZGlvR3JvdXAiLCJjdXJyZW50Q2hlY2tib3hHcm91cCIsIml0ZW1Sb2xlIiwiZGF0YUdyb3VwIiwiZ3JvdXBOYW1lIiwiYXBwbHlOYXZpZ2F0aW9uTG9naWMiLCJrYiIsIm11IiwidmVydGljYWwiLCJob3Jpem9udGFsIiwia2V5SGFuZGxlcnMiLCJnZXRMYXRlc3RQYXJlbnRJdGVtIiwid3JhcCIsInNldEZvY3VzIiwidXAiLCJkb3duIiwicmlnaHQiLCJob21lIiwiZW5kIiwiY2hhciIsImZpbmlzaEludGVyYWN0aW9uIiwiZ2V0TWVudUZyb21JdGVtIiwiZ2V0QWxsSXRlbXNJbk1lbnUiLCJvcGVuU3VibWVudSIsImNsb3NlU3VibWVudSIsImdldEZpcnN0U2libGluZyIsImdldExhc3RTaWJsaW5nIiwiZ2V0Rmlyc3RNZW51SXRlbSIsImdldExhc3RNZW51SXRlbSIsImdldFByZXZpb3VzU2libGluZ1doZXJlIiwiZ2V0TmV4dFNpYmxpbmdXaGVyZSIsIm1lbnVpdGVtIiwicGFyZW50SXRlbSIsIm5ld1BhcmVudCIsIm1heWJlUGFyZW50IiwicmVzdWx0Iiwicm9vdE1lbnUiLCJhbGxNZW51SXRlbXMiLCJpc1BhcmVudCIsInBhcmVudENhbmRpZGF0ZSIsInByZXYiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dCIsInBhcmVudE1lbnUiLCJjaGlsZHJlbk9mUGFyZW50IiwicHJlZGljYXRlIiwid3JhcHMiLCJhdW50IiwidW5jbGUiLCJsZXR0ZXIiLCJ0ZXh0Q29udGVudCIsImJ1aWxkTWVudUl0ZW0iLCJpdGVtRmFjdG9yeSIsInN1Ym1lbnVGYWN0b3J5IiwicmFkaW9GYWN0b3J5IiwiY2hlY2tib3hGYWN0b3J5Iiwic2VwYXJhdG9yRmFjdG9yeSIsImJ1aWxkZXJzIiwiYnVpbGQiLCJzZXBhcmF0b3IiLCJyYWRpbyIsInN1Ym1lbnUiLCJkaXNhYmxlZCIsImJvdW5kQWN0aW9uSGFuZGxlciIsImJvdW5kQWN0aXZhdGlvbiIsInF1ZXJ5IiwicmFkaW9Hcm91cE1lbWJlcnMiLCJjaGVja2VkIiwibmFtZSIsInJhZGlvR3JvdXAiLCJ3YXNDaGVja2VkIiwidGh1bWJzIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsInBpeGVscyIsImlzTmFOIiwidCIsInN0ZXBTaXplIiwibGFiZWxGcm9tVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJzbGlkZXIiLCJtaW5WYWx1ZUlucHV0IiwibWF4VmFsdWVJbnB1dCIsIm1pbkxhYmVsIiwibWF4TGFiZWwiLCJzdHlsZSIsImJpbmRJbnB1dFRvVGh1bWIiLCJpbnB1dCIsInRodW1iIiwibWluIiwibWF4IiwidXBkYXRlVGh1bWIiLCJ2YWx1ZSIsInRleHRQYXJzZXIiLCJwYXJzZUZsb2F0Iiwic2V0VmFsdWUiLCJ1cGRhdGVUZXh0SW5wdXQiLCJ2IiwiaXNBcnJheSIsInNob3VsZFNldE9yaWVudCIsImlzSUUiLCJkb2N1bWVudE1vZGUiLCJpc0VkZ2UiLCJTdHlsZU1lZGlhIiwiaXNGaXJlZm94IiwiSW5zdGFsbFRyaWdnZXIiLCJjcmVhdGVUaHVtYkNvbnRyb2wiLCJhZGp1c3RBcHBlYXJhbmNlIiwidmFsdWVUZXh0Iiwic2V0VmFsdWVBdHRyaWJ1dGVzIiwiZXJyb3IiLCJpbml0Q3VzdG9tRXZlbnQiLCJyYW5nZSIsImdldFBlcmNlbnRhZ2UiLCJub3JtYWxpemVkVmFsdWUiLCJwZXJjZW50Iiwibm9ybWFsaXplIiwibG93IiwiZmxvb3IiLCJoaWdoIiwiY2VpbCIsImxvd0RlbHRhIiwiaGlnaERlbHRhIiwiYWJzIiwiYWRqdXN0VmFsdWUiLCJwaXhlbFBvc2l0aW9uIiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsIm9mZnNldCIsImJvdHRvbSIsImFwcGx5RGVsdGEiLCJkZWx0YSIsInN0YXJ0RHJhZyIsIm9uRHJhZyIsInN0b3BEcmFnIiwiZ2V0UG9pbnQiLCJ4IiwiY2xpZW50WCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJjbGllbnRZIiwidGFyZ2V0VmFsdWUiLCJmaW5hbFZhbHVlIiwibmF2IiwiaGludElkIiwiaGludHMiLCJsaXZlIiwibm90aWZpY2F0aW9uVGltZW91dCIsImltbWVkaWF0ZU5vdGlmaWNhdGlvbiIsImhpZ2hsaWdodCIsInByZXBhcmVOb3RpZmljYXRpb24iLCJjbGVhclRpbWVvdXQiLCJmaWx0ZXJlZE9wdGlvbnMiLCJzaG93T3B0aW9ucyIsInJlbmRlck9wdGlvbnMiLCJhbHRLZXkiLCJoaWdobGlnaHRQcmV2IiwiaGlnaGxpZ2h0ZWQiLCJoaWdobGlnaHROZXh0IiwiY29uZmlybVZhbHVlIiwiY2xlYXJMaXN0IiwiY2xpY2tUYXJnZXQiLCJmb2N1c1RhcmdldCIsImdldElucHV0RWxlbWVudCIsImxpc3QiLCJvcHRpb25zIiwiZmlyc3RJdGVtIiwicHJvbXB0Iiwic3RyIiwiY2xlYXJOb3RpZmljYXRpb25UaW1lb3V0IiwidmFsaWRhdGVEYXRhIiwiaXNTdHJpbmciLCJpc1ZhbGlkT2JqZWN0IiwiY3JlYXRlSGludCIsIndyYXBJdGVtIiwid3JhcFN0cmluZyIsIiRpdGVtIiwic3RyaW5nIiwic2V0SGlnaGxpZ2h0IiwiYWxsSXRlbXMiLCJ0YWJsaXN0IiwiZWxlbWVudHMiLCJ0YWJJRCIsInRhYiIsImNyZWF0ZVRhYiIsInBhbmVsIiwiY3JlYXRlUGFuZWwiLCJ0YWJzIiwiYXV0b3BsYXlDb250cm9scyIsImF1dG9wbGF5IiwiYXV0b3BsYXlDb25maWciLCJvblBsYXkiLCJvblBhdXNlIiwib25OZXh0Iiwic2VsZWN0VGFiIiwiZ2V0TmV4dCIsImdldEN1cnJlbnRUYWIiLCJvblByZXZpb3VzIiwiZ2V0UHJldiIsImF1dG9zZWxlY3QiLCJ0YWJzdG9wQ29uZmlnIiwib25TcGFjZSIsIm9uQ2xpY2siLCJzZWxlY3QiLCJ1c2VBcmlhU2VsZWN0ZWQiLCJvblVwIiwicGF1c2UiLCJvbkRvd24iLCJvbkxlZnQiLCJvblJpZ2h0IiwidmFsaWRhdGVJbnB1dCIsImNyZWF0ZVNpbmdsZVRhYnN0b3BTdHJ1Y3R1cmUiLCJvbkZvY3VzIiwib25Ib21lIiwib25FbmQiLCJvblBhZ2VVcCIsIm9uUGFnZURvd24iLCJvbkNoYXJhY3RlciIsImJ1aWxkQ2Fyb3VzZWxDb250cm9scyIsImNyZWF0ZUJ1dHRvbiIsImR1cmF0aW9uIiwiY2xhc3NOYW1lIiwicHJldkJ1dHRvbiIsInBsYXlCdXR0b24iLCJwYXVzZUJ1dHRvbiIsIm5leHRCdXR0b24iLCJwbGF5SW50ZXJ2YWwiLCJzdGFydFBsYXlpbmciLCJzdG9wUGxheWluZyIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInN0YXJ0IiwiYm91bmRlZCIsInVuYm91bmRNZXNzYWdlIiwiZm9yY2VIVE1MNCIsImh0bWw1VmVyc2lvbiIsImh0bWw0VmVyc2lvbiIsInN1bW1hcnkiLCJleHBhbmRlZENvbnRlbnQiLCJzZXRPcGVuU3RhdHVzIiwiaGVhZGVyVGV4dCIsImNsZWFyRml4IiwiaXNEZXRhaWxzU3VwcG9ydGVkIiwiZWwiLCJkaWZmIiwib2Zmc2V0SGVpZ2h0Iiwib3BlbiIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJNU1N0cmVhbSIsImRlZmF1bHRWYWxpZGF0b3JzIiwiRkVFREJBQ0tfVFlQRVMiLCJUT1AiLCJJTkxJTkUiLCJmb3JtIiwiZmVlZGJhY2tUeXBlIiwiZmVlZGJhY2tBcmVhIiwicGFzc3dvcmRJbnB1dHMiLCJwYXNzd29yZEV2YWx1YXRvciIsImxvZ05vdGlmaWNhdGlvbiIsIm1heGNoYXJzSW5wdXRzIiwidmFsaWRhdG9ycyIsIm5vdGlmeVN1Y2Nlc3MiLCJub3RpZnlGYWlsdXJlIiwiZXJyb3JzIiwibSIsImlucHV0cyIsInZhbGlkYXRlIiwidmFsaWRhdGVkIiwiaW52YWxpZElucHV0cyIsImNsZWFyVG9vbHRpcHMiLCJpbml0VG9vbHRpcHMiLCJjYW5jZWxUb29sdGlwIiwicmVxdWlyZWQiLCJtYXhDaGFycyIsImlzRW1haWwiLCJwYXR0ZXJuIiwiaXNOdW1lcmljIiwicGFzc3dvcmRTdHJlbmd0aCIsImVycm9yTWVzc2FnZSIsInRocmVzaG9sZCIsInJlZ0V4cCIsIlJlZ0V4cCIsInF1YWxpdHlNZXRlcklkIiwicXVhbGl0eU1ldGVyIiwicXVhbGl0eSIsImdldFZhbGlkYXRpb25GdW5jdGlvbiIsImdldFZhbGlkYXRpb25FcnJvcnMiLCJ2YWxpZGF0b3JOYW1lIiwiZiIsImZ1bmNzIiwiYXBwZW5kVG9vbHRpcHMiLCJzcGVjaWZpZXIiLCJhdHRyaWJ1dGVzIiwiYSIsInR0Iiwid2lyZXVwUGFzc3dvcmRFdmFsdWF0b3IiLCJldmFsdWF0b3IiLCJyYXRpbmdzIiwicXVldWVOb3RpZmljYXRpb24iLCJzY29yZSIsInNlbmROb3RpZmljYXRpb24iLCJyYXRpbmciLCJwYXNzd29yZEV2YWx1YXRpb24iLCJ1cGRhdGUiLCJpbml0aWFsU2NvcmUiLCJjcmVhdGVQYXNzd29yZEV2YWx1YXRpb24iLCJjcmVhdGVMZXZlbEluZGljYXRvciIsImxldmVsMCIsImxldmVsMSIsImxldmVsMiIsImxldmVsMyIsImxldmVsNCIsImxldmVsSW5kaWNhdG9ycyIsImVtcHR5SW50ZXJ2YWwiLCJnZXRMYWJlbCIsImxhYmVsRWxlbWVudCIsIndpcmV1cE1heExlbmd0aE5vdGlmaWNhdGlvbnMiLCJjaGFyQ291bnQiLCJyZW1haW5pbmciLCJmZWVkYmFjayIsInBvc3RVcGRhdGUiLCJjcmVhdGVDaGFyc1JlbWFpbmluZyIsIm5ld1RleHQiLCJjcmVhdGVGZWVkYmFja0FyZWEiLCJjbGVhcklEIiwiZXhpc3RpbmciLCJjYXB0aW9uIiwiaGVhZGVycyIsInJvd3MiLCJjYXB0aW9uRWxlbWVudCIsImxpdmVSZWdpb24iLCJzb3J0T3JkZXIiLCJzb3J0RGlyZWN0aW9uIiwiZ2V0U29ydEhlYWRlciIsImhlYWRlclJvdyIsImdldFNvcnRMYWJlbCIsImdldFNvcnREaXJlY3Rpb24iLCJnZXRTb3J0SW5mbyIsInJlbmRlclNvcnRpbmciLCJ1cGRhdGVDYXB0aW9uIiwidXBkYXRlQXJpYVNvcnQiLCJ1cGRhdGVMaXZlUmVnaW9uIiwiZGlyZWN0aW9uIiwiY2FwdGlvblRleHQiLCJpc1ZhbGlkIiwicm93IiwiaGVhZCIsImhlYWRlckNlbGwiLCJjcmVhdGVIZWFkZXJDZWxsIiwic29ydEJ5SW5kZXgiLCJyZW5kZXJEYXRhIiwidG9IVE1MIiwic29ydCIsImFWYWwiLCJiVmFsIiwiZmlyc3RPbmUiLCJjb2xsYXBzZVRhYmxlVG9MaXN0IiwiZ2V0VGFibGVOYW1lIiwidGFibGUiLCJsYWJlbERldGFpbHMiLCJpbmZsZWN0aW9uUG9pbnQiLCJyZXNpemVUaW1lb3V0IiwicmVzaXplVGhyb3R0bGVyIiwiaGFuZGxlUmVzcG9uc2l2ZUxvZ2ljIiwiaW5uZXJXaWR0aCIsInJlbmRlckFzTGlzdCIsInJlbmRlckFzVGFibGUiLCJub3RpZmljYXRpb25SZWdpb24iLCJ0YWJsZVBhcmVudCIsImZvY3VzSUQiLCJhY3RpdmVFbGVtZW50IiwibGFiZWxDb2x1bW5zIiwibGFiZWxGdW5jdGlvbiIsImxhYmVsRGF0YSIsImFwcGx5Iiwib3V0ZXJIVE1MIiwic3VibGlzdCIsImNlbGwiLCJjb250ZW50Q29sdW1ucyIsImxhYmVsU3BhbiIsImRhdHVtIiwibnUiLCJjcmVhdGVCcmFuY2giLCJyb290X2lkIiwicGFyZW50X2lkIiwiY2hpbGROb2RlcyIsImNyZWF0ZUxlYWYiLCJtZW51Um9vdCIsInBhcmVudGlkIiwic2libGluZ3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7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QUFFRSxlQUFGOztBQUVBLFNBQUksQ0FBQ2lSLFVBQVU3QixXQUFWLENBQXNCaEIsSUFBdEIsQ0FBRCxJQUFnQyxDQUFDNkMsVUFBVTVCLE1BQVYsQ0FBaUJqQixJQUFqQixDQUFyQyxFQUE2RDtBQUMzRCxXQUFJdUQsU0FBU1YsVUFBVW5CLFNBQVYsQ0FBb0IxQixJQUFwQixDQUFiO0FBQ0E2QyxpQkFBVXZCLFdBQVYsQ0FBc0JpQyxNQUF0Qjs7QUFFQSxjQUFPQSxNQUFQO0FBQ0Q7O0FBRUQsWUFBT1YsVUFBVXRCLFNBQVYsQ0FBb0J2QixJQUFwQixDQUFQO0FBQ0QsSUFaRDtBQWFELEU7Ozs7OztBQ2xGRCwwQyIsImZpbGUiOiJkZXF1ZS13aWRnZXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkZXF1ZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkZXF1ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkZXF1ZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiZmZiZTAzMzljZTBjYzQ5NDY0YiIsImltcG9ydCAqIGFzIGNvbnRlbnQgZnJvbSAnLi9zcmMvaW5kZXguanMnO1xuaW1wb3J0ICcuL3NyYy9pbmRleC5sZXNzJztcblxuLy8gc28sIHRoaXMgaXMgYSBiaWcgcGFpbiBpbiB0aGUgYnV0dCwgYnV0IHdlIG5lZWQgYSBzZXBhcmF0ZSBlbnRyeVxuLy8gZm9yIHRoZSBkcm9wLWluIGxpYnJhcnkgKHdlYnBhY2stY29tcGlsZWQgc3R1ZmYgaW4gb3V0cHV0Lylcbi8vIGFuZCBmb3IgdGhlIG1vZHVsZSBsaWJyYXJ5IChiYWJlbC1jb21waWxlZCBzdHVmZiBpbiBsaWIvKVxuLy8gYmVjYXVzZSBvZiB0aGUgd2F5IHRoZSBDU1Mgd29ya3MuXG5cbi8vIHdlYnBhY2sgd2FudHMgdXMgdG8gaW1wb3J0IHRoZSBMRVNTIGludG8gb3VyIGphdmFzY3JpcHQsIGFzIHdlXG4vLyBkbyBhYm92ZSAtIGJ1dCBpZiB3ZSBkbyB0aGlzIGluIGJhYmVsLCBpdCBjcmFwcyBvdXQgaW4gYW55XG4vLyBwcm9qZWN0IGltcG9ydGluZyBpdCwgc2luY2UgdGhlIExFU1MgZmlsZSBpcyBubyBsb25nZXIgYXZhaWxhYmxlLlxuXG4vLyBzbyB0aGlzIGZpbGUgaXMgYW4gYWRkaXRpb25hbCBhYnN0cmFjdGlvbiB0aGF0J3MgaGVyZSB0byBhbGxvd1xuLy8gd2VicGFjayB0byBpbmNsdWRlIHdoYXQgaXQgbmVlZHMgd2l0aG91dCBjb3JydXB0aW5nIHRoZSBtb2R1bGFyXG4vLyBsaWJyYXJ5IGJ1aWxkLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFsZXJ0ID0gY29udGVudC5jcmVhdGVBbGVydDtcbmV4cG9ydCBjb25zdCBjcmVhdGVBdXRvY29tcGxldGUgPSBjb250ZW50LmNyZWF0ZUF1dG9jb21wbGV0ZTtcbmV4cG9ydCBjb25zdCBjcmVhdGVEaWFsb2cgPSBjb250ZW50LmNyZWF0ZURpYWxvZztcbmV4cG9ydCBjb25zdCBjcmVhdGVFeHBhbmRlciA9IGNvbnRlbnQuY3JlYXRlRXhwYW5kZXI7XG5leHBvcnQgY29uc3QgY3JlYXRlVG9vbHRpcCA9IGNvbnRlbnQuY3JlYXRlVG9vbHRpcDtcbmV4cG9ydCBjb25zdCBjcmVhdGVEaWFsb2dUb29sdGlwID0gY29udGVudC5jcmVhdGVEaWFsb2dUb29sdGlwO1xuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVMaW5rID0gY29udGVudC5pbml0aWFsaXplTGluaztcbmV4cG9ydCBjb25zdCBidXR0b24gPSBjb250ZW50LmJ1dHRvbjtcbmV4cG9ydCBjb25zdCBjaGVja2JveCA9IGNvbnRlbnQuY2hlY2tib3g7XG5leHBvcnQgY29uc3QgY3JlYXRlUmFkaW9Hcm91cCA9IGNvbnRlbnQuY3JlYXRlUmFkaW9Hcm91cDtcbmV4cG9ydCBjb25zdCBjcmVhdGVUcmVlID0gY29udGVudC5jcmVhdGVUcmVlO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU1lbnUgPSBjb250ZW50LmNyZWF0ZU1lbnU7XG5leHBvcnQgY29uc3QgY3JlYXRlU2xpZGVyID0gY29udGVudC5jcmVhdGVTbGlkZXI7XG5leHBvcnQgY29uc3QgY3JlYXRlVGFicGFuZWwgPSBjb250ZW50LmNyZWF0ZVRhYnBhbmVsO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2dyZXNzQmFyID0gY29udGVudC5jcmVhdGVQcm9ncmVzc0JhcjtcbmV4cG9ydCBjb25zdCBjb25maWd1cmVGb3JtVmFsaWRhdGlvbiA9IGNvbnRlbnQuY29uZmlndXJlRm9ybVZhbGlkYXRpb247XG5leHBvcnQgY29uc3QgdGFibGVzID0gY29udGVudC50YWJsZXM7XG5leHBvcnQgY29uc3QgY3JlYXRlTXVsdGlyYW5nZSA9IGNvbnRlbnQuY3JlYXRlTXVsdGlyYW5nZTtcbmV4cG9ydCBjb25zdCBjcmVhdGVIaWVyYXJjaGljYWxNZW51ID0gY29udGVudC5jcmVhdGVIaWVyYXJjaGljYWxNZW51O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGlicmFyeUVudHJ5LmpzIiwiaW1wb3J0IGNyZWF0ZUFsZXJ0IGZyb20gJy4vYWxlcnQnO1xuaW1wb3J0IGNyZWF0ZURpYWxvZyBmcm9tICcuL2RpYWxvZyc7XG5pbXBvcnQgY3JlYXRlVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IGNyZWF0ZURpYWxvZ1Rvb2x0aXAgZnJvbSAnLi90b29sdGlwRGlhbG9nJztcbmltcG9ydCBpbml0aWFsaXplTGluayBmcm9tICcuL2xpbmsnO1xuaW1wb3J0ICogYXMgYnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCAqIGFzIGNoZWNrYm94IGZyb20gJy4vY2hlY2tib3gnO1xuaW1wb3J0IGNyZWF0ZVJhZGlvR3JvdXAgZnJvbSAnLi9yYWRpbyc7XG5pbXBvcnQgY3JlYXRlVHJlZSBmcm9tICcuL3RyZWUnO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjcmVhdGVNdWx0aXJhbmdlIGZyb20gJy4vbXVsdGlyYW5nZSc7XG5pbXBvcnQgY3JlYXRlQXV0b2NvbXBsZXRlIGZyb20gJy4vYXV0b2NvbXBsZXRlJztcbmltcG9ydCBjcmVhdGVUYWJwYW5lbCBmcm9tICcuL3RhYnBhbmVsJztcbmltcG9ydCBjcmVhdGVQcm9ncmVzc0JhciBmcm9tICcuL3Byb2dyZXNzQmFyJztcbmltcG9ydCBjcmVhdGVFeHBhbmRlciBmcm9tICcuL2V4cGFuZGVyJztcbmltcG9ydCBjb25maWd1cmVGb3JtVmFsaWRhdGlvbiBmcm9tICcuL2Zvcm1WYWxpZGF0aW9uJztcbmltcG9ydCBjcmVhdGVTb3J0YWJsZVRhYmxlIGZyb20gJy4vc29ydGFibGVUYWJsZSc7XG5pbXBvcnQgKiBhcyBjb2xsYXBzaW5nVGFibGUgZnJvbSAnLi9jb2xsYXBzaW5nVGFibGUnO1xuaW1wb3J0IGNyZWF0ZVNsaWRlciBmcm9tICcuL3NsaWRlcic7XG5pbXBvcnQgY3JlYXRlSGllcmFyY2hpY2FsTWVudSBmcm9tICcuL2hpZXJhcmNoaWNhbE1lbnUnO1xuXG5pZiAoISgncmVtb3ZlJyBpbiBFbGVtZW50LnByb3RvdHlwZSkpIHtcbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIHRhYmxlcyA9IHtcbiAgY3JlYXRlU29ydGFibGVUYWJsZSxcbiAgbWFrZVRhYmxlUmVzcG9uc2l2ZTogY29sbGFwc2luZ1RhYmxlLm1ha2VUYWJsZVJlc3BvbnNpdmVcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUFsZXJ0LFxuICBjcmVhdGVBdXRvY29tcGxldGUsXG4gIGNyZWF0ZURpYWxvZyxcbiAgY3JlYXRlRXhwYW5kZXIsXG4gIGNyZWF0ZVRvb2x0aXAsXG4gIGNyZWF0ZURpYWxvZ1Rvb2x0aXAsXG4gIGluaXRpYWxpemVMaW5rLFxuICBidXR0b24sXG4gIGNoZWNrYm94LFxuICBjcmVhdGVSYWRpb0dyb3VwLFxuICBjcmVhdGVUcmVlLFxuICBjcmVhdGVNZW51LFxuICBjcmVhdGVNdWx0aXJhbmdlLFxuICBjcmVhdGVUYWJwYW5lbCxcbiAgY3JlYXRlUHJvZ3Jlc3NCYXIsXG4gIGNvbmZpZ3VyZUZvcm1WYWxpZGF0aW9uLFxuICBjcmVhdGVTbGlkZXIsXG4gIGNyZWF0ZUhpZXJhcmNoaWNhbE1lbnUsXG4gIHRhYmxlc1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFsZXJ0KG1lc3NhZ2UsIGNsYXNzZXMgPSBbXSwgdGltZW91dCkge1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4gb3V0cHV0LmNsYXNzTGlzdC5hZGQoYykpO1xuXG4gIG91dHB1dC5jbGFzc0xpc3QuYWRkKCdkZXF1ZScpO1xuXG4gIG91dHB1dC5pbm5lckhUTUwgPSBtZXNzYWdlO1xuICBpZiAodGltZW91dCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKG91dHB1dC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIG91dHB1dC5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9LCB0aW1lb3V0KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWxlcnQvaW5kZXguanMiLCJpbXBvcnQge2dldEZpcnN0Rm9jdXNhYmxlQ2hpbGQsIGdldE5leHRGb2N1c2FibGVDaGlsZCwgaW5pdFRhYlRyYXB9IGZyb20gJy4uL191dGlscy9mb2N1c1V0aWxzJztcbmltcG9ydCB7Y3JlYXRlSGVhZGVyfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7Y3JlYXRlQ29udGVudEFyZWF9IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50QXJlYSc7XG5pbXBvcnQge2NyZWF0ZUJ1dHRvbkJhcn0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbkJhcic7XG5pbXBvcnQge2NyZWF0ZVNjcmVlbn0gZnJvbSAnLi9jb21wb25lbnRzL2xpZ2h0Ym94U2NyZWVuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGlhbG9nKGlkKSB7XG4gIHZhciBzY3JlZW4gPSBjcmVhdGVTY3JlZW4oKTtcblxuICB2YXIgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cbiAgLy8gY2xvc2UgYnV0dG9uXG4gIHZhciB4QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHhCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xvc2VCdXR0b24nKTtcbiAgeEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnQ2xvc2UgZGlhbG9nJyk7XG4gIHhCdXR0b24uaW5uZXJIVE1MID0gJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj4nO1xuICBhbGVydC5hcHBlbmRDaGlsZCh4QnV0dG9uKTtcblxuICBhbGVydC5jbGFzc0xpc3QuYWRkKCdkZXF1ZScpO1xuICBhbGVydC5jbGFzc0xpc3QuYWRkKCdkaWFsb2dfYm94Jyk7XG5cbiAgdmFyIGRlZmF1bHRDbGFzc0xpc3QgPSBbJ2RlcXVlJywgJ2RpYWxvZ19ib3gnXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGVydC5jbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBkZWZhdWx0Q2xhc3NMaXN0LnB1c2goYWxlcnQuY2xhc3NMaXN0W2ldKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEluaXRpYWxGb2N1cyhjb25maWcpIHtcbiAgICBpZiAoIWNvbmZpZy5pc0FsZXJ0KSB7XG4gICAgICAvLyBzZWxlY3QgdGhlIGNvbnRlbnQuLi4/IFNwZWMgc2F5cyAnZmlyc3QgZm9jdXNhYmxlIGl0ZW0nIGFuZCBhbHNvXG4gICAgICAvLyBzYXlzIHRoYXQgdGhlIGNvbnRlbnQgYXJlYSBzaG91bGQgYmUgcm9sZT1kb2N1bWVudCBhbmQgdGFiaW5kZXg9MCwgc28gc2hvdWxkbid0IGl0XG4gICAgICAvLyAxMDAlIG9mIHRoZSB0aW1lIGJlIHRoZSAnZmlyc3QgZm9jdXNhYmxlIGl0ZW0nP1xuICAgICAgdmFyIHRhcmdldCA9IGdldEZpcnN0Rm9jdXNhYmxlQ2hpbGQoYWxlcnQpO1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlQnV0dG9uJykpIHtcbiAgICAgICAgdGFyZ2V0ID0gZ2V0TmV4dEZvY3VzYWJsZUNoaWxkKGFsZXJ0LCB0YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmlzQWxlcnQgJiYgY29uZmlnLmlzRGV0YWlsKSB7XG4gICAgICByZXR1cm4gY29udGVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIGlmIChidXR0b25CYXIuZ2V0Rmlyc3RCdXR0b24oKSkge1xuICAgICAgcmV0dXJuIGJ1dHRvbkJhci5nZXRGaXJzdEJ1dHRvbigpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLy8gbm90IHN1cmUgdGhpcyB3b3VsZCBldmVyIGdldCBjYWxsZWQsIG9yIHdoYXQgaXQgc2hvdWxkIGRvIGlmIGl0IGRpZC5cbiAgICBhbGVydC5mb2N1cygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgY2xlYXJDbGFzc2VzKCk7XG4gICAgY2xlYXJLZXlIYW5kbGVycygpO1xuICAgIGhlYWRlci5kZWFjdGl2YXRlKCk7XG4gICAgY29udGVudC5jbGVhcigpO1xuICAgIGJ1dHRvbkJhci5jbGVhcigpO1xuICAgIHNjcmVlbi5jbGVhcigpO1xuICAgIGN1cnJlbnRDb25maWcgPSBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3NlcyhjbGFzc2VzKSB7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKGl0ZW0gPT4gYWxlcnQuY2xhc3NMaXN0LmFkZChpdGVtKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckNsYXNzZXMoKSB7XG4gICAgbGV0IHRvUmVtb3ZlID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGVydC5jbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvUmVtb3ZlLnB1c2goYWxlcnQuY2xhc3NMaXN0W2ldKTtcbiAgICB9XG5cbiAgICB0b1JlbW92ZS5mb3JFYWNoKGMgPT4ge1xuICAgICAgYWxlcnQuY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICB9KTtcblxuICAgIGFkZENsYXNzZXMoZGVmYXVsdENsYXNzTGlzdCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRSb2xlKHJvbGUpIHtcbiAgICBhbGVydC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCByb2xlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVDbG9zZUJ1dHRvbigpIHtcbiAgICB4QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0Nsb3NlQnV0dG9uKCkge1xuICAgIHhCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH1cblxuICB2YXIgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gIGZ1bmN0aW9uIHNldFRpdGxlKHRleHQsIHNob3cpIHtcbiAgICBpZiAoc2hvdykge1xuICAgICAgaGVhZGVyLmFjdGl2YXRlKHRleHQpO1xuICAgICAgYWxlcnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBoZWFkZXIuaWQpO1xuICAgICAgYWxlcnQuaW5zZXJ0QmVmb3JlKGhlYWRlciwgeEJ1dHRvbik7XG4gICAgICBhbGVydC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICBhbGVydC5jbGFzc0xpc3QucmVtb3ZlKCdub1RpdGxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlci5kZWFjdGl2YXRlKCk7XG4gICAgICBhbGVydC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0ZXh0KTtcbiAgICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ25vVGl0bGUnKTtcbiAgICB9XG4gIH1cblxuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cbiAgdmFyIGNvbnRlbnQgPSBjcmVhdGVDb250ZW50QXJlYSgpO1xuICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBjb250ZW50LmlkKTtcbiAgYWxlcnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgeEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUVzY2FwZSk7XG5cbiAgdmFyIGJ1dHRvbkJhciA9IGNyZWF0ZUJ1dHRvbkJhcigpO1xuICBhbGVydC5hcHBlbmRDaGlsZChidXR0b25CYXIpO1xuXG4gIHZhciBlc2NhcGVIYW5kbGVyO1xuICB2YXIgY3VycmVudENvbmZpZztcbiAgZnVuY3Rpb24gc2hvdyhjb25maWcpIHtcbiAgICBjdXJyZW50Q29uZmlnID0gY29uZmlnO1xuXG4gICAgaWYgKGNvbmZpZy5jbGFzc2VzKSB7XG4gICAgICBhZGRDbGFzc2VzKGNvbmZpZy5jbGFzc2VzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaWJlZGJ5KSB7XG4gICAgICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBjb25maWcuZGVzY3JpYmVkYnkpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcubGlmZWN5Y2xlLnByZU9wZW4pIHtcbiAgICAgIGNvbmZpZy5saWZlY3ljbGUucHJlT3BlbigpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuaGlkZUNsb3NlQnV0dG9uKSB7XG4gICAgICBoaWRlQ2xvc2VCdXR0b24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd0Nsb3NlQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy53cmFwcGVySUQpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy53cmFwcGVySUQpLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIH1cblxuICAgIGNvbmZpZy5pc0FsZXJ0ID8gc2V0Um9sZSgnYWxlcnRkaWFsb2cnKSA6IHNldFJvbGUoJ2RpYWxvZycpO1xuICAgIHNldFRpdGxlKGNvbmZpZy50aXRsZSwgY29uZmlnLnNob3dIZWFkZXIpO1xuICAgIGJ1dHRvbkJhci5pbml0aWFsaXplKGNvbmZpZy5idXR0b25zLCBoaWRlKTtcbiAgICBzZXRLZXlIYW5kbGVycyhjb25maWcuYnV0dG9ucyk7XG5cbiAgICBjb250ZW50LnJlbmRlcihjb25maWcubWVzc2FnZSk7XG5cbiAgICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICBsZXQgZGVzY19ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRlc2NfYm94LmlkID0gJ2Rlc2MnO1xuXG4gICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBjb25maWcuZGVzY3JpcHRpb247XG5cbiAgICAgIGRlc2NfYm94LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUoZGVzY19ib3gsIGNvbnRlbnQuY2hpbGRyZW5bMF0pO1xuICAgICAgYWxlcnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZGVzY19ib3guaWQpO1xuICAgIH1cblxuICAgIHNjcmVlbi5zaG93KCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbGVydCk7XG5cbiAgICBpZiAoY29uZmlnLmxpZmVjeWNsZS5wb3N0T3Blbikge1xuICAgICAgY29uZmlnLmxpZmVjeWNsZS5wb3N0T3BlbigpO1xuICAgIH1cblxuICAgIGFsZXJ0LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICBhbGVydC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAgIHNldEluaXRpYWxGb2N1cyhjb25maWcpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZSgpIHtcbiAgICBpZiAoY3VycmVudENvbmZpZy5saWZlY3ljbGUucHJlQ2xvc2UpIHtcbiAgICAgIGN1cnJlbnRDb25maWcubGlmZWN5Y2xlLnByZUNsb3NlKCk7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRDb25maWcud3JhcHBlcklEKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50Q29uZmlnLndyYXBwZXJJRCkucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgIH1cblxuICAgIGlmIChhbGVydC5oYXNBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKSkge1xuICAgICAgYWxlcnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG4gICAgfVxuXG4gICAgbGV0IHBvc3RIaWRlID0gY3VycmVudENvbmZpZy5saWZlY3ljbGUucG9zdENsb3NlIHx8IGZ1bmN0aW9uKCkge307XG4gICAgcmVzZXQoKTtcbiAgICBhbGVydC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICByZXR1cm5Gb2N1c1RvLmZvY3VzKCk7XG4gICAgcG9zdEhpZGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUVzY2FwZSgpIHtcbiAgICBpZiAoZXNjYXBlSGFuZGxlci5wcmVDbG9zZSkge1xuICAgICAgZXNjYXBlSGFuZGxlci5wcmVDbG9zZSgpO1xuICAgIH1cblxuICAgIC8vIGVzY2FwZUhhbmRsZXIgZ2V0cyBudWxsZWQgb3V0IGJ5IGhpZGUsIHNvXG4gICAgLy8gcHVsbCB0aGlzIG91dCBoZXJlLlxuICAgIHZhciBwb3N0Q2xvc2UgPSBlc2NhcGVIYW5kbGVyLnBvc3RDbG9zZTtcblxuICAgIGhpZGUoKTtcblxuICAgIGlmIChwb3N0Q2xvc2UpIHtcbiAgICAgIHBvc3RDbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEtleUhhbmRsZXJzKGJ1dHRvbnMpIHtcblxuICAgIGVzY2FwZUhhbmRsZXIgPSBidXR0b25zLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcbiAgICAgIGlmIChhY2MpIHsgcmV0dXJuIGFjYzsgfVxuICAgICAgaWYgKHZhbC5oYW5kbGVFc2NhcGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwcmVDbG9zZTogdmFsLnByZUNsb3NlLFxuICAgICAgICAgIHBvc3RDbG9zZTogdmFsLnBvc3RDbG9zZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIG51bGwpIHx8IHt9O1xuXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcktleUhhbmRsZXJzKCkge1xuICAgIGVzY2FwZUhhbmRsZXIgPSBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24ga2V5VXBIYW5kbGVyKGUpIHtcbiAgICBpZiAoZS53aGljaCA9PT0gMjcpIHtcbiAgICAgIGhhbmRsZUVzY2FwZSgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBhbGVydC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwSGFuZGxlcik7XG5cbiAgaW5pdFRhYlRyYXAoYWxlcnQpO1xuXG4gIHZhciByZXR1cm5Gb2N1c1RvO1xuICByZXR1cm4gZnVuY3Rpb24odHJpZ2dlckVsZW1lbnQsIGNvbmZpZykge1xuICAgIHJldHVybkZvY3VzVG8gPSB0cmlnZ2VyRWxlbWVudDtcblxuICAgIC8vIG1ha2Ugc3VyZSB3ZSBuZXZlciBlbmQgdXAgd2l0aCBhIGNhc2Ugd2hlcmUgYSBub24tYWxlcnQgYm94IGlzIHRyZWF0ZWRcbiAgICAvLyBhcyBhIHNpbXBsZSBhbGVydC5cbiAgICBpZiAoIWNvbmZpZy5pc0FsZXJ0KSB7XG4gICAgICBjb25maWcuaXNEZXRhaWwgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghY29uZmlnLmxpZmVjeWNsZSkge1xuICAgICAgY29uZmlnLmxpZmVjeWNsZSA9IHt9O1xuICAgIH1cblxuICAgIHNob3coY29uZmlnKTtcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFsb2cvaW5kZXguanMiLCJpbXBvcnQge3F1ZXJ5QWxsfSBmcm9tICcuL3NlbGVjdGlvblV0aWxzJztcblxudmFyIGZvY3VzYWJsZVF1ZXJ5ID0gJ2lucHV0Om5vdChbdGFiaW5kZXhePVwiLVwiXSksIHNlbGVjdDpub3QoW3RhYmluZGV4Xj1cIi1cIl0pLCB0ZXh0YXJlYTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pLCBidXR0b246bm90KFt0YWJpbmRleF49XCItXCJdKSwgb2JqZWN0Om5vdChbdGFiaW5kZXhePVwiLVwiXSksIFtocmVmXTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pLCBbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXhePVwiLVwiXSk6bm90KC50YWJ0cmFwKSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdEZvY3VzYWJsZUNoaWxkKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3Rvcihmb2N1c2FibGVRdWVyeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0Rm9jdXNhYmxlQ2hpbGQoZWxlbWVudCwgY3VycmVudCkge1xuICB2YXIgYWxsID0gcXVlcnlBbGwoZm9jdXNhYmxlUXVlcnkpO1xuICBsZXQgdGFyZ2V0UmV0dXJuSW5kZXggPSBhbGwuaW5kZXhPZihjdXJyZW50KSArIDE7XG5cbiAgaWYgKHRhcmdldFJldHVybkluZGV4IDw9IGFsbC5sZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuIGFsbFt0YXJnZXRSZXR1cm5JbmRleF07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RGb2N1c2FibGVDaGlsZChlbGVtZW50KSB7XG4gIHZhciBhbGwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZm9jdXNhYmxlUXVlcnkpO1xuICByZXR1cm4gYWxsW2FsbC5sZW5ndGggLSAxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUYWJUcmFwKGVsZW1lbnQpIHtcbiAgZnVuY3Rpb24gY3JlYXRlVHJhcCgpIHtcbiAgICB2YXIgdHJhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRyYXAuY2xhc3NMaXN0LmFkZCgndGFidHJhcCcpO1xuICAgIHRyYXAuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG5cbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5VHJhcHMoZWxlbWVudCwgZmlyc3RUcmFwLCBsYXN0VHJhcCkge1xuICAgIGZpcnN0VHJhcC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uKCkge1xuICAgICAgZ2V0TGFzdEZvY3VzYWJsZUNoaWxkKGVsZW1lbnQpLmZvY3VzKCk7XG4gICAgfSk7XG5cbiAgICBsYXN0VHJhcC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uKCkge1xuICAgICAgZ2V0Rmlyc3RGb2N1c2FibGVDaGlsZChlbGVtZW50KS5mb2N1cygpO1xuICAgIH0pO1xuXG4gICAgZWxlbWVudC5pbnNlcnRCZWZvcmUoZmlyc3RUcmFwLCBlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobGFzdFRyYXApO1xuICB9XG5cbiAgdmFyIGZpcnN0VHJhcCA9IGNyZWF0ZVRyYXAoKTtcbiAgdmFyIGxhc3RUcmFwID0gY3JlYXRlVHJhcCgpO1xuXG4gIGFwcGx5VHJhcHMoZWxlbWVudCwgZmlyc3RUcmFwLCBsYXN0VHJhcCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL191dGlscy9mb2N1c1V0aWxzLmpzIiwiaW1wb3J0IHt0b0FycmF5fSBmcm9tICcuL2NvbGxlY3Rpb25VdGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUFsbChzZWxlY3RvciwgY29udGV4dCkge1xuICBjb250ZXh0ID0gY29udGV4dCB8fCBkb2N1bWVudDtcbiAgcmV0dXJuIHRvQXJyYXkoY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL191dGlscy9zZWxlY3Rpb25VdGlscy5qcyIsImV4cG9ydCBmdW5jdGlvbiB0b0FycmF5KGFycmF5bGlrZSkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXlsaWtlKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX3V0aWxzL2NvbGxlY3Rpb25VdGlscy5qcyIsImltcG9ydCB7Z2VuZXJhdGVHdWlkfSBmcm9tICcuLi8uLi9fdXRpbHMvZ3VpZFV0aWxzJztcblxuXG5mdW5jdGlvbiBhY3RpdmF0ZShoZWFkZXIsIHRleHQpIHtcbiAgaGVhZGVyLmlzQWN0aXZlID0gdHJ1ZTtcbiAgaGVhZGVyLmlubmVyVGV4dCA9IHRleHQ7XG4gIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn1cblxuZnVuY3Rpb24gZGVhY3RpdmF0ZShoZWFkZXIpIHtcbiAgaGVhZGVyLmlubmVyVGV4dCA9ICcnO1xuICBoZWFkZXIuaXNBY3RpdmUgPSBmYWxzZTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gIC8vIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnaGVhZGluZycpO1xuICAvLyBoZWFkZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxldmVsJywgJzEnKTtcbiAgaGVhZGVyLmlkID0gZ2VuZXJhdGVHdWlkKCk7XG4gIGhlYWRlci5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gIGhlYWRlci5hY3RpdmF0ZSA9IGFjdGl2YXRlLmJpbmQobnVsbCwgaGVhZGVyKTtcbiAgaGVhZGVyLmRlYWN0aXZhdGUgPSBkZWFjdGl2YXRlLmJpbmQobnVsbCwgaGVhZGVyKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFsb2cvY29tcG9uZW50cy9oZWFkZXIuanMiLCIvKlxuICBub3RlIC0gbm90IGEgdHJ1ZSBndWlkLiBJIHByZXBlbmQgJ2cnIGJlY2F1c2UgYnJvd3NlcnMgY3J5XG4gIGlmIGFuIGVsZW1lbnQgSUQgc3RhcnRzIHdpdGggYSBudW1iZXIuXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVHdWlkKCkge1xuICB2YXIgUzQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKCgoMStNYXRoLnJhbmRvbSgpKSoweDEwMDAwKXwwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xuICB9O1xuICByZXR1cm4gJ2cnICsgKFM0KCkrUzQoKSsnLScrUzQoKSsnLScrUzQoKSsnLScrUzQoKSsnLScrUzQoKStTNCgpK1M0KCkpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fdXRpbHMvZ3VpZFV0aWxzLmpzIiwiaW1wb3J0IHtnZW5lcmF0ZUd1aWR9IGZyb20gJy4uLy4uL191dGlscy9ndWlkVXRpbHMnO1xuXG5mdW5jdGlvbiByZW5kZXJDb250ZW50KGNvbnRlbnRBcmVhLCBtZXNzYWdlKSB7XG4gIGlmIChtZXNzYWdlLnN1YnN0cikge1xuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgICBjb250ZW50QXJlYS5hcHBlbmRDaGlsZChwKTtcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50QXJlYS5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoY29udGVudEFyZWEpIHtcbiAgY29udGVudEFyZWEuaW5uZXJUZXh0ID0gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250ZW50QXJlYSgpIHtcbiAgdmFyIGNvbnRlbnRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciBjb250ZW50SUQgPSBnZW5lcmF0ZUd1aWQoKTtcbiAgY29udGVudEFyZWEuaWQgPSBjb250ZW50SUQ7XG4gIGNvbnRlbnRBcmVhLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgY29udGVudEFyZWEuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RvY3VtZW50Jyk7XG4gIGNvbnRlbnRBcmVhLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcblxuICBjb250ZW50QXJlYS5yZW5kZXIgPSByZW5kZXJDb250ZW50LmJpbmQobnVsbCwgY29udGVudEFyZWEpO1xuICBjb250ZW50QXJlYS5jbGVhciA9IGNsZWFyQ29udGVudC5iaW5kKG51bGwsIGNvbnRlbnRBcmVhKTtcblxuICByZXR1cm4gY29udGVudEFyZWE7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFsb2cvY29tcG9uZW50cy9jb250ZW50QXJlYS5qcyIsImZ1bmN0aW9uIGdldEZpcnN0QnV0dG9uKGJ1dHRvbkJhcikge1xuICByZXR1cm4gYnV0dG9uQmFyLmNoaWxkcmVuWzBdIHx8IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldExhc3RCdXR0b24oYnV0dG9uQmFyKSB7XG4gIHZhciBidXR0b25zID0gYnV0dG9uQmFyLmNoaWxkcmVuO1xuICByZXR1cm4gYnV0dG9uc1tidXR0b25zLmxlbmd0aCAtIDFdIHx8IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQnV0dG9ucyhidXR0b25CYXIpIHtcbiAgYnV0dG9uQmFyLmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplQnV0dG9uQmFyKGJ1dHRvbkJhciwgY29uZmlnLCBoaWRlKSB7XG4gIGNsZWFyQnV0dG9ucyhidXR0b25CYXIpO1xuXG4gIGZvcm1hdEJ1dHRvbnMoY29uZmlnLCBoaWRlKVxuICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGJ1dHRvbiwgaW5kZXgsIGJ1dHRvbnMpIHtcbiAgICAgIGJ1dHRvbkJhci5hcHBlbmRDaGlsZChidXR0b24uYnV0dG9uKTtcblxuICAgICAgaWYgKGluZGV4IDwgYnV0dG9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHZhciBzcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3BhY2UuaW5uZXJIVE1MID0gJyZuYnNwOyc7XG4gICAgICAgIGJ1dHRvbkJhci5hcHBlbmRDaGlsZChzcGFjZSk7XG4gICAgICB9XG5cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0QnV0dG9ucyhjb25maWcsIGhpZGUpIHtcbiAgcmV0dXJuIGNvbmZpZy5tYXAoZnVuY3Rpb24oYnV0dG9uQ29uZmlnKSB7XG4gICAgdmFyIGJ1dHRvbjtcblxuICAgIGlmIChidXR0b25Db25maWcubWFya3VwKSB7XG4gICAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgd3JhcHBlci5pbm5lckhUTUwgPSBidXR0b25Db25maWcubWFya3VwO1xuICAgICAgYnV0dG9uID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICAgIHdyYXBwZXIgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBidXR0b25Db25maWcubGFiZWw7XG4gICAgfVxuXG4gICAgaWYgKGJ1dHRvbkNvbmZpZy5jbGFzc2VzKSB7XG4gICAgICBidXR0b25Db25maWcuY2xhc3Nlcy5mb3JFYWNoKGMgPT4gYnV0dG9uLmNsYXNzTGlzdC5hZGQoYykpO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoYnV0dG9uQ29uZmlnLnByZUNsb3NlKSB7XG4gICAgICAgIGJ1dHRvbkNvbmZpZy5wcmVDbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICBoaWRlKCk7XG5cbiAgICAgIGlmIChidXR0b25Db25maWcucG9zdENsb3NlKSB7XG4gICAgICAgIGJ1dHRvbkNvbmZpZy5wb3N0Q2xvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYnV0dG9uOiBidXR0b24sXG4gICAgICBoYW5kbGVyOiBoYW5kbGVyXG4gICAgfTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b25CYXIoKSB7XG4gIHZhciBidXR0b25CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9uQmFyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcblxuICBidXR0b25CYXIuZ2V0Rmlyc3RCdXR0b24gPSBnZXRGaXJzdEJ1dHRvbi5iaW5kKG51bGwsIGJ1dHRvbkJhcik7XG4gIGJ1dHRvbkJhci5nZXRMYXN0QnV0dG9uID0gZ2V0TGFzdEJ1dHRvbi5iaW5kKG51bGwsIGJ1dHRvbkJhcik7XG4gIGJ1dHRvbkJhci5jbGVhciA9IGNsZWFyQnV0dG9ucy5iaW5kKG51bGwsIGJ1dHRvbkJhcik7XG4gIGJ1dHRvbkJhci5pbml0aWFsaXplID0gaW5pdGlhbGl6ZUJ1dHRvbkJhci5iaW5kKG51bGwsIGJ1dHRvbkJhcik7XG5cbiAgcmV0dXJuIGJ1dHRvbkJhcjtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlhbG9nL2NvbXBvbmVudHMvYnV0dG9uQmFyLmpzIiwiZnVuY3Rpb24gY2xlYXJTY3JlZW4oc2NyZWVuKSB7XG4gIHNjcmVlbi5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gc2hvd1NjcmVlbihzY3JlZW4pIHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JlZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2NyZWVuKCkge1xuICB2YXIgc2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjcmVlbi5jbGFzc0xpc3QuYWRkKCdkZXF1ZScpO1xuICBzY3JlZW4uY2xhc3NMaXN0LmFkZCgnc2NyZWVuJyk7XG4gIHNjcmVlbi5zaG93ID0gc2hvd1NjcmVlbi5iaW5kKG51bGwsIHNjcmVlbik7XG4gIHNjcmVlbi5jbGVhciA9IGNsZWFyU2NyZWVuLmJpbmQobnVsbCwgc2NyZWVuKTtcblxuICByZXR1cm4gc2NyZWVuO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWFsb2cvY29tcG9uZW50cy9saWdodGJveFNjcmVlbi5qcyIsImltcG9ydCB7Z2VuZXJhdGVHdWlkfSBmcm9tICcuLi9fdXRpbHMvZ3VpZFV0aWxzJztcbmltcG9ydCB7b25FbGVtZW50RXNjYXBlfSBmcm9tICcuLi9fdXRpbHMva2V5Ym9hcmRVdGlscyc7XG5pbXBvcnQge25vQ2xvYmJlcn0gZnJvbSAnLi4vX3V0aWxzL25vY2xvYmJlclV0aWxzJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb29sdGlwKHRyaWdnZXIpIHtcbiAgdmFyIHRpcFRleHQgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnZGF0YS10b29sdGlwJyk7XG4gIHZhciB0aXBJRCA9IGdlbmVyYXRlR3VpZCgpO1xuICB2YXIgdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gIHRpcC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndG9vbHRpcCcpO1xuICB0aXAuaWQgPSB0aXBJRDtcbiAgdGlwLmNsYXNzTGlzdC5hZGQoJ2RlcXVlJyk7XG4gIHRpcC5jbGFzc0xpc3QuYWRkKCd0b29sdGlwJyk7XG4gIHRpcC5pbm5lclRleHQgPSB0aXBUZXh0O1xuICB0cmlnZ2VyLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRpcCwgdHJpZ2dlcik7XG4gIHRyaWdnZXIucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodHJpZ2dlciwgdGlwKTtcblxuICBub0Nsb2JiZXIodHJpZ2dlciwgJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJRCk7XG5cbiAgdmFyIGNhdXNlcyA9IHtcbiAgICBJTklUSUFMOiAnaW5pdGlhbCcsXG4gICAgRk9DVVM6ICdmb2N1cycsXG4gICAgTU9VU0U6ICdtb3VzZScsXG4gICAgRVNDQVBFOiAnZXNjYXBlJ1xuICB9O1xuXG4gIHZhciBjdXJyZW50Q2F1c2UgPSBjYXVzZXMuSU5JVElBTDtcblxuICBmdW5jdGlvbiBzaG93VGlwKGNhdXNlKSB7XG4gICAgaWYgKGN1cnJlbnRDYXVzZSA9PT0gY2F1c2VzLkZPQ1VTKSB7XG4gICAgICAvLyBwcmV2ZW50cyAnTU9VU0UnIGNhdXNlIGZyb20gcmVwbGFjaW5nICdGT0NVUycgY2F1c2UuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cblxuICAgIGN1cnJlbnRDYXVzZSA9IGNhdXNlO1xuXG4gIH1cblxuICBmdW5jdGlvbiBoaWRlVGlwKGNhdXNlKSB7XG4gICAgaWYgKGNhdXNlID09PSBjYXVzZXMuRVNDQVBFIHx8IGN1cnJlbnRDYXVzZSA9PT0gY2F1c2UpIHtcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIGN1cnJlbnRDYXVzZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVzY2FwZUhhbmRsZXIoKSB7XG4gICAgaGlkZVRpcChjYXVzZXMuRVNDQVBFKTtcbiAgfVxuXG5cbiAgY29uc3QgY2FuY2VsRWxlbWVudEVzY2FwZSA9IG9uRWxlbWVudEVzY2FwZShkb2N1bWVudC5ib2R5LCBlc2NhcGVIYW5kbGVyKTtcblxuICBjb25zdCBmb2N1c0hhbmRsZXIgPSBzaG93VGlwLmJpbmQobnVsbCwgY2F1c2VzLkZPQ1VTKTtcbiAgY29uc3QgYmx1ckhhbmRsZXIgPSBoaWRlVGlwLmJpbmQobnVsbCwgY2F1c2VzLkZPQ1VTKTtcbiAgY29uc3Qgb3ZlckhhbmRsZXIgPSBzaG93VGlwLmJpbmQobnVsbCwgY2F1c2VzLk1PVVNFKTtcbiAgY29uc3Qgb3V0SGFuZGxlciA9IGhpZGVUaXAuYmluZChudWxsLCBjYXVzZXMuTU9VU0UpO1xuXG4gIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmb2N1c0hhbmRsZXIpO1xuICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBibHVySGFuZGxlcik7XG4gIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgb3ZlckhhbmRsZXIpO1xuICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0Jywgb3V0SGFuZGxlcik7XG5cbiAgaGlkZVRpcChjYXVzZXMuSU5JVElBTCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGRpc2FibGVUb29sdGlwKCkge1xuICAgIGhpZGVUaXAoY2F1c2VzLkVTQ0FQRSk7XG5cbiAgICBjYW5jZWxFbGVtZW50RXNjYXBlKCk7XG5cbiAgICB0cnkge1xuICAgICAgdGlwLnJlbW92ZSgpO1xuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAvKm5vIG9wKi9cbiAgICB9XG5cbiAgICB0cmlnZ2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZm9jdXNIYW5kbGVyKTtcbiAgICB0cmlnZ2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBibHVySGFuZGxlcik7XG4gICAgdHJpZ2dlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBvdmVySGFuZGxlcik7XG4gICAgdHJpZ2dlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG91dEhhbmRsZXIpO1xuICAgIHRyaWdnZXIucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdG9vbHRpcC9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBLRVlTID0ge1xuICBCQUNLU1BBQ0U6IDgsXG4gIFRBQjogOSxcbiAgRU5URVI6IDEzLFxuICBTSElGVDogMTYsXG4gIENUUkw6IDE3LFxuICBBTFQ6IDE4LFxuICBFU0NBUEU6IDI3LFxuICBTUEFDRTogMzIsXG4gIExFRlQ6IDM3LFxuICBSSUdIVDogMzksXG4gIFVQOiAzOCxcbiAgRE9XTjogNDAsXG4gIEYxMDogMTIxLFxuICBIT01FOiAzNixcbiAgRU5EOiAzNSxcbiAgUEFHRV9VUDogMzMsXG4gIFBBR0VfRE9XTjogMzRcbn07XG5cbmZ1bmN0aW9uIGJpbmRFbGVtZW50VG9FdmVudFZhbHVlKGVsZW1lbnQsIGV2ZW50TmFtZSwgdGVzdFZhbHVlLCBoYW5kbGVyKSB7XG4gIGZ1bmN0aW9uIGxvY2FsSGFuZGxlcihlKSB7XG4gICAgaWYgKGUud2hpY2ggPT09IHRlc3RWYWx1ZSkge1xuICAgICAgaGFuZGxlcihlKTtcbiAgICB9XG4gIH1cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsb2NhbEhhbmRsZXIpO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbG9jYWxIYW5kbGVyKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYmluZEVsZW1lbnRUb0tleXByZXNzVmFsdWUoZWxlbWVudCwgdGVzdFZhbHVlLCBoYW5kbGVyKSB7XG4gIHJldHVybiBiaW5kRWxlbWVudFRvRXZlbnRWYWx1ZShlbGVtZW50LCAna2V5cHJlc3MnLCB0ZXN0VmFsdWUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBiaW5kRWxlbWVudFRvS2V5ZG93blZhbHVlKGVsZW1lbnQsIHRlc3RWYWx1ZSwgaGFuZGxlcikge1xuICByZXR1cm4gYmluZEVsZW1lbnRUb0V2ZW50VmFsdWUoZWxlbWVudCwgJ2tleWRvd24nLCB0ZXN0VmFsdWUsIGhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25FbGVtZW50RW50ZXIoZWxlbWVudCwgaGFuZGxlcikge1xuICByZXR1cm4gYmluZEVsZW1lbnRUb0tleXByZXNzVmFsdWUoZWxlbWVudCwgS0VZUy5FTlRFUiwgaGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkVsZW1lbnRFc2NhcGUoZWxlbWVudCwgaGFuZGxlcikge1xuICByZXR1cm4gYmluZEVsZW1lbnRUb0tleWRvd25WYWx1ZShlbGVtZW50LCBLRVlTLkVTQ0FQRSwgaGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkVsZW1lbnRTcGFjZShlbGVtZW50LCBoYW5kbGVyKSB7XG4gIHJldHVybiBiaW5kRWxlbWVudFRvS2V5cHJlc3NWYWx1ZShlbGVtZW50LCBLRVlTLlNQQUNFLCBoYW5kbGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRWxlbWVudExlZnQoZWxlbWVudCwgaGFuZGxlcikge1xuICByZXR1cm4gYmluZEVsZW1lbnRUb0tleWRvd25WYWx1ZShlbGVtZW50LCBLRVlTLkxFRlQsIGhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25FbGVtZW50UmlnaHQoZWxlbWVudCwgaGFuZGxlcikge1xuICByZXR1cm4gYmluZEVsZW1lbnRUb0tleWRvd25WYWx1ZShlbGVtZW50LCBLRVlTLlJJR0hULCBoYW5kbGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRWxlbWVudFVwKGVsZW1lbnQsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIGJpbmRFbGVtZW50VG9LZXlkb3duVmFsdWUoZWxlbWVudCwgS0VZUy5VUCwgaGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkVsZW1lbnREb3duKGVsZW1lbnQsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIGJpbmRFbGVtZW50VG9LZXlkb3duVmFsdWUoZWxlbWVudCwgS0VZUy5ET1dOLCBoYW5kbGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRWxlbWVudEhvbWUoZWxlbWVudCwgaGFuZGxlcikge1xuICByZXR1cm4gYmluZEVsZW1lbnRUb0tleWRvd25WYWx1ZShlbGVtZW50LCBLRVlTLkhPTUUsIGhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25FbGVtZW50RW5kKGVsZW1lbnQsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIGJpbmRFbGVtZW50VG9LZXlkb3duVmFsdWUoZWxlbWVudCwgS0VZUy5FTkQsIGhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25FbGVtZW50UGFnZVVwKGVsZW1lbnQsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIGJpbmRFbGVtZW50VG9LZXlkb3duVmFsdWUoZWxlbWVudCwgS0VZUy5QQUdFX1VQLCBoYW5kbGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRWxlbWVudFBhZ2VEb3duKGVsZW1lbnQsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIGJpbmRFbGVtZW50VG9LZXlkb3duVmFsdWUoZWxlbWVudCwgS0VZUy5QQUdFX0RPV04sIGhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25FbGVtZW50RjEwKGVsZW1lbnQsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIGJpbmRFbGVtZW50VG9LZXlkb3duVmFsdWUoZWxlbWVudCwgS0VZUy5GMTAsIGhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBbHBoYU51bWVyaWMoY2hhckNvZGUpIHtcbiAgcmV0dXJuIChjaGFyQ29kZSA+PSA0OCAmJiBjaGFyQ29kZSA8PSA5MCAvKiBudW1iZXJzLCB1cHBlcmNhc2UgbGV0dGVycyAqL1xuICAgICAgfHxcbiAgICAgIGNoYXJDb2RlID49IDk3ICYmIGNoYXJDb2RlIDw9IDEyMiAvKiBsb3dlcmNhc2UgbGV0dGVycyAqLyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkVsZW1lbnRDaGFyYWN0ZXIoZWxlbWVudCwgaGFuZGxlcikge1xuICBmdW5jdGlvbiBsb2NhbEhhbmRsZXIoZSkge1xuICAgIHZhciBjaGFyQ29kZSA9IGUud2hpY2g7XG4gICAgaWYgKGlzQWxwaGFOdW1lcmljKGNoYXJDb2RlKSkge1xuICAgICAgaGFuZGxlcihlKTtcbiAgICB9XG4gIH1cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgbG9jYWxIYW5kbGVyKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBsb2NhbEhhbmRsZXIpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhcEVudGVyKGVsZW1lbnQpIHtcbiAgb25FbGVtZW50RW50ZXIoZWxlbWVudCwgZnVuY3Rpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX3V0aWxzL2tleWJvYXJkVXRpbHMuanMiLCIvKipcbiAqIFdoaXRlc3BhY2UgUmVnRXhwLlxuICovXG5cbnZhciB3aGl0ZXNwYWNlID0gL1xccysvO1xuXG4vKipcbiAqIEFkZCBgYXR0cj12YWxgIHdpdGhvdXQgY2xvYmJlcmluZyBhbiBleGlzdGluZyB2YWx1ZS5cbiAqIEBwYXJhbSAge0VsZW1lbnR9ICBlbGVtZW50IFtFbGVtZW50IG9iamVjdF1cbiAqIEBwYXJhbSAge1N0cmluZ30gICBhdHRyICAgIFtBdHRyaWJ1dGUgdG8gdXBkYXRlXVxuICogQHBhcmFtICB7QXJyYXl9ICAgIGlkcyAgICAgW3Jlc3QgcGFyYW1ldGVycyBvZiBpZHMgdG8gYWRkXVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9DbG9iYmVyKGVsZW1lbnQsIGF0dHIsIC4uLmlkcykge1xuICB2YXIgY3VycmVudCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAvLyBpZiB0aGVyZSBpcyBubyB2YWx1ZSwganVzdCBhZGQgdGhlIG5ldyBvbmVcbiAgaWYgKCFjdXJyZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIGlkcy5qb2luKCcgJykpO1xuICB9XG5cbiAgLy8gcmVtb3ZlIFwiZXh0cmFcIiB3aGl0ZXNwYWNlLCB0aGVuIHNwbGl0IGJ5IGFueSB3aGl0ZXNwYWNlXG4gIHZhciBwYXJ0cyA9IGN1cnJlbnQudHJpbSgpLnNwbGl0KHdoaXRlc3BhY2UpO1xuXG4gIGlkcy5tYXAoZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKCF+cGFydHMuaW5kZXhPZih2YWwpKSB7XG4gICAgICBwYXJ0cy5wdXNoKHZhbCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBzZXQgbmV3IHZhbFxuICByZXR1cm4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgcGFydHMuam9pbignICcpKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fdXRpbHMvbm9jbG9iYmVyVXRpbHMuanMiLCJpbXBvcnQge2dldEZpcnN0Rm9jdXNhYmxlQ2hpbGQsIGluaXRUYWJUcmFwfSBmcm9tICcuLi9fdXRpbHMvZm9jdXNVdGlscyc7XG5pbXBvcnQge2dlbmVyYXRlR3VpZH0gZnJvbSAnLi4vX3V0aWxzL2d1aWRVdGlscyc7XG5pbXBvcnQge29uRWxlbWVudEVzY2FwZX0gZnJvbSAnLi4vX3V0aWxzL2tleWJvYXJkVXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEaWFsb2dUb29sdGlwKHRyaWdnZXIsIHtjb250ZW50SUQsIHN1Ym1pdElELCBjYW5jZWxJRCwgb25DYW5jZWwsIG9uU3VibWl0LCBvbk9wZW4sIGxhYmVsLCBwb3NpdGlvbn0pIHtcbiAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50SUQpO1xuICB2YXIgdGlwSUQgPSBnZW5lcmF0ZUd1aWQoKTtcbiAgdmFyIHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGlmICghcG9zaXRpb24pIHtcbiAgICBwb3NpdGlvbiA9IGdldFRpcFBvc2l0aW9uO1xuICB9XG5cbiAgdGlwLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcblxuICB0aXAuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xuICB0aXAuaWQgPSB0aXBJRDtcblxuICAvLyBzZWUgdG9vbHRpcC9zdHlsZS5sZXNzIGZvciB0b29sdGlwIHN0eWxlLlxuICB0aXAuY2xhc3NMaXN0LmFkZCgnZGVxdWUnKTtcbiAgdGlwLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXAnKTtcblxuICB0aXAuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgdHJpZ2dlci5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZSh0aXAsIHRyaWdnZXIpO1xuICB0cmlnZ2VyLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRyaWdnZXIsIHRpcCk7XG5cbiAgdmFyIHN1Ym1pdEJ1dHRvbiA9IHN1Ym1pdElEID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3VibWl0SUQpIDogbnVsbDtcbiAgdmFyIGNhbmNlbEJ1dHRvbiA9IGNhbmNlbElEID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FuY2VsSUQpIDogbnVsbDtcblxuICBmdW5jdGlvbiBzdWJtaXQoKSB7XG4gICAgb25TdWJtaXQgJiYgb25TdWJtaXQoKTtcbiAgICBoaWRlVGlwKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwocmV0dXJuRm9jdXMpIHtcbiAgICBvbkNhbmNlbCAmJiBvbkNhbmNlbCgpO1xuICAgIGhpZGVUaXAoKTtcbiAgICBpZiAocmV0dXJuRm9jdXMpIHtcbiAgICAgIHRyaWdnZXIuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93VGlwKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNhbmNlbCk7XG4gICAgb25PcGVuICYmIG9uT3BlbigpO1xuICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwLmlkKTtcbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgdGlwLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgIGdldEZpcnN0Rm9jdXNhYmxlQ2hpbGQodGlwKS5mb2N1cygpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVRpcCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjYW5jZWwpO1xuICAgIHRpcC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB0aXAuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgdHJpZ2dlci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgfVxuXG4gIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRpcC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICBzaG93VGlwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZGVUaXAoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHRpcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgY29uc3QgY2FuY2VsQm9keUxpc3RlbmVyID0gb25FbGVtZW50RXNjYXBlKGRvY3VtZW50LmJvZHksIGNhbmNlbC5iaW5kKHt9LCB0cnVlKSk7XG5cbiAgaWYgKHN1Ym1pdEJ1dHRvbikge1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdCk7XG4gIH1cblxuICBpZiAoY2FuY2VsQnV0dG9uKSB7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRpcFBvc2l0aW9uKHRyaWdnZXIsIHRpcCkge1xuXG4gICAgdmFyIHRyaWdnZXJCb3VuZHMgPSB0cmlnZ2VyLmdldENsaWVudFJlY3RzKClbMF07XG4gICAgdmFyIHRpcEJvdW5kcyA9IHRpcC5nZXRDbGllbnRSZWN0cygpWzBdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxlZnQ6IHRyaWdnZXJCb3VuZHMubGVmdCArIHRyaWdnZXJCb3VuZHMud2lkdGggKyAxMCxcbiAgICAgIHRvcDogdHJpZ2dlckJvdW5kcy50b3AgKyAodHJpZ2dlckJvdW5kcy5oZWlnaHQgLyAyKSAtICh0aXBCb3VuZHMuaGVpZ2h0IC8gMilcbiAgICB9O1xuICB9XG5cbiAgaGlkZVRpcCgpO1xuICBpbml0VGFiVHJhcCh0aXApO1xuXG4gIHJldHVybiBmdW5jdGlvbiBkaXNhYmxlVG9vbHRpcCgpIHtcbiAgICB0cmlnZ2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgc2hvd1RpcCk7XG4gICAgY2FuY2VsQm9keUxpc3RlbmVyKCk7XG4gICAgaGlkZVRpcCgpO1xuICAgIGlmICh0aXAucGFyZW50Tm9kZSkge1xuICAgICAgdGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGlwKTtcbiAgICB9XG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdG9vbHRpcERpYWxvZy9pbmRleC5qcyIsImltcG9ydCB7IG9uRWxlbWVudEVudGVyLCBvbkVsZW1lbnRGMTAgfSBmcm9tICcuLi9fdXRpbHMva2V5Ym9hcmRVdGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemVMaW5rKGVsZW1lbnQpIHtcbiAgLy8gaWYgaXQncyBhbiBhbmNob3IgdGFnLCBmYWxsIGJhY2sgb24gZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yLlxuICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJykge1xuICAgIHJldHVybjsgfVxuICB2YXIgdGFyZ2V0VVJMO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RlcXVlJyk7XG5cbiAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykpIHtcbiAgICB0YXJnZXRVUkwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICB9IGVsc2UgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpKSB7XG4gICAgdGFyZ2V0VVJMID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZnVuY3Rpb24gbmF2aWdhdGVUb0xpbmsoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0VVJMO1xuICB9XG5cbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2xpbmsnKTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5hdmlnYXRlVG9MaW5rKTtcbiAgb25FbGVtZW50RW50ZXIoZWxlbWVudCwgbmF2aWdhdGVUb0xpbmspO1xuICBvbkVsZW1lbnRGMTAoZWxlbWVudCwgKGUpID0+IHtcbiAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgaWYgKHdpbmRvdy5DdXN0b21FdmVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NvbnRleHRtZW51JykpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgICAgICB2YXIgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICAgICAgICBldi5pbml0RXZlbnQoJ2NvbnRleHRtZW51JywgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgICAgfSBlbHNlIHsgLy8gSW50ZXJuZXQgRXhwbG9yZXJcbiAgICAgICAgZWxlbWVudC5maXJlRXZlbnQoJ29uY29udGV4dG1lbnUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpbmsvaW5kZXguanMiLCJpbXBvcnQge29uRWxlbWVudEVudGVyLCBvbkVsZW1lbnRTcGFjZX0gZnJvbSAnLi4vX3V0aWxzL2tleWJvYXJkVXRpbHMnO1xuXG5mdW5jdGlvbiBiaW5kRWxlbWVudFRvSW5wdXRzKGVsZW1lbnQsIGJlaGF2aW9yKSB7XG4gIGlmIChlbGVtZW50LnRhZ05hbWUudG9VcHBlckNhc2UoKSAhPT0gJ0JVVFRPTicpIHtcbiAgICBvbkVsZW1lbnRTcGFjZShlbGVtZW50LCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgYmVoYXZpb3IoZSk7XG4gICAgfSk7XG5cbiAgICBvbkVsZW1lbnRFbnRlcihlbGVtZW50LCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgYmVoYXZpb3IoZSk7XG4gICAgfSk7XG4gIH1cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmVoYXZpb3IpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25Sb2xlSWZOZWNlc3NhcnkoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdidXR0b24nKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplSWNvbihlbGVtZW50KSB7XG4gIHZhciBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBpY29uLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkLW9uLWljb24nKTtcbiAgZWxlbWVudC5pbnNlcnRCZWZvcmUoaWNvbiwgZWxlbWVudC5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVCdXR0b24oZWxlbWVudCwgYmVoYXZpb3IpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkZXF1ZScpO1xuICBhc3NpZ25Sb2xlSWZOZWNlc3NhcnkoZWxlbWVudCk7XG4gIGJpbmRFbGVtZW50VG9JbnB1dHMoZWxlbWVudCwgYmVoYXZpb3IpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVRvZ2dsZUJ1dHRvbihlbGVtZW50LCB0b2dnbGVGdW5jdGlvbiwgaW5pdGlhbFN0YXRlID0gZmFsc2UpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkZXF1ZScpO1xuICBhc3NpZ25Sb2xlSWZOZWNlc3NhcnkoZWxlbWVudCk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCBpbml0aWFsU3RhdGUpO1xuICBpbml0aWFsaXplSWNvbihlbGVtZW50KTtcblxuICBpZiAoIXRvZ2dsZUZ1bmN0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBwcm92aWRlIGEgdG9nZ2xlIGZ1bmN0aW9uIHRvIGEgdG9nZ2xlIGJ1dHRvbi4gSXQgc2hvdWxkIHJldHVybiBcXCd0cnVlXFwnIHdoZW4gdGhlIGJ1dHRvbiBzaG91bGQgaGF2ZSBhIFxcJ3ByZXNzZWRcXCcgc3RhdGUsIGFuZCBcXCdmYWxzZVxcJyBvdGhlcndpc2UuJyk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGUoZSkge1xuICAgIHZhciB0b2dnbGVkT24gPSB0b2dnbGVGdW5jdGlvbihlKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgdG9nZ2xlZE9uID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gIH1cblxuICBiaW5kRWxlbWVudFRvSW5wdXRzKGVsZW1lbnQsIHRvZ2dsZSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnV0dG9uL2luZGV4LmpzIiwiaW1wb3J0IHtjcmVhdGVGaWVsZHNldH0gZnJvbSAnLi4vX3V0aWxzL2NvbnRhaW5lclV0aWxzJztcbmltcG9ydCB7Z2VuZXJhdGVHdWlkfSBmcm9tICcuLi9fdXRpbHMvZ3VpZFV0aWxzJztcbmltcG9ydCB7b25FbGVtZW50U3BhY2V9IGZyb20gJy4uL191dGlscy9rZXlib2FyZFV0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZShlbGVtZW50KSB7XG4gIGlmIChpc1RvZ2dsZWRPbihlbGVtZW50KSkge1xuICAgIHRvZ2dsZU9mZihlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB0b2dnbGVPbihlbGVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb2dnbGVkT24oZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcpID09PSAndHJ1ZSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVPbihlbGVtZW50KSB7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCAndHJ1ZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlT2ZmKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICdmYWxzZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTWl4ZWQoZWxlbWVudCkge1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ21peGVkJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaW5nbGVDaGVja2JveChsYWJlbCwgaWQsIGNsYXNzZXM9W10sIGlzQ2hlY2tlZD1mYWxzZSwgb25DaGFuZ2U9KCkgPT4ge30pIHtcbiAgdmFyIHNwYW5JRCA9IGdlbmVyYXRlR3VpZCgpO1xuXG4gIHZhciBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjaGVja2JveC5pZCA9IGlkO1xuICBjbGFzc2VzLmZvckVhY2goYyA9PiBjaGVja2JveC5jbGFzc0xpc3QuYWRkKGMpKTtcbiAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZGVxdWUnKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgncm9sZScsICdjaGVja2JveCcpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIHNwYW5JRCk7XG5cbiAgdmFyIGluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWluZGljYXRvcicpO1xuXG4gIGNoZWNrYm94LmFwcGVuZENoaWxkKGluZGljYXRvcik7XG5cbiAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uaWQgPSBzcGFuSUQ7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWxhYmVsJyk7XG4gIHNwYW4uaW5uZXJUZXh0ID0gbGFiZWw7XG4gIGNoZWNrYm94LmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIGlmIChpc0NoZWNrZWQpIHtcbiAgICB0b2dnbGVPbihjaGVja2JveCk7XG4gIH0gZWxzZSB7XG4gICAgdG9nZ2xlT2ZmKGNoZWNrYm94KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZUhhbmRsZXIoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRvZ2dsZShjaGVja2JveCk7XG4gICAgYnJvYWRjYXN0Q2hhbmdlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBicm9hZGNhc3RDaGFuZ2UoKSB7XG4gICAgb25DaGFuZ2Uoe2VsZW1lbnQ6IGNoZWNrYm94LCBpc1RvZ2dsZWRPbjogaXNUb2dnbGVkT24oc3Bhbil9KTtcbiAgfVxuXG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlSGFuZGxlcik7XG4gIG9uRWxlbWVudFNwYWNlKGNoZWNrYm94LCBjaGFuZ2VIYW5kbGVyKTtcblxuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XG4gIH0pO1xuXG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xuICB9KTtcblxuICByZXR1cm4gY2hlY2tib3g7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaGVja2JveEdyb3VwKHtncm91cExhYmVsLCB1c2VIVE1MNX0sIHtsYWJlbCwgaWQsIGNsYXNzZXMsIGlzQ2hlY2tlZCwgb25DaGFuZ2V9LCBpdGVtcykge1xuICB2YXIgcm9vdEl0ZW0gPSBjcmVhdGVTaW5nbGVDaGVja2JveChsYWJlbCwgaWQsIGNsYXNzZXMsIGlzQ2hlY2tlZCwgKGUpID0+IHtcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKGUpO1xuICAgIH1cblxuICAgIHJvb3RDbGlja2VkKGdldENvcnJlY3RSb290U3RhdGUoKSk7XG4gIH0pO1xuXG4gIHJvb3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Jvb3RDaGVja2JveCcpO1xuXG4gIGl0ZW1zID0gaXRlbXMubWFwKCh7bGFiZWwsIGlkLCBjbGFzc2VzLCBpc0NoZWNrZWQsIG9uQ2hhbmdlfSkgPT4ge1xuICAgIHJldHVybiBjcmVhdGVTaW5nbGVDaGVja2JveChsYWJlbCwgaWQsIGNsYXNzZXMsIGlzQ2hlY2tlZCwgKGUpID0+IHtcbiAgICAgIG9uQ2hhbmdlKGUpO1xuICAgICAgc2V0Q29ycmVjdFJvb3RTdGF0ZSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBsZXQgcm9vdENsaWNrSGFuZGxlcnMgPSB7XG4gICAgJ3RydWUnOiAoKSA9PiB7XG4gICAgICBpdGVtcy5mb3JFYWNoKHRvZ2dsZU9mZik7XG4gICAgICB0b2dnbGVPZmYocm9vdEl0ZW0pO1xuICAgIH0sXG4gICAgJ2ZhbHNlJzogKCkgPT4ge1xuICAgICAgaXRlbXMuZm9yRWFjaCh0b2dnbGVPbik7XG4gICAgICB0b2dnbGVPbihyb290SXRlbSk7XG4gICAgfSxcbiAgICAnbWl4ZWQnOiAoKSA9PiB7XG4gICAgICBpdGVtcy5mb3JFYWNoKHRvZ2dsZU9uKTtcbiAgICAgIHRvZ2dsZU9uKHJvb3RJdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gcm9vdENsaWNrZWQocm9vdFN0YXRlKSB7XG4gICAgcm9vdENsaWNrSGFuZGxlcnNbcm9vdFN0YXRlXSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29ycmVjdFJvb3RTdGF0ZSgpIHtcbiAgICBpZiAoaXRlbXMuZXZlcnkoaXNUb2dnbGVkT24pKSB7XG4gICAgICByZXR1cm4gJ3RydWUnO1xuICAgIH0gZWxzZSBpZiAoaXRlbXMuZXZlcnkoKGl0ZW0pID0+ICFpc1RvZ2dsZWRPbihpdGVtKSkpIHtcbiAgICAgIHJldHVybiAnZmFsc2UnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ21peGVkJztcbiAgICB9XG4gIH1cblxuICBsZXQgbGVhZkNsaWNrSGFuZGxlcnMgPSB7XG4gICAgJ3RydWUnOiAoKSA9PiB0b2dnbGVPbihyb290SXRlbSksXG4gICAgJ2ZhbHNlJzogKCkgPT4gdG9nZ2xlT2ZmKHJvb3RJdGVtKSxcbiAgICAnbWl4ZWQnOiAoKSA9PiB0b2dnbGVNaXhlZChyb290SXRlbSlcbiAgfTtcblxuICBmdW5jdGlvbiBzZXRDb3JyZWN0Um9vdFN0YXRlKCkge1xuICAgIGxlYWZDbGlja0hhbmRsZXJzW2dldENvcnJlY3RSb290U3RhdGUoKV0oKTtcbiAgfVxuXG4gIHZhciBncm91cCA9IGNyZWF0ZUZpZWxkc2V0KGdyb3VwTGFiZWwpO1xuXG4gIGdyb3VwLmFwcGVuZENoaWxkKHJvb3RJdGVtKTtcbiAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICBncm91cC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfSk7XG5cbiAgZ3JvdXAuY2xhc3NMaXN0LmFkZCgnZGVxdWUnKTtcbiAgZ3JvdXAuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtZ3JvdXAnKTtcbiAgcmV0dXJuIGdyb3VwO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NoZWNrYm94L2luZGV4LmpzIiwiaW1wb3J0IHtnZW5lcmF0ZUd1aWR9IGZyb20gJy4vZ3VpZFV0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRJc0NoaWxkT2ZFbGVtZW50KGNoaWxkLCBwb3RlbnRpYWxQYXJlbnQpIHtcbiAgd2hpbGUgKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkID09PSBwb3RlbnRpYWxQYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNoaWxkID0gY2hpbGQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpZWxkc2V0KGxhYmVsKSB7XG4gIHZhciBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gIHZhciBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbiAgbGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2xlZ2VuZCcpOyAvLyBmb3IgZWFzeSBsb29rdXAgcmVnYXJkbGVzcyBvZiBtb2RlXG4gIGxlZ2VuZC5pZCA9IGdlbmVyYXRlR3VpZCgpO1xuICBsZWdlbmQuaW5uZXJUZXh0ID0gbGFiZWw7XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG4gIHJldHVybiBmaWVsZHNldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpdmVSZWdpb24obGV2ZWwgPSAncG9saXRlJywgY2xhc3NlcyA9IFtdKSB7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4gb3V0cHV0LmNsYXNzTGlzdC5hZGQoYykpO1xuICBvdXRwdXQuaWQgPSBnZW5lcmF0ZUd1aWQoKTtcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgbGV2ZWwpO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHloaWRkZW4nKTtcbiAgb3V0cHV0LmlubmVyVGV4dCA9ICcnO1xuICBvdXRwdXQubm90aWZ5ID0gZnVuY3Rpb24odGV4dCkge1xuICAgIG91dHB1dC5pbm5lclRleHQgPSB0ZXh0O1xuICB9O1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL191dGlscy9jb250YWluZXJVdGlscy5qcyIsImltcG9ydCB7Y3JlYXRlRmllbGRzZXR9IGZyb20gJy4uL191dGlscy9jb250YWluZXJVdGlscyc7XG5pbXBvcnQge0tFWVN9IGZyb20gJy4uL191dGlscy9rZXlib2FyZFV0aWxzJztcbmltcG9ydCB7Y3JlYXRlU2luZ2xlQ2hlY2tib3gsIHRvZ2dsZU9mZiwgdG9nZ2xlT259IGZyb20gJy4uL2NoZWNrYm94JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUmFkaW9Hcm91cCh7bGFiZWwsIHVzZUhUTUw1fSwgaXRlbXMsIG9uQ2hhbmdlKSB7XG4gIHZhciBvdXRwdXQgPSBjcmVhdGVGaWVsZHNldChsYWJlbCk7XG4gIG91dHB1dC5jbGFzc0xpc3QuYWRkKCdkZXF1ZScpO1xuICB2YXIgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZ3JvdXAuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3JhZGlvZ3JvdXAnKTtcblxuICBsZXQgbGVnZW5kSUQgPSBvdXRwdXQucXVlcnlTZWxlY3RvcignLmxlZ2VuZCcpLmlkO1xuICBncm91cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGxlZ2VuZElEKTtcblxuICB2YXIgY3VycmVudEZvY3VzID0gMDtcbiAgb3V0cHV0LmFwcGVuZENoaWxkKGdyb3VwKTtcblxuICBmdW5jdGlvbiBoYW5kbGVGb2N1cyhlKSB7XG4gICAgbGV0IGluZGV4ID0gZS50YXJnZXQuaWQuc3BsaXQoJ18nKVsxXTtcbiAgICBjdXJyZW50Rm9jdXMgPSBwYXJzZUludChpbmRleCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVLZXlkb3duKGUpIHtcbiAgICB2YXIga2V5ID0gZS53aGljaDtcbiAgICBpZihrZXkgPT09IEtFWVMuUklHSFQgfHwga2V5ID09PSBLRVlTLkRPV04pIHtcbiAgICAgIGZvY3VzTmV4dChlKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gS0VZUy5MRUZUIHx8IGtleSA9PT0gS0VZUy5VUCkge1xuICAgICAgZm9jdXNQcmV2KGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFVuaXF1ZVRvZ2dsZShidXR0b24pIHtcbiAgICBidXR0b25zLmZvckVhY2goYiA9PiB7XG4gICAgICAoYiA9PT0gYnV0dG9uKSA/IHRvZ2dsZU9uKGIpIDogdG9nZ2xlT2ZmKGIpO1xuICAgICAgYi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgKGIgPT09IGJ1dHRvbikgPyAnMCcgOiAnLTEnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvY3VzUHJldihlKSB7XG4gICAgaWYgKGJ1dHRvbnNbY3VycmVudEZvY3VzIC0gMV0pIHtcbiAgICAgIGJ1dHRvbnNbLS1jdXJyZW50Rm9jdXNdLmZvY3VzKCk7XG4gICAgfVxuICAgIGJ1dHRvbnNbY3VycmVudEZvY3VzXS5jbGljaygpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9jdXNOZXh0KGUpIHtcbiAgICBpZiAoYnV0dG9uc1tjdXJyZW50Rm9jdXMgKyAxXSkge1xuICAgICAgYnV0dG9uc1srK2N1cnJlbnRGb2N1c10uZm9jdXMoKTtcbiAgICB9XG4gICAgYnV0dG9uc1tjdXJyZW50Rm9jdXNdLmNsaWNrKCk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuXG4gIHZhciBidXR0b25zID0gaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIHZhciBidXR0b24gPSBjcmVhdGVTaW5nbGVDaGVja2JveChpdGVtLCBsYWJlbCArICdfJyArIGluZGV4LCBbXSwgZmFsc2UsIChlKSA9PiB7XG4gICAgICAvLyBub3RlIHRoYXQgd2UgYXJlIGlnbm9yaW5nIGUuaXNUb2dnbGVkT24gLSB3ZSBhcmUgdXNpbmcgY2hlY2tib3hlc1xuICAgICAgLy8gdG8gaW1wbGVtZW50IHJhZGlvIGJ1dHRvbnMsIHNvIHdlIGRvbid0IHRvZ2dsZSBpdCBvbiBjbGljay4gV2UgbWFudWFsbHlcbiAgICAgIC8vIG92ZXJyaWRlIHRoZSB0b2dnbGUgc3RhdGUgYnkgY2FsbGluZyB0b2dnbGVPbigpIG9yIHRvZ2dsZU9mZigpIGV4cGxpY2l0bHkuXG4gICAgICBzZXRVbmlxdWVUb2dnbGUoZS5lbGVtZW50KTtcblxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdyYWRpbycpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9KTtcblxuICBidXR0b25zWzBdLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuXG4gIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGdyb3VwLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5ZG93bik7XG4gIH0pO1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmFkaW8vaW5kZXguanMiLCJpbXBvcnQge2ZvY3VzT25Ob2RlLCBzZWxlY3ROb2RlfSBmcm9tICcuL05vZGVVdGlscy5qcyc7XG5pbXBvcnQgbm9TZWxlY3RCZWhhdmlvciBmcm9tICcuL3NlbGVjdGlvbk1vZGVzL25vU2VsZWN0aW9uJztcbmltcG9ydCBzaW5nbGVTZWxlY3RCZWhhdmlvciBmcm9tICcuL3NlbGVjdGlvbk1vZGVzL3NpbmdsZVNlbGVjdGlvbic7XG5pbXBvcnQgbXVsdGlTZWxlY3RCZWhhdmlvciBmcm9tICcuL3NlbGVjdGlvbk1vZGVzL211bHRpU2VsZWN0aW9uJztcbmltcG9ydCB7Z2VuZXJhdGVHdWlkfSBmcm9tICcuLi9fdXRpbHMvZ3VpZFV0aWxzJztcblxuY29uc3QgYmVoYXZpb3JzID0ge1xuICBkZWZhdWx0OiBub1NlbGVjdEJlaGF2aW9yLFxuICBzaW5nbGU6IHNpbmdsZVNlbGVjdEJlaGF2aW9yLFxuICBtdWx0aTogbXVsdGlTZWxlY3RCZWhhdmlvclxufTtcblxudmFyIG5vZGVCdWlsZGVycyA9IHtcbiAgbGluazogZnVuY3Rpb24oaXRlbSkge1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgndHJlZWxhYmVsJyk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBpdGVtLnVybCk7XG4gICAgbm9kZS5pbm5lclRleHQgPSBpdGVtLmxhYmVsO1xuICAgIHJldHVybiBub2RlO1xuICB9LFxuICBzcGFuOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCd0cmVlbGFiZWwnKTtcbiAgICBub2RlLmlubmVyVGV4dCA9IGl0ZW0ubGFiZWw7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vZGUoaXRlbSkge1xuICB2YXIgYnVpbGRlciA9IG5vZGVCdWlsZGVyc1tpdGVtLnR5cGVdIHx8IG5vZGVCdWlsZGVycy5zcGFuO1xuICByZXR1cm4gYnVpbGRlcihpdGVtKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5kaWNhdG9yKGl0ZW0pIHtcbiAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2JyYW5jaCcpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnbGVhZicpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIG1hcERhdGFUb0VsZW1lbnQodHJlZUlELCBpdGVtLCBjb25maWcpIHtcbiAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3RyZWVpdGVtJyk7XG4gIGxpLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGl0ZW0ubGFiZWwpO1xuXG4gIGxpLmFwcGVuZENoaWxkKGNyZWF0ZUluZGljYXRvcihpdGVtKSk7XG4gIGxpLmFwcGVuZENoaWxkKGNyZWF0ZU5vZGUoaXRlbSkpO1xuICBsaS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gIGxpLnNldEF0dHJpYnV0ZSgnZGF0YS10cmVlLXJvb3QnLCB0cmVlSUQpO1xuXG4gIGxldCBiZWhhdmlvciA9IGJlaGF2aW9yc1tjb25maWcuc2VsZWN0U3R5bGVdIHx8IGJlaGF2aW9ycy5kZWZhdWx0O1xuICBiZWhhdmlvcihsaSk7XG5cbiAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICBsaS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblxuICAgIHZhciB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2dyb3VwJyk7XG5cbiAgICBpdGVtXG4gICAgICAuY2hpbGRyZW5cbiAgICAgIC5tYXAoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBtYXBEYXRhVG9FbGVtZW50KHRyZWVJRCwgaXRlbSwgY29uZmlnKTtcbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9KTtcblxuICAgIGxpLmFwcGVuZENoaWxkKHVsKTtcbiAgfVxuXG4gIHJldHVybiBsaTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVHJlZShjb25maWcsIGRhdGEpIHtcbiAgdmFyIHJvb3RJRCA9IGdlbmVyYXRlR3VpZCgpO1xuICB2YXIgaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbGRlci5pZCA9IHJvb3RJRDtcblxuICB2YXIgdHJlZVJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gIHRyZWVSb290LnNldEF0dHJpYnV0ZSgncm9sZScsICd0cmVlJyk7XG4gIHRyZWVSb290LmNsYXNzTGlzdC5hZGQoJ2RlcXVlJyk7XG5cbiAgaWYgKGNvbmZpZy5zZWxlY3RTdHlsZSA9PT0gJ211bHRpJykge1xuICAgIHRyZWVSb290LnNldEF0dHJpYnV0ZSgnYXJpYS1tdWx0aXNlbGVjdGFibGUnLCAndHJ1ZScpO1xuICB9XG5cbiAgdmFyIGluaXRpYWxOb2RlID0gbWFwRGF0YVRvRWxlbWVudChyb290SUQsIGRhdGEsIGNvbmZpZyk7XG4gIHRyZWVSb290LmFwcGVuZENoaWxkKGluaXRpYWxOb2RlKTtcbiAgaG9sZGVyLmFwcGVuZENoaWxkKHRyZWVSb290KTtcblxuICBmb2N1c09uTm9kZShpbml0aWFsTm9kZSk7XG5cbiAgaWYgKGNvbmZpZy5zZWxlY3RTdHlsZSkge1xuICAgIHNlbGVjdE5vZGUoaW5pdGlhbE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGhvbGRlcjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90cmVlL2luZGV4LmpzIiwiaW1wb3J0IHtxdWVyeUFsbH0gZnJvbSAnLi4vX3V0aWxzL3NlbGVjdGlvblV0aWxzJztcblxuLyogdXNlZCBvbmx5IGludGVybmFsbHkgKi9cbmZ1bmN0aW9uIGdldE5leHROb2RlSW5TZXF1ZW5jZShub2RlLCBzZXF1ZW5jZSkge1xuICB2YXIgcmV0dXJuTmV4dE9uZSA9IGZhbHNlO1xuICByZXR1cm4gc2VxdWVuY2UucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xuICAgIGlmIChhY2MpIHsgcmV0dXJuIGFjYzsgfVxuICAgIGlmIChyZXR1cm5OZXh0T25lKSB7IHJldHVybiB2YWw7IH1cbiAgICBpZiAobm9kZSA9PT0gdmFsKSB7IHJldHVybk5leHRPbmUgPSB0cnVlOyB9XG4gIH0sIG51bGwpIHx8IG5vZGU7XG59XG5cbmZ1bmN0aW9uIGdldEFsbFRyZWVOb2Rlcyh0cmVlSUQpIHtcbiAgcmV0dXJuIHF1ZXJ5QWxsKGAjJHt0cmVlSUR9IFtyb2xlPVwidHJlZWl0ZW1cIl1gKTtcbn1cblxuLyogcHVibGljIEFQSSBzdGFydHMgaGVyZSAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzQ2hpbGRyZW4obm9kZSkge1xuICByZXR1cm4gbm9kZS5oYXNBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT3Blbihub2RlKSB7XG4gIHJldHVybiBub2RlLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290Tm9kZSh0cmVlSUQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RyZWVJRH0gPiB1bCA+IFtyb2xlPSd0cmVlaXRlbSddYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaXNpYmxlTm9kZXModHJlZUlEKSB7XG4gIHZhciBvdXRwdXQgPSBbZ2V0Um9vdE5vZGUodHJlZUlEKV07XG4gIHZhciBub2RlcyA9IHF1ZXJ5QWxsKGAjJHt0cmVlSUR9IFthcmlhLWV4cGFuZGVkPSd0cnVlJ10gPiB1bCA+IFtyb2xlPSd0cmVlaXRlbSddYCk7XG4gIHJldHVybiBvdXRwdXQuY29uY2F0KG5vZGVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpb3VzVmlzaWJsZU5vZGUobm9kZSkge1xuICB2YXIgdHJlZUlEID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJlZS1yb290Jyk7XG4gIHZhciBub2RlcyA9IGdldFZpc2libGVOb2Rlcyh0cmVlSUQpO1xuXG4gIHJldHVybiBnZXROZXh0Tm9kZUluU2VxdWVuY2Uobm9kZSwgbm9kZXMucmV2ZXJzZSgpKSB8fCBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dFZpc2libGVOb2RlKG5vZGUpIHtcbiAgdmFyIHRyZWVJRCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRyZWUtcm9vdCcpO1xuICB2YXIgbm9kZXMgPSBnZXRWaXNpYmxlTm9kZXModHJlZUlEKTtcbiAgcmV0dXJuIGdldE5leHROb2RlSW5TZXF1ZW5jZShub2RlLCBub2RlcykgfHwgbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvY3VzT25Ob2RlKG5vZGUpIHtcbiAgdmFyIHRyZWVJRCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRyZWUtcm9vdCcpO1xuXG4gIGdldEFsbFRyZWVOb2Rlcyh0cmVlSUQpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gIH0pO1xuXG4gIG5vZGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gIG5vZGUuZm9jdXMoKTtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU5vZGUobm9kZSkge1xuICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Ob2RlKG5vZGUpIHtcbiAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0Q2hpbGQobm9kZSkge1xuICByZXR1cm4gbm9kZS5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cInRyZWVpdGVtXCJdJykgfHwgbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudChub2RlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ3RyZWVpdGVtJykge1xuICAgIHJldHVybiBub2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dFNpYmxpbmcobm9kZSkge1xuICByZXR1cm4gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmcgfHwgbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpb3VzU2libGluZyhub2RlKSB7XG4gIHJldHVybiBub2RlLnByZXZpb3VzU2libGluZyB8fCBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0Tm9kZShub2RlLCBtdWx0aW1vZGUpIHtcbiAgdmFyIHRyZWVJRCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRyZWUtcm9vdCcpO1xuXG4gIGdldEFsbFRyZWVOb2Rlcyh0cmVlSUQpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKG5vZGUgPT09IGl0ZW0pIHtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICB9IGVsc2UgaWYgKG11bHRpbW9kZSkge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIG5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROb2RlVG9TZWxlY3Rpb24obm9kZSkge1xuICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NlbGVjdGVkKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykgPT09ICd0cnVlJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZU5vZGVTZWxlY3Rpb24obm9kZSwgbXVsdGltb2RlKSB7XG4gIGlmIChub2RlLmdldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpID09PSAndHJ1ZScpIHtcbiAgICBpZiAobXVsdGltb2RlKSB7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpO1xuICAgIH1cblxuXG4gIH0gZWxzZSB7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RyZWUvTm9kZVV0aWxzLmpzIiwiaW1wb3J0ICogYXMgS2V5Ym9hcmRVdGlscyBmcm9tICcuLi8uLi9fdXRpbHMva2V5Ym9hcmRVdGlscyc7XG5pbXBvcnQgKiBhcyBOb2RlVXRpbHMgZnJvbSAnLi4vTm9kZVV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwbHlMb2dpYyhub2RlKSB7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKE5vZGVVdGlscy5pc09wZW4obm9kZSkpIHtcbiAgICAgIE5vZGVVdGlscy5jbG9zZU5vZGUobm9kZSk7XG4gICAgfSBlbHNlIGlmIChOb2RlVXRpbHMuaGFzQ2hpbGRyZW4obm9kZSkpIHtcbiAgICAgIE5vZGVVdGlscy5vcGVuTm9kZShub2RlKTtcbiAgICB9XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50RW50ZXIobm9kZSwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGxldCBhY3RpdmF0ZWFibGU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IG5vZGUuY2hpbGRyZW5baV07XG4gICAgICBpZiAoaXRlbS50YWdOYW1lID09PSAnQScgfHwgaXRlbS50YWdOYW1lID09PSAnQlVUVE9OJykge1xuICAgICAgICBhY3RpdmF0ZWFibGUgPSBpdGVtO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZhdGVhYmxlKSB7XG4gICAgICBsZXQgY2xpY2sgPSBuZXcgTW91c2VFdmVudCgnY2xpY2snKTtcbiAgICAgIGFjdGl2YXRlYWJsZS5kaXNwYXRjaEV2ZW50KGNsaWNrKTtcbiAgICB9XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50Q2hhcmFjdGVyKG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB2YXIgY2hhcmFjdGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b1VwcGVyQ2FzZSgpO1xuICAgIHZhciBub2RlcyA9IE5vZGVVdGlscy5nZXRWaXNpYmxlTm9kZXMobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJlZS1yb290JykpO1xuXG4gICAgdmFyIHRoaXNGb3VuZCA9IGZhbHNlO1xuICAgIHZhciB0YXJnZXQgPSBub2Rlcy5maWx0ZXIoaXRlbSA9PiB7ICAgICAgICAgICAvLyBkaXNjYXJkICdwcmV2aW91cycgbm9kZXM6XG4gICAgICBpZiAodGhpc0ZvdW5kKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICBpZiAoaXRlbSA9PT0gbm9kZSkgeyB0aGlzRm91bmQgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkucmVkdWNlKChhY2MsIHZhbCkgPT4geyAgICAgICAgICAgICAgICAgICAgIC8vIGdyYWIgbmV4dCBvbmUgc3RhcnRpbmcgd2l0aCBjaGFyXG4gICAgICBpZiAoYWNjKSB7IHJldHVybiBhY2M7IH1cbiAgICAgIGlmICh2YWwuaW5uZXJUZXh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpID09PSBjaGFyYWN0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH1cbiAgICB9LCBudWxsKTtcblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZSh0YXJnZXQpO1xuICAgIH1cbiAgfSk7XG5cbiAgS2V5Ym9hcmRVdGlscy5vbkVsZW1lbnRIb21lKG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IHRhcmdldCA9IE5vZGVVdGlscy5nZXRSb290Tm9kZShub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10cmVlLXJvb3QnKSk7XG4gICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKHRhcmdldCk7XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50RW5kKG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdmFyIG5vZGVzID0gTm9kZVV0aWxzLmdldFZpc2libGVOb2Rlcyhub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10cmVlLXJvb3QnKSk7XG4gICAgdmFyIHRhcmdldCA9IG5vZGVzLnJldmVyc2UoKVswXTtcbiAgICBOb2RlVXRpbHMuZm9jdXNPbk5vZGUodGFyZ2V0KTtcbiAgfSk7XG5cbiAgS2V5Ym9hcmRVdGlscy5vbkVsZW1lbnREb3duKG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdmFyIHNpYmxpbmcgPSBOb2RlVXRpbHMuZ2V0TmV4dFZpc2libGVOb2RlKG5vZGUpO1xuICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZShzaWJsaW5nKTtcbiAgfSk7XG5cbiAgS2V5Ym9hcmRVdGlscy5vbkVsZW1lbnRVcChub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHZhciBzaWJsaW5nID0gTm9kZVV0aWxzLmdldFByZXZpb3VzVmlzaWJsZU5vZGUobm9kZSk7XG4gICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKHNpYmxpbmcpO1xuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudFJpZ2h0KG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoTm9kZVV0aWxzLmhhc0NoaWxkcmVuKG5vZGUpICYmICFOb2RlVXRpbHMuaXNPcGVuKG5vZGUpKSB7XG4gICAgICBOb2RlVXRpbHMub3Blbk5vZGUobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjaGlsZCA9IE5vZGVVdGlscy5nZXRGaXJzdENoaWxkKG5vZGUpO1xuICAgICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKGNoaWxkKTtcbiAgICB9XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50TGVmdChub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKCFOb2RlVXRpbHMuaGFzQ2hpbGRyZW4obm9kZSkgfHwgIU5vZGVVdGlscy5pc09wZW4obm9kZSkpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBOb2RlVXRpbHMuZ2V0UGFyZW50KG5vZGUpO1xuICAgICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKHBhcmVudCk7XG5cbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5vZGVVdGlscy5jbG9zZU5vZGUobm9kZSk7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90cmVlL3NlbGVjdGlvbk1vZGVzL25vU2VsZWN0aW9uLmpzIiwiaW1wb3J0ICogYXMgS2V5Ym9hcmRVdGlscyBmcm9tICcuLi8uLi9fdXRpbHMva2V5Ym9hcmRVdGlscyc7XG5pbXBvcnQgKiBhcyBOb2RlVXRpbHMgZnJvbSAnLi4vTm9kZVV0aWxzJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBseUxvZ2ljKG5vZGUpIHtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBOb2RlVXRpbHMuZm9jdXNPbk5vZGUobm9kZSk7XG4gICAgTm9kZVV0aWxzLnNlbGVjdE5vZGUobm9kZSk7XG5cbiAgICBpZiAoTm9kZVV0aWxzLmlzT3Blbihub2RlKSkge1xuICAgICAgTm9kZVV0aWxzLmNsb3NlTm9kZShub2RlKTtcbiAgICB9IGVsc2UgaWYgKE5vZGVVdGlscy5oYXNDaGlsZHJlbihub2RlKSkge1xuICAgICAgTm9kZVV0aWxzLm9wZW5Ob2RlKG5vZGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgS2V5Ym9hcmRVdGlscy5vbkVsZW1lbnRFbnRlcihub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgbGV0IGFjdGl2YXRlYWJsZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gbm9kZS5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChpdGVtLnRhZ05hbWUgPT09ICdBJyB8fCBpdGVtLnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgICAgIGFjdGl2YXRlYWJsZSA9IGl0ZW07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3RpdmF0ZWFibGUpIHtcbiAgICAgIGxldCBjbGljayA9IG5ldyBNb3VzZUV2ZW50KCdjbGljaycpO1xuICAgICAgYWN0aXZhdGVhYmxlLmRpc3BhdGNoRXZlbnQoY2xpY2spO1xuICAgIH1cbiAgfSk7XG5cbiAgS2V5Ym9hcmRVdGlscy5vbkVsZW1lbnRTcGFjZShub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChlLmN0cmxLZXkpIHtcbiAgICAgIE5vZGVVdGlscy50b2dnbGVOb2RlU2VsZWN0aW9uKG5vZGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgS2V5Ym9hcmRVdGlscy5vbkVsZW1lbnRDaGFyYWN0ZXIobm9kZSwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHZhciBjaGFyYWN0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpLnRvVXBwZXJDYXNlKCk7XG4gICAgdmFyIG5vZGVzID0gTm9kZVV0aWxzLmdldFZpc2libGVOb2Rlcyhub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10cmVlLXJvb3QnKSk7XG5cbiAgICB2YXIgdGhpc0ZvdW5kID0gZmFsc2U7XG4gICAgdmFyIHRhcmdldCA9IG5vZGVzLmZpbHRlcihpdGVtID0+IHsgICAgICAgICAgIC8vIGRpc2NhcmQgJ3ByZXZpb3VzJyBub2RlczpcbiAgICAgIGlmICh0aGlzRm91bmQpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgIGlmIChpdGVtID09PSBub2RlKSB7IHRoaXNGb3VuZCA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KS5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7ICAgICAgICAgICAgICAgICAgICAgLy8gZ3JhYiBuZXh0IG9uZSBzdGFydGluZyB3aXRoIGNoYXJcbiAgICAgIGlmIChhY2MpIHsgcmV0dXJuIGFjYzsgfVxuICAgICAgaWYgKHZhbC5pbm5lclRleHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgPT09IGNoYXJhY3Rlcikge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgIH0sIG51bGwpO1xuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKHRhcmdldCk7XG4gICAgICBOb2RlVXRpbHMuc2VsZWN0Tm9kZSh0YXJnZXQpO1xuICAgIH1cbiAgfSk7XG5cbiAgS2V5Ym9hcmRVdGlscy5vbkVsZW1lbnRIb21lKG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IHRhcmdldCA9IE5vZGVVdGlscy5nZXRSb290Tm9kZShub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10cmVlLXJvb3QnKSk7XG4gICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKHRhcmdldCk7XG4gICAgTm9kZVV0aWxzLnNlbGVjdE5vZGUodGFyZ2V0KTtcbiAgfSk7XG5cbiAgS2V5Ym9hcmRVdGlscy5vbkVsZW1lbnRFbmQobm9kZSwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB2YXIgbm9kZXMgPSBOb2RlVXRpbHMuZ2V0VmlzaWJsZU5vZGVzKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRyZWUtcm9vdCcpKTtcbiAgICB2YXIgdGFyZ2V0ID0gbm9kZXMucmV2ZXJzZSgpWzBdO1xuICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZSh0YXJnZXQpO1xuICAgIE5vZGVVdGlscy5zZWxlY3ROb2RlKHRhcmdldCk7XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50RG93bihub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHZhciBzaWJsaW5nID0gTm9kZVV0aWxzLmdldE5leHRWaXNpYmxlTm9kZShub2RlKTtcbiAgICBOb2RlVXRpbHMuZm9jdXNPbk5vZGUoc2libGluZyk7XG5cbiAgICBpZiAoIWUuY3RybEtleSkge1xuICAgICAgTm9kZVV0aWxzLnNlbGVjdE5vZGUoc2libGluZyk7XG4gICAgfVxuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudFVwKG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdmFyIHNpYmxpbmcgPSBOb2RlVXRpbHMuZ2V0UHJldmlvdXNWaXNpYmxlTm9kZShub2RlKTtcbiAgICBOb2RlVXRpbHMuZm9jdXNPbk5vZGUoc2libGluZyk7XG5cbiAgICBpZiAoIWUuY3RybEtleSkge1xuICAgICAgTm9kZVV0aWxzLnNlbGVjdE5vZGUoc2libGluZyk7XG4gICAgfVxuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudFJpZ2h0KG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoTm9kZVV0aWxzLmhhc0NoaWxkcmVuKG5vZGUpICYmICFOb2RlVXRpbHMuaXNPcGVuKG5vZGUpKSB7XG4gICAgICBOb2RlVXRpbHMub3Blbk5vZGUobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjaGlsZCA9IE5vZGVVdGlscy5nZXRGaXJzdENoaWxkKG5vZGUpO1xuICAgICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKGNoaWxkKTtcblxuICAgICAgaWYgKCFlLmN0cmxLZXkpIHtcbiAgICAgICAgTm9kZVV0aWxzLnNlbGVjdE5vZGUoY2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgS2V5Ym9hcmRVdGlscy5vbkVsZW1lbnRMZWZ0KG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoIU5vZGVVdGlscy5oYXNDaGlsZHJlbihub2RlKSB8fCAhTm9kZVV0aWxzLmlzT3Blbihub2RlKSkge1xuICAgICAgdmFyIHBhcmVudCA9IE5vZGVVdGlscy5nZXRQYXJlbnQobm9kZSk7XG4gICAgICBOb2RlVXRpbHMuZm9jdXNPbk5vZGUocGFyZW50KTtcblxuICAgICAgaWYgKCFlLmN0cmxLZXkpIHtcbiAgICAgICAgTm9kZVV0aWxzLnNlbGVjdE5vZGUocGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gTm9kZVV0aWxzLmNsb3NlTm9kZShub2RlKTtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RyZWUvc2VsZWN0aW9uTW9kZXMvc2luZ2xlU2VsZWN0aW9uLmpzIiwiaW1wb3J0ICogYXMgS2V5Ym9hcmRVdGlscyBmcm9tICcuLi8uLi9fdXRpbHMva2V5Ym9hcmRVdGlscyc7XG5pbXBvcnQgKiBhcyBOb2RlVXRpbHMgZnJvbSAnLi4vTm9kZVV0aWxzJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBseUxvZ2ljKG5vZGUpIHtcbiAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcblxuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChOb2RlVXRpbHMuaXNPcGVuKG5vZGUpKSB7XG4gICAgICBOb2RlVXRpbHMuY2xvc2VOb2RlKG5vZGUpO1xuICAgIH0gZWxzZSBpZiAoTm9kZVV0aWxzLmhhc0NoaWxkcmVuKG5vZGUpKSB7XG4gICAgICBOb2RlVXRpbHMub3Blbk5vZGUobm9kZSk7XG4gICAgfVxuXG4gICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKG5vZGUpO1xuICAgIE5vZGVVdGlscy5zZWxlY3ROb2RlKG5vZGUsIHRydWUpO1xuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudEVudGVyKG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBsZXQgYWN0aXZhdGVhYmxlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSBub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGl0ZW0udGFnTmFtZSA9PT0gJ0EnIHx8IGl0ZW0udGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgICAgYWN0aXZhdGVhYmxlID0gaXRlbTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2YXRlYWJsZSkge1xuICAgICAgbGV0IGNsaWNrID0gbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJyk7XG4gICAgICBhY3RpdmF0ZWFibGUuZGlzcGF0Y2hFdmVudChjbGljayk7XG4gICAgfVxuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudFNwYWNlKG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKGUuY3RybEtleSkge1xuICAgICAgTm9kZVV0aWxzLnRvZ2dsZU5vZGVTZWxlY3Rpb24obm9kZSwgdHJ1ZSk7XG4gICAgfVxuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudENoYXJhY3Rlcihub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdmFyIGNoYXJhY3RlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkudG9VcHBlckNhc2UoKTtcbiAgICB2YXIgbm9kZXMgPSBOb2RlVXRpbHMuZ2V0VmlzaWJsZU5vZGVzKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRyZWUtcm9vdCcpKTtcblxuICAgIHZhciB0aGlzRm91bmQgPSBmYWxzZTtcbiAgICB2YXIgdGFyZ2V0ID0gbm9kZXMuZmlsdGVyKGl0ZW0gPT4geyAgICAgICAgICAgLy8gZGlzY2FyZCAncHJldmlvdXMnIG5vZGVzOlxuICAgICAgaWYgKHRoaXNGb3VuZCkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgaWYgKGl0ZW0gPT09IG5vZGUpIHsgdGhpc0ZvdW5kID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pLnJlZHVjZSgoYWNjLCB2YWwpID0+IHsgICAgICAgICAgICAgICAgICAgICAvLyBncmFiIG5leHQgb25lIHN0YXJ0aW5nIHdpdGggY2hhclxuICAgICAgaWYgKGFjYykgeyByZXR1cm4gYWNjOyB9XG4gICAgICBpZiAodmFsLmlubmVyVGV4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSA9PT0gY2hhcmFjdGVyKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9XG4gICAgfSwgbnVsbCk7XG5cbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICBOb2RlVXRpbHMuZm9jdXNPbk5vZGUodGFyZ2V0KTtcbiAgICAgIE5vZGVVdGlscy5zZWxlY3ROb2RlKHRhcmdldCwgdHJ1ZSk7XG4gICAgfVxuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudEhvbWUobm9kZSwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgdGFyZ2V0ID0gTm9kZVV0aWxzLmdldFJvb3ROb2RlKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRyZWUtcm9vdCcpKTtcbiAgICBOb2RlVXRpbHMuZm9jdXNPbk5vZGUodGFyZ2V0KTtcblxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICB2YXIgY3VycmVudCA9IE5vZGVVdGlscy5nZXRQcmV2aW91c1Zpc2libGVOb2RlKG5vZGUpO1xuICAgICAgaWYgKGN1cnJlbnQuZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykgPT09IG5vZGUuZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykpIHtcbiAgICAgICAgTm9kZVV0aWxzLnRvZ2dsZU5vZGVTZWxlY3Rpb24obm9kZSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlIChjdXJyZW50ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgTm9kZVV0aWxzLnRvZ2dsZU5vZGVTZWxlY3Rpb24oY3VycmVudCwgdHJ1ZSk7XG4gICAgICAgIGN1cnJlbnQgPSBOb2RlVXRpbHMuZ2V0UHJldmlvdXNWaXNpYmxlTm9kZShjdXJyZW50KTtcbiAgICAgIH1cblxuICAgICAgTm9kZVV0aWxzLnRvZ2dsZU5vZGVTZWxlY3Rpb24odGFyZ2V0LCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTm9kZVV0aWxzLnNlbGVjdE5vZGUodGFyZ2V0LCB0cnVlKTtcbiAgICB9XG5cblxuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudEVuZChub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHZhciBub2RlcyA9IE5vZGVVdGlscy5nZXRWaXNpYmxlTm9kZXMobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJlZS1yb290JykpO1xuICAgIHZhciB0YXJnZXQgPSBub2Rlcy5yZXZlcnNlKClbMF07XG4gICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKHRhcmdldCk7XG5cbiAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgdmFyIGN1cnJlbnQgPSBOb2RlVXRpbHMuZ2V0TmV4dFZpc2libGVOb2RlKG5vZGUpO1xuXG4gICAgICBpZiAoY3VycmVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKSA9PT0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKSkge1xuICAgICAgICBOb2RlVXRpbHMudG9nZ2xlTm9kZVNlbGVjdGlvbihub2RlLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKGN1cnJlbnQgIT09IHRhcmdldCkge1xuICAgICAgICBOb2RlVXRpbHMudG9nZ2xlTm9kZVNlbGVjdGlvbihjdXJyZW50LCB0cnVlKTtcbiAgICAgICAgY3VycmVudCA9IE5vZGVVdGlscy5nZXROZXh0VmlzaWJsZU5vZGUoY3VycmVudCk7XG4gICAgICB9XG5cbiAgICAgIE5vZGVVdGlscy50b2dnbGVOb2RlU2VsZWN0aW9uKHRhcmdldCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE5vZGVVdGlscy5zZWxlY3ROb2RlKHRhcmdldCwgdHJ1ZSk7XG4gICAgfVxuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudERvd24obm9kZSwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB2YXIgc2libGluZyA9IE5vZGVVdGlscy5nZXROZXh0VmlzaWJsZU5vZGUobm9kZSk7XG4gICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKHNpYmxpbmcpO1xuXG4gICAgaWYgKGUuY3RybEtleSkgeyByZXR1cm47IH1cbiAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgaWYgKHNpYmxpbmcuZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykgPT09IG5vZGUuZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykpIHtcbiAgICAgICAgcmV0dXJuIE5vZGVVdGlscy50b2dnbGVOb2RlU2VsZWN0aW9uKG5vZGUsIHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIE5vZGVVdGlscy50b2dnbGVOb2RlU2VsZWN0aW9uKHNpYmxpbmcsIHRydWUpO1xuICAgIH1cblxuICAgIE5vZGVVdGlscy5zZWxlY3ROb2RlKHNpYmxpbmcsIHRydWUpO1xuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudFVwKG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdmFyIHNpYmxpbmcgPSBOb2RlVXRpbHMuZ2V0UHJldmlvdXNWaXNpYmxlTm9kZShub2RlKTtcbiAgICBOb2RlVXRpbHMuZm9jdXNPbk5vZGUoc2libGluZyk7XG5cbiAgICBpZiAoZS5jdHJsS2V5KSB7IHJldHVybjsgfVxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICBpZiAoc2libGluZy5nZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKSA9PT0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKSkge1xuICAgICAgICByZXR1cm4gTm9kZVV0aWxzLnRvZ2dsZU5vZGVTZWxlY3Rpb24obm9kZSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBOb2RlVXRpbHMudG9nZ2xlTm9kZVNlbGVjdGlvbihzaWJsaW5nLCB0cnVlKTtcbiAgICB9XG5cbiAgICBOb2RlVXRpbHMuc2VsZWN0Tm9kZShzaWJsaW5nLCB0cnVlKTtcbiAgfSk7XG5cbiAgS2V5Ym9hcmRVdGlscy5vbkVsZW1lbnRSaWdodChub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKE5vZGVVdGlscy5oYXNDaGlsZHJlbihub2RlKSAmJiAhTm9kZVV0aWxzLmlzT3Blbihub2RlKSkge1xuICAgICAgTm9kZVV0aWxzLm9wZW5Ob2RlKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hpbGQgPSBOb2RlVXRpbHMuZ2V0Rmlyc3RDaGlsZChub2RlKTtcbiAgICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZShjaGlsZCk7XG5cbiAgICAgIGlmIChlLmN0cmxLZXkpIHsgcmV0dXJuOyB9XG4gICAgICBpZiAoZS5zaGlmdEtleSkgeyByZXR1cm4gTm9kZVV0aWxzLmFkZE5vZGVUb1NlbGVjdGlvbihjaGlsZCk7IH1cblxuICAgICAgTm9kZVV0aWxzLnNlbGVjdE5vZGUoY2hpbGQsIHRydWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgS2V5Ym9hcmRVdGlscy5vbkVsZW1lbnRMZWZ0KG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoIU5vZGVVdGlscy5oYXNDaGlsZHJlbihub2RlKSB8fCAhTm9kZVV0aWxzLmlzT3Blbihub2RlKSkge1xuICAgICAgdmFyIHBhcmVudCA9IE5vZGVVdGlscy5nZXRQYXJlbnQobm9kZSk7XG4gICAgICBOb2RlVXRpbHMuZm9jdXNPbk5vZGUocGFyZW50KTtcblxuICAgICAgaWYgKGUuY3RybEtleSkgeyByZXR1cm47IH1cbiAgICAgIGlmIChlLnNoaWZ0S2V5KSB7IHJldHVybiBOb2RlVXRpbHMuYWRkTm9kZVRvU2VsZWN0aW9uKHBhcmVudCk7IH1cblxuICAgICAgcmV0dXJuIE5vZGVVdGlscy5zZWxlY3ROb2RlKHBhcmVudCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5vZGVVdGlscy5jbG9zZU5vZGUobm9kZSk7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90cmVlL3NlbGVjdGlvbk1vZGVzL211bHRpU2VsZWN0aW9uLmpzIiwiaW1wb3J0IGFwcGx5TmF2aWdhdGlvbkxvZ2ljIGZyb20gJy4vbmF2aWdhdGlvbkxvZ2ljJztcbmltcG9ydCBidWlsZE1lbnVJdGVtIGZyb20gJy4vYnVpbGRNZW51SXRlbSc7XG5pbXBvcnQge2NyZWF0ZUZpZWxkc2V0fSBmcm9tICcuLi9fdXRpbHMvY29udGFpbmVyVXRpbHMnO1xuXG5mdW5jdGlvbiBzZXRPcmllbnRhdGlvbihtZW51LCB7b3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCd9KSB7XG4gIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtb3JpZW50YXRpb24nLCAnaG9yaXpvbnRhbCcpO1xuICB9XG5cbiAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLW9yaWVudGF0aW9uJywgJ3ZlcnRpY2FsJyk7XG4gIH1cblxuICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gc2V0Um9sZShtZW51LCB7dHJpZ2dlcn0pIHtcbiAgaWYgKHRyaWdnZXIpIHtcbiAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1oYXNwb3B1cCcsICd0cnVlJyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbWVudScpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cbiAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZW51O1xuICB9XG5cbiAgbWVudS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbWVudWJhcicpO1xuICByZXR1cm4gbWVudTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudShjb250YWluZXIsIGRhdGEsIGNvbmZpZykge1xuICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnZGVxdWUnKTtcbiAgc2V0Um9sZShtZW51LCBjb25maWcpO1xuICBzZXRPcmllbnRhdGlvbihtZW51LCBjb25maWcpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KTtcblxuXG4gIGxldCBjdXJyZW50UmFkaW9Hcm91cCA9IG51bGw7XG4gIGxldCBjdXJyZW50Q2hlY2tib3hHcm91cCA9IG51bGw7XG5cbiAgZGF0YVxuICAgIC5tYXAoaXRlbSA9PiBidWlsZE1lbnVJdGVtKGl0ZW0sIGNvbmZpZykpXG4gICAgLmZvckVhY2gobGkgPT4ge1xuICAgICAgbGV0IGl0ZW1Sb2xlID0gbGkuZ2V0QXR0cmlidXRlKCdyb2xlJyk7XG4gICAgICBsZXQgZGF0YUdyb3VwID0gbGkuZ2V0QXR0cmlidXRlKCdkYXRhLWdyb3VwJyk7XG4gICAgICBpZiAoaXRlbVJvbGUgPT09ICdtZW51aXRlbWNoZWNrYm94JyAmJiBkYXRhR3JvdXApIHtcbiAgICAgICAgbGV0IGdyb3VwTmFtZSA9IGRhdGFHcm91cDtcblxuICAgICAgICBpZiAoIWN1cnJlbnRDaGVja2JveEdyb3VwIHx8IChjdXJyZW50Q2hlY2tib3hHcm91cC5nZXRBdHRyaWJ1dGUoJ2dyb3VwLW5hbWUnKSAhPT0gZ3JvdXBOYW1lKSkge1xuICAgICAgICAgIGN1cnJlbnRDaGVja2JveEdyb3VwID0gY3JlYXRlRmllbGRzZXQoZ3JvdXBOYW1lKTtcbiAgICAgICAgICBjdXJyZW50Q2hlY2tib3hHcm91cC5zZXRBdHRyaWJ1dGUoJ2dyb3VwLW5hbWUnLCBncm91cE5hbWUpO1xuICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoY3VycmVudENoZWNrYm94R3JvdXApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRDaGVja2JveEdyb3VwLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRDaGVja2JveEdyb3VwID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1Sb2xlID09PSAnbWVudWl0ZW1yYWRpbycpIHtcbiAgICAgICAgbGV0IGdyb3VwTmFtZSA9IGxpLmdldEF0dHJpYnV0ZSgnZGF0YS1ncm91cCcpO1xuXG4gICAgICAgIGlmICghY3VycmVudFJhZGlvR3JvdXAgfHwgKGN1cnJlbnRSYWRpb0dyb3VwLmdldEF0dHJpYnV0ZSgnZ3JvdXAtbmFtZScpICE9PSBncm91cE5hbWUpKSB7XG4gICAgICAgICAgY3VycmVudFJhZGlvR3JvdXAgPSBjcmVhdGVGaWVsZHNldChncm91cE5hbWUpO1xuICAgICAgICAgIGN1cnJlbnRSYWRpb0dyb3VwLnNldEF0dHJpYnV0ZSgnZ3JvdXAtbmFtZScsIGdyb3VwTmFtZSk7XG4gICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChjdXJyZW50UmFkaW9Hcm91cCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3VycmVudFJhZGlvR3JvdXAuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFJhZGlvR3JvdXAgPSBudWxsO1xuICAgICAgfVxuXG5cbiAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuXG4gIGFwcGx5TmF2aWdhdGlvbkxvZ2ljKG1lbnUsIGNvbmZpZyk7XG5cbiAgbGV0IGZpcnN0Q2hpbGQgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJ2xpJyk7XG4gIGZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21lbnUvaW5kZXguanMiLCJpbXBvcnQgKiBhcyBrYiBmcm9tICcuLi9fdXRpbHMva2V5Ym9hcmRVdGlscy5qcyc7XG5pbXBvcnQgKiBhcyBtdSBmcm9tICcuL21lbnVJdGVtVXRpbHMnO1xuaW1wb3J0ICogYXMgdmVydGljYWwgZnJvbSAnLi9uYXZpZ2F0aW9uL3ZlcnRpY2FsJztcbmltcG9ydCAqIGFzIGhvcml6b250YWwgZnJvbSAnLi9uYXZpZ2F0aW9uL2hvcml6b250YWwnO1xuXG5jb25zdCBrZXlIYW5kbGVycyA9IHt2ZXJ0aWNhbCwgaG9yaXpvbnRhbH07XG5cbmZ1bmN0aW9uIGdldExhdGVzdFBhcmVudEl0ZW0obm9kZSkge1xuICBjb25zdCByb2xlID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSB8fCAnJztcbiAgaWYgKHJvbGUuaW5kZXhPZignbWVudWl0ZW0nKSA9PT0gMCkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgbGV0IHBhcmVudCA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgaWYgKCFwYXJlbnQpIHsgcmV0dXJuIG51bGw7IH1cbiAgaWYgKG5vZGUgPT09IHBhcmVudCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gIHJldHVybiBnZXRMYXRlc3RQYXJlbnRJdGVtKHBhcmVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5TmF2aWdhdGlvbkxvZ2ljKG1lbnUsIHtvcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCcsIHdyYXAgPSBmYWxzZX0pIHtcbiAgaWYgKG9yaWVudGF0aW9uICE9PSAndmVydGljYWwnICYmIG9yaWVudGF0aW9uICE9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ29yaWVudGF0aW9uIG11c3QgYmUgZWl0aGVyIGB2ZXJ0aWNhbGAgb3IgYGhvcml6b250YWxgJyk7XG4gIH1cblxuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRMYXRlc3RQYXJlbnRJdGVtKGUudGFyZ2V0KTtcbiAgICBpZiAoIXRhcmdldCkgeyByZXR1cm47IH1cbiAgICBtdS5zZXRGb2N1cyh0YXJnZXQpO1xuICB9KTtcblxuICBrYi5vbkVsZW1lbnRVcChtZW51LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0TGF0ZXN0UGFyZW50SXRlbShlLnRhcmdldCk7XG4gICAgaWYgKCF0YXJnZXQpIHsgcmV0dXJuOyB9XG5cbiAgICBrZXlIYW5kbGVyc1tvcmllbnRhdGlvbl0udXAodGFyZ2V0LCB3cmFwKTtcbiAgfSk7XG5cbiAga2Iub25FbGVtZW50RG93bihtZW51LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0TGF0ZXN0UGFyZW50SXRlbShlLnRhcmdldCk7XG4gICAgaWYgKCF0YXJnZXQpIHsgcmV0dXJuOyB9XG5cbiAgICBrZXlIYW5kbGVyc1tvcmllbnRhdGlvbl0uZG93bih0YXJnZXQsIHdyYXApO1xuICB9KTtcblxuICBrYi5vbkVsZW1lbnRMZWZ0KG1lbnUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBnZXRMYXRlc3RQYXJlbnRJdGVtKGUudGFyZ2V0KTtcbiAgICBpZiAoIXRhcmdldCkgeyByZXR1cm47IH1cblxuICAgIGtleUhhbmRsZXJzW29yaWVudGF0aW9uXS5sZWZ0KHRhcmdldCwgd3JhcCk7XG4gIH0pO1xuXG4gIGtiLm9uRWxlbWVudFJpZ2h0KG1lbnUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBnZXRMYXRlc3RQYXJlbnRJdGVtKGUudGFyZ2V0KTtcbiAgICBpZiAoIXRhcmdldCkgeyByZXR1cm47IH1cblxuICAgIGtleUhhbmRsZXJzW29yaWVudGF0aW9uXS5yaWdodCh0YXJnZXQsIHdyYXApO1xuICB9KTtcblxuICBrYi5vbkVsZW1lbnRIb21lKG1lbnUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBnZXRMYXRlc3RQYXJlbnRJdGVtKGUudGFyZ2V0KTtcbiAgICBpZiAoIXRhcmdldCkgeyByZXR1cm47IH1cblxuICAgIGtleUhhbmRsZXJzW29yaWVudGF0aW9uXS5ob21lKHRhcmdldCwgd3JhcCk7XG4gIH0pO1xuXG4gIGtiLm9uRWxlbWVudEVuZChtZW51LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0TGF0ZXN0UGFyZW50SXRlbShlLnRhcmdldCk7XG4gICAgaWYgKCF0YXJnZXQpIHsgcmV0dXJuOyB9XG5cbiAgICBrZXlIYW5kbGVyc1tvcmllbnRhdGlvbl0uZW5kKHRhcmdldCwgd3JhcCk7XG4gIH0pO1xuXG4gIGtiLm9uRWxlbWVudENoYXJhY3RlcihtZW51LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0TGF0ZXN0UGFyZW50SXRlbShlLnRhcmdldCk7XG4gICAgaWYgKCF0YXJnZXQpIHsgcmV0dXJuOyB9XG5cbiAgICBsZXQgY2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCk7XG4gICAga2V5SGFuZGxlcnNbb3JpZW50YXRpb25dLmNoYXIodGFyZ2V0LCBjaGFyKTtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21lbnUvbmF2aWdhdGlvbkxvZ2ljLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGZpbmlzaEludGVyYWN0aW9uKG1lbnVpdGVtKSB7XG4gIGxldCBtZW51ID0gZ2V0TWVudUZyb21JdGVtKG1lbnVpdGVtKTtcbiAgaWYgKG1lbnUpIHtcbiAgICBsZXQgcm9sZSA9IG1lbnUuZ2V0QXR0cmlidXRlKCdyb2xlJyk7XG5cbiAgICBnZXRBbGxJdGVtc0luTWVudShtZW51KS5mb3JFYWNoKGNsb3NlU3VibWVudSk7XG5cbiAgICBpZiAocm9sZSA9PT0gJ21lbnUnKSB7XG4gICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBnaXZlbiBzb21lIG1lbnUgaXRlbSwgcmV0dXJuIHRoZSBlbnRpcmUgbWVudS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZW51RnJvbUl0ZW0obWVudWl0ZW0pIHtcbiAgbGV0IHBhcmVudEl0ZW0gPSBnZXRQYXJlbnQobWVudWl0ZW0pO1xuXG4gIHdoaWxlKDEpIHtcbiAgICBsZXQgbmV3UGFyZW50ID0gZ2V0UGFyZW50KHBhcmVudEl0ZW0pO1xuXG4gICAgLy8gdGhpcyB3aWxsIGFsd2F5cyBiZSB0cnVlIGV2ZW50dWFsbHlcbiAgICBpZiAocGFyZW50SXRlbSA9PT0gbmV3UGFyZW50KSB7IGJyZWFrOyB9XG4gICAgcGFyZW50SXRlbSA9IG5ld1BhcmVudDtcbiAgfVxuXG4gIGxldCBtYXliZVBhcmVudCA9IHBhcmVudEl0ZW0ucGFyZW50RWxlbWVudDtcbiAgY29uc3Qgcm9sZSA9IG1heWJlUGFyZW50LmdldEF0dHJpYnV0ZSgncm9sZScpO1xuICBpZiAoIHJvbGUgPT09ICdtZW51JyB8fCByb2xlID09PSAnbWVudWJhcicpIHtcbiAgICByZXR1cm4gbWF5YmVQYXJlbnQ7XG4gIH1cblxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsSXRlbXNJbk1lbnUobWVudSkge1xuICBsZXQgb3V0cHV0ID0gW107XG5cbiAgbGV0IHJlc3VsdCA9IG1lbnUucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJtZW51aXRlbVwiXSwgW3JvbGU9XCJtZW51aXRlbWNoZWNrYm94XCJdLCBbcm9sZT1cIm1lbnVpdGVtcmFkaW9cIl0nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXQucHVzaChyZXN1bHRbaV0pO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NoaWxkcmVuKG1lbnVpdGVtKSB7XG4gIHJldHVybiAhIW1lbnVpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09wZW4obWVudWl0ZW0pIHtcbiAgcmV0dXJuIGhhc0NoaWxkcmVuKG1lbnVpdGVtKSAmJiBtZW51aXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtb3BlbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlblN1Ym1lbnUobWVudWl0ZW0pIHtcbiAgaWYgKCFoYXNDaGlsZHJlbihtZW51aXRlbSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBtZW51aXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LW9wZW4nKTtcbiAgbWVudWl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgbGV0IGZpcnN0Q2hpbGQgPSBnZXRGaXJzdENoaWxkKG1lbnVpdGVtKTtcbiAgc2V0Rm9jdXMoZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVN1Ym1lbnUobWVudWl0ZW0pIHtcbiAgaWYgKCFoYXNDaGlsZHJlbihtZW51aXRlbSkgfHwgIWlzT3BlbihtZW51aXRlbSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBtZW51aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LW9wZW4nKTtcbiAgbWVudWl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gIHNldEZvY3VzKG1lbnVpdGVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZvY3VzKG1lbnVpdGVtKSB7XG4gIGxldCByb290TWVudSA9IGdldE1lbnVGcm9tSXRlbShtZW51aXRlbSk7XG5cbiAgbGV0IGFsbE1lbnVJdGVtcyA9IGdldEFsbEl0ZW1zSW5NZW51KHJvb3RNZW51KTtcbiAgYWxsTWVudUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKGl0ZW0gPT09IG1lbnVpdGVtKSB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgaXRlbS5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICB9XG5cbiAgICAvLyBjbG9zZSBhbGwgc3VibWVudXMgdGhhdCBhcmVuJ3QgYW5jZXN0b3JzIG9mIHRoZSBpdGVtXG4gICAgbGV0IGlzUGFyZW50ID0gaXRlbS5jb250YWlucyhtZW51aXRlbSk7XG4gICAgaWYgKCFpc1BhcmVudCAmJiBoYXNDaGlsZHJlbihpdGVtKSkge1xuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LW9wZW4nKTtcbiAgICB9XG5cbiAgfSk7XG5cblxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnQobWVudWl0ZW0pIHtcbiAgbGV0IHBhcmVudENhbmRpZGF0ZSA9IG1lbnVpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICBpZiAobWVudWl0ZW0ucGFyZW50RWxlbWVudC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdGSUVMRFNFVCcpIHtcbiAgICBwYXJlbnRDYW5kaWRhdGUgPSBtZW51aXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIGlmIChwYXJlbnRDYW5kaWRhdGUuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICdtZW51aXRlbScpIHtcbiAgICByZXR1cm4gcGFyZW50Q2FuZGlkYXRlO1xuICB9XG5cbiAgcmV0dXJuIG1lbnVpdGVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RDaGlsZChtZW51aXRlbSkge1xuICByZXR1cm4gbWVudWl0ZW0ucXVlcnlTZWxlY3RvcigndWwgbGk6bm90KFtyb2xlPVwic2VwYXJhdG9yXCJdKScpIHx8IG1lbnVpdGVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RTaWJsaW5nKG1lbnVpdGVtKSB7XG4gIHJldHVybiBtZW51aXRlbS5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlvdXNTaWJsaW5nKG1lbnVpdGVtKSB7XG4gIGxldCBwcmV2ID0gbWVudWl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgd2hpbGUocHJldiAmJiBwcmV2LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAnc2VwYXJhdG9yJykge1xuICAgIHByZXYgPSBwcmV2LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gIH1cblxuICByZXR1cm4gcHJldiB8fCBtZW51aXRlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRTaWJsaW5nKG1lbnVpdGVtKSB7XG4gIGxldCBuZXh0ID0gbWVudWl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB3aGlsZSAobmV4dCAmJiBuZXh0LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAnc2VwYXJhdG9yJykge1xuICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZztcbiAgfVxuICByZXR1cm4gbmV4dCB8fCBtZW51aXRlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RTaWJsaW5nKG1lbnVpdGVtKSB7XG4gIGxldCBwYXJlbnRNZW51ID0gbWVudWl0ZW0ucGFyZW50RWxlbWVudDtcbiAgbGV0IGNoaWxkcmVuT2ZQYXJlbnQgPSBwYXJlbnRNZW51LmNoaWxkcmVuO1xuICByZXR1cm4gY2hpbGRyZW5PZlBhcmVudFtjaGlsZHJlbk9mUGFyZW50Lmxlbmd0aCAtIDFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RNZW51SXRlbShtZW51aXRlbSkge1xuICByZXR1cm4gZ2V0TWVudUZyb21JdGVtKG1lbnVpdGVtKS5jaGlsZHJlblswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RNZW51SXRlbShtZW51aXRlbSkge1xuICBsZXQgaXRlbXMgPSBnZXRNZW51RnJvbUl0ZW0obWVudWl0ZW0pLmNoaWxkcmVuO1xuICByZXR1cm4gaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmV2aW91c1NpYmxpbmdXaGVyZShtZW51aXRlbSwgcHJlZGljYXRlKSB7XG4gIGxldCBwcmV2ID0gZ2V0UHJldmlvdXNTaWJsaW5nKG1lbnVpdGVtKTtcbiAgaWYgKHByZXYgPT09IG1lbnVpdGVtKSB7XG4gICAgcmV0dXJuIHByZWRpY2F0ZShwcmV2KSA/IHByZXYgOiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHByZWRpY2F0ZShwcmV2KSA/IHByZXYgOiBnZXRQcmV2aW91c1NpYmxpbmdXaGVyZShwcmV2LCBwcmVkaWNhdGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dFNpYmxpbmdXaGVyZShtZW51aXRlbSwgcHJlZGljYXRlKSB7XG4gIGxldCBuZXh0ID0gZ2V0TmV4dFNpYmxpbmcobWVudWl0ZW0pO1xuICBpZiAobmV4dCA9PT0gbWVudWl0ZW0pIHtcbiAgICByZXR1cm4gcHJlZGljYXRlKG5leHQpID8gbmV4dCA6IG51bGw7XG4gIH1cblxuICByZXR1cm4gcHJlZGljYXRlKG5leHQpID8gbmV4dCA6IGdldE5leHRTaWJsaW5nV2hlcmUobmV4dCwgcHJlZGljYXRlKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVudS9tZW51SXRlbVV0aWxzLmpzIiwiaW1wb3J0ICogYXMgbXUgZnJvbSAnLi4vbWVudUl0ZW1VdGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cChub2RlLCB3cmFwcykge1xuICBsZXQgdGFyZ2V0ID0gbXUuZ2V0UHJldmlvdXNTaWJsaW5nKG5vZGUpO1xuXG4gIGlmIChub2RlID09PSB0YXJnZXQgJiYgd3JhcHMpIHtcbiAgICB0YXJnZXQgPSBtdS5nZXRMYXN0U2libGluZyhub2RlKTtcbiAgfVxuXG4gIG11LnNldEZvY3VzKHRhcmdldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3duKG5vZGUsIHdyYXBzKSB7XG4gIGxldCB0YXJnZXQgPSBtdS5nZXROZXh0U2libGluZyhub2RlKTtcbiAgaWYgKHRhcmdldCA9PT0gbm9kZSAmJiB3cmFwcykge1xuICAgIHRhcmdldCA9IG11LmdldEZpcnN0U2libGluZyhub2RlKTtcbiAgfVxuXG4gIG11LnNldEZvY3VzKHRhcmdldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodChub2RlKSB7XG4gIGlmKG11Lmhhc0NoaWxkcmVuKG5vZGUpICYmICFtdS5pc09wZW4obm9kZSkpIHtcbiAgICByZXR1cm4gbXUub3BlblN1Ym1lbnUobm9kZSk7XG4gIH1cblxuICBsZXQgcGFyZW50ID0gbXUuZ2V0UGFyZW50KG5vZGUpO1xuICBpZiAobm9kZSA9PT0gcGFyZW50KSB7IHJldHVybjsgfVxuXG4gIGxldCBhdW50ID0gbXUuZ2V0TmV4dFNpYmxpbmdXaGVyZShwYXJlbnQsIChpdGVtKSA9PiBtdS5oYXNDaGlsZHJlbihpdGVtKSk7XG4gIGlmIChhdW50ICYmIGF1bnQgIT09IHBhcmVudCkge1xuICAgIG11LmNsb3NlU3VibWVudShwYXJlbnQpO1xuICAgIG11Lm9wZW5TdWJtZW51KGF1bnQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0KG5vZGUpIHtcbiAgbGV0IHBhcmVudCA9IG11LmdldFBhcmVudChub2RlKTtcbiAgaWYgKG5vZGUgPT09IHBhcmVudCkgeyByZXR1cm47IH1cbiAgLy8gYWx3YXlzIGNsb3NlIHRoZSBwYXJlbnQsIGlmIHRoaXMgaXMgYSBzdWJub2RlXG4gIG11LmNsb3NlU3VibWVudShwYXJlbnQpO1xuXG4gIC8vIGlmIHBhcmVudCBoYXMgYSBwcmV2aW91cyBzaWJsaW5nIHRoYXQgaGFzIGNoaWxkcmVuLCBvcGVuIGl0LlxuICBsZXQgdW5jbGUgPSBtdS5nZXRQcmV2aW91c1NpYmxpbmdXaGVyZShwYXJlbnQsIChpdGVtKSA9PiBtdS5oYXNDaGlsZHJlbihpdGVtKSk7XG5cbiAgaWYgKHVuY2xlICYmIHVuY2xlICE9PSBwYXJlbnQpIHtcbiAgICBtdS5vcGVuU3VibWVudSh1bmNsZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWUobm9kZSwgd3JhcHMpIHtcbiAgaWYgKHdyYXBzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHRhcmdldCA9IG11LmdldEZpcnN0TWVudUl0ZW0obm9kZSk7XG4gIG11LnNldEZvY3VzKHRhcmdldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmQobm9kZSwgd3JhcHMpIHtcbiAgaWYgKHdyYXBzKSB7IHJldHVybjsgfVxuXG4gIG11LnNldEZvY3VzKG11LmdldExhc3RNZW51SXRlbShub2RlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFyKG5vZGUsIGxldHRlcikge1xuICBsZXQgdGFyZ2V0ID0gbXUuZ2V0TmV4dFNpYmxpbmdXaGVyZShub2RlLCAoaXRlbSkgPT4ge1xuICAgIHJldHVybiBpdGVtXG4gICAgICAudGV4dENvbnRlbnRcbiAgICAgIC5jaGFyQXQoMClcbiAgICAgIC50b1VwcGVyQ2FzZSgpID09PSBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG5cbiAgaWYgKHRhcmdldCkgeyBtdS5zZXRGb2N1cyh0YXJnZXQpOyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVudS9uYXZpZ2F0aW9uL3ZlcnRpY2FsLmpzIiwiaW1wb3J0ICogYXMgbXUgZnJvbSAnLi4vbWVudUl0ZW1VdGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cChub2RlKSB7XG4gIGxldCBwYXJlbnQgPSBtdS5nZXRQYXJlbnQobm9kZSk7XG4gIGlmIChub2RlID09PSBwYXJlbnQpIHsgcmV0dXJuOyB9XG4gIC8vIGFsd2F5cyBjbG9zZSB0aGUgcGFyZW50LCBpZiB0aGlzIGlzIGEgc3Vibm9kZVxuICBtdS5jbG9zZVN1Ym1lbnUocGFyZW50KTtcblxuICAvLyBpZiBwYXJlbnQgaGFzIGEgcHJldmlvdXMgc2libGluZyB0aGF0IGhhcyBjaGlsZHJlbiwgb3BlbiBpdC5cbiAgbGV0IHVuY2xlID0gbXUuZ2V0UHJldmlvdXNTaWJsaW5nV2hlcmUocGFyZW50LCAoaXRlbSkgPT4gbXUuaGFzQ2hpbGRyZW4oaXRlbSkpO1xuXG4gIGlmICh1bmNsZSAmJiB1bmNsZSAhPT0gcGFyZW50KSB7XG4gICAgbXUub3BlblN1Ym1lbnUodW5jbGUpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3duKG5vZGUpIHtcbiAgaWYobXUuaGFzQ2hpbGRyZW4obm9kZSkgJiYgIW11LmlzT3Blbihub2RlKSkge1xuICAgIHJldHVybiBtdS5vcGVuU3VibWVudShub2RlKTtcbiAgfVxuXG4gIGxldCBwYXJlbnQgPSBtdS5nZXRQYXJlbnQobm9kZSk7XG4gIGlmIChub2RlID09PSBwYXJlbnQpIHsgcmV0dXJuOyB9XG5cbiAgbGV0IGF1bnQgPSBtdS5nZXROZXh0U2libGluZ1doZXJlKHBhcmVudCwgKGl0ZW0pID0+IG11Lmhhc0NoaWxkcmVuKGl0ZW0pKTtcbiAgaWYgKGF1bnQgJiYgYXVudCAhPT0gcGFyZW50KSB7XG4gICAgbXUuY2xvc2VTdWJtZW51KHBhcmVudCk7XG4gICAgbXUub3BlblN1Ym1lbnUoYXVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnQobm9kZSwgd3JhcHMpIHtcbiAgbGV0IHRhcmdldCA9IG11LmdldFByZXZpb3VzU2libGluZyhub2RlKTtcblxuICBpZiAobm9kZSA9PT0gdGFyZ2V0ICYmIHdyYXBzKSB7XG4gICAgdGFyZ2V0ID0gbXUuZ2V0TGFzdFNpYmxpbmcobm9kZSk7XG4gIH1cblxuICBtdS5zZXRGb2N1cyh0YXJnZXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHQobm9kZSwgd3JhcHMpIHtcbiAgbGV0IHRhcmdldCA9IG11LmdldE5leHRTaWJsaW5nKG5vZGUpO1xuICBpZiAodGFyZ2V0ID09PSBub2RlICYmIHdyYXBzKSB7XG4gICAgdGFyZ2V0ID0gbXUuZ2V0Rmlyc3RTaWJsaW5nKG5vZGUpO1xuICB9XG5cbiAgbXUuc2V0Rm9jdXModGFyZ2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWUobm9kZSwgd3JhcHMpIHtcbiAgaWYgKHdyYXBzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHRhcmdldCA9IG11LmdldEZpcnN0TWVudUl0ZW0obm9kZSk7XG4gIG11LnNldEZvY3VzKHRhcmdldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmQobm9kZSwgd3JhcHMpIHtcbiAgaWYgKHdyYXBzKSB7IHJldHVybjsgfVxuXG4gIG11LnNldEZvY3VzKG11LmdldExhc3RNZW51SXRlbShub2RlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFyKG5vZGUsIGxldHRlcikge1xuICBsZXQgdGFyZ2V0ID0gbXUuZ2V0TmV4dFNpYmxpbmdXaGVyZShub2RlLCAoaXRlbSkgPT4ge1xuICAgIHJldHVybiBpdGVtXG4gICAgICAudGV4dENvbnRlbnRcbiAgICAgIC5jaGFyQXQoMClcbiAgICAgIC50b1VwcGVyQ2FzZSgpID09PSBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG5cbiAgaWYgKHRhcmdldCkgeyBtdS5zZXRGb2N1cyh0YXJnZXQpOyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVudS9uYXZpZ2F0aW9uL2hvcml6b250YWwuanMiLCJpbXBvcnQgKiBhcyBpdGVtRmFjdG9yeSBmcm9tICcuL2l0ZW1GYWN0b3JpZXMvaXRlbSc7XG5pbXBvcnQgKiBhcyBzdWJtZW51RmFjdG9yeSBmcm9tICcuL2l0ZW1GYWN0b3JpZXMvc3VibWVudSc7XG5pbXBvcnQgKiBhcyByYWRpb0ZhY3RvcnkgZnJvbSAnLi9pdGVtRmFjdG9yaWVzL3JhZGlvJztcbmltcG9ydCAqIGFzIGNoZWNrYm94RmFjdG9yeSBmcm9tICcuL2l0ZW1GYWN0b3JpZXMvY2hlY2tib3gnO1xuaW1wb3J0ICogYXMgc2VwYXJhdG9yRmFjdG9yeSBmcm9tICcuL2l0ZW1GYWN0b3JpZXMvc2VwYXJhdG9yJztcblxubGV0IGJ1aWxkZXJzID0ge1xuICBpdGVtOiBpdGVtRmFjdG9yeS5idWlsZCxcbiAgc2VwYXJhdG9yOiBzZXBhcmF0b3JGYWN0b3J5LmJ1aWxkLFxuICBjaGVja2JveDogY2hlY2tib3hGYWN0b3J5LmJ1aWxkLFxuICByYWRpbzogcmFkaW9GYWN0b3J5LmJ1aWxkLFxuICBzdWJtZW51OiBzdWJtZW51RmFjdG9yeS5idWlsZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNZW51SXRlbShkYXRhLCBjb25maWcpIHtcbiAgbGV0IG91dHB1dCA9IGJ1aWxkZXJzW2RhdGEudHlwZV0oZGF0YSwgY29uZmlnKTtcbiAgaWYgKGRhdGEuY2xhc3Nlcykge1xuICAgIGRhdGEuY2xhc3Nlcy5mb3JFYWNoKGMgPT4ge1xuICAgICAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoYyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoZGF0YS5kaXNhYmxlZCkge1xuICAgIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVudS9idWlsZE1lbnVJdGVtLmpzIiwiaW1wb3J0ICogYXMgbXUgZnJvbSAnLi4vbWVudUl0ZW1VdGlscyc7XG5pbXBvcnQgKiBhcyBrYiBmcm9tICcuLi8uLi9fdXRpbHMva2V5Ym9hcmRVdGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZShpdGVtLCBoYW5kbGVyLCBlKSB7XG4gIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpID09PSAndHJ1ZScpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBtdS5maW5pc2hJbnRlcmFjdGlvbihpdGVtKTtcblxuICBpZihoYW5kbGVyKSB7XG4gICAgaGFuZGxlcihlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGQoZGF0YSkge1xuICBsZXQgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgncm9sZScsICdtZW51aXRlbScpO1xuXG4gIGlmIChkYXRhLmxhYmVsKSB7XG4gICAgb3V0cHV0LmlubmVyVGV4dCA9IGRhdGEubGFiZWw7XG4gIH0gZWxzZSBpZiAoZGF0YS5tYXJrdXApIHtcbiAgICBvdXRwdXQuaW5uZXJIVE1MID0gZGF0YS5tYXJrdXA7XG4gIH1cblxuICBsZXQgYm91bmRBY3Rpb25IYW5kbGVyID0gYWN0aXZhdGUuYmluZChudWxsLCBvdXRwdXQsIGRhdGEuaGFuZGxlcik7XG4gIG91dHB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvdW5kQWN0aW9uSGFuZGxlcik7XG4gIGtiLm9uRWxlbWVudEVudGVyKG91dHB1dCwgYm91bmRBY3Rpb25IYW5kbGVyKTtcblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tZW51L2l0ZW1GYWN0b3JpZXMvaXRlbS5qcyIsImltcG9ydCAqIGFzIG11IGZyb20gJy4uL21lbnVJdGVtVXRpbHMnO1xuaW1wb3J0ICogYXMga2IgZnJvbSAnLi4vLi4vX3V0aWxzL2tleWJvYXJkVXRpbHMnO1xuaW1wb3J0IGJ1aWxkTWVudUl0ZW0gZnJvbSAnLi4vYnVpbGRNZW51SXRlbSc7XG5pbXBvcnQge2NyZWF0ZUZpZWxkc2V0fSBmcm9tICcuLi8uLi9fdXRpbHMvY29udGFpbmVyVXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGUoaXRlbSkge1xuICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG11LmlzT3BlbihpdGVtKSkge1xuICAgIG11LmNsb3NlU3VibWVudShpdGVtKTtcbiAgfSBlbHNlIHtcbiAgICBtdS5vcGVuU3VibWVudShpdGVtKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGQoZGF0YSwgY29uZmlnKSB7XG4gIGxldCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ21lbnVpdGVtJyk7XG4gIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGFzcG9wdXAnLCAndHJ1ZScpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cbiAgaWYgKGRhdGEubGFiZWwpIHtcbiAgICBvdXRwdXQuaW5uZXJUZXh0ID0gZGF0YS5sYWJlbDtcbiAgfSBlbHNlIGlmIChkYXRhLm1hcmt1cCkge1xuICAgIG91dHB1dC5pbm5lckhUTUwgPSBkYXRhLm1hcmt1cDtcbiAgfVxuXG4gIGxldCBjdXJyZW50UmFkaW9Hcm91cCA9IG51bGw7XG4gIGxldCBjdXJyZW50Q2hlY2tib3hHcm91cCA9IG51bGw7XG5cbiAgbGV0IHN1Ym1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBkYXRhLmNoaWxkcmVuXG4gICAgLm1hcChpdGVtID0+IGJ1aWxkTWVudUl0ZW0oaXRlbSwgY29uZmlnKSlcbiAgICAuZm9yRWFjaChsaSA9PiB7XG4gICAgICBsZXQgaXRlbVJvbGUgPSBsaS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgICAgIGxldCBkYXRhR3JvdXAgPSBsaS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ3JvdXAnKTtcbiAgICAgIGlmIChpdGVtUm9sZSA9PT0gJ21lbnVpdGVtY2hlY2tib3gnICYmIGRhdGFHcm91cCkge1xuICAgICAgICBsZXQgZ3JvdXBOYW1lID0gZGF0YUdyb3VwO1xuXG4gICAgICAgIGlmICghY3VycmVudENoZWNrYm94R3JvdXAgfHwgKGN1cnJlbnRDaGVja2JveEdyb3VwLmdldEF0dHJpYnV0ZSgnZ3JvdXAtbmFtZScpICE9PSBncm91cE5hbWUpKSB7XG4gICAgICAgICAgY3VycmVudENoZWNrYm94R3JvdXAgPSBjcmVhdGVGaWVsZHNldChncm91cE5hbWUpO1xuICAgICAgICAgIGN1cnJlbnRDaGVja2JveEdyb3VwLnNldEF0dHJpYnV0ZSgnZ3JvdXAtbmFtZScsIGdyb3VwTmFtZSk7XG4gICAgICAgICAgc3VibWVudS5hcHBlbmRDaGlsZChjdXJyZW50Q2hlY2tib3hHcm91cCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3VycmVudENoZWNrYm94R3JvdXAuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudENoZWNrYm94R3JvdXAgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVJvbGUgPT09ICdtZW51aXRlbXJhZGlvJykge1xuICAgICAgICBsZXQgZ3JvdXBOYW1lID0gbGkuZ2V0QXR0cmlidXRlKCdkYXRhLWdyb3VwJyk7XG5cbiAgICAgICAgaWYgKCFjdXJyZW50UmFkaW9Hcm91cCB8fCAoY3VycmVudFJhZGlvR3JvdXAuZ2V0QXR0cmlidXRlKCdncm91cC1uYW1lJykgIT09IGdyb3VwTmFtZSkpIHtcbiAgICAgICAgICBjdXJyZW50UmFkaW9Hcm91cCA9IGNyZWF0ZUZpZWxkc2V0KGdyb3VwTmFtZSk7XG4gICAgICAgICAgY3VycmVudFJhZGlvR3JvdXAuc2V0QXR0cmlidXRlKCdncm91cC1uYW1lJywgZ3JvdXBOYW1lKTtcbiAgICAgICAgICBzdWJtZW51LmFwcGVuZENoaWxkKGN1cnJlbnRSYWRpb0dyb3VwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjdXJyZW50UmFkaW9Hcm91cC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50UmFkaW9Hcm91cCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHN1Ym1lbnUuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuXG4gIGxldCBib3VuZEFjdGl2YXRpb24gPSBhY3RpdmF0ZS5iaW5kKG51bGwsIG91dHB1dCk7XG5cbiAgb3V0cHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm91bmRBY3RpdmF0aW9uKTtcbiAga2Iub25FbGVtZW50RW50ZXIob3V0cHV0LCBib3VuZEFjdGl2YXRpb24pO1xuXG4gIGtiLm9uRWxlbWVudEVzY2FwZShzdWJtZW51LCAoKSA9PiB7XG4gICAgbXUuY2xvc2VTdWJtZW51KG91dHB1dCk7XG4gIH0pO1xuXG4gIGxldCBpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2luZGljYXRvcicpO1xuICBvdXRwdXQuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yKTtcblxuICBvdXRwdXQuYXBwZW5kQ2hpbGQoc3VibWVudSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21lbnUvaXRlbUZhY3Rvcmllcy9zdWJtZW51LmpzIiwiaW1wb3J0ICogYXMgbXUgZnJvbSAnLi4vbWVudUl0ZW1VdGlscyc7XG5pbXBvcnQgKiBhcyBrYiBmcm9tICcuLi8uLi9fdXRpbHMva2V5Ym9hcmRVdGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZShpdGVtLCBlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGdyb3VwTmFtZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWdyb3VwJyk7XG4gIGxldCBxdWVyeSA9IGBbZGF0YS1ncm91cD1cIiR7Z3JvdXBOYW1lfVwiXWA7XG4gIGxldCByYWRpb0dyb3VwTWVtYmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmFkaW9Hcm91cE1lbWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdGFyZ2V0ID0gcmFkaW9Hcm91cE1lbWJlcnNbaV07XG4gICAgaWYgKHRhcmdldCAhPT0gaXRlbSkge1xuICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ2ZhbHNlJyk7XG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICd0cnVlJyk7XG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBtdS5maW5pc2hJbnRlcmFjdGlvbihpdGVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkKGRhdGEpIHtcbiAgbGV0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbWVudWl0ZW1yYWRpbycpO1xuXG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxldCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICByYWRpby5uYW1lID0gZGF0YS5yYWRpb0dyb3VwO1xuICBsYWJlbC5pbm5lclRleHQgPSBkYXRhLmxhYmVsO1xuICBsYWJlbC5hcHBlbmRDaGlsZChyYWRpbyk7XG4gIG91dHB1dC5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgnZGF0YS1ncm91cCcsIGRhdGEucmFkaW9Hcm91cCk7XG5cblxuICByYWRpby5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gIHJhZGlvLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9pbnRlci1ldmVudHM6IG5vbmU7Jyk7XG4gIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG4gIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGJvdW5kQWN0aXZhdGlvbiA9IGFjdGl2YXRlLmJpbmQobnVsbCwgb3V0cHV0KTtcblxuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCAnZmFsc2UnKTtcbiAgb3V0cHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm91bmRBY3RpdmF0aW9uKTtcbiAga2Iub25FbGVtZW50RW50ZXIob3V0cHV0LCBib3VuZEFjdGl2YXRpb24pO1xuICBrYi5vbkVsZW1lbnRTcGFjZShvdXRwdXQsIGJvdW5kQWN0aXZhdGlvbik7XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVudS9pdGVtRmFjdG9yaWVzL3JhZGlvLmpzIiwiaW1wb3J0ICogYXMgbXUgZnJvbSAnLi4vbWVudUl0ZW1VdGlscyc7XG5pbXBvcnQgKiBhcyBrYiBmcm9tICcuLi8uLi9fdXRpbHMva2V5Ym9hcmRVdGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZShpdGVtLCBlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHdhc0NoZWNrZWQgPSBpdGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJykgPT09ICd0cnVlJztcbiAgbGV0IGNoZWNrYm94ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cImNoZWNrYm94XCJdJyk7XG4gIGNoZWNrYm94LmNoZWNrZWQgPSAhd2FzQ2hlY2tlZDtcbiAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICF3YXNDaGVja2VkKTtcbiAgbXUuZmluaXNoSW50ZXJhY3Rpb24oaXRlbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZChkYXRhKSB7XG4gIGxldCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgbGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5sYWJlbDtcbiAgbGFiZWwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICBvdXRwdXQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ21lbnVpdGVtY2hlY2tib3gnKTtcblxuICBpZiAoZGF0YS5ncm91cE5hbWUpIHtcbiAgICBvdXRwdXQuc2V0QXR0cmlidXRlKCdkYXRhLWdyb3VwJywgZGF0YS5ncm91cE5hbWUpO1xuICB9XG5cbiAgbGV0IGJvdW5kQWN0aXZhdGlvbiA9IGFjdGl2YXRlLmJpbmQobnVsbCwgb3V0cHV0KTtcblxuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9pbnRlci1ldmVudHM6IG5vbmU7Jyk7XG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIG91dHB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvdW5kQWN0aXZhdGlvbik7XG4gIGtiLm9uRWxlbWVudEVudGVyKG91dHB1dCwgYm91bmRBY3RpdmF0aW9uKTtcbiAga2Iub25FbGVtZW50U3BhY2Uob3V0cHV0LCBib3VuZEFjdGl2YXRpb24pO1xuXG4gIGlmIChkYXRhLmNoZWNrZWQpIHtcbiAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCAndHJ1ZScpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICdmYWxzZScpO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVudS9pdGVtRmFjdG9yaWVzL2NoZWNrYm94LmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkKGRhdGEsIGNvbmZpZykge1xuICBsZXQgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgncm9sZScsICdzZXBhcmF0b3InKTtcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1vcmllbnRhdGlvbicsIGNvbmZpZy5vcmllbnRhdGlvbik7XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVudS9pdGVtRmFjdG9yaWVzL3NlcGFyYXRvci5qcyIsImltcG9ydCBjcmVhdGVTbGlkZXIgZnJvbSAnLi4vc2xpZGVyJztcbmltcG9ydCB7Y3JlYXRlVGh1bWJDb250cm9sfSBmcm9tICcuL3RodW1iJztcbmltcG9ydCB7b25FbGVtZW50RW50ZXJ9IGZyb20gJy4uL191dGlscy9rZXlib2FyZFV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTXVsdGlyYW5nZShjb25maWcpIHtcbiAgbGV0IHtcbiAgICBpZCxcbiAgICB0aHVtYnMsXG4gICAgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCcsXG4gICAgcmV2ZXJzZSA9IGZhbHNlLFxuICAgIG1pblZhbHVlID0gMCxcbiAgICBtYXhWYWx1ZSA9IDEwMCxcbiAgICBjbGFzc2VzID0gW10sXG4gICAgcGl4ZWxzID0gMjAwXG4gIH0gPSBjb25maWc7XG5cbiAgaWYgKG1pblZhbHVlID49IG1heFZhbHVlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNdWx0aXJhbmdlIG1pbiBtdXN0IGJlIGxlc3MgdGhhbiBNdWx0aXJhbmdlIG1heC4nKTtcbiAgfVxuXG4gIGlmIChpc05hTihtaW5WYWx1ZSkgfHwgaXNOYU4obWF4VmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNdWx0aXJhbmdlIHZhbHVlcyBmb3IgbWluIGFuZCBtYXggbXVzdCBiZSBudW1iZXJzLicpO1xuICB9XG5cbiAgaWYgKHJldmVyc2UpIHtcbiAgICB0aHVtYnMuZm9yRWFjaCh0ID0+IHQuc3RlcFNpemUgKj0gLTEpO1xuICB9XG5cbiAgaWYgKHRodW1icy5sZW5ndGggPT09IDEpIHtcbiAgICBsZXQge1xuICAgICAgbGFiZWwsXG4gICAgICBzdGVwU2l6ZSxcbiAgICAgIGxhYmVsRnJvbVZhbHVlLFxuICAgICAgaW5pdGlhbFZhbHVlLFxuICAgICAgY2xhc3Nlc1xuICAgIH0gPSB0aHVtYnNbMF07XG5cbiAgICByZXR1cm4gY3JlYXRlU2xpZGVyKG1pblZhbHVlLCBtYXhWYWx1ZSwgaW5pdGlhbFZhbHVlLCBzdGVwU2l6ZSwgbGFiZWwsIG9yaWVudGF0aW9uLCBjbGFzc2VzLCBsYWJlbEZyb21WYWx1ZSk7XG4gIH1cblxuICAvLyB0aGUgcmVzdCBvZiB0aGlzIGNvZGUgaXMgb25seSByZWxldmFudCBpZiB0aGVyZSBpc1xuICAvLyBtb3JlIHRoYW4gb25lIHRodW1iLlxuICBsZXQgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcicpO1xuICBpZiAoaWQpIHtcbiAgICBzbGlkZXIuaWQgPSBpZDtcbiAgfVxuXG5cblxuICBsZXQgbWluVmFsdWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGxldCBtYXhWYWx1ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICBsZXQgbWluTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBtaW5MYWJlbC5pbm5lclRleHQgPSAnbWluJztcbiAgbWluTGFiZWwuYXBwZW5kQ2hpbGQobWluVmFsdWVJbnB1dCk7XG5cbiAgbGV0IG1heExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbWF4TGFiZWwuaW5uZXJUZXh0ID0gJ21heCc7XG4gIG1heExhYmVsLmFwcGVuZENoaWxkKG1heFZhbHVlSW5wdXQpO1xuXG4gIG91dHB1dC5hcHBlbmRDaGlsZChtaW5MYWJlbCk7XG4gIG91dHB1dC5hcHBlbmRDaGlsZChzbGlkZXIpO1xuICBvdXRwdXQuYXBwZW5kQ2hpbGQobWF4TGFiZWwpO1xuXG4gIG91dHB1dC5jbGFzc0xpc3QuYWRkKCdkZXF1ZScpO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgnbXVsdGlyYW5nZS13aWRnZXQnKTtcbiAgb3V0cHV0LmNsYXNzTGlzdC5hZGQob3JpZW50YXRpb24pO1xuICBjbGFzc2VzLmZvckVhY2goYyA9PiBvdXRwdXQuY2xhc3NMaXN0LmFkZChjKSk7XG4gIHNsaWRlci5zdHlsZS5oZWlnaHQgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJzJweCcgOiBwaXhlbHMgKyAncHgnO1xuICBzbGlkZXIuc3R5bGUud2lkdGggPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gcGl4ZWxzICsgJ3B4JyA6ICcycHgnO1xuXG4gIHRodW1ic1xuICAgIC5tYXAodCA9PiB7XG4gICAgICByZXR1cm4gY3JlYXRlVGh1bWJDb250cm9sKG1pblZhbHVlLCBtYXhWYWx1ZSwgcGl4ZWxzLCBvcmllbnRhdGlvbiwgdCk7XG4gICAgfSlcbiAgICAuZm9yRWFjaCgodCwgaSkgPT4ge1xuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgYmluZElucHV0VG9UaHVtYihtaW5WYWx1ZUlucHV0LCB0LCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICAgIGJpbmRJbnB1dFRvVGh1bWIobWF4VmFsdWVJbnB1dCwgdCwgbWluVmFsdWUsIG1heFZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgc2xpZGVyLmFwcGVuZENoaWxkKHQpO1xuICAgIH0pO1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIGJpbmRJbnB1dFRvVGh1bWIoaW5wdXQsIHRodW1iLCBtaW4sIG1heCkge1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdXBkYXRlVGh1bWIpO1xuXG4gIG9uRWxlbWVudEVudGVyKGlucHV0LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHVwZGF0ZVRodW1iKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRodW1iKCkge1xuICAgIGxldCB2YWwgPSBpbnB1dC52YWx1ZTtcbiAgICBpZiAodGh1bWIudGV4dFBhcnNlcikge1xuICAgICAgdmFsID0gdGh1bWIudGV4dFBhcnNlcih2YWwpO1xuICAgIH1cblxuICAgIHZhbCA9IHBhcnNlRmxvYXQodmFsKTtcbiAgICBpZiAoIWlzTmFOKHZhbCkgJiYgdmFsIDw9IG1heCAmJiB2YWwgPj0gbWluICYmIHZhbCAhPSB0aHVtYi5nZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVub3cnKSkge1xuICAgICAgdGh1bWIuc2V0VmFsdWUodmFsKTtcbiAgICB9XG4gIH1cblxuICB0aHVtYi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVUZXh0SW5wdXQpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRleHRJbnB1dCgpIHtcbiAgICBpZiAodGh1bWIudGV4dFBhcnNlcikge1xuICAgICAgaW5wdXQudmFsdWUgPSB0aHVtYi5nZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWV0ZXh0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0LnZhbHVlID0gdGh1bWIuZ2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93Jyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGV4dElucHV0KCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbXVsdGlyYW5nZS9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNsaWRlcihtaW5WYWx1ZSA9IDAsIG1heFZhbHVlID0gMTAwLCBpbml0aWFsVmFsdWUgPSBtaW5WYWx1ZSwgc3RlcFNpemUgPSAxLCBsYWJlbCA9ICdzbGlkZXInLCBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJywgY2xhc3NlcyA9IFtdLCBsYWJlbEZyb21WYWx1ZSA9ICh2KSA9PiB2KSB7XG4gIGxldCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgnZGVxdWUnKTtcbiAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoJ3NsaWRlci13aWRnZXQnKTtcblxuICBpZiAoaXNOYU4obWluVmFsdWUpIHx8IGlzTmFOKG1heFZhbHVlKSB8fCBpc05hTihpbml0aWFsVmFsdWUpIHx8IGlzTmFOKHN0ZXBTaXplKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWluLCBtYXgsIGluaXRpYWwgdmFsdWVzIG11c3QgYWxsIGJlIG51bWJlcnMuIFN0ZXBTaXplIG11c3QgYmUgYSBudW1iZXIuJyk7XG4gIH1cblxuICBpZiAobWluVmFsdWUgPj0gbWF4VmFsdWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21pbnZhbHVlIG11c3QgYmUgbGVzcyB0aGFuIG1heHZhbHVlLicpO1xuICB9XG5cbiAgaWYgKGluaXRpYWxWYWx1ZSA8IG1pblZhbHVlIHx8IGluaXRpYWxWYWx1ZSA+IG1heFZhbHVlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbml0aWFsIHZhbHVlIG5vdCB3aXRoaW4gYm91bmRzLicpO1xuICB9XG5cbiAgaWYgKG9yaWVudGF0aW9uICE9PSAnaG9yaXpvbnRhbCcgJiYgb3JpZW50YXRpb24gIT09ICd2ZXJ0aWNhbCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ29yaWVudGF0aW9uIG11c3QgYmUgZWl0aGVyIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIiwgb3IgYmxhbmsgKGRlZmF1bHRzIHRvIGhvcml6b250YWwpJyk7XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoY2xhc3NlcykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsYXNzZXMgbXVzdCBiZSBwYXNzZWQgYXMgYW4gYXJyYXkuJyk7XG4gIH1cblxuICBvdXRwdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhbmdlJyk7XG4gIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIG1pblZhbHVlKTtcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgnbWF4JywgbWF4VmFsdWUpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGluaXRpYWxWYWx1ZSk7XG4gIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ3N0ZXAnLCBzdGVwU2l6ZSk7XG5cbiAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgZnVuY3Rpb24gc2hvdWxkU2V0T3JpZW50KCkge1xuICAgICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgNi0xMVxuICAgICAgdmFyIGlzSUUgPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcbiAgICAgIC8vIEVkZ2UgMjArXG4gICAgICB2YXIgaXNFZGdlID0gIWlzSUUgJiYgISF3aW5kb3cuU3R5bGVNZWRpYTtcbiAgICAgIC8vIEZpcmVmb3ggMS4wK1xuICAgICAgdmFyIGlzRmlyZWZveCA9IHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICAgIHJldHVybiBpc0lFIHx8IGlzRWRnZSB8fCBpc0ZpcmVmb3g7XG4gICAgfVxuICAgIGlmKHNob3VsZFNldE9yaWVudCgpID09PSB0cnVlKXtcbiAgICAgIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ29yaWVudCcsICd2ZXJ0aWNhbCcpO1xuICAgICAgb3V0cHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1vcmllbnRhdGlvbicsICd2ZXJ0aWNhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLW9yaWVudGF0aW9uJywgJ3ZlcnRpY2FsJyk7XG4gICAgfVxuICB9XG5cbiAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4gb3V0cHV0LmNsYXNzTGlzdC5hZGQoYykpO1xuXG4gIGlmIChsYWJlbCkge1xuICAgIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gIH1cblxuICBpZiAobGFiZWxGcm9tVmFsdWUpIHtcbiAgICBvdXRwdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgb3V0cHV0LnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZXRleHQnLCAndmFsdWU6ICcgKyBsYWJlbEZyb21WYWx1ZShvdXRwdXQudmFsdWUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWV0ZXh0JywgJ3ZhbHVlOiAnICsgbGFiZWxGcm9tVmFsdWUob3V0cHV0LnZhbHVlKSk7XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zbGlkZXIvaW5kZXguanMiLCJpbXBvcnQgKiBhcyBrYiBmcm9tICcuLi9fdXRpbHMva2V5Ym9hcmRVdGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUaHVtYkNvbnRyb2wobWluLCBtYXgsIHBpeGVscywgb3JpZW50YXRpb24sIHtsYWJlbCwgaW5pdGlhbFZhbHVlID0gbWluLCBzdGVwU2l6ZSA9IDEsIGNsYXNzZXMgPSBbXSwgbGFiZWxGcm9tVmFsdWUgPSAodikgPT4gdiwgdGV4dFBhcnNlcn0pIHtcbiAgaWYgKG9yaWVudGF0aW9uICE9PSAnaG9yaXpvbnRhbCcgJiYgb3JpZW50YXRpb24gIT09ICd2ZXJ0aWNhbCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09yaWVudGF0aW9uIG11c3QgYmUgZWl0aGVyIFxcJ2hvcml6b250YWxcXCcgb3IgXFwndmVydGljYWxcXCcnKTtcbiAgfVxuXG4gIGlmIChpc05hTihzdGVwU2l6ZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0ZXAgc2l6ZSBtdXN0IGJlIGEgbnVtYmVyLicpO1xuICB9XG5cbiAgaWYoIUFycmF5LmlzQXJyYXkoY2xhc3NlcykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzZXMgbXVzdCBiZSBwcm92aWRlZCBhcyBhbiBhcnJheS4nKTtcbiAgfVxuXG4gIGlmIChpc05hTihpbml0aWFsVmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbml0aWFsIHZhbHVlIG11c3QgYmUgYSBudW1iZXIuJyk7XG4gIH1cblxuICBpZiAoaW5pdGlhbFZhbHVlIDwgbWluIHx8IGluaXRpYWxWYWx1ZSA+IG1heCkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW5pdGlhbCB2YWx1ZSBtdXN0IGJlIGJldHdlZW4gbWluIGFuZCBtYXgsIGluY2x1c2l2ZS4nKTtcbiAgfVxuXG4gIGxldCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoJ3RodW1iJyk7XG4gIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnc2xpZGVyJyk7XG4gIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVtaW4nLCBtaW4pO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbWF4JywgbWF4KTtcblxuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLW9yaWVudGF0aW9uJywgb3JpZW50YXRpb24pO1xuXG4gIGlmIChsYWJlbCkge1xuICAgIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gIH1cblxuICBhZGp1c3RBcHBlYXJhbmNlKGluaXRpYWxWYWx1ZSk7XG4gIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVub3cnLCBpbml0aWFsVmFsdWUpO1xuICBsZXQgdmFsdWVUZXh0ID0gbGFiZWxGcm9tVmFsdWUoaW5pdGlhbFZhbHVlKTtcbiAgaWYgKHZhbHVlVGV4dCAhPT0gaW5pdGlhbFZhbHVlKSB7XG4gICAgb3V0cHV0LnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZXRleHQnLCB2YWx1ZVRleHQpO1xuICB9XG4gIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5jcmVtZW50Jywgc3RlcFNpemUpO1xuICBjbGFzc2VzLmZvckVhY2goYyA9PiBvdXRwdXQuY2xhc3NMaXN0LmFkZChjKSk7XG5cbiAgLy8gb3V0cHV0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgLy8gb3V0cHV0LnN0eWxlLmhlaWdodCA9ICcxMHB4JztcbiAgLy8gaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgLy8gICBvdXRwdXQuc3R5bGUudG9wID0gJy03cHgnO1xuICAvLyB9IGVsc2Uge1xuICAvLyAgIG91dHB1dC5zdHlsZS5sZWZ0ID0gJy0ycHgnO1xuICAvLyB9XG4gIC8vXG4gIC8vIG91dHB1dC5zdHlsZS53aWR0aCA9ICcxMHB4JztcbiAgLy8gb3V0cHV0LnN0eWxlLm1hcmdpbkxlZnQgPSAnLTVweCc7XG5cbiAgZnVuY3Rpb24gc2V0VmFsdWVBdHRyaWJ1dGVzKHZhbHVlKSB7XG4gICAgbGV0IHZhbHVlVGV4dCA9IGxhYmVsRnJvbVZhbHVlKHZhbHVlKTtcbiAgICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93JywgdmFsdWUpO1xuICAgIGlmICh2YWx1ZVRleHQgIT09IHZhbHVlKSB7XG4gICAgICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVldGV4dCcsIHZhbHVlVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtdmFsdWV0ZXh0Jyk7XG4gICAgfVxuXG4gICAgdmFyIGU7XG5cbiAgICB0cnkge1xuICAgICAgZSA9IG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJywgeydidWJibGVzJzp0cnVlLCAnY2FuY2VsYWJsZSc6dHJ1ZX0pO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIC8vIGhpIElFLCB5b3UncmUgZ3JlYXQuIExldCdzIGdvIGZvciBhIHdhbGsuXG4gICAgICBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICBlLmluaXRDdXN0b21FdmVudCgnY2hhbmdlJywgdHJ1ZSwgdHJ1ZSwge30pO1xuICAgIH1cblxuICAgIG91dHB1dC5kaXNwYXRjaEV2ZW50KGUpO1xuICB9XG5cbiAgbGV0IHJhbmdlID0gbWF4IC0gbWluO1xuICBmdW5jdGlvbiBnZXRQZXJjZW50YWdlKHZhbCkge1xuICAgIGxldCBub3JtYWxpemVkVmFsdWUgPSB2YWwgLSBtaW47XG4gICAgbGV0IHBlcmNlbnQgPSBub3JtYWxpemVkVmFsdWUgLyByYW5nZTtcbiAgICByZXR1cm4gcGVyY2VudDtcbiAgfVxuXG4gIC8vIHRoaXMgc2hvdWxkIHJvdW5kIHRvIHRoZSBuZWFyZXN0IHZhbHVlIHRoYXQgaXNcbiAgLy8gYW4gaW50ZWdlciBmYWN0b3Igb2YgdGhlIHN0ZXBTaXplLlxuICAvLyB3aGVuIHVzaW5nIGtleWJvYXJkLCB5b3UgYWx3YXlzIG1vdmUgdXAvZG93blxuICAvLyBieSBlaXRoZXIgMSBvciAxMCB0aW1lcyB0aGUgc3RlcFNpemU7IHdoZW4gdXNpbmdcbiAgLy8gYSBtb3VzZSwgdGhvdWdoLCB0aGUgZHJhZ2dpbmcgaXMgbW9yZSBhbmFsb2cgLSBzb1xuICAvLyB5b3UgbWlnaHQgZ2V0IGZsb2F0aW5nIHBvaW50IHZhbHVlcyB0aGF0IGFyZVxuICAvLyBvdXRzaWRlIG9mIHRoZSBhbGxvd2FibGUgcmFuZ2UuIFRoaXMgZml4ZXMgdGhhdC5cbiAgZnVuY3Rpb24gbm9ybWFsaXplKHYpIHtcbiAgICBsZXQgcmFuZ2UgPSB7XG4gICAgICBsb3c6IE1hdGguZmxvb3IodiAvIHN0ZXBTaXplKSAqIHN0ZXBTaXplLFxuICAgICAgaGlnaDogTWF0aC5jZWlsKHYgLyBzdGVwU2l6ZSkgKiBzdGVwU2l6ZVxuICAgIH07XG5cbiAgICBsZXQgbG93RGVsdGEgPSByYW5nZS5sb3cgLSB2O1xuICAgIGxldCBoaWdoRGVsdGEgPSByYW5nZS5oaWdoIC0gdjtcblxuICAgIGlmIChNYXRoLmFicyhsb3dEZWx0YSkgPD0gTWF0aC5hYnMoaGlnaERlbHRhKSkge1xuICAgICAgcmV0dXJuIHJhbmdlLmxvdztcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZ2UuaGlnaDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkanVzdFZhbHVlKHBpeGVsUG9zaXRpb24pIHtcbiAgICBsZXQgcGVyY2VudCA9IHBpeGVsUG9zaXRpb24gLyBwaXhlbHM7XG4gICAgbGV0IG9sZFZhbHVlID0gcGFyc2VGbG9hdChvdXRwdXQuZ2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93JykpO1xuICAgIGxldCBuZXdWYWx1ZSA9IG1pbiArIChyYW5nZSAqIHBlcmNlbnQpO1xuXG4gICAgbmV3VmFsdWUgPSBub3JtYWxpemUobmV3VmFsdWUpO1xuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgc2V0VmFsdWVBdHRyaWJ1dGVzKG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGp1c3RBcHBlYXJhbmNlKHZhbHVlKSB7XG4gICAgbGV0IG9mZnNldCA9IHBpeGVscyAqIGdldFBlcmNlbnRhZ2UodmFsdWUpO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBvdXRwdXQuc3R5bGUubGVmdCA9IG9mZnNldCArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5zdHlsZS5ib3R0b20gPSAob2Zmc2V0IC0gNykgKyAncHgnO1xuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlEZWx0YShkZWx0YSkge1xuICAgIGxldCBvbGRWYWx1ZSA9IG91dHB1dC5nZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVub3cnKTtcbiAgICBsZXQgbmV3VmFsdWUgPSBwYXJzZUZsb2F0KG9sZFZhbHVlKSArIGRlbHRhO1xuICAgIHdoaWxlKG5ld1ZhbHVlIDwgbWluKSB7XG4gICAgICBuZXdWYWx1ZSsrO1xuICAgIH1cblxuICAgIHdoaWxlKG5ld1ZhbHVlID4gbWF4KSB7XG4gICAgICBuZXdWYWx1ZS0tO1xuICAgIH1cblxuICAgIGlmIChuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgIHNldFZhbHVlQXR0cmlidXRlcyhuZXdWYWx1ZSk7XG4gICAgICBhZGp1c3RBcHBlYXJhbmNlKG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBrYi5vbkVsZW1lbnRSaWdodChvdXRwdXQsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgYXBwbHlEZWx0YShzdGVwU2l6ZSk7XG4gIH0pO1xuXG4gIGtiLm9uRWxlbWVudFVwKG91dHB1dCwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBhcHBseURlbHRhKHN0ZXBTaXplKTtcbiAgfSk7XG5cbiAga2Iub25FbGVtZW50TGVmdChvdXRwdXQsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgYXBwbHlEZWx0YSgtc3RlcFNpemUpO1xuICB9KTtcblxuICBrYi5vbkVsZW1lbnREb3duKG91dHB1dCwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBhcHBseURlbHRhKC1zdGVwU2l6ZSk7XG4gIH0pO1xuXG4gIGtiLm9uRWxlbWVudFBhZ2VVcChvdXRwdXQsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgYXBwbHlEZWx0YSgxMCAqIHN0ZXBTaXplKTtcbiAgfSk7XG5cbiAga2Iub25FbGVtZW50UGFnZURvd24ob3V0cHV0LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGFwcGx5RGVsdGEoLTEwICogc3RlcFNpemUpO1xuICB9KTtcblxuICBvdXRwdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgIHN0YXJ0RHJhZygpO1xuICB9KTtcblxuICBmdW5jdGlvbiBzdGFydERyYWcoKSB7XG4gICAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkRyYWcpO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BEcmFnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBvaW50KGUpIHtcbiAgICBsZXQgeCA9IGUuY2xpZW50WCAtIG91dHB1dC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgbGV0IHkgPSBlLmNsaWVudFkgLSBvdXRwdXQucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICByZXR1cm4ge3gsIHl9O1xuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnKGUpIHtcbiAgICBsZXQge3gsIHl9ID0gZ2V0UG9pbnQoZSk7XG4gICAgbGV0IHRhcmdldFZhbHVlID0gKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpID8geCAtIDEwOiBwaXhlbHMgLSB5O1xuXG4gICAgd2hpbGUodGFyZ2V0VmFsdWUgPCAwKSB7XG4gICAgICB0YXJnZXRWYWx1ZSsrO1xuICAgIH1cblxuICAgIHdoaWxlKHRhcmdldFZhbHVlID4gcGl4ZWxzKSB7XG4gICAgICB0YXJnZXRWYWx1ZS0tO1xuICAgIH1cblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBvdXRwdXQuc3R5bGUubGVmdCA9IHRhcmdldFZhbHVlICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnN0eWxlLmJvdHRvbSA9ICh0YXJnZXRWYWx1ZSAtIDcpICsgJ3B4JztcbiAgICB9XG5cbiAgICBhZGp1c3RWYWx1ZSh0YXJnZXRWYWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wRHJhZygpIHtcbiAgICBvdXRwdXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uRHJhZyk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcERyYWcpO1xuXG4gICAgbGV0IGZpbmFsVmFsdWUgPSBvdXRwdXQuZ2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93Jyk7XG5cbiAgICBhZGp1c3RBcHBlYXJhbmNlKHBhcnNlRmxvYXQoZmluYWxWYWx1ZSkpO1xuICB9XG5cbiAgYWRqdXN0QXBwZWFyYW5jZShpbml0aWFsVmFsdWUpO1xuXG4gIG91dHB1dC5zZXRWYWx1ZSA9ICh2KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gbm9ybWFsaXplKHYpO1xuICAgIHNldFZhbHVlQXR0cmlidXRlcyh2YWx1ZSk7XG4gICAgYWRqdXN0QXBwZWFyYW5jZSh2YWx1ZSk7XG4gIH07XG5cbiAgb3V0cHV0LnRleHRQYXJzZXIgPSB0ZXh0UGFyc2VyO1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbXVsdGlyYW5nZS90aHVtYi5qcyIsImltcG9ydCB7dmFsaWRhdGVEYXRhfSBmcm9tICcuL3V0aWxzL2RhdGFWYWxpZGF0b3InO1xuaW1wb3J0IHtjcmVhdGVIaW50fSBmcm9tICcuL3V0aWxzL2Zvcm1hdHRlcic7XG5pbXBvcnQge2dlbmVyYXRlR3VpZH0gZnJvbSAnLi4vX3V0aWxzL2d1aWRVdGlscy5qcyc7XG5pbXBvcnQgKiBhcyBrYiBmcm9tICcuLi9fdXRpbHMva2V5Ym9hcmRVdGlscyc7XG5pbXBvcnQgKiBhcyBuYXYgZnJvbSAnLi91dGlscy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7ZWxlbWVudElzQ2hpbGRPZkVsZW1lbnR9IGZyb20gJy4uL191dGlscy9jb250YWluZXJVdGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUF1dG9jb21wbGV0ZShkYXRhKSB7XG4gIGlmICghZGF0YSkgeyB0aHJvdyBuZXcgRXJyb3IoJ2RhdGEgbXVzdCBiZSBwcm92aWRlZCcpOyB9XG4gIGlmICghdmFsaWRhdGVEYXRhKGRhdGEpKSB7IHRocm93IG5ldyBFcnJvcignZGF0YSBmb3JtYXQgaW52YWxpZC4gTXVzdCBlaXRoZXIgYmUgYW4gYXJyYXkgb2Ygc3RyaW5ncyBvciBhbiBhcnJheSBvZiBvYmplY3RzIHdpdGggYSBcImxhYmVsXCIgZmllbGQuJyk7IH1cblxuICBsZXQgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG91dHB1dC5jbGFzc0xpc3QuYWRkKCdkZXF1ZScpO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgnYXV0b2NvbXBsZXRlJyk7XG5cbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbGV0IGhpbnRJZCA9IGdlbmVyYXRlR3VpZCgpO1xuICAvLyB0aGlzIHByZXZlbnRzIHRoZSBicm93c2VycyBmcm9tIGhlbHBmdWxseSBzdWdnZXN0aW5nXG4gIC8vIHRoZWlyIG93biBhdXRvY29tcGxldGUgZmVlZGJhY2suXG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnY29tYm9ib3gnKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1hdXRvY29tcGxldGUnLCAnbGlzdCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtb3ducycsIGhpbnRJZCk7XG5cbiAgbGV0IGhpbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgaGludHMuaWQgPSBoaW50SWQ7XG4gIGhpbnRzLmNsYXNzTGlzdC5hZGQoJ2F1dG9jb21wbGV0ZV9oaW50cycpO1xuICBoaW50cy5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbGlzdGJveCcpO1xuXG4gIGxldCBsaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsaXZlLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5aGlkZGVuJyk7XG5cbiAgbGV0IG5vdGlmaWNhdGlvblRpbWVvdXQ7XG5cbiAgZnVuY3Rpb24gaW1tZWRpYXRlTm90aWZpY2F0aW9uKCkge1xuICAgIGxldCBoaWdobGlnaHQgPSBoaW50cy5xdWVyeVNlbGVjdG9yKCcuaGlnaGxpZ2h0Jyk7XG4gICAgaWYgKGhpZ2hsaWdodCkge1xuICAgICAgbm90aWZ5KGxpdmUsIGhpZ2hsaWdodC5pbm5lclRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVOb3RpZmljYXRpb24oKSB7XG4gICAgaWYgKG5vdGlmaWNhdGlvblRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChub3RpZmljYXRpb25UaW1lb3V0KTtcbiAgICAgIG5vdGlmaWNhdGlvblRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGxldCBmaWx0ZXJlZE9wdGlvbnMgPSBoaW50cy5jaGlsZHJlbjtcbiAgICBpZiAoZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cblxuICAgIG5vdGlmaWNhdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBtZXNzYWdlID0gYFRoZXJlIGFyZSBjdXJyZW50bHkgJHtmaWx0ZXJlZE9wdGlvbnMubGVuZ3RofSBvcHRpb25zIHN0YXJ0aW5nIHdpdGggJHtpbnB1dC52YWx1ZS5zcGxpdCgnJykuam9pbignLScpfS5gO1xuICAgICAgbGV0IGhpZ2hsaWdodCA9IGhpbnRzLnF1ZXJ5U2VsZWN0b3IoJy5oaWdobGlnaHQnKTtcbiAgICAgIGlmIChoaWdobGlnaHQpIHtcbiAgICAgICAgbWVzc2FnZSArPSBgIFByZXNzIGVudGVyIHRvIHNlbGVjdCAke2hpZ2hsaWdodC5pbm5lclRleHR9YDtcbiAgICAgIH1cblxuICAgICAgbm90aWZ5KGxpdmUsIG1lc3NhZ2UpO1xuICAgIH0sIDEyMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd09wdGlvbnMoKSB7XG4gICAgbGV0IGZpbHRlcmVkT3B0aW9ucyA9IGlucHV0LnZhbHVlLmxlbmd0aCA+IDAgPyBmaWx0ZXIoZGF0YSwgaW5wdXQudmFsdWUpIDogZGF0YTtcbiAgICByZW5kZXJPcHRpb25zKGhpbnRzLCBmaWx0ZXJlZE9wdGlvbnMpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgcHJlcGFyZU5vdGlmaWNhdGlvbigpO1xuICB9XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHNob3dPcHRpb25zKCk7XG4gICAgfVxuICB9KTtcblxuICBrYi5vbkVsZW1lbnRTcGFjZShpbnB1dCwgKGUpID0+IHtcbiAgICBpZiAoZS5jdHJsS2V5ICYmIGUuYWx0S2V5KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgc2hvd09wdGlvbnMoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGtiLm9uRWxlbWVudFVwKGlucHV0LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKGhpbnRzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHNob3dPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgbmF2LmhpZ2hsaWdodFByZXYoaGludHMpO1xuICAgIGxldCBoaWdobGlnaHRlZCA9IGhpbnRzLnF1ZXJ5U2VsZWN0b3IoJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpO1xuICAgIGlmIChoaWdobGlnaHRlZCkge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBoaWdobGlnaHRlZC5pZCk7XG4gICAgfVxuICAgIGltbWVkaWF0ZU5vdGlmaWNhdGlvbigpO1xuICB9KTtcblxuICBrYi5vbkVsZW1lbnREb3duKGlucHV0LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKGhpbnRzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHNob3dPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgbmF2LmhpZ2hsaWdodE5leHQoaGludHMpO1xuICAgIGxldCBoaWdobGlnaHRlZCA9IGhpbnRzLnF1ZXJ5U2VsZWN0b3IoJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpO1xuICAgIGlmIChoaWdobGlnaHRlZCkge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBoaWdobGlnaHRlZC5pZCk7XG4gICAgfVxuICAgIGltbWVkaWF0ZU5vdGlmaWNhdGlvbigpO1xuICB9KTtcblxuICBrYi5vbkVsZW1lbnRFbnRlcihpbnB1dCwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIG5hdi5jb25maXJtVmFsdWUoaW5wdXQsIGhpbnRzKTtcbiAgICBuYXYuY2xlYXJMaXN0KGhpbnRzKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICBjbGVhclRpbWVvdXQobm90aWZpY2F0aW9uVGltZW91dCk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGxldCBjbGlja1RhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmICghZWxlbWVudElzQ2hpbGRPZkVsZW1lbnQoY2xpY2tUYXJnZXQsIG91dHB1dCkpIHtcbiAgICAgIG5hdi5jbGVhckxpc3QoaGludHMpO1xuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGUpID0+IHtcbiAgICBsZXQgZm9jdXNUYXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoIWVsZW1lbnRJc0NoaWxkT2ZFbGVtZW50KGZvY3VzVGFyZ2V0LCBvdXRwdXQpKSB7XG4gICAgICBuYXYuY2xlYXJMaXN0KGhpbnRzKTtcbiAgICB9XG4gIH0pO1xuXG4gIGtiLm9uRWxlbWVudEVzY2FwZShpbnB1dCwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChoaW50cy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBuYXYuY2xlYXJMaXN0KGhpbnRzKTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgY2xlYXJUaW1lb3V0KG5vdGlmaWNhdGlvblRpbWVvdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICB9KTtcblxuICBoaW50cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBuYXYuY29uZmlybVZhbHVlKGlucHV0LCBoaW50cyk7XG4gICAgbmF2LmNsZWFyTGlzdChoaW50cyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgY2xlYXJUaW1lb3V0KG5vdGlmaWNhdGlvblRpbWVvdXQpO1xuICB9KTtcblxuICBsaXZlLmNsYXNzTGlzdC5hZGQoJ2xpdmUtdXBkYXRlLXJlZ2lvbicpO1xuICBsaXZlLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpO1xuXG4gIG91dHB1dC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIG91dHB1dC5hcHBlbmRDaGlsZChoaW50cyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGl2ZSk7XG5cbiAgb3V0cHV0LmdldElucHV0RWxlbWVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH07XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyT3B0aW9ucyhsaXN0LCBvcHRpb25zKSB7XG4gIGxpc3QuaW5uZXJIVE1MID0gJyc7XG4gIG9wdGlvbnNcbiAgICAubWFwKGl0ZW0gPT4gY3JlYXRlSGludChsaXN0LCBpdGVtKSlcbiAgICAuZm9yRWFjaChpdGVtID0+IGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSkpO1xuXG4gIGxldCBmaXJzdEl0ZW0gPSBsaXN0LnF1ZXJ5U2VsZWN0b3IoJ2xpJyk7XG4gIGlmIChmaXJzdEl0ZW0pIHtcbiAgICBmaXJzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyKGRhdGEsIHByb21wdCkge1xuICBpZiAocHJvbXB0Lmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gW107IH1cbiAgcmV0dXJuIGRhdGEuZmlsdGVyKHN0ciA9PiBzdHIudG9Mb3dlckNhc2UoKS5pbmRleE9mKHByb21wdC50b0xvd2VyQ2FzZSgpKSA9PT0gMCk7XG59XG5cbmxldCBjbGVhck5vdGlmaWNhdGlvblRpbWVvdXQ7XG5mdW5jdGlvbiBub3RpZnkobGl2ZSwgbWVzc2FnZSkge1xuICBpZiAoY2xlYXJOb3RpZmljYXRpb25UaW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KGNsZWFyTm90aWZpY2F0aW9uVGltZW91dCk7XG4gICAgY2xlYXJOb3RpZmljYXRpb25UaW1lb3V0ID0gbnVsbDtcbiAgfVxuXG4gIGxpdmUuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgY2xlYXJOb3RpZmljYXRpb25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbGl2ZS5pbm5lclRleHQgPSAnJztcbiAgfSwgNjAwMCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXV0b2NvbXBsZXRlL2luZGV4LmpzIiwiZnVuY3Rpb24gaXNTdHJpbmcodikge1xuICByZXR1cm4gdiAmJiB0eXBlb2YgdiA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRPYmplY3Qodikge1xuICByZXR1cm4gdiAmJiB0eXBlb2Ygdi5sYWJlbCA9PT0gJ3N0cmluZyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZURhdGEoZGF0YSkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICByZXR1cm4gZGF0YS5ldmVyeShpc1N0cmluZykgfHwgZGF0YS5ldmVyeShpc1ZhbGlkT2JqZWN0KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXV0b2NvbXBsZXRlL3V0aWxzL2RhdGFWYWxpZGF0b3IuanMiLCJpbXBvcnQge3NldEhpZ2hsaWdodH0gZnJvbSAnLi9uYXZpZ2F0aW9uJztcbmltcG9ydCB7Z2VuZXJhdGVHdWlkfSBmcm9tICcuLi8uLi9fdXRpbHMvZ3VpZFV0aWxzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhpbnQobGlzdCwgaXRlbSkge1xuICBpZiAoaXRlbS5sYWJlbCkge1xuICAgIHJldHVybiB3cmFwSXRlbShsaXN0LCBpdGVtKTtcbiAgfVxuXG4gIHJldHVybiB3cmFwU3RyaW5nKGxpc3QsIGl0ZW0pO1xufVxuXG5mdW5jdGlvbiB3cmFwSXRlbShsaXN0LCBpdGVtKSB7XG4gIGxldCBvdXRwdXQgPSB3cmFwU3RyaW5nKGxpc3QsIGl0ZW0ubGFiZWwpO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgnY29tcGxleF9pdGVtJyk7XG4gIG91dHB1dC4kaXRlbSA9IGl0ZW07XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gd3JhcFN0cmluZyhsaXN0LCBzdHJpbmcpIHtcbiAgbGV0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG91dHB1dC5pZCA9IGdlbmVyYXRlR3VpZCgpO1xuICBvdXRwdXQuaW5uZXJUZXh0ID0gc3RyaW5nO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgnYXV0b2NvbXBsZXRlX2hpbnQnKTtcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgncm9sZScsICdvcHRpb24nKTtcblxuICBvdXRwdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgIHNldEhpZ2hsaWdodChsaXN0LCBvdXRwdXQpO1xuICB9KTtcblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2F1dG9jb21wbGV0ZS91dGlscy9mb3JtYXR0ZXIuanMiLCJleHBvcnQgZnVuY3Rpb24gc2V0SGlnaGxpZ2h0KGxpc3QsIGl0ZW0pIHtcbiAgbGV0IGFsbEl0ZW1zID0gbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGl0ZW0gPT09IGFsbEl0ZW1zW2ldKSB7XG4gICAgICBhbGxJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcbiAgICAgIGFsbEl0ZW1zW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsbEl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuICAgICAgYWxsSXRlbXNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWdobGlnaHROZXh0KGxpc3QpIHtcbiAgaWYgKGxpc3QuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuXG4gIGxldCB0YXJnZXQ7XG4gIGxldCBjdXJyZW50ID0gbGlzdC5xdWVyeVNlbGVjdG9yKCcuaGlnaGxpZ2h0Jyk7XG4gIGlmICghY3VycmVudCkge1xuICAgIHRhcmdldCA9IGxpc3QucXVlcnlTZWxlY3RvcignbGknKTtcbiAgICByZXR1cm4gc2V0SGlnaGxpZ2h0KGxpc3QsIHRhcmdldCk7XG4gIH1cblxuICB0YXJnZXQgPSBjdXJyZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0YXJnZXQgPSBsaXN0LnF1ZXJ5U2VsZWN0b3IoJ2xpJyk7XG4gIH1cblxuICBzZXRIaWdobGlnaHQobGlzdCwgdGFyZ2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZ2hsaWdodFByZXYobGlzdCkge1xuICBpZiAobGlzdC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgbGV0IHRhcmdldDtcbiAgbGV0IGN1cnJlbnQgPSBsaXN0LnF1ZXJ5U2VsZWN0b3IoJy5oaWdobGlnaHQnKTtcbiAgaWYgKCFjdXJyZW50KSB7XG4gICAgdGFyZ2V0ID0gbGlzdC5xdWVyeVNlbGVjdG9yKCdsaScpO1xuICAgIHJldHVybiBzZXRIaWdobGlnaHQobGlzdCwgdGFyZ2V0KTtcbiAgfVxuXG4gIHRhcmdldCA9IGN1cnJlbnQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgdGFyZ2V0ID0gY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG4gIH1cblxuICBzZXRIaWdobGlnaHQobGlzdCwgdGFyZ2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTGlzdChsaXN0KSB7XG4gIGlmIChsaXN0KSB7XG4gICAgbGlzdC5pbm5lckhUTUwgPSAnJztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlybVZhbHVlKGlucHV0LCBsaXN0KSB7XG4gIGxldCBsaSA9IGxpc3QucXVlcnlTZWxlY3RvcignLmhpZ2hsaWdodCcpO1xuICBpZiAobGkpIHtcbiAgICBpbnB1dC52YWx1ZSA9IGxpLmlubmVyVGV4dDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2F1dG9jb21wbGV0ZS91dGlscy9uYXZpZ2F0aW9uLmpzIiwiaW1wb3J0IHt2YWxpZGF0ZUlucHV0fSBmcm9tICcuL3ZhbGlkYXRvcic7XG5pbXBvcnQgKiBhcyBidWlsZGVyIGZyb20gJy4vYnVpbGRlcic7XG5pbXBvcnQge2dlbmVyYXRlR3VpZH0gZnJvbSAnLi4vX3V0aWxzL2d1aWRVdGlscyc7XG5pbXBvcnQge2NyZWF0ZVNpbmdsZVRhYnN0b3BTdHJ1Y3R1cmV9IGZyb20gJy4uL191dGlscy90YWJzdG9wVXRpbHMnO1xuaW1wb3J0IHtidWlsZENhcm91c2VsQ29udHJvbHN9IGZyb20gJy4vY2Fyb3VzZWxDb250cm9scyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGFicGFuZWwoZGF0YSwgY29uZmlnKSB7XG4gIHZhbGlkYXRlSW5wdXQoZGF0YSk7XG5cbiAgbGV0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgnZGVxdWUnKTtcbiAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoJ3RhYlBhbmVsJyk7XG4gIG91dHB1dC5pZCA9IGdlbmVyYXRlR3VpZCgpO1xuXG4gIGxldCB0YWJsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdGFibGlzdC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndGFibGlzdCcpO1xuXG5cbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50QXJlYScpO1xuXG4gIGxldCBlbGVtZW50cyA9IGRhdGEubWFwKGl0ZW0gPT4ge1xuICAgIGxldCBjb250ZW50SUQgPSBnZW5lcmF0ZUd1aWQoKTtcbiAgICBsZXQgdGFiSUQgPSBnZW5lcmF0ZUd1aWQoKTtcbiAgICBsZXQgdGFiID0gYnVpbGRlci5jcmVhdGVUYWIoaXRlbS5oZWFkZXIsIHRhYklELCBjb250ZW50SUQpO1xuICAgIGxldCBwYW5lbCA9IGJ1aWxkZXIuY3JlYXRlUGFuZWwoaXRlbS5jb250ZW50LCB0YWJJRCwgY29udGVudElEKTtcblxuICAgIHRhYmxpc3QuYXBwZW5kQ2hpbGQodGFiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhbmVsKTtcblxuICAgIHRhYi5hY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250ZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjb250ZW50LmNoaWxkcmVuW2ldLmlkID09PSBjb250ZW50SUQpIHtcbiAgICAgICAgICBjb250ZW50LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRlbnQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHt0YWIsIHBhbmVsfTtcbiAgfSk7XG5cbiAgbGV0IHRhYnMgPSBlbGVtZW50cy5tYXAoZSA9PiBlLnRhYik7XG5cbiAgYXBwbHlOYXZpZ2F0aW9uTG9naWModGFicywgY29uZmlnKTtcblxuICBvdXRwdXQuYXBwZW5kQ2hpbGQodGFibGlzdCk7XG4gIG91dHB1dC5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICBsZXQgYXV0b3BsYXlDb250cm9scztcbiAgaWYgKGNvbmZpZy5hdXRvcGxheSkge1xuICAgIGxldCBhdXRvcGxheUNvbmZpZyA9IHtcbiAgICAgIG9uUGxheTogKCkgPT4ge30sXG4gICAgICBvblBhdXNlOiAoKSA9PiB7fSxcbiAgICAgIG9uTmV4dDogKCkgPT4ge1xuICAgICAgICBzZWxlY3RUYWIoZ2V0TmV4dChnZXRDdXJyZW50VGFiKCkpKTtcbiAgICAgIH0sXG4gICAgICBvblByZXZpb3VzOiAoKSA9PiB7XG4gICAgICAgIHNlbGVjdFRhYihnZXRQcmV2KGdldEN1cnJlbnRUYWIoKSkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBhdXRvcGxheUNvbnRyb2xzID0gYnVpbGRDYXJvdXNlbENvbnRyb2xzKGF1dG9wbGF5Q29uZmlnLCBjb25maWcuYXV0b3BsYXkgfHwgMzAwMCk7XG4gICAgb3V0cHV0LmFwcGVuZENoaWxkKGF1dG9wbGF5Q29udHJvbHMpO1xuICB9XG5cbiAgdGFibGlzdC5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgdGFibGlzdC5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICBjb250ZW50LmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gIGxldCBnZXRDdXJyZW50VGFiID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRhYnMuZmlsdGVyKHQgPT4ge1xuICAgICAgcmV0dXJuIHQuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpID09PSAnMCc7XG4gICAgfSlbMF07XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0UHJldihpdGVtKSB7XG4gICAgbGV0IG91dHB1dCA9IGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZyB8fCB0YWJzW3RhYnMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5leHQoaXRlbSkge1xuICAgIGxldCBvdXRwdXQgPSAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcgfHwgdGFic1swXTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0VGFiKGl0ZW0pIHtcbiAgICB0YWJzLmZvckVhY2goaSA9PiB7XG4gICAgICBpZiAoaSA9PT0gaXRlbSkge1xuICAgICAgICBpLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgaS5hY3RpdmF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGkuYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgaS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5TmF2aWdhdGlvbkxvZ2ljKHRhYnMsIHthdXRvc2VsZWN0LCB2ZXJ0aWNhbH0pIHtcbiAgICBsZXQgdGFic3RvcENvbmZpZyA9IHtcbiAgICAgIG9uU3BhY2U6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0uYWN0aXZhdGUpIHtcbiAgICAgICAgICBpdGVtLmFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGl0ZW0uYWN0aXZhdGUoKTtcbiAgICAgIH0sXG4gICAgICBzZWxlY3Q6IHNlbGVjdFRhYixcbiAgICAgIHVzZUFyaWFTZWxlY3RlZDogdHJ1ZSxcbiAgICAgIGF1dG9zZWxlY3RcbiAgICB9O1xuXG4gICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICB0YWJzdG9wQ29uZmlnLm9uVXAgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGlmIChhdXRvcGxheUNvbnRyb2xzKSB7XG4gICAgICAgICAgYXV0b3BsYXlDb250cm9scy5wYXVzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldFByZXYoaXRlbSk7XG4gICAgICB9O1xuXG4gICAgICB0YWJzdG9wQ29uZmlnLm9uRG93biA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgaWYgKGF1dG9wbGF5Q29udHJvbHMpIHtcbiAgICAgICAgICBhdXRvcGxheUNvbnRyb2xzLnBhdXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0TmV4dChpdGVtKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYnN0b3BDb25maWcub25MZWZ0ID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBpZiAoYXV0b3BsYXlDb250cm9scykge1xuICAgICAgICAgIGF1dG9wbGF5Q29udHJvbHMucGF1c2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQcmV2KGl0ZW0pO1xuICAgICAgfTtcblxuICAgICAgdGFic3RvcENvbmZpZy5vblJpZ2h0ID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBpZiAoYXV0b3BsYXlDb250cm9scykge1xuICAgICAgICAgIGF1dG9wbGF5Q29udHJvbHMucGF1c2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXROZXh0KGl0ZW0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjcmVhdGVTaW5nbGVUYWJzdG9wU3RydWN0dXJlKHRhYnMsIHRhYnN0b3BDb25maWcpO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGFicGFuZWwvaW5kZXguanMiLCJleHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVJbnB1dChkYXRhKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZGF0YSBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gIH1cblxuICBpZiAoIWRhdGEuZXZlcnkoaXRlbSA9PiBpdGVtLmhlYWRlciAmJiBpdGVtLmNvbnRlbnQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdlYWNoIGl0ZW0gaW4geW91ciBkYXRhIG11c3QgaGF2ZSBhIGhlYWRlciBmaWVsZCBhbmQgYSBjb250ZW50IGZpZWxkLicpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RhYnBhbmVsL3ZhbGlkYXRvci5qcyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWIoZGF0YSwgdGFiSUQsIGNvbnRlbnRJRCkge1xuICBsZXQgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWInKTtcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgb3V0cHV0LmlkID0gdGFiSUQ7XG4gIGlmIChjb250ZW50SUQpIHtcbiAgICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJywgY29udGVudElEKTtcbiAgfVxuXG4gIGlmIChkYXRhLm1hcmt1cCkge1xuICAgIG91dHB1dC5pbm5lckhUTUwgPSBkYXRhLm1hcmt1cDtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQuaW5uZXJUZXh0ID0gZGF0YS5sYWJlbDtcbiAgfVxuICBpZiAoIWRhdGEuY2xhc3NlcykgeyBkYXRhLmNsYXNzZXMgPSBbXTsgfVxuXG4gIGRhdGEuY2xhc3Nlcy5mb3JFYWNoKGMgPT4gb3V0cHV0LmNsYXNzTGlzdC5hZGQoYykpO1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYW5lbChkYXRhLCB0YWJJRCwgY29udGVudElEKSB7XG4gIGxldCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWJwYW5lbCcpO1xuICBvdXRwdXQuaWQgPSBjb250ZW50SUQ7XG4gIG91dHB1dC5hcHBlbmRDaGlsZChkYXRhLmVsZW1lbnQpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCB0YWJJRCk7XG5cbiAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RhYnBhbmVsL2J1aWxkZXIuanMiLCJpbXBvcnQgKiBhcyBrYiBmcm9tICcuL2tleWJvYXJkVXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2luZ2xlVGFic3RvcFN0cnVjdHVyZShpdGVtcywgY29uZmlnKSB7XG4gIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICAgIGlmIChjb25maWcub25Gb2N1cykge1xuICAgICAgICBjb25maWcub25Gb2N1cyhpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghY29uZmlnLnNlbGVjdCkge1xuICAgICAgY29uZmlnLnNlbGVjdCA9ICgpID0+IHt9O1xuICAgIH1cblxuICAgIGlmIChjb25maWcub25DbGljaykge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uZmlnLm9uQ2xpY2soaXRlbSk7XG4gICAgICAgIGNvbmZpZy5zZWxlY3QoaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uU3BhY2UpIHtcbiAgICAgIGtiLm9uRWxlbWVudFNwYWNlKGl0ZW0sIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uZmlnLm9uU3BhY2UoaXRlbSk7XG4gICAgICAgIGNvbmZpZy5zZWxlY3QoaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uTGVmdCkge1xuICAgICAga2Iub25FbGVtZW50TGVmdChpdGVtLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgbGV0IHRhcmdldCA9IGNvbmZpZy5vbkxlZnQoaXRlbSk7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICBpZiAoY29uZmlnLmF1dG9zZWxlY3QpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zZWxlY3QodGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub25SaWdodCkge1xuICAgICAga2Iub25FbGVtZW50UmlnaHQoaXRlbSwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gY29uZmlnLm9uUmlnaHQoaXRlbSk7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICBpZiAoY29uZmlnLmF1dG9zZWxlY3QpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zZWxlY3QodGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub25VcCkge1xuICAgICAga2Iub25FbGVtZW50VXAoaXRlbSwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gY29uZmlnLm9uVXAoaXRlbSk7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICBpZiAoY29uZmlnLmF1dG9zZWxlY3QpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zZWxlY3QodGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub25Eb3duKSB7XG4gICAgICBrYi5vbkVsZW1lbnREb3duKGl0ZW0sIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IGNvbmZpZy5vbkRvd24oaXRlbSk7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICBpZiAoY29uZmlnLmF1dG9zZWxlY3QpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zZWxlY3QodGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub25Ib21lKSB7XG4gICAgICBrYi5vbkVsZW1lbnRIb21lKGl0ZW0sIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IGNvbmZpZy5vbkhvbWUoaXRlbSk7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICBpZiAoY29uZmlnLmF1dG9zZWxlY3QpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zZWxlY3QodGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub25FbmQpIHtcbiAgICAgIGtiLm9uRWxlbWVudEVuZChpdGVtLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGxldCB0YXJnZXQgPSBjb25maWcub25FbmQoaXRlbSk7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICBpZiAoY29uZmlnLmF1dG9zZWxlY3QpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zZWxlY3QodGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub25QYWdlVXApIHtcbiAgICAgIGtiLm9uRWxlbWVudFBhZ2VVcChpdGVtLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGxldCB0YXJnZXQgPSBjb25maWcub25QYWdlVXAoaXRlbSk7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICBpZiAoY29uZmlnLmF1dG9zZWxlY3QpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zZWxlY3QodGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub25QYWdlRG93bikge1xuICAgICAga2Iub25FbGVtZW50UGFnZURvd24oaXRlbSwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gY29uZmlnLm9uUGFnZURvd24oaXRlbSk7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICBpZiAoY29uZmlnLmF1dG9zZWxlY3QpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zZWxlY3QodGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub25DaGFyYWN0ZXIpIHtcbiAgICAgIGtiLm9uRWxlbWVudENoYXJhY3RlcihpdGVtLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGxldCB0YXJnZXQgPSBjb25maWcub25DaGFyYWN0ZXIoaXRlbSk7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICBpZiAoY29uZmlnLmF1dG9zZWxlY3QpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zZWxlY3QodGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL191dGlscy90YWJzdG9wVXRpbHMuanMiLCJmdW5jdGlvbiBjcmVhdGVCdXR0b24obGFiZWwsIGNsYXNzZXMgPSBbXSkge1xuICBsZXQgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG91dHB1dC5pbm5lclRleHQgPSBsYWJlbDtcbiAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4gb3V0cHV0LmNsYXNzTGlzdC5hZGQoYykpO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDYXJvdXNlbENvbnRyb2xzKHtvblBsYXksIG9uUGF1c2UsIG9uTmV4dCwgb25QcmV2aW91c30sIGR1cmF0aW9uID0gMjAwMCkge1xuICBsZXQgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG91dHB1dC5jbGFzc05hbWUgPSAnb3V0cHV0LXdyYXAnO1xuICBsZXQgcHJldkJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncHJldicsIFsncHJldiddKTtcbiAgbGV0IHBsYXlCdXR0b24gPSBjcmVhdGVCdXR0b24oJ3BsYXknLCBbJ3BsYXknLCAnaGlkZGVuJ10pO1xuICBsZXQgcGF1c2VCdXR0b24gPSBjcmVhdGVCdXR0b24oJ3BhdXNlJywgWydwYXVzZSddKTtcbiAgbGV0IG5leHRCdXR0b24gPSBjcmVhdGVCdXR0b24oJ25leHQnLCBbJ25leHQnXSk7XG5cbiAgbGV0IHBsYXlJbnRlcnZhbDtcblxuICBjb25zdCBzdGFydFBsYXlpbmcgPSAoKSA9PiB7XG4gICAgaWYgKHBsYXlJbnRlcnZhbCkgeyBzdG9wUGxheWluZygpOyB9XG4gICAgcGxheUludGVydmFsID0gc2V0SW50ZXJ2YWwobmV4dCwgZHVyYXRpb24pO1xuICAgIHBsYXlCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgcGF1c2VCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgaWYgKG9uUGxheSkgeyBvblBsYXkoKTsgfVxuICB9O1xuXG4gIGNvbnN0IHN0b3BQbGF5aW5nID0gKCkgPT4ge1xuICAgIGNsZWFySW50ZXJ2YWwocGxheUludGVydmFsKTtcbiAgICBwbGF5SW50ZXJ2YWwgPSBudWxsO1xuICAgIHBsYXlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgcGF1c2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgaWYgKG9uUGF1c2UpIHsgb25QYXVzZSgpOyB9XG4gIH07XG5cbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICBpZiAob25OZXh0KSB7IG9uTmV4dCgpOyB9XG4gIH07XG5cbiAgY29uc3QgcHJldiA9ICgpID0+IHtcbiAgICBpZiAob25QcmV2aW91cykgeyBvblByZXZpb3VzKCk7IH1cbiAgfTtcblxuICBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dCk7XG4gIHByZXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2KTtcbiAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0UGxheWluZyk7XG4gIHBhdXNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcFBsYXlpbmcpO1xuXG4gIG91dHB1dC5hcHBlbmRDaGlsZChwcmV2QnV0dG9uKTtcbiAgb3V0cHV0LmFwcGVuZENoaWxkKHBsYXlCdXR0b24pO1xuICBvdXRwdXQuYXBwZW5kQ2hpbGQocGF1c2VCdXR0b24pO1xuICBvdXRwdXQuYXBwZW5kQ2hpbGQobmV4dEJ1dHRvbik7XG5cbiAgc3RhcnRQbGF5aW5nKCk7XG5cbiAgb3V0cHV0LnN0YXJ0ID0gc3RhcnRQbGF5aW5nO1xuICBvdXRwdXQucGF1c2UgPSBzdG9wUGxheWluZztcbiAgb3V0cHV0LnByZXYgPSBwcmV2O1xuICBvdXRwdXQubmV4dCA9IG5leHQ7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGFicGFuZWwvY2Fyb3VzZWxDb250cm9scy5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyZXNzQmFyKHtib3VuZGVkID0gZmFsc2UsIGluaXRpYWxWYWx1ZSA9IDAsIG1pblZhbHVlID0gMCwgbWF4VmFsdWUgPSAxMDAsIHVuYm91bmRNZXNzYWdlID0gJ0luIHByb2dyZXNzLCBwbGVhc2Ugd2FpdC4uLid9KSB7XG4gIGxldCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcm9ncmVzcycpO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgnZGVxdWUnKTtcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgncm9sZScsICdwcm9ncmVzc2JhcicpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbWluJywgbWluVmFsdWUpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbWF4JywgbWF4VmFsdWUpO1xuXG4gIGlmIChib3VuZGVkKSB7XG4gICAgb3V0cHV0LnNldEF0dHJpYnV0ZSgndmFsdWUtbm93JywgaW5pdGlhbFZhbHVlKTtcbiAgICBvdXRwdXQuc2V0QXR0cmlidXRlKCdtYXgnLCBtYXhWYWx1ZSk7XG4gICAgb3V0cHV0LnNldFZhbHVlID0gZnVuY3Rpb24odikge1xuICAgICAgaWYgKHYgPCBtaW5WYWx1ZSkge1xuICAgICAgICB2ID0gbWluVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ID4gbWF4VmFsdWUpIHtcbiAgICAgICAgdiA9IG1heFZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGVyY2VudCA9IHBhcnNlSW50KCh2IC8gbWF4VmFsdWUpICogMTAwKTtcblxuICAgICAgb3V0cHV0LmlubmVyVGV4dCA9IHBlcmNlbnQgKyAnJSc7XG4gICAgICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93Jywgdik7XG4gICAgICBvdXRwdXQuc2V0QXR0cmlidXRlKCd2YWx1ZS1ub3cnLCB2KTtcbiAgICAgIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdik7XG4gICAgfTtcblxuICAgIG91dHB1dC5zZXRWYWx1ZShpbml0aWFsVmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWV0ZXh0JywgdW5ib3VuZE1lc3NhZ2UpO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9ncmVzc0Jhci9pbmRleC5qcyIsImltcG9ydCB7aXNEZXRhaWxzU3VwcG9ydGVkfSBmcm9tICcuL2lzRGV0YWlsc1N1cHBvcnRlZCc7XG5pbXBvcnQgaXNJT1MgZnJvbSAnLi9pc0lPUyc7XG5pbXBvcnQge29uRWxlbWVudFNwYWNlLCBvbkVsZW1lbnRFbnRlcn0gZnJvbSAnLi4vX3V0aWxzL2tleWJvYXJkVXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFeHBhbmRlcihsYWJlbCwgY29udGVudCwgZm9yY2VIVE1MNCkge1xuICBpZiAoaXNEZXRhaWxzU3VwcG9ydGVkKCkgJiYgIWZvcmNlSFRNTDQgJiYgIWlzSU9TKCkpIHtcbiAgICByZXR1cm4gaHRtbDVWZXJzaW9uKGxhYmVsLCBjb250ZW50KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaHRtbDRWZXJzaW9uKGxhYmVsLCBjb250ZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBodG1sNVZlcnNpb24obGFiZWwsIGNvbnRlbnQpIHtcbiAgbGV0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RldGFpbHMnKTtcbiAgbGV0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdW1tYXJ5Jyk7XG4gIG91dHB1dC5jbGFzc0xpc3QuYWRkKCdkZXF1ZScpO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kZXInKTtcbiAgc3VtbWFyeS5pbm5lclRleHQgPSBsYWJlbDtcblxuICBsZXQgZXhwYW5kZWRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBleHBhbmRlZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICBleHBhbmRlZENvbnRlbnQuaW5uZXJUZXh0ID0gY29udGVudDtcblxuICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuXG4gIC8vIGl0IHdvdWxkIHNlZW0gdGhhdCBicm93c2VycyB0cmVhdCB0aGUgPHN1bW1hcnk+XG4gIC8vIGVsZW1lbnQgYXMgaWYgaXQgd2VyZSBhIGJ1dHRvbiwgaS5lLiBhdXRvbWFnaWNhbGx5XG4gIC8vIHRyZWF0IHNwYWNlIGFuZCBlbnRlciBhcyAnY2xpY2snIGV2ZW50cy5cbiAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG4gIHN1bW1hcnkuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cbiAgZnVuY3Rpb24gc2V0T3BlblN0YXR1cygpIHtcbiAgICBpZiAob3V0cHV0Lmhhc0F0dHJpYnV0ZSgnb3BlbicpKSB7XG4gICAgICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgfVxuICB9XG5cbiAgc3VtbWFyeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldE9wZW5TdGF0dXMpO1xuXG4gIG91dHB1dC5hcHBlbmRDaGlsZChzdW1tYXJ5KTtcbiAgb3V0cHV0LmFwcGVuZENoaWxkKGV4cGFuZGVkQ29udGVudCk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbi8vIGNvbnN0IGFycm93cyA9IHtcbi8vICAgUklHSFQ6ICdpbWFnZXMvcmlnaHRBcnJvdy5wbmcnLFxuLy8gICBET1dOOiAnaW1hZ2VzL2Rvd25BcnJvdy5wbmcnXG4vLyB9O1xuXG5mdW5jdGlvbiBodG1sNFZlcnNpb24obGFiZWwsIGNvbnRlbnQpIHtcbiAgbGV0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgnZGVxdWUnKTtcbiAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVyJyk7XG5cbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc3VtbWFyeScpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xuICAvLyBHb3QgcmlkIG9mIGltZyBhbmQgYWRkZWQgY3VzdG9tIGFycm93IHRvIG1hdGNoIE1pY3Jvc29mdCBzaXRlXG4gIC8vIGxldCBpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgLy8gaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2luZGljYXRvcicpO1xuICAvL1xuICAvLyBpbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxMycpO1xuICAvLyBpbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTMnKTtcbiAgLy8gaW5kaWNhdG9yLnNldEF0dHJpYnV0ZSgnc3JjJywgYXJyb3dzLlJJR0hUKTtcbiAgLy8gaW5kaWNhdG9yLnNldEF0dHJpYnV0ZSgnYWx0JywgJycpO1xuICAvL1xuICAvLyBpbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2ltZycpO1xuICAvLyBoZWFkZXIuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yKTtcblxuICBsZXQgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKCdzdW1tYXJ5VGV4dCcpO1xuICBoZWFkZXJUZXh0LmlubmVyVGV4dCA9IGxhYmVsO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG4gIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblxuICBsZXQgZXhwYW5kZWRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBleHBhbmRlZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICBleHBhbmRlZENvbnRlbnQuaW5uZXJUZXh0ID0gY29udGVudDtcblxuICBleHBhbmRlZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIG91dHB1dC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBvdXRwdXQuYXBwZW5kQ2hpbGQoZXhwYW5kZWRDb250ZW50KTtcblxuICBsZXQgY2xlYXJGaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2xlYXJGaXguY2xhc3NMaXN0LmFkZCgnY2xlYXJmaXgnKTtcbiAgb3V0cHV0LmFwcGVuZENoaWxkKGNsZWFyRml4KTtcblxuICBoZWFkZXIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGV4cGFuZGVkQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBpZiAoZXhwYW5kZWRDb250ZW50LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgIG91dHB1dC5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIC8vL2luZGljYXRvci5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFycm93cy5SSUdIVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAndHJ1ZScpO1xuICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAvL2luZGljYXRvci5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFycm93cy5ET1dOKTtcbiAgICB9XG4gIH1cblxuICBvbkVsZW1lbnRFbnRlcihoZWFkZXIsIHRvZ2dsZSk7XG4gIG9uRWxlbWVudFNwYWNlKGhlYWRlciwgdG9nZ2xlKTtcbiAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlKTtcblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V4cGFuZGVyL2luZGV4LmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRGV0YWlsc1N1cHBvcnRlZCgpIHtcbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGV0YWlscycpO1xuICB2YXIgZGlmZjtcblxuICAvLyByZXR1cm4gZWFybHkgaWYgcG9zc2libGU7IHRoYW5rcyBAYUZhcmthcyFcbiAgaWYgKCEoJ29wZW4nIGluIGVsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICBlbC5pbm5lckhUTUwgPSAnPHN1bW1hcnk+YTwvc3VtbWFyeT5iJztcbiAgZGlmZiA9IGVsLm9mZnNldEhlaWdodDtcbiAgZWwub3BlbiA9IHRydWU7XG4gIGRpZmYgPSBkaWZmICE9IGVsLm9mZnNldEhlaWdodDtcblxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcblxuICByZXR1cm4gZGlmZjtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXhwYW5kZXIvaXNEZXRhaWxzU3VwcG9ydGVkLmpzIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICByZXR1cm4gL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V4cGFuZGVyL2lzSU9TLmpzIiwiaW1wb3J0IHsgcXVlcnlBbGwgfSBmcm9tICcuLi9fdXRpbHMvc2VsZWN0aW9uVXRpbHMnO1xuaW1wb3J0ICogYXMgZGVmYXVsdFZhbGlkYXRvcnMgZnJvbSAnLi92YWxpZGF0b3JzL2RlZmF1bHQnO1xuaW1wb3J0IHtnZXRWYWxpZGF0aW9uRnVuY3Rpb24sIGdldFZhbGlkYXRpb25FcnJvcnN9IGZyb20gJy4vdmFsaWRhdGlvbic7XG5pbXBvcnQgY3JlYXRlVG9vbHRpcCBmcm9tICcuLi90b29sdGlwJztcbmltcG9ydCB7d2lyZXVwUGFzc3dvcmRFdmFsdWF0b3J9IGZyb20gJy4vYmVoYXZpb3IvcGFzc3dvcmQnO1xuaW1wb3J0IHt3aXJldXBNYXhMZW5ndGhOb3RpZmljYXRpb25zfSBmcm9tICcuL2JlaGF2aW9yL3RleHQnO1xuaW1wb3J0IHtjcmVhdGVGZWVkYmFja0FyZWF9IGZyb20gJy4vY29tcG9uZW50cy9mZWVkYmFja0FyZWEnO1xuXG5jb25zdCBGRUVEQkFDS19UWVBFUyA9IHtcbiAgVE9QOiAndG9wJyxcbiAgSU5MSU5FOiAnaW5saW5lJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlRm9ybVZhbGlkYXRpb24oZm9ybSwgY29uZmlnKSB7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgnZGVxdWUnKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ25vdmFsaWRhdGUnLCAndHJ1ZScpO1xuXG4gIGxldCBmZWVkYmFja1R5cGUgPSBmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1mZWVkYmFjay10eXBlJykgfHwgRkVFREJBQ0tfVFlQRVMuVE9QO1xuXG4gIGxldCBmZWVkYmFja0FyZWEgPSBjcmVhdGVGZWVkYmFja0FyZWEoKTtcbiAgZm9ybS5pbnNlcnRCZWZvcmUoZmVlZGJhY2tBcmVhLCBmb3JtLmNoaWxkcmVuWzBdKTtcblxuICBsZXQgcGFzc3dvcmRJbnB1dHMgPSBxdWVyeUFsbCgnW3R5cGU9XCJwYXNzd29yZFwiXScsIGZvcm0pO1xuICBpZiAoY29uZmlnLnBhc3N3b3JkRXZhbHVhdG9yICYmIHBhc3N3b3JkSW5wdXRzLmxlbmd0aCA+IDApIHtcbiAgICB3aXJldXBQYXNzd29yZEV2YWx1YXRvcihwYXNzd29yZElucHV0cywgY29uZmlnLnBhc3N3b3JkRXZhbHVhdG9yLCBmdW5jdGlvbihtZXNzYWdlLCBpZCwgY2xhc3Nlcykge1xuICAgICAgZmVlZGJhY2tBcmVhLmxvZ05vdGlmaWNhdGlvbihtZXNzYWdlLCBpZCwgY2xhc3Nlcyk7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgbWF4Y2hhcnNJbnB1dHMgPSBxdWVyeUFsbCgnW21heGxlbmd0aF0nLCBmb3JtKTtcbiAgXG4gIGlmIChtYXhjaGFyc0lucHV0cy5sZW5ndGggPiAwKSB7XG4gICAgd2lyZXVwTWF4TGVuZ3RoTm90aWZpY2F0aW9ucyhtYXhjaGFyc0lucHV0cywgZnVuY3Rpb24obWVzc2FnZSwgaWQsIGNsYXNzZXMpIHtcbiAgICAgIGZlZWRiYWNrQXJlYS5sb2dOb3RpZmljYXRpb24obWVzc2FnZSwgaWQsIGNsYXNzZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgbGV0IHZhbGlkYXRvcnMgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcsIGRlZmF1bHRWYWxpZGF0b3JzKTtcblxuICBmdW5jdGlvbiBub3RpZnlTdWNjZXNzKCkge1xuICAgIGZlZWRiYWNrQXJlYS5jbGVhcigpO1xuICAgIGZlZWRiYWNrQXJlYS5sb2dOb3RpZmljYXRpb24oJ0Zvcm0gc3VibWlzc2lvbiBzdWNjZXNzZnVsJywgJ3N1Y2Nlc3NSZXBvcnQnLCBbJ3N1Y2Nlc3MnXSk7XG4gIH1cblxuICBmdW5jdGlvbiBub3RpZnlGYWlsdXJlKGVycm9ycykge1xuICAgIGZlZWRiYWNrQXJlYS5jbGVhcigpO1xuICAgIGlmIChmZWVkYmFja1R5cGUgPT09IEZFRURCQUNLX1RZUEVTLlRPUCkge1xuICAgICAgZmVlZGJhY2tBcmVhLmxvZ05vdGlmaWNhdGlvbihgPGg0PlRoZXJlIHdlcmUgJHtlcnJvcnMubGVuZ3RofSBwcm9ibGVtcyBkZXRlY3RlZCBvbiB5b3VyIGZvcm0gc3VibWlzc2lvbjo8L2g0PmApO1xuICAgICAgZXJyb3JzLmZvckVhY2gobSA9PiBmZWVkYmFja0FyZWEubG9nTm90aWZpY2F0aW9uKG0sIG51bGwsIFsnZXJyb3InXSkpO1xuICAgIH1cblxuICB9XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGxldCBpbnB1dHMgPSBxdWVyeUFsbCgnW2RhdGEtdmFsaWRhdGVdJywgZm9ybSk7XG4gICAgaW5wdXRzXG4gICAgICAuZm9yRWFjaChpID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGUgPSBnZXRWYWxpZGF0aW9uRnVuY3Rpb24odmFsaWRhdG9ycywgaSk7XG5cbiAgICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgICAgIGkucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWludmFsaWQnKTtcbiAgICAgICAgaWYgKCF2YWxpZGF0ZSgpKSB7XG4gICAgICAgICAgaS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICAgICAgaS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsICd0cnVlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgbGV0IHZhbGlkYXRlZCA9IGlucHV0cy5ldmVyeShpID0+ICFpLmNsYXNzTGlzdC5jb250YWlucygnaW52YWxpZCcpKTtcblxuICAgIGlmICghdmFsaWRhdGVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBsZXQgaW52YWxpZElucHV0cyA9IGlucHV0cy5maWx0ZXIoaSA9PiBpLmNsYXNzTGlzdC5jb250YWlucygnaW52YWxpZCcpKTtcbiAgICAgIGxldCBlcnJvcnMgPSBnZXRWYWxpZGF0aW9uRXJyb3JzKGludmFsaWRJbnB1dHMsIGZlZWRiYWNrVHlwZSA9PT0gRkVFREJBQ0tfVFlQRVMuSU5MSU5FKTtcbiAgICAgIG5vdGlmeUZhaWx1cmUoZXJyb3JzKTtcbiAgICAgIGlmIChmZWVkYmFja1R5cGUgPT09IEZFRURCQUNLX1RZUEVTLlRPUCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBmZWVkYmFja0FyZWEucXVlcnlTZWxlY3RvcignaDQnKTtcbiAgICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgaGVhZGVyLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhclRvb2x0aXBzKGZvcm0pO1xuICAgICAgICBpbml0VG9vbHRpcHMoZm9ybSk7XG4gICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignLmludmFsaWQnKS5mb2N1cygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBub3RpZnlTdWNjZXNzKCk7XG4gICAgICBjbGVhclRvb2x0aXBzKGZvcm0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXRUb29sdGlwcyhmb3JtKSB7XG4gIHF1ZXJ5QWxsKCdbZGF0YS10b29sdGlwXScsIGZvcm0pXG4gICAgLmZvckVhY2goaSA9PiB7XG4gICAgICBpLmNhbmNlbFRvb2x0aXAgPSBjcmVhdGVUb29sdGlwKGkpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhclRvb2x0aXBzKGZvcm0pIHtcbiAgcXVlcnlBbGwoJ1tkYXRhLXRvb2x0aXBdJywgZm9ybSlcbiAgICAuZm9yRWFjaChpID0+IHtcbiAgICAgIGlmIChpLmNhbmNlbFRvb2x0aXApIHtcbiAgICAgICAgaS5jYW5jZWxUb29sdGlwKCk7XG4gICAgICB9XG4gICAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZm9ybVZhbGlkYXRpb24vaW5kZXguanMiLCJleHBvcnQgZnVuY3Rpb24gcmVxdWlyZWQoaW5wdXQpIHtcbiAgY29uc3QgdmFsID0gISFpbnB1dC52YWx1ZTtcblxuICBsZXQgZXJyb3JNZXNzYWdlID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlLWVycm9ybWVzc2FnZS1yZXF1aXJlZCcpIHx8ICdmYWlsZWQgdG8gcHJvdmlkZSBhIHJlcXVpcmVkIHZhbHVlLic7XG5cbiAgaWYgKCF2YWwpIHtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUtZmFpbGVkLXJlcXVpcmUnLCBlcnJvck1lc3NhZ2UpO1xuICB9IGVsc2Uge1xuICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZS1mYWlsZWQtcmVxdWlyZScpO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1heENoYXJzKGlucHV0KSB7XG4gIGNvbnN0IHRocmVzaG9sZCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJyk7XG5cbiAgaWYgKCF0aHJlc2hvbGQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBtYXhDaGFycyB2YWxpZGF0b3IgbmVlZHMgYSBtYXhsZW5ndGggYXR0cmlidXRlIHRvIHRlc3QgYWdhaW5zdC4nKTtcbiAgfVxuXG4gIGxldCBlcnJvck1lc3NhZ2UgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUtZXJyb3JtZXNzYWdlLW1heGNoYXJzJykgfHwgJ1ZhbHVlIGxlbmd0aCBleGNlZWRzIHRocmVzaG9sZCBvZiAnICsgdGhyZXNob2xkO1xuXG4gIGNvbnN0IHZhbCA9IGlucHV0LnZhbHVlLmxlbmd0aCA8PSB0aHJlc2hvbGQ7XG4gIGlmICghdmFsKSB7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlLWZhaWxlZC1tYXhfY2hhcnMnLCBlcnJvck1lc3NhZ2UpO1xuICB9IGVsc2Uge1xuICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZS1mYWlsZWQtbWF4X2NoYXJzJyk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbWFpbChpbnB1dCkge1xuICBjb25zdCB2YWwgPSAvXihbYS16QS1aMC05X1xcLVxcLl0rKUAoW2EtekEtWjAtOV9cXC1cXC5dKylcXC4oW2EtekEtWl17Miw1fSkkLy50ZXN0KGlucHV0LnZhbHVlKTtcblxuICBsZXQgZXJyb3JNZXNzYWdlID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlLWVycm9ybWVzc2FnZS1pc19lbWFpbCcpIHx8ICd2YWx1ZSBtdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcyc7XG5cbiAgaWYgKCF2YWwpIHtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUtZmFpbGVkLWlzX2VtYWlsJywgZXJyb3JNZXNzYWdlKTtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUtZmFpbGVkLWlzX2VtYWlsJyk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0dGVybihpbnB1dCkge1xuICBsZXQgcGF0dGVybiA9IGlucHV0LmdldEF0dHJpYnV0ZSgncGF0dGVybicpO1xuICBpZiAoIXBhdHRlcm4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwYXR0ZXJuIHZhbGlkYXRvciByZXF1aXJlcyBhIHBhdHRlcm4gYXR0cmlidXRlIHRvIHRlc3QgYWdhaW5zdC4nKTtcbiAgfVxuXG4gIGxldCByZWdFeHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuICBjb25zdCB2YWwgPSByZWdFeHAudGVzdChpbnB1dC52YWx1ZSk7XG5cbiAgbGV0IGVycm9yTWVzc2FnZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZS1lcnJvcm1lc3NhZ2UtcGF0dGVybicpIHx8ICdWYWx1ZSBkaWQgbm90IG1hdGNoIHBhdHRlcm4gPCcgKyBwYXR0ZXJuICsgJz4nO1xuXG4gIGlmICghdmFsKSB7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlLWZhaWxlZC1wYXR0ZXJuJywgZXJyb3JNZXNzYWdlKTtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUtZmFpbGVkLXBhdHRlcm4nKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWVyaWMoaW5wdXQpIHtcbiAgY29uc3QgdmFsID0gIWlzTmFOKHBhcnNlRmxvYXQoaW5wdXQudmFsdWUpKTtcblxuICBsZXQgZXJyb3JNZXNzYWdlID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlLWVycm9ybWVzc2FnZS1pc19udW1lcmljJykgfHwgJ2lucHV0IGlzIG5vdCBhIG51bWVyaWMgdmFsdWUnO1xuXG4gIGlmICghdmFsKSB7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlLWZhaWxlZC1pc19udW1lcmljJywgZXJyb3JNZXNzYWdlKTtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUtZmFpbGVkLWlzX251bWVyaWMnKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXNzd29yZFN0cmVuZ3RoKGlucHV0KSB7XG4gIGNvbnN0IHRocmVzaG9sZCA9IHBhcnNlSW50KGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZS1wYXNzd29yZC1zdHJlbmd0aCcpKTtcbiAgaWYgKCF0aHJlc2hvbGQgfHwgdGhyZXNob2xkIDwgMCB8fCB0aHJlc2hvbGQgPiA0IHx8IGlzTmFOKHRocmVzaG9sZCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzaW5nIHRoZSBwYXNzd29yZCBzdHJlbmd0aCB2YWxpZGF0b3IgcmVxdWlyZXMgeW91IHRvIHNwZWNpZnkgXCJkYXRhLXZhbGlkYXRlLXBhc3N3b3JkLXN0cmVuZ2h0XCIgd2l0aCBhIHZhbHVlIGJldHdlZW4gMC00Jyk7XG4gIH1cblxuICBjb25zdCBxdWFsaXR5TWV0ZXJJZCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpO1xuICBpZiAoIXF1YWxpdHlNZXRlcklkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIGlucHV0IHNob3VsZCBiZSBgYXJpYS1kZXNjcmliZWRieWAgYSBwYXNzd29yZCBxdWFsaXR5IGZlZWRiYWNrIGNvbXBvbmVudC4gSWYgbm90LCBkaWQgeW91IHBhc3MgaW4gYSBgcGFzc3dvcmRFdmFsdWF0b3JgIGZ1bmN0aW9uIGludG8geW91ciBjb25maWc/Jyk7XG4gIH1cblxuICBjb25zdCBxdWFsaXR5TWV0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChxdWFsaXR5TWV0ZXJJZCk7XG4gIGlmICghcXVhbGl0eU1ldGVyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIGlucHV0IHNob3VsZCBiZSBgYXJpYS1kZXNjcmliZWRieWAgYSBwYXNzd29yZCBxdWFsaXR5IGZlZWRiYWNrIGNvbXBvbmVudC4gSWYgbm90LCBkaWQgeW91IHBhc3MgaW4gYSBgcGFzc3dvcmRFdmFsdWF0b3JgIGZ1bmN0aW9uIGludG8geW91ciBjb25maWc/Jyk7XG4gIH1cblxuICBjb25zdCBxdWFsaXR5ID0gcGFyc2VJbnQocXVhbGl0eU1ldGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXNzd29yZC1xdWFsaXR5JykpO1xuXG4gIGlmIChpc05hTihxdWFsaXR5KSB8fCBxdWFsaXR5IDwgMCB8fCBxdWFsaXR5ID4gNCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHJlYWQgcGFzc3dvcmQgcXVhbGl0eSBmcm9tIHF1YWxpdHkgbWV0ZXIuJyk7XG4gIH1cblxuICBsZXQgZXJyb3JNZXNzYWdlID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlLWVycm9ybWVzc2FnZS1wYXNzd29yZF9zdHJlbmd0aCcpIHx8IGBZb3VyIHBhc3N3b3JkIHF1YWxpdHkgaXMgJHtxdWFsaXR5ICsgMX0vNSBidXQgbmVlZHMgdG8gYmUgYXQgbGVhc3QgJHt0aHJlc2hvbGQgKyAxfS81YDtcblxuICBjb25zdCB2YWwgPSBxdWFsaXR5ID49IHRocmVzaG9sZDtcblxuICBpZiAoIXZhbCkge1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZS1mYWlsZWQtcGFzc3dvcmRfc3RyZW5ndGgnLCBlcnJvck1lc3NhZ2UpO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZm9ybVZhbGlkYXRpb24vdmFsaWRhdG9ycy9kZWZhdWx0LmpzIiwiaW1wb3J0IHt0b0FycmF5fSBmcm9tICcuLi9fdXRpbHMvY29sbGVjdGlvblV0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkYXRpb25GdW5jdGlvbih2YWxpZGF0b3JzLCBpdGVtKSB7XG4gIHJldHVybiBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZScpXG4gICAgLnNwbGl0KCcgJylcbiAgICAubWFwKHZhbGlkYXRvck5hbWUgPT4ge1xuICAgICAgaWYgKHZhbGlkYXRvcnNbdmFsaWRhdG9yTmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvcnNbdmFsaWRhdG9yTmFtZV0uYmluZChudWxsLCBpdGVtKTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyB2YWxpZGF0b3IgZGVmaW5lZCBmb3IgJyArIHZhbGlkYXRvck5hbWUpO1xuICAgIH0pXG4gICAgLnJlZHVjZShcbiAgICAgIChmLCB2KSA9PiBmLmJpbmQobnVsbCwgdiksXG4gICAgICAoLi4uZnVuY3MpID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmNzLmV2ZXJ5KHYgPT4gdigpKTsgfVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZGF0aW9uRXJyb3JzKGlucHV0cywgYXBwZW5kVG9vbHRpcHMpIHtcbiAgcmV0dXJuIGlucHV0cy5tYXAoaW5wdXQgPT4ge1xuICAgIGxldCBzcGVjaWZpZXIgPSBpbnB1dC5pZCB8fCBpbnB1dC5uYW1lO1xuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9JyArIHNwZWNpZmllciArICddJyk7XG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICBsYWJlbCA9IGxhYmVsLmlubmVyVGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFiZWwgPSAnQW4gaW5wdXQnO1xuICAgIH1cblxuICAgIGNvbnN0IG91dHB1dCA9IHRvQXJyYXkoaW5wdXQuYXR0cmlidXRlcylcbiAgICAgIC5maWx0ZXIoYSA9PiBhLm5hbWUuaW5kZXhPZignZGF0YS12YWxpZGF0ZS1mYWlsZWQtJykgPT09IDApXG4gICAgICAubWFwKGEgPT4gJzxzdHJvbmc+JyArIGxhYmVsICsgJyA8L3N0cm9uZz46ICcgKyBhLnZhbHVlKTtcblxuICAgIGlmIChhcHBlbmRUb29sdGlwcykge1xuICAgICAgdmFyIHR0ID0gb3V0cHV0WzBdLnNwbGl0KCc8L3N0cm9uZz46ICcpWzFdO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLXRvb2x0aXAnLCB0dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfSlcbiAgLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdCh2YWwpO1xuICB9LCBbXSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZm9ybVZhbGlkYXRpb24vdmFsaWRhdGlvbi5qcyIsImltcG9ydCB7Y3JlYXRlUGFzc3dvcmRFdmFsdWF0aW9ufSBmcm9tICcuLi9jb21wb25lbnRzL3Bhc3N3b3JkRXZhbHVhdGlvbic7XG5pbXBvcnQge2dldExhYmVsfSBmcm9tICcuLi8uLi9fdXRpbHMvZm9ybVV0aWxzJztcbmltcG9ydCB7bm9DbG9iYmVyfSBmcm9tICcuLi8uLi9fdXRpbHMvbm9jbG9iYmVyVXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gd2lyZXVwUGFzc3dvcmRFdmFsdWF0b3IoaW5wdXRzLCBldmFsdWF0b3IpIHtcbiAgY29uc3QgcmF0aW5ncyA9IFsndW5hY2NlcHRhYmxlJywgJ3Bvb3InLCAnb2snLCAnZ29vZCcsICdncmVhdCddO1xuXG4gIGxldCB0aW1lb3V0O1xuICBmdW5jdGlvbiBxdWV1ZU5vdGlmaWNhdGlvbihpbnB1dCwgc2NvcmUsIHNlbmROb3RpZmljYXRpb24pIHtcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWwgPSBnZXRMYWJlbChpbnB1dCk7XG4gICAgICBsZXQgcmF0aW5nID0gcmF0aW5nc1tzY29yZV07XG4gICAgICBzZW5kTm90aWZpY2F0aW9uKGBUaGUgcGFzc3dvcmQgeW91J3ZlIGVudGVyZWQgZm9yICR7bGFiZWx9IGlzICR7cmF0aW5nfS5gKTtcbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIGlmKGV2YWx1YXRvciAmJiB0eXBlb2YgZXZhbHVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gdGhpcyBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgdmFsdWUgYmV0d2VlbiAnMCcgYW5kICc0Jy5cbiAgICAvLyAwIG1lYW5zIGl0J3MgYSByZWFsbHkgd2VhayBwYXNzd29yZCwgbGlrZSAncGFzc3dvcmQnXG4gICAgLy8gNCBtZWFucyBpdCdzIGEgcmVhbGx5IGdvb2QgcGFzc3dvcmRcbiAgICBpbnB1dHNcbiAgICAuZm9yRWFjaChpID0+IHtcbiAgICAgIGxldCBwYXNzd29yZEV2YWx1YXRpb24gPSBjcmVhdGVQYXNzd29yZEV2YWx1YXRpb24oKTtcbiAgICAgIGkucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUocGFzc3dvcmRFdmFsdWF0aW9uLCBpKTtcbiAgICAgIGkucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoaSwgcGFzc3dvcmRFdmFsdWF0aW9uKTtcbiAgICAgIG5vQ2xvYmJlcihpLCAnYXJpYS1kZXNjcmliZWRieScsIHBhc3N3b3JkRXZhbHVhdGlvbi5pZCk7XG4gICAgICBpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICBsZXQgc2NvcmUgPSBldmFsdWF0b3IoaS52YWx1ZSk7XG4gICAgICAgIHBhc3N3b3JkRXZhbHVhdGlvbi51cGRhdGUoc2NvcmUsIHJhdGluZ3MpO1xuICAgICAgICBxdWV1ZU5vdGlmaWNhdGlvbihpLCBzY29yZSwgcGFzc3dvcmRFdmFsdWF0aW9uLm5vdGlmeSk7XG4gICAgICB9KTtcblxuICAgICAgbGV0IGluaXRpYWxTY29yZSA9IGV2YWx1YXRvcihpLnZhbHVlKTtcbiAgICAgIHBhc3N3b3JkRXZhbHVhdGlvbi51cGRhdGUoaW5pdGlhbFNjb3JlLCByYXRpbmdzKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zvcm1WYWxpZGF0aW9uL2JlaGF2aW9yL3Bhc3N3b3JkLmpzIiwiaW1wb3J0IHtnZW5lcmF0ZUd1aWR9IGZyb20gJy4uLy4uL191dGlscy9ndWlkVXRpbHMnO1xuaW1wb3J0IHtjcmVhdGVMaXZlUmVnaW9ufSBmcm9tICcuLi8uLi9fdXRpbHMvY29udGFpbmVyVXRpbHMnO1xuXG5mdW5jdGlvbiBjcmVhdGVMZXZlbEluZGljYXRvcihsZXZlbCkge1xuICBsZXQgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG91dHB1dC5jbGFzc0xpc3QuYWRkKCdwYXNzd29yZF9sZXZlbCcpO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZChgbGV2ZWwke2xldmVsfWApO1xuXG4gIGxldCBpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW5kaWNhdG9yLnNldEF0dHJpYnV0ZSgnYWx0JywgJycpO1xuICBpbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3ByZXNlbnRhdGlvbicpO1xuICBvdXRwdXQuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yKTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhc3N3b3JkRXZhbHVhdGlvbigpIHtcbiAgbGV0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdXRwdXQuaWQgPSBnZW5lcmF0ZUd1aWQoKTtcbiAgb3V0cHV0LnNldEF0dHJpYnV0ZSgncm9sZScsICdpbWcnKTtcblxuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgncGFzc3dvcmRFdmFsdWF0aW9uJyk7XG4gIGxldCBsZXZlbDAgPSBjcmVhdGVMZXZlbEluZGljYXRvcigwKTtcbiAgbGV0IGxldmVsMSA9IGNyZWF0ZUxldmVsSW5kaWNhdG9yKDEpO1xuICBsZXQgbGV2ZWwyID0gY3JlYXRlTGV2ZWxJbmRpY2F0b3IoMik7XG4gIGxldCBsZXZlbDMgPSBjcmVhdGVMZXZlbEluZGljYXRvcigzKTtcbiAgbGV0IGxldmVsNCA9IGNyZWF0ZUxldmVsSW5kaWNhdG9yKDQpO1xuXG4gIG91dHB1dC5hcHBlbmRDaGlsZChsZXZlbDApO1xuICBvdXRwdXQuYXBwZW5kQ2hpbGQobGV2ZWwxKTtcbiAgb3V0cHV0LmFwcGVuZENoaWxkKGxldmVsMik7XG4gIG91dHB1dC5hcHBlbmRDaGlsZChsZXZlbDMpO1xuICBvdXRwdXQuYXBwZW5kQ2hpbGQobGV2ZWw0KTtcblxuICBsZXQgbGV2ZWxJbmRpY2F0b3JzID0gW2xldmVsMCwgbGV2ZWwxLCBsZXZlbDIsIGxldmVsMywgbGV2ZWw0XTtcblxuICBjb25zdCBhbGVydCA9IGNyZWF0ZUxpdmVSZWdpb24oJ3BvbGl0ZScpO1xuXG4gIG91dHB1dC51cGRhdGUgPSBmdW5jdGlvbihzY29yZSwgcmF0aW5ncykge1xuICAgIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGFzc3dvcmQtcXVhbGl0eScsIHNjb3JlKTtcbiAgICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ1Bhc3N3b3JkIHF1YWxpdHkgaXMgJyArIHJhdGluZ3Nbc2NvcmVdKTtcbiAgICBsZXZlbEluZGljYXRvcnMuZm9yRWFjaChsaSA9PiB7XG4gICAgICBsaS5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGBpbWFnZXMvcHcke3Njb3JlfS5wbmdgKTtcbiAgICB9KTtcbiAgfTtcblxuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgYWxlcnQuaWQpO1xuXG4gIC8vIGFkZGluZyB0byBib2R5LCBhcyBwZXIgUGF1bCBCJ3MgcmVxdWVzdFxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFsZXJ0KTtcbiAgdmFyIGVtcHR5SW50ZXJ2YWw7XG4gIG91dHB1dC5ub3RpZnkgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgYWxlcnQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBpZiAoZW1wdHlJbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChlbXB0eUludGVydmFsKTtcbiAgICB9XG5cbiAgICBlbXB0eUludGVydmFsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhbGVydC5pbm5lclRleHQgPSAnJztcbiAgICAgIGVtcHR5SW50ZXJ2YWwgPSBudWxsO1xuICAgIH0sIDUwMDApO1xuICB9O1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZm9ybVZhbGlkYXRpb24vY29tcG9uZW50cy9wYXNzd29yZEV2YWx1YXRpb24uanMiLCJleHBvcnQgZnVuY3Rpb24gZ2V0TGFiZWwoaW5wdXQpIHtcbiAgaWYgKGlucHV0Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgcmV0dXJuIGlucHV0LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICB9XG5cbiAgbGV0IG5hbWUgPSBpbnB1dC5pZCB8fCBpbnB1dC5uYW1lO1xuICBpZiAoIW5hbWUpIHtcbiAgICByZXR1cm4gJ3VubGFiZWxlZCBpbnB1dCc7XG4gIH1cblxuICBsZXQgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcj0nICsgbmFtZSArICddJyk7XG4gIGxldCBsYWJlbDtcbiAgaWYgKGxhYmVsRWxlbWVudCkge1xuICAgIGxhYmVsID0gbGFiZWxFbGVtZW50LmlubmVyVGV4dDtcbiAgfSBlbHNlIHtcbiAgICBsYWJlbCA9ICd1bmxhYmVsZWQgaW5wdXQnO1xuICB9XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL191dGlscy9mb3JtVXRpbHMuanMiLCJpbXBvcnQge2NyZWF0ZUNoYXJzUmVtYWluaW5nfSBmcm9tICcuLi9jb21wb25lbnRzL2NoYXJzUmVtYWluaW5nJztcbmltcG9ydCB7Z2V0TGFiZWx9IGZyb20gJy4uLy4uL191dGlscy9mb3JtVXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gd2lyZXVwTWF4TGVuZ3RoTm90aWZpY2F0aW9ucyhpbnB1dHMpIHtcblxuICBsZXQgdGltZW91dDtcbiAgZnVuY3Rpb24gcXVldWVOb3RpZmljYXRpb24oaW5wdXQsIHNlbmROb3RpZmljYXRpb24pIHtcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWwgPSBnZXRMYWJlbChpbnB1dCk7XG4gICAgICBjb25zdCBjaGFyQ291bnQgPSBpbnB1dC52YWx1ZS5sZW5ndGg7XG4gICAgICBjb25zdCBtYXhDaGFycyA9IHBhcnNlSW50KGlucHV0LmdldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJykpO1xuICAgICAgY29uc3QgcmVtYWluaW5nID0gbWF4Q2hhcnMgLSBjaGFyQ291bnQ7XG5cbiAgICAgIHNlbmROb3RpZmljYXRpb24oYCR7bGFiZWx9OiBZb3UndmUgdXNlZCAke2NoYXJDb3VudH0gb3V0IG9mICR7bWF4Q2hhcnN9IGNoYXJhY3RlcnMgYW5kIGhhdmUgJHtyZW1haW5pbmd9IGxlZnQuYCk7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIGlucHV0cy5mb3JFYWNoKGkgPT4ge1xuICAgIGNvbnN0IG1heENoYXJzID0gcGFyc2VJbnQoaS5nZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcpKTtcbiAgICBjb25zdCBmZWVkYmFjayA9IGNyZWF0ZUNoYXJzUmVtYWluaW5nKGkpO1xuICAgIGkuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgZmVlZGJhY2suaWQpO1xuICAgIGkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgbGV0IGNoYXJDb3VudCA9IGkudmFsdWUubGVuZ3RoO1xuICAgICAgaWYgKGNoYXJDb3VudCA+PSBtYXhDaGFycykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZlZWRiYWNrLm5vdGlmeShgJHtnZXRMYWJlbChpKX06IFlvdSd2ZSB1c2VkIGFsbCAke21heENoYXJzfSBjaGFyYWN0ZXJzIGF2YWlsYWJsZSB0byB0aGlzIGlucHV0LmApO1xuICAgICAgfVxuXG4gICAgICBmZWVkYmFjay51cGRhdGUoY2hhckNvdW50LCBtYXhDaGFycyk7XG4gICAgfSk7XG5cbiAgICBpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgcG9zdFVwZGF0ZSk7XG4gICAgaS5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIHBvc3RVcGRhdGUpO1xuXG4gICAgLy8gdGhlIG5vdGlmaWNhdGlvbiBxdWV1ZSBnZXRzIGludm9rZWQgaGVyZSwgbm90IG9uIGlucHV0LFxuICAgIC8vIGluIGNhc2UgdGhlIGZvcm0gc3RhcnRzIHdpdGggdGhpcyBmaWVsZCBwb3B1bGF0ZWQuIFlvdVxuICAgIC8vIGRvbid0IHdhbnQgdG8gZ2V0IGEgZG96ZW4gbm90aWZpY2F0aW9ucyBmcm9tIHByZS1wb3AnZFxuICAgIC8vIGlucHV0cyBvbiBwYWdlIGxvYWQuXG4gICAgZnVuY3Rpb24gcG9zdFVwZGF0ZSgpIHtcbiAgICAgIGlmIChjaGFyQ291bnQgPiBtYXhDaGFycykge1xuICAgICAgICBpLnZhbHVlID0gaS52YWx1ZS5zdWJzdHIoMCwgbWF4Q2hhcnMgLSAxKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hhckNvdW50ID0gaS52YWx1ZS5sZW5ndGg7XG4gICAgICBmZWVkYmFjay51cGRhdGUoY2hhckNvdW50LCBtYXhDaGFycyk7XG4gICAgICBxdWV1ZU5vdGlmaWNhdGlvbihpLCBmZWVkYmFjay5ub3RpZnkpO1xuICAgIH1cblxuICAgIGkucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZmVlZGJhY2ssIGkpO1xuICAgIGkucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoaSwgZmVlZGJhY2spO1xuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mb3JtVmFsaWRhdGlvbi9iZWhhdmlvci90ZXh0LmpzIiwiaW1wb3J0IHtnZW5lcmF0ZUd1aWR9IGZyb20gJy4uLy4uL191dGlscy9ndWlkVXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnNSZW1haW5pbmcoKSB7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdXRwdXQuaWQgPSBnZW5lcmF0ZUd1aWQoKTtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgb3V0cHV0LmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIG91dHB1dC5jbGFzc0xpc3QuYWRkKCdjaGFycy1yZW1haW5pbmcnKTtcbiAgb3V0cHV0LnVwZGF0ZSA9IGZ1bmN0aW9uKGN1cnJlbnQsIG1heCkge1xuICAgIGxldCBuZXdUZXh0ID0gYCgke2N1cnJlbnR9LyR7bWF4fSlgO1xuICAgIGlmIChzcGFuLmlubmVyVGV4dCA9PT0gbmV3VGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNwYW4uaW5uZXJUZXh0ID0gbmV3VGV4dDtcbiAgfTtcblxuICBjb25zdCBhbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYWxlcnQuaWQgPSBnZW5lcmF0ZUd1aWQoKTtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJyk7XG4gIGFsZXJ0LnNldEF0dHJpYnV0ZSgncm9sZScsICdsb2cnKTtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdhcmlhLWF0b21pYycsIGZhbHNlKTtcbiAgYWxlcnQuc2V0QXR0cmlidXRlKCdhcmlhLXJlbGV2YW50JywgJ2FkZGl0aW9ucycpO1xuICBhbGVydC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseWhpZGRlbicpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgYWxlcnQuaWQpO1xuXG4gIC8vIGFzIHBlciBQYXVsIEIncyByZXF1ZXN0LCBsaXZlIHVwZGF0ZSByZWdpb24gZ2V0cyBzaHVudGVkIHRvIHRoZVxuICAvLyBlbmQgb2YgdGhlIGRvY3VtZW50IHNvIGFzIG5vdCB0byBjb25mdXNlIGFueW9uZS5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbGVydCk7XG5cbiAgb3V0cHV0Lm5vdGlmeSA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICBhbGVydC5pbm5lclRleHQgPSB0ZXh0O1xuICB9O1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZm9ybVZhbGlkYXRpb24vY29tcG9uZW50cy9jaGFyc1JlbWFpbmluZy5qcyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGZWVkYmFja0FyZWEoKSB7XG4gIGxldCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoJ2ZlZWRiYWNrLWhvbGRlcicpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2FsZXJ0Jyk7XG5cbiAgb3V0cHV0LmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgb3V0cHV0LmlubmVySFRNTCA9ICcnO1xuICB9O1xuXG4gIG91dHB1dC5jbGVhcklEID0gZnVuY3Rpb24oaWQpIHtcbiAgICBpZiAoIWlkKSB7IHJldHVybjsgfVxuICAgIGxldCBleGlzdGluZyA9IG91dHB1dC5xdWVyeVNlbGVjdG9yKCcjJyArIGlkKTtcbiAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgIG91dHB1dC5yZW1vdmVDaGlsZChleGlzdGluZyk7XG4gICAgfVxuICB9O1xuXG4gIG91dHB1dC5sb2dOb3RpZmljYXRpb24gPSBmdW5jdGlvbihtZXNzYWdlLCBpZCwgY2xhc3NlcyA9IFtdKSB7XG4gICAgb3V0cHV0LmNsZWFySUQoaWQpO1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IG1lc3NhZ2U7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4gY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYykpO1xuICAgIG91dHB1dC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9O1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Zvcm1WYWxpZGF0aW9uL2NvbXBvbmVudHMvZmVlZGJhY2tBcmVhLmpzIiwiaW1wb3J0IHtjcmVhdGVMaXZlUmVnaW9ufSBmcm9tICcuLi9fdXRpbHMvY29udGFpbmVyVXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU29ydGFibGVUYWJsZShjYXB0aW9uLCBoZWFkZXJzLCByb3dzKSB7XG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbGV0IG91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG5cbiAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoJ2RlcXVlJyk7XG4gIG91dHB1dC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZ3JpZCcpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdhcmlhLXJlYWRvbmx5JywgJ3RydWUnKTtcblxuICBsZXQgY2FwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYXB0aW9uJyk7XG4gIGNhcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IGNhcHRpb247XG5cbiAgbGV0IGxpdmVSZWdpb24gPSBjcmVhdGVMaXZlUmVnaW9uKCdwb2xpdGUnKTtcblxuICBsZXQgc29ydE9yZGVyID0gbnVsbDtcbiAgbGV0IHNvcnREaXJlY3Rpb24gPSAtMTtcblxuICBmdW5jdGlvbiBnZXRTb3J0SGVhZGVyKCkge1xuICAgIGlmIChzb3J0T3JkZXIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cbiAgICByZXR1cm4gaGVhZGVyUm93LmNoaWxkcmVuW3NvcnRPcmRlcl07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTb3J0TGFiZWwoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZ2V0U29ydEhlYWRlcigpO1xuICAgIGlmICghaGVhZGVyKSB7IHJldHVybiBudWxsOyB9XG4gICAgcmV0dXJuIGhlYWRlci5pbm5lclRleHQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTb3J0RGlyZWN0aW9uKCkge1xuICAgIHJldHVybiBzb3J0RGlyZWN0aW9uID4gMCA/ICdhc2NlbmRpbmcnIDogJ2Rlc2NlbmRpbmcnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U29ydEluZm8oKSB7XG4gICAgaWYgKHNvcnRPcmRlciA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICd1bnNvcnRlZCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGBzb3J0ZWQgYnkgJHtnZXRTb3J0TGFiZWwoKX0sICR7Z2V0U29ydERpcmVjdGlvbigpfWA7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJTb3J0aW5nKCkge1xuICAgIHVwZGF0ZUNhcHRpb24oKTtcbiAgICB1cGRhdGVBcmlhU29ydCgpO1xuICAgIHVwZGF0ZUxpdmVSZWdpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFyaWFTb3J0KCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGVhZGVyUm93LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGhlYWRlclJvdy5jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKHNvcnRPcmRlciAhPT0gbnVsbCAmJiBpID09PSBNYXRoLmFicyhzb3J0T3JkZXIpKSB7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBnZXRTb3J0RGlyZWN0aW9uKCk7XG4gICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnYXJpYS1zb3J0JywgZGlyZWN0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1zb3J0Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ2FwdGlvbigpIHtcbiAgICBsZXQgY2FwdGlvblRleHQgPSBgJHtjYXB0aW9ufSwgJHtnZXRTb3J0SW5mbygpfWA7XG4gICAgY2FwdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gY2FwdGlvblRleHQ7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMaXZlUmVnaW9uKCkge1xuICAgIGxldCBjYXB0aW9uVGV4dCA9IGBUYWJsZSAke2NhcHRpb259IGlzIG5vdyAke2dldFNvcnRJbmZvKCl9YDtcbiAgICBsaXZlUmVnaW9uLm5vdGlmeShjYXB0aW9uVGV4dCk7XG4gIH1cblxuICBjb25zdCBpc1ZhbGlkID0gcm93cy5ldmVyeShyb3cgPT4gcm93Lmxlbmd0aCA9PT0gaGVhZGVycy5sZW5ndGgpO1xuXG4gIGlmICghaXNWYWxpZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRWFjaCByb3cgbXVzdCBiZSB0aGUgc2FtZSBsZW5ndGggYXMgdGhlIGhlYWRlcnMgcm93LicpO1xuICB9XG5cbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuXG4gIG91dHB1dC5hcHBlbmRDaGlsZChjYXB0aW9uRWxlbWVudCk7XG4gIG91dHB1dC5hcHBlbmRDaGlsZChoZWFkKTtcbiAgb3V0cHV0LmFwcGVuZENoaWxkKGJvZHkpO1xuXG4gIGxldCBoZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBoZWFkZXJSb3cuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3JvdycpO1xuICBoZWFkLmFwcGVuZENoaWxkKGhlYWRlclJvdyk7XG5cbiAgLy8gdGhpcyBhZGRzIHJvdyBoZWFkZXJzXG4gIGhlYWRlcnMgPSBbJ0luZGV4J10uY29uY2F0KGhlYWRlcnMpO1xuICByb3dzID0gcm93cy5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gW2luZGV4ICsgMV0uY29uY2F0KHJvdyk7XG4gIH0pO1xuXG4gIGhlYWRlcnMuZm9yRWFjaCgoaGVhZGVyLCBpKSA9PiB7XG4gICAgdmFyIGhlYWRlckNlbGwgPSBjcmVhdGVIZWFkZXJDZWxsKGhlYWRlciwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJvd3MgPSBzb3J0QnlJbmRleChyb3dzLCBpKTtcbiAgICAgIG91dHB1dC5yZW5kZXJEYXRhKHJvd3MpO1xuICAgIH0pO1xuXG4gICAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGhlYWRlckNlbGwpO1xuICB9KTtcblxuICBvdXRwdXQucmVuZGVyRGF0YSA9IGZ1bmN0aW9uKHJvd3MpIHtcbiAgICBib2R5LmlubmVySFRNTCA9IHRvSFRNTChyb3dzKTtcbiAgICByZW5kZXJTb3J0aW5nKCk7XG4gIH07XG5cbiAgb3V0cHV0LnJlbmRlckRhdGEocm93cyk7XG5cbiAgZnVuY3Rpb24gc29ydEJ5SW5kZXgocm93cywgaW5kZXgpIHtcbiAgICBpZiAoc29ydE9yZGVyID09PSBpbmRleCkge1xuICAgICAgc29ydERpcmVjdGlvbiA9IC1zb3J0RGlyZWN0aW9uO1xuICAgICAgcmV0dXJuIHJvd3MucmV2ZXJzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzb3J0T3JkZXIgPSBpbmRleDtcbiAgICAgIHJldHVybiByb3dzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgbGV0IGFWYWwgPSBhW2luZGV4XTtcbiAgICAgICAgbGV0IGJWYWwgPSBiW2luZGV4XTtcbiAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChhVmFsKSkgJiYgIWlzTmFOKHBhcnNlSW50KGJWYWwpKSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZUludChhVmFsKSA+IHBhcnNlSW50KGJWYWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFWYWwgPiBiVmFsO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZChvdXRwdXQpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGxpdmVSZWdpb24pO1xuICBsZXQgZmlyc3RPbmUgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy5zb3J0YWJsZUNvbHVtbkxhYmVsJyk7XG4gIGlmIChmaXJzdE9uZSkgeyBmaXJzdE9uZS5jbGljaygpOyB9IC8vIGdpdmUgdGhlIHRhYmxlIGEgZGVmYXVsdCBzb3J0Li4uXG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJDZWxsKHN0cmluZywgaGFuZGxlcikge1xuICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2NvbHVtbmhlYWRlcicpO1xuICBvdXRwdXQuc2V0QXR0cmlidXRlKCdzY29wZScsICdjb2wnKTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc29ydGFibGVDb2x1bW5MYWJlbCcpO1xuICBsYWJlbC5pbm5lclRleHQgPSBzdHJpbmc7XG4gIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XG5cbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKCdzb3J0LWljb24nKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEwJyk7XG4gIGljb24uc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTAnKTtcblxuICBvdXRwdXQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiB0b0hUTUwocm93cykge1xuICByZXR1cm4gcm93cy5tYXAoKHJvdykgPT4ge1xuICAgIHJldHVybiBgPHRyIHJvbGU9XCJyb3dcIj5cbiAgICAke3Jvdy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGA8dGggc2NvcGU9XCJyb3dcIiByb2xlPVwicm93aGVhZGVyXCI+JHtpdGVtfTwvdGg+YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBgPHRkIHJvbGU9XCJncmlkY2VsbFwiPiR7aXRlbX08L3RkPmA7XG4gICAgfSkuam9pbignJyl9PC90cj5gO1xuICB9KS5qb2luKCcnKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zb3J0YWJsZVRhYmxlL2luZGV4LmpzIiwiaW1wb3J0IHtxdWVyeUFsbH0gZnJvbSAnLi4vX3V0aWxzL3NlbGVjdGlvblV0aWxzJztcblxuZnVuY3Rpb24gZ2V0VGFibGVOYW1lKHRhYmxlKSB7XG4gIGNvbnN0IGNhcHRpb24gPSB0YWJsZS5xdWVyeVNlbGVjdG9yKCdjYXB0aW9uJyk7XG4gIGlmIChjYXB0aW9uKSB7XG4gICAgcmV0dXJuIGNhcHRpb24uaW5uZXJUZXh0O1xuICB9XG5cbiAgcmV0dXJuIHRhYmxlLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8ICd1bm5hbWVkIHRhYmxlJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VUYWJsZVJlc3BvbnNpdmUodGFibGUsIGxhYmVsRGV0YWlscyA9IHt9LCBpbmZsZWN0aW9uUG9pbnQgPSAzMDApIHtcbiAgdmFyIHJlc2l6ZVRpbWVvdXQ7XG5cbiAgZnVuY3Rpb24gcmVzaXplVGhyb3R0bGVyKCkge1xuICAgIC8vIGlnbm9yZSByZXNpemUgZXZlbnRzIGFzIGxvbmcgYXMgYW4gaGFuZGxlUmVzcG9uc2l2ZUxvZ2ljIGV4ZWN1dGlvbiBpcyBpbiB0aGUgcXVldWVcbiAgICBpZiAoIXJlc2l6ZVRpbWVvdXQpIHtcbiAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNpemVUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgaGFuZGxlUmVzcG9uc2l2ZUxvZ2ljKCk7XG5cbiAgICAgICAgLy8gVGhlIGhhbmRsZVJlc3BvbnNpdmVMb2dpYyB3aWxsIGV4ZWN1dGUgYXQgYSByYXRlIG9mIDE1ZnBzXG4gICAgICB9LCA2Nik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2l2ZUxvZ2ljKCkge1xuICAgIC8vIGhhbmRsZSB0aGUgcmVzaXplIGV2ZW50XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgaW5mbGVjdGlvblBvaW50KSB7XG4gICAgICByZW5kZXJBc0xpc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyQXNUYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBsaXN0O1xuICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Jlc3BvbnNpdmUtdGFibGUtd3JhcHBlcicpO1xuXG4gIGxldCBub3RpZmljYXRpb25SZWdpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm90aWZpY2F0aW9uUmVnaW9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdhbGVydCcpO1xuICBub3RpZmljYXRpb25SZWdpb24uc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJyk7XG4gIG5vdGlmaWNhdGlvblJlZ2lvbi5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseWhpZGRlbicpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvblJlZ2lvbik7XG5cbiAgZnVuY3Rpb24gbm90aWZ5KG1lc3NhZ2UpIHtcbiAgICBub3RpZmljYXRpb25SZWdpb24uaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgfVxuXG4gIGxldCB0YWJsZVBhcmVudCA9IHRhYmxlLnBhcmVudEVsZW1lbnQ7XG5cbiAgdGFibGVQYXJlbnQuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHRhYmxlKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyQXNMaXN0KCkge1xuICAgIGlmICghbGlzdCkge1xuICAgICAgbGV0IGZvY3VzSUQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkO1xuICAgICAgbGlzdCA9IGNvbGxhcHNlVGFibGVUb0xpc3QodGFibGUsIGxhYmVsRGV0YWlscyk7XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZCh0YWJsZSk7XG4gICAgICBub3RpZnkoJ1RoZSBkYXRhIGZvciAnICsgZ2V0VGFibGVOYW1lKHRhYmxlKSArICcgaXMgbm93IGJlaW5nIHJlbmRlcmVkIGFzIGEgbGlzdC4nKTtcbiAgICAgIGlmIChmb2N1c0lEKSB7XG4gICAgICAgIGxldCBmb2N1c1RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2ZvY3VzSUR9YCk7XG4gICAgICAgIGlmIChmb2N1c1RhcmdldCkge1xuICAgICAgICAgIGZvY3VzVGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJBc1RhYmxlKCkge1xuICAgIGlmIChsaXN0KSB7XG4gICAgICBsZXQgZm9jdXNJRCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWQ7XG4gICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKGxpc3QpO1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgICBsaXN0ID0gbnVsbDtcbiAgICAgIG5vdGlmeSgnVGhlIGRhdGEgZm9yICcgKyBnZXRUYWJsZU5hbWUodGFibGUpICsgJyBpcyBub3cgYmVpbmcgcmVuZGVyZWQgYXMgYSB0YWJsZS4nKTtcblxuICAgICAgaWYgKGZvY3VzSUQpIHtcbiAgICAgICAgbGV0IGZvY3VzVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Zm9jdXNJRH1gKTtcbiAgICAgICAgaWYgKGZvY3VzVGFyZ2V0KSB7XG4gICAgICAgICAgZm9jdXNUYXJnZXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVUaHJvdHRsZXIpO1xuICBoYW5kbGVSZXNwb25zaXZlTG9naWMoKTtcbiAgcmV0dXJuIHRhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sbGFwc2VUYWJsZVRvTGlzdCh0YWJsZSwge2xhYmVsQ29sdW1ucyA9IFtdLCBsYWJlbEZ1bmN0aW9uID0gKCkgPT4gJ1JvdzonfSkge1xuICBsZXQgb3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG91dHB1dC5jbGFzc0xpc3QuYWRkKCdkZXF1ZScpO1xuICBvdXRwdXQuY2xhc3NMaXN0LmFkZCgncmVzcG9uc2l2ZS10YWJsZS1saXN0LWhvbGRlcicpO1xuXG4gIGNvbnN0IGNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjYXB0aW9uLmlubmVyVGV4dCA9IGdldFRhYmxlTmFtZSh0YWJsZSk7XG4gIG91dHB1dC5hcHBlbmRDaGlsZChjYXB0aW9uKTtcblxuICBsZXQgaGVhZGVycyA9IHF1ZXJ5QWxsKCd0aCcsIHRhYmxlKTtcbiAgbGV0IHJvd3MgPSBxdWVyeUFsbCgndGJvZHkgdHInLCB0YWJsZSk7XG5cbiAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZC10YWJsZScpO1xuICBsaXN0LnNldEF0dHJpYnV0ZSgnZGF0YS1udW0tY29sdW1ucycsIGhlYWRlcnMubGVuZ3RoKTtcblxuICByb3dzLnJlZHVjZSgobGlzdCwgcm93KSA9PiB7XG4gICAgbGV0IGxhYmVsRGF0YSA9IFtdO1xuICAgIGxhYmVsQ29sdW1ucy5mb3JFYWNoKGkgPT4ge1xuICAgICAgbGFiZWxEYXRhLnB1c2gocm93LmNoaWxkcmVuW2ldKTtcbiAgICB9KTtcblxuICAgIGxldCBoZWFkZXIgPSBsYWJlbEZ1bmN0aW9uLmFwcGx5KG51bGwsIGxhYmVsRGF0YSk7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2VkLXRhYmxlLWhlYWRlcicpO1xuICAgIGxhYmVsLmlubmVySFRNTCA9IGhlYWRlci5vdXRlckhUTUwgPyBoZWFkZXIub3V0ZXJIVE1MIDogaGVhZGVyO1xuICAgIGxpLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIGxldCBzdWJsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBzdWJsaXN0LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZC10YWJsZS1jb250ZW50Jyk7XG5cbiAgICBxdWVyeUFsbCgndGgsIHRkJywgcm93KS5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGNvbnRlbnRDb2x1bW5zID0gW107XG4gICAgICBpZiAobGFiZWxDb2x1bW5zLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICBjb250ZW50Q29sdW1ucy5wdXNoKHtjZWxsLCBsYWJlbDogaGVhZGVyc1tpbmRleF0uaW5uZXJIVE1MfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250ZW50Q29sdW1ucy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgY29udGVudENvbHVtbnMuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFibGUtY29sdW1uLWluZGV4JywgaW5kZXgpO1xuXG4gICAgICAgICAgbGV0IGxhYmVsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICBsYWJlbFNwYW4uaW5uZXJIVE1MID0gZGF0dW0ubGFiZWw7XG4gICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChsYWJlbFNwYW4pO1xuXG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IGRhdHVtLmNlbGwuaW5uZXJIVE1MO1xuICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgc3VibGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBwcmVzZXJ2ZSBmb2N1cyFcblxuXG4gICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcblxuICAgIGlmIChzdWJsaXN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGxpLmFwcGVuZENoaWxkKHN1Ymxpc3QpO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuICB9LCBsaXN0KTtcblxuICBvdXRwdXQuYXBwZW5kQ2hpbGQobGlzdCk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbGxhcHNpbmdUYWJsZS9pbmRleC5qcyIsImltcG9ydCB7Z2VuZXJhdGVHdWlkfSBmcm9tICcuLi9fdXRpbHMvZ3VpZFV0aWxzJztcbmltcG9ydCB7Zm9jdXNPbk5vZGV9IGZyb20gJy4vTm9kZVV0aWxzLmpzJztcbmltcG9ydCAqIGFzIG51IGZyb20gJy4vTm9kZVV0aWxzJztcbmltcG9ydCBhcHBseUxvZ2ljIGZyb20gJy4vYmVoYXZpb3InO1xuXG5mdW5jdGlvbiBjcmVhdGVCcmFuY2gocm9vdF9pZCwgcGFyZW50X2lkLCBpdGVtKSB7XG4gIGxldCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLW1lbnUtaWQnLCByb290X2lkKTtcblxuICBpZiAocGFyZW50X2lkKSB7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQtaWQnLCBwYXJlbnRfaWQpO1xuICB9XG5cbiAgYnV0dG9uLmlkID0gZ2VuZXJhdGVHdWlkKCk7XG5cbiAgbGV0IGxhYmVsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICBsYWJlbFNwYW4uaW5uZXJUZXh0ID0gaXRlbS5sYWJlbDtcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKG51LmlzT3BlbihidXR0b24pKSB7XG4gICAgICBudS5jbG9zZU5vZGUoYnV0dG9uKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBudS5vcGVuTm9kZShidXR0b24pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgYnV0dG9uLmFwcGVuZENoaWxkKGxhYmVsU3Bhbik7XG4gIG91dHB1dC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIGxldCBjaGlsZE5vZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICBpdGVtXG4gICAgLmNoaWxkcmVuXG4gICAgLm1hcChpdGVtID0+IHtcbiAgICAgIHJldHVybiBtYXBEYXRhVG9FbGVtZW50KHJvb3RfaWQsIGJ1dHRvbi5pZCwgaXRlbSk7XG4gICAgfSlcbiAgICAuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGNoaWxkTm9kZXMuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSk7XG5cbiAgb3V0cHV0LmFwcGVuZENoaWxkKGNoaWxkTm9kZXMpO1xuICBhcHBseUxvZ2ljKGJ1dHRvbik7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxlYWYocm9vdF9pZCwgcGFyZW50X2lkLCBpdGVtKSB7XG4gIGxldCBvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGl0ZW0udXJsKTtcbiAgbGluay5pbm5lclRleHQgPSBpdGVtLmxhYmVsO1xuICBsaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1tZW51LWlkJywgcm9vdF9pZCk7XG5cbiAgaWYgKHBhcmVudF9pZCkge1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXBhcmVudC1pZCcsIHBhcmVudF9pZCk7XG4gIH1cblxuICBvdXRwdXQuYXBwZW5kQ2hpbGQobGluayk7XG4gIGFwcGx5TG9naWMobGluayk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gbWFwRGF0YVRvRWxlbWVudChyb290X2lkLCBwYXJlbnRfaWQsIGl0ZW0pIHtcbiAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY3JlYXRlQnJhbmNoKHJvb3RfaWQsIHBhcmVudF9pZCwgaXRlbSk7XG4gIH0gZWxzZSBpZiAoaXRlbS51cmwpIHtcbiAgICByZXR1cm4gY3JlYXRlTGVhZihyb290X2lkLCBwYXJlbnRfaWQsIGl0ZW0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhpZXJhcmNoaWNhbE1lbnUoZGF0YSkge1xuICB2YXIgaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbGRlci5pZCA9IGdlbmVyYXRlR3VpZCgpO1xuICB2YXIgbWVudVJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gIG1lbnVSb290LmNsYXNzTGlzdC5hZGQoJ2RlcXVlJyk7XG4gIG1lbnVSb290LmNsYXNzTGlzdC5hZGQoJ2hpZXJhcmNoaWNhbE1lbnUnKTtcblxuICB2YXIgaW5pdGlhbE5vZGUgPSBtYXBEYXRhVG9FbGVtZW50KGhvbGRlci5pZCwgbnVsbCwgZGF0YSk7XG4gIG1lbnVSb290LmFwcGVuZENoaWxkKGluaXRpYWxOb2RlKTtcbiAgaG9sZGVyLmFwcGVuZENoaWxkKG1lbnVSb290KTtcblxuICBmb2N1c09uTm9kZShpbml0aWFsTm9kZSk7XG4gIHJldHVybiBob2xkZXI7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGllcmFyY2hpY2FsTWVudS9pbmRleC5qcyIsImltcG9ydCB7cXVlcnlBbGx9IGZyb20gJy4uL191dGlscy9zZWxlY3Rpb25VdGlscyc7XG5cbi8qIHVzZWQgb25seSBpbnRlcm5hbGx5ICovXG5mdW5jdGlvbiBnZXROZXh0Tm9kZUluU2VxdWVuY2Uobm9kZSwgc2VxdWVuY2UpIHtcbiAgdmFyIHJldHVybk5leHRPbmUgPSBmYWxzZTtcbiAgcmV0dXJuIHNlcXVlbmNlLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcbiAgICBpZiAoYWNjKSB7IHJldHVybiBhY2M7IH1cbiAgICBpZiAocmV0dXJuTmV4dE9uZSkgeyByZXR1cm4gdmFsOyB9XG4gICAgaWYgKG5vZGUgPT09IHZhbCkgeyByZXR1cm5OZXh0T25lID0gdHJ1ZTsgfVxuICB9LCBudWxsKSB8fCBub2RlO1xufVxuXG5mdW5jdGlvbiBnZXRBbGxUcmVlTm9kZXMoaWQpIHtcbiAgcmV0dXJuIHF1ZXJ5QWxsKGBbZGF0YS1tZW51LWlkPScke2lkfSddYCk7XG59XG5cbi8qIHB1YmxpYyBBUEkgc3RhcnRzIGhlcmUgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NoaWxkcmVuKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuaGFzQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09wZW4obm9kZSkge1xuICByZXR1cm4gbm9kZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdE5vZGUoaWQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1lbnUtaWQ9JyR7aWR9J11gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpc2libGVOb2RlcyhpZCkge1xuICB2YXIgb3V0cHV0ID0gW2dldFJvb3ROb2RlKGlkKV07XG4gIHZhciBub2RlcyA9IHF1ZXJ5QWxsKGBbYXJpYS1leHBhbmRlZD0ndHJ1ZSddICsgdWwgPiBsaSA+IFtkYXRhLW1lbnUtaWQ9JyR7aWR9J11gKTtcbiAgcmV0dXJuIG91dHB1dC5jb25jYXQobm9kZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlvdXNWaXNpYmxlTm9kZShub2RlKSB7XG4gIHZhciBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLW1lbnUtaWQnKTtcbiAgdmFyIG5vZGVzID0gZ2V0VmlzaWJsZU5vZGVzKGlkKTtcblxuICByZXR1cm4gZ2V0TmV4dE5vZGVJblNlcXVlbmNlKG5vZGUsIG5vZGVzLnJldmVyc2UoKSkgfHwgbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRWaXNpYmxlTm9kZShub2RlKSB7XG4gIHZhciBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLW1lbnUtaWQnKTtcbiAgdmFyIG5vZGVzID0gZ2V0VmlzaWJsZU5vZGVzKGlkKTtcbiAgcmV0dXJuIGdldE5leHROb2RlSW5TZXF1ZW5jZShub2RlLCBub2RlcykgfHwgbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvY3VzT25Ob2RlKG5vZGUpIHtcbiAgdmFyIGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWVudS1pZCcpO1xuXG4gIGdldEFsbFRyZWVOb2RlcyhpZCkuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAoaXRlbSA9PT0gbm9kZSkgPyAnMCcgOiAnLTEnKTtcbiAgfSk7XG5cbiAgbm9kZS5mb2N1cygpO1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTm9kZShub2RlKSB7XG4gIG5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3Blbk5vZGUobm9kZSkge1xuICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RDaGlsZChub2RlKSB7XG4gIHJldHVybiBub2RlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1lbnUtaWRdJykgfHwgbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudChub2RlKSB7XG4gIGxldCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQtaWQnKSk7XG4gIHJldHVybiBwYXJlbnQgfHwgbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRTaWJsaW5nKG5vZGUpIHtcbiAgbGV0IHBhcmVudGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyZW50LWlkJyk7XG4gIGxldCBzaWJsaW5ncyA9IHF1ZXJ5QWxsKGBbZGF0YS1wYXJlbnQtaWQ9JHtwYXJlbnRpZH1gKTtcbiAgcmV0dXJuIGdldE5leHROb2RlSW5TZXF1ZW5jZShub2RlLCBzaWJsaW5ncyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmV2aW91c1NpYmxpbmcobm9kZSkge1xuICBsZXQgcGFyZW50aWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQtaWQnKTtcbiAgbGV0IHNpYmxpbmdzID0gcXVlcnlBbGwoYFtkYXRhLXBhcmVudC1pZD0ke3BhcmVudGlkfWApO1xuICByZXR1cm4gZ2V0TmV4dE5vZGVJblNlcXVlbmNlKG5vZGUsIHNpYmxpbmdzLnJldmVyc2UoKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGllcmFyY2hpY2FsTWVudS9Ob2RlVXRpbHMuanMiLCJpbXBvcnQgKiBhcyBLZXlib2FyZFV0aWxzIGZyb20gJy4uL191dGlscy9rZXlib2FyZFV0aWxzJztcbmltcG9ydCAqIGFzIE5vZGVVdGlscyBmcm9tICcuL05vZGVVdGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5TG9naWMobm9kZSkge1xuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudENoYXJhY3Rlcihub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdmFyIGNoYXJhY3RlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkudG9VcHBlckNhc2UoKTtcbiAgICB2YXIgbm9kZXMgPSBOb2RlVXRpbHMuZ2V0VmlzaWJsZU5vZGVzKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLW1lbnUtaWQnKSk7XG5cbiAgICB2YXIgdGhpc0ZvdW5kID0gZmFsc2U7XG4gICAgdmFyIHRhcmdldCA9IG5vZGVzLmZpbHRlcihpdGVtID0+IHsgICAgICAgICAgIC8vIGRpc2NhcmQgJ3ByZXZpb3VzJyBub2RlczpcbiAgICAgIGlmICh0aGlzRm91bmQpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgIGlmIChpdGVtID09PSBub2RlKSB7IHRoaXNGb3VuZCA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KS5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7ICAgICAgICAgICAgICAgICAgICAgLy8gZ3JhYiBuZXh0IG9uZSBzdGFydGluZyB3aXRoIGNoYXJcbiAgICAgIGlmIChhY2MpIHsgcmV0dXJuIGFjYzsgfVxuICAgICAgaWYgKHZhbC5pbm5lclRleHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgPT09IGNoYXJhY3Rlcikge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgIH0sIG51bGwpO1xuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKHRhcmdldCk7XG4gICAgfVxuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudEhvbWUobm9kZSwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgdGFyZ2V0ID0gTm9kZVV0aWxzLmdldFJvb3ROb2RlKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLW1lbnUtaWQnKSk7XG4gICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKHRhcmdldCk7XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50RW5kKG5vZGUsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdmFyIG5vZGVzID0gTm9kZVV0aWxzLmdldFZpc2libGVOb2Rlcyhub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1tZW51LWlkJykpO1xuICAgIHZhciB0YXJnZXQgPSBub2Rlcy5yZXZlcnNlKClbMF07XG4gICAgTm9kZVV0aWxzLmZvY3VzT25Ob2RlKHRhcmdldCk7XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50RG93bihub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHZhciBuZXh0ID0gTm9kZVV0aWxzLmdldE5leHRWaXNpYmxlTm9kZShub2RlKTtcbiAgICBOb2RlVXRpbHMuZm9jdXNPbk5vZGUobmV4dCk7XG4gIH0pO1xuXG4gIEtleWJvYXJkVXRpbHMub25FbGVtZW50VXAobm9kZSwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB2YXIgc2libGluZyA9IE5vZGVVdGlscy5nZXRQcmV2aW91c1Zpc2libGVOb2RlKG5vZGUpO1xuICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZShzaWJsaW5nKTtcbiAgfSk7XG5cbiAgS2V5Ym9hcmRVdGlscy5vbkVsZW1lbnRSaWdodChub2RlLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKE5vZGVVdGlscy5oYXNDaGlsZHJlbihub2RlKSAmJiAhTm9kZVV0aWxzLmlzT3Blbihub2RlKSkge1xuICAgICAgTm9kZVV0aWxzLm9wZW5Ob2RlKG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hpbGQgPSBOb2RlVXRpbHMuZ2V0Rmlyc3RDaGlsZChub2RlKTtcbiAgICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZShjaGlsZCk7XG4gICAgfVxuICB9KTtcblxuICBLZXlib2FyZFV0aWxzLm9uRWxlbWVudExlZnQobm9kZSwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICghTm9kZVV0aWxzLmhhc0NoaWxkcmVuKG5vZGUpIHx8ICFOb2RlVXRpbHMuaXNPcGVuKG5vZGUpKSB7XG4gICAgICB2YXIgcGFyZW50ID0gTm9kZVV0aWxzLmdldFBhcmVudChub2RlKTtcbiAgICAgIE5vZGVVdGlscy5mb2N1c09uTm9kZShwYXJlbnQpO1xuXG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiBOb2RlVXRpbHMuY2xvc2VOb2RlKG5vZGUpO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGllcmFyY2hpY2FsTWVudS9iZWhhdmlvci5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgubGVzc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==