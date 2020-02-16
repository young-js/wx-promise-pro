"use strict"; var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }; !function (t) { function r(t, r, e, o) { var i = r && r.prototype instanceof n ? r : n, a = Object.create(i.prototype), c = new l(o || []); return a._invoke = u(t, e, c), a } function e(t, r, e) { try { return { type: "normal", arg: t.call(r, e) } } catch (t) { return { type: "throw", arg: t } } } function n() { } function o() { } function i() { } function a(t) { ["next", "throw", "return"].forEach(function (r) { t[r] = function (t) { return this._invoke(r, t) } }) } function c(t) { function r(n, o, i, a) { var c = e(t[n], t, o); if ("throw" !== c.type) { var u = c.arg, f = u.value; return f && "object" === (void 0 === f ? "undefined" : _typeof(f)) && m.call(f, "__await") ? Promise.resolve(f.__await).then(function (t) { r("next", t, i, a) }, function (t) { r("throw", t, i, a) }) : Promise.resolve(f).then(function (t) { u.value = t, i(u) }, function (t) { return r("throw", t, i, a) }) } a(c.arg) } function n(t, e) { function n() { return new Promise(function (n, o) { r(t, e, n, o) }) } return o = o ? o.then(n, n) : n() } var o; this._invoke = n } function u(t, r, n) { var o = _; return function (i, a) { if (o === O) throw new Error("Generator is already running"); if (o === S) { if ("throw" === i) throw a; return y() } for (n.method = i, n.arg = a; ;) { var c = n.delegate; if (c) { var u = f(c, n); if (u) { if (u === k) continue; return u } } if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) { if (o === _) throw o = S, n.arg; n.dispatchException(n.arg) } else "return" === n.method && n.abrupt("return", n.arg); o = O; var h = e(t, r, n); if ("normal" === h.type) { if (o = n.done ? S : j, h.arg === k) continue; return { value: h.arg, done: n.done } } "throw" === h.type && (o = S, n.method = "throw", n.arg = h.arg) } } } function f(t, r) { var n = t.iterator[r.method]; if (n === d) { if (r.delegate = null, "throw" === r.method) { if (t.iterator.return && (r.method = "return", r.arg = d, f(t, r), "throw" === r.method)) return k; r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method") } return k } var o = e(n, t.iterator, r.arg); if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, k; var i = o.arg; return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = d), r.delegate = null, k) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, k) } function h(t) { var r = { tryLoc: t[0] }; 1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r) } function s(t) { var r = t.completion || {}; r.type = "normal", delete r.arg, t.completion = r } function l(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(h, this), this.reset(!0) } function p(t) { if (t) { var r = t[w]; if (r) return r.call(t); if ("function" == typeof t.next) return t; if (!isNaN(t.length)) { var e = -1, n = function r() { for (; ++e < t.length;)if (m.call(t, e)) return r.value = t[e], r.done = !1, r; return r.value = d, r.done = !0, r }; return n.next = n } } return { next: y } } function y() { return { value: d, done: !0 } } var d, v = Object.prototype, m = v.hasOwnProperty, g = "function" == typeof Symbol ? Symbol : {}, w = g.iterator || "@@iterator", L = g.asyncIterator || "@@asyncIterator", x = g.toStringTag || "@@toStringTag", b = "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)), E = t.regeneratorRuntime; if (E) return void (b && (module.exports = E)); E = t.regeneratorRuntime = b ? module.exports : {}, E.wrap = r; var _ = "suspendedStart", j = "suspendedYield", O = "executing", S = "completed", k = {}, G = {}; G[w] = function () { return this }; var N = Object.getPrototypeOf, P = N && N(N(p([]))); P && P !== v && m.call(P, w) && (G = P); var F = i.prototype = n.prototype = Object.create(G); o.prototype = F.constructor = i, i.constructor = o, i[x] = o.displayName = "GeneratorFunction", E.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === o || "GeneratorFunction" === (r.displayName || r.name)) }, E.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, i) : (t.__proto__ = i, x in t || (t[x] = "GeneratorFunction")), t.prototype = Object.create(F), t }, E.awrap = function (t) { return { __await: t } }, a(c.prototype), c.prototype[L] = function () { return this }, E.AsyncIterator = c, E.async = function (t, e, n, o) { var i = new c(r(t, e, n, o)); return E.isGeneratorFunction(e) ? i : i.next().then(function (t) { return t.done ? t.value : i.next() }) }, a(F), F[x] = "Generator", F[w] = function () { return this }, F.toString = function () { return "[object Generator]" }, E.keys = function (t) { var r = []; for (var e in t) r.push(e); return r.reverse(), function e() { for (; r.length;) { var n = r.pop(); if (n in t) return e.value = n, e.done = !1, e } return e.done = !0, e } }, E.values = p, l.prototype = { constructor: l, reset: function (t) { if (this.prev = 0, this.next = 0, this.sent = this._sent = d, this.done = !1, this.delegate = null, this.method = "next", this.arg = d, this.tryEntries.forEach(s), !t) for (var r in this) "t" === r.charAt(0) && m.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = d) }, stop: function () { this.done = !0; var t = this.tryEntries[0], r = t.completion; if ("throw" === r.type) throw r.arg; return this.rval }, dispatchException: function (t) { function r(r, n) { return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = d), !!n } if (this.done) throw t; for (var e = this, n = this.tryEntries.length - 1; n >= 0; --n) { var o = this.tryEntries[n], i = o.completion; if ("root" === o.tryLoc) return r("end"); if (o.tryLoc <= this.prev) { var a = m.call(o, "catchLoc"), c = m.call(o, "finallyLoc"); if (a && c) { if (this.prev < o.catchLoc) return r(o.catchLoc, !0); if (this.prev < o.finallyLoc) return r(o.finallyLoc) } else if (a) { if (this.prev < o.catchLoc) return r(o.catchLoc, !0) } else { if (!c) throw new Error("try statement without catch or finally"); if (this.prev < o.finallyLoc) return r(o.finallyLoc) } } } }, abrupt: function (t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n.tryLoc <= this.prev && m.call(n, "finallyLoc") && this.prev < n.finallyLoc) { var o = n; break } } o && ("break" === t || "continue" === t) && o.tryLoc <= r && r <= o.finallyLoc && (o = null); var i = o ? o.completion : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o.finallyLoc, k) : this.complete(i) }, complete: function (t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), k }, finish: function (t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), s(e), k } }, catch: function (t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e.tryLoc === t) { var n = e.completion; if ("throw" === n.type) { var o = n.arg; s(e) } return o } } throw new Error("illegal catch attempt") }, delegateYield: function (t, r, e) { return this.delegate = { iterator: p(t), resultName: r, nextLoc: e }, "next" === this.method && (this.arg = d), k } } }(function () { return this || "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)) && self }() || Function("return this")());
