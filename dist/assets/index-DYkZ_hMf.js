(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function oo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var bu = { exports: {} },
  io = {},
  ec = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vr = Symbol.for("react.element"),
  N1 = Symbol.for("react.portal"),
  k1 = Symbol.for("react.fragment"),
  j1 = Symbol.for("react.strict_mode"),
  T1 = Symbol.for("react.profiler"),
  R1 = Symbol.for("react.provider"),
  _1 = Symbol.for("react.context"),
  O1 = Symbol.for("react.forward_ref"),
  M1 = Symbol.for("react.suspense"),
  L1 = Symbol.for("react.memo"),
  P1 = Symbol.for("react.lazy"),
  _a = Symbol.iterator;
function I1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_a && e[_a]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var tc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  nc = Object.assign,
  rc = {};
function Zn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rc),
    (this.updater = n || tc);
}
Zn.prototype.isReactComponent = {};
Zn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Zn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lc() {}
lc.prototype = Zn.prototype;
function xs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rc),
    (this.updater = n || tc);
}
var ws = (xs.prototype = new lc());
ws.constructor = xs;
nc(ws, Zn.prototype);
ws.isPureReactComponent = !0;
var Oa = Array.isArray,
  oc = Object.prototype.hasOwnProperty,
  Ss = { current: null },
  ic = { key: !0, ref: !0, __self: !0, __source: !0 };
