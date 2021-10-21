(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL_SMALL: 'https://restaurant-api.dicoding.dev/images/small/',
  BASE_IMAGE_URL_LARGE: 'https://restaurant-api.dicoding.dev/images/large/',
  API_KEY: 12345,
  PRECACHE_PREFIX: 'foodiestApp',
  PRECACHE_SUFFIX: 'v2',
  PRECACHE_NAME: 'precache',
  API_CACHE_NAME: 'api-cache',
  IMAGE_CACHE_NAME: 'img-cache',
  DATABASE_NAME: 'foodiest-app-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'resto'
};
/* harmony default export */ __webpack_exports__["a"] = (CONFIG);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/scripts/globals/config.js
var config = __webpack_require__(0);

// CONCATENATED MODULE: ./src/scripts/globals/api-endpoint.js

var API_ENDPOINT = {
  RESTO_LIST: "".concat(config["a" /* default */].BASE_URL, "list"),
  DETAIL: function DETAIL(id) {
    return "".concat(config["a" /* default */].BASE_URL, "detail/").concat(id);
  },
  SEARCH: function SEARCH(query) {
    return "".concat(config["a" /* default */].BASE_URL, "search?q=").concat(query);
  },
  POST_REVIEW: "".concat(config["a" /* default */].BASE_URL, "review")
};
/* harmony default export */ var api_endpoint = (API_ENDPOINT);
// CONCATENATED MODULE: ./src/scripts/data/data-source.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var data_source_RestoDataSource = /*#__PURE__*/function () {
  function RestoDataSource() {
    _classCallCheck(this, RestoDataSource);
  }

  _createClass(RestoDataSource, null, [{
    key: "restoLists",
    value: function () {
      var _restoLists = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(api_endpoint.RESTO_LIST);

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                responseJson = _context.sent;
                return _context.abrupt("return", responseJson.restaurants);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function restoLists() {
        return _restoLists.apply(this, arguments);
      }

      return restoLists;
    }()
  }, {
    key: "detailResto",
    value: function () {
      var _detailResto = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(api_endpoint.DETAIL(id));

              case 2:
                response = _context2.sent;
                _context2.next = 5;
                return response.json();

              case 5:
                responseJson = _context2.sent;
                return _context2.abrupt("return", responseJson.restaurant);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function detailResto(_x) {
        return _detailResto.apply(this, arguments);
      }

      return detailResto;
    }()
  }, {
    key: "searchResto",
    value: function () {
      var _searchResto = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(query) {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch(api_endpoint.SEARCH(query));

              case 2:
                response = _context3.sent;
                _context3.next = 5;
                return response.json();

              case 5:
                responseJson = _context3.sent;
                return _context3.abrupt("return", responseJson.restaurants);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function searchResto(_x2) {
        return _searchResto.apply(this, arguments);
      }

      return searchResto;
    }()
  }, {
    key: "postRestoReview",
    value: function () {
      var _postRestoReview = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
        var rawResponse;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return fetch(api_endpoint.POST_REVIEW, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'X-Auth-Token': config["a" /* default */].API_KEY
                  },
                  body: JSON.stringify(data)
                });

              case 2:
                rawResponse = _context4.sent;
                return _context4.abrupt("return", rawResponse);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function postRestoReview(_x3) {
        return _postRestoReview.apply(this, arguments);
      }

      return postRestoReview;
    }()
  }]);

  return RestoDataSource;
}();

/* harmony default export */ var data_source = __webpack_exports__["a"] = (data_source_RestoDataSource);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var UrlParser = {
  parseActiveUrlWithCombiner: function parseActiveUrlWithCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();

    var splitedUrl = this._urlSplitter(url);

    return this._urlCombiner(splitedUrl);
  },
  parseActiveUrlWithoutCombiner: function parseActiveUrlWithoutCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },
  _urlSplitter: function _urlSplitter(url) {
    var urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null
    };
  },
  _urlCombiner: function _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? "/".concat(splitedUrl.resource) : '/') + (splitedUrl.id ? '/:id' : '') + (splitedUrl.verb ? "/".concat(splitedUrl.verb) : '');
  }
};
/* harmony default export */ __webpack_exports__["a"] = (UrlParser);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var DATABASE_NAME = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DATABASE_NAME,
    DATABASE_VERSION = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DATABASE_VERSION,
    OBJECT_STORE_NAME = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].OBJECT_STORE_NAME;
var dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_0__[/* openDB */ "a"])(DATABASE_NAME, DATABASE_VERSION, {
  upgrade: function upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id'
    });
  }
});
var FavoriteRestoIdb = {
  getResto: function getResto(id) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (id) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return dbPromise;

            case 4:
              return _context.abrupt("return", _context.sent.get(OBJECT_STORE_NAME, id));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getAllResto: function getAllResto() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dbPromise;

            case 2:
              return _context2.abrupt("return", _context2.sent.getAll(OBJECT_STORE_NAME));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  putResto: function putResto(resto) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (resto.hasOwnProperty('id')) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.next = 4;
              return dbPromise;

            case 4:
              return _context3.abrupt("return", _context3.sent.put(OBJECT_STORE_NAME, resto));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  deleteResto: function deleteResto(id) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return dbPromise;

            case 2:
              return _context4.abrupt("return", _context4.sent["delete"](OBJECT_STORE_NAME, id));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (FavoriteRestoIdb);

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "public/assets/loader.gif");

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var navList = document.querySelector('.nav-list');
var appBarBrand = document.querySelector('.app-bar-brand');
var sideBarOverlay = document.querySelector('.sidebar-overlay');
var DrawerInitiator = {
  init: function init(_ref) {
    var _this = this;

    var appBar = _ref.appBar,
        button = _ref.button,
        drawer = _ref.drawer,
        content = _ref.content;
    button.addEventListener('click', function (event) {
      _this._toggleDrawer({
        drawer: drawer,
        event: event,
        button: button,
        content: content
      });
    });
    document.querySelectorAll('.close-drawer').forEach(function (elm) {
      elm.addEventListener('click', function (event) {
        _this._closeDrawer({
          drawer: drawer,
          button: button,
          content: content,
          event: event
        });
      });
    });
    window.addEventListener('scroll', function () {
      _this._eventScrollNavbar(button, appBar);
    });
  },
  _toggleDrawer: function _toggleDrawer(_ref2) {
    var drawer = _ref2.drawer,
        button = _ref2.button,
        content = _ref2.content,
        event = _ref2.event;
    event.stopPropagation();
    drawer.classList.toggle('open');
    button.classList.add('hidden');
    content.classList.toggle('fixed');
    navList.classList.toggle('show');
    appBarBrand.classList.add('hidden');
    sideBarOverlay.classList.remove('hidden');
  },
  _closeDrawer: function _closeDrawer(_ref3) {
    var drawer = _ref3.drawer,
        button = _ref3.button,
        content = _ref3.content,
        event = _ref3.event;
    event.stopPropagation();
    drawer.classList.remove('open');
    button.classList.remove('hidden');
    content.classList.remove('fixed');
    navList.classList.remove('show');
    appBarBrand.classList.remove('hidden');
    sideBarOverlay.classList.add('hidden');
  },
  _eventScrollNavbar: function _eventScrollNavbar(button, appBar) {
    var url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].parseActiveUrlWithCombiner();
    if (url === '/') url = '/home';

    if (url === '/home') {
      if (window.pageYOffset > 0) {
        button.classList.add('btn-dark');
        appBar.classList.add('light');
      } else {
        button.classList.remove('btn-dark');
        appBar.classList.remove('light');
      }
    } else {
      button.classList.add('btn-dark');
      appBar.classList.add('light');
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (DrawerInitiator);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _views_pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _views_pages_favorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _views_pages_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);



var routes = {
  '/': _views_pages_home__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  // default page
  '/home': _views_pages_home__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  '/favorite': _views_pages_favorite__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  '/detail/:id': _views_pages_detail__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
};
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "public/assets/undraw_page_not_found_su7k.png");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "public/assets/undraw_page_not_found_su7k-medium.jpg");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "public/assets/undraw_page_not_found_su7k-small.jpg");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "public/assets/undraw_Location_search_re_ttoj.png");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "public/assets/undraw_Location_search_re_ttoj-medium.jpg");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "public/assets/undraw_Location_search_re_ttoj-small.jpg");

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "public/assets/undraw_empty_xct9.png");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "public/assets/undraw_empty_xct9-medium.jpg");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "public/assets/undraw_empty_xct9-small.jpg");

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _data_data_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


