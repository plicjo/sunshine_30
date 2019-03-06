
function debounce(e, t, n) {
    function i() {
        var c = Date.now() - s;
        c < t && c >= 0 ? o = setTimeout(i, t - c) : (o = null, n || (l = e.apply(a, r), a = r = null))
    }
    var o, r, a, s, l;
    null == t && (t = 100);
    var c = function() {
        a = this, r = arguments, s = Date.now();
        var c = n && !o;
        return o || (o = setTimeout(i, t)), c && (l = e.apply(a, r), a = r = null), l
    };
    return c.clear = function() {
        o && (clearTimeout(o), o = null)
    }, c
}
if (function(e) {
        ! function() {
            if (!Object.defineProperty) {
                var e = Object.prototype.hasOwnProperty("__defineGetter__"),
                    t = "Getters & setters cannot be defined on this javascript engine",
                    n = "A property cannot both have accessors and be writable or have a value";
                Object.defineProperty = function(i, o, r) {
                    if (null === i || !(i instanceof Object || "object" == typeof i)) throw new TypeError("Object must be an object");
                    if (!(r instanceof Object)) throw new TypeError("Descriptor must be an object");
                    var a = String(o),
                        s = "get" in r && typeof r.get,
                        l = "set" in r && typeof r.set,
                        c = "value" in r || "writable" in r;
                    if (s) {
                        if ("function" !== s) throw new TypeError("Getter expected a function");
                        if (!e) throw new TypeError(t);
                        if (c) throw new TypeError(n);
                        i.__defineGetter__(a, r.get)
                    } else i[a] = r.value;
                    if (l) {
                        if ("function" !== l) throw new TypeError("Setter expected a function");
                        if (!e) throw new TypeError(t);
                        if (c) throw new TypeError(n);
                        i.__defineSetter__(a, r.set)
                    }
                    return i
                }
            }
        }(), "DOMTokenList" in this && function(e) {
            return !("classList" in e) || !e.classList.toggle("x", !1) && !e.className
        }(document.createElement("x")) || function(e, t, n) {
            function i(e) {
                if (/^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/.test(e)) return String(e);
                throw new Error("InvalidCharacterError: DOM Exception 5")
            }

            function o(e) {
                for (var t, n = -1, i = {}; t = e[++n];) i[t] = !0;
                return i
            }

            function r(e, t) {
                var i, o = [];
                for (i in t) t[i] && o.push(i);
                n.apply(e, [0, e.length].concat(o))
            }
            e.DOMTokenList = function() {}, e.DOMTokenList.prototype = {
                constructor: DOMTokenList,
                item: function(e) {
                    return this[parseFloat(e)] || null
                },
                length: Array.prototype.length,
                toString: function() {
                    return t.call(this, " ")
                },
                add: function() {
                    for (var e, t = o(this), n = 0; n in arguments; ++n) e = i(arguments[n]), t[e] = !0;
                    r(this, t)
                },
                contains: function(e) {
                    return e in o(this)
                },
                remove: function() {
                    for (var e, t = o(this), n = 0; n in arguments; ++n) e = i(arguments[n]), t[e] = !1;
                    r(this, t)
                },
                toggle: function(e) {
                    var t = o(this),
                        n = 1 in arguments ? !arguments[1] : i(e) in t;
                    return t[e] = !n, r(this, t), !n
                }
            }
        }(this, Array.prototype.join, Array.prototype.splice), "document" in this && "classList" in document.documentElement || function(e, t) {
            Object.defineProperty(Element.prototype, "classList", {
                get: function() {
                    function n() {
                        var e = "object" == typeof r.className ? r.className.baseVal : r.className;
                        t.apply(o, [0, o.length].concat((e || "").replace(/^\s+|\s+$/g, "").split(/\s+/)))
                    }

                    function i() {
                        r.attachEvent && r.detachEvent("onpropertychange", n), "object" == typeof r.className ? r.className.baseVal = s.toString.call(o) : r.className = s.toString.call(o), r.attachEvent && r.attachEvent("onpropertychange", n)
                    }
                    var o, r = this,
                        a = e.DOMTokenList,
                        s = a.prototype,
                        l = function() {};
                    return l.prototype = new a, l.prototype.item = function(e) {
                        return n(), s.item.apply(o, arguments)
                    }, l.prototype.toString = function() {
                        return n(), s.toString.apply(o, arguments)
                    }, l.prototype.add = function() {
                        return n(), s.add.apply(o, arguments), i()
                    }, l.prototype.contains = function(e) {
                        return n(), s.contains.apply(o, arguments)
                    }, l.prototype.remove = function() {
                        return n(), s.remove.apply(o, arguments), i()
                    }, l.prototype.toggle = function(e) {
                        return n(), e = s.toggle.apply(o, arguments), i(), e
                    }, o = new l, r.attachEvent && r.attachEvent("onpropertychange", n), o
                }
            })
        }(this, Array.prototype.splice), "Document" in this || (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(), this.Document.prototype = document), "Element" in this && "remove" in Element.prototype || (Document.prototype.remove = Element.prototype.remove = function() {
            this.parentNode && this.parentNode.removeChild(this)
        }, Text && (Text.prototype.remove = Element.prototype.remove));
        var t = function() {
            function e(e) {
                var t = e[0];
                switch (e.length) {
                    case 1:
                        return t();
                    case 2:
                        return t(e[1]);
                    case 3:
                        return t(e[1], e[2])
                }
                return t.apply(window, r.call(e, 1))
            }

            function t(t) {
                var n, o = t.data;
                "string" == typeof o && 0 == o.indexOf(a) && (n = i[o]) && (delete i[o], e(n))
            }
            var n = 0,
                i = {},
                o = !0,
                r = Array.prototype.slice,
                a = "setImmediatePolyfillMessage";
            return function() {
                for (var e = n++, r = a + e, s = arguments.length, l = new Array(s); s--;) l[s] = arguments[s];
                return i[r] = l, o && (o = !1, window.addEventListener("message", t)), window.postMessage(r, "*"), e
            }
        }();
        "isArray" in Array || function(e) {
                Object.defineProperty(Array, "isArray", {
                    configurable: !0,
                    value: function(t) {
                        return "[object Array]" === e.call(t)
                    },
                    writable: !0
                })
            }(Object.prototype.toString), "Promise" in this || function(e) {
                "use strict";

                function n(e) {
                    this[T] = e
                }

                function i(e) {
                    return e instanceof n
                }

                function o(e) {
                    return Object(e) === e
                }

                function r(e) {
                    return "function" == typeof e
                }

                function a(e) {
                    return e instanceof g
                }

                function s(e) {
                    return e
                }

                function l(e) {
                    throw e
                }

                function c(e, t, n) {
                    e[b] || (e[b] = [], e[S] = []), e[b].push(t), e[S].push(n)
                }

                function u(e) {
                    delete e[b], delete e[S]
                }

                function d(e) {
                    var t, n = e.length;
                    for (t = 0; n > t; t++) e[t]()
                }

                function f(e, t, n) {
                    var o = p(n);
                    a(o) ? o.then(e, t) : i(o) ? t(o[T]) : e(n)
                }

                function p(e) {
                    var t;
                    if (a(e)) return e;
                    if (o(e)) {
                        try {
                            t = e.then
                        } catch (e) {
                            return new n(e)
                        }
                        if (r(t)) return new g(function(n, i) {
                            q(function() {
                                try {
                                    t.call(e, n, i)
                                } catch (e) {
                                    i(e)
                                }
                            })
                        })
                    }
                    return null
                }

                function h(e, t) {
                    function n(t) {
                        e[y] == k && m(e, t)
                    }

                    function i(t) {
                        e[y] == k && v(e, t)
                    }
                    try {
                        t(n, i)
                    } catch (e) {
                        i(e)
                    }
                }

                function m(e, t) {
                    var n, o = p(t);
                    a(o) ? (e[y] = x, o.then(function(t) {
                        m(e, t)
                    }, function(t) {
                        v(e, t)
                    })) : i(o) ? v(e, o[T]) : (e[y] = C, e[w] = t, (n = e[b]) && n.length && (u(e), d(n)))
                }

                function v(e, t) {
                    var n = e[S];
                    e[y] = A, e[w] = t, n && n.length && (u(e), d(n))
                }

                function g(e) {
                    var t = this;
                    if (!a(t)) throw new TypeError($);
                    t[y] = k, t[w] = void 0, h(t, e)
                }
                var y = "[[PromiseStatus]]",
                    w = "[[PromiseValue]]",
                    b = "[[OnFulfilled]]",
                    S = "[[OnRejected]]",
                    T = "[[OriginalError]]",
                    k = "pending",
                    x = "internal pending",
                    C = "fulfilled",
                    A = "rejected",
                    E = "not an array.",
                    $ = 'constructor Promise requires "new".',
                    q = t,
                    L = Array.isArray || function(e) {
                        return "[object Array]" == Object.prototype.toString.call(e)
                    };
                g.prototype.then = function(e, t) {
                    var n, i = this;
                    return e = r(e) ? e : s, t = r(t) ? t : l, n = new g(function(o, r) {
                        function a(e) {
                            var t;
                            try {
                                t = e(i[w])
                            } catch (e) {
                                return void r(e)
                            }
                            t === n ? r(new TypeError("then() cannot return same Promise that it resolves.")) : f(o, r, t)
                        }

                        function s() {
                            q(a, e)
                        }

                        function l() {
                            q(a, t)
                        }
                        switch (i[y]) {
                            case C:
                                s();
                                break;
                            case A:
                                l();
                                break;
                            default:
                                c(i, s, l)
                        }
                    })
                }, g.prototype.catch = function(e) {
                    return this.then(s, e)
                }, g.resolve = function(e) {
                    var t = p(e);
                    return a(t) ? t : new g(function(n, o) {
                        i(t) ? o(t[T]) : n(e)
                    })
                }, g.reject = function(e) {
                    return new g(function(t, n) {
                        n(e)
                    })
                }, g.race = function(e) {
                    return new g(function(t, n) {
                        var i, o;
                        if (L(e))
                            for (o = e.length, i = 0; o > i; i++) f(t, n, e[i]);
                        else n(new TypeError(E))
                    })
                }, g.all = function(e) {
                    return new g(function(t, n) {
                        var o, r, s, l, c = 0,
                            u = 0;
                        if (L(e)) {
                            for (e = e.slice(0), r = e.length, l = 0; r > l; l++) s = e[l], o = p(s), a(o) ? (u++, o.then(function(n) {
                                return function(i) {
                                    e[n] = i, ++c == u && t(e)
                                }
                            }(l), n)) : i(o) ? n(o[T]) : e[l] = s;
                            u || t(e)
                        } else n(new TypeError(E))
                    })
                }, "undefined" != typeof module && module.exports ? module.exports = e.Promise || g : e.Promise || (e.Promise = g)
            }(this), "every" in Array.prototype || (Array.prototype.every = function(e) {
                if (void 0 === this || null === this) throw new TypeError(this + "is not an object");
                if (!(e instanceof Function)) throw new TypeError(e + " is not a function");
                for (var t = Object(this), n = arguments[1], i = t instanceof String ? t.split("") : t, o = Number(i.length) || 0, r = -1; ++r < o;)
                    if (r in i && !e.call(n, i[r], r, t)) return !1;
                return !0
            }), "filter" in Array.prototype || (Array.prototype.filter = function(e) {
                if (void 0 === this || null === this) throw new TypeError(this + "is not an object");
                if (!(e instanceof Function)) throw new TypeError(e + " is not a function");
                for (var t, n = Object(this), i = arguments[1], o = n instanceof String ? n.split("") : n, r = Math.max(Math.min(o.length, 9007199254740991), 0) || 0, a = -1, s = []; ++a < r;) t = o[a], a in o && e.call(i, t, a, n) && s.push(t);
                return s
            }), "forEach" in Array.prototype || (Array.prototype.forEach = function(e) {
                if (void 0 === this || null === this) throw new TypeError(this + "is not an object");
                if (!(e instanceof Function)) throw new TypeError(e + " is not a function");
                for (var t = Object(this), n = arguments[1], i = t instanceof String ? t.split("") : t, o = Math.max(Math.min(i.length, 9007199254740991), 0) || 0, r = -1; ++r < o;) r in i && e.call(n, i[r], r, t)
            }), "indexOf" in Array.prototype || (Array.prototype.indexOf = function(e) {
                if (void 0 === this || null === this) throw new TypeError(this + "is not an object");
                var t = this instanceof String ? this.split("") : this,
                    n = Math.max(Math.min(t.length, 9007199254740991), 0) || 0,
                    i = Number(arguments[1]) || 0;
                for (i = (0 > i ? Math.max(n + i, 0) : i) - 1; ++i < n;)
                    if (i in t && t[i] === e) return i;
                return -1
            }), "lastIndexOf" in Array.prototype || (Array.prototype.lastIndexOf = function(e) {
                if (void 0 === this || null === this) throw new TypeError(this + "is not an object");
                var t = this instanceof String ? this.split("") : this,
                    n = Math.max(Math.min(t.length, 9007199254740991), 0) || 0,
                    i = Number(arguments[1]) || 0;
                i = 1 in arguments ? (0 > i ? Math.max(n + i, 0) : i) + 1 : n;
                for (; --i >= 0;)
                    if (i in t && t[i] === e) return i;
                return -1
            }), "map" in Array.prototype || (Array.prototype.map = function(e) {
                if (void 0 === this || null === this) throw new TypeError(this + "is not an object");
                if (!(e instanceof Function)) throw new TypeError(e + " is not a function");
                for (var t = Object(this), n = arguments[1], i = t instanceof String ? t.split("") : t, o = Math.max(Math.min(i.length, 9007199254740991), 0) || 0, r = -1, a = []; ++r < o;) r in i && (a[r] = e.call(n, i[r], r, t));
                return a
            }), "reduce" in Array.prototype || (Array.prototype.reduce = function(e) {
                if (void 0 === this || null === this) throw new TypeError(this + "is not an object");
                if (!(e instanceof Function)) throw new TypeError(e + " is not a function");
                var t, n = Object(this),
                    i = (arguments[1], n instanceof String ? n.split("") : n),
                    o = Math.max(Math.min(i.length, 9007199254740991), 0) || 0,
                    r = -1;
                if (1 in arguments) t = arguments[1];
                else {
                    for (; ++r < o && !(r in i););
                    if (r >= o) throw new TypeError("Reduce of empty array with no initial value");
                    t = i[r]
                }
                for (; ++r < o;) r in i && (t = e(t, i[r], r, n));
                return t
            }), "reduceRight" in Array.prototype || (Array.prototype.reduceRight = function(e) {
                if (void 0 === this || null === this) throw new TypeError(this + "is not an object");
                if (!(e instanceof Function)) throw new TypeError(e + " is not a function");
                var t, n = Object(this),
                    i = (arguments[1], n instanceof String ? n.split("") : n),
                    o = Math.max(Math.min(i.length, 9007199254740991), 0) || 0;
                if (1 in arguments) t = arguments[1];
                else {
                    for (; --o > -1 && !(o in i););
                    if (-1 >= o) throw new TypeError("Reduce of empty array with no initial value");
                    t = i[o]
                }
                for (; --o > -1;) o in i && (t = e(t, i[o], o, n));
                return t
            }), "some" in Array.prototype || (Array.prototype.some = function(e) {
                if (void 0 === this || null === this) throw new TypeError(this + "is not an object");
                if (!(e instanceof Function)) throw new TypeError(e + " is not a function");
                for (var t = Object(this), n = arguments[1], i = t instanceof String ? t.split("") : t, o = Math.max(Math.min(i.length, 9007199254740991), 0) || 0, r = -1; ++r < o;)
                    if (r in i && e.call(n, i[r], r, t)) return !0;
                return !1
            }), "Window" in this || ((this.Window = this.constructor = new Function("return function Window() {}")()).prototype = this),
            function(e) {
                if (!("Event" in e)) return !1;
                if ("function" == typeof e.Event) return !0;
                try {
                    return new Event("click"), !0
                } catch (e) {
                    return !1
                }
            }(this) || (this.Event = function(e, t) {
                if (!e) throw new Error("Not enough arguments");
                var n = document.createEvent("Event"),
                    i = !(!t || void 0 === t.bubbles) && t.bubbles,
                    o = !(!t || void 0 === t.cancelable) && t.cancelable;
                return n.initEvent(e, i, o), n
            }), "CustomEvent" in this && ("function" == typeof this.CustomEvent || this.CustomEvent.toString().indexOf("CustomEventConstructor") > -1) || (this.CustomEvent = function(e, t) {
                if (!e) throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');
                var n;
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: null
                };
                try {
                    n = document.createEvent("CustomEvent"), n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail)
                } catch (i) {
                    n = document.createEvent("Event"), n.initEvent(e, t.bubbles, t.cancelable), n.detail = t.detail
                }
                return n
            }, CustomEvent.prototype = Event.prototype), "Date" in this && "now" in this.Date && "getTime" in this.Date.prototype || (Date.now = function() {
                return (new Date).getTime()
            }), "Date" in this && "toISOString" in Date.prototype || (Date.prototype.toISOString = function() {
                function e(e, t) {
                    return e = "" + e, "0000".substr(0, t - e.length) + e
                }
                var t = this;
                return t.getUTCFullYear() + "-" + e(t.getUTCMonth() + 1, 2) + "-" + e(t.getUTCDate(), 2) + "T" + e(t.getUTCHours(), 2) + ":" + e(t.getUTCMinutes(), 2) + ":" + e(t.getUTCSeconds(), 2) + "." + e(t.getUTCMilliseconds(), 3) + "Z"
            }), "document" in this && "cloneNode" in document.documentElement && function() {
                var e = document.createElement("input");
                e.checked = !0, e.cloneNode().checked
            }(), "document" in this && "matches" in document.documentElement || (Element.prototype.matches = Element.prototype.matchesSelector = Element.prototype.mozMatchesSelector), "document" in this && "closest" in document.documentElement || (Element.prototype.closest = function(e) {
                for (var t = this; t;) {
                    if (t.matches(e)) return t;
                    t = t.parentElement
                }
                return null
            }), "addEventListener" in this || document.attachEvent("onreadystatechange", function() {
                "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded", {
                    bubbles: !0
                }))
            }), this.addEventListener("focus", function(e) {
                e.target.dispatchEvent(new Event("focusin", {
                    bubbles: !0,
                    cancelable: !0
                }))
            }, !0), this.addEventListener("blur", function(e) {
                e.target.dispatchEvent(new Event("focusout", {
                    bubbles: !0,
                    cancelable: !0
                }))
            }, !0), "onhashchange" in this || function(e) {
                var t = e.location.hash,
                    n = function() {
                        t !== e.location.hash && (t = e.location.hash, e.dispatchEvent(new Event("hashchange"))), setTimeout(n, 200)
                    };
                e.onhashchange = function() {}, n()
            }(this), "bind" in Function.prototype || Object.defineProperty(Function.prototype, "bind", {
                value: function(e) {
                    var t, n = Array,
                        i = Object,
                        o = i.prototype,
                        r = n.prototype,
                        a = function() {},
                        s = o.toString,
                        l = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                        c = Function.prototype.toString,
                        u = function(e) {
                            try {
                                return c.call(e), !0
                            } catch (e) {
                                return !1
                            }
                        };
                    t = function(e) {
                        if ("function" != typeof e) return !1;
                        if (l) return u(e);
                        var t = s.call(e);
                        return "[object Function]" === t || "[object GeneratorFunction]" === t
                    };
                    var d = r.slice,
                        f = r.concat,
                        p = r.push,
                        h = Math.max,
                        m = this;
                    if (!t(m)) throw new TypeError("Function.prototype.bind called on incompatible " + m);
                    for (var v, g = d.call(arguments, 1), y = function() {
                            if (this instanceof v) {
                                var t = m.apply(this, f.call(g, d.call(arguments)));
                                return i(t) === t ? t : this
                            }
                            return m.apply(e, f.call(g, d.call(arguments)))
                        }, w = h(0, m.length - g.length), b = [], S = 0; w > S; S++) p.call(b, "$" + S);
                    return v = Function("binder", "return function (" + b.join(",") + "){ return binder.apply(this, arguments); }")(y), m.prototype && (a.prototype = m.prototype, v.prototype = new a, a.prototype = null), v
                }
            }), "JSON" in this || function(e) {
                function t(e) {
                    this.line = 1, this.col = 1, this._tokLen = 0, this._str = e
                }

                function n(e) {
                    this.lex = e
                }

                function i(e, t, n) {
                    return void 0 === n ? void delete e[t] : void(e[t] = n)
                }

                function o(e, t, n) {
                    var r, l, c = e[t];
                    if ("Array" === a.call(c).slice(8, -1))
                        for (r = 0, l = c.length; l > r; r++) i(c, r, o(c, r, n));
                    else if ("object" == typeof c)
                        for (r in c) s.call(c, r) && i(c, r, o(c, r, n));
                    return n.call(e, t, c)
                }

                function r(e, t) {
                    return e = String(e), e.length >= t ? e : new Array(t - e.length + 1).join("0") + e
                }
                var a = Object.prototype.toString,
                    s = Object.prototype.hasOwnProperty,
                    l = ",",
                    c = {
                        PUNCTUATOR: 1,
                        STRING: 2,
                        NUMBER: 3,
                        BOOLEAN: 4,
                        NULL: 5
                    },
                    u = {
                        "{": 1,
                        "}": 1,
                        "[": 1,
                        "]": 1,
                        ",": 1,
                        ":": 1,
                        '"': 2,
                        t: 4,
                        f: 4,
                        n: 5
                    },
                    d = {
                        b: "\b",
                        f: "\f",
                        n: "\n",
                        r: "\r",
                        t: "\t",
                        '"': '"',
                        "\\": "\\",
                        "/": "/"
                    },
                    f = /^(?:[{}:,\[\]]|true|false|null|"(?:[^"\\\u0000-\u001F]|\\["\\\/bfnrt]|\\u[0-9A-F]{4})*"|-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)/,
                    p = /^[\t ]+/,
                    h = /^\r?\n/;
                t.prototype = {
                    getNextToken: function() {
                        var e, t, n = this._str;
                        if (this.col += this._tokLen, !n.length) return "END";
                        if (e = f.exec(n)) t = u[e[0].charAt(0)] || c.NUMBER;
                        else {
                            if (e = p.exec(n)) return this._tokLen = e[0].length, this._str = n.slice(this._tokLen), this.getNextToken();
                            if (e = h.exec(n)) return this._tokLen = 0, this._str = n.slice(e[0].length), this.line++, this.col = 1, this.getNextToken();
                            this.error("Invalid token")
                        }
                        return this._tokLen = e[0].length, this._str = n.slice(this._tokLen), {
                            type: t,
                            value: e[0]
                        }
                    },
                    error: function(e, t, n) {
                        var i = new SyntaxError(e);
                        throw i.line = t || this.line, i.col = n || this.col, i
                    }
                }, n.prototype = {
                    parse: function() {
                        var e = this.lex,
                            t = this.getValue();
                        return "END" !== e.getNextToken() && e.error("Illegal token"), t
                    },
                    getObject: function() {
                        for (var e, t, n, i, o, r = {}, a = this.lex, s = !1;;) {
                            if (e = a.getNextToken(), "}" === (t = e.value)) return r;
                            s ? t === l ? (i = a.line, o = a.col - 1, e = a.getNextToken(), "}" === (t = e.value) && a.error("Invalid trailing comma", i, o)) : a.error("Illegal token where expect comma or right curly bracket") : t === l && a.error("Invalid leading comma"), e.type != c.STRING && a.error("Illegal token where expect string property name"), n = this.getString(t), e = a.getNextToken(), t = e.value, ":" != t && a.error("Illegal token where expect colon"), r[n] = this.getValue(), s = !0
                        }
                    },
                    getArray: function() {
                        for (var e, t, n, i, o = [], r = this.lex, a = !1;;) {
                            if (e = r.getNextToken(), "]" === (t = e.value)) return o;
                            a ? t === l ? (n = r.line, i = r.col - 1, e = r.getNextToken(), "]" === (t = e.value) && r.error("Invalid trailing comma", n, i)) : r.error("Illegal token where expect comma or right square bracket") : t === l && r.error("Invalid leading comma"), o.push(this.getValue(e)), a = !0
                        }
                    },
                    getString: function(e) {
                        return e.slice(1, -1).replace(/\\u?([0-9A-F]{4}|["\\\/bfnrt])/g, function(e, t) {
                            return d[t] || String.fromCharCode(parseInt(t, 16))
                        })
                    },
                    getValue: function(e) {
                        var t = this.lex,
                            n = e || t.getNextToken(),
                            i = n.value;
                        switch (n.type) {
                            case c.PUNCTUATOR:
                                if ("{" === i) return this.getObject();
                                if ("[" === i) return this.getArray();
                                t.error("Illegal punctoator");
                                break;
                            case c.STRING:
                                return this.getString(i);
                            case c.NUMBER:
                                return Number(i);
                            case c.BOOLEAN:
                                return "true" === i;
                            case c.NULL:
                                return null;
                            default:
                                t.error("Invalid value")
                        }
                    }
                }, e.JSON = {
                    parse: function(e, i) {
                        var r = new n(new t(e)).parse();
                        return "function" == typeof i ? o({
                            "": r
                        }, "", i) : r
                    },
                    stringify: function() {
                        var e, t, n, i, o, l, c = arguments[0],
                            u = "function" == typeof arguments[1] ? arguments[1] : null,
                            d = arguments[2] || "",
                            f = d ? " " : "",
                            p = d ? "\n" : "",
                            h = a.call(c).slice(8, -1);
                        if (null === c || "Boolean" === h || "Number" === h) return c;
                        if ("Array" === h) {
                            for (e = [], o = c.length, i = 0, l; o > i; ++i) l = u ? u(i, c[i]) : c[i], l = this.stringify(l, u, d), (void 0 === l || null === l) && (l = "null"), e.push(l);
                            return "[" + p + e.join("," + p).replace(/^/gm, d) + p + "]"
                        }
                        if ("Date" === h) return '"' + c.getUTCFullYear() + "-" + r(c.getUTCMonth() + 1, 2) + "-" + r(c.getUTCDate(), 2) + "T" + r(c.getUTCHours(), 2) + ":" + r(c.getUTCMinutes(), 2) + ":" + r(c.getUTCSeconds(), 2) + "." + r(c.getUTCMilliseconds(), 3) + 'Z"';
                        if ("String" === h) return '"' + c.replace(/"/g, '\\"') + '"';
                        if ("object" == typeof c) {
                            e = [], n = !1;
                            for (t in c) s.call(c, t) && (l = u ? u(t, c[t]) : c[t], void 0 !== (l = this.stringify(l, u, d)) && (n = !0, e.push('"' + t + '":' + f + l)));
                            return n ? "{" + p + e.join("," + p).replace(/^/gm, d) + p + "}" : "{}"
                        }
                    }
                }
            }(this), "assign" in Object || (Object.assign = function(e, t) {
                for (var n, i, o = 1; o < arguments.length; ++o) {
                    i = arguments[o];
                    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            }), "defineProperties" in Object || (Object.defineProperties = function(e, t) {
                for (var n in t) Object.defineProperty(e, n, t[n]);
                return e
            }), "create" in Object || (Object.create = function(e, t) {
                if ("object" != typeof e && null !== e) throw TypeError("Object prototype may only be an Object or null");
                var n = new Function("e", "function Object() {}Object.prototype=e;return new Object")(e);
                return n.constructor.prototype = e, 1 in arguments && Object.defineProperties(n, t), n
            }), "getOwnPropertyNames" in Object || (Object.getOwnPropertyNames = function(e) {
                var t, n = [],
                    i = ["length", "name", "arguments", "caller", "prototype", "observe", "unobserve"];
                if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");
                e = Object(e);
                for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                for (var o = 0, r = i.length; r > o; o++) i[o] in e && n.push(i[o]);
                return n
            }), "getPrototypeOf" in Object || (Object.getPrototypeOf = function(e) {
                if (e !== Object(e)) throw new TypeError("Object.getPrototypeOf called on non-object");
                return e.constructor ? e.constructor.prototype : null
            }), "keys" in Object || (Object.keys = function() {
                "use strict";
                var e = Object.prototype.hasOwnProperty,
                    t = !{
                        toString: null
                    }.propertyIsEnumerable("toString"),
                    n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    i = n.length;
                return function(o) {
                    if ("object" != typeof o && ("function" != typeof o || null === o)) throw new TypeError("Object.keys called on non-object");
                    var r, a, s = [];
                    for (r in o) e.call(o, r) && s.push(r);
                    if (t)
                        for (a = 0; i > a; a++) e.call(o, n[a]) && s.push(n[a]);
                    return s
                }
            }()), "includes" in String.prototype || (String.prototype.includes = function(e, t) {
                if ("object" == typeof e && e instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
                return -1 !== this.indexOf(e, t)
            }), "trim" in String.prototype || (String.prototype.trim = function() {
                return this.replace(/^\s+|\s+$/g, "")
            }), "XMLHttpRequest" in this && "prototype" in this.XMLHttpRequest && "addEventListener" in this.XMLHttpRequest.prototype || function(e, t) {
                e.XMLHttpRequest = function() {
                    var e = this,
                        n = e._request = t ? new t : new ActiveXObject("MSXML2.XMLHTTP.3.0");
                    n.onreadystatechange = function() {
                        e.readyState = n.readyState;
                        var t = 4 === e.readyState;
                        e.response = e.responseText = t ? n.responseText : null, e.status = t ? n.status : null, e.statusText = t ? n.statusText : null, e.dispatchEvent(new Event("readystatechange")), t && e.dispatchEvent(new Event("load"))
                    }, "onerror" in n && (n.onerror = function() {
                        e.dispatchEvent(new Event("error"))
                    })
                };
                var n = e.XMLHttpRequest.prototype;
                n.addEventListener = e.addEventListener, n.removeEventListener = e.removeEventListener, n.dispatchEvent = e.dispatchEvent, n.abort = function() {
                    return this._request()
                }, n.getAllResponseHeaders = function() {
                    return this._request.getAllResponseHeaders()
                }, n.getResponseHeader = function(e) {
                    return this._request.getResponseHeader(e)
                }, n.open = function(e, t) {
                    this._request.open(e, t, arguments[2], arguments[3], arguments[4])
                }, n.overrideMimeType = function(e) {
                    this._request.overrideMimeType(e)
                }, n.send = function() {
                    this._request.send(0 in arguments ? arguments[0] : null)
                }, n.setRequestHeader = function(e, t) {
                    this._request.setRequestHeader(e, t)
                }
            }(this, this.XMLHttpRequest), "atob" in this || function(e) {
                var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    n = new RegExp("[^" + t + "]");
                e.atob = function(e) {
                    var i, o, r, a, s = [],
                        l = 0,
                        c = e.length;
                    if (n.test(e) || /=/.test(e) && (/=[^=]/.test(e) || /={3}/.test(e))) throw new Error("Invalid base64 data");
                    for (c % 4 > 0 && (e += Array(4 - c % 4 + 1).join("="), c = e.length); c > l;) {
                        for (o = [], a = l; a + 4 > l;) o.push(t.indexOf(e.charAt(l++)));
                        for (i = (o[0] << 18) + (o[1] << 12) + ((63 & o[2]) << 6) + (63 & o[3]), r = [(i & 255 << 16) >> 16, 64 === o[2] ? -1 : (65280 & i) >> 8, 64 === o[3] ? -1 : 255 & i], a = 0; 3 > a; ++a)(r[a] >= 0 || 0 === a) && s.push(String.fromCharCode(r[a]))
                    }
                    return s.join("")
                }, e.btoa = function(e) {
                    for (var n, i, o = [], r = 0, a = e.length; a > r;) i = [e.charCodeAt(r++), e.charCodeAt(r++), e.charCodeAt(r++)], n = (i[0] << 16) + ((i[1] || 0) << 8) + (i[2] || 0), o.push(t.charAt((n & 63 << 18) >> 18), t.charAt((258048 & n) >> 12), t.charAt(isNaN(i[1]) ? 64 : (4032 & n) >> 6), t.charAt(isNaN(i[2]) ? 64 : 63 & n));
                    return o.join("")
                }
            }(this), "document" in this && "querySelector" in this.document || function(e) {
                function t(e, t, o) {
                    var r, a, s = document.createElement(),
                        l = "qsa" + String(Math.random()).slice(3);
                    return s.innerHTML = "x<style>" + t + "{qsa:" + l + ";}", r = i.appendChild(s.lastChild), a = n(e, t, o, l), i.removeChild(r), o ? a[0] : a
                }

                function n(e, t, i, o) {
                    var r, a = /1|9/.test(e.nodeType),
                        s = e.childNodes,
                        l = [],
                        c = -1;
                    if (a && e.currentStyle && e.currentStyle.qsa === o && l.push(e) && i) return l;
                    for (; r = s[++c];)
                        if (l = l.concat(n(r, t, i, o)), i && l.length) return l;
                    return l
                }
                var i = document.getElementsByTagName("head")[0];
                Document.prototype.querySelector = Element.prototype.querySelector = function(e) {
                    return t(this, e, !0)
                }, Document.prototype.querySelectorAll = Element.prototype.querySelectorAll = function(e) {
                    return t(this, e, !1)
                }
            }(), "performance" in this && "now" in this.performance || function(e) {
                var t = Date.now();
                e.performance || (e.performance = {}), e.performance.now = function() {
                    return Date.now() - t
                }
            }(this), "requestAnimationFrame" in this || function(e) {
                "use strict";
                var t = Date.now();
                e.requestAnimationFrame = function(e) {
                    if ("function" != typeof e) throw new TypeError(e + "is not a function");
                    var n = Date.now(),
                        i = 16 + t - n;
                    return 0 > i && (i = 0), t = n, setTimeout(function() {
                        t = Date.now(), e(performance.now())
                    }, i)
                }, e.cancelAnimationFrame = function(e) {
                    clearTimeout(e)
                }
            }(this),
            function() {
                var e = document.createElement("p"),
                    t = !1;
                return e.innerHTML = "<section></section>", document.documentElement.appendChild(e), e.firstChild && ("getComputedStyle" in window ? t = "block" === getComputedStyle(e.firstChild).display : e.firstChild.currentStyle && (t = "block" === e.firstChild.currentStyle.display)), document.documentElement.removeChild(e), t
            }() || function(e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        i = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
                }

                function i() {
                    var e = y.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function o(e, t) {
                    var n = y.elements;
                    "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), y.elements = n + " " + e, c(t)
                }

                function r(e) {
                    var t = g[e[m]];
                    return t || (t = {}, v++, e[m] = v, g[v] = t), t
                }

                function a(e, n, i) {
                    if (n || (n = t), d) return n.createElement(e);
                    i || (i = r(n));
                    var o;
                    return o = i.cache[e] ? i.cache[e].cloneNode() : h.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), !o.canHaveChildren || p.test(e) || o.tagUrn ? o : i.frag.appendChild(o)
                }

                function s(e, n) {
                    if (e || (e = t), d) return e.createDocumentFragment();
                    n = n || r(e);
                    for (var o = n.frag.cloneNode(), a = 0, s = i(), l = s.length; l > a; a++) o.createElement(s[a]);
                    return o
                }

                function l(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                        return y.shivMethods ? a(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-:]+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(y, t.frag)
                }

                function c(e) {
                    e || (e = t);
                    var i = r(e);
                    return !y.shivCSS || u || i.hasCSS || (i.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), d || l(e, i), e
                }
                var u, d, f = e.html5 || {},
                    p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    m = "_html5shiv",
                    v = 0,
                    g = {};
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", u = "hidden" in e, d = 1 == e.childNodes.length || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                        }()
                    } catch (e) {
                        u = !0, d = !0
                    }
                }();
                var y = {
                    elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
                    version: "3.7.3",
                    shivCSS: !1 !== f.shivCSS,
                    supportsUnknownElements: d,
                    shivMethods: !1 !== f.shivMethods,
                    type: "default",
                    shivDocument: c,
                    createElement: a,
                    createDocumentFragment: s,
                    addElements: o
                };
                e.html5 = y, c(t), "object" == typeof module && module.exports && (module.exports = y)
            }("undefined" != typeof window ? window : this, document), "from" in Array && function() {
                try {
                    return Array.from({
                        length: -1 / 0
                    }), !0
                } catch (e) {
                    return !1
                }
            }() || Object.defineProperty(Array, "from", {
                configurable: !0,
                value: function(e) {
                    if (void 0 === e || null === e) throw new TypeError(e + " is not an object");
                    if (1 in arguments && !(arguments[1] instanceof Function)) throw new TypeError(arguments[1] + " is not a function");
                    for (var t, n = "string" == typeof e ? e.split("") : Object(e), i = arguments[1], o = arguments[2], r = [], a = -1, s = Math.min(Math.max(Number(n.length) || 0, 0), 9007199254740991); ++a < s;) a in n && (t = n[a], r[a] = i ? i.call(o, t, a) : t);
                    return r.length = s, r
                },
                writable: !0
            }), "of" in Array || function(e) {
                Object.defineProperty(Array, "of", {
                    configurable: !0,
                    value: function() {
                        return e.call(arguments)
                    },
                    writable: !0
                })
            }(Array.prototype.slice), "find" in Array.prototype || Object.defineProperty(Array.prototype, "find", {
                configurable: !0,
                value: function(e) {
                    if (void 0 === this || null === this) throw new TypeError(this + "is not an object");
                    if (!(e instanceof Function)) throw new TypeError(e + " is not a function");
                    for (var t, n = Object(this), i = arguments[1], o = n instanceof String ? n.split("") : n, r = Math.max(Math.min(o.length, 9007199254740991), 0) || 0, a = -1; ++a < r;)
                        if (a in o && (t = o[a], e.call(i, t, a, n))) return t
                },
                writable: !0
            }), "findIndex" in Array.prototype || Object.defineProperty(Array.prototype, "findIndex", {
                configurable: !0,
                value: function(e) {
                    if (void 0 === this || null === this) throw new TypeError(this + "is not an object");
                    if (!(e instanceof Function)) throw new TypeError(e + " is not a function");
                    for (var t = Object(this), n = arguments[1], i = t instanceof String ? t.split("") : t, o = Math.max(Math.min(i.length, 9007199254740991), 0) || 0, r = -1; ++r < o;)
                        if (r in i && e.call(n, i[r], r, t)) return r;
                    return -1
                },
                writable: !0
            }), "acosh" in Math || (Math.acosh = function(e) {
                return Math.log(e + Math.sqrt(e * e - 1))
            }), "asinh" in Math || (Math.asinh = function(e) {
                return e === -1 / 0 ? e : Math.log(e + Math.sqrt(e * e + 1))
            }), "atanh" in Math || (Math.atanh = function(e) {
                return Math.log((1 + e) / (1 - e)) / 2
            }), "cbrt" in Math || (Math.cbrt = function(e) {
                var t = Math.pow(Math.abs(e), 1 / 3);
                return 0 > e ? -t : t
            }), "clz32" in Math || (Math.clz32 = function(e) {
                var t = Number(t) >>> 0;
                return t ? 32 - t.toString(2).length : 32
            }), "cosh" in Math || (Math.cosh = function(e) {
                var t = Math.exp(e);
                return (t + 1 / t) / 2
            }), "expm1" in Math || (Math.expm1 = function(e) {
                return Math.exp(e) - 1
            }), "hypot" in Math || (Math.hypot = function() {
                for (var e = arguments, t = -1, n = 0; ++t in e && Math.abs(n) !== 1 / 0;) n += e[t] * e[t];
                return Math.abs(n) === 1 / 0 ? 1 / 0 : Math.sqrt(n)
            }), "imul" in Math || (Math.imul = function(e, t) {
                var n = e >>> 16 & 65535,
                    i = 65535 & e,
                    o = t >>> 16 & 65535,
                    r = 65535 & t;
                return i * r + (n * r + i * o << 16 >>> 0) | 0
            }), "log10" in Math || (Math.log10 = function(e) {
                return Math.log(e) / Math.LN10
            }), "log1p" in Math || (Math.log1p = function(e) {
                return Math.log(1 + e)
            }), "log2" in Math || (Math.log2 = function(e) {
                return Math.log(e) / Math.LN2
            }), "sign" in Math || (Math.sign = function(e) {
                return (e = Number(e)) ? e > 0 ? 1 : -1 : e
            }), "sinh" in Math || (Math.sinh = function(e) {
                var t = Math.exp(e);
                return (t - 1 / t) / 2
            }), "tanh" in Math || (Math.tanh = function(e) {
                var t;
                return e === 1 / 0 ? 1 : e === -1 / 0 ? -1 : ((t = Math.exp(2 * e)) - 1) / (t + 1)
            }), "trunc" in Math || (Math.trunc = function(e) {
                return 0 > e ? Math.ceil(e) : Math.floor(e)
            }), "is" in Object || (Object.is = function(e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e !== e && t !== t
            }), "endsWith" in String.prototype || (String.prototype.endsWith = function(e) {
                var t = arguments.length < 2 ? this.length : arguments[1],
                    n = this.lastIndexOf(e);
                return -1 !== n && n === t - e.length
            }), "repeat" in String.prototype || (String.prototype.repeat = function(e) {
                "use strict";
                if (void 0 === this || null === this) throw new TypeError(this + " is not an object");
                if (0 > e || e === 1 / 0) throw new RangeError(e + " is less than zero or equal to infinity");
                return new Array((parseInt(e, 10) || 0) + 1).join(this)
            }), "startsWith" in String.prototype || (String.prototype.startsWith = function(e) {
                var t = arguments.length < 2 ? 0 : arguments[1];
                return 0 === this.slice(t).indexOf(e)
            }),
            function(e) {
                if (!("WeakMap" in e)) return !1;
                var t = {};
                return "test" === new WeakMap([
                    [t, "test"]
                ]).get(t)
            }(this) || function(e) {
                var t = Object.defineProperty,
                    n = Date.now() % 1e9,
                    i = function(e) {
                        this.name = "__st" + (1e9 * Math.random() >>> 0) + n++ + "__", e && e.forEach && e.forEach(function(e) {
                            this.set.apply(this, e)
                        }, this)
                    };
                i.prototype.set = function(e, n) {
                    if ("object" != typeof e && "function" != typeof e) throw new TypeError("Invalid value used as weak map key");
                    var i = e[this.name];
                    return i && i[0] === e ? i[1] = n : t(e, this.name, {
                        value: [e, n],
                        writable: !0
                    }), this
                }, i.prototype.get = function(e) {
                    var t;
                    return (t = e[this.name]) && t[0] === e ? t[1] : void 0
                }, i.prototype.delete = function(e) {
                    var t = e[this.name];
                    return !(!t || t[0] !== e) && (t[0] = t[1] = void 0, !0)
                }, i.prototype.has = function(e) {
                    var t = e[this.name];
                    return !!t && t[0] === e
                }, this.WeakMap = i
            }(),
            function(e) {
                if (!("WeakSet" in e)) return !1;
                var t = {};
                return !!new WeakSet([t]).has(t)
            }(this) || function(e) {
                var t = Date.now() % 1e9,
                    n = function(e) {
                        this.name = "__st" + (1e9 * Math.random() >>> 0) + t++ + "__", e && e.forEach && e.forEach(this.add, this)
                    };
                n.prototype.add = function(e) {
                    var t = this.name;
                    return e[t] || Object.defineProperty(e, t, {
                        value: !0,
                        writable: !0
                    }), this
                }, n.prototype.delete = function(e) {
                    return !!e[this.name] && (e[this.name] = void 0, !0)
                }, n.prototype.has = function(e) {
                    return !!e[this.name]
                }, e.WeakSet = n
            }(this)
    }.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {}), function(e) {
        "use strict";
        var t = function(t, n, i) {
            function o(e) {
                if (s.body) return e();
                setTimeout(function() {
                    o(e)
                })
            }

            function r() {
                l.addEventListener && l.removeEventListener("load", r), l.media = i || "all"
            }
            var a, s = e.document,
                l = s.createElement("link");
            if (n) a = n;
            else {
                var c = (s.body || s.getElementsByTagName("head")[0]).childNodes;
                a = c[c.length - 1]
            }
            var u = s.styleSheets;
            l.rel = "stylesheet", l.href = t, l.media = "only x", o(function() {
                a.parentNode.insertBefore(l, n ? a : a.nextSibling)
            });
            var d = function(e) {
                for (var t = l.href, n = u.length; n--;)
                    if (u[n].href === t) return e();
                setTimeout(function() {
                    d(e)
                })
            };
            return l.addEventListener && l.addEventListener("load", r), l.onloadcssdefined = d, d(r), l
        };
        "undefined" != typeof exports ? exports.loadCSS = t : e.loadCSS = t
    }("undefined" != typeof global ? global : this), function(e) {
        if (e.loadCSS) {
            var t = loadCSS.relpreload = {};
            if (t.support = function() {
                    try {
                        return e.document.createElement("link").relList.supports("preload")
                    } catch (e) {
                        return !1
                    }
                }, t.poly = function() {
                    for (var t = e.document.getElementsByTagName("link"), n = 0; n < t.length; n++) {
                        var i = t[n];
                        "preload" === i.rel && "style" === i.getAttribute("as") && (e.loadCSS(i.href, i, i.getAttribute("media")), i.rel = null)
                    }
                }, !t.support()) {
                t.poly();
                var n = e.setInterval(t.poly, 300);
                e.addEventListener && e.addEventListener("load", function() {
                    t.poly(), e.clearInterval(n)
                }), e.attachEvent && e.attachEvent("onload", function() {
                    e.clearInterval(n)
                })
            }
        }
    }(this), function(e) {
        "use strict";
        e.console = e.console || {};
        for (var t, n, i = e.console, o = {}, r = function() {}, a = "memory".split(","), s = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); t = a.pop();) i[t] || (i[t] = o);
        for (; n = s.pop();) i[n] || (i[n] = r)
    }("undefined" == typeof window ? this : window), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
        var t = this,
            n = this;
        if (!document.documentElement.contains(t)) return null;
        do {
            if (n.matches(e)) return n;
            n = n.parentElement
        } while (null !== n);
        return null
    }(function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.viewportUnitsBuggyfill = t()
    }(this, function() {
        "use strict";

        function e(e, t) {
            var n;
            return function() {
                var i = this,
                    o = arguments,
                    r = function() {
                        e.apply(i, o)
                    };
                clearTimeout(n), n = setTimeout(r, t)
            }
        }

        function t() {
            try {
                return window.self !== window.top
            } catch (e) {
                return !0
            }
        }

        function n(n) {
            if (!w) {
                if (!0 === n && (n = {
                        force: !0
                    }), m = n || {}, m.isMobileSafari = A, m.isBadStockAndroid = E, x || !m.force && !A && !k && !E && !C && (!m.hacks || !m.hacks.required(m))) return window.console && x && console.info("viewport-units-buggyfill requires a proper CSSOM and basic viewport unit support, which are not available in IE8 and below"), {
                    init: function() {}
                };
                window.dispatchEvent(new $("viewport-units-buggyfill-init")), m.hacks && m.hacks.initialize(m), w = !0, y = document.createElement("style"), y.id = "patched-viewport", document.head.appendChild(y), d(function() {
                    var n = e(o, m.refreshDebounceWait || 100);
                    window.addEventListener("orientationchange", n, !0), window.addEventListener("pageshow", n, !0), (m.force || k || t()) && (window.addEventListener("resize", n, !0), m._listeningToResize = !0), m.hacks && m.hacks.initializeEvents(m, o, n), o()
                })
            }
        }

        function i() {
            y.textContent = s(), y.parentNode.appendChild(y), window.dispatchEvent(new $("viewport-units-buggyfill-style"))
        }

        function o() {
            w && (r(), setTimeout(function() {
                i()
            }, 1))
        }

        function r() {
            return g = [], T.call(document.styleSheets, function(e) {
                "patched-viewport" !== e.ownerNode.id && e.cssRules && "ignore" !== e.ownerNode.getAttribute("data-viewport-units-buggyfill") && (e.media && e.media.mediaText && window.matchMedia && !window.matchMedia(e.media.mediaText).matches || T.call(e.cssRules, a))
            }), g
        }

        function a(e) {
            if (7 === e.type) {
                var t;
                try {
                    t = e.cssText
                } catch (e) {
                    return
                }
                return S.lastIndex = 0, void(S.test(t) && (g.push([e, null, t]), m.hacks && m.hacks.findDeclarations(g, e, null, t)))
            }
            if (!e.style) {
                if (!e.cssRules) return;
                return void T.call(e.cssRules, function(e) {
                    a(e)
                })
            }
            T.call(e.style, function(t) {
                var n = e.style.getPropertyValue(t);
                e.style.getPropertyPriority(t) && (n += " !important"), S.lastIndex = 0, S.test(n) && (g.push([e, t, n]), m.hacks && m.hacks.findDeclarations(g, e, t, n))
            })
        }

        function s() {
            v = u();
            var e, t, n = [],
                i = [];
            return g.forEach(function(o) {
                var r = l.apply(null, o),
                    a = r.selector.length ? r.selector.join(" {\n") + " {\n" : "",
                    s = new Array(r.selector.length + 1).join("\n}");
                if (!a || a !== e) return i.length && (n.push(e + i.join("\n") + t), i.length = 0), void(a ? (e = a, t = s, i.push(r.content)) : (n.push(r.content), e = null, t = null));
                a && !e && (e = a, t = s), i.push(r.content)
            }), i.length && n.push(e + i.join("\n") + t), C && n.push("* { content: normal !important; }"), n.join("\n\n")
        }

        function l(e, t, n) {
            var i, o = [];
            i = n.replace(S, c), m.hacks && (i = m.hacks.overwriteDeclaration(e, t, i)), t && (o.push(e.selectorText), i = t + ": " + i + ";");
            for (var r = e.parentRule; r;) o.unshift("@media " + r.media.mediaText), r = r.parentRule;
            return {
                selector: o,
                content: i
            }
        }

        function c(e, t, n) {
            var i = v[n];
            return parseFloat(t) / 100 * i + "px"
        }

        function u() {
            var e = window.innerHeight,
                t = window.innerWidth;
            return {
                vh: e,
                vw: t,
                vmax: Math.max(t, e),
                vmin: Math.min(t, e)
            }
        }

        function d(e) {
            var t = 0,
                n = function() {
                    --t || e()
                };
            T.call(document.styleSheets, function(e) {
                e.href && f(e.href) !== f(location.href) && "ignore" !== e.ownerNode.getAttribute("data-viewport-units-buggyfill") && (t++, p(e.ownerNode, n))
            }), t || e()
        }

        function f(e) {
            return e.slice(0, e.indexOf("/", e.indexOf("://") + 3))
        }

        function p(e, t) {
            h(e.href, function() {
                var n = document.createElement("style");
                n.media = e.media, n.setAttribute("data-href", e.href), n.textContent = this.responseText, e.parentNode.replaceChild(n, e), t()
            }, t)
        }

        function h(e, t, n) {
            var i = new XMLHttpRequest;
            if ("withCredentials" in i) i.open("GET", e, !0);
            else {
                if ("undefined" == typeof XDomainRequest) throw new Error("cross-domain XHR not supported");
                i = new XDomainRequest, i.open("GET", e)
            }
            return i.onload = t, i.onerror = n, i.send(), i
        }
        var m, v, g, y, w = !1,
            b = window.navigator.userAgent,
            S = /([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g,
            T = [].forEach,
            k = /MSIE [0-9]\./i.test(b),
            x = /MSIE [0-8]\./i.test(b),
            C = b.indexOf("Opera Mini") > -1,
            A = /(iPhone|iPod|iPad).+AppleWebKit/i.test(b) && function() {
                var e = b.match(/OS (\d)/);
                return e && e.length > 1 && parseInt(e[1]) < 8
            }(),
            E = function() {
                return b.indexOf(" Android ") > -1 && (b.indexOf("Version/") > -1 && parseFloat((b.match("Android ([0-9.]+)") || [])[1]) <= 4.4)
            }();
        k || (k = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./));
        try {
            new $("test")
        } catch (e) {
            var $ = function(e, t) {
                var n;
                return t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                }, n = document.createEvent("CustomEvent"), n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
            };
            $.prototype = window.Event.prototype, window.CustomEvent = $
        }
        return {
            version: "0.5.5",
            findProperties: r,
            getCss: s,
            init: n,
            refresh: o
        }
    }))), function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        "use strict";

        function n(e, t) {
            t = t || ne;
            var n = t.createElement("script");
            n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
        }

        function i(e) {
            var t = !!e && "length" in e && e.length,
                n = he.type(e);
            return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function o(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function r(e, t, n) {
            return he.isFunction(t) ? he.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            }) : t.nodeType ? he.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? he.grep(e, function(e) {
                return se.call(t, e) > -1 !== n
            }) : xe.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function(e) {
                return se.call(t, e) > -1 !== n && 1 === e.nodeType
            }))
        }

        function a(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function s(e) {
            var t = {};
            return he.each(e.match(qe) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function l(e) {
            return e
        }

        function c(e) {
            throw e
        }

        function u(e, t, n, i) {
            var o;
            try {
                e && he.isFunction(o = e.promise) ? o.call(e).done(t).fail(n) : e && he.isFunction(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }

        function d() {
            ne.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), he.ready()
        }

        function f() {
            this.expando = he.expando + f.uid++
        }

        function p(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : De.test(e) ? JSON.parse(e) : e)
        }

        function h(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(ze, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = p(n)
                    } catch (e) {}
                    Pe.set(e, t, n)
                } else n = void 0;
            return n
        }

        function m(e, t, n, i) {
            var o, r = 1,
                a = 20,
                s = i ? function() {
                    return i.cur()
                } : function() {
                    return he.css(e, t, "")
                },
                l = s(),
                c = n && n[3] || (he.cssNumber[t] ? "" : "px"),
                u = (he.cssNumber[t] || "px" !== c && +l) && Ne.exec(he.css(e, t));
            if (u && u[3] !== c) {
                c = c || u[3], n = n || [], u = +l || 1;
                do {
                    r = r || ".5", u /= r, he.style(e, t, u + c)
                } while (r !== (r = s() / l) && 1 !== r && --a)
            }
            return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
        }

        function v(e) {
            var t, n = e.ownerDocument,
                i = e.nodeName,
                o = Ve[i];
            return o || (t = n.body.appendChild(n.createElement(i)), o = he.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Ve[i] = o, o)
        }

        function g(e, t) {
            for (var n, i, o = [], r = 0, a = e.length; r < a; r++) i = e[r], i.style && (n = i.style.display, t ? ("none" === n && (o[r] = He.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Fe(i) && (o[r] = v(i))) : "none" !== n && (o[r] = "none", He.set(i, "display", n)));
            for (r = 0; r < a; r++) null != o[r] && (e[r].style.display = o[r]);
            return e
        }

        function y(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? he.merge([e], n) : n
        }

        function w(e, t) {
            for (var n = 0, i = e.length; n < i; n++) He.set(e[n], "globalEval", !t || He.get(t[n], "globalEval"))
        }

        function b(e, t, n, i, o) {
            for (var r, a, s, l, c, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                if ((r = e[p]) || 0 === r)
                    if ("object" === he.type(r)) he.merge(f, r.nodeType ? [r] : r);
                    else if (Xe.test(r)) {
                for (a = a || d.appendChild(t.createElement("div")), s = (We.exec(r) || ["", ""])[1].toLowerCase(), l = Ye[s] || Ye._default, a.innerHTML = l[1] + he.htmlPrefilter(r) + l[2], u = l[0]; u--;) a = a.lastChild;
                he.merge(f, a.childNodes), a = d.firstChild, a.textContent = ""
            } else f.push(t.createTextNode(r));
            for (d.textContent = "", p = 0; r = f[p++];)
                if (i && he.inArray(r, i) > -1) o && o.push(r);
                else if (c = he.contains(r.ownerDocument, r), a = y(d.appendChild(r), "script"), c && w(a), n)
                for (u = 0; r = a[u++];) Ue.test(r.type || "") && n.push(r);
            return d
        }

        function S() {
            return !0
        }

        function T() {
            return !1
        }

        function k() {
            try {
                return ne.activeElement
            } catch (e) {}
        }

        function x(e, t, n, i, o, r) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (s in t) x(e, s, n, i, t[s], r);
                return e
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = T;
            else if (!o) return e;
            return 1 === r && (a = o, o = function(e) {
                return he().off(e), a.apply(this, arguments)
            }, o.guid = a.guid || (a.guid = he.guid++)), e.each(function() {
                he.event.add(this, t, o, i, n)
            })
        }

        function C(e, t) {
            return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? he(">tbody", e)[0] || e : e
        }

        function A(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function E(e) {
            var t = nt.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function $(e, t) {
            var n, i, o, r, a, s, l, c;
            if (1 === t.nodeType) {
                if (He.hasData(e) && (r = He.access(e), a = He.set(t, r), c = r.events)) {
                    delete a.handle, a.events = {};
                    for (o in c)
                        for (n = 0, i = c[o].length; n < i; n++) he.event.add(t, o, c[o][n])
                }
                Pe.hasData(e) && (s = Pe.access(e), l = he.extend({}, s), Pe.set(t, l))
            }
        }

        function q(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Re.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function L(e, t, i, o) {
            t = re.apply([], t);
            var r, a, s, l, c, u, d = 0,
                f = e.length,
                p = f - 1,
                h = t[0],
                m = he.isFunction(h);
            if (m || f > 1 && "string" == typeof h && !pe.checkClone && tt.test(h)) return e.each(function(n) {
                var r = e.eq(n);
                m && (t[0] = h.call(this, n, r.html())), L(r, t, i, o)
            });
            if (f && (r = b(t, e[0].ownerDocument, !1, e, o), a = r.firstChild, 1 === r.childNodes.length && (r = a), a || o)) {
                for (s = he.map(y(r, "script"), A), l = s.length; d < f; d++) c = r, d !== p && (c = he.clone(c, !0, !0), l && he.merge(s, y(c, "script"))), i.call(e[d], c, d);
                if (l)
                    for (u = s[s.length - 1].ownerDocument, he.map(s, E), d = 0; d < l; d++) c = s[d], Ue.test(c.type || "") && !He.access(c, "globalEval") && he.contains(u, c) && (c.src ? he._evalUrl && he._evalUrl(c.src) : n(c.textContent.replace(it, ""), u))
            }
            return e
        }

        function I(e, t, n) {
            for (var i, o = t ? he.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || he.cleanData(y(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && w(y(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function M(e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || at(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), !pe.pixelMarginRight() && rt.test(a) && ot.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a
        }

        function O(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function H(e) {
            if (e in ft) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;)
                if ((e = dt[n] + t) in ft) return e
        }

        function P(e) {
            var t = he.cssProps[e];
            return t || (t = he.cssProps[e] = H(e) || e), t
        }

        function D(e, t, n) {
            var i = Ne.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function z(e, t, n, i, o) {
            var r, a = 0;
            for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (a += he.css(e, n + _e[r], !0, o)), i ? ("content" === n && (a -= he.css(e, "padding" + _e[r], !0, o)), "margin" !== n && (a -= he.css(e, "border" + _e[r] + "Width", !0, o))) : (a += he.css(e, "padding" + _e[r], !0, o), "padding" !== n && (a += he.css(e, "border" + _e[r] + "Width", !0, o)));
            return a
        }

        function j(e, t, n) {
            var i, o = at(e),
                r = M(e, t, o),
                a = "border-box" === he.css(e, "boxSizing", !1, o);
            return rt.test(r) ? r : (i = a && (pe.boxSizingReliable() || r === e.style[t]), "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (r = parseFloat(r) || 0) + z(e, t, n || (a ? "border" : "content"), i, o) + "px")
        }

        function N(e, t, n, i, o) {
            return new N.prototype.init(e, t, n, i, o)
        }

        function _() {
            ht && (!1 === ne.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(_) : e.setTimeout(_, he.fx.interval), he.fx.tick())
        }

        function F() {
            return e.setTimeout(function() {
                pt = void 0
            }), pt = he.now()
        }

        function B(e, t) {
            var n, i = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) n = _e[i], o["margin" + n] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function V(e, t, n) {
            for (var i, o = (U.tweeners[t] || []).concat(U.tweeners["*"]), r = 0, a = o.length; r < a; r++)
                if (i = o[r].call(n, t, e)) return i
        }

        function R(e, t, n) {
            var i, o, r, a, s, l, c, u, d = "width" in t || "height" in t,
                f = this,
                p = {},
                h = e.style,
                m = e.nodeType && Fe(e),
                v = He.get(e, "fxshow");
            n.queue || (a = he._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                a.unqueued || s()
            }), a.unqueued++, f.always(function() {
                f.always(function() {
                    a.unqueued--, he.queue(e, "fx").length || a.empty.fire()
                })
            }));
            for (i in t)
                if (o = t[i], mt.test(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                        if ("show" !== o || !v || void 0 === v[i]) continue;
                        m = !0
                    }
                    p[i] = v && v[i] || he.style(e, i)
                }
            if ((l = !he.isEmptyObject(t)) || !he.isEmptyObject(p)) {
                d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = v && v.display, null == c && (c = He.get(e, "display")), u = he.css(e, "display"), "none" === u && (c ? u = c : (g([e], !0), c = e.style.display || c, u = he.css(e, "display"), g([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === he.css(e, "float") && (l || (f.done(function() {
                    h.display = c
                }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), l = !1;
                for (i in p) l || (v ? "hidden" in v && (m = v.hidden) : v = He.access(e, "fxshow", {
                    display: c
                }), r && (v.hidden = !m), m && g([e], !0), f.done(function() {
                    m || g([e]), He.remove(e, "fxshow");
                    for (i in p) he.style(e, i, p[i])
                })), l = V(m ? v[i] : 0, i, f), i in v || (v[i] = l.start, m && (l.end = l.start, l.start = 0))
            }
        }

        function W(e, t) {
            var n, i, o, r, a;
            for (n in e)
                if (i = he.camelCase(n), o = t[i], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = he.cssHooks[i]) && "expand" in a) {
                    r = a.expand(r), delete e[i];
                    for (n in r) n in e || (e[n] = r[n], t[n] = o)
                } else t[i] = o
        }

        function U(e, t, n) {
            var i, o, r = 0,
                a = U.prefilters.length,
                s = he.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var t = pt || F(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(r);
                    return s.notifyWith(e, [c, r, n]), r < 1 && l ? n : (l || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: he.extend({}, t),
                    opts: he.extend(!0, {
                        specialEasing: {},
                        easing: he.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: pt || F(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = he.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) c.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (W(u, c.opts.specialEasing); r < a; r++)
                if (i = U.prefilters[r].call(c, e, u, c.opts)) return he.isFunction(i.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(i.stop, i)), i;
            return he.map(u, V, c), he.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), he.fx.timer(he.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c
        }

        function Y(e) {
            return (e.match(qe) || []).join(" ")
        }

        function X(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function Q(e, t, n, i) {
            var o;
            if (Array.isArray(t)) he.each(t, function(t, o) {
                n || At.test(e) ? i(e, o) : Q(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            });
            else if (n || "object" !== he.type(t)) i(e, t);
            else
                for (o in t) Q(e + "[" + o + "]", t[o], n, i)
        }

        function G(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                    r = t.toLowerCase().match(qe) || [];
                if (he.isFunction(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function K(e, t, n, i) {
            function o(s) {
                var l;
                return r[s] = !0, he.each(e[s] || [], function(e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
                }), l
            }
            var r = {},
                a = e === jt;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function J(e, t) {
            var n, i, o = he.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && he.extend(!0, e, i), e
        }

        function Z(e, t, n) {
            for (var i, o, r, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (o in s)
                    if (s[o] && s[o].test(i)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in n) r = l[0];
            else {
                for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                        r = o;
                        break
                    }
                    a || (a = o)
                }
                r = r || a
            }
            if (r) return r !== l[0] && l.unshift(r), n[r]
        }

        function ee(e, t, n, i) {
            var o, r, a, s, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (r = u.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (!(a = c[l + " " + r] || c["* " + r]))
                    for (o in c)
                        if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                            !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], u.unshift(s[1]));
                            break
                        }
                if (!0 !== a)
                    if (a && e.throws) t = a(t);
                    else try {
                        t = a(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }
        var te = [],
            ne = e.document,
            ie = Object.getPrototypeOf,
            oe = te.slice,
            re = te.concat,
            ae = te.push,
            se = te.indexOf,
            le = {},
            ce = le.toString,
            ue = le.hasOwnProperty,
            de = ue.toString,
            fe = de.call(Object),
            pe = {},
            he = function(e, t) {
                return new he.fn.init(e, t)
            },
            me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ve = /^-ms-/,
            ge = /-([a-z])/g,
            ye = function(e, t) {
                return t.toUpperCase()
            };
        he.fn = he.prototype = {
            jquery: "3.2.1",
            constructor: he,
            length: 0,
            toArray: function() {
                return oe.call(this)
            },
            get: function(e) {
                return null == e ? oe.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = he.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return he.each(this, e)
            },
            map: function(e) {
                return this.pushStack(he.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(oe.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ae,
            sort: te.sort,
            splice: te.splice
        }, he.extend = he.fn.extend = function() {
            var e, t, n, i, o, r, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || he.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], i = e[t], a !== i && (c && i && (he.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && he.isPlainObject(n) ? n : {}, a[t] = he.extend(c, r, i)) : void 0 !== i && (a[t] = i));
            return a
        }, he.extend({
            expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === he.type(e)
            },
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = he.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== ce.call(e)) && (!(t = ie(e)) || "function" == typeof(n = ue.call(t, "constructor") && t.constructor) && de.call(n) === fe)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                n(e)
            },
            camelCase: function(e) {
                return e.replace(ve, "ms-").replace(ge, ye)
            },
            each: function(e, t) {
                var n, o = 0;
                if (i(e))
                    for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
                else
                    for (o in e)
                        if (!1 === t.call(e[o], o, e[o])) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(me, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : se.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var o, r, a = 0,
                    s = [];
                if (i(e))
                    for (o = e.length; a < o; a++) null != (r = t(e[a], a, n)) && s.push(r);
                else
                    for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
                return re.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, o;
                if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return i = oe.call(arguments, 2), o = function() {
                    return e.apply(t || this, i.concat(oe.call(arguments)))
                }, o.guid = e.guid = e.guid || he.guid++, o
            },
            now: Date.now,
            support: pe
        }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = te[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            le["[object " + t + "]"] = t.toLowerCase()
        });
        var we = function(e) {
            function t(e, t, n, i) {
                var o, r, a, s, l, u, f, p = t && t.ownerDocument,
                    h = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                if (!i && ((t ? t.ownerDocument || t : N) !== I && L(t), t = t || I, O)) {
                    if (11 !== h && (l = me.exec(e)))
                        if (o = l[1]) {
                            if (9 === h) {
                                if (!(a = t.getElementById(o))) return n;
                                if (a.id === o) return n.push(a), n
                            } else if (p && (a = p.getElementById(o)) && z(t, a) && a.id === o) return n.push(a), n
                        } else {
                            if (l[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                            if ((o = l[3]) && b.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(o)), n
                        }
                    if (b.qsa && !R[e + " "] && (!H || !H.test(e))) {
                        if (1 !== h) p = t, f = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(we, be) : t.setAttribute("id", s = j), u = x(e), r = u.length; r--;) u[r] = "#" + s + " " + d(u[r]);
                            f = u.join(","), p = ve.test(e) && c(t.parentNode) || t
                        }
                        if (f) try {
                            return G.apply(n, p.querySelectorAll(f)), n
                        } catch (e) {} finally {
                            s === j && t.removeAttribute("id")
                        }
                    }
                }
                return A(e.replace(re, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > S.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[j] = !0, e
            }

            function o(e) {
                var t = I.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) S.attrHandle[n[i]] = t
            }

            function a(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function l(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function c(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            function u() {}

            function d(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function f(e, t, n) {
                var i = t.dir,
                    o = t.next,
                    r = o || i,
                    a = n && "parentNode" === r,
                    s = F++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || a) return e(t, n, o);
                    return !1
                } : function(t, n, l) {
                    var c, u, d, f = [_, s];
                    if (l) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || a)
                                if (d = t[j] || (t[j] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                                else {
                                    if ((c = u[r]) && c[0] === _ && c[1] === s) return f[2] = c[2];
                                    if (u[r] = f, f[2] = e(t, n, l)) return !0
                                } return !1
                }
            }

            function p(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function h(e, n, i) {
                for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
                return i
            }

            function m(e, t, n, i, o) {
                for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), c && t.push(s)));
                return a
            }

            function v(e, t, n, o, r, a) {
                return o && !o[j] && (o = v(o)), r && !r[j] && (r = v(r, a)), i(function(i, a, s, l) {
                    var c, u, d, f = [],
                        p = [],
                        v = a.length,
                        g = i || h(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !i && t ? g : m(g, f, e, s, l),
                        w = n ? r || (i ? e : v || o) ? [] : a : y;
                    if (n && n(y, w, s, l), o)
                        for (c = m(w, p), o(c, [], s, l), u = c.length; u--;)(d = c[u]) && (w[p[u]] = !(y[p[u]] = d));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (c = [], u = w.length; u--;)(d = w[u]) && c.push(y[u] = d);
                                r(null, w = [], c, l)
                            }
                            for (u = w.length; u--;)(d = w[u]) && (c = r ? J(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d))
                        }
                    } else w = m(w === a ? w.splice(v, w.length) : w), r ? r(null, a, w, l) : G.apply(a, w)
                })
            }

            function g(e) {
                for (var t, n, i, o = e.length, r = S.relative[e[0].type], a = r || S.relative[" "], s = r ? 1 : 0, l = f(function(e) {
                        return e === t
                    }, a, !0), c = f(function(e) {
                        return J(t, e) > -1
                    }, a, !0), u = [function(e, n, i) {
                        var o = !r && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                        return t = null, o
                    }]; s < o; s++)
                    if (n = S.relative[e[s].type]) u = [f(p(u), n)];
                    else {
                        if (n = S.filter[e[s].type].apply(null, e[s].matches), n[j]) {
                            for (i = ++s; i < o && !S.relative[e[i].type]; i++);
                            return v(s > 1 && p(u), s > 1 && d(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(re, "$1"), n, s < i && g(e.slice(s, i)), i < o && g(e = e.slice(i)), i < o && d(e))
                        }
                        u.push(n)
                    }
                return p(u)
            }

            function y(e, n) {
                var o = n.length > 0,
                    r = e.length > 0,
                    a = function(i, a, s, l, c) {
                        var u, d, f, p = 0,
                            h = "0",
                            v = i && [],
                            g = [],
                            y = E,
                            w = i || r && S.find.TAG("*", c),
                            b = _ += null == y ? 1 : Math.random() || .1,
                            T = w.length;
                        for (c && (E = a === I || a || c); h !== T && null != (u = w[h]); h++) {
                            if (r && u) {
                                for (d = 0, a || u.ownerDocument === I || (L(u), s = !O); f = e[d++];)
                                    if (f(u, a || I, s)) {
                                        l.push(u);
                                        break
                                    }
                                c && (_ = b)
                            }
                            o && ((u = !f && u) && p--, i && v.push(u))
                        }
                        if (p += h, o && h !== p) {
                            for (d = 0; f = n[d++];) f(v, g, a, s);
                            if (i) {
                                if (p > 0)
                                    for (; h--;) v[h] || g[h] || (g[h] = X.call(l));
                                g = m(g)
                            }
                            G.apply(l, g), c && !i && g.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                        }
                        return c && (_ = b, E = y), v
                    };
                return o ? i(a) : a
            }
            var w, b, S, T, k, x, C, A, E, $, q, L, I, M, O, H, P, D, z, j = "sizzle" + 1 * new Date,
                N = e.document,
                _ = 0,
                F = 0,
                B = n(),
                V = n(),
                R = n(),
                W = function(e, t) {
                    return e === t && (q = !0), 0
                },
                U = {}.hasOwnProperty,
                Y = [],
                X = Y.pop,
                Q = Y.push,
                G = Y.push,
                K = Y.slice,
                J = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ee = "[\\x20\\t\\r\\n\\f]",
                te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
                ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
                oe = new RegExp(ee + "+", "g"),
                re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                ae = new RegExp("^" + ee + "*," + ee + "*"),
                se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
                ce = new RegExp(ie),
                ue = new RegExp("^" + te + "$"),
                de = {
                    ID: new RegExp("^#(" + te + ")"),
                    CLASS: new RegExp("^\\.(" + te + ")"),
                    TAG: new RegExp("^(" + te + "|[*])"),
                    ATTR: new RegExp("^" + ne),
                    PSEUDO: new RegExp("^" + ie),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Z + ")$", "i"),
                    needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                },
                fe = /^(?:input|select|textarea|button)$/i,
                pe = /^h\d$/i,
                he = /^[^{]+\{\s*\[native \w/,
                me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ve = /[+~]/,
                ge = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                ye = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                be = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                Se = function() {
                    L()
                },
                Te = f(function(e) {
                    return !0 === e.disabled && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                G.apply(Y = K.call(N.childNodes), N.childNodes), Y[N.childNodes.length].nodeType
            } catch (e) {
                G = {
                    apply: Y.length ? function(e, t) {
                        Q.apply(e, K.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            b = t.support = {}, k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, L = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : N;
                return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, M = I.documentElement, O = !k(I), N !== I && (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)), b.attributes = o(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), b.getElementsByTagName = o(function(e) {
                    return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
                }), b.getElementsByClassName = he.test(I.getElementsByClassName), b.getById = o(function(e) {
                    return M.appendChild(e).id = j, !I.getElementsByName || !I.getElementsByName(j).length
                }), b.getById ? (S.filter.ID = function(e) {
                    var t = e.replace(ge, ye);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, S.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && O) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (S.filter.ID = function(e) {
                    var t = e.replace(ge, ye);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, S.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && O) {
                        var n, i, o, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                            for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                        }
                        return []
                    }
                }), S.find.TAG = b.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, S.find.CLASS = b.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && O) return t.getElementsByClassName(e)
                }, P = [], H = [], (b.qsa = he.test(I.querySelectorAll)) && (o(function(e) {
                    M.appendChild(e).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + j + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), e.querySelectorAll("a#" + j + "+*").length || H.push(".#.+[+~]")
                }), o(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = I.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && H.push(":enabled", ":disabled"), M.appendChild(e).disabled = !0,
                        2 !== e.querySelectorAll(":disabled").length && H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
                })), (b.matchesSelector = he.test(D = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function(e) {
                    b.disconnectedMatch = D.call(e, "*"), D.call(e, "[s!='']:x"), P.push("!=", ie)
                }), H = H.length && new RegExp(H.join("|")), P = P.length && new RegExp(P.join("|")), t = he.test(M.compareDocumentPosition), z = t || he.test(M.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, W = t ? function(e, t) {
                    if (e === t) return q = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === N && z(N, e) ? -1 : t === I || t.ownerDocument === N && z(N, t) ? 1 : $ ? J($, e) - J($, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return q = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        l = [t];
                    if (!o || !r) return e === I ? -1 : t === I ? 1 : o ? -1 : r ? 1 : $ ? J($, e) - J($, t) : 0;
                    if (o === r) return a(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; s[i] === l[i];) i++;
                    return i ? a(s[i], l[i]) : s[i] === N ? -1 : l[i] === N ? 1 : 0
                }, I) : I
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== I && L(e), n = n.replace(le, "='$1']"), b.matchesSelector && O && !R[n + " "] && (!P || !P.test(n)) && (!H || !H.test(n))) try {
                    var i = D.call(e, n);
                    if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return t(n, I, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== I && L(e), z(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== I && L(e);
                var n = S.attrHandle[t.toLowerCase()],
                    i = n && U.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
                return void 0 !== i ? i : b.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.escape = function(e) {
                return (e + "").replace(we, be)
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (q = !b.detectDuplicates, $ = !b.sortStable && e.slice(0), e.sort(W), q) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return $ = null, e
            }, T = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += T(t);
                return n
            }, S = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: de,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ge, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ge, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = x(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ge, ye).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = B[e + " "];
                        return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(o) {
                            var r = t.attr(o, e);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, f, p, h, m = r !== a ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                g = s && t.nodeName.toLowerCase(),
                                y = !l && !s,
                                w = !1;
                            if (v) {
                                if (r) {
                                    for (; m;) {
                                        for (f = t; f = f[m];)
                                            if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                    for (f = v, d = f[j] || (f[j] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], p = c[0] === _ && c[1], w = p && c[2], f = p && v.childNodes[p]; f = ++p && f && f[m] || (w = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++w && f === t) {
                                            u[e] = [_, p, w];
                                            break
                                        }
                                } else if (y && (f = t, d = f[j] || (f[j] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], p = c[0] === _ && c[1], w = p), !1 === w)
                                    for (;
                                        (f = ++p && f && f[m] || (w = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++w || (y && (d = f[j] || (f[j] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [_, w]), f !== t)););
                                return (w -= o) === i || w % i == 0 && w / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var o, r = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[j] ? r(n) : r.length > 1 ? (o = [e, e, "", n], S.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, o = r(e, n), a = o.length; a--;) i = J(e, o[a]), e[i] = !(t[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            o = C(e.replace(re, "$1"));
                        return o[j] ? i(function(e, t, n, i) {
                            for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, i, r) {
                            return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(ge, ye),
                            function(t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ge, ye).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === M
                    },
                    focus: function(e) {
                        return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: s(!1),
                    disabled: s(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !S.pseudos.empty(e)
                    },
                    header: function(e) {
                        return pe.test(e.nodeName)
                    },
                    input: function(e) {
                        return fe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, S.pseudos.nth = S.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) S.pseudos[w] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) S.pseudos[w] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(w);
            return u.prototype = S.filters = S.pseudos, S.setFilters = new u, x = t.tokenize = function(e, n) {
                var i, o, r, a, s, l, c, u = V[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = e, l = [], c = S.preFilter; s;) {
                    i && !(o = ae.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = se.exec(s)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(re, " ")
                    }), s = s.slice(i.length));
                    for (a in S.filter) !(o = de[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: a,
                        matches: o
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : V(e, l).slice(0)
            }, C = t.compile = function(e, t) {
                var n, i = [],
                    o = [],
                    r = R[e + " "];
                if (!r) {
                    for (t || (t = x(e)), n = t.length; n--;) r = g(t[n]), r[j] ? i.push(r) : o.push(r);
                    r = R(e, y(o, i)), r.selector = e
                }
                return r
            }, A = t.select = function(e, t, n, i) {
                var o, r, a, s, l, u = "function" == typeof e && e,
                    f = !i && x(e = u.selector || e);
                if (n = n || [], 1 === f.length) {
                    if (r = f[0] = f[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && 9 === t.nodeType && O && S.relative[r[1].type]) {
                        if (!(t = (S.find.ID(a.matches[0].replace(ge, ye), t) || [])[0])) return n;
                        u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                    }
                    for (o = de.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !S.relative[s = a.type]);)
                        if ((l = S.find[s]) && (i = l(a.matches[0].replace(ge, ye), ve.test(r[0].type) && c(t.parentNode) || t))) {
                            if (r.splice(o, 1), !(e = i.length && d(r))) return G.apply(n, i), n;
                            break
                        }
                }
                return (u || C(e, f))(i, t, !O, n, !t || ve.test(e) && c(t.parentNode) || t), n
            }, b.sortStable = j.split("").sort(W).join("") === j, b.detectDuplicates = !!q, L(), b.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(I.createElement("fieldset"))
            }), o(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), b.attributes && o(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), o(function(e) {
                return null == e.getAttribute("disabled")
            }) || r(Z, function(e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        he.find = we, he.expr = we.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = we.uniqueSort, he.text = we.getText, he.isXMLDoc = we.isXML, he.contains = we.contains, he.escapeSelector = we.escape;
        var be = function(e, t, n) {
                for (var i = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && he(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            Se = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            Te = he.expr.match.needsContext,
            ke = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            xe = /^.[^:#\[\.,]*$/;
        he.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, he.fn.extend({
            find: function(e) {
                var t, n, i = this.length,
                    o = this;
                if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (he.contains(o[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < i; t++) he.find(e, o[t], n);
                return i > 1 ? he.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(r(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(r(this, e || [], !0))
            },
            is: function(e) {
                return !!r(this, "string" == typeof e && Te.test(e) ? he(e) : e || [], !1).length
            }
        });
        var Ce, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (he.fn.init = function(e, t, n) {
            var i, o;
            if (!e) return this;
            if (n = n || Ce, "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ae.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), ke.test(i[1]) && he.isPlainObject(t))
                        for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return o = ne.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
        }).prototype = he.fn, Ce = he(ne);
        var Ee = /^(?:parents|prev(?:Until|All))/,
            $e = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        he.fn.extend({
            has: function(e) {
                var t = he(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (he.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, i = 0,
                    o = this.length,
                    r = [],
                    a = "string" != typeof e && he(e);
                if (!Te.test(e))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                                r.push(n);
                                break
                            }
                return this.pushStack(r.length > 1 ? he.uniqueSort(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? se.call(he(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), he.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return be(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return be(e, "parentNode", n)
            },
            next: function(e) {
                return a(e, "nextSibling")
            },
            prev: function(e) {
                return a(e, "previousSibling")
            },
            nextAll: function(e) {
                return be(e, "nextSibling")
            },
            prevAll: function(e) {
                return be(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return be(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return be(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Se((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Se(e.firstChild)
            },
            contents: function(e) {
                return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), he.merge([], e.childNodes))
            }
        }, function(e, t) {
            he.fn[e] = function(n, i) {
                var o = he.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = he.filter(i, o)), this.length > 1 && ($e[e] || he.uniqueSort(o), Ee.test(e) && o.reverse()), this.pushStack(o)
            }
        });
        var qe = /[^\x20\t\r\n\f]+/g;
        he.Callbacks = function(e) {
            e = "string" == typeof e ? s(e) : he.extend({}, e);
            var t, n, i, o, r = [],
                a = [],
                l = -1,
                c = function() {
                    for (o = o || e.once, i = t = !0; a.length; l = -1)
                        for (n = a.shift(); ++l < r.length;) !1 === r[l].apply(n[0], n[1]) && e.stopOnFalse && (l = r.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
                },
                u = {
                    add: function() {
                        return r && (n && !t && (l = r.length - 1, a.push(n)), function t(n) {
                            he.each(n, function(n, i) {
                                he.isFunction(i) ? e.unique && u.has(i) || r.push(i) : i && i.length && "string" !== he.type(i) && t(i)
                            })
                        }(arguments), n && !t && c()), this
                    },
                    remove: function() {
                        return he.each(arguments, function(e, t) {
                            for (var n;
                                (n = he.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? he.inArray(e, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []), this
                    },
                    disable: function() {
                        return o = a = [], r = n = "", this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return o = a = [], n || t || (r = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(e, n) {
                        return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || c()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, he.extend({
            Deferred: function(t) {
                var n = [
                        ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
                        ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    o = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return o.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return he.Deferred(function(t) {
                                he.each(n, function(n, i) {
                                    var o = he.isFunction(e[i[4]]) && e[i[4]];
                                    r[i[1]](function() {
                                        var e = o && o.apply(this, arguments);
                                        e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(t, i, o) {
                            function r(t, n, i, o) {
                                return function() {
                                    var s = this,
                                        u = arguments,
                                        d = function() {
                                            var e, d;
                                            if (!(t < a)) {
                                                if ((e = i.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                d = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(d) ? o ? d.call(e, r(a, n, l, o), r(a, n, c, o)) : (a++, d.call(e, r(a, n, l, o), r(a, n, c, o), r(a, n, l, n.notifyWith))) : (i !== l && (s = void 0, u = [e]), (o || n.resolveWith)(s, u))
                                            }
                                        },
                                        f = o ? d : function() {
                                            try {
                                                d()
                                            } catch (e) {
                                                he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, f.stackTrace), t + 1 >= a && (i !== c && (s = void 0, u = [e]), n.rejectWith(s, u))
                                            }
                                        };
                                    t ? f() : (he.Deferred.getStackHook && (f.stackTrace = he.Deferred.getStackHook()), e.setTimeout(f))
                                }
                            }
                            var a = 0;
                            return he.Deferred(function(e) {
                                n[0][3].add(r(0, e, he.isFunction(o) ? o : l, e.notifyWith)), n[1][3].add(r(0, e, he.isFunction(t) ? t : l)), n[2][3].add(r(0, e, he.isFunction(i) ? i : c))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? he.extend(e, o) : o
                        }
                    },
                    r = {};
                return he.each(n, function(e, t) {
                    var a = t[2],
                        s = t[5];
                    o[t[1]] = a.add, s && a.add(function() {
                        i = s
                    }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), r[t[0]] = function() {
                        return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                    }, r[t[0] + "With"] = a.fireWith
                }), o.promise(r), t && t.call(r, r), r
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    i = Array(n),
                    o = oe.call(arguments),
                    r = he.Deferred(),
                    a = function(e) {
                        return function(n) {
                            i[e] = this, o[e] = arguments.length > 1 ? oe.call(arguments) : n, --t || r.resolveWith(i, o)
                        }
                    };
                if (t <= 1 && (u(e, r.done(a(n)).resolve, r.reject, !t), "pending" === r.state() || he.isFunction(o[n] && o[n].then))) return r.then();
                for (; n--;) u(o[n], a(n), r.reject);
                return r.promise()
            }
        });
        var Le = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        he.Deferred.exceptionHook = function(t, n) {
            e.console && e.console.warn && t && Le.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
        }, he.readyException = function(t) {
            e.setTimeout(function() {
                throw t
            })
        };
        var Ie = he.Deferred();
        he.fn.ready = function(e) {
            return Ie.then(e).catch(function(e) {
                he.readyException(e)
            }), this
        }, he.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || Ie.resolveWith(ne, [he]))
            }
        }), he.ready.then = Ie.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(he.ready) : (ne.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
        var Me = function(e, t, n, i, o, r, a) {
                var s = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === he.type(n)) {
                    o = !0;
                    for (s in n) Me(e, t, s, n[s], !0, r, a)
                } else if (void 0 !== i && (o = !0, he.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(he(e), n)
                    })), t))
                    for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
            },
            Oe = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        f.uid = 1, f.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, Oe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var i, o = this.cache(e);
                if ("string" == typeof t) o[he.camelCase(t)] = n;
                else
                    for (i in t) o[he.camelCase(i)] = t[i];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        Array.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in i ? [t] : t.match(qe) || []), n = t.length;
                        for (; n--;) delete i[t[n]]
                    }(void 0 === t || he.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !he.isEmptyObject(t)
            }
        };
        var He = new f,
            Pe = new f,
            De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ze = /[A-Z]/g;
        he.extend({
            hasData: function(e) {
                return Pe.hasData(e) || He.hasData(e)
            },
            data: function(e, t, n) {
                return Pe.access(e, t, n)
            },
            removeData: function(e, t) {
                Pe.remove(e, t)
            },
            _data: function(e, t, n) {
                return He.access(e, t, n)
            },
            _removeData: function(e, t) {
                He.remove(e, t)
            }
        }), he.fn.extend({
            data: function(e, t) {
                var n, i, o, r = this[0],
                    a = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = Pe.get(r), 1 === r.nodeType && !He.get(r, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = he.camelCase(i.slice(5)), h(r, i, o[i])));
                        He.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    Pe.set(this, e)
                }) : Me(this, function(t) {
                    var n;
                    if (r && void 0 === t) {
                        if (void 0 !== (n = Pe.get(r, e))) return n;
                        if (void 0 !== (n = h(r, e))) return n
                    } else this.each(function() {
                        Pe.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Pe.remove(this, e)
                })
            }
        }), he.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = He.get(e, t), n && (!i || Array.isArray(n) ? i = He.access(e, t, he.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = he.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = he._queueHooks(e, t),
                    a = function() {
                        he.dequeue(e, t)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return He.get(e, n) || He.access(e, n, {
                    empty: he.Callbacks("once memory").add(function() {
                        He.remove(e, [t + "queue", n])
                    })
                })
            }
        }), he.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = he.queue(this, e, t);
                    he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    he.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    o = he.Deferred(),
                    r = this,
                    a = this.length,
                    s = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = He.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(t)
            }
        });
        var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ne = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
            _e = ["Top", "Right", "Bottom", "Left"],
            Fe = function(e, t) {
                return e = t || e, "none" === e.style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
            },
            Be = function(e, t, n, i) {
                var o, r, a = {};
                for (r in t) a[r] = e.style[r], e.style[r] = t[r];
                o = n.apply(e, i || []);
                for (r in t) e.style[r] = a[r];
                return o
            },
            Ve = {};
        he.fn.extend({
            show: function() {
                return g(this, !0)
            },
            hide: function() {
                return g(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Fe(this) ? he(this).show() : he(this).hide()
                })
            }
        });
        var Re = /^(?:checkbox|radio)$/i,
            We = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Ue = /^$|\/(?:java|ecma)script/i,
            Ye = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td;
        var Xe = /<|&#?\w+;/;
        ! function() {
            var e = ne.createDocumentFragment(),
                t = e.appendChild(ne.createElement("div")),
                n = ne.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Qe = ne.documentElement,
            Ge = /^key/,
            Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Je = /^([^.]*)(?:\.(.+)|)/;
        he.event = {
            global: {},
            add: function(e, t, n, i, o) {
                var r, a, s, l, c, u, d, f, p, h, m, v = He.get(e);
                if (v)
                    for (n.handler && (r = n, n = r.handler, o = r.selector), o && he.find.matchesSelector(Qe, o), n.guid || (n.guid = he.guid++), (l = v.events) || (l = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                            return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(qe) || [""], c = t.length; c--;) s = Je.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (d = he.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = he.event.special[p] || {}, u = he.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && he.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), he.event.global[p] = !0)
            },
            remove: function(e, t, n, i, o) {
                var r, a, s, l, c, u, d, f, p, h, m, v = He.hasData(e) && He.get(e);
                if (v && (l = v.events)) {
                    for (t = (t || "").match(qe) || [""], c = t.length; c--;)
                        if (s = Je.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                            for (d = he.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = f.length; r--;) u = f[r], !o && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                            a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || he.removeEvent(e, p, v.handle), delete l[p])
                        } else
                            for (p in l) he.event.remove(e, p + t[c], n, i, !0);
                    he.isEmptyObject(l) && He.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, i, o, r, a, s = he.event.fix(e),
                    l = new Array(arguments.length),
                    c = (He.get(this, "events") || {})[s.type] || [],
                    u = he.event.special[s.type] || {};
                for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                    for (a = he.event.handlers.call(this, s, c), t = 0;
                        (o = a[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((he.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, r, a, s = [],
                    l = t.delegateCount,
                    c = e.target;
                if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (r = [], a = {}, n = 0; n < l; n++) i = t[n], o = i.selector + " ", void 0 === a[o] && (a[o] = i.needsContext ? he(o, this).index(c) > -1 : he.find(o, this, null, [c]).length), a[o] && r.push(i);
                            r.length && s.push({
                                elem: c,
                                handlers: r
                            })
                        }
                return c = this, l < t.length && s.push({
                    elem: c,
                    handlers: t.slice(l)
                }), s
            },
            addProp: function(e, t) {
                Object.defineProperty(he.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: he.isFunction(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[he.expando] ? e : new he.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== k() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === k() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return o(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, he.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, he.Event = function(e, t) {
            if (!(this instanceof he.Event)) return new he.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? S : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), this[he.expando] = !0
        }, he.Event.prototype = {
            constructor: he.Event,
            isDefaultPrevented: T,
            isPropagationStopped: T,
            isImmediatePropagationStopped: T,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = S, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = S, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = S, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, he.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, he.event.addProp), he.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            he.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        o = e.relatedTarget,
                        r = e.handleObj;
                    return o && (o === i || he.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), he.fn.extend({
            on: function(e, t, n, i) {
                return x(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return x(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = T), this.each(function() {
                    he.event.remove(this, e, n, t)
                })
            }
        });
        var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            et = /<script|<style|<link/i,
            tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            nt = /^true\/(.*)/,
            it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        he.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ze, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, o, r, a, s = e.cloneNode(!0),
                    l = he.contains(e.ownerDocument, e);
                if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                    for (a = y(s), r = y(e), i = 0, o = r.length; i < o; i++) q(r[i], a[i]);
                if (t)
                    if (n)
                        for (r = r || y(e), a = a || y(s), i = 0, o = r.length; i < o; i++) $(r[i], a[i]);
                    else $(e, s);
                return a = y(s, "script"), a.length > 0 && w(a, !l && y(e, "script")), s
            },
            cleanData: function(e) {
                for (var t, n, i, o = he.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if (Oe(n)) {
                        if (t = n[He.expando]) {
                            if (t.events)
                                for (i in t.events) o[i] ? he.event.remove(n, i) : he.removeEvent(n, i, t.handle);
                            n[He.expando] = void 0
                        }
                        n[Pe.expando] && (n[Pe.expando] = void 0)
                    }
            }
        }), he.fn.extend({
            detach: function(e) {
                return I(this, e, !0)
            },
            remove: function(e) {
                return I(this, e)
            },
            text: function(e) {
                return Me(this, function(e) {
                    return void 0 === e ? he.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return L(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        C(this, e).appendChild(e)
                    }
                })
            },
            prepend: function() {
                return L(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = C(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return L(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return L(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(y(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return he.clone(this, e, t)
                })
            },
            html: function(e) {
                return Me(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !et.test(e) && !Ye[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = he.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (he.cleanData(y(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return L(this, arguments, function(t) {
                    var n = this.parentNode;
                    he.inArray(this, e) < 0 && (he.cleanData(y(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), he.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            he.fn[e] = function(e) {
                for (var n, i = [], o = he(e), r = o.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), he(o[a])[t](n), ae.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var ot = /^margin/,
            rt = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"),
            at = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e), n.getComputedStyle(t)
            };
        ! function() {
            function t() {
                if (s) {
                    s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Qe.appendChild(a);
                    var t = e.getComputedStyle(s);
                    n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", o = "4px" === t.marginRight, Qe.removeChild(a), s = null
                }
            }
            var n, i, o, r, a = ne.createElement("div"),
                s = ne.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), he.extend(pe, {
                pixelPosition: function() {
                    return t(), n
                },
                boxSizingReliable: function() {
                    return t(), i
                },
                pixelMarginRight: function() {
                    return t(), o
                },
                reliableMarginLeft: function() {
                    return t(), r
                }
            }))
        }();
        var st = /^(none|table(?!-c[ea]).+)/,
            lt = /^--/,
            ct = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ut = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            dt = ["Webkit", "Moz", "ms"],
            ft = ne.createElement("div").style;
        he.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = M(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, a, s = he.camelCase(t),
                        l = lt.test(t),
                        c = e.style;
                    if (l || (t = P(s)), a = he.cssHooks[t] || he.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : c[t];
                    r = typeof n, "string" === r && (o = Ne.exec(n)) && o[1] && (n = m(e, t, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (he.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function(e, t, n, i) {
                var o, r, a, s = he.camelCase(t);
                return lt.test(t) || (t = P(s)), a = he.cssHooks[t] || he.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = M(e, t, i)), "normal" === o && t in ut && (o = ut[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }), he.each(["height", "width"], function(e, t) {
            he.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n) return !st.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? j(e, t, i) : Be(e, ct, function() {
                        return j(e, t, i)
                    })
                },
                set: function(e, n, i) {
                    var o, r = i && at(e),
                        a = i && z(e, t, i, "border-box" === he.css(e, "boxSizing", !1, r), r);
                    return a && (o = Ne.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = he.css(e, t)), D(e, n, a)
                }
            }
        }), he.cssHooks.marginLeft = O(pe.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(M(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), he.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            he.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + _e[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, ot.test(e) || (he.cssHooks[e + t].set = D)
        }), he.fn.extend({
            css: function(e, t) {
                return Me(this, function(e, t, n) {
                    var i, o, r = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (i = at(e), o = t.length; a < o; a++) r[t[a]] = he.css(e, t[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), he.Tween = N, N.prototype = {
            constructor: N,
            init: function(e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (he.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = N.propHooks[this.prop];
                return e && e.get ? e.get(this) : N.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = N.propHooks[this.prop];
                return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this
            }
        }, N.prototype.init.prototype = N.prototype, N.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, he.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, he.fx = N.prototype.init, he.fx.step = {};
        var pt, ht, mt = /^(?:toggle|show|hide)$/,
            vt = /queueHooks$/;
        he.Animation = he.extend(U, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return m(n.elem, e, Ne.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(qe);
                    for (var n, i = 0, o = e.length; i < o; i++) n = e[i], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t)
                },
                prefilters: [R],
                prefilter: function(e, t) {
                    t ? U.prefilters.unshift(e) : U.prefilters.push(e)
                }
            }), he.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? he.extend({}, e) : {
                    complete: n || !n && t || he.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !he.isFunction(t) && t
                };
                return he.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in he.fx.speeds ? i.duration = he.fx.speeds[i.duration] : i.duration = he.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue)
                }, i
            }, he.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Fe).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var o = he.isEmptyObject(e),
                        r = he.speed(t, n, i),
                        a = function() {
                            var t = U(this, he.extend({}, e), r);
                            (o || He.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            r = he.timers,
                            a = He.get(this);
                        if (o) a[o] && a[o].stop && i(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && vt.test(o) && i(a[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                        !t && n || he.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = He.get(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            r = he.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, he.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), he.each(["toggle", "show", "hide"], function(e, t) {
                var n = he.fn[t];
                he.fn[t] = function(e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, i, o)
                }
            }), he.each({
                slideDown: B("show"),
                slideUp: B("hide"),
                slideToggle: B("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                he.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), he.timers = [], he.fx.tick = function() {
                var e, t = 0,
                    n = he.timers;
                for (pt = he.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || he.fx.stop(), pt = void 0
            }, he.fx.timer = function(e) {
                he.timers.push(e), he.fx.start()
            }, he.fx.interval = 13, he.fx.start = function() {
                ht || (ht = !0, _())
            }, he.fx.stop = function() {
                ht = null
            }, he.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, he.fn.delay = function(t, n) {
                return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                    var o = e.setTimeout(n, t);
                    i.stop = function() {
                        e.clearTimeout(o)
                    }
                })
            },
            function() {
                var e = ne.createElement("input"),
                    t = ne.createElement("select"),
                    n = t.appendChild(ne.createElement("option"));
                e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", pe.radioValue = "t" === e.value
            }();
        var gt, yt = he.expr.attrHandle;
        he.fn.extend({
            attr: function(e, t) {
                return Me(this, he.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    he.removeAttr(this, e)
                })
            }
        }), he.extend({
            attr: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === r && he.isXMLDoc(e) || (o = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = he.find.attr(e, t), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!pe.radioValue && "radio" === t && o(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i = 0,
                    o = t && t.match(qe);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++];) e.removeAttribute(n)
            }
        }), gt = {
            set: function(e, t, n) {
                return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = yt[t] || he.find.attr;
            yt[t] = function(e, t, i) {
                var o, r, a = t.toLowerCase();
                return i || (r = yt[a], yt[a] = o, o = null != n(e, t, i) ? a : null, yt[a] = r), o
            }
        });
        var wt = /^(?:input|select|textarea|button)$/i,
            bt = /^(?:a|area)$/i;
        he.fn.extend({
            prop: function(e, t) {
                return Me(this, he.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[he.propFix[e] || e]
                })
            }
        }), he.extend({
            prop: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && he.isXMLDoc(e) || (t = he.propFix[t] || t, o = he.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = he.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : wt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), pe.optSelected || (he.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            he.propFix[this.toLowerCase()] = this
        }), he.fn.extend({
            addClass: function(e) {
                var t, n, i, o, r, a, s, l = 0;
                if (he.isFunction(e)) return this.each(function(t) {
                    he(this).addClass(e.call(this, t, X(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(qe) || []; n = this[l++];)
                        if (o = X(n), i = 1 === n.nodeType && " " + Y(o) + " ") {
                            for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s = Y(i), o !== s && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, o, r, a, s, l = 0;
                if (he.isFunction(e)) return this.each(function(t) {
                    he(this).removeClass(e.call(this, t, X(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(qe) || []; n = this[l++];)
                        if (o = X(n), i = 1 === n.nodeType && " " + Y(o) + " ") {
                            for (a = 0; r = t[a++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            s = Y(i), o !== s && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(n) {
                    he(this).toggleClass(e.call(this, n, X(this), t), t)
                }) : this.each(function() {
                    var t, i, o, r;
                    if ("string" === n)
                        for (i = 0, o = he(this), r = e.match(qe) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = X(this), t && He.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : He.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + Y(X(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var St = /\r/g;
        he.fn.extend({
            val: function(e) {
                var t, n, i, o = this[0]; {
                    if (arguments.length) return i = he.isFunction(e), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, he(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = he.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return (t = he.valHooks[o.type] || he.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(St, "") : null == n ? "" : n)
                }
            }
        }), he.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = he.find.attr(e, "value");
                        return null != t ? t : Y(he.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, i, r = e.options,
                            a = e.selectedIndex,
                            s = "select-one" === e.type,
                            l = s ? null : [],
                            c = s ? a + 1 : r.length;
                        for (i = a < 0 ? c : s ? a : 0; i < c; i++)
                            if (n = r[i], (n.selected || i === a) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                                if (t = he(n).val(), s) return t;
                                l.push(t)
                            }
                        return l
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, r = he.makeArray(t), a = o.length; a--;) i = o[a], (i.selected = he.inArray(he.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), he.each(["radio", "checkbox"], function() {
            he.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
                }
            }, pe.checkOn || (he.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Tt = /^(?:focusinfocus|focusoutblur)$/;
        he.extend(he.event, {
            trigger: function(t, n, i, o) {
                var r, a, s, l, c, u, d, f = [i || ne],
                    p = ue.call(t, "type") ? t.type : t,
                    h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = s = i = i || ne, 3 !== i.nodeType && 8 !== i.nodeType && !Tt.test(p + he.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[he.expando] ? t : new he.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : he.makeArray(n, [t]), d = he.event.special[p] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                    if (!o && !d.noBubble && !he.isWindow(i)) {
                        for (l = d.delegateType || p, Tt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                        s === (i.ownerDocument || ne) && f.push(s.defaultView || s.parentWindow || e)
                    }
                    for (r = 0;
                        (a = f[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || p, u = (He.get(a, "events") || {})[t.type] && He.get(a, "handle"), u && u.apply(a, n), (u = c && a[c]) && u.apply && Oe(a) && (t.result = u.apply(a, n), !1 === t.result && t.preventDefault());
                    return t.type = p, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !Oe(i) || c && he.isFunction(i[p]) && !he.isWindow(i) && (s = i[c], s && (i[c] = null), he.event.triggered = p, i[p](), he.event.triggered = void 0, s && (i[c] = s)), t.result
                }
            },
            simulate: function(e, t, n) {
                var i = he.extend(new he.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                he.event.trigger(i, null, t)
            }
        }), he.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    he.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return he.event.trigger(e, t, n, !0)
            }
        }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            he.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), he.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), pe.focusin = "onfocusin" in e, pe.focusin || he.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                he.event.simulate(t, e.target, he.event.fix(e))
            };
            he.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = He.access(i, t);
                    o || i.addEventListener(e, n, !0), He.access(i, t, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = He.access(i, t) - 1;
                    o ? He.access(i, t, o) : (i.removeEventListener(e, n, !0), He.remove(i, t))
                }
            }
        });
        var kt = e.location,
            xt = he.now(),
            Ct = /\?/;
        he.parseXML = function(t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (e) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
        };
        var At = /\[\]$/,
            Et = /\r?\n/g,
            $t = /^(?:submit|button|image|reset|file)$/i,
            qt = /^(?:input|select|textarea|keygen)/i;
        he.param = function(e, t) {
            var n, i = [],
                o = function(e, t) {
                    var n = he.isFunction(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) Q(n, e[n], t, o);
            return i.join("&")
        }, he.fn.extend({
            serialize: function() {
                return he.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = he.prop(this, "elements");
                    return e ? he.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !he(this).is(":disabled") && qt.test(this.nodeName) && !$t.test(e) && (this.checked || !Re.test(e))
                }).map(function(e, t) {
                    var n = he(this).val();
                    return null == n ? null : Array.isArray(n) ? he.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Et, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Et, "\r\n")
                    }
                }).get()
            }
        });
        var Lt = /%20/g,
            It = /#.*$/,
            Mt = /([?&])_=[^&]*/,
            Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Pt = /^(?:GET|HEAD)$/,
            Dt = /^\/\//,
            zt = {},
            jt = {},
            Nt = "*/".concat("*"),
            _t = ne.createElement("a");
        _t.href = kt.href, he.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: kt.href,
                type: "GET",
                isLocal: Ht.test(kt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Nt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": he.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? J(J(e, he.ajaxSettings), t) : J(he.ajaxSettings, e)
            },
            ajaxPrefilter: G(zt),
            ajaxTransport: G(jt),
            ajax: function(t, n) {
                function i(t, n, i, s) {
                    var c, f, p, b, S, T = n;
                    u || (u = !0, l && e.clearTimeout(l), o = void 0, a = s || "", k.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (b = Z(h, k, i)), b = ee(h, b, k, c), c ? (h.ifModified && (S = k.getResponseHeader("Last-Modified"), S && (he.lastModified[r] = S), (S = k.getResponseHeader("etag")) && (he.etag[r] = S)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, f = b.data, p = b.error, c = !p)) : (p = T, !t && T || (T = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || T) + "", c ? g.resolveWith(m, [f, T, k]) : g.rejectWith(m, [k, T, p]), k.statusCode(w), w = void 0, d && v.trigger(c ? "ajaxSuccess" : "ajaxError", [k, h, c ? f : p]), y.fireWith(m, [k, T]), d && (v.trigger("ajaxComplete", [k, h]), --he.active || he.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var o, r, a, s, l, c, u, d, f, p, h = he.ajaxSetup({}, n),
                    m = h.context || h,
                    v = h.context && (m.nodeType || m.jquery) ? he(m) : he.event,
                    g = he.Deferred(),
                    y = he.Callbacks("once memory"),
                    w = h.statusCode || {},
                    b = {},
                    S = {},
                    T = "canceled",
                    k = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (u) {
                                if (!s)
                                    for (s = {}; t = Ot.exec(a);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return u ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == u && (e = S[e.toLowerCase()] = S[e.toLowerCase()] || e, b[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == u && (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (u) k.always(e[k.status]);
                                else
                                    for (t in e) w[t] = [w[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || T;
                            return o && o.abort(t), i(0, t), this
                        }
                    };
                if (g.promise(k), h.url = ((t || h.url || kt.href) + "").replace(Dt, kt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(qe) || [""], null == h.crossDomain) {
                    c = ne.createElement("a");
                    try {
                        c.href = h.url, c.href = c.href, h.crossDomain = _t.protocol + "//" + _t.host != c.protocol + "//" + c.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), K(zt, h, n, k), u) return k;
                d = he.event && h.global, d && 0 == he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), r = h.url.replace(It, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Lt, "+")) : (p = h.url.slice(r.length), h.data && (r += (Ct.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(Mt, "$1"), p = (Ct.test(r) ? "&" : "?") + "_=" + xt++ + p), h.url = r + p), h.ifModified && (he.lastModified[r] && k.setRequestHeader("If-Modified-Since", he.lastModified[r]), he.etag[r] && k.setRequestHeader("If-None-Match", he.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Nt + "; q=0.01" : "") : h.accepts["*"]);
                for (f in h.headers) k.setRequestHeader(f, h.headers[f]);
                if (h.beforeSend && (!1 === h.beforeSend.call(m, k, h) || u)) return k.abort();
                if (T = "abort", y.add(h.complete), k.done(h.success), k.fail(h.error), o = K(jt, h, n, k)) {
                    if (k.readyState = 1, d && v.trigger("ajaxSend", [k, h]), u) return k;
                    h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                        k.abort("timeout")
                    }, h.timeout));
                    try {
                        u = !1, o.send(b, i)
                    } catch (e) {
                        if (u) throw e;
                        i(-1, e)
                    }
                } else i(-1, "No Transport");
                return k
            },
            getJSON: function(e, t, n) {
                return he.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return he.get(e, void 0, t, "script")
            }
        }), he.each(["get", "post"], function(e, t) {
            he[t] = function(e, n, i, o) {
                return he.isFunction(n) && (o = o || i, i = n, n = void 0), he.ajax(he.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                }, he.isPlainObject(e) && e))
            }
        }), he._evalUrl = function(e) {
            return he.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, he.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return he.isFunction(e) ? this.each(function(t) {
                    he(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = he(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = he.isFunction(e);
                return this.each(function(n) {
                    he(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    he(this).replaceWith(this.childNodes)
                }), this
            }
        }), he.expr.pseudos.hidden = function(e) {
            return !he.expr.pseudos.visible(e)
        }, he.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, he.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        };
        var Ft = {
                0: 200,
                1223: 204
            },
            Bt = he.ajaxSettings.xhr();
        pe.cors = !!Bt && "withCredentials" in Bt, pe.ajax = Bt = !!Bt, he.ajaxTransport(function(t) {
            var n, i;
            if (pe.cors || Bt && !t.crossDomain) return {
                send: function(o, r) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (a in o) s.setRequestHeader(a, o[a]);
                    n = function(e) {
                        return function() {
                            n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Ft[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n) throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
        }), he.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), he.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return he.globalEval(e), e
                }
            }
        }), he.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), he.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, o) {
                        t = he("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                        }), ne.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Vt = [],
            Rt = /(=)\?(?=&|$)|\?\?/;
        he.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Vt.pop() || he.expando + "_" + xt++;
                return this[e] = !0, e
            }
        }), he.ajaxPrefilter("json jsonp", function(t, n, i) {
            var o, r, a, s = !1 !== t.jsonp && (Rt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Rt, "$1" + o) : !1 !== t.jsonp && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                return a || he.error(o + " was not called"), a[0]
            }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
                a = arguments
            }, i.always(function() {
                void 0 === r ? he(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Vt.push(o)), a && he.isFunction(r) && r(a[0]), a = r = void 0
            }), "script"
        }), pe.createHTMLDocument = function() {
            var e = ne.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), he.parseHTML = function(e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && (n = t, t = !1);
            var i, o, r;
            return t || (pe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = ne.location.href, t.head.appendChild(i)) : t = ne), o = ke.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = b([e], t, r), r && r.length && he(r).remove(), he.merge([], o.childNodes))
        }, he.fn.load = function(e, t, n) {
            var i, o, r, a = this,
                s = e.indexOf(" ");
            return s > -1 && (i = Y(e.slice(s)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && he.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, a.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, r || [e.responseText, t, e])
                })
            }), this
        }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            he.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), he.expr.pseudos.animated = function(e) {
            return he.grep(he.timers, function(t) {
                return e === t.elem
            }).length
        }, he.offset = {
            setOffset: function(e, t, n) {
                var i, o, r, a, s, l, c, u = he.css(e, "position"),
                    d = he(e),
                    f = {};
                "static" === u && (e.style.position = "relative"), s = d.offset(), r = he.css(e, "top"), l = he.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : d.css(f)
            }
        }, he.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    he.offset.setOffset(this, e, t)
                });
                var t, n, i, o, r = this[0];
                if (r) return r.getClientRects().length ? (i = r.getBoundingClientRect(), t = r.ownerDocument, n = t.documentElement, o = t.defaultView, {
                    top: i.top + o.pageYOffset - n.clientTop,
                    left: i.left + o.pageXOffset - n.clientLeft
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), o(e[0], "html") || (i = e.offset()), i = {
                        top: i.top + he.css(e[0], "borderTopWidth", !0),
                        left: i.left + he.css(e[0], "borderLeftWidth", !0)
                    }), {
                        top: t.top - i.top - he.css(n, "marginTop", !0),
                        left: t.left - i.left - he.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
                    return e || Qe
                })
            }
        }), he.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            he.fn[e] = function(i) {
                return Me(this, function(e, i, o) {
                    var r;
                    if (he.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
                }, e, i, arguments.length)
            }
        }), he.each(["top", "left"], function(e, t) {
            he.cssHooks[t] = O(pe.pixelPosition, function(e, n) {
                if (n) return n = M(e, t), rt.test(n) ? he(e).position()[t] + "px" : n
            })
        }), he.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            he.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                he.fn[i] = function(o, r) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                        s = n || (!0 === o || !0 === r ? "margin" : "border");
                    return Me(this, function(t, n, o) {
                        var r;
                        return he.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? he.css(t, n, s) : he.style(t, n, o, s)
                    }, t, a ? o : void 0, a)
                }
            })
        }), he.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), he.holdReady = function(e) {
            e ? he.readyWait++ : he.ready(!0)
        }, he.isArray = Array.isArray, he.parseJSON = JSON.parse, he.nodeName = o, "function" == typeof define && define.amd && define("jquery", [], function() {
            return he
        });
        var Wt = e.jQuery,
            Ut = e.$;
        return he.noConflict = function(t) {
            return e.$ === he && (e.$ = Ut), t && e.jQuery === he && (e.jQuery = Wt), he
        }, t || (e.jQuery = e.$ = he), he
    }), function(e) {
        function t() {}

        function n(e) {
            function n(t) {
                t.prototype.option || (t.prototype.option = function(t) {
                    e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t))
                })
            }

            function o(t, n) {
                e.fn[t] = function(o) {
                    if ("string" == typeof o) {
                        for (var a = i.call(arguments, 1), s = 0, l = this.length; s < l; s++) {
                            var c = this[s],
                                u = e.data(c, t);
                            if (u)
                                if (e.isFunction(u[o]) && "_" !== o.charAt(0)) {
                                    var d = u[o].apply(u, a);
                                    if (void 0 !== d) return d
                                } else r("no such method '" + o + "' for " + t + " instance");
                            else r("cannot call methods on " + t + " prior to initialization; attempted to call '" + o + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var i = e.data(this, t);
                        i ? (i.option(o), i._init()) : (i = new n(this, o), e.data(this, t, i))
                    })
                }
            }
            if (e) {
                var r = "undefined" == typeof console ? t : function(e) {
                    console.error(e)
                };
                return e.bridget = function(e, t) {
                    n(t), o(e, t)
                }, e.bridget
            }
        }
        var i = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], n) : n("object" == typeof exports ? require("jquery") : e.jQuery)
    }(window), function(e) {
        function t(e) {
            return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
        }

        function n(e, t) {
            (i(e, t) ? r : o)(e, t)
        }
        var i, o, r;
        "classList" in document.documentElement ? (i = function(e, t) {
            return e.classList.contains(t)
        }, o = function(e, t) {
            e.classList.add(t)
        }, r = function(e, t) {
            e.classList.remove(t)
        }) : (i = function(e, n) {
            return t(n).test(e.className)
        }, o = function(e, t) {
            i(e, t) || (e.className = e.className + " " + t)
        }, r = function(e, n) {
            e.className = e.className.replace(t(n), " ")
        });
        var a = {
            hasClass: i,
            addClass: o,
            removeClass: r,
            toggleClass: n,
            has: i,
            add: o,
            remove: r,
            toggle: n
        };
        "function" == typeof define && define.amd ? define("classie/classie", a) : "object" == typeof exports ? module.exports = a : e.classie = a
    }(window), function(e) {
        function t(e) {
            if (e) {
                if ("string" == typeof i[e]) return e;
                e = e.charAt(0).toUpperCase() + e.slice(1);
                for (var t, o = 0, r = n.length; o < r; o++)
                    if (t = n[o] + e, "string" == typeof i[t]) return t
            }
        }
        var n = "Webkit Moz ms Ms O".split(" "),
            i = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return t
        }) : "object" == typeof exports ? module.exports = t : e.getStyleProperty = t
    }(window), function(e, t) {
        function n(e) {
            var t = parseFloat(e);
            return -1 === e.indexOf("%") && !isNaN(t) && t
        }

        function i() {}

        function o() {
            for (var e = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, t = 0, n = s.length; t < n; t++) {
                e[s[t]] = 0
            }
            return e
        }

        function r(t) {
            function i() {
                if (!f) {
                    f = !0;
                    var i = e.getComputedStyle;
                    if (c = function() {
                            var e = i ? function(e) {
                                return i(e, null)
                            } : function(e) {
                                return e.currentStyle
                            };
                            return function(t) {
                                var n = e(t);
                                return n || a("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), n
                            }
                        }(), u = t("boxSizing")) {
                        var o = document.createElement("div");
                        o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[u] = "border-box";
                        var r = document.body || document.documentElement;
                        r.appendChild(o);
                        var s = c(o);
                        d = 200 === n(s.width), r.removeChild(o)
                    }
                }
            }

            function r(e) {
                if (i(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                    var t = c(e);
                    if ("none" === t.display) return o();
                    var r = {};
                    r.width = e.offsetWidth, r.height = e.offsetHeight;
                    for (var a = r.isBorderBox = !(!u || !t[u] || "border-box" !== t[u]), f = 0, p = s.length; f < p; f++) {
                        var h = s[f],
                            m = t[h];
                        m = l(e, m);
                        var v = parseFloat(m);
                        r[h] = isNaN(v) ? 0 : v
                    }
                    var g = r.paddingLeft + r.paddingRight,
                        y = r.paddingTop + r.paddingBottom,
                        w = r.marginLeft + r.marginRight,
                        b = r.marginTop + r.marginBottom,
                        S = r.borderLeftWidth + r.borderRightWidth,
                        T = r.borderTopWidth + r.borderBottomWidth,
                        k = a && d,
                        x = n(t.width);
                    !1 !== x && (r.width = x + (k ? 0 : g + S));
                    var C = n(t.height);
                    return !1 !== C && (r.height = C + (k ? 0 : y + T)), r.innerWidth = r.width - (g + S), r.innerHeight = r.height - (y + T), r.outerWidth = r.width + w, r.outerHeight = r.height + b, r
                }
            }

            function l(t, n) {
                if (e.getComputedStyle || -1 === n.indexOf("%")) return n;
                var i = t.style,
                    o = i.left,
                    r = t.runtimeStyle,
                    a = r && r.left;
                return a && (r.left = t.currentStyle.left), i.left = n, n = i.pixelLeft, i.left = o, a && (r.left = a), n
            }
            var c, u, d, f = !1;
            return r
        }
        var a = "undefined" == typeof console ? i : function(e) {
                console.error(e)
            },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("desandro-get-style-property")) : e.getSize = r(e.getStyleProperty)
    }(window), function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var o = function() {};
        n.removeEventListener ? o = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (o = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var r = {
            bind: i,
            unbind: o
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : e.eventie = r
    }(window), function(e) {
        function t(e) {
            "function" == typeof e && (t.isReady ? e() : a.push(e))
        }

        function n(e) {
            var n = "readystatechange" === e.type && "complete" !== r.readyState;
            t.isReady || n || i()
        }

        function i() {
            t.isReady = !0;
            for (var e = 0, n = a.length; e < n; e++) {
                (0, a[e])()
            }
        }

        function o(o) {
            return "complete" === r.readyState ? i() : (o.bind(r, "DOMContentLoaded", n), o.bind(r, "readystatechange", n), o.bind(e, "load", n)), t
        }
        var r = e.document,
            a = [];
        t.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : e.docReady = o(e.eventie)
    }(window), function() {
        function e() {}

        function t(e, t) {
            for (var n = e.length; n--;)
                if (e[n].listener === t) return n;
            return -1
        }

        function n(e) {
            return function() {
                return this[e].apply(this, arguments)
            }
        }
        var i = e.prototype,
            o = this,
            r = o.EventEmitter;
        i.getListeners = function(e) {
            var t, n, i = this._getEvents();
            if (e instanceof RegExp) {
                t = {};
                for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
            } else t = i[e] || (i[e] = []);
            return t
        }, i.flattenListeners = function(e) {
            var t, n = [];
            for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
            return n
        }, i.getListenersAsObject = function(e) {
            var t, n = this.getListeners(e);
            return n instanceof Array && (t = {}, t[e] = n), t || n
        }, i.addListener = function(e, n) {
            var i, o = this.getListenersAsObject(e),
                r = "object" == typeof n;
            for (i in o) o.hasOwnProperty(i) && -1 === t(o[i], n) && o[i].push(r ? n : {
                listener: n,
                once: !1
            });
            return this
        }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
            return this.addListener(e, {
                listener: t,
                once: !0
            })
        }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
            return this.getListeners(e), this
        }, i.defineEvents = function(e) {
            for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
            return this
        }, i.removeListener = function(e, n) {
            var i, o, r = this.getListenersAsObject(e);
            for (o in r) r.hasOwnProperty(o) && -1 !== (i = t(r[o], n)) && r[o].splice(i, 1);
            return this
        }, i.off = n("removeListener"), i.addListeners = function(e, t) {
            return this.manipulateListeners(!1, e, t)
        }, i.removeListeners = function(e, t) {
            return this.manipulateListeners(!0, e, t)
        }, i.manipulateListeners = function(e, t, n) {
            var i, o, r = e ? this.removeListener : this.addListener,
                a = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (i = n.length; i--;) r.call(this, t, n[i]);
            else
                for (i in t) t.hasOwnProperty(i) && (o = t[i]) && ("function" == typeof o ? r.call(this, i, o) : a.call(this, i, o));
            return this
        }, i.removeEvent = function(e) {
            var t, n = typeof e,
                i = this._getEvents();
            if ("string" === n) delete i[e];
            else if (e instanceof RegExp)
                for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
            else delete this._events;
            return this
        }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
            var n, i, o, r = this.getListenersAsObject(e);
            for (o in r)
                if (r.hasOwnProperty(o))
                    for (i = r[o].length; i--;) n = r[o][i], !0 === n.once && this.removeListener(e, n.listener), n.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, n.listener);
            return this
        }, i.trigger = n("emitEvent"), i.emit = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t)
        }, i.setOnceReturnValue = function(e) {
            return this._onceReturnValue = e, this
        }, i._getOnceReturnValue = function() {
            return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, e.noConflict = function() {
            return o.EventEmitter = r, e
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return e
        }) : "object" == typeof module && module.exports ? module.exports = e : o.EventEmitter = e
    }.call(this), function(e) {
        function t(e, t) {
            return e[a](t)
        }

        function n(e) {
            if (!e.parentNode) {
                document.createDocumentFragment().appendChild(e)
            }
        }

        function i(e, t) {
            n(e);
            for (var i = e.parentNode.querySelectorAll(t), o = 0, r = i.length; o < r; o++)
                if (i[o] === e) return !0;
            return !1
        }

        function o(e, i) {
            return n(e), t(e, i)
        }
        var r, a = function() {
            if (e.matchesSelector) return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], n = 0, i = t.length; n < i; n++) {
                var o = t[n],
                    r = o + "MatchesSelector";
                if (e[r]) return r
            }
        }();
        if (a) {
            var s = document.createElement("div"),
                l = t(s, "div");
            r = l ? t : o
        } else r = i;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return r
        }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
    }(Element.prototype), function(e) {
        function t(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function n(e) {
            for (var t in e) return !1;
            return null, !0
        }

        function i(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }

        function o(e, o, r) {
            function s(e, t) {
                e && (this.element = e, this.layout = t, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var l = r("transition"),
                c = r("transform"),
                u = l && c,
                d = !!r("perspective"),
                f = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[l],
                p = ["transform", "transition", "transitionDuration", "transitionProperty"],
                h = function() {
                    for (var e = {}, t = 0, n = p.length; t < n; t++) {
                        var i = p[t],
                            o = r(i);
                        o && o !== i && (e[i] = o)
                    }
                    return e
                }();
            t(s.prototype, e.prototype), s.prototype._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, s.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, s.prototype.getSize = function() {
                this.size = o(this.element)
            }, s.prototype.css = function(e) {
                var t = this.element.style;
                for (var n in e) {
                    t[h[n] || n] = e[n]
                }
            }, s.prototype.getPosition = function() {
                var e = a(this.element),
                    t = this.layout.options,
                    n = t.isOriginLeft,
                    i = t.isOriginTop,
                    o = parseInt(e[n ? "left" : "right"], 10),
                    r = parseInt(e[i ? "top" : "bottom"], 10);
                o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r;
                var s = this.layout.size;
                o -= n ? s.paddingLeft : s.paddingRight, r -= i ? s.paddingTop : s.paddingBottom, this.position.x = o, this.position.y = r
            }, s.prototype.layoutPosition = function() {
                var e = this.layout.size,
                    t = this.layout.options,
                    n = {};
                t.isOriginLeft ? (n.left = this.position.x + e.paddingLeft + "px", n.right = "") : (n.right = this.position.x + e.paddingRight + "px", n.left = ""), t.isOriginTop ? (n.top = this.position.y + e.paddingTop + "px", n.bottom = "") : (n.bottom = this.position.y + e.paddingBottom + "px", n.top = ""), this.css(n), this.emitEvent("layout", [this])
            };
            var m = d ? function(e, t) {
                return "translate3d(" + e + "px, " + t + "px, 0)"
            } : function(e, t) {
                return "translate(" + e + "px, " + t + "px)"
            };
            s.prototype._transitionTo = function(e, t) {
                this.getPosition();
                var n = this.position.x,
                    i = this.position.y,
                    o = parseInt(e, 10),
                    r = parseInt(t, 10),
                    a = o === this.position.x && r === this.position.y;
                if (this.setPosition(e, t), a && !this.isTransitioning) return void this.layoutPosition();
                var s = e - n,
                    l = t - i,
                    c = {},
                    u = this.layout.options;
                s = u.isOriginLeft ? s : -s, l = u.isOriginTop ? l : -l, c.transform = m(s, l), this.transition({
                    to: c,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, s.prototype.goTo = function(e, t) {
                this.setPosition(e, t), this.layoutPosition()
            }, s.prototype.moveTo = u ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function(e, t) {
                this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
            }, s.prototype._nonTransition = function(e) {
                this.css(e.to), e.isCleaning && this._removeStyles(e.to);
                for (var t in e.onTransitionEnd) e.onTransitionEnd[t].call(this)
            }, s.prototype._transition = function(e) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(e);
                var t = this._transn;
                for (var n in e.onTransitionEnd) t.onEnd[n] = e.onTransitionEnd[n];
                for (n in e.to) t.ingProperties[n] = !0, e.isCleaning && (t.clean[n] = !0);
                if (e.from) {
                    this.css(e.from);
                    this.element.offsetHeight;
                    null
                }
                this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
            };
            var v = c && i(c) + ",opacity";
            s.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: v,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(f, this, !1))
            }, s.prototype.transition = s.prototype[l ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function(e) {
                this.ontransitionend(e)
            }, s.prototype.onotransitionend = function(e) {
                this.ontransitionend(e)
            };
            var g = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            s.prototype.ontransitionend = function(e) {
                if (e.target === this.element) {
                    var t = this._transn,
                        i = g[e.propertyName] || e.propertyName;
                    if (delete t.ingProperties[i], n(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[i]), i in t.onEnd) {
                        t.onEnd[i].call(this), delete t.onEnd[i]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, s.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(f, this, !1), this.isTransitioning = !1
            }, s.prototype._removeStyles = function(e) {
                var t = {};
                for (var n in e) t[n] = "";
                this.css(t)
            };
            var y = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return s.prototype.removeTransitionStyles = function() {
                this.css(y)
            }, s.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, s.prototype.remove = function() {
                if (!l || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                var e = this;
                this.on("transitionEnd", function() {
                    return e.removeElem(), !0
                }), this.hide()
            }, s.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var e = this.layout.options;
                this.transition({
                    from: e.hiddenStyle,
                    to: e.visibleStyle,
                    isCleaning: !0
                })
            }, s.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var e = this.layout.options;
                this.transition({
                    from: e.visibleStyle,
                    to: e.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, s.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, s
        }
        var r = e.getComputedStyle,
            a = r ? function(e) {
                return r(e, null)
            } : function(e) {
                return e.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (e.Outlayer = {}, e.Outlayer.Item = o(e.EventEmitter, e.getSize, e.getStyleProperty))
    }(window), function(e) {
        function t(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function n(e) {
            return "[object Array]" === d.call(e)
        }

        function i(e) {
            var t = [];
            if (n(e)) t = e;
            else if (e && "number" == typeof e.length)
                for (var i = 0, o = e.length; i < o; i++) t.push(e[i]);
            else t.push(e);
            return t
        }

        function o(e, t) {
            var n = p(t, e); - 1 !== n && t.splice(n, 1)
        }

        function r(e) {
            return e.replace(/(.)([A-Z])/g, function(e, t, n) {
                return t + "-" + n
            }).toLowerCase()
        }

        function a(n, a, d, p, h, m) {
            function v(e, n) {
                if ("string" == typeof e && (e = s.querySelector(e)), !e || !f(e)) return void(l && l.error("Bad " + this.constructor.namespace + " element: " + e));
                this.element = e, this.options = t({}, this.constructor.defaults), this.option(n);
                var i = ++g;
                this.element.outlayerGUID = i, y[i] = this, this._create(), this.options.isInitLayout && this.layout()
            }
            var g = 0,
                y = {};
            return v.namespace = "outlayer", v.Item = m, v.defaults = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, t(v.prototype, d.prototype), v.prototype.option = function(e) {
                t(this.options, e)
            }, v.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), t(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, v.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, v.prototype._itemize = function(e) {
                for (var t = this._filterFindItemElements(e), n = this.constructor.Item, i = [], o = 0, r = t.length; o < r; o++) {
                    var a = t[o],
                        s = new n(a, this);
                    i.push(s)
                }
                return i
            }, v.prototype._filterFindItemElements = function(e) {
                e = i(e);
                for (var t = this.options.itemSelector, n = [], o = 0, r = e.length; o < r; o++) {
                    var a = e[o];
                    if (f(a))
                        if (t) {
                            h(a, t) && n.push(a);
                            for (var s = a.querySelectorAll(t), l = 0, c = s.length; l < c; l++) n.push(s[l])
                        } else n.push(a)
                }
                return n
            }, v.prototype.getItemElements = function() {
                for (var e = [], t = 0, n = this.items.length; t < n; t++) e.push(this.items[t].element);
                return e
            }, v.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, e), this._isLayoutInited = !0
            }, v.prototype._init = v.prototype.layout, v.prototype._resetLayout = function() {
                this.getSize()
            }, v.prototype.getSize = function() {
                this.size = p(this.element)
            }, v.prototype._getMeasurement = function(e, t) {
                var n;
                void 0 !== this.options && (n = this.options[e]);
                var i;
                n ? ("string" == typeof n ? i = this.element.querySelector(n) : f(n) && (i = n), this[e] = i ? p(i)[t] : n) : this[e] = 0
            }, v.prototype.layoutItems = function(e, t) {
                e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
            }, v.prototype._getItemsForLayout = function(e) {
                for (var t = [], n = 0, i = e.length; n < i; n++) {
                    var o = e[n];
                    o.isIgnored || t.push(o)
                }
                return t
            }, v.prototype._layoutItems = function(e, t) {
                function n() {
                    i.emitEvent("layoutComplete", [i, e])
                }
                var i = this;
                if (!e || !e.length) return void n();
                this._itemsOn(e, "layout", n);
                for (var o = [], r = 0, a = e.length; r < a; r++) {
                    var s = e[r],
                        l = this._getItemLayoutPosition(s);
                    l.item = s, l.isInstant = t || s.isLayoutInstant, o.push(l)
                }
                this._processLayoutQueue(o)
            }, v.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, v.prototype._processLayoutQueue = function(e) {
                for (var t = 0, n = e.length; t < n; t++) {
                    var i = e[t];
                    this._positionItem(i.item, i.x, i.y, i.isInstant)
                }
            }, v.prototype._positionItem = function(e, t, n, i) {
                i ? e.goTo(t, n) : e.moveTo(t, n)
            }, v.prototype._postLayout = function() {
                this.resizeContainer()
            }, v.prototype.resizeContainer = function() {
                if (this.options.isResizingContainer) {
                    var e = this._getContainerSize();
                    e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
                }
            }, v.prototype._getContainerSize = u, v.prototype._setContainerMeasure = function(e, t) {
                if (void 0 !== e) {
                    var n = this.size;
                    n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
                }
            }, v.prototype._itemsOn = function(e, t, n) {
                function i() {
                    return o++, o === r && n.call(a), !0
                }
                for (var o = 0, r = e.length, a = this, s = 0, l = e.length; s < l; s++) {
                    e[s].on(t, i)
                }
            }, v.prototype.ignore = function(e) {
                var t = this.getItem(e);
                t && (t.isIgnored = !0)
            }, v.prototype.unignore = function(e) {
                var t = this.getItem(e);
                t && delete t.isIgnored
            }, v.prototype.stamp = function(e) {
                if (e = this._find(e)) {
                    this.stamps = this.stamps.concat(e);
                    for (var t = 0, n = e.length; t < n; t++) {
                        var i = e[t];
                        this.ignore(i)
                    }
                }
            }, v.prototype.unstamp = function(e) {
                if (e = this._find(e))
                    for (var t = 0, n = e.length; t < n; t++) {
                        var i = e[t];
                        o(i, this.stamps), this.unignore(i)
                    }
            }, v.prototype._find = function(e) {
                if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), e = i(e)
            }, v.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var e = 0, t = this.stamps.length; e < t; e++) {
                        var n = this.stamps[e];
                        this._manageStamp(n)
                    }
                }
            }, v.prototype._getBoundingRect = function() {
                var e = this.element.getBoundingClientRect(),
                    t = this.size;
                this._boundingRect = {
                    left: e.left + t.paddingLeft + t.borderLeftWidth,
                    top: e.top + t.paddingTop + t.borderTopWidth,
                    right: e.right - (t.paddingRight + t.borderRightWidth),
                    bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
                }
            }, v.prototype._manageStamp = u, v.prototype._getElementOffset = function(e) {
                var t = e.getBoundingClientRect(),
                    n = this._boundingRect,
                    i = p(e);
                return {
                    left: t.left - n.left - i.marginLeft,
                    top: t.top - n.top - i.marginTop,
                    right: n.right - t.right - i.marginRight,
                    bottom: n.bottom - t.bottom - i.marginBottom
                }
            }, v.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, v.prototype.bindResize = function() {
                this.isResizeBound || (n.bind(e, "resize", this), this.isResizeBound = !0)
            }, v.prototype.unbindResize = function() {
                this.isResizeBound && n.unbind(e, "resize", this), this.isResizeBound = !1
            }, v.prototype.onresize = function() {
                function e() {
                    t.resize(), delete t.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var t = this;
                this.resizeTimeout = setTimeout(e, 100)
            }, v.prototype.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, v.prototype.needsResizeLayout = function() {
                var e = p(this.element);
                return this.size && e && e.innerWidth !== this.size.innerWidth
            }, v.prototype.addItems = function(e) {
                var t = this._itemize(e);
                return t.length && (this.items = this.items.concat(t)), t
            }, v.prototype.appended = function(e) {
                var t = this.addItems(e);
                t.length && (this.layoutItems(t, !0), this.reveal(t))
            }, v.prototype.prepended = function(e) {
                var t = this._itemize(e);
                if (t.length) {
                    var n = this.items.slice(0);
                    this.items = t.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(n)
                }
            }, v.prototype.reveal = function(e) {
                var t = e && e.length;
                if (t)
                    for (var n = 0; n < t; n++) {
                        var i = e[n];
                        i.reveal()
                    }
            }, v.prototype.hide = function(e) {
                var t = e && e.length;
                if (t)
                    for (var n = 0; n < t; n++) {
                        var i = e[n];
                        i.hide()
                    }
            }, v.prototype.getItem = function(e) {
                for (var t = 0, n = this.items.length; t < n; t++) {
                    var i = this.items[t];
                    if (i.element === e) return i
                }
            }, v.prototype.getItems = function(e) {
                if (e && e.length) {
                    for (var t = [], n = 0, i = e.length; n < i; n++) {
                        var o = e[n],
                            r = this.getItem(o);
                        r && t.push(r)
                    }
                    return t
                }
            }, v.prototype.remove = function(e) {
                e = i(e);
                var t = this.getItems(e);
                if (t && t.length) {
                    this._itemsOn(t, "remove", function() {
                        this.emitEvent("removeComplete", [this, t])
                    });
                    for (var n = 0, r = t.length; n < r; n++) {
                        var a = t[n];
                        a.remove(), o(a, this.items)
                    }
                }
            }, v.prototype.destroy = function() {
                var e = this.element.style;
                e.height = "", e.position = "", e.width = "";
                for (var t = 0, n = this.items.length; t < n; t++) {
                    this.items[t].destroy()
                }
                this.unbindResize();
                var i = this.element.outlayerGUID;
                delete y[i], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
            }, v.data = function(e) {
                var t = e && e.outlayerGUID;
                return t && y[t]
            }, v.create = function(e, n) {
                function i() {
                    v.apply(this, arguments)
                }
                return Object.create ? i.prototype = Object.create(v.prototype) : t(i.prototype, v.prototype), i.prototype.constructor = i, i.defaults = t({}, v.defaults), t(i.defaults, n), i.prototype.settings = {}, i.namespace = e, i.data = v.data, i.Item = function() {
                    m.apply(this, arguments)
                }, i.Item.prototype = new m, a(function() {
                    for (var t = r(e), n = s.querySelectorAll(".js-" + t), o = "data-" + t + "-options", a = 0, u = n.length; a < u; a++) {
                        var d, f = n[a],
                            p = f.getAttribute(o);
                        try {
                            d = p && JSON.parse(p)
                        } catch (e) {
                            l && l.error("Error parsing " + o + " on " + f.nodeName.toLowerCase() + (f.id ? "#" + f.id : "") + ": " + e);
                            continue
                        }
                        var h = new i(f, d);
                        c && c.data(f, e, h)
                    }
                }), c && c.bridget && c.bridget(e, i), i
            }, v.Item = m, v
        }
        var s = e.document,
            l = e.console,
            c = e.jQuery,
            u = function() {},
            d = Object.prototype.toString,
            f = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(e) {
                return e instanceof HTMLElement
            } : function(e) {
                return e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName
            },
            p = Array.prototype.indexOf ? function(e, t) {
                return e.indexOf(t)
            } : function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], a) : "object" == typeof exports ? module.exports = a(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : e.Outlayer = a(e.eventie, e.docReady, e.EventEmitter, e.getSize, e.matchesSelector, e.Outlayer.Item)
    }(window), function(e) {
        function t() {
            function e(t) {
                for (var n in e.defaults) this[n] = e.defaults[n];
                for (n in t) this[n] = t[n]
            }
            return n.Rect = e, e.defaults = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }, e.prototype.contains = function(e) {
                var t = e.width || 0,
                    n = e.height || 0;
                return this.x <= e.x && this.y <= e.y && this.x + this.width >= e.x + t && this.y + this.height >= e.y + n
            }, e.prototype.overlaps = function(e) {
                var t = this.x + this.width,
                    n = this.y + this.height,
                    i = e.x + e.width,
                    o = e.y + e.height;
                return this.x < i && t > e.x && this.y < o && n > e.y
            }, e.prototype.getMaximalFreeRects = function(t) {
                if (!this.overlaps(t)) return !1;
                var n, i = [],
                    o = this.x + this.width,
                    r = this.y + this.height,
                    a = t.x + t.width,
                    s = t.y + t.height;
                return this.y < t.y && (n = new e({
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: t.y - this.y
                }), i.push(n)), o > a && (n = new e({
                    x: a,
                    y: this.y,
                    width: o - a,
                    height: this.height
                }), i.push(n)), r > s && (n = new e({
                    x: this.x,
                    y: s,
                    width: this.width,
                    height: r - s
                }), i.push(n)), this.x < t.x && (n = new e({
                    x: this.x,
                    y: this.y,
                    width: t.x - this.x,
                    height: this.height
                }), i.push(n)), i
            }, e.prototype.canFit = function(e) {
                return this.width >= e.width && this.height >= e.height
            }, e
        }
        var n = e.Packery = function() {};
        "function" == typeof define && define.amd ? define("packery/js/rect", t) : "object" == typeof exports ? module.exports = t() : (e.Packery = e.Packery || {}, e.Packery.Rect = t())
    }(window), function(e) {
        function t(e) {
            function t(e, t, n) {
                this.width = e || 0, this.height = t || 0, this.sortDirection = n || "downwardLeftToRight", this.reset()
            }
            t.prototype.reset = function() {
                this.spaces = [], this.newSpaces = [];
                var t = new e({
                    x: 0,
                    y: 0,
                    width: this.width,
                    height: this.height
                });
                this.spaces.push(t), this.sorter = n[this.sortDirection] || n.downwardLeftToRight
            }, t.prototype.pack = function(e) {
                for (var t = 0, n = this.spaces.length; t < n; t++) {
                    var i = this.spaces[t];
                    if (i.canFit(e)) {
                        this.placeInSpace(e, i);
                        break
                    }
                }
            }, t.prototype.placeInSpace = function(e, t) {
                e.x = t.x, e.y = t.y, this.placed(e)
            }, t.prototype.placed = function(e) {
                for (var t = [], n = 0, i = this.spaces.length; n < i; n++) {
                    var o = this.spaces[n],
                        r = o.getMaximalFreeRects(e);
                    r ? t.push.apply(t, r) : t.push(o)
                }
                this.spaces = t, this.mergeSortSpaces()
            }, t.prototype.mergeSortSpaces = function() {
                t.mergeRects(this.spaces), this.spaces.sort(this.sorter)
            }, t.prototype.addSpace = function(e) {
                this.spaces.push(e), this.mergeSortSpaces()
            }, t.mergeRects = function(e) {
                for (var t = 0, n = e.length; t < n; t++) {
                    var i = e[t];
                    if (i) {
                        var o = e.slice(0);
                        o.splice(t, 1);
                        for (var r = 0, a = 0, s = o.length; a < s; a++) {
                            var l = o[a],
                                c = t > a ? 0 : 1;
                            i.contains(l) && (e.splice(a + c - r, 1), r++)
                        }
                    }
                }
                return e
            };
            var n = {
                downwardLeftToRight: function(e, t) {
                    return e.y - t.y || e.x - t.x
                },
                rightwardTopToBottom: function(e, t) {
                    return e.x - t.x || e.y - t.y
                }
            };
            return t
        }
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], t);
        else if ("object" == typeof exports) module.exports = t(require("./rect"));
        else {
            var n = e.Packery = e.Packery || {};
            n.Packer = t(n.Rect)
        }
    }(window), function(e) {
        function t(e, t, n) {
            var i = e("transform"),
                o = function() {
                    t.Item.apply(this, arguments)
                };
            o.prototype = new t.Item;
            var r = o.prototype._create;
            return o.prototype._create = function() {
                r.call(this), this.rect = new n, this.placeRect = new n
            }, o.prototype.dragStart = function() {
                this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && i && (this.element.style[i] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
            }, o.prototype.dragMove = function(e, t) {
                this.didDrag = !0;
                var n = this.layout.size;
                e -= n.paddingLeft, t -= n.paddingTop, this.positionPlaceRect(e, t)
            }, o.prototype.dragStop = function() {
                this.getPosition();
                var e = this.position.x !== this.placeRect.x,
                    t = this.position.y !== this.placeRect.y;
                this.needsPositioning = e || t, this.didDrag = !1
            }, o.prototype.positionPlaceRect = function(e, t, n) {
                this.placeRect.x = this.getPlaceRectCoord(e, !0), this.placeRect.y = this.getPlaceRectCoord(t, !1, n)
            }, o.prototype.getPlaceRectCoord = function(e, t, n) {
                var i = t ? "Width" : "Height",
                    o = this.size["outer" + i],
                    r = this.layout[t ? "columnWidth" : "rowHeight"],
                    a = this.layout.size["inner" + i];
                t || (a = Math.max(a, this.layout.maxY), this.layout.rowHeight || (a -= this.layout.gutter));
                var s;
                if (r) {
                    r += this.layout.gutter, a += t ? this.layout.gutter : 0, e = Math.round(e / r);
                    var l;
                    l = this.layout.options.isHorizontal ? t ? "ceil" : "floor" : t ? "floor" : "ceil";
                    var c = Math[l](a / r);
                    c -= Math.ceil(o / r), s = c
                } else s = a - o;
                return e = n ? e : Math.min(e, s), e *= r || 1, Math.max(0, e)
            }, o.prototype.copyPlaceRectPosition = function() {
                this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
            }, o.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
            }, o
        }
        "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], t) : "object" == typeof exports ? module.exports = t(require("desandro-get-style-property"), require("outlayer"), require("./rect")) : e.Packery.Item = t(e.getStyleProperty, e.Outlayer, e.Packery.Rect)
    }(window), function(e) {
        function t(e, t, n, i, o, r) {
            function a(e, t) {
                return e.position.y - t.position.y || e.position.x - t.position.x
            }

            function s(e, t) {
                return e.position.x - t.position.x || e.position.y - t.position.y
            }
            i.prototype.canFit = function(e) {
                return this.width >= e.width - 1 && this.height >= e.height - 1
            };
            var l = n.create("packery");
            return l.Item = r, l.prototype._create = function() {
                n.prototype._create.call(this), this.packer = new o, this.stamp(this.options.stamped);
                var e = this;
                this.handleDraggabilly = {
                    dragStart: function(t) {
                        e.itemDragStart(t.element)
                    },
                    dragMove: function(t) {
                        e.itemDragMove(t.element, t.position.x, t.position.y)
                    },
                    dragEnd: function(t) {
                        e.itemDragEnd(t.element)
                    }
                }, this.handleUIDraggable = {
                    start: function(t) {
                        e.itemDragStart(t.currentTarget)
                    },
                    drag: function(t, n) {
                        e.itemDragMove(t.currentTarget, n.position.left, n.position.top)
                    },
                    stop: function(t) {
                        e.itemDragEnd(t.currentTarget)
                    }
                }
            }, l.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurements();
                var e = this.packer;
                this.options.isHorizontal ? (e.width = Number.POSITIVE_INFINITY, e.height = this.size.innerHeight + this.gutter, e.sortDirection = "rightwardTopToBottom") : (e.width = this.size.innerWidth + this.gutter, e.height = Number.POSITIVE_INFINITY, e.sortDirection = "downwardLeftToRight"), e.reset(), this.maxY = 0, this.maxX = 0
            }, l.prototype._getMeasurements = function() {
                this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
            }, l.prototype._getItemLayoutPosition = function(e) {
                return this._packItem(e), e.rect
            }, l.prototype._packItem = function(e) {
                this._setRectSize(e.element, e.rect), this.packer.pack(e.rect), this._setMaxXY(e.rect)
            }, l.prototype._setMaxXY = function(e) {
                this.maxX = Math.max(e.x + e.width, this.maxX), this.maxY = Math.max(e.y + e.height, this.maxY)
            }, l.prototype._setRectSize = function(e, n) {
                var i = t(e),
                    o = i.outerWidth,
                    r = i.outerHeight;
                (o || r) && (o = this._applyGridGutter(o, this.columnWidth), r = this._applyGridGutter(r, this.rowHeight)), n.width = Math.min(o, this.packer.width), n.height = Math.min(r, this.packer.height)
            }, l.prototype._applyGridGutter = function(e, t) {
                if (!t) return e + this.gutter;
                t += this.gutter;
                var n = e % t,
                    i = n && n < 1 ? "round" : "ceil";
                return e = Math[i](e / t) * t
            }, l.prototype._getContainerSize = function() {
                return this.options.isHorizontal ? {
                    width: this.maxX - this.gutter
                } : {
                    height: this.maxY - this.gutter
                }
            }, l.prototype._manageStamp = function(e) {
                var t, n = this.getItem(e);
                if (n && n.isPlacing) t = n.placeRect;
                else {
                    var o = this._getElementOffset(e);
                    t = new i({
                        x: this.options.isOriginLeft ? o.left : o.right,
                        y: this.options.isOriginTop ? o.top : o.bottom
                    })
                }
                this._setRectSize(e, t), this.packer.placed(t), this._setMaxXY(t)
            }, l.prototype.sortItemsByPosition = function() {
                var e = this.options.isHorizontal ? s : a;
                this.items.sort(e)
            }, l.prototype.fit = function(e, t, n) {
                var i = this.getItem(e);
                i && (this._getMeasurements(), this.stamp(i.element), i.getSize(), i.isPlacing = !0, t = void 0 === t ? i.rect.x : t, n = void 0 === n ? i.rect.y : n, i.positionPlaceRect(t, n, !0), this._bindFitEvents(i), i.moveTo(i.placeRect.x, i.placeRect.y), this.layout(), this.unstamp(i.element), this.sortItemsByPosition(), i.isPlacing = !1, i.copyPlaceRectPosition())
            }, l.prototype._bindFitEvents = function(e) {
                function t() {
                    2 === ++i && n.emitEvent("fitComplete", [n, e])
                }
                var n = this,
                    i = 0;
                e.on("layout", function() {
                    return t(), !0
                }), this.on("layoutComplete", function() {
                    return t(), !0
                })
            }, l.prototype.resize = function() {
                var e = t(this.element),
                    n = this.size && e,
                    i = this.options.isHorizontal ? "innerHeight" : "innerWidth";
                n && e[i] === this.size[i] || this.layout()
            }, l.prototype.itemDragStart = function(e) {
                this.stamp(e);
                var t = this.getItem(e);
                t && t.dragStart()
            }, l.prototype.itemDragMove = function(e, t, n) {
                function i() {
                    r.layout(), delete r.dragTimeout
                }
                var o = this.getItem(e);
                o && o.dragMove(t, n);
                var r = this;
                this.clearDragTimeout(), this.dragTimeout = setTimeout(i, 40)
            }, l.prototype.clearDragTimeout = function() {
                this.dragTimeout && clearTimeout(this.dragTimeout)
            }, l.prototype.itemDragEnd = function(t) {
                var n, i = this.getItem(t);
                if (i && (n = i.didDrag, i.dragStop()), !i || !n && !i.needsPositioning) return void this.unstamp(t);
                e.add(i.element, "is-positioning-post-drag");
                var o = this._getDragEndLayoutComplete(t, i);
                i.needsPositioning ? (i.on("layout", o), i.moveTo(i.placeRect.x, i.placeRect.y)) : i && i.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", o), this.layout()
            }, l.prototype._getDragEndLayoutComplete = function(t, n) {
                var i = n && n.needsPositioning,
                    o = 0,
                    r = i ? 2 : 1,
                    a = this;
                return function() {
                    return ++o !== r || (n && (e.remove(n.element, "is-positioning-post-drag"), n.isPlacing = !1, n.copyPlaceRectPosition()), a.unstamp(t), a.sortItemsByPosition(), i && a.emitEvent("dragItemPositioned", [a, n]), !0)
                }
            }, l.prototype.bindDraggabillyEvents = function(e) {
                e.on("dragStart", this.handleDraggabilly.dragStart), e.on("dragMove", this.handleDraggabilly.dragMove), e.on("dragEnd", this.handleDraggabilly.dragEnd)
            }, l.prototype.bindUIDraggableEvents = function(e) {
                e.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
            }, l.Rect = i, l.Packer = o, l
        }
        "function" == typeof define && define.amd ? define(["classie/classie", "get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], t) : "object" == typeof exports ? module.exports = t(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : e.Packery = t(e.classie, e.getSize, e.Outlayer, e.Packery.Rect, e.Packery.Packer, e.Packery.Item)
    }(window), !window.YT) var YT = {
    loading: 0,
    loaded: 0
};
if (!window.YTConfig) var YTConfig = {
    host: "http://www.youtube.com"
};
YT.loading || (YT.loading = 1, function() {
        var e = [];
        YT.ready = function(t) {
            YT.loaded ? t() : e.push(t)
        }, window.onYTReady = function() {
            YT.loaded = 1;
            for (var t = 0; t < e.length; t++) try {
                e[t]()
            } catch (e) {}
        }, YT.setConfig = function(e) {
            for (var t in e) e.hasOwnProperty(t) && (YTConfig[t] = e[t])
        };
        var t = document.createElement("script");
        t.type = "text/javascript", t.id = "www-widgetapi-script", t.src = "https://s.ytimg.com/yts/jsbin/www-widgetapi-vfl3G6wqk/www-widgetapi.js", t.async = !0;
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(t, n)
    }()),
    function() {
        function e(t, n, i) {
            var o = e.resolve(t);
            if (null == o) {
                i = i || t, n = n || "root";
                var r = new Error('Failed to require "' + i + '" from "' + n + '"');
                throw r.path = i, r.parent = n, r.require = !0, r
            }
            var a = e.modules[o];
            return a.exports || (a.exports = {}, a.client = a.component = !0, a.call(this, a.exports, e.relative(o), a)), a.exports
        }
        e.modules = {}, e.aliases = {}, e.resolve = function(t) {
            "/" === t.charAt(0) && (t = t.slice(1));
            for (var n = [t, t + ".js", t + ".json", t + "/index.js", t + "/index.json"], i = 0; i < n.length; i++) {
                var t = n[i];
                if (e.modules.hasOwnProperty(t)) return t;
                if (e.aliases.hasOwnProperty(t)) return e.aliases[t]
            }
        }, e.normalize = function(e, t) {
            var n = [];
            if ("." != t.charAt(0)) return t;
            e = e.split("/"), t = t.split("/");
            for (var i = 0; i < t.length; ++i) ".." == t[i] ? e.pop() : "." != t[i] && "" != t[i] && n.push(t[i]);
            return e.concat(n).join("/")
        }, e.register = function(t, n) {
            e.modules[t] = n
        }, e.alias = function(t, n) {
            if (!e.modules.hasOwnProperty(t)) throw new Error('Failed to alias "' + t + '", it does not exist');
            e.aliases[n] = t
        }, e.relative = function(t) {
            function n(e, t) {
                for (var n = e.length; n--;)
                    if (e[n] === t) return n;
                return -1
            }

            function i(n) {
                return e(i.resolve(n), t, n)
            }
            var o = e.normalize(t, "..");
            return i.resolve = function(i) {
                var r = i.charAt(0);
                if ("/" == r) return i.slice(1);
                if ("." == r) return e.normalize(o, i);
                var a = t.split("/"),
                    s = n(a, "deps") + 1;
                return s || (s = 0), i = a.slice(0, s + 1).join("/") + "/deps/" + i
            }, i.exists = function(t) {
                return e.modules.hasOwnProperty(i.resolve(t))
            }, i
        }, e.register("component-transform-property/index.js", function(e, t, n) {
            for (var i, o = ["webkitTransform", "MozTransform", "msTransform", "OTransform", "transform"], r = document.createElement("p"), a = 0; a < o.length; a++)
                if (i = o[a], null != r.style[i]) {
                    n.exports = i;
                    break
                }
        }), e.register("component-has-translate3d/index.js", function(e, t, n) {
            var i = t("transform-property");
            if (i && window.getComputedStyle) {
                var o = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    },
                    r = document.createElement("div");
                r.style[i] = "translate3d(1px,1px,1px)", document.body.insertBefore(r, null);
                var a = getComputedStyle(r).getPropertyValue(o[i]);
                document.body.removeChild(r), n.exports = null != a && a.length && "none" != a
            } else n.exports = !1
        }), e.register("yields-has-transitions/index.js", function(e, t, n) {
            function i(e, t) {
                return !!e.transition || (t = window.getComputedStyle(e), !!parseFloat(t.transitionDuration, 10))
            }
            n.exports = function(e) {
                switch (arguments.length) {
                    case 0:
                        return r;
                    case 1:
                        return r ? i(e) : r
                }
            };
            var o = document.body.style,
                r = "transition" in o || "webkitTransition" in o || "MozTransition" in o || "msTransition" in o
        }), e.register("component-event/index.js", function(e, t, n) {
            var i = window.addEventListener ? "addEventListener" : "attachEvent",
                o = window.removeEventListener ? "removeEventListener" : "detachEvent",
                r = "addEventListener" !== i ? "on" : "";
            e.bind = function(e, t, n, o) {
                return e[i](r + t, n, o || !1), n
            }, e.unbind = function(e, t, n, i) {
                return e[o](r + t, n, i || !1), n
            }
        }), e.register("ecarter-css-emitter/index.js", function(e, t, n) {
            function i(e) {
                if (!(this instanceof i)) return new i(e);
                this.el = e
            }
            var o = t("event"),
                r = ["transitionend", "webkitTransitionEnd", "oTransitionEnd", "MSTransitionEnd", "animationend", "webkitAnimationEnd", "oAnimationEnd", "MSAnimationEnd"];
            n.exports = i, i.prototype.bind = function(e) {
                for (var t = 0; t < r.length; t++) o.bind(this.el, r[t], e);
                return this
            }, i.prototype.unbind = function(e) {
                for (var t = 0; t < r.length; t++) o.unbind(this.el, r[t], e);
                return this
            }, i.prototype.once = function(e) {
                function t() {
                    n.unbind(t), e.apply(n.el, arguments)
                }
                var n = this;
                return n.bind(t), this
            }
        }), e.register("component-once/index.js", function(e, t, n) {
            var i = 0,
                o = function() {
                    return this
                }();
            n.exports = function(e) {
                function t() {
                    if (this == o) {
                        if (n) return;
                        return n = !0, e.apply(this, arguments)
                    }
                    var t = "__called_" + r + "__";
                    if (!this[t]) return this[t] = !0, e.apply(this, arguments)
                }
                var n, r = i++;
                return t
            }
        }), e.register("yields-after-transition/index.js", function(e, t, n) {
            function i(e, t) {
                return s && o(e) ? (r(e).bind(t), t) : t()
            }
            var o = t("has-transitions"),
                r = t("css-emitter"),
                a = t("once"),
                s = o();
            n.exports = i, i.once = function(e, t) {
                var n = a(t);
                i(e, t = function() {
                    r(e).unbind(t), n()
                })
            }
        }), e.register("component-emitter/index.js", function(e, t, n) {
            function i(e) {
                if (e) return o(e)
            }

            function o(e) {
                for (var t in i.prototype) e[t] = i.prototype[t];
                return e
            }
            n.exports = i, i.prototype.on = i.prototype.addEventListener = function(e, t) {
                return this._callbacks = this._callbacks || {}, (this._callbacks[e] = this._callbacks[e] || []).push(t), this
            }, i.prototype.once = function(e, t) {
                function n() {
                    i.off(e, n), t.apply(this, arguments)
                }
                var i = this;
                return this._callbacks = this._callbacks || {}, n.fn = t, this.on(e, n), this
            }, i.prototype.off = i.prototype.removeListener = i.prototype.removeAllListeners = i.prototype.removeEventListener = function(e, t) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var n = this._callbacks[e];
                if (!n) return this;
                if (1 == arguments.length) return delete this._callbacks[e], this;
                for (var i, o = 0; o < n.length; o++)
                    if ((i = n[o]) === t || i.fn === t) {
                        n.splice(o, 1);
                        break
                    }
                return this
            }, i.prototype.emit = function(e) {
                this._callbacks = this._callbacks || {};
                var t = [].slice.call(arguments, 1),
                    n = this._callbacks[e];
                if (n) {
                    n = n.slice(0);
                    for (var i = 0, o = n.length; i < o; ++i) n[i].apply(this, t)
                }
                return this
            }, i.prototype.listeners = function(e) {
                return this._callbacks = this._callbacks || {}, this._callbacks[e] || []
            }, i.prototype.hasListeners = function(e) {
                return !!this.listeners(e).length
            }
        }), e.register("yields-css-ease/index.js", function(e, t, n) {
            n.exports = { in : "ease-in", out: "ease-out", "in-out": "ease-in-out", snap: "cubic-bezier(0,1,.5,1)", linear: "cubic-bezier(0.250, 0.250, 0.750, 0.750)", "ease-in-quad": "cubic-bezier(0.550, 0.085, 0.680, 0.530)", "ease-in-cubic": "cubic-bezier(0.550, 0.055, 0.675, 0.190)", "ease-in-quart": "cubic-bezier(0.895, 0.030, 0.685, 0.220)", "ease-in-quint": "cubic-bezier(0.755, 0.050, 0.855, 0.060)", "ease-in-sine": "cubic-bezier(0.470, 0.000, 0.745, 0.715)", "ease-in-expo": "cubic-bezier(0.950, 0.050, 0.795, 0.035)", "ease-in-circ": "cubic-bezier(0.600, 0.040, 0.980, 0.335)", "ease-in-back": "cubic-bezier(0.600, -0.280, 0.735, 0.045)", "ease-out-quad": "cubic-bezier(0.250, 0.460, 0.450, 0.940)", "ease-out-cubic": "cubic-bezier(0.215, 0.610, 0.355, 1.000)", "ease-out-quart": "cubic-bezier(0.165, 0.840, 0.440, 1.000)", "ease-out-quint": "cubic-bezier(0.230, 1.000, 0.320, 1.000)", "ease-out-sine": "cubic-bezier(0.390, 0.575, 0.565, 1.000)", "ease-out-expo": "cubic-bezier(0.190, 1.000, 0.220, 1.000)", "ease-out-circ": "cubic-bezier(0.075, 0.820, 0.165, 1.000)", "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1.275)", "ease-out-quad": "cubic-bezier(0.455, 0.030, 0.515, 0.955)", "ease-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1.000)", "ease-in-out-quart": "cubic-bezier(0.770, 0.000, 0.175, 1.000)", "ease-in-out-quint": "cubic-bezier(0.860, 0.000, 0.070, 1.000)", "ease-in-out-sine": "cubic-bezier(0.445, 0.050, 0.550, 0.950)", "ease-in-out-expo": "cubic-bezier(1.000, 0.000, 0.000, 1.000)", "ease-in-out-circ": "cubic-bezier(0.785, 0.135, 0.150, 0.860)", "ease-in-out-back": "cubic-bezier(0.680, -0.550, 0.265, 1.550)"
            }
        }), e.register("component-query/index.js", function(e, t, n) {
            function i(e, t) {
                return t.querySelector(e)
            }
            e = n.exports = function(e, t) {
                return t = t || document, i(e, t)
            }, e.all = function(e, t) {
                return t = t || document, t.querySelectorAll(e)
            }, e.engine = function(t) {
                if (!t.one) throw new Error(".one callback required");
                if (!t.all) throw new Error(".all callback required");
                return i = t.one, e.all = t.all, e
            }
        }), e.register("move/index.js", function(e, t, n) {
            function i(e) {
                if (!(this instanceof i)) return new i(e);
                if ("string" == typeof e && (e = l(e)), !e) throw new TypeError("Move must be initialized with element or selector");
                this.el = e, this._props = {}, this._rotate = 0, this._transitionProps = [], this._transforms = [], this.duration(i.defaults.duration)
            }
            var o = t("after-transition"),
                r = t("has-translate3d"),
                a = t("emitter"),
                s = t("css-ease"),
                l = t("query"),
                c = r ? ["translate3d(", ", 0)"] : ["translate(", ")"];
            n.exports = i;
            var u = window.getComputedStyle || window.currentStyle;
            i.version = "0.3.2", i.ease = s, i.defaults = {
                duration: 500
            }, i.select = function(e) {
                return "string" != typeof e ? e : l(e)
            }, a(i.prototype), i.prototype.transform = function(e) {
                return this._transforms.push(e), this
            }, i.prototype.skew = function(e, t) {
                return this.transform("skew(" + e + "deg, " + (t || 0) + "deg)")
            }, i.prototype.skewX = function(e) {
                return this.transform("skewX(" + e + "deg)")
            }, i.prototype.skewY = function(e) {
                return this.transform("skewY(" + e + "deg)")
            }, i.prototype.translate = i.prototype.to = function(e, t) {
                return this.transform(c.join(e + "px, " + (t || 0) + "px"))
            }, i.prototype.translateX = i.prototype.x = function(e) {
                return this.transform("translateX(" + e + "px)")
            }, i.prototype.translateY = i.prototype.y = function(e) {
                return this.transform("translateY(" + e + "px)")
            }, i.prototype.scale = function(e, t) {
                return this.transform("scale(" + e + ", " + (t || e) + ")")
            }, i.prototype.scaleX = function(e) {
                return this.transform("scaleX(" + e + ")")
            }, i.prototype.matrix = function(e, t, n, i, o, r) {
                return this.transform("matrix(" + [e, t, n, i, o, r].join(",") + ")")
            }, i.prototype.scaleY = function(e) {
                return this.transform("scaleY(" + e + ")")
            }, i.prototype.rotate = function(e) {
                return this.transform("rotate(" + e + "deg)")
            }, i.prototype.ease = function(e) {
                return e = s[e] || e || "ease", this.setVendorProperty("transition-timing-function", e)
            }, i.prototype.animate = function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && this.setVendorProperty("animation-" + n, t[n]);
                return this.setVendorProperty("animation-name", e)
            }, i.prototype.duration = function(e) {
                return e = this._duration = "string" == typeof e ? 1e3 * parseFloat(e) : e, this.setVendorProperty("transition-duration", e + "ms")
            }, i.prototype.delay = function(e) {
                return e = "string" == typeof e ? 1e3 * parseFloat(e) : e, this.setVendorProperty("transition-delay", e + "ms")
            }, i.prototype.setProperty = function(e, t) {
                return this._props[e] = t, this
            }, i.prototype.setVendorProperty = function(e, t) {
                return this.setProperty("-webkit-" + e, t), this.setProperty("-moz-" + e, t), this.setProperty("-ms-" + e, t), this.setProperty("-o-" + e, t), this
            }, i.prototype.set = function(e, t) {
                return this.transition(e), this._props[e] = t, this
            }, i.prototype.add = function(e, t) {
                if (u) {
                    var n = this;
                    return this.on("start", function() {
                        var i = parseInt(n.current(e), 10);
                        n.set(e, i + t + "px")
                    })
                }
            }, i.prototype.sub = function(e, t) {
                if (u) {
                    var n = this;
                    return this.on("start", function() {
                        var i = parseInt(n.current(e), 10);
                        n.set(e, i - t + "px")
                    })
                }
            }, i.prototype.current = function(e) {
                return u(this.el).getPropertyValue(e)
            }, i.prototype.transition = function(e) {
                return this._transitionProps.indexOf(e) ? (this._transitionProps.push(e), this) : this
            }, i.prototype.applyProperties = function() {
                for (var e in this._props) this.el.style.setProperty(e, this._props[e], "");
                return this
            }, i.prototype.move = i.prototype.select = function(e) {
                return this.el = i.select(e), this
            }, i.prototype.then = function(e) {
                if (e instanceof i) this.on("end", function() {
                    e.end()
                });
                else {
                    if ("function" != typeof e) {
                        var t = new i(this.el);
                        return t._transforms = this._transforms.slice(0), this.then(t), t.parent = this, t
                    }
                    this.on("end", e)
                }
                return this
            }, i.prototype.pop = function() {
                return this.parent
            }, i.prototype.reset = function() {
                return this.el.style.webkitTransitionDuration = this.el.style.mozTransitionDuration = this.el.style.msTransitionDuration = this.el.style.oTransitionDuration = "", this
            }, i.prototype.end = function(e) {
                var t = this;
                return this.emit("start"), this._transforms.length && this.setVendorProperty("transform", this._transforms.join(" ")), this.setVendorProperty("transition-properties", this._transitionProps.join(", ")), this.applyProperties(), e && this.then(e), o.once(this.el, function() {
                    t.reset(), t.emit("end")
                }), this
            }
        }), e.alias("component-has-translate3d/index.js", "move/deps/has-translate3d/index.js"), e.alias("component-has-translate3d/index.js", "has-translate3d/index.js"), e.alias("component-transform-property/index.js", "component-has-translate3d/deps/transform-property/index.js"), e.alias("yields-after-transition/index.js", "move/deps/after-transition/index.js"), e.alias("yields-after-transition/index.js", "move/deps/after-transition/index.js"), e.alias("yields-after-transition/index.js", "after-transition/index.js"), e.alias("yields-has-transitions/index.js", "yields-after-transition/deps/has-transitions/index.js"), e.alias("yields-has-transitions/index.js", "yields-after-transition/deps/has-transitions/index.js"), e.alias("yields-has-transitions/index.js", "yields-has-transitions/index.js"), e.alias("ecarter-css-emitter/index.js", "yields-after-transition/deps/css-emitter/index.js"), e.alias("component-event/index.js", "ecarter-css-emitter/deps/event/index.js"), e.alias("component-once/index.js", "yields-after-transition/deps/once/index.js"), e.alias("yields-after-transition/index.js", "yields-after-transition/index.js"), e.alias("component-emitter/index.js", "move/deps/emitter/index.js"), e.alias("component-emitter/index.js", "emitter/index.js"), e.alias("yields-css-ease/index.js", "move/deps/css-ease/index.js"), e.alias("yields-css-ease/index.js", "move/deps/css-ease/index.js"), e.alias("yields-css-ease/index.js", "css-ease/index.js"), e.alias("yields-css-ease/index.js", "yields-css-ease/index.js"), e.alias("component-query/index.js", "move/deps/query/index.js"), e.alias("component-query/index.js", "query/index.js"), "object" == typeof exports ? module.exports = e("move") : "function" == typeof define && define.amd ? define(function() {
            return e("move")
        }) : this.move = e("move")
    }(),
    function() {
        function e() {}

        function t(e, t) {
            for (var n = e.length; n--;)
                if (e[n].listener === t) return n;
            return -1
        }

        function n(e) {
            return function() {
                return this[e].apply(this, arguments)
            }
        }
        var i = e.prototype,
            o = this,
            r = o.EventEmitter;
        i.getListeners = function(e) {
            var t, n, i = this._getEvents();
            if ("object" == typeof e) {
                t = {};
                for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
            } else t = i[e] || (i[e] = []);
            return t
        }, i.flattenListeners = function(e) {
            var t, n = [];
            for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
            return n
        }, i.getListenersAsObject = function(e) {
            var t, n = this.getListeners(e);
            return n instanceof Array && (t = {}, t[e] = n), t || n
        }, i.addListener = function(e, n) {
            var i, o = this.getListenersAsObject(e),
                r = "object" == typeof n;
            for (i in o) o.hasOwnProperty(i) && -1 === t(o[i], n) && o[i].push(r ? n : {
                listener: n,
                once: !1
            });
            return this
        }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
            return this.addListener(e, {
                listener: t,
                once: !0
            })
        }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
            return this.getListeners(e), this
        }, i.defineEvents = function(e) {
            for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
            return this
        }, i.removeListener = function(e, n) {
            var i, o, r = this.getListenersAsObject(e);
            for (o in r) r.hasOwnProperty(o) && -1 !== (i = t(r[o], n)) && r[o].splice(i, 1);
            return this
        }, i.off = n("removeListener"), i.addListeners = function(e, t) {
            return this.manipulateListeners(!1, e, t)
        }, i.removeListeners = function(e, t) {
            return this.manipulateListeners(!0, e, t)
        }, i.manipulateListeners = function(e, t, n) {
            var i, o, r = e ? this.removeListener : this.addListener,
                a = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (i = n.length; i--;) r.call(this, t, n[i]);
            else
                for (i in t) t.hasOwnProperty(i) && (o = t[i]) && ("function" == typeof o ? r.call(this, i, o) : a.call(this, i, o));
            return this
        }, i.removeEvent = function(e) {
            var t, n = typeof e,
                i = this._getEvents();
            if ("string" === n) delete i[e];
            else if ("object" === n)
                for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
            else delete this._events;
            return this
        }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
            var n, i, o, r = this.getListenersAsObject(e);
            for (o in r)
                if (r.hasOwnProperty(o))
                    for (i = r[o].length; i--;) n = r[o][i], !0 === n.once && this.removeListener(e, n.listener), n.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, n.listener);
            return this
        }, i.trigger = n("emitEvent"), i.emit = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t)
        }, i.setOnceReturnValue = function(e) {
            return this._onceReturnValue = e, this
        }, i._getOnceReturnValue = function() {
            return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, e.noConflict = function() {
            return o.EventEmitter = r, e
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return e
        }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
    }.call(this),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var o = function() {};
        n.removeEventListener ? o = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (o = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var r = {
            bind: i,
            unbind: o
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : e.eventie = r
    }(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function(e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function o(e) {
            return "[object Array]" === f.call(e)
        }

        function r(e) {
            var t = [];
            if (o(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; n < i; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function a(e, t, n) {
            if (!(this instanceof a)) return new a(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = r(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), c && (this.jqDeferred = new c.Deferred);
            var o = this;
            setTimeout(function() {
                o.check()
            })
        }

        function s(e) {
            this.img = e
        }

        function l(e) {
            this.src = e, p[e] = this
        }
        var c = e.jQuery,
            u = e.console,
            d = void 0 !== u,
            f = Object.prototype.toString;
        a.prototype = new t, a.prototype.options = {}, a.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; e < t; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                var i = n.nodeType;
                if (i && (1 === i || 9 === i || 11 === i))
                    for (var o = n.querySelectorAll("img"), r = 0, a = o.length; r < a; r++) {
                        var s = o[r];
                        this.addImage(s)
                    }
            }
        }, a.prototype.addImage = function(e) {
            var t = new s(e);
            this.images.push(t)
        }, a.prototype.check = function() {
            function e(e, o) {
                return t.options.debug && d && u.log("confirm", e, o), t.progress(e), n++, n === i && t.complete(), !0
            }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return void this.complete();
            for (var o = 0; o < i; o++) {
                var r = this.images[o];
                r.on("confirm", e), r.check()
            }
        }, a.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, a.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, c && (c.fn.imagesLoaded = function(e, t) {
            return new a(this, e, t).jqDeferred.promise(c(this))
        }), s.prototype = new t, s.prototype.check = function() {
            var e = p[this.img.src] || new l(this.img.src);
            if (e.isConfirmed) return void this.confirm(e.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var t = this;
            e.on("confirm", function(e, n) {
                return t.confirm(e.isLoaded, n), !0
            }), e.check()
        }, s.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var p = {};
        return l.prototype = new t, l.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, l.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, l.prototype.onload = function(e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, l.prototype.onerror = function(e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, l.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, l.prototype.unbindProxyEvents = function(e) {
            n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
        }, a
    }),
    function(e, t) {
        var n = function(e, t) {
            "use strict";
            if (t.getElementsByClassName) {
                var n, i, o = t.documentElement,
                    r = e.Date,
                    a = e.HTMLPictureElement,
                    s = "addEventListener",
                    l = "getAttribute",
                    c = e[s],
                    u = e.setTimeout,
                    d = e.requestAnimationFrame || u,
                    f = e.requestIdleCallback,
                    p = /^picture$/i,
                    h = ["load", "error", "lazyincluded", "_lazyloaded"],
                    m = {},
                    v = Array.prototype.forEach,
                    g = function(e, t) {
                        return m[t] || (m[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), m[t].test(e[l]("class") || "") && m[t]
                    },
                    y = function(e, t) {
                        g(e, t) || e.setAttribute("class", (e[l]("class") || "").trim() + " " + t)
                    },
                    w = function(e, t) {
                        var n;
                        (n = g(e, t)) && e.setAttribute("class", (e[l]("class") || "").replace(n, " "))
                    },
                    b = function(e, t, n) {
                        var i = n ? s : "removeEventListener";
                        n && b(e, t), h.forEach(function(n) {
                            e[i](n, t)
                        })
                    },
                    S = function(e, i, o, r, a) {
                        var s = t.createEvent("CustomEvent");
                        return o || (o = {}), o.instance = n, s.initCustomEvent(i, !r, !a, o), e.dispatchEvent(s), s
                    },
                    T = function(t, n) {
                        var o;
                        !a && (o = e.picturefill || i.pf) ? o({
                            reevaluate: !0,
                            elements: [t]
                        }) : n && n.src && (t.src = n.src)
                    },
                    k = function(e, t) {
                        return (getComputedStyle(e, null) || {})[t]
                    },
                    x = function(e, t, n) {
                        for (n = n || e.offsetWidth; n < i.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
                        return n
                    },
                    C = function() {
                        var e, n, i = [],
                            o = [],
                            r = i,
                            a = function() {
                                var t = r;
                                for (r = i.length ? o : i, e = !0, n = !1; t.length;) t.shift()();
                                e = !1
                            },
                            s = function(i, o) {
                                e && !o ? i.apply(this, arguments) : (r.push(i), n || (n = !0, (t.hidden ? u : d)(a)))
                            };
                        return s._lsFlush = a, s
                    }(),
                    A = function(e, t) {
                        return t ? function() {
                            C(e)
                        } : function() {
                            var t = this,
                                n = arguments;
                            C(function() {
                                e.apply(t, n)
                            })
                        }
                    },
                    E = function(e) {
                        var t, n = 0,
                            o = i.ricTimeout,
                            a = function() {
                                t = !1, n = r.now(), e()
                            },
                            s = f && i.ricTimeout ? function() {
                                f(a, {
                                    timeout: o
                                }), o !== i.ricTimeout && (o = i.ricTimeout)
                            } : A(function() {
                                u(a)
                            }, !0);
                        return function(e) {
                            var i;
                            (e = !0 === e) && (o = 33), t || (t = !0, i = 125 - (r.now() - n), 0 > i && (i = 0), e || 9 > i && f ? s() : u(s, i))
                        }
                    },
                    $ = function(e) {
                        var t, n, i = function() {
                                t = null, e()
                            },
                            o = function() {
                                var e = r.now() - n;
                                99 > e ? u(o, 99 - e) : (f || i)(i)
                            };
                        return function() {
                            n = r.now(), t || (t = u(o, 99))
                        }
                    };
                ! function() {
                    var t, n = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.5,
                        hFac: .8,
                        loadMode: 2,
                        loadHidden: !0,
                        ricTimeout: 300
                    };
                    i = e.lazySizesConfig || e.lazysizesConfig || {};
                    for (t in n) t in i || (i[t] = n[t]);
                    e.lazySizesConfig = i, u(function() {
                        i.init && I()
                    })
                }();
                var q = function() {
                        var a, d, f, h, m, x, q, I, M, O, H, P, D, z, j = /^img$/i,
                            N = /^iframe$/i,
                            _ = "onscroll" in e && !/glebot/.test(navigator.userAgent),
                            F = 0,
                            B = 0,
                            V = -1,
                            R = function(e) {
                                B--, e && e.target && b(e.target, R), (!e || 0 > B || !e.target) && (B = 0)
                            },
                            W = function(e, n) {
                                var i, r = e,
                                    a = "hidden" == k(t.body, "visibility") || "hidden" != k(e, "visibility");
                                for (I -= n, H += n, M -= n, O += n; a && (r = r.offsetParent) && r != t.body && r != o;)(a = (k(r, "opacity") || 1) > 0) && "visible" != k(r, "overflow") && (i = r.getBoundingClientRect(), a = O > i.left && M < i.right && H > i.top - 1 && I < i.bottom + 1);
                                return a
                            },
                            U = function() {
                                var e, r, s, c, u, f, p, m, v, g = n.elements;
                                if ((h = i.loadMode) && 8 > B && (e = g.length)) {
                                    r = 0, V++, null == D && ("expand" in i || (i.expand = o.clientHeight > 500 && o.clientWidth > 500 ? 500 : 370), P = i.expand, D = P * i.expFactor), D > F && 1 > B && V > 2 && h > 2 && !t.hidden ? (F = D, V = 0) : F = h > 1 && V > 1 && 6 > B ? P : 0;
                                    for (; e > r; r++)
                                        if (g[r] && !g[r]._lazyRace)
                                            if (_)
                                                if ((m = g[r][l]("data-expand")) && (f = 1 * m) || (f = F), v !== f && (x = innerWidth + f * z, q = innerHeight + f, p = -1 * f, v = f), s = g[r].getBoundingClientRect(), (H = s.bottom) >= p && (I = s.top) <= q && (O = s.right) >= p * z && (M = s.left) <= x && (H || O || M || I) && (i.loadHidden || "hidden" != k(g[r], "visibility")) && (d && 3 > B && !m && (3 > h || 4 > V) || W(g[r], f))) {
                                                    if (ee(g[r]), u = !0, B > 9) break
                                                } else !u && d && !c && 4 > B && 4 > V && h > 2 && (a[0] || i.preloadAfterLoad) && (a[0] || !m && (H || O || M || I || "auto" != g[r][l](i.sizesAttr))) && (c = a[0] || g[r]);
                                    else ee(g[r]);
                                    c && !u && ee(c)
                                }
                            },
                            Y = E(U),
                            X = function(e) {
                                y(e.target, i.loadedClass), w(e.target, i.loadingClass), b(e.target, G), S(e.target, "lazyloaded")
                            },
                            Q = A(X),
                            G = function(e) {
                                Q({
                                    target: e.target
                                })
                            },
                            K = function(e, t) {
                                try {
                                    e.contentWindow.location.replace(t)
                                } catch (n) {
                                    e.src = t
                                }
                            },
                            J = function(e) {
                                var t, n = e[l](i.srcsetAttr);
                                (t = i.customMedia[e[l]("data-media") || e[l]("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n)
                            },
                            Z = A(function(e, t, n, o, r) {
                                var a, s, c, d, h, m;
                                (h = S(e, "lazybeforeunveil", t)).defaultPrevented || (o && (n ? y(e, i.autosizesClass) : e.setAttribute("sizes", o)), s = e[l](i.srcsetAttr), a = e[l](i.srcAttr), r && (c = e.parentNode, d = c && p.test(c.nodeName || "")), m = t.firesLoad || "src" in e && (s || a || d), h = {
                                    target: e
                                }, m && (b(e, R, !0), clearTimeout(f), f = u(R, 2500), y(e, i.loadingClass), b(e, G, !0)), d && v.call(c.getElementsByTagName("source"), J), s ? e.setAttribute("srcset", s) : a && !d && (N.test(e.nodeName) ? K(e, a) : e.src = a), r && (s || d) && T(e, {
                                    src: a
                                })), e._lazyRace && delete e._lazyRace, w(e, i.lazyClass), C(function() {
                                    (!m || e.complete && e.naturalWidth > 1) && (m ? R(h) : B--, X(h))
                                }, !0)
                            }),
                            ee = function(e) {
                                var t, n = j.test(e.nodeName),
                                    o = n && (e[l](i.sizesAttr) || e[l]("sizes")),
                                    r = "auto" == o;
                                (!r && d || !n || !e[l]("src") && !e.srcset || e.complete || g(e, i.errorClass) || !g(e, i.lazyClass)) && (t = S(e, "lazyunveilread").detail, r && L.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, B++, Z(e, t, r, o, n))
                            },
                            te = function() {
                                if (!d) {
                                    if (r.now() - m < 999) return void u(te, 999);
                                    var e = $(function() {
                                        i.loadMode = 3, Y()
                                    });
                                    d = !0, i.loadMode = 3, Y(), c("scroll", function() {
                                        3 == i.loadMode && (i.loadMode = 2), e()
                                    }, !0)
                                }
                            };
                        return {
                            _: function() {
                                m = r.now(), n.elements = t.getElementsByClassName(i.lazyClass), a = t.getElementsByClassName(i.lazyClass + " " + i.preloadClass), z = i.hFac, c("scroll", Y, !0), c("resize", Y, !0), e.MutationObserver ? new MutationObserver(Y).observe(o, {
                                    childList: !0,
                                    subtree: !0,
                                    attributes: !0
                                }) : (o[s]("DOMNodeInserted", Y, !0), o[s]("DOMAttrModified", Y, !0), setInterval(Y, 999)), c("hashchange", Y, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(e) {
                                    t[s](e, Y, !0)
                                }), /d$|^c/.test(t.readyState) ? te() : (c("load", te), t[s]("DOMContentLoaded", Y), u(te, 2e4)), n.elements.length ? (U(), C._lsFlush()) : Y()
                            },
                            checkElems: Y,
                            unveil: ee
                        }
                    }(),
                    L = function() {
                        var e, n = A(function(e, t, n, i) {
                                var o, r, a;
                                if (e._lazysizesWidth = i, i += "px", e.setAttribute("sizes", i), p.test(t.nodeName || ""))
                                    for (o = t.getElementsByTagName("source"), r = 0, a = o.length; a > r; r++) o[r].setAttribute("sizes", i);
                                n.detail.dataAttr || T(e, n.detail)
                            }),
                            o = function(e, t, i) {
                                var o, r = e.parentNode;
                                r && (i = x(e, r, i), o = S(e, "lazybeforesizes", {
                                    width: i,
                                    dataAttr: !!t
                                }), o.defaultPrevented || (i = o.detail.width) && i !== e._lazysizesWidth && n(e, r, o, i))
                            },
                            r = function() {
                                var t, n = e.length;
                                if (n)
                                    for (t = 0; n > t; t++) o(e[t])
                            },
                            a = $(r);
                        return {
                            _: function() {
                                e = t.getElementsByClassName(i.autosizesClass), c("resize", a)
                            },
                            checkElems: a,
                            updateElem: o
                        }
                    }(),
                    I = function() {
                        I.i || (I.i = !0, L._(), q._())
                    };
                return n = {
                    cfg: i,
                    autoSizer: L,
                    loader: q,
                    init: I,
                    uP: T,
                    aC: y,
                    rC: w,
                    hC: g,
                    fire: S,
                    gW: x,
                    rAF: C
                }
            }
        }(e, e.document);
        e.lazySizes = n, "object" == typeof module && module.exports && (module.exports = n)
    }(window),
    function() {
        var e, t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        e = function() {
            function e() {}
            return e.prototype.extend = function(e, t) {
                var n, i;
                for (n in e) null != (i = e[n]) && (t[n] = i);
                return t
            }, e.prototype.isMobile = function(e) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
            }, e
        }(), this.WOW = function() {
            function n(e) {
                null == e && (e = {}), this.scrollCallback = t(this.scrollCallback, this), this.scrollHandler = t(this.scrollHandler, this), this.start = t(this.start, this), this.config = this.util().extend(e, this.defaults)
            }
            return n.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0
            }, n.prototype.init = function(e) {
                var t;
                return this.element = e || window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? (this.scrolled = !0, this.position = window.scrolling.getScrollPosition(), this.stop(), this.start()) : document.addEventListener("DOMContentLoaded", this.start)
            }, n.prototype.start = function() {
                var e, t, n, i;
                if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length && !window.isWindowsPhone) {
                    if (this.disabled()) return this.resetStyle();
                    for (i = this.boxes, t = 0, n = i.length; t < n; t++) e = i[t], this.applyStyle(e, !0);
                    return $(document.body).on("bodyscroll", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)
                }
            }, n.prototype.stop = function() {
                if (null != this.interval) return clearInterval(this.interval)
            }, n.prototype.show = function(e) {
                return e.className = e.className + " " + this.config.animateClass
            }, n.prototype.removeClasses = function(e) {
                return e.className = "" + e.className.replace(/wow|fadeInUp|fadeInRight|zoomIn|animated/gi, "")
            }, n.prototype.applyStyle = function(e, t) {}, n.prototype.resetStyle = function() {
                var e, t, n, i;
                for (n = this.boxes, i = [], e = 0, t = n.length; e < t; e++) n[e];
                return i
            }, n.prototype.customStyle = function(e, t, n, i) {
                var o;
                return o = e ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;", t && (o += "-webkit-animation-duration: " + t + "; -moz-animation-duration: " + t + "; animation-duration: " + t + ";"), n && (o += "-webkit-animation-delay: " + n + "; -moz-animation-delay: " + n + "; animation-delay: " + n + ";"), i && (o += "-webkit-animation-iteration-count: " + i + "; -moz-animation-iteration-count: " + i + "; animation-iteration-count: " + i + ";"), o
            }, n.prototype.scrollHandler = function(e) {
                return this.position = e.position, this.scrolled = !0
            }, n.prototype.scrollCallback = function() {
                var e;
                if (this.scrolled && (this.scrolled = !1, this.boxes = function() {
                        var n, i, o, r, a;
                        for (o = this.boxes, r = [], a = [], n = 0, i = o.length; n < i; n++)(e = o[n]) && (this.isWithinViewport(e) ? a.push(e) : r.push(e));
                        return a.forEach(t(function(e, n) {
                            window.setTimeout(t(function() {
                                this.show(e), window.setTimeout(t(function() {
                                    this.removeClasses(e)
                                }, this), 1e3)
                            }, this), 100 * n)
                        }, this)), r
                    }.call(this), !this.boxes.length)) return this.stop()
            }, n.prototype.showBatch = function(e) {
                if (this.boxes = function() {
                        var n, i, o, r, a;
                        for (o = this.boxes, r = [], a = [], n = 0, i = o.length; n < i; n++) box = o[n], box && (e.indexOf(box) > -1 ? a.push(box) : r.push(box));
                        return a.forEach(t(function(e, n) {
                            window.setTimeout(t(function() {
                                this.show(e)
                            }, this), 100 * n)
                        }, this)), r
                    }.call(this), !this.boxes.length) return this.stop()
            }, n.prototype.offsetTop = function(e) {
                var t;
                for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
                return t
            }, n.prototype.isVisible = function(e) {
                var t, n, i, o, r;
                return n = e.getAttribute("data-wow-offset") || this.config.offset, r = window.pageYOffset, o = r + window.document.documentElement.clientHeight - n, i = this.offsetTop(e), t = i + e.clientHeight, i <= o && t >= r
            }, n.prototype.isWithinViewport = function(e) {
                for (var t = e.offsetTop, n = e.offsetLeft, i = e.offsetWidth, o = e.offsetHeight; e.offsetParent;) e = e.offsetParent, t += e.offsetTop, n += e.offsetLeft;
                return t < this.position + window.innerHeight && n < window.pageXOffset + window.innerWidth && t + o > window.pageYOffset && n + i > window.pageXOffset
            }, n.prototype.util = function() {
                return this._util || (this._util = new e)
            }, n.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, n
        }()
    }.call(window), wow = new WOW({
        animateClass: "animated",
        offset: 100,
        live: !1
    }),
    function(e) {
        "undefined" != typeof define && define.amd ? define([], e) : "undefined" != typeof module && module.exports ? module.exports = e() : e()
    }(function() {
        function e() {
            if (c.viewportTop = l(), c.viewportBottom = c.viewportTop + c.viewportHeight, c.documentHeight = S(), c.documentHeight !== T) {
                for (x = u.length; x--;) u[x].recalculateLocation();
                T = c.documentHeight
            }
        }

        function t() {
            c.viewportHeight = b(), e(), i()
        }

        function n() {
            clearTimeout(C), C = setTimeout(t, 100)
        }

        function i() {
            for (A = u.length; A--;) u[A].update();
            for (A = u.length; A--;) u[A].triggerCallbacks()
        }

        function o(e, t) {
            function n(e) {
                if (0 !== e.length)
                    for (b = e.length; b--;) S = e[b], S.callback.call(i, k), S.isOne && e.splice(b, 1)
            }
            var i = this;
            this.watchItem = e, this.offsets = t ? t === +t ? {
                top: t,
                bottom: t
            } : {
                top: t.top || w.top,
                bottom: t.bottom || w.bottom
            } : w, this.callbacks = {};
            for (var o = 0, r = y.length; o < r; o++) i.callbacks[y[o]] = [];
            this.locked = !1;
            var a, s, l, u, b, S;
            this.triggerCallbacks = function() {
                switch (this.isInViewport && !a && n(this.callbacks[f]), this.isFullyInViewport && !s && n(this.callbacks[p]), this.isAboveViewport !== l && this.isBelowViewport !== u && (n(this.callbacks[d]), s || this.isFullyInViewport || (n(this.callbacks[p]), n(this.callbacks[m])), a || this.isInViewport || (n(this.callbacks[f]), n(this.callbacks[h]))), !this.isFullyInViewport && s && n(this.callbacks[m]), !this.isInViewport && a && n(this.callbacks[h]), this.isInViewport !== a && n(this.callbacks[d]), !0) {
                    case a !== this.isInViewport:
                    case s !== this.isFullyInViewport:
                    case l !== this.isAboveViewport:
                    case u !== this.isBelowViewport:
                        n(this.callbacks[g])
                }
                a = this.isInViewport, s = this.isFullyInViewport, l = this.isAboveViewport, u = this.isBelowViewport
            }, this.recalculateLocation = function() {
                if (!this.locked) {
                    var e = this.top,
                        t = this.bottom;
                    if (this.watchItem.nodeName) {
                        var i = this.watchItem.style.display;
                        "none" === i && (this.watchItem.style.display = "");
                        var o = this.watchItem.getBoundingClientRect();
                        this.top = o.top + c.viewportTop, this.bottom = o.bottom + c.viewportTop, "none" === i && (this.watchItem.style.display = i)
                    } else this.watchItem === +this.watchItem ? this.watchItem > 0 ? this.top = this.bottom = this.watchItem : this.top = this.bottom = c.documentHeight - this.watchItem : (this.top = this.watchItem.top, this.bottom = this.watchItem.bottom);
                    this.top -= this.offsets.top, this.bottom += this.offsets.bottom, this.height = this.bottom - this.top, void 0 === e && void 0 === t || this.top === e && this.bottom === t || n(this.callbacks[v])
                }
            }, this.recalculateLocation(), this.update(), a = this.isInViewport, s = this.isFullyInViewport, l = this.isAboveViewport, u = this.isBelowViewport
        }

        function r(t) {
            k = t, e(), i()
        }
        var a = "undefined" == typeof window,
            s = !a,
            l = function() {
                return a ? 0 : window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop
            },
            c = {},
            u = [],
            d = "visibilityChange",
            f = "enterViewport",
            p = "fullyEnterViewport",
            h = "exitViewport",
            m = "partiallyExitViewport",
            v = "locationChange",
            g = "stateChange",
            y = [d, f, p, h, m, v, g],
            w = {
                top: 0,
                bottom: 0
            },
            b = function() {
                return a ? 0 : window.innerHeight || document.documentElement.clientHeight
            },
            S = function() {
                return a ? 0 : Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight)
            };
        c.viewportTop = null, c.viewportBottom = null, c.documentHeight = null, c.viewportHeight = b();
        var T, k, x, C, A;
        o.prototype = {
            on: function(e, t, n) {
                switch (!0) {
                    case e === d && !this.isInViewport && this.isAboveViewport:
                    case e === f && this.isInViewport:
                    case e === p && this.isFullyInViewport:
                    case e === h && this.isAboveViewport && !this.isInViewport:
                    case e === m && this.isAboveViewport:
                        if (t.call(this, k), n) return
                }
                if (!this.callbacks[e]) throw new Error("Tried to add a scroll monitor listener of type " + e + ". Your options are: " + y.join(", "));
                this.callbacks[e].push({
                    callback: t,
                    isOne: n || !1
                })
            },
            off: function(e, t) {
                if (!this.callbacks[e]) throw new Error("Tried to remove a scroll monitor listener of type " + e + ". Your options are: " + y.join(", "));
                for (var n, i = 0; n = this.callbacks[e][i]; i++)
                    if (n.callback === t) {
                        this.callbacks[e].splice(i, 1);
                        break
                    }
            },
            one: function(e, t) {
                this.on(e, t, !0)
            },
            recalculateSize: function() {
                this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom, this.bottom = this.top + this.height
            },
            update: function() {
                this.isAboveViewport = this.top < c.viewportTop, this.isBelowViewport = this.bottom > c.viewportBottom, this.isInViewport = this.top <= c.viewportBottom && this.bottom >= c.viewportTop, this.isFullyInViewport = this.top >= c.viewportTop && this.bottom <= c.viewportBottom || this.isAboveViewport && this.isBelowViewport
            },
            destroy: function() {
                var e = u.indexOf(this),
                    t = this;
                u.splice(e, 1);
                for (var n = 0, i = y.length; n < i; n++) t.callbacks[y[n]].length = 0
            },
            lock: function() {
                this.locked = !0
            },
            unlock: function() {
                this.locked = !1
            }
        };
        for (var E = 0, $ = y.length; E < $; E++) {
            var q = y[E];
            o.prototype[q] = function(e) {
                return function(t, n) {
                    this.on.call(this, e, t, n)
                }
            }(q)
        }
        if (s) try {
            e()
        } catch (t) {
            try {
                window.$(e)
            } catch (e) {
                throw new Error("If you must put scrollMonitor in the <head>, you must use jQuery.")
            }
        }
        return s && (window.addEventListener ? (window.addEventListener("scroll", r), window.addEventListener("resize", n)) : (window.attachEvent("onscroll", r), window.attachEvent("onresize", n))), c.beget = c.create = function(e, t) {
            "string" == typeof e ? e = document.querySelector(e) : e && e.length > 0 && (e = e[0]);
            var n = new o(e, t);
            return u.push(n), n.update(), n
        }, c.update = function() {
            k = null, e(), i()
        }, c.recalculateLocations = function() {
            c.documentHeight = 0, c.update()
        }, c.eventTypes = y, s && (window.scrollMonitor = c), c
    }),
    function(e) {
        "use strict";

        function t(e, t, n) {
            "addEventListener" in window ? e.addEventListener(t, n, !1) : "attachEvent" in window && e.attachEvent("on" + t, n)
        }

        function n(e, t, n) {
            "removeEventListener" in window ? e.removeEventListener(t, n, !1) : "detachEvent" in window && e.detachEvent("on" + t, n)
        }

        function i() {
            var e, t = ["moz", "webkit", "o", "ms"];
            for (e = 0; e < t.length && !z; e += 1) z = window[t[e] + "RequestAnimationFrame"];
            z || s("setup", "RequestAnimationFrame not supported")
        }

        function o(e) {
            var t = "Host page: " + e;
            return window.top !== window.self && (t = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + e : "Nested host page: " + e), t
        }

        function r(e) {
            return H + "[" + o(e) + "]"
        }

        function a(e) {
            return N[e] ? N[e].log : I
        }

        function s(e, t) {
            u("log", e, t, a(e))
        }

        function l(e, t) {
            u("info", e, t, a(e))
        }

        function c(e, t) {
            u("warn", e, t, !0)
        }

        function u(e, t, n, i) {
            !0 === i && "object" == typeof window.console && console[e](r(t), n)
        }

        function d(e) {
            function i() {
                function e() {
                    y(M), m(z), q("resizedCallback", M)
                }
                o("Height"), o("Width"), w(e, M, "init")
            }

            function o(e) {
                var t = Number(N[z]["max" + e]),
                    n = Number(N[z]["min" + e]),
                    i = e.toLowerCase(),
                    o = Number(M[i]);
                s(z, "Checking " + i + " is in range " + n + "-" + t), o < n && (o = n, s(z, "Set " + i + " to min value")), o > t && (o = t, s(z, "Set " + i + " to max value")), M[i] = "" + o
            }

            function r(e) {
                return I.substr(I.indexOf(":") + O + e)
            }

            function a(e) {
                s(z, "MessageCallback passed: {iframe: " + M.iframe.id + ", message: " + e + "}"), q("messageCallback", {
                    iframe: M.iframe,
                    message: JSON.parse(e)
                }), s(z, "--")
            }

            function u() {
                var e = document.body.getBoundingClientRect(),
                    t = M.iframe.getBoundingClientRect();
                return JSON.stringify({
                    iframeHeight: t.height,
                    iframeWidth: t.width,
                    clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                    clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                    offsetTop: parseInt(t.top - e.top, 10),
                    offsetLeft: parseInt(t.left - e.left, 10),
                    scrollTop: window.pageYOffset,
                    scrollLeft: window.pageXOffset
                })
            }

            function d(e, t) {
                function n() {
                    b("Send Page Info", "pageInfo:" + u(), e, t)
                }
                k(n, 32)
            }

            function T() {
                function e(e, t) {
                    function n() {
                        N[o] ? d(N[o].iframe, o) : i()
                    }["scroll", "resize"].forEach(function(i) {
                        s(o, e + i + " listener for sendPageInfo"), t(window, i, n)
                    })
                }

                function i() {
                    e("Remove ", n)
                }
                var o = z;
                ! function() {
                    e("Add ", t)
                }(), N[o].stopPageInfo = i
            }

            function x() {
                N[z] && N[z].stopPageInfo && (N[z].stopPageInfo(), delete N[z].stopPageInfo)
            }

            function C(e) {
                var t = e.getBoundingClientRect();
                return h(z), {
                    x: Math.floor(Number(t.left) + Number(D.x)),
                    y: Math.floor(Number(t.top) + Number(D.y))
                }
            }

            function A(e) {
                var t = e ? C(M.iframe) : {
                        x: 0,
                        y: 0
                    },
                    n = function() {
                        return {
                            x: Number(M.width) + t.x,
                            y: Number(M.height) + t.y
                        }
                    }();
                s(z, "Reposition requested from iFrame (offset x:" + t.x + " y:" + t.y + ")"), window.top !== window.self ? function() {
                    window.parentIFrame ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](n.x, n.y) : c(z, "Unable to scroll to requested position, window.parentIFrame not found")
                }() : function() {
                    D = n, E(), s(z, "--")
                }()
            }

            function E() {
                !1 !== q("scrollCallback", D) ? m(z) : v()
            }

            function $(e) {
                var t = e.split("#")[1] || "",
                    n = decodeURIComponent(t),
                    i = document.getElementById(n) || document.getElementsByName(n)[0];
                i ? function() {
                    var e = C(i);
                    s(z, "Moving to in page link (#" + t + ") at x: " + e.x + " y: " + e.y), D = {
                        x: e.x,
                        y: e.y
                    }, E(), s(z, "--")
                }() : window.top !== window.self ? function() {
                    window.parentIFrame ? window.parentIFrame.moveToAnchor(t) : s(z, "In page link #" + t + " not found and window.parentIFrame not found")
                }() : s(z, "In page link #" + t + " not found")
            }

            function q(e, t) {
                return f(z, e, t)
            }

            function L() {
                N[z].firstRun = !1
            }
            var I = e.data,
                M = {},
                z = null;
            "[iFrameResizerChild]Ready" === I ? function() {
                for (var e in N) b("iFrame requested init", S(e), document.getElementById(e), e)
            }() : function() {
                return H === ("" + I).substr(0, P) && I.substr(P).split(":")[0] in N
            }() ? (M = function() {
                var e = I.substr(P).split(":");
                return {
                    iframe: N[e[0]].iframe,
                    id: e[0],
                    height: e[1],
                    width: e[2],
                    type: e[3]
                }
            }(), z = F = M.id, N[z].loaded = !0, ! function() {
                var e = M.type in {
                    true: 1,
                    false: 1,
                    undefined: 1
                };
                return e && s(z, "Ignoring init message from meta parent page"), e
            }() && function(e) {
                var t = !0;
                return N[e] || (t = !1, c(M.type + " No settings for " + e + ". Message was: " + I)), t
            }(z) && (s(z, "Received: " + I), function() {
                var e = !0;
                return null === M.iframe && (c(z, "IFrame (" + M.id + ") not found"), e = !1), e
            }() && function() {
                var t = e.origin,
                    n = N[z].checkOrigin;
                if (n && "" + t != "null" && ! function() {
                        return n.constructor === Array ? function() {
                            var e = 0,
                                i = !1;
                            for (s(z, "Checking connection is from allowed list of origins: " + n); e < n.length; e++)
                                if (n[e] === t) {
                                    i = !0;
                                    break
                                }
                            return i
                        }() : function() {
                            var e = N[z].remoteHost;
                            return s(z, "Checking connection is from: " + e), t === e
                        }()
                    }()) throw new Error("Unexpected message received from: " + t + " for " + M.iframe.id + ". Message was: " + e.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
                return !0
            }() && function() {
                switch (N[z].firstRun && L(), M.type) {
                    case "close":
                        p(M.iframe);
                        break;
                    case "message":
                        a(r(6));
                        break;
                    case "scrollTo":
                        A(!1);
                        break;
                    case "scrollToOffset":
                        A(!0);
                        break;
                    case "pageInfo":
                        d(N[z].iframe, z), T();
                        break;
                    case "pageInfoStop":
                        x();
                        break;
                    case "inPageLink":
                        $(r(9));
                        break;
                    case "reset":
                        g(M);
                        break;
                    case "init":
                        i(), q("initCallback", M.iframe);
                        break;
                    default:
                        i()
                }
            }())) : l(z, "Ignored: " + I)
        }

        function f(e, t, n) {
            var i = null,
                o = null;
            if (N[e]) {
                if ("function" != typeof(i = N[e][t])) throw new TypeError(t + " on iFrame[" + e + "] is not a function");
                o = i(n)
            }
            return o
        }

        function p(e) {
            var t = e.id;
            s(t, "Removing iFrame: " + t), e.parentNode && e.parentNode.removeChild(e), f(t, "closedCallback", t), s(t, "--"), delete N[t]
        }

        function h(t) {
            null === D && (D = {
                x: window.pageXOffset !== e ? window.pageXOffset : document.documentElement.scrollLeft,
                y: window.pageYOffset !== e ? window.pageYOffset : document.documentElement.scrollTop
            }, s(t, "Get page position: " + D.x + "," + D.y))
        }

        function m(e) {
            null !== D && (window.scrollTo(D.x, D.y), s(e, "Set page position: " + D.x + "," + D.y), v())
        }

        function v() {
            D = null
        }

        function g(e) {
            function t() {
                y(e), b("reset", "reset", e.iframe, e.id)
            }
            s(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")), h(e.id), w(t, e, "reset")
        }

        function y(e) {
            function t(t) {
                e.iframe.style[t] = e[t] + "px", s(e.id, "IFrame (" + o + ") " + t + " set to " + e[t] + "px")
            }

            function n(t) {
                M || "0" !== e[t] || (M = !0, s(o, "Hidden iFrame detected, creating visibility listener"), x())
            }

            function i(e) {
                t(e), n(e)
            }
            var o = e.iframe.id;
            N[o] && (N[o].sizeHeight && i("height"), N[o].sizeWidth && i("width"))
        }

        function w(e, t, n) {
            n !== t.type && z ? (s(t.id, "Requesting animation frame"), z(e)) : e()
        }

        function b(e, t, n, i, o) {
            function r() {
                var o = N[i].targetOrigin;
                s(i, "[" + e + "] Sending msg to iframe[" + i + "] (" + t + ") targetOrigin: " + o), n.contentWindow.postMessage(H + t, o)
            }

            function a() {
                c(i, "[" + e + "] IFrame(" + i + ") not found")
            }
            var l = !1;
            i = i || n.id, N[i] && (function() {
                n && "contentWindow" in n && null !== n.contentWindow ? r() : a()
            }(), function() {
                function e() {
                    !N[i] || N[i].loaded || l || (l = !0, c(i, "IFrame has not responded within " + N[i].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ingored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))
                }
                o && N[i].warningTimeout && (N[i].msgTimeout = setTimeout(e, N[i].warningTimeout))
            }())
        }

        function S(e) {
            return e + ":" + N[e].bodyMarginV1 + ":" + N[e].sizeWidth + ":" + N[e].log + ":" + N[e].interval + ":" + N[e].enablePublicMethods + ":" + N[e].autoResize + ":" + N[e].bodyMargin + ":" + N[e].heightCalculationMethod + ":" + N[e].bodyBackground + ":" + N[e].bodyPadding + ":" + N[e].tolerance + ":" + N[e].inPageLinks + ":" + N[e].resizeFrom + ":" + N[e].widthCalculationMethod
        }

        function T(n, i) {
            function o() {
                var e = i && i.id || B.id + L++;
                return null !== document.getElementById(e) && (e += L++), e
            }

            function r() {
                var e = N[d].firstRun,
                    t = N[d].heightCalculationMethod in j;
                !e && t && g({
                    iframe: n,
                    height: 0,
                    width: 0,
                    type: "init"
                })
            }

            function a(e) {
                if ("object" != typeof e) throw new TypeError("Options is not an object")
            }

            function l(e) {
                for (var t in B) B.hasOwnProperty(t) && (N[d][t] = e.hasOwnProperty(t) ? e[t] : B[t])
            }

            function u(e) {
                return "" === e || "file://" === e ? "*" : e
            }
            var d = function(e) {
                return F = e, "" === e && (n.id = e = o(), I = (i || {}).log, F = e, s(e, "Added missing iframe ID: " + e + " (" + n.src + ")")), e
            }(n.id);
            ! function() {
                return d in N && "iFrameResizer" in n
            }() ? (function(e) {
                e = e || {}, N[d] = {
                    firstRun: !0,
                    iframe: n,
                    remoteHost: n.src.split("/").slice(0, 3).join("/")
                }, a(e), l(e), N[d].targetOrigin = !0 === N[d].checkOrigin ? u(N[d].remoteHost) : "*"
            }(i), function() {
                switch (s(d, "IFrame scrolling " + (N[d].scrolling ? "enabled" : "disabled") + " for " + d), n.style.overflow = !1 === N[d].scrolling ? "hidden" : "auto", N[d].scrolling) {
                    case !0:
                        n.scrolling = "yes";
                        break;
                    case !1:
                        n.scrolling = "no";
                        break;
                    default:
                        n.scrolling = N[d].scrolling
                }
            }(), function() {
                function e(e) {
                    1 / 0 !== N[d][e] && 0 !== N[d][e] && (n.style[e] = N[d][e] + "px", s(d, "Set " + e + " = " + N[d][e] + "px"))
                }

                function t(e) {
                    if (N[d]["min" + e] > N[d]["max" + e]) throw new Error("Value for min" + e + " can not be greater than max" + e)
                }
                t("Height"), t("Width"), e("maxHeight"), e("minHeight"), e("maxWidth"), e("minWidth")
            }(), function() {
                "number" != typeof N[d].bodyMargin && "0" !== N[d].bodyMargin || (N[d].bodyMarginV1 = N[d].bodyMargin, N[d].bodyMargin = N[d].bodyMargin + "px")
            }(), function(i) {
                function o() {
                    b("iFrame.onload", i, n, e, !0), r()
                }
                t(n, "load", o), b("init", i, n, e, !0)
            }(S(d)), function() {
                Function.prototype.bind && (N[d].iframe.iFrameResizer = {
                    close: p.bind(null, N[d].iframe),
                    resize: b.bind(null, "Window resize", "resize", N[d].iframe),
                    moveToAnchor: function(e) {
                        b("Move to anchor", "moveToAnchor:" + e, N[d].iframe, d)
                    },
                    sendMessage: function(e) {
                        e = JSON.stringify(e), b("Send Message", "message:" + e, N[d].iframe, d)
                    }
                })
            }()) : c(d, "Ignored iFrame, already setup.")
        }

        function k(e, t) {
            null === _ && (_ = setTimeout(function() {
                _ = null, e()
            }, t))
        }

        function x() {
            function e() {
                for (var e in N) ! function(e) {
                    function t(t) {
                        return "0px" === N[e].iframe.style[t]
                    }(function(e) {
                        return null !== e.offsetParent
                    })(N[e].iframe) && (t("height") || t("width")) && b("Visibility change", "resize", N[e].iframe, e)
                }(e)
            }

            function t(t) {
                s("window", "Mutation observed: " + t[0].target + " " + t[0].type), k(e, 16)
            }
            var n = window.MutationObserver || window.WebKitMutationObserver;
            n && function() {
                var e = document.querySelector("body"),
                    i = {
                        attributes: !0,
                        attributeOldValue: !1,
                        characterData: !0,
                        characterDataOldValue: !1,
                        childList: !0,
                        subtree: !0
                    };
                new n(t).observe(e, i)
            }()
        }

        function C(e) {
            function t() {
                E("Window " + e, "resize")
            }
            s("window", "Trigger event: " + e), k(t, 16)
        }

        function A() {
            function e() {
                E("Tab Visable", "resize")
            }
            "hidden" !== document.visibilityState && (s("document", "Trigger event: Visiblity change"), k(e, 16))
        }

        function E(e, t) {
            for (var n in N)(function(e) {
                return "parent" === N[e].resizeFrom && N[e].autoResize && !N[e].firstRun
            })(n) && b(e, t, document.getElementById(n), n)
        }

        function $() {
            t(window, "message", d), t(window, "resize", function() {
                C("resize")
            }), t(document, "visibilitychange", A), t(document, "-webkit-visibilitychange", A), t(window, "focusin", function() {
                C("focus")
            }), t(window, "focus", function() {
                C("focus")
            })
        }

        function q() {
            function t(e, t) {
                t && (! function() {
                    if (!t.tagName) throw new TypeError("Object is not a valid DOM element");
                    if ("IFRAME" !== t.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + t.tagName + ">")
                }(), T(t, e), o.push(t))
            }

            function n(e) {
                e && e.enablePublicMethods && c("enablePublicMethods option has been removed, public methods are now always available in the iFrame")
            }
            var o;
            return i(), $(),
                function(i, r) {
                    switch (o = [], n(i), typeof r) {
                        case "undefined":
                        case "string":
                            Array.prototype.forEach.call(document.querySelectorAll(r || "iframe"), t.bind(e, i));
                            break;
                        case "object":
                            t(i, r);
                            break;
                        default:
                            throw new TypeError("Unexpected data type (" + typeof r + ")")
                    }
                    return o
                }
        }
        if ("undefined" != typeof window) {
            var L = 0,
                I = !1,
                M = !1,
                O = "message".length,
                H = "[iFrameSizer]",
                P = H.length,
                D = null,
                z = window.requestAnimationFrame,
                j = {
                    max: 1,
                    scroll: 1,
                    bodyScroll: 1,
                    documentElementScroll: 1
                },
                N = {},
                _ = null,
                F = "Host Page",
                B = {
                    autoResize: !0,
                    bodyBackground: null,
                    bodyMargin: null,
                    bodyMarginV1: 8,
                    bodyPadding: null,
                    checkOrigin: !0,
                    inPageLinks: !1,
                    enablePublicMethods: !0,
                    heightCalculationMethod: "bodyOffset",
                    id: "iFrameResizer",
                    interval: 32,
                    log: !1,
                    maxHeight: 1 / 0,
                    maxWidth: 1 / 0,
                    minHeight: 0,
                    minWidth: 0,
                    resizeFrom: "parent",
                    scrolling: !1,
                    sizeHeight: !0,
                    sizeWidth: !1,
                    warningTimeout: 5e3,
                    tolerance: 0,
                    widthCalculationMethod: "scroll",
                    closedCallback: function() {},
                    initCallback: function() {},
                    messageCallback: function() {
                        c("MessageCallback function not defined")
                    },
                    resizedCallback: function() {},
                    scrollCallback: function() {
                        return !0
                    }
                };
            window.jQuery && function(e) {
                e.fn ? e.fn.iFrameResize || (e.fn.iFrameResize = function(e) {
                    function t(t, n) {
                        T(n, e)
                    }
                    return this.filter("iframe").each(t).end()
                }) : l("", "Unable to bind to jQuery, it is not fully loaded.")
            }(window.jQuery), "function" == typeof define && define.amd ? define([], q) : "object" == typeof module && "object" == typeof module.exports ? module.exports = q() : window.iFrameResize = window.iFrameResize || q()
        }
    }();
var context = window;
(function() {
    var e = null,
        t = null,
        n = null;
    this.onFontsLoad = function(i, o, r) {
        function a() {
            var n, i;
            for (n = l.childNodes.length - 1; n >= 0; n--) i = l.childNodes[n], i.offsetWidth === e && i.offsetHeight === t || i.parentNode.removeChild(i)
        }

        function s() {
            var e;
            if (window.clearInterval(d), l.parentNode.removeChild(l), 0 !== l.childNodes.length) {
                for (u = l.childNodes.length - 1; u >= 0; u--) e = l.childNodes[u], p.push(e._ff);
                f = {
                    message: "Not all fonts are loaded",
                    notLoadedFontFamilies: p
                }
            } else f = null;
            o(f)
        }
        var l, c, u, d, f, p = [],
            h = 0,
            m = 50,
            v = 10;
        for (void 0 !== r && (r.maxNumOfTries && (m = r.maxNumOfTries), r.tryIntervalMs && (v = r.tryIntervalMs)), l = document.createElement("div"), l.style.cssText = "position:absolute; left:-10000px; top:-10000px; font-family: serif; font-size:40px;", document.body.appendChild(l), null === n && (n = document.createElement("div"), n.style.position = "absolute", n.style.whiteSpace = "nowrap", n.appendChild(document.createTextNode(" !\"\\#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~Â¡Â¢Â£Â¤Â¥Â¦Â§Â¨Â©ÂªÂ«Â¬Â­Â®Â¯Â°Â±Â²Â³Â´ÂµÂ¶Â·Â¸Â¹ÂºÂ»Â¼Â½Â¾Â¿Ã€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã—Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã·Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿Å’Å“Å Å¡Å¸Æ’Ë†ËœÎ‘Î’Î“Î”Î•Î–Î—Î˜Î™ÎšÎ›ÎœÎÎžÎŸÎ Î¡Î£Î¤Î¥Î¦Î§Î¨Î©Î±Î²Î³Î´ÎµÎ¶Î·Î¸Î¹ÎºÎ»Î¼Î½Î¾Î¿Ï€ÏÏ‚ÏƒÏ„Ï…Ï†Ï‡ÏˆÏ‰Ï‘Ï’Ï–â€“â€”â€˜â€™â€šâ€œâ€â€žâ€ â€¡â€¢â€¦â€°â€²â€³â€¹â€ºâ€¾â„â‚¬â„‘â„˜â„œâ„¢â„µâ†â†‘â†’â†“â†”â†µâ‡â‡‘â‡’â‡“â‡”âˆ€âˆ‚âˆƒâˆ…âˆ‡âˆˆâˆ‰âˆ‹âˆâˆ‘âˆ’âˆ—âˆšâˆâˆžâˆ âˆ§âˆ¨âˆ©âˆªâˆ«âˆ´âˆ¼â‰…â‰ˆâ‰ â‰¡â‰¤â‰¥âŠ‚âŠƒâŠ„âŠ†âŠ‡âŠ•âŠ—âŠ¥â‹…âŒˆâŒ‰âŒŠâŒ‹ã€ˆã€‰â—Šâ™ â™£â™¥â™¦")), l.appendChild(n), e = n.offsetWidth, t = n.offsetHeight, n.parentNode.removeChild(n)), u = 0; u < i.length; u++) c = n.cloneNode(!0), l.appendChild(c), c.style.fontFamily = "'" + i[u] + "', serif", c._ff = i[u];
        a(), l.childNodes.length ? d = window.setInterval(function() {
            a(), 0 === l.childNodes.length || h === m ? s() : h++
        }, v) : (l.parentNode.removeChild(l), o(null))
    }
}).apply(context),
    function() {
        "use strict";
        var e = function() {
            document.body.classList.remove("loading"), document.body.classList.length < 1 && document.body.removeAttribute("class")
        };
        window.onFontsLoad(["Noto Sans", "Title", "Subtitle"], e), $(window).on("load", e)
    }(),
    function() {
        "use strict";
        var e, t, n, i, o, r;
        e = {}, t = {
            viewportLive: '.viewport[variant="live"]',
            viewportSize: '.viewport[variant="size"]',
            viewportStage: '.viewport[variant="stage"]',
            navsStage: ".nav.container",
            navUnitMobile: '.nav.unit[variant="mobile"]',
            overlayContainer: ".overlay.container",
            overlayUnit: ".overlay.unit",
            overlayUnitXhr: '.overlay.unit[name="xhr"]',
            overlayAtag: '.back[toggle="overlay"]',
            animationBox: "#animation-box",
            animationBackground: "#animation-background",
            animationContainer: "#animation-container",
            legalContainer: "> .legal.container",
            legalContainerFixed: '.legal.container[variant*="fixed"]',
            pageType: '.viewport[variant="live"][data-pagetype]',
            country: 'meta[name="geo.country"]'
        }, n = {}, i = {}, o = [], n.animations = {
            fade: function(t) {
                return new Promise(function(i, o) {
                    var r, a, s;
                    t.quickSwitch = !0, s = function() {
                        var t, n, i;
                        return i = e.viewportLive.querySelector('.background[style*="opacity: 1"] img[src]'), i || (i = e.viewportLive.querySelector('.background[state="active"] img[src]')), i || (i = e.viewportLive.querySelector(".background img[src]")), i && i.src ? (t = "background-image", n = 'url("' + i.src + '")') : (t = "background-color", n = $(e.body).css("background-color")), {
                            property: t,
                            value: n
                        }
                    }(), r = function() {
                        var t = e.viewportSize.getBoundingClientRect();
                        return {
                            width: t.width,
                            height: t.height,
                            left: 0,
                            top: 0
                        }
                    }(), a = {
                        width: r.width,
                        height: r.height,
                        display: "block",
                        opacity: 0
                    }, a[s.property] = s.value, $(e.animationBox).attr("style", "").css(a), $(e.animationBox).css("width");
                    var l = {
                        1: function() {
                            window.move(e.animationBox).duration(500).ease("in").set("opacity", 1).to(0, 0).scale(1).end(function() {
                                $(e.animationBox).css("width"), window.setTimeout(function() {
                                    i(l[2])
                                }, 1)
                            })
                        },
                        2: function(t) {
                            return new Promise(function(i, o) {
                                window.move(e.animationBox).duration(500).ease("linear").scale(1).set("opacity", 0).end(function() {
                                    $(e.animationBox).css("width"), window.setTimeout(function() {
                                        i("page" === t.to.type ? n.animations.removeAnimationLayer(t) : t)
                                    }, 1)
                                })
                            })
                        }
                    };
                    l[1]()
                })
            },
            slide: function(t) {
                return new Promise(function(i, o) {
                    var r, a, s;
                    t.quickSwitch = !0, s = function() {
                        var t, n, i;
                        return i = e.viewportLive.querySelector('.background[state="active"] [src]'), i || (i = e.viewportLive.querySelector('.background[state="active"] img[src]')), i || (i = e.viewportLive.querySelector(".background img[src]")), i && i.src ? (t = "background-image", n = 'url("' + i.src + '")') : (t = "background-color", n = $(e.body).css("background-color")), {
                            property: t,
                            value: n
                        }
                    }(), r = function() {
                        var t = e.viewportSize.getBoundingClientRect();
                        return {
                            width: t.width,
                            height: t.height,
                            left: 0,
                            top: 0
                        }
                    }(), a = {
                        width: r.width,
                        height: r.height,
                        display: "block",
                        opacity: 0
                    }, a[s.property] = s.value, $(e.animationBox).attr("style", "").css(a), $(e.animationBox).css("width"), $(e.animationBox.parentElement).attr("style", "").css("z-index", "6");
                    var l = {
                        1: function() {
                            window.move(e.animationBox).duration(500).ease("in").set("opacity", 1).to(0, 0).scale(1).end(function() {
                                $(e.animationBox).css("width"), window.setTimeout(function() {
                                    i(l.end)
                                }, 1)
                            })
                        },
                        end: function(e) {
                            return "page" === e.to.type ? n.animations.removeAnimationLayer(e) : Promise.resolve(e)
                        }
                    };
                    l[1]()
                })
            },
            zoomin: function(t) {
                return new Promise(function(i, o) {
                    t.quickSwitch = !0;
                    var r, a, s, l, c;
                    s = t.target || e.viewportLive.querySelector(".media.unit"), l = function() {
                        var e, t, n;
                        return n = s.querySelector("img[src]"), n && n.src ? (e = "background-image", t = 'url("' + n.src + '")') : (e = "background-color", t = $(s).css("background-color")), {
                            property: e,
                            value: t
                        }
                    }(), r = function() {
                        var e = s.getBoundingClientRect(),
                            t = function() {
                                var e = $(s).css(["border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "padding-top", "padding-right", "padding-bottom", "padding-left"]);
                                return {
                                    top: parseInt(e["border-top-width"], 10) + parseInt(e["padding-top"], 10),
                                    right: parseInt(e["border-right-width"], 10) + parseInt(e["padding-right"], 10),
                                    bottom: parseInt(e["border-bottom-width"], 10) + parseInt(e["padding-bottom"], 10),
                                    left: parseInt(e["border-left-width"], 10) + parseInt(e["padding-left"], 10)
                                }
                            }();
                        return {
                            width: e.width - (t.left + t.right),
                            height: e.height - (t.top + t.bottom),
                            left: e.left + t.left,
                            top: e.top + t.top
                        }
                    }(), a = function() {
                        var t = e.viewportSize.getBoundingClientRect(),
                            n = t.height / r.height,
                            i = (t.width + 42) / r.width;
                        return {
                            left: t.width / 2 - r.width / 2,
                            top: t.height / 2 - r.height / 2,
                            scale: i > n ? i : n
                        }
                    }(), c = {
                        width: r.width,
                        height: r.height,
                        display: "block",
                        opacity: 0
                    }, c[l.property] = l.value, $(e.animationBox).attr("style", "").css(c), $(e.animationBox).css("width");
                    var u = {
                        1: function() {
                            window.move(e.animationBox).duration(1).set("opacity", 0).to(r.left, r.top).scale(1).end(function() {
                                $(e.animationBox).css("width"), window.setTimeout(u[2], 1)
                            })
                        },
                        2: function() {
                            window.move(e.animationBox).duration(150).set("opacity", 1).to(r.left, r.top).scale(1).end(function() {
                                $(e.animationBox).css("width"), window.setTimeout(u[3], 1)
                            })
                        },
                        3: function() {
                            window.move(e.animationBox).duration(800).ease("snap").to(a.left, a.top).scale(a.scale).end(function() {
                                $(e.animationBox).css("width"), window.setTimeout(function() {
                                    i(u.end)
                                }, 1)
                            })
                        },
                        end: function(e) {
                            return "page" === e.to.type ? n.animations.removeAnimationLayer(e) : Promise.resolve(e)
                        }
                    };
                    u[1]()
                })
            },
            blurin: function(t) {
                return new Promise(function(o, r) {
                    t.quickSwitch = !0;
                    var a, s, l, c, u, d = t.scale ? t.scale : 1;
                    l = t.target || e.viewportLive.querySelector(".media.unit"), c = function() {
                        var e, t, n;
                        return n = l.querySelector("img[src]") || l, n && n.src ? (e = "16,20,23", t = n.src) : (e = $(l).css("background-color"), t = null), {
                            color: "rgb(" + e + ")",
                            image: 'url("' + t + '")',
                            rgb: e
                        }
                    }(), a = function() {
                        var e = l.getBoundingClientRect(),
                            t = function() {
                                var e = $(l).css(["border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "padding-top", "padding-right", "padding-bottom", "padding-left"]);
                                return {
                                    top: parseInt(e["border-top-width"], 10) + parseInt(e["padding-top"], 10),
                                    right: parseInt(e["border-right-width"], 10) + parseInt(e["padding-right"], 10),
                                    bottom: parseInt(e["border-bottom-width"], 10) + parseInt(e["padding-bottom"], 10),
                                    left: parseInt(e["border-left-width"], 10) + parseInt(e["padding-left"], 10)
                                }
                            }();
                        return {
                            width: e.width * d - (t.left + t.right),
                            height: e.height * d - (t.top + t.bottom),
                            left: e.left + t.left + (e.width - e.width * d) / 2,
                            top: e.top + t.top + (e.width - e.width * d) / 2
                        }
                    }(), s = function() {
                        var t = e.viewportSize.getBoundingClientRect(),
                            n = t.height / a.height,
                            i = (t.width + 42) / a.width;
                        return {
                            left: t.width / 2 - a.width / 2,
                            top: t.height / 2 - a.height / 2,
                            scale: i > n ? i : n
                        }
                    }(), u = {
                        width: a.width,
                        height: a.height,
                        display: "block",
                        opacity: 0
                    }, $(e.animationBox).attr("style", "").css(u).css("background-image", c.image).css("box-shadow", "inset 0 0 0px 0px rgba(" + c.rgb + ", 0)").css("background-color", c.color), $(e.animationBox).closest("#animation-container").attr("class", t.class ? t.class : ""), $(e.animationBox).css("width"), $(e.animationBackground).attr("style", "").css(u).css("background-color", c.color).css("box-shadow", "0 0 50px 50px " + c.color), $(e.animationBackground).css("width"), i.blurState = {
                        positionStart: a,
                        positionEnd: s,
                        background: c
                    };
                    var f = {
                        1: function() {
                            window.move(e.animationBox).duration(1).set("opacity", 0).to(a.left, a.top).scale(1).set("box-shadow", "inset 0 0 0px 0 rgba(" + c.rgb + ", 0)").end(function() {
                                $(e.animationBox).css("width")
                            }), window.move(e.animationBackground).duration(1).set("opacity", 0).to(a.left, a.top).scale(.5).end(function() {
                                $(e.animationBackground).css("width"), window.setTimeout(f[2], 1)
                            })
                        },
                        2: function() {
                            window.move(e.animationBox).duration(150).set("opacity", 1).to(a.left, a.top).set("box-shadow", "inset 0 0 0px 0 rgba(" + c.rgb + ", 1)").scale(1).end(function() {
                                $(e.animationBox).css("width")
                            }), window.move(e.animationBackground).delay(150).duration(150).set("opacity", 1).to(a.left, a.top).scale(.6).end(function() {
                                $(e.animationBox).css("width"), window.setTimeout(f[3], 1)
                            })
                        },
                        3: function() {
                            window.move(e.animationBox).duration(200).ease("out").to(s.left, s.top).scale((1 + s.scale) / 1.5).set("opacity", 0).set("box-shadow", "inset 0 0 10px 30px rgba(" + c.rgb + ", 1)").end(function() {
                                $(e.animationBox).css("width"), $(e.animationBox).css("box-shadow", "inset 0 0 0 0 rgba(" + c.rgb + ", 0)")
                            }), window.move(e.animationBackground).delay(0).duration(200).ease("out").to(s.left, s.top).scale(s.scale).end(function() {
                                $(e.animationBackground).css("width"), window.setTimeout(function() {
                                    o(f.end)
                                }, 1)
                            })
                        },
                        end: function(e) {
                            return "page" === e.to.type ? n.animations.removeAnimationLayer(e) : Promise.resolve(e)
                        }
                    };
                    window.setTimeout(f[1], 10)
                })
            },
            blurOut: function(t) {
                return new Promise(function(i, o) {
                    t.quickSwitch = !0;
                    var r, a, s;
                    a = function() {
                        var t, n, i;
                        return i = e.viewportLive.querySelector('.background[style*="opacity: 1"] img[src]'), i || (i = e.viewportLive.querySelector('.background[state="active"] img[src]')), i || (i = e.viewportLive.querySelector(".background img[src]")), i && i.src ? (t = "16,20,23", n = i.src) : (t = "16,20,23", n = null), {
                            color: "rgb(" + t + ")",
                            image: 'url("' + n + '")',
                            rgb: t
                        }
                    }(), r = function() {
                        var t = e.viewportSize.getBoundingClientRect();
                        return {
                            start: {
                                width: t.width,
                                height: t.height,
                                left: 0,
                                top: 0
                            },
                            end: {
                                width: 0,
                                height: 0
                            }
                        }
                    }(), s = {
                        width: r.start.width,
                        height: r.start.height,
                        display: "block",
                        opacity: 0
                    }, $(e.animationBox).attr("style", "").css(s).css("background-image", a.image).css("box-shadow", "inset 0 0 0px 10px rgba(" + a.rgb + ", 1)").css("background-color", a.color), $(e.animationBox).css("width"), $(e.animationBackground).attr("style", "").css(s).css("background-color", a.color).css("box-shadow", "0 0 50px 50px " + a.color), $(e.animationBackground).css("width");
                    var l = {
                        1: function() {
                            window.move(e.animationBox).delay(0).duration(650).ease("out").scale(1).set("box-shadow", "inset 0 0 10px 0 rgba(" + a.rgb + ", 1)").set("opacity", 1).end(function() {
                                $(e.animationBox).css("width")
                            }), window.move(e.animationBackground).duration(700).ease("out").scale(1).set("opacity", 1).end(function() {
                                $(e.animationBackground).css("width"), window.setTimeout(function() {
                                    i(l[2])
                                }, 1)
                            })
                        },
                        2: function(t) {
                            return new Promise(function(i, o) {
                                window.move(e.animationBox).delay(0).duration(400).ease("out").set("box-shadow", "inset 0 0 150px 40px rgba(" + a.rgb + ", 1)").scale(.85).set("opacity", 0).end(function() {
                                    $(e.animationBox).css("width")
                                }), window.move(e.animationBackground).duration(500).ease("linear").scale(1.1).set("opacity", 0).end(function() {
                                    $(e.animationBackground).css("width")
                                }), window.setTimeout(function() {
                                    i("page" === t.to.type ? n.animations.removeAnimationLayer(t) : t)
                                }, 501)
                            })
                        }
                    };
                    window.setTimeout(l[1], 10)
                })
            },
            removeAnimationLayer: function(t) {
                return new Promise(function(n, i) {
                    var o = {
                        hide: function() {
                            window.move(e.animationBox).delay(0).duration(600).ease("linear").set("opacity", 0).end(function() {
                                $(e.animationBackground).css("width")
                            }), window.move(e.animationBackground).duration(600).delay(0).ease("linear").set("opacity", 0).end(function() {
                                $(e.animationBackground).css("width")
                            }), window.setTimeout(o.remove, 614)
                        },
                        remove: function() {
                            $(e.animationBox.parentElement).attr("style", ""), $(e.animationBox).css({
                                display: "none"
                            }), $(e.animationBackground).css({
                                display: "none"
                            }), $(e.animationBox).css("width"), n(t)
                        }
                    };
                    o.hide()
                })
            },
            overlay: function(n) {
                return new Promise(function(n, i) {
                    e.window.innerWidth < 751 && (e.navUnitMobile || document.querySelector(t.navUnitMobile)).setAttribute("state", ""), n()
                })
            },
            closeOverlay: function(t) {
                return new Promise(function(t, o) {
                    var r = {
                        1: function() {
                            if ($(e.body).trigger("closingOverlay"), i.blurState ? (e.overlayUnitXhr.setAttribute("state", "hidden"), e.overlayContainer.setAttribute("state", "disappearing")) : (e.overlayUnitXhr.setAttribute("state", ""), e.overlayContainer.setAttribute("state", "disappearing")), window.setTimeout(function() {
                                    n.scrolling.enable(), n.scrolling.scrollTo(i.scrollTop)
                                }, 500), window.setTimeout(function() {
                                    e.overlayContainer.setAttribute("state", ""), t()
                                }, 1e3), i.blurState) {
                                var o = i.blurState.positionStart,
                                    a = (i.blurState.background, function() {
                                        var t = e.viewportSize.getBoundingClientRect(),
                                            n = t.height / o.height,
                                            i = (t.width + 42) / o.width;
                                        return {
                                            left: t.width / 2 - o.width / 2,
                                            top: t.height / 2 - o.height / 2,
                                            scale: i > n ? i : n
                                        }
                                    }());
                                window.move(e.animationBox).duration(0).set("opacity", 0).set("box-shadow", "rgb(16, 20, 23) 0px 0px 20px 20px inset").to(a.left, a.top).scale(.8 * a.scale).end(function() {
                                    $(e.animationBox).css("width"), window.setTimeout(r[2], 500)
                                }), window.move(e.animationBackground).duration(0).set("opacity", 1).end(function() {
                                    $(e.animationBackground).css("width")
                                })
                            }
                        },
                        2: function() {
                            var t = i.blurState.positionStart;
                            e.overlayUnitXhr.setAttribute("state", ""), e.overlayContainer.setAttribute("state", ""), window.move(e.animationBox).delay(0).duration(600).set("box-shadow", "rgb(16, 20, 23) 0px 0px 0px 0px inset").ease("cubic-bezier(0.36, 0.15, 0.15, 0.99)").to(t.left, t.top).scale(1).set("opacity", 1).end(function() {
                                $(e.animationBox).css("width")
                            }), window.setTimeout(r[3], 600), window.move(e.animationBackground).duration(600).ease("out").set("opacity", 0).end(function() {
                                $(e.animationBox).css("width")
                            })
                        },
                        3: function() {
                            var t = i.blurState.positionStart;
                            window.move(e.animationBox).duration(150).set("opacity", 1).to(t.left, t.top).scale(1).end(function() {
                                $(e.animationBox).css("width")
                            }), window.setTimeout(function() {
                                i.blurState = void 0, r.hide()
                            }, 151)
                        },
                        hide: function() {
                            window.move(e.animationBox).duration(100).ease("in").set("opacity", 0).end(function() {
                                $(e.animationBackground).css("width")
                            }), window.setTimeout(r.remove, 101)
                        },
                        remove: function() {
                            $(e.animationBox).css({
                                display: "none"
                            }), $(e.animationBackground).css({
                                display: "none"
                            }), $(e.animationBox).css("width"), n.scrolling.enable(), t()
                        }
                    };
                    r[1]()
                })
            }
        }, n.scrolling = {
            disable: function() {
                $(e.body).trigger("disableScrolling")
            },
            enable: function() {
                $(e.body).trigger("enableScrolling")
            },
            scrollTo: function(e) {
                window.scrolling.getScrollElement().scrollTop = e
            }
        }, n.animating = {
            determinAnimation: function(e) {
                if (e.animation && n.animations[e.animation]) return e.animation;
                try {
                    return "overlay" === e.to.type ? "overlay" : e.back ? "blurOut" : "fade"
                } catch (e) {
                    return "fade"
                }
            },
            swapViewports: function(e) {
                "page" === e.to.type && (n.scrolling.enable(), n.scrolling.scrollTo(0), e.refreshNavs && n.modules.initNav(), n.animating.swapToViewportStage(e)), "overlay" === e.to.type && n.animating.swapToViewportOverlay(e)
            },
            swapToViewportStage: function(t) {
                e.overlayContainer.setAttribute("state", ""), e.overlayUnitXhr.setAttribute("state", ""), e.viewportStage.setAttribute("variant", "live"), e.viewportLive.remove(), e.viewportLive = e.viewportStage, e.viewportLive.removeAttribute("style"), e.viewportStage = $('<div class="viewport" variant="stage"></div>')[0], $(e.viewportLive).after(e.viewportStage)
            },
            swapToViewportOverlay: function(t) {
                i.isInOverlay = !0, t.quickSwitch && (e.overlayContainer.setAttribute("state", "shown"), e.overlayUnitXhr.setAttribute("state", "shown")), window.setTimeout(function() {
                    e.overlayContainer.setAttribute("state", "active"), e.overlayUnitXhr.setAttribute("state", "active")
                }, 0)
            },
            executeAnimation: function(e) {
                return n.animations[e.animation](e)
            },
            endAnimation: function(e) {
                return n.animations.removeAnimationLayer(e)
            },
            setOverlayLink: function() {
                e.overlayAtag.href = window.location.href
            }
        }, n.modules = {
            initAll: function(e) {
                Object.keys(o).forEach(function(t, n) {
                    try {
                        if (o[t].init) {
                            o[t].init(e)
                        }
                    } catch (e) {
                        console.warn("failed to init module: ", t, e)
                    }
                })
            },
            mountAll: function(e) {
                Object.keys(o).forEach(function(t, n) {
                    try {
                        if (o[t].mount) {
                            o[t].mount(e)
                        }
                    } catch (e) {}
                })
            },
            unmountAll: function() {
                Object.keys(o).forEach(function(e) {
                    try {
                        o[e].unmount()
                    } catch (e) {}
                })
            },
            renderAll: function() {
                Object.keys(o).forEach(function(e) {
                    try {
                        o[e].render()
                    } catch (e) {}
                })
            },
            showAll: function(i) {
                var o, r = $(".cookies.container.modal.temp").attr("state"),
                    a = i ? i.url : document.location.href,
                    s = i ? i.to.type : "page",
                    l = i ? n.googleTagManager.eventTypes.virtual : n.googleTagManager.eventTypes.regular,
                    c = $(t.pageType).attr("data-pagetype"),
                    u = $(t.country).attr("content");
                "page" === s && "active" != r && n.scrolling.enable(), "active" === r && n.scrolling.disable();
                var d = a.split("#")[1] ? a.split("#")[1] : "";
                if (window.wow.init(e.viewportLive), d) {
                    var o = document.getElementById(d);
                    if (!o || window.navigator.userAgent.includes("Trident/") || window.navigator.userAgent.includes("Edge/")) {
                        if (o) {
                            var f = o.getBoundingClientRect();
                            setTimeout(function() {
                                window.scrolling.scrollTo(Math.round(f.top), 300)
                            }, 500)
                        }
                    } else {
                        var f = o.getBoundingClientRect();
                        window.scrolling.scrollTo(Math.round(f.top), 1e3)
                    }
                }
                n.googleTagManager.logPageView(a, document.title, l), n.googleTagManager.logPageType(c, document.title, u)
            },
            initNav: function(e) {
                r.nav.init(e)
            },
            mountNav: function(e) {
                r.nav.mount(e)
            },
            unmountNav: function(e) {
                r.nav.unmount(e)
            }
        }, n.ajax = {
            getDocument: function(e) {
                return new Promise(function(t, i) {
                    var o, r = {
                            resolve: t,
                            reject: i
                        },
                        a = n.ajax.responseHandlerFactory(r, e),
                        s = n.ajax.errorHandlerFactory(r, e);
                    window.XMLHttpRequest ? o = new window.XMLHttpRequest : window.ActiveXObject ? o = new window.ActiveXObject("Msxml2.XMLHTTP") : s(new Error("Ajax is not supported by your browser")), o.onreadystatechange = a, o.onerror = s, o.open("GET", e.url, !0), o.responseType = "document";
                    try {
                        o.send()
                    } catch (e) {
                        s(e)
                    }
                })
            },
            responseHandlerFactory: function(e, t) {
                return function(n) {
                    var i = n.target;
                    if (i.readyState === i.DONE) {
                        if (0 === i.status) return void(window.location = t.url);
                        var o = i.getResponseHeader("Page-Title"),
                            r = i.getResponseHeader("Page-Template");
                        if (!o) {
                            var a = i.response.querySelector("title");
                            if (null === a) return void(window.location = t.url);
                            o = a.innerText
                        }
                        if (r = r ? r.indexOf("full-viewport") > -1 ? "overlay" : "page" : i.response.querySelector('[class^="full-viewport-"]') ? "overlay" : "page", i.status.toString().match(/2[0-9]{2}/)) {
                            var s = {
                                data: i.response,
                                title: o,
                                type: r,
                                url: i.responseURL || i.getResponseHeader("x-url")
                            };
                            e.resolve(s)
                        } else e.reject({
                            error: new Error("no 2XX response"),
                            options: t
                        })
                    }
                }
            },
            errorHandlerFactory: function(e, t) {
                return function(n) {
                    e.reject({
                        options: t,
                        error: n
                    })
                }
            }
        }, n.tests = {
            isReplaceStateSupported: function() {
                return window.history && window.history.replaceState
            },
            isSameWindowName: function(e) {
                return !(e && e.length && "_self" !== e)
            },
            isUrlSameOrigen: function(e) {
                var t, n, o;
                return t = document.createElement("a"), t.setAttribute("href", e), n = t.protocol + "//" + t.hostname, o = n === i.origen, t = null, o
            }
        }, n.navigate = {
            redirect: function(e) {
                e.windowName ? window.open(e.url, e.windowName) : document.location = e.url
            },
            replace: function(t) {
                var o, r;
                i.isBusyReplacing = !0, i.scrollTop = window.scrolling.getScrollPosition(), t.animation ? (e.animationContainer.setAttribute("loader", !0), o = n.animating.executeAnimation(t), t.animationStarted = !0) : (o = Promise.resolve(), t.animationStarted = !1), r = n.ajax.getDocument(t), Promise.all([r, o]).then(function(e) {
                    var o, r = e[0],
                        a = t.url.split("#")[1] ? "#" + t.url.split("#")[1] : "";
                    return o = r.url ? r.url + a : t.url, t.animationEnding = e[1] || function() {}, t.from = {
                        url: i.url,
                        title: i.title,
                        type: i.type
                    }, t.to = {
                        url: o,
                        data: r.data,
                        title: r.title,
                        type: r.type
                    }, t.redirect = void 0 === t.redirect || t.redirect, t.refreshNavs = void 0 === t.refreshNavs || t.refreshNavs, t.to.url != t.url && (t.redirect = !0), t.redirect && (n.navigate.changeUrl(t), n.animating.setOverlayLink()), i.isBusyReplacing = !1, n.navigate.setState(t), n.navigate.stage(t)
                }).then(function(e) {
                    var t;
                    return e.animationStarted ? (n.animating.swapViewports(e), t = e.animationEnding(e)) : (e.animation = n.animating.determinAnimation(e), t = n.animating.executeAnimation(e).then(function(t) {
                        return n.animating.swapViewports(e), t ? (e.animationEnding = t, e.animationEnding(e)) : e
                    })), t
                }).then(function(t) {
                    "page" === t.to.type && n.scrolling.enable(), n.modules.renderAll(t.stageContainer), window.setTimeout(n.modules.showAll(t), 100), e.animationContainer.setAttribute("loader", !1)
                }).catch(function(t) {
                    i.isBusyReplacing = !1, n.navigate.redirect({
                        url: t.options.url || t.options.to.url
                    }), e.animationContainer.setAttribute("loader", !1)
                })
            },
            stage: function(i) {
                return new Promise(function(o, r) {
                    try {
                        var a, s;
                        if (a = i.to.data.querySelector(t.viewportLive).innerHTML, s = i.to.data.querySelector(t.navsStage).innerHTML, "page" === i.to.type) {
                            var l = $(e.navsStage).find('div[variant="side"]').length,
                                c = $(s).filter('div[variant="side"]').length,
                                u = $(e.navsStage).find('div[variant*="top"]').attr("variant").length,
                                d = $(s).filter('div[variant*="top"]').attr("variant").length;
                            if (i.stageContainer = e.viewportStage, n.legalStatement(i.to.data.querySelector(t.legalContainerFixed)), n.modules.unmountAll(), l === c && u === d || (i.refreshNavs = !0), i.refreshNavs) n.modules.unmountNav(), $(e.navsStage).prepend(s);
                            else if (i.refreshNavTitle) {
                                var f = $(s).filter('div[variant*="top"]').find(".title").html();
                                f && $(e.navsStage).find('div[variant*="top"]').find(".title").html(f)
                            }
                            n.modules.mountNav(i.stageContainer)
                        } else "overlay" === i.to.type && (i.stageContainer = e.overlayUnitXhr);
                        $(i.stageContainer).html(a), window.imagesLoaded(i.stageContainer).on("always", function() {
                            n.modules.mountAll(i.stageContainer), n.modules.initAll(i.stageContainer), o(i)
                        }), window.setTimeout(function() {
                            o(i)
                        }, 5e3)
                    } catch (e) {
                        r({
                            error: e,
                            options: i
                        })
                    }
                })
            },
            setState: function(e) {
                i.url = e.to.url, i.title = e.to.title, i.type = e.to.type
            },
            changeUrl: function(e) {
                var t = {
                    from: {
                        url: e.from.url,
                        title: e.from.title,
                        type: e.from.type
                    },
                    to: {
                        url: e.to.url,
                        title: e.to.title,
                        type: e.to.type
                    }
                };
                t.from.url !== t.to.url && (window.history.pushState(t, e.to.title, e.to.url), document.title = e.to.title)
            }
        }, n.init = function() {
            r = window.coremodules || r, o = window.modules || o, e.window = window, e.body = document.querySelector("body"), e.viewportLive = document.querySelector(t.viewportLive), e.viewportStage = document.querySelector(t.viewportStage), e.viewportSize = document.querySelector(t.viewportSize), e.navsStage = document.querySelector(t.navsStage), e.navUnitMobile = document.querySelector(t.navUnitMobile), e.overlayContainer = e.body.querySelector(t.overlayContainer), e.overlayUnitXhr = e.overlayContainer.querySelector(t.overlayUnitXhr), e.overlayAtag = e.overlayContainer.querySelector(t.overlayAtag), e.animationBox = e.body.querySelector(t.animationBox), e.animationContainer = e.body.querySelector(t.animationContainer), e.animationBackground = e.body.querySelector(t.animationBackground), n.modules.mountNav(e.viewportLive), window.imagesLoaded(e.viewportLive).on("always", function() {
                n.modules.mountAll(e.viewportLive), n.modules.initAll(e.viewportLive), window.setTimeout(function() {
                    n.modules.initNav(e.viewportLive)
                }, 500), window.setTimeout(function() {
                    n.modules.renderAll(e.viewportLive), window.setTimeout(n.modules.showAll(), 100)
                }, 600)
            }), i.title = document.querySelector("title").innerText, i.url = document.location.href.toString(), i.type = "page", i.origen = document.location.protocol + "//" + document.location.hostname, !n.tests.isReplaceStateSupported() || window.isAndroidOld || window.isWindowsPhone ? $(e.body).on("navigate", function(e) {
                n.navigate.redirect({
                    url: e.url,
                    windowName: e.windowName
                })
            }) : (window.history.replaceState({
                to: {
                    title: i.title,
                    url: i.url,
                    type: i.type
                }
            }, i.title, i.url), $(e.body).on("navigate", function(e) {
                n.tests.isSameWindowName(e.windowName) && n.tests.isUrlSameOrigen(e.url) && !i.isBusyReplacing ? n.navigate.replace({
                    url: e.url,
                    windowName: e.windowName,
                    scale: e.scale,
                    animation: e.animation,
                    redirect: e.redirect,
                    refreshNavs: e.refreshNavs,
                    refreshNavTitle: e.refreshNavTitle,
                    target: e.target,
                    class: e.class
                }) : n.navigate.redirect({
                    url: e.url,
                    windowName: e.windowName
                })
            }), "scrollRestoration" in history && (history.scrollRestoration = "manual"), window.addEventListener("popstate", function(o) {
                if (o.state && !i.isBusyReplacing) {
                    var r = o.state.from && i.url === o.state.from.url ? "forwards" : "backwards",
                        a = {
                            from: {
                                title: i.title,
                                url: i.url,
                                type: i.type
                            },
                            to: "backwards" === r ? o.state.to : o.state.from
                        };
                    if ("overlay" === a.from.type && "backwards" === r) i.title = a.to.title, i.url = a.to.url + "?c=" + (new Date).getTime(), i.type = a.to.type, n.animations.closeOverlay(), window.setTimeout(function() {
                        n.modules.mountAll(document.querySelector(t.viewportLive))
                    }, 100);
                    else try {
                        $(e.body).trigger(new jQuery.Event("navigate", {
                            url: o.state.to.url + "?c=" + (new Date).getTime(),
                            redirect: !1,
                            animation: "backwards" === r ? "blurOut" : void 0
                        }))
                    } catch (e) {}
                } else o.state && n.navigate.redirect(o.state.to)
            }))
        }, $(n.init), n.googleTagManager = {
            eventTypes: {
                virtual: "VirtualPageView",
                regular: "RegularPageView"
            },
            logPageView: function(e, t, n) {
                void 0 !== window.dataLayer && window.dataLayer.push({
                    event: n,
                    virtualPageURL: e.toLowerCase(),
                    virtualPageTitle: t
                })
            },
            logPageType: function(e, t, n) {
                void 0 !== window.dataLayer && window.dataLayer.push({
                    pageType: e,
                    pageTitle: t,
                    country: n,
                    event: "PageTypeEvent"
                })
            }
        }, n.legalStatement = function(t) {
            var n, i = e.body.querySelector(".legal.container");
            n = t ? "fixed" : "hidden", i ? (i.setAttribute("variant", n), "hidden" === n && i.remove()) : "fixed" === n && e.body.appendChild(t)
        }
    }(),
    function() {
        "use strict";
        var e, t;
        if (e = {}, t = {}, window.isWindowsPhone = !1, e.body = document.body, e.html = document.querySelector("html"), window.navigator && window.navigator.vendor && window.navigator.vendor.indexOf("Apple") > -1 && ($(e.body).addClass("safari"), navigator.userAgent.match(/(iPhone)|(iPad)/) && $(e.body).addClass("iOS")), window.isAndroid = !1, window.isAndroidOld = !1, navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/Windows/i)) {
            window.isAndroid = !0;
            parseFloat(function(e) {
                e = (e || navigator.userAgent).toLowerCase();
                var t = e.match(/android\s([0-9\.]*)/);
                return !!t && t[1].replace(/android\s/i, "")
            }(navigator.userAgent)) < 4.4 ? ($(e.body).addClass("old-android"), window.isAndroidOld = !0) : $(e.body).addClass("new-android")
        } else $(e.body).addClass("not-android");
        if (window.hasPushyScrollbars = !1, function() {
                var e = document.documentElement.getAttribute("style");
                document.documentElement.style.overflowY = "scroll";
                var t = document.documentElement.clientWidth;
                document.documentElement.style.overflowY = "hidden";
                var n = document.documentElement.clientWidth;
                return e ? document.documentElement.setAttribute("style", e) : document.documentElement.removeAttribute("style"), n - t
            }() > 0 && (window.hasPushyScrollbars = !0, $(e.body).addClass("pushy-scrollbars")), navigator.userAgent.match(/Windows Phone/i) && ($(e.body).addClass("windows-phone"), window.isWindowsPhone = !0), $(e.body).on("disableScrolling", function() {
                $(e.html).addClass("no-scrolling")
            }), $(e.body).on("enableScrolling", function() {
                $(e.html).removeClass("no-scrolling")
            }), $(e.body).on("disallowHover", function() {
                t.hoverAllowed && $(e.html).removeClass("has-cursor")
            }), $(e.body).on("allowHover", function() {
                t.hoverAllowed && $(e.html).addClass("has-cursor")
            }), $(e.body).one("touchstart", function() {
                $(e.body).off("mouseenter.cursor-detection")
            }), $(e.body).one("mouseenter.cursor-detection", function() {
                navigator.userAgent.match(/Android/i) || (t.hoverAllowed = !0, $(e.html).addClass("has-cursor"))
            }), !navigator.userAgent.match(/Android/i)) try {
            window.viewportUnitsBuggyfill.init()
        } catch (e) {}
    }(), window.String.prototype.includes || (window.String.prototype.includes = function() {
        "use strict";
        return -1 !== String.prototype.indexOf.apply(this, arguments)
    }), window.nodelistToArray = function() {
        "use strict";
        return function(e) {
            for (var t = [], n = e.length >>> 0; n--;) t[n] = e[n];
            return t
        }
    }(),
    function() {
        function e(e) {
            var t = e.target || e.srcElement;
            t.__resizeRAF__ && r(t.__resizeRAF__), t.__resizeRAF__ = o(function() {
                var n = t.__resizeTrigger__;
                n.__resizeListeners__.forEach(function(t) {
                    t.call(n, e)
                })
            })
        }

        function t(t) {
            this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__, this.contentDocument.defaultView.addEventListener("resize", e)
        }
        var n = document.attachEvent,
            i = navigator.userAgent.match(/Trident/),
            o = function() {
                var e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                    return window.setTimeout(e, 20)
                };
                return function(t) {
                    return e(t)
                }
            }(),
            r = function() {
                var e = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
                return function(t) {
                    return e(t)
                }
            }();
        window.addResizeListener = function(o, r) {
            if (!o.__resizeListeners__)
                if (o.__resizeListeners__ = [], n) o.__resizeTrigger__ = o, o.attachEvent("onresize", e);
                else {
                    "static" == getComputedStyle(o).position && (o.style.position = "relative");
                    var a = o.__resizeTrigger__ = document.createElement("object");
                    a.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"), a.__resizeElement__ = o, a.onload = t, a.type = "text/html", i && o.appendChild(a), a.data = "about:blank", i || o.appendChild(a)
                }
            o.__resizeListeners__.push(r)
        }, window.removeResizeListener = function(t, i) {
            t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(i), 1), t.__resizeListeners__.length || (n ? t.detachEvent("onresize", e) : (t.__resizeTrigger__.contentDocument.defaultView.removeEventListener("resize", e), t.__resizeTrigger__ = !t.removeChild(t.__resizeTrigger__)))
        }
    }(),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";
        var t = window.Carousel || {};
        t = function() {
            function t(t, i) {
                var o, r, a, s = this;
                if (s.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: e(t),
                        appendDots: e(t),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button type="button" data-role="none" class="carousel-prev" aria-label="previous">Previous</button>',
                        nextArrow: '<button type="button" data-role="none" class="carousel-next" aria-label="next">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(e, t) {
                            return '<button type="button" data-role="none">' + (t + 1) + "</button>"
                        },
                        dots: !1,
                        dotsClass: "carousel-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rtl: !1,
                        slide: "",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        variableWidth: !1,
                        vertical: !1,
                        waitForAnimate: !0
                    }, s.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1
                    }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.hidden = "hidden", s.paused = !1, s.positionProp = null, s.respondTo = null, s.shouldClick = !0, s.$slider = e(t), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = e(t).data("carousel") || {}, s.options = e.extend({}, s.defaults, o, i), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, (r = s.options.responsive || null) && r.length > -1) {
                    s.respondTo = s.options.respondTo || "window";
                    for (a in r) r.hasOwnProperty(a) && (s.breakpoints.push(r[a].breakpoint), s.breakpointSettings[r[a].breakpoint] = r[a].settings);
                    s.breakpoints.sort(function(e, t) {
                        return !0 === s.options.mobileFirst ? e - t : t - e
                    })
                }
                void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.msHidden ? (s.hidden = "msHidden", s.visibilityChange = "msvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.instanceUid = n++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.init(), s.checkResponsive(!0)
            }
            var n = 0;
            return t
        }(), t.prototype.addSlide = t.prototype.carouselAdd = function(t, n, i) {
            var o = this;
            if ("boolean" == typeof n) i = n, n = null;
            else if (n < 0 || n >= o.slideCount) return !1;
            o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, n) {
                e(n).attr("data-carousel-index", t)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, t.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function(t, n) {
            var i = {},
                o = this;
            o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                left: t
            }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
                top: t
            }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
                animStart: o.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
                },
                complete: function() {
                    n && n.call()
                }
            })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function() {
                o.disableTransition(), n.call()
            }, o.options.speed))
        }, t.prototype.asNavFor = function(t) {
            var n = this,
                i = null !== n.options.asNavFor ? e(n.options.asNavFor).carousel("getCarousel") : null;
            null !== i && i.slideHandler(t, !0)
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                n = {};
            !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && !0 !== e.paused && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this;
            !1 === e.options.infinite ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (e.currentSlide - 1 == 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
        }, t.prototype.buildArrows = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow = e(t.options.prevArrow), t.$nextArrow = e(t.options.nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("carousel-disabled"))
        }, t.prototype.buildDots = function() {
            var t, n, i = this;
            if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                for (n = '<ul class="' + i.options.dotsClass + '">', t = 0; t <= i.getDotCount(); t += 1) n += "<li>" + i.options.customPaging.call(this, i, t) + "</li>";
                n += "</ul>", i.$dots = e(n).appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("carousel-active").attr("aria-hidden", "false")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.carousel-cloned)").addClass("carousel-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
                e(n).attr("data-carousel-index", t)
            }), t.$slidesCache = t.$slides, t.$slider.addClass("carousel-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="carousel-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="carousel-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="carousel-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("carousel-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), !0 === t.options.accessibility && t.$list.prop("tabIndex", 0), t.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
        }, t.prototype.checkResponsive = function(t) {
            var n, i, o, r = this,
                a = r.$slider.width(),
                s = window.innerWidth || e(window).width();
            if ("window" === r.respondTo ? o = s : "slider" === r.respondTo ? o = a : "min" === r.respondTo && (o = Math.min(s, a)), r.originalSettings.responsive && r.originalSettings.responsive.length > -1 && null !== r.originalSettings.responsive) {
                i = null;
                for (n in r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (i = r.breakpoints[n]) : o > r.breakpoints[n] && (i = r.breakpoints[n]));
                null !== i ? null !== r.activeBreakpoint ? i !== r.activeBreakpoint && (r.activeBreakpoint = i, "uncarousel" === r.breakpointSettings[i] ? r.uncarousel() : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh())) : (r.activeBreakpoint = i, "uncarousel" === r.breakpointSettings[i] ? r.uncarousel() : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh())) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh())
            }
        }, t.prototype.changeSlide = function(t, n) {
            var i, o, r, a = this,
                s = e(t.target);
            switch (s.is("a") && t.preventDefault(), r = a.slideCount % a.options.slidesToScroll != 0, i = r ? 0 : (a.slideCount - a.currentSlide) % a.options.slidesToScroll, t.data.message) {
                case "previous":
                    o = 0 === i ? a.options.slidesToScroll : a.options.slidesToShow - i, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide - o, !1, n);
                    break;
                case "next":
                    o = 0 === i ? a.options.slidesToScroll : i, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide + o, !1, n);
                    break;
                case "index":
                    var l = 0 === t.data.index ? 0 : t.data.index || e(t.target).parent().index() * a.options.slidesToScroll;
                    a.slideHandler(a.checkNavigable(l), !1, n);
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function(e) {
            var t, n, i = this;
            if (t = i.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1];
            else
                for (var o in t) {
                    if (e < t[o]) {
                        e = n;
                        break
                    }
                    n = t[o]
                }
            return e
        }, t.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function() {
            var t = this;
            t.autoPlayClear(), t.touchObject = {}, e(".carousel-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass("carousel-slide carousel-active carousel-center carousel-visible").attr("aria-hidden", "true").removeAttr("data-carousel-index").css({
                position: "",
                left: "",
                top: "",
                zIndex: "",
                opacity: "",
                width: ""
            }), t.$slider.removeClass("carousel-slider"), t.$slider.removeClass("carousel-initialized"), t.$list.off(".carousel"), e(window).off(".carousel-" + t.instanceUid), e(document).off(".carousel-" + t.instanceUid), t.$slider.html(t.$slides)
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                n = {};
            n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.fadeSlide = function(e, t) {
            var n = this;
            !1 === n.cssTransitions ? (n.$slides.eq(e).css({
                zIndex: 1e3
            }), n.$slides.eq(e).animate({
                opacity: 1
            }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                opacity: 1,
                zIndex: 1e3
            }), t && setTimeout(function() {
                n.disableTransition(e), t.call()
            }, n.options.speed))
        }, t.prototype.filterSlides = t.prototype.carouselFilter = function(e) {
            var t = this;
            null !== e && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.getCurrent = t.prototype.carouselCurrentSlide = function() {
            return this.currentSlide
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                n = 0,
                i = 0;
            if (!0 === e.options.infinite) i = Math.ceil(e.slideCount / e.options.slidesToScroll);
            else if (!0 === e.options.centerMode) i = e.slideCount;
            else
                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToShow, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return i - 1
        }, t.prototype.getLeft = function(e) {
            var t, n, i, o = this,
                r = 0;
            return o.slideOffset = 0, n = o.$slides.first().outerHeight(), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = n * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (e - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * n * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (e + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + r, !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".carousel-slide").eq(e) : o.$slideTrack.children(".carousel-slide").eq(e + o.options.slidesToShow), t = i[0] ? -1 * i[0].offsetLeft : 0, !0 === o.options.centerMode && (i = !1 === o.options.infinite ? o.$slideTrack.children(".carousel-slide").eq(e) : o.$slideTrack.children(".carousel-slide").eq(e + o.options.slidesToShow + 1), t = i[0] ? -1 * i[0].offsetLeft : 0, t += (o.$list.width() - i.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.carouselGetOption = function(e) {
            return this.options[e]
        }, t.prototype.getNavigableIndexes = function() {
            var e, t = this,
                n = 0,
                i = 0,
                o = [];
            for (!1 === t.options.infinite ? (e = t.slideCount - 1, !0 !== t.options.centerMode && !0 !== t.options.stacked || (e = t.slideCount)) : (n = -1 * t.slideCount, i = -1 * t.slideCount, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return o
        }, t.prototype.getCarousel = function() {
            return this
        }, t.prototype.getSlideCount = function(t) {
            var n, i, o = this;
            return i = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide && !0 === o.options.centerMode && !0 === o.options.variableWidth ? (i = o.slideWidth / 2, o.$slideTrack.find(".carousel-slide").each(function(r, a) {
                return "right" === t && a.offsetLeft - i + e(a).outerWidth() / 2 > -1 * o.swipeLeft ? (n = a, !1) : "left" === t && a.offsetLeft - i + e(a).outerWidth() > -1 * o.swipeLeft ? (n = a, !1) : void 0
            }), Math.abs(e(n).attr("data-carousel-index") - o.currentSlide) || 1) : !0 === o.options.swipeToSlide ? (console.log("just swipe"), o.$slideTrack.find(".carousel-slide").each(function(t, r) {
                if (r.offsetLeft - i + e(r).outerWidth() / 2 > -1 * o.swipeLeft) return n = r, !1
            }), Math.abs(e(n).attr("data-carousel-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.carouselGoTo = function(e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e, 10)
                }
            }, t)
        }, t.prototype.init = function() {
            var t = this;
            e(t.$slider).hasClass("carousel-initialized") || (e(t.$slider).addClass("carousel-initialized"), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots()), t.$slider.trigger("init", [t])
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.carousel", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.on("click.carousel", {
                message: "next"
            }, e.changeSlide))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.carousel", {
                message: "index"
            }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && e("li", t.$dots).on("mouseenter.carousel", function() {
                t.paused = !0, t.autoPlayClear()
            }).on("mouseleave.carousel", function() {
                t.paused = !1, t.autoPlay()
            })
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.carousel mousedown.carousel", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.carousel mousemove.carousel", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.carousel mouseup.carousel", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.carousel mouseleave.carousel", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.carousel", t.clickHandler), !0 === t.options.autoplay && (e(document).on(t.visibilityChange, function() {
                t.visibility()
            }), !0 === t.options.pauseOnHover && (t.$list.on("mouseenter.carousel", function() {
                t.paused = !0, t.autoPlayClear()
            }), t.$list.on("mouseleave.carousel", function() {
                t.paused = !1, t.autoPlay()
            }))), !0 === t.options.accessibility && t.$list.on("keydown.carousel", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.carousel", t.selectHandler), e(window).on("orientationchange.carousel.carousel-" + t.instanceUid, function() {
                t.checkResponsive(), t.setPosition()
            }), e(window).on("resize.carousel.carousel-" + t.instanceUid, function() {
                e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                    t.windowWidth = e(window).width(), t.checkResponsive(), t.setPosition()
                }, 50))
            }), e("*[draggable!=true]", t.$slideTrack).on("dragstart", function(e) {
                e.preventDefault()
            }), e(window).on("load.carousel.carousel-" + t.instanceUid, t.setPosition), e(document).ready("carousel.carousel-" + t.instanceUid, t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show(), !0 === e.options.autoplay && e.autoPlay()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.lazyLoad = function() {
            function t(t) {
                e("img[data-lazy]", t).each(function() {
                    var t = e(this),
                        n = e(this).attr("data-lazy");
                    t.load(function() {
                        t.animate({
                            opacity: 1
                        }, 200)
                    }).css({
                        opacity: 0
                    }).attr("src", n).removeAttr("data-lazy").removeClass("carousel-loading")
                })
            }
            var n, i, o, r, a = this;
            !0 === a.options.centerMode ? !0 === a.options.infinite ? (o = a.currentSlide + (a.options.slidesToShow / 2 + 1), r = o + a.options.slidesToShow + 2) : (o = Math.max(0, a.currentSlide - (a.options.slidesToShow / 2 + 1)), r = a.options.slidesToShow / 2 + 1 + 2 + a.currentSlide) : (o = a.options.infinite ? a.options.slidesToShow + a.currentSlide : a.currentSlide, r = o + a.options.slidesToShow, !0 === a.options.fade && (o > 0 && o--, r <= a.slideCount && r++)), n = a.$slider.find(".carousel-slide").slice(o, r), t(n), a.slideCount <= a.options.slidesToShow ? (i = a.$slider.find(".carousel-slide"), t(i)) : a.currentSlide >= a.slideCount - a.options.slidesToShow ? (i = a.$slider.find(".carousel-cloned").slice(0, a.options.slidesToShow), t(i)) : 0 === a.currentSlide && (i = a.$slider.find(".carousel-cloned").slice(-1 * a.options.slidesToShow), t(i))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("carousel-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.carouselNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.pause = t.prototype.carouselPause = function() {
            var e = this;
            e.autoPlayClear(), e.paused = !0
        }, t.prototype.play = t.prototype.carouselPlay = function() {
            var e = this;
            e.paused = !1, e.autoPlay()
        }, t.prototype.postSlide = function(e) {
            var t = this;
            t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, !0 === t.options.autoplay && !1 === t.paused && t.autoPlay()
        }, t.prototype.prev = t.prototype.carouselPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.progressiveLazyLoad = function() {
            var t, n, i = this;
            (t = e("img[data-lazy]", i.$slider).length) > 0 && (n = e("img[data-lazy]", i.$slider).first(), n.attr("src", n.attr("data-lazy")).removeClass("carousel-loading").load(function() {
                n.removeAttr("data-lazy"), i.progressiveLazyLoad(), !0 === i.options.adaptiveHeight && i.setPosition()
            }).error(function() {
                n.removeAttr("data-lazy"), i.progressiveLazyLoad()
            }))
        }, t.prototype.refresh = function() {
            var t = this,
                n = t.currentSlide;
            t.destroy(), e.extend(t, t.initials), t.init(), t.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !0)
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("carousel-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.carousel", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t])
        }, t.prototype.removeSlide = t.prototype.carouselRemove = function(e, t, n) {
            var i = this;
            if ("boolean" == typeof e ? (t = e, e = !0 === t ? 0 : i.slideCount - 1) : e = !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
            i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
        }, t.prototype.setCSS = function(e) {
            var t, n, i = this,
                o = {};
            !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
        }, t.prototype.setDimensions = function() {
            var e = this;
            if (!1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                    padding: "0px " + e.options.centerPadding
                }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                    padding: e.options.centerPadding + " 0px"
                })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth) e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".carousel-slide").length));
            else if (!0 === e.options.variableWidth) {
                var t = 0;
                e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.children(".carousel-slide").each(function() {
                    t += e.listWidth
                }), e.$slideTrack.width(Math.ceil(t) + 1)
            } else e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".carousel-slide").length));
            var n = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".carousel-slide").width(e.slideWidth - n)
        }, t.prototype.setFade = function() {
            var t, n = this;
            n.$slides.each(function(i, o) {
                t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                }) : e(o).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: 900,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.carouselSetOption = function(e, t, n) {
            var i = this;
            i.options[e] = t, !0 === n && (i.unload(), i.reinit())
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("carousel-vertical") : e.$slider.removeClass("carousel-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = null !== e.animType && !1 !== e.animType
        }, t.prototype.setSlideClasses = function(e) {
            var t, n, i, o, r = this;
            r.$slider.find(".carousel-slide").removeClass("carousel-active").attr("aria-hidden", "true").removeClass("carousel-center"), n = r.$slider.find(".carousel-slide"), !0 === r.options.centerMode ? (t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("carousel-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1, i + t + 2).addClass("carousel-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("carousel-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("carousel-center")), r.$slides.eq(e).addClass("carousel-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("carousel-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("carousel-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("carousel-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("carousel-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t, n, i, o = this;
            if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
                for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-carousel-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("carousel-cloned");
                for (t = 0; t < i; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-carousel-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("carousel-cloned");
                o.$slideTrack.find(".carousel-cloned").find("[id]").each(function() {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.selectHandler = function(t) {
            var n = this,
                i = parseInt(e(t.target).parents(".carousel-slide").attr("data-carousel-index"), 10);
            if (i || (i = 0), n.slideCount <= n.options.slidesToShow) return n.$slider.find(".carousel-slide").removeClass("carousel-active").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("carousel-active").attr("aria-hidden", "false"), !0 === n.options.centerMode && (n.$slider.find(".carousel-slide").removeClass("carousel-center"), n.$slides.eq(i).addClass("carousel-center")), void n.asNavFor(i);
            n.slideHandler(i)
        }, t.prototype.slideHandler = function(e, t, n) {
            var i, o, r, a = null,
                s = this;
            if (t = t || !1, (!0 !== s.animating || !0 !== s.options.waitForAnimate) && !(!0 === s.options.fade && s.currentSlide === e || s.slideCount <= s.options.slidesToShow)) {
                if (!1 === t && s.asNavFor(e), i = e, a = s.getLeft(i), r = s.getLeft(s.currentSlide), s.currentLeft = null === s.swipeLeft ? r : s.swipeLeft, !1 === s.options.infinite && !1 === s.options.centerMode && (e < 0 || e > s.getDotCount() * s.options.slidesToScroll)) return void(!1 === s.options.fade && (i = s.currentSlide, !0 !== n ? s.animateSlide(r, function() {
                    s.postSlide(i)
                }) : s.postSlide(i)));
                if (!1 === s.options.infinite && !0 === s.options.centerMode && (e < 0 || e > s.slideCount - s.options.slidesToScroll)) return void(!1 === s.options.fade && (i = s.currentSlide, !0 !== n ? s.animateSlide(r, function() {
                    s.postSlide(i)
                }) : s.postSlide(i)));
                if (!0 === s.options.autoplay && clearInterval(s.autoPlayTimer), o = i < 0 ? s.slideCount % s.options.slidesToScroll != 0 ? s.slideCount - s.slideCount % s.options.slidesToScroll : s.slideCount + i : i >= s.slideCount ? s.slideCount % s.options.slidesToScroll != 0 ? 0 : i - s.slideCount : i, s.animating = !0, s.$slider.trigger("beforeChange", [s, s.currentSlide, o]), s.currentSlide, s.currentSlide = o, s.setSlideClasses(s.currentSlide), s.updateDots(), s.updateArrows(), !0 === s.options.fade) return !0 !== n ? s.fadeSlide(o, function() {
                    s.postSlide(o)
                }) : s.postSlide(o), void s.animateHeight();
                !0 !== n ? s.animateSlide(a, function() {
                    s.postSlide(o)
                }) : s.postSlide(o)
            }
        }, t.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("carousel-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, n, i, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), i < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === o.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : "vertical"
        }, t.prototype.swipeEnd = function(e) {
            var t, n = this;
            if (n.dragging = !1, n.$slider.trigger("onSwipeEnd"), n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) switch (n.swipeDirection()) {
                case "left":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount("left")) : n.currentSlide + n.getSlideCount("left"), n.slideHandler(t), n.currentDirection = 0, n.touchObject = {}, n.$slider.trigger("swipe", [n, "left"]);
                    break;
                case "right":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount("right")) : n.currentSlide - n.getSlideCount("right"), n.slideHandler(t), n.currentDirection = 1, n.touchObject = {}, n.$slider.trigger("swipe", [n, "right"])
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function(e) {
            var t, n, i, o, r, a = this;
            if (r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !a.dragging || r && 1 !== r.length) return !1;
            if (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), "vertical" !== (n = a.swipeDirection())) {
                if (void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && e.preventDefault(), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.fade || !1 === a.options.touchMove) return !1;
                if (!0 === a.animating) return a.swipeLeft = null, !1;
                a.$slider.trigger("onSwipe", [a, a.swipeLeft, n]), a.setCSS(a.swipeLeft)
            }
        }, t.prototype.swipeStart = function(e) {
            var t, n = this;
            if (1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
        }, t.prototype.unfilterSlides = t.prototype.carouselUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".carousel-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass("carousel-slide carousel-active carousel-visible").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.uncarousel = function() {
            this.destroy()
        }, t.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && !0 !== e.options.infinite && e.slideCount > e.options.slidesToShow && (e.$prevArrow.removeClass("carousel-disabled"), e.$nextArrow.removeClass("carousel-disabled"), 0 === e.currentSlide ? (e.$prevArrow.addClass("carousel-disabled"), e.$nextArrow.removeClass("carousel-disabled")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("carousel-disabled"), e.$prevArrow.removeClass("carousel-disabled")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("carousel-disabled"), e.$prevArrow.removeClass("carousel-disabled")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("carousel-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("carousel-active").attr("aria-hidden", "false"))
        }, t.prototype.visibility = function() {
            var e = this;
            document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : (e.paused = !1, e.autoPlay())
        }, e.fn.carousel = function() {
            var e, n = this,
                i = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                r = n.length,
                a = 0;
            for (a; a < r; a++)
                if ("object" == typeof i || void 0 === i ? n[a].carousel = new t(n[a], i) : e = n[a].carousel[i].apply(n[a].carousel, o), void 0 !== e) return e;
            return n
        }, e(function() {
            e("[data-carousel]").carousel()
        })
    }), window.scrolling = function() {
        "use strict";
        var e = {},
            t = {},
            n = {
                fullViewport: ".full-viewport-info.unit",
                noScrolling: "html.no-scrolling"
            },
            i = {
                getScrollElement: function() {
                    var e = document.documentElement;
                    if (0 === e.scrollTop) {
                        var t = e.scrollTop;
                        ++e.scrollTop, e = t + 1 === e.scrollTop-- ? e : document.body
                    }
                    return $(n.fullViewport)[0] && $(n.noScrolling)[0] && (e = $(n.fullViewport)[0]), e
                },
                scrollTo: function(e, t) {
                    var n = i.getScrollElement();
                    this.scrollToC(n, n.scrollTop, e, t)
                },
                scrollToC: function(e, t, n, i) {
                    i < 0 || ("object" == typeof t && (t = $(t).offset().top), "object" == typeof n && (n = $(n).offset().top), this.scrollToX(e, t, n, 0, 1 / i, 20, this.easeOutCuaic))
                },
                scrollToX: function(e, t, n, o, r, a, s) {
                    o < 0 || o > 1 || r <= 0 || (e.scrollTop = t - (t - n) * s(o), o += r * a, setTimeout(function() {
                        i.scrollToX(e, t, n, o, r, a, s)
                    }, a))
                },
                easeOutCuaic: function(e) {
                    return --e * e * e + 1
                },
                getScrollPosition: function() {
                    return t.isMobile ? Math.abs(e.$viewport.offset().top) || Math.abs(window.pageYOffset) : window.pageYOffset
                },
                scrollHandler: function() {
                    var e, t = !0;
                    return function(n) {
                        t ? (i.update(), t = !1) : (window.clearTimeout(e), e = window.setTimeout(function() {
                            t = !0, i.update()
                        }, 5))
                    }
                }(),
                update: function() {
                    i.emitEvent(i.getScrollPosition())
                },
                emitEvent: function(e) {
                    $(document.body).trigger(new jQuery.Event("bodyscroll", {
                        position: e
                    }))
                },
                init: function() {
                    e.$viewport = function() {
                        var e;
                        return e = $('.viewport[variant="size"]'), e.length || (e = $(".viewport").eq(0)), e
                    }(), t.isMobile = window.innerWidth < 751, $([window, document.body]).on("scroll resize", i.scrollHandler), i.update()
                }
            };
        return $(i.init), i
    }(),
    function() {
        getElementPosition = function(e, t) {
            for (var n = {
                    top: void 0 !== t ? t.top || 0 : 0,
                    left: void 0 !== t ? t.left || 0 : 0
                }, i = 0, o = 0; e;) i += e.offsetLeft - e.scrollLeft + e.clientLeft, o += e.offsetTop - e.scrollTop + e.clientTop, e = e.offsetParent;
            return {
                x: i + n.left,
                y: o + n.top
            }
        }
    }(),
    function() {
        "use strict";
        var e, t, n;
        e = {}, t = {}, n = {
            container: ".overlay.container"
        }, t.overlay = {
            display: function(t) {
                if (t && t.activate) {
                    e.container.setAttribute("state", "active");
                    e.container.querySelectorAll(".unit");
                    [].slice.call($(e.container.querySelectorAll(".overlay.unit"))).forEach(function(e) {
                        e.hasAttribute("name") && e.getAttribute("name") == t.activate ? e.setAttribute("state", "active") : e.setAttribute("state", "")
                    }), e.container.querySelector(".back").setAttribute("state", ""), $(e.body).trigger("disableScrolling"), $(e.body).trigger("pauseVideo")
                }
            },
            remove: function(t) {
                window.setTimeout(function() {
                    e.container.setAttribute("state", "")
                }, 500), [].slice.call($(e.container.querySelectorAll(".overlay.unit"))).forEach(function(e) {
                    e.setAttribute("state", "")
                }), $(e.body).trigger("enableScrolling"), $(e.body).trigger("playVideo")
            }
        }, t.init = function(i) {
            e.window = window, e.body = document.querySelector("body"), e.container = e.body.querySelector(n.container), $(e.body).on("click", '[toggle="overlay"]', function(n) {
                var i;
                n.preventDefault();
                var o = n.currentTarget,
                    r = o.getAttribute("name"),
                    a = e.container.querySelector('.overlay [name="' + r + '"]');
                i = {
                    activate: r,
                    origen: o,
                    element: a
                }, a ? t.overlay.display(i) : t.overlay.remove(i), "language-overlay" == n.currentTarget.getAttribute("class") && (window.location.href = n.currentTarget.href)
            })
        }, $(t.init)
    }(),
    function() {
        ! function(e, t, n) {
            n = n || window;
            var i = !1,
                o = function() {
                    i || (i = !0, requestAnimationFrame(function() {
                        n.dispatchEvent(new CustomEvent(t)), i = !1
                    }))
                };
            n.addEventListener(e, o)
        }("resize", "optimizedResize")
    }();
var modules = window.modules = window.modules || {};
modules.iframeresizer = function() {
    "use strict";
    var e, t;
    return e = {
        container: "[data-iframe-resizer]",
        body: "body"
    }, t = {}, t.mount = function(t) {
        var n = t.querySelectorAll(e.container);
        return !(!n || !n.length) && (elements.viewport = t, !0)
    }, t.init = function(t) {
        var n = t.querySelectorAll(e.container);
        n && n.length && $(n).iFrameResize()
    }, t.unmount = function() {}, {
        mount: t.mount,
        init: t.init,
        unmount: t.unmount,
        selector: e.container
    }
}();
var coremodules = window.coremodules = window.coremodules || {};
coremodules.nav = function() {
    "use strict";
    var e, t, n, i, o;
    return e = {}, t = {}, n = {
        viewport: '.viewport[variant="live"]',
        unit: '.nav.unit:not([state*="removed"])',
        navItems: "li:not(:has(>.menu)) > a:not([toggle])",
        navItemsAll: "li > a:not([toggle])",
        logo: "a.logo",
        toggleNav: 'a[toggle="nav"]'
    }, i = {
        isFull: !0,
        isSwiping: !1
    }, o = {
        toggleNavigationOffsetY: 200
    }, t.expander = {
        clickHandler: function(e) {
            var n, i;
            i = e.currentTarget.parentNode, n = i.querySelector(".menu"), e.preventDefault(), n.style.maxHeight || (n.style.maxHeight = n.scrollHeight + "px"), (i.getAttribute("state") || "").match(/(active)/) && !i.querySelector("[state*='active']") ? t.expander.removeActiveState(i) : t.expander.applyActiveState(i), t.nav.setCurrentMenuItemState(e.delegateTarget)
        },
        applyActiveState: function(e) {
            e.setAttribute("state", ((e.getAttribute("state") || "") + " active").replace("  ", " ").trim())
        },
        removeActiveState: function(e) {
            "number" == typeof arguments[0] && (e = arguments[1]), e.setAttribute("state", (e.getAttribute("state") || "").replace(/(active)/gi, "").replace("  ", " ").trim())
        }
    }, t.scrolling = {
        scrollHandler: function() {
            var e, n = !0;
            return function(i) {
                n ? (t.scrolling.scrollUpdate(), n = !1) : (window.clearTimeout(e), e = window.setTimeout(function() {
                    n = !0, t.scrolling.scrollUpdate()
                }, 50))
            }
        }(),
        scrollUpdate: function() {
            i.active !== e.topnav || i.topIsFixed && !i.isMobile || (i.wasUp = i.isUp, i.wasDown = i.isDown, i.wasFull = i.isFull, i.isUp = i.scrollTop > t.scrolling.getScrollPosition(), i.isDown = !i.isUp, i.isFull = t.scrolling.getScrollPosition() < o.toggleNavigationOffsetY, i.scrollTop = t.scrolling.getScrollPosition(), !i.isFull || i.wasFull && 0 !== t.scrolling.getScrollPosition() ? i.isFull || (i.wasDown && i.isUp ? (t.nav.removeAllUpDownState(e.topnav), t.nav.removeUpDownState(e.topnav), t.viewport.applyActiveState(), i.hasSubmenu && $("[state='active'] > .cookies.unit").addClass("nav-subs")) : (i.wasFull || i.wasUp && i.isDown) && (i.hasHorizontalSubMenu ? t.nav.applyAllDownState(e.topnav) : t.nav.applyDownState(e.topnav), t.viewport.applyActiveState(), $("[state='active'] > .cookies.unit").addClass("no-nav"), i.hasSubmenu && $("[state='active'] > .cookies.unit").removeClass("nav-subs"))) : (t.nav.removeAllUpDownState(e.topnav), t.nav.removeUpDownState(e.topnav), t.viewport.applyActiveState(), $("[state='active'] > .cookies.unit").removeClass("no-nav").removeClass("nav-subs")))
        },
        resizeHandler: function() {
            var e, n = !0;
            return function(i) {
                n ? (t.scrolling.resizeUpdate(), n = !1) : (window.clearTimeout(e), e = window.setTimeout(function() {
                    n = !0, t.scrolling.resizeUpdate()
                }, 50))
            }
        }(),
        resizeUpdate: function(n) {
            n = n || {
                updateViewport: !0,
                updateNav: !0
            }, i.wasMobile = i.isMobile, i.isMobile = e.window.innerWidth < 751, i.isMobile ? (i.topIsFixed && t.scrolling.scrollUpdate(), i.active === e.sidenav && e.sidenav && (i.active = e.topnav, n.updateNav && t.nav.removeActiveState(e.subnav), n.updateNav && t.nav.removeActiveState(e.sidenav), n.updateNav && t.nav.applyActiveState(e.topnav), n.updateViewport && t.viewport.applyActiveState()), i.active !== e.topnav && i.active !== e.mobilenav && (i.active = e.topnav, n.updateNav && t.nav.applyActiveState(e.topnav), n.updateViewport && t.viewport.applyActiveState())) : e.sidenav ? i.active !== e.sidenav && (i.active = e.sidenav, n.updateNav && t.nav.applyActiveState(e.subnav), n.updateNav && t.nav.applyActiveState(e.sidenav), n.updateNav && t.nav.removeActiveState(e.topnav), n.updateViewport && t.viewport.applyActiveState()) : (i.topIsFixed && t.nav.removeUpDownState(e.topnav), i.active !== e.topnav && (i.active = e.topnav, n.updateNav && t.nav.applyActiveState(e.topnav), n.updateViewport && t.viewport.applyActiveState())), i.isMobile !== i.wasMobile && n.updateViewport && t.viewport.applyActiveState()
        },
        getScrollPosition: function(t) {
            return i.isMobile ? Math.abs(e.viewport.getBoundingClientRect().top) : e.window.pageYOffset
        }
    }, t.viewport = {
        applyActiveState: function() {
            i.active && i.active === e.sidenav ? (i.viewportState = "pushed-right", i.hasSubmenu && !i.isMobile && (i.viewportState = "pushed-right pushed-down-less")) : i.active && i.active === e.topnav ? i.hasSubmenu && !i.isMobile ? i.viewportState = "pushed-down-extra" : i.viewportState = "pushed-down" : i.active && i.active === e.mobilenav ? i.viewportState = "pushed-down pushed-left" : i.viewportState = "", "viewport" === e.viewport.className && "overlay" !== e.viewport.getAttribute("variant") && e.viewport.setAttribute("state", i.viewportState)
        },
        removeActiveState: function() {
            "viewport" === e.viewport.className && "overlay" !== e.viewport.getAttribute("variant") && e.viewport.setAttribute("state", "")
        }
    }, t.tests = {
        isUrlSameOrigen: function(e) {
            var t, n, i;
            return t = document.createElement("a"), t.setAttribute("href", e), n = t.protocol + "//" + t.hostname, i = n === document.location.protocol + "//" + document.location.hostname, t = null, i
        }
    }, t.googleTagManager = {
        logCarousel: function(e, t) {
            void 0 !== window.dataLayer && window.dataLayer.push({
                action: e,
                label: t,
                category: "Carousel",
                event: "interaction_carouselSwipes"
            })
        },
        logTopNavigation: function(e, t) {
            void 0 !== window.dataLayer && dataLayer.push({
                event: "interaction_header",
                events: {
                    category: "Sub headers",
                    action: e,
                    label: t
                }
            })
        },
        logSideNavigation: function(e, t) {
            void 0 !== window.dataLayer && dataLayer.push({
                event: "interaction_leftnavigation",
                events: {
                    category: "Left Navigation",
                    action: e,
                    label: t
                }
            })
        }
    }, t.nav = {
        clickHandler: function(n) {
            var r, a = {};
            if (n.preventDefault(), "#" === n.currentTarget.getAttribute("href").slice(0, 1)) {
                var s = n.currentTarget.getAttribute("href");
                if (s) {
                    var r = e.viewport.querySelector(s),
                        l = $(r).offset().top,
                        c = r.getBoundingClientRect().top < 0;
                    if (i.active === e.sidenav) var u = document.querySelector(".nav.unit[variant=sub]").clientHeight,
                        d = 0;
                    else var u = document.querySelector(".nav.unit[variant*=top] .bar.secondary").clientHeight,
                        d = document.querySelector(".nav.unit[variant*=top]").clientHeight;
                    (l < o.toggleNavigationOffsetY || i.topIsFixed) && (l -= d), (c || i.active === e.sidenav) && (l -= u), r && window.scrolling.scrollTo(Math.round(l), 1e3)
                }
                return void t.googleTagManager.logTopNavigation(n.currentTarget.href, n.currentTarget.text)
            }
            i.hasSubmenu && n.delegateTarget === e.topnav ? (r = n.currentTarget.parentElement, $('[state="active"]', r.parentElement).removeAttr("state"), r.setAttribute("state", "active"), a.animation = "slide", a.refreshNavs = !1, a.refreshNavTitle = !0, t.googleTagManager.logTopNavigation(n.currentTarget.href, n.currentTarget.text)) : n.delegateTarget !== e.mobilenav && n.delegateTarget !== e.sidenav || (a.animation = "fade", t.nav.setCurrentMenuItemState(e.mobilenav), t.googleTagManager.logSideNavigation(n.currentTarget.href, n.currentTarget.text)), a.url = n.currentTarget.href, a.target = n.currentTarget, t.tests.isUrlSameOrigen(a.url) ? a.windowName = n.currentTarget.getAttribute("target") : a.windowName = "_blank", $(e.body).trigger(new jQuery.Event("navigate", a))
        },
        applyActiveState: function(e) {
            i.active = e, e && e.setAttribute("state", ((e.getAttribute("state") || "").replace(/(active)/gi, "") + " active").replace("  ", " ").trim())
        },
        removeActiveState: function(e) {
            "number" == typeof arguments[0] && (e = arguments[1]), e && e.setAttribute("state", (e.getAttribute("state") || "").replace(/(active)/gi, "").replace("  ", " ").trim())
        },
        applyAllUpState: function(e) {
            t.nav.removeAllUpDownState(e), e.setAttribute("state", (e.getAttribute("state") || "") + " all-up")
        },
        applyAllDownState: function(e) {
            t.nav.removeAllUpDownState(e), e.setAttribute("state", (e.getAttribute("state") || "") + " all-down")
        },
        removeAllUpDownState: function(e) {
            e.setAttribute("state", (e.getAttribute("state") || "").replace(/(all-up|all-down)/gi, "").replace("  ", " ").trim())
        },
        applyUpState: function(e) {
            t.nav.removeUpDownState(e), e.setAttribute("state", (e.getAttribute("state") || "") + " up")
        },
        applyDownState: function(e) {
            t.nav.removeUpDownState(e), e.setAttribute("state", (e.getAttribute("state") || "") + " down")
        },
        removeUpDownState: function(e) {
            e.setAttribute("state", (e.getAttribute("state") || "").replace(/(up|down)/gi, "").replace("  ", " ").trim())
        },
        setCurrentMenuItemState: function(e) {
            var t = $("li", e),
                n = document.location.href;
            $(t).each(function(e, t) {
                var i = $(t).find("> a").attr("href"),
                    o = n.indexOf(i); - 1 != o && n.length == o + i.length && $(t).attr("state", "active").parents("li").attr("state", "active")
            })
        },
        mobileNavToggleHandler: function(n) {
            n.preventDefault(), i.isMobile ? i.active === e.mobilenav ? (i.active = e.topnav, window.isAndroidOld ? $(e.mobilenav).hide() : ($(e.body).trigger("enableScrolling"), t.nav.applyActiveState(e.topnav), t.nav.removeActiveState(e.mobilenav))) : (i.active = e.mobilenav, window.isAndroidOld ? $(e.mobilenav).show() : ($(e.body).trigger("disableScrolling"), t.nav.applyActiveState(e.mobilenav))) : ($(e.body).trigger("enableScrolling"), !document.referrer.match(document.location.hostname) && void 0 == window.history.state.from || document.referrer.match("/?returnurl=") ? $(e.body).trigger(new jQuery.Event("navigate", {
                url: this.href,
                windowName: this.getAttribute("target"),
                target: this
            })) : window.history.back())
        }
    }, t.init = function(o) {
        if ("viewport" === e.viewport.className) {
            i = {
                isFull: !0,
                topIsFixed: !1,
                hasHorizontalSubMenu: !1
            }, e.topnav = $(n.unit + '[variant*="top"]')[0], e.sidenav = $(n.unit + '[variant*="side"]')[0], e.subnav = $(n.unit + '[variant="sub"]')[0], e.mobilenav = $(n.unit + '[variant*="mobile"]')[0], e.logo = $(".logo"), e.toggleNav = $(n.toggleNav), e.topnav && (i.hasHorizontalSubMenu = !!e.topnav.querySelector(".submenu"), i.hasSubmenu = !!(e.topnav.getAttribute("variant") || "").match(/(sub)/), $(e.scrollElement).on("scroll", t.scrolling.scrollHandler), $(e.window).on("scroll", t.scrolling.scrollHandler), $(e.topnav).is("[variant*='fixed']") && (i.topIsFixed = !0)), e.sidenav && (i.hasSubmenu = !!e.subnav, $(e.sidenav).find(".menu .menu").each(function() {
                this.style.maxHeight || (this.style.maxHeight = this.scrollHeight + "px")
            }), $('li[state="active"]', e.sidenav).removeAttr("state"), t.nav.setCurrentMenuItemState(e.sidenav)), $(e.window).on("resize orientationchange", t.scrolling.resizeHandler), e.mobilenav && ($(e.mobilenav).on("click", ".carousel-unit > a", t.nav.clickHandler), $(e.mobilenav).on("click", "li:has(>.menu) > a", t.expander.clickHandler), $(e.mobilenav).on("click", '[toggle="overlay"]', t.nav.mobileNavToggleHandler), t.nav.setCurrentMenuItemState(e.mobilenav), $(".carousel", e.mobilenav).carousel({
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: !0,
                arrows: !1,
                infinite: !1
            }).on("swipe", function(e, t, n) {
                i.isSwiping = n
            }).on("afterChange", function(e, n, o, r) {
                i.isSwiping ? (t.googleTagManager.logCarousel("swipe", i.isSwiping), i.isSwiping = !1) : t.googleTagManager.logCarousel("click", o / 2)
            })), window.setTimeout(function() {
                try {
                    t.scrolling.resizeUpdate(), t.scrolling.scrollUpdate()
                } catch (e) {}
            }, 10);
            try {
                t.scrolling.resizeUpdate()
            } catch (e) {}
            return $(e.mobilenav).on("click", n.navItems, t.nav.clickHandler), $(e.topnav).on("click", n.navItemsAll, t.nav.clickHandler), $(e.sidenav).on("click", n.navItemsAll, t.nav.clickHandler), $(e.subnav).on("click", n.navItemsAll, t.nav.clickHandler), $(e.logo).on("click", t.nav.clickHandler), $(e.toggleNav).on("click", t.nav.mobileNavToggleHandler), !0
        }
        return !1
    }, t.mount = function(o) {
        return e.window = window, e.html = document.querySelector("html"), e.body = document.querySelector("body"), e.viewport = o || document.querySelector(n.viewport), e.scrollElement = window.scrolling.getScrollElement(), "viewport" === e.viewport.className && (e.topnav = $(n.unit + '[variant*="top"]')[0], e.sidenav = $(n.unit + '.nav[variant*="side"]')[0], e.subnav = $(n.unit + '[variant="sub"]')[0], e.mobilenav = $(n.unit + '.nav[variant*="mobile"]')[0], e.topnav && (i.hasHorizontalSubMenu = !!e.topnav.querySelector(".submenu"), i.hasSubmenu = !!(e.topnav.getAttribute("variant") || "").match(/(sub)/)), e.subnav && (i.hasSubmenu = !0), i.active = void 0, t.scrolling.resizeUpdate({
            updateNav: !1,
            updateViewport: !0
        }), !0)
    }, t.unmount = function() {
        $(e.window).off("resize orientationchange", t.scrolling.resizeHandler), $(e.scrollElement).off("scroll", t.scrolling.scrollHandler), $(e.window).off("scroll", t.scrolling.scrollHandler), $(e.body).off("click", '[toggle="nav"]', t.nav.mobileNavToggleHandler), $(e.topnav).off("click", n.navItems, t.nav.clickHandler),
            $(e.sidenav).off("click", n.navItems, t.nav.clickHandler), $(e.subnav).off("click", n.navItems, t.nav.clickHandler), $(e.mobilenav).off("click", n.navItems, t.nav.clickHandler), $(e.logo).off("click", t.nav.clickHandler), $(e.toggleNav).off("click", t.nav.clickHandler), [].slice.call($([e.topnav, e.sidenav, e.subnav, e.mobilenav])).forEach(function(e) {
                e && ("" === e.getAttribute("state") ? $(e).remove() : (e.setAttribute("state", "removed"), setTimeout(function() {
                    $(e).remove()
                }, 300)))
            })
    }, {
        init: t.init,
        mount: t.mount,
        unmount: t.unmount,
        selector: n.unit
    }
}();
var modules = window.modules = window.modules || {};
modules.footer = function() {
    "use strict";
    var e, t, n;
    return e = {}, t = {
        container: ".footer.container",
        unit: ".footer.unit",
        unitLinks: ".footer.unit a",
        menu: ".menu",
        footerMenu: ".footer .menu"
    }, n = {}, {}, n.footer = {
        clickHandler: function(t) {
            t.preventDefault(), $(e.body).trigger(new jQuery.Event("navigate", {
                url: t.currentTarget.href,
                windowName: t.currentTarget.getAttribute("target"),
                target: t.currentTarget
            }))
        }
    }, n.mount = function(n) {
        n = n || document.querySelector(t.viewport);
        var i = n.querySelectorAll(t.container);
        return !(!i || !i.length) && (e.window = window, e.body = document.querySelector("body"), e.viewport = n, e.footers = [].slice.call(i), !0)
    }, n.init = function(i) {
        $(t.footerMenu, e.footers).on("click", "[href]", n.footer.clickHandler)
    }, n.unmount = function() {
        e.footers && e.footers.length && ($(t.footerMenu, e.footers).off("click", "[href]", n.footer.clickHandler), e.footers = null)
    }, {
        mount: n.mount,
        init: n.init,
        unmount: n.unmount,
        selector: t.container
    }
}();
var modules = window.modules = window.modules || {};
modules.hero = function() {
    var e, t, n, i, o;
    return e = {}, t = {
        viewport: '.viewport[variant="live"]',
        container: ".hero.container",
        content: ".content",
        contentItems: ".placeholder > *",
        regular: ".background.regular",
        blurred: ".background.blurred",
        video: ".background.video",
        videoFrame: ".background.video iframe",
        placeholder: ".placeholder",
        overlay: ".overlay.container"
    }, n = {}, i = { in : [], within: [], out: []
    }, o = {
        videoInit: !1,
        videoPlay: !1
    }, n.scrolling = {
        scrollHandler: function() {
            var e, t = !0;
            return function(i) {
                t ? (n.scrolling.update(), t = !1) : (window.clearTimeout(e), e = window.setTimeout(function() {
                    t = !0, n.scrolling.update()
                }, 5))
            }
        }(),
        resizeHandler: function(e) {
            n.isMobile.setIsMobile(), n.scrolling.setDimmedSwitchPosition(), n.scrolling.update()
        },
        update: function() {
            o.scrollTop = n.scrolling.getScrollPositionY(), o.scrollTop < 220 ? (n.scrolling.applyWithin(), o.isFull && (n.scrolling.applyIn(), o.isFull = !1)) : o.isFull || (o.isFull = !0, n.scrolling.applyOut()), o.scrollTop >= o.dimmedSwitchPosition && !1 === o.isDimmed ? (n.dim(o.isDimmed), o.isDimmed = !0) : o.scrollTop < o.dimmedSwitchPosition && !0 === o.isDimmed && (n.dim(o.isDimmed), o.isDimmed = !1)
        },
        setDimmedSwitchPosition: function() {
            var t = e.viewport.offsetHeight;
            return o.dimmedSwitchPosition = t - document.documentElement.clientHeight - 80, o.dimmedSwitchPosition
        },
        getScrollPositionY: function() {
            return o.isMobile ? Math.abs($(e.viewport).offset().top) || Math.abs(e.window.pageYOffset) : e.window.pageYOffset
        },
        applyIn: function() {
            i.in.length && i.in.forEach(function(e) {
                e()
            })
        },
        applyWithin: function() {
            i.within.length && i.within.forEach(function(e) {
                e()
            })
        },
        applyOut: function() {
            i.out.length && i.out.forEach(function(e) {
                e()
            })
        }
    }, n.pauseVideo = function() {
        o.isOverlay = !0, o.isFull = !1, i.out.forEach(function(e) {
            e()
        })
    }, n.playVideo = function() {
        o.isOverlay = !1, o.isFull = !0, window.setTimeout(n.scrolling.update, 100)
    }, n.image = {
        applyOpacity: function(t) {
            e.blurredBackground.style.opacity = t.toFixed(2)
        },
        init: function() {
            i.within.push(function() {
                n.image.applyOpacity(o.scrollTop / 220)
            }), i.out.push(function() {
                n.image.applyOpacity(1)
            })
        }
    }, n.dim = function(t) {
        var n = e.hero.getAttribute("modifier") || "";
        t ? n = n.replace("dimmed", "") : n += " dimmed", n = n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), e.hero.setAttribute("modifier", n)
    }, n.video = {
        playerReadyHandler: function(t, r) {
            r.player.mute(), o.isFull ? (n.video.stop(r), n.video.remove(r)) : (r.player.mute(), r.player.playVideo()), !1 === o.videoInit && e.body.clientWidth > 400 && (i.in.push(function() {
                o.videoPlay && (n.video.display(r), n.video.start(r))
            }), i.within.push(function() {
                o.videoPlay || n.image.applyOpacity(o.scrollTop / 220)
            }), i.out.push(function() {
                o.videoPlay ? (n.video.remove(r), n.video.stop(r)) : n.image.applyOpacity(1)
            }), o.videoInit = !0), 1 === r.player.getPlayerState() && (o.videoPlay = !0, o.scrollTop = n.scrolling.getScrollPositionY(), o.scrollTop < 220 ? n.video.display(r) : n.video.stop(r))
        },
        playerChangeHandler: function(e, t) {
            1 === e.data ? (o.scrollTop = n.scrolling.getScrollPositionY(), o.scrollTop < 220 ? (o.videoPlay || (o.videoPlay = !0), n.video.display(t)) : (n.video.stop(t), n.video.remove(t))) : 0 !== e.data && -1 !== e.data || (o.videoPlay = !0, t.player.playVideo())
        },
        display: function(e) {
            e.container.querySelector(t.video).setAttribute("state", "active"), e.container.querySelector(t.regular).removeAttribute("state"), e.container.querySelector(t.blurred).removeAttribute("state"), e.container.querySelector(t.blurred).removeAttribute("style")
        },
        remove: function(e) {
            e.container.querySelector(t.video).removeAttribute("state"), e.container.querySelector(t.blurred).setAttribute("state", "active"), e.container.querySelector(t.blurred).removeAttribute("style")
        },
        start: function(e) {
            e.player.playVideo()
        },
        stop: function(e) {
            e.player.pauseVideo()
        },
        init: function(e) {
            var i, r;
            i = e.querySelector(t.videoFrame), o.youtubeApiLoaded.then(function(t) {
                o.count = o.count ? o.count + 1 : 1, i.id = new RegExp(/([a-z0-9]+)\?/gi).exec(i.getAttribute("data-src"))[1] + o.count.toString(), i.onload = function() {
                    new t.Player(i.id, {
                        events: {
                            onReady: function(t) {
                                r = t.target, n.video.playerReadyHandler(t, {
                                    container: e,
                                    element: i,
                                    player: r
                                })
                            },
                            onStateChange: function(t) {
                                n.video.playerChangeHandler(t, {
                                    container: e,
                                    element: i,
                                    player: r
                                })
                            }
                        }
                    })
                }, window.setTimeout(function() {
                    i.src = i.getAttribute("data-src").replace(/[\n\r\s]/gm, ""), i.removeAttribute("data-src")
                }, 10 * o.count)
            })
        }
    }, n.isMobile = {
        setIsMobile: function() {
            return o.isMobile = e.window.innerWidth < 751, o.isMobile
        }
    }, n.content = {
        clickHandler: function(t) {
            t.preventDefault();
            var i = $(t.currentTarget.parentElement).find(".title").text().replace(/^\s+|\s+$/gm, "");
            n.googleTagManager.logCTA(i), $(e.body).trigger(new jQuery.Event("navigate", {
                url: t.currentTarget.href
            }))
        },
        applyOpacity: function(t) {
            e.content.style.opacity = t.toFixed(2)
        },
        init: function() {
            i.within.push(function() {
                n.content.applyOpacity(Math.min(1.4 - o.scrollTop / 220, 1))
            }), i.out.push(function() {
                n.content.applyOpacity(.4)
            })
        }
    }, n.googleTagManager = {
        logCTA: function(e) {
            void 0 !== window.dataLayer && window.dataLayer.push({
                action: "hero",
                label: e,
                category: "Call to action",
                event: "interaction_CTA"
            })
        }
    }, n.mount = function(n) {
        n = n || document.querySelector(t.viewport);
        var r = n.querySelector(t.container);
        return !!r && (e.window = window, e.body = document.body, e.viewport = n, e.hero = r, i = { in : [], within: [], out: []
        }, o.videoInit = !1, e.regularBackground = e.hero.querySelector(t.regular), e.blurredBackground = e.hero.querySelector(t.blurred), e.videoBackground = e.hero.querySelector(t.video), e.overlayContainer = document.querySelector(t.overlay), e.heroPlaceholder = [].slice.call(e.hero.querySelectorAll(t.placeholder)), e.content = e.hero.querySelector(t.content), e.contentItems = [].slice.call(e.hero.querySelectorAll(t.contentItems)), !0)
    }, n.init = function(i) {
        return i = i || document.querySelector(t.viewport), !!i.querySelector(t.container) && (n.scrolling.setDimmedSwitchPosition(), o.isDimmed = !1, e.videoBackground && document.body.clientWidth > 700 ? (o.youtubeApiLoaded = new Promise(function(e, t) {
            window.YT && window.YT.Player ? e(window.YT) : window.onYouTubeIframeAPIReady = function(t) {
                return function() {
                    "function" == typeof t && t(), e(window.YT)
                }
            }(window.onYouTubeIframeAPIReady)
        }), n.video.init(e.hero)) : e.blurredBackground && n.image.init(e.hero), e.contentItems && e.contentItems.length && !window.isWindowsPhone && n.content.init(), $([e.window, e.body]).on("scroll", n.scrolling.scrollHandler), $(e.window).on("resize", n.scrolling.resizeHandler), n.isMobile.setIsMobile(), n.scrolling.update(), $(e.body).on("pauseVideo", n.pauseVideo), $(e.body).on("playVideo", n.playVideo), $(e.hero).on("click", t.content + " [href]", n.content.clickHandler), !0)
    }, n.render = function(e) {
        return e = e || document.querySelector(t.viewport), !!e.querySelector(t.container) && (n.scrolling.resizeHandler(), !0)
    }, n.unmount = function() {
        e.hero && ($(e.window).off("scroll", n.scrolling.scrollHandler), $(e.window).off("resize", n.scrolling.resizeHandler), $(e.body).off("pauseVideo", n.pauseVideo), $(e.body).off("playVideo", n.playVideo), $(e.hero).off("click", t.content + " [href]", n.content.clickHandler), e.hero = null)
    }, {
        mount: n.mount,
        init: n.init,
        render: n.render,
        unmount: n.unmount,
        selector: t.container
    }
}();
var modules = window.modules = window.modules || {};
modules["media-gallery"] = function() {
    "use strict";
    var e, t, n, i;
    return e = {}, t = {}, i = {
        variant: void 0,
        isSwiping: !1,
        isClicking: !1,
        animating: !1
    }, n = {
        viewport: '.viewport[variant="live"]',
        container: ".media-gallery.container",
        mediaUnit: ".media.unit",
        mediaGalleryUnit: ".media-gallery.unit",
        mediaContainer: ".media.container",
        mediaContent: ".content",
        toolContainerRight: ".tool.container.right",
        toolContainerLeft: ".tool.container.left"
    }, t.viewport = {
        resizeHandler: function() {
            i.isMobile = e.window.innerWidth < 700, t.gallery.testVariant(), "slides" === i.variant && e.galleries.forEach(t.gallery.reposition)
        }
    }, t.drag = {
        moveHandler: function(e) {
            !i.isMobile && i.scrollElement && (e.originalEvent.screenX || e.originalEvent.touches[0].screenX) && (i.scrollXPosition = e.originalEvent.screenX || e.originalEvent.touches[0].screenX, i.scrollYPosition = e.originalEvent.screenY || e.originalEvent.touches[0].screenY, i.scrollXDelta = i.scrollXBase - i.scrollXPosition, i.scrollYDelta = i.scrollYBase - i.scrollYPosition, i.isScrolling || 0 === i.scrollXDelta || (i.isScrolling = !0), Math.abs(i.scrollXDelta) > Math.abs(i.scrollYDelta) && (e.preventDefault(), i.scrollXBase = e.originalEvent.screenX || e.originalEvent.touches[0].screenX, i.scrollYBase = e.originalEvent.screenY || e.originalEvent.touches[0].screenY, i.scrollElement.scrollLeft = i.scrollElement.scrollLeft + i.scrollXDelta))
        },
        startHandler: function(e) {
            i.isMobile || (i.scrollElement = e.originalEvent.currentTarget.querySelector(".media-gallery.unit"), i.scrollXBase = e.originalEvent.screenX || e.originalEvent.touches[0].screenX, i.scrollYBase = e.originalEvent.screenY || e.originalEvent.touches[0].screenY, i.scrollXStart = i.scrollElement.scrollLeft, i.scrollYStart = i.scrollElement.scrollTop, i.scrollXDelta = 0, i.scrollYDelta = 0)
        },
        endHandler: function(e) {
            if (!i.isMobile && i.isScrolling) {
                var n = i.scrollXStart > i.scrollElement.scrollLeft ? "left" : "right";
                t.gallery.moveTo(t.gallery.determinSlide({
                    element: i.scrollElement,
                    direction: n
                })), t.googleTagManager.logCarousel("swipe", n)
            }
            setTimeout(function() {
                i.isScrolling = !1, i.scrollElement = void 0, i.scrollDelta = 0
            }, 12)
        },
        preventDefault: function(e) {
            e.preventDefault()
        },
        beforeChangeHandler: function(e, n, i, o) {
            try {
                window.wow.showBatch(t.media.getVisibleUnits(n.$slides[o], {
                    showNextSlide: !1
                }))
            } catch (e) {}
        }
    }, t.media = {
        clickHandler: function(t) {
            t.preventDefault(), t.currentTarget.href && (i.isScrolling || $(e.body).trigger(new jQuery.Event("navigate", {
                url: t.currentTarget.href,
                animation: "blurin",
                target: t.currentTarget.querySelector(n.mediaContent)
            })))
        },
        activate: function(e) {
            window.nodelistToArray(e.parentElement.querySelectorAll("[state]")).forEach(function(e) {
                e.removeAttribute("state")
            }), e.setAttribute("state", "active")
        },
        highlite: function(e) {
            window.nodelistToArray(e.parentElement.querySelectorAll("[state]")).forEach(function(e) {
                "active" === e.getAttribute("state") ? e.setAttribute("state", "faded") : e.removeAttribute("state")
            }), e.getAttribute("state") || e.setAttribute("state", "highlite")
        },
        getVisibleUnits: function(e, t) {
            var n, i, o;
            if (t || (t = {
                    showNextSlide: !0
                }), i = window.nodelistToArray(e.querySelectorAll(".wow")).filter(function(e) {
                    return -1 === e.getAttribute("class").indexOf("animated")
                }), t.showNextSlide && (n = e.nextElementSibling)) switch (o = window.nodelistToArray(n.querySelectorAll(".wow")), n.getAttribute("variant")) {
                case "pattern1":
                case "pattern3":
                case "pattern6":
                case "pattern8":
                    i.push(o[0], o[1]);
                    break;
                case "pattern2":
                case "pattern4":
                case "pattern5":
                    i.push(o[0]);
                    break;
                case "pattern7":
                    i.push(o[0], o[2])
            }
            return i
        }
    }, t.tool = {
        clickHandler: function(e) {
            e.preventDefault(), i.isClicking = !0;
            var n = e.originalEvent.currentTarget.querySelector(".media-gallery.unit");
            e.currentTarget.href.includes("right") ? t.gallery.moveTo(t.gallery.determinSlide({
                element: n,
                direction: "right"
            })) : t.gallery.moveTo(t.gallery.determinSlide({
                element: n,
                direction: "left"
            }))
        },
        hoverHandler: function(e) {
            var n = e.delegateTarget.querySelector(".media-gallery.unit");
            i.animating || ("mouseenter" === e.type ? t.media.highlite(t.gallery.determinSlide({
                element: n,
                reach: 1.2,
                direction: e.currentTarget.href.match(/#\!(.*)/)[1]
            })) : t.media.activate(t.gallery.determinSlide({
                element: n,
                reach: .5,
                direction: e.currentTarget.href.match(/#\!(.*)/)[1]
            })))
        },
        setCounter: function(e) {
            e.element.querySelector('[output="index"]').innerHTML = e.index, t.tool.hideRightContainer(e), t.tool.hideLeftContainer(e), i.isClicking && (t.googleTagManager.logCarousel("click", e.index - 1), i.isClicking = !1)
        },
        hideLeftContainer: function(e) {
            1 === e.index ? e.element.querySelector(n.toolContainerLeft).setAttribute("state", "hidden") : e.element.querySelector(n.toolContainerLeft).setAttribute("state", "")
        },
        hideRightContainer: function(e) {
            var t = e.element.querySelector(n.toolContainerRight);
            "hidden" === t.getAttribute("state") && t.setAttribute("state", ""), e.index === e.element.querySelectorAll(n.mediaContainer).length && t.setAttribute("state", "hidden")
        }
    }, t.gallery = {
        moveTo: function(e) {
            if (e && e.parentElement) {
                i.animating = !0, $(e.parentElement).animate({
                    scrollLeft: e.offsetLeft + 10
                }, function() {
                    i.animating = !1
                }), t.media.activate(e);
                try {
                    t.tool.setCounter({
                        element: e.parentElement.parentElement,
                        index: [].indexOf.call(e.parentElement.children, e) + 1
                    })
                } catch (e) {}
                try {
                    window.wow.showBatch(t.media.getVisibleUnits(e))
                } catch (e) {}
            }
        },
        determinSlide: function(e) {
            var t = e.element.getBoundingClientRect(),
                n = window.nodelistToArray(e.element.querySelectorAll(".media.container")).filter(function(n) {
                    var i = n.getBoundingClientRect();
                    return Math.abs(i.left) <= t.width * (e.reach || 1.2)
                });
            return "left" === e.direction ? n[0] : n[n.length - 1]
        },
        reposition: function(e) {
            t.gallery.moveTo(t.gallery.determinSlide({
                element: e,
                direction: "left"
            }))
        },
        testVariant: function() {
            !i.isMobile || "slides" !== i.variant && void 0 !== i.variant ? i.isMobile || "scroll" !== i.variant && void 0 !== i.variant || (i.variant = "slides") : i.variant = "scroll", t.gallery.switchVariant()
        },
        switchVariant: function(t) {
            void 0 !== t && (i.variant = t), e.galleries.forEach(function(e) {
                e.querySelectorAll(n.mediaContainer).length > 1 ? e.setAttribute("variant", i.variant) : e.setAttribute("variant", "")
            })
        }
    }, t.googleTagManager = {
        logCarousel: function(e, t) {
            void 0 !== window.dataLayer && window.dataLayer.push({
                event: "interaction_carouselSwipes",
                category: "Carousel",
                action: e,
                label: t
            })
        }
    }, t.mount = function(t) {
        t = t || document.querySelector(n.viewport);
        var i = t.querySelectorAll(".media-gallery.container");
        return !(!i || !i.length) && (e.window = window, e.body = document.querySelector("body"), e.viewport = t, e.galleries = window.nodelistToArray(i), $(".media.container:not(:first-child) .media.unit", e.galleries).removeClass("fadeInUp").addClass("fadeInRight"), !0)
    }, t.init = function(o) {
        o = o || document.querySelector(n.viewport);
        var r = o.querySelectorAll(".media-gallery.container");
        return !(!r || !r.length) && (i.isMobile = e.window.innerWidth < 700, i.isMobile ? e.galleries.forEach(function(e) {
            $(".carousel", e).carousel({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0,
                arrows: !1,
                infinite: !1,
                stacked: !0
            }).on("beforeChange", t.drag.beforeChangeHandler).on("swipe", function(e, t, n) {
                i.isSwiping = n
            }).on("afterChange", function(e, n, o, r) {
                i.isSwiping ? (t.googleTagManager.logCarousel("swipe", i.isSwiping), i.isSwiping = !1) : t.googleTagManager.logCarousel("click", o)
            })
        }) : ($(e.galleries).on("touchstart mousedown", t.drag.startHandler), $(e.galleries).on("touchmove mousemove", t.drag.moveHandler), $(e.body).on("touchend mouseup", t.drag.endHandler), $(e.galleries).on("dragstart select", t.drag.preventDefault), $(e.galleries).on("click", ".tool.button", t.tool.clickHandler), $(e.galleries).on("mouseenter mouseleave", ".tool.button", t.tool.hoverHandler)), $(e.galleries).on("click", ".media.unit", t.media.clickHandler), $(e.window).on("resize orientationchange", t.viewport.resizeHandler), t.viewport.resizeHandler(), !0)
    }, t.render = function(e) {
        e = e || document.querySelector(n.viewport);
        var t = e.querySelectorAll(".media-gallery.container");
        return !(!t || !t.length)
    }, t.unmount = function() {
        e.galleries && e.galleries.length && ($(e.body).off("touchend mouseup", t.drag.endHandler), $(e.window).off("resize orientationchange", t.viewport.resizeHandler), $(e.galleries).off("touchstart mousedown", t.drag.startHandler), $(e.galleries).off("touchmove mousemove", t.drag.moveHandler), $(e.galleries).off("dragstart select", t.drag.preventDefault), $(e.galleries).off("click", ".media.unit", t.media.clickHandler), $(e.galleries).off("click", ".tool.button", t.tool.clickHandler), $(e.galleries).off("mouseenter mouseleave", ".tool.button", t.tool.hoverHandler), e.galleries = null)
    }, {
        mount: t.mount,
        init: t.init,
        render: t.render,
        unmount: t.unmount,
        selector: n.container
    }
}();
var modules = window.modules = window.modules || {};
modules["navigation-tiles"] = function() {
    "use strict";
    var e, t, n;
    return e = {}, t = {
        viewport: '.viewport[variant="live"]',
        container: ".navigation-tiles.container",
        media: ".media.container",
        mediaUnit: "a.media.unit",
        mediaContent: ".content"
    }, n = {}, {}, {}, n.tile = {
        resizeHandler: function(e) {
            e.packeryInstance.layout(), window.setTimeout(function() {
                $(window).trigger("resize")
            }, 50)
        },
        layoutHandler: function(e) {
            e.element.parentElement.setAttribute("state", "initialized")
        }
    }, n.media = {
        clickHandler: function(t) {
            t.preventDefault();
            var i = $(t.currentTarget.querySelector(".title")).text().replace(/^\s+|\s+$/gm, ""),
                o = $(".navigation-tiles.container .media.unit").index(t.currentTarget);
            n.googleTagManager.logNavTile(i, o), $(e.body).trigger(new jQuery.Event("navigate", {
                url: t.currentTarget.href,
                animation: "blurin",
                windowName: t.currentTarget.getAttribute("target"),
                target: t.currentTarget.querySelector(".content")
            }))
        }
    }, n.googleTagManager = {
        logNavTile: function(e, t) {
            void 0 !== window.dataLayer && window.dataLayer.push({
                action: e,
                label: t,
                category: "Navigation tiles",
                event: "interaction_navTile"
            })
        }
    }, n.mount = function(n) {
        e.window = window, e.body = document.querySelector("body"), e.viewport = n || document.querySelector(t.viewport);
        var i = e.viewport.querySelectorAll(t.container + '[variant="auto"]');
        return i && i.length ? (e.navigationTiles = [].slice.call(i), !0) : (e.navigationTiles = [], !1)
    }, n.init = function(i) {
        i = i || document.querySelector(t.viewport);
        var o = i.querySelectorAll(t.container + '[variant="auto"]');
        return !(!o || !o.length) && (e.window = window, e.body = document.querySelector("body"), e.viewport = i, e.navigationTiles = [].slice.call(o), e.navigationTiles.forEach(function(e) {
            var i = e.querySelector(t.media),
                o = window.Packery.data(i) || new window.Packery(i);
            o.once("layoutComplete", n.tile.layoutHandler), window.addResizeListener(e, function(e) {
                n.tile.resizeHandler({
                    element: i,
                    packeryInstance: o
                })
            }), window.setTimeout(function() {
                o.layout()
            }, 1250)
        }), $(e.navigationTiles).on("click", t.mediaUnit, n.media.clickHandler), !0)
    }, n.render = function(t) {
        return !(!e.navigationTiles || !e.navigationTiles.length)
    }, n.unmount = function() {
        e.navigationTiles && e.navigationTiles.length && ($(e.navigationTiles).off("click", t.mediaUnit, n.media.clickHandler), e.navigationTiles = null)
    }, {
        mount: n.mount,
        init: n.init,
        render: n.render,
        unmount: n.unmount,
        selector: t.container
    }
}();
var modules = window.modules = window.modules || {};
modules.background = function() {
    "use strict";
    var e, t, n, i, o;
    return e = {}, t = {
        viewport: '.viewport[variant="live"]',
        container: ".background.container",
        unit: ".background.unit",
        regular: ".regular",
        blurred: ".blurred"
    }, n = {}, i = {}, o = {}, n.blur = function(e) {
        e.querySelector(t.regular).setAttribute("state", ""), e.querySelector(t.blurred).setAttribute("state", "active")
    }, n.scrolling = {
        scrollHandler: function() {
            var e, t = !0;
            return function(i) {
                t ? (n.scrolling.update(), t = !1) : (window.clearTimeout(e), e = window.setTimeout(function() {
                    t = !0, n.scrolling.update()
                }, 10))
            }
        }(),
        resizeHandler: function() {
            n.isMobile.setIsMobile(), n.scrolling.setDimmedSwitchPosition()
        },
        update: function() {
            var e = n.scrolling.getScrollPositionY();
            e >= i.dimmedSwitchPosition && !1 === i.isDimmed ? (n.dim(i.isDimmed), i.isDimmed = !0) : e < i.dimmedSwitchPosition && !0 === i.isDimmed && (n.dim(i.isDimmed), i.isDimmed = !1)
        },
        setDimmedSwitchPosition: function() {
            var t = e.viewport.offsetHeight;
            return i.dimmedSwitchPosition = t - document.documentElement.clientHeight - 80, i.dimmedSwitchPosition
        },
        getScrollPositionY: function() {
            return i.isMobile ? Math.abs($(e.viewport).offset().top) : e.window.pageYOffset
        }
    }, n.isMobile = {
        setIsMobile: function() {
            return i.isMobile = e.window.innerWidth < 751, i.isMobile
        }
    }, n.dim = function(t) {
        e.backgrounds.forEach(function(e) {
            var n = e.getAttribute("modifier") || "";
            t ? n = n.replace("dimmed", "") : n += " dimmed", n = n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), e.setAttribute("modifier", n)
        })
    }, n.mount = function(n) {
        n = n || document.querySelector(t.viewport);
        var i = n.querySelectorAll(t.container);
        return !(!i || !i.length) && (o = o || {}, e.window = window, e.body = document.body, e.viewport = n, e.backgrounds = [].slice.call(i), !0)
    }, n.init = function() {
        return !(!e.backgrounds || !e.backgrounds.length) && (i.isDimmed = !1, $([e.window, e.body]).on("scroll", n.scrolling.scrollHandler), $(e.window).on("resize", n.scrolling.resizeHandler), n.isMobile.setIsMobile(), n.scrolling.setDimmedSwitchPosition(), n.scrolling.update(), e.backgrounds.filter(function(e) {
            return e.querySelector(t.blurred)
        }).forEach(n.blur), !0)
    }, n.unmount = function() {
        e.backgrounds && e.backgrounds.length && ($([e.window, e.body]).off("scroll", n.scrolling.scrollHandler), $(e.window).off("resize", n.scrolling.resizeHandler), e.backgrounds = null)
    }, {
        mount: n.mount,
        init: n.init,
        unmount: n.unmount,
        selector: t.container
    }
}();
var modules = window.modules = window.modules || {};
modules.trigger = function() {
    "use strict";
    var e, t, n, i;
    return e = {}, t = {
        viewport: '.viewport[variant="live"]',
        container: ".trigger.container",
        regular: ".regular",
        video: ".video",
        videoFrame: ".video iframe",
        toggleButton: ".switch a"
    }, n = {}, i = {}, {}, n.toggle = {
        clickHandler: function(e) {
            e.preventDefault(), n.container.toggleState({
                element: e.currentTarget.parentElement.parentElement.parentElement,
                state: "switched"
            })
        }
    }, n.container = {
        toggleState: function(e) {
            var t = e.element.getAttribute("state");
            t && t.includes(e.state) ? (t = t.replace(e.state, ""), t ? e.element.setAttribute("state", t.replace(e.state, "")) : e.element.removeAttribute("state")) : (t = t ? t + " " : "", e.element.setAttribute("state", t + e.state))
        }
    }, n.trigger = {
        clickHandler: function(e) {
            e.preventDefault();
            var t = e.currentTarget.parentElement.parentElement,
                i = $(t).is("[variant*='video']"),
                o = $(t).find(".title").text().replace(/^\s+|\s+$/gm, "");
            n.googleTagManager.logCTA(o), i ? n.startVideo(t) : n.navigate(e.currentTarget)
        }
    }, n.navigate = function(t) {
        $(e.body).trigger(new jQuery.Event("navigate", {
            url: t.href,
            animation: "blurin",
            windowName: t.getAttribute("target"),
            target: t.parentElement.querySelector(".background")
        }))
    }, n.startVideo = function(e) {
        console.info(e), e.querySelector(".background.regular") && e.querySelector(".background.regular").setAttribute("state", ""), e.querySelector(".video").setAttribute("state", "active"), e.querySelector(".button").setAttribute("state", "hidden"), e.querySelector(".link").setAttribute("state", "hidden"), n.videoInline.initVideo(e)
    }, n.videoInline = {
        initYouTubeApi: function() {
            i.youtubeApiLoaded = new Promise(function(e, t) {
                if (window.YT && window.YT.Player) e(window.YT);
                else {
                    var n = function(t) {
                        return function() {
                            "function" == typeof t && t(), e(window.YT)
                        }
                    }(window.onYouTubeIframeAPIReady);
                    window.onYouTubeIframeAPIReady = n
                }
            }), i.youtubeApiLoaded.then(function(e) {
                i.YT = e
            })
        },
        initVideo: function(e) {
            var t, o = $(e).find(".trigger__youtube-holder");
            if (i.player && (i.player.destroy(), i.player = !1), o.attr("data-youtube-id") && i.YT) {
                var r = o.attr("data-youtube-id");
                i.video = new i.YT.Player("youtube-holder-" + r, {
                    height: "563",
                    width: "1000",
                    videoId: r,
                    playerVars: {
                        html5: 1,
                        modestbranding: 1,
                        rel: 0,
                        showinfo: 0,
                        wmode: "opaque",
                        controls: 1,
                        loop: 1,
                        playlist: r
                    },
                    events: {
                        onReady: function(e) {
                            i.player = e.target, t = e.target.getIframe(), n.videoInline.playerReadyHandler(e, {
                                iframe: t,
                                player: i.player
                            })
                        }
                    }
                })
            }
        },
        playerReadyHandler: function(e, t) {
            ! function() {
                (t.player.getPlayerState() === YT.PlayerState.CUED || t.player.getPlayerState() === YT.PlayerState.PAUSED && e.target.c.dataset.pauseByCode) && (t.player.unMute(), t.player.playVideo(), e.target.c.dataset.pauseByCode && delete e.target.c.dataset.pauseByCode)
            }()
        }
    }, n.googleTagManager = {
        logCTA: function(e) {
            void 0 !== window.dataLayer && window.dataLayer.push({
                action: "trigger",
                label: e,
                category: "Call to action",
                event: "interaction_CTA"
            })
        }
    }, n.mount = function(n) {
        n = n || document.querySelector(t.viewport);
        var i = n.querySelectorAll(t.container);
        return !(!i || !i.length) && (e.window = window, e.body = document.querySelector("body"), e.viewport = n, e.triggers = [].slice.call(i), !0)
    }, n.init = function(i) {
        i = i || document.querySelector(t.viewport);
        var o = i.querySelectorAll(t.container);
        return !(!o || !o.length) && ($(e.viewport).on("click", t.toggleButton, n.toggle.clickHandler), e.triggers.forEach(function(e) {
            $(e).on("click", ".link", n.trigger.clickHandler)
        }), !0)
    }, n.render = function(e) {
        e = e || document.querySelector(t.viewport);
        var i = e.querySelectorAll(t.container);
        return !(!i || !i.length) && (n.videoInline.initYouTubeApi(), !0)
    }, n.unmount = function() {
        e.triggers && e.triggers.length && ($(e.viewport).off("click", t.toggleButton, n.toggle.clickHandler), e.triggers.forEach(function(e) {
            $(e).off("click", ".link", n.trigger.clickHandler)
        }), e.triggers = null)
    }, {
        mount: n.mount,
        init: n.init,
        render: n.render,
        unmount: n.unmount,
        selector: t.container
    }
}();
var modules = window.modules = window.modules || {};
modules.faq = function() {
    "use strict";
    var e, t, n;
    return e = {}, t = {}, {}, n = {
        viewport: '.viewport[variant="live"]',
        container: ".faq.container",
        unit: ".faq.unit",
        listcontainer: ".list.container",
        listUnit: ".list.unit",
        listUnitTitle: ".title",
        listUnitButton: ".button",
        menuContainer: ".menu.container",
        menuUnit: ".menu.unit"
    }, t.menu = {
        clickHandler: function(e) {
            e.preventDefault();
            var n = e.currentTarget,
                i = n.href.replace("#!", "");
            t.results.filterLists({
                name: i
            }), t.menu.activateItem({
                element: n
            }), window.scrolling.update()
        },
        activateItem: function(e) {
            [].slice.call(e.element.parentElement.querySelectorAll('[state="active"]') || []).forEach(function(e) {
                e.removeAttribute("state")
            }), e.element.setAttribute("state", "active")
        },
        noItems: function() {
            0 === e.menuContainer.querySelectorAll(".unit").length && e.menuContainer.setAttribute("variant", "no-result")
        }
    }, t.results = {
        clickHandler: function(e) {
            e.preventDefault();
            var t = e.currentTarget.parentNode,
                n = t.getAttribute("state") ? "" : "active";
            t.setAttribute("state", n)
        },
        filterLists: function(t) {
            e.listContainers.forEach(function(e) {
                t.name.includes(e.getAttribute("variant")) || t.name.includes("*") ? e.setAttribute("state", "active") : e.setAttribute("state", "hidden")
            })
        },
        showTitles: function(t) {
            e.listContainers.forEach(function(e) {
                [].slice.call($(e).children()).forEach(function(e) {
                    "title" === e.getAttribute("class") ? e.setAttribute("state", "hidden") : e.setAttribute("state", "")
                })
            })
        },
        filterItems: function(n) {
            var i = 0;
            e.listContainers.forEach(function(e) {
                [].slice.call($(".list.unit", e)).forEach(function(e) {
                    (e.textContent || e.innerText).toLowerCase().includes(n.input.toLowerCase()) ? (e.setAttribute("matched", "true"), i++) : e.setAttribute("matched", "false")
                }), [].slice.call($(".title", e)).forEach(function(e) {
                    $(e).nextUntil('[variant="' + e.getAttribute("variant") + '"]', '.list.unit[matched="true"]').length < 1 ? e.setAttribute("state", "hidden") : e.setAttribute("state", "")
                })
            }), 0 === i ? (t.results.noMatches(), t.results.messageNumberMatched(i)) : (t.results.hasMatches(), t.results.messageNumberMatched(i))
        },
        messageNumberMatched: function(t) {
            var n, i = e.searchInput.value,
                o = e.resultNumberContainer.getAttribute("data-result-txt").split(","),
                r = "";
            t ? (n = 0, r = t + " ") : n = 1, r += o[n], e.resultNumberContainer.innerHTML = r + ' "' + $("<div/>").text(i).html() + '"', e.resultNumberContainer.setAttribute("state", "active")
        },
        noMatches: function() {
            e.noResult.setAttribute("variant", "no-result"), e.bottomtext.setAttribute("state", "hidden")
        },
        hasMatches: function() {
            e.noResult.setAttribute("variant", "result"), e.bottomtext.setAttribute("state", "active")
        }
    }, t.search = {
        submitHandler: function(e) {
            e.preventDefault()
        },
        changeHandler: function(n) {
            var i = e.searchInput.value;
            t.results.filterItems({
                input: i
            }), t.search.emptyInput({
                input: i
            }), window.wow.scrollHandler({
                position: window.scrolling.getScrollPosition()
            }), window.wow.scrollCallback()
        },
        emptyInput: function(n) {
            var i;
            0 === n.input.trim().length ? (t.search.setAllFiltersInActive(), e.menuContainer.children[0].setAttribute("state", "active"), i = "result", e.resultNumberContainer.setAttribute("state", "hidden"), e.listContainers.forEach(function(e) {
                [].slice.call($(e).children()).forEach(function(t) {
                    t.setAttribute("state", ""), e.setAttribute("state", "active")
                })
            })) : (e.listContainers.forEach(function(e) {
                e.setAttribute("state", "active")
            }), i = "no-result"), e.menuContainer.setAttribute("variant", i)
        },
        setAllFiltersInActive: function() {
            [].slice.call($(".unit", e.menuContainers[0])).forEach(function(e) {
                e.setAttribute("state", "")
            })
        }
    }, t.hashNavigation = {
        init: function(e) {
            for (var n = window.location.hash.replace("#", ""), i = document.querySelectorAll('[variant="' + n + '"], [id="' + n + '"]'), o = 0; o < i.length; o++) {
                var r = t.hashNavigation.getElementType(i[o]);
                "list-container" === r && t.results.filterLists({
                    name: n
                }), "menu" === r && t.menu.activateItem({
                    element: i[o]
                })
            }
        },
        getElementType: function(e) {
            return e.classList.contains("list") && e.classList.contains("container") ? "list-container" : e.classList.contains("title") ? "title" : e.classList.contains("menu") ? "menu" : void 0
        }
    }, t.mount = function(t) {
        t = t || document.querySelector(n.viewport);
        var i = t.querySelector(n.container);
        return !!i && (e.window = window, e.body = document.querySelector("body"), e.viewport = t, e.faq = i, !0)
    }, t.init = function() {
        return !!e.faq && (e.unit = [].slice.call($(n.unit, e.faq)), e.listContainer = $(".list.container", e.unit)[0], e.listContainers = [].slice.call($(n.listcontainer, e.faq)), e.resultNumberContainer = $(".resultnumber.container", e.unit)[0], e.listUnit = [].slice.call($(n.listUnit, e.listContainer)), e.noResult = $(".no-result.container", e.unit)[0], e.bottomtext = $(".bottomtext", e.unit)[0], e.head = $(".head", e.unit)[0], e.menuContainer = $(".menu.container", e.unit)[0], e.menuContainers = [].slice.call($(n.menuContainer, e.faq)), e.searchInput = $(".input", e.head)[0], $(e.menuContainer).on("click", n.menuUnit, t.menu.clickHandler), $(e.listContainers).on("click", n.listUnitTitle + ", " + n.listUnitButton, t.results.clickHandler), $(e.searchForm).on("submit", t.search.submitHandler), $(e.searchInput).on("change keyup paste cut mouseup", t.search.changeHandler), t.menu.noItems(), window.location.hash && t.hashNavigation.init(window.location.hash), !0)
    }, t.render = function(t) {
        return !!e.faq
    }, t.unmount = function() {
        e.faq && ($(e.menuContainer).off("click", n.menuUnit, t.menu.clickHandler), $(e.listContainers).off("click", n.listUnit, t.results.clickHandler), $(e.searchForm).off("submit", t.search.submitHandler), $(e.searchInput).off("change keyup paste cut", t.search.changeHandler), e.faq = null)
    }, {
        mount: t.mount,
        init: t.init,
        render: t.render,
        unmount: t.unmount,
        selector: n.container
    }
}();
var modules = window.modules = window.modules || {};
modules.article = function() {
    "use strict";
    var e, t, n;
    return e = {}, t = {}, n = {
        viewport: '.viewport[variant="live"]',
        container: ".article.container",
        navigation_container: ".article.unit.navigation",
        nav: ".nav[variant='top']",
        listItem: ".list-item",
        articleRtfUnit: ".article.rtf",
        articleBuyNow: ".buy-now-container",
        articleBuyNowDeeplinks: ".buy-now-deeplinks"
    }, t.navigationScrollHandler = function(t) {
        t.preventDefault();
        var n = this.getAttribute("href").split("#").pop();
        if (n) {
            var i = e.viewport.querySelector("#" + n);
            if (i) {
                var o = i.getBoundingClientRect(),
                    r = window.scrollY ? window.scrollY : window.pageYOffset;
                window.scrolling.scrollTo(Math.round(o.top + r), 1e3)
            }
        }
    }, t.rtf = {
        clickHandler: function(t) {
            t.preventDefault(), $(e.body).trigger(new jQuery.Event("navigate", {
                url: t.currentTarget.href,
                windowName: t.currentTarget.getAttribute("target"),
                target: t.currentTarget
            }))
        }
    }, t.positionDeeplinks = function(t) {
        var i = $(t.currentTarget),
            o = i.find(n.articleBuyNowDeeplinks),
            r = o.outerWidth(),
            a = i.offset().left,
            s = $(e.viewport).innerWidth() - a - i.outerWidth(),
            l = i.outerWidth(),
            c = (r - l) / 2;
        c > a && c < s ? o.css("left", 0 - a) : c < a && c > s ? o.css("left", 0 - 2 * c + s) : o.css("left", 0 - c)
    }, t.mount = function(t) {
        t = t || document.querySelector(n.viewport);
        var i = t.querySelector(n.container);
        return !!i && (e.window = window, e.body = document.querySelector("body"),
            e.viewport = t || document.querySelector(n.viewport), e.nav = document.querySelector(n.nav), e.article = i, !0)
    }, t.init = function(i) {
        return i = i || document.querySelector(n.viewport), !!i.querySelector(n.container) && (e.navigation_container = e.viewport.querySelector(n.navigation_container), e.buyNow = e.viewport.querySelector(n.articleBuyNow), e.buyNowDeepLinks = e.viewport.querySelector(n.articleBuyNowDeeplinks), $(e.viewport).on("click", n.container + " " + n.listItem, t.navigationScrollHandler), $(n.articleRtfUnit).on("click", "[href]", t.rtf.clickHandler), e.buyNow && ($(e.buyNowDeepLinks).css("transform", "none"), $(e.buyNow).on("mouseover", t.positionDeeplinks)), !0)
    }, t.render = function(e) {
        return e = e || document.querySelector(n.viewport), !!e.querySelector(n.container)
    }, t.unmount = function() {
        e.article && ($(e.viewport).off("click", n.container + " " + n.listItem, t.navigationScrollHandler), $(e.articleRtfUnit).off("click", "[href]", t.rtf.clickHandler), e.article = null)
    }, {
        mount: t.mount,
        init: t.init,
        unmount: t.unmount,
        render: t.render,
        selector: n.container
    }
}();
var modules = window.modules = window.modules || {};
modules["product-list"] = function() {
    "use strict";
    var e, t, n, i;
    return e = {}, t = {}, n = {
        isSwiping: !1
    }, i = {
        viewport: '.viewport[variant="live"]',
        container: ".product.container",
        moreinfo: ".more-info",
        productInfoContainer: ".product-more-info.unit",
        productListContainer: ".product-list.unit[id]",
        productListUnit: ".product-list.unit > *",
        dotsNavigationContainer: ".product-navigation",
        dotsNavigationUnit: "a",
        contentTitle: ".product-list .title-block > .title"
    }, t.products = {
        clickHandler: function(e) {
            e.preventDefault();
            var n = e.currentTarget.parentNode,
                i = {
                    icon: e.currentTarget,
                    container: n,
                    imageContainer: n.querySelector(".image"),
                    textElement: n.querySelector(".text-block"),
                    callToActionElement: n.querySelector(".button-block"),
                    backgroundImg: n.querySelector(".background-img"),
                    imageNormalElement: n.querySelector(".image .normal"),
                    imageZoomElement: n.querySelector(".image .zoom"),
                    backgroundZoom: n.querySelector(".bgnormal"),
                    backgroundElement: n.querySelector(".background")
                };
            if ("icon-plus" === i.icon.getAttribute("variant")) {
                t.products.zoom(i);
                var o = $(".product-head [href='#" + n.id + "'] span").first().text();
                t.googleTagManager.logPlusClick(o)
            } else "icon-cross" === i.icon.getAttribute("variant") && t.products.unzoom(i);
            $(i.imageNormalElement).css("opacity"), $(i.imageZoomElement).css("opacity")
        },
        zoom: function(e) {
            if (e.imageContainer.setAttribute("zoom", "true"), e.icon.setAttribute("variant", "icon-cross"), e.textElement.setAttribute("state", "show"), e.callToActionElement && e.callToActionElement.setAttribute("state", "show"), e.imageNormalElement.setAttribute("state", ""), e.imageZoomElement.setAttribute("state", "active"), e.backgroundElement.setAttribute("state", "zoom"), e.container.setAttribute("state", "zoom"), n.isMobile) {
                var t = parseInt(e.icon.style.left);
                t = 1.2 * (t - 50) + 50, e.icon.style.left = t + "%"
            }
        },
        unzoom: function(e) {
            if (e.imageContainer.setAttribute("zoom", "false"), e.icon.setAttribute("variant", "icon-plus"), e.textElement.setAttribute("state", "hidden"), e.callToActionElement && e.callToActionElement.setAttribute("state", "hidden"), e.imageNormalElement.setAttribute("state", "active"), e.imageZoomElement.setAttribute("state", ""), e.backgroundElement.setAttribute("state", "normal"), e.container.setAttribute("state", ""), n.isMobile) {
                var t = parseInt(e.icon.style.left);
                t = (t - 50) / 1.2 + 50, e.icon.style.left = t + "%"
            }
        }
    }, t.scrolling = {
        scrollHandler: function() {
            var e, i = !0;
            return function(o) {
                n.disableScrollHandler || (i ? (t.scrolling.update(), i = !1) : (window.clearTimeout(e), e = window.setTimeout(function() {
                    i = !0, t.scrolling.update()
                }, 20)))
            }
        }(),
        update: function() {
            var i = e.products.reduce(function(e, n) {
                return !e.current && t.scrolling.testIsPositionLower(n) ? e.current = n : e.other.push(n), e
            }, {
                current: void 0,
                other: []
            });
            i.current && i.current !== n.active && (n.active = i.current, t.navigation.deActivateAll(), t.navigation.activate(t.navigation.getDotForProduct(i.current)))
        },
        scrollToElement: function(e) {
            e.speed = e.speed || 500, window.scrolling.scrollTo(e.element, e.speed)
        },
        orientationChangeHandler: function(t) {
            $(".product-list.unit", e.viewport).each(function(e, t) {
                t.style.height = window.screen.height + "px"
            })
        },
        testIsPositionLower: function(t) {
            return $(t).offset().top >= e.scrollElement.scrollTop - 250
        }
    }, t.navigation = {
        clickHandler: function(e) {
            e.preventDefault();
            var o = e.currentTarget,
                r = o.getAttribute("href"),
                a = document.getElementById(r.replace("#", ""));
            if (n.disableScrollHandler = !0, o.querySelector("span") && t.googleTagManager.logProductIcon(o.querySelector("span").innerHTML.replace("<br>", " ")), $(e.currentTarget).parents(i.dotsNavigationContainer).length > 0) {
                var s = $(i.dotsNavigationContainer).find("li").index($(e.currentTarget).parent()),
                    l = $(".product-head [href*='" + r + "'] span").first().text();
                t.googleTagManager.logVerticalDots(s, l)
            }
            t.scrolling.scrollToElement({
                element: a
            }), window.setTimeout(function() {
                n.disableScrollHandler = !1, t.scrolling.update()
            }, 500)
        },
        activate: function(e) {
            e.setAttribute("state", "active")
        },
        deActivate: function(e) {
            e.setAttribute("state", "")
        },
        deActivateAll: function() {
            e.dotsNavigationUnits.forEach(function(e) {
                t.navigation.deActivate(e)
            })
        },
        getDotForProduct: function(t) {
            return e.dotsNavigationContainer.querySelector('[href="#' + t.id + '"]')
        }
    }, t.moreInfo = {
        clickHandler: function(n) {
            "hidden" === e.moreInfoContainer.getAttribute("state") ? t.moreInfo.open() : "active" === e.moreInfoContainer.getAttribute("state") && t.moreInfo.close()
        },
        open: function() {
            e.moreInfoContainer.setAttribute("state", "active"), e.moreInfoButton.setAttribute("state", "active")
        },
        close: function() {
            e.moreInfoContainer.setAttribute("state", "hidden"), e.moreInfoButton.setAttribute("state", "blurred")
        }
    }, t.button = {
        clickHandler: function(t) {
            t.preventDefault(), $(e.body).trigger("closeFullViewport"), $(e.body).trigger(new jQuery.Event("navigate", {
                url: t.currentTarget.href,
                windowName: t.currentTarget.getAttribute("target"),
                target: t.currentTarget
            }))
        }
    }, t.googleTagManager = {
        logCarousel: function(e, t) {
            void 0 !== window.dataLayer && window.dataLayer.push({
                action: e,
                label: t,
                category: "Carousel",
                event: "interaction_carouselSwipes"
            })
        },
        logVerticalDots: function(e, t) {
            void 0 !== window.dataLayer && window.dataLayer.push({
                action: e,
                label: t,
                category: "Vertical dot indicators",
                event: "interaction_vdot"
            })
        },
        logPlusClick: function(e) {
            void 0 !== window.dataLayer && window.dataLayer.push({
                action: e,
                label: "",
                category: "Plus Click",
                event: "interaction_plus"
            })
        },
        logProductIcon: function(e) {
            void 0 !== window.dataLayer && window.dataLayer.push({
                action: e,
                label: "",
                category: "Product icon click",
                event: "interaction_product_icon_click"
            })
        }
    }, t.mount = function(o) {
        return e.window = window, e.body = document.querySelector("body"), e.viewport = o || document.querySelector(i.viewport), e.container = e.viewport.querySelector(i.container), e.scrollElement = window.scrolling.getScrollElement(), !!e.container && ($(i.contentTitle, e.viewport).each(function(e, t) {
            var n = t.textContent;
            t.innerHTML = n.replace(/_/g, "<br>")
        }), $(".icon-block + span", e.container).each(function(e, t) {
            var n = t.textContent;
            t.innerHTML = n.replace(/_/g, "<br>")
        }), $(".carousel.desktop", i.container).carousel({
            slidesToShow: 8,
            slidesToScroll: 4,
            dots: !0,
            arrows: !1,
            infinite: !1
        }).on("swipe", function(e, t, i) {
            n.isSwiping = i
        }).on("afterChange", function(e, i, o, r) {
            n.isSwiping ? (t.googleTagManager.logCarousel("swipe", n.isSwiping), n.isSwiping = !1) : t.googleTagManager.logCarousel("click", o / 4)
        }), $(".carousel.mobile", i.container).carousel({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: !0,
            arrows: !1,
            infinite: !1
        }).on("swipe", function(e, t, i) {
            n.isSwiping = i
        }).on("afterChange", function(e, i, o, r) {
            n.isSwiping ? (t.googleTagManager.logCarousel("swipe", n.isSwiping), n.isSwiping = !1) : t.googleTagManager.logCarousel("click", o / 4)
        }), !0)
    }, t.init = function(n) {
        return !!e.container && (e.products = window.nodelistToArray($(i.productListContainer, e.container)), e.moreInfoButton = e.container.querySelector(".more-info"), e.moreInfoContainer = e.viewport.querySelector(i.productInfoContainer), e.dotsNavigationContainer = e.container.querySelector(i.dotsNavigationContainer), e.dotsNavigationUnits = window.nodelistToArray($(i.dotsNavigationUnit, e.dotsNavigationContainer)), $(e.window).on("orientationchange", t.scrolling.orientationChangeHandler), $(e.window).on("scroll", t.scrolling.scrollHandler), $(e.scrollElement).on("scroll", t.scrolling.scrollHandler), $(e.moreInfoButton).on("click", t.moreInfo.clickHandler), $(".icon", e.container).on("click", t.products.clickHandler), $(".product-navigation, .menu, .carousel", e.container).on("click", "a", t.navigation.clickHandler), $(i.productListUnit).on("click", "[href]", t.button.clickHandler), window.setTimeout(t.scrolling.update, 10), !0)
    }, t.render = function(i) {
        e.body.clientWidth < 500 && t.scrolling.orientationChangeHandler(), e.body.clientWidth < 751 ? n.isMobile = !0 : n.isMobile = !1
    }, t.unmount = function() {
        $(e.window).off("scroll", t.scrolling.scrollHandler), $(e.scrollElement).off("scroll", t.scrolling.scrollHandler), $(e.moreInfoButton).off("click", t.moreInfo.clickHandler), $(".icon", e.container).off("click", t.products.clickHandler), $(".product-navigation, .menu, .carousel", e.container).off("click", "a", t.navigation.clickHandler), $(i.productListUnit).off("click", "[href]", t.button.clickHandler), $(e.window).off("orientationchange", t.scrolling.orientationChangeHandler)
    }, {
        mount: t.mount,
        init: t.init,
        render: t.render,
        unmount: t.unmount,
        selector: i.container
    }
}();
var modules = window.modules = window.modules || [];
modules.cookies = function() {
    var e, t, n;
    return e = {}, t = {}, {}, n = {
        viewport: '.viewport[variant="live"]',
        container: ".cookies.container",
        cookiesSettingsButton: ".cookies-settings-button",
        cookiesUnit: ".cookies.unit",
        cookiesUnitModal: ".cookies.unit-modal"
    }, t.cookies = {
        changeSettingsHandler: function(t) {
            e.policy.setAttribute("state", ""), e.settings.setAttribute("state", "active"), e.settingsbutton.focus()
        },
        policyButtonHandler: function(e) {
            t.cookies.closeContainer(), t.cookies.acceptAllCookies(), t.cookies.removeShowNotificationCookie(), t.blur.removeBlur(), t.googleTagManager.logCookie(!0)
        },
        policyUrlHandler: function(e) {
            t.googleTagManager.logCookie("more info")
        },
        openContainer: function() {
            e.cookiesContainer.setAttribute("state", "active"), $(e.body).trigger("disableScrolling")
        },
        closeContainer: function() {
            e.cookiesContainer.setAttribute("state", "hidden"), $(e.body).trigger("enableScrolling")
        },
        settingsButtonHandler: function(n) {
            e.checkbox1.querySelector(".input").checked && (e.checkbox2.querySelector(".input").checked ? t.cookies.acceptAllCookies("true") : t.cookies.setCookie(t.cookies.getCookieName(), !1, 5), t.cookies.removeShowNotificationCookie(), t.cookies.closeContainer(), t.blur.removeBlur())
        },
        acceptAllCookies: function(e) {
            t.cookies.setCookie(t.cookies.getCookieName(), !0, 5)
        },
        removeShowNotificationCookie: function(e) {
            t.cookies.setCookie(t.cookies.getShowNotificationCookie(), !1, -1)
        },
        getCookieName: function() {
            return "cc_consent"
        },
        getShowNotificationCookie: function() {
            return "cc_show"
        },
        setCookie: function(e, t, n) {
            var i = new Date,
                o = new Date;
            null !== n && 0 !== n || (n = 1), o.setTime(i.getTime() + 864e5 * n), document.cookie = e + "=" + escape(t) + ";expires=" + o.toGMTString() + ";path=/"
        }
    }, t.blur = {
        blurOnLoad: function() {
            e.viewport.setAttribute("state", "active-cookie")
        },
        removeBlur: function(t) {
            $(e.cookiesContainer).addClass(t), e.cookiesContainer.setAttribute("state", "hidden"), "active-cookie" == e.viewport.getAttribute("state") && e.viewport.setAttribute("state", "hidden")
        }
    }, t.allpages = {
        findButton: function() {
            t.cookies.openContainer()
        }
    }, t.googleTagManager = {
        logCookie: function(e) {
            void 0 !== window.dataLayer && window.dataLayer.push({
                event: "interaction_cookie",
                events: {
                    category: "Cookie consent",
                    action: e,
                    label: ""
                }
            })
        }
    }, t.init = function(i) {
        function o(e, t) {
            return t = document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)"), t ? t.pop() : ""
        }
        return e.window = window, e.html = document.querySelector("html"), e.body = document.querySelector("body"), e.viewport = i || document.querySelector(n.viewport), e.cookiesContainer = e.body.querySelector(n.container), null !== e.cookiesContainer && (e.cookiesUnit = e.cookiesContainer.querySelector(n.cookiesUnit) || e.cookiesContainer.querySelector(n.cookiesUnitModal), e.cookiesSettingsButton = e.viewport.querySelector(n.cookieSettingsButton), e.policy = e.cookiesUnit.querySelector(".policy"), e.settings = e.cookiesUnit.querySelector(".settings"), e.settingslink = e.policy.querySelector(".changelink.link"), e.policybutton = e.policy.querySelector(".button"), e.settingsbutton = e.settings.querySelector(".button"), e.policyurl = e.policy.querySelector(".policylink a").href, e.checkbox1 = e.settings.querySelector(".checkbox1"), e.checkbox2 = e.settings.querySelector(".checkbox2"), $(e.settingslink).on("click", t.cookies.changeSettingsHandler), $(e.settingsbutton).on("click", t.cookies.settingsButtonHandler), $(e.policybutton).on("click", t.cookies.policyButtonHandler), $(e.cookiesSettingsButton).on("click", t.allpages.findButton), $(e.cookiesSettingsButton).on("click", t.cookies.changeSettingsHandler), $(".policylink a").on("click", t.cookies.policyUrlHandler), "active" === e.cookiesContainer.getAttribute("state") && $(e.cookiesContainer).hasClass("modal") && ($(e.body).trigger("disableScrolling"), "active-cookie" !== e.viewport.getAttribute("state") && t.blur.blurOnLoad()), "active" === e.cookiesContainer.getAttribute("state") && window.location.href === e.policyurl ? (t.blur.removeBlur("temp"), $(e.body).trigger("enableScrolling")) : !$(e.cookiesContainer).hasClass("temp") || window.location.href === e.policyurl || "" !== o("cc_consent") && "true" !== o("cc_show") || (t.blur.blurOnLoad(), e.cookiesContainer.setAttribute("state", "active")), !0)
    }, t.unmount = function() {
        null !== e.cookiesContainer && ($(e.settingslink).off("click", t.cookies.changeSettingsHandler), $(e.settingsbutton).off("click", t.cookies.settingsButtonHandler), $(e.policybutton).off("click", t.cookies.policyButtonHandler), $(e.cookiesSettingsButton).off("click", t.allpages.findButton), $(e.cookiesSettingsButton).off("click", t.cookies.changeSettingsHandler), $(".policylink a").off("click", t.cookies.policyUrlHandler))
    }, {
        init: t.init,
        unmount: t.unmount,
        selector: n.container
    }
}();
var modules = window.modules = window.modules || {};
modules["full-viewport"] = function() {
    "use strict";
    var e, t, n, i;
    return e = {}, t = {
        container: ".full-viewport.container",
        unit: ".full-viewport.unit",
        overlay: ".overlay.container",
        videoFrame: ".youtube-player",
        fullViewportInfoContainer: ".full-viewport-info.unit",
        fullViewportActualMoreInfoContainer: ".more-info.container",
        scrollTopButton: ".scroll-top-button.container",
        closeButton: ".close-button",
        spinner: ".spinner"
    }, n = {}, i = {}, n.isMobileDevice = function() {
        return !!(e.window.innerWidth < 700)
    }, n.video = function() {
        var t, o;
        return {
            init: function() {
                i.youtubeApiLoaded.then(function(r) {
                    i.video = new r.Player(e.videoFrame, {
                        height: "390",
                        width: "640",
                        videoId: e.videoFrame.getAttribute("data-youtube"),
                        playerVars: {
                            html5: 1,
                            modestbranding: 1,
                            fs: e.videoFrame.getAttribute("data-allowfullscreen"),
                            rel: 0,
                            showinfo: 0,
                            wmode: "opaque",
                            autohide: e.videoFrame.getAttribute("data-autohidecontrols")
                        },
                        events: {
                            onReady: function(e) {
                                if (t = e.target, o = e.target.getIframe(), n.video.playerReadyHandler(e, {
                                        iframe: o,
                                        player: t
                                    }), !i.videoTitle) {
                                    var r = t.getVideoData();
                                    n.googleTagManager.logVideo(r.title)
                                }
                            },
                            onStateChange: function(e) {
                                n.video.playerChangeHandler(e, {
                                    iframe: o,
                                    player: t
                                })
                            }
                        }
                    })
                })
            },
            unmount: function() {
                try {
                    t.destroy()
                } catch (e) {}
            },
            playerReadyHandler: function(t, o) {
                e.spinner.setAttribute("state", "invisible"), (i.allowVideoPlay = !1) && $(e.videoFrame).remove(), n.isMobileDevice() && "true" === o.iframe.getAttribute("data-autoplaymobile") ? o.player.playVideo() : "true" === o.iframe.getAttribute("data-autoplaydesktop") && o.player.playVideo()
            },
            playerChangeHandler: function(t, i) {
                0 === t.data && e.moreInfoContainer && n.moreInfo.display()
            },
            pause: function() {
                try {
                    t.pauseVideo()
                } catch (e) {}
            },
            resume: function() {
                if (t && 2 === t.getPlayerState()) try {
                    t.playVideo()
                } catch (e) {}
            }
        }
    }(), n.title = {
        display: function() {
            e.infoText && e.infoText.setAttribute("state", "")
        },
        remove: function() {
            e.infoText && e.infoText.setAttribute("state", "hidden")
        },
        isDisplayed: function() {
            return !(!e.infoText || "hidden" !== e.infoText.getAttribute("state"))
        }
    }, n.moreInfo = function() {
        var t = !1;
        return {
            clickHandler: function(i) {
                i.preventDefault(), t ? n.moreInfo.remove() : e.moreInfoContainer && n.moreInfo.display()
            },
            display: function() {
                t = !0, e.moreInfoContainer.setAttribute("state", "active"), e.moreInfoButton.setAttribute("state", "active"), i.video && 3 !== i.video.B.playerState && n.video.pause(), n.title.isDisplayed && n.title.remove()
            },
            remove: function() {
                t = !1, e.moreInfoContainer.setAttribute("state", "hidden"), e.moreInfoButton.setAttribute("state", "blurred"), i.video && n.video.resume()
            },
            isDisplayed: function() {
                return t
            }
        }
    }(), n.close = {
        clickHandler: function(t) {
            if (t.preventDefault(), !0 === n.moreInfo.isDisplayed()) n.moreInfo.remove(), t.stopImmediatePropagation();
            else if (!1 === n.moreInfo.isDisplayed()) {
                !i.isViewport || document.referrer.match(document.location.hostname) && !document.referrer.match("/?returnurl=") ? window.history.back() : $(e.body).trigger(new jQuery.Event("navigate", {
                    url: t.currentTarget.children[0].href,
                    windowName: t.currentTarget.children[0].getAttribute("target"),
                    target: t.currentTarget.children[0]
                })), window.setTimeout(function() {
                    $(e.videoFrame).remove()
                }, 1e3);
                try {
                    window.setTimeout(n.unmount, 400), n.video.pause()
                } catch (e) {}
            }
        }
    }, n.button = {
        clickHandler: function(t) {
            t.preventDefault(), "#" !== t.currentTarget.getAttribute("href").charAt(0) && ($(e.body).trigger("closeFullViewport"), $(e.body).trigger(new jQuery.Event("navigate", {
                url: t.currentTarget.href,
                windowName: t.currentTarget.getAttribute("target"),
                target: t.currentTarget
            })))
        }
    }, n.googleTagManager = {
        logVideo: function(e, t) {
            void 0 !== window.dataLayer && window.dataLayer.push({
                action: e,
                label: "open",
                category: "Video",
                event: "interaction_video"
            })
        }
    }, n.mount = function(n) {
        n = n || document.querySelector(t.viewport);
        var o = n.querySelector(t.container);
        return !!o && (e.window = window, e.body = document.body, e.viewport = n, e.fullViewport = o, e.fullViewportContent = e.fullViewport.querySelector('.unit[variant="video"]'), e.fullViewportContent && e.fullViewportContent.setAttribute("visible", "false"), e.actualMoreInfoContainer = e.fullViewport.querySelector(t.fullViewportActualMoreInfoContainer), e.fullViewportUnit = e.fullViewport.querySelector(t.unit), e.scrollTopButton = e.fullViewport.querySelector(t.scrollTopButton), null === e.actualMoreInfoContainer && (e.fullViewport.style.height = "100vh", e.fullViewportContent && (e.fullViewportContent.style.height = "100vh"), e.scrollTopButton && (e.scrollTopButton.style.bottom = "20px")), e.overlay = e.body.querySelector(t.overlay), e.overlayTool = e.overlay.querySelector(".tool"), i.video = !1, i.youtubeApiLoaded = new Promise(function(e, t) {
            if (window.YT && window.YT.Player) e(window.YT);
            else {
                var n = function(t) {
                    return function() {
                        "function" == typeof t && t(), e(window.YT)
                    }
                }(window.onYouTubeIframeAPIReady);
                window.onYouTubeIframeAPIReady = n
            }
        }), $(e.body).trigger("pauseVideo"), !0)
    }, n.init = function(o) {
        return !!e.fullViewport && (i.isViewport = $(e.viewport).hasClass("viewport"), i.allowVideoPlay = !0, !1 === i.isViewport && (e.overlayTool.setAttribute("state", "hidden"), $(e.body).trigger("disableScrolling")), e.videoFrame = e.viewport.querySelector(t.videoFrame), e.moreInfoButton = e.viewport.querySelector(".more-info-button"), e.moreInfoContainer = e.viewport.querySelector(t.fullViewportInfoContainer), e.closeButton = e.fullViewport.querySelector(t.closeButton), e.closeButtonAtag = e.closeButton ? e.closeButton.querySelector("a") : "", e.infoText = e.fullViewport.querySelector(".full-viewport-info-text"), e.overlayContainer = document.querySelector(t.overlay), e.closeOverlayButton = e.overlayContainer.querySelector(".back"), e.spinner = document.querySelector(t.spinner), $(e.moreInfoButton).on("click", n.moreInfo.clickHandler), $(e.closeButton).on("click", n.close.clickHandler), $(t.fullViewportInfoContainer).on("click", "[href]", n.button.clickHandler), $(e.body).on("closingOverlay", n.unmount), window.setTimeout(n.title.remove, 4e3), (window.isAndroidOld || window.isWindowsPhone) && (e.fullViewportContent.setAttribute("visible", "true"), n.title.remove(), n.video.init()), !0)
    }, n.render = function(t) {
        if (e.fullViewport && !window.isAndroidOld) {
            if (e.fullViewportContent && e.videoFrame) {
                var o = $(e.fullViewport.querySelector(".full-viewport-info-text .title")).text(),
                    r = $(e.fullViewport.querySelector(".full-viewport-info-middle .title")).text(),
                    a = $(e.fullViewport.querySelector(".more-info .title")).text(),
                    s = (o.length > 1 ? o : r.length > 1 ? r : a).replace(/^\s+|\s+$/gm, "");
                s ? (n.googleTagManager.logVideo(s), i.videoTitle = s) : i.videoTitle = !1, window.setTimeout(function() {
                    n.video.init()
                }, 2900), window.setTimeout(function() {
                    e.fullViewportContent.setAttribute("visible", "true")
                }, 3e3)
            }
            return !0
        }
        return !1
    }, n.unmount = function() {
        e.fullViewport && (i.allowVideoPlay = !1, $(e.moreInfoButton).off("click", n.moreInfo.clickHandler), $(e.closeButton).off("click", n.close.clickHandler), $(t.fullViewportInfoContainer).off("click", "[href]", n.button.clickHandler), $(e.body).trigger("playVideo"), window.setTimeout(function() {
            n.video.unmount()
        }, 99), window.setTimeout(function() {
            $(e.videoFrame).remove()
        }, 100), window.setTimeout(function() {
            e.viewport && (e.viewport.innerHTML = ""), $(e.videoFrame).remove(), e.overlayTool.setAttribute("state", "")
        }, 750), e.fullViewport = null, $(e.body).off("closingOverlay", n.unmount))
    }, {
        mount: n.mount,
        init: n.init,
        render: n.render,
        unmount: n.unmount,
        selector: t.container
    }
}();
var modules = window.modules = window.modules || [];
modules["scroll-top-button"] = function() {
    "use strict";
    var e, t, n, i;
    return e = {}, t = {}, n = {
        viewport: '.viewport[variant="live"]',
        container: ".scroll-top-button.container",
        unit: ".scroll-top-button.unit"
    }, i = {}, t.scrollToTop = function(e) {
        0 !== t.getScrollPosition() && window.scrolling.scrollTo(0, 1e3)
    }, t.scrollHandler = function(i) {
        var o = t.getScrollPosition(),
            r = r || document.querySelector(n.viewport);
        e.scrollToTopButton && o > 300 ? (e.scrollToTopButton.setAttribute("state", "active"), r.classList.add("scroll-top")) : e.scrollToTopButton && o <= 300 && (e.scrollToTopButton.setAttribute("state", "hidden"), r.classList.remove("scroll-top"))
    }, t.getScrollPosition = function() {
        var t;
        return t = e.window.pageYOffset, void 0 !== i.device && "windows-phone" === i.device && (t = window.scrolling.getScrollElement().scrollTop), void 0 === t && (t = window.scrolling.getScrollElement().scrollTop), t
    }, t.scrollHandlerFullviewPort = function(t) {
        var i = i || document.querySelector(n.viewport);
        e.scrollToTopButton && e.fullviewPortunit.scrollTop > 300 ? (e.scrollToTopButton.setAttribute("state", "active"), i.classList.add("scroll-top")) : e.scrollToTopButton && e.fullviewPortunit.scrollTop <= 300 && (e.scrollToTopButton.setAttribute("state", "hidden"), i.classList.remove("scroll-top"))
    }, t.mount = function(t) {
        t = t || document.querySelector(n.viewport);
        var i = t.querySelector(n.container);
        return !!i && (e.window = window, e.body = document.querySelector("body"), e.viewport = t, e.scrollToTopButtonContainer = i, !0)
    }, t.init = function(n) {
        return !!e.scrollToTopButtonContainer && (e.fullviewPortunit = e.viewport.querySelector(".full-viewport.unit"), e.scrollToTopButton = e.scrollToTopButtonContainer, navigator.userAgent.match(/Windows Phone/i) && (i.device = "windows-phone"), e.fullviewPortunit ? ($(".full-viewport .unit").on("scroll", t.scrollHandlerFullviewPort), $(e.scrollToTopButton).on("click", function() {
            $(e.fullviewPortunit).animate({
                scrollTop: 0
            }, 500)
        })) : ($([e.window, e.body]).on("scroll", t.scrollHandler), $(e.scrollToTopButton).on("click", t.scrollToTop)), !0)
    }, t.unmount = function() {
        e.scrollToTopButtonContainer && ($(e.window).off("scroll", t.scrollHandler), $(e.scrollToTopButton).off("click", t.scrollToTop), e.scrollToTopButtonContainer = null)
    }, {
        init: t.init,
        mount: t.mount,
        unmount: t.unmount,
        selector: n.container
    }
}();
var modules = window.modules = window.modules || [];
modules.languages = function() {
    "use strict";
    var e, t, n;
    return e = {}, t = {}, n = {
        viewport: '.viewport[variant="live"]',
        container: ".languages.container",
        languageUnit: ".languages.unit",
        region: ".region",
        countryContainer: ".country.container",
        cookiesUnit: ".cookies.unit",
        cookiesUnitModal: ".cookies.unit-modal"
    }, t.removeEventListeners = function() {
        $(e.body).off("click", t.setPosition.positionLanguageContainer), $(n.cookiesUnit).find(".policy > button.button").off("click", t.setPosition.repositionLanguageContainer)
    }, t.AddEventListeners = function() {
        $(e.body).on("click", '[toggle="overlay"][name="languages"]', t.setPosition.positionLanguageContainer), $(n.cookiesUnit).find(".policy > button.button").on("click", t.setPosition.repositionLanguageContainer)
    }, t.setPosition = {
        positionLanguageContainer: function() {
            var e = t.setPosition.getCookiePopUpHeight();
            e ? $(n.countryContainer).css("margin-top", e) : t.setPosition.repositionLanguageContainer()
        },
        repositionLanguageContainer: function() {
            $(n.countryContainer).css("margin-top", "0")
        },
        getCookiePopUpHeight: function() {
            return $(n.cookiesUnit).length > 0 ? $(n.cookiesUnit).height() : $(n.cookiesUnitModal).height()
        }
    }, t.init = function(i) {
        return e.window = window, e.body = document.querySelector("body"), e.viewport = i || document.querySelector(n.viewport), e.languages = e.viewport.querySelector(n.container), t.AddEventListeners(), !!e.languages
    }, t.unmount = function() {
        t.removeEventListeners()
    }, {
        init: t.init,
        unmount: t.unmount,
        selector: n.container
    }
}();
var modules = window.modules = window.modules || {};
modules["hex-form"] = function() {
    "use strict";
    var e, t, n, i;
    return e = {}, t = {}, n = {
        viewport: '.viewport[variant="live"]',
        container: ".hex-form.container",
        formContainer: ".form.container",
        formElement: ".form.container form",
        formFullForm: '.form[variant="full-form"]',
        formButton: ".submit-button",
        dateFieldContainer: '.inputfield.container[variant="date"]',
        requiredFields: "input[data-required]",
        formPostedContainer: ".form-posted.container"
    }, i = {}, t.htmlElement = {
        getAttribute: function(e) {
            return e.element.getAttribute(e.attributeKey) || !1
        },
        hasAttributeValue: function(e, n) {
            return n || (n = t.htmlElement.getAttribute(e)), new RegExp(e.attributeValue, "gi").test(n)
        },
        addAttributeValue: function(e) {
            var n = t.htmlElement.getAttribute(e);
            return t.htmlElement.hasAttributeValue(e, n) || (n = n ? n + " " + e.attributeValue : e.attributeValue, e.element.setAttribute(e.attributeKey, n)), !0
        },
        removeAttributeValue: function(e) {
            var n = t.htmlElement.getAttribute(e),
                i = t.htmlElement.hasAttributeValue(e, n),
                o = !1;
            if (i) {
                var r = new RegExp(e.attributeValue, "gi"),
                    a = n.replace(r, "").trim();
                a ? e.element.setAttribute(e.attributeKey, a) : e.element.removeAttribute(e.attributeKey), o = !0
            }
            return o
        },
        toggleAttributeValue: function(e) {
            e.attributeValue = e.removeAttributeValue;
            var n = !1;
            return t.htmlElement.removeAttributeValue(e) && (e.attributeValue = e.addAttributeValue, t.htmlElement.addAttributeValue(e), n = !0), n
        },
        addStateValueInvalid: function(e) {
            var n = {
                element: e,
                attributeKey: "state",
                attributeValue: "invalid"
            };
            return t.htmlElement.addAttributeValue(n)
        },
        removeStateValueInvalid: function(e) {
            var n = {
                element: e,
                attributeKey: "state",
                attributeValue: "invalid"
            };
            return t.htmlElement.removeAttributeValue(n)
        }
    }, t.fieldElement = {
        focusOut: function(e) {
            var n = {
                name: e.currentTarget.name,
                values: e.currentTarget.value,
                valueCheck: e.currentTarget.dataset.valueCheck || e.currentTarget.type
            };
            t.formValidation.fieldValidation(n).hasError && t.htmlElement.addStateValueInvalid(e.currentTarget), t.errorMessage.setState.hidden(e.currentTarget.form)
        },
        focusIn: function(e) {
            t.htmlElement.removeStateValueInvalid(e.currentTarget)
        }
    }, t.form = {
        clickHandler: function(e) {
            e.preventDefault();
            var n = "",
                o = "";
            $(".form [name='eventrooms']:checked").each(function(e, t) {
                0 == n.length ? n = t.value : n += "," + t.value
            }), $(".form [name='eventtype']:checked").each(function(e, t) {
                0 == o.length ? o = t.value : o += "," + t.value
            }), t.googleTagManager.logHEXres(n, o), t.dateSelector.isStateInvalid(e.currentTarget);
            var r = t.form.serialize(e.currentTarget),
                a = t.formValidation.formData(r.postData);
            a || i.containerVariantDateInvalid ? t.form.errorHandler(a, e.currentTarget) : a || i.containerVariantDateInvalid || t.form.postHandler(r, e.currentTarget.action)
        },
        postHandler: function(e, n) {
            t.sendData.xhr("POST", n, e).then(function(e) {
                var n = t.sendData.callback.success(e);
                t.form.callbackHandler(n)
            })
        },
        callbackHandler: function(n) {
            if (n.errorData && Object.keys(n.errorData).length > 0) {
                var i = e.body.querySelector('form[name="' + n.formName + '"]');
                t.form.errorHandler(n.errorData, i)
            } else n.succesData && $(e.body).trigger(new jQuery.Event("navigate", {
                url: n.succesData.page,
                animation: "blurin",
                windowName: null,
                target: null
            }))
        },
        errorHandler: function(e, n) {
            Object.keys(e).forEach(function(i) {
                var o = e[i].data.elementType + '[name="' + e[i].data.name + '"]',
                    r = n.querySelector(o);
                t.htmlElement.addStateValueInvalid(r)
            }), t.errorMessage.setState.active(n)
        },
        getValueOfElement: {
            input: function(e) {
                var t;
                return !e.type || "radio" !== e.type && "checkbox" !== e.type ? e.type && (t = e.value.trim()) : e.checked && (t = e.value.trim()), t
            },
            textarea: function(e) {
                return e.value.trim()
            },
            select: function(e) {
                var t;
                return e.type && "select-one" === e.type ? e.value && (t = e.value) : e.type && "select-multiple" === e.type && (t = [], e.value && e.options && Object.keys(e.options).forEach(function(n) {
                    e.options[n].selected && t.push(e.options[n].value)
                })), t
            }
        },
        serialize: function(e) {
            var n = {
                formName: e.getAttribute("name") || null,
                action: e.getAttribute("action") || null,
                postData: {}
            };
            return n.postData = Array.prototype.slice.call(e.elements).reduce(function(e, n) {
                return n && n.name && (e[n.name] ? "number" == typeof e[n.name].valueKey && isFinite(e[n.name].valueKey) && Math.floor(e[n.name].valueKey) === e[n.name].valueKey && e[n.name].valueKey++ : e[n.name] = {
                    type: n.type,
                    name: n.name,
                    elementType: n.nodeName.toLowerCase(),
                    required: "true" === n.dataset.required,
                    valueCheck: n.dataset.valueCheck || n.type,
                    valueKey: n.dataset.valueKey || 0,
                    values: []
                }, "function" == typeof t.form.getValueOfElement[n.nodeName.toLowerCase()] && (t.form.getValueOfElement[n.nodeName.toLowerCase()](n) && "select" === n.nodeName.toLowerCase() && "select-multiple" === n.type ? e[n.name].values = t.form.getValueOfElement[n.nodeName.toLowerCase()](n) : t.form.getValueOfElement[n.nodeName.toLowerCase()](n) && (n.dataset.valueKey ? e[n.name].values[n.dataset.valueKey] = t.form.getValueOfElement[n.nodeName.toLowerCase()](n) : e[n.name].values.push(t.form.getValueOfElement[n.nodeName.toLowerCase()](n))))), e
            }, {}), n
        }
    }, t.formValidation = {
        formData: function(e) {
            var n = {};
            return Object.keys(e).forEach(function(i) {
                if (!0 === e[i].required) {
                    var o = {
                            name: e[i],
                            values: e[i].values[0],
                            valueCheck: e[i].valueCheck
                        },
                        r = t.formValidation.fieldValidation(o);
                    r.hasError && (n[i] = {
                        data: e[i],
                        message: r.errorMessage
                    })
                }
            }), Object.keys(n).length > 0 && n
        },
        fieldValidation: function(e) {
            var n = {
                hasError: !1,
                errorMessage: null
            };
            return t.formValidation.validationType.isNotEmpty(e.values) ? t.formValidation.validationType.isNotEmpty(e.values) && "function" == typeof t.formValidation.validationType[e.valueCheck] && (t.formValidation.validationType[e.valueCheck](e.values) || (n.hasError = !0, n.errorMessage = e.name + " field is not correct filled")) : (n.hasError = !0, n.errorMessage = e.name + " field is empty"), n
        },
        validationType: {
            isNotEmpty: function(e) {
                var t = !0;
                return void 0 === e ? t = !1 : "object" == typeof e && Object.keys(e).length > 0 || e.length > 0 ? (t = !0, t = !0) : t = !1, t
            },
            text: function(e) {
                return !0
            },
            number: function(e) {
                return /^\d+$/.test(e)
            },
            numberMax850: function(e) {
                return /^\d+$/.test(e) && e < 851
            },
            alphabetic: function(e) {
                return !/^\d+$/.test(e)
            },
            email: function(e) {
                return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(e)
            },
            tel: function(e) {
                return /^(?:\+\d{1,3}|0\d{1,3}|00\d{1,2})?(?:\s?\(\d+\))?(?:[-\/\s.]|\d)+$/.test(e)
            },
            dateFuture: function(e) {
                e.day = parseInt(e.day, 10), e.month = parseInt(e.month, 10) - 1, e.year = parseInt(e.year, 10) + 2e3;
                var t = new Date(e.year, e.month, e.day);
                return new Date < t && t.getDate() === e.day && t.getMonth() === e.month && t.getFullYear() === e.year
            }
        }
    }, t.sendData = {
        xhr: function(e, t, n) {
            return new Promise(function(i, o) {
                var r = new XMLHttpRequest;
                r.open(e, t), r.setRequestHeader("Content-Type", "application/json; charset=utf-8"), r.setRequestHeader("HeinekenFormsCookie", $('input[name="__RequestVerificationToken"]').val()), r.send(JSON.stringify(n)), r.onload = function() {
                    200 === r.status ? i(r.response) : o(r.statusText)
                }, r.onerror = function() {
                    o(r.statusText)
                }
            })
        },
        callback: {
            success: function(e) {
                return JSON.parse(e)
            },
            error: function(e) {
                console.log(e)
            }
        }
    }, t.errorMessage = {
        setState: {
            hidden: function(e) {
                var n = {
                    element: e.querySelector('.form.unit[variant="error-message"]'),
                    attributeKey: "state",
                    addAttributeValue: "hidden",
                    removeAttributeValue: "active"
                };
                t.errorMessage.toggleState(n)
            },
            active: function(e) {
                var n = {
                    element: e.querySelector('.form.unit[variant="error-message"]'),
                    attributeKey: "state",
                    addAttributeValue: "active",
                    removeAttributeValue: "hidden"
                };
                t.errorMessage.toggleState(n)
            }
        },
        getState: function(e) {
            return e.querySelector('.form.unit[variant="error-message"]').getAttribute("state")
        },
        toggleState: function(e) {
            t.htmlElement.toggleAttributeValue(e)
        }
    }, t.dateSelector = {
        fullChangeHandler: function(n) {
            var i = t.dateSelector.convertFullToSeperated(e.dateSelectorFullDate.value);
            e.dateSelectorDay.value = i.day, e.dateSelectorMonth.value = i.month, e.dateSelectorYear.value = i.year.toString().slice(-2)
        },
        changeHandler: function(e) {
            var n;
            t.dateSelector.testKeyUpEvent(e) ? (t.dateSelector.testValues(), t.dateSelector.applyState(), "keyup" !== e.type && "keydown" !== e.type || (n = e.currentTarget, n.value.length >= t.dateSelector.maxInputLength(n) && 16 !== e.keyCode && 9 !== e.keyCode && 8 !== e.keyCode && t.dateSelector.jumpToNextInput(n))) : (e.preventDefault(), e.stopImmediatePropagation())
        },
        testValues: function(n) {
            return i.age = {
                day: e.dateSelectorDay.value,
                month: e.dateSelectorMonth.value,
                year: e.dateSelectorYear.value
            }, i.age.day && i.age.month && i.age.year ? t.formValidation.validationType.dateFuture(i.age) ? i.ageState = "valid" : i.ageState = "invalid" : i.age.day || i.age.month || i.age.year ? i.ageState = "progress" : i.ageState = "initial", "valid" === i.ageState
        },
        testFullDateSupport: function() {
            return "date" === e.dateSelectorFullDate.type
        },
        testKeyUpEvent: function(e) {
            var t = "keydown" === e.type,
                n = 9 === e.keyCode,
                i = 13 === e.keyCode,
                o = 8 === e.keyCode,
                r = 46 === e.keyCode,
                a = String.fromCharCode(e.keyCode).match(/[0-9]/),
                s = e.keyCode >= 96 && e.keyCode <= 105,
                l = 229 === e.keyCode;
            return !t || !(!t || !(n || i || a || o || r || s || l))
        },
        convertFullToSeperated: function(e) {
            return e = new Date(e), {
                day: e.getDate(),
                month: e.getMonth() + 1,
                year: e.getFullYear()
            }
        },
        checkInputLength: function(e) {
            return e.value.length
        },
        maxInputLength: function(e) {
            return e.getAttribute("maxlength")
        },
        nextInput: function(e) {
            return e.getAttribute("data-nextfield")
        },
        jumpToNextInput: function(e) {
            var n = t.dateSelector.nextInput(e);
            null !== n && document.getElementById(n).focus()
        },
        dateInput: function(e) {
            var n = e.current,
                i = e.keyCode;
            t.dateSelector.checkInputLength(n) == t.dateSelector.maxInputLength(n) && 16 !== i && 9 !== i && t.dateSelector.jumpToNextInput(n)
        },
        applyState: function(n) {
            n ? e.dateSelectorContainer.setAttribute("state", n) : (t.dateSelector.testValues(), e.dateSelectorContainer.setAttribute("state", i.ageState))
        },
        getContainer: function(e) {
            return e.querySelectorAll(n.dateFieldContainer) || !1
        },
        isStateInvalid: function(e) {
            var n = t.dateSelector.getContainer(e);
            return i.containerVariantDateInvalid = !1, n && [].slice.call(n).forEach(function(e) {
                "valid" !== e.getAttribute("state") && (i.containerVariantDateInvalid = !0)
            }), i.containerVariantDateInvalid
        }
    }, t.googleTagManager = {
        logHEXres: function(e, t) {
            void 0 !== window.dataLayer && window.dataLayer.push({
                action: e,
                label: t,
                category: "Heineken Experience reservation",
                event: "interaction_HEXres"
            })
        }
    }, t.mount = function(t) {
        t = t || document.querySelector(n.viewport);
        var i = t.querySelector(n.container);
        return !!i && (e.window = window, e.body = document.querySelector("body"), e.viewport = t || document.querySelector(n.viewport), e.hexForm = i, !0)
    }, t.init = function(o) {
        return !!e.hexForm && (e.formContainer = e.hexForm.querySelector(n.formContainer), e.formFullForm = e.hexForm.querySelector(n.formFullForm), e.formElement = e.hexForm.querySelectorAll(n.formElement), e.requiredFields = e.hexForm.querySelectorAll(n.requiredFields), e.postedContainers = e.hexForm.querySelector(n.formPostedContainer), e.dateSelectorContainer = e.hexForm.querySelector('.inputfield.container[variant*="date"]'), e.dateSelectorContainer && (e.dateSelectorDay = e.dateSelectorContainer.querySelector('.input[variant*="day"]'), e.dateSelectorMonth = e.dateSelectorContainer.querySelector('.input[variant*="month"]'), e.dateSelectorYear = e.dateSelectorContainer.querySelector('.input[variant*="year"]'), e.dateSelectorFullDate = e.dateSelectorContainer.querySelector('.input[variant*="full"]'), e.dateSelector = e.dateSelectorContainer.querySelectorAll('.input[variant*="dateSelector"]'), e.dateSelectorAllFields = e.dateSelectorContainer.querySelectorAll(".input"), i.fullDateSupport = t.dateSelector.testFullDateSupport(), i.isMobile = e.window.innerWidth < 700, e.dateSelectorFullDate && i.fullDateSupport && i.isMobile && (e.dateSelectorFullDate.setAttribute("state", "active"), $(e.dateSelectorFullDate).on("change", t.dateSelector.fullChangeHandler)), $(e.dateSelectorDay).on("change keydown keyup", t.dateSelector.changeHandler), $(e.dateSelectorMonth).on("change keydown keyup", t.dateSelector.changeHandler), $(e.dateSelectorYear).on("change keydown keyup", t.dateSelector.changeHandler), $(e.dateSelectorAllFields).on("click", t.dateSelector.setFocus)), $(e.requiredFields).on("focusin", t.fieldElement.focusIn), $(e.requiredFields).on("focusout", t.fieldElement.focusOut), $(e.formElement).on("submit", t.form.clickHandler), !0)
    }, t.render = function(t) {
        return !!e.hexForm
    }, t.unmount = function() {
        e.hexForm && ($(e.formElement).off("submit", t.form.clickHandler), $(e.dateSelectorAllFields).on("click", t.dateSelector.setFocus), $(e.dateSelectorFullDate).on("change", t.dateSelector.fullChangeHandler))
    }, {
        mount: t.mount,
        init: t.init,
        unmount: t.unmount,
        render: t.render,
        selector: n.container
    }
}();
var modules = window.modules = window.modules || {};
modules["custom-form"] = function() {
    "use strict";
    var e, t, n, i, o;
    return e = {}, t = {}, n = {
        viewport: '.viewport[variant="live"]',
        container: ".custom-form.container",
        formContainer: ".form.container",
        formElement: ".form.container form",
        formFullForm: '.form[variant="full-form"]',
        formButton: ".submit-button",
        dateFieldContainer: '.inputfield.container[variant="date"]',
        requiredFields: "input[data-required], select[data-required], textarea[data-required]",
        patternFields: "input[data-pattern], select[data-pattern], textarea[data-pattern]",
        formPostedContainer: ".form-posted.container",
        checkboxFields: ".custom-form .checkbox.container .unit input[data-required]",
        recaptcha: ".g-recaptcha",
        showErrorOnFocusOut: "[data-show-error-on-focus-out]",
        navigateTarget: "[data-navigate-target]",
        submitOnce: "[submit-once]",
        spinner: ".spinner"
    }, i = {
        recaptchaChallengeCompleted: !1,
        recaptchaWidgetId: 0
    }, o = {
        showErrorOnFocusOut: !1,
        navigateTarget: null,
        submitOnce: !1
    }, t.htmlElement = {
        getAttribute: function(e) {
            return !!e.element && (e.element.getAttribute(e.attributeKey) || !1)
        },
        hasAttributeValue: function(e, n) {
            return n || (n = t.htmlElement.getAttribute(e)), new RegExp(e.attributeValue, "gi").test(n)
        },
        addAttributeValue: function(e) {
            var n = t.htmlElement.getAttribute(e);
            return t.htmlElement.hasAttributeValue(e, n) || (n = n ? n + " " + e.attributeValue : e.attributeValue, e.element.setAttribute(e.attributeKey, n)), !0
        },
        removeAttributeValue: function(e) {
            var n = t.htmlElement.getAttribute(e),
                i = t.htmlElement.hasAttributeValue(e, n),
                o = !1;
            if (i) {
                var r = new RegExp(e.attributeValue, "gi"),
                    a = n.replace(r, "").trim();
                a ? e.element.setAttribute(e.attributeKey, a) : e.element.removeAttribute(e.attributeKey), o = !0
            }
            return o
        },
        toggleAttributeValue: function(e) {
            e.attributeValue = e.removeAttributeValue;
            var n = !1;
            return t.htmlElement.removeAttributeValue(e) && (e.attributeValue = e.addAttributeValue, t.htmlElement.addAttributeValue(e), n = !0), n
        },
        addStateValueInvalid: function(e) {
            var n = {
                element: e,
                attributeKey: "state",
                attributeValue: "invalid"
            };
            return "checkbox" == e.type && (n.element = e.parentElement), t.htmlElement.addAttributeValue(n)
        },
        removeStateValueInvalid: function(e) {
            var n = {
                element: e,
                attributeKey: "state",
                attributeValue: "invalid"
            };
            return "checkbox" == e.type && (n.element = e.parentElement), t.htmlElement.removeAttributeValue(n)
        }
    }, t.fieldElement = {
        focusOut: function(e) {
            var n = {
                name: e.currentTarget.name,
                values: e.currentTarget.value,
                pattern: e.currentTarget.dataset.pattern,
                required: e.currentTarget.dataset.required
            };
            t.formValidation.fieldValidation(n).hasError ? (t.htmlElement.addStateValueInvalid(e.currentTarget), o.showErrorOnFocusOut && t.errorMessage.setState.active(e.currentTarget.form)) : t.errorMessage.setState.hidden(e.currentTarget.form)
        },
        focusIn: function(e) {
            t.htmlElement.removeStateValueInvalid(e.currentTarget)
        },
        toggleCheckbox: function(e) {
            !0 === e.currentTarget.checked ? t.htmlElement.removeStateValueInvalid(e.currentTarget.parentElement) : !1 === e.currentTarget.checked && t.htmlElement.addStateValueInvalid(e.currentTarget.parentElement)
        }
    }, t.form = {
        clickHandler: function(n) {
            if (n.preventDefault(), i.formIsPosting) return !1;
            if (e.recaptcha.length && "invisible" === e.recaptcha[0].getAttribute("data-size") && !i.recaptchaChallengeCompleted && grecaptcha.execute(i.recaptchaWidgetId), e.recaptcha.length && !i.recaptchaChallengeCompleted) return !1;
            t.dateSelector.isStateInvalid(n.currentTarget);
            var o = t.form.serialize(n.currentTarget),
                r = t.formValidation.formData(o.postData),
                a = o.postData["g-recaptcha-response"] && o.postData["g-recaptcha-response"].values.length > 0 || !o.postData["g-recaptcha-response"];
            r || i.containerVariantDateInvalid || !a ? t.form.errorHandler(r, n.currentTarget) : r || i.containerVariantDateInvalid || !a || t.form.postHandler(o, n.currentTarget.action)
        },
        postHandler: function(n, o) {
            i.formIsPosting = !0, e.spinner && e.spinner.setAttribute("state", "active"), e.formButton.setAttribute("disabled", "disabled"), t.sendData.xhr("POST", o, n).then(function(n) {
                e.spinner && e.spinner.setAttribute("state", ""), e.formButton.setAttribute("disabled", "disabled");
                var o = t.sendData.callback.success(n);
                t.form.callbackHandler(o), i.formIsPosting = !1
            })
        },
        callbackHandler: function(n) {
            if (n.errorData && Object.keys(n.errorData).length > 0) {
                var i = e.body.querySelector('form[name="' + n.formName + '"]');
                t.form.errorHandler(n.errorData, i)
            } else n.succesData && ($(e.body).trigger(new jQuery.Event("navigate", {
                url: n.succesData.page,
                animation: "blurin",
                windowName: null,
                target: e.body.querySelector(".background.container")
            })), o.submitOnce && $(e.formElement).off("submit", t.form.clickHandler))
        },
        errorHandler: function(n, o) {
            if (t.errorMessage.clearMessages(), e.spinner && e.spinner.setAttribute("state", ""), e.formButton.removeAttribute("disabled"), "string" == typeof n || n instanceof String) {
                var r = n;
                null !== r && t.errorMessage.addMessage(r)
            } else Object.keys(n).forEach(function(e) {
                var i = n[e].message,
                    r = n[e].data.elementType + '[name="' + n[e].data.name + '"]',
                    a = o.querySelector(r);
                t.htmlElement.addStateValueInvalid(a), null !== i && t.errorMessage.addMessage(i)
            });
            "undefined" != typeof grecaptcha && null !== document.querySelector(".recaptcha.container") && (grecaptcha.reset(), i.recaptchaChallengeCompleted = !1, e.recaptcha.length && "invisible" !== e.recaptcha[0].getAttribute("data-size") && e.formButton.setAttribute("disabled", "disabled")), t.errorMessage.setState.active(o)
        },
        getValueOfElement: {
            input: function(e) {
                var t;
                return !e.type || "radio" !== e.type && "checkbox" !== e.type ? e.type && (t = e.value.trim()) : e.checked && (t = e.value.trim()), t
            },
            textarea: function(e) {
                return e.value.trim()
            },
            select: function(e) {
                var t;
                return e.type && "select-one" === e.type ? e.value && (t = e.value) : e.type && "select-multiple" === e.type && (t = [], e.value && e.options && Object.keys(e.options).forEach(function(n) {
                    e.options[n].selected && t.push(e.options[n].value)
                })), t
            }
        },
        serialize: function(e) {
            var n = {
                formName: e.getAttribute("name") || null,
                action: e.getAttribute("action") || null,
                postData: {}
            };
            return n.postData = Array.prototype.slice.call(e.elements).reduce(function(e, n) {
                return n && n.name && (e[n.name] ? "number" == typeof e[n.name].valueKey && isFinite(e[n.name].valueKey) && Math.floor(e[n.name].valueKey) === e[n.name].valueKey && e[n.name].valueKey++ : e[n.name] = {
                    type: n.type,
                    name: n.name,
                    elementType: n.nodeName.toLowerCase(),
                    required: "true" === n.dataset.required,
                    valueCheck: n.dataset.valueCheck || n.type,
                    valueKey: n.dataset.valueKey || 0,
                    values: []
                }, "function" == typeof t.form.getValueOfElement[n.nodeName.toLowerCase()] && (t.form.getValueOfElement[n.nodeName.toLowerCase()](n) && "select" === n.nodeName.toLowerCase() && "select-multiple" === n.type ? e[n.name].values = t.form.getValueOfElement[n.nodeName.toLowerCase()](n) : t.form.getValueOfElement[n.nodeName.toLowerCase()](n) && (n.dataset.valueKey ? e[n.name].values[n.dataset.valueKey] = t.form.getValueOfElement[n.nodeName.toLowerCase()](n) : e[n.name].values.push(t.form.getValueOfElement[n.nodeName.toLowerCase()](n))))), e
            }, {}), n
        },
        resetSubmitButton: function() {
            (0 === e.recaptcha.length || e.recaptcha.length > 0 && "invisible" === e.recaptcha[0].getAttribute("data-size")) && e.formButton.removeAttribute("disabled")
        }
    }, t.formValidation = {
        formData: function(e) {
            var n = {};
            return Object.keys(e).forEach(function(i) {
                var o = {
                        name: e[i],
                        values: e[i].values[0],
                        required: !0 === e[i].required,
                        pattern: e[i].pattern
                    },
                    r = t.formValidation.fieldValidation(o);
                r.hasError && (n[i] = {
                    data: e[i],
                    message: r.errorMessage
                })
            }), Object.keys(n).length > 0 && n
        },
        fieldValidation: function(e) {
            var n = {
                hasError: !1,
                errorMessage: null
            };
            return !1 !== t.formValidation.validationType.isNotEmpty(e.values) || "true" !== e.required && !0 !== e.required ? t.formValidation.validationType.isNotEmpty(e.values) && t.formValidation.validationType.isNotEmpty(e.pattern) && (t.formValidation.validationType.regEx(e.pattern, e.values) || (n.hasError = !0)) : n.hasError = !0, n
        },
        validationType: {
            isNotEmpty: function(e) {
                return void 0 !== e && ("object" == typeof e && Object.keys(e).length > 0 || e.length > 0)
            },
            regEx: function(e, t) {
                return new RegExp(e).test(t)
            },
            text: function(e) {
                return !0
            },
            number: function(e) {
                return /^\d+$/.test(e)
            }
        }
    }, t.sendData = {
        xhr: function(e, t, n) {
            return new Promise(function(i, o) {
                var r = new XMLHttpRequest;
                r.open(e, t), r.setRequestHeader("Content-Type", "application/json; charset=utf-8"), r.setRequestHeader("HeinekenFormsCookie", $('input[name="__RequestVerificationToken"]').val()), r.send(JSON.stringify(n)), r.onload = function() {
                    200 === r.status ? i(r.response) : o(r.statusText)
                }, r.onerror = function() {
                    o(r.statusText)
                }
            })
        },
        callback: {
            success: function(e) {
                return JSON.parse(e)
            },
            error: function(e) {
                console.log(e)
            }
        }
    }, t.errorMessage = {
        setState: {
            hidden: function(e) {
                var n = {
                    element: e.querySelector('.form.unit[variant="error-message"]'),
                    attributeKey: "state",
                    addAttributeValue: "hidden",
                    removeAttributeValue: "active"
                };
                t.errorMessage.toggleState(n)
            },
            active: function(e) {
                var n = {
                    element: e.querySelector('.form.unit[variant="error-message"]'),
                    attributeKey: "state",
                    addAttributeValue: "active",
                    removeAttributeValue: "hidden"
                };
                t.errorMessage.toggleState(n)
            }
        },
        getState: function(e) {
            return e.querySelector('.form.unit[variant="error-message"]').getAttribute("state")
        },
        toggleState: function(e) {
            t.htmlElement.toggleAttributeValue(e)
        },
        clearMessages: function() {
            $('.form.unit[variant="error-message"] .content.unit.text .validationmessages').empty()
        },
        addMessage: function(e) {
            var t = "<p>" + e + "</p>";
            $('.form.unit[variant="error-message"] .content.unit.text .validationmessages').append(t)
        }
    }, t.dateSelector = {
        fullChangeHandler: function(n) {
            var i = t.dateSelector.convertFullToSeperated(e.dateSelectorFullDate.value);
            e.dateSelectorDay.value = i.day, e.dateSelectorMonth.value = i.month, e.dateSelectorYear.value = i.year.toString().slice(-2)
        },
        changeHandler: function(e) {
            var n;
            t.dateSelector.testKeyUpEvent(e) ? (t.dateSelector.testValues(), t.dateSelector.applyState(), "keyup" !== e.type && "keydown" !== e.type || (n = e.currentTarget, n.value.length >= t.dateSelector.maxInputLength(n) && 16 !== e.keyCode && 9 !== e.keyCode && 8 !== e.keyCode && t.dateSelector.jumpToNextInput(n))) : (e.preventDefault(), e.stopImmediatePropagation())
        },
        testValues: function(n) {
            return i.age = {
                day: e.dateSelectorDay.value,
                month: e.dateSelectorMonth.value,
                year: e.dateSelectorYear.value
            }, i.age.day && i.age.month && i.age.year ? t.formValidation.validationType.dateFuture(i.age) ? i.ageState = "valid" : i.ageState = "invalid" : i.age.day || i.age.month || i.age.year ? i.ageState = "progress" : i.ageState = "initial", "valid" === i.ageState
        },
        testFullDateSupport: function() {
            return "date" === e.dateSelectorFullDate.type
        },
        testKeyUpEvent: function(e) {
            var t = "keydown" === e.type,
                n = 9 === e.keyCode,
                i = 13 === e.keyCode,
                o = 8 === e.keyCode,
                r = 46 === e.keyCode,
                a = String.fromCharCode(e.keyCode).match(/[0-9]/),
                s = e.keyCode >= 96 && e.keyCode <= 105,
                l = 229 === e.keyCode;
            return !t || !(!t || !(n || i || a || o || r || s || l))
        },
        convertFullToSeperated: function(e) {
            return e = new Date(e), {
                day: e.getDate(),
                month: e.getMonth() + 1,
                year: e.getFullYear()
            }
        },
        checkInputLength: function(e) {
            return e.value.length
        },
        maxInputLength: function(e) {
            return e.getAttribute("maxlength")
        },
        nextInput: function(e) {
            return e.getAttribute("data-nextfield")
        },
        jumpToNextInput: function(e) {
            var n = t.dateSelector.nextInput(e);
            null !== n && document.getElementById(n).focus()
        },
        dateInput: function(e) {
            var n = e.current,
                i = e.keyCode;
            t.dateSelector.checkInputLength(n) == t.dateSelector.maxInputLength(n) && 16 !== i && 9 !== i && t.dateSelector.jumpToNextInput(n)
        },
        applyState: function(n) {
            n ? e.dateSelectorContainer.setAttribute("state", n) : (t.dateSelector.testValues(), e.dateSelectorContainer.setAttribute("state", i.ageState))
        },
        getContainer: function(e) {
            return e.querySelectorAll(n.dateFieldContainer) || !1
        },
        isStateInvalid: function(e) {
            var n = t.dateSelector.getContainer(e);
            return i.containerVariantDateInvalid = !1, n && [].slice.call(n).forEach(function(e) {
                "valid" !== e.getAttribute("state") && (i.containerVariantDateInvalid = !0)
            }), i.containerVariantDateInvalid
        }
    }, t.renderRecaptcha = function(e) {
        $(n.recaptcha).each(function(e, t) {
            var n;
            $(t).find("iframe");
            0 === $(t).find("iframe").length ? (n = grecaptcha.render(t.id, {
                sitekey: t.getAttribute("data-sitekey"),
                size: t.getAttribute("data-size") || "normal",
                callback: recaptchaCallback
            }), i.recaptchaWidgetId = n) : grecaptcha.reset()
        })
    }, t.recaptchaCallback = function() {
        e.formButton.removeAttribute("disabled"), i.recaptchaChallengeCompleted = !0, "invisible" === e.recaptcha[0].getAttribute("data-size") && $(e.formElement).submit()
    }, t.formatAttribute = function(e) {
        return e.replace(/\[|\]/g, "")
    }, t.mount = function(t) {
        t = t || document.querySelector(n.viewport);
        var i = t.querySelector(n.container);
        return !!i && (e.window = window, e.body = document.querySelector("body"), e.viewport = t || document.querySelector(n.viewport), e.customForm = i, !0)
    }, t.init = function(r) {
        return !!e.customForm && (e.formContainer = e.customForm.querySelector(n.formContainer), e.formFullForm = e.customForm.querySelector(n.formFullForm), e.formElement = e.customForm.querySelectorAll(n.formElement), e.formButton = e.customForm.querySelector(n.formButton), e.recaptcha = e.customForm.querySelectorAll(n.recaptcha), e.requiredFields = e.customForm.querySelectorAll(n.requiredFields), e.postedContainers = e.customForm.querySelector(n.formPostedContainer), e.checkboxFields = e.customForm.querySelectorAll(n.checkboxFields), e.patternFields = e.customForm.querySelectorAll(n.patternFields), e.spinner = e.customForm.querySelector(n.spinner), e.spinner && e.spinner.setAttribute("state", ""), e.dateSelectorContainer = e.customForm.querySelector('.inputfield.container[variant*="date"]'), e.dateSelectorContainer && (e.dateSelectorDay = e.dateSelectorContainer.querySelector('.input[variant*="day"]'), e.dateSelectorMonth = e.dateSelectorContainer.querySelector('.input[variant*="month"]'), e.dateSelectorYear = e.dateSelectorContainer.querySelector('.input[variant*="year"]'), e.dateSelectorFullDate = e.dateSelectorContainer.querySelector('.input[variant*="full"]'), e.dateSelector = e.dateSelectorContainer.querySelectorAll('.input[variant*="dateSelector"]'), e.dateSelectorAllFields = e.dateSelectorContainer.querySelectorAll(".input"), i.fullDateSupport = t.dateSelector.testFullDateSupport(), i.isMobile = e.window.innerWidth < 700, e.dateSelectorFullDate && i.fullDateSupport && i.isMobile && (e.dateSelectorFullDate.setAttribute("state", "active"), $(e.dateSelectorFullDate).on("change", t.dateSelector.fullChangeHandler)), $([e.dateSelectorDay, e.dateSelectorMonth, e.dateSelectorYear]).on("change keydown keyup", t.dateSelector.changeHandler), $(e.dateSelectorAllFields).on("click", t.dateSelector.setFocus)), o.showErrorOnFocusOut = e.formElement[0].hasAttribute(t.formatAttribute(n.showErrorOnFocusOut)), o.navigateTarget = e.formElement[0].hasAttribute(t.formatAttribute(n.navigateTarget)), o.submitOnce = e.formElement[0].hasAttribute(t.formatAttribute(n.submitOnce)), $(e.requiredFields).on("focusin", t.fieldElement.focusIn), $(e.requiredFields).on("focusout", t.fieldElement.focusOut), $(e.patternFields).on("focusin", t.fieldElement.focusIn), $(e.patternFields).on("focusout", t.fieldElement.focusOut), $(e.checkboxFields).on("change", t.fieldElement.toggleCheckbox), $(e.formElement).on("submit", t.form.clickHandler), $(e.body).on("closingOverlay", t.form.resetSubmitButton), i.recaptchaChallengeCompleted = !1, e.recaptcha.length && "invisible" !== e.recaptcha[0].getAttribute("data-size") && e.formButton.setAttribute("disabled", "disabled"), e.formElement[0].setAttribute("novalidate", "novalidate"), !0)
    }, t.render = function(n) {
        return !!e.customForm && (t.renderRecaptcha(), !0)
    }, t.unmount = function() {
        e.customForm && ($(e.formElement).off("submit", t.form.clickHandler), $(e.dateSelectorAllFields).on("click", t.dateSelector.setFocus), $(e.dateSelectorFullDate).on("change", t.dateSelector.fullChangeHandler), $(e.body).off("closingOverlay", t.form.resetSubmitButton))
    }, {
        mount: t.mount,
        init: t.init,
        unmount: t.unmount,
        render: t.render,
        recaptchaCallback: t.recaptchaCallback,
        selector: n.container
    }
}(), window.recaptchaCallback = modules["custom-form"].recaptchaCallback;
var modules = window.modules = window.modules || {};
modules["tab-view"] = function() {
    "use strict";
    var e, t, n;
    return e = {}, t = {
        viewport: '.viewport[variant="live"]',
        container: ".tab-view.container",
        tabViewMenuItem: '.tab-view.unit[variant="menu"] li',
        tabViewMenuItemLink: '.tab-view.unit[variant="menu"] a',
        tabViewContent: '.tab-view.unit[variant="content"]',
        tabContentContainer: ".tab-content.container"
    }, n = {}, {}, n.tabMenu = {
        clickHandler: function(e) {
            e.preventDefault();
            var t = n.tabMenu.getMenuListItems(e.delegateTarget),
                i = e.currentTarget.parentNode;
            [].slice.call(t).forEach(function(e) {
                var t = {
                    element: e,
                    state: e === i ? "active" : ""
                };
                n.tabMenu.setState(t)
            });
            var o = {
                container: e.delegateTarget,
                variant: n.tabMenu.getVariant(i)
            };
            n.tabContent.init(o)
        },
        setState: function(e) {
            e.element.setAttribute("state", e.state)
        },
        getVariant: function(e) {
            return e.getAttribute("variant")
        },
        getMenuListItems: function(e) {
            return e.querySelectorAll(t.tabViewMenuItem)
        }
    }, n.tabContent = {
        init: function(e) {
            var t = n.tabContent.getContentItems(e.container);
            [].slice.call(t).forEach(function(t) {
                var i = {
                    element: t,
                    state: t.getAttribute("variant") === e.variant ? "active" : "hidden"
                };
                n.tabContent.setState(i)
            })
        },
        setState: function(e) {
            e.element.setAttribute("state", e.state)
        },
        getContentItems: function(e) {
            return e.querySelectorAll(t.tabViewContent + " " + t.tabContentContainer)
        }
    }, n.mount = function(n) {
        n = n || document.querySelector(t.viewport);
        var i = n.querySelectorAll(t.container);
        return !(!i || !i.length) && (e.window = window, e.body = document.querySelector("body"), e.viewport = n, !0)
    }, n.init = function(i) {
        i = i || document.querySelector(t.viewport);
        var o = i.querySelectorAll(t.container);
        return !(!o || !o.length) && (e.tabView = o, $(e.tabView).on("click", t.tabViewMenuItemLink, n.tabMenu.clickHandler), !0)
    }, n.render = function(e) {
        e = e || document.querySelector(t.viewport);
        var n = e.querySelectorAll(t.container);
        return !(!n || !n.length)
    }, n.unmount = function() {
        e.tabView && e.tabView
    }, {
        mount: n.mount,
        init: n.init,
        render: n.render,
        unmount: n.unmount,
        selector: t.container
    }
}();
var modules = window.modules = window.modules || {};
modules["calendar-overview"] = function() {
    "use strict";
    var e, t, n, i;
    return e = {
        carousel: "",
        elementWatcher: "",
        slides: ""
    }, t = {
        container: ".calendar-slider:not(.to-be-removed)",
        containerToBeRemoved: ".calendar-slider.to-be-removed",
        eventOuter: ".event-item-outer",
        customDropdown: ".custom-dropdown",
        customDropdownOption: ".custom-dropdown-options__option",
        customDropdownActiveItem: ".custom-dropdown__active-item",
        monthDropdown: ".custom-dropdown.month",
        monthActiveItem: ".month .custom-dropdown__active-item",
        monthOption: ".month .custom-dropdown-options__option",
        locationOption: ".locations .custom-dropdown-options__option",
        locationActiveOption: ".locations .custom-dropdown__active-item",
        tagOption: ".tags .custom-dropdown-options__option",
        tagContainer: ".tag-container",
        backgrounds: ".background",
        activeTag: ".active-tag"
    }, n = {}, i = {
        tags: [],
        activeTags: [],
        availableTags: [],
        activeLocation: "",
        availableLocations: [],
        id: ""
    }, n.detectIeOrEdge = function() {
        var e = window.navigator.userAgent;
        return e.indexOf("Edge/") > -1 || e.indexOf("MSIE ") > -1 || e.indexOf("MSIE ") > -1 || e.indexOf("Trident/") > -1
    }, n.addLeadingZero = function(e, t) {
        var n = "000000000" + e;
        return n.substr(n.length - t)
    }, n.removeDuplicatesFromArray = function(e) {
        return e = e.reduce(function(e, t) {
            return e.indexOf(t) < 0 && e.push(t), e
        }, [])
    }, n.getEventCollection = function() {
        for (var e = $(t.eventOuter), n = [], i = 0; i < e.length; i++) {
            var o = e[i].getAttribute("data-startdate"),
                r = o.slice(0, 4),
                a = o.slice(4, 6),
                s = o.slice(6, 8),
                l = e[i].getAttribute("data-enddate");
            if (l) var c = l.slice(0, 4),
                u = l.slice(4, 6),
                d = l.slice(6, 8);
            else var l = o,
                c = r,
                u = a,
                d = s;
            n.push({
                id: e[i].getAttribute("data-id"),
                startdate: new Date(r, a - 1, s, 23, 59),
                enddate: new Date(c, u - 1, d, 23, 59),
                tags: !!e[i].getAttribute("data-tags") && e[i].getAttribute("data-tags").split(","),
                location: !!e[i].getAttribute("data-location") && e[i].getAttribute("data-location"),
                locationMatch: !0,
                tagMatch: !0,
                enable: !0
            })
        }
        return n
    }, n.dimBackground = function() {
        var n = $(t.backgrounds);
        e.elementWatcher = scrollMonitor.create(e.eventOverview), e.elementWatcher.enterViewport(function() {
            n.addClass("fully-dim")
        }), e.elementWatcher.exitViewport(function() {
            n.removeClass("fully-dim")
        })
    }, n.filterCarousel = function() {
        var o = ($(t.eventOuter), $(t.eventOuter + ".carousel-center"));
        o.index();
        e.carousel.carousel("carouselUnfilter"), i.events.forEach(function(e) {
            $(t.eventOuter + '[data-id="' + e.id + '"]').attr("data-visible", e.enable)
        }), e.carousel.carousel("carouselFilter", '[data-visible="true"]'), $(t.eventOuter).each(function(e, t) {
            $(t).attr("data-carousel-index", e)
        });
        var r = Math.floor($(t.eventOuter).length / 2);
        r > 0 ? e.carousel.carousel("carouselGoTo", r) : ($(t.eventOuter).first().addClass("active"), n.setActiveMonth($(t.eventOuter).first().attr("data-startdate"))), i.availableMonths = n.getAvailableMonths(i.events), n.updateDomTags(i.activeTags), n.disableUnavailableMonths(i.availableMonths), e.slides = e.carousel.find(t.eventOuter)
    }, n.getAvailableMonths = function(e) {
        var t = [];
        return e.forEach(function(e) {
            if (e.enable) {
                var i = e.startdate.getFullYear(),
                    o = e.startdate.getMonth() + 1,
                    r = e.enddate.getFullYear(),
                    a = e.enddate.getMonth() + 1;
                t.push(i + "" + n.addLeadingZero(o, 2)), i === r && o === a || (i !== r ? (o < 12 && (t = n.fillExtraMonths(t, o + 1, 12, i)), t = n.fillExtraMonths(t, 1, a, r)) : t = n.fillExtraMonths(t, o + 1, a, i))
            }
        }), t = n.removeDuplicatesFromArray(t)
    }, n.fillExtraMonths = function(e, t, i, o) {
        for (var r = t; r <= i; r++) e.push(o + "" + n.addLeadingZero(r, 2));
        return e
    }, n.getTagList = function(e) {
        var t = [];
        return e.forEach(function(e) {
            e.tags && (t = t.concat(e.tags))
        }), t = n.removeDuplicatesFromArray(t)
    }, n.getAvailableLocations = function(e, t) {
        var i = [];
        return t.forEach(function(t) {
            t.enable && t.location ? i.push(t.location) : e.length < 1 && i.push(t.location)
        }), i = n.removeDuplicatesFromArray(i)
    }, n.getAvailableTags = function(e, t) {
        var o = [];
        return t.forEach(function(e) {
            (e.enable && e.tags.length > 0 || !i.activeLocation) && (o = o.concat(e.tags))
        }), o = n.removeDuplicatesFromArray(o)
    }, n.findItemInArray = function(e, t) {
        return t.some(function(t) {
            return e.indexOf(t) >= 0
        })
    }, n.filterEventsOnTags = function(e, t) {
        return e.forEach(function(e) {
            0 === t.length ? e.tagMatch = !0 : e.tags && !n.findItemInArray(e.tags, t) || !e.tags ? e.tagMatch = !1 : e.tagMatch = !0
        }), e
    }, n.filterEventsOnLocation = function(e, t) {
        return e.forEach(function(e) {
            e.location !== t && t ? e.locationMatch = !1 : e.locationMatch = !0
        }), e
    }, n.filterOnLocationAndTags = function(e) {
        return e.forEach(function(e) {
            e.locationMatch && e.tagMatch ? e.enable = !0 : e.enable = !1
        }), e
    }, n.selectTag = {
        clickHandler: function(e) {
            var o, r = this.getAttribute("data-value"),
                a = this.getAttribute("state");
            this.setAttribute("state", a ? "" : "active"), "active" !== a ? i.activeTags.push(r) : (o = i.activeTags.indexOf(r), i.activeTags.splice(o, 1)), $(this).closest(t.customDropdown).removeClass("active"), i.activeTags = n.removeDuplicatesFromArray(i.activeTags);
            try {
                sessionStorage.setItem("calendar_" + i.id + ".activeTags", i.activeTags)
            } catch (e) {}
            i.events = n.filterEventsOnTags(i.events, i.activeTags), i.events = n.filterOnLocationAndTags(i.events), i.availableLocations = n.getAvailableLocations(i.activeTags, i.events), n.filterCarousel(), n.updateDomLocations(i.availableLocations)
        },
        activeClickHandler: function(e) {
            $(t.tagOption + '[data-value="' + this.getAttribute("data-value") + '"]').trigger("click")
        }
    }, n.selectLocation = {
        clickHandler: function(e) {
            var o = this.getAttribute("data-value");
            this.getAttribute("state");
            "active" === this.getAttribute("state") && (o = ""), i.activeLocation = o;
            try {
                sessionStorage.setItem("calendar_" + i.id + ".activeLocation", i.activeLocation)
            } catch (e) {}
            $(t.locationOption + '[state="active"]').attr("state", ""), $(t.locationOption + '[data-value="' + o + '"]').attr("state", "active"), i.events = n.filterEventsOnLocation(i.events, i.activeLocation), i.events = n.filterOnLocationAndTags(i.events), $(this).closest(t.customDropdown).removeClass("active"), i.activeLocation.length > 0 ? $(t.locationActiveOption).html($(t.locationOption + '[data-value="' + o + '"]').html()) : $(t.locationActiveOption).html($(t.locationActiveOption).attr("data-label")), n.filterCarousel(), i.availableTags = n.getAvailableTags(i.tags, i.events), n.updateDomTagDropdown(i.availableTags)
        }
    }, n.updateDomTagDropdown = function(e) {
        for (var o, r = $(t.tagOption), a = 0; a < r.length; a++) {
            var s = r[a],
                l = n.findItemInArray(s.getAttribute("data-value"), e);
            if (l) "unavailable" === s.getAttribute("state") && s.setAttribute("state", "");
            else if (s.setAttribute("state", "unavailable"), -1 !== (o = i.activeTags.indexOf(s.getAttribute("data-value")))) {
                i.activeTags.splice(o, 1), n.updateDomTags(i.activeTags);
                try {
                    sessionStorage.setItem("calendar_" + i.id + ".activeTags", i.activeTags)
                } catch (e) {}
            }
            l && -1 !== i.activeTags.indexOf(s.getAttribute("data-value")) && s.setAttribute("state", "active")
        }
    }, n.updateDomLocations = function(e) {
        for (var i = $(t.locationOption), o = 0; o < i.length; o++) {
            var r = i[o];
            n.findItemInArray(r.getAttribute("data-value"), e) ? "unavailable" === r.getAttribute("state") && r.setAttribute("state", "") : r.setAttribute("state", "unavailable")
        }
    }, n.updateDomTags = function(e) {
        var n = e.map(function(e) {
            return '<li class="active-tag" data-value="' + e + '">' + $(t.tagOption + '[data-value="' + e + '"]').html() + "</li>"
        });
        $(t.tagContainer).html(n.join(""))
    }, n.disableUnavailableMonths = function(e) {
        for (var n = $(t.monthOption), i = 0; i < n.length; i++) {
            var o = n[i].getAttribute("data-value"); - 1 === $.inArray(o, e) ? n[i].setAttribute("state", "unavailable") : n[i].setAttribute("state", "available")
        }
    }, n.getMostCurrentEvent = function(e) {
        var t = e,
            n = i.events[i.events.length - 1],
            o = parseInt(n.startdate - t, 10);
        return i.events.forEach(function(e) {
            var i = parseInt(e.startdate - t, 10),
                r = parseInt(e.enddate - t, 10);
            e.enable && r > 0 && i <= o && (o = i, n = e)
        }), n
    }, n.goToSlide = {
        clickHandler: function() {
            e.carousel.carousel("carouselGoTo", parseInt($(this).attr("data-carousel-index"), 10))
        }
    }, n.goToEvent = {
        clickHandler: function(e) {
            var i = $(this).closest(t.eventOuter);
            e.preventDefault(), i.hasClass("active") && i.hasClass("carousel-center") && (n.googleTagManager.logCalendar("Click for details", i.find(".event-item__title").text()), e.currentTarget.querySelector(".event-item-date").classList.add("is-triggered"), setTimeout(function() {
                $("body").trigger(new jQuery.Event("navigate", {
                    url: e.currentTarget.href,
                    animation: "blurin",
                    windowName: e.currentTarget.getAttribute("target"),
                    target: e.currentTarget.querySelector(".event-item__img"),
                    scale: .95
                })), setTimeout(function() {
                    e.currentTarget.querySelector(".event-item-date").classList.remove("is-triggered")
                }, 1500)
            }, 160))
        }
    }, n.customDropdown = {
        clickHandler: function() {
            $(this).closest(t.customDropdown).toggleClass("active").siblings().removeClass("active")
        },
        monthClickHandler: function() {
            var i = $(this).attr("data-value"),
                o = new Date(i.slice(0, 4), i.slice(4, 6) - 1),
                r = n.getMostCurrentEvent(o),
                a = $(t.eventOuter + '[data-id="' + r.id + '"]');
            n.setActiveMonth(i), $(this).closest(t.customDropdown).removeClass("active"), e.carousel.carousel("carouselGoTo", a.index())
        },
        focusOutHandler: function(e) {
            var n = $(this),
                i = $(document.activeElement);
            i.is(t.customDropdown) || $(t.customDropdown).has(i).length || n.removeClass("active")
        }
    }, n.setActiveMonth = function(e) {
        if (!e) return !1;
        var n = e.slice(0, 6),
            i = $(t.monthOption + '[data-value="' + n + '"]').html();
        $(t.monthOption + '[state="active"]').attr("state", ""), $(t.monthOption + '[data-value="' + n + '"]').attr("state", "active"), $(t.monthActiveItem).html(i)
    }, n.setActiveSlide = {
        timeoutAfter: !1,
        timeoutBefore: !1,
        beforeChangeHandler: function() {
            clearTimeout(this.timeoutBefore), $(t.container).attr("data-state", ""), $(t.container).find(".event-item").removeAttr("style"), this.timeoutBefore = setTimeout(function() {
                $(t.container).find(t.eventOuter).removeClass("active")
            }, 200)
        },
        afterChangeHandler: function(e, o, r) {
            clearTimeout(this.timeoutAfter);
            var a = $(t.container).find(t.eventOuter + ":nth-child(" + (r + 1) + ")");
            n.setActiveMonth(a.attr("data-startdate"));
            try {
                sessionStorage.getItem("calendar_" + i.id + ".activeEvent") !== a.attr("data-id") && n.googleTagManager.logCalendar("Focus", a.find(".event-item__title").text())
            } catch (e) {}
            this.timeoutAfter = setTimeout(function() {
                if ($(t.container).find(t.eventOuter).removeClass("active"), a.addClass("active"), i.activeDate = a.attr("data-startdate"), a.attr("data-id")) try {
                    sessionStorage.setItem("calendar_" + i.id + ".activeEvent", a.attr("data-id"))
                } catch (e) {}
                if (0 === a.length) {
                    $(t.container).find(".carousel-center").addClass("active");
                    try {
                        sessionStorage.setItem("calendar_" + i.id + ".activeEvent", $(t.container).find(".carousel-center").attr("data-id"))
                    } catch (e) {}
                }
            }, 300)
        },
        carouselInitHandler: function(e, n, i) {
            $(t.container).find(".carousel-center").addClass("active"), $(t.container).find(".event-item").removeAttr("style"), 21 == $(t.container).find(".event-item-summary__description").height() && window.setTimeout(function() {
                $(t.container).find(".event-item-summary__description").css("height", "23px")
            }, 300)
        }
    }, n.localStorage = {
        setActiveTags: function() {
            try {
                sessionStorage.getItem("calendar_" + i.id + ".activeTags") && (i.activeTags = sessionStorage.getItem("calendar_" + i.id + ".activeTags").split(","), i.events = n.filterEventsOnTags(i.events, i.activeTags), i.events = n.filterOnLocationAndTags(i.events), i.availableLocations = n.getAvailableLocations(i.activeTags, i.events), n.filterCarousel(), n.updateDomLocations(i.availableLocations), n.updateDomTagDropdown(i.tags))
            } catch (e) {}
        },
        setActiveLocation: function() {
            try {
                if (sessionStorage.getItem("calendar_" + i.id + ".activeLocation")) {
                    var e = $(t.locationOption + '[data-value="' + sessionStorage.getItem("calendar_" + i.id + ".activeLocation") + '"]');
                    e.attr("state", "inactive"), n.selectLocation.clickHandler.bind(e[0])()
                }
            } catch (e) {}
        },
        setActiveSlide: function() {
            try {
                if (sessionStorage.getItem("calendar_" + i.id + ".activeEvent")) {
                    var n = sessionStorage.getItem("calendar_" + i.id + ".activeEvent"),
                        o = $(t.eventOuter + '[data-id="' + n + '"]');
                    setTimeout(function() {
                        e.carousel.carousel("carouselGoTo", o.index())
                    }, 500)
                }
            } catch (e) {}
        }
    }, n.removeEventListeners = function() {
        $(t.customDropdownActiveItem).off("click", n.customDropdown.clickHandler), $(t.monthOption).off("click", n.customDropdown.monthClickHandler), $(t.eventOuter).off("click", n.goToSlide.clickHandler), $("body").off("click", t.eventOuter + " a", n.goToEvent.clickHandler), e.carousel.off("beforeChange", n.setActiveSlide.beforeChangeHandler.bind(n.setActiveSlide)), e.carousel.off("afterChange", n.setActiveSlide.afterChangeHandler.bind(n.setActiveSlide)), $(t.tagOption).off("click", n.selectTag.clickHandler), $(t.tagContainer).off("click", t.activeTag, n.selectTag.activeClickHandler), $(t.customDropdown).off("focusout", n.customDropdown.focusOutHandler), $(t.locationOption).off("click", n.selectLocation.clickHandler)
    }, n.addEventListeners = function() {
        $(t.customDropdownActiveItem).on("click", n.customDropdown.clickHandler), $(t.monthOption).on("click", n.customDropdown.monthClickHandler), $(t.eventOuter).on("click", n.goToSlide.clickHandler), $("body").on("click", t.eventOuter + " a", n.goToEvent.clickHandler), e.carousel.on("beforeChange", n.setActiveSlide.beforeChangeHandler.bind(n.setActiveSlide)), e.carousel.on("afterChange", n.setActiveSlide.afterChangeHandler.bind(n.setActiveSlide)), $(t.tagOption).on("click", n.selectTag.clickHandler), $(t.tagContainer).on("click", t.activeTag, n.selectTag.activeClickHandler), $(t.customDropdown).on("focusout", n.customDropdown.focusOutHandler), $(t.locationOption).on("click", n.selectLocation.clickHandler)
    }, n.googleTagManager = {
        logCalendar: function(e, t) {
            void 0 !== window.dataLayer && window.dataLayer.push({
                event: "interaction_calendar",
                events: {
                    category: "Calendar",
                    action: e,
                    label: t
                }
            })
        }
    }, n.init = function() {
        var o, r;
        if (e.eventOverview && !$(".overlay.unit .event-detail")[0]) {
            return -1 === $(t.container).closest(".event.container").attr("modifier").indexOf("no-background-transition") && n.dimBackground(), i.id = $(t.container).closest(".event.container").attr("id"), i.events = n.getEventCollection(), i.availableMonths = n.getAvailableMonths(i.events), i.tags = n.getTagList(i.events), n.updateDomTagDropdown(i.tags), n.disableUnavailableMonths(i.availableMonths), o = n.getMostCurrentEvent(new Date), r = $(t.eventOuter + '[data-id="' + o.id + '"]'), $(t.container).on("init", n.setActiveSlide.carouselInitHandler), e.carousel = $(t.container).carousel({
                centerMode: !0,
                variableWidth: !0,
                infinite: !1,
                swipeToSlide: !0,
                arrows: !1,
                initialSlide: r.index(),
                touchThreshold: 8
            }), e.slides = e.carousel.find(t.eventOuter), n.addEventListeners(), n.setActiveMonth(r.attr("data-startdate")), n.localStorage.setActiveTags(), n.localStorage.setActiveLocation(), n.localStorage.setActiveSlide(), !0
        }
        return !1
    }, n.mount = function(n) {
        n = n || document.querySelector(t.viewport);
        var i = n.querySelector(t.container);
        return !!i && (e.window = window, e.body = document.querySelector("body"), e.viewport = n, e.eventOverview = i, !0)
    }, n.unmount = function() {
        $(".overlay.unit .event-detail")[0] && $(".overlay.unit .event-detail").closest(".full-viewport.container").remove(), $(e.eventOverview).addClass("to-be-removed"), window.setTimeout(function() {
            $(t.containerToBeRemoved).remove()
        }, 1e3), e.eventOverview = !1, i.activeTags = [], e.elementWatcher && e.elementWatcher.destroy(), n.removeEventListeners()
    }, {
        init: n.init,
        mount: n.mount,
        unmount: n.unmount,
        selector: t.container
    }
}();
var modules = window.modules = window.modules || {};
modules["event-detail"] = function() {
    "use strict";
    var e, t, n;
    return e = {
        container: !1,
        $background: !1
    }, t = {
        container: ".event-detail.container"
    }, n = {}, {}, n.parallax = function() {
        function e() {
            requestAnimationFrame(e), n.scrollEvent()
        }
        n.reposition(), $(".event-detail__bg").css("position", "absolute").css("width", "100%").css("left", 0), e()
    }, n.scrollEvent = function() {
        var e = $(".full-viewport-info.unit").scrollTop();
        $(".event-detail__date").css("transform", "translate3d(0, " + .63 * e + "px,0)"), $(".event-detail__bg").css("transform", "translate3d(0, " + .5 * e + "px,0)")
    }, n.reposition = function() {
        $(".event-detail-content").css("transform", "translate3d(0, " + $(".event-detail__bg").height() + "px,0)")
    }, n.debounce = function(e, t, n) {
        var i;
        return function() {
            var o = this,
                r = arguments,
                a = function() {
                    i = null, n || e.apply(o, r)
                },
                s = n && !i;
            clearTimeout(i), i = setTimeout(a, t), s && e.apply(o, r)
        }
    }, n.removeEventListeners = function() {
        $(window).off("resize", n.debounce)
    }, n.addEventListeners = function() {
        $(window).on("resize", n.debounce(n.reposition, 32))
    }, n.init = function() {
        return !!e.container && (n.parallax(), !0)
    }, n.mount = function(i) {
        i = i || document.querySelector(t.viewport);
        var o = i.querySelector(t.container);
        return !!o && (n.removeEventListeners(), n.addEventListeners(), e.container = o, e.viewport = i, e.$background = $(e.viewport).find(".event-detail__bg"), !0)
    }, n.unmount = function() {
        n.removeEventListeners()
    }, {
        init: n.init,
        mount: n.mount,
        unmount: n.unmount,
        selector: t.container
    }
}();
var modules = window.modules = window.modules || {};
modules["loop-video"] = function() {
    "use strict";
    var e, t, n, i;
    return e = {
        loopVideo: "",
        loopVideoContainer: ""
    }, t = {
        container: ".loop-video-container",
        youtubePlaceholder: ".youtube-player-placeholder",
        youtubePlayer: ".youtube-player",
        overlayContainer: ".overlay.container",
        overlayCopy: ".event-detail .overlay.to-be-copied"
    }, n = {}, i = {}, n.openSecondOverlay = function() {
        var e = $(t.overlayCopy).clone(),
            n = $(t.overlayContainer);
        e.find(t.youtubePlaceholder).attr("class", "youtube-player"), e.attr("state", "active"), n.find('> .overlay.unit[name="video"]').remove(), e.appendTo(t.overlayContainer), window.setTimeout(function() {
            n.attr("state", "active")
        }, 500), modules["full-viewport"].mount(e[0]), modules["full-viewport"].init(e[0]), modules["full-viewport"].render()
    }, n.video = function() {
        var o, r, a, s, l;
        return {
            init: function() {
                i.youtubeApiLoaded.then(function(t) {
                    var a = e.loopVideoContainer.getAttribute("data-youtube-id");
                    s = parseInt(e.loopVideoContainer.getAttribute("data-start-loop")), l = parseInt(e.loopVideoContainer.getAttribute("data-end-loop")), i.video = new t.Player("loop-video", {
                        height: "390",
                        width: "640",
                        videoId: a,
                        playerVars: {
                            html5: 1,
                            modestbranding: 1,
                            rel: 0,
                            showinfo: 0,
                            wmode: "opaque",
                            controls: 0
                        },
                        events: {
                            onReady: function(e) {
                                o = e.target, r = e.target.getIframe(), n.video.playerReadyHandler(e, {
                                    iframe: r,
                                    player: o
                                })
                            }
                        }
                    })
                })
            },
            unmount: function() {
                try {
                    o.destroy()
                } catch (e) {}
            },
            timeHandler: function() {
                o.getCurrentTime() >= l && o.seekTo(s)
            },
            playerReadyHandler: function(e, i) {
                i.player.mute(), i.player.seekTo(s), i.player.playVideo(), setTimeout(function() {
                    $(t.container).addClass("display-video")
                }, 500), a = setInterval(n.video.timeHandler, 500)
            }
        }
    }(), n.closeSecondOverlay = function(e) {
        $(".overlay.unit.to-be-copied").attr("state", ""), modules["full-viewport"].unmount(), $('.overlay.unit[name="xhr"] div').length > 0 ? $('.overlay.unit[name="xhr"]').attr("state", "active") : $(".overlay.container").attr("state", "")
    }, n.removeEventListeners = function() {
        $("body").off("click", ".close-second-overlay", n.closeSecondOverlay), $("body").off("click", ".loop-video-play-button > div", n.openSecondOverlay), window.removeEventListener("popstate", n.closeSecondOverlay)
    }, n.addEventListeners = function() {
        $("body").on("click", ".close-second-overlay", n.closeSecondOverlay), $("body").on("click", ".loop-video-play-button > div", n.openSecondOverlay), window.addEventListener("popstate", n.closeSecondOverlay)
    }, n.init = function() {
        return !(!e.loopVideoContainer || !e.loopVideoContainer.getAttribute("data-youtube-id")) && (n.video.init(), !0)
    }, n.mount = function(o) {
        o = o || document.querySelector(t.viewport);
        var r = o.querySelector(t.container);
        return !!r && (n.removeEventListeners(), n.addEventListeners(), e.window = window, e.body = document.querySelector("body"), e.viewport = o, e.loopVideoContainer = r, document.body.clientWidth > 769 && (i.youtubeApiLoaded = new Promise(function(e, t) {
            if (window.YT && window.YT.Player) e(window.YT);
            else {
                var n = function(t) {
                    return function() {
                        "function" == typeof t && t(), e(window.YT)
                    }
                }(window.onYouTubeIframeAPIReady);
                window.onYouTubeIframeAPIReady = n
            }
        })), !0)
    }, n.unmount = function() {
        n.removeEventListeners()
    }, {
        init: n.init,
        mount: n.mount,
        unmount: n.unmount,
        selector: t.container
    }
}();
var modules = window.modules = window.modules || {};
modules.carrousel = function() {
    "use strict";
    var e, t, n, i;
    return e = {
        carousel: "",
        carouselnav: "",
        elementWatcher: ""
    }, t = {
        container: ".carrousel-carousel.slider",
        outerContainer: ".carrousel.container",
        containernav: ".carrousel-carousel-nav.slider",
        slideOuter: ".slide-item-outer",
        slideImg: ".slide-item-outer img",
        slidenavOuter: ".slidenav-item-outer",
        videoTrigger: ".slide-item .trigger",
        backgrounds: ".carrousel-bg.background",
        winContainer: ".carrousel.carrousel--win",
        winIntro: ".carrousel--win__intro",
        winSvg: ".carrousel--win__intro svg"
    }, n = {}, i = {
        carrouselActive: !1,
        videoTimeout: !1,
        currentSlide: 0,
        isSwiping: !1,
        videoPlayBackTimes: {},
        timeouts: {
            autoplayVideo: !1,
            beforeSlide: !1,
            afterSlide: !1
        },
        triggerClicked: !1
    }, n.dimBackground = function() {
        var n = $(t.backgrounds).length ? $(t.backgrounds) : $("body");
        e.elementWatcher = scrollMonitor.create(e.slideOverview), e.elementWatcher.enterViewport(function() {
            n.addClass("fully-dim")
        }), e.elementWatcher.exitViewport(function() {
            n.removeClass("fully-dim")
        })
    }, n.goToSlide = {
        clickHandler: function(o) {
            var r = o.currentTarget.closest(t.outerContainer),
                a = r.getAttribute("data-id"),
                s = parseInt(this.getAttribute("data-carousel-index"), 10);
            if (i.player) {
                var l = r.querySelector(".carousel-center").getAttribute("data-id");
                n.videoBackground.destroyVideo(l), window.setTimeout(function() {
                    e["carousel-" + a].carousel("carouselGoTo", s)
                }, 500)
            } else e["carousel-" + a].carousel("carouselGoTo", s)
        }
    }, n.goToTarget = {
        clickHandler: function(e) {
            var n = $(this).closest(t.slideOuter),
                i = e.currentTarget.querySelector(".slide-item__description"),
                o = e.currentTarget.querySelector(".slide-item__img-fg");
            e.currentTarget.querySelector("iframe");
            e.preventDefault(), n.hasClass("active") && n.hasClass("carousel-center") && ($(i).addClass("fade-out"), $("body").trigger(new jQuery.Event("navigate", {
                url: e.currentTarget.href,
                animation: "overlay",
                windowName: e.currentTarget.getAttribute("target"),
                target: o,
                class: e.currentTarget.querySelector(".slide-item__img-fg") ? "rounded" : ""
            })))
        }
    }, n.getCurrentSlide = function() {
        return $(t.container).find(t.slideOuter + ".active")
    }, n.triggerPlayVideo = function(e) {
        var o = $(e.currentTarget).closest(t.container);
        i.triggerClicked = !0, n.videoBackground.initVideo(!1, o)
    }, n.videoBackground = {
        initYouTubeApi: function() {
            i.youtubeApiLoaded = new Promise(function(e, t) {
                if (window.YT && window.YT.Player) e(window.YT);
                else {
                    var n = function(t) {
                        return function() {
                            "function" == typeof t && t(), e(window.YT)
                        }
                    }(window.onYouTubeIframeAPIReady);
                    window.onYouTubeIframeAPIReady = n
                }
            }), i.youtubeApiLoaded.then(function(e) {
                i.YT = e, n.getCurrentSlide().is('[data-youtube-autoplay*="true"]') && !i.isMobile && n.videoBackground.initVideo()
            })
        },
        initVideo: function(e, o) {
            var r, a = $(t.container).find(t.slideOuter + ".active"),
                s = "object" == typeof i.player ? $(i.player.getIframe()).closest(t.outerContainer) : null;
            if (i.player = !0, o ? (a = o.find(t.slideOuter + ".active"), a.hasClass("video-is-active") || o.find(t.slideOuter).removeClass("video-is-active")) : $(t.slideOuter).removeClass("video-is-active"), e && i.player && s) return s.addClass("video-is-active"), !1;
            if (o && s && i.player && s.attr("data-id") === o.closest(t.outerContainer).attr("data-id") && (i.player.destroy(), i.player = !1), a.attr("data-youtube-id") && i.YT) {
                var l = a.attr("data-youtube-id");
                i.video = new i.YT.Player("youtube-holder-" + a.attr("data-id") + "-" + l, {
                    height: "563",
                    width: "1000",
                    videoId: l,
                    playerVars: {
                        html5: 1,
                        modestbranding: 1,
                        rel: 0,
                        showinfo: 0,
                        wmode: "opaque",
                        controls: 1,
                        loop: 1,
                        playlist: l
                    },
                    events: {
                        onReady: function(e) {
                            try {
                                i.player.destroy()
                            } catch (e) {}
                            i.player = e.target, r = e.target.getIframe(), n.videoBackground.playerReadyHandler(e, {
                                iframe: r,
                                player: i.player
                            })
                        }
                    }
                })
            }
        },
        playerReadyHandler: function(e, o) {
            function r(t) {
                var r = window.pageYOffset + window.innerHeight,
                    s = a.offset().top + a.height() / 2;
                r >= s && window.pageYOffset <= s ? o.player.getPlayerState() === YT.PlayerState.CUED ? (i.videoPlayBackTimes[l] && t && o.player.seekTo(i.videoPlayBackTimes[l]), i.isMobile || o.player.mute(), o.player.playVideo(), e.target.c.dataset.pauseByCode && delete e.target.c.dataset.pauseByCode) : o.player.getPlayerState() === YT.PlayerState.PAUSED && e.target.c.dataset.pauseByCode && (o.player.playVideo(), e.target.c.dataset.pauseByCode && delete e.target.c.dataset.pauseByCode) : o.player.getPlayerState() !== YT.PlayerState.PLAYING || n.videoBackground.isVideoFullScreen() || (o.player.pauseVideo(), e.target.c.dataset.pauseByCode = !0), setTimeout(function() {
                    i.isMobile && !i.triggerClicked || a.addClass("video-is-active")
                }, 700)
            }
            var a = $(o.iframe).closest(t.slideOuter),
                s = a.closest(t.outerContainer).attr("data-id"),
                l = a.attr("data-id");
            r(!0);
            var c = "videoInViewCheck" + s,
                u = "scroll." + c;
            jQuery._data(window, "events").scroll && jQuery._data(window, "events").scroll.find(function(e) {
                return e.namespace === c
            }) || $(window).on(u, debounce(function() {
                r(!1)
            }, 200))
        },
        destroyVideo: function(e) {
            var n = $(t.slideOuter).find("iframe.slide-item__youtube-holder");
            if (n) {
                var o = '<span class="slide-item__youtube-holder" id="' + n.attr("id") + '"></span>';
                n.after(o), n.remove()
            }
            if (i.player) {
                i.player.getCurrentTime && "object" == typeof i.player ? i.videoPlayBackTimes[e] = i.player.getCurrentTime() : i.videoPlayBackTimes[e] = 0;
                try {
                    i.player.destroy()
                } catch (e) {}
                i.player = !1
            }
        },
        isVideoFullScreen: function() {
            return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement)
        }
    }, n.setActiveSlide = {
        beforeChangeHandler: function(e, o, r, a) {
            var s = o.$slider.closest(t.outerContainer);
            if (a !== r && (s.find(t.slideOuter).removeClass("video-is-active"), i.player)) {
                var l = s.find(t.slideOuter + ":nth-child(" + (r + 1) + ")").attr("data-id");
                n.videoBackground.destroyVideo(l)
            }
            clearTimeout(i.timeouts.beforeSlide), i.timeouts.beforeSlide = setTimeout(function() {
                s.find(t.slidenavOuter).removeClass("active")
            }, 200)
        },
        afterChangeHandler: function(e, o, r) {
            var a = e.currentTarget.parentElement,
                s = a.querySelector(t.slideOuter + ":nth-child(" + (r + 1) + ")"),
                l = (o.$slider.closest(t.outerContainer), "scroll.videoInViewCheck" + a.getAttribute("data-id"));
            clearTimeout(i.timeouts.afterSlide), clearTimeout(i.timeouts.autoplayVideo), $(window).off(l), i.isSwiping ? (n.googleTagManager.logCarousel("slide", i.isSwiping), i.isSwiping = !1) : n.googleTagManager.logCarousel("click", r), i.timeouts.afterSlide = setTimeout(function() {
                n.setActiveSlide.setActiveClasses(r, a), "true" !== s.getAttribute("data-youtube-autoplay") || i.isMobile || (i.timeouts.autoplayVideo = setTimeout(function() {
                    n.videoBackground.initVideo(o.currentSlide === i.currentSlide, o.$slider)
                }, 1e3)), i.currentSlide = o.currentSlide
            }, 300)
        },
        setActiveClasses: function(e, n) {
            for (var i = n.querySelectorAll(t.slideOuter + ", " + t.slidenavOuter), o = n.querySelector(t.slideOuter + ":nth-child(" + (e + 1) + ")"), r = n.querySelector(t.slidenavOuter + ":nth-child(" + (e + 1) + ")"), a = 0; a < i.length; a++) i[a].classList.remove("active");
            o.classList.add("active"), r.classList.add("active")
        },
        carouselInitHandler: function(e, i, o) {
            var r = i.$slider.closest(t.outerContainer);
            r.find(t.winContainer).attr("data-slide-count", i.slideCount), r.find(".slidenav-item-outer:nth-child(" + (i.currentSlide + 1) + ")").addClass("active"), r.find(t.slideOuter + ":nth-child(" + (i.currentSlide + 1) + ")").addClass("active");
            var o = i.$slider.find(t.slideOuter + ".active");
            setTimeout(function() {
                i.$slider.carousel("setPosition")
            }, 100), o.is('[data-youtube-autoplay*="true"]') && (this.timeoutAfter = setTimeout(function() {
                n.videoBackground.initVideo(!1, i.$slider)
            }, 150))
        }
    }, n.winIntro = {
        animate: function(e, n, i, o) {
            var r = $(t.winContainer),
                a = $(t.winSvg).find("> path.draw"),
                s = $(t.winSvg).find("> :not(path.draw)"),
                l = ["draw", "introtext", "carrousel", "finished"];
            $.each(a, function(t) {
                var r = this.getTotalLength();
                $(this).css({
                    "stroke-dashoffset": r,
                    "stroke-dasharray": r + " " + r
                }), $(this).delay(o * t + i).animate({
                    "stroke-dashoffset": 0
                }, {
                    duration: Math.floor(Math.random() * (n - e)) + e,
                    easing: "swing"
                })
            }), $.each(s, function(e) {
                $(this).css({
                    opacity: 0
                }), $(this).delay(Math.floor(Math.random() * (n / 3) + i)).animate({
                    opacity: 1
                }, {
                    duration: n / 5,
                    easing: "swing",
                    complete: function() {
                        r.attr("data-animation-state", l[1])
                    }
                })
            }), window.setTimeout(function() {
                r.attr("data-animation-state", l[2]), window.setTimeout(function() {
                    r.attr("data-animation-state", l[3])
                }, 200)
            }, n - 200)
        }
    }, n.googleTagManager = {
        logCarousel: function(e, t) {
            void 0 !== window.dataLayer && window.dataLayer.push({
                action: e,
                label: t,
                category: "Carousel",
                event: "interaction_carouselSwipes"
            })
        }
    }, n.superscriptChars = function() {
        var e, t, n = document.querySelectorAll(".slide-item__line span");
        $(n).each(function() {
            e = $(this).html(), t = e.replace(/®/g, "<sup>®</sup>").replace(/™/g, "<sup>™</sup>").replace(/©/g, "<sup>©</sup>"), $(this).html(t)
        })
    }, n.removeEventListeners = function() {
        $("body").off("click", t.slideOuter + " a", n.goToTarget.clickHandler), $(t.container).each(function(i, o) {
            var r = $(o).closest(t.outerContainer),
                a = $(o).closest(t.outerContainer).attr("data-id"),
                s = "scroll.videoInViewCheck" + a;
            $(window).off(s), r.find(t.slideOuter).off("click", n.goToSlide.clickHandler), e["carousel-" + a].off("beforeChange", n.setActiveSlide.beforeChangeHandler.bind(n.setActiveSlide)), e["carousel-" + a].off("afterChange", n.setActiveSlide.afterChangeHandler.bind(n.setActiveSlide)), e["carousel-" + a].off("click", t.videoTrigger, n.triggerPlayVideo), e["carousel-" + a].off("swipe"), e["carouselnav-" + a].off("swipe")
        })
    }, n.addEventListeners = function() {
        $("body").on("click", t.slideOuter + " a", n.goToTarget.clickHandler), $(t.container).each(function(o, r) {
            var a = $(r).closest(t.outerContainer),
                s = $(r).closest(t.outerContainer).attr("data-id");
            a.find(t.slideOuter).on("click", n.goToSlide.clickHandler), e["carousel-" + s].on("beforeChange", n.setActiveSlide.beforeChangeHandler.bind(n.setActiveSlide)), e["carousel-" + s].on("afterChange", n.setActiveSlide.afterChangeHandler.bind(n.setActiveSlide)), e["carousel-" + s].on("click", t.videoTrigger, n.triggerPlayVideo), e["carousel-" + s].on("swipe", function(e, t, n) {
                i.isSwiping = n
            }), e["carouselnav-" + s].on("swipe", function(e, t, n) {
                i.isSwiping = n
            })
        })
    }, n.init = function() {
        return $(".slide-item__description").removeClass("fade-out"), i.isMobile = navigator.userAgent.match(/Android|iPhone|iPad/i), !(!e.slideOverview || !1 !== i.carrouselActive) && (i.carrouselActive = !0, $(t.container).each(function(o, r) {
            var a = $(r).closest(t.outerContainer),
                s = a.attr("modifier") ? a.attr("modifier") : "";
            i.isMobile && a.addClass("is-mobile"), -1 === s.indexOf("no-background-transition") && n.dimBackground(), $(r).on("init", n.setActiveSlide.carouselInitHandler);
            var l = a.attr("data-id");
            e["carousel-" + l] = $(r).carousel({
                centerMode: !0,
                variableWidth: !0,
                infinite: !1,
                swipeToSlide: !0,
                arrows: !1,
                touchThreshold: 8,
                autoplay: !1,
                dots: !1,
                asNavFor: ".nav-" + l
            }), e["carouselnav-" + l] = $(".nav-" + l).carousel({
                centerMode: !0,
                variableWidth: !0,
                infinite: !1,
                swipeToSlide: !0,
                arrows: !1,
                touchThreshold: 8,
                autoplay: !1,
                dots: !1,
                asNavFor: ".slider-" + l,
                focusOnSelect: !0
            })
        }), $(t.winContainer).length && n.winIntro.animate(3e3, 3500, 200, 50), n.videoBackground.initYouTubeApi(), n.addEventListeners(), n.superscriptChars(), !0)
    }, n.mount = function(n) {
        n = n || document.querySelector(t.viewport);
        var i = n.querySelector(t.container);
        return !!i && (e.window = window, e.body = document.querySelector("body"), e.viewport = n, e.slideOverview = i, !0)
    }, n.unmount = function() {
        e.slideOverview = !1, e.elementWatcher && e.elementWatcher.destroy(), n.removeEventListeners(), i.carrouselActive = !1
    }, {
        init: n.init,
        mount: n.mount,
        unmount: n.unmount,
        selector: t.container
    }
}();
var modules = window.modules = window.modules || {};
modules.craas = function() {
    "use strict";
    var e, t, n;
    return e = {
        elementWatcher: ""
    }, t = {}, {}, n = {
        container: ".craas.container",
        form: ".craas__form",
        backgrounds: ".background",
        submitButton: 'button[type="submit"]'
    }, t.dimBackground = function() {
        var t = $(n.backgrounds);
        e.elementWatcher = scrollMonitor.create(e.submitButton, {
            top: 300
        }), e.elementWatcher.enterViewport(function() {
            t.addClass("fully-dim")
        }), e.elementWatcher.exitViewport(function() {
            t.removeClass("fully-dim")
        })
    }, t.init = function() {
        if (e.window = window, e.body = document.querySelector("body"), e.craas) {
            e.craasform = e.viewport.querySelector(n.form), e.submitButton = e.craasform.querySelector(n.submitButton);
            return -1 === $(e.craas).attr("modifier").indexOf("no-background-transition") && t.dimBackground(), !0
        }
        return !1
    }, t.render = function() {}, t.unmount = function() {
        e.elementWatcher && e.elementWatcher.destroy()
    }, t.mount = function(t) {
        var i = $(n.container)[0];
        return !!i && (e.window = window, e.body = document.querySelector("body"), e.viewport = t, e.craas = i, !0)
    }, {
        init: t.init,
        mount: t.mount,
        unmount: t.unmount,
        selector: n.container,
        render: t.render
    }
}();
var modules = window.modules = window.modules || {};
modules.raas = function() {
    "use strict";
    var e, t, n;
    return e = {
        container: ".shared-button.buy-now-button",
        raasmenu: ".slide-button-list",
        viewport: '.viewport[variant*="live"]'
    }, t = {}, n = {
        isBtnHover: !1,
        isMenuHover: !1
    }, t.raasmenu = {
        btnOver: function(i) {
            n.isBtnHover = !0;
            var o = $(i.target);
            if (o.is(":not(.hover)")) {
                var r = o.outerHeight(),
                    a = o.outerWidth(),
                    s = o.offset().left,
                    l = o.offset().top,
                    c = o.find(e.raasmenu);
                o.addClass("hover"), c.clone().appendTo(e.viewport).outerWidth(a).css("left", s).css("top", l + r).addClass("hover").on("mouseover", t.raasmenu.menuOver).on("mouseout", t.raasmenu.menuOut)
            }
        },
        menuOver: function() {
            n.isMenuHover = !0
        },
        btnOut: function() {
            n.isBtnHover = !1, setTimeout(function() {
                n.isMenuHover || t.raasmenu.out()
            }, 100)
        },
        menuOut: function() {
            n.isMenuHover = !1, setTimeout(function() {
                n.isBtnHover || t.raasmenu.out()
            }, 100)
        },
        out: function() {
            n.isBtnHover || n.isMenuHover || ($(e.container).removeClass("hover"), $(e.viewport).find(e.raasmenu + ".hover").remove())
        }
    }, t.mount = function(t) {
        var n = t.querySelectorAll(e.container);
        return !(!n || !n.length)
    }, t.init = function(n) {
        var i = n.querySelectorAll(e.container);
        if (i && i.length)
            for (var o = 0; o < i.length; o++) $(i[o]).on("mouseover", t.raasmenu.btnOver).on("mouseout", t.raasmenu.btnOut)
    }, t.unmount = function() {
        var n = viewport.querySelectorAll(e.container);
        if (n && n.length)
            for (var i = 0; i < n.length; i++) $(n[i]).off("mouseover", t.raasmenu.btnOver).off("mouseout", t.raasmenu.btnOut)
    }, {
        mount: t.mount,
        init: t.init,
        unmount: t.unmount,
        selector: e.container
    }
}();
var modules = window.modules = window.modules || {};
modules.stackla = function() {
    "use strict";
    var e, t;
    return e = {
        container: ".stackla-widget",
        body: "body"
    }, t = {}, t.mount = function(t) {
        var n = t.querySelectorAll(e.container);
        return !(!n || !n.length) && (elements.viewport = t, !0)
    }, t.init = function(t) {
        var n = t.querySelectorAll(e.container);
        n && n.length && ($(e.body).addClass("stackla-enabled"), function(e, t) {
            if (!e.getElementById(t)) {
                var n = e.createElement("script");
                n.type = "text/javascript", n.src = "//assetscdn.stackla.com/media/js/widget/fluid-embed.js", n.id = t, (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(n)
            }
        }(document, "stackla-widget-js"))
    }, t.unmount = function() {
        window.StacklaFluidWidget.destroy(!0), $(".stackla-widget-mask").remove(), $("#stackla-widget-js").remove(), $(e.body).removeClass("stackla-enabled")
    }, {
        mount: t.mount,
        init: t.init,
        unmount: t.unmount,
        selector: e.container
    }
}();
var modules = window.modules = window.modules || {};
modules["sticky-element"] = function() {
    "use strict";
    var e, t, n, i;
    return e = {
        viewport: '.viewport[variant="live"]',
        container: "[sticky]",
        fixedLegalStatement: '.legal.container[variant="fixed"]',
        movedElement: "",
        footerContainer: ".footer.container"
    }, t = {}, n = {}, i = {
        mobileBreakpoint: "750px"
    }, t.doSticky = function(e, o) {
        switch (o) {
            case "mobileOnly":
                i.isMobile.matches ? (t.makeSticky(e), n.footerElement && (t.recalculateFooterPosition(), $(n.footerElement).css("margin-top", $(n.stickyContainer).css("height")), $(e).css("margin-bottom", $(n.footerElement).css("height")), $(n.stickyContainer).css("height", 0))) : (n.footerElement && ($(n.footerElement).css("margin-top", "inherit"), $(e).css("margin-bottom", "inherit")), t.unmakeSticky(e));
                break;
            case "keepOffsetLeft":
                i.elementScrollMonitor.isAboveViewport ? $(e).is(":not(.is-sticky)") && (i.elementScrollOffset = $(e).offset(), t.makeSticky(e), $(e).css("left", i.elementScrollOffset.left)) : $(e).is(".is-sticky") && ($(e).css("left", "inherit"), t.unmakeSticky(e));
                break;
            case "inViewportAndAbove":
                i.elementScrollMonitor.isFullyInViewport || i.elementScrollMonitor.isAboveViewport ? $(e).is(":not(.is-sticky)") && t.makeSticky(e) : $(e).is(".is-sticky") && t.unmakeSticky(e);
                break;
            default:
                i.elementScrollMonitor.isAboveViewport ? $(e).is(":not(.is-sticky)") && mmethods.makeSticky(e) : $(e).is(".is-sticky") && t.unmakeSticky(e)
        }
    }, t.makeSticky = function(t) {
        $(t).parent($(n.stickyContainer)).css("height", $(t).outerHeight()).end().addClass("is-sticky").appendTo($(e.viewport))
    }, t.unmakeSticky = function(e) {
        $(e).appendTo($(n.stickyContainer)).removeClass("is-sticky").parent($(n.stickyContainer)).css("height", "auto")
    }, t.recalculateLocation = function() {
        i.elementScrollMonitor && (i.elementScrollMonitor.unlock(), setTimeout(function() {
            i.elementScrollMonitor.recalculateLocation()
        }, 100), setTimeout(function() {
            i.elementScrollMonitor.lock()
        }, 150)), i.footerScrollMonitor && (i.footerScrollMonitor.unlock(), "mobileOnly" === n.stickyContainer.getAttribute("sticky") && t.recalculateFooterPosition(), setTimeout(function() {
            i.footerScrollMonitor.recalculateLocation()
        }, 100), setTimeout(function() {
            i.footerScrollMonitor.lock()
        }, 150))
    }, t.recalculateFooterPosition = function() {
        i.isMobile.matches && $(n.stickyElement).css("margin-bottom", $(n.footerElement).css("height"))
    }, t.createBreakpointSticky = function() {
        i.isMobile = window.matchMedia("(max-width: " + i.mobileBreakpoint + ")"), i.isMobile.addListener(t.matchMediaHandler), i.isMobile.matches && n.stickyElement.classList.remove("wow", "fadeInUp"), t.doSticky(n.stickyElement, i.stickyScenario)
    }, t.matchMediaHandler = function() {
        t.doSticky(n.stickyElement, i.stickyScenario)
    }, t.createScrollSticky = function() {
        i.elementScrollMonitor = scrollMonitor.create(n.stickyElement, stickyOffset), i.elementScrollMonitor.lock(), i.elementScrollMonitor.stateChange(function() {
            t.doSticky(n.stickyElement, i.stickyScenario)
        })
    }, t.mount = function(t) {
        var i = t.querySelectorAll(e.container);
        return !(!i || !i.length) && (n.viewport = t, !0)
    }, t.init = function(t) {
        var n = t.querySelectorAll(e.container);
        return !(!n || !n.length)
    }, t.render = function(o) {
        o = o || document.querySelector(e.viewport);
        var r = o.querySelectorAll(e.container);
        if (r && r.length) {
            n.stickyContainer = r[0], n.stickyElement = n.stickyContainer.firstElementChild, n.footerElement = document.querySelector(e.footerContainer), i.stickyScenario = n.stickyContainer.getAttribute("sticky");
            var a = (JSON.parse(n.stickyContainer.getAttribute("sticky-offset")), document.querySelector(e.fixedLegalStatement)),
                s = $(n.stickyElement).css(["display", "margin-top", "margin-bottom"]);
            return $(n.stickyContainer).css(s).find(n.stickyElement).css({
                "margin-top": 0,
                "margin-bottom": 0
            }), a && n.stickyElement.classList.add("move-above-legal"), n.footerElement && (i.footerScrollMonitor = scrollMonitor.create(n.footerElement), i.footerScrollMonitor.stateChange(function() {
                i.footerScrollMonitor.isInViewport ? n.stickyElement.classList.add("positioned-over-footer") : n.stickyElement.classList.remove("positioned-over-footer")
            })), window.addEventListener("optimizedResize", t.recalculateLocation), "mobileOnly" === i.stickyScenario ? t.createBreakpointSticky() : t.createScrollSticky(), !0
        }
        return !1
    }, t.unmount = function() {
        window.removeEventListener("optimizedResize", t.recalculateLocation), $(n.stickyElement).is(".is-sticky") && t.unmakeSticky(n.stickyElement), i.isMobile && i.isMobile.removeListener(t.matchMediaHandler), i.elementScrollMonitor && i.elementScrollMonitor.destroy(), i.footerScrollMonitor && i.footerScrollMonitor.destroy()
    }, {
        mount: t.mount,
        init: t.init,
        unmount: t.unmount,
        selector: e.container,
        render: t.render
    }
}();
var modules = window.modules = window.modules || {},
    QuizAnswerValidationInProcess = !1;
modules.quiz = function() {
    "use strict";
    var e, t = {},
        n = {},
        i = {};
    return e = {
        container: ".quiz.container",
        legalStatement: '.legal.container[variant="fixed"]',
        countdown: ".quiz-countdown",
        startTheQuiz: ".start-the-quiz",
        answer: ".quiz-answers__answer",
        question: ".quiz-question",
        activeQuestion: ".active.quiz-question",
        progressStep: ".quiz-progress__step",
        totalScore: ".quiz-total-score__value",
        quizInner: ".quiz-inner",
        answeredQuestionsInput: '[name="answered-questions"]',
        timer: {
            minutes: ".quiz-question__timer-minutes",
            seconds: ".quiz-question__timer-seconds",
            milliSeconds: ".quiz-question__timer-milli-seconds"
        }
    }, t.pad = function(e) {
        return e > 9 ? e : "0" + e
    }, t.service = {
        getAnswerValidation: function(e, t, n, i) {
            var o = $.Deferred(),
                r = i.getAttribute("data-check-answer-endpoint");
            return $.ajax({
                url: r,
                method: "POST",
                data: {
                    quizId: e,
                    questionId: n,
                    answerId: t
                }
            }).done(function(e) {
                o.resolve(e)
            }).fail(function(e) {
                o.resolve(!1)
            }), o
        },
        getNextQuestion: function(e, t) {
            var n = $.Deferred(),
                i = t.getAttribute("data-next-question-endpoint");
            return $.ajax({
                url: i,
                method: "POST",
                data: {
                    quizId: e
                }
            }).done(function(e) {
                n.resolve(e)
            }).fail(function(e) {
                n.resolve(!1)
            }), n
        }
    }, t.quizFlow = {
        quizCountdown: function(e, n, i) {
            n && i < n.length ? (n[i].classList.add("animate"), setTimeout(function() {
                n[i].classList.remove("animate"), i++, t.quizFlow.quizCountdown(e, n, i)
            }, 1e3)) : t.quizFlow.startTheQuiz(e)
        },
        startTheQuiz: function(i) {
            var o = i.getAttribute("data-id"),
                r = i.querySelector(".quiz-questions"),
                a = i.querySelector(".quiz-question"),
                s = i.querySelector(e.progressStep),
                l = i.querySelector(e.countdown);
            t.service.getNextQuestion(o, i).then(function(e) {
                if ("" !== e.questionId) {
                    l.classList.add("inactive"), r.classList.add("active"), a.classList.add("active"), s.setAttribute("state", "active");
                    var c = $(".quiz-question").first(),
                        u = c.find(".quiz-answers__answer");
                    $.each(e.answers, function(e, t) {
                        c.find(".quiz-answers").append(u[0].outerHTML.replace("{{answerId}}", t.AnswerId).replace("{{answerText}}", t.AnswerText))
                    }), c.find(".quiz-answers__answer").first().remove();
                    var d = c[0].outerHTML;
                    d = d.replace(/"{{questionId}}"/g, e.questionId).replace("{{questionText}}", e.questionText), $(".quiz-question")[0].outerHTML = d, $(".quiz-progress__step.nextActive").removeClass("nextActive").attr("data-id", e.questionId).next().addClass("nextActive"), n["quizInstance" + o].startTime = new Date, t.quizFlow.startTimer(i, n["quizInstance" + o].startTime)
                }
            }), n["quizInstance" + o] = {
                activeQuestionId: a.getAttribute("data-id"),
                answeredQuestions: [],
                intervalId: 0,
                quizId: o
            }
        },
        selectAnswer: function(i) {
            var o = $(this),
                r = o.closest(e.container)[0],
                a = r.getAttribute("data-id"),
                s = r.querySelector(e.question + ".active"),
                l = this.getAttribute("data-id"),
                c = s.getAttribute("data-id"),
                u = new Date;
            n["quizInstance" + a].startTime;
            QuizAnswerValidationInProcess || (QuizAnswerValidationInProcess = !0, t.service.getAnswerValidation(a, l, c, r).then(function(i) {
                t.service.getNextQuestion(a, r).then(function(e) {
                    if ("" !== e.questionId) {
                        var t = $(".quiz-question.active").next(),
                            n = t.find(".quiz-answers__answer");
                        $.each(e.answers, function(e, i) {
                            t.find(".quiz-answers").append(n[0].outerHTML.replace("{{answerId}}", i.AnswerId).replace("{{answerText}}", i.AnswerText))
                        }), t.find(".quiz-answers__answer").first().remove();
                        var i = t[0].outerHTML;
                        i = i.replace(/"{{questionId}}"/g, e.questionId).replace("{{questionText}}", e.questionText), $(".quiz-question.active").next()[0].outerHTML = i, $(".quiz-progress__step.nextActive").removeClass("nextActive").attr("data-id", e.questionId).next().addClass("nextActive")
                    }
                }).then(function() {
                    var o = s.nextElementSibling;
                    if (s.classList.remove("active"), n["quizInstance" + a].answeredQuestions.push({
                            questionId: s.getAttribute("data-id"),
                            answerId: l,
                            correct: i.correct,
                            score: i.score
                        }), o) o.classList.add("active");
                    else {
                        var c = r.querySelector(e.answeredQuestionsInput);
                        r.setAttribute("state", "form-active"), c.value = JSON.stringify({
                            quizId: a
                        })
                    }
                    t.quizFlow.clearTimer(r, o), t.quizFlow.updateProgressSection(r, o), QuizAnswerValidationInProcess = !1
                })
            }))
        },
        startTimer: function(i, o) {
            var o, r, a = i.querySelector(".quiz-question.active " + e.timer.seconds),
                s = i.querySelector(".quiz-question.active " + e.timer.minutes),
                l = i.querySelector(".quiz-question.active " + e.timer.milliSeconds),
                c = i.getAttribute("data-id");
            i.setAttribute("state", "quiz-active"), r = new Date;
            var u = r - o;
            s.innerHTML = t.pad(Math.floor(u / 6e4)), a.innerHTML = t.pad(Math.round(u / 1e3) % 60), l.innerHTML = t.pad(Math.round(u / 100) % 10), n["quizInstance" + c].intervalId = setInterval(function() {
                r = new Date;
                var e = r - o;
                s.innerHTML = t.pad(Math.floor(e / 6e4)), a.innerHTML = t.pad(Math.floor(e / 1e3) % 60), l.innerHTML = Math.floor(e / 100) % 10
            }, 100)
        },
        clearTimer: function(e, i) {
            var o = e.getAttribute("data-id");
            clearInterval(n["quizInstance" + o]), n["quizInstance" + o].startTime = new Date, i && t.quizFlow.startTimer(e, n["quizInstance" + o].startTime)
        },
        updateProgressSection: function(t, i) {
            for (var o = t.getAttribute("data-id"), r = 0, a = t.querySelectorAll(e.progressStep), s = n["quizInstance" + o].answeredQuestions, l = t.querySelector(e.totalScore), c = 0; c < a.length; c++) {
                var u = a[c],
                    d = s.find(function(e) {
                        return e.questionId == u.getAttribute("data-id")
                    });
                d ? u.setAttribute("state", d.correct) : u.getAttribute("data-id") == i.getAttribute("data-id") ? u.setAttribute("state", "active") : u.setAttribute("state", "inactive")
            }
            for (var f = 0; f < s.length; f++) r += s[f].score;
            l.innerHTML = r
        }
    }, t.mount = function(t) {
        var n = t.querySelectorAll(e.container);
        return !(!n || !n.length)
    }, t.init = function(n) {
        var o = n.querySelectorAll(e.container);
        if (o && o.length) {
            i.container = o;
            for (var r = 0; r < i.container.length; r++) {
                var a = i.container[r].querySelectorAll(e.countdown);
                if (a && a.length) {
                    var s = i.container[r],
                        l = s.querySelectorAll(".quiz-countdown__step");
                    setTimeout(function() {
                        t.quizFlow.quizCountdown(s, l, 0)
                    }, 750)
                } else t.quizFlow.startTheQuiz(i.container[r]);
                var c = document.querySelector(e.legalStatement);
                c && "fixed" === c.getAttribute("variant") && i.container[r].classList.add("fixed-legal-statement")
            }
            $(i.container).on("click", e.answer, t.quizFlow.selectAnswer)
        }
    }, t.unmount = function() {
        $(i.container).off("click", e.answer, t.quizFlow.selectAnswer)
    }, {
        mount: t.mount,
        init: t.init,
        unmount: t.unmount,
        selector: e.container
    }
}();
var modules = window.modules = window.modules || {};
modules["F1-quiz"] = function() {
    "use strict";
    var e, t = {},
        n = {
            answers: new Map,
            skillQuestionAnswer: ""
        },
        i = {};
    return e = {
        container: ".f1-quiz.container",
        header: ".f1-quizheader",
        prevScreenHeader: ".f1-quizheader__back",
        logo: ".f1-quizheader__logo",
        quiz: ".f1-quizsteps",
        legalStatement: '.legal.container[variant="fixed"]',
        nextScreenButton: ".f1-quizstep__question .f1-quiz__btn, .f1-quizstep__funfact .f1-quiz__btn",
        answerButton: ".f1-quizstep__answer-option .f1-quiz__btn",
        textButton: ".f1-quizstep__text .f1-quiz__btn",
        textForm: ".f1-quizstep__text form",
        question: ".f1-quizstep",
        currentQuestion: ".f1-quizstep.is-current",
        progressStep: ".quiz-progress__step",
        quizInner: ".quiz-inner",
        answeredQuestionsInput: '[name="answered-questions"]'
    }, t.pad = function(e) {
        return e > 9 ? e : "0" + e
    }, t.service = {
        checkAnswers: function(e, t) {
            var i = $.Deferred(),
                o = t.getAttribute("data-check-answer-endpoint"),
                r = Array.from(t.querySelectorAll(".f1-quizstep__funfact")),
                a = Array.from(n.answers.values()),
                s = Array.from(n.answers.keys()),
                l = r.map(function(e) {
                    return e.getAttribute("data-id")
                });
            return $.ajax({
                url: o,
                method: "POST",
                data: {
                    quizId: e,
                    answerIds: a,
                    questionIds: s,
                    funfactIds: l,
                    skillQuestionAnswer: n.skillQuestionAnswer
                }
            }).done(function(e) {
                i.resolve(e)
            }).fail(function(e) {
                i.resolve(!1)
            }), i
        }
    }, t.quizFlow = {
        startTheQuiz: function(e) {
            var i = e.getAttribute("data-id"),
                o = (e.querySelector(".f1-quizsteps"), e.querySelector(".f1-quizstep")),
                r = o.querySelector('[class*="f1-quizstep__"]');
            o.classList.add("is-current"), t.quizFlow.setScreen(r), n["quizInstance" + i] = {
                currentQuestionId: o.getAttribute("data-id"),
                answeredQuestions: [],
                intervalId: 0,
                quizId: i
            }
        },
        goToNextScreen: function(n) {
            var i = $(n.target),
                o = i.closest(e.container)[0],
                r = o.getAttribute("data-id"),
                a = i.closest(".f1-quizstep.is-current")[0],
                s = a.nextElementSibling,
                l = i.closest('.f1-quizstep > [class*="f1-quizstep__"]')[0];
            void 0 !== window.dataLayer && window.dataLayer.push({
                virtualPageTitle: document.title,
                virtualPageUrl: window.location.href,
                category: "Formula-1",
                event: "VirtualPageView"
            });
            var c = l.nextElementSibling;
            c ? (l.classList.add("is-hidden"), t.quizFlow.setScreen(c)) : s ? (l.classList.add("is-hidden"), a.classList.remove("is-current"), s.classList.add("is-current"), t.quizFlow.setScreen(s.firstElementChild)) : t.service.checkAnswers(r, o).then(function(e) {
                var t = o.getAttribute("data-city-page-url");
                $("body").trigger(new jQuery.Event("navigate", {
                    url: t,
                    animation: "fade"
                }))
            })
        },
        goToPreviousScreen: function(n) {
            n.preventDefault();
            var i = $(n.target),
                o = i.closest(e.container)[0],
                r = o.querySelector(".f1-quizsteps"),
                a = o.querySelector(".f1-quizstep.is-current"),
                s = a ? Array.prototype.slice.call(r.children) : void 0,
                l = o.querySelector('.f1-quizstep.is-current > [class*="f1-quizstep__"]:not(.is-hidden)'),
                c = l ? Array.prototype.slice.call(a.children) : void 0;
            if (a)
                if (c.indexOf(l) > 0) l.classList.add("is-hidden"), t.quizFlow.setScreen(a.querySelector(":first-child"));
                else if (s.indexOf(a) > 0) {
                var u = r.children[s.indexOf(a) - 1];
                l.classList.add("is-hidden"), a.classList.remove("is-current"), u.classList.add("is-current"), t.quizFlow.setScreen(u.querySelector(":first-child"))
            } else $("body").trigger(new jQuery.Event("navigate", {
                url: n.currentTarget.href,
                windowName: n.currentTarget.getAttribute("target"),
                target: n.currentTarget
            }));
            else !document.referrer.match(document.location.hostname) || document.referrer.match("/?returnurl=") ? $("body").trigger(new jQuery.Event("navigate", {
                url: n.currentTarget.href,
                windowName: n.currentTarget.getAttribute("target"),
                target: n.currentTarget
            })) : window.history.back()
        },
        setScreen: function(t) {
            t.classList.contains("f1-quizstep__answer") || t.classList.contains("f1-quizstep__funfact") ? $(e.logo)[0].classList.add("is-hidden") : $(e.logo)[0].classList.remove("is-hidden"), t.classList.remove("is-hidden")
        },
        selectAnswer: function(i) {
            var o = $(this),
                r = o.closest(e.container)[0],
                a = (r.getAttribute("data-id"), r.querySelector(e.question + ".is-current")),
                s = this.getAttribute("data-id"),
                l = a.getAttribute("data-id");
            n.answers.set(l, s), t.quizFlow.goToNextScreen(i)
        },
        typeText: function(i) {
            i.preventDefault();
            var o = $(this),
                r = o.closest(e.container)[0],
                a = (r.getAttribute("data-id"), r.querySelector(e.question + ".is-current")),
                s = a.querySelector(".f1-quiz__formelement"),
                l = s.value;
            a.getAttribute("data-id");
            l.length > 2 ? (s.classList.remove("is-invalid"), n.skillQuestionAnswer = l, t.quizFlow.goToNextScreen(i)) : s.classList.add("is-invalid")
        }
    }, t.superscriptChars = function(e) {
        var t, n;
        $(e).each(function() {
            t = $(this).html(), n = t.replace(/®/g, "<sup>®</sup>").replace(/™/g, "<sup>™</sup>").replace(/©/g, "<sup>©</sup>"), $(this).html(n)
        })
    }, t.mount = function(t) {
        var n = t.querySelectorAll(e.container);
        return !(!n || !n.length)
    }, t.init = function(n) {
        var o = n.querySelectorAll(e.container);
        if (o && o.length) {
            i.container = o, t.superscriptChars(n.querySelectorAll("h4, p, a, button"));
            var r = n.querySelectorAll(e.quiz);
            if (r && r.length) {
                for (var a = 0; a < i.container.length; a++) t.quizFlow.startTheQuiz(i.container[a]);
                $(i.container).on("click", e.nextScreenButton, t.quizFlow.goToNextScreen), $(i.container).on("click", e.answerButton, t.quizFlow.selectAnswer), $(i.container).on("submit", e.textForm, t.quizFlow.typeText)
            }
            $(i.container).on("click", e.prevScreenHeader, t.quizFlow.goToPreviousScreen)
        }
    }, t.unmount = function() {
        $(i.container).off("click", e.nextScreenButton, t.quizFlow.goToNextScreen), $(i.container).off("click", e.answerButton, t.quizFlow.selectAnswer), $(i.container).off("submit", e.textForm, t.quizFlow.typeText), $(i.container).off("click", e.prevScreenHeader, t.quizFlow.goToPreviousScreen)
    }, {
        mount: t.mount,
        init: t.init,
        unmount: t.unmount,
        selector: e.container
    }
}();
var modules = window.modules = window.modules || {};
modules.teaser = function() {
    "use strict";
    var e, t, n, i;
    return e = {}, t = {
        viewport: '.viewport[variant="live"]',
        container: ".teaser.container",
        video: ".teaser-background-item--video",
        dots: ".teaser-slider__dots"
    }, n = {}, i = {
        videos: {},
        players: {},
        sliders: {},
        initedVideos: {},
        selectedIndexes: {},
        YTs: {}
    }, {}, n.toggle = {
        onMoveToNextSlide: function(e, t) {
            const i = n.getSliderId(e);
            var o = n.getSelectedIndexBySlider(i);
            o >= t ? o = 1 : o++, this.onMoveToSlide(e, o)
        },
        onArrowPreviousClick: function(e, t) {
            const i = n.getSliderId(e);
            var o = n.getSelectedIndexBySlider(i);
            o > 1 ? o-- : o = t, n.autoSlider.clearSliderInterval(e), this.onMoveToSlide(e, o), n.autoSlider.setSliderInterval(e, t)
        },
        onArrowNextClick: function(e, t) {
            const i = n.getSliderId(e);
            var o = n.getSelectedIndexBySlider(i);
            o >= t ? o = 1 : o++, n.autoSlider.clearSliderInterval(e), this.onMoveToSlide(e, o), n.autoSlider.setSliderInterval(e, t)
        },
        onDotClick: function(e, t) {
            n.autoSlider.clearSliderInterval(e), this.onMoveToSlide(e, t)
        },
        onMoveToSlide: function(e, t) {
            var o = function(e, t) {
                return e + "[data-seq='" + t + "']"
            };
            const r = n.getSliderId(e),
                a = n.getSelectedIndexBySlider(r);
            n.autoSlider.clearVideoStop(t, r);
            var s = $(e).find(o(".teaser-background-item", a));
            $(s).addClass("teaser-background-item--hidden");
            var l = $(e).find(o(".teaser-slider__dots--item", a));
            $(l).removeClass("selected");
            var c = $(e).find(o(".teaser-content-item", a));
            $(c).addClass("teaser-content-item--hidden"), i.players[r] && i.players[r][a] && i.players[r][a].pauseVideo(), i.players[r] && i.players[r][t] && i.players[r][t].playVideo();
            var u = $(e).find(o(".teaser-background-item", t));
            $(u).removeClass("teaser-background-item--hidden");
            var d = $(e).find(o(".teaser-slider__dots--item", t));
            $(d).addClass("selected");
            var f = $(e).find(o(".teaser-content-item", t));
            $(f).removeClass("teaser-content-item--hidden"), i.selectedIndexes[r] = t
        }
    }, n.autoSlider = {
        setSliderInterval: function(e, t) {
            const o = n.getSliderId(e);
            i.sliders[o] = setInterval(function() {
                n.toggle.onMoveToNextSlide(e, t)
            }, 5e3)
        },
        clearSliderInterval: function(e) {
            const t = n.getSliderId(e);
            i.sliders[t] && clearInterval(i.sliders[t])
        },
        stopVideoOnInit: function(e, t) {
            i.initedVideos[t] || (i.initedVideos[t] = {}), i.initedVideos[t][e] = setTimeout(function() {
                e !== n.getSelectedIndexBySlider(t) && i.players[t][e].pauseVideo()
            }, 1e3)
        },
        clearVideoStop: function(e, t) {
            i.initedVideos[t] && clearTimeout(i.initedVideos[t][e])
        }
    }, n.startVideo = function(e, t) {
        t.setAttribute("state", "active"), n.videoInline.initVideo(e, t)
    }, n.getSliderId = function(e) {
        return $(e).attr("slider-id")
    }, n.getSelectedIndexBySlider = function(e) {
        return i.selectedIndexes[e] || (i.selectedIndexes[e] = 1), i.selectedIndexes[e]
    }, n.videoInline = {
        initYouTubeApi: function(e) {
            i.youtubeApiLoaded = new Promise(function(e, t) {
                if (window.YT && window.YT.Player) e(window.YT);
                else {
                    var n = function(t) {
                        return function() {
                            "function" == typeof t && t(), e(window.YT)
                        }
                    }(window.onYouTubeIframeAPIReady);
                    window.onYouTubeIframeAPIReady = n
                }
            }), i.youtubeApiLoaded.then(function(t) {
                const o = n.getSliderId(e);
                i.YTs[o] = t;
                var r = $(e).find(".title").text().replace(/^\s+|\s+$/gm, "");
                n.googleTagManager.logCTA(r);
                var a = $(e).find(".teaser-background-item--video");
                if (a) {
                    window.videos || (window.videos = {}), window.videos[o] = a;
                    for (var s = 0; s < a.length; s++) n.startVideo(e, a[s])
                }
            })
        },
        initVideo: function(e, t) {
            const o = $(t).find(".trigger__youtube-holder"),
                r = n.getSliderId(e),
                a = $(t).attr("data-seq");
            var s = !0;
            if (i.players[r] || (i.players[r] = {}), i.videos[r] || (i.videos[r] = {}), i.players[r][a]) {
                var l = i.players[r][a];
                l.destroy(), l = !1
            }
            if (o.attr("data-youtube-id") && i.YTs[r]) {
                var c = o.attr("data-youtube-id");
                i.videos[r][a] = new i.YTs[r].Player("youtube-holder-" + c, {
                    height: "563",
                    width: "1000",
                    videoId: c,
                    playerVars: {
                        autoplay: 1,
                        enablejsapi: 1,
                        iv_load_policy: 3,
                        html5: 1,
                        modestbranding: 1,
                        rel: 0,
                        showinfo: 0,
                        wmode: "opaque",
                        controls: 0,
                        loop: 1,
                        playlist: c
                    },
                    events: {
                        onReady: function(e) {
                            i.players[r][a] = e.target, i.players[r][a].mute(), i.players[r][a].playVideo(), e.target.c.dataset.pauseByCode && delete e.target.c.dataset.pauseByCode
                        },
                        onStateChange: function(t) {
                            if (s && t.data == YT.PlayerState.PLAYING) {
                                var i = $(e).find(function(e, t) {
                                    return e + "[data-seq='" + t + "']"
                                }(".teaser-background-item--video", a));
                                i && i.length > 0 && $(i[0]).css("display", "block"), s = !1, n.getSelectedIndexBySlider(r) != a && t.target.pauseVideo()
                            }
                        }
                    }
                })
            }
        }
    }, n.googleTagManager = {
        logCTA: function(e) {
            void 0 !== window.dataLayer && window.dataLayer.push({
                action: "trigger",
                label: e,
                category: "Call to action",
                event: "interaction_CTA"
            })
        }
    }, n.init = function(e) {
        e = e || document.querySelector(t.viewport);
        const i = e.querySelectorAll(t.container);
        if (i && i.length) {
            for (var o = 0; o < i.length; o++) {
                const r = i[o],
                    a = r.querySelector(t.dots),
                    s = $(a).find(".teaser-slider__dots--item");
                if (s) {
                    const l = s.length,
                        c = r.querySelector(".left-arrow");
                    c && c.addEventListener("click", function() {
                        n.toggle.onArrowPreviousClick(r, l)
                    });
                    const u = r.querySelector(".right-arrow");
                    u && u.addEventListener("click", function() {
                        n.toggle.onArrowNextClick(r, l)
                    }), n.autoSlider.setSliderInterval(r, l);
                    for (var d = 0; d < s.length; d++) {
                        const f = $(s[d]).attr("data-seq");
                        s[d].addEventListener("click", function() {
                            n.toggle.onDotClick(r, f)
                        })
                    }
                }
            }
            return !0
        }
        return !1
    }, n.mount = function(n) {
        n = n || document.querySelector(t.viewport);
        var i = n.querySelectorAll(t.container);
        return !(!i || !i.length) && (e.window = window, e.body = document.querySelector("body"), e.viewport = n, e.teasers = [].slice.call(i), !0)
    }, n.unmount = function() {
        const i = document.querySelector(t.viewport),
            o = i.querySelectorAll(t.container);
        if (o && o.length)
            for (var r = 0; r < o.length; r++) {
                const a = o[r],
                    s = a.querySelector(".left-arrow");
                s && s.removeEventListener("click", function() {
                    n.toggle.onArrowPreviousClick
                });
                const l = a.querySelector(".right-arrow");
                l && l.removeEventListener("click", function() {
                    n.toggle.onArrowNextClick
                });
                const c = a.querySelector(t.dots);
                if (c)
                    for (var u = 0; u < c.length; u++) c[u].removeEventListener("click", function() {
                        n.toggle.onDotClick
                    })
            }
        e.teasers = null
    }, n.render = function(e) {
        e = e || document.querySelector(t.viewport);
        var i = e.querySelectorAll(t.container);
        if (window.innerWidth <= 750) return !0;
        const o = e.querySelectorAll(".teaser-background-item");
        if (o && o.length > 0)
            for (var r = 0; r < o.length; r++) {
                const a = o[r],
                    s = $(a).find(".teaser-background-item--video");
                if (s) {
                    const l = $(a).find(".teaser-background-item--image");
                    l && l.length > 0 && "video" == $(l[0]).attr("variant") && ($(s[0]).css("display", "none"), $(l[0]).css("display", "block"))
                }
            }
        if (i && i.length) {
            for (var c = 0; c < i.length; c++) n.videoInline.initYouTubeApi(i[c]);
            return !0
        }
        return !1
    }, {
        mount: n.mount,
        init: n.init,
        render: n.render,
        unmount: n.unmount,
        selector: t.container
    }
}();
