import {
  F,
  _,
  p
} from "./chunk-3DX4SQKH.js";
import {
  b,
  l,
  t
} from "./chunk-GKN43OMQ.js";
import "./chunk-Y2F7D3TJ.js";

// node_modules/@preact/signals-core/dist/signals-core.module.js
function i() {
  throw new Error("Cycle detected");
}
var t2 = Symbol.for("preact-signals");
function r() {
  if (!(v > 1)) {
    var i2, t3 = false;
    while (void 0 !== f) {
      var r2 = f;
      f = void 0;
      e++;
      while (void 0 !== r2) {
        var n2 = r2.o;
        r2.o = void 0;
        r2.f &= -3;
        if (!(8 & r2.f) && l2(r2))
          try {
            r2.c();
          } catch (r3) {
            if (!t3) {
              i2 = r3;
              t3 = true;
            }
          }
        r2 = n2;
      }
    }
    e = 0;
    v--;
    if (t3)
      throw i2;
  } else
    v--;
}
function n(i2) {
  if (v > 0)
    return i2();
  v++;
  try {
    return i2();
  } finally {
    r();
  }
}
var o = void 0;
var h = 0;
function s(i2) {
  if (h > 0)
    return i2();
  var t3 = o;
  o = void 0;
  h++;
  try {
    return i2();
  } finally {
    h--;
    o = t3;
  }
}
var f = void 0;
var v = 0;
var e = 0;
var u = 0;
function c(i2) {
  if (void 0 !== o) {
    var t3 = i2.n;
    if (void 0 === t3 || t3.t !== o) {
      t3 = { i: 0, S: i2, p: o.s, n: void 0, t: o, e: void 0, x: void 0, r: t3 };
      if (void 0 !== o.s)
        o.s.n = t3;
      o.s = t3;
      i2.n = t3;
      if (32 & o.f)
        i2.S(t3);
      return t3;
    } else if (-1 === t3.i) {
      t3.i = 0;
      if (void 0 !== t3.n) {
        t3.n.p = t3.p;
        if (void 0 !== t3.p)
          t3.p.n = t3.n;
        t3.p = o.s;
        t3.n = void 0;
        o.s.n = t3;
        o.s = t3;
      }
      return t3;
    }
  }
}
function d(i2) {
  this.v = i2;
  this.i = 0;
  this.n = void 0;
  this.t = void 0;
}
d.prototype.brand = t2;
d.prototype.h = function() {
  return true;
};
d.prototype.S = function(i2) {
  if (this.t !== i2 && void 0 === i2.e) {
    i2.x = this.t;
    if (void 0 !== this.t)
      this.t.e = i2;
    this.t = i2;
  }
};
d.prototype.U = function(i2) {
  if (void 0 !== this.t) {
    var t3 = i2.e, r2 = i2.x;
    if (void 0 !== t3) {
      t3.x = r2;
      i2.e = void 0;
    }
    if (void 0 !== r2) {
      r2.e = t3;
      i2.x = void 0;
    }
    if (i2 === this.t)
      this.t = r2;
  }
};
d.prototype.subscribe = function(i2) {
  var t3 = this;
  return O(function() {
    var r2 = t3.value, n2 = 32 & this.f;
    this.f &= -33;
    try {
      i2(r2);
    } finally {
      this.f |= n2;
    }
  });
};
d.prototype.valueOf = function() {
  return this.value;
};
d.prototype.toString = function() {
  return this.value + "";
};
d.prototype.toJSON = function() {
  return this.value;
};
d.prototype.peek = function() {
  return this.v;
};
Object.defineProperty(d.prototype, "value", { get: function() {
  var i2 = c(this);
  if (void 0 !== i2)
    i2.i = this.i;
  return this.v;
}, set: function(t3) {
  if (o instanceof _2)
    !function() {
      throw new Error("Computed cannot have side-effects");
    }();
  if (t3 !== this.v) {
    if (e > 100)
      i();
    this.v = t3;
    this.i++;
    u++;
    v++;
    try {
      for (var n2 = this.t; void 0 !== n2; n2 = n2.x)
        n2.t.N();
    } finally {
      r();
    }
  }
} });
function a(i2) {
  return new d(i2);
}
function l2(i2) {
  for (var t3 = i2.s; void 0 !== t3; t3 = t3.n)
    if (t3.S.i !== t3.i || !t3.S.h() || t3.S.i !== t3.i)
      return true;
  return false;
}
function y(i2) {
  for (var t3 = i2.s; void 0 !== t3; t3 = t3.n) {
    var r2 = t3.S.n;
    if (void 0 !== r2)
      t3.r = r2;
    t3.S.n = t3;
    t3.i = -1;
    if (void 0 === t3.n) {
      i2.s = t3;
      break;
    }
  }
}
function w(i2) {
  var t3 = i2.s, r2 = void 0;
  while (void 0 !== t3) {
    var n2 = t3.p;
    if (-1 === t3.i) {
      t3.S.U(t3);
      if (void 0 !== n2)
        n2.n = t3.n;
      if (void 0 !== t3.n)
        t3.n.p = n2;
    } else
      r2 = t3;
    t3.S.n = t3.r;
    if (void 0 !== t3.r)
      t3.r = void 0;
    t3 = n2;
  }
  i2.s = r2;
}
function _2(i2) {
  d.call(this, void 0);
  this.x = i2;
  this.s = void 0;
  this.g = u - 1;
  this.f = 4;
}
(_2.prototype = new d()).h = function() {
  this.f &= -3;
  if (1 & this.f)
    return false;
  if (32 == (36 & this.f))
    return true;
  this.f &= -5;
  if (this.g === u)
    return true;
  this.g = u;
  this.f |= 1;
  if (this.i > 0 && !l2(this)) {
    this.f &= -2;
    return true;
  }
  var i2 = o;
  try {
    y(this);
    o = this;
    var t3 = this.x();
    if (16 & this.f || this.v !== t3 || 0 === this.i) {
      this.v = t3;
      this.f &= -17;
      this.i++;
    }
  } catch (i3) {
    this.v = i3;
    this.f |= 16;
    this.i++;
  }
  o = i2;
  w(this);
  this.f &= -2;
  return true;
};
_2.prototype.S = function(i2) {
  if (void 0 === this.t) {
    this.f |= 36;
    for (var t3 = this.s; void 0 !== t3; t3 = t3.n)
      t3.S.S(t3);
  }
  d.prototype.S.call(this, i2);
};
_2.prototype.U = function(i2) {
  if (void 0 !== this.t) {
    d.prototype.U.call(this, i2);
    if (void 0 === this.t) {
      this.f &= -33;
      for (var t3 = this.s; void 0 !== t3; t3 = t3.n)
        t3.S.U(t3);
    }
  }
};
_2.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i2 = this.t; void 0 !== i2; i2 = i2.x)
      i2.t.N();
  }
};
_2.prototype.peek = function() {
  if (!this.h())
    i();
  if (16 & this.f)
    throw this.v;
  return this.v;
};
Object.defineProperty(_2.prototype, "value", { get: function() {
  if (1 & this.f)
    i();
  var t3 = c(this);
  this.h();
  if (void 0 !== t3)
    t3.i = this.i;
  if (16 & this.f)
    throw this.v;
  return this.v;
} });
function p2(i2) {
  return new _2(i2);
}
function g(i2) {
  var t3 = i2.u;
  i2.u = void 0;
  if ("function" == typeof t3) {
    v++;
    var n2 = o;
    o = void 0;
    try {
      t3();
    } catch (t4) {
      i2.f &= -2;
      i2.f |= 8;
      b2(i2);
      throw t4;
    } finally {
      o = n2;
      r();
    }
  }
}
function b2(i2) {
  for (var t3 = i2.s; void 0 !== t3; t3 = t3.n)
    t3.S.U(t3);
  i2.x = void 0;
  i2.s = void 0;
  g(i2);
}
function x(i2) {
  if (o !== this)
    throw new Error("Out-of-order effect");
  w(this);
  o = i2;
  this.f &= -2;
  if (8 & this.f)
    b2(this);
  r();
}
function E(i2) {
  this.x = i2;
  this.u = void 0;
  this.s = void 0;
  this.o = void 0;
  this.f = 32;
}
E.prototype.c = function() {
  var i2 = this.S();
  try {
    if (8 & this.f)
      return;
    if (void 0 === this.x)
      return;
    var t3 = this.x();
    if ("function" == typeof t3)
      this.u = t3;
  } finally {
    i2();
  }
};
E.prototype.S = function() {
  if (1 & this.f)
    i();
  this.f |= 1;
  this.f &= -9;
  g(this);
  y(this);
  v++;
  var t3 = o;
  o = this;
  return x.bind(this, t3);
};
E.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 2;
    this.o = f;
    f = this;
  }
};
E.prototype.d = function() {
  this.f |= 8;
  if (!(1 & this.f))
    b2(this);
};
function O(i2) {
  var t3 = new E(i2);
  try {
    t3.c();
  } catch (i3) {
    t3.d();
    throw i3;
  }
  return t3.d.bind(t3);
}