var PostReview = function PostReview(url, name, review) {
  var dataInput = {
    id: url.id,
    name: name,
    review: review
  };
  _data_data_source__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].postRestoReview(dataInput);
  var reviewsContainer = document.querySelector('#customer__reviews');
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var date = new Date().toLocaleDateString('id-ID', options);
  var newReview = "\n        <div class=\"review-card\" tabindex=\"0\">\n            <div class=\"review-header-card\">\n                <img src=\"./images/avatar-image.png\" alt=\"\">\n                <div class=\"reviewer-wrapper\">\n                    <span><b>".concat(name, "</b></span>\n                    <span class=\"review-date\">").concat(date, "</span>\n                </div>\n            </div>\n            <p>").concat(review, "</p>\n        </div>\n    ");
  reviewsContainer.innerHTML += newReview;
};

/* harmony default export */ __webpack_exports__["a"] = (PostReview);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var LikeButtonPresenter = {
  init: function init(_ref) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var likeButtonContainer, FavoriteRestoIdb, resto;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              likeButtonContainer = _ref.likeButtonContainer, FavoriteRestoIdb = _ref.favoriteRestaurants, resto = _ref.resto;
              _this._likeButtonContainer = likeButtonContainer;
              _this._resto = resto;
              _this._favoriteRestaurants = FavoriteRestoIdb;
              _context.next = 6;
              return _this._renderButton();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  _renderButton: function _renderButton() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var id;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = _this2._resto.id;
              _context2.next = 3;
              return _this2._isRestoExist(id);

            case 3:
              if (!_context2.sent) {
                _context2.next = 7;
                break;
              }

              _this2._renderLiked();

              _context2.next = 8;
              break;

            case 7:
              _this2._renderLike();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  _isRestoExist: function _isRestoExist(id) {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var resto;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3._favoriteRestaurants.getResto(id);

            case 2:
              resto = _context3.sent;
              return _context3.abrupt("return", !!resto);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  _renderLike: function _renderLike() {
    var _this4 = this;

    this._likeButtonContainer.innerHTML = Object(_views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__[/* createLikeButtonTemplate */ "b"])();
    var likeButton = document.querySelector('#like__button');
    likeButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4._favoriteRestaurants.putResto(_this4._resto);

            case 2:
              likeButton.classList.add('like-clicked');

              _this4._renderButton();

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  },
  _renderLiked: function _renderLiked() {
    var _this5 = this;

    this._likeButtonContainer.innerHTML = Object(_views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__[/* createLikedButtonTemplate */ "c"])();
    var likeButton = document.querySelector('#like__button');
    likeButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5._favoriteRestaurants.deleteResto(_this5._resto.id);

            case 2:
              likeButton.classList.remove('like-clicked');

              _this5._renderButton();

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (LikeButtonPresenter);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "public/assets/avatar-image.jpg");

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(27);

// EXTERNAL MODULE: ./src/scripts/views/component/preloader.js
var preloader = __webpack_require__(28);

// EXTERNAL MODULE: ./src/scripts/views/component/app-bar.js
var app_bar = __webpack_require__(29);

// EXTERNAL MODULE: ./src/scripts/views/component/footer.js
var footer = __webpack_require__(30);

// EXTERNAL MODULE: ./src/styles/main.css
var main = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
var lazysizes = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js
var ls_parent_fit = __webpack_require__(35);

// EXTERNAL MODULE: ./src/scripts/views/app.js
var app = __webpack_require__(9);

// CONCATENATED MODULE: ./src/scripts/utils/sw-register.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var swRegister = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!('serviceWorker' in navigator)) {
              _context.next = 12;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return navigator.serviceWorker.register('../sw.js');

          case 4:
            console.log('ServiceWorker is registered');
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            console.log('ServiceWorker is not registered', _context.t0);

          case 10:
            _context.next = 13;
            break;

          case 12:
            console.log('Serviceworker is not supported in this browser');

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));

  return function swRegister() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var sw_register = (swRegister);
// CONCATENATED MODULE: ./src/scripts/index.js









var scripts_app = new app["a" /* default */]({
  appBar: document.querySelector('#app__bar'),
  button: document.querySelector('#burger__button'),
  drawer: document.querySelector('#navigation__drawer'),
  content: document.querySelector('#main__element')
});
window.addEventListener('hashchange', function () {
  scripts_app.renderPage();
});
window.addEventListener('DOMContentLoaded', function () {
  scripts_app.renderPage();
  sw_register();
});

/***/ })
]]);