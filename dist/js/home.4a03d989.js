(window['webpackJsonp'] = window['webpackJsonp'] || []).push([['home'], {
  '007d': function(t, e, i) {
    var n = i('3eba'); i('cb8f'), i('a96b'), i('42f6'), n.registerAction({
      type: 'showTip', event: 'showTip', update: 'tooltip:manuallyShowTip',
    }, (function() {})), n.registerAction({
      type: 'hideTip', event: 'hideTip', update: 'tooltip:manuallyHideTip',
    }, (function() {}))
  },
  '0156': function(t, e, i) {
    var n = i('6d8b'); function r(t, e, i) {
      i = i || {}; var r = t.coordinateSystem,
        a = e.axis,
        o = {},
        s = a.getAxesOnZeroOf()[0],
        l = a.position,
        u = s ? 'onZero' : l,
        h = a.dim,
        c = r.getRect(),
        d = [c.x, c.x + c.width, c.y, c.y + c.height],
        f = {
          left: 0, right: 1, top: 0, bottom: 1, onZero: 2,
        },
        p = e.get('offset') || 0,
        g = h === 'x' ? [d[2] - p, d[3] + p] : [d[0] - p, d[1] + p]; if (s) {var v = s.toGlobalCoord(s.dataToCoord(0)); g[f.onZero] = Math.max(Math.min(v, g[1]), g[0])}o.position = [h === 'y' ? g[f[u]] : d[0], h === 'x' ? g[f[u]] : d[3]], o.rotation = Math.PI / 2 * (h === 'x' ? 0 : 1); var m = {
        top: -1, bottom: 1, left: -1, right: 1,
      }; o.labelDirection = o.tickDirection = o.nameDirection = m[l], o.labelOffset = s ? g[f[l]] - g[f.onZero] : 0, e.get('axisTick.inside') && (o.tickDirection = -o.tickDirection), n.retrieve(i.labelInside, e.get('axisLabel.inside')) && (o.labelDirection = -o.labelDirection); var y = e.get('axisLabel.rotate'); return o.labelRotate = u === 'top' ? -y : y, o.z2 = 1, o
    }e.layout = r
  },
  '01ed': function(t, e, i) {
    var n = i('3eba'),
      r = i('6d8b'),
      a = i('2306'); i('5aa9'), i('af24'), n.extendComponentView({
      type: 'grid',
      render: function(t, e) {
        this.group.removeAll(), t.get('show') && this.group.add(new a.Rect({
          shape: t.coordinateSystem.getRect(),
          style: r.defaults({
            fill: t.get('backgroundColor'),
          }, t.getItemStyle()),
          silent: !0,
          z2: -1,
        }))
      },
    }), n.registerPreprocessor((function(t) {t.xAxis && t.yAxis && !t.grid && (t.grid = {})}))
  },
  '0352': function(t, e, i) {
    var n = i('6cb7'),
      r = i('b12f'),
      a = i('0f99'),
      o = a.detectSourceFormat,
      s = i('93d0'),
      l = s.SERIES_LAYOUT_BY_COLUMN; n.extend({
      type: 'dataset',
      defaultOption: {
        seriesLayoutBy: l, sourceHeader: null, dimensions: null, source: null,
      },
      optionUpdated: function() {o(this)},
    }), r.extend({
      type: 'dataset',
    })
  },
  '04f6': function(t, e) {
    var i = 32,
      n = 7; function r(t) {var e = 0; while (t >= i) {e |= 1 & t, t >>= 1;} return t + e} function a(t, e, i, n) {var r = e + 1; if (r === i) {return 1;} if (n(t[r++], t[e]) < 0) {while (r < i && n(t[r], t[r - 1]) < 0) {r++;}o(t, e, r)} else {while (r < i && n(t[r], t[r - 1]) >= 0) {r++;}} return r - e} function o(t, e, i) {i--; while (e < i) {var n = t[e]; t[e++] = t[i], t[i--] = n}} function s(t, e, i, n, r) {
      for (n === e && n++; n < i; n++) {
        var a,
          o = t[n],
          s = e,
          l = n; while (s < l) {a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;} var u = n - s; switch (u) {case 3:t[s + 3] = t[s + 2]; case 2:t[s + 2] = t[s + 1]; case 1:t[s + 1] = t[s]; break; default:while (u > 0) {t[s + u] = t[s + u - 1], u--}}t[s] = o
      }
    } function l(t, e, i, n, r, a) {
      var o = 0,
        s = 0,
        l = 1; if (a(t, e[i + r]) > 0) {s = n - r; while (l < s && a(t, e[i + r + l]) > 0) {o = l, l = 1 + (l << 1), l <= 0 && (l = s);}l > s && (l = s), o += r, l += r} else {s = r + 1; while (l < s && a(t, e[i + r - l]) <= 0) {o = l, l = 1 + (l << 1), l <= 0 && (l = s);}l > s && (l = s); var u = o; o = r - l, l = r - u}o++; while (o < l) {var h = o + (l - o >>> 1); a(t, e[i + h]) > 0 ? o = h + 1 : l = h} return l
    } function u(t, e, i, n, r, a) {
      var o = 0,
        s = 0,
        l = 1; if (a(t, e[i + r]) < 0) {s = r + 1; while (l < s && a(t, e[i + r - l]) < 0) {o = l, l = 1 + (l << 1), l <= 0 && (l = s);}l > s && (l = s); var u = o; o = r - l, l = r - u} else {s = n - r; while (l < s && a(t, e[i + r + l]) >= 0) {o = l, l = 1 + (l << 1), l <= 0 && (l = s);}l > s && (l = s), o += r, l += r}o++; while (o < l) {var h = o + (l - o >>> 1); a(t, e[i + h]) < 0 ? l = h : o = h + 1} return l
    } function h(t, e) {
      var i, r,
        a = n,
        o = 0,
        s = 0; o = t.length; var h = []; function c(t, e) {i[s] = t, r[s] = e, s += 1} function d() {while (s > 1) {var t = s - 2; if (t >= 1 && r[t - 1] <= r[t] + r[t + 1] || t >= 2 && r[t - 2] <= r[t] + r[t - 1]) {r[t - 1] < r[t + 1] && t--;} else if (r[t] > r[t + 1]) {break;} p(t)}} function f() {while (s > 1) {var t = s - 2; t > 0 && r[t - 1] < r[t + 1] && t--, p(t)}} function p(n) {
        var a = i[n],
          o = r[n],
          h = i[n + 1],
          c = r[n + 1]; r[n] = o + c, n === s - 3 && (i[n + 1] = i[n + 2], r[n + 1] = r[n + 2]), s--; var d = u(t[h], t, a, o, 0, e); a += d, o -= d, o !== 0 && (c = l(t[a + o - 1], t, h, c, c - 1, e), c !== 0 && (o <= c ? g(a, o, h, c) : v(a, o, h, c)))
      } function g(i, r, o, s) {
        var c = 0; for (c = 0; c < r; c++) {h[c] = t[i + c];} var d = 0,
          f = o,
          p = i; if (t[p++] = t[f++], --s !== 0) {
          if (r !== 1) {
            var g, v, m,
              y = a; while (1) {g = 0, v = 0, m = !1; do {if (e(t[f], h[d]) < 0) {if (t[p++] = t[f++], v++, g = 0, --s === 0) {m = !0; break}} else if (t[p++] = h[d++], g++, v = 0, --r === 1) {m = !0; break}} while ((g | v) < y);if (m) {break;} do {if (g = u(t[f], h, d, r, 0, e), g !== 0) {for (c = 0; c < g; c++) {t[p + c] = h[d + c];} if (p += g, d += g, r -= g, r <= 1) {m = !0; break}} if (t[p++] = t[f++], --s === 0) {m = !0; break} if (v = l(h[d], t, f, s, 0, e), v !== 0) {for (c = 0; c < v; c++) {t[p + c] = t[f + c];} if (p += v, f += v, s -= v, s === 0) {m = !0; break}} if (t[p++] = h[d++], --r === 1) {m = !0; break}y--} while (g >= n || v >= n);if (m) {break;} y < 0 && (y = 0), y += 2} if (a = y, a < 1 && (a = 1), r === 1) {for (c = 0; c < s; c++) {t[p + c] = t[f + c];}t[p + s] = h[d]} else {if (r === 0) {throw new Error();} for (c = 0; c < r; c++) {t[p + c] = h[d + c]}}
          } else {for (c = 0; c < s; c++) {t[p + c] = t[f + c];}t[p + s] = h[d]}
        } else {for (c = 0; c < r; c++) {t[p + c] = h[d + c]}}
      } function v(i, r, o, s) {
        var c = 0; for (c = 0; c < s; c++) {h[c] = t[o + c];} var d = i + r - 1,
          f = s - 1,
          p = o + s - 1,
          g = 0,
          v = 0; if (t[p--] = t[d--], --r !== 0) {
          if (s !== 1) {
            var m = a; while (1) {
              var y = 0,
                x = 0,
                _ = !1; do {if (e(h[f], t[d]) < 0) {if (t[p--] = t[d--], y++, x = 0, --r === 0) {_ = !0; break}} else if (t[p--] = h[f--], x++, y = 0, --s === 1) {_ = !0; break}} while ((y | x) < m);if (_) {break;} do {if (y = r - u(h[f], t, i, r, r - 1, e), y !== 0) {for (p -= y, d -= y, r -= y, v = p + 1, g = d + 1, c = y - 1; c >= 0; c--) {t[v + c] = t[g + c];} if (r === 0) {_ = !0; break}} if (t[p--] = h[f--], --s === 1) {_ = !0; break} if (x = s - l(t[d], h, 0, s, s - 1, e), x !== 0) {for (p -= x, f -= x, s -= x, v = p + 1, g = f + 1, c = 0; c < x; c++) {t[v + c] = h[g + c];} if (s <= 1) {_ = !0; break}} if (t[p--] = t[d--], --r === 0) {_ = !0; break}m--} while (y >= n || x >= n);if (_) {break;} m < 0 && (m = 0), m += 2
            } if (a = m, a < 1 && (a = 1), s === 1) {for (p -= r, d -= r, v = p + 1, g = d + 1, c = r - 1; c >= 0; c--) {t[v + c] = t[g + c];}t[p] = h[f]} else {if (s === 0) {throw new Error();} for (g = p - (s - 1), c = 0; c < s; c++) {t[g + c] = h[c]}}
          } else {for (p -= r, d -= r, v = p + 1, g = d + 1, c = r - 1; c >= 0; c--) {t[v + c] = t[g + c];}t[p] = h[f]}
        } else {for (g = p - (s - 1), c = 0; c < s; c++) {t[g + c] = h[c]}}
      }i = [], r = [], this.mergeRuns = d, this.forceMergeRuns = f, this.pushRun = c
    } function c(t, e, n, o) {
      n || (n = 0), o || (o = t.length); var l = o - n; if (!(l < 2)) {
        var u = 0; if (l < i) {return u = a(t, n, o, e), void s(t, n, o, n + u, e);} var c = new h(t, e),
          d = r(l); do {if (u = a(t, n, o, e), u < d) {var f = l; f > d && (f = d), s(t, n, n + f, n + u, e), u = f}c.pushRun(n, u), c.mergeRuns(), l -= u, n += u} while (l !== 0);c.forceMergeRuns()
      }
    }t.exports = c
  },
  '0655': function(t, e, i) {
    var n = i('8728'),
      r = 1e-8; function a(t, e) {return Math.abs(t - e) < r} function o(t, e, i) {
      var r = 0,
        o = t[0]; if (!o) {return !1;} for (var s = 1; s < t.length; s++) {var l = t[s]; r += n(o[0], o[1], l[0], l[1], e, i), o = l} var u = t[0]; return a(o[0], u[0]) && a(o[1], u[1]) || (r += n(o[0], o[1], u[0], u[1], e, i)), r !== 0
    }e.contain = o
  },
  '06ad': function(t, e, i) {
    var n = i('4436'),
      r = i('41ef'),
      a = i('6d8b'),
      o = a.isArrayLike,
      s = Array.prototype.slice; function l(t, e) {return t[e]} function u(t, e, i) {t[e] = i} function h(t, e, i) {return (e - t) * i + t} function c(t, e, i) {return i > 0.5 ? e : t} function d(t, e, i, n, r) {var a = t.length; if (r === 1) {for (var o = 0; o < a; o++) {n[o] = h(t[o], e[o], i);}} else {var s = a && t[0].length; for (o = 0; o < a; o++) {for (var l = 0; l < s; l++) {n[o][l] = h(t[o][l], e[o][l], i)}}}} function f(t, e, i) {
      var n = t.length,
        r = e.length; if (n !== r) {var a = n > r; if (a) {t.length = r;} else {for (var o = n; o < r; o++) {t.push(i === 1 ? e[o] : s.call(e[o]))}}} var l = t[0] && t[0].length; for (o = 0; o < t.length; o++) {if (i === 1) {isNaN(t[o]) && (t[o] = e[o]);} else {for (var u = 0; u < l; u++) {isNaN(t[o][u]) && (t[o][u] = e[o][u])}}}
    } function p(t, e, i) {if (t === e) {return !0;} var n = t.length; if (n !== e.length) {return !1;} if (i === 1) {for (var r = 0; r < n; r++) {if (t[r] !== e[r]) {return !1}}} else {var a = t[0].length; for (r = 0; r < n; r++) {for (var o = 0; o < a; o++) {if (t[r][o] !== e[r][o]) {return !1}}}} return !0} function g(t, e, i, n, r, a, o, s, l) {var u = t.length; if (l === 1) {for (var h = 0; h < u; h++) {s[h] = v(t[h], e[h], i[h], n[h], r, a, o);}} else {var c = t[0].length; for (h = 0; h < u; h++) {for (var d = 0; d < c; d++) {s[h][d] = v(t[h][d], e[h][d], i[h][d], n[h][d], r, a, o)}}}} function v(t, e, i, n, r, a, o) {
      var s = 0.5 * (i - t),
        l = 0.5 * (n - e); return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e
    } function m(t) {if (o(t)) {var e = t.length; if (o(t[0])) {for (var i = [], n = 0; n < e; n++) {i.push(s.call(t[n]));} return i} return s.call(t)} return t} function y(t) {return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), 'rgba(' + t.join(',') + ')'} function x(t) {var e = t[t.length - 1].value; return o(e && e[0]) ? 2 : 1} function _(t, e, i, a, s, l) {
      var u = t._getter,
        m = t._setter,
        _ = e === 'spline',
        b = a.length; if (b) {
        var w,
          S = a[0].value,
          T = o(S),
          M = !1,
          C = !1,
          I = T ? x(a) : 0; a.sort((function(t, e) {return t.time - e.time})), w = a[b - 1].time; for (var A = [], k = [], D = a[0].value, O = !0, P = 0; P < b; P++) {A.push(a[P].time / w); var L = a[P].value; if (T && p(L, D, I) || !T && L === D || (O = !1), D = L, typeof L === 'string') {var E = r.parse(L); E ? (L = E, M = !0) : C = !0}k.push(L)} if (l || !O) {
          var R = k[b - 1]; for (P = 0; P < b - 1; P++) {T ? f(k[P], R, I) : !isNaN(k[P]) || isNaN(R) || C || M || (k[P] = R);}T && f(u(t._target, s), R, I); var B, z, N, F, V, H,
            W = 0,
            G = 0; if (M) {var U = [0, 0, 0, 0];} var Y = function(t, e) {var i; if (e < 0) {i = 0;} else if (e < G) {for (B = Math.min(W + 1, b - 1), i = B; i >= 0; i--) {if (A[i] <= e) {break;}} i = Math.min(i, b - 2)} else {for (i = W; i < b; i++) {if (A[i] > e) {break;}} i = Math.min(i - 1, b - 2)}W = i, G = e; var n = A[i + 1] - A[i]; if (n !== 0) {if (z = (e - A[i]) / n, _) {if (F = k[i], N = k[i === 0 ? i : i - 1], V = k[i > b - 2 ? b - 1 : i + 1], H = k[i > b - 3 ? b - 1 : i + 2], T) {g(N, F, V, H, z, z * z, z * z * z, u(t, s), I);} else {if (M) {r = g(N, F, V, H, z, z * z, z * z * z, U, 1), r = y(U);} else {if (C) {return c(F, V, z);} r = v(N, F, V, H, z, z * z, z * z * z)}m(t, s, r)}} else if (T) {d(k[i], k[i + 1], z, u(t, s), I);} else {var r; if (M) {d(k[i], k[i + 1], z, U, 1), r = y(U);} else {if (C) {return c(k[i], k[i + 1], z);} r = h(k[i], k[i + 1], z)}m(t, s, r)}}},
            X = new n({
              target: t._target, life: w, loop: t._loop, delay: t._delay, onframe: Y, ondestroy: i,
            }); return e && e !== 'spline' && (X.easing = e), X
        }
      }
    } var b = function(t, e, i, n) {this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || l, this._setter = n || u, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []}; b.prototype = {
      when: function(t, e) {
        var i = this._tracks; for (var n in e) {
          if (e.hasOwnProperty(n)) {
            if (!i[n]) {
              i[n] = []; var r = this._getter(this._target, n); if (r == null) {continue;} t !== 0 && i[n].push({
                time: 0, value: m(r),
              })
            }i[n].push({
              time: t, value: e[n],
            })
          }
        } return this
      },
      during: function(t) {return this._onframeList.push(t), this},
      pause: function() {for (var t = 0; t < this._clipList.length; t++) {this._clipList[t].pause();} this._paused = !0},
      resume: function() {for (var t = 0; t < this._clipList.length; t++) {this._clipList[t].resume();} this._paused = !1},
      isPaused: function() {return !!this._paused},
      _doneCallback: function() {this._tracks = {}, this._clipList.length = 0; for (var t = this._doneList, e = t.length, i = 0; i < e; i++) {t[i].call(this)}},
      start: function(t, e) {
        var i,
          n = this,
          r = 0,
          a = function() {r--, r || n._doneCallback()}; for (var o in this._tracks) {if (this._tracks.hasOwnProperty(o)) {var s = _(this, t, a, this._tracks[o], o, e); s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), i = s)}} if (i) {var l = i.onframe; i.onframe = function(t, e) {l(t, e); for (var i = 0; i < n._onframeList.length; i++) {n._onframeList[i](t, e)}}} return r || this._doneCallback(), this
      },
      stop: function(t) {for (var e = this._clipList, i = this.animation, n = 0; n < e.length; n++) {var r = e[n]; t && r.onframe(this._target, 1), i && i.removeClip(r)}e.length = 0},
      delay: function(t) {return this._delay = t, this},
      done: function(t) {return t && this._doneList.push(t), this},
      getClips: function() {return this._clipList},
    }; var w = b; t.exports = w
  },
  '07d7': function(t, e, i) {
    var n = i('6d8b'),
      r = i('41ef'),
      a = i('607d'),
      o = i('65ed'),
      s = i('22d1'),
      l = i('eda2'),
      u = n.each,
      h = l.toCamelCase,
      c = ['', '-webkit-', '-moz-', '-o-'],
      d = 'position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;'; function f(t) {
      var e = 'cubic-bezier(0.23, 1, 0.32, 1)',
        i = 'left ' + t + 's ' + e + ',top ' + t + 's ' + e; return n.map(c, (function(t) {return t + 'transition:' + i})).join(';')
    } function p(t) {
      var e = [],
        i = t.get('fontSize'),
        n = t.getTextColor(); return n && e.push('color:' + n), e.push('font:' + t.getFont()), i && e.push('line-height:' + Math.round(3 * i / 2) + 'px'), u(['decoration', 'align'], (function(i) {var n = t.get(i); n && e.push('text-' + i + ':' + n)})), e.join(';')
    } function g(t) {
      var e = [],
        i = t.get('transitionDuration'),
        n = t.get('backgroundColor'),
        a = t.getModel('textStyle'),
        o = t.get('padding'); return i && e.push(f(i)), n && (s.canvasSupported ? e.push('background-Color:' + n) : (e.push('background-Color:#' + r.toHex(n)), e.push('filter:alpha(opacity=70)'))), u(['width', 'color', 'radius'], (function(i) {
        var n = 'border-' + i,
          r = h(n),
          a = t.get(r); a != null && e.push(n + ':' + a + (i === 'color' ? '' : 'px'))
      })), e.push(p(a)), o != null && e.push('padding:' + l.normalizeCssArray(o).join('px ') + 'px'), e.join(';') + ';'
    } function v(t, e, i, n, r) {var a = e && e.painter; if (i) {var s = a && a.getViewportRoot(); s && o.transformLocalCoord(t, s, document.body, n, r)} else {t[0] = n, t[1] = r; var l = a && a.getViewportRootOffset(); l && (t[0] += l.offsetLeft, t[1] += l.offsetTop)}} function m(t, e, i) {
      if (s.wxa) {return null;} var n = document.createElement('div'); n.domBelongToZr = !0, this.el = n; var r = this._zr = e.getZr(),
        o = this._appendToBody = i && i.appendToBody; this._styleCoord = [0, 0], v(this._styleCoord, r, o, e.getWidth() / 2, e.getHeight() / 2), o ? document.body.appendChild(n) : t.appendChild(n), this._container = t, this._show = !1, this._hideTimeout; var l = this; n.onmouseenter = function() {l._enterable && (clearTimeout(l._hideTimeout), l._show = !0), l._inContent = !0}, n.onmousemove = function(t) {
        if (t = t || window.event, !l._enterable) {
          var e = r.handler,
            i = r.painter.getViewportRoot(); a.normalizeEvent(i, t, !0), e.dispatch('mousemove', t)
        }
      }, n.onmouseleave = function() {l._enterable && l._show && l.hideLater(l._hideDelay), l._inContent = !1}
    }m.prototype = {
      constructor: m,
      _enterable: !0,
      update: function() {
        var t = this._container,
          e = t.currentStyle || document.defaultView.getComputedStyle(t),
          i = t.style; i.position !== 'absolute' && e.position !== 'absolute' && (i.position = 'relative')
      },
      show: function(t) {
        clearTimeout(this._hideTimeout); var e = this.el,
          i = this._styleCoord; e.style.cssText = d + g(t) + ';left:' + i[0] + 'px;top:' + i[1] + 'px;' + (t.get('extraCssText') || ''), e.style.display = e.innerHTML ? 'block' : 'none', e.style.pointerEvents = this._enterable ? 'auto' : 'none', this._show = !0
      },
      setContent: function(t) {this.el.innerHTML = t == null ? '' : t},
      setEnterable: function(t) {this._enterable = t},
      getSize: function() {var t = this.el; return [t.clientWidth, t.clientHeight]},
      moveTo: function(t, e) {var i = this._styleCoord; v(i, this._zr, this._appendToBody, t, e); var n = this.el.style; n.left = i[0] + 'px', n.top = i[1] + 'px'},
      hide: function() {this.el.style.display = 'none', this._show = !1},
      hideLater: function(t) {!this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(n.bind(this.hide, this), t)) : this.hide())},
      isShow: function() {return this._show},
      dispose: function() {this.el.parentNode.removeChild(this.el)},
      getOuterSize: function() {
        var t = this.el.clientWidth,
          e = this.el.clientHeight; if (document.defaultView && document.defaultView.getComputedStyle) {var i = document.defaultView.getComputedStyle(this.el); i && (t += parseInt(i.borderLeftWidth, 10) + parseInt(i.borderRightWidth, 10), e += parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10))} return {
          width: t, height: e,
        }
      },
    }; var y = m; t.exports = y
  },
  '0b44': function(t, e, i) {
    var n = i('607d'),
      r = function() {this._track = []}; function a(t) {
      var e = t[1][0] - t[0][0],
        i = t[1][1] - t[0][1]; return Math.sqrt(e * e + i * i)
    } function o(t) {return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]}r.prototype = {
      constructor: r,
      recognize: function(t, e, i) {return this._doTrack(t, e, i), this._recognize(t)},
      clear: function() {return this._track.length = 0, this},
      _doTrack: function(t, e, i) {
        var r = t.touches; if (r) {
          for (var a = {
              points: [], touches: [], target: e, event: t,
            }, o = 0, s = r.length; o < s; o++) {
            var l = r[o],
              u = n.clientToLocal(i, l, {}); a.points.push([u.zrX, u.zrY]), a.touches.push(l)
          } this._track.push(a)
        }
      },
      _recognize: function(t) {for (var e in s) {if (s.hasOwnProperty(e)) {var i = s[e](this._track, t); if (i) {return i}}}},
    }; var s = {
        pinch: function(t, e) {
          var i = t.length; if (i) {
            var n = (t[i - 1] || {}).points,
              r = (t[i - 2] || {}).points || n; if (r && r.length > 1 && n && n.length > 1) {
              var s = a(n) / a(r); !isFinite(s) && (s = 1), e.pinchScale = s; var l = o(n); return e.pinchX = l[0], e.pinchY = l[1], {
                type: 'pinch', target: t[0].target, event: e,
              }
            }
          }
        },
      },
      l = r; t.exports = l
  },
  '0cde': function(t, e, i) {
    var n = i('1687'),
      r = i('401b'),
      a = n.identity,
      o = 5e-5; function s(t) {return t > o || t < -o} var l = function(t) {t = t || {}, t.position || (this.position = [0, 0]), t.rotation == null && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null},
      u = l.prototype; u.transform = null, u.needLocalTransform = function() {return s(this.rotation) || s(this.position[0]) || s(this.position[1]) || s(this.scale[0] - 1) || s(this.scale[1] - 1)}; var h = []; u.updateTransform = function() {
      var t = this.parent,
        e = t && t.transform,
        i = this.needLocalTransform(),
        r = this.transform; if (i || e) {
        r = r || n.create(), i ? this.getLocalTransform(r) : a(r), e && (i ? n.mul(r, t.transform, r) : n.copy(r, t.transform)), this.transform = r; var o = this.globalScaleRatio; if (o != null && o !== 1) {
          this.getGlobalScale(h); var s = h[0] < 0 ? -1 : 1,
            l = h[1] < 0 ? -1 : 1,
            u = ((h[0] - s) * o + s) / h[0] || 0,
            c = ((h[1] - l) * o + l) / h[1] || 0; r[0] *= u, r[1] *= u, r[2] *= c, r[3] *= c
        } this.invTransform = this.invTransform || n.create(), n.invert(this.invTransform, r)
      } else {r && a(r)}
    }, u.getLocalTransform = function(t) {return l.getLocalTransform(this, t)}, u.setTransform = function(t) {
      var e = this.transform,
        i = t.dpr || 1; e ? t.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : t.setTransform(i, 0, 0, i, 0, 0)
    }, u.restoreTransform = function(t) {var e = t.dpr || 1; t.setTransform(e, 0, 0, e, 0, 0)}; var c = [],
      d = n.create(); u.setLocalTransform = function(t) {
      if (t) {
        var e = t[0] * t[0] + t[1] * t[1],
          i = t[2] * t[2] + t[3] * t[3],
          n = this.position,
          r = this.scale; s(e - 1) && (e = Math.sqrt(e)), s(i - 1) && (i = Math.sqrt(i)), t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), n[0] = t[4], n[1] = t[5], r[0] = e, r[1] = i, this.rotation = Math.atan2(-t[1] / i, t[0] / e)
      }
    }, u.decomposeTransform = function() {
      if (this.transform) {
        var t = this.parent,
          e = this.transform; t && t.transform && (n.mul(c, t.invTransform, e), e = c); var i = this.origin; i && (i[0] || i[1]) && (d[4] = i[0], d[5] = i[1], n.mul(c, e, d), c[4] -= i[0], c[5] -= i[1], e = c), this.setLocalTransform(e)
      }
    }, u.getGlobalScale = function(t) {var e = this.transform; return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)}, u.transformCoordToLocal = function(t, e) {
      var i = [t, e],
        n = this.invTransform; return n && r.applyTransform(i, i, n), i
    }, u.transformCoordToGlobal = function(t, e) {
      var i = [t, e],
        n = this.transform; return n && r.applyTransform(i, i, n), i
    }, l.getLocalTransform = function(t, e) {
      e = e || [], a(e); var i = t.origin,
        r = t.scale || [1, 1],
        o = t.rotation || 0,
        s = t.position || [0, 0]; return i && (e[4] -= i[0], e[5] -= i[1]), n.scale(e, e, r), o && n.rotate(e, e, o), i && (e[4] += i[0], e[5] += i[1]), e[4] += s[0], e[5] += s[1], e
    }; var f = l; t.exports = f
  },
  '0da8': function(t, e, i) {
    var n = i('19eb'),
      r = i('9850'),
      a = i('6d8b'),
      o = i('5e76'); function s(t) {n.call(this, t)}s.prototype = {
      constructor: s,
      type: 'image',
      brush: function(t, e) {
        var i = this.style,
          n = i.image; i.bind(t, this, e); var r = this._image = o.createOrUpdateImage(n, this._image, this, this.onload); if (r && o.isImageReady(r)) {
          var a = i.x || 0,
            s = i.y || 0,
            l = i.width,
            u = i.height,
            h = r.width / r.height; if (l == null && u != null ? l = u * h : u == null && l != null ? u = l / h : l == null && u == null && (l = r.width, u = r.height), this.setTransform(t), i.sWidth && i.sHeight) {
            var c = i.sx || 0,
              d = i.sy || 0; t.drawImage(r, c, d, i.sWidth, i.sHeight, a, s, l, u)
          } else if (i.sx && i.sy) {
            c = i.sx, d = i.sy; var f = l - c,
              p = u - d; t.drawImage(r, c, d, f, p, a, s, l, u)
          } else {t.drawImage(r, a, s, l, u);}i.text != null && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
        }
      },
      getBoundingRect: function() {var t = this.style; return this._rect || (this._rect = new r(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect},
    }, a.inherits(s, n); var l = s; t.exports = l
  },
  '0f99': function(t, e, i) {
    var n = i('4e08'),
      r = (n.__DEV__, i('e0d3')),
      a = r.makeInner,
      o = r.getDataItemValue,
      s = i('6d8b'),
      l = s.createHashMap,
      u = s.each,
      h = s.map,
      c = s.isArray,
      d = s.isString,
      f = s.isObject,
      p = s.isTypedArray,
      g = s.isArrayLike,
      v = s.extend,
      m = (s.assert, i('ec6f')),
      y = i('93d0'),
      x = y.SOURCE_FORMAT_ORIGINAL,
      _ = y.SOURCE_FORMAT_ARRAY_ROWS,
      b = y.SOURCE_FORMAT_OBJECT_ROWS,
      w = y.SOURCE_FORMAT_KEYED_COLUMNS,
      S = y.SOURCE_FORMAT_UNKNOWN,
      T = y.SOURCE_FORMAT_TYPED_ARRAY,
      M = y.SERIES_LAYOUT_BY_ROW,
      C = {
        Must: 1, Might: 2, Not: 3,
      },
      I = a(); function A(t) {
      var e = t.option.source,
        i = S; if (p(e)) {i = T;} else if (c(e)) {e.length === 0 && (i = _); for (var n = 0, r = e.length; n < r; n++) {var a = e[n]; if (a != null) {if (c(a)) {i = _; break} if (f(a)) {i = b; break}}}} else if (f(e)) {for (var o in e) {if (e.hasOwnProperty(o) && g(e[o])) {i = w; break}}} else if (e != null) {throw new Error('Invalid data');} I(t).sourceFormat = i
    } function k(t) {return I(t).source} function D(t) {I(t).datasetMap = l()} function O(t) {
      var e = t.option,
        i = e.data,
        n = p(i) ? T : x,
        r = !1,
        a = e.seriesLayoutBy,
        o = e.sourceHeader,
        s = e.dimensions,
        l = N(t); if (l) {var u = l.option; i = u.source, n = I(l).sourceFormat, r = !0, a = a || u.seriesLayoutBy, o == null && (o = u.sourceHeader), s = s || u.dimensions} var h = P(i, n, a, o, s); I(t).source = new m({
        data: i, fromDataset: r, seriesLayoutBy: a, sourceFormat: n, dimensionsDefine: h.dimensionsDefine, startIndex: h.startIndex, dimensionsDetectCount: h.dimensionsDetectCount, encodeDefine: e.encode,
      })
    } function P(t, e, i, n, r) {
      if (!t) {
        return {
          dimensionsDefine: L(r),
        };
      } var a, s; if (e === _) {n === 'auto' || n == null ? E((function(t) {t != null && t !== '-' && (d(t) ? s == null && (s = 1) : s = 0)}), i, t, 10) : s = n ? 1 : 0, r || s !== 1 || (r = [], E((function(t, e) {r[e] = t != null ? t : ''}), i, t)), a = r ? r.length : i === M ? t.length : t[0] ? t[0].length : null;} else if (e === b) {r || (r = R(t));} else if (e === w) {r || (r = [], u(t, (function(t, e) {r.push(e)})));} else if (e === x) {var l = o(t[0]); a = c(l) && l.length || 1} return {
        startIndex: s, dimensionsDefine: L(r), dimensionsDetectCount: a,
      }
    } function L(t) {
      if (t) {
        var e = l(); return h(t, (function(t, i) {
          if (t = v({}, f(t) ? t : {
            name: t,
          }), t.name == null) {return t;} t.name += '', t.displayName == null && (t.displayName = t.name); var n = e.get(t.name); return n ? t.name += '-' + n.count++ : e.set(t.name, {
            count: 1,
          }), t
        }))
      }
    } function E(t, e, i, n) {if (n == null && (n = 1 / 0), e === M) {for (var r = 0; r < i.length && r < n; r++) {t(i[r] ? i[r][0] : null, r);}} else {var a = i[0] || []; for (r = 0; r < a.length && r < n; r++) {t(a[r], r)}}} function R(t) {
      var e,
        i = 0; while (i < t.length && !(e = t[i++])) {} if (e) {var n = []; return u(e, (function(t, e) {n.push(e)})), n}
    } function B(t, e, i) {
      var n = {},
        r = N(e); if (!r || !t) {return n;} var a, o,
        s = [],
        l = [],
        h = e.ecModel,
        c = I(h).datasetMap,
        d = r.uid + '_' + i.seriesLayoutBy; t = t.slice(), u(t, (function(e, i) {
        !f(e) && (t[i] = {
          name: e,
        }), e.type === 'ordinal' && a == null && (a = i, o = v(t[i])), n[e.name] = []
      })); var p = c.get(d) || c.set(d, {
        categoryWayDim: o, valueWayDim: 0,
      }); function g(t, e, i) {for (var n = 0; n < i; n++) {t.push(e + n)}} function v(t) {var e = t.dimsDef; return e ? e.length : 1} return u(t, (function(t, e) {
        var i = t.name,
          r = v(t); if (a == null) {var o = p.valueWayDim; g(n[i], o, r), g(l, o, r), p.valueWayDim += r} else if (a === e) {g(n[i], 0, r), g(s, 0, r);} else {o = p.categoryWayDim; g(n[i], o, r), g(l, o, r), p.categoryWayDim += r}
      })), s.length && (n.itemName = s), l.length && (n.seriesName = l), n
    } function z(t, e, i) {
      var n = {},
        r = N(t); if (!r) {return n;} var a,
        o = e.sourceFormat,
        s = e.dimensionsDefine; o !== b && o !== w || u(s, (function(t, e) {(f(t) ? t.name : t) === 'name' && (a = e)})); var l = (function() {for (var t = {}, n = {}, r = [], l = 0, u = Math.min(5, i); l < u; l++) {var h = V(e.data, o, e.seriesLayoutBy, s, e.startIndex, l); r.push(h); var c = h === C.Not; if (c && t.v == null && l !== a && (t.v = l), (t.n == null || t.n === t.v || !c && r[t.n] === C.Not) && (t.n = l), d(t) && r[t.n] !== C.Not) {return t;} c || (h === C.Might && n.v == null && l !== a && (n.v = l), n.n != null && n.n !== n.v || (n.n = l))} function d(t) {return t.v != null && t.n != null} return d(t) ? t : d(n) ? n : null}()); if (l) {n.value = l.v; var h = a != null ? a : l.n; n.itemName = [h], n.seriesName = [h]} return n
    } function N(t) {
      var e = t.option,
        i = e.data; if (!i) {return t.ecModel.getComponent('dataset', e.datasetIndex || 0)}
    } function F(t, e) {return V(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)} function V(t, e, i, n, r, a) {
      var s, l, u,
        h = 5; if (p(t)) {return C.Not;} if (n) {var g = n[a]; f(g) ? (l = g.name, u = g.type) : d(g) && (l = g)} if (u != null) {return u === 'ordinal' ? C.Must : C.Not;} if (e === _) {if (i === M) {for (var v = t[a], m = 0; m < (v || []).length && m < h; m++) {if ((s = I(v[r + m])) != null) {return s}}} else {for (m = 0; m < t.length && m < h; m++) {var y = t[r + m]; if (y && (s = I(y[a])) != null) {return s}}}} else if (e === b) {if (!l) {return C.Not;} for (m = 0; m < t.length && m < h; m++) {var S = t[m]; if (S && (s = I(S[l])) != null) {return s}}} else if (e === w) {if (!l) {return C.Not;} v = t[l]; if (!v || p(v)) {return C.Not;} for (m = 0; m < v.length && m < h; m++) {if ((s = I(v[m])) != null) {return s}}} else if (e === x) {for (m = 0; m < t.length && m < h; m++) {S = t[m]; var T = o(S); if (!c(T)) {return C.Not;} if ((s = I(T[a])) != null) {return s}}} function I(t) {var e = d(t); return t != null && isFinite(t) && t !== '' ? e ? C.Might : C.Not : e && t !== '-' ? C.Must : void 0} return C.Not
    }e.BE_ORDINAL = C, e.detectSourceFormat = A, e.getSource = k, e.resetSourceDefaulter = D, e.prepareSource = O, e.makeSeriesEncodeForAxisCoordSys = B, e.makeSeriesEncodeForNameBased = z, e.guessOrdinal = F
  },
  '133d': function(t, e, i) {
    var n = i('6d8b'),
      r = i('e0d3'); function a(t, e) {
      var i,
        a = [],
        o = t.seriesIndex; if (o == null || !(i = e.getSeriesByIndex(o))) {
        return {
          point: [],
        };
      } var s = i.getData(),
        l = r.queryDataIndex(s, t); if (l == null || l < 0 || n.isArray(l)) {
        return {
          point: [],
        };
      } var u = s.getItemGraphicEl(l),
        h = i.coordinateSystem; if (i.getTooltipPosition) {a = i.getTooltipPosition(l) || [];} else if (h && h.dataToPoint) {a = h.dataToPoint(s.getValues(n.map(h.dimensions, (function(t) {return s.mapDimension(t)})), l, !0)) || [];} else if (u) {var c = u.getBoundingRect().clone(); c.applyTransform(u.transform), a = [c.x + c.width / 2, c.y + c.height / 2]} return {
        point: a, el: u,
      }
    }t.exports = a
  },
  1418: function(t, e, i) {
    var n = i('6d8b'),
      r = i('a15a'),
      a = r.createSymbol,
      o = i('2306'),
      s = i('3842'),
      l = s.parsePercent,
      u = i('c775'),
      h = u.getDefaultLabel; function c(t, e, i) {o.Group.call(this), this.updateData(t, e, i)} var d = c.prototype,
      f = c.getSymbolSize = function(t, e) {var i = t.getItemVisual(e, 'symbolSize'); return i instanceof Array ? i.slice() : [+i, +i]}; function p(t) {return [t[0] / 2, t[1] / 2]} function g(t, e) {this.parent.drift(t, e)}d._createSymbol = function(t, e, i, n, r) {
      this.removeAll(); var o = e.getItemVisual(i, 'color'),
        s = a(t, -1, -1, 2, 2, o, r); s.attr({
        z2: 100, culling: !0, scale: p(n),
      }), s.drift = g, this._symbolType = t, this.add(s)
    }, d.stopSymbolAnimation = function(t) {this.childAt(0).stopAnimation(t)}, d.getSymbolPath = function() {return this.childAt(0)}, d.getScale = function() {return this.childAt(0).scale}, d.highlight = function() {this.childAt(0).trigger('emphasis')}, d.downplay = function() {this.childAt(0).trigger('normal')}, d.setZ = function(t, e) {var i = this.childAt(0); i.zlevel = t, i.z = e}, d.setDraggable = function(t) {var e = this.childAt(0); e.draggable = t, e.cursor = t ? 'move' : e.cursor}, d.updateData = function(t, e, i) {
      this.silent = !1; var n = t.getItemVisual(e, 'symbol') || 'circle',
        r = t.hostModel,
        a = f(t, e),
        s = n !== this._symbolType; if (s) {var l = t.getItemVisual(e, 'symbolKeepAspect'); this._createSymbol(n, t, e, a, l)} else {
        var u = this.childAt(0); u.silent = !1, o.updateProps(u, {
          scale: p(a),
        }, r, e)
      } if (this._updateCommon(t, e, a, i), s) {
        u = this.childAt(0); var h = i && i.fadeIn,
          c = {
            scale: u.scale.slice(),
          }; h && (c.style = {
          opacity: u.style.opacity,
        }), u.scale = [0, 0], h && (u.style.opacity = 0), o.initProps(u, c, r, e)
      } this._seriesModel = r
    }; var v = ['itemStyle'],
      m = ['emphasis', 'itemStyle'],
      y = ['label'],
      x = ['emphasis', 'label']; function _(t, e) {
      if (!this.incremental && !this.useHoverLayer) {
        if (e === 'emphasis') {
          var i = this.__symbolOriginalScale,
            n = i[1] / i[0],
            r = {
              scale: [Math.max(1.1 * i[0], i[0] + 3), Math.max(1.1 * i[1], i[1] + 3 * n)],
            }; this.animateTo(r, 400, 'elasticOut')
        } else {
          e === 'normal' && this.animateTo({
            scale: this.__symbolOriginalScale,
          }, 400, 'elasticOut')
        }
      }
    }d._updateCommon = function(t, e, i, r) {
      var a = this.childAt(0),
        s = t.hostModel,
        u = t.getItemVisual(e, 'color'); a.type !== 'image' ? a.useStyle({
        strokeNoScale: !0,
      }) : a.setStyle({
        opacity: null, shadowBlur: null, shadowOffsetX: null, shadowOffsetY: null, shadowColor: null,
      }); var c = r && r.itemStyle,
        d = r && r.hoverItemStyle,
        f = r && r.symbolRotate,
        g = r && r.symbolOffset,
        b = r && r.labelModel,
        w = r && r.hoverLabelModel,
        S = r && r.hoverAnimation,
        T = r && r.cursorStyle; if (!r || t.hasItemOption) {var M = r && r.itemModel ? r.itemModel : t.getItemModel(e); c = M.getModel(v).getItemStyle(['color']), d = M.getModel(m).getItemStyle(), f = M.getShallow('symbolRotate'), g = M.getShallow('symbolOffset'), b = M.getModel(y), w = M.getModel(x), S = M.getShallow('hoverAnimation'), T = M.getShallow('cursor')} else {d = n.extend({}, d);} var C = a.style; a.attr('rotation', (f || 0) * Math.PI / 180 || 0), g && a.attr('position', [l(g[0], i[0]), l(g[1], i[1])]), T && a.attr('cursor', T), a.setColor(u, r && r.symbolInnerColor), a.setStyle(c); var I = t.getItemVisual(e, 'opacity'); I != null && (C.opacity = I); var A = t.getItemVisual(e, 'liftZ'),
        k = a.__z2Origin; A != null ? k == null && (a.__z2Origin = a.z2, a.z2 += A) : k != null && (a.z2 = k, a.__z2Origin = null); var D = r && r.useNameLabel; function O(e, i) {return D ? t.getName(e) : h(t, e)}o.setLabelStyle(C, d, b, w, {
        labelFetcher: s, labelDataIndex: e, defaultText: O, isRectText: !0, autoColor: u,
      }), a.__symbolOriginalScale = p(i), a.hoverStyle = d, a.highDownOnUpdate = S && s.isAnimationEnabled() ? _ : null, o.setHoverStyle(a)
    }, d.fadeOut = function(t, e) {
      var i = this.childAt(0); this.silent = i.silent = !0, (!e || !e.keepLabel) && (i.style.text = null), o.updateProps(i, {
        style: {
          opacity: 0,
        },
        scale: [0, 0],
      }, this._seriesModel, this.dataIndex, t)
    }, n.inherits(c, o.Group); var b = c; t.exports = b
  },
  1548: function(t, e, i) {
    var n = i('6d8b'),
      r = i('3301'),
      a = i('697e'),
      o = i('2023'),
      s = i('4319'),
      l = i('f934'); l.getLayoutRect; e.getLayoutRect = l.getLayoutRect; var u = i('ee1a'),
      h = u.enableDataStack,
      c = u.isDimensionStacked,
      d = u.getStackedDimension,
      f = i('862d'); e.completeDimensions = f; var p = i('b1d4'); e.createDimensions = p; var g = i('a15a'); function v(t) {return r(t.getSource(), t)}e.createSymbol = g.createSymbol; var m = {
      isDimensionStacked: c, enableDataStack: h, getStackedDimension: d,
    }; function y(t, e) {var i = e; s.isInstance(e) || (i = new s(e), n.mixin(i, o)); var r = a.createScaleByModel(i); return r.setExtent(t[0], t[1]), a.niceScaleExtent(r, i), r} function x(t) {n.mixin(t, o)}e.createList = v, e.dataStack = m, e.createScale = y, e.mixinAxisModelCommonMethods = x
  },
  1687: function(t, e) {
    var i = typeof Float32Array === 'undefined' ? Array : Float32Array; function n() {var t = new i(6); return r(t), t} function r(t) {return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t} function a(t, e) {return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t} function o(t, e, i) {
      var n = e[0] * i[0] + e[2] * i[1],
        r = e[1] * i[0] + e[3] * i[1],
        a = e[0] * i[2] + e[2] * i[3],
        o = e[1] * i[2] + e[3] * i[3],
        s = e[0] * i[4] + e[2] * i[5] + e[4],
        l = e[1] * i[4] + e[3] * i[5] + e[5]; return t[0] = n, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t
    } function s(t, e, i) {return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t} function l(t, e, i) {
      var n = e[0],
        r = e[2],
        a = e[4],
        o = e[1],
        s = e[3],
        l = e[5],
        u = Math.sin(i),
        h = Math.cos(i); return t[0] = n * h + o * u, t[1] = -n * u + o * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, t[4] = h * a + u * l, t[5] = h * l - u * a, t
    } function u(t, e, i) {
      var n = i[0],
        r = i[1]; return t[0] = e[0] * n, t[1] = e[1] * r, t[2] = e[2] * n, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * r, t
    } function h(t, e) {
      var i = e[0],
        n = e[2],
        r = e[4],
        a = e[1],
        o = e[3],
        s = e[5],
        l = i * o - a * n; return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - o * r) * l, t[5] = (a * r - i * s) * l, t) : null
    } function c(t) {var e = n(); return a(e, t), e}e.create = n, e.identity = r, e.copy = a, e.mul = o, e.translate = s, e.rotate = l, e.scale = u, e.invert = h, e.clone = c
  },
  '17d6': function(t, e, i) {
    var n = i('6d8b'),
      r = i('22d1'),
      a = i('e0d3'),
      o = a.makeInner,
      s = o(),
      l = n.each; function u(t, e, i) {if (!r.node) {var n = e.getZr(); s(n).records || (s(n).records = {}), h(n, e); var a = s(n).records[t] || (s(n).records[t] = {}); a.handler = i}} function h(t, e) {function i(i, n) {t.on(i, (function(i) {var r = p(e); l(s(t).records, (function(t) {t && n(t, i, r.dispatchAction)})), c(r.pendings, e)}))}s(t).initialized || (s(t).initialized = !0, i('click', n.curry(f, 'click')), i('mousemove', n.curry(f, 'mousemove')), i('globalout', d))} function c(t, e) {
      var i,
        n = t.showTip.length,
        r = t.hideTip.length; n ? i = t.showTip[n - 1] : r && (i = t.hideTip[r - 1]), i && (i.dispatchAction = null, e.dispatchAction(i))
    } function d(t, e, i) {t.handler('leave', null, i)} function f(t, e, i, n) {e.handler(t, i, n)} function p(t) {
      var e = {
          showTip: [], hideTip: [],
        },
        i = function(n) {var r = e[n.type]; r ? r.push(n) : (n.dispatchAction = i, t.dispatchAction(n))}; return {
        dispatchAction: i, pendings: e,
      }
    } function g(t, e) {
      if (!r.node) {
        var i = e.getZr(),
          n = (s(i).records || {})[t]; n && (s(i).records[t] = null)
      }
    }e.register = u, e.unregister = g
  },
  '18c0': function(t, e, i) {
    var n = i('6d8b'),
      r = i('e0d8'),
      a = i('8e43'),
      o = r.prototype,
      s = r.extend({
        type: 'ordinal',
        init: function(t, e) {
          t && !n.isArray(t) || (t = new a({
            categories: t,
          })), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1]
        },
        parse: function(t) {return typeof t === 'string' ? this._ordinalMeta.getOrdinal(t) : Math.round(t)},
        contain: function(t) {return t = this.parse(t), o.contain.call(this, t) && this._ordinalMeta.categories[t] != null},
        normalize: function(t) {return o.normalize.call(this, this.parse(t))},
        scale: function(t) {return Math.round(o.scale.call(this, t))},
        getTicks: function() {
          var t = [],
            e = this._extent,
            i = e[0]; while (i <= e[1]) {t.push(i), i++;} return t
        },
        getLabel: function(t) {if (!this.isBlank()) {return this._ordinalMeta.categories[t]}},
        count: function() {return this._extent[1] - this._extent[0] + 1},
        unionExtentFromData: function(t, e) {this.unionExtent(t.getApproximateExtent(e))},
        getOrdinalMeta: function() {return this._ordinalMeta},
        niceTicks: n.noop,
        niceExtent: n.noop,
      }); s.create = function() {return new s()}; var l = s; t.exports = l
  },
  '19eb': function(t, e, i) {
    var n = i('6d8b'),
      r = i('2b61'),
      a = i('d5b7'),
      o = i('9e2e'); function s(t) {for (var e in t = t || {}, a.call(this, t), t) {t.hasOwnProperty(e) && e !== 'style' && (this[e] = t[e]);} this.style = new r(t.style, this), this._rect = null, this.__clipPaths = null}s.prototype = {
      constructor: s,
      type: 'displayable',
      __dirty: !0,
      invisible: !1,
      z: 0,
      z2: 0,
      zlevel: 0,
      draggable: !1,
      dragging: !1,
      silent: !1,
      culling: !1,
      cursor: 'pointer',
      rectHover: !1,
      progressive: !1,
      incremental: !1,
      globalScaleRatio: 1,
      beforeBrush: function(t) {},
      afterBrush: function(t) {},
      brush: function(t, e) {},
      getBoundingRect: function() {},
      contain: function(t, e) {return this.rectContain(t, e)},
      traverse: function(t, e) {t.call(e, this)},
      rectContain: function(t, e) {
        var i = this.transformCoordToLocal(t, e),
          n = this.getBoundingRect(); return n.contain(i[0], i[1])
      },
      dirty: function() {this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh()},
      animateStyle: function(t) {return this.animate('style', t)},
      attrKV: function(t, e) {t !== 'style' ? a.prototype.attrKV.call(this, t, e) : this.style.set(e)},
      setStyle: function(t, e) {return this.style.set(t, e), this.dirty(!1), this},
      useStyle: function(t) {return this.style = new r(t, this), this.dirty(!1), this},
      calculateTextPosition: null,
    }, n.inherits(s, a), n.mixin(s, o); var l = s; t.exports = l
  },
  '1fab': function(t, e) {
    var i = Array.prototype.slice,
      n = function(t) {this._$handlers = {}, this._$eventProcessor = t}; function r(t, e) {var i = t._$eventProcessor; return e != null && i && i.normalizeQuery && (e = i.normalizeQuery(e)), e} function a(t, e, i, n, a, o) {
      var s = t._$handlers; if (typeof i === 'function' && (a = n, n = i, i = null), !n || !e) {return t;} i = r(t, i), s[e] || (s[e] = []); for (var l = 0; l < s[e].length; l++) {if (s[e][l].h === n) {return t;}} var u = {
          h: n, one: o, query: i, ctx: a || t, callAtLast: n.zrEventfulCallAtLast,
        },
        h = s[e].length - 1,
        c = s[e][h]; return c && c.callAtLast ? s[e].splice(h, 0, u) : s[e].push(u), t
    }n.prototype = {
      constructor: n,
      one: function(t, e, i, n) {return a(this, t, e, i, n, !0)},
      on: function(t, e, i, n) {return a(this, t, e, i, n, !1)},
      isSilent: function(t) {var e = this._$handlers; return !e[t] || !e[t].length},
      off: function(t, e) {var i = this._$handlers; if (!t) {return this._$handlers = {}, this;} if (e) {if (i[t]) {for (var n = [], r = 0, a = i[t].length; r < a; r++) {i[t][r].h !== e && n.push(i[t][r]);}i[t] = n}i[t] && i[t].length === 0 && delete i[t]} else {delete i[t];} return this},
      trigger: function(t) {
        var e = this._$handlers[t],
          n = this._$eventProcessor; if (e) {
          var r = arguments,
            a = r.length; a > 3 && (r = i.call(r, 1)); for (var o = e.length, s = 0; s < o;) {var l = e[s]; if (n && n.filter && l.query != null && !n.filter(t, l.query)) {s++;} else {switch (a) {case 1:l.h.call(l.ctx); break; case 2:l.h.call(l.ctx, r[1]); break; case 3:l.h.call(l.ctx, r[1], r[2]); break; default:l.h.apply(l.ctx, r); break}l.one ? (e.splice(s, 1), o--) : s++}}
        } return n && n.afterTrigger && n.afterTrigger(t), this
      },
      triggerWithContext: function(t) {
        var e = this._$handlers[t],
          n = this._$eventProcessor; if (e) {
          var r = arguments,
            a = r.length; a > 4 && (r = i.call(r, 1, r.length - 1)); for (var o = r[r.length - 1], s = e.length, l = 0; l < s;) {var u = e[l]; if (n && n.filter && u.query != null && !n.filter(t, u.query)) {l++;} else {switch (a) {case 1:u.h.call(o); break; case 2:u.h.call(o, r[1]); break; case 3:u.h.call(o, r[1], r[2]); break; default:u.h.apply(o, r); break}u.one ? (e.splice(l, 1), s--) : l++}}
        } return n && n.afterTrigger && n.afterTrigger(t), this
      },
    }; var o = n; t.exports = o
  },
  2023: function(t, e, i) {
    var n = i('6d8b'),
      r = {
        getMin: function(t) {
          var e = this.option,
            i = t || e.rangeStart == null ? e.min : e.rangeStart; return this.axis && i != null && i !== 'dataMin' && typeof i !== 'function' && !n.eqNaN(i) && (i = this.axis.scale.parse(i)), i
        },
        getMax: function(t) {
          var e = this.option,
            i = t || e.rangeEnd == null ? e.max : e.rangeEnd; return this.axis && i != null && i !== 'dataMax' && typeof i !== 'function' && !n.eqNaN(i) && (i = this.axis.scale.parse(i)), i
        },
        getNeedCrossZero: function() {var t = this.option; return t.rangeStart == null && t.rangeEnd == null && !t.scale},
        getCoordSysModel: n.noop,
        setRange: function(t, e) {this.option.rangeStart = t, this.option.rangeEnd = e},
        resetRange: function() {this.option.rangeStart = this.option.rangeEnd = null},
      }; t.exports = r
  },
  2039: function(t, e, i) {
    var n = i('6d8b'),
      r = {}; function a() {this._coordinateSystems = []}a.prototype = {
      constructor: a, create: function(t, e) {var i = []; n.each(r, (function(n, r) {var a = n.create(t, e); i = i.concat(a || [])})), this._coordinateSystems = i}, update: function(t, e) {n.each(this._coordinateSystems, (function(i) {i.update && i.update(t, e)}))}, getCoordinateSystems: function() {return this._coordinateSystems.slice()},
    }, a.register = function(t, e) {r[t] = e}, a.get = function(t) {return r[t]}; var o = a; t.exports = o
  },
  '20c8': function(t, e, i) {
    var n = i('4a3f'),
      r = i('401b'),
      a = i('e263'),
      o = i('9850'),
      s = i('2cf4c'),
      l = s.devicePixelRatio,
      u = {
        M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7,
      },
      h = [],
      c = [],
      d = [],
      f = [],
      p = Math.min,
      g = Math.max,
      v = Math.cos,
      m = Math.sin,
      y = Math.sqrt,
      x = Math.abs,
      _ = typeof Float32Array !== 'undefined',
      b = function(t) {this._saveData = !t, this._saveData && (this.data = []), this._ctx = null}; b.prototype = {
      constructor: b,
      _xi: 0,
      _yi: 0,
      _x0: 0,
      _y0: 0,
      _ux: 0,
      _uy: 0,
      _len: 0,
      _lineDash: null,
      _dashOffset: 0,
      _dashIdx: 0,
      _dashSum: 0,
      setScale: function(t, e, i) {i = i || 0, this._ux = x(i / l / t) || 0, this._uy = x(i / l / e) || 0},
      getContext: function() {return this._ctx},
      beginPath: function(t) {return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this},
      moveTo: function(t, e) {return this.addData(u.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this},
      lineTo: function(t, e) {var i = x(t - this._xi) > this._ux || x(e - this._yi) > this._uy || this._len < 5; return this.addData(u.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), i && (this._xi = t, this._yi = e), this},
      bezierCurveTo: function(t, e, i, n, r, a) {return this.addData(u.C, t, e, i, n, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, r, a) : this._ctx.bezierCurveTo(t, e, i, n, r, a)), this._xi = r, this._yi = a, this},
      quadraticCurveTo: function(t, e, i, n) {return this.addData(u.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this},
      arc: function(t, e, i, n, r, a) {return this.addData(u.A, t, e, i, i, n, r - n, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, r, a), this._xi = v(r) * i + t, this._yi = m(r) * i + e, this},
      arcTo: function(t, e, i, n, r) {return this._ctx && this._ctx.arcTo(t, e, i, n, r), this},
      rect: function(t, e, i, n) {return this._ctx && this._ctx.rect(t, e, i, n), this.addData(u.R, t, e, i, n), this},
      closePath: function() {
        this.addData(u.Z); var t = this._ctx,
          e = this._x0,
          i = this._y0; return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this
      },
      fill: function(t) {t && t.fill(), this.toStatic()},
      stroke: function(t) {t && t.stroke(), this.toStatic()},
      setLineDash: function(t) {if (t instanceof Array) {this._lineDash = t, this._dashIdx = 0; for (var e = 0, i = 0; i < t.length; i++) {e += t[i];} this._dashSum = e} return this},
      setLineDashOffset: function(t) {return this._dashOffset = t, this},
      len: function() {return this._len},
      setData: function(t) {var e = t.length; this.data && this.data.length === e || !_ || (this.data = new Float32Array(e)); for (var i = 0; i < e; i++) {this.data[i] = t[i];} this._len = e},
      appendPath: function(t) {t instanceof Array || (t = [t]); for (var e = t.length, i = 0, n = this._len, r = 0; r < e; r++) {i += t[r].len();}_ && this.data instanceof Float32Array && (this.data = new Float32Array(n + i)); for (r = 0; r < e; r++) {for (var a = t[r].data, o = 0; o < a.length; o++) {this.data[n++] = a[o];}} this._len = n},
      addData: function(t) {if (this._saveData) {var e = this.data; this._len + arguments.length > e.length && (this._expandData(), e = this.data); for (var i = 0; i < arguments.length; i++) {e[this._len++] = arguments[i];} this._prevCmd = t}},
      _expandData: function() {if (!(this.data instanceof Array)) {for (var t = [], e = 0; e < this._len; e++) {t[e] = this.data[e];} this.data = t}},
      _needsDash: function() {return this._lineDash},
      _dashedLineTo: function(t, e) {
        var i, n,
          r = this._dashSum,
          a = this._dashOffset,
          o = this._lineDash,
          s = this._ctx,
          l = this._xi,
          u = this._yi,
          h = t - l,
          c = e - u,
          d = y(h * h + c * c),
          f = l,
          v = u,
          m = o.length; h /= d, c /= d, a < 0 && (a = r + a), a %= r, f -= a * h, v -= a * c; while (h > 0 && f <= t || h < 0 && f >= t || h === 0 && (c > 0 && v <= e || c < 0 && v >= e)) {n = this._dashIdx, i = o[n], f += h * i, v += c * i, this._dashIdx = (n + 1) % m, h > 0 && f < l || h < 0 && f > l || c > 0 && v < u || c < 0 && v > u || s[n % 2 ? 'moveTo' : 'lineTo'](h >= 0 ? p(f, t) : g(f, t), c >= 0 ? p(v, e) : g(v, e));}h = f - t, c = v - e, this._dashOffset = -y(h * h + c * c)
      },
      _dashedBezierTo: function(t, e, i, r, a, o) {
        var s, l, u, h, c,
          d = this._dashSum,
          f = this._dashOffset,
          p = this._lineDash,
          g = this._ctx,
          v = this._xi,
          m = this._yi,
          x = n.cubicAt,
          _ = 0,
          b = this._dashIdx,
          w = p.length,
          S = 0; for (f < 0 && (f = d + f), f %= d, s = 0; s < 1; s += 0.1) {l = x(v, t, i, a, s + 0.1) - x(v, t, i, a, s), u = x(m, e, r, o, s + 0.1) - x(m, e, r, o, s), _ += y(l * l + u * u);} for (;b < w; b++) {if (S += p[b], S > f) {break;}} s = (S - f) / _; while (s <= 1) {h = x(v, t, i, a, s), c = x(m, e, r, o, s), b % 2 ? g.moveTo(h, c) : g.lineTo(h, c), s += p[b] / _, b = (b + 1) % w;}b % 2 !== 0 && g.lineTo(a, o), l = a - h, u = o - c, this._dashOffset = -y(l * l + u * u)
      },
      _dashedQuadraticTo: function(t, e, i, n) {
        var r = i,
          a = n; i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, r, a)
      },
      toStatic: function() {var t = this.data; t instanceof Array && (t.length = this._len, _ && (this.data = new Float32Array(t)))},
      getBoundingRect: function() {
        h[0] = h[1] = d[0] = d[1] = Number.MAX_VALUE, c[0] = c[1] = f[0] = f[1] = -Number.MAX_VALUE; for (var t = this.data, e = 0, i = 0, n = 0, s = 0, l = 0; l < t.length;) {
          var p = t[l++]; switch (l === 1 && (e = t[l], i = t[l + 1], n = e, s = i), p) {
            case u.M:n = t[l++], s = t[l++], e = n, i = s, d[0] = n, d[1] = s, f[0] = n, f[1] = s; break; case u.L:a.fromLine(e, i, t[l], t[l + 1], d, f), e = t[l++], i = t[l++]; break; case u.C:a.fromCubic(e, i, t[l++], t[l++], t[l++], t[l++], t[l], t[l + 1], d, f), e = t[l++], i = t[l++]; break; case u.Q:a.fromQuadratic(e, i, t[l++], t[l++], t[l], t[l + 1], d, f), e = t[l++], i = t[l++]; break; case u.A:var g = t[l++],
              y = t[l++],
              x = t[l++],
              _ = t[l++],
              b = t[l++],
              w = t[l++] + b; l += 1; var S = 1 - t[l++]; l === 1 && (n = v(b) * x + g, s = m(b) * _ + y), a.fromArc(g, y, x, _, b, w, S, d, f), e = v(w) * x + g, i = m(w) * _ + y; break; case u.R:n = e = t[l++], s = i = t[l++]; var T = t[l++],
              M = t[l++]; a.fromLine(n, s, n + T, s + M, d, f); break; case u.Z:e = n, i = s; break
          }r.min(h, h, d), r.max(c, c, f)
        } return l === 0 && (h[0] = h[1] = c[0] = c[1] = 0), new o(h[0], h[1], c[0] - h[0], c[1] - h[1])
      },
      rebuildPath: function(t) {
        for (var e, i, n, r, a, o, s = this.data, l = this._ux, h = this._uy, c = this._len, d = 0; d < c;) {
          var f = s[d++]; switch (d === 1 && (n = s[d], r = s[d + 1], e = n, i = r), f) {
            case u.M:e = n = s[d++], i = r = s[d++], t.moveTo(n, r); break; case u.L:a = s[d++], o = s[d++], (x(a - n) > l || x(o - r) > h || d === c - 1) && (t.lineTo(a, o), n = a, r = o); break; case u.C:t.bezierCurveTo(s[d++], s[d++], s[d++], s[d++], s[d++], s[d++]), n = s[d - 2], r = s[d - 1]; break; case u.Q:t.quadraticCurveTo(s[d++], s[d++], s[d++], s[d++]), n = s[d - 2], r = s[d - 1]; break; case u.A:var p = s[d++],
              g = s[d++],
              y = s[d++],
              _ = s[d++],
              b = s[d++],
              w = s[d++],
              S = s[d++],
              T = s[d++],
              M = y > _ ? y : _,
              C = y > _ ? 1 : y / _,
              I = y > _ ? _ / y : 1,
              A = Math.abs(y - _) > 0.001,
              k = b + w; A ? (t.translate(p, g), t.rotate(S), t.scale(C, I), t.arc(0, 0, M, b, k, 1 - T), t.scale(1 / C, 1 / I), t.rotate(-S), t.translate(-p, -g)) : t.arc(p, g, M, b, k, 1 - T), d === 1 && (e = v(b) * y + p, i = m(b) * _ + g), n = v(k) * y + p, r = m(k) * _ + g; break; case u.R:e = n = s[d], i = r = s[d + 1], t.rect(s[d++], s[d++], s[d++], s[d++]); break; case u.Z:t.closePath(), n = e, r = i
          }
        }
      },
    }, b.CMD = u; var w = b; t.exports = w
  },
  '216a': function(t, e, i) {
    var n = i('6d8b'),
      r = i('3842'),
      a = i('eda2'),
      o = i('944e'),
      s = i('89e3'),
      l = s.prototype,
      u = Math.ceil,
      h = Math.floor,
      c = 1e3,
      d = 60 * c,
      f = 60 * d,
      p = 24 * f,
      g = function(t, e, i, n) {while (i < n) {var r = i + n >>> 1; t[r][1] < e ? i = r + 1 : n = r} return i},
      v = s.extend({
        type: 'time',
        getLabel: function(t) {
          var e = this._stepLvl,
            i = new Date(t); return a.formatTime(e[0], i, this.getSetting('useUTC'))
        },
        niceExtent: function(t) {var e = this._extent; if (e[0] === e[1] && (e[0] -= p, e[1] += p), e[1] === -1 / 0 && e[0] === 1 / 0) {var i = new Date(); e[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()), e[0] = e[1] - p} this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval); var n = this._interval; t.fixMin || (e[0] = r.round(h(e[0] / n) * n)), t.fixMax || (e[1] = r.round(u(e[1] / n) * n))},
        niceTicks: function(t, e, i) {
          t = t || 10; var n = this._extent,
            a = n[1] - n[0],
            s = a / t; e != null && s < e && (s = e), i != null && s > i && (s = i); var l = m.length,
            c = g(m, s, 0, l),
            d = m[Math.min(c, l - 1)],
            f = d[1]; if (d[0] === 'year') {
            var p = a / f,
              v = r.nice(p / t, !0); f *= v
          } var y = this.getSetting('useUTC') ? 0 : 60 * new Date(+n[0] || +n[1]).getTimezoneOffset() * 1e3,
            x = [Math.round(u((n[0] - y) / f) * f + y), Math.round(h((n[1] - y) / f) * f + y)]; o.fixExtent(x, n), this._stepLvl = d, this._interval = f, this._niceExtent = x
        },
        parse: function(t) {return +r.parseDate(t)},
      }); n.each(['contain', 'normalize'], (function(t) {v.prototype[t] = function(e) {return l[t].call(this, this.parse(e))}})); var m = [['hh:mm:ss', c], ['hh:mm:ss', 5 * c], ['hh:mm:ss', 10 * c], ['hh:mm:ss', 15 * c], ['hh:mm:ss', 30 * c], ['hh:mm\nMM-dd', d], ['hh:mm\nMM-dd', 5 * d], ['hh:mm\nMM-dd', 10 * d], ['hh:mm\nMM-dd', 15 * d], ['hh:mm\nMM-dd', 30 * d], ['hh:mm\nMM-dd', f], ['hh:mm\nMM-dd', 2 * f], ['hh:mm\nMM-dd', 6 * f], ['hh:mm\nMM-dd', 12 * f], ['MM-dd\nyyyy', p], ['MM-dd\nyyyy', 2 * p], ['MM-dd\nyyyy', 3 * p], ['MM-dd\nyyyy', 4 * p], ['MM-dd\nyyyy', 5 * p], ['MM-dd\nyyyy', 6 * p], ['week', 7 * p], ['MM-dd\nyyyy', 10 * p], ['week', 14 * p], ['week', 21 * p], ['month', 31 * p], ['week', 42 * p], ['month', 62 * p], ['week', 70 * p], ['quarter', 95 * p], ['month', 31 * p * 4], ['month', 31 * p * 5], ['half-year', 380 * p / 2], ['month', 31 * p * 8], ['month', 31 * p * 10], ['year', 380 * p]]; v.create = function(t) {
      return new v({
        useUTC: t.ecModel.get('useUTC'),
      })
    }; var y = v; t.exports = y
  },
  '217b': function(t, e, i) {
    var n = i('4e08'),
      r = (n.__DEV__, i('3301')),
      a = i('4f85'),
      o = a.extend({
        type: 'series.line',
        dependencies: ['grid', 'polar'],
        getInitialData: function(t, e) {
          return r(this.getSource(), this, {
            useEncodeDefaulter: !0,
          })
        },
        defaultOption: {
          zlevel: 0,
          z: 2,
          coordinateSystem: 'cartesian2d',
          legendHoverLink: !0,
          hoverAnimation: !0,
          clip: !0,
          label: {
            position: 'top',
          },
          lineStyle: {
            width: 2, type: 'solid',
          },
          step: !1,
          smooth: !1,
          smoothMonotone: null,
          symbol: 'emptyCircle',
          symbolSize: 4,
          symbolRotate: null,
          showSymbol: !0,
          showAllSymbol: 'auto',
          connectNulls: !1,
          sampling: 'none',
          animationEasing: 'linear',
          progressive: 0,
          hoverLayerThreshold: 1 / 0,
        },
      }); t.exports = o
  },
  '22d1': function(t, e) {
    var i = {}; i = typeof wx === 'object' && typeof wx.getSystemInfoSync === 'function' ? {
      browser: {}, os: {}, node: !1, wxa: !0, canvasSupported: !0, svgSupported: !1, touchEventsSupported: !0, domSupported: !1,
    } : typeof document === 'undefined' && typeof self !== 'undefined' ? {
      browser: {}, os: {}, node: !1, worker: !0, canvasSupported: !0, domSupported: !1,
    } : typeof navigator === 'undefined' ? {
      browser: {}, os: {}, node: !0, worker: !1, canvasSupported: !0, svgSupported: !0, domSupported: !1,
    } : r(navigator.userAgent); var n = i; function r(t) {
      var e = {},
        i = {},
        n = t.match(/Firefox\/([\d.]+)/),
        r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
        a = t.match(/Edge\/([\d.]+)/),
        o = (/micromessenger/i).test(t); return n && (i.firefox = !0, i.version = n[1]), r && (i.ie = !0, i.version = r[1]), a && (i.edge = !0, i.version = a[1]), o && (i.weChat = !0), {
        browser: i, os: e, node: !1, canvasSupported: !!document.createElement('canvas').getContext, svgSupported: typeof SVGRect !== 'undefined', touchEventsSupported: 'ontouchstart' in window && !i.ie && !i.edge, pointerEventsSupported: 'onpointerdown' in window && (i.edge || i.ie && i.version >= 11), domSupported: typeof document !== 'undefined',
      }
    }t.exports = n
  },
  2306: function(t, e, i) {
    var n = i('6d8b'),
      r = i('342d'),
      a = i('41ef'),
      o = i('1687'),
      s = i('401b'),
      l = i('cbe5'),
      u = i('0cde'),
      h = i('0da8'); e.Image = h; var c = i('e1fc'); e.Group = c; var d = i('76a5'); e.Text = d; var f = i('d9fc'); e.Circle = f; var p = i('4aa2'); e.Sector = p; var g = i('4573'); e.Ring = g; var v = i('87b1'); e.Polygon = v; var m = i('d498'); e.Polyline = m; var y = i('c7a2'); e.Rect = y; var x = i('cb11'); e.Line = x; var _ = i('ac0f'); e.BezierCurve = _; var b = i('8d32'); e.Arc = b; var w = i('d4c6'); e.CompoundPath = w; var S = i('48a9'); e.LinearGradient = S; var T = i('dded'); e.RadialGradient = T; var M = i('9850'); e.BoundingRect = M; var C = i('392f'); e.IncrementalDisplayable = C; var I = i('9cf9'),
      A = Math.max,
      k = Math.min,
      D = {},
      O = 1,
      P = {
        color: 'textFill', textBorderColor: 'textStroke', textBorderWidth: 'textStrokeWidth',
      },
      L = 'emphasis',
      E = 'normal',
      R = 1,
      B = {},
      z = {}; function N(t) {return l.extend(t)} function F(t, e) {return r.extendFromString(t, e)} function V(t, e) {z[t] = e} function H(t) {if (z.hasOwnProperty(t)) {return z[t]}} function W(t, e, i, n) {var a = r.createFromString(t, e); return i && (n === 'center' && (i = U(i, a.getBoundingRect())), X(a, i)), a} function G(t, e, i) {
      var n = new h({
        style: {
          image: t, x: e.x, y: e.y, width: e.width, height: e.height,
        },
        onload: function(t) {
          if (i === 'center') {
            var r = {
              width: t.width, height: t.height,
            }; n.setStyle(U(e, r))
          }
        },
      }); return n
    } function U(t, e) {
      var i,
        n = e.width / e.height,
        r = t.height * n; r <= t.width ? i = t.height : (r = t.width, i = r / n); var a = t.x + t.width / 2,
        o = t.y + t.height / 2; return {
        x: a - r / 2, y: o - i / 2, width: r, height: i,
      }
    } var Y = r.mergePath; function X(t, e) {
      if (t.applyTransform) {
        var i = t.getBoundingRect(),
          n = i.calculateTransform(e); t.applyTransform(n)
      }
    } function q(t) {return I.subPixelOptimizeLine(t.shape, t.shape, t.style), t} function j(t) {return I.subPixelOptimizeRect(t.shape, t.shape, t.style), t} var Z = I.subPixelOptimize; function K(t) {return t != null && t !== 'none'} var $ = n.createHashMap(),
      Q = 0; function J(t) {if (typeof t !== 'string') {return t;} var e = $.get(t); return e || (e = a.lift(t, -0.1), Q < 1e4 && ($.set(t, e), Q++)), e} function tt(t) {if (t.__hoverStlDirty) {t.__hoverStlDirty = !1; var e = t.__hoverStl; if (e) {var i = t.__cachedNormalStl = {}; t.__cachedNormalZ2 = t.z2; var n = t.style; for (var r in e) {e[r] != null && (i[r] = n[r]);} i.fill = n.fill, i.stroke = n.stroke} else {t.__cachedNormalStl = t.__cachedNormalZ2 = null}}} function et(t) {
      var e = t.__hoverStl; if (e && !t.__highlighted) {
        var i = t.__zr,
          n = t.useHoverLayer && i && i.painter.type === 'canvas'; if (t.__highlighted = n ? 'layer' : 'plain', !(t.isGroup || !i && t.useHoverLayer)) {
          var r = t,
            a = t.style; n && (r = i.addHover(t), a = r.style), Tt(a), n || tt(r), a.extendFrom(e), it(a, e, 'fill'), it(a, e, 'stroke'), St(a), n || (t.dirty(!1), t.z2 += O)
        }
      }
    } function it(t, e, i) {!K(e[i]) && K(t[i]) && (t[i] = J(t[i]))} function nt(t) {
      var e = t.__highlighted; if (e && (t.__highlighted = !1, !t.isGroup)) {
        if (e === 'layer') {t.__zr && t.__zr.removeHover(t);} else {
          var i = t.style,
            n = t.__cachedNormalStl; n && (Tt(i), t.setStyle(n), St(i)); var r = t.__cachedNormalZ2; r != null && t.z2 - r === O && (t.z2 = r)
        }
      }
    } function rt(t, e, i) {
      var n,
        r = E,
        a = E; t.__highlighted && (r = L, n = !0), e(t, i), t.__highlighted && (a = L, n = !0), t.isGroup && t.traverse((function(t) {!t.isGroup && e(t, i)})), n && t.__highDownOnUpdate && t.__highDownOnUpdate(r, a)
    } function at(t, e) {e = t.__hoverStl = !1 !== e && (t.hoverStyle || e || {}), t.__hoverStlDirty = !0, t.__highlighted && (t.__cachedNormalStl = null, nt(t), et(t))} function ot(t) {!ht(this, t) && !this.__highByOuter && rt(this, et)} function st(t) {!ht(this, t) && !this.__highByOuter && rt(this, nt)} function lt(t) {this.__highByOuter |= 1 << (t || 0), rt(this, et)} function ut(t) {!(this.__highByOuter &= ~(1 << (t || 0))) && rt(this, nt)} function ht(t, e) {return t.__highDownSilentOnTouch && e.zrByTouch} function ct(t, e) {dt(t, !0), rt(t, at, e)} function dt(t, e) {var i = !1 === e; if (t.__highDownSilentOnTouch = t.highDownSilentOnTouch, t.__highDownOnUpdate = t.highDownOnUpdate, !i || t.__highDownDispatcher) {var n = i ? 'off' : 'on'; t[n]('mouseover', ot)[n]('mouseout', st), t[n]('emphasis', lt)[n]('normal', ut), t.__highByOuter = t.__highByOuter || 0, t.__highDownDispatcher = !i}} function ft(t) {return !(!t || !t.__highDownDispatcher)} function pt(t) {var e = B[t]; return e == null && R <= 32 && (e = B[t] = R++), e} function gt(t, e, i, r, a, o, s) {
      a = a || D; var l,
        u = a.labelFetcher,
        h = a.labelDataIndex,
        c = a.labelDimIndex,
        d = i.getShallow('show'),
        f = r.getShallow('show'); (d || f) && (u && (l = u.getFormattedLabel(h, 'normal', null, c)), l == null && (l = n.isFunction(a.defaultText) ? a.defaultText(h, a) : a.defaultText)); var p = d ? l : null,
        g = f ? n.retrieve2(u ? u.getFormattedLabel(h, 'emphasis', null, c) : null, l) : null; p == null && g == null || (mt(t, i, o, a), mt(e, r, s, a, !0)), t.text = p, e.text = g
    } function vt(t, e, i) {var r = t.style; e && (Tt(r), t.setStyle(e), St(r)), r = t.__hoverStl, i && r && (Tt(r), n.extend(r, i), St(r))} function mt(t, e, i, r, a) {return xt(t, e, r, a), i && n.extend(t, i), t} function yt(t, e, i) {
      var n,
        r = {
          isRectText: !0,
        }; !1 === i ? n = !0 : r.autoColor = i, xt(t, e, r, n)
    } function xt(t, e, i, r) {
      if (i = i || D, i.isRectText) {var a; i.getTextPosition ? a = i.getTextPosition(e, r) : (a = e.getShallow('position') || (r ? null : 'inside'), a === 'outside' && (a = 'top')), t.textPosition = a, t.textOffset = e.getShallow('offset'); var o = e.getShallow('rotate'); o != null && (o *= Math.PI / 180), t.textRotation = o, t.textDistance = n.retrieve2(e.getShallow('distance'), r ? null : 5)} var s,
        l = e.ecModel,
        u = l && l.option.textStyle,
        h = _t(e); if (h) {for (var c in s = {}, h) {if (h.hasOwnProperty(c)) {var d = e.getModel(['rich', c]); bt(s[c] = {}, d, u, i, r)}}} return t.rich = s, bt(t, e, u, i, r, !0), i.forceRich && !i.textStyle && (i.textStyle = {}), t
    } function _t(t) {var e; while (t && t !== t.ecModel) {var i = (t.option || D).rich; if (i) {for (var n in e = e || {}, i) {i.hasOwnProperty(n) && (e[n] = 1);}}t = t.parentModel} return e} function bt(t, e, i, r, a, o) {i = !a && i || D, t.textFill = wt(e.getShallow('color'), r) || i.color, t.textStroke = wt(e.getShallow('textBorderColor'), r) || i.textBorderColor, t.textStrokeWidth = n.retrieve2(e.getShallow('textBorderWidth'), i.textBorderWidth), a || (o && (t.insideRollbackOpt = r, St(t)), t.textFill == null && (t.textFill = r.autoColor)), t.fontStyle = e.getShallow('fontStyle') || i.fontStyle, t.fontWeight = e.getShallow('fontWeight') || i.fontWeight, t.fontSize = e.getShallow('fontSize') || i.fontSize, t.fontFamily = e.getShallow('fontFamily') || i.fontFamily, t.textAlign = e.getShallow('align'), t.textVerticalAlign = e.getShallow('verticalAlign') || e.getShallow('baseline'), t.textLineHeight = e.getShallow('lineHeight'), t.textWidth = e.getShallow('width'), t.textHeight = e.getShallow('height'), t.textTag = e.getShallow('tag'), o && r.disableBox || (t.textBackgroundColor = wt(e.getShallow('backgroundColor'), r), t.textPadding = e.getShallow('padding'), t.textBorderColor = wt(e.getShallow('borderColor'), r), t.textBorderWidth = e.getShallow('borderWidth'), t.textBorderRadius = e.getShallow('borderRadius'), t.textBoxShadowColor = e.getShallow('shadowColor'), t.textBoxShadowBlur = e.getShallow('shadowBlur'), t.textBoxShadowOffsetX = e.getShallow('shadowOffsetX'), t.textBoxShadowOffsetY = e.getShallow('shadowOffsetY')), t.textShadowColor = e.getShallow('textShadowColor') || i.textShadowColor, t.textShadowBlur = e.getShallow('textShadowBlur') || i.textShadowBlur, t.textShadowOffsetX = e.getShallow('textShadowOffsetX') || i.textShadowOffsetX, t.textShadowOffsetY = e.getShallow('textShadowOffsetY') || i.textShadowOffsetY} function wt(t, e) {return t !== 'auto' ? t : e && e.autoColor ? e.autoColor : null} function St(t) {
      var e,
        i = t.textPosition,
        n = t.insideRollbackOpt; if (n && t.textFill == null) {
        var r = n.autoColor,
          a = n.isRectText,
          o = n.useInsideStyle,
          s = !1 !== o && (!0 === o || a && i && typeof i === 'string' && i.indexOf('inside') >= 0),
          l = !s && r != null; (s || l) && (e = {
          textFill: t.textFill, textStroke: t.textStroke, textStrokeWidth: t.textStrokeWidth,
        }), s && (t.textFill = '#fff', t.textStroke == null && (t.textStroke = r, t.textStrokeWidth == null && (t.textStrokeWidth = 2))), l && (t.textFill = r)
      }t.insideRollback = e
    } function Tt(t) {var e = t.insideRollback; e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null)} function Mt(t, e) {var i = e && e.getModel('textStyle'); return n.trim([t.fontStyle || i && i.getShallow('fontStyle') || '', t.fontWeight || i && i.getShallow('fontWeight') || '', (t.fontSize || i && i.getShallow('fontSize') || 12) + 'px', t.fontFamily || i && i.getShallow('fontFamily') || 'sans-serif'].join(' '))} function Ct(t, e, i, n, r, a) {
      typeof r === 'function' && (a = r, r = null); var o = n && n.isAnimationEnabled(); if (o) {
        var s = t ? 'Update' : '',
          l = n.getShallow('animationDuration' + s),
          u = n.getShallow('animationEasing' + s),
          h = n.getShallow('animationDelay' + s); typeof h === 'function' && (h = h(r, n.getAnimationDelayParams ? n.getAnimationDelayParams(e, r) : null)), typeof l === 'function' && (l = l(r)), l > 0 ? e.animateTo(i, l, h || 0, u, a, !!a) : (e.stopAnimation(), e.attr(i), a && a())
      } else {e.stopAnimation(), e.attr(i), a && a()}
    } function It(t, e, i, n, r) {Ct(!0, t, e, i, n, r)} function At(t, e, i, n, r) {Ct(!1, t, e, i, n, r)} function kt(t, e) {var i = o.identity([]); while (t && t !== e) {o.mul(i, t.getLocalTransform(), i), t = t.parent;} return i} function Dt(t, e, i) {return e && !n.isArrayLike(e) && (e = u.getLocalTransform(e)), i && (e = o.invert([], e)), s.applyTransform([], t, e)} function Ot(t, e, i) {
      var n = e[4] === 0 || e[5] === 0 || e[0] === 0 ? 1 : Math.abs(2 * e[4] / e[0]),
        r = e[4] === 0 || e[5] === 0 || e[2] === 0 ? 1 : Math.abs(2 * e[4] / e[2]),
        a = [t === 'left' ? -n : t === 'right' ? n : 0, t === 'top' ? -r : t === 'bottom' ? r : 0]; return a = Dt(a, e, i), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? 'right' : 'left' : a[1] > 0 ? 'bottom' : 'top'
    } function Pt(t, e, i, r) {
      if (t && e) {var a = o(t); e.traverse((function(t) {if (!t.isGroup && t.anid) {var e = a[t.anid]; if (e) {var n = l(t); t.attr(l(e)), It(t, n, i, t.dataIndex)}}}))} function o(t) {var e = {}; return t.traverse((function(t) {!t.isGroup && t.anid && (e[t.anid] = t)})), e} function l(t) {
        var e = {
          position: s.clone(t.position), rotation: t.rotation,
        }; return t.shape && (e.shape = n.extend({}, t.shape)), e
      }
    } function Lt(t, e) {return n.map(t, (function(t) {var i = t[0]; i = A(i, e.x), i = k(i, e.x + e.width); var n = t[1]; return n = A(n, e.y), n = k(n, e.y + e.height), [i, n]}))} function Et(t, e) {
      var i = A(t.x, e.x),
        n = k(t.x + t.width, e.x + e.width),
        r = A(t.y, e.y),
        a = k(t.y + t.height, e.y + e.height); if (n >= i && a >= r) {
        return {
          x: i, y: r, width: n - i, height: a - r,
        }
      }
    } function Rt(t, e, i) {
      e = n.extend({
        rectHover: !0,
      }, e); var r = e.style = {
        strokeNoScale: !0,
      }; if (i = i || {
        x: -1, y: -1, width: 2, height: 2,
      }, t) {return t.indexOf('image://') === 0 ? (r.image = t.slice(8), n.defaults(r, i), new h(e)) : W(t.replace('path://', ''), e, i, 'center')}
    } function Bt(t, e, i, n, r) {for (var a = 0, o = r[r.length - 1]; a < r.length; a++) {var s = r[a]; if (zt(t, e, i, n, s[0], s[1], o[0], o[1])) {return !0;} o = s}} function zt(t, e, i, n, r, a, o, s) {
      var l = i - t,
        u = n - e,
        h = o - r,
        c = s - a,
        d = Nt(h, c, l, u); if (Ft(d)) {return !1;} var f = t - r,
        p = e - a,
        g = Nt(f, p, l, u) / d; if (g < 0 || g > 1) {return !1;} var v = Nt(f, p, h, c) / d; return !(v < 0 || v > 1)
    } function Nt(t, e, i, n) {return t * n - i * e} function Ft(t) {return t <= 1e-6 && t >= -1e-6}V('circle', f), V('sector', p), V('ring', g), V('polygon', v), V('polyline', m), V('rect', y), V('line', x), V('bezierCurve', _), V('arc', b), e.Z2_EMPHASIS_LIFT = O, e.CACHED_LABEL_STYLE_PROPERTIES = P, e.extendShape = N, e.extendPath = F, e.registerShape = V, e.getShapeClass = H, e.makePath = W, e.makeImage = G, e.mergePath = Y, e.resizePath = X, e.subPixelOptimizeLine = q, e.subPixelOptimizeRect = j, e.subPixelOptimize = Z, e.setElementHoverStyle = at, e.setHoverStyle = ct, e.setAsHighDownDispatcher = dt, e.isHighDownDispatcher = ft, e.getHighlightDigit = pt, e.setLabelStyle = gt, e.modifyLabelStyle = vt, e.setTextStyle = mt, e.setText = yt, e.getFont = Mt, e.updateProps = It, e.initProps = At, e.getTransform = kt, e.applyTransform = Dt, e.transformDirection = Ot, e.groupTransition = Pt, e.clipPointsByRect = Lt, e.clipRectByRect = Et, e.createIcon = Rt, e.linePolygonIntersect = Bt, e.lineLineIntersect = zt
  },
  '26e1': function(t, e, i) {
    var n = i('6d8b'),
      r = i('e0d3'),
      a = n.each,
      o = n.isObject,
      s = ['areaStyle', 'lineStyle', 'nodeStyle', 'linkStyle', 'chordStyle', 'label', 'labelLine']; function l(t) {
      var e = t && t.itemStyle; if (e) {
        for (var i = 0, r = s.length; i < r; i++) {
          var a = s[i],
            o = e.normal,
            l = e.emphasis; o && o[a] && (t[a] = t[a] || {}, t[a].normal ? n.merge(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), l && l[a] && (t[a] = t[a] || {}, t[a].emphasis ? n.merge(t[a].emphasis, l[a]) : t[a].emphasis = l[a], l[a] = null)
        }
      }
    } function u(t, e, i) {
      if (t && t[e] && (t[e].normal || t[e].emphasis)) {
        var r = t[e].normal,
          a = t[e].emphasis; r && (i ? (t[e].normal = t[e].emphasis = null, n.defaults(t[e], r)) : t[e] = r), a && (t.emphasis = t.emphasis || {}, t.emphasis[e] = a)
      }
    } function h(t) {u(t, 'itemStyle'), u(t, 'lineStyle'), u(t, 'areaStyle'), u(t, 'label'), u(t, 'labelLine'), u(t, 'upperLabel'), u(t, 'edgeLabel')} function c(t, e) {
      var i = o(t) && t[e],
        n = o(i) && i.textStyle; if (n) {for (var a = 0, s = r.TEXT_STYLE_OPTIONS.length; a < s; a++) {e = r.TEXT_STYLE_OPTIONS[a]; n.hasOwnProperty(e) && (i[e] = n[e])}}
    } function d(t) {t && (h(t), c(t, 'label'), t.emphasis && c(t.emphasis, 'label'))} function f(t) {if (o(t)) {l(t), h(t), c(t, 'label'), c(t, 'upperLabel'), c(t, 'edgeLabel'), t.emphasis && (c(t.emphasis, 'label'), c(t.emphasis, 'upperLabel'), c(t.emphasis, 'edgeLabel')); var e = t.markPoint; e && (l(e), d(e)); var i = t.markLine; i && (l(i), d(i)); var r = t.markArea; r && d(r); var a = t.data; if (t.type === 'graph') {a = a || t.nodes; var s = t.links || t.edges; if (s && !n.isTypedArray(s)) {for (var f = 0; f < s.length; f++) {d(s[f]);}}n.each(t.categories, (function(t) {h(t)}))} if (a && !n.isTypedArray(a)) {for (f = 0; f < a.length; f++) {d(a[f]);}}e = t.markPoint; if (e && e.data) {var p = e.data; for (f = 0; f < p.length; f++) {d(p[f])}}i = t.markLine; if (i && i.data) {var g = i.data; for (f = 0; f < g.length; f++) {n.isArray(g[f]) ? (d(g[f][0]), d(g[f][1])) : d(g[f])}}t.type === 'gauge' ? (c(t, 'axisLabel'), c(t, 'title'), c(t, 'detail')) : t.type === 'treemap' ? (u(t.breadcrumb, 'itemStyle'), n.each(t.levels, (function(t) {h(t)}))) : t.type === 'tree' && h(t.leaves)}} function p(t) {return n.isArray(t) ? t : t ? [t] : []} function g(t) {return (n.isArray(t) ? t[0] : t) || {}} function v(t, e) {a(p(t.series), (function(t) {o(t) && f(t)})); var i = ['xAxis', 'yAxis', 'radiusAxis', 'angleAxis', 'singleAxis', 'parallelAxis', 'radar']; e && i.push('valueAxis', 'categoryAxis', 'logAxis', 'timeAxis'), a(i, (function(e) {a(p(t[e]), (function(t) {t && (c(t, 'axisLabel'), c(t.axisPointer, 'label'))}))})), a(p(t.parallel), (function(t) {var e = t && t.parallelAxisDefault; c(e, 'axisLabel'), c(e && e.axisPointer, 'label')})), a(p(t.calendar), (function(t) {u(t, 'itemStyle'), c(t, 'dayLabel'), c(t, 'monthLabel'), c(t, 'yearLabel')})), a(p(t.radar), (function(t) {c(t, 'name')})), a(p(t.geo), (function(t) {o(t) && (d(t), a(p(t.regions), (function(t) {d(t)})))})), a(p(t.timeline), (function(t) {d(t), u(t, 'label'), u(t, 'itemStyle'), u(t, 'controlStyle', !0); var e = t.data; n.isArray(e) && n.each(e, (function(t) {n.isObject(t) && (u(t, 'label'), u(t, 'itemStyle'))}))})), a(p(t.toolbox), (function(t) {u(t, 'iconStyle'), a(t.feature, (function(t) {u(t, 'iconStyle')}))})), c(g(t.axisPointer), 'label'), c(g(t.tooltip).axisPointer, 'label')}t.exports = v
  },
  '282b': function(t, e, i) {var n = i('6d8b'); function r(t) {for (var e = 0; e < t.length; e++) {t[e][1] || (t[e][1] = t[e][0]);} return function(e, i, r) {for (var a = {}, o = 0; o < t.length; o++) {var s = t[o][1]; if (!(i && n.indexOf(i, s) >= 0 || r && n.indexOf(r, s) < 0)) {var l = e.getShallow(s); l != null && (a[t[o][0]] = l)}} return a}}t.exports = r},
  '29a8': function(t, e) {
    var i = {
      legend: {
        selector: {
          all: '全选', inverse: '反选',
        },
      },
      toolbox: {
        brush: {
          title: {
            rect: '矩形选择', polygon: '圈选', lineX: '横向选择', lineY: '纵向选择', keep: '保持选择', clear: '清除选择',
          },
        },
        dataView: {
          title: '数据视图', lang: ['数据视图', '关闭', '刷新'],
        },
        dataZoom: {
          title: {
            zoom: '区域缩放', back: '区域缩放还原',
          },
        },
        magicType: {
          title: {
            line: '切换为折线图', bar: '切换为柱状图', stack: '切换为堆叠', tiled: '切换为平铺',
          },
        },
        restore: {
          title: '还原',
        },
        saveAsImage: {
          title: '保存为图片', lang: ['右键另存为图片'],
        },
      },
      series: {
        typeNames: {
          pie: '饼图', bar: '柱状图', line: '折线图', scatter: '散点图', effectScatter: '涟漪散点图', radar: '雷达图', tree: '树图', treemap: '矩形树图', boxplot: '箱型图', candlestick: 'K线图', k: 'K线图', heatmap: '热力图', map: '地图', parallel: '平行坐标图', lines: '线图', graph: '关系图', sankey: '桑基图', funnel: '漏斗图', gauge: '仪表盘图', pictorialBar: '象形柱图', themeRiver: '主题河流图', sunburst: '旭日图',
        },
      },
      aria: {
        general: {
          withTitle: '这是一个关于“{title}”的图表。', withoutTitle: '这是一个图表，',
        },
        series: {
          single: {
            prefix: '', withName: '图表类型是{seriesType}，表示{seriesName}。', withoutName: '图表类型是{seriesType}。',
          },
          multiple: {
            prefix: '它由{seriesCount}个图表系列组成。',
            withName: '第{seriesId}个系列是一个表示{seriesName}的{seriesType}，',
            withoutName: '第{seriesId}个系列是一个{seriesType}，',
            separator: {
              middle: '；', end: '。',
            },
          },
        },
        data: {
          allData: '其数据是——',
          partialData: '其中，前{displayCnt}项是——',
          withName: '{name}的数据是{value}',
          withoutName: '{value}',
          separator: {
            middle: '，', end: '',
          },
        },
      },
    }; t.exports = i
  },
  '2b17': function(t, e, i) {
    var n = i('4e08'),
      r = (n.__DEV__, i('6d8b')),
      a = (r.isTypedArray, r.extend),
      o = (r.assert, r.each),
      s = r.isObject,
      l = i('e0d3'),
      u = l.getDataItemValue,
      h = l.isDataItemOption,
      c = i('3842'),
      d = c.parseDate,
      f = i('ec6f'),
      p = i('93d0'),
      g = p.SOURCE_FORMAT_TYPED_ARRAY,
      v = p.SOURCE_FORMAT_ARRAY_ROWS,
      m = p.SOURCE_FORMAT_ORIGINAL,
      y = p.SOURCE_FORMAT_OBJECT_ROWS; function x(t, e) {
      f.isInstance(t) || (t = f.seriesDataToSource(t)), this._source = t; var i = this._data = t.data,
        n = t.sourceFormat; n === g && (this._offset = 0, this._dimSize = e, this._data = i); var r = b[n === v ? n + '_' + t.seriesLayoutBy : n]; a(this, r)
    } var _ = x.prototype; _.pure = !1, _.persistent = !0, _.getSource = function() {return this._source}; var b = {
      arrayRows_column: {
        pure: !0, count: function() {return Math.max(0, this._data.length - this._source.startIndex)}, getItem: function(t) {return this._data[t + this._source.startIndex]}, appendData: T,
      },
      arrayRows_row: {
        pure: !0, count: function() {var t = this._data[0]; return t ? Math.max(0, t.length - this._source.startIndex) : 0}, getItem: function(t) {t += this._source.startIndex; for (var e = [], i = this._data, n = 0; n < i.length; n++) {var r = i[n]; e.push(r ? r[t] : null)} return e}, appendData: function() {throw new Error('Do not support appendData when set seriesLayoutBy: "row".')},
      },
      objectRows: {
        pure: !0, count: w, getItem: S, appendData: T,
      },
      keyedColumns: {
        pure: !0,
        count: function() {
          var t = this._source.dimensionsDefine[0].name,
            e = this._data[t]; return e ? e.length : 0
        },
        getItem: function(t) {for (var e = [], i = this._source.dimensionsDefine, n = 0; n < i.length; n++) {var r = this._data[i[n].name]; e.push(r ? r[t] : null)} return e},
        appendData: function(t) {var e = this._data; o(t, (function(t, i) {for (var n = e[i] || (e[i] = []), r = 0; r < (t || []).length; r++) {n.push(t[r])}}))},
      },
      original: {
        count: w, getItem: S, appendData: T,
      },
      typedArray: {
        persistent: !1, pure: !0, count: function() {return this._data ? this._data.length / this._dimSize : 0}, getItem: function(t, e) {t -= this._offset, e = e || []; for (var i = this._dimSize * t, n = 0; n < this._dimSize; n++) {e[n] = this._data[i + n];} return e}, appendData: function(t) {this._data = t}, clean: function() {this._offset += this.count(), this._data = null},
      },
    }; function w() {return this._data.length} function S(t) {return this._data[t]} function T(t) {for (var e = 0; e < t.length; e++) {this._data.push(t[e])}} var M = {
      arrayRows: C, objectRows: function(t, e, i, n) {return i != null ? t[n] : t}, keyedColumns: C, original: function(t, e, i, n) {var r = u(t); return i != null && r instanceof Array ? r[i] : r}, typedArray: C,
    }; function C(t, e, i, n) {return i != null ? t[i] : t} var I = {
      arrayRows: A, objectRows: function(t, e, i, n) {return k(t[e], this._dimensionInfos[e])}, keyedColumns: A, original: function(t, e, i, n) {var r = t && (t.value == null ? t : t.value); return !this._rawData.pure && h(t) && (this.hasItemOption = !0), k(r instanceof Array ? r[n] : r, this._dimensionInfos[e])}, typedArray: function(t, e, i, n) {return t[n]},
    }; function A(t, e, i, n) {return k(t[n], this._dimensionInfos[e])} function k(t, e) {var i = e && e.type; if (i === 'ordinal') {var n = e && e.ordinalMeta; return n ? n.parseAndCollect(t) : t} return i === 'time' && typeof t !== 'number' && t != null && t !== '-' && (t = +d(t)), t == null || t === '' ? NaN : +t} function D(t, e, i) {
      if (t) {
        var n = t.getRawDataItem(e); if (n != null) {
          var r, a,
            o = t.getProvider().getSource().sourceFormat,
            s = t.getDimensionInfo(i); return s && (r = s.name, a = s.index), M[o](n, e, a, r)
        }
      }
    } function O(t, e, i) {if (t) {var n = t.getProvider().getSource().sourceFormat; if (n === m || n === y) {var r = t.getRawDataItem(e); return n !== m || s(r) || (r = null), r ? r[i] : void 0}}}e.DefaultDataProvider = x, e.defaultDimValueGetters = I, e.retrieveRawValue = D, e.retrieveRawAttr = O
  },
  '2b61': function(t, e, i) {
    var n = i('7d6d'),
      r = i('82eb'),
      a = r.ContextCachedBy,
      o = [['shadowBlur', 0], ['shadowOffsetX', 0], ['shadowOffsetY', 0], ['shadowColor', '#000'], ['lineCap', 'butt'], ['lineJoin', 'miter'], ['miterLimit', 10]],
      s = function(t) {this.extendFrom(t, !1)}; function l(t, e, i) {
      var n = e.x == null ? 0 : e.x,
        r = e.x2 == null ? 1 : e.x2,
        a = e.y == null ? 0 : e.y,
        o = e.y2 == null ? 0 : e.y2; e.global || (n = n * i.width + i.x, r = r * i.width + i.x, a = a * i.height + i.y, o = o * i.height + i.y), n = isNaN(n) ? 0 : n, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o; var s = t.createLinearGradient(n, a, r, o); return s
    } function u(t, e, i) {
      var n = i.width,
        r = i.height,
        a = Math.min(n, r),
        o = e.x == null ? 0.5 : e.x,
        s = e.y == null ? 0.5 : e.y,
        l = e.r == null ? 0.5 : e.r; e.global || (o = o * n + i.x, s = s * r + i.y, l *= a); var u = t.createRadialGradient(o, s, 0, o, s, l); return u
    }s.prototype = {
      constructor: s,
      fill: '#000',
      stroke: null,
      opacity: 1,
      fillOpacity: null,
      strokeOpacity: null,
      lineDash: null,
      lineDashOffset: 0,
      shadowBlur: 0,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      lineWidth: 1,
      strokeNoScale: !1,
      text: null,
      font: null,
      textFont: null,
      fontStyle: null,
      fontWeight: null,
      fontSize: null,
      fontFamily: null,
      textTag: null,
      textFill: '#000',
      textStroke: null,
      textWidth: null,
      textHeight: null,
      textStrokeWidth: 0,
      textLineHeight: null,
      textPosition: 'inside',
      textRect: null,
      textOffset: null,
      textAlign: null,
      textVerticalAlign: null,
      textDistance: 5,
      textShadowColor: 'transparent',
      textShadowBlur: 0,
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
      textBoxShadowColor: 'transparent',
      textBoxShadowBlur: 0,
      textBoxShadowOffsetX: 0,
      textBoxShadowOffsetY: 0,
      transformText: !1,
      textRotation: 0,
      textOrigin: null,
      textBackgroundColor: null,
      textBorderColor: null,
      textBorderWidth: 0,
      textBorderRadius: 0,
      textPadding: null,
      rich: null,
      truncate: null,
      blend: null,
      bind: function(t, e, i) {
        var r = this,
          s = i && i.style,
          l = !s || t.__attrCachedBy !== a.STYLE_BIND; t.__attrCachedBy = a.STYLE_BIND; for (var u = 0; u < o.length; u++) {
          var h = o[u],
            c = h[0]; (l || r[c] !== s[c]) && (t[c] = n(t, c, r[c] || h[1]))
        } if ((l || r.fill !== s.fill) && (t.fillStyle = r.fill), (l || r.stroke !== s.stroke) && (t.strokeStyle = r.stroke), (l || r.opacity !== s.opacity) && (t.globalAlpha = r.opacity == null ? 1 : r.opacity), (l || r.blend !== s.blend) && (t.globalCompositeOperation = r.blend || 'source-over'), this.hasStroke()) {var d = r.lineWidth; t.lineWidth = d / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)}
      },
      hasFill: function() {var t = this.fill; return t != null && t !== 'none'},
      hasStroke: function() {var t = this.stroke; return t != null && t !== 'none' && this.lineWidth > 0},
      extendFrom: function(t, e) {if (t) {for (var i in t) {!t.hasOwnProperty(i) || !0 !== e && (!1 === e ? this.hasOwnProperty(i) : t[i] == null) || (this[i] = t[i])}}},
      set: function(t, e) {typeof t === 'string' ? this[t] = e : this.extendFrom(t, !0)},
      clone: function() {var t = new this.constructor(); return t.extendFrom(this, !0), t},
      getGradient: function(t, e, i) {for (var n = e.type === 'radial' ? u : l, r = n(t, e, i), a = e.colorStops, o = 0; o < a.length; o++) {r.addColorStop(a[o].offset, a[o].color);} return r},
    }; for (var h = s.prototype, c = 0; c < o.length; c++) {var d = o[c]; d[0] in h || (h[d[0]] = d[1])}s.getGradient = h.getGradient; var f = s; t.exports = f
  },
  '2cf4c': function(t, e) {
    var i = 1; typeof window !== 'undefined' && (i = Math.max(window.devicePixelRatio || 1, 1)); var n = 0,
      r = i; e.debugMode = n, e.devicePixelRatio = r
  },
  '2f45': function(t, e, i) {
    var n = i('6d8b'),
      r = n.each,
      a = n.createHashMap,
      o = (n.assert, i('4e08')),
      s = (o.__DEV__, a(['tooltip', 'label', 'itemName', 'itemId', 'seriesName'])); function l(t) {
      var e = {},
        i = e.encode = {},
        n = a(),
        o = [],
        l = [],
        h = e.userOutput = {
          dimensionNames: t.dimensions.slice(), encode: {},
        }; r(t.dimensions, (function(e) {
        var r = t.getDimensionInfo(e),
          a = r.coordDim; if (a) {var d = r.coordDimIndex; u(i, a)[d] = e, r.isExtraCoord || (n.set(a, 1), c(r.type) && (o[0] = e), u(h.encode, a)[d] = r.index), r.defaultTooltip && l.push(e)}s.each((function(t, e) {
          var n = u(i, e),
            a = r.otherDims[e]; a != null && !1 !== a && (n[a] = r.name)
        }))
      })); var d = [],
        f = {}; n.each((function(t, e) {var n = i[e]; f[e] = n[0], d = d.concat(n)})), e.dataDimsOnCoord = d, e.encodeFirstDimNotExtra = f; var p = i.label; p && p.length && (o = p.slice()); var g = i.tooltip; return g && g.length ? l = g.slice() : l.length || (l = o.slice()), i.defaultedLabel = o, i.defaultedTooltip = l, e
    } function u(t, e) {return t.hasOwnProperty(e) || (t[e] = []), t[e]} function h(t) {return t === 'category' ? 'ordinal' : t === 'time' ? 'time' : 'float'} function c(t) {return !(t === 'ordinal' || t === 'time')}e.OTHER_DIMENSIONS = s, e.summarizeDimensions = l, e.getDimensionTypeByAxis = h
  },
  3041: function(t, e, i) {
    var n = i('e1fc'),
      r = i('0da8'),
      a = i('76a5'),
      o = i('d9fc'),
      s = i('c7a2'),
      l = i('ae69'),
      u = i('cb11'),
      h = i('cbe5'),
      c = i('87b1'),
      d = i('d498'),
      f = i('48a9'),
      p = i('2b61'),
      g = i('1687'),
      v = i('342d'),
      m = v.createFromString,
      y = i('6d8b'),
      x = y.isString,
      _ = y.extend,
      b = y.defaults,
      w = y.trim,
      S = y.each,
      T = /[\s,]+/; function M(t) {if (x(t)) {var e = new DOMParser(); t = e.parseFromString(t, 'text/xml')}t.nodeType === 9 && (t = t.firstChild); while (t.nodeName.toLowerCase() !== 'svg' || t.nodeType !== 1) {t = t.nextSibling;} return t} function C() {this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1}C.prototype.parse = function(t, e) {
      e = e || {}; var i = M(t); if (!i) {throw new Error('Illegal svg');} var r = new n(); this._root = r; var a = i.getAttribute('viewBox') || '',
        o = parseFloat(i.getAttribute('width') || e.width),
        l = parseFloat(i.getAttribute('height') || e.height); isNaN(o) && (o = null), isNaN(l) && (l = null), L(i, r, null, !0); var u, h,
        c = i.firstChild; while (c) {this._parseNode(c, r), c = c.nextSibling;} if (a) {
        var d = w(a).split(T); d.length >= 4 && (u = {
          x: parseFloat(d[0] || 0), y: parseFloat(d[1] || 0), width: parseFloat(d[2]), height: parseFloat(d[3]),
        })
      } if (u && o != null && l != null && (h = V(u, o, l), !e.ignoreViewBox)) {var f = r; r = new n(), r.add(f), f.scale = h.scale.slice(), f.position = h.position.slice()} return e.ignoreRootClip || o == null || l == null || r.setClipPath(new s({
        shape: {
          x: 0, y: 0, width: o, height: l,
        },
      })), {
        root: r, width: o, height: l, viewBoxRect: u, viewBoxTransform: h,
      }
    }, C.prototype._parseNode = function(t, e) {
      var i,
        n = t.nodeName.toLowerCase(); if (n === 'defs' ? this._isDefine = !0 : n === 'text' && (this._isText = !0), this._isDefine) {
        var r = A[n]; if (r) {
          var a = r.call(this, t),
            o = t.getAttribute('id'); o && (this._defs[o] = a)
        }
      } else {r = I[n]; r && (i = r.call(this, t, e), e.add(i))} var s = t.firstChild; while (s) {s.nodeType === 1 && this._parseNode(s, i), s.nodeType === 3 && this._isText && this._parseText(s, i), s = s.nextSibling;} n === 'defs' ? this._isDefine = !1 : n === 'text' && (this._isText = !1)
    }, C.prototype._parseText = function(t, e) {
      if (t.nodeType === 1) {
        var i = t.getAttribute('dx') || 0,
          n = t.getAttribute('dy') || 0; this._textX += parseFloat(i), this._textY += parseFloat(n)
      } var r = new a({
        style: {
          text: t.textContent, transformText: !0,
        },
        position: [this._textX || 0, this._textY || 0],
      }); D(e, r), L(t, r, this._defs); var o = r.style.fontSize; o && o < 9 && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= o / 9, r.scale[1] *= o / 9); var s = r.getBoundingRect(); return this._textX += s.width, e.add(r), r
    }; var I = {
        g: function(t, e) {var i = new n(); return D(e, i), L(t, i, this._defs), i},
        rect: function(t, e) {
          var i = new s(); return D(e, i), L(t, i, this._defs), i.setShape({
            x: parseFloat(t.getAttribute('x') || 0), y: parseFloat(t.getAttribute('y') || 0), width: parseFloat(t.getAttribute('width') || 0), height: parseFloat(t.getAttribute('height') || 0),
          }), i
        },
        circle: function(t, e) {
          var i = new o(); return D(e, i), L(t, i, this._defs), i.setShape({
            cx: parseFloat(t.getAttribute('cx') || 0), cy: parseFloat(t.getAttribute('cy') || 0), r: parseFloat(t.getAttribute('r') || 0),
          }), i
        },
        line: function(t, e) {
          var i = new u(); return D(e, i), L(t, i, this._defs), i.setShape({
            x1: parseFloat(t.getAttribute('x1') || 0), y1: parseFloat(t.getAttribute('y1') || 0), x2: parseFloat(t.getAttribute('x2') || 0), y2: parseFloat(t.getAttribute('y2') || 0),
          }), i
        },
        ellipse: function(t, e) {
          var i = new l(); return D(e, i), L(t, i, this._defs), i.setShape({
            cx: parseFloat(t.getAttribute('cx') || 0), cy: parseFloat(t.getAttribute('cy') || 0), rx: parseFloat(t.getAttribute('rx') || 0), ry: parseFloat(t.getAttribute('ry') || 0),
          }), i
        },
        polygon: function(t, e) {
          var i = t.getAttribute('points'); i && (i = O(i)); var n = new c({
            shape: {
              points: i || [],
            },
          }); return D(e, n), L(t, n, this._defs), n
        },
        polyline: function(t, e) {
          var i = new h(); D(e, i), L(t, i, this._defs); var n = t.getAttribute('points'); n && (n = O(n)); var r = new d({
            shape: {
              points: n || [],
            },
          }); return r
        },
        image: function(t, e) {
          var i = new r(); return D(e, i), L(t, i, this._defs), i.setStyle({
            image: t.getAttribute('xlink:href'), x: t.getAttribute('x'), y: t.getAttribute('y'), width: t.getAttribute('width'), height: t.getAttribute('height'),
          }), i
        },
        text: function(t, e) {
          var i = t.getAttribute('x') || 0,
            r = t.getAttribute('y') || 0,
            a = t.getAttribute('dx') || 0,
            o = t.getAttribute('dy') || 0; this._textX = parseFloat(i) + parseFloat(a), this._textY = parseFloat(r) + parseFloat(o); var s = new n(); return D(e, s), L(t, s, this._defs), s
        },
        tspan: function(t, e) {
          var i = t.getAttribute('x'),
            r = t.getAttribute('y'); i != null && (this._textX = parseFloat(i)), r != null && (this._textY = parseFloat(r)); var a = t.getAttribute('dx') || 0,
            o = t.getAttribute('dy') || 0,
            s = new n(); return D(e, s), L(t, s, this._defs), this._textX += a, this._textY += o, s
        },
        path: function(t, e) {
          var i = t.getAttribute('d') || '',
            n = m(i); return D(e, n), L(t, n, this._defs), n
        },
      },
      A = {
        lineargradient: function(t) {
          var e = parseInt(t.getAttribute('x1') || 0, 10),
            i = parseInt(t.getAttribute('y1') || 0, 10),
            n = parseInt(t.getAttribute('x2') || 10, 10),
            r = parseInt(t.getAttribute('y2') || 0, 10),
            a = new f(e, i, n, r); return k(t, a), a
        },
        radialgradient: function(t) {},
      }; function k(t, e) {var i = t.firstChild; while (i) {if (i.nodeType === 1) {var n = i.getAttribute('offset'); n = n.indexOf('%') > 0 ? parseInt(n, 10) / 100 : n ? parseFloat(n) : 0; var r = i.getAttribute('stop-color') || '#000000'; e.addColorStop(n, r)}i = i.nextSibling}} function D(t, e) {t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), b(e.__inheritedStyle, t.__inheritedStyle))} function O(t) {
      for (var e = w(t).split(T), i = [], n = 0; n < e.length; n += 2) {
        var r = parseFloat(e[n]),
          a = parseFloat(e[n + 1]); i.push([r, a])
      } return i
    } var P = {
      fill: 'fill', stroke: 'stroke', 'stroke-width': 'lineWidth', opacity: 'opacity', 'fill-opacity': 'fillOpacity', 'stroke-opacity': 'strokeOpacity', 'stroke-dasharray': 'lineDash', 'stroke-dashoffset': 'lineDashOffset', 'stroke-linecap': 'lineCap', 'stroke-linejoin': 'lineJoin', 'stroke-miterlimit': 'miterLimit', 'font-family': 'fontFamily', 'font-size': 'fontSize', 'font-style': 'fontStyle', 'font-weight': 'fontWeight', 'text-align': 'textAlign', 'alignment-baseline': 'textBaseline',
    }; function L(t, e, i, n) {
      var r = e.__inheritedStyle || {},
        a = e.type === 'text'; if (t.nodeType === 1 && (z(t, e), _(r, F(t)), !n)) {for (var o in P) {if (P.hasOwnProperty(o)) {var s = t.getAttribute(o); s != null && (r[P[o]] = s)}}} var l = a ? 'textFill' : 'fill',
        u = a ? 'textStroke' : 'stroke'; e.style = e.style || new p(); var h = e.style; r.fill != null && h.set(l, R(r.fill, i)), r.stroke != null && h.set(u, R(r.stroke, i)), S(['lineWidth', 'opacity', 'fillOpacity', 'strokeOpacity', 'miterLimit', 'fontSize'], (function(t) {var e = t === 'lineWidth' && a ? 'textStrokeWidth' : t; r[t] != null && h.set(e, parseFloat(r[t]))})), r.textBaseline && r.textBaseline !== 'auto' || (r.textBaseline = 'alphabetic'), r.textBaseline === 'alphabetic' && (r.textBaseline = 'bottom'), r.textAlign === 'start' && (r.textAlign = 'left'), r.textAlign === 'end' && (r.textAlign = 'right'), S(['lineDashOffset', 'lineCap', 'lineJoin', 'fontWeight', 'fontFamily', 'fontStyle', 'textAlign', 'textBaseline'], (function(t) {r[t] != null && h.set(t, r[t])})), r.lineDash && (e.style.lineDash = w(r.lineDash).split(T)), h[u] && h[u] !== 'none' && (e[u] = !0), e.__inheritedStyle = r
    } var E = /url\(\s*#(.*?)\)/; function R(t, e) {
      var i = e && t && t.match(E); if (i) {
        var n = w(i[1]),
          r = e[n]; return r
      } return t
    } var B = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g; function z(t, e) {
      var i = t.getAttribute('transform'); if (i) {
        i = i.replace(/,/g, ' '); var n = null,
          r = []; i.replace(B, (function(t, e, i) {r.push(e, i)})); for (var a = r.length - 1; a > 0; a -= 2) {
          var o = r[a],
            s = r[a - 1]; switch (n = n || g.create(), s) {case 'translate':o = w(o).split(T), g.translate(n, n, [parseFloat(o[0]), parseFloat(o[1] || 0)]); break; case 'scale':o = w(o).split(T), g.scale(n, n, [parseFloat(o[0]), parseFloat(o[1] || o[0])]); break; case 'rotate':o = w(o).split(T), g.rotate(n, n, parseFloat(o[0])); break; case 'skew':o = w(o).split(T), console.warn('Skew transform is not supported yet'); break; case 'matrix':o = w(o).split(T); n[0] = parseFloat(o[0]), n[1] = parseFloat(o[1]), n[2] = parseFloat(o[2]), n[3] = parseFloat(o[3]), n[4] = parseFloat(o[4]), n[5] = parseFloat(o[5]); break}
        }e.setLocalTransform(n)
      }
    } var N = /([^\s:;]+)\s*:\s*([^:;]+)/g; function F(t) {
      var e = t.getAttribute('style'),
        i = {}; if (!e) {return i;} var n,
        r = {}; N.lastIndex = 0; while ((n = N.exec(e)) != null) {r[n[1]] = n[2];} for (var a in P) {P.hasOwnProperty(a) && r[a] != null && (i[P[a]] = r[a]);} return i
    } function V(t, e, i) {
      var n = e / t.width,
        r = i / t.height,
        a = Math.min(n, r),
        o = [a, a],
        s = [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + i / 2]; return {
        scale: o, position: s,
      }
    } function H(t, e) {var i = new C(); return i.parse(t, e)}e.parseXML = M, e.makeViewBoxTransform = V, e.parseSVG = H
  },
  '30a3': function(t, e, i) {
    var n = i('6d8b'),
      r = i('607d'),
      a = r.Dispatcher,
      o = i('98b7'),
      s = i('06ad'),
      l = function(t) {t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function() {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, a.call(this)}; l.prototype = {
      constructor: l,
      addClip: function(t) {this._clips.push(t)},
      addAnimator: function(t) {t.animation = this; for (var e = t.getClips(), i = 0; i < e.length; i++) {this.addClip(e[i])}},
      removeClip: function(t) {var e = n.indexOf(this._clips, t); e >= 0 && this._clips.splice(e, 1)},
      removeAnimator: function(t) {for (var e = t.getClips(), i = 0; i < e.length; i++) {this.removeClip(e[i]);} t.animation = null},
      _update: function() {
        for (var t = (new Date()).getTime() - this._pausedTime, e = t - this._time, i = this._clips, n = i.length, r = [], a = [], o = 0; o < n; o++) {
          var s = i[o],
            l = s.step(t, e); l && (r.push(l), a.push(s))
        } for (o = 0; o < n;) {i[o]._needsRemove ? (i[o] = i[n - 1], i.pop(), n--) : o++;}n = r.length; for (o = 0; o < n; o++) {a[o].fire(r[o]);} this._time = t, this.onframe(e), this.trigger('frame', e), this.stage.update && this.stage.update()
      },
      _startLoop: function() {var t = this; function e() {t._running && (o(e), !t._paused && t._update())} this._running = !0, o(e)},
      start: function() {this._time = (new Date()).getTime(), this._pausedTime = 0, this._startLoop()},
      stop: function() {this._running = !1},
      pause: function() {this._paused || (this._pauseStart = (new Date()).getTime(), this._paused = !0)},
      resume: function() {this._paused && (this._pausedTime += (new Date()).getTime() - this._pauseStart, this._paused = !1)},
      clear: function() {this._clips = []},
      isFinished: function() {return !this._clips.length},
      animate: function(t, e) {e = e || {}; var i = new s(t, e.loop, e.getter, e.setter); return this.addAnimator(i), i},
    }, n.mixin(l, a); var u = l; t.exports = u
  },
  3301: function(t, e, i) {
    var n = i('6d8b'),
      r = i('6179'),
      a = i('b1d4'),
      o = i('93d0'),
      s = o.SOURCE_FORMAT_ORIGINAL,
      l = i('2f45'),
      u = l.getDimensionTypeByAxis,
      h = i('e0d3'),
      c = h.getDataItemValue,
      d = i('2039'),
      f = i('8b7f'),
      p = f.getCoordSysInfoBySeries,
      g = i('ec6f'),
      v = i('ee1a'),
      m = v.enableDataStack,
      y = i('0f99'),
      x = y.makeSeriesEncodeForAxisCoordSys; function _(t, e, i) {
      i = i || {}, g.isInstance(t) || (t = g.seriesDataToSource(t)); var o,
        s = e.get('coordinateSystem'),
        l = d.get(s),
        h = p(e); h && (o = n.map(h.coordSysDims, (function(t) {
        var e = {
            name: t,
          },
          i = h.axisMap.get(t); if (i) {var n = i.get('type'); e.type = u(n)} return e
      }))), o || (o = l && (l.getDimensionsInfo ? l.getDimensionsInfo() : l.dimensions.slice()) || ['x', 'y']); var c, f,
        v = a(t, {
          coordDimensions: o, generateCoord: i.generateCoord, encodeDefaulter: i.useEncodeDefaulter ? n.curry(x, o, e) : null,
        }); h && n.each(v, (function(t, e) {
        var i = t.coordDim,
          n = h.categoryAxisMap.get(i); n && (c == null && (c = e), t.ordinalMeta = n.getOrdinalMeta()), t.otherDims.itemName != null && (f = !0)
      })), f || c == null || (v[c].otherDims.itemName = 0); var y = m(e, v),
        _ = new r(v, e); _.setCalculationInfo(y); var w = c != null && b(t) ? function(t, e, i, n) {return n === c ? i : this.defaultDimValueGetter(t, e, i, n)} : null; return _.hasItemOption = !1, _.initData(t, null, w), _
    } function b(t) {if (t.sourceFormat === s) {var e = w(t.data || []); return e != null && !n.isArray(c(e))}} function w(t) {var e = 0; while (e < t.length && t[e] == null) {e++;} return t[e]} var S = _; t.exports = S
  },
  '342d': function(t, e, i) {
    var n = i('cbe5'),
      r = i('20c8'),
      a = i('ee84'),
      o = Math.sqrt,
      s = Math.sin,
      l = Math.cos,
      u = Math.PI,
      h = function(t) {return Math.sqrt(t[0] * t[0] + t[1] * t[1])},
      c = function(t, e) {return (t[0] * e[0] + t[1] * e[1]) / (h(t) * h(e))},
      d = function(t, e) {return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(c(t, e))}; function f(t, e, i, n, r, a, h, f, p, g, v) {
      var m = p * (u / 180),
        y = l(m) * (t - i) / 2 + s(m) * (e - n) / 2,
        x = -1 * s(m) * (t - i) / 2 + l(m) * (e - n) / 2,
        _ = y * y / (h * h) + x * x / (f * f); _ > 1 && (h *= o(_), f *= o(_)); var b = (r === a ? -1 : 1) * o((h * h * (f * f) - h * h * (x * x) - f * f * (y * y)) / (h * h * (x * x) + f * f * (y * y))) || 0,
        w = b * h * x / f,
        S = b * -f * y / h,
        T = (t + i) / 2 + l(m) * w - s(m) * S,
        M = (e + n) / 2 + s(m) * w + l(m) * S,
        C = d([1, 0], [(y - w) / h, (x - S) / f]),
        I = [(y - w) / h, (x - S) / f],
        A = [(-1 * y - w) / h, (-1 * x - S) / f],
        k = d(I, A); c(I, A) <= -1 && (k = u), c(I, A) >= 1 && (k = 0), a === 0 && k > 0 && (k -= 2 * u), a === 1 && k < 0 && (k += 2 * u), v.addData(g, T, M, h, f, C, k, m, a)
    } var p = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
      g = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g; function v(t) {
      if (!t) {return new r();} for (var e, i = 0, n = 0, a = i, o = n, s = new r(), l = r.CMD, u = t.match(p), h = 0; h < u.length; h++) {
        for (var c, d = u[h], v = d.charAt(0), m = d.match(g) || [], y = m.length, x = 0; x < y; x++) {m[x] = parseFloat(m[x]);} var _ = 0; while (_ < y) {
          var b, w, S, T, M, C, I,
            A = i,
            k = n; switch (v) {
            case 'l':i += m[_++], n += m[_++], c = l.L, s.addData(c, i, n); break; case 'L':i = m[_++], n = m[_++], c = l.L, s.addData(c, i, n); break; case 'm':i += m[_++], n += m[_++], c = l.M, s.addData(c, i, n), a = i, o = n, v = 'l'; break; case 'M':i = m[_++], n = m[_++], c = l.M, s.addData(c, i, n), a = i, o = n, v = 'L'; break; case 'h':i += m[_++], c = l.L, s.addData(c, i, n); break; case 'H':i = m[_++], c = l.L, s.addData(c, i, n); break; case 'v':n += m[_++], c = l.L, s.addData(c, i, n); break; case 'V':n = m[_++], c = l.L, s.addData(c, i, n); break; case 'C':c = l.C, s.addData(c, m[_++], m[_++], m[_++], m[_++], m[_++], m[_++]), i = m[_ - 2], n = m[_ - 1]; break; case 'c':c = l.C, s.addData(c, m[_++] + i, m[_++] + n, m[_++] + i, m[_++] + n, m[_++] + i, m[_++] + n), i += m[_ - 2], n += m[_ - 1]; break; case 'S':b = i, w = n; var D = s.len(),
              O = s.data; e === l.C && (b += i - O[D - 4], w += n - O[D - 3]), c = l.C, A = m[_++], k = m[_++], i = m[_++], n = m[_++], s.addData(c, b, w, A, k, i, n); break; case 's':b = i, w = n; D = s.len(), O = s.data; e === l.C && (b += i - O[D - 4], w += n - O[D - 3]), c = l.C, A = i + m[_++], k = n + m[_++], i += m[_++], n += m[_++], s.addData(c, b, w, A, k, i, n); break; case 'Q':A = m[_++], k = m[_++], i = m[_++], n = m[_++], c = l.Q, s.addData(c, A, k, i, n); break; case 'q':A = m[_++] + i, k = m[_++] + n, i += m[_++], n += m[_++], c = l.Q, s.addData(c, A, k, i, n); break; case 'T':b = i, w = n; D = s.len(), O = s.data; e === l.Q && (b += i - O[D - 4], w += n - O[D - 3]), i = m[_++], n = m[_++], c = l.Q, s.addData(c, b, w, i, n); break; case 't':b = i, w = n; D = s.len(), O = s.data; e === l.Q && (b += i - O[D - 4], w += n - O[D - 3]), i += m[_++], n += m[_++], c = l.Q, s.addData(c, b, w, i, n); break; case 'A':S = m[_++], T = m[_++], M = m[_++], C = m[_++], I = m[_++], A = i, k = n, i = m[_++], n = m[_++], c = l.A, f(A, k, i, n, C, I, S, T, M, c, s); break; case 'a':S = m[_++], T = m[_++], M = m[_++], C = m[_++], I = m[_++], A = i, k = n, i += m[_++], n += m[_++], c = l.A, f(A, k, i, n, C, I, S, T, M, c, s); break
          }
        }v !== 'z' && v !== 'Z' || (c = l.Z, s.addData(c), i = a, n = o), e = c
      } return s.toStatic(), s
    } function m(t, e) {var i = v(t); return e = e || {}, e.buildPath = function(t) {if (t.setData) {t.setData(i.data); var e = t.getContext(); e && t.rebuildPath(e)} else {e = t; i.rebuildPath(e)}}, e.applyTransform = function(t) {a(i, t), this.dirty(!0)}, e} function y(t, e) {return new n(m(t, e))} function x(t, e) {return n.extend(m(t, e))} function _(t, e) {for (var i = [], r = t.length, a = 0; a < r; a++) {var o = t[a]; o.path || o.createPathProxy(), o.__dirtyPath && o.buildPath(o.path, o.shape, !0), i.push(o.path)} var s = new n(e); return s.createPathProxy(), s.buildPath = function(t) {t.appendPath(i); var e = t.getContext(); e && t.rebuildPath(e)}, s}e.createFromString = y, e.extendFromString = x, e.mergePath = _
  },
  3842: function(t, e, i) {
    var n = i('6d8b'),
      r = 1e-4; function a(t) {return t.replace(/^\s+|\s+$/g, '')} function o(t, e, i, n) {
      var r = e[1] - e[0],
        a = i[1] - i[0]; if (r === 0) {return a === 0 ? i[0] : (i[0] + i[1]) / 2;} if (n) {if (r > 0) {if (t <= e[0]) {return i[0];} if (t >= e[1]) {return i[1]}} else {if (t >= e[0]) {return i[0];} if (t <= e[1]) {return i[1]}}} else {if (t === e[0]) {return i[0];} if (t === e[1]) {return i[1]}} return (t - e[0]) / r * a + i[0]
    } function s(t, e) {switch (t) {case 'center':case 'middle':t = '50%'; break; case 'left':case 'top':t = '0%'; break; case 'right':case 'bottom':t = '100%'; break} return typeof t === 'string' ? a(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : t == null ? NaN : +t} function l(t, e, i) {return e == null && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), i ? t : +t} function u(t) {return t.sort((function(t, e) {return t - e})), t} function h(t) {
      if (t = +t, isNaN(t)) {return 0;} var e = 1,
        i = 0; while (Math.round(t * e) / e !== t) {e *= 10, i++;} return i
    } function c(t) {
      var e = t.toString(),
        i = e.indexOf('e'); if (i > 0) {var n = +e.slice(i + 1); return n < 0 ? -n : 0} var r = e.indexOf('.'); return r < 0 ? 0 : e.length - 1 - r
    } function d(t, e) {
      var i = Math.log,
        n = Math.LN10,
        r = Math.floor(i(t[1] - t[0]) / n),
        a = Math.round(i(Math.abs(e[1] - e[0])) / n),
        o = Math.min(Math.max(-r + a, 0), 20); return isFinite(o) ? o : 20
    } function f(t, e, i) {
      if (!t[e]) {return 0;} var r = n.reduce(t, (function(t, e) {return t + (isNaN(e) ? 0 : e)}), 0); if (r === 0) {return 0;} var a = Math.pow(10, i),
        o = n.map(t, (function(t) {return (isNaN(t) ? 0 : t) / r * a * 100})),
        s = 100 * a,
        l = n.map(o, (function(t) {return Math.floor(t)})),
        u = n.reduce(l, (function(t, e) {return t + e}), 0),
        h = n.map(o, (function(t, e) {return t - l[e]})); while (u < s) {for (var c = Number.NEGATIVE_INFINITY, d = null, f = 0, p = h.length; f < p; ++f) {h[f] > c && (c = h[f], d = f);}++l[d], h[d] = 0, ++u} return l[e] / a
    } var p = 9007199254740991; function g(t) {var e = 2 * Math.PI; return (t % e + e) % e} function v(t) {return t > -r && t < r} var m = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/; function y(t) {if (t instanceof Date) {return t;} if (typeof t === 'string') {var e = m.exec(t); if (!e) {return new Date(NaN);} if (e[8]) {var i = +e[4] || 0; return e[8].toUpperCase() !== 'Z' && (i -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, i, +(e[5] || 0), +e[6] || 0, +e[7] || 0))} return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)} return t == null ? new Date(NaN) : new Date(Math.round(t))} function x(t) {return Math.pow(10, _(t))} function _(t) {if (t === 0) {return 0;} var e = Math.floor(Math.log(t) / Math.LN10); return t / Math.pow(10, e) >= 10 && e++, e} function b(t, e) {
      var i,
        n = _(t),
        r = Math.pow(10, n),
        a = t / r; return i = e ? a < 1.5 ? 1 : a < 2.5 ? 2 : a < 4 ? 3 : a < 7 ? 5 : 10 : a < 1 ? 1 : a < 2 ? 2 : a < 3 ? 3 : a < 5 ? 5 : 10, t = i * r, n >= -20 ? +t.toFixed(n < 0 ? -n : 0) : t
    } function w(t, e) {
      var i = (t.length - 1) * e + 1,
        n = Math.floor(i),
        r = +t[n - 1],
        a = i - n; return a ? r + a * (t[n] - r) : r
    } function S(t) {t.sort((function(t, e) {return s(t, e, 0) ? -1 : 1})); for (var e = -1 / 0, i = 1, n = 0; n < t.length;) {for (var r = t[n].interval, a = t[n].close, o = 0; o < 2; o++) {r[o] <= e && (r[o] = e, a[o] = o ? 1 : 1 - i), e = r[o], i = a[o];}r[0] === r[1] && a[0] * a[1] !== 1 ? t.splice(n, 1) : n++} return t; function s(t, e, i) {return t.interval[i] < e.interval[i] || t.interval[i] === e.interval[i] && (t.close[i] - e.close[i] === (i ? -1 : 1) || !i && s(t, e, 1))}} function T(t) {return t - parseFloat(t) >= 0}e.linearMap = o, e.parsePercent = s, e.round = l, e.asc = u, e.getPrecision = h, e.getPrecisionSafe = c, e.getPixelPrecision = d, e.getPercentWithPrecision = f, e.MAX_SAFE_INTEGER = p, e.remRadian = g, e.isRadianAroundZero = v, e.parseDate = y, e.quantity = x, e.quantityExponent = _, e.nice = b, e.quantile = w, e.reformIntervals = S, e.isNumeric = T
  },
  '38a2': function(t, e, i) {
    var n = i('2b17'),
      r = n.retrieveRawValue,
      a = i('eda2'),
      o = a.getTooltipMarker,
      s = a.formatTpl,
      l = i('e0d3'),
      u = l.getTooltipRenderMode,
      h = /\{@(.+?)\}/g,
      c = {
        getDataParams: function(t, e) {
          var i = this.getData(e),
            n = this.getRawValue(t, e),
            r = i.getRawIndex(t),
            a = i.getName(t),
            s = i.getRawDataItem(t),
            l = i.getItemVisual(t, 'color'),
            h = i.getItemVisual(t, 'borderColor'),
            c = this.ecModel.getComponent('tooltip'),
            d = c && c.get('renderMode'),
            f = u(d),
            p = this.mainType,
            g = p === 'series',
            v = i.userOutput; return {
            componentType: p,
            componentSubType: this.subType,
            componentIndex: this.componentIndex,
            seriesType: g ? this.subType : null,
            seriesIndex: this.seriesIndex,
            seriesId: g ? this.id : null,
            seriesName: g ? this.name : null,
            name: a,
            dataIndex: r,
            data: s,
            dataType: e,
            value: n,
            color: l,
            borderColor: h,
            dimensionNames: v ? v.dimensionNames : null,
            encode: v ? v.encode : null,
            marker: o({
              color: l, renderMode: f,
            }),
            $vars: ['seriesName', 'name', 'value'],
          }
        },
        getFormattedLabel: function(t, e, i, n, a) {
          e = e || 'normal'; var o = this.getData(i),
            l = o.getItemModel(t),
            u = this.getDataParams(t, i); n != null && u.value instanceof Array && (u.value = u.value[n]); var c = l.get(e === 'normal' ? [a || 'label', 'formatter'] : [e, a || 'label', 'formatter']); if (typeof c === 'function') {return u.status = e, u.dimensionIndex = n, c(u);} if (typeof c === 'string') {var d = s(c, u); return d.replace(h, (function(e, i) {var n = i.length; return i.charAt(0) === '[' && i.charAt(n - 1) === ']' && (i = +i.slice(1, n - 1)), r(o, t, i)}))}
        },
        getRawValue: function(t, e) {return r(this.getData(e), t)},
        formatTooltip: function() {},
      }; t.exports = c
  },
  3901: function(t, e, i) {
    var n = i('282b'),
      r = n([['lineWidth', 'width'], ['stroke', 'color'], ['opacity'], ['shadowBlur'], ['shadowOffsetX'], ['shadowOffsetY'], ['shadowColor']]),
      a = {
        getLineStyle: function(t) {var e = r(this, t); return e.lineDash = this.getLineDash(e.lineWidth), e},
        getLineDash: function(t) {
          t == null && (t = 1); var e = this.get('type'),
            i = Math.max(t, 2),
            n = 4 * t; return e !== 'solid' && e != null && (e === 'dashed' ? [n, n] : [i, i])
        },
      }; t.exports = a
  },
  '392f': function(t, e, i) {
    var n = i('6d8b'),
      r = n.inherits,
      a = i('19eb'),
      o = i('9850'); function s(t) {a.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0}s.prototype.incremental = !0, s.prototype.clearDisplaybles = function() {this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1}, s.prototype.addDisplayable = function(t, e) {e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty()}, s.prototype.addDisplayables = function(t, e) {e = e || !1; for (var i = 0; i < t.length; i++) {this.addDisplayable(t[i], e)}}, s.prototype.eachPendingDisplayable = function(t) {for (var e = this._cursor; e < this._displayables.length; e++) {t && t(this._displayables[e]);} for (e = 0; e < this._temporaryDisplayables.length; e++) {t && t(this._temporaryDisplayables[e])}}, s.prototype.update = function() {this.updateTransform(); for (var t = this._cursor; t < this._displayables.length; t++) {var e = this._displayables[t]; e.parent = this, e.update(), e.parent = null} for (t = 0; t < this._temporaryDisplayables.length; t++) {e = this._temporaryDisplayables[t]; e.parent = this, e.update(), e.parent = null}}, s.prototype.brush = function(t, e) {for (var i = this._cursor; i < this._displayables.length; i++) {var n = this._displayables[i]; n.beforeBrush && n.beforeBrush(t), n.brush(t, i === this._cursor ? null : this._displayables[i - 1]), n.afterBrush && n.afterBrush(t)} this._cursor = i; for (i = 0; i < this._temporaryDisplayables.length; i++) {n = this._temporaryDisplayables[i]; n.beforeBrush && n.beforeBrush(t), n.brush(t, i === 0 ? null : this._temporaryDisplayables[i - 1]), n.afterBrush && n.afterBrush(t)} this._temporaryDisplayables = [], this.notClear = !0}; var l = []; s.prototype.getBoundingRect = function() {
      if (!this._rect) {
        for (var t = new o(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
          var i = this._displayables[e],
            n = i.getBoundingRect().clone(); i.needLocalTransform() && n.applyTransform(i.getLocalTransform(l)), t.union(n)
        } this._rect = t
      } return this._rect
    }, s.prototype.contain = function(t, e) {
      var i = this.transformCoordToLocal(t, e),
        n = this.getBoundingRect(); if (n.contain(i[0], i[1])) {for (var r = 0; r < this._displayables.length; r++) {var a = this._displayables[r]; if (a.contain(t, e)) {return !0}}} return !1
    }, r(s, a); var u = s; t.exports = u
  },
  '3eba': function(t, e, i) {
    var n = i('4e08'),
      r = (n.__DEV__, i('697e7')),
      a = i('6d8b'),
      o = i('41ef'),
      s = i('22d1'),
      l = i('04f6'),
      u = i('1fab'),
      h = i('7e63'),
      c = i('843e'),
      d = i('2039'),
      f = i('ca98'),
      p = i('fb05'),
      g = i('d15d'),
      v = i('6cb7'),
      m = i('4f85'),
      y = i('b12f'),
      x = i('e887'),
      _ = i('2306'),
      b = i('e0d3'),
      w = i('88b3'),
      S = w.throttle,
      T = i('fd63'),
      M = i('b809'),
      C = i('998c'),
      I = i('69ff'),
      A = i('c533'),
      k = i('f219'); i('0352'); var D = i('ec34'),
      O = a.assert,
      P = a.each,
      L = a.isFunction,
      E = a.isObject,
      R = v.parseClassType,
      B = '4.7.0',
      z = {
        zrender: '4.3.0',
      },
      N = 1,
      F = 1e3,
      V = 800,
      H = 900,
      W = 5e3,
      G = 1e3,
      U = 1100,
      Y = 2e3,
      X = 3e3,
      q = 3500,
      j = 4e3,
      Z = 5e3,
      K = {
        PROCESSOR: {
          FILTER: F, SERIES_FILTER: V, STATISTIC: W,
        },
        VISUAL: {
          LAYOUT: G, PROGRESSIVE_LAYOUT: U, GLOBAL: Y, CHART: X, POST_CHART_LAYOUT: q, COMPONENT: j, BRUSH: Z,
        },
      },
      $ = '__flagInMainProcess',
      Q = '__optionUpdated',
      J = /^[a-zA-Z0-9_]+$/; function tt(t, e) {return function(i, n, r) {e || !this._disposed ? (i = i && i.toLowerCase(), u.prototype[t].call(this, i, n, r)) : _t(this.id)}} function et() {u.call(this)} function it(t, e, i) {
      i = i || {}, typeof e === 'string' && (e = Pt[e]), this.id, this.group, this._dom = t; var n = 'canvas',
        o = this._zr = r.init(t, {
          renderer: i.renderer || n, devicePixelRatio: i.devicePixelRatio, width: i.width, height: i.height,
        }); this._throttledZrFlush = S(a.bind(o.flush, o), 17); e = a.clone(e); e && p(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new d(); var s = this._api = Tt(this); function h(t, e) {return t.__prio - e.__prio}l(Ot, h), l(At, h), this._scheduler = new I(this, s, At, Ot), u.call(this, this._ecEventProcessor = new Mt()), this._messageCenter = new et(), this._initEvents(), this.resize = a.bind(this.resize, this), this._pendingActions = [], o.animation.on('frame', this._onframe, this), dt(o, this), a.setAsPrimitive(this)
    }et.prototype.on = tt('on', !0), et.prototype.off = tt('off', !0), et.prototype.one = tt('one', !0), a.mixin(et, u); var nt = it.prototype; function rt(t, e, i) {
      if (this._disposed) {_t(this.id);} else {
        var n,
          r = this._model,
          a = this._coordSysMgr.getCoordinateSystems(); e = b.parseFinder(r, e); for (var o = 0; o < a.length; o++) {var s = a[o]; if (s[t] && (n = s[t](r, e, i)) != null) {return n}}
      }
    }nt._onframe = function() {
      if (!this._disposed) {
        var t = this._scheduler; if (this[Q]) {var e = this[Q].silent; this[$] = !0, ot(this), at.update.call(this), this[$] = !1, this[Q] = !1, ht.call(this, e), ct.call(this, e)} else if (t.unfinished) {
          var i = N,
            n = this._model,
            r = this._api; t.unfinished = !1; do {var a = +new Date(); t.performSeriesTasks(n), t.performDataProcessorTasks(n), lt(this, n), t.performVisualTasks(n), mt(this, this._model, r, 'remain'), i -= +new Date() - a} while (i > 0 && t.unfinished);t.unfinished || this._zr.flush()
        }
      }
    }, nt.getDom = function() {return this._dom}, nt.getZr = function() {return this._zr}, nt.setOption = function(t, e, i) {
      if (this._disposed) {_t(this.id);} else {
        var n; if (E(e) && (i = e.lazyUpdate, n = e.silent, e = e.notMerge), this[$] = !0, !this._model || e) {
          var r = new f(this._api),
            a = this._theme,
            o = this._model = new h(); o.scheduler = this._scheduler, o.init(null, null, a, r)
        } this._model.setOption(t, kt), i ? (this[Q] = {
          silent: n,
        }, this[$] = !1) : (ot(this), at.update.call(this), this._zr.flush(), this[Q] = !1, this[$] = !1, ht.call(this, n), ct.call(this, n))
      }
    }, nt.setTheme = function() {console.error('ECharts#setTheme() is DEPRECATED in ECharts 3.0')}, nt.getModel = function() {return this._model}, nt.getOption = function() {return this._model && this._model.getOption()}, nt.getWidth = function() {return this._zr.getWidth()}, nt.getHeight = function() {return this._zr.getHeight()}, nt.getDevicePixelRatio = function() {return this._zr.painter.dpr || window.devicePixelRatio || 1}, nt.getRenderedCanvas = function(t) {if (s.canvasSupported) {t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get('backgroundColor'); var e = this._zr; return e.painter.getRenderedCanvas(t)}}, nt.getSvgDataUrl = function() {
      if (s.svgSupported) {
        var t = this._zr,
          e = t.storage.getDisplayList(); return a.each(e, (function(t) {t.stopAnimation(!0)})), t.painter.pathToDataUrl()
      }
    }, nt.getDataURL = function(t) {
      if (!this._disposed) {
        t = t || {}; var e = t.excludeComponents,
          i = this._model,
          n = [],
          r = this; P(e, (function(t) {
          i.eachComponent({
            mainType: t,
          }, (function(t) {var e = r._componentsMap[t.__viewId]; e.group.ignore || (n.push(e), e.group.ignore = !0)}))
        })); var a = this._zr.painter.getType() === 'svg' ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL('image/' + (t && t.type || 'png')); return P(n, (function(t) {t.group.ignore = !1})), a
      }_t(this.id)
    }, nt.getConnectedDataURL = function(t) {
      if (this._disposed) {_t(this.id);} else if (s.canvasSupported) {
        var e = this.group,
          i = Math.min,
          n = Math.max,
          o = 1 / 0; if (Rt[e]) {
          var l = o,
            u = o,
            h = -o,
            c = -o,
            d = [],
            f = t && t.pixelRatio || 1; a.each(Et, (function(r, o) {
            if (r.group === e) {
              var s = r.getRenderedCanvas(a.clone(t)),
                f = r.getDom().getBoundingClientRect(); l = i(f.left, l), u = i(f.top, u), h = n(f.right, h), c = n(f.bottom, c), d.push({
                dom: s, left: f.left, top: f.top,
              })
            }
          })), l *= f, u *= f, h *= f, c *= f; var p = h - l,
            g = c - u,
            v = a.createCanvas(); v.width = p, v.height = g; var m = r.init(v); return t.connectedBackgroundColor && m.add(new _.Rect({
            shape: {
              x: 0, y: 0, width: p, height: g,
            },
            style: {
              fill: t.connectedBackgroundColor,
            },
          })), P(d, (function(t) {
            var e = new _.Image({
              style: {
                x: t.left * f - l, y: t.top * f - u, image: t.dom,
              },
            }); m.add(e)
          })), m.refreshImmediately(), v.toDataURL('image/' + (t && t.type || 'png'))
        } return this.getDataURL(t)
      }
    }, nt.convertToPixel = a.curry(rt, 'convertToPixel'), nt.convertFromPixel = a.curry(rt, 'convertFromPixel'), nt.containPixel = function(t, e) {
      if (!this._disposed) {
        var i,
          n = this._model; return t = b.parseFinder(n, t), a.each(t, (function(t, n) {n.indexOf('Models') >= 0 && a.each(t, (function(t) {var r = t.coordinateSystem; if (r && r.containPoint) {i |= !!r.containPoint(e);} else if (n === 'seriesModels') {var a = this._chartsMap[t.__viewId]; a && a.containPoint && (i |= a.containPoint(e, t))}}), this)}), this), !!i
      }_t(this.id)
    }, nt.getVisual = function(t, e) {
      var i = this._model; t = b.parseFinder(i, t, {
        defaultMainType: 'series',
      }); var n = t.seriesModel,
        r = n.getData(),
        a = t.hasOwnProperty('dataIndexInside') ? t.dataIndexInside : t.hasOwnProperty('dataIndex') ? r.indexOfRawIndex(t.dataIndex) : null; return a != null ? r.getItemVisual(a, e) : r.getVisual(e)
    }, nt.getViewOfComponentModel = function(t) {return this._componentsMap[t.__viewId]}, nt.getViewOfSeriesModel = function(t) {return this._chartsMap[t.__viewId]}; var at = {
      prepareAndUpdate: function(t) {ot(this), at.update.call(this, t)},
      update: function(t) {
        var e = this._model,
          i = this._api,
          n = this._zr,
          r = this._coordSysMgr,
          a = this._scheduler; if (e) {a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, i), a.performDataProcessorTasks(e, t), lt(this, e), r.update(e, i), pt(e), a.performVisualTasks(e, t), gt(this, e, i, t); var l = e.get('backgroundColor') || 'transparent'; if (s.canvasSupported) {n.setBackgroundColor(l);} else {var u = o.parse(l); l = o.stringify(u, 'rgb'), u[3] === 0 && (l = 'transparent')}yt(e, i)}
      },
      updateTransform: function(t) {
        var e = this._model,
          i = this,
          n = this._api; if (e) {
          var r = []; e.eachComponent((function(a, o) {var s = i.getViewOfComponentModel(o); if (s && s.__alive) {if (s.updateTransform) {var l = s.updateTransform(o, e, n, t); l && l.update && r.push(s)} else {r.push(s)}}})); var o = a.createHashMap(); e.eachSeries((function(r) {var a = i._chartsMap[r.__viewId]; if (a.updateTransform) {var s = a.updateTransform(r, e, n, t); s && s.update && o.set(r.uid, 1)} else {o.set(r.uid, 1)}})), pt(e), this._scheduler.performVisualTasks(e, t, {
            setDirty: !0, dirtyMap: o,
          }), mt(i, e, n, t, o), yt(e, this._api)
        }
      },
      updateView: function(t) {
        var e = this._model; e && (x.markUpdateMethod(t, 'updateView'), pt(e), this._scheduler.performVisualTasks(e, t, {
          setDirty: !0,
        }), gt(this, this._model, this._api, t), yt(e, this._api))
      },
      updateVisual: function(t) {at.update.call(this, t)},
      updateLayout: function(t) {at.update.call(this, t)},
    }; function ot(t) {
      var e = t._model,
        i = t._scheduler; i.restorePipelines(e), i.prepareStageTasks(), ft(t, 'component', e, i), ft(t, 'chart', e, i), i.plan()
    } function st(t, e, i, n, r) {
      var o = t._model; if (n) {
        var s = {}; s[n + 'Id'] = i[n + 'Id'], s[n + 'Index'] = i[n + 'Index'], s[n + 'Name'] = i[n + 'Name']; var l = {
          mainType: n, query: s,
        }; r && (l.subType = r); var u = i.excludeSeriesId; u != null && (u = a.createHashMap(b.normalizeToArray(u))), o && o.eachComponent(l, (function(e) {u && u.get(e.id) != null || h(t[n === 'series' ? '_chartsMap' : '_componentsMap'][e.__viewId])}), t)
      } else {P(t._componentsViews.concat(t._chartsViews), h);} function h(n) {n && n.__alive && n[e] && n[e](n.__model, o, t._api, i)}
    } function lt(t, e) {
      var i = t._chartsMap,
        n = t._scheduler; e.eachSeries((function(t) {n.updateStreamModes(t, i[t.__viewId])}))
    } function ut(t, e) {
      var i = t.type,
        n = t.escapeConnect,
        r = Ct[i],
        o = r.actionInfo,
        s = (o.update || 'update').split(':'),
        l = s.pop(); s = s[0] != null && R(s[0]), this[$] = !0; var u = [t],
        h = !1; t.batch && (h = !0, u = a.map(t.batch, (function(e) {return e = a.defaults(a.extend({}, e), t), e.batch = null, e}))); var c,
        d = [],
        f = i === 'highlight' || i === 'downplay'; P(u, (function(t) {c = r.action(t, this._model, this._api), c = c || a.extend({}, t), c.type = o.event || c.type, d.push(c), f ? st(this, l, t, 'series') : s && st(this, l, t, s.main, s.sub)}), this), l === 'none' || f || s || (this[Q] ? (ot(this), at.update.call(this, t), this[Q] = !1) : at[l].call(this, t)), c = h ? {
        type: o.event || i, escapeConnect: n, batch: d,
      } : d[0], this[$] = !1, !e && this._messageCenter.trigger(c.type, c)
    } function ht(t) {var e = this._pendingActions; while (e.length) {var i = e.shift(); ut.call(this, i, t)}} function ct(t) {!t && this.trigger('updated')} function dt(t, e) {t.on('rendered', (function() {e.trigger('rendered'), !t.animation.isFinished() || e[Q] || e._scheduler.unfinished || e._pendingActions.length || e.trigger('finished')}))} function ft(t, e, i, n) {
      for (var r = e === 'component', a = r ? t._componentsViews : t._chartsViews, o = r ? t._componentsMap : t._chartsMap, s = t._zr, l = t._api, u = 0; u < a.length; u++) {a[u].__alive = !1;} function h(t) {
        var e = '_ec_' + t.id + '_' + t.type,
          u = o[e]; if (!u) {
          var h = R(t.type),
            c = r ? y.getClass(h.main, h.sub) : x.getClass(h.sub); u = new c(), u.init(i, l), o[e] = u, a.push(u), s.add(u.group)
        }t.__viewId = u.__id = e, u.__alive = !0, u.__model = t, u.group.__ecComponentInfo = {
          mainType: t.mainType, index: t.componentIndex,
        }, !r && n.prepareView(u, t, i, l)
      }r ? i.eachComponent((function(t, e) {t !== 'series' && h(e)})) : i.eachSeries(h); for (u = 0; u < a.length;) {var c = a[u]; c.__alive ? u++ : (!r && c.renderTask.dispose(), s.remove(c.group), c.dispose(i, l), a.splice(u, 1), delete o[c.__id], c.__id = c.group.__ecComponentInfo = null)}
    } function pt(t) {t.clearColorPalette(), t.eachSeries((function(t) {t.clearColorPalette()}))} function gt(t, e, i, n) {vt(t, e, i, n), P(t._chartsViews, (function(t) {t.__alive = !1})), mt(t, e, i, n), P(t._chartsViews, (function(t) {t.__alive || t.remove(e, i)}))} function vt(t, e, i, n, r) {P(r || t._componentsViews, (function(t) {var r = t.__model; t.render(r, e, i, n), St(r, t)}))} function mt(t, e, i, n, r) {
      var a,
        o = t._scheduler; e.eachSeries((function(e) {var i = t._chartsMap[e.__viewId]; i.__alive = !0; var s = i.renderTask; o.updatePayload(s, n), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), i.group.silent = !!e.get('silent'), St(e, i), wt(e, i)})), o.unfinished |= a, bt(t, e), M(t._zr.dom, e)
    } function yt(t, e) {P(Dt, (function(i) {i(t, e)}))}nt.resize = function(t) {
      if (this._disposed) {_t(this.id);} else {
        this._zr.resize(t); var e = this._model; if (this._loadingFX && this._loadingFX.resize(), e) {
          var i = e.resetOption('media'),
            n = t && t.silent; this[$] = !0, i && ot(this), at.update.call(this), this[$] = !1, ht.call(this, n), ct.call(this, n)
        }
      }
    }, nt.showLoading = function(t, e) {
      if (this._disposed) {_t(this.id);} else if (E(t) && (e = t, t = ''), t = t || 'default', this.hideLoading(), Lt[t]) {
        var i = Lt[t](this._api, e),
          n = this._zr; this._loadingFX = i, n.add(i)
      }
    }, nt.hideLoading = function() {this._disposed ? _t(this.id) : (this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null)}, nt.makeActionFromEvent = function(t) {var e = a.extend({}, t); return e.type = It[t.type], e}, nt.dispatchAction = function(t, e) {
      this._disposed ? _t(this.id) : (E(e) || (e = {
        silent: !!e,
      }), Ct[t.type] && this._model && (this[$] ? this._pendingActions.push(t) : (ut.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : !1 !== e.flush && s.browser.weChat && this._throttledZrFlush(), ht.call(this, e.silent), ct.call(this, e.silent))))
    }, nt.appendData = function(t) {
      if (this._disposed) {_t(this.id);} else {
        var e = t.seriesIndex,
          i = this.getModel(),
          n = i.getSeriesByIndex(e); n.appendData(t), this._scheduler.unfinished = !0
      }
    }, nt.on = tt('on', !1), nt.off = tt('off', !1), nt.one = tt('one', !1); var xt = ['click', 'dblclick', 'mouseover', 'mouseout', 'mousemove', 'mousedown', 'mouseup', 'globalout', 'contextmenu']; function _t(t) {} function bt(t, e) {
      var i = t._zr,
        n = i.storage,
        r = 0; n.traverse((function(t) {r++})), r > e.get('hoverLayerThreshold') && !s.node && e.eachSeries((function(e) {if (!e.preventUsingHoverLayer) {var i = t._chartsMap[e.__viewId]; i.__alive && i.group.traverse((function(t) {t.useHoverLayer = !0}))}}))
    } function wt(t, e) {var i = t.get('blendMode') || null; e.group.traverse((function(t) {t.isGroup || t.style.blend !== i && t.setStyle('blend', i), t.eachPendingDisplayable && t.eachPendingDisplayable((function(t) {t.setStyle('blend', i)}))}))} function St(t, e) {
      var i = t.get('z'),
        n = t.get('zlevel'); e.group.traverse((function(t) {t.type !== 'group' && (i != null && (t.z = i), n != null && (t.zlevel = n))}))
    } function Tt(t) {
      var e = t._coordSysMgr; return a.extend(new c(t), {
        getCoordinateSystems: a.bind(e.getCoordinateSystems, e), getComponentByElement: function(e) {while (e) {var i = e.__ecComponentInfo; if (i != null) {return t._model.getComponent(i.mainType, i.index);} e = e.parent}},
      })
    } function Mt() {this.eventInfo}nt._initEvents = function() {
      P(xt, (function(t) {
        var e = function(e) {
          var i,
            n = this.getModel(),
            r = e.target,
            o = t === 'globalout'; if (o) {i = {};} else if (r && r.dataIndex != null) {var s = r.dataModel || n.getSeriesByIndex(r.seriesIndex); i = s && s.getDataParams(r.dataIndex, r.dataType, r) || {}} else {r && r.eventData && (i = a.extend({}, r.eventData));} if (i) {
            var l = i.componentType,
              u = i.componentIndex; l !== 'markLine' && l !== 'markPoint' && l !== 'markArea' || (l = 'series', u = i.seriesIndex); var h = l && u != null && n.getComponent(l, u),
              c = h && this[h.mainType === 'series' ? '_chartsMap' : '_componentsMap'][h.__viewId]; i.event = e, i.type = t, this._ecEventProcessor.eventInfo = {
              targetEl: r, packedEvent: i, model: h, view: c,
            }, this.trigger(t, i)
          }
        }; e.zrEventfulCallAtLast = !0, this._zr.on(t, e, this)
      }), this), P(It, (function(t, e) {this._messageCenter.on(e, (function(t) {this.trigger(e, t)}), this)}), this)
    }, nt.isDisposed = function() {return this._disposed}, nt.clear = function() {
      this._disposed ? _t(this.id) : this.setOption({
        series: [],
      }, !0)
    }, nt.dispose = function() {
      if (this._disposed) {_t(this.id);} else {
        this._disposed = !0, b.setAttribute(this.getDom(), Nt, ''); var t = this._api,
          e = this._model; P(this._componentsViews, (function(i) {i.dispose(e, t)})), P(this._chartsViews, (function(i) {i.dispose(e, t)})), this._zr.dispose(), delete Et[this.id]
      }
    }, a.mixin(it, u), Mt.prototype = {
      constructor: Mt,
      normalizeQuery: function(t) {
        var e = {},
          i = {},
          n = {}; if (a.isString(t)) {var r = R(t); e.mainType = r.main || null, e.subType = r.sub || null} else {
          var o = ['Index', 'Name', 'Id'],
            s = {
              name: 1, dataIndex: 1, dataType: 1,
            }; a.each(t, (function(t, r) {
            for (var a = !1, l = 0; l < o.length; l++) {
              var u = o[l],
                h = r.lastIndexOf(u); if (h > 0 && h === r.length - u.length) {var c = r.slice(0, h); c !== 'data' && (e.mainType = c, e[u.toLowerCase()] = t, a = !0)}
            }s.hasOwnProperty(r) && (i[r] = t, a = !0), a || (n[r] = t)
          }))
        } return {
          cptQuery: e, dataQuery: i, otherQuery: n,
        }
      },
      filter: function(t, e, i) {
        var n = this.eventInfo; if (!n) {return !0;} var r = n.targetEl,
          a = n.packedEvent,
          o = n.model,
          s = n.view; if (!o || !s) {return !0;} var l = e.cptQuery,
          u = e.dataQuery; return h(l, o, 'mainType') && h(l, o, 'subType') && h(l, o, 'index', 'componentIndex') && h(l, o, 'name') && h(l, o, 'id') && h(u, a, 'name') && h(u, a, 'dataIndex') && h(u, a, 'dataType') && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, a)); function h(t, e, i, n) {return t[i] == null || e[n || i] === t[i]}
      },
      afterTrigger: function() {this.eventInfo = null},
    }; var Ct = {},
      It = {},
      At = [],
      kt = [],
      Dt = [],
      Ot = [],
      Pt = {},
      Lt = {},
      Et = {},
      Rt = {},
      Bt = new Date() - 0,
      zt = new Date() - 0,
      Nt = '_echarts_instance_'; function Ft(t) {
      var e = 0,
        i = 1,
        n = 2,
        r = '__connectUpdateStatus'; function a(t, e) {for (var i = 0; i < t.length; i++) {var n = t[i]; n[r] = e}}P(It, (function(o, s) {
        t._messageCenter.on(s, (function(o) {
          if (Rt[t.group] && t[r] !== e) {
            if (o && o.escapeConnect) {return;} var s = t.makeActionFromEvent(o),
              l = []; P(Et, (function(e) {e !== t && e.group === t.group && l.push(e)})), a(l, e), P(l, (function(t) {t[r] !== i && t.dispatchAction(s)})), a(l, n)
          }
        }))
      }))
    } function Vt(t, e, i) {var n = Yt(t); if (n) {return n;} var r = new it(t, e, i); return r.id = 'ec_' + Bt++, Et[r.id] = r, b.setAttribute(t, Nt, r.id), Ft(r), r} function Ht(t) {if (a.isArray(t)) {var e = t; t = null, P(e, (function(e) {e.group != null && (t = e.group)})), t = t || 'g_' + zt++, P(e, (function(e) {e.group = t}))} return Rt[t] = !0, t} function Wt(t) {Rt[t] = !1} var Gt = Wt; function Ut(t) {typeof t === 'string' ? t = Et[t] : t instanceof it || (t = Yt(t)), t instanceof it && !t.isDisposed() && t.dispose()} function Yt(t) {return Et[b.getAttribute(t, Nt)]} function Xt(t) {return Et[t]} function qt(t, e) {Pt[t] = e} function jt(t) {kt.push(t)} function Zt(t, e) {ie(At, t, e, F)} function Kt(t) {Dt.push(t)} function $t(t, e, i) {
      typeof e === 'function' && (i = e, e = ''); var n = E(t) ? t.type : [t, t = {
        event: e,
      }][0]; t.event = (t.event || n).toLowerCase(), e = t.event, O(J.test(n) && J.test(e)), Ct[n] || (Ct[n] = {
        action: i, actionInfo: t,
      }), It[e] = n
    } function Qt(t, e) {d.register(t, e)} function Jt(t) {var e = d.get(t); if (e) {return e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice()}} function te(t, e) {ie(Ot, t, e, G, 'layout')} function ee(t, e) {ie(Ot, t, e, X, 'visual')} function ie(t, e, i, n, r) {(L(e) || E(e)) && (i = e, e = n); var a = I.wrapStageHandler(i, r); return a.__prio = e, a.__raw = i, t.push(a), a} function ne(t, e) {Lt[t] = e} function re(t) {return v.extend(t)} function ae(t) {return y.extend(t)} function oe(t) {return m.extend(t)} function se(t) {return x.extend(t)} function le(t) {a.$override('createCanvas', t)} function ue(t, e, i) {D.registerMap(t, e, i)} function he(t) {
      var e = D.retrieveMap(t); return e && e[0] && {
        geoJson: e[0].geoJSON, specialAreas: e[0].specialAreas,
      }
    }ee(Y, T), jt(p), Zt(H, g), ne('default', C), $t({
      type: 'highlight', event: 'highlight', update: 'highlight',
    }, a.noop), $t({
      type: 'downplay', event: 'downplay', update: 'downplay',
    }, a.noop), qt('light', A), qt('dark', k); var ce = {}; e.version = B, e.dependencies = z, e.PRIORITY = K, e.init = Vt, e.connect = Ht, e.disConnect = Wt, e.disconnect = Gt, e.dispose = Ut, e.getInstanceByDom = Yt, e.getInstanceById = Xt, e.registerTheme = qt, e.registerPreprocessor = jt, e.registerProcessor = Zt, e.registerPostUpdate = Kt, e.registerAction = $t, e.registerCoordinateSystem = Qt, e.getCoordinateSystemDimensions = Jt, e.registerLayout = te, e.registerVisual = ee, e.registerLoading = ne, e.extendComponentModel = re, e.extendComponentView = ae, e.extendSeriesModel = oe, e.extendChartView = se, e.setCanvasCreator = le, e.registerMap = ue, e.getMap = he, e.dataTool = ce; var de = i('b719'); (function() {for (var t in de) {de.hasOwnProperty(t) && (e[t] = de[t])}})()
  },
  '401b': function(t, e) {
    var i = typeof Float32Array === 'undefined' ? Array : Float32Array; function n(t, e) {var n = new i(2); return t == null && (t = 0), e == null && (e = 0), n[0] = t, n[1] = e, n} function r(t, e) {return t[0] = e[0], t[1] = e[1], t} function a(t) {var e = new i(2); return e[0] = t[0], e[1] = t[1], e} function o(t, e, i) {return t[0] = e, t[1] = i, t} function s(t, e, i) {return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t} function l(t, e, i, n) {return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t} function u(t, e, i) {return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t} function h(t) {return Math.sqrt(d(t))} var c = h; function d(t) {return t[0] * t[0] + t[1] * t[1]} var f = d; function p(t, e, i) {return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t} function g(t, e, i) {return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t} function v(t, e) {return t[0] * e[0] + t[1] * e[1]} function m(t, e, i) {return t[0] = e[0] * i, t[1] = e[1] * i, t} function y(t, e) {var i = h(e); return i === 0 ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t} function x(t, e) {return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))} var _ = x; function b(t, e) {return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])} var w = b; function S(t, e) {return t[0] = -e[0], t[1] = -e[1], t} function T(t, e, i, n) {return t[0] = e[0] + n * (i[0] - e[0]), t[1] = e[1] + n * (i[1] - e[1]), t} function M(t, e, i) {
      var n = e[0],
        r = e[1]; return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t
    } function C(t, e, i) {return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t} function I(t, e, i) {return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t}e.create = n, e.copy = r, e.clone = a, e.set = o, e.add = s, e.scaleAndAdd = l, e.sub = u, e.len = h, e.length = c, e.lenSquare = d, e.lengthSquare = f, e.mul = p, e.div = g, e.dot = v, e.scale = m, e.normalize = y, e.distance = x, e.dist = _, e.distanceSquare = b, e.distSquare = w, e.negate = S, e.lerp = T, e.applyTransform = M, e.min = C, e.max = I
  },
  '41ef': function(t, e, i) {
    var n = i('d51b'),
      r = {
        transparent: [0, 0, 0, 0], aliceblue: [240, 248, 255, 1], antiquewhite: [250, 235, 215, 1], aqua: [0, 255, 255, 1], aquamarine: [127, 255, 212, 1], azure: [240, 255, 255, 1], beige: [245, 245, 220, 1], bisque: [255, 228, 196, 1], black: [0, 0, 0, 1], blanchedalmond: [255, 235, 205, 1], blue: [0, 0, 255, 1], blueviolet: [138, 43, 226, 1], brown: [165, 42, 42, 1], burlywood: [222, 184, 135, 1], cadetblue: [95, 158, 160, 1], chartreuse: [127, 255, 0, 1], chocolate: [210, 105, 30, 1], coral: [255, 127, 80, 1], cornflowerblue: [100, 149, 237, 1], cornsilk: [255, 248, 220, 1], crimson: [220, 20, 60, 1], cyan: [0, 255, 255, 1], darkblue: [0, 0, 139, 1], darkcyan: [0, 139, 139, 1], darkgoldenrod: [184, 134, 11, 1], darkgray: [169, 169, 169, 1], darkgreen: [0, 100, 0, 1], darkgrey: [169, 169, 169, 1], darkkhaki: [189, 183, 107, 1], darkmagenta: [139, 0, 139, 1], darkolivegreen: [85, 107, 47, 1], darkorange: [255, 140, 0, 1], darkorchid: [153, 50, 204, 1], darkred: [139, 0, 0, 1], darksalmon: [233, 150, 122, 1], darkseagreen: [143, 188, 143, 1], darkslateblue: [72, 61, 139, 1], darkslategray: [47, 79, 79, 1], darkslategrey: [47, 79, 79, 1], darkturquoise: [0, 206, 209, 1], darkviolet: [148, 0, 211, 1], deeppink: [255, 20, 147, 1], deepskyblue: [0, 191, 255, 1], dimgray: [105, 105, 105, 1], dimgrey: [105, 105, 105, 1], dodgerblue: [30, 144, 255, 1], firebrick: [178, 34, 34, 1], floralwhite: [255, 250, 240, 1], forestgreen: [34, 139, 34, 1], fuchsia: [255, 0, 255, 1], gainsboro: [220, 220, 220, 1], ghostwhite: [248, 248, 255, 1], gold: [255, 215, 0, 1], goldenrod: [218, 165, 32, 1], gray: [128, 128, 128, 1], green: [0, 128, 0, 1], greenyellow: [173, 255, 47, 1], grey: [128, 128, 128, 1], honeydew: [240, 255, 240, 1], hotpink: [255, 105, 180, 1], indianred: [205, 92, 92, 1], indigo: [75, 0, 130, 1], ivory: [255, 255, 240, 1], khaki: [240, 230, 140, 1], lavender: [230, 230, 250, 1], lavenderblush: [255, 240, 245, 1], lawngreen: [124, 252, 0, 1], lemonchiffon: [255, 250, 205, 1], lightblue: [173, 216, 230, 1], lightcoral: [240, 128, 128, 1], lightcyan: [224, 255, 255, 1], lightgoldenrodyellow: [250, 250, 210, 1], lightgray: [211, 211, 211, 1], lightgreen: [144, 238, 144, 1], lightgrey: [211, 211, 211, 1], lightpink: [255, 182, 193, 1], lightsalmon: [255, 160, 122, 1], lightseagreen: [32, 178, 170, 1], lightskyblue: [135, 206, 250, 1], lightslategray: [119, 136, 153, 1], lightslategrey: [119, 136, 153, 1], lightsteelblue: [176, 196, 222, 1], lightyellow: [255, 255, 224, 1], lime: [0, 255, 0, 1], limegreen: [50, 205, 50, 1], linen: [250, 240, 230, 1], magenta: [255, 0, 255, 1], maroon: [128, 0, 0, 1], mediumaquamarine: [102, 205, 170, 1], mediumblue: [0, 0, 205, 1], mediumorchid: [186, 85, 211, 1], mediumpurple: [147, 112, 219, 1], mediumseagreen: [60, 179, 113, 1], mediumslateblue: [123, 104, 238, 1], mediumspringgreen: [0, 250, 154, 1], mediumturquoise: [72, 209, 204, 1], mediumvioletred: [199, 21, 133, 1], midnightblue: [25, 25, 112, 1], mintcream: [245, 255, 250, 1], mistyrose: [255, 228, 225, 1], moccasin: [255, 228, 181, 1], navajowhite: [255, 222, 173, 1], navy: [0, 0, 128, 1], oldlace: [253, 245, 230, 1], olive: [128, 128, 0, 1], olivedrab: [107, 142, 35, 1], orange: [255, 165, 0, 1], orangered: [255, 69, 0, 1], orchid: [218, 112, 214, 1], palegoldenrod: [238, 232, 170, 1], palegreen: [152, 251, 152, 1], paleturquoise: [175, 238, 238, 1], palevioletred: [219, 112, 147, 1], papayawhip: [255, 239, 213, 1], peachpuff: [255, 218, 185, 1], peru: [205, 133, 63, 1], pink: [255, 192, 203, 1], plum: [221, 160, 221, 1], powderblue: [176, 224, 230, 1], purple: [128, 0, 128, 1], red: [255, 0, 0, 1], rosybrown: [188, 143, 143, 1], royalblue: [65, 105, 225, 1], saddlebrown: [139, 69, 19, 1], salmon: [250, 128, 114, 1], sandybrown: [244, 164, 96, 1], seagreen: [46, 139, 87, 1], seashell: [255, 245, 238, 1], sienna: [160, 82, 45, 1], silver: [192, 192, 192, 1], skyblue: [135, 206, 235, 1], slateblue: [106, 90, 205, 1], slategray: [112, 128, 144, 1], slategrey: [112, 128, 144, 1], snow: [255, 250, 250, 1], springgreen: [0, 255, 127, 1], steelblue: [70, 130, 180, 1], tan: [210, 180, 140, 1], teal: [0, 128, 128, 1], thistle: [216, 191, 216, 1], tomato: [255, 99, 71, 1], turquoise: [64, 224, 208, 1], violet: [238, 130, 238, 1], wheat: [245, 222, 179, 1], white: [255, 255, 255, 1], whitesmoke: [245, 245, 245, 1], yellow: [255, 255, 0, 1], yellowgreen: [154, 205, 50, 1],
      }; function a(t) {return t = Math.round(t), t < 0 ? 0 : t > 255 ? 255 : t} function o(t) {return t = Math.round(t), t < 0 ? 0 : t > 360 ? 360 : t} function s(t) {return t < 0 ? 0 : t > 1 ? 1 : t} function l(t) {return t.length && t.charAt(t.length - 1) === '%' ? a(parseFloat(t) / 100 * 255) : a(parseInt(t, 10))} function u(t) {return t.length && t.charAt(t.length - 1) === '%' ? s(parseFloat(t) / 100) : s(parseFloat(t))} function h(t, e, i) {return i < 0 ? i += 1 : i > 1 && (i -= 1), 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t} function c(t, e, i) {return t + (e - t) * i} function d(t, e, i, n, r) {return t[0] = e, t[1] = i, t[2] = n, t[3] = r, t} function f(t, e) {return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t} var p = new n(20),
      g = null; function v(t, e) {g && f(g, e), g = p.put(t, g || e.slice())} function m(t, e) {
      if (t) {
        e = e || []; var i = p.get(t); if (i) {return f(e, i);} t += ''; var n = t.replace(/ /g, '').toLowerCase(); if (n in r) {return f(e, r[n]), v(t, e), e;} if (n.charAt(0) !== '#') {
          var a = n.indexOf('('),
            o = n.indexOf(')'); if (a !== -1 && o + 1 === n.length) {
            var s = n.substr(0, a),
              h = n.substr(a + 1, o - (a + 1)).split(','),
              c = 1; switch (s) {case 'rgba':if (h.length !== 4) {return void d(e, 0, 0, 0, 1);} c = u(h.pop()); case 'rgb':return h.length !== 3 ? void d(e, 0, 0, 0, 1) : (d(e, l(h[0]), l(h[1]), l(h[2]), c), v(t, e), e); case 'hsla':return h.length !== 4 ? void d(e, 0, 0, 0, 1) : (h[3] = u(h[3]), y(h, e), v(t, e), e); case 'hsl':return h.length !== 3 ? void d(e, 0, 0, 0, 1) : (y(h, e), v(t, e), e); default:return}
          }d(e, 0, 0, 0, 1)
        } else {if (n.length === 4) {var g = parseInt(n.substr(1), 16); return g >= 0 && g <= 4095 ? (d(e, (3840 & g) >> 4 | (3840 & g) >> 8, 240 & g | (240 & g) >> 4, 15 & g | (15 & g) << 4, 1), v(t, e), e) : void d(e, 0, 0, 0, 1)} if (n.length === 7) {g = parseInt(n.substr(1), 16); return g >= 0 && g <= 16777215 ? (d(e, (16711680 & g) >> 16, (65280 & g) >> 8, 255 & g, 1), v(t, e), e) : void d(e, 0, 0, 0, 1)}}
      }
    } function y(t, e) {
      var i = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
        n = u(t[1]),
        r = u(t[2]),
        o = r <= 0.5 ? r * (n + 1) : r + n - r * n,
        s = 2 * r - o; return e = e || [], d(e, a(255 * h(s, o, i + 1 / 3)), a(255 * h(s, o, i)), a(255 * h(s, o, i - 1 / 3)), 1), t.length === 4 && (e[3] = t[3]), e
    } function x(t) {
      if (t) {
        var e, i,
          n = t[0] / 255,
          r = t[1] / 255,
          a = t[2] / 255,
          o = Math.min(n, r, a),
          s = Math.max(n, r, a),
          l = s - o,
          u = (s + o) / 2; if (l === 0) {e = 0, i = 0;} else {
          i = u < 0.5 ? l / (s + o) : l / (2 - s - o); var h = ((s - n) / 6 + l / 2) / l,
            c = ((s - r) / 6 + l / 2) / l,
            d = ((s - a) / 6 + l / 2) / l; n === s ? e = d - c : r === s ? e = 1 / 3 + h - d : a === s && (e = 2 / 3 + c - h), e < 0 && (e += 1), e > 1 && (e -= 1)
        } var f = [360 * e, i, u]; return t[3] != null && f.push(t[3]), f
      }
    } function _(t, e) {var i = m(t); if (i) {for (var n = 0; n < 3; n++) {i[n] = e < 0 ? i[n] * (1 - e) | 0 : (255 - i[n]) * e + i[n] | 0, i[n] > 255 ? i[n] = 255 : t[n] < 0 && (i[n] = 0);} return A(i, i.length === 4 ? 'rgba' : 'rgb')}} function b(t) {var e = m(t); if (e) {return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1)}} function w(t, e, i) {
      if (e && e.length && t >= 0 && t <= 1) {
        i = i || []; var n = t * (e.length - 1),
          r = Math.floor(n),
          o = Math.ceil(n),
          l = e[r],
          u = e[o],
          h = n - r; return i[0] = a(c(l[0], u[0], h)), i[1] = a(c(l[1], u[1], h)), i[2] = a(c(l[2], u[2], h)), i[3] = s(c(l[3], u[3], h)), i
      }
    } var S = w; function T(t, e, i) {
      if (e && e.length && t >= 0 && t <= 1) {
        var n = t * (e.length - 1),
          r = Math.floor(n),
          o = Math.ceil(n),
          l = m(e[r]),
          u = m(e[o]),
          h = n - r,
          d = A([a(c(l[0], u[0], h)), a(c(l[1], u[1], h)), a(c(l[2], u[2], h)), s(c(l[3], u[3], h))], 'rgba'); return i ? {
          color: d, leftIndex: r, rightIndex: o, value: n,
        } : d
      }
    } var M = T; function C(t, e, i, n) {if (t = m(t), t) {return t = x(t), e != null && (t[0] = o(e)), i != null && (t[1] = u(i)), n != null && (t[2] = u(n)), A(y(t), 'rgba')}} function I(t, e) {if (t = m(t), t && e != null) {return t[3] = s(e), A(t, 'rgba')}} function A(t, e) {if (t && t.length) {var i = t[0] + ',' + t[1] + ',' + t[2]; return e !== 'rgba' && e !== 'hsva' && e !== 'hsla' || (i += ',' + t[3]), e + '(' + i + ')'}}e.parse = m, e.lift = _, e.toHex = b, e.fastLerp = w, e.fastMapToColor = S, e.lerp = T, e.mapToColor = M, e.modifyHSL = C, e.modifyAlpha = I, e.stringify = A
  },
  '42e5': function(t, e) {
    var i = function(t) {this.colorStops = t || []}; i.prototype = {
      constructor: i,
      addColorStop: function(t, e) {
        this.colorStops.push({
          offset: t, color: e,
        })
      },
    }; var n = i; t.exports = n
  },
  '42f6': function(t, e, i) {
    var n = i('3eba'),
      r = i('6d8b'),
      a = i('22d1'),
      o = i('07d7'),
      s = i('82f9'),
      l = i('eda2'),
      u = i('3842'),
      h = i('2306'),
      c = i('133d'),
      d = i('f934'),
      f = i('4319'),
      p = i('17d6'),
      g = i('697e'),
      v = i('ff2e'),
      m = i('e0d3'),
      y = m.getTooltipRenderMode,
      x = r.bind,
      _ = r.each,
      b = u.parsePercent,
      w = new h.Rect({
        shape: {
          x: -1, y: -1, width: 2, height: 2,
        },
      }),
      S = n.extendComponentView({
        type: 'tooltip',
        init: function(t, e) {
          if (!a.node) {
            var i,
              n = t.getComponent('tooltip'),
              r = n.get('renderMode'); this._renderMode = y(r), this._renderMode === 'html' ? (i = new o(e.getDom(), e, {
              appendToBody: n.get('appendToBody', !0),
            }), this._newLine = '<br/>') : (i = new s(e), this._newLine = '\n'), this._tooltipContent = i
          }
        },
        render: function(t, e, i) {if (!a.node) {this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = i, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get('alwaysShowContent'); var n = this._tooltipContent; n.update(), n.setEnterable(t.get('enterable')), this._initGlobalListener(), this._keepShow()}},
        _initGlobalListener: function() {
          var t = this._tooltipModel,
            e = t.get('triggerOn'); p.register('itemTooltip', this._api, x((function(t, i, n) {e !== 'none' && (e.indexOf(t) >= 0 ? this._tryShow(i, n) : t === 'leave' && this._hide(n))}), this))
        },
        _keepShow: function() {
          var t = this._tooltipModel,
            e = this._ecModel,
            i = this._api; if (this._lastX != null && this._lastY != null && t.get('triggerOn') !== 'none') {
            var n = this; clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout((function() {
              !i.isDisposed() && n.manuallyShowTip(t, e, i, {
                x: n._lastX, y: n._lastY,
              })
            }))
          }
        },
        manuallyShowTip: function(t, e, i, n) {
          if (n.from !== this.uid && !a.node) {
            var r = M(n, i); this._ticket = ''; var o = n.dataByCoordSys; if (n.tooltip && n.x != null && n.y != null) {
              var s = w; s.position = [n.x, n.y], s.update(), s.tooltip = n.tooltip, this._tryShow({
                offsetX: n.x, offsetY: n.y, target: s,
              }, r)
            } else if (o) {
              this._tryShow({
                offsetX: n.x, offsetY: n.y, position: n.position, dataByCoordSys: n.dataByCoordSys, tooltipOption: n.tooltipOption,
              }, r);
            } else if (n.seriesIndex != null) {
              if (this._manuallyAxisShowTip(t, e, i, n)) {return;} var l = c(n, e),
                u = l.point[0],
                h = l.point[1]; u != null && h != null && this._tryShow({
                offsetX: u, offsetY: h, position: n.position, target: l.el,
              }, r)
            } else {
              n.x != null && n.y != null && (i.dispatchAction({
                type: 'updateAxisPointer', x: n.x, y: n.y,
              }), this._tryShow({
                offsetX: n.x, offsetY: n.y, position: n.position, target: i.getZr().findHover(n.x, n.y).target,
              }, r))
            }
          }
        },
        manuallyHideTip: function(t, e, i, n) {var r = this._tooltipContent; !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get('hideDelay')), this._lastX = this._lastY = null, n.from !== this.uid && this._hide(M(n, i))},
        _manuallyAxisShowTip: function(t, e, i, n) {
          var r = n.seriesIndex,
            a = n.dataIndex,
            o = e.getComponent('axisPointer').coordSysAxesInfo; if (r != null && a != null && o != null) {
            var s = e.getSeriesByIndex(r); if (s) {
              var l = s.getData(); t = T([l.getItemModel(a), s, (s.coordinateSystem || {}).model, t]); if (t.get('trigger') === 'axis') {
                return i.dispatchAction({
                  type: 'updateAxisPointer', seriesIndex: r, dataIndex: a, position: n.position,
                }), !0
              }
            }
          }
        },
        _tryShow: function(t, e) {
          var i = t.target,
            n = this._tooltipModel; if (n) {this._lastX = t.offsetX, this._lastY = t.offsetY; var r = t.dataByCoordSys; r && r.length ? this._showAxisTooltip(r, t) : i && i.dataIndex != null ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, i, e)) : i && i.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, i, e)) : (this._lastDataByCoordSys = null, this._hide(e))}
        },
        _showOrMove: function(t, e) {var i = t.get('showDelay'); e = r.bind(e, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(e, i) : e()},
        _showAxisTooltip: function(t, e) {
          var i = this._ecModel,
            n = this._tooltipModel,
            a = [e.offsetX, e.offsetY],
            o = [],
            s = [],
            u = T([e.tooltipOption, n]),
            h = this._renderMode,
            c = this._newLine,
            d = {}; _(t, (function(t) {
            _(t.dataByAxis, (function(t) {
              var e = i.getComponent(t.axisDim + 'Axis', t.axisIndex),
                n = t.value,
                a = []; if (e && n != null) {
                var u = v.getValueLabel(n, e.axis, i, t.seriesDataIndices, t.valueLabelOpt); r.each(t.seriesDataIndices, (function(o) {
                  var l = i.getSeriesByIndex(o.seriesIndex),
                    c = o.dataIndexInside,
                    f = l && l.getDataParams(c); if (f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = g.getAxisRawValue(e.axis, n), f.axisValueLabel = u, f) {
                    s.push(f); var p,
                      v = l.formatTooltip(c, !0, null, h); if (r.isObject(v)) {p = v.html; var m = v.markers; r.merge(d, m)} else {p = v;}a.push(p)
                  }
                })); var f = u; h !== 'html' ? o.push(a.join(c)) : o.push((f ? l.encodeHTML(f) + c : '') + a.join(c))
              }
            }))
          }), this), o.reverse(), o = o.join(this._newLine + this._newLine); var f = e.position; this._showOrMove(u, (function() {this._updateContentNotChangedOnAxis(t) ? this._updatePosition(u, f, a[0], a[1], this._tooltipContent, s) : this._showTooltipContent(u, o, s, Math.random(), a[0], a[1], f, void 0, d)}))
        },
        _showSeriesItemTooltip: function(t, e, i) {
          var n = this._ecModel,
            a = e.seriesIndex,
            o = n.getSeriesByIndex(a),
            s = e.dataModel || o,
            l = e.dataIndex,
            u = e.dataType,
            h = s.getData(),
            c = T([h.getItemModel(l), s, o && (o.coordinateSystem || {}).model, this._tooltipModel]),
            d = c.get('trigger'); if (d == null || d === 'item') {
            var f, p,
              g = s.getDataParams(l, u),
              v = s.formatTooltip(l, !1, u, this._renderMode); r.isObject(v) ? (f = v.html, p = v.markers) : (f = v, p = null); var m = 'item_' + s.name + '_' + l; this._showOrMove(c, (function() {this._showTooltipContent(c, f, g, m, t.offsetX, t.offsetY, t.position, t.target, p)})), i({
              type: 'showTip', dataIndexInside: l, dataIndex: h.getRawIndex(l), seriesIndex: a, from: this.uid,
            })
          }
        },
        _showComponentItemTooltip: function(t, e, i) {
          var n = e.tooltip; if (typeof n === 'string') {
            var r = n; n = {
              content: r, formatter: r,
            }
          } var a = new f(n, this._tooltipModel, this._ecModel),
            o = a.get('content'),
            s = Math.random(); this._showOrMove(a, (function() {this._showTooltipContent(a, o, a.get('formatterParams') || {}, s, t.offsetX, t.offsetY, t.position, e)})), i({
            type: 'showTip', from: this.uid,
          })
        },
        _showTooltipContent: function(t, e, i, n, r, a, o, s, u) {
          if (this._ticket = '', t.get('showContent') && t.get('show')) {
            var h = this._tooltipContent,
              c = t.get('formatter'); o = o || t.get('position'); var d = e; if (c && typeof c === 'string') {d = l.formatTpl(c, i, !0);} else if (typeof c === 'function') {var f = x((function(e, n) {e === this._ticket && (h.setContent(n, u, t), this._updatePosition(t, o, r, a, h, i, s))}), this); this._ticket = n, d = c(i, n, f)}h.setContent(d, u, t), h.show(t), this._updatePosition(t, o, r, a, h, i, s)
          }
        },
        _updatePosition: function(t, e, i, n, a, o, s) {
          var l = this._api.getWidth(),
            u = this._api.getHeight(); e = e || t.get('position'); var h = a.getSize(),
            c = t.get('align'),
            f = t.get('verticalAlign'),
            p = s && s.getBoundingRect().clone(); if (s && p.applyTransform(s.transform), typeof e === 'function' && (e = e([i, n], o, a.el, p, {
            viewSize: [l, u], contentSize: h.slice(),
          })), r.isArray(e)) {i = b(e[0], l), n = b(e[1], u);} else if (r.isObject(e)) {
            e.width = h[0], e.height = h[1]; var g = d.getLayoutRect(e, {
              width: l, height: u,
            }); i = g.x, n = g.y, c = null, f = null
          } else if (typeof e === 'string' && s) {var v = A(e, p, h); i = v[0], n = v[1]} else {v = C(i, n, a, l, u, c ? null : 20, f ? null : 20); i = v[0], n = v[1]} if (c && (i -= k(c) ? h[0] / 2 : c === 'right' ? h[0] : 0), f && (n -= k(f) ? h[1] / 2 : f === 'bottom' ? h[1] : 0), t.get('confine')) {v = I(i, n, a, l, u); i = v[0], n = v[1]}a.moveTo(i, n)
        },
        _updateContentNotChangedOnAxis: function(t) {
          var e = this._lastDataByCoordSys,
            i = !!e && e.length === t.length; return i && _(e, (function(e, n) {
            var r = e.dataByAxis || {},
              a = t[n] || {},
              o = a.dataByAxis || []; i &= r.length === o.length, i && _(r, (function(t, e) {
              var n = o[e] || {},
                r = t.seriesDataIndices || [],
                a = n.seriesDataIndices || []; i &= t.value === n.value && t.axisType === n.axisType && t.axisId === n.axisId && r.length === a.length, i && _(r, (function(t, e) {var n = a[e]; i &= t.seriesIndex === n.seriesIndex && t.dataIndex === n.dataIndex}))
            }))
          })), this._lastDataByCoordSys = t, !!i
        },
        _hide: function(t) {
          this._lastDataByCoordSys = null, t({
            type: 'hideTip', from: this.uid,
          })
        },
        dispose: function(t, e) {a.node || (this._tooltipContent.dispose(), p.unregister('itemTooltip', e))},
      }); function T(t) {
      var e = t.pop(); while (t.length) {
        var i = t.pop(); i && (f.isInstance(i) && (i = i.get('tooltip', !0)), typeof i === 'string' && (i = {
          formatter: i,
        }), e = new f(i, e, e.ecModel))
      } return e
    } function M(t, e) {return t.dispatchAction || r.bind(e.dispatchAction, e)} function C(t, e, i, n, r, a, o) {
      var s = i.getOuterSize(),
        l = s.width,
        u = s.height; return a != null && (t + l + a > n ? t -= l + a : t += a), o != null && (e + u + o > r ? e -= u + o : e += o), [t, e]
    } function I(t, e, i, n, r) {
      var a = i.getOuterSize(),
        o = a.width,
        s = a.height; return t = Math.min(t + o, n) - o, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e]
    } function A(t, e, i) {
      var n = i[0],
        r = i[1],
        a = 5,
        o = 0,
        s = 0,
        l = e.width,
        u = e.height; switch (t) {case 'inside':o = e.x + l / 2 - n / 2, s = e.y + u / 2 - r / 2; break; case 'top':o = e.x + l / 2 - n / 2, s = e.y - r - a; break; case 'bottom':o = e.x + l / 2 - n / 2, s = e.y + u + a; break; case 'left':o = e.x - n - a, s = e.y + u / 2 - r / 2; break; case 'right':o = e.x + l + a, s = e.y + u / 2 - r / 2} return [o, s]
    } function k(t) {return t === 'center' || t === 'middle'}t.exports = S
  },
  4319: function(t, e, i) {
    var n = i('6d8b'),
      r = i('22d1'),
      a = i('e0d3'),
      o = a.makeInner,
      s = i('625e'),
      l = s.enableClassExtend,
      u = s.enableClassCheck,
      h = i('3901'),
      c = i('9bdb'),
      d = i('fe21'),
      f = i('551f'),
      p = n.mixin,
      g = o(); function v(t, e, i) {this.parentModel = e, this.ecModel = i, this.option = t} function m(t, e, i) {for (var n = 0; n < e.length; n++) {if (e[n] && (t = t && typeof t === 'object' ? t[e[n]] : null, t == null)) {break;}} return t == null && i && (t = i.get(e)), t} function y(t, e) {var i = g(t).getParent; return i ? i.call(t, e) : t.parentModel}v.prototype = {
      constructor: v,
      init: null,
      mergeOption: function(t) {n.merge(this.option, t, !0)},
      get: function(t, e) {return t == null ? this.option : m(this.option, this.parsePath(t), !e && y(this, t))},
      getShallow: function(t, e) {
        var i = this.option,
          n = i == null ? i : i[t],
          r = !e && y(this, t); return n == null && r && (n = r.getShallow(t)), n
      },
      getModel: function(t, e) {
        var i,
          n = t == null ? this.option : m(this.option, t = this.parsePath(t)); return e = e || (i = y(this, t)) && i.getModel(t), new v(n, e, this.ecModel)
      },
      isEmpty: function() {return this.option == null},
      restoreData: function() {},
      clone: function() {var t = this.constructor; return new t(n.clone(this.option))},
      setReadOnly: function(t) {},
      parsePath: function(t) {return typeof t === 'string' && (t = t.split('.')), t},
      customizeGetParent: function(t) {g(this).getParent = t},
      isAnimationEnabled: function() {if (!r.node) {if (this.option.animation != null) {return !!this.option.animation;} if (this.parentModel) {return this.parentModel.isAnimationEnabled()}}},
    }, l(v), u(v), p(v, h), p(v, c), p(v, d), p(v, f); var x = v; t.exports = x
  },
  4436: function(t, e, i) {
    var n = i('74cb'); function r(t) {this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = t.loop != null && t.loop, this.gap = t.gap || 0, this.easing = t.easing || 'Linear', this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1}r.prototype = {
      constructor: r,
      step: function(t, e) {
        if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) {this._pausedTime += e;} else {
          var i = (t - this._startTime - this._pausedTime) / this._life; if (!(i < 0)) {
            i = Math.min(i, 1); var r = this.easing,
              a = typeof r === 'string' ? n[r] : r,
              o = typeof a === 'function' ? a(i) : i; return this.fire('frame', o), i === 1 ? this.loop ? (this.restart(t), 'restart') : (this._needsRemove = !0, 'destroy') : null
          }
        }
      },
      restart: function(t) {var e = (t - this._startTime - this._pausedTime) % this._life; this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1},
      fire: function(t, e) {t = 'on' + t, this[t] && this[t](this._target, e)},
      pause: function() {this._paused = !0},
      resume: function() {this._paused = !1},
    }; var a = r; t.exports = a
  },
  4573: function(t, e, i) {
    var n = i('cbe5'),
      r = n.extend({
        type: 'ring',
        shape: {
          cx: 0, cy: 0, r: 0, r0: 0,
        },
        buildPath: function(t, e) {
          var i = e.cx,
            n = e.cy,
            r = 2 * Math.PI; t.moveTo(i + e.r, n), t.arc(i, n, e.r, 0, r, !1), t.moveTo(i + e.r0, n), t.arc(i, n, e.r0, 0, r, !0)
        },
      }); t.exports = r
  },
  '48a9': function(t, e, i) {
    var n = i('6d8b'),
      r = i('42e5'),
      a = function(t, e, i, n, a, o) {this.x = t == null ? 0 : t, this.y = e == null ? 0 : e, this.x2 = i == null ? 1 : i, this.y2 = n == null ? 0 : n, this.type = 'linear', this.global = o || !1, r.call(this, a)}; a.prototype = {
      constructor: a,
    }, n.inherits(a, r); var o = a; t.exports = o
  },
  '48ac': function(t, e, i) {
    var n = i('3eba'),
      r = n.extendComponentModel({
        type: 'axisPointer',
        coordSysAxesInfo: null,
        defaultOption: {
          show: 'auto',
          triggerOn: null,
          zlevel: 0,
          z: 50,
          type: 'line',
          snap: !1,
          triggerTooltip: !0,
          value: null,
          status: null,
          link: [],
          animation: null,
          animationDurationUpdate: 200,
          lineStyle: {
            color: '#aaa', width: 1, type: 'solid',
          },
          shadowStyle: {
            color: 'rgba(150,150,150,0.3)',
          },
          label: {
            show: !0, formatter: null, precision: 'auto', margin: 3, color: '#fff', padding: [5, 7, 5, 7], backgroundColor: 'auto', borderColor: null, borderWidth: 0, shadowBlur: 3, shadowColor: '#aaa',
          },
          handle: {
            show: !1, icon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', size: 45, margin: 50, color: '#333', shadowBlur: 3, shadowColor: '#aaa', shadowOffsetX: 0, shadowOffsetY: 2, throttle: 40,
          },
        },
      }),
      a = r; t.exports = a
  },
  '48c7': function(t, e, i) {
    var n = i('6d8b'),
      r = i('6cb7'),
      a = i('9e47'),
      o = i('2023'),
      s = r.extend({
        type: 'cartesian2dAxis',
        axis: null,
        init: function() {s.superApply(this, 'init', arguments), this.resetRange()},
        mergeOption: function() {s.superApply(this, 'mergeOption', arguments), this.resetRange()},
        restoreData: function() {s.superApply(this, 'restoreData', arguments), this.resetRange()},
        getCoordSysModel: function() {
          return this.ecModel.queryComponents({
            mainType: 'grid', index: this.option.gridIndex, id: this.option.gridId,
          })[0]
        },
      }); function l(t, e) {return e.type || (e.data ? 'category' : 'value')}n.merge(s.prototype, o); var u = {
      offset: 0,
    }; a('x', s, l, u), a('y', s, l, u); var h = s; t.exports = h
  },
  4942: function(t, e, i) {
    var n = i('2cf4c'),
      r = n.debugMode,
      a = function() {}; r === 1 && (a = console.error); var o = a; t.exports = o
  },
  '4a3f': function(t, e, i) {
    var n = i('401b'),
      r = n.create,
      a = n.distSquare,
      o = Math.pow,
      s = Math.sqrt,
      l = 1e-8,
      u = 1e-4,
      h = s(3),
      c = 1 / 3,
      d = r(),
      f = r(),
      p = r(); function g(t) {return t > -l && t < l} function v(t) {return t > l || t < -l} function m(t, e, i, n, r) {var a = 1 - r; return a * a * (a * t + 3 * r * e) + r * r * (r * n + 3 * a * i)} function y(t, e, i, n, r) {var a = 1 - r; return 3 * (((e - t) * a + 2 * (i - e) * r) * a + (n - i) * r * r)} function x(t, e, i, n, r, a) {
      var l = n + 3 * (e - i) - t,
        u = 3 * (i - 2 * e + t),
        d = 3 * (e - t),
        f = t - r,
        p = u * u - 3 * l * d,
        v = u * d - 9 * l * f,
        m = d * d - 3 * u * f,
        y = 0; if (g(p) && g(v)) {if (g(u)) {a[0] = 0;} else {var x = -d / u; x >= 0 && x <= 1 && (a[y++] = x)}} else {
        var _ = v * v - 4 * p * m; if (g(_)) {
          var b = v / p,
            w = (x = -u / l + b, -b / 2); x >= 0 && x <= 1 && (a[y++] = x), w >= 0 && w <= 1 && (a[y++] = w)
        } else if (_ > 0) {
          var S = s(_),
            T = p * u + 1.5 * l * (-v + S),
            M = p * u + 1.5 * l * (-v - S); T = T < 0 ? -o(-T, c) : o(T, c), M = M < 0 ? -o(-M, c) : o(M, c); x = (-u - (T + M)) / (3 * l); x >= 0 && x <= 1 && (a[y++] = x)
        } else {
          var C = (2 * p * u - 3 * l * v) / (2 * s(p * p * p)),
            I = Math.acos(C) / 3,
            A = s(p),
            k = Math.cos(I),
            D = (x = (-u - 2 * A * k) / (3 * l), w = (-u + A * (k + h * Math.sin(I))) / (3 * l), (-u + A * (k - h * Math.sin(I))) / (3 * l)); x >= 0 && x <= 1 && (a[y++] = x), w >= 0 && w <= 1 && (a[y++] = w), D >= 0 && D <= 1 && (a[y++] = D)
        }
      } return y
    } function _(t, e, i, n, r) {
      var a = 6 * i - 12 * e + 6 * t,
        o = 9 * e + 3 * n - 3 * t - 9 * i,
        l = 3 * e - 3 * t,
        u = 0; if (g(o)) {if (v(a)) {var h = -l / a; h >= 0 && h <= 1 && (r[u++] = h)}} else {
        var c = a * a - 4 * o * l; if (g(c)) {r[0] = -a / (2 * o);} else if (c > 0) {
          var d = s(c),
            f = (h = (-a + d) / (2 * o), (-a - d) / (2 * o)); h >= 0 && h <= 1 && (r[u++] = h), f >= 0 && f <= 1 && (r[u++] = f)
        }
      } return u
    } function b(t, e, i, n, r, a) {
      var o = (e - t) * r + t,
        s = (i - e) * r + e,
        l = (n - i) * r + i,
        u = (s - o) * r + o,
        h = (l - s) * r + s,
        c = (h - u) * r + u; a[0] = t, a[1] = o, a[2] = u, a[3] = c, a[4] = c, a[5] = h, a[6] = l, a[7] = n
    } function w(t, e, i, n, r, o, l, h, c, g, v) {
      var y, x, _, b, w,
        S = 0.005,
        T = 1 / 0; d[0] = c, d[1] = g; for (var M = 0; M < 1; M += 0.05) {f[0] = m(t, i, r, l, M), f[1] = m(e, n, o, h, M), b = a(d, f), b < T && (y = M, T = b);}T = 1 / 0; for (var C = 0; C < 32; C++) {if (S < u) {break;} x = y - S, _ = y + S, f[0] = m(t, i, r, l, x), f[1] = m(e, n, o, h, x), b = a(f, d), x >= 0 && b < T ? (y = x, T = b) : (p[0] = m(t, i, r, l, _), p[1] = m(e, n, o, h, _), w = a(p, d), _ <= 1 && w < T ? (y = _, T = w) : S *= 0.5)} return v && (v[0] = m(t, i, r, l, y), v[1] = m(e, n, o, h, y)), s(T)
    } function S(t, e, i, n) {var r = 1 - n; return r * (r * t + 2 * n * e) + n * n * i} function T(t, e, i, n) {return 2 * ((1 - n) * (e - t) + n * (i - e))} function M(t, e, i, n, r) {
      var a = t - 2 * e + i,
        o = 2 * (e - t),
        l = t - n,
        u = 0; if (g(a)) {if (v(o)) {var h = -l / o; h >= 0 && h <= 1 && (r[u++] = h)}} else {
        var c = o * o - 4 * a * l; if (g(c)) {h = -o / (2 * a); h >= 0 && h <= 1 && (r[u++] = h)} else if (c > 0) {
          var d = s(c),
            f = (h = (-o + d) / (2 * a), (-o - d) / (2 * a)); h >= 0 && h <= 1 && (r[u++] = h), f >= 0 && f <= 1 && (r[u++] = f)
        }
      } return u
    } function C(t, e, i) {var n = t + i - 2 * e; return n === 0 ? 0.5 : (t - e) / n} function I(t, e, i, n, r) {
      var a = (e - t) * n + t,
        o = (i - e) * n + e,
        s = (o - a) * n + a; r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = i
    } function A(t, e, i, n, r, o, l, h, c) {
      var g,
        v = 0.005,
        m = 1 / 0; d[0] = l, d[1] = h; for (var y = 0; y < 1; y += 0.05) {f[0] = S(t, i, r, y), f[1] = S(e, n, o, y); var x = a(d, f); x < m && (g = y, m = x)}m = 1 / 0; for (var _ = 0; _ < 32; _++) {
        if (v < u) {break;} var b = g - v,
          w = g + v; f[0] = S(t, i, r, b), f[1] = S(e, n, o, b); x = a(f, d); if (b >= 0 && x < m) {g = b, m = x;} else {p[0] = S(t, i, r, w), p[1] = S(e, n, o, w); var T = a(p, d); w <= 1 && T < m ? (g = w, m = T) : v *= 0.5}
      } return c && (c[0] = S(t, i, r, g), c[1] = S(e, n, o, g)), s(m)
    }e.cubicAt = m, e.cubicDerivativeAt = y, e.cubicRootAt = x, e.cubicExtrema = _, e.cubicSubdivide = b, e.cubicProjectPoint = w, e.quadraticAt = S, e.quadraticDerivativeAt = T, e.quadraticRootAt = M, e.quadraticExtremum = C, e.quadraticSubdivide = I, e.quadraticProjectPoint = A
  },
  '4a9d': function(t, e, i) {
    var n = i('dcb3'),
      r = i('ff2e'),
      a = i('0156'),
      o = i('6679'),
      s = n.extend({
        makeElOption: function(t, e, i, n, o) {
          var s = i.axis,
            h = s.grid,
            c = n.get('type'),
            d = l(h, s).getOtherAxis(s)
              .getGlobalExtent(),
            f = s.toGlobalCoord(s.dataToCoord(e, !0)); if (c && c !== 'none') {
            var p = r.buildElStyle(n),
              g = u[c](s, f, d); g.style = p, t.graphicKey = g.type, t.pointer = g
          } var v = a.layout(h.model, i); r.buildCartesianSingleLabelElOption(e, t, v, i, n, o)
        },
        getHandleTransform: function(t, e, i) {
          var n = a.layout(e.axis.grid.model, e, {
            labelInside: !1,
          }); return n.labelMargin = i.get('handle.margin'), {
            position: r.getTransformedPosition(e.axis, t, n), rotation: n.rotation + (n.labelDirection < 0 ? Math.PI : 0),
          }
        },
        updateHandleTransform: function(t, e, i, n) {
          var r = i.axis,
            a = r.grid,
            o = r.getGlobalExtent(!0),
            s = l(a, r).getOtherAxis(r)
              .getGlobalExtent(),
            u = r.dim === 'x' ? 0 : 1,
            h = t.position; h[u] += e[u], h[u] = Math.min(o[1], h[u]), h[u] = Math.max(o[0], h[u]); var c = (s[1] + s[0]) / 2,
            d = [c, c]; d[u] = h[u]; var f = [{
            verticalAlign: 'middle',
          }, {
            align: 'center',
          }]; return {
            position: h, rotation: t.rotation, cursorPoint: d, tooltipOption: f[u],
          }
        },
      }); function l(t, e) {var i = {}; return i[e.dim + 'AxisIndex'] = e.index, t.getCartesian(i)} var u = {
      line: function(t, e, i) {
        var n = r.makeLineShape([e, i[0]], [e, i[1]], h(t)); return {
          type: 'Line', subPixelOptimize: !0, shape: n,
        }
      },
      shadow: function(t, e, i) {
        var n = Math.max(1, t.getBandWidth()),
          a = i[1] - i[0]; return {
          type: 'Rect', shape: r.makeRectShape([e - n / 2, i[0]], [n, a], h(t)),
        }
      },
    }; function h(t) {return t.dim === 'x' ? 0 : 1}o.registerAxisPointerClass('CartesianAxisPointer', s); var c = s; t.exports = c
  },
  '4aa2': function(t, e, i) {
    var n = i('cbe5'),
      r = i('897a'),
      a = n.extend({
        type: 'sector',
        shape: {
          cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0,
        },
        brush: r(n.prototype.brush),
        buildPath: function(t, e) {
          var i = e.cx,
            n = e.cy,
            r = Math.max(e.r0 || 0, 0),
            a = Math.max(e.r, 0),
            o = e.startAngle,
            s = e.endAngle,
            l = e.clockwise,
            u = Math.cos(o),
            h = Math.sin(o); t.moveTo(u * r + i, h * r + n), t.lineTo(u * a + i, h * a + n), t.arc(i, n, a, o, s, !l), t.lineTo(Math.cos(s) * r + i, Math.sin(s) * r + n), r !== 0 && t.arc(i, n, r, s, o, l), t.closePath()
        },
      }); t.exports = a
  },
  '4e08': function(t, e, i) {(function(t) {var i; typeof window !== 'undefined' ? i = window.__DEV__ : typeof t !== 'undefined' && (i = t.__DEV__), typeof i === 'undefined' && (i = !0); var n = i; e.__DEV__ = n}).call(this, i('c8ba'))},
  '4f85': function(t, e, i) {
    var n = i('4e08'),
      r = (n.__DEV__, i('6d8b')),
      a = i('22d1'),
      o = i('eda2'),
      s = o.formatTime,
      l = o.encodeHTML,
      u = o.addCommas,
      h = o.getTooltipMarker,
      c = i('e0d3'),
      d = i('6cb7'),
      f = i('e47b'),
      p = i('38a2'),
      g = i('f934'),
      v = g.getLayoutParams,
      m = g.mergeLayoutParam,
      y = i('f47d'),
      x = y.createTask,
      _ = i('0f99'),
      b = _.prepareSource,
      w = _.getSource,
      S = i('2b17'),
      T = S.retrieveRawValue,
      M = c.makeInner(),
      C = d.extend({
        type: 'series.__base__',
        seriesIndex: 0,
        coordinateSystem: null,
        defaultOption: null,
        legendVisualProvider: null,
        visualColorAccessPath: 'itemStyle.color',
        visualBorderColorAccessPath: 'itemStyle.borderColor',
        layoutMode: null,
        init: function(t, e, i, n) {
          this.seriesIndex = this.componentIndex, this.dataTask = x({
            count: k, reset: D,
          }), this.dataTask.context = {
            model: this,
          }, this.mergeDefaultAndTheme(t, i), b(this); var r = this.getInitialData(t, i); P(r, this), this.dataTask.context.data = r, M(this).dataBeforeProcessed = r, I(this)
        },
        mergeDefaultAndTheme: function(t, e) {
          var i = this.layoutMode,
            n = i ? v(t) : {},
            a = this.subType; d.hasClass(a) && (a += 'Series'), r.merge(t, e.getTheme().get(this.subType)), r.merge(t, this.getDefaultOption()), c.defaultEmphasis(t, 'label', ['show']), this.fillDataTextStyle(t.data), i && m(t, n, i)
        },
        mergeOption: function(t, e) {t = r.merge(this.option, t, !0), this.fillDataTextStyle(t.data); var i = this.layoutMode; i && m(this.option, t, i), b(this); var n = this.getInitialData(t, e); P(n, this), this.dataTask.dirty(), this.dataTask.context.data = n, M(this).dataBeforeProcessed = n, I(this)},
        fillDataTextStyle: function(t) {if (t && !r.isTypedArray(t)) {for (var e = ['show'], i = 0; i < t.length; i++) {t[i] && t[i].label && c.defaultEmphasis(t[i], 'label', e)}}},
        getInitialData: function() {},
        appendData: function(t) {var e = this.getRawData(); e.appendData(t.data)},
        getData: function(t) {var e = E(this); if (e) {var i = e.context.data; return t == null ? i : i.getLinkedData(t)} return M(this).data},
        setData: function(t) {var e = E(this); if (e) {var i = e.context; i.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), i.outputData = t, e !== this.dataTask && (i.data = t)}M(this).data = t},
        getSource: function() {return w(this)},
        getRawData: function() {return M(this).dataBeforeProcessed},
        getBaseAxis: function() {var t = this.coordinateSystem; return t && t.getBaseAxis && t.getBaseAxis()},
        formatTooltip: function(t, e, i, n) {
          var a = this; n = n || 'html'; var o = n === 'html' ? '<br/>' : '\n',
            d = n === 'richText',
            f = {},
            p = 0; function g(i) {
            var o = r.reduce(i, (function(t, e, i) {var n = m.getDimensionInfo(i); return t | (n && !1 !== n.tooltip && n.displayName != null)}), 0),
              c = []; function g(t, i) {
              var r = m.getDimensionInfo(i); if (r && !1 !== r.otherDims.tooltip) {
                var g = r.type,
                  v = 'sub' + a.seriesIndex + 'at' + p,
                  y = h({
                    color: w, type: 'subItem', renderMode: n, markerId: v,
                  }),
                  x = typeof y === 'string' ? y : y.content,
                  _ = (o ? x + l(r.displayName || '-') + ': ' : '') + l(g === 'ordinal' ? t + '' : g === 'time' ? e ? '' : s('yyyy/MM/dd hh:mm:ss', t) : u(t)); _ && c.push(_), d && (f[v] = w, ++p)
              }
            }y.length ? r.each(y, (function(e) {g(T(m, t, e), e)})) : r.each(i, g); var v = o ? d ? '\n' : '<br/>' : '',
              x = v + c.join(v || ', '); return {
              renderMode: n, content: x, style: f,
            }
          } function v(t) {
            return {
              renderMode: n, content: l(u(t)), style: f,
            }
          } var m = this.getData(),
            y = m.mapDimension('defaultedTooltip', !0),
            x = y.length,
            _ = this.getRawValue(t),
            b = r.isArray(_),
            w = m.getItemVisual(t, 'color'); r.isObject(w) && w.colorStops && (w = (w.colorStops[0] || {}).color), w = w || 'transparent'; var S = x > 1 || b && !x ? g(_) : v(x ? T(m, t, y[0]) : b ? _[0] : _),
            M = S.content,
            C = a.seriesIndex + 'at' + p,
            I = h({
              color: w, type: 'item', renderMode: n, markerId: C,
            }); f[C] = w, ++p; var A = m.getName(t),
            k = this.name; c.isNameSpecified(this) || (k = ''), k = k ? l(k) + (e ? ': ' : o) : ''; var D = typeof I === 'string' ? I : I.content,
            O = e ? D + k + M : k + D + (A ? l(A) + ': ' + M : M); return {
            html: O, markers: f,
          }
        },
        isAnimationEnabled: function() {if (a.node) {return !1;} var t = this.getShallow('animation'); return t && this.getData().count() > this.getShallow('animationThreshold') && (t = !1), t},
        restoreData: function() {this.dataTask.dirty()},
        getColorFromPalette: function(t, e, i) {
          var n = this.ecModel,
            r = f.getColorFromPalette.call(this, t, e, i); return r || (r = n.getColorFromPalette(t, e, i)), r
        },
        coordDimToDataDim: function(t) {return this.getRawData().mapDimension(t, !0)},
        getProgressive: function() {return this.get('progressive')},
        getProgressiveThreshold: function() {return this.get('progressiveThreshold')},
        getAxisTooltipData: null,
        getTooltipPosition: null,
        pipeTask: null,
        preventIncremental: null,
        pipelineContext: null,
      }); function I(t) {var e = t.name; c.isNameSpecified(t) || (t.name = A(t) || e)} function A(t) {
      var e = t.getRawData(),
        i = e.mapDimension('seriesName', !0),
        n = []; return r.each(i, (function(t) {var i = e.getDimensionInfo(t); i.displayName && n.push(i.displayName)})), n.join(' ')
    } function k(t) {return t.model.getRawData().count()} function D(t) {var e = t.model; return e.setData(e.getRawData().cloneShallow()), O} function O(t, e) {t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)} function P(t, e) {r.each(t.CHANGABLE_METHODS, (function(i) {t.wrapMethod(i, r.curry(L, e))}))} function L(t) {var e = E(t); e && e.setOutputEnd(this.count())} function E(t) {
      var e = (t.ecModel || {}).scheduler,
        i = e && e.getPipeline(t.uid); if (i) {var n = i.currentTask; if (n) {var r = n.agentStubMap; r && (n = r.get(t.uid))} return n}
    }r.mixin(C, p), r.mixin(C, f); var R = C; t.exports = R
  },
  '4fac': function(t, e, i) {
    var n = i('620b'),
      r = i('9c2c'); function a(t, e, i) {
      var a = e.points,
        o = e.smooth; if (a && a.length >= 2) {
        if (o && o !== 'spline') {
          var s = r(a, o, i, e.smoothConstraint); t.moveTo(a[0][0], a[0][1]); for (var l = a.length, u = 0; u < (i ? l : l - 1); u++) {
            var h = s[2 * u],
              c = s[2 * u + 1],
              d = a[(u + 1) % l]; t.bezierCurveTo(h[0], h[1], c[0], c[1], d[0], d[1])
          }
        } else {o === 'spline' && (a = n(a, i)), t.moveTo(a[0][0], a[0][1]); u = 1; for (var f = a.length; u < f; u++) {t.lineTo(a[u][0], a[u][1])}}i && t.closePath()
      }
    }e.buildPath = a
  },
  '551f': function(t, e, i) {
    var n = i('282b'),
      r = n([['fill', 'color'], ['stroke', 'borderColor'], ['lineWidth', 'borderWidth'], ['opacity'], ['shadowBlur'], ['shadowOffsetX'], ['shadowOffsetY'], ['shadowColor'], ['textPosition'], ['textAlign']]),
      a = {
        getItemStyle: function(t, e) {
          var i = r(this, t, e),
            n = this.getBorderLineDash(); return n && (i.lineDash = n), i
        },
        getBorderLineDash: function() {var t = this.get('borderType'); return t === 'solid' || t == null ? null : t === 'dashed' ? [5, 5] : [1, 1]},
      }; t.exports = a
  },
  '562e': function(t, e, i) {var n = i('6d8b'); function r(t) {t != null && n.extend(this, t), this.otherDims = {}} var a = r; t.exports = a},
  5693: function(t, e) {
    function i(t, e) {
      var i, n, r, a, o,
        s = e.x,
        l = e.y,
        u = e.width,
        h = e.height,
        c = e.r; u < 0 && (s += u, u = -u), h < 0 && (l += h, h = -h), typeof c === 'number' ? i = n = r = a = c : c instanceof Array ? c.length === 1 ? i = n = r = a = c[0] : c.length === 2 ? (i = r = c[0], n = a = c[1]) : c.length === 3 ? (i = c[0], n = a = c[1], r = c[2]) : (i = c[0], n = c[1], r = c[2], a = c[3]) : i = n = r = a = 0, i + n > u && (o = i + n, i *= u / o, n *= u / o), r + a > u && (o = r + a, r *= u / o, a *= u / o), n + r > h && (o = n + r, n *= h / o, r *= h / o), i + a > h && (o = i + a, i *= h / o, a *= h / o), t.moveTo(s + i, l), t.lineTo(s + u - n, l), n !== 0 && t.arc(s + u - n, l + n, n, -Math.PI / 2, 0), t.lineTo(s + u, l + h - r), r !== 0 && t.arc(s + u - r, l + h - r, r, 0, Math.PI / 2), t.lineTo(s + a, l + h), a !== 0 && t.arc(s + a, l + h - a, a, Math.PI / 2, Math.PI), t.lineTo(s, l + i), i !== 0 && t.arc(s + i, l + i, i, Math.PI, 1.5 * Math.PI)
    }e.buildPath = i
  },
  '58df': function(t, e, i) {
    var n = i('6d8b'),
      r = i('2306'); function a(t, e, i, a) {
      var o = i.axis; if (!o.scale.isBlank()) {
        var s = i.getModel('splitArea'),
          l = s.getModel('areaStyle'),
          u = l.get('color'),
          h = a.coordinateSystem.getRect(),
          c = o.getTicksCoords({
            tickModel: s, clamp: !0,
          }); if (c.length) {
          var d = u.length,
            f = t.__splitAreaColors,
            p = n.createHashMap(),
            g = 0; if (f) {for (var v = 0; v < c.length; v++) {var m = f.get(c[v].tickValue); if (m != null) {g = (m + (d - 1) * v) % d; break}}} var y = o.toGlobalCoord(c[0].coord),
            x = l.getAreaStyle(); u = n.isArray(u) ? u : [u]; for (v = 1; v < c.length; v++) {
            var _, b, w, S,
              T = o.toGlobalCoord(c[v].coord); o.isHorizontal() ? (_ = y, b = h.y, w = T - _, S = h.height, y = _ + w) : (_ = h.x, b = y, w = h.width, S = T - b, y = b + S); var M = c[v - 1].tickValue; M != null && p.set(M, g), e.add(new r.Rect({
              anid: M != null ? 'area_' + M : null,
              shape: {
                x: _, y: b, width: w, height: S,
              },
              style: n.defaults({
                fill: u[g],
              }, x),
              silent: !0,
            })), g = (g + 1) % d
          }t.__splitAreaColors = p
        }
      }
    } function o(t) {t.__splitAreaColors = null}e.rectCoordAxisBuildSplitArea = a, e.rectCoordAxisHandleRemove = o
  },
  '5aa9': function(t, e, i) {
    var n = i('4e08'),
      r = (n.__DEV__, i('6d8b')),
      a = r.isObject,
      o = r.each,
      s = r.map,
      l = r.indexOf,
      u = (r.retrieve, i('f934')),
      h = u.getLayoutRect,
      c = i('697e'),
      d = c.createScaleByModel,
      f = c.ifAxisCrossZero,
      p = c.niceScaleExtent,
      g = c.estimateLabelUnionRect,
      v = i('cbe9'),
      m = i('ec02'),
      y = i('2039'),
      x = i('ee1a'),
      _ = x.getStackedDimension; function b(t, e, i) {return t.getCoordSysModel() === e} function w(t, e, i) {this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, i), this.model = t}i('8ed2'); var S = w.prototype; function T(t, e, i, n) {
      i.getAxesOnZeroOf = function() {return r ? [r] : []}; var r,
        a = t[e],
        o = i.model,
        s = o.get('axisLine.onZero'),
        l = o.get('axisLine.onZeroAxisIndex'); if (s) {if (l != null) {M(a[l]) && (r = a[l]);} else {for (var u in a) {if (a.hasOwnProperty(u) && M(a[u]) && !n[h(a[u])]) {r = a[u]; break}}}r && (n[h(r)] = !0)} function h(t) {return t.dim + '_' + t.index}
    } function M(t) {return t && t.type !== 'category' && t.type !== 'time' && f(t)} function C(t, e) {
      var i = t.getExtent(),
        n = i[0] + i[1]; t.toGlobalCoord = t.dim === 'x' ? function(t) {return t + e} : function(t) {return n - t + e}, t.toLocalCoord = t.dim === 'x' ? function(t) {return t - e} : function(t) {return n - t + e}
    }S.type = 'grid', S.axisPointerEnabled = !0, S.getRect = function() {return this._rect}, S.update = function(t, e) {var i = this._axesMap; this._updateScale(t, this.model), o(i.x, (function(t) {p(t.scale, t.model)})), o(i.y, (function(t) {p(t.scale, t.model)})); var n = {}; o(i.x, (function(t) {T(i, 'y', t, n)})), o(i.y, (function(t) {T(i, 'x', t, n)})), this.resize(this.model, e)}, S.resize = function(t, e, i) {
      var n = h(t.getBoxLayoutParams(), {
        width: e.getWidth(), height: e.getHeight(),
      }); this._rect = n; var r = this._axesList; function a() {
        o(r, (function(t) {
          var e = t.isHorizontal(),
            i = e ? [0, n.width] : [0, n.height],
            r = t.inverse ? 1 : 0; t.setExtent(i[r], i[1 - r]), C(t, e ? n.x : n.y)
        }))
      }a(), !i && t.get('containLabel') && (o(r, (function(t) {
        if (!t.model.get('axisLabel.inside')) {
          var e = g(t); if (e) {
            var i = t.isHorizontal() ? 'height' : 'width',
              r = t.model.get('axisLabel.margin'); n[i] -= e[i] + r, t.position === 'top' ? n.y += e.height + r : t.position === 'left' && (n.x += e.width + r)
          }
        }
      })), a())
    }, S.getAxis = function(t, e) {var i = this._axesMap[t]; if (i != null) {if (e == null) {for (var n in i) {if (i.hasOwnProperty(n)) {return i[n];}}} return i[e]}}, S.getAxes = function() {return this._axesList.slice()}, S.getCartesian = function(t, e) {if (t != null && e != null) {var i = 'x' + t + 'y' + e; return this._coordsMap[i]}a(t) && (e = t.yAxisIndex, t = t.xAxisIndex); for (var n = 0, r = this._coordsList; n < r.length; n++) {if (r[n].getAxis('x').index === t || r[n].getAxis('y').index === e) {return r[n]}}}, S.getCartesians = function() {return this._coordsList.slice()}, S.convertToPixel = function(t, e, i) {var n = this._findConvertTarget(t, e); return n.cartesian ? n.cartesian.dataToPoint(i) : n.axis ? n.axis.toGlobalCoord(n.axis.dataToCoord(i)) : null}, S.convertFromPixel = function(t, e, i) {var n = this._findConvertTarget(t, e); return n.cartesian ? n.cartesian.pointToData(i) : n.axis ? n.axis.coordToData(n.axis.toLocalCoord(i)) : null}, S._findConvertTarget = function(t, e) {
      var i, n,
        r = e.seriesModel,
        a = e.xAxisModel || r && r.getReferringComponents('xAxis')[0],
        o = e.yAxisModel || r && r.getReferringComponents('yAxis')[0],
        s = e.gridModel,
        u = this._coordsList; if (r) {i = r.coordinateSystem, l(u, i) < 0 && (i = null);} else if (a && o) {i = this.getCartesian(a.componentIndex, o.componentIndex);} else if (a) {n = this.getAxis('x', a.componentIndex);} else if (o) {n = this.getAxis('y', o.componentIndex);} else if (s) {var h = s.coordinateSystem; h === this && (i = this._coordsList[0])} return {
        cartesian: i, axis: n,
      }
    }, S.containPoint = function(t) {var e = this._coordsList[0]; if (e) {return e.containPoint(t)}}, S._initCartesian = function(t, e, i) {
      var n = {
          left: !1, right: !1, top: !1, bottom: !1,
        },
        r = {
          x: {}, y: {},
        },
        a = {
          x: 0, y: 0,
        }; if (e.eachComponent('xAxis', s('x'), this), e.eachComponent('yAxis', s('y'), this), !a.x || !a.y) {return this._axesMap = {}, void (this._axesList = []);} function s(i) {
        return function(o, s) {
          if (b(o, t, e)) {
            var l = o.get('position'); i === 'x' ? l !== 'top' && l !== 'bottom' && (l = n.bottom ? 'top' : 'bottom') : l !== 'left' && l !== 'right' && (l = n.left ? 'right' : 'left'), n[l] = !0; var u = new m(i, d(o), [0, 0], o.get('type'), l),
              h = u.type === 'category'; u.onBand = h && o.get('boundaryGap'), u.inverse = o.get('inverse'), o.axis = u, u.model = o, u.grid = this, u.index = s, this._axesList.push(u), r[i][s] = u, a[i]++
          }
        }
      } this._axesMap = r, o(r.x, (function(e, i) {
        o(r.y, (function(n, r) {
          var a = 'x' + i + 'y' + r,
            o = new v(a); o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), o.addAxis(n)
        }), this)
      }), this)
    }, S._updateScale = function(t, e) {
      function i(t, e, i) {o(t.mapDimension(e.dim, !0), (function(i) {e.scale.unionExtentFromData(t, _(t, i))}))}o(this._axesList, (function(t) {t.scale.setExtent(1 / 0, -1 / 0)})), t.eachSeries((function(n) {
        if (k(n)) {
          var r = A(n, t),
            a = r[0],
            o = r[1]; if (!b(a, e, t) || !b(o, e, t)) {return;} var s = this.getCartesian(a.componentIndex, o.componentIndex),
            l = n.getData(),
            u = s.getAxis('x'),
            h = s.getAxis('y'); l.type === 'list' && (i(l, u, n), i(l, h, n))
        }
      }), this)
    }, S.getTooltipAxes = function(t) {
      var e = [],
        i = []; return o(this.getCartesians(), (function(n) {
        var r = t != null && t !== 'auto' ? n.getAxis(t) : n.getBaseAxis(),
          a = n.getOtherAxis(r); l(e, r) < 0 && e.push(r), l(i, a) < 0 && i.push(a)
      })), {
        baseAxes: e, otherAxes: i,
      }
    }; var I = ['xAxis', 'yAxis']; function A(t, e) {return s(I, (function(e) {var i = t.getReferringComponents(e)[0]; return i}))} function k(t) {return t.get('coordinateSystem') === 'cartesian2d'}w.create = function(t, e) {
      var i = []; return t.eachComponent('grid', (function(n, r) {var a = new w(n, t, e); a.name = 'grid_' + r, a.resize(n, e, !0), n.coordinateSystem = a, i.push(a)})), t.eachSeries((function(e) {
        if (k(e)) {
          var i = A(e, t),
            n = i[0],
            r = i[1],
            a = n.getCoordSysModel(),
            o = a.coordinateSystem; e.coordinateSystem = o.getCartesian(n.componentIndex, r.componentIndex)
        }
      })), i
    }, w.dimensions = w.prototype.dimensions = v.prototype.dimensions, y.register('cartesian2d', w); var D = w; t.exports = D
  },
  '5e68': function(t, e, i) {
    var n = i('6d8b'),
      r = i('2cf4c'),
      a = r.devicePixelRatio,
      o = i('2b61'),
      s = i('dc2f'); function l() {return !1} function u(t, e, i) {
      var r = n.createCanvas(),
        a = e.getWidth(),
        o = e.getHeight(),
        s = r.style; return s && (s.position = 'absolute', s.left = 0, s.top = 0, s.width = a + 'px', s.height = o + 'px', r.setAttribute('data-zr-dom-id', t)), r.width = a * i, r.height = o * i, r
    } var h = function(t, e, i) {var r; i = i || a, typeof t === 'string' ? r = u(t, e, i) : n.isObject(t) && (r = t, t = r.id), this.id = t, this.dom = r; var o = r.style; o && (r.onselectstart = l, o['-webkit-user-select'] = 'none', o['user-select'] = 'none', o['-webkit-touch-callout'] = 'none', o['-webkit-tap-highlight-color'] = 'rgba(0,0,0,0)', o['padding'] = 0, o['margin'] = 0, o['border-width'] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = 0.7, this.dpr = i}; h.prototype = {
      constructor: h,
      __dirty: !0,
      __used: !1,
      __drawIndex: 0,
      __startIndex: 0,
      __endIndex: 0,
      incremental: !1,
      getElementCount: function() {return this.__endIndex - this.__startIndex},
      initContext: function() {this.ctx = this.dom.getContext('2d'), this.ctx.dpr = this.dpr},
      createBackBuffer: function() {var t = this.dpr; this.domBack = u('back-' + this.id, this.painter, t), this.ctxBack = this.domBack.getContext('2d'), t !== 1 && this.ctxBack.scale(t, t)},
      resize: function(t, e) {
        var i = this.dpr,
          n = this.dom,
          r = n.style,
          a = this.domBack; r && (r.width = t + 'px', r.height = e + 'px'), n.width = t * i, n.height = e * i, a && (a.width = t * i, a.height = e * i, i !== 1 && this.ctxBack.scale(i, i))
      },
      clear: function(t, e) {
        var i,
          n = this.dom,
          r = this.ctx,
          a = n.width,
          l = n.height,
          u = (e = e || this.clearColor, this.motionBlur && !t),
          h = this.lastFrameAlpha,
          c = this.dpr; (u && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = 'copy', this.ctxBack.drawImage(n, 0, 0, a / c, l / c)), r.clearRect(0, 0, a, l), e && e !== 'transparent') && (e.colorStops ? (i = e.__canvasGradient || o.getGradient(r, e, {
          x: 0, y: 0, width: a, height: l,
        }), e.__canvasGradient = i) : e.image && (i = s.prototype.getCanvasPattern.call(e, r)), r.save(), r.fillStyle = i || e, r.fillRect(0, 0, a, l), r.restore()); if (u) {var d = this.domBack; r.save(), r.globalAlpha = h, r.drawImage(d, 0, 0, a, l), r.restore()}
      },
    }; var c = h; t.exports = c
  },
  '5e76': function(t, e, i) {
    var n = i('d51b'),
      r = new n(50); function a(t) {if (typeof t === 'string') {var e = r.get(t); return e && e.image} return t} function o(t, e, i, n, a) {
      if (t) {
        if (typeof t === 'string') {
          if (e && e.__zrImageSrc === t || !i) {return e;} var o = r.get(t),
            u = {
              hostEl: i, cb: n, cbPayload: a,
            }; return o ? (e = o.image, !l(e) && o.pending.push(u)) : (e = new Image(), e.onload = e.onerror = s, r.put(t, e.__cachedImgObj = {
            image: e, pending: [u],
          }), e.src = e.__zrImageSrc = t), e
        } return t
      } return e
    } function s() {
      var t = this.__cachedImgObj; this.onload = this.onerror = this.__cachedImgObj = null; for (var e = 0; e < t.pending.length; e++) {
        var i = t.pending[e],
          n = i.cb; n && n(this, i.cbPayload), i.hostEl.dirty()
      }t.pending.length = 0
    } function l(t) {return t && t.width && t.height}e.findExistImage = a, e.createOrUpdateImage = o, e.isImageReady = l
  },
  '607d': function(t, e, i) {
    var n = i('1fab'); e.Dispatcher = n; var r = i('22d1'),
      a = i('65ed'),
      o = a.isCanvasEl,
      s = a.transformCoordWithViewport,
      l = typeof window !== 'undefined' && !!window.addEventListener,
      u = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      h = []; function c(t, e, i, n) {return i = i || {}, n || !r.canvasSupported ? d(t, e, i) : r.browser.firefox && e.layerX != null && e.layerX !== e.offsetX ? (i.zrX = e.layerX, i.zrY = e.layerY) : e.offsetX != null ? (i.zrX = e.offsetX, i.zrY = e.offsetY) : d(t, e, i), i} function d(t, e, i) {
      if (r.domSupported && t.getBoundingClientRect) {
        var n = e.clientX,
          a = e.clientY; if (o(t)) {var l = t.getBoundingClientRect(); return i.zrX = n - l.left, void (i.zrY = a - l.top)} if (s(h, t, n, a)) {return i.zrX = h[0], void (i.zrY = h[1])}
      }i.zrX = i.zrY = 0
    } function f(t) {return t || window.event} function p(t, e, i) {
      if (e = f(e), e.zrX != null) {return e;} var n = e.type,
        r = n && n.indexOf('touch') >= 0; if (r) {var a = n !== 'touchend' ? e.targetTouches[0] : e.changedTouches[0]; a && c(t, a, e, i)} else {c(t, e, e, i), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;} var o = e.button; return e.which == null && void 0 !== o && u.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
    } function g(t, e, i, n) {l ? t.addEventListener(e, i, n) : t.attachEvent('on' + e, i)} function v(t, e, i, n) {l ? t.removeEventListener(e, i, n) : t.detachEvent('on' + e, i)} var m = l ? function(t) {t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0} : function(t) {t.returnValue = !1, t.cancelBubble = !0}; function y(t) {return t.which === 2 || t.which === 3} function x(t) {return t.which > 1}e.clientToLocal = c, e.getNativeEvent = f, e.normalizeEvent = p, e.addEventListener = g, e.removeEventListener = v, e.stop = m, e.isMiddleOrRightButtonOnMouseUpDown = y, e.notLeftMouse = x
  },
  6179: function(t, e, i) {
    var n = i('4e08'),
      r = (n.__DEV__, i('6d8b')),
      a = i('4319'),
      o = i('80f0'),
      s = i('ec6f'),
      l = i('2b17'),
      u = l.defaultDimValueGetters,
      h = l.DefaultDataProvider,
      c = i('2f45'),
      d = c.summarizeDimensions,
      f = i('562e'),
      p = r.isObject,
      g = 'undefined',
      v = -1,
      m = 'e\0\0',
      y = {
        float: typeof Float64Array === g ? Array : Float64Array, int: typeof Int32Array === g ? Array : Int32Array, ordinal: Array, number: Array, time: Array,
      },
      x = typeof Uint32Array === g ? Array : Uint32Array,
      _ = typeof Int32Array === g ? Array : Int32Array,
      b = typeof Uint16Array === g ? Array : Uint16Array; function w(t) {return t._rawCount > 65535 ? x : b} function S(t) {var e = t.constructor; return e === Array ? t.slice() : new e(t)} var T = ['hasItemOption', '_nameList', '_idList', '_invertedIndicesMap', '_rawData', '_chunkSize', '_chunkCount', '_dimValueGetter', '_count', '_rawCount', '_nameDimIdx', '_idDimIdx'],
      M = ['_extent', '_approximateExtent', '_rawExtent']; function C(t, e) {r.each(T.concat(e.__wrappedMethods || []), (function(i) {e.hasOwnProperty(i) && (t[i] = e[i])})), t.__wrappedMethods = e.__wrappedMethods, r.each(M, (function(i) {t[i] = r.clone(e[i])})), t._calculationInfo = r.extend(e._calculationInfo)} var I = function(t, e) {
        t = t || ['x', 'y']; for (var i = {}, n = [], a = {}, o = 0; o < t.length; o++) {
          var s = t[o]; r.isString(s) ? s = new f({
            name: s,
          }) : s instanceof f || (s = new f(s)); var l = s.name; s.type = s.type || 'float', s.coordDim || (s.coordDim = l, s.coordDimIndex = 0), s.otherDims = s.otherDims || {}, n.push(l), i[l] = s, s.index = o, s.createInvertedIndices && (a[l] = [])
        } this.dimensions = n, this._dimensionInfos = i, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = d(this), this._invertedIndicesMap = a, this._calculationInfo = {}, this.userOutput = this._dimensionsSummary.userOutput
      },
      A = I.prototype; function k(t, e, i, n, r) {
      var a = y[e.type],
        o = n - 1,
        s = e.name,
        l = t[s][o]; if (l && l.length < i) {for (var u = new a(Math.min(r - o * i, i)), h = 0; h < l.length; h++) {u[h] = l[h];}t[s][o] = u} for (var c = n * i; c < r; c += i) {t[s].push(new a(Math.min(r - c, i)))}
    } function D(t) {
      var e = t._invertedIndicesMap; r.each(e, (function(i, n) {
        var r = t._dimensionInfos[n],
          a = r.ordinalMeta; if (a) {i = e[n] = new _(a.categories.length); for (var o = 0; o < i.length; o++) {i[o] = v;} for (o = 0; o < t._count; o++) {i[t.get(n, o)] = o}}
      }))
    } function O(t, e, i) {
      var n; if (e != null) {
        var r = t._chunkSize,
          a = Math.floor(i / r),
          o = i % r,
          s = t.dimensions[e],
          l = t._storage[s][a]; if (l) {n = l[o]; var u = t._dimensionInfos[s].ordinalMeta; u && u.categories.length && (n = u.categories[n])}
      } return n
    } function P(t) {return t} function L(t) {return t < this._count && t >= 0 ? this._indices[t] : -1} function E(t, e) {var i = t._idList[e]; return i == null && (i = O(t, t._idDimIdx, e)), i == null && (i = m + e), i} function R(t) {return r.isArray(t) || (t = [t]), t} function B(t, e) {
      var i = t.dimensions,
        n = new I(r.map(i, t.getDimensionInfo, t), t.hostModel); C(n, t); for (var a = n._storage = {}, o = t._storage, s = 0; s < i.length; s++) {var l = i[s]; o[l] && (r.indexOf(e, l) >= 0 ? (a[l] = z(o[l]), n._rawExtent[l] = N(), n._extent[l] = null) : a[l] = o[l])} return n
    } function z(t) {for (var e = new Array(t.length), i = 0; i < t.length; i++) {e[i] = S(t[i]);} return e} function N() {return [1 / 0, -1 / 0]}A.type = 'list', A.hasItemOption = !0, A.getDimension = function(t) {return typeof t !== 'number' && (isNaN(t) || this._dimensionInfos.hasOwnProperty(t)) || (t = this.dimensions[t]), t}, A.getDimensionInfo = function(t) {return this._dimensionInfos[this.getDimension(t)]}, A.getDimensionsOnCoord = function() {return this._dimensionsSummary.dataDimsOnCoord.slice()}, A.mapDimension = function(t, e) {var i = this._dimensionsSummary; if (e == null) {return i.encodeFirstDimNotExtra[t];} var n = i.encode[t]; return !0 === e ? (n || []).slice() : n && n[e]}, A.initData = function(t, e, i) {var n = s.isInstance(t) || r.isArrayLike(t); n && (t = new h(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, i || (this.hasItemOption = !1), this.defaultDimValueGetter = u[this._rawData.getSource().sourceFormat], this._dimValueGetter = i = i || this.defaultDimValueGetter, this._dimValueGetterArrayRows = u.arrayRows, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1)}, A.getProvider = function() {return this._rawData}, A.appendData = function(t) {
      var e = this._rawData,
        i = this.count(); e.appendData(t); var n = e.count(); e.persistent || (n += i), this._initDataFromProvider(i, n)
    }, A.appendValues = function(t, e) {for (var i = this._chunkSize, n = this._storage, r = this.dimensions, a = r.length, o = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e ? e.length : 0), u = this._chunkCount, h = 0; h < a; h++) {var c = r[h]; o[c] || (o[c] = N()), n[c] || (n[c] = []), k(n, this._dimensionInfos[c], i, u, l), this._chunkCount = n[c].length} for (var d = new Array(a), f = s; f < l; f++) {for (var p = f - s, g = Math.floor(f / i), v = f % i, m = 0; m < a; m++) {c = r[m]; var y = this._dimValueGetterArrayRows(t[p] || d, c, p, m); n[c][g][v] = y; var x = o[c]; y < x[0] && (x[0] = y), y > x[1] && (x[1] = y)}e && (this._nameList[f] = e[p])} this._rawCount = this._count = l, this._extent = {}, D(this)}, A._initDataFromProvider = function(t, e) {
      if (!(t >= e)) {
        for (var i, n = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, u = this._nameList, h = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = 0; p < s; p++) {var g = o[p]; c[g] || (c[g] = N()); var v = l[g]; v.otherDims.itemName === 0 && (i = this._nameDimIdx = p), v.otherDims.itemId === 0 && (this._idDimIdx = p), a[g] || (a[g] = []), k(a, v, n, f, e), this._chunkCount = a[g].length} for (var m = new Array(s), y = t; y < e; y++) {
          m = r.getItem(y, m); for (var x = Math.floor(y / n), _ = y % n, b = 0; b < s; b++) {
            g = o[b]; var w = a[g][x],
              S = this._dimValueGetter(m, g, y, b); w[_] = S; var T = c[g]; S < T[0] && (T[0] = S), S > T[1] && (T[1] = S)
          } if (!r.pure) {
            var M = u[y]; if (m && M == null) {
              if (m.name != null) {u[y] = M = m.name;} else if (i != null) {
                var C = o[i],
                  I = a[C][x]; if (I) {M = I[_]; var A = l[C].ordinalMeta; A && A.categories.length && (M = A.categories[M])}
              }
            } var O = m == null ? null : m.id; O == null && M != null && (d[M] = d[M] || 0, O = M, d[M] > 0 && (O += '__ec__' + d[M]), d[M]++), O != null && (h[y] = O)
          }
        }!r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, D(this)
      }
    }, A.count = function() {return this._count}, A.getIndices = function() {
      var t = this._indices; if (t) {
        var e = t.constructor,
          i = this._count; if (e === Array) {r = new e(i); for (var n = 0; n < i; n++) {r[n] = t[n]}} else {r = new e(t.buffer, 0, i)}
      } else {e = w(this); var r = new e(this.count()); for (n = 0; n < r.length; n++) {r[n] = n}} return r
    }, A.get = function(t, e) {
      if (!(e >= 0 && e < this._count)) {return NaN;} var i = this._storage; if (!i[t]) {return NaN;} e = this.getRawIndex(e); var n = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize,
        a = i[t][n],
        o = a[r]; return o
    }, A.getByRawIndex = function(t, e) {
      if (!(e >= 0 && e < this._rawCount)) {return NaN;} var i = this._storage[t]; if (!i) {return NaN;} var n = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize,
        a = i[n]; return a[r]
    }, A._getFast = function(t, e) {
      var i = Math.floor(e / this._chunkSize),
        n = e % this._chunkSize,
        r = this._storage[t][i]; return r[n]
    }, A.getValues = function(t, e) {var i = []; r.isArray(t) || (e = t, t = this.dimensions); for (var n = 0, a = t.length; n < a; n++) {i.push(this.get(t[n], e));} return i}, A.hasValue = function(t) {for (var e = this._dimensionsSummary.dataDimsOnCoord, i = 0, n = e.length; i < n; i++) {if (isNaN(this.get(e[i], t))) {return !1;}} return !0}, A.getDataExtent = function(t) {
      t = this.getDimension(t); var e = this._storage[t],
        i = N(); if (!e) {return i;} var n,
        r = this.count(),
        a = !this._indices; if (a) {return this._rawExtent[t].slice();} if (n = this._extent[t], n) {return n.slice();} n = i; for (var o = n[0], s = n[1], l = 0; l < r; l++) {var u = this._getFast(t, this.getRawIndex(l)); u < o && (o = u), u > s && (s = u)} return n = [o, s], this._extent[t] = n, n
    }, A.getApproximateExtent = function(t) {return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t)}, A.setApproximateExtent = function(t, e) {e = this.getDimension(e), this._approximateExtent[e] = t.slice()}, A.getCalculationInfo = function(t) {return this._calculationInfo[t]}, A.setCalculationInfo = function(t, e) {p(t) ? r.extend(this._calculationInfo, t) : this._calculationInfo[t] = e}, A.getSum = function(t) {
      var e = this._storage[t],
        i = 0; if (e) {for (var n = 0, r = this.count(); n < r; n++) {var a = this.get(t, n); isNaN(a) || (i += a)}} return i
    }, A.getMedian = function(t) {
      var e = []; this.each(t, (function(t, i) {isNaN(t) || e.push(t)})); var i = [].concat(e).sort((function(t, e) {return t - e})),
        n = this.count(); return n === 0 ? 0 : n % 2 === 1 ? i[(n - 1) / 2] : (i[n / 2] + i[n / 2 - 1]) / 2
    }, A.rawIndexOf = function(t, e) {
      var i = t && this._invertedIndicesMap[t],
        n = i[e]; return n == null || isNaN(n) ? v : n
    }, A.indexOfName = function(t) {for (var e = 0, i = this.count(); e < i; e++) {if (this.getName(e) === t) {return e;}} return -1}, A.indexOfRawIndex = function(t) {
      if (t >= this._rawCount || t < 0) {return -1;} if (!this._indices) {return t;} var e = this._indices,
        i = e[t]; if (i != null && i < this._count && i === t) {return t;} var n = 0,
        r = this._count - 1; while (n <= r) {var a = (n + r) / 2 | 0; if (e[a] < t) {n = a + 1;} else {if (!(e[a] > t)) {return a;} r = a - 1}} return -1
    }, A.indicesOfNearest = function(t, e, i) {
      var n = this._storage,
        r = n[t],
        a = []; if (!r) {return a;} i == null && (i = 1 / 0); for (var o = 1 / 0, s = -1, l = 0, u = 0, h = this.count(); u < h; u++) {
        var c = e - this.get(t, u),
          d = Math.abs(c); d <= i && ((d < o || d === o && c >= 0 && s < 0) && (o = d, s = c, l = 0), c === s && (a[l++] = u))
      } return a.length = l, a
    }, A.getRawIndex = P, A.getRawDataItem = function(t) {if (this._rawData.persistent) {return this._rawData.getItem(this.getRawIndex(t));} for (var e = [], i = 0; i < this.dimensions.length; i++) {var n = this.dimensions[i]; e.push(this.get(n, t))} return e}, A.getName = function(t) {var e = this.getRawIndex(t); return this._nameList[e] || O(this, this._nameDimIdx, e) || ''}, A.getId = function(t) {return E(this, this.getRawIndex(t))}, A.each = function(t, e, i, n) {'use strict'; if (this._count) {typeof t === 'function' && (n = i, i = e, e = t, t = []), i = i || n || this, t = r.map(R(t), this.getDimension, this); for (var a = t.length, o = 0; o < this.count(); o++) {switch (a) {case 0:e.call(i, o); break; case 1:e.call(i, this.get(t[0], o), o); break; case 2:e.call(i, this.get(t[0], o), this.get(t[1], o), o); break; default:for (var s = 0, l = []; s < a; s++) {l[s] = this.get(t[s], o);}l[s] = o, e.apply(i, l)}}}}, A.filterSelf = function(t, e, i, n) {
      'use strict'; if (this._count) {
        typeof t === 'function' && (n = i, i = e, e = t, t = []), i = i || n || this, t = r.map(R(t), this.getDimension, this); for (var a = this.count(), o = w(this), s = new o(a), l = [], u = t.length, h = 0, c = t[0], d = 0; d < a; d++) {
          var f,
            p = this.getRawIndex(d); if (u === 0) {f = e.call(i, d);} else if (u === 1) {var g = this._getFast(c, p); f = e.call(i, g, d)} else {for (var v = 0; v < u; v++) {l[v] = this._getFast(c, p);}l[v] = d, f = e.apply(i, l)}f && (s[h++] = p)
        } return h < a && (this._indices = s), this._count = h, this._extent = {}, this.getRawIndex = this._indices ? L : P, this
      }
    }, A.selectRange = function(t) {
      'use strict'; if (this._count) {
        var e = []; for (var i in t) {t.hasOwnProperty(i) && e.push(i);} var n = e.length; if (n) {
          var r = this.count(),
            a = w(this),
            o = new a(r),
            s = 0,
            l = e[0],
            u = t[l][0],
            h = t[l][1],
            c = !1; if (!this._indices) {
            var d = 0; if (n === 1) {for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++) {for (var g = f[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; m < v; m++) {var y = g[m]; (y >= u && y <= h || isNaN(y)) && (o[s++] = d), d++}}c = !0} else if (n === 2) {
              f = this._storage[l]; var x = this._storage[e[1]],
                _ = t[e[1]][0],
                b = t[e[1]][1]; for (p = 0; p < this._chunkCount; p++) {g = f[p]; var S = x[p]; for (v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; m < v; m++) {y = g[m]; var T = S[m]; (y >= u && y <= h || isNaN(y)) && (T >= _ && T <= b || isNaN(T)) && (o[s++] = d), d++}}c = !0
            }
          } if (!c) {if (n === 1) {for (m = 0; m < r; m++) {var M = this.getRawIndex(m); y = this._getFast(l, M); (y >= u && y <= h || isNaN(y)) && (o[s++] = M)}} else {for (m = 0; m < r; m++) {var C = !0; for (M = this.getRawIndex(m), p = 0; p < n; p++) {var I = e[p]; y = this._getFast(i, M); (y < t[I][0] || y > t[I][1]) && (C = !1)}C && (o[s++] = this.getRawIndex(m))}}} return s < r && (this._indices = o), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? L : P, this
        }
      }
    }, A.mapArray = function(t, e, i, n) {'use strict'; typeof t === 'function' && (n = i, i = e, e = t, t = []), i = i || n || this; var r = []; return this.each(t, (function() {r.push(e && e.apply(this, arguments))}), i), r}, A.map = function(t, e, i, n) {
      'use strict'; i = i || n || this, t = r.map(R(t), this.getDimension, this); var a = B(this, t); a._indices = this._indices, a.getRawIndex = a._indices ? L : P; for (var o = a._storage, s = [], l = this._chunkSize, u = t.length, h = this.count(), c = [], d = a._rawExtent, f = 0; f < h; f++) {
        for (var p = 0; p < u; p++) {c[p] = this.get(t[p], f);}c[u] = f; var g = e && e.apply(i, c); if (g != null) {
          typeof g !== 'object' && (s[0] = g, g = s); for (var v = this.getRawIndex(f), m = Math.floor(v / l), y = v % l, x = 0; x < g.length; x++) {
            var _ = t[x],
              b = g[x],
              w = d[_],
              S = o[_]; S && (S[m][y] = b), b < w[0] && (w[0] = b), b > w[1] && (w[1] = b)
          }
        }
      } return a
    }, A.downSample = function(t, e, i, n) {
      for (var r = B(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], u = this.count(), h = this._chunkSize, c = r._rawExtent[t], d = new (w(this))(u), f = 0, p = 0; p < u; p += s) {
        s > u - p && (s = u - p, o.length = s); for (var g = 0; g < s; g++) {
          var v = this.getRawIndex(p + g),
            m = Math.floor(v / h),
            y = v % h; o[g] = l[m][y]
        } var x = i(o),
          _ = this.getRawIndex(Math.min(p + n(o, x) || 0, u - 1)),
          b = Math.floor(_ / h),
          S = _ % h; l[b][S] = x, x < c[0] && (c[0] = x), x > c[1] && (c[1] = x), d[f++] = _
      } return r._count = f, r._indices = d, r.getRawIndex = L, r
    }, A.getItemModel = function(t) {var e = this.hostModel; return new a(this.getRawDataItem(t), e, e && e.ecModel)}, A.diff = function(t) {var e = this; return new o(t ? t.getIndices() : [], this.getIndices(), (function(e) {return E(t, e)}), (function(t) {return E(e, t)}))}, A.getVisual = function(t) {var e = this._visual; return e && e[t]}, A.setVisual = function(t, e) {if (p(t)) {for (var i in t) {t.hasOwnProperty(i) && this.setVisual(i, t[i]);}} else {this._visual = this._visual || {}, this._visual[t] = e}}, A.setLayout = function(t, e) {if (p(t)) {for (var i in t) {t.hasOwnProperty(i) && this.setLayout(i, t[i]);}} else {this._layout[t] = e}}, A.getLayout = function(t) {return this._layout[t]}, A.getItemLayout = function(t) {return this._itemLayouts[t]}, A.setItemLayout = function(t, e, i) {this._itemLayouts[t] = i ? r.extend(this._itemLayouts[t] || {}, e) : e}, A.clearItemLayouts = function() {this._itemLayouts.length = 0}, A.getItemVisual = function(t, e, i) {
      var n = this._itemVisuals[t],
        r = n && n[e]; return r != null || i ? r : this.getVisual(e)
    }, A.setItemVisual = function(t, e, i) {
      var n = this._itemVisuals[t] || {},
        r = this.hasItemVisual; if (this._itemVisuals[t] = n, p(e)) {for (var a in e) {e.hasOwnProperty(a) && (n[a] = e[a], r[a] = !0);}} else {n[e] = i, r[e] = !0}
    }, A.clearAllVisual = function() {this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {}}; var F = function(t) {t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType}; A.setItemGraphicEl = function(t, e) {var i = this.hostModel; e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = i && i.seriesIndex, e.type === 'group' && e.traverse(F, e)), this._graphicEls[t] = e}, A.getItemGraphicEl = function(t) {return this._graphicEls[t]}, A.eachItemGraphicEl = function(t, e) {r.each(this._graphicEls, (function(i, n) {i && t && t.call(e, i, n)}))}, A.cloneShallow = function(t) {if (!t) {var e = r.map(this.dimensions, this.getDimensionInfo, this); t = new I(e, this.hostModel)} if (t._storage = this._storage, C(t, this), this._indices) {var i = this._indices.constructor; t._indices = new i(this._indices)} else {t._indices = null;} return t.getRawIndex = t._indices ? L : P, t}, A.wrapMethod = function(t, e) {var i = this[t]; typeof i === 'function' && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {var t = i.apply(this, arguments); return e.apply(this, [t].concat(r.slice(arguments)))})}, A.TRANSFERABLE_METHODS = ['cloneShallow', 'downSample', 'map'], A.CHANGABLE_METHODS = ['filterSelf', 'selectRange']; var V = I; t.exports = V
  },
  '620b': function(t, e, i) {
    var n = i('401b'),
      r = n.distance; function a(t, e, i, n, r, a, o) {
      var s = 0.5 * (i - t),
        l = 0.5 * (n - e); return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e
    } function o(t, e) {
      for (var i = t.length, n = [], o = 0, s = 1; s < i; s++) {o += r(t[s - 1], t[s]);} var l = o / 2; l = l < i ? i : l; for (s = 0; s < l; s++) {
        var u, h, c,
          d = s / (l - 1) * (e ? i : i - 1),
          f = Math.floor(d),
          p = d - f,
          g = t[f % i]; e ? (u = t[(f - 1 + i) % i], h = t[(f + 1) % i], c = t[(f + 2) % i]) : (u = t[f === 0 ? f : f - 1], h = t[f > i - 2 ? i - 1 : f + 1], c = t[f > i - 3 ? i - 1 : f + 2]); var v = p * p,
          m = p * v; n.push([a(u[0], g[0], h[0], c[0], p, v, m), a(u[1], g[1], h[1], c[1], p, v, m)])
      } return n
    }t.exports = o
  },
  '625e': function(t, e, i) {
    var n = i('4e08'),
      r = (n.__DEV__, i('6d8b')),
      a = '.',
      o = '___EC__COMPONENT__CONTAINER___'; function s(t) {
      var e = {
        main: '', sub: '',
      }; return t && (t = t.split(a), e.main = t[0] || '', e.sub = t[1] || ''), e
    } function l(t) {r.assert((/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/).test(t), 'componentType "' + t + '" illegal')} function u(t, e) {
      t.$constructor = t, t.extend = function(t) {
        var e = this,
          i = function() {t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)}; return r.extend(i.prototype, t), i.extend = this.extend, i.superCall = d, i.superApply = f, r.inherits(i, this), i.superClass = e, i
      }
    } var h = 0; function c(t) {var e = ['__\0is_clz', h++, Math.random().toFixed(3)].join('_'); t.prototype[e] = !0, t.isInstance = function(t) {return !(!t || !t[e])}} function d(t, e) {var i = r.slice(arguments, 2); return this.superClass.prototype[e].apply(t, i)} function f(t, e, i) {return this.superClass.prototype[e].apply(t, i)} function p(t, e) {
      e = e || {}; var i = {}; function n(t) {var e = i[t.main]; return e && e[o] || (e = i[t.main] = {}, e[o] = !0), e} if (t.registerClass = function(t, e) {if (e) {if (l(e), e = s(e), e.sub) {if (e.sub !== o) {var r = n(e); r[e.sub] = t}} else {i[e.main] = t;}} return t}, t.getClass = function(t, e, n) {var r = i[t]; if (r && r[o] && (r = e ? r[e] : null), n && !r) {throw new Error(e ? 'Component ' + t + '.' + (e || '') + ' not exists. Load it first.' : t + '.type should be specified.');} return r}, t.getClassesByMainType = function(t) {
        t = s(t); var e = [],
          n = i[t.main]; return n && n[o] ? r.each(n, (function(t, i) {i !== o && e.push(t)})) : e.push(n), e
      }, t.hasClass = function(t) {return t = s(t), !!i[t.main]}, t.getAllClassMainTypes = function() {var t = []; return r.each(i, (function(e, i) {t.push(i)})), t}, t.hasSubTypes = function(t) {t = s(t); var e = i[t.main]; return e && e[o]}, t.parseClassType = s, e.registerWhenExtend) {var a = t.extend; a && (t.extend = function(e) {var i = a.call(this, e); return t.registerClass(i, e.type)})} return t
    } function g(t, e) {}e.parseClassType = s, e.enableClassExtend = u, e.enableClassCheck = c, e.enableClassManagement = p, e.setReadOnly = g
  },
  '65ed': function(t, e, i) {
    var n = i('22d1'),
      r = i('84ec'),
      a = r.buildTransformer,
      o = '___zrEVENTSAVED',
      s = []; function l(t, e, i, n, r) {return u(s, e, n, r, !0) && u(t, i, s[0], s[1])} function u(t, e, i, r, a) {
      if (e.getBoundingClientRect && n.domSupported && !d(e)) {
        var s = e[o] || (e[o] = {}),
          l = h(e, s),
          u = c(l, s, a); if (u) {return u(t, i, r), !0}
      } return !1
    } function h(t, e) {
      var i = e.markers; if (i) {return i;} i = e.markers = []; for (var n = ['left', 'right'], r = ['top', 'bottom'], a = 0; a < 4; a++) {
        var o = document.createElement('div'),
          s = o.style,
          l = a % 2,
          u = (a >> 1) % 2; s.cssText = ['position: absolute', 'visibility: hidden', 'padding: 0', 'margin: 0', 'border-width: 0', 'user-select: none', 'width:0', 'height:0', n[l] + ':0', r[u] + ':0', n[1 - l] + ':auto', r[1 - u] + ':auto', ''].join('!important;'), t.appendChild(o), i.push(o)
      } return i
    } function c(t, e, i) {
      for (var n = i ? 'invTrans' : 'trans', r = e[n], o = e.srcCoords, s = !0, l = [], u = [], h = 0; h < 4; h++) {
        var c = t[h].getBoundingClientRect(),
          d = 2 * h,
          f = c.left,
          p = c.top; l.push(f, p), s = s && o && f === o[d] && p === o[d + 1], u.push(t[h].offsetLeft, t[h].offsetTop)
      } return s && r ? r : (e.srcCoords = l, e[n] = i ? a(u, l) : a(l, u))
    } function d(t) {return t.nodeName.toUpperCase() === 'CANVAS'}e.transformLocalCoord = l, e.transformCoordWithViewport = u, e.isCanvasEl = d
  },
  6679: function(t, e, i) {
    var n = i('4e08'),
      r = (n.__DEV__, i('3eba')),
      a = i('cd33'),
      o = r.extendComponentView({
        type: 'axis', _axisPointer: null, axisPointerClass: null, render: function(t, e, i, n) {this.axisPointerClass && a.fixValue(t), o.superApply(this, 'render', arguments), s(this, t, e, i, n, !0)}, updateAxisPointer: function(t, e, i, n, r) {s(this, t, e, i, n, !1)}, remove: function(t, e) {var i = this._axisPointer; i && i.remove(e), o.superApply(this, 'remove', arguments)}, dispose: function(t, e) {l(this, e), o.superApply(this, 'dispose', arguments)},
      }); function s(t, e, i, n, r, s) {var u = o.getAxisPointerClass(t.axisPointerClass); if (u) {var h = a.getAxisPointerModel(e); h ? (t._axisPointer || (t._axisPointer = new u())).render(e, h, n, s) : l(t, n)}} function l(t, e, i) {var n = t._axisPointer; n && n.dispose(e, i), t._axisPointer = null} var u = []; o.registerAxisPointerClass = function(t, e) {u[t] = e}, o.getAxisPointerClass = function(t) {return t && u[t]}; var h = o; t.exports = h
  },
  '68ab': function(t, e, i) {
    var n = i('4a3f'),
      r = n.quadraticProjectPoint; function a(t, e, i, n, a, o, s, l, u) {if (s === 0) {return !1;} var h = s; if (u > e + h && u > n + h && u > o + h || u < e - h && u < n - h && u < o - h || l > t + h && l > i + h && l > a + h || l < t - h && l < i - h && l < a - h) {return !1;} var c = r(t, e, i, n, a, o, l, u, null); return c <= h / 2}e.containStroke = a
  },
  '697e': function(t, e, i) {
    var n = i('4e08'),
      r = (n.__DEV__, i('6d8b')),
      a = i('18c0'),
      o = i('89e3'),
      s = i('e0d8'),
      l = i('3842'),
      u = i('9d57'),
      h = u.prepareLayoutBarSeries,
      c = u.makeColumnLayout,
      d = u.retrieveColumnLayout,
      f = i('9850'); function p(t, e) {
      var i, n, a,
        o = t.type,
        s = e.getMin(),
        u = e.getMax(),
        d = s != null,
        f = u != null,
        p = t.getExtent(); o === 'ordinal' ? i = e.getCategories().length : (n = e.get('boundaryGap'), r.isArray(n) || (n = [n || 0, n || 0]), typeof n[0] === 'boolean' && (n = [0, 0]), n[0] = l.parsePercent(n[0], 1), n[1] = l.parsePercent(n[1], 1), a = p[1] - p[0] || Math.abs(p[0])), s == null && (s = o === 'ordinal' ? i ? 0 : NaN : p[0] - n[0] * a), u == null && (u = o === 'ordinal' ? i ? i - 1 : NaN : p[1] + n[1] * a), s === 'dataMin' ? s = p[0] : typeof s === 'function' && (s = s({
        min: p[0], max: p[1],
      })), u === 'dataMax' ? u = p[1] : typeof u === 'function' && (u = u({
        min: p[0], max: p[1],
      })), (s == null || !isFinite(s)) && (s = NaN), (u == null || !isFinite(u)) && (u = NaN), t.setBlank(r.eqNaN(s) || r.eqNaN(u) || o === 'ordinal' && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (s > 0 && u > 0 && !d && (s = 0), s < 0 && u < 0 && !f && (u = 0)); var v = e.ecModel; if (v && o === 'time') {
        var m,
          y = h('bar', v); if (r.each(y, (function(t) {m |= t.getBaseAxis() === e.axis})), m) {
          var x = c(y),
            _ = g(s, u, e, x); s = _.min, u = _.max
        }
      } return [s, u]
    } function g(t, e, i, n) {
      var a = i.axis.getExtent(),
        o = a[1] - a[0],
        s = d(n, i.axis); if (void 0 === s) {
        return {
          min: t, max: e,
        };
      } var l = 1 / 0; r.each(s, (function(t) {l = Math.min(t.offset, l)})); var u = -1 / 0; r.each(s, (function(t) {u = Math.max(t.offset + t.width, u)})), l = Math.abs(l), u = Math.abs(u); var h = l + u,
        c = e - t,
        f = 1 - (l + u) / o,
        p = c / f - c; return e += p * (u / h), t -= p * (l / h), {
        min: t, max: e,
      }
    } function v(t, e) {
      var i = p(t, e),
        n = e.getMin() != null,
        r = e.getMax() != null,
        a = e.get('splitNumber'); t.type === 'log' && (t.base = e.get('logBase')); var o = t.type; t.setExtent(i[0], i[1]), t.niceExtent({
        splitNumber: a, fixMin: n, fixMax: r, minInterval: o === 'interval' || o === 'time' ? e.get('minInterval') : null, maxInterval: o === 'interval' || o === 'time' ? e.get('maxInterval') : null,
      }); var s = e.get('interval'); s != null && t.setInterval && t.setInterval(s)
    } function m(t, e) {if (e = e || t.get('type'), e) {switch (e) {case 'category':return new a(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]); case 'value':return new o(); default:return (s.getClass(e) || o).create(t)}}} function y(t) {
      var e = t.scale.getExtent(),
        i = e[0],
        n = e[1]; return !(i > 0 && n > 0 || i < 0 && n < 0)
    } function x(t) {
      var e = t.getLabelModel().get('formatter'),
        i = t.type === 'category' ? t.scale.getExtent()[0] : null; return typeof e === 'string' ? (e = (function(e) {return function(i) {return i = t.scale.getLabel(i), e.replace('{value}', i != null ? i : '')}}(e)), e) : typeof e === 'function' ? function(n, r) {return i != null && (r = n - i), e(_(t, n), r)} : function(e) {return t.scale.getLabel(e)}
    } function _(t, e) {return t.type === 'category' ? t.scale.getLabel(e) : e} function b(t) {
      var e = t.model,
        i = t.scale; if (e.get('axisLabel.show') && !i.isBlank()) {
        var n, r,
          a = t.type === 'category',
          o = i.getExtent(); a ? r = i.count() : (n = i.getTicks(), r = n.length); var s,
          l = t.getLabelModel(),
          u = x(t),
          h = 1; r > 40 && (h = Math.ceil(r / 40)); for (var c = 0; c < r; c += h) {
          var d = n ? n[c] : o[0] + c,
            f = u(d),
            p = l.getTextRect(f),
            g = w(p, l.get('rotate') || 0); s ? s.union(g) : s = g
        } return s
      }
    } function w(t, e) {
      var i = e * Math.PI / 180,
        n = t.plain(),
        r = n.width,
        a = n.height,
        o = r * Math.cos(i) + a * Math.sin(i),
        s = r * Math.sin(i) + a * Math.cos(i),
        l = new f(n.x, n.y, o, s); return l
    } function S(t) {var e = t.get('interval'); return e == null ? 'auto' : e} function T(t) {return t.type === 'category' && S(t.getLabelModel()) === 0}i('216a'), i('8c2a'), e.getScaleExtent = p, e.niceScaleExtent = v, e.createScaleByModel = m, e.ifAxisCrossZero = y, e.makeLabelFormatter = x, e.getAxisRawValue = _, e.estimateLabelUnionRect = b, e.getOptionCategoryInterval = S, e.shouldShowAllLabels = T
  },
  '697e7': function(t, e, i) {
    var n = i('de00'),
      r = i('22d1'),
      a = i('6d8b'),
      o = i('d2cf'),
      s = i('afa0'),
      l = i('ed21'),
      u = i('30a3'),
      h = i('cdaa'),
      c = !r.canvasSupported,
      d = {
        canvas: l,
      },
      f = {},
      p = '4.3.0'; function g(t, e) {var i = new _(n(), t, e); return f[i.id] = i, i} function v(t) {if (t) {t.dispose();} else {for (var e in f) {f.hasOwnProperty(e) && f[e].dispose();}f = {}} return this} function m(t) {return f[t]} function y(t, e) {d[t] = e} function x(t) {delete f[t]} var _ = function(t, e, i) {
      i = i || {}, this.dom = e, this.id = t; var n = this,
        l = new s(),
        f = i.renderer; if (c) {if (!d.vml) {throw new Error("You need to require 'zrender/vml/vml' to support IE8");} f = 'vml'} else {f && d[f] || (f = 'canvas');} var p = new d[f](e, l, i, t); this.storage = l, this.painter = p; var g = r.node || r.worker ? null : new h(p.getViewportRoot(), p.root); this.handler = new o(l, p, g, p.root), this.animation = new u({
        stage: {
          update: a.bind(this.flush, this),
        },
      }), this.animation.start(), this._needsRefresh; var v = l.delFromStorage,
        m = l.addToStorage; l.delFromStorage = function(t) {v.call(l, t), t && t.removeSelfFromZr(n)}, l.addToStorage = function(t) {m.call(l, t), t.addSelfToZr(n)}
    }; _.prototype = {
      constructor: _, getId: function() {return this.id}, add: function(t) {this.storage.addRoot(t), this._needsRefresh = !0}, remove: function(t) {this.storage.delRoot(t), this._needsRefresh = !0}, configLayer: function(t, e) {this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0}, setBackgroundColor: function(t) {this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0}, refreshImmediately: function() {this._needsRefresh = this._needsRefreshHover = !1, this.painter.refresh(), this._needsRefresh = this._needsRefreshHover = !1}, refresh: function() {this._needsRefresh = !0}, flush: function() {var t; this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger('rendered')}, addHover: function(t, e) {if (this.painter.addHover) {var i = this.painter.addHover(t, e); return this.refreshHover(), i}}, removeHover: function(t) {this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())}, clearHover: function() {this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())}, refreshHover: function() {this._needsRefreshHover = !0}, refreshHoverImmediately: function() {this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()}, resize: function(t) {t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()}, clearAnimation: function() {this.animation.clear()}, getWidth: function() {return this.painter.getWidth()}, getHeight: function() {return this.painter.getHeight()}, pathToImage: function(t, e) {return this.painter.pathToImage(t, e)}, setCursorStyle: function(t) {this.handler.setCursorStyle(t)}, findHover: function(t, e) {return this.handler.findHover(t, e)}, on: function(t, e, i) {this.handler.on(t, e, i)}, off: function(t, e) {this.handler.off(t, e)}, trigger: function(t, e) {this.handler.trigger(t, e)}, clear: function() {this.storage.delRoot(), this.painter.clear()}, dispose: function() {this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, x(this.id)},
    }, e.version = p, e.init = g, e.dispose = v, e.getInstance = m, e.registerPainter = y
  },
  '69ff': function(t, e, i) {
    var n = i('6d8b'),
      r = n.each,
      a = n.map,
      o = n.isFunction,
      s = n.createHashMap,
      l = n.noop,
      u = i('f47d'),
      h = u.createTask,
      c = i('8918'),
      d = c.getUID,
      f = i('7e63'),
      p = i('843e'),
      g = i('e0d3'),
      v = g.normalizeToArray; function m(t, e, i, n) {this.ecInstance = t, this.api = e, this.unfinished; i = this._dataProcessorHandlers = i.slice(), n = this._visualHandlers = n.slice(); this._allHandlers = i.concat(n), this._stageTaskMap = s()} var y = m.prototype; function x(t, e, i, n, a) {
      var o; function s(t, e) {return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))}a = a || {}, r(e, (function(e, r) {
        if (!a.visualType || a.visualType === e.visualType) {
          var l = t._stageTaskMap.get(e.uid),
            u = l.seriesTaskMap,
            h = l.overallTask; if (h) {
            var c,
              d = h.agentStubMap; d.each((function(t) {s(a, t) && (t.dirty(), c = !0)})), c && h.dirty(), _(h, n); var f = t.getPerformArgs(h, a.block); d.each((function(t) {t.perform(f)})), o |= h.perform(f)
          } else {u && u.each((function(r, l) {s(a, r) && r.dirty(); var u = t.getPerformArgs(r, a.block); u.skip = !e.performRawSeries && i.isSeriesFiltered(r.context.model), _(r, n), o |= r.perform(u)}))}
        }
      })), t.unfinished |= o
    }y.restoreData = function(t, e) {t.restoreData(e), this._stageTaskMap.each((function(t) {var e = t.overallTask; e && e.dirty()}))}, y.getPerformArgs = function(t, e) {
      if (t.__pipeline) {
        var i = this._pipelineMap.get(t.__pipeline.id),
          n = i.context,
          r = !e && i.progressiveEnabled && (!n || n.progressiveRender) && t.__idxInPipeline > i.blockIndex,
          a = r ? i.step : null,
          o = n && n.modDataCount,
          s = o != null ? Math.ceil(o / a) : null; return {
          step: a, modBy: s, modDataCount: o,
        }
      }
    }, y.getPipeline = function(t) {return this._pipelineMap.get(t)}, y.updateStreamModes = function(t, e) {
      var i = this._pipelineMap.get(t.uid),
        n = t.getData(),
        r = n.count(),
        a = i.progressiveEnabled && e.incrementalPrepareRender && r >= i.threshold,
        o = t.get('large') && r >= t.get('largeThreshold'),
        s = t.get('progressiveChunkMode') === 'mod' ? r : null; t.pipelineContext = i.context = {
        progressiveRender: a, modDataCount: s, large: o,
      }
    }, y.restorePipelines = function(t) {
      var e = this,
        i = e._pipelineMap = s(); t.eachSeries((function(t) {
        var n = t.getProgressive(),
          r = t.uid; i.set(r, {
          id: r, head: null, tail: null, threshold: t.getProgressiveThreshold(), progressiveEnabled: n && !(t.preventIncremental && t.preventIncremental()), blockIndex: -1, step: Math.round(n || 700), count: 0,
        }), P(e, t, t.dataTask)
      }))
    }, y.prepareStageTasks = function() {
      var t = this._stageTaskMap,
        e = this.ecInstance.getModel(),
        i = this.api; r(this._allHandlers, (function(n) {var r = t.get(n.uid) || t.set(n.uid, []); n.reset && b(this, n, r, e, i), n.overallReset && w(this, n, r, e, i)}), this)
    }, y.prepareView = function(t, e, i, n) {
      var r = t.renderTask,
        a = r.context; a.model = e, a.ecModel = i, a.api = n, r.__block = !t.incrementalPrepareRender, P(this, e, r)
    }, y.performDataProcessorTasks = function(t, e) {
      x(this, this._dataProcessorHandlers, t, e, {
        block: !0,
      })
    }, y.performVisualTasks = function(t, e, i) {x(this, this._visualHandlers, t, e, i)}, y.performSeriesTasks = function(t) {var e; t.eachSeries((function(t) {e |= t.dataTask.perform()})), this.unfinished |= e}, y.plan = function() {this._pipelineMap.each((function(t) {var e = t.tail; do {if (e.__block) {t.blockIndex = e.__idxInPipeline; break}e = e.getUpstream()} while (e)}))}; var _ = y.updatePayload = function(t, e) {e !== 'remain' && (t.context.payload = e)}; function b(t, e, i, n, r) {
      var a = i.seriesTaskMap || (i.seriesTaskMap = s()),
        o = e.seriesType,
        l = e.getTargetSeries; function u(i) {
        var o = i.uid,
          s = a.get(o) || a.set(o, h({
            plan: I, reset: A, count: O,
          })); s.context = {
          model: i, ecModel: n, api: r, useClearVisual: e.isVisual && !e.isLayout, plan: e.plan, reset: e.reset, scheduler: t,
        }, P(t, i, s)
      }e.createOnAllSeries ? n.eachRawSeries(u) : o ? n.eachRawSeriesByType(o, u) : l && l(n, r).each(u); var c = t._pipelineMap; a.each((function(t, e) {c.get(e) || (t.dispose(), a.removeKey(e))}))
    } function w(t, e, i, n, a) {
      var o = i.overallTask = i.overallTask || h({
        reset: S,
      }); o.context = {
        ecModel: n, api: a, overallReset: e.overallReset, scheduler: t,
      }; var l = o.agentStubMap = o.agentStubMap || s(),
        u = e.seriesType,
        c = e.getTargetSeries,
        d = !0,
        f = e.modifyOutputEnd; function p(e) {
        var i = e.uid,
          n = l.get(i); n || (n = l.set(i, h({
          reset: T, onDirty: C,
        })), o.dirty()), n.context = {
          model: e, overallProgress: d, modifyOutputEnd: f,
        }, n.agent = o, n.__block = d, P(t, e, n)
      }u ? n.eachRawSeriesByType(u, p) : c ? c(n, a).each(p) : (d = !1, r(n.getSeries(), p)); var g = t._pipelineMap; l.each((function(t, e) {g.get(e) || (t.dispose(), o.dirty(), l.removeKey(e))}))
    } function S(t) {t.overallReset(t.ecModel, t.api, t.payload)} function T(t, e) {return t.overallProgress && M} function M() {this.agent.dirty(), this.getDownstream().dirty()} function C() {this.agent && this.agent.dirty()} function I(t) {return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)} function A(t) {t.useClearVisual && t.data.clearAllVisual(); var e = t.resetDefines = v(t.reset(t.model, t.ecModel, t.api, t.payload)); return e.length > 1 ? a(e, (function(t, e) {return D(e)})) : k} var k = D(0); function D(t) {
      return function(e, i) {
        var n = i.data,
          r = i.resetDefines[t]; if (r && r.dataEach) {for (var a = e.start; a < e.end; a++) {r.dataEach(n, a);}} else {r && r.progress && r.progress(e, n)}
      }
    } function O(t) {return t.data.count()} function P(t, e, i) {
      var n = e.uid,
        r = t._pipelineMap.get(n); !r.head && (r.head = i), r.tail && r.tail.pipe(i), r.tail = i, i.__idxInPipeline = r.count++, i.__pipeline = r
    } function L(t) {E = null; try {t(R, B)} catch (e) {} return E}m.wrapStageHandler = function(t, e) {
      return o(t) && (t = {
        overallReset: t, seriesType: L(t),
      }), t.uid = d('stageHandler'), e && (t.visualType = e), t
    }; var E,
      R = {},
      B = {}; function z(t, e) {for (var i in e.prototype) {t[i] = l}}z(R, f), z(B, p), R.eachSeriesByType = R.eachRawSeriesByType = function(t) {E = t}, R.eachComponent = function(t) {t.mainType === 'series' && t.subType && (E = t.subType)}; var N = m; t.exports = N
  },
  '6cb7': function(t, e, i) {
    var n = i('6d8b'),
      r = i('4319'),
      a = i('8918'),
      o = i('625e'),
      s = o.enableClassManagement,
      l = o.parseClassType,
      u = i('e0d3'),
      h = u.makeInner,
      c = i('f934'),
      d = i('de1c'),
      f = h(),
      p = r.extend({
        type: 'component',
        id: '',
        name: '',
        mainType: '',
        subType: '',
        componentIndex: 0,
        defaultOption: null,
        ecModel: null,
        dependentModels: [],
        uid: null,
        layoutMode: null,
        $constructor: function(t, e, i, n) {r.call(this, t, e, i, n), this.uid = a.getUID('ec_cpt_model')},
        init: function(t, e, i, n) {this.mergeDefaultAndTheme(t, i)},
        mergeDefaultAndTheme: function(t, e) {
          var i = this.layoutMode,
            r = i ? c.getLayoutParams(t) : {},
            a = e.getTheme(); n.merge(t, a.get(this.mainType)), n.merge(t, this.getDefaultOption()), i && c.mergeLayoutParam(t, r, i)
        },
        mergeOption: function(t, e) {n.merge(this.option, t, !0); var i = this.layoutMode; i && c.mergeLayoutParam(this.option, t, i)},
        optionUpdated: function(t, e) {},
        getDefaultOption: function() {
          var t = f(this); if (!t.defaultOption) {
            var e = [],
              i = this.constructor; while (i) {var r = i.prototype.defaultOption; r && e.push(r), i = i.superClass} for (var a = {}, o = e.length - 1; o >= 0; o--) {a = n.merge(a, e[o], !0);}t.defaultOption = a
          } return t.defaultOption
        },
        getReferringComponents: function(t) {
          return this.ecModel.queryComponents({
            mainType: t, index: this.get(t + 'Index', !0), id: this.get(t + 'Id', !0),
          })
        },
      }); function g(t) {var e = []; return n.each(p.getClassesByMainType(t), (function(t) {e = e.concat(t.prototype.dependencies || [])})), e = n.map(e, (function(t) {return l(t).main})), t !== 'dataset' && n.indexOf(e, 'dataset') <= 0 && e.unshift('dataset'), e}s(p, {
      registerWhenExtend: !0,
    }), a.enableSubTypeDefaulter(p), a.enableTopologicalTravel(p, g), n.mixin(p, d); var v = p; t.exports = v
  },
  '6d8b': function(t, e) {
    var i = {
        '[object Function]': 1, '[object RegExp]': 1, '[object Date]': 1, '[object Error]': 1, '[object CanvasGradient]': 1, '[object CanvasPattern]': 1, '[object Image]': 1, '[object Canvas]': 1,
      },
      n = {
        '[object Int8Array]': 1, '[object Uint8Array]': 1, '[object Uint8ClampedArray]': 1, '[object Int16Array]': 1, '[object Uint16Array]': 1, '[object Int32Array]': 1, '[object Uint32Array]': 1, '[object Float32Array]': 1, '[object Float64Array]': 1,
      },
      r = Object.prototype.toString,
      a = Array.prototype,
      o = a.forEach,
      s = a.filter,
      l = a.slice,
      u = a.map,
      h = a.reduce,
      c = {}; function d(t, e) {t === 'createCanvas' && (y = null), c[t] = e} function f(t) {
      if (t == null || typeof t !== 'object') {return t;} var e = t,
        a = r.call(t); if (a === '[object Array]') {if (!Z(t)) {e = []; for (var o = 0, s = t.length; o < s; o++) {e[o] = f(t[o])}}} else if (n[a]) {if (!Z(t)) {var l = t.constructor; if (t.constructor.from) {e = l.from(t);} else {e = new l(t.length); for (o = 0, s = t.length; o < s; o++) {e[o] = f(t[o])}}}} else if (!i[a] && !Z(t) && !N(t)) {for (var u in e = {}, t) {t.hasOwnProperty(u) && (e[u] = f(t[u]));}} return e
    } function p(t, e, i) {
      if (!R(e) || !R(t)) {return i ? f(e) : t;} for (var n in e) {
        if (e.hasOwnProperty(n)) {
          var r = t[n],
            a = e[n]; !R(a) || !R(r) || P(a) || P(r) || N(a) || N(r) || B(a) || B(r) || Z(a) || Z(r) ? !i && n in t || (t[n] = f(e[n], !0)) : p(r, a, i)
        }
      } return t
    } function g(t, e) {for (var i = t[0], n = 1, r = t.length; n < r; n++) {i = p(i, t[n], e);} return i} function v(t, e) {for (var i in e) {e.hasOwnProperty(i) && (t[i] = e[i]);} return t} function m(t, e, i) {for (var n in e) {e.hasOwnProperty(n) && (i ? e[n] != null : t[n] == null) && (t[n] = e[n]);} return t} var y,
      x = function() {return c.createCanvas()}; function _() {return y || (y = x().getContext('2d')), y} function b(t, e) {if (t) {if (t.indexOf) {return t.indexOf(e);} for (var i = 0, n = t.length; i < n; i++) {if (t[i] === e) {return i}}} return -1} function w(t, e) {var i = t.prototype; function n() {} for (var r in n.prototype = e.prototype, t.prototype = new n(), i) {i.hasOwnProperty(r) && (t.prototype[r] = i[r]);}t.prototype.constructor = t, t.superClass = e} function S(t, e, i) {t = 'prototype' in t ? t.prototype : t, e = 'prototype' in e ? e.prototype : e, m(t, e, i)} function T(t) {if (t) {return typeof t !== 'string' && typeof t.length === 'number'}} function M(t, e, i) {if (t && e) {if (t.forEach && t.forEach === o) {t.forEach(e, i);} else if (t.length === +t.length) {for (var n = 0, r = t.length; n < r; n++) {e.call(i, t[n], n, t);}} else {for (var a in t) {t.hasOwnProperty(a) && e.call(i, t[a], a, t)}}}} function C(t, e, i) {if (t && e) {if (t.map && t.map === u) {return t.map(e, i);} for (var n = [], r = 0, a = t.length; r < a; r++) {n.push(e.call(i, t[r], r, t));} return n}} function I(t, e, i, n) {if (t && e) {if (t.reduce && t.reduce === h) {return t.reduce(e, i, n);} for (var r = 0, a = t.length; r < a; r++) {i = e.call(n, i, t[r], r, t);} return i}} function A(t, e, i) {if (t && e) {if (t.filter && t.filter === s) {return t.filter(e, i);} for (var n = [], r = 0, a = t.length; r < a; r++) {e.call(i, t[r], r, t) && n.push(t[r]);} return n}} function k(t, e, i) {if (t && e) {for (var n = 0, r = t.length; n < r; n++) {if (e.call(i, t[n], n, t)) {return t[n]}}}} function D(t, e) {var i = l.call(arguments, 2); return function() {return t.apply(e, i.concat(l.call(arguments)))}} function O(t) {var e = l.call(arguments, 1); return function() {return t.apply(this, e.concat(l.call(arguments)))}} function P(t) {return r.call(t) === '[object Array]'} function L(t) {return typeof t === 'function'} function E(t) {return r.call(t) === '[object String]'} function R(t) {var e = typeof t; return e === 'function' || !!t && e === 'object'} function B(t) {return !!i[r.call(t)]} function z(t) {return !!n[r.call(t)]} function N(t) {return typeof t === 'object' && typeof t.nodeType === 'number' && typeof t.ownerDocument === 'object'} function F(t) {return t !== t} function V(t) {for (var e = 0, i = arguments.length; e < i; e++) {if (arguments[e] != null) {return arguments[e]}}} function H(t, e) {return t != null ? t : e} function W(t, e, i) {return t != null ? t : e != null ? e : i} function G() {return Function.call.apply(l, arguments)} function U(t) {if (typeof t === 'number') {return [t, t, t, t];} var e = t.length; return e === 2 ? [t[0], t[1], t[0], t[1]] : e === 3 ? [t[0], t[1], t[2], t[1]] : t} function Y(t, e) {if (!t) {throw new Error(e)}} function X(t) {return t == null ? null : typeof t.trim === 'function' ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')}c.createCanvas = function() {return document.createElement('canvas')}; var q = '__ec_primitive__'; function j(t) {t[q] = !0} function Z(t) {return t[q]} function K(t) {var e = P(t); this.data = {}; var i = this; function n(t, n) {e ? i.set(t, n) : i.set(n, t)}t instanceof K ? t.each(n) : t && M(t, n)} function $(t) {return new K(t)} function Q(t, e) {for (var i = new t.constructor(t.length + e.length), n = 0; n < t.length; n++) {i[n] = t[n];} var r = t.length; for (n = 0; n < e.length; n++) {i[n + r] = e[n];} return i} function J() {}K.prototype = {
      constructor: K, get: function(t) {return this.data.hasOwnProperty(t) ? this.data[t] : null}, set: function(t, e) {return this.data[t] = e}, each: function(t, e) {for (var i in void 0 !== e && (t = D(t, e)), this.data) {this.data.hasOwnProperty(i) && t(this.data[i], i)}}, removeKey: function(t) {delete this.data[t]},
    }, e.$override = d, e.clone = f, e.merge = p, e.mergeAll = g, e.extend = v, e.defaults = m, e.createCanvas = x, e.getContext = _, e.indexOf = b, e.inherits = w, e.mixin = S, e.isArrayLike = T, e.each = M, e.map = C, e.reduce = I, e.filter = A, e.find = k, e.bind = D, e.curry = O, e.isArray = P, e.isFunction = L, e.isString = E, e.isObject = R, e.isBuiltInObject = B, e.isTypedArray = z, e.isDom = N, e.eqNaN = F, e.retrieve = V, e.retrieve2 = H, e.retrieve3 = W, e.slice = G, e.normalizeCssArray = U, e.assert = Y, e.trim = X, e.setAsPrimitive = j, e.isPrimitive = Z, e.createHashMap = $, e.concatArray = Q, e.noop = J
  },
  '71ad': function(t, e, i) {
    var n = i('6d8b'),
      r = {
        show: !0,
        zlevel: 0,
        z: 0,
        inverse: !1,
        name: '',
        nameLocation: 'end',
        nameRotate: null,
        nameTruncate: {
          maxWidth: null, ellipsis: '...', placeholder: '.',
        },
        nameTextStyle: {},
        nameGap: 15,
        silent: !1,
        triggerEvent: !1,
        tooltip: {
          show: !1,
        },
        axisPointer: {},
        axisLine: {
          show: !0,
          onZero: !0,
          onZeroAxisIndex: null,
          lineStyle: {
            color: '#333', width: 1, type: 'solid',
          },
          symbol: ['none', 'none'],
          symbolSize: [10, 15],
        },
        axisTick: {
          show: !0,
          inside: !1,
          length: 5,
          lineStyle: {
            width: 1,
          },
        },
        axisLabel: {
          show: !0, inside: !1, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12,
        },
        splitLine: {
          show: !0,
          lineStyle: {
            color: ['#ccc'], width: 1, type: 'solid',
          },
        },
        splitArea: {
          show: !1,
          areaStyle: {
            color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
          },
        },
      },
      a = {}; a.categoryAxis = n.merge({
      boundaryGap: !0,
      deduplication: null,
      splitLine: {
        show: !1,
      },
      axisTick: {
        alignWithLabel: !1, interval: 'auto',
      },
      axisLabel: {
        interval: 'auto',
      },
    }, r), a.valueAxis = n.merge({
      boundaryGap: [0, 0],
      splitNumber: 5,
      minorTick: {
        show: !1, splitNumber: 5, length: 3, lineStyle: {},
      },
      minorSplitLine: {
        show: !1,
        lineStyle: {
          color: '#eee', width: 1,
        },
      },
    }, r), a.timeAxis = n.defaults({
      scale: !0, min: 'dataMin', max: 'dataMax',
    }, a.valueAxis), a.logAxis = n.defaults({
      scale: !0, logBase: 10,
    }, a.valueAxis); var o = a; t.exports = o
  },
  '74cb': function(t, e) {
    var i = {
        linear: function(t) {return t},
        quadraticIn: function(t) {return t * t},
        quadraticOut: function(t) {return t * (2 - t)},
        quadraticInOut: function(t) {return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)},
        cubicIn: function(t) {return t * t * t},
        cubicOut: function(t) {return --t * t * t + 1},
        cubicInOut: function(t) {return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)},
        quarticIn: function(t) {return t * t * t * t},
        quarticOut: function(t) {return 1 - --t * t * t * t},
        quarticInOut: function(t) {return (t *= 2) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)},
        quinticIn: function(t) {return t * t * t * t * t},
        quinticOut: function(t) {return --t * t * t * t * t + 1},
        quinticInOut: function(t) {return (t *= 2) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2)},
        sinusoidalIn: function(t) {return 1 - Math.cos(t * Math.PI / 2)},
        sinusoidalOut: function(t) {return Math.sin(t * Math.PI / 2)},
        sinusoidalInOut: function(t) {return 0.5 * (1 - Math.cos(Math.PI * t))},
        exponentialIn: function(t) {return t === 0 ? 0 : Math.pow(1024, t - 1)},
        exponentialOut: function(t) {return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)},
        exponentialInOut: function(t) {return t === 0 ? 0 : t === 1 ? 1 : (t *= 2) < 1 ? 0.5 * Math.pow(1024, t - 1) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))},
        circularIn: function(t) {return 1 - Math.sqrt(1 - t * t)},
        circularOut: function(t) {return Math.sqrt(1 - --t * t)},
        circularInOut: function(t) {return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)},
        elasticIn: function(t) {
          var e,
            i = 0.1,
            n = 0.4; return t === 0 ? 0 : t === 1 ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
        },
        elasticOut: function(t) {
          var e,
            i = 0.1,
            n = 0.4; return t === 0 ? 0 : t === 1 ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
        },
        elasticInOut: function(t) {
          var e,
            i = 0.1,
            n = 0.4; return t === 0 ? 0 : t === 1 ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -0.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * 0.5 + 1)
        },
        backIn: function(t) {var e = 1.70158; return t * t * ((e + 1) * t - e)},
        backOut: function(t) {var e = 1.70158; return --t * t * ((e + 1) * t + e) + 1},
        backInOut: function(t) {var e = 2.5949095; return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * 0.5 : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)},
        bounceIn: function(t) {return 1 - i.bounceOut(1 - t)},
        bounceOut: function(t) {return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375},
        bounceInOut: function(t) {return t < 0.5 ? 0.5 * i.bounceIn(2 * t) : 0.5 * i.bounceOut(2 * t - 1) + 0.5},
      },
      n = i; t.exports = n
  },
  '76a5': function(t, e, i) {
    var n = i('19eb'),
      r = i('6d8b'),
      a = i('e86a'),
      o = i('a73c'),
      s = i('82eb'),
      l = s.ContextCachedBy,
      u = function(t) {n.call(this, t)}; u.prototype = {
      constructor: u, type: 'text', brush: function(t, e) {var i = this.style; this.__dirty && o.normalizeTextStyle(i, !0), i.fill = i.stroke = i.shadowBlur = i.shadowColor = i.shadowOffsetX = i.shadowOffsetY = null; var n = i.text; n != null && (n += ''), o.needDrawText(n, i) ? (this.setTransform(t), o.renderText(this, t, n, i, null, e), this.restoreTransform(t)) : t.__attrCachedBy = l.NONE}, getBoundingRect: function() {var t = this.style; if (this.__dirty && o.normalizeTextStyle(t, !0), !this._rect) {var e = t.text; e != null ? e += '' : e = ''; var i = a.getBoundingRect(t.text + '', t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich); if (i.x += t.x || 0, i.y += t.y || 0, o.getStroke(t.textStroke, t.textStrokeWidth)) {var n = t.textStrokeWidth; i.x -= n / 2, i.y -= n / 2, i.width += n, i.height += n} this._rect = i} return this._rect},
    }, r.inherits(u, n); var h = u; t.exports = h
  },
  '7d6d': function(t, e) {
    var i = {
      shadowBlur: 1, shadowOffsetX: 1, shadowOffsetY: 1, textShadowBlur: 1, textShadowOffsetX: 1, textShadowOffsetY: 1, textBoxShadowBlur: 1, textBoxShadowOffsetX: 1, textBoxShadowOffsetY: 1,
    }; function n(t, e, n) {return i.hasOwnProperty(e) ? n * t.dpr : n}t.exports = n
  },
  '7e63': function(t, e, i) {
    var n = i('4e08'),
      r = (n.__DEV__, i('6d8b')),
      a = r.each,
      o = r.filter,
      s = r.map,
      l = r.isArray,
      u = r.indexOf,
      h = r.isObject,
      c = r.isString,
      d = r.createHashMap,
      f = r.assert,
      p = r.clone,
      g = r.merge,
      v = r.extend,
      m = r.mixin,
      y = i('e0d3'),
      x = i('4319'),
      _ = i('6cb7'),
      b = i('8971'),
      w = i('e47b'),
      S = i('0f99'),
      T = S.resetSourceDefaulter,
      M = '\0_ec_inner',
      C = x.extend({
        init: function(t, e, i, n) {i = i || {}, this.option = null, this._theme = new x(i), this._optionManager = n},
        setOption: function(t, e) {f(!(M in t), 'please use chart.getOption()'), this._optionManager.setOption(t, e), this.resetOption(null)},
        resetOption: function(t) {
          var e = !1,
            i = this._optionManager; if (!t || t === 'recreate') {var n = i.mountOption(t === 'recreate'); this.option && t !== 'recreate' ? (this.restoreData(), this.mergeOption(n)) : k.call(this, n), e = !0} if (t !== 'timeline' && t !== 'media' || this.restoreData(), !t || t === 'recreate' || t === 'timeline') {var r = i.getTimelineOption(this); r && (this.mergeOption(r), e = !0)} if (!t || t === 'recreate' || t === 'media') {var o = i.getMediaOption(this, this._api); o.length && a(o, (function(t) {this.mergeOption(t, e = !0)}), this)} return e
        },
        mergeOption: function(t) {
          var e = this.option,
            i = this._componentsMap,
            n = []; function r(n, r) {
            var o = y.normalizeToArray(t[n]),
              s = y.mappingToExists(i.get(n), o); y.makeIdAndName(s), a(s, (function(t, e) {var i = t.option; h(i) && (t.keyInfo.mainType = n, t.keyInfo.subType = O(n, i, t.exist))})); var l = D(i, r); e[n] = [], i.set(n, []), a(s, (function(t, r) {
              var a = t.exist,
                o = t.option; if (f(h(o) || a, 'Empty component definition'), o) {
                var s = _.getClass(n, t.keyInfo.subType, !0); if (a && a.constructor === s) {a.name = t.keyInfo.name, a.mergeOption(o, this), a.optionUpdated(o, !1);} else {
                  var u = v({
                    dependentModels: l, componentIndex: r,
                  }, t.keyInfo); a = new s(o, this, this, u), v(a, u), a.init(o, this, this, u), a.optionUpdated(null, !0)
                }
              } else {a.mergeOption({}, this), a.optionUpdated({}, !1);}i.get(n)[r] = a, e[n][r] = a.option
            }), this), n === 'series' && P(this, i.get('series'))
          }T(this), a(t, (function(t, i) {t != null && (_.hasClass(i) ? i && n.push(i) : e[i] = e[i] == null ? p(t) : g(e[i], t, !0))})), _.topologicalTravel(n, _.getAllClassMainTypes(), r, this), this._seriesIndicesMap = d(this._seriesIndices = this._seriesIndices || [])
        },
        getOption: function() {var t = p(this.option); return a(t, (function(e, i) {if (_.hasClass(i)) {e = y.normalizeToArray(e); for (var n = e.length - 1; n >= 0; n--) {y.isIdInner(e[n]) && e.splice(n, 1);}t[i] = e}})), delete t[M], t},
        getTheme: function() {return this._theme},
        getComponent: function(t, e) {var i = this._componentsMap.get(t); if (i) {return i[e || 0]}},
        queryComponents: function(t) {
          var e = t.mainType; if (!e) {return [];} var i,
            n = t.index,
            r = t.id,
            a = t.name,
            h = this._componentsMap.get(e); if (!h || !h.length) {return [];} if (n != null) {l(n) || (n = [n]), i = o(s(n, (function(t) {return h[t]})), (function(t) {return !!t}));} else if (r != null) {var c = l(r); i = o(h, (function(t) {return c && u(r, t.id) >= 0 || !c && t.id === r}))} else if (a != null) {var d = l(a); i = o(h, (function(t) {return d && u(a, t.name) >= 0 || !d && t.name === a}))} else {i = h.slice();} return L(i, t)
        },
        findComponents: function(t) {
          var e = t.query,
            i = t.mainType,
            n = a(e),
            r = n ? this.queryComponents(n) : this._componentsMap.get(i); return s(L(r, t)); function a(t) {
            var e = i + 'Index',
              n = i + 'Id',
              r = i + 'Name'; return !t || t[e] == null && t[n] == null && t[r] == null ? null : {
              mainType: i, index: t[e], id: t[n], name: t[r],
            }
          } function s(e) {return t.filter ? o(e, t.filter) : e}
        },
        eachComponent: function(t, e, i) {var n = this._componentsMap; if (typeof t === 'function') {i = e, e = t, n.each((function(t, n) {a(t, (function(t, r) {e.call(i, n, t, r)}))}));} else if (c(t)) {a(n.get(t), e, i);} else if (h(t)) {var r = this.findComponents(t); a(r, e, i)}},
        getSeriesByName: function(t) {var e = this._componentsMap.get('series'); return o(e, (function(e) {return e.name === t}))},
        getSeriesByIndex: function(t) {return this._componentsMap.get('series')[t]},
        getSeriesByType: function(t) {var e = this._componentsMap.get('series'); return o(e, (function(e) {return e.subType === t}))},
        getSeries: function() {return this._componentsMap.get('series').slice()},
        getSeriesCount: function() {return this._componentsMap.get('series').length},
        eachSeries: function(t, e) {E(this), a(this._seriesIndices, (function(i) {var n = this._componentsMap.get('series')[i]; t.call(e, n, i)}), this)},
        eachRawSeries: function(t, e) {a(this._componentsMap.get('series'), t, e)},
        eachSeriesByType: function(t, e, i) {E(this), a(this._seriesIndices, (function(n) {var r = this._componentsMap.get('series')[n]; r.subType === t && e.call(i, r, n)}), this)},
        eachRawSeriesByType: function(t, e, i) {return a(this.getSeriesByType(t), e, i)},
        isSeriesFiltered: function(t) {return E(this), this._seriesIndicesMap.get(t.componentIndex) == null},
        getCurrentSeriesIndices: function() {return (this._seriesIndices || []).slice()},
        filterSeries: function(t, e) {E(this); var i = o(this._componentsMap.get('series'), t, e); P(this, i)},
        restoreData: function(t) {var e = this._componentsMap; P(this, e.get('series')); var i = []; e.each((function(t, e) {i.push(e)})), _.topologicalTravel(i, _.getAllClassMainTypes(), (function(i, n) {a(e.get(i), (function(e) {(i !== 'series' || !I(e, t)) && e.restoreData()}))}))},
      }); function I(t, e) {
      if (e) {
        var i = e.seiresIndex,
          n = e.seriesId,
          r = e.seriesName; return i != null && t.componentIndex !== i || n != null && t.id !== n || r != null && t.name !== r
      }
    } function A(t, e) {var i = t.color && !t.colorLayer; a(e, (function(e, n) {n === 'colorLayer' && i || _.hasClass(n) || (typeof e === 'object' ? t[n] = t[n] ? g(t[n], e, !1) : p(e) : t[n] == null && (t[n] = e))}))} function k(t) {
      t = t, this.option = {}, this.option[M] = 1, this._componentsMap = d({
        series: [],
      }), this._seriesIndices, this._seriesIndicesMap, A(t, this._theme.option), g(t, b, !1), this.mergeOption(t)
    } function D(t, e) {l(e) || (e = e ? [e] : []); var i = {}; return a(e, (function(e) {i[e] = (t.get(e) || []).slice()})), i} function O(t, e, i) {var n = e.type ? e.type : i ? i.subType : _.determineSubType(t, e); return n} function P(t, e) {t._seriesIndicesMap = d(t._seriesIndices = s(e, (function(t) {return t.componentIndex})) || [])} function L(t, e) {return e.hasOwnProperty('subType') ? o(t, (function(t) {return t.subType === e.subType})) : t} function E(t) {}m(C, w); var R = C; t.exports = R
  },
  '7f96': function(t, e, i) {
    var n = i('6d8b'),
      r = n.isFunction; function a(t, e, i) {
      return {
        seriesType: t,
        performRawSeries: !0,
        reset: function(t, n, a) {
          var o = t.getData(),
            s = t.get('symbol'),
            l = t.get('symbolSize'),
            u = t.get('symbolKeepAspect'),
            h = r(s),
            c = r(l),
            d = h || c,
            f = !h && s ? s : e,
            p = c ? null : l; if (o.setVisual({
            legendSymbol: i || f, symbol: f, symbolSize: p, symbolKeepAspect: u,
          }), !n.isSeriesFiltered(t)) {
            return {
              dataEach: o.hasItemOption || d ? g : null,
            };
          } function g(e, i) {
            if (d) {
              var n = t.getRawValue(i),
                r = t.getDataParams(i); h && e.setItemVisual(i, 'symbol', s(n, r)), c && e.setItemVisual(i, 'symbolSize', l(n, r))
            } if (e.hasItemOption) {
              var a = e.getItemModel(i),
                o = a.getShallow('symbol', !0),
                u = a.getShallow('symbolSize', !0),
                f = a.getShallow('symbolKeepAspect', !0); o != null && e.setItemVisual(i, 'symbol', o), u != null && e.setItemVisual(i, 'symbolSize', u), f != null && e.setItemVisual(i, 'symbolKeepAspect', f)
            }
          }
        },
      }
    }t.exports = a
  },
  '80f0': function(t, e) {
    function i(t) {return t} function n(t, e, n, r, a) {this._old = t, this._new = e, this._oldKeyGetter = n || i, this._newKeyGetter = r || i, this.context = a} function r(t, e, i, n, r) {
      for (var a = 0; a < t.length; a++) {
        var o = '_ec_' + r[n](t[a], a),
          s = e[o]; s == null ? (i.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a))
      }
    }n.prototype = {
      constructor: n,
      add: function(t) {return this._add = t, this},
      update: function(t) {return this._update = t, this},
      remove: function(t) {return this._remove = t, this},
      execute: function() {
        var t = this._old,
          e = this._new,
          i = {},
          n = {},
          a = [],
          o = []; for (r(t, i, a, '_oldKeyGetter', this), r(e, n, o, '_newKeyGetter', this), h = 0; h < t.length; h++) {
          var s = a[h],
            l = n[s]; if (l != null) {var u = l.length; u ? (u === 1 && (n[s] = null), l = l.shift()) : n[s] = null, this._update && this._update(l, h)} else {this._remove && this._remove(h)}
        } for (var h = 0; h < o.length; h++) {s = o[h]; if (n.hasOwnProperty(s)) {l = n[s]; if (l == null) {continue;} if (l.length) {var c = 0; for (u = l.length; c < u; c++) {this._add && this._add(l[c])}} else {this._add && this._add(l)}}}
      },
    }; var a = n; t.exports = a
  },
  '82eb': function(t, e) {
    var i = {
        NONE: 0, STYLE_BIND: 1, PLAIN_TEXT: 2,
      },
      n = 9; e.ContextCachedBy = i, e.WILL_BE_RESTORED = n
  },
  '82f9': function(t, e, i) {
    var n = i('6d8b'),
      r = i('76a5'); function a(t) {this._zr = t.getZr(), this._show = !1, this._hideTimeout}a.prototype = {
      constructor: a,
      _enterable: !0,
      update: function() {},
      show: function(t) {this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr('show', !0), this._show = !0},
      setContent: function(t, e, i) {
        this.el && this._zr.remove(this.el); var n = {},
          a = t,
          o = '{marker',
          s = '|}',
          l = a.indexOf(o); while (l >= 0) {
          var u = a.indexOf(s),
            h = a.substr(l + o.length, u - l - o.length); h.indexOf('sub') > -1 ? n['marker' + h] = {
            textWidth: 4, textHeight: 4, textBorderRadius: 2, textBackgroundColor: e[h], textOffset: [3, 0],
          } : n['marker' + h] = {
            textWidth: 10, textHeight: 10, textBorderRadius: 5, textBackgroundColor: e[h],
          }, a = a.substr(u + 1), l = a.indexOf('{marker')
        } this.el = new r({
          style: {
            rich: n, text: t, textLineHeight: 20, textBackgroundColor: i.get('backgroundColor'), textBorderRadius: i.get('borderRadius'), textFill: i.get('textStyle.color'), textPadding: i.get('padding'),
          },
          z: i.get('z'),
        }), this._zr.add(this.el); var c = this; this.el.on('mouseover', (function() {c._enterable && (clearTimeout(c._hideTimeout), c._show = !0), c._inContent = !0})), this.el.on('mouseout', (function() {c._enterable && c._show && c.hideLater(c._hideDelay), c._inContent = !1}))
      },
      setEnterable: function(t) {this._enterable = t},
      getSize: function() {var t = this.el.getBoundingRect(); return [t.width, t.height]},
      moveTo: function(t, e) {this.el && this.el.attr('position', [t, e])},
      hide: function() {this.el && this.el.hide(), this._show = !1},
      hideLater: function(t) {!this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(n.bind(this.hide, this), t)) : this.hide())},
      isShow: function() {return this._show},
      getOuterSize: function() {
        var t = this.getSize(); return {
          width: t[0], height: t[1],
        }
      },
    }; var o = a; t.exports = o
  },
  '843e': function(t, e, i) {
    var n = i('6d8b'),
      r = ['getDom', 'getZr', 'getWidth', 'getHeight', 'getDevicePixelRatio', 'dispatchAction', 'isDisposed', 'on', 'off', 'getDataURL', 'getConnectedDataURL', 'getModel', 'getOption', 'getViewOfComponentModel', 'getViewOfSeriesModel']; function a(t) {n.each(r, (function(e) {this[e] = n.bind(t[e], t)}), this)} var o = a; t.exports = o
  },
  '84ce': function(t, e, i) {
    var n = i('6d8b'),
      r = n.each,
      a = n.map,
      o = i('3842'),
      s = o.linearMap,
      l = o.getPixelPrecision,
      u = o.round,
      h = i('e073'),
      c = h.createAxisTicks,
      d = h.createAxisLabels,
      f = h.calculateCategoryInterval,
      p = [0, 1],
      g = function(t, e, i) {this.dim = t, this.scale = e, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1}; function v(t, e) {
      var i = t[1] - t[0],
        n = e,
        r = i / n / 2; t[0] += r, t[1] -= r
    } function m(t, e, i, n) {
      var a = e.length; if (t.onBand && !i && a) {
        var o, s,
          l = t.getExtent(); if (a === 1) {
          e[0].coord = l[0], o = e[1] = {
            coord: l[0],
          };
        } else {
          var h = e[a - 1].tickValue - e[0].tickValue,
            c = (e[a - 1].coord - e[0].coord) / h; r(e, (function(t) {t.coord -= c / 2})); var d = t.scale.getExtent(); s = 1 + d[1] - e[a - 1].tickValue, o = {
            coord: e[a - 1].coord + c * s,
          }, e.push(o)
        } var f = l[0] > l[1]; p(e[0].coord, l[0]) && (n ? e[0].coord = l[0] : e.shift()), n && p(l[0], e[0].coord) && e.unshift({
          coord: l[0],
        }), p(l[1], o.coord) && (n ? o.coord = l[1] : e.pop()), n && p(o.coord, l[1]) && e.push({
          coord: l[1],
        })
      } function p(t, e) {return t = u(t), e = u(e), f ? t > e : t < e}
    }g.prototype = {
      constructor: g,
      contain: function(t) {
        var e = this._extent,
          i = Math.min(e[0], e[1]),
          n = Math.max(e[0], e[1]); return t >= i && t <= n
      },
      containData: function(t) {return this.scale.contain(t)},
      getExtent: function() {return this._extent.slice()},
      getPixelPrecision: function(t) {return l(t || this.scale.getExtent(), this._extent)},
      setExtent: function(t, e) {var i = this._extent; i[0] = t, i[1] = e},
      dataToCoord: function(t, e) {
        var i = this._extent,
          n = this.scale; return t = n.normalize(t), this.onBand && n.type === 'ordinal' && (i = i.slice(), v(i, n.count())), s(t, p, i, e)
      },
      coordToData: function(t, e) {
        var i = this._extent,
          n = this.scale; this.onBand && n.type === 'ordinal' && (i = i.slice(), v(i, n.count())); var r = s(t, i, p, e); return this.scale.scale(r)
      },
      pointToData: function(t, e) {},
      getTicksCoords: function(t) {
        t = t || {}; var e = t.tickModel || this.getTickModel(),
          i = c(this, e),
          n = i.ticks,
          r = a(n, (function(t) {
            return {
              coord: this.dataToCoord(t), tickValue: t,
            }
          }), this),
          o = e.get('alignWithLabel'); return m(this, r, o, t.clamp), r
      },
      getMinorTicksCoords: function() {
        if (this.scale.type === 'ordinal') {return [];} var t = this.model.getModel('minorTick'),
          e = t.get('splitNumber'); e > 0 && e < 100 || (e = 5); var i = this.scale.getMinorTicks(e),
          n = a(i, (function(t) {
            return a(t, (function(t) {
              return {
                coord: this.dataToCoord(t), tickValue: t,
              }
            }), this)
          }), this); return n
      },
      getViewLabels: function() {return d(this).labels},
      getLabelModel: function() {return this.model.getModel('axisLabel')},
      getTickModel: function() {return this.model.getModel('axisTick')},
      getBandWidth: function() {
        var t = this._extent,
          e = this.scale.getExtent(),
          i = e[1] - e[0] + (this.onBand ? 1 : 0); i === 0 && (i = 1); var n = Math.abs(t[1] - t[0]); return Math.abs(n) / i
      },
      isHorizontal: null,
      getRotate: null,
      calculateCategoryInterval: function() {return f(this)},
    }; var y = g; t.exports = y
  },
  '84ec': function(t, e) {
    var i = Math.log(2); function n(t, e, r, a, o, s) {
      var l = a + '-' + o,
        u = t.length; if (s.hasOwnProperty(l)) {return s[l];} if (e === 1) {var h = Math.round(Math.log((1 << u) - 1 & ~o) / i); return t[r][h]} var c = a | 1 << r,
        d = r + 1; while (a & 1 << d) {d++;} for (var f = 0, p = 0, g = 0; p < u; p++) {var v = 1 << p; v & o || (f += (g % 2 ? -1 : 1) * t[r][p] * n(t, e - 1, d, c, o | v, s), g++)} return s[l] = f, f
    } function r(t, e) {
      var i = [[t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]], [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]], [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]], [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]], [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]], [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]], [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]], [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]]],
        r = {},
        a = n(i, 8, 0, 0, 0, r); if (a !== 0) {for (var o = [], s = 0; s < 8; s++) {for (var l = 0; l < 8; l++) {o[l] == null && (o[l] = 0), o[l] += ((s + l) % 2 ? -1 : 1) * n(i, 7, s === 0 ? 1 : 0, 1 << s, 1 << l, r) / a * e[s];}} return function(t, e, i) {var n = e * o[6] + i * o[7] + 1; t[0] = (e * o[0] + i * o[1] + o[2]) / n, t[1] = (e * o[3] + i * o[4] + o[5]) / n}}
    }e.buildTransformer = r
  },
  '857d': function(t, e) {var i = 2 * Math.PI; function n(t) {return t %= i, t < 0 && (t += i), t}e.normalizeRadian = n},
  '862d': function(t, e, i) {
    var n = i('6d8b'),
      r = n.createHashMap,
      a = n.each,
      o = n.isString,
      s = n.defaults,
      l = n.extend,
      u = n.isObject,
      h = n.clone,
      c = i('e0d3'),
      d = c.normalizeToArray,
      f = i('0f99'),
      p = f.guessOrdinal,
      g = f.BE_ORDINAL,
      v = i('ec6f'),
      m = i('2f45'),
      y = m.OTHER_DIMENSIONS,
      x = i('562e'); function _(t, e, i) {
      v.isInstance(e) || (e = v.seriesDataToSource(e)), i = i || {}, t = (t || []).slice(); for (var n = (i.dimsDef || []).slice(), c = r(), f = r(), m = [], _ = b(e, t, n, i.dimCount), S = 0; S < _; S++) {
        var T = n[S] = l({}, u(n[S]) ? n[S] : {
            name: n[S],
          }),
          M = T.name,
          C = m[S] = new x(); M != null && c.get(M) == null && (C.name = C.displayName = M, c.set(M, S)), T.type != null && (C.type = T.type), T.displayName != null && (C.displayName = T.displayName)
      } var I = i.encodeDef; !I && i.encodeDefaulter && (I = i.encodeDefaulter(e, _)), I = r(I), I.each((function(t, e) {if (t = d(t).slice(), t.length === 1 && !o(t[0]) && t[0] < 0) {I.set(e, !1);} else {var i = I.set(e, []); a(t, (function(t, n) {o(t) && (t = c.get(t)), t != null && t < _ && (i[n] = t, k(m[t], e, n))}))}})); var A = 0; function k(t, e, i) {y.get(e) != null ? t.otherDims[e] = i : (t.coordDim = e, t.coordDimIndex = i, f.set(e, !0))}a(t, (function(t, e) {
        var i, n, r; if (o(t)) {i = t, t = {};} else {i = t.name; var l = t.ordinalMeta; t.ordinalMeta = null, t = h(t), t.ordinalMeta = l, n = t.dimsDef, r = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null} var c = I.get(i); if (!1 !== c) {
          c = d(c); if (!c.length) {for (var f = 0; f < (n && n.length || 1); f++) {while (A < m.length && m[A].coordDim != null) {A++;}A < m.length && c.push(A++)}}a(c, (function(e, a) {
            var o = m[e]; if (k(s(o, t), i, a), o.name == null && n) {
              var l = n[a]; !u(l) && (l = {
                name: l,
              }), o.name = o.displayName = l.name, o.defaultTooltip = l.defaultTooltip
            }r && s(o.otherDims, r)
          }))
        }
      })); var D = i.generateCoord,
        O = i.generateCoordCount,
        P = O != null; O = D ? O || 1 : 0; for (var L = D || 'value', E = 0; E < _; E++) {C = m[E] = m[E] || new x(); var R = C.coordDim; R == null && (C.coordDim = w(L, f, P), C.coordDimIndex = 0, (!D || O <= 0) && (C.isExtraCoord = !0), O--), C.name == null && (C.name = w(C.coordDim, c)), C.type != null || p(e, E, C.name) !== g.Must && (!C.isExtraCoord || C.otherDims.itemName == null && C.otherDims.seriesName == null) || (C.type = 'ordinal')} return m
    } function b(t, e, i, n) {var r = Math.max(t.dimensionsDetectCount || 1, e.length, i.length, n || 0); return a(e, (function(t) {var e = t.dimsDef; e && (r = Math.max(r, e.length))})), r} function w(t, e, i) {if (i || e.get(t) != null) {var n = 0; while (e.get(t + n) != null) {n++;}t += n} return e.set(t, !0), t} var S = _; t.exports = S
  },
  8728: function(t, e) {
    function i(t, e, i, n, r, a) {
      if (a > e && a > n || a < e && a < n) {return 0;} if (n === e) {return 0;} var o = n < e ? 1 : -1,
        s = (a - e) / (n - e); s !== 1 && s !== 0 || (o = n < e ? 0.5 : -0.5); var l = s * (i - t) + t; return l === r ? 1 / 0 : l > r ? o : 0
    }t.exports = i
  },
  '87b1': function(t, e, i) {
    var n = i('cbe5'),
      r = i('4fac'),
      a = n.extend({
        type: 'polygon',
        shape: {
          points: null, smooth: !1, smoothConstraint: null,
        },
        buildPath: function(t, e) {r.buildPath(t, e, !0)},
      }); t.exports = a
  },
  '87c3': function(t, e, i) {
    var n = i('6d8b'),
      r = n.map,
      a = i('cccd'),
      o = i('ee1a'),
      s = o.isDimensionStacked; function l(t) {
      return {
        seriesType: t,
        plan: a(),
        reset: function(t) {
          var e = t.getData(),
            i = t.coordinateSystem,
            n = t.pipelineContext,
            a = n.large; if (i) {
            var o = r(i.dimensions, (function(t) {return e.mapDimension(t)})).slice(0, 2),
              l = o.length,
              u = e.getCalculationInfo('stackResultDimension'); return s(e, o[0]) && (o[0] = u), s(e, o[1]) && (o[1] = u), l && {
              progress: h,
            }
          } function h(t, e) {for (var n = t.end - t.start, r = a && new Float32Array(n * l), s = t.start, u = 0, h = [], c = []; s < t.end; s++) {var d; if (l === 1) {var f = e.get(o[0], s); d = !isNaN(f) && i.dataToPoint(f, null, c)} else {f = h[0] = e.get(o[0], s); var p = h[1] = e.get(o[1], s); d = !isNaN(f) && !isNaN(p) && i.dataToPoint(h, null, c)}a ? (r[u++] = d ? d[0] : NaN, r[u++] = d ? d[1] : NaN) : e.setItemLayout(s, d && d.slice() || [NaN, NaN])}a && e.setLayout('symbolPoints', r)}
        },
      }
    }t.exports = l
  },
  '88b3': function(t, e) {
    var i = '\0__throttleOriginMethod',
      n = '\0__throttleRate',
      r = '\0__throttleType'; function a(t, e, i) {
      var n, r, a, o, s,
        l = 0,
        u = 0,
        h = null; function c() {u = (new Date()).getTime(), h = null, t.apply(a, o || [])}e = e || 0; var d = function() {
        n = (new Date()).getTime(), a = this, o = arguments; var t = s || e,
          d = s || i; s = null, r = n - (d ? l : u) - t, clearTimeout(h), d ? h = setTimeout(c, t) : r >= 0 ? c() : h = setTimeout(c, -r), l = n
      }; return d.clear = function() {h && (clearTimeout(h), h = null)}, d.debounceNextCall = function(t) {s = t}, d
    } function o(t, e, o, s) {
      var l = t[e]; if (l) {
        var u = l[i] || l,
          h = l[r],
          c = l[n]; if (c !== o || h !== s) {if (o == null || !s) {return t[e] = u;} l = t[e] = a(u, o, s === 'debounce'), l[i] = u, l[r] = s, l[n] = o} return l
      }
    } function s(t, e) {var n = t[e]; n && n[i] && (t[e] = n[i])}e.throttle = a, e.createOrUpdate = o, e.clear = s
  },
  8918: function(t, e, i) {
    var n = i('6d8b'),
      r = i('625e'),
      a = r.parseClassType,
      o = 0; function s(t) {return [t || '', o++, Math.random().toFixed(5)].join('_')} function l(t) {var e = {}; return t.registerSubTypeDefaulter = function(t, i) {t = a(t), e[t.main] = i}, t.determineSubType = function(i, n) {var r = n.type; if (!r) {var o = a(i).main; t.hasSubTypes(i) && e[o] && (r = e[o](n))} return r}, t} function u(t, e) {
      function i(t) {
        var i = {},
          o = []; return n.each(t, (function(s) {
          var l = r(i, s),
            u = l.originalDeps = e(s),
            h = a(u, t); l.entryCount = h.length, l.entryCount === 0 && o.push(s), n.each(h, (function(t) {n.indexOf(l.predecessor, t) < 0 && l.predecessor.push(t); var e = r(i, t); n.indexOf(e.successor, t) < 0 && e.successor.push(s)}))
        })), {
          graph: i, noEntryList: o,
        }
      } function r(t, e) {
        return t[e] || (t[e] = {
          predecessor: [], successor: [],
        }), t[e]
      } function a(t, e) {var i = []; return n.each(t, (function(t) {n.indexOf(e, t) >= 0 && i.push(t)})), i}t.topologicalTravel = function(t, e, r, a) {
        if (t.length) {
          var o = i(e),
            s = o.graph,
            l = o.noEntryList,
            u = {}; n.each(t, (function(t) {u[t] = !0})); while (l.length) {
            var h = l.pop(),
              c = s[h],
              d = !!u[h]; d && (r.call(a, h, c.originalDeps.slice()), delete u[h]), n.each(c.successor, d ? p : f)
          }n.each(u, (function() {throw new Error('Circle dependency may exists')}))
        } function f(t) {s[t].entryCount--, s[t].entryCount === 0 && l.push(t)} function p(t) {u[t] = !0, f(t)}
      }
    }e.getUID = s, e.enableSubTypeDefaulter = l, e.enableTopologicalTravel = u
  },
  8971: function(t, e) {
    var i = ''; typeof navigator !== 'undefined' && (i = navigator.platform || ''); var n = {
      color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
      gradientColor: ['#f6efa6', '#d88273', '#bf444c'],
      textStyle: {
        fontFamily: i.match(/^Win/) ? 'Microsoft YaHei' : 'sans-serif', fontSize: 12, fontStyle: 'normal', fontWeight: 'normal',
      },
      blendMode: null,
      animation: 'auto',
      animationDuration: 1e3,
      animationDurationUpdate: 300,
      animationEasing: 'exponentialOut',
      animationEasingUpdate: 'cubicOut',
      animationThreshold: 2e3,
      progressiveThreshold: 3e3,
      progressive: 400,
      hoverLayerThreshold: 3e3,
      useUTC: !1,
    }; t.exports = n
  },
  '897a': function(t, e, i) {
    var n = i('22d1'),
      r = [['shadowBlur', 0], ['shadowColor', '#000'], ['shadowOffsetX', 0], ['shadowOffsetY', 0]]; function a(t) {
      return n.browser.ie && n.browser.version >= 11 ? function() {
        var e,
          i = this.__clipPaths,
          n = this.style; if (i) {
          for (var a = 0; a < i.length; a++) {
            var o = i[a],
              s = o && o.shape,
              l = o && o.type; if (s && (l === 'sector' && s.startAngle === s.endAngle || l === 'rect' && (!s.width || !s.height))) {for (var u = 0; u < r.length; u++) {r[u][2] = n[r[u][0]], n[r[u][0]] = r[u][1];}e = !0; break}
          }
        } if (t.apply(this, arguments), e) {for (u = 0; u < r.length; u++) {n[r[u][0]] = r[u][2]}}
      } : t
    }t.exports = a
  },
  '89e3': function(t, e, i) {
    var n = i('3842'),
      r = i('eda2'),
      a = i('e0d8'),
      o = i('944e'),
      s = n.round,
      l = a.extend({
        type: 'interval',
        _interval: 0,
        _intervalPrecision: 2,
        setExtent: function(t, e) {var i = this._extent; isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e))},
        unionExtent: function(t) {var e = this._extent; t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), l.prototype.setExtent.call(this, e[0], e[1])},
        getInterval: function() {return this._interval},
        setInterval: function(t) {this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = o.getIntervalPrecision(t)},
        getTicks: function(t) {
          var e = this._interval,
            i = this._extent,
            n = this._niceExtent,
            r = this._intervalPrecision,
            a = []; if (!e) {return a;} var o = 1e4; i[0] < n[0] && (t ? a.push(s(n[0] - e, r)) : a.push(i[0])); var l = n[0]; while (l <= n[1]) {if (a.push(l), l = s(l + e, r), l === a[a.length - 1]) {break;} if (a.length > o) {return []}} var u = a.length ? a[a.length - 1] : n[1]; return i[1] > u && (t ? a.push(s(u + e, r)) : a.push(i[1])), a
        },
        getMinorTicks: function(t) {
          for (var e = this.getTicks(!0), i = [], r = this.getExtent(), a = 1; a < e.length; a++) {
            var o = e[a],
              s = e[a - 1],
              l = 0,
              u = [],
              h = o - s,
              c = h / t; while (l < t - 1) {var d = n.round(s + (l + 1) * c); d > r[0] && d < r[1] && u.push(d), l++}i.push(u)
          } return i
        },
        getLabel: function(t, e) {if (t == null) {return '';} var i = e && e.precision; return i == null ? i = n.getPrecisionSafe(t) || 0 : i === 'auto' && (i = this._intervalPrecision), t = s(t, i, !0), r.addCommas(t)},
        niceTicks: function(t, e, i) {
          t = t || 5; var n = this._extent,
            r = n[1] - n[0]; if (isFinite(r)) {r < 0 && (r = -r, n.reverse()); var a = o.intervalScaleNiceTicks(n, t, e, i); this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent}
        },
        niceExtent: function(t) {var e = this._extent; if (e[0] === e[1]) {if (e[0] !== 0) {var i = e[0]; t.fixMax || (e[1] += i / 2), e[0] -= i / 2} else {e[1] = 1;}} var n = e[1] - e[0]; isFinite(n) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval); var r = this._interval; t.fixMin || (e[0] = s(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = s(Math.ceil(e[1] / r) * r))},
      }); l.create = function() {return new l()}; var u = l; t.exports = u
  },
  '8b7f': function(t, e, i) {
    var n = i('4e08'),
      r = (n.__DEV__, i('6d8b')),
      a = r.createHashMap,
      o = (r.retrieve, r.each); function s(t) {this.coordSysName = t, this.coordSysDims = [], this.axisMap = a(), this.categoryAxisMap = a(), this.firstCategoryDimIndex = null} function l(t) {
      var e = t.get('coordinateSystem'),
        i = new s(e),
        n = u[e]; if (n) {return n(t, i, i.axisMap, i.categoryAxisMap), i}
    } var u = {
      cartesian2d: function(t, e, i, n) {
        var r = t.getReferringComponents('xAxis')[0],
          a = t.getReferringComponents('yAxis')[0]; e.coordSysDims = ['x', 'y'], i.set('x', r), i.set('y', a), h(r) && (n.set('x', r), e.firstCategoryDimIndex = 0), h(a) && (n.set('y', a), e.firstCategoryDimIndex, e.firstCategoryDimIndex = 1)
      },
      singleAxis: function(t, e, i, n) {var r = t.getReferringComponents('singleAxis')[0]; e.coordSysDims = ['single'], i.set('single', r), h(r) && (n.set('single', r), e.firstCategoryDimIndex = 0)},
      polar: function(t, e, i, n) {
        var r = t.getReferringComponents('polar')[0],
          a = r.findAxisModel('radiusAxis'),
          o = r.findAxisModel('angleAxis'); e.coordSysDims = ['radius', 'angle'], i.set('radius', a), i.set('angle', o), h(a) && (n.set('radius', a), e.firstCategoryDimIndex = 0), h(o) && (n.set('angle', o), e.firstCategoryDimIndex == null && (e.firstCategoryDimIndex = 1))
      },
      geo: function(t, e, i, n) {e.coordSysDims = ['lng', 'lat']},
      parallel: function(t, e, i, n) {
        var r = t.ecModel,
          a = r.getComponent('parallel', t.get('parallelIndex')),
          s = e.coordSysDims = a.dimensions.slice(); o(a.parallelAxisIndex, (function(t, a) {
          var o = r.getComponent('parallelAxis', t),
            l = s[a]; i.set(l, o), h(o) && e.firstCategoryDimIndex == null && (n.set(l, o), e.firstCategoryDimIndex = a)
        }))
      },
    }; function h(t) {return t.get('type') === 'category'}e.getCoordSysInfoBySeries = l
  },
  '8c2a': function(t, e, i) {
    var n = i('6d8b'),
      r = i('e0d8'),
      a = i('3842'),
      o = i('89e3'),
      s = r.prototype,
      l = o.prototype,
      u = a.getPrecisionSafe,
      h = a.round,
      c = Math.floor,
      d = Math.ceil,
      f = Math.pow,
      p = Math.log,
      g = r.extend({
        type: 'log',
        base: 10,
        $constructor: function() {r.apply(this, arguments), this._originalScale = new o()},
        getTicks: function(t) {
          var e = this._originalScale,
            i = this._extent,
            r = e.getExtent(); return n.map(l.getTicks.call(this, t), (function(t) {var n = a.round(f(this.base, t)); return n = t === i[0] && e.__fixMin ? v(n, r[0]) : n, n = t === i[1] && e.__fixMax ? v(n, r[1]) : n, n}), this)
        },
        getMinorTicks: l.getMinorTicks,
        getLabel: l.getLabel,
        scale: function(t) {return t = s.scale.call(this, t), f(this.base, t)},
        setExtent: function(t, e) {var i = this.base; t = p(t) / p(i), e = p(e) / p(i), l.setExtent.call(this, t, e)},
        getExtent: function() {
          var t = this.base,
            e = s.getExtent.call(this); e[0] = f(t, e[0]), e[1] = f(t, e[1]); var i = this._originalScale,
            n = i.getExtent(); return i.__fixMin && (e[0] = v(e[0], n[0])), i.__fixMax && (e[1] = v(e[1], n[1])), e
        },
        unionExtent: function(t) {this._originalScale.unionExtent(t); var e = this.base; t[0] = p(t[0]) / p(e), t[1] = p(t[1]) / p(e), s.unionExtent.call(this, t)},
        unionExtentFromData: function(t, e) {this.unionExtent(t.getApproximateExtent(e))},
        niceTicks: function(t) {
          t = t || 10; var e = this._extent,
            i = e[1] - e[0]; if (!(i === 1 / 0 || i <= 0)) {
            var n = a.quantity(i),
              r = t / i * n; r <= 0.5 && (n *= 10); while (!isNaN(n) && Math.abs(n) < 1 && Math.abs(n) > 0) {n *= 10;} var o = [a.round(d(e[0] / n) * n), a.round(c(e[1] / n) * n)]; this._interval = n, this._niceExtent = o
          }
        },
        niceExtent: function(t) {l.niceExtent.call(this, t); var e = this._originalScale; e.__fixMin = t.fixMin, e.__fixMax = t.fixMax},
      }); function v(t, e) {return h(t, u(e))}n.each(['contain', 'normalize'], (function(t) {g.prototype[t] = function(e) {return e = p(e) / p(this.base), s[t].call(this, e)}})), g.create = function() {return new g()}; var m = g; t.exports = m
  },
  '8d32': function(t, e, i) {
    var n = i('cbe5'),
      r = n.extend({
        type: 'arc',
        shape: {
          cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0,
        },
        style: {
          stroke: '#000', fill: null,
        },
        buildPath: function(t, e) {
          var i = e.cx,
            n = e.cy,
            r = Math.max(e.r, 0),
            a = e.startAngle,
            o = e.endAngle,
            s = e.clockwise,
            l = Math.cos(a),
            u = Math.sin(a); t.moveTo(l * r + i, u * r + n), t.arc(i, n, r, a, o, !s)
        },
      }); t.exports = r
  },
  '8e43': function(t, e, i) {
    var n = i('6d8b'),
      r = n.createHashMap,
      a = n.isObject,
      o = n.map; function s(t) {this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map}s.createByAxisModel = function(t) {
      var e = t.option,
        i = e.data,
        n = i && o(i, h); return new s({
        categories: n, needCollect: !n, deduplication: !1 !== e.dedplication,
      })
    }; var l = s.prototype; function u(t) {return t._map || (t._map = r(t.categories))} function h(t) {return a(t) && t.value != null ? t.value : t + ''}l.getOrdinal = function(t) {return u(this).get(t)}, l.parseAndCollect = function(t) {
      var e,
        i = this._needCollect; if (typeof t !== 'string' && !i) {return t;} if (i && !this._deduplication) {return e = this.categories.length, this.categories[e] = t, e;} var n = u(this); return e = n.get(t), e == null && (i ? (e = this.categories.length, this.categories[e] = t, n.set(t, e)) : e = NaN), e
    }; var c = s; t.exports = c
  },
  '8ed2': function(t, e, i) {
    i('48c7'); var n = i('6cb7'),
      r = n.extend({
        type: 'grid',
        dependencies: ['xAxis', 'yAxis'],
        layoutMode: 'box',
        coordinateSystem: null,
        defaultOption: {
          show: !1, zlevel: 0, z: 0, left: '10%', top: 60, right: '10%', bottom: 60, containLabel: !1, backgroundColor: 'rgba(0,0,0,0)', borderWidth: 1, borderColor: '#ccc',
        },
      }); t.exports = r
  },
  '93d0': function(t, e) {
    var i = 'original',
      n = 'arrayRows',
      r = 'objectRows',
      a = 'keyedColumns',
      o = 'unknown',
      s = 'typedArray',
      l = 'column',
      u = 'row'; e.SOURCE_FORMAT_ORIGINAL = i, e.SOURCE_FORMAT_ARRAY_ROWS = n, e.SOURCE_FORMAT_OBJECT_ROWS = r, e.SOURCE_FORMAT_KEYED_COLUMNS = a, e.SOURCE_FORMAT_UNKNOWN = o, e.SOURCE_FORMAT_TYPED_ARRAY = s, e.SERIES_LAYOUT_BY_COLUMN = l, e.SERIES_LAYOUT_BY_ROW = u
  },
  '944e': function(t, e, i) {
    var n = i('3842'),
      r = n.round; function a(t, e, i, a) {
      var s = {},
        u = t[1] - t[0],
        h = s.interval = n.nice(u / e, !0); i != null && h < i && (h = s.interval = i), a != null && h > a && (h = s.interval = a); var c = s.intervalPrecision = o(h),
        d = s.niceTickExtent = [r(Math.ceil(t[0] / h) * h, c), r(Math.floor(t[1] / h) * h, c)]; return l(d, t), s
    } function o(t) {return n.getPrecisionSafe(t) + 2} function s(t, e, i) {t[e] = Math.max(Math.min(t[e], i[1]), i[0])} function l(t, e) {!isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), s(t, 0, e), s(t, 1, e), t[0] > t[1] && (t[0] = t[1])}e.intervalScaleNiceTicks = a, e.getIntervalPrecision = o, e.fixExtent = l
  },
  9680: function(t, e) {
    function i(t, e, i, n, r, a, o) {
      if (r === 0) {return !1;} var s = r,
        l = 0,
        u = t; if (o > e + s && o > n + s || o < e - s && o < n - s || a > t + s && a > i + s || a < t - s && a < i - s) {return !1;} if (t === i) {return Math.abs(a - t) <= s / 2;} l = (e - n) / (t - i), u = (t * n - i * e) / (t - i); var h = l * a - o + u,
        c = h * h / (l * l + 1); return c <= s / 2 * s / 2
    }e.containStroke = i
  },
  9850: function(t, e, i) {
    var n = i('401b'),
      r = i('1687'),
      a = n.applyTransform,
      o = Math.min,
      s = Math.max; function l(t, e, i, n) {i < 0 && (t += i, i = -i), n < 0 && (e += n, n = -n), this.x = t, this.y = e, this.width = i, this.height = n}l.prototype = {
      constructor: l,
      union: function(t) {
        var e = o(t.x, this.x),
          i = o(t.y, this.y); this.width = s(t.x + t.width, this.x + this.width) - e, this.height = s(t.y + t.height, this.y + this.height) - i, this.x = e, this.y = i
      },
      applyTransform: (function() {
        var t = [],
          e = [],
          i = [],
          n = []; return function(r) {
          if (r) {
            t[0] = i[0] = this.x, t[1] = n[1] = this.y, e[0] = n[0] = this.x + this.width, e[1] = i[1] = this.y + this.height, a(t, t, r), a(e, e, r), a(i, i, r), a(n, n, r), this.x = o(t[0], e[0], i[0], n[0]), this.y = o(t[1], e[1], i[1], n[1]); var l = s(t[0], e[0], i[0], n[0]),
              u = s(t[1], e[1], i[1], n[1]); this.width = l - this.x, this.height = u - this.y
          }
        }
      }()),
      calculateTransform: function(t) {
        var e = this,
          i = t.width / e.width,
          n = t.height / e.height,
          a = r.create(); return r.translate(a, a, [-e.x, -e.y]), r.scale(a, a, [i, n]), r.translate(a, a, [t.x, t.y]), a
      },
      intersect: function(t) {
        if (!t) {return !1;} t instanceof l || (t = l.create(t)); var e = this,
          i = e.x,
          n = e.x + e.width,
          r = e.y,
          a = e.y + e.height,
          o = t.x,
          s = t.x + t.width,
          u = t.y,
          h = t.y + t.height; return !(n < o || s < i || a < u || h < r)
      },
      contain: function(t, e) {var i = this; return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height},
      clone: function() {return new l(this.x, this.y, this.width, this.height)},
      copy: function(t) {this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height},
      plain: function() {
        return {
          x: this.x, y: this.y, width: this.width, height: this.height,
        }
      },
    }, l.create = function(t) {return new l(t.x, t.y, t.width, t.height)}; var u = l; t.exports = u
  },
  '98b7': function(t, e) {var i = typeof window !== 'undefined' && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {setTimeout(t, 16)}; t.exports = i},
  '998c': function(t, e, i) {
    var n = i('6d8b'),
      r = i('2306'),
      a = Math.PI; function o(t, e) {
      e = e || {}, n.defaults(e, {
        text: 'loading', color: '#c23531', textColor: '#000', maskColor: 'rgba(255, 255, 255, 0.8)', zlevel: 0,
      }); var i = new r.Rect({
          style: {
            fill: e.maskColor,
          },
          zlevel: e.zlevel,
          z: 1e4,
        }),
        o = new r.Arc({
          shape: {
            startAngle: -a / 2, endAngle: -a / 2 + 0.1, r: 10,
          },
          style: {
            stroke: e.color, lineCap: 'round', lineWidth: 5,
          },
          zlevel: e.zlevel,
          z: 10001,
        }),
        s = new r.Rect({
          style: {
            fill: 'none', text: e.text, textPosition: 'right', textDistance: 10, textFill: e.textColor,
          },
          zlevel: e.zlevel,
          z: 10001,
        }); o.animateShape(!0).when(1e3, {
        endAngle: 3 * a / 2,
      })
        .start('circularInOut'), o.animateShape(!0).when(1e3, {
        startAngle: 3 * a / 2,
      })
        .delay(300)
        .start('circularInOut'); var l = new r.Group(); return l.add(o), l.add(s), l.add(i), l.resize = function() {
        var e = t.getWidth() / 2,
          n = t.getHeight() / 2; o.setShape({
          cx: e, cy: n,
        }); var r = o.shape.r; s.setShape({
          x: e - r, y: n - r, width: 2 * r, height: 2 * r,
        }), i.setShape({
          x: 0, y: 0, width: t.getWidth(), height: t.getHeight(),
        })
      }, l.resize(), l
    }t.exports = o
  },
  '9bdb': function(t, e, i) {
    var n = i('282b'),
      r = n([['fill', 'color'], ['shadowBlur'], ['shadowOffsetX'], ['shadowOffsetY'], ['opacity'], ['shadowColor']]),
      a = {
        getAreaStyle: function(t, e) {return r(this, t, e)},
      }; t.exports = a
  },
  '9c2c': function(t, e, i) {
    var n = i('401b'),
      r = n.min,
      a = n.max,
      o = n.scale,
      s = n.distance,
      l = n.add,
      u = n.clone,
      h = n.sub; function c(t, e, i, n) {
      var c, d, f, p,
        g = [],
        v = [],
        m = [],
        y = []; if (n) {f = [1 / 0, 1 / 0], p = [-1 / 0, -1 / 0]; for (var x = 0, _ = t.length; x < _; x++) {r(f, f, t[x]), a(p, p, t[x]);}r(f, f, n[0]), a(p, p, n[1])} for (x = 0, _ = t.length; x < _; x++) {
        var b = t[x]; if (i) {c = t[x ? x - 1 : _ - 1], d = t[(x + 1) % _];} else {if (x === 0 || x === _ - 1) {g.push(u(t[x])); continue}c = t[x - 1], d = t[x + 1]}h(v, d, c), o(v, v, e); var w = s(b, c),
          S = s(b, d),
          T = w + S; T !== 0 && (w /= T, S /= T), o(m, v, -w), o(y, v, S); var M = l([], b, m),
          C = l([], b, y); n && (a(M, M, f), r(M, M, p), a(C, C, f), r(C, C, p)), g.push(M), g.push(C)
      } return i && g.push(g.shift()), g
    }t.exports = c
  },
  '9cf9': function(t, e) {
    var i = Math.round; function n(t, e, n) {
      if (e) {
        var r = e.x1,
          o = e.x2,
          s = e.y1,
          l = e.y2; t.x1 = r, t.x2 = o, t.y1 = s, t.y2 = l; var u = n && n.lineWidth; u && (i(2 * r) === i(2 * o) && (t.x1 = t.x2 = a(r, u, !0)), i(2 * s) === i(2 * l) && (t.y1 = t.y2 = a(s, u, !0)))
      }
    } function r(t, e, i) {
      if (e) {
        var n = e.x,
          r = e.y,
          o = e.width,
          s = e.height; t.x = n, t.y = r, t.width = o, t.height = s; var l = i && i.lineWidth; l && (t.x = a(n, l, !0), t.y = a(r, l, !0), t.width = Math.max(a(n + o, l, !1) - t.x, o === 0 ? 0 : 1), t.height = Math.max(a(r + s, l, !1) - t.y, s === 0 ? 0 : 1))
      }
    } function a(t, e, n) {if (!e) {return t;} var r = i(2 * t); return (r + i(e)) % 2 === 0 ? r / 2 : (r + (n ? 1 : -1)) / 2}e.subPixelOptimizeLine = n, e.subPixelOptimizeRect = r, e.subPixelOptimize = a
  },
  '9d57': function(t, e, i) {
    var n = i('6d8b'),
      r = i('3842'),
      a = r.parsePercent,
      o = i('ee1a'),
      s = o.isDimensionStacked,
      l = i('cccd'),
      u = '__ec_stack_',
      h = 0.5,
      c = typeof Float32Array !== 'undefined' ? Float32Array : Array; function d(t) {return t.get('stack') || u + t.seriesIndex} function f(t) {return t.dim + t.index} function p(t) {
      var e = [],
        i = t.axis,
        r = 'axis0'; if (i.type === 'category') {
        for (var a = i.getBandWidth(), o = 0; o < t.count; o++) {
          e.push(n.defaults({
            bandWidth: a, axisKey: r, stackId: u + o,
          }, t));
        } var s = y(e),
          l = []; for (o = 0; o < t.count; o++) {var h = s[r][u + o]; h.offsetCenter = h.offset + h.width / 2, l.push(h)} return l
      }
    } function g(t, e) {var i = []; return e.eachSeriesByType(t, (function(t) {w(t) && !S(t) && i.push(t)})), i} function v(t) {
      var e = {}; n.each(t, (function(t) {
        var i = t.coordinateSystem,
          n = i.getBaseAxis(); if (n.type === 'time' || n.type === 'value') {for (var r = t.getData(), a = n.dim + '_' + n.index, o = r.mapDimension(n.dim), s = 0, l = r.count(); s < l; ++s) {var u = r.get(o, s); e[a] ? e[a].push(u) : e[a] = [u]}}
      })); var i = []; for (var r in e) {if (e.hasOwnProperty(r)) {var a = e[r]; if (a) {a.sort((function(t, e) {return t - e})); for (var o = null, s = 1; s < a.length; ++s) {var l = a[s] - a[s - 1]; l > 0 && (o = o === null ? l : Math.min(o, l))}i[r] = o}}} return i
    } function m(t) {
      var e = v(t),
        i = []; return n.each(t, (function(t) {
        var n,
          r = t.coordinateSystem,
          o = r.getBaseAxis(),
          s = o.getExtent(); if (o.type === 'category') {n = o.getBandWidth();} else if (o.type === 'value' || o.type === 'time') {
          var l = o.dim + '_' + o.index,
            u = e[l],
            h = Math.abs(s[1] - s[0]),
            c = o.scale.getExtent(),
            p = Math.abs(c[1] - c[0]); n = u ? h / p * u : h
        } else {var g = t.getData(); n = Math.abs(s[1] - s[0]) / g.count()} var v = a(t.get('barWidth'), n),
          m = a(t.get('barMaxWidth'), n),
          y = a(t.get('barMinWidth') || 1, n),
          x = t.get('barGap'),
          _ = t.get('barCategoryGap'); i.push({
          bandWidth: n, barWidth: v, barMaxWidth: m, barMinWidth: y, barGap: x, barCategoryGap: _, axisKey: f(o), stackId: d(t),
        })
      })), y(i)
    } function y(t) {
      var e = {}; n.each(t, (function(t, i) {
        var n = t.axisKey,
          r = t.bandWidth,
          a = e[n] || {
            bandWidth: r, remainedWidth: r, autoWidthCount: 0, categoryGap: '20%', gap: '30%', stacks: {},
          },
          o = a.stacks; e[n] = a; var s = t.stackId; o[s] || a.autoWidthCount++, o[s] = o[s] || {
          width: 0, maxWidth: 0,
        }; var l = t.barWidth; l && !o[s].width && (o[s].width = l, l = Math.min(a.remainedWidth, l), a.remainedWidth -= l); var u = t.barMaxWidth; u && (o[s].maxWidth = u); var h = t.barMinWidth; h && (o[s].minWidth = h); var c = t.barGap; c != null && (a.gap = c); var d = t.barCategoryGap; d != null && (a.categoryGap = d)
      })); var i = {}; return n.each(e, (function(t, e) {
        i[e] = {}; var r = t.stacks,
          o = t.bandWidth,
          s = a(t.categoryGap, o),
          l = a(t.gap, 1),
          u = t.remainedWidth,
          h = t.autoWidthCount,
          c = (u - s) / (h + (h - 1) * l); c = Math.max(c, 0), n.each(r, (function(t) {
          var e = t.maxWidth,
            i = t.minWidth; if (t.width) {n = t.width; e && (n = Math.min(n, e)), i && (n = Math.max(n, i)), t.width = n, u -= n + l * n, h--} else {var n = c; e && e < n && (n = Math.min(e, u)), i && i > n && (n = i), n !== c && (t.width = n, u -= n + l * n, h--)}
        })), c = (u - s) / (h + (h - 1) * l), c = Math.max(c, 0); var d,
          f = 0; n.each(r, (function(t, e) {t.width || (t.width = c), d = t, f += t.width * (1 + l)})), d && (f -= d.width * l); var p = -f / 2; n.each(r, (function(t, n) {
          i[e][n] = i[e][n] || {
            bandWidth: o, offset: p, width: t.width,
          }, p += t.width * (1 + l)
        }))
      })), i
    } function x(t, e, i) {if (t && e) {var n = t[f(e)]; return n != null && i != null && (n = n[d(i)]), n}} function _(t, e) {
      var i = g(t, e),
        r = m(i),
        a = {},
        o = {}; n.each(i, (function(t) {
        var e = t.getData(),
          i = t.coordinateSystem,
          n = i.getBaseAxis(),
          l = d(t),
          u = r[f(n)][l],
          h = u.offset,
          c = u.width,
          p = i.getOtherAxis(n),
          g = t.get('barMinHeight') || 0; a[l] = a[l] || [], o[l] = o[l] || [], e.setLayout({
          bandWidth: u.bandWidth, offset: h, size: c,
        }); for (var v = e.mapDimension(p.dim), m = e.mapDimension(n.dim), y = s(e, v), x = p.isHorizontal(), _ = T(n, p, y), b = 0, w = e.count(); b < w; b++) {
          var S, M, C, I,
            A = e.get(v, b),
            k = e.get(m, b),
            D = A >= 0 ? 'p' : 'n',
            O = _; if (y && (a[l][k] || (a[l][k] = {
            p: _, n: _,
          }), O = a[l][k][D]), x) {var P = i.dataToPoint([A, k]); S = O, M = P[1] + h, C = P[0] - _, I = c, Math.abs(C) < g && (C = (C < 0 ? -1 : 1) * g), isNaN(C) || y && (a[l][k][D] += C)} else {P = i.dataToPoint([k, A]); S = P[0] + h, M = O, C = c, I = P[1] - _, Math.abs(I) < g && (I = (I <= 0 ? -1 : 1) * g), isNaN(I) || y && (a[l][k][D] += I)}e.setItemLayout(b, {
            x: S, y: M, width: C, height: I,
          })
        }
      }), this)
    } var b = {
      seriesType: 'bar',
      plan: l(),
      reset: function(t) {
        if (w(t) && S(t)) {
          var e = t.getData(),
            i = t.coordinateSystem,
            n = i.grid.getRect(),
            r = i.getBaseAxis(),
            a = i.getOtherAxis(r),
            o = e.mapDimension(a.dim),
            s = e.mapDimension(r.dim),
            l = a.isHorizontal(),
            u = l ? 0 : 1,
            d = x(m([t]), r, t).width; return d > h || (d = h), {
            progress: f,
          }
        } function f(t, e) {
          var h,
            f = t.count,
            p = new c(2 * f),
            g = new c(2 * f),
            v = new c(f),
            m = [],
            y = [],
            x = 0,
            _ = 0; while ((h = t.next()) != null) {y[u] = e.get(o, h), y[1 - u] = e.get(s, h), m = i.dataToPoint(y, null, m), g[x] = l ? n.x + n.width : m[0], p[x++] = m[0], g[x] = l ? m[1] : n.y + n.height, p[x++] = m[1], v[_++] = h;}e.setLayout({
            largePoints: p, largeDataIndices: v, largeBackgroundPoints: g, barWidth: d, valueAxisStart: T(r, a, !1), backgroundStart: l ? n.x : n.y, valueAxisHorizontal: l,
          })
        }
      },
    }; function w(t) {return t.coordinateSystem && t.coordinateSystem.type === 'cartesian2d'} function S(t) {return t.pipelineContext && t.pipelineContext.large} function T(t, e, i) {return e.toGlobalCoord(e.dataToCoord(e.type === 'log' ? 1 : 0))}e.getLayoutOnAxis = p, e.prepareLayoutBarSeries = g, e.makeColumnLayout = m, e.retrieveColumnLayout = x, e.layout = _, e.largeLayout = b
  },
  '9e2e': function(t, e, i) {
    var n = i('a73c'),
      r = i('9850'),
      a = i('82eb'),
      o = a.WILL_BE_RESTORED,
      s = new r(),
      l = function() {}; l.prototype = {
      constructor: l, drawRectText: function(t, e) {var i = this.style; e = i.textRect || e, this.__dirty && n.normalizeTextStyle(i, !0); var r = i.text; if (r != null && (r += ''), n.needDrawText(r, i)) {t.save(); var a = this.transform; i.transformText ? this.setTransform(t) : a && (s.copy(e), s.applyTransform(a), e = s), n.renderText(this, t, r, i, e, o), t.restore()}},
    }; var u = l; t.exports = u
  },
  '9e47': function(t, e, i) {
    var n = i('6d8b'),
      r = i('71ad'),
      a = i('6cb7'),
      o = i('f934'),
      s = o.getLayoutParams,
      l = o.mergeLayoutParam,
      u = i('8e43'),
      h = ['value', 'category', 'time', 'log']; function c(t, e, i, o) {
      n.each(h, (function(a) {
        e.extend({
          type: t + 'Axis.' + a,
          mergeDefaultAndTheme: function(e, r) {
            var o = this.layoutMode,
              u = o ? s(e) : {},
              h = r.getTheme(); n.merge(e, h.get(a + 'Axis')), n.merge(e, this.getDefaultOption()), e.type = i(t, e), o && l(e, u, o)
          },
          optionUpdated: function() {var t = this.option; t.type === 'category' && (this.__ordinalMeta = u.createByAxisModel(this))},
          getCategories: function(t) {var e = this.option; if (e.type === 'category') {return t ? e.data : this.__ordinalMeta.categories}},
          getOrdinalMeta: function() {return this.__ordinalMeta},
          defaultOption: n.mergeAll([{}, r[a + 'Axis'], o], !0),
        })
      })), a.registerSubTypeDefaulter(t + 'Axis', n.curry(i, t))
    }t.exports = c
  },
  '9f51': function(t, e, i) {
    var n = i('857d'),
      r = n.normalizeRadian,
      a = 2 * Math.PI; function o(t, e, i, n, o, s, l, u, h) {if (l === 0) {return !1;} var c = l; u -= t, h -= e; var d = Math.sqrt(u * u + h * h); if (d - c > i || d + c < i) {return !1;} if (Math.abs(n - o) % a < 1e-4) {return !0;} if (s) {var f = n; n = r(o), o = r(f)} else {n = r(n), o = r(o);}n > o && (o += a); var p = Math.atan2(h, u); return p < 0 && (p += a), p >= n && p <= o || p + a >= n && p + a <= o}e.containStroke = o
  },
  '9f82': function(t, e, i) {
    var n = i('ee1a'),
      r = n.isDimensionStacked,
      a = i('6d8b'),
      o = a.map; function s(t, e, i) {
      var n,
        a = t.getBaseAxis(),
        s = t.getOtherAxis(a),
        u = l(s, i),
        h = a.dim,
        c = s.dim,
        d = e.mapDimension(c),
        f = e.mapDimension(h),
        p = c === 'x' || c === 'radius' ? 1 : 0,
        g = o(t.dimensions, (function(t) {return e.mapDimension(t)})),
        v = e.getCalculationInfo('stackResultDimension'); return (n |= r(e, g[0])) && (g[0] = v), (n |= r(e, g[1])) && (g[1] = v), {
        dataDimsForPoint: g, valueStart: u, valueAxisDim: c, baseAxisDim: h, stacked: !!n, valueDim: d, baseDim: f, baseDataOffset: p, stackedOverDimension: e.getCalculationInfo('stackedOverDimension'),
      }
    } function l(t, e) {
      var i = 0,
        n = t.scale.getExtent(); return e === 'start' ? i = n[0] : e === 'end' ? i = n[1] : n[0] > 0 ? i = n[0] : n[1] < 0 && (i = n[1]), i
    } function u(t, e, i, n) {
      var r = NaN; t.stacked && (r = i.get(i.getCalculationInfo('stackedOverDimension'), n)), isNaN(r) && (r = t.valueStart); var a = t.baseDataOffset,
        o = []; return o[a] = i.get(t.baseDim, n), o[1 - a] = r, e.dataToPoint(o)
    }e.prepareDataCoordInfo = s, e.getStackedOnPoint = u
  },
  a15a: function(t, e, i) {
    var n = i('6d8b'),
      r = i('2306'),
      a = i('9850'),
      o = i('e86a'),
      s = o.calculateTextPosition,
      l = r.extendShape({
        type: 'triangle',
        shape: {
          cx: 0, cy: 0, width: 0, height: 0,
        },
        buildPath: function(t, e) {
          var i = e.cx,
            n = e.cy,
            r = e.width / 2,
            a = e.height / 2; t.moveTo(i, n - a), t.lineTo(i + r, n + a), t.lineTo(i - r, n + a), t.closePath()
        },
      }),
      u = r.extendShape({
        type: 'diamond',
        shape: {
          cx: 0, cy: 0, width: 0, height: 0,
        },
        buildPath: function(t, e) {
          var i = e.cx,
            n = e.cy,
            r = e.width / 2,
            a = e.height / 2; t.moveTo(i, n - a), t.lineTo(i + r, n), t.lineTo(i, n + a), t.lineTo(i - r, n), t.closePath()
        },
      }),
      h = r.extendShape({
        type: 'pin',
        shape: {
          x: 0, y: 0, width: 0, height: 0,
        },
        buildPath: function(t, e) {
          var i = e.x,
            n = e.y,
            r = e.width / 5 * 3,
            a = Math.max(r, e.height),
            o = r / 2,
            s = o * o / (a - o),
            l = n - a + o + s,
            u = Math.asin(s / o),
            h = Math.cos(u) * o,
            c = Math.sin(u),
            d = Math.cos(u),
            f = 0.6 * o,
            p = 0.7 * o; t.moveTo(i - h, l + s), t.arc(i, l, o, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(i + h - c * f, l + s + d * f, i, n - p, i, n), t.bezierCurveTo(i, n - p, i - h + c * f, l + s + d * f, i - h, l + s), t.closePath()
        },
      }),
      c = r.extendShape({
        type: 'arrow',
        shape: {
          x: 0, y: 0, width: 0, height: 0,
        },
        buildPath: function(t, e) {
          var i = e.height,
            n = e.width,
            r = e.x,
            a = e.y,
            o = n / 3 * 2; t.moveTo(r, a), t.lineTo(r + o, a + i), t.lineTo(r, a + i / 4 * 3), t.lineTo(r - o, a + i), t.lineTo(r, a), t.closePath()
        },
      }),
      d = {
        line: r.Line, rect: r.Rect, roundRect: r.Rect, square: r.Rect, circle: r.Circle, diamond: u, pin: h, arrow: c, triangle: l,
      },
      f = {
        line: function(t, e, i, n, r) {r.x1 = t, r.y1 = e + n / 2, r.x2 = t + i, r.y2 = e + n / 2}, rect: function(t, e, i, n, r) {r.x = t, r.y = e, r.width = i, r.height = n}, roundRect: function(t, e, i, n, r) {r.x = t, r.y = e, r.width = i, r.height = n, r.r = Math.min(i, n) / 4}, square: function(t, e, i, n, r) {var a = Math.min(i, n); r.x = t, r.y = e, r.width = a, r.height = a}, circle: function(t, e, i, n, r) {r.cx = t + i / 2, r.cy = e + n / 2, r.r = Math.min(i, n) / 2}, diamond: function(t, e, i, n, r) {r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n}, pin: function(t, e, i, n, r) {r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n}, arrow: function(t, e, i, n, r) {r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n}, triangle: function(t, e, i, n, r) {r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n},
      },
      p = {}; n.each(d, (function(t, e) {p[e] = new t()})); var g = r.extendShape({
      type: 'symbol',
      shape: {
        symbolType: '', x: 0, y: 0, width: 0, height: 0,
      },
      calculateTextPosition: function(t, e, i) {
        var n = s(t, e, i),
          r = this.shape; return r && r.symbolType === 'pin' && e.textPosition === 'inside' && (n.y = i.y + 0.4 * i.height), n
      },
      buildPath: function(t, e, i) {var n = e.symbolType; if (n !== 'none') {var r = p[n]; r || (n = 'rect', r = p[n]), f[n](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, i)}},
    }); function v(t, e) {
      if (this.type !== 'image') {
        var i = this.style,
          n = this.shape; n && n.symbolType === 'line' ? i.stroke = t : this.__isEmptyBrush ? (i.stroke = t, i.fill = e || '#fff') : (i.fill && (i.fill = t), i.stroke && (i.stroke = t)), this.dirty(!1)
      }
    } function m(t, e, i, n, o, s, l) {
      var u,
        h = t.indexOf('empty') === 0; return h && (t = t.substr(5, 1).toLowerCase() + t.substr(6)), u = t.indexOf('image://') === 0 ? r.makeImage(t.slice(8), new a(e, i, n, o), l ? 'center' : 'cover') : t.indexOf('path://') === 0 ? r.makePath(t.slice(7), {}, new a(e, i, n, o), l ? 'center' : 'cover') : new g({
        shape: {
          symbolType: t, x: e, y: i, width: n, height: o,
        },
      }), u.__isEmptyBrush = h, u.setColor = v, u.setColor(s), u
    }e.createSymbol = m
  },
  a73c: function(t, e, i) {
    var n = i('6d8b'),
      r = n.retrieve2,
      a = n.retrieve3,
      o = n.each,
      s = n.normalizeCssArray,
      l = n.isString,
      u = n.isObject,
      h = i('e86a'),
      c = i('5693'),
      d = i('5e76'),
      f = i('7d6d'),
      p = i('82eb'),
      g = p.ContextCachedBy,
      v = p.WILL_BE_RESTORED,
      m = h.DEFAULT_FONT,
      y = {
        left: 1, right: 1, center: 1,
      },
      x = {
        top: 1, bottom: 1, middle: 1,
      },
      _ = [['textShadowBlur', 'shadowBlur', 0], ['textShadowOffsetX', 'shadowOffsetX', 0], ['textShadowOffsetY', 'shadowOffsetY', 0], ['textShadowColor', 'shadowColor', 'transparent']],
      b = {},
      w = {}; function S(t) {return T(t), o(t.rich, T), t} function T(t) {if (t) {t.font = h.makeFont(t); var e = t.textAlign; e === 'middle' && (e = 'center'), t.textAlign = e == null || y[e] ? e : 'left'; var i = t.textVerticalAlign || t.textBaseline; i === 'center' && (i = 'middle'), t.textVerticalAlign = i == null || x[i] ? i : 'top'; var n = t.textPadding; n && (t.textPadding = s(t.textPadding))}} function M(t, e, i, n, r, a) {n.rich ? I(t, e, i, n, r, a) : C(t, e, i, n, r, a)} function C(t, e, i, n, r, a) {
      'use strict'; var o,
        s = O(n),
        l = !1,
        u = e.__attrCachedBy === g.PLAIN_TEXT; a !== v ? (a && (o = a.style, l = !s && u && o), e.__attrCachedBy = s ? g.NONE : g.PLAIN_TEXT) : u && (e.__attrCachedBy = g.NONE); var c = n.font || m; l && c === (o.font || m) || (e.font = c); var d = t.__computedFont; t.__styleFont !== c && (t.__styleFont = c, d = t.__computedFont = e.font); var p = n.textPadding,
        y = n.textLineHeight,
        x = t.__textCotentBlock; x && !t.__dirtyText || (x = t.__textCotentBlock = h.parsePlainText(i, d, p, y, n.truncate)); var b = x.outerHeight,
        S = x.lines,
        T = x.lineHeight,
        M = E(w, t, n, r),
        C = M.baseX,
        I = M.baseY,
        A = M.textAlign || 'left',
        D = M.textVerticalAlign; k(e, n, r, C, I); var L = h.adjustTextY(I, b, D),
        R = C,
        N = L; if (s || p) {
        var V = h.getWidth(i, d),
          H = V; p && (H += p[1] + p[3]); var W = h.adjustTextX(C, H, A); s && P(t, e, n, W, L, H, b), p && (R = F(C, A, p), N += p[0])
      }e.textAlign = A, e.textBaseline = 'middle', e.globalAlpha = n.opacity || 1; for (var G = 0; G < _.length; G++) {
        var U = _[G],
          Y = U[0],
          X = U[1],
          q = n[Y]; l && q === o[Y] || (e[X] = f(e, X, q || U[2]))
      }N += T / 2; var j = n.textStrokeWidth,
        Z = l ? o.textStrokeWidth : null,
        K = !l || j !== Z,
        $ = !l || K || n.textStroke !== o.textStroke,
        Q = B(n.textStroke, j),
        J = z(n.textFill); if (Q && (K && (e.lineWidth = j), $ && (e.strokeStyle = Q)), J && (l && n.textFill === o.textFill || (e.fillStyle = J)), S.length === 1) {Q && e.strokeText(S[0], R, N), J && e.fillText(S[0], R, N);} else {for (G = 0; G < S.length; G++) {Q && e.strokeText(S[G], R, N), J && e.fillText(S[G], R, N), N += T}}
    } function I(t, e, i, n, r, a) {a !== v && (e.__attrCachedBy = g.NONE); var o = t.__textCotentBlock; o && !t.__dirtyText || (o = t.__textCotentBlock = h.parseRichText(i, n)), A(t, e, o, n, r)} function A(t, e, i, n, r) {
      var a = i.width,
        o = i.outerWidth,
        s = i.outerHeight,
        l = n.textPadding,
        u = E(w, t, n, r),
        c = u.baseX,
        d = u.baseY,
        f = u.textAlign,
        p = u.textVerticalAlign; k(e, n, r, c, d); var g = h.adjustTextX(c, o, f),
        v = h.adjustTextY(d, s, p),
        m = g,
        y = v; l && (m += l[3], y += l[0]); var x = m + a; O(n) && P(t, e, n, g, v, o, s); for (var _ = 0; _ < i.lines.length; _++) {
        var b,
          S = i.lines[_],
          T = S.tokens,
          M = T.length,
          C = S.lineHeight,
          I = S.width,
          A = 0,
          L = m,
          R = x,
          B = M - 1; while (A < M && (b = T[A], !b.textAlign || b.textAlign === 'left')) {D(t, e, b, n, C, y, L, 'left'), I -= b.width, L += b.width, A++;} while (B >= 0 && (b = T[B], b.textAlign === 'right')) {D(t, e, b, n, C, y, R, 'right'), I -= b.width, R -= b.width, B--;}L += (a - (L - m) - (x - R) - I) / 2; while (A <= B) {b = T[A], D(t, e, b, n, C, y, L + b.width / 2, 'center'), L += b.width, A++;}y += C
      }
    } function k(t, e, i, n, r) {if (i && e.textRotation) {var a = e.textOrigin; a === 'center' ? (n = i.width / 2 + i.x, r = i.height / 2 + i.y) : a && (n = a[0] + i.x, r = a[1] + i.y), t.translate(n, r), t.rotate(-e.textRotation), t.translate(-n, -r)}} function D(t, e, i, n, o, s, l, u) {
      var h = n.rich[i.styleName] || {}; h.text = i.text; var c = i.textVerticalAlign,
        d = s + o / 2; c === 'top' ? d = s + i.height / 2 : c === 'bottom' && (d = s + o - i.height / 2), !i.isLineHolder && O(h) && P(t, e, h, u === 'right' ? l - i.width : u === 'center' ? l - i.width / 2 : l, d - i.height / 2, i.width, i.height); var f = i.textPadding; f && (l = F(l, u, f), d -= i.height / 2 - f[2] - i.textHeight / 2), R(e, 'shadowBlur', a(h.textShadowBlur, n.textShadowBlur, 0)), R(e, 'shadowColor', h.textShadowColor || n.textShadowColor || 'transparent'), R(e, 'shadowOffsetX', a(h.textShadowOffsetX, n.textShadowOffsetX, 0)), R(e, 'shadowOffsetY', a(h.textShadowOffsetY, n.textShadowOffsetY, 0)), R(e, 'textAlign', u), R(e, 'textBaseline', 'middle'), R(e, 'font', i.font || m); var p = B(h.textStroke || n.textStroke, v),
        g = z(h.textFill || n.textFill),
        v = r(h.textStrokeWidth, n.textStrokeWidth); p && (R(e, 'lineWidth', v), R(e, 'strokeStyle', p), e.strokeText(i.text, l, d)), g && (R(e, 'fillStyle', g), e.fillText(i.text, l, d))
    } function O(t) {return !!(t.textBackgroundColor || t.textBorderWidth && t.textBorderColor)} function P(t, e, i, n, r, a, o) {
      var s = i.textBackgroundColor,
        h = i.textBorderWidth,
        f = i.textBorderColor,
        p = l(s); if (R(e, 'shadowBlur', i.textBoxShadowBlur || 0), R(e, 'shadowColor', i.textBoxShadowColor || 'transparent'), R(e, 'shadowOffsetX', i.textBoxShadowOffsetX || 0), R(e, 'shadowOffsetY', i.textBoxShadowOffsetY || 0), p || h && f) {
        e.beginPath(); var g = i.textBorderRadius; g ? c.buildPath(e, {
          x: n, y: r, width: a, height: o, r: g,
        }) : e.rect(n, r, a, o), e.closePath()
      } if (p) {if (R(e, 'fillStyle', s), i.fillOpacity != null) {var v = e.globalAlpha; e.globalAlpha = i.fillOpacity * i.opacity, e.fill(), e.globalAlpha = v} else {e.fill();}} else if (u(s)) {var m = s.image; m = d.createOrUpdateImage(m, null, t, L, s), m && d.isImageReady(m) && e.drawImage(m, n, r, a, o)} if (h && f) {if (R(e, 'lineWidth', h), R(e, 'strokeStyle', f), i.strokeOpacity != null) {v = e.globalAlpha; e.globalAlpha = i.strokeOpacity * i.opacity, e.stroke(), e.globalAlpha = v} else {e.stroke()}}
    } function L(t, e) {e.image = t} function E(t, e, i, n) {
      var r = i.x || 0,
        a = i.y || 0,
        o = i.textAlign,
        s = i.textVerticalAlign; if (n) {var l = i.textPosition; if (l instanceof Array) {r = n.x + N(l[0], n.width), a = n.y + N(l[1], n.height);} else {var u = e && e.calculateTextPosition ? e.calculateTextPosition(b, i, n) : h.calculateTextPosition(b, i, n); r = u.x, a = u.y, o = o || u.textAlign, s = s || u.textVerticalAlign} var c = i.textOffset; c && (r += c[0], a += c[1])} return t = t || {}, t.baseX = r, t.baseY = a, t.textAlign = o, t.textVerticalAlign = s, t
    } function R(t, e, i) {return t[e] = f(t, e, i), t[e]} function B(t, e) {return t == null || e <= 0 || t === 'transparent' || t === 'none' ? null : t.image || t.colorStops ? '#000' : t} function z(t) {return t == null || t === 'none' ? null : t.image || t.colorStops ? '#000' : t} function N(t, e) {return typeof t === 'string' ? t.lastIndexOf('%') >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t} function F(t, e, i) {return e === 'right' ? t - i[1] : e === 'center' ? t + i[3] / 2 - i[1] / 2 : t + i[3]} function V(t, e) {return t != null && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)}e.normalizeTextStyle = S, e.renderText = M, e.getBoxPosition = E, e.getStroke = B, e.getFill = z, e.parsePercent = N, e.needDrawText = V
  },
  a96b: function(t, e, i) {
    var n = i('3eba'),
      r = n.extendComponentModel({
        type: 'tooltip',
        dependencies: ['axisPointer'],
        defaultOption: {
          zlevel: 0,
          z: 60,
          show: !0,
          showContent: !0,
          trigger: 'item',
          triggerOn: 'mousemove|click',
          alwaysShowContent: !1,
          displayMode: 'single',
          renderMode: 'auto',
          confine: !1,
          showDelay: 0,
          hideDelay: 100,
          transitionDuration: 0.4,
          enterable: !1,
          backgroundColor: 'rgba(50,50,50,0.7)',
          borderColor: '#333',
          borderRadius: 4,
          borderWidth: 0,
          padding: 5,
          extraCssText: '',
          axisPointer: {
            type: 'line',
            axis: 'auto',
            animation: 'auto',
            animationDurationUpdate: 200,
            animationEasingUpdate: 'exponentialOut',
            crossStyle: {
              color: '#999', width: 1, type: 'dashed', textStyle: {},
            },
          },
          textStyle: {
            color: '#fff', fontSize: 14,
          },
        },
      }); t.exports = r
  },
  ac0f: function(t, e, i) {
    var n = i('cbe5'),
      r = i('401b'),
      a = i('4a3f'),
      o = a.quadraticSubdivide,
      s = a.cubicSubdivide,
      l = a.quadraticAt,
      u = a.cubicAt,
      h = a.quadraticDerivativeAt,
      c = a.cubicDerivativeAt,
      d = []; function f(t, e, i) {
      var n = t.cpx2,
        r = t.cpy2; return n === null || r === null ? [(i ? c : u)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? c : u)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(i ? h : l)(t.x1, t.cpx1, t.x2, e), (i ? h : l)(t.y1, t.cpy1, t.y2, e)]
    } var p = n.extend({
      type: 'bezier-curve',
      shape: {
        x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1,
      },
      style: {
        stroke: '#000', fill: null,
      },
      buildPath: function(t, e) {
        var i = e.x1,
          n = e.y1,
          r = e.x2,
          a = e.y2,
          l = e.cpx1,
          u = e.cpy1,
          h = e.cpx2,
          c = e.cpy2,
          f = e.percent; f !== 0 && (t.moveTo(i, n), h == null || c == null ? (f < 1 && (o(i, l, r, f, d), l = d[1], r = d[2], o(n, u, a, f, d), u = d[1], a = d[2]), t.quadraticCurveTo(l, u, r, a)) : (f < 1 && (s(i, l, h, r, f, d), l = d[1], h = d[2], r = d[3], s(n, u, c, a, f, d), u = d[1], c = d[2], a = d[3]), t.bezierCurveTo(l, u, h, c, r, a)))
      },
      pointAt: function(t) {return f(this.shape, t, !1)},
      tangentAt: function(t) {var e = f(this.shape, t, !0); return r.normalize(e, e)},
    }); t.exports = p
  },
  ae69: function(t, e, i) {
    var n = i('cbe5'),
      r = n.extend({
        type: 'ellipse',
        shape: {
          cx: 0, cy: 0, rx: 0, ry: 0,
        },
        buildPath: function(t, e) {
          var i = 0.5522848,
            n = e.cx,
            r = e.cy,
            a = e.rx,
            o = e.ry,
            s = a * i,
            l = o * i; t.moveTo(n - a, r), t.bezierCurveTo(n - a, r - l, n - s, r - o, n, r - o), t.bezierCurveTo(n + s, r - o, n + a, r - l, n + a, r), t.bezierCurveTo(n + a, r + l, n + s, r + o, n, r + o), t.bezierCurveTo(n - s, r + o, n - a, r + l, n - a, r), t.closePath()
        },
      }); t.exports = r
  },
  af24: function(t, e, i) {i('48c7'), i('f273')},
  afa0: function(t, e, i) {
    var n = i('6d8b'),
      r = i('22d1'),
      a = i('e1fc'),
      o = i('04f6'); function s(t, e) {return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel} var l = function() {this._roots = [], this._displayList = [], this._displayListLen = 0}; l.prototype = {
      constructor: l,
      traverse: function(t, e) {for (var i = 0; i < this._roots.length; i++) {this._roots[i].traverse(t, e)}},
      getDisplayList: function(t, e) {return e = e || !1, t && this.updateDisplayList(e), this._displayList},
      updateDisplayList: function(t) {this._displayListLen = 0; for (var e = this._roots, i = this._displayList, n = 0, a = e.length; n < a; n++) {this._updateAndAddDisplayable(e[n], null, t);} i.length = this._displayListLen, r.canvasSupported && o(i, s)},
      _updateAndAddDisplayable: function(t, e, i) {
        if (!t.ignore || i) {
          t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate(); var n = t.clipPath; if (n) {
            e = e ? e.slice() : []; var r = n,
              a = t; while (r) {r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath}
          } if (t.isGroup) {for (var o = t._children, s = 0; s < o.length; s++) {var l = o[s]; t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, i)}t.__dirty = !1} else {t.__clipPaths = e, this._displayList[this._displayListLen++] = t}
        }
      },
      addRoot: function(t) {t.__storage !== this && (t instanceof a && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))},
      delRoot: function(t) {if (t == null) {for (var e = 0; e < this._roots.length; e++) {var i = this._roots[e]; i instanceof a && i.delChildrenFromStorage(this)} return this._roots = [], this._displayList = [], void (this._displayListLen = 0)} if (t instanceof Array) {e = 0; for (var r = t.length; e < r; e++) {this.delRoot(t[e])}} else {var o = n.indexOf(this._roots, t); o >= 0 && (this.delFromStorage(t), this._roots.splice(o, 1), t instanceof a && t.delChildrenFromStorage(this))}},
      addToStorage: function(t) {return t && (t.__storage = this, t.dirty(!1)), this},
      delFromStorage: function(t) {return t && (t.__storage = null), this},
      dispose: function() {this._renderList = this._roots = null},
      displayableSortFunc: s,
    }; var u = l; t.exports = u
  },
  b0af: function(t, e, i) {
    var n = i('2306'),
      r = i('3842'),
      a = r.round; function o(t, e, i) {
      var r = t.getArea(),
        a = t.getBaseAxis().isHorizontal(),
        o = r.x,
        s = r.y,
        l = r.width,
        u = r.height,
        h = i.get('lineStyle.width') || 2; o -= h / 2, s -= h / 2, l += h, u += h; var c = new n.Rect({
        shape: {
          x: o, y: s, width: l, height: u,
        },
      }); return e && (c.shape[a ? 'width' : 'height'] = 0, n.initProps(c, {
        shape: {
          width: l, height: u,
        },
      }, i)), c
    } function s(t, e, i) {
      var r = t.getArea(),
        o = new n.Sector({
          shape: {
            cx: a(t.cx, 1), cy: a(t.cy, 1), r0: a(r.r0, 1), r: a(r.r, 1), startAngle: r.startAngle, endAngle: r.endAngle, clockwise: r.clockwise,
          },
        }); return e && (o.shape.endAngle = r.startAngle, n.initProps(o, {
        shape: {
          endAngle: r.endAngle,
        },
      }, i)), o
    } function l(t, e, i) {return t ? t.type === 'polar' ? s(t, e, i) : t.type === 'cartesian2d' ? o(t, e, i) : null : null}e.createGridClipPath = o, e.createPolarClipPath = s, e.createClipPath = l
  },
  b12f: function(t, e, i) {
    var n = i('e1fc'),
      r = i('8918'),
      a = i('625e'),
      o = function() {this.group = new n(), this.uid = r.getUID('viewComponent')}; o.prototype = {
      constructor: o, init: function(t, e) {}, render: function(t, e, i, n) {}, dispose: function() {}, filterForExposedEvent: null,
    }; var s = o.prototype; s.updateView = s.updateLayout = s.updateVisual = function(t, e, i, n) {}, a.enableClassExtend(o), a.enableClassManagement(o, {
      registerWhenExtend: !0,
    }); var l = o; t.exports = l
  },
  b1d4: function(t, e, i) {
    var n = i('862d'); function r(t, e) {
      return e = e || {}, n(e.coordDimensions || [], t, {
        dimsDef: e.dimensionsDefine || t.dimensionsDefine, encodeDef: e.encodeDefine || t.encodeDefine, dimCount: e.dimensionsCount, encodeDefaulter: e.encodeDefaulter, generateCoord: e.generateCoord, generateCoordCount: e.generateCoordCount,
      })
    }t.exports = r
  },
  b719: function(t, e, i) {
    var n = i('697e7'); e.zrender = n; var r = i('1687'); e.matrix = r; var a = i('401b'); e.vector = a; var o = i('6d8b'),
      s = i('41ef'); e.color = s; var l = i('2306'),
      u = i('3842'); e.number = u; var h = i('eda2'); e.format = h; var c = i('88b3'); c.throttle; e.throttle = c.throttle; var d = i('1548'); e.helper = d; var f = i('bda7'); e.parseGeoJSON = f; var p = i('6179'); e.List = p; var g = i('4319'); e.Model = g; var v = i('84ce'); e.Axis = v; var m = i('22d1'); e.env = m; var y = f,
      x = {}; o.each(['map', 'each', 'filter', 'indexOf', 'inherits', 'reduce', 'filter', 'bind', 'curry', 'isArray', 'isString', 'isObject', 'isFunction', 'extend', 'defaults', 'clone', 'merge'], (function(t) {x[t] = o[t]})); var _ = {}; o.each(['extendShape', 'extendPath', 'makePath', 'makeImage', 'mergePath', 'resizePath', 'createIcon', 'setHoverStyle', 'setLabelStyle', 'setTextStyle', 'setText', 'getFont', 'updateProps', 'initProps', 'getTransform', 'clipPointsByRect', 'clipRectByRect', 'registerShape', 'getShapeClass', 'Group', 'Image', 'Text', 'Circle', 'Sector', 'Ring', 'Polygon', 'Polyline', 'Rect', 'Line', 'BezierCurve', 'Arc', 'IncrementalDisplayable', 'CompoundPath', 'LinearGradient', 'RadialGradient', 'BoundingRect'], (function(t) {_[t] = l[t]})), e.parseGeoJson = y, e.util = x, e.graphic = _
  },
  b809: function(t, e, i) {
    var n = i('6d8b'),
      r = i('29a8'),
      a = i('2b17'),
      o = a.retrieveRawValue; function s(t, e) {
      var i = e.getModel('aria'); if (i.get('show')) {
        if (i.get('description')) {t.setAttribute('aria-label', i.get('description'));} else {
          var a = 0; e.eachSeries((function(t, e) {++a}), this); var s,
            l = i.get('data.maxCount') || 10,
            u = i.get('series.maxCount') || 10,
            h = Math.min(a, u); if (!(a < 1)) {
            var c = v(); s = c ? p(g('general.withTitle'), {
              title: c,
            }) : g('general.withoutTitle'); var d = [],
              f = a > 1 ? 'series.multiple.prefix' : 'series.single.prefix'; s += p(g(f), {
              seriesCount: a,
            }), e.eachSeries((function(t, e) {
              if (e < h) {
                var i,
                  n = t.get('name'),
                  r = 'series.' + (a > 1 ? 'multiple' : 'single') + '.'; i = g(n ? r + 'withName' : r + 'withoutName'), i = p(i, {
                  seriesId: t.seriesIndex, seriesName: t.get('name'), seriesType: m(t.subType),
                }); var s = t.getData(); window.data = s, s.count() > l ? i += p(g('data.partialData'), {
                  displayCnt: l,
                }) : i += g('data.allData'); for (var u = [], c = 0; c < s.count(); c++) {
                  if (c < l) {
                    var f = s.getName(c),
                      v = o(s, c); u.push(p(g(f ? 'data.withName' : 'data.withoutName'), {
                      name: f, value: v,
                    }))
                  }
                }i += u.join(g('data.separator.middle')) + g('data.separator.end'), d.push(i)
              }
            })), s += d.join(g('series.multiple.separator.middle')) + g('series.multiple.separator.end'), t.setAttribute('aria-label', s)
          }
        }
      } function p(t, e) {if (typeof t !== 'string') {return t;} var i = t; return n.each(e, (function(t, e) {i = i.replace(new RegExp('\\{\\s*' + e + '\\s*\\}', 'g'), t)})), i} function g(t) {var e = i.get(t); if (e == null) {for (var n = t.split('.'), a = r.aria, o = 0; o < n.length; ++o) {a = a[n[o]];} return a} return e} function v() {var t = e.getModel('title').option; return t && t.length && (t = t[0]), t && t.text} function m(t) {return r.series.typeNames[t] || '自定义图'}
    }t.exports = s
  },
  bb51: function(t, e, i) {
    'use strict'; i.r(e); var n = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e; return i('div', {
          staticClass: 'szxt-home',
        }, [i('base-card', {
          attrs: {
            title: '汇总数据',
          },
          scopedSlots: t._u([{
            key: 'header',
            fn: function() {
              return [i('div', {
                staticClass: 'szxt-tabs',
              }, [i('div', {
                staticClass: 'szxt-tab-item is-active',
              }, [t._v('总计')]), i('div', {
                staticClass: 'szxt-tab-item',
              }, [t._v('今天')]), i('div', {
                staticClass: 'szxt-tab-item',
              }, [t._v('昨天')])])]
            },
            proxy: !0,
          }]),
        }, [i('el-row', {
          attrs: {
            gutter: t.gutter, type: 'flex', justify: 'space-around',
          },
        }, t._l(5, (function(e) {
          return i('el-col', {
            key: e + 1,
            attrs: {
              span: 4,
            },
          }, [i('div', {
            staticStyle: {
              height: '150px', width: '100%', 'background-color': '#58A3F7', 'border-radius': '15px',
            },
          }, [t._v(t._s(e))])])
        })), 1)], 1), i('el-row', {
          attrs: {
            gutter: t.gutter, type: 'flex', justify: 'space-between',
          },
        }, [i('el-col', {
          attrs: {
            span: 12,
          },
        }, [i('base-card', {
          attrs: {
            title: '待办事项',
          },
        }, [i('span', [t._v('认证审核')])])], 1), i('el-col', {
          attrs: {
            span: 12,
          },
        }, [i('base-card', {
          attrs: {
            title: '快捷入口',
          },
        }, [i('span', [t._v('认证审核')])])], 1)], 1), i('el-row', {
          attrs: {
            gutter: t.gutter, type: 'flex', justify: 'space-between',
          },
        }, [i('el-col', {
          attrs: {
            span: 12,
          },
        }, [i('base-card', {
          attrs: {
            title: '播放统计',
          },
          scopedSlots: t._u([{
            key: 'header',
            fn: function() {
              return [i('el-date-picker', {
                attrs: {
                  type: 'daterange', 'range-separator': '至', 'start-placeholder': '开始日期', 'end-placeholder': '结束日期',
                },
              })]
            },
            proxy: !0,
          }]),
        }, [i('div', {
          ref: 'statistics',
          staticStyle: {
            height: '450px', width: '100%',
          },
        })])], 1), i('el-col', {
          attrs: {
            span: 12,
          },
        }, [i('base-card', {
          attrs: {
            title: '播放排行',
          },
          scopedSlots: t._u([{
            key: 'header',
            fn: function() {
              return [i('el-row', {
                attrs: {
                  type: 'flex', align: 'middle',
                },
              }, [i('div', {
                staticClass: 'szxt-tabs',
                staticStyle: {
                  'margin-right': '20px',
                },
              }, [i('div', {
                staticClass: 'szxt-tab-item is-active',
              }, [t._v('总计')]), i('div', {
                staticClass: 'szxt-tab-item',
              }, [t._v('今天')]), i('div', {
                staticClass: 'szxt-tab-item',
              }, [t._v('昨天')])]), i('el-date-picker', {
                attrs: {
                  type: 'date', placeholder: '选择日期',
                },
              })], 1)]
            },
            proxy: !0,
          }]),
        }, [i('span', [t._v('认证审核')])])], 1)], 1), t._l(4, (function(e) {
          return i('el-row', {
            key: e,
            attrs: {
              gutter: t.gutter, type: 'flex', justify: 'space-between',
            },
          }, [i('el-col', {
            attrs: {
              span: 12,
            },
          }, [i('base-card', {
            attrs: {
              title: '播放统计',
            },
          }, [i('span', [t._v('认证审核')])])], 1), i('el-col', {
            attrs: {
              span: 12,
            },
          }, [i('base-card', {
            attrs: {
              title: '播放排行',
            },
          }, [i('span', [t._v('认证审核')])])], 1)], 1)
        }))], 2)
      },
      r = [],
      a = i('3eba'); i('ef97'), i('007d'); var o = {
        name: 'home',
        data: function() {return {}},
        created: function() {this.gutter = 25},
        mounted: function() {
          var t = a.init(this.$refs.statistics); t.setOption({
            grid: {
              top: 30, bottom: 30, left: 30, right: 30,
            },
            xAxis: {
              type: 'category', boundaryGap: !1, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            yAxis: {
              type: 'value',
              splitLine: {
                lineStyle: {
                  type: 'dashed',
                },
              },
              axisTick: {
                show: !1,
              },
              axisLine: {
                show: !1,
              },
            },
            tooltip: {
              trigger: 'axis',
            },
            series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              symbol: 'none',
              areaStyle: {
                normal: {
                  color: '#fb6260', opacity: 0.2,
                },
              },
              itemStyle: {
                normal: {
                  color: '#8cd5c2',
                  lineStyle: {
                    color: '#fb6260',
                  },
                },
              },
            }],
          })
        },
      },
      s = o,
      l = (i('d0a3'), i('2877')),
      u = Object(l['a'])(s, n, r, !1, null, '021be019', null); e['default'] = u.exports
  },
  bd6b: function(t, e, i) {
    var n = i('06ad'),
      r = i('4942'),
      a = i('6d8b'),
      o = a.isString,
      s = a.isFunction,
      l = a.isObject,
      u = a.isArrayLike,
      h = a.indexOf,
      c = function() {this.animators = []}; function d(t, e, i, n, r, a, l, u) {
      o(n) ? (a = r, r = n, n = 0) : s(r) ? (a = r, r = 'linear', n = 0) : s(n) ? (a = n, n = 0) : s(i) ? (a = i, i = 500) : i || (i = 500), t.stopAnimation(), f(t, '', t, e, i, n, u); var h = t.animators.slice(),
        c = h.length; function d() {c--, c || a && a()}c || a && a(); for (var p = 0; p < h.length; p++) {h[p].done(d).start(r, l)}
    } function f(t, e, i, n, r, a, o) {
      var s = {},
        h = 0; for (var c in n) {n.hasOwnProperty(c) && (i[c] != null ? l(n[c]) && !u(n[c]) ? f(t, e ? e + '.' + c : c, i[c], n[c], r, a, o) : (o ? (s[c] = i[c], p(t, e, c, n[c])) : s[c] = n[c], h++) : n[c] == null || o || p(t, e, c, n[c]));}h > 0 && t.animate(e, !1).when(r == null ? 500 : r, s)
        .delay(a || 0)
    } function p(t, e, i, n) {if (e) {var r = {}; r[e] = {}, r[e][i] = n, t.attr(r)} else {t.attr(i, n)}}c.prototype = {
      constructor: c,
      animate: function(t, e) {
        var i,
          a = !1,
          o = this,
          s = this.__zr; if (t) {
          var l = t.split('.'),
            u = o; a = l[0] === 'shape'; for (var c = 0, d = l.length; c < d; c++) {u && (u = u[l[c]]);}u && (i = u)
        } else {i = o;} if (i) {
          var f = o.animators,
            p = new n(i, e); return p.during((function(t) {o.dirty(a)})).done((function() {f.splice(h(f, p), 1)})), f.push(p), s && s.animation.addAnimator(p), p
        }r('Property "' + t + '" is not existed in element ' + o.id)
      },
      stopAnimation: function(t) {for (var e = this.animators, i = e.length, n = 0; n < i; n++) {e[n].stop(t);} return e.length = 0, this},
      animateTo: function(t, e, i, n, r, a) {d(this, t, e, i, n, r, a)},
      animateFrom: function(t, e, i, n, r, a) {d(this, t, e, i, n, r, a, !0)},
    }; var g = c; t.exports = g
  },
  bda7: function(t, e, i) {
    var n = i('6d8b'),
      r = i('f279'); function a(t) {if (!t.UTF8Encoding) {return t;} var e = t.UTF8Scale; e == null && (e = 1024); for (var i = t.features, n = 0; n < i.length; n++) {for (var r = i[n], a = r.geometry, s = a.coordinates, l = a.encodeOffsets, u = 0; u < s.length; u++) {var h = s[u]; if (a.type === 'Polygon') {s[u] = o(h, l[u], e);} else if (a.type === 'MultiPolygon') {for (var c = 0; c < h.length; c++) {var d = h[c]; h[c] = o(d, l[u][c], e)}}}} return t.UTF8Encoding = !1, t} function o(t, e, i) {
      for (var n = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
        var s = t.charCodeAt(o) - 64,
          l = t.charCodeAt(o + 1) - 64; s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += a, r = s, a = l, n.push([s / i, l / i])
      } return n
    } function s(t) {
      return a(t), n.map(n.filter(t.features, (function(t) {return t.geometry && t.properties && t.geometry.coordinates.length > 0})), (function(t) {
        var e = t.properties,
          i = t.geometry,
          a = i.coordinates,
          o = []; i.type === 'Polygon' && o.push({
          type: 'polygon', exterior: a[0], interiors: a.slice(1),
        }), i.type === 'MultiPolygon' && n.each(a, (function(t) {
          t[0] && o.push({
            type: 'polygon', exterior: t[0], interiors: t.slice(1),
          })
        })); var s = new r(e.name, o, e.cp); return s.properties = e, s
      }))
    }t.exports = s
  },
  c533: function(t, e) {
    var i = ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C', '#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'],
      n = {
        color: i, colorLayer: [['#37A2DA', '#ffd85c', '#fd7b5f'], ['#37A2DA', '#67E0E3', '#FFDB5C', '#ff9f7f', '#E062AE', '#9d96f5'], ['#37A2DA', '#32C5E9', '#9FE6B8', '#FFDB5C', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378EA', '#96BFFF'], i],
      }; t.exports = n
  },
  c775: function(t, e, i) {
    var n = i('2b17'),
      r = n.retrieveRawValue; function a(t, e) {
      var i = t.mapDimension('defaultedLabel', !0),
        n = i.length; if (n === 1) {return r(t, e, i[0]);} if (n) {for (var a = [], o = 0; o < i.length; o++) {var s = r(t, e, i[o]); a.push(s)} return a.join(' ')}
    }e.getDefaultLabel = a
  },
  c7a2: function(t, e, i) {
    var n = i('cbe5'),
      r = i('5693'),
      a = i('9cf9'),
      o = a.subPixelOptimizeRect,
      s = {},
      l = n.extend({
        type: 'rect',
        shape: {
          r: 0, x: 0, y: 0, width: 0, height: 0,
        },
        buildPath: function(t, e) {var i, n, a, l; this.subPixelOptimize ? (o(s, e, this.style), i = s.x, n = s.y, a = s.width, l = s.height, s.r = e.r, e = s) : (i = e.x, n = e.y, a = e.width, l = e.height), e.r ? r.buildPath(t, e) : t.rect(i, n, a, l), t.closePath()},
      }); t.exports = l
  },
  ca98: function(t, e, i) {
    var n = i('6d8b'),
      r = i('e0d3'),
      a = i('6cb7'),
      o = n.each,
      s = n.clone,
      l = n.map,
      u = n.merge,
      h = /^(min|max)?(.+)$/; function c(t) {this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption} function d(t, e, i) {
      var r, a,
        s = [],
        l = [],
        u = t.timeline; if (t.baseOption && (a = t.baseOption), (u || t.options) && (a = a || {}, s = (t.options || []).slice()), t.media) {a = a || {}; var h = t.media; o(h, (function(t) {t && t.option && (t.query ? l.push(t) : r || (r = t))}))} return a || (a = t), a.timeline || (a.timeline = u), o([a].concat(s).concat(n.map(l, (function(t) {return t.option}))), (function(t) {o(e, (function(e) {e(t, i)}))})), {
        baseOption: a, timelineOptions: s, mediaDefault: r, mediaList: l,
      }
    } function f(t, e, i) {
      var r = {
          width: e, height: i, aspectratio: e / i,
        },
        a = !0; return n.each(t, (function(t, e) {
        var i = e.match(h); if (i && i[1] && i[2]) {
          var n = i[1],
            o = i[2].toLowerCase(); p(r[o], t, n) || (a = !1)
        }
      })), a
    } function p(t, e, i) {return i === 'min' ? t >= e : i === 'max' ? t <= e : t === e} function g(t, e) {return t.join(',') === e.join(',')} function v(t, e) {e = e || {}, o(e, (function(e, i) {if (e != null) {var n = t[i]; if (a.hasClass(i)) {e = r.normalizeToArray(e), n = r.normalizeToArray(n); var o = r.mappingToExists(n, e); t[i] = l(o, (function(t) {return t.option && t.exist ? u(t.exist, t.option, !0) : t.exist || t.option}))} else {t[i] = u(n, e, !0)}}}))}c.prototype = {
      constructor: c,
      setOption: function(t, e) {
        t && n.each(r.normalizeToArray(t.series), (function(t) {t && t.data && n.isTypedArray(t.data) && n.setAsPrimitive(t.data)})), t = s(t); var i = this._optionBackup,
          a = d.call(this, t, e, !i); this._newBaseOption = a.baseOption, i ? (v(i.baseOption, a.baseOption), a.timelineOptions.length && (i.timelineOptions = a.timelineOptions), a.mediaList.length && (i.mediaList = a.mediaList), a.mediaDefault && (i.mediaDefault = a.mediaDefault)) : this._optionBackup = a
      },
      mountOption: function(t) {var e = this._optionBackup; return this._timelineOptions = l(e.timelineOptions, s), this._mediaList = l(e.mediaList, s), this._mediaDefault = s(e.mediaDefault), this._currentMediaIndices = [], s(t ? e.baseOption : this._newBaseOption)},
      getTimelineOption: function(t) {
        var e,
          i = this._timelineOptions; if (i.length) {var n = t.getComponent('timeline'); n && (e = s(i[n.getCurrentIndex()], !0))} return e
      },
      getMediaOption: function(t) {
        var e = this._api.getWidth(),
          i = this._api.getHeight(),
          n = this._mediaList,
          r = this._mediaDefault,
          a = [],
          o = []; if (!n.length && !r) {return o;} for (var u = 0, h = n.length; u < h; u++) {f(n[u].query, e, i) && a.push(u);} return !a.length && r && (a = [-1]), a.length && !g(a, this._currentMediaIndices) && (o = l(a, (function(t) {return s(t === -1 ? r.option : n[t].option)}))), this._currentMediaIndices = a, o
      },
    }; var m = c; t.exports = m
  },
  cb11: function(t, e, i) {
    var n = i('cbe5'),
      r = i('9cf9'),
      a = r.subPixelOptimizeLine,
      o = {},
      s = n.extend({
        type: 'line',
        shape: {
          x1: 0, y1: 0, x2: 0, y2: 0, percent: 1,
        },
        style: {
          stroke: '#000', fill: null,
        },
        buildPath: function(t, e) {var i, n, r, s; this.subPixelOptimize ? (a(o, e, this.style), i = o.x1, n = o.y1, r = o.x2, s = o.y2) : (i = e.x1, n = e.y1, r = e.x2, s = e.y2); var l = e.percent; l !== 0 && (t.moveTo(i, n), l < 1 && (r = i * (1 - l) + r * l, s = n * (1 - l) + s * l), t.lineTo(r, s))},
        pointAt: function(t) {var e = this.shape; return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]},
      }); t.exports = s
  },
  cb6d: function(t, e) {
    function i() {this.on('mousedown', this._dragStart, this), this.on('mousemove', this._drag, this), this.on('mouseup', this._dragEnd, this)} function n(t, e) {
      return {
        target: t, topTarget: e && e.topTarget,
      }
    }i.prototype = {
      constructor: i,
      _dragStart: function(t) {var e = t.target; while (e && !e.draggable) {e = e.parent;}e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(n(e, t), 'dragstart', t.event))},
      _drag: function(t) {
        var e = this._draggingTarget; if (e) {
          var i = t.offsetX,
            r = t.offsetY,
            a = i - this._x,
            o = r - this._y; this._x = i, this._y = r, e.drift(a, o, t), this.dispatchToElement(n(e, t), 'drag', t.event); var s = this.findHover(i, r, e).target,
            l = this._dropTarget; this._dropTarget = s, e !== s && (l && s !== l && this.dispatchToElement(n(l, t), 'dragleave', t.event), s && s !== l && this.dispatchToElement(n(s, t), 'dragenter', t.event))
        }
      },
      _dragEnd: function(t) {var e = this._draggingTarget; e && (e.dragging = !1), this.dispatchToElement(n(e, t), 'dragend', t.event), this._dropTarget && this.dispatchToElement(n(this._dropTarget, t), 'drop', t.event), this._draggingTarget = null, this._dropTarget = null},
    }; var r = i; t.exports = r
  },
  cb8f: function(t, e, i) {
    var n = i('3eba'),
      r = i('6d8b'),
      a = i('cd33'),
      o = i('eb6b'); i('48ac'), i('d4b1'), i('4a9d'), n.registerPreprocessor((function(t) {if (t) {(!t.axisPointer || t.axisPointer.length === 0) && (t.axisPointer = {}); var e = t.axisPointer.link; e && !r.isArray(e) && (t.axisPointer.link = [e])}})), n.registerProcessor(n.PRIORITY.PROCESSOR.STATISTIC, (function(t, e) {t.getComponent('axisPointer').coordSysAxesInfo = a.collect(t, e)})), n.registerAction({
      type: 'updateAxisPointer', event: 'updateAxisPointer', update: ':updateAxisPointer',
    }, o)
  },
  cbe5: function(t, e, i) {
    var n = i('19eb'),
      r = i('6d8b'),
      a = i('20c8'),
      o = i('d833'),
      s = i('dc2f'),
      l = s.prototype.getCanvasPattern,
      u = Math.abs,
      h = new a(!0); function c(t) {n.call(this, t), this.path = null}c.prototype = {
      constructor: c,
      type: 'path',
      __dirtyPath: !0,
      strokeContainThreshold: 5,
      segmentIgnoreThreshold: 0,
      subPixelOptimize: !1,
      brush: function(t, e) {
        var i,
          n = this.style,
          r = this.path || h,
          a = n.hasStroke(),
          o = n.hasFill(),
          s = n.fill,
          u = n.stroke,
          c = o && !!s.colorStops,
          d = a && !!u.colorStops,
          f = o && !!s.image,
          p = a && !!u.image; (n.bind(t, this, e), this.setTransform(t), this.__dirty) && (c && (i = i || this.getBoundingRect(), this._fillGradient = n.getGradient(t, s, i)), d && (i = i || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, u, i))); c ? t.fillStyle = this._fillGradient : f && (t.fillStyle = l.call(s, t)), d ? t.strokeStyle = this._strokeGradient : p && (t.strokeStyle = l.call(u, t)); var g = n.lineDash,
          v = n.lineDashOffset,
          m = !!t.setLineDash,
          y = this.getGlobalScale(); if (r.setScale(y[0], y[1], this.segmentIgnoreThreshold), this.__dirtyPath || g && !m && a ? (r.beginPath(t), g && !m && (r.setLineDash(g), r.setLineDashOffset(v)), this.buildPath(r, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), o) {if (n.fillOpacity != null) {var x = t.globalAlpha; t.globalAlpha = n.fillOpacity * n.opacity, r.fill(t), t.globalAlpha = x} else {r.fill(t);}} if (g && m && (t.setLineDash(g), t.lineDashOffset = v), a) {if (n.strokeOpacity != null) {x = t.globalAlpha; t.globalAlpha = n.strokeOpacity * n.opacity, r.stroke(t), t.globalAlpha = x} else {r.stroke(t);}} g && m && t.setLineDash([]), n.text != null && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
      },
      buildPath: function(t, e, i) {},
      createPathProxy: function() {this.path = new a()},
      getBoundingRect: function() {
        var t = this._rect,
          e = this.style,
          i = !t; if (i) {var n = this.path; n || (n = this.path = new a()), this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape, !1)), t = n.getBoundingRect()} if (this._rect = t, e.hasStroke()) {
          var r = this._rectWithStroke || (this._rectWithStroke = t.clone()); if (this.__dirty || i) {
            r.copy(t); var o = e.lineWidth,
              s = e.strokeNoScale ? this.getLineScale() : 1; e.hasFill() || (o = Math.max(o, this.strokeContainThreshold || 4)), s > 1e-10 && (r.width += o / s, r.height += o / s, r.x -= o / s / 2, r.y -= o / s / 2)
          } return r
        } return t
      },
      contain: function(t, e) {
        var i = this.transformCoordToLocal(t, e),
          n = this.getBoundingRect(),
          r = this.style; if (t = i[0], e = i[1], n.contain(t, e)) {
          var a = this.path.data; if (r.hasStroke()) {
            var s = r.lineWidth,
              l = r.strokeNoScale ? this.getLineScale() : 1; if (l > 1e-10 && (r.hasFill() || (s = Math.max(s, this.strokeContainThreshold)), o.containStroke(a, s / l, t, e))) {return !0}
          } if (r.hasFill()) {return o.contain(a, t, e)}
        } return !1
      },
      dirty: function(t) {t == null && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()},
      animateShape: function(t) {return this.animate('shape', t)},
      attrKV: function(t, e) {t === 'shape' ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : n.prototype.attrKV.call(this, t, e)},
      setShape: function(t, e) {var i = this.shape; if (i) {if (r.isObject(t)) {for (var n in t) {t.hasOwnProperty(n) && (i[n] = t[n]);}} else {i[t] = e;} this.dirty(!0)} return this},
      getLineScale: function() {var t = this.transform; return t && u(t[0] - 1) > 1e-10 && u(t[3] - 1) > 1e-10 ? Math.sqrt(u(t[0] * t[3] - t[2] * t[1])) : 1},
    }, c.extend = function(t) {var e = function(e) {c.call(this, e), t.style && this.style.extendFrom(t.style, !1); var i = t.shape; if (i) {this.shape = this.shape || {}; var n = this.shape; for (var r in i) {!n.hasOwnProperty(r) && i.hasOwnProperty(r) && (n[r] = i[r])}}t.init && t.init.call(this, e)}; for (var i in r.inherits(e, c), t) {i !== 'style' && i !== 'shape' && (e.prototype[i] = t[i]);} return e}, r.inherits(c, n); var d = c; t.exports = d
  },
  cbe9: function(t, e, i) {
    var n = i('6d8b'),
      r = i('9850'),
      a = i('cf7e'); function o(t) {a.call(this, t)}o.prototype = {
      constructor: o,
      type: 'cartesian2d',
      dimensions: ['x', 'y'],
      getBaseAxis: function() {return this.getAxesByScale('ordinal')[0] || this.getAxesByScale('time')[0] || this.getAxis('x')},
      containPoint: function(t) {
        var e = this.getAxis('x'),
          i = this.getAxis('y'); return e.contain(e.toLocalCoord(t[0])) && i.contain(i.toLocalCoord(t[1]))
      },
      containData: function(t) {return this.getAxis('x').containData(t[0]) && this.getAxis('y').containData(t[1])},
      dataToPoint: function(t, e, i) {
        var n = this.getAxis('x'),
          r = this.getAxis('y'); return i = i || [], i[0] = n.toGlobalCoord(n.dataToCoord(t[0])), i[1] = r.toGlobalCoord(r.dataToCoord(t[1])), i
      },
      clampData: function(t, e) {
        var i = this.getAxis('x').scale,
          n = this.getAxis('y').scale,
          r = i.getExtent(),
          a = n.getExtent(),
          o = i.parse(t[0]),
          s = n.parse(t[1]); return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e
      },
      pointToData: function(t, e) {
        var i = this.getAxis('x'),
          n = this.getAxis('y'); return e = e || [], e[0] = i.coordToData(i.toLocalCoord(t[0])), e[1] = n.coordToData(n.toLocalCoord(t[1])), e
      },
      getOtherAxis: function(t) {return this.getAxis(t.dim === 'x' ? 'y' : 'x')},
      getArea: function() {
        var t = this.getAxis('x').getGlobalExtent(),
          e = this.getAxis('y').getGlobalExtent(),
          i = Math.min(t[0], t[1]),
          n = Math.min(e[0], e[1]),
          a = Math.max(t[0], t[1]) - i,
          o = Math.max(e[0], e[1]) - n,
          s = new r(i, n, a, o); return s
      },
    }, n.inherits(o, a); var s = o; t.exports = s
  },
  cccd: function(t, e, i) {
    var n = i('e0d3'),
      r = n.makeInner; function a() {
      var t = r(); return function(e) {
        var i = t(e),
          n = e.pipelineContext,
          r = i.large,
          a = i.progressiveRender,
          o = i.large = n && n.large,
          s = i.progressiveRender = n && n.progressiveRender; return !!(r ^ o || a ^ s) && 'reset'
      }
    }t.exports = a
  },
  cd33: function(t, e, i) {
    var n = i('6d8b'),
      r = i('4319'),
      a = n.each,
      o = n.curry; function s(t, e) {
      var i = {
        axesInfo: {}, seriesInvolved: !1, coordSysAxesInfo: {}, coordSysMap: {},
      }; return l(i, t, e), i.seriesInvolved && h(i, t), i
    } function l(t, e, i) {
      var n = e.getComponent('tooltip'),
        r = e.getComponent('axisPointer'),
        s = r.get('link', !0) || [],
        l = []; a(i.getCoordinateSystems(), (function(i) {
        if (i.axisPointerEnabled) {
          var h = m(i.model),
            d = t.coordSysAxesInfo[h] = {}; t.coordSysMap[h] = i; var f = i.model,
            p = f.getModel('tooltip', n); if (a(i.getAxes(), o(_, !1, null)), i.getTooltipAxes && n && p.get('show')) {
            var g = p.get('trigger') === 'axis',
              y = p.get('axisPointer.type') === 'cross',
              x = i.getTooltipAxes(p.get('axisPointer.axis')); (g || y) && a(x.baseAxes, o(_, !y || 'cross', g)), y && a(x.otherAxes, o(_, 'cross', !1))
          }
        } function _(n, a, o) {
          var h = o.model.getModel('axisPointer', r),
            f = h.get('show'); if (f && (f !== 'auto' || n || v(h))) {
            a == null && (a = h.get('triggerTooltip')), h = n ? u(o, p, r, e, n, a) : h; var g = h.get('snap'),
              y = m(o.model),
              x = a || g || o.type === 'category',
              _ = t.axesInfo[y] = {
                key: y, axis: o, coordSys: i, axisPointerModel: h, triggerTooltip: a, involveSeries: x, snap: g, useHandle: v(h), seriesModels: [],
              }; d[y] = _, t.seriesInvolved |= x; var b = c(s, o); if (b != null) {
              var w = l[b] || (l[b] = {
                axesInfo: {},
              }); w.axesInfo[y] = _, w.mapper = s[b].mapper, _.linkGroup = w
            }
          }
        }
      }))
    } function u(t, e, i, o, s, l) {
      var u = e.getModel('axisPointer'),
        h = {}; a(['type', 'snap', 'lineStyle', 'shadowStyle', 'label', 'animation', 'animationDurationUpdate', 'animationEasingUpdate', 'z'], (function(t) {h[t] = n.clone(u.get(t))})), h.snap = t.type !== 'category' && !!l, u.get('type') === 'cross' && (h.type = 'line'); var c = h.label || (h.label = {}); if (c.show == null && (c.show = !1), s === 'cross') {var d = u.get('label.show'); if (c.show = d == null || d, !l) {var f = h.lineStyle = u.get('crossStyle'); f && n.defaults(c, f.textStyle)}} return t.model.getModel('axisPointer', new r(h, i, o))
    } function h(t, e) {
      e.eachSeries((function(e) {
        var i = e.coordinateSystem,
          n = e.get('tooltip.trigger', !0),
          r = e.get('tooltip.show', !0); i && n !== 'none' && !1 !== n && n !== 'item' && !1 !== r && !1 !== e.get('axisPointer.show', !0) && a(t.coordSysAxesInfo[m(i.model)], (function(t) {var n = t.axis; i.getAxis(n.dim) === n && (t.seriesModels.push(e), t.seriesDataCount == null && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count())}))
      }), this)
    } function c(t, e) {for (var i = e.model, n = e.dim, r = 0; r < t.length; r++) {var a = t[r] || {}; if (d(a[n + 'AxisId'], i.id) || d(a[n + 'AxisIndex'], i.componentIndex) || d(a[n + 'AxisName'], i.name)) {return r}}} function d(t, e) {return t === 'all' || n.isArray(t) && n.indexOf(t, e) >= 0 || t === e} function f(t) {
      var e = p(t); if (e) {
        var i = e.axisPointerModel,
          n = e.axis.scale,
          r = i.option,
          a = i.get('status'),
          o = i.get('value'); o != null && (o = n.parse(o)); var s = v(i); a == null && (r.status = s ? 'show' : 'hide'); var l = n.getExtent().slice(); l[0] > l[1] && l.reverse(), (o == null || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? 'hide' : 'show')
      }
    } function p(t) {var e = (t.ecModel.getComponent('axisPointer') || {}).coordSysAxesInfo; return e && e.axesInfo[m(t)]} function g(t) {var e = p(t); return e && e.axisPointerModel} function v(t) {return !!t.get('handle.show')} function m(t) {return t.type + '||' + t.id}e.collect = s, e.fixValue = f, e.getAxisInfo = p, e.getAxisPointerModel = g, e.makeKey = m
  },
  cdaa: function(t, e, i) {
    var n = i('607d'),
      r = n.addEventListener,
      a = n.removeEventListener,
      o = n.normalizeEvent,
      s = n.getNativeEvent,
      l = i('6d8b'),
      u = i('1fab'),
      h = i('22d1'),
      c = 300,
      d = h.domSupported,
      f = (function() {
        var t = ['click', 'dblclick', 'mousewheel', 'mouseout', 'mouseup', 'mousedown', 'mousemove', 'contextmenu'],
          e = ['touchstart', 'touchend', 'touchmove'],
          i = {
            pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1,
          },
          n = l.map(t, (function(t) {var e = t.replace('mouse', 'pointer'); return i.hasOwnProperty(e) ? e : t})); return {
          mouse: t, touch: e, pointer: n,
        }
      }()),
      p = {
        mouse: ['mousemove', 'mouseup'], pointer: ['pointermove', 'pointerup'],
      }; function g(t) {return t === 'mousewheel' && h.browser.firefox ? 'DOMMouseScroll' : t} function v(t) {var e = t.pointerType; return e === 'pen' || e === 'touch'} function m(t) {t.touching = !0, t.touchTimer != null && (clearTimeout(t.touchTimer), t.touchTimer = null), t.touchTimer = setTimeout((function() {t.touching = !1, t.touchTimer = null}), 700)} function y(t) {t && (t.zrByTouch = !0)} function x(t, e) {return o(t.dom, new b(t, e), !0)} function _(t, e) {
      var i = e,
        n = !1; while (i && i.nodeType !== 9 && !(n = i.domBelongToZr || i !== e && i === t.painterRoot)) {i = i.parentNode;} return n
    } function b(t, e) {this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY} var w = b.prototype; w.stopPropagation = w.stopImmediatePropagation = w.preventDefault = l.noop; var S = {
      mousedown: function(t) {t = o(this.dom, t), this._mayPointerCapture = [t.zrX, t.zrY], this.trigger('mousedown', t)}, mousemove: function(t) {t = o(this.dom, t); var e = this._mayPointerCapture; !e || t.zrX === e[0] && t.zrY === e[1] || k(this, !0), this.trigger('mousemove', t)}, mouseup: function(t) {t = o(this.dom, t), k(this, !1), this.trigger('mouseup', t)}, mouseout: function(t) {t = o(this.dom, t), this._pointerCapturing && (t.zrEventControl = 'no_globalout'); var e = t.toElement || t.relatedTarget; t.zrIsToLocalDOM = _(this, e), this.trigger('mouseout', t)}, touchstart: function(t) {t = o(this.dom, t), y(t), this._lastTouchMoment = new Date(), this.handler.processGesture(t, 'start'), S.mousemove.call(this, t), S.mousedown.call(this, t)}, touchmove: function(t) {t = o(this.dom, t), y(t), this.handler.processGesture(t, 'change'), S.mousemove.call(this, t)}, touchend: function(t) {t = o(this.dom, t), y(t), this.handler.processGesture(t, 'end'), S.mouseup.call(this, t), +new Date() - this._lastTouchMoment < c && S.click.call(this, t)}, pointerdown: function(t) {S.mousedown.call(this, t)}, pointermove: function(t) {v(t) || S.mousemove.call(this, t)}, pointerup: function(t) {S.mouseup.call(this, t)}, pointerout: function(t) {v(t) || S.mouseout.call(this, t)},
    }; l.each(['click', 'mousewheel', 'dblclick', 'contextmenu'], (function(t) {S[t] = function(e) {e = o(this.dom, e), this.trigger(t, e)}})); var T = {
      pointermove: function(t) {v(t) || T.mousemove.call(this, t)}, pointerup: function(t) {T.mouseup.call(this, t)}, mousemove: function(t) {this.trigger('mousemove', t)}, mouseup: function(t) {var e = this._pointerCapturing; k(this, !1), this.trigger('mouseup', t), e && (t.zrEventControl = 'only_globalout', this.trigger('mouseout', t))},
    }; function M(t, e) {var i = e.domHandlers; h.pointerEventsSupported ? l.each(f.pointer, (function(n) {I(e, n, (function(e) {i[n].call(t, e)}))})) : (h.touchEventsSupported && l.each(f.touch, (function(n) {I(e, n, (function(r) {i[n].call(t, r), m(e)}))})), l.each(f.mouse, (function(n) {I(e, n, (function(r) {r = s(r), e.touching || i[n].call(t, r)}))})))} function C(t, e) {
      function i(i) {
        function n(n) {n = s(n), _(t, n.target) || (n = x(t, n), e.domHandlers[i].call(t, n))}I(e, i, n, {
          capture: !0,
        })
      }h.pointerEventsSupported ? l.each(p.pointer, i) : h.touchEventsSupported || l.each(p.mouse, i)
    } function I(t, e, i, n) {t.mounted[e] = i, t.listenerOpts[e] = n, r(t.domTarget, g(e), i, n)} function A(t) {var e = t.mounted; for (var i in e) {e.hasOwnProperty(i) && a(t.domTarget, g(i), e[i], t.listenerOpts[i]);}t.mounted = {}} function k(t, e) {if (t._mayPointerCapture = null, d && t._pointerCapturing ^ e) {t._pointerCapturing = e; var i = t._globalHandlerScope; e ? C(t, i) : A(i)}} function D(t, e) {this.domTarget = t, this.domHandlers = e, this.mounted = {}, this.listenerOpts = {}, this.touchTimer = null, this.touching = !1} function O(t, e) {u.call(this), this.dom = t, this.painterRoot = e, this._localHandlerScope = new D(t, S), d && (this._globalHandlerScope = new D(document, T)), this._pointerCapturing = !1, this._mayPointerCapture = null, M(this, this._localHandlerScope)} var P = O.prototype; P.dispose = function() {A(this._localHandlerScope), d && A(this._globalHandlerScope)}, P.setCursor = function(t) {this.dom.style && (this.dom.style.cursor = t || 'default')}, l.mixin(O, u); var L = O; t.exports = L
  },
  cf7e: function(t, e, i) {
    var n = i('6d8b'); function r(t) {return this._axes[t]} var a = function(t) {this._axes = {}, this._dimList = [], this.name = t || ''}; a.prototype = {
      constructor: a,
      type: 'cartesian',
      getAxis: function(t) {return this._axes[t]},
      getAxes: function() {return n.map(this._dimList, r, this)},
      getAxesByScale: function(t) {return t = t.toLowerCase(), n.filter(this.getAxes(), (function(e) {return e.scale.type === t}))},
      addAxis: function(t) {var e = t.dim; this._axes[e] = t, this._dimList.push(e)},
      dataToCoord: function(t) {return this._dataCoordConvert(t, 'dataToCoord')},
      coordToData: function(t) {return this._dataCoordConvert(t, 'coordToData')},
      _dataCoordConvert: function(t, e) {
        for (var i = this._dimList, n = t instanceof Array ? [] : {}, r = 0; r < i.length; r++) {
          var a = i[r],
            o = this._axes[a]; n[a] = o[e](t[a])
        } return n
      },
    }; var o = a; t.exports = o
  },
  d0a3: function(t, e, i) {
    'use strict'; var n = i('f3c6'),
      r = i.n(n); r.a
  },
  d15d: function(t, e, i) {
    var n = i('6d8b'),
      r = n.createHashMap,
      a = n.each; function o(t) {
      var e = r(); t.eachSeries((function(t) {
        var i = t.get('stack'); if (i) {
          var n = e.get(i) || e.set(i, []),
            r = t.getData(),
            a = {
              stackResultDimension: r.getCalculationInfo('stackResultDimension'), stackedOverDimension: r.getCalculationInfo('stackedOverDimension'), stackedDimension: r.getCalculationInfo('stackedDimension'), stackedByDimension: r.getCalculationInfo('stackedByDimension'), isStackedByIndex: r.getCalculationInfo('isStackedByIndex'), data: r, seriesModel: t,
            }; if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) {return;} n.length && r.setCalculationInfo('stackedOnSeries', n[n.length - 1].seriesModel), n.push(a)
        }
      })), e.each(s)
    } function s(t) {
      a(t, (function(e, i) {
        var n = [],
          r = [NaN, NaN],
          a = [e.stackResultDimension, e.stackedOverDimension],
          o = e.data,
          s = e.isStackedByIndex,
          l = o.map(a, (function(a, l, u) {
            var h, c,
              d = o.get(e.stackedDimension, u); if (isNaN(d)) {return r;} s ? c = o.getRawIndex(u) : h = o.get(e.stackedByDimension, u); for (var f = NaN, p = i - 1; p >= 0; p--) {var g = t[p]; if (s || (c = g.data.rawIndexOf(g.stackedByDimension, h)), c >= 0) {var v = g.data.getByRawIndex(g.stackResultDimension, c); if (d >= 0 && v > 0 || d <= 0 && v < 0) {d += v, f = v; break}}} return n[0] = d, n[1] = f, n
          })); o.hostModel.setData(l), e.data = l
      }))
    }t.exports = o
  },
  d2cf: function(t, e, i) {
    var n = i('6d8b'),
      r = i('401b'),
      a = i('cb6d'),
      o = i('1fab'),
      s = i('607d'),
      l = i('0b44'),
      u = 'silent'; function h(t, e, i) {
      return {
        type: t, event: i, target: e.target, topTarget: e.topTarget, cancelBubble: !1, offsetX: i.zrX, offsetY: i.zrY, gestureEvent: i.gestureEvent, pinchX: i.pinchX, pinchY: i.pinchY, pinchScale: i.pinchScale, wheelDelta: i.zrDelta, zrByTouch: i.zrByTouch, which: i.which, stop: c,
      }
    } function c() {s.stop(this.event)} function d() {}d.prototype.dispose = function() {}; var f = ['click', 'dblclick', 'mousewheel', 'mouseout', 'mouseup', 'mousedown', 'mousemove', 'contextmenu'],
      p = function(t, e, i, n) {o.call(this), this.storage = t, this.painter = e, this.painterRoot = n, i = i || new d(), this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, this._gestureMgr, a.call(this), this.setHandlerProxy(i)}; function g(t, e, i) {
      if (t[t.rectHover ? 'rectContain' : 'contain'](e, i)) {
        var n,
          r = t; while (r) {if (r.clipPath && !r.clipPath.contain(e, i)) {return !1;} r.silent && (n = !0), r = r.parent} return !n || u
      } return !1
    } function v(t, e, i) {var n = t.painter; return e < 0 || e > n.getWidth() || i < 0 || i > n.getHeight()}p.prototype = {
      constructor: p,
      setHandlerProxy: function(t) {this.proxy && this.proxy.dispose(), t && (n.each(f, (function(e) {t.on && t.on(e, this[e], this)}), this), t.handler = this), this.proxy = t},
      mousemove: function(t) {
        var e = t.zrX,
          i = t.zrY,
          n = v(this, e, i),
          r = this._hovered,
          a = r.target; a && !a.__zr && (r = this.findHover(r.x, r.y), a = r.target); var o = this._hovered = n ? {
            x: e, y: i,
          } : this.findHover(e, i),
          s = o.target,
          l = this.proxy; l.setCursor && l.setCursor(s ? s.cursor : 'default'), a && s !== a && this.dispatchToElement(r, 'mouseout', t), this.dispatchToElement(o, 'mousemove', t), s && s !== a && this.dispatchToElement(o, 'mouseover', t)
      },
      mouseout: function(t) {
        var e = t.zrEventControl,
          i = t.zrIsToLocalDOM; e !== 'only_globalout' && this.dispatchToElement(this._hovered, 'mouseout', t), e !== 'no_globalout' && !i && this.trigger('globalout', {
          type: 'globalout', event: t,
        })
      },
      resize: function(t) {this._hovered = {}},
      dispatch: function(t, e) {var i = this[t]; i && i.call(this, e)},
      dispose: function() {this.proxy.dispose(), this.storage = this.proxy = this.painter = null},
      setCursorStyle: function(t) {var e = this.proxy; e.setCursor && e.setCursor(t)},
      dispatchToElement: function(t, e, i) {
        t = t || {}; var n = t.target; if (!n || !n.silent) {
          var r = 'on' + e,
            a = h(e, t, i); while (n) {if (n[r] && (a.cancelBubble = n[r].call(n, a)), n.trigger(e, a), n = n.parent, a.cancelBubble) {break;}} a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer((function(t) {typeof t[r] === 'function' && t[r].call(t, a), t.trigger && t.trigger(e, a)})))
        }
      },
      findHover: function(t, e, i) {
        for (var n = this.storage.getDisplayList(), r = {
            x: t, y: e,
          }, a = n.length - 1; a >= 0; a--) {var o; if (n[a] !== i && !n[a].ignore && (o = g(n[a], t, e)) && (!r.topTarget && (r.topTarget = n[a]), o !== u)) {r.target = n[a]; break}} return r
      },
      processGesture: function(t, e) {
        this._gestureMgr || (this._gestureMgr = new l()); var i = this._gestureMgr; e === 'start' && i.clear(); var n = i.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom); if (e === 'end' && i.clear(), n) {
          var r = n.type; t.gestureEvent = r, this.dispatchToElement({
            target: n.target,
          }, r, n.event)
        }
      },
    }, n.each(['click', 'mousedown', 'mouseup', 'mousewheel', 'dblclick', 'contextmenu'], (function(t) {
      p.prototype[t] = function(e) {
        var i, n,
          a = e.zrX,
          o = e.zrY,
          s = v(this, a, o); if (t === 'mouseup' && s || (i = this.findHover(a, o), n = i.target), t === 'mousedown') {this._downEl = n, this._downPoint = [e.zrX, e.zrY], this._upEl = n;} else if (t === 'mouseup') {this._upEl = n;} else if (t === 'click') {if (this._downEl !== this._upEl || !this._downPoint || r.dist(this._downPoint, [e.zrX, e.zrY]) > 4) {return;} this._downPoint = null} this.dispatchToElement(i, t, e)
      }
    })), n.mixin(p, o), n.mixin(p, a); var m = p; t.exports = m
  },
  d498: function(t, e, i) {
    var n = i('cbe5'),
      r = i('4fac'),
      a = n.extend({
        type: 'polyline',
        shape: {
          points: null, smooth: !1, smoothConstraint: null,
        },
        style: {
          stroke: '#000', fill: null,
        },
        buildPath: function(t, e) {r.buildPath(t, e, !1)},
      }); t.exports = a
  },
  d4b1: function(t, e, i) {
    var n = i('3eba'),
      r = i('17d6'),
      a = n.extendComponentView({
        type: 'axisPointer',
        render: function(t, e, i) {
          var n = e.getComponent('tooltip'),
            a = t.get('triggerOn') || n && n.get('triggerOn') || 'mousemove|click'; r.register('axisPointer', i, (function(t, e, i) {
            a !== 'none' && (t === 'leave' || a.indexOf(t) >= 0) && i({
              type: 'updateAxisPointer', currTrigger: t, x: e && e.offsetX, y: e && e.offsetY,
            })
          }))
        },
        remove: function(t, e) {r.unregister(e.getZr(), 'axisPointer'), a.superApply(this._model, 'remove', arguments)},
        dispose: function(t, e) {r.unregister('axisPointer', e), a.superApply(this._model, 'dispose', arguments)},
      }),
      o = a; t.exports = o
  },
  d4c6: function(t, e, i) {
    var n = i('cbe5'),
      r = n.extend({
        type: 'compound',
        shape: {
          paths: null,
        },
        _updatePathDirty: function() {for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++) {t = t || e[i].__dirtyPath;} this.__dirtyPath = t, this.__dirty = this.__dirty || t},
        beforeBrush: function() {this._updatePathDirty(); for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++) {t[i].path || t[i].createPathProxy(), t[i].path.setScale(e[0], e[1], t[i].segmentIgnoreThreshold)}},
        buildPath: function(t, e) {for (var i = e.paths || [], n = 0; n < i.length; n++) {i[n].buildPath(t, i[n].shape, !0)}},
        afterBrush: function() {for (var t = this.shape.paths || [], e = 0; e < t.length; e++) {t[e].__dirtyPath = !1}},
        getBoundingRect: function() {return this._updatePathDirty(), n.prototype.getBoundingRect.call(this)},
      }); t.exports = r
  },
  d4d1: function(t, e, i) {
    var n = i('cbe5'),
      r = i('401b'),
      a = i('897a'),
      o = r.min,
      s = r.max,
      l = r.scaleAndAdd,
      u = r.copy,
      h = [],
      c = [],
      d = []; function f(t) {return isNaN(t[0]) || isNaN(t[1])} function p(t, e, i, n, r, a, o, s, l, u, h) {return u !== 'none' && u ? g.apply(this, arguments) : v.apply(this, arguments)} function g(t, e, i, n, r, a, o, s, l, h, p) {
      for (var g = 0, v = i, m = 0; m < n; m++) {
        var y = e[v]; if (v >= r || v < 0) {break;} if (f(y)) {if (p) {v += a; continue} break} if (v === i) {t[a > 0 ? 'moveTo' : 'lineTo'](y[0], y[1]);} else if (l > 0) {
          var x = e[g],
            _ = h === 'y' ? 1 : 0,
            b = (y[_] - x[_]) * l; u(c, x), c[_] = x[_] + b, u(d, y), d[_] = y[_] - b, t.bezierCurveTo(c[0], c[1], d[0], d[1], y[0], y[1])
        } else {t.lineTo(y[0], y[1]);}g = v, v += a
      } return m
    } function v(t, e, i, n, a, p, g, v, m, y, x) {
      for (var _ = 0, b = i, w = 0; w < n; w++) {
        var S = e[b]; if (b >= a || b < 0) {break;} if (f(S)) {if (x) {b += p; continue} break} if (b === i) {t[p > 0 ? 'moveTo' : 'lineTo'](S[0], S[1]), u(c, S);} else if (m > 0) {
          var T = b + p,
            M = e[T]; if (x) {while (M && f(e[T])) {T += p, M = e[T];}} var C = 0.5,
            I = e[_]; M = e[T]; if (!M || f(M)) {u(d, S);} else {var A, k; if (f(M) && !x && (M = S), r.sub(h, M, I), y === 'x' || y === 'y') {var D = y === 'x' ? 0 : 1; A = Math.abs(S[D] - I[D]), k = Math.abs(S[D] - M[D])} else {A = r.dist(S, I), k = r.dist(S, M);}C = k / (k + A), l(d, S, h, -m * (1 - C))}o(c, c, v), s(c, c, g), o(d, d, v), s(d, d, g), t.bezierCurveTo(c[0], c[1], d[0], d[1], S[0], S[1]), l(c, S, h, m * C)
        } else {t.lineTo(S[0], S[1]);}_ = b, b += p
      } return w
    } function m(t, e) {
      var i = [1 / 0, 1 / 0],
        n = [-1 / 0, -1 / 0]; if (e) {for (var r = 0; r < t.length; r++) {var a = t[r]; a[0] < i[0] && (i[0] = a[0]), a[1] < i[1] && (i[1] = a[1]), a[0] > n[0] && (n[0] = a[0]), a[1] > n[1] && (n[1] = a[1])}} return {
        min: e ? i : n, max: e ? n : i,
      }
    } var y = n.extend({
        type: 'ec-polyline',
        shape: {
          points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1,
        },
        style: {
          fill: null, stroke: '#000',
        },
        brush: a(n.prototype.brush),
        buildPath: function(t, e) {
          var i = e.points,
            n = 0,
            r = i.length,
            a = m(i, e.smoothConstraint); if (e.connectNulls) {for (;r > 0; r--) {if (!f(i[r - 1])) {break;}} for (;n < r; n++) {if (!f(i[n])) {break}}} while (n < r) {n += p(t, i, n, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1}
        },
      }),
      x = n.extend({
        type: 'ec-polygon',
        shape: {
          points: [], stackedOnPoints: [], smooth: 0, stackedOnSmooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1,
        },
        brush: a(n.prototype.brush),
        buildPath: function(t, e) {
          var i = e.points,
            n = e.stackedOnPoints,
            r = 0,
            a = i.length,
            o = e.smoothMonotone,
            s = m(i, e.smoothConstraint),
            l = m(n, e.smoothConstraint); if (e.connectNulls) {for (;a > 0; a--) {if (!f(i[a - 1])) {break;}} for (;r < a; r++) {if (!f(i[r])) {break}}} while (r < a) {var u = p(t, i, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls); p(t, n, r + u - 1, u, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls), r += u + 1, t.closePath()}
        },
      }); e.Polyline = y, e.Polygon = x
  },
  d51b: function(t, e) {
    var i = function() {this.head = null, this.tail = null, this._len = 0},
      n = i.prototype; n.insert = function(t) {var e = new r(t); return this.insertEntry(e), e}, n.insertEntry = function(t) {this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++}, n.remove = function(t) {
      var e = t.prev,
        i = t.next; e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--
    }, n.len = function() {return this._len}, n.clear = function() {this.head = this.tail = null, this._len = 0}; var r = function(t) {this.value = t, this.next, this.prev},
      a = function(t) {this._list = new i(), this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null},
      o = a.prototype; o.put = function(t, e) {
      var i = this._list,
        n = this._map,
        a = null; if (n[t] == null) {
        var o = i.len(),
          s = this._lastRemovedEntry; if (o >= this._maxSize && o > 0) {var l = i.head; i.remove(l), delete n[l.key], a = l.value, this._lastRemovedEntry = l}s ? s.value = e : s = new r(e), s.key = t, i.insertEntry(s), n[t] = s
      } return a
    }, o.get = function(t) {
      var e = this._map[t],
        i = this._list; if (e != null) {return e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value}
    }, o.clear = function() {this._list.clear(), this._map = {}}; var s = a; t.exports = s
  },
  d5b7: function(t, e, i) {
    var n = i('de00'),
      r = i('1fab'),
      a = i('0cde'),
      o = i('bd6b'),
      s = i('6d8b'),
      l = function(t) {a.call(this, t), r.call(this, t), o.call(this, t), this.id = t.id || n()}; l.prototype = {
      type: 'element', name: '', __zr: null, ignore: !1, clipPath: null, isGroup: !1, drift: function(t, e) {switch (this.draggable) {case 'horizontal':e = 0; break; case 'vertical':t = 0; break} var i = this.transform; i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty(!1)}, beforeUpdate: function() {}, afterUpdate: function() {}, update: function() {this.updateTransform()}, traverse: function(t, e) {}, attrKV: function(t, e) {if (t === 'position' || t === 'scale' || t === 'origin') {if (e) {var i = this[t]; i || (i = this[t] = []), i[0] = e[0], i[1] = e[1]}} else {this[t] = e}}, hide: function() {this.ignore = !0, this.__zr && this.__zr.refresh()}, show: function() {this.ignore = !1, this.__zr && this.__zr.refresh()}, attr: function(t, e) {if (typeof t === 'string') {this.attrKV(t, e);} else if (s.isObject(t)) {for (var i in t) {t.hasOwnProperty(i) && this.attrKV(i, t[i]);}} return this.dirty(!1), this}, setClipPath: function(t) {var e = this.__zr; e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)}, removeClipPath: function() {var t = this.clipPath; t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))}, addSelfToZr: function(t) {this.__zr = t; var e = this.animators; if (e) {for (var i = 0; i < e.length; i++) {t.animation.addAnimator(e[i]);}} this.clipPath && this.clipPath.addSelfToZr(t)}, removeSelfFromZr: function(t) {this.__zr = null; var e = this.animators; if (e) {for (var i = 0; i < e.length; i++) {t.animation.removeAnimator(e[i]);}} this.clipPath && this.clipPath.removeSelfFromZr(t)},
    }, s.mixin(l, o), s.mixin(l, a), s.mixin(l, r); var u = l; t.exports = u
  },
  d833: function(t, e, i) {
    var n = i('20c8'),
      r = i('9680'),
      a = i('e7d2'),
      o = i('68ab'),
      s = i('9f51'),
      l = i('857d'),
      u = l.normalizeRadian,
      h = i('4a3f'),
      c = i('8728'),
      d = n.CMD,
      f = 2 * Math.PI,
      p = 1e-4; function g(t, e) {return Math.abs(t - e) < p} var v = [-1, -1, -1],
      m = [-1, -1]; function y() {var t = m[0]; m[0] = m[1], m[1] = t} function x(t, e, i, n, r, a, o, s, l, u) {
      if (u > e && u > n && u > a && u > s || u < e && u < n && u < a && u < s) {return 0;} var c = h.cubicRootAt(e, n, a, s, u, v); if (c === 0) {return 0;} for (var d, f, p = 0, g = -1, x = 0; x < c; x++) {
        var _ = v[x],
          b = _ === 0 || _ === 1 ? 0.5 : 1,
          w = h.cubicAt(t, i, r, o, _); w < l || (g < 0 && (g = h.cubicExtrema(e, n, a, s, m), m[1] < m[0] && g > 1 && y(), d = h.cubicAt(e, n, a, s, m[0]), g > 1 && (f = h.cubicAt(e, n, a, s, m[1]))), g === 2 ? _ < m[0] ? p += d < e ? b : -b : _ < m[1] ? p += f < d ? b : -b : p += s < f ? b : -b : _ < m[0] ? p += d < e ? b : -b : p += s < d ? b : -b)
      } return p
    } function _(t, e, i, n, r, a, o, s) {
      if (s > e && s > n && s > a || s < e && s < n && s < a) {return 0;} var l = h.quadraticRootAt(e, n, a, s, v); if (l === 0) {return 0;} var u = h.quadraticExtremum(e, n, a); if (u >= 0 && u <= 1) {
        for (var c = 0, d = h.quadraticAt(e, n, a, u), f = 0; f < l; f++) {
          var p = v[f] === 0 || v[f] === 1 ? 0.5 : 1,
            g = h.quadraticAt(t, i, r, v[f]); g < o || (v[f] < u ? c += d < e ? p : -p : c += a < d ? p : -p)
        } return c
      }p = v[0] === 0 || v[0] === 1 ? 0.5 : 1, g = h.quadraticAt(t, i, r, v[0]); return g < o ? 0 : a < e ? p : -p
    } function b(t, e, i, n, r, a, o, s) {if (s -= e, s > i || s < -i) {return 0;} var l = Math.sqrt(i * i - s * s); v[0] = -l, v[1] = l; var h = Math.abs(n - r); if (h < 1e-4) {return 0;} if (h % f < 1e-4) {n = 0, r = f; var c = a ? 1 : -1; return o >= v[0] + t && o <= v[1] + t ? c : 0} if (a) {l = n; n = u(r), r = u(l)} else {n = u(n), r = u(r);}n > r && (r += f); for (var d = 0, p = 0; p < 2; p++) {var g = v[p]; if (g + t > o) {var m = Math.atan2(s, g); c = a ? 1 : -1; m < 0 && (m = f + m), (m >= n && m <= r || m + f >= n && m + f <= r) && (m > Math.PI / 2 && m < 1.5 * Math.PI && (c = -c), d += c)}} return d} function w(t, e, i, n, l) {
      for (var u = 0, h = 0, f = 0, p = 0, v = 0, m = 0; m < t.length;) {
        var y = t[m++]; switch (y === d.M && m > 1 && (i || (u += c(h, f, p, v, n, l))), m === 1 && (h = t[m], f = t[m + 1], p = h, v = f), y) {
          case d.M:p = t[m++], v = t[m++], h = p, f = v; break; case d.L:if (i) {if (r.containStroke(h, f, t[m], t[m + 1], e, n, l)) {return !0}} else {u += c(h, f, t[m], t[m + 1], n, l) || 0;}h = t[m++], f = t[m++]; break; case d.C:if (i) {if (a.containStroke(h, f, t[m++], t[m++], t[m++], t[m++], t[m], t[m + 1], e, n, l)) {return !0}} else {u += x(h, f, t[m++], t[m++], t[m++], t[m++], t[m], t[m + 1], n, l) || 0;}h = t[m++], f = t[m++]; break; case d.Q:if (i) {if (o.containStroke(h, f, t[m++], t[m++], t[m], t[m + 1], e, n, l)) {return !0}} else {u += _(h, f, t[m++], t[m++], t[m], t[m + 1], n, l) || 0;}h = t[m++], f = t[m++]; break; case d.A:var w = t[m++],
            S = t[m++],
            T = t[m++],
            M = t[m++],
            C = t[m++],
            I = t[m++]; m += 1; var A = 1 - t[m++],
              k = Math.cos(C) * T + w,
              D = Math.sin(C) * M + S; m > 1 ? u += c(h, f, k, D, n, l) : (p = k, v = D); var O = (n - w) * M / T + w; if (i) {if (s.containStroke(w, S, M, C, C + I, A, e, O, l)) {return !0}} else {u += b(w, S, M, C, C + I, A, O, l);}h = Math.cos(C + I) * T + w, f = Math.sin(C + I) * M + S; break; case d.R:p = h = t[m++], v = f = t[m++]; var P = t[m++],
            L = t[m++]; k = p + P, D = v + L; if (i) {if (r.containStroke(p, v, k, v, e, n, l) || r.containStroke(k, v, k, D, e, n, l) || r.containStroke(k, D, p, D, e, n, l) || r.containStroke(p, D, p, v, e, n, l)) {return !0}} else {u += c(k, v, k, D, n, l), u += c(p, D, p, v, n, l);} break; case d.Z:if (i) {if (r.containStroke(h, f, p, v, e, n, l)) {return !0}} else {u += c(h, f, p, v, n, l);}h = p, f = v; break
        }
      } return i || g(f, v) || (u += c(h, f, p, v, n, l) || 0), u !== 0
    } function S(t, e, i) {return w(t, 0, !1, e, i)} function T(t, e, i, n) {return w(t, e, !0, i, n)}e.contain = S, e.containStroke = T
  },
  d9fc: function(t, e, i) {
    var n = i('cbe5'),
      r = n.extend({
        type: 'circle',
        shape: {
          cx: 0, cy: 0, r: 0,
        },
        buildPath: function(t, e, i) {i && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)},
      }); t.exports = r
  },
  dc2f: function(t, e) {var i = function(t, e) {this.image = t, this.repeat = e, this.type = 'pattern'}; i.prototype.getCanvasPattern = function(t) {return t.createPattern(this.image, this.repeat || 'repeat')}; var n = i; t.exports = n},
  dcb3: function(t, e, i) {
    var n = i('6d8b'),
      r = i('625e'),
      a = i('2306'),
      o = i('cd33'),
      s = i('607d'),
      l = i('88b3'),
      u = i('e0d3'),
      h = u.makeInner,
      c = h(),
      d = n.clone,
      f = n.bind; function p() {} function g(t, e, i, n) {v(c(i).lastProp, n) || (c(i).lastProp = n, e ? a.updateProps(i, n, t) : (i.stopAnimation(), i.attr(n)))} function v(t, e) {if (n.isObject(t) && n.isObject(e)) {var i = !0; return n.each(e, (function(e, n) {i = i && v(t[n], e)})), !!i} return t === e} function m(t, e) {t[e.get('label.show') ? 'show' : 'hide']()} function y(t) {
      return {
        position: t.position.slice(), rotation: t.rotation || 0,
      }
    } function x(t, e, i) {
      var n = e.get('z'),
        r = e.get('zlevel'); t && t.traverse((function(t) {t.type !== 'group' && (n != null && (t.z = n), r != null && (t.zlevel = r), t.silent = i)}))
    }p.prototype = {
      _group: null,
      _lastGraphicKey: null,
      _handle: null,
      _dragging: !1,
      _lastValue: null,
      _lastStatus: null,
      _payloadInfo: null,
      animationThreshold: 15,
      render: function(t, e, i, r) {
        var o = e.get('value'),
          s = e.get('status'); if (this._axisModel = t, this._axisPointerModel = e, this._api = i, r || this._lastValue !== o || this._lastStatus !== s) {
          this._lastValue = o, this._lastStatus = s; var l = this._group,
            u = this._handle; if (!s || s === 'hide') {return l && l.hide(), void (u && u.hide());} l && l.show(), u && u.show(); var h = {}; this.makeElOption(h, o, t, e, i); var c = h.graphicKey; c !== this._lastGraphicKey && this.clear(i), this._lastGraphicKey = c; var d = this._moveAnimation = this.determineAnimation(t, e); if (l) {var f = n.curry(g, e, d); this.updatePointerEl(l, h, f, e), this.updateLabelEl(l, h, f, e)} else {l = this._group = new a.Group(), this.createPointerEl(l, h, t, e), this.createLabelEl(l, h, t, e), i.getZr().add(l);}x(l, e, !0), this._renderHandle(o)
        }
      },
      remove: function(t) {this.clear(t)},
      dispose: function(t) {this.clear(t)},
      determineAnimation: function(t, e) {
        var i = e.get('animation'),
          n = t.axis,
          r = n.type === 'category',
          a = e.get('snap'); if (!a && !r) {return !1;} if (i === 'auto' || i == null) {
          var s = this.animationThreshold; if (r && n.getBandWidth() > s) {return !0;} if (a) {
            var l = o.getAxisInfo(t).seriesDataCount,
              u = n.getExtent(); return Math.abs(u[0] - u[1]) / l > s
          } return !1
        } return !0 === i
      },
      makeElOption: function(t, e, i, n, r) {},
      createPointerEl: function(t, e, i, n) {var r = e.pointer; if (r) {var o = c(t).pointerEl = new a[r.type](d(e.pointer)); t.add(o)}},
      createLabelEl: function(t, e, i, n) {if (e.label) {var r = c(t).labelEl = new a.Rect(d(e.label)); t.add(r), m(r, n)}},
      updatePointerEl: function(t, e, i) {
        var n = c(t).pointerEl; n && e.pointer && (n.setStyle(e.pointer.style), i(n, {
          shape: e.pointer.shape,
        }))
      },
      updateLabelEl: function(t, e, i, n) {
        var r = c(t).labelEl; r && (r.setStyle(e.label.style), i(r, {
          shape: e.label.shape, position: e.label.position,
        }), m(r, n))
      },
      _renderHandle: function(t) {
        if (!this._dragging && this.updateHandleTransform) {
          var e,
            i = this._axisPointerModel,
            r = this._api.getZr(),
            o = this._handle,
            u = i.getModel('handle'),
            h = i.get('status'); if (!u.get('show') || !h || h === 'hide') {return o && r.remove(o), void (this._handle = null);} this._handle || (e = !0, o = this._handle = a.createIcon(u.get('icon'), {
            cursor: 'move', draggable: !0, onmousemove: function(t) {s.stop(t.event)}, onmousedown: f(this._onHandleDragMove, this, 0, 0), drift: f(this._onHandleDragMove, this), ondragend: f(this._onHandleDragEnd, this),
          }), r.add(o)), x(o, i, !1); var c = ['color', 'borderColor', 'borderWidth', 'opacity', 'shadowColor', 'shadowBlur', 'shadowOffsetX', 'shadowOffsetY']; o.setStyle(u.getItemStyle(null, c)); var d = u.get('size'); n.isArray(d) || (d = [d, d]), o.attr('scale', [d[0] / 2, d[1] / 2]), l.createOrUpdate(this, '_doDispatchAxisPointer', u.get('throttle') || 0, 'fixRate'), this._moveHandleToValue(t, e)
        }
      },
      _moveHandleToValue: function(t, e) {g(this._axisPointerModel, !e && this._moveAnimation, this._handle, y(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))},
      _onHandleDragMove: function(t, e) {var i = this._handle; if (i) {this._dragging = !0; var n = this.updateHandleTransform(y(i), [t, e], this._axisModel, this._axisPointerModel); this._payloadInfo = n, i.stopAnimation(), i.attr(y(n)), c(i).lastProp = null, this._doDispatchAxisPointer()}},
      _doDispatchAxisPointer: function() {
        var t = this._handle; if (t) {
          var e = this._payloadInfo,
            i = this._axisModel; this._api.dispatchAction({
            type: 'updateAxisPointer',
            x: e.cursorPoint[0],
            y: e.cursorPoint[1],
            tooltipOption: e.tooltipOption,
            axesInfo: [{
              axisDim: i.axis.dim, axisIndex: i.componentIndex,
            }],
          })
        }
      },
      _onHandleDragEnd: function(t) {
        this._dragging = !1; var e = this._handle; if (e) {
          var i = this._axisPointerModel.get('value'); this._moveHandleToValue(i), this._api.dispatchAction({
            type: 'hideTip',
          })
        }
      },
      getHandleTransform: null,
      updateHandleTransform: null,
      clear: function(t) {
        this._lastValue = null, this._lastStatus = null; var e = t.getZr(),
          i = this._group,
          n = this._handle; e && i && (this._lastGraphicKey = null, i && e.remove(i), n && e.remove(n), this._group = null, this._handle = null, this._payloadInfo = null)
      },
      doClear: function() {},
      buildLabel: function(t, e, i) {
        return i = i || 0, {
          x: t[i], y: t[1 - i], width: e[i], height: e[1 - i],
        }
      },
    }, p.prototype.constructor = p, r.enableClassExtend(p); var _ = p; t.exports = _
  },
  dded: function(t, e, i) {
    var n = i('6d8b'),
      r = i('42e5'),
      a = function(t, e, i, n, a) {this.x = t == null ? 0.5 : t, this.y = e == null ? 0.5 : e, this.r = i == null ? 0.5 : i, this.type = 'radial', this.global = a || !1, r.call(this, n)}; a.prototype = {
      constructor: a,
    }, n.inherits(a, r); var o = a; t.exports = o
  },
  de00: function(t, e) {var i = 2311; function n() {return i++}t.exports = n},
  de1c: function(t, e) {
    var i = {
      getBoxLayoutParams: function() {
        return {
          left: this.get('left'), top: this.get('top'), right: this.get('right'), bottom: this.get('bottom'), width: this.get('width'), height: this.get('height'),
        }
      },
    }; t.exports = i
  },
  e073: function(t, e, i) {
    var n = i('6d8b'),
      r = i('e86a'),
      a = i('e0d3'),
      o = a.makeInner,
      s = i('697e'),
      l = s.makeLabelFormatter,
      u = s.getOptionCategoryInterval,
      h = s.shouldShowAllLabels,
      c = o(); function d(t) {return t.type === 'category' ? p(t) : m(t)} function f(t, e) {
      return t.type === 'category' ? v(t, e) : {
        ticks: t.scale.getTicks(),
      }
    } function p(t) {
      var e = t.getLabelModel(),
        i = g(t, e); return !e.get('show') || t.scale.isBlank() ? {
        labels: [], labelCategoryInterval: i.labelCategoryInterval,
      } : i
    } function g(t, e) {
      var i, r,
        a = y(t, 'labels'),
        o = u(e),
        s = x(a, o); return s || (n.isFunction(o) ? i = M(t, o) : (r = o === 'auto' ? b(t) : o, i = T(t, r)), _(a, o, {
        labels: i, labelCategoryInterval: r,
      }))
    } function v(t, e) {
      var i, r,
        a = y(t, 'ticks'),
        o = u(e),
        s = x(a, o); if (s) {return s;} if (e.get('show') && !t.scale.isBlank() || (i = []), n.isFunction(o)) {i = M(t, o, !0);} else if (o === 'auto') {var l = g(t, t.getLabelModel()); r = l.labelCategoryInterval, i = n.map(l.labels, (function(t) {return t.tickValue}))} else {r = o, i = T(t, r, !0);} return _(a, o, {
        ticks: i, tickCategoryInterval: r,
      })
    } function m(t) {
      var e = t.scale.getTicks(),
        i = l(t); return {
        labels: n.map(e, (function(e, n) {
          return {
            formattedLabel: i(e, n), rawLabel: t.scale.getLabel(e), tickValue: e,
          }
        })),
      }
    } function y(t, e) {return c(t)[e] || (c(t)[e] = [])} function x(t, e) {for (var i = 0; i < t.length; i++) {if (t[i].key === e) {return t[i].value}}} function _(t, e, i) {
      return t.push({
        key: e, value: i,
      }), i
    } function b(t) {var e = c(t).autoInterval; return e != null ? e : c(t).autoInterval = t.calculateCategoryInterval()} function w(t) {
      var e = S(t),
        i = l(t),
        n = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
        a = t.scale,
        o = a.getExtent(),
        s = a.count(); if (o[1] - o[0] < 1) {return 0;} var u = 1; s > 40 && (u = Math.max(1, Math.floor(s / 40))); for (var h = o[0], d = t.dataToCoord(h + 1) - t.dataToCoord(h), f = Math.abs(d * Math.cos(n)), p = Math.abs(d * Math.sin(n)), g = 0, v = 0; h <= o[1]; h += u) {
        var m = 0,
          y = 0,
          x = r.getBoundingRect(i(h), e.font, 'center', 'top'); m = 1.3 * x.width, y = 1.3 * x.height, g = Math.max(g, m, 7), v = Math.max(v, y, 7)
      } var _ = g / f,
        b = v / p; isNaN(_) && (_ = 1 / 0), isNaN(b) && (b = 1 / 0); var w = Math.max(0, Math.floor(Math.min(_, b))),
        T = c(t.model),
        M = t.getExtent(),
        C = T.lastAutoInterval,
        I = T.lastTickCount; return C != null && I != null && Math.abs(C - w) <= 1 && Math.abs(I - s) <= 1 && C > w && T.axisExtend0 === M[0] && T.axisExtend1 === M[1] ? w = C : (T.lastTickCount = s, T.lastAutoInterval = w, T.axisExtend0 = M[0], T.axisExtend1 = M[1]), w
    } function S(t) {
      var e = t.getLabelModel(); return {
        axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0, labelRotate: e.get('rotate') || 0, font: e.getFont(),
      }
    } function T(t, e, i) {
      var n = l(t),
        r = t.scale,
        a = r.getExtent(),
        o = t.getLabelModel(),
        s = [],
        u = Math.max((e || 0) + 1, 1),
        c = a[0],
        d = r.count(); c !== 0 && u > 1 && d / u > 2 && (c = Math.round(Math.ceil(c / u) * u)); var f = h(t),
        p = o.get('showMinLabel') || f,
        g = o.get('showMaxLabel') || f; p && c !== a[0] && m(a[0]); for (var v = c; v <= a[1]; v += u) {m(v);} function m(t) {
        s.push(i ? t : {
          formattedLabel: n(t), rawLabel: r.getLabel(t), tickValue: t,
        })
      } return g && v - u !== a[1] && m(a[1]), s
    } function M(t, e, i) {
      var r = t.scale,
        a = l(t),
        o = []; return n.each(r.getTicks(), (function(t) {
        var n = r.getLabel(t); e(t, n) && o.push(i ? t : {
          formattedLabel: a(t), rawLabel: n, tickValue: t,
        })
      })), o
    }e.createAxisLabels = d, e.createAxisTicks = f, e.calculateCategoryInterval = w
  },
  e0d3: function(t, e, i) {
    var n = i('6d8b'),
      r = i('22d1'),
      a = n.each,
      o = n.isObject,
      s = n.isArray,
      l = 'series\0'; function u(t) {return t instanceof Array ? t : t == null ? [] : [t]} function h(t, e, i) {if (t) {t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {}; for (var n = 0, r = i.length; n < r; n++) {var a = i[n]; !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a])}}} var c = ['fontStyle', 'fontWeight', 'fontSize', 'fontFamily', 'rich', 'tag', 'color', 'textBorderColor', 'textBorderWidth', 'width', 'height', 'lineHeight', 'align', 'verticalAlign', 'baseline', 'shadowColor', 'shadowBlur', 'shadowOffsetX', 'shadowOffsetY', 'textShadowColor', 'textShadowBlur', 'textShadowOffsetX', 'textShadowOffsetY', 'backgroundColor', 'borderColor', 'borderWidth', 'borderRadius', 'padding']; function d(t) {return !o(t) || s(t) || t instanceof Date ? t : t.value} function f(t) {return o(t) && !(t instanceof Array)} function p(t, e) {
      e = (e || []).slice(); var i = n.map(t || [], (function(t, e) {
        return {
          exist: t,
        }
      })); return a(e, (function(t, n) {if (o(t)) {for (var r = 0; r < i.length; r++) {if (!i[r].option && t.id != null && i[r].exist.id === t.id + '') {return i[r].option = t, void (e[n] = null);}} for (r = 0; r < i.length; r++) {var a = i[r].exist; if (!i[r].option && (a.id == null || t.id == null) && t.name != null && !m(t) && !m(a) && a.name === t.name + '') {return i[r].option = t, void (e[n] = null)}}}})), a(e, (function(t, e) {
        if (o(t)) {
          for (var n = 0; n < i.length; n++) {var r = i[n].exist; if (!i[n].option && !m(r) && t.id == null) {i[n].option = t; break}}n >= i.length && i.push({
            option: t,
          })
        }
      })), i
    } function g(t) {
      var e = n.createHashMap(); a(t, (function(t, i) {var n = t.exist; n && e.set(n.id, t)})), a(t, (function(t, i) {var r = t.option; n.assert(!r || r.id == null || !e.get(r.id) || e.get(r.id) === t, 'id duplicates: ' + (r && r.id)), r && r.id != null && e.set(r.id, t), !t.keyInfo && (t.keyInfo = {})})), a(t, (function(t, i) {
        var n = t.exist,
          r = t.option,
          a = t.keyInfo; if (o(r)) {if (a.name = r.name != null ? r.name + '' : n ? n.name : l + i, n) {a.id = n.id;} else if (r.id != null) {a.id = r.id + '';} else {var s = 0; do {a.id = '\0' + a.name + '\0' + s++} while (e.get(a.id))}e.set(a.id, t)}
      }))
    } function v(t) {var e = t.name; return !(!e || !e.indexOf(l))} function m(t) {return o(t) && t.id && (t.id + '').indexOf('\0_ec_\0') === 0} function y(t, e) {
      var i = {},
        n = {}; return r(t || [], i), r(e || [], n, i), [a(i), a(n)]; function r(t, e, i) {for (var n = 0, r = t.length; n < r; n++) {for (var a = t[n].seriesId, o = u(t[n].dataIndex), s = i && i[a], l = 0, h = o.length; l < h; l++) {var c = o[l]; s && s[c] ? s[c] = null : (e[a] || (e[a] = {}))[c] = 1}}} function a(t, e) {
        var i = []; for (var n in t) {
          if (t.hasOwnProperty(n) && t[n] != null) {
            if (e) {i.push(+n);} else {
              var r = a(t[n], !0); r.length && i.push({
                seriesId: n, dataIndex: r,
              })
            }
          }
        } return i
      }
    } function x(t, e) {return e.dataIndexInside != null ? e.dataIndexInside : e.dataIndex != null ? n.isArray(e.dataIndex) ? n.map(e.dataIndex, (function(e) {return t.indexOfRawIndex(e)})) : t.indexOfRawIndex(e.dataIndex) : e.name != null ? n.isArray(e.name) ? n.map(e.name, (function(e) {return t.indexOfName(e)})) : t.indexOfName(e.name) : void 0} function _() {var t = '__\0ec_inner_' + b++ + '_' + Math.random().toFixed(5); return function(e) {return e[t] || (e[t] = {})}} var b = 0; function w(t, e, i) {
      if (n.isString(e)) {var r = {}; r[e + 'Index'] = 0, e = r} var o = i && i.defaultMainType; !o || S(e, o + 'Index') || S(e, o + 'Id') || S(e, o + 'Name') || (e[o + 'Index'] = 0); var s = {}; return a(e, (function(r, a) {
        r = e[a]; if (a !== 'dataIndex' && a !== 'dataIndexInside') {
          var o = a.match(/^(\w+)(Index|Id|Name)$/) || [],
            l = o[1],
            u = (o[2] || '').toLowerCase(); if (!(!l || !u || r == null || u === 'index' && r === 'none' || i && i.includeMainTypes && n.indexOf(i.includeMainTypes, l) < 0)) {
            var h = {
              mainType: l,
            }; u === 'index' && r === 'all' || (h[u] = r); var c = t.queryComponents(h); s[l + 'Models'] = c, s[l + 'Model'] = c[0]
          }
        } else {s[a] = r}
      })), s
    } function S(t, e) {return t && t.hasOwnProperty(e)} function T(t, e, i) {t.setAttribute ? t.setAttribute(e, i) : t[e] = i} function M(t, e) {return t.getAttribute ? t.getAttribute(e) : t[e]} function C(t) {return t === 'auto' ? r.domSupported ? 'html' : 'richText' : t || 'html'} function I(t, e) {
      var i = n.createHashMap(),
        r = []; return n.each(t, (function(t) {var n = e(t); (i.get(n) || (r.push(n), i.set(n, []))).push(t)})), {
        keys: r, buckets: i,
      }
    }e.normalizeToArray = u, e.defaultEmphasis = h, e.TEXT_STYLE_OPTIONS = c, e.getDataItemValue = d, e.isDataItemOption = f, e.mappingToExists = p, e.makeIdAndName = g, e.isNameSpecified = v, e.isIdInner = m, e.compressBatches = y, e.queryDataIndex = x, e.makeInner = _, e.parseFinder = w, e.setAttribute = T, e.getAttribute = M, e.getTooltipRenderMode = C, e.groupData = I
  },
  e0d8: function(t, e, i) {
    var n = i('625e'); function r(t) {this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments)}r.prototype.parse = function(t) {return t}, r.prototype.getSetting = function(t) {return this._setting[t]}, r.prototype.contain = function(t) {var e = this._extent; return t >= e[0] && t <= e[1]}, r.prototype.normalize = function(t) {var e = this._extent; return e[1] === e[0] ? 0.5 : (t - e[0]) / (e[1] - e[0])}, r.prototype.scale = function(t) {var e = this._extent; return t * (e[1] - e[0]) + e[0]}, r.prototype.unionExtent = function(t) {var e = this._extent; t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])}, r.prototype.unionExtentFromData = function(t, e) {this.unionExtent(t.getApproximateExtent(e))}, r.prototype.getExtent = function() {return this._extent.slice()}, r.prototype.setExtent = function(t, e) {var i = this._extent; isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e)}, r.prototype.isBlank = function() {return this._isBlank}, r.prototype.setBlank = function(t) {this._isBlank = t}, r.prototype.getLabel = null, n.enableClassExtend(r), n.enableClassManagement(r, {
      registerWhenExtend: !0,
    }); var a = r; t.exports = a
  },
  e1fc: function(t, e, i) {
    var n = i('6d8b'),
      r = i('d5b7'),
      a = i('9850'),
      o = function(t) {for (var e in t = t || {}, r.call(this, t), t) {t.hasOwnProperty(e) && (this[e] = t[e]);} this._children = [], this.__storage = null, this.__dirty = !0}; o.prototype = {
      constructor: o,
      isGroup: !0,
      type: 'group',
      silent: !1,
      children: function() {return this._children.slice()},
      childAt: function(t) {return this._children[t]},
      childOfName: function(t) {for (var e = this._children, i = 0; i < e.length; i++) {if (e[i].name === t) {return e[i]}}},
      childCount: function() {return this._children.length},
      add: function(t) {return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this},
      addBefore: function(t, e) {
        if (t && t !== this && t.parent !== this && e && e.parent === this) {
          var i = this._children,
            n = i.indexOf(e); n >= 0 && (i.splice(n, 0, t), this._doAdd(t))
        } return this
      },
      _doAdd: function(t) {
        t.parent && t.parent.remove(t), t.parent = this; var e = this.__storage,
          i = this.__zr; e && e !== t.__storage && (e.addToStorage(t), t instanceof o && t.addChildrenToStorage(e)), i && i.refresh()
      },
      remove: function(t) {
        var e = this.__zr,
          i = this.__storage,
          r = this._children,
          a = n.indexOf(r, t); return a < 0 || (r.splice(a, 1), t.parent = null, i && (i.delFromStorage(t), t instanceof o && t.delChildrenFromStorage(i)), e && e.refresh()), this
      },
      removeAll: function() {
        var t, e,
          i = this._children,
          n = this.__storage; for (e = 0; e < i.length; e++) {t = i[e], n && (n.delFromStorage(t), t instanceof o && t.delChildrenFromStorage(n)), t.parent = null;} return i.length = 0, this
      },
      eachChild: function(t, e) {for (var i = this._children, n = 0; n < i.length; n++) {var r = i[n]; t.call(e, r, n)} return this},
      traverse: function(t, e) {for (var i = 0; i < this._children.length; i++) {var n = this._children[i]; t.call(e, n), n.type === 'group' && n.traverse(t, e)} return this},
      addChildrenToStorage: function(t) {for (var e = 0; e < this._children.length; e++) {var i = this._children[e]; t.addToStorage(i), i instanceof o && i.addChildrenToStorage(t)}},
      delChildrenFromStorage: function(t) {for (var e = 0; e < this._children.length; e++) {var i = this._children[e]; t.delFromStorage(i), i instanceof o && i.delChildrenFromStorage(t)}},
      dirty: function() {return this.__dirty = !0, this.__zr && this.__zr.refresh(), this},
      getBoundingRect: function(t) {
        for (var e = null, i = new a(0, 0, 0, 0), n = t || this._children, r = [], o = 0; o < n.length; o++) {
          var s = n[o]; if (!s.ignore && !s.invisible) {
            var l = s.getBoundingRect(),
              u = s.getLocalTransform(r); u ? (i.copy(l), i.applyTransform(u), e = e || i.clone(), e.union(i)) : (e = e || l.clone(), e.union(l))
          }
        } return e || i
      },
    }, n.inherits(o, r); var s = o; t.exports = s
  },
  e263: function(t, e, i) {
    var n = i('401b'),
      r = i('4a3f'),
      a = Math.min,
      o = Math.max,
      s = Math.sin,
      l = Math.cos,
      u = 2 * Math.PI,
      h = n.create(),
      c = n.create(),
      d = n.create(); function f(t, e, i) {
      if (t.length !== 0) {
        var n,
          r = t[0],
          s = r[0],
          l = r[0],
          u = r[1],
          h = r[1]; for (n = 1; n < t.length; n++) {r = t[n], s = a(s, r[0]), l = o(l, r[0]), u = a(u, r[1]), h = o(h, r[1]);}e[0] = s, e[1] = u, i[0] = l, i[1] = h
      }
    } function p(t, e, i, n, r, s) {r[0] = a(t, i), r[1] = a(e, n), s[0] = o(t, i), s[1] = o(e, n)} var g = [],
      v = []; function m(t, e, i, n, s, l, u, h, c, d) {
      var f,
        p = r.cubicExtrema,
        m = r.cubicAt,
        y = p(t, i, s, u, g); for (c[0] = 1 / 0, c[1] = 1 / 0, d[0] = -1 / 0, d[1] = -1 / 0, f = 0; f < y; f++) {var x = m(t, i, s, u, g[f]); c[0] = a(x, c[0]), d[0] = o(x, d[0])} for (y = p(e, n, l, h, v), f = 0; f < y; f++) {var _ = m(e, n, l, h, v[f]); c[1] = a(_, c[1]), d[1] = o(_, d[1])}c[0] = a(t, c[0]), d[0] = o(t, d[0]), c[0] = a(u, c[0]), d[0] = o(u, d[0]), c[1] = a(e, c[1]), d[1] = o(e, d[1]), c[1] = a(h, c[1]), d[1] = o(h, d[1])
    } function y(t, e, i, n, s, l, u, h) {
      var c = r.quadraticExtremum,
        d = r.quadraticAt,
        f = o(a(c(t, i, s), 1), 0),
        p = o(a(c(e, n, l), 1), 0),
        g = d(t, i, s, f),
        v = d(e, n, l, p); u[0] = a(t, s, g), u[1] = a(e, l, v), h[0] = o(t, s, g), h[1] = o(e, l, v)
    } function x(t, e, i, r, a, o, f, p, g) {
      var v = n.min,
        m = n.max,
        y = Math.abs(a - o); if (y % u < 1e-4 && y > 1e-4) {return p[0] = t - i, p[1] = e - r, g[0] = t + i, void (g[1] = e + r);} if (h[0] = l(a) * i + t, h[1] = s(a) * r + e, c[0] = l(o) * i + t, c[1] = s(o) * r + e, v(p, h, c), m(g, h, c), a %= u, a < 0 && (a += u), o %= u, o < 0 && (o += u), a > o && !f ? o += u : a < o && f && (a += u), f) {var x = o; o = a, a = x} for (var _ = 0; _ < o; _ += Math.PI / 2) {_ > a && (d[0] = l(_) * i + t, d[1] = s(_) * r + e, v(p, d, p), m(g, d, g))}
    }e.fromPoints = f, e.fromLine = p, e.fromCubic = m, e.fromQuadratic = y, e.fromArc = x
  },
  e47b: function(t, e, i) {
    var n = i('e0d3'),
      r = n.makeInner,
      a = n.normalizeToArray,
      o = r(); function s(t, e) {for (var i = t.length, n = 0; n < i; n++) {if (t[n].length > e) {return t[n];}} return t[i - 1]} var l = {
      clearColorPalette: function() {o(this).colorIdx = 0, o(this).colorNameMap = {}},
      getColorFromPalette: function(t, e, i) {
        e = e || this; var n = o(e),
          r = n.colorIdx || 0,
          l = n.colorNameMap = n.colorNameMap || {}; if (l.hasOwnProperty(t)) {return l[t];} var u = a(this.get('color', !0)),
          h = this.get('colorLayer', !0),
          c = i != null && h ? s(h, i) : u; if (c = c || u, c && c.length) {var d = c[r]; return t && (l[t] = d), n.colorIdx = (r + 1) % c.length, d}
      },
    }; t.exports = l
  },
  e7d2: function(t, e, i) {var n = i('4a3f'); function r(t, e, i, r, a, o, s, l, u, h, c) {if (u === 0) {return !1;} var d = u; if (c > e + d && c > r + d && c > o + d && c > l + d || c < e - d && c < r - d && c < o - d && c < l - d || h > t + d && h > i + d && h > a + d && h > s + d || h < t - d && h < i - d && h < a - d && h < s - d) {return !1;} var f = n.cubicProjectPoint(t, e, i, r, a, o, s, l, h, c, null); return f <= d / 2}e.containStroke = r},
  e86a: function(t, e, i) {
    var n = i('9850'),
      r = i('5e76'),
      a = i('6d8b'),
      o = a.getContext,
      s = a.extend,
      l = a.retrieve2,
      u = a.retrieve3,
      h = a.trim,
      c = {},
      d = 0,
      f = 5e3,
      p = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
      g = '12px sans-serif',
      v = {}; function m(t, e) {v[t] = e} function y(t, e) {e = e || g; var i = t + ':' + e; if (c[i]) {return c[i];} for (var n = (t + '').split('\n'), r = 0, a = 0, o = n.length; a < o; a++) {r = Math.max(O(n[a], e).width, r);} return d > f && (d = 0, c = {}), d++, c[i] = r, r} function x(t, e, i, n, r, a, o, s) {return o ? b(t, e, i, n, r, a, o, s) : _(t, e, i, n, r, a, s)} function _(t, e, i, r, a, o, s) {
      var l = P(t, e, a, o, s),
        u = y(t, e); a && (u += a[1] + a[3]); var h = l.outerHeight,
        c = w(0, u, i),
        d = S(0, h, r),
        f = new n(c, d, u, h); return f.lineHeight = l.lineHeight, f
    } function b(t, e, i, r, a, o, s, l) {
      var u = L(t, {
          rich: s, truncate: l, font: e, textAlign: i, textPadding: a, textLineHeight: o,
        }),
        h = u.outerWidth,
        c = u.outerHeight,
        d = w(0, h, i),
        f = S(0, c, r); return new n(d, f, h, c)
    } function w(t, e, i) {return i === 'right' ? t -= e : i === 'center' && (t -= e / 2), t} function S(t, e, i) {return i === 'middle' ? t -= e / 2 : i === 'bottom' && (t -= e), t} function T(t, e, i) {
      var n = e.textPosition,
        r = e.textDistance,
        a = i.x,
        o = i.y; r = r || 0; var s = i.height,
        l = i.width,
        u = s / 2,
        h = 'left',
        c = 'top'; switch (n) {case 'left':a -= r, o += u, h = 'right', c = 'middle'; break; case 'right':a += r + l, o += u, c = 'middle'; break; case 'top':a += l / 2, o -= r, h = 'center', c = 'bottom'; break; case 'bottom':a += l / 2, o += s + r, h = 'center'; break; case 'inside':a += l / 2, o += u, h = 'center', c = 'middle'; break; case 'insideLeft':a += r, o += u, c = 'middle'; break; case 'insideRight':a += l - r, o += u, h = 'right', c = 'middle'; break; case 'insideTop':a += l / 2, o += r, h = 'center'; break; case 'insideBottom':a += l / 2, o += s - r, h = 'center', c = 'bottom'; break; case 'insideTopLeft':a += r, o += r; break; case 'insideTopRight':a += l - r, o += r, h = 'right'; break; case 'insideBottomLeft':a += r, o += s - r, c = 'bottom'; break; case 'insideBottomRight':a += l - r, o += s - r, h = 'right', c = 'bottom'; break} return t = t || {}, t.x = a, t.y = o, t.textAlign = h, t.textVerticalAlign = c, t
    } function M(t, e, i) {
      var n = {
        textPosition: t, textDistance: i,
      }; return T({}, n, e)
    } function C(t, e, i, n, r) {if (!e) {return '';} var a = (t + '').split('\n'); r = I(e, i, n, r); for (var o = 0, s = a.length; o < s; o++) {a[o] = A(a[o], r);} return a.join('\n')} function I(t, e, i, n) {n = s({}, n), n.font = e; i = l(i, '...'); n.maxIterations = l(n.maxIterations, 2); var r = n.minChar = l(n.minChar, 0); n.cnCharWidth = y('国', e); var a = n.ascCharWidth = y('a', e); n.placeholder = l(n.placeholder, ''); for (var o = t = Math.max(0, t - 1), u = 0; u < r && o >= a; u++) {o -= a;} var h = y(i, e); return h > o && (i = '', h = 0), o = t - h, n.ellipsis = i, n.ellipsisWidth = h, n.contentWidth = o, n.containerWidth = t, n} function A(t, e) {
      var i = e.containerWidth,
        n = e.font,
        r = e.contentWidth; if (!i) {return '';} var a = y(t, n); if (a <= i) {return t;} for (var o = 0; ;o++) {if (a <= r || o >= e.maxIterations) {t += e.ellipsis; break} var s = o === 0 ? k(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0; t = t.substr(0, s), a = y(t, n)} return t === '' && (t = e.placeholder), t
    } function k(t, e, i, n) {for (var r = 0, a = 0, o = t.length; a < o && r < e; a++) {var s = t.charCodeAt(a); r += s >= 0 && s <= 127 ? i : n} return a} function D(t) {return y('国', t)} function O(t, e) {return v.measureText(t, e)} function P(t, e, i, n, r) {
      t != null && (t += ''); var a = l(n, D(e)),
        o = t ? t.split('\n') : [],
        s = o.length * a,
        u = s,
        h = !0; if (i && (u += i[0] + i[2]), t && r) {
        h = !1; var c = r.outerHeight,
          d = r.outerWidth; if (c != null && u > c) {t = '', o = [];} else if (d != null) {
          for (var f = I(d - (i ? i[1] + i[3] : 0), e, r.ellipsis, {
              minChar: r.minChar, placeholder: r.placeholder,
            }), p = 0, g = o.length; p < g; p++) {o[p] = A(o[p], f)}
        }
      } return {
        lines: o, height: s, outerHeight: u, lineHeight: a, canCacheByTextString: h,
      }
    } function L(t, e) {
      var i = {
        lines: [], width: 0, height: 0,
      }; if (t != null && (t += ''), !t) {return i;} var n,
        a = p.lastIndex = 0; while ((n = p.exec(t)) != null) {var o = n.index; o > a && E(i, t.substring(a, o)), E(i, n[2], n[1]), a = p.lastIndex}a < t.length && E(i, t.substring(a, t.length)); var s = i.lines,
        h = 0,
        c = 0,
        d = [],
        f = e.textPadding,
        g = e.truncate,
        v = g && g.outerWidth,
        m = g && g.outerHeight; f && (v != null && (v -= f[1] + f[3]), m != null && (m -= f[0] + f[2])); for (var x = 0; x < s.length; x++) {
        for (var _ = s[x], b = 0, w = 0, S = 0; S < _.tokens.length; S++) {
          var T = _.tokens[S],
            M = T.styleName && e.rich[T.styleName] || {},
            I = T.textPadding = M.textPadding,
            A = T.font = M.font || e.font,
            k = T.textHeight = l(M.textHeight, D(A)); if (I && (k += I[0] + I[2]), T.height = k, T.lineHeight = u(M.textLineHeight, e.textLineHeight, k), T.textAlign = M && M.textAlign || e.textAlign, T.textVerticalAlign = M && M.textVerticalAlign || 'middle', m != null && h + T.lineHeight > m) {
            return {
              lines: [], width: 0, height: 0,
            };
          } T.textWidth = y(T.text, A); var O = M.textWidth,
            P = O == null || O === 'auto'; if (typeof O === 'string' && O.charAt(O.length - 1) === '%') {T.percentWidth = O, d.push(T), O = 0;} else {
            if (P) {
              O = T.textWidth; var L = M.textBackgroundColor,
                R = L && L.image; R && (R = r.findExistImage(R), r.isImageReady(R) && (O = Math.max(O, R.width * k / R.height)))
            } var B = I ? I[1] + I[3] : 0; O += B; var z = v != null ? v - w : null; z != null && z < O && (!P || z < B ? (T.text = '', T.textWidth = O = 0) : (T.text = C(T.text, z - B, A, g.ellipsis, {
              minChar: g.minChar,
            }), T.textWidth = y(T.text, A), O = T.textWidth + B))
          }w += T.width = O, M && (b = Math.max(b, T.lineHeight))
        }_.width = w, _.lineHeight = b, h += b, c = Math.max(c, w)
      }i.outerWidth = i.width = l(e.textWidth, c), i.outerHeight = i.height = l(e.textHeight, h), f && (i.outerWidth += f[1] + f[3], i.outerHeight += f[0] + f[2]); for (x = 0; x < d.length; x++) {T = d[x]; var N = T.percentWidth; T.width = parseInt(N, 10) / 100 * c} return i
    } function E(t, e, i) {
      for (var n = e === '', r = e.split('\n'), a = t.lines, o = 0; o < r.length; o++) {
        var s = r[o],
          l = {
            styleName: i, text: s, isLineHolder: !s && !n,
          }; if (o) {
          a.push({
            tokens: [l],
          });
        } else {
          var u = (a[a.length - 1] || (a[0] = {
              tokens: [],
            })).tokens,
            h = u.length; h === 1 && u[0].isLineHolder ? u[0] = l : (s || !h || n) && u.push(l)
        }
      }
    } function R(t) {var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + 'px', t.fontFamily || 'sans-serif'].join(' '); return e && h(e) || t.textFont || t.font}v.measureText = function(t, e) {var i = o(); return i.font = e || g, i.measureText(t)}, e.DEFAULT_FONT = g, e.$override = m, e.getWidth = y, e.getBoundingRect = x, e.adjustTextX = w, e.adjustTextY = S, e.calculateTextPosition = T, e.adjustTextPositionOnRect = M, e.truncateText = C, e.getLineHeight = D, e.measureText = O, e.parsePlainText = P, e.parseRichText = L, e.makeFont = R
  },
  e887: function(t, e, i) {
    var n = i('6d8b'),
      r = n.each,
      a = i('e1fc'),
      o = i('8918'),
      s = i('625e'),
      l = i('e0d3'),
      u = i('2306'),
      h = i('f47d'),
      c = h.createTask,
      d = i('cccd'),
      f = l.makeInner(),
      p = d(); function g() {
      this.group = new a(), this.uid = o.getUID('viewChart'), this.renderTask = c({
        plan: x, reset: _,
      }), this.renderTask.context = {
        view: this,
      }
    }g.prototype = {
      type: 'chart', init: function(t, e) {}, render: function(t, e, i, n) {}, highlight: function(t, e, i, n) {y(t.getData(), n, 'emphasis')}, downplay: function(t, e, i, n) {y(t.getData(), n, 'normal')}, remove: function(t, e) {this.group.removeAll()}, dispose: function() {}, incrementalPrepareRender: null, incrementalRender: null, updateTransform: null, filterForExposedEvent: null,
    }; var v = g.prototype; function m(t, e, i) {if (t && (t.trigger(e, i), t.isGroup && !u.isHighDownDispatcher(t))) {for (var n = 0, r = t.childCount(); n < r; n++) {m(t.childAt(n), e, i)}}} function y(t, e, i) {
      var n = l.queryDataIndex(t, e),
        a = e && e.highlightKey != null ? u.getHighlightDigit(e.highlightKey) : null; n != null ? r(l.normalizeToArray(n), (function(e) {m(t.getItemGraphicEl(e), i, a)})) : t.eachItemGraphicEl((function(t) {m(t, i, a)}))
    } function x(t) {return p(t.model)} function _(t) {
      var e = t.model,
        i = t.ecModel,
        n = t.api,
        r = t.payload,
        a = e.pipelineContext.progressiveRender,
        o = t.view,
        s = r && f(r).updateMethod,
        l = a ? 'incrementalPrepareRender' : s && o[s] ? s : 'render'; return l !== 'render' && o[l](e, i, n, r), b[l]
    }v.updateView = v.updateLayout = v.updateVisual = function(t, e, i, n) {this.render(t, e, i, n)}, s.enableClassExtend(g, ['dispose']), s.enableClassManagement(g, {
      registerWhenExtend: !0,
    }), g.markUpdateMethod = function(t, e) {f(t).updateMethod = e}; var b = {
        incrementalPrepareRender: {
          progress: function(t, e) {e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)},
        },
        render: {
          forceFirstProgress: !0, progress: function(t, e) {e.view.render(e.model, e.ecModel, e.api, e.payload)},
        },
      },
      w = g; t.exports = w
  },
  eb6b: function(t, e, i) {
    var n = i('6d8b'),
      r = i('e0d3'),
      a = r.makeInner,
      o = i('cd33'),
      s = i('133d'),
      l = n.each,
      u = n.curry,
      h = a(); function c(t, e, i) {
      var r = t.currTrigger,
        a = [t.x, t.y],
        o = t,
        h = t.dispatchAction || n.bind(i.dispatchAction, i),
        c = e.getComponent('axisPointer').coordSysAxesInfo; if (c) {
        b(a) && (a = s({
          seriesIndex: o.seriesIndex, dataIndex: o.dataIndex,
        }, e).point); var f = b(a),
          w = o.axesInfo,
          S = c.axesInfo,
          T = r === 'leave' || b(a),
          M = {},
          C = {},
          I = {
            list: [], map: {},
          },
          A = {
            showPointer: u(p, C), showTooltip: u(g, I),
          }; l(c.coordSysMap, (function(t, e) {
          var i = f || t.containPoint(a); l(c.coordSysAxesInfo[e], (function(t, e) {
            var n = t.axis,
              r = x(w, t); if (!T && i && (!w || r)) {var o = r && r.value; o != null || f || (o = n.pointToData(a)), o != null && d(t, o, A, !1, M)}
          }))
        })); var k = {}; return l(S, (function(t, e) {var i = t.linkGroup; i && !C[e] && l(i.axesInfo, (function(e, n) {var r = C[n]; if (e !== t && r) {var a = r.value; i.mapper && (a = t.axis.scale.parse(i.mapper(a, _(e), _(t)))), k[t.key] = a}}))})), l(k, (function(t, e) {d(S[e], t, A, !0, M)})), v(C, S, M), m(I, a, t, h), y(S, h, i), M
      }
    } function d(t, e, i, r, a) {
      var o = t.axis; if (!o.scale.isBlank() && o.containData(e)) {
        if (t.involveSeries) {
          var s = f(e, t),
            l = s.payloadBatch,
            u = s.snapToValue; l[0] && a.seriesIndex == null && n.extend(a, l[0]), !r && t.snap && o.containData(u) && u != null && (e = u), i.showPointer(t, e, l, a), i.showTooltip(t, s, u)
        } else {i.showPointer(t, e)}
      }
    } function f(t, e) {
      var i = e.axis,
        n = i.dim,
        r = t,
        a = [],
        o = Number.MAX_VALUE,
        s = -1; return l(e.seriesModels, (function(e, u) {
        var h, c,
          d = e.getData().mapDimension(n, !0); if (e.getAxisTooltipData) {var f = e.getAxisTooltipData(d, t, i); c = f.dataIndices, h = f.nestestValue} else {if (c = e.getData().indicesOfNearest(d[0], t, i.type === 'category' ? 0.5 : null), !c.length) {return;} h = e.getData().get(d[0], c[0])} if (h != null && isFinite(h)) {
          var p = t - h,
            g = Math.abs(p); g <= o && ((g < o || p >= 0 && s < 0) && (o = g, s = p, r = h, a.length = 0), l(c, (function(t) {
            a.push({
              seriesIndex: e.seriesIndex, dataIndexInside: t, dataIndex: e.getData().getRawIndex(t),
            })
          })))
        }
      })), {
        payloadBatch: a, snapToValue: r,
      }
    } function p(t, e, i, n) {
      t[e.key] = {
        value: i, payloadBatch: n,
      }
    } function g(t, e, i, n) {
      var r = i.payloadBatch,
        a = e.axis,
        s = a.model,
        l = e.axisPointerModel; if (e.triggerTooltip && r.length) {
        var u = e.coordSys.model,
          h = o.makeKey(u),
          c = t.map[h]; c || (c = t.map[h] = {
          coordSysId: u.id, coordSysIndex: u.componentIndex, coordSysType: u.type, coordSysMainType: u.mainType, dataByAxis: [],
        }, t.list.push(c)), c.dataByAxis.push({
          axisDim: a.dim,
          axisIndex: s.componentIndex,
          axisType: s.type,
          axisId: s.id,
          value: n,
          valueLabelOpt: {
            precision: l.get('label.precision'), formatter: l.get('label.formatter'),
          },
          seriesDataIndices: r.slice(),
        })
      }
    } function v(t, e, i) {
      var n = i.axesInfo = []; l(e, (function(e, i) {
        var r = e.axisPointerModel.option,
          a = t[i]; a ? (!e.useHandle && (r.status = 'show'), r.value = a.value, r.seriesDataIndices = (a.payloadBatch || []).slice()) : !e.useHandle && (r.status = 'hide'), r.status === 'show' && n.push({
          axisDim: e.axis.dim, axisIndex: e.axis.model.componentIndex, value: r.value,
        })
      }))
    } function m(t, e, i, n) {
      if (!b(e) && t.list.length) {
        var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {}; n({
          type: 'showTip', escapeConnect: !0, x: e[0], y: e[1], tooltipOption: i.tooltipOption, position: i.position, dataIndexInside: r.dataIndexInside, dataIndex: r.dataIndex, seriesIndex: r.seriesIndex, dataByCoordSys: t.list,
        })
      } else {
        n({
          type: 'hideTip',
        })
      }
    } function y(t, e, i) {
      var r = i.getZr(),
        a = 'axisPointerLastHighlights',
        o = h(r)[a] || {},
        s = h(r)[a] = {}; l(t, (function(t, e) {var i = t.axisPointerModel.option; i.status === 'show' && l(i.seriesDataIndices, (function(t) {var e = t.seriesIndex + ' | ' + t.dataIndex; s[e] = t}))})); var u = [],
        c = []; n.each(o, (function(t, e) {!s[e] && c.push(t)})), n.each(s, (function(t, e) {!o[e] && u.push(t)})), c.length && i.dispatchAction({
        type: 'downplay', escapeConnect: !0, batch: c,
      }), u.length && i.dispatchAction({
        type: 'highlight', escapeConnect: !0, batch: u,
      })
    } function x(t, e) {for (var i = 0; i < (t || []).length; i++) {var n = t[i]; if (e.axis.dim === n.axisDim && e.axis.model.componentIndex === n.axisIndex) {return n}}} function _(t) {
      var e = t.axis.model,
        i = {},
        n = i.axisDim = t.axis.dim; return i.axisIndex = i[n + 'AxisIndex'] = e.componentIndex, i.axisName = i[n + 'AxisName'] = e.name, i.axisId = i[n + 'AxisId'] = e.id, i
    } function b(t) {return !t || t[0] == null || isNaN(t[0]) || t[1] == null || isNaN(t[1])}t.exports = c
  },
  ec02: function(t, e, i) {
    var n = i('6d8b'),
      r = i('84ce'),
      a = function(t, e, i, n, a) {r.call(this, t, e, i), this.type = n || 'value', this.position = a || 'bottom'}; a.prototype = {
      constructor: a, index: 0, getAxesOnZeroOf: null, model: null, isHorizontal: function() {var t = this.position; return t === 'top' || t === 'bottom'}, getGlobalExtent: function(t) {var e = this.getExtent(); return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e}, getOtherAxis: function() {this.grid.getOtherAxis()}, pointToData: function(t, e) {return this.coordToData(this.toLocalCoord(t[this.dim === 'x' ? 0 : 1]), e)}, toLocalCoord: null, toGlobalCoord: null,
    }, n.inherits(a, r); var o = a; t.exports = o
  },
  ec34: function(t, e, i) {
    var n = i('4e08'),
      r = (n.__DEV__, i('6d8b')),
      a = r.createHashMap,
      o = r.isString,
      s = r.isArray,
      l = r.each,
      u = (r.assert, i('3041')),
      h = u.parseXML,
      c = a(),
      d = {
        registerMap: function(t, e, i) {
          var n; return s(e) ? n = e : e.svg ? n = [{
            type: 'svg', source: e.svg, specialAreas: e.specialAreas,
          }] : (e.geoJson && !e.features && (i = e.specialAreas, e = e.geoJson), n = [{
            type: 'geoJSON', source: e, specialAreas: i,
          }]), l(n, (function(t) {var e = t.type; e === 'geoJson' && (e = t.type = 'geoJSON'); var i = f[e]; i(t)})), c.set(t, n)
        },
        retrieveMap: function(t) {return c.get(t)},
      },
      f = {
        geoJSON: function(t) {var e = t.source; t.geoJSON = o(e) ? typeof JSON !== 'undefined' && JSON.parse ? JSON.parse(e) : new Function('return (' + e + ');')() : e}, svg: function(t) {t.svgXML = h(t.source)},
      }; t.exports = d
  },
  ec6f: function(t, e, i) {
    var n = i('6d8b'),
      r = n.createHashMap,
      a = n.isTypedArray,
      o = i('625e'),
      s = o.enableClassCheck,
      l = i('93d0'),
      u = l.SOURCE_FORMAT_ORIGINAL,
      h = l.SERIES_LAYOUT_BY_COLUMN,
      c = l.SOURCE_FORMAT_UNKNOWN,
      d = l.SOURCE_FORMAT_TYPED_ARRAY,
      f = l.SOURCE_FORMAT_KEYED_COLUMNS; function p(t) {this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === f ? {} : []), this.sourceFormat = t.sourceFormat || c, this.seriesLayoutBy = t.seriesLayoutBy || h, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && r(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount}p.seriesDataToSource = function(t) {
      return new p({
        data: t, sourceFormat: a(t) ? d : u, fromDataset: !1,
      })
    }, s(p); var g = p; t.exports = g
  },
  ed21: function(t, e, i) {
    var n = i('2cf4c'),
      r = n.devicePixelRatio,
      a = i('6d8b'),
      o = i('4942'),
      s = i('9850'),
      l = i('04f6'),
      u = i('5e68'),
      h = i('98b7'),
      c = i('0da8'),
      d = i('22d1'),
      f = 1e5,
      p = 314159,
      g = 0.01,
      v = 0.001; function m(t) {return parseInt(t, 10)} function y(t) {return !!t && (!!t.__builtin__ || typeof t.resize === 'function' && typeof t.refresh === 'function')} var x = new s(0, 0, 0, 0),
      _ = new s(0, 0, 0, 0); function b(t, e, i) {return x.copy(t.getBoundingRect()), t.transform && x.applyTransform(t.transform), _.width = e, _.height = i, !x.intersect(_)} function w(t, e) {if (t === e) {return !1;} if (!t || !e || t.length !== e.length) {return !0;} for (var i = 0; i < t.length; i++) {if (t[i] !== e[i]) {return !0;}} return !1} function S(t, e) {for (var i = 0; i < t.length; i++) {var n = t[i]; n.setTransform(e), e.beginPath(), n.buildPath(e, n.shape), e.clip(), n.restoreTransform(e)}} function T(t, e) {var i = document.createElement('div'); return i.style.cssText = ['position:relative', 'width:' + t + 'px', 'height:' + e + 'px', 'padding:0', 'margin:0', 'border-width:0'].join(';') + ';', i} var M = function(t, e, i) {
      this.type = 'canvas'; var n = !t.nodeName || t.nodeName.toUpperCase() === 'CANVAS'; this._opts = i = a.extend({}, i || {}), this.dpr = i.devicePixelRatio || r, this._singleCanvas = n, this.root = t; var o = t.style; o && (o['-webkit-tap-highlight-color'] = 'transparent', o['-webkit-user-select'] = o['user-select'] = o['-webkit-touch-callout'] = 'none', t.innerHTML = ''), this.storage = e; var s = this._zlevelList = [],
        l = this._layers = {}; if (this._layerConfig = {}, this._needsManuallyCompositing = !1, n) {
        var h = t.width,
          c = t.height; i.width != null && (h = i.width), i.height != null && (c = i.height), this.dpr = i.devicePixelRatio || 1, t.width = h * this.dpr, t.height = c * this.dpr, this._width = h, this._height = c; var d = new u(t, this, this.dpr); d.__builtin__ = !0, d.initContext(), l[p] = d, d.zlevel = p, s.push(p), this._domRoot = t
      } else {this._width = this._getSize(0), this._height = this._getSize(1); var f = this._domRoot = T(this._width, this._height); t.appendChild(f)} this._hoverlayer = null, this._hoverElements = []
    }; M.prototype = {
      constructor: M,
      getType: function() {return 'canvas'},
      isSingleCanvas: function() {return this._singleCanvas},
      getViewportRoot: function() {return this._domRoot},
      getViewportRootOffset: function() {
        var t = this.getViewportRoot(); if (t) {
          return {
            offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0,
          }
        }
      },
      refresh: function(t) {
        var e = this.storage.getDisplayList(!0),
          i = this._zlevelList; this._redrawId = Math.random(), this._paintList(e, t, this._redrawId); for (var n = 0; n < i.length; n++) {
          var r = i[n],
            a = this._layers[r]; if (!a.__builtin__ && a.refresh) {var o = n === 0 ? this._backgroundColor : null; a.refresh(o)}
        } return this.refreshHover(), this
      },
      addHover: function(t, e) {
        if (!t.__hoverMir) {
          var i = new t.constructor({
            style: t.style, shape: t.shape, z: t.z, z2: t.z2, silent: t.silent,
          }); return i.__from = t, t.__hoverMir = i, e && i.setStyle(e), this._hoverElements.push(i), i
        }
      },
      removeHover: function(t) {
        var e = t.__hoverMir,
          i = this._hoverElements,
          n = a.indexOf(i, e); n >= 0 && i.splice(n, 1), t.__hoverMir = null
      },
      clearHover: function(t) {for (var e = this._hoverElements, i = 0; i < e.length; i++) {var n = e[i].__from; n && (n.__hoverMir = null)}e.length = 0},
      refreshHover: function() {
        var t = this._hoverElements,
          e = t.length,
          i = this._hoverlayer; if (i && i.clear(), e) {
          l(t, this.storage.displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(f)); var n = {}; i.ctx.save(); for (var r = 0; r < e;) {
            var a = t[r],
              o = a.__from; o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, i, !0, n))) : (t.splice(r, 1), o.__hoverMir = null, e--)
          }i.ctx.restore()
        }
      },
      getHoverLayer: function() {return this.getLayer(f)},
      _paintList: function(t, e, i) {if (this._redrawId === i) {e = e || !1, this._updateLayerStatus(t); var n = this._doPaintList(t, e); if (this._needsManuallyCompositing && this._compositeManually(), !n) {var r = this; h((function() {r._paintList(t, e, i)}))}}},
      _compositeManually: function() {
        var t = this.getLayer(p).ctx,
          e = this._domRoot.width,
          i = this._domRoot.height; t.clearRect(0, 0, e, i), this.eachBuiltinLayer((function(n) {n.virtual && t.drawImage(n.dom, 0, 0, e, i)}))
      },
      _doPaintList: function(t, e) {
        for (var i = [], n = 0; n < this._zlevelList.length; n++) {
          var r = this._zlevelList[n],
            o = this._layers[r]; o.__builtin__ && o !== this._hoverlayer && (o.__dirty || e) && i.push(o)
        } for (var s = !0, l = 0; l < i.length; l++) {
          o = i[l]; var u = o.ctx,
            h = {}; u.save(); var c = e ? o.__startIndex : o.__drawIndex,
            f = !e && o.incremental && Date.now,
            p = f && Date.now(),
            g = o.zlevel === this._zlevelList[0] ? this._backgroundColor : null; if (o.__startIndex === o.__endIndex) {o.clear(!1, g);} else if (c === o.__startIndex) {var v = t[c]; v.incremental && v.notClear && !e || o.clear(!1, g)}c === -1 && (console.error('For some unknown reason. drawIndex is -1'), c = o.__startIndex); for (var m = c; m < o.__endIndex; m++) {var y = t[m]; if (this._doPaintEl(y, o, e, h), y.__dirty = y.__dirtyText = !1, f) {var x = Date.now() - p; if (x > 15) {break}}}o.__drawIndex = m, o.__drawIndex < o.__endIndex && (s = !1), h.prevElClipPaths && u.restore(), u.restore()
        } return d.wxa && a.each(this._layers, (function(t) {t && t.ctx && t.ctx.draw && t.ctx.draw()})), s
      },
      _doPaintEl: function(t, e, i, n) {
        var r = e.ctx,
          a = t.transform; if ((e.__dirty || i) && !t.invisible && t.style.opacity !== 0 && (!a || a[0] || a[3]) && (!t.culling || !b(t, this._width, this._height))) {
          var o = t.__clipPaths,
            s = n.prevElClipPaths; s && !w(o, s) || (s && (r.restore(), n.prevElClipPaths = null, n.prevEl = null), o && (r.save(), S(o, r), n.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, n.prevEl || null), n.prevEl = t, t.afterBrush && t.afterBrush(r)
        }
      },
      getLayer: function(t, e) {this._singleCanvas && !this._needsManuallyCompositing && (t = p); var i = this._layers[t]; return i || (i = new u('zr_' + t, this, this.dpr), i.zlevel = t, i.__builtin__ = !0, this._layerConfig[t] && a.merge(i, this._layerConfig[t], !0), e && (i.virtual = e), this.insertLayer(t, i), i.initContext()), i},
      insertLayer: function(t, e) {
        var i = this._layers,
          n = this._zlevelList,
          r = n.length,
          a = null,
          s = -1,
          l = this._domRoot; if (i[t]) {o('ZLevel ' + t + ' has been used already');} else if (y(e)) {if (r > 0 && t > n[0]) {for (s = 0; s < r - 1; s++) {if (n[s] < t && n[s + 1] > t) {break;}} a = i[n[s]]} if (n.splice(s + 1, 0, t), i[t] = e, !e.virtual) {if (a) {var u = a.dom; u.nextSibling ? l.insertBefore(e.dom, u.nextSibling) : l.appendChild(e.dom)} else {l.firstChild ? l.insertBefore(e.dom, l.firstChild) : l.appendChild(e.dom)}}} else {o('Layer of zlevel ' + t + ' is not valid')}
      },
      eachLayer: function(t, e) {
        var i, n,
          r = this._zlevelList; for (n = 0; n < r.length; n++) {i = r[n], t.call(e, this._layers[i], i)}
      },
      eachBuiltinLayer: function(t, e) {
        var i, n, r,
          a = this._zlevelList; for (r = 0; r < a.length; r++) {n = a[r], i = this._layers[n], i.__builtin__ && t.call(e, i, n)}
      },
      eachOtherLayer: function(t, e) {
        var i, n, r,
          a = this._zlevelList; for (r = 0; r < a.length; r++) {n = a[r], i = this._layers[n], i.__builtin__ || t.call(e, i, n)}
      },
      getLayers: function() {return this._layers},
      _updateLayerStatus: function(t) {
        function e(t) {r && (r.__endIndex !== t && (r.__dirty = !0), r.__endIndex = t)} if (this.eachBuiltinLayer((function(t, e) {t.__dirty = t.__used = !1})), this._singleCanvas) {for (var i = 1; i < t.length; i++) {var n = t[i]; if (n.zlevel !== t[i - 1].zlevel || n.incremental) {this._needsManuallyCompositing = !0; break}}} var r = null,
          a = 0; for (i = 0; i < t.length; i++) {
          n = t[i]; var s,
            l = n.zlevel; n.incremental ? (s = this.getLayer(l + v, this._needsManuallyCompositing), s.incremental = !0, a = 1) : s = this.getLayer(l + (a > 0 ? g : 0), this._needsManuallyCompositing), s.__builtin__ || o('ZLevel ' + l + ' has been used by unkown layer ' + s.id), s !== r && (s.__used = !0, s.__startIndex !== i && (s.__dirty = !0), s.__startIndex = i, s.incremental ? s.__drawIndex = -1 : s.__drawIndex = i, e(i), r = s), n.__dirty && (s.__dirty = !0, s.incremental && s.__drawIndex < 0 && (s.__drawIndex = i))
        }e(i), this.eachBuiltinLayer((function(t, e) {!t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)}))
      },
      clear: function() {return this.eachBuiltinLayer(this._clearLayer), this},
      _clearLayer: function(t) {t.clear()},
      setBackgroundColor: function(t) {this._backgroundColor = t},
      configLayer: function(t, e) {if (e) {var i = this._layerConfig; i[t] ? a.merge(i[t], e, !0) : i[t] = e; for (var n = 0; n < this._zlevelList.length; n++) {var r = this._zlevelList[n]; if (r === t || r === t + g) {var o = this._layers[r]; a.merge(o, i[t], !0)}}}},
      delLayer: function(t) {
        var e = this._layers,
          i = this._zlevelList,
          n = e[t]; n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(a.indexOf(i, t), 1))
      },
      resize: function(t, e) {if (this._domRoot.style) {var i = this._domRoot; i.style.display = 'none'; var n = this._opts; if (t != null && (n.width = t), e != null && (n.height = e), t = this._getSize(0), e = this._getSize(1), i.style.display = '', this._width !== t || e !== this._height) {for (var r in i.style.width = t + 'px', i.style.height = e + 'px', this._layers) {this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);} a.each(this._progressiveLayers, (function(i) {i.resize(t, e)})), this.refresh(!0)} this._width = t, this._height = e} else {if (t == null || e == null) {return;} this._width = t, this._height = e, this.getLayer(p).resize(t, e)} return this},
      clearLayer: function(t) {var e = this._layers[t]; e && e.clear()},
      dispose: function() {this.root.innerHTML = '', this.root = this.storage = this._domRoot = this._layers = null},
      getRenderedCanvas: function(t) {
        if (t = t || {}, this._singleCanvas && !this._compositeManually) {return this._layers[p].dom;} var e = new u('image', this, t.pixelRatio || this.dpr); if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
          this.refresh(); var i = e.dom.width,
            n = e.dom.height,
            r = e.ctx; this.eachLayer((function(t) {t.__builtin__ ? r.drawImage(t.dom, 0, 0, i, n) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())}))
        } else {for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {var l = o[s]; this._doPaintEl(l, e, !0, a)}} return e.dom
      },
      getWidth: function() {return this._width},
      getHeight: function() {return this._height},
      _getSize: function(t) {
        var e = this._opts,
          i = ['width', 'height'][t],
          n = ['clientWidth', 'clientHeight'][t],
          r = ['paddingLeft', 'paddingTop'][t],
          a = ['paddingRight', 'paddingBottom'][t]; if (e[i] != null && e[i] !== 'auto') {return parseFloat(e[i]);} var o = this.root,
          s = document.defaultView.getComputedStyle(o); return (o[n] || m(s[i]) || m(o.style[i])) - (m(s[r]) || 0) - (m(s[a]) || 0) | 0
      },
      pathToImage: function(t, e) {
        e = e || this.dpr; var i = document.createElement('canvas'),
          n = i.getContext('2d'),
          r = t.getBoundingRect(),
          a = t.style,
          o = a.shadowBlur * e,
          s = a.shadowOffsetX * e,
          l = a.shadowOffsetY * e,
          u = a.hasStroke() ? a.lineWidth : 0,
          h = Math.max(u / 2, -s + o),
          d = Math.max(u / 2, s + o),
          f = Math.max(u / 2, -l + o),
          p = Math.max(u / 2, l + o),
          g = r.width + h + d,
          v = r.height + f + p; i.width = g * e, i.height = v * e, n.scale(e, e), n.clearRect(0, 0, g, v), n.dpr = e; var m = {
          position: t.position, rotation: t.rotation, scale: t.scale,
        }; t.position = [h - r.x, f - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(n); var y = c,
          x = new y({
            style: {
              x: 0, y: 0, image: i,
            },
          }); return m.position != null && (x.position = t.position = m.position), m.rotation != null && (x.rotation = t.rotation = m.rotation), m.scale != null && (x.scale = t.scale = m.scale), x
      },
    }; var C = M; t.exports = C
  },
  eda2: function(t, e, i) {
    var n = i('6d8b'),
      r = i('e86a'),
      a = i('3842'); function o(t) {return isNaN(t) ? '-' : (t = (t + '').split('.'), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') + (t.length > 1 ? '.' + t[1] : ''))} function s(t, e) {return t = (t || '').toLowerCase().replace(/-(.)/g, (function(t, e) {return e.toUpperCase()})), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t} var l = n.normalizeCssArray,
      u = /([&<>"'])/g,
      h = {
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
      }; function c(t) {return t == null ? '' : (t + '').replace(u, (function(t, e) {return h[e]}))} var d = ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      f = function(t, e) {return '{' + t + (e == null ? '' : e) + '}'}; function p(t, e, i) {n.isArray(e) || (e = [e]); var r = e.length; if (!r) {return '';} for (var a = e[0].$vars || [], o = 0; o < a.length; o++) {var s = d[o]; t = t.replace(f(s), f(s, 0))} for (var l = 0; l < r; l++) {for (var u = 0; u < a.length; u++) {var h = e[l][a[u]]; t = t.replace(f(d[u], l), i ? c(h) : h)}} return t} function g(t, e, i) {return n.each(e, (function(e, n) {t = t.replace('{' + n + '}', i ? c(e) : e)})), t} function v(t, e) {
      t = n.isString(t) ? {
        color: t, extraCssText: e,
      } : t || {}; var i = t.color,
        r = t.type,
        a = (e = t.extraCssText, t.renderMode || 'html'),
        o = t.markerId || 'X'; return i ? a === 'html' ? r === 'subItem' ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + c(i) + ';' + (e || '') + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + c(i) + ';' + (e || '') + '"></span>' : {
        renderMode: a,
        content: '{marker' + o + '|}  ',
        style: {
          color: i,
        },
      } : ''
    } function m(t, e) {return t += '', '0000'.substr(0, e - t.length) + t} function y(t, e, i) {
      t !== 'week' && t !== 'month' && t !== 'quarter' && t !== 'half-year' && t !== 'year' || (t = 'MM-dd\nyyyy'); var n = a.parseDate(e),
        r = i ? 'UTC' : '',
        o = n['get' + r + 'FullYear'](),
        s = n['get' + r + 'Month']() + 1,
        l = n['get' + r + 'Date'](),
        u = n['get' + r + 'Hours'](),
        h = n['get' + r + 'Minutes'](),
        c = n['get' + r + 'Seconds'](),
        d = n['get' + r + 'Milliseconds'](); return t = t.replace('MM', m(s, 2)).replace('M', s)
        .replace('yyyy', o)
        .replace('yy', o % 100)
        .replace('dd', m(l, 2))
        .replace('d', l)
        .replace('hh', m(u, 2))
        .replace('h', u)
        .replace('mm', m(h, 2))
        .replace('m', h)
        .replace('ss', m(c, 2))
        .replace('s', c)
        .replace('SSS', m(d, 3)), t
    } function x(t) {return t ? t.charAt(0).toUpperCase() + t.substr(1) : t} var _ = r.truncateText; function b(t) {return r.getBoundingRect(t.text, t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich, t.truncate)} function w(t, e, i, n, a, o, s, l) {return r.getBoundingRect(t, e, i, n, a, l, o, s)}e.addCommas = o, e.toCamelCase = s, e.normalizeCssArray = l, e.encodeHTML = c, e.formatTpl = p, e.formatTplSimple = g, e.getTooltipMarker = v, e.formatTime = y, e.capitalFirst = x, e.truncateText = _, e.getTextBoundingRect = b, e.getTextRect = w
  },
  ee1a: function(t, e, i) {
    var n = i('6d8b'),
      r = n.each,
      a = n.isString; function o(t, e, i) {
      i = i || {}; var n, o, s, l,
        u = i.byIndex,
        h = i.stackedCoordDimension,
        c = !(!t || !t.get('stack')); if (r(e, (function(t, i) {
        a(t) && (e[i] = t = {
          name: t,
        }), c && !t.isExtraCoord && (u || n || !t.ordinalMeta || (n = t), o || t.type === 'ordinal' || t.type === 'time' || h && h !== t.coordDim || (o = t))
      })), !o || u || n || (u = !0), o) {
        s = '__\0ecstackresult', l = '__\0ecstackedover', n && (n.createInvertedIndices = !0); var d = o.coordDim,
          f = o.type,
          p = 0; r(e, (function(t) {t.coordDim === d && p++})), e.push({
          name: s, coordDim: d, coordDimIndex: p, type: f, isExtraCoord: !0, isCalculationCoord: !0,
        }), p++, e.push({
          name: l, coordDim: l, coordDimIndex: p, type: f, isExtraCoord: !0, isCalculationCoord: !0,
        })
      } return {
        stackedDimension: o && o.name, stackedByDimension: n && n.name, isStackedByIndex: u, stackedOverDimension: l, stackResultDimension: s,
      }
    } function s(t, e) {return !!e && e === t.getCalculationInfo('stackedDimension')} function l(t, e) {return s(t, e) ? t.getCalculationInfo('stackResultDimension') : e}e.enableDataStack = o, e.isDimensionStacked = s, e.getStackedDimension = l
  },
  ee84: function(t, e, i) {
    var n = i('20c8'),
      r = i('401b'),
      a = r.applyTransform,
      o = n.CMD,
      s = [[], [], []],
      l = Math.sqrt,
      u = Math.atan2; function h(t, e) {
      var i, n, r, h, c,
        d = t.data,
        f = o.M,
        p = o.C,
        g = o.L,
        v = o.R,
        m = o.A,
        y = o.Q; for (r = 0, h = 0; r < d.length;) {
        switch (i = d[r++], h = r, n = 0, i) {
          case f:n = 1; break; case g:n = 1; break; case p:n = 3; break; case y:n = 2; break; case m:var x = e[4],
            _ = e[5],
            b = l(e[0] * e[0] + e[1] * e[1]),
            w = l(e[2] * e[2] + e[3] * e[3]),
            S = u(-e[1] / w, e[0] / b); d[r] *= b, d[r++] += x, d[r] *= w, d[r++] += _, d[r++] *= b, d[r++] *= w, d[r++] += S, d[r++] += S, r += 2, h = r; break; case v:T[0] = d[r++], T[1] = d[r++], a(T, T, e), d[h++] = T[0], d[h++] = T[1], T[0] += d[r++], T[1] += d[r++], a(T, T, e), d[h++] = T[0], d[h++] = T[1]
        } for (c = 0; c < n; c++) {var T = s[c]; T[0] = d[r++], T[1] = d[r++], a(T, T, e), d[h++] = T[0], d[h++] = T[1]}
      }
    }t.exports = h
  },
  ef97: function(t, e, i) {
    var n = i('3eba'); i('217b'), i('f17f'); var r = i('7f96'),
      a = i('87c3'),
      o = i('fdde'); i('01ed'), n.registerVisual(r('line', 'circle', 'line')), n.registerLayout(a('line')), n.registerProcessor(n.PRIORITY.PROCESSOR.STATISTIC, o('line'))
  },
  f123: function(t, e, i) {
    var n = i('9f82'),
      r = n.prepareDataCoordInfo,
      a = n.getStackedOnPoint; function o(t, e) {
      var i = []; return e.diff(t).add((function(t) {
        i.push({
          cmd: '+', idx: t,
        })
      }))
        .update((function(t, e) {
          i.push({
            cmd: '=', idx: e, idx1: t,
          })
        }))
        .remove((function(t) {
          i.push({
            cmd: '-', idx: t,
          })
        }))
        .execute(), i
    } function s(t, e, i, n, s, l, u, h) {
      for (var c = o(t, e), d = [], f = [], p = [], g = [], v = [], m = [], y = [], x = r(s, e, u), _ = r(l, t, h), b = 0; b < c.length; b++) {
        var w = c[b],
          S = !0; switch (w.cmd) {
          case '=':var T = t.getItemLayout(w.idx),
            M = e.getItemLayout(w.idx1); (isNaN(T[0]) || isNaN(T[1])) && (T = M.slice()), d.push(T), f.push(M), p.push(i[w.idx]), g.push(n[w.idx1]), y.push(e.getRawIndex(w.idx1)); break; case '+':var C = w.idx; d.push(s.dataToPoint([e.get(x.dataDimsForPoint[0], C), e.get(x.dataDimsForPoint[1], C)])), f.push(e.getItemLayout(C).slice()), p.push(a(x, s, e, C)), g.push(n[C]), y.push(e.getRawIndex(C)); break; case '-':C = w.idx; var I = t.getRawIndex(C); I !== C ? (d.push(t.getItemLayout(C)), f.push(l.dataToPoint([t.get(_.dataDimsForPoint[0], C), t.get(_.dataDimsForPoint[1], C)])), p.push(i[C]), g.push(a(_, l, t, C)), y.push(I)) : S = !1
        }S && (v.push(w), m.push(m.length))
      }m.sort((function(t, e) {return y[t] - y[e]})); var A = [],
        k = [],
        D = [],
        O = [],
        P = []; for (b = 0; b < m.length; b++) {C = m[b]; A[b] = d[C], k[b] = f[C], D[b] = p[C], O[b] = g[C], P[b] = v[C]} return {
        current: A, next: k, stackedOnCurrent: D, stackedOnNext: O, status: P,
      }
    }t.exports = s
  },
  f17f: function(t, e, i) {
    var n = i('4e08'),
      r = (n.__DEV__, i('6d8b')),
      a = i('f706'),
      o = i('1418'),
      s = i('f123'),
      l = i('2306'),
      u = i('e0d3'),
      h = i('d4d1'),
      c = h.Polyline,
      d = h.Polygon,
      f = i('e887'),
      p = i('9f82'),
      g = p.prepareDataCoordInfo,
      v = p.getStackedOnPoint,
      m = i('b0af'),
      y = m.createGridClipPath,
      x = m.createPolarClipPath; function _(t, e) {
      if (t.length === e.length) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i],
            r = e[i]; if (n[0] !== r[0] || n[1] !== r[1]) {return}
        } return !0
      }
    } function b(t) {return typeof t === 'number' ? t : t ? 0.5 : 0} function w(t, e, i) {if (!i.valueDim) {return [];} for (var n = [], r = 0, a = e.count(); r < a; r++) {n.push(v(i, t, e, r));} return n} function S(t, e, i) {
      for (var n = e.getBaseAxis(), r = n.dim === 'x' || n.dim === 'radius' ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
        var s = t[o + 1],
          l = t[o]; a.push(l); var u = []; switch (i) {
          case 'end':u[r] = s[r], u[1 - r] = l[1 - r], a.push(u); break; case 'middle':var h = (l[r] + s[r]) / 2,
            c = []; u[r] = c[r] = h, u[1 - r] = l[1 - r], c[1 - r] = s[1 - r], a.push(u), a.push(c); break; default:u[r] = l[r], u[1 - r] = s[1 - r], a.push(u)
        }
      } return t[o] && a.push(t[o]), a
    } function T(t, e) {
      var i = t.getVisual('visualMeta'); if (i && i.length && t.count() && e.type === 'cartesian2d') {
        for (var n, a, o = i.length - 1; o >= 0; o--) {
          var s = i[o].dimension,
            u = t.dimensions[s],
            h = t.getDimensionInfo(u); if (n = h && h.coordDim, n === 'x' || n === 'y') {a = i[o]; break}
        } if (a) {
          var c = e.getAxis(n),
            d = r.map(a.stops, (function(t) {
              return {
                coord: c.toGlobalCoord(c.dataToCoord(t.value)), color: t.color,
              }
            })),
            f = d.length,
            p = a.outerColors.slice(); f && d[0].coord > d[f - 1].coord && (d.reverse(), p.reverse()); var g = 10,
            v = d[0].coord - g,
            m = d[f - 1].coord + g,
            y = m - v; if (y < 0.001) {return 'transparent';} r.each(d, (function(t) {t.offset = (t.coord - v) / y})), d.push({
            offset: f ? d[f - 1].offset : 0.5, color: p[1] || 'transparent',
          }), d.unshift({
            offset: f ? d[0].offset : 0.5, color: p[0] || 'transparent',
          }); var x = new l.LinearGradient(0, 0, 0, 0, d, !0); return x[n] = v, x[n + '2'] = m, x
        }
      }
    } function M(t, e, i) {
      var n = t.get('showAllSymbol'),
        a = n === 'auto'; if (!n || a) {
        var o = i.getAxesByScale('ordinal')[0]; if (o && (!a || !C(o, e))) {
          var s = e.mapDimension(o.dim),
            l = {}; return r.each(o.getViewLabels(), (function(t) {l[t.tickValue] = 1})), function(t) {return !l.hasOwnProperty(e.get(s, t))}
        }
      }
    } function C(t, e) {
      var i = t.getExtent(),
        n = Math.abs(i[1] - i[0]) / t.scale.count(); isNaN(n) && (n = 0); for (var r = e.count(), a = Math.max(1, Math.round(r / 5)), s = 0; s < r; s += a) {if (1.5 * o.getSymbolSize(e, s)[t.isHorizontal() ? 1 : 0] > n) {return !1;}} return !0
    } function I(t, e, i) {
      if (t.type === 'cartesian2d') {
        var n = t.getBaseAxis().isHorizontal(),
          r = y(t, e, i); if (!i.get('clip', !0)) {
          var a = r.shape,
            o = Math.max(a.width, a.height); n ? (a.y -= o, a.height += 2 * o) : (a.x -= o, a.width += 2 * o)
        } return r
      } return x(t, e, i)
    } var A = f.extend({
      type: 'line',
      init: function() {
        var t = new l.Group(),
          e = new a(); this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
      },
      render: function(t, e, i) {
        var n = t.coordinateSystem,
          a = this.group,
          o = t.getData(),
          s = t.getModel('lineStyle'),
          l = t.getModel('areaStyle'),
          u = o.mapArray(o.getItemLayout),
          h = n.type === 'polar',
          c = this._coordSys,
          d = this._symbolDraw,
          f = this._polyline,
          p = this._polygon,
          v = this._lineGroup,
          m = t.get('animation'),
          y = !l.isEmpty(),
          x = l.get('origin'),
          C = g(n, o, x),
          A = w(n, o, C),
          k = t.get('showSymbol'),
          D = k && !h && M(t, o, n),
          O = this._data; O && O.eachItemGraphicEl((function(t, e) {t.__temp && (a.remove(t), O.setItemGraphicEl(e, null))})), k || d.remove(), a.add(v); var P,
          L = !h && t.get('step'); n && n.getArea && t.get('clip', !0) && (P = n.getArea(), P.width != null ? (P.x -= 0.1, P.y -= 0.1, P.width += 0.2, P.height += 0.2) : P.r0 && (P.r0 -= 0.5, P.r1 += 0.5)), this._clipShapeForSymbol = P, f && c.type === n.type && L === this._step ? (y && !p ? p = this._newPolygon(u, A, n, m) : p && !y && (v.remove(p), p = this._polygon = null), v.setClipPath(I(n, !1, t)), k && d.updateData(o, {
          isIgnore: D, clipShape: P,
        }), o.eachItemGraphicEl((function(t) {t.stopAnimation(!0)})), _(this._stackedOnPoints, A) && _(this._points, u) || (m ? this._updateAnimation(o, A, n, i, L, x) : (L && (u = S(u, n, L), A = S(A, n, L)), f.setShape({
          points: u,
        }), p && p.setShape({
          points: u, stackedOnPoints: A,
        })))) : (k && d.updateData(o, {
          isIgnore: D, clipShape: P,
        }), L && (u = S(u, n, L), A = S(A, n, L)), f = this._newPolyline(u, n, m), y && (p = this._newPolygon(u, A, n, m)), v.setClipPath(I(n, !0, t))); var E = T(o, n) || o.getVisual('color'); f.useStyle(r.defaults(s.getLineStyle(), {
          fill: 'none', stroke: E, lineJoin: 'bevel',
        })); var R = t.get('smooth'); if (R = b(t.get('smooth')), f.setShape({
          smooth: R, smoothMonotone: t.get('smoothMonotone'), connectNulls: t.get('connectNulls'),
        }), p) {
          var B = o.getCalculationInfo('stackedOnSeries'),
            z = 0; p.useStyle(r.defaults(l.getAreaStyle(), {
            fill: E, opacity: 0.7, lineJoin: 'bevel',
          })), B && (z = b(B.get('smooth'))), p.setShape({
            smooth: R, stackedOnSmooth: z, smoothMonotone: t.get('smoothMonotone'), connectNulls: t.get('connectNulls'),
          })
        } this._data = o, this._coordSys = n, this._stackedOnPoints = A, this._points = u, this._step = L, this._valueOrigin = x
      },
      dispose: function() {},
      highlight: function(t, e, i, n) {
        var r = t.getData(),
          a = u.queryDataIndex(r, n); if (!(a instanceof Array) && a != null && a >= 0) {var s = r.getItemGraphicEl(a); if (!s) {var l = r.getItemLayout(a); if (!l) {return;} if (this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(l[0], l[1])) {return;} s = new o(r, a), s.position = l, s.setZ(t.get('zlevel'), t.get('z')), s.ignore = isNaN(l[0]) || isNaN(l[1]), s.__temp = !0, r.setItemGraphicEl(a, s), s.stopSymbolAnimation(!0), this.group.add(s)}s.highlight()} else {f.prototype.highlight.call(this, t, e, i, n)}
      },
      downplay: function(t, e, i, n) {
        var r = t.getData(),
          a = u.queryDataIndex(r, n); if (a != null && a >= 0) {var o = r.getItemGraphicEl(a); o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay())} else {f.prototype.downplay.call(this, t, e, i, n)}
      },
      _newPolyline: function(t) {
        var e = this._polyline; return e && this._lineGroup.remove(e), e = new c({
          shape: {
            points: t,
          },
          silent: !0,
          z2: 10,
        }), this._lineGroup.add(e), this._polyline = e, e
      },
      _newPolygon: function(t, e) {
        var i = this._polygon; return i && this._lineGroup.remove(i), i = new d({
          shape: {
            points: t, stackedOnPoints: e,
          },
          silent: !0,
        }), this._lineGroup.add(i), this._polygon = i, i
      },
      _updateAnimation: function(t, e, i, n, r, a) {
        var o = this._polyline,
          u = this._polygon,
          h = t.hostModel,
          c = s(this._data, t, this._stackedOnPoints, e, this._coordSys, i, this._valueOrigin, a),
          d = c.current,
          f = c.stackedOnCurrent,
          p = c.next,
          g = c.stackedOnNext; r && (d = S(c.current, i, r), f = S(c.stackedOnCurrent, i, r), p = S(c.next, i, r), g = S(c.stackedOnNext, i, r)), o.shape.__points = c.current, o.shape.points = d, l.updateProps(o, {
          shape: {
            points: p,
          },
        }, h), u && (u.setShape({
          points: d, stackedOnPoints: f,
        }), l.updateProps(u, {
          shape: {
            points: p, stackedOnPoints: g,
          },
        }, h)); for (var v = [], m = c.status, y = 0; y < m.length; y++) {
          var x = m[y].cmd; if (x === '=') {
            var _ = t.getItemGraphicEl(m[y].idx1); _ && v.push({
              el: _, ptIdx: y,
            })
          }
        }o.animators && o.animators.length && o.animators[0].during((function() {for (var t = 0; t < v.length; t++) {var e = v[t].el; e.attr('position', o.shape.__points[v[t].ptIdx])}}))
      },
      remove: function(t) {
        var e = this.group,
          i = this._data; this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl((function(t, n) {t.__temp && (e.remove(t), i.setItemGraphicEl(n, null))})), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
      },
    }); t.exports = A
  },
  f219: function(t, e) {
    var i = '#eee',
      n = function() {
        return {
          axisLine: {
            lineStyle: {
              color: i,
            },
          },
          axisTick: {
            lineStyle: {
              color: i,
            },
          },
          axisLabel: {
            textStyle: {
              color: i,
            },
          },
          splitLine: {
            lineStyle: {
              type: 'dashed', color: '#aaa',
            },
          },
          splitArea: {
            areaStyle: {
              color: i,
            },
          },
        }
      },
      r = ['#dd6b66', '#759aa0', '#e69d87', '#8dc1a9', '#ea7e53', '#eedd78', '#73a373', '#73b9bc', '#7289ab', '#91ca8c', '#f49f42'],
      a = {
        color: r,
        backgroundColor: '#333',
        tooltip: {
          axisPointer: {
            lineStyle: {
              color: i,
            },
            crossStyle: {
              color: i,
            },
            label: {
              color: '#000',
            },
          },
        },
        legend: {
          textStyle: {
            color: i,
          },
        },
        textStyle: {
          color: i,
        },
        title: {
          textStyle: {
            color: i,
          },
        },
        toolbox: {
          iconStyle: {
            normal: {
              borderColor: i,
            },
          },
        },
        dataZoom: {
          textStyle: {
            color: i,
          },
        },
        visualMap: {
          textStyle: {
            color: i,
          },
        },
        timeline: {
          lineStyle: {
            color: i,
          },
          itemStyle: {
            normal: {
              color: r[1],
            },
          },
          label: {
            normal: {
              textStyle: {
                color: i,
              },
            },
          },
          controlStyle: {
            normal: {
              color: i, borderColor: i,
            },
          },
        },
        timeAxis: n(),
        logAxis: n(),
        valueAxis: n(),
        categoryAxis: n(),
        line: {
          symbol: 'circle',
        },
        graph: {
          color: r,
        },
        gauge: {
          title: {
            textStyle: {
              color: i,
            },
          },
        },
        candlestick: {
          itemStyle: {
            normal: {
              color: '#FD1050', color0: '#0CF49B', borderColor: '#FD1050', borderColor0: '#0CF49B',
            },
          },
        },
      }; a.categoryAxis.splitLine.show = !1; var o = a; t.exports = o
  },
  f273: function(t, e, i) {
    var n = i('6d8b'),
      r = i('2306'),
      a = i('fab2'),
      o = i('6679'),
      s = i('0156'),
      l = i('58df'),
      u = l.rectCoordAxisBuildSplitArea,
      h = l.rectCoordAxisHandleRemove,
      c = ['axisLine', 'axisTickLabel', 'axisName'],
      d = ['splitArea', 'splitLine', 'minorSplitLine'],
      f = o.extend({
        type: 'cartesianAxis',
        axisPointerClass: 'CartesianAxisPointer',
        render: function(t, e, i, o) {
          this.group.removeAll(); var l = this._axisGroup; if (this._axisGroup = new r.Group(), this.group.add(this._axisGroup), t.get('show')) {
            var u = t.getCoordSysModel(),
              h = s.layout(u, t),
              p = new a(t, h); n.each(c, p.add, p), this._axisGroup.add(p.getGroup()), n.each(d, (function(e) {t.get(e + '.show') && this['_' + e](t, u)}), this), r.groupTransition(l, this._axisGroup, t), f.superCall(this, 'render', t, e, i, o)
          }
        },
        remove: function() {h(this)},
        _splitLine: function(t, e) {
          var i = t.axis; if (!i.scale.isBlank()) {
            var a = t.getModel('splitLine'),
              o = a.getModel('lineStyle'),
              s = o.get('color'); s = n.isArray(s) ? s : [s]; for (var l = e.coordinateSystem.getRect(), u = i.isHorizontal(), h = 0, c = i.getTicksCoords({
                tickModel: a,
              }), d = [], f = [], p = o.getLineStyle(), g = 0; g < c.length; g++) {
              var v = i.toGlobalCoord(c[g].coord); u ? (d[0] = v, d[1] = l.y, f[0] = v, f[1] = l.y + l.height) : (d[0] = l.x, d[1] = v, f[0] = l.x + l.width, f[1] = v); var m = h++ % s.length,
                y = c[g].tickValue; this._axisGroup.add(new r.Line({
                anid: y != null ? 'line_' + c[g].tickValue : null,
                subPixelOptimize: !0,
                shape: {
                  x1: d[0], y1: d[1], x2: f[0], y2: f[1],
                },
                style: n.defaults({
                  stroke: s[m],
                }, p),
                silent: !0,
              }))
            }
          }
        },
        _minorSplitLine: function(t, e) {
          var i = t.axis,
            n = t.getModel('minorSplitLine'),
            a = n.getModel('lineStyle'),
            o = e.coordinateSystem.getRect(),
            s = i.isHorizontal(),
            l = i.getMinorTicksCoords(); if (l.length) {
            for (var u = [], h = [], c = a.getLineStyle(), d = 0; d < l.length; d++) {
              for (var f = 0; f < l[d].length; f++) {
                var p = i.toGlobalCoord(l[d][f].coord); s ? (u[0] = p, u[1] = o.y, h[0] = p, h[1] = o.y + o.height) : (u[0] = o.x, u[1] = p, h[0] = o.x + o.width, h[1] = p), this._axisGroup.add(new r.Line({
                  anid: 'minor_line_' + l[d][f].tickValue,
                  subPixelOptimize: !0,
                  shape: {
                    x1: u[0], y1: u[1], x2: h[0], y2: h[1],
                  },
                  style: c,
                  silent: !0,
                }))
              }
            }
          }
        },
        _splitArea: function(t, e) {u(this, this._axisGroup, t, e)},
      }); f.extend({
      type: 'xAxis',
    }), f.extend({
      type: 'yAxis',
    })
  },
  f279: function(t, e, i) {
    var n = i('9850'),
      r = i('e263'),
      a = i('401b'),
      o = i('0655'); function s(t, e, i) {if (this.name = t, this.geometries = e, i) {i = [i[0], i[1]];} else {var n = this.getBoundingRect(); i = [n.x + n.width / 2, n.y + n.height / 2]} this.center = i}s.prototype = {
      constructor: s,
      properties: null,
      getBoundingRect: function() {var t = this._rect; if (t) {return t;} for (var e = Number.MAX_VALUE, i = [e, e], o = [-e, -e], s = [], l = [], u = this.geometries, h = 0; h < u.length; h++) {if (u[h].type === 'polygon') {var c = u[h].exterior; r.fromPoints(c, s, l), a.min(i, i, s), a.max(o, o, l)}} return h === 0 && (i[0] = i[1] = o[0] = o[1] = 0), this._rect = new n(i[0], i[1], o[0] - i[0], o[1] - i[1])},
      contain: function(t) {
        var e = this.getBoundingRect(),
          i = this.geometries; if (!e.contain(t[0], t[1])) {return !1;} t:for (var n = 0, r = i.length; n < r; n++) {
          if (i[n].type === 'polygon') {
            var a = i[n].exterior,
              s = i[n].interiors; if (o.contain(a, t[0], t[1])) {for (var l = 0; l < (s ? s.length : 0); l++) {if (o.contain(s[l])) {continue t;}} return !0}
          }
        } return !1
      },
      transformTo: function(t, e, i, r) {
        var o = this.getBoundingRect(),
          s = o.width / o.height; i ? r || (r = i / s) : i = s * r; for (var l = new n(t, e, i, r), u = o.calculateTransform(l), h = this.geometries, c = 0; c < h.length; c++) {if (h[c].type === 'polygon') {for (var d = h[c].exterior, f = h[c].interiors, p = 0; p < d.length; p++) {a.applyTransform(d[p], d[p], u);} for (var g = 0; g < (f ? f.length : 0); g++) {for (p = 0; p < f[g].length; p++) {a.applyTransform(f[g][p], f[g][p], u)}}}}o = this._rect, o.copy(l), this.center = [o.x + o.width / 2, o.y + o.height / 2]
      },
      cloneShallow: function(t) {t == null && (t = this.name); var e = new s(t, this.geometries, this.center); return e._rect = this._rect, e.transformTo = null, e},
    }; var l = s; t.exports = l
  },
  f3c6: function(t, e, i) {},
  f47d: function(t, e, i) {
    var n = i('6d8b'),
      r = (n.assert, n.isArray),
      a = i('4e08'); a.__DEV__; function o(t) {return new s(t)} function s(t) {t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context} var l = s.prototype; l.perform = function(t) {
      var e,
        i = this._upstream,
        n = t && t.skip; if (this._dirty && i) {var a = this.context; a.data = a.outputData = i.context.outputData} this.__pipeline && (this.__pipeline.currentTask = this), this._plan && !n && (e = this._plan(this.context)); var o,
        s = f(this._modBy),
        l = this._modDataCount || 0,
        u = f(t && t.modBy),
        d = t && t.modDataCount || 0; function f(t) {return !(t >= 1) && (t = 1), t}s === u && l === d || (e = 'reset'), (this._dirty || e === 'reset') && (this._dirty = !1, o = c(this, n)), this._modBy = u, this._modDataCount = d; var p = t && t.step; if (this._dueEnd = i ? i._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
        var g = this._dueIndex,
          v = Math.min(p != null ? this._dueIndex + p : 1 / 0, this._dueEnd); if (!n && (o || g < v)) {var m = this._progress; if (r(m)) {for (var y = 0; y < m.length; y++) {h(this, m[y], g, v, u, d);}} else {h(this, m, g, v, u, d)}} this._dueIndex = v; var x = this._settedOutputEnd != null ? this._settedOutputEnd : v; this._outputDueEnd = x
      } else {this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;} return this.unfinished()
    }; var u = (function() {
      var t, e, i, n, r,
        a = {
          reset: function(l, u, h, c) {e = l, t = u, i = h, n = c, r = Math.ceil(n / i), a.next = i > 1 && n > 0 ? s : o},
        }; return a; function o() {return e < t ? e++ : null} function s() {
        var a = e % r * i + Math.ceil(e / r),
          o = e >= t ? null : a < n ? a : e; return e++, o
      }
    }()); function h(t, e, i, n, r, a) {
      u.reset(i, n, r, a), t._callingProgress = e, t._callingProgress({
        start: i, end: n, count: n - i, next: u.next,
      }, t.context)
    } function c(t, e) {var i, n; t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null, !e && t._reset && (i = t._reset(t.context), i && i.progress && (n = i.forceFirstProgress, i = i.progress), r(i) && !i.length && (i = null)), t._progress = i, t._modBy = t._modDataCount = null; var a = t._downstream; return a && a.dirty(), n}l.dirty = function() {this._dirty = !0, this._onDirty && this._onDirty(this.context)}, l.unfinished = function() {return this._progress && this._dueIndex < this._dueEnd}, l.pipe = function(t) {(this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())}, l.dispose = function() {this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)}, l.getUpstream = function() {return this._upstream}, l.getDownstream = function() {return this._downstream}, l.setOutputEnd = function(t) {this._outputDueEnd = this._settedOutputEnd = t}, e.createTask = o
  },
  f706: function(t, e, i) {
    var n = i('2306'),
      r = i('1418'),
      a = i('6d8b'),
      o = a.isObject; function s(t) {this.group = new n.Group(), this._symbolCtor = t || r} var l = s.prototype; function u(t, e, i, n) {return e && !isNaN(e[0]) && !isNaN(e[1]) && !(n.isIgnore && n.isIgnore(i)) && !(n.clipShape && !n.clipShape.contain(e[0], e[1])) && t.getItemVisual(i, 'symbol') !== 'none'} function h(t) {
      return t == null || o(t) || (t = {
        isIgnore: t,
      }), t || {}
    } function c(t) {
      var e = t.hostModel; return {
        itemStyle: e.getModel('itemStyle').getItemStyle(['color']), hoverItemStyle: e.getModel('emphasis.itemStyle').getItemStyle(), symbolRotate: e.get('symbolRotate'), symbolOffset: e.get('symbolOffset'), hoverAnimation: e.get('hoverAnimation'), labelModel: e.getModel('label'), hoverLabelModel: e.getModel('emphasis.label'), cursorStyle: e.get('cursor'),
      }
    }l.updateData = function(t, e) {
      e = h(e); var i = this.group,
        r = t.hostModel,
        a = this._data,
        o = this._symbolCtor,
        s = c(t); a || i.removeAll(), t.diff(a).add((function(n) {var r = t.getItemLayout(n); if (u(t, r, n, e)) {var a = new o(t, n, s); a.attr('position', r), t.setItemGraphicEl(n, a), i.add(a)}}))
        .update((function(l, h) {
          var c = a.getItemGraphicEl(h),
            d = t.getItemLayout(l); u(t, d, l, e) ? (c ? (c.updateData(t, l, s), n.updateProps(c, {
            position: d,
          }, r)) : (c = new o(t, l), c.attr('position', d)), i.add(c), t.setItemGraphicEl(l, c)) : i.remove(c)
        }))
        .remove((function(t) {var e = a.getItemGraphicEl(t); e && e.fadeOut((function() {i.remove(e)}))}))
        .execute(), this._data = t
    }, l.isPersistent = function() {return !0}, l.updateLayout = function() {var t = this._data; t && t.eachItemGraphicEl((function(e, i) {var n = t.getItemLayout(i); e.attr('position', n)}))}, l.incrementalPrepareUpdate = function(t) {this._seriesScope = c(t), this._data = null, this.group.removeAll()}, l.incrementalUpdate = function(t, e, i) {function n(t) {t.isGroup || (t.incremental = t.useHoverLayer = !0)}i = h(i); for (var r = t.start; r < t.end; r++) {var a = e.getItemLayout(r); if (u(e, a, r, i)) {var o = new this._symbolCtor(e, r, this._seriesScope); o.traverse(n), o.attr('position', a), this.group.add(o), e.setItemGraphicEl(r, o)}}}, l.remove = function(t) {
      var e = this.group,
        i = this._data; i && t ? i.eachItemGraphicEl((function(t) {t.fadeOut((function() {e.remove(t)}))})) : e.removeAll()
    }; var d = s; t.exports = d
  },
  f934: function(t, e, i) {
    var n = i('6d8b'),
      r = i('9850'),
      a = i('3842'),
      o = a.parsePercent,
      s = i('eda2'),
      l = n.each,
      u = ['left', 'right', 'top', 'bottom', 'width', 'height'],
      h = [['width', 'left', 'right'], ['height', 'top', 'bottom']]; function c(t, e, i, n, r) {
      var a = 0,
        o = 0; n == null && (n = 1 / 0), r == null && (r = 1 / 0); var s = 0; e.eachChild((function(l, u) {
        var h, c,
          d = l.position,
          f = l.getBoundingRect(),
          p = e.childAt(u + 1),
          g = p && p.getBoundingRect(); if (t === 'horizontal') {var v = f.width + (g ? -g.x + f.x : 0); h = a + v, h > n || l.newline ? (a = 0, h = v, o += s + i, s = f.height) : s = Math.max(s, f.height)} else {var m = f.height + (g ? -g.y + f.y : 0); c = o + m, c > r || l.newline ? (a += s + i, o = 0, c = m, s = f.width) : s = Math.max(s, f.width)}l.newline || (d[0] = a, d[1] = o, t === 'horizontal' ? a = h + i : o = c + i)
      }))
    } var d = c,
      f = n.curry(c, 'vertical'),
      p = n.curry(c, 'horizontal'); function g(t, e, i) {
      var n = e.width,
        r = e.height,
        a = o(t.x, n),
        l = o(t.y, r),
        u = o(t.x2, n),
        h = o(t.y2, r); return (isNaN(a) || isNaN(parseFloat(t.x))) && (a = 0), (isNaN(u) || isNaN(parseFloat(t.x2))) && (u = n), (isNaN(l) || isNaN(parseFloat(t.y))) && (l = 0), (isNaN(h) || isNaN(parseFloat(t.y2))) && (h = r), i = s.normalizeCssArray(i || 0), {
        width: Math.max(u - a - i[1] - i[3], 0), height: Math.max(h - l - i[0] - i[2], 0),
      }
    } function v(t, e, i) {
      i = s.normalizeCssArray(i || 0); var n = e.width,
        a = e.height,
        l = o(t.left, n),
        u = o(t.top, a),
        h = o(t.right, n),
        c = o(t.bottom, a),
        d = o(t.width, n),
        f = o(t.height, a),
        p = i[2] + i[0],
        g = i[1] + i[3],
        v = t.aspect; switch (isNaN(d) && (d = n - h - g - l), isNaN(f) && (f = a - c - p - u), v != null && (isNaN(d) && isNaN(f) && (v > n / a ? d = 0.8 * n : f = 0.8 * a), isNaN(d) && (d = v * f), isNaN(f) && (f = d / v)), isNaN(l) && (l = n - h - d - g), isNaN(u) && (u = a - c - f - p), t.left || t.right) {case 'center':l = n / 2 - d / 2 - i[3]; break; case 'right':l = n - d - g; break} switch (t.top || t.bottom) {case 'middle':case 'center':u = a / 2 - f / 2 - i[0]; break; case 'bottom':u = a - f - p; break}l = l || 0, u = u || 0, isNaN(d) && (d = n - g - l - (h || 0)), isNaN(f) && (f = a - p - u - (c || 0)); var m = new r(l + i[3], u + i[0], d, f); return m.margin = i, m
    } function m(t, e, i, a, o) {
      var s = !o || !o.hv || o.hv[0],
        l = !o || !o.hv || o.hv[1],
        u = o && o.boundingMode || 'all'; if (s || l) {
        var h; if (u === 'raw') {h = t.type === 'group' ? new r(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect();} else if (h = t.getBoundingRect(), t.needLocalTransform()) {var c = t.getLocalTransform(); h = h.clone(), h.applyTransform(c)}e = v(n.defaults({
          width: h.width, height: h.height,
        }, e), i, a); var d = t.position,
          f = s ? e.x - h.x : 0,
          p = l ? e.y - h.y : 0; t.attr('position', u === 'raw' ? [f, p] : [d[0] + f, d[1] + p])
      }
    } function y(t, e) {return t[h[e][0]] != null || t[h[e][1]] != null && t[h[e][2]] != null} function x(t, e, i) {
      !n.isObject(i) && (i = {}); var r = i.ignoreSize; !n.isArray(r) && (r = [r, r]); var a = s(h[0], 0),
        o = s(h[1], 1); function s(i, n) {
        var a = {},
          o = 0,
          s = {},
          h = 0,
          d = 2; if (l(i, (function(e) {s[e] = t[e]})), l(i, (function(t) {u(e, t) && (a[t] = s[t] = e[t]), c(a, t) && o++, c(s, t) && h++})), r[n]) {return c(e, i[1]) ? s[i[2]] = null : c(e, i[2]) && (s[i[1]] = null), s;} if (h !== d && o) {if (o >= d) {return a;} for (var f = 0; f < i.length; f++) {var p = i[f]; if (!u(a, p) && u(t, p)) {a[p] = t[p]; break}} return a} return s
      } function u(t, e) {return t.hasOwnProperty(e)} function c(t, e) {return t[e] != null && t[e] !== 'auto'} function d(t, e, i) {l(t, (function(t) {e[t] = i[t]}))}d(h[0], t, a), d(h[1], t, o)
    } function _(t) {return b({}, t)} function b(t, e) {return e && t && l(u, (function(i) {e.hasOwnProperty(i) && (t[i] = e[i])})), t}e.LOCATION_PARAMS = u, e.HV_NAMES = h, e.box = d, e.vbox = f, e.hbox = p, e.getAvailableSize = g, e.getLayoutRect = v, e.positionElement = m, e.sizeCalculable = y, e.mergeLayoutParam = x, e.getLayoutParams = _, e.copyLayoutParams = b
  },
  fab2: function(t, e, i) {
    var n = i('6d8b'),
      r = n.retrieve,
      a = n.defaults,
      o = n.extend,
      s = n.each,
      l = i('eda2'),
      u = i('2306'),
      h = i('4319'),
      c = i('3842'),
      d = c.isRadianAroundZero,
      f = c.remRadian,
      p = i('a15a'),
      g = p.createSymbol,
      v = i('1687'),
      m = i('401b'),
      y = m.applyTransform,
      x = i('697e'),
      _ = x.shouldShowAllLabels,
      b = Math.PI,
      w = function(t, e) {
        this.opt = e, this.axisModel = t, a(e, {
          labelOffset: 0, nameDirection: 1, tickDirection: 1, labelDirection: 1, silent: !0,
        }), this.group = new u.Group(); var i = new u.Group({
          position: e.position.slice(), rotation: e.rotation,
        }); i.updateTransform(), this._transform = i.transform, this._dumbGroup = i
      }; w.prototype = {
      constructor: w, hasBuilder: function(t) {return !!S[t]}, add: function(t) {S[t].call(this)}, getGroup: function() {return this.group},
    }; var S = {
        axisLine: function() {
          var t = this.opt,
            e = this.axisModel; if (e.get('axisLine.show')) {
            var i = this.axisModel.axis.getExtent(),
              n = this._transform,
              r = [i[0], 0],
              a = [i[1], 0]; n && (y(r, r, n), y(a, a, n)); var l = o({
              lineCap: 'round',
            }, e.getModel('axisLine.lineStyle').getLineStyle()); this.group.add(new u.Line({
              anid: 'line',
              subPixelOptimize: !0,
              shape: {
                x1: r[0], y1: r[1], x2: a[0], y2: a[1],
              },
              style: l,
              strokeContainThreshold: t.strokeContainThreshold || 5,
              silent: !0,
              z2: 1,
            })); var h = e.get('axisLine.symbol'),
              c = e.get('axisLine.symbolSize'),
              d = e.get('axisLine.symbolOffset') || 0; if (typeof d === 'number' && (d = [d, d]), h != null) {
              typeof h === 'string' && (h = [h, h]), typeof c !== 'string' && typeof c !== 'number' || (c = [c, c]); var f = c[0],
                p = c[1]; s([{
                rotate: t.rotation + Math.PI / 2, offset: d[0], r: 0,
              }, {
                rotate: t.rotation - Math.PI / 2, offset: d[1], r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1])),
              }], (function(e, i) {
                if (h[i] !== 'none' && h[i] != null) {
                  var n = g(h[i], -f / 2, -p / 2, f, p, l.stroke, !0),
                    a = e.r + e.offset,
                    o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)]; n.attr({
                    rotation: e.rotate, position: o, silent: !0, z2: 11,
                  }), this.group.add(n)
                }
              }), this)
            }
          }
        },
        axisTickLabel: function() {
          var t = this.axisModel,
            e = this.opt,
            i = L(this, t, e),
            n = R(this, t, e); A(t, n, i), E(this, t, e)
        },
        axisName: function() {
          var t = this.opt,
            e = this.axisModel,
            i = r(t.axisName, e.get('name')); if (i) {
            var n, a,
              s = e.get('nameLocation'),
              h = t.nameDirection,
              c = e.getModel('nameTextStyle'),
              d = e.get('nameGap') || 0,
              f = this.axisModel.axis.getExtent(),
              p = f[0] > f[1] ? -1 : 1,
              g = [s === 'start' ? f[0] - p * d : s === 'end' ? f[1] + p * d : (f[0] + f[1]) / 2, O(s) ? t.labelOffset + h * d : 0],
              v = e.get('nameRotate'); v != null && (v = v * b / 180), O(s) ? n = M(t.rotation, v != null ? v : t.rotation, h) : (n = C(t, s, v || 0, f), a = t.axisNameAvailableWidth, a != null && (a = Math.abs(a / Math.sin(n.rotation)), !isFinite(a) && (a = null))); var m = c.getFont(),
              y = e.get('nameTruncate', !0) || {},
              x = y.ellipsis,
              _ = r(t.nameTruncateMaxWidth, y.maxWidth, a),
              w = x != null && _ != null ? l.truncateText(i, _, m, x, {
                minChar: 2, placeholder: y.placeholder,
              }) : i,
              S = e.get('tooltip', !0),
              A = e.mainType,
              k = {
                componentType: A, name: i, $vars: ['name'],
              }; k[A + 'Index'] = e.componentIndex; var D = new u.Text({
              anid: 'name',
              __fullText: i,
              __truncatedText: w,
              position: g,
              rotation: n.rotation,
              silent: I(e),
              z2: 1,
              tooltip: S && S.show ? o({
                content: i, formatter: function() {return i}, formatterParams: k,
              }, S) : null,
            }); u.setTextStyle(D.style, c, {
              text: w, textFont: m, textFill: c.getTextColor() || e.get('axisLine.lineStyle.color'), textAlign: c.get('align') || n.textAlign, textVerticalAlign: c.get('verticalAlign') || n.textVerticalAlign,
            }), e.get('triggerEvent') && (D.eventData = T(e), D.eventData.targetType = 'axisName', D.eventData.name = i), this._dumbGroup.add(D), D.updateTransform(), this.group.add(D), D.decomposeTransform()
          }
        },
      },
      T = w.makeAxisEventDataBase = function(t) {
        var e = {
          componentType: t.mainType, componentIndex: t.componentIndex,
        }; return e[t.mainType + 'Index'] = t.componentIndex, e
      },
      M = w.innerTextLayout = function(t, e, i) {
        var n, r,
          a = f(e - t); return d(a) ? (r = i > 0 ? 'top' : 'bottom', n = 'center') : d(a - b) ? (r = i > 0 ? 'bottom' : 'top', n = 'center') : (r = 'middle', n = a > 0 && a < b ? i > 0 ? 'right' : 'left' : i > 0 ? 'left' : 'right'), {
          rotation: a, textAlign: n, textVerticalAlign: r,
        }
      }; function C(t, e, i, n) {
      var r, a,
        o = f(i - t.rotation),
        s = n[0] > n[1],
        l = e === 'start' && !s || e !== 'start' && s; return d(o - b / 2) ? (a = l ? 'bottom' : 'top', r = 'center') : d(o - 1.5 * b) ? (a = l ? 'top' : 'bottom', r = 'center') : (a = 'middle', r = o < 1.5 * b && o > b / 2 ? l ? 'left' : 'right' : l ? 'right' : 'left'), {
        rotation: o, textAlign: r, textVerticalAlign: a,
      }
    } var I = w.isLabelSilent = function(t) {var e = t.get('tooltip'); return t.get('silent') || !(t.get('triggerEvent') || e && e.show)}; function A(t, e, i) {
      if (!_(t.axis)) {
        var n = t.get('axisLabel.showMinLabel'),
          r = t.get('axisLabel.showMaxLabel'); e = e || [], i = i || []; var a = e[0],
          o = e[1],
          s = e[e.length - 1],
          l = e[e.length - 2],
          u = i[0],
          h = i[1],
          c = i[i.length - 1],
          d = i[i.length - 2]; !1 === n ? (k(a), k(u)) : D(a, o) && (n ? (k(o), k(h)) : (k(a), k(u))), !1 === r ? (k(s), k(c)) : D(l, s) && (r ? (k(l), k(d)) : (k(s), k(c)))
      }
    } function k(t) {t && (t.ignore = !0)} function D(t, e, i) {
      var n = t && t.getBoundingRect().clone(),
        r = e && e.getBoundingRect().clone(); if (n && r) {var a = v.identity([]); return v.rotate(a, a, -t.rotation), n.applyTransform(v.mul([], a, t.getLocalTransform())), r.applyTransform(v.mul([], a, e.getLocalTransform())), n.intersect(r)}
    } function O(t) {return t === 'middle' || t === 'center'} function P(t, e, i, n, r) {
      for (var a = [], o = [], s = [], l = 0; l < t.length; l++) {
        var h = t[l].coord; o[0] = h, o[1] = 0, s[0] = h, s[1] = i, e && (y(o, o, e), y(s, s, e)); var c = new u.Line({
          anid: r + '_' + t[l].tickValue,
          subPixelOptimize: !0,
          shape: {
            x1: o[0], y1: o[1], x2: s[0], y2: s[1],
          },
          style: n,
          z2: 2,
          silent: !0,
        }); a.push(c)
      } return a
    } function L(t, e, i) {
      var n = e.axis,
        r = e.getModel('axisTick'); if (r.get('show') && !n.scale.isBlank()) {
        for (var o = r.getModel('lineStyle'), s = i.tickDirection * r.get('length'), l = n.getTicksCoords(), u = P(l, t._transform, s, a(o.getLineStyle(), {
            stroke: e.get('axisLine.lineStyle.color'),
          }), 'ticks'), h = 0; h < u.length; h++) {t.group.add(u[h]);} return u
      }
    } function E(t, e, i) {
      var n = e.axis,
        r = e.getModel('minorTick'); if (r.get('show') && !n.scale.isBlank()) {
        var o = n.getMinorTicksCoords(); if (o.length) {
          for (var s = r.getModel('lineStyle'), l = i.tickDirection * r.get('length'), u = a(s.getLineStyle(), a(e.getModel('axisTick').getLineStyle(), {
              stroke: e.get('axisLine.lineStyle.color'),
            })), h = 0; h < o.length; h++) {for (var c = P(o[h], t._transform, l, u, 'minorticks_' + h), d = 0; d < c.length; d++) {t.group.add(c[d])}}
        }
      }
    } function R(t, e, i) {
      var n = e.axis,
        a = r(i.axisLabelShow, e.get('axisLabel.show')); if (a && !n.scale.isBlank()) {
        var o = e.getModel('axisLabel'),
          l = o.get('margin'),
          c = n.getViewLabels(),
          d = (r(i.labelRotate, o.get('rotate')) || 0) * b / 180,
          f = M(i.rotation, d, i.labelDirection),
          p = e.getCategories && e.getCategories(!0),
          g = [],
          v = I(e),
          m = e.get('triggerEvent'); return s(c, (function(r, a) {
          var s = r.tickValue,
            c = r.formattedLabel,
            d = r.rawLabel,
            y = o; p && p[s] && p[s].textStyle && (y = new h(p[s].textStyle, o, e.ecModel)); var x = y.getTextColor() || e.get('axisLine.lineStyle.color'),
            _ = n.dataToCoord(s),
            b = [_, i.labelOffset + i.labelDirection * l],
            w = new u.Text({
              anid: 'label_' + s, position: b, rotation: f.rotation, silent: v, z2: 10,
            }); u.setTextStyle(w.style, y, {
            text: c, textAlign: y.getShallow('align', !0) || f.textAlign, textVerticalAlign: y.getShallow('verticalAlign', !0) || y.getShallow('baseline', !0) || f.textVerticalAlign, textFill: typeof x === 'function' ? x(n.type === 'category' ? d : n.type === 'value' ? s + '' : s, a) : x,
          }), m && (w.eventData = T(e), w.eventData.targetType = 'axisLabel', w.eventData.value = d), t._dumbGroup.add(w), w.updateTransform(), g.push(w), t.group.add(w), w.decomposeTransform()
        })), g
      }
    } var B = w; t.exports = B
  },
  fb05: function(t, e, i) {
    var n = i('6d8b'),
      r = n.each,
      a = n.isArray,
      o = n.isObject,
      s = i('26e1'),
      l = i('e0d3'),
      u = l.normalizeToArray; function h(t, e) {e = e.split(','); for (var i = t, n = 0; n < e.length; n++) {if (i = i && i[e[n]], i == null) {break;}} return i} function c(t, e, i, n) {e = e.split(','); for (var r, a = t, o = 0; o < e.length - 1; o++) {r = e[o], a[r] == null && (a[r] = {}), a = a[r];}(n || a[e[o]] == null) && (a[e[o]] = i)} function d(t) {r(f, (function(e) {e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])}))} var f = [['x', 'left'], ['y', 'top'], ['x2', 'right'], ['y2', 'bottom']],
      p = ['grid', 'geo', 'parallel', 'legend', 'toolbox', 'title', 'visualMap', 'dataZoom', 'timeline']; function g(t, e) {s(t, e), t.series = u(t.series), r(t.series, (function(t) {if (o(t)) {var e = t.type; if (e === 'line') {t.clipOverflow != null && (t.clip = t.clipOverflow);} else if (e === 'pie' || e === 'gauge') {t.clockWise != null && (t.clockwise = t.clockWise);} else if (e === 'gauge') {var i = h(t, 'pointer.color'); i != null && c(t, 'itemStyle.color', i)}d(t)}})), t.dataRange && (t.visualMap = t.dataRange), r(p, (function(e) {var i = t[e]; i && (a(i) || (i = [i]), r(i, (function(t) {d(t)})))}))}t.exports = g
  },
  fd63: function(t, e, i) {
    var n = i('42e5'),
      r = i('6d8b'),
      a = r.isFunction,
      o = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function(t, e) {
          var i = t.getData(),
            r = (t.visualColorAccessPath || 'itemStyle.color').split('.'),
            o = t.get(r),
            s = !a(o) || o instanceof n ? null : o; o && !s || (o = t.getColorFromPalette(t.name, null, e.getSeriesCount())), i.setVisual('color', o); var l = (t.visualBorderColorAccessPath || 'itemStyle.borderColor').split('.'),
            u = t.get(l); if (i.setVisual('borderColor', u), !e.isSeriesFiltered(t)) {
            s && i.each((function(e) {i.setItemVisual(e, 'color', s(t.getDataParams(e)))})); var h = function(t, e) {
              var i = t.getItemModel(e),
                n = i.get(r, !0),
                a = i.get(l, !0); n != null && t.setItemVisual(e, 'color', n), a != null && t.setItemVisual(e, 'borderColor', a)
            }; return {
              dataEach: i.hasItemOption ? h : null,
            }
          }
        },
      }; t.exports = o
  },
  fdde: function(t, e) {
    var i = {
        average: function(t) {for (var e = 0, i = 0, n = 0; n < t.length; n++) {isNaN(t[n]) || (e += t[n], i++);} return i === 0 ? NaN : e / i}, sum: function(t) {for (var e = 0, i = 0; i < t.length; i++) {e += t[i] || 0;} return e}, max: function(t) {for (var e = -1 / 0, i = 0; i < t.length; i++) {t[i] > e && (e = t[i]);} return isFinite(e) ? e : NaN}, min: function(t) {for (var e = 1 / 0, i = 0; i < t.length; i++) {t[i] < e && (e = t[i]);} return isFinite(e) ? e : NaN}, nearest: function(t) {return t[0]},
      },
      n = function(t, e) {return Math.round(t.length / 2)}; function r(t) {
      return {
        seriesType: t,
        modifyOutputEnd: !0,
        reset: function(t, e, r) {
          var a = t.getData(),
            o = t.get('sampling'),
            s = t.coordinateSystem; if (s.type === 'cartesian2d' && o) {
            var l,
              u = s.getBaseAxis(),
              h = s.getOtherAxis(u),
              c = u.getExtent(),
              d = c[1] - c[0],
              f = Math.round(a.count() / d); if (f > 1) {typeof o === 'string' ? l = i[o] : typeof o === 'function' && (l = o), l && t.setData(a.downSample(a.mapDimension(h.dim), 1 / f, l, n))}
          }
        },
      }
    }t.exports = r
  },
  fe21: function(t, e, i) {
    var n = i('e86a'),
      r = i('2306'),
      a = ['textStyle', 'color'],
      o = {
        getTextColor: function(t) {var e = this.ecModel; return this.getShallow('color') || (!t && e ? e.get(a) : null)},
        getFont: function() {
          return r.getFont({
            fontStyle: this.getShallow('fontStyle'), fontWeight: this.getShallow('fontWeight'), fontSize: this.getShallow('fontSize'), fontFamily: this.getShallow('fontFamily'),
          }, this.ecModel)
        },
        getTextRect: function(t) {return n.getBoundingRect(t, this.getFont(), this.getShallow('align'), this.getShallow('verticalAlign') || this.getShallow('baseline'), this.getShallow('padding'), this.getShallow('lineHeight'), this.getShallow('rich'), this.getShallow('truncateText'))},
      }; t.exports = o
  },
  ff2e: function(t, e, i) {
    var n = i('6d8b'),
      r = i('2306'),
      a = i('e86a'),
      o = i('eda2'),
      s = i('1687'),
      l = i('697e'),
      u = i('fab2'); function h(t) {
      var e,
        i = t.get('type'),
        n = t.getModel(i + 'Style'); return i === 'line' ? (e = n.getLineStyle(), e.fill = null) : i === 'shadow' && (e = n.getAreaStyle(), e.stroke = null), e
    } function c(t, e, i, n, r) {
      var s = i.get('value'),
        l = f(s, e.axis, e.ecModel, i.get('seriesDataIndices'), {
          precision: i.get('label.precision'), formatter: i.get('label.formatter'),
        }),
        u = i.getModel('label'),
        h = o.normalizeCssArray(u.get('padding') || 0),
        c = u.getFont(),
        p = a.getBoundingRect(l, c),
        g = r.position,
        v = p.width + h[1] + h[3],
        m = p.height + h[0] + h[2],
        y = r.align; y === 'right' && (g[0] -= v), y === 'center' && (g[0] -= v / 2); var x = r.verticalAlign; x === 'bottom' && (g[1] -= m), x === 'middle' && (g[1] -= m / 2), d(g, v, m, n); var _ = u.get('backgroundColor'); _ && _ !== 'auto' || (_ = e.get('axisLine.lineStyle.color')), t.label = {
        shape: {
          x: 0, y: 0, width: v, height: m, r: u.get('borderRadius'),
        },
        position: g.slice(),
        style: {
          text: l, textFont: c, textFill: u.getTextColor(), textPosition: 'inside', textPadding: h, fill: _, stroke: u.get('borderColor') || 'transparent', lineWidth: u.get('borderWidth') || 0, shadowBlur: u.get('shadowBlur'), shadowColor: u.get('shadowColor'), shadowOffsetX: u.get('shadowOffsetX'), shadowOffsetY: u.get('shadowOffsetY'),
        },
        z2: 10,
      }
    } function d(t, e, i, n) {
      var r = n.getWidth(),
        a = n.getHeight(); t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + i, a) - i, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0)
    } function f(t, e, i, r, a) {
      t = e.scale.parse(t); var o = e.scale.getLabel(t, {
          precision: a.precision,
        }),
        s = a.formatter; if (s) {
        var u = {
          value: l.getAxisRawValue(e, t), axisDimension: e.dim, axisIndex: e.index, seriesData: [],
        }; n.each(r, (function(t) {
          var e = i.getSeriesByIndex(t.seriesIndex),
            n = t.dataIndexInside,
            r = e && e.getDataParams(n); r && u.seriesData.push(r)
        })), n.isString(s) ? o = s.replace('{value}', o) : n.isFunction(s) && (o = s(u))
      } return o
    } function p(t, e, i) {var n = s.create(); return s.rotate(n, n, i.rotation), s.translate(n, n, i.position), r.applyTransform([t.dataToCoord(e), (i.labelOffset || 0) + (i.labelDirection || 1) * (i.labelMargin || 0)], n)} function g(t, e, i, n, r, a) {
      var o = u.innerTextLayout(i.rotation, 0, i.labelDirection); i.labelMargin = r.get('label.margin'), c(e, n, r, a, {
        position: p(n.axis, t, i), align: o.textAlign, verticalAlign: o.textVerticalAlign,
      })
    } function v(t, e, i) {
      return i = i || 0, {
        x1: t[i], y1: t[1 - i], x2: e[i], y2: e[1 - i],
      }
    } function m(t, e, i) {
      return i = i || 0, {
        x: t[i], y: t[1 - i], width: e[i], height: e[1 - i],
      }
    } function y(t, e, i, n, r, a) {
      return {
        cx: t, cy: e, r0: i, r: n, startAngle: r, endAngle: a, clockwise: !0,
      }
    }e.buildElStyle = h, e.buildLabelElOption = c, e.getValueLabel = f, e.getTransformedPosition = p, e.buildCartesianSingleLabelElOption = g, e.makeLineShape = v, e.makeRectShape = m, e.makeSectorShape = y
  },
}]);