// node_modules/@preact/signals/dist/signals.module.js
var v2;
var s2;
function l3(n2, i2) {
  l[n2] = i2.bind(null, l[n2] || function() {
  });
}
function d2(n2) {
  if (s2)
    s2();
  s2 = n2 && n2.S();
}
function p3(n2) {
  var r2 = this, f2 = n2.data, o2 = useSignal(f2);
  o2.value = f2;
  var e2 = F(function() {
    var n3 = r2.__v;
    while (n3 = n3.__)
      if (n3.__c) {
        n3.__c.__$f |= 4;
        break;
      }
    r2.__$u.c = function() {
      var n4;
      if (!t(e2.peek()) && 3 === (null == (n4 = r2.base) ? void 0 : n4.nodeType))
        r2.base.data = e2.peek();
      else {
        r2.__$f |= 1;
        r2.setState({});
      }
    };
    return p2(function() {
      var n4 = o2.value.value;
      return 0 === n4 ? 0 : true === n4 ? "" : n4 || "";
    });
  }, []);
  return e2.value;
}
p3.displayName = "_st";
Object.defineProperties(d.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: p3 }, props: { configurable: true, get: function() {
  return { data: this };
} }, __b: { configurable: true, value: 1 } });
l3("__b", function(n2, r2) {
  if ("string" == typeof r2.type) {
    var i2, t3 = r2.props;
    for (var f2 in t3)
      if ("children" !== f2) {
        var o2 = t3[f2];
        if (o2 instanceof d) {
          if (!i2)
            r2.__np = i2 = {};
          i2[f2] = o2;
          t3[f2] = o2.peek();
        }
      }
  }
  n2(r2);
});
l3("__r", function(n2, r2) {
  d2();
  var i2, t3 = r2.__c;
  if (t3) {
    t3.__$f &= -2;
    if (void 0 === (i2 = t3.__$u))
      t3.__$u = i2 = function(n3) {
        var r3;
        O(function() {
          r3 = this;
        });
        r3.c = function() {
          t3.__$f |= 1;
          t3.setState({});
        };
        return r3;
      }();
  }
  v2 = t3;
  d2(i2);
  n2(r2);
});
l3("__e", function(n2, r2, i2, t3) {
  d2();
  v2 = void 0;
  n2(r2, i2, t3);
});
l3("diffed", function(n2, r2) {
  d2();
  v2 = void 0;
  var i2;
  if ("string" == typeof r2.type && (i2 = r2.__e)) {
    var t3 = r2.__np, f2 = r2.props;
    if (t3) {
      var o2 = i2.U;
      if (o2)
        for (var e2 in o2) {
          var u2 = o2[e2];
          if (void 0 !== u2 && !(e2 in t3)) {
            u2.d();
            o2[e2] = void 0;
          }
        }
      else
        i2.U = o2 = {};
      for (var a2 in t3) {
        var c2 = o2[a2], s3 = t3[a2];
        if (void 0 === c2) {
          c2 = _3(i2, a2, s3, f2);
          o2[a2] = c2;
        } else
          c2.o(s3, f2);
      }
    }
  }
  n2(r2);
});
function _3(n2, r2, i2, t3) {
  var f2 = r2 in n2 && void 0 === n2.ownerSVGElement, o2 = a(i2);
  return { o: function(n3, r3) {
    o2.value = n3;
    t3 = r3;
  }, d: O(function() {
    var i3 = o2.value.value;
    if (t3[r2] !== i3) {
      t3[r2] = i3;
      if (f2)
        n2[r2] = i3;
      else if (i3)
        n2.setAttribute(r2, i3);
      else
        n2.removeAttribute(r2);
    }
  }) };
}
l3("unmount", function(n2, r2) {
  if ("string" == typeof r2.type) {
    var i2 = r2.__e;
    if (i2) {
      var t3 = i2.U;
      if (t3) {
        i2.U = void 0;
        for (var f2 in t3) {
          var o2 = t3[f2];
          if (o2)
            o2.d();
        }
      }
    }
  } else {
    var e2 = r2.__c;
    if (e2) {
      var u2 = e2.__$u;
      if (u2) {
        e2.__$u = void 0;
        u2.d();
      }
    }
  }
  n2(r2);
});
l3("__h", function(n2, r2, i2, t3) {
  if (t3 < 3 || 9 === t3)
    r2.__$f |= 2;
  n2(r2, i2, t3);
});
b.prototype.shouldComponentUpdate = function(n2, r2) {
  var i2 = this.__$u;
  if (!(i2 && void 0 !== i2.s || 4 & this.__$f))
    return true;
  if (3 & this.__$f)
    return true;
  for (var t3 in r2)
    return true;
  for (var f2 in n2)
    if ("__source" !== f2 && n2[f2] !== this.props[f2])
      return true;
  for (var o2 in this.props)
    if (!(o2 in n2))
      return true;
  return false;
};
function useSignal(n2) {
  return F(function() {
    return a(n2);
  }, []);
}
function useComputed(n2) {
  var r2 = _(n2);
  r2.current = n2;
  v2.__$f |= 4;
  return F(function() {
    return p2(function() {
      return r2.current();
    });
  }, []);
}
function useSignalEffect(n2) {
  var r2 = _(n2);
  r2.current = n2;
  p(function() {
    return O(function() {
      return r2.current();
    });
  }, []);
}
export {
  d as Signal,
  n as batch,
  p2 as computed,
  O as effect,
  a as signal,
  s as untracked,
  useComputed,
  useSignal,
  useSignalEffect
};
//# sourceMappingURL=@preact_signals.js.map
