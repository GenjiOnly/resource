var t, e;
t = this, e = function (t) {
    "use strict";

    function e(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function r(t) {
        for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {}, o = Object.keys(n);
            "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            })))), o.forEach((function (r) {
                e(t, r, n[r])
            }))
        }
        return t
    }

    Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "proxySDK", {
        enumerable: !0,
        get: function () {
            return yn
        }
    });
    var n = Object.create, o = Object.defineProperty, i = Object.getOwnPropertyDescriptor,
        a = Object.getOwnPropertyNames, s = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty,
        c = (t, e) => () => (e || t((e = {exports: {}}).exports, e), e.exports),
        f = (t, e, r) => (r = null != t ? n(s(t)) : {}, ((t, e, r, n) => {
            if (e && "object" === typeof e || "function" === typeof e) for (let s of a(e)) u.call(t, s) || s === r || o(t, s, {
                get: () => e[s],
                enumerable: !(n = i(e, s)) || n.enumerable
            });
            return t
        })(!e && t && t.__esModule ? r : o(r, "default", {value: t, enumerable: !0}), t)), p = c(((t, e) => {
            var r = function (t) {
                return t && t.Math == Math && t
            };
            e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof global && global) || function () {
                return this
            }() || t || Function("return this")()
        })), h = c(((t, e) => {
            e.exports = function (t) {
                try {
                    return !!t()
                } catch (e) {
                    return !0
                }
            }
        })), l = c(((t, e) => {
            var r = h();
            e.exports = !r((function () {
                return 7 != Object.defineProperty({}, 1, {
                    get: function () {
                        return 7
                    }
                })[1]
            }))
        })), v = c(((t, e) => {
            var r = h();
            e.exports = !r((function () {
                var t = function () {
                }.bind();
                return "function" != typeof t || t.hasOwnProperty("prototype")
            }))
        })), d = c(((t, e) => {
            var r = v(), n = Function.prototype.call;
            e.exports = r ? n.bind(n) : function () {
                return n.apply(n, arguments)
            }
        })), g = c((t => {
            var e = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, n = r && !e.call({1: 2}, 1);
            t.f = n ? function (t) {
                var e = r(this, t);
                return !!e && e.enumerable
            } : e
        })), y = c(((t, e) => {
            e.exports = function (t, e) {
                return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
            }
        })), m = c(((t, e) => {
            var r = v(), n = Function.prototype, o = n.call, i = r && n.bind.bind(o, o);
            e.exports = r ? i : function (t) {
                return function () {
                    return o.apply(t, arguments)
                }
            }
        })), x = c(((t, e) => {
            var r = m(), n = r({}.toString), o = r("".slice);
            e.exports = function (t) {
                return o(n(t), 8, -1)
            }
        })), b = c(((t, e) => {
            var r = m(), n = h(), o = x(), i = Object, a = r("".split);
            e.exports = n((function () {
                return !i("z").propertyIsEnumerable(0)
            })) ? function (t) {
                return "String" == o(t) ? a(t, "") : i(t)
            } : i
        })), w = c(((t, e) => {
            e.exports = function (t) {
                return null === t || void 0 === t
            }
        })), S = c(((t, e) => {
            var r = w(), n = TypeError;
            e.exports = function (t) {
                if (r(t)) throw n("Can't call method on " + t);
                return t
            }
        })), P = c(((t, e) => {
            var r = b(), n = S();
            e.exports = function (t) {
                return r(n(t))
            }
        })), R = c(((t, e) => {
            var r = "object" == typeof document && document.all, n = "undefined" == typeof r && void 0 !== r;
            e.exports = {all: r, IS_HTMLDDA: n}
        })), O = c(((t, e) => {
            var r = R(), n = r.all;
            e.exports = r.IS_HTMLDDA ? function (t) {
                return "function" == typeof t || t === n
            } : function (t) {
                return "function" == typeof t
            }
        })), L = c(((t, e) => {
            var r = O(), n = R(), o = n.all;
            e.exports = n.IS_HTMLDDA ? function (t) {
                return "object" == typeof t ? null !== t : r(t) || t === o
            } : function (t) {
                return "object" == typeof t ? null !== t : r(t)
            }
        })), j = c(((t, e) => {
            var r = p(), n = O(), o = function (t) {
                return n(t) ? t : void 0
            };
            e.exports = function (t, e) {
                return arguments.length < 2 ? o(r[t]) : r[t] && r[t][e]
            }
        })), A = c(((t, e) => {
            var r = m();
            e.exports = r({}.isPrototypeOf)
        })), E = c(((t, e) => {
            e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
        })), k = c(((t, e) => {
            var r, n, o = p(), i = E(), a = o.process, s = o.Deno, u = a && a.versions || s && s.version, c = u && u.v8;
            c && (n = (r = c.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !n && i && (!(r = i.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = i.match(/Chrome\/(\d+)/)) && (n = +r[1]), e.exports = n
        })), T = c(((t, e) => {
            var r = k(), n = h(), o = p().String;
            e.exports = !!Object.getOwnPropertySymbols && !n((function () {
                var t = Symbol();
                return !o(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41
            }))
        })), H = c(((t, e) => {
            var r = T();
            e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        })), q = c(((t, e) => {
            var r = j(), n = O(), o = A(), i = H(), a = Object;
            e.exports = i ? function (t) {
                return "symbol" == typeof t
            } : function (t) {
                var e = r("Symbol");
                return n(e) && o(e.prototype, a(t))
            }
        })), U = c(((t, e) => {
            var r = String;
            e.exports = function (t) {
                try {
                    return r(t)
                } catch (e) {
                    return "Object"
                }
            }
        })), C = c(((t, e) => {
            var r = O(), n = U(), o = TypeError;
            e.exports = function (t) {
                if (r(t)) return t;
                throw o(n(t) + " is not a function")
            }
        })), M = c(((t, e) => {
            var r = C(), n = w();
            e.exports = function (t, e) {
                var o = t[e];
                return n(o) ? void 0 : r(o)
            }
        })), I = c(((t, e) => {
            var r = d(), n = O(), o = L(), i = TypeError;
            e.exports = function (t, e) {
                var a, s;
                if ("string" === e && n(a = t.toString) && !o(s = r(a, t))) return s;
                if (n(a = t.valueOf) && !o(s = r(a, t))) return s;
                if ("string" !== e && n(a = t.toString) && !o(s = r(a, t))) return s;
                throw i("Can't convert object to primitive value")
            }
        })), F = c(((t, e) => {
            e.exports = !1
        })), D = c(((t, e) => {
            var r = p(), n = Object.defineProperty;
            e.exports = function (t, e) {
                try {
                    n(r, t, {value: e, configurable: !0, writable: !0})
                } catch (o) {
                    r[t] = e
                }
                return e
            }
        })), N = c(((t, e) => {
            var r = p(), n = D(), o = "__core-js_shared__", i = r[o] || n(o, {});
            e.exports = i
        })), _ = c(((t, e) => {
            var r = F(), n = N();
            (e.exports = function (t, e) {
                return n[t] || (n[t] = void 0 !== e ? e : {})
            })("versions", []).push({
                version: "3.31.1",
                mode: r ? "pure" : "global",
                copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.31.1/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        })), B = c(((t, e) => {
            var r = S(), n = Object;
            e.exports = function (t) {
                return n(r(t))
            }
        })), X = c(((t, e) => {
            var r = m(), n = B(), o = r({}.hasOwnProperty);
            e.exports = Object.hasOwn || function (t, e) {
                return o(n(t), e)
            }
        })), z = c(((t, e) => {
            var r = m(), n = 0, o = Math.random(), i = r(1..toString);
            e.exports = function (t) {
                return "Symbol(" + (void 0 === t ? "" : t) + ")_" + i(++n + o, 36)
            }
        })), G = c(((t, e) => {
            var r = p(), n = _(), o = X(), i = z(), a = T(), s = H(), u = r.Symbol, c = n("wks"),
                f = s ? u.for || u : u && u.withoutSetter || i;
            e.exports = function (t) {
                return o(c, t) || (c[t] = a && o(u, t) ? u[t] : f("Symbol." + t)), c[t]
            }
        })), V = c(((t, e) => {
            var r = d(), n = L(), o = q(), i = M(), a = I(), s = G(), u = TypeError, c = s("toPrimitive");
            e.exports = function (t, e) {
                if (!n(t) || o(t)) return t;
                var s, f = i(t, c);
                if (f) {
                    if (void 0 === e && (e = "default"), s = r(f, t, e), !n(s) || o(s)) return s;
                    throw u("Can't convert object to primitive value")
                }
                return void 0 === e && (e = "number"), a(t, e)
            }
        })), W = c(((t, e) => {
            var r = V(), n = q();
            e.exports = function (t) {
                var e = r(t, "string");
                return n(e) ? e : e + ""
            }
        })), $ = c(((t, e) => {
            var r = p(), n = L(), o = r.document, i = n(o) && n(o.createElement);
            e.exports = function (t) {
                return i ? o.createElement(t) : {}
            }
        })), J = c(((t, e) => {
            var r = l(), n = h(), o = $();
            e.exports = !r && !n((function () {
                return 7 != Object.defineProperty(o("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            }))
        })), K = c((t => {
            var e = l(), r = d(), n = g(), o = y(), i = P(), a = W(), s = X(), u = J(), c = Object.getOwnPropertyDescriptor;
            t.f = e ? c : function (t, e) {
                if (t = i(t), e = a(e), u) try {
                    return c(t, e)
                } catch (f) {
                }
                if (s(t, e)) return o(!r(n.f, t, e), t[e])
            }
        })), Q = c(((t, e) => {
            var r = l(), n = h();
            e.exports = r && n((function () {
                return 42 != Object.defineProperty((function () {
                }), "prototype", {value: 42, writable: !1}).prototype
            }))
        })), Y = c(((t, e) => {
            var r = L(), n = String, o = TypeError;
            e.exports = function (t) {
                if (r(t)) return t;
                throw o(n(t) + " is not an object")
            }
        })), Z = c((t => {
            var e = l(), r = J(), n = Q(), o = Y(), i = W(), a = TypeError, s = Object.defineProperty,
                u = Object.getOwnPropertyDescriptor, c = "enumerable", f = "configurable", p = "writable";
            t.f = e ? n ? function (t, e, r) {
                if (o(t), e = i(e), o(r), "function" === typeof t && "prototype" === e && "value" in r && p in r && !r[p]) {
                    var n = u(t, e);
                    n && n[p] && (t[e] = r.value, r = {
                        configurable: f in r ? r[f] : n[f],
                        enumerable: c in r ? r[c] : n[c],
                        writable: !1
                    })
                }
                return s(t, e, r)
            } : s : function (t, e, n) {
                if (o(t), e = i(e), o(n), r) try {
                    return s(t, e, n)
                } catch (u) {
                }
                if ("get" in n || "set" in n) throw a("Accessors not supported");
                return "value" in n && (t[e] = n.value), t
            }
        })), tt = c(((t, e) => {
            var r = l(), n = Z(), o = y();
            e.exports = r ? function (t, e, r) {
                return n.f(t, e, o(1, r))
            } : function (t, e, r) {
                return t[e] = r, t
            }
        })), et = c(((t, e) => {
            var r = l(), n = X(), o = Function.prototype, i = r && Object.getOwnPropertyDescriptor, a = n(o, "name"),
                s = a && "something" === function () {
                }.name, u = a && (!r || r && i(o, "name").configurable);
            e.exports = {EXISTS: a, PROPER: s, CONFIGURABLE: u}
        })), rt = c(((t, e) => {
            var r = m(), n = O(), o = N(), i = r(Function.toString);
            n(o.inspectSource) || (o.inspectSource = function (t) {
                return i(t)
            }), e.exports = o.inspectSource
        })), nt = c(((t, e) => {
            var r = p(), n = O(), o = r.WeakMap;
            e.exports = n(o) && /native code/.test(String(o))
        })), ot = c(((t, e) => {
            var r = _(), n = z(), o = r("keys");
            e.exports = function (t) {
                return o[t] || (o[t] = n(t))
            }
        })), it = c(((t, e) => {
            e.exports = {}
        })), at = c(((t, e) => {
            var r, n, o, i, a, s = nt(), u = p(), c = L(), f = tt(), h = X(), l = N(), v = ot(), d = it(),
                g = "Object already initialized", y = u.TypeError, m = u.WeakMap;
            s || l.state ? ((i = l.state || (l.state = new m)).get = i.get, i.has = i.has, i.set = i.set, r = function (t, e) {
                if (i.has(t)) throw y(g);
                return e.facade = t, i.set(t, e), e
            }, n = function (t) {
                return i.get(t) || {}
            }, o = function (t) {
                return i.has(t)
            }) : (d[a = v("state")] = !0, r = function (t, e) {
                if (h(t, a)) throw y(g);
                return e.facade = t, f(t, a, e), e
            }, n = function (t) {
                return h(t, a) ? t[a] : {}
            }, o = function (t) {
                return h(t, a)
            }), e.exports = {
                set: r, get: n, has: o, enforce: function (t) {
                    return o(t) ? n(t) : r(t, {})
                }, getterFor: function (t) {
                    return function (e) {
                        var r;
                        if (!c(e) || (r = n(e)).type !== t) throw y("Incompatible receiver, " + t + " required");
                        return r
                    }
                }
            }
        })), st = c(((t, e) => {
            var r = m(), n = h(), o = O(), i = X(), a = l(), s = et().CONFIGURABLE, u = rt(), c = at(), f = c.enforce,
                p = c.get, v = String, d = Object.defineProperty, g = r("".slice), y = r("".replace), x = r([].join),
                b = a && !n((function () {
                    return 8 !== d((function () {
                    }), "length", {value: 8}).length
                })), w = String(String).split("String"), S = e.exports = function (t, e, r) {
                    "Symbol(" === g(v(e), 0, 7) && (e = "[" + y(v(e), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (e = "get " + e), r && r.setter && (e = "set " + e), (!i(t, "name") || s && t.name !== e) && (a ? d(t, "name", {
                        value: e,
                        configurable: !0
                    }) : t.name = e), b && r && i(r, "arity") && t.length !== r.arity && d(t, "length", {value: r.arity});
                    try {
                        r && i(r, "constructor") && r.constructor ? a && d(t, "prototype", {writable: !1}) : t.prototype && (t.prototype = void 0)
                    } catch (o) {
                    }
                    var n = f(t);
                    return i(n, "source") || (n.source = x(w, "string" == typeof e ? e : "")), t
                };
            Function.prototype.toString = S((function () {
                return o(this) && p(this).source || u(this)
            }), "toString")
        })), ut = c(((t, e) => {
            var r = O(), n = Z(), o = st(), i = D();
            e.exports = function (t, e, a, s) {
                s || (s = {});
                var u = s.enumerable, c = void 0 !== s.name ? s.name : e;
                if (r(a) && o(a, c, s), s.global) u ? t[e] = a : i(e, a); else {
                    try {
                        s.unsafe ? t[e] && (u = !0) : delete t[e]
                    } catch (f) {
                    }
                    u ? t[e] = a : n.f(t, e, {
                        value: a,
                        enumerable: !1,
                        configurable: !s.nonConfigurable,
                        writable: !s.nonWritable
                    })
                }
                return t
            }
        })), ct = c(((t, e) => {
            var r = Math.ceil, n = Math.floor;
            e.exports = Math.trunc || function (t) {
                var e = +t;
                return (e > 0 ? n : r)(e)
            }
        })), ft = c(((t, e) => {
            var r = ct();
            e.exports = function (t) {
                var e = +t;
                return e !== e || 0 === e ? 0 : r(e)
            }
        })), pt = c(((t, e) => {
            var r = ft(), n = Math.max, o = Math.min;
            e.exports = function (t, e) {
                var i = r(t);
                return i < 0 ? n(i + e, 0) : o(i, e)
            }
        })), ht = c(((t, e) => {
            var r = ft(), n = Math.min;
            e.exports = function (t) {
                return t > 0 ? n(r(t), 9007199254740991) : 0
            }
        })), lt = c(((t, e) => {
            var r = ht();
            e.exports = function (t) {
                return r(t.length)
            }
        })), vt = c(((t, e) => {
            var r = P(), n = pt(), o = lt(), i = function (t) {
                return function (e, i, a) {
                    var s, u = r(e), c = o(u), f = n(a, c);
                    if (t && i != i) {
                        for (; c > f;) if ((s = u[f++]) != s) return !0
                    } else for (; c > f; f++) if ((t || f in u) && u[f] === i) return t || f || 0;
                    return !t && -1
                }
            };
            e.exports = {includes: i(!0), indexOf: i(!1)}
        })), dt = c(((t, e) => {
            var r = m(), n = X(), o = P(), i = vt().indexOf, a = it(), s = r([].push);
            e.exports = function (t, e) {
                var r, u = o(t), c = 0, f = [];
                for (r in u) !n(a, r) && n(u, r) && s(f, r);
                for (; e.length > c;) n(u, r = e[c++]) && (~i(f, r) || s(f, r));
                return f
            }
        })), gt = c(((t, e) => {
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        })), yt = c((t => {
            var e = dt(), r = gt().concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function (t) {
                return e(t, r)
            }
        })), mt = c((t => {
            t.f = Object.getOwnPropertySymbols
        })), xt = c(((t, e) => {
            var r = j(), n = m(), o = yt(), i = mt(), a = Y(), s = n([].concat);
            e.exports = r("Reflect", "ownKeys") || function (t) {
                var e = o.f(a(t)), r = i.f;
                return r ? s(e, r(t)) : e
            }
        })), bt = c(((t, e) => {
            var r = X(), n = xt(), o = K(), i = Z();
            e.exports = function (t, e, a) {
                for (var s = n(e), u = i.f, c = o.f, f = 0; f < s.length; f++) {
                    var p = s[f];
                    r(t, p) || a && r(a, p) || u(t, p, c(e, p))
                }
            }
        })), wt = c(((t, e) => {
            var r = h(), n = O(), o = /#|\.prototype\./, i = function (t, e) {
                var o = s[a(t)];
                return o == c || o != u && (n(e) ? r(e) : !!e)
            }, a = i.normalize = function (t) {
                return String(t).replace(o, ".").toLowerCase()
            }, s = i.data = {}, u = i.NATIVE = "N", c = i.POLYFILL = "P";
            e.exports = i
        })), St = c(((t, e) => {
            var r = p(), n = K().f, o = tt(), i = ut(), a = D(), s = bt(), u = wt();
            e.exports = function (t, e) {
                var c, f, p, h, l, v = t.target, d = t.global, g = t.stat;
                if (c = d ? r : g ? r[v] || a(v, {}) : (r[v] || {}).prototype) for (f in e) {
                    if (h = e[f], p = t.dontCallGetSet ? (l = n(c, f)) && l.value : c[f], !u(d ? f : v + (g ? "." : "#") + f, t.forced) && void 0 !== p) {
                        if (typeof h == typeof p) continue;
                        s(h, p)
                    }
                    (t.sham || p && p.sham) && o(h, "sham", !0), i(c, f, h, t)
                }
            }
        })), Pt = c(((t, e) => {
            var r = h();
            e.exports = !r((function () {
                function t() {
                }

                return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
            }))
        })), Rt = c(((t, e) => {
            var r = X(), n = O(), o = B(), i = ot(), a = Pt(), s = i("IE_PROTO"), u = Object, c = u.prototype;
            e.exports = a ? u.getPrototypeOf : function (t) {
                var e = o(t);
                if (r(e, s)) return e[s];
                var i = e.constructor;
                return n(i) && e instanceof i ? i.prototype : e instanceof u ? c : null
            }
        })), Ot = c(((t, e) => {
            var r = m(), n = C();
            e.exports = function (t, e, o) {
                try {
                    return r(n(Object.getOwnPropertyDescriptor(t, e)[o]))
                } catch (i) {
                }
            }
        })), Lt = c(((t, e) => {
            var r = O(), n = String, o = TypeError;
            e.exports = function (t) {
                if ("object" == typeof t || r(t)) return t;
                throw o("Can't set " + n(t) + " as a prototype")
            }
        })), jt = c(((t, e) => {
            var r = Ot(), n = Y(), o = Lt();
            e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
                var t, e = !1, i = {};
                try {
                    (t = r(Object.prototype, "__proto__", "set"))(i, []), e = i instanceof Array
                } catch (a) {
                }
                return function (r, i) {
                    return n(r), o(i), e ? t(r, i) : r.__proto__ = i, r
                }
            }() : void 0)
        })), At = c(((t, e) => {
            var r = dt(), n = gt();
            e.exports = Object.keys || function (t) {
                return r(t, n)
            }
        })), Et = c((t => {
            var e = l(), r = Q(), n = Z(), o = Y(), i = P(), a = At();
            t.f = e && !r ? Object.defineProperties : function (t, e) {
                o(t);
                for (var r, s = i(e), u = a(e), c = u.length, f = 0; c > f;) n.f(t, r = u[f++], s[r]);
                return t
            }
        })), kt = c(((t, e) => {
            var r = j();
            e.exports = r("document", "documentElement")
        })), Tt = c(((t, e) => {
            var r, n = Y(), o = Et(), i = gt(), a = it(), s = kt(), u = $(), c = ot(), f = "prototype", p = "script",
                h = c("IE_PROTO"), l = function () {
                }, v = function (t) {
                    return "<script>" + t + "</" + p + ">"
                }, d = function (t) {
                    t.write(v("")), t.close();
                    var e = t.parentWindow.Object;
                    return t = null, e
                }, g = function () {
                    try {
                        r = new ActiveXObject("htmlfile")
                    } catch (e) {
                    }
                    g = "undefined" != typeof document ? document.domain && r ? d(r) : function () {
                        var t, e = u("iframe");
                        return e.style.display = "none", s.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(v("document.F=Object")), t.close(), t.F
                    }() : d(r);
                    for (var t = i.length; t--;) delete g[f][i[t]];
                    return g()
                };
            a[h] = !0, e.exports = Object.create || function (t, e) {
                var r;
                return null !== t ? (l[f] = n(t), r = new l, l[f] = null, r[h] = t) : r = g(), void 0 === e ? r : o.f(r, e)
            }
        })), Ht = c(((t, e) => {
            var r = L(), n = tt();
            e.exports = function (t, e) {
                r(e) && "cause" in e && n(t, "cause", e.cause)
            }
        })), qt = c(((t, e) => {
            var r = m(), n = Error, o = r("".replace), i = String(n("zxcasd").stack), a = /\n\s*at [^:]*:[^\n]*/,
                s = a.test(i);
            e.exports = function (t, e) {
                if (s && "string" == typeof t && !n.prepareStackTrace) for (; e--;) t = o(t, a, "");
                return t
            }
        })), Ut = c(((t, e) => {
            var r = h(), n = y();
            e.exports = !r((function () {
                var t = Error("a");
                return !("stack" in t) || (Object.defineProperty(t, "stack", n(1, 7)), 7 !== t.stack)
            }))
        })), Ct = c(((t, e) => {
            var r = tt(), n = qt(), o = Ut(), i = Error.captureStackTrace;
            e.exports = function (t, e, a, s) {
                o && (i ? i(t, e) : r(t, "stack", n(a, s)))
            }
        })), Mt = c(((t, e) => {
            var r = x(), n = m();
            e.exports = function (t) {
                if ("Function" === r(t)) return n(t)
            }
        })), It = c(((t, e) => {
            var r = Mt(), n = C(), o = v(), i = r(r.bind);
            e.exports = function (t, e) {
                return n(t), void 0 === e ? t : o ? i(t, e) : function () {
                    return t.apply(e, arguments)
                }
            }
        })), Ft = c(((t, e) => {
            e.exports = {}
        })), Dt = c(((t, e) => {
            var r = G(), n = Ft(), o = r("iterator"), i = Array.prototype;
            e.exports = function (t) {
                return void 0 !== t && (n.Array === t || i[o] === t)
            }
        })), Nt = c(((t, e) => {
            var r = {};
            r[G()("toStringTag")] = "z", e.exports = "[object z]" === String(r)
        })), _t = c(((t, e) => {
            var r = Nt(), n = O(), o = x(), i = G()("toStringTag"), a = Object, s = "Arguments" == o(function () {
                return arguments
            }());
            e.exports = r ? o : function (t) {
                var e, r, u;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) {
                    try {
                        return t[e]
                    } catch (r) {
                    }
                }(e = a(t), i)) ? r : s ? o(e) : "Object" == (u = o(e)) && n(e.callee) ? "Arguments" : u
            }
        })), Bt = c(((t, e) => {
            var r = _t(), n = M(), o = w(), i = Ft(), a = G()("iterator");
            e.exports = function (t) {
                if (!o(t)) return n(t, a) || n(t, "@@iterator") || i[r(t)]
            }
        })), Xt = c(((t, e) => {
            var r = d(), n = C(), o = Y(), i = U(), a = Bt(), s = TypeError;
            e.exports = function (t, e) {
                var u = arguments.length < 2 ? a(t) : e;
                if (n(u)) return o(r(u, t));
                throw s(i(t) + " is not iterable")
            }
        })), zt = c(((t, e) => {
            var r = d(), n = Y(), o = M();
            e.exports = function (t, e, i) {
                var a, s;
                n(t);
                try {
                    if (!(a = o(t, "return"))) {
                        if ("throw" === e) throw i;
                        return i
                    }
                    a = r(a, t)
                } catch (u) {
                    s = !0, a = u
                }
                if ("throw" === e) throw i;
                if (s) throw a;
                return n(a), i
            }
        })), Gt = c(((t, e) => {
            var r = It(), n = d(), o = Y(), i = U(), a = Dt(), s = lt(), u = A(), c = Xt(), f = Bt(), p = zt(),
                h = TypeError, l = function (t, e) {
                    this.stopped = t, this.result = e
                }, v = l.prototype;
            e.exports = function (t, e, d) {
                var g, y, m, x, b, w, S, P = d && d.that, R = !(!d || !d.AS_ENTRIES), O = !(!d || !d.IS_RECORD),
                    L = !(!d || !d.IS_ITERATOR), j = !(!d || !d.INTERRUPTED), A = r(e, P), E = function (t) {
                        return g && p(g, "normal", t), new l(!0, t)
                    }, k = function (t) {
                        return R ? (o(t), j ? A(t[0], t[1], E) : A(t[0], t[1])) : j ? A(t, E) : A(t)
                    };
                if (O) g = t.iterator; else if (L) g = t; else {
                    if (!(y = f(t))) throw h(i(t) + " is not iterable");
                    if (a(y)) {
                        for (m = 0, x = s(t); x > m; m++) if ((b = k(t[m])) && u(v, b)) return b;
                        return new l(!1)
                    }
                    g = c(t, y)
                }
                for (w = O ? t.next : g.next; !(S = n(w, g)).done;) {
                    try {
                        b = k(S.value)
                    } catch (T) {
                        p(g, "throw", T)
                    }
                    if ("object" == typeof b && b && u(v, b)) return b
                }
                return new l(!1)
            }
        })), Vt = c(((t, e) => {
            var r = _t(), n = String;
            e.exports = function (t) {
                if ("Symbol" === r(t)) throw TypeError("Cannot convert a Symbol value to a string");
                return n(t)
            }
        })), Wt = c(((t, e) => {
            var r = Vt();
            e.exports = function (t, e) {
                return void 0 === t ? arguments.length < 2 ? "" : e : r(t)
            }
        })), $t = c((() => {
            var t = St(), e = A(), r = Rt(), n = jt(), o = bt(), i = Tt(), a = tt(), s = y(), u = Ht(), c = Ct(), f = Gt(),
                p = Wt(), h = G()("toStringTag"), l = Error, v = [].push, d = function (t, o) {
                    var s, y = e(g, this);
                    n ? s = n(l(), y ? r(this) : g) : (s = y ? this : i(g), a(s, h, "Error")), void 0 !== o && a(s, "message", p(o)), c(s, d, s.stack, 1), arguments.length > 2 && u(s, arguments[2]);
                    var m = [];
                    return f(t, v, {that: m}), a(s, "errors", m), s
                };
            n ? n(d, l) : o(d, l, {name: !0});
            var g = d.prototype = i(l.prototype, {constructor: s(1, d), message: s(1, ""), name: s(1, "AggregateError")});
            t({global: !0, constructor: !0, arity: 2}, {AggregateError: d})
        })), Jt = c((() => {
            $t()
        })), Kt = c(((t, e) => {
            var r = G(), n = Tt(), o = Z().f, i = r("unscopables"), a = Array.prototype;
            void 0 == a[i] && o(a, i, {configurable: !0, value: n(null)}), e.exports = function (t) {
                a[i][t] = !0
            }
        })), Qt = c(((t, e) => {
            var r, n, o, i = h(), a = O(), s = L(), u = Tt(), c = Rt(), f = ut(), p = G(), l = F(), v = p("iterator"),
                d = !1;
            [].keys && ("next" in (o = [].keys()) ? (n = c(c(o))) !== Object.prototype && (r = n) : d = !0), !s(r) || i((function () {
                var t = {};
                return r[v].call(t) !== t
            })) ? r = {} : l && (r = u(r)), a(r[v]) || f(r, v, (function () {
                return this
            })), e.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: d}
        })), Yt = c(((t, e) => {
            var r = Z().f, n = X(), o = G()("toStringTag");
            e.exports = function (t, e, i) {
                t && !i && (t = t.prototype), t && !n(t, o) && r(t, o, {configurable: !0, value: e})
            }
        })), Zt = c(((t, e) => {
            var r = Qt().IteratorPrototype, n = Tt(), o = y(), i = Yt(), a = Ft(), s = function () {
                return this
            };
            e.exports = function (t, e, u, c) {
                var f = e + " Iterator";
                return t.prototype = n(r, {next: o(+!c, u)}), i(t, f, !1, !0), a[f] = s, t
            }
        })), te = c(((t, e) => {
            var r = St(), n = d(), o = F(), i = et(), a = O(), s = Zt(), u = Rt(), c = jt(), f = Yt(), p = tt(), h = ut(),
                l = G(), v = Ft(), g = Qt(), y = i.PROPER, m = i.CONFIGURABLE, x = g.IteratorPrototype,
                b = g.BUGGY_SAFARI_ITERATORS, w = l("iterator"), S = "keys", P = "values", R = "entries", L = function () {
                    return this
                };
            e.exports = function (t, e, i, l, d, g, O) {
                s(i, e, l);
                var j, A, E, k = function (t) {
                        if (t === d && C) return C;
                        if (!b && t in q) return q[t];
                        switch (t) {
                            case S:
                            case P:
                            case R:
                                return function () {
                                    return new i(this, t)
                                }
                        }
                        return function () {
                            return new i(this)
                        }
                    }, T = e + " Iterator", H = !1, q = t.prototype, U = q[w] || q["@@iterator"] || d && q[d],
                    C = !b && U || k(d), M = "Array" == e && q.entries || U;
                if (M && (j = u(M.call(new t))) !== Object.prototype && j.next && (o || u(j) === x || (c ? c(j, x) : a(j[w]) || h(j, w, L)), f(j, T, !0, !0), o && (v[T] = L)), y && d == P && U && U.name !== P && (!o && m ? p(q, "name", P) : (H = !0, C = function () {
                    return n(U, this)
                })), d) if (A = {
                    values: k(P),
                    keys: g ? C : k(S),
                    entries: k(R)
                }, O) for (E in A) (b || H || !(E in q)) && h(q, E, A[E]); else r({
                    target: e,
                    proto: !0,
                    forced: b || H
                }, A);
                return o && !O || q[w] === C || h(q, w, C, {name: d}), v[e] = C, A
            }
        })), ee = c(((t, e) => {
            e.exports = function (t, e) {
                return {value: t, done: e}
            }
        })), re = c(((t, e) => {
            var r = P(), n = Kt(), o = Ft(), i = at(), a = Z().f, s = te(), u = ee(), c = F(), f = l(),
                p = "Array Iterator", h = i.set, v = i.getterFor(p);
            e.exports = s(Array, "Array", (function (t, e) {
                h(this, {type: p, target: r(t), index: 0, kind: e})
            }), (function () {
                var t = v(this), e = t.target, r = t.kind, n = t.index++;
                return !e || n >= e.length ? (t.target = void 0, u(void 0, !0)) : u("keys" == r ? n : "values" == r ? e[n] : [n, e[n]], !1)
            }), "values");
            var d = o.Arguments = o.Array;
            if (n("keys"), n("values"), n("entries"), !c && f && "values" !== d.name) try {
                a(d, "name", {value: "values"})
            } catch (g) {
            }
        })), ne = c(((t, e) => {
            var r = Nt(), n = _t();
            e.exports = r ? {}.toString : function () {
                return "[object " + n(this) + "]"
            }
        })), oe = c((() => {
            var t = Nt(), e = ut(), r = ne();
            t || e(Object.prototype, "toString", r, {unsafe: !0})
        })), ie = c(((t, e) => {
            var r = x();
            e.exports = "undefined" != typeof process && "process" == r(process)
        })), ae = c(((t, e) => {
            var r = st(), n = Z();
            e.exports = function (t, e, o) {
                return o.get && r(o.get, e, {getter: !0}), o.set && r(o.set, e, {setter: !0}), n.f(t, e, o)
            }
        })), se = c(((t, e) => {
            var r = j(), n = ae(), o = G(), i = l(), a = o("species");
            e.exports = function (t) {
                var e = r(t);
                i && e && !e[a] && n(e, a, {
                    configurable: !0, get: function () {
                        return this
                    }
                })
            }
        })), ue = c(((t, e) => {
            var r = A(), n = TypeError;
            e.exports = function (t, e) {
                if (r(e, t)) return t;
                throw n("Incorrect invocation")
            }
        })), ce = c(((t, e) => {
            var r = m(), n = h(), o = O(), i = _t(), a = j(), s = rt(), u = function () {
                }, c = [], f = a("Reflect", "construct"), p = /^\s*(?:class|function)\b/, l = r(p.exec), v = !p.exec(u),
                d = function (t) {
                    if (!o(t)) return !1;
                    try {
                        return f(u, c, t), !0
                    } catch (e) {
                        return !1
                    }
                }, g = function (t) {
                    if (!o(t)) return !1;
                    switch (i(t)) {
                        case"AsyncFunction":
                        case"GeneratorFunction":
                        case"AsyncGeneratorFunction":
                            return !1
                    }
                    try {
                        return v || !!l(p, s(t))
                    } catch (e) {
                        return !0
                    }
                };
            g.sham = !0, e.exports = !f || n((function () {
                var t;
                return d(d.call) || !d(Object) || !d((function () {
                    t = !0
                })) || t
            })) ? g : d
        })), fe = c(((t, e) => {
            var r = ce(), n = U(), o = TypeError;
            e.exports = function (t) {
                if (r(t)) return t;
                throw o(n(t) + " is not a constructor")
            }
        })), pe = c(((t, e) => {
            var r = Y(), n = fe(), o = w(), i = G()("species");
            e.exports = function (t, e) {
                var a, s = r(t).constructor;
                return void 0 === s || o(a = r(s)[i]) ? e : n(a)
            }
        })), he = c(((t, e) => {
            var r = v(), n = Function.prototype, o = n.apply, i = n.call;
            e.exports = "object" == typeof Reflect && Reflect.apply || (r ? i.bind(o) : function () {
                return i.apply(o, arguments)
            })
        })), le = c(((t, e) => {
            var r = m();
            e.exports = r([].slice)
        })), ve = c(((t, e) => {
            var r = TypeError;
            e.exports = function (t, e) {
                if (t < e) throw r("Not enough arguments");
                return t
            }
        })), de = c(((t, e) => {
            var r = E();
            e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r)
        })), ge = c(((t, e) => {
            var r, n, o, i, a = p(), s = he(), u = It(), c = O(), f = X(), l = h(), v = kt(), d = le(), g = $(), y = ve(),
                m = de(), x = ie(), b = a.setImmediate, w = a.clearImmediate, S = a.process, P = a.Dispatch, R = a.Function,
                L = a.MessageChannel, j = a.String, A = 0, E = {}, k = "onreadystatechange";
            l((function () {
                r = a.location
            }));
            var T = function (t) {
                if (f(E, t)) {
                    var e = E[t];
                    delete E[t], e()
                }
            }, H = function (t) {
                return function () {
                    T(t)
                }
            }, q = function (t) {
                T(t.data)
            }, U = function (t) {
                a.postMessage(j(t), r.protocol + "//" + r.host)
            };
            b && w || (b = function (t) {
                y(arguments.length, 1);
                var e = c(t) ? t : R(t), r = d(arguments, 1);
                return E[++A] = function () {
                    s(e, void 0, r)
                }, n(A), A
            }, w = function (t) {
                delete E[t]
            }, x ? n = function (t) {
                S.nextTick(H(t))
            } : P && P.now ? n = function (t) {
                P.now(H(t))
            } : L && !m ? (i = (o = new L).port2, o.port1.onmessage = q, n = u(i.postMessage, i)) : a.addEventListener && c(a.postMessage) && !a.importScripts && r && "file:" !== r.protocol && !l(U) ? (n = U, a.addEventListener("message", q, !1)) : n = k in g("script") ? function (t) {
                v.appendChild(g("script"))[k] = function () {
                    v.removeChild(this), T(t)
                }
            } : function (t) {
                setTimeout(H(t), 0)
            }), e.exports = {set: b, clear: w}
        })), ye = c(((t, e) => {
            var r = function () {
                this.head = null, this.tail = null
            };
            r.prototype = {
                add: function (t) {
                    var e = {item: t, next: null}, r = this.tail;
                    r ? r.next = e : this.head = e, this.tail = e
                }, get: function () {
                    var t = this.head;
                    if (t) return null === (this.head = t.next) && (this.tail = null), t.item
                }
            }, e.exports = r
        })), me = c(((t, e) => {
            var r = E();
            e.exports = /ipad|iphone|ipod/i.test(r) && "undefined" != typeof Pebble
        })), xe = c(((t, e) => {
            var r = E();
            e.exports = /web0s(?!.*chrome)/i.test(r)
        })), be = c(((t, e) => {
            var r, n, o, i, a, s, u, c = p(), f = It(), h = K().f, l = ge().set, v = ye(), d = de(), g = me(), y = xe(),
                m = ie(), x = c.MutationObserver || c.WebKitMutationObserver, b = c.document, w = c.process, S = c.Promise,
                P = h(c, "queueMicrotask"), R = P && P.value;
            R || (s = new v, u = function () {
                var t, e;
                for (m && (t = w.domain) && t.exit(); e = s.get();) try {
                    e()
                } catch (n) {
                    throw s.head && r(), n
                }
                t && t.enter()
            }, d || m || y || !x || !b ? !g && S && S.resolve ? ((i = S.resolve(void 0)).constructor = S, a = f(i.then, i), r = function () {
                a(u)
            }) : m ? r = function () {
                w.nextTick(u)
            } : (l = f(l, c), r = function () {
                l(u)
            }) : (n = !0, o = b.createTextNode(""), new x(u).observe(o, {characterData: !0}), r = function () {
                o.data = n = !n
            }), R = function (t) {
                s.head || r(), s.add(t)
            }), e.exports = R
        })), we = c(((t, e) => {
            e.exports = function (t, e) {
            }
        })), Se = c(((t, e) => {
            e.exports = function (t) {
                try {
                    return {error: !1, value: t()}
                } catch (e) {
                    return {error: !0, value: e}
                }
            }
        })), Pe = c(((t, e) => {
            var r = p();
            e.exports = r.Promise
        })), Re = c(((t, e) => {
            e.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version
        })), Oe = c(((t, e) => {
            var r = Re(), n = ie();
            e.exports = !r && !n && "object" == typeof window && "object" == typeof document
        })), Le = c(((t, e) => {
            var r = p(), n = Pe(), o = O(), i = wt(), a = rt(), s = G(), u = Oe(), c = Re(), f = F(), h = k(),
                l = n && n.prototype, v = s("species"), d = !1, g = o(r.PromiseRejectionEvent),
                y = i("Promise", (function () {
                    var t = a(n), e = t !== String(n);
                    if (!e && 66 === h) return !0;
                    if (f && (!l.catch || !l.finally)) return !0;
                    if (!h || h < 51 || !/native code/.test(t)) {
                        var r = new n((function (t) {
                            t(1)
                        })), o = function (t) {
                            t((function () {
                            }), (function () {
                            }))
                        };
                        if ((r.constructor = {})[v] = o, !(d = r.then((function () {
                        })) instanceof o)) return !0
                    }
                    return !e && (u || c) && !g
                }));
            e.exports = {CONSTRUCTOR: y, REJECTION_EVENT: g, SUBCLASSING: d}
        })), je = c(((t, e) => {
            var r = C(), n = TypeError, o = function (t) {
                var e, o;
                this.promise = new t((function (t, r) {
                    if (void 0 !== e || void 0 !== o) throw n("Bad Promise constructor");
                    e = t, o = r
                })), this.resolve = r(e), this.reject = r(o)
            };
            e.exports.f = function (t) {
                return new o(t)
            }
        })), Ae = c((() => {
            var t, e, r, n = St(), o = F(), i = ie(), a = p(), s = d(), u = ut(), c = jt(), f = Yt(), h = se(), l = C(),
                v = O(), g = L(), y = ue(), m = pe(), x = ge().set, b = be(), w = we(), S = Se(), P = ye(), R = at(),
                j = Pe(), A = Le(), E = je(), k = "Promise", T = A.CONSTRUCTOR, H = A.REJECTION_EVENT, q = A.SUBCLASSING,
                U = R.getterFor(k), M = R.set, I = j && j.prototype, D = j, N = I, _ = a.TypeError, B = a.document,
                X = a.process, z = E.f, G = z, V = !!(B && B.createEvent && a.dispatchEvent), W = "unhandledrejection",
                $ = function (t) {
                    var e;
                    return !(!g(t) || !v(e = t.then)) && e
                }, J = function (t, e) {
                    var r, n, o, i = e.value, a = 1 == e.state, u = a ? t.ok : t.fail, c = t.resolve, f = t.reject,
                        p = t.domain;
                    try {
                        u ? (a || (2 === e.rejection && tt(e), e.rejection = 1), !0 === u ? r = i : (p && p.enter(), r = u(i), p && (p.exit(), o = !0)), r === t.promise ? f(_("Promise-chain cycle")) : (n = $(r)) ? s(n, r, c, f) : c(r)) : f(i)
                    } catch (h) {
                        p && !o && p.exit(), f(h)
                    }
                }, K = function (t, e) {
                    t.notified || (t.notified = !0, b((function () {
                        for (var r, n = t.reactions; r = n.get();) J(r, t);
                        t.notified = !1, e && !t.rejection && Y(t)
                    })))
                }, Q = function (t, e, r) {
                    var n, o;
                    V ? ((n = B.createEvent("Event")).promise = e, n.reason = r, n.initEvent(t, !1, !0), a.dispatchEvent(n)) : n = {
                        promise: e,
                        reason: r
                    }, !H && (o = a["on" + t]) ? o(n) : t === W && w("Unhandled promise rejection", r)
                }, Y = function (t) {
                    s(x, a, (function () {
                        var e, r = t.facade, n = t.value;
                        if (Z(t) && (e = S((function () {
                            i ? X.emit("unhandledRejection", n, r) : Q(W, r, n)
                        })), t.rejection = i || Z(t) ? 2 : 1, e.error)) throw e.value
                    }))
                }, Z = function (t) {
                    return 1 !== t.rejection && !t.parent
                }, tt = function (t) {
                    s(x, a, (function () {
                        var e = t.facade;
                        i ? X.emit("rejectionHandled", e) : Q("rejectionhandled", e, t.value)
                    }))
                }, et = function (t, e, r) {
                    return function (n) {
                        t(e, n, r)
                    }
                }, rt = function (t, e, r) {
                    t.done || (t.done = !0, r && (t = r), t.value = e, t.state = 2, K(t, !0))
                }, nt = function (t, e, r) {
                    if (!t.done) {
                        t.done = !0, r && (t = r);
                        try {
                            if (t.facade === e) throw _("Promise can't be resolved itself");
                            var n = $(e);
                            n ? b((function () {
                                var r = {done: !1};
                                try {
                                    s(n, e, et(nt, r, t), et(rt, r, t))
                                } catch (o) {
                                    rt(r, o, t)
                                }
                            })) : (t.value = e, t.state = 1, K(t, !1))
                        } catch (o) {
                            rt({done: !1}, o, t)
                        }
                    }
                };
            if (T && (N = (D = function (e) {
                y(this, N), l(e), s(t, this);
                var r = U(this);
                try {
                    e(et(nt, r), et(rt, r))
                } catch (n) {
                    rt(r, n)
                }
            }).prototype, (t = function (t) {
                M(this, {
                    type: k,
                    done: !1,
                    notified: !1,
                    parent: !1,
                    reactions: new P,
                    rejection: !1,
                    state: 0,
                    value: void 0
                })
            }).prototype = u(N, "then", (function (t, e) {
                var r = U(this), n = z(m(this, D));
                return r.parent = !0, n.ok = !v(t) || t, n.fail = v(e) && e, n.domain = i ? X.domain : void 0, 0 == r.state ? r.reactions.add(n) : b((function () {
                    J(n, r)
                })), n.promise
            })), e = function () {
                var e = new t, r = U(e);
                this.promise = e, this.resolve = et(nt, r), this.reject = et(rt, r)
            }, E.f = z = function (t) {
                return t === D || void 0 === t ? new e(t) : G(t)
            }, !o && v(j) && I !== Object.prototype)) {
                r = I.then, q || u(I, "then", (function (t, e) {
                    var n = this;
                    return new D((function (t, e) {
                        s(r, n, t, e)
                    })).then(t, e)
                }), {unsafe: !0});
                try {
                    delete I.constructor
                } catch (ot) {
                }
                c && c(I, N)
            }
            n({global: !0, constructor: !0, wrap: !0, forced: T}, {Promise: D}), f(D, k, !1, !0), h(k)
        })), Ee = c(((t, e) => {
            var r, n, o = G()("iterator"), i = !1;
            try {
                r = 0, (n = {
                    next: function () {
                        return {done: !!r++}
                    }, "return": function () {
                        i = !0
                    }
                })[o] = function () {
                    return this
                }, Array.from(n, (function () {
                    throw 2
                }))
            } catch (a) {
            }
            e.exports = function (t, e) {
                if (!e && !i) return !1;
                var r = !1;
                try {
                    var n = {};
                    n[o] = function () {
                        return {
                            next: function () {
                                return {done: r = !0}
                            }
                        }
                    }, t(n)
                } catch (a) {
                }
                return r
            }
        })), ke = c(((t, e) => {
            var r = Pe(), n = Ee(), o = Le().CONSTRUCTOR;
            e.exports = o || !n((function (t) {
                r.all(t).then(void 0, (function () {
                }))
            }))
        })), Te = c((() => {
            var t = St(), e = d(), r = C(), n = je(), o = Se(), i = Gt();
            t({target: "Promise", stat: !0, forced: ke()}, {
                all: function (t) {
                    var a = this, s = n.f(a), u = s.resolve, c = s.reject, f = o((function () {
                        var n = r(a.resolve), o = [], s = 0, f = 1;
                        i(t, (function (t) {
                            var r = s++, i = !1;
                            f++, e(n, a, t).then((function (t) {
                                i || (i = !0, o[r] = t, --f || u(o))
                            }), c)
                        })), --f || u(o)
                    }));
                    return f.error && c(f.value), s.promise
                }
            })
        })), He = c((() => {
            var t, e = St(), r = F(), n = Le().CONSTRUCTOR, o = Pe(), i = j(), a = O(), s = ut(), u = o && o.prototype;
            e({target: "Promise", proto: !0, forced: n, real: !0}, {
                "catch": function (t) {
                    return this.then(void 0, t)
                }
            }), !r && a(o) && (t = i("Promise").prototype.catch, u.catch !== t && s(u, "catch", t, {unsafe: !0}))
        })), qe = c((() => {
            var t = St(), e = d(), r = C(), n = je(), o = Se(), i = Gt();
            t({target: "Promise", stat: !0, forced: ke()}, {
                race: function (t) {
                    var a = this, s = n.f(a), u = s.reject, c = o((function () {
                        var n = r(a.resolve);
                        i(t, (function (t) {
                            e(n, a, t).then(s.resolve, u)
                        }))
                    }));
                    return c.error && u(c.value), s.promise
                }
            })
        })), Ue = c((() => {
            var t = St(), e = d(), r = je();
            t({target: "Promise", stat: !0, forced: Le().CONSTRUCTOR}, {
                reject: function (t) {
                    var n = r.f(this);
                    return e(n.reject, void 0, t), n.promise
                }
            })
        })), Ce = c(((t, e) => {
            var r = Y(), n = L(), o = je();
            e.exports = function (t, e) {
                if (r(t), n(e) && e.constructor === t) return e;
                var i = o.f(t);
                return (0, i.resolve)(e), i.promise
            }
        })), Me = c((() => {
            var t = St(), e = j(), r = F(), n = Pe(), o = Le().CONSTRUCTOR, i = Ce(), a = e("Promise"), s = r && !o;
            t({target: "Promise", stat: !0, forced: r || o}, {
                resolve: function (t) {
                    return i(s && this === a ? n : this, t)
                }
            })
        })), Ie = c((() => {
            Ae(), Te(), He(), qe(), Ue(), Me()
        })), Fe = c((() => {
            var t = St(), e = d(), r = C(), n = je(), o = Se(), i = Gt();
            t({target: "Promise", stat: !0, forced: ke()}, {
                allSettled: function (t) {
                    var a = this, s = n.f(a), u = s.resolve, c = s.reject, f = o((function () {
                        var n = r(a.resolve), o = [], s = 0, c = 1;
                        i(t, (function (t) {
                            var r = s++, i = !1;
                            c++, e(n, a, t).then((function (t) {
                                i || (i = !0, o[r] = {status: "fulfilled", value: t}, --c || u(o))
                            }), (function (t) {
                                i || (i = !0, o[r] = {status: "rejected", reason: t}, --c || u(o))
                            }))
                        })), --c || u(o)
                    }));
                    return f.error && c(f.value), s.promise
                }
            })
        })), De = c((() => {
            var t = St(), e = d(), r = C(), n = j(), o = je(), i = Se(), a = Gt(), s = ke(), u = "No one promise resolved";
            t({target: "Promise", stat: !0, forced: s}, {
                any: function (t) {
                    var s = this, c = n("AggregateError"), f = o.f(s), p = f.resolve, h = f.reject, l = i((function () {
                        var n = r(s.resolve), o = [], i = 0, f = 1, l = !1;
                        a(t, (function (t) {
                            var r = i++, a = !1;
                            f++, e(n, s, t).then((function (t) {
                                a || l || (l = !0, p(t))
                            }), (function (t) {
                                a || l || (a = !0, o[r] = t, --f || h(new c(o, u)))
                            }))
                        })), --f || h(new c(o, u))
                    }));
                    return l.error && h(l.value), f.promise
                }
            })
        })), Ne = c((() => {
            var t, e = St(), r = F(), n = Pe(), o = h(), i = j(), a = O(), s = pe(), u = Ce(), c = ut(),
                f = n && n.prototype;
            e({
                target: "Promise", proto: !0, real: !0, forced: !!n && o((function () {
                    f.finally.call({
                        then: function () {
                        }
                    }, (function () {
                    }))
                }))
            }, {
                "finally": function (t) {
                    var e = s(this, i("Promise")), r = a(t);
                    return this.then(r ? function (r) {
                        return u(e, t()).then((function () {
                            return r
                        }))
                    } : t, r ? function (r) {
                        return u(e, t()).then((function () {
                            throw r
                        }))
                    } : t)
                }
            }), !r && a(n) && (t = i("Promise").prototype.finally, f.finally !== t && c(f, "finally", t, {unsafe: !0}))
        })), _e = c(((t, e) => {
            var r = m(), n = ft(), o = Vt(), i = S(), a = r("".charAt), s = r("".charCodeAt), u = r("".slice),
                c = function (t) {
                    return function (e, r) {
                        var c, f, p = o(i(e)), h = n(r), l = p.length;
                        return h < 0 || h >= l ? t ? "" : void 0 : (c = s(p, h)) < 55296 || c > 56319 || h + 1 === l || (f = s(p, h + 1)) < 56320 || f > 57343 ? t ? a(p, h) : c : t ? u(p, h, h + 2) : f - 56320 + (c - 55296 << 10) + 65536
                    }
                };
            e.exports = {codeAt: c(!1), charAt: c(!0)}
        })), Be = c((() => {
            var t = _e().charAt, e = Vt(), r = at(), n = te(), o = ee(), i = "String Iterator", a = r.set,
                s = r.getterFor(i);
            n(String, "String", (function (t) {
                a(this, {type: i, string: e(t), index: 0})
            }), (function () {
                var e, r = s(this), n = r.string, i = r.index;
                return i >= n.length ? o(void 0, !0) : (e = t(n, i), r.index += e.length, o(e, !1))
            }))
        })), Xe = c(((t, e) => {
            var r = p();
            e.exports = r
        })), ze = c(((t, e) => {
            Jt(), re(), oe(), Ie(), Fe(), De(), Ne(), Be();
            var r = Xe();
            e.exports = r.Promise
        })), Ge = c(((t, e) => {
            e.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
            }
        })), Ve = c(((t, e) => {
            var r = $()("span").classList, n = r && r.constructor && r.constructor.prototype;
            e.exports = n === Object.prototype ? void 0 : n
        })), We = c((() => {
            var t, e = p(), r = Ge(), n = Ve(), o = re(), i = tt(), a = G(), s = a("iterator"), u = a("toStringTag"),
                c = o.values, f = function (t, e) {
                    if (t) {
                        if (t[s] !== c) try {
                            i(t, s, c)
                        } catch (a) {
                            t[s] = c
                        }
                        if (t[u] || i(t, u, e), r[e]) for (var n in o) if (t[n] !== o[n]) try {
                            i(t, n, o[n])
                        } catch (a) {
                            t[n] = o[n]
                        }
                    }
                };
            for (t in r) f(e[t] && e[t].prototype, t);
            f(n, "DOMTokenList")
        })), $e = c(((t, e) => {
            var r = ze();
            We(), e.exports = r
        })), Je = c(((t, e) => {
            var r = $e();
            e.exports = r
        })), Ke = c((() => {
            var t = St(), e = je();
            t({target: "Promise", stat: !0, forced: !0}, {
                withResolvers: function () {
                    var t = e.f(this);
                    return {promise: t.promise, resolve: t.resolve, reject: t.reject}
                }
            })
        })), Qe = c((() => {
            Jt()
        })), Ye = c((() => {
            Fe()
        })), Ze = c((() => {
            var t = St(), e = je(), r = Se();
            t({target: "Promise", stat: !0, forced: !0}, {
                "try": function (t) {
                    var n = e.f(this), o = r(t);
                    return (o.error ? n.reject : n.resolve)(o.value), n.promise
                }
            })
        })), tr = c((() => {
            De()
        })), er = c(((t, e) => {
            var r = Je();
            Ke(), Qe(), Ye(), Ze(), tr(), e.exports = r
        })), rr = c(((t, e) => {
            e.exports = er()
        })), nr = c(((t, e) => {
            var r = x();
            e.exports = Array.isArray || function (t) {
                return "Array" == r(t)
            }
        })), or = c(((t, e) => {
            var r = nr(), n = ce(), o = L(), i = G()("species"), a = Array;
            e.exports = function (t) {
                var e;
                return r(t) && (e = t.constructor, (n(e) && (e === a || r(e.prototype)) || o(e) && null === (e = e[i])) && (e = void 0)), void 0 === e ? a : e
            }
        })), ir = c(((t, e) => {
            var r = or();
            e.exports = function (t, e) {
                return new (r(t))(0 === e ? 0 : e)
            }
        })), ar = c(((t, e) => {
            var r = It(), n = m(), o = b(), i = B(), a = lt(), s = ir(), u = n([].push), c = function (t) {
                var e = 1 == t, n = 2 == t, c = 3 == t, f = 4 == t, p = 6 == t, h = 7 == t, l = 5 == t || p;
                return function (v, d, g, y) {
                    for (var m, x, b = i(v), w = o(b), S = r(d, g), P = a(w), R = 0, O = y || s, L = e ? O(v, P) : n || h ? O(v, 0) : void 0; P > R; R++) if ((l || R in w) && (x = S(m = w[R], R, b), t)) if (e) L[R] = x; else if (x) switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return m;
                        case 6:
                            return R;
                        case 2:
                            u(L, m)
                    } else switch (t) {
                        case 4:
                            return !1;
                        case 7:
                            u(L, m)
                    }
                    return p ? -1 : c || f ? f : L
                }
            };
            e.exports = {
                forEach: c(0),
                map: c(1),
                filter: c(2),
                some: c(3),
                every: c(4),
                find: c(5),
                findIndex: c(6),
                filterReject: c(7)
            }
        })), sr = c(((t, e) => {
            var r = h();
            e.exports = function (t, e) {
                var n = [][t];
                return !!n && r((function () {
                    n.call(null, e || function () {
                        return 1
                    }, 1)
                }))
            }
        })), ur = c(((t, e) => {
            var r = ar().forEach, n = sr()("forEach");
            e.exports = n ? [].forEach : function (t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })), cr = c((() => {
            var t = St(), e = ur();
            t({target: "Array", proto: !0, forced: [].forEach != e}, {forEach: e})
        })), fr = c(((t, e) => {
            var r = p(), n = m();
            e.exports = function (t, e) {
                return n(r[t].prototype[e])
            }
        })), pr = c(((t, e) => {
            cr();
            var r = fr();
            e.exports = r("Array", "forEach")
        })), hr = c(((t, e) => {
            var r = pr();
            e.exports = r
        })), lr = c(((t, e) => {
            var r = hr();
            e.exports = r
        })), vr = c(((t, e) => {
            var r = lr();
            e.exports = r
        })), dr = c(((t, e) => {
            e.exports = vr()
        })), gr = c(((t, e) => {
            var r = h(), n = G(), o = k(), i = n("species");
            e.exports = function (t) {
                return o >= 51 || !r((function () {
                    var e = [];
                    return (e.constructor = {})[i] = function () {
                        return {foo: 1}
                    }, 1 !== e[t](Boolean).foo
                }))
            }
        })), yr = c((() => {
            var t = St(), e = ar().map;
            t({target: "Array", proto: !0, forced: !gr()("map")}, {
                map: function (t) {
                    return e(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        })), mr = c(((t, e) => {
            yr();
            var r = fr();
            e.exports = r("Array", "map")
        })), xr = c(((t, e) => {
            var r = mr();
            e.exports = r
        })), br = c(((t, e) => {
            var r = xr();
            e.exports = r
        })), wr = c(((t, e) => {
            var r = br();
            e.exports = r
        })), Sr = c(((t, e) => {
            e.exports = wr()
        })), Pr = c((() => {
            var t = St(), e = ar().some;
            t({target: "Array", proto: !0, forced: !sr()("some")}, {
                some: function (t) {
                    return e(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        })), Rr = c(((t, e) => {
            Pr();
            var r = fr();
            e.exports = r("Array", "some")
        })), Or = c(((t, e) => {
            var r = Rr();
            e.exports = r
        })), Lr = c(((t, e) => {
            var r = Or();
            e.exports = r
        })), jr = c(((t, e) => {
            var r = Lr();
            e.exports = r
        })), Ar = c(((t, e) => {
            e.exports = jr()
        })), Er = c((() => {
            var t = St(), e = vt().includes, r = h(), n = Kt();
            t({
                target: "Array", proto: !0, forced: r((function () {
                    return !Array(1).includes()
                }))
            }, {
                includes: function (t) {
                    return e(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), n("includes")
        })), kr = c(((t, e) => {
            Er();
            var r = fr();
            e.exports = r("Array", "includes")
        })), Tr = c(((t, e) => {
            var r = kr();
            e.exports = r
        })), Hr = c(((t, e) => {
            var r = Tr();
            e.exports = r
        })), qr = c(((t, e) => {
            var r = Hr();
            e.exports = r
        })), Ur = c(((t, e) => {
            e.exports = qr()
        })), Cr = c(((t, e) => {
            var r = l(), n = m(), o = d(), i = h(), a = At(), s = mt(), u = g(), c = B(), f = b(), p = Object.assign,
                v = Object.defineProperty, y = n([].concat);
            e.exports = !p || i((function () {
                if (r && 1 !== p({b: 1}, p(v({}, "a", {
                    enumerable: !0, get: function () {
                        v(this, "b", {value: 3, enumerable: !1})
                    }
                }), {b: 2})).b) return !0;
                var t = {}, e = {}, n = Symbol(), o = "abcdefghijklmnopqrst";
                return t[n] = 7, o.split("").forEach((function (t) {
                    e[t] = t
                })), 7 != p({}, t)[n] || a(p({}, e)).join("") != o
            })) ? function (t, e) {
                for (var n = c(t), i = arguments.length, p = 1, h = s.f, l = u.f; i > p;) for (var v, d = f(arguments[p++]), g = h ? y(a(d), h(d)) : a(d), m = g.length, x = 0; m > x;) v = g[x++], r && !o(l, d, v) || (n[v] = d[v]);
                return n
            } : p
        })), Mr = c((() => {
            var t = St(), e = Cr();
            t({target: "Object", stat: !0, arity: 2, forced: Object.assign !== e}, {assign: e})
        })), Ir = c(((t, e) => {
            Mr();
            var r = Xe();
            e.exports = r.Object.assign
        })), Fr = c(((t, e) => {
            var r = Ir();
            e.exports = r
        })), Dr = c(((t, e) => {
            var r = Fr();
            e.exports = r
        })), Nr = c(((t, e) => {
            var r = Dr();
            e.exports = r
        })), _r = c(((t, e) => {
            e.exports = Nr()
        })), Br = c(((t, e) => {
            var r = h(), n = G(), o = l(), i = F(), a = n("iterator");
            e.exports = !r((function () {
                var t = new URL("b?a=1&b=2&c=3", "http://a"), e = t.searchParams, r = new URLSearchParams("a=1&a=2"),
                    n = "";
                return t.pathname = "c%20d", e.forEach((function (t, r) {
                    e.delete("b"), n += r + t
                })), r.delete("a", 2), i && (!t.toJSON || !r.has("a", 1) || r.has("a", 2)) || !e.size && (i || !o) || !e.sort || "http://a/c%20d?a=1&c=3" !== t.href || "3" !== e.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
            }))
        })), Xr = c(((t, e) => {
            var r = ut();
            e.exports = function (t, e, n) {
                for (var o in e) r(t, o, e[o], n);
                return t
            }
        })), zr = c(((t, e) => {
            var r = W(), n = Z(), o = y();
            e.exports = function (t, e, i) {
                var a = r(e);
                a in t ? n.f(t, a, o(0, i)) : t[a] = i
            }
        })), Gr = c(((t, e) => {
            var r = pt(), n = lt(), o = zr(), i = Array, a = Math.max;
            e.exports = function (t, e, s) {
                for (var u = n(t), c = r(e, u), f = r(void 0 === s ? u : s, u), p = i(a(f - c, 0)), h = 0; c < f; c++, h++) o(p, h, t[c]);
                return p.length = h, p
            }
        })), Vr = c(((t, e) => {
            var r = Gr(), n = Math.floor, o = function (t, e) {
                var s = t.length, u = n(s / 2);
                return s < 8 ? i(t, e) : a(t, o(r(t, 0, u), e), o(r(t, u), e), e)
            }, i = function (t, e) {
                for (var r, n, o = t.length, i = 1; i < o;) {
                    for (n = i, r = t[i]; n && e(t[n - 1], r) > 0;) t[n] = t[--n];
                    n !== i++ && (t[n] = r)
                }
                return t
            }, a = function (t, e, r, n) {
                for (var o = e.length, i = r.length, a = 0, s = 0; a < o || s < i;) t[a + s] = a < o && s < i ? n(e[a], r[s]) <= 0 ? e[a++] : r[s++] : a < o ? e[a++] : r[s++];
                return t
            };
            e.exports = o
        })), Wr = c(((t, e) => {
            re();
            var r = St(), n = p(), o = d(), i = m(), a = l(), s = Br(), u = ut(), c = ae(), f = Xr(), h = Yt(), v = Zt(),
                g = at(), x = ue(), b = O(), w = X(), S = It(), P = _t(), R = Y(), j = L(), A = Vt(), E = Tt(), k = y(),
                T = Xt(), H = Bt(), q = ve(), U = G(), C = Vr(), M = U("iterator"), I = "URLSearchParams",
                F = I + "Iterator", D = g.set, N = g.getterFor(I), _ = g.getterFor(F), B = Object.getOwnPropertyDescriptor,
                z = function (t) {
                    if (!a) return n[t];
                    var e = B(n, t);
                    return e && e.value
                }, V = z("fetch"), W = z("Request"), $ = z("Headers"), J = W && W.prototype, K = $ && $.prototype,
                Q = n.RegExp, Z = n.TypeError, tt = n.decodeURIComponent, et = n.encodeURIComponent, rt = i("".charAt),
                nt = i([].join), ot = i([].push), it = i("".replace), st = i([].shift), ct = i([].splice), ft = i("".split),
                pt = i("".slice), ht = /\+/g, lt = Array(4), vt = function (t) {
                    return lt[t - 1] || (lt[t - 1] = Q("((?:%[\\da-f]{2}){" + t + "})", "gi"))
                }, dt = function (t) {
                    try {
                        return tt(t)
                    } catch (e) {
                        return t
                    }
                }, gt = function (t) {
                    var e = it(t, ht, " "), r = 4;
                    try {
                        return tt(e)
                    } catch (n) {
                        for (; r;) e = it(e, vt(r--), dt);
                        return e
                    }
                }, yt = /[!'()~]|%20/g, mt = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+"},
                xt = function (t) {
                    return mt[t]
                }, bt = function (t) {
                    return it(et(t), yt, xt)
                }, wt = v((function (t, e) {
                    D(this, {type: F, iterator: T(N(t).entries), kind: e})
                }), "Iterator", (function () {
                    var t = _(this), e = t.kind, r = t.iterator.next(), n = r.value;
                    return r.done || (r.value = "keys" === e ? n.key : "values" === e ? n.value : [n.key, n.value]), r
                }), !0), Pt = function (t) {
                    this.entries = [], this.url = null, void 0 !== t && (j(t) ? this.parseObject(t) : this.parseQuery("string" == typeof t ? "?" === rt(t, 0) ? pt(t, 1) : t : A(t)))
                };
            Pt.prototype = {
                type: I, bindURL: function (t) {
                    this.url = t, this.update()
                }, parseObject: function (t) {
                    var e, r, n, i, a, s, u, c = H(t);
                    if (c) for (r = (e = T(t, c)).next; !(n = o(r, e)).done;) {
                        if (a = (i = T(R(n.value))).next, (s = o(a, i)).done || (u = o(a, i)).done || !o(a, i).done) throw Z("Expected sequence with length 2");
                        ot(this.entries, {key: A(s.value), value: A(u.value)})
                    } else for (var f in t) w(t, f) && ot(this.entries, {key: f, value: A(t[f])})
                }, parseQuery: function (t) {
                    if (t) for (var e, r, n = ft(t, "&"), o = 0; o < n.length;) (e = n[o++]).length && (r = ft(e, "="), ot(this.entries, {
                        key: gt(st(r)),
                        value: gt(nt(r, "="))
                    }))
                }, serialize: function () {
                    for (var t, e = this.entries, r = [], n = 0; n < e.length;) t = e[n++], ot(r, bt(t.key) + "=" + bt(t.value));
                    return nt(r, "&")
                }, update: function () {
                    this.entries.length = 0, this.parseQuery(this.url.query)
                }, updateURL: function () {
                    this.url && this.url.update()
                }
            };
            var Rt, Ot, Lt, jt, At = function () {
                x(this, Et);
                var t = arguments.length > 0 ? arguments[0] : void 0, e = D(this, new Pt(t));
                a || (this.size = e.entries.length)
            }, Et = At.prototype;
            f(Et, {
                append: function (t, e) {
                    var r = N(this);
                    q(arguments.length, 2), ot(r.entries, {key: A(t), value: A(e)}), a || this.length++, r.updateURL()
                }, "delete": function (t) {
                    for (var e = N(this), r = q(arguments.length, 1), n = e.entries, o = A(t), i = r < 2 ? void 0 : arguments[1], s = void 0 === i ? i : A(i), u = 0; u < n.length;) {
                        var c = n[u];
                        if (c.key !== o || void 0 !== s && c.value !== s) u++; else if (ct(n, u, 1), void 0 !== s) break
                    }
                    a || (this.size = n.length), e.updateURL()
                }, get: function (t) {
                    var e = N(this).entries;
                    q(arguments.length, 1);
                    for (var r = A(t), n = 0; n < e.length; n++) if (e[n].key === r) return e[n].value;
                    return null
                }, getAll: function (t) {
                    var e = N(this).entries;
                    q(arguments.length, 1);
                    for (var r = A(t), n = [], o = 0; o < e.length; o++) e[o].key === r && ot(n, e[o].value);
                    return n
                }, has: function (t) {
                    for (var e = N(this).entries, r = q(arguments.length, 1), n = A(t), o = r < 2 ? void 0 : arguments[1], i = void 0 === o ? o : A(o), a = 0; a < e.length;) {
                        var s = e[a++];
                        if (s.key === n && (void 0 === i || s.value === i)) return !0
                    }
                    return !1
                }, set: function (t, e) {
                    var r = N(this);
                    q(arguments.length, 1);
                    for (var n, o = r.entries, i = !1, s = A(t), u = A(e), c = 0; c < o.length; c++) (n = o[c]).key === s && (i ? ct(o, c--, 1) : (i = !0, n.value = u));
                    i || ot(o, {key: s, value: u}), a || (this.size = o.length), r.updateURL()
                }, sort: function () {
                    var t = N(this);
                    C(t.entries, (function (t, e) {
                        return t.key > e.key ? 1 : -1
                    })), t.updateURL()
                }, forEach: function (t) {
                    for (var e, r = N(this).entries, n = S(t, arguments.length > 1 ? arguments[1] : void 0), o = 0; o < r.length;) n((e = r[o++]).value, e.key, this)
                }, keys: function () {
                    return new wt(this, "keys")
                }, values: function () {
                    return new wt(this, "values")
                }, entries: function () {
                    return new wt(this, "entries")
                }
            }, {enumerable: !0}), u(Et, M, Et.entries, {name: "entries"}), u(Et, "toString", (function () {
                return N(this).serialize()
            }), {enumerable: !0}), a && c(Et, "size", {
                get: function () {
                    return N(this).entries.length
                }, configurable: !0, enumerable: !0
            }), h(At, I), r({
                global: !0,
                constructor: !0,
                forced: !s
            }, {URLSearchParams: At}), !s && b($) && (Rt = i(K.has), Ot = i(K.set), Lt = function (t) {
                if (j(t)) {
                    var e, r = t.body;
                    if (P(r) === I) return e = t.headers ? new $(t.headers) : new $, Rt(e, "content-type") || Ot(e, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), E(t, {
                        body: k(0, A(r)),
                        headers: k(0, e)
                    })
                }
                return t
            }, b(V) && r({global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0}, {
                fetch: function (t) {
                    return V(t, arguments.length > 1 ? Lt(arguments[1]) : {})
                }
            }), b(W) && (jt = function (t) {
                return x(this, J), new W(t, arguments.length > 1 ? Lt(arguments[1]) : {})
            }, J.constructor = jt, jt.prototype = J, r({
                global: !0,
                constructor: !0,
                dontCallGetSet: !0,
                forced: !0
            }, {Request: jt}))), e.exports = {URLSearchParams: At, getState: N}
        })), $r = c((() => {
            Wr()
        })), Jr = c((() => {
            var t = ut(), e = m(), r = Vt(), n = ve(), o = URLSearchParams, i = o.prototype, a = e(i.append),
                s = e(i.delete), u = e(i.forEach), c = e([].push), f = new o("a=1&a=2");
            f.delete("a", 1), f + "" !== "a=2" && t(i, "delete", (function (t) {
                var e = arguments.length, o = e < 2 ? void 0 : arguments[1];
                if (e && void 0 === o) return s(this, t);
                var i = [];
                u(this, (function (t, e) {
                    c(i, {key: e, value: t})
                })), n(e, 1);
                for (var f, p = r(t), h = r(o), l = 0, v = 0, d = !1, g = i.length; l < g;) f = i[l++], d || f.key === p ? (d = !0, s(this, f.key)) : v++;
                for (; v < g;) (f = i[v++]).key === p && f.value === h || a(this, f.key, f.value)
            }), {enumerable: !0, unsafe: !0})
        })), Kr = c((() => {
            var t = ut(), e = m(), r = Vt(), n = ve(), o = URLSearchParams, i = o.prototype, a = e(i.getAll), s = e(i.has);
            new o("a=1").has("a", 2) && t(i, "has", (function (t) {
                var e = arguments.length, o = e < 2 ? void 0 : arguments[1];
                if (e && void 0 === o) return s(this, t);
                var i = a(this, t);
                n(e, 1);
                for (var u = r(o), c = 0; c < i.length;) if (i[c++] === u) return !0;
                return !1
            }), {enumerable: !0, unsafe: !0})
        })), Qr = c((() => {
            var t = l(), e = m(), r = ae(), n = URLSearchParams.prototype, o = e(n.forEach);
            t && !("size" in n) && r(n, "size", {
                get: function () {
                    var t = 0;
                    return o(this, (function () {
                        t++
                    })), t
                }, configurable: !0, enumerable: !0
            })
        })), Yr = c(((t, e) => {
            $r(), Jr(), Kr(), Qr();
            var r = Xe();
            e.exports = r.URLSearchParams
        })), Zr = c(((t, e) => {
            var r = Y(), n = zt();
            e.exports = function (t, e, o, i) {
                try {
                    return i ? e(r(o)[0], o[1]) : e(o)
                } catch (a) {
                    n(t, "throw", a)
                }
            }
        })), tn = c(((t, e) => {
            var r = It(), n = d(), o = B(), i = Zr(), a = Dt(), s = ce(), u = lt(), c = zr(), f = Xt(), p = Bt(), h = Array;
            e.exports = function (t) {
                var e = o(t), l = s(this), v = arguments.length, d = v > 1 ? arguments[1] : void 0, g = void 0 !== d;
                g && (d = r(d, v > 2 ? arguments[2] : void 0));
                var y, m, x, b, w, S, P = p(e), R = 0;
                if (!P || this === h && a(P)) for (y = u(e), m = l ? new this(y) : h(y); y > R; R++) S = g ? d(e[R], R) : e[R], c(m, R, S); else for (w = (b = f(e, P)).next, m = l ? new this : []; !(x = n(w, b)).done; R++) S = g ? i(b, d, [x.value, R], !0) : x.value, c(m, R, S);
                return m.length = R, m
            }
        })), en = c(((t, e) => {
            var r = m(), n = 2147483647, o = /[^\0-\u007E]/, i = /[.\u3002\uFF0E\uFF61]/g,
                a = "Overflow: input needs wider integers to process", s = RangeError, u = r(i.exec), c = Math.floor,
                f = String.fromCharCode, p = r("".charCodeAt), h = r([].join), l = r([].push), v = r("".replace),
                d = r("".split), g = r("".toLowerCase), y = function (t) {
                    return t + 22 + 75 * (t < 26)
                }, x = function (t, e, r) {
                    var n = 0;
                    for (t = r ? c(t / 700) : t >> 1, t += c(t / e); t > 455;) t = c(t / 35), n += 36;
                    return c(n + 36 * t / (t + 38))
                }, b = function (t) {
                    var e = [];
                    t = function (t) {
                        for (var e = [], r = 0, n = t.length; r < n;) {
                            var o = p(t, r++);
                            if (o >= 55296 && o <= 56319 && r < n) {
                                var i = p(t, r++);
                                56320 == (64512 & i) ? l(e, ((1023 & o) << 10) + (1023 & i) + 65536) : (l(e, o), r--)
                            } else l(e, o)
                        }
                        return e
                    }(t);
                    var r, o, i = t.length, u = 128, v = 0, d = 72;
                    for (r = 0; r < t.length; r++) (o = t[r]) < 128 && l(e, f(o));
                    var g = e.length, m = g;
                    for (g && l(e, "-"); m < i;) {
                        var b = n;
                        for (r = 0; r < t.length; r++) (o = t[r]) >= u && o < b && (b = o);
                        var w = m + 1;
                        if (b - u > c((n - v) / w)) throw s(a);
                        for (v += (b - u) * w, u = b, r = 0; r < t.length; r++) {
                            if ((o = t[r]) < u && ++v > n) throw s(a);
                            if (o == u) {
                                for (var S = v, P = 36; ;) {
                                    var R = P <= d ? 1 : P >= d + 26 ? 26 : P - d;
                                    if (S < R) break;
                                    var O = S - R, L = 36 - R;
                                    l(e, f(y(R + O % L))), S = c(O / L), P += 36
                                }
                                l(e, f(y(S))), d = x(v, w, m == g), v = 0, m++
                            }
                        }
                        v++, u++
                    }
                    return h(e, "")
                };
            e.exports = function (t) {
                var e, r, n = [], a = d(v(g(t), i, "."), ".");
                for (e = 0; e < a.length; e++) r = a[e], l(n, u(o, r) ? "xn--" + b(r) : r);
                return h(n, ".")
            }
        })), rn = c((() => {
            Be();
            var t, e = St(), r = l(), n = Br(), o = p(), i = It(), a = m(), s = ut(), u = ae(), c = ue(), f = X(), h = Cr(),
                v = tn(), d = Gr(), g = _e().codeAt, y = en(), x = Vt(), b = Yt(), w = ve(), S = Wr(), P = at(), R = P.set,
                O = P.getterFor("URL"), L = S.URLSearchParams, j = S.getState, A = o.URL, E = o.TypeError, k = o.parseInt,
                T = Math.floor, H = Math.pow, q = a("".charAt), U = a(/./.exec), C = a([].join), M = a(1..toString),
                I = a([].pop), F = a([].push), D = a("".replace), N = a([].shift), _ = a("".split), B = a("".slice),
                z = a("".toLowerCase), G = a([].unshift), V = "Invalid scheme", W = "Invalid host", $ = "Invalid port",
                J = /[a-z]/i, K = /[\d+-.a-z]/i, Q = /\d/, Y = /^0x/i, Z = /^[0-7]+$/, tt = /^\d+$/, et = /^[\da-f]+$/i,
                rt = /[\0\t\n\r #%/:<>?@[\\\]^|]/, nt = /[\0\t\n\r #/:<>?@[\\\]^|]/, ot = /^[\u0000-\u0020]+/,
                it = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/, st = /[\t\n\r]/g, ct = function (t) {
                    var e, r, n, o;
                    if ("number" == typeof t) {
                        for (e = [], r = 0; r < 4; r++) G(e, t % 256), t = T(t / 256);
                        return C(e, ".")
                    }
                    if ("object" == typeof t) {
                        for (e = "", n = function (t) {
                            for (var e = null, r = 1, n = null, o = 0, i = 0; i < 8; i++) 0 !== t[i] ? (o > r && (e = n, r = o), n = null, o = 0) : (null === n && (n = i), ++o);
                            return o > r && (e = n, r = o), e
                        }(t), r = 0; r < 8; r++) o && 0 === t[r] || (o && (o = !1), n === r ? (e += r ? ":" : "::", o = !0) : (e += M(t[r], 16), r < 7 && (e += ":")));
                        return "[" + e + "]"
                    }
                    return t
                }, ft = {}, pt = h({}, ft, {" ": 1, '"': 1, "<": 1, ">": 1, "`": 1}),
                ht = h({}, pt, {"#": 1, "?": 1, "{": 1, "}": 1}),
                lt = h({}, ht, {"/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1}),
                vt = function (t, e) {
                    var r = g(t, 0);
                    return r > 32 && r < 127 && !f(e, t) ? t : encodeURIComponent(t)
                }, dt = {ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443}, gt = function (t, e) {
                    var r;
                    return 2 == t.length && U(J, q(t, 0)) && (":" == (r = q(t, 1)) || !e && "|" == r)
                }, yt = function (t) {
                    var e;
                    return t.length > 1 && gt(B(t, 0, 2)) && (2 == t.length || "/" === (e = q(t, 2)) || "\\" === e || "?" === e || "#" === e)
                }, mt = function (t) {
                    return "." === t || "%2e" === z(t)
                }, xt = function (t) {
                    return ".." === (t = z(t)) || "%2e." === t || ".%2e" === t || "%2e%2e" === t
                }, bt = {}, wt = {}, Pt = {}, Rt = {}, Ot = {}, Lt = {}, jt = {}, At = {}, Et = {}, kt = {}, Tt = {}, Ht = {},
                qt = {}, Ut = {}, Ct = {}, Mt = {}, Ft = {}, Dt = {}, Nt = {}, _t = {}, Bt = {}, Xt = function (t, e, r) {
                    var n, o, i, a = x(t);
                    if (e) {
                        if (o = this.parse(a)) throw E(o);
                        this.searchParams = null
                    } else {
                        if (void 0 !== r && (n = new Xt(r, !0)), o = this.parse(a, null, n)) throw E(o);
                        (i = j(new L)).bindURL(this), this.searchParams = i
                    }
                };
            Xt.prototype = {
                type: "URL", parse: function (e, r, n) {
                    var o, i, a, s, u = this, c = r || bt, p = 0, h = "", l = !1, g = !1, y = !1;
                    for (e = x(e), r || (u.scheme = "", u.username = "", u.password = "", u.host = null, u.port = null, u.path = [], u.query = null, u.fragment = null, u.cannotBeABaseURL = !1, e = D(e, ot, ""), e = D(e, it, "$1")), e = D(e, st, ""), o = v(e); p <= o.length;) {
                        switch (i = o[p], c) {
                            case bt:
                                if (!i || !U(J, i)) {
                                    if (r) return V;
                                    c = Pt;
                                    continue
                                }
                                h += z(i), c = wt;
                                break;
                            case wt:
                                if (i && (U(K, i) || "+" == i || "-" == i || "." == i)) h += z(i); else {
                                    if (":" != i) {
                                        if (r) return V;
                                        h = "", c = Pt, p = 0;
                                        continue
                                    }
                                    if (r && (u.isSpecial() != f(dt, h) || "file" == h && (u.includesCredentials() || null !== u.port) || "file" == u.scheme && !u.host)) return;
                                    if (u.scheme = h, r) return void (u.isSpecial() && dt[u.scheme] == u.port && (u.port = null));
                                    h = "", "file" == u.scheme ? c = Ut : u.isSpecial() && n && n.scheme == u.scheme ? c = Rt : u.isSpecial() ? c = At : "/" == o[p + 1] ? (c = Ot, p++) : (u.cannotBeABaseURL = !0, F(u.path, ""), c = Nt)
                                }
                                break;
                            case Pt:
                                if (!n || n.cannotBeABaseURL && "#" != i) return V;
                                if (n.cannotBeABaseURL && "#" == i) {
                                    u.scheme = n.scheme, u.path = d(n.path), u.query = n.query, u.fragment = "", u.cannotBeABaseURL = !0, c = Bt;
                                    break
                                }
                                c = "file" == n.scheme ? Ut : Lt;
                                continue;
                            case Rt:
                                if ("/" != i || "/" != o[p + 1]) {
                                    c = Lt;
                                    continue
                                }
                                c = Et, p++;
                                break;
                            case Ot:
                                if ("/" == i) {
                                    c = kt;
                                    break
                                }
                                c = Dt;
                                continue;
                            case Lt:
                                if (u.scheme = n.scheme, i == t) u.username = n.username, u.password = n.password, u.host = n.host, u.port = n.port, u.path = d(n.path), u.query = n.query; else if ("/" == i || "\\" == i && u.isSpecial()) c = jt; else if ("?" == i) u.username = n.username, u.password = n.password, u.host = n.host, u.port = n.port, u.path = d(n.path), u.query = "", c = _t; else {
                                    if ("#" != i) {
                                        u.username = n.username, u.password = n.password, u.host = n.host, u.port = n.port, u.path = d(n.path), u.path.length--, c = Dt;
                                        continue
                                    }
                                    u.username = n.username, u.password = n.password, u.host = n.host, u.port = n.port, u.path = d(n.path), u.query = n.query, u.fragment = "", c = Bt
                                }
                                break;
                            case jt:
                                if (!u.isSpecial() || "/" != i && "\\" != i) {
                                    if ("/" != i) {
                                        u.username = n.username, u.password = n.password, u.host = n.host, u.port = n.port, c = Dt;
                                        continue
                                    }
                                    c = kt
                                } else c = Et;
                                break;
                            case At:
                                if (c = Et, "/" != i || "/" != q(h, p + 1)) continue;
                                p++;
                                break;
                            case Et:
                                if ("/" != i && "\\" != i) {
                                    c = kt;
                                    continue
                                }
                                break;
                            case kt:
                                if ("@" == i) {
                                    l && (h = "%40" + h), l = !0, a = v(h);
                                    for (var m = 0; m < a.length; m++) {
                                        var b = a[m];
                                        if (":" != b || y) {
                                            var w = vt(b, lt);
                                            y ? u.password += w : u.username += w
                                        } else y = !0
                                    }
                                    h = ""
                                } else if (i == t || "/" == i || "?" == i || "#" == i || "\\" == i && u.isSpecial()) {
                                    if (l && "" == h) return "Invalid authority";
                                    p -= v(h).length + 1, h = "", c = Tt
                                } else h += i;
                                break;
                            case Tt:
                            case Ht:
                                if (r && "file" == u.scheme) {
                                    c = Mt;
                                    continue
                                }
                                if (":" != i || g) {
                                    if (i == t || "/" == i || "?" == i || "#" == i || "\\" == i && u.isSpecial()) {
                                        if (u.isSpecial() && "" == h) return W;
                                        if (r && "" == h && (u.includesCredentials() || null !== u.port)) return;
                                        if (s = u.parseHost(h)) return s;
                                        if (h = "", c = Ft, r) return;
                                        continue
                                    }
                                    "[" == i ? g = !0 : "]" == i && (g = !1), h += i
                                } else {
                                    if ("" == h) return W;
                                    if (s = u.parseHost(h)) return s;
                                    if (h = "", c = qt, r == Ht) return
                                }
                                break;
                            case qt:
                                if (!U(Q, i)) {
                                    if (i == t || "/" == i || "?" == i || "#" == i || "\\" == i && u.isSpecial() || r) {
                                        if ("" != h) {
                                            var S = k(h, 10);
                                            if (S > 65535) return $;
                                            u.port = u.isSpecial() && S === dt[u.scheme] ? null : S, h = ""
                                        }
                                        if (r) return;
                                        c = Ft;
                                        continue
                                    }
                                    return $
                                }
                                h += i;
                                break;
                            case Ut:
                                if (u.scheme = "file", "/" == i || "\\" == i) c = Ct; else {
                                    if (!n || "file" != n.scheme) {
                                        c = Dt;
                                        continue
                                    }
                                    if (i == t) u.host = n.host, u.path = d(n.path), u.query = n.query; else if ("?" == i) u.host = n.host, u.path = d(n.path), u.query = "", c = _t; else {
                                        if ("#" != i) {
                                            yt(C(d(o, p), "")) || (u.host = n.host, u.path = d(n.path), u.shortenPath()), c = Dt;
                                            continue
                                        }
                                        u.host = n.host, u.path = d(n.path), u.query = n.query, u.fragment = "", c = Bt
                                    }
                                }
                                break;
                            case Ct:
                                if ("/" == i || "\\" == i) {
                                    c = Mt;
                                    break
                                }
                                n && "file" == n.scheme && !yt(C(d(o, p), "")) && (gt(n.path[0], !0) ? F(u.path, n.path[0]) : u.host = n.host), c = Dt;
                                continue;
                            case Mt:
                                if (i == t || "/" == i || "\\" == i || "?" == i || "#" == i) {
                                    if (!r && gt(h)) c = Dt; else if ("" == h) {
                                        if (u.host = "", r) return;
                                        c = Ft
                                    } else {
                                        if (s = u.parseHost(h)) return s;
                                        if ("localhost" == u.host && (u.host = ""), r) return;
                                        h = "", c = Ft
                                    }
                                    continue
                                }
                                h += i;
                                break;
                            case Ft:
                                if (u.isSpecial()) {
                                    if (c = Dt, "/" != i && "\\" != i) continue
                                } else if (r || "?" != i) if (r || "#" != i) {
                                    if (i != t && (c = Dt, "/" != i)) continue
                                } else u.fragment = "", c = Bt; else u.query = "", c = _t;
                                break;
                            case Dt:
                                if (i == t || "/" == i || "\\" == i && u.isSpecial() || !r && ("?" == i || "#" == i)) {
                                    if (xt(h) ? (u.shortenPath(), "/" == i || "\\" == i && u.isSpecial() || F(u.path, "")) : mt(h) ? "/" == i || "\\" == i && u.isSpecial() || F(u.path, "") : ("file" == u.scheme && !u.path.length && gt(h) && (u.host && (u.host = ""), h = q(h, 0) + ":"), F(u.path, h)), h = "", "file" == u.scheme && (i == t || "?" == i || "#" == i)) for (; u.path.length > 1 && "" === u.path[0];) N(u.path);
                                    "?" == i ? (u.query = "", c = _t) : "#" == i && (u.fragment = "", c = Bt)
                                } else h += vt(i, ht);
                                break;
                            case Nt:
                                "?" == i ? (u.query = "", c = _t) : "#" == i ? (u.fragment = "", c = Bt) : i != t && (u.path[0] += vt(i, ft));
                                break;
                            case _t:
                                r || "#" != i ? i != t && ("'" == i && u.isSpecial() ? u.query += "%27" : u.query += "#" == i ? "%23" : vt(i, ft)) : (u.fragment = "", c = Bt);
                                break;
                            case Bt:
                                i != t && (u.fragment += vt(i, pt))
                        }
                        p++
                    }
                }, parseHost: function (t) {
                    var e, r, n;
                    if ("[" == q(t, 0)) {
                        if ("]" != q(t, t.length - 1)) return W;
                        if (e = function (t) {
                            var e, r, n, o, i, a, s, u = [0, 0, 0, 0, 0, 0, 0, 0], c = 0, f = null, p = 0, h = function () {
                                return q(t, p)
                            };
                            if (":" == h()) {
                                if (":" != q(t, 1)) return;
                                p += 2, f = ++c
                            }
                            for (; h();) {
                                if (8 == c) return;
                                if (":" != h()) {
                                    for (e = r = 0; r < 4 && U(et, h());) e = 16 * e + k(h(), 16), p++, r++;
                                    if ("." == h()) {
                                        if (0 == r) return;
                                        if (p -= r, c > 6) return;
                                        for (n = 0; h();) {
                                            if (o = null, n > 0) {
                                                if (!("." == h() && n < 4)) return;
                                                p++
                                            }
                                            if (!U(Q, h())) return;
                                            for (; U(Q, h());) {
                                                if (i = k(h(), 10), null === o) o = i; else {
                                                    if (0 == o) return;
                                                    o = 10 * o + i
                                                }
                                                if (o > 255) return;
                                                p++
                                            }
                                            u[c] = 256 * u[c] + o, 2 != ++n && 4 != n || c++
                                        }
                                        if (4 != n) return;
                                        break
                                    }
                                    if (":" == h()) {
                                        if (p++, !h()) return
                                    } else if (h()) return;
                                    u[c++] = e
                                } else {
                                    if (null !== f) return;
                                    p++, f = ++c
                                }
                            }
                            if (null !== f) for (a = c - f, c = 7; 0 != c && a > 0;) s = u[c], u[c--] = u[f + a - 1], u[f + --a] = s; else if (8 != c) return;
                            return u
                        }(B(t, 1, -1)), !e) return W;
                        this.host = e
                    } else if (this.isSpecial()) {
                        if (t = y(t), U(rt, t)) return W;
                        if (e = function (t) {
                            var e, r, n, o, i, a, s, u = _(t, ".");
                            if (u.length && "" == u[u.length - 1] && u.length--, (e = u.length) > 4) return t;
                            for (r = [], n = 0; n < e; n++) {
                                if ("" == (o = u[n])) return t;
                                if (i = 10, o.length > 1 && "0" == q(o, 0) && (i = U(Y, o) ? 16 : 8, o = B(o, 8 == i ? 1 : 2)), "" === o) a = 0; else {
                                    if (!U(10 == i ? tt : 8 == i ? Z : et, o)) return t;
                                    a = k(o, i)
                                }
                                F(r, a)
                            }
                            for (n = 0; n < e; n++) if (a = r[n], n == e - 1) {
                                if (a >= H(256, 5 - e)) return null
                            } else if (a > 255) return null;
                            for (s = I(r), n = 0; n < r.length; n++) s += r[n] * H(256, 3 - n);
                            return s
                        }(t), null === e) return W;
                        this.host = e
                    } else {
                        if (U(nt, t)) return W;
                        for (e = "", r = v(t), n = 0; n < r.length; n++) e += vt(r[n], ft);
                        this.host = e
                    }
                }, cannotHaveUsernamePasswordPort: function () {
                    return !this.host || this.cannotBeABaseURL || "file" == this.scheme
                }, includesCredentials: function () {
                    return "" != this.username || "" != this.password
                }, isSpecial: function () {
                    return f(dt, this.scheme)
                }, shortenPath: function () {
                    var t = this.path, e = t.length;
                    !e || "file" == this.scheme && 1 == e && gt(t[0], !0) || t.length--
                }, serialize: function () {
                    var t = this, e = t.scheme, r = t.username, n = t.password, o = t.host, i = t.port, a = t.path,
                        s = t.query, u = t.fragment, c = e + ":";
                    return null !== o ? (c += "//", t.includesCredentials() && (c += r + (n ? ":" + n : "") + "@"), c += ct(o), null !== i && (c += ":" + i)) : "file" == e && (c += "//"), c += t.cannotBeABaseURL ? a[0] : a.length ? "/" + C(a, "/") : "", null !== s && (c += "?" + s), null !== u && (c += "#" + u), c
                }, setHref: function (t) {
                    var e = this.parse(t);
                    if (e) throw E(e);
                    this.searchParams.update()
                }, getOrigin: function () {
                    var t = this.scheme, e = this.port;
                    if ("blob" == t) try {
                        return new Wt(t.path[0]).origin
                    } catch (r) {
                        return "null"
                    }
                    return "file" != t && this.isSpecial() ? t + "://" + ct(this.host) + (null !== e ? ":" + e : "") : "null"
                }, getProtocol: function () {
                    return this.scheme + ":"
                }, setProtocol: function (t) {
                    this.parse(x(t) + ":", bt)
                }, getUsername: function () {
                    return this.username
                }, setUsername: function (t) {
                    var e = v(x(t));
                    if (!this.cannotHaveUsernamePasswordPort()) {
                        this.username = "";
                        for (var r = 0; r < e.length; r++) this.username += vt(e[r], lt)
                    }
                }, getPassword: function () {
                    return this.password
                }, setPassword: function (t) {
                    var e = v(x(t));
                    if (!this.cannotHaveUsernamePasswordPort()) {
                        this.password = "";
                        for (var r = 0; r < e.length; r++) this.password += vt(e[r], lt)
                    }
                }, getHost: function () {
                    var t = this.host, e = this.port;
                    return null === t ? "" : null === e ? ct(t) : ct(t) + ":" + e
                }, setHost: function (t) {
                    this.cannotBeABaseURL || this.parse(t, Tt)
                }, getHostname: function () {
                    var t = this.host;
                    return null === t ? "" : ct(t)
                }, setHostname: function (t) {
                    this.cannotBeABaseURL || this.parse(t, Ht)
                }, getPort: function () {
                    var t = this.port;
                    return null === t ? "" : x(t)
                }, setPort: function (t) {
                    this.cannotHaveUsernamePasswordPort() || ("" == (t = x(t)) ? this.port = null : this.parse(t, qt))
                }, getPathname: function () {
                    var t = this.path;
                    return this.cannotBeABaseURL ? t[0] : t.length ? "/" + C(t, "/") : ""
                }, setPathname: function (t) {
                    this.cannotBeABaseURL || (this.path = [], this.parse(t, Ft))
                }, getSearch: function () {
                    var t = this.query;
                    return t ? "?" + t : ""
                }, setSearch: function (t) {
                    "" == (t = x(t)) ? this.query = null : ("?" == q(t, 0) && (t = B(t, 1)), this.query = "", this.parse(t, _t)), this.searchParams.update()
                }, getSearchParams: function () {
                    return this.searchParams.facade
                }, getHash: function () {
                    var t = this.fragment;
                    return t ? "#" + t : ""
                }, setHash: function (t) {
                    "" != (t = x(t)) ? ("#" == q(t, 0) && (t = B(t, 1)), this.fragment = "", this.parse(t, Bt)) : this.fragment = null
                }, update: function () {
                    this.query = this.searchParams.serialize() || null
                }
            };
            var zt, Gt, Wt = function (t) {
                var e = c(this, $t), n = w(arguments.length, 1) > 1 ? arguments[1] : void 0, o = R(e, new Xt(t, !1, n));
                r || (e.href = o.serialize(), e.origin = o.getOrigin(), e.protocol = o.getProtocol(), e.username = o.getUsername(), e.password = o.getPassword(), e.host = o.getHost(), e.hostname = o.getHostname(), e.port = o.getPort(), e.pathname = o.getPathname(), e.search = o.getSearch(), e.searchParams = o.getSearchParams(), e.hash = o.getHash())
            }, $t = Wt.prototype, Jt = function (t, e) {
                return {
                    get: function () {
                        return O(this)[t]()
                    }, set: e && function (t) {
                        return O(this)[e](t)
                    }, configurable: !0, enumerable: !0
                }
            };
            r && (u($t, "href", Jt("serialize", "setHref")), u($t, "origin", Jt("getOrigin")), u($t, "protocol", Jt("getProtocol", "setProtocol")), u($t, "username", Jt("getUsername", "setUsername")), u($t, "password", Jt("getPassword", "setPassword")), u($t, "host", Jt("getHost", "setHost")), u($t, "hostname", Jt("getHostname", "setHostname")), u($t, "port", Jt("getPort", "setPort")), u($t, "pathname", Jt("getPathname", "setPathname")), u($t, "search", Jt("getSearch", "setSearch")), u($t, "searchParams", Jt("getSearchParams")), u($t, "hash", Jt("getHash", "setHash"))), s($t, "toJSON", (function () {
                return O(this).serialize()
            }), {enumerable: !0}), s($t, "toString", (function () {
                return O(this).serialize()
            }), {enumerable: !0}), A && (zt = A.createObjectURL, Gt = A.revokeObjectURL, zt && s(Wt, "createObjectURL", i(zt, A)), Gt && s(Wt, "revokeObjectURL", i(Gt, A))), b(Wt, "URL"), e({
                global: !0,
                constructor: !0,
                forced: !n,
                sham: !r
            }, {URL: Wt})
        })), nn = c((() => {
            rn()
        })), on = c((() => {
            var t = St(), e = j(), r = h(), n = ve(), o = Vt(), i = Br(), a = e("URL");
            t({
                target: "URL", stat: !0, forced: !(i && r((function () {
                    a.canParse()
                })))
            }, {
                canParse: function (t) {
                    var e = n(arguments.length, 1), r = o(t),
                        i = e < 2 || void 0 === arguments[1] ? void 0 : o(arguments[1]);
                    try {
                        return !!new a(r, i)
                    } catch (s) {
                        return !1
                    }
                }
            })
        })), an = c((() => {
            var t = St(), e = d();
            t({target: "URL", proto: !0, enumerable: !0}, {
                toJSON: function () {
                    return e(URL.prototype.toString, this)
                }
            })
        })), sn = c(((t, e) => {
            Yr(), nn(), on(), an();
            var r = Xe();
            e.exports = r.URL
        })), un = c(((t, e) => {
            var r = sn();
            e.exports = r
        })), cn = c(((t, e) => {
            var r = un();
            e.exports = r
        })), fn = c(((t, e) => {
            var r = cn();
            e.exports = r
        })), pn = c(((t, e) => {
            e.exports = fn()
        })), hn = (f(rr()), f(dr()), f(Sr()), f(Ar()), f(Ur()), f(_r()), f(pn()), "fetch" in window),
        ln = "Request" in window, vn = "Headers" in window, dn = {POST: "*", PUT: "*", PATCH: "*", DELETE: "*"},
        gn = "TOKEN_PATH", yn = new class {
            setProxyServerHost(t) {
                this.proxyServerHost = t
            }

            setOptions(t = {}) {
                if ("object" === typeof t) {
                    if (Object.keys(t).includes("protect")) {
                        const {
                            protect: e = {},
                            allow: r = {},
                            downgradeLimit: n = -1,
                            downgradeMaxAge: o = 1e3,
                            tokenFetchTimeout: i = 1e4
                        } = t;
                        return this.setProxyConfig(e), this.setAllowedHost(r), this.setDowngradeLimit(n), this.setDowngradeMaxAge(o), void this.setTokenFetchTimeout(i)
                    }
                    this.setProxyConfig(t)
                }
            }

            setProxyPaths(t) {
                this.proxyPaths = t
            }

            setProxyConfig(t = window.location.host) {
                this.protectionConfig = {}, "string" === typeof t ? this.protectionConfig[t] = r({}, dn) : Array.isArray(t) ? t.forEach((t => {
                    this.protectionConfig[t] = r({}, dn)
                })) : "[object Object]" === Object.prototype.toString.call(t) && Object.keys(t).forEach((e => {
                    this.protectionConfig[e] = r({}, dn);
                    const n = t[e];
                    "[object Object]" === Object.prototype.toString.call(n) && Object.keys(n).forEach((t => {
                        this.protectionConfig[e][t.toUpperCase()] = n[t]
                    }))
                }))
            }

            setAllowedHost(t) {
                Object.keys(t).forEach((e => {
                    this.whiteListConfig[e] = {};
                    const r = t[e];
                    Object.keys(r).forEach((t => {
                        this.whiteListConfig[e][t.toUpperCase()] = r[t]
                    }))
                }))
            }

            setDowngradeMaxAge(t = 1e3) {
                this.downgradeMaxAge = t
            }

            setDowngradeLimit(t = -1) {
                this.downgradeLimit = t
            }

            setTokenFetchTimeout(t = 1e4) {
                this.tokenFetchTimeout = t
            }

            checkDowngradeLimit(t) {
                return -1 !== this.downgradeLimit && (this.downgradeLimitMap[t] || 0) >= this.downgradeLimit
            }

            incrementDowngradeLimitCount(t) {
                if (-1 === this.downgradeLimit) return;
                const e = this.downgradeLimitMap[t] || 0;
                this.downgradeLimitMap[t] = e + 1
            }

            getTokenPath(t, e) {
                const r = this.protectionConfig;
                return r[t] && r[t][gn] ? r[t][gn] : e
            }

            matchConfig(t, e, r, n) {
                r = r.toUpperCase();
                const o = t;
                if (!o[e]) return !1;
                if (!o[e][r]) return !1;
                const i = o[e][r];
                return i instanceof RegExp ? i.test(n) : Array.isArray(i) ? i.some((t => t instanceof RegExp ? t.test(n) : t === n)) : "*" === i || i === n
            }

            shouldAllowRequest(t, e, r) {
                return this.matchConfig(this.whiteListConfig, t, e, r)
            }

            shouldProtectRequest(t, e, r) {
                const n = this.matchConfig(this.protectionConfig, t, e, r);
                if (!n) for (const o of this.proxyPaths) if (new RegExp(o).test(r)) return !0;
                return n
            }

            patchXMLHttpRequest() {
                const t = this;
                XMLHttpRequest.prototype.open = function () {
                    this.openArgs = Array.from(arguments), t.nativeXMLHttpRequestOpen.apply(this, arguments)
                }, XMLHttpRequest.prototype.setRequestHeader = function () {
                    void 0 === this.headerArgs && (this.headerArgs = {}), 2 === arguments.length && (this.headerArgs[arguments[0]] = arguments[1]), t.nativeXMLHttpRequestSetRequestHeader.apply(this, arguments)
                }, XMLHttpRequest.prototype.send = function () {
                    const {openArgs: e} = this, r = arguments, n = e[0] || "GET", o = new URL(e[1], window.location.href);
                    let i = new URL(o);
                    const a = i.host;
                    return this.sendArgs = Array.from(arguments), t.shouldAllowRequest(o.hostname, n, o.pathname) ? t.nativeXMLHttpRequestSend.apply(this, r) : t.shouldProtectRequest(o.host, n, o.pathname) ? e.length >= 3 && !e[2] ? (e[1] = t.setProxyServer(e[1]), t.nativeXMLHttpRequestOpen.apply(this, this.openArgs), void 0 !== this.headerArgs && void 0 !== this.headerArgs && Object.entries(this.headerArgs).forEach((([e, r]) => {
                        t.nativeXMLHttpRequestSetRequestHeader.call(this, e, r), "host" !== e && "Host" !== e || t.nativeXMLHttpRequestSetRequestHeader.call(this, t.proxyHeader, r)
                    })), t.nativeXMLHttpRequestSetRequestHeader.call(this, t.proxyHeader, a), t.nativeXMLHttpRequestSend.apply(this, r)) : (e[1] = t.setProxyServer(e[1]), t.nativeXMLHttpRequestOpen.apply(this, this.openArgs), void 0 !== this.headerArgs && Object.entries(this.headerArgs).forEach((([e, r]) => {
                        t.nativeXMLHttpRequestSetRequestHeader.call(this, e, r), "host" !== e && "Host" !== e || t.nativeXMLHttpRequestSetRequestHeader.call(this, t.proxyHeader, r)
                    })), t.nativeXMLHttpRequestSetRequestHeader.call(this, t.proxyHeader, a), t.nativeXMLHttpRequestSend.apply(this, r)) : t.nativeXMLHttpRequestSend.apply(this, r)
                }
            }

            patchFetch() {
                if (!hn) return;
                const t = this;
                window.fetch = function (e, r) {
                    let n, o;
                    ln && e instanceof Request ? (n = e.url, o = e.method) : (n = e, o = r && r.method ? r.method : "GET");
                    const i = new URL(n).host, a = new URL(n, window.location.href);
                    if (t.shouldAllowRequest(a.hostname, o, a.pathname)) return t.nativeFetch.apply(this, [e, r]);
                    if (!t.shouldProtectRequest(a.host, o, a.pathname)) return t.nativeFetch.apply(this, [e, r]);
                    if (ln && e instanceof Request) {
                        if (e.headers.set(t.proxyHeader, i), "string" === typeof e.url) {
                            const r = t.setProxyServer(e.url);
                            e = new Request(r)
                        }
                    } else if ((r = r || {}).headers = r.headers || {}, vn && r.headers instanceof Headers) {
                        if (r.headers.set(t.proxyHeader, i), "string" === typeof e) e = t.setProxyServer(e); else if (e instanceof Request) {
                            const r = t.setProxyServer(e.url);
                            e = new Request(r, e)
                        }
                    } else if (Array.isArray(r.headers)) {
                        let n = !1;
                        if (r.headers.forEach((e => {
                            e[0] === t.proxyHeader && (n = !0)
                        })), !n) if (r.headers.push([t.proxyHeader, i]), "string" === typeof e) e = t.setProxyServer(e); else if (e instanceof Request) {
                            const r = t.setProxyServer(e.url);
                            e = new Request(r, e)
                        }
                    } else if ("string" === typeof e) e = t.setProxyServer(e); else if (e instanceof Request) {
                        const r = t.setProxyServer(e.url);
                        e = new Request(r, e)
                    }
                    return t.nativeFetch.apply(this, [e, r])
                }
            }

            setProxyServer(t) {
                const e = this;
                if (t.startsWith("http")) try {
                    const r = /^(https?:\/\/)([^\/]+)(.*)$/;
                    return t.replace(r, (function (t, r, n, o) {
                        return r + e.proxyServerHost + o
                    }))
                } catch (r) {
                    return t
                }
                return t
            }

            constructor() {
                this.proxyServerHost = "", this.proxyHeader = "x-original-host", this.tokenQueryName = "x-cthulhu-token", this.responseHeaderName = "x-cthulhu-web-token", this.tokenFetchTimeout = 1e4, this.cthulhuRequestHeader = "x-cthulhu-request", this.sdkVersionHeaderName = "x-cthulhu-csrf-version", this.nativeXMLHttpRequest = window.XMLHttpRequest.prototype.constructor, this.nativeXMLHttpRequestOpen = window.XMLHttpRequest.prototype.open, this.nativeXMLHttpRequestSend = window.XMLHttpRequest.prototype.send, this.nativeXMLHttpRequestSetRequestHeader = window.XMLHttpRequest.prototype.setRequestHeader, this.nativeFetch = window.fetch, this.tokenMap = {}, this.protectionConfig = {}, this.whiteListConfig = {}, this.sdkVersion = "1.1.4", this.downgradeMaxAge = 1e3, this.downgradeLimit = -1, this.downgradeLimitMap = {}, this.proxyPaths = [], this.patchXMLHttpRequest(), this.patchFetch()
            }
        }
}, "object" === typeof module && "object" === typeof module.exports ? e(exports) : "function" === typeof define && define.amd ? define(["exports"], e) : (t = "undefined" !== typeof globalThis ? globalThis : t || self) && e(t.coconut = {});
