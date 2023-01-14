/*! jQuery v4.0.0-pre | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (Q, e) {
  "use strict";
  var g = [],
    r = Object.getPrototypeOf,
    a = g.slice,
    h = g.flat
      ? function (e) {
          return g.flat.call(e);
        }
      : function (e) {
          return g.concat.apply([], e);
        },
    J = g.push,
    K = g.indexOf,
    n = {},
    i = n.toString,
    v = n.hasOwnProperty,
    o = v.toString,
    s = o.call(Object),
    Z = {};
  function y(e) {
    return null == e
      ? e + ""
      : "object" == typeof e
      ? n[i.call(e)] || "object"
      : typeof e;
  }
  function m(e) {
    return null != e && e === e.window;
  }
  function x(e) {
    var t = !!e && e.length,
      n = y(e);
    return (
      "function" != typeof e &&
      !m(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  var C = Q.document,
    u = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i = (n = n || C).createElement("script");
    if (((i.text = e), t)) for (r in u) t[r] && (i[r] = t[r]);
    n.head.appendChild(i).parentNode.removeChild(i);
  }
  var t = "4.0.0-pre 09d988b774e7ff4acfb69c0cde2dab373559aaca",
    l = /HTML$/i,
    ee = function (e, t) {
      return new ee.fn.init(e, t);
    };
  function te(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  (ee.fn = ee.prototype =
    {
      jquery: t,
      constructor: ee,
      length: 0,
      toArray: function () {
        return a.call(this);
      },
      get: function (e) {
        return null == e
          ? a.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = ee.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return ee.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          ee.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(a.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          ee.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          ee.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
    }),
    (ee.extend = ee.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          s = arguments[0] || {},
          a = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof s && ((l = s), (s = arguments[a] || {}), a++),
            "object" != typeof s && "function" != typeof s && (s = {}),
            a === u && ((s = this), a--);
          a < u;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  s !== r &&
                  (l && r && (ee.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = s[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || ee.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (s[t] = ee.extend(l, o, r)))
                    : void 0 !== r && (s[t] = r));
        return s;
      }),
    ee.extend({
      expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== i.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              o.call(n) === s))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (x(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      text: function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) return e.textContent;
          if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += ee.text(t);
        return n;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (x(Object(e))
              ? ee.merge(n, "string" == typeof e ? [e] : e)
              : J.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : K.call(t, e, n);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !l.test(t || (n && n.nodeName) || "HTML");
      },
      contains: function (e, t) {
        var n = t && t.parentNode;
        return (
          e === n ||
          !(
            !n ||
            1 !== n.nodeType ||
            !(e.contains
              ? e.contains(n)
              : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
          )
        );
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
          !t(e[i], i) !== s && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          s = [];
        if (x(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && s.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
        return h(s);
      },
      guid: 1,
      support: Z,
    }),
    "function" == typeof Symbol &&
      (ee.fn[Symbol.iterator] = g[Symbol.iterator]),
    ee.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var w = C.documentElement,
    ne = g.pop,
    re = "[\\x20\\t\\r\\n\\f]",
    ie = C.documentMode;
  try {
    Z.cssSupportsSelector =
      CSS.supports("selector(*)") && !CSS.supports("selector(:is(*,:jqfake))");
  } catch (e) {
    Z.cssSupportsSelector = !1;
  }
  var c = [];
  ie &&
    c.push(
      ":enabled",
      ":disabled",
      "\\[" + re + "*name" + re + "*=" + re + "*(?:''|\"\")"
    ),
    Z.cssSupportsSelector || c.push(":has");
  var oe = (c = c.length && new RegExp(c.join("|"))),
    se = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
    f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e, t) {
    return t
      ? "\0" === e
        ? "\ufffd"
        : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
      : "\\" + e;
  }
  ee.escapeSelector = function (e) {
    return (e + "").replace(f, p);
  };
  var d,
    T = g.sort,
    j = g.splice;
  function k(e, t) {
    if (e === t) return (d = !0), 0;
    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
    return (
      n ||
      (1 &
      (n =
        (e.ownerDocument || e) == (t.ownerDocument || t)
          ? e.compareDocumentPosition(t)
          : 1)
        ? e == C || (e.ownerDocument == C && ee.contains(C, e))
          ? -1
          : t == C || (t.ownerDocument == C && ee.contains(C, t))
          ? 1
          : 0
        : 4 & n
        ? -1
        : 1)
    );
  }
  (ee.uniqueSort = function (e) {
    var t,
      n = [],
      r = 0,
      i = 0;
    if (((d = !1), T.call(e, k), d)) {
      while ((t = e[i++])) t === e[i] && (r = n.push(i));
      while (r--) j.call(e, n[r], 1);
    }
    return e;
  }),
    (ee.fn.uniqueSort = function () {
      return this.pushStack(ee.uniqueSort(a.apply(this)));
    });
  var ae = C,
    ue = w.matches || w.msMatchesSelector;
  function S(e, t, n) {
    var r = [],
      i = void 0 !== n;
    while ((e = e[t]) && 9 !== e.nodeType)
      if (1 === e.nodeType) {
        if (i && ee(e).is(n)) break;
        r.push(e);
      }
    return r;
  }
  function E(e, t) {
    for (var n = []; e; e = e.nextSibling)
      1 === e.nodeType && e !== t && n.push(e);
    return n;
  }
  !(function () {
    var e,
      x,
      b,
      w,
      r,
      T,
      C = ee.expando,
      j = 0,
      n = 0,
      i = H(),
      c = H(),
      a = H(),
      d = H(),
      t =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        re +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      o =
        "\\[" +
        re +
        "*(" +
        t +
        ")(?:" +
        re +
        "*([*^$|!~]?=)" +
        re +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        t +
        "))|)" +
        re +
        "*\\]",
      s =
        ":(" +
        t +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        o +
        ")*)|.*)\\)|)",
      u = new RegExp(re + "+", "g"),
      f = new RegExp("^" + re + "*," + re + "*"),
      h = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
      g = new RegExp(re + "|>"),
      l = new RegExp(s),
      p = new RegExp("^" + t + "$"),
      v = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + o),
        PSEUDO: new RegExp("^" + s),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            re +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            re +
            "*(?:([+-]|)" +
            re +
            "*(\\d+)|))" +
            re +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp(
          "^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$",
          "i"
        ),
        needsContext: new RegExp(
          "^" +
            re +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            re +
            "*((?:-\\d)?\\d*)" +
            re +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      y = /^(?:input|select|textarea|button)$/i,
      m = /^h\d$/i,
      k = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      S = /[+~]/,
      E = new RegExp("\\\\[\\da-fA-F]{1,6}" + re + "?|\\\\([^\\r\\n\\f])", "g"),
      D = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      A = function () {
        $();
      },
      q = U(
        function (e) {
          return !0 === e.disabled && te(e, "fieldset");
        },
        { dir: "parentNode", next: "legend" }
      );
    function N(e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }
    function O(t, e, n, r) {
      var i,
        o,
        s,
        a,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && ($(e), (e = e || w), T)) {
        if (11 !== p && (u = k.exec(t)))
          if ((i = u[1])) {
            if (9 === p) return (s = e.getElementById(i)) && J.call(n, s), n;
            if (f && (s = f.getElementById(i)) && ee.contains(e, s))
              return J.call(n, s), n;
          } else {
            if (u[2]) return J.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && e.getElementsByClassName)
              return J.apply(n, e.getElementsByClassName(i)), n;
          }
        if (!(d[t + " "] || (oe && oe.test(t)))) {
          if (((c = t), (f = e), 1 === p && (g.test(t) || h.test(t)))) {
            ((f = (S.test(t) && I(e.parentNode)) || e) !== e || ie) &&
              ((a = e.getAttribute("id"))
                ? (a = ee.escapeSelector(a))
                : e.setAttribute("id", (a = C))),
              (o = (l = B(t)).length);
            while (o--) l[o] = (a ? "#" + a : ":scope") + " " + _(l[o]);
            c = l.join(",");
          }
          try {
            if (
              Z.cssSupportsSelector &&
              !CSS.supports("selector(:is(" + c + "))")
            )
              throw new Error();
            return J.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            d(t, !0);
          } finally {
            a === C && e.removeAttribute("id");
          }
        }
      }
      return (function (e, t, n, r) {
        var i,
          o,
          s,
          a,
          u,
          l = "function" == typeof e && e,
          c = !r && B((e = l.selector || e));
        if (((n = n || []), 1 === c.length)) {
          if (
            2 < (o = c[0] = c[0].slice(0)).length &&
            "ID" === (s = o[0]).type &&
            9 === t.nodeType &&
            T &&
            x.relative[o[1].type]
          ) {
            if (!(t = (x.find.ID(s.matches[0].replace(E, D), t) || [])[0]))
              return n;
            l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
          }
          i = v.needsContext.test(e) ? 0 : o.length;
          while (i--) {
            if (((s = o[i]), x.relative[(a = s.type)])) break;
            if (
              (u = x.find[a]) &&
              (r = u(
                s.matches[0].replace(E, D),
                (S.test(o[0].type) && I(t.parentNode)) || t
              ))
            ) {
              if ((o.splice(i, 1), !(e = r.length && _(o))))
                return J.apply(n, r), n;
              break;
            }
          }
        }
        return (
          (l || G(e, c))(
            r,
            t,
            !T,
            n,
            !t || (S.test(e) && I(t.parentNode)) || t
          ),
          n
        );
      })(t.replace(se, "$1"), e, n, r);
    }
    function H() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > x.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function L(e) {
      return (e[C] = !0), e;
    }
    function P(t) {
      return function (e) {
        return te(e, "input") && e.type === t;
      };
    }
    function R(t) {
      return function (e) {
        return (te(e, "input") || te(e, "button")) && e.type === t;
      };
    }
    function M(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && q(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function W(s) {
      return L(function (o) {
        return (
          (o = +o),
          L(function (e, t) {
            var n,
              r = s([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function I(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function $(e) {
      var t,
        n = e ? e.ownerDocument || e : ae;
      n != w &&
        9 === n.nodeType &&
        ((r = (w = n).documentElement),
        (T = !ee.isXMLDoc(w)),
        ie &&
          ae != w &&
          (t = w.defaultView) &&
          t.top !== t &&
          t.addEventListener("unload", A));
    }
    for (e in ((O.matches = function (e, t) {
      return O(e, null, null, t);
    }),
    (O.matchesSelector = function (e, t) {
      if (($(e), T && !d[t + " "] && (!oe || !oe.test(t))))
        try {
          return ue.call(e, t);
        } catch (e) {
          d(t, !0);
        }
      return 0 < O(t, w, null, [e]).length;
    }),
    ((x = ee.expr =
      {
        cacheLength: 50,
        createPseudo: L,
        match: v,
        find: {
          ID: function (e, t) {
            if (void 0 !== t.getElementById && T) {
              var n = t.getElementById(e);
              return n ? [n] : [];
            }
          },
          TAG: function (e, t) {
            return void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e);
          },
          CLASS: function (e, t) {
            if (void 0 !== t.getElementsByClassName && T)
              return t.getElementsByClassName(e);
          },
        },
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(E, D)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(E, D)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || N(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && N(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return v.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    l.test(n) &&
                    (t = B(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          ID: function (e) {
            var t = e.replace(E, D);
            return function (e) {
              return e.getAttribute("id") === t;
            };
          },
          TAG: function (e) {
            var t = e.replace(E, D).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return te(e, t);
                };
          },
          CLASS: function (e) {
            var t = i[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) &&
                i(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = ee.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(u, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (d, e, t, h, g) {
            var v = "nth" !== d.slice(0, 3),
              y = "last" !== d.slice(-4),
              m = "of-type" === e;
            return 1 === h && 0 === g
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    s,
                    a,
                    u = v !== y ? "nextSibling" : "previousSibling",
                    l = e.parentNode,
                    c = m && e.nodeName.toLowerCase(),
                    f = !n && !m,
                    p = !1;
                  if (l) {
                    if (v) {
                      while (u) {
                        o = e;
                        while ((o = o[u]))
                          if (m ? te(o, c) : 1 === o.nodeType) return !1;
                        a = u = "only" === d && !a && "nextSibling";
                      }
                      return !0;
                    }
                    if (((a = [y ? l.firstChild : l.lastChild]), y && f)) {
                      (p =
                        (s =
                          (r = (i = l[C] || (l[C] = {}))[d] || [])[0] === j &&
                          r[1]) && r[2]),
                        (o = s && l.childNodes[s]);
                      while ((o = (++s && o && o[u]) || (p = s = 0) || a.pop()))
                        if (1 === o.nodeType && ++p && o === e) {
                          i[d] = [j, s, p];
                          break;
                        }
                    } else if (
                      (f &&
                        (p = s =
                          (r = (i = e[C] || (e[C] = {}))[d] || [])[0] === j &&
                          r[1]),
                      !1 === p)
                    )
                      while ((o = (++s && o && o[u]) || (p = s = 0) || a.pop()))
                        if (
                          (m ? te(o, c) : 1 === o.nodeType) &&
                          ++p &&
                          (f && ((i = o[C] || (o[C] = {}))[d] = [j, p]),
                          o === e)
                        )
                          break;
                    return (p -= g) === h || (p % h == 0 && 0 <= p / h);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n =
              x.pseudos[e] ||
              x.setFilters[e.toLowerCase()] ||
              N("unsupported pseudo: " + e);
            return n[C] ? n(t) : n;
          },
        },
        pseudos: {
          not: L(function (e) {
            var r = [],
              i = [],
              a = G(e.replace(se, "$1"));
            return a[C]
              ? L(function (e, t, n, r) {
                  var i,
                    o = a(e, null, r, []),
                    s = e.length;
                  while (s--) (i = o[s]) && (e[s] = !(t[s] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), a(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: L(function (t) {
            return function (e) {
              return 0 < O(t, e).length;
            };
          }),
          contains: L(function (t) {
            return (
              (t = t.replace(E, D)),
              function (e) {
                return -1 < (e.textContent || ee.text(e)).indexOf(t);
              }
            );
          }),
          lang: L(function (n) {
            return (
              p.test(n || "") || N("unsupported lang: " + n),
              (n = n.replace(E, D).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = T
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = Q.location && Q.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === r;
          },
          focus: function (e) {
            return (
              e === w.activeElement &&
              w.hasFocus() &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: M(!1),
          disabled: M(!0),
          checked: function (e) {
            return (
              (te(e, "input") && !!e.checked) ||
              (te(e, "option") && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              ie && e.parentNode && e.parentNode.selectedIndex,
              !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !x.pseudos.empty(e);
          },
          header: function (e) {
            return m.test(e.nodeName);
          },
          input: function (e) {
            return y.test(e.nodeName);
          },
          button: function (e) {
            return (te(e, "input") && "button" === e.type) || te(e, "button");
          },
          text: function (e) {
            return te(e, "input") && "text" === e.type;
          },
          first: W(function () {
            return [0];
          }),
          last: W(function (e, t) {
            return [t - 1];
          }),
          eq: W(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: W(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: W(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: W(function (e, t, n) {
            var r;
            for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: W(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = x.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      x.pseudos[e] = P(e);
    for (e in { submit: !0, reset: !0 }) x.pseudos[e] = R(e);
    function F() {}
    function B(e, t) {
      var n,
        r,
        i,
        o,
        s,
        a,
        u,
        l = c[e + " "];
      if (l) return t ? 0 : l.slice(0);
      (s = e), (a = []), (u = x.preFilter);
      while (s) {
        for (o in ((n && !(r = f.exec(s))) ||
          (r && (s = s.slice(r[0].length) || s), a.push((i = []))),
        (n = !1),
        (r = h.exec(s)) &&
          ((n = r.shift()),
          i.push({ value: n, type: r[0].replace(se, " ") }),
          (s = s.slice(n.length))),
        x.filter))
          !(r = v[o].exec(s)) ||
            (u[o] && !(r = u[o](r))) ||
            ((n = r.shift()),
            i.push({ value: n, type: o, matches: r }),
            (s = s.slice(n.length)));
        if (!n) break;
      }
      return t ? s.length : s ? N(e) : c(e, a).slice(0);
    }
    function _(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function U(s, e, t) {
      var a = e.dir,
        u = e.next,
        l = u || a,
        c = t && "parentNode" === l,
        f = n++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[a])) if (1 === e.nodeType || c) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o = [j, f];
            if (n) {
              while ((e = e[a]))
                if ((1 === e.nodeType || c) && s(e, t, n)) return !0;
            } else
              while ((e = e[a]))
                if (1 === e.nodeType || c)
                  if (((i = e[C] || (e[C] = {})), u && te(e, u))) e = e[a] || e;
                  else {
                    if ((r = i[l]) && r[0] === j && r[1] === f)
                      return (o[2] = r[2]);
                    if (((i[l] = o)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function X(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function z(e, t, n, r, i) {
      for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
        (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), l && t.push(a)));
      return s;
    }
    function V(d, h, g, v, y, e) {
      return (
        v && !v[C] && (v = V(v)),
        y && !y[C] && (y = V(y, e)),
        L(function (e, t, n, r) {
          var i,
            o,
            s,
            a,
            u = [],
            l = [],
            c = t.length,
            f =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) O(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            p = !d || (!e && h) ? f : z(f, u, d, n, r);
          if (
            (g ? g(p, (a = y || (e ? d : c || v) ? [] : t), n, r) : (a = p), v)
          ) {
            (i = z(a, l)), v(i, [], n, r), (o = i.length);
            while (o--) (s = i[o]) && (a[l[o]] = !(p[l[o]] = s));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = a.length);
                while (o--) (s = a[o]) && i.push((p[o] = s));
                y(null, (a = []), i, r);
              }
              o = a.length;
              while (o--)
                (s = a[o]) &&
                  -1 < (i = y ? K.call(e, s) : u[o]) &&
                  (e[i] = !(t[i] = s));
            }
          } else (a = z(a === t ? a.splice(c, a.length) : a)), y ? y(null, t, a, r) : J.apply(t, a);
        })
      );
    }
    function Y(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = x.relative[e[0].type],
          s = o || x.relative[" "],
          a = o ? 1 : 0,
          u = U(
            function (e) {
              return e === i;
            },
            s,
            !0
          ),
          l = U(
            function (e) {
              return -1 < K.call(i, e);
            },
            s,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== b)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        a < r;
        a++
      )
        if ((t = x.relative[e[a].type])) c = [U(X(c), t)];
        else {
          if ((t = x.filter[e[a].type].apply(null, e[a].matches))[C]) {
            for (n = ++a; n < r; n++) if (x.relative[e[n].type]) break;
            return V(
              1 < a && X(c),
              1 < a &&
                _(
                  e
                    .slice(0, a - 1)
                    .concat({ value: " " === e[a - 2].type ? "*" : "" })
                ).replace(se, "$1"),
              t,
              a < n && Y(e.slice(a, n)),
              n < r && Y((e = e.slice(n))),
              n < r && _(e)
            );
          }
          c.push(t);
        }
      return X(c);
    }
    function G(e, t) {
      var n,
        g,
        v,
        y,
        m,
        r,
        i = [],
        o = [],
        s = a[e + " "];
      if (!s) {
        t || (t = B(e)), (n = t.length);
        while (n--) (s = Y(t[n]))[C] ? i.push(s) : o.push(s);
        (s = a(
          e,
          ((g = o),
          (y = 0 < (v = i).length),
          (m = 0 < g.length),
          (r = function (e, t, n, r, i) {
            var o,
              s,
              a,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = b,
              d = e || (m && x.find.TAG("*", i)),
              h = (j += null == p ? 1 : Math.random() || 0.1);
            for (i && (b = t == w || t || i); null != (o = d[l]); l++) {
              if (m && o) {
                (s = 0), t || o.ownerDocument == w || ($(o), (n = !T));
                while ((a = g[s++]))
                  if (a(o, t || w, n)) {
                    J.call(r, o);
                    break;
                  }
                i && (j = h);
              }
              y && ((o = !a && o) && u--, e && c.push(o));
            }
            if (((u += l), y && l !== u)) {
              s = 0;
              while ((a = v[s++])) a(c, f, t, n);
              if (e) {
                if (0 < u) while (l--) c[l] || f[l] || (f[l] = ne.call(r));
                f = z(f);
              }
              J.apply(r, f),
                i && !e && 0 < f.length && 1 < u + v.length && ee.uniqueSort(r);
            }
            return i && ((j = h), (b = p)), c;
          }),
          y ? L(r) : r)
        )).selector = e;
      }
      return s;
    }
    (F.prototype = x.filters = x.pseudos),
      (x.setFilters = new F()),
      $(),
      (ee.find = O);
  })();
  var D = ee.expr.match.needsContext,
    A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function q(e) {
    return "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length;
  }
  function N(e, n, r) {
    return "function" == typeof n
      ? ee.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? ee.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? ee.grep(e, function (e) {
          return -1 < K.call(n, e) !== r;
        })
      : ee.filter(n, e, r);
  }
  (ee.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? ee.find.matchesSelector(r, e)
          ? [r]
          : []
        : ee.find.matches(
            e,
            ee.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    ee.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            ee(e).filter(function () {
              for (t = 0; t < r; t++) if (ee.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) ee.find(e, i[t], n);
        return 1 < r ? ee.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(N(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(N(this, e || [], !0));
      },
      is: function (e) {
        return !!N(
          this,
          "string" == typeof e && D.test(e) ? ee(e) : e || [],
          !1
        ).length;
      },
    });
  var O,
    H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((ee.fn.init = function (e, t) {
    var n, r;
    if (!e) return this;
    if (e.nodeType) return (this[0] = e), (this.length = 1), this;
    if ("function" == typeof e) return void 0 !== O.ready ? O.ready(e) : e(ee);
    if (q((n = e + ""))) n = [null, e, null];
    else {
      if ("string" != typeof e) return ee.makeArray(e, this);
      n = H.exec(e);
    }
    if (!n || (!n[1] && t))
      return !t || t.jquery ? (t || O).find(e) : this.constructor(t).find(e);
    if (n[1]) {
      if (
        ((t = t instanceof ee ? t[0] : t),
        ee.merge(
          this,
          ee.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
        ),
        A.test(n[1]) && ee.isPlainObject(t))
      )
        for (n in t)
          "function" == typeof this[n] ? this[n](t[n]) : this.attr(n, t[n]);
      return this;
    }
    return (
      (r = C.getElementById(n[2])) && ((this[0] = r), (this.length = 1)), this
    );
  }).prototype = ee.fn),
    (O = ee(C));
  var L = /^(?:parents|prev(?:Until|All))/,
    P = { children: !0, contents: !0, next: !0, prev: !0 };
  function R(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  ee.fn.extend({
    has: function (e) {
      var t = ee(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ee.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        s = "string" != typeof e && ee(e);
      if (!D.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? -1 < s.index(n)
                : 1 === n.nodeType && ee.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? ee.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? K.call(ee(e), this[0])
          : K.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(ee.uniqueSort(ee.merge(this.get(), ee(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    ee.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return S(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return S(e, "parentNode", n);
        },
        next: function (e) {
          return R(e, "nextSibling");
        },
        prev: function (e) {
          return R(e, "previousSibling");
        },
        nextAll: function (e) {
          return S(e, "nextSibling");
        },
        prevAll: function (e) {
          return S(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return S(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return S(e, "previousSibling", n);
        },
        siblings: function (e) {
          return E((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return E(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (te(e, "template") && (e = e.content || e),
              ee.merge([], e.childNodes));
        },
      },
      function (r, i) {
        ee.fn[r] = function (e, t) {
          var n = ee.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = ee.filter(t, n)),
            1 < this.length &&
              (P[r] || ee.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var M = /[^\x20\t\r\n\f]+/g;
  function W(e) {
    return e;
  }
  function I(e) {
    throw e;
  }
  function $(e, t, n, r) {
    var i;
    try {
      e && "function" == typeof (i = e.promise)
        ? i.call(e).done(t).fail(n)
        : e && "function" == typeof (i = e.then)
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n(e);
    }
  }
  (ee.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          ee.each(e.match(M) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : ee.extend({}, r);
    var i,
      t,
      o,
      s,
      a = [],
      u = [],
      l = -1,
      c = function () {
        for (s = s || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < a.length)
            !1 === a[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = a.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), s && (a = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            a &&
              (t && !i && ((l = a.length - 1), u.push(t)),
              (function n(e) {
                ee.each(e, function (e, t) {
                  "function" == typeof t
                    ? (r.unique && f.has(t)) || a.push(t)
                    : t && t.length && "string" !== y(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            ee.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = ee.inArray(t, a, n)))
                a.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < ee.inArray(e, a) : 0 < a.length;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (s = u = []), (a = t = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (s = u = []), t || i || (a = t = ""), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (e, t) {
          return (
            s ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    ee.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              ee.Callbacks("memory"),
              ee.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              ee.Callbacks("once memory"),
              ee.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              ee.Callbacks("once memory"),
              ee.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          s = {
            state: function () {
              return i;
            },
            always: function () {
              return a.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return s.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return ee
                .Deferred(function (r) {
                  ee.each(o, function (e, t) {
                    var n = "function" == typeof i[t[4]] && i[t[4]];
                    a[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && "function" == typeof e.promise
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, s, a) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = s.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        "function" ==
                        typeof (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then)
                          ? a
                            ? t.call(e, l(u, o, W, a), l(u, o, I, a))
                            : (u++,
                              t.call(
                                e,
                                l(u, o, W, a),
                                l(u, o, I, a),
                                l(u, o, W, o.notifyWith)
                              ))
                          : (s !== W && ((n = void 0), (r = [e])),
                            (a || o.resolveWith)(n, r));
                      }
                    },
                    t = a
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            ee.Deferred.exceptionHook &&
                              ee.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (s !== I && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (ee.Deferred.getStackHook &&
                        (t.stackTrace = ee.Deferred.getStackHook()),
                      Q.setTimeout(t));
                };
              }
              return ee
                .Deferred(function (e) {
                  o[0][3].add(
                    l(0, e, "function" == typeof r ? r : W, e.notifyWith)
                  ),
                    o[1][3].add(l(0, e, "function" == typeof t ? t : W)),
                    o[2][3].add(l(0, e, "function" == typeof n ? n : I));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ee.extend(e, s) : s;
            },
          },
          a = {};
        return (
          ee.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (s[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (a[t[0]] = function () {
                return (
                  a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                );
              }),
              (a[t[0] + "With"] = n.fireWith);
          }),
          s.promise(a),
          e && e.call(a, a),
          a
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = a.call(arguments),
          o = ee.Deferred(),
          s = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? a.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          ($(e, o.done(s(t)).resolve, o.reject, !n),
          "pending" === o.state() || "function" == typeof (i[t] && i[t].then))
        )
          return o.then();
        while (t--) $(i[t], s(t), o.reject);
        return o.promise();
      },
    });
  var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (ee.Deferred.exceptionHook = function (e, t) {
    e &&
      F.test(e.name) &&
      Q.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (ee.readyException = function (e) {
      Q.setTimeout(function () {
        throw e;
      });
    });
  var B = ee.Deferred();
  function _() {
    C.removeEventListener("DOMContentLoaded", _),
      Q.removeEventListener("load", _),
      ee.ready();
  }
  (ee.fn.ready = function (e) {
    return (
      B.then(e).catch(function (e) {
        ee.readyException(e);
      }),
      this
    );
  }),
    ee.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --ee.readyWait : ee.isReady) ||
          ((ee.isReady = !0) !== e && 0 < --ee.readyWait) ||
          B.resolveWith(C, [ee]);
      },
    }),
    (ee.ready.then = B.then),
    "loading" !== C.readyState
      ? Q.setTimeout(ee.ready)
      : (C.addEventListener("DOMContentLoaded", _),
        Q.addEventListener("load", _));
  var U = function (e, t, n, r, i, o, s) {
      var a = 0,
        u = e.length,
        l = null == n;
      if ("object" === y(n))
        for (a in ((i = !0), n)) U(e, t, a, n[a], !0, o, s);
      else if (
        void 0 !== r &&
        ((i = !0),
        "function" != typeof r && (s = !0),
        l &&
          (s
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(ee(e), n);
              }))),
        t)
      )
        for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    X = /-([a-z])/g;
  function z(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(X, z);
  }
  function Y(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }
  function G() {
    this.expando = ee.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = Object.create(null)),
            Y(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[V(t)] = n;
        else for (r in t) i[V(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(V)
              : (t = V(t)) in r
              ? [t]
              : t.match(M) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || ee.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !ee.isEmptyObject(t);
      },
    });
  var le = new G(),
    ce = new G(),
    fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    pe = /[A-Z]/g;
  function de(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(pe, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : fe.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        ce.set(e, t, n);
      } else n = void 0;
    return n;
  }
  ee.extend({
    hasData: function (e) {
      return ce.hasData(e) || le.hasData(e);
    },
    data: function (e, t, n) {
      return ce.access(e, t, n);
    },
    removeData: function (e, t) {
      ce.remove(e, t);
    },
    _data: function (e, t, n) {
      return le.access(e, t, n);
    },
    _removeData: function (e, t) {
      le.remove(e, t);
    },
  }),
    ee.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          s = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = ce.get(o)), 1 === o.nodeType && !le.get(o, "hasDataAttrs"))
          ) {
            t = s.length;
            while (t--)
              s[t] &&
                0 === (r = s[t].name).indexOf("data-") &&
                ((r = V(r.slice(5))), de(o, r, i[r]));
            le.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              ce.set(this, n);
            })
          : U(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = ce.get(o, n))
                    ? t
                    : void 0 !== (t = de(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  ce.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          ce.remove(this, e);
        });
      },
    }),
    ee.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = le.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = le.access(e, t, ee.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ee.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ee._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                ee.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          le.get(e, n) ||
          le.access(e, n, {
            empty: ee.Callbacks("once memory").add(function () {
              le.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    ee.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? ee.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = ee.queue(this, t, n);
                ee._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && ee.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ee.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = ee.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (s--)
          (n = le.get(o[s], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(a));
        return a(), i.promise(t);
      },
    });
  var he = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ge = new RegExp("^(?:([+-])=|)(" + he + ")([a-z%]*)$", "i"),
    ve = ["Top", "Right", "Bottom", "Left"];
  function ye(e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && "none" === ee.css(e, "display"))
    );
  }
  var me = /^[a-z]/,
    xe =
      /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
  function be(e) {
    return me.test(e) && xe.test(e[0].toUpperCase() + e.slice(1));
  }
  function we(e, t, n, r) {
    var i,
      o,
      s = 20,
      a = r
        ? function () {
            return r.cur();
          }
        : function () {
            return ee.css(e, t, "");
          },
      u = a(),
      l = (n && n[3]) || (be(t) ? "px" : ""),
      c = e.nodeType && (!be(t) || ("px" !== l && +u)) && ge.exec(ee.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (s--)
        ee.style(e, t, c + l),
          (1 - o) * (1 - (o = a() / u || 0.5)) <= 0 && (s = 0),
          (c /= o);
      (c *= 2), ee.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var Te = /^-ms-/;
  function Ce(e) {
    return V(e.replace(Te, "ms-"));
  }
  var je = {};
  function ke(e, t) {
    for (var n, r, i, o, s, a, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = le.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ye(r) &&
              (l[c] =
                ((u = s = o = void 0),
                (s = (i = r).ownerDocument),
                (a = i.nodeName),
                (u = je[a]) ||
                  ((o = s.body.appendChild(s.createElement(a))),
                  (u = ee.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (je[a] = u)))))
          : "none" !== n && ((l[c] = "none"), le.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  ee.fn.extend({
    show: function () {
      return ke(this, !0);
    },
    hide: function () {
      return ke(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ye(this) ? ee(this).show() : ee(this).hide();
          });
    },
  });
  var Se = function (e) {
      return (
        ee.contains(e.ownerDocument, e) || e.getRootNode(Ee) === e.ownerDocument
      );
    },
    Ee = { composed: !0 };
  w.getRootNode ||
    (Se = function (e) {
      return ee.contains(e.ownerDocument, e);
    });
  var De = Se,
    Ae = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    qe = {
      thead: ["table"],
      col: ["colgroup", "table"],
      tr: ["tbody", "table"],
      td: ["tr", "tbody", "table"],
    };
  function Ne(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && te(e, t)) ? ee.merge([e], n) : n
    );
  }
  (qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead), (qe.th = qe.td);
  var Oe = /^$|^module$|\/(?:java|ecma)script/i;
  function He(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      le.set(e[n], "globalEval", !t || le.get(t[n], "globalEval"));
  }
  var Le = /<|&#?\w+;/;
  function Pe(e, t, n, r, i) {
    for (
      var o,
        s,
        a,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === y(o) && (o.nodeType || x(o)))
          ee.merge(p, o.nodeType ? [o] : o);
        else if (Le.test(o)) {
          (s = s || f.appendChild(t.createElement("div"))),
            (a = (Ae.exec(o) || ["", ""])[1].toLowerCase()),
            (c = (u = qe[a] || g).length);
          while (-1 < --c) s = s.appendChild(t.createElement(u[c]));
          (s.innerHTML = ee.htmlPrefilter(o)),
            ee.merge(p, s.childNodes),
            ((s = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < ee.inArray(o, r)) i && i.push(o);
      else if (
        ((l = De(o)), (s = Ne(f.appendChild(o), "script")), l && He(s), n)
      ) {
        c = 0;
        while ((o = s[c++])) Oe.test(o.type || "") && n.push(o);
      }
    return f;
  }
  function Re(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Me(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function We(n, r, i, o) {
    r = h(r);
    var e,
      t,
      s,
      a,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0];
    if ("function" == typeof d)
      return n.each(function (e) {
        var t = n.eq(e);
        (r[0] = d.call(this, e, t.html())), We(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = Pe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (a = (s = ee.map(Ne(e, "script"), Re)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = ee.clone(u, !0, !0)), a && ee.merge(s, Ne(u, "script"))),
          i.call(n[c], u, c);
      if (a)
        for (
          l = s[s.length - 1].ownerDocument, ee.map(s, Me), c = 0;
          c < a;
          c++
        )
          (u = s[c]),
            Oe.test(u.type || "") &&
              !le.access(u, "globalEval") &&
              ee.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? ee._evalUrl &&
                  !u.noModule &&
                  ee._evalUrl(
                    u.src,
                    { nonce: u.nonce, crossOrigin: u.crossOrigin },
                    l
                  )
                : b(u.textContent, u, l));
    }
    return n;
  }
  var Ie = /^(?:checkbox|radio)$/i,
    $e = /^([^.]*)(?:\.(.+)|)/;
  function Fe() {
    return !0;
  }
  function Be() {
    return !1;
  }
  function _e(e, t) {
    return (e === C.activeElement) == ("focus" === t);
  }
  function Ue(e, t, n, r, i, o) {
    var s, a;
    if ("object" == typeof t) {
      for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ue(e, a, n, r, t[a], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Be;
    else if (!i) return e;
    return (
      1 === o &&
        ((s = i),
        ((i = function (e) {
          return ee().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = ee.guid++))),
      e.each(function () {
        ee.event.add(this, t, i, r, n);
      })
    );
  }
  function Xe(e, i, o) {
    o
      ? (le.set(e, i, !1),
        ee.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = le.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (ee.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = a.call(arguments)),
                le.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = le.get(this, i)) || t
                  ? le.set(this, i, !1)
                  : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (le.set(this, i, {
                  value: ee.event.trigger(
                    ee.extend(r[0], ee.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === le.get(e, i) && ee.event.add(e, i, Fe);
  }
  (ee.event = {
    add: function (t, e, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = le.get(t);
      if (Y(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && ee.find.matchesSelector(w, i),
          n.guid || (n.guid = ee.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (s = v.handle) ||
            (s = v.handle =
              function (e) {
                return void 0 !== ee && ee.event.triggered !== e.type
                  ? ee.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(M) || [""]).length);
        while (l--)
          (d = g = (a = $e.exec(e[l]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            d &&
              ((f = ee.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = ee.event.special[d] || {}),
              (c = ee.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && ee.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, s)) ||
                  (t.addEventListener && t.addEventListener(d, s))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = le.hasData(e) && le.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(M) || [""]).length;
        while (l--)
          if (
            ((d = g = (a = $e.exec(t[l]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            d)
          ) {
            (f = ee.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (a =
                a[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (s = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            s &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                ee.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) ee.event.remove(e, d + t[l], n, r, !0);
        ee.isEmptyObject(u) && le.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        a = new Array(arguments.length),
        u = ee.event.fix(e),
        l = (le.get(this, "events") || Object.create(null))[u.type] || [],
        c = ee.event.special[u.type] || {};
      for (a[0] = u, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (s = ee.event.handlers.call(this, u, l)), (t = 0);
        while ((i = s[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (ee.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, a)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        s,
        a = [],
        u = t.delegateCount,
        l = e.target;
      if (u && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], s = {}, n = 0; n < u; n++)
              void 0 === s[(i = (r = t[n]).selector + " ")] &&
                (s[i] = r.needsContext
                  ? -1 < ee(i, this).index(l)
                  : ee.find(i, this, null, [l]).length),
                s[i] && o.push(r);
            o.length && a.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && a.push({ elem: l, handlers: t.slice(u) }), a
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(ee.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get:
          "function" == typeof e
            ? function () {
                if (this.originalEvent) return e(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[t];
              },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[ee.expando] ? e : new ee.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            Ie.test(t.type) && t.click && te(t, "input") && Xe(t, "click", Fe),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            Ie.test(t.type) && t.click && te(t, "input") && Xe(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (Ie.test(t.type) &&
              t.click &&
              te(t, "input") &&
              le.get(t, "click")) ||
            te(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (ee.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (ee.Event = function (e, t) {
      if (!(this instanceof ee.Event)) return new ee.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented = e.defaultPrevented ? Fe : Be),
          (this.target = e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && ee.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[ee.expando] = !0);
    }),
    (ee.Event.prototype = {
      constructor: ee.Event,
      isDefaultPrevented: Be,
      isPropagationStopped: Be,
      isImmediatePropagationStopped: Be,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Fe),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Fe),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Fe),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    ee.each(
      {
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
        code: !0,
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
        which: !0,
      },
      ee.event.addProp
    ),
    ee.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
      ee.event.special[t] = {
        setup: function () {
          return Xe(this, t, _e), !1;
        },
        trigger: function () {
          return Xe(this, t), !0;
        },
        _default: function (e) {
          return le.get(e.target, t);
        },
        delegateType: e,
      };
    }),
    ee.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        ee.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || ee.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    ee.fn.extend({
      on: function (e, t, n, r) {
        return Ue(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ue(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            ee(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Be),
          this.each(function () {
            ee.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ze = /<script|<style|<link/i;
  function Ve(e, t) {
    return (
      (te(e, "table") &&
        te(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        ee(e).children("tbody")[0]) ||
      e
    );
  }
  function Ye(e, t) {
    var n, r, i, o, s, a;
    if (1 === t.nodeType) {
      if (le.hasData(e) && (a = le.get(e).events))
        for (i in (le.remove(t, "handle events"), a))
          for (n = 0, r = a[i].length; n < r; n++) ee.event.add(t, i, a[i][n]);
      ce.hasData(e) &&
        ((o = ce.access(e)), (s = ee.extend({}, o)), ce.set(t, s));
    }
  }
  function Ge(e, t, n) {
    for (var r, i = t ? ee.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || ee.cleanData(Ne(r)),
        r.parentNode &&
          (n && De(r) && He(Ne(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  ee.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        s,
        a = e.cloneNode(!0),
        u = De(e);
      if (ie && (1 === e.nodeType || 11 === e.nodeType) && !ee.isXMLDoc(e))
        for (s = Ne(a), r = 0, i = (o = Ne(e)).length; r < i; r++)
          te(s[r], "textarea") && (s[r].defaultValue = o[r].defaultValue);
      if (t)
        if (n)
          for (o = o || Ne(e), s = s || Ne(a), r = 0, i = o.length; r < i; r++)
            Ye(o[r], s[r]);
        else Ye(e, a);
      return (
        0 < (s = Ne(a, "script")).length && He(s, !u && Ne(e, "script")), a
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = ee.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Y(n)) {
          if ((t = n[le.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? ee.event.remove(n, r) : ee.removeEvent(n, r, t.handle);
            n[le.expando] = void 0;
          }
          n[ce.expando] && (n[ce.expando] = void 0);
        }
    },
  }),
    ee.fn.extend({
      detach: function (e) {
        return Ge(this, e, !0);
      },
      remove: function (e) {
        return Ge(this, e);
      },
      text: function (e) {
        return U(
          this,
          function (e) {
            return void 0 === e
              ? ee.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return We(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Ve(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return We(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Ve(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return We(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return We(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (ee.cleanData(Ne(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ee.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return U(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ze.test(e) &&
              !qe[(Ae.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = ee.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (ee.cleanData(Ne(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return We(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            ee.inArray(this, n) < 0 &&
              (ee.cleanData(Ne(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    ee.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, s) {
        ee.fn[e] = function (e) {
          for (var t, n = [], r = ee(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              ee(r[o])[s](t),
              J.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Qe = new RegExp("^(" + he + ")(?!px)[a-z%]+$", "i"),
    Je = /^--/;
  function Ke(e) {
    var t = e.ownerDocument.defaultView;
    return t || (t = Q), t.getComputedStyle(e);
  }
  function Ze(e, t, n) {
    var r,
      i = Je.test(t);
    return (
      (n = n || Ke(e)) &&
        ((r = n.getPropertyValue(t) || n[t]),
        i && r && (r = r.replace(se, "$1") || void 0),
        "" !== r || De(e) || (r = ee.style(e, t))),
      void 0 !== r ? r + "" : r
    );
  }
  var et,
    tt,
    nt = ["Webkit", "Moz", "ms"],
    rt = C.createElement("div").style,
    it = {};
  function ot(e) {
    var t = it[e];
    return (
      t ||
      (e in rt
        ? e
        : (it[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = nt.length;
              while (n--) if ((e = nt[n] + t) in rt) return e;
            })(e) || e))
    );
  }
  (tt = C.createElement("div")).style &&
    (Z.reliableTrDimensions = function () {
      var e, t, n;
      return (
        null == et &&
          ((e = C.createElement("table")),
          (t = C.createElement("tr")),
          (e.style.cssText =
            "position:absolute;left:-11111px;border-collapse:separate"),
          (t.style.cssText = "border:1px solid"),
          (t.style.height = "1px"),
          (tt.style.height = "9px"),
          (tt.style.display = "block"),
          w.appendChild(e).appendChild(t).appendChild(tt),
          (n = Q.getComputedStyle(t)),
          (et =
            parseInt(n.height, 10) +
              parseInt(n.borderTopWidth, 10) +
              parseInt(n.borderBottomWidth, 10) ===
            t.offsetHeight),
          w.removeChild(e)),
        et
      );
    });
  var st = /^(none|table(?!-c[ea]).+)/,
    at = { position: "absolute", visibility: "hidden", display: "block" },
    ut = { letterSpacing: "0", fontWeight: "400" };
  function lt(e, t, n) {
    var r = ge.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function ct(e, t, n, r, i, o) {
    var s = "width" === t ? 1 : 0,
      a = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; s < 4; s += 2)
      "margin" === n && (u += ee.css(e, n + ve[s], !0, i)),
        r
          ? ("content" === n && (u -= ee.css(e, "padding" + ve[s], !0, i)),
            "margin" !== n &&
              (u -= ee.css(e, "border" + ve[s] + "Width", !0, i)))
          : ((u += ee.css(e, "padding" + ve[s], !0, i)),
            "padding" !== n
              ? (u += ee.css(e, "border" + ve[s] + "Width", !0, i))
              : (a += ee.css(e, "border" + ve[s] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - 0.5
            )
          ) || 0),
      u
    );
  }
  function ft(e, t, n) {
    var r = Ke(e),
      i = (ie || n) && "border-box" === ee.css(e, "boxSizing", !1, r),
      o = i,
      s = Ze(e, t, r),
      a = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Qe.test(s)) {
      if (!n) return s;
      s = "auto";
    }
    return (
      ("auto" === s ||
        (ie && i) ||
        (!Z.reliableTrDimensions() && te(e, "tr"))) &&
        e.getClientRects().length &&
        ((i = "border-box" === ee.css(e, "boxSizing", !1, r)),
        (o = a in e) && (s = e[a])),
      (s = parseFloat(s) || 0) +
        ct(e, t, n || (i ? "border" : "content"), o, r, s) +
        "px"
    );
  }
  function pt(e, t, n, r, i) {
    return new pt.prototype.init(e, t, n, r, i);
  }
  ee.extend({
    cssHooks: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          s,
          a = Ce(t),
          u = Je.test(t),
          l = e.style;
        if (
          (u || (t = ot(a)),
          (s = ee.cssHooks[t] || ee.cssHooks[a]),
          void 0 === n)
        )
          return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = ge.exec(n)) &&
          i[1] &&
          ((n = we(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" === o && (n += (i && i[3]) || (be(a) ? "px" : "")),
            ie &&
              "" === n &&
              0 === t.indexOf("background") &&
              (l[t] = "inherit"),
            (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        s,
        a = Ce(t);
      return (
        Je.test(t) || (t = ot(a)),
        (s = ee.cssHooks[t] || ee.cssHooks[a]) &&
          "get" in s &&
          (i = s.get(e, !0, n)),
        void 0 === i && (i = Ze(e, t, r)),
        "normal" === i && t in ut && (i = ut[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    ee.each(["height", "width"], function (e, a) {
      ee.cssHooks[a] = {
        get: function (e, t, n) {
          if (t)
            return !st.test(ee.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? ft(e, a, n)
              : (function (e, t, n) {
                  var r,
                    i,
                    o = {};
                  for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
                  for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
                  return r;
                })(e, at, function () {
                  return ft(e, a, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Ke(e),
            o = n && "border-box" === ee.css(e, "boxSizing", !1, i),
            s = n ? ct(e, a, n, o, i) : 0;
          return (
            s &&
              (r = ge.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[a] = t), (t = ee.css(e, a))),
            lt(0, t, s)
          );
        },
      };
    }),
    ee.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (ee.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ve[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (ee.cssHooks[i + o].set = lt);
    }),
    ee.fn.extend({
      css: function (e, t) {
        return U(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              s = 0;
            if (Array.isArray(t)) {
              for (r = Ke(e), i = t.length; s < i; s++)
                o[t[s]] = ee.css(e, t[s], !1, r);
              return o;
            }
            return void 0 !== n ? ee.style(e, t, n) : ee.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((ee.Tween = pt).prototype = {
      constructor: pt,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || ee.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (be(n) ? "px" : ""));
      },
      cur: function () {
        var e = pt.propHooks[this.prop];
        return e && e.get ? e.get(this) : pt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = pt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                ee.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : pt.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = pt.prototype),
    (pt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = ee.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          ee.fx.step[e.prop]
            ? ee.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!ee.cssHooks[e.prop] && null == e.elem.style[ot(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : ee.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (ee.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (ee.fx = pt.prototype.init),
    (ee.fx.step = {});
  var dt,
    ht,
    gt = /^(?:toggle|show|hide)$/,
    vt = /queueHooks$/;
  function yt() {
    ht &&
      (!1 === C.hidden && Q.requestAnimationFrame
        ? Q.requestAnimationFrame(yt)
        : Q.setTimeout(yt, 13),
      ee.fx.tick());
  }
  function mt() {
    return (
      Q.setTimeout(function () {
        dt = void 0;
      }),
      (dt = Date.now())
    );
  }
  function xt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ve[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function bt(e, t, n) {
    for (
      var r,
        i = (wt.tweeners[t] || []).concat(wt.tweeners["*"]),
        o = 0,
        s = i.length;
      o < s;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function wt(o, e, t) {
    var n,
      s,
      r = 0,
      i = wt.prefilters.length,
      a = ee.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (s) return !1;
        for (
          var e = dt || mt(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          a.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || a.notifyWith(o, [l, 1, 0]), a.resolveWith(o, [l]), !1)
        );
      },
      l = a.promise({
        elem: o,
        props: ee.extend({}, e),
        opts: ee.extend(
          !0,
          { specialEasing: {}, easing: ee.easing._default },
          t
        ),
        originalProperties: e,
        originalOptions: t,
        startTime: dt || mt(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ee.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (s) return this;
          for (s = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (a.notifyWith(o, [l, 1, 0]), a.resolveWith(o, [l, e]))
              : a.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, s;
        for (n in e)
          if (
            ((i = t[(r = Ce(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (s = ee.cssHooks[r]) && ("expand" in s))
          )
            for (n in ((o = s.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = wt.prefilters[r].call(l, o, c, l.opts)))
        return (
          "function" == typeof n.stop &&
            (ee._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      ee.map(c, bt, l),
      "function" == typeof l.opts.start && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      ee.fx.timer(ee.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (ee.Animation = ee.extend(wt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return we(n.elem, e, ge.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      "function" == typeof e ? ((t = e), (e = ["*"])) : (e = e.match(M));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (wt.tweeners[n] = wt.tweeners[n] || []),
          wt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ye(e),
          v = le.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (s = ee._queueHooks(e, "fx")).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a();
            })),
          s.unqueued++,
          p.always(function () {
            p.always(function () {
              s.unqueued--, ee.queue(e, "fx").length || s.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), gt.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || ee.style(e, r);
          }
        if ((u = !ee.isEmptyObject(t)) || !ee.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = le.get(e, "display")),
            "none" === (c = ee.css(e, "display")) &&
              (l
                ? (c = l)
                : (ke([e], !0),
                  (l = e.style.display || l),
                  (c = ee.css(e, "display")),
                  ke([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === ee.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = le.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && ke([e], !0),
              p.done(function () {
                for (r in (g || ke([e]), le.remove(e, "fxshow"), d))
                  ee.style(e, r, d[r]);
              })),
              (u = bt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? wt.prefilters.unshift(e) : wt.prefilters.push(e);
    },
  })),
    (ee.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? ee.extend({}, e)
          : {
              complete: n || (!n && t) || ("function" == typeof e && e),
              duration: e,
              easing: (n && t) || (t && "function" != typeof t && t),
            };
      return (
        ee.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in ee.fx.speeds
              ? (r.duration = ee.fx.speeds[r.duration])
              : (r.duration = ee.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          "function" == typeof r.old && r.old.call(this),
            r.queue && ee.dequeue(this, r.queue);
        }),
        r
      );
    }),
    ee.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ye)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = ee.isEmptyObject(t),
          o = ee.speed(e, n, r),
          s = function () {
            var e = wt(this, ee.extend({}, t), o);
            (i || le.get(this, "finish")) && e.stop(!0);
          };
        return (
          (s.finish = s),
          i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        );
      },
      stop: function (i, e, o) {
        var s = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = ee.timers,
              r = le.get(this);
            if (t) r[t] && r[t].stop && s(r[t]);
            else for (t in r) r[t] && r[t].stop && vt.test(t) && s(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || ee.dequeue(this, i);
          })
        );
      },
      finish: function (s) {
        return (
          !1 !== s && (s = s || "fx"),
          this.each(function () {
            var e,
              t = le.get(this),
              n = t[s + "queue"],
              r = t[s + "queueHooks"],
              i = ee.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                ee.queue(this, s, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === s &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    ee.each(["toggle", "show", "hide"], function (e, r) {
      var i = ee.fn[r];
      ee.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(xt(r, !0), e, t, n);
      };
    }),
    ee.each(
      {
        slideDown: xt("show"),
        slideUp: xt("hide"),
        slideToggle: xt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        ee.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (ee.timers = []),
    (ee.fx.tick = function () {
      var e,
        t = 0,
        n = ee.timers;
      for (dt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || ee.fx.stop(), (dt = void 0);
    }),
    (ee.fx.timer = function (e) {
      ee.timers.push(e), ee.fx.start();
    }),
    (ee.fx.start = function () {
      ht || ((ht = !0), yt());
    }),
    (ee.fx.stop = function () {
      ht = null;
    }),
    (ee.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ee.fn.delay = function (r, e) {
      return (
        (r = (ee.fx && ee.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = Q.setTimeout(e, r);
          t.stop = function () {
            Q.clearTimeout(n);
          };
        })
      );
    }),
    ee.fn.extend({
      attr: function (e, t) {
        return U(this, ee.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function (e) {
        return this.each(function () {
          ee.removeAttr(this, e);
        });
      },
    }),
    ee.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? ee.prop(e, t, n)
            : ((1 === o && ee.isXMLDoc(e)) ||
                (i = ee.attrHooks[t.toLowerCase()]),
              void 0 !== n
                ? null === n
                  ? void ee.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = e.getAttribute(t))
                ? void 0
                : r);
      },
      attrHooks: {},
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(M);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    ie &&
      (ee.attrHooks.type = {
        set: function (e, t) {
          if ("radio" === t && te(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        },
      }),
    ee.each(ee.expr.match.bool.source.match(/\w+/g), function (e, i) {
      ee.attrHooks[i] = {
        get: function (e) {
          var t,
            n = ee.isXMLDoc(e),
            r = i.toLowerCase();
          return n || (t = null != e.getAttribute(i) ? r : null), t;
        },
        set: function (e, t, n) {
          return !1 === t ? ee.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      };
    });
  var Tt = /^(?:input|select|textarea|button)$/i,
    Ct = /^(?:a|area)$/i;
  function jt(e) {
    return (e.match(M) || []).join(" ");
  }
  function kt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function St(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(M)) || [];
  }
  ee.fn.extend({
    prop: function (e, t) {
      return U(this, ee.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ee.propFix[e] || e];
      });
    },
  }),
    ee.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && ee.isXMLDoc(e)) ||
              ((t = ee.propFix[t] || t), (i = ee.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = e.getAttribute("tabindex");
            return t
              ? parseInt(t, 10)
              : Tt.test(e.nodeName) || (Ct.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    ie &&
      (ee.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    ee.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        ee.propFix[this.toLowerCase()] = this;
      }
    ),
    ee.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, s;
        return "function" == typeof t
          ? this.each(function (e) {
              ee(this).addClass(t.call(this, e, kt(this)));
            })
          : (e = St(t)).length
          ? this.each(function () {
              if (
                ((r = kt(this)), (n = 1 === this.nodeType && " " + jt(r) + " "))
              ) {
                for (o = 0; o < e.length; o++)
                  (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                (s = jt(n)), r !== s && this.setAttribute("class", s);
              }
            })
          : this;
      },
      removeClass: function (t) {
        var e, n, r, i, o, s;
        return "function" == typeof t
          ? this.each(function (e) {
              ee(this).removeClass(t.call(this, e, kt(this)));
            })
          : arguments.length
          ? (e = St(t)).length
            ? this.each(function () {
                if (
                  ((r = kt(this)),
                  (n = 1 === this.nodeType && " " + jt(r) + " "))
                ) {
                  for (o = 0; o < e.length; o++) {
                    i = e[o];
                    while (-1 < n.indexOf(" " + i + " "))
                      n = n.replace(" " + i + " ", " ");
                  }
                  (s = jt(n)), r !== s && this.setAttribute("class", s);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (t, n) {
        var e, r, i, o;
        return "function" == typeof t
          ? this.each(function (e) {
              ee(this).toggleClass(t.call(this, e, kt(this), n), n);
            })
          : "boolean" == typeof n
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : (e = St(t)).length
          ? this.each(function () {
              for (o = ee(this), i = 0; i < e.length; i++)
                (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
            })
          : this;
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + jt(kt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    }),
    ee.fn.extend({
      val: function (n) {
        var r,
          e,
          i,
          t = this[0];
        return arguments.length
          ? ((i = "function" == typeof n),
            this.each(function (e) {
              var t;
              1 === this.nodeType &&
                (null == (t = i ? n.call(this, e, ee(this).val()) : n)
                  ? (t = "")
                  : "number" == typeof t
                  ? (t += "")
                  : Array.isArray(t) &&
                    (t = ee.map(t, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((r =
                  ee.valHooks[this.type] ||
                  ee.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in r &&
                  void 0 !== r.set(this, t, "value")) ||
                  (this.value = t));
            }))
          : t
          ? (r =
              ee.valHooks[t.type] || ee.valHooks[t.nodeName.toLowerCase()]) &&
            "get" in r &&
            void 0 !== (e = r.get(t, "value"))
            ? e
            : null == (e = t.value)
            ? ""
            : e
          : void 0;
      },
    }),
    ee.extend({
      valHooks: {
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              u = s ? o + 1 : i.length;
            for (r = o < 0 ? u : s ? o : 0; r < u; r++)
              if (
                (n = i[r]).selected &&
                !n.disabled &&
                (!n.parentNode.disabled || !te(n.parentNode, "optgroup"))
              ) {
                if (((t = ee(n).val()), s)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = ee.makeArray(t),
              s = i.length;
            while (s--)
              ((r = i[s]).selected = -1 < ee.inArray(ee(r).val(), o)) &&
                (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    ie &&
      (ee.valHooks.option = {
        get: function (e) {
          var t = e.getAttribute("value");
          return null != t ? t : jt(ee.text(e));
        },
      }),
    ee.each(["radio", "checkbox"], function () {
      ee.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < ee.inArray(ee(e).val(), t));
        },
      };
    });
  var Et = /^(?:focusinfocus|focusoutblur)$/,
    Dt = function (e) {
      e.stopPropagation();
    };
  ee.extend(ee.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        s,
        a,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = s = n = n || C),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Et.test(d + ee.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[ee.expando]
            ? e
            : new ee.Event(d, "object" == typeof e && e)).isTrigger = r
            ? 2
            : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : ee.makeArray(t, [e])),
          (c = ee.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !m(n)) {
          for (
            a = c.delegateType || d, Et.test(a + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (s = o);
          s === (n.ownerDocument || C) &&
            p.push(s.defaultView || s.parentWindow || Q);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? a : c.bindType || d),
            (l =
              (le.get(o, "events") || Object.create(null))[e.type] &&
              le.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              Y(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !Y(n) ||
            (u &&
              "function" == typeof n[d] &&
              !m(n) &&
              ((s = n[u]) && (n[u] = null),
              (ee.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Dt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Dt),
              (ee.event.triggered = void 0),
              s && (n[u] = s))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = ee.extend(new ee.Event(), n, { type: e, isSimulated: !0 });
      ee.event.trigger(r, null, t);
    },
  }),
    ee.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ee.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return ee.event.trigger(e, t, n, !0);
      },
    });
  var At = Q.location,
    qt = { guid: Date.now() },
    Nt = /\?/;
  ee.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new Q.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        ee.error(
          "Invalid XML: " +
            (n
              ? ee
                  .map(n.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join("\n")
              : e)
        ),
      t
    );
  };
  var Ot = /\[\]$/,
    Ht = /\r?\n/g,
    Lt = /^(?:submit|button|image|reset|file)$/i,
    Pt = /^(?:input|select|textarea|keygen)/i;
  function Rt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      ee.each(e, function (e, t) {
        r || Ot.test(n)
          ? i(n, t)
          : Rt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== y(e)) i(n, e);
    else for (t in e) Rt(n + "[" + t + "]", e[t], r, i);
  }
  (ee.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = "function" == typeof t ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !ee.isPlainObject(e)))
      ee.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Rt(n, e[n], t, i);
    return r.join("&");
  }),
    ee.fn.extend({
      serialize: function () {
        return ee.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ee.prop(this, "elements");
          return e ? ee.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !ee(this).is(":disabled") &&
              Pt.test(this.nodeName) &&
              !Lt.test(e) &&
              (this.checked || !Ie.test(e))
            );
          })
          .map(function (e, t) {
            var n = ee(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? ee.map(n, function (e) {
                  return { name: t.name, value: e.replace(Ht, "\r\n") };
                })
              : { name: t.name, value: n.replace(Ht, "\r\n") };
          })
          .get();
      },
    });
  var Mt = /%20/g,
    Wt = /#.*$/,
    It = /([?&])_=[^&]*/,
    $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    Bt = /^\/\//,
    _t = {},
    Ut = {},
    Xt = "*/".concat("*"),
    zt = C.createElement("a");
  function Vt(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(M) || [];
      if ("function" == typeof t)
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Yt(t, i, o, s) {
    var a = {},
      u = t === Ut;
    function l(e) {
      var r;
      return (
        (a[e] = !0),
        ee.each(t[e] || [], function (e, t) {
          var n = t(i, o, s);
          return "string" != typeof n || u || a[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!a["*"] && l("*"));
  }
  function Gt(e, t) {
    var n,
      r,
      i = ee.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ee.extend(!0, e, r), e;
  }
  (zt.href = At.href),
    ee.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: At.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            At.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Xt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": ee.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Gt(Gt(e, ee.ajaxSettings), t) : Gt(ee.ajaxSettings, e);
      },
      ajaxPrefilter: Vt(_t),
      ajaxTransport: Vt(Ut),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = ee.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? ee(y) : ee.event,
          x = ee.Deferred(),
          b = ee.Callbacks("once memory"),
          w = v.statusCode || {},
          s = {},
          a = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = $t.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = a[e.toLowerCase()] = a[e.toLowerCase()] || e),
                  (s[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || At.href) + "").replace(
            Bt,
            At.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(M) || [""]),
          null == v.crossDomain)
        ) {
          r = C.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                zt.protocol + "//" + zt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = ee.param(v.data, v.traditional)),
          Yt(_t, v, t, T),
          h)
        )
          return T;
        for (i in ((g = ee.event && v.global) &&
          0 == ee.active++ &&
          ee.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ft.test(v.type)),
        (f = v.url.replace(Wt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Mt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Nt.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(It, "$1")),
              (o = (Nt.test(f) ? "&" : "?") + "_=" + qt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (ee.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", ee.lastModified[f]),
          ee.etag[f] && T.setRequestHeader("If-None-Match", ee.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + Xt + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Yt(Ut, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = Q.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(s, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            s,
            a,
            u,
            l = t;
          h ||
            ((h = !0),
            d && Q.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (a = (function (e, t, n) {
                var r,
                  i,
                  o,
                  s,
                  a = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in a)
                    if (a[i] && a[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    s || (s = i);
                  }
                  o = o || s;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < ee.inArray("script", v.dataTypes) &&
              ee.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (a = (function (e, t, n, r) {
              var i,
                o,
                s,
                a,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(s = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (a = i.split(" "))[1] === o &&
                          (s = l[u + " " + a[0]] || l["* " + a[0]])
                        ) {
                          !0 === s
                            ? (s = l[i])
                            : !0 !== l[i] && ((o = a[0]), c.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: s
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, a, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (ee.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (ee.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = a.state), (o = a.data), (i = !(s = a.error))))
              : ((s = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, s]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : s]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --ee.active || ee.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return ee.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return ee.get(e, void 0, t, "script");
      },
    }),
    ee.each(["get", "post"], function (e, i) {
      ee[i] = function (e, t, n, r) {
        return (
          ("function" != typeof t && null !== t) ||
            ((r = r || n), (n = t), (t = void 0)),
          ee.ajax(
            ee.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              ee.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    ee.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (ee._evalUrl = function (e, t, n) {
      return ee.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        scriptAttrs: t.crossOrigin ? { crossOrigin: t.crossOrigin } : void 0,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          ee.globalEval(e, t, n);
        },
      });
    }),
    ee.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            ("function" == typeof e && (e = e.call(this[0])),
            (t = ee(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return "function" == typeof n
          ? this.each(function (e) {
              ee(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = ee(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = "function" == typeof t;
        return this.each(function (e) {
          ee(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              ee(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (ee.expr.pseudos.hidden = function (e) {
      return !ee.expr.pseudos.visible(e);
    }),
    (ee.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (ee.ajaxSettings.xhr = function () {
      return new Q.XMLHttpRequest();
    });
  var Qt = { 0: 200 };
  function Jt(e) {
    return (
      e.crossDomain ||
      e.scriptAttrs ||
      (e.async && ee.inArray("json", e.dataTypes) < 0)
    );
  }
  ee.ajaxTransport(function (i) {
    var o;
    return {
      send: function (e, t) {
        var n,
          r = i.xhr();
        if (
          (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
        )
          for (n in i.xhrFields) r[n] = i.xhrFields[n];
        for (n in (i.mimeType &&
          r.overrideMimeType &&
          r.overrideMimeType(i.mimeType),
        i.crossDomain ||
          e["X-Requested-With"] ||
          (e["X-Requested-With"] = "XMLHttpRequest"),
        e))
          r.setRequestHeader(n, e[n]);
        (o = function (e) {
          return function () {
            o &&
              ((o = r.onload = r.onerror = r.onabort = r.ontimeout = null),
              "abort" === e
                ? r.abort()
                : "error" === e
                ? t(r.status, r.statusText)
                : t(
                    Qt[r.status] || r.status,
                    r.statusText,
                    "text" === (r.responseType || "text")
                      ? { text: r.responseText }
                      : { binary: r.response },
                    r.getAllResponseHeaders()
                  ));
          };
        }),
          (r.onload = o()),
          (r.onabort = r.onerror = r.ontimeout = o("error")),
          (o = o("abort"));
        try {
          r.send((i.hasContent && i.data) || null);
        } catch (e) {
          if (o) throw e;
        }
      },
      abort: function () {
        o && o();
      },
    };
  }),
    ee.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      converters: {
        "text script": function (e) {
          return ee.globalEval(e), e;
        },
      },
    }),
    ee.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), Jt(e) && (e.type = "GET");
    }),
    ee.ajaxTransport("script", function (n) {
      var r, i;
      if (Jt(n))
        return {
          send: function (e, t) {
            (r = ee("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              C.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ee.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Kt.pop() || ee.expando + "_" + qt.guid++;
      return (this[e] = !0), e;
    },
  }),
    ee.ajaxPrefilter("jsonp", function (e, t, n) {
      var r,
        i,
        o,
        s =
          !1 !== e.jsonp &&
          (Zt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Zt.test(e.data) &&
              "data");
      return (
        (r = e.jsonpCallback =
          "function" == typeof e.jsonpCallback
            ? e.jsonpCallback()
            : e.jsonpCallback),
        s
          ? (e[s] = e[s].replace(Zt, "$1" + r))
          : !1 !== e.jsonp &&
            (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
        (e.converters["script json"] = function () {
          return o || ee.error(r + " was not called"), o[0];
        }),
        (e.dataTypes[0] = "json"),
        (i = Q[r]),
        (Q[r] = function () {
          o = arguments;
        }),
        n.always(function () {
          void 0 === i ? ee(Q).removeProp(r) : (Q[r] = i),
            e[r] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(r)),
            o && "function" == typeof i && i(o[0]),
            (o = i = void 0);
        }),
        "script"
      );
    }),
    (ee.parseHTML = function (e, t, n) {
      return "string" == typeof e || q(e + "")
        ? ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (((r = (t = C.implementation.createHTMLDocument("")).createElement(
              "base"
            )).href = C.location.href),
            t.head.appendChild(r)),
          (o = !n && []),
          (i = A.exec(e))
            ? [t.createElement(i[1])]
            : ((i = Pe([e], t, o)),
              o && o.length && ee(o).remove(),
              ee.merge([], i.childNodes)))
        : [];
      var r, i, o;
    }),
    (ee.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        s = this,
        a = e.indexOf(" ");
      return (
        -1 < a && ((r = jt(e.slice(a))), (e = e.slice(0, a))),
        "function" == typeof t
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < s.length &&
          ee
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                s.html(r ? ee("<div>").append(ee.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (ee.expr.pseudos.animated = function (t) {
      return ee.grep(ee.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (ee.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l = ee.css(e, "position"),
          c = ee(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (a = c.offset()),
          (o = ee.css(e, "top")),
          (u = ee.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((s = (r = c.position()).top), (i = r.left))
            : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          "function" == typeof t && (t = t.call(e, n, ee.extend({}, a))),
          null != t.top && (f.top = t.top - a.top + s),
          null != t.left && (f.left = t.left - a.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    ee.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                ee.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === ee.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === ee.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = ee(e).offset()).top += ee.css(e, "borderTopWidth", !0)),
              (i.left += ee.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - ee.css(r, "marginTop", !0),
            left: t.left - i.left - ee.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === ee.css(e, "position")) e = e.offsetParent;
          return e || w;
        });
      },
    }),
    ee.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        ee.fn[t] = function (e) {
          return U(
            this,
            function (e, t, n) {
              var r;
              if (
                (m(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    ee.each({ Height: "height", Width: "width" }, function (s, a) {
      ee.each(
        { padding: "inner" + s, content: a, "": "outer" + s },
        function (r, o) {
          ee.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return U(
              this,
              function (e, t, n) {
                var r;
                return m(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + s]
                    : e.document.documentElement["client" + s]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + s],
                      r["scroll" + s],
                      e.body["offset" + s],
                      r["offset" + s],
                      r["client" + s]
                    ))
                  : void 0 === n
                  ? ee.css(e, t, i)
                  : ee.style(e, t, n, i);
              },
              a,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    ee.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        ee.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    ee.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    ee.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        ee.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    (ee.proxy = function (e, t) {
      var n, r, i;
      if (
        ("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
        "function" == typeof e)
      )
        return (
          (r = a.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(a.call(arguments)));
          }).guid = e.guid =
            e.guid || ee.guid++),
          i
        );
    }),
    (ee.holdReady = function (e) {
      e ? ee.readyWait++ : ee.ready(!0);
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ee;
      });
  var en = Q.jQuery,
    tn = Q.$;
  return (
    (ee.noConflict = function (e) {
      return (
        Q.$ === ee && (Q.$ = tn), e && Q.jQuery === ee && (Q.jQuery = en), ee
      );
    }),
    void 0 === e && (Q.jQuery = Q.$ = ee),
    ee
  );
});
