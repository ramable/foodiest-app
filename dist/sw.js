/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @ts-ignore

try {
  self['workbox:core:6.1.5'] && _();
} catch (e) {}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @ts-ignore

try {
  self['workbox:precaching:6.1.5'] && _();
} catch (e) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @ts-ignore

try {
  self['workbox:routing:6.1.5'] && _();
} catch (e) {}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @ts-ignore

try {
  self['workbox:strategies:6.1.5'] && _();
} catch (e) {}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @ts-ignore

try {
  self['workbox:expiration:6.1.5'] && _();
} catch (e) {}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @ts-ignore

try {
  self['workbox:cacheable-response:6.1.5'] && _();
} catch (e) {}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/workbox-core/_version.js
var _version = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/workbox-core/models/messages/messages.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

var messages = {
  'invalid-value': function invalidValue(_ref) {
    var paramName = _ref.paramName,
        validValueDescription = _ref.validValueDescription,
        value = _ref.value;

    if (!paramName || !validValueDescription) {
      throw new Error("Unexpected input to 'invalid-value' error.");
    }

    return "The '".concat(paramName, "' parameter was given a value with an ") + "unexpected value. ".concat(validValueDescription, " Received a value of ") + "".concat(JSON.stringify(value), ".");
  },
  'not-an-array': function notAnArray(_ref2) {
    var moduleName = _ref2.moduleName,
        className = _ref2.className,
        funcName = _ref2.funcName,
        paramName = _ref2.paramName;

    if (!moduleName || !className || !funcName || !paramName) {
      throw new Error("Unexpected input to 'not-an-array' error.");
    }

    return "The parameter '".concat(paramName, "' passed into ") + "'".concat(moduleName, ".").concat(className, ".").concat(funcName, "()' must be an array.");
  },
  'incorrect-type': function incorrectType(_ref3) {
    var expectedType = _ref3.expectedType,
        paramName = _ref3.paramName,
        moduleName = _ref3.moduleName,
        className = _ref3.className,
        funcName = _ref3.funcName;

    if (!expectedType || !paramName || !moduleName || !funcName) {
      throw new Error("Unexpected input to 'incorrect-type' error.");
    }

    return "The parameter '".concat(paramName, "' passed into ") + "'".concat(moduleName, ".").concat(className ? className + '.' : '') + "".concat(funcName, "()' must be of type ").concat(expectedType, ".");
  },
  'incorrect-class': function incorrectClass(_ref4) {
    var expectedClass = _ref4.expectedClass,
        paramName = _ref4.paramName,
        moduleName = _ref4.moduleName,
        className = _ref4.className,
        funcName = _ref4.funcName,
        isReturnValueProblem = _ref4.isReturnValueProblem;

    if (!expectedClass || !moduleName || !funcName) {
      throw new Error("Unexpected input to 'incorrect-class' error.");
    }

    if (isReturnValueProblem) {
      return "The return value from " + "'".concat(moduleName, ".").concat(className ? className + '.' : '').concat(funcName, "()' ") + "must be an instance of class ".concat(expectedClass.name, ".");
    }

    return "The parameter '".concat(paramName, "' passed into ") + "'".concat(moduleName, ".").concat(className ? className + '.' : '').concat(funcName, "()' ") + "must be an instance of class ".concat(expectedClass.name, ".");
  },
  'missing-a-method': function missingAMethod(_ref5) {
    var expectedMethod = _ref5.expectedMethod,
        paramName = _ref5.paramName,
        moduleName = _ref5.moduleName,
        className = _ref5.className,
        funcName = _ref5.funcName;

    if (!expectedMethod || !paramName || !moduleName || !className || !funcName) {
      throw new Error("Unexpected input to 'missing-a-method' error.");
    }

    return "".concat(moduleName, ".").concat(className, ".").concat(funcName, "() expected the ") + "'".concat(paramName, "' parameter to expose a '").concat(expectedMethod, "' method.");
  },
  'add-to-cache-list-unexpected-type': function addToCacheListUnexpectedType(_ref6) {
    var entry = _ref6.entry;
    return "An unexpected entry was passed to " + "'workbox-precaching.PrecacheController.addToCacheList()' The entry " + "'".concat(JSON.stringify(entry), "' isn't supported. You must supply an array of ") + "strings with one or more characters, objects with a url property or " + "Request objects.";
  },
  'add-to-cache-list-conflicting-entries': function addToCacheListConflictingEntries(_ref7) {
    var firstEntry = _ref7.firstEntry,
        secondEntry = _ref7.secondEntry;

    if (!firstEntry || !secondEntry) {
      throw new Error("Unexpected input to " + "'add-to-cache-list-duplicate-entries' error.");
    }

    return "Two of the entries passed to " + "'workbox-precaching.PrecacheController.addToCacheList()' had the URL " + "".concat(firstEntry._entryId, " but different revision details. Workbox is ") + "unable to cache and version the asset correctly. Please remove one " + "of the entries.";
  },
  'plugin-error-request-will-fetch': function pluginErrorRequestWillFetch(_ref8) {
    var thrownError = _ref8.thrownError;

    if (!thrownError) {
      throw new Error("Unexpected input to " + "'plugin-error-request-will-fetch', error.");
    }

    return "An error was thrown by a plugins 'requestWillFetch()' method. " + "The thrown error message was: '".concat(thrownError.message, "'.");
  },
  'invalid-cache-name': function invalidCacheName(_ref9) {
    var cacheNameId = _ref9.cacheNameId,
        value = _ref9.value;

    if (!cacheNameId) {
      throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");
    }

    return "You must provide a name containing at least one character for " + "setCacheDetails({".concat(cacheNameId, ": '...'}). Received a value of ") + "'".concat(JSON.stringify(value), "'");
  },
  'unregister-route-but-not-found-with-method': function unregisterRouteButNotFoundWithMethod(_ref10) {
    var method = _ref10.method;

    if (!method) {
      throw new Error("Unexpected input to " + "'unregister-route-but-not-found-with-method' error.");
    }

    return "The route you're trying to unregister was not  previously " + "registered for the method type '".concat(method, "'.");
  },
  'unregister-route-route-not-registered': function unregisterRouteRouteNotRegistered() {
    return "The route you're trying to unregister was not previously " + "registered.";
  },
  'queue-replay-failed': function queueReplayFailed(_ref11) {
    var name = _ref11.name;
    return "Replaying the background sync queue '".concat(name, "' failed.");
  },
  'duplicate-queue-name': function duplicateQueueName(_ref12) {
    var name = _ref12.name;
    return "The Queue name '".concat(name, "' is already being used. ") + "All instances of backgroundSync.Queue must be given unique names.";
  },
  'expired-test-without-max-age': function expiredTestWithoutMaxAge(_ref13) {
    var methodName = _ref13.methodName,
        paramName = _ref13.paramName;
    return "The '".concat(methodName, "()' method can only be used when the ") + "'".concat(paramName, "' is used in the constructor.");
  },
  'unsupported-route-type': function unsupportedRouteType(_ref14) {
    var moduleName = _ref14.moduleName,
        className = _ref14.className,
        funcName = _ref14.funcName,
        paramName = _ref14.paramName;
    return "The supplied '".concat(paramName, "' parameter was an unsupported type. ") + "Please check the docs for ".concat(moduleName, ".").concat(className, ".").concat(funcName, " for ") + "valid input types.";
  },
  'not-array-of-class': function notArrayOfClass(_ref15) {
    var value = _ref15.value,
        expectedClass = _ref15.expectedClass,
        moduleName = _ref15.moduleName,
        className = _ref15.className,
        funcName = _ref15.funcName,
        paramName = _ref15.paramName;
    return "The supplied '".concat(paramName, "' parameter must be an array of ") + "'".concat(expectedClass, "' objects. Received '").concat(JSON.stringify(value), ",'. ") + "Please check the call to ".concat(moduleName, ".").concat(className, ".").concat(funcName, "() ") + "to fix the issue.";
  },
  'max-entries-or-age-required': function maxEntriesOrAgeRequired(_ref16) {
    var moduleName = _ref16.moduleName,
        className = _ref16.className,
        funcName = _ref16.funcName;
    return "You must define either config.maxEntries or config.maxAgeSeconds" + "in ".concat(moduleName, ".").concat(className, ".").concat(funcName);
  },
  'statuses-or-headers-required': function statusesOrHeadersRequired(_ref17) {
    var moduleName = _ref17.moduleName,
        className = _ref17.className,
        funcName = _ref17.funcName;
    return "You must define either config.statuses or config.headers" + "in ".concat(moduleName, ".").concat(className, ".").concat(funcName);
  },
  'invalid-string': function invalidString(_ref18) {
    var moduleName = _ref18.moduleName,
        funcName = _ref18.funcName,
        paramName = _ref18.paramName;

    if (!paramName || !moduleName || !funcName) {
      throw new Error("Unexpected input to 'invalid-string' error.");
    }

    return "When using strings, the '".concat(paramName, "' parameter must start with ") + "'http' (for cross-origin matches) or '/' (for same-origin matches). " + "Please see the docs for ".concat(moduleName, ".").concat(funcName, "() for ") + "more info.";
  },
  'channel-name-required': function channelNameRequired() {
    return "You must provide a channelName to construct a " + "BroadcastCacheUpdate instance.";
  },
  'invalid-responses-are-same-args': function invalidResponsesAreSameArgs() {
    return "The arguments passed into responsesAreSame() appear to be " + "invalid. Please ensure valid Responses are used.";
  },
  'expire-custom-caches-only': function expireCustomCachesOnly() {
    return "You must provide a 'cacheName' property when using the " + "expiration plugin with a runtime caching strategy.";
  },
  'unit-must-be-bytes': function unitMustBeBytes(_ref19) {
    var normalizedRangeHeader = _ref19.normalizedRangeHeader;

    if (!normalizedRangeHeader) {
      throw new Error("Unexpected input to 'unit-must-be-bytes' error.");
    }

    return "The 'unit' portion of the Range header must be set to 'bytes'. " + "The Range header provided was \"".concat(normalizedRangeHeader, "\"");
  },
  'single-range-only': function singleRangeOnly(_ref20) {
    var normalizedRangeHeader = _ref20.normalizedRangeHeader;

    if (!normalizedRangeHeader) {
      throw new Error("Unexpected input to 'single-range-only' error.");
    }

    return "Multiple ranges are not supported. Please use a  single start " + "value, and optional end value. The Range header provided was " + "\"".concat(normalizedRangeHeader, "\"");
  },
  'invalid-range-values': function invalidRangeValues(_ref21) {
    var normalizedRangeHeader = _ref21.normalizedRangeHeader;

    if (!normalizedRangeHeader) {
      throw new Error("Unexpected input to 'invalid-range-values' error.");
    }

    return "The Range header is missing both start and end values. At least " + "one of those values is needed. The Range header provided was " + "\"".concat(normalizedRangeHeader, "\"");
  },
  'no-range-header': function noRangeHeader() {
    return "No Range header was found in the Request provided.";
  },
  'range-not-satisfiable': function rangeNotSatisfiable(_ref22) {
    var size = _ref22.size,
        start = _ref22.start,
        end = _ref22.end;
    return "The start (".concat(start, ") and end (").concat(end, ") values in the Range are ") + "not satisfiable by the cached response, which is ".concat(size, " bytes.");
  },
  'attempt-to-cache-non-get-request': function attemptToCacheNonGetRequest(_ref23) {
    var url = _ref23.url,
        method = _ref23.method;
    return "Unable to cache '".concat(url, "' because it is a '").concat(method, "' request and ") + "only 'GET' requests can be cached.";
  },
  'cache-put-with-no-response': function cachePutWithNoResponse(_ref24) {
    var url = _ref24.url;
    return "There was an attempt to cache '".concat(url, "' but the response was not ") + "defined.";
  },
  'no-response': function noResponse(_ref25) {
    var url = _ref25.url,
        error = _ref25.error;
    var message = "The strategy could not generate a response for '".concat(url, "'.");

    if (error) {
      message += " The underlying error is ".concat(error, ".");
    }

    return message;
  },
  'bad-precaching-response': function badPrecachingResponse(_ref26) {
    var url = _ref26.url,
        status = _ref26.status;
    return "The precaching request for '".concat(url, "' failed") + (status ? " with an HTTP status of ".concat(status, ".") : ".");
  },
  'non-precached-url': function nonPrecachedUrl(_ref27) {
    var url = _ref27.url;
    return "createHandlerBoundToURL('".concat(url, "') was called, but that URL is ") + "not precached. Please pass in a URL that is precached instead.";
  },
  'add-to-cache-list-conflicting-integrities': function addToCacheListConflictingIntegrities(_ref28) {
    var url = _ref28.url;
    return "Two of the entries passed to " + "'workbox-precaching.PrecacheController.addToCacheList()' had the URL " + "".concat(url, " with different integrity values. Please remove one of them.");
  },
  'missing-precache-entry': function missingPrecacheEntry(_ref29) {
    var cacheName = _ref29.cacheName,
        url = _ref29.url;
    return "Unable to find a precached response in ".concat(cacheName, " for ").concat(url, ".");
  },
  'cross-origin-copy-response': function crossOriginCopyResponse(_ref30) {
    var origin = _ref30.origin;
    return "workbox-core.copyResponse() can only be used with same-origin " + "responses. It was passed a response with origin ".concat(origin, ".");
  }
};
// CONCATENATED MODULE: ./node_modules/workbox-core/models/messages/messageGenerator.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



var fallback = function fallback(code) {
  var msg = code;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (args.length > 0) {
    msg += " :: ".concat(JSON.stringify(args));
  }

  return msg;
};

var messageGenerator_generatorFunction = function generatorFunction(code) {
  var details = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var message = messages[code];

  if (!message) {
    throw new Error("Unable to find message for code '".concat(code, "'."));
  }

  return message(details);
};

var messageGenerator =  true ? fallback : undefined;
// CONCATENATED MODULE: ./node_modules/workbox-core/_private/WorkboxError.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */

var WorkboxError_WorkboxError = /*#__PURE__*/function (_Error) {
  _inherits(WorkboxError, _Error);

  var _super = _createSuper(WorkboxError);

  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  function WorkboxError(errorCode, details) {
    var _this;

    _classCallCheck(this, WorkboxError);

    var message = messageGenerator(errorCode, details);
    _this = _super.call(this, message);
    _this.name = errorCode;
    _this.details = details;
    return _this;
  }

  return WorkboxError;
}( /*#__PURE__*/_wrapNativeSuper(Error));


// CONCATENATED MODULE: ./node_modules/workbox-core/_private/assert.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function assert_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { assert_typeof = function _typeof(obj) { return typeof obj; }; } else { assert_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return assert_typeof(obj); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */

var assert_isArray = function isArray(value, details) {
  if (!Array.isArray(value)) {
    throw new WorkboxError_WorkboxError('not-an-array', details);
  }
};

var assert_hasMethod = function hasMethod(object, expectedMethod, details) {
  var type = assert_typeof(object[expectedMethod]);

  if (type !== 'function') {
    details['expectedMethod'] = expectedMethod;
    throw new WorkboxError_WorkboxError('missing-a-method', details);
  }
};

var assert_isType = function isType(object, expectedType, details) {
  if (assert_typeof(object) !== expectedType) {
    details['expectedType'] = expectedType;
    throw new WorkboxError_WorkboxError('incorrect-type', details);
  }
};

var assert_isInstance = function isInstance(object, expectedClass, details) {
  if (!(object instanceof expectedClass)) {
    details['expectedClass'] = expectedClass;
    throw new WorkboxError_WorkboxError('incorrect-class', details);
  }
};

var assert_isOneOf = function isOneOf(value, validValues, details) {
  if (!validValues.includes(value)) {
    details['validValueDescription'] = "Valid values are ".concat(JSON.stringify(validValues), ".");
    throw new WorkboxError_WorkboxError('invalid-value', details);
  }
};

