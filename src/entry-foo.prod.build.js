!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  n((n.s = 0));
})([
  function(e, t, n) {
    const r = n(1);
    console.log(r(1, 2));
  },
  function(e, t, n) {
    const r = n(2);
    e.exports = function(e, t) {
      return r + e + t;
    };
  },
  function(e, t) {
    e.exports = 100;
  }
]);
