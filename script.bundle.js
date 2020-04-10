! function (n) {
    var e = {};

    function t(r) {
        if (e[r]) return e[r].exports;
        var a = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return n[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }
    t.m = n, t.c = e, t.d = function (n, e, r) {
        t.o(n, e) || Object.defineProperty(n, e, {
            enumerable: !0,
            get: r
        })
    }, t.r = function (n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, t.t = function (n, e) {
        if (1 & e && (n = t(n)), 8 & e) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: n
            }), 2 & e && "string" != typeof n)
            for (var a in n) t.d(r, a, function (e) {
                return n[e]
            }.bind(null, a));
        return r
    }, t.n = function (n) {
        var e = n && n.__esModule ? function () {
            return n.default
        } : function () {
            return n
        };
        return t.d(e, "a", e), e
    }, t.o = function (n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, t.p = "", t(t.s = 4)
}([function (n, e, t) {
    var r = t(1);
    "string" == typeof r && (r = [
        [n.i, r, ""]
    ]);
    var a = {
        insert: "head",
        singleton: !1
    };
    t(3)(r, a);
    r.locals && (n.exports = r.locals)
}, function (n, e, t) {
    (n.exports = t(2)(!1)).push([n.i, "html {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background: rgb(31, 29, 29);\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tfont-family: \"Exo\", sans-serif;\r\n\tcolor: #fff;\r\n\tbackground: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\r\n\tbackground-size: 400% 5000%;\r\n\tanimation: gradientBG 15s ease infinite;\r\n}\r\n\r\n@keyframes gradientBG {\r\n\t0% {\r\n\t\tbackground-position: 0% 50%;\r\n\t}\r\n\t50% {\r\n\t\tbackground-position: 100% 50%;\r\n\t}\r\n\t100% {\r\n\t\tbackground-position: 0% 50%;\r\n\t}\r\n}\r\n\r\n.circle {\r\n    width: 4em;\r\n    height: 4em;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: calc(50% - 2em);\r\n    left: calc(50% - 2em);\r\n    background-color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#title {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-52.5%, -50%);\r\n    width: 50%;\r\n    white-space: pre;\r\n    color: white;\r\n}\r\n\r\n.social-icons {\r\n    position: absolute;\r\n    top: 80%;\r\n    left: 2%;\r\n    z-index: 3;\r\n}\r\n\r\n.social-icon {\r\n    color: #fff;\r\n    font-size: 1.5em;\r\n    padding: 10px;\r\n}\r\n\r\n.social-icon:hover {\r\n    color: rgb(247, 234, 52);\r\n}\r\n\r\n#corner-logo {\r\n    background: white;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 10px;\r\n    margin: 20px;\r\n    /* padding: 20px; */\r\n    z-index: 3;\r\n}\r\n\r\n#gawds-logo {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 10px;\r\n    height: 1.5em;\r\n}\r\n\r\n.close {\r\n    color: #e84775;\r\n    font-size: 2em;\r\n    position: absolute;\r\n    left: 2%;\r\n    display: none;\r\n    cursor: pointer;\r\n    font-weight: 900;\r\n    z-index: 4;\r\n}\r\n\r\n.event-icon {\r\n    width: 2em;\r\n    position: relative;\r\n    top: calc(50% - 1em);\r\n    left: calc(50% - 1em);\r\n    opacity: 0;\r\n}\r\n\r\n.event-details {\r\n    display: none;\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    left: 0;\r\n    width: 50vw;\r\n    height: max-content;\r\n    box-sizing: border-box;\r\n    padding: 3% 3% 3% 5%;\r\n    z-index: 3;\r\n    overflow: hidden;\r\n}\r\n\r\n.heading {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n    font-weight: 200;\r\n    font-size: 1.8em;\r\n    color: #e84775;\r\n    font-family: Raleway;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.3em;\r\n}\r\n\r\n.heading .letter {\r\n    display: inline-block;\r\n    line-height: 1em;\r\n}\r\n\r\n.content {\r\n    font-family: 'Roboto', sans-serif;\r\n    color: #e84775;\r\n    font-size: 0.9em;\r\n    text-align: center;\r\n    justify-content: center;\r\n}\r\n\r\n#main-content {\r\n    position: absolute;\r\n    font-size: 1em;\r\n    top: 40%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    opacity: 0;\r\n    width: 80%;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    #title {\r\n        top: 40%;\r\n        width: 110vw;\r\n    }\r\n\r\n    .event-details {\r\n        width: 100vw;\r\n        overflow: auto;\r\n        padding: 3% 10%;\r\n    }\r\n\r\n    .heading {\r\n        font-size: 1.5em;\r\n        letter-spacing: 0.2em;\r\n    }\r\n\r\n    .content {\r\n        font-size: 0.8em;\r\n    }\r\n\r\n    #main-content {\r\n        top: 20%;\r\n    }\r\n}", ""])
}, function (n, e, t) {
    "use strict";
    n.exports = function (n) {
        var e = [];
        return e.toString = function () {
            return this.map(function (e) {
                var t = function (n, e) {
                    var t = n[1] || "",
                        r = n[3];
                    if (!r) return t;
                    if (e && "function" == typeof btoa) {
                        var a = (i = r, u = btoa(unescape(encodeURIComponent(JSON.stringify(i)))), s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u), "/*# ".concat(s, " */")),
                            o = r.sources.map(function (n) {
                                return "/*# sourceURL=".concat(r.sourceRoot).concat(n, " */")
                            });
                        return [t].concat(o).concat([a]).join("\n")
                    }
                    var i, u, s;
                    return [t].join("\n")
                }(e, n);
                return e[2] ? "@media ".concat(e[2], "{").concat(t, "}") : t
            }).join("")
        }, e.i = function (n, t) {
            "string" == typeof n && (n = [
                [null, n, ""]
            ]);
            for (var r = {}, a = 0; a < this.length; a++) {
                var o = this[a][0];
                null != o && (r[o] = !0)
            }
            for (var i = 0; i < n.length; i++) {
                var u = n[i];
                null != u[0] && r[u[0]] || (t && !u[2] ? u[2] = t : t && (u[2] = "(".concat(u[2], ") and (").concat(t, ")")), e.push(u))
            }
        }, e
    }
}, function (n, e, t) {
    "use strict";
    var r, a = {},
        o = function () {
            return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r
        },
        i = function () {
            var n = {};
            return function (e) {
                if (void 0 === n[e]) {
                    var t = document.querySelector(e);
                    if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                        t = t.contentDocument.head
                    } catch (n) {
                        t = null
                    }
                    n[e] = t
                }
                return n[e]
            }
        }();

    function u(n, e) {
        for (var t = [], r = {}, a = 0; a < n.length; a++) {
            var o = n[a],
                i = e.base ? o[0] + e.base : o[0],
                u = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
            r[i] ? r[i].parts.push(u) : t.push(r[i] = {
                id: i,
                parts: [u]
            })
        }
        return t
    }

    function s(n, e) {
        for (var t = 0; t < n.length; t++) {
            var r = n[t],
                o = a[r.id],
                i = 0;
            if (o) {
                for (o.refs++; i < o.parts.length; i++) o.parts[i](r.parts[i]);
                for (; i < r.parts.length; i++) o.parts.push(v(r.parts[i], e))
            } else {
                for (var u = []; i < r.parts.length; i++) u.push(v(r.parts[i], e));
                a[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: u
                }
            }
        }
    }

    function c(n) {
        var e = document.createElement("style");
        if (void 0 === n.attributes.nonce) {
            var r = t.nc;
            r && (n.attributes.nonce = r)
        }
        if (Object.keys(n.attributes).forEach(function (t) {
                e.setAttribute(t, n.attributes[t])
            }), "function" == typeof n.insert) n.insert(e);
        else {
            var a = i(n.insert || "head");
            if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            a.appendChild(e)
        }
        return e
    }
    var l, d = (l = [], function (n, e) {
        return l[n] = e, l.filter(Boolean).join("\n")
    });

    function f(n, e, t, r) {
        var a = t ? "" : r.css;
        if (n.styleSheet) n.styleSheet.cssText = d(e, a);
        else {
            var o = document.createTextNode(a),
                i = n.childNodes;
            i[e] && n.removeChild(i[e]), i.length ? n.insertBefore(o, i[e]) : n.appendChild(o)
        }
    }

    function p(n, e, t) {
        var r = t.css,
            a = t.media,
            o = t.sourceMap;
        if (a && n.setAttribute("media", a), o && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), n.styleSheet) n.styleSheet.cssText = r;
        else {
            for (; n.firstChild;) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(r))
        }
    }
    var g = null,
        h = 0;

    function v(n, e) {
        var t, r, a;
        if (e.singleton) {
            var o = h++;
            t = g || (g = c(e)), r = f.bind(null, t, o, !1), a = f.bind(null, t, o, !0)
        } else t = c(e), r = p.bind(null, t, e), a = function () {
            ! function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n)
            }(t)
        };
        return r(n),
            function (e) {
                if (e) {
                    if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return;
                    r(n = e)
                } else a()
            }
    }
    n.exports = function (n, e) {
        (e = e || {}).attributes = "object" == typeof e.attributes ? e.attributes : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = o());
        var t = u(n, e);
        return s(t, e),
            function (n) {
                for (var r = [], o = 0; o < t.length; o++) {
                    var i = t[o],
                        c = a[i.id];
                    c && (c.refs--, r.push(c))
                }
                n && s(u(n, e), e);
                for (var l = 0; l < r.length; l++) {
                    var d = r[l];
                    if (0 === d.refs) {
                        for (var f = 0; f < d.parts.length; f++) d.parts[f]();
                        delete a[d.id]
                    }
                }
            }
    }
}, function (n, e, t) {
    "use strict";
    t.r(e);
    var r = {
            update: null,
            begin: null,
            loopBegin: null,
            changeBegin: null,
            change: null,
            changeComplete: null,
            loopComplete: null,
            complete: null,
            loop: 1,
            direction: "normal",
            autoplay: !0,
            timelineOffset: 0
        },
        a = {
            duration: 1e3,
            delay: 0,
            endDelay: 0,
            easing: "easeOutElastic(1, .5)",
            round: 0
        },
        o = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective"],
        i = {
            CSS: {},
            springs: {}
        };

    function u(n, e, t) {
        return Math.min(Math.max(n, e), t)
    }

    function s(n, e) {
        return n.indexOf(e) > -1
    }

    function c(n, e) {
        return n.apply(null, e)
    }
    var l = {
        arr: function (n) {
            return Array.isArray(n)
        },
        obj: function (n) {
            return s(Object.prototype.toString.call(n), "Object")
        },
        pth: function (n) {
            return l.obj(n) && n.hasOwnProperty("totalLength")
        },
        svg: function (n) {
            return n instanceof SVGElement
        },
        inp: function (n) {
            return n instanceof HTMLInputElement
        },
        dom: function (n) {
            return n.nodeType || l.svg(n)
        },
        str: function (n) {
            return "string" == typeof n
        },
        fnc: function (n) {
            return "function" == typeof n
        },
        und: function (n) {
            return void 0 === n
        },
        hex: function (n) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)
        },
        rgb: function (n) {
            return /^rgb/.test(n)
        },
        hsl: function (n) {
            return /^hsl/.test(n)
        },
        col: function (n) {
            return l.hex(n) || l.rgb(n) || l.hsl(n)
        },
        key: function (n) {
            return !r.hasOwnProperty(n) && !a.hasOwnProperty(n) && "targets" !== n && "keyframes" !== n
        }
    };

    function d(n) {
        var e = /\(([^)]+)\)/.exec(n);
        return e ? e[1].split(",").map(function (n) {
            return parseFloat(n)
        }) : []
    }

    function f(n, e) {
        var t = d(n),
            r = u(l.und(t[0]) ? 1 : t[0], .1, 100),
            a = u(l.und(t[1]) ? 100 : t[1], .1, 100),
            o = u(l.und(t[2]) ? 10 : t[2], .1, 100),
            s = u(l.und(t[3]) ? 0 : t[3], .1, 100),
            c = Math.sqrt(a / r),
            f = o / (2 * Math.sqrt(a * r)),
            p = f < 1 ? c * Math.sqrt(1 - f * f) : 0,
            g = 1,
            h = f < 1 ? (f * c - s) / p : -s + c;

        function v(n) {
            var t = e ? e * n / 1e3 : n;
            return t = f < 1 ? Math.exp(-t * f * c) * (g * Math.cos(p * t) + h * Math.sin(p * t)) : (g + h * t) * Math.exp(-t * c), 0 === n || 1 === n ? n : 1 - t
        }
        return e ? v : function () {
            var e = i.springs[n];
            if (e) return e;
            for (var t = 0, r = 0;;)
                if (1 === v(t += 1 / 6)) {
                    if (++r >= 16) break
                } else r = 0;
            var a = t * (1 / 6) * 1e3;
            return i.springs[n] = a, a
        }
    }

    function p(n) {
        return void 0 === n && (n = 10),
            function (e) {
                return Math.round(e * n) * (1 / n)
            }
    }
    var g, h, v = function () {
            var n = 11,
                e = 1 / (n - 1);

            function t(n, e) {
                return 1 - 3 * e + 3 * n
            }

            function r(n, e) {
                return 3 * e - 6 * n
            }

            function a(n) {
                return 3 * n
            }

            function o(n, e, o) {
                return ((t(e, o) * n + r(e, o)) * n + a(e)) * n
            }

            function i(n, e, o) {
                return 3 * t(e, o) * n * n + 2 * r(e, o) * n + a(e)
            }
            return function (t, r, a, u) {
                if (0 <= t && t <= 1 && 0 <= a && a <= 1) {
                    var s = new Float32Array(n);
                    if (t !== r || a !== u)
                        for (var c = 0; c < n; ++c) s[c] = o(c * e, t, a);
                    return function (n) {
                        return t === r && a === u ? n : 0 === n || 1 === n ? n : o(l(n), r, u)
                    }
                }

                function l(r) {
                    for (var u = 0, c = 1, l = n - 1; c !== l && s[c] <= r; ++c) u += e;
                    var d = u + (r - s[--c]) / (s[c + 1] - s[c]) * e,
                        f = i(d, t, a);
                    return f >= .001 ? function (n, e, t, r) {
                        for (var a = 0; a < 4; ++a) {
                            var u = i(e, t, r);
                            if (0 === u) return e;
                            e -= (o(e, t, r) - n) / u
                        }
                        return e
                    }(r, d, t, a) : 0 === f ? d : function (n, e, t, r, a) {
                        var i, u, s = 0;
                        do {
                            (i = o(u = e + (t - e) / 2, r, a) - n) > 0 ? t = u : e = u
                        } while (Math.abs(i) > 1e-7 && ++s < 10);
                        return u
                    }(r, u, u + e, t, a)
                }
            }
        }(),
        m = (g = {
            linear: function () {
                return function (n) {
                    return n
                }
            }
        }, h = {
            Sine: function () {
                return function (n) {
                    return 1 - Math.cos(n * Math.PI / 2)
                }
            },
            Circ: function () {
                return function (n) {
                    return 1 - Math.sqrt(1 - n * n)
                }
            },
            Back: function () {
                return function (n) {
                    return n * n * (3 * n - 2)
                }
            },
            Bounce: function () {
                return function (n) {
                    for (var e, t = 4; n < ((e = Math.pow(2, --t)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - t) - 7.5625 * Math.pow((3 * e - 2) / 22 - n, 2)
                }
            },
            Elastic: function (n, e) {
                void 0 === n && (n = 1), void 0 === e && (e = .5);
                var t = u(n, 1, 10),
                    r = u(e, .1, 2);
                return function (n) {
                    return 0 === n || 1 === n ? n : -t * Math.pow(2, 10 * (n - 1)) * Math.sin((n - 1 - r / (2 * Math.PI) * Math.asin(1 / t)) * (2 * Math.PI) / r)
                }
            }
        }, ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (n, e) {
            h[n] = function () {
                return function (n) {
                    return Math.pow(n, e + 2)
                }
            }
        }), Object.keys(h).forEach(function (n) {
            var e = h[n];
            g["easeIn" + n] = e, g["easeOut" + n] = function (n, t) {
                return function (r) {
                    return 1 - e(n, t)(1 - r)
                }
            }, g["easeInOut" + n] = function (n, t) {
                return function (r) {
                    return r < .5 ? e(n, t)(2 * r) / 2 : 1 - e(n, t)(-2 * r + 2) / 2
                }
            }
        }), g);

    function y(n, e) {
        if (l.fnc(n)) return n;
        var t = n.split("(")[0],
            r = m[t],
            a = d(n);
        switch (t) {
            case "spring":
                return f(n, e);
            case "cubicBezier":
                return c(v, a);
            case "steps":
                return c(p, a);
            default:
                return c(r, a)
        }
    }

    function b(n) {
        try {
            return document.querySelectorAll(n)
        } catch (n) {
            return
        }
    }

    function w(n, e) {
        for (var t = n.length, r = arguments.length >= 2 ? arguments[1] : void 0, a = [], o = 0; o < t; o++)
            if (o in n) {
                var i = n[o];
                e.call(r, i, o, n) && a.push(i)
            } return a
    }

    function x(n) {
        return n.reduce(function (n, e) {
            return n.concat(l.arr(e) ? x(e) : e)
        }, [])
    }

    function M(n) {
        return l.arr(n) ? n : (l.str(n) && (n = b(n) || n), n instanceof NodeList || n instanceof HTMLCollection ? [].slice.call(n) : [n])
    }

    function k(n, e) {
        return n.some(function (n) {
            return n === e
        })
    }

    function I(n) {
        var e = {};
        for (var t in n) e[t] = n[t];
        return e
    }

    function C(n, e) {
        var t = I(n);
        for (var r in n) t[r] = e.hasOwnProperty(r) ? e[r] : n[r];
        return t
    }

    function O(n, e) {
        var t = I(n);
        for (var r in e) t[r] = l.und(n[r]) ? e[r] : n[r];
        return t
    }

    function S(n) {
        return l.rgb(n) ? (t = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = n)) ? "rgba(" + t[1] + ",1)" : e : l.hex(n) ? function (n) {
            var e = n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (n, e, t, r) {
                    return e + e + t + t + r + r
                }),
                t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return "rgba(" + parseInt(t[1], 16) + "," + parseInt(t[2], 16) + "," + parseInt(t[3], 16) + ",1)"
        }(n) : l.hsl(n) ? function (n) {
            var e, t, r, a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),
                o = parseInt(a[1], 10) / 360,
                i = parseInt(a[2], 10) / 100,
                u = parseInt(a[3], 10) / 100,
                s = a[4] || 1;

            function c(n, e, t) {
                return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? n + 6 * (e - n) * t : t < .5 ? e : t < 2 / 3 ? n + (e - n) * (2 / 3 - t) * 6 : n
            }
            if (0 == i) e = t = r = u;
            else {
                var l = u < .5 ? u * (1 + i) : u + i - u * i,
                    d = 2 * u - l;
                e = c(d, l, o + 1 / 3), t = c(d, l, o), r = c(d, l, o - 1 / 3)
            }
            return "rgba(" + 255 * e + "," + 255 * t + "," + 255 * r + "," + s + ")"
        }(n) : void 0;
        var e, t
    }

    function B(n) {
        var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);
        if (e) return e[1]
    }

    function E(n, e) {
        return l.fnc(n) ? n(e.target, e.id, e.total) : n
    }

    function T(n, e) {
        return n.getAttribute(e)
    }

    function j(n, e, t) {
        if (k([t, "deg", "rad", "turn"], B(e))) return e;
        var r = i.CSS[e + t];
        if (!l.und(r)) return r;
        var a = document.createElement(n.tagName),
            o = n.parentNode && n.parentNode !== document ? n.parentNode : document.body;
        o.appendChild(a), a.style.position = "absolute", a.style.width = 100 + t;
        var u = 100 / a.offsetWidth;
        o.removeChild(a);
        var s = u * parseFloat(e);
        return i.CSS[e + t] = s, s
    }

    function P(n, e, t) {
        if (e in n.style) {
            var r = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                a = n.style[e] || getComputedStyle(n).getPropertyValue(r) || "0";
            return t ? j(n, a, t) : a
        }
    }

    function q(n, e) {
        return l.dom(n) && !l.inp(n) && (T(n, e) || l.svg(n) && n[e]) ? "attribute" : l.dom(n) && k(o, e) ? "transform" : l.dom(n) && "transform" !== e && P(n, e) ? "css" : null != n[e] ? "object" : void 0
    }

    function D(n) {
        if (l.dom(n)) {
            for (var e, t = n.style.transform || "", r = /(\w+)\(([^)]*)\)/g, a = new Map; e = r.exec(t);) a.set(e[1], e[2]);
            return a
        }
    }

    function N(n, e, t, r) {
        var a = s(e, "scale") ? 1 : 0 + function (n) {
                return s(n, "translate") || "perspective" === n ? "px" : s(n, "rotate") || s(n, "skew") ? "deg" : void 0
            }(e),
            o = D(n).get(e) || a;
        return t && (t.transforms.list.set(e, o), t.transforms.last = e), r ? j(n, o, r) : o
    }

    function L(n, e, t, r) {
        switch (q(n, e)) {
            case "transform":
                return N(n, e, r, t);
            case "css":
                return P(n, e, t);
            case "attribute":
                return T(n, e);
            default:
                return n[e] || 0
        }
    }

    function X(n, e) {
        var t = /^(\*=|\+=|-=)/.exec(n);
        if (!t) return n;
        var r = B(n) || 0,
            a = parseFloat(e),
            o = parseFloat(n.replace(t[0], ""));
        switch (t[0][0]) {
            case "+":
                return a + o + r;
            case "-":
                return a - o + r;
            case "*":
                return a * o + r
        }
    }

    function A(n, e) {
        if (l.col(n)) return S(n);
        if (/\s/g.test(n)) return n;
        var t = B(n),
            r = t ? n.substr(0, n.length - t.length) : n;
        return e ? r + e : r
    }

    function z(n, e) {
        return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2))
    }

    function F(n) {
        for (var e, t = n.points, r = 0, a = 0; a < t.numberOfItems; a++) {
            var o = t.getItem(a);
            a > 0 && (r += z(e, o)), e = o
        }
        return r
    }

    function Y(n) {
        if (n.getTotalLength) return n.getTotalLength();
        switch (n.tagName.toLowerCase()) {
            case "circle":
                return function (n) {
                    return 2 * Math.PI * T(n, "r")
                }(n);
            case "rect":
                return function (n) {
                    return 2 * T(n, "width") + 2 * T(n, "height")
                }(n);
            case "line":
                return function (n) {
                    return z({
                        x: T(n, "x1"),
                        y: T(n, "y1")
                    }, {
                        x: T(n, "x2"),
                        y: T(n, "y2")
                    })
                }(n);
            case "polyline":
                return F(n);
            case "polygon":
                return function (n) {
                    var e = n.points;
                    return F(n) + z(e.getItem(e.numberOfItems - 1), e.getItem(0))
                }(n)
        }
    }

    function R(n, e) {
        var t = e || {},
            r = t.el || function (n) {
                for (var e = n.parentNode; l.svg(e) && l.svg(e.parentNode);) e = e.parentNode;
                return e
            }(n),
            a = r.getBoundingClientRect(),
            o = T(r, "viewBox"),
            i = a.width,
            u = a.height,
            s = t.viewBox || (o ? o.split(" ") : [0, 0, i, u]);
        return {
            el: r,
            viewBox: s,
            x: s[0] / 1,
            y: s[1] / 1,
            w: i / s[2],
            h: u / s[3]
        }
    }

    function H(n, e) {
        function t(t) {
            void 0 === t && (t = 0);
            var r = e + t >= 1 ? e + t : 0;
            return n.el.getPointAtLength(r)
        }
        var r = R(n.el, n.svg),
            a = t(),
            o = t(-1),
            i = t(1);
        switch (n.property) {
            case "x":
                return (a.x - r.x) * r.w;
            case "y":
                return (a.y - r.y) * r.h;
            case "angle":
                return 180 * Math.atan2(i.y - o.y, i.x - o.x) / Math.PI
        }
    }

    function W(n, e) {
        var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
            r = A(l.pth(n) ? n.totalLength : n, e) + "";
        return {
            original: r,
            numbers: r.match(t) ? r.match(t).map(Number) : [0],
            strings: l.str(n) || e ? r.split(t) : []
        }
    }

    function $(n) {
        return w(n ? x(l.arr(n) ? n.map(M) : M(n)) : [], function (n, e, t) {
            return t.indexOf(n) === e
        })
    }

    function _(n) {
        var e = $(n);
        return e.map(function (n, t) {
            return {
                target: n,
                id: t,
                total: e.length,
                transforms: {
                    list: D(n)
                }
            }
        })
    }

    function U(n, e) {
        var t = I(e);
        if (/^spring/.test(t.easing) && (t.duration = f(t.easing)), l.arr(n)) {
            var r = n.length;
            2 === r && !l.obj(n[0]) ? n = {
                value: n
            } : l.fnc(e.duration) || (t.duration = e.duration / r)
        }
        var a = l.arr(n) ? n : [n];
        return a.map(function (n, t) {
            var r = l.obj(n) && !l.pth(n) ? n : {
                value: n
            };
            return l.und(r.delay) && (r.delay = t ? 0 : e.delay), l.und(r.endDelay) && (r.endDelay = t === a.length - 1 ? e.endDelay : 0), r
        }).map(function (n) {
            return O(n, t)
        })
    }

    function Q(n, e) {
        var t = [],
            r = e.keyframes;
        for (var a in r && (e = O(function (n) {
                for (var e = w(x(n.map(function (n) {
                        return Object.keys(n)
                    })), function (n) {
                        return l.key(n)
                    }).reduce(function (n, e) {
                        return n.indexOf(e) < 0 && n.push(e), n
                    }, []), t = {}, r = function (r) {
                        var a = e[r];
                        t[a] = n.map(function (n) {
                            var e = {};
                            for (var t in n) l.key(t) ? t == a && (e.value = n[t]) : e[t] = n[t];
                            return e
                        })
                    }, a = 0; a < e.length; a++) r(a);
                return t
            }(r), e)), e) l.key(a) && t.push({
            name: a,
            tweens: U(e[a], n)
        });
        return t
    }

    function Z(n, e) {
        var t;
        return n.tweens.map(function (r) {
            var a = function (n, e) {
                    var t = {};
                    for (var r in n) {
                        var a = E(n[r], e);
                        l.arr(a) && 1 === (a = a.map(function (n) {
                            return E(n, e)
                        })).length && (a = a[0]), t[r] = a
                    }
                    return t.duration = parseFloat(t.duration), t.delay = parseFloat(t.delay), t
                }(r, e),
                o = a.value,
                i = l.arr(o) ? o[1] : o,
                u = B(i),
                s = L(e.target, n.name, u, e),
                c = t ? t.to.original : s,
                d = l.arr(o) ? o[0] : c,
                f = B(d) || B(s),
                p = u || f;
            return l.und(i) && (i = c), a.from = W(d, p), a.to = W(X(i, d), p), a.start = t ? t.end : 0, a.end = a.start + a.delay + a.duration + a.endDelay, a.easing = y(a.easing, a.duration), a.isPath = l.pth(o), a.isColor = l.col(a.from.original), a.isColor && (a.round = 1), t = a, a
        })
    }
    var G = {
        css: function (n, e, t) {
            return n.style[e] = t
        },
        attribute: function (n, e, t) {
            return n.setAttribute(e, t)
        },
        object: function (n, e, t) {
            return n[e] = t
        },
        transform: function (n, e, t, r, a) {
            if (r.list.set(e, t), e === r.last || a) {
                var o = "";
                r.list.forEach(function (n, e) {
                    o += e + "(" + n + ") "
                }), n.style.transform = o
            }
        }
    };

    function V(n, e) {
        _(n).forEach(function (n) {
            for (var t in e) {
                var r = E(e[t], n),
                    a = n.target,
                    o = B(r),
                    i = L(a, t, o, n),
                    u = X(A(r, o || B(i)), i),
                    s = q(a, t);
                G[s](a, t, u, n.transforms, !0)
            }
        })
    }

    function J(n, e) {
        return w(x(n.map(function (n) {
            return e.map(function (e) {
                return function (n, e) {
                    var t = q(n.target, e.name);
                    if (t) {
                        var r = Z(e, n),
                            a = r[r.length - 1];
                        return {
                            type: t,
                            property: e.name,
                            animatable: n,
                            tweens: r,
                            duration: a.end,
                            delay: r[0].delay,
                            endDelay: a.endDelay
                        }
                    }
                }(n, e)
            })
        })), function (n) {
            return !l.und(n)
        })
    }

    function K(n, e) {
        var t = n.length,
            r = function (n) {
                return n.timelineOffset ? n.timelineOffset : 0
            },
            a = {};
        return a.duration = t ? Math.max.apply(Math, n.map(function (n) {
            return r(n) + n.duration
        })) : e.duration, a.delay = t ? Math.min.apply(Math, n.map(function (n) {
            return r(n) + n.delay
        })) : e.delay, a.endDelay = t ? a.duration - Math.max.apply(Math, n.map(function (n) {
            return r(n) + n.duration - n.endDelay
        })) : e.endDelay, a
    }
    var nn = 0;
    var en, tn = [],
        rn = [],
        an = function () {
            function n() {
                en = requestAnimationFrame(e)
            }

            function e(e) {
                var t = tn.length;
                if (t) {
                    for (var r = 0; r < t;) {
                        var a = tn[r];
                        if (a.paused) {
                            var o = tn.indexOf(a);
                            o > -1 && (tn.splice(o, 1), t = tn.length)
                        } else a.tick(e);
                        r++
                    }
                    n()
                } else en = cancelAnimationFrame(en)
            }
            return n
        }();

    function on(n) {
        void 0 === n && (n = {});
        var e, t = 0,
            o = 0,
            i = 0,
            s = 0,
            c = null;

        function l(n) {
            var e = window.Promise && new Promise(function (n) {
                return c = n
            });
            return n.finished = e, e
        }
        var d = function (n) {
            var e = C(r, n),
                t = C(a, n),
                o = Q(t, n),
                i = _(n.targets),
                u = J(i, o),
                s = K(u, t),
                c = nn;
            return nn++, O(e, {
                id: c,
                children: [],
                animatables: i,
                animations: u,
                duration: s.duration,
                delay: s.delay,
                endDelay: s.endDelay
            })
        }(n);
        l(d);

        function f() {
            var n = d.direction;
            "alternate" !== n && (d.direction = "normal" !== n ? "normal" : "reverse"), d.reversed = !d.reversed, e.forEach(function (n) {
                return n.reversed = d.reversed
            })
        }

        function p(n) {
            return d.reversed ? d.duration - n : n
        }

        function g() {
            t = 0, o = p(d.currentTime) * (1 / on.speed)
        }

        function h(n, e) {
            e && e.seek(n - e.timelineOffset)
        }

        function v(n) {
            for (var e = 0, t = d.animations, r = t.length; e < r;) {
                var a = t[e],
                    o = a.animatable,
                    i = a.tweens,
                    s = i.length - 1,
                    c = i[s];
                s && (c = w(i, function (e) {
                    return n < e.end
                })[0] || c);
                for (var l = u(n - c.start - c.delay, 0, c.duration) / c.duration, f = isNaN(l) ? 1 : c.easing(l), p = c.to.strings, g = c.round, h = [], v = c.to.numbers.length, m = void 0, y = 0; y < v; y++) {
                    var b = void 0,
                        x = c.to.numbers[y],
                        M = c.from.numbers[y] || 0;
                    b = c.isPath ? H(c.value, f * x) : M + f * (x - M), g && (c.isColor && y > 2 || (b = Math.round(b * g) / g)), h.push(b)
                }
                var k = p.length;
                if (k) {
                    m = p[0];
                    for (var I = 0; I < k; I++) {
                        p[I];
                        var C = p[I + 1],
                            O = h[I];
                        isNaN(O) || (m += C ? O + C : O + " ")
                    }
                } else m = h[0];
                G[a.type](o.target, a.property, m, o.transforms), a.currentValue = m, e++
            }
        }

        function m(n) {
            d[n] && !d.passThrough && d[n](d)
        }

        function y(n) {
            var r = d.duration,
                a = d.delay,
                g = r - d.endDelay,
                y = p(n);
            d.progress = u(y / r * 100, 0, 100), d.reversePlayback = y < d.currentTime, e && function (n) {
                if (d.reversePlayback)
                    for (var t = s; t--;) h(n, e[t]);
                else
                    for (var r = 0; r < s; r++) h(n, e[r])
            }(y), !d.began && d.currentTime > 0 && (d.began = !0, m("begin")), !d.loopBegan && d.currentTime > 0 && (d.loopBegan = !0, m("loopBegin")), y <= a && 0 !== d.currentTime && v(0), (y >= g && d.currentTime !== r || !r) && v(r), y > a && y < g ? (d.changeBegan || (d.changeBegan = !0, d.changeCompleted = !1, m("changeBegin")), m("change"), v(y)) : d.changeBegan && (d.changeCompleted = !0, d.changeBegan = !1, m("changeComplete")), d.currentTime = u(y, 0, r), d.began && m("update"), n >= r && (o = 0, d.remaining && !0 !== d.remaining && d.remaining--, d.remaining ? (t = i, m("loopComplete"), d.loopBegan = !1, "alternate" === d.direction && f()) : (d.paused = !0, d.completed || (d.completed = !0, m("loopComplete"), m("complete"), !d.passThrough && "Promise" in window && (c(), l(d)))))
        }
        return d.reset = function () {
            var n = d.direction;
            d.passThrough = !1, d.currentTime = 0, d.progress = 0, d.paused = !0, d.began = !1, d.loopBegan = !1, d.changeBegan = !1, d.completed = !1, d.changeCompleted = !1, d.reversePlayback = !1, d.reversed = "reverse" === n, d.remaining = d.loop, e = d.children;
            for (var t = s = e.length; t--;) d.children[t].reset();
            (d.reversed && !0 !== d.loop || "alternate" === n && 1 === d.loop) && d.remaining++, v(d.reversed ? d.duration : 0)
        }, d.set = function (n, e) {
            return V(n, e), d
        }, d.tick = function (n) {
            i = n, t || (t = i), y((i + (o - t)) * on.speed)
        }, d.seek = function (n) {
            y(p(n))
        }, d.pause = function () {
            d.paused = !0, g()
        }, d.play = function () {
            d.paused && (d.completed && d.reset(), d.paused = !1, tn.push(d), g(), en || an())
        }, d.reverse = function () {
            f(), g()
        }, d.restart = function () {
            d.reset(), d.play()
        }, d.reset(), d.autoplay && d.play(), d
    }

    function un(n, e) {
        for (var t = e.length; t--;) k(n, e[t].animatable.target) && e.splice(t, 1)
    }
    "undefined" != typeof document && document.addEventListener("visibilitychange", function () {
        document.hidden ? (tn.forEach(function (n) {
            return n.pause()
        }), rn = tn.slice(0), on.running = tn = []) : rn.forEach(function (n) {
            return n.play()
        })
    }), on.version = "3.1.0", on.speed = 1, on.running = tn, on.remove = function (n) {
        for (var e = $(n), t = tn.length; t--;) {
            var r = tn[t],
                a = r.animations,
                o = r.children;
            un(e, a);
            for (var i = o.length; i--;) {
                var u = o[i],
                    s = u.animations;
                un(e, s), s.length || u.children.length || o.splice(i, 1)
            }
            a.length || o.length || r.pause()
        }
    }, on.get = L, on.set = V, on.convertPx = j, on.path = function (n, e) {
        var t = l.str(n) ? b(n)[0] : n,
            r = e || 100;
        return function (n) {
            return {
                property: n,
                el: t,
                svg: R(t),
                totalLength: Y(t) * (r / 100)
            }
        }
    }, on.setDashoffset = function (n) {
        var e = Y(n);
        return n.setAttribute("stroke-dasharray", e), e
    }, on.stagger = function (n, e) {
        void 0 === e && (e = {});
        var t = e.direction || "normal",
            r = e.easing ? y(e.easing) : null,
            a = e.grid,
            o = e.axis,
            i = e.from || 0,
            u = "first" === i,
            s = "center" === i,
            c = "last" === i,
            d = l.arr(n),
            f = d ? parseFloat(n[0]) : parseFloat(n),
            p = d ? parseFloat(n[1]) : 0,
            g = B(d ? n[1] : n) || 0,
            h = e.start || 0 + (d ? f : 0),
            v = [],
            m = 0;
        return function (n, e, l) {
            if (u && (i = 0), s && (i = (l - 1) / 2), c && (i = l - 1), !v.length) {
                for (var y = 0; y < l; y++) {
                    if (a) {
                        var b = s ? (a[0] - 1) / 2 : i % a[0],
                            w = s ? (a[1] - 1) / 2 : Math.floor(i / a[0]),
                            x = b - y % a[0],
                            M = w - Math.floor(y / a[0]),
                            k = Math.sqrt(x * x + M * M);
                        "x" === o && (k = -x), "y" === o && (k = -M), v.push(k)
                    } else v.push(Math.abs(i - y));
                    m = Math.max.apply(Math, v)
                }
                r && (v = v.map(function (n) {
                    return r(n / m) * m
                })), "reverse" === t && (v = v.map(function (n) {
                    return o ? n < 0 ? -1 * n : -n : Math.abs(m - n)
                }))
            }
            return h + (d ? (p - f) / m : f) * (Math.round(100 * v[e]) / 100) + g
        }
    }, on.timeline = function (n) {
        void 0 === n && (n = {});
        var e = on(n);
        return e.duration = 0, e.add = function (t, r) {
            var o = tn.indexOf(e),
                i = e.children;

            function u(n) {
                n.passThrough = !0
            }
            o > -1 && tn.splice(o, 1);
            for (var s = 0; s < i.length; s++) u(i[s]);
            var c = O(t, C(a, n));
            c.targets = c.targets || n.targets;
            var d = e.duration;
            c.autoplay = !1, c.direction = e.direction, c.timelineOffset = l.und(r) ? d : X(r, d), u(e), e.seek(c.timelineOffset);
            var f = on(c);
            u(f), i.push(f);
            var p = K(i, n);
            return e.delay = p.delay, e.endDelay = p.endDelay, e.duration = p.duration, e.seek(0), e.reset(), e.autoplay && e.play(), e
        }, e
    }, on.easing = y, on.penner = m, on.random = function (n, e) {
        return Math.floor(Math.random() * (e - n + 1)) + n
    };
    var sn = on,
        cn = (t(0), []);
    window.innerHeight < window.innerWidth ? (cn[0] = {
        x: "calc(50vw - 4.8em)",
        y: 0
    }, cn[1] = {
        x: "calc(50vw - 4.8em)",
        y: "110%"
    }, cn[2] = {
        x: "calc(50vw - 4.8em)",
        y: "220%"
    }) : (cn[0] = {
        x: 0,
        y: "20vh"
    }, cn[1] = {
        x: "-110%",
        y: "20vh"
    }, cn[2] = {
        x: "110%",
        y: "20vh"
    }), sn.timeline({
        easing: "easeInOutSine",
        duration: 1250
    }).add({
        targets: "#circle1",
        keyframes: [{
            translateX: 0,
            translateY: 0,
            scale: [0, 9],
            duration: 500
        }, {
            scale: 1,
            duration: 500,
            delay: 700
        }, {
            translateX: cn[0].x,
            translateY: cn[0].y,
            duration: 250
        }]
    }).add({
        targets: "#camera-svg",
        opacity: 1,
        translateX: [40, 0],
        duration: 250
    }).add({
        targets: "#circle2",
        keyframes: [{
            translateX: 0,
            translateY: 0,
            scale: [0, 9],
            duration: 500
        }, {
            scale: 1,
            duration: 500,
            delay: 700
        }, {
            translateX: cn[1].x,
            translateY: cn[1].y,
            duration: 250
        }]
    }).add({
        targets: "#code-svg",
        opacity: 1,
        translateX: [40, 0],
        duration: 250
    }).add({
        targets: "#circle3",
        keyframes: [{
            translateX: 0,
            translateY: 0,
            scale: [0, 9],
            duration: 500
        }, {
            scale: 1,
            duration: 500,
            delay: 700
        }, {
            translateX: cn[2].x,
            translateY: cn[2].y,
            duration: 250
        }]
    }).add({
        targets: "#design-svg",
        opacity: 1,
        translateX: [40, 0],
        duration: 250
    }), sn({
        targets: "#title .y",
        strokeDashoffset: [sn.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: sn.stagger(250),
        loop: 3,
        direction: "alternate"
    }).finished.then(function () {
        document.getElementById("title").style.transition = "1s", document.getElementById("title").style.transform = "translate(-52.5%, 0%)", document.getElementById("main-content").style.transition = "1s", document.getElementById("main-content").style.transitionDelay = "1s", document.getElementById("main-content").style.opacity = 1, window.innerWidth > 800 ? (document.getElementById("title").style.top = "0", document.getElementById("title").style.transform = "translate(-52.5%, 0%) scale(0.75)") : (document.getElementById("title").style.top = "50px", document.getElementById("title").style.width = .8 * window.innerWidth)
    });
    var ln = sn({
        easing: "easeInOutExpo",
        targets: ".social-icon",
        duration: 900,
        opacity: [0, 100],
        translateX: [-100, 0],
        delay: sn.stagger(100)
    });
    sn({
        targets: "#corner-logo",
        borderRadius: ["0%", "50%"],
        easing: "easeInOutQuad",
        loop: !0,
        translateY: 10,
        duration: 3e3,
        delay: 500,
        direction: "alternate",
        rotate: [0, 360],
        elasticity: 600
    });
    for (var dn = document.querySelectorAll(".heading"), fn = 0; fn < dn.length; fn++) dn[fn].innerHTML = dn[fn].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    var pn, gn = [{
            id: "#circle1",
            icon: "#camera-svg",
            div: "#photography",
            svgclass: " .p"
        }, {
            id: "#circle2",
            icon: "#code-svg",
            div: "#code",
            svgclass: " .q"
        }, {
            id: "#circle3",
            icon: "#design-svg",
            div: "#design",
            svgclass: " .a"
        }],
        hn = !1,
        vn = function () {
            hn = !1, ln.reverse(), ln.play(), sn({
                targets: pn.id,
                translateX: {
                    value: cn[pn.id.charAt(7) - 1].x,
                    duration: 0
                },
                translateY: {
                    value: cn[pn.id.charAt(7) - 1].y,
                    duration: 0
                },
                scale: [50, 1],
                duration: 250,
                easing: "easeOutCirc"
            }), window.innerWidth < window.innerHeight && (document.querySelector(pn.icon).style.display = "block"), document.getElementById("corner-logo").style.background = "#fff", document.querySelector(pn.id).style.zIndex = "0", document.getElementById("title").style.display = "block", document.querySelector(".close").style.display = "none", document.querySelector(pn.div).style.display = "none"
        };
    ["#circle1", "#circle2", "#circle3"].forEach(function (n, e) {
        return document.querySelector(n).onclick = function () {
            return function (n) {
                hn = !0, ln.reverse(), ln.play(), pn = gn[n], window.innerWidth > window.innerHeight ? (sn({
                    targets: pn.id,
                    translateX: {
                        value: "50vw",
                        duration: 0
                    },
                    translateY: {
                        value: cn[0].y,
                        duration: 0
                    },
                    scale: 2.1 * window.innerWidth / document.querySelector(pn.id).clientWidth,
                    duration: 250,
                    easing: "easeInCirc"
                }), sn({
                    targets: pn.icon + pn.svgclass,
                    strokeDashoffset: [sn.setDashoffset, 0],
                    duration: 2200,
                    delay: sn.stagger(250),
                    easing: "easeInCirc",
                    loop: !0,
                    direction: "alternate"
                })) : (sn({
                    targets: pn.id,
                    translateX: {
                        value: cn[0].x,
                        duration: 0
                    },
                    translateY: {
                        value: cn[0].y,
                        duration: 0
                    },
                    scale: 40,
                    duration: 250,
                    easing: "easeInCirc"
                }), document.querySelector(pn.icon).style.display = "none"), document.getElementById("corner-logo").style.background = "#e84775", document.getElementById("title").style.display = "none", document.querySelector(".close").style.display = "block", document.querySelector(pn.div).style.display = "block", document.querySelector(pn.id).style.zIndex = "2", sn({
                    targets: pn.div + " .heading .letter",
                    translateX: [40, 0],
                    opacity: [0, 1],
                    duration: 1200,
                    delay: sn.stagger(30, {
                        start: 500
                    })
                }), sn({
                    targets: pn.div + " .content",
                    opacity: [0, 1],
                    duration: 2e3,
                    delay: 300
                })
            }(e)
        }
    }), document.querySelector(".close").onclick = vn, window.addEventListener("keyup", function (n) {
        27 == n.keyCode && hn && vn()
    })
}]);