var assert_isArrayOfClass = function isArrayOfClass(value, expectedClass, details) {
  var error = new WorkboxError_WorkboxError('not-array-of-class', details);

  if (!Array.isArray(value)) {
    throw error;
  }

  var _iterator = _createForOfIteratorHelper(value),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (!(item instanceof expectedClass)) {
        throw error;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var finalAssertExports =  true ? null : undefined;

// CONCATENATED MODULE: ./node_modules/workbox-core/_private/cacheNames.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

var _cacheNameDetails = {
  googleAnalytics: 'googleAnalytics',
  precache: 'precache-v2',
  prefix: 'workbox',
  runtime: 'runtime',
  suffix: typeof registration !== 'undefined' ? registration.scope : ''
};

var _createCacheName = function _createCacheName(cacheName) {
  return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix].filter(function (value) {
    return value && value.length > 0;
  }).join('-');
};

var eachCacheNameDetail = function eachCacheNameDetail(fn) {
  for (var _i = 0, _Object$keys = Object.keys(_cacheNameDetails); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    fn(key);
  }
};

var cacheNames = {
  updateDetails: function updateDetails(details) {
    eachCacheNameDetail(function (key) {
      if (typeof details[key] === 'string') {
        _cacheNameDetails[key] = details[key];
      }
    });
  },
  getGoogleAnalyticsName: function getGoogleAnalyticsName(userCacheName) {
    return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
  },
  getPrecacheName: function getPrecacheName(userCacheName) {
    return userCacheName || _createCacheName(_cacheNameDetails.precache);
  },
  getPrefix: function getPrefix() {
    return _cacheNameDetails.prefix;
  },
  getRuntimeName: function getRuntimeName(userCacheName) {
    return userCacheName || _createCacheName(_cacheNameDetails.runtime);
  },
  getSuffix: function getSuffix() {
    return _cacheNameDetails.suffix;
  }
};
// CONCATENATED MODULE: ./node_modules/workbox-core/_private/logger.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || logger_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function logger_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return logger_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return logger_arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return logger_arrayLikeToArray(arr); }

function logger_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

var logger =  true ? null : undefined;

// CONCATENATED MODULE: ./node_modules/workbox-core/_private/waitUntil.js
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */

function waitUntil(event, asyncFn) {
  var returnPromise = asyncFn();
  event.waitUntil(returnPromise);
  return returnPromise;
}


// EXTERNAL MODULE: ./node_modules/workbox-precaching/_version.js
var workbox_precaching_version = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/createCacheKey.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

 // Name of the search parameter used to store revision info.

var REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof module:workbox-precaching
 */

function createCacheKey(entry) {
  if (!entry) {
    throw new WorkboxError_WorkboxError('add-to-cache-list-unexpected-type', {
      entry: entry
    });
  } // If a precache manifest entry is a string, it's assumed to be a versioned
  // URL, like '/app.abcd1234.js'. Return as-is.


  if (typeof entry === 'string') {
    var urlObject = new URL(entry, location.href);
    return {
      cacheKey: urlObject.href,
      url: urlObject.href
    };
  }

  var revision = entry.revision,
      url = entry.url;

  if (!url) {
    throw new WorkboxError_WorkboxError('add-to-cache-list-unexpected-type', {
      entry: entry
    });
  } // If there's just a URL and no revision, then it's also assumed to be a
  // versioned URL.


  if (!revision) {
    var _urlObject = new URL(url, location.href);

    return {
      cacheKey: _urlObject.href,
      url: _urlObject.href
    };
  } // Otherwise, construct a properly versioned URL using the custom Workbox
  // search parameter along with the revision info.


  var cacheKeyURL = new URL(url, location.href);
  var originalURL = new URL(url, location.href);
  cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
  return {
    cacheKey: cacheKeyURL.href,
    url: originalURL.href
  };
}
// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function PrecacheInstallReportPlugin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */

var PrecacheInstallReportPlugin = function PrecacheInstallReportPlugin() {
  var _this = this;

  PrecacheInstallReportPlugin_classCallCheck(this, PrecacheInstallReportPlugin);

  this.updatedURLs = [];
  this.notUpdatedURLs = [];

  this.handlerWillStart = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
      var request, state;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              request = _ref.request, state = _ref.state;

              // TODO: `state` should never be undefined...
              if (state) {
                state.originalRequest = request;
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  this.cachedResponseWillBeUsed = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
      var event, state, cachedResponse, url;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event = _ref3.event, state = _ref3.state, cachedResponse = _ref3.cachedResponse;

              if (event.type === 'install') {
                // TODO: `state` should never be undefined...
                url = state.originalRequest.url;

                if (cachedResponse) {
                  _this.notUpdatedURLs.push(url);
                } else {
                  _this.updatedURLs.push(url);
                }
              }

              return _context2.abrupt("return", cachedResponse);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
};


// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js
function PrecacheCacheKeyPlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function PrecacheCacheKeyPlugin_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { PrecacheCacheKeyPlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { PrecacheCacheKeyPlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function PrecacheCacheKeyPlugin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */

var PrecacheCacheKeyPlugin = function PrecacheCacheKeyPlugin(_ref) {
  var _this = this;

  var precacheController = _ref.precacheController;

  PrecacheCacheKeyPlugin_classCallCheck(this, PrecacheCacheKeyPlugin);

  this.cacheKeyWillBeUsed = /*#__PURE__*/function () {
    var _ref3 = PrecacheCacheKeyPlugin_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
      var request, params, cacheKey;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              request = _ref2.request, params = _ref2.params;
              cacheKey = params && params.cacheKey || _this._precacheController.getCacheKeyForURL(request.url);
              return _context.abrupt("return", cacheKey ? new Request(cacheKey) : request);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  this._precacheController = precacheController;
};


// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/printCleanupDetails.js
function printCleanupDetails_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = printCleanupDetails_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function printCleanupDetails_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return printCleanupDetails_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return printCleanupDetails_arrayLikeToArray(o, minLen); }

function printCleanupDetails_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */

var printCleanupDetails_logGroup = function logGroup(groupTitle, deletedURLs) {
  logger.groupCollapsed(groupTitle);

  var _iterator = printCleanupDetails_createForOfIteratorHelper(deletedURLs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var url = _step.value;
      logger.log(url);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof module:workbox-precaching
 */


function printCleanupDetails(deletedURLs) {
  var deletionCount = deletedURLs.length;

  if (deletionCount > 0) {
    logger.groupCollapsed("During precaching cleanup, " + "".concat(deletionCount, " cached ") + "request".concat(deletionCount === 1 ? ' was' : 's were', " deleted."));
    printCleanupDetails_logGroup('Deleted Cache Requests', deletedURLs);
    logger.groupEnd();
  }
}
// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/printInstallDetails.js
function printInstallDetails_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = printInstallDetails_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function printInstallDetails_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return printInstallDetails_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return printInstallDetails_arrayLikeToArray(o, minLen); }

function printInstallDetails_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */

function _nestedGroup(groupTitle, urls) {
  if (urls.length === 0) {
    return;
  }

  logger.groupCollapsed(groupTitle);

  var _iterator = printInstallDetails_createForOfIteratorHelper(urls),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var url = _step.value;
      logger.log(url);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof module:workbox-precaching
 */


function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
  var precachedCount = urlsToPrecache.length;
  var alreadyPrecachedCount = urlsAlreadyPrecached.length;

  if (precachedCount || alreadyPrecachedCount) {
    var message = "Precaching ".concat(precachedCount, " file").concat(precachedCount === 1 ? '' : 's', ".");

    if (alreadyPrecachedCount > 0) {
      message += " ".concat(alreadyPrecachedCount, " ") + "file".concat(alreadyPrecachedCount === 1 ? ' is' : 's are', " already cached.");
    }

    logger.groupCollapsed(message);

    _nestedGroup("View newly precached URLs.", urlsToPrecache);

    _nestedGroup("View previously precached URLs.", urlsAlreadyPrecached);

    logger.groupEnd();
  }
}
// CONCATENATED MODULE: ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

var supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */

function canConstructResponseFromBodyStream() {
  if (supportStatus === undefined) {
    var testResponse = new Response('');

    if ('body' in testResponse) {
      try {
        new Response(testResponse.body);
        supportStatus = true;
      } catch (error) {
        supportStatus = false;
      }
    }

    supportStatus = false;
  }

  return supportStatus;
}


// CONCATENATED MODULE: ./node_modules/workbox-core/copyResponse.js
function copyResponse_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function copyResponse_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { copyResponse_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { copyResponse_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof module:workbox-core
 */

function copyResponse(_x, _x2) {
  return _copyResponse.apply(this, arguments);
}

function _copyResponse() {
  _copyResponse = copyResponse_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response, modifier) {
    var origin, responseURL, clonedResponse, responseInit, modifiedResponseInit, body;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            origin = null; // If response.url isn't set, assume it's cross-origin and keep origin null.

            if (response.url) {
              responseURL = new URL(response.url);
              origin = responseURL.origin;
            }

            if (!(origin !== self.location.origin)) {
              _context.next = 4;
              break;
            }

            throw new WorkboxError_WorkboxError('cross-origin-copy-response', {
              origin: origin
            });

          case 4:
            clonedResponse = response.clone(); // Create a fresh `ResponseInit` object by cloning the headers.

            responseInit = {
              headers: new Headers(clonedResponse.headers),
              status: clonedResponse.status,
              statusText: clonedResponse.statusText
            }; // Apply any user modifications.

            modifiedResponseInit = modifier ? modifier(responseInit) : responseInit; // Create the new response from the body stream and `ResponseInit`
            // modifications. Note: not all browsers support the Response.body stream,
            // so fall back to reading the entire body into memory as a blob.

            if (!canConstructResponseFromBodyStream()) {
              _context.next = 11;
              break;
            }

            _context.t0 = clonedResponse.body;
            _context.next = 14;
            break;

          case 11:
            _context.next = 13;
            return clonedResponse.blob();

          case 13:
            _context.t0 = _context.sent;

          case 14:
            body = _context.t0;
            return _context.abrupt("return", new Response(body, modifiedResponseInit));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _copyResponse.apply(this, arguments);
}


// CONCATENATED MODULE: ./node_modules/workbox-core/_private/getFriendlyURL.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


var getFriendlyURL = function getFriendlyURL(url) {
  var urlObj = new URL(String(url), location.href); // See https://github.com/GoogleChrome/workbox/issues/2323
  // We want to include everything, except for the origin if it's same-origin.

  return urlObj.href.replace(new RegExp("^".concat(location.origin)), '');
};


// CONCATENATED MODULE: ./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function cacheMatchIgnoreParams_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function cacheMatchIgnoreParams_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { cacheMatchIgnoreParams_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { cacheMatchIgnoreParams_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function cacheMatchIgnoreParams_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = cacheMatchIgnoreParams_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function cacheMatchIgnoreParams_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return cacheMatchIgnoreParams_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return cacheMatchIgnoreParams_arrayLikeToArray(o, minLen); }

function cacheMatchIgnoreParams_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


function stripParams(fullURL, ignoreParams) {
  var strippedURL = new URL(fullURL);

  var _iterator = cacheMatchIgnoreParams_createForOfIteratorHelper(ignoreParams),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var param = _step.value;
      strippedURL.searchParams["delete"](param);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */


function cacheMatchIgnoreParams(_x, _x2, _x3, _x4) {
  return _cacheMatchIgnoreParams.apply(this, arguments);
}

function _cacheMatchIgnoreParams() {
  _cacheMatchIgnoreParams = cacheMatchIgnoreParams_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cache, request, ignoreParams, matchOptions) {
    var strippedRequestURL, keysOptions, cacheKeys, _iterator2, _step2, cacheKey, strippedCacheKeyURL;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            strippedRequestURL = stripParams(request.url, ignoreParams); // If the request doesn't include any ignored params, match as normal.

            if (!(request.url === strippedRequestURL)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", cache.match(request, matchOptions));

          case 3:
            // Otherwise, match by comparing keys
            keysOptions = _objectSpread(_objectSpread({}, matchOptions), {}, {
              ignoreSearch: true
            });
            _context.next = 6;
            return cache.keys(request, keysOptions);

          case 6:
            cacheKeys = _context.sent;
            _iterator2 = cacheMatchIgnoreParams_createForOfIteratorHelper(cacheKeys);
            _context.prev = 8;

            _iterator2.s();

          case 10:
            if ((_step2 = _iterator2.n()).done) {
              _context.next = 17;
              break;
            }

            cacheKey = _step2.value;
            strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);

            if (!(strippedRequestURL === strippedCacheKeyURL)) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", cache.match(cacheKey, matchOptions));

          case 15:
            _context.next = 10;
            break;

          case 17:
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](8);

            _iterator2.e(_context.t0);

          case 22:
            _context.prev = 22;

            _iterator2.f();

            return _context.finish(22);

          case 25:
            return _context.abrupt("return");

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[8, 19, 22, 25]]);
  }));
  return _cacheMatchIgnoreParams.apply(this, arguments);
}


// CONCATENATED MODULE: ./node_modules/workbox-core/_private/Deferred.js
function Deferred_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */

var Deferred =
/**
 * Creates a promise and exposes its resolve and reject functions as methods.
 */
function Deferred() {
  var _this = this;

  Deferred_classCallCheck(this, Deferred);

  this.promise = new Promise(function (resolve, reject) {
    _this.resolve = resolve;
    _this.reject = reject;
  });
};


// CONCATENATED MODULE: ./node_modules/workbox-core/models/quotaErrorCallbacks.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/
 // Callbacks to be executed whenever there's a quota error.

var quotaErrorCallbacks = new Set();

// CONCATENATED MODULE: ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js
function executeQuotaErrorCallbacks_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = executeQuotaErrorCallbacks_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function executeQuotaErrorCallbacks_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return executeQuotaErrorCallbacks_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return executeQuotaErrorCallbacks_arrayLikeToArray(o, minLen); }

function executeQuotaErrorCallbacks_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function executeQuotaErrorCallbacks_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function executeQuotaErrorCallbacks_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { executeQuotaErrorCallbacks_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { executeQuotaErrorCallbacks_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof module:workbox-core
 * @private
 */

function executeQuotaErrorCallbacks() {
  return _executeQuotaErrorCallbacks.apply(this, arguments);
}

function _executeQuotaErrorCallbacks() {
  _executeQuotaErrorCallbacks = executeQuotaErrorCallbacks_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _iterator, _step, callback;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            _iterator = executeQuotaErrorCallbacks_createForOfIteratorHelper(quotaErrorCallbacks);
            _context.prev = 2;

            _iterator.s();

          case 4:
            if ((_step = _iterator.n()).done) {
              _context.next = 11;
              break;
            }

            callback = _step.value;
            _context.next = 8;
            return callback();

          case 8:
            if (false) {}

          case 9:
            _context.next = 4;
            break;

          case 11:
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);

            _iterator.e(_context.t0);

          case 16:
            _context.prev = 16;

            _iterator.f();

            return _context.finish(16);

          case 19:
            if (false) {}

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 13, 16, 19]]);
  }));
  return _executeQuotaErrorCallbacks.apply(this, arguments);
}


// CONCATENATED MODULE: ./node_modules/workbox-core/_private/timeout.js
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */

function timeout(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
// EXTERNAL MODULE: ./node_modules/workbox-strategies/_version.js
var workbox_strategies_version = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/workbox-strategies/StrategyHandler.js
function StrategyHandler_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function StrategyHandler_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { StrategyHandler_ownKeys(Object(source), true).forEach(function (key) { StrategyHandler_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { StrategyHandler_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function StrategyHandler_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function StrategyHandler_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function StrategyHandler_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { StrategyHandler_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { StrategyHandler_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function StrategyHandler_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = StrategyHandler_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function StrategyHandler_toConsumableArray(arr) { return StrategyHandler_arrayWithoutHoles(arr) || StrategyHandler_iterableToArray(arr) || StrategyHandler_unsupportedIterableToArray(arr) || StrategyHandler_nonIterableSpread(); }

function StrategyHandler_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function StrategyHandler_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return StrategyHandler_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return StrategyHandler_arrayLikeToArray(o, minLen); }

function StrategyHandler_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function StrategyHandler_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return StrategyHandler_arrayLikeToArray(arr); }

function StrategyHandler_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function StrategyHandler_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/










function toRequest(input) {
  return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * [handle()]{@link module:workbox-strategies.Strategy~handle} or
 * [handleAll()]{@link module:workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof module:workbox-strategies
 */


var StrategyHandler_StrategyHandler = /*#__PURE__*/function () {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {module:workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   *     [match callback]{@link module:workbox-routing~matchCallback},
   *     (if applicable).
   */
  function StrategyHandler(strategy, options) {
    StrategyHandler_classCallCheck(this, StrategyHandler);

    this._cacheKeys = {};
    /**
     * The request the strategy is performing (passed to the strategy's
     * `handle()` or `handleAll()` method).
     * @name request
     * @instance
     * @type {Request}
     * @memberof module:workbox-strategies.StrategyHandler
     */

    /**
     * The event associated with this request.
     * @name event
     * @instance
     * @type {ExtendableEvent}
     * @memberof module:workbox-strategies.StrategyHandler
     */

    /**
     * A `URL` instance of `request.url` (if passed to the strategy's
     * `handle()` or `handleAll()` method).
     * Note: the `url` param will be present if the strategy was invoked
     * from a workbox `Route` object.
     * @name url
     * @instance
     * @type {URL|undefined}
     * @memberof module:workbox-strategies.StrategyHandler
     */

    /**
     * A `param` value (if passed to the strategy's
     * `handle()` or `handleAll()` method).
     * Note: the `param` param will be present if the strategy was invoked
     * from a workbox `Route` object and the
     * [match callback]{@link module:workbox-routing~matchCallback} returned
     * a truthy value (it will be that value).
     * @name params
     * @instance
     * @type {*|undefined}
     * @memberof module:workbox-strategies.StrategyHandler
     */

    if (false) {}

    Object.assign(this, options);
    this.event = options.event;
    this._strategy = strategy;
    this._handlerDeferred = new Deferred();
    this._extendLifetimePromises = []; // Copy the plugins list (since it's mutable on the strategy),
    // so any mutations don't affect this handler instance.

    this._plugins = StrategyHandler_toConsumableArray(strategy.plugins);
    this._pluginStateMap = new Map();

    var _iterator = StrategyHandler_createForOfIteratorHelper(this._plugins),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var plugin = _step.value;

        this._pluginStateMap.set(plugin, {});
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */


  _createClass(StrategyHandler, [{
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(
    /*#__PURE__*/
    function () {
      var _ref = StrategyHandler_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(input) {
        var event, request, possiblePreloadResponse, originalRequest, _iterator2, _step2, cb, pluginFilteredRequest, fetchResponse, _iterator3, _step3, callback;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event = this.event;
                request = toRequest(input);

                if (!(request.mode === 'navigate' && event instanceof FetchEvent && event.preloadResponse)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 5;
                return event.preloadResponse;

              case 5:
                possiblePreloadResponse = _context.sent;

                if (!possiblePreloadResponse) {
                  _context.next = 9;
                  break;
                }

                if (false) {}

                return _context.abrupt("return", possiblePreloadResponse);

              case 9:
                // If there is a fetchDidFail plugin, we need to save a clone of the
                // original request before it's either modified by a requestWillFetch
                // plugin or before the original request's body is consumed via fetch().
                originalRequest = this.hasCallback('fetchDidFail') ? request.clone() : null;
                _context.prev = 10;
                _iterator2 = StrategyHandler_createForOfIteratorHelper(this.iterateCallbacks('requestWillFetch'));
                _context.prev = 12;

                _iterator2.s();

              case 14:
                if ((_step2 = _iterator2.n()).done) {
                  _context.next = 21;
                  break;
                }

                cb = _step2.value;
                _context.next = 18;
                return cb({
                  request: request.clone(),
                  event: event
                });

              case 18:
                request = _context.sent;

              case 19:
                _context.next = 14;
                break;

              case 21:
                _context.next = 26;
                break;

              case 23:
                _context.prev = 23;
                _context.t0 = _context["catch"](12);

                _iterator2.e(_context.t0);

              case 26:
                _context.prev = 26;

                _iterator2.f();

                return _context.finish(26);

              case 29:
                _context.next = 34;
                break;

              case 31:
                _context.prev = 31;
                _context.t1 = _context["catch"](10);
                throw new WorkboxError_WorkboxError('plugin-error-request-will-fetch', {
                  thrownError: _context.t1
                });

              case 34:
                // The request can be altered by plugins with `requestWillFetch` making
                // the original request (most likely from a `fetch` event) different
                // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
                pluginFilteredRequest = request.clone();
                _context.prev = 35;
                _context.next = 38;
                return fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);

              case 38:
                fetchResponse = _context.sent;

                if (false) {}

                _iterator3 = StrategyHandler_createForOfIteratorHelper(this.iterateCallbacks('fetchDidSucceed'));
                _context.prev = 41;

                _iterator3.s();

              case 43:
                if ((_step3 = _iterator3.n()).done) {
                  _context.next = 50;
                  break;
                }

                callback = _step3.value;
                _context.next = 47;
                return callback({
                  event: event,
                  request: pluginFilteredRequest,
                  response: fetchResponse
                });

              case 47:
                fetchResponse = _context.sent;

              case 48:
                _context.next = 43;
                break;

              case 50:
                _context.next = 55;
                break;

              case 52:
                _context.prev = 52;
                _context.t2 = _context["catch"](41);

                _iterator3.e(_context.t2);

              case 55:
                _context.prev = 55;

                _iterator3.f();

                return _context.finish(55);

              case 58:
                return _context.abrupt("return", fetchResponse);

              case 61:
                _context.prev = 61;
                _context.t3 = _context["catch"](35);

                if (false) {} // `originalRequest` will only exist if a `fetchDidFail` callback
                // is being used (see above).


                if (!originalRequest) {
                  _context.next = 67;
                  break;
                }

                _context.next = 67;
                return this.runCallbacks('fetchDidFail', {
                  error: _context.t3,
                  event: event,
                  originalRequest: originalRequest.clone(),
                  request: pluginFilteredRequest.clone()
                });

              case 67:
                throw _context.t3;

              case 68:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[10, 31], [12, 23, 26, 29], [35, 61], [41, 52, 55, 58]]);
      }));

      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }()
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    )
  }, {
    key: "fetchAndCachePut",
    value: function () {
      var _fetchAndCachePut = StrategyHandler_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(input) {
        var response, responseClone;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.fetch(input);

              case 2:
                response = _context2.sent;
                responseClone = response.clone();
                this.waitUntil(this.cachePut(input, responseClone));
                return _context2.abrupt("return", response);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchAndCachePut(_x3) {
        return _fetchAndCachePut.apply(this, arguments);
      }

      return fetchAndCachePut;
    }()
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */

  }, {
    key: "cacheMatch",
    value: function () {
      var _cacheMatch = StrategyHandler_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(key) {
        var request, cachedResponse, _this$_strategy, cacheName, matchOptions, effectiveRequest, multiMatchOptions, _iterator4, _step4, callback;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                request = toRequest(key);
                _this$_strategy = this._strategy, cacheName = _this$_strategy.cacheName, matchOptions = _this$_strategy.matchOptions;
                _context3.next = 4;
                return this.getCacheKey(request, 'read');

              case 4:
                effectiveRequest = _context3.sent;
                multiMatchOptions = StrategyHandler_objectSpread(StrategyHandler_objectSpread({}, matchOptions), {
                  cacheName: cacheName
                });
                _context3.next = 8;
                return caches.match(effectiveRequest, multiMatchOptions);

              case 8:
                cachedResponse = _context3.sent;

                if (false) {}

                _iterator4 = StrategyHandler_createForOfIteratorHelper(this.iterateCallbacks('cachedResponseWillBeUsed'));
                _context3.prev = 11;

                _iterator4.s();

              case 13:
                if ((_step4 = _iterator4.n()).done) {
                  _context3.next = 23;
                  break;
                }

                callback = _step4.value;
                _context3.next = 17;
                return callback({
                  cacheName: cacheName,
                  matchOptions: matchOptions,
                  cachedResponse: cachedResponse,
                  request: effectiveRequest,
                  event: this.event
                });

              case 17:
                _context3.t0 = _context3.sent;

                if (_context3.t0) {
                  _context3.next = 20;
                  break;
                }

                _context3.t0 = undefined;

              case 20:
                cachedResponse = _context3.t0;

              case 21:
                _context3.next = 13;
                break;

              case 23:
                _context3.next = 28;
                break;

              case 25:
                _context3.prev = 25;
                _context3.t1 = _context3["catch"](11);

                _iterator4.e(_context3.t1);

              case 28:
                _context3.prev = 28;

                _iterator4.f();

                return _context3.finish(28);

              case 31:
                return _context3.abrupt("return", cachedResponse);

              case 32:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[11, 25, 28, 31]]);
      }));

      function cacheMatch(_x4) {
        return _cacheMatch.apply(this, arguments);
      }

      return cacheMatch;
    }()
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */

  }, {
    key: "cachePut",
    value: function () {
      var _cachePut = StrategyHandler_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(key, response) {
        var request, effectiveRequest, responseToCache, _this$_strategy2, cacheName, matchOptions, cache, hasCacheUpdateCallback, oldResponse, _iterator5, _step5, callback;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                request = toRequest(key); // Run in the next task to avoid blocking other cache reads.
                // https://github.com/w3c/ServiceWorker/issues/1397

                _context4.next = 3;
                return timeout(0);

              case 3:
                _context4.next = 5;
                return this.getCacheKey(request, 'write');

              case 5:
                effectiveRequest = _context4.sent;

                if (true) {
                  _context4.next = 9;
                  break;
                }

                if (!(effectiveRequest.method && effectiveRequest.method !== 'GET')) {
                  _context4.next = 9;
                  break;
                }

                throw new WorkboxError_WorkboxError('attempt-to-cache-non-get-request', {
                  url: getFriendlyURL(effectiveRequest.url),
                  method: effectiveRequest.method
                });

              case 9:
                if (response) {
                  _context4.next = 12;
                  break;
                }

                if (false) {}

                throw new WorkboxError_WorkboxError('cache-put-with-no-response', {
                  url: getFriendlyURL(effectiveRequest.url)
                });

              case 12:
                _context4.next = 14;
                return this._ensureResponseSafeToCache(response);

              case 14:
                responseToCache = _context4.sent;

                if (responseToCache) {
                  _context4.next = 18;
                  break;
                }

                if (false) {}

                return _context4.abrupt("return", false);

              case 18:
                _this$_strategy2 = this._strategy, cacheName = _this$_strategy2.cacheName, matchOptions = _this$_strategy2.matchOptions;
                _context4.next = 21;
                return self.caches.open(cacheName);

              case 21:
                cache = _context4.sent;
                hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');

                if (!hasCacheUpdateCallback) {
                  _context4.next = 29;
                  break;
                }

                _context4.next = 26;
                return cacheMatchIgnoreParams( // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
                // feature. Consider into ways to only add this behavior if using
                // precaching.
                cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions);

              case 26:
                _context4.t0 = _context4.sent;
                _context4.next = 30;
                break;

              case 29:
                _context4.t0 = null;

              case 30:
                oldResponse = _context4.t0;

                if (false) {}

                _context4.prev = 32;
                _context4.next = 35;
                return cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);

              case 35:
                _context4.next = 43;
                break;

              case 37:
                _context4.prev = 37;
                _context4.t1 = _context4["catch"](32);

                if (!(_context4.t1.name === 'QuotaExceededError')) {
                  _context4.next = 42;
                  break;
                }

                _context4.next = 42;
                return executeQuotaErrorCallbacks();

              case 42:
                throw _context4.t1;

              case 43:
                _iterator5 = StrategyHandler_createForOfIteratorHelper(this.iterateCallbacks('cacheDidUpdate'));
                _context4.prev = 44;

                _iterator5.s();

              case 46:
                if ((_step5 = _iterator5.n()).done) {
                  _context4.next = 52;
                  break;
                }

                callback = _step5.value;
                _context4.next = 50;
                return callback({
                  cacheName: cacheName,
                  oldResponse: oldResponse,
                  newResponse: responseToCache.clone(),
                  request: effectiveRequest,
                  event: this.event
                });

              case 50:
                _context4.next = 46;
                break;

              case 52:
                _context4.next = 57;
                break;

              case 54:
                _context4.prev = 54;
                _context4.t2 = _context4["catch"](44);

                _iterator5.e(_context4.t2);

              case 57:
                _context4.prev = 57;

                _iterator5.f();

                return _context4.finish(57);

              case 60:
                return _context4.abrupt("return", true);

              case 61:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[32, 37], [44, 54, 57, 60]]);
      }));

      function cachePut(_x5, _x6) {
        return _cachePut.apply(this, arguments);
      }

      return cachePut;
    }()
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */

  }, {
    key: "getCacheKey",
    value: function () {
      var _getCacheKey = StrategyHandler_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(request, mode) {
        var effectiveRequest, _iterator6, _step6, callback;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this._cacheKeys[mode]) {
                  _context5.next = 23;
                  break;
                }

                effectiveRequest = request;
                _iterator6 = StrategyHandler_createForOfIteratorHelper(this.iterateCallbacks('cacheKeyWillBeUsed'));
                _context5.prev = 3;

                _iterator6.s();

              case 5:
                if ((_step6 = _iterator6.n()).done) {
                  _context5.next = 14;
                  break;
                }

                callback = _step6.value;
                _context5.t0 = toRequest;
                _context5.next = 10;
                return callback({
                  mode: mode,
                  request: effectiveRequest,
                  event: this.event,
                  params: this.params
                });

              case 10:
                _context5.t1 = _context5.sent;
                effectiveRequest = (0, _context5.t0)(_context5.t1);

              case 12:
                _context5.next = 5;
                break;

              case 14:
                _context5.next = 19;
                break;

              case 16:
                _context5.prev = 16;
                _context5.t2 = _context5["catch"](3);

                _iterator6.e(_context5.t2);

              case 19:
                _context5.prev = 19;

                _iterator6.f();

                return _context5.finish(19);

              case 22:
                this._cacheKeys[mode] = effectiveRequest;

              case 23:
                return _context5.abrupt("return", this._cacheKeys[mode]);

              case 24:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[3, 16, 19, 22]]);
      }));

      function getCacheKey(_x7, _x8) {
        return _getCacheKey.apply(this, arguments);
      }

      return getCacheKey;
    }()
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */

  }, {
    key: "hasCallback",
    value: function hasCallback(name) {
      var _iterator7 = StrategyHandler_createForOfIteratorHelper(this._strategy.plugins),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var plugin = _step7.value;

          if (name in plugin) {
            return true;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * [`iterateCallbacks()`]{@link module:workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */

  }, {
    key: "runCallbacks",
    value: function () {
      var _runCallbacks = StrategyHandler_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(name, param) {
        var _iterator8, _step8, callback;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _iterator8 = StrategyHandler_createForOfIteratorHelper(this.iterateCallbacks(name));
                _context6.prev = 1;

                _iterator8.s();

              case 3:
                if ((_step8 = _iterator8.n()).done) {
                  _context6.next = 9;
                  break;
                }

                callback = _step8.value;
                _context6.next = 7;
                return callback(param);

              case 7:
                _context6.next = 3;
                break;

              case 9:
                _context6.next = 14;
                break;

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](1);

                _iterator8.e(_context6.t0);

              case 14:
                _context6.prev = 14;

                _iterator8.f();

                return _context6.finish(14);

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 11, 14, 17]]);
      }));

      function runCallbacks(_x9, _x10) {
        return _runCallbacks.apply(this, arguments);
      }

      return runCallbacks;
    }()
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */

  }, {
    key: "iterateCallbacks",
    value:
    /*#__PURE__*/
    regeneratorRuntime.mark(function iterateCallbacks(name) {
      var _this = this;

      var _iterator9, _step9, _loop;

      return regeneratorRuntime.wrap(function iterateCallbacks$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _iterator9 = StrategyHandler_createForOfIteratorHelper(this._strategy.plugins);
              _context8.prev = 1;
              _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                var plugin, state, statefulCallback;
                return regeneratorRuntime.wrap(function _loop$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        plugin = _step9.value;

                        if (!(typeof plugin[name] === 'function')) {
                          _context7.next = 6;
                          break;
                        }

                        state = _this._pluginStateMap.get(plugin);

                        statefulCallback = function statefulCallback(param) {
                          var statefulParam = StrategyHandler_objectSpread(StrategyHandler_objectSpread({}, param), {}, {
                            state: state
                          }); // TODO(philipwalton): not sure why `any` is needed. It seems like
                          // this should work with `as WorkboxPluginCallbackParam[C]`.


                          return plugin[name](statefulParam);
                        };

                        _context7.next = 6;
                        return statefulCallback;

                      case 6:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _loop);
              });

              _iterator9.s();

            case 4:
              if ((_step9 = _iterator9.n()).done) {
                _context8.next = 8;
                break;
              }

              return _context8.delegateYield(_loop(), "t0", 6);

            case 6:
              _context8.next = 4;
              break;

            case 8:
              _context8.next = 13;
              break;

            case 10:
              _context8.prev = 10;
              _context8.t1 = _context8["catch"](1);

              _iterator9.e(_context8.t1);

            case 13:
              _context8.prev = 13;

              _iterator9.f();

              return _context8.finish(13);

            case 16:
            case "end":
              return _context8.stop();
          }
        }
      }, iterateCallbacks, this, [[1, 10, 13, 16]]);
    })
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * [`doneWaiting()`]{@link module:workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */

  }, {
    key: "waitUntil",
    value: function waitUntil(promise) {
      this._extendLifetimePromises.push(promise);

      return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * [`waitUntil()`]{@link module:workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */

  }, {
    key: "doneWaiting",
    value: function () {
      var _doneWaiting = StrategyHandler_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var promise;
        return regeneratorRuntime.wrap(function _callee7$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!(promise = this._extendLifetimePromises.shift())) {
                  _context9.next = 5;
                  break;
                }

                _context9.next = 3;
                return promise;

              case 3:
                _context9.next = 0;
                break;

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee7, this);
      }));

      function doneWaiting() {
        return _doneWaiting.apply(this, arguments);
      }

      return doneWaiting;
    }()
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._handlerDeferred.resolve();
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */

  }, {
    key: "_ensureResponseSafeToCache",
    value: function () {
      var _ensureResponseSafeToCache2 = StrategyHandler_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(response) {
        var responseToCache, pluginsUsed, _iterator10, _step10, callback;

        return regeneratorRuntime.wrap(function _callee8$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                responseToCache = response;
                pluginsUsed = false;
                _iterator10 = StrategyHandler_createForOfIteratorHelper(this.iterateCallbacks('cacheWillUpdate'));
                _context10.prev = 3;

                _iterator10.s();

              case 5:
                if ((_step10 = _iterator10.n()).done) {
                  _context10.next = 18;
                  break;
                }

                callback = _step10.value;
                _context10.next = 9;
                return callback({
                  request: this.request,
                  response: responseToCache,
                  event: this.event
                });

              case 9:
                _context10.t0 = _context10.sent;

                if (_context10.t0) {
                  _context10.next = 12;
                  break;
                }

                _context10.t0 = undefined;

              case 12:
                responseToCache = _context10.t0;
                pluginsUsed = true;

                if (responseToCache) {
                  _context10.next = 16;
                  break;
                }

                return _context10.abrupt("break", 18);

              case 16:
                _context10.next = 5;
                break;

              case 18:
                _context10.next = 23;
                break;

              case 20:
                _context10.prev = 20;
                _context10.t1 = _context10["catch"](3);

                _iterator10.e(_context10.t1);

              case 23:
                _context10.prev = 23;

                _iterator10.f();

                return _context10.finish(23);

              case 26:
                if (!pluginsUsed) {
                  if (responseToCache && responseToCache.status !== 200) {
                    responseToCache = undefined;
                  }

                  if (false) {}
                }

                return _context10.abrupt("return", responseToCache);

              case 28:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee8, this, [[3, 20, 23, 26]]);
      }));

      function _ensureResponseSafeToCache(_x11) {
        return _ensureResponseSafeToCache2.apply(this, arguments);
      }

      return _ensureResponseSafeToCache;
    }()
  }]);

  return StrategyHandler;
}();


