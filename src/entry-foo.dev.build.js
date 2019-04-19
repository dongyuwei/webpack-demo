(function(modules) {
  // webpackBootstrap
  // The module cache
  var installedModules = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // Create a new module (and put it into the cache)
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    });

    // Execute the module function
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );

    // Flag the module as loaded
    module.l = true;

    // Return the exports of the module
    return module.exports;
  }

  // Load entry module and return exports
  return __webpack_require__((__webpack_require__.s = "./src/entry-foo.js"));
})({
  "./src/add.js": function(module, exports, __webpack_require__) {
    eval(
      'const base = __webpack_require__("./src/base-value.js");\nmodule.exports = function add(a, b) {\n  return base + a + b;\n};\n\n\n//# sourceURL=webpack:///./src/add.js?'
    );
  },

  "./src/base-value.js": function(module, exports) {
    eval(
      "module.exports = 100;\n\n\n//# sourceURL=webpack:///./src/base-value.js?"
    );
  },

  "./src/entry-foo.js": function(module, exports, __webpack_require__) {
    eval(
      'const add = __webpack_require__("./src/add.js");\nconsole.log(add(1, 2));\n\n\n//# sourceURL=webpack:///./src/entry-foo.js?'
    );
  }
});