function sc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      oc.call(t, r) && !ic.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: Vr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Ss.current,
  };
}
function z1(e, t) {
  return {
    $$typeof: Vr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Es(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vr;
}
function D1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ma = /\/+/g;
function Bo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? D1("" + e.key)
    : t.toString(36);
}
function xl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Vr:
          case N1:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Bo(i, 0) : r),
      Oa(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ma, "$&/") + "/"),
          xl(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Es(l) &&
            (l = z1(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ma, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Oa(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + Bo(o, s);
      i += xl(o, t, n, u, l);
    }
  else if (((u = I1(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Bo(o, s++)), (i += xl(o, t, n, u, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function br(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    xl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function A1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Re = { current: null },
  wl = { transition: null },
  $1 = {
    ReactCurrentDispatcher: Re,
    ReactCurrentBatchConfig: wl,
    ReactCurrentOwner: Ss,
  };
function ac() {
  throw Error("act(...) is not supported in production builds of React.");
}
D.Children = {
  map: br,
  forEach: function (e, t, n) {
    br(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      br(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      br(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Es(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
D.Component = Zn;
D.Fragment = k1;
D.Profiler = T1;
D.PureComponent = xs;
D.StrictMode = j1;
D.Suspense = M1;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $1;
D.act = ac;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = nc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Ss.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      oc.call(t, u) &&
        !ic.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: Vr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: _1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: R1, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = sc;
D.createFactory = function (e) {
  var t = sc.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: O1, render: e };
};
D.isValidElement = Es;
D.lazy = function (e) {
  return { $$typeof: P1, _payload: { _status: -1, _result: e }, _init: A1 };
};
D.memo = function (e, t) {
  return { $$typeof: L1, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = wl.transition;
  wl.transition = {};
  try {
    e();
  } finally {
    wl.transition = t;
  }
};
D.unstable_act = ac;
D.useCallback = function (e, t) {
  return Re.current.useCallback(e, t);
};
D.useContext = function (e) {
  return Re.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return Re.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return Re.current.useEffect(e, t);
};
D.useId = function () {
  return Re.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return Re.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return Re.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return Re.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return Re.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return Re.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return Re.current.useRef(e);
};
D.useState = function (e) {
  return Re.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return Re.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return Re.current.useTransition();
};
D.version = "18.3.1";
ec.exports = D;
var d = ec.exports;
const ut = oo(d);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var F1 = d,
  B1 = Symbol.for("react.element"),
  U1 = Symbol.for("react.fragment"),
  H1 = Object.prototype.hasOwnProperty,
  W1 = F1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  V1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function uc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) H1.call(t, r) && !V1.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: B1,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: W1.current,
  };
}
io.Fragment = U1;
io.jsx = uc;
io.jsxs = uc;
bu.exports = io;
var a = bu.exports,
  xi = {},
  cc = { exports: {} },
  Be = {},
  dc = { exports: {} },
  fc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, O) {
    var L = N.length;
    N.push(O);
    e: for (; 0 < L; ) {
      var A = (L - 1) >>> 1,
        W = N[A];
      if (0 < l(W, O)) (N[A] = O), (N[L] = W), (L = A);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var O = N[0],
      L = N.pop();
    if (L !== O) {
      N[0] = L;
      e: for (var A = 0, W = N.length, b = W >>> 1; A < b; ) {
        var $ = 2 * (A + 1) - 1,
          ye = N[$],
          K = $ + 1,
          Ge = N[K];
        if (0 > l(ye, L))
          K < W && 0 > l(Ge, ye)
            ? ((N[A] = Ge), (N[K] = L), (A = K))
            : ((N[A] = ye), (N[$] = L), (A = $));
        else if (K < W && 0 > l(Ge, L)) (N[A] = Ge), (N[K] = L), (A = K);
        else break e;
      }
    }
    return O;
  }
  function l(N, O) {
    var L = N.sortIndex - O.sortIndex;
    return L !== 0 ? L : N.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var u = [],
    c = [],
    p = 1,
    g = null,
    h = 3,
    x = !1,
    w = !1,
    S = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(N) {
    for (var O = n(c); O !== null; ) {
      if (O.callback === null) r(c);
      else if (O.startTime <= N)
        r(c), (O.sortIndex = O.expirationTime), t(u, O);
      else break;
      O = n(c);
    }
  }
  function y(N) {
    if (((S = !1), v(N), !w))
      if (n(u) !== null) (w = !0), ue(k);
      else {
        var O = n(c);
        O !== null && J(y, O.startTime - N);
      }
  }
  function k(N, O) {
    (w = !1), S && ((S = !1), m(T), (T = -1)), (x = !0);
    var L = h;
    try {
      for (
        v(O), g = n(u);
        g !== null && (!(g.expirationTime > O) || (N && !oe()));

      ) {
        var A = g.callback;
        if (typeof A == "function") {
          (g.callback = null), (h = g.priorityLevel);
          var W = A(g.expirationTime <= O);
          (O = e.unstable_now()),
            typeof W == "function" ? (g.callback = W) : g === n(u) && r(u),
            v(O);
        } else r(u);
        g = n(u);
      }
      if (g !== null) var b = !0;
      else {
        var $ = n(c);
        $ !== null && J(y, $.startTime - O), (b = !1);
      }
      return b;
    } finally {
      (g = null), (h = L), (x = !1);
    }
  }
  var E = !1,
    j = null,
    T = -1,
    H = 5,
    P = -1;
  function oe() {
    return !(e.unstable_now() - P < H);
  }
  function Ce() {
    if (j !== null) {
      var N = e.unstable_now();
      P = N;
      var O = !0;
      try {
        O = j(!0, N);
      } finally {
        O ? pe() : ((E = !1), (j = null));
      }
    } else E = !1;
  }
  var pe;
  if (typeof f == "function")
    pe = function () {
      f(Ce);
    };
  else if (typeof MessageChannel < "u") {
    var He = new MessageChannel(),
      Ye = He.port2;
    (He.port1.onmessage = Ce),
      (pe = function () {
        Ye.postMessage(null);
      });
  } else
    pe = function () {
      _(Ce, 0);
    };
  function ue(N) {
    (j = N), E || ((E = !0), pe());
  }
  function J(N, O) {
    T = _(function () {
      N(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), ue(k));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (N) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = h;
      }
      var L = h;
      h = O;
      try {
        return N();
      } finally {
        h = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, O) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var L = h;
      h = N;
      try {
        return O();
      } finally {
        h = L;
      }
    }),
    (e.unstable_scheduleCallback = function (N, O, L) {
      var A = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? A + L : A))
          : (L = A),
        N)
      ) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return (
        (W = L + W),
        (N = {
          id: p++,
          callback: O,
          priorityLevel: N,
          startTime: L,
          expirationTime: W,
          sortIndex: -1,
        }),
        L > A
          ? ((N.sortIndex = L),
            t(c, N),
            n(u) === null &&
              N === n(c) &&
              (S ? (m(T), (T = -1)) : (S = !0), J(y, L - A)))
          : ((N.sortIndex = W), t(u, N), w || x || ((w = !0), ue(k))),
        N
      );
    }),
    (e.unstable_shouldYield = oe),
    (e.unstable_wrapCallback = function (N) {
      var O = h;
      return function () {
        var L = h;
        h = O;
        try {
          return N.apply(this, arguments);
        } finally {
          h = L;
        }
      };
    });
})(fc);
dc.exports = fc;
var K1 = dc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Q1 = d,
  Fe = K1;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var pc = new Set(),
  jr = {};
function xn(e, t) {
  Vn(e, t), Vn(e + "Capture", t);
}
function Vn(e, t) {
  for (jr[e] = t, e = 0; e < t.length; e++) pc.add(t[e]);
}
var Nt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wi = Object.prototype.hasOwnProperty,
  q1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  La = {},
  Pa = {};
function X1(e) {
  return wi.call(Pa, e)
    ? !0
    : wi.call(La, e)
    ? !1
    : q1.test(e)
    ? (Pa[e] = !0)
    : ((La[e] = !0), !1);
}
function Y1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function G1(e, t, n, r) {
  if (t === null || typeof t > "u" || Y1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function _e(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new _e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ge[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ge[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ge[e] = new _e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ge[e] = new _e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ge[e] = new _e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ge[e] = new _e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ge[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cs = /[\-:]([a-z])/g;
function Ns(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cs, Ns);
    ge[t] = new _e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cs, Ns);
    ge[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Cs, Ns);
  ge[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ge[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new _e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ge[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ks(e, t, n, r) {
  var l = ge.hasOwnProperty(t) ? ge[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (G1(t, n, l, r) && (n = null),
    r || l === null
      ? X1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Rt = Q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  el = Symbol.for("react.element"),
  kn = Symbol.for("react.portal"),
  jn = Symbol.for("react.fragment"),
  js = Symbol.for("react.strict_mode"),
  Si = Symbol.for("react.profiler"),
  mc = Symbol.for("react.provider"),
  hc = Symbol.for("react.context"),
  Ts = Symbol.for("react.forward_ref"),
  Ei = Symbol.for("react.suspense"),
  Ci = Symbol.for("react.suspense_list"),
  Rs = Symbol.for("react.memo"),
  Dt = Symbol.for("react.lazy"),
  vc = Symbol.for("react.offscreen"),
  Ia = Symbol.iterator;
function rr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ia && e[Ia]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ne = Object.assign,
  Uo;
function fr(e) {
  if (Uo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Uo = (t && t[1]) || "";
    }
  return (
    `
` +
    Uo +
    e
  );
}
var Ho = !1;
function Wo(e, t) {
  if (!e || Ho) return "";
  Ho = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          s = o.length - 1;
        1 <= i && 0 <= s && l[i] !== o[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || l[i] !== o[s])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (Ho = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? fr(e) : "";
}
function Z1(e) {
  switch (e.tag) {
    case 5:
      return fr(e.type);
    case 16:
      return fr("Lazy");
    case 13:
      return fr("Suspense");
    case 19:
      return fr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wo(e.type, !1)), e;
    case 11:
      return (e = Wo(e.type.render, !1)), e;
    case 1:
      return (e = Wo(e.type, !0)), e;
    default:
      return "";
  }
}
function Ni(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case jn:
      return "Fragment";
    case kn:
      return "Portal";
    case Si:
      return "Profiler";
    case js:
      return "StrictMode";
    case Ei:
      return "Suspense";
    case Ci:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case hc:
        return (e.displayName || "Context") + ".Consumer";
      case mc:
        return (e._context.displayName || "Context") + ".Provider";
      case Ts:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Rs:
        return (
          (t = e.displayName || null), t !== null ? t : Ni(e.type) || "Memo"
        );
      case Dt:
        (t = e._payload), (e = e._init);
        try {
          return Ni(e(t));
        } catch {}
    }
  return null;
}
function J1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ni(t);
    case 8:
      return t === js ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Zt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function gc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function b1(e) {
  var t = gc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function tl(e) {
  e._valueTracker || (e._valueTracker = b1(e));
}
function yc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = gc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ll(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ki(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function za(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function xc(e, t) {
  (t = t.checked), t != null && ks(e, "checked", t, !1);
}
function ji(e, t) {
  xc(e, t);
  var n = Zt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ti(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ti(e, t.type, Zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Da(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ti(e, t, n) {
  (t !== "number" || Ll(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var pr = Array.isArray;
function $n(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Zt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ri(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Aa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (pr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Zt(n) };
}
function wc(e, t) {
  var n = Zt(t.value),
    r = Zt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function $a(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _i(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Sc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var nl,
  Ec = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        nl = nl || document.createElement("div"),
          nl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = nl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Tr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var gr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  e0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(gr).forEach(function (e) {
  e0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (gr[t] = gr[e]);
  });
});
function Cc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (gr.hasOwnProperty(e) && gr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Nc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Cc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var t0 = ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Oi(e, t) {
  if (t) {
    if (t0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Mi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Li = null;
function _s(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Pi = null,
  Fn = null,
  Bn = null;
function Fa(e) {
  if ((e = qr(e))) {
    if (typeof Pi != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = fo(t)), Pi(e.stateNode, e.type, t));
  }
}
function kc(e) {
  Fn ? (Bn ? Bn.push(e) : (Bn = [e])) : (Fn = e);
}
function jc() {
  if (Fn) {
    var e = Fn,
      t = Bn;
    if (((Bn = Fn = null), Fa(e), t)) for (e = 0; e < t.length; e++) Fa(t[e]);
  }
}
function Tc(e, t) {
  return e(t);
}
function Rc() {}
var Vo = !1;
function _c(e, t, n) {
  if (Vo) return e(t, n);
  Vo = !0;
  try {
    return Tc(e, t, n);
  } finally {
    (Vo = !1), (Fn !== null || Bn !== null) && (Rc(), jc());
  }
}
function Rr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = fo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Ii = !1;
if (Nt)
  try {
    var lr = {};
    Object.defineProperty(lr, "passive", {
      get: function () {
        Ii = !0;
      },
    }),
      window.addEventListener("test", lr, lr),
      window.removeEventListener("test", lr, lr);
  } catch {
    Ii = !1;
  }
function n0(e, t, n, r, l, o, i, s, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var yr = !1,
  Pl = null,
  Il = !1,
  zi = null,
  r0 = {
    onError: function (e) {
      (yr = !0), (Pl = e);
    },
  };
function l0(e, t, n, r, l, o, i, s, u) {
  (yr = !1), (Pl = null), n0.apply(r0, arguments);
}
function o0(e, t, n, r, l, o, i, s, u) {
  if ((l0.apply(this, arguments), yr)) {
    if (yr) {
      var c = Pl;
      (yr = !1), (Pl = null);
    } else throw Error(C(198));
    Il || ((Il = !0), (zi = c));
  }
}
function wn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Oc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ba(e) {
  if (wn(e) !== e) throw Error(C(188));
}
function i0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = wn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ba(l), e;
        if (o === r) return Ba(l), t;
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (s === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (s === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Mc(e) {
  return (e = i0(e)), e !== null ? Lc(e) : null;
}
function Lc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Lc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Pc = Fe.unstable_scheduleCallback,
  Ua = Fe.unstable_cancelCallback,
  s0 = Fe.unstable_shouldYield,
  a0 = Fe.unstable_requestPaint,
  le = Fe.unstable_now,
  u0 = Fe.unstable_getCurrentPriorityLevel,
  Os = Fe.unstable_ImmediatePriority,
  Ic = Fe.unstable_UserBlockingPriority,
  zl = Fe.unstable_NormalPriority,
  c0 = Fe.unstable_LowPriority,
  zc = Fe.unstable_IdlePriority,
  so = null,
  ct = null;
function d0(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(so, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var rt = Math.clz32 ? Math.clz32 : m0,
  f0 = Math.log,
  p0 = Math.LN2;
function m0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((f0(e) / p0) | 0)) | 0;
}
var rl = 64,
  ll = 4194304;
function mr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Dl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = mr(s)) : ((o &= i), o !== 0 && (r = mr(o)));
  } else (i = n & ~l), i !== 0 ? (r = mr(i)) : o !== 0 && (r = mr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - rt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function h0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function v0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - rt(o),
      s = 1 << i,
      u = l[i];
    u === -1
      ? (!(s & n) || s & r) && (l[i] = h0(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Di(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Dc() {
  var e = rl;
  return (rl <<= 1), !(rl & 4194240) && (rl = 64), e;
}
function Ko(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Kr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rt(t)),
    (e[t] = n);
}
function g0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - rt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Ms(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - rt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var V = 0;
function Ac(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var $c,
  Ls,
  Fc,
  Bc,
  Uc,
  Ai = !1,
  ol = [],
  Wt = null,
  Vt = null,
  Kt = null,
  _r = new Map(),
  Or = new Map(),
  Ft = [],
  y0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ha(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wt = null;
      break;
    case "dragenter":
    case "dragleave":
      Vt = null;
      break;
    case "mouseover":
    case "mouseout":
      Kt = null;
      break;
    case "pointerover":
    case "pointerout":
      _r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Or.delete(t.pointerId);
  }
}
function or(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = qr(t)), t !== null && Ls(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function x0(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Wt = or(Wt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Vt = or(Vt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Kt = or(Kt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return _r.set(o, or(_r.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Or.set(o, or(Or.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Hc(e) {
  var t = un(e.target);
  if (t !== null) {
    var n = wn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Oc(n)), t !== null)) {
          (e.blockedOn = t),
            Uc(e.priority, function () {
              Fc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Sl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Li = r), n.target.dispatchEvent(r), (Li = null);
    } else return (t = qr(n)), t !== null && Ls(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Wa(e, t, n) {
  Sl(e) && n.delete(t);
}
function w0() {
  (Ai = !1),
    Wt !== null && Sl(Wt) && (Wt = null),
    Vt !== null && Sl(Vt) && (Vt = null),
    Kt !== null && Sl(Kt) && (Kt = null),
    _r.forEach(Wa),
    Or.forEach(Wa);
}
function ir(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ai ||
      ((Ai = !0),
      Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, w0)));
}
function Mr(e) {
  function t(l) {
    return ir(l, e);
  }
  if (0 < ol.length) {
    ir(ol[0], e);
    for (var n = 1; n < ol.length; n++) {
      var r = ol[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wt !== null && ir(Wt, e),
      Vt !== null && ir(Vt, e),
      Kt !== null && ir(Kt, e),
      _r.forEach(t),
      Or.forEach(t),
      n = 0;
    n < Ft.length;
    n++
  )
    (r = Ft[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ft.length && ((n = Ft[0]), n.blockedOn === null); )
    Hc(n), n.blockedOn === null && Ft.shift();
}
var Un = Rt.ReactCurrentBatchConfig,
  Al = !0;
function S0(e, t, n, r) {
  var l = V,
    o = Un.transition;
  Un.transition = null;
  try {
    (V = 1), Ps(e, t, n, r);
  } finally {
    (V = l), (Un.transition = o);
  }
}
function E0(e, t, n, r) {
  var l = V,
    o = Un.transition;
  Un.transition = null;
  try {
    (V = 4), Ps(e, t, n, r);
  } finally {
    (V = l), (Un.transition = o);
  }
}
function Ps(e, t, n, r) {
  if (Al) {
    var l = $i(e, t, n, r);
    if (l === null) ti(e, t, r, $l, n), Ha(e, r);
    else if (x0(l, e, t, n, r)) r.stopPropagation();
    else if ((Ha(e, r), t & 4 && -1 < y0.indexOf(e))) {
      for (; l !== null; ) {
        var o = qr(l);
        if (
          (o !== null && $c(o),
          (o = $i(e, t, n, r)),
          o === null && ti(e, t, r, $l, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ti(e, t, r, null, n);
  }
}
var $l = null;
function $i(e, t, n, r) {
  if ((($l = null), (e = _s(r)), (e = un(e)), e !== null))
    if (((t = wn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Oc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ($l = e), null;
}
function Wc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (u0()) {
        case Os:
          return 1;
        case Ic:
          return 4;
        case zl:
        case c0:
          return 16;
        case zc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ut = null,
  Is = null,
  El = null;
function Vc() {
  if (El) return El;
  var e,
    t = Is,
    n = t.length,
    r,
    l = "value" in Ut ? Ut.value : Ut.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (El = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Cl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function il() {
  return !0;
}
function Va() {
  return !1;
}
function Ue(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? il
        : Va),
      (this.isPropagationStopped = Va),
      this
    );
  }
  return (
    ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = il));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = il));
      },
      persist: function () {},
      isPersistent: il,
    }),
    t
  );
}
var Jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  zs = Ue(Jn),
  Qr = ne({}, Jn, { view: 0, detail: 0 }),
  C0 = Ue(Qr),
  Qo,
  qo,
  sr,
  ao = ne({}, Qr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ds,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== sr &&
            (sr && e.type === "mousemove"
              ? ((Qo = e.screenX - sr.screenX), (qo = e.screenY - sr.screenY))
              : (qo = Qo = 0),
            (sr = e)),
          Qo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : qo;
    },
  }),
  Ka = Ue(ao),
  N0 = ne({}, ao, { dataTransfer: 0 }),
  k0 = Ue(N0),
  j0 = ne({}, Qr, { relatedTarget: 0 }),
  Xo = Ue(j0),
  T0 = ne({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  R0 = Ue(T0),
  _0 = ne({}, Jn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  O0 = Ue(_0),
  M0 = ne({}, Jn, { data: 0 }),
  Qa = Ue(M0),
  L0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  P0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  I0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function z0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = I0[e]) ? !!t[e] : !1;
}
function Ds() {
  return z0;
}
var D0 = ne({}, Qr, {
    key: function (e) {
      if (e.key) {
        var t = L0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Cl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? P0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ds,
    charCode: function (e) {
      return e.type === "keypress" ? Cl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Cl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  A0 = Ue(D0),
  $0 = ne({}, ao, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qa = Ue($0),
  F0 = ne({}, Qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ds,
  }),
  B0 = Ue(F0),
  U0 = ne({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  H0 = Ue(U0),
  W0 = ne({}, ao, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  V0 = Ue(W0),
  K0 = [9, 13, 27, 32],
  As = Nt && "CompositionEvent" in window,
  xr = null;
Nt && "documentMode" in document && (xr = document.documentMode);
var Q0 = Nt && "TextEvent" in window && !xr,
  Kc = Nt && (!As || (xr && 8 < xr && 11 >= xr)),
  Xa = " ",
  Ya = !1;
function Qc(e, t) {
  switch (e) {
    case "keyup":
      return K0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function qc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Tn = !1;
function q0(e, t) {
  switch (e) {
    case "compositionend":
      return qc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ya = !0), Xa);
    case "textInput":
      return (e = t.data), e === Xa && Ya ? null : e;
    default:
      return null;
  }
}
function X0(e, t) {
  if (Tn)
    return e === "compositionend" || (!As && Qc(e, t))
      ? ((e = Vc()), (El = Is = Ut = null), (Tn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Kc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Y0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ga(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Y0[e.type] : t === "textarea";
}
function Xc(e, t, n, r) {
  kc(r),
    (t = Fl(t, "onChange")),
    0 < t.length &&
      ((n = new zs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var wr = null,
  Lr = null;
function G0(e) {
  od(e, 0);
}
function uo(e) {
  var t = On(e);
  if (yc(t)) return e;
}
function Z0(e, t) {
  if (e === "change") return t;
}
var Yc = !1;
if (Nt) {
  var Yo;
  if (Nt) {
    var Go = "oninput" in document;
    if (!Go) {
      var Za = document.createElement("div");
      Za.setAttribute("oninput", "return;"),
        (Go = typeof Za.oninput == "function");
    }
    Yo = Go;
  } else Yo = !1;
  Yc = Yo && (!document.documentMode || 9 < document.documentMode);
}
function Ja() {
  wr && (wr.detachEvent("onpropertychange", Gc), (Lr = wr = null));
}
function Gc(e) {
  if (e.propertyName === "value" && uo(Lr)) {
    var t = [];
    Xc(t, Lr, e, _s(e)), _c(G0, t);
  }
}
function J0(e, t, n) {
  e === "focusin"
    ? (Ja(), (wr = t), (Lr = n), wr.attachEvent("onpropertychange", Gc))
    : e === "focusout" && Ja();
}
function b0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return uo(Lr);
}
function ep(e, t) {
  if (e === "click") return uo(t);
}
function tp(e, t) {
  if (e === "input" || e === "change") return uo(t);
}
function np(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ot = typeof Object.is == "function" ? Object.is : np;
function Pr(e, t) {
  if (ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!wi.call(t, l) || !ot(e[l], t[l])) return !1;
  }
  return !0;
}
function ba(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function eu(e, t) {
  var n = ba(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ba(n);
  }
}
function Zc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Zc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Jc() {
  for (var e = window, t = Ll(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ll(e.document);
  }
  return t;
}
function $s(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function rp(e) {
  var t = Jc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Zc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && $s(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = eu(n, o));
        var i = eu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var lp = Nt && "documentMode" in document && 11 >= document.documentMode,
  Rn = null,
  Fi = null,
  Sr = null,
  Bi = !1;
function tu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bi ||
    Rn == null ||
    Rn !== Ll(r) ||
    ((r = Rn),
    "selectionStart" in r && $s(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Sr && Pr(Sr, r)) ||
      ((Sr = r),
      (r = Fl(Fi, "onSelect")),
      0 < r.length &&
        ((t = new zs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Rn))));
}
function sl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var _n = {
    animationend: sl("Animation", "AnimationEnd"),
    animationiteration: sl("Animation", "AnimationIteration"),
    animationstart: sl("Animation", "AnimationStart"),
    transitionend: sl("Transition", "TransitionEnd"),
  },
  Zo = {},
  bc = {};
Nt &&
  ((bc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete _n.animationend.animation,
    delete _n.animationiteration.animation,
    delete _n.animationstart.animation),
  "TransitionEvent" in window || delete _n.transitionend.transition);
function co(e) {
  if (Zo[e]) return Zo[e];
  if (!_n[e]) return e;
  var t = _n[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in bc) return (Zo[e] = t[n]);
  return e;
}
var ed = co("animationend"),
  td = co("animationiteration"),
  nd = co("animationstart"),
  rd = co("transitionend"),
  ld = new Map(),
  nu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function en(e, t) {
  ld.set(e, t), xn(t, [e]);
}
for (var Jo = 0; Jo < nu.length; Jo++) {
  var bo = nu[Jo],
    op = bo.toLowerCase(),
    ip = bo[0].toUpperCase() + bo.slice(1);
  en(op, "on" + ip);
}
en(ed, "onAnimationEnd");
en(td, "onAnimationIteration");
en(nd, "onAnimationStart");
en("dblclick", "onDoubleClick");
en("focusin", "onFocus");
en("focusout", "onBlur");
en(rd, "onTransitionEnd");
Vn("onMouseEnter", ["mouseout", "mouseover"]);
Vn("onMouseLeave", ["mouseout", "mouseover"]);
Vn("onPointerEnter", ["pointerout", "pointerover"]);
Vn("onPointerLeave", ["pointerout", "pointerover"]);
xn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
xn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
xn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
xn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
xn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
xn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var hr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  sp = new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));
function ru(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), o0(r, t, void 0, e), (e.currentTarget = null);
}
function od(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), u !== o && l.isPropagationStopped())) break e;
          ru(l, s, c), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          ru(l, s, c), (o = u);
        }
    }
  }
  if (Il) throw ((e = zi), (Il = !1), (zi = null), e);
}
function Y(e, t) {
  var n = t[Ki];
  n === void 0 && (n = t[Ki] = new Set());
  var r = e + "__bubble";
  n.has(r) || (id(t, e, 2, !1), n.add(r));
}
function ei(e, t, n) {
  var r = 0;
  t && (r |= 4), id(n, e, r, t);
}
var al = "_reactListening" + Math.random().toString(36).slice(2);
function Ir(e) {
  if (!e[al]) {
    (e[al] = !0),
      pc.forEach(function (n) {
        n !== "selectionchange" && (sp.has(n) || ei(n, !1, e), ei(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[al] || ((t[al] = !0), ei("selectionchange", !1, t));
  }
}
function id(e, t, n, r) {
  switch (Wc(t)) {
    case 1:
      var l = S0;
      break;
    case 4:
      l = E0;
      break;
    default:
      l = Ps;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ii ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ti(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = un(s)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  _c(function () {
    var c = o,
      p = _s(n),
      g = [];
    e: {
      var h = ld.get(e);
      if (h !== void 0) {
        var x = zs,
          w = e;
        switch (e) {
          case "keypress":
            if (Cl(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = A0;
            break;
          case "focusin":
            (w = "focus"), (x = Xo);
            break;
          case "focusout":
            (w = "blur"), (x = Xo);
            break;
          case "beforeblur":
          case "afterblur":
            x = Xo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Ka;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = k0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = B0;
            break;
          case ed:
          case td:
          case nd:
            x = R0;
            break;
          case rd:
            x = H0;
            break;
          case "scroll":
            x = C0;
            break;
          case "wheel":
            x = V0;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = O0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = qa;
        }
        var S = (t & 4) !== 0,
          _ = !S && e === "scroll",
          m = S ? (h !== null ? h + "Capture" : null) : h;
        S = [];
        for (var f = c, v; f !== null; ) {
          v = f;
          var y = v.stateNode;
          if (
            (v.tag === 5 &&
              y !== null &&
              ((v = y),
              m !== null && ((y = Rr(f, m)), y != null && S.push(zr(f, y, v)))),
            _)
          )
            break;
          f = f.return;
        }
        0 < S.length &&
          ((h = new x(h, w, null, n, p)), g.push({ event: h, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Li &&
            (w = n.relatedTarget || n.fromElement) &&
            (un(w) || w[kt]))
        )
          break e;
        if (
          (x || h) &&
          ((h =
            p.window === p
              ? p
              : (h = p.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = c),
              (w = w ? un(w) : null),
              w !== null &&
                ((_ = wn(w)), w !== _ || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = c)),
          x !== w)
        ) {
          if (
            ((S = Ka),
            (y = "onMouseLeave"),
            (m = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = qa),
              (y = "onPointerLeave"),
              (m = "onPointerEnter"),
              (f = "pointer")),
            (_ = x == null ? h : On(x)),
            (v = w == null ? h : On(w)),
            (h = new S(y, f + "leave", x, n, p)),
            (h.target = _),
            (h.relatedTarget = v),
            (y = null),
            un(p) === c &&
              ((S = new S(m, f + "enter", w, n, p)),
              (S.target = v),
              (S.relatedTarget = _),
              (y = S)),
            (_ = y),
            x && w)
          )
            t: {
              for (S = x, m = w, f = 0, v = S; v; v = En(v)) f++;
              for (v = 0, y = m; y; y = En(y)) v++;
              for (; 0 < f - v; ) (S = En(S)), f--;
              for (; 0 < v - f; ) (m = En(m)), v--;
              for (; f--; ) {
                if (S === m || (m !== null && S === m.alternate)) break t;
                (S = En(S)), (m = En(m));
              }
              S = null;
            }
          else S = null;
          x !== null && lu(g, h, x, S, !1),
            w !== null && _ !== null && lu(g, _, w, S, !0);
        }
      }
      e: {
        if (
          ((h = c ? On(c) : window),
          (x = h.nodeName && h.nodeName.toLowerCase()),
          x === "select" || (x === "input" && h.type === "file"))
        )
          var k = Z0;
        else if (Ga(h))
          if (Yc) k = tp;
          else {
            k = b0;
            var E = J0;
          }
        else
          (x = h.nodeName) &&
            x.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = ep);
        if (k && (k = k(e, c))) {
          Xc(g, k, n, p);
          break e;
        }
        E && E(e, h, c),
          e === "focusout" &&
            (E = h._wrapperState) &&
            E.controlled &&
            h.type === "number" &&
            Ti(h, "number", h.value);
      }
      switch (((E = c ? On(c) : window), e)) {
        case "focusin":
          (Ga(E) || E.contentEditable === "true") &&
            ((Rn = E), (Fi = c), (Sr = null));
          break;
        case "focusout":
          Sr = Fi = Rn = null;
          break;
        case "mousedown":
          Bi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Bi = !1), tu(g, n, p);
          break;
        case "selectionchange":
          if (lp) break;
        case "keydown":
        case "keyup":
          tu(g, n, p);
      }
      var j;
      if (As)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Tn
          ? Qc(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Kc &&
          n.locale !== "ko" &&
          (Tn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Tn && (j = Vc())
            : ((Ut = p),
              (Is = "value" in Ut ? Ut.value : Ut.textContent),
              (Tn = !0))),
        (E = Fl(c, T)),
        0 < E.length &&
          ((T = new Qa(T, e, null, n, p)),
          g.push({ event: T, listeners: E }),
          j ? (T.data = j) : ((j = qc(n)), j !== null && (T.data = j)))),
        (j = Q0 ? q0(e, n) : X0(e, n)) &&
          ((c = Fl(c, "onBeforeInput")),
          0 < c.length &&
            ((p = new Qa("onBeforeInput", "beforeinput", null, n, p)),
            g.push({ event: p, listeners: c }),
            (p.data = j)));
    }
    od(g, t);
  });
}
function zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Fl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Rr(e, n)),
      o != null && r.unshift(zr(e, o, l)),
      (o = Rr(e, t)),
      o != null && r.push(zr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function En(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function lu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      c = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      l
        ? ((u = Rr(n, o)), u != null && i.unshift(zr(n, u, s)))
        : l || ((u = Rr(n, o)), u != null && i.push(zr(n, u, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var ap = /\r\n?/g,
  up = /\u0000|\uFFFD/g;
function ou(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ap,
      `
`
    )
    .replace(up, "");
}
function ul(e, t, n) {
  if (((t = ou(t)), ou(e) !== t && n)) throw Error(C(425));
}
function Bl() {}
var Ui = null,
  Hi = null;
function Wi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Vi = typeof setTimeout == "function" ? setTimeout : void 0,
  cp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  iu = typeof Promise == "function" ? Promise : void 0,
  dp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof iu < "u"
      ? function (e) {
          return iu.resolve(null).then(e).catch(fp);
        }
      : Vi;
function fp(e) {
  setTimeout(function () {
    throw e;
  });
}
function ni(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Mr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Mr(t);
}
function Qt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function su(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var bn = Math.random().toString(36).slice(2),
  at = "__reactFiber$" + bn,
  Dr = "__reactProps$" + bn,
  kt = "__reactContainer$" + bn,
  Ki = "__reactEvents$" + bn,
  pp = "__reactListeners$" + bn,
  mp = "__reactHandles$" + bn;
function un(e) {
  var t = e[at];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[kt] || n[at])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = su(e); e !== null; ) {
          if ((n = e[at])) return n;
          e = su(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qr(e) {
  return (
    (e = e[at] || e[kt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function On(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function fo(e) {
  return e[Dr] || null;
}
var Qi = [],
  Mn = -1;
function tn(e) {
  return { current: e };
}
function G(e) {
  0 > Mn || ((e.current = Qi[Mn]), (Qi[Mn] = null), Mn--);
}
function q(e, t) {
  Mn++, (Qi[Mn] = e.current), (e.current = t);
}
var Jt = {},
  Ee = tn(Jt),
  Pe = tn(!1),
  mn = Jt;
function Kn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ie(e) {
  return (e = e.childContextTypes), e != null;
}
function Ul() {
  G(Pe), G(Ee);
}
function au(e, t, n) {
  if (Ee.current !== Jt) throw Error(C(168));
  q(Ee, t), q(Pe, n);
}
function sd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(C(108, J1(e) || "Unknown", l));
  return ne({}, n, r);
}
function Hl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jt),
    (mn = Ee.current),
    q(Ee, e),
    q(Pe, Pe.current),
    !0
  );
}
function uu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = sd(e, t, mn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      G(Pe),
      G(Ee),
      q(Ee, e))
    : G(Pe),
    q(Pe, n);
}
var gt = null,
  po = !1,
  ri = !1;
function ad(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
function hp(e) {
  (po = !0), ad(e);
}
function nn() {
  if (!ri && gt !== null) {
    ri = !0;
    var e = 0,
      t = V;
    try {
      var n = gt;
      for (V = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (gt = null), (po = !1);
    } catch (l) {
      throw (gt !== null && (gt = gt.slice(e + 1)), Pc(Os, nn), l);
    } finally {
      (V = t), (ri = !1);
    }
  }
  return null;
}
var Ln = [],
  Pn = 0,
  Wl = null,
  Vl = 0,
  We = [],
  Ve = 0,
  hn = null,
  wt = 1,
  St = "";
function on(e, t) {
  (Ln[Pn++] = Vl), (Ln[Pn++] = Wl), (Wl = e), (Vl = t);
}
function ud(e, t, n) {
  (We[Ve++] = wt), (We[Ve++] = St), (We[Ve++] = hn), (hn = e);
  var r = wt;
  e = St;
  var l = 32 - rt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - rt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (wt = (1 << (32 - rt(t) + l)) | (n << l) | r),
      (St = o + e);
  } else (wt = (1 << o) | (n << l) | r), (St = e);
}
function Fs(e) {
  e.return !== null && (on(e, 1), ud(e, 1, 0));
}
function Bs(e) {
  for (; e === Wl; )
    (Wl = Ln[--Pn]), (Ln[Pn] = null), (Vl = Ln[--Pn]), (Ln[Pn] = null);
  for (; e === hn; )
    (hn = We[--Ve]),
      (We[Ve] = null),
      (St = We[--Ve]),
      (We[Ve] = null),
      (wt = We[--Ve]),
      (We[Ve] = null);
}
var $e = null,
  Ae = null,
  Z = !1,
  tt = null;
function cd(e, t) {
  var n = Ke(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function cu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), ($e = e), (Ae = Qt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), ($e = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = hn !== null ? { id: wt, overflow: St } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ke(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            ($e = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function qi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xi(e) {
  if (Z) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!cu(e, t)) {
        if (qi(e)) throw Error(C(418));
        t = Qt(n.nextSibling);
        var r = $e;
        t && cu(e, t)
          ? cd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), ($e = e));
      }
    } else {
      if (qi(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), ($e = e);
    }
  }
}
function du(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  $e = e;
}
function cl(e) {
  if (e !== $e) return !1;
  if (!Z) return du(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Wi(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (qi(e)) throw (dd(), Error(C(418)));
    for (; t; ) cd(e, t), (t = Qt(t.nextSibling));
  }
  if ((du(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Qt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = $e ? Qt(e.stateNode.nextSibling) : null;
  return !0;
}
function dd() {
  for (var e = Ae; e; ) e = Qt(e.nextSibling);
}
function Qn() {
  (Ae = $e = null), (Z = !1);
}
function Us(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
var vp = Rt.ReactCurrentBatchConfig;
function ar(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var s = l.refs;
            i === null ? delete s[o] : (s[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function dl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function fu(e) {
  var t = e._init;
  return t(e._payload);
}
function fd(e) {
  function t(m, f) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [f]), (m.flags |= 16)) : v.push(f);
    }
  }
  function n(m, f) {
    if (!e) return null;
    for (; f !== null; ) t(m, f), (f = f.sibling);
    return null;
  }
  function r(m, f) {
    for (m = new Map(); f !== null; )
      f.key !== null ? m.set(f.key, f) : m.set(f.index, f), (f = f.sibling);
    return m;
  }
  function l(m, f) {
    return (m = Gt(m, f)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, f, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < f ? ((m.flags |= 2), f) : v)
            : ((m.flags |= 2), f))
        : ((m.flags |= 1048576), f)
    );
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, f, v, y) {
    return f === null || f.tag !== 6
      ? ((f = ci(v, m.mode, y)), (f.return = m), f)
      : ((f = l(f, v)), (f.return = m), f);
  }
  function u(m, f, v, y) {
    var k = v.type;
    return k === jn
      ? p(m, f, v.props.children, y, v.key)
      : f !== null &&
        (f.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Dt &&
            fu(k) === f.type))
      ? ((y = l(f, v.props)), (y.ref = ar(m, f, v)), (y.return = m), y)
      : ((y = Ol(v.type, v.key, v.props, null, m.mode, y)),
        (y.ref = ar(m, f, v)),
        (y.return = m),
        y);
  }
  function c(m, f, v, y) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = di(v, m.mode, y)), (f.return = m), f)
      : ((f = l(f, v.children || [])), (f.return = m), f);
  }
  function p(m, f, v, y, k) {
    return f === null || f.tag !== 7
      ? ((f = pn(v, m.mode, y, k)), (f.return = m), f)
      : ((f = l(f, v)), (f.return = m), f);
  }
  function g(m, f, v) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = ci("" + f, m.mode, v)), (f.return = m), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case el:
          return (
            (v = Ol(f.type, f.key, f.props, null, m.mode, v)),
            (v.ref = ar(m, null, f)),
            (v.return = m),
            v
          );
        case kn:
          return (f = di(f, m.mode, v)), (f.return = m), f;
        case Dt:
          var y = f._init;
          return g(m, y(f._payload), v);
      }
      if (pr(f) || rr(f))
        return (f = pn(f, m.mode, v, null)), (f.return = m), f;
      dl(m, f);
    }
    return null;
  }
  function h(m, f, v, y) {
    var k = f !== null ? f.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return k !== null ? null : s(m, f, "" + v, y);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case el:
          return v.key === k ? u(m, f, v, y) : null;
        case kn:
          return v.key === k ? c(m, f, v, y) : null;
        case Dt:
          return (k = v._init), h(m, f, k(v._payload), y);
      }
      if (pr(v) || rr(v)) return k !== null ? null : p(m, f, v, y, null);
      dl(m, v);
    }
    return null;
  }
  function x(m, f, v, y, k) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (m = m.get(v) || null), s(f, m, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case el:
          return (m = m.get(y.key === null ? v : y.key) || null), u(f, m, y, k);
        case kn:
          return (m = m.get(y.key === null ? v : y.key) || null), c(f, m, y, k);
        case Dt:
          var E = y._init;
          return x(m, f, v, E(y._payload), k);
      }
      if (pr(y) || rr(y)) return (m = m.get(v) || null), p(f, m, y, k, null);
      dl(f, y);
    }
    return null;
  }
  function w(m, f, v, y) {
    for (
      var k = null, E = null, j = f, T = (f = 0), H = null;
      j !== null && T < v.length;
      T++
    ) {
      j.index > T ? ((H = j), (j = null)) : (H = j.sibling);
      var P = h(m, j, v[T], y);
      if (P === null) {
        j === null && (j = H);
        break;
      }
      e && j && P.alternate === null && t(m, j),
        (f = o(P, f, T)),
        E === null ? (k = P) : (E.sibling = P),
        (E = P),
        (j = H);
    }
    if (T === v.length) return n(m, j), Z && on(m, T), k;
    if (j === null) {
      for (; T < v.length; T++)
        (j = g(m, v[T], y)),
          j !== null &&
            ((f = o(j, f, T)), E === null ? (k = j) : (E.sibling = j), (E = j));
      return Z && on(m, T), k;
    }
    for (j = r(m, j); T < v.length; T++)
      (H = x(j, m, T, v[T], y)),
        H !== null &&
          (e && H.alternate !== null && j.delete(H.key === null ? T : H.key),
          (f = o(H, f, T)),
          E === null ? (k = H) : (E.sibling = H),
          (E = H));
    return (
      e &&
        j.forEach(function (oe) {
          return t(m, oe);
        }),
      Z && on(m, T),
      k
    );
  }
  function S(m, f, v, y) {
    var k = rr(v);
    if (typeof k != "function") throw Error(C(150));
    if (((v = k.call(v)), v == null)) throw Error(C(151));
    for (
      var E = (k = null), j = f, T = (f = 0), H = null, P = v.next();
      j !== null && !P.done;
      T++, P = v.next()
    ) {
      j.index > T ? ((H = j), (j = null)) : (H = j.sibling);
      var oe = h(m, j, P.value, y);
      if (oe === null) {
        j === null && (j = H);
        break;
      }
      e && j && oe.alternate === null && t(m, j),
        (f = o(oe, f, T)),
        E === null ? (k = oe) : (E.sibling = oe),
        (E = oe),
        (j = H);
    }
    if (P.done) return n(m, j), Z && on(m, T), k;
    if (j === null) {
      for (; !P.done; T++, P = v.next())
        (P = g(m, P.value, y)),
          P !== null &&
            ((f = o(P, f, T)), E === null ? (k = P) : (E.sibling = P), (E = P));
      return Z && on(m, T), k;
    }
    for (j = r(m, j); !P.done; T++, P = v.next())
      (P = x(j, m, T, P.value, y)),
        P !== null &&
          (e && P.alternate !== null && j.delete(P.key === null ? T : P.key),
          (f = o(P, f, T)),
          E === null ? (k = P) : (E.sibling = P),
          (E = P));
    return (
      e &&
        j.forEach(function (Ce) {
          return t(m, Ce);
        }),
      Z && on(m, T),
      k
    );
  }
  function _(m, f, v, y) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === jn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case el:
          e: {
            for (var k = v.key, E = f; E !== null; ) {
              if (E.key === k) {
                if (((k = v.type), k === jn)) {
                  if (E.tag === 7) {
                    n(m, E.sibling),
                      (f = l(E, v.props.children)),
                      (f.return = m),
                      (m = f);
                    break e;
                  }
                } else if (
                  E.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Dt &&
                    fu(k) === E.type)
                ) {
                  n(m, E.sibling),
                    (f = l(E, v.props)),
                    (f.ref = ar(m, E, v)),
                    (f.return = m),
                    (m = f);
                  break e;
                }
                n(m, E);
                break;
              } else t(m, E);
              E = E.sibling;
            }
            v.type === jn
              ? ((f = pn(v.props.children, m.mode, y, v.key)),
                (f.return = m),
                (m = f))
              : ((y = Ol(v.type, v.key, v.props, null, m.mode, y)),
                (y.ref = ar(m, f, v)),
                (y.return = m),
                (m = y));
          }
          return i(m);
        case kn:
          e: {
            for (E = v.key; f !== null; ) {
              if (f.key === E)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  n(m, f.sibling),
                    (f = l(f, v.children || [])),
                    (f.return = m),
                    (m = f);
                  break e;
                } else {
                  n(m, f);
                  break;
                }
              else t(m, f);
              f = f.sibling;
            }
            (f = di(v, m.mode, y)), (f.return = m), (m = f);
          }
          return i(m);
        case Dt:
          return (E = v._init), _(m, f, E(v._payload), y);
      }
      if (pr(v)) return w(m, f, v, y);
      if (rr(v)) return S(m, f, v, y);
      dl(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        f !== null && f.tag === 6
          ? (n(m, f.sibling), (f = l(f, v)), (f.return = m), (m = f))
          : (n(m, f), (f = ci(v, m.mode, y)), (f.return = m), (m = f)),
        i(m))
      : n(m, f);
  }
  return _;
}
var qn = fd(!0),
  pd = fd(!1),
  Kl = tn(null),
  Ql = null,
  In = null,
  Hs = null;
function Ws() {
  Hs = In = Ql = null;
}
function Vs(e) {
  var t = Kl.current;
  G(Kl), (e._currentValue = t);
}
function Yi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Hn(e, t) {
  (Ql = e),
    (Hs = In = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Me = !0), (e.firstContext = null));
}
function qe(e) {
  var t = e._currentValue;
  if (Hs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), In === null)) {
      if (Ql === null) throw Error(C(308));
      (In = e), (Ql.dependencies = { lanes: 0, firstContext: e });
    } else In = In.next = e;
  return t;
}
var cn = null;
function Ks(e) {
  cn === null ? (cn = [e]) : cn.push(e);
}
function md(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ks(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    jt(e, r)
  );
}
function jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function Qs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function hd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Et(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      jt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ks(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    jt(e, n)
  );
}
function Nl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ms(e, n);
  }
}
function pu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ql(e, t, n, r) {
  var l = e.updateQueue;
  At = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      c = u.next;
    (u.next = null), i === null ? (o = c) : (i.next = c), (i = u);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (s = p.lastBaseUpdate),
      s !== i &&
        (s === null ? (p.firstBaseUpdate = c) : (s.next = c),
        (p.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var g = l.baseState;
    (i = 0), (p = c = u = null), (s = o);
    do {
      var h = s.lane,
        x = s.eventTime;
      if ((r & h) === h) {
        p !== null &&
          (p = p.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            S = s;
          switch (((h = t), (x = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                g = w.call(x, g, h);
                break e;
              }
              g = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (h = typeof w == "function" ? w.call(x, g, h) : w),
                h == null)
              )
                break e;
              g = ne({}, g, h);
              break e;
            case 2:
              At = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [s]) : h.push(s));
      } else
        (x = {
          eventTime: x,
          lane: h,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          p === null ? ((c = p = x), (u = g)) : (p = p.next = x),
          (i |= h);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (h = s),
          (s = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (u = g),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (gn |= i), (e.lanes = i), (e.memoizedState = g);
  }
}
function mu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(C(191, l));
        l.call(r);
      }
    }
}
var Xr = {},
  dt = tn(Xr),
  Ar = tn(Xr),
  $r = tn(Xr);
function dn(e) {
  if (e === Xr) throw Error(C(174));
  return e;
}
function qs(e, t) {
  switch ((q($r, t), q(Ar, e), q(dt, Xr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _i(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _i(t, e));
  }
  G(dt), q(dt, t);
}
function Xn() {
  G(dt), G(Ar), G($r);
}
function vd(e) {
  dn($r.current);
  var t = dn(dt.current),
    n = _i(t, e.type);
  t !== n && (q(Ar, e), q(dt, n));
}
function Xs(e) {
  Ar.current === e && (G(dt), G(Ar));
}
var ee = tn(0);
function Xl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var li = [];
function Ys() {
  for (var e = 0; e < li.length; e++)
    li[e]._workInProgressVersionPrimary = null;
  li.length = 0;
}
var kl = Rt.ReactCurrentDispatcher,
  oi = Rt.ReactCurrentBatchConfig,
  vn = 0,
  te = null,
  se = null,
  ce = null,
  Yl = !1,
  Er = !1,
  Fr = 0,
  gp = 0;
function xe() {
  throw Error(C(321));
}
function Gs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ot(e[n], t[n])) return !1;
  return !0;
}
function Zs(e, t, n, r, l, o) {
  if (
    ((vn = o),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (kl.current = e === null || e.memoizedState === null ? Sp : Ep),
    (e = n(r, l)),
    Er)
  ) {
    o = 0;
    do {
      if (((Er = !1), (Fr = 0), 25 <= o)) throw Error(C(301));
      (o += 1),
        (ce = se = null),
        (t.updateQueue = null),
        (kl.current = Cp),
        (e = n(r, l));
    } while (Er);
  }
  if (
    ((kl.current = Gl),
    (t = se !== null && se.next !== null),
    (vn = 0),
    (ce = se = te = null),
    (Yl = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Js() {
  var e = Fr !== 0;
  return (Fr = 0), e;
}
function st() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ce === null ? (te.memoizedState = ce = e) : (ce = ce.next = e), ce;
}
function Xe() {
  if (se === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = ce === null ? te.memoizedState : ce.next;
  if (t !== null) (ce = t), (se = e);
  else {
    if (e === null) throw Error(C(310));
    (se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      ce === null ? (te.memoizedState = ce = e) : (ce = ce.next = e);
  }
  return ce;
}
function Br(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ii(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = se,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var s = (i = null),
      u = null,
      c = o;
    do {
      var p = c.lane;
      if ((vn & p) === p)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var g = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((s = u = g), (i = r)) : (u = u.next = g),
          (te.lanes |= p),
          (gn |= p);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (i = r) : (u.next = s),
      ot(r, t.memoizedState) || (Me = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (te.lanes |= o), (gn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function si(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    ot(o, t.memoizedState) || (Me = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function gd() {}
function yd(e, t) {
  var n = te,
    r = Xe(),
    l = t(),
    o = !ot(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Me = !0)),
    (r = r.queue),
    bs(Sd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ce !== null && ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ur(9, wd.bind(null, n, r, l, t), void 0, null),
      fe === null)
    )
      throw Error(C(349));
    vn & 30 || xd(n, t, l);
  }
  return l;
}
function xd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function wd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ed(t) && Cd(e);
}
function Sd(e, t, n) {
  return n(function () {
    Ed(t) && Cd(e);
  });
}
function Ed(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function Cd(e) {
  var t = jt(e, 1);
  t !== null && lt(t, e, 1, -1);
}
function hu(e) {
  var t = st();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Br,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = wp.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function Ur(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Nd() {
  return Xe().memoizedState;
}
function jl(e, t, n, r) {
  var l = st();
  (te.flags |= e),
    (l.memoizedState = Ur(1 | t, n, void 0, r === void 0 ? null : r));
}
function mo(e, t, n, r) {
  var l = Xe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (se !== null) {
    var i = se.memoizedState;
    if (((o = i.destroy), r !== null && Gs(r, i.deps))) {
      l.memoizedState = Ur(t, n, o, r);
      return;
    }
  }
  (te.flags |= e), (l.memoizedState = Ur(1 | t, n, o, r));
}
function vu(e, t) {
  return jl(8390656, 8, e, t);
}
function bs(e, t) {
  return mo(2048, 8, e, t);
}
function kd(e, t) {
  return mo(4, 2, e, t);
}
function jd(e, t) {
  return mo(4, 4, e, t);
}
function Td(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Rd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), mo(4, 4, Td.bind(null, t, e), n)
  );
}
function ea() {}
function _d(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Od(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Md(e, t, n) {
  return vn & 21
    ? (ot(n, t) || ((n = Dc()), (te.lanes |= n), (gn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n));
}
function yp(e, t) {
  var n = V;
  (V = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = oi.transition;
  oi.transition = {};
  try {
    e(!1), t();
  } finally {
    (V = n), (oi.transition = r);
  }
}
function Ld() {
  return Xe().memoizedState;
}
function xp(e, t, n) {
  var r = Yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Pd(e))
  )
    Id(t, n);
  else if (((n = md(e, t, n, r)), n !== null)) {
    var l = Te();
    lt(n, e, r, l), zd(n, t, r);
  }
}
function wp(e, t, n) {
  var r = Yt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Pd(e)) Id(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), ot(s, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Ks(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = md(e, t, l, r)),
      n !== null && ((l = Te()), lt(n, e, r, l), zd(n, t, r));
  }
}
function Pd(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function Id(e, t) {
  Er = Yl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function zd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ms(e, n);
  }
}
var Gl = {
    readContext: qe,
    useCallback: xe,
    useContext: xe,
    useEffect: xe,
    useImperativeHandle: xe,
    useInsertionEffect: xe,
    useLayoutEffect: xe,
    useMemo: xe,
    useReducer: xe,
    useRef: xe,
    useState: xe,
    useDebugValue: xe,
    useDeferredValue: xe,
    useTransition: xe,
    useMutableSource: xe,
    useSyncExternalStore: xe,
    useId: xe,
    unstable_isNewReconciler: !1,
  },
  Sp = {
    readContext: qe,
    useCallback: function (e, t) {
      return (st().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: qe,
    useEffect: vu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        jl(4194308, 4, Td.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return jl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return jl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = st();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = st();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = xp.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = st();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: hu,
    useDebugValue: ea,
    useDeferredValue: function (e) {
      return (st().memoizedState = e);
    },
    useTransition: function () {
      var e = hu(!1),
        t = e[0];
      return (e = yp.bind(null, e[1])), (st().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        l = st();
      if (Z) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), fe === null)) throw Error(C(349));
        vn & 30 || xd(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        vu(Sd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ur(9, wd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = st(),
        t = fe.identifierPrefix;
      if (Z) {
        var n = St,
          r = wt;
        (n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Fr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = gp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ep = {
    readContext: qe,
    useCallback: _d,
    useContext: qe,
    useEffect: bs,
    useImperativeHandle: Rd,
    useInsertionEffect: kd,
    useLayoutEffect: jd,
    useMemo: Od,
    useReducer: ii,
    useRef: Nd,
    useState: function () {
      return ii(Br);
    },
    useDebugValue: ea,
    useDeferredValue: function (e) {
      var t = Xe();
      return Md(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = ii(Br)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: gd,
    useSyncExternalStore: yd,
    useId: Ld,
    unstable_isNewReconciler: !1,
  },
  Cp = {
    readContext: qe,
    useCallback: _d,
    useContext: qe,
    useEffect: bs,
    useImperativeHandle: Rd,
    useInsertionEffect: kd,
    useLayoutEffect: jd,
    useMemo: Od,
    useReducer: si,
    useRef: Nd,
    useState: function () {
      return si(Br);
    },
    useDebugValue: ea,
    useDeferredValue: function (e) {
      var t = Xe();
      return se === null ? (t.memoizedState = e) : Md(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = si(Br)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: gd,
    useSyncExternalStore: yd,
    useId: Ld,
    unstable_isNewReconciler: !1,
  };
function be(e, t) {
  if (e && e.defaultProps) {
    (t = ne({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Gi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ho = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? wn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      l = Yt(e),
      o = Et(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = qt(e, o, l)),
      t !== null && (lt(t, e, l, r), Nl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      l = Yt(e),
      o = Et(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = qt(e, o, l)),
      t !== null && (lt(t, e, l, r), Nl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Te(),
      r = Yt(e),
      l = Et(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = qt(e, l, r)),
      t !== null && (lt(t, e, r, n), Nl(t, e, r));
  },
};
function gu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Pr(n, r) || !Pr(l, o)
      : !0
  );
}
function Dd(e, t, n) {
  var r = !1,
    l = Jt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = qe(o))
      : ((l = Ie(t) ? mn : Ee.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Kn(e, l) : Jt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ho),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function yu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ho.enqueueReplaceState(t, t.state, null);
}
function Zi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Qs(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = qe(o))
    : ((o = Ie(t) ? mn : Ee.current), (l.context = Kn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Gi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && ho.enqueueReplaceState(l, l.state, null),
      ql(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Yn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Z1(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ai(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ji(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Np = typeof WeakMap == "function" ? WeakMap : Map;
function Ad(e, t, n) {
  (n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Jl || ((Jl = !0), (as = r)), Ji(e, t);
    }),
    n
  );
}
function $d(e, t, n) {
  (n = Et(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ji(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ji(e, t),
          typeof r != "function" &&
            (Xt === null ? (Xt = new Set([this])) : Xt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function xu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Np();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = $p.bind(null, e, t, n)), t.then(e, e));
}
function wu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Su(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Et(-1, 1)), (t.tag = 2), qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var kp = Rt.ReactCurrentOwner,
  Me = !1;
function ke(e, t, n, r) {
  t.child = e === null ? pd(t, null, n, r) : qn(t, e.child, n, r);
}
function Eu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Hn(t, l),
    (r = Zs(e, t, n, r, o, l)),
    (n = Js()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Tt(e, t, l))
      : (Z && n && Fs(t), (t.flags |= 1), ke(e, t, r, l), t.child)
  );
}
function Cu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !aa(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Fd(e, t, o, r, l))
      : ((e = Ol(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Pr), n(i, r) && e.ref === t.ref)
    )
      return Tt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Gt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Fd(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Pr(o, r) && e.ref === t.ref)
      if (((Me = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Me = !0);
      else return (t.lanes = e.lanes), Tt(e, t, l);
  }
  return bi(e, t, n, r, l);
}
function Bd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(Dn, De),
        (De |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          q(Dn, De),
          (De |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        q(Dn, De),
        (De |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      q(Dn, De),
      (De |= r);
  return ke(e, t, l, n), t.child;
}
function Ud(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function bi(e, t, n, r, l) {
  var o = Ie(n) ? mn : Ee.current;
  return (
    (o = Kn(t, o)),
    Hn(t, l),
    (n = Zs(e, t, n, r, o, l)),
    (r = Js()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Tt(e, t, l))
      : (Z && r && Fs(t), (t.flags |= 1), ke(e, t, n, l), t.child)
  );
}
function Nu(e, t, n, r, l) {
  if (Ie(n)) {
    var o = !0;
    Hl(t);
  } else o = !1;
  if ((Hn(t, l), t.stateNode === null))
    Tl(e, t), Dd(t, n, r), Zi(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = qe(c))
      : ((c = Ie(n) ? mn : Ee.current), (c = Kn(t, c)));
    var p = n.getDerivedStateFromProps,
      g =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || u !== c) && yu(t, i, r, c)),
      (At = !1);
    var h = t.memoizedState;
    (i.state = h),
      ql(t, r, i, l),
      (u = t.memoizedState),
      s !== r || h !== u || Pe.current || At
        ? (typeof p == "function" && (Gi(t, n, p, r), (u = t.memoizedState)),
          (s = At || gu(t, n, s, r, h, u, c))
            ? (g ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = c),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      hd(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : be(t.type, s)),
      (i.props = c),
      (g = t.pendingProps),
      (h = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = qe(u))
        : ((u = Ie(n) ? mn : Ee.current), (u = Kn(t, u)));
    var x = n.getDerivedStateFromProps;
    (p =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== g || h !== u) && yu(t, i, r, u)),
      (At = !1),
      (h = t.memoizedState),
      (i.state = h),
      ql(t, r, i, l);
    var w = t.memoizedState;
    s !== g || h !== w || Pe.current || At
      ? (typeof x == "function" && (Gi(t, n, x, r), (w = t.memoizedState)),
        (c = At || gu(t, n, c, r, h, w, u) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return es(e, t, n, r, o, l);
}
function es(e, t, n, r, l, o) {
  Ud(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && uu(t, n, !1), Tt(e, t, o);
  (r = t.stateNode), (kp.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = qn(t, e.child, null, o)), (t.child = qn(t, null, s, o)))
      : ke(e, t, s, o),
    (t.memoizedState = r.state),
    l && uu(t, n, !0),
    t.child
  );
}
function Hd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? au(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && au(e, t.context, !1),
    qs(e, t.containerInfo);
}
function ku(e, t, n, r, l) {
  return Qn(), Us(l), (t.flags |= 256), ke(e, t, n, r), t.child;
}
var ts = { dehydrated: null, treeContext: null, retryLane: 0 };
function ns(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wd(e, t, n) {
  var r = t.pendingProps,
    l = ee.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    q(ee, l & 1),
    e === null)
  )
    return (
      Xi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = yo(i, r, 0, null)),
              (e = pn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ns(n)),
              (t.memoizedState = ts),
              e)
            : ta(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return jp(e, t, i, r, s, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Gt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = Gt(s, o)) : ((o = pn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ns(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ts),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Gt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ta(e, t) {
  return (
    (t = yo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function fl(e, t, n, r) {
  return (
    r !== null && Us(r),
    qn(t, e.child, null, n),
    (e = ta(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function jp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ai(Error(C(422)))), fl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = yo({ mode: "visible", children: r.children }, l, 0, null)),
        (o = pn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && qn(t, e.child, null, i),
        (t.child.memoizedState = ns(i)),
        (t.memoizedState = ts),
        o);
  if (!(t.mode & 1)) return fl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(C(419))), (r = ai(o, r, void 0)), fl(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), Me || s)) {
    if (((r = fe), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), jt(e, l), lt(r, e, l, -1));
    }
    return sa(), (r = ai(Error(C(421)))), fl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Fp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ae = Qt(l.nextSibling)),
      ($e = t),
      (Z = !0),
      (tt = null),
      e !== null &&
        ((We[Ve++] = wt),
        (We[Ve++] = St),
        (We[Ve++] = hn),
        (wt = e.id),
        (St = e.overflow),
        (hn = t)),
      (t = ta(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ju(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Yi(e.return, t, n);
}
function ui(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Vd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ke(e, t, r.children, n), (r = ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ju(e, n, t);
        else if (e.tag === 19) ju(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((q(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Xl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ui(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Xl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ui(t, !0, n, null, o);
        break;
      case "together":
        ui(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Tl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Tt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (gn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Gt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Tp(e, t, n) {
  switch (t.tag) {
    case 3:
      Hd(t), Qn();
      break;
    case 5:
      vd(t);
      break;
    case 1:
      Ie(t.type) && Hl(t);
      break;
    case 4:
      qs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      q(Kl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (q(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Wd(e, t, n)
          : (q(ee, ee.current & 1),
            (e = Tt(e, t, n)),
            e !== null ? e.sibling : null);
      q(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Vd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        q(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Bd(e, t, n);
  }
  return Tt(e, t, n);
}
var Kd, rs, Qd, qd;
Kd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
rs = function () {};
Qd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), dn(dt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = ki(e, l)), (r = ki(e, r)), (o = []);
        break;
      case "select":
        (l = ne({}, l, { value: void 0 })),
          (r = ne({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Ri(e, l)), (r = Ri(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Bl);
    }
    Oi(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var s = l[c];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (jr.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((s = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== s && (u != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (jr.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && Y("scroll", e),
                  o || s === u || (o = []))
                : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
qd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ur(e, t) {
  if (!Z)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function we(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Rp(e, t, n) {
  var r = t.pendingProps;
  switch ((Bs(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return we(t), null;
    case 1:
      return Ie(t.type) && Ul(), we(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Xn(),
        G(Pe),
        G(Ee),
        Ys(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (cl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tt !== null && (ds(tt), (tt = null)))),
        rs(e, t),
        we(t),
        null
      );
    case 5:
      Xs(t);
      var l = dn($r.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Qd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return we(t), null;
        }
        if (((e = dn(dt.current)), cl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[at] = t), (r[Dr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < hr.length; l++) Y(hr[l], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y("error", r), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              za(r, o), Y("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Y("invalid", r);
              break;
            case "textarea":
              Aa(r, o), Y("invalid", r);
          }
          Oi(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      ul(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      ul(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : jr.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  Y("scroll", r);
            }
          switch (n) {
            case "input":
              tl(r), Da(r, o, !0);
              break;
            case "textarea":
              tl(r), $a(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Bl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Sc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[at] = t),
            (e[Dr] = r),
            Kd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Mi(n, r)), n)) {
              case "dialog":
                Y("cancel", e), Y("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < hr.length; l++) Y(hr[l], e);
                l = r;
                break;
              case "source":
                Y("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                Y("error", e), Y("load", e), (l = r);
                break;
              case "details":
                Y("toggle", e), (l = r);
                break;
              case "input":
                za(e, r), (l = ki(e, r)), Y("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ne({}, r, { value: void 0 })),
                  Y("invalid", e);
                break;
              case "textarea":
                Aa(e, r), (l = Ri(e, r)), Y("invalid", e);
                break;
              default:
                l = r;
            }
            Oi(n, l), (s = l);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style"
                  ? Nc(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Ec(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Tr(e, u)
                    : typeof u == "number" && Tr(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (jr.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && Y("scroll", e)
                      : u != null && ks(e, o, u, i));
              }
            switch (n) {
              case "input":
                tl(e), Da(e, r, !1);
                break;
              case "textarea":
                tl(e), $a(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? $n(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      $n(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Bl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return we(t), null;
    case 6:
      if (e && t.stateNode != null) qd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = dn($r.current)), dn(dt.current), cl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[at] = t),
            (o = r.nodeValue !== n) && ((e = $e), e !== null))
          )
            switch (e.tag) {
              case 3:
                ul(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ul(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[at] = t),
            (t.stateNode = r);
      }
      return we(t), null;
    case 13:
      if (
        (G(ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && Ae !== null && t.mode & 1 && !(t.flags & 128))
          dd(), Qn(), (t.flags |= 98560), (o = !1);
        else if (((o = cl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(C(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(C(317));
            o[at] = t;
          } else
            Qn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          we(t), (o = !1);
        } else tt !== null && (ds(tt), (tt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ee.current & 1 ? ae === 0 && (ae = 3) : sa())),
          t.updateQueue !== null && (t.flags |= 4),
          we(t),
          null);
    case 4:
      return (
        Xn(), rs(e, t), e === null && Ir(t.stateNode.containerInfo), we(t), null
      );
    case 10:
      return Vs(t.type._context), we(t), null;
    case 17:
      return Ie(t.type) && Ul(), we(t), null;
    case 19:
      if ((G(ee), (o = t.memoizedState), o === null)) return we(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) ur(o, !1);
        else {
          if (ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Xl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    ur(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return q(ee, (ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            le() > Gn &&
            ((t.flags |= 128), (r = !0), ur(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Xl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ur(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !Z)
            )
              return we(t), null;
          } else
            2 * le() - o.renderingStartTime > Gn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ur(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = le()),
          (t.sibling = null),
          (n = ee.current),
          q(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (we(t), null);
    case 22:
    case 23:
      return (
        ia(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? De & 1073741824 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : we(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function _p(e, t) {
  switch ((Bs(t), t.tag)) {
    case 1:
      return (
        Ie(t.type) && Ul(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Xn(),
        G(Pe),
        G(Ee),
        Ys(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Xs(t), null;
    case 13:
      if ((G(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Qn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return G(ee), null;
    case 4:
      return Xn(), null;
    case 10:
      return Vs(t.type._context), null;
    case 22:
    case 23:
      return ia(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var pl = !1,
  Se = !1,
  Op = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function zn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        re(e, t, r);
      }
    else n.current = null;
}
function ls(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var Tu = !1;
function Mp(e, t) {
  if (((Ui = Al), (e = Jc()), $s(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            u = -1,
            c = 0,
            p = 0,
            g = e,
            h = null;
          t: for (;;) {
            for (
              var x;
              g !== n || (l !== 0 && g.nodeType !== 3) || (s = i + l),
                g !== o || (r !== 0 && g.nodeType !== 3) || (u = i + r),
                g.nodeType === 3 && (i += g.nodeValue.length),
                (x = g.firstChild) !== null;

            )
              (h = g), (g = x);
            for (;;) {
              if (g === e) break t;
              if (
                (h === n && ++c === l && (s = i),
                h === o && ++p === r && (u = i),
                (x = g.nextSibling) !== null)
              )
                break;
              (g = h), (h = g.parentNode);
            }
            g = x;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Hi = { focusedElem: e, selectionRange: n }, Al = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    _ = w.memoizedState,
                    m = t.stateNode,
                    f = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : be(t.type, S),
                      _
                    );
                  m.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (y) {
          re(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (w = Tu), (Tu = !1), w;
}
function Cr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ls(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function vo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function os(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Xd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Xd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[at], delete t[Dr], delete t[Ki], delete t[pp], delete t[mp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Yd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ru(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Yd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function is(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Bl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (is(e, t, n), e = e.sibling; e !== null; ) is(e, t, n), (e = e.sibling);
}
function ss(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ss(e, t, n), e = e.sibling; e !== null; ) ss(e, t, n), (e = e.sibling);
}
var he = null,
  et = !1;
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) Gd(e, t, n), (n = n.sibling);
}
function Gd(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(so, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Se || zn(n, t);
    case 6:
      var r = he,
        l = et;
      (he = null),
        Lt(e, t, n),
        (he = r),
        (et = l),
        he !== null &&
          (et
            ? ((e = he),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : he.removeChild(n.stateNode));
      break;
    case 18:
      he !== null &&
        (et
          ? ((e = he),
            (n = n.stateNode),
            e.nodeType === 8
              ? ni(e.parentNode, n)
              : e.nodeType === 1 && ni(e, n),
            Mr(e))
          : ni(he, n.stateNode));
      break;
    case 4:
      (r = he),
        (l = et),
        (he = n.stateNode.containerInfo),
        (et = !0),
        Lt(e, t, n),
        (he = r),
        (et = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ls(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Lt(e, t, n);
      break;
    case 1:
      if (
        !Se &&
        (zn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          re(n, t, s);
        }
      Lt(e, t, n);
      break;
    case 21:
      Lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Se = (r = Se) || n.memoizedState !== null), Lt(e, t, n), (Se = r))
        : Lt(e, t, n);
      break;
    default:
      Lt(e, t, n);
  }
}
function _u(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Op()),
      t.forEach(function (r) {
        var l = Bp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Je(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (he = s.stateNode), (et = !1);
              break e;
            case 3:
              (he = s.stateNode.containerInfo), (et = !0);
              break e;
            case 4:
              (he = s.stateNode.containerInfo), (et = !0);
              break e;
          }
          s = s.return;
        }
        if (he === null) throw Error(C(160));
        Gd(o, i, l), (he = null), (et = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        re(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Zd(t, e), (t = t.sibling);
}
function Zd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Je(t, e), it(e), r & 4)) {
        try {
          Cr(3, e, e.return), vo(3, e);
        } catch (S) {
          re(e, e.return, S);
        }
        try {
          Cr(5, e, e.return);
        } catch (S) {
          re(e, e.return, S);
        }
      }
      break;
    case 1:
      Je(t, e), it(e), r & 512 && n !== null && zn(n, n.return);
      break;
    case 5:
      if (
        (Je(t, e),
        it(e),
        r & 512 && n !== null && zn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Tr(l, "");
        } catch (S) {
          re(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && xc(l, o),
              Mi(s, i);
            var c = Mi(s, o);
            for (i = 0; i < u.length; i += 2) {
              var p = u[i],
                g = u[i + 1];
              p === "style"
                ? Nc(l, g)
                : p === "dangerouslySetInnerHTML"
                ? Ec(l, g)
                : p === "children"
                ? Tr(l, g)
                : ks(l, p, g, c);
            }
            switch (s) {
              case "input":
                ji(l, o);
                break;
              case "textarea":
                wc(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? $n(l, !!o.multiple, x, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? $n(l, !!o.multiple, o.defaultValue, !0)
                      : $n(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Dr] = o;
          } catch (S) {
            re(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Je(t, e), it(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          re(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Je(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Mr(t.containerInfo);
        } catch (S) {
          re(e, e.return, S);
        }
      break;
    case 4:
      Je(t, e), it(e);
      break;
    case 13:
      Je(t, e),
        it(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (la = le())),
        r & 4 && _u(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Se = (c = Se) || p), Je(t, e), (Se = c)) : Je(t, e),
        it(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !p && e.mode & 1)
        )
          for (R = e, p = e.child; p !== null; ) {
            for (g = R = p; R !== null; ) {
              switch (((h = R), (x = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Cr(4, h, h.return);
                  break;
                case 1:
                  zn(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      re(r, n, S);
                    }
                  }
                  break;
                case 5:
                  zn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Mu(g);
                    continue;
                  }
              }
              x !== null ? ((x.return = h), (R = x)) : Mu(g);
            }
            p = p.sibling;
          }
        e: for (p = null, g = e; ; ) {
          if (g.tag === 5) {
            if (p === null) {
              p = g;
              try {
                (l = g.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = g.stateNode),
                      (u = g.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = Cc("display", i)));
              } catch (S) {
                re(e, e.return, S);
              }
            }
          } else if (g.tag === 6) {
            if (p === null)
              try {
                g.stateNode.nodeValue = c ? "" : g.memoizedProps;
              } catch (S) {
                re(e, e.return, S);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            p === g && (p = null), (g = g.return);
          }
          p === g && (p = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      Je(t, e), it(e), r & 4 && _u(e);
      break;
    case 21:
      break;
    default:
      Je(t, e), it(e);
  }
}
function it(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Yd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Tr(l, ""), (r.flags &= -33));
          var o = Ru(e);
          ss(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Ru(e);
          is(e, s, i);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      re(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Lp(e, t, n) {
  (R = e), Jd(e);
}
function Jd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var l = R,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || pl;
      if (!i) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || Se;
        s = pl;
        var c = Se;
        if (((pl = i), (Se = u) && !c))
          for (R = l; R !== null; )
            (i = R),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Lu(l)
                : u !== null
                ? ((u.return = i), (R = u))
                : Lu(l);
        for (; o !== null; ) (R = o), Jd(o), (o = o.sibling);
        (R = l), (pl = s), (Se = c);
      }
      Ou(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (R = o)) : Ou(e);
  }
}
function Ou(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Se || vo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Se)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : be(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && mu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                mu(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var p = c.memoizedState;
                  if (p !== null) {
                    var g = p.dehydrated;
                    g !== null && Mr(g);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        Se || (t.flags & 512 && os(t));
      } catch (h) {
        re(t, t.return, h);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Mu(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Lu(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vo(4, t);
          } catch (u) {
            re(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              re(t, l, u);
            }
          }
          var o = t.return;
          try {
            os(t);
          } catch (u) {
            re(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            os(t);
          } catch (u) {
            re(t, i, u);
          }
      }
    } catch (u) {
      re(t, t.return, u);
    }
    if (t === e) {
      R = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (R = s);
      break;
    }
    R = t.return;
  }
}
var Pp = Math.ceil,
  Zl = Rt.ReactCurrentDispatcher,
  na = Rt.ReactCurrentOwner,
  Qe = Rt.ReactCurrentBatchConfig,
  F = 0,
  fe = null,
  ie = null,
  ve = 0,
  De = 0,
  Dn = tn(0),
  ae = 0,
  Hr = null,
  gn = 0,
  go = 0,
  ra = 0,
  Nr = null,
  Oe = null,
  la = 0,
  Gn = 1 / 0,
  vt = null,
  Jl = !1,
  as = null,
  Xt = null,
  ml = !1,
  Ht = null,
  bl = 0,
  kr = 0,
  us = null,
  Rl = -1,
  _l = 0;
function Te() {
  return F & 6 ? le() : Rl !== -1 ? Rl : (Rl = le());
}
function Yt(e) {
  return e.mode & 1
    ? F & 2 && ve !== 0
      ? ve & -ve
      : vp.transition !== null
      ? (_l === 0 && (_l = Dc()), _l)
      : ((e = V),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Wc(e.type))),
        e)
    : 1;
}
function lt(e, t, n, r) {
  if (50 < kr) throw ((kr = 0), (us = null), Error(C(185)));
  Kr(e, n, r),
    (!(F & 2) || e !== fe) &&
      (e === fe && (!(F & 2) && (go |= n), ae === 4 && Bt(e, ve)),
      ze(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Gn = le() + 500), po && nn()));
}
function ze(e, t) {
  var n = e.callbackNode;
  v0(e, t);
  var r = Dl(e, e === fe ? ve : 0);
  if (r === 0)
    n !== null && Ua(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ua(n), t === 1))
      e.tag === 0 ? hp(Pu.bind(null, e)) : ad(Pu.bind(null, e)),
        dp(function () {
          !(F & 6) && nn();
        }),
        (n = null);
    else {
      switch (Ac(r)) {
        case 1:
          n = Os;
          break;
        case 4:
          n = Ic;
          break;
        case 16:
          n = zl;
          break;
        case 536870912:
          n = zc;
          break;
        default:
          n = zl;
      }
      n = sf(n, bd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function bd(e, t) {
  if (((Rl = -1), (_l = 0), F & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Wn() && e.callbackNode !== n) return null;
  var r = Dl(e, e === fe ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = eo(e, r);
  else {
    t = r;
    var l = F;
    F |= 2;
    var o = tf();
    (fe !== e || ve !== t) && ((vt = null), (Gn = le() + 500), fn(e, t));
    do
      try {
        Dp();
        break;
      } catch (s) {
        ef(e, s);
      }
    while (!0);
    Ws(),
      (Zl.current = o),
      (F = l),
      ie !== null ? (t = 0) : ((fe = null), (ve = 0), (t = ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Di(e)), l !== 0 && ((r = l), (t = cs(e, l)))), t === 1)
    )
      throw ((n = Hr), fn(e, 0), Bt(e, r), ze(e, le()), n);
    if (t === 6) Bt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Ip(l) &&
          ((t = eo(e, r)),
          t === 2 && ((o = Di(e)), o !== 0 && ((r = o), (t = cs(e, o)))),
          t === 1))
      )
        throw ((n = Hr), fn(e, 0), Bt(e, r), ze(e, le()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          sn(e, Oe, vt);
          break;
        case 3:
          if (
            (Bt(e, r), (r & 130023424) === r && ((t = la + 500 - le()), 10 < t))
          ) {
            if (Dl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Te(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Vi(sn.bind(null, e, Oe, vt), t);
            break;
          }
          sn(e, Oe, vt);
          break;
        case 4:
          if ((Bt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - rt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = le() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Pp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Vi(sn.bind(null, e, Oe, vt), r);
            break;
          }
          sn(e, Oe, vt);
          break;
        case 5:
          sn(e, Oe, vt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return ze(e, le()), e.callbackNode === n ? bd.bind(null, e) : null;
}
function cs(e, t) {
  var n = Nr;
  return (
    e.current.memoizedState.isDehydrated && (fn(e, t).flags |= 256),
    (e = eo(e, t)),
    e !== 2 && ((t = Oe), (Oe = n), t !== null && ds(t)),
    e
  );
}
function ds(e) {
  Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
}
function Ip(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!ot(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Bt(e, t) {
  for (
    t &= ~ra,
      t &= ~go,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - rt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Pu(e) {
  if (F & 6) throw Error(C(327));
  Wn();
  var t = Dl(e, 0);
  if (!(t & 1)) return ze(e, le()), null;
  var n = eo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Di(e);
    r !== 0 && ((t = r), (n = cs(e, r)));
  }
  if (n === 1) throw ((n = Hr), fn(e, 0), Bt(e, t), ze(e, le()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    sn(e, Oe, vt),
    ze(e, le()),
    null
  );
}
function oa(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((Gn = le() + 500), po && nn());
  }
}
function yn(e) {
  Ht !== null && Ht.tag === 0 && !(F & 6) && Wn();
  var t = F;
  F |= 1;
  var n = Qe.transition,
    r = V;
  try {
    if (((Qe.transition = null), (V = 1), e)) return e();
  } finally {
    (V = r), (Qe.transition = n), (F = t), !(F & 6) && nn();
  }
}
function ia() {
  (De = Dn.current), G(Dn);
}
function fn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), cp(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((Bs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ul();
          break;
        case 3:
          Xn(), G(Pe), G(Ee), Ys();
          break;
        case 5:
          Xs(r);
          break;
        case 4:
          Xn();
          break;
        case 13:
          G(ee);
          break;
        case 19:
          G(ee);
          break;
        case 10:
          Vs(r.type._context);
          break;
        case 22:
        case 23:
          ia();
      }
      n = n.return;
    }
  if (
    ((fe = e),
    (ie = e = Gt(e.current, null)),
    (ve = De = t),
    (ae = 0),
    (Hr = null),
    (ra = go = gn = 0),
    (Oe = Nr = null),
    cn !== null)
  ) {
    for (t = 0; t < cn.length; t++)
      if (((n = cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    cn = null;
  }
  return e;
}
function ef(e, t) {
  do {
    var n = ie;
    try {
      if ((Ws(), (kl.current = Gl), Yl)) {
        for (var r = te.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Yl = !1;
      }
      if (
        ((vn = 0),
        (ce = se = te = null),
        (Er = !1),
        (Fr = 0),
        (na.current = null),
        n === null || n.return === null)
      ) {
        (ae = 1), (Hr = t), (ie = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          u = t;
        if (
          ((t = ve),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            p = s,
            g = p.tag;
          if (!(p.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var h = p.alternate;
            h
              ? ((p.updateQueue = h.updateQueue),
                (p.memoizedState = h.memoizedState),
                (p.lanes = h.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var x = wu(i);
          if (x !== null) {
            (x.flags &= -257),
              Su(x, i, s, o, t),
              x.mode & 1 && xu(o, c, t),
              (t = x),
              (u = c);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(u), (t.updateQueue = S);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              xu(o, c, t), sa();
              break e;
            }
            u = Error(C(426));
          }
        } else if (Z && s.mode & 1) {
          var _ = wu(i);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              Su(_, i, s, o, t),
              Us(Yn(u, s));
            break e;
          }
        }
        (o = u = Yn(u, s)),
          ae !== 4 && (ae = 2),
          Nr === null ? (Nr = [o]) : Nr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Ad(o, u, t);
              pu(o, m);
              break e;
            case 1:
              s = u;
              var f = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Xt === null || !Xt.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = $d(o, s, t);
                pu(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      rf(n);
    } catch (k) {
      (t = k), ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function tf() {
  var e = Zl.current;
  return (Zl.current = Gl), e === null ? Gl : e;
}
function sa() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    fe === null || (!(gn & 268435455) && !(go & 268435455)) || Bt(fe, ve);
}
function eo(e, t) {
  var n = F;
  F |= 2;
  var r = tf();
  (fe !== e || ve !== t) && ((vt = null), fn(e, t));
  do
    try {
      zp();
      break;
    } catch (l) {
      ef(e, l);
    }
  while (!0);
  if ((Ws(), (F = n), (Zl.current = r), ie !== null)) throw Error(C(261));
  return (fe = null), (ve = 0), ae;
}
function zp() {
  for (; ie !== null; ) nf(ie);
}
function Dp() {
  for (; ie !== null && !s0(); ) nf(ie);
}
function nf(e) {
  var t = of(e.alternate, e, De);
  (e.memoizedProps = e.pendingProps),
    t === null ? rf(e) : (ie = t),
    (na.current = null);
}
function rf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = _p(n, t)), n !== null)) {
        (n.flags &= 32767), (ie = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ae = 6), (ie = null);
        return;
      }
    } else if (((n = Rp(n, t, De)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  ae === 0 && (ae = 5);
}
function sn(e, t, n) {
  var r = V,
    l = Qe.transition;
  try {
    (Qe.transition = null), (V = 1), Ap(e, t, n, r);
  } finally {
    (Qe.transition = l), (V = r);
  }
  return null;
}
function Ap(e, t, n, r) {
  do Wn();
  while (Ht !== null);
  if (F & 6) throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (g0(e, o),
    e === fe && ((ie = fe = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ml ||
      ((ml = !0),
      sf(zl, function () {
        return Wn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Qe.transition), (Qe.transition = null);
    var i = V;
    V = 1;
    var s = F;
    (F |= 4),
      (na.current = null),
      Mp(e, n),
      Zd(n, e),
      rp(Hi),
      (Al = !!Ui),
      (Hi = Ui = null),
      (e.current = n),
      Lp(n),
      a0(),
      (F = s),
      (V = i),
      (Qe.transition = o);
  } else e.current = n;
  if (
    (ml && ((ml = !1), (Ht = e), (bl = l)),
    (o = e.pendingLanes),
    o === 0 && (Xt = null),
    d0(n.stateNode),
    ze(e, le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Jl) throw ((Jl = !1), (e = as), (as = null), e);
  return (
    bl & 1 && e.tag !== 0 && Wn(),
    (o = e.pendingLanes),
    o & 1 ? (e === us ? kr++ : ((kr = 0), (us = e))) : (kr = 0),
    nn(),
    null
  );
}
function Wn() {
  if (Ht !== null) {
    var e = Ac(bl),
      t = Qe.transition,
      n = V;
    try {
      if (((Qe.transition = null), (V = 16 > e ? 16 : e), Ht === null))
        var r = !1;
      else {
        if (((e = Ht), (Ht = null), (bl = 0), F & 6)) throw Error(C(331));
        var l = F;
        for (F |= 4, R = e.current; R !== null; ) {
          var o = R,
            i = o.child;
          if (R.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var c = s[u];
                for (R = c; R !== null; ) {
                  var p = R;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cr(8, p, o);
                  }
                  var g = p.child;
                  if (g !== null) (g.return = p), (R = g);
                  else
                    for (; R !== null; ) {
                      p = R;
                      var h = p.sibling,
                        x = p.return;
                      if ((Xd(p), p === c)) {
                        R = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = x), (R = h);
                        break;
                      }
                      R = x;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var _ = S.sibling;
                    (S.sibling = null), (S = _);
                  } while (S !== null);
                }
              }
              R = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (R = i);
          else
            e: for (; R !== null; ) {
              if (((o = R), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Cr(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (R = m);
                break e;
              }
              R = o.return;
            }
        }
        var f = e.current;
        for (R = f; R !== null; ) {
          i = R;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (R = v);
          else
            e: for (i = f; R !== null; ) {
              if (((s = R), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vo(9, s);
                  }
                } catch (k) {
                  re(s, s.return, k);
                }
              if (s === i) {
                R = null;
                break e;
              }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (R = y);
                break e;
              }
              R = s.return;
            }
        }
        if (
          ((F = l), nn(), ct && typeof ct.onPostCommitFiberRoot == "function")
        )
          try {
            ct.onPostCommitFiberRoot(so, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (V = n), (Qe.transition = t);
    }
  }
  return !1;
}
function Iu(e, t, n) {
  (t = Yn(n, t)),
    (t = Ad(e, t, 1)),
    (e = qt(e, t, 1)),
    (t = Te()),
    e !== null && (Kr(e, 1, t), ze(e, t));
}
function re(e, t, n) {
  if (e.tag === 3) Iu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Iu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Xt === null || !Xt.has(r)))
        ) {
          (e = Yn(n, e)),
            (e = $d(t, e, 1)),
            (t = qt(t, e, 1)),
            (e = Te()),
            t !== null && (Kr(t, 1, e), ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function $p(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Te()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (ve & n) === n &&
      (ae === 4 || (ae === 3 && (ve & 130023424) === ve && 500 > le() - la)
        ? fn(e, 0)
        : (ra |= n)),
    ze(e, t);
}
function lf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ll), (ll <<= 1), !(ll & 130023424) && (ll = 4194304))
      : (t = 1));
  var n = Te();
  (e = jt(e, t)), e !== null && (Kr(e, t, n), ze(e, n));
}
function Fp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), lf(e, n);
}
function Bp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), lf(e, n);
}
var of;
of = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) Me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), Tp(e, t, n);
      Me = !!(e.flags & 131072);
    }
  else (Me = !1), Z && t.flags & 1048576 && ud(t, Vl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Tl(e, t), (e = t.pendingProps);
      var l = Kn(t, Ee.current);
      Hn(t, n), (l = Zs(null, t, r, e, l, n));
      var o = Js();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ie(r) ? ((o = !0), Hl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Qs(t),
            (l.updater = ho),
            (t.stateNode = l),
            (l._reactInternals = t),
            Zi(t, r, e, n),
            (t = es(null, t, r, !0, o, n)))
          : ((t.tag = 0), Z && o && Fs(t), ke(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Tl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Hp(r)),
          (e = be(r, e)),
          l)
        ) {
          case 0:
            t = bi(null, t, r, e, n);
            break e;
          case 1:
            t = Nu(null, t, r, e, n);
            break e;
          case 11:
            t = Eu(null, t, r, e, n);
            break e;
          case 14:
            t = Cu(null, t, r, be(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : be(r, l)),
        bi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : be(r, l)),
        Nu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Hd(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          hd(e, t),
          ql(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Yn(Error(C(423)), t)), (t = ku(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Yn(Error(C(424)), t)), (t = ku(e, t, r, n, l));
            break e;
          } else
            for (
              Ae = Qt(t.stateNode.containerInfo.firstChild),
                $e = t,
                Z = !0,
                tt = null,
                n = pd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Qn(), r === l)) {
            t = Tt(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        vd(t),
        e === null && Xi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Wi(r, l) ? (i = null) : o !== null && Wi(r, o) && (t.flags |= 32),
        Ud(e, t),
        ke(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Xi(t), null;
    case 13:
      return Wd(e, t, n);
    case 4:
      return (
        qs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = qn(t, null, r, n)) : ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : be(r, l)),
        Eu(e, t, r, l, n)
      );
    case 7:
      return ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          q(Kl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (ot(o.value, i)) {
            if (o.children === l.children && !Pe.current) {
              t = Tt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Et(-1, n & -n)), (u.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var p = c.pending;
                        p === null
                          ? (u.next = u)
                          : ((u.next = p.next), (p.next = u)),
                          (c.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Yi(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(C(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  Yi(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ke(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Hn(t, n),
        (l = qe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = be(r, t.pendingProps)),
        (l = be(r.type, l)),
        Cu(e, t, r, l, n)
      );
    case 15:
      return Fd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : be(r, l)),
        Tl(e, t),
        (t.tag = 1),
        Ie(r) ? ((e = !0), Hl(t)) : (e = !1),
        Hn(t, n),
        Dd(t, r, l),
        Zi(t, r, l, n),
        es(null, t, r, !0, e, n)
      );
    case 19:
      return Vd(e, t, n);
    case 22:
      return Bd(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function sf(e, t) {
  return Pc(e, t);
}
function Up(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ke(e, t, n, r) {
  return new Up(e, t, n, r);
}
function aa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Hp(e) {
  if (typeof e == "function") return aa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ts)) return 11;
    if (e === Rs) return 14;
  }
  return 2;
}
function Gt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ke(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ol(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) aa(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case jn:
        return pn(n.children, l, o, t);
      case js:
        (i = 8), (l |= 8);
        break;
      case Si:
        return (
          (e = Ke(12, n, t, l | 2)), (e.elementType = Si), (e.lanes = o), e
        );
      case Ei:
        return (e = Ke(13, n, t, l)), (e.elementType = Ei), (e.lanes = o), e;
      case Ci:
        return (e = Ke(19, n, t, l)), (e.elementType = Ci), (e.lanes = o), e;
      case vc:
        return yo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case mc:
              i = 10;
              break e;
            case hc:
              i = 9;
              break e;
            case Ts:
              i = 11;
              break e;
            case Rs:
              i = 14;
              break e;
            case Dt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ke(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function pn(e, t, n, r) {
  return (e = Ke(7, e, r, t)), (e.lanes = n), e;
}
function yo(e, t, n, r) {
  return (
    (e = Ke(22, e, r, t)),
    (e.elementType = vc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ci(e, t, n) {
  return (e = Ke(6, e, null, t)), (e.lanes = n), e;
}
function di(e, t, n) {
  return (
    (t = Ke(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Wp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ko(0)),
    (this.expirationTimes = Ko(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ko(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ua(e, t, n, r, l, o, i, s, u) {
  return (
    (e = new Wp(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ke(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Qs(o),
    e
  );
}
function Vp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: kn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function af(e) {
  if (!e) return Jt;
  e = e._reactInternals;
  e: {
    if (wn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ie(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ie(n)) return sd(e, n, t);
  }
  return t;
}
function uf(e, t, n, r, l, o, i, s, u) {
  return (
    (e = ua(n, r, !0, e, l, o, i, s, u)),
    (e.context = af(null)),
    (n = e.current),
    (r = Te()),
    (l = Yt(n)),
    (o = Et(r, l)),
    (o.callback = t ?? null),
    qt(n, o, l),
    (e.current.lanes = l),
    Kr(e, l, r),
    ze(e, r),
    e
  );
}
function xo(e, t, n, r) {
  var l = t.current,
    o = Te(),
    i = Yt(l);
  return (
    (n = af(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Et(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = qt(l, t, i)),
    e !== null && (lt(e, l, i, o), Nl(e, l, i)),
    i
  );
}
function to(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function zu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ca(e, t) {
  zu(e, t), (e = e.alternate) && zu(e, t);
}
function Kp() {
  return null;
}
var cf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function da(e) {
  this._internalRoot = e;
}
wo.prototype.render = da.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  xo(e, t, null, null);
};
wo.prototype.unmount = da.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    yn(function () {
      xo(null, e, null, null);
    }),
      (t[kt] = null);
  }
};
function wo(e) {
  this._internalRoot = e;
}
wo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Bc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++);
    Ft.splice(n, 0, e), n === 0 && Hc(e);
  }
};
function fa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function So(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Du() {}
function Qp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = to(i);
        o.call(c);
      };
    }
    var i = uf(t, r, e, 0, null, !1, !1, "", Du);
    return (
      (e._reactRootContainer = i),
      (e[kt] = i.current),
      Ir(e.nodeType === 8 ? e.parentNode : e),
      yn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = to(u);
      s.call(c);
    };
  }
  var u = ua(e, 0, !1, null, null, !1, !1, "", Du);
  return (
    (e._reactRootContainer = u),
    (e[kt] = u.current),
    Ir(e.nodeType === 8 ? e.parentNode : e),
    yn(function () {
      xo(t, u, n, r);
    }),
    u
  );
}
function Eo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var u = to(i);
        s.call(u);
      };
    }
    xo(t, i, e, l);
  } else i = Qp(n, t, e, l, r);
  return to(i);
}
$c = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = mr(t.pendingLanes);
        n !== 0 &&
          (Ms(t, n | 1), ze(t, le()), !(F & 6) && ((Gn = le() + 500), nn()));
      }
      break;
    case 13:
      yn(function () {
        var r = jt(e, 1);
        if (r !== null) {
          var l = Te();
          lt(r, e, 1, l);
        }
      }),
        ca(e, 1);
  }
};
Ls = function (e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = Te();
      lt(t, e, 134217728, n);
    }
    ca(e, 134217728);
  }
};
Fc = function (e) {
  if (e.tag === 13) {
    var t = Yt(e),
      n = jt(e, t);
    if (n !== null) {
      var r = Te();
      lt(n, e, t, r);
    }
    ca(e, t);
  }
};
Bc = function () {
  return V;
};
Uc = function (e, t) {
  var n = V;
  try {
    return (V = e), t();
  } finally {
    V = n;
  }
};
Pi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ji(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = fo(r);
            if (!l) throw Error(C(90));
            yc(r), ji(r, l);
          }
        }
      }
      break;
    case "textarea":
      wc(e, n);
      break;
    case "select":
      (t = n.value), t != null && $n(e, !!n.multiple, t, !1);
  }
};
Tc = oa;
Rc = yn;
var qp = { usingClientEntryPoint: !1, Events: [qr, On, fo, kc, jc, oa] },
  cr = {
    findFiberByHostInstance: un,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Xp = {
    bundleType: cr.bundleType,
    version: cr.version,
    rendererPackageName: cr.rendererPackageName,
    rendererConfig: cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Mc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: cr.findFiberByHostInstance || Kp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hl.isDisabled && hl.supportsFiber)
    try {
      (so = hl.inject(Xp)), (ct = hl);
    } catch {}
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qp;
Be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fa(t)) throw Error(C(200));
  return Vp(e, t, null, n);
};
Be.createRoot = function (e, t) {
  if (!fa(e)) throw Error(C(299));
  var n = !1,
    r = "",
    l = cf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ua(e, 1, !1, null, null, n, !1, r, l)),
    (e[kt] = t.current),
    Ir(e.nodeType === 8 ? e.parentNode : e),
    new da(t)
  );
};
Be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = Mc(t)), (e = e === null ? null : e.stateNode), e;
};
Be.flushSync = function (e) {
  return yn(e);
};
Be.hydrate = function (e, t, n) {
  if (!So(t)) throw Error(C(200));
  return Eo(null, e, t, !0, n);
};
Be.hydrateRoot = function (e, t, n) {
  if (!fa(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = cf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = uf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[kt] = t.current),
    Ir(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new wo(t);
};
Be.render = function (e, t, n) {
  if (!So(t)) throw Error(C(200));
  return Eo(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function (e) {
  if (!So(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (yn(function () {
        Eo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[kt] = null);
        });
      }),
      !0)
    : !1;
};
Be.unstable_batchedUpdates = oa;
Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!So(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Eo(e, t, n, !1, r);
};
Be.version = "18.3.1-next-f1338f8080-20240426";
function df() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(df);
    } catch (e) {
      console.error(e);
    }
}
df(), (cc.exports = Be);
var ff = cc.exports;
const An = oo(ff);
var Au = ff;
(xi.createRoot = Au.createRoot), (xi.hydrateRoot = Au.hydrateRoot);
const Yp = "./assets/logo_branco-W580gNz6.png";
var pf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", i = 0; i < arguments.length; i++) {
        var s = arguments[i];
        s && (o = l(o, r(s)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number") return o;
      if (typeof o != "object") return "";
      if (Array.isArray(o)) return n.apply(null, o);
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes("[native code]")
      )
        return o.toString();
      var i = "";
      for (var s in o) t.call(o, s) && o[s] && (i = l(i, s));
      return i;
    }
    function l(o, i) {
      return i ? (o ? o + " " + i : o + i) : o;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(pf);
var Gp = pf.exports;
const M = oo(Gp),
  Zp = ["xxl", "xl", "lg", "md", "sm", "xs"],
  Jp = "xs",
  Co = d.createContext({ prefixes: {}, breakpoints: Zp, minBreakpoint: Jp });
function z(e, t) {
  const { prefixes: n } = d.useContext(Co);
  return e || n[t] || t;
}
function mf() {
  const { breakpoints: e } = d.useContext(Co);
  return e;
}
function hf() {
  const { minBreakpoint: e } = d.useContext(Co);
  return e;
}
function vf() {
  const { dir: e } = d.useContext(Co);
  return e === "rtl";
}
const gf = d.forwardRef(
  ({ bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...l }, o) => {
    const i = z(e, "container"),
      s = typeof t == "string" ? `-${t}` : "-fluid";
    return a.jsx(n, { ref: o, ...l, className: M(r, t ? `${i}${s}` : i) });
  }
);
gf.displayName = "Container";
function fs() {
  return (
    (fs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fs.apply(null, arguments)
  );
}
function yf(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function $u(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function bp(e) {
  var t = em(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function em(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function tm(e, t, n) {
  var r = d.useRef(e !== void 0),
    l = d.useState(t),
    o = l[0],
    i = l[1],
    s = e !== void 0,
    u = r.current;
  return (
    (r.current = s),
    !s && u && o !== t && i(t),
    [
      s ? e : o,
      d.useCallback(
        function (c) {
          for (
            var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), h = 1;
            h < p;
            h++
          )
            g[h - 1] = arguments[h];
          n && n.apply(void 0, [c].concat(g)), i(c);
        },
        [n]
      ),
    ]
  );
}
function No(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var l,
      o = n,
      i = o[$u(r)],
      s = o[r],
      u = yf(o, [$u(r), r].map(bp)),
      c = t[r],
      p = tm(s, i, e[c]),
      g = p[0],
      h = p[1];
    return fs({}, u, ((l = {}), (l[r] = g), (l[c] = h), l));
  }, e);
}
function ps(e, t) {
  return (
    (ps = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    ps(e, t)
  );
}
function nm(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    ps(e, t);
}
var rm = Function.prototype.bind.call(Function.prototype.call, [].slice);
function an(e, t) {
  return rm(e.querySelectorAll(t));
}
function lm() {
  const [, e] = d.useReducer((t) => t + 1, 0);
  return e;
}
const Fu = (e) =>
  !e || typeof e == "function"
    ? e
    : (t) => {
        e.current = t;
      };
function om(e, t) {
  const n = Fu(e),
    r = Fu(t);
  return (l) => {
    n && n(l), r && r(l);
  };
}
function ko(e, t) {
  return d.useMemo(() => om(e, t), [e, t]);
}
const pa = d.createContext(null);
pa.displayName = "NavContext";
const no = d.createContext(null),
  ma = (e, t = null) => (e != null ? String(e) : t || null),
  xf = d.createContext(null),
  im = "data-rr-ui-",
  sm = "rrUi";
function jo(e) {
  return `${im}${e}`;
}
function am(e) {
  return `${sm}${e}`;
}
function um(e) {
  const t = d.useRef(e);
  return (
    d.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function yt(e) {
  const t = um(e);
  return d.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
const cm = ["as", "disabled"];
function dm(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function fm(e) {
  return !e || e.trim() === "#";
}
function ha({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: l,
  role: o,
  onClick: i,
  tabIndex: s = 0,
  type: u,
}) {
  e || (n != null || r != null || l != null ? (e = "a") : (e = "button"));
  const c = { tagName: e };
  if (e === "button") return [{ type: u || "button", disabled: t }, c];
  const p = (h) => {
      if (((t || (e === "a" && fm(n))) && h.preventDefault(), t)) {
        h.stopPropagation();
        return;
      }
      i == null || i(h);
    },
    g = (h) => {
      h.key === " " && (h.preventDefault(), p(h));
    };
  return (
    e === "a" && (n || (n = "#"), t && (n = void 0)),
    [
      {
        role: o ?? "button",
        disabled: void 0,
        tabIndex: t ? void 0 : s,
        href: n,
        target: e === "a" ? r : void 0,
        "aria-disabled": t || void 0,
        rel: e === "a" ? l : void 0,
        onClick: p,
        onKeyDown: g,
      },
      c,
    ]
  );
}
const wf = d.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    l = dm(e, cm);
  const [o, { tagName: i }] = ha(Object.assign({ tagName: n, disabled: r }, l));
  return a.jsx(i, Object.assign({}, l, o, { ref: t }));
});
wf.displayName = "Button";
const pm = ["as", "active", "eventKey"];
function mm(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Sf({ key: e, onClick: t, active: n, id: r, role: l, disabled: o }) {
  const i = d.useContext(no),
    s = d.useContext(pa),
    u = d.useContext(xf);
  let c = n;
  const p = { role: l };
  if (s) {
    !l && s.role === "tablist" && (p.role = "tab");
    const g = s.getControllerId(e ?? null),
      h = s.getControlledId(e ?? null);
    (p[jo("event-key")] = e),
      (p.id = g || r),
      (c = n == null && e != null ? s.activeKey === e : n),
      (c ||
        (!(u != null && u.unmountOnExit) && !(u != null && u.mountOnEnter))) &&
        (p["aria-controls"] = h);
  }
  return (
    p.role === "tab" &&
      ((p["aria-selected"] = c),
      c || (p.tabIndex = -1),
      o && ((p.tabIndex = -1), (p["aria-disabled"] = !0))),
    (p.onClick = yt((g) => {
      o ||
        (t == null || t(g),
        e != null && i && !g.isPropagationStopped() && i(e, g));
    })),
    [p, { isActive: c }]
  );
}
const Ef = d.forwardRef((e, t) => {
  let { as: n = wf, active: r, eventKey: l } = e,
    o = mm(e, pm);
  const [i, s] = Sf(Object.assign({ key: ma(l, o.href), active: r }, o));
  return (
    (i[jo("active")] = s.isActive),
    a.jsx(n, Object.assign({}, o, i, { ref: t }))
  );
});
Ef.displayName = "NavItem";
const hm = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function vm(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
const Bu = () => {},
  Uu = jo("event-key"),
  Cf = d.forwardRef((e, t) => {
    let { as: n = "div", onSelect: r, activeKey: l, role: o, onKeyDown: i } = e,
      s = vm(e, hm);
    const u = lm(),
      c = d.useRef(!1),
      p = d.useContext(no),
      g = d.useContext(xf);
    let h, x;
    g &&
      ((o = o || "tablist"),
      (l = g.activeKey),
      (h = g.getControlledId),
      (x = g.getControllerId));
    const w = d.useRef(null),
      S = (v) => {
        const y = w.current;
        if (!y) return null;
        const k = an(y, `[${Uu}]:not([aria-disabled=true])`),
          E = y.querySelector("[aria-selected=true]");
        if (!E || E !== document.activeElement) return null;
        const j = k.indexOf(E);
        if (j === -1) return null;
        let T = j + v;
        return T >= k.length && (T = 0), T < 0 && (T = k.length - 1), k[T];
      },
      _ = (v, y) => {
        v != null && (r == null || r(v, y), p == null || p(v, y));
      },
      m = (v) => {
        if ((i == null || i(v), !g)) return;
        let y;
        switch (v.key) {
          case "ArrowLeft":
          case "ArrowUp":
            y = S(-1);
            break;
          case "ArrowRight":
          case "ArrowDown":
            y = S(1);
            break;
          default:
            return;
        }
        y &&
          (v.preventDefault(),
          _(y.dataset[am("EventKey")] || null, v),
          (c.current = !0),
          u());
      };
    d.useEffect(() => {
      if (w.current && c.current) {
        const v = w.current.querySelector(`[${Uu}][aria-selected=true]`);
        v == null || v.focus();
      }
      c.current = !1;
    });
    const f = ko(t, w);
    return a.jsx(no.Provider, {
      value: _,
      children: a.jsx(pa.Provider, {
        value: {
          role: o,
          activeKey: ma(l),
          getControlledId: h || Bu,
          getControllerId: x || Bu,
        },
        children: a.jsx(
          n,
          Object.assign({}, s, { onKeyDown: m, ref: f, role: o })
        ),
      }),
    });
  });
Cf.displayName = "Nav";
const gm = Object.assign(Cf, { Item: Ef }),
  er = d.createContext(null);
er.displayName = "NavbarContext";
const va = d.createContext(null);
va.displayName = "CardHeaderContext";
const Nf = d.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, l) => (
    (t = z(t, "nav-item")), a.jsx(n, { ref: l, className: M(e, t), ...r })
  )
);
Nf.displayName = "NavItem";
function ym() {
  const e = d.useRef(!0),
    t = d.useRef(() => e.current);
  return (
    d.useEffect(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    t.current
  );
}
function xm(e) {
  const t = d.useRef(null);
  return (
    d.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
const wm =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  Sm = typeof document < "u",
  Hu = Sm || wm ? d.useLayoutEffect : d.useEffect,
  Em = ["onKeyDown"];
function Cm(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Nm(e) {
  return !e || e.trim() === "#";
}
const ro = d.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = Cm(e, Em);
  const [l] = ha(Object.assign({ tagName: "a" }, r)),
    o = yt((i) => {
      l.onKeyDown(i), n == null || n(i);
    });
  return Nm(r.href) || r.role === "button"
    ? a.jsx("a", Object.assign({ ref: t }, r, l, { onKeyDown: o }))
    : a.jsx("a", Object.assign({ ref: t }, r, { onKeyDown: n }));
});
ro.displayName = "Anchor";
const kf = d.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      as: n = ro,
      active: r,
      eventKey: l,
      disabled: o = !1,
      ...i
    },
    s
  ) => {
    e = z(e, "nav-link");
    const [u, c] = Sf({ key: ma(l, i.href), active: r, disabled: o, ...i });
    return a.jsx(n, {
      ...i,
      ...u,
      ref: s,
      disabled: o,
      className: M(t, e, o && "disabled", c.isActive && "active"),
    });
  }
);
kf.displayName = "NavLink";
const jf = d.forwardRef((e, t) => {
  const {
      as: n = "div",
      bsPrefix: r,
      variant: l,
      fill: o = !1,
      justify: i = !1,
      navbar: s,
      navbarScroll: u,
      className: c,
      activeKey: p,
      ...g
    } = No(e, { activeKey: "onSelect" }),
    h = z(r, "nav");
  let x,
    w,
    S = !1;
  const _ = d.useContext(er),
    m = d.useContext(va);
  return (
    _
      ? ((x = _.bsPrefix), (S = s ?? !0))
      : m && ({ cardHeaderBsPrefix: w } = m),
    a.jsx(gm, {
      as: n,
      ref: t,
      activeKey: p,
      className: M(c, {
        [h]: !S,
        [`${x}-nav`]: S,
        [`${x}-nav-scroll`]: S && u,
        [`${w}-${l}`]: !!w,
        [`${h}-${l}`]: !!l,
        [`${h}-fill`]: o,
        [`${h}-justified`]: i,
      }),
      ...g,
    })
  );
});
jf.displayName = "Nav";
const Pt = Object.assign(jf, { Item: Nf, Link: kf }),
  Tf = d.forwardRef(({ bsPrefix: e, className: t, as: n, ...r }, l) => {
    e = z(e, "navbar-brand");
    const o = n || (r.href ? "a" : "span");
    return a.jsx(o, { ...r, ref: l, className: M(t, e) });
  });
Tf.displayName = "NavbarBrand";
function To(e) {
  return (e && e.ownerDocument) || document;
}
function km(e) {
  var t = To(e);
  return (t && t.defaultView) || window;
}
function jm(e, t) {
  return km(e).getComputedStyle(e, t);
}
var Tm = /([A-Z])/g;
function Rm(e) {
  return e.replace(Tm, "-$1").toLowerCase();
}
var _m = /^ms-/;
function vl(e) {
  return Rm(e).replace(_m, "-ms-");
}
var Om =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Mm(e) {
  return !!(e && Om.test(e));
}
function Ct(e, t) {
  var n = "",
    r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(vl(t)) || jm(e).getPropertyValue(vl(t));
  Object.keys(t).forEach(function (l) {
    var o = t[l];
    !o && o !== 0
      ? e.style.removeProperty(vl(l))
      : Mm(l)
      ? (r += l + "(" + o + ") ")
      : (n += vl(l) + ": " + o + ";");
  }),
    r && (n += "transform: " + r + ";"),
    (e.style.cssText += ";" + n);
}
var Rf = { exports: {} },
  Lm = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Pm = Lm,
  Im = Pm;
function _f() {}
function Of() {}
Of.resetWarningCache = _f;
var zm = function () {
  function e(r, l, o, i, s, u) {
    if (u !== Im) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Of,
    resetWarningCache: _f,
  };
  return (n.PropTypes = n), n;
};
Rf.exports = zm();
var Dm = Rf.exports;
const fi = oo(Dm),
  Wu = { disabled: !1 },
  Mf = ut.createContext(null);
var Am = function (t) {
    return t.scrollTop;
  },
  vr = "unmounted",
  $t = "exited",
  nt = "entering",
  xt = "entered",
  Wr = "exiting",
  _t = (function (e) {
    nm(t, e);
    function t(r, l) {
      var o;
      o = e.call(this, r, l) || this;
      var i = l,
        s = i && !i.isMounting ? r.enter : r.appear,
        u;
      return (
        (o.appearStatus = null),
        r.in
          ? s
            ? ((u = $t), (o.appearStatus = nt))
            : (u = xt)
          : r.unmountOnExit || r.mountOnEnter
          ? (u = vr)
          : (u = $t),
        (o.state = { status: u }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (l, o) {
      var i = l.in;
      return i && o.status === vr ? { status: $t } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (l) {
        var o = null;
        if (l !== this.props) {
          var i = this.state.status;
          this.props.in
            ? i !== nt && i !== xt && (o = nt)
            : (i === nt || i === xt) && (o = Wr);
        }
        this.updateStatus(!1, o);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var l = this.props.timeout,
          o,
          i,
          s;
        return (
          (o = i = s = l),
          l != null &&
            typeof l != "number" &&
            ((o = l.exit),
            (i = l.enter),
            (s = l.appear !== void 0 ? l.appear : i)),
          { exit: o, enter: i, appear: s }
        );
      }),
      (n.updateStatus = function (l, o) {
        if ((l === void 0 && (l = !1), o !== null))
          if ((this.cancelNextCallback(), o === nt)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var i = this.props.nodeRef
                ? this.props.nodeRef.current
                : An.findDOMNode(this);
              i && Am(i);
            }
            this.performEnter(l);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === $t &&
            this.setState({ status: vr });
      }),
      (n.performEnter = function (l) {
        var o = this,
          i = this.props.enter,
          s = this.context ? this.context.isMounting : l,
          u = this.props.nodeRef ? [s] : [An.findDOMNode(this), s],
          c = u[0],
          p = u[1],
          g = this.getTimeouts(),
          h = s ? g.appear : g.enter;
        if ((!l && !i) || Wu.disabled) {
          this.safeSetState({ status: xt }, function () {
            o.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, p),
          this.safeSetState({ status: nt }, function () {
            o.props.onEntering(c, p),
              o.onTransitionEnd(h, function () {
                o.safeSetState({ status: xt }, function () {
                  o.props.onEntered(c, p);
                });
              });
          });
      }),
      (n.performExit = function () {
        var l = this,
          o = this.props.exit,
          i = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : An.findDOMNode(this);
        if (!o || Wu.disabled) {
          this.safeSetState({ status: $t }, function () {
            l.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: Wr }, function () {
            l.props.onExiting(s),
              l.onTransitionEnd(i.exit, function () {
                l.safeSetState({ status: $t }, function () {
                  l.props.onExited(s);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (l, o) {
        (o = this.setNextCallback(o)), this.setState(l, o);
      }),
      (n.setNextCallback = function (l) {
        var o = this,
          i = !0;
        return (
          (this.nextCallback = function (s) {
            i && ((i = !1), (o.nextCallback = null), l(s));
          }),
          (this.nextCallback.cancel = function () {
            i = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (l, o) {
        this.setNextCallback(o);
        var i = this.props.nodeRef
            ? this.props.nodeRef.current
            : An.findDOMNode(this),
          s = l == null && !this.props.addEndListener;
        if (!i || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var u = this.props.nodeRef
              ? [this.nextCallback]
              : [i, this.nextCallback],
            c = u[0],
            p = u[1];
          this.props.addEndListener(c, p);
        }
        l != null && setTimeout(this.nextCallback, l);
      }),
      (n.render = function () {
        var l = this.state.status;
        if (l === vr) return null;
        var o = this.props,
          i = o.children;
        o.in,
          o.mountOnEnter,
          o.unmountOnExit,
          o.appear,
          o.enter,
          o.exit,
          o.timeout,
          o.addEndListener,
          o.onEnter,
          o.onEntering,
          o.onEntered,
          o.onExit,
          o.onExiting,
          o.onExited,
          o.nodeRef;
        var s = yf(o, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return ut.createElement(
          Mf.Provider,
          { value: null },
          typeof i == "function"
            ? i(l, s)
            : ut.cloneElement(ut.Children.only(i), s)
        );
      }),
      t
    );
  })(ut.Component);
_t.contextType = Mf;
_t.propTypes = {};
function Cn() {}
_t.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Cn,
  onEntering: Cn,
  onEntered: Cn,
  onExit: Cn,
  onExiting: Cn,
  onExited: Cn,
};
_t.UNMOUNTED = vr;
_t.EXITED = $t;
_t.ENTERING = nt;
_t.ENTERED = xt;
_t.EXITING = Wr;
function $m(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
function Fm() {
  const e = d.version.split(".");
  return { major: +e[0], minor: +e[1], patch: +e[2] };
}
function Ro(e) {
  if (!e || typeof e == "function") return null;
  const { major: t } = Fm();
  return t >= 19 ? e.props.ref : e.ref;
}
const tr = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
var ms = !1,
  hs = !1;
try {
  var pi = {
    get passive() {
      return (ms = !0);
    },
    get once() {
      return (hs = ms = !0);
    },
  };
  tr &&
    (window.addEventListener("test", pi, pi),
    window.removeEventListener("test", pi, !0));
} catch {}
function Lf(e, t, n, r) {
  if (r && typeof r != "boolean" && !hs) {
    var l = r.once,
      o = r.capture,
      i = n;
    !hs &&
      l &&
      ((i =
        n.__once ||
        function s(u) {
          this.removeEventListener(t, s, o), n.call(this, u);
        }),
      (n.__once = i)),
      e.addEventListener(t, i, ms ? r : o);
  }
  e.addEventListener(t, n, r);
}
function vs(e, t, n, r) {
  var l = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, l),
    n.__once && e.removeEventListener(t, n.__once, l);
}
function lo(e, t, n, r) {
  return (
    Lf(e, t, n, r),
    function () {
      vs(e, t, n, r);
    }
  );
}
function Bm(e, t, n, r) {
  if ((r === void 0 && (r = !0), e)) {
    var l = document.createEvent("HTMLEvents");
    l.initEvent(t, n, r), e.dispatchEvent(l);
  }
}
function Um(e) {
  var t = Ct(e, "transitionDuration") || "",
    n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function Hm(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1,
    l = setTimeout(function () {
      r || Bm(e, "transitionend", !0);
    }, t + n),
    o = lo(
      e,
      "transitionend",
      function () {
        r = !0;
      },
      { once: !0 }
    );
  return function () {
    clearTimeout(l), o();
  };
}
function Pf(e, t, n, r) {
  n == null && (n = Um(e) || 0);
  var l = Hm(e, n, r),
    o = lo(e, "transitionend", t);
  return function () {
    l(), o();
  };
}
function Vu(e, t) {
  const n = Ct(e, t) || "",
    r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function _o(e, t) {
  const n = Vu(e, "transitionDuration"),
    r = Vu(e, "transitionDelay"),
    l = Pf(
      e,
      (o) => {
        o.target === e && (l(), t(o));
      },
      n + r
    );
}
function dr(...e) {
  return e
    .filter((t) => t != null)
    .reduce((t, n) => {
      if (typeof n != "function")
        throw new Error(
          "Invalid Argument Type, must only provide functions, undefined, or null."
        );
      return t === null
        ? n
        : function (...l) {
            t.apply(this, l), n.apply(this, l);
          };
    }, null);
}
function ga(e) {
  e.offsetHeight;
}
const Ku = (e) =>
  !e || typeof e == "function"
    ? e
    : (t) => {
        e.current = t;
      };
function Wm(e, t) {
  const n = Ku(e),
    r = Ku(t);
  return (l) => {
    n && n(l), r && r(l);
  };
}
function If(e, t) {
  return d.useMemo(() => Wm(e, t), [e, t]);
}
function Vm(e) {
  return e && "setState" in e ? An.findDOMNode(e) : e ?? null;
}
const Oo = ut.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: l,
        onExited: o,
        addEndListener: i,
        children: s,
        childRef: u,
        ...c
      },
      p
    ) => {
      const g = d.useRef(null),
        h = If(g, u),
        x = (E) => {
          h(Vm(E));
        },
        w = (E) => (j) => {
          E && g.current && E(g.current, j);
        },
        S = d.useCallback(w(e), [e]),
        _ = d.useCallback(w(t), [t]),
        m = d.useCallback(w(n), [n]),
        f = d.useCallback(w(r), [r]),
        v = d.useCallback(w(l), [l]),
        y = d.useCallback(w(o), [o]),
        k = d.useCallback(w(i), [i]);
      return a.jsx(_t, {
        ref: p,
        ...c,
        onEnter: S,
        onEntered: m,
        onEntering: _,
        onExit: f,
        onExited: y,
        onExiting: v,
        addEndListener: k,
        nodeRef: g,
        children:
          typeof s == "function"
            ? (E, j) => s(E, { ...j, ref: x })
            : ut.cloneElement(s, { ref: x }),
      });
    }
  ),
  Km = {
    height: ["marginTop", "marginBottom"],
    width: ["marginLeft", "marginRight"],
  };
function Qm(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
    r = t[n],
    l = Km[e];
  return r + parseInt(Ct(t, l[0]), 10) + parseInt(Ct(t, l[1]), 10);
}
const qm = {
    [$t]: "collapse",
    [Wr]: "collapsing",
    [nt]: "collapsing",
    [xt]: "collapse show",
  },
  zf = ut.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: l,
        className: o,
        children: i,
        dimension: s = "height",
        in: u = !1,
        timeout: c = 300,
        mountOnEnter: p = !1,
        unmountOnExit: g = !1,
        appear: h = !1,
        getDimensionValue: x = Qm,
        ...w
      },
      S
    ) => {
      const _ = typeof s == "function" ? s() : s,
        m = d.useMemo(
          () =>
            dr((E) => {
              E.style[_] = "0";
            }, e),
          [_, e]
        ),
        f = d.useMemo(
          () =>
            dr((E) => {
              const j = `scroll${_[0].toUpperCase()}${_.slice(1)}`;
              E.style[_] = `${E[j]}px`;
            }, t),
          [_, t]
        ),
        v = d.useMemo(
          () =>
            dr((E) => {
              E.style[_] = null;
            }, n),
          [_, n]
        ),
        y = d.useMemo(
          () =>
            dr((E) => {
              (E.style[_] = `${x(_, E)}px`), ga(E);
            }, r),
          [r, x, _]
        ),
        k = d.useMemo(
          () =>
            dr((E) => {
              E.style[_] = null;
            }, l),
          [_, l]
        );
      return a.jsx(Oo, {
        ref: S,
        addEndListener: _o,
        ...w,
        "aria-expanded": w.role ? u : null,
        onEnter: m,
        onEntering: f,
        onEntered: v,
        onExit: y,
        onExiting: k,
        childRef: Ro(i),
        in: u,
        timeout: c,
        mountOnEnter: p,
        unmountOnExit: g,
        appear: h,
        children: (E, j) =>
          ut.cloneElement(i, {
            ...j,
            className: M(
              o,
              i.props.className,
              qm[E],
              _ === "width" && "collapse-horizontal"
            ),
          }),
      });
    }
  ),
  Df = d.forwardRef(({ children: e, bsPrefix: t, ...n }, r) => {
    t = z(t, "navbar-collapse");
    const l = d.useContext(er);
    return a.jsx(zf, {
      in: !!(l && l.expanded),
      ...n,
      children: a.jsx("div", { ref: r, className: t, children: e }),
    });
  });
Df.displayName = "NavbarCollapse";
function Af(e) {
  const t = d.useRef(e);
  return (
    d.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function bt(e) {
  const t = Af(e);
  return d.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
const $f = d.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      label: r = "Toggle navigation",
      as: l = "button",
      onClick: o,
      ...i
    },
    s
  ) => {
    e = z(e, "navbar-toggler");
    const { onToggle: u, expanded: c } = d.useContext(er) || {},
      p = bt((g) => {
        o && o(g), u && u();
      });
    return (
      l === "button" && (i.type = "button"),
      a.jsx(l, {
        ...i,
        ref: s,
        onClick: p,
        "aria-label": r,
        className: M(t, e, !c && "collapsed"),
        children: n || a.jsx("span", { className: `${e}-icon` }),
      })
    );
  }
);
$f.displayName = "NavbarToggle";
const Xm =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  Ym = typeof document < "u",
  Gm = Ym || Xm ? d.useLayoutEffect : d.useEffect,
  gs = new WeakMap(),
  Qu = (e, t) => {
    if (!e || !t) return;
    const n = gs.get(t) || new Map();
    gs.set(t, n);
    let r = n.get(e);
    return r || ((r = t.matchMedia(e)), (r.refCount = 0), n.set(r.media, r)), r;
  };
function Zm(e, t = typeof window > "u" ? void 0 : window) {
  const n = Qu(e, t),
    [r, l] = d.useState(() => (n ? n.matches : !1));
  return (
    Gm(() => {
      let o = Qu(e, t);
      if (!o) return l(!1);
      let i = gs.get(t);
      const s = () => {
        l(o.matches);
      };
      return (
        o.refCount++,
        o.addListener(s),
        s(),
        () => {
          o.removeListener(s),
            o.refCount--,
            o.refCount <= 0 && (i == null || i.delete(o.media)),
            (o = void 0);
        }
      );
    }, [e]),
    r
  );
}
function Jm(e) {
  const t = Object.keys(e);
  function n(s, u) {
    return s === u ? u : s ? `${s} and ${u}` : u;
  }
  function r(s) {
    return t[Math.min(t.indexOf(s) + 1, t.length - 1)];
  }
  function l(s) {
    const u = r(s);
    let c = e[u];
    return (
      typeof c == "number" ? (c = `${c - 0.2}px`) : (c = `calc(${c} - 0.2px)`),
      `(max-width: ${c})`
    );
  }
  function o(s) {
    let u = e[s];
    return typeof u == "number" && (u = `${u}px`), `(min-width: ${u})`;
  }
  function i(s, u, c) {
    let p;
    typeof s == "object"
      ? ((p = s), (c = u), (u = !0))
      : ((u = u || !0), (p = { [s]: u }));
    let g = d.useMemo(
      () =>
        Object.entries(p).reduce(
          (h, [x, w]) => (
            (w === "up" || w === !0) && (h = n(h, o(x))),
            (w === "down" || w === !0) && (h = n(h, l(x))),
            h
          ),
          ""
        ),
      [JSON.stringify(p)]
    );
    return Zm(g, c);
  }
  return i;
}
const bm = Jm({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 });
function mi(e) {
  e === void 0 && (e = To());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function qu(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
function eh(e) {
  const t = d.useRef(e);
  return (t.current = e), t;
}
function th(e) {
  const t = eh(e);
  d.useEffect(() => () => t.current(), []);
}
function nh(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const Xu = jo("modal-open");
class ya {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: n = !0,
    isRTL: r = !1,
  } = {}) {
    (this.handleContainerOverflow = n),
      (this.isRTL = r),
      (this.modals = []),
      (this.ownerDocument = t);
  }
  getScrollbarWidth() {
    return nh(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(t) {}
  removeModalAttributes(t) {}
  setContainerStyle(t) {
    const n = { overflow: "hidden" },
      r = this.isRTL ? "paddingLeft" : "paddingRight",
      l = this.getElement();
    (t.style = { overflow: l.style.overflow, [r]: l.style[r] }),
      t.scrollBarWidth &&
        (n[r] = `${parseInt(Ct(l, r) || "0", 10) + t.scrollBarWidth}px`),
      l.setAttribute(Xu, ""),
      Ct(l, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(Xu), Object.assign(n.style, t.style);
  }
  add(t) {
    let n = this.modals.indexOf(t);
    return (
      n !== -1 ||
        ((n = this.modals.length),
        this.modals.push(t),
        this.setModalAttributes(t),
        n !== 0) ||
        ((this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }),
        this.handleContainerOverflow && this.setContainerStyle(this.state)),
      n
    );
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    n !== -1 &&
      (this.modals.splice(n, 1),
      !this.modals.length &&
        this.handleContainerOverflow &&
        this.removeContainerStyle(this.state),
      this.removeModalAttributes(t));
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t;
  }
}
const Ff = d.createContext(tr ? window : void 0);
Ff.Provider;
function xa() {
  return d.useContext(Ff);
}
const hi = (e, t) =>
  tr
    ? e == null
      ? (t || To()).body
      : (typeof e == "function" && (e = e()),
        e && "current" in e && (e = e.current),
        e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
    : null;
function rh(e, t) {
  const n = xa(),
    [r, l] = d.useState(() => hi(e, n == null ? void 0 : n.document));
  if (!r) {
    const o = hi(e);
    o && l(o);
  }
  return (
    d.useEffect(() => {}, [t, r]),
    d.useEffect(() => {
      const o = hi(e);
      o !== r && l(o);
    }, [e, r]),
    r
  );
}
function lh({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: l,
}) {
  const o = d.useRef(null),
    i = d.useRef(t),
    s = yt(n);
  d.useEffect(() => {
    t ? (i.current = !0) : s(o.current);
  }, [t, s]);
  const u = ko(o, e.ref),
    c = d.cloneElement(e, { ref: u });
  return t ? c : l || (!i.current && r) ? null : c;
}
const oh = [
  "onEnter",
  "onEntering",
  "onEntered",
  "onExit",
  "onExiting",
  "onExited",
  "addEndListener",
  "children",
];
function ih(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function sh(e) {
  let {
      onEnter: t,
      onEntering: n,
      onEntered: r,
      onExit: l,
      onExiting: o,
      onExited: i,
      addEndListener: s,
      children: u,
    } = e,
    c = ih(e, oh);
  const p = d.useRef(null),
    g = ko(p, Ro(u)),
    h = (y) => (k) => {
      y && p.current && y(p.current, k);
    },
    x = d.useCallback(h(t), [t]),
    w = d.useCallback(h(n), [n]),
    S = d.useCallback(h(r), [r]),
    _ = d.useCallback(h(l), [l]),
    m = d.useCallback(h(o), [o]),
    f = d.useCallback(h(i), [i]),
    v = d.useCallback(h(s), [s]);
  return Object.assign(
    {},
    c,
    { nodeRef: p },
    t && { onEnter: x },
    n && { onEntering: w },
    r && { onEntered: S },
    l && { onExit: _ },
    o && { onExiting: m },
    i && { onExited: f },
    s && { addEndListener: v },
    {
      children:
        typeof u == "function"
          ? (y, k) => u(y, Object.assign({}, k, { ref: g }))
          : d.cloneElement(u, { ref: g }),
    }
  );
}
const ah = ["component"];
function uh(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
const ch = d.forwardRef((e, t) => {
  let { component: n } = e,
    r = uh(e, ah);
  const l = sh(r);
  return a.jsx(n, Object.assign({ ref: t }, l));
});
function dh({ in: e, onTransition: t }) {
  const n = d.useRef(null),
    r = d.useRef(!0),
    l = yt(t);
  return (
    Hu(() => {
      if (!n.current) return;
      let o = !1;
      return (
        l({ in: e, element: n.current, initial: r.current, isStale: () => o }),
        () => {
          o = !0;
        }
      );
    }, [e, l]),
    Hu(
      () => (
        (r.current = !1),
        () => {
          r.current = !0;
        }
      ),
      []
    ),
    n
  );
}
function fh({ children: e, in: t, onExited: n, onEntered: r, transition: l }) {
  const [o, i] = d.useState(!t);
  t && o && i(!1);
  const s = dh({
      in: !!t,
      onTransition: (c) => {
        const p = () => {
          c.isStale() ||
            (c.in
              ? r == null || r(c.element, c.initial)
              : (i(!0), n == null || n(c.element)));
        };
        Promise.resolve(l(c)).then(p, (g) => {
          throw (c.in || i(!0), g);
        });
      },
    }),
    u = ko(s, e.ref);
  return o && !t ? null : d.cloneElement(e, { ref: u });
}
function Yu(e, t, n) {
  return e
    ? a.jsx(ch, Object.assign({}, n, { component: e }))
    : t
    ? a.jsx(fh, Object.assign({}, n, { transition: t }))
    : a.jsx(lh, Object.assign({}, n));
}
const ph = [
  "show",
  "role",
  "className",
  "style",
  "children",
  "backdrop",
  "keyboard",
  "onBackdropClick",
  "onEscapeKeyDown",
  "transition",
  "runTransition",
  "backdropTransition",
  "runBackdropTransition",
  "autoFocus",
  "enforceFocus",
  "restoreFocus",
  "restoreFocusOptions",
  "renderDialog",
  "renderBackdrop",
  "manager",
  "container",
  "onShow",
  "onHide",
  "onExit",
  "onExited",
  "onExiting",
  "onEnter",
  "onEntering",
  "onEntered",
];
function mh(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
let vi;
function hh(e) {
  return (
    vi || (vi = new ya({ ownerDocument: e == null ? void 0 : e.document })), vi
  );
}
function vh(e) {
  const t = xa(),
    n = e || hh(t),
    r = d.useRef({ dialog: null, backdrop: null });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: d.useCallback((l) => {
      r.current.dialog = l;
    }, []),
    setBackdropRef: d.useCallback((l) => {
      r.current.backdrop = l;
    }, []),
  });
}
const Bf = d.forwardRef((e, t) => {
  let {
      show: n = !1,
      role: r = "dialog",
      className: l,
      style: o,
      children: i,
      backdrop: s = !0,
      keyboard: u = !0,
      onBackdropClick: c,
      onEscapeKeyDown: p,
      transition: g,
      runTransition: h,
      backdropTransition: x,
      runBackdropTransition: w,
      autoFocus: S = !0,
      enforceFocus: _ = !0,
      restoreFocus: m = !0,
      restoreFocusOptions: f,
      renderDialog: v,
      renderBackdrop: y = (B) => a.jsx("div", Object.assign({}, B)),
      manager: k,
      container: E,
      onShow: j,
      onHide: T = () => {},
      onExit: H,
      onExited: P,
      onExiting: oe,
      onEnter: Ce,
      onEntering: pe,
      onEntered: He,
    } = e,
    Ye = mh(e, ph);
  const ue = xa(),
    J = rh(E),
    N = vh(k),
    O = ym(),
    L = xm(n),
    [A, W] = d.useState(!n),
    b = d.useRef(null);
  d.useImperativeHandle(t, () => N, [N]),
    tr && !L && n && (b.current = mi(ue == null ? void 0 : ue.document)),
    n && A && W(!1);
  const $ = yt(() => {
      if (
        (N.add(),
        (ft.current = lo(document, "keydown", Ze)),
        (Ot.current = lo(document, "focus", () => setTimeout(K), !0)),
        j && j(),
        S)
      ) {
        var B, Sn;
        const rn = mi(
          (B = (Sn = N.dialog) == null ? void 0 : Sn.ownerDocument) != null
            ? B
            : ue == null
            ? void 0
            : ue.document
        );
        N.dialog &&
          rn &&
          !qu(N.dialog, rn) &&
          ((b.current = rn), N.dialog.focus());
      }
    }),
    ye = yt(() => {
      if (
        (N.remove(),
        ft.current == null || ft.current(),
        Ot.current == null || Ot.current(),
        m)
      ) {
        var B;
        (B = b.current) == null || B.focus == null || B.focus(f),
          (b.current = null);
      }
    });
  d.useEffect(() => {
    !n || !J || $();
  }, [n, J, $]),
    d.useEffect(() => {
      A && ye();
    }, [A, ye]),
    th(() => {
      ye();
    });
  const K = yt(() => {
      if (!_ || !O() || !N.isTopModal()) return;
      const B = mi(ue == null ? void 0 : ue.document);
      N.dialog && B && !qu(N.dialog, B) && N.dialog.focus();
    }),
    Ge = yt((B) => {
      B.target === B.currentTarget && (c == null || c(B), s === !0 && T());
    }),
    Ze = yt((B) => {
      u &&
        $m(B) &&
        N.isTopModal() &&
        (p == null || p(B), B.defaultPrevented || T());
    }),
    Ot = d.useRef(),
    ft = d.useRef(),
    Ne = (...B) => {
      W(!0), P == null || P(...B);
    };
  if (!J) return null;
  const me = Object.assign(
    {
      role: r,
      ref: N.setDialogRef,
      "aria-modal": r === "dialog" ? !0 : void 0,
    },
    Ye,
    { style: o, className: l, tabIndex: -1 }
  );
  let pt = v
    ? v(me)
    : a.jsx(
        "div",
        Object.assign({}, me, {
          children: d.cloneElement(i, { role: "document" }),
        })
      );
  pt = Yu(g, h, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: H,
    onExiting: oe,
    onExited: Ne,
    onEnter: Ce,
    onEntering: pe,
    onEntered: He,
    children: pt,
  });
  let mt = null;
  return (
    s &&
      ((mt = y({ ref: N.setBackdropRef, onClick: Ge })),
      (mt = Yu(x, w, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: mt,
      }))),
    a.jsx(a.Fragment, {
      children: An.createPortal(a.jsxs(a.Fragment, { children: [mt, pt] }), J),
    })
  );
});
Bf.displayName = "Modal";
const Uf = Object.assign(Bf, { Manager: ya }),
  gh = { [nt]: "show", [xt]: "show" },
  Mo = d.forwardRef(
    (
      {
        className: e,
        children: t,
        transitionClasses: n = {},
        onEnter: r,
        ...l
      },
      o
    ) => {
      const i = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          ...l,
        },
        s = d.useCallback(
          (u, c) => {
            ga(u), r == null || r(u, c);
          },
          [r]
        );
      return a.jsx(Oo, {
        ref: o,
        addEndListener: _o,
        ...i,
        onEnter: s,
        childRef: Ro(t),
        children: (u, c) =>
          d.cloneElement(t, {
            ...c,
            className: M("fade", e, t.props.className, gh[u], n[u]),
          }),
      });
    }
  );
Mo.displayName = "Fade";
const Hf = d.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, l) => (
    (t = z(t, "offcanvas-body")), a.jsx(n, { ref: l, className: M(e, t), ...r })
  )
);
Hf.displayName = "OffcanvasBody";
const yh = { [nt]: "show", [xt]: "show" },
  Wf = d.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        in: r = !1,
        mountOnEnter: l = !1,
        unmountOnExit: o = !1,
        appear: i = !1,
        ...s
      },
      u
    ) => (
      (e = z(e, "offcanvas")),
      a.jsx(Oo, {
        ref: u,
        addEndListener: _o,
        in: r,
        mountOnEnter: l,
        unmountOnExit: o,
        appear: i,
        ...s,
        childRef: Ro(n),
        children: (c, p) =>
          d.cloneElement(n, {
            ...p,
            className: M(
              t,
              n.props.className,
              (c === nt || c === Wr) && `${e}-toggling`,
              yh[c]
            ),
          }),
      })
    )
  );
Wf.displayName = "OffcanvasToggling";
const wa = d.createContext({ onHide() {} }),
  xh = {
    "aria-label": fi.string,
    onClick: fi.func,
    variant: fi.oneOf(["white"]),
  },
  Sa = d.forwardRef(
    ({ className: e, variant: t, "aria-label": n = "Close", ...r }, l) =>
      a.jsx("button", {
        ref: l,
        type: "button",
        className: M("btn-close", t && `btn-close-${t}`, e),
        "aria-label": n,
        ...r,
      })
  );
Sa.displayName = "CloseButton";
Sa.propTypes = xh;
const Vf = d.forwardRef(
    (
      {
        closeLabel: e = "Close",
        closeVariant: t,
        closeButton: n = !1,
        onHide: r,
        children: l,
        ...o
      },
      i
    ) => {
      const s = d.useContext(wa),
        u = bt(() => {
          s == null || s.onHide(), r == null || r();
        });
      return a.jsxs("div", {
        ref: i,
        ...o,
        children: [
          l,
          n && a.jsx(Sa, { "aria-label": e, variant: t, onClick: u }),
        ],
      });
    }
  ),
  Kf = d.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        closeLabel: n = "Close",
        closeButton: r = !1,
        ...l
      },
      o
    ) => (
      (e = z(e, "offcanvas-header")),
      a.jsx(Vf, {
        ref: o,
        ...l,
        className: M(t, e),
        closeLabel: n,
        closeButton: r,
      })
    )
  );
Kf.displayName = "OffcanvasHeader";
const Lo = (e) =>
    d.forwardRef((t, n) =>
      a.jsx("div", { ...t, ref: n, className: M(t.className, e) })
    ),
  wh = Lo("h5"),
  Qf = d.forwardRef(
    ({ className: e, bsPrefix: t, as: n = wh, ...r }, l) => (
      (t = z(t, "offcanvas-title")),
      a.jsx(n, { ref: l, className: M(e, t), ...r })
    )
  );
Qf.displayName = "OffcanvasTitle";
function Sh(e, t) {
  return e.classList
    ? e.classList.contains(t)
    : (" " + (e.className.baseVal || e.className) + " ").indexOf(
        " " + t + " "
      ) !== -1;
}
function Eh(e, t) {
  e.classList
    ? e.classList.add(t)
    : Sh(e, t) ||
      (typeof e.className == "string"
        ? (e.className = e.className + " " + t)
        : e.setAttribute(
            "class",
            ((e.className && e.className.baseVal) || "") + " " + t
          ));
}
function Gu(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function Ch(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == "string"
    ? (e.className = Gu(e.className, t))
    : e.setAttribute(
        "class",
        Gu((e.className && e.className.baseVal) || "", t)
      );
}
const Nn = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler",
};
class qf extends ya {
  adjustAndStore(t, n, r) {
    const l = n.style[t];
    (n.dataset[t] = l), Ct(n, { [t]: `${parseFloat(Ct(n, t)) + r}px` });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], Ct(n, { [t]: r }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if ((Eh(n, "modal-open"), !t.scrollBarWidth)) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      l = this.isRTL ? "marginLeft" : "marginRight";
    an(n, Nn.FIXED_CONTENT).forEach((o) =>
      this.adjustAndStore(r, o, t.scrollBarWidth)
    ),
      an(n, Nn.STICKY_CONTENT).forEach((o) =>
        this.adjustAndStore(l, o, -t.scrollBarWidth)
      ),
      an(n, Nn.NAVBAR_TOGGLER).forEach((o) =>
        this.adjustAndStore(l, o, t.scrollBarWidth)
      );
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    Ch(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      l = this.isRTL ? "marginLeft" : "marginRight";
    an(n, Nn.FIXED_CONTENT).forEach((o) => this.restore(r, o)),
      an(n, Nn.STICKY_CONTENT).forEach((o) => this.restore(l, o)),
      an(n, Nn.NAVBAR_TOGGLER).forEach((o) => this.restore(l, o));
  }
}
let gi;
function Xf(e) {
  return gi || (gi = new qf(e)), gi;
}
function Nh(e) {
  return a.jsx(Wf, { ...e });
}
function kh(e) {
  return a.jsx(Mo, { ...e });
}
const Yf = d.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      "aria-labelledby": r,
      placement: l = "start",
      responsive: o,
      show: i = !1,
      backdrop: s = !0,
      keyboard: u = !0,
      scroll: c = !1,
      onEscapeKeyDown: p,
      onShow: g,
      onHide: h,
      container: x,
      autoFocus: w = !0,
      enforceFocus: S = !0,
      restoreFocus: _ = !0,
      restoreFocusOptions: m,
      onEntered: f,
      onExit: v,
      onExiting: y,
      onEnter: k,
      onEntering: E,
      onExited: j,
      backdropClassName: T,
      manager: H,
      renderStaticNode: P = !1,
      ...oe
    },
    Ce
  ) => {
    const pe = d.useRef();
    e = z(e, "offcanvas");
    const [He, Ye] = d.useState(!1),
      ue = bt(h),
      J = bm(o || "xs", "up");
    d.useEffect(() => {
      Ye(o ? i && !J : i);
    }, [i, o, J]);
    const N = d.useMemo(() => ({ onHide: ue }), [ue]);
    function O() {
      return (
        H ||
        (c
          ? (pe.current ||
              (pe.current = new qf({ handleContainerOverflow: !1 })),
            pe.current)
          : Xf())
      );
    }
    const L = ($, ...ye) => {
        $ && ($.style.visibility = "visible"), k == null || k($, ...ye);
      },
      A = ($, ...ye) => {
        $ && ($.style.visibility = ""), j == null || j(...ye);
      },
      W = d.useCallback(
        ($) => a.jsx("div", { ...$, className: M(`${e}-backdrop`, T) }),
        [T, e]
      ),
      b = ($) =>
        a.jsx("div", {
          ...$,
          ...oe,
          className: M(t, o ? `${e}-${o}` : e, `${e}-${l}`),
          "aria-labelledby": r,
          children: n,
        });
    return a.jsxs(a.Fragment, {
      children: [
        !He && (o || P) && b({}),
        a.jsx(wa.Provider, {
          value: N,
          children: a.jsx(Uf, {
            show: He,
            ref: Ce,
            backdrop: s,
            container: x,
            keyboard: u,
            autoFocus: w,
            enforceFocus: S && !c,
            restoreFocus: _,
            restoreFocusOptions: m,
            onEscapeKeyDown: p,
            onShow: g,
            onHide: ue,
            onEnter: L,
            onEntering: E,
            onEntered: f,
            onExit: v,
            onExiting: y,
            onExited: A,
            manager: O(),
            transition: Nh,
            backdropTransition: kh,
            renderBackdrop: W,
            renderDialog: b,
          }),
        }),
      ],
    });
  }
);
Yf.displayName = "Offcanvas";
const jh = Object.assign(Yf, { Body: Hf, Header: Kf, Title: Qf }),
  Gf = d.forwardRef(({ onHide: e, ...t }, n) => {
    const r = d.useContext(er),
      l = bt(() => {
        r == null || r.onToggle == null || r.onToggle(), e == null || e();
      });
    return a.jsx(jh, {
      ref: n,
      show: !!(r != null && r.expanded),
      ...t,
      renderStaticNode: !0,
      onHide: l,
    });
  });
Gf.displayName = "NavbarOffcanvas";
const Zf = d.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "span", ...r }, l) => (
    (t = z(t, "navbar-text")), a.jsx(n, { ref: l, className: M(e, t), ...r })
  )
);
Zf.displayName = "NavbarText";
const Jf = d.forwardRef((e, t) => {
  const {
      bsPrefix: n,
      expand: r = !0,
      variant: l = "light",
      bg: o,
      fixed: i,
      sticky: s,
      className: u,
      as: c = "nav",
      expanded: p,
      onToggle: g,
      onSelect: h,
      collapseOnSelect: x = !1,
      ...w
    } = No(e, { expanded: "onToggle" }),
    S = z(n, "navbar"),
    _ = d.useCallback(
      (...v) => {
        h == null || h(...v), x && p && (g == null || g(!1));
      },
      [h, x, p, g]
    );
  w.role === void 0 && c !== "nav" && (w.role = "navigation");
  let m = `${S}-expand`;
  typeof r == "string" && (m = `${m}-${r}`);
  const f = d.useMemo(
    () => ({
      onToggle: () => (g == null ? void 0 : g(!p)),
      bsPrefix: S,
      expanded: !!p,
      expand: r,
    }),
    [S, p, r, g]
  );
  return a.jsx(er.Provider, {
    value: f,
    children: a.jsx(no.Provider, {
      value: _,
      children: a.jsx(c, {
        ref: t,
        ...w,
        className: M(
          u,
          S,
          r && m,
          l && `${S}-${l}`,
          o && `bg-${o}`,
          s && `sticky-${s}`,
          i && `fixed-${i}`
        ),
      }),
    }),
  });
});
Jf.displayName = "Navbar";
const gl = Object.assign(Jf, {
  Brand: Tf,
  Collapse: Df,
  Offcanvas: Gf,
  Text: Zf,
  Toggle: $f,
});
function Th() {
  const [e, t] = d.useState(0),
    [n, r] = d.useState(!1),
    l = (o) => {
      t(o), r(o === 5);
    };
  return a.jsx(a.Fragment, {
    children: a.jsx("header", {
      id: "header",
      className: "header",
      children: a.jsx("div", {
        className: "header-content",
        children: a.jsx(gl, {
          expand: "lg",
          className: "w-100",
          children: a.jsxs(gf, {
            fluid: !0,
            className: "p-0",
            children: [
              a.jsx(gl.Brand, {
                href: "#home",
                children: a.jsx("div", {
                  className: "logo-col",
                  children: a.jsx("img", {
                    src: Yp,
                    alt: "Logo",
                    className: "logo-image-header",
                  }),
                }),
              }),
              a.jsx(gl.Toggle, { "aria-controls": "basic-navbar-nav" }),
              a.jsx(gl.Collapse, {
                id: "basic-navbar-nav",
                className: "justify-content-end",
                children: a.jsx(Pt, {
                  className: "ml-auto",
                  children: a.jsxs("ul", {
                    className: "nav-list",
                    children: [
                      a.jsx(Pt.Link, {
                        href: "#home",
                        children: a.jsx("li", {
                          className: "nav-item",
                          children: a.jsx("a", {
                            href: "#home",
                            className: e === 0 ? "focused" : "",
                            onClick: () => l(0),
                            children: "Home",
                          }),
                        }),
                      }),
                      a.jsx(Pt.Link, {
                        href: "#depoimentos",
                        children: a.jsx("li", {
                          className: "nav-item",
                          children: a.jsx("a", {
                            href: "#depoimentos",
                            className: e === 1 ? "focused" : "",
                            onClick: () => l(1),
                            children: "Depoimentos",
                          }),
                        }),
                      }),
                      a.jsx(Pt.Link, {
                        href: "#servicos",
                        children: a.jsx("li", {
                          className: "nav-item",
                          children: a.jsx("a", {
                            href: "#servicos",
                            className: e === 2 ? "focused" : "",
                            onClick: () => l(2),
                            children: "Serviços",
                          }),
                        }),
                      }),
                      a.jsx(Pt.Link, {
                        href: "#comoescolher",
                        children: a.jsx("li", {
                          className: "nav-item",
                          children: a.jsx("a", {
                            href: "#comoescolher",
                            className: e === 3 ? "focused" : "",
                            onClick: () => l(3),
                            children: "Qual Escolher",
                          }),
                        }),
                      }),
                      a.jsx(Pt.Link, {
                        href: "#comoagendar",
                        children: a.jsx("li", {
                          className: "nav-item",
                          children: a.jsx("a", {
                            href: "#comoagendar",
                            className: e === 4 ? "focused" : "",
                            onClick: () => l(4),
                            children: "Como Agendar",
                          }),
                        }),
                      }),
                      a.jsx(Pt.Link, {
                        href: "#sobremim",
                        children: a.jsx("li", {
                          className: "nav-item",
                          children: a.jsx("a", {
                            href: "#sobremim",
                            className: e === 5 ? "focused" : "",
                            onClick: () => l(5),
                            children: "Sobre Mim",
                          }),
                        }),
                      }),
                      a.jsx(Pt.Link, {
                        href: "#faq",
                        children: a.jsx("li", {
                          className: "nav-item",
                          children: a.jsx("a", {
                            href: "#faq",
                            className: e === 5 ? "focused" : "",
                            onClick: () => l(5),
                            children: "FAQ",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    }),
  });
}
function Rh({ as: e, bsPrefix: t, className: n, ...r }) {
  t = z(t, "col");
  const l = mf(),
    o = hf(),
    i = [],
    s = [];
  return (
    l.forEach((u) => {
      const c = r[u];
      delete r[u];
      let p, g, h;
      typeof c == "object" && c != null
        ? ({ span: p, offset: g, order: h } = c)
        : (p = c);
      const x = u !== o ? `-${u}` : "";
      p && i.push(p === !0 ? `${t}${x}` : `${t}${x}-${p}`),
        h != null && s.push(`order${x}-${h}`),
        g != null && s.push(`offset${x}-${g}`);
    }),
    [
      { ...r, className: M(n, ...i, ...s) },
      { as: e, bsPrefix: t, spans: i },
    ]
  );
}
const Le = d.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: l = "div", bsPrefix: o, spans: i }] =
    Rh(e);
  return a.jsx(l, { ...r, ref: t, className: M(n, !i.length && o) });
});
Le.displayName = "Col";
const de = d.forwardRef(
  ({ bsPrefix: e, className: t, as: n = "div", ...r }, l) => {
    const o = z(e, "row"),
      i = mf(),
      s = hf(),
      u = `${o}-cols`,
      c = [];
    return (
      i.forEach((p) => {
        const g = r[p];
        delete r[p];
        let h;
        g != null && typeof g == "object" ? ({ cols: h } = g) : (h = g);
        const x = p !== s ? `-${p}` : "";
        h != null && c.push(`${u}${x}-${h}`);
      }),
      a.jsx(n, { ref: l, ...r, className: M(t, o, ...c) })
    );
  }
);
de.displayName = "Row";
function _h() {
  return a.jsx("div", {
    className: "dobra-um",
    children: a.jsx("div", {
      className: "col-12 col-sm-10 mx-auto",
      children: a.jsxs(de, {
        id: "home",
        className: "justify-content-center",
        children: [
          a.jsxs(Le, {
            xs: 12,
            md: 5,
            className:
              "m-0 p-0 d-flex flex-column justify-content-center text-center",
            children: [
              a.jsxs("div", {
                children: [
                  a.jsxs("h1", {
                    className: "h1-desktop",
                    children: [
                      "Tarot: o GPS espiritual ",
                      a.jsx("br", {}),
                      "da sua vida! ",
                      a.jsx("br", {}),
                    ],
                  }),
                  a.jsx("div", {
                    children: a.jsxs("p", {
                      className: "pt-4 pb-4 fw-bold",
                      children: [
                        "Tá sentindo que algo não vai pra frente?",
                        a.jsx("br", {}),
                        " Parece que você está andando em círculos?",
                        a.jsx("br", {}),
                        "Se você quer saber o porquê ou como resolver,",
                        a.jsx("br", {}),
                        " vamos criar uma leitura de tarot que encaixe",
                        a.jsx("br", {}),
                        " exatamente no que você tá vivendo.",
                      ],
                    }),
                  }),
                ],
              }),
              a.jsx(Le, {
                xs: 12,
                className: "pt-2 d-flex",
                children: a.jsx("div", {
                  className: "w-100",
                  children: a.jsx("a", {
                    href: "https://web.whatsapp.com/",
                    className: "button ",
                    target: "_blank",
                    children: "Agendamento",
                  }),
                }),
              }),
            ],
          }),
          a.jsx(Le, { md: 1 }),
          a.jsx(Le, {
            xs: 12,
            md: 5,
            className: "d-flex align-items-center justify-content-center",
            children: a.jsx("div", {
              className: "video-wrapper",
              children: a.jsx("iframe", {
                src: "https://www.youtube-nocookie.com/embed/K5YUJK1HhC4?modestbranding=1&controls=0&rel=0&iv_load_policy=3&showinfo=0",
                className: "video-iframe",
                allowFullScreen: !0,
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
function Oh(e, t) {
  const n = d.useRef(!0);
  d.useEffect(() => {
    if (n.current) {
      n.current = !1;
      return;
    }
    return e();
  }, t);
}
function Mh() {
  const e = d.useRef(!0),
    t = d.useRef(() => e.current);
  return (
    d.useEffect(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    t.current
  );
}
function Lh(e) {
  const t = d.useRef(e);
  return (t.current = e), t;
}
function bf(e) {
  const t = Lh(e);
  d.useEffect(() => () => t.current(), []);
}
const ys = 2 ** 31 - 1;
function e1(e, t, n) {
  const r = n - Date.now();
  e.current = r <= ys ? setTimeout(t, r) : setTimeout(() => e1(e, t, n), ys);
}
function Ph() {
  const e = Mh(),
    t = d.useRef();
  return (
    bf(() => clearTimeout(t.current)),
    d.useMemo(() => {
      const n = () => clearTimeout(t.current);
      function r(l, o = 0) {
        e() &&
          (n(),
          o <= ys ? (t.current = setTimeout(l, o)) : e1(t, l, Date.now() + o));
      }
      return { set: r, clear: n, handleRef: t };
    }, [])
  );
}
const t1 = d.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, l) => (
    (t = z(t, "carousel-caption")),
    a.jsx(n, { ref: l, className: M(e, t), ...r })
  )
);
t1.displayName = "CarouselCaption";
const n1 = d.forwardRef(
  ({ as: e = "div", bsPrefix: t, className: n, ...r }, l) => {
    const o = M(n, z(t, "carousel-item"));
    return a.jsx(e, { ref: l, ...r, className: o });
  }
);
n1.displayName = "CarouselItem";
function Zu(e, t) {
  let n = 0;
  return d.Children.map(e, (r) => (d.isValidElement(r) ? t(r, n++) : r));
}
function Ih(e, t) {
  let n = 0;
  d.Children.forEach(e, (r) => {
    d.isValidElement(r) && t(r, n++);
  });
}
const zh = 40;
function Dh(e) {
  if (!e || !e.style || !e.parentNode || !e.parentNode.style) return !1;
  const t = getComputedStyle(e);
  return (
    t.display !== "none" &&
    t.visibility !== "hidden" &&
    getComputedStyle(e.parentNode).display !== "none"
  );
}
const r1 = d.forwardRef(({ defaultActiveIndex: e = 0, ...t }, n) => {
  const {
      as: r = "div",
      bsPrefix: l,
      slide: o = !0,
      fade: i = !1,
      controls: s = !0,
      indicators: u = !0,
      indicatorLabels: c = [],
      activeIndex: p,
      onSelect: g,
      onSlide: h,
      onSlid: x,
      interval: w = 5e3,
      keyboard: S = !0,
      onKeyDown: _,
      pause: m = "hover",
      onMouseOver: f,
      onMouseOut: v,
      wrap: y = !0,
      touch: k = !0,
      onTouchStart: E,
      onTouchMove: j,
      onTouchEnd: T,
      prevIcon: H = a.jsx("span", {
        "aria-hidden": "true",
        className: "carousel-control-prev-icon",
      }),
      prevLabel: P = "Previous",
      nextIcon: oe = a.jsx("span", {
        "aria-hidden": "true",
        className: "carousel-control-next-icon",
      }),
      nextLabel: Ce = "Next",
      variant: pe,
      className: He,
      children: Ye,
      ...ue
    } = No({ defaultActiveIndex: e, ...t }, { activeIndex: "onSelect" }),
    J = z(l, "carousel"),
    N = vf(),
    O = d.useRef(null),
    [L, A] = d.useState("next"),
    [W, b] = d.useState(!1),
    [$, ye] = d.useState(!1),
    [K, Ge] = d.useState(p || 0);
  d.useEffect(() => {
    !$ &&
      p !== K &&
      (O.current ? A(O.current) : A((p || 0) > K ? "next" : "prev"),
      o && ye(!0),
      Ge(p || 0));
  }, [p, $, K, o]),
    d.useEffect(() => {
      O.current && (O.current = null);
    });
  let Ze = 0,
    Ot;
  Ih(Ye, (I, Q) => {
    ++Ze, Q === p && (Ot = I.props.interval);
  });
  const ft = Af(Ot),
    Ne = d.useCallback(
      (I) => {
        if ($) return;
        let Q = K - 1;
        if (Q < 0) {
          if (!y) return;
          Q = Ze - 1;
        }
        (O.current = "prev"), g == null || g(Q, I);
      },
      [$, K, g, y, Ze]
    ),
    me = bt((I) => {
      if ($) return;
      let Q = K + 1;
      if (Q >= Ze) {
        if (!y) return;
        Q = 0;
      }
      (O.current = "next"), g == null || g(Q, I);
    }),
    pt = d.useRef();
  d.useImperativeHandle(n, () => ({ element: pt.current, prev: Ne, next: me }));
  const mt = bt(() => {
      !document.hidden && Dh(pt.current) && (N ? Ne() : me());
    }),
    B = L === "next" ? "start" : "end";
  Oh(() => {
    o || (h == null || h(K, B), x == null || x(K, B));
  }, [K]);
  const Sn = `${J}-item-${L}`,
    rn = `${J}-item-${B}`,
    Io = d.useCallback(
      (I) => {
        ga(I), h == null || h(K, B);
      },
      [h, K, B]
    ),
    zo = d.useCallback(() => {
      ye(!1), x == null || x(K, B);
    }, [x, K, B]),
    Do = d.useCallback(
      (I) => {
        if (S && !/input|textarea/i.test(I.target.tagName))
          switch (I.key) {
            case "ArrowLeft":
              I.preventDefault(), N ? me(I) : Ne(I);
              return;
            case "ArrowRight":
              I.preventDefault(), N ? Ne(I) : me(I);
              return;
          }
        _ == null || _(I);
      },
      [S, _, Ne, me, N]
    ),
    Ao = d.useCallback(
      (I) => {
        m === "hover" && b(!0), f == null || f(I);
      },
      [m, f]
    ),
    $o = d.useCallback(
      (I) => {
        b(!1), v == null || v(I);
      },
      [v]
    ),
    Gr = d.useRef(0),
    ln = d.useRef(0),
    Zr = Ph(),
    U = d.useCallback(
      (I) => {
        (Gr.current = I.touches[0].clientX),
          (ln.current = 0),
          m === "hover" && b(!0),
          E == null || E(I);
      },
      [m, E]
    ),
    Mt = d.useCallback(
      (I) => {
        I.touches && I.touches.length > 1
          ? (ln.current = 0)
          : (ln.current = I.touches[0].clientX - Gr.current),
          j == null || j(I);
      },
      [j]
    ),
    Jr = d.useCallback(
      (I) => {
        if (k) {
          const Q = ln.current;
          Math.abs(Q) > zh && (Q > 0 ? Ne(I) : me(I));
        }
        m === "hover" &&
          Zr.set(() => {
            b(!1);
          }, w || void 0),
          T == null || T(I);
      },
      [k, m, Ne, me, Zr, w, T]
    ),
    Ta = w != null && !W && !$,
    Fo = d.useRef();
  d.useEffect(() => {
    var I, Q;
    if (!Ta) return;
    const ht = N ? Ne : me;
    return (
      (Fo.current = window.setInterval(
        document.visibilityState ? mt : ht,
        (I = (Q = ft.current) != null ? Q : w) != null ? I : void 0
      )),
      () => {
        Fo.current !== null && clearInterval(Fo.current);
      }
    );
  }, [Ta, Ne, me, ft, w, mt, N]);
  const Ra = d.useMemo(
    () =>
      u &&
      Array.from({ length: Ze }, (I, Q) => (ht) => {
        g == null || g(Q, ht);
      }),
    [u, Ze, g]
  );
  return a.jsxs(r, {
    ref: pt,
    ...ue,
    onKeyDown: Do,
    onMouseOver: Ao,
    onMouseOut: $o,
    onTouchStart: U,
    onTouchMove: Mt,
    onTouchEnd: Jr,
    className: M(He, J, o && "slide", i && `${J}-fade`, pe && `${J}-${pe}`),
    children: [
      u &&
        a.jsx("div", {
          className: `${J}-indicators`,
          children: Zu(Ye, (I, Q) =>
            a.jsx(
              "button",
              {
                type: "button",
                "data-bs-target": "",
                "aria-label": c != null && c.length ? c[Q] : `Slide ${Q + 1}`,
                className: Q === K ? "active" : void 0,
                onClick: Ra ? Ra[Q] : void 0,
                "aria-current": Q === K,
              },
              Q
            )
          ),
        }),
      a.jsx("div", {
        className: `${J}-inner`,
        children: Zu(Ye, (I, Q) => {
          const ht = Q === K;
          return o
            ? a.jsx(Oo, {
                in: ht,
                onEnter: ht ? Io : void 0,
                onEntered: ht ? zo : void 0,
                addEndListener: _o,
                children: (nr, C1) =>
                  d.cloneElement(I, {
                    ...C1,
                    className: M(
                      I.props.className,
                      ht && nr !== "entered" && Sn,
                      (nr === "entered" || nr === "exiting") && "active",
                      (nr === "entering" || nr === "exiting") && rn
                    ),
                  }),
              })
            : d.cloneElement(I, {
                className: M(I.props.className, ht && "active"),
              });
        }),
      }),
      s &&
        a.jsxs(a.Fragment, {
          children: [
            (y || p !== 0) &&
              a.jsxs(ro, {
                className: `${J}-control-prev`,
                onClick: Ne,
                children: [
                  H,
                  P &&
                    a.jsx("span", {
                      className: "visually-hidden",
                      children: P,
                    }),
                ],
              }),
            (y || p !== Ze - 1) &&
              a.jsxs(ro, {
                className: `${J}-control-next`,
                onClick: me,
                children: [
                  oe,
                  Ce &&
                    a.jsx("span", {
                      className: "visually-hidden",
                      children: Ce,
                    }),
                ],
              }),
          ],
        }),
    ],
  });
});
r1.displayName = "Carousel";
const yi = Object.assign(r1, { Caption: t1, Item: n1 }),
  Ea = d.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, l) => (
      (t = z(t, "card-body")), a.jsx(n, { ref: l, className: M(e, t), ...r })
    )
  );
Ea.displayName = "CardBody";
const l1 = d.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, l) => (
    (t = z(t, "card-footer")), a.jsx(n, { ref: l, className: M(e, t), ...r })
  )
);
l1.displayName = "CardFooter";
const o1 = d.forwardRef(
  ({ bsPrefix: e, className: t, as: n = "div", ...r }, l) => {
    const o = z(e, "card-header"),
      i = d.useMemo(() => ({ cardHeaderBsPrefix: o }), [o]);
    return a.jsx(va.Provider, {
      value: i,
      children: a.jsx(n, { ref: l, ...r, className: M(t, o) }),
    });
  }
);
o1.displayName = "CardHeader";
const i1 = d.forwardRef(
  ({ bsPrefix: e, className: t, variant: n, as: r = "img", ...l }, o) => {
    const i = z(e, "card-img");
    return a.jsx(r, { ref: o, className: M(n ? `${i}-${n}` : i, t), ...l });
  }
);
i1.displayName = "CardImg";
const s1 = d.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, l) => (
    (t = z(t, "card-img-overlay")),
    a.jsx(n, { ref: l, className: M(e, t), ...r })
  )
);
s1.displayName = "CardImgOverlay";
const a1 = d.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "a", ...r }, l) => (
    (t = z(t, "card-link")), a.jsx(n, { ref: l, className: M(e, t), ...r })
  )
);
a1.displayName = "CardLink";
const Ah = Lo("h6"),
  u1 = d.forwardRef(
    ({ className: e, bsPrefix: t, as: n = Ah, ...r }, l) => (
      (t = z(t, "card-subtitle")),
      a.jsx(n, { ref: l, className: M(e, t), ...r })
    )
  );
u1.displayName = "CardSubtitle";
const c1 = d.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "p", ...r }, l) => (
    (t = z(t, "card-text")), a.jsx(n, { ref: l, className: M(e, t), ...r })
  )
);
c1.displayName = "CardText";
const $h = Lo("h5"),
  d1 = d.forwardRef(
    ({ className: e, bsPrefix: t, as: n = $h, ...r }, l) => (
      (t = z(t, "card-title")), a.jsx(n, { ref: l, className: M(e, t), ...r })
    )
  );
d1.displayName = "CardTitle";
const f1 = d.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      bg: n,
      text: r,
      border: l,
      body: o = !1,
      children: i,
      as: s = "div",
      ...u
    },
    c
  ) => {
    const p = z(e, "card");
    return a.jsx(s, {
      ref: c,
      ...u,
      className: M(t, p, n && `bg-${n}`, r && `text-${r}`, l && `border-${l}`),
      children: o ? a.jsx(Ea, { children: i }) : i,
    });
  }
);
f1.displayName = "Card";
const It = Object.assign(f1, {
    Img: i1,
    Title: d1,
    Subtitle: u1,
    Body: Ea,
    Link: a1,
    Text: c1,
    Header: o1,
    Footer: l1,
    ImgOverlay: s1,
  }),
  Ml = "./assets/professional-smiling-woman-Cf-uUN_6.jpg";
function Fh() {
  const e = [
    { name: "Cliente 1", message: "Excelente serviço!", imgSrc: Ml },
    { name: "Cliente 2", message: "Mudou minha vida!", imgSrc: Ml },
    { name: "Cliente 3", message: "Altamente recomendável!", imgSrc: Ml },
  ];
  return a.jsx(a.Fragment, {
    children: a.jsx("div", {
      id: "depoimentos",
      children: a.jsx("div", {
        className: "dobra",
        children: a.jsx("div", {
          className: "col-12 col-sm-10 mx-auto",
          children: a.jsxs(de, {
            className: "align-content-center",
            children: [
              a.jsx(de, {
                className: "text-titulo g-0 text-center",
                children: a.jsx("h2", {
                  className: "pb-4 text-titulo",
                  children: "Depoimentos de Clientes",
                }),
              }),
              a.jsxs(yi, {
                interval: null,
                children: [
                  a.jsx(yi.Item, {
                    children: a.jsx(de, {
                      className: "justify-content-center mx-2",
                      children: e.map((t, n) =>
                        a.jsx(
                          "div",
                          {
                            className:
                              "col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-2 h-100",
                            children: a.jsx(It, {
                              className: "testimonial-card h-100",
                              children: a.jsxs(It.Body, {
                                className: "d-flex align-items-center",
                                children: [
                                  a.jsx("div", {
                                    className: "testimonial-image",
                                    children: a.jsx("img", {
                                      src: t.imgSrc,
                                      alt: `Imagem de ${t.name}`,
                                      className: "circle-image",
                                    }),
                                  }),
                                  a.jsxs("div", {
                                    className: "testimonial-content ms-3",
                                    children: [
                                      a.jsx(It.Text, {
                                        className: "testimonial-message",
                                        children: t.message,
                                      }),
                                      a.jsx(It.Title, {
                                        className: "testimonial-name text-end",
                                        children: t.name,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          },
                          n
                        )
                      ),
                    }),
                  }),
                  a.jsx(yi.Item, {
                    children: a.jsx(de, {
                      className: "justify-content-center mx-2",
                      children: e.map((t, n) =>
                        a.jsx(
                          "div",
                          {
                            className:
                              "col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-2 h-100",
                            children: a.jsxs(It, {
                              className: "h-100",
                              children: [
                                a.jsx("div", {
                                  className: "image-circle-container",
                                  children: a.jsx("img", {
                                    src: t.imgSrc,
                                    alt: `Imagem de ${t.name}`,
                                    className: "circle-image",
                                  }),
                                }),
                                a.jsxs(It.Body, {
                                  className: "text-center",
                                  children: [
                                    a.jsx(It.Title, { children: t.name }),
                                    a.jsx(It.Text, { children: t.message }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          n
                        )
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  });
}
const Bh =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2059.23%2057.71'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23e06900;}%3c/style%3e%3c/defs%3e%3ctitle%3e847550_45093-O4HX7J%3c/title%3e%3cg%20id='Objects'%3e%3cpath%20class='cls-1'%20d='M58.48,26.12c.07-3.32-3.27-5.86-6.18-6.69-3.26-.93-9.59.66-12.26-2C37.65,12.64,40.19-.15,32.48,0c-3.56.07-5.95,4.53-7.32,7.21a39,39,0,0,0-3.71,10.85,1.14,1.14,0,0,0-.62-.18c-5.4-.08-15.24-4.18-19.19,1.24-3.45,4.73,4.11,11.09,9,14.87C8.33,39.09-.85,49.66,4.4,53.16c6.15,4.1,14.79-6.54,19.39-9.29C30,40.17,35.86,61.52,43.55,56.4,49.77,52.26,47,42,43.44,36.33c4.76-2.39,14.91-4.45,15-10.21M41.05,34.86a1.18,1.18,0,0,0-.25.25,1.07,1.07,0,0,0-.18,1.42,34.91,34.91,0,0,1,3.59,9.69c1,4.09-2.41,9.52-6.45,5.92a35.6,35.6,0,0,1-3.1-3.39C32.59,46.35,28.53,40,24.43,41c-5.15,1.25-9.46,6.76-13.81,9.49-3.6,2.25-5.15-2-3.55-4.84C8,44.05,9,42.52,10,41a16.34,16.34,0,0,0,2.37-5.63l1.11.88a.43.43,0,0,0,.68-.52,10.7,10.7,0,0,0-1.6-2c0-.3,0-.6,0-.91a.79.79,0,0,0-1.38-.46C7.3,28.6,1.69,24,3.56,20.24c1.28-2.58,7.38-1.28,9.49-1,2.49.36,5.25,1.19,7.78.88a1.22,1.22,0,0,0,1-.9.56.56,0,0,0,.72-.3c1.3-2.46,2.21-5.16,3.41-7.68,1.33-2.81,3.13-7.59,6.36-8.69s3.76,7.54,4,9.22c.29,2.59.42,5.58,2.15,7.66a1,1,0,0,0,1.15.3c3.46,2.75,11.56.9,14.87,3.63,5.93,4.9-10.58,9.54-13.44,11.47'/%3e%3c/g%3e%3c/svg%3e",
  Uh =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2055.15%2053.7'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23e06900;}%3c/style%3e%3c/defs%3e%3ctitle%3e847550_45093-O4HX7J%3c/title%3e%3cg%20id='Objects'%3e%3cpath%20class='cls-1'%20d='M32.92,1.51c-1,1.3-1,3.3-1.32,4.85-.24,1.3-.43,2.6-.59,3.92-2-2.19-3.05-5.34-4.71-7.65a1.24,1.24,0,0,0-2.3.62,30.88,30.88,0,0,0,1.44,12c.21.61,1.25.55,1.19-.16a75.43,75.43,0,0,1-.35-7.75c1.36,2.38,2.69,4.72,5,6.43A1.22,1.22,0,0,0,33.09,13c.3-2,.61-4,1-6,.29-1.6,1-3.33,1-5a1.13,1.13,0,0,0-2.09-.56'/%3e%3cpath%20class='cls-1'%20d='M39.39,25.39c-3,.06-6.08.35-9.13.59,0-.35.09-.7.13-1.06.81-.82,1.65-1.61,2.54-2.35s1.8-1.11,2.2-2.18a.89.89,0,0,0-.62-1.08c-1.19-.49-2.56.44-3.77,1.64a12.07,12.07,0,0,0-.41-3.76.81.81,0,0,0-1.54,0,39.47,39.47,0,0,0-.58,6.74l-.16.2c-.22.26-.43.54-.65.8a28.26,28.26,0,0,0-5.06-3.62c-.41-.2-1,.23-.67.67A20.79,20.79,0,0,0,26,26.24c-2.33.05-7.15-.1-8.11,2a.34.34,0,0,0,.11.45c1.06.7,1.4.34,2.8.16s2.52-.25,3.79-.3a43.4,43.4,0,0,0-3.15,5,.76.76,0,0,0,1.32.77c1.41-2,2.91-4,4.48-5.84l.48,0h.35a23.9,23.9,0,0,0,1,8.75c.18.51,1.07.47,1-.13A43.25,43.25,0,0,1,30,29.44a33.42,33.42,0,0,0,4.88,3.13c1.34.68,2.51-1.31,1.18-2s-2.51-1.39-3.72-2.15a23.34,23.34,0,0,0,7.34-.94,1.06,1.06,0,0,0-.28-2.08'/%3e%3cpath%20class='cls-1'%20d='M32.35,45.36A13.47,13.47,0,0,1,30,42.91c-.57-.8-1.23-1.53-1.77-2.36l0,0a19.77,19.77,0,0,1,2.56.13c1,.06,1.06-1.33.22-1.62-1.22-.42-4.81-1.51-5.29.63-.38,1.65,1.09,3,2,4.22A17.49,17.49,0,0,0,29.26,46c.86.83,3.41,2,1.59,3.34-1.17.84-2.9.78-4.26.7-1.08-.06-2.25-.72-3.32-.57a1,1,0,0,0-.94,1.24c.61,2.19,4.46,2,6.19,1.92,2.73-.2,5.19-1.45,5.45-4.41a3.8,3.8,0,0,0-1.62-2.85'/%3e%3cpath%20class='cls-1'%20d='M15.68,21.83a1.11,1.11,0,0,0-2.16.3c-.14,2.46,0,4.57-1,6.77a4.36,4.36,0,0,1-2.27-4.11c0-.4,0-.78,0-1.09A1.14,1.14,0,0,0,8,23.7a11.25,11.25,0,0,0,0,1.64c-.09,1.94-.53,4.43-2.39,4.55-2.47.17-2.72-4.76-2.82-6.19a.72.72,0,0,0-1.44,0C1,26.82,1.78,31.49,5.58,32c1.9.23,3.06-1.07,3.74-2.77a6.75,6.75,0,0,0,3.41,2.34A1.2,1.2,0,0,0,14.07,31c1.59-2.6,2.49-6.15,1.61-9.15'/%3e%3cpath%20class='cls-1'%20d='M53.65,20.89c-2.13-1.43-5.09-1.17-7.51-.76a1.28,1.28,0,0,0-.88,1.54c.52,3.62-.44,7.29.45,10.89S50,36.42,52.79,35c.9-.43.25-1.74-.65-1.54-1.21.27-2.86.8-3.65-.5a8,8,0,0,1-.75-3.86v-.25a15.31,15.31,0,0,0,5.29-.3c1-.3.88-2.06-.27-2-.91.08-1.8.3-2.72.38-.77.08-1.53.11-2.3.16,0-1.57.13-3.14,0-4.7,1.81-.1,3.53.28,5.36.24a1,1,0,0,0,.5-1.82'/%3e%3c/g%3e%3c/svg%3e",
  Hh =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2061.79%2061.11'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23e06900;}%3c/style%3e%3c/defs%3e%3ctitle%3e847550_45093-O4HX7J%3c/title%3e%3cg%20id='Objects'%3e%3cpath%20class='cls-1'%20d='M38.6,14.77c-9.26-1.87-19,4.57-19.9,14.1s5.39,18.55,15.54,17.66a1,1,0,0,0,.51-.2c15.61,0,20-28.31,3.85-31.56m-4,29.33a1,1,0,0,0-.92.53c-8.08-.82-13.15-6.43-12.91-14.73C21.08,20.6,30.44,15.28,39,17c13.17,2.69,8.14,27.2-4.33,27.08'/%3e%3cpath%20class='cls-1'%20d='M60.42,23.4a1.2,1.2,0,0,0-.7-1.73,20.11,20.11,0,0,0-5.45-1.45c.9-1.55,1.78-3.1,2.61-4.69a1.19,1.19,0,0,0-1-1.76,47.66,47.66,0,0,0-5.73-.07,45.92,45.92,0,0,0,2.41-4.07,1.18,1.18,0,0,0-1-1.75c-2-.26-4.15-.57-6,.26-.07-1-.2-2.06-.32-3-.1-.76-1-1.6-1.76-1a22.21,22.21,0,0,0-4.22,4.1,24.81,24.81,0,0,0-2.45-4.85A1.16,1.16,0,0,0,35,3.12,18.66,18.66,0,0,0,32,8.26C30.8,6.63,29.71,5,28.52,3.37a1.13,1.13,0,0,0-1.93,0,16.85,16.85,0,0,0-2.27,6.9C22.47,9.53,20.66,8.73,18.79,8c-.78-.29-1.46.57-1.28,1.28.47,1.86.89,3.74,1.34,5.61a26.53,26.53,0,0,0-4.38-1.8,1.08,1.08,0,0,0-1.31,1.31c.24,1.19.41,2.37.7,3.52a49.62,49.62,0,0,0-6-.54A1.07,1.07,0,0,0,7,19a54.63,54.63,0,0,0,3.35,4.64,49.91,49.91,0,0,1-7.54.47,1,1,0,0,0-.53,1.94A37.3,37.3,0,0,0,7.69,29.7a25.77,25.77,0,0,0-5.08,1.56c-1.16.5-.4,2,.57,2.11,2.05.23,4.11.4,6.16.58a29.18,29.18,0,0,0-4.42,6,1.18,1.18,0,0,0,1,1.75c1.33.18,2.63.27,3.94.32A27.48,27.48,0,0,0,7.28,46.2a1.19,1.19,0,0,0,1,1.76,31.51,31.51,0,0,0,6-.5c-.39,1.77-.8,3.53-1.18,5.31a1.19,1.19,0,0,0,1.44,1.44,11.7,11.7,0,0,0,5.82-2.28,17.7,17.7,0,0,0,1.51,5.28,1.16,1.16,0,0,0,1.6.42A21.63,21.63,0,0,0,27.17,54a46.9,46.9,0,0,0,1.74,4.41,1.16,1.16,0,0,0,1.83.23,31.66,31.66,0,0,0,3.18-4.77A16.49,16.49,0,0,0,38,58a1.18,1.18,0,0,0,1.73-.7c.27-1.39.46-2.79.61-4.2a17.23,17.23,0,0,0,3.87,2.17c.75.31,1.56-.6,1.31-1.31a14.08,14.08,0,0,1-.56-3.28,24.39,24.39,0,0,0,5.43,1.13,1.12,1.12,0,0,0,1-1.67c-.47-.83-.86-1.69-1.27-2.55a35.75,35.75,0,0,1,3.85-.87,1.14,1.14,0,0,0,1-1.7,29.8,29.8,0,0,0-2-2.84,22.81,22.81,0,0,0,4.14-1,1.18,1.18,0,0,0,.69-1.7,15.61,15.61,0,0,0-3.56-4.79,24.4,24.4,0,0,1,5.12-3.84,1.18,1.18,0,0,0,0-2c-.92-.42-1.81-.85-2.71-1.27a23,23,0,0,0,3.92-4.2m-8,10.81a.62.62,0,0,0-.12.42,1,1,0,0,0,0,1.57A14,14,0,0,1,55,39.43a20,20,0,0,1-4.59.71,1.15,1.15,0,0,0-.8,2A15.42,15.42,0,0,1,52,44.87a26.27,26.27,0,0,1-3.62.8,1.14,1.14,0,0,0-1,1.68c.37.65.69,1.32,1,2A36.16,36.16,0,0,1,44,48.09c-.87-.28-1.47.58-1.34,1.35.17,1.08.22,2.1.36,3.11a23.91,23.91,0,0,1-2.53-1.27c0-.19,0-.37,0-.56.05-1.32-1.7-1.46-2.19-.47a.6.6,0,0,0-.15.78c-.1,1.27-.25,2.54-.44,3.8a12.89,12.89,0,0,1-2.87-3.91,1.18,1.18,0,0,0-2,0A28.78,28.78,0,0,1,30.2,55.4c-.54-1.39-1.06-2.78-1.51-4.2a1.18,1.18,0,0,0-2.14-.28q-5.11,4.92-4.12-1.38a1.18,1.18,0,0,0-2-.83,8.78,8.78,0,0,1-4.76,3c.41-1.81.83-3.61,1.21-5.42a1.18,1.18,0,0,0-1.44-1.43,27.72,27.72,0,0,1-5.28.72,18,18,0,0,1,2.88-3.88,1.19,1.19,0,0,0-.83-2c-1.46,0-2.89-.08-4.32-.2a38.09,38.09,0,0,1,4.74-5.68,1.17,1.17,0,0,0-.81-2c-1.18-.12-2.36-.22-3.54-.31,1.33-.35,2.69-.62,4.15-.88a.83.83,0,0,0-.22-1.62c-.86.07-1.7.16-2.52.28-1.39-1-2.75-2.09-4.08-3.18a37.18,37.18,0,0,0,6.88-.77A1.07,1.07,0,0,0,13,23.63c-1-1.29-2-2.6-3-3.94,1.7.13,3.39.33,5.08.6.7.11,1.63-.47,1.3-1.31a16.26,16.26,0,0,1-.82-3.19c.95.38,1.88.79,2.8,1.24a1.11,1.11,0,0,0,1.55-.72.53.53,0,0,0,.41-.58c-.16-1.69-.39-3.37-.58-5.05,1.71.73,3.42,1.49,5.16,2.17a1.08,1.08,0,0,0,1.34-.76,24.14,24.14,0,0,1,1.44-6c1.25,1.8,2.45,3.62,3.79,5.35.56.72,1.63.21,1.88-.5A20.05,20.05,0,0,1,35.7,6a38.28,38.28,0,0,1,2.14,5A1.17,1.17,0,0,0,40,11.2a19,19,0,0,1,3.11-3.75c.06,1.84,0,3.66,0,5.52a1,1,0,0,0,1.93.27,9.94,9.94,0,0,0,.56-2.88,17.25,17.25,0,0,1,4.08-.31,16.46,16.46,0,0,1-2.87,4.07,1.17,1.17,0,0,0,.82,2c2.13-.05,4.23-.17,6.35-.11q-1.27,2.34-2.64,4.64a1.18,1.18,0,0,0,1,1.76,17.55,17.55,0,0,1,5.17.93,28.86,28.86,0,0,1-4,3.75c-.75.61-.21,1.69.52,2l2.42,1.1a24.13,24.13,0,0,0-3.95,4.06'/%3e%3c/g%3e%3c/svg%3e",
  Ca = d.forwardRef(
    (
      {
        as: e,
        bsPrefix: t,
        variant: n = "primary",
        size: r,
        active: l = !1,
        disabled: o = !1,
        className: i,
        ...s
      },
      u
    ) => {
      const c = z(t, "btn"),
        [p, { tagName: g }] = ha({ tagName: e, disabled: o, ...s }),
        h = g;
      return a.jsx(h, {
        ...p,
        ...s,
        ref: u,
        disabled: o,
        className: M(
          i,
          c,
          l && "active",
          n && `${c}-${n}`,
          r && `${c}-${r}`,
          s.href && o && "disabled"
        ),
      });
    }
  );
Ca.displayName = "Button";
var yl;
function Ju(e) {
  if (((!yl && yl !== 0) || e) && tr) {
    var t = document.createElement("div");
    (t.style.position = "absolute"),
      (t.style.top = "-9999px"),
      (t.style.width = "50px"),
      (t.style.height = "50px"),
      (t.style.overflow = "scroll"),
      document.body.appendChild(t),
      (yl = t.offsetWidth - t.clientWidth),
      document.body.removeChild(t);
  }
  return yl;
}
function Wh() {
  return d.useState(null);
}
const p1 = d.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, l) => (
    (t = z(t, "modal-body")), a.jsx(n, { ref: l, className: M(e, t), ...r })
  )
);
p1.displayName = "ModalBody";
const Na = d.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      contentClassName: n,
      centered: r,
      size: l,
      fullscreen: o,
      children: i,
      scrollable: s,
      ...u
    },
    c
  ) => {
    e = z(e, "modal");
    const p = `${e}-dialog`,
      g = typeof o == "string" ? `${e}-fullscreen-${o}` : `${e}-fullscreen`;
    return a.jsx("div", {
      ...u,
      ref: c,
      className: M(
        p,
        t,
        l && `${e}-${l}`,
        r && `${p}-centered`,
        s && `${p}-scrollable`,
        o && g
      ),
      children: a.jsx("div", { className: M(`${e}-content`, n), children: i }),
    });
  }
);
Na.displayName = "ModalDialog";
const m1 = d.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, l) => (
    (t = z(t, "modal-footer")), a.jsx(n, { ref: l, className: M(e, t), ...r })
  )
);
m1.displayName = "ModalFooter";
const h1 = d.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      closeLabel: n = "Close",
      closeButton: r = !1,
      ...l
    },
    o
  ) => (
    (e = z(e, "modal-header")),
    a.jsx(Vf, {
      ref: o,
      ...l,
      className: M(t, e),
      closeLabel: n,
      closeButton: r,
    })
  )
);
h1.displayName = "ModalHeader";
const Vh = Lo("h4"),
  v1 = d.forwardRef(
    ({ className: e, bsPrefix: t, as: n = Vh, ...r }, l) => (
      (t = z(t, "modal-title")), a.jsx(n, { ref: l, className: M(e, t), ...r })
    )
  );
v1.displayName = "ModalTitle";
function Kh(e) {
  return a.jsx(Mo, { ...e, timeout: null });
}
function Qh(e) {
  return a.jsx(Mo, { ...e, timeout: null });
}
const g1 = d.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      style: n,
      dialogClassName: r,
      contentClassName: l,
      children: o,
      dialogAs: i = Na,
      "data-bs-theme": s,
      "aria-labelledby": u,
      "aria-describedby": c,
      "aria-label": p,
      show: g = !1,
      animation: h = !0,
      backdrop: x = !0,
      keyboard: w = !0,
      onEscapeKeyDown: S,
      onShow: _,
      onHide: m,
      container: f,
      autoFocus: v = !0,
      enforceFocus: y = !0,
      restoreFocus: k = !0,
      restoreFocusOptions: E,
      onEntered: j,
      onExit: T,
      onExiting: H,
      onEnter: P,
      onEntering: oe,
      onExited: Ce,
      backdropClassName: pe,
      manager: He,
      ...Ye
    },
    ue
  ) => {
    const [J, N] = d.useState({}),
      [O, L] = d.useState(!1),
      A = d.useRef(!1),
      W = d.useRef(!1),
      b = d.useRef(null),
      [$, ye] = Wh(),
      K = If(ue, ye),
      Ge = bt(m),
      Ze = vf();
    e = z(e, "modal");
    const Ot = d.useMemo(() => ({ onHide: Ge }), [Ge]);
    function ft() {
      return He || Xf({ isRTL: Ze });
    }
    function Ne(U) {
      if (!tr) return;
      const Mt = ft().getScrollbarWidth() > 0,
        Jr = U.scrollHeight > To(U).documentElement.clientHeight;
      N({
        paddingRight: Mt && !Jr ? Ju() : void 0,
        paddingLeft: !Mt && Jr ? Ju() : void 0,
      });
    }
    const me = bt(() => {
      $ && Ne($.dialog);
    });
    bf(() => {
      vs(window, "resize", me), b.current == null || b.current();
    });
    const pt = () => {
        A.current = !0;
      },
      mt = (U) => {
        A.current && $ && U.target === $.dialog && (W.current = !0),
          (A.current = !1);
      },
      B = () => {
        L(!0),
          (b.current = Pf($.dialog, () => {
            L(!1);
          }));
      },
      Sn = (U) => {
        U.target === U.currentTarget && B();
      },
      rn = (U) => {
        if (x === "static") {
          Sn(U);
          return;
        }
        if (W.current || U.target !== U.currentTarget) {
          W.current = !1;
          return;
        }
        m == null || m();
      },
      Io = (U) => {
        w ? S == null || S(U) : (U.preventDefault(), x === "static" && B());
      },
      zo = (U, Mt) => {
        U && Ne(U), P == null || P(U, Mt);
      },
      Do = (U) => {
        b.current == null || b.current(), T == null || T(U);
      },
      Ao = (U, Mt) => {
        oe == null || oe(U, Mt), Lf(window, "resize", me);
      },
      $o = (U) => {
        U && (U.style.display = ""),
          Ce == null || Ce(U),
          vs(window, "resize", me);
      },
      Gr = d.useCallback(
        (U) =>
          a.jsx("div", {
            ...U,
            className: M(`${e}-backdrop`, pe, !h && "show"),
          }),
        [h, pe, e]
      ),
      ln = { ...n, ...J };
    ln.display = "block";
    const Zr = (U) =>
      a.jsx("div", {
        role: "dialog",
        ...U,
        style: ln,
        className: M(t, e, O && `${e}-static`, !h && "show"),
        onClick: x ? rn : void 0,
        onMouseUp: mt,
        "data-bs-theme": s,
        "aria-label": p,
        "aria-labelledby": u,
        "aria-describedby": c,
        children: a.jsx(i, {
          ...Ye,
          onMouseDown: pt,
          className: r,
          contentClassName: l,
          children: o,
        }),
      });
    return a.jsx(wa.Provider, {
      value: Ot,
      children: a.jsx(Uf, {
        show: g,
        ref: K,
        backdrop: x,
        container: f,
        keyboard: !0,
        autoFocus: v,
        enforceFocus: y,
        restoreFocus: k,
        restoreFocusOptions: E,
        onEscapeKeyDown: Io,
        onShow: _,
        onHide: m,
        onEnter: zo,
        onEntering: Ao,
        onEntered: j,
        onExit: Do,
        onExiting: H,
        onExited: $o,
        manager: ft(),
        transition: h ? Kh : void 0,
        backdropTransition: h ? Qh : void 0,
        renderBackdrop: Gr,
        renderDialog: Zr,
      }),
    });
  }
);
g1.displayName = "Modal";
const je = Object.assign(g1, {
  Body: p1,
  Header: h1,
  Title: v1,
  Footer: m1,
  Dialog: Na,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150,
});
function qh(e) {
  return a.jsxs(je, {
    ...e,
    size: "lg",
    "aria-labelledby": "justify-content-center",
    centered: !0,
    children: [
      a.jsx(je.Header, {
        closeButton: !0,
        children: a.jsx(je.Title, {
          className: "modal-title-center",
          children: a.jsx("h2", {
            className: "text-titulo",
            children: "Perguntas Livres",
          }),
        }),
      }),
      a.jsxs(je.Body, {
        children: [
          a.jsx("p", {
            children:
              "A leitura de Perguntas Livres é pra quem tem questões em áreas diferentes. Durante uma hora, você pode fazer quantas perguntas quiser sobre amor, carreira, espiritualidade, família, ou qualquer outra área. É ideal pra quem quer liberdade para fazer o jogo com suas próprias perguntas.",
          }),
          a.jsx("div", {
            className: "video-wrapper-modal",
            children: a.jsx("iframe", {
              src: "https://www.youtube-nocookie.com/embed/K5YUJK1HhC4?modestbranding=1&controls=0&rel=0&iv_load_policy=3&showinfo=0",
              className: "video-iframe",
              allowFullScreen: !0,
            }),
          }),
        ],
      }),
      a.jsx(je.Footer, {
        children: a.jsx("a", {
          onClick: e.onHide,
          className: "button-blue-card shadow w-75 mx-auto pt-2 mt-3 d-block",
          children: "Fechar",
        }),
      }),
    ],
  });
}
function Xh(e) {
  return a.jsxs(je, {
    ...e,
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: !0,
    children: [
      a.jsx(je.Header, {
        closeButton: !0,
        children: a.jsx(je.Title, {
          className: "modal-title-center",
          children: a.jsx("h2", {
            className: "text-titulo",
            children: "Leitura Personalizada",
          }),
        }),
      }),
      a.jsxs(je.Body, {
        children: [
          a.jsxs("p", {
            children: [
              "A Leitura Personalizada é pra quem tem uma dúvidas em uma área específica. Pode ser sobre a sua vida amorosa, carreira, espiritualidade, ou qualquer outra questão.",
              a.jsx("br", {}),
              "• Você me fala no que quer focar ",
              a.jsx("br", {}),
              "• Definimos os pontos que vamos abordar na leitura ",
              a.jsx("br", {}),
              "• Criamos sua leitura aprofundada",
              a.jsx("br", {}),
              "Como alinhamos tudo na etapa de construção da leitura, ela é perfeita pra quem ainda não tá se sentindo muito segura.",
              a.jsx("br", {}),
              a.jsx("div", {
                className: "underlined",
                children: "Não adicionamos perguntas na hora.",
              }),
            ],
          }),
          a.jsx("div", {
            className: "video-wrapper",
            children: a.jsx("iframe", {
              src: "https://www.youtube-nocookie.com/embed/K5YUJK1HhC4?modestbranding=1&controls=0&rel=0&iv_load_policy=3&showinfo=0",
              className: "video-iframe",
              allowFullScreen: !0,
            }),
          }),
        ],
      }),
      a.jsx(je.Footer, {
        children: a.jsx(Ca, { onClick: e.onHide, children: "Fechar" }),
      }),
    ],
  });
}
function Yh(e) {
  return a.jsxs(je, {
    ...e,
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: !0,
    children: [
      a.jsx(je.Header, {
        closeButton: !0,
        children: a.jsx(je.Title, {
          className: "modal-title-center",
          children: a.jsx("h2", {
            className: "text-titulo",
            children: "Mandala",
          }),
        }),
      }),
      a.jsxs(je.Body, {
        children: [
          a.jsx("p", {
            children:
              "A Mandala é uma leitura abrangente que explora as energias em diferentes áreas da sua vida: espiritualidade, amor, família, carreira e finanças. Ela é dividida em 5 partes, mas você pode ajustar os temas conforme sua necessidade: se quiser substituir familia por algum projeto como um intercâmbio ou uma mudança de área por exemplo… Se você está buscando uma análise mais completa de varias areas da vida É perfeita pra quem quer uma visão geral e detalhada sobre como está cada área. A gente identifica o que está fluindo bem e onde estão os desafios! Não adicionamos perguntas na hora.",
          }),
          a.jsx("div", {
            className: "video-wrapper",
            children: a.jsx("iframe", {
              src: "https://www.youtube-nocookie.com/embed/K5YUJK1HhC4?modestbranding=1&controls=0&rel=0&iv_load_policy=3&showinfo=0",
              className: "video-iframe",
              allowFullScreen: !0,
            }),
          }),
        ],
      }),
      a.jsx(je.Footer, {
        children: a.jsx(Ca, { onClick: e.onHide, children: "Fechar" }),
      }),
    ],
  });
}
function Gh() {
  const [e, t] = d.useState(!1),
    [n, r] = d.useState(!1),
    [l, o] = d.useState(!1);
  return a.jsx("div", {
    className: "dobra",
    children: a.jsxs("div", {
      className: "col-12 col-sm-10 mx-auto",
      children: [
        a.jsx(de, {
          className: "text-center mb-4",
          children: a.jsx("h2", {
            id: "servicos",
            className: "text-titulo",
            children: "Serviços",
          }),
        }),
        a.jsx(de, {
          className: "justify-content-center align-items-stretch",
          children: [
            {
              img: Bh,
              title: "Perguntas Livres",
              description:
                "Aqui você tem uma hora para fazer todas as perguntas que quiser ao tarot.",
              price: "R$ 300,00",
              onClick: () => t(!0),
            },
            {
              img: Uh,
              title: "Leitura Personalizada",
              description:
                "Aqui a gente foca em uma área ou questão e aprofundamos nela.",
              price: "R$ 350,00",
              onClick: () => r(!0),
            },
            {
              img: Hh,
              title: "Mandala",
              description:
                "Um panorama das principais áreas da sua vida — pra quem tá se sentindo perdido.",
              price: "R$ 500,00",
              onClick: () => o(!0),
            },
          ].map((i, s) =>
            a.jsx(
              Le,
              {
                md: 4,
                className: "d-flex justify-content-center ",
                children: a.jsxs("div", {
                  className:
                    "card-gray  d-flex flex-column justify-content-between text-center",
                  children: [
                    a.jsxs("div", {
                      className:
                        "d-flex flex-column justify-content-between h-100",
                      children: [
                        a.jsx("img", {
                          className: "mx-auto",
                          src: i.img,
                          alt: i.title,
                        }),
                        a.jsx("h5", {
                          className: "titulo-sec",
                          children: i.title,
                        }),
                        a.jsxs("p", {
                          className: "card-description",
                          children: [
                            i.description,
                            " ",
                            a.jsx("span", {
                              style: { cursor: "pointer", color: "blue" },
                              onClick: i.onClick,
                              children: "Saber mais...",
                            }),
                          ],
                        }),
                        a.jsx("div", {
                          className:
                            "d-flex justify-content-center align-items-end flex-grow-1",
                          children: a.jsx("p", {
                            className: "h4 fw-bold card-price",
                            children: i.price,
                          }),
                        }),
                      ],
                    }),
                    a.jsx("a", {
                      href: "https://web.whatsapp.com/",
                      className: "button-orange-card  mx-auto mt-3 d-block",
                      children: "Agendar",
                    }),
                  ],
                }),
              },
              s
            )
          ),
        }),
        a.jsx(qh, { show: e, onHide: () => t(!1) }),
        a.jsx(Xh, { show: n, onHide: () => r(!1) }),
        a.jsx(Yh, { show: l, onHide: () => o(!1) }),
      ],
    }),
  });
}
const Zh = "./assets/fluxo-BrxcX5Du.png";
function Jh() {
  return a.jsx("div", {
    id: "comoescolher",
    className: "dobra",
    children: a.jsxs("div", {
      className: "col-12 col-sm-10 mx-auto",
      children: [
        a.jsx(de, {
          className: "text-center mb-4",
          children: a.jsx("h2", {
            className: "text-titulo",
            children: "Como Escolher",
          }),
        }),
        a.jsx(de, {
          className: "justify-content-center align-items-stretch",
          children: a.jsx(Le, {
            md: 4,
            className: "d-flex justify-content-center mb-4",
            children: a.jsx("div", {
              className: "text-center",
              children: a.jsx("img", { className: "", src: Zh }),
            }),
          }),
        }),
      ],
    }),
  });
}
const bh =
    "data:image/svg+xml,%3csvg%20id='Camada_1'%20data-name='Camada%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20398.26%20398.84'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23cd6721;opacity:0.81;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3eicon-media%3c/title%3e%3ccircle%20class='cls-1'%20cx='199.13'%20cy='199.3'%20r='199.28'/%3e%3cpath%20class='cls-2'%20d='M95.48,198.57c0-18.32.48-36.66-.13-55-.8-24.18,21.85-48.38,47.3-48.49,38-.15,76-.33,114,.06,24.86.26,46.76,21.75,47.11,46.59q.78,57.47,0,115c-.4,25.87-22.94,46.87-48.82,46.9-37,0-74-.14-111,.06-29.42.15-49.56-27.22-48.62-48.13C96.15,236.59,95.48,217.57,95.48,198.57Zm18.39.81c0,16.67-.05,33.33,0,50a35.18,35.18,0,0,0,1,8.82c4,15.28,16.15,26,32.17,26.79,17.62.87,35.31.57,53,.56,17.33,0,34.67.22,52-.59a34.81,34.81,0,0,0,33.38-34.55q.75-51,0-102c-.27-19.56-15.92-34.62-35.33-34.74-33.66-.23-67.32,0-101-.1-21-.08-35.8,18.95-35.27,35.81C114.28,166,113.87,182.72,113.87,199.38Z'/%3e%3cpath%20class='cls-2'%20d='M199.3,253.62a53.5,53.5,0,0,1-53.82-53.77c0-30.72,23.45-54.59,53.92-54.77a54.17,54.17,0,0,1,54.46,54.43C253.73,230,229.94,253.6,199.3,253.62Zm.23-18.57c19.25-.15,35.69-16.09,35.68-35.64,0-22-17.84-35.33-35.55-35.68-18.92-.38-35.9,16.84-35.79,35.6C164,218.34,180.58,235,199.53,235.05Z'/%3e%3cpath%20class='cls-2'%20d='M246.24,141.84c0-6.93,4.4-11,11.47-10.74,6.47.25,10.18,4.27,10.14,11,0,6.22-4.57,11.11-10.33,11.13C250.91,153.27,246.2,148.51,246.24,141.84Z'/%3e%3c/svg%3e",
  e2 =
    "data:image/svg+xml,%3csvg%20id='Camada_1'%20data-name='Camada%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20398.16%20398.8'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23cd6721;opacity:0.81;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3eicon-media%3c/title%3e%3cpath%20class='cls-1'%20d='M398.12,200.34c2.57,104.17-85.45,200.89-203,198.62C90,396.93-.78,312,0,197.86.69,86.82,91-1.77,203.59.18,314.1,2.1,401.15,94.62,398.12,200.34ZM293.77,170.42c0-9.75-.09-19,0-28.34.06-4.78-2.49-6.15-6.77-6.62C262,132.67,249,116.52,244.13,95.91c-.81-3.44-1.55-6.89-2.27-10.07H203.4V97.47q0,70.93-.08,141.88a61,61,0,0,1-1.85,15.72,30.73,30.73,0,0,1-40.17,20.77c-14.21-5.31-22-18.52-20-34C143,228.58,155,217.24,169,215.69c3.22-.35,6.47-.44,10.8-.73,0-8.72,0-17,0-25.21-.07-10.19-.34-10.56-10.88-10.22-38.44,1.26-69.32,36.38-63.61,76.78,6.13,43.31,51.79,69.83,92.08,52.92,25.79-10.82,41.61-34.44,41.68-62.45.07-27,0-54,0-80.94,0-3.11.38-6.23.62-9.81C260,169.39,277.73,174.19,293.77,170.42Z'/%3e%3cpath%20class='cls-2'%20d='M293.77,170.42c-16,3.77-33.75-1-54-14.39-.24,3.58-.62,6.7-.62,9.81,0,27,0,54,0,80.94-.07,28-15.89,51.63-41.68,62.45-40.29,16.91-85.95-9.61-92.08-52.92-5.71-40.4,25.17-75.52,63.61-76.78,10.54-.34,10.81,0,10.88,10.22.05,8.24,0,16.49,0,25.21-4.33.29-7.58.38-10.8.73-14,1.55-26,12.89-27.7,26.11-2,15.52,5.8,28.73,20,34a30.73,30.73,0,0,0,40.17-20.77,61,61,0,0,0,1.85-15.72q.19-70.93.08-141.88V85.84h38.46c.72,3.18,1.46,6.63,2.27,10.07C249,116.52,262,132.67,287,135.46c4.28.47,6.83,1.84,6.77,6.62C293.68,151.37,293.77,160.67,293.77,170.42Z'/%3e%3c/svg%3e",
  t2 = "./assets/selo-Cz5d2kU8.svg",
  n2 = () =>
    a.jsx(de, {
      id: "contato",
      className: "g-0 footer text-center",
      children: a.jsxs("div", {
        className: "footer-content mx-auto",
        children: [
          a.jsxs(Le, {
            className: "",
            children: [
              a.jsx("h6", {
                className: "footer-text",
                children: "Estudos Urbanísticos:",
              }),
              a.jsx("img", {
                className: "media-icon mx-2",
                src: bh,
                alt: "Media Icon 1",
              }),
              a.jsx("img", {
                className: "media-icon mx-2",
                src: e2,
                alt: "Media Icon 2",
              }),
            ],
          }),
          a.jsxs(Le, {
            children: [
              a.jsx("img", {
                className: "selo-icon mb-2",
                src: t2,
                alt: "Seal Icon",
              }),
              a.jsx("h6", {
                className: "footer-text",
                children: "© 2024. All rights reserved.",
              }),
            ],
          }),
        ],
      }),
    }),
  r2 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2047.62%2045.57'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23e06900;}%3c/style%3e%3c/defs%3e%3ctitle%3e847550_45093-O4HX7J%3c/title%3e%3cg%20id='Objects'%3e%3cpath%20class='cls-1'%20d='M44.79,13.82C40.36,1.45,29.78.66,18.71,2a1.55,1.55,0,0,0-2-.57C4.92,7-2.78,21.93,4.11,34c5.35,9.4,18.14,12.73,28,10.14C45.62,40.66,49,25.52,44.79,13.82M35,39.8c-8.17,5-19.44,1.91-25.94-4.33C-1.4,25.47,7.35,9.18,18.25,4c0,0,.05,0,.08-.06A14.71,14.71,0,0,0,19.82,4c5,.13,10.43-.52,15.17,1.53,6.32,2.74,8.65,12.33,8.87,18.35A17.76,17.76,0,0,1,35,39.8'/%3e%3cpath%20class='cls-1'%20d='M25.68,7.29a.22.22,0,0,1,0-.08s0,0,0-.08a.75.75,0,0,0-.13-.27h0a1.13,1.13,0,0,0-1.88,0h0a1,1,0,0,0-.13.27.25.25,0,0,0,0,.08.22.22,0,0,0,0,.08,4,4,0,0,0,0,1.62,1,1,0,0,0,.46.66,1,1,0,0,0,1.37,0,1,1,0,0,0,.45-.66,4.2,4.2,0,0,0,0-1.62'/%3e%3cpath%20class='cls-1'%20d='M41.39,19.3a4.29,4.29,0,0,0-2.66-1,1.16,1.16,0,0,0-1.22,1.14c-.4.33-.34,1.14.24,1.23l.35,0a1.16,1.16,0,0,0,.63.16l.81,0a8.94,8.94,0,0,1,.89.09c.84.12,1.84-1,1-1.66'/%3e%3cpath%20class='cls-1'%20d='M23.81,34.94a1.21,1.21,0,0,0-2.37-.32c-.1.43-.22.91-.29,1.4A3.32,3.32,0,0,0,21,38a1.24,1.24,0,0,0,2.36,0,2.77,2.77,0,0,0,.13-.57.18.18,0,0,0,.05-.21,8.24,8.24,0,0,1,.11-.85,6.42,6.42,0,0,0,.13-1.45'/%3e%3cpath%20class='cls-1'%20d='M10.61,21.13a1.15,1.15,0,0,0-.27-.14.05.05,0,0,1,0,0h0l-.11,0c-.74-.19-2.09-.43-2.71,0a1.62,1.62,0,0,0-.34.35.69.69,0,0,0,0,1.33,2.09,2.09,0,0,0,2.58.49c.05,0,.07-.06.11-.08L10.1,23a.57.57,0,0,0,.18,0h0l0,0a.7.7,0,0,0,.27-.14,1.07,1.07,0,0,0,0-1.67'/%3e%3cpath%20class='cls-1'%20d='M32,28c-2.19-1.64-4.63-3.62-7.25-4.5h0c.24-.94.33-2.38-.3-3a1.28,1.28,0,0,0-.63-.36c.18-1.46.33-2.93.49-4.39.14-1.27.76-3.65-.27-4.67a.94.94,0,0,0-1.32,0c-.92.88-.63,3-.63,4.16a51.94,51.94,0,0,0,.16,5.44,1.79,1.79,0,0,0-1.42,1.22,1.93,1.93,0,0,0,.55,2.5,2.72,2.72,0,0,0,1.16.35,1.57,1.57,0,0,0,.48,0h.11a1.2,1.2,0,0,0,.75-.1.91.91,0,0,0,.26.33c2.3,1.7,4.55,3.4,6.76,5.22.8.66,3.31,3.39,4.34,1.64C36.16,30.34,33,28.7,32,28'/%3e%3c/g%3e%3c/svg%3e",
  l2 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2065.99%2060.77'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23e06900;}%3c/style%3e%3c/defs%3e%3ctitle%3e847550_45093-O4HX7J%3c/title%3e%3cg%20id='Objects'%3e%3cpath%20class='cls-1'%20d='M65.4,15.38C58.48,11.66,51.8,7.45,44.77,3.9a.76.76,0,0,0-1,.18h-.1c-1.68.23-3.29,2-4.13,3.37a5.86,5.86,0,0,0-.53,4.16c-1.78,0-3.56.12-5.34.21.6-2.4-.26-6.23-2.26-7.64C28.89,2.39,24.86,3,22,3.05a1.18,1.18,0,0,0-1.17,1.17c.15,2.69.26,5.41.51,8.09a11.58,11.58,0,0,0-5.41,1.44s0,0,0,.05a.88.88,0,0,0-1.36.19v0a.52.52,0,0,0-.71-.09c-4,2.67-3.95,3-3.83,7.74.09,3.2-.15,8.33,2.12,11,1.58,1.85,4.22.94,6.34.74.67-.06,1.33-.14,2-.22a43.06,43.06,0,0,0-.7,10.59c.13,4-.28,8.1.11,12.05.57,5.69,7.78,3.68,11.56,4a1.3,1.3,0,0,0,1.3-1.29c-.09-8.67-2-18.12-.21-26.7,3.42-.15,4.61.62,6,4.61a1.25,1.25,0,0,0,2.06.55,42,42,0,0,0,4.42-3.88,1.74,1.74,0,0,0,.56.62.87.87,0,0,0,.88,0A1.62,1.62,0,0,0,47,32.9a.8.8,0,0,0,.81.16c7.17-2.44,12.63-8.8,17.15-14.58a1.34,1.34,0,0,0,.28-1,1.16,1.16,0,0,0,.21-2.11m-42.35-10c2.21-.06,4.82-.25,6.71.7S31,10.13,31.46,12l-2.59.16c-1.78.13-4,0-6.26.11.21-2.28.32-4.58.44-6.87m3.32,51.87c-4.39.18-4.15-3.7-4-6.69.36-5.86-1-11.66-.73-17.55,2.6-.32,5.2-.7,7.8-1-.64,2.77-.16,6.71-.14,8.37.06,5.6.59,11.17.72,16.76-1.22,0-2.45,0-3.68.08M47,31.3s0,0,0,0c-.06-.31-.12-.61-.17-.9a44.47,44.47,0,0,1-.59-5.38.63.63,0,0,0-.7-.63.83.83,0,0,0-.77-.36c-8.94.54-18.78.32-27.51,2.7,0-2.34-.24-4.68-.45-7-.15-1.7,0-3.64-.6-5.27,3,1.61,7.65.43,10.91.23,5.75-.36,11.5-.78,17.26-.59A1.24,1.24,0,0,0,45.21,12c.1-1.13.13-2.27.13-3.4a14.32,14.32,0,0,0-.13-2.44C51,10,57,13.52,63.05,16.8c-4.42,5.7-9.43,11.33-16,14.5'/%3e%3cpath%20class='cls-1'%20d='M30,18.73a2.64,2.64,0,0,0-2.21-1.17,3.54,3.54,0,0,0-2.39.76,2.4,2.4,0,0,0-.81.2,2.42,2.42,0,0,0-1.17,2.19A2.79,2.79,0,0,0,24.76,23a3.92,3.92,0,0,0,3.39-.11c1.56-.67,2.77-2.54,1.8-4.18m-1.8,1.37a1.25,1.25,0,0,1-.5.69c-.52.36-1.9.84-2.22,0a.9.9,0,0,1,.21-1c.84.08,2-.52,2.46,0a.38.38,0,0,1,0,.34'/%3e%3c/g%3e%3c/svg%3e",
  o2 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2059.23%2060.69'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23e06900;}%3c/style%3e%3c/defs%3e%3ctitle%3e847550_45093-O4HX7J%3c/title%3e%3cg%20id='Objects'%3e%3cpath%20class='cls-1'%20d='M9.77,55.61A22.25,22.25,0,0,1,15.2,40.46c1.7-2,3.37-4,5.06-5.94a15,15,0,0,0,2.45-4,5.74,5.74,0,0,0-.52-6c-4.12-6.15-2.94-14.28,2.3-19.57,6.14-6.22,13-5.71,19.32-2.49,7.37,3.74,9.21,9.79,8.34,16.68S45.61,30.83,38.2,31.79a9.77,9.77,0,0,1-4.5,0c-1-.35-1.57.46-2.15,1.11-2.24,2.5-3.07,5.67-4.13,8.73A31.75,31.75,0,0,1,12,59.6c-1.09.59-1.67.31-1.87-.8S9.85,56.37,9.77,55.61ZM35.15,4.42A11.45,11.45,0,0,0,23.66,15.78C23.49,22,29.61,28.4,35.6,28.13,44.93,27.7,48,24.62,48.42,15.06,48.71,8.26,42.61,4.44,35.15,4.42ZM12.15,54c0,.5,0,1,0,1.51-.05,1.26.48,1.71,1.51.88a50.23,50.23,0,0,0,6.27-5.3c4.28-4.78,6-10.78,8.1-16.59.7-2-1.6-1.55-2.4-2.34s-1.39-.43-1.9.43A49.37,49.37,0,0,1,17.78,40C14.24,44,11.59,48.36,12.15,54Zm18-22.79-3.76-1.81A3.68,3.68,0,0,0,30.14,31.22Z'/%3e%3c/g%3e%3c/svg%3e",
  i2 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2059.15%2055.99'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23e06900;}%3c/style%3e%3c/defs%3e%3ctitle%3e847550_45093-O4HX7J%3c/title%3e%3cg%20id='Objects'%3e%3cpath%20class='cls-1'%20d='M52.65,11.47c-1.33-4.6-19-5.3-22.75-5.89Q21.24,4.2,12.54,3.23C10,3,5.79,2,3.32,3.24l-.2-.14a.83.83,0,0,0-1.24.48.74.74,0,0,0-.57.92C5.06,16.75,8.08,30.3,15.8,40.77a1.41,1.41,0,0,0,2.16.28c2.15-1.83,4.23-3.72,6.28-5.64a1,1,0,0,0,.9.75,45.16,45.16,0,0,1,11.71,2.23c.07.13.15.26.23.39a1.33,1.33,0,0,0,2.46-.67,81.38,81.38,0,0,0-.19-9.24c-.17-2.72.09-5.7-.42-8.37a.69.69,0,0,0,0-.13,17.83,17.83,0,0,0,4.24-2.18c2.63-1.49,5.15-3.2,7.81-4.64a1.36,1.36,0,0,0,.61-.68h.05a1.11,1.11,0,0,0,1.06-1.4m-29.23,4c2.48,1.33,9.94,7,12.93,5.36a.91.91,0,0,0,.44-.7l.1,0a1.05,1.05,0,0,0-.17.29c-.77,2.22-.23,5-.09,7.33.12,2,.24,3.9.3,5.84-1.63-2.47-3.31-4.9-5.11-7.28a1.09,1.09,0,0,0-.3-.85C27.35,21.16,22,17.45,17.18,13.73,15.46,12.38,13.74,11,12,9.66c3.81,1.89,7.61,3.83,11.41,5.85M17.23,38C10.8,28.57,8.81,17.21,4.16,6.92c1,.82,2.26,1.61,2.77,2,2.81,2.2,5.54,4.49,8.37,6.68,4.52,3.51,8.86,8.19,13.88,11.07C25.26,30.54,21.35,34.39,17.23,38m8.37-3.9c1.91-1.82,3.8-3.66,5.66-5.54,1.09,2.17,2.3,4.27,3.53,6.36a23.2,23.2,0,0,0-9.19-.82M42.14,15.37c-1.2.72-2.42,1.44-3.6,2.2-.42.26-.85.5-1.26.77s-1.08.84-.4.71a.48.48,0,0,0-.36.3.55.55,0,0,0-.17-.17c-4.52-2.59-9.36-4.82-14-7.26C19.51,10.41,16.67,8.58,13.73,7c5.24.51,10.68.63,15.4,1.36C34,9.12,38.93,10,43.8,11c1.14.24,2.44.71,3.75,1.12-1.82,1.07-3.61,2.18-5.41,3.27'/%3e%3cpath%20class='cls-1'%20d='M33.56,53.21c-.2-.71-.89-1.1-1.43-1.54-.82-.64-1.61-1.3-2.41-2-.64-.53-1.3-1.06-2-1.56a11.78,11.78,0,0,0-1.13-.56c-.33-.2-.8.22-.56.55s.26.62.5.9c.59.68,1.23,1.32,1.88,1.94s1.49,1.42,2.26,2.12c.56.52,1.18,1.21,2,1.22a.88.88,0,0,0,.85-1.11'/%3e%3cpath%20class='cls-1'%20d='M40.32,51.74a18.71,18.71,0,0,0-2.92-2c-1.23-.91-2.27-2-3.47-3a.61.61,0,0,0-.86.86,24.82,24.82,0,0,0,3,3.12c.95.86,2.19,2.11,3.49,2.28a.75.75,0,0,0,.73-1.24'/%3e%3cpath%20class='cls-1'%20d='M46.33,49.14c-.22-.47-.52-.59-1-.8a9.56,9.56,0,0,1-1.4-.86c-1-.71-2-1.55-2.92-2.35a.64.64,0,0,0-.9.9A22.05,22.05,0,0,0,43,48.72c.82.65,1.8,1.69,2.9,1.51a.75.75,0,0,0,.44-1.09'/%3e%3cpath%20class='cls-1'%20d='M50.77,43.38a21.28,21.28,0,0,1-2.28-1.58c-1.08-.81-2.1-1.7-3.11-2.59a.67.67,0,0,0-1,.95,35.83,35.83,0,0,0,3.25,3.15c.83.72,1.75,1.67,2.92,1.4a.73.73,0,0,0,.17-1.33'/%3e%3cpath%20class='cls-1'%20d='M52.58,36.33a12.21,12.21,0,0,0-2.65-1.79,21.38,21.38,0,0,1-3-2.75c-.47-.49-1.34.16-.94.72a18.19,18.19,0,0,0,2.72,3c.82.78,1.94,2,3.08,2.2a.85.85,0,0,0,.82-1.41'/%3e%3cpath%20class='cls-1'%20d='M53.15,30a15.81,15.81,0,0,1-4.35-2.85.51.51,0,0,0-.8.62,9.6,9.6,0,0,0,2.46,2.7c.75.6,1.5,1.22,2.51.92A.77.77,0,0,0,53.15,30'/%3e%3cpath%20class='cls-1'%20d='M57.22,26c-.42-1-2.14-1.53-3.15-2.07-.68-.37-2.22-1.6-3.07-1.21l0,0s-.07,0-.09,0h0a.42.42,0,0,0-.24.52c-.14-.35,0,.37.09.5a2,2,0,0,0,.52.48c.53.42,1.11.79,1.67,1.18.9.62,2.38,2.08,3.52,1.87A1.09,1.09,0,0,0,57.22,26'/%3e%3c/g%3e%3c/svg%3e";
function s2() {
  return a.jsx(a.Fragment, {
    children: a.jsx("div", {
      id: "comoagendar",
      className: "dobra",
      children: a.jsxs("div", {
        className: "col-12 col-sm-10 mx-auto",
        children: [
          a.jsx(de, {
            className: "text-center mb-4",
            children: a.jsx("h2", {
              className: "text-titulo",
              children: "Serviços",
            }),
          }),
          a.jsxs(de, {
            className: "justify-content-center align-items-stretch",
            children: [
              [
                {
                  img: o2,
                  title: "Escolha o Tipo de Consulta",
                  description:
                    "Com qual leitura você se sente mais confortável: Personalizada, Perguntas Livres ou Mandala?",
                },
                {
                  img: l2,
                  title: "Escolha o Tipo de Atendimento",
                  description:
                    "São três opções: vídeo com horário marcado, WhatsApp com horário marcado, ou WhatsApp sem horário marcado. Leituras por vídeo têm uma taxa adicional de R$80.",
                },
                {
                  img: r2,
                  title: "Escolha o Data e Horário",
                  description:
                    "Para consultas com horário marcado, selecione o dia e o horário na minha agenda. Se preferir só o dia (sem horário fixo), escolha a data para receber a leitura.",
                },
                {
                  img: i2,
                  title: "Chamar no WhatsApp",
                  description:
                    "Para Leituras Personalizadas ou Mandalas, você será redirecionada para o WhatsApp. Me conta qual você escolheu, e a gente constrói sua consulta!",
                },
              ].map((e, t) =>
                a.jsx(
                  Le,
                  {
                    className: "col-card",
                    children: a.jsx("div", {
                      className: "card-gray",
                      children: a.jsxs("div", {
                        className: "card-content",
                        children: [
                          a.jsx("div", {
                            className: "card-icon",
                            children: a.jsx("img", {
                              src: e.img,
                              alt: e.title,
                            }),
                          }),
                          a.jsxs("div", {
                            className: "card-text",
                            children: [
                              a.jsx("h5", {
                                className: "titulo-sec",
                                children: e.title,
                              }),
                              a.jsx("p", { children: e.description }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  },
                  t
                )
              ),
              a.jsxs(de, {
                children: [
                  " ",
                  a.jsx("a", {
                    href: "https://web.whatsapp.com/",
                    className: "button-orange-card  pt-2 mt-2",
                    children: "Saiba Mais",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function a2() {
  return a.jsx("div", {
    id: "sobremim",
    className: "dobra",
    children: a.jsxs("div", {
      className: "col-12 col-sm-10 mx-auto",
      children: [
        a.jsx(de, {
          className: "text-center mb-4",
          children: a.jsx("h2", {
            className: "text-titulo",
            children: "Sobre Mim",
          }),
        }),
        a.jsxs(de, {
          className: "align-items-center",
          children: [
            a.jsx(Le, {
              md: 6,
              className: "d-flex justify-content-center mb-4",
              children: a.jsx("img", {
                className: "img-fluid rounded-4 ",
                src: Ml,
                alt: "Foto da Nicolle",
              }),
            }),
            a.jsx(Le, {
              md: 6,
              className: "mb-4",
              children: a.jsxs("p", {
                children: [
                  "Meu nome é Nicolle, sou antropóloga, macumbeira e taróloga.",
                  a.jsx("br", {}),
                  "Venho de uma família cearense, mas nasci em São Paulo. A cultura nordestina sempre esteve viva dentro de casa – na comida, na música e, claro, na fé.",
                  a.jsx("br", {}),
                  "Não vejo a espiritualidade como algo distante ou místico. Aprendi isso com minha família (de sangue e de santo).",
                  a.jsx("br", {}),
                  "A espiritualidade é viva. Ela tá no dia a dia guiando nossas escolhas.",
                  a.jsx("br", {}),
                  "E é por isso que minhas leituras são personalizadas e práticas. A gente entende como estão seus caminhos e vê os bloqueios pra te mostrar como agir daqui pra frente.",
                  a.jsx("br", {}),
                  "E tudo isso só é possível pelo axé da cigana Esmeralda e por anos de estudo de tarologia, numerologia, simbologia e outras práticas.",
                  a.jsx("br", {}),
                  "Cada leitura é feita com muito carinho e cuidado, pra que você tenha uma orientação que realmente faça sentido e seja aplicável na sua vida.",
                  a.jsx("br", {}),
                  "O tarot te ajuda a ver com clareza quais passos são necessários pra construir a vida que você quer.",
                  a.jsx("br", {}),
                  "Vamos juntas?",
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const zt =
  "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056.94%20105.26'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23e06900;}%3c/style%3e%3c/defs%3e%3ctitle%3efaq%3c/title%3e%3cg%20id='Objects'%3e%3cpath%20class='cls-1'%20d='M27.27,2.08C36.43.82,43.53,5.69,49.59,11.54c7,6.74,7.56,21.72,2.67,30.67A37.76,37.76,0,0,1,35.5,57.82c-8.14,4.11-11.75,10.31-11.65,19.23.06,5.94-3.74,9-8.59,6.88C12,82.52,9.43,80.1,9,76c-.9-8.79,1.44-16.29,7.71-22.71,4.63-4.75,10.37-7.9,15.52-11.89a26.08,26.08,0,0,0,4.71-5c4.83-6.36,2.43-11.06-2.12-16.33-2-2.3-11.49-1.95-13.63.08C20,21.29,20.3,22.62,20.5,24a10.66,10.66,0,0,1-3.43,9.61A8.54,8.54,0,0,1,3.43,30.82c-6-13,5.76-29.79,20.4-29.08C24.92,1.79,26,2,27.27,2.08Zm-1,3.66C15.41,3.47,5.16,14,4.4,22.19c-.37,4,1.43,6.9,4.1,9.21a5.08,5.08,0,0,0,6.15,0c1.86-1.26,3.1-2.94,2.55-5.52-.61-2.9-1.52-6,1.27-8.36C25,12,37.65,14.86,41.11,22.66c4,8.93.66,17.32-9.37,23.63a81.31,81.31,0,0,0-11.41,8.45c-6.12,5.54-9.2,12.25-8,20.68.44,3.15,2.07,5.13,5.12,5.35,3.72.27,2.76-2.81,3-4.94a61.32,61.32,0,0,1,1.28-8C23.5,61.54,28.54,58.21,33.66,55c6-3.71,12-7.2,15.7-13.76,4.81-8.63,3.88-21.57-4.72-28.89C39.12,7.71,33.15,5.39,26.25,5.74Z'/%3e%3cpath%20class='cls-1'%20d='M26.87,96.49c.07,4.66-3.59,8.8-7.74,8.77s-8.51-4-8.46-7.74c.05-4.16,4.49-8.46,8.83-8.57A7.48,7.48,0,0,1,26.87,96.49ZM19,101.6c3.17-.11,5.11-1.7,5.07-4.48a4.63,4.63,0,0,0-4.9-4.54c-2.64,0-5.21,1.28-5.23,4.57S16.7,101.06,19,101.6Z'/%3e%3c/g%3e%3c/svg%3e";
function y1(e, t) {
  return Array.isArray(e) ? e.includes(t) : e === t;
}
const Yr = d.createContext({});
Yr.displayName = "AccordionContext";
const ka = d.forwardRef(
  (
    {
      as: e = "div",
      bsPrefix: t,
      className: n,
      children: r,
      eventKey: l,
      ...o
    },
    i
  ) => {
    const { activeEventKey: s } = d.useContext(Yr);
    return (
      (t = z(t, "accordion-collapse")),
      a.jsx(zf, {
        ref: i,
        in: y1(s, l),
        ...o,
        className: M(n, t),
        children: a.jsx(e, { children: d.Children.only(r) }),
      })
    );
  }
);
ka.displayName = "AccordionCollapse";
const Po = d.createContext({ eventKey: "" });
Po.displayName = "AccordionItemContext";
const x1 = d.forwardRef(
  (
    {
      as: e = "div",
      bsPrefix: t,
      className: n,
      onEnter: r,
      onEntering: l,
      onEntered: o,
      onExit: i,
      onExiting: s,
      onExited: u,
      ...c
    },
    p
  ) => {
    t = z(t, "accordion-body");
    const { eventKey: g } = d.useContext(Po);
    return a.jsx(ka, {
      eventKey: g,
      onEnter: r,
      onEntering: l,
      onEntered: o,
      onExit: i,
      onExiting: s,
      onExited: u,
      children: a.jsx(e, { ref: p, ...c, className: M(n, t) }),
    });
  }
);
x1.displayName = "AccordionBody";
function u2(e, t) {
  const { activeEventKey: n, onSelect: r, alwaysOpen: l } = d.useContext(Yr);
  return (o) => {
    let i = e === n ? null : e;
    l &&
      (Array.isArray(n)
        ? n.includes(e)
          ? (i = n.filter((s) => s !== e))
          : (i = [...n, e])
        : (i = [e])),
      r == null || r(i, o),
      t == null || t(o);
  };
}
const ja = d.forwardRef(
  ({ as: e = "button", bsPrefix: t, className: n, onClick: r, ...l }, o) => {
    t = z(t, "accordion-button");
    const { eventKey: i } = d.useContext(Po),
      s = u2(i, r),
      { activeEventKey: u } = d.useContext(Yr);
    return (
      e === "button" && (l.type = "button"),
      a.jsx(e, {
        ref: o,
        onClick: s,
        ...l,
        "aria-expanded": Array.isArray(u) ? u.includes(i) : i === u,
        className: M(n, t, !y1(u, i) && "collapsed"),
      })
    );
  }
);
ja.displayName = "AccordionButton";
const w1 = d.forwardRef(
  (
    {
      as: e = "h2",
      "aria-controls": t,
      bsPrefix: n,
      className: r,
      children: l,
      onClick: o,
      ...i
    },
    s
  ) => (
    (n = z(n, "accordion-header")),
    a.jsx(e, {
      ref: s,
      ...i,
      className: M(r, n),
      children: a.jsx(ja, { onClick: o, "aria-controls": t, children: l }),
    })
  )
);
w1.displayName = "AccordionHeader";
const S1 = d.forwardRef(
  ({ as: e = "div", bsPrefix: t, className: n, eventKey: r, ...l }, o) => {
    t = z(t, "accordion-item");
    const i = d.useMemo(() => ({ eventKey: r }), [r]);
    return a.jsx(Po.Provider, {
      value: i,
      children: a.jsx(e, { ref: o, ...l, className: M(n, t) }),
    });
  }
);
S1.displayName = "AccordionItem";
const E1 = d.forwardRef((e, t) => {
  const {
      as: n = "div",
      activeKey: r,
      bsPrefix: l,
      className: o,
      onSelect: i,
      flush: s,
      alwaysOpen: u,
      ...c
    } = No(e, { activeKey: "onSelect" }),
    p = z(l, "accordion"),
    g = d.useMemo(
      () => ({ activeEventKey: r, onSelect: i, alwaysOpen: u }),
      [r, i, u]
    );
  return a.jsx(Yr.Provider, {
    value: g,
    children: a.jsx(n, { ref: t, ...c, className: M(o, p, s && `${p}-flush`) }),
  });
});
E1.displayName = "Accordion";
const X = Object.assign(E1, {
  Button: ja,
  Collapse: ka,
  Item: S1,
  Header: w1,
  Body: x1,
});
function c2() {
  return a.jsx(a.Fragment, {
    children: a.jsx("div", {
      id: "faq",
      className: "dobra",
      children: a.jsxs("div", {
        className: "col-12 col-sm-10 mx-auto",
        children: [
          a.jsx(de, {
            className: "text-center mb-4",
            children: a.jsx("h2", {
              className: "text-titulo",
              children: "FAQ",
            }),
          }),
          a.jsx(X, {
            className: "custom-accordion",
            children: a.jsxs(de, {
              className: "justify-content-center",
              children: [
                a.jsxs(Le, {
                  xs: 12,
                  md: 6,
                  className: "accordion-col",
                  children: [
                    a.jsxs(X.Item, {
                      eventKey: "0",
                      children: [
                        a.jsxs(X.Header, {
                          className: "icon-text",
                          children: [
                            a.jsx("img", {
                              src: zt,
                              alt: "FAQ icon",
                              className: "faq-icon",
                            }),
                            a.jsx("h6", {
                              className: "fw-bold",
                              children:
                                "“Preciso acreditar no tarot pra ele funcionar?”",
                            }),
                          ],
                        }),
                        a.jsx(X.Body, {
                          children: a.jsx("p", {
                            className: "faq-question",
                            children:
                              "Não, porque o tarot funciona como um espelho da sua vida: reflete suas emoções, obstáculos e caminhos - independente da sua religião/crença. O importante é estar aberta para ouvir as mensagens da sua espiritualidade!",
                          }),
                        }),
                      ],
                    }),
                    a.jsxs(X.Item, {
                      eventKey: "1",
                      children: [
                        a.jsxs(X.Header, {
                          className: "icon-text",
                          children: [
                            a.jsx("img", {
                              src: zt,
                              alt: "FAQ icon",
                              className: "faq-icon",
                            }),
                            a.jsx("h6", {
                              className: "fw-bold",
                              children: "“Como me preparar para a consulta?”",
                            }),
                          ],
                        }),
                        a.jsx(X.Body, {
                          children: a.jsx("p", {
                            className: "faq-question",
                            children:
                              "Se quiser, pode reservar uns minutos antes para pensar sobre suas questões. Mas não precisa de nada elaborado, não!",
                          }),
                        }),
                      ],
                    }),
                    a.jsxs(X.Item, {
                      eventKey: "2",
                      children: [
                        a.jsxs(X.Header, {
                          className: "icon-text",
                          children: [
                            a.jsx("img", {
                              src: zt,
                              alt: "FAQ icon",
                              className: "faq-icon",
                            }),
                            a.jsx("h6", {
                              className: "fw-bold",
                              children:
                                "“E se eu não concordar com algo que saiu nas cartas?”",
                            }),
                          ],
                        }),
                        a.jsx(X.Body, {
                          children: a.jsx("p", {
                            className: "faq-question",
                            children:
                              "Tá tudo bem! Numa leitura a gente acessa as mensagens da sua espiritualidade para te guiar, mas você tem livre-arbítrio para tomar decisões. Você não vai ser punido por não seguir os conselhos do tarot!",
                          }),
                        }),
                      ],
                    }),
                    a.jsxs(X.Item, {
                      eventKey: "3",
                      children: [
                        a.jsxs(X.Header, {
                          className: "icon-text",
                          children: [
                            a.jsx("img", {
                              src: zt,
                              alt: "FAQ icon",
                              className: "faq-icon",
                            }),
                            a.jsx("h6", {
                              className: "fw-bold",
                              children: "“Em que o tarot pode ajudar?”",
                            }),
                          ],
                        }),
                        a.jsx(X.Body, {
                          children: a.jsx("p", {
                            className: "faq-question",
                            children:
                              "Relacionamentos, carreira, projetos pessoais, espiritualidade... tudo que você sentir que precisa de uma orientação dos seus mentores espirituais.",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsxs(Le, {
                  xs: 12,
                  md: 6,
                  className: "accordion-col",
                  children: [
                    a.jsxs(X.Item, {
                      eventKey: "4",
                      children: [
                        a.jsxs(X.Header, {
                          className: "icon-text",
                          children: [
                            a.jsx("img", {
                              src: zt,
                              alt: "FAQ icon",
                              className: "faq-icon",
                            }),
                            a.jsx("h6", {
                              className: "fw-bold",
                              children: "“Como saber se devo jogar tarot?”",
                            }),
                          ],
                        }),
                        a.jsx(X.Body, {
                          children: a.jsx("p", {
                            className: "faq-question",
                            children:
                              "Se você está passando por um momento de dúvida ou sente que tem algo fora do lugar, o tarot pode te ajudar. A gente pode criar uma consulta só pra você, pra ver tudo com clareza e profundidade. Me conta o que precisa, e sugiro uma leitura que faça sentido pra sua busca. enfrentando um obstáculo ou querendo entender melhor seus sentimentos e escolhas, o tarot pode ajudar a trazer clareza. Se sentir que algo em sua vida precisa de orientação ou reflexão mais profunda, esse pode ser o sinal para jogar. Tá com algo empacado? Quer saber pra onde as energias estão te levando? A gente pode criar uma consulta só pra você, pra ver tudo com clareza e detalhe. Me conta o que precisa, e sugiro uma leitura que faça sentido pra sua busca.",
                          }),
                        }),
                      ],
                    }),
                    a.jsxs(X.Item, {
                      eventKey: "5",
                      children: [
                        a.jsxs(X.Header, {
                          className: "icon-text",
                          children: [
                            a.jsx("img", {
                              src: zt,
                              alt: "FAQ icon",
                              className: "faq-icon",
                            }),
                            a.jsx("h6", {
                              className: "fw-bold",
                              children: "“Como funciona a leitura online?”",
                            }),
                          ],
                        }),
                        a.jsx(X.Body, {
                          children: a.jsx("p", {
                            className: "faq-question",
                            children:
                              "São três modos de leitura: por vídeo com horário marcado, por WhatsApp com horário marcado ou pelo WhatsApp sem horário marcado. As leituras por vídeo têm uma taxa adicional de 50$. Independente do formato, vamos construir uma leitura para o que você precisa, respeitando suas preferências e disponibilidade.",
                          }),
                        }),
                      ],
                    }),
                    a.jsxs(X.Item, {
                      eventKey: "6",
                      children: [
                        a.jsxs(X.Header, {
                          className: "icon-text",
                          children: [
                            a.jsx("img", {
                              src: zt,
                              alt: "FAQ icon",
                              className: "faq-icon",
                            }),
                            a.jsx("h6", {
                              className: "fw-bold",
                              children:
                                '"A leitura online funciona igual a presencial?"',
                            }),
                          ],
                        }),
                        a.jsx(X.Body, {
                          children: a.jsx("p", {
                            className: "faq-question",
                            children:
                              "Sim! Todas as minhas leituras são online, e elas têm a mesma profundidade que uma consulta presencial. As mensagens da espiritualidade fluem independentemente da distância.",
                          }),
                        }),
                      ],
                    }),
                    a.jsxs(X.Item, {
                      eventKey: "7",
                      children: [
                        a.jsxs(X.Header, {
                          className: "icon-text",
                          children: [
                            a.jsx("img", {
                              src: zt,
                              alt: "FAQ icon",
                              className: "faq-icon",
                            }),
                            a.jsx("h6", {
                              className: "fw-bold",
                              children:
                                '"O tarot responde sobre saúde ou gravidez?"',
                            }),
                          ],
                        }),
                        a.jsx(X.Body, {
                          children: a.jsx("p", {
                            className: "faq-question",
                            children:
                              "Não faço esse tipo de leitura - esses assuntos devem ser tratados por profissionais especializados. O tarot é ótimo para te ajudar a lidar com os efeitos emocionais/energéticos que surgem a partir dessas questões, mas não substitui o cuidado médico.",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
function d2() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(Th, {}),
      a.jsx("br", {}),
      a.jsx(_h, {}),
      a.jsx(Fh, {}),
      a.jsx("br", {}),
      a.jsx(Gh, {}),
      a.jsx(Jh, {}),
      a.jsx(s2, {}),
      a.jsx(a2, {}),
      a.jsx(c2, {}),
      a.jsx(n2, {}),
    ],
  });
}
xi.createRoot(document.getElementById("root")).render(
  a.jsx(ut.StrictMode, { children: a.jsx(d2, {}) })
);