// CONCATENATED MODULE: ./node_modules/workbox-strategies/Strategy.js
function Strategy_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Strategy_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Strategy_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Strategy_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Strategy_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Strategy_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || Strategy_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Strategy_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Strategy_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Strategy_arrayLikeToArray(o, minLen); }

function Strategy_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Strategy_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Strategy_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Strategy_createClass(Constructor, protoProps, staticProps) { if (protoProps) Strategy_defineProperties(Constructor.prototype, protoProps); if (staticProps) Strategy_defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof module:workbox-strategies
 */

var Strategy_Strategy = /*#__PURE__*/function () {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * [workbox-core]{@link module:workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  function Strategy() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Strategy_classCallCheck(this, Strategy);

    /**
     * Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     *
     * @type {string}
     */
    this.cacheName = cacheNames.getRuntimeName(options.cacheName);
    /**
     * The list
     * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * used by this strategy.
     *
     * @type {Array<Object>}
     */

    this.plugins = options.plugins || [];
    /**
     * Values passed along to the
     * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
     * of all fetch() requests made by this strategy.
     *
     * @type {Object}
     */

    this.fetchOptions = options.fetchOptions;
    /**
     * The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     *
     * @type {Object}
     */

    this.matchOptions = options.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * [route]{@link module:workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */


  Strategy_createClass(Strategy, [{
    key: "handle",
    value: function handle(options) {
      var _this$handleAll = this.handleAll(options),
          _this$handleAll2 = _slicedToArray(_this$handleAll, 1),
          responseDone = _this$handleAll2[0];

      return responseDone;
    }
    /**
     * Similar to [`handle()`]{@link module:workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of [response, done] promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */

  }, {
    key: "handleAll",
    value: function handleAll(options) {
      // Allow for flexible options to be passed.
      if (options instanceof FetchEvent) {
        options = {
          event: options,
          request: options.request
        };
      }

      var event = options.event;
      var request = typeof options.request === 'string' ? new Request(options.request) : options.request;
      var params = 'params' in options ? options.params : undefined;
      var handler = new StrategyHandler_StrategyHandler(this, {
        event: event,
        request: request,
        params: params
      });

      var responseDone = this._getResponse(handler, request, event);

      var handlerDone = this._awaitComplete(responseDone, handler, request, event); // Return an array of promises, suitable for use with Promise.all().


      return [responseDone, handlerDone];
    }
  }, {
    key: "_getResponse",
    value: function () {
      var _getResponse2 = Strategy_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(handler, request, event) {
        var response, _iterator, _step, callback, _iterator2, _step2, _callback;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return handler.runCallbacks('handlerWillStart', {
                  event: event,
                  request: request
                });

              case 2:
                response = undefined;
                _context.prev = 3;
                _context.next = 6;
                return this._handle(request, handler);

              case 6:
                response = _context.sent;

                if (!(!response || response.type === 'error')) {
                  _context.next = 9;
                  break;
                }

                throw new WorkboxError_WorkboxError('no-response', {
                  url: request.url
                });

              case 9:
                _context.next = 38;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                _iterator = Strategy_createForOfIteratorHelper(handler.iterateCallbacks('handlerDidError'));
                _context.prev = 14;

                _iterator.s();

              case 16:
                if ((_step = _iterator.n()).done) {
                  _context.next = 25;
                  break;
                }

                callback = _step.value;
                _context.next = 20;
                return callback({
                  error: _context.t0,
                  event: event,
                  request: request
                });

              case 20:
                response = _context.sent;

                if (!response) {
                  _context.next = 23;
                  break;
                }

                return _context.abrupt("break", 25);

              case 23:
                _context.next = 16;
                break;

              case 25:
                _context.next = 30;
                break;

              case 27:
                _context.prev = 27;
                _context.t1 = _context["catch"](14);

                _iterator.e(_context.t1);

              case 30:
                _context.prev = 30;

                _iterator.f();

                return _context.finish(30);

              case 33:
                if (response) {
                  _context.next = 37;
                  break;
                }

                throw _context.t0;

              case 37:
                if (false) {}

              case 38:
                _iterator2 = Strategy_createForOfIteratorHelper(handler.iterateCallbacks('handlerWillRespond'));
                _context.prev = 39;

                _iterator2.s();

              case 41:
                if ((_step2 = _iterator2.n()).done) {
                  _context.next = 48;
                  break;
                }

                _callback = _step2.value;
                _context.next = 45;
                return _callback({
                  event: event,
                  request: request,
                  response: response
                });

              case 45:
                response = _context.sent;

              case 46:
                _context.next = 41;
                break;

              case 48:
                _context.next = 53;
                break;

              case 50:
                _context.prev = 50;
                _context.t2 = _context["catch"](39);

                _iterator2.e(_context.t2);

              case 53:
                _context.prev = 53;

                _iterator2.f();

                return _context.finish(53);

              case 56:
                return _context.abrupt("return", response);

              case 57:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 11], [14, 27, 30, 33], [39, 50, 53, 56]]);
      }));

      function _getResponse(_x, _x2, _x3) {
        return _getResponse2.apply(this, arguments);
      }

      return _getResponse;
    }()
  }, {
    key: "_awaitComplete",
    value: function () {
      var _awaitComplete2 = Strategy_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(responseDone, handler, request, event) {
        var response, error;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return responseDone;

              case 3:
                response = _context2.sent;
                _context2.next = 8;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);

              case 8:
                _context2.prev = 8;
                _context2.next = 11;
                return handler.runCallbacks('handlerDidRespond', {
                  event: event,
                  request: request,
                  response: response
                });

              case 11:
                _context2.next = 13;
                return handler.doneWaiting();

              case 13:
                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t1 = _context2["catch"](8);
                error = _context2.t1;

              case 18:
                _context2.next = 20;
                return handler.runCallbacks('handlerDidComplete', {
                  event: event,
                  request: request,
                  response: response,
                  error: error
                });

              case 20:
                handler.destroy();

                if (!error) {
                  _context2.next = 23;
                  break;
                }

                throw error;

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6], [8, 15]]);
      }));

      function _awaitComplete(_x4, _x5, _x6, _x7) {
        return _awaitComplete2.apply(this, arguments);
      }

      return _awaitComplete;
    }()
  }]);

  return Strategy;
}();


/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the [`handler`]{@link module:workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {module:workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof module:workbox-strategies.Strategy
 */
// CONCATENATED MODULE: ./node_modules/workbox-precaching/PrecacheStrategy.js
function PrecacheStrategy_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PrecacheStrategy_typeof = function _typeof(obj) { return typeof obj; }; } else { PrecacheStrategy_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PrecacheStrategy_typeof(obj); }

function PrecacheStrategy_slicedToArray(arr, i) { return PrecacheStrategy_arrayWithHoles(arr) || PrecacheStrategy_iterableToArrayLimit(arr, i) || PrecacheStrategy_unsupportedIterableToArray(arr, i) || PrecacheStrategy_nonIterableRest(); }

function PrecacheStrategy_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function PrecacheStrategy_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function PrecacheStrategy_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function PrecacheStrategy_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = PrecacheStrategy_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function PrecacheStrategy_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PrecacheStrategy_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PrecacheStrategy_arrayLikeToArray(o, minLen); }

function PrecacheStrategy_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PrecacheStrategy_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function PrecacheStrategy_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { PrecacheStrategy_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { PrecacheStrategy_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function PrecacheStrategy_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PrecacheStrategy_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PrecacheStrategy_createClass(Constructor, protoProps, staticProps) { if (protoProps) PrecacheStrategy_defineProperties(Constructor.prototype, protoProps); if (staticProps) PrecacheStrategy_defineProperties(Constructor, staticProps); return Constructor; }

function PrecacheStrategy_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PrecacheStrategy_setPrototypeOf(subClass, superClass); }

function PrecacheStrategy_setPrototypeOf(o, p) { PrecacheStrategy_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PrecacheStrategy_setPrototypeOf(o, p); }

function PrecacheStrategy_createSuper(Derived) { var hasNativeReflectConstruct = PrecacheStrategy_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = PrecacheStrategy_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = PrecacheStrategy_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return PrecacheStrategy_possibleConstructorReturn(this, result); }; }

function PrecacheStrategy_possibleConstructorReturn(self, call) { if (call && (PrecacheStrategy_typeof(call) === "object" || typeof call === "function")) { return call; } return PrecacheStrategy_assertThisInitialized(self); }

function PrecacheStrategy_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PrecacheStrategy_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function PrecacheStrategy_getPrototypeOf(o) { PrecacheStrategy_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PrecacheStrategy_getPrototypeOf(o); }

/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A [Strategy]{@link module:workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-precaching
 */

var PrecacheStrategy_PrecacheStrategy = /*#__PURE__*/function (_Strategy) {
  PrecacheStrategy_inherits(PrecacheStrategy, _Strategy);

  var _super = PrecacheStrategy_createSuper(PrecacheStrategy);

  /**
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * [workbox-core]{@link module:workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
   * of all fetch() requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  function PrecacheStrategy() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    PrecacheStrategy_classCallCheck(this, PrecacheStrategy);

    options.cacheName = cacheNames.getPrecacheName(options.cacheName);
    _this = _super.call(this, options);
    _this._fallbackToNetwork = options.fallbackToNetwork === false ? false : true; // Redirected responses cannot be used to satisfy a navigation request, so
    // any redirected response must be "copied" rather than cloned, so the new
    // response doesn't contain the `redirected` flag. See:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1

    _this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);

    return _this;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {module:workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */


  PrecacheStrategy_createClass(PrecacheStrategy, [{
    key: "_handle",
    value: function () {
      var _handle2 = PrecacheStrategy_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, handler) {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return handler.cacheMatch(request);

              case 2:
                response = _context.sent;

                if (response) {
                  _context.next = 11;
                  break;
                }

                if (!(handler.event && handler.event.type === 'install')) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return this._handleInstall(request, handler);

              case 7:
                return _context.abrupt("return", _context.sent);

              case 8:
                _context.next = 10;
                return this._handleFetch(request, handler);

              case 10:
                return _context.abrupt("return", _context.sent);

              case 11:
                return _context.abrupt("return", response);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _handle(_x, _x2) {
        return _handle2.apply(this, arguments);
      }

      return _handle;
    }()
  }, {
    key: "_handleFetch",
    value: function () {
      var _handleFetch2 = PrecacheStrategy_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, handler) {
        var response, cacheKey;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this._fallbackToNetwork) {
                  _context2.next = 7;
                  break;
                }

                if (false) {}

                _context2.next = 4;
                return handler.fetch(request);

              case 4:
                response = _context2.sent;
                _context2.next = 8;
                break;

              case 7:
                throw new WorkboxError_WorkboxError('missing-precache-entry', {
                  cacheName: this.cacheName,
                  url: request.url
                });

              case 8:
                if (true) {
                  _context2.next = 24;
                  break;
                }

                _context2.t0 = handler.params && handler.params.cacheKey;

                if (_context2.t0) {
                  _context2.next = 14;
                  break;
                }

                _context2.next = 13;
                return handler.getCacheKey(request, 'read');

              case 13:
                _context2.t0 = _context2.sent;

              case 14:
                cacheKey = _context2.t0;
                // Workbox is going to handle the route.
                // print the routing details to the console.
                logger.groupCollapsed("Precaching is responding to: " + getFriendlyURL(request.url));
                logger.log("Serving the precached url: ".concat(getFriendlyURL(cacheKey.url)));
                logger.groupCollapsed("View request details here.");
                logger.log(request);
                logger.groupEnd();
                logger.groupCollapsed("View response details here.");
                logger.log(response);
                logger.groupEnd();
                logger.groupEnd();

              case 24:
                return _context2.abrupt("return", response);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _handleFetch(_x3, _x4) {
        return _handleFetch2.apply(this, arguments);
      }

      return _handleFetch;
    }()
  }, {
    key: "_handleInstall",
    value: function () {
      var _handleInstall2 = PrecacheStrategy_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request, handler) {
        var response, wasCached;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._useDefaultCacheabilityPluginIfNeeded();

                _context3.next = 3;
                return handler.fetch(request);

              case 3:
                response = _context3.sent;
                _context3.next = 6;
                return handler.cachePut(request, response.clone());

              case 6:
                wasCached = _context3.sent;

                if (wasCached) {
                  _context3.next = 9;
                  break;
                }

                throw new WorkboxError_WorkboxError('bad-precaching-response', {
                  url: request.url,
                  status: response.status
                });

              case 9:
                return _context3.abrupt("return", response);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _handleInstall(_x5, _x6) {
        return _handleInstall2.apply(this, arguments);
      }

      return _handleInstall;
    }()
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */

  }, {
    key: "_useDefaultCacheabilityPluginIfNeeded",
    value: function _useDefaultCacheabilityPluginIfNeeded() {
      var defaultPluginIndex = null;
      var cacheWillUpdatePluginCount = 0;

      var _iterator = PrecacheStrategy_createForOfIteratorHelper(this.plugins.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = PrecacheStrategy_slicedToArray(_step.value, 2),
              index = _step$value[0],
              plugin = _step$value[1];

          // Ignore the copy redirected plugin when determining what to do.
          if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
            continue;
          } // Save the default plugin's index, in case it needs to be removed.


          if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
            defaultPluginIndex = index;
          }

          if (plugin.cacheWillUpdate) {
            cacheWillUpdatePluginCount++;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (cacheWillUpdatePluginCount === 0) {
        this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
      } else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
        // Only remove the default plugin; multiple custom plugins are allowed.
        this.plugins.splice(defaultPluginIndex, 1);
      } // Nothing needs to be done if cacheWillUpdatePluginCount is 1

    }
  }]);

  return PrecacheStrategy;
}(Strategy_Strategy);

PrecacheStrategy_PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
  cacheWillUpdate: function cacheWillUpdate(_ref) {
    return PrecacheStrategy_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var response;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              response = _ref.response;

              if (!(!response || response.status >= 400)) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt("return", null);

            case 3:
              return _context4.abrupt("return", response);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
};
PrecacheStrategy_PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
  cacheWillUpdate: function cacheWillUpdate(_ref2) {
    return PrecacheStrategy_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var response;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              response = _ref2.response;

              if (!response.redirected) {
                _context5.next = 7;
                break;
              }

              _context5.next = 4;
              return copyResponse(response);

            case 4:
              _context5.t0 = _context5.sent;
              _context5.next = 8;
              break;

            case 7:
              _context5.t0 = response;

            case 8:
              return _context5.abrupt("return", _context5.t0);

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
};

// CONCATENATED MODULE: ./node_modules/workbox-precaching/PrecacheController.js
function PrecacheController_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function PrecacheController_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PrecacheController_ownKeys(Object(source), true).forEach(function (key) { PrecacheController_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PrecacheController_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PrecacheController_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PrecacheController_slicedToArray(arr, i) { return PrecacheController_arrayWithHoles(arr) || PrecacheController_iterableToArrayLimit(arr, i) || PrecacheController_unsupportedIterableToArray(arr, i) || PrecacheController_nonIterableRest(); }

function PrecacheController_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function PrecacheController_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function PrecacheController_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function PrecacheController_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function PrecacheController_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { PrecacheController_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { PrecacheController_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function PrecacheController_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = PrecacheController_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function PrecacheController_toConsumableArray(arr) { return PrecacheController_arrayWithoutHoles(arr) || PrecacheController_iterableToArray(arr) || PrecacheController_unsupportedIterableToArray(arr) || PrecacheController_nonIterableSpread(); }

function PrecacheController_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function PrecacheController_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PrecacheController_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PrecacheController_arrayLikeToArray(o, minLen); }

function PrecacheController_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function PrecacheController_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return PrecacheController_arrayLikeToArray(arr); }

function PrecacheController_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PrecacheController_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PrecacheController_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PrecacheController_createClass(Constructor, protoProps, staticProps) { if (protoProps) PrecacheController_defineProperties(Constructor.prototype, protoProps); if (staticProps) PrecacheController_defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof module:workbox-precaching
 */

var PrecacheController_PrecacheController = /*#__PURE__*/function () {
  /**
   * Create a new PrecacheController.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] The cache to use for precaching.
   * @param {string} [options.plugins] Plugins to use when precaching as well
   * as responding to fetch events for precached assets.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  function PrecacheController() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        cacheName = _ref.cacheName,
        _ref$plugins = _ref.plugins,
        plugins = _ref$plugins === void 0 ? [] : _ref$plugins,
        _ref$fallbackToNetwor = _ref.fallbackToNetwork,
        fallbackToNetwork = _ref$fallbackToNetwor === void 0 ? true : _ref$fallbackToNetwor;

    PrecacheController_classCallCheck(this, PrecacheController);

    this._urlsToCacheKeys = new Map();
    this._urlsToCacheModes = new Map();
    this._cacheKeysToIntegrities = new Map();
    this._strategy = new PrecacheStrategy_PrecacheStrategy({
      cacheName: cacheNames.getPrecacheName(cacheName),
      plugins: [].concat(PrecacheController_toConsumableArray(plugins), [new PrecacheCacheKeyPlugin({
        precacheController: this
      })]),
      fallbackToNetwork: fallbackToNetwork
    }); // Bind the install and activate methods to the instance.

    this.install = this.install.bind(this);
    this.activate = this.activate.bind(this);
  }
  /**
   * @type {module:workbox-precaching.PrecacheStrategy} The strategy created by this controller and
   * used to cache assets and respond to fetch events.
   */


  PrecacheController_createClass(PrecacheController, [{
    key: "strategy",
    get: function get() {
      return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */

  }, {
    key: "precache",
    value: function precache(entries) {
      this.addToCacheList(entries);

      if (!this._installAndActiveListenersAdded) {
        self.addEventListener('install', this.install);
        self.addEventListener('activate', this.activate);
        this._installAndActiveListenersAdded = true;
      }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<module:workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */

  }, {
    key: "addToCacheList",
    value: function addToCacheList(entries) {
      if (false) {}

      var urlsToWarnAbout = [];

      var _iterator = PrecacheController_createForOfIteratorHelper(entries),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;

          // See https://github.com/GoogleChrome/workbox/issues/2259
          if (typeof entry === 'string') {
            urlsToWarnAbout.push(entry);
          } else if (entry && entry.revision === undefined) {
            urlsToWarnAbout.push(entry.url);
          }

          var _createCacheKey = createCacheKey(entry),
              cacheKey = _createCacheKey.cacheKey,
              url = _createCacheKey.url;

          var cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';

          if (this._urlsToCacheKeys.has(url) && this._urlsToCacheKeys.get(url) !== cacheKey) {
            throw new WorkboxError_WorkboxError('add-to-cache-list-conflicting-entries', {
              firstEntry: this._urlsToCacheKeys.get(url),
              secondEntry: cacheKey
            });
          }

          if (typeof entry !== 'string' && entry.integrity) {
            if (this._cacheKeysToIntegrities.has(cacheKey) && this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
              throw new WorkboxError_WorkboxError('add-to-cache-list-conflicting-integrities', {
                url: url
              });
            }

            this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
          }

          this._urlsToCacheKeys.set(url, cacheKey);

          this._urlsToCacheModes.set(url, cacheMode);

          if (urlsToWarnAbout.length > 0) {
            var warningMessage = "Workbox is precaching URLs without revision " + "info: ".concat(urlsToWarnAbout.join(', '), "\nThis is generally NOT safe. ") + "Learn more at https://bit.ly/wb-precache";

            if (true) {
              // Use console directly to display this warning without bloating
              // bundle sizes by pulling in all of the logger codebase in prod.
              console.warn(warningMessage);
            } else {}
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<module:workbox-precaching.InstallResult>}
     */

  }, {
    key: "install",
    value: function install(event) {
      var _this = this;

      return waitUntil(event, /*#__PURE__*/PrecacheController_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var installReportPlugin, _iterator2, _step2, _step2$value, url, cacheKey, integrity, cacheMode, request, updatedURLs, notUpdatedURLs;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                installReportPlugin = new PrecacheInstallReportPlugin();

                _this.strategy.plugins.push(installReportPlugin); // Cache entries one at a time.
                // See https://github.com/GoogleChrome/workbox/issues/2528


                _iterator2 = PrecacheController_createForOfIteratorHelper(_this._urlsToCacheKeys);
                _context.prev = 3;

                _iterator2.s();

              case 5:
                if ((_step2 = _iterator2.n()).done) {
                  _context.next = 14;
                  break;
                }

                _step2$value = PrecacheController_slicedToArray(_step2.value, 2), url = _step2$value[0], cacheKey = _step2$value[1];
                integrity = _this._cacheKeysToIntegrities.get(cacheKey);
                cacheMode = _this._urlsToCacheModes.get(url);
                request = new Request(url, {
                  integrity: integrity,
                  cache: cacheMode,
                  credentials: 'same-origin'
                });
                _context.next = 12;
                return Promise.all(_this.strategy.handleAll({
                  params: {
                    cacheKey: cacheKey
                  },
                  request: request,
                  event: event
                }));

              case 12:
                _context.next = 5;
                break;

              case 14:
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](3);

                _iterator2.e(_context.t0);

              case 19:
                _context.prev = 19;

                _iterator2.f();

                return _context.finish(19);

              case 22:
                updatedURLs = installReportPlugin.updatedURLs, notUpdatedURLs = installReportPlugin.notUpdatedURLs;

                if (false) {}

                return _context.abrupt("return", {
                  updatedURLs: updatedURLs,
                  notUpdatedURLs: notUpdatedURLs
                });

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 16, 19, 22]]);
      })));
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<module:workbox-precaching.CleanupResult>}
     */

  }, {
    key: "activate",
    value: function activate(event) {
      var _this2 = this;

      return waitUntil(event, /*#__PURE__*/PrecacheController_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var cache, currentlyCachedRequests, expectedCacheKeys, deletedURLs, _iterator3, _step3, request;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return self.caches.open(_this2.strategy.cacheName);

              case 2:
                cache = _context2.sent;
                _context2.next = 5;
                return cache.keys();

              case 5:
                currentlyCachedRequests = _context2.sent;
                expectedCacheKeys = new Set(_this2._urlsToCacheKeys.values());
                deletedURLs = [];
                _iterator3 = PrecacheController_createForOfIteratorHelper(currentlyCachedRequests);
                _context2.prev = 9;

                _iterator3.s();

              case 11:
                if ((_step3 = _iterator3.n()).done) {
                  _context2.next = 19;
                  break;
                }

                request = _step3.value;

                if (expectedCacheKeys.has(request.url)) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 16;
                return cache["delete"](request);

              case 16:
                deletedURLs.push(request.url);

              case 17:
                _context2.next = 11;
                break;

              case 19:
                _context2.next = 24;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](9);

                _iterator3.e(_context2.t0);

              case 24:
                _context2.prev = 24;

                _iterator3.f();

                return _context2.finish(24);

              case 27:
                if (false) {}

                return _context2.abrupt("return", {
                  deletedURLs: deletedURLs
                });

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[9, 21, 24, 27]]);
      })));
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */

  }, {
    key: "getURLsToCacheKeys",
    value: function getURLsToCacheKeys() {
      return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */

  }, {
    key: "getCachedURLs",
    value: function getCachedURLs() {
      return PrecacheController_toConsumableArray(this._urlsToCacheKeys.keys());
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */

  }, {
    key: "getCacheKeyForURL",
    value: function getCacheKeyForURL(url) {
      var urlObject = new URL(url, location.href);
      return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */

  }, {
    key: "matchPrecache",
    value: function () {
      var _matchPrecache = PrecacheController_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request) {
        var url, cacheKey, cache;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = request instanceof Request ? request.url : request;
                cacheKey = this.getCacheKeyForURL(url);

                if (!cacheKey) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 5;
                return self.caches.open(this.strategy.cacheName);

              case 5:
                cache = _context3.sent;
                return _context3.abrupt("return", cache.match(cacheKey));

              case 7:
                return _context3.abrupt("return", undefined);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function matchPrecache(_x) {
        return _matchPrecache.apply(this, arguments);
      }

      return matchPrecache;
    }()
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {module:workbox-routing~handlerCallback}
     */

  }, {
    key: "createHandlerBoundToURL",
    value: function createHandlerBoundToURL(url) {
      var _this3 = this;

      var cacheKey = this.getCacheKeyForURL(url);

      if (!cacheKey) {
        throw new WorkboxError_WorkboxError('non-precached-url', {
          url: url
        });
      }

      return function (options) {
        options.request = new Request(url);
        options.params = PrecacheController_objectSpread({
          cacheKey: cacheKey
        }, options.params);
        return _this3.strategy.handle(options);
      };
    }
  }]);

  return PrecacheController;
}();


// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


var getOrCreatePrecacheController_precacheController;
/**
 * @return {PrecacheController}
 * @private
 */

var getOrCreatePrecacheController_getOrCreatePrecacheController = function getOrCreatePrecacheController() {
  if (!getOrCreatePrecacheController_precacheController) {
    getOrCreatePrecacheController_precacheController = new PrecacheController_PrecacheController();
  }

  return getOrCreatePrecacheController_precacheController;
};
// CONCATENATED MODULE: ./node_modules/workbox-precaching/addPlugins.js
function addPlugins_toConsumableArray(arr) { return addPlugins_arrayWithoutHoles(arr) || addPlugins_iterableToArray(arr) || addPlugins_unsupportedIterableToArray(arr) || addPlugins_nonIterableSpread(); }

function addPlugins_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function addPlugins_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return addPlugins_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return addPlugins_arrayLikeToArray(o, minLen); }

function addPlugins_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function addPlugins_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return addPlugins_arrayLikeToArray(arr); }

function addPlugins_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof module:workbox-precaching
 */

function addPlugins(plugins) {
  var _precacheController$s;

  var precacheController = getOrCreatePrecacheController_getOrCreatePrecacheController();

  (_precacheController$s = precacheController.strategy.plugins).push.apply(_precacheController$s, addPlugins_toConsumableArray(plugins));
}


// EXTERNAL MODULE: ./node_modules/workbox-routing/_version.js
var workbox_routing_version = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/workbox-routing/utils/constants.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */

var defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */

var validMethods = ['DELETE', 'GET', 'HEAD', 'PATCH', 'POST', 'PUT'];
// CONCATENATED MODULE: ./node_modules/workbox-routing/utils/normalizeHandler.js
function normalizeHandler_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { normalizeHandler_typeof = function _typeof(obj) { return typeof obj; }; } else { normalizeHandler_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return normalizeHandler_typeof(obj); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */

var normalizeHandler = function normalizeHandler(handler) {
  if (handler && normalizeHandler_typeof(handler) === 'object') {
    if (false) {}

    return handler;
  } else {
    if (false) {}

    return {
      handle: handler
    };
  }
};
// CONCATENATED MODULE: ./node_modules/workbox-routing/Route.js
function Route_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Route_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Route_createClass(Constructor, protoProps, staticProps) { if (protoProps) Route_defineProperties(Constructor.prototype, protoProps); if (staticProps) Route_defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof module:workbox-routing
 */

var Route_Route = /*#__PURE__*/function () {
  /**
   * Constructor for Route class.
   *
   * @param {module:workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {module:workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  function Route(match, handler) {
    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultMethod;

    Route_classCallCheck(this, Route);

    if (false) {} // These values are referenced directly by Router so cannot be
    // altered by minificaton.


    this.handler = normalizeHandler(handler);
    this.match = match;
    this.method = method;
  }
  /**
   *
   * @param {module:workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */


  Route_createClass(Route, [{
    key: "setCatchHandler",
    value: function setCatchHandler(handler) {
      this.catchHandler = normalizeHandler(handler);
    }
  }]);

  return Route;
}();


// CONCATENATED MODULE: ./node_modules/workbox-routing/RegExpRoute.js
function RegExpRoute_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { RegExpRoute_typeof = function _typeof(obj) { return typeof obj; }; } else { RegExpRoute_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return RegExpRoute_typeof(obj); }

function RegExpRoute_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RegExpRoute_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) RegExpRoute_setPrototypeOf(subClass, superClass); }

function RegExpRoute_setPrototypeOf(o, p) { RegExpRoute_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return RegExpRoute_setPrototypeOf(o, p); }

function RegExpRoute_createSuper(Derived) { var hasNativeReflectConstruct = RegExpRoute_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = RegExpRoute_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = RegExpRoute_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return RegExpRoute_possibleConstructorReturn(this, result); }; }

function RegExpRoute_possibleConstructorReturn(self, call) { if (call && (RegExpRoute_typeof(call) === "object" || typeof call === "function")) { return call; } return RegExpRoute_assertThisInitialized(self); }

function RegExpRoute_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function RegExpRoute_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function RegExpRoute_getPrototypeOf(o) { RegExpRoute_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return RegExpRoute_getPrototypeOf(o); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * [Route]{@link module:workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * [See the module docs for info.]{@link https://developers.google.com/web/tools/workbox/modules/workbox-routing}
 *
 * @memberof module:workbox-routing
 * @extends module:workbox-routing.Route
 */

var RegExpRoute = /*#__PURE__*/function (_Route) {
  RegExpRoute_inherits(RegExpRoute, _Route);

  var _super = RegExpRoute_createSuper(RegExpRoute);

  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * [handler's]{@link module:workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {module:workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  function RegExpRoute(regExp, handler, method) {
    RegExpRoute_classCallCheck(this, RegExpRoute);

    if (false) {}

    var match = function match(_ref) {
      var url = _ref.url;
      var result = regExp.exec(url.href); // Return immediately if there's no match.

      if (!result) {
        return;
      } // Require that the match start at the first character in the URL string
      // if it's a cross-origin request.
      // See https://github.com/GoogleChrome/workbox/issues/281 for the context
      // behind this behavior.


      if (url.origin !== location.origin && result.index !== 0) {
        if (false) {}

        return;
      } // If the route matches, but there aren't any capture groups defined, then
      // this will return [], which is truthy and therefore sufficient to
      // indicate a match.
      // If there are capture groups, then it will return their values.


      return result.slice(1);
    };

    return _super.call(this, match, handler, method);
  }

  return RegExpRoute;
}(Route_Route);


// CONCATENATED MODULE: ./node_modules/workbox-routing/Router.js
function Router_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Router_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Router_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Router_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Router_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Router_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Router_construct(Parent, args, Class) { if (Router_isNativeReflectConstruct()) { Router_construct = Reflect.construct; } else { Router_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) Router_setPrototypeOf(instance, Class.prototype); return instance; }; } return Router_construct.apply(null, arguments); }

function Router_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Router_setPrototypeOf(o, p) { Router_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Router_setPrototypeOf(o, p); }

function Router_toConsumableArray(arr) { return Router_arrayWithoutHoles(arr) || Router_iterableToArray(arr) || Router_unsupportedIterableToArray(arr) || Router_nonIterableSpread(); }

function Router_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Router_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Router_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Router_arrayLikeToArray(o, minLen); }

function Router_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function Router_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Router_arrayLikeToArray(arr); }

function Router_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Router_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Router_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Router_createClass(Constructor, protoProps, staticProps) { if (protoProps) Router_defineProperties(Constructor.prototype, protoProps); if (staticProps) Router_defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a FetchEvent through one or more
 * [Routes]{@link module:workbox-routing.Route} responding  with a Request if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof module:workbox-routing
 */

var Router_Router = /*#__PURE__*/function () {
  /**
   * Initializes a new Router.
   */
  function Router() {
    Router_classCallCheck(this, Router);

    this._routes = new Map();
    this._defaultHandlerMap = new Map();
  }
  /**
   * @return {Map<string, Array<module:workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */


  Router_createClass(Router, [{
    key: "routes",
    get: function get() {
      return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */

  }, {
    key: "addFetchListener",
    value: function addFetchListener() {
      var _this = this;

      // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
      self.addEventListener('fetch', function (event) {
        var request = event.request;

        var responsePromise = _this.handleRequest({
          request: request,
          event: event
        });

        if (responsePromise) {
          event.respondWith(responsePromise);
        }
      });
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */

  }, {
    key: "addCacheListener",
    value: function addCacheListener() {
      var _this2 = this;

      // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
      self.addEventListener('message', function (event) {
        if (event.data && event.data.type === 'CACHE_URLS') {
          var payload = event.data.payload;

          if (false) {}

          var requestPromises = Promise.all(payload.urlsToCache.map(function (entry) {
            if (typeof entry === 'string') {
              entry = [entry];
            }

            var request = Router_construct(Request, Router_toConsumableArray(entry));

            return _this2.handleRequest({
              request: request,
              event: event
            }); // TODO(philipwalton): TypeScript errors without this typecast for
            // some reason (probably a bug). The real type here should work but
            // doesn't: `Array<Promise<Response> | undefined>`.
          })); // TypeScript

          event.waitUntil(requestPromises); // If a MessageChannel was used, reply to the message on success.

          if (event.ports && event.ports[0]) {
            requestPromises.then(function () {
              return event.ports[0].postMessage(true);
            });
          }
        }
      });
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */

  }, {
    key: "handleRequest",
    value: function handleRequest(_ref) {
      var _this3 = this;

      var request = _ref.request,
          event = _ref.event;

      if (false) {}

      var url = new URL(request.url, location.href);

      if (!url.protocol.startsWith('http')) {
        if (false) {}

        return;
      }

      var sameOrigin = url.origin === location.origin;

      var _this$findMatchingRou = this.findMatchingRoute({
        event: event,
        request: request,
        sameOrigin: sameOrigin,
        url: url
      }),
          params = _this$findMatchingRou.params,
          route = _this$findMatchingRou.route;

      var handler = route && route.handler;
      var debugMessages = [];

      if (false) {} // If we don't have a handler because there was no matching route, then
      // fall back to defaultHandler if that's defined.


      var method = request.method;

      if (!handler && this._defaultHandlerMap.has(method)) {
        if (false) {}

        handler = this._defaultHandlerMap.get(method);
      }

      if (!handler) {
        if (false) {}

        return;
      }

      if (false) {} // Wrap in try and catch in case the handle method throws a synchronous
      // error. It should still callback to the catch handler.


      var responsePromise;

      try {
        responsePromise = handler.handle({
          url: url,
          request: request,
          event: event,
          params: params
        });
      } catch (err) {
        responsePromise = Promise.reject(err);
      } // Get route's catch handler, if it exists


      var catchHandler = route && route.catchHandler;

      if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
        responsePromise = responsePromise["catch"]( /*#__PURE__*/function () {
          var _ref2 = Router_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!catchHandler) {
                      _context.next = 11;
                      break;
                    }

                    if (false) {}

                    _context.prev = 2;
                    _context.next = 5;
                    return catchHandler.handle({
                      url: url,
                      request: request,
                      event: event,
                      params: params
                    });

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](2);
                    err = _context.t0;

                  case 11:
                    if (!_this3._catchHandler) {
                      _context.next = 14;
                      break;
                    }

                    if (false) {}

                    return _context.abrupt("return", _this3._catchHandler.handle({
                      url: url,
                      request: request,
                      event: event
                    }));

                  case 14:
                    throw err;

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[2, 8]]);
          }));

          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      }

      return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */

  }, {
    key: "findMatchingRoute",
    value: function findMatchingRoute(_ref3) {
      var url = _ref3.url,
          sameOrigin = _ref3.sameOrigin,
          request = _ref3.request,
          event = _ref3.event;
      var routes = this._routes.get(request.method) || [];

      var _iterator = Router_createForOfIteratorHelper(routes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var route = _step.value;
          var params = void 0;
          var matchResult = route.match({
            url: url,
            sameOrigin: sameOrigin,
            request: request,
            event: event
          });

          if (matchResult) {
            if (false) {} // See https://github.com/GoogleChrome/workbox/issues/2079


            params = matchResult;

            if (Array.isArray(matchResult) && matchResult.length === 0) {
              // Instead of passing an empty array in as params, use undefined.
              params = undefined;
            } else if (matchResult.constructor === Object && Object.keys(matchResult).length === 0) {
              // Instead of passing an empty object in as params, use undefined.
              params = undefined;
            } else if (typeof matchResult === 'boolean') {
              // For the boolean value true (rather than just something truth-y),
              // don't set params.
              // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
              params = undefined;
            } // Return early if have a match.


            return {
              route: route,
              params: params
            };
          }
        } // If no match was found above, return and empty object.

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */

  }, {
    key: "setDefaultHandler",
    value: function setDefaultHandler(handler) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMethod;

      this._defaultHandlerMap.set(method, normalizeHandler(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */

  }, {
    key: "setCatchHandler",
    value: function setCatchHandler(handler) {
      this._catchHandler = normalizeHandler(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to register.
     */

  }, {
    key: "registerRoute",
    value: function registerRoute(route) {
      if (false) {}

      if (!this._routes.has(route.method)) {
        this._routes.set(route.method, []);
      } // Give precedence to all of the earlier routes by adding this additional
      // route to the end of the array.


      this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to unregister.
     */

  }, {
    key: "unregisterRoute",
    value: function unregisterRoute(route) {
      if (!this._routes.has(route.method)) {
        throw new WorkboxError_WorkboxError('unregister-route-but-not-found-with-method', {
          method: route.method
        });
      }

      var routeIndex = this._routes.get(route.method).indexOf(route);

      if (routeIndex > -1) {
        this._routes.get(route.method).splice(routeIndex, 1);
      } else {
        throw new WorkboxError_WorkboxError('unregister-route-route-not-registered');
      }
    }
  }]);

  return Router;
}();


// CONCATENATED MODULE: ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


var getOrCreateDefaultRouter_defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */

var getOrCreateDefaultRouter_getOrCreateDefaultRouter = function getOrCreateDefaultRouter() {
  if (!getOrCreateDefaultRouter_defaultRouter) {
    getOrCreateDefaultRouter_defaultRouter = new Router_Router(); // The helpers that use the default Router assume these listeners exist.

    getOrCreateDefaultRouter_defaultRouter.addFetchListener();
    getOrCreateDefaultRouter_defaultRouter.addCacheListener();
  }

  return getOrCreateDefaultRouter_defaultRouter;
};
// CONCATENATED MODULE: ./node_modules/workbox-routing/registerRoute.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call [registerRoute()]{@link module:workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|module:workbox-routing.Route~matchCallback|module:workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {module:workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {module:workbox-routing.Route} The generated `Route`(Useful for
 * unregistering).
 *
 * @memberof module:workbox-routing
 */

function registerRoute(capture, handler, method) {
  var route;

  if (typeof capture === 'string') {
    var captureUrl = new URL(capture, location.href);

    if (false) { var wildcards, valueToCheck; }

    var matchCallback = function matchCallback(_ref) {
      var url = _ref.url;

      if (false) {}

      return url.href === captureUrl.href;
    }; // If `capture` is a string then `handler` and `method` must be present.


    route = new Route_Route(matchCallback, handler, method);
  } else if (capture instanceof RegExp) {
    // If `capture` is a `RegExp` then `handler` and `method` must be present.
    route = new RegExpRoute(capture, handler, method);
  } else if (typeof capture === 'function') {
    // If `capture` is a function then `handler` and `method` must be present.
    route = new Route_Route(capture, handler, method);
  } else if (capture instanceof Route_Route) {
    route = capture;
  } else {
    throw new WorkboxError_WorkboxError('unsupported-route-type', {
      moduleName: 'workbox-routing',
      funcName: 'registerRoute',
      paramName: 'capture'
    });
  }

  var defaultRouter = getOrCreateDefaultRouter_getOrCreateDefaultRouter();
  defaultRouter.registerRoute(route);
  return route;
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js
function removeIgnoredSearchParams_toConsumableArray(arr) { return removeIgnoredSearchParams_arrayWithoutHoles(arr) || removeIgnoredSearchParams_iterableToArray(arr) || removeIgnoredSearchParams_unsupportedIterableToArray(arr) || removeIgnoredSearchParams_nonIterableSpread(); }

function removeIgnoredSearchParams_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function removeIgnoredSearchParams_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return removeIgnoredSearchParams_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return removeIgnoredSearchParams_arrayLikeToArray(o, minLen); }

function removeIgnoredSearchParams_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function removeIgnoredSearchParams_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return removeIgnoredSearchParams_arrayLikeToArray(arr); }

function removeIgnoredSearchParams_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof module:workbox-precaching
 */

function removeIgnoredSearchParams(urlObject) {
  var ignoreURLParametersMatching = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _loop = function _loop() {
    var paramName = _arr[_i];

    if (ignoreURLParametersMatching.some(function (regExp) {
      return regExp.test(paramName);
    })) {
      urlObject.searchParams["delete"](paramName);
    }
  };

  // Convert the iterable into an array at the start of the loop to make sure
  // deletion doesn't mess up iteration.
  for (var _i = 0, _arr = removeIgnoredSearchParams_toConsumableArray(urlObject.searchParams.keys()); _i < _arr.length; _i++) {
    _loop();
  }

  return urlObject;
}
// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/generateURLVariations.js
var _marked = /*#__PURE__*/regeneratorRuntime.mark(generateURLVariations);

function generateURLVariations_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = generateURLVariations_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function generateURLVariations_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return generateURLVariations_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return generateURLVariations_arrayLikeToArray(o, minLen); }

function generateURLVariations_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof module:workbox-precaching
 */

function generateURLVariations(url) {
  var _ref,
      _ref$ignoreURLParamet,
      ignoreURLParametersMatching,
      _ref$directoryIndex,
      directoryIndex,
      _ref$cleanURLs,
      cleanURLs,
      urlManipulation,
      urlObject,
      urlWithoutIgnoredParams,
      directoryURL,
      cleanURL,
      additionalURLs,
      _iterator,
      _step,
      urlToAttempt,
      _args = arguments;

  return regeneratorRuntime.wrap(function generateURLVariations$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, _ref$ignoreURLParamet = _ref.ignoreURLParametersMatching, ignoreURLParametersMatching = _ref$ignoreURLParamet === void 0 ? [/^utm_/, /^fbclid$/] : _ref$ignoreURLParamet, _ref$directoryIndex = _ref.directoryIndex, directoryIndex = _ref$directoryIndex === void 0 ? 'index.html' : _ref$directoryIndex, _ref$cleanURLs = _ref.cleanURLs, cleanURLs = _ref$cleanURLs === void 0 ? true : _ref$cleanURLs, urlManipulation = _ref.urlManipulation;
          urlObject = new URL(url, location.href);
          urlObject.hash = '';
          _context.next = 5;
          return urlObject.href;

        case 5:
          urlWithoutIgnoredParams = removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching);
          _context.next = 8;
          return urlWithoutIgnoredParams.href;

        case 8:
          if (!(directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/'))) {
            _context.next = 13;
            break;
          }

          directoryURL = new URL(urlWithoutIgnoredParams.href);
          directoryURL.pathname += directoryIndex;
          _context.next = 13;
          return directoryURL.href;

        case 13:
          if (!cleanURLs) {
            _context.next = 18;
            break;
          }

          cleanURL = new URL(urlWithoutIgnoredParams.href);
          cleanURL.pathname += '.html';
          _context.next = 18;
          return cleanURL.href;

        case 18:
          if (!urlManipulation) {
            _context.next = 37;
            break;
          }

          additionalURLs = urlManipulation({
            url: urlObject
          });
          _iterator = generateURLVariations_createForOfIteratorHelper(additionalURLs);
          _context.prev = 21;

          _iterator.s();

        case 23:
          if ((_step = _iterator.n()).done) {
            _context.next = 29;
            break;
          }

          urlToAttempt = _step.value;
          _context.next = 27;
          return urlToAttempt.href;

        case 27:
          _context.next = 23;
          break;

        case 29:
          _context.next = 34;
          break;

        case 31:
          _context.prev = 31;
          _context.t0 = _context["catch"](21);

          _iterator.e(_context.t0);

        case 34:
          _context.prev = 34;

          _iterator.f();

          return _context.finish(34);

        case 37:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[21, 31, 34, 37]]);
}
// CONCATENATED MODULE: ./node_modules/workbox-precaching/PrecacheRoute.js
function PrecacheRoute_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PrecacheRoute_typeof = function _typeof(obj) { return typeof obj; }; } else { PrecacheRoute_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PrecacheRoute_typeof(obj); }

function PrecacheRoute_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = PrecacheRoute_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function PrecacheRoute_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PrecacheRoute_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PrecacheRoute_arrayLikeToArray(o, minLen); }

function PrecacheRoute_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PrecacheRoute_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PrecacheRoute_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PrecacheRoute_setPrototypeOf(subClass, superClass); }

function PrecacheRoute_setPrototypeOf(o, p) { PrecacheRoute_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PrecacheRoute_setPrototypeOf(o, p); }

function PrecacheRoute_createSuper(Derived) { var hasNativeReflectConstruct = PrecacheRoute_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = PrecacheRoute_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = PrecacheRoute_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return PrecacheRoute_possibleConstructorReturn(this, result); }; }

function PrecacheRoute_possibleConstructorReturn(self, call) { if (call && (PrecacheRoute_typeof(call) === "object" || typeof call === "function")) { return call; } return PrecacheRoute_assertThisInitialized(self); }

function PrecacheRoute_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PrecacheRoute_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function PrecacheRoute_getPrototypeOf(o) { PrecacheRoute_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PrecacheRoute_getPrototypeOf(o); }

/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of [Route]{@link module:workbox-routing.Route} that takes a
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof module:workbox-precaching
 * @extends module:workbox-routing.Route
 */

var PrecacheRoute_PrecacheRoute = /*#__PURE__*/function (_Route) {
  PrecacheRoute_inherits(PrecacheRoute, _Route);

  var _super = PrecacheRoute_createSuper(PrecacheRoute);

  /**
   * @param {PrecacheController} precacheController A `PrecacheController`
   * instance used to both match requests and respond to fetch events.
   * @param {Object} [options] Options to control how requests are matched
   * against the list of precached URLs.
   * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
   * check cache entries for a URLs ending with '/' to see if there is a hit when
   * appending the `directoryIndex` value.
   * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
   * array of regex's to remove search params when looking for a cache match.
   * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
   * check the cache for the URL with a `.html` added to the end of the end.
   * @param {module:workbox-precaching~urlManipulation} [options.urlManipulation]
   * This is a function that should take a URL and return an array of
   * alternative URLs that should be checked for precache matches.
   */
  function PrecacheRoute(precacheController, options) {
    PrecacheRoute_classCallCheck(this, PrecacheRoute);

    var match = function match(_ref) {
      var request = _ref.request;
      var urlsToCacheKeys = precacheController.getURLsToCacheKeys();

      var _iterator = PrecacheRoute_createForOfIteratorHelper(generateURLVariations(request.url, options)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var possibleURL = _step.value;
          var cacheKey = urlsToCacheKeys.get(possibleURL);

          if (cacheKey) {
            return {
              cacheKey: cacheKey
            };
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (false) {}

      return;
    };

    return _super.call(this, match, precacheController.strategy);
  }

  return PrecacheRoute;
}(Route_Route);


// CONCATENATED MODULE: ./node_modules/workbox-precaching/addRoute.js
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See
 * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
 *
 * @memberof module:workbox-precaching
 */

function addRoute(options) {
  var precacheController = getOrCreatePrecacheController_getOrCreatePrecacheController();
  var precacheRoute = new PrecacheRoute_PrecacheRoute(precacheController, options);
  registerRoute(precacheRoute);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js
function deleteOutdatedCaches_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function deleteOutdatedCaches_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { deleteOutdatedCaches_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { deleteOutdatedCaches_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

var SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof module:workbox-precaching
 */

var deleteOutdatedCaches = /*#__PURE__*/function () {
  var _ref = deleteOutdatedCaches_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(currentPrecacheName) {
    var substringToFind,
        cacheNames,
        cacheNamesToDelete,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            substringToFind = _args.length > 1 && _args[1] !== undefined ? _args[1] : SUBSTRING_TO_FIND;
            _context.next = 3;
            return self.caches.keys();

          case 3:
            cacheNames = _context.sent;
            cacheNamesToDelete = cacheNames.filter(function (cacheName) {
              return cacheName.includes(substringToFind) && cacheName.includes(self.registration.scope) && cacheName !== currentPrecacheName;
            });
            _context.next = 7;
            return Promise.all(cacheNamesToDelete.map(function (cacheName) {
              return self.caches["delete"](cacheName);
            }));

          case 7:
            return _context.abrupt("return", cacheNamesToDelete);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function deleteOutdatedCaches(_x) {
    return _ref.apply(this, arguments);
  };
}();


// CONCATENATED MODULE: ./node_modules/workbox-precaching/cleanupOutdatedCaches.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof module:workbox-precaching
 */

function cleanupOutdatedCaches() {
  // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
  self.addEventListener('activate', function (event) {
    var cacheName = cacheNames.getPrecacheName();
    event.waitUntil(deleteOutdatedCaches(cacheName).then(function (cachesDeleted) {
      if (false) {}
    }));
  });
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/createHandlerBoundToURL.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {module:workbox-routing~handlerCallback}
 *
 * @memberof module:workbox-precaching
 */

function createHandlerBoundToURL_createHandlerBoundToURL(url) {
  var precacheController = getOrCreatePrecacheController_getOrCreatePrecacheController();
  return precacheController.createHandlerBoundToURL(url);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/getCacheKeyForURL.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof module:workbox-precaching
 */

function getCacheKeyForURL(url) {
  var precacheController = getOrCreatePrecacheController_getOrCreatePrecacheController();
  return precacheController.getCacheKeyForURL(url);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/matchPrecache.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof module:workbox-precaching
 */

function matchPrecache(request) {
  var precacheController = getOrCreatePrecacheController_getOrCreatePrecacheController();
  return precacheController.matchPrecache(request);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/precache.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * [addRoute()]{@link module:workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof module:workbox-precaching
 */

function precache(entries) {
  var precacheController = getOrCreatePrecacheController_getOrCreatePrecacheController();
  precacheController.precache(entries);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/precacheAndRoute.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * [precache()]{@link module:workbox-precaching.precache} and
 * [addRoute()]{@link module:workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See
 * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
 *
 * @memberof module:workbox-precaching
 */

function precacheAndRoute(entries, options) {
  precache(entries);
  addRoute(options);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/PrecacheFallbackPlugin.js
function PrecacheFallbackPlugin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof module:workbox-precaching
 */

var PrecacheFallbackPlugin_PrecacheFallbackPlugin =
/**
 * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
 *
 * @param {Object} config
 * @param {string} config.fallbackURL A precached URL to use as the fallback
 *     if the associated strategy can't generate a response.
 * @param {PrecacheController} [config.precacheController] An optional
 *     PrecacheController instance. If not provided, the default
 *     PrecacheController will be used.
 */
function PrecacheFallbackPlugin(_ref) {
  var _this = this;

  var fallbackURL = _ref.fallbackURL,
      precacheController = _ref.precacheController;

  PrecacheFallbackPlugin_classCallCheck(this, PrecacheFallbackPlugin);

  /**
   * @return {Promise<Response>} The precache response for the fallback URL.
   *
   * @private
   */
  this.handlerDidError = function () {
    return _this._precacheController.matchPrecache(_this._fallbackURL);
  };

  this._fallbackURL = fallbackURL;
  this._precacheController = precacheController || getOrCreatePrecacheController_getOrCreatePrecacheController();
};


// CONCATENATED MODULE: ./node_modules/workbox-precaching/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */


// CONCATENATED MODULE: ./node_modules/workbox-precaching/index.mjs

// CONCATENATED MODULE: ./node_modules/workbox-core/registerQuotaErrorCallback.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds a function to the set of quotaErrorCallbacks that will be executed if
 * there's a quota error.
 *
 * @param {Function} callback
 * @memberof module:workbox-core
 */

function registerQuotaErrorCallback(callback) {
  if (false) {}

  quotaErrorCallbacks.add(callback);

  if (false) {}
}


// CONCATENATED MODULE: ./node_modules/workbox-core/_private/canConstructReadableStream.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

var canConstructReadableStream_supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream)
 * object.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `ReadableStream`, `false` otherwise.
 *
 * @private
 */

function canConstructReadableStream() {
  if (canConstructReadableStream_supportStatus === undefined) {
    // See https://github.com/GoogleChrome/workbox/issues/1473
    try {
      new ReadableStream({
        start: function start() {}
      });
      canConstructReadableStream_supportStatus = true;
    } catch (error) {
      canConstructReadableStream_supportStatus = false;
    }
  }

  return canConstructReadableStream_supportStatus;
}


// CONCATENATED MODULE: ./node_modules/workbox-core/_private/dontWaitFor.js
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A helper function that prevents a promise from being flagged as unused.
 *
 * @private
 **/

function dontWaitFor(promise) {
  // Effective no-op.
  promise.then(function () {});
}
// CONCATENATED MODULE: ./node_modules/workbox-core/_private/DBWrapper.js
function DBWrapper_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = DBWrapper_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function DBWrapper_slicedToArray(arr, i) { return DBWrapper_arrayWithHoles(arr) || DBWrapper_iterableToArrayLimit(arr, i) || DBWrapper_unsupportedIterableToArray(arr, i) || DBWrapper_nonIterableRest(); }

function DBWrapper_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function DBWrapper_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return DBWrapper_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DBWrapper_arrayLikeToArray(o, minLen); }

function DBWrapper_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function DBWrapper_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function DBWrapper_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function DBWrapper_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function DBWrapper_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { DBWrapper_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { DBWrapper_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function DBWrapper_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DBWrapper_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DBWrapper_createClass(Constructor, protoProps, staticProps) { if (protoProps) DBWrapper_defineProperties(Constructor.prototype, protoProps); if (staticProps) DBWrapper_defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A class that wraps common IndexedDB functionality in a promise-based API.
 * It exposes all the underlying power and functionality of IndexedDB, but
 * wraps the most commonly used features in a way that's much simpler to use.
 *
 * @private
 */

var DBWrapper = /*#__PURE__*/function () {
  /**
   * @param {string} name
   * @param {number} version
   * @param {Object=} [callback]
   * @param {!Function} [callbacks.onupgradeneeded]
   * @param {!Function} [callbacks.onversionchange] Defaults to
   *     DBWrapper.prototype._onversionchange when not specified.
   * @private
   */
  function DBWrapper(name, version) {
    var _this = this;

    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        onupgradeneeded = _ref.onupgradeneeded,
        onversionchange = _ref.onversionchange;

    DBWrapper_classCallCheck(this, DBWrapper);

    this._db = null;
    this._name = name;
    this._version = version;
    this._onupgradeneeded = onupgradeneeded;

    this._onversionchange = onversionchange || function () {
      return _this.close();
    };
  }
  /**
   * Returns the IDBDatabase instance (not normally needed).
   * @return {IDBDatabase|undefined}
   *
   * @private
   */


  DBWrapper_createClass(DBWrapper, [{
    key: "db",
    get: function get() {
      return this._db;
    }
    /**
     * Opens a connected to an IDBDatabase, invokes any onupgradedneeded
     * callback, and added an onversionchange callback to the database.
     *
     * @return {IDBDatabase}
     * @private
     */

  }, {
    key: "open",
    value: function () {
      var _open = DBWrapper_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this._db) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return new Promise(function (resolve, reject) {
                  // This flag is flipped to true if the timeout callback runs prior
                  // to the request failing or succeeding. Note: we use a timeout instead
                  // of an onblocked handler since there are cases where onblocked will
                  // never never run. A timeout better handles all possible scenarios:
                  // https://github.com/w3c/IndexedDB/issues/223
                  var openRequestTimedOut = false;
                  setTimeout(function () {
                    openRequestTimedOut = true;
                    reject(new Error('The open request was blocked and timed out'));
                  }, _this2.OPEN_TIMEOUT);
                  var openRequest = indexedDB.open(_this2._name, _this2._version);

                  openRequest.onerror = function () {
                    return reject(openRequest.error);
                  };

                  openRequest.onupgradeneeded = function (evt) {
                    if (openRequestTimedOut) {
                      openRequest.transaction.abort();
                      openRequest.result.close();
                    } else if (typeof _this2._onupgradeneeded === 'function') {
                      _this2._onupgradeneeded(evt);
                    }
                  };

                  openRequest.onsuccess = function () {
                    var db = openRequest.result;

                    if (openRequestTimedOut) {
                      db.close();
                    } else {
                      db.onversionchange = _this2._onversionchange.bind(_this2);
                      resolve(db);
                    }
                  };
                });

              case 4:
                this._db = _context.sent;
                return _context.abrupt("return", this);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function open() {
        return _open.apply(this, arguments);
      }

      return open;
    }()
    /**
     * Polyfills the native `getKey()` method. Note, this is overridden at
     * runtime if the browser supports the native method.
     *
     * @param {string} storeName
     * @param {*} query
     * @return {Array}
     * @private
     */

  }, {
    key: "getKey",
    value: function () {
      var _getKey = DBWrapper_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(storeName, query) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getAllKeys(storeName, query, 1);

              case 2:
                return _context2.abrupt("return", _context2.sent[0]);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getKey(_x, _x2) {
        return _getKey.apply(this, arguments);
      }

      return getKey;
    }()
    /**
     * Polyfills the native `getAll()` method. Note, this is overridden at
     * runtime if the browser supports the native method.
     *
     * @param {string} storeName
     * @param {*} query
     * @param {number} count
     * @return {Array}
     * @private
     */

  }, {
    key: "getAll",
    value: function () {
      var _getAll = DBWrapper_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(storeName, query, count) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getAllMatching(storeName, {
                  query: query,
                  count: count
                });

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAll(_x3, _x4, _x5) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
    /**
     * Polyfills the native `getAllKeys()` method. Note, this is overridden at
     * runtime if the browser supports the native method.
     *
     * @param {string} storeName
     * @param {*} query
     * @param {number} count
     * @return {Array}
     * @private
     */

  }, {
    key: "getAllKeys",
    value: function () {
      var _getAllKeys = DBWrapper_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(storeName, query, count) {
        var entries;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getAllMatching(storeName, {
                  query: query,
                  count: count,
                  includeKeys: true
                });

              case 2:
                entries = _context4.sent;
                return _context4.abrupt("return", entries.map(function (entry) {
                  return entry.key;
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getAllKeys(_x6, _x7, _x8) {
        return _getAllKeys.apply(this, arguments);
      }

      return getAllKeys;
    }()
    /**
     * Supports flexible lookup in an object store by specifying an index,
     * query, direction, and count. This method returns an array of objects
     * with the signature .
     *
     * @param {string} storeName
     * @param {Object} [opts]
     * @param {string} [opts.index] The index to use (if specified).
     * @param {*} [opts.query]
     * @param {IDBCursorDirection} [opts.direction]
     * @param {number} [opts.count] The max number of results to return.
     * @param {boolean} [opts.includeKeys] When true, the structure of the
     *     returned objects is changed from an array of values to an array of
     *     objects in the form {key, primaryKey, value}.
     * @return {Array}
     * @private
     */

  }, {
    key: "getAllMatching",
    value: function () {
      var _getAllMatching = DBWrapper_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(storeName) {
        var _ref2,
            index,
            _ref2$query,
            query,
            _ref2$direction,
            direction,
            count,
            _ref2$includeKeys,
            includeKeys,
            _args5 = arguments;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _ref2 = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {}, index = _ref2.index, _ref2$query = _ref2.query, query = _ref2$query === void 0 ? null : _ref2$query, _ref2$direction = _ref2.direction, direction = _ref2$direction === void 0 ? 'next' : _ref2$direction, count = _ref2.count, _ref2$includeKeys = _ref2.includeKeys, includeKeys = _ref2$includeKeys === void 0 ? false : _ref2$includeKeys;
                _context5.next = 3;
                return this.transaction([storeName], 'readonly', function (txn, done) {
                  var store = txn.objectStore(storeName);
                  var target = index ? store.index(index) : store;
                  var results = [];
                  var request = target.openCursor(query, direction);

                  request.onsuccess = function () {
                    var cursor = request.result;

                    if (cursor) {
                      results.push(includeKeys ? cursor : cursor.value);

                      if (count && results.length >= count) {
                        done(results);
                      } else {
                        cursor["continue"]();
                      }
                    } else {
                      done(results);
                    }
                  };
                });

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getAllMatching(_x9) {
        return _getAllMatching.apply(this, arguments);
      }

      return getAllMatching;
    }()
    /**
     * Accepts a list of stores, a transaction type, and a callback and
     * performs a transaction. A promise is returned that resolves to whatever
     * value the callback chooses. The callback holds all the transaction logic
     * and is invoked with two arguments:
     *   1. The IDBTransaction object
     *   2. A `done` function, that's used to resolve the promise when
     *      when the transaction is done, if passed a value, the promise is
     *      resolved to that value.
     *
     * @param {Array<string>} storeNames An array of object store names
     *     involved in the transaction.
     * @param {string} type Can be `readonly` or `readwrite`.
     * @param {!Function} callback
     * @return {*} The result of the transaction ran by the callback.
     * @private
     */

  }, {
    key: "transaction",
    value: function () {
      var _transaction = DBWrapper_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(storeNames, type, callback) {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.open();

              case 2:
                _context6.next = 4;
                return new Promise(function (resolve, reject) {
                  var txn = _this3._db.transaction(storeNames, type);

                  txn.onabort = function () {
                    return reject(txn.error);
                  };

                  txn.oncomplete = function () {
                    return resolve();
                  };

                  callback(txn, function (value) {
                    return resolve(value);
                  });
                });

              case 4:
                return _context6.abrupt("return", _context6.sent);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function transaction(_x10, _x11, _x12) {
        return _transaction.apply(this, arguments);
      }

      return transaction;
    }()
    /**
     * Delegates async to a native IDBObjectStore method.
     *
     * @param {string} method The method name.
     * @param {string} storeName The object store name.
     * @param {string} type Can be `readonly` or `readwrite`.
     * @param {...*} args The list of args to pass to the native method.
     * @return {*} The result of the transaction.
     * @private
     */

  }, {
    key: "_call",
    value: function () {
      var _call2 = DBWrapper_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(method, storeName, type) {
        var _len,
            args,
            _key,
            callback,
            _args7 = arguments;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                for (_len = _args7.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                  args[_key - 3] = _args7[_key];
                }

                callback = function callback(txn, done) {
                  var objStore = txn.objectStore(storeName); // TODO(philipwalton): Fix this underlying TS2684 error.
                  // @ts-ignore

                  var request = objStore[method].apply(objStore, args);

                  request.onsuccess = function () {
                    return done(request.result);
                  };
                };

                _context7.next = 4;
                return this.transaction([storeName], type, callback);

              case 4:
                return _context7.abrupt("return", _context7.sent);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _call(_x13, _x14, _x15) {
        return _call2.apply(this, arguments);
      }

      return _call;
    }()
    /**
     * Closes the connection opened by `DBWrapper.open()`. Generally this method
     * doesn't need to be called since:
     *   1. It's usually better to keep a connection open since opening
     *      a new connection is somewhat slow.
     *   2. Connections are automatically closed when the reference is
     *      garbage collected.
     * The primary use case for needing to close a connection is when another
     * reference (typically in another tab) needs to upgrade it and would be
     * blocked by the current, open connection.
     *
     * @private
     */

  }, {
    key: "close",
    value: function close() {
      if (this._db) {
        this._db.close();

        this._db = null;
      }
    }
  }]);

  return DBWrapper;
}(); // Exposed on the prototype to let users modify the default timeout on a
// per-instance or global basis.

DBWrapper.prototype.OPEN_TIMEOUT = 2000; // Wrap native IDBObjectStore methods according to their mode.

var methodsToWrap = {
  readonly: ['get', 'count', 'getKey', 'getAll', 'getAllKeys'],
  readwrite: ['add', 'put', 'clear', 'delete']
};

var _loop = function _loop() {
  var _Object$entries$_i = DBWrapper_slicedToArray(_Object$entries[_i], 2),
      mode = _Object$entries$_i[0],
      methods = _Object$entries$_i[1];

  var _iterator = DBWrapper_createForOfIteratorHelper(methods),
      _step;

  try {
    var _loop2 = function _loop2() {
      var method = _step.value;

      if (method in IDBObjectStore.prototype) {
        // Don't use arrow functions here since we're outside of the class.
        DBWrapper.prototype[method] = /*#__PURE__*/function () {
          var _ref3 = DBWrapper_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(storeName) {
            var _len2,
                args,
                _key2,
                _args8 = arguments;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    for (_len2 = _args8.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                      args[_key2 - 1] = _args8[_key2];
                    }

                    _context8.next = 3;
                    return this._call.apply(this, [method, storeName, mode].concat(args));

                  case 3:
                    return _context8.abrupt("return", _context8.sent);

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));

          return function (_x16) {
            return _ref3.apply(this, arguments);
          };
        }();
      }
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

for (var _i = 0, _Object$entries = Object.entries(methodsToWrap); _i < _Object$entries.length; _i++) {
  _loop();
}
// CONCATENATED MODULE: ./node_modules/workbox-core/_private/deleteDatabase.js
function deleteDatabase_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function deleteDatabase_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { deleteDatabase_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { deleteDatabase_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Deletes the database.
 * Note: this is exported separately from the DBWrapper module because most
 * usages of IndexedDB in workbox dont need deleting, and this way it can be
 * reused in tests to delete databases without creating DBWrapper instances.
 *
 * @param {string} name The database name.
 * @private
 */

var deleteDatabase = /*#__PURE__*/function () {
  var _ref = deleteDatabase_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve, reject) {
              var request = indexedDB.deleteDatabase(name);

              request.onerror = function () {
                reject(request.error);
              };

              request.onblocked = function () {
                reject(new Error('Delete blocked'));
              };

              request.onsuccess = function () {
                resolve();
              };
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function deleteDatabase(_x) {
    return _ref.apply(this, arguments);
  };
}();
// CONCATENATED MODULE: ./node_modules/workbox-core/_private/resultingClientExists.js
function resultingClientExists_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function resultingClientExists_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { resultingClientExists_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { resultingClientExists_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


var MAX_RETRY_TIME = 2000;
/**
 * Returns a promise that resolves to a window client matching the passed
 * `resultingClientId`. For browsers that don't support `resultingClientId`
 * or if waiting for the resulting client to apper takes too long, resolve to
 * `undefined`.
 *
 * @param {string} [resultingClientId]
 * @return {Promise<Client|undefined>}
 * @private
 */

function resultingClientExists(_x) {
  return _resultingClientExists.apply(this, arguments);
}

function _resultingClientExists() {
  _resultingClientExists = resultingClientExists_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resultingClientId) {
    var existingWindows, existingWindowIds, resultingWindow, startTime;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (resultingClientId) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.next = 4;
            return self.clients.matchAll({
              type: 'window'
            });

          case 4:
            existingWindows = _context.sent;
            existingWindowIds = new Set(existingWindows.map(function (w) {
              return w.id;
            }));
            startTime = performance.now(); // Only wait up to `MAX_RETRY_TIME` to find a matching client.

          case 7:
            if (!(performance.now() - startTime < MAX_RETRY_TIME)) {
              _context.next = 18;
              break;
            }

            _context.next = 10;
            return self.clients.matchAll({
              type: 'window'
            });

          case 10:
            existingWindows = _context.sent;
            resultingWindow = existingWindows.find(function (w) {
              if (resultingClientId) {
                // If we have a `resultingClientId`, we can match on that.
                return w.id === resultingClientId;
              } else {
                // Otherwise match on finding a window not in `existingWindowIds`.
                return !existingWindowIds.has(w.id);
              }
            });

            if (!resultingWindow) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("break", 18);

          case 14:
            _context.next = 16;
            return timeout(100);

          case 16:
            _context.next = 7;
            break;

          case 18:
            return _context.abrupt("return", resultingWindow);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _resultingClientExists.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/workbox-core/_private.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/
// We either expose defaults or we expose every named export.


















// CONCATENATED MODULE: ./node_modules/workbox-core/cacheNames.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Get the current cache names and prefix/suffix used by Workbox.
 *
 * `cacheNames.precache` is used for precached assets,
 * `cacheNames.googleAnalytics` is used by `workbox-google-analytics` to
 * store `analytics.js`, and `cacheNames.runtime` is used for everything else.
 *
 * `cacheNames.prefix` can be used to retrieve just the current prefix value.
 * `cacheNames.suffix` can be used to retrieve just the current suffix value.
 *
 * @return {Object} An object with `precache`, `runtime`, `prefix`, and
 *     `googleAnalytics` properties.
 *
 * @memberof module:workbox-core
 */

var cacheNames_cacheNames = {
  get googleAnalytics() {
    return cacheNames.getGoogleAnalyticsName();
  },

  get precache() {
    return cacheNames.getPrecacheName();
  },

  get prefix() {
    return cacheNames.getPrefix();
  },

  get runtime() {
    return cacheNames.getRuntimeName();
  },

  get suffix() {
    return cacheNames.getSuffix();
  }

};

// CONCATENATED MODULE: ./node_modules/workbox-core/clientsClaim.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Claim any currently available clients once the service worker
 * becomes active. This is normally used in conjunction with `skipWaiting()`.
 *
 * @memberof module:workbox-core
 */

function clientsClaim() {
  self.addEventListener('activate', function () {
    return self.clients.claim();
  });
}


// CONCATENATED MODULE: ./node_modules/workbox-core/setCacheNameDetails.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Modifies the default cache names used by the Workbox packages.
 * Cache names are generated as `<prefix>-<Cache Name>-<suffix>`.
 *
 * @param {Object} details
 * @param {Object} [details.prefix] The string to add to the beginning of
 *     the precache and runtime cache names.
 * @param {Object} [details.suffix] The string to add to the end of
 *     the precache and runtime cache names.
 * @param {Object} [details.precache] The cache name to use for precache
 *     caching.
 * @param {Object} [details.runtime] The cache name to use for runtime caching.
 * @param {Object} [details.googleAnalytics] The cache name to use for
 *     `workbox-google-analytics` caching.
 *
 * @memberof module:workbox-core
 */

function setCacheNameDetails(details) {
  if (false) {}

  cacheNames.updateDetails(details);
}


// CONCATENATED MODULE: ./node_modules/workbox-core/skipWaiting.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * This method is deprecated, and will be removed in Workbox v7.
 *
 * Calling self.skipWaiting() is equivalent, and should be used instead.
 *
 * @memberof module:workbox-core
 */

function skipWaiting() {
  // Just call self.skipWaiting() directly.
  // See https://github.com/GoogleChrome/workbox/issues/2525
  if (false) {}

  self.skipWaiting();
}


// CONCATENATED MODULE: ./node_modules/workbox-core/types.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// CONCATENATED MODULE: ./node_modules/workbox-core/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * All of the Workbox service worker libraries use workbox-core for shared
 * code as well as setting default values that need to be shared (like cache
 * names).
 *
 * @module workbox-core
 */



// CONCATENATED MODULE: ./node_modules/workbox-core/index.mjs

// CONCATENATED MODULE: ./node_modules/workbox-routing/NavigationRoute.js
function NavigationRoute_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NavigationRoute_typeof = function _typeof(obj) { return typeof obj; }; } else { NavigationRoute_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NavigationRoute_typeof(obj); }

function NavigationRoute_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = NavigationRoute_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function NavigationRoute_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return NavigationRoute_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return NavigationRoute_arrayLikeToArray(o, minLen); }

function NavigationRoute_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function NavigationRoute_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NavigationRoute_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NavigationRoute_createClass(Constructor, protoProps, staticProps) { if (protoProps) NavigationRoute_defineProperties(Constructor.prototype, protoProps); if (staticProps) NavigationRoute_defineProperties(Constructor, staticProps); return Constructor; }

function NavigationRoute_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NavigationRoute_setPrototypeOf(subClass, superClass); }

function NavigationRoute_setPrototypeOf(o, p) { NavigationRoute_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NavigationRoute_setPrototypeOf(o, p); }

function NavigationRoute_createSuper(Derived) { var hasNativeReflectConstruct = NavigationRoute_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = NavigationRoute_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = NavigationRoute_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return NavigationRoute_possibleConstructorReturn(this, result); }; }

function NavigationRoute_possibleConstructorReturn(self, call) { if (call && (NavigationRoute_typeof(call) === "object" || typeof call === "function")) { return call; } return NavigationRoute_assertThisInitialized(self); }

function NavigationRoute_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NavigationRoute_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function NavigationRoute_getPrototypeOf(o) { NavigationRoute_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NavigationRoute_getPrototypeOf(o); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * NavigationRoute makes it easy to create a
 * [Route]{@link module:workbox-routing.Route} that matches for browser
 * [navigation requests]{@link https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests}.
 *
 * It will only match incoming Requests whose
 * [`mode`]{@link https://fetch.spec.whatwg.org/#concept-request-mode}
 * is set to `navigate`.
 *
 * You can optionally only apply this route to a subset of navigation requests
 * by using one or both of the `denylist` and `allowlist` parameters.
 *
 * @memberof module:workbox-routing
 * @extends module:workbox-routing.Route
 */

var NavigationRoute = /*#__PURE__*/function (_Route) {
  NavigationRoute_inherits(NavigationRoute, _Route);

  var _super = NavigationRoute_createSuper(NavigationRoute);

  /**
   * If both `denylist` and `allowlist` are provided, the `denylist` will
   * take precedence and the request will not match this route.
   *
   * The regular expressions in `allowlist` and `denylist`
   * are matched against the concatenated
   * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
   * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
   * portions of the requested URL.
   *
   * @param {module:workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {Object} options
   * @param {Array<RegExp>} [options.denylist] If any of these patterns match,
   * the route will not handle the request (even if a allowlist RegExp matches).
   * @param {Array<RegExp>} [options.allowlist=[/./]] If any of these patterns
   * match the URL's pathname and search parameter, the route will handle the
   * request (assuming the denylist doesn't match).
   */
  function NavigationRoute(handler) {
    var _this;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$allowlist = _ref.allowlist,
        allowlist = _ref$allowlist === void 0 ? [/./] : _ref$allowlist,
        _ref$denylist = _ref.denylist,
        denylist = _ref$denylist === void 0 ? [] : _ref$denylist;

    NavigationRoute_classCallCheck(this, NavigationRoute);

    if (false) {}

    _this = _super.call(this, function (options) {
      return _this._match(options);
    }, handler);
    _this._allowlist = allowlist;
    _this._denylist = denylist;
    return _this;
  }
  /**
   * Routes match handler.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {Request} options.request
   * @return {boolean}
   *
   * @private
   */


  NavigationRoute_createClass(NavigationRoute, [{
    key: "_match",
    value: function _match(_ref2) {
      var url = _ref2.url,
          request = _ref2.request;

      if (request && request.mode !== 'navigate') {
        return false;
      }

      var pathnameAndSearch = url.pathname + url.search;

      var _iterator = NavigationRoute_createForOfIteratorHelper(this._denylist),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var regExp = _step.value;

          if (regExp.test(pathnameAndSearch)) {
            if (false) {}

            return false;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (this._allowlist.some(function (regExp) {
        return regExp.test(pathnameAndSearch);
      })) {
        if (false) {}

        return true;
      }

      if (false) {}

      return false;
    }
  }]);

  return NavigationRoute;
}(Route_Route);


// CONCATENATED MODULE: ./node_modules/workbox-routing/setCatchHandler.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * If a Route throws an error while handling a request, this `handler`
 * will be called and given a chance to provide a response.
 *
 * @param {module:workbox-routing~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @memberof module:workbox-routing
 */

function setCatchHandler_setCatchHandler(handler) {
  var defaultRouter = getOrCreateDefaultRouter_getOrCreateDefaultRouter();
  defaultRouter.setCatchHandler(handler);
}


// CONCATENATED MODULE: ./node_modules/workbox-routing/setDefaultHandler.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Define a default `handler` that's called when no routes explicitly
 * match the incoming request.
 *
 * Without a default handler, unmatched requests will go against the
 * network as if there were no service worker present.
 *
 * @param {module:workbox-routing~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @memberof module:workbox-routing
 */

function setDefaultHandler_setDefaultHandler(handler) {
  var defaultRouter = getOrCreateDefaultRouter_getOrCreateDefaultRouter();
  defaultRouter.setDefaultHandler(handler);
}


// CONCATENATED MODULE: ./node_modules/workbox-routing/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * @module workbox-routing
 */


// CONCATENATED MODULE: ./node_modules/workbox-routing/index.mjs

// CONCATENATED MODULE: ./node_modules/workbox-strategies/utils/messages.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



var messages_messages = {
  strategyStart: function strategyStart(strategyName, request) {
    return "Using ".concat(strategyName, " to respond to '").concat(getFriendlyURL(request.url), "'");
  },
  printFinalResponse: function printFinalResponse(response) {
    if (response) {
      logger.groupCollapsed("View the final response here.");
      logger.log(response || '[No response returned]');
      logger.groupEnd();
    }
  }
};
// CONCATENATED MODULE: ./node_modules/workbox-strategies/CacheFirst.js
function CacheFirst_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CacheFirst_typeof = function _typeof(obj) { return typeof obj; }; } else { CacheFirst_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CacheFirst_typeof(obj); }

function CacheFirst_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = CacheFirst_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function CacheFirst_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CacheFirst_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CacheFirst_arrayLikeToArray(o, minLen); }

function CacheFirst_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CacheFirst_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function CacheFirst_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { CacheFirst_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { CacheFirst_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function CacheFirst_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CacheFirst_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CacheFirst_createClass(Constructor, protoProps, staticProps) { if (protoProps) CacheFirst_defineProperties(Constructor.prototype, protoProps); if (staticProps) CacheFirst_defineProperties(Constructor, staticProps); return Constructor; }

function CacheFirst_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CacheFirst_setPrototypeOf(subClass, superClass); }

function CacheFirst_setPrototypeOf(o, p) { CacheFirst_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CacheFirst_setPrototypeOf(o, p); }

function CacheFirst_createSuper(Derived) { var hasNativeReflectConstruct = CacheFirst_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CacheFirst_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CacheFirst_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CacheFirst_possibleConstructorReturn(this, result); }; }

function CacheFirst_possibleConstructorReturn(self, call) { if (call && (CacheFirst_typeof(call) === "object" || typeof call === "function")) { return call; } return CacheFirst_assertThisInitialized(self); }

function CacheFirst_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CacheFirst_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function CacheFirst_getPrototypeOf(o) { CacheFirst_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CacheFirst_getPrototypeOf(o); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An implementation of a [cache-first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network}
 * request strategy.
 *
 * A cache first strategy is useful for assets that have been revisioned,
 * such as URLs like `/styles/example.a8f5f1.css`, since they
 * can be cached for long periods of time.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */

var CacheFirst_CacheFirst = /*#__PURE__*/function (_Strategy) {
  CacheFirst_inherits(CacheFirst, _Strategy);

  var _super = CacheFirst_createSuper(CacheFirst);

  function CacheFirst() {
    CacheFirst_classCallCheck(this, CacheFirst);

    return _super.apply(this, arguments);
  }

  CacheFirst_createClass(CacheFirst, [{
    key: "_handle",
    value:
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    function () {
      var _handle2 = CacheFirst_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, handler) {
        var logs, response, error, _iterator, _step, log;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                logs = [];

                if (false) {}

                _context.next = 4;
                return handler.cacheMatch(request);

              case 4:
                response = _context.sent;

                if (response) {
                  _context.next = 19;
                  break;
                }

                if (false) {}

                _context.prev = 7;
                _context.next = 10;
                return handler.fetchAndCachePut(request);

              case 10:
                response = _context.sent;
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](7);
                error = _context.t0;

              case 16:
                if (false) {}

                _context.next = 20;
                break;

              case 19:
                if (false) {}

              case 20:
                if (false) {}

                if (response) {
                  _context.next = 23;
                  break;
                }

                throw new WorkboxError_WorkboxError('no-response', {
                  url: request.url,
                  error: error
                });

              case 23:
                return _context.abrupt("return", response);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 13]]);
      }));

      function _handle(_x, _x2) {
        return _handle2.apply(this, arguments);
      }

      return _handle;
    }()
  }]);

  return CacheFirst;
}(Strategy_Strategy);


// CONCATENATED MODULE: ./node_modules/workbox-strategies/CacheOnly.js
function CacheOnly_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CacheOnly_typeof = function _typeof(obj) { return typeof obj; }; } else { CacheOnly_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CacheOnly_typeof(obj); }

function CacheOnly_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function CacheOnly_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { CacheOnly_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { CacheOnly_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function CacheOnly_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CacheOnly_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CacheOnly_createClass(Constructor, protoProps, staticProps) { if (protoProps) CacheOnly_defineProperties(Constructor.prototype, protoProps); if (staticProps) CacheOnly_defineProperties(Constructor, staticProps); return Constructor; }

function CacheOnly_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CacheOnly_setPrototypeOf(subClass, superClass); }

function CacheOnly_setPrototypeOf(o, p) { CacheOnly_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CacheOnly_setPrototypeOf(o, p); }

function CacheOnly_createSuper(Derived) { var hasNativeReflectConstruct = CacheOnly_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CacheOnly_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CacheOnly_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CacheOnly_possibleConstructorReturn(this, result); }; }

function CacheOnly_possibleConstructorReturn(self, call) { if (call && (CacheOnly_typeof(call) === "object" || typeof call === "function")) { return call; } return CacheOnly_assertThisInitialized(self); }

function CacheOnly_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CacheOnly_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function CacheOnly_getPrototypeOf(o) { CacheOnly_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CacheOnly_getPrototypeOf(o); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An implementation of a
 * [cache-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If there is no cache match, this will throw a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */

var CacheOnly_CacheOnly = /*#__PURE__*/function (_Strategy) {
  CacheOnly_inherits(CacheOnly, _Strategy);

  var _super = CacheOnly_createSuper(CacheOnly);

  function CacheOnly() {
    CacheOnly_classCallCheck(this, CacheOnly);

    return _super.apply(this, arguments);
  }

  CacheOnly_createClass(CacheOnly, [{
    key: "_handle",
    value:
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    function () {
      var _handle2 = CacheOnly_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, handler) {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (false) {}

                _context.next = 3;
                return handler.cacheMatch(request);

              case 3:
                response = _context.sent;

                if (false) {}

                if (response) {
                  _context.next = 7;
                  break;
                }

                throw new WorkboxError_WorkboxError('no-response', {
                  url: request.url
                });

              case 7:
                return _context.abrupt("return", response);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _handle(_x, _x2) {
        return _handle2.apply(this, arguments);
      }

      return _handle;
    }()
  }]);

  return CacheOnly;
}(Strategy_Strategy);


// CONCATENATED MODULE: ./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js
function cacheOkAndOpaquePlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function cacheOkAndOpaquePlugin_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { cacheOkAndOpaquePlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { cacheOkAndOpaquePlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

var cacheOkAndOpaquePlugin = {
  /**
   * Returns a valid response (to allow caching) if the status is 200 (OK) or
   * 0 (opaque).
   *
   * @param {Object} options
   * @param {Response} options.response
   * @return {Response|null}
   *
   * @private
   */
  cacheWillUpdate: function () {
    var _cacheWillUpdate = cacheOkAndOpaquePlugin_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              response = _ref.response;

              if (!(response.status === 200 || response.status === 0)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", response);

            case 3:
              return _context.abrupt("return", null);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function cacheWillUpdate(_x) {
      return _cacheWillUpdate.apply(this, arguments);
    }

    return cacheWillUpdate;
  }()
};
// CONCATENATED MODULE: ./node_modules/workbox-strategies/NetworkFirst.js
function NetworkFirst_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NetworkFirst_typeof = function _typeof(obj) { return typeof obj; }; } else { NetworkFirst_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NetworkFirst_typeof(obj); }

function NetworkFirst_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = NetworkFirst_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function NetworkFirst_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return NetworkFirst_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return NetworkFirst_arrayLikeToArray(o, minLen); }

function NetworkFirst_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function NetworkFirst_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function NetworkFirst_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { NetworkFirst_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { NetworkFirst_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function NetworkFirst_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NetworkFirst_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NetworkFirst_createClass(Constructor, protoProps, staticProps) { if (protoProps) NetworkFirst_defineProperties(Constructor.prototype, protoProps); if (staticProps) NetworkFirst_defineProperties(Constructor, staticProps); return Constructor; }

function NetworkFirst_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NetworkFirst_setPrototypeOf(subClass, superClass); }

function NetworkFirst_setPrototypeOf(o, p) { NetworkFirst_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NetworkFirst_setPrototypeOf(o, p); }

function NetworkFirst_createSuper(Derived) { var hasNativeReflectConstruct = NetworkFirst_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = NetworkFirst_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = NetworkFirst_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return NetworkFirst_possibleConstructorReturn(this, result); }; }

function NetworkFirst_possibleConstructorReturn(self, call) { if (call && (NetworkFirst_typeof(call) === "object" || typeof call === "function")) { return call; } return NetworkFirst_assertThisInitialized(self); }

function NetworkFirst_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NetworkFirst_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function NetworkFirst_getPrototypeOf(o) { NetworkFirst_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NetworkFirst_getPrototypeOf(o); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [network first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache}
 * request strategy.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */

var NetworkFirst_NetworkFirst = /*#__PURE__*/function (_Strategy) {
  NetworkFirst_inherits(NetworkFirst, _Strategy);

  var _super = NetworkFirst_createSuper(NetworkFirst);

  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * [workbox-core]{@link module:workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will fallback to the cache.
   *
   * This option can be used to combat
   * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
   * scenarios.
   */
  function NetworkFirst() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    NetworkFirst_classCallCheck(this, NetworkFirst);

    _this = _super.call(this, options); // If this instance contains no plugins with a 'cacheWillUpdate' callback,
    // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.

    if (!_this.plugins.some(function (p) {
      return 'cacheWillUpdate' in p;
    })) {
      _this.plugins.unshift(cacheOkAndOpaquePlugin);
    }

    _this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;

    if (false) {}

    return _this;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {module:workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */


  NetworkFirst_createClass(NetworkFirst, [{
    key: "_handle",
    value: function () {
      var _handle2 = NetworkFirst_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, handler) {
        var logs, promises, timeoutId, _this$_getTimeoutProm, id, promise, networkPromise, response, _iterator, _step, log;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                logs = [];

                if (false) {}

                promises = [];

                if (this._networkTimeoutSeconds) {
                  _this$_getTimeoutProm = this._getTimeoutPromise({
                    request: request,
                    logs: logs,
                    handler: handler
                  }), id = _this$_getTimeoutProm.id, promise = _this$_getTimeoutProm.promise;
                  timeoutId = id;
                  promises.push(promise);
                }

                networkPromise = this._getNetworkPromise({
                  timeoutId: timeoutId,
                  request: request,
                  logs: logs,
                  handler: handler
                });
                promises.push(networkPromise);
                _context2.next = 8;
                return handler.waitUntil(NetworkFirst_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return handler.waitUntil(Promise.race(promises));

                        case 2:
                          _context.t0 = _context.sent;

                          if (_context.t0) {
                            _context.next = 7;
                            break;
                          }

                          _context.next = 6;
                          return networkPromise;

                        case 6:
                          _context.t0 = _context.sent;

                        case 7:
                          return _context.abrupt("return", _context.t0);

                        case 8:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))());

              case 8:
                response = _context2.sent;

                if (false) {}

                if (response) {
                  _context2.next = 12;
                  break;
                }

                throw new WorkboxError_WorkboxError('no-response', {
                  url: request.url
                });

              case 12:
                return _context2.abrupt("return", response);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _handle(_x, _x2) {
        return _handle2.apply(this, arguments);
      }

      return _handle;
    }()
    /**
     * @param {Object} options
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs array
     * @param {Event} options.event
     * @return {Promise<Response>}
     *
     * @private
     */

  }, {
    key: "_getTimeoutPromise",
    value: function _getTimeoutPromise(_ref2) {
      var _this2 = this;

      var request = _ref2.request,
          logs = _ref2.logs,
          handler = _ref2.handler;
      var timeoutId;
      var timeoutPromise = new Promise(function (resolve) {
        var onNetworkTimeout = /*#__PURE__*/function () {
          var _ref3 = NetworkFirst_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (false) {}

                    _context3.t0 = resolve;
                    _context3.next = 4;
                    return handler.cacheMatch(request);

                  case 4:
                    _context3.t1 = _context3.sent;
                    (0, _context3.t0)(_context3.t1);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function onNetworkTimeout() {
            return _ref3.apply(this, arguments);
          };
        }();

        timeoutId = setTimeout(onNetworkTimeout, _this2._networkTimeoutSeconds * 1000);
      });
      return {
        promise: timeoutPromise,
        id: timeoutId
      };
    }
    /**
     * @param {Object} options
     * @param {number|undefined} options.timeoutId
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs Array.
     * @param {Event} options.event
     * @return {Promise<Response>}
     *
     * @private
     */

  }, {
    key: "_getNetworkPromise",
    value: function () {
      var _getNetworkPromise2 = NetworkFirst_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref4) {
        var timeoutId, request, logs, handler, error, response;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                timeoutId = _ref4.timeoutId, request = _ref4.request, logs = _ref4.logs, handler = _ref4.handler;
                _context4.prev = 1;
                _context4.next = 4;
                return handler.fetchAndCachePut(request);

              case 4:
                response = _context4.sent;
                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](1);
                error = _context4.t0;

              case 10:
                if (timeoutId) {
                  clearTimeout(timeoutId);
                }

                if (false) {}

                if (!(error || !response)) {
                  _context4.next = 17;
                  break;
                }

                _context4.next = 15;
                return handler.cacheMatch(request);

              case 15:
                response = _context4.sent;

                if (false) {}

              case 17:
                return _context4.abrupt("return", response);

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 7]]);
      }));

      function _getNetworkPromise(_x3) {
        return _getNetworkPromise2.apply(this, arguments);
      }

      return _getNetworkPromise;
    }()
  }]);

  return NetworkFirst;
}(Strategy_Strategy);


// CONCATENATED MODULE: ./node_modules/workbox-strategies/NetworkOnly.js
function NetworkOnly_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NetworkOnly_typeof = function _typeof(obj) { return typeof obj; }; } else { NetworkOnly_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NetworkOnly_typeof(obj); }

function NetworkOnly_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function NetworkOnly_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { NetworkOnly_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { NetworkOnly_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function NetworkOnly_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NetworkOnly_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NetworkOnly_createClass(Constructor, protoProps, staticProps) { if (protoProps) NetworkOnly_defineProperties(Constructor.prototype, protoProps); if (staticProps) NetworkOnly_defineProperties(Constructor, staticProps); return Constructor; }

function NetworkOnly_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NetworkOnly_setPrototypeOf(subClass, superClass); }

function NetworkOnly_setPrototypeOf(o, p) { NetworkOnly_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NetworkOnly_setPrototypeOf(o, p); }

function NetworkOnly_createSuper(Derived) { var hasNativeReflectConstruct = NetworkOnly_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = NetworkOnly_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = NetworkOnly_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return NetworkOnly_possibleConstructorReturn(this, result); }; }

function NetworkOnly_possibleConstructorReturn(self, call) { if (call && (NetworkOnly_typeof(call) === "object" || typeof call === "function")) { return call; } return NetworkOnly_assertThisInitialized(self); }

function NetworkOnly_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NetworkOnly_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function NetworkOnly_getPrototypeOf(o) { NetworkOnly_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NetworkOnly_getPrototypeOf(o); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [network-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If the network request fails, this will throw a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */

var NetworkOnly_NetworkOnly = /*#__PURE__*/function (_Strategy) {
  NetworkOnly_inherits(NetworkOnly, _Strategy);

  var _super = NetworkOnly_createSuper(NetworkOnly);

  /**
   * @param {Object} [options]
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will result in a network error.
   */
  function NetworkOnly() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    NetworkOnly_classCallCheck(this, NetworkOnly);

    _this = _super.call(this, options);
    _this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
    return _this;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {module:workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */


  NetworkOnly_createClass(NetworkOnly, [{
    key: "_handle",
    value: function () {
      var _handle2 = NetworkOnly_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, handler) {
        var error, response, promises, timeoutPromise;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (false) {}

                error = undefined;
                _context.prev = 2;
                promises = [handler.fetch(request)];

                if (this._networkTimeoutSeconds) {
                  timeoutPromise = timeout(this._networkTimeoutSeconds * 1000);
                  promises.push(timeoutPromise);
                }

                _context.next = 7;
                return Promise.race(promises);

              case 7:
                response = _context.sent;

                if (response) {
                  _context.next = 10;
                  break;
                }

                throw new Error("Timed out the network response after " + "".concat(this._networkTimeoutSeconds, " seconds."));

              case 10:
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                error = _context.t0;

              case 15:
                if (false) {}

                if (response) {
                  _context.next = 18;
                  break;
                }

                throw new WorkboxError_WorkboxError('no-response', {
                  url: request.url,
                  error: error
                });

              case 18:
                return _context.abrupt("return", response);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 12]]);
      }));

      function _handle(_x, _x2) {
        return _handle2.apply(this, arguments);
      }

      return _handle;
    }()
  }]);

  return NetworkOnly;
}(Strategy_Strategy);


// CONCATENATED MODULE: ./node_modules/workbox-strategies/StaleWhileRevalidate.js
function StaleWhileRevalidate_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { StaleWhileRevalidate_typeof = function _typeof(obj) { return typeof obj; }; } else { StaleWhileRevalidate_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return StaleWhileRevalidate_typeof(obj); }

function StaleWhileRevalidate_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = StaleWhileRevalidate_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function StaleWhileRevalidate_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return StaleWhileRevalidate_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return StaleWhileRevalidate_arrayLikeToArray(o, minLen); }

function StaleWhileRevalidate_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function StaleWhileRevalidate_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function StaleWhileRevalidate_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { StaleWhileRevalidate_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { StaleWhileRevalidate_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function StaleWhileRevalidate_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StaleWhileRevalidate_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StaleWhileRevalidate_createClass(Constructor, protoProps, staticProps) { if (protoProps) StaleWhileRevalidate_defineProperties(Constructor.prototype, protoProps); if (staticProps) StaleWhileRevalidate_defineProperties(Constructor, staticProps); return Constructor; }

function StaleWhileRevalidate_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) StaleWhileRevalidate_setPrototypeOf(subClass, superClass); }

function StaleWhileRevalidate_setPrototypeOf(o, p) { StaleWhileRevalidate_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return StaleWhileRevalidate_setPrototypeOf(o, p); }

function StaleWhileRevalidate_createSuper(Derived) { var hasNativeReflectConstruct = StaleWhileRevalidate_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = StaleWhileRevalidate_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = StaleWhileRevalidate_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return StaleWhileRevalidate_possibleConstructorReturn(this, result); }; }

function StaleWhileRevalidate_possibleConstructorReturn(self, call) { if (call && (StaleWhileRevalidate_typeof(call) === "object" || typeof call === "function")) { return call; } return StaleWhileRevalidate_assertThisInitialized(self); }

function StaleWhileRevalidate_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function StaleWhileRevalidate_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function StaleWhileRevalidate_getPrototypeOf(o) { StaleWhileRevalidate_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return StaleWhileRevalidate_getPrototypeOf(o); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [stale-while-revalidate]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#stale-while-revalidate}
 * request strategy.
 *
 * Resources are requested from both the cache and the network in parallel.
 * The strategy will respond with the cached version if available, otherwise
 * wait for the network response. The cache is updated with the network response
 * with each successful request.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */

var StaleWhileRevalidate_StaleWhileRevalidate = /*#__PURE__*/function (_Strategy) {
  StaleWhileRevalidate_inherits(StaleWhileRevalidate, _Strategy);

  var _super = StaleWhileRevalidate_createSuper(StaleWhileRevalidate);

  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * [workbox-core]{@link module:workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   */
  function StaleWhileRevalidate(options) {
    var _this;

    StaleWhileRevalidate_classCallCheck(this, StaleWhileRevalidate);

    _this = _super.call(this, options); // If this instance contains no plugins with a 'cacheWillUpdate' callback,
    // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.

    if (!_this.plugins.some(function (p) {
      return 'cacheWillUpdate' in p;
    })) {
      _this.plugins.unshift(cacheOkAndOpaquePlugin);
    }

    return _this;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {module:workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */


  StaleWhileRevalidate_createClass(StaleWhileRevalidate, [{
    key: "_handle",
    value: function () {
      var _handle2 = StaleWhileRevalidate_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, handler) {
        var logs, fetchAndCachePromise, response, error, _iterator, _step, log;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                logs = [];

                if (false) {}

                fetchAndCachePromise = handler.fetchAndCachePut(request)["catch"](function () {// Swallow this error because a 'no-response' error will be thrown in
                  // main handler return flow. This will be in the `waitUntil()` flow.
                });
                _context.next = 5;
                return handler.cacheMatch(request);

              case 5:
                response = _context.sent;

                if (!response) {
                  _context.next = 10;
                  break;
                }

                if (false) {}

                _context.next = 20;
                break;

              case 10:
                if (false) {}

                _context.prev = 11;
                _context.next = 14;
                return fetchAndCachePromise;

              case 14:
                response = _context.sent;
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](11);
                error = _context.t0;

              case 20:
                if (false) {}

                if (response) {
                  _context.next = 23;
                  break;
                }

                throw new WorkboxError_WorkboxError('no-response', {
                  url: request.url,
                  error: error
                });

              case 23:
                return _context.abrupt("return", response);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[11, 17]]);
      }));

      function _handle(_x, _x2) {
        return _handle2.apply(this, arguments);
      }

      return _handle;
    }()
  }]);

  return StaleWhileRevalidate;
}(Strategy_Strategy);


// CONCATENATED MODULE: ./node_modules/workbox-strategies/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * There are common caching strategies that most service workers will need
 * and use. This module provides simple implementations of these strategies.
 *
 * @module workbox-strategies
 */


// CONCATENATED MODULE: ./node_modules/workbox-strategies/index.mjs

// EXTERNAL MODULE: ./node_modules/workbox-expiration/_version.js
var workbox_expiration_version = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/workbox-expiration/models/CacheTimestampsModel.js
function CacheTimestampsModel_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = CacheTimestampsModel_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function CacheTimestampsModel_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CacheTimestampsModel_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CacheTimestampsModel_arrayLikeToArray(o, minLen); }

function CacheTimestampsModel_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CacheTimestampsModel_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function CacheTimestampsModel_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { CacheTimestampsModel_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { CacheTimestampsModel_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function CacheTimestampsModel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CacheTimestampsModel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CacheTimestampsModel_createClass(Constructor, protoProps, staticProps) { if (protoProps) CacheTimestampsModel_defineProperties(Constructor.prototype, protoProps); if (staticProps) CacheTimestampsModel_defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



var DB_NAME = 'workbox-expiration';
var OBJECT_STORE_NAME = 'cache-entries';

var normalizeURL = function normalizeURL(unNormalizedUrl) {
  var url = new URL(unNormalizedUrl, location.href);
  url.hash = '';
  return url.href;
};
/**
 * Returns the timestamp model.
 *
 * @private
 */


var CacheTimestampsModel_CacheTimestampsModel = /*#__PURE__*/function () {
  /**
   *
   * @param {string} cacheName
   *
   * @private
   */
  function CacheTimestampsModel(cacheName) {
    var _this = this;

    CacheTimestampsModel_classCallCheck(this, CacheTimestampsModel);

    this._cacheName = cacheName;
    this._db = new DBWrapper(DB_NAME, 1, {
      onupgradeneeded: function onupgradeneeded(event) {
        return _this._handleUpgrade(event);
      }
    });
  }
  /**
   * Should perform an upgrade of indexedDB.
   *
   * @param {Event} event
   *
   * @private
   */


  CacheTimestampsModel_createClass(CacheTimestampsModel, [{
    key: "_handleUpgrade",
    value: function _handleUpgrade(event) {
      var db = event.target.result; // TODO(philipwalton): EdgeHTML doesn't support arrays as a keyPath, so we
      // have to use the `id` keyPath here and create our own values (a
      // concatenation of `url + cacheName`) instead of simply using
      // `keyPath: ['url', 'cacheName']`, which is supported in other browsers.

      var objStore = db.createObjectStore(OBJECT_STORE_NAME, {
        keyPath: 'id'
      }); // TODO(philipwalton): once we don't have to support EdgeHTML, we can
      // create a single index with the keyPath `['cacheName', 'timestamp']`
      // instead of doing both these indexes.

      objStore.createIndex('cacheName', 'cacheName', {
        unique: false
      });
      objStore.createIndex('timestamp', 'timestamp', {
        unique: false
      }); // Previous versions of `workbox-expiration` used `this._cacheName`
      // as the IDBDatabase name.

      deleteDatabase(this._cacheName);
    }
    /**
     * @param {string} url
     * @param {number} timestamp
     *
     * @private
     */

  }, {
    key: "setTimestamp",
    value: function () {
      var _setTimestamp = CacheTimestampsModel_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, timestamp) {
        var entry;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = normalizeURL(url);
                entry = {
                  url: url,
                  timestamp: timestamp,
                  cacheName: this._cacheName,
                  // Creating an ID from the URL and cache name won't be necessary once
                  // Edge switches to Chromium and all browsers we support work with
                  // array keyPaths.
                  id: this._getId(url)
                };
                _context.next = 4;
                return this._db.put(OBJECT_STORE_NAME, entry);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setTimestamp(_x, _x2) {
        return _setTimestamp.apply(this, arguments);
      }

      return setTimestamp;
    }()
    /**
     * Returns the timestamp stored for a given URL.
     *
     * @param {string} url
     * @return {number}
     *
     * @private
     */

  }, {
    key: "getTimestamp",
    value: function () {
      var _getTimestamp = CacheTimestampsModel_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {
        var entry;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._db.get(OBJECT_STORE_NAME, this._getId(url));

              case 2:
                entry = _context2.sent;
                return _context2.abrupt("return", entry.timestamp);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getTimestamp(_x3) {
        return _getTimestamp.apply(this, arguments);
      }

      return getTimestamp;
    }()
    /**
     * Iterates through all the entries in the object store (from newest to
     * oldest) and removes entries once either `maxCount` is reached or the
     * entry's timestamp is less than `minTimestamp`.
     *
     * @param {number} minTimestamp
     * @param {number} maxCount
     * @return {Array<string>}
     *
     * @private
     */

  }, {
    key: "expireEntries",
    value: function () {
      var _expireEntries = CacheTimestampsModel_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(minTimestamp, maxCount) {
        var _this2 = this;

        var entriesToDelete, urlsDeleted, _iterator, _step, entry;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._db.transaction(OBJECT_STORE_NAME, 'readwrite', function (txn, done) {
                  var store = txn.objectStore(OBJECT_STORE_NAME);
                  var request = store.index('timestamp').openCursor(null, 'prev');
                  var entriesToDelete = [];
                  var entriesNotDeletedCount = 0;

                  request.onsuccess = function () {
                    var cursor = request.result;

                    if (cursor) {
                      var result = cursor.value; // TODO(philipwalton): once we can use a multi-key index, we
                      // won't have to check `cacheName` here.

                      // TODO(philipwalton): once we can use a multi-key index, we
                      // won't have to check `cacheName` here.
                      if (result.cacheName === _this2._cacheName) {
                        // Delete an entry if it's older than the max age or
                        // if we already have the max number allowed.
                        if (minTimestamp && result.timestamp < minTimestamp || maxCount && entriesNotDeletedCount >= maxCount) {
                          // TODO(philipwalton): we should be able to delete the
                          // entry right here, but doing so causes an iteration
                          // bug in Safari stable (fixed in TP). Instead we can
                          // store the keys of the entries to delete, and then
                          // delete the separate transactions.
                          // https://github.com/GoogleChrome/workbox/issues/1978
                          // cursor.delete();
                          // We only need to return the URL, not the whole entry.
                          entriesToDelete.push(cursor.value);
                        } else {
                          entriesNotDeletedCount++;
                        }
                      }

                      cursor["continue"]();
                    } else {
                      done(entriesToDelete);
                    }
                  };
                });

              case 2:
                entriesToDelete = _context3.sent;
                // TODO(philipwalton): once the Safari bug in the following issue is fixed,
                // we should be able to remove this loop and do the entry deletion in the
                // cursor loop above:
                // https://github.com/GoogleChrome/workbox/issues/1978
                urlsDeleted = [];
                _iterator = CacheTimestampsModel_createForOfIteratorHelper(entriesToDelete);
                _context3.prev = 5;

                _iterator.s();

              case 7:
                if ((_step = _iterator.n()).done) {
                  _context3.next = 14;
                  break;
                }

                entry = _step.value;
                _context3.next = 11;
                return this._db["delete"](OBJECT_STORE_NAME, entry.id);

              case 11:
                urlsDeleted.push(entry.url);

              case 12:
                _context3.next = 7;
                break;

              case 14:
                _context3.next = 19;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](5);

                _iterator.e(_context3.t0);

              case 19:
                _context3.prev = 19;

                _iterator.f();

                return _context3.finish(19);

              case 22:
                return _context3.abrupt("return", urlsDeleted);

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5, 16, 19, 22]]);
      }));

      function expireEntries(_x4, _x5) {
        return _expireEntries.apply(this, arguments);
      }

      return expireEntries;
    }()
    /**
     * Takes a URL and returns an ID that will be unique in the object store.
     *
     * @param {string} url
     * @return {string}
     *
     * @private
     */

  }, {
    key: "_getId",
    value: function _getId(url) {
      // Creating an ID from the URL and cache name won't be necessary once
      // Edge switches to Chromium and all browsers we support work with
      // array keyPaths.
      return this._cacheName + '|' + normalizeURL(url);
    }
  }]);

  return CacheTimestampsModel;
}();


// CONCATENATED MODULE: ./node_modules/workbox-expiration/CacheExpiration.js
function CacheExpiration_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = CacheExpiration_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function CacheExpiration_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CacheExpiration_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CacheExpiration_arrayLikeToArray(o, minLen); }

function CacheExpiration_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CacheExpiration_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function CacheExpiration_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { CacheExpiration_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { CacheExpiration_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function CacheExpiration_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CacheExpiration_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CacheExpiration_createClass(Constructor, protoProps, staticProps) { if (protoProps) CacheExpiration_defineProperties(Constructor.prototype, protoProps); if (staticProps) CacheExpiration_defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * The `CacheExpiration` class allows you define an expiration and / or
 * limit on the number of responses stored in a
 * [`Cache`](https://developer.mozilla.org/en-US/docs/Web/API/Cache).
 *
 * @memberof module:workbox-expiration
 */

var CacheExpiration_CacheExpiration = /*#__PURE__*/function () {
  /**
   * To construct a new CacheExpiration instance you must provide at least
   * one of the `config` properties.
   *
   * @param {string} cacheName Name of the cache to apply restrictions to.
   * @param {Object} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   */
  function CacheExpiration(cacheName) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    CacheExpiration_classCallCheck(this, CacheExpiration);

    this._isRunning = false;
    this._rerunRequested = false;

    if (false) {}

    this._maxEntries = config.maxEntries;
    this._maxAgeSeconds = config.maxAgeSeconds;
    this._matchOptions = config.matchOptions;
    this._cacheName = cacheName;
    this._timestampModel = new CacheTimestampsModel_CacheTimestampsModel(cacheName);
  }
  /**
   * Expires entries for the given cache and given criteria.
   */


  CacheExpiration_createClass(CacheExpiration, [{
    key: "expireEntries",
    value: function () {
      var _expireEntries = CacheExpiration_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var minTimestamp, urlsExpired, cache, _iterator, _step, url;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this._isRunning) {
                  _context.next = 3;
                  break;
                }

                this._rerunRequested = true;
                return _context.abrupt("return");

              case 3:
                this._isRunning = true;
                minTimestamp = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1000 : 0;
                _context.next = 7;
                return this._timestampModel.expireEntries(minTimestamp, this._maxEntries);

              case 7:
                urlsExpired = _context.sent;
                _context.next = 10;
                return self.caches.open(this._cacheName);

              case 10:
                cache = _context.sent;
                _iterator = CacheExpiration_createForOfIteratorHelper(urlsExpired);
                _context.prev = 12;

                _iterator.s();

              case 14:
                if ((_step = _iterator.n()).done) {
                  _context.next = 20;
                  break;
                }

                url = _step.value;
                _context.next = 18;
                return cache["delete"](url, this._matchOptions);

              case 18:
                _context.next = 14;
                break;

              case 20:
                _context.next = 25;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](12);

                _iterator.e(_context.t0);

              case 25:
                _context.prev = 25;

                _iterator.f();

                return _context.finish(25);

              case 28:
                if (false) {}

                this._isRunning = false;

                if (this._rerunRequested) {
                  this._rerunRequested = false;
                  dontWaitFor(this.expireEntries());
                }

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[12, 22, 25, 28]]);
      }));

      function expireEntries() {
        return _expireEntries.apply(this, arguments);
      }

      return expireEntries;
    }()
    /**
     * Update the timestamp for the given URL. This ensures the when
     * removing entries based on maximum entries, most recently used
     * is accurate or when expiring, the timestamp is up-to-date.
     *
     * @param {string} url
     */

  }, {
    key: "updateTimestamp",
    value: function () {
      var _updateTimestamp = CacheExpiration_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (false) {}

                _context2.next = 3;
                return this._timestampModel.setTimestamp(url, Date.now());

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateTimestamp(_x) {
        return _updateTimestamp.apply(this, arguments);
      }

      return updateTimestamp;
    }()
    /**
     * Can be used to check if a URL has expired or not before it's used.
     *
     * This requires a look up from IndexedDB, so can be slow.
     *
     * Note: This method will not remove the cached entry, call
     * `expireEntries()` to remove indexedDB and Cache entries.
     *
     * @param {string} url
     * @return {boolean}
     */

  }, {
    key: "isURLExpired",
    value: function () {
      var _isURLExpired = CacheExpiration_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url) {
        var timestamp, expireOlderThan;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this._maxAgeSeconds) {
                  _context3.next = 6;
                  break;
                }

                if (true) {
                  _context3.next = 3;
                  break;
                }

                throw new WorkboxError_WorkboxError("expired-test-without-max-age", {
                  methodName: 'isURLExpired',
                  paramName: 'maxAgeSeconds'
                });

              case 3:
                return _context3.abrupt("return", false);

              case 6:
                _context3.next = 8;
                return this._timestampModel.getTimestamp(url);

              case 8:
                timestamp = _context3.sent;
                expireOlderThan = Date.now() - this._maxAgeSeconds * 1000;
                return _context3.abrupt("return", timestamp < expireOlderThan);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function isURLExpired(_x2) {
        return _isURLExpired.apply(this, arguments);
      }

      return isURLExpired;
    }()
    /**
     * Removes the IndexedDB object store used to keep track of cache expiration
     * metadata.
     */

  }, {
    key: "delete",
    value: function () {
      var _delete2 = CacheExpiration_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // Make sure we don't attempt another rerun if we're called in the middle of
                // a cache expiration.
                this._rerunRequested = false;
                _context4.next = 3;
                return this._timestampModel.expireEntries(Infinity);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _delete() {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);

  return CacheExpiration;
}();


// CONCATENATED MODULE: ./node_modules/workbox-expiration/ExpirationPlugin.js
function ExpirationPlugin_slicedToArray(arr, i) { return ExpirationPlugin_arrayWithHoles(arr) || ExpirationPlugin_iterableToArrayLimit(arr, i) || ExpirationPlugin_unsupportedIterableToArray(arr, i) || ExpirationPlugin_nonIterableRest(); }

function ExpirationPlugin_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ExpirationPlugin_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ExpirationPlugin_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ExpirationPlugin_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = ExpirationPlugin_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ExpirationPlugin_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ExpirationPlugin_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ExpirationPlugin_arrayLikeToArray(o, minLen); }

function ExpirationPlugin_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ExpirationPlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function ExpirationPlugin_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { ExpirationPlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { ExpirationPlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ExpirationPlugin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ExpirationPlugin_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ExpirationPlugin_createClass(Constructor, protoProps, staticProps) { if (protoProps) ExpirationPlugin_defineProperties(Constructor.prototype, protoProps); if (staticProps) ExpirationPlugin_defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









/**
 * This plugin can be used in a `workbox-strategy` to regularly enforce a
 * limit on the age and / or the number of cached requests.
 *
 * It can only be used with `workbox-strategy` instances that have a
 * [custom `cacheName` property set](/web/tools/workbox/guides/configure-workbox#custom_cache_names_in_strategies).
 * In other words, it can't be used to expire entries in strategy that uses the
 * default runtime cache name.
 *
 * Whenever a cached request is used or updated, this plugin will look
 * at the associated cache and remove any old or extra requests.
 *
 * When using `maxAgeSeconds`, requests may be used *once* after expiring
 * because the expiration clean up will not have occurred until *after* the
 * cached request has been used. If the request has a "Date" header, then
 * a light weight expiration check is performed and the request will not be
 * used immediately.
 *
 * When using `maxEntries`, the entry least-recently requested will be removed
 * from the cache first.
 *
 * @memberof module:workbox-expiration
 */

var ExpirationPlugin_ExpirationPlugin = /*#__PURE__*/function () {
  /**
   * @param {Object} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
   * automatic deletion if the available storage quota has been exceeded.
   */
  function ExpirationPlugin() {
    var _this = this;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    ExpirationPlugin_classCallCheck(this, ExpirationPlugin);

    /**
     * A "lifecycle" callback that will be triggered automatically by the
     * `workbox-strategies` handlers when a `Response` is about to be returned
     * from a [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache) to
     * the handler. It allows the `Response` to be inspected for freshness and
     * prevents it from being used if the `Response`'s `Date` header value is
     * older than the configured `maxAgeSeconds`.
     *
     * @param {Object} options
     * @param {string} options.cacheName Name of the cache the response is in.
     * @param {Response} options.cachedResponse The `Response` object that's been
     *     read from a cache and whose freshness should be checked.
     * @return {Response} Either the `cachedResponse`, if it's
     *     fresh, or `null` if the `Response` is older than `maxAgeSeconds`.
     *
     * @private
     */
    this.cachedResponseWillBeUsed = /*#__PURE__*/function () {
      var _ref2 = ExpirationPlugin_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var event, request, cacheName, cachedResponse, isFresh, cacheExpiration, updateTimestampDone;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event = _ref.event, request = _ref.request, cacheName = _ref.cacheName, cachedResponse = _ref.cachedResponse;

                if (cachedResponse) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", null);

              case 3:
                isFresh = _this._isResponseDateFresh(cachedResponse); // Expire entries to ensure that even if the expiration date has
                // expired, it'll only be used once.

                cacheExpiration = _this._getCacheExpiration(cacheName);
                dontWaitFor(cacheExpiration.expireEntries()); // Update the metadata for the request URL to the current timestamp,
                // but don't `await` it as we don't want to block the response.

                updateTimestampDone = cacheExpiration.updateTimestamp(request.url);

                if (event) {
                  try {
                    event.waitUntil(updateTimestampDone);
                  } catch (error) {
                    if (false) {}
                  }
                }

                return _context.abrupt("return", isFresh ? cachedResponse : null);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    /**
     * A "lifecycle" callback that will be triggered automatically by the
     * `workbox-strategies` handlers when an entry is added to a cache.
     *
     * @param {Object} options
     * @param {string} options.cacheName Name of the cache that was updated.
     * @param {string} options.request The Request for the cached entry.
     *
     * @private
     */


    this.cacheDidUpdate = /*#__PURE__*/function () {
      var _ref4 = ExpirationPlugin_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
        var cacheName, request, cacheExpiration;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cacheName = _ref3.cacheName, request = _ref3.request;

                if (false) {}

                cacheExpiration = _this._getCacheExpiration(cacheName);
                _context2.next = 5;
                return cacheExpiration.updateTimestamp(request.url);

              case 5:
                _context2.next = 7;
                return cacheExpiration.expireEntries();

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }();

    if (false) {}

    this._config = config;
    this._maxAgeSeconds = config.maxAgeSeconds;
    this._cacheExpirations = new Map();

    if (config.purgeOnQuotaError) {
      registerQuotaErrorCallback(function () {
        return _this.deleteCacheAndMetadata();
      });
    }
  }
  /**
   * A simple helper method to return a CacheExpiration instance for a given
   * cache name.
   *
   * @param {string} cacheName
   * @return {CacheExpiration}
   *
   * @private
   */


  ExpirationPlugin_createClass(ExpirationPlugin, [{
    key: "_getCacheExpiration",
    value: function _getCacheExpiration(cacheName) {
      if (cacheName === cacheNames.getRuntimeName()) {
        throw new WorkboxError_WorkboxError('expire-custom-caches-only');
      }

      var cacheExpiration = this._cacheExpirations.get(cacheName);

      if (!cacheExpiration) {
        cacheExpiration = new CacheExpiration_CacheExpiration(cacheName, this._config);

        this._cacheExpirations.set(cacheName, cacheExpiration);
      }

      return cacheExpiration;
    }
    /**
     * @param {Response} cachedResponse
     * @return {boolean}
     *
     * @private
     */

  }, {
    key: "_isResponseDateFresh",
    value: function _isResponseDateFresh(cachedResponse) {
      if (!this._maxAgeSeconds) {
        // We aren't expiring by age, so return true, it's fresh
        return true;
      } // Check if the 'date' header will suffice a quick expiration check.
      // See https://github.com/GoogleChromeLabs/sw-toolbox/issues/164 for
      // discussion.


      var dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);

      if (dateHeaderTimestamp === null) {
        // Unable to parse date, so assume it's fresh.
        return true;
      } // If we have a valid headerTime, then our response is fresh iff the
      // headerTime plus maxAgeSeconds is greater than the current time.


      var now = Date.now();
      return dateHeaderTimestamp >= now - this._maxAgeSeconds * 1000;
    }
    /**
     * This method will extract the data header and parse it into a useful
     * value.
     *
     * @param {Response} cachedResponse
     * @return {number|null}
     *
     * @private
     */

  }, {
    key: "_getDateHeaderTimestamp",
    value: function _getDateHeaderTimestamp(cachedResponse) {
      if (!cachedResponse.headers.has('date')) {
        return null;
      }

      var dateHeader = cachedResponse.headers.get('date');
      var parsedDate = new Date(dateHeader);
      var headerTime = parsedDate.getTime(); // If the Date header was invalid for some reason, parsedDate.getTime()
      // will return NaN.

      if (isNaN(headerTime)) {
        return null;
      }

      return headerTime;
    }
    /**
     * This is a helper method that performs two operations:
     *
     * - Deletes *all* the underlying Cache instances associated with this plugin
     * instance, by calling caches.delete() on your behalf.
     * - Deletes the metadata from IndexedDB used to keep track of expiration
     * details for each Cache instance.
     *
     * When using cache expiration, calling this method is preferable to calling
     * `caches.delete()` directly, since this will ensure that the IndexedDB
     * metadata is also cleanly removed and open IndexedDB instances are deleted.
     *
     * Note that if you're *not* using cache expiration for a given cache, calling
     * `caches.delete()` and passing in the cache's name should be sufficient.
     * There is no Workbox-specific method needed for cleanup in that case.
     */

  }, {
    key: "deleteCacheAndMetadata",
    value: function () {
      var _deleteCacheAndMetadata = ExpirationPlugin_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _iterator, _step, _step$value, cacheName, cacheExpiration;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // Do this one at a time instead of all at once via `Promise.all()` to
                // reduce the chance of inconsistency if a promise rejects.
                _iterator = ExpirationPlugin_createForOfIteratorHelper(this._cacheExpirations);
                _context3.prev = 1;

                _iterator.s();

              case 3:
                if ((_step = _iterator.n()).done) {
                  _context3.next = 11;
                  break;
                }

                _step$value = ExpirationPlugin_slicedToArray(_step.value, 2), cacheName = _step$value[0], cacheExpiration = _step$value[1];
                _context3.next = 7;
                return self.caches["delete"](cacheName);

              case 7:
                _context3.next = 9;
                return cacheExpiration["delete"]();

              case 9:
                _context3.next = 3;
                break;

              case 11:
                _context3.next = 16;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](1);

                _iterator.e(_context3.t0);

              case 16:
                _context3.prev = 16;

                _iterator.f();

                return _context3.finish(16);

              case 19:
                // Reset this._cacheExpirations to its initial state.
                this._cacheExpirations = new Map();

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 13, 16, 19]]);
      }));

      function deleteCacheAndMetadata() {
        return _deleteCacheAndMetadata.apply(this, arguments);
      }

      return deleteCacheAndMetadata;
    }()
  }]);

  return ExpirationPlugin;
}();


// CONCATENATED MODULE: ./node_modules/workbox-expiration/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * @module workbox-expiration
 */


// CONCATENATED MODULE: ./node_modules/workbox-expiration/index.mjs

// EXTERNAL MODULE: ./node_modules/workbox-cacheable-response/_version.js
var workbox_cacheable_response_version = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/workbox-cacheable-response/CacheableResponse.js
function CacheableResponse_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CacheableResponse_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CacheableResponse_createClass(Constructor, protoProps, staticProps) { if (protoProps) CacheableResponse_defineProperties(Constructor.prototype, protoProps); if (staticProps) CacheableResponse_defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * This class allows you to set up rules determining what
 * status codes and/or headers need to be present in order for a
 * [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
 * to be considered cacheable.
 *
 * @memberof module:workbox-cacheable-response
 */

var CacheableResponse = /*#__PURE__*/function () {
  /**
   * To construct a new CacheableResponse instance you must provide at least
   * one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  function CacheableResponse() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    CacheableResponse_classCallCheck(this, CacheableResponse);

    if (false) {}

    this._statuses = config.statuses;
    this._headers = config.headers;
  }
  /**
   * Checks a response to see whether it's cacheable or not, based on this
   * object's configuration.
   *
   * @param {Response} response The response whose cacheability is being
   * checked.
   * @return {boolean} `true` if the `Response` is cacheable, and `false`
   * otherwise.
   */


  CacheableResponse_createClass(CacheableResponse, [{
    key: "isResponseCacheable",
    value: function isResponseCacheable(response) {
      var _this = this;

      if (false) {}

      var cacheable = true;

      if (this._statuses) {
        cacheable = this._statuses.includes(response.status);
      }

      if (this._headers && cacheable) {
        cacheable = Object.keys(this._headers).some(function (headerName) {
          return response.headers.get(headerName) === _this._headers[headerName];
        });
      }

      if (false) { var logFriendlyHeaders; }

      return cacheable;
    }
  }]);

  return CacheableResponse;
}();


// CONCATENATED MODULE: ./node_modules/workbox-cacheable-response/CacheableResponsePlugin.js
function CacheableResponsePlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function CacheableResponsePlugin_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { CacheableResponsePlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { CacheableResponsePlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function CacheableResponsePlugin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * A class implementing the `cacheWillUpdate` lifecycle callback. This makes it
 * easier to add in cacheability checks to requests made via Workbox's built-in
 * strategies.
 *
 * @memberof module:workbox-cacheable-response
 */

var CacheableResponsePlugin_CacheableResponsePlugin =
/**
 * To construct a new CacheableResponsePlugin instance you must provide at
 * least one of the `config` properties.
 *
 * If both `statuses` and `headers` are specified, then both conditions must
 * be met for the `Response` to be considered cacheable.
 *
 * @param {Object} config
 * @param {Array<number>} [config.statuses] One or more status codes that a
 * `Response` can have and be considered cacheable.
 * @param {Object<string,string>} [config.headers] A mapping of header names
 * and expected values that a `Response` can have and be considered cacheable.
 * If multiple headers are provided, only one needs to be present.
 */
function CacheableResponsePlugin(config) {
  var _this = this;

  CacheableResponsePlugin_classCallCheck(this, CacheableResponsePlugin);

  /**
   * @param {Object} options
   * @param {Response} options.response
   * @return {Response|null}
   * @private
   */
  this.cacheWillUpdate = /*#__PURE__*/function () {
    var _ref2 = CacheableResponsePlugin_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              response = _ref.response;

              if (!_this._cacheableResponse.isResponseCacheable(response)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", response);

            case 3:
              return _context.abrupt("return", null);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  this._cacheableResponse = new CacheableResponse(config);
};


// CONCATENATED MODULE: ./node_modules/workbox-cacheable-response/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * @module workbox-cacheable-response
 */


// CONCATENATED MODULE: ./node_modules/workbox-cacheable-response/index.mjs

// CONCATENATED MODULE: ./src/scripts/globals/config.js
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
/* harmony default export */ var globals_config = (CONFIG);
// CONCATENATED MODULE: ./src/scripts/sw.js
function sw_toConsumableArray(arr) { return sw_arrayWithoutHoles(arr) || sw_iterableToArray(arr) || sw_unsupportedIterableToArray(arr) || sw_nonIterableSpread(); }

function sw_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function sw_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return sw_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return sw_arrayLikeToArray(o, minLen); }

function sw_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function sw_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return sw_arrayLikeToArray(arr); }

function sw_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









self.skipWaiting();
clientsClaim();
var PRECACHE_NAME = globals_config.PRECACHE_NAME,
    PRECACHE_PREFIX = globals_config.PRECACHE_PREFIX,
    PRECACHE_SUFFIX = globals_config.PRECACHE_SUFFIX,
    API_CACHE_NAME = globals_config.API_CACHE_NAME,
    IMAGE_CACHE_NAME = globals_config.IMAGE_CACHE_NAME;
setCacheNameDetails({
  prefix: PRECACHE_PREFIX,
  suffix: PRECACHE_SUFFIX,
  precache: PRECACHE_NAME
});
precacheAndRoute([].concat(sw_toConsumableArray([{'revision':'89fa8b3da9f0ada6dbcbf34c54f18b70','url':'0.bundle.js'},{'revision':'5aa4cfc85e92719db5fc9d9ba6d90c03','url':'1.bundle.js'},{'revision':'23ae0270b4cc3f2a38457e74284f36e2','url':'2.bundle.js'},{'revision':'a1d3766751636567752ba8c858bf7bcb','url':'3.bundle.js'},{'revision':'feb2cb06de7d6b37f1e280ae504fa0bb','url':'bundle.js'},{'revision':'f888985e2f065e81727973e6184d4327','url':'index.html'},{'revision':'4e4000f3f3877a11c5f65725160b96a2','url':'main~a910263d.css'},{'revision':'d9bbdc8ac67b9a82e41176a82ba3aa41','url':'public/assets/avatar-image.jpg'},{'revision':'36ecae0a6af53108b75d1787208640de','url':'public/assets/hero-image_4-medium.jpg'},{'revision':'c46af0f1d778f7538403a1ccad060cb7','url':'public/assets/hero-image_4-small.jpg'},{'revision':'4ea98fe648a0b853ab379c928b5fd0bf','url':'public/assets/hero-image_4.jpg'},{'revision':'11b449f5f838db38141e32cb8d784046','url':'public/assets/loader.gif'},{'revision':'fc1dd19a678b7bc54ebf76971c20338d','url':'public/assets/undraw_Location_search_re_ttoj-medium.jpg'},{'revision':'aa11c7145eb06fa6fda82626833163df','url':'public/assets/undraw_Location_search_re_ttoj-small.jpg'},{'revision':'5fd728baeb91564b0e09cb804807c1d7','url':'public/assets/undraw_Location_search_re_ttoj.png'},{'revision':'282fc12d0284fe577b1b31a3b9c13be1','url':'public/assets/undraw_empty_xct9-medium.jpg'},{'revision':'4b79aaa15c5bd014fce9aff7d2641bc6','url':'public/assets/undraw_empty_xct9-small.jpg'},{'revision':'79dbf02add07a3d4d8d48bc305583118','url':'public/assets/undraw_empty_xct9.png'},{'revision':'5a95523855b636d51e5094493a823f71','url':'public/assets/undraw_page_not_found_su7k-medium.jpg'},{'revision':'4fce2047c2f032b28e6d07cc23544b7c','url':'public/assets/undraw_page_not_found_su7k-small.jpg'},{'revision':'862261161bdc4ddc9bf11dea287d1f49','url':'public/assets/undraw_page_not_found_su7k.png'},{'revision':'ff62730b682d71ef03e75e172f613ba4','url':'public/icons/favicon.png'},{'revision':'2ef76552dc35338e09b5016fe1d81f87','url':'public/icons/icon.png'}]), [{
  url: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap',
  revision: 1
}, {
  url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
  revision: 1
}]), {
  ignoreURLParametersMatching: [/.*/]
});
registerRoute(/^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/, new NetworkFirst_NetworkFirst({
  cacheName: API_CACHE_NAME,
  plugins: [new CacheableResponsePlugin_CacheableResponsePlugin({
    statuses: [0, 200]
  }), new ExpirationPlugin_ExpirationPlugin({
    maxAgeSeconds: 60 * 60 * 24 * 30,
    maxEntries: 100
  })]
}));
registerRoute(function (_ref) {
  var request = _ref.request;
  return request.destination === 'image';
}, new CacheFirst_CacheFirst({
  cacheName: IMAGE_CACHE_NAME,
  plugins: [new CacheableResponsePlugin_CacheableResponsePlugin({
    statuses: [0, 200]
  }), new ExpirationPlugin_ExpirationPlugin({
    maxAgeSeconds: 60 * 24 * 60 * 60,
    maxEntries: 40
  })]
}));
cleanupOutdatedCaches();

/***/ })
/******/ ]);