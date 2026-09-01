var skyraSurvey = (function (Kt) {
	"use strict";
	var Bc, Dc;
	var Gt,
		F,
		fi,
		hi,
		ot,
		gi,
		mi,
		yi,
		vi,
		jr,
		Br,
		Dr,
		bi,
		Yt = {},
		wi = [],
		Hc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
		En = Array.isArray;
	function $e(e, t) {
		for (var n in t) e[n] = t[n];
		return e;
	}
	function Fr(e) {
		e && e.parentNode && e.parentNode.removeChild(e);
	}
	function mt(e, t, n) {
		var r,
			o,
			i,
			s = {};
		for (i in t)
			i == "key" ? (r = t[i]) : i == "ref" ? (o = t[i]) : (s[i] = t[i]);
		if (
			(arguments.length > 2 &&
				(s.children = arguments.length > 3 ? Gt.call(arguments, 2) : n),
			typeof e == "function" && e.defaultProps != null)
		)
			for (i in e.defaultProps) s[i] === void 0 && (s[i] = e.defaultProps[i]);
		return Xt(e, s, r, o, null);
	}
	function Xt(e, t, n, r, o) {
		var i = {
			type: e,
			props: t,
			key: n,
			ref: r,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__c: null,
			constructor: void 0,
			__v: o ?? ++fi,
			__i: -1,
			__u: 0,
		};
		return o == null && F.vnode != null && F.vnode(i), i;
	}
	function Ee(e) {
		return e.children;
	}
	function Qt(e, t) {
		(this.props = e), (this.context = t);
	}
	function yt(e, t) {
		if (t == null) return e.__ ? yt(e.__, e.__i + 1) : null;
		for (var n; t < e.__k.length; t++)
			if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
		return typeof e.type == "function" ? yt(e) : null;
	}
	function _i(e) {
		var t, n;
		if ((e = e.__) != null && e.__c != null) {
			for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
				if ((n = e.__k[t]) != null && n.__e != null) {
					e.__e = e.__c.base = n.__e;
					break;
				}
			return _i(e);
		}
	}
	function Zr(e) {
		((!e.__d && (e.__d = !0) && ot.push(e) && !Rn.__r++) ||
			gi != F.debounceRendering) &&
			((gi = F.debounceRendering) || mi)(Rn);
	}
	function Rn() {
		for (var e, t, n, r, o, i, s, a = 1; ot.length; )
			ot.length > a && ot.sort(yi),
				(e = ot.shift()),
				(a = ot.length),
				e.__d &&
					((n = void 0),
					(r = void 0),
					(o = (r = (t = e).__v).__e),
					(i = []),
					(s = []),
					t.__P &&
						(((n = $e({}, r)).__v = r.__v + 1),
						F.vnode && F.vnode(n),
						Hr(
							t.__P,
							n,
							r,
							t.__n,
							t.__P.namespaceURI,
							32 & r.__u ? [o] : null,
							i,
							o ?? yt(r),
							!!(32 & r.__u),
							s,
						),
						(n.__v = r.__v),
						(n.__.__k[n.__i] = n),
						zi(i, n, s),
						(r.__e = r.__ = null),
						n.__e != o && _i(n)));
		Rn.__r = 0;
	}
	function ki(e, t, n, r, o, i, s, a, c, l, d) {
		var u,
			p,
			f,
			g,
			y,
			b,
			v,
			_ = (r && r.__k) || wi,
			S = t.length;
		for (c = Uc(n, t, _, c, S), u = 0; u < S; u++)
			(f = n.__k[u]) != null &&
				((p = f.__i == -1 ? Yt : _[f.__i] || Yt),
				(f.__i = u),
				(b = Hr(e, f, p, o, i, s, a, c, l, d)),
				(g = f.__e),
				f.ref &&
					p.ref != f.ref &&
					(p.ref && Vr(p.ref, null, f), d.push(f.ref, f.__c || g, f)),
				y == null && g != null && (y = g),
				(v = !!(4 & f.__u)) || p.__k === f.__k
					? (c = Si(f, c, e, v))
					: typeof f.type == "function" && b !== void 0
						? (c = b)
						: g && (c = g.nextSibling),
				(f.__u &= -7));
		return (n.__e = y), c;
	}
	function Uc(e, t, n, r, o) {
		var i,
			s,
			a,
			c,
			l,
			d = n.length,
			u = d,
			p = 0;
		for (e.__k = new Array(o), i = 0; i < o; i++)
			(s = t[i]) != null && typeof s != "boolean" && typeof s != "function"
				? (typeof s == "string" ||
					typeof s == "number" ||
					typeof s == "bigint" ||
					s.constructor == String
						? (s = e.__k[i] = Xt(null, s, null, null, null))
						: En(s)
							? (s = e.__k[i] = Xt(Ee, { children: s }, null, null, null))
							: s.constructor === void 0 && s.__b > 0
								? (s = e.__k[i] =
										Xt(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v))
								: (e.__k[i] = s),
					(c = i + p),
					(s.__ = e),
					(s.__b = e.__b + 1),
					(a = null),
					(l = s.__i = Vc(s, n, c, u)) != -1 &&
						(u--, (a = n[l]) && (a.__u |= 2)),
					a == null || a.__v == null
						? (l == -1 && (o > d ? p-- : o < d && p++),
							typeof s.type != "function" && (s.__u |= 4))
						: l != c &&
							(l == c - 1
								? p--
								: l == c + 1
									? p++
									: (l > c ? p-- : p++, (s.__u |= 4))))
				: (e.__k[i] = null);
		if (u)
			for (i = 0; i < d; i++)
				(a = n[i]) != null &&
					(2 & a.__u) == 0 &&
					(a.__e == r && (r = yt(a)), Ii(a, a));
		return r;
	}
	function Si(e, t, n, r) {
		var o, i;
		if (typeof e.type == "function") {
			for (o = e.__k, i = 0; o && i < o.length; i++)
				o[i] && ((o[i].__ = e), (t = Si(o[i], t, n, r)));
			return t;
		}
		e.__e != t &&
			(r &&
				(t && e.type && !t.parentNode && (t = yt(e)),
				n.insertBefore(e.__e, t || null)),
			(t = e.__e));
		do t = t && t.nextSibling;
		while (t != null && t.nodeType == 8);
		return t;
	}
	function Vc(e, t, n, r) {
		var o,
			i,
			s,
			a = e.key,
			c = e.type,
			l = t[n],
			d = l != null && (2 & l.__u) == 0;
		if ((l === null && a == null) || (d && a == l.key && c == l.type)) return n;
		if (r > (d ? 1 : 0)) {
			for (o = n - 1, i = n + 1; o >= 0 || i < t.length; )
				if (
					(l = t[(s = o >= 0 ? o-- : i++)]) != null &&
					(2 & l.__u) == 0 &&
					a == l.key &&
					c == l.type
				)
					return s;
		}
		return -1;
	}
	function xi(e, t, n) {
		t[0] == "-"
			? e.setProperty(t, n ?? "")
			: (e[t] =
					n == null ? "" : typeof n != "number" || Hc.test(t) ? n : n + "px");
	}
	function Mn(e, t, n, r, o) {
		var i, s;
		e: if (t == "style")
			if (typeof n == "string") e.style.cssText = n;
			else {
				if ((typeof r == "string" && (e.style.cssText = r = ""), r))
					for (t in r) (n && t in n) || xi(e.style, t, "");
				if (n) for (t in n) (r && n[t] == r[t]) || xi(e.style, t, n[t]);
			}
		else if (t[0] == "o" && t[1] == "n")
			(i = t != (t = t.replace(vi, "$1"))),
				(s = t.toLowerCase()),
				(t =
					s in e || t == "onFocusOut" || t == "onFocusIn"
						? s.slice(2)
						: t.slice(2)),
				e.l || (e.l = {}),
				(e.l[t + i] = n),
				n
					? r
						? (n.u = r.u)
						: ((n.u = jr), e.addEventListener(t, i ? Dr : Br, i))
					: e.removeEventListener(t, i ? Dr : Br, i);
		else {
			if (o == "http://www.w3.org/2000/svg")
				t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
			else if (
				t != "width" &&
				t != "height" &&
				t != "href" &&
				t != "list" &&
				t != "form" &&
				t != "tabIndex" &&
				t != "download" &&
				t != "rowSpan" &&
				t != "colSpan" &&
				t != "role" &&
				t != "popover" &&
				t in e
			)
				try {
					e[t] = n ?? "";
					break e;
				} catch {}
			typeof n == "function" ||
				(n == null || (n === !1 && t[4] != "-")
					? e.removeAttribute(t)
					: e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
		}
	}
	function Ci(e) {
		return function (t) {
			if (this.l) {
				var n = this.l[t.type + e];
				if (t.t == null) t.t = jr++;
				else if (t.t < n.u) return;
				return n(F.event ? F.event(t) : t);
			}
		};
	}
	function Hr(e, t, n, r, o, i, s, a, c, l) {
		var d,
			u,
			p,
			f,
			g,
			y,
			b,
			v,
			_,
			S,
			x,
			C,
			I,
			P,
			N,
			W,
			O,
			A = t.type;
		if (t.constructor !== void 0) return null;
		128 & n.__u && ((c = !!(32 & n.__u)), (i = [(a = t.__e = n.__e)])),
			(d = F.__b) && d(t);
		e: if (typeof A == "function")
			try {
				if (
					((v = t.props),
					(_ = "prototype" in A && A.prototype.render),
					(S = (d = A.contextType) && r[d.__c]),
					(x = d ? (S ? S.props.value : d.__) : r),
					n.__c
						? (b = (u = t.__c = n.__c).__ = u.__E)
						: (_
								? (t.__c = u = new A(v, x))
								: ((t.__c = u = new Qt(v, x)),
									(u.constructor = A),
									(u.render = qc)),
							S && S.sub(u),
							u.state || (u.state = {}),
							(u.__n = r),
							(p = u.__d = !0),
							(u.__h = []),
							(u._sb = [])),
					_ && u.__s == null && (u.__s = u.state),
					_ &&
						A.getDerivedStateFromProps != null &&
						(u.__s == u.state && (u.__s = $e({}, u.__s)),
						$e(u.__s, A.getDerivedStateFromProps(v, u.__s))),
					(f = u.props),
					(g = u.state),
					(u.__v = t),
					p)
				)
					_ &&
						A.getDerivedStateFromProps == null &&
						u.componentWillMount != null &&
						u.componentWillMount(),
						_ && u.componentDidMount != null && u.__h.push(u.componentDidMount);
				else {
					if (
						(_ &&
							A.getDerivedStateFromProps == null &&
							v !== f &&
							u.componentWillReceiveProps != null &&
							u.componentWillReceiveProps(v, x),
						t.__v == n.__v ||
							(!u.__e &&
								u.shouldComponentUpdate != null &&
								u.shouldComponentUpdate(v, u.__s, x) === !1))
					) {
						for (
							t.__v != n.__v &&
								((u.props = v), (u.state = u.__s), (u.__d = !1)),
								t.__e = n.__e,
								t.__k = n.__k,
								t.__k.some(function (U) {
									U && (U.__ = t);
								}),
								C = 0;
							C < u._sb.length;
							C++
						)
							u.__h.push(u._sb[C]);
						(u._sb = []), u.__h.length && s.push(u);
						break e;
					}
					u.componentWillUpdate != null && u.componentWillUpdate(v, u.__s, x),
						_ &&
							u.componentDidUpdate != null &&
							u.__h.push(function () {
								u.componentDidUpdate(f, g, y);
							});
				}
				if (
					((u.context = x),
					(u.props = v),
					(u.__P = e),
					(u.__e = !1),
					(I = F.__r),
					(P = 0),
					_)
				) {
					for (
						u.state = u.__s,
							u.__d = !1,
							I && I(t),
							d = u.render(u.props, u.state, u.context),
							N = 0;
						N < u._sb.length;
						N++
					)
						u.__h.push(u._sb[N]);
					u._sb = [];
				} else
					do
						(u.__d = !1),
							I && I(t),
							(d = u.render(u.props, u.state, u.context)),
							(u.state = u.__s);
					while (u.__d && ++P < 25);
				(u.state = u.__s),
					u.getChildContext != null && (r = $e($e({}, r), u.getChildContext())),
					_ &&
						!p &&
						u.getSnapshotBeforeUpdate != null &&
						(y = u.getSnapshotBeforeUpdate(f, g)),
					(W = d),
					d != null &&
						d.type === Ee &&
						d.key == null &&
						(W = Ti(d.props.children)),
					(a = ki(e, En(W) ? W : [W], t, n, r, o, i, s, a, c, l)),
					(u.base = t.__e),
					(t.__u &= -161),
					u.__h.length && s.push(u),
					b && (u.__E = u.__ = null);
			} catch (U) {
				if (((t.__v = null), c || i != null))
					if (U.then) {
						for (
							t.__u |= c ? 160 : 128;
							a && a.nodeType == 8 && a.nextSibling;
						)
							a = a.nextSibling;
						(i[i.indexOf(a)] = null), (t.__e = a);
					} else {
						for (O = i.length; O--; ) Fr(i[O]);
						Ur(t);
					}
				else (t.__e = n.__e), (t.__k = n.__k), U.then || Ur(t);
				F.__e(U, t, n);
			}
		else
			i == null && t.__v == n.__v
				? ((t.__k = n.__k), (t.__e = n.__e))
				: (a = t.__e = Wc(n.__e, t, n, r, o, i, s, c, l));
		return (d = F.diffed) && d(t), 128 & t.__u ? void 0 : a;
	}
	function Ur(e) {
		e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(Ur);
	}
	function zi(e, t, n) {
		for (var r = 0; r < n.length; r++) Vr(n[r], n[++r], n[++r]);
		F.__c && F.__c(t, e),
			e.some(function (o) {
				try {
					(e = o.__h),
						(o.__h = []),
						e.some(function (i) {
							i.call(o);
						});
				} catch (i) {
					F.__e(i, o.__v);
				}
			});
	}
	function Ti(e) {
		return typeof e != "object" || e == null || (e.__b && e.__b > 0)
			? e
			: En(e)
				? e.map(Ti)
				: $e({}, e);
	}
	function Wc(e, t, n, r, o, i, s, a, c) {
		var l,
			d,
			u,
			p,
			f,
			g,
			y,
			b = n.props || Yt,
			v = t.props,
			_ = t.type;
		if (
			(_ == "svg"
				? (o = "http://www.w3.org/2000/svg")
				: _ == "math"
					? (o = "http://www.w3.org/1998/Math/MathML")
					: o || (o = "http://www.w3.org/1999/xhtml"),
			i != null)
		) {
			for (l = 0; l < i.length; l++)
				if (
					(f = i[l]) &&
					"setAttribute" in f == !!_ &&
					(_ ? f.localName == _ : f.nodeType == 3)
				) {
					(e = f), (i[l] = null);
					break;
				}
		}
		if (e == null) {
			if (_ == null) return document.createTextNode(v);
			(e = document.createElementNS(o, _, v.is && v)),
				a && (F.__m && F.__m(t, i), (a = !1)),
				(i = null);
		}
		if (_ == null) b === v || (a && e.data == v) || (e.data = v);
		else {
			if (((i = i && Gt.call(e.childNodes)), !a && i != null))
				for (b = {}, l = 0; l < e.attributes.length; l++)
					b[(f = e.attributes[l]).name] = f.value;
			for (l in b)
				if (((f = b[l]), l != "children")) {
					if (l == "dangerouslySetInnerHTML") u = f;
					else if (!(l in v)) {
						if (
							(l == "value" && "defaultValue" in v) ||
							(l == "checked" && "defaultChecked" in v)
						)
							continue;
						Mn(e, l, null, f, o);
					}
				}
			for (l in v)
				(f = v[l]),
					l == "children"
						? (p = f)
						: l == "dangerouslySetInnerHTML"
							? (d = f)
							: l == "value"
								? (g = f)
								: l == "checked"
									? (y = f)
									: (a && typeof f != "function") ||
										b[l] === f ||
										Mn(e, l, f, b[l], o);
			if (d)
				a ||
					(u && (d.__html == u.__html || d.__html == e.innerHTML)) ||
					(e.innerHTML = d.__html),
					(t.__k = []);
			else if (
				(u && (e.innerHTML = ""),
				ki(
					t.type == "template" ? e.content : e,
					En(p) ? p : [p],
					t,
					n,
					r,
					_ == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o,
					i,
					s,
					i ? i[0] : n.__k && yt(n, 0),
					a,
					c,
				),
				i != null)
			)
				for (l = i.length; l--; ) Fr(i[l]);
			a ||
				((l = "value"),
				_ == "progress" && g == null
					? e.removeAttribute("value")
					: g != null &&
						(g !== e[l] ||
							(_ == "progress" && !g) ||
							(_ == "option" && g != b[l])) &&
						Mn(e, l, g, b[l], o),
				(l = "checked"),
				y != null && y != e[l] && Mn(e, l, y, b[l], o));
		}
		return e;
	}
	function Vr(e, t, n) {
		try {
			if (typeof e == "function") {
				var r = typeof e.__u == "function";
				r && e.__u(), (r && t == null) || (e.__u = e(t));
			} else e.current = t;
		} catch (o) {
			F.__e(o, n);
		}
	}
	function Ii(e, t, n) {
		var r, o;
		if (
			(F.unmount && F.unmount(e),
			(r = e.ref) && ((r.current && r.current != e.__e) || Vr(r, null, t)),
			(r = e.__c) != null)
		) {
			if (r.componentWillUnmount)
				try {
					r.componentWillUnmount();
				} catch (i) {
					F.__e(i, t);
				}
			r.base = r.__P = null;
		}
		if ((r = e.__k))
			for (o = 0; o < r.length; o++)
				r[o] && Ii(r[o], t, n || typeof e.type != "function");
		n || Fr(e.__e), (e.__c = e.__ = e.__e = void 0);
	}
	function qc(e, t, n) {
		return this.constructor(e, n);
	}
	function Pn(e, t, n) {
		var r, o, i, s;
		t == document && (t = document.documentElement),
			F.__ && F.__(e, t),
			(o = (r = typeof n == "function") ? null : (n && n.__k) || t.__k),
			(i = []),
			(s = []),
			Hr(
				t,
				(e = ((!r && n) || t).__k = mt(Ee, null, [e])),
				o || Yt,
				Yt,
				t.namespaceURI,
				!r && n ? [n] : o ? null : t.firstChild ? Gt.call(t.childNodes) : null,
				i,
				!r && n ? n : o ? o.__e : t.firstChild,
				r,
				s,
			),
			zi(i, e, s);
	}
	function $i(e, t) {
		Pn(e, t, $i);
	}
	function Ei(e, t, n) {
		var r,
			o,
			i,
			s,
			a = $e({}, e.props);
		for (i in (e.type && e.type.defaultProps && (s = e.type.defaultProps), t))
			i == "key"
				? (r = t[i])
				: i == "ref"
					? (o = t[i])
					: (a[i] = t[i] === void 0 && s != null ? s[i] : t[i]);
		return (
			arguments.length > 2 &&
				(a.children = arguments.length > 3 ? Gt.call(arguments, 2) : n),
			Xt(e.type, a, r || e.key, o || e.ref, null)
		);
	}
	function Jc(e) {
		function t(n) {
			var r, o;
			return (
				this.getChildContext ||
					((r = new Set()),
					((o = {})[t.__c] = this),
					(this.getChildContext = function () {
						return o;
					}),
					(this.componentWillUnmount = function () {
						r = null;
					}),
					(this.shouldComponentUpdate = function (i) {
						this.props.value != i.value &&
							r.forEach(function (s) {
								(s.__e = !0), Zr(s);
							});
					}),
					(this.sub = function (i) {
						r.add(i);
						var s = i.componentWillUnmount;
						i.componentWillUnmount = function () {
							r && r.delete(i), s && s.call(i);
						};
					})),
				n.children
			);
		}
		return (
			(t.__c = "__cC" + bi++),
			(t.__ = e),
			(t.Provider =
				t.__l =
				(t.Consumer = function (n, r) {
					return n.children(r);
				}).contextType =
					t),
			t
		);
	}
	(Gt = wi.slice),
		(F = {
			__e: function (e, t, n, r) {
				for (var o, i, s; (t = t.__); )
					if ((o = t.__c) && !o.__)
						try {
							if (
								((i = o.constructor) &&
									i.getDerivedStateFromError != null &&
									(o.setState(i.getDerivedStateFromError(e)), (s = o.__d)),
								o.componentDidCatch != null &&
									(o.componentDidCatch(e, r || {}), (s = o.__d)),
								s)
							)
								return (o.__E = o);
						} catch (a) {
							e = a;
						}
				throw e;
			},
		}),
		(fi = 0),
		(hi = function (e) {
			return e != null && e.constructor === void 0;
		}),
		(Qt.prototype.setState = function (e, t) {
			var n;
			(n =
				this.__s != null && this.__s != this.state
					? this.__s
					: (this.__s = $e({}, this.state))),
				typeof e == "function" && (e = e($e({}, n), this.props)),
				e && $e(n, e),
				e != null && this.__v && (t && this._sb.push(t), Zr(this));
		}),
		(Qt.prototype.forceUpdate = function (e) {
			this.__v && ((this.__e = !0), e && this.__h.push(e), Zr(this));
		}),
		(Qt.prototype.render = Ee),
		(ot = []),
		(mi =
			typeof Promise == "function"
				? Promise.prototype.then.bind(Promise.resolve())
				: setTimeout),
		(yi = function (e, t) {
			return e.__v.__b - t.__v.__b;
		}),
		(Rn.__r = 0),
		(vi = /(PointerCapture)$|Capture$/i),
		(jr = 0),
		(Br = Ci(!1)),
		(Dr = Ci(!0)),
		(bi = 0);
	var it,
		q,
		Wr,
		Ri,
		en = 0,
		Mi = [],
		ee = F,
		Pi = ee.__b,
		Ai = ee.__r,
		Li = ee.diffed,
		Oi = ee.__c,
		Ni = ee.unmount,
		ji = ee.__;
	function tn(e, t) {
		ee.__h && ee.__h(q, e, en || t), (en = 0);
		var n = q.__H || (q.__H = { __: [], __h: [] });
		return e >= n.__.length && n.__.push({}), n.__[e];
	}
	function se(e) {
		return (en = 1), Bi(Zi, e);
	}
	function Bi(e, t, n) {
		var r = tn(it++, 2);
		if (
			((r.t = e),
			!r.__c &&
				((r.__ = [
					Zi(void 0, t),
					function (a) {
						var c = r.__N ? r.__N[0] : r.__[0],
							l = r.t(c, a);
						c !== l && ((r.__N = [l, r.__[1]]), r.__c.setState({}));
					},
				]),
				(r.__c = q),
				!q.__f))
		) {
			var o = function (a, c, l) {
				if (!r.__c.__H) return !0;
				var d = r.__c.__H.__.filter(function (p) {
					return !!p.__c;
				});
				if (
					d.every(function (p) {
						return !p.__N;
					})
				)
					return !i || i.call(this, a, c, l);
				var u = r.__c.props !== a;
				return (
					d.forEach(function (p) {
						if (p.__N) {
							var f = p.__[0];
							(p.__ = p.__N), (p.__N = void 0), f !== p.__[0] && (u = !0);
						}
					}),
					(i && i.call(this, a, c, l)) || u
				);
			};
			q.__f = !0;
			var i = q.shouldComponentUpdate,
				s = q.componentWillUpdate;
			(q.componentWillUpdate = function (a, c, l) {
				if (this.__e) {
					var d = i;
					(i = void 0), o(a, c, l), (i = d);
				}
				s && s.call(this, a, c, l);
			}),
				(q.shouldComponentUpdate = o);
		}
		return r.__N || r.__;
	}
	function te(e, t) {
		var n = tn(it++, 3);
		!ee.__s && Jr(n.__H, t) && ((n.__ = e), (n.u = t), q.__H.__h.push(n));
	}
	function Kc(e, t) {
		var n = tn(it++, 4);
		!ee.__s && Jr(n.__H, t) && ((n.__ = e), (n.u = t), q.__h.push(n));
	}
	function ne(e) {
		return (
			(en = 5),
			vt(function () {
				return { current: e };
			}, [])
		);
	}
	function vt(e, t) {
		var n = tn(it++, 7);
		return Jr(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
	}
	function Di(e, t) {
		return (
			(en = 8),
			vt(function () {
				return e;
			}, t)
		);
	}
	function An(e) {
		var t = q.context[e.__c],
			n = tn(it++, 9);
		return (
			(n.c = e),
			t ? (n.__ == null && ((n.__ = !0), t.sub(q)), t.props.value) : e.__
		);
	}
	function Gc() {
		for (var e; (e = Mi.shift()); )
			if (e.__P && e.__H)
				try {
					e.__H.__h.forEach(Ln), e.__H.__h.forEach(qr), (e.__H.__h = []);
				} catch (t) {
					(e.__H.__h = []), ee.__e(t, e.__v);
				}
	}
	(ee.__b = function (e) {
		(q = null), Pi && Pi(e);
	}),
		(ee.__ = function (e, t) {
			e && t.__k && t.__k.__m && (e.__m = t.__k.__m), ji && ji(e, t);
		}),
		(ee.__r = function (e) {
			Ai && Ai(e), (it = 0);
			var t = (q = e.__c).__H;
			t &&
				(Wr === q
					? ((t.__h = []),
						(q.__h = []),
						t.__.forEach(function (n) {
							n.__N && (n.__ = n.__N), (n.u = n.__N = void 0);
						}))
					: (t.__h.forEach(Ln), t.__h.forEach(qr), (t.__h = []), (it = 0))),
				(Wr = q);
		}),
		(ee.diffed = function (e) {
			Li && Li(e);
			var t = e.__c;
			t &&
				t.__H &&
				(t.__H.__h.length &&
					((Mi.push(t) !== 1 && Ri === ee.requestAnimationFrame) ||
						((Ri = ee.requestAnimationFrame) || Yc)(Gc)),
				t.__H.__.forEach(function (n) {
					n.u && (n.__H = n.u), (n.u = void 0);
				})),
				(Wr = q = null);
		}),
		(ee.__c = function (e, t) {
			t.some(function (n) {
				try {
					n.__h.forEach(Ln),
						(n.__h = n.__h.filter(function (r) {
							return !r.__ || qr(r);
						}));
				} catch (r) {
					t.some(function (o) {
						o.__h && (o.__h = []);
					}),
						(t = []),
						ee.__e(r, n.__v);
				}
			}),
				Oi && Oi(e, t);
		}),
		(ee.unmount = function (e) {
			Ni && Ni(e);
			var t,
				n = e.__c;
			n &&
				n.__H &&
				(n.__H.__.forEach(function (r) {
					try {
						Ln(r);
					} catch (o) {
						t = o;
					}
				}),
				(n.__H = void 0),
				t && ee.__e(t, n.__v));
		});
	var Fi = typeof requestAnimationFrame == "function";
	function Yc(e) {
		var t,
			n = function () {
				clearTimeout(r), Fi && cancelAnimationFrame(t), setTimeout(e);
			},
			r = setTimeout(n, 35);
		Fi && (t = requestAnimationFrame(n));
	}
	function Ln(e) {
		var t = q,
			n = e.__c;
		typeof n == "function" && ((e.__c = void 0), n()), (q = t);
	}
	function qr(e) {
		var t = q;
		(e.__c = e.__()), (q = t);
	}
	function Jr(e, t) {
		return (
			!e ||
			e.length !== t.length ||
			t.some(function (n, r) {
				return n !== e[r];
			})
		);
	}
	function Zi(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function On() {
		return (
			(On = Object.assign
				? Object.assign.bind()
				: function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
					}),
			On.apply(this, arguments)
		);
	}
	function Hi(e, t) {
		if (e == null) return {};
		var n,
			r,
			o = {},
			i = Object.keys(e);
		for (r = 0; r < i.length; r++) t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
		return o;
	}
	var Xc = ["context", "children"],
		Qc = ["useFragment"];
	function Ui(e, t, n, r) {
		function o() {
			var i,
				s = Reflect.construct(HTMLElement, [], o);
			return (
				(s._vdomComponent = e),
				r && r.shadow
					? ((s._root = s.attachShadow({
							mode: r.mode || "open",
							serializable: (i = r.serializable) != null && i,
						})),
						r.adoptedStyleSheets &&
							(s._root.adoptedStyleSheets = r.adoptedStyleSheets))
					: (s._root = s),
				s
			);
		}
		return (
			((o.prototype = Object.create(HTMLElement.prototype)).constructor = o),
			(o.prototype.connectedCallback = function () {
				tu.call(this, r);
			}),
			(o.prototype.attributeChangedCallback = nu),
			(o.prototype.disconnectedCallback = ru),
			(n = n || e.observedAttributes || Object.keys(e.propTypes || {})),
			(o.observedAttributes = n),
			e.formAssociated && (o.formAssociated = !0),
			n.forEach(function (i) {
				Object.defineProperty(o.prototype, i, {
					get: function () {
						return this._vdom ? this._vdom.props[i] : this._props[i];
					},
					set: function (s) {
						this._vdom
							? this.attributeChangedCallback(i, null, s)
							: (this._props || (this._props = {}), (this._props[i] = s));
						var a = typeof s;
						(s != null &&
							a !== "string" &&
							a !== "boolean" &&
							a !== "number") ||
							this.setAttribute(i, s);
					},
				});
			}),
			customElements.define(t || e.tagName || e.displayName || e.name, o),
			o
		);
	}
	function eu(e) {
		this.getChildContext = function () {
			return e.context;
		};
		var t = e.children,
			n = Hi(e, Xc);
		return Ei(t, n);
	}
	function tu(e) {
		var t = new CustomEvent("_preact", {
			detail: {},
			bubbles: !0,
			cancelable: !0,
		});
		this.dispatchEvent(t),
			(this._vdom = mt(
				eu,
				On({}, this._props, { context: t.detail.context }),
				qi(this, this._vdomComponent, e),
			)),
			(this.hasAttribute("hydrate") ? $i : Pn)(this._vdom, this._root);
	}
	function Vi(e) {
		return e.replace(/-(\w)/g, function (t, n) {
			return n ? n.toUpperCase() : "";
		});
	}
	function nu(e, t, n) {
		if (this._vdom) {
			var r = {};
			(r[e] = n = n ?? void 0),
				(r[Vi(e)] = n),
				(this._vdom = Ei(this._vdom, r)),
				Pn(this._vdom, this._root);
		}
	}
	function ru() {
		Pn((this._vdom = null), this._root);
	}
	function Wi(e, t) {
		var n = this,
			r = e.useFragment,
			o = Hi(e, Qc);
		return mt(
			r ? Ee : "slot",
			On({}, o, {
				ref: function (i) {
					i
						? ((n.ref = i),
							n._listener ||
								((n._listener = function (s) {
									s.stopPropagation(), (s.detail.context = t);
								}),
								i.addEventListener("_preact", n._listener)))
						: n.ref.removeEventListener("_preact", n._listener);
				},
			}),
		);
	}
	function qi(e, t, n) {
		if (e.nodeType === 3) return e.data;
		if (e.nodeType !== 1) return null;
		var r = [],
			o = {},
			i = 0,
			s = e.attributes,
			a = e.childNodes;
		for (i = s.length; i--; )
			s[i].name !== "slot" &&
				((o[s[i].name] = s[i].value), (o[Vi(s[i].name)] = s[i].value));
		for (i = a.length; i--; ) {
			var c = qi(a[i], null, n),
				l = a[i].slot;
			l ? (o[l] = mt(Wi, { name: l }, c)) : (r[i] = c);
		}
		var d = !(!n || !n.shadow),
			u = t ? mt(Wi, { useFragment: !d }, r) : r;
		return (
			!d && t && (e.innerHTML = ""), mt(t || e.nodeName.toLowerCase(), o, u)
		);
	}
	var ou = Symbol.for("preact-signals");
	function Nn() {
		if (Ue > 1) Ue--;
		else {
			for (var e, t = !1; nn !== void 0; ) {
				var n = nn;
				for (nn = void 0, Kr++; n !== void 0; ) {
					var r = n.o;
					if (((n.o = void 0), (n.f &= -3), !(8 & n.f) && Xi(n)))
						try {
							n.c();
						} catch (o) {
							t || ((e = o), (t = !0));
						}
					n = r;
				}
			}
			if (((Kr = 0), Ue--, t)) throw e;
		}
	}
	function Ji(e) {
		if (Ue > 0) return e();
		Ue++;
		try {
			return e();
		} finally {
			Nn();
		}
	}
	var Z = void 0;
	function Ki(e) {
		var t = Z;
		Z = void 0;
		try {
			return e();
		} finally {
			Z = t;
		}
	}
	var nn = void 0,
		Ue = 0,
		Kr = 0,
		jn = 0;
	function Gi(e) {
		if (Z !== void 0) {
			var t = e.n;
			if (t === void 0 || t.t !== Z)
				return (
					(t = {
						i: 0,
						S: e,
						p: Z.s,
						n: void 0,
						t: Z,
						e: void 0,
						x: void 0,
						r: t,
					}),
					Z.s !== void 0 && (Z.s.n = t),
					(Z.s = t),
					(e.n = t),
					32 & Z.f && e.S(t),
					t
				);
			if (t.i === -1)
				return (
					(t.i = 0),
					t.n !== void 0 &&
						((t.n.p = t.p),
						t.p !== void 0 && (t.p.n = t.n),
						(t.p = Z.s),
						(t.n = void 0),
						(Z.s.n = t),
						(Z.s = t)),
					t
				);
		}
	}
	function oe(e, t) {
		(this.v = e),
			(this.i = 0),
			(this.n = void 0),
			(this.t = void 0),
			(this.W = t == null ? void 0 : t.watched),
			(this.Z = t == null ? void 0 : t.unwatched),
			(this.name = t == null ? void 0 : t.name);
	}
	(oe.prototype.brand = ou),
		(oe.prototype.h = function () {
			return !0;
		}),
		(oe.prototype.S = function (e) {
			var t = this,
				n = this.t;
			n !== e &&
				e.e === void 0 &&
				((e.x = n),
				(this.t = e),
				n !== void 0
					? (n.e = e)
					: Ki(function () {
							var r;
							(r = t.W) == null || r.call(t);
						}));
		}),
		(oe.prototype.U = function (e) {
			var t = this;
			if (this.t !== void 0) {
				var n = e.e,
					r = e.x;
				n !== void 0 && ((n.x = r), (e.e = void 0)),
					r !== void 0 && ((r.e = n), (e.x = void 0)),
					e === this.t &&
						((this.t = r),
						r === void 0 &&
							Ki(function () {
								var o;
								(o = t.Z) == null || o.call(t);
							}));
			}
		}),
		(oe.prototype.subscribe = function (e) {
			var t = this;
			return wt(
				function () {
					var n = t.value,
						r = Z;
					Z = void 0;
					try {
						e(n);
					} finally {
						Z = r;
					}
				},
				{ name: "sub" },
			);
		}),
		(oe.prototype.valueOf = function () {
			return this.value;
		}),
		(oe.prototype.toString = function () {
			return this.value + "";
		}),
		(oe.prototype.toJSON = function () {
			return this.value;
		}),
		(oe.prototype.peek = function () {
			var e = Z;
			Z = void 0;
			try {
				return this.value;
			} finally {
				Z = e;
			}
		}),
		Object.defineProperty(oe.prototype, "value", {
			get: function () {
				var e = Gi(this);
				return e !== void 0 && (e.i = this.i), this.v;
			},
			set: function (e) {
				if (e !== this.v) {
					if (Kr > 100) throw new Error("Cycle detected");
					(this.v = e), this.i++, jn++, Ue++;
					try {
						for (var t = this.t; t !== void 0; t = t.x) t.t.N();
					} finally {
						Nn();
					}
				}
			},
		});
	function Yi(e, t) {
		return new oe(e, t);
	}
	function Xi(e) {
		for (var t = e.s; t !== void 0; t = t.n)
			if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
		return !1;
	}
	function Qi(e) {
		for (var t = e.s; t !== void 0; t = t.n) {
			var n = t.S.n;
			if (
				(n !== void 0 && (t.r = n), (t.S.n = t), (t.i = -1), t.n === void 0)
			) {
				e.s = t;
				break;
			}
		}
	}
	function es(e) {
		for (var t = e.s, n = void 0; t !== void 0; ) {
			var r = t.p;
			t.i === -1
				? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r))
				: (n = t),
				(t.S.n = t.r),
				t.r !== void 0 && (t.r = void 0),
				(t = r);
		}
		e.s = n;
	}
	function st(e, t) {
		oe.call(this, void 0),
			(this.x = e),
			(this.s = void 0),
			(this.g = jn - 1),
			(this.f = 4),
			(this.W = t == null ? void 0 : t.watched),
			(this.Z = t == null ? void 0 : t.unwatched),
			(this.name = t == null ? void 0 : t.name);
	}
	(st.prototype = new oe()),
		(st.prototype.h = function () {
			if (((this.f &= -3), 1 & this.f)) return !1;
			if ((36 & this.f) == 32 || ((this.f &= -5), this.g === jn)) return !0;
			if (((this.g = jn), (this.f |= 1), this.i > 0 && !Xi(this)))
				return (this.f &= -2), !0;
			var e = Z;
			try {
				Qi(this), (Z = this);
				var t = this.x();
				(16 & this.f || this.v !== t || this.i === 0) &&
					((this.v = t), (this.f &= -17), this.i++);
			} catch (n) {
				(this.v = n), (this.f |= 16), this.i++;
			}
			return (Z = e), es(this), (this.f &= -2), !0;
		}),
		(st.prototype.S = function (e) {
			if (this.t === void 0) {
				this.f |= 36;
				for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
			}
			oe.prototype.S.call(this, e);
		}),
		(st.prototype.U = function (e) {
			if (
				this.t !== void 0 &&
				(oe.prototype.U.call(this, e), this.t === void 0)
			) {
				this.f &= -33;
				for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
			}
		}),
		(st.prototype.N = function () {
			if (!(2 & this.f)) {
				this.f |= 6;
				for (var e = this.t; e !== void 0; e = e.x) e.t.N();
			}
		}),
		Object.defineProperty(st.prototype, "value", {
			get: function () {
				if (1 & this.f) throw new Error("Cycle detected");
				var e = Gi(this);
				if ((this.h(), e !== void 0 && (e.i = this.i), 16 & this.f))
					throw this.v;
				return this.v;
			},
		});
	function ts(e, t) {
		return new st(e, t);
	}
	function ns(e) {
		var t = e.u;
		if (((e.u = void 0), typeof t == "function")) {
			Ue++;
			var n = Z;
			Z = void 0;
			try {
				t();
			} catch (r) {
				throw ((e.f &= -2), (e.f |= 8), Gr(e), r);
			} finally {
				(Z = n), Nn();
			}
		}
	}
	function Gr(e) {
		for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
		(e.x = void 0), (e.s = void 0), ns(e);
	}
	function iu(e) {
		if (Z !== this) throw new Error("Out-of-order effect");
		es(this), (Z = e), (this.f &= -2), 8 & this.f && Gr(this), Nn();
	}
	function bt(e, t) {
		(this.x = e),
			(this.u = void 0),
			(this.s = void 0),
			(this.o = void 0),
			(this.f = 32),
			(this.name = t == null ? void 0 : t.name);
	}
	(bt.prototype.c = function () {
		var e = this.S();
		try {
			if (8 & this.f || this.x === void 0) return;
			var t = this.x();
			typeof t == "function" && (this.u = t);
		} finally {
			e();
		}
	}),
		(bt.prototype.S = function () {
			if (1 & this.f) throw new Error("Cycle detected");
			(this.f |= 1), (this.f &= -9), ns(this), Qi(this), Ue++;
			var e = Z;
			return (Z = this), iu.bind(this, e);
		}),
		(bt.prototype.N = function () {
			2 & this.f || ((this.f |= 2), (this.o = nn), (nn = this));
		}),
		(bt.prototype.d = function () {
			(this.f |= 8), 1 & this.f || Gr(this);
		}),
		(bt.prototype.dispose = function () {
			this.d();
		});
	function wt(e, t) {
		var n = new bt(e, t);
		try {
			n.c();
		} catch (o) {
			throw (n.d(), o);
		}
		var r = n.d.bind(n);
		return (r[Symbol.dispose] = r), r;
	}
	var Yr,
		Bn,
		su = typeof window < "u" && !!window.__PREACT_SIGNALS_DEVTOOLS__,
		rs = [],
		os = [];
	wt(function () {
		Yr = this.N;
	})();
	function _t(e, t) {
		F[e] = t.bind(null, F[e] || function () {});
	}
	function Dn(e) {
		if (Bn) {
			var t = Bn;
			(Bn = void 0), t();
		}
		Bn = e && e.S();
	}
	function is(e) {
		var t = this,
			n = e.data,
			r = Re(n);
		r.value = n;
		var o = vt(function () {
				for (var a = t, c = t.__v; (c = c.__); )
					if (c.__c) {
						c.__c.__$f |= 4;
						break;
					}
				var l = ts(function () {
						var f = r.value.value;
						return f === 0 ? 0 : f === !0 ? "" : f || "";
					}),
					d = ts(function () {
						return !Array.isArray(l.value) && !hi(l.value);
					}),
					u = wt(function () {
						if (((this.N = ss), d.value)) {
							var f = l.value;
							a.__v &&
								a.__v.__e &&
								a.__v.__e.nodeType === 3 &&
								(a.__v.__e.data = f);
						}
					}),
					p = t.__$u.d;
				return (
					(t.__$u.d = function () {
						u(), p.call(this);
					}),
					[d, l]
				);
			}, []),
			i = o[0],
			s = o[1];
		return i.value ? s.peek() : s.value;
	}
	(is.displayName = "ReactiveTextNode"),
		Object.defineProperties(oe.prototype, {
			constructor: { configurable: !0, value: void 0 },
			type: { configurable: !0, value: is },
			props: {
				configurable: !0,
				get: function () {
					return { data: this };
				},
			},
			__b: { configurable: !0, value: 1 },
		}),
		_t("__b", function (e, t) {
			if (typeof t.type == "string") {
				var n,
					r = t.props;
				for (var o in r)
					if (o !== "children") {
						var i = r[o];
						i instanceof oe &&
							(n || (t.__np = n = {}), (n[o] = i), (r[o] = i.peek()));
					}
			}
			e(t);
		}),
		_t("__r", function (e, t) {
			if ((e(t), t.type !== Ee)) {
				Dn();
				var n,
					r = t.__c;
				r &&
					((r.__$f &= -2),
					(n = r.__$u) === void 0 &&
						(r.__$u = n =
							(function (o, i) {
								var s;
								return (
									wt(
										function () {
											s = this;
										},
										{ name: i },
									),
									(s.c = o),
									s
								);
							})(
								function () {
									var o;
									su && ((o = n.y) == null || o.call(n)),
										(r.__$f |= 1),
										r.setState({});
								},
								typeof t.type == "function"
									? t.type.displayName || t.type.name
									: "",
							))),
					Dn(n);
			}
		}),
		_t("__e", function (e, t, n, r) {
			Dn(), e(t, n, r);
		}),
		_t("diffed", function (e, t) {
			Dn();
			var n;
			if (typeof t.type == "string" && (n = t.__e)) {
				var r = t.__np,
					o = t.props;
				if (r) {
					var i = n.U;
					if (i)
						for (var s in i) {
							var a = i[s];
							a !== void 0 && !(s in r) && (a.d(), (i[s] = void 0));
						}
					else (i = {}), (n.U = i);
					for (var c in r) {
						var l = i[c],
							d = r[c];
						l === void 0 ? ((l = au(n, c, d, o)), (i[c] = l)) : l.o(d, o);
					}
				}
			}
			e(t);
		});
	function au(e, t, n, r) {
		var o = t in e && e.ownerSVGElement === void 0,
			i = Yi(n);
		return {
			o: function (s, a) {
				(i.value = s), (r = a);
			},
			d: wt(function () {
				this.N = ss;
				var s = i.value.value;
				r[t] !== s &&
					((r[t] = s),
					o
						? (e[t] = s)
						: s != null && (s !== !1 || t[4] === "-")
							? e.setAttribute(t, s)
							: e.removeAttribute(t));
			}),
		};
	}
	_t("unmount", function (e, t) {
		if (typeof t.type == "string") {
			var n = t.__e;
			if (n) {
				var r = n.U;
				if (r) {
					n.U = void 0;
					for (var o in r) {
						var i = r[o];
						i && i.d();
					}
				}
			}
		} else {
			var s = t.__c;
			if (s) {
				var a = s.__$u;
				a && ((s.__$u = void 0), a.d());
			}
		}
		e(t);
	}),
		_t("__h", function (e, t, n, r) {
			(r < 3 || r === 9) && (t.__$f |= 2), e(t, n, r);
		}),
		(Qt.prototype.shouldComponentUpdate = function (e, t) {
			if (this.__R) return !0;
			var n = this.__$u,
				r = n && n.s !== void 0;
			for (var o in t) return !0;
			if (this.__f || (typeof this.u == "boolean" && this.u === !0)) {
				var i = 2 & this.__$f;
				if (!(r || i || 4 & this.__$f) || 1 & this.__$f) return !0;
			} else if (!(r || 4 & this.__$f) || 3 & this.__$f) return !0;
			for (var s in e)
				if (s !== "__source" && e[s] !== this.props[s]) return !0;
			for (var a in this.props) if (!(a in e)) return !0;
			return !1;
		});
	function Re(e, t) {
		return vt(function () {
			return Yi(e, t);
		}, []);
	}
	var lu =
			typeof requestAnimationFrame > "u"
				? setTimeout
				: function (e) {
						var t = function () {
								clearTimeout(n), cancelAnimationFrame(r), e();
							},
							n = setTimeout(t, 35),
							r = requestAnimationFrame(t);
					},
		cu = function (e) {
			queueMicrotask(function () {
				queueMicrotask(e);
			});
		};
	function uu() {
		Ji(function () {
			for (var e; (e = rs.shift()); ) Yr.call(e);
		});
	}
	function du() {
		rs.push(this) === 1 && (F.requestAnimationFrame || lu)(uu);
	}
	function pu() {
		Ji(function () {
			for (var e; (e = os.shift()); ) Yr.call(e);
		});
	}
	function ss() {
		os.push(this) === 1 && (F.requestAnimationFrame || cu)(pu);
	}
	function as(e, t) {
		var n = ne(e);
		(n.current = e),
			te(function () {
				return wt(function () {
					return (this.N = du), n.current();
				}, t);
			}, []);
	}
	function fu(e, t) {
		return e === t;
	}
	function ye(e, t, n = fu) {
		const r = ne(t),
			o = ne(n);
		(r.current = t), (o.current = n);
		const [i, s] = se(() => (e ? t(e.getSnapshot()) : void 0));
		return (
			te(() => {
				if (!e) return;
				const a = () => {
					const l = r.current(e.getSnapshot());
					s((d) => (o.current(d, l) ? d : l));
				};
				a();
				const { unsubscribe: c } = e.subscribe(a);
				return c;
			}, [e]),
			i
		);
	}
	function B(e, t) {
		return e == null || e === "" ? t : e;
	}
	function Ve(e, t) {
		return e == null ? void 0 : e.find((n) => n.code === t);
	}
	function hu(e, t) {
		var i;
		if (((i = e.language) == null ? void 0 : i.code) === t) return e;
		const n = Ve(e.tr, t),
			r = e.cards.map((s) => gu(s, t)),
			o = r.some((s, a) => s !== e.cards[a]);
		return !n && !o
			? e
			: n
				? {
						...e,
						textNext: B(n["@textNext"], e.textNext),
						textPrev: B(n["@textPrev"], e.textPrev),
						textClose: B(n["@textClose"], e.textClose),
						textHide: B(n["@textHide"], e.textHide),
						textMinimized: B(n["@textMinimized"], e.textMinimized),
						textReplyLater: B(n["@textReplyLater"], e.textReplyLater),
						cards: r,
					}
				: { ...e, cards: r };
	}
	function gu(e, t) {
		const n = Ve(e.tr, t);
		if (!n) return e;
		const r = {
			...e,
			name: B(n["@name"], e.name),
			body: B(n["@body"], e.body),
			bodyHtml: B(n["@bodyHtml"], e.bodyHtml),
			bodyJson: B(n["@bodyJson"], e.bodyJson),
			textNext: B(n["@textNext"], e.textNext),
			textPrev: B(n["@textPrev"], e.textPrev),
			textClose: B(n["@textClose"], e.textClose),
			textHide: B(n["@textHide"], e.textHide),
			textMinimized: B(n["@textMinimized"], e.textMinimized),
			textReplyLater: B(n["@textReplyLater"], e.textReplyLater),
		};
		switch (r.type) {
			case "InputCard":
				return mu(r, n);
			case "CompletionCard":
			case "FindabilityCard":
				return yu(r, n);
			case "RecruitmentCard":
				return vu(r, n);
			case "TopTaskCard":
				return bu(r, t);
			case "SegmentCard":
				return wu(r, t);
			case "LikertCard":
				return _u(r, t);
			case "SingleSelectCard":
			case "MultiSelectCard":
				return ku(r, t);
			case "MessageCard":
				return r;
			default:
				return r;
		}
	}
	function mu(e, t) {
		return {
			...e,
			label: B(t["@label"], e.label),
			placeholder: B(t["@placeholder"], e.placeholder),
		};
	}
	function yu(e, t) {
		return {
			...e,
			positive: B(t["@positive"], e.positive),
			negative: B(t["@negative"], e.negative),
		};
	}
	function vu(e, t) {
		return {
			...e,
			email_label: B(t["@email_label"], e.email_label),
			email_placeholder: B(t["@email_placeholder"], e.email_placeholder),
			phone_label: B(t["@phone_label"], e.phone_label),
			phone_placeholder: B(t["@phone_placeholder"], e.phone_placeholder),
			nameLabel: B(t["@nameLabel"], e.nameLabel),
			namePlaceholder: B(t["@namePlaceholder"], e.namePlaceholder),
			consentTermsUrl: B(t["@consentTermsUrl"], e.consentTermsUrl),
			consentTermsTitle: B(t["@consentTermsTitle"], e.consentTermsTitle),
			consentTermsText: B(t["@consentTermsText"], e.consentTermsText),
			consentTermsLabel: B(t["@consentTermsLabel"], e.consentTermsLabel),
		};
	}
	function bu(e, t) {
		return e.taskItems
			? { ...e, taskItems: e.taskItems.map((n) => Su(n, t)) }
			: e;
	}
	function wu(e, t) {
		const n = { ...e };
		return (
			e.segment && "name" in e.segment && (n.segment = xu(e.segment, t)),
			e.items &&
				(n.items = e.items.map((r) =>
					r.value && "name" in r.value ? { ...r, value: Cu(r.value, t) } : r,
				)),
			n
		);
	}
	function _u(e, t) {
		var o;
		const n =
			((o = e.LikertCard) == null ? void 0 : o.likertScale) ?? e.likertScale;
		if (!(n != null && n.likertItems)) return e;
		const r = { ...n, likertItems: n.likertItems.map((i) => zu(i, t)) };
		return {
			...e,
			likertScale: r,
			...(e.LikertCard && { LikertCard: { ...e.LikertCard, likertScale: r } }),
		};
	}
	function ku(e, t) {
		return e.selectItems
			? { ...e, selectItems: e.selectItems.map((n) => Tu(n, t)) }
			: e;
	}
	function Su(e, t) {
		if (!e.task || !("name" in e.task)) return e;
		const n = e.task,
			r = Ve(e.tr, t);
		if (r != null && r["@label"]) return { ...e, label: r["@label"], task: n };
		const o = Ve(n.tr, t);
		return o != null && o["@name"]
			? { ...e, label: o["@name"], task: n }
			: { ...e, task: n };
	}
	function xu(e, t) {
		const n = Ve(e.tr, t);
		return n
			? {
					...e,
					name: B(n.name, e.name),
					description: B(n.description, e.description),
				}
			: e;
	}
	function Cu(e, t) {
		const n = Ve(e.tr, t);
		return n
			? {
					...e,
					name: B(n.name, e.name),
					description: B(n.description, e.description),
				}
			: e;
	}
	function zu(e, t) {
		const n = Ve(e.tr, t);
		return n ? { ...e, label: B(n["@label"], e.label) } : e;
	}
	function Tu(e, t) {
		const n = Ve(e.tr, t);
		return n ? { ...e, label: B(n["@label"], e.label) } : e;
	}
	var Iu = 0;
	function m(e, t, n, r, o, i) {
		t || (t = {});
		var s,
			a,
			c = t;
		if ("ref" in c)
			for (a in ((c = {}), t)) a == "ref" ? (s = t[a]) : (c[a] = t[a]);
		var l = {
			type: e,
			props: c,
			key: n,
			ref: s,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__c: null,
			constructor: void 0,
			__v: --Iu,
			__i: -1,
			__u: 0,
			__source: o,
			__self: i,
		};
		if (typeof e == "function" && (s = e.defaultProps))
			for (a in s) c[a] === void 0 && (c[a] = s[a]);
		return F.vnode && F.vnode(l), l;
	}
	const rn = Jc(void 0),
		$u = ({ survey: e, state: t, children: n, api: r, captureMachine: o }) => {
			const i = Re(!0);
			as(() => {
				if (i.value === !1) {
					const c = setTimeout(() => {
						i.value = !0;
					}, 500);
					return () => clearTimeout(c);
				}
			});
			const s = ye(o, (c) => c.context.language),
				a = vt(() => hu(e, s), [e, s]);
			return m(rn.Provider, {
				value: {
					api: r,
					survey: a,
					state: t,
					captureMachine: o,
					cardValidState: i,
				},
				children: n,
			});
		};
	function Fn() {
		const e = An(rn);
		if (!e) throw new Error("useSurvey must be used within a SkyraProvider");
		return e.survey;
	}
	function Eu() {
		const e = An(rn);
		if (!e)
			throw new Error("useSessionState must be used within a SkyraProvider");
		return e.state;
	}
	function Xr() {
		const e = An(rn);
		if (!e)
			throw new Error("useCaptureMachine must be used within a SkyraProvider");
		return e.captureMachine;
	}
	function We() {
		const e = An(rn);
		if (!e)
			throw new Error("useCardValidState must be used within a SkyraProvider");
		return e.cardValidState;
	}
	function kt() {
		const e = Xr();
		return ye(e, (n) => n.context.language);
	}
	function Ru(e) {
		return {
			all: (e = e || new Map()),
			on: function (t, n) {
				var r = e.get(t);
				r ? r.push(n) : e.set(t, [n]);
			},
			off: function (t, n) {
				var r = e.get(t);
				r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []));
			},
			emit: function (t, n) {
				var r = e.get(t);
				r &&
					r.slice().map(function (o) {
						o(n);
					}),
					(r = e.get("*")) &&
						r.slice().map(function (o) {
							o(t, n);
						});
			},
		};
	}
	var ls;
	const Mu = Object.freeze({ status: "aborted" });
	function w(e, t, n) {
		function r(a, c) {
			if (
				(a._zod ||
					Object.defineProperty(a, "_zod", {
						value: { def: c, constr: s, traits: new Set() },
						enumerable: !1,
					}),
				a._zod.traits.has(e))
			)
				return;
			a._zod.traits.add(e), t(a, c);
			const l = s.prototype,
				d = Object.keys(l);
			for (let u = 0; u < d.length; u++) {
				const p = d[u];
				p in a || (a[p] = l[p].bind(a));
			}
		}
		const o = (n == null ? void 0 : n.Parent) ?? Object;
		class i extends o {}
		Object.defineProperty(i, "name", { value: e });
		function s(a) {
			var c;
			const l = n != null && n.Parent ? new i() : this;
			r(l, a), (c = l._zod).deferred ?? (c.deferred = []);
			for (const d of l._zod.deferred) d();
			return l;
		}
		return (
			Object.defineProperty(s, "init", { value: r }),
			Object.defineProperty(s, Symbol.hasInstance, {
				value: (a) => {
					var c, l;
					return n != null && n.Parent && a instanceof n.Parent
						? !0
						: (l =
									(c = a == null ? void 0 : a._zod) == null
										? void 0
										: c.traits) == null
							? void 0
							: l.has(e);
				},
			}),
			Object.defineProperty(s, "name", { value: e }),
			s
		);
	}
	class St extends Error {
		constructor() {
			super(
				"Encountered Promise during synchronous parse. Use .parseAsync() instead.",
			);
		}
	}
	class cs extends Error {
		constructor(t) {
			super(`Encountered unidirectional transform during encode: ${t}`),
				(this.name = "ZodEncodeError");
		}
	}
	(ls = globalThis).__zod_globalConfig ?? (ls.__zod_globalConfig = {});
	const Qr = globalThis.__zod_globalConfig;
	function Le(e) {
		return Qr;
	}
	function us(e) {
		const t = Object.values(e).filter((r) => typeof r == "number");
		return Object.entries(e)
			.filter(([r, o]) => t.indexOf(+r) === -1)
			.map(([r, o]) => o);
	}
	function eo(e, t) {
		return typeof t == "bigint" ? t.toString() : t;
	}
	function Zn(e) {
		return {
			get value() {
				{
					const t = e();
					return Object.defineProperty(this, "value", { value: t }), t;
				}
			},
		};
	}
	function to(e) {
		return e == null;
	}
	function no(e) {
		const t = e.startsWith("^") ? 1 : 0,
			n = e.endsWith("$") ? e.length - 1 : e.length;
		return e.slice(t, n);
	}
	function Pu(e, t) {
		const n = e / t,
			r = Math.round(n),
			o = Number.EPSILON * Math.max(Math.abs(n), 1);
		return Math.abs(n - r) < o ? 0 : n - r;
	}
	const ds = Symbol("evaluating");
	function j(e, t, n) {
		let r;
		Object.defineProperty(e, t, {
			get() {
				if (r !== ds) return r === void 0 && ((r = ds), (r = n())), r;
			},
			set(o) {
				Object.defineProperty(e, t, { value: o });
			},
			configurable: !0,
		});
	}
	function at(e, t, n) {
		Object.defineProperty(e, t, {
			value: n,
			writable: !0,
			enumerable: !0,
			configurable: !0,
		});
	}
	function qe(...e) {
		const t = {};
		for (const n of e) {
			const r = Object.getOwnPropertyDescriptors(n);
			Object.assign(t, r);
		}
		return Object.defineProperties({}, t);
	}
	function ps(e) {
		return JSON.stringify(e);
	}
	function Au(e) {
		return e
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, "")
			.replace(/[\s_-]+/g, "-")
			.replace(/^-+|-+$/g, "");
	}
	const fs =
		"captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
	function on(e) {
		return typeof e == "object" && e !== null && !Array.isArray(e);
	}
	const Lu = Zn(() => {
		var e;
		if (
			Qr.jitless ||
			(typeof navigator < "u" &&
				(e = navigator == null ? void 0 : navigator.userAgent) != null &&
				e.includes("Cloudflare"))
		)
			return !1;
		try {
			const t = Function;
			return new t(""), !0;
		} catch {
			return !1;
		}
	});
	function xt(e) {
		if (on(e) === !1) return !1;
		const t = e.constructor;
		if (t === void 0 || typeof t != "function") return !0;
		const n = t.prototype;
		return !(
			on(n) === !1 ||
			Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1
		);
	}
	function hs(e) {
		return xt(e)
			? { ...e }
			: Array.isArray(e)
				? [...e]
				: e instanceof Map
					? new Map(e)
					: e instanceof Set
						? new Set(e)
						: e;
	}
	const Ou = new Set(["string", "number", "symbol"]);
	function Ct(e) {
		return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
	function Je(e, t, n) {
		const r = new e._zod.constr(t ?? e._zod.def);
		return (!t || (n != null && n.parent)) && (r._zod.parent = e), r;
	}
	function T(e) {
		const t = e;
		if (!t) return {};
		if (typeof t == "string") return { error: () => t };
		if ((t == null ? void 0 : t.message) !== void 0) {
			if ((t == null ? void 0 : t.error) !== void 0)
				throw new Error("Cannot specify both `message` and `error` params");
			t.error = t.message;
		}
		return (
			delete t.message,
			typeof t.error == "string" ? { ...t, error: () => t.error } : t
		);
	}
	function Nu(e) {
		return Object.keys(e).filter(
			(t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional",
		);
	}
	const ju = {
		safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
		int32: [-2147483648, 2147483647],
		uint32: [0, 4294967295],
		float32: [-34028234663852886e22, 34028234663852886e22],
		float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
	};
	function Bu(e, t) {
		const n = e._zod.def,
			r = n.checks;
		if (r && r.length > 0)
			throw new Error(
				".pick() cannot be used on object schemas containing refinements",
			);
		const i = qe(e._zod.def, {
			get shape() {
				const s = {};
				for (const a in t) {
					if (!(a in n.shape)) throw new Error(`Unrecognized key: "${a}"`);
					t[a] && (s[a] = n.shape[a]);
				}
				return at(this, "shape", s), s;
			},
			checks: [],
		});
		return Je(e, i);
	}
	function Du(e, t) {
		const n = e._zod.def,
			r = n.checks;
		if (r && r.length > 0)
			throw new Error(
				".omit() cannot be used on object schemas containing refinements",
			);
		const i = qe(e._zod.def, {
			get shape() {
				const s = { ...e._zod.def.shape };
				for (const a in t) {
					if (!(a in n.shape)) throw new Error(`Unrecognized key: "${a}"`);
					t[a] && delete s[a];
				}
				return at(this, "shape", s), s;
			},
			checks: [],
		});
		return Je(e, i);
	}
	function Fu(e, t) {
		if (!xt(t))
			throw new Error("Invalid input to extend: expected a plain object");
		const n = e._zod.def.checks;
		if (n && n.length > 0) {
			const i = e._zod.def.shape;
			for (const s in t)
				if (Object.getOwnPropertyDescriptor(i, s) !== void 0)
					throw new Error(
						"Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
					);
		}
		const o = qe(e._zod.def, {
			get shape() {
				const i = { ...e._zod.def.shape, ...t };
				return at(this, "shape", i), i;
			},
		});
		return Je(e, o);
	}
	function Zu(e, t) {
		if (!xt(t))
			throw new Error("Invalid input to safeExtend: expected a plain object");
		const n = qe(e._zod.def, {
			get shape() {
				const r = { ...e._zod.def.shape, ...t };
				return at(this, "shape", r), r;
			},
		});
		return Je(e, n);
	}
	function Hu(e, t) {
		var r;
		if ((r = e._zod.def.checks) != null && r.length)
			throw new Error(
				".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.",
			);
		const n = qe(e._zod.def, {
			get shape() {
				const o = { ...e._zod.def.shape, ...t._zod.def.shape };
				return at(this, "shape", o), o;
			},
			get catchall() {
				return t._zod.def.catchall;
			},
			checks: t._zod.def.checks ?? [],
		});
		return Je(e, n);
	}
	function Uu(e, t, n) {
		const o = t._zod.def.checks;
		if (o && o.length > 0)
			throw new Error(
				".partial() cannot be used on object schemas containing refinements",
			);
		const s = qe(t._zod.def, {
			get shape() {
				const a = t._zod.def.shape,
					c = { ...a };
				if (n)
					for (const l in n) {
						if (!(l in a)) throw new Error(`Unrecognized key: "${l}"`);
						n[l] &&
							(c[l] = e ? new e({ type: "optional", innerType: a[l] }) : a[l]);
					}
				else
					for (const l in a)
						c[l] = e ? new e({ type: "optional", innerType: a[l] }) : a[l];
				return at(this, "shape", c), c;
			},
			checks: [],
		});
		return Je(t, s);
	}
	function Vu(e, t, n) {
		const r = qe(t._zod.def, {
			get shape() {
				const o = t._zod.def.shape,
					i = { ...o };
				if (n)
					for (const s in n) {
						if (!(s in i)) throw new Error(`Unrecognized key: "${s}"`);
						n[s] && (i[s] = new e({ type: "nonoptional", innerType: o[s] }));
					}
				else
					for (const s in o)
						i[s] = new e({ type: "nonoptional", innerType: o[s] });
				return at(this, "shape", i), i;
			},
		});
		return Je(t, r);
	}
	function zt(e, t = 0) {
		var n;
		if (e.aborted === !0) return !0;
		for (let r = t; r < e.issues.length; r++)
			if (((n = e.issues[r]) == null ? void 0 : n.continue) !== !0) return !0;
		return !1;
	}
	function Wu(e, t = 0) {
		var n;
		if (e.aborted === !0) return !0;
		for (let r = t; r < e.issues.length; r++)
			if (((n = e.issues[r]) == null ? void 0 : n.continue) === !1) return !0;
		return !1;
	}
	function Ke(e, t) {
		return t.map((n) => {
			var r;
			return (r = n).path ?? (r.path = []), n.path.unshift(e), n;
		});
	}
	function Hn(e) {
		return typeof e == "string" ? e : e == null ? void 0 : e.message;
	}
	function Oe(e, t, n) {
		var c, l, d, u, p, f;
		const r = e.message
				? e.message
				: (Hn(
						(d =
							(l = (c = e.inst) == null ? void 0 : c._zod.def) == null
								? void 0
								: l.error) == null
							? void 0
							: d.call(l, e),
					) ??
					Hn(
						(u = t == null ? void 0 : t.error) == null ? void 0 : u.call(t, e),
					) ??
					Hn((p = n.customError) == null ? void 0 : p.call(n, e)) ??
					Hn((f = n.localeError) == null ? void 0 : f.call(n, e)) ??
					"Invalid input"),
			{ inst: o, continue: i, input: s, ...a } = e;
		return (
			a.path ?? (a.path = []),
			(a.message = r),
			t != null && t.reportInput && (a.input = s),
			a
		);
	}
	function ro(e) {
		return Array.isArray(e)
			? "array"
			: typeof e == "string"
				? "string"
				: "unknown";
	}
	function sn(...e) {
		const [t, n, r] = e;
		return typeof t == "string"
			? { message: t, code: "custom", input: n, inst: r }
			: { ...t };
	}
	const gs = (e, t) => {
			(e.name = "$ZodError"),
				Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
				Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
				(e.message = JSON.stringify(t, eo, 2)),
				Object.defineProperty(e, "toString", {
					value: () => e.message,
					enumerable: !1,
				});
		},
		ms = w("$ZodError", gs),
		ys = w("$ZodError", gs, { Parent: Error });
	function qu(e, t = (n) => n.message) {
		const n = {},
			r = [];
		for (const o of e.issues)
			o.path.length > 0
				? ((n[o.path[0]] = n[o.path[0]] || []), n[o.path[0]].push(t(o)))
				: r.push(t(o));
		return { formErrors: r, fieldErrors: n };
	}
	function Ju(e, t = (n) => n.message) {
		const n = { _errors: [] },
			r = (o, i = []) => {
				for (const s of o.issues)
					if (s.code === "invalid_union" && s.errors.length)
						s.errors.map((a) => r({ issues: a }, [...i, ...s.path]));
					else if (s.code === "invalid_key")
						r({ issues: s.issues }, [...i, ...s.path]);
					else if (s.code === "invalid_element")
						r({ issues: s.issues }, [...i, ...s.path]);
					else {
						const a = [...i, ...s.path];
						if (a.length === 0) n._errors.push(t(s));
						else {
							let c = n,
								l = 0;
							for (; l < a.length; ) {
								const d = a[l];
								l === a.length - 1
									? ((c[d] = c[d] || { _errors: [] }), c[d]._errors.push(t(s)))
									: (c[d] = c[d] || { _errors: [] }),
									(c = c[d]),
									l++;
							}
						}
					}
			};
		return r(e), n;
	}
	const oo = (e) => (t, n, r, o) => {
			const i = r ? { ...r, async: !1 } : { async: !1 },
				s = t._zod.run({ value: n, issues: [] }, i);
			if (s instanceof Promise) throw new St();
			if (s.issues.length) {
				const a = new ((o == null ? void 0 : o.Err) ?? e)(
					s.issues.map((c) => Oe(c, i, Le())),
				);
				throw (fs(a, o == null ? void 0 : o.callee), a);
			}
			return s.value;
		},
		io = (e) => async (t, n, r, o) => {
			const i = r ? { ...r, async: !0 } : { async: !0 };
			let s = t._zod.run({ value: n, issues: [] }, i);
			if ((s instanceof Promise && (s = await s), s.issues.length)) {
				const a = new ((o == null ? void 0 : o.Err) ?? e)(
					s.issues.map((c) => Oe(c, i, Le())),
				);
				throw (fs(a, o == null ? void 0 : o.callee), a);
			}
			return s.value;
		},
		Un = (e) => (t, n, r) => {
			const o = r ? { ...r, async: !1 } : { async: !1 },
				i = t._zod.run({ value: n, issues: [] }, o);
			if (i instanceof Promise) throw new St();
			return i.issues.length
				? {
						success: !1,
						error: new (e ?? ms)(i.issues.map((s) => Oe(s, o, Le()))),
					}
				: { success: !0, data: i.value };
		},
		Ku = Un(ys),
		Vn = (e) => async (t, n, r) => {
			const o = r ? { ...r, async: !0 } : { async: !0 };
			let i = t._zod.run({ value: n, issues: [] }, o);
			return (
				i instanceof Promise && (i = await i),
				i.issues.length
					? { success: !1, error: new e(i.issues.map((s) => Oe(s, o, Le()))) }
					: { success: !0, data: i.value }
			);
		},
		Gu = Vn(ys),
		Yu = (e) => (t, n, r) => {
			const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
			return oo(e)(t, n, o);
		},
		Xu = (e) => (t, n, r) => oo(e)(t, n, r),
		Qu = (e) => async (t, n, r) => {
			const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
			return io(e)(t, n, o);
		},
		ed = (e) => async (t, n, r) => io(e)(t, n, r),
		td = (e) => (t, n, r) => {
			const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
			return Un(e)(t, n, o);
		},
		nd = (e) => (t, n, r) => Un(e)(t, n, r),
		rd = (e) => async (t, n, r) => {
			const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
			return Vn(e)(t, n, o);
		},
		od = (e) => async (t, n, r) => Vn(e)(t, n, r),
		id = /^[cC][0-9a-z]{6,}$/,
		sd = /^[0-9a-z]+$/,
		ad = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
		ld = /^[0-9a-vA-V]{20}$/,
		cd = /^[A-Za-z0-9]{27}$/,
		ud = /^[a-zA-Z0-9_-]{21}$/,
		dd =
			/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
		pd =
			/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
		vs = (e) =>
			e
				? new RegExp(
						`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
					)
				: /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
		fd =
			/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
		hd = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
	function gd() {
		return new RegExp(hd, "u");
	}
	const md =
			/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
		yd =
			/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
		vd =
			/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
		bd =
			/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
		wd =
			/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
		bs = /^[A-Za-z0-9_-]*$/,
		_d = /^https?$/,
		kd = /^\+[1-9]\d{6,14}$/,
		ws =
			"(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
		Sd = new RegExp(`^${ws}$`);
	function _s(e) {
		const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
		return typeof e.precision == "number"
			? e.precision === -1
				? `${t}`
				: e.precision === 0
					? `${t}:[0-5]\\d`
					: `${t}:[0-5]\\d\\.\\d{${e.precision}}`
			: `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
	}
	function xd(e) {
		return new RegExp(`^${_s(e)}$`);
	}
	function Cd(e) {
		const t = _s({ precision: e.precision }),
			n = ["Z"];
		e.local && n.push(""),
			e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
		const r = `${t}(?:${n.join("|")})`;
		return new RegExp(`^${ws}T(?:${r})$`);
	}
	const zd = (e) => {
			const t = e
				? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}`
				: "[\\s\\S]*";
			return new RegExp(`^${t}$`);
		},
		Td = /^-?\d+$/,
		ks = /^-?\d+(?:\.\d+)?$/,
		Id = /^(?:true|false)$/i,
		$d = /^null$/i,
		Ed = /^[^A-Z]*$/,
		Rd = /^[^a-z]*$/,
		ue = w("$ZodCheck", (e, t) => {
			var n;
			e._zod ?? (e._zod = {}),
				(e._zod.def = t),
				(n = e._zod).onattach ?? (n.onattach = []);
		}),
		Ss = { number: "number", bigint: "bigint", object: "date" },
		xs = w("$ZodCheckLessThan", (e, t) => {
			ue.init(e, t);
			const n = Ss[typeof t.value];
			e._zod.onattach.push((r) => {
				const o = r._zod.bag,
					i =
						(t.inclusive ? o.maximum : o.exclusiveMaximum) ??
						Number.POSITIVE_INFINITY;
				t.value < i &&
					(t.inclusive
						? (o.maximum = t.value)
						: (o.exclusiveMaximum = t.value));
			}),
				(e._zod.check = (r) => {
					(t.inclusive ? r.value <= t.value : r.value < t.value) ||
						r.issues.push({
							origin: n,
							code: "too_big",
							maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
							input: r.value,
							inclusive: t.inclusive,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		Cs = w("$ZodCheckGreaterThan", (e, t) => {
			ue.init(e, t);
			const n = Ss[typeof t.value];
			e._zod.onattach.push((r) => {
				const o = r._zod.bag,
					i =
						(t.inclusive ? o.minimum : o.exclusiveMinimum) ??
						Number.NEGATIVE_INFINITY;
				t.value > i &&
					(t.inclusive
						? (o.minimum = t.value)
						: (o.exclusiveMinimum = t.value));
			}),
				(e._zod.check = (r) => {
					(t.inclusive ? r.value >= t.value : r.value > t.value) ||
						r.issues.push({
							origin: n,
							code: "too_small",
							minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
							input: r.value,
							inclusive: t.inclusive,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		Md = w("$ZodCheckMultipleOf", (e, t) => {
			ue.init(e, t),
				e._zod.onattach.push((n) => {
					var r;
					(r = n._zod.bag).multipleOf ?? (r.multipleOf = t.value);
				}),
				(e._zod.check = (n) => {
					if (typeof n.value != typeof t.value)
						throw new Error(
							"Cannot mix number and bigint in multiple_of check.",
						);
					(typeof n.value == "bigint"
						? n.value % t.value === BigInt(0)
						: Pu(n.value, t.value) === 0) ||
						n.issues.push({
							origin: typeof n.value,
							code: "not_multiple_of",
							divisor: t.value,
							input: n.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		Pd = w("$ZodCheckNumberFormat", (e, t) => {
			var s;
			ue.init(e, t), (t.format = t.format || "float64");
			const n = (s = t.format) == null ? void 0 : s.includes("int"),
				r = n ? "int" : "number",
				[o, i] = ju[t.format];
			e._zod.onattach.push((a) => {
				const c = a._zod.bag;
				(c.format = t.format),
					(c.minimum = o),
					(c.maximum = i),
					n && (c.pattern = Td);
			}),
				(e._zod.check = (a) => {
					const c = a.value;
					if (n) {
						if (!Number.isInteger(c)) {
							a.issues.push({
								expected: r,
								format: t.format,
								code: "invalid_type",
								continue: !1,
								input: c,
								inst: e,
							});
							return;
						}
						if (!Number.isSafeInteger(c)) {
							c > 0
								? a.issues.push({
										input: c,
										code: "too_big",
										maximum: Number.MAX_SAFE_INTEGER,
										note: "Integers must be within the safe integer range.",
										inst: e,
										origin: r,
										inclusive: !0,
										continue: !t.abort,
									})
								: a.issues.push({
										input: c,
										code: "too_small",
										minimum: Number.MIN_SAFE_INTEGER,
										note: "Integers must be within the safe integer range.",
										inst: e,
										origin: r,
										inclusive: !0,
										continue: !t.abort,
									});
							return;
						}
					}
					c < o &&
						a.issues.push({
							origin: "number",
							input: c,
							code: "too_small",
							minimum: o,
							inclusive: !0,
							inst: e,
							continue: !t.abort,
						}),
						c > i &&
							a.issues.push({
								origin: "number",
								input: c,
								code: "too_big",
								maximum: i,
								inclusive: !0,
								inst: e,
								continue: !t.abort,
							});
				});
		}),
		Ad = w("$ZodCheckMaxLength", (e, t) => {
			var n;
			ue.init(e, t),
				(n = e._zod.def).when ??
					(n.when = (r) => {
						const o = r.value;
						return !to(o) && o.length !== void 0;
					}),
				e._zod.onattach.push((r) => {
					const o = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
					t.maximum < o && (r._zod.bag.maximum = t.maximum);
				}),
				(e._zod.check = (r) => {
					const o = r.value;
					if (o.length <= t.maximum) return;
					const s = ro(o);
					r.issues.push({
						origin: s,
						code: "too_big",
						maximum: t.maximum,
						inclusive: !0,
						input: o,
						inst: e,
						continue: !t.abort,
					});
				});
		}),
		Ld = w("$ZodCheckMinLength", (e, t) => {
			var n;
			ue.init(e, t),
				(n = e._zod.def).when ??
					(n.when = (r) => {
						const o = r.value;
						return !to(o) && o.length !== void 0;
					}),
				e._zod.onattach.push((r) => {
					const o = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
					t.minimum > o && (r._zod.bag.minimum = t.minimum);
				}),
				(e._zod.check = (r) => {
					const o = r.value;
					if (o.length >= t.minimum) return;
					const s = ro(o);
					r.issues.push({
						origin: s,
						code: "too_small",
						minimum: t.minimum,
						inclusive: !0,
						input: o,
						inst: e,
						continue: !t.abort,
					});
				});
		}),
		Od = w("$ZodCheckLengthEquals", (e, t) => {
			var n;
			ue.init(e, t),
				(n = e._zod.def).when ??
					(n.when = (r) => {
						const o = r.value;
						return !to(o) && o.length !== void 0;
					}),
				e._zod.onattach.push((r) => {
					const o = r._zod.bag;
					(o.minimum = t.length), (o.maximum = t.length), (o.length = t.length);
				}),
				(e._zod.check = (r) => {
					const o = r.value,
						i = o.length;
					if (i === t.length) return;
					const s = ro(o),
						a = i > t.length;
					r.issues.push({
						origin: s,
						...(a
							? { code: "too_big", maximum: t.length }
							: { code: "too_small", minimum: t.length }),
						inclusive: !0,
						exact: !0,
						input: r.value,
						inst: e,
						continue: !t.abort,
					});
				});
		}),
		Wn = w("$ZodCheckStringFormat", (e, t) => {
			var n, r;
			ue.init(e, t),
				e._zod.onattach.push((o) => {
					const i = o._zod.bag;
					(i.format = t.format),
						t.pattern &&
							(i.patterns ?? (i.patterns = new Set()),
							i.patterns.add(t.pattern));
				}),
				t.pattern
					? ((n = e._zod).check ??
						(n.check = (o) => {
							(t.pattern.lastIndex = 0),
								!t.pattern.test(o.value) &&
									o.issues.push({
										origin: "string",
										code: "invalid_format",
										format: t.format,
										input: o.value,
										...(t.pattern ? { pattern: t.pattern.toString() } : {}),
										inst: e,
										continue: !t.abort,
									});
						}))
					: ((r = e._zod).check ?? (r.check = () => {}));
		}),
		Nd = w("$ZodCheckRegex", (e, t) => {
			Wn.init(e, t),
				(e._zod.check = (n) => {
					(t.pattern.lastIndex = 0),
						!t.pattern.test(n.value) &&
							n.issues.push({
								origin: "string",
								code: "invalid_format",
								format: "regex",
								input: n.value,
								pattern: t.pattern.toString(),
								inst: e,
								continue: !t.abort,
							});
				});
		}),
		jd = w("$ZodCheckLowerCase", (e, t) => {
			t.pattern ?? (t.pattern = Ed), Wn.init(e, t);
		}),
		Bd = w("$ZodCheckUpperCase", (e, t) => {
			t.pattern ?? (t.pattern = Rd), Wn.init(e, t);
		}),
		Dd = w("$ZodCheckIncludes", (e, t) => {
			ue.init(e, t);
			const n = Ct(t.includes),
				r = new RegExp(
					typeof t.position == "number" ? `^.{${t.position}}${n}` : n,
				);
			(t.pattern = r),
				e._zod.onattach.push((o) => {
					const i = o._zod.bag;
					i.patterns ?? (i.patterns = new Set()), i.patterns.add(r);
				}),
				(e._zod.check = (o) => {
					o.value.includes(t.includes, t.position) ||
						o.issues.push({
							origin: "string",
							code: "invalid_format",
							format: "includes",
							includes: t.includes,
							input: o.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		Fd = w("$ZodCheckStartsWith", (e, t) => {
			ue.init(e, t);
			const n = new RegExp(`^${Ct(t.prefix)}.*`);
			t.pattern ?? (t.pattern = n),
				e._zod.onattach.push((r) => {
					const o = r._zod.bag;
					o.patterns ?? (o.patterns = new Set()), o.patterns.add(n);
				}),
				(e._zod.check = (r) => {
					r.value.startsWith(t.prefix) ||
						r.issues.push({
							origin: "string",
							code: "invalid_format",
							format: "starts_with",
							prefix: t.prefix,
							input: r.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		Zd = w("$ZodCheckEndsWith", (e, t) => {
			ue.init(e, t);
			const n = new RegExp(`.*${Ct(t.suffix)}$`);
			t.pattern ?? (t.pattern = n),
				e._zod.onattach.push((r) => {
					const o = r._zod.bag;
					o.patterns ?? (o.patterns = new Set()), o.patterns.add(n);
				}),
				(e._zod.check = (r) => {
					r.value.endsWith(t.suffix) ||
						r.issues.push({
							origin: "string",
							code: "invalid_format",
							format: "ends_with",
							suffix: t.suffix,
							input: r.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		Hd = w("$ZodCheckOverwrite", (e, t) => {
			ue.init(e, t),
				(e._zod.check = (n) => {
					n.value = t.tx(n.value);
				});
		});
	class Ud {
		constructor(t = []) {
			(this.content = []), (this.indent = 0), this && (this.args = t);
		}
		indented(t) {
			(this.indent += 1), t(this), (this.indent -= 1);
		}
		write(t) {
			if (typeof t == "function") {
				t(this, { execution: "sync" }), t(this, { execution: "async" });
				return;
			}
			const r = t
					.split(`
`)
					.filter((s) => s),
				o = Math.min(...r.map((s) => s.length - s.trimStart().length)),
				i = r
					.map((s) => s.slice(o))
					.map((s) => " ".repeat(this.indent * 2) + s);
			for (const s of i) this.content.push(s);
		}
		compile() {
			const t = Function,
				n = this == null ? void 0 : this.args,
				o = [
					...((this == null ? void 0 : this.content) ?? [""]).map(
						(i) => `  ${i}`,
					),
				];
			return new t(
				...n,
				o.join(`
`),
			);
		}
	}
	const Vd = { major: 4, minor: 4, patch: 3 },
		H = w("$ZodType", (e, t) => {
			var o;
			var n;
			e ?? (e = {}),
				(e._zod.def = t),
				(e._zod.bag = e._zod.bag || {}),
				(e._zod.version = Vd);
			const r = [...(e._zod.def.checks ?? [])];
			e._zod.traits.has("$ZodCheck") && r.unshift(e);
			for (const i of r) for (const s of i._zod.onattach) s(e);
			if (r.length === 0)
				(n = e._zod).deferred ?? (n.deferred = []),
					(o = e._zod.deferred) == null ||
						o.push(() => {
							e._zod.run = e._zod.parse;
						});
			else {
				const i = (a, c, l) => {
						let d = zt(a),
							u;
						for (const p of c) {
							if (p._zod.def.when) {
								if (Wu(a) || !p._zod.def.when(a)) continue;
							} else if (d) continue;
							const f = a.issues.length,
								g = p._zod.check(a);
							if (g instanceof Promise && (l == null ? void 0 : l.async) === !1)
								throw new St();
							if (u || g instanceof Promise)
								u = (u ?? Promise.resolve()).then(async () => {
									await g, a.issues.length !== f && (d || (d = zt(a, f)));
								});
							else {
								if (a.issues.length === f) continue;
								d || (d = zt(a, f));
							}
						}
						return u ? u.then(() => a) : a;
					},
					s = (a, c, l) => {
						if (zt(a)) return (a.aborted = !0), a;
						const d = i(c, r, l);
						if (d instanceof Promise) {
							if (l.async === !1) throw new St();
							return d.then((u) => e._zod.parse(u, l));
						}
						return e._zod.parse(d, l);
					};
				e._zod.run = (a, c) => {
					if (c.skipChecks) return e._zod.parse(a, c);
					if (c.direction === "backward") {
						const d = e._zod.parse(
							{ value: a.value, issues: [] },
							{ ...c, skipChecks: !0 },
						);
						return d instanceof Promise
							? d.then((u) => s(u, a, c))
							: s(d, a, c);
					}
					const l = e._zod.parse(a, c);
					if (l instanceof Promise) {
						if (c.async === !1) throw new St();
						return l.then((d) => i(d, r, c));
					}
					return i(l, r, c);
				};
			}
			j(e, "~standard", () => ({
				validate: (i) => {
					var s;
					try {
						const a = Ku(e, i);
						return a.success
							? { value: a.data }
							: { issues: (s = a.error) == null ? void 0 : s.issues };
					} catch {
						return Gu(e, i).then((c) => {
							var l;
							return c.success
								? { value: c.data }
								: { issues: (l = c.error) == null ? void 0 : l.issues };
						});
					}
				},
				vendor: "zod",
				version: 1,
			}));
		}),
		qn = w("$ZodString", (e, t) => {
			var n;
			H.init(e, t),
				(e._zod.pattern =
					[
						...(((n = e == null ? void 0 : e._zod.bag) == null
							? void 0
							: n.patterns) ?? []),
					].pop() ?? zd(e._zod.bag)),
				(e._zod.parse = (r, o) => {
					if (t.coerce)
						try {
							r.value = String(r.value);
						} catch {}
					return (
						typeof r.value == "string" ||
							r.issues.push({
								expected: "string",
								code: "invalid_type",
								input: r.value,
								inst: e,
							}),
						r
					);
				});
		}),
		J = w("$ZodStringFormat", (e, t) => {
			Wn.init(e, t), qn.init(e, t);
		}),
		Wd = w("$ZodGUID", (e, t) => {
			t.pattern ?? (t.pattern = pd), J.init(e, t);
		}),
		qd = w("$ZodUUID", (e, t) => {
			if (t.version) {
				const r = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
					t.version
				];
				if (r === void 0)
					throw new Error(`Invalid UUID version: "${t.version}"`);
				t.pattern ?? (t.pattern = vs(r));
			} else t.pattern ?? (t.pattern = vs());
			J.init(e, t);
		}),
		Jd = w("$ZodEmail", (e, t) => {
			t.pattern ?? (t.pattern = fd), J.init(e, t);
		}),
		Kd = w("$ZodURL", (e, t) => {
			J.init(e, t),
				(e._zod.check = (n) => {
					var r;
					try {
						const o = n.value.trim();
						if (
							!t.normalize &&
							((r = t.protocol) == null ? void 0 : r.source) === _d.source &&
							!/^https?:\/\//i.test(o)
						) {
							n.issues.push({
								code: "invalid_format",
								format: "url",
								note: "Invalid URL format",
								input: n.value,
								inst: e,
								continue: !t.abort,
							});
							return;
						}
						const i = new URL(o);
						t.hostname &&
							((t.hostname.lastIndex = 0),
							t.hostname.test(i.hostname) ||
								n.issues.push({
									code: "invalid_format",
									format: "url",
									note: "Invalid hostname",
									pattern: t.hostname.source,
									input: n.value,
									inst: e,
									continue: !t.abort,
								})),
							t.protocol &&
								((t.protocol.lastIndex = 0),
								t.protocol.test(
									i.protocol.endsWith(":")
										? i.protocol.slice(0, -1)
										: i.protocol,
								) ||
									n.issues.push({
										code: "invalid_format",
										format: "url",
										note: "Invalid protocol",
										pattern: t.protocol.source,
										input: n.value,
										inst: e,
										continue: !t.abort,
									})),
							t.normalize ? (n.value = i.href) : (n.value = o);
						return;
					} catch {
						n.issues.push({
							code: "invalid_format",
							format: "url",
							input: n.value,
							inst: e,
							continue: !t.abort,
						});
					}
				});
		}),
		Gd = w("$ZodEmoji", (e, t) => {
			t.pattern ?? (t.pattern = gd()), J.init(e, t);
		}),
		Yd = w("$ZodNanoID", (e, t) => {
			t.pattern ?? (t.pattern = ud), J.init(e, t);
		}),
		Xd = w("$ZodCUID", (e, t) => {
			t.pattern ?? (t.pattern = id), J.init(e, t);
		}),
		Qd = w("$ZodCUID2", (e, t) => {
			t.pattern ?? (t.pattern = sd), J.init(e, t);
		}),
		ep = w("$ZodULID", (e, t) => {
			t.pattern ?? (t.pattern = ad), J.init(e, t);
		}),
		tp = w("$ZodXID", (e, t) => {
			t.pattern ?? (t.pattern = ld), J.init(e, t);
		}),
		np = w("$ZodKSUID", (e, t) => {
			t.pattern ?? (t.pattern = cd), J.init(e, t);
		}),
		rp = w("$ZodISODateTime", (e, t) => {
			t.pattern ?? (t.pattern = Cd(t)), J.init(e, t);
		}),
		op = w("$ZodISODate", (e, t) => {
			t.pattern ?? (t.pattern = Sd), J.init(e, t);
		}),
		ip = w("$ZodISOTime", (e, t) => {
			t.pattern ?? (t.pattern = xd(t)), J.init(e, t);
		}),
		sp = w("$ZodISODuration", (e, t) => {
			t.pattern ?? (t.pattern = dd), J.init(e, t);
		}),
		ap = w("$ZodIPv4", (e, t) => {
			t.pattern ?? (t.pattern = md), J.init(e, t), (e._zod.bag.format = "ipv4");
		}),
		lp = w("$ZodIPv6", (e, t) => {
			t.pattern ?? (t.pattern = yd),
				J.init(e, t),
				(e._zod.bag.format = "ipv6"),
				(e._zod.check = (n) => {
					try {
						new URL(`http://[${n.value}]`);
					} catch {
						n.issues.push({
							code: "invalid_format",
							format: "ipv6",
							input: n.value,
							inst: e,
							continue: !t.abort,
						});
					}
				});
		}),
		cp = w("$ZodCIDRv4", (e, t) => {
			t.pattern ?? (t.pattern = vd), J.init(e, t);
		}),
		up = w("$ZodCIDRv6", (e, t) => {
			t.pattern ?? (t.pattern = bd),
				J.init(e, t),
				(e._zod.check = (n) => {
					const r = n.value.split("/");
					try {
						if (r.length !== 2) throw new Error();
						const [o, i] = r;
						if (!i) throw new Error();
						const s = Number(i);
						if (`${s}` !== i) throw new Error();
						if (s < 0 || s > 128) throw new Error();
						new URL(`http://[${o}]`);
					} catch {
						n.issues.push({
							code: "invalid_format",
							format: "cidrv6",
							input: n.value,
							inst: e,
							continue: !t.abort,
						});
					}
				});
		});
	function zs(e) {
		if (e === "") return !0;
		if (/\s/.test(e) || e.length % 4 !== 0) return !1;
		try {
			return atob(e), !0;
		} catch {
			return !1;
		}
	}
	const dp = w("$ZodBase64", (e, t) => {
		t.pattern ?? (t.pattern = wd),
			J.init(e, t),
			(e._zod.bag.contentEncoding = "base64"),
			(e._zod.check = (n) => {
				zs(n.value) ||
					n.issues.push({
						code: "invalid_format",
						format: "base64",
						input: n.value,
						inst: e,
						continue: !t.abort,
					});
			});
	});
	function pp(e) {
		if (!bs.test(e)) return !1;
		const t = e.replace(/[-_]/g, (r) => (r === "-" ? "+" : "/")),
			n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
		return zs(n);
	}
	const fp = w("$ZodBase64URL", (e, t) => {
			t.pattern ?? (t.pattern = bs),
				J.init(e, t),
				(e._zod.bag.contentEncoding = "base64url"),
				(e._zod.check = (n) => {
					pp(n.value) ||
						n.issues.push({
							code: "invalid_format",
							format: "base64url",
							input: n.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		hp = w("$ZodE164", (e, t) => {
			t.pattern ?? (t.pattern = kd), J.init(e, t);
		});
	function gp(e, t = null) {
		try {
			const n = e.split(".");
			if (n.length !== 3) return !1;
			const [r] = n;
			if (!r) return !1;
			const o = JSON.parse(atob(r));
			return !(
				("typ" in o && (o == null ? void 0 : o.typ) !== "JWT") ||
				!o.alg ||
				(t && (!("alg" in o) || o.alg !== t))
			);
		} catch {
			return !1;
		}
	}
	const mp = w("$ZodJWT", (e, t) => {
			J.init(e, t),
				(e._zod.check = (n) => {
					gp(n.value, t.alg) ||
						n.issues.push({
							code: "invalid_format",
							format: "jwt",
							input: n.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		Ts = w("$ZodNumber", (e, t) => {
			H.init(e, t),
				(e._zod.pattern = e._zod.bag.pattern ?? ks),
				(e._zod.parse = (n, r) => {
					if (t.coerce)
						try {
							n.value = Number(n.value);
						} catch {}
					const o = n.value;
					if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
						return n;
					const i =
						typeof o == "number"
							? Number.isNaN(o)
								? "NaN"
								: Number.isFinite(o)
									? void 0
									: "Infinity"
							: void 0;
					return (
						n.issues.push({
							expected: "number",
							code: "invalid_type",
							input: o,
							inst: e,
							...(i ? { received: i } : {}),
						}),
						n
					);
				});
		}),
		yp = w("$ZodNumberFormat", (e, t) => {
			Pd.init(e, t), Ts.init(e, t);
		}),
		Is = w("$ZodBoolean", (e, t) => {
			H.init(e, t),
				(e._zod.pattern = Id),
				(e._zod.parse = (n, r) => {
					if (t.coerce)
						try {
							n.value = !!n.value;
						} catch {}
					const o = n.value;
					return (
						typeof o == "boolean" ||
							n.issues.push({
								expected: "boolean",
								code: "invalid_type",
								input: o,
								inst: e,
							}),
						n
					);
				});
		}),
		vp = w("$ZodNull", (e, t) => {
			H.init(e, t),
				(e._zod.pattern = $d),
				(e._zod.values = new Set([null])),
				(e._zod.parse = (n, r) => {
					const o = n.value;
					return (
						o === null ||
							n.issues.push({
								expected: "null",
								code: "invalid_type",
								input: o,
								inst: e,
							}),
						n
					);
				});
		}),
		bp = w("$ZodAny", (e, t) => {
			H.init(e, t), (e._zod.parse = (n) => n);
		}),
		wp = w("$ZodUnknown", (e, t) => {
			H.init(e, t), (e._zod.parse = (n) => n);
		}),
		_p = w("$ZodNever", (e, t) => {
			H.init(e, t),
				(e._zod.parse = (n, r) => (
					n.issues.push({
						expected: "never",
						code: "invalid_type",
						input: n.value,
						inst: e,
					}),
					n
				));
		}),
		kp = w("$ZodDate", (e, t) => {
			H.init(e, t),
				(e._zod.parse = (n, r) => {
					if (t.coerce)
						try {
							n.value = new Date(n.value);
						} catch {}
					const o = n.value,
						i = o instanceof Date;
					return (
						(i && !Number.isNaN(o.getTime())) ||
							n.issues.push({
								expected: "date",
								code: "invalid_type",
								input: o,
								...(i ? { received: "Invalid Date" } : {}),
								inst: e,
							}),
						n
					);
				});
		});
	function $s(e, t, n) {
		e.issues.length && t.issues.push(...Ke(n, e.issues)),
			(t.value[n] = e.value);
	}
	const Sp = w("$ZodArray", (e, t) => {
		H.init(e, t),
			(e._zod.parse = (n, r) => {
				const o = n.value;
				if (!Array.isArray(o))
					return (
						n.issues.push({
							expected: "array",
							code: "invalid_type",
							input: o,
							inst: e,
						}),
						n
					);
				n.value = Array(o.length);
				const i = [];
				for (let s = 0; s < o.length; s++) {
					const a = o[s],
						c = t.element._zod.run({ value: a, issues: [] }, r);
					c instanceof Promise
						? i.push(c.then((l) => $s(l, n, s)))
						: $s(c, n, s);
				}
				return i.length ? Promise.all(i).then(() => n) : n;
			});
	});
	function Jn(e, t, n, r, o, i) {
		const s = n in r;
		if (e.issues.length) {
			if (o && i && !s) return;
			t.issues.push(...Ke(n, e.issues));
		}
		if (!s && !o) {
			e.issues.length ||
				t.issues.push({
					code: "invalid_type",
					expected: "nonoptional",
					input: void 0,
					path: [n],
				});
			return;
		}
		e.value === void 0 ? s && (t.value[n] = void 0) : (t.value[n] = e.value);
	}
	function Es(e) {
		var r, o, i, s;
		const t = Object.keys(e.shape);
		for (const a of t)
			if (
				!(
					(s =
						(i =
							(o = (r = e.shape) == null ? void 0 : r[a]) == null
								? void 0
								: o._zod) == null
							? void 0
							: i.traits) != null && s.has("$ZodType")
				)
			)
				throw new Error(`Invalid element at key "${a}": expected a Zod schema`);
		const n = Nu(e.shape);
		return {
			...e,
			keys: t,
			keySet: new Set(t),
			numKeys: t.length,
			optionalKeys: new Set(n),
		};
	}
	function Rs(e, t, n, r, o, i) {
		const s = [],
			a = o.keySet,
			c = o.catchall._zod,
			l = c.def.type,
			d = c.optin === "optional",
			u = c.optout === "optional";
		for (const p in t) {
			if (p === "__proto__" || a.has(p)) continue;
			if (l === "never") {
				s.push(p);
				continue;
			}
			const f = c.run({ value: t[p], issues: [] }, r);
			f instanceof Promise
				? e.push(f.then((g) => Jn(g, n, p, t, d, u)))
				: Jn(f, n, p, t, d, u);
		}
		return (
			s.length &&
				n.issues.push({
					code: "unrecognized_keys",
					keys: s,
					input: t,
					inst: i,
				}),
			e.length ? Promise.all(e).then(() => n) : n
		);
	}
	const xp = w("$ZodObject", (e, t) => {
			H.init(e, t);
			const n = Object.getOwnPropertyDescriptor(t, "shape");
			if (!(n != null && n.get)) {
				const a = t.shape;
				Object.defineProperty(t, "shape", {
					get: () => {
						const c = { ...a };
						return Object.defineProperty(t, "shape", { value: c }), c;
					},
				});
			}
			const r = Zn(() => Es(t));
			j(e._zod, "propValues", () => {
				const a = t.shape,
					c = {};
				for (const l in a) {
					const d = a[l]._zod;
					if (d.values) {
						c[l] ?? (c[l] = new Set());
						for (const u of d.values) c[l].add(u);
					}
				}
				return c;
			});
			const o = on,
				i = t.catchall;
			let s;
			e._zod.parse = (a, c) => {
				s ?? (s = r.value);
				const l = a.value;
				if (!o(l))
					return (
						a.issues.push({
							expected: "object",
							code: "invalid_type",
							input: l,
							inst: e,
						}),
						a
					);
				a.value = {};
				const d = [],
					u = s.shape;
				for (const p of s.keys) {
					const f = u[p],
						g = f._zod.optin === "optional",
						y = f._zod.optout === "optional",
						b = f._zod.run({ value: l[p], issues: [] }, c);
					b instanceof Promise
						? d.push(b.then((v) => Jn(v, a, p, l, g, y)))
						: Jn(b, a, p, l, g, y);
				}
				return i
					? Rs(d, l, a, c, r.value, e)
					: d.length
						? Promise.all(d).then(() => a)
						: a;
			};
		}),
		Cp = w("$ZodObjectJIT", (e, t) => {
			xp.init(e, t);
			const n = e._zod.parse,
				r = Zn(() => Es(t)),
				o = (p) => {
					var S, x;
					const f = new Ud(["shape", "payload", "ctx"]),
						g = r.value,
						y = (C) => {
							const I = ps(C);
							return `shape[${I}]._zod.run({ value: input[${I}], issues: [] }, ctx)`;
						};
					f.write("const input = payload.value;");
					const b = Object.create(null);
					let v = 0;
					for (const C of g.keys) b[C] = `key_${v++}`;
					f.write("const newResult = {};");
					for (const C of g.keys) {
						const I = b[C],
							P = ps(C),
							N = p[C],
							W =
								((S = N == null ? void 0 : N._zod) == null
									? void 0
									: S.optin) === "optional",
							O =
								((x = N == null ? void 0 : N._zod) == null
									? void 0
									: x.optout) === "optional";
						f.write(`const ${I} = ${y(C)};`),
							W && O
								? f.write(`
        if (${I}.issues.length) {
          if (${P} in input) {
            payload.issues = payload.issues.concat(${I}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${P}, ...iss.path] : [${P}]
            })));
          }
        }
        
        if (${I}.value === undefined) {
          if (${P} in input) {
            newResult[${P}] = undefined;
          }
        } else {
          newResult[${P}] = ${I}.value;
        }
        
      `)
								: W
									? f.write(`
        if (${I}.issues.length) {
          payload.issues = payload.issues.concat(${I}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${P}, ...iss.path] : [${P}]
          })));
        }
        
        if (${I}.value === undefined) {
          if (${P} in input) {
            newResult[${P}] = undefined;
          }
        } else {
          newResult[${P}] = ${I}.value;
        }
        
      `)
									: f.write(`
        const ${I}_present = ${P} in input;
        if (${I}.issues.length) {
          payload.issues = payload.issues.concat(${I}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${P}, ...iss.path] : [${P}]
          })));
        }
        if (!${I}_present && !${I}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${P}]
          });
        }

        if (${I}_present) {
          if (${I}.value === undefined) {
            newResult[${P}] = undefined;
          } else {
            newResult[${P}] = ${I}.value;
          }
        }

      `);
					}
					f.write("payload.value = newResult;"), f.write("return payload;");
					const _ = f.compile();
					return (C, I) => _(p, C, I);
				};
			let i;
			const s = on,
				a = !Qr.jitless,
				l = a && Lu.value,
				d = t.catchall;
			let u;
			e._zod.parse = (p, f) => {
				u ?? (u = r.value);
				const g = p.value;
				return s(g)
					? a && l && (f == null ? void 0 : f.async) === !1 && f.jitless !== !0
						? (i || (i = o(t.shape)),
							(p = i(p, f)),
							d ? Rs([], g, p, f, u, e) : p)
						: n(p, f)
					: (p.issues.push({
							expected: "object",
							code: "invalid_type",
							input: g,
							inst: e,
						}),
						p);
			};
		});
	function Ms(e, t, n, r) {
		for (const i of e) if (i.issues.length === 0) return (t.value = i.value), t;
		const o = e.filter((i) => !zt(i));
		return o.length === 1
			? ((t.value = o[0].value), o[0])
			: (t.issues.push({
					code: "invalid_union",
					input: t.value,
					inst: n,
					errors: e.map((i) => i.issues.map((s) => Oe(s, r, Le()))),
				}),
				t);
	}
	const Ps = w("$ZodUnion", (e, t) => {
			H.init(e, t),
				j(e._zod, "optin", () =>
					t.options.some((r) => r._zod.optin === "optional")
						? "optional"
						: void 0,
				),
				j(e._zod, "optout", () =>
					t.options.some((r) => r._zod.optout === "optional")
						? "optional"
						: void 0,
				),
				j(e._zod, "values", () => {
					if (t.options.every((r) => r._zod.values))
						return new Set(t.options.flatMap((r) => Array.from(r._zod.values)));
				}),
				j(e._zod, "pattern", () => {
					if (t.options.every((r) => r._zod.pattern)) {
						const r = t.options.map((o) => o._zod.pattern);
						return new RegExp(`^(${r.map((o) => no(o.source)).join("|")})$`);
					}
				});
			const n = t.options.length === 1 ? t.options[0]._zod.run : null;
			e._zod.parse = (r, o) => {
				if (n) return n(r, o);
				let i = !1;
				const s = [];
				for (const a of t.options) {
					const c = a._zod.run({ value: r.value, issues: [] }, o);
					if (c instanceof Promise) s.push(c), (i = !0);
					else {
						if (c.issues.length === 0) return c;
						s.push(c);
					}
				}
				return i ? Promise.all(s).then((a) => Ms(a, r, e, o)) : Ms(s, r, e, o);
			};
		}),
		zp = w("$ZodDiscriminatedUnion", (e, t) => {
			(t.inclusive = !1), Ps.init(e, t);
			const n = e._zod.parse;
			j(e._zod, "propValues", () => {
				const o = {};
				for (const i of t.options) {
					const s = i._zod.propValues;
					if (!s || Object.keys(s).length === 0)
						throw new Error(
							`Invalid discriminated union option at index "${t.options.indexOf(i)}"`,
						);
					for (const [a, c] of Object.entries(s)) {
						o[a] || (o[a] = new Set());
						for (const l of c) o[a].add(l);
					}
				}
				return o;
			});
			const r = Zn(() => {
				var s;
				const o = t.options,
					i = new Map();
				for (const a of o) {
					const c =
						(s = a._zod.propValues) == null ? void 0 : s[t.discriminator];
					if (!c || c.size === 0)
						throw new Error(
							`Invalid discriminated union option at index "${t.options.indexOf(a)}"`,
						);
					for (const l of c) {
						if (i.has(l))
							throw new Error(`Duplicate discriminator value "${String(l)}"`);
						i.set(l, a);
					}
				}
				return i;
			});
			e._zod.parse = (o, i) => {
				const s = o.value;
				if (!on(s))
					return (
						o.issues.push({
							code: "invalid_type",
							expected: "object",
							input: s,
							inst: e,
						}),
						o
					);
				const a = r.value.get(s == null ? void 0 : s[t.discriminator]);
				return a
					? a._zod.run(o, i)
					: t.unionFallback || i.direction === "backward"
						? n(o, i)
						: (o.issues.push({
								code: "invalid_union",
								errors: [],
								note: "No matching discriminator",
								discriminator: t.discriminator,
								options: Array.from(r.value.keys()),
								input: s,
								path: [t.discriminator],
								inst: e,
							}),
							o);
			};
		}),
		Tp = w("$ZodIntersection", (e, t) => {
			H.init(e, t),
				(e._zod.parse = (n, r) => {
					const o = n.value,
						i = t.left._zod.run({ value: o, issues: [] }, r),
						s = t.right._zod.run({ value: o, issues: [] }, r);
					return i instanceof Promise || s instanceof Promise
						? Promise.all([i, s]).then(([c, l]) => As(n, c, l))
						: As(n, i, s);
				});
		});
	function so(e, t) {
		if (e === t) return { valid: !0, data: e };
		if (e instanceof Date && t instanceof Date && +e == +t)
			return { valid: !0, data: e };
		if (xt(e) && xt(t)) {
			const n = Object.keys(t),
				r = Object.keys(e).filter((i) => n.indexOf(i) !== -1),
				o = { ...e, ...t };
			for (const i of r) {
				const s = so(e[i], t[i]);
				if (!s.valid)
					return { valid: !1, mergeErrorPath: [i, ...s.mergeErrorPath] };
				o[i] = s.data;
			}
			return { valid: !0, data: o };
		}
		if (Array.isArray(e) && Array.isArray(t)) {
			if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
			const n = [];
			for (let r = 0; r < e.length; r++) {
				const o = e[r],
					i = t[r],
					s = so(o, i);
				if (!s.valid)
					return { valid: !1, mergeErrorPath: [r, ...s.mergeErrorPath] };
				n.push(s.data);
			}
			return { valid: !0, data: n };
		}
		return { valid: !1, mergeErrorPath: [] };
	}
	function As(e, t, n) {
		const r = new Map();
		let o;
		for (const a of t.issues)
			if (a.code === "unrecognized_keys") {
				o ?? (o = a);
				for (const c of a.keys) r.has(c) || r.set(c, {}), (r.get(c).l = !0);
			} else e.issues.push(a);
		for (const a of n.issues)
			if (a.code === "unrecognized_keys")
				for (const c of a.keys) r.has(c) || r.set(c, {}), (r.get(c).r = !0);
			else e.issues.push(a);
		const i = [...r].filter(([, a]) => a.l && a.r).map(([a]) => a);
		if ((i.length && o && e.issues.push({ ...o, keys: i }), zt(e))) return e;
		const s = so(t.value, n.value);
		if (!s.valid)
			throw new Error(
				`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`,
			);
		return (e.value = s.data), e;
	}
	const Ip = w("$ZodTuple", (e, t) => {
		H.init(e, t);
		const n = t.items;
		e._zod.parse = (r, o) => {
			const i = r.value;
			if (!Array.isArray(i))
				return (
					r.issues.push({
						input: i,
						inst: e,
						expected: "tuple",
						code: "invalid_type",
					}),
					r
				);
			r.value = [];
			const s = [],
				a = Ls(n, "optin"),
				c = Ls(n, "optout");
			if (!t.rest) {
				if (i.length < a)
					return (
						r.issues.push({
							code: "too_small",
							minimum: a,
							inclusive: !0,
							input: i,
							inst: e,
							origin: "array",
						}),
						r
					);
				i.length > n.length &&
					r.issues.push({
						code: "too_big",
						maximum: n.length,
						inclusive: !0,
						input: i,
						inst: e,
						origin: "array",
					});
			}
			const l = new Array(n.length);
			for (let d = 0; d < n.length; d++) {
				const u = n[d]._zod.run({ value: i[d], issues: [] }, o);
				u instanceof Promise
					? s.push(
							u.then((p) => {
								l[d] = p;
							}),
						)
					: (l[d] = u);
			}
			if (t.rest) {
				let d = n.length - 1;
				const u = i.slice(n.length);
				for (const p of u) {
					d++;
					const f = t.rest._zod.run({ value: p, issues: [] }, o);
					f instanceof Promise
						? s.push(f.then((g) => Os(g, r, d)))
						: Os(f, r, d);
				}
			}
			return s.length
				? Promise.all(s).then(() => Ns(l, r, n, i, c))
				: Ns(l, r, n, i, c);
		};
	});
	function Ls(e, t) {
		for (let n = e.length - 1; n >= 0; n--)
			if (e[n]._zod[t] !== "optional") return n + 1;
		return 0;
	}
	function Os(e, t, n) {
		e.issues.length && t.issues.push(...Ke(n, e.issues)),
			(t.value[n] = e.value);
	}
	function Ns(e, t, n, r, o) {
		for (let i = 0; i < n.length; i++) {
			const s = e[i],
				a = i < r.length;
			if (s.issues.length) {
				if (!a && i >= o) {
					t.value.length = i;
					break;
				}
				t.issues.push(...Ke(i, s.issues));
			}
			t.value[i] = s.value;
		}
		for (
			let i = t.value.length - 1;
			i >= r.length && n[i]._zod.optout === "optional" && t.value[i] === void 0;
			i--
		)
			t.value.length = i;
		return t;
	}
	const $p = w("$ZodRecord", (e, t) => {
			H.init(e, t),
				(e._zod.parse = (n, r) => {
					const o = n.value;
					if (!xt(o))
						return (
							n.issues.push({
								expected: "record",
								code: "invalid_type",
								input: o,
								inst: e,
							}),
							n
						);
					const i = [],
						s = t.keyType._zod.values;
					if (s) {
						n.value = {};
						const a = new Set();
						for (const l of s)
							if (
								typeof l == "string" ||
								typeof l == "number" ||
								typeof l == "symbol"
							) {
								a.add(typeof l == "number" ? l.toString() : l);
								const d = t.keyType._zod.run({ value: l, issues: [] }, r);
								if (d instanceof Promise)
									throw new Error(
										"Async schemas not supported in object keys currently",
									);
								if (d.issues.length) {
									n.issues.push({
										code: "invalid_key",
										origin: "record",
										issues: d.issues.map((f) => Oe(f, r, Le())),
										input: l,
										path: [l],
										inst: e,
									});
									continue;
								}
								const u = d.value,
									p = t.valueType._zod.run({ value: o[l], issues: [] }, r);
								p instanceof Promise
									? i.push(
											p.then((f) => {
												f.issues.length && n.issues.push(...Ke(l, f.issues)),
													(n.value[u] = f.value);
											}),
										)
									: (p.issues.length && n.issues.push(...Ke(l, p.issues)),
										(n.value[u] = p.value));
							}
						let c;
						for (const l in o) a.has(l) || ((c = c ?? []), c.push(l));
						c &&
							c.length > 0 &&
							n.issues.push({
								code: "unrecognized_keys",
								input: o,
								inst: e,
								keys: c,
							});
					} else {
						n.value = {};
						for (const a of Reflect.ownKeys(o)) {
							if (
								a === "__proto__" ||
								!Object.prototype.propertyIsEnumerable.call(o, a)
							)
								continue;
							let c = t.keyType._zod.run({ value: a, issues: [] }, r);
							if (c instanceof Promise)
								throw new Error(
									"Async schemas not supported in object keys currently",
								);
							if (typeof a == "string" && ks.test(a) && c.issues.length) {
								const u = t.keyType._zod.run(
									{ value: Number(a), issues: [] },
									r,
								);
								if (u instanceof Promise)
									throw new Error(
										"Async schemas not supported in object keys currently",
									);
								u.issues.length === 0 && (c = u);
							}
							if (c.issues.length) {
								t.mode === "loose"
									? (n.value[a] = o[a])
									: n.issues.push({
											code: "invalid_key",
											origin: "record",
											issues: c.issues.map((u) => Oe(u, r, Le())),
											input: a,
											path: [a],
											inst: e,
										});
								continue;
							}
							const d = t.valueType._zod.run({ value: o[a], issues: [] }, r);
							d instanceof Promise
								? i.push(
										d.then((u) => {
											u.issues.length && n.issues.push(...Ke(a, u.issues)),
												(n.value[c.value] = u.value);
										}),
									)
								: (d.issues.length && n.issues.push(...Ke(a, d.issues)),
									(n.value[c.value] = d.value));
						}
					}
					return i.length ? Promise.all(i).then(() => n) : n;
				});
		}),
		Ep = w("$ZodEnum", (e, t) => {
			H.init(e, t);
			const n = us(t.entries),
				r = new Set(n);
			(e._zod.values = r),
				(e._zod.pattern = new RegExp(
					`^(${n
						.filter((o) => Ou.has(typeof o))
						.map((o) => (typeof o == "string" ? Ct(o) : o.toString()))
						.join("|")})$`,
				)),
				(e._zod.parse = (o, i) => {
					const s = o.value;
					return (
						r.has(s) ||
							o.issues.push({
								code: "invalid_value",
								values: n,
								input: s,
								inst: e,
							}),
						o
					);
				});
		}),
		Rp = w("$ZodLiteral", (e, t) => {
			if ((H.init(e, t), t.values.length === 0))
				throw new Error("Cannot create literal schema with no valid values");
			const n = new Set(t.values);
			(e._zod.values = n),
				(e._zod.pattern = new RegExp(
					`^(${t.values.map((r) => (typeof r == "string" ? Ct(r) : r ? Ct(r.toString()) : String(r))).join("|")})$`,
				)),
				(e._zod.parse = (r, o) => {
					const i = r.value;
					return (
						n.has(i) ||
							r.issues.push({
								code: "invalid_value",
								values: t.values,
								input: i,
								inst: e,
							}),
						r
					);
				});
		}),
		Mp = w("$ZodTransform", (e, t) => {
			H.init(e, t),
				(e._zod.optin = "optional"),
				(e._zod.parse = (n, r) => {
					if (r.direction === "backward") throw new cs(e.constructor.name);
					const o = t.transform(n.value, n);
					if (r.async)
						return (o instanceof Promise ? o : Promise.resolve(o)).then(
							(s) => ((n.value = s), (n.fallback = !0), n),
						);
					if (o instanceof Promise) throw new St();
					return (n.value = o), (n.fallback = !0), n;
				});
		});
	function js(e, t) {
		return t === void 0 && (e.issues.length || e.fallback)
			? { issues: [], value: void 0 }
			: e;
	}
	const Bs = w("$ZodOptional", (e, t) => {
			H.init(e, t),
				(e._zod.optin = "optional"),
				(e._zod.optout = "optional"),
				j(e._zod, "values", () =>
					t.innerType._zod.values
						? new Set([...t.innerType._zod.values, void 0])
						: void 0,
				),
				j(e._zod, "pattern", () => {
					const n = t.innerType._zod.pattern;
					return n ? new RegExp(`^(${no(n.source)})?$`) : void 0;
				}),
				(e._zod.parse = (n, r) => {
					if (t.innerType._zod.optin === "optional") {
						const o = n.value,
							i = t.innerType._zod.run(n, r);
						return i instanceof Promise ? i.then((s) => js(s, o)) : js(i, o);
					}
					return n.value === void 0 ? n : t.innerType._zod.run(n, r);
				});
		}),
		Pp = w("$ZodExactOptional", (e, t) => {
			Bs.init(e, t),
				j(e._zod, "values", () => t.innerType._zod.values),
				j(e._zod, "pattern", () => t.innerType._zod.pattern),
				(e._zod.parse = (n, r) => t.innerType._zod.run(n, r));
		}),
		Ap = w("$ZodNullable", (e, t) => {
			H.init(e, t),
				j(e._zod, "optin", () => t.innerType._zod.optin),
				j(e._zod, "optout", () => t.innerType._zod.optout),
				j(e._zod, "pattern", () => {
					const n = t.innerType._zod.pattern;
					return n ? new RegExp(`^(${no(n.source)}|null)$`) : void 0;
				}),
				j(e._zod, "values", () =>
					t.innerType._zod.values
						? new Set([...t.innerType._zod.values, null])
						: void 0,
				),
				(e._zod.parse = (n, r) =>
					n.value === null ? n : t.innerType._zod.run(n, r));
		}),
		Lp = w("$ZodDefault", (e, t) => {
			H.init(e, t),
				(e._zod.optin = "optional"),
				j(e._zod, "values", () => t.innerType._zod.values),
				(e._zod.parse = (n, r) => {
					if (r.direction === "backward") return t.innerType._zod.run(n, r);
					if (n.value === void 0) return (n.value = t.defaultValue), n;
					const o = t.innerType._zod.run(n, r);
					return o instanceof Promise ? o.then((i) => Ds(i, t)) : Ds(o, t);
				});
		});
	function Ds(e, t) {
		return e.value === void 0 && (e.value = t.defaultValue), e;
	}
	const Op = w("$ZodPrefault", (e, t) => {
			H.init(e, t),
				(e._zod.optin = "optional"),
				j(e._zod, "values", () => t.innerType._zod.values),
				(e._zod.parse = (n, r) => (
					r.direction === "backward" ||
						(n.value === void 0 && (n.value = t.defaultValue)),
					t.innerType._zod.run(n, r)
				));
		}),
		Np = w("$ZodNonOptional", (e, t) => {
			H.init(e, t),
				j(e._zod, "values", () => {
					const n = t.innerType._zod.values;
					return n ? new Set([...n].filter((r) => r !== void 0)) : void 0;
				}),
				(e._zod.parse = (n, r) => {
					const o = t.innerType._zod.run(n, r);
					return o instanceof Promise ? o.then((i) => Fs(i, e)) : Fs(o, e);
				});
		});
	function Fs(e, t) {
		return (
			!e.issues.length &&
				e.value === void 0 &&
				e.issues.push({
					code: "invalid_type",
					expected: "nonoptional",
					input: e.value,
					inst: t,
				}),
			e
		);
	}
	const jp = w("$ZodCatch", (e, t) => {
			H.init(e, t),
				(e._zod.optin = "optional"),
				j(e._zod, "optout", () => t.innerType._zod.optout),
				j(e._zod, "values", () => t.innerType._zod.values),
				(e._zod.parse = (n, r) => {
					if (r.direction === "backward") return t.innerType._zod.run(n, r);
					const o = t.innerType._zod.run(n, r);
					return o instanceof Promise
						? o.then(
								(i) => (
									(n.value = i.value),
									i.issues.length &&
										((n.value = t.catchValue({
											...n,
											error: { issues: i.issues.map((s) => Oe(s, r, Le())) },
											input: n.value,
										})),
										(n.issues = []),
										(n.fallback = !0)),
									n
								),
							)
						: ((n.value = o.value),
							o.issues.length &&
								((n.value = t.catchValue({
									...n,
									error: { issues: o.issues.map((i) => Oe(i, r, Le())) },
									input: n.value,
								})),
								(n.issues = []),
								(n.fallback = !0)),
							n);
				});
		}),
		Zs = w("$ZodPipe", (e, t) => {
			H.init(e, t),
				j(e._zod, "values", () => t.in._zod.values),
				j(e._zod, "optin", () => t.in._zod.optin),
				j(e._zod, "optout", () => t.out._zod.optout),
				j(e._zod, "propValues", () => t.in._zod.propValues),
				(e._zod.parse = (n, r) => {
					if (r.direction === "backward") {
						const i = t.out._zod.run(n, r);
						return i instanceof Promise
							? i.then((s) => Kn(s, t.in, r))
							: Kn(i, t.in, r);
					}
					const o = t.in._zod.run(n, r);
					return o instanceof Promise
						? o.then((i) => Kn(i, t.out, r))
						: Kn(o, t.out, r);
				});
		});
	function Kn(e, t, n) {
		return e.issues.length
			? ((e.aborted = !0), e)
			: t._zod.run(
					{ value: e.value, issues: e.issues, fallback: e.fallback },
					n,
				);
	}
	const Hs = w("$ZodCodec", (e, t) => {
		H.init(e, t),
			j(e._zod, "values", () => t.in._zod.values),
			j(e._zod, "optin", () => t.in._zod.optin),
			j(e._zod, "optout", () => t.out._zod.optout),
			j(e._zod, "propValues", () => t.in._zod.propValues),
			(e._zod.parse = (n, r) => {
				if ((r.direction || "forward") === "forward") {
					const i = t.in._zod.run(n, r);
					return i instanceof Promise
						? i.then((s) => Gn(s, t, r))
						: Gn(i, t, r);
				} else {
					const i = t.out._zod.run(n, r);
					return i instanceof Promise
						? i.then((s) => Gn(s, t, r))
						: Gn(i, t, r);
				}
			});
	});
	function Gn(e, t, n) {
		if (e.issues.length) return (e.aborted = !0), e;
		if ((n.direction || "forward") === "forward") {
			const o = t.transform(e.value, e);
			return o instanceof Promise
				? o.then((i) => Yn(e, i, t.out, n))
				: Yn(e, o, t.out, n);
		} else {
			const o = t.reverseTransform(e.value, e);
			return o instanceof Promise
				? o.then((i) => Yn(e, i, t.in, n))
				: Yn(e, o, t.in, n);
		}
	}
	function Yn(e, t, n, r) {
		return e.issues.length
			? ((e.aborted = !0), e)
			: n._zod.run({ value: t, issues: e.issues }, r);
	}
	const Bp = w("$ZodPreprocess", (e, t) => {
			Zs.init(e, t);
		}),
		Dp = w("$ZodReadonly", (e, t) => {
			H.init(e, t),
				j(e._zod, "propValues", () => t.innerType._zod.propValues),
				j(e._zod, "values", () => t.innerType._zod.values),
				j(e._zod, "optin", () => {
					var n, r;
					return (r = (n = t.innerType) == null ? void 0 : n._zod) == null
						? void 0
						: r.optin;
				}),
				j(e._zod, "optout", () => {
					var n, r;
					return (r = (n = t.innerType) == null ? void 0 : n._zod) == null
						? void 0
						: r.optout;
				}),
				(e._zod.parse = (n, r) => {
					if (r.direction === "backward") return t.innerType._zod.run(n, r);
					const o = t.innerType._zod.run(n, r);
					return o instanceof Promise ? o.then(Us) : Us(o);
				});
		});
	function Us(e) {
		return (e.value = Object.freeze(e.value)), e;
	}
	const Fp = w("$ZodLazy", (e, t) => {
			H.init(e, t),
				j(e._zod, "innerType", () => {
					const n = t;
					return (
						n._cachedInner || (n._cachedInner = t.getter()), n._cachedInner
					);
				}),
				j(e._zod, "pattern", () => {
					var n, r;
					return (r = (n = e._zod.innerType) == null ? void 0 : n._zod) == null
						? void 0
						: r.pattern;
				}),
				j(e._zod, "propValues", () => {
					var n, r;
					return (r = (n = e._zod.innerType) == null ? void 0 : n._zod) == null
						? void 0
						: r.propValues;
				}),
				j(e._zod, "optin", () => {
					var n, r;
					return (
						((r = (n = e._zod.innerType) == null ? void 0 : n._zod) == null
							? void 0
							: r.optin) ?? void 0
					);
				}),
				j(e._zod, "optout", () => {
					var n, r;
					return (
						((r = (n = e._zod.innerType) == null ? void 0 : n._zod) == null
							? void 0
							: r.optout) ?? void 0
					);
				}),
				(e._zod.parse = (n, r) => e._zod.innerType._zod.run(n, r));
		}),
		Zp = w("$ZodCustom", (e, t) => {
			ue.init(e, t),
				H.init(e, t),
				(e._zod.parse = (n, r) => n),
				(e._zod.check = (n) => {
					const r = n.value,
						o = t.fn(r);
					if (o instanceof Promise) return o.then((i) => Vs(i, n, r, e));
					Vs(o, n, r, e);
				});
		});
	function Vs(e, t, n, r) {
		if (!e) {
			const o = {
				code: "custom",
				input: n,
				inst: r,
				path: [...(r._zod.def.path ?? [])],
				continue: !r._zod.def.abort,
			};
			r._zod.def.params && (o.params = r._zod.def.params), t.issues.push(sn(o));
		}
	}
	var Ws;
	class Hp {
		constructor() {
			(this._map = new WeakMap()), (this._idmap = new Map());
		}
		add(t, ...n) {
			const r = n[0];
			return (
				this._map.set(t, r),
				r && typeof r == "object" && "id" in r && this._idmap.set(r.id, t),
				this
			);
		}
		clear() {
			return (this._map = new WeakMap()), (this._idmap = new Map()), this;
		}
		remove(t) {
			const n = this._map.get(t);
			return (
				n && typeof n == "object" && "id" in n && this._idmap.delete(n.id),
				this._map.delete(t),
				this
			);
		}
		get(t) {
			const n = t._zod.parent;
			if (n) {
				const r = { ...(this.get(n) ?? {}) };
				delete r.id;
				const o = { ...r, ...this._map.get(t) };
				return Object.keys(o).length ? o : void 0;
			}
			return this._map.get(t);
		}
		has(t) {
			return this._map.has(t);
		}
	}
	function qs() {
		return new Hp();
	}
	(Ws = globalThis).__zod_globalRegistry ?? (Ws.__zod_globalRegistry = qs());
	const an = globalThis.__zod_globalRegistry;
	function Up(e, t) {
		return new e({ type: "string", ...T(t) });
	}
	function Js(e, t) {
		return new e({
			type: "string",
			format: "email",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Ks(e, t) {
		return new e({
			type: "string",
			format: "guid",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Gs(e, t) {
		return new e({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Vp(e, t) {
		return new e({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v4",
			...T(t),
		});
	}
	function Wp(e, t) {
		return new e({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v6",
			...T(t),
		});
	}
	function qp(e, t) {
		return new e({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v7",
			...T(t),
		});
	}
	function Jp(e, t) {
		return new e({
			type: "string",
			format: "url",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Kp(e, t) {
		return new e({
			type: "string",
			format: "emoji",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Gp(e, t) {
		return new e({
			type: "string",
			format: "nanoid",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Yp(e, t) {
		return new e({
			type: "string",
			format: "cuid",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Xp(e, t) {
		return new e({
			type: "string",
			format: "cuid2",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Qp(e, t) {
		return new e({
			type: "string",
			format: "ulid",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function ef(e, t) {
		return new e({
			type: "string",
			format: "xid",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function tf(e, t) {
		return new e({
			type: "string",
			format: "ksuid",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function nf(e, t) {
		return new e({
			type: "string",
			format: "ipv4",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function rf(e, t) {
		return new e({
			type: "string",
			format: "ipv6",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function of(e, t) {
		return new e({
			type: "string",
			format: "cidrv4",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function sf(e, t) {
		return new e({
			type: "string",
			format: "cidrv6",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function af(e, t) {
		return new e({
			type: "string",
			format: "base64",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function lf(e, t) {
		return new e({
			type: "string",
			format: "base64url",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function cf(e, t) {
		return new e({
			type: "string",
			format: "e164",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function uf(e, t) {
		return new e({
			type: "string",
			format: "jwt",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function df(e, t) {
		return new e({
			type: "string",
			format: "datetime",
			check: "string_format",
			offset: !1,
			local: !1,
			precision: null,
			...T(t),
		});
	}
	function pf(e, t) {
		return new e({
			type: "string",
			format: "date",
			check: "string_format",
			...T(t),
		});
	}
	function ff(e, t) {
		return new e({
			type: "string",
			format: "time",
			check: "string_format",
			precision: null,
			...T(t),
		});
	}
	function hf(e, t) {
		return new e({
			type: "string",
			format: "duration",
			check: "string_format",
			...T(t),
		});
	}
	function gf(e, t) {
		return new e({ type: "number", checks: [], ...T(t) });
	}
	function mf(e, t) {
		return new e({ type: "number", coerce: !0, checks: [], ...T(t) });
	}
	function yf(e, t) {
		return new e({
			type: "number",
			check: "number_format",
			abort: !1,
			format: "safeint",
			...T(t),
		});
	}
	function vf(e, t) {
		return new e({ type: "boolean", ...T(t) });
	}
	function bf(e, t) {
		return new e({ type: "boolean", coerce: !0, ...T(t) });
	}
	function wf(e, t) {
		return new e({ type: "null", ...T(t) });
	}
	function _f(e) {
		return new e({ type: "any" });
	}
	function kf(e) {
		return new e({ type: "unknown" });
	}
	function Sf(e, t) {
		return new e({ type: "never", ...T(t) });
	}
	function xf(e, t) {
		return new e({ type: "date", ...T(t) });
	}
	function Cf(e, t) {
		return new e({ type: "date", coerce: !0, ...T(t) });
	}
	function Ys(e, t) {
		return new xs({ check: "less_than", ...T(t), value: e, inclusive: !1 });
	}
	function Xn(e, t) {
		return new xs({ check: "less_than", ...T(t), value: e, inclusive: !0 });
	}
	function Xs(e, t) {
		return new Cs({ check: "greater_than", ...T(t), value: e, inclusive: !1 });
	}
	function Qn(e, t) {
		return new Cs({ check: "greater_than", ...T(t), value: e, inclusive: !0 });
	}
	function Qs(e, t) {
		return new Md({ check: "multiple_of", ...T(t), value: e });
	}
	function ea(e, t) {
		return new Ad({ check: "max_length", ...T(t), maximum: e });
	}
	function er(e, t) {
		return new Ld({ check: "min_length", ...T(t), minimum: e });
	}
	function ta(e, t) {
		return new Od({ check: "length_equals", ...T(t), length: e });
	}
	function zf(e, t) {
		return new Nd({
			check: "string_format",
			format: "regex",
			...T(t),
			pattern: e,
		});
	}
	function Tf(e) {
		return new jd({ check: "string_format", format: "lowercase", ...T(e) });
	}
	function If(e) {
		return new Bd({ check: "string_format", format: "uppercase", ...T(e) });
	}
	function $f(e, t) {
		return new Dd({
			check: "string_format",
			format: "includes",
			...T(t),
			includes: e,
		});
	}
	function Ef(e, t) {
		return new Fd({
			check: "string_format",
			format: "starts_with",
			...T(t),
			prefix: e,
		});
	}
	function Rf(e, t) {
		return new Zd({
			check: "string_format",
			format: "ends_with",
			...T(t),
			suffix: e,
		});
	}
	function Tt(e) {
		return new Hd({ check: "overwrite", tx: e });
	}
	function Mf(e) {
		return Tt((t) => t.normalize(e));
	}
	function Pf() {
		return Tt((e) => e.trim());
	}
	function Af() {
		return Tt((e) => e.toLowerCase());
	}
	function Lf() {
		return Tt((e) => e.toUpperCase());
	}
	function Of() {
		return Tt((e) => Au(e));
	}
	function Nf(e, t, n) {
		return new e({ type: "array", element: t, ...T(n) });
	}
	function jf(e, t, n) {
		return new e({ type: "custom", check: "custom", fn: t, ...T(n) });
	}
	function Bf(e, t) {
		const n = Df(
			(r) => (
				(r.addIssue = (o) => {
					if (typeof o == "string") r.issues.push(sn(o, r.value, n._zod.def));
					else {
						const i = o;
						i.fatal && (i.continue = !1),
							i.code ?? (i.code = "custom"),
							i.input ?? (i.input = r.value),
							i.inst ?? (i.inst = n),
							i.continue ?? (i.continue = !n._zod.def.abort),
							r.issues.push(sn(i));
					}
				}),
				e(r.value, r)
			),
			t,
		);
		return n;
	}
	function Df(e, t) {
		const n = new ue({ check: "custom", ...T(t) });
		return (n._zod.check = e), n;
	}
	function Ff(e, t) {
		const n = T(t);
		let r = n.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
			o = n.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
		n.case !== "sensitive" &&
			((r = r.map((f) => (typeof f == "string" ? f.toLowerCase() : f))),
			(o = o.map((f) => (typeof f == "string" ? f.toLowerCase() : f))));
		const i = new Set(r),
			s = new Set(o),
			a = e.Codec ?? Hs,
			c = e.Boolean ?? Is,
			l = e.String ?? qn,
			d = new l({ type: "string", error: n.error }),
			u = new c({ type: "boolean", error: n.error }),
			p = new a({
				type: "pipe",
				in: d,
				out: u,
				transform: (f, g) => {
					let y = f;
					return (
						n.case !== "sensitive" && (y = y.toLowerCase()),
						i.has(y)
							? !0
							: s.has(y)
								? !1
								: (g.issues.push({
										code: "invalid_value",
										expected: "stringbool",
										values: [...i, ...s],
										input: g.value,
										inst: p,
										continue: !1,
									}),
									{})
					);
				},
				reverseTransform: (f, g) =>
					f === !0 ? r[0] || "true" : o[0] || "false",
				error: n.error,
			});
		return p;
	}
	function na(e) {
		let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
		return (
			t === "draft-4" && (t = "draft-04"),
			t === "draft-7" && (t = "draft-07"),
			{
				processors: e.processors ?? {},
				metadataRegistry: (e == null ? void 0 : e.metadata) ?? an,
				target: t,
				unrepresentable: (e == null ? void 0 : e.unrepresentable) ?? "throw",
				override: (e == null ? void 0 : e.override) ?? (() => {}),
				io: (e == null ? void 0 : e.io) ?? "output",
				counter: 0,
				seen: new Map(),
				cycles: (e == null ? void 0 : e.cycles) ?? "ref",
				reused: (e == null ? void 0 : e.reused) ?? "inline",
				external: (e == null ? void 0 : e.external) ?? void 0,
			}
		);
	}
	function K(e, t, n = { path: [], schemaPath: [] }) {
		var d, u;
		var r;
		const o = e._zod.def,
			i = t.seen.get(e);
		if (i)
			return (
				i.count++, n.schemaPath.includes(e) && (i.cycle = n.path), i.schema
			);
		const s = { schema: {}, count: 1, cycle: void 0, path: n.path };
		t.seen.set(e, s);
		const a = (u = (d = e._zod).toJSONSchema) == null ? void 0 : u.call(d);
		if (a) s.schema = a;
		else {
			const p = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
			if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, s.schema, p);
			else {
				const g = s.schema,
					y = t.processors[o.type];
				if (!y)
					throw new Error(
						`[toJSONSchema]: Non-representable type encountered: ${o.type}`,
					);
				y(e, t, g, p);
			}
			const f = e._zod.parent;
			f && (s.ref || (s.ref = f), K(f, t, p), (t.seen.get(f).isParent = !0));
		}
		const c = t.metadataRegistry.get(e);
		return (
			c && Object.assign(s.schema, c),
			t.io === "input" &&
				le(e) &&
				(delete s.schema.examples, delete s.schema.default),
			t.io === "input" &&
				"_prefault" in s.schema &&
				((r = s.schema).default ?? (r.default = s.schema._prefault)),
			delete s.schema._prefault,
			t.seen.get(e).schema
		);
	}
	function ra(e, t) {
		var s, a, c, l;
		const n = e.seen.get(t);
		if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
		const r = new Map();
		for (const d of e.seen.entries()) {
			const u = (s = e.metadataRegistry.get(d[0])) == null ? void 0 : s.id;
			if (u) {
				const p = r.get(u);
				if (p && p !== d[0])
					throw new Error(
						`Duplicate schema id "${u}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
					);
				r.set(u, d[0]);
			}
		}
		const o = (d) => {
				var y;
				const u = e.target === "draft-2020-12" ? "$defs" : "definitions";
				if (e.external) {
					const b = (y = e.external.registry.get(d[0])) == null ? void 0 : y.id,
						v = e.external.uri ?? ((S) => S);
					if (b) return { ref: v(b) };
					const _ = d[1].defId ?? d[1].schema.id ?? `schema${e.counter++}`;
					return (
						(d[1].defId = _), { defId: _, ref: `${v("__shared")}#/${u}/${_}` }
					);
				}
				if (d[1] === n) return { ref: "#" };
				const f = `#/${u}/`,
					g = d[1].schema.id ?? `__schema${e.counter++}`;
				return { defId: g, ref: f + g };
			},
			i = (d) => {
				if (d[1].schema.$ref) return;
				const u = d[1],
					{ ref: p, defId: f } = o(d);
				(u.def = { ...u.schema }), f && (u.defId = f);
				const g = u.schema;
				for (const y in g) delete g[y];
				g.$ref = p;
			};
		if (e.cycles === "throw")
			for (const d of e.seen.entries()) {
				const u = d[1];
				if (u.cycle)
					throw new Error(`Cycle detected: #/${((a = u.cycle)) == null ? void 0 : a.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
			}
		for (const d of e.seen.entries()) {
			const u = d[1];
			if (t === d[0]) {
				i(d);
				continue;
			}
			if (e.external) {
				const f = (c = e.external.registry.get(d[0])) == null ? void 0 : c.id;
				if (t !== d[0] && f) {
					i(d);
					continue;
				}
			}
			if ((l = e.metadataRegistry.get(d[0])) == null ? void 0 : l.id) {
				i(d);
				continue;
			}
			if (u.cycle) {
				i(d);
				continue;
			}
			if (u.count > 1 && e.reused === "ref") {
				i(d);
				continue;
			}
		}
	}
	function oa(e, t) {
		var a, c, l, d;
		const n = e.seen.get(t);
		if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
		const r = (u) => {
			const p = e.seen.get(u);
			if (p.ref === null) return;
			const f = p.def ?? p.schema,
				g = { ...f },
				y = p.ref;
			if (((p.ref = null), y)) {
				r(y);
				const v = e.seen.get(y),
					_ = v.schema;
				if (
					(_.$ref &&
					(e.target === "draft-07" ||
						e.target === "draft-04" ||
						e.target === "openapi-3.0")
						? ((f.allOf = f.allOf ?? []), f.allOf.push(_))
						: Object.assign(f, _),
					Object.assign(f, g),
					u._zod.parent === y)
				)
					for (const x in f)
						x === "$ref" || x === "allOf" || x in g || delete f[x];
				if (_.$ref && v.def)
					for (const x in f)
						x === "$ref" ||
							x === "allOf" ||
							(x in v.def &&
								JSON.stringify(f[x]) === JSON.stringify(v.def[x]) &&
								delete f[x]);
			}
			const b = u._zod.parent;
			if (b && b !== y) {
				r(b);
				const v = e.seen.get(b);
				if (v != null && v.schema.$ref && ((f.$ref = v.schema.$ref), v.def))
					for (const _ in f)
						_ === "$ref" ||
							_ === "allOf" ||
							(_ in v.def &&
								JSON.stringify(f[_]) === JSON.stringify(v.def[_]) &&
								delete f[_]);
			}
			e.override({ zodSchema: u, jsonSchema: f, path: p.path ?? [] });
		};
		for (const u of [...e.seen.entries()].reverse()) r(u[0]);
		const o = {};
		if (
			(e.target === "draft-2020-12"
				? (o.$schema = "https://json-schema.org/draft/2020-12/schema")
				: e.target === "draft-07"
					? (o.$schema = "http://json-schema.org/draft-07/schema#")
					: e.target === "draft-04" &&
						(o.$schema = "http://json-schema.org/draft-04/schema#"),
			(a = e.external) != null && a.uri)
		) {
			const u = (c = e.external.registry.get(t)) == null ? void 0 : c.id;
			if (!u) throw new Error("Schema is missing an `id` property");
			o.$id = e.external.uri(u);
		}
		Object.assign(o, n.def ?? n.schema);
		const i = (l = e.metadataRegistry.get(t)) == null ? void 0 : l.id;
		i !== void 0 && o.id === i && delete o.id;
		const s = ((d = e.external) == null ? void 0 : d.defs) ?? {};
		for (const u of e.seen.entries()) {
			const p = u[1];
			p.def &&
				p.defId &&
				(p.def.id === p.defId && delete p.def.id, (s[p.defId] = p.def));
		}
		e.external ||
			(Object.keys(s).length > 0 &&
				(e.target === "draft-2020-12" ? (o.$defs = s) : (o.definitions = s)));
		try {
			const u = JSON.parse(JSON.stringify(o));
			return (
				Object.defineProperty(u, "~standard", {
					value: {
						...t["~standard"],
						jsonSchema: {
							input: tr(t, "input", e.processors),
							output: tr(t, "output", e.processors),
						},
					},
					enumerable: !1,
					writable: !1,
				}),
				u
			);
		} catch {
			throw new Error("Error converting schema to JSON.");
		}
	}
	function le(e, t) {
		const n = t ?? { seen: new Set() };
		if (n.seen.has(e)) return !1;
		n.seen.add(e);
		const r = e._zod.def;
		if (r.type === "transform") return !0;
		if (r.type === "array") return le(r.element, n);
		if (r.type === "set") return le(r.valueType, n);
		if (r.type === "lazy") return le(r.getter(), n);
		if (
			r.type === "promise" ||
			r.type === "optional" ||
			r.type === "nonoptional" ||
			r.type === "nullable" ||
			r.type === "readonly" ||
			r.type === "default" ||
			r.type === "prefault"
		)
			return le(r.innerType, n);
		if (r.type === "intersection") return le(r.left, n) || le(r.right, n);
		if (r.type === "record" || r.type === "map")
			return le(r.keyType, n) || le(r.valueType, n);
		if (r.type === "pipe")
			return e._zod.traits.has("$ZodCodec") ? !0 : le(r.in, n) || le(r.out, n);
		if (r.type === "object") {
			for (const o in r.shape) if (le(r.shape[o], n)) return !0;
			return !1;
		}
		if (r.type === "union") {
			for (const o of r.options) if (le(o, n)) return !0;
			return !1;
		}
		if (r.type === "tuple") {
			for (const o of r.items) if (le(o, n)) return !0;
			return !!(r.rest && le(r.rest, n));
		}
		return !1;
	}
	const Zf =
			(e, t = {}) =>
			(n) => {
				const r = na({ ...n, processors: t });
				return K(e, r), ra(r, e), oa(r, e);
			},
		tr =
			(e, t, n = {}) =>
			(r) => {
				const { libraryOptions: o, target: i } = r ?? {},
					s = na({ ...(o ?? {}), target: i, io: t, processors: n });
				return K(e, s), ra(s, e), oa(s, e);
			},
		Hf = {
			guid: "uuid",
			url: "uri",
			datetime: "date-time",
			json_string: "json-string",
			regex: "",
		},
		Uf = (e, t, n, r) => {
			const o = n;
			o.type = "string";
			const {
				minimum: i,
				maximum: s,
				format: a,
				patterns: c,
				contentEncoding: l,
			} = e._zod.bag;
			if (
				(typeof i == "number" && (o.minLength = i),
				typeof s == "number" && (o.maxLength = s),
				a &&
					((o.format = Hf[a] ?? a),
					o.format === "" && delete o.format,
					a === "time" && delete o.format),
				l && (o.contentEncoding = l),
				c && c.size > 0)
			) {
				const d = [...c];
				d.length === 1
					? (o.pattern = d[0].source)
					: d.length > 1 &&
						(o.allOf = [
							...d.map((u) => ({
								...(t.target === "draft-07" ||
								t.target === "draft-04" ||
								t.target === "openapi-3.0"
									? { type: "string" }
									: {}),
								pattern: u.source,
							})),
						]);
			}
		},
		Vf = (e, t, n, r) => {
			const o = n,
				{
					minimum: i,
					maximum: s,
					format: a,
					multipleOf: c,
					exclusiveMaximum: l,
					exclusiveMinimum: d,
				} = e._zod.bag;
			typeof a == "string" && a.includes("int")
				? (o.type = "integer")
				: (o.type = "number");
			const u = typeof d == "number" && d >= (i ?? Number.NEGATIVE_INFINITY),
				p = typeof l == "number" && l <= (s ?? Number.POSITIVE_INFINITY),
				f = t.target === "draft-04" || t.target === "openapi-3.0";
			u
				? f
					? ((o.minimum = d), (o.exclusiveMinimum = !0))
					: (o.exclusiveMinimum = d)
				: typeof i == "number" && (o.minimum = i),
				p
					? f
						? ((o.maximum = l), (o.exclusiveMaximum = !0))
						: (o.exclusiveMaximum = l)
					: typeof s == "number" && (o.maximum = s),
				typeof c == "number" && (o.multipleOf = c);
		},
		Wf = (e, t, n, r) => {
			n.type = "boolean";
		},
		qf = (e, t, n, r) => {
			t.target === "openapi-3.0"
				? ((n.type = "string"), (n.nullable = !0), (n.enum = [null]))
				: (n.type = "null");
		},
		Jf = (e, t, n, r) => {
			n.not = {};
		},
		Kf = (e, t, n, r) => {},
		Gf = (e, t, n, r) => {},
		Yf = (e, t, n, r) => {
			if (t.unrepresentable === "throw")
				throw new Error("Date cannot be represented in JSON Schema");
		},
		Xf = (e, t, n, r) => {
			const o = e._zod.def,
				i = us(o.entries);
			i.every((s) => typeof s == "number") && (n.type = "number"),
				i.every((s) => typeof s == "string") && (n.type = "string"),
				(n.enum = i);
		},
		Qf = (e, t, n, r) => {
			const o = e._zod.def,
				i = [];
			for (const s of o.values)
				if (s === void 0) {
					if (t.unrepresentable === "throw")
						throw new Error(
							"Literal `undefined` cannot be represented in JSON Schema",
						);
				} else if (typeof s == "bigint") {
					if (t.unrepresentable === "throw")
						throw new Error(
							"BigInt literals cannot be represented in JSON Schema",
						);
					i.push(Number(s));
				} else i.push(s);
			if (i.length !== 0)
				if (i.length === 1) {
					const s = i[0];
					(n.type = s === null ? "null" : typeof s),
						t.target === "draft-04" || t.target === "openapi-3.0"
							? (n.enum = [s])
							: (n.const = s);
				} else
					i.every((s) => typeof s == "number") && (n.type = "number"),
						i.every((s) => typeof s == "string") && (n.type = "string"),
						i.every((s) => typeof s == "boolean") && (n.type = "boolean"),
						i.every((s) => s === null) && (n.type = "null"),
						(n.enum = i);
		},
		eh = (e, t, n, r) => {
			if (t.unrepresentable === "throw")
				throw new Error("Custom types cannot be represented in JSON Schema");
		},
		th = (e, t, n, r) => {
			if (t.unrepresentable === "throw")
				throw new Error("Transforms cannot be represented in JSON Schema");
		},
		nh = (e, t, n, r) => {
			const o = n,
				i = e._zod.def,
				{ minimum: s, maximum: a } = e._zod.bag;
			typeof s == "number" && (o.minItems = s),
				typeof a == "number" && (o.maxItems = a),
				(o.type = "array"),
				(o.items = K(i.element, t, { ...r, path: [...r.path, "items"] }));
		},
		rh = (e, t, n, r) => {
			var l;
			const o = n,
				i = e._zod.def;
			(o.type = "object"), (o.properties = {});
			const s = i.shape;
			for (const d in s)
				o.properties[d] = K(s[d], t, {
					...r,
					path: [...r.path, "properties", d],
				});
			const a = new Set(Object.keys(s)),
				c = new Set(
					[...a].filter((d) => {
						const u = i.shape[d]._zod;
						return t.io === "input" ? u.optin === void 0 : u.optout === void 0;
					}),
				);
			c.size > 0 && (o.required = Array.from(c)),
				((l = i.catchall) == null ? void 0 : l._zod.def.type) === "never"
					? (o.additionalProperties = !1)
					: i.catchall
						? i.catchall &&
							(o.additionalProperties = K(i.catchall, t, {
								...r,
								path: [...r.path, "additionalProperties"],
							}))
						: t.io === "output" && (o.additionalProperties = !1);
		},
		oh = (e, t, n, r) => {
			const o = e._zod.def,
				i = o.inclusive === !1,
				s = o.options.map((a, c) =>
					K(a, t, { ...r, path: [...r.path, i ? "oneOf" : "anyOf", c] }),
				);
			i ? (n.oneOf = s) : (n.anyOf = s);
		},
		ih = (e, t, n, r) => {
			const o = e._zod.def,
				i = K(o.left, t, { ...r, path: [...r.path, "allOf", 0] }),
				s = K(o.right, t, { ...r, path: [...r.path, "allOf", 1] }),
				a = (l) => "allOf" in l && Object.keys(l).length === 1,
				c = [...(a(i) ? i.allOf : [i]), ...(a(s) ? s.allOf : [s])];
			n.allOf = c;
		},
		sh = (e, t, n, r) => {
			const o = n,
				i = e._zod.def;
			o.type = "array";
			const s = t.target === "draft-2020-12" ? "prefixItems" : "items",
				a =
					t.target === "draft-2020-12" || t.target === "openapi-3.0"
						? "items"
						: "additionalItems",
				c = i.items.map((p, f) => K(p, t, { ...r, path: [...r.path, s, f] })),
				l = i.rest
					? K(i.rest, t, {
							...r,
							path: [
								...r.path,
								a,
								...(t.target === "openapi-3.0" ? [i.items.length] : []),
							],
						})
					: null;
			t.target === "draft-2020-12"
				? ((o.prefixItems = c), l && (o.items = l))
				: t.target === "openapi-3.0"
					? ((o.items = { anyOf: c }),
						l && o.items.anyOf.push(l),
						(o.minItems = c.length),
						l || (o.maxItems = c.length))
					: ((o.items = c), l && (o.additionalItems = l));
			const { minimum: d, maximum: u } = e._zod.bag;
			typeof d == "number" && (o.minItems = d),
				typeof u == "number" && (o.maxItems = u);
		},
		ah = (e, t, n, r) => {
			const o = n,
				i = e._zod.def;
			o.type = "object";
			const s = i.keyType,
				a = s._zod.bag,
				c = a == null ? void 0 : a.patterns;
			if (i.mode === "loose" && c && c.size > 0) {
				const d = K(i.valueType, t, {
					...r,
					path: [...r.path, "patternProperties", "*"],
				});
				o.patternProperties = {};
				for (const u of c) o.patternProperties[u.source] = d;
			} else
				(t.target === "draft-07" || t.target === "draft-2020-12") &&
					(o.propertyNames = K(i.keyType, t, {
						...r,
						path: [...r.path, "propertyNames"],
					})),
					(o.additionalProperties = K(i.valueType, t, {
						...r,
						path: [...r.path, "additionalProperties"],
					}));
			const l = s._zod.values;
			if (l) {
				const d = [...l].filter(
					(u) => typeof u == "string" || typeof u == "number",
				);
				d.length > 0 && (o.required = d);
			}
		},
		lh = (e, t, n, r) => {
			const o = e._zod.def,
				i = K(o.innerType, t, r),
				s = t.seen.get(e);
			t.target === "openapi-3.0"
				? ((s.ref = o.innerType), (n.nullable = !0))
				: (n.anyOf = [i, { type: "null" }]);
		},
		ch = (e, t, n, r) => {
			const o = e._zod.def;
			K(o.innerType, t, r);
			const i = t.seen.get(e);
			i.ref = o.innerType;
		},
		uh = (e, t, n, r) => {
			const o = e._zod.def;
			K(o.innerType, t, r);
			const i = t.seen.get(e);
			(i.ref = o.innerType),
				(n.default = JSON.parse(JSON.stringify(o.defaultValue)));
		},
		dh = (e, t, n, r) => {
			const o = e._zod.def;
			K(o.innerType, t, r);
			const i = t.seen.get(e);
			(i.ref = o.innerType),
				t.io === "input" &&
					(n._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
		},
		ph = (e, t, n, r) => {
			const o = e._zod.def;
			K(o.innerType, t, r);
			const i = t.seen.get(e);
			i.ref = o.innerType;
			let s;
			try {
				s = o.catchValue(void 0);
			} catch {
				throw new Error(
					"Dynamic catch values are not supported in JSON Schema",
				);
			}
			n.default = s;
		},
		fh = (e, t, n, r) => {
			const o = e._zod.def,
				i = o.in._zod.traits.has("$ZodTransform"),
				s = t.io === "input" ? (i ? o.out : o.in) : o.out;
			K(s, t, r);
			const a = t.seen.get(e);
			a.ref = s;
		},
		hh = (e, t, n, r) => {
			const o = e._zod.def;
			K(o.innerType, t, r);
			const i = t.seen.get(e);
			(i.ref = o.innerType), (n.readOnly = !0);
		},
		ia = (e, t, n, r) => {
			const o = e._zod.def;
			K(o.innerType, t, r);
			const i = t.seen.get(e);
			i.ref = o.innerType;
		},
		gh = (e, t, n, r) => {
			const o = e._zod.innerType;
			K(o, t, r);
			const i = t.seen.get(e);
			i.ref = o;
		},
		mh = w("ZodISODateTime", (e, t) => {
			rp.init(e, t), G.init(e, t);
		});
	function yh(e) {
		return df(mh, e);
	}
	const vh = w("ZodISODate", (e, t) => {
		op.init(e, t), G.init(e, t);
	});
	function bh(e) {
		return pf(vh, e);
	}
	const wh = w("ZodISOTime", (e, t) => {
		ip.init(e, t), G.init(e, t);
	});
	function _h(e) {
		return ff(wh, e);
	}
	const kh = w("ZodISODuration", (e, t) => {
		sp.init(e, t), G.init(e, t);
	});
	function Sh(e) {
		return hf(kh, e);
	}
	const sa = (e, t) => {
			ms.init(e, t),
				(e.name = "ZodError"),
				Object.defineProperties(e, {
					format: { value: (n) => Ju(e, n) },
					flatten: { value: (n) => qu(e, n) },
					addIssue: {
						value: (n) => {
							e.issues.push(n), (e.message = JSON.stringify(e.issues, eo, 2));
						},
					},
					addIssues: {
						value: (n) => {
							e.issues.push(...n),
								(e.message = JSON.stringify(e.issues, eo, 2));
						},
					},
					isEmpty: {
						get() {
							return e.issues.length === 0;
						},
					},
				});
		},
		xh = w("ZodError", sa),
		ve = w("ZodError", sa, { Parent: Error }),
		Ch = oo(ve),
		zh = io(ve),
		Th = Un(ve),
		Ih = Vn(ve),
		$h = Yu(ve),
		Eh = Xu(ve),
		Rh = Qu(ve),
		Mh = ed(ve),
		Ph = td(ve),
		Ah = nd(ve),
		Lh = rd(ve),
		Oh = od(ve),
		aa = new WeakMap();
	function ln(e, t, n) {
		const r = Object.getPrototypeOf(e);
		let o = aa.get(r);
		if ((o || ((o = new Set()), aa.set(r, o)), !o.has(t))) {
			o.add(t);
			for (const i in n) {
				const s = n[i];
				Object.defineProperty(r, i, {
					configurable: !0,
					enumerable: !1,
					get() {
						const a = s.bind(this);
						return (
							Object.defineProperty(this, i, {
								configurable: !0,
								writable: !0,
								enumerable: !0,
								value: a,
							}),
							a
						);
					},
					set(a) {
						Object.defineProperty(this, i, {
							configurable: !0,
							writable: !0,
							enumerable: !0,
							value: a,
						});
					},
				});
			}
		}
	}
	const V = w(
			"ZodType",
			(e, t) => (
				H.init(e, t),
				Object.assign(e["~standard"], {
					jsonSchema: { input: tr(e, "input"), output: tr(e, "output") },
				}),
				(e.toJSONSchema = Zf(e, {})),
				(e.def = t),
				(e.type = t.type),
				Object.defineProperty(e, "_def", { value: t }),
				(e.parse = (n, r) => Ch(e, n, r, { callee: e.parse })),
				(e.safeParse = (n, r) => Th(e, n, r)),
				(e.parseAsync = async (n, r) => zh(e, n, r, { callee: e.parseAsync })),
				(e.safeParseAsync = async (n, r) => Ih(e, n, r)),
				(e.spa = e.safeParseAsync),
				(e.encode = (n, r) => $h(e, n, r)),
				(e.decode = (n, r) => Eh(e, n, r)),
				(e.encodeAsync = async (n, r) => Rh(e, n, r)),
				(e.decodeAsync = async (n, r) => Mh(e, n, r)),
				(e.safeEncode = (n, r) => Ph(e, n, r)),
				(e.safeDecode = (n, r) => Ah(e, n, r)),
				(e.safeEncodeAsync = async (n, r) => Lh(e, n, r)),
				(e.safeDecodeAsync = async (n, r) => Oh(e, n, r)),
				ln(e, "ZodType", {
					check(...n) {
						const r = this.def;
						return this.clone(
							qe(r, {
								checks: [
									...(r.checks ?? []),
									...n.map((o) =>
										typeof o == "function"
											? {
													_zod: {
														check: o,
														def: { check: "custom" },
														onattach: [],
													},
												}
											: o,
									),
								],
							}),
							{ parent: !0 },
						);
					},
					with(...n) {
						return this.check(...n);
					},
					clone(n, r) {
						return Je(this, n, r);
					},
					brand() {
						return this;
					},
					register(n, r) {
						return n.add(this, r), this;
					},
					refine(n, r) {
						return this.check(Ag(n, r));
					},
					superRefine(n, r) {
						return this.check(Lg(n, r));
					},
					overwrite(n) {
						return this.check(Tt(n));
					},
					optional() {
						return va(this);
					},
					exactOptional() {
						return vg(this);
					},
					nullable() {
						return ba(this);
					},
					nullish() {
						return va(ba(this));
					},
					nonoptional(n) {
						return xg(this, n);
					},
					array() {
						return M(this);
					},
					or(n) {
						return Y([this, n]);
					},
					and(n) {
						return pg(this, n);
					},
					transform(n) {
						return _a(this, ma(n));
					},
					default(n) {
						return _g(this, n);
					},
					prefault(n) {
						return Sg(this, n);
					},
					catch(n) {
						return zg(this, n);
					},
					pipe(n) {
						return _a(this, n);
					},
					readonly() {
						return Eg(this);
					},
					describe(n) {
						const r = this.clone();
						return an.add(r, { description: n }), r;
					},
					meta(...n) {
						if (n.length === 0) return an.get(this);
						const r = this.clone();
						return an.add(r, n[0]), r;
					},
					isOptional() {
						return this.safeParse(void 0).success;
					},
					isNullable() {
						return this.safeParse(null).success;
					},
					apply(n) {
						return n(this);
					},
				}),
				Object.defineProperty(e, "description", {
					get() {
						var n;
						return (n = an.get(e)) == null ? void 0 : n.description;
					},
					configurable: !0,
				}),
				e
			),
		),
		la = w("_ZodString", (e, t) => {
			qn.init(e, t),
				V.init(e, t),
				(e._zod.processJSONSchema = (r, o, i) => Uf(e, r, o));
			const n = e._zod.bag;
			(e.format = n.format ?? null),
				(e.minLength = n.minimum ?? null),
				(e.maxLength = n.maximum ?? null),
				ln(e, "_ZodString", {
					regex(...r) {
						return this.check(zf(...r));
					},
					includes(...r) {
						return this.check($f(...r));
					},
					startsWith(...r) {
						return this.check(Ef(...r));
					},
					endsWith(...r) {
						return this.check(Rf(...r));
					},
					min(...r) {
						return this.check(er(...r));
					},
					max(...r) {
						return this.check(ea(...r));
					},
					length(...r) {
						return this.check(ta(...r));
					},
					nonempty(...r) {
						return this.check(er(1, ...r));
					},
					lowercase(r) {
						return this.check(Tf(r));
					},
					uppercase(r) {
						return this.check(If(r));
					},
					trim() {
						return this.check(Pf());
					},
					normalize(...r) {
						return this.check(Mf(...r));
					},
					toLowerCase() {
						return this.check(Af());
					},
					toUpperCase() {
						return this.check(Lf());
					},
					slugify() {
						return this.check(Of());
					},
				});
		}),
		ca = w("ZodString", (e, t) => {
			qn.init(e, t),
				la.init(e, t),
				(e.email = (n) => e.check(Js(ua, n))),
				(e.url = (n) => e.check(Jp(jh, n))),
				(e.jwt = (n) => e.check(uf(Qh, n))),
				(e.emoji = (n) => e.check(Kp(Bh, n))),
				(e.guid = (n) => e.check(Ks(da, n))),
				(e.uuid = (n) => e.check(Gs(cn, n))),
				(e.uuidv4 = (n) => e.check(Vp(cn, n))),
				(e.uuidv6 = (n) => e.check(Wp(cn, n))),
				(e.uuidv7 = (n) => e.check(qp(cn, n))),
				(e.nanoid = (n) => e.check(Gp(Dh, n))),
				(e.guid = (n) => e.check(Ks(da, n))),
				(e.cuid = (n) => e.check(Yp(Fh, n))),
				(e.cuid2 = (n) => e.check(Xp(Zh, n))),
				(e.ulid = (n) => e.check(Qp(Hh, n))),
				(e.base64 = (n) => e.check(af(Gh, n))),
				(e.base64url = (n) => e.check(lf(Yh, n))),
				(e.xid = (n) => e.check(ef(Uh, n))),
				(e.ksuid = (n) => e.check(tf(Vh, n))),
				(e.ipv4 = (n) => e.check(nf(Wh, n))),
				(e.ipv6 = (n) => e.check(rf(qh, n))),
				(e.cidrv4 = (n) => e.check(of(Jh, n))),
				(e.cidrv6 = (n) => e.check(sf(Kh, n))),
				(e.e164 = (n) => e.check(cf(Xh, n))),
				(e.datetime = (n) => e.check(yh(n))),
				(e.date = (n) => e.check(bh(n))),
				(e.time = (n) => e.check(_h(n))),
				(e.duration = (n) => e.check(Sh(n)));
		});
	function h(e) {
		return Up(ca, e);
	}
	const G = w("ZodStringFormat", (e, t) => {
			J.init(e, t), la.init(e, t);
		}),
		ua = w("ZodEmail", (e, t) => {
			Jd.init(e, t), G.init(e, t);
		});
	function Nh(e) {
		return Js(ua, e);
	}
	const da = w("ZodGUID", (e, t) => {
			Wd.init(e, t), G.init(e, t);
		}),
		cn = w("ZodUUID", (e, t) => {
			qd.init(e, t), G.init(e, t);
		});
	function E(e) {
		return Gs(cn, e);
	}
	const jh = w("ZodURL", (e, t) => {
			Kd.init(e, t), G.init(e, t);
		}),
		Bh = w("ZodEmoji", (e, t) => {
			Gd.init(e, t), G.init(e, t);
		}),
		Dh = w("ZodNanoID", (e, t) => {
			Yd.init(e, t), G.init(e, t);
		}),
		Fh = w("ZodCUID", (e, t) => {
			Xd.init(e, t), G.init(e, t);
		}),
		Zh = w("ZodCUID2", (e, t) => {
			Qd.init(e, t), G.init(e, t);
		}),
		Hh = w("ZodULID", (e, t) => {
			ep.init(e, t), G.init(e, t);
		}),
		Uh = w("ZodXID", (e, t) => {
			tp.init(e, t), G.init(e, t);
		}),
		Vh = w("ZodKSUID", (e, t) => {
			np.init(e, t), G.init(e, t);
		}),
		Wh = w("ZodIPv4", (e, t) => {
			ap.init(e, t), G.init(e, t);
		}),
		qh = w("ZodIPv6", (e, t) => {
			lp.init(e, t), G.init(e, t);
		}),
		Jh = w("ZodCIDRv4", (e, t) => {
			cp.init(e, t), G.init(e, t);
		}),
		Kh = w("ZodCIDRv6", (e, t) => {
			up.init(e, t), G.init(e, t);
		}),
		Gh = w("ZodBase64", (e, t) => {
			dp.init(e, t), G.init(e, t);
		}),
		Yh = w("ZodBase64URL", (e, t) => {
			fp.init(e, t), G.init(e, t);
		}),
		Xh = w("ZodE164", (e, t) => {
			hp.init(e, t), G.init(e, t);
		}),
		Qh = w("ZodJWT", (e, t) => {
			mp.init(e, t), G.init(e, t);
		}),
		ao = w("ZodNumber", (e, t) => {
			Ts.init(e, t),
				V.init(e, t),
				(e._zod.processJSONSchema = (r, o, i) => Vf(e, r, o)),
				ln(e, "ZodNumber", {
					gt(r, o) {
						return this.check(Xs(r, o));
					},
					gte(r, o) {
						return this.check(Qn(r, o));
					},
					min(r, o) {
						return this.check(Qn(r, o));
					},
					lt(r, o) {
						return this.check(Ys(r, o));
					},
					lte(r, o) {
						return this.check(Xn(r, o));
					},
					max(r, o) {
						return this.check(Xn(r, o));
					},
					int(r) {
						return this.check(pa(r));
					},
					safe(r) {
						return this.check(pa(r));
					},
					positive(r) {
						return this.check(Xs(0, r));
					},
					nonnegative(r) {
						return this.check(Qn(0, r));
					},
					negative(r) {
						return this.check(Ys(0, r));
					},
					nonpositive(r) {
						return this.check(Xn(0, r));
					},
					multipleOf(r, o) {
						return this.check(Qs(r, o));
					},
					step(r, o) {
						return this.check(Qs(r, o));
					},
					finite() {
						return this;
					},
				});
			const n = e._zod.bag;
			(e.minValue =
				Math.max(
					n.minimum ?? Number.NEGATIVE_INFINITY,
					n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
				) ?? null),
				(e.maxValue =
					Math.min(
						n.maximum ?? Number.POSITIVE_INFINITY,
						n.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
					) ?? null),
				(e.isInt =
					(n.format ?? "").includes("int") ||
					Number.isSafeInteger(n.multipleOf ?? 0.5)),
				(e.isFinite = !0),
				(e.format = n.format ?? null);
		});
	function D(e) {
		return gf(ao, e);
	}
	const eg = w("ZodNumberFormat", (e, t) => {
		yp.init(e, t), ao.init(e, t);
	});
	function pa(e) {
		return yf(eg, e);
	}
	const lo = w("ZodBoolean", (e, t) => {
		Is.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Wf(e, n, r));
	});
	function R(e) {
		return vf(lo, e);
	}
	const tg = w("ZodNull", (e, t) => {
		vp.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => qf(e, n, r));
	});
	function ng(e) {
		return wf(tg, e);
	}
	const rg = w("ZodAny", (e, t) => {
		bp.init(e, t), V.init(e, t), (e._zod.processJSONSchema = (n, r, o) => Kf());
	});
	function un() {
		return _f(rg);
	}
	const og = w("ZodUnknown", (e, t) => {
		wp.init(e, t), V.init(e, t), (e._zod.processJSONSchema = (n, r, o) => Gf());
	});
	function co() {
		return kf(og);
	}
	const ig = w("ZodNever", (e, t) => {
		_p.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Jf(e, n, r));
	});
	function sg(e) {
		return Sf(ig, e);
	}
	const fa = w("ZodDate", (e, t) => {
		kp.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (r, o, i) => Yf(e, r)),
			(e.min = (r, o) => e.check(Qn(r, o))),
			(e.max = (r, o) => e.check(Xn(r, o)));
		const n = e._zod.bag;
		(e.minDate = n.minimum ? new Date(n.minimum) : null),
			(e.maxDate = n.maximum ? new Date(n.maximum) : null);
	});
	function ag(e) {
		return xf(fa, e);
	}
	const lg = w("ZodArray", (e, t) => {
		Sp.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => nh(e, n, r, o)),
			(e.element = t.element),
			ln(e, "ZodArray", {
				min(n, r) {
					return this.check(er(n, r));
				},
				nonempty(n) {
					return this.check(er(1, n));
				},
				max(n, r) {
					return this.check(ea(n, r));
				},
				length(n, r) {
					return this.check(ta(n, r));
				},
				unwrap() {
					return this.element;
				},
			});
	});
	function M(e, t) {
		return Nf(lg, e, t);
	}
	const cg = w("ZodObject", (e, t) => {
		Cp.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => rh(e, n, r, o)),
			j(e, "shape", () => t.shape),
			ln(e, "ZodObject", {
				keyof() {
					return L(Object.keys(this._zod.def.shape));
				},
				catchall(n) {
					return this.clone({ ...this._zod.def, catchall: n });
				},
				passthrough() {
					return this.clone({ ...this._zod.def, catchall: co() });
				},
				loose() {
					return this.clone({ ...this._zod.def, catchall: co() });
				},
				strict() {
					return this.clone({ ...this._zod.def, catchall: sg() });
				},
				strip() {
					return this.clone({ ...this._zod.def, catchall: void 0 });
				},
				extend(n) {
					return Fu(this, n);
				},
				safeExtend(n) {
					return Zu(this, n);
				},
				merge(n) {
					return Hu(this, n);
				},
				pick(n) {
					return Bu(this, n);
				},
				omit(n) {
					return Du(this, n);
				},
				partial(...n) {
					return Uu(ya, this, n[0]);
				},
				required(...n) {
					return Vu(wa, this, n[0]);
				},
			});
	});
	function k(e, t) {
		const n = { type: "object", shape: e ?? {}, ...T(t) };
		return new cg(n);
	}
	const ha = w("ZodUnion", (e, t) => {
		Ps.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => oh(e, n, r, o)),
			(e.options = t.options);
	});
	function Y(e, t) {
		return new ha({ type: "union", options: e, ...T(t) });
	}
	const ug = w("ZodDiscriminatedUnion", (e, t) => {
		ha.init(e, t), zp.init(e, t);
	});
	function Ne(e, t, n) {
		return new ug({ type: "union", options: t, discriminator: e, ...T(n) });
	}
	const dg = w("ZodIntersection", (e, t) => {
		Tp.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => ih(e, n, r, o));
	});
	function pg(e, t) {
		return new dg({ type: "intersection", left: e, right: t });
	}
	const fg = w("ZodTuple", (e, t) => {
		Ip.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => sh(e, n, r, o)),
			(e.rest = (n) => e.clone({ ...e._zod.def, rest: n }));
	});
	function hg(e, t, n) {
		const r = t instanceof H,
			o = r ? n : t,
			i = r ? t : null;
		return new fg({ type: "tuple", items: e, rest: i, ...T(o) });
	}
	const ga = w("ZodRecord", (e, t) => {
		$p.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => ah(e, n, r, o)),
			(e.keyType = t.keyType),
			(e.valueType = t.valueType);
	});
	function re(e, t, n) {
		return !t || !t._zod
			? new ga({ type: "record", keyType: h(), valueType: e, ...T(t) })
			: new ga({ type: "record", keyType: e, valueType: t, ...T(n) });
	}
	const uo = w("ZodEnum", (e, t) => {
		Ep.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (r, o, i) => Xf(e, r, o)),
			(e.enum = t.entries),
			(e.options = Object.values(t.entries));
		const n = new Set(Object.keys(t.entries));
		(e.extract = (r, o) => {
			const i = {};
			for (const s of r)
				if (n.has(s)) i[s] = t.entries[s];
				else throw new Error(`Key ${s} not found in enum`);
			return new uo({ ...t, checks: [], ...T(o), entries: i });
		}),
			(e.exclude = (r, o) => {
				const i = { ...t.entries };
				for (const s of r)
					if (n.has(s)) delete i[s];
					else throw new Error(`Key ${s} not found in enum`);
				return new uo({ ...t, checks: [], ...T(o), entries: i });
			});
	});
	function L(e, t) {
		const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
		return new uo({ type: "enum", entries: n, ...T(t) });
	}
	const gg = w("ZodLiteral", (e, t) => {
		Rp.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Qf(e, n, r)),
			(e.values = new Set(t.values)),
			Object.defineProperty(e, "value", {
				get() {
					if (t.values.length > 1)
						throw new Error(
							"This schema contains multiple valid literal values. Use `.values` instead.",
						);
					return t.values[0];
				},
			});
	});
	function $(e, t) {
		return new gg({
			type: "literal",
			values: Array.isArray(e) ? e : [e],
			...T(t),
		});
	}
	const mg = w("ZodTransform", (e, t) => {
		Mp.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => th(e, n)),
			(e._zod.parse = (n, r) => {
				if (r.direction === "backward") throw new cs(e.constructor.name);
				n.addIssue = (i) => {
					if (typeof i == "string") n.issues.push(sn(i, n.value, t));
					else {
						const s = i;
						s.fatal && (s.continue = !1),
							s.code ?? (s.code = "custom"),
							s.input ?? (s.input = n.value),
							s.inst ?? (s.inst = e),
							n.issues.push(sn(s));
					}
				};
				const o = t.transform(n.value, n);
				return o instanceof Promise
					? o.then((i) => ((n.value = i), (n.fallback = !0), n))
					: ((n.value = o), (n.fallback = !0), n);
			});
	});
	function ma(e) {
		return new mg({ type: "transform", transform: e });
	}
	const ya = w("ZodOptional", (e, t) => {
		Bs.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => ia(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function va(e) {
		return new ya({ type: "optional", innerType: e });
	}
	const yg = w("ZodExactOptional", (e, t) => {
		Pp.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => ia(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function vg(e) {
		return new yg({ type: "optional", innerType: e });
	}
	const bg = w("ZodNullable", (e, t) => {
		Ap.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => lh(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function ba(e) {
		return new bg({ type: "nullable", innerType: e });
	}
	const wg = w("ZodDefault", (e, t) => {
		Lp.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => uh(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType),
			(e.removeDefault = e.unwrap);
	});
	function _g(e, t) {
		return new wg({
			type: "default",
			innerType: e,
			get defaultValue() {
				return typeof t == "function" ? t() : hs(t);
			},
		});
	}
	const kg = w("ZodPrefault", (e, t) => {
		Op.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => dh(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function Sg(e, t) {
		return new kg({
			type: "prefault",
			innerType: e,
			get defaultValue() {
				return typeof t == "function" ? t() : hs(t);
			},
		});
	}
	const wa = w("ZodNonOptional", (e, t) => {
		Np.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => ch(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function xg(e, t) {
		return new wa({ type: "nonoptional", innerType: e, ...T(t) });
	}
	const Cg = w("ZodCatch", (e, t) => {
		jp.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => ph(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType),
			(e.removeCatch = e.unwrap);
	});
	function zg(e, t) {
		return new Cg({
			type: "catch",
			innerType: e,
			catchValue: typeof t == "function" ? t : () => t,
		});
	}
	const po = w("ZodPipe", (e, t) => {
		Zs.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => fh(e, n, r, o)),
			(e.in = t.in),
			(e.out = t.out);
	});
	function _a(e, t) {
		return new po({ type: "pipe", in: e, out: t });
	}
	const Tg = w("ZodCodec", (e, t) => {
			po.init(e, t), Hs.init(e, t);
		}),
		Ig = w("ZodPreprocess", (e, t) => {
			po.init(e, t), Bp.init(e, t);
		}),
		$g = w("ZodReadonly", (e, t) => {
			Dp.init(e, t),
				V.init(e, t),
				(e._zod.processJSONSchema = (n, r, o) => hh(e, n, r, o)),
				(e.unwrap = () => e._zod.def.innerType);
		});
	function Eg(e) {
		return new $g({ type: "readonly", innerType: e });
	}
	const Rg = w("ZodLazy", (e, t) => {
		Fp.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => gh(e, n, r, o)),
			(e.unwrap = () => e._zod.def.getter());
	});
	function Mg(e) {
		return new Rg({ type: "lazy", getter: e });
	}
	const Pg = w("ZodCustom", (e, t) => {
		Zp.init(e, t),
			V.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => eh(e, n));
	});
	function Ag(e, t = {}) {
		return jf(Pg, e, t);
	}
	function Lg(e, t) {
		return Bf(e, t);
	}
	const Ge = (...e) => Ff({ Codec: Tg, Boolean: lo, String: ca }, ...e);
	function ka(e, t) {
		return new Ig({ type: "pipe", in: ma(e), out: t });
	}
	function Q(e) {
		return mf(ao, e);
	}
	function ie(e) {
		return bf(lo, e);
	}
	function ce(e) {
		return Cf(fa, e);
	}
	function fo(e) {
		return typeof e == "boolean"
			? e
			: e === "false" || e === "0" || e === "" || e === null
				? !1
				: !!e;
	}
	const Ye = L(["Draft", "Published", "Paused", "Archived", "Deleted"]),
		Og = L(["Published", "Archived"]),
		Sa = L(["Draft", "Published", "Paused", "Archived"]),
		Ng = k({ id: E(), type: $("TopTask"), status: Og }),
		jg = k({ id: E(), type: $("Tag"), status: Ye }),
		Bg = k({ id: E(), type: $("Card"), status: Ye });
	Ne("type", [Ng, jg, Bg]);
	const lt = k({ id: E() }),
		dn = k({ id: E(), name: h().optional() }),
		nr = k({ id: h(), name: h(), native: h() }),
		Dg = k({ id: E(), code: h().optional(), name: h().optional() });
	function de(e, t) {
		const r = Object.fromEntries((t ?? []).map((i) => [i, h().nullish()])),
			o = Dg.extend({ ...e, ...r });
		return M(o).optional().nullable().default([]);
	}
	const Fg = h().meta({ title: "Email label" }),
		Zg = h().meta({
			title: "Email placeholder",
			description:
				"The placeholder to show in the input field before user writes anything",
		}),
		ae = Y([R(), h()]).optional().transform(fo),
		xa = L([
			"LikertScaleThree",
			"LikertScaleFive",
			"LikertScaleSix",
			"LikertScaleSeven",
		]),
		Ca = L([
			"Average",
			"Median",
			"Mode",
			"PositivePercentage",
			"NegativePercentage",
		]),
		za = k({
			id: E(),
			label: h(),
			value: Q(),
			emoji: nr.optional().nullable().default(null),
			tr: de({}, ["@label"]),
		}),
		Ta = k({
			id: E(),
			name: h(),
			type: xa,
			aggregationMethod: Ca,
			status: Ye.optional(),
			description: h().optional().nullable(),
			likertItems: M(za),
			defaultCardTitle: h().optional().nullable(),
			defaultLanguage: k({ id: E(), code: h(), name: h() })
				.optional()
				.nullable(),
			showInDashboard: R().or(h()).optional().transform(fo),
		}),
		Hg = Ta.omit({
			name: !0,
			status: !0,
			description: !0,
			defaultCardTitle: !0,
		});
	k({
		name: h(),
		type: xa,
		status: Ye.optional(),
		description: h().optional().nullable(),
		aggregationMethod: Ca.optional().nullable().default("Average"),
		likertItems: M(za.omit({ id: !0, tr: !0 })),
		defaultCardTitle: h().optional().nullable(),
		showInDashboard: R().or(h()).optional().transform(fo),
	});
	const Ia = Y([R(), h()]).transform((e) =>
			typeof e == "boolean" ? e : e === "true" || e === "1",
		),
		ho = k({ id: E(), type: h(), name: h(), errMessage: h(), negate: R() }),
		$a = ho.extend({
			name: h(),
			description: h(),
			applyToAllInputCards: R(),
			enabled: R(),
			isOrgSpecific: R(),
			createdAt: ce(),
			updatedAt: ce().nullable(),
			cardCount: D(),
			cards: M(
				k({
					id: E(),
					name: h(),
					survey: k({ id: E(), name: h(), slug: h() }).nullable(),
				}),
			),
		}),
		Ug = k({
			id: E(),
			name: h(),
			description: h().optional(),
			errMessage: h(),
			negate: ie(),
			applyToAllInputCards: Ia.optional().default(!1),
		});
	k({
		type: $("OrgValidationRegex"),
		name: h(),
		description: h().optional(),
		errMessage: h(),
		negate: ie(),
		applyToAllInputCards: Ia.optional().default(!1),
		regex: h(),
	});
	const Vg = ho.extend({ regex: h().nullable(), type: $("ValidationRegex") }),
		Wg = ho.extend({ regex: h().nullable(), type: $("OrgValidationRegex") }),
		qg = Ne("type", [Vg, Wg]),
		Jg = $a.extend({ regex: h().nullable(), type: $("ValidationRegex") }),
		Kg = $a.extend({ regex: h().nullable(), type: $("OrgValidationRegex") }),
		Gg = Ne("type", [Jg, Kg]);
	Ug.extend({
		regex: h(),
		type: $("OrgValidationRegex"),
		enabled: ie().optional(),
	});
	const Yg = L(["Include", "Exclude"]),
		Ea = L(["and", "or"]),
		Xg = L(["string", "number"]),
		Qg = L([
			"exists",
			"notExists",
			"equals",
			"notEquals",
			"in",
			"contains",
			"greaterThan",
			"greaterThanOrEqual",
			"lessThan",
			"lessThanOrEqual",
		]),
		em = new Set([
			"greaterThan",
			"greaterThanOrEqual",
			"lessThan",
			"lessThanOrEqual",
		]),
		tm = new Set([
			"equals",
			"notEquals",
			"contains",
			"greaterThan",
			"greaterThanOrEqual",
			"lessThan",
			"lessThanOrEqual",
		]),
		nm = k({
			traitId: E(),
			traitSlug: h().min(1),
			valueType: Xg,
			operator: Qg,
			values: M(h()),
		}).superRefine((e, t) => {
			if (
				(e.valueType === "string" &&
					em.has(e.operator) &&
					t.addIssue({
						code: "custom",
						path: ["operator"],
						message: "String traits cannot use numeric operators",
					}),
				e.valueType === "number" &&
					e.operator === "contains" &&
					t.addIssue({
						code: "custom",
						path: ["operator"],
						message: "Numeric traits cannot use contains",
					}),
				e.operator === "exists" || e.operator === "notExists")
			) {
				e.values.length !== 0 &&
					t.addIssue({
						code: "custom",
						path: ["values"],
						message: "Exists operators must not include values",
					});
				return;
			}
			if (
				(e.operator === "in"
					? e.values.length === 0 &&
						t.addIssue({
							code: "custom",
							path: ["values"],
							message: "In operator must include at least one value",
						})
					: tm.has(e.operator) &&
						e.values.length !== 1 &&
						t.addIssue({
							code: "custom",
							path: ["values"],
							message: "Scalar operators must include exactly one value",
						}),
				e.valueType === "number")
			) {
				for (const n of e.values)
					if (!Number.isFinite(Number(n))) {
						t.addIssue({
							code: "custom",
							path: ["values"],
							message: "Numeric trait values must be finite numbers",
						});
						return;
					}
			}
		}),
		rm = ka((e) => {
			if (typeof e != "string") return e;
			try {
				return JSON.parse(e);
			} catch {
				return e;
			}
		}, M(nm)),
		Ra = k({
			desktop: R()
				.nullish()
				.transform((e) => e ?? !0),
			mobile: R()
				.nullish()
				.transform((e) => e ?? !0),
			tablet: R()
				.nullish()
				.transform((e) => e ?? !0),
			languages: M(h())
				.nullish()
				.transform((e) => e ?? []),
			locales: M(h())
				.nullish()
				.transform((e) => e ?? []),
			traitConditions: rm.optional().default([]),
		}),
		Ma = Ra.extend({ id: E(), type: Yg }),
		om =
			/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
	function im(e) {
		return typeof e == "string" && om.test(e);
	}
	L(["Viewer", "Curator", "Editor", "Admin"]),
		L(["Viewer", "Admin"]),
		k({
			id: E(),
			name: h().optional().nullable(),
			image: h().optional().nullable(),
		});
	const go = k({
			id: E(),
			name: h().optional().nullable(),
			email: Nh(),
			image: h().optional().nullable(),
			superAdmin: R().optional().nullable(),
		}),
		sm = L(["Minimal", "Regular", "Large"]),
		am = Ye.or($("Paused")),
		Pa = Date.parse("2026-01-27T14:29:10Z");
	function lm({ optionsLayout: e, createdAt: t, updatedAt: n }) {
		if (e !== "vertical" || !t) return e;
		const r = n ?? t;
		return t.getTime() < Pa && r.getTime() < Pa ? "horizontal" : e;
	}
	const Aa = k({
		id: E(),
		errMessage: h().optional().nullable(),
		validation: qg,
		tr: de({ "@errMessage": h().nullish() }, []).optional().nullable(),
	});
	k({
		id: E(),
		errMessage: h().optional().nullable(),
		validation: Gg,
		tr: de({ "@errMessage": h().nullish() }, []).optional().nullable(),
	});
	const cm = Y([h(), D(), R(), ng()]),
		mo = Mg(() => Y([cm, M(mo), re(h(), mo)])),
		La = mo
			.optional()
			.nullable()
			.transform((e) => (typeof e == "string" ? JSON.parse(e) : e));
	k({ id: E(), errMessage: h().optional().nullable(), cardId: E() }),
		Aa.extend({ card: lt, validation: lt }).omit({ id: !0 });
	function je(e) {
		return typeof e == "string" && e.length === 0 ? null : e;
	}
	const um = Ra.extend({
			id: E().optional(),
			card: lt,
			type: L(["Include", "Exclude"]),
			segmentValues: M(dn),
			tasks: M(dn),
			multiSelectItems: M(dn).optional().default([]),
			singleSelectItems: M(dn).optional().default([]),
			likertScaleItems: M(dn).optional().default([]),
			completion: R().optional().nullable(),
			recruited: R().optional().nullable(),
		}),
		dm = L(["and", "or"]),
		pn = {
			"@name": h().nullish(),
			"@body": h().nullish(),
			"@bodyHtml": h().nullish(),
			"@bodyJson": La,
			"@textNext": h().nullish(),
			"@textPrev": h().nullish(),
			"@textClose": h().nullish(),
			"@textHide": h().nullish(),
			"@textMinimized": h().nullish(),
			"@textReplyLater": h().nullish(),
		},
		yo = de(pn, []),
		xe = k({
			id: E(),
			revision: Q().default(0),
			name: h().min(3, "Heading must be at least 3 characters"),
			icon: h().optional().nullable(),
			order: Q(),
			textNext: h().optional().nullable().transform(je),
			textPrev: h().optional().nullable().transform(je),
			textHide: h().optional().nullable().transform(je),
			textMinimized: h().optional().nullable().transform(je),
			textReplyLater: h().optional().nullable().transform(je),
			textClose: h().optional().nullable().transform(je),
			tr: yo.optional().nullable(),
			field: Y([h(), k({ id: E() })])
				.optional()
				.nullable()
				.transform((e) =>
					typeof e == "string" ? (im(e) ? e : null) : e == null ? void 0 : e.id,
				),
			page: lt.optional().nullable(),
			createdAt: ce().optional(),
			createdBy: go.optional().nullable(),
			updatedAt: ce().optional().nullable(),
			updatedBy: go.optional().nullable(),
			firstResponse: ce().optional().nullish(),
			lastResponse: ce().optional().nullish(),
			status: am,
			statusSetAt: ce().optional().nullable(),
			statusSetBy: go.optional().nullable(),
			body: h().optional().nullable(),
			bodyHtml: h().optional().nullable(),
			bodyJson: La,
			type: h(),
			size: sm.optional(),
			description: h().optional().nullable(),
			optionsLayout: L(["vertical", "horizontal"])
				.optional()
				.nullable()
				.transform((e) => e ?? "vertical"),
			ruleMode: dm.optional().default("and"),
			rules: M(um).optional().default([]),
			validations: M(Aa).optional().default([]),
			isRequired: ie()
				.optional()
				.nullable()
				.transform((e) => e ?? void 0),
		});
	xe.omit({
		id: !0,
		revision: !0,
		tr: !0,
		createdAt: !0,
		createdBy: !0,
		updatedAt: !0,
		updatedBy: !0,
		statusSetAt: !0,
		statusSetBy: !0,
	}).extend({ status: Ye.optional().nullable() });
	const pm = k({
			id: E(),
			name: h(),
			tr: de({ "@name": h().nullish(), "@description": h().nullish() }, [])
				.optional()
				.nullable(),
		}),
		fm = de({ "@label": h().nullish() }, []),
		Oa = k({
			id: E().optional(),
			label: h().optional().nullable().transform(je),
			order: Q(),
			orderLocked: ae.default(!1),
			task: Y([pm, lt]),
			tr: fm.optional().nullable(),
		}),
		hm = xe.extend({
			type: $("TopTaskCard"),
			TopTaskCard: k({
				tr: yo,
				randomize: ie().optional().default(!1),
				taskItems: Y([
					M(Oa),
					re(h(), Oa).transform((e) => Object.values(e)),
				]).nullable(),
			}),
		}),
		gm = xe.extend({
			type: $("LikertCard"),
			LikertCard: k({
				tr: yo,
				likertScale: Y([Ta, Hg]),
				showEmoji: ae.default(!1),
			}),
		}),
		mm = xe.extend({ type: $("MessageCard") }),
		ym = xe.extend({
			type: $("CompletionCard"),
			CompletionCard: k({
				tr: de(pn, ["@positive", "@negative"]),
				positive: h()
					.optional()
					.nullable()
					.meta({ description: "Text on button to signal task was completed" }),
				negative: h()
					.optional()
					.nullable()
					.meta({ description: "Text on button to signal task was failed" }),
			}),
		}),
		vm = xe.extend({
			type: $("FindabilityCard"),
			FindabilityCard: k({
				tr: de(pn, ["@positive", "@negative"]),
				positive: h()
					.optional()
					.nullable()
					.meta({ description: "Text on button to signal task was completed" }),
				negative: h()
					.optional()
					.nullable()
					.meta({ description: "Text on button to signal task was failed" }),
			}),
		}),
		bm = xe.extend({
			type: $("InputCard"),
			InputCard: k({
				label: h().nullable().optional(),
				placeholder: h()
					.optional()
					.meta({
						description: "Dimmed text in the input field before user writes",
					}),
				maxLength: Q()
					.optional()
					.nullable()
					.overwrite((e) => (!e || e <= 0 ? null : e))
					.meta({ description: "Maximum number of characters allowed" }),
				minLength: Q()
					.optional()
					.nullable()
					.default(0)
					.meta({ description: "Minimum number of characters allowed" }),
				multiline: ae.meta({ description: "Allow multiline text input" }),
				tr: de(pn, ["@label", "@placeholder"]),
			}),
		}),
		wm = xe.extend({
			type: $("RecruitmentCard"),
			RecruitmentCard: k({
				maxLeads: ka(
					(e) => (e === "" ? null : e),
					Q().int().positive().optional().nullable(),
				),
				email: ae.nullable(),
				email_label: Fg.optional().nullable(),
				email_placeholder: Zg.optional().nullable(),
				phone: ae.nullable(),
				phone_label: h().optional().nullable(),
				phone_placeholder: h().optional().nullable(),
				nameEnable: ae.nullable(),
				nameLabel: h().optional().nullable(),
				namePlaceholder: h().optional().nullable(),
				consentEnable: ae.nullable(),
				consentTermsUrl: h().optional().nullable(),
				consentTermsTitle: h().optional().nullable(),
				consentTermsText: h().optional().nullable(),
				consentTermsLabel: h().optional().nullable(),
				autoEmail: ie().default(!0),
				relatedCards: M(k({ id: E(), name: h(), type: h() }))
					.optional()
					.default([]),
				tr: de(pn, [
					"@email_label",
					"@email_placeholder",
					"@phone_label",
					"@phone_placeholder",
					"@nameLabel",
					"@namePlaceholder",
					"@consentTermsUrl",
					"@consentTermsTitle",
					"@consentTermsText",
					"@consentTermsLabel",
				]),
			}),
		}),
		_m = k({
			id: E(),
			name: h(),
			tr: de({ name: h().nullish(), description: h().nullish() }, [])
				.optional()
				.nullable(),
		}),
		km = k({
			id: E(),
			name: h(),
			tr: de({ name: h().nullish(), description: h().nullish() }, [])
				.optional()
				.nullable(),
		}),
		Na = k({
			id: E().optional(),
			name: h().optional(),
			label: h().optional().nullable().transform(je),
			order: Q(),
			orderLocked: ae.default(!1),
			value: Y([km, lt]),
		}),
		Sm = xe.extend({
			type: $("SegmentCard"),
			SegmentCard: k({
				randomize: ie().optional().nullable().default(!1),
				segment: Y([_m, lt]),
				items: Y([M(Na), re(h(), Na).transform((e) => Object.values(e))]),
			}),
		}),
		ja = k({
			id: E(),
			createdAt: ce().default(() => new Date()),
			label: h(),
			order: Q(),
			orderLocked: ae.default(!1),
			tr: de({ "@label": h().nullish() }, []).optional().nullable(),
		}),
		Ba = Y([M(ja), re(h(), ja).transform((e) => Object.values(e))]),
		xm = xe.extend({
			type: $("SingleSelectCard"),
			SingleSelectCard: k({
				randomize: ie().optional().nullable().default(!1),
				selectItems: Ba,
			}),
		}),
		Cm = xe.extend({
			type: $("MultiSelectCard"),
			MultiSelectCard: k({
				randomize: ie().optional().nullable().default(!1),
				min: Y([D(), h()])
					.optional()
					.nullable()
					.transform((e) => {
						if (typeof e > "u" || e === null) return null;
						if (typeof e == "number") return Math.max(0, e);
						const t = Number.parseInt(e, 10);
						return isNaN(t) ? null : Math.max(0, t);
					}),
				max: Y([D(), h()])
					.optional()
					.nullable()
					.transform((e) => {
						if (typeof e > "u" || e === null) return null;
						if (typeof e == "number") return Math.max(1, e);
						const t = Number.parseInt(e, 10);
						return isNaN(t) ? null : Math.max(1, t);
					}),
				selectItems: Ba,
			}),
		});
	k({
		id: E(),
		name: h(),
		label: h().optional().nullable().transform(je),
		orderLocked: ae.default(!1),
		card: k({ id: E() }),
		value: k({ id: E() }),
	});
	const Da = Y([
			wm.transform((e) => ({ ...e, ...e.RecruitmentCard })),
			hm.transform((e) => ({ ...e, ...e.TopTaskCard })),
			mm,
			ym.transform((e) => ({
				...e,
				...e.CompletionCard,
				optionsLayout: lm(e),
			})),
			vm.transform((e) => ({ ...e, ...e.FindabilityCard })),
			bm.transform((e) => ({ ...e, ...e.InputCard })),
			Sm.transform((e) => ({ ...e, ...e.SegmentCard })),
			Cm.transform((e) => ({ ...e, ...e.MultiSelectCard })),
			xm.transform((e) => ({ ...e, ...e.SingleSelectCard })),
			gm.transform((e) => ({ ...e, ...e.LikertCard })),
		]),
		Fa = L([
			"TopTaskCard",
			"MessageCard",
			"CompletionCard",
			"FindabilityCard",
			"InputCard",
			"RecruitmentCard",
			"SegmentCard",
			"MultiSelectCard",
			"SingleSelectCard",
			"LikertCard",
		]),
		rr = [
			"bgColor",
			"textColor",
			"interfaceColor",
			"borderColor",
			"actionColor",
			"actionTextColor",
			"secondaryColor",
			"linkColor",
			"errorColor",
			"warningColor",
			"successColor",
			"mutedTextColor",
			"focusColor",
		],
		or = [
			"minimizedBgColor",
			"minimizedTextColor",
			"minimizedBorderColor",
			"minimizedShadow",
		],
		ir = ["shadowSm", "shadowMd", "shadowLg"],
		zm = [
			"borderStyle",
			"borderWidth",
			"radiusSm",
			"radiusMd",
			"radiusLg",
			"radiusPill",
		],
		Tm = ["focusRingStyle", "focusRingWidth", "focusRingOffset"];
	function be(e, t) {
		return `${e}${t[0].toUpperCase()}${t.slice(1)}`;
	}
	const Im = rr.map((e) => be("light", e)),
		$m = rr.map((e) => be("dark", e)),
		Em = or.map((e) => be("light", e)),
		Rm = or.map((e) => be("dark", e)),
		Mm = ir.map((e) => be("light", e)),
		Pm = ir.map((e) => be("dark", e)),
		Am = [...Im, ...Em, ...Mm],
		Lm = [...$m, ...Rm, ...Pm],
		Om = [...Am, ...Lm],
		Nm = [
			{ key: "bgColor", cssVar: "--skyra-bg-color" },
			{ key: "textColor", cssVar: "--skyra-text-color" },
			{ key: "interfaceColor", cssVar: "--skyra-interface-color" },
			{ key: "borderColor", cssVar: "--skyra-border-color" },
			{ key: "actionColor", cssVar: "--skyra-action-color" },
			{ key: "actionTextColor", cssVar: "--skyra-action-text-color" },
			{ key: "secondaryColor", cssVar: "--skyra-secondary-color" },
			{ key: "linkColor", cssVar: "--skyra-link-color" },
			{ key: "errorColor", cssVar: "--skyra-error-color" },
			{ key: "warningColor", cssVar: "--skyra-warning-color" },
			{ key: "successColor", cssVar: "--skyra-success-color" },
			{ key: "mutedTextColor", cssVar: "--skyra-muted-text-color" },
			{ key: "focusColor", cssVar: "--skyra-focus-color" },
			{ key: "fontSize", cssVar: "--skyra-font-size" },
			{ key: "fontBody", cssVar: "--skyra-font-body" },
			{ key: "fontHeading", cssVar: "--skyra-font-heading" },
			{ key: "borderStyle", cssVar: "--skyra-border-style" },
			{ key: "borderWidth", cssVar: "--skyra-border-width" },
			{ key: "radiusSm", cssVar: "--skyra-radius-sm" },
			{ key: "radiusMd", cssVar: "--skyra-radius-md" },
			{ key: "radiusLg", cssVar: "--skyra-radius-lg" },
			{ key: "radiusPill", cssVar: "--skyra-radius-pill" },
			{ key: "focusRingStyle", cssVar: "--skyra-focus-ring-style" },
			{ key: "focusRingWidth", cssVar: "--skyra-focus-ring-width" },
			{ key: "focusRingOffset", cssVar: "--skyra-focus-ring-offset" },
			{ key: "shadowSm", cssVar: "--skyra-shadow-sm" },
			{ key: "shadowMd", cssVar: "--skyra-shadow-md" },
			{ key: "shadowMd", cssVar: "--skyra-shadow" },
			{ key: "shadowLg", cssVar: "--skyra-shadow-lg" },
			{ key: "minimizedBgColor", cssVar: "--skyra-minimized-bg" },
			{ key: "minimizedTextColor", cssVar: "--skyra-minimized-text" },
			{ key: "minimizedBorderColor", cssVar: "--skyra-minimized-border" },
			{ key: "minimizedShadow", cssVar: "--skyra-minimized-shadow" },
		];
	function Za(e, t) {
		if (!t) return null;
		const n = [];
		for (const { key: r, cssVar: o } of Nm) {
			const i = t[r];
			typeof i != "string" || !i || n.push(`${o}: ${i};`);
		}
		return n.length === 0
			? null
			: `${e} {
  ${n.join(`
  `)}
}`;
	}
	function jm(e) {
		var c, l, d, u, p, f, g, y, b;
		const t = e.light ?? {},
			n = e.dark ?? {},
			r = e.lightMinimized ?? {},
			o = e.darkMinimized ?? {},
			i = e.lightShadow ?? {},
			s = e.darkShadow ?? {},
			a = {
				fontSize: e.fontSize,
				fontBody: e.fontBody ?? e.fontHeading,
				fontHeading: e.fontHeading ?? e.fontBody,
				borderStyle: (c = e.border) == null ? void 0 : c.borderStyle,
				borderWidth: (l = e.border) == null ? void 0 : l.borderWidth,
				radiusSm: (d = e.border) == null ? void 0 : d.radiusSm,
				radiusMd: (u = e.border) == null ? void 0 : u.radiusMd,
				radiusLg: (p = e.border) == null ? void 0 : p.radiusLg,
				radiusPill: (f = e.border) == null ? void 0 : f.radiusPill,
				focusRingStyle: (g = e.focus) == null ? void 0 : g.focusRingStyle,
				focusRingWidth: (y = e.focus) == null ? void 0 : y.focusRingWidth,
				focusRingOffset: (b = e.focus) == null ? void 0 : b.focusRingOffset,
			};
		return {
			light: {
				...a,
				shadowSm: i.shadowSm,
				shadowMd: i.shadowMd,
				shadowLg: i.shadowLg,
				bgColor: t.bgColor,
				textColor: t.textColor,
				interfaceColor: t.interfaceColor,
				borderColor: t.borderColor,
				actionColor: t.actionColor,
				actionTextColor: t.actionTextColor,
				secondaryColor: t.secondaryColor,
				linkColor: t.linkColor,
				errorColor: t.errorColor,
				warningColor: t.warningColor,
				successColor: t.successColor,
				mutedTextColor: t.mutedTextColor,
				focusColor: t.focusColor,
				minimizedBgColor: r.minimizedBgColor,
				minimizedTextColor: r.minimizedTextColor,
				minimizedBorderColor: r.minimizedBorderColor,
				minimizedShadow: r.minimizedShadow,
			},
			dark: {
				...a,
				shadowSm: s.shadowSm,
				shadowMd: s.shadowMd,
				shadowLg: s.shadowLg,
				bgColor: n.bgColor,
				textColor: n.textColor,
				interfaceColor: n.interfaceColor,
				borderColor: n.borderColor,
				actionColor: n.actionColor,
				actionTextColor: n.actionTextColor,
				secondaryColor: n.secondaryColor,
				linkColor: n.linkColor,
				errorColor: n.errorColor,
				warningColor: n.warningColor,
				successColor: n.successColor,
				mutedTextColor: n.mutedTextColor,
				focusColor: n.focusColor,
				minimizedBgColor: o.minimizedBgColor,
				minimizedTextColor: o.minimizedTextColor,
				minimizedBorderColor: o.minimizedBorderColor,
				minimizedShadow: o.minimizedShadow,
			},
		};
	}
	function Ha(e, t) {
		const { themeMode: n, selector: r = ":host" } = t ?? {},
			{ light: o, dark: i } = jm(e),
			s = Za(r, o),
			a = Za(r, i);
		return n === "Dark"
			? a
			: n === "Auto" && s && a
				? `${s}
@media (prefers-color-scheme: dark) {
${a}
}`
				: (s ?? a);
	}
	const It = {};
	for (const e of rr)
		(It[be("light", e)] = { group: "light", field: e }),
			(It[be("dark", e)] = { group: "dark", field: e });
	for (const e of or)
		(It[be("light", e)] = { group: "lightMinimized", field: e }),
			(It[be("dark", e)] = { group: "darkMinimized", field: e });
	for (const e of ir)
		(It[be("light", e)] = { group: "lightShadow", field: e }),
			(It[be("dark", e)] = { group: "darkShadow", field: e });
	const Bm = [
			{
				id: "skyra/library/skyra",
				version: "1.0.0",
				name: "Skyra",
				slug: "skyra",
				description:
					"Airy gradients and cool contrast for modern product experiences.",
				tags: ["gradient", "modern", "cool"],
				fontSize: "16px",
				fontBody:
					'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
				fontHeading:
					'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
				border: {
					borderStyle: "solid",
					borderWidth: "1px",
					radiusSm: "4px",
					radiusMd: "4px",
					radiusLg: "10px",
					radiusPill: "999px",
				},
				focus: {
					focusRingStyle: "solid",
					focusRingWidth: "2px",
					focusRingOffset: "2px",
				},
				lightShadow: {
					shadowSm:
						"0 2px 8px rgba(15, 23, 42, 0.06), 0 8px 24px -6px rgba(76, 132, 255, 0.08)",
					shadowMd:
						"0 3px 8px rgba(15, 18, 114, 0.12), 0 0 32px rgba(36, 204, 255, 0.1), 0 0 80px rgba(154, 154, 154, 0.18)",
					shadowLg:
						"0 10px 24px rgba(15, 18, 114, 0.16), 0 0 42px rgba(36, 204, 255, 0.12), 0 0 96px rgba(154, 154, 154, 0.2)",
				},
				darkShadow: {
					shadowSm: "0 2px 8px rgba(0, 0, 0, 0.2)",
					shadowMd:
						"0 10px 28px rgba(0, 0, 0, 0.35), 0 0 34px rgba(84, 181, 255, 0.12)",
					shadowLg:
						"0 18px 42px rgba(0, 0, 0, 0.44), 0 0 54px rgba(84, 181, 255, 0.16)",
				},
				light: {
					bgColor:
						"radial-gradient(circle at 0% 0%, #d9f0ff 0%, #f5fbff 45%, #eef8ff 100%)",
					textColor: "#012a53",
					interfaceColor: "#25acb1",
					borderColor: "#315386",
					actionColor: "#081f4f",
					actionTextColor: "#ffffff",
					secondaryColor: "#ffffff",
					linkColor: "#012a53",
					errorColor: "#b42318",
					warningColor: "#b45309",
					successColor: "#166534",
					mutedTextColor: "#315386",
					focusColor: "#081f4f",
				},
				dark: {
					bgColor:
						"linear-gradient(145deg, #071321 0%, #0b1d34 55%, #0f2a4a 100%)",
					textColor: "#e6f3ff",
					interfaceColor: "#7ea8d1",
					borderColor: "#264566",
					actionColor: "#d7f0ff",
					actionTextColor: "#071321",
					secondaryColor: "#17314f",
					linkColor: "#80cbff",
					errorColor: "#ef4444",
					warningColor: "#f59e0b",
					successColor: "#34d399",
					mutedTextColor: "#9ab7d4",
					focusColor: "#7fc9ff",
				},
				lightMinimized: {
					minimizedBgColor: "#081f4f",
					minimizedTextColor: "#ffffff",
					minimizedBorderColor: "#081f4f",
					minimizedShadow:
						"inset 0 2px 0 rgba(255, 255, 255, 0.08), 0 6px 16px rgba(0, 95, 243, 0.15), 0 4px 10px rgba(3, 24, 74, 0.1), 0 0 24px rgba(0, 95, 243, 0.15)",
				},
				darkMinimized: {
					minimizedBgColor: "#10263f",
					minimizedTextColor: "#e6f3ff",
					minimizedBorderColor: "#264566",
					minimizedShadow: "0 10px 24px rgba(0, 0, 0, 0.35)",
				},
			},
			{
				id: "skyra/library/linen-editorial",
				version: "1.0.0",
				name: "Linen Editorial",
				slug: "linen-editorial",
				description:
					"Warm neutral tones and serif-forward typography for content-heavy surveys.",
				tags: ["editorial", "warm", "serif"],
				fontSize: "17px",
				fontBody: "'Source Sans 3', sans-serif",
				fontHeading: "'Merriweather', serif",
				border: {
					borderStyle: "solid",
					borderWidth: "1px",
					radiusSm: "6px",
					radiusMd: "10px",
					radiusLg: "12px",
					radiusPill: "999px",
				},
				focus: {
					focusRingStyle: "solid",
					focusRingWidth: "2px",
					focusRingOffset: "2px",
				},
				lightShadow: {
					shadowSm: "0 4px 12px rgba(60, 40, 20, 0.08)",
					shadowMd: "0 8px 20px rgba(60, 40, 20, 0.14)",
					shadowLg: "0 14px 28px rgba(60, 40, 20, 0.2)",
				},
				darkShadow: {
					shadowSm: "0 4px 12px rgba(60, 40, 20, 0.08)",
					shadowMd: "0 8px 20px rgba(60, 40, 20, 0.14)",
					shadowLg: "0 14px 28px rgba(60, 40, 20, 0.2)",
				},
				light: {
					bgColor: "linear-gradient(180deg, #faf6ee 0%, #f3e9d8 100%)",
					textColor: "#2b1f12",
					interfaceColor: "#7a5f44",
					borderColor: "#dac8ad",
					actionColor: "#8a5a2b",
					actionTextColor: "#fff9f1",
					secondaryColor: "#efe2cd",
					linkColor: "#6f4722",
					errorColor: "#b33a25",
					warningColor: "#9a6117",
					successColor: "#3f6c2a",
					mutedTextColor: "#7d6248",
					focusColor: "#a1682f",
				},
				dark: {
					bgColor: "linear-gradient(170deg, #20160f 0%, #2f2117 100%)",
					textColor: "#f2e5d2",
					interfaceColor: "#b89473",
					borderColor: "#5a4331",
					actionColor: "#d29a67",
					actionTextColor: "#2b1c10",
					secondaryColor: "#4a3423",
					linkColor: "#f1be89",
					errorColor: "#f87171",
					warningColor: "#fbbf24",
					successColor: "#86efac",
					mutedTextColor: "#c9ae92",
					focusColor: "#e7b684",
				},
				lightMinimized: {
					minimizedBgColor: "#fffdf8",
					minimizedTextColor: "#2b1f12",
					minimizedBorderColor: "#dac8ad",
					minimizedShadow: "0 8px 18px rgba(60, 40, 20, 0.18)",
				},
				darkMinimized: {
					minimizedBgColor: "#2d2016",
					minimizedTextColor: "#f2e5d2",
					minimizedBorderColor: "#5a4331",
					minimizedShadow: "0 10px 22px rgba(0, 0, 0, 0.34)",
				},
			},
			{
				id: "skyra/library/night-operator",
				version: "1.0.0",
				name: "Night Operator",
				slug: "night-operator",
				description:
					"Dark command-center styling with electric accents for high-focus workflows.",
				tags: ["dark", "high-contrast", "operations"],
				fontSize: "15px",
				fontBody: "'IBM Plex Mono', monospace",
				fontHeading: "'Rajdhani', sans-serif",
				border: {
					borderStyle: "solid",
					borderWidth: "1px",
					radiusSm: "4px",
					radiusMd: "8px",
					radiusLg: "12px",
					radiusPill: "999px",
				},
				focus: {
					focusRingStyle: "solid",
					focusRingWidth: "2px",
					focusRingOffset: "2px",
				},
				lightShadow: {
					shadowSm: "0 4px 12px rgba(0, 0, 0, 0.4)",
					shadowMd: "0 10px 24px rgba(0, 0, 0, 0.5)",
					shadowLg: "0 16px 38px rgba(0, 0, 0, 0.6)",
				},
				darkShadow: {
					shadowSm: "0 4px 12px rgba(0, 0, 0, 0.4)",
					shadowMd: "0 10px 24px rgba(0, 0, 0, 0.5)",
					shadowLg: "0 16px 38px rgba(0, 0, 0, 0.6)",
				},
				light: {
					bgColor: "linear-gradient(160deg, #f4f8fb 0%, #e6edf3 100%)",
					textColor: "#0d1b2a",
					interfaceColor: "#5a738d",
					borderColor: "#b7c8d8",
					actionColor: "#0a84ff",
					actionTextColor: "#000000",
					secondaryColor: "#dce8f2",
					linkColor: "#0468c8",
					errorColor: "#d14343",
					warningColor: "#b7721f",
					successColor: "#2d8f5a",
					mutedTextColor: "#4b6177",
					focusColor: "#0a84ff",
				},
				dark: {
					bgColor:
						"radial-gradient(circle at 15% 0%, #102033 0%, #0a0f17 55%, #070b12 100%)",
					textColor: "#d9e7f5",
					interfaceColor: "#7f9dbb",
					borderColor: "#2a394c",
					actionColor: "#2bd4ff",
					actionTextColor: "#05131f",
					secondaryColor: "#182536",
					linkColor: "#66e3ff",
					errorColor: "#ff6b6b",
					warningColor: "#ffd166",
					successColor: "#48e5a5",
					mutedTextColor: "#8ba4bf",
					focusColor: "#6ce6ff",
				},
				lightMinimized: {
					minimizedBgColor: "#ffffff",
					minimizedTextColor: "#0d1b2a",
					minimizedBorderColor: "#b7c8d8",
					minimizedShadow: "0 8px 20px rgba(2, 12, 27, 0.22)",
				},
				darkMinimized: {
					minimizedBgColor: "#121a26",
					minimizedTextColor: "#d9e7f5",
					minimizedBorderColor: "#2a394c",
					minimizedShadow: "0 12px 24px rgba(0, 0, 0, 0.45)",
				},
			},
			{
				id: "skyra/library/citrus-pop",
				version: "1.0.0",
				name: "Citrus Pop",
				slug: "citrus-pop",
				description:
					"Energetic citrus accents and crisp neutrals for upbeat customer touchpoints.",
				tags: ["vibrant", "friendly", "consumer"],
				fontSize: "16px",
				fontBody: "'Nunito', sans-serif",
				fontHeading: "'Cabin Condensed', sans-serif",
				border: {
					borderStyle: "solid",
					borderWidth: "1px",
					radiusSm: "10px",
					radiusMd: "14px",
					radiusLg: "18px",
					radiusPill: "999px",
				},
				focus: {
					focusRingStyle: "solid",
					focusRingWidth: "2px",
					focusRingOffset: "2px",
				},
				lightShadow: {
					shadowSm: "0 6px 14px rgba(67, 31, 5, 0.08)",
					shadowMd: "0 10px 22px rgba(67, 31, 5, 0.14)",
					shadowLg: "0 14px 30px rgba(67, 31, 5, 0.2)",
				},
				darkShadow: {
					shadowSm: "0 6px 14px rgba(67, 31, 5, 0.08)",
					shadowMd: "0 10px 22px rgba(67, 31, 5, 0.14)",
					shadowLg: "0 14px 30px rgba(67, 31, 5, 0.2)",
				},
				light: {
					bgColor: "linear-gradient(165deg, #fffef7 0%, #fff7d6 100%)",
					textColor: "#2f220b",
					interfaceColor: "#8c6b2e",
					borderColor: "#f0d79d",
					actionColor: "#ea7b13",
					actionTextColor: "#000000",
					secondaryColor: "#ffe9b8",
					linkColor: "#c76207",
					errorColor: "#c53030",
					warningColor: "#b7791f",
					successColor: "#2f855a",
					mutedTextColor: "#7b603a",
					focusColor: "#f08a1f",
				},
				dark: {
					bgColor: "linear-gradient(150deg, #1d1408 0%, #2f1e0b 100%)",
					textColor: "#ffecc9",
					interfaceColor: "#d3a96e",
					borderColor: "#6a4923",
					actionColor: "#ffb13b",
					actionTextColor: "#2a1704",
					secondaryColor: "#4e3315",
					linkColor: "#ffd08a",
					errorColor: "#fc8181",
					warningColor: "#f6ad55",
					successColor: "#68d391",
					mutedTextColor: "#d8b98d",
					focusColor: "#ffc56a",
				},
				lightMinimized: {
					minimizedBgColor: "#ffffff",
					minimizedTextColor: "#2f220b",
					minimizedBorderColor: "#f0d79d",
					minimizedShadow: "0 8px 20px rgba(67, 31, 5, 0.2)",
				},
				darkMinimized: {
					minimizedBgColor: "#33220f",
					minimizedTextColor: "#ffecc9",
					minimizedBorderColor: "#6a4923",
					minimizedShadow: "0 12px 24px rgba(0, 0, 0, 0.4)",
				},
			},
			{
				id: "skyra/library/island-carnival",
				version: "1.0.0",
				name: "Island Carnival",
				slug: "island-carnival",
				description:
					"Summer party energy with tropical gradients, bright accents, and readable contrast.",
				tags: ["summer", "tropical", "vibrant", "party"],
				fontSize: "16px",
				fontBody: "'Nunito Sans', sans-serif",
				fontHeading: "'Bebas Neue', sans-serif",
				border: {
					borderStyle: "solid",
					borderWidth: "1px",
					radiusSm: "10px",
					radiusMd: "14px",
					radiusLg: "18px",
					radiusPill: "999px",
				},
				focus: {
					focusRingStyle: "solid",
					focusRingWidth: "2px",
					focusRingOffset: "2px",
				},
				lightShadow: {
					shadowSm: "0 8px 18px rgba(82, 18, 10, 0.12)",
					shadowMd: "0 14px 30px rgba(82, 18, 10, 0.2)",
					shadowLg: "0 22px 44px rgba(82, 18, 10, 0.28)",
				},
				darkShadow: {
					shadowSm: "0 8px 18px rgba(82, 18, 10, 0.12)",
					shadowMd: "0 14px 30px rgba(82, 18, 10, 0.2)",
					shadowLg: "0 22px 44px rgba(82, 18, 10, 0.28)",
				},
				light: {
					bgColor:
						"linear-gradient(140deg, #ffe47a 0%, #ffa13d 32%, #ff5f6d 66%, #2bc0e4 100%)",
					textColor: "#2f1a0f",
					interfaceColor: "#7d4c2a",
					borderColor: "#efc77d",
					actionColor: "#008d8a",
					actionTextColor: "#000000",
					secondaryColor: "#ffe4ad",
					linkColor: "#00706e",
					errorColor: "#b52b2b",
					warningColor: "#9d5a00",
					successColor: "#1f7f42",
					mutedTextColor: "#6d4d3b",
					focusColor: "#00a7a3",
				},
				dark: {
					bgColor:
						"linear-gradient(145deg, #1a0e12 0%, #3a1422 28%, #55201e 62%, #103244 100%)",
					textColor: "#ffeed1",
					interfaceColor: "#c9988e",
					borderColor: "#70413f",
					actionColor: "#35d6c0",
					actionTextColor: "#05211f",
					secondaryColor: "#4b2529",
					linkColor: "#7eeff0",
					errorColor: "#ff7b7b",
					warningColor: "#ffd166",
					successColor: "#6be6a3",
					mutedTextColor: "#d8b7a1",
					focusColor: "#67ece8",
				},
				lightMinimized: {
					minimizedBgColor: "#fffaf1",
					minimizedTextColor: "#2f1a0f",
					minimizedBorderColor: "#efc77d",
					minimizedShadow: "0 10px 22px rgba(96, 33, 13, 0.24)",
				},
				darkMinimized: {
					minimizedBgColor: "#2a161a",
					minimizedTextColor: "#ffeed1",
					minimizedBorderColor: "#70413f",
					minimizedShadow: "0 12px 26px rgba(0, 0, 0, 0.4)",
				},
			},
			{
				id: "skyra/library/slate-enterprise",
				version: "1.0.0",
				name: "Slate Enterprise",
				slug: "slate-enterprise",
				description:
					"Professional blue-slate system optimized for dashboards and B2B workflows.",
				tags: ["enterprise", "neutral", "b2b"],
				fontSize: "16px",
				fontBody: "'Public Sans', sans-serif",
				fontHeading: "'Manrope', sans-serif",
				border: {
					borderStyle: "solid",
					borderWidth: "1px",
					radiusSm: "6px",
					radiusMd: "8px",
					radiusLg: "12px",
					radiusPill: "999px",
				},
				focus: {
					focusRingStyle: "solid",
					focusRingWidth: "2px",
					focusRingOffset: "1px",
				},
				lightShadow: {
					shadowSm: "0 2px 8px rgba(15, 23, 42, 0.06)",
					shadowMd: "0 6px 18px rgba(15, 23, 42, 0.12)",
					shadowLg: "0 10px 28px rgba(15, 23, 42, 0.16)",
				},
				darkShadow: {
					shadowSm: "0 2px 8px rgba(15, 23, 42, 0.06)",
					shadowMd: "0 6px 18px rgba(15, 23, 42, 0.12)",
					shadowLg: "0 10px 28px rgba(15, 23, 42, 0.16)",
				},
				light: {
					bgColor: "linear-gradient(180deg, #f7f9fc 0%, #edf2f8 100%)",
					textColor: "#13243b",
					interfaceColor: "#5e7694",
					borderColor: "#c7d5e8",
					actionColor: "#1f5fbf",
					actionTextColor: "#ffffff",
					secondaryColor: "#dfe8f5",
					linkColor: "#164ea0",
					errorColor: "#c93b3b",
					warningColor: "#b7791f",
					successColor: "#2f855a",
					mutedTextColor: "#4e637f",
					focusColor: "#246ad1",
				},
				dark: {
					bgColor: "linear-gradient(165deg, #0f1724 0%, #152237 100%)",
					textColor: "#dbe7f7",
					interfaceColor: "#94acc9",
					borderColor: "#334861",
					actionColor: "#7db1ff",
					actionTextColor: "#0f1d31",
					secondaryColor: "#25364e",
					linkColor: "#a6c9ff",
					errorColor: "#f87171",
					warningColor: "#f6ad55",
					successColor: "#68d391",
					mutedTextColor: "#9fb4ce",
					focusColor: "#9cc3ff",
				},
				lightMinimized: {
					minimizedBgColor: "#ffffff",
					minimizedTextColor: "#13243b",
					minimizedBorderColor: "#c7d5e8",
					minimizedShadow: "0 8px 18px rgba(15, 23, 42, 0.16)",
				},
				darkMinimized: {
					minimizedBgColor: "#1a273a",
					minimizedTextColor: "#dbe7f7",
					minimizedBorderColor: "#334861",
					minimizedShadow: "0 10px 22px rgba(0, 0, 0, 0.36)",
				},
			},
		],
		Dm = {
			bgColor: {
				key: "bgColor",
				label: "Background",
				category: "surface",
				valueKind: "background",
				status: "used",
				description: "Primary background value for rendered survey surfaces.",
				semanticUsage: {
					fullPage:
						"Page and card backgrounds as authored by the theme background token.",
					survey:
						"Widget container and surface backgrounds as authored by the theme background token.",
				},
				helpText:
					"Background value for survey surfaces. Supports solid colors and gradients.",
			},
			textColor: {
				key: "textColor",
				label: "Text",
				category: "content",
				valueKind: "color",
				status: "used",
				description: "Primary readable text color for content and labels.",
				semanticUsage: {
					fullPage: "Body copy, labels, and default text foreground.",
					survey: "Widget body text and default control label foreground.",
				},
				helpText: "Primary readable text color for survey content.",
			},
			interfaceColor: {
				key: "interfaceColor",
				label: "Interface",
				category: "content",
				valueKind: "color",
				status: "used",
				description: "Neutral UI color for supportive interface affordances.",
				semanticUsage: {
					fullPage: "Muted text and neutral border/interface accents.",
					survey:
						"Neutral border tones for inputs, toggles, and helper UI framing.",
				},
				helpText: "Neutral interface color for borders and muted UI text.",
			},
			borderColor: {
				key: "borderColor",
				label: "Border",
				category: "surface",
				valueKind: "color",
				status: "used",
				description: "Default border color for survey containers and controls.",
				semanticUsage: {
					fullPage: "Primary card and option border color.",
					survey: "Expanded widget container border and border fallback.",
				},
				helpText: "Default border color for cards and containers.",
			},
			actionColor: {
				key: "actionColor",
				label: "Action",
				category: "interaction",
				valueKind: "color",
				status: "used",
				description:
					"Primary interactive accent for actions and selected states.",
				semanticUsage: {
					fullPage:
						"Buttons, active controls, focus accents, and visual effects.",
					survey: "Buttons, selected options, hover/focus accents, and rings.",
				},
				helpText: "Primary action color for buttons and selected states.",
			},
			actionTextColor: {
				key: "actionTextColor",
				label: "Action text",
				category: "interaction",
				valueKind: "color",
				status: "used",
				description:
					"Foreground text color shown on action-colored backgrounds.",
				semanticUsage: {
					fullPage: "Button and selected-control text foreground.",
					survey: "Primary action label foreground text.",
				},
				helpText: "Text color on top of action backgrounds.",
			},
			secondaryColor: {
				key: "secondaryColor",
				label: "Secondary",
				category: "surface",
				valueKind: "color",
				status: "used",
				description:
					"Secondary surface or accent tone for non-primary emphasis.",
				semanticUsage: {
					fullPage:
						"Secondary surfaces such as progress track/background accents.",
					survey:
						"Theme palette tone available for secondary surfaces and chips.",
				},
				helpText: "Secondary surface/accent color.",
			},
			linkColor: {
				key: "linkColor",
				label: "Link",
				category: "content",
				valueKind: "color",
				status: "used",
				description: "Hyperlink foreground color.",
				semanticUsage: {
					fullPage: "Anchor/link text and effect palette input.",
					survey: "Inline link text and link-variant controls.",
				},
				helpText: "Color used for links and link-like controls.",
			},
			errorColor: {
				key: "errorColor",
				label: "Error",
				category: "feedback",
				valueKind: "color",
				status: "used",
				description: "Negative/error feedback color.",
				semanticUsage: {
					fullPage: "Validation errors, required markers, and invalid states.",
					survey: "Validation text, error borders, and invalid control states.",
				},
				helpText: "Color for errors and invalid state feedback.",
			},
			warningColor: {
				key: "warningColor",
				label: "Warning",
				category: "feedback",
				valueKind: "color",
				status: "used",
				description: "Warning or caution feedback color.",
				semanticUsage: {
					fullPage: "Soft validation warnings such as nearing limits.",
					survey: "Warning semantic token for cautionary messages.",
				},
				helpText: "Color for warning and caution states.",
			},
			successColor: {
				key: "successColor",
				label: "Success",
				category: "feedback",
				valueKind: "color",
				status: "unused",
				description: "Success or positive feedback color.",
				semanticUsage: {
					fullPage: "Defined token, currently not consumed by renderer styles.",
					survey: "Not currently consumed by renderer styles.",
				},
				helpText: "Reserved for success feedback states.",
				notes:
					"Defined in theme model but currently not active in renderer styling.",
			},
			mutedTextColor: {
				key: "mutedTextColor",
				label: "Muted text",
				category: "content",
				valueKind: "color",
				status: "unused",
				description: "Secondary/de-emphasized text color.",
				semanticUsage: {
					fullPage: "Defined token, currently not consumed directly.",
					survey: "Defined token, currently not consumed directly.",
				},
				helpText: "Reserved for secondary and de-emphasized text.",
				notes:
					"Current renderers mostly use interfaceColor for muted text semantics.",
			},
			focusColor: {
				key: "focusColor",
				label: "Focus",
				category: "focus",
				valueKind: "color",
				status: "partial",
				description:
					"Focus indicator color token for accessible keyboard focus.",
				semanticUsage: {
					fullPage: "Used by explicit focus ring/outline tokenized styles.",
					survey:
						"Defined token, but most focus treatments derive from action color classes.",
				},
				helpText: "Color used by focus outlines and rings when applicable.",
			},
			minimizedBgColor: {
				key: "minimizedBgColor",
				label: "Minimized background",
				category: "minimized",
				valueKind: "color",
				status: "partial",
				description: "Surface color for minimized widget state.",
				semanticUsage: {
					fullPage: "Not used.",
					survey: "Background color for minimized/collapsed widget container.",
				},
				helpText: "Background for minimized widget state.",
			},
			minimizedTextColor: {
				key: "minimizedTextColor",
				label: "Minimized text",
				category: "minimized",
				valueKind: "color",
				status: "partial",
				description: "Foreground text color for minimized widget state.",
				semanticUsage: {
					fullPage: "Not used.",
					survey: "Text/icon color for minimized widget state.",
				},
				helpText: "Foreground text color for minimized widget state.",
			},
			minimizedBorderColor: {
				key: "minimizedBorderColor",
				label: "Minimized border",
				category: "minimized",
				valueKind: "color",
				status: "partial",
				description: "Border color for minimized widget state.",
				semanticUsage: {
					fullPage: "Not used.",
					survey: "Border color for minimized widget container.",
				},
				helpText: "Border color for minimized widget state.",
			},
			minimizedShadow: {
				key: "minimizedShadow",
				label: "Minimized shadow",
				category: "minimized",
				valueKind: "shadow",
				status: "partial",
				description: "Shadow/elevation for minimized widget state.",
				semanticUsage: {
					fullPage: "Not used.",
					survey: "Shadow for minimized widget container.",
				},
				helpText: "Shadow used by minimized widget state.",
			},
			fontSize: {
				key: "fontSize",
				label: "Font size",
				category: "typography",
				valueKind: "length",
				status: "used",
				description: "Global base font size applied across renderers.",
				semanticUsage: {
					fullPage: "Base font sizing for survey typography.",
					survey: "Base font sizing for widget typography.",
				},
				helpText: "Base font size for survey text.",
			},
			fontBody: {
				key: "fontBody",
				label: "Body font",
				category: "typography",
				valueKind: "font",
				status: "used",
				description: "Body/content font family token.",
				semanticUsage: {
					fullPage: "Primary font family for body copy.",
					survey: "Primary font family for widget body copy.",
				},
				helpText: "Font family for body content.",
			},
			fontHeading: {
				key: "fontHeading",
				label: "Heading font",
				category: "typography",
				valueKind: "font",
				status: "used",
				description: "Heading/title font family token.",
				semanticUsage: {
					fullPage: "Font family for headings and emphasized labels.",
					survey: "Font family for headings and emphasized labels.",
				},
				helpText: "Font family for headings.",
			},
			borderStyle: {
				key: "borderStyle",
				label: "Border style",
				category: "border",
				valueKind: "select",
				status: "used",
				description: "Global border style for tokenized controls and surfaces.",
				semanticUsage: {
					fullPage: "Border style for cards, options, and controls.",
					survey: "Border style for widget controls and containers.",
				},
				helpText: "Style used for borders (solid, dashed, etc.).",
			},
			borderWidth: {
				key: "borderWidth",
				label: "Border width",
				category: "border",
				valueKind: "length",
				status: "used",
				description: "Global border thickness token.",
				semanticUsage: {
					fullPage: "Border thickness across cards and controls.",
					survey: "Border thickness across widget controls and containers.",
				},
				helpText: "Thickness used for borders.",
			},
			radiusSm: {
				key: "radiusSm",
				label: "Radius sm",
				category: "border",
				valueKind: "length",
				status: "partial",
				description: "Small corner radius token.",
				semanticUsage: {
					fullPage: "Limited usage for small-radius components.",
					survey: "Used by minimized widget container shape.",
				},
				helpText: "Small corner radius.",
			},
			radiusMd: {
				key: "radiusMd",
				label: "Radius md",
				category: "border",
				valueKind: "length",
				status: "partial",
				description: "Medium corner radius token.",
				semanticUsage: {
					fullPage: "Used by medium-radius controls/components.",
					survey: "Used by selected widget controls.",
				},
				helpText: "Medium corner radius.",
			},
			radiusLg: {
				key: "radiusLg",
				label: "Radius lg",
				category: "border",
				valueKind: "length",
				status: "used",
				description: "Large corner radius token.",
				semanticUsage: {
					fullPage: "Primary radius for cards/options/inputs.",
					survey: "Primary radius for expanded widget container and cards.",
				},
				helpText: "Large corner radius for primary surfaces.",
			},
			radiusPill: {
				key: "radiusPill",
				label: "Radius pill",
				category: "border",
				valueKind: "length",
				status: "used",
				description: "Pill corner radius token for rounded controls.",
				semanticUsage: {
					fullPage: "Rounded pill controls and chips.",
					survey: "Rounded pill controls and toggles.",
				},
				helpText: "Full rounded radius for pill-shaped controls.",
			},
			focusRingStyle: {
				key: "focusRingStyle",
				label: "Focus ring style",
				category: "focus",
				valueKind: "select",
				status: "used",
				description: "Style of keyboard focus ring.",
				semanticUsage: {
					fullPage: "Determines focus outline style.",
					survey:
						"Determines widget focus ring style where tokenized focus is used.",
				},
				helpText: "Style used by keyboard focus ring.",
			},
			focusRingWidth: {
				key: "focusRingWidth",
				label: "Focus ring width",
				category: "focus",
				valueKind: "length",
				status: "used",
				description: "Thickness of keyboard focus ring.",
				semanticUsage: {
					fullPage: "Controls focus outline thickness.",
					survey: "Controls tokenized focus ring thickness.",
				},
				helpText: "Thickness of focus ring.",
			},
			focusRingOffset: {
				key: "focusRingOffset",
				label: "Focus ring offset",
				category: "focus",
				valueKind: "length",
				status: "used",
				description: "Offset between element edge and focus ring.",
				semanticUsage: {
					fullPage: "Controls focus outline offset distance.",
					survey: "Controls tokenized focus ring offset.",
				},
				helpText: "Distance between component and focus ring.",
			},
			shadowSm: {
				key: "shadowSm",
				label: "Shadow sm",
				category: "shadow",
				valueKind: "shadow",
				status: "partial",
				description:
					"Subtle elevation shadow token for future secondary surfaces.",
				semanticUsage: {
					fullPage: "Reserved for future low-emphasis surfaces.",
					survey: "Reserved for future low-emphasis surfaces.",
				},
				helpText: "Subtle shadow reserved for future use cases.",
			},
			shadowMd: {
				key: "shadowMd",
				label: "Shadow md",
				category: "shadow",
				valueKind: "shadow",
				status: "used",
				description: "Medium elevation shadow token.",
				semanticUsage: {
					fullPage: "Standard card and container elevation shadow.",
					survey: "Expanded widget container elevation shadow.",
				},
				helpText: "Default elevation shadow for main survey surfaces.",
			},
			shadowLg: {
				key: "shadowLg",
				label: "Shadow lg",
				category: "shadow",
				valueKind: "shadow",
				status: "partial",
				description: "High-emphasis elevation shadow token for future use.",
				semanticUsage: {
					fullPage: "Reserved for future high-emphasis surfaces.",
					survey: "Reserved for future high-emphasis surfaces.",
				},
				helpText: "High-emphasis shadow reserved for future use cases.",
			},
		};
	function Fm(e) {
		return Dm[e];
	}
	const Zm = qs();
	function fe(e) {
		const t = Fm(e);
		return h()
			.nullable()
			.optional()
			.register(Zm, t)
			.meta({ title: t.label, description: t.helpText });
	}
	function fn(e) {
		const t = Object.fromEntries(e.map((n) => [n, fe(n)]));
		return k(t);
	}
	const Hm = [
			"borderStyle",
			"borderWidth",
			"radiusSm",
			"radiusMd",
			"radiusLg",
			"radiusPill",
		],
		Um = ["focusRingStyle", "focusRingWidth", "focusRingOffset"],
		Vm = ir,
		we = ["fontSize", "fontBody", "fontHeading"];
	function Wm(e) {
		return typeof e == "boolean"
			? e
			: e === "false" || e === "0" || e === "" || e === null
				? !1
				: !!e;
	}
	const vo = Y([R(), h()]).optional().transform(Wm),
		$t = L(["Auto", "Light", "Dark"]),
		Et = fn(rr),
		Rt = fn(or),
		bo = fn(Hm),
		wo = fn(Um),
		Mt = fn(Vm),
		Ua = k({
			name: h().min(1).max(120),
			slug: h().min(1).max(120),
			description: h().max(4e3).nullable().optional(),
			archived: vo.optional(),
			sourceId: h().max(200).nullable().optional(),
			sourceVersion: h().max(64).nullable().optional(),
			installedFrom: h().max(32).nullable().optional(),
			fontSize: fe(we[0]),
			fontBody: fe(we[1]),
			fontHeading: fe(we[2]),
			border: bo.partial().optional(),
			focus: wo.partial().optional(),
			lightShadow: Mt.partial().optional(),
			darkShadow: Mt.partial().optional(),
			light: Et.partial().optional(),
			dark: Et.partial().optional(),
			lightMinimized: Rt.partial().optional(),
			darkMinimized: Rt.partial().optional(),
		});
	Ua.extend({
		slug: h().min(1).max(120).optional(),
		archived: vo.optional().default(!1),
		installedFrom: L(["catalog", "import", "manual"]).nullable().optional(),
	}),
		Ua.partial().extend({
			id: h().uuid().optional(),
			archived: vo.optional(),
			installedFrom: L(["catalog", "import", "manual"]).nullable().optional(),
		}),
		k({
			id: h().min(1).max(200),
			version: h().min(1).max(64),
			name: h().min(1).max(120),
			slug: h().min(1).max(120),
			description: h().max(4e3).nullable().optional(),
			tags: M(h().min(1).max(40)).max(30).optional(),
			fontSize: fe(we[0]),
			fontBody: fe(we[1]),
			fontHeading: fe(we[2]),
			border: bo.partial().optional(),
			focus: wo.partial().optional(),
			lightShadow: Mt.partial().optional(),
			darkShadow: Mt.partial().optional(),
			light: Et.partial().optional(),
			dark: Et.partial().optional(),
			lightMinimized: Rt.partial().optional(),
			darkMinimized: Rt.partial().optional(),
		});
	const qm = k({
			id: h().uuid(),
			name: h(),
			slug: h(),
			description: h().nullable().optional(),
			archived: R().optional(),
			sourceId: h().nullable().optional(),
			sourceVersion: h().nullable().optional(),
			installedFrom: h().nullable().optional(),
			fontSize: fe(we[0]),
			fontBody: fe(we[1]),
			fontHeading: fe(we[2]),
			border: bo.partial().optional(),
			focus: wo.partial().optional(),
			lightShadow: Mt.partial().optional(),
			darkShadow: Mt.partial().optional(),
			light: Et.partial().optional(),
			dark: Et.partial().optional(),
			lightMinimized: Rt.partial().optional(),
			darkMinimized: Rt.partial().optional(),
		}),
		Jm = Object.fromEntries(Om.map((e) => [e, h().nullable().optional()])),
		Km = Object.fromEntries(
			[...zm, ...Tm].map((e) => [e, h().nullable().optional()]),
		),
		Gm = k({
			id: h().uuid(),
			name: h(),
			slug: h(),
			description: h().nullable().optional(),
			archived: R().optional(),
			sourceId: h().nullable().optional(),
			sourceVersion: h().nullable().optional(),
			installedFrom: h().nullable().optional(),
			fontSize: fe(we[0]),
			fontBody: fe(we[1]),
			fontHeading: fe(we[2]),
			...Km,
			...Jm,
		}),
		hn = re(h(), h()).nullable().optional(),
		_o = Y([qm, Gm]),
		sr = L(["AllAtOnce", "OneAtATime"]),
		gn = L(["Public", "InvitationOnly", "Password"]),
		Ym = L(["Visible", "Hidden", "Published"]).transform((e) =>
			e === "Published" ? "Visible" : e,
		),
		Xm = L([
			"Pending",
			"Sent",
			"Opened",
			"Started",
			"Completed",
			"Bounced",
			"Expired",
		]),
		ar = L(["Bar", "Percentage", "Fraction", "None"]),
		Xe = L(["End", "Restart", "Redirect"]),
		Qe = L([
			"below-title",
			"above-title",
			"split-left",
			"split-right",
			"split-top",
			"background",
		]),
		lr = L(["cover", "contain"]),
		ko = k({
			imageLayout: Qe.nullable().optional(),
			imageLayoutMobile: Qe.nullable().optional(),
			imageBrightness: D().min(0).max(1).nullable().optional(),
			imageFit: lr.nullable().optional(),
		}),
		Va = L([
			"confetti",
			"fireworks",
			"emojis",
			"balloons",
			"sparkles",
			"snow",
			"bubbles",
			"stars",
		]),
		Wa = L(["low", "medium", "high"]),
		qa = L(["burst", "continuous", "burst-then-ambient"]),
		Ja = k({
			pageEffect: Va.nullable().optional(),
			pageEffectIntensity: Wa.nullable().optional(),
			pageEffectBehavior: qa.nullable().optional(),
			pageEffectEmojis: M(h()).min(1).max(10).nullable().optional(),
		}),
		_e = k({
			id: h().uuid(),
			key: h(),
			filename: h(),
			mimeType: h(),
			width: D().int().nullable().optional(),
			height: D().int().nullable().optional(),
			altText: h().nullable().optional(),
			focalX: D().min(0).max(1).nullable().optional(),
			focalY: D().min(0).max(1).nullable().optional(),
		})
			.nullable()
			.optional(),
		ke = k({ id: h().uuid() }).nullable().optional();
	k({
		displayMode: sr.nullable().optional(),
		themeId: h().uuid().nullable().optional(),
		themeMode: $t.nullable().optional(),
		showProgressBar: ae.nullable().optional(),
		progressBarStyle: ar.nullable().optional(),
		showQuestionNumbers: ae.nullable().optional(),
		allowBackNavigation: ae.nullable().optional(),
		completionBehavior: Xe.nullable().optional(),
		completionRedirectUrl: h().nullable().optional(),
		completionRedirectDelay: Q().int().nullable().optional(),
		ogTitle: h().nullable().optional(),
		ogDescription: h().nullable().optional(),
		ogImage: ke,
		logo: ke,
		headerImage: ke,
		backgroundImage: ke,
		favicon: ke,
		...ko.shape,
	});
	const Qm = k({
			displayMode: sr.nullable().optional(),
			theme: L(["Light", "Dark"]).nullable().optional(),
			bgColor: h().nullable().optional(),
			textColor: h().nullable().optional(),
			interfaceColor: h().nullable().optional(),
			actionColor: h().nullable().optional(),
			actionTextColor: h().nullable().optional(),
			secondaryColor: h().nullable().optional(),
			linkColor: h().nullable().optional(),
			errorColor: h().nullable().optional(),
			warningColor: h().nullable().optional(),
			fontSize: h().nullable().optional(),
			fontBody: h().nullable().optional(),
			fontHeading: h().nullable().optional(),
			logo: ke,
			headerImage: ke,
			backgroundImage: ke,
			favicon: ke,
			showProgressBar: ae.nullable().optional(),
			progressBarStyle: ar.nullable().optional(),
			showQuestionNumbers: ae.nullable().optional(),
			allowBackNavigation: ae.nullable().optional(),
			completionBehavior: Xe.nullable().optional(),
			completionRedirectUrl: h().nullable().optional(),
			completionRedirectDelay: Q().int().nullable().optional(),
			ogTitle: h().nullable().optional(),
			ogDescription: h().nullable().optional(),
			ogImage: ke,
		}),
		Ka = k({
			id: h().uuid().optional(),
			displayMode: sr.nullable().optional(),
			theme: L(["Light", "Dark"]).nullable().optional(),
			bgColor: h().nullable().optional(),
			textColor: h().nullable().optional(),
			interfaceColor: h().nullable().optional(),
			actionColor: h().nullable().optional(),
			actionTextColor: h().nullable().optional(),
			secondaryColor: h().nullable().optional(),
			linkColor: h().nullable().optional(),
			errorColor: h().nullable().optional(),
			warningColor: h().nullable().optional(),
			fontSize: h().nullable().optional(),
			fontBody: h().nullable().optional(),
			fontHeading: h().nullable().optional(),
			logo: _e,
			headerImage: _e,
			backgroundImage: _e,
			favicon: _e,
			showProgressBar: R().nullable().optional(),
			progressBarStyle: ar.nullable().optional(),
			showQuestionNumbers: R().nullable().optional(),
			allowBackNavigation: R().nullable().optional(),
			completionBehavior: Xe.nullable().optional(),
			completionRedirectUrl: h().nullable().optional(),
			completionRedirectDelay: D().int().nullable().optional(),
			ogTitle: h().nullable().optional(),
			ogDescription: h().nullable().optional(),
			ogImage: _e,
		});
	k({
		themeId: h().uuid().nullable().optional(),
		themeMode: $t.nullable().optional(),
		textNext: h().nullable().optional(),
		textPrev: h().nullable().optional(),
		headerImage: ke,
		...ko.shape,
		...Ja.shape,
		themeOverrides: hn,
	});
	const ey = k({
			theme: _o.nullable().optional(),
			themeMode: $t.nullable().optional(),
			textNext: h().nullable().optional(),
			textPrev: h().nullable().optional(),
			headerImage: _e,
			...ko.shape,
			...Ja.shape,
			themeOverrides: hn,
		}),
		ty = de(
			{
				"@title": h().nullish(),
				"@description": h().nullish(),
				"@textNext": h().nullish(),
				"@textPrev": h().nullish(),
			},
			[],
		),
		ny = k({
			id: h().uuid(),
			name: h(),
			title: h().nullable().optional(),
			description: h().nullable().optional(),
			tr: ty.optional().nullable(),
			order: D().int(),
			pageStatus: Ym.nullable().optional(),
			presentation: ey.nullable().optional(),
			config: Ka.nullable().optional(),
			theme: _o.nullable().optional(),
			themeMode: $t.nullable().optional(),
			textNext: h().nullable().optional(),
			textPrev: h().nullable().optional(),
			headerImage: _e,
			imageLayout: Qe.nullable().optional(),
			imageLayoutMobile: Qe.nullable().optional(),
			imageBrightness: D().nullable().optional(),
			imageFit: lr.nullable().optional(),
			themeOverrides: hn,
			pageEffect: Va.nullable().optional(),
			pageEffectIntensity: Wa.nullable().optional(),
			pageEffectBehavior: qa.nullable().optional(),
			pageEffectEmojis: M(h()).nullable().optional(),
		});
	k({
		id: h().uuid(),
		surveyId: h().uuid(),
		code: h(),
		email: h().email().nullable().optional(),
		phone: h().nullable().optional(),
		recipientName: h().nullable().optional(),
		status: Xm.nullable().optional(),
		sentAt: ce().nullable().optional(),
		openedAt: ce().nullable().optional(),
		startedAt: ce().nullable().optional(),
		completedAt: ce().nullable().optional(),
		maxResponses: D().int().nullable().optional(),
		expiresAt: ce().nullable().optional(),
		responseCount: D().int().nullable().optional(),
	});
	const ct = k({
			event: h(),
			survey: h(),
			session: h(),
			url: h().optional(),
			visitor: h().ulid(),
		}),
		ry = ct.extend({ event: $("CardView"), type: Fa }),
		oy = ct.extend({ event: $("PageView"), value: h() }),
		Be = ct.extend({
			event: $("CardValue"),
			card: h(),
			type: Fa,
			value: Y([h(), R(), re(h(), co()), M(h())]),
			languageCode: h().optional(),
			cardOrder: D().int().nonnegative().optional(),
		}),
		iy = Be.extend({ type: $("InputCard") }),
		sy = Be.extend({ type: $("TopTaskCard") }),
		ay = Be.extend({ type: $("CompletionCard") }),
		ly = Be.extend({ type: $("SegmentCard") }),
		cy = Be.extend({ type: $("LikertCard") }),
		uy = Be.extend({
			type: $("RecruitmentCard"),
			value: k({
				email: h().optional().nullable(),
				phone: h().optional().nullable(),
				name: h().optional().nullable(),
				consented: R().optional(),
				autoEmail: R().optional(),
				optedOut: R().optional(),
			}),
		}),
		dy = Be.extend({ type: $("MultiSelectCard"), value: M(E()) }),
		py = Be.extend({ type: $("SingleSelectCard"), value: E() }),
		fy = Be.extend({ type: $("FindabilityCard") }),
		hy = ct.extend({ event: $("Value"), value: Y([h(), R()]) }),
		gy = ct.extend({
			event: $("SessionInit"),
			ua: h(),
			screenSize: hg([D(), D()]),
			pixelRatio: D(),
			connection: h(),
			traits: re(h(), h()).optional(),
			languageCode: h().optional(),
		}),
		my = ct.extend({ event: $("Custom"), key: h(), value: h() }),
		yy = ct.extend({ event: $("SessionTraits"), traits: re(h(), h()) }),
		So = Ne("type", [iy, uy, ly, sy, ay, fy, cy, dy, py]);
	Y([So, ry, oy, hy, my, gy, yy]);
	const Se = h().nullable(),
		cr = h().min(3),
		xo = h()
			.min(3)
			.regex(/^[a-z0-9-.]+$/),
		Ga = L(["Popup", "Inline", "Headless", "FullPage"]),
		Co = L(["Survey", "Discovery", "TopTask", "Findability"]),
		ur = L(["BottomRight", "BottomLeft", "TopRight", "TopLeft"]),
		vy = L(["default", "floating-controls"]),
		zo = R().or(Ge()).optional(),
		To = Q().min(0).max(100),
		mn = Q().min(0),
		Io = Q().min(0),
		$o = Q().min(0).max(6e4).optional().default(0),
		Eo = Q().min(0).optional(),
		by = L(
			[
				"TriggerPathIs",
				"TriggerPathBeginsWith",
				"FollowPathIs",
				"FollowPathBeginsWith",
				"PathBeginsWith",
				"PathIs",
			],
			{ error: () => "Please select a rule type" },
		),
		wy = 100,
		yn = new Map();
	function _y(e) {
		try {
			return new RegExp(e);
		} catch {
			return null;
		}
	}
	function ky(e) {
		return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
	function Sy(e, t) {
		try {
			const n = e.indexOf("?"),
				o =
					(n >= 0 ? e.slice(0, n) : e)
						.split("/")
						.filter(Boolean)
						.reduce((i, s) => `${i}\\/${_y(s) ? `(${s})` : ky(s)}`, "^") +
					(t ? "(\\/.*)?" : "") +
					"$";
			return new RegExp(o);
		} catch {
			return null;
		}
	}
	function Ro(e, t) {
		if (e === t) return !0;
		const n = (r) => (r.startsWith("www.") ? r.slice(4) : r);
		return n(e) === n(t);
	}
	function Mo(e, t, n, r) {
		if (!t) return !1;
		if (r) {
			const a = `${t}:${n}`,
				c = yn.get(a);
			if (c) return c.test(e);
			const l = Sy(t, n);
			if (!l) return !1;
			if (yn.size >= wy) {
				const d = yn.keys().next().value;
				d && yn.delete(d);
			}
			return yn.set(a, l), l.test(e);
		}
		const o = (a) => (a.length > 1 && a.endsWith("/") ? a.slice(0, -1) : a),
			i = o(e),
			s = o(t);
		return n
			? s === "/"
				? i.startsWith("/")
				: i === s || i.startsWith(`${s}/`)
			: i === s;
	}
	function Ya(e, t) {
		try {
			const n = new URL(t),
				r = e.domain ? Ro(e.domain.name, n.hostname) : !0,
				o =
					e.path &&
					Mo(
						decodeURI(n.pathname),
						decodeURI(e.path),
						e.applyBelow,
						e.isRegex ?? !1,
					);
			return !!(r && o);
		} catch {
			return !1;
		}
	}
	const Xa = k({
			textClose: Se,
			textHide: Se,
			textNext: Se,
			textPrev: Se,
			textMinimized: Se,
			textReplyLater: Se,
		}),
		xy = k({
			id: E(),
			isRegexp: R().default(!1),
			negate: R().default(!1),
			type: by,
			value: h(),
			domains: M(k({ id: E(), name: h() })),
		}),
		Po = k({
			id: E(),
			ruleType: L(["Show", "Hide", "FollowOnly"]),
			path: h().optional(),
			desktop: R(),
			mobile: R(),
			tablet: R(),
			applyBelow: R(),
			follow: R(),
			isRegex: R().optional().default(!1),
			domain: k({ id: E(), name: h() }).optional().nullable(),
		}),
		et = Xa.partial().extend({
			mode: $("create"),
			name: cr,
			slug: xo,
			description: h().optional().nullable(),
			emoji: nr.optional(),
			active: ie().optional(),
			status: Ye.optional(),
			surveyType: Co.optional(),
			capturePercent: To.optional(),
			minTimeForRetake: mn.optional(),
			minTimeForRetrigger: Io.optional(),
			allowedOrigins: M(h()).optional(),
			initialDelay: $o,
			autoCloseAfter: Eo,
			path: h()
				.optional()
				.overwrite((e) => (e === "" ? void 0 : e)),
			domain: h().optional(),
			applyBelow: ie().optional().default(!1),
			follow: ie().optional().default(!1),
			language: E(),
			editTeams: re(E(), R().or(Ge())).default({}),
			visibleToAllTeams: R().or(Ge()).optional().default(!1),
		}),
		dr = h()
			.min(1, "Enter a password to protect this survey")
			.max(256, "Password must be 256 characters or fewer"),
		Qa = Ne("generalType", [
			et
				.extend({
					generalType: $("Popup"),
					renderType: $("Popup"),
					surveyPosition: ur.optional(),
					showCloseButton: zo,
				})
				.strict(),
			et.extend({ generalType: $("Inline"), renderType: $("Inline") }).strict(),
			et
				.extend({ generalType: $("Headless"), renderType: $("Headless") })
				.strict(),
			et
				.extend({
					generalType: $("FullPage"),
					renderType: $("FullPage"),
					accessMode: gn.optional().nullable(),
					password: dr.optional().nullable(),
					completionBehavior: Xe.optional(),
					completionRedirectUrl: h().optional().nullable(),
					completionRedirectDelay: Q().int().optional().nullable(),
				})
				.strict(),
		]),
		Cy = Ne("generalType", [
			et.extend({
				generalType: $("Popup"),
				renderType: $("Popup"),
				surveyPosition: ur.optional(),
				showCloseButton: zo,
			}),
			et.extend({ generalType: $("Inline"), renderType: $("Inline") }),
			et.extend({ generalType: $("Headless"), renderType: $("Headless") }),
			et.extend({
				generalType: $("FullPage"),
				renderType: $("FullPage"),
				accessMode: gn.optional().nullable(),
				password: dr.optional().nullable(),
				completionBehavior: Xe.optional(),
				completionRedirectUrl: h().optional().nullable(),
				completionRedirectDelay: Q().int().optional().nullable(),
			}),
		]).transform((e, t) => {
			const n = Qa.safeParse(e);
			if (n.success) return n.data;
			const [r] = n.error.issues;
			return (
				t.addIssue({
					code: "custom",
					message:
						(r == null ? void 0 : r.message) ?? "Invalid survey create payload",
					path: r == null ? void 0 : r.path,
				}),
				Mu
			);
		}),
		el = k({
			mode: $("copy"),
			name: cr,
			slug: xo,
			emoji: nr.optional(),
			copySurvey: E(),
			keepRules: R().or(Ge()).optional().default(!0),
			cards: re(E(), R().or(Ge())).optional(),
			editTeams: re(E(), R().or(Ge())).default({}),
			visibleToAllTeams: R().or(Ge()).optional().default(!1),
			description: h().optional().nullable(),
			accessMode: gn.optional().nullable(),
			password: dr.optional().nullable(),
			completionBehavior: Xe.optional(),
			minTimeForRetake: mn.optional(),
			completionRedirectUrl: h().optional().nullable(),
			completionRedirectDelay: Q().int().optional().nullable(),
		});
	Ne("mode", [Qa, el]),
		Y([Cy, el]),
		L(["Completion", "Demand"]),
		L(["Absolute", "Relative"]);
	const zy = k({
			name: cr.optional(),
			emoji: nr.nullable().optional(),
			description: h().optional().nullable(),
			language: E().optional(),
			timezone: h().optional(),
			surveyType: Co.optional(),
		}),
		Ty = k({
			accessMode: gn.optional().nullable(),
			password: dr.optional().nullable(),
			completionBehavior: Xe.optional(),
			minTimeForRetake: mn.optional(),
			completionRedirectUrl: h().optional().nullable(),
			completionRedirectDelay: Q().int().optional().nullable(),
		}),
		pr = k({ id: E(), visibleToAllTeams: R().or(Ge()).optional() }).merge(zy),
		tl = pr.extend({
			generalType: $("Popup"),
			renderType: $("Popup").optional(),
			surveyPosition: ur.optional(),
			showCloseButton: zo,
		}),
		nl = pr.extend({
			generalType: $("Inline"),
			renderType: $("Inline").optional(),
		}),
		rl = pr.extend({
			generalType: $("Headless"),
			renderType: $("Headless").optional(),
		}),
		ol = pr
			.extend({
				generalType: $("FullPage"),
				renderType: $("FullPage").optional(),
			})
			.merge(Ty);
	Ne("generalType", [tl, nl, rl, ol]),
		Ne("generalType", [tl.strict(), nl.strict(), rl.strict(), ol.strict()]);
	const Iy = k({
		capturePercent: To.optional(),
		minTimeForRetake: mn.optional(),
		minTimeForRetrigger: Io.optional(),
		allowedOrigins: M(h()).optional(),
		initialDelay: $o,
		autoCloseAfter: Eo,
	});
	k({ id: E() }).merge(Iy).strict();
	const $y = k({
		ogTitle: h().optional().nullable(),
		ogDescription: h().optional().nullable(),
		ogImage: ke,
	});
	k({ id: E() }).merge($y).strict();
	const Ey = k({
		themeId: E().optional().nullable(),
		themeMode: $t.optional().nullable(),
		themeOverrides: hn,
		fullPageConfig: Qm.optional(),
		imageLayout: Qe.optional().nullable(),
		imageLayoutMobile: Qe.optional().nullable(),
		imageBrightness: D().min(0).max(1).optional().nullable(),
		imageFit: lr.optional().nullable(),
	});
	k({ id: E() }).merge(Ey).strict();
	const Ry = k({ language: E().optional(), languages: M(E()).optional() });
	k({ id: E() }).merge(Ry).strict();
	const My = Xa.partial();
	k({ id: E() }).merge(My).strict(),
		k({
			publishingState: Sa,
			publishStartAt: ce().nullable(),
			publishEndAt: ce().nullable(),
		});
	const Py = E().brand(),
		Ay = k({
			id: Py,
			revision: Q().default(0),
			name: cr,
			slug: xo,
			fullSlug: h(),
			status: Ye.nullable().optional(),
			publishingState: Sa.optional(),
			isLive: R().optional(),
			description: h().optional().nullable(),
			customCss: h().nullish(),
			renderType: Ga,
			accessMode: gn.optional().nullable(),
			displayMode: sr.optional().nullable(),
			themeMode: $t.optional().nullable(),
			themeOverrides: hn,
			showProgressBar: ie().optional().nullable(),
			progressBarStyle: ar.optional().nullable(),
			showQuestionNumbers: ie().optional().nullable(),
			allowBackNavigation: ie().optional().nullable(),
			completionBehavior: Xe.optional().nullable(),
			completionRedirectUrl: h().optional().nullable(),
			completionRedirectDelay: Q().int().optional().nullable(),
			ogTitle: h().optional().nullable(),
			ogDescription: h().optional().nullable(),
			ogImage: _e,
			logo: _e,
			headerImage: _e,
			backgroundImage: _e,
			favicon: _e,
			imageLayout: Qe.optional().nullable(),
			imageLayoutMobile: Qe.optional().nullable(),
			imageBrightness: D().optional().nullable(),
			imageFit: lr.optional().nullable(),
			theme: _o.optional().nullable(),
			fullPageConfig: Ka.optional().nullable(),
			surveyType: Co,
			surveyPosition: ur,
			showCloseButton: R(),
			popupLayout: vy,
			capturePercent: To,
			minTimeForRetake: mn,
			minTimeForRetrigger: Io,
			initialDelay: $o,
			autoCloseAfter: Eo,
			allowedOrigins: M(h()).optional(),
			trackPageViews: ie().optional().nullable(),
			debugEnabled: ie().optional().nullable(),
			urlRules: M(xy),
			showRules: M(Po).default([]),
			followRules: M(Po).default([]),
			hideRules: M(Po).default([]),
			audienceRuleMode: Ea.optional().default("and"),
			audienceRules: M(Ma).optional().default([]),
			language: k({ id: E(), name: h(), code: h() }).nullable(),
			languages: M(k({ id: E(), name: h(), code: h() }))
				.optional()
				.nullable(),
			tr: M(
				k({
					code: h().nullish(),
					name: h().nullish(),
					"@textNext": h().nullish(),
					"@textPrev": h().nullish(),
					"@textClose": h().nullish(),
					"@textHide": h().nullish(),
					"@textMinimized": h().nullish(),
					"@textReplyLater": h().nullish(),
				}),
			)
				.optional()
				.nullable(),
			ipBlacklist: M(k({ id: E(), ip: h() })).optional(),
			textClose: Se.optional(),
			textHide: Se.optional(),
			textNext: Se.optional(),
			textPrev: Se.optional(),
			textMinimized: Se.optional(),
			textReplyLater: Se.optional(),
			pages: M(ny).optional().nullable(),
		});
	k({
		autoClose: R().optional().default(!0),
		constrainHeight: R().optional().default(!0),
		testMode: R().optional().default(!1),
		apiHost: h().optional(),
	});
	function fr(e) {
		const t = new Error(e);
		return (t.source = "ulid"), t;
	}
	const Ao = "0123456789ABCDEFGHJKMNPQRSTVWXYZ",
		vn = Ao.length,
		il = Math.pow(2, 48) - 1,
		Ly = 10,
		Oy = 16;
	function Ny(e) {
		let t = Math.floor(e() * vn);
		return t === vn && (t = vn - 1), Ao.charAt(t);
	}
	function jy(e, t) {
		if (isNaN(e)) throw new Error(e + " must be a number");
		if (e > il) throw fr("cannot encode time greater than " + il);
		if (e < 0) throw fr("time must be positive");
		if (Number.isInteger(Number(e)) === !1) throw fr("time must be an integer");
		let n,
			r = "";
		for (; t > 0; t--) (n = e % vn), (r = Ao.charAt(n) + r), (e = (e - n) / vn);
		return r;
	}
	function By(e, t) {
		let n = "";
		for (; e > 0; e--) n = Ny(t) + n;
		return n;
	}
	function Dy(e = !1, t) {
		t || (t = typeof window < "u" ? window : null);
		const n = t && (t.crypto || t.msCrypto);
		if (n)
			return () => {
				const r = new Uint8Array(1);
				return n.getRandomValues(r), r[0] / 255;
			};
		try {
			const r = require("crypto");
			return () => r.randomBytes(1).readUInt8() / 255;
		} catch {}
		if (e) {
			try {
				console.error(
					"secure crypto unusable, falling back to insecure Math.random()!",
				);
			} catch {}
			return () => Math.random();
		}
		throw fr("secure crypto unusable, insecure Math.random not allowed");
	}
	function Fy(e) {
		return (
			e || (e = Dy()),
			function (n) {
				return isNaN(n) && (n = Date.now()), jy(n, Ly) + By(Oy, e);
			}
		);
	}
	const Me = Fy();
	function Zy() {
		if (typeof globalThis < "u") return globalThis;
		if (typeof self < "u") return self;
		if (typeof window < "u") return window;
		if (typeof global < "u") return global;
	}
	function Hy() {
		const e = Zy();
		if (e.__xstate__) return e.__xstate__;
	}
	const Uy = (e) => {
		if (typeof window > "u") return;
		const t = Hy();
		t && t.register(e);
	};
	class sl {
		constructor(t) {
			(this._process = t),
				(this._active = !1),
				(this._current = null),
				(this._last = null);
		}
		start() {
			(this._active = !0), this.flush();
		}
		clear() {
			this._current &&
				((this._current.next = null), (this._last = this._current));
		}
		enqueue(t) {
			const n = { value: t, next: null };
			if (this._current) {
				(this._last.next = n), (this._last = n);
				return;
			}
			(this._current = n), (this._last = n), this._active && this.flush();
		}
		flush() {
			for (; this._current; ) {
				const t = this._current;
				this._process(t.value), (this._current = t.next);
			}
			this._last = null;
		}
	}
	const al = ".",
		Vy = "",
		ll = "",
		Wy = "#",
		qy = "*",
		cl = "xstate.init",
		Jy = "xstate.error",
		hr = "xstate.stop";
	function Ky(e, t) {
		return { type: `xstate.after.${e}.${t}` };
	}
	function Lo(e, t) {
		return { type: `xstate.done.state.${e}`, output: t };
	}
	function Gy(e, t) {
		return { type: `xstate.done.actor.${e}`, output: t, actorId: e };
	}
	function ul(e, t) {
		return { type: `xstate.error.actor.${e}`, error: t, actorId: e };
	}
	function dl(e) {
		return { type: cl, input: e };
	}
	function Pe(e) {
		setTimeout(() => {
			throw e;
		});
	}
	const Yy =
		(typeof Symbol == "function" && Symbol.observable) || "@@observable";
	function pl(e, t) {
		const n = fl(e),
			r = fl(t);
		return typeof r == "string"
			? typeof n == "string"
				? r === n
				: !1
			: typeof n == "string"
				? n in r
				: Object.keys(n).every((o) => (o in r ? pl(n[o], r[o]) : !1));
	}
	function Oo(e) {
		if (ml(e)) return e;
		const t = [];
		let n = "";
		for (let r = 0; r < e.length; r++) {
			switch (e.charCodeAt(r)) {
				case 92:
					(n += e[r + 1]), r++;
					continue;
				case 46:
					t.push(n), (n = "");
					continue;
			}
			n += e[r];
		}
		return t.push(n), t;
	}
	function fl(e) {
		if (Av(e)) return e.value;
		if (typeof e != "string") return e;
		const t = Oo(e);
		return Xy(t);
	}
	function Xy(e) {
		if (e.length === 1) return e[0];
		const t = {};
		let n = t;
		for (let r = 0; r < e.length - 1; r++)
			if (r === e.length - 2) n[e[r]] = e[r + 1];
			else {
				const o = n;
				(n = {}), (o[e[r]] = n);
			}
		return t;
	}
	function hl(e, t) {
		const n = {},
			r = Object.keys(e);
		for (let o = 0; o < r.length; o++) {
			const i = r[o];
			n[i] = t(e[i], i, e, o);
		}
		return n;
	}
	function gl(e) {
		return ml(e) ? e : [e];
	}
	function De(e) {
		return e === void 0 ? [] : gl(e);
	}
	function No(e, t, n, r) {
		return typeof e == "function" ? e({ context: t, event: n, self: r }) : e;
	}
	function ml(e) {
		return Array.isArray(e);
	}
	function Qy(e) {
		return e.type.startsWith("xstate.error.actor");
	}
	function Pt(e) {
		return gl(e).map((t) =>
			typeof t > "u" || typeof t == "string" ? { target: t } : t,
		);
	}
	function yl(e) {
		if (!(e === void 0 || e === Vy)) return De(e);
	}
	function jo(e, t, n) {
		var i, s, a;
		const r = typeof e == "object",
			o = r ? e : void 0;
		return {
			next: (i = r ? e.next : e) == null ? void 0 : i.bind(o),
			error: (s = r ? e.error : t) == null ? void 0 : s.bind(o),
			complete: (a = r ? e.complete : n) == null ? void 0 : a.bind(o),
		};
	}
	function vl(e, t) {
		return `${t}.${e}`;
	}
	function Bo(e, t) {
		const n = t.match(/^xstate\.invoke\.(\d+)\.(.*)/);
		if (!n) return e.implementations.actors[t];
		const [, r, o] = n,
			s = e.getStateNodeById(o).config.invoke;
		return (Array.isArray(s) ? s[r] : s).src;
	}
	function bl(e, t) {
		return `${e.sessionId}.${t}`;
	}
	let ev = 0;
	function tv(e, t) {
		const n = new Map(),
			r = new Map(),
			o = new WeakMap(),
			i = new Set(),
			s = {},
			{ clock: a, logger: c } = t,
			l = {
				schedule: (p, f, g, y, b = Math.random().toString(36).slice(2)) => {
					const v = {
							source: p,
							target: f,
							event: g,
							delay: y,
							id: b,
							startedAt: Date.now(),
						},
						_ = bl(p, b);
					u._snapshot._scheduledEvents[_] = v;
					const S = a.setTimeout(() => {
						delete s[_],
							delete u._snapshot._scheduledEvents[_],
							u._relay(p, f, g);
					}, y);
					s[_] = S;
				},
				cancel: (p, f) => {
					const g = bl(p, f),
						y = s[g];
					delete s[g],
						delete u._snapshot._scheduledEvents[g],
						y !== void 0 && a.clearTimeout(y);
				},
				cancelAll: (p) => {
					for (const f in u._snapshot._scheduledEvents) {
						const g = u._snapshot._scheduledEvents[f];
						g.source === p && l.cancel(p, g.id);
					}
				},
			},
			d = (p) => {
				if (!i.size) return;
				const f = { ...p, rootId: e.sessionId };
				i.forEach((g) => {
					var y;
					return (y = g.next) == null ? void 0 : y.call(g, f);
				});
			},
			u = {
				_snapshot: {
					_scheduledEvents:
						((t == null ? void 0 : t.snapshot) && t.snapshot.scheduler) ?? {},
				},
				_bookId: () => `x:${ev++}`,
				_register: (p, f) => (n.set(p, f), p),
				_unregister: (p) => {
					n.delete(p.sessionId);
					const f = o.get(p);
					f !== void 0 && (r.delete(f), o.delete(p));
				},
				get: (p) => r.get(p),
				_set: (p, f) => {
					const g = r.get(p);
					if (g && g !== f)
						throw new Error(`Actor with system ID '${p}' already exists.`);
					r.set(p, f), o.set(f, p);
				},
				inspect: (p) => {
					const f = jo(p);
					return (
						i.add(f),
						{
							unsubscribe() {
								i.delete(f);
							},
						}
					);
				},
				_sendInspectionEvent: d,
				_relay: (p, f, g) => {
					u._sendInspectionEvent({
						type: "@xstate.event",
						sourceRef: p,
						actorRef: f,
						event: g,
					}),
						f._send(g);
				},
				scheduler: l,
				getSnapshot: () => ({
					_scheduledEvents: { ...u._snapshot._scheduledEvents },
				}),
				start: () => {
					const p = u._snapshot._scheduledEvents;
					u._snapshot._scheduledEvents = {};
					for (const f in p) {
						const { source: g, target: y, event: b, delay: v, id: _ } = p[f];
						l.schedule(g, y, b, v, _);
					}
				},
				_clock: a,
				_logger: c,
			};
		return u;
	}
	const Do = 1;
	let pe = (function (e) {
		return (
			(e[(e.NotStarted = 0)] = "NotStarted"),
			(e[(e.Running = 1)] = "Running"),
			(e[(e.Stopped = 2)] = "Stopped"),
			e
		);
	})({});
	const nv = {
		clock: {
			setTimeout: (e, t) => setTimeout(e, t),
			clearTimeout: (e) => clearTimeout(e),
		},
		logger: console.log.bind(console),
		devTools: !1,
	};
	class rv {
		constructor(t, n) {
			(this.logic = t),
				(this._snapshot = void 0),
				(this.clock = void 0),
				(this.options = void 0),
				(this.id = void 0),
				(this.mailbox = new sl(this._process.bind(this))),
				(this.observers = new Set()),
				(this.eventListeners = new Map()),
				(this.logger = void 0),
				(this._processingStatus = pe.NotStarted),
				(this._parent = void 0),
				(this._syncSnapshot = void 0),
				(this.ref = void 0),
				(this._actorScope = void 0),
				(this._systemId = void 0),
				(this.sessionId = void 0),
				(this.system = void 0),
				(this._doneEvent = void 0),
				(this.src = void 0),
				(this._deferred = []);
			const r = { ...nv, ...n },
				{
					clock: o,
					logger: i,
					parent: s,
					syncSnapshot: a,
					id: c,
					systemId: l,
					inspect: d,
				} = r;
			(this.system = s ? s.system : tv(this, { clock: o, logger: i })),
				d && !s && this.system.inspect(jo(d)),
				(this.sessionId = this.system._bookId()),
				(this.id = c ?? this.sessionId),
				(this.logger = (n == null ? void 0 : n.logger) ?? this.system._logger),
				(this.clock = (n == null ? void 0 : n.clock) ?? this.system._clock),
				(this._parent = s),
				(this._syncSnapshot = a),
				(this.options = r),
				(this.src = r.src ?? t),
				(this.ref = this),
				(this._actorScope = {
					self: this,
					id: this.id,
					sessionId: this.sessionId,
					logger: this.logger,
					defer: (u) => {
						this._deferred.push(u);
					},
					system: this.system,
					stopChild: (u) => {
						if (u._parent !== this)
							throw new Error(
								`Cannot stop child actor ${u.id} of ${this.id} because it is not a child`,
							);
						u._stop();
					},
					emit: (u) => {
						const p = this.eventListeners.get(u.type),
							f = this.eventListeners.get("*");
						if (!p && !f) return;
						const g = [...(p ? p.values() : []), ...(f ? f.values() : [])];
						for (const y of g)
							try {
								y(u);
							} catch (b) {
								Pe(b);
							}
					},
					actionExecutor: (u) => {
						const p = () => {
							if (
								(this._actorScope.system._sendInspectionEvent({
									type: "@xstate.action",
									actorRef: this,
									action: { type: u.type, params: u.params },
								}),
								!!u.exec)
							)
								try {
									u.exec(u.info, u.params);
								} finally {
								}
						};
						this._processingStatus === pe.Running
							? p()
							: this._deferred.push(p);
					},
				}),
				(this.send = this.send.bind(this)),
				this.system._sendInspectionEvent({
					type: "@xstate.actor",
					actorRef: this,
				}),
				l && ((this._systemId = l), this.system._set(l, this)),
				this._initState(
					(n == null ? void 0 : n.snapshot) ?? (n == null ? void 0 : n.state),
				),
				l &&
					this._snapshot.status !== "active" &&
					this.system._unregister(this);
		}
		_initState(t) {
			var n;
			try {
				this._snapshot = t
					? this.logic.restoreSnapshot
						? this.logic.restoreSnapshot(t, this._actorScope)
						: t
					: this.logic.getInitialSnapshot(
							this._actorScope,
							(n = this.options) == null ? void 0 : n.input,
						);
			} catch (r) {
				this._snapshot = { status: "error", output: void 0, error: r };
			}
		}
		update(t, n) {
			var o, i;
			this._snapshot = t;
			let r;
			for (; (r = this._deferred.shift()); )
				try {
					r();
				} catch (s) {
					(this._deferred.length = 0),
						(this._snapshot = { ...t, status: "error", error: s });
				}
			switch (this._snapshot.status) {
				case "active":
					for (const s of this.observers)
						try {
							(o = s.next) == null || o.call(s, t);
						} catch (a) {
							Pe(a);
						}
					break;
				case "done":
					for (const s of this.observers)
						try {
							(i = s.next) == null || i.call(s, t);
						} catch (a) {
							Pe(a);
						}
					this._stopProcedure(),
						this._complete(),
						(this._doneEvent = Gy(this.id, this._snapshot.output)),
						this._parent &&
							this.system._relay(this, this._parent, this._doneEvent);
					break;
				case "error":
					this._error(this._snapshot.error);
					break;
			}
			this.system._sendInspectionEvent({
				type: "@xstate.snapshot",
				actorRef: this,
				event: n,
				snapshot: t,
			});
		}
		subscribe(t, n, r) {
			var i;
			const o = jo(t, n, r);
			if (this._processingStatus !== pe.Stopped) this.observers.add(o);
			else
				switch (this._snapshot.status) {
					case "done":
						try {
							(i = o.complete) == null || i.call(o);
						} catch (s) {
							Pe(s);
						}
						break;
					case "error": {
						const s = this._snapshot.error;
						if (!o.error) Pe(s);
						else
							try {
								o.error(s);
							} catch (a) {
								Pe(a);
							}
						break;
					}
				}
			return {
				unsubscribe: () => {
					this.observers.delete(o);
				},
			};
		}
		on(t, n) {
			let r = this.eventListeners.get(t);
			r || ((r = new Set()), this.eventListeners.set(t, r));
			const o = n.bind(void 0);
			return (
				r.add(o),
				{
					unsubscribe: () => {
						r.delete(o);
					},
				}
			);
		}
		start() {
			if (this._processingStatus === pe.Running) return this;
			this._syncSnapshot &&
				this.subscribe({
					next: (r) => {
						r.status === "active" &&
							this.system._relay(this, this._parent, {
								type: `xstate.snapshot.${this.id}`,
								snapshot: r,
							});
					},
					error: () => {},
				}),
				this.system._register(this.sessionId, this),
				this._systemId && this.system._set(this._systemId, this),
				(this._processingStatus = pe.Running);
			const t = dl(this.options.input);
			switch (
				(this.system._sendInspectionEvent({
					type: "@xstate.event",
					sourceRef: this._parent,
					actorRef: this,
					event: t,
				}),
				this._snapshot.status)
			) {
				case "done":
					return this.update(this._snapshot, t), this;
				case "error":
					return this._error(this._snapshot.error), this;
			}
			if ((this._parent || this.system.start(), this.logic.start))
				try {
					this.logic.start(this._snapshot, this._actorScope);
				} catch (r) {
					return (
						(this._snapshot = { ...this._snapshot, status: "error", error: r }),
						this._error(r),
						this
					);
				}
			return (
				this.update(this._snapshot, t),
				this.options.devTools && this.attachDevTools(),
				this.mailbox.start(),
				this
			);
		}
		_process(t) {
			let n, r;
			try {
				n = this.logic.transition(this._snapshot, t, this._actorScope);
			} catch (o) {
				r = { err: o };
			}
			if (r) {
				const { err: o } = r;
				(this._snapshot = { ...this._snapshot, status: "error", error: o }),
					this._error(o);
				return;
			}
			this.update(n, t),
				t.type === hr && (this._stopProcedure(), this._complete());
		}
		_stop() {
			return this._processingStatus === pe.Stopped
				? this
				: (this.mailbox.clear(),
					this._processingStatus === pe.NotStarted
						? ((this._processingStatus = pe.Stopped), this)
						: (this.mailbox.enqueue({ type: hr }), this));
		}
		stop() {
			if (this._parent)
				throw new Error("A non-root actor cannot be stopped directly.");
			return this._stop();
		}
		_complete() {
			var t;
			for (const n of this.observers)
				try {
					(t = n.complete) == null || t.call(n);
				} catch (r) {
					Pe(r);
				}
			this.observers.clear();
		}
		_reportError(t) {
			if (!this.observers.size) {
				this._parent || Pe(t);
				return;
			}
			let n = !1;
			for (const r of this.observers) {
				const o = r.error;
				n || (n = !o);
				try {
					o == null || o(t);
				} catch (i) {
					Pe(i);
				}
			}
			this.observers.clear(), n && Pe(t);
		}
		_error(t) {
			this._stopProcedure(),
				this._reportError(t),
				this._parent && this.system._relay(this, this._parent, ul(this.id, t));
		}
		_stopProcedure() {
			return this._processingStatus !== pe.Running
				? this
				: (this.system.scheduler.cancelAll(this),
					this.mailbox.clear(),
					(this.mailbox = new sl(this._process.bind(this))),
					(this._processingStatus = pe.Stopped),
					this.system._unregister(this),
					this);
		}
		_send(t) {
			this._processingStatus !== pe.Stopped && this.mailbox.enqueue(t);
		}
		send(t) {
			this.system._relay(void 0, this, t);
		}
		attachDevTools() {
			const { devTools: t } = this.options;
			t && (typeof t == "function" ? t : Uy)(this);
		}
		toJSON() {
			return { xstate$$type: Do, id: this.id };
		}
		getPersistedSnapshot(t) {
			return this.logic.getPersistedSnapshot(this._snapshot, t);
		}
		[Yy]() {
			return this;
		}
		getSnapshot() {
			return this._snapshot;
		}
	}
	function At(e, ...[t]) {
		return new rv(e, t);
	}
	function ov(e, t, n, r, { sendId: o }) {
		const i = typeof o == "function" ? o(n, r) : o;
		return [t, { sendId: i }, void 0];
	}
	function iv(e, t) {
		e.defer(() => {
			e.system.scheduler.cancel(e.self, t.sendId);
		});
	}
	function sv(e) {
		function t(n, r) {}
		return (
			(t.type = "xstate.cancel"),
			(t.sendId = e),
			(t.resolve = ov),
			(t.execute = iv),
			t
		);
	}
	function av(
		e,
		t,
		n,
		r,
		{ id: o, systemId: i, src: s, input: a, syncSnapshot: c },
	) {
		const l = typeof s == "string" ? Bo(t.machine, s) : s,
			d = typeof o == "function" ? o(n) : o;
		let u, p;
		return (
			l &&
				((p =
					typeof a == "function"
						? a({ context: t.context, event: n.event, self: e.self })
						: a),
				(u = At(l, {
					id: d,
					src: s,
					parent: e.self,
					syncSnapshot: c,
					systemId: i,
					input: p,
				}))),
			[
				ft(t, { children: { ...t.children, [d]: u } }),
				{ id: o, systemId: i, actorRef: u, src: s, input: p },
				void 0,
			]
		);
	}
	function lv(e, { actorRef: t }) {
		t &&
			e.defer(() => {
				t._processingStatus !== pe.Stopped && t.start();
			});
	}
	function cv(
		...[e, { id: t, systemId: n, input: r, syncSnapshot: o = !1 } = {}]
	) {
		function i(s, a) {}
		return (
			(i.type = "xstate.spawnChild"),
			(i.id = t),
			(i.systemId = n),
			(i.src = e),
			(i.input = r),
			(i.syncSnapshot = o),
			(i.resolve = av),
			(i.execute = lv),
			i
		);
	}
	function uv(e, t, n, r, { actorRef: o }) {
		const i = typeof o == "function" ? o(n, r) : o,
			s = typeof i == "string" ? t.children[i] : i;
		let a = t.children;
		return (
			s && ((a = { ...a }), delete a[s.id]), [ft(t, { children: a }), s, void 0]
		);
	}
	function dv(e, t) {
		if (t) {
			if ((e.system._unregister(t), t._processingStatus !== pe.Running)) {
				e.stopChild(t);
				return;
			}
			e.defer(() => {
				e.stopChild(t);
			});
		}
	}
	function ut(e) {
		function t(n, r) {}
		return (
			(t.type = "xstate.stopChild"),
			(t.actorRef = e),
			(t.resolve = uv),
			(t.execute = dv),
			t
		);
	}
	function pv(e, { context: t, event: n }, { guards: r }) {
		return !bn(r[0], t, n, e);
	}
	function fv(e) {
		function t(n, r) {
			return !1;
		}
		return (t.check = pv), (t.guards = [e]), t;
	}
	function hv(e, { context: t, event: n }, { guards: r }) {
		return r.every((o) => bn(o, t, n, e));
	}
	function Fo(e) {
		function t(n, r) {
			return !1;
		}
		return (t.check = hv), (t.guards = e), t;
	}
	function bn(e, t, n, r) {
		const { machine: o } = r,
			i = typeof e == "function",
			s = i ? e : o.implementations.guards[typeof e == "string" ? e : e.type];
		if (!i && !s)
			throw new Error(
				`Guard '${typeof e == "string" ? e : e.type}' is not implemented.'.`,
			);
		if (typeof s != "function") return bn(s, t, n, r);
		const a = { context: t, event: n },
			c =
				i || typeof e == "string"
					? void 0
					: "params" in e
						? typeof e.params == "function"
							? e.params({ context: t, event: n })
							: e.params
						: void 0;
		return "check" in s ? s.check(r, a, s) : s(a, c);
	}
	const Zo = (e) => e.type === "atomic" || e.type === "final";
	function Lt(e) {
		return Object.values(e.states).filter((t) => t.type !== "history");
	}
	function wn(e, t) {
		const n = [];
		if (t === e) return n;
		let r = e.parent;
		for (; r && r !== t; ) n.push(r), (r = r.parent);
		return n;
	}
	function gr(e) {
		const t = new Set(e),
			n = _l(t);
		for (const r of t)
			if (r.type === "compound" && (!n.get(r) || !n.get(r).length))
				xl(r).forEach((o) => t.add(o));
			else if (r.type === "parallel") {
				for (const o of Lt(r))
					if (o.type !== "history" && !t.has(o)) {
						const i = xl(o);
						for (const s of i) t.add(s);
					}
			}
		for (const r of t) {
			let o = r.parent;
			for (; o; ) t.add(o), (o = o.parent);
		}
		return t;
	}
	function wl(e, t) {
		const n = t.get(e);
		if (!n) return {};
		if (e.type === "compound") {
			const o = n[0];
			if (o) {
				if (Zo(o)) return o.key;
			} else return {};
		}
		const r = {};
		for (const o of n) r[o.key] = wl(o, t);
		return r;
	}
	function _l(e) {
		const t = new Map();
		for (const n of e)
			t.has(n) || t.set(n, []),
				n.parent &&
					(t.has(n.parent) || t.set(n.parent, []), t.get(n.parent).push(n));
		return t;
	}
	function kl(e, t) {
		const n = gr(t);
		return wl(e, _l(n));
	}
	function Ho(e, t) {
		return t.type === "compound"
			? Lt(t).some((n) => n.type === "final" && e.has(n))
			: t.type === "parallel"
				? Lt(t).every((n) => Ho(e, n))
				: t.type === "final";
	}
	const mr = (e) => e[0] === Wy;
	function gv(e, t) {
		return (
			e.transitions.get(t) ||
			[...e.transitions.keys()]
				.filter((r) => {
					if (r === qy) return !0;
					if (!r.endsWith(".*")) return !1;
					const o = r.split("."),
						i = t.split(".");
					for (let s = 0; s < o.length; s++) {
						const a = o[s],
							c = i[s];
						if (a === "*") return s === o.length - 1;
						if (a !== c) return !1;
					}
					return !0;
				})
				.sort((r, o) => o.length - r.length)
				.flatMap((r) => e.transitions.get(r))
		);
	}
	function mv(e) {
		const t = e.config.after;
		if (!t) return [];
		const n = (o) => {
			const i = Ky(o, e.id),
				s = i.type;
			return e.entry.push(Uv(i, { id: s, delay: o })), e.exit.push(sv(s)), s;
		};
		return Object.keys(t)
			.flatMap((o) => {
				const i = t[o],
					s = typeof i == "string" ? { target: i } : i,
					a = Number.isNaN(+o) ? o : +o,
					c = n(a);
				return De(s).map((l) => ({ ...l, event: c, delay: a }));
			})
			.map((o) => {
				const { delay: i } = o;
				return { ...dt(e, o.event, o), delay: i };
			});
	}
	function dt(e, t, n) {
		const r = yl(n.target),
			o = n.reenter ?? !1,
			i = bv(e, r),
			s = {
				...n,
				actions: De(n.actions),
				guard: n.guard,
				target: i,
				source: e,
				reenter: o,
				eventType: t,
				toJSON: () => ({
					...s,
					source: `#${e.id}`,
					target: i ? i.map((a) => `#${a.id}`) : void 0,
				}),
			};
		return s;
	}
	function yv(e) {
		const t = new Map();
		if (e.config.on)
			for (const n of Object.keys(e.config.on)) {
				if (n === ll)
					throw new Error(
						'Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.',
					);
				const r = e.config.on[n];
				t.set(
					n,
					Pt(r).map((o) => dt(e, n, o)),
				);
			}
		if (e.config.onDone) {
			const n = `xstate.done.state.${e.id}`;
			t.set(
				n,
				Pt(e.config.onDone).map((r) => dt(e, n, r)),
			);
		}
		for (const n of e.invoke) {
			if (n.onDone) {
				const r = `xstate.done.actor.${n.id}`;
				t.set(
					r,
					Pt(n.onDone).map((o) => dt(e, r, o)),
				);
			}
			if (n.onError) {
				const r = `xstate.error.actor.${n.id}`;
				t.set(
					r,
					Pt(n.onError).map((o) => dt(e, r, o)),
				);
			}
			if (n.onSnapshot) {
				const r = `xstate.snapshot.${n.id}`;
				t.set(
					r,
					Pt(n.onSnapshot).map((o) => dt(e, r, o)),
				);
			}
		}
		for (const n of e.after) {
			let r = t.get(n.eventType);
			r || ((r = []), t.set(n.eventType, r)), r.push(n);
		}
		return t;
	}
	function vv(e, t) {
		const n =
			typeof t == "string" ? e.states[t] : t ? e.states[t.target] : void 0;
		if (!n && t)
			throw new Error(
				`Initial state node "${t}" not found on parent state node #${e.id}`,
			);
		const r = {
			source: e,
			actions: !t || typeof t == "string" ? [] : De(t.actions),
			eventType: null,
			reenter: !1,
			target: n ? [n] : [],
			toJSON: () => ({
				...r,
				source: `#${e.id}`,
				target: n ? [`#${n.id}`] : [],
			}),
		};
		return r;
	}
	function bv(e, t) {
		if (t !== void 0)
			return t.map((n) => {
				if (typeof n != "string") return n;
				if (mr(n)) return e.machine.getStateNodeById(n);
				const r = n[0] === al;
				if (r && !e.parent) return yr(e, n.slice(1));
				const o = r ? e.key + n : n;
				if (e.parent)
					try {
						return yr(e.parent, o);
					} catch (i) {
						throw new Error(`Invalid transition definition for state node '${e.id}':
${i.message}`);
					}
				else
					throw new Error(
						`Invalid target: "${n}" is not a valid target from the root node. Did you mean ".${n}"?`,
					);
			});
	}
	function Sl(e) {
		const t = yl(e.config.target);
		return t
			? { target: t.map((n) => (typeof n == "string" ? yr(e.parent, n) : n)) }
			: e.parent.initial;
	}
	function pt(e) {
		return e.type === "history";
	}
	function xl(e) {
		const t = Cl(e);
		for (const n of t) for (const r of wn(n, e)) t.add(r);
		return t;
	}
	function Cl(e) {
		const t = new Set();
		function n(r) {
			if (!t.has(r)) {
				if ((t.add(r), r.type === "compound")) n(r.initial.target[0]);
				else if (r.type === "parallel") for (const o of Lt(r)) n(o);
			}
		}
		return n(e), t;
	}
	function Ot(e, t) {
		if (mr(t)) return e.machine.getStateNodeById(t);
		if (!e.states)
			throw new Error(
				`Unable to retrieve child state '${t}' from '${e.id}'; no child states exist.`,
			);
		const n = e.states[t];
		if (!n) throw new Error(`Child state '${t}' does not exist on '${e.id}'`);
		return n;
	}
	function yr(e, t) {
		if (typeof t == "string" && mr(t))
			try {
				return e.machine.getStateNodeById(t);
			} catch {}
		const n = Oo(t).slice();
		let r = e;
		for (; n.length; ) {
			const o = n.shift();
			if (!o.length) break;
			r = Ot(r, o);
		}
		return r;
	}
	function vr(e, t) {
		if (typeof t == "string") {
			const o = e.states[t];
			if (!o) throw new Error(`State '${t}' does not exist on '${e.id}'`);
			return [e, o];
		}
		const n = Object.keys(t),
			r = n.map((o) => Ot(e, o)).filter(Boolean);
		return [e.machine.root, e].concat(
			r,
			n.reduce((o, i) => {
				const s = Ot(e, i);
				if (!s) return o;
				const a = vr(s, t[i]);
				return o.concat(a);
			}, []),
		);
	}
	function wv(e, t, n, r) {
		const i = Ot(e, t).next(n, r);
		return !i || !i.length ? e.next(n, r) : i;
	}
	function _v(e, t, n, r) {
		const o = Object.keys(t),
			i = Ot(e, o[0]),
			s = Uo(i, t[o[0]], n, r);
		return !s || !s.length ? e.next(n, r) : s;
	}
	function kv(e, t, n, r) {
		const o = [];
		for (const i of Object.keys(t)) {
			const s = t[i];
			if (!s) continue;
			const a = Ot(e, i),
				c = Uo(a, s, n, r);
			c && o.push(...c);
		}
		return o.length ? o : e.next(n, r);
	}
	function Uo(e, t, n, r) {
		return typeof t == "string"
			? wv(e, t, n, r)
			: Object.keys(t).length === 1
				? _v(e, t, n, r)
				: kv(e, t, n, r);
	}
	function Sv(e) {
		return Object.keys(e.states)
			.map((t) => e.states[t])
			.filter((t) => t.type === "history");
	}
	function tt(e, t) {
		let n = e;
		for (; n.parent && n.parent !== t; ) n = n.parent;
		return n.parent === t;
	}
	function xv(e, t) {
		const n = new Set(e),
			r = new Set(t);
		for (const o of n) if (r.has(o)) return !0;
		for (const o of r) if (n.has(o)) return !0;
		return !1;
	}
	function zl(e, t, n) {
		const r = new Set();
		for (const o of e) {
			let i = !1;
			const s = new Set();
			for (const a of r)
				if (xv(Wo([o], t, n), Wo([a], t, n)))
					if (tt(o.source, a.source)) s.add(a);
					else {
						i = !0;
						break;
					}
			if (!i) {
				for (const a of s) r.delete(a);
				r.add(o);
			}
		}
		return Array.from(r);
	}
	function Cv(e) {
		const [t, ...n] = e;
		for (const r of wn(t, void 0)) if (n.every((o) => tt(o, r))) return r;
	}
	function Vo(e, t) {
		if (!e.target) return [];
		const n = new Set();
		for (const r of e.target)
			if (pt(r))
				if (t[r.id]) for (const o of t[r.id]) n.add(o);
				else for (const o of Vo(Sl(r), t)) n.add(o);
			else n.add(r);
		return [...n];
	}
	function Tl(e, t) {
		const n = Vo(e, t);
		if (!n) return;
		if (!e.reenter && n.every((o) => o === e.source || tt(o, e.source)))
			return e.source;
		const r = Cv(n.concat(e.source));
		if (r) return r;
		if (!e.reenter) return e.source.machine.root;
	}
	function Wo(e, t, n) {
		var o;
		const r = new Set();
		for (const i of e)
			if ((o = i.target) != null && o.length) {
				const s = Tl(i, n);
				i.reenter && i.source === s && r.add(s);
				for (const a of t) tt(a, s) && r.add(a);
			}
		return [...r];
	}
	function zv(e, t) {
		if (e.length !== t.size) return !1;
		for (const n of e) if (!t.has(n)) return !1;
		return !0;
	}
	function qo(e, t, n, r, o, i) {
		if (!e.length) return t;
		const s = new Set(t._nodes);
		let a = t.historyValue;
		const c = zl(e, s, a);
		let l = t;
		o || ([l, a] = Ev(l, r, n, c, s, a, i)),
			(l = jt(
				l,
				r,
				n,
				c.flatMap((u) => u.actions),
				i,
				void 0,
			)),
			(l = Iv(l, r, n, c, s, i, a, o));
		const d = [...s];
		l.status === "done" &&
			(l = jt(
				l,
				r,
				n,
				d.sort((u, p) => p.order - u.order).flatMap((u) => u.exit),
				i,
				void 0,
			));
		try {
			return a === t.historyValue && zv(t._nodes, s)
				? l
				: ft(l, { _nodes: d, historyValue: a });
		} catch (u) {
			throw u;
		}
	}
	function Tv(e, t, n, r, o) {
		if (r.output === void 0) return;
		const i = Lo(
			o.id,
			o.output !== void 0 && o.parent
				? No(o.output, e.context, t, n.self)
				: void 0,
		);
		return No(r.output, e.context, i, n.self);
	}
	function Iv(e, t, n, r, o, i, s, a) {
		let c = e;
		const l = new Set(),
			d = new Set();
		$v(r, s, d, l), a && d.add(e.machine.root);
		const u = new Set();
		for (const p of [...l].sort((f, g) => f.order - g.order)) {
			o.add(p);
			const f = [];
			f.push(...p.entry);
			for (const g of p.invoke)
				f.push(cv(g.src, { ...g, syncSnapshot: !!g.onSnapshot }));
			if (d.has(p)) {
				const g = p.initial.actions;
				f.push(...g);
			}
			if (
				((c = jt(
					c,
					t,
					n,
					f,
					i,
					p.invoke.map((g) => g.id),
				)),
				p.type === "final")
			) {
				const g = p.parent;
				let y =
						(g == null ? void 0 : g.type) === "parallel"
							? g
							: g == null
								? void 0
								: g.parent,
					b = y || p;
				for (
					(g == null ? void 0 : g.type) === "compound" &&
					i.push(
						Lo(
							g.id,
							p.output !== void 0 ? No(p.output, c.context, t, n.self) : void 0,
						),
					);
					(y == null ? void 0 : y.type) === "parallel" && !u.has(y) && Ho(o, y);
				)
					u.add(y), i.push(Lo(y.id)), (b = y), (y = y.parent);
				if (y) continue;
				c = ft(c, { status: "done", output: Tv(c, t, n, c.machine.root, b) });
			}
		}
		return c;
	}
	function $v(e, t, n, r) {
		for (const o of e) {
			const i = Tl(o, t);
			for (const a of o.target || [])
				!pt(a) &&
					(o.source !== a || o.source !== i || o.reenter) &&
					(r.add(a), n.add(a)),
					Nt(a, t, n, r);
			const s = Vo(o, t);
			for (const a of s) {
				const c = wn(a, i);
				(i == null ? void 0 : i.type) === "parallel" && c.push(i),
					Il(r, t, n, c, !o.source.parent && o.reenter ? void 0 : i);
			}
		}
	}
	function Nt(e, t, n, r) {
		var o;
		if (pt(e))
			if (t[e.id]) {
				const i = t[e.id];
				for (const s of i) r.add(s), Nt(s, t, n, r);
				for (const s of i) Jo(s, e.parent, r, t, n);
			} else {
				const i = Sl(e);
				for (const s of i.target)
					r.add(s),
						i === ((o = e.parent) == null ? void 0 : o.initial) &&
							n.add(e.parent),
						Nt(s, t, n, r);
				for (const s of i.target) Jo(s, e.parent, r, t, n);
			}
		else if (e.type === "compound") {
			const [i] = e.initial.target;
			pt(i) || (r.add(i), n.add(i)), Nt(i, t, n, r), Jo(i, e, r, t, n);
		} else if (e.type === "parallel")
			for (const i of Lt(e).filter((s) => !pt(s)))
				[...r].some((s) => tt(s, i)) ||
					(pt(i) || (r.add(i), n.add(i)), Nt(i, t, n, r));
	}
	function Il(e, t, n, r, o) {
		for (const i of r)
			if (((!o || tt(i, o)) && e.add(i), i.type === "parallel"))
				for (const s of Lt(i).filter((a) => !pt(a)))
					[...e].some((a) => tt(a, s)) || (e.add(s), Nt(s, t, n, e));
	}
	function Jo(e, t, n, r, o) {
		Il(n, r, o, wn(e, t));
	}
	function Ev(e, t, n, r, o, i, s, a) {
		let c = e;
		const l = Wo(r, o, i);
		l.sort((u, p) => p.order - u.order);
		let d;
		for (const u of l)
			for (const p of Sv(u)) {
				let f;
				p.history === "deep"
					? (f = (g) => Zo(g) && tt(g, u))
					: (f = (g) => g.parent === u),
					d ?? (d = { ...i }),
					(d[p.id] = Array.from(o).filter(f));
			}
		for (const u of l)
			(c = jt(
				c,
				t,
				n,
				[...u.exit, ...u.invoke.map((p) => ut(p.id))],
				s,
				void 0,
			)),
				o.delete(u);
		return [c, d || i];
	}
	function Rv(e, t) {
		return e.implementations.actions[t];
	}
	function $l(e, t, n, r, o, i) {
		const { machine: s } = e;
		let a = e;
		for (const c of r) {
			const l = typeof c == "function",
				d = l ? c : Rv(s, typeof c == "string" ? c : c.type),
				u = { context: a.context, event: t, self: n.self, system: n.system },
				p =
					l || typeof c == "string"
						? void 0
						: "params" in c
							? typeof c.params == "function"
								? c.params({ context: a.context, event: t })
								: c.params
							: void 0;
			if (!d || !("resolve" in d)) {
				n.actionExecutor({
					type:
						typeof c == "string"
							? c
							: typeof c == "object"
								? c.type
								: c.name || "(anonymous)",
					info: u,
					params: p,
					exec: d,
				});
				continue;
			}
			const f = d,
				[g, y, b] = f.resolve(n, a, u, p, d, o);
			(a = g),
				"retryResolve" in f && (i == null || i.push([f, y])),
				"execute" in f &&
					n.actionExecutor({
						type: f.type,
						info: u,
						params: y,
						exec: f.execute.bind(null, n, y),
					}),
				b && (a = $l(a, t, n, b, o, i));
		}
		return a;
	}
	function jt(e, t, n, r, o, i) {
		const s = i ? [] : void 0,
			a = $l(e, t, n, r, { internalQueue: o, deferredActorIds: i }, s);
		return (
			s == null ||
				s.forEach(([c, l]) => {
					c.retryResolve(n, a, l);
				}),
			a
		);
	}
	function Ko(e, t, n, r) {
		let o = e;
		const i = [];
		function s(l, d, u) {
			n.system._sendInspectionEvent({
				type: "@xstate.microstep",
				actorRef: n.self,
				event: d,
				snapshot: l,
				_transitions: u,
			}),
				i.push(l);
		}
		if (t.type === hr)
			return (
				(o = ft(El(o, t, n), { status: "stopped" })),
				s(o, t, []),
				{ snapshot: o, microstates: i }
			);
		let a = t;
		if (a.type !== cl) {
			const l = a,
				d = Qy(l),
				u = Rl(l, o);
			if (d && !u.length)
				return (
					(o = ft(e, { status: "error", error: l.error })),
					s(o, l, []),
					{ snapshot: o, microstates: i }
				);
			(o = qo(u, e, n, a, !1, r)), s(o, l, u);
		}
		let c = !0;
		for (; o.status === "active"; ) {
			let l = c ? Mv(o, a) : [];
			const d = l.length ? o : void 0;
			if (!l.length) {
				if (!r.length) break;
				(a = r.shift()), (l = Rl(a, o));
			}
			(o = qo(l, o, n, a, !1, r)), (c = o !== d), s(o, a, l);
		}
		return (
			o.status !== "active" && El(o, a, n), { snapshot: o, microstates: i }
		);
	}
	function El(e, t, n) {
		return jt(
			e,
			t,
			n,
			Object.values(e.children).map((r) => ut(r)),
			[],
			void 0,
		);
	}
	function Rl(e, t) {
		return t.machine.getTransitionData(t, e);
	}
	function Mv(e, t) {
		const n = new Set(),
			r = e._nodes.filter(Zo);
		for (const o of r)
			e: for (const i of [o].concat(wn(o, void 0)))
				if (i.always) {
					for (const s of i.always)
						if (s.guard === void 0 || bn(s.guard, e.context, t, e)) {
							n.add(s);
							break e;
						}
				}
		return zl(Array.from(n), new Set(e._nodes), e.historyValue);
	}
	function Pv(e, t) {
		const n = gr(vr(e, t));
		return kl(e, [...n]);
	}
	function Av(e) {
		return !!e && typeof e == "object" && "machine" in e && "value" in e;
	}
	const Lv = function (t) {
			return pl(t, this.value);
		},
		Ov = function (t) {
			return this.tags.has(t);
		},
		Nv = function (t) {
			const n = this.machine.getTransitionData(this, t);
			return (
				!!(n != null && n.length) &&
				n.some((r) => r.target !== void 0 || r.actions.length)
			);
		},
		jv = function () {
			const {
				_nodes: t,
				tags: n,
				machine: r,
				getMeta: o,
				toJSON: i,
				can: s,
				hasTag: a,
				matches: c,
				...l
			} = this;
			return { ...l, tags: Array.from(n) };
		},
		Bv = function () {
			return this._nodes.reduce(
				(t, n) => (n.meta !== void 0 && (t[n.id] = n.meta), t),
				{},
			);
		};
	function br(e, t) {
		return {
			status: e.status,
			output: e.output,
			error: e.error,
			machine: t,
			context: e.context,
			_nodes: e._nodes,
			value: kl(t.root, e._nodes),
			tags: new Set(e._nodes.flatMap((n) => n.tags)),
			children: e.children,
			historyValue: e.historyValue || {},
			matches: Lv,
			hasTag: Ov,
			can: Nv,
			getMeta: Bv,
			toJSON: jv,
		};
	}
	function ft(e, t = {}) {
		return br({ ...e, ...t }, e.machine);
	}
	function Dv(e) {
		if (typeof e != "object" || e === null) return {};
		const t = {};
		for (const n in e) {
			const r = e[n];
			Array.isArray(r) && (t[n] = r.map((o) => ({ id: o.id })));
		}
		return t;
	}
	function Fv(e, t) {
		const {
				_nodes: n,
				tags: r,
				machine: o,
				children: i,
				context: s,
				can: a,
				hasTag: c,
				matches: l,
				getMeta: d,
				toJSON: u,
				...p
			} = e,
			f = {};
		for (const y in i) {
			const b = i[y];
			f[y] = {
				snapshot: b.getPersistedSnapshot(t),
				src: b.src,
				systemId: b._systemId,
				syncSnapshot: b._syncSnapshot,
			};
		}
		return {
			...p,
			context: Ml(s),
			children: f,
			historyValue: Dv(p.historyValue),
		};
	}
	function Ml(e) {
		let t;
		for (const n in e) {
			const r = e[n];
			if (r && typeof r == "object")
				if ("sessionId" in r && "send" in r && "ref" in r)
					t ?? (t = Array.isArray(e) ? e.slice() : { ...e }),
						(t[n] = { xstate$$type: Do, id: r.id });
				else {
					const o = Ml(r);
					o !== r &&
						(t ?? (t = Array.isArray(e) ? e.slice() : { ...e }), (t[n] = o));
				}
		}
		return t ?? e;
	}
	function Zv(e, t, n, r, { event: o, id: i, delay: s }, { internalQueue: a }) {
		const c = t.machine.implementations.delays;
		if (typeof o == "string")
			throw new Error(
				`Only event objects may be used with raise; use raise({ type: "${o}" }) instead`,
			);
		const l = typeof o == "function" ? o(n, r) : o;
		let d;
		if (typeof s == "string") {
			const u = c && c[s];
			d = typeof u == "function" ? u(n, r) : u;
		} else d = typeof s == "function" ? s(n, r) : s;
		return (
			typeof d != "number" && a.push(l),
			[t, { event: l, id: i, delay: d }, void 0]
		);
	}
	function Hv(e, t) {
		const { event: n, delay: r, id: o } = t;
		if (typeof r == "number") {
			e.defer(() => {
				const i = e.self;
				e.system.scheduler.schedule(i, i, n, r, o);
			});
			return;
		}
	}
	function Uv(e, t) {
		function n(r, o) {}
		return (
			(n.type = "xstate.raise"),
			(n.event = e),
			(n.id = t == null ? void 0 : t.id),
			(n.delay = t == null ? void 0 : t.delay),
			(n.resolve = Zv),
			(n.execute = Hv),
			n
		);
	}
	const Pl = "xstate.promise.resolve",
		Al = "xstate.promise.reject",
		wr = new WeakMap();
	function Ce(e) {
		return {
			config: e,
			transition: (n, r, o) => {
				var i;
				if (n.status !== "active") return n;
				switch (r.type) {
					case Pl: {
						const s = r.data;
						return { ...n, status: "done", output: s, input: void 0 };
					}
					case Al:
						return { ...n, status: "error", error: r.data, input: void 0 };
					case hr:
						return (
							(i = wr.get(o.self)) == null || i.abort(),
							{ ...n, status: "stopped", input: void 0 }
						);
					default:
						return n;
				}
			},
			start: (n, { self: r, system: o, emit: i }) => {
				if (n.status !== "active") return;
				const s = new AbortController();
				wr.set(r, s),
					Promise.resolve(
						e({
							input: n.input,
							system: o,
							self: r,
							signal: s.signal,
							emit: i,
						}),
					).then(
						(c) => {
							r.getSnapshot().status === "active" &&
								(wr.delete(r), o._relay(r, r, { type: Pl, data: c }));
						},
						(c) => {
							r.getSnapshot().status === "active" &&
								(wr.delete(r), o._relay(r, r, { type: Al, data: c }));
						},
					);
			},
			getInitialSnapshot: (n, r) => ({
				status: "active",
				output: void 0,
				error: void 0,
				input: r,
			}),
			getPersistedSnapshot: (n) => n,
			restoreSnapshot: (n) => n,
		};
	}
	function Vv(e, { machine: t, context: n }, r, o) {
		const i = (s, a) => {
			if (typeof s == "string") {
				const c = Bo(t, s);
				if (!c)
					throw new Error(
						`Actor logic '${s}' not implemented in machine '${t.id}'`,
					);
				const l = At(c, {
					id: a == null ? void 0 : a.id,
					parent: e.self,
					syncSnapshot: a == null ? void 0 : a.syncSnapshot,
					input:
						typeof (a == null ? void 0 : a.input) == "function"
							? a.input({ context: n, event: r, self: e.self })
							: a == null
								? void 0
								: a.input,
					src: s,
					systemId: a == null ? void 0 : a.systemId,
				});
				return (o[l.id] = l), l;
			} else
				return At(s, {
					id: a == null ? void 0 : a.id,
					parent: e.self,
					syncSnapshot: a == null ? void 0 : a.syncSnapshot,
					input: a == null ? void 0 : a.input,
					src: s,
					systemId: a == null ? void 0 : a.systemId,
				});
		};
		return (s, a) => {
			const c = i(s, a);
			return (
				(o[c.id] = c),
				e.defer(() => {
					c._processingStatus !== pe.Stopped && c.start();
				}),
				c
			);
		};
	}
	function Wv(e, t, n, r, { assignment: o }) {
		if (!t.context)
			throw new Error(
				"Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.",
			);
		const i = {},
			s = {
				context: t.context,
				event: n.event,
				spawn: Vv(e, t, n.event, i),
				self: e.self,
				system: e.system,
			};
		let a = {};
		if (typeof o == "function") a = o(s, r);
		else
			for (const l of Object.keys(o)) {
				const d = o[l];
				a[l] = typeof d == "function" ? d(s, r) : d;
			}
		const c = Object.assign({}, t.context, a);
		return [
			ft(t, {
				context: c,
				children: Object.keys(i).length ? { ...t.children, ...i } : t.children,
			}),
			void 0,
			void 0,
		];
	}
	function z(e) {
		function t(n, r) {}
		return (t.type = "xstate.assign"), (t.assignment = e), (t.resolve = Wv), t;
	}
	const Ll = new WeakMap();
	function Bt(e, t, n) {
		let r = Ll.get(e);
		return (
			r ? t in r || (r[t] = n()) : ((r = { [t]: n() }), Ll.set(e, r)), r[t]
		);
	}
	const qv = {},
		_n = (e) =>
			typeof e == "string"
				? { type: e }
				: typeof e == "function"
					? "resolve" in e
						? { type: e.type }
						: { type: e.name }
					: e;
	class _r {
		constructor(t, n) {
			if (
				((this.config = t),
				(this.key = void 0),
				(this.id = void 0),
				(this.type = void 0),
				(this.path = void 0),
				(this.states = void 0),
				(this.history = void 0),
				(this.entry = void 0),
				(this.exit = void 0),
				(this.parent = void 0),
				(this.machine = void 0),
				(this.meta = void 0),
				(this.output = void 0),
				(this.order = -1),
				(this.description = void 0),
				(this.tags = []),
				(this.transitions = void 0),
				(this.always = void 0),
				(this.parent = n._parent),
				(this.key = n._key),
				(this.machine = n._machine),
				(this.path = this.parent ? this.parent.path.concat(this.key) : []),
				(this.id = this.config.id || [this.machine.id, ...this.path].join(al)),
				(this.type =
					this.config.type ||
					(this.config.states && Object.keys(this.config.states).length
						? "compound"
						: this.config.history
							? "history"
							: "atomic")),
				(this.description = this.config.description),
				(this.order = this.machine.idMap.size),
				this.machine.idMap.set(this.id, this),
				(this.states = this.config.states
					? hl(
							this.config.states,
							(r, o) =>
								new _r(r, { _parent: this, _key: o, _machine: this.machine }),
						)
					: qv),
				this.type === "compound" && !this.config.initial)
			)
				throw new Error(
					`No initial state specified for compound state node "#${this.id}". Try adding { initial: "${Object.keys(this.states)[0]}" } to the state config.`,
				);
			(this.history =
				this.config.history === !0 ? "shallow" : this.config.history || !1),
				(this.entry = De(this.config.entry).slice()),
				(this.exit = De(this.config.exit).slice()),
				(this.meta = this.config.meta),
				(this.output =
					this.type === "final" || !this.parent ? this.config.output : void 0),
				(this.tags = De(t.tags).slice());
		}
		_initialize() {
			(this.transitions = yv(this)),
				this.config.always &&
					(this.always = Pt(this.config.always).map((t) => dt(this, ll, t))),
				Object.keys(this.states).forEach((t) => {
					this.states[t]._initialize();
				});
		}
		get definition() {
			return {
				id: this.id,
				key: this.key,
				version: this.machine.version,
				type: this.type,
				initial: this.initial
					? {
							target: this.initial.target,
							source: this,
							actions: this.initial.actions.map(_n),
							eventType: null,
							reenter: !1,
							toJSON: () => ({
								target: this.initial.target.map((t) => `#${t.id}`),
								source: `#${this.id}`,
								actions: this.initial.actions.map(_n),
								eventType: null,
							}),
						}
					: void 0,
				history: this.history,
				states: hl(this.states, (t) => t.definition),
				on: this.on,
				transitions: [...this.transitions.values()]
					.flat()
					.map((t) => ({ ...t, actions: t.actions.map(_n) })),
				entry: this.entry.map(_n),
				exit: this.exit.map(_n),
				meta: this.meta,
				order: this.order || -1,
				output: this.output,
				invoke: this.invoke,
				description: this.description,
				tags: this.tags,
			};
		}
		toJSON() {
			return this.definition;
		}
		get invoke() {
			return Bt(this, "invoke", () =>
				De(this.config.invoke).map((t, n) => {
					const { src: r, systemId: o } = t,
						i = t.id ?? vl(this.id, n),
						s = typeof r == "string" ? r : `xstate.invoke.${vl(this.id, n)}`;
					return {
						...t,
						src: s,
						id: i,
						systemId: o,
						toJSON() {
							const { onDone: a, onError: c, ...l } = t;
							return { ...l, type: "xstate.invoke", src: s, id: i };
						},
					};
				}),
			);
		}
		get on() {
			return Bt(this, "on", () =>
				[...this.transitions]
					.flatMap(([n, r]) => r.map((o) => [n, o]))
					.reduce((n, [r, o]) => ((n[r] = n[r] || []), n[r].push(o), n), {}),
			);
		}
		get after() {
			return Bt(this, "delayedTransitions", () => mv(this));
		}
		get initial() {
			return Bt(this, "initial", () => vv(this, this.config.initial));
		}
		next(t, n) {
			const r = n.type;
			let o;
			const i = Bt(this, `candidates-${r}`, () => gv(this, r));
			for (const s of i) {
				const { guard: a } = s,
					c = t.context;
				let l = !1;
				try {
					l = !a || bn(a, c, n, t);
				} catch (d) {
					const u =
						typeof a == "string" ? a : typeof a == "object" ? a.type : void 0;
					throw new Error(`Unable to evaluate guard ${u ? `'${u}' ` : ""}in transition for event '${r}' in state node '${this.id}':
${d.message}`);
				}
				if (l) {
					o = s;
					break;
				}
			}
			return o ? [o] : void 0;
		}
		get events() {
			return Bt(this, "events", () => {
				const { states: t } = this,
					n = new Set(this.ownEvents);
				if (t)
					for (const r of Object.keys(t)) {
						const o = t[r];
						if (o.states) for (const i of o.events) n.add(`${i}`);
					}
				return Array.from(n);
			});
		}
		get ownEvents() {
			const t = new Set(
				[...this.transitions.keys()].filter((n) =>
					this.transitions
						.get(n)
						.some((r) => !(!r.target && !r.actions.length && !r.reenter)),
				),
			);
			return Array.from(t);
		}
	}
	const Jv = "#";
	class Go {
		constructor(t, n) {
			(this.config = t),
				(this.version = void 0),
				(this.schemas = void 0),
				(this.implementations = void 0),
				(this.__xstatenode = !0),
				(this.idMap = new Map()),
				(this.root = void 0),
				(this.id = void 0),
				(this.states = void 0),
				(this.events = void 0),
				(this.id = t.id || "(machine)"),
				(this.implementations = {
					actors: (n == null ? void 0 : n.actors) ?? {},
					actions: (n == null ? void 0 : n.actions) ?? {},
					delays: (n == null ? void 0 : n.delays) ?? {},
					guards: (n == null ? void 0 : n.guards) ?? {},
				}),
				(this.version = this.config.version),
				(this.schemas = this.config.schemas),
				(this.transition = this.transition.bind(this)),
				(this.getInitialSnapshot = this.getInitialSnapshot.bind(this)),
				(this.getPersistedSnapshot = this.getPersistedSnapshot.bind(this)),
				(this.restoreSnapshot = this.restoreSnapshot.bind(this)),
				(this.start = this.start.bind(this)),
				(this.root = new _r(t, { _key: this.id, _machine: this })),
				this.root._initialize(),
				(this.states = this.root.states),
				(this.events = this.root.events);
		}
		provide(t) {
			const {
				actions: n,
				guards: r,
				actors: o,
				delays: i,
			} = this.implementations;
			return new Go(this.config, {
				actions: { ...n, ...t.actions },
				guards: { ...r, ...t.guards },
				actors: { ...o, ...t.actors },
				delays: { ...i, ...t.delays },
			});
		}
		resolveState(t) {
			const n = Pv(this.root, t.value),
				r = gr(vr(this.root, n));
			return br(
				{
					_nodes: [...r],
					context: t.context || {},
					children: {},
					status: Ho(r, this.root) ? "done" : t.status || "active",
					output: t.output,
					error: t.error,
					historyValue: t.historyValue,
				},
				this,
			);
		}
		transition(t, n, r) {
			return Ko(t, n, r, []).snapshot;
		}
		microstep(t, n, r) {
			return Ko(t, n, r, []).microstates;
		}
		getTransitionData(t, n) {
			return Uo(this.root, t.value, t, n) || [];
		}
		getPreInitialState(t, n, r) {
			const { context: o } = this.config,
				i = br(
					{
						context: typeof o != "function" && o ? o : {},
						_nodes: [this.root],
						children: {},
						status: "active",
					},
					this,
				);
			return typeof o == "function"
				? jt(
						i,
						n,
						t,
						[
							z(({ spawn: a, event: c, self: l }) =>
								o({ spawn: a, input: c.input, self: l }),
							),
						],
						r,
						void 0,
					)
				: i;
		}
		getInitialSnapshot(t, n) {
			const r = dl(n),
				o = [],
				i = this.getPreInitialState(t, r, o),
				s = qo(
					[
						{
							target: [...Cl(this.root)],
							source: this.root,
							reenter: !0,
							actions: [],
							eventType: null,
							toJSON: null,
						},
					],
					i,
					t,
					r,
					!0,
					o,
				),
				{ snapshot: a } = Ko(s, r, t, o);
			return a;
		}
		start(t) {
			Object.values(t.children).forEach((n) => {
				n.getSnapshot().status === "active" && n.start();
			});
		}
		getStateNodeById(t) {
			const n = Oo(t),
				r = n.slice(1),
				o = mr(n[0]) ? n[0].slice(Jv.length) : n[0],
				i = this.idMap.get(o);
			if (!i)
				throw new Error(
					`Child state node '#${o}' does not exist on machine '${this.id}'`,
				);
			return yr(i, r);
		}
		get definition() {
			return this.root.definition;
		}
		toJSON() {
			return this.definition;
		}
		getPersistedSnapshot(t, n) {
			return Fv(t, n);
		}
		restoreSnapshot(t, n) {
			const r = {},
				o = t.children;
			Object.keys(o).forEach((u) => {
				const p = o[u],
					f = p.snapshot,
					g = p.src,
					y = typeof g == "string" ? Bo(this, g) : g;
				if (!y) return;
				const b = At(y, {
					id: u,
					parent: n.self,
					syncSnapshot: p.syncSnapshot,
					snapshot: f,
					src: g,
					systemId: p.systemId,
				});
				r[u] = b;
			});
			function i(u, p) {
				if (p instanceof _r) return p;
				try {
					return u.machine.getStateNodeById(p.id);
				} catch {}
			}
			function s(u, p) {
				if (!p || typeof p != "object") return {};
				const f = {};
				for (const g in p) {
					const y = p[g];
					for (const b of y) {
						const v = i(u, b);
						v && (f[g] ?? (f[g] = []), f[g].push(v));
					}
				}
				return f;
			}
			const a = s(this.root, t.historyValue),
				c = br(
					{
						...t,
						children: r,
						_nodes: Array.from(gr(vr(this.root, t.value))),
						historyValue: a,
					},
					this,
				),
				l = new Set();
			function d(u, p) {
				if (!l.has(u)) {
					l.add(u);
					for (const f in u) {
						const g = u[f];
						if (g && typeof g == "object") {
							if ("xstate$$type" in g && g.xstate$$type === Do) {
								u[f] = p[g.id];
								continue;
							}
							d(g, p);
						}
					}
				}
			}
			return d(c.context, r), c;
		}
	}
	function Kv(e, t, n, r, { event: o }) {
		const i = typeof o == "function" ? o(n, r) : o;
		return [t, { event: i }, void 0];
	}
	function Gv(e, { event: t }) {
		e.defer(() => e.emit(t));
	}
	function he(e) {
		function t(n, r) {}
		return (
			(t.type = "xstate.emit"),
			(t.event = e),
			(t.resolve = Kv),
			(t.execute = Gv),
			t
		);
	}
	let Yo = (function (e) {
		return (e.Parent = "#_parent"), (e.Internal = "#_internal"), e;
	})({});
	function Yv(e, t, n, r, { to: o, event: i, id: s, delay: a }, c) {
		var g;
		const l = t.machine.implementations.delays;
		if (typeof i == "string")
			throw new Error(
				`Only event objects may be used with sendTo; use sendTo({ type: "${i}" }) instead`,
			);
		const d = typeof i == "function" ? i(n, r) : i;
		let u;
		if (typeof a == "string") {
			const y = l && l[a];
			u = typeof y == "function" ? y(n, r) : y;
		} else u = typeof a == "function" ? a(n, r) : a;
		const p = typeof o == "function" ? o(n, r) : o;
		let f;
		if (typeof p == "string") {
			if (
				(p === Yo.Parent
					? (f = e.self._parent)
					: p === Yo.Internal
						? (f = e.self)
						: p.startsWith("#_")
							? (f = t.children[p.slice(2)])
							: (f =
									(g = c.deferredActorIds) != null && g.includes(p)
										? p
										: t.children[p]),
				!f)
			)
				throw new Error(
					`Unable to send event to actor '${p}' from machine '${t.machine.id}'.`,
				);
		} else f = p || e.self;
		return [
			t,
			{
				to: f,
				targetId: typeof p == "string" ? p : void 0,
				event: d,
				id: s,
				delay: u,
			},
			void 0,
		];
	}
	function Xv(e, t, n) {
		typeof n.to == "string" && (n.to = t.children[n.to]);
	}
	function Qv(e, t) {
		e.defer(() => {
			const { to: n, event: r, delay: o, id: i } = t;
			if (typeof o == "number") {
				e.system.scheduler.schedule(e.self, n, r, o, i);
				return;
			}
			e.system._relay(e.self, n, r.type === Jy ? ul(e.self.id, r.data) : r);
		});
	}
	function Ol(e, t, n) {
		function r(o, i) {}
		return (
			(r.type = "xstate.sendTo"),
			(r.to = e),
			(r.event = t),
			(r.id = n == null ? void 0 : n.id),
			(r.delay = n == null ? void 0 : n.delay),
			(r.resolve = Yv),
			(r.retryResolve = Xv),
			(r.execute = Qv),
			r
		);
	}
	function eb(e, t) {
		return Ol(Yo.Parent, e, t);
	}
	function kn(e, t) {
		const n = De(t);
		if (!n.includes(e.type)) {
			const r =
				n.length === 1 ? `type "${n[0]}"` : `one of types "${n.join('", "')}"`;
			throw new Error(`Expected event ${JSON.stringify(e)} to have ${r}`);
		}
	}
	function tb(e, t) {
		return new Go(e, t);
	}
	function Sn({ schemas: e, actors: t, actions: n, guards: r, delays: o }) {
		return {
			createStateConfig: (i) => i,
			createMachine: (i) =>
				tb(
					{ ...i, schemas: e },
					{ actors: t, actions: n, guards: r, delays: o },
				),
		};
	}
	const Dt = { device: "desktop", traits: {} };
	function Nl(e) {
		return e === "or" ? "or" : "and";
	}
	function Ft(e) {
		const t = e == null ? void 0 : e.trim().toLowerCase();
		return t || null;
	}
	function kr(e) {
		return (
			(e == null
				? void 0
				: e.map((t) => t.trim().toLowerCase()).filter(Boolean)) ?? []
		);
	}
	function nb(e, t) {
		return e[t] ?? !0;
	}
	function jl(e, t) {
		return nb(e, t);
	}
	function rb(e, t) {
		const n = kr(e.languages),
			r = kr(e.locales),
			o = Ft(t.language),
			i = Ft(t.locale),
			s = n.length === 0 || (o != null && n.includes(o)),
			a = r.length === 0 || (i != null && r.includes(i));
		return s && a;
	}
	function ob(e) {
		if (typeof e != "object" || e == null) return !1;
		const t = e;
		return (
			typeof t.traitId == "string" &&
			typeof t.traitSlug == "string" &&
			(t.valueType === "string" || t.valueType === "number") &&
			typeof t.operator == "string" &&
			Array.isArray(t.values) &&
			t.values.every((n) => typeof n == "string")
		);
	}
	function ib(e) {
		return Array.isArray(e.traitConditions) ? e.traitConditions.filter(ob) : [];
	}
	function Sr(e) {
		return typeof e == "string" && e.trim().length > 0;
	}
	function Xo(e) {
		if (!Sr(e)) return null;
		const t = Number(e);
		return Number.isFinite(t) ? t : null;
	}
	function sb(e, t) {
		const n = Xo(t);
		if (n == null) return !1;
		if (e.operator === "in")
			return e.values.some((o) => {
				const i = Xo(o);
				return i != null && n === i;
			});
		const r = Xo(e.values[0]);
		if (r == null) return !1;
		switch (e.operator) {
			case "equals":
				return n === r;
			case "notEquals":
				return n !== r;
			case "greaterThan":
				return n > r;
			case "greaterThanOrEqual":
				return n >= r;
			case "lessThan":
				return n < r;
			case "lessThanOrEqual":
				return n <= r;
			default:
				return !1;
		}
	}
	function ab(e, t) {
		switch (e.operator) {
			case "equals":
				return t === e.values[0];
			case "notEquals":
				return t !== e.values[0];
			case "in":
				return e.values.includes(t);
			case "contains":
				return t.includes(e.values[0] ?? "");
			default:
				return !1;
		}
	}
	function lb(e, t) {
		const n = t[e.traitSlug];
		return e.operator === "exists"
			? Sr(n)
			: e.operator === "notExists"
				? !Sr(n)
				: Sr(n)
					? e.valueType === "number"
						? sb(e, n)
						: ab(e, n)
					: !1;
	}
	function Bl(e, t) {
		return ib(e).every((r) => lb(r, t));
	}
	function Dl(e, t) {
		const n = [],
			r = kr(e.languages),
			o = kr(e.locales);
		return (
			jl(e, t.device) || n.push("blocked_by_device"),
			((r.length > 0 && !Ft(t.language)) ||
				(r.length > 0 && !r.includes(Ft(t.language) ?? ""))) &&
				n.push("blocked_by_language"),
			((o.length > 0 && !Ft(t.locale)) ||
				(o.length > 0 && !o.includes(Ft(t.locale) ?? ""))) &&
				n.push("blocked_by_locale"),
			Bl(e, t.traits) || n.push("blocked_by_trait"),
			n
		);
	}
	function Fl(e) {
		return [...new Set(e)];
	}
	function Zt(e, t) {
		return jl(e, t.device) && rb(e, t) && Bl(e, t.traits);
	}
	function Qo(e, t = Dt, n = "and") {
		if (!e || e.length === 0) return !0;
		const r = { ...Dt, ...t, traits: t.traits ?? Dt.traits },
			o = e.filter((s) => s.type !== "Exclude");
		return e.filter((s) => s.type === "Exclude").some((s) => Zt(s, r))
			? !1
			: o.length === 0
				? !0
				: Nl(n) === "or"
					? o.some((s) => Zt(s, r))
					: o.every((s) => Zt(s, r));
	}
	function cb(e, t = Dt, n = "and") {
		if (!e || e.length === 0) return [];
		const r = { ...Dt, ...t, traits: t.traits ?? Dt.traits },
			o = e.filter((s) => s.type !== "Exclude");
		return e.filter((s) => s.type === "Exclude").some((s) => Zt(s, r))
			? ["blocked_by_audience_rule"]
			: o.length === 0
				? []
				: Nl(n) === "or"
					? o.some((s) => Zt(s, r))
						? []
						: Fl(o.flatMap((s) => Dl(s, r)))
					: Fl(o.flatMap((s) => Dl(s, r)));
	}
	function Zl(e, t) {
		return e === t;
	}
	function ub(e) {
		return e === "or" ? "or" : "and";
	}
	function ei(e, t, n) {
		const r = e.completion == null || e.completion === t.completion,
			o = e.recruited == null || e.recruited === t.recruited,
			i =
				e.tasks.length === 0 ||
				e.tasks.some((u) => t.task != null && n(u.id, t.task)),
			s =
				e.segmentValues.length === 0 ||
				e.segmentValues.some((u) => t.segments.some((p) => n(u.id, p))),
			a =
				e.singleSelectItems.length === 0 ||
				e.singleSelectItems.some((u) => t.singleSelect.some((p) => n(u.id, p))),
			c =
				e.multiSelectItems.length === 0 ||
				e.multiSelectItems.some((u) => t.multiSelect.some((p) => n(u.id, p))),
			l =
				e.likertScaleItems.length === 0 ||
				e.likertScaleItems.some((u) => t.scales.some((p) => n(u.id, p))),
			d = Zt(e, t);
		return r && o && i && s && a && c && l && d;
	}
	function Hl(e, t, n = Zl, r = "and") {
		if (e.length === 0) return !0;
		const o = typeof n == "function" ? n : Zl,
			i = ub(typeof n == "string" ? n : r),
			s = e.filter((l) => l.type === "Include");
		return e.filter((l) => l.type === "Exclude").some((l) => ei(l, t, o))
			? !1
			: s.length === 0
				? !0
				: i === "or"
					? s.some((l) => ei(l, t, o))
					: s.every((l) => ei(l, t, o));
	}
	const Ul = {
		en: {
			minLength: (e) => `At least ${e} character${e > 1 ? "s" : ""}`,
			maxLength: (e) => `Text exceeds ${e} character limit`,
			selectionMin: (e) =>
				`Please select at least ${e} option${e > 1 ? "s" : ""}`,
			selectionMax: (e) =>
				`Please select no more than ${e} option${e > 1 ? "s" : ""}`,
			selectionRange: (e, t) =>
				`Select at least ${e} option${e > 1 ? "s" : ""}, max ${t}`,
			selectionBetween: (e, t) => `Select ${e} to ${t} options`,
			selectionAtLeast: (e) => `Select at least ${e}`,
			selectionUpTo: (e) => `Select max ${e}`,
			optionRequired: "Please select an option",
			invalidEmail: "Invalid email address",
			consentRequired: "Please provide consent to store your information",
			contactInfoRequired: "Please provide your contact information",
			emailRequired: "Please provide your email address",
		},
		pt: {
			minLength: (e) => `Mínimo ${e} caractere${e > 1 ? "s" : ""}`,
			maxLength: (e) => `Texto excede o limite de ${e} caracteres`,
			selectionMin: (e) =>
				`Selecione pelo menos ${e} opç${e > 1 ? "ões" : "ão"}`,
			selectionMax: (e) =>
				`Selecione no máximo ${e} opç${e > 1 ? "ões" : "ão"}`,
			selectionRange: (e, t) =>
				`Selecione pelo menos ${e} opç${e > 1 ? "ões" : "ão"}, no máximo ${t}`,
			selectionBetween: (e, t) => `Selecione entre ${e} e ${t} opções`,
			selectionAtLeast: (e) =>
				`Selecione pelo menos ${e} opç${e > 1 ? "ões" : "ão"}`,
			selectionUpTo: (e) => `Selecione até ${e} opç${e > 1 ? "ões" : "ão"}`,
			optionRequired: "Selecione uma opção",
			invalidEmail: "Endereço de email inválido",
			consentRequired: "Forneça consentimento para armazenar suas informações",
			contactInfoRequired: "Forneça suas informações de contato",
			emailRequired: "Forneça seu endereço de email",
		},
		de: {
			minLength: (e) => `Mindestens ${e} Zeichen`,
			maxLength: (e) => `Text überschreitet das Limit von ${e} Zeichen`,
			selectionMin: (e) =>
				`Bitte wählen Sie mindestens ${e} Option${e > 1 ? "en" : ""}`,
			selectionMax: (e) =>
				`Bitte wählen Sie höchstens ${e} Option${e > 1 ? "en" : ""}`,
			selectionRange: (e, t) =>
				`Wählen Sie mindestens ${e} Option${e > 1 ? "en" : ""}, maximal ${t}`,
			selectionBetween: (e, t) => `Wählen Sie zwischen ${e} und ${t} Optionen`,
			selectionAtLeast: (e) =>
				`Wählen Sie mindestens ${e} Option${e > 1 ? "en" : ""}`,
			selectionUpTo: (e) => `Wählen Sie bis zu ${e} Option${e > 1 ? "en" : ""}`,
			optionRequired: "Bitte wählen Sie eine Option",
			invalidEmail: "Ungültige E-Mail-Adresse",
			consentRequired:
				"Bitte geben Sie Ihre Einwilligung zur Speicherung Ihrer Daten",
			contactInfoRequired: "Bitte geben Sie Ihre Kontaktinformationen an",
			emailRequired: "Bitte geben Sie Ihre E-Mail-Adresse an",
		},
		no: {
			minLength: (e) => `Minst ${e} tegn`,
			maxLength: (e) => `Tekst overskrider ${e} tegn`,
			selectionMin: (e) => `Velg minst ${e} alternativ${e > 1 ? "er" : ""}`,
			selectionMax: (e) => `Velg maksimalt ${e} alternativ${e > 1 ? "er" : ""}`,
			selectionRange: (e, t) =>
				`Velg minst ${e} alternativ${e > 1 ? "er" : ""}, maks ${t}`,
			selectionBetween: (e, t) => `Velg mellom ${e} og ${t} alternativer`,
			selectionAtLeast: (e) => `Velg minst ${e} alternativ${e > 1 ? "er" : ""}`,
			selectionUpTo: (e) => `Velg opptil ${e} alternativ${e > 1 ? "er" : ""}`,
			optionRequired: "Velg et alternativ",
			invalidEmail: "Ugyldig e-postadresse",
			consentRequired: "Gi samtykke til å lagre informasjonen din",
			contactInfoRequired: "Oppgi kontaktinformasjonen din",
			emailRequired: "Oppgi e-postadressen din",
		},
		sv: {
			minLength: (e) => `Minst ${e} tecken`,
			maxLength: (e) => `Text överskrider ${e} tecken`,
			selectionMin: (e) => `Välj minst ${e} alternativ`,
			selectionMax: (e) => `Välj högst ${e} alternativ`,
			selectionRange: (e, t) => `Välj minst ${e} alternativ, max ${t}`,
			selectionBetween: (e, t) => `Välj mellan ${e} och ${t} alternativ`,
			selectionAtLeast: (e) => `Välj minst ${e} alternativ`,
			selectionUpTo: (e) => `Välj upp till ${e} alternativ`,
			optionRequired: "Välj ett alternativ",
			invalidEmail: "Ogiltig e-postadress",
			consentRequired: "Ge samtycke för att lagra din information",
			contactInfoRequired: "Ange din kontaktinformation",
			emailRequired: "Ange din e-postadress",
		},
	};
	function xn(e) {
		return Ul[e || "no"] || Ul.no;
	}
	function Vl(e) {
		const {
			dirty: t,
			minValid: n,
			maxValid: r,
			min: o,
			max: i,
			language: s,
		} = e;
		if (!t) return null;
		const a = xn(s);
		return (!n || !r) && o && i
			? a.selectionRange(o, i)
			: !n && o
				? a.selectionMin(o)
				: !r && i
					? a.selectionMax(i)
					: null;
	}
	function Wl(e) {
		return xn(e.language).selectionMax(e.max);
	}
	function ql(e) {
		const { min: t = 0, max: n, totalOptions: r, language: o } = e,
			i = t > 0,
			s = n !== void 0 && n < r;
		if (!(i || s)) return null;
		const a = xn(o);
		return i && s
			? a.selectionBetween(t, n)
			: i
				? a.selectionAtLeast(t)
				: a.selectionUpTo(n ?? r);
	}
	function Jl(e) {
		const { content: t, card: n, hasBeenTouched: r, language: o } = e,
			{ minLength: i = 0, maxLength: s, validations: a } = n,
			c = xn(o);
		for (const l of a) {
			const d = l.validation;
			let u = !0;
			if (
				(d.type === "ValidationRegex" || d.type === "OrgValidationRegex") &&
				((u = new RegExp(d.regex ?? "").test(t)), !(d.negate !== u))
			)
				return {
					status: "validation-regex-failed",
					valid: !1,
					color: "error",
					shouldAnnounce: !1,
					errorMessage:
						l.errMessage ?? d.errMessage ?? "Pattern validation failed",
				};
		}
		if (i > 0 && t.length < i)
			return {
				status: "under-minimum",
				valid: !1,
				color: r ? "error" : "warning",
				shouldAnnounce: !1,
				errorMessage: c.minLength(i),
			};
		if (s && s > 10) {
			if (t.length > s)
				return {
					status: "over-limit",
					valid: !1,
					color: "error",
					shouldAnnounce: !0,
					errorMessage: c.maxLength(s),
				};
			if (t.length >= s * 0.9)
				return {
					status: "approaching-limit",
					valid: !0,
					color: "warning",
					shouldAnnounce: !0,
					errorMessage: null,
				};
		}
		return {
			status: "valid",
			valid: !0,
			color: void 0,
			shouldAnnounce: !1,
			errorMessage: null,
		};
	}
	function xr(e) {
		const { selectedCount: t, card: n, hasBeenSubmitted: r, language: o } = e,
			{ min: i = 0, max: s } = n;
		return s && t > s
			? {
					status: "over-max",
					valid: !1,
					color: "error",
					shouldAnnounce: !0,
					errorMessage:
						Vl({
							dirty: !0,
							minValid: !0,
							maxValid: !1,
							min: i,
							max: s,
							language: o,
						}) || `Please select no more than ${s} option${s > 1 ? "s" : ""}`,
				}
			: r && i > 0 && t < i
				? {
						status: "under-minimum",
						valid: !1,
						color: "error",
						shouldAnnounce: !1,
						errorMessage:
							Vl({
								dirty: !0,
								minValid: !1,
								maxValid: !0,
								min: i,
								max: s,
								language: o,
							}) || `Please select at least ${i} option${i > 1 ? "s" : ""}`,
					}
				: {
						status: "valid",
						valid: !0,
						color: void 0,
						shouldAnnounce: !1,
						errorMessage: null,
					};
	}
	function Cr(e) {
		const {
			email: t,
			name: n,
			phone: r,
			consented: o,
			consentEnable: i,
			isRequired: s,
			hasBeenSubmitted: a,
			language: c,
		} = e;
		if (!a)
			return {
				status: "valid",
				valid: !0,
				color: void 0,
				shouldAnnounce: !1,
				errorMessage: null,
			};
		const l = xn(c),
			d = t.value || n.value || r.value;
		return t.value && !t.valid
			? {
					status: "email-invalid",
					valid: !1,
					color: "error",
					shouldAnnounce: !1,
					errorMessage: l.invalidEmail,
				}
			: i && !o && d
				? {
						status: "consent-required",
						valid: !1,
						color: "error",
						shouldAnnounce: !1,
						errorMessage: l.consentRequired,
					}
				: i && o && !t.value
					? {
							status: "email-required",
							valid: !1,
							color: "error",
							shouldAnnounce: !1,
							errorMessage: l.emailRequired,
						}
					: s && !t.value
						? {
								status: "email-required",
								valid: !1,
								color: "error",
								shouldAnnounce: !1,
								errorMessage: l.emailRequired,
							}
						: s && i && !o
							? {
									status: "consent-required",
									valid: !1,
									color: "error",
									shouldAnnounce: !1,
									errorMessage: l.consentRequired,
								}
							: {
									status: "valid",
									valid: !0,
									color: void 0,
									shouldAnnounce: !1,
									errorMessage: null,
								};
	}
	function Kl(e) {
		const { selectedValues: t, value: n, max: r } = e;
		return t.includes(n)
			? { values: t.filter((o) => o !== n), changed: !0, limitReached: !1 }
			: r && t.length >= r
				? { values: [...t], changed: !1, limitReached: !0 }
				: { values: [...t, n], changed: !0, limitReached: !1 };
	}
	const db = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
	function zr(e, t) {
		const r = t
				.substring(20)
				.split("")
				.reduce((a, c) => {
					const l = db.indexOf(c);
					return a * (l || 1);
				}, 1),
			o = e.filter((a) => a.orderLocked !== !0),
			i = pb([...o], r),
			s = [];
		for (let a = 0; a < e.length; a++)
			if (e[a].orderLocked) s.push(e[a]);
			else {
				const c = i.shift();
				c && s.push(c);
			}
		return s;
	}
	function pb(e, t) {
		let n = e.length,
			r,
			o;
		for (; n; )
			(o = Math.floor(fb(t) * n--)), (r = e[n]), (e[n] = e[o]), (e[o] = r), t++;
		return e;
	}
	function fb(e) {
		const t = Math.sin(e++) * 1e4;
		return t - Math.floor(t);
	}
	function hb(e) {
		if (e.length >= 255) throw new TypeError("Alphabet too long");
		const t = new Uint8Array(256);
		for (let l = 0; l < t.length; l++) t[l] = 255;
		for (let l = 0; l < e.length; l++) {
			const d = e.charAt(l),
				u = d.charCodeAt(0);
			if (t[u] !== 255) throw new TypeError(d + " is ambiguous");
			t[u] = l;
		}
		const n = e.length,
			r = e.charAt(0),
			o = Math.log(n) / Math.log(256),
			i = Math.log(256) / Math.log(n);
		function s(l) {
			if (
				(l instanceof Uint8Array ||
					(ArrayBuffer.isView(l)
						? (l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength))
						: Array.isArray(l) && (l = Uint8Array.from(l))),
				!(l instanceof Uint8Array))
			)
				throw new TypeError("Expected Uint8Array");
			if (l.length === 0) return "";
			let d = 0,
				u = 0,
				p = 0;
			const f = l.length;
			for (; p !== f && l[p] === 0; ) p++, d++;
			const g = ((f - p) * i + 1) >>> 0,
				y = new Uint8Array(g);
			for (; p !== f; ) {
				let _ = l[p],
					S = 0;
				for (let x = g - 1; (_ !== 0 || S < u) && x !== -1; x--, S++)
					(_ += (256 * y[x]) >>> 0),
						(y[x] = (_ % n) >>> 0),
						(_ = (_ / n) >>> 0);
				if (_ !== 0) throw new Error("Non-zero carry");
				(u = S), p++;
			}
			let b = g - u;
			for (; b !== g && y[b] === 0; ) b++;
			let v = r.repeat(d);
			for (; b < g; ++b) v += e.charAt(y[b]);
			return v;
		}
		function a(l) {
			if (typeof l != "string") throw new TypeError("Expected String");
			if (l.length === 0) return new Uint8Array();
			let d = 0,
				u = 0,
				p = 0;
			for (; l[d] === r; ) u++, d++;
			const f = ((l.length - d) * o + 1) >>> 0,
				g = new Uint8Array(f);
			for (; d < l.length; ) {
				const _ = l.charCodeAt(d);
				if (_ > 255) return;
				let S = t[_];
				if (S === 255) return;
				let x = 0;
				for (let C = f - 1; (S !== 0 || x < p) && C !== -1; C--, x++)
					(S += (n * g[C]) >>> 0),
						(g[C] = (S % 256) >>> 0),
						(S = (S / 256) >>> 0);
				if (S !== 0) throw new Error("Non-zero carry");
				(p = x), d++;
			}
			let y = f - p;
			for (; y !== f && g[y] === 0; ) y++;
			const b = new Uint8Array(u + (f - y));
			let v = u;
			for (; y !== f; ) b[v++] = g[y++];
			return b;
		}
		function c(l) {
			const d = a(l);
			if (d) return d;
			throw new Error("Non-base" + n + " character");
		}
		return { encode: s, decodeUnsafe: a, decode: c };
	}
	const gb = hb(
		"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
	);
	function X(e) {
		const t = e.replace(/-/g, "").match(/.{2}/g);
		if (!t) return e;
		const n = t.map((o) => Number.parseInt(o, 16)),
			r = new Uint8Array(n);
		return gb.encode(r);
	}
	function Gl(e, t) {
		const n = t.length === 36 ? X(t) : t;
		return (e.length === 36 ? X(e) : e) === n;
	}
	async function Ht(e, t = {}) {
		const n = (t == null ? void 0 : t.apiHost) ?? "https://ingest.skyra.no";
		return fetch(`${n}/response`, {
			method: "POST",
			body: JSON.stringify(e),
			headers: { "Content-Type": "application/json" },
		});
	}
	function mb(e, t = {}) {
		const n = (t == null ? void 0 : t.apiHost) ?? "https://ingest.skyra.no";
		fetch(`${n}/diagnostics`, {
			method: "POST",
			body: JSON.stringify(e),
			headers: { "Content-Type": "application/json" },
			keepalive: !0,
		}).catch(() => {});
	}
	const yb = { nb: "no", nn: "no" };
	function vb(e, t) {
		if (!e) return null;
		const n = e.split("-")[0];
		if (t.includes(n)) return n;
		const r = yb[n];
		return r && t.includes(r) ? r : null;
	}
	function ti(e) {
		const t = [
			e.explicitLanguage,
			e.savedLanguage,
			e.htmlLang,
			e.browserLanguage,
		];
		for (const n of t) {
			const r = vb(n, e.enabledLanguages);
			if (r) return r;
		}
		return e.surveyDefault;
	}
	function bb(e) {
		var r, o;
		const t = (r = e.language) == null ? void 0 : r.code,
			n = ((o = e.languages) == null ? void 0 : o.map((i) => i.code)) || [];
		return t ? [t, ...n] : n;
	}
	function Yl(e) {
		const t = [];
		return (
			e.language && t.push(e.language), e.languages && t.push(...e.languages), t
		);
	}
	function Cn() {
		return typeof window > "u"
			? "desktop"
			: window.innerWidth < 768
				? "mobile"
				: window.innerWidth < 1024
					? "tablet"
					: "desktop";
	}
	function Tr() {
		return typeof navigator < "u" ? navigator.language : void 0;
	}
	function Ir(e) {
		return {
			device: Cn(),
			traits: e.traits ?? {},
			language: e.language,
			locale: e.locale ?? Tr(),
		};
	}
	function Xl(e, t) {
		return {
			completion: e.completion ?? null,
			recruited: e.recruited ?? null,
			task: e.task ?? null,
			device: (t == null ? void 0 : t.device) ?? "desktop",
			traits: (t == null ? void 0 : t.traits) ?? {},
			language: t == null ? void 0 : t.language,
			locale: t == null ? void 0 : t.locale,
			segments: Object.values((e == null ? void 0 : e.segments) ?? {}),
			singleSelect: Object.values((e == null ? void 0 : e.singleSelect) ?? {}),
			multiSelect: Object.values(
				(e == null ? void 0 : e.multiSelect) ?? {},
			).flat(),
			scales: Object.values((e == null ? void 0 : e.scales) ?? {}),
		};
	}
	function zn(e, t, n) {
		const r = e.findIndex((s) => s.order === t.currentCard),
			o = e.slice(r + 1),
			i = Xl(t.variables, n);
		for (const s of o) if (Hl(s.rules, i, Gl, s.ruleMode ?? "and")) return s;
		return null;
	}
	function wb(e, t, n) {
		const r = Xl(t.variables, n);
		for (const o of e) if (Hl(o.rules, r, Gl, o.ruleMode ?? "and")) return o;
		return null;
	}
	function _b(e, t, n, r, o) {
		const i = e.find((s) => s.order === t.currentCard);
		if (!i) return t;
		if (i.type === "TopTaskCard") t.variables.task = X(o);
		else if (i.type === "SegmentCard" && r) {
			const s = X(r),
				a = X(o);
			t.variables.segments = { ...t.variables.segments, [s]: a };
		} else if (i.type === "CompletionCard") t.variables.completion = o;
		else if (i.type === "LikertCard" && "likertItems" in i.likertScale) {
			if (i.likertScale.likertItems.find((a) => a.id === o)) {
				const a = X(i.id),
					c = X(o);
				t.variables.scales = { ...t.variables.scales, [a]: c };
			}
		} else if (i.type === "MultiSelectCard") {
			const s = X(i.id),
				a = o.map(X);
			t.variables.multiSelect = { ...t.variables.multiSelect, [s]: a };
		} else if (i.type === "InputCard") t.values[i.id] = o;
		else if (i.type === "RecruitmentCard") {
			const s = o;
			(t.variables.recruited = s !== void 0),
				s !== void 0 && (t.values[i.id] = s);
		} else if (i.type === "SingleSelectCard") {
			const s = X(i.id),
				a = X(o);
			t.variables.singleSelect = { ...t.variables.singleSelect, [s]: a };
		}
		return t;
	}
	function kb(e, t, n) {
		const r = zn(e, t, n);
		return t.currentCard !== void 0 && r
			? {
					...t,
					history: [...t.history, t.currentCard],
					currentCard: (r == null ? void 0 : r.order) ?? t.currentCard,
				}
			: t;
	}
	function Sb(e) {
		if (e.history.length === 0) return e;
		const [t, ...n] = [...e.history].reverse();
		return { ...e, currentCard: t, history: n.reverse() };
	}
	function xb(e, t, n) {
		return !!zn(e, t, n);
	}
	function Cb(e, t, n) {
		const r = zn(e, t, n);
		if (!r) return !1;
		const o = e.find((i) => i.order === r.order);
		return (o == null ? void 0 : o.size) === "Minimal";
	}
	function zb(e, t, n) {
		return !zn(e, t, n);
	}
	function Tb(e, t) {
		const n = t.currentCard,
			r = e.find((o) => o.order === n);
		return (r == null ? void 0 : r.type) === "MessageCard";
	}
	const Ib = k({ id: h(), code: h(), name: h() }),
		$b = k({
			code: h().nullish(),
			name: h().nullish(),
			"@textNext": h().nullish(),
			"@textPrev": h().nullish(),
			"@textClose": h().nullish(),
			"@textHide": h().nullish(),
			"@textMinimized": h().nullish(),
			"@textReplyLater": h().nullish(),
		}),
		$r = Ay.extend({
			cards: M(Da),
			confineToDomain: R().optional().default(!1),
			rendererVariant: L(["classic", "beta"]).optional(),
			languages: M(Ib).optional().nullable(),
			tr: M($b).optional().nullable(),
		});
	$r.array(), h().brand("SessionId");
	const Eb = h().brand("VisitorId");
	L(["open", "minimized", "closed", "loading", "hidden"]),
		L(["init", "capture", "completed", "closed", "blocked", "noconsent"]);
	const Rb = k({
			task: h().nullable().default(null),
			segments: re(h(), h()).nullable().default({}),
			completion: R().nullable().default(null),
			scales: re(h(), h()).nullable().default({}),
			traits: re(h(), h()).nullable().default({}),
			multiSelect: re(h(), M(h())).nullable().default({}),
			singleSelect: re(h(), h()).nullable().default({}),
			recruited: R().nullable().default(null),
		}),
		Tn = k({
			values: re(
				h(),
				h()
					.or(R())
					.or(re(h(), h().or(R()))),
			).default({}),
			variables: Rb.partial().default({}),
			history: M(D().int()).default([]),
			currentCard: D().min(0).optional(),
			path: h().optional(),
			state: h().optional(),
			lastSync: D().optional(),
		});
	k({ i: Eb, c: D() });
	function Fe(...e) {
		var t;
		(t = window.skyra) != null && t._debugEnabled && console.log(...e);
	}
	const Mb = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
	function Er(e, t) {
		const r = t
				.substring(20)
				.split("")
				.reduce((a, c) => {
					const l = Mb.indexOf(c);
					return a * l;
				}, 1),
			o = e.filter((a) => a.orderLocked !== !0),
			i = Pb(o, r);
		let s = [];
		for (let a = 0; a < e.length; a++)
			if (e[a].orderLocked) s.push(e[a]);
			else {
				const c = i.shift();
				c && s.push(c);
			}
		return s;
	}
	function Pb(e, t) {
		let n = e.length,
			r,
			o;
		for (; n; )
			(o = Math.floor(Ab(t) * n--)), (r = e[n]), (e[n] = e[o]), (e[o] = r), t++;
		return e;
	}
	function Ab(e) {
		let t = Math.sin(e++) * 1e4;
		return t - Math.floor(t);
	}
	function Ql(e, t, { firstCard: n, finalCard: r }) {
		var s;
		const o = (s = t.textClose) == null ? void 0 : s.trim(),
			i = e.renderType !== "Inline" && e.surveyType !== "Findability";
		return n && !r && i && o ? o : null;
	}
	function ze(e, t, n = {}) {
		return {
			next:
				[
					t.textNext,
					n.finalCard && t.type !== "MessageCard" ? t.textClose : null,
					n.finalCard ? e.textClose : null,
					e.textNext,
				].find(Boolean) ?? (n.finalCard ? "Close" : "Next"),
			back: t.textPrev ?? e.textPrev ?? "Back",
			minimized: t.textMinimized ?? e.textMinimized ?? "Continue",
			hide: t.textHide ?? e.textHide ?? "Hide",
			close: t.textClose ?? e.textClose ?? "Close",
			replyLater: t.textReplyLater ?? e.textReplyLater ?? "Reply later",
		};
	}
	const Lb = /^(Trigger|Path)/;
	k({
		id: E().optional(),
		ruleType: L(["Show", "Hide", "FollowOnly"]),
		desktop: R().default(!1),
		mobile: R().default(!1),
		tablet: R().default(!1),
		path: h().nullable().optional(),
		follow: R().default(!1),
		applyBelow: R().default(!1),
		isRegex: R().default(!1).optional(),
		domain: k({ id: E(), name: h() }).optional().nullable(),
	});
	function ni(e) {
		return [e.showRules, e.followRules, e.hideRules].some(
			(t) => t && t.length > 0,
		);
	}
	function Ob(e, t, n, r) {
		const o = new URL(t),
			i = o.hostname,
			s = o.pathname,
			a = e.domain ? Ro(e.domain.name, i) : !0,
			c =
				e.path &&
				Mo(decodeURI(s), decodeURI(e.path), e.applyBelow, e.isRegex ?? !1),
			l = n && e.follow;
		return [e[r], a, c || l].every(Boolean);
	}
	function Nb(e, t, n, r) {
		return e.follow && n ? !1 : Ya(e, t) && e[r];
	}
	function ri({
		urlString: e,
		surveyStarted: t,
		showRules: n,
		followRules: r = [],
		hideRules: o,
		device: i,
		isInline: s,
	}) {
		const a = n.some((u) => Ob(u, e, t, i)),
			c = r.some((u) => {
				const p = new URL(e),
					f = p.hostname,
					g = p.pathname,
					y = u.domain ? Ro(u.domain.name, f) : !0,
					b =
						u.path &&
						Mo(decodeURI(g), decodeURI(u.path), u.applyBelow, u.isRegex ?? !1);
				return u[i] && y && b;
			});
		return o.some((u) => Nb(u, e, t, i))
			? !1
			: a
				? !0
				: c
					? t
					: !!(n.length === 0 && r.length === 0 && o.length === 0 && s);
	}
	function Rr(e, t, n, r) {
		if (n) return new RegExp(t).test(e);
		const o = t.at(-1) === "/" && t.length > 1 ? t.slice(0, -1) : t,
			i = e.at(-1) === "/" && e.length > 1 ? e.slice(0, -1) : e;
		return r ? i === o : i.startsWith(o);
	}
	function oi(e, t, n) {
		if (e.domains.length > 0 && !e.domains.some((r) => n.hostname === r.name))
			return !1;
		if (t === "Trigger") {
			if (["PathBeginsWith", "TriggerPathBeginsWith"].includes(e.type))
				return Rr(n.pathname, e.value, e.isRegexp, !1);
			if (["PathIs", "TriggerPathIs"].includes(e.type))
				return Rr(n.pathname, e.value, e.isRegexp, !0);
		} else if (t === "Follow")
			return e.type === "FollowPathBeginsWith"
				? Rr(n.pathname, e.value, e.isRegexp, !1)
				: e.type === "FollowPathIs"
					? Rr(n.pathname, e.value, e.isRegexp, !0)
					: !1;
		return !1;
	}
	function ec(e, t, n) {
		if (n.length === 0) return !0;
		const r = new URL(e);
		for (const i of n) if (i.negate && oi(i, t, r)) return !1;
		const o = n.filter((i) => !i.negate);
		if (o.length === 0) return !0;
		if (t === "Trigger") {
			const i = o.filter((s) => s.type.match(Lb));
			for (const s of i) if (oi(s, t, r)) return !0;
		} else if (t === "Follow") {
			const i = o.filter((s) => s.type.startsWith("Follow"));
			if (i.length === 0) return !0;
			for (const s of i) if (oi(s, t, r)) return !0;
			return !1;
		}
		return !1;
	}
	const jb = h(),
		Bb = h(),
		Db = h(),
		Fb = h(),
		Zb = h(),
		Hb = R(),
		Ub = Ga,
		Vb = h(),
		Wb = D(),
		qb = D().nullable(),
		Jb = D().nullable(),
		Kb = Y([h(), ag()]).transform((e) => (e instanceof Date ? e : new Date(e))),
		Gb = k({ name: h(), code: h() }).nullable(),
		Yb = M(k({ id: h(), name: h(), code: h() }))
			.optional()
			.nullable(),
		Xb = M(un()).optional(),
		Qb = M(un()).optional(),
		ew = M(un()).optional(),
		tw = M(un()).optional(),
		nw = Ea.optional().default("and"),
		rw = M(Ma).optional().default([]),
		ow = M(h()).optional(),
		iw = D().gte(0).lte(1).default(1),
		sw = D(),
		tc = k({
			id: jb,
			fullSlug: Bb,
			name: Db,
			status: Fb,
			publishingState: Zb,
			isLive: Hb,
			urlRules: Xb,
			showRules: Qb,
			followRules: ew,
			hideRules: tw,
			audienceRuleMode: nw,
			audienceRules: rw,
			renderType: Ub,
			surveyType: Vb,
			capturePercent: Wb,
			minTimeForRetake: qb,
			minTimeForRetrigger: Jb,
			updatedAt: Kb,
			language: Gb,
			languages: Yb,
			blockedIps: ow,
			priorityScore: iw,
			numCards: sw,
		});
	k({ survey: $r });
	const aw = M(tc),
		lw = M($r),
		cw = k({
			id: h(),
			slug: h(),
			valueType: L(["string", "number"]).optional().nullable(),
		}),
		nc = k({
			surveys: M(tc),
			traits: M(cw).optional().default([]),
			organisation: k({
				completionTimeout: D().optional().nullable(),
				rejectionTimeout: D().optional().nullable(),
			}).optional(),
		});
	function uw(e, t) {
		return t && e.minTimeForRetake != null
			? Date.now() - t > e.minTimeForRetake * 1e3
			: !1;
	}
	function dw(e, t) {
		return t && e.minTimeForRetrigger != null
			? Date.now() - t > e.minTimeForRetrigger * 1e3
			: !1;
	}
	function pw(e, t) {
		const n = `skyra.${t.replace(/\//g, ".")}`,
			r = e.getItem(n),
			o = r ? JSON.parse(r) : {},
			i = Tn.safeParse(o);
		return i.success ? i.data : Tn.parse({});
	}
	const fw = Ce(async ({ input: e }) => {
			const t = new URLSearchParams();
			e.testMode && t.append("mode", "test"),
				Fe("Load survey summaries", { ...e });
			const r = await (
					await fetch(`${e.apiHost}/survey/${e.orgSlug}?` + t.toString())
				).json(),
				o = nc.safeParse(r);
			if (o.success) return o.data.surveys;
			const i = aw.safeParse(r);
			if (!i.success) {
				const s = new Error("Invalid response");
				throw ((s.cause = i.error), s);
			}
			return i.data;
		}),
		hw = Ce(async ({ input: e }) => {
			const t = new URLSearchParams();
			e.testMode && t.append("mode", "test"),
				Fe("Load org with surveys", { ...e });
			const r = await (
					await fetch(`${e.apiHost}/survey/${e.orgSlug}?` + t.toString())
				).json(),
				o = nc.safeParse(r);
			if (!o.success) {
				const i = new Error("Invalid response");
				throw ((i.cause = o.error), i);
			}
			return o.data;
		}),
		ii = Ce(async ({ input: e }) => {
			if (e.slugs.length === 0) return [];
			const t = new URLSearchParams();
			for (const s of e.slugs) t.append("slug", s.split("/")[1]);
			e.testMode && t.append("mode", "test");
			const n = `${e.apiHost}/survey/${e.orgSlug}/fullSurveys?`,
				o = await (await fetch(n + t.toString())).json(),
				i = lw.safeParse(o);
			if (!i.success)
				throw (
					(console.error("Invalid survey response", i.error, o),
					new Error("Invalid survey response"))
				);
			return i.data;
		});
	function rc(e) {
		return !!e && Object.keys(e).length > 0;
	}
	const oc = Ce(({ input: e }) =>
		Promise.all(
			e.map(async (t) => {
				var o;
				if (t.sessionId) {
					if (rc(t.traits))
						try {
							await Ht(
								{
									event: "SessionTraits",
									survey: t.surveyId,
									visitor: t.visitorId,
									session: t.sessionId,
									traits: t.traits,
								},
								{ apiHost: t.apiHost },
							);
						} catch (i) {
							Fe(
								"[sessionInit] Failed to sync SessionTraits for reused session",
								{ sessionId: t.sessionId, surveyId: t.surveyId, error: i },
							);
						}
					return { sessionId: t.sessionId, slug: t.slug };
				}
				let n = "unknown";
				"connection" in navigator &&
					(n =
						(o = navigator == null ? void 0 : navigator.connection) == null
							? void 0
							: o.effectiveType);
				const r = Me();
				return (
					await Ht(
						{
							event: "SessionInit",
							survey: t.surveyId,
							visitor: t.visitorId,
							session: r,
							ua: t.ua,
							screenSize: t.screenSize,
							pixelRatio: t.pixelRatio,
							traits: t.traits,
							connection: n,
							languageCode: t.languageCode,
						},
						{ apiHost: t.apiHost },
					),
					{ sessionId: r, slug: t.slug }
				);
			}),
		),
	);
	function ic(e) {
		const t = e.survey.fullSlug,
			n = e.customElementName ?? "skyra-survey";
		return document.querySelector(e.selector)
			? document.querySelector(`${n}[slug="${t}"]`)
				? "existing_element"
				: null
			: "missing_container";
	}
	const gw = Ce(async ({ input: e }) => {
			let t = ic(e);
			return (
				t === "missing_container" &&
					e.retryDelayMs !== 0 &&
					(await new Promise((n) => setTimeout(n, e.retryDelayMs ?? 100)),
					(t = ic(e))),
				t ? { canRender: !1, reason: t } : { canRender: !0 }
			);
		}),
		sc = Ce(({ input: e }) => {
			const t = e.survey.fullSlug,
				n = document.querySelector(e.selector),
				r = e.customElementName ?? "skyra-survey",
				o = e.replace ?? !1;
			n ||
				console.error(
					`[Skyra] Could not find DOM element with selector "${e.selector}"`,
				);
			const i = document.querySelector(`${r}[slug="${t}"]`);
			if (i) {
				if (o) {
					const a = document.createElement(r);
					return (
						a.setAttribute("slug", t),
						i.replaceWith(a),
						Promise.resolve({ survey: e.survey, selector: e.selector })
					);
				}
				return (
					console.warn(
						`[Skyra] Survey with slug "${t}" already exists as a custom element. Please check your implementation.`,
					),
					Promise.resolve(!1)
				);
			}
			const s = document.createElement(r);
			return (
				s.setAttribute("slug", t),
				n == null || n.appendChild(s),
				Promise.resolve({ survey: e.survey, selector: e.selector })
			);
		});
	function ac(e) {
		Ut({
			apiHost: e.apiHost,
			event: "popup_render_preflight_failed",
			org: e.org,
			slug: e.slug,
			surveyId: e.surveyId,
			visitorId: e.visitorId,
			sessionId: e.sessionId,
			reason: e.reason,
			url: e.url,
		});
	}
	function Ut(e) {
		mb(
			{
				event: e.event,
				org: e.org,
				slug: e.slug,
				survey: e.surveyId,
				visitor: e.visitorId,
				session: e.sessionId,
				cardId: e.cardId,
				reason: e.reason,
				url: e.url,
				metadata: e.metadata,
			},
			{ apiHost: e.apiHost },
		);
	}
	const mw = Ce(({ input: e }) => {
		if (!e.consent) return Promise.reject(new Error("Cookies not supported"));
		const t = "skyra._test";
		return (
			(document.cookie = `${t}=1`),
			new Promise((n, r) => {
				setTimeout(() => {
					try {
						const o = document.cookie.indexOf(`${t}=`) !== -1;
						(document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`),
							o ? n(o) : r(new Error("Cookies not supported"));
					} catch {
						r(new Error("Cookies not supported"));
					}
				}, 5);
			})
		);
	});
	async function yw(e) {
		let t = e.path ?? "/",
			n = e.expires ?? 3600 * 2;
		switch (e.renderType) {
			case "Inline":
				(n = 0), (t = window.location.pathname);
				break;
			case "Popup":
				n = 7200;
				break;
		}
		const r = `skyra.${e.slug.replace(/\//g, ".")}`;
		e.state.lastSync = Date.now();
		const { values: o, ...i } = e.state,
			s = JSON.stringify(i),
			a = e.confineToDomain
				? { domain: void 0, expires: n, path: t }
				: { expires: n, path: t };
		return e.storage.setItem(r, s, a), e.state;
	}
	function lc(e) {
		return e.split("/").filter(Boolean).length;
	}
	function cc(e, t) {
		const n = lc(t);
		return e === t ? 3 : e.startsWith(t + "/") ? Math.min(1 + n * 0.5, 2.9) : 0;
	}
	const Mr = /\/$/;
	function vw(e, t, n, r = [], o = []) {
		var a;
		let i = 1,
			s;
		try {
			s = new URL(e).pathname.replace(Mr, "");
		} catch {
			s = e.replace(Mr, "");
		}
		if (!ni({ showRules: n, followRules: r, hideRules: o }))
			for (const c of t) {
				const l = c.value.replace(Mr, "");
				if (c.isRegexp)
					try {
						new RegExp(c.value).test(s) && (i += 0.5);
					} catch {}
				else i += cc(s, l);
			}
		for (const c of n) {
			const l = ((a = c.path) == null ? void 0 : a.replace(Mr, "")) ?? "";
			if (c.isRegex && c.path)
				try {
					const u =
						c.path
							.split("/")
							.filter(Boolean)
							.reduce((f, g) => {
								const y = (v) => {
										try {
											return new RegExp(v);
										} catch {
											return null;
										}
									},
									b = (v) => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
								return f + "\\/" + (y(g) ? `(${g})` : b(g));
							}, "^") +
						(c.applyBelow ? "(\\/.*)?" : "") +
						"$";
					if (new RegExp(u).test(s)) {
						const g = 1 + lc(c.path) * 0.5 + 0.5;
						i += g;
					}
				} catch {}
			else c.applyBelow && (i += cc(s, l));
		}
		return i;
	}
	const bw = Ce(({ input: e }) => {
		const t = {
				event: "CardValue",
				survey: e.surveyId,
				visitor: e.visitorId,
				session: e.sessionId,
				card: e.cardId,
				type: e.cardType,
				url: window.skyra.getUrl(),
				value: e.value,
				languageCode: e.languageCode,
				cardOrder: e.cardOrder,
			},
			n = So.parse(t);
		return Ht(n, { apiHost: e.apiHost }), Promise.resolve();
	});
	function ww(e) {
		const t = e.path ?? "/",
			n = `skyra.${e.slug.replace(/\//g, ".")}`;
		e.storage.removeItem(n, { path: t });
	}
	const uc = Sn({
			actors: { postCardValue: bw },
			delays: {
				initial: 0,
				autoClose: ({ context: e }) => e.survey.autoCloseAfter ?? 0,
			},
			actions: {
				setNextCards: z({
					state: ({ context: e }) =>
						kb(e.survey.cards, e.state, e.audienceContext),
				}),
				setPrevCard: z({ state: ({ context: e }) => Sb(e.state) }),
				clearCookieState: ({ context: e }) => {
					const t = e.survey.renderType === "Popup";
					ww({
						storage: e.cookieStorage,
						path: t ? void 0 : window.location.pathname,
						slug: e.survey.fullSlug,
					});
				},
				setMinimized: z({
					state: ({ context: e }) => ({ ...e.state, state: "Minimized" }),
				}),
				setShowCard: z({
					state: ({ context: e }) => ({ ...e.state, state: "ShowCard" }),
				}),
				storeCookieState: ({ context: e }) => {
					const { survey: t, cookieConsent: n } = e;
					n &&
						t.renderType === "Popup" &&
						yw({
							storage: e.cookieStorage,
							state: e.state,
							slug: e.survey.fullSlug,
							renderType: e.survey.renderType,
							confineToDomain: e.survey.confineToDomain,
						});
				},
				setCardValue: z({
					state: ({ context: e, event: t }) => (
						kn(t, "submit"),
						_b(e.survey.cards, e.state, t.cardId, t.key, t.value)
					),
				}),
				diagnoseCurrentCardMissing: ({ context: e, event: t }) => {
					kn(t, "submit"),
						Ut({
							apiHost: e.apiHost,
							event: "current_card_missing",
							slug: e.survey.fullSlug,
							surveyId: e.survey.id,
							sessionId: e.sessionId,
							visitorId: e.visitorId,
							cardId: t.cardId,
							url: e.url,
						});
				},
				diagnoseExplicitReject: ({ context: e }) => {
					Ut({
						apiHost: e.apiHost,
						event: "survey_rejected_explicit_click",
						slug: e.survey.fullSlug,
						surveyId: e.survey.id,
						sessionId: e.sessionId,
						visitorId: e.visitorId,
						url: e.url,
					});
				},
			},
			guards: {
				submittedCardExists: ({ context: e, event: t }) => (
					kn(t, "submit"), e.survey.cards.some((n) => n.id === t.cardId)
				),
				hasEmptyValue: ({ event: e }) => {
					kn(e, "submit");
					const t = e.value;
					return typeof t == "string"
						? t.trim() === ""
						: Array.isArray(t)
							? t.length === 0
							: t === void 0;
				},
				hasNextCard: ({ context: e }) =>
					xb(e.survey.cards, e.state, e.audienceContext),
				nextCardStartsMinimized: ({ context: e }) =>
					Cb(e.survey.cards, e.state, e.audienceContext),
				isLastCard: ({ context: e }) =>
					zb(e.survey.cards, e.state, e.audienceContext),
				isMessageCard: ({ context: e }) => Tb(e.survey.cards, e.state),
				isPopup: ({ context: e }) => e.survey.renderType === "Popup",
				isInline: ({ context: e }) => e.survey.renderType === "Inline",
				isMinimized: ({ context: e }) => e.state.state === "Minimized",
				wasPreviouslyVisible: ({ context: e }) => e.state.state === "ShowCard",
				cookieConsented: ({ context: e }) => e.cookieConsent,
			},
		}).createMachine({
			id: "Capture",
			context: ({ input: e }) => {
				var b, v, _, S, x, C, I;
				const t = (b = e.state) == null ? void 0 : b.state;
				let n = t;
				if (typeof t == "string") {
					const P = t.toLowerCase();
					P === "minimized"
						? (n = "Minimized")
						: P === "showcard" && (n = "ShowCard");
				}
				const r =
						e.language ||
						((v = e.survey.language) == null ? void 0 : v.code) ||
						"en",
					o = {
						device: e.device ?? "desktop",
						traits: e.traits ?? {},
						language: r,
						locale: e.locale,
					},
					i = ((_ = e.survey.cards[0]) == null ? void 0 : _.order) ?? 0,
					s = ((S = e.state) == null ? void 0 : S.currentCard) ?? i,
					a = window.location.pathname,
					c = e.survey.renderType === "Inline",
					l = a === ((x = e.state) == null ? void 0 : x.path),
					d =
						((C = e.state) == null ? void 0 : C.currentCard) === void 0 ||
						(c && !l),
					u = Tn.parse(
						!c || l
							? { ...e.state, state: n, currentCard: s }
							: { currentCard: i },
					),
					p = d
						? Tn.parse({
								...u,
								currentCard:
									((I = wb(e.survey.cards, u, o)) == null ? void 0 : I.order) ??
									i,
							})
						: u,
					f = e.survey.cards.find((P) => P.order === p.currentCard),
					g = n === void 0 && (f == null ? void 0 : f.size) === "Minimal",
					y = Tn.parse({ ...p, state: g ? "Minimized" : p.state, path: a });
				return {
					url: e.url,
					survey: e.survey,
					language: r,
					apiHost: e.apiHost,
					sessionId: e.sessionId,
					visitorId: e.visitorId,
					parentRef: e.parentRef,
					cookieStorage: e.cookieStorage,
					cookieConsent: (e == null ? void 0 : e.cookieConsent) ?? !0,
					output: {},
					state: y,
					audienceContext: o,
				};
			},
			on: {
				setConsent: [
					{
						target: "#Done",
						actions: [z({ cookieConsent: ({ event: e }) => e.value })],
						guard: Fo(["isPopup", ({ event: e }) => e.value === !1]),
					},
					{ actions: z({ cookieConsent: ({ event: e }) => e.value }) },
				],
				setUrl: { actions: z({ url: ({ event: e }) => e.url }) },
				updateSurvey: { actions: z({ survey: ({ event: e }) => e.survey }) },
				setLanguage: {
					actions: [
						z({
							language: ({ event: e }) => e.language,
							audienceContext: ({ context: e, event: t }) => ({
								...e.audienceContext,
								language: t.language,
							}),
						}),
						eb(({ event: e }) => ({
							type: "setLanguage",
							language: e.language,
						})),
					],
				},
				setTraits: {
					actions: z({
						audienceContext: ({ context: e, event: t }) => ({
							...e.audienceContext,
							traits:
								t.mode === "replace"
									? t.traits
									: { ...e.audienceContext.traits, ...t.traits },
						}),
					}),
				},
				reject: { target: "#Rejected", actions: "diagnoseExplicitReject" },
			},
			initial: "Validating",
			states: {
				Entry: {
					on: {
						setConsent: [{ target: "Validating", guard: "cookieConsented" }],
					},
					always: [{ target: "Validating", guard: "cookieConsented" }],
				},
				Validating: {
					always: [
						{ target: "#Minimized", guard: "isMinimized" },
						{ target: "Running", guard: "wasPreviouslyVisible" },
						{ target: "Running" },
					],
				},
				Running: {
					initial: "ShowCard",
					states: {
						ShowCard: {
							entry: ["setShowCard", "storeCookieState"],
							after: {
								500: {
									guard: Fo(["isInline", "isLastCard", "isMessageCard"]),
									actions: "clearCookieState",
								},
								autoClose: {
									guard: Fo([
										"isPopup",
										"isLastCard",
										"isMessageCard",
										({ context: e }) =>
											typeof e.survey.autoCloseAfter == "number" &&
											e.survey.autoCloseAfter > 0,
									]),
									target: "#Done",
								},
							},
							on: {
								minimize: {
									target: "Minimized",
									actions: ["setMinimized", "storeCookieState"],
								},
								goBack: { target: "GoBack" },
								completeSurvey: "#Done",
								submit: [
									{ target: "GoToNextCard", guard: "isMessageCard" },
									{
										target: "GoToNextCard",
										guard: "hasEmptyValue",
										actions: ["setCardValue", "storeCookieState"],
									},
									{
										target: "GoToNextCard",
										guard: fv("submittedCardExists"),
										actions: "diagnoseCurrentCardMissing",
									},
									{
										target: "SubmitCard",
										actions: [
											"setCardValue",
											"storeCookieState",
											he(({ event: e, context: t }) => {
												var s, a;
												const n = t.state,
													r = t.survey.cards.find(
														(c) => c.order === n.currentCard,
													),
													o = Da.parse(r);
												if (!r) throw new Error("Card found");
												const i = {
													type: "cardSaved",
													sessionId: t.sessionId,
													visitorId: t.visitorId,
													surveyId: t.survey.id,
													surveyName: t.survey.name,
													cardId: e.cardId,
												};
												if (o.type === "TopTaskCard") {
													const c = e.value,
														l =
															(s = o.taskItems) == null
																? void 0
																: s.find((d) => d.task.id === c);
													return {
														...i,
														cardType: "TopTaskCard",
														value: {
															id: c,
															name:
																l && "name" in l.task ? l.task.name : "Unknown",
															label: l == null ? void 0 : l.label,
														},
													};
												}
												if (o.type === "RecruitmentCard") {
													const c = e.value;
													return { ...i, cardType: o.type, value: c };
												}
												if (o.type === "LikertCard") {
													const c = r,
														l = e.value,
														d = c.likertScale.likertItems.find(
															(u) => u.id === l,
														);
													return {
														...i,
														cardType: "LikertCard",
														value: {
															id: l,
															name: (d == null ? void 0 : d.label) ?? "Unknown",
															emoji:
																(a = d == null ? void 0 : d.emoji) == null
																	? void 0
																	: a.native,
														},
													};
												}
												if (o.type === "SegmentCard") {
													const c = r,
														l = e.value,
														d = c.items.find((u) => u.value.id === l);
													return {
														...i,
														cardType: "SegmentCard",
														value: {
															id: l,
															name: (d == null ? void 0 : d.name) ?? "Unknown",
															label: d == null ? void 0 : d.label,
														},
													};
												}
												if (o.type === "SingleSelectCard") {
													const c = r,
														l = e.value,
														d = c.selectItems.find((u) => u.id === l);
													return {
														...i,
														cardType: "SingleSelectCard",
														value: {
															id: l,
															label: d == null ? void 0 : d.label,
														},
													};
												}
												return { ...i, cardType: o.type, value: e.value };
											}),
										],
									},
								],
							},
						},
						GoToNextCard: {
							always: [
								{
									guard: "nextCardStartsMinimized",
									target: "Minimized",
									actions: ["setNextCards", "setMinimized", "storeCookieState"],
								},
								{
									guard: "hasNextCard",
									target: "ShowCard",
									actions: ["setNextCards", "storeCookieState"],
								},
								{ target: "#Done" },
							],
						},
						GoBack: {
							entry: ["setPrevCard", "storeCookieState"],
							always: { target: "ShowCard" },
						},
						SubmitCard: {
							invoke: {
								src: "postCardValue",
								input: ({ context: e, event: t }) => {
									kn(t, "submit");
									const n = e.survey.cards.find((r) => r.id === t.cardId);
									if (!n)
										throw (
											(Ut({
												apiHost: e.apiHost,
												event: "current_card_missing",
												slug: e.survey.fullSlug,
												surveyId: e.survey.id,
												sessionId: e.sessionId,
												visitorId: e.visitorId,
												cardId: t.cardId,
												url: e.url,
											}),
											new Error("No card found"))
										);
									return {
										surveyId: e.survey.id,
										sessionId: e.sessionId,
										visitorId: e.visitorId,
										apiHost: e.apiHost,
										cardId: t.cardId,
										cardType: n.type,
										cardOrder: n.order,
										languageCode: e.language,
										value: t.value,
									};
								},
								onError: { target: "GoToNextCard" },
								onDone: { target: "GoToNextCard" },
							},
						},
						Minimized: {
							id: "Minimized",
							on: { maximize: { target: "ShowCard" } },
						},
					},
				},
				Rejected: {
					id: "Rejected",
					type: "final",
					entry: ["clearCookieState", z({ output: { type: "rejected" } })],
				},
				Done: {
					id: "Done",
					type: "final",
					entry: ["clearCookieState", z({ output: { type: "completed" } })],
				},
			},
			output: ({ context: e }) => e.output,
		}),
		dc = (e) => {
			var t;
			return e.surveyAlreadyCaptured
				? 0
				: (((t = e.fullSurvey) == null ? void 0 : t.initialDelay) ?? 0);
		},
		_w = Sn({
			actors: {
				checkCookieSupport: mw,
				loadFullSurveys: ii,
				sessionInit: oc,
				renderSurvey: sc,
				canRenderSurvey: gw,
				sleepActor: Ce(
					({ input: e }) => new Promise((t) => setTimeout(t, e.delay)),
				),
				checkCaptureRate: Ce(
					({ input: e }) =>
						new Promise((t) => {
							const n = e.rate > 0 ? e.rate / 100 : 0,
								r = e.capture || Math.random() < n;
							t({ selected: r });
						}),
				),
			},
			guards: {},
			actions: {
				updateTraits: z(({ context: e, event: t }) =>
					t.type !== "setTraits"
						? {}
						: {
								traits:
									t.mode === "replace"
										? t.traits
										: { ...e.traits, ...t.traits },
							},
				),
				filterEligibleSurveys: z(({ context: e }) => {
					var r;
					const t =
						(r = Object.entries(e.surveyOverrides || {}).find(([, o]) =>
							o == null ? void 0 : o.only,
						)) == null
							? void 0
							: r[0];
					if (t) {
						const o = e.surveys.find((i) => i.fullSlug === t);
						if (o) return { eligibleSurveys: [o] };
					}
					return {
						eligibleSurveys: e.surveys.filter((o) => {
							var l;
							const i = (l = e.cookieState) == null ? void 0 : l[o.fullSlug],
								s = Ir({
									traits: e.traits,
									language: e.language,
									locale: e.locale,
								}),
								a = o.urlRules && o.urlRules.length > 0,
								c = ni(o);
							if (!a && !c) return !1;
							if (!c && a && o.urlRules) {
								const d =
									(i == null ? void 0 : i.state) === "Capture"
										? "Follow"
										: "Trigger";
								if (!ec(e.url, d, o.urlRules)) return !1;
							}
							return (c &&
								!ri({
									urlString: e.url,
									surveyStarted: (i == null ? void 0 : i.state) === "Capture",
									showRules: o.showRules || [],
									followRules: o.followRules || [],
									hideRules: o.hideRules || [],
									device: Cn(),
									isInline: !1,
								})) ||
								!Qo(o.audienceRules, s, o.audienceRuleMode)
								? !1
								: i
									? i.state === "Completed"
										? uw(o, i.lastSync)
										: i.state === "Rejected" || i.state === "NotSelected"
											? dw(o, i.lastSync)
											: i.state === "Capture"
									: !0;
						}),
					};
				}),
				selectFirstEligibleSurvey: z(({ context: e }) => {
					const t = e.eligibleSurveys.find((s) => {
						var c;
						const a = (c = e.cookieState) == null ? void 0 : c[s.fullSlug];
						return (a == null ? void 0 : a.state) === "Capture";
					});
					if (t)
						return { selectedSurvey: t.fullSlug, surveyAlreadyCaptured: !0 };
					let n = !1;
					if (e.requestedSurvey) {
						const s = e.eligibleSurveys.find(
							(a) => a.fullSlug === e.requestedSurvey,
						);
						if (s)
							return { selectedSurvey: s.fullSlug, requestedSurvey: void 0 };
						n = !0;
					}
					const i = e.eligibleSurveys
						.map((s) => {
							const a = vw(
								e.url,
								s.urlRules || [],
								s.showRules || [],
								s.followRules || [],
								s.hideRules || [],
							);
							return { ...s, priorityScore: s.priorityScore + a };
						})
						.sort(
							(s, a) =>
								a.priorityScore - s.priorityScore ||
								+a.updatedAt - +s.updatedAt,
						)[0];
					return {
						selectedSurvey: (i == null ? void 0 : i.fullSlug) || null,
						...(n && { requestedSurvey: void 0 }),
					};
				}),
				postPreflightDiagnostic: ({ context: e, event: t }) => {
					if (!("output" in t)) return;
					const n = t.output;
					if (n.canRender) return;
					const r = e.selectedSurvey;
					if (!r) return;
					const o = e.surveys.find((i) => i.fullSlug === r);
					ac({
						apiHost: e.apiHost,
						org: e.org,
						slug: r,
						surveyId: o == null ? void 0 : o.id,
						visitorId: e.visitorId,
						reason: n.reason,
						url: e.url,
					});
				},
				postRenderReturnedFalseDiagnostic: ({ context: e }) => {
					var n;
					const t = e.selectedSurvey;
					t &&
						ac({
							apiHost: e.apiHost,
							org: e.org,
							slug: t,
							surveyId: (n = e.fullSurvey) == null ? void 0 : n.id,
							visitorId: e.visitorId,
							sessionId: e.sessionId ?? void 0,
							reason: "render_returned_false",
							url: e.url,
						});
				},
				postMissingFullSurveyDiagnostic: ({ context: e }) => {
					const t = e.selectedSurvey;
					if (!t) return;
					const n = e.surveys.find((r) => r.fullSlug === t);
					Ut({
						apiHost: e.apiHost,
						event: "selected_survey_missing_full_survey",
						org: e.org,
						slug: t,
						surveyId: n == null ? void 0 : n.id,
						visitorId: e.visitorId,
						url: e.url,
					});
				},
			},
		}).createMachine({
			id: "popupCoordinator",
			context: ({ input: e }) => ({
				...e,
				surveys: e.surveys.filter((t) => t.renderType === "Popup"),
				eligibleSurveys: [],
				selectedSurvey: null,
				surveyAlreadyCaptured: !1,
				fullSurvey: null,
				sessionId: null,
			}),
			initial: "Init",
			on: {
				startSurvey: {
					actions: z({ requestedSurvey: ({ event: e }) => e.slug }),
				},
				setTraits: { actions: "updateTraits" },
				setConsent: [
					{
						target: ".NoConsent",
						guard: ({ event: e }) => e.value === !1,
						actions: z({ consent: ({ event: e }) => e.value }),
					},
					{ actions: z({ consent: ({ event: e }) => e.value }) },
				],
			},
			states: {
				Init: {
					description: "Check if we have consent",
					always: [
						{
							target: "CheckCookieSupport",
							guard: ({ context: e }) => e.consent,
						},
						{ target: "NoConsent" },
					],
				},
				NoConsent: {
					description: "Waiting for cookie consent",
					on: {
						setConsent: {
							target: "CheckCookieSupport",
							guard: ({ event: e }) => e.value === !0,
							actions: z({ consent: ({ event: e }) => e.value }),
						},
					},
				},
				CheckCookieSupport: {
					description: "Verify cookies work",
					invoke: {
						src: "checkCookieSupport",
						input: ({ context: e }) => ({ consent: e.consent }),
						onDone: { target: "FilterEligible" },
						onError: {
							target: "Failed",
							actions: z({ error: ({ event: e }) => e.error }),
						},
					},
				},
				FilterEligible: {
					description: "Apply retake/retrigger/spam rules",
					entry: ["filterEligibleSurveys"],
					always: [
						{
							target: "SelectSurvey",
							guard: ({ context: e }) => {
								var u, p, f;
								if (e.eligibleSurveys.length === 0) return !1;
								const t = Date.now(),
									n = e.eligibleSurveys.filter((g) => {
										var b;
										const y =
											(b = e.cookieState) == null ? void 0 : b[g.fullSlug];
										return !y || y.state === "Capture";
									}),
									r = n
										.map((g) => g.minTimeForRetake)
										.filter((g) => g !== null)
										.map((g) => g * 1e3),
									o =
										(((u = e.organisation) == null
											? void 0
											: u.completionTimeout) ?? 14400) * 1e3,
									i =
										(((p = e.organisation) == null
											? void 0
											: p.rejectionTimeout) ?? 28800) * 1e3,
									s = r.length > 0 ? Math.min(...r, o) : o,
									a = n
										.map((g) => g.minTimeForRetrigger)
										.filter((g) => g !== null)
										.map((g) => g * 1e3),
									c = a.length > 0 ? Math.min(...a, i) : i;
								let l = null,
									d = null;
								for (const g of e.surveys) {
									const y =
										(f = e.cookieState) == null ? void 0 : f[g.fullSlug];
									y &&
										y.lastSync &&
										g.renderType !== "Inline" &&
										(y.state === "Completed" &&
											(l = Math.max(l ?? 0, y.lastSync)),
										y.state === "Rejected" &&
											(d = Math.max(d ?? 0, y.lastSync)));
								}
								return !((l && t - l < s) || (d && t - d < c));
							},
						},
						{ target: "Idle" },
					],
				},
				SelectSurvey: {
					description: "Pick active/requested/first eligible",
					entry: ["selectFirstEligibleSurvey"],
					always: [
						{
							target: "LoadAndInit",
							guard: ({ context: e }) =>
								e.selectedSurvey !== null && e.surveyAlreadyCaptured,
						},
						{
							target: "CheckCaptureRate",
							guard: ({ context: e }) => e.selectedSurvey !== null,
						},
						{ target: "Idle" },
					],
				},
				CheckCaptureRate: {
					description: "Random selection based on capturePercent",
					invoke: {
						src: "checkCaptureRate",
						input: ({ context: e }) => {
							const t = e.selectedSurvey,
								n = e.surveys.find((r) => r.fullSlug === t);
							if (!n) throw new Error("No survey selected");
							return { capture: e.testMode, rate: n.capturePercent };
						},
						onDone: [
							{
								target: "LoadAndInit",
								guard: ({ event: e }) => e.output.selected === !0,
							},
							{
								target: "Idle",
								actions: he(({ context: e }) => {
									const t = e.selectedSurvey;
									if (!t)
										throw new Error(
											"Invalid state: selectedSurvey is required for surveyNotSelected event",
										);
									return { type: "surveyNotSelected", slug: t };
								}),
							},
						],
					},
				},
				LoadAndInit: {
					description: "Load full survey + initialize session",
					initial: "LoadFullSurvey",
					states: {
						LoadFullSurvey: {
							description: "Fetch full survey definition",
							invoke: {
								src: "loadFullSurveys",
								input: ({ context: e }) => {
									const t = e.selectedSurvey;
									if (!t)
										throw new Error(
											"Invalid state: selectedSurvey is required for LoadFullSurvey",
										);
									return {
										orgSlug: e.org,
										slugs: [t],
										apiHost: e.apiHost,
										testMode: e.testMode,
									};
								},
								onDone: [
									{
										target: "CheckRenderTarget",
										guard: ({ event: e }) => !!e.output[0],
										actions: z({
											fullSurvey: ({ event: e }) => e.output[0] || null,
										}),
									},
									{
										target: "#popupCoordinator.Idle",
										actions: "postMissingFullSurveyDiagnostic",
									},
								],
								onError: {
									target: "#popupCoordinator.Idle",
									actions: z({ error: ({ event: e }) => e.error }),
								},
							},
						},
						CheckRenderTarget: {
							description:
								"Check that the popup can be injected before recording an impression",
							invoke: {
								src: "canRenderSurvey",
								input: ({ context: e }) => {
									const t = e.selectedSurvey;
									if (!t)
										throw new Error(
											"Invalid state: selectedSurvey is required for CheckRenderTarget",
										);
									const n = e.surveys.find((r) => r.fullSlug === t);
									if (!n) throw new Error("No survey found for slug: " + t);
									return { survey: n, selector: e.selector };
								},
								onDone: [
									{
										target: "InitialDelay",
										guard: ({ event: e }) => e.output.canRender,
									},
									{
										target: "#popupCoordinator.Idle",
										actions: "postPreflightDiagnostic",
									},
								],
								onError: {
									target: "#popupCoordinator.Idle",
									actions: z({ error: ({ event: e }) => e.error }),
								},
							},
						},
						InitialDelay: {
							description:
								"Wait until the popup is allowed to appear before recording an impression",
							always: {
								target: "SessionInit",
								guard: ({ context: e }) => dc(e) <= 0,
							},
							invoke: {
								src: "sleepActor",
								input: ({ context: e }) => ({ delay: dc(e) }),
								onDone: { target: "SessionInit" },
							},
						},
						SessionInit: {
							description: "Initialize session with API",
							invoke: {
								src: "sessionInit",
								input: ({ context: e }) => {
									var o, i;
									const t = e.selectedSurvey;
									if (!t)
										throw new Error(
											"Invalid state: selectedSurvey is required for SessionInit",
										);
									const n = e.surveys.find((s) => s.fullSlug === t);
									if (!n) throw new Error("No survey found for slug: " + t);
									const r =
										(o = e.cookieState) == null ? void 0 : o[n.fullSlug];
									return [
										{
											apiHost: e.apiHost,
											surveyId: n.id,
											visitorId: e.visitorId,
											sessionId: r == null ? void 0 : r.sessionId,
											slug: n.fullSlug,
											traits: e.traits,
											ua:
												typeof navigator < "u"
													? navigator.userAgent
													: "test-agent",
											screenSize:
												typeof window < "u"
													? [window.screen.width, window.screen.height]
													: [1920, 1080],
											pixelRatio:
												typeof window < "u" ? window.devicePixelRatio : 1,
											languageCode: (i = e.cookieState) == null ? void 0 : i._l,
										},
									];
								},
								onDone: {
									target: "Done",
									actions: z({
										sessionId: ({ event: e }) => {
											var t;
											return (
												((t = e.output[0]) == null ? void 0 : t.sessionId) ||
												null
											);
										},
									}),
								},
								onError: {
									target: "#popupCoordinator.Idle",
									actions: z({ error: ({ event: e }) => e.error }),
								},
							},
						},
						Done: { type: "final" },
					},
					onDone: "Render",
				},
				Render: {
					description: "Inject survey DOM element",
					invoke: {
						src: "renderSurvey",
						input: ({ context: e }) => {
							const t = e.selectedSurvey;
							if (!t)
								throw new Error(
									"Invalid state: selectedSurvey is required for Render",
								);
							const n = e.surveys.find((r) => r.fullSlug === t);
							if (!n) throw new Error("No survey found for slug: " + t);
							return { survey: n, selector: e.selector };
						},
						onDone: [
							{ target: "Done", guard: ({ event: e }) => e.output !== !1 },
							{ target: "Idle", actions: "postRenderReturnedFalseDiagnostic" },
						],
						onError: {
							target: "Failed",
							actions: z({ error: ({ event: e }) => e.error }),
						},
					},
				},
				Done: {
					description: "Survey ready, emit to controller",
					entry: [
						he(({ context: e }) => {
							const t = e.selectedSurvey,
								n = e.fullSurvey,
								r = e.sessionId;
							if (!(t && n && r))
								throw new Error(
									"Invalid state: selectedSurvey, fullSurvey, and sessionId are required for readyToCapture",
								);
							return {
								type: "readyToCapture",
								slug: t,
								survey: n,
								sessionId: r,
							};
						}),
					],
					type: "final",
				},
				Idle: {
					description: "No survey to show",
					on: {
						setTraits: { target: "FilterEligible", actions: "updateTraits" },
						startSurvey: {
							target: "SelectSurvey",
							actions: z({ requestedSurvey: ({ event: e }) => e.slug }),
						},
					},
				},
				Failed: { description: "Error occurred", type: "final" },
			},
		});
	function pc(e, t) {
		return e instanceof Error ? e.message : t;
	}
	function fc(e, t) {
		var o, i, s;
		const n =
				typeof window < "u"
					? (i = (o = window.skyra) == null ? void 0 : o.getExplicitLanguage) ==
						null
						? void 0
						: i.call(o, t)
					: void 0,
			r =
				(typeof document < "u" &&
					(document.documentElement.lang ||
						document.documentElement.getAttribute("lang"))) ||
				void 0;
		return ti({
			explicitLanguage: n,
			htmlLang: r,
			browserLanguage: Tr(),
			surveyDefault: ((s = e.language) == null ? void 0 : s.code) || "en",
			enabledLanguages: bb(e),
		});
	}
	const kw = Sn({
		actors: { loadFullSurveys: ii, sessionInit: oc },
	}).createMachine({
		id: "surveySessionInitializer",
		context: ({ input: e }) => ({
			...e,
			kind: e.kind ?? "inline",
			fullSurvey: null,
			sessionId: null,
		}),
		initial: "LoadFullSurvey",
		on: {
			setTraits: {
				actions: z({
					traits: ({ context: e, event: t }) =>
						t.mode === "replace" ? t.traits : { ...e.traits, ...t.traits },
				}),
			},
		},
		states: {
			LoadFullSurvey: {
				invoke: {
					src: "loadFullSurveys",
					input: ({ context: e }) => ({
						slugs: [e.slug],
						orgSlug: e.org,
						apiHost: e.apiHost,
						testMode: e.testMode,
					}),
					onDone: {
						actions: z({ fullSurvey: ({ event: e }) => e.output[0] }),
						target: "CheckEligibility",
					},
					onError: {
						target: "Failed",
						actions: he(({ context: e, event: t }) => ({
							type:
								e.kind === "headless"
									? "headlessInitializationFailed"
									: "inlineInitializationFailed",
							slug: e.slug,
							code: "load_failed",
							message: pc(t.error, `Failed to load ${e.kind} survey.`),
							cause: t.error,
						})),
					},
				},
			},
			CheckEligibility: {
				always: [
					{
						guard: ({ context: e }) => {
							if (!e.fullSurvey) return !1;
							const t = e.fullSurvey.renderType;
							if (t !== "Inline" && t !== "Headless") return !1;
							if (t === "Headless") {
								const n = fc(e.fullSurvey, e.slug);
								return Qo(
									e.fullSurvey.audienceRules,
									Ir({ traits: e.traits, language: n }),
									e.fullSurvey.audienceRuleMode,
								);
							}
							if (t === "Inline") {
								if (
									!ri({
										urlString: e.url,
										surveyStarted: !1,
										showRules: e.fullSurvey.showRules,
										followRules: e.fullSurvey.followRules || [],
										hideRules: e.fullSurvey.hideRules,
										device: Cn(),
										isInline: !0,
									})
								)
									return !1;
								const r = fc(e.fullSurvey, e.slug);
								return Qo(
									e.fullSurvey.audienceRules,
									Ir({ traits: e.traits, language: r }),
									e.fullSurvey.audienceRuleMode,
								);
							}
							return !1;
						},
						target: "SessionInit",
					},
					{
						target: "Failed",
						actions: he(({ context: e }) => ({
							type:
								e.kind === "headless"
									? "headlessInitializationFailed"
									: "inlineInitializationFailed",
							slug: e.slug,
							code: "not_eligible",
							message: `${e.kind === "headless" ? "Headless" : "Inline"} survey "${e.slug}" is not eligible.`,
						})),
					},
				],
			},
			SessionInit: {
				invoke: {
					src: "sessionInit",
					input: ({ context: e }) => {
						var t;
						if (!e.fullSurvey) throw new Error("No full survey loaded");
						return [
							{
								apiHost: e.apiHost,
								surveyId: e.fullSurvey.id,
								visitorId: e.visitorId,
								slug: e.slug,
								traits: e.traits,
								url: e.url,
								ua: typeof navigator < "u" ? navigator.userAgent : "",
								screenSize:
									typeof window < "u"
										? [window.innerWidth, window.innerHeight]
										: [0, 0],
								pixelRatio: typeof window < "u" ? window.devicePixelRatio : 1,
								languageCode:
									(t = e.fullSurvey.language) == null ? void 0 : t.code,
							},
						];
					},
					onDone: {
						actions: [
							z({ sessionId: ({ event: e }) => e.output[0].sessionId }),
							he(({ context: e, event: t }) => {
								var o, i;
								const n =
										typeof window < "u"
											? (i =
													(o = window.skyra) == null
														? void 0
														: o.getExplicitLanguage) == null
												? void 0
												: i.call(o, e.slug)
											: void 0,
									r = e.fullSurvey;
								if (!r)
									throw new Error(
										"Invalid state: fullSurvey is required for readyToCapture",
									);
								return {
									type: "readyToCapture",
									slug: e.slug,
									survey: r,
									sessionId: t.output[0].sessionId,
									explicitLanguage: n,
								};
							}),
						],
						target: "Done",
					},
					onError: {
						target: "Failed",
						actions: he(({ context: e, event: t }) => ({
							type:
								e.kind === "headless"
									? "headlessInitializationFailed"
									: "inlineInitializationFailed",
							slug: e.slug,
							code: "session_init_failed",
							message: pc(
								t.error,
								`Failed to initialize ${e.kind} survey session.`,
							),
							cause: t.error,
						})),
					},
				},
			},
			Done: { type: "final" },
			Failed: { type: "final" },
		},
	});
	function Sw(e) {
		var r, o, i;
		let t;
		typeof document < "u" &&
			document.documentElement &&
			((t = document.documentElement.lang),
			!t &&
				typeof document.documentElement.getAttribute == "function" &&
				(t = document.documentElement.getAttribute("lang") || void 0));
		const n = [
			(r = e.language) == null ? void 0 : r.code,
			...(((o = e.languages) == null ? void 0 : o.map((s) => s.code)) || []),
		].filter(Boolean);
		return ti({
			explicitLanguage: void 0,
			savedLanguage: void 0,
			htmlLang: t,
			browserLanguage: typeof navigator < "u" ? navigator.language : void 0,
			surveyDefault: ((i = e.language) == null ? void 0 : i.code) || "en",
			enabledLanguages: n,
		});
	}
	function xw(e) {
		var o, i, s;
		if (e.state._l) return e.state._l;
		let t;
		typeof document < "u" &&
			document.documentElement &&
			((t = document.documentElement.lang),
			!t &&
				typeof document.documentElement.getAttribute == "function" &&
				(t = document.documentElement.getAttribute("lang") || void 0));
		const n = e.surveys[0];
		if (!n) return "en";
		const r = [
			(o = n.language) == null ? void 0 : o.code,
			...(((i = n.languages) == null ? void 0 : i.map((a) => a.code)) || []),
		].filter(Boolean);
		return ti({
			explicitLanguage: void 0,
			savedLanguage: void 0,
			htmlLang: t,
			browserLanguage: typeof navigator < "u" ? navigator.language : void 0,
			surveyDefault: ((s = n.language) == null ? void 0 : s.code) || "en",
			enabledLanguages: r,
		});
	}
	function hc(e, t) {
		const n = e.getItem("skyra.state");
		if (!n) return ht.parse({ _id: Me() });
		try {
			const r = JSON.parse(n);
			return ht.parse(r);
		} catch (r) {
			return (
				t &&
					Ut({
						apiHost: t.apiHost,
						event: "cookie_state_parse_failed",
						reason:
							r instanceof SyntaxError ? "invalid_json" : "invalid_schema",
						org: t.org,
						url: t.url,
					}),
				ht.parse({ _id: Me() })
			);
		}
	}
	function Cw(e, t) {
		e.setItem("skyra.state", JSON.stringify(t));
	}
	function gc(e, t) {
		const n = ni(e),
			r = e.urlRules && e.urlRules.length > 0;
		if (!n && r && !ec(t, "Follow", e.urlRules)) return !1;
		const o = Cn(),
			i = (e.hideRules || []).filter((s) => s[o] && Ya(s, t));
		return i.some((s) => !s.follow)
			? !1
			: n
				? ri({
						urlString: t,
						surveyStarted: !0,
						showRules: e.showRules || [],
						followRules: e.followRules || [],
						hideRules: e.hideRules || [],
						device: o,
						isInline: !1,
					}) || i.some((s) => s.follow)
				: !!r;
	}
	function Pr(e) {
		var n, r, o;
		if (e.popupCapture)
			return (
				e.activePopupSurvey ??
				((n = e.popupCapture.getSnapshot().context) == null
					? void 0
					: n.survey) ??
				null
			);
		const t =
			(o =
				(r = e.popupCoordinator) == null ? void 0 : r.getSnapshot().context) ==
			null
				? void 0
				: o.selectedSurvey;
		return t ? (e.surveys.find((i) => i.fullSlug === t) ?? null) : null;
	}
	function Vt(e, t) {
		return e.renderType && e.renderType !== "Popup"
			? !1
			: t
				? !(
						t.renderType !== "Popup" ||
						(e.id && e.id !== t.id) ||
						(e.slug && e.slug !== t.fullSlug)
					)
				: !(e.id || e.slug);
	}
	function Wt(e) {
		return !e.id && !e.slug && (!e.renderType || e.renderType === "Popup");
	}
	function zw(e, t) {
		return e.id === t.id || e.fullSlug === t.fullSlug;
	}
	function si(e, t) {
		return t.some((n) => zw(e, n));
	}
	function Tw(e) {
		return e.popupHidden
			? []
			: e.hiddenPopupSurveys.length === 0
				? e.popupSurveys
				: e.popupSurveys.filter((t) => !si(t, e.hiddenPopupSurveys));
	}
	function mc(e) {
		return e.popupCapture
			? e.popupHidden
				? !0
				: e.activePopupSurvey
					? si(e.activePopupSurvey, e.hiddenPopupSurveys)
					: !1
			: !1;
	}
	function Iw(e, t) {
		return Wt(t) ? [] : e.filter((n) => Vt(t, n) === !1);
	}
	function yc(e, t, n) {
		return n === "replace" ? t : { ...e, ...t };
	}
	const $w = Sn({
		actors: {
			loadSurveys: hw,
			popupCoordinator: _w,
			surveySessionInitializer: kw,
			captureMachine: uc,
		},
		guards: {
			activePopupBlockedOnReload: ({ context: e, event: t }) => {
				if (t.type !== "reload" || !e.popupCapture) return !1;
				if (mc(e)) return !0;
				const n = e.popupCapture.getSnapshot().context.survey;
				return !gc(n, t.url);
			},
			activePopupAllowedOnReload: ({ context: e, event: t }) => {
				if (t.type !== "reload" || !e.popupCapture || mc(e)) return !1;
				const n = e.popupCapture.getSnapshot().context.survey;
				return gc(n, t.url);
			},
			hideTargetsPopup: ({ context: e, event: t }) =>
				t.type !== "hideSurveys" ? !1 : Vt(t, Pr(e)),
			showTargetsPopup: ({ context: e, event: t }) =>
				t.type !== "showSurveys"
					? !1
					: Wt(t) || e.hiddenPopupSurveys.some((n) => Vt(t, n))
						? !0
						: Vt(t, Pr(e)),
			noActivePopupCapture: ({ context: e }) => !e.popupCapture,
			removeSurveyTargetsActiveOrPendingPopup: ({ context: e, event: t }) => {
				if (t.type !== "removeSurvey" || !t.slug) return !1;
				const n = Pr(e);
				return (n == null ? void 0 : n.fullSlug) === t.slug;
			},
			removeSurveyTargetsKnownPopup: ({ context: e, event: t }) => {
				if (t.type !== "removeSurvey" || !t.slug) return !1;
				const n = e.surveys.find((r) => r.fullSlug === t.slug);
				return (n == null ? void 0 : n.renderType) === "Popup";
			},
		},
		actions: {
			writeCookieState: ({ context: e }) => {
				e.consent && Cw(e.cookieStorage, e.state);
			},
			initializeContext: z(({ context: e }) => ({ visitorId: e.state._id })),
			readCookieState: z(({ context: e }) => {
				const t = hc(e.cookieStorage, {
						apiHost: e.apiHost,
						org: e.org,
						url: e.url,
					}),
					n = t._id;
				return { state: t, visitorId: n };
			}),
			separateSurveysByRenderType: z(({ context: e }) => {
				const t = e.surveys.filter((o) => o.renderType === "Popup"),
					n = e.surveys.filter((o) => o.renderType === "Inline"),
					r = e.surveys.filter((o) => o.renderType === "Headless");
				return { popupSurveys: t, inlineSurveys: n, headlessSurveys: r };
			}),
			detectAndSetLanguage: z(({ context: e }) => {
				const t = xw(e);
				return { state: ht.parse({ ...e.state, _l: t }) };
			}),
			spawnPopupCoordinator: z(({ context: e, spawn: t, self: n }) => {
				const r = Tw(e);
				if (r.length === 0) return {};
				if (e.popupCoordinator) return {};
				const o = t("popupCoordinator", {
					id: "popup-coordinator",
					input: {
						surveys: r,
						url: e.url,
						org: e.org,
						apiHost: e.apiHost,
						visitorId: e.visitorId,
						cookieStorage: e.cookieStorage,
						cookieState: e.state,
						traits: e.traits,
						language: e.state._l,
						locale: Tr(),
						testMode: e.testMode,
						surveyOverrides: e.surveyOverrides,
						selector: e.selector,
						requestedSurvey: e.requestedSurvey,
						consent: e.consent,
						organisation: e.organisation,
					},
					systemId: "popup-coordinator",
				});
				return (
					o.on("*", (i) => {
						n.send(i);
					}),
					{ popupCoordinator: o }
				);
			}),
			spawnInlineInitializer: z(
				({ context: e, event: t, spawn: n, self: r }) => {
					if (t.type !== "surveyMounted") return {};
					if (!e.inlineSurveys.some((a) => a.fullSlug === t.slug)) return {};
					const i = `inline-${t.slug}-${t.instanceId}`;
					if (e.surveySessionInitializers[i]) return {};
					const s = n("surveySessionInitializer", {
						id: i,
						input: {
							kind: "inline",
							slug: t.slug,
							org: e.org,
							apiHost: e.apiHost,
							visitorId: e.visitorId,
							cookieStorage: e.cookieStorage,
							traits: e.traits,
							url: e.url,
							testMode: e.testMode,
						},
						systemId: i,
					});
					return (
						s.on("*", (a) => {
							r.send(a);
						}),
						{
							inlineFailures: Object.fromEntries(
								Object.entries(e.inlineFailures).filter(([a]) => a !== t.slug),
							),
							surveySessionInitializers: {
								...e.surveySessionInitializers,
								[i]: s,
							},
						}
					);
				},
			),
			spawnHeadlessInitializer: z(
				({ context: e, event: t, spawn: n, self: r }) => {
					if (t.type !== "headlessSessionRequested") return {};
					if (
						!e.headlessSurveys.some((a) => a.fullSlug === t.slug) ||
						e.headlessCaptures[t.slug]
					)
						return {};
					const i = `headless-${t.slug}`;
					if (e.surveySessionInitializers[i]) return {};
					const s = n("surveySessionInitializer", {
						id: i,
						input: {
							kind: "headless",
							slug: t.slug,
							org: e.org,
							apiHost: e.apiHost,
							visitorId: e.visitorId,
							cookieStorage: e.cookieStorage,
							traits: e.traits,
							url: e.url,
							testMode: e.testMode,
						},
						systemId: i,
					});
					return (
						s.on("*", (a) => {
							r.send(a);
						}),
						{
							headlessFailures: Object.fromEntries(
								Object.entries(e.headlessFailures).filter(
									([a]) => a !== t.slug,
								),
							),
							surveySessionInitializers: {
								...e.surveySessionInitializers,
								[i]: s,
							},
						}
					);
				},
			),
			clearHeadlessInitializer: z(({ context: e, event: t }) => {
				if (t.type !== "readyToCapture" || t.survey.renderType !== "Headless")
					return {};
				const n = `headless-${t.slug}`;
				return {
					surveySessionInitializers: Object.fromEntries(
						Object.entries(e.surveySessionInitializers).filter(
							([r]) => r !== n,
						),
					),
				};
			}),
			storeInlineFailure: z(({ context: e, event: t }) =>
				t.type !== "inlineInitializationFailed"
					? {}
					: {
							inlineFailures: {
								...e.inlineFailures,
								[t.slug]: {
									slug: t.slug,
									code: t.code,
									message: t.message,
									cause: t.cause,
								},
							},
						},
			),
			storeHeadlessFailure: z(({ context: e, event: t }) =>
				t.type !== "headlessInitializationFailed"
					? {}
					: {
							headlessFailures: {
								...e.headlessFailures,
								[t.slug]: {
									slug: t.slug,
									code: t.code,
									message: t.message,
									cause: t.cause,
								},
							},
							surveySessionInitializers: Object.fromEntries(
								Object.entries(e.surveySessionInitializers).filter(
									([n]) => n !== `headless-${t.slug}`,
								),
							),
						},
			),
			saveCaptureStateToContext: z(({ context: e, event: t }) => {
				if (t.type !== "readyToCapture") return {};
				const { slug: n, sessionId: r } = t;
				return {
					state: {
						...e.state,
						[n]: { state: "Capture", sessionId: r, lastSync: Date.now() },
					},
				};
			}),
			spawnCaptureMachine: z(({ context: e, event: t, spawn: n, self: r }) => {
				if (t.type !== "readyToCapture") return {};
				const { slug: o, survey: i, sessionId: s, explicitLanguage: a } = t,
					c = `capture-${o}-${s}`,
					l = pw(e.cookieStorage, o),
					u =
						i.renderType === "Inline" || i.renderType === "Headless"
							? a || Sw(i)
							: e.state._l,
					p = n("captureMachine", {
						id: c,
						input: {
							url: e.url,
							survey: i,
							state: l,
							sessionId: s,
							visitorId: e.visitorId,
							parentRef: r,
							cookieStorage: e.cookieStorage,
							cookieConsent: e.consent,
							apiHost: e.apiHost,
							language: u,
							traits: e.traits,
							device: Cn(),
							locale: Tr(),
						},
						systemId: c,
					});
				p.subscribe({
					complete() {
						const b = p.getSnapshot().output;
						(b == null ? void 0 : b.type) === "rejected"
							? r.send({ type: "surveyRejected", slug: o, captureId: c })
							: (b == null ? void 0 : b.type) === "completed" &&
								r.send({ type: "surveyDone", slug: o, captureId: c });
					},
				}),
					p.on("cardSaved", (y) => {
						r.send(y);
					});
				const f = i.renderType === "Inline",
					g = i.renderType === "Headless";
				return {
					popupCapture: f || g ? e.popupCapture : p,
					activePopupSurvey: f || g ? e.activePopupSurvey : i,
					inlineCaptures: f
						? { ...e.inlineCaptures, [c]: p }
						: e.inlineCaptures,
					headlessCaptures: g
						? { ...e.headlessCaptures, [o]: p }
						: e.headlessCaptures,
				};
			}),
			updateCookieState: z(({ context: e, event: t }) => {
				var s;
				if (t.type !== "surveyDone" && t.type !== "surveyRejected") return {};
				const n = t.slug;
				if (e.inlineSurveys.some((a) => a.fullSlug === n)) return {};
				const o = (s = e.state[n]) == null ? void 0 : s.sessionId;
				return (
					o ||
						console.warn(
							`[Skyra V2] Survey ${t.type} event received without sessionId in state for ${n}. This indicates a bug in the coordinator flow.`,
						),
					{
						state: {
							...e.state,
							[n]: {
								state: t.type === "surveyDone" ? "Completed" : "Rejected",
								lastSync: Date.now(),
								...(o && { sessionId: o }),
							},
						},
					}
				);
			}),
			updateCookieStateNotSelected: z(({ context: e, event: t }) => {
				if (t.type !== "surveyNotSelected") return {};
				const n = t.slug;
				return {
					state: {
						...e.state,
						[n]: { state: "NotSelected", lastSync: Date.now() },
					},
				};
			}),
			removeCompletedCaptureMachine: z(({ context: e, event: t }) => {
				var a;
				if (t.type !== "surveyDone" && t.type !== "surveyRejected") return {};
				const n = t.captureId,
					r = t.slug;
				let o = e.popupCapture;
				const i = { ...e.inlineCaptures },
					s = { ...e.headlessCaptures };
				if (n) {
					((a = e.popupCapture) == null ? void 0 : a.id) === n && (o = null),
						n in i && delete i[n];
					for (const [c, l] of Object.entries(s)) l.id === n && delete s[c];
				} else {
					for (const [c, l] of Object.entries(e.inlineCaptures))
						c.startsWith(`capture-${r}-`) && delete i[c];
					e.popupCapture &&
						e.popupCapture.id.startsWith(`capture-${r}-`) &&
						(o = null),
						delete s[r];
				}
				return {
					popupCapture: o,
					activePopupSurvey: o ? e.activePopupSurvey : null,
					inlineCaptures: i,
					headlessCaptures: s,
				};
			}),
			updateUrl: z(({ event: e }) =>
				e.type !== "reload" ? {} : { url: e.url },
			),
			updateActivePopupUrlOnReload: ({ context: e, event: t }) => {
				var n;
				t.type === "reload" &&
					((n = e.popupCapture) == null ||
						n.send({ type: "setUrl", url: t.url }));
			},
			removeBlockedActivePopupOnReload: z(({ context: e, event: t }) => {
				if (t.type !== "reload") return {};
				if (!e.popupCapture) return {};
				const r = e.popupCapture.getSnapshot().context.survey;
				if (typeof document < "u") {
					const o = document.querySelector(
						`skyra-survey[slug="${r.fullSlug}"]`,
					);
					o == null || o.remove();
				}
				return { popupCapture: null, activePopupSurvey: null };
			}),
			updateConsent: z(({ event: e }) =>
				e.type !== "setConsent" ? {} : { consent: e.value },
			),
			updateTraits: z(({ context: e, event: t }) =>
				t.type !== "setTraits"
					? {}
					: { traits: yc(e.traits, t.traits, t.mode) },
			),
			clearPopupCoordinator: z(() => ({ popupCoordinator: null })),
			hidePopupSurveys: z(({ context: e, event: t }) => {
				var o;
				if (t.type !== "hideSurveys") return {};
				const n = Pr(e);
				return (
					(o = e.popupCapture) == null || o.send({ type: "minimize" }),
					Wt(t)
						? { popupHidden: !0, hiddenPopupSurveys: [] }
						: {
								hiddenPopupSurveys:
									n && !si(n, e.hiddenPopupSurveys)
										? [...e.hiddenPopupSurveys, n]
										: e.hiddenPopupSurveys,
							}
				);
			}),
			showPopupSurveys: z(({ context: e, event: t }) => {
				var r;
				if (t.type !== "showSurveys") return {};
				const n = e.popupCapture ? e.activePopupSurvey : null;
				return (
					n &&
						(Wt(t) || Vt(t, n)) &&
						((r = e.popupCapture) == null || r.send({ type: "maximize" })),
					{
						popupHidden: Wt(t) ? !1 : e.popupHidden,
						hiddenPopupSurveys: Iw(e.hiddenPopupSurveys, t),
					}
				);
			}),
			removePopupSurveyElement: ({ event: e }) => {
				if (e.type !== "removeSurvey") return;
				const t = e.slug;
				if (t && typeof document < "u") {
					const n = document.querySelector(`skyra-survey[slug="${t}"]`);
					n == null || n.remove();
				}
			},
			forwardConsentToChildren: ({ context: e, event: t }) => {
				if (t.type === "setConsent") {
					e.popupCapture &&
						e.popupCapture.send({ type: "setConsent", value: t.value });
					for (const n of Object.values(e.inlineCaptures))
						n.send({ type: "setConsent", value: t.value });
					for (const n of Object.values(e.headlessCaptures))
						n.send({ type: "setConsent", value: t.value });
					e.popupCoordinator &&
						e.popupCoordinator.send({ type: "setConsent", value: t.value });
				}
			},
			forwardTraitsToChildren: ({ context: e, event: t }) => {
				var n, r;
				if (t.type === "setTraits") {
					(n = e.popupCoordinator) == null || n.send(t),
						(r = e.popupCapture) == null || r.send(t);
					for (const o of Object.values(e.inlineCaptures)) o.send(t);
					for (const o of Object.values(e.headlessCaptures)) o.send(t);
					for (const o of Object.values(e.surveySessionInitializers)) o.send(t);
				}
			},
			syncTraitsForActiveCaptures: ({ context: e, event: t }) => {
				if (t.type !== "setTraits") return;
				const n = yc(e.traits, t.traits, t.mode);
				if (!rc(n)) return;
				const r = [
					...(e.popupCapture ? [e.popupCapture] : []),
					...Object.values(e.inlineCaptures),
					...Object.values(e.headlessCaptures),
				];
				for (const o of r) {
					const i = o.getSnapshot().context;
					Ht(
						{
							event: "SessionTraits",
							survey: i.survey.id,
							visitor: i.visitorId,
							session: i.sessionId,
							traits: n,
						},
						{ apiHost: e.apiHost },
					).catch((s) => {
						console.warn("[Skyra] Failed to sync updated traits", s);
					});
				}
			},
			updateTestMode: z(({ event: e }) =>
				e.type !== "setTestMode" ? {} : { testMode: e.value },
			),
			emitReady: he({ type: "ready" }),
			emitSurveyStarted: he(({ event: e }) =>
				e.type !== "readyToCapture"
					? { type: "ready" }
					: { type: "surveyStarted", slug: e.slug },
			),
			emitSurveyCompleted: he(({ event: e }) =>
				e.type !== "surveyDone"
					? { type: "ready" }
					: { type: "surveyCompleted", slug: e.slug },
			),
			emitSurveyRejected: he(({ event: e }) => {
				if (e.type !== "surveyRejected")
					throw new Error("Unexpected event type");
				return { type: "surveyRejected", slug: e.slug };
			}),
			emitSurveyNotSelected: he(({ event: e }) => {
				if (e.type !== "surveyNotSelected")
					throw new Error("Unexpected event type");
				return { type: "surveyNotSelected", slug: e.slug };
			}),
		},
	}).createMachine({
		id: "controllerV2",
		context: ({ input: e }) => ({
			url: e.url,
			org: e.org,
			cookieStorage: e.cookieStorage,
			consent: e.consent ?? e.cookieConsent ?? !0,
			apiHost: e.apiHost,
			testMode: e.testMode ?? !1,
			traits: e.traits,
			state:
				e.state ||
				hc(e.cookieStorage, { apiHost: e.apiHost, org: e.org, url: e.url }),
			visitorId: "",
			surveys: [],
			popupSurveys: [],
			inlineSurveys: [],
			headlessSurveys: [],
			requestedSurvey: void 0,
			surveyOverrides: e.surveyOverrides,
			selector: e.cssSelector || "#skyra-widget",
			ready: !1,
			popupCoordinator: null,
			surveySessionInitializers: {},
			inlineFailures: {},
			headlessFailures: {},
			popupCapture: null,
			activePopupSurvey: null,
			inlineCaptures: {},
			headlessCaptures: {},
			popupHidden: !1,
			hiddenPopupSurveys: [],
		}),
		initial: "Startup",
		on: {
			reload: [
				{
					guard: "activePopupBlockedOnReload",
					actions: [
						"updateUrl",
						"readCookieState",
						ut(({ context: e }) => {
							var t;
							return ((t = e.popupCapture) == null ? void 0 : t.id) ?? "";
						}),
						"removeBlockedActivePopupOnReload",
						ut("popup-coordinator"),
						"clearPopupCoordinator",
					],
					target: ".Startup",
				},
				{
					guard: "activePopupAllowedOnReload",
					actions: [
						"updateUrl",
						"readCookieState",
						"updateActivePopupUrlOnReload",
					],
				},
				{
					actions: [
						"updateUrl",
						"readCookieState",
						"updateActivePopupUrlOnReload",
						ut("popup-coordinator"),
						"clearPopupCoordinator",
					],
					target: ".Startup",
				},
			],
			setConsent: { actions: ["updateConsent", "forwardConsentToChildren"] },
			setTraits: {
				actions: [
					"syncTraitsForActiveCaptures",
					"updateTraits",
					"forwardTraitsToChildren",
				],
			},
		},
		states: {
			Startup: {
				initial: "Init",
				states: {
					Init: { entry: ["initializeContext"], always: "LoadSurveys" },
					LoadSurveys: {
						invoke: {
							src: "loadSurveys",
							input: ({ context: e }) => ({
								orgSlug: e.org,
								apiHost: e.apiHost,
								testMode: e.testMode,
							}),
							onDone: {
								target: "FilterSurveys",
								actions: z({
									surveys: ({ event: e }) => e.output.surveys,
									organisation: ({ event: e }) => e.output.organisation,
								}),
							},
							onError: {
								target: "#controllerV2.Failed",
								actions: z({ error: ({ event: e }) => e.error }),
							},
						},
					},
					FilterSurveys: {
						entry: ["separateSurveysByRenderType"],
						always: "#controllerV2.Ready",
					},
				},
			},
			Ready: {
				entry: ["detectAndSetLanguage", "spawnPopupCoordinator", "emitReady"],
				on: {
					surveyMounted: { actions: ["spawnInlineInitializer"] },
					headlessSessionRequested: { actions: ["spawnHeadlessInitializer"] },
					inlineInitializationFailed: { actions: ["storeInlineFailure"] },
					headlessInitializationFailed: { actions: ["storeHeadlessFailure"] },
					readyToCapture: {
						actions: [
							"saveCaptureStateToContext",
							"writeCookieState",
							"spawnCaptureMachine",
							"clearHeadlessInitializer",
							"emitSurveyStarted",
						],
					},
					startSurvey: {
						actions: Ol("popup-coordinator", ({ event: e }) => ({
							type: "startSurvey",
							slug: e.slug,
						})),
					},
					surveyDone: {
						actions: [
							"updateCookieState",
							"writeCookieState",
							"emitSurveyCompleted",
							"removeCompletedCaptureMachine",
						],
					},
					surveyRejected: {
						actions: [
							"updateCookieState",
							"writeCookieState",
							"emitSurveyRejected",
							"removeCompletedCaptureMachine",
						],
					},
					surveyNotSelected: {
						actions: [
							"updateCookieStateNotSelected",
							"writeCookieState",
							"emitSurveyNotSelected",
						],
					},
					setLanguage: {
						actions: [
							z({
								state: ({ event: e, context: t }) =>
									ht.parse({ ...t.state, _l: e.language }),
							}),
							"writeCookieState",
						],
					},
					hideSurveys: {
						guard: "hideTargetsPopup",
						actions: [
							"hidePopupSurveys",
							ut("popup-coordinator"),
							"clearPopupCoordinator",
						],
					},
					showSurveys: [
						{
							guard: ({ context: e, event: t }) =>
								t.type === "showSurveys" &&
								!e.popupCapture &&
								(Wt(t) || e.hiddenPopupSurveys.some((n) => Vt(t, n))),
							actions: "showPopupSurveys",
							target: "Startup",
						},
						{ guard: "showTargetsPopup", actions: "showPopupSurveys" },
					],
					removeSurvey: [
						{
							guard: "removeSurveyTargetsActiveOrPendingPopup",
							actions: [
								"removePopupSurveyElement",
								ut("popup-coordinator"),
								"clearPopupCoordinator",
							],
						},
						{
							guard: "removeSurveyTargetsKnownPopup",
							actions: "removePopupSurveyElement",
						},
					],
					setTestMode: { actions: ["updateTestMode"], target: "Startup" },
				},
			},
			Failed: { type: "final" },
		},
	});
	class Ew {
		constructor(t, n, r) {
			this.eventHandlers = new Map();
			const o = {
				org: t.org,
				url: t.url,
				cookieStorage: t.cookieStorage,
				apiHost: t.apiHost,
				traits: t.traits,
				testMode: t.testMode,
				surveyOverrides: t.surveyOverrides,
				cssSelector: t.selector || t.cssSelector || "body",
				cookieConsent: t.consent ?? t.cookieConsent ?? !0,
			};
			(this.actor = At(r || $w, { input: o, inspect: n })),
				this.actor.on("*", (i) => {
					const s = this.eventHandlers.get(i.type);
					s && s.forEach((c) => c(i));
					const a = this.eventHandlers.get("*");
					a && a.forEach((c) => c(i));
				});
		}
		start() {
			this.actor.start();
		}
		stop() {
			this.actor.stop();
		}
		send(t) {
			this.actor.send(t);
		}
		getSnapshot() {
			const t = this.actor.getSnapshot();
			return {
				value: t.value,
				context: {
					...t.context,
					selector: t.context.selector || "body",
					consent: t.context.consent ?? !0,
					url: t.context.url,
					orgSlug: t.context.org,
					testMode: t.context.testMode,
					traits: t.context.traits,
				},
				status: t.status,
			};
		}
		on(t, n) {
			var r;
			this.eventHandlers.has(t) || this.eventHandlers.set(t, new Set()),
				(r = this.eventHandlers.get(t)) == null || r.add(n);
		}
		off(t, n) {
			const r = this.eventHandlers.get(t);
			r && r.delete(n);
		}
		findCaptureBySlug(t) {
			const n = this.actor.getSnapshot();
			if (
				n.context.popupCapture &&
				n.context.popupCapture.id.startsWith(`capture-${t}-`)
			)
				return n.context.popupCapture;
			for (const [r, o] of Object.entries(n.context.inlineCaptures))
				if (r.startsWith(`capture-${t}-`)) return o;
			if (n.context.headlessCaptures[t]) return n.context.headlessCaptures[t];
		}
		getActor() {
			return this.actor;
		}
		getVersion() {
			return "v2";
		}
		getDebugInfo(t, n) {
			var l;
			const r = this.actor.getSnapshot(),
				o = r.context,
				i = r.value,
				s = typeof i == "string" ? i : JSON.stringify(i),
				a = [
					...(o.popupCapture ? [o.popupCapture] : []),
					...Object.values(o.inlineCaptures),
					...Object.values(o.headlessCaptures),
				],
				c = o.popupCoordinator
					? o.popupCoordinator.getSnapshot().context.eligibleSurveys
					: [];
			return {
				config: {
					org: o.org,
					cookieConsent: o.consent ?? !0,
					testMode: o.testMode,
					cssSelector: o.selector || "body",
					traits: o.traits,
				},
				runtime: {
					currentUrl: o.url,
					visitorId: o.visitorId,
					language: (l = o.state) == null ? void 0 : l._l,
					currentState: s,
					cookieSupport: !!t.getItem("skyra.state"),
				},
				details: o.surveys
					.filter((d) => !n || d.fullSlug === n)
					.map((d) => {
						var _, S, x, C, I, P, N, W;
						const u = (_ = o.state) == null ? void 0 : _[d.fullSlug],
							p = Ir({
								traits: o.traits,
								language: (S = o.state) == null ? void 0 : S._l,
								locale: (x = o.state) == null ? void 0 : x._l,
							}),
							f = cb(d.audienceRules, p, d.audienceRuleMode),
							g = a.find((O) => O.id.startsWith(`capture-${d.fullSlug}-`));
						let y = null;
						if (g) {
							const O = g.getSnapshot();
							y = {
								id: g.id,
								state:
									typeof O.value == "string"
										? O.value
										: JSON.stringify(O.value),
								status: O.status,
								currentCard:
									(I = (C = O.context) == null ? void 0 : C.state) == null
										? void 0
										: I.currentCard,
								totalCards:
									(W =
										(N = (P = O.context) == null ? void 0 : P.survey) == null
											? void 0
											: N.cards) == null
										? void 0
										: W.length,
							};
						}
						const b = c.some((O) => O.fullSlug === d.fullSlug),
							v = o.inlineSurveys.some((O) => O.fullSlug === d.fullSlug);
						return {
							slug: d.fullSlug,
							id: d.id,
							name: d.name,
							renderType: d.renderType,
							isLive: d.isLive,
							publishingState: d.publishingState,
							numCards: d.numCards,
							eligible: b || v,
							capturePercent: d.capturePercent,
							priorityScore: d.priorityScore,
							reasons: f,
							state: u
								? {
										state: String(u.state),
										sessionId: u.sessionId,
										lastSync: u.lastSync
											? new Date(u.lastSync).toISOString()
											: void 0,
									}
								: null,
							captureMachine: y,
						};
					}),
			};
		}
		surveyById(t) {
			var r;
			return (r = this.actor.getSnapshot().context.surveys) == null
				? void 0
				: r.find((o) => o.id === t);
		}
		surveyIdBySlug(t) {
			var r, o;
			return (o =
				(r = this.actor.getSnapshot().context.surveys) == null
					? void 0
					: r.find((i) => i.fullSlug === t)) == null
				? void 0
				: o.id;
		}
	}
	function vc(e, t) {
		return new Ew(e, t);
	}
	const Rw = Sn({
		actors: {
			captureMachine: uc.provide({
				actions: { storeCookieState: () => {}, clearCookieState: () => {} },
				actors: { postCardValue: Ce(async () => {}) },
			}),
			loadSurveys: fw,
			loadFullSurveys: ii,
			renderSurvey: sc,
		},
		actions: {
			removeSurvey: (e, t) => {
				const n = t.slug;
				if (!n) return !1;
				const r = document.querySelector(`skyra-preview[slug="${n}"]`);
				return r ? (r.remove(), !0) : !1;
			},
		},
	}).createMachine({
		context: ({ input: e }) => ({
			url: e.url,
			org: e.org,
			selector: "body",
			surveys: [],
			fullSurveys: {},
			cookieStorage: e.cookieStorage,
			visitorId: Me(),
			apiHost: e.apiHost ?? "https://ingest.skyra.no",
			ready: !1,
			previewTarget: e.previewTarget,
			captureMachines: [],
		}),
		id: "Controller machine",
		on: {
			setOrg: {
				target: "#Startup",
				actions: z({ org: ({ event: e }) => e.org }),
			},
			previewSurvey: [
				{
					target: "#PreviewSurvey",
					actions: [
						z({
							previewSlug: ({ event: e }) => e.slug,
							previewTarget: ({ event: e }) => e.target ?? void 0,
						}),
					],
					guard: ({ context: e, event: t }) =>
						!!e.surveys.find((r) => r.fullSlug === t.slug),
				},
				{
					target: "#Startup",
					actions: [
						z({
							previewSlug: ({ event: e }) => e.slug,
							previewTarget: ({ event: e }) => e.target ?? void 0,
						}),
					],
				},
			],
		},
		initial: "Startup",
		states: {
			Startup: {
				id: "Startup",
				description: "Load all org surveys from the API",
				invoke: {
					src: "loadSurveys",
					input: ({ context: e }) => ({
						apiHost: e.apiHost,
						orgSlug: e.org,
						testMode: !0,
					}),
					onDone: [
						{
							target: "#PreviewSurvey",
							actions: z({ surveys: ({ event: e }) => e.output }),
							guard: ({ context: e }) => !!e.previewSlug,
						},
						{
							target: "#Ready",
							actions: z({ surveys: ({ event: e }) => e.output }),
						},
					],
					onError: {
						target: "#Idle",
						actions: z({ surveys: [], error: ({ event: e }) => e.error }),
					},
				},
			},
			Ready: {
				id: "Ready",
				initial: "Idle",
				on: {
					removeSurvey: {
						actions: {
							type: "removeSurvey",
							params: ({ event: e }) => ({ slug: e.slug }),
						},
					},
				},
				states: {
					Idle: { id: "Idle" },
					PreviewSurvey: {
						id: "PreviewSurvey",
						initial: "prepare",
						states: {
							prepare: {
								invoke: {
									src: "loadFullSurveys",
									input: ({ context: e }) => {
										const t = e.previewSlug;
										if (!t) throw new Error("No preview slug");
										return {
											orgSlug: e.org,
											slugs: [t],
											apiHost: e.apiHost,
											testMode: !0,
										};
									},
									onError: {
										target: "#Idle",
										actions: ({ event: e }) => {
											console.error(e);
										},
									},
									onDone: {
										target: "run",
										actions: z({
											fullSurveys: ({ event: e, context: t }) => {
												const n = t.fullSurveys;
												for (const r of e.output) n[r.fullSlug] = r;
												return n;
											},
										}),
									},
								},
							},
							run: {
								entry: [
									z(({ self: e, context: t, spawn: n }) => {
										const r = t.previewSlug;
										if (!r) return {};
										const o = t.fullSurveys[r];
										if (!o) return { machine: void 0 };
										const i = n("captureMachine", {
											id: r,
											input: {
												url: t.url,
												survey: o,
												parentRef: e,
												cookieStorage: t.cookieStorage,
												cookieConsent: !0,
												apiHost: t.apiHost,
												visitorId: Me(),
												sessionId: Me(),
											},
										});
										return (
											i.subscribe({
												complete() {
													const a = i.getSnapshot().output;
													(a == null ? void 0 : a.type) === "rejected"
														? e.send({ type: "removeSurvey", slug: i.id })
														: (a == null ? void 0 : a.type) === "completed" &&
															e.send({ type: "removeSurvey", slug: i.id });
												},
											}),
											{ machine: i }
										);
									}),
								],
								invoke: {
									src: "renderSurvey",
									input: ({ context: e }) => {
										const t = e.machine;
										if (!t) throw new Error("Preview machine not found");
										const n = e.surveys.find((r) => r.fullSlug === t.id);
										if (!n)
											throw new Error(`Survey summary not found [${t.id}]`);
										return {
											survey: n,
											selector:
												(e == null ? void 0 : e.previewTarget) ?? "body",
											customElementName: "skyra-preview",
											replace: !0,
										};
									},
									onError: { target: "#Idle" },
									onDone: {
										target: "#Idle",
										actions: [
											he(({ event: e }) => {
												if (!e.output) throw new Error("No survey selected");
												return {
													type: "surveyStarted",
													slug: e.output.survey.fullSlug,
												};
											}),
										],
									},
								},
							},
						},
					},
				},
			},
		},
	});
	function Mw(e, t) {
		return t === "classic" || t === "beta" ? t : "classic";
	}
	function Pw(e, t, n = "classic") {
		var o, i;
		const r = t
			? (i = (o = e.surveyOverrides) == null ? void 0 : o[t]) == null
				? void 0
				: i.rendererVariant
			: void 0;
		return r === "classic" || r === "beta"
			? r
			: e.rendererVariantExplicit
				? e.rendererVariant
				: n;
	}
	function ai(e, t) {
		const n = { ...e, ...t },
			r = n.org || "";
		if (!r)
			throw new Error(
				'[Skyra] No organization specified. Set it via window.SKYRA_CONFIG = { org: "your-org" } or pass as parameter to start().',
			);
		return {
			org: r,
			selector: n.cssSelector || "body",
			consent: n.cookieConsent ?? n.consent ?? !0,
			testMode: n.testMode ?? !1,
			rendererVariant: Mw(r, n.rendererVariant),
			rendererVariantExplicit: n.rendererVariant !== void 0,
			traits: n.traits,
			surveyOverrides: n.surveyOverrides,
		};
	}
	function bc(e) {
		return e.split("/")[0];
	}
	const Aw = [
		"fhs.no",
		"folkebibl.no",
		"fylkesbibl.no",
		"idrett.no",
		"museum.no",
		"priv.no",
		"vgs.no",
		"dep.no",
		"herad.no",
		"kommune.no",
		"mil.no",
		"stat.no",
		"aa.no",
		"ah.no",
		"bu.no",
		"fm.no",
		"hl.no",
		"hm.no",
		"jan-mayen.no",
		"mr.no",
		"nl.no",
		"nt.no",
		"of.no",
		"ol.no",
		"oslo.no",
		"rl.no",
		"sf.no",
		"st.no",
		"svalbard.no",
		"tm.no",
		"tr.no",
		"va.no",
		"vf.no",
		"gs.aa.no",
		"gs.ah.no",
		"gs.bu.no",
		"gs.fm.no",
		"gs.hl.no",
		"gs.hm.no",
		"gs.jan-mayen.no",
		"gs.mr.no",
		"gs.nl.no",
		"gs.nt.no",
		"gs.of.no",
		"gs.ol.no",
		"gs.oslo.no",
		"gs.rl.no",
		"gs.sf.no",
		"gs.st.no",
		"gs.svalbard.no",
		"gs.tm.no",
		"gs.tr.no",
		"gs.va.no",
		"gs.vf.no",
		"akrehamn.no",
		"åkrehamn.no",
		"algard.no",
		"ålgård.no",
		"arna.no",
		"bronnoysund.no",
		"brønnøysund.no",
		"brumunddal.no",
		"bryne.no",
		"drobak.no",
		"drøbak.no",
		"egersund.no",
		"fetsund.no",
		"floro.no",
		"florø.no",
		"fredrikstad.no",
		"hokksund.no",
		"honefoss.no",
		"hønefoss.no",
		"jessheim.no",
		"jorpeland.no",
		"jørpeland.no",
		"kirkenes.no",
		"kopervik.no",
		"krokstadelva.no",
		"langevag.no",
		"langevåg.no",
		"leirvik.no",
		"mjondalen.no",
		"mjøndalen.no",
		"mo-i-rana.no",
		"mosjoen.no",
		"mosjøen.no",
		"nesoddtangen.no",
		"orkanger.no",
		"osoyro.no",
		"osøyro.no",
		"raholt.no",
		"råholt.no",
		"sandnessjoen.no",
		"sandnessjøen.no",
		"skedsmokorset.no",
		"slattum.no",
		"spjelkavik.no",
		"stathelle.no",
		"stavern.no",
		"stjordalshalsen.no",
		"stjørdalshalsen.no",
		"tananger.no",
		"tranby.no",
		"vossevangen.no",
	];
	function Lw(e) {
		const t = e.split(".");
		if (t.length === 1) return t[0];
		if (t.length === 2) return t.join(".");
		if (t.length > 2)
			return Aw.includes(t.slice(-2).join(".")) ||
				["com", "net", "org", "gov", "edu", "mil", "co"].includes(t.at(-2))
				? t.slice(-3).join(".")
				: t.slice(-2).join(".");
		console.error("Invalid hostname:", e);
	}
	class Ow {
		constructor(t) {
			this.api = t;
		}
		async init(t) {
			var c;
			const n = t.survey,
				r = n.split("/");
			if (r.length !== 2 || r.some((l) => !l))
				throw new Error(
					'Invalid survey slug format. Expected "org/survey-name"',
				);
			const o = this.api.controller;
			if (!o)
				throw new Error(
					"Skyra not initialized. Call skyra.start() before using headless API.",
				);
			await this.waitForReady(o, 5e3);
			const i =
				(c = o.getSnapshot().context.surveys) == null
					? void 0
					: c.find((l) => l.fullSlug === n);
			if (!i) throw new Error(`Survey "${n}" was not found`);
			if (i.renderType !== "Headless")
				throw new Error(`Survey "${n}" is not a headless survey`);
			const s = o.findCaptureBySlug(n);
			if (s) return this.wrapCaptureMachine(s);
			o.send({ type: "headlessSessionRequested", slug: n });
			const a = await this.waitForCaptureMachine(o, n, 5e3);
			return this.wrapCaptureMachine(a);
		}
		getController(t) {
			const n = t.survey,
				r = this.api.controller;
			if (!r) return null;
			const o = r.findCaptureBySlug(n);
			return o ? this.wrapCaptureMachine(o) : null;
		}
		wrapCaptureMachine(t) {
			return {
				getCurrentCard: () => {
					const n = t.getSnapshot();
					if (n.status === "done") return;
					const r = n.context.state.currentCard;
					return n.context.survey.cards.find((i) => i.order === r);
				},
				getNextCard: () => {
					const n = t.getSnapshot(),
						r = n.context.survey,
						o = zn(r.cards, n.context.state, n.context.audienceContext);
					return (
						r.cards.find((i) => i.id === (o == null ? void 0 : o.id)) ?? null
					);
				},
				postValue: (n) =>
					new Promise((r, o) => {
						const i = t.getSnapshot();
						if (i.status === "done") {
							o(new Error("Cannot submit a value after the survey has ended"));
							return;
						}
						const s = i.context.state.currentCard,
							a = i.context.survey.cards.find((l) => l.order === s);
						if ((a == null ? void 0 : a.id) !== n.cardId) {
							o(new Error(`Card "${n.cardId}" is not the current card`));
							return;
						}
						const c = t.subscribe((l) => {
							(l.status === "done" || l.context.state.currentCard !== s) &&
								(c.unsubscribe(), r());
						});
						t.send({ type: "submit", cardId: n.cardId, value: n.value });
					}),
				getSnapshot: () => t.getSnapshot(),
				goBack: () => {
					t.getSnapshot().context.state.history.length !== 0 &&
						t.send({ type: "goBack" });
				},
				reject: () => {
					t.send({ type: "reject" });
				},
			};
		}
		waitForReady(t, n = 5e3) {
			return new Promise((r, o) => {
				const i = t.getSnapshot();
				if (
					i.value === "Ready" ||
					(typeof i.value == "object" && "Ready" in i.value)
				) {
					r();
					return;
				}
				const s = Date.now(),
					a = setInterval(() => {
						const c = t.getSnapshot();
						if (
							c.value === "Ready" ||
							(typeof c.value == "object" && "Ready" in c.value)
						) {
							clearInterval(a), r();
							return;
						}
						Date.now() - s > n &&
							(clearInterval(a),
							o(new Error("Timeout waiting for controller to be ready")));
					}, 50);
			});
		}
		waitForCaptureMachine(t, n, r = 5e3) {
			return new Promise((o, i) => {
				const s = t.findCaptureBySlug(n);
				if (s) {
					o(s);
					return;
				}
				const a = Date.now(),
					c = setInterval(() => {
						var u;
						const l =
							(u = t.getSnapshot().context.headlessFailures) == null
								? void 0
								: u[n];
						if (l) {
							clearInterval(c), i(new Error(l.message));
							return;
						}
						const d = t.findCaptureBySlug(n);
						if (d) {
							clearInterval(c), o(d);
							return;
						}
						Date.now() - a > r &&
							(clearInterval(c),
							i(
								new Error(
									`Timeout waiting for capture machine for survey ${n}`,
								),
							));
					}, 50);
			});
		}
	}
	class Nw {
		constructor(t = {}) {
			(this.config = {}), this.configure(t);
		}
		configure(t) {
			return (this.config = { ...this.config, ...t }), this.config;
		}
		getItem(t) {
			const r = decodeURIComponent(document.cookie).split(";");
			for (const o of r) {
				const [i, s] = o.trim().split("=");
				if (i === t) return s;
			}
			return null;
		}
		setItem(t, n, r) {
			const o = encodeURIComponent(t),
				i = encodeURIComponent(n),
				s = { ...this.config, ...r };
			let a = `${o}=${i}`;
			if (s.expires) {
				const c = new Date(Date.now() + s.expires * 1e3);
				a += `; Expires=${c.toUTCString()}`;
			}
			s.path && (a += `; Path=${s.path}`),
				s.domain && (a += `; Domain=${s.domain}`),
				Fe(`Cookie size: ${a.length} bytes`),
				Fe(n),
				(document.cookie = a);
		}
		removeItem(t, n) {
			this.setItem(t, "", { ...n, expires: -1 });
		}
	}
	function jw(e, t, n = "REDACTED") {
		return t.reduce((r, o) => {
			var s;
			const i = new URL(r);
			if (o.type === "Path") {
				const a = i.pathname.split("/"),
					c = o.path.split("/");
				if (
					c.every((d, u) =>
						d === ":redacted" || d === ":keep" ? !0 : a[u] === d,
					)
				) {
					const d = a.map((u, p) =>
						c[p] === ":redacted" ? n : (c[p] === ":keep", u),
					);
					i.pathname = d.join("/");
				}
			} else
				o.type === "SearchParam" &&
					o.param &&
					(!((s = o.options) != null && s.path) ||
						i.pathname.startsWith(o.options.path)) &&
					i.searchParams.has(o.param) &&
					i.searchParams.set(o.param, n);
			return i.toString();
		}, e);
	}
	const Bw = !1;
	let li;
	const In = k({
			state: L(["Completed", "Capture", "Rejected", "NotSelected"]).or(
				re(h(), un()),
			),
			sessionId: h().optional(),
			lastSync: D().optional(),
		}),
		ht = k({ _id: h(), _l: h().optional() }).catchall(In.optional());
	class Dw {
		constructor() {
			(this.config = {}),
				(this.urlRedactions = []),
				(this.explicitLanguages = new Map()),
				(this.events = Ru()),
				(this._debugEnabled = Bw),
				(this.injectUsed = !1);
			const t = window.location.hostname,
				n = t.match(/^\d+\.\d+\.\d+\.\d+$/),
				r = window.SKYRA_CONFIG || {},
				o = (r == null ? void 0 : r.cookieDomain) ?? Lw(t);
			Fe("Cookie settings:", { isIp: n, tld: o }),
				(this.cookieStorage = new Nw({
					domain: n ? void 0 : o,
					expires: 31536e3,
					path: "/",
				})),
				"skyraStart" in window &&
					typeof window.skyraStart == "function" &&
					setTimeout(() => {
						window.skyraStart();
					}, 0),
				(this.unstable_headless = new Ow(this));
		}
		on(t, n) {
			this.events.on(t, n);
		}
		off(t, n) {
			this.events.off(t, n);
		}
		setConfig(t) {
			this.config = t;
		}
		getRendererVariant(t, n = "classic") {
			return this.normalizedConfig
				? Pw(this.normalizedConfig, t, n)
				: "classic";
		}
		setTraits(t, n) {
			const r = typeof t == "string" ? n : t;
			if (!r) {
				console.warn("[Skyra] setTraits() called without traits");
				return;
			}
			const o = this.getAdapter("setTraits");
			o && o.send({ type: "setTraits", traits: r, mode: "merge" });
		}
		hideSurveys(t) {
			const n = this.getAdapter("hideSurveys");
			n && n.send({ type: "hideSurveys", ...t });
		}
		showSurveys(t) {
			const n = this.getAdapter("showSurveys");
			n && n.send({ type: "showSurveys", ...t });
		}
		async syncTraits(t, n) {}
		setLanguage(t) {
			const n = this.getAdapter("setLanguage");
			n && n.send({ type: "setLanguage", language: t });
		}
		getLanguage() {
			const t = this.getAdapter("getLanguage");
			if (t) return t.getSnapshot().context.state._l;
		}
		getAvailableLanguages() {
			const t = this.getAdapter("getAvailableLanguages");
			if (!t) return [];
			const n = t.getSnapshot().context.surveys;
			if (n.length === 0) return [];
			const r = n[0],
				o = [];
			if ((r.language && o.push(r.language), r.languages))
				for (const i of r.languages) o.push({ code: i.code, name: i.name });
			return o;
		}
		debug(...t) {
			this._debugEnabled && console.log(...t);
		}
		surveyById(t) {
			const n = this.getAdapter("surveyById");
			return n == null ? void 0 : n.surveyById(t);
		}
		surveyIdBySlug(t) {
			const n = this.getAdapter("surveyIdBySlug");
			return n == null ? void 0 : n.surveyIdBySlug(t);
		}
		get apiHost() {
			var t;
			return (
				((t = this.config) == null ? void 0 : t.apiHost) ??
				"https://ingest.skyra.no"
			);
		}
		start(t = {}) {
			if (this.injectUsed)
				throw new Error(
					"skyra.start() and skyra.inject() cannot be used together",
				);
			if (this._adapter)
				return (
					console.error("skyra.start() was called multiple times"),
					this._adapter
				);
			const n = window.SKYRA_CONFIG || {},
				r = ai(n, t);
			this.normalizedConfig = r;
			const o = window.location.href;
			return (
				document.querySelector(r.selector) ||
					console.error(
						`[Skyra] Could not find DOM element with selector "${r.selector}"`,
					),
				(this._adapter = vc(
					{
						org: r.org,
						url: o,
						cookieStorage: this.cookieStorage,
						apiHost: this.apiHost,
						traits: r.traits,
						testMode: r.testMode,
						surveyOverrides: r.surveyOverrides,
						selector: r.selector,
						consent: r.consent,
					},
					li,
				)),
				this._adapter.on("*", (s) => {
					this.events.emit(s.type, s);
				}),
				this._adapter.start(),
				this._adapter
			);
		}
		stop() {
			this._adapter && (this._adapter.stop(), (this._adapter = void 0)),
				document.querySelectorAll("skyra-survey").forEach((n) => n.remove());
		}
		restart(t = {}) {
			return this.stop(), this.start(t);
		}
		reload() {
			const t = this.getAdapter("reload");
			t && t.send({ type: "reload", url: window.location.href });
		}
		setConsent(t) {
			const n = this.getAdapter("setConsent");
			n && n.send({ type: "setConsent", value: t });
		}
		getAdapter(t) {
			if (!this._adapter) {
				console.warn(
					`[Skyra] ${t}() called before skyra.start(). Controller not initialized.`,
				);
				return;
			}
			return this._adapter;
		}
		get controller() {
			return this._adapter ?? null;
		}
		get previewController() {
			return this.previewMachine ?? null;
		}
		preview({ slug: t, target: n }) {
			var o;
			console.log("preview", t, this._adapter, this.config);
			const r = bc(t);
			if (
				((this.normalizedConfig = ai(window.SKYRA_CONFIG || {}, { org: r })),
				this.previewMachine)
			)
				this.previewMachine.send({ type: "setOrg", org: r });
			else {
				const i = window.location.href;
				(this.previewMachine = At(Rw, {
					inspect: li,
					input: {
						url: i,
						org: r,
						apiHost: this.apiHost,
						cookieStorage: this.cookieStorage,
						previewTarget: n,
					},
				})),
					this.previewMachine.start();
			}
			(o = this.previewMachine) == null ||
				o.send({ type: "previewSurvey", slug: t, target: n });
		}
		inject({
			slug: t,
			traits: n,
			selector: r = "body",
			test: o,
			cookieConsent: i = !0,
		}) {
			if (
				(console.warn(
					"[Skyra] inject() is deprecated. Please use window.SKYRA_CONFIG for automatic initialization. See: https://docs.skyra.ai/migration/autostart",
				),
				o)
			) {
				console.error(
					"[Skyra] inject() does not support test mode. Use window.SKYRA_CONFIG with testMode instead.",
				);
				return;
			}
			if (this._adapter) {
				console.error(
					"skyra.start() and skyra.inject() cannot be used together",
				);
				return;
			}
			this.injectUsed = !0;
			const s = bc(t),
				a = window.location.href,
				c = window.SKYRA_CONFIG || {};
			this.normalizedConfig = ai(c, { org: s });
			const l = vc(
				{
					org: s,
					url: a,
					cookieStorage: this.cookieStorage,
					apiHost: this.apiHost,
					traits: n,
					testMode: !1,
					selector: r,
					consent: i,
				},
				li,
			);
			(this._adapter = l),
				l.start(),
				l.on("ready", () => {
					l.send({ type: "startSurvey", slug: t });
				});
		}
		redactPathname(t) {
			this.urlRedactions.push({ type: "Path", path: t });
		}
		redactSearchParam(t, n) {
			this.urlRedactions.push({ type: "SearchParam", param: t, options: n });
		}
		setExplicitLanguage(t, n) {
			this.explicitLanguages.set(t, n);
		}
		getExplicitLanguage(t) {
			return this.explicitLanguages.get(t);
		}
		getUrl() {
			return jw(window.location.href, this.urlRedactions);
		}
		debugInfo(t) {
			var s;
			const n = (t == null ? void 0 : t.format) ?? "console",
				r = t == null ? void 0 : t.survey,
				o = this.getAdapter("debugInfo");
			if (!o) return null;
			const i = o.getDebugInfo(this.cookieStorage, r);
			if (n === "json") return i;
			console.group("🔍 Skyra Debug Info"),
				console.group("⚙ Configuration"),
				console.table(i.config),
				console.groupEnd(),
				console.group("🏃 Runtime"),
				console.table(i.runtime),
				console.groupEnd(),
				console.group("📋 Survey Details");
			for (const a of i.details) {
				const c = a.eligible ? "✅" : "❌",
					d =
						(((s = a.issues) == null ? void 0 : s.length) ?? 0) > 0 ? "!" : "";
				(a.eligible ? console.group : console.groupCollapsed)(
					`${c} ${d} ${a.slug} (${a.renderType})`,
				);
				const p = {
					id: a.id,
					name: a.name,
					isLive: a.isLive,
					publishingState: a.publishingState,
					numCards: a.numCards,
					eligible: a.eligible,
					capturePercent: `${a.capturePercent}%`,
					priorityScore: a.priorityScore,
				};
				a.renderType === "Inline" && (p.domElement = a.domElement),
					console.table(p),
					a.state && console.log("State:", a.state),
					a.reasons &&
						(console.log("❌ Not eligible because:"),
						a.reasons.forEach((f) => console.log(`  • ${f}`))),
					a.issues &&
						(console.log("! Issues:"),
						a.issues.forEach((f) => console.log(`  • ${f}`))),
					console.groupEnd();
			}
			return console.groupEnd(), console.groupEnd(), i;
		}
		async fetchSurvey(t) {
			const r = await (await fetch(`${this.apiHost}/survey/${t}`)).json();
			return $r.parse(r.survey);
		}
		async unstable_sessionInit(t) {
			var f;
			const n = t.survey,
				[r, o] = n.split("/");
			if (!r || !o)
				throw new Error(
					'Invalid survey slug format. Expected "org/survey-name"',
				);
			const i = `skyra.${n.replace(/\//g, ".")}`,
				s = this.cookieStorage.getItem(i);
			if (s)
				try {
					const g = In.parse(JSON.parse(s));
					if (g.sessionId) {
						const y = await this.fetchSurvey(n);
						return { sessionId: g.sessionId, surveyId: y.id };
					}
				} catch {}
			const a = this.cookieStorage.getItem("skyra.state");
			let c;
			if (a)
				try {
					c = ht.parse(JSON.parse(a))._id || Me();
				} catch {
					c = Me();
				}
			else
				(c = Me()),
					this.cookieStorage.setItem("skyra.state", JSON.stringify({ _id: c }));
			const l = await this.fetchSurvey(n),
				d = Me();
			let u = "unknown";
			"connection" in navigator &&
				(u =
					(f = navigator == null ? void 0 : navigator.connection) == null
						? void 0
						: f.effectiveType),
				await Ht(
					{
						event: "SessionInit",
						survey: l.id,
						visitor: c,
						session: d,
						ua: navigator.userAgent,
						screenSize: [window.screen.width, window.screen.height],
						pixelRatio: window.devicePixelRatio,
						connection: u,
						languageCode: this.getLanguage(),
					},
					{ apiHost: this.apiHost },
				);
			const p = In.parse({
				sessionId: d,
				state: "Capture",
				lastSync: Date.now(),
			});
			return (
				this.cookieStorage.setItem(i, JSON.stringify(p)),
				{ sessionId: d, surveyId: l.id }
			);
		}
		async unstable_postCardValue(t) {
			const { survey: n, card: r, value: o, complete: i } = t,
				[s, a] = n.split("/");
			if (!s || !a)
				throw new Error(
					'Invalid survey slug format. Expected "org/survey-name"',
				);
			const c = `skyra.${n.replace(/\//g, ".")}`,
				l = this.cookieStorage.getItem(c);
			if (!l)
				throw new Error("No session found. Call unstable_sessionInit first.");
			let d;
			try {
				if (((d = In.parse(JSON.parse(l)).sessionId ?? ""), !d))
					throw new Error("Invalid session state");
			} catch {
				throw new Error(
					"Invalid session state. Call unstable_sessionInit first.",
				);
			}
			const u = this.cookieStorage.getItem("skyra.state");
			if (!u) throw new Error("No visitor ID found");
			const { _id: p } = ht.parse(JSON.parse(u)),
				f = await this.fetchSurvey(n),
				g = f.cards.find((v) => v.id === r);
			if (!g) throw new Error(`Card ${r} not found in survey ${n}`);
			const { type: y, order: b } = g;
			if (!y) throw new Error(`Card ${r} is missing type information`);
			try {
				const v = {
						event: "CardValue",
						survey: f.id,
						visitor: p,
						session: d,
						card: r,
						type: y,
						url: this.getUrl(),
						value: o,
						languageCode: this.getLanguage(),
						cardOrder: b,
					},
					_ = So.parse(v);
				await Ht(_, { apiHost: this.apiHost });
				const S = In.parse({
					sessionId: d,
					state: "Capture",
					lastSync: Date.now(),
				});
				this.cookieStorage.setItem(c, JSON.stringify(S)),
					i && this.cookieStorage.removeItem(c);
			} catch (v) {
				if (v instanceof xh) {
					const _ = v.issues.map((S) => S.message).join(", ");
					throw new Error(`Invalid card value: ${_}`);
				}
				throw v;
			}
		}
	}
	function wc(e, t, n, r) {
		if (!e) return;
		const o = new CustomEvent(t, { detail: n, bubbles: !0, composed: !0 });
		e.dispatchEvent(o), r == null || r(o);
	}
	function Fw(e, t, n, r) {
		return e.ready || e.terminal
			? !1
			: (wc(t, "skyra-ready", n, r), (e.ready = !0), !0);
	}
	function $n(e, t, n, r, o) {
		return e.ready || e.terminal ? !1 : (wc(t, n, r, o), (e.terminal = !0), !0);
	}
	function Zw(e, t, n) {
		if (!t)
			return {
				slug: e,
				code: "survey_not_found",
				message: `Inline survey "${e}" was not found.`,
			};
		if (t.renderType !== "Inline")
			return {
				slug: e,
				code: "not_inline",
				message: `Survey "${e}" is not configured as an inline survey.`,
			};
		if (!n)
			return {
				slug: e,
				code: "not_eligible",
				message: `Inline survey "${e}" is not eligible on this page.`,
			};
	}
	function Hw(e, t) {
		return t.code === "not_eligible"
			? {
					name: "skyra-unavailable",
					detail: { slug: e, code: "not_eligible", message: t.message },
				}
			: {
					name: "skyra-error",
					detail: { slug: e, code: t.code, message: t.message, cause: t.cause },
				};
	}
	function Uw(e) {
		return {
			slug: e,
			code: "controller_unavailable",
			message:
				"Skyra controller was not available before the inline survey timed out.",
		};
	}
	function Vw(e) {
		return {
			slug: e,
			code: "unsupported_controller_version",
			message: "Inline lifecycle events require the Skyra V2 controller.",
		};
	}
	function qt(e) {
		const t = e == null ? void 0 : e.getRootNode();
		return typeof ShadowRoot < "u" && t instanceof ShadowRoot ? t.host : null;
	}
	function Ae({
		card: e,
		children: t,
		chrome: n,
		showHeader: r = !0,
		inline: o = !1,
	}) {
		const i = ne(null),
			s = ne(null);
		return (
			te(() => {
				var u;
				(u = i.current) == null ||
					u.toggleAttribute(
						"has-language-picker",
						n.enabledLanguages.length > 1,
					);
				const a = s.current;
				if (!a) return;
				a.languages = n.enabledLanguages.map(({ code: p, name: f }) => ({
					code: p,
					name: f,
				}));
				const c = (p) => n.onLanguageChange(p.detail.language),
					l = () => n.onMinimize(),
					d = () => n.onClose();
				return (
					a.addEventListener("skyra-language-change", c),
					a.addEventListener("skyra-minimize", l),
					a.addEventListener("skyra-close", d),
					() => {
						a.removeEventListener("skyra-language-change", c),
							a.removeEventListener("skyra-minimize", l),
							a.removeEventListener("skyra-close", d);
					}
				);
			}, [n]),
			m("skyra-survey-card", {
				ref: i,
				mode: o ? "inline" : "popup",
				children: [
					m("skyra-survey-chrome", {
						ref: s,
						className: "chrome",
						slot: "chrome",
						value: n.currentLanguage,
						"language-label": n.languageLabel,
						"minimize-label": n.minimizeLabel,
						"close-label": n.closeLabel,
						"show-minimize": n.showMinimizeButton,
						"show-close": n.showCloseButton,
					}),
					r
						? m("skyra-survey-message-content", {
								heading: e.name,
								body: e.body ?? "",
								"body-html": e.bodyHtml ?? "",
							})
						: null,
					t,
				],
			})
		);
	}
	const _c = {
		en: { up: "Scroll up", down: "Scroll down" },
		no: { up: "Rull opp", down: "Rull ned" },
		sv: { up: "Rulla upp", down: "Rulla ned" },
		de: { up: "Nach oben scrollen", down: "Nach unten scrollen" },
		pt: { up: "Rolar para cima", down: "Rolar para baixo" },
	};
	function Ar(e) {
		return _c[e ?? "en"] ?? _c.en;
	}
	function Te(e, t, n) {
		te(() => {
			const r = e.current;
			if (!r) return;
			const o = (i) => n(i.detail);
			return r.addEventListener(t, o), () => r.removeEventListener(t, o);
		}, [n, t, e]);
	}
	function nt(e, t, n) {
		Kc(() => {
			const r = e.current;
			r && (r[t] = n);
		}, [t, e, n]);
	}
	function Ww({ card: e, chrome: t, next: n, survey: r, texts: o }) {
		const i = ne(null);
		return (
			Te(i, "skyra-completion-select", ({ value: s }) => n(s)),
			Te(i, "skyra-completion-reply-later", () => t.onMinimize()),
			m(Ae, {
				card: e,
				chrome: t,
				inline: r.renderType === "Inline",
				showHeader: !1,
				children: m("skyra-survey-completion-content", {
					ref: i,
					heading: e.name,
					body: e.body ?? "",
					"body-html": e.bodyHtml ?? "",
					"positive-label": e.positive,
					"negative-label": e.negative,
					"reply-later-label":
						r.renderType === "Inline" ? void 0 : o.replyLater,
					layout: e.optionsLayout === "vertical" ? "vertical" : "horizontal",
				}),
			})
		);
	}
	function qw({ card: e, chrome: t, next: n, survey: r }) {
		const o = ne(null);
		return (
			Te(o, "skyra-completion-select", ({ value: i }) => n(i)),
			m(Ae, {
				card: e,
				chrome: t,
				inline: r.renderType === "Inline",
				showHeader: !1,
				children: m("skyra-survey-completion-content", {
					ref: o,
					heading: e.name,
					body: e.body ?? "",
					"body-html": e.bodyHtml ?? "",
					"positive-label": e.positive,
					"negative-label": e.negative,
					layout: e.optionsLayout === "vertical" ? "vertical" : "horizontal",
				}),
			})
		);
	}
	function Jw({
		card: e,
		chrome: t,
		firstCard: n,
		next: r,
		prev: o,
		storedValue: i,
		survey: s,
		texts: a,
	}) {
		const [c, l] = se(typeof i == "string" ? i : ""),
			[d, u] = se(!1),
			p = We(),
			f = kt(),
			g = ne(null);
		Te(g, "skyra-input-change", ({ value: v }) => l(v));
		const y = Jl({
			content: c,
			card: {
				minLength: e.minLength ?? 0,
				maxLength: e.maxLength ?? void 0,
				validations: e.validations ?? [],
			},
			hasBeenTouched: d,
			language: f,
		});
		function b() {
			u(!0), (p.value = y.valid), y.valid && r(c);
		}
		return m(Ae, {
			card: e,
			chrome: t,
			inline: s.renderType === "Inline",
			showHeader: !1,
			children: [
				m("skyra-survey-input-content", {
					ref: g,
					heading: e.name,
					body: e.body ?? "",
					"body-html": e.bodyHtml ?? "",
					name: "value",
					placeholder: e.placeholder ?? "",
					value: c,
					multiline: !!e.multiline,
					invalid: d && !y.valid,
					error: d && !y.valid ? y.errorMessage : "",
				}),
				m("skyra-survey-actions", {
					children: [
						m("skyra-survey-button", {
							disabled: n,
							onClick: o,
							children: a.back,
						}),
						m("skyra-survey-button", {
							variant: "primary",
							onClick: b,
							children: a.next,
						}),
					],
				}),
			],
		});
	}
	function Kw({
		card: e,
		chrome: t,
		firstCard: n,
		prev: r,
		storedValue: o,
		survey: i,
		texts: s,
		next: a,
	}) {
		var f;
		const c = "likertItems" in e.likertScale ? e.likertScale.likertItems : [],
			l =
				typeof o == "string"
					? (f = c.find((g) => g.id === o || X(g.id) === o)) == null
						? void 0
						: f.id
					: void 0,
			[d, u] = se(l),
			p = ne(null);
		return (
			nt(
				p,
				"choices",
				c.map((g) => {
					var y;
					return {
						id: g.id,
						label: g.label,
						emoji: e.showEmoji
							? (((y = g.emoji) == null ? void 0 : y.native) ?? void 0)
							: void 0,
					};
				}),
			),
			Te(p, "skyra-likert-select", ({ value: g }) => {
				u(g), a(g, e.id);
			}),
			te(() => u(l), [l]),
			m(Ae, {
				card: e,
				chrome: t,
				inline: i.renderType === "Inline",
				showHeader: !1,
				children: [
					m("skyra-survey-likert-content", {
						ref: p,
						heading: e.name,
						body: e.body ?? "",
						"body-html": e.bodyHtml ?? "",
						"selected-value": d ?? "",
						layout:
							e.optionsLayout === "horizontal" ? "horizontal" : "vertical",
					}),
					m("skyra-survey-actions", {
						children: m("skyra-survey-button", {
							disabled: n,
							onClick: r,
							children: s.back,
						}),
					}),
				],
			})
		);
	}
	function Gw({
		card: e,
		chrome: t,
		finalCard: n,
		firstCard: r,
		next: o,
		prev: i,
		survey: s,
		texts: a,
	}) {
		const c = Ql(s, e, { firstCard: r, finalCard: n });
		return m(Ae, {
			card: e,
			chrome: t,
			inline: s.renderType === "Inline",
			children: m("skyra-survey-actions", {
				children: [
					c
						? m("skyra-survey-button", { onClick: t.onClose, children: c })
						: m("skyra-survey-button", {
								disabled: r,
								onClick: i,
								children: a.back,
							}),
					m("skyra-survey-button", {
						variant: "primary",
						onClick: () => o(),
						children: a.next,
					}),
				],
			}),
		});
	}
	const kc = "ABCDEFGHJKMNPQRSTVWXYZ".split(""),
		Sc = {
			en: { min: "Select at least", max: "max", maxOnly: "Max" },
			pt: { min: "Selecione pelo menos", max: "máx.", maxOnly: "Máx." },
			de: { min: "Wählen Sie mindestens", max: "max.", maxOnly: "Max." },
			no: { min: "Velg minst", max: "maks", maxOnly: "Maks" },
			sv: { min: "Välj minst", max: "max", maxOnly: "Max" },
		};
	function Yw({
		card: e,
		chrome: t,
		firstCard: n,
		next: r,
		prev: o,
		sessionId: i,
		storedValue: s,
		survey: a,
		texts: c,
	}) {
		const l = e.randomize ? zr(e.selectItems, i) : e.selectItems,
			[d, u] = se(
				Array.isArray(s)
					? s
							.filter((A) => typeof A == "string")
							.map((A) => {
								var U;
								return (U = l.find((me) => me.id === A || X(me.id) === A)) ==
									null
									? void 0
									: U.id;
							})
							.filter((A) => !!A)
					: [],
			),
			[p, f] = se(!1),
			[g, y] = se(!1),
			b = We(),
			v = kt(),
			_ = Sc[v ?? "en"] ?? Sc.en,
			S = Ar(v),
			x = ne(null);
		nt(
			x,
			"options",
			l.map((A, U) => ({ id: A.id, label: A.label, shortcut: kc[U] })),
		),
			nt(x, "selectedValues", d),
			Te(x, "skyra-multiselect-change", ({ values: A }) => {
				y(!1), u(A);
			}),
			Te(x, "skyra-multiselect-limit-reached", () => {
				y(!0);
			});
		const C = xr({
				selectedCount: d.length,
				card: { min: e.min ?? void 0, max: e.max ?? void 0 },
				hasBeenSubmitted: p,
				language: v,
			}),
			I = g || C.status === "over-max" || (p && !C.valid),
			P = ql({
				min: e.min ?? void 0,
				max: e.max ?? void 0,
				totalOptions: l.length,
				language: v,
			}),
			N =
				g && e.max
					? Wl({ max: e.max, language: v })
					: I
						? C.errorMessage
						: null,
			W = Di(
				(A) => {
					if (A.defaultPrevented || A.altKey || A.ctrlKey || A.metaKey) return;
					const U = A.target;
					if (
						U instanceof HTMLInputElement ||
						U instanceof HTMLTextAreaElement ||
						U instanceof HTMLSelectElement
					)
						return;
					const me = kc.indexOf(A.key.toUpperCase());
					if (me < 0 || me >= l.length) return;
					const rt = l[me].id,
						Jt = Kl({ selectedValues: d, value: rt, max: e.max ?? void 0 });
					if (Jt.limitReached) {
						y(!0);
						return;
					}
					y(!1), u(Jt.values);
				},
				[e.max, l, d],
			);
		te(() => {
			var U;
			const A = (U = x.current) == null ? void 0 : U.closest(".beta-wrapper");
			if (A)
				return (
					A.addEventListener("keyup", W),
					() => A.removeEventListener("keyup", W)
				);
		}, [W]);
		function O() {
			const A = xr({
				selectedCount: d.length,
				card: { min: e.min ?? void 0, max: e.max ?? void 0 },
				hasBeenSubmitted: !0,
				language: v,
			});
			f(!0), (b.value = A.valid), A.valid && r(d);
		}
		return m(Ae, {
			card: e,
			chrome: t,
			inline: a.renderType === "Inline",
			showHeader: !1,
			children: [
				m("skyra-survey-multiselect-content", {
					ref: x,
					heading: e.name,
					body: e.body ?? "",
					"body-html": e.bodyHtml ?? "",
					layout: e.optionsLayout === "horizontal" ? "horizontal" : "vertical",
					inline: a.renderType === "Inline",
					min: e.min ?? 0,
					max: e.max ?? 0,
					instruction: P ?? "",
					"minimum-label": _.min,
					"maximum-label": _.max,
					"maximum-only-label": _.maxOnly,
					"scroll-up-label": S.up,
					"scroll-down-label": S.down,
					invalid: I,
					error: N ?? "",
				}),
				m("skyra-survey-actions", {
					children: [
						m("skyra-survey-button", {
							disabled: n,
							onClick: o,
							children: c.back,
						}),
						m("skyra-survey-button", {
							variant: "primary",
							onClick: O,
							children: c.next,
						}),
					],
				}),
			],
		});
	}
	function Xw({
		card: e,
		chrome: t,
		firstCard: n,
		next: r,
		prev: o,
		storedValue: i,
		survey: s,
		texts: a,
	}) {
		const c = typeof i == "object" && i !== null ? i : void 0,
			[l, d] = se(c ?? {}),
			[u, p] = se(!1),
			f = We(),
			g = kt(),
			y = ne(null),
			b = l.email ?? "",
			v = b ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b) : !1,
			_ = !!(l.email || l.phone || l.name),
			S = Cr({
				email: { value: b, valid: v },
				name: { value: l.name ?? "" },
				phone: { value: l.phone ?? "" },
				consented: !!l.consented,
				consentEnable: !!e.consentEnable,
				isRequired: !!e.isRequired,
				hasBeenSubmitted: u,
				language: g,
			});
		nt(y, "fields", {
			name: !!e.nameEnable,
			nameLabel: e.nameLabel ?? "Name",
			namePlaceholder: e.namePlaceholder ?? "",
			email: !!e.email,
			emailLabel: e.email_label ?? "Email",
			emailPlaceholder: e.email_placeholder ?? "",
			phone: !!e.phone,
			phoneLabel: e.phone_label ?? "Phone",
			phonePlaceholder: e.phone_placeholder ?? "",
			consent: !!e.consentEnable,
			consentLabel: e.consentTermsLabel ?? "I agree to be contacted",
			consentTermsText: e.consentTermsText ?? "",
			consentTermsTitle: e.consentTermsTitle ?? "",
			consentTermsUrl: e.consentTermsUrl ?? "",
		}),
			nt(y, "value", l),
			Te(y, "skyra-recruitment-change", ({ value: C }) => d(C));
		function x() {
			const C = Cr({
				email: { value: b, valid: v },
				name: { value: l.name ?? "" },
				phone: { value: l.phone ?? "" },
				consented: !!l.consented,
				consentEnable: !!e.consentEnable,
				isRequired: !!e.isRequired,
				hasBeenSubmitted: !0,
				language: g,
			});
			p(!0), (f.value = C.valid), C.valid && r(_ ? l : void 0);
		}
		return m(Ae, {
			card: e,
			chrome: t,
			inline: s.renderType === "Inline",
			showHeader: !1,
			children: [
				m("skyra-survey-recruitment-content", {
					ref: y,
					heading: e.name,
					body: e.body ?? "",
					"body-html": e.bodyHtml ?? "",
					invalid: S.status === "email-invalid",
					error:
						S.status === "email-invalid" ||
						S.status === "consent-required" ||
						S.status === "email-required"
							? S.errorMessage
							: "",
				}),
				m("skyra-survey-actions", {
					children: [
						m("skyra-survey-button", {
							disabled: n,
							onClick: o,
							children: a.back,
						}),
						m("skyra-survey-button", {
							variant: "primary",
							onClick: x,
							children: a.next,
						}),
					],
				}),
			],
		});
	}
	function Qw({
		card: e,
		chrome: t,
		firstCard: n,
		prev: r,
		sessionId: o,
		storedValue: i,
		survey: s,
		texts: a,
		next: c,
	}) {
		var f, g;
		const l = ne(null),
			d = e.randomize ? zr(e.items, o) : e.items,
			u = Ar((f = s.language) == null ? void 0 : f.code),
			p =
				typeof i == "string"
					? (((g = d.find((y) => y.value.id === i || X(y.value.id) === i)) ==
						null
							? void 0
							: g.value.id) ?? "")
					: "";
		return (
			nt(
				l,
				"options",
				d.map((y) => ({ id: y.value.id, label: y.label })),
			),
			Te(l, "skyra-choice-select", ({ value: y }) => c(y, e.segment.id)),
			m(Ae, {
				card: e,
				chrome: t,
				inline: s.renderType === "Inline",
				showHeader: !1,
				children: [
					m("skyra-survey-choice-content", {
						ref: l,
						heading: e.name,
						body: e.body ?? "",
						"body-html": e.bodyHtml ?? "",
						layout:
							e.optionsLayout === "horizontal" ? "horizontal" : "vertical",
						inline: s.renderType === "Inline",
						"scroll-up-label": u.up,
						"scroll-down-label": u.down,
						"selected-value": p,
					}),
					m("skyra-survey-actions", {
						children: m("skyra-survey-button", {
							disabled: n,
							onClick: r,
							children: a.back,
						}),
					}),
				],
			})
		);
	}
	function e_({
		card: e,
		chrome: t,
		firstCard: n,
		prev: r,
		sessionId: o,
		storedValue: i,
		survey: s,
		texts: a,
		next: c,
	}) {
		var f, g;
		const l = ne(null),
			d = e.randomize ? zr(e.selectItems, o) : e.selectItems,
			u = Ar((f = s.language) == null ? void 0 : f.code),
			p =
				typeof i == "string"
					? (((g = d.find((y) => y.id === i || X(y.id) === i)) == null
							? void 0
							: g.id) ?? "")
					: "";
		return (
			nt(
				l,
				"options",
				d.map((y) => ({ id: y.id, label: y.label })),
			),
			Te(l, "skyra-choice-select", ({ value: y }) => c(y)),
			m(Ae, {
				card: e,
				chrome: t,
				inline: s.renderType === "Inline",
				showHeader: !1,
				children: [
					m("skyra-survey-choice-content", {
						ref: l,
						heading: e.name,
						body: e.body ?? "",
						"body-html": e.bodyHtml ?? "",
						layout:
							e.optionsLayout === "horizontal" ? "horizontal" : "vertical",
						"selected-value": p,
						inline: s.renderType === "Inline",
						"scroll-up-label": u.up,
						"scroll-down-label": u.down,
					}),
					m("skyra-survey-actions", {
						children: m("skyra-survey-button", {
							disabled: n,
							onClick: r,
							children: a.back,
						}),
					}),
				],
			})
		);
	}
	function t_({
		card: e,
		chrome: t,
		firstCard: n,
		prev: r,
		sessionId: o,
		storedValue: i,
		survey: s,
		texts: a,
		next: c,
	}) {
		var f, g;
		const l = ne(null),
			d = e.randomize ? zr(e.taskItems ?? [], o) : (e.taskItems ?? []),
			u = Ar((f = s.language) == null ? void 0 : f.code),
			p =
				typeof i == "string"
					? (((g = d.find((y) => y.task.id === i || X(y.task.id) === i)) == null
							? void 0
							: g.task.id) ?? "")
					: "";
		return (
			nt(
				l,
				"options",
				d.map((y) => ({ id: y.task.id, label: y.label })),
			),
			Te(l, "skyra-choice-select", ({ value: y }) => c(y)),
			m(Ae, {
				card: e,
				chrome: t,
				inline: s.renderType === "Inline",
				showHeader: !1,
				children: [
					m("skyra-survey-choice-content", {
						ref: l,
						heading: e.name,
						body: e.body ?? "",
						"body-html": e.bodyHtml ?? "",
						layout:
							e.optionsLayout === "horizontal" ? "horizontal" : "vertical",
						inline: s.renderType === "Inline",
						"selected-value": p,
						"scroll-up-label": u.up,
						"scroll-down-label": u.down,
					}),
					m("skyra-survey-actions", {
						children: m("skyra-survey-button", {
							disabled: n,
							onClick: r,
							children: a.back,
						}),
					}),
				],
			})
		);
	}
	const xc = {
		en: "Language",
		no: "Språk",
		sv: "Språk",
		de: "Sprache",
		pt: "Idioma",
	};
	function n_({
		card: e,
		currentLanguage: t,
		enabledLanguages: n,
		finalCard: r,
		firstCard: o,
		minimized: i,
		next: s,
		onClose: a,
		onLanguageChange: c,
		onMaximize: l,
		onMinimize: d,
		prev: u,
		showCloseButton: p,
		showMinimizeButton: f,
		sessionId: g,
		storedValue: y,
		survey: b,
	}) {
		const v = ze(b, e, { finalCard: r }),
			S = {
				chrome: {
					closeLabel: v.close,
					currentLanguage: t,
					enabledLanguages: n,
					languageLabel: xc[t] ?? xc.en,
					minimizeLabel: v.hide,
					onClose: a,
					onLanguageChange: c,
					onMinimize: d,
					showCloseButton: p,
					showMinimizeButton: f,
				},
				finalCard: r,
				firstCard: o,
				next: s,
				prev: u,
				storedValue: y,
				survey: b,
				sessionId: g,
				texts: v,
			};
		let x;
		switch (e.type) {
			case "CompletionCard":
				x = m(Ww, { card: e, ...S });
				break;
			case "FindabilityCard":
				x = m(qw, { card: e, ...S });
				break;
			case "InputCard":
				x = m(Jw, { card: e, ...S });
				break;
			case "LikertCard":
				x = m(Kw, { card: e, ...S });
				break;
			case "MessageCard":
				x = m(Gw, { card: e, ...S });
				break;
			case "MultiSelectCard":
				x = m(Yw, { card: e, ...S });
				break;
			case "RecruitmentCard":
				x = m(Xw, { card: e, ...S });
				break;
			case "SegmentCard":
				x = m(Qw, { card: e, ...S });
				break;
			case "SingleSelectCard":
				x = m(e_, { card: e, ...S });
				break;
			case "TopTaskCard":
				x = m(t_, { card: e, ...S });
				break;
			default:
				return null;
		}
		return b.renderType === "Inline"
			? x
			: m("div", {
					className: "beta-transition-container",
					"data-minimized": i ? "true" : "false",
					children: [
						m("div", { className: "beta-transition-content", children: x }),
						m("skyra-survey-pill", {
							className: "beta-transition-pill",
							onClick: l,
							children: v.minimized,
						}),
					],
				});
	}
	const r_ =
		':host{color-scheme:light dark}.beta-wrapper{box-sizing:border-box;color:var(--skyra-text-color, #151515);font-family:var(--skyra-font-body, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);font-size:var(--skyra-font-size, 16px);outline:none}.beta-wrapper[data-inline=false]{position:fixed;right:0;bottom:0;left:0;display:flex;align-items:flex-end;justify-content:flex-end;margin:8px;z-index:2147483647}.beta-wrapper[data-inline=false][data-position=BottomLeft]{justify-content:flex-start}.beta-wrapper[data-inline=false][data-position=TopLeft]{top:0;bottom:auto;align-items:flex-start;justify-content:flex-start}.beta-wrapper[data-inline=false][data-position=TopRight]{top:0;bottom:auto;align-items:flex-start}@media(min-width:768px){.beta-wrapper[data-inline=false]{margin:16px}}.beta-wrapper[data-inline=true]{width:100%}@keyframes beta-enter-up{0%{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes beta-enter-down{0%{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}.beta-wrapper.beta-enter-up{animation:beta-enter-up var(--duration, .3s) ease-out both}.beta-wrapper.beta-enter-down{animation:beta-enter-down var(--duration, .3s) ease-out both}@keyframes beta-content-enter{0%{opacity:0}to{opacity:1}}.beta-transition-content{animation:beta-content-enter var(--duration, .3s) ease-out both}.beta-transition-container{width:min(420px,100%)}.beta-transition-pill{display:none;flex:0 1 auto;inline-size:-moz-fit-content;inline-size:fit-content;max-inline-size:100%;min-inline-size:0}.beta-transition-container[data-minimized=true]{display:flex;justify-content:flex-end}.beta-transition-container[data-minimized=true] .beta-transition-content{display:none}.beta-transition-container[data-minimized=true] .beta-transition-pill{display:block;animation:beta-content-enter var(--duration, .3s) ease-out both}.beta-transition-pill::part(label){min-inline-size:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@keyframes beta-shake{0%{transform:translate(0)}25%{transform:translate(-6px)}50%{transform:translate(6px)}75%{transform:translate(-6px)}to{transform:translate(0)}}.beta-wrapper.survey-shake{animation:beta-shake var(--duration, .3s) ease-in-out}@media(prefers-reduced-motion:reduce){.beta-wrapper.survey-shake,.beta-wrapper.beta-enter-up,.beta-wrapper.beta-enter-down,.beta-wrapper[data-inline=false],.beta-transition-content,.beta-transition-pill{animation:none}}';
	function o_({
		children: e,
		label: t,
		inline: n = !1,
		position: r,
		customCss: o,
		theme: i,
		themeMode: s,
		minimized: a = !1,
	}) {
		const c = We(),
			l = ne(null),
			[d, u] = se(!0),
			p = (s ?? "Auto").toLowerCase(),
			f = Ha(i ?? Bm[0], { themeMode: s ?? "Auto", selector: ":host" }),
			g =
				r === "TopLeft" || r === "TopRight"
					? " beta-enter-down"
					: " beta-enter-up";
		return (
			te(() => {
				u(!1);
			}, []),
			te(() => {
				if (n) return;
				const y = requestAnimationFrame(() => {
					var b, v, _;
					a
						? (v =
								(b = l.current) == null
									? void 0
									: b.querySelector("skyra-survey-pill")) == null ||
							v.focus({ preventScroll: !0 })
						: (_ = l.current) == null || _.focus({ preventScroll: !0 });
				});
				return () => cancelAnimationFrame(y);
			}, [n, a]),
			m(Ee, {
				children: [
					m("style", { "data-beta-styles": !0, children: r_ }),
					f && m("style", { children: f }),
					o && m("style", { children: o }),
					m("aside", {
						ref: l,
						className: `beta-wrapper${c.value ? "" : " survey-shake"}${d && !n ? g : ""}`,
						"data-inline": n ? "true" : "false",
						"data-minimized": a ? "true" : "false",
						"data-position": r,
						"data-theme-mode": p,
						role: n ? void 0 : "dialog",
						"aria-label": n ? void 0 : t,
						tabIndex: n ? void 0 : -1,
						children: e,
					}),
				],
			})
		);
	}
	function i_({
		card: e,
		capture: t,
		finalCard: n,
		firstCard: r,
		sessionId: o,
		storedValue: i,
		survey: s,
	}) {
		const a = ye(t, (f) => f.context.language),
			c = ye(t, (f) => f.matches({ Running: "Minimized" })),
			l = Yl(s),
			d = s.renderType === "Inline" || s.surveyType === "Findability",
			u = (n && e.type === "MessageCard") || d,
			p = s.showCloseButton !== !1 && !d;
		return m(o_, {
			label: e.name,
			inline: s.renderType === "Inline",
			position: s.surveyPosition,
			customCss: s.customCss,
			theme: s.theme,
			themeMode: s.themeMode,
			minimized: c,
			children: m(
				n_,
				{
					card: e,
					currentLanguage: a,
					enabledLanguages: l,
					finalCard: n,
					firstCard: r,
					onClose: () => t.send({ type: "reject" }),
					onLanguageChange: (f) => t.send({ type: "setLanguage", language: f }),
					onMaximize: () => t.send({ type: "maximize" }),
					onMinimize: () => t.send({ type: "minimize" }),
					next: (f, g) => {
						t.send({ type: "submit", cardId: e.id, key: g, value: f });
					},
					prev: () => t.send({ type: "goBack" }),
					minimized: c,
					showCloseButton: p,
					showMinimizeButton: !u,
					sessionId: o,
					storedValue: i,
					survey: s,
				},
				e.id,
			),
		});
	}
	function Cc(e) {
		var t,
			n,
			r = "";
		if (typeof e == "string" || typeof e == "number") r += e;
		else if (typeof e == "object")
			if (Array.isArray(e)) {
				var o = e.length;
				for (t = 0; t < o; t++)
					e[t] && (n = Cc(e[t])) && (r && (r += " "), (r += n));
			} else for (n in e) e[n] && (r && (r += " "), (r += n));
		return r;
	}
	function s_() {
		for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
			(e = arguments[n]) && (t = Cc(e)) && (r && (r += " "), (r += t));
		return r;
	}
	const zc = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
		Tc = s_,
		Lr = (e, t) => (n) => {
			var r;
			if ((t == null ? void 0 : t.variants) == null)
				return Tc(
					e,
					n == null ? void 0 : n.class,
					n == null ? void 0 : n.className,
				);
			const { variants: o, defaultVariants: i } = t,
				s = Object.keys(o).map((l) => {
					const d = n == null ? void 0 : n[l],
						u = i == null ? void 0 : i[l];
					if (d === null) return null;
					const p = zc(d) || zc(u);
					return o[l][p];
				}),
				a =
					n &&
					Object.entries(n).reduce((l, d) => {
						let [u, p] = d;
						return p === void 0 || (l[u] = p), l;
					}, {}),
				c =
					t == null || (r = t.compoundVariants) === null || r === void 0
						? void 0
						: r.reduce((l, d) => {
								let { class: u, className: p, ...f } = d;
								return Object.entries(f).every((g) => {
									let [y, b] = g;
									return Array.isArray(b)
										? b.includes({ ...i, ...a }[y])
										: { ...i, ...a }[y] === b;
								})
									? [...l, u, p]
									: l;
							}, []);
			return Tc(
				e,
				s,
				c,
				n == null ? void 0 : n.class,
				n == null ? void 0 : n.className,
			);
		},
		Ic = Lr(
			`cursor-pointer
        focus-visible:outline-action
        focus-visible:outline-2
        focus-visible:outline-offset-2
  px-2 py-1
  `,
			{
				variants: {
					variant: {
						primary: `
          bg-action text-action-text
          hover:bg-action/80
        `,
						secondary: `
          bg-transparent text-text
          border border-current
          hover:bg-action/10
        `,
						link: `
          bg-transparent
          underline underline-offset-4

          px-0 md:px-0
          text-link hover:text-link/80
              focus-visible:outline-current
              focus-visible:no-underline

          border border-transparent
        `,
						chip: `
          bg-bg
          text-text
          border border-current
          text-left

          hover:bg-action
          hover:text-action-text
          
          data-[selected=true]:bg-action
          data-[selected=true]:text-action-text
          data-[selected=true]:border-action
          data-[selected=true]:font-semibold
        `,
					},
					size: { small: "text-sm", default: "text", large: "text-md" },
					rounded: { none: "", small: "rounded-sm", full: "rounded-full" },
					disabled: { true: "opacity-50 cursor-not-allowed", false: "" },
				},
				defaultVariants: {
					size: "small",
					variant: "primary",
					rounded: "small",
				},
			},
		);
	function gt({
		className: e,
		variant: t,
		size: n,
		rounded: r,
		disabled: o,
		style: i,
		...s
	}) {
		let a = "var(--skyra-radius-md, var(--skyra-radius-lg, 4px))";
		return (
			r === "none"
				? (a = "0")
				: r === "full" && (a = "var(--skyra-radius-pill, 999px)"),
			m("button", {
				part: `button-${t}`,
				className: Ic({
					variant: t,
					size: n,
					rounded: r,
					disabled: o,
					className: e,
				}),
				style: {
					minWidth: "36px",
					borderRadius: a,
					...(typeof i == "object" ? i : {}),
				},
				disabled: o,
				...s,
			})
		);
	}
	function $c(e) {
		const t = e.querySelector("div > *:first-child");
		if (t) {
			const n = window.getComputedStyle(t),
				r = t.offsetHeight,
				o = Number.parseInt(n.marginTop) || 0,
				i = Number.parseInt(n.marginBottom) || 0;
			return r + o + i;
		}
		return 48;
	}
	function Or({ className: e, children: t, scrollAmount: n = 2.5 }) {
		const o = Fn().renderType === "Inline",
			i = ne(null),
			[s, a] = se(null);
		te(() => {
			if (o) return;
			const d = i.current;
			if (!d) return;
			const u = () => {
				const f = d.scrollHeight > d.clientHeight;
				a(f);
			};
			u();
			const p = new ResizeObserver(u);
			return p.observe(d), () => p.disconnect();
		}, [o]),
			te(() => {
				if (o) return;
				const d = i.current;
				if (!(d && s)) return;
				if (!CSS.supports("animation-timeline: scroll()")) {
					const p = () => {
						const { scrollTop: f, scrollHeight: g, clientHeight: y } = d,
							b = f <= 5,
							v = f + y >= g - 5;
						d.setAttribute("data-at-top", b.toString()),
							d.setAttribute("data-at-bottom", v.toString());
					};
					return (
						p(),
						d.addEventListener("scroll", p, { passive: !0 }),
						() => d.removeEventListener("scroll", p)
					);
				}
			}, [o, s]);
		const c = () => {
				if (i.current) {
					const u = $c(i.current) * n;
					i.current.scrollBy({ top: -u, behavior: "smooth" });
				}
			},
			l = () => {
				if (i.current) {
					const u = $c(i.current) * n;
					i.current.scrollBy({ top: u, behavior: "smooth" });
				}
			};
		return o
			? m("div", { className: e, children: t })
			: m("div", {
					ref: i,
					className: `scroll-area ${e || ""}`,
					"data-scrollable": s === null ? "unknown" : s.toString(),
					children: [
						m("button", {
							className: "scroll-area-up",
							onClick: c,
							"aria-label": "Scroll up",
							type: "button",
							children: m("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								fill: "none",
								viewBox: "0 0 24 24",
								"stroke-width": "1.5",
								stroke: "currentColor",
								width: "20",
								role: "img",
								"aria-hidden": "true",
								children: m("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									d: "M4.5 15.75l7.5-7.5 7.5 7.5",
								}),
							}),
						}),
						t,
						m("button", {
							className: "scroll-area-down",
							onClick: l,
							"aria-label": "Scroll down",
							type: "button",
							children: m("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								fill: "none",
								viewBox: "0 0 24 24",
								"stroke-width": "1.5",
								stroke: "currentColor",
								width: "20",
								role: "img",
								"aria-hidden": "true",
								children: m("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
								}),
							}),
						}),
					],
				});
	}
	const a_ = ({ className: e, ...t }) =>
			m("svg", {
				width: "18",
				height: "18",
				viewBox: "0 0 25 25",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				role: "img",
				...t,
				children: [
					m("title", { children: "Maximize" }),
					m("path", { d: "M15.084 3.5H21.084V9.5", className: e }),
					m("path", { d: "M9.08398 21.5H3.08398V15.5", className: e }),
					m("path", { d: "M21.084 3.5L14.084 10.5", className: e }),
					m("path", { d: "M3.08398 21.5L10.084 14.5", className: e }),
				],
			}),
		l_ = ({ className: e, title: t }) =>
			m("svg", {
				width: "18",
				height: "18",
				viewBox: "0 0 16 17",
				xmlns: "http://www.w3.org/2000/svg",
				role: "img",
				className: e,
				children: [
					m("title", { children: t ?? "Minimize" }),
					m("path", {
						d: "M4 6.5L8 10.5L12 6.5",
						"stroke-width": "2",
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
					}),
				],
			}),
		ci = ({ className: e, ...t }) =>
			m("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				fill: "currentColor",
				className: `size-4 inline-block ${e ?? ""}`,
				"aria-hidden": "true",
				...t,
				children: m("path", {
					fillRule: "evenodd",
					d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
					clipRule: "evenodd",
				}),
			});
	function c_({ onClose: e, visible: t }) {
		return t
			? m("button", {
					type: "button",
					className:
						" p-2 h-10 w-10 flex items-center justify-center text-text text-lg hover:bg-action/10 focus-visible:outline-action focus-visible:outline-2 focus-visible:outline-offset-2 ",
					onClick: e,
					children: "×",
				})
			: null;
	}
	function u_({ languages: e, currentLanguage: t, onChange: n }) {
		const [r, o] = se(!1),
			i = ne(null);
		if (
			(te(() => {
				if (!r) return;
				const g = (y) => {
					i.current && !i.current.contains(y.target) && o(!1);
				};
				return (
					document.addEventListener("click", g),
					() => document.removeEventListener("click", g)
				);
			}, [r]),
			te(() => {
				if (!r) return;
				const g = (y) => {
					y.key === "Escape" && o(!1);
				};
				return (
					document.addEventListener("keydown", g),
					() => document.removeEventListener("keydown", g)
				);
			}, [r]),
			e.length <= 1)
		)
			return null;
		const s = e.find((g) => g.code === t),
			a = e.filter((g) => g.code !== t),
			c = "calc(var(--spacing) * 8)",
			l = `calc(var(--spacing) * 8 * ${e.length})`,
			[d, u] = se(!1);
		return m("div", {
			className: "relative",
			children: m("div", {
				ref: i,
				"data-open": r,
				onTransitionEnd: () => {
					r || u(!1);
				},
				style: {
					height: r ? l : c,
					transitionProperty: "height, box-shadow",
					transitionDuration: "150ms",
					transitionTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)",
				},
				className: `
          text-sm text-text
          bg-bg rounded-br-md
          border-b border-r
          overflow-hidden
          motion-reduce:transition-none
          ${r || d ? "absolute top-0 left-0 z-50" : ""}
          ${r ? "shadow" : ""}
        `,
				children: [
					m("button", {
						type: "button",
						onClick: () => {
							r || u(!0), o(!r);
						},
						className:
							" h-8 pl-4 pr-5 w-full flex items-center gap-2 hover:bg-action/10 focus-visible:outline-action focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer ",
						"aria-label": "Select language",
						"aria-expanded": r,
						children: [
							m("span", { children: "🌐" }),
							m("span", {
								className: "font-medium",
								children: (s == null ? void 0 : s.name) || t,
							}),
						],
					}),
					a.map((g) =>
						m(
							"button",
							{
								type: "button",
								onClick: () => {
									n(g.code), o(!1);
								},
								className:
									" h-8 pl-4 pr-5 w-full flex items-center gap-2 hover:bg-action/10 cursor-pointer ",
								tabIndex: r ? 0 : -1,
								children: [
									m("span", { children: "🌐" }),
									m("span", { children: g.name }),
								],
							},
							g.code,
						),
					),
				],
			}),
		});
	}
	const d_ = Lr("", {
		variants: {
			type: {
				heading: "text-md md:text-lg font-bold font-heading",
				body: "text-sm",
				small: "text-xs",
			},
			color: { error: "text-error", warning: "text-warning" },
			size: { sm: "text-xs md:text-sm", default: "" },
		},
		defaultVariants: { type: "body", size: "default" },
	});
	function Ze({ className: e, type: t, color: n, size: r, as: o = "p", ...i }) {
		return m(o, {
			className: d_({ type: t, color: n, size: r, className: e }),
			...i,
		});
	}
	const Ec = Lr(
		`
  rounded-sm
  border-2 border-interface
  p-2
  bg-bg
  text-base md:text-sm

  transition-colors

  placeholder:text-text/60

  focus-visible:outline-action
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus:ring-none

  hover:border-action/80
  focus-visible:bg-action/10

  aria-[invalid=true]:border-error
  aria-[invalid=true]:hover:border-error/50
  aria-[invalid=true]:focus-visible:ring-error/20
  `,
		{ variants: {} },
	);
	function Rc(e) {
		return e
			? {
					onKeyDown: (t) => {
						t.key === "Enter" && t.metaKey && e && e();
					},
				}
			: {};
	}
	function Nr({ label: e, className: t, metaEnter: n, style: r, ...o }) {
		return m("label", {
			class: "flex flex-col gap-1",
			children: [
				m("span", { className: "font-bold text-xs", children: e }),
				m("input", {
					className: Ec({ className: t }),
					style: {
						borderRadius: "var(--skyra-radius-md, var(--skyra-radius-lg, 4px))",
						...(typeof r == "object" ? r : {}),
					},
					...Rc(n),
					...o,
				}),
			],
		});
	}
	const p_ = ({ label: e, className: t, metaEnter: n, style: r, ...o }) =>
			m("label", {
				class: "flex flex-col gap-1",
				children: [
					m("span", { className: "font-bold text-xs", children: e }),
					m("textarea", {
						className: Ec({ className: t }),
						style: {
							borderRadius:
								"var(--skyra-radius-md, var(--skyra-radius-lg, 4px))",
							...(typeof r == "object" ? r : {}),
						},
						...Rc(n),
						...o,
					}),
				],
			}),
		Ie = ({
			heading: e,
			isForm: t = !0,
			body: n,
			bodyHtml: r,
			children: o,
			texts: i,
			actionsSpacing: s,
			actionsLayout: a,
			actions: c = [],
			closeable: l,
			onKeyUp: d,
			skipWrapperLabeling: u = !1,
			cardId: p,
		}) => {
			var Zc;
			const f = Xr(),
				{ currentCard: g } = Eu(),
				y = ye(f, (He) => He.context.language),
				b = Fn(),
				v = Yl(b),
				_ = b.renderType === "Inline",
				S = t ? "form" : "div",
				x = ne(null);
			te(() => {
				x.current && x.current.focus();
			}, [g]);
			const C = ye(f, (He) => He.matches({ Running: "Minimized" })),
				I = b.cards.find(({ order: He }) => He === g);
			if (!I) return null;
			const P = ((Zc = b.cards.at(-1)) == null ? void 0 : Zc.id) === I.id,
				N = b.renderType === "Inline",
				W = b.renderType === "Inline" || b.surveyType === "Findability",
				O = (P && I.type === "MessageCard") || W,
				A = b.showCloseButton !== !1 && (l ?? !0) && !C && !W,
				U = p || `skyra-card-${b.slug}`,
				rt = {
					onKeyUp: d,
					tabIndex: -1,
					...(!u && { "aria-labelledby": U }),
					...(t && { onSubmit: (He) => He.preventDefault(), name: b.name }),
				},
				Jt = () => {
					f.send({ type: "minimize" });
				},
				D_ = () => {
					f.send({ type: "maximize" });
				},
				Fc = !(_ || O),
				F_ =
					I.type === "LikertCard" && I.likertScale.likertItems.length >= 5
						? "Large"
						: "Regular",
				Z_ = { Minimal: 300, Large: 500, Regular: 400 };
			return N
				? m("div", {
						ref: x,
						className: "flex flex-col",
						children: m(S, {
							...rt,
							className: "flex flex-col gap-2 md:gap-4 w-full text-text",
							children: [
								m(Ze, {
									part: "heading",
									as: "h2",
									type: "heading",
									id: U,
									children: e,
								}),
								Pc(r, n),
								o && m("div", { children: o }),
								c.length > 0 && m(Mc, { spacing: s, layout: a, actions: c }),
							],
						}),
					})
				: m("div", {
						ref: x,
						"data-minimized": C,
						className: "survey-container",
						style: { "--card-max-width": `${Z_[F_]}px` },
						children: [
							m("div", {
								className: "survey-content relative",
								children: [
									Fc &&
										m("header", {
											className:
												"absolute top-0 right-0 left-0 flex justify-between items-start z-10",
											children: [
												v.length > 1 &&
													m(u_, {
														languages: v,
														currentLanguage: y,
														onChange: (He) => {
															f.send({ type: "setLanguage", language: He });
														},
													}),
												m("div", {
													className: "flex ml-auto",
													children: [
														m(f_, { onMinimize: Jt, texts: i }),
														m(c_, {
															onClose: () => f.send({ type: "reject" }),
															visible: A,
														}),
													],
												}),
											],
										}),
									m(S, {
										...rt,
										className: `flex flex-col gap-2 md:gap-4 w-full text-text px-4 md:px-6 pb-4 md:pb-6 ${Fc ? "pt-10" : "pt-4 md:pt-6"}`,
										children: [
											m(Ze, {
												part: "heading",
												as: "h2",
												type: "heading",
												id: U,
												children: e,
											}),
											Pc(r, n),
											o && m("div", { children: o }),
											c.length > 0 &&
												m(Mc, { spacing: s, layout: a, actions: c }),
										],
									}),
								],
							}),
							m("button", {
								type: "button",
								className: "survey-pill",
								onClick: D_,
								children: [
									m("span", {
										className: "flex-1 text-left whitespace-nowrap",
										children: (i == null ? void 0 : i.minimized) ?? e,
									}),
									m(a_, { className: "stroke-current fill-transparent" }),
								],
							}),
						],
					});
		};
	function f_({ onMinimize: e, texts: t }) {
		return m("button", {
			type: "button",
			className:
				" p-2 h-10 w-10 flex items-center justify-center text-text text-lg hover:bg-action/10 focus-visible:outline-action focus-visible:outline-2 focus-visible:outline-offset-2 ",
			onClick: e,
			children: m(l_, {
				title: (t == null ? void 0 : t.hide) ?? "Minimize",
				className: "stroke-current fill-transparent",
			}),
		});
	}
	function Mc({
		spacing: e = "between",
		layout: t = "horizontal",
		actions: n = [],
	}) {
		return m("div", {
			className: `
        flex w-full
        ${t === "vertical" ? "flex-col gap-2 items-start" : "flex-row"}
        ${e === "between" ? "justify-between" : "gap-4"}
      `,
			children: n
				.filter(
					(r) => r === "placeholder" || (r == null ? void 0 : r.if) !== !1,
				)
				.map((r) =>
					r === "placeholder"
						? m("div", {}, "placeholder")
						: m(
								gt,
								{
									type: "button",
									variant: r.type ?? "primary",
									disabled: r.disabled,
									onClick: r.action,
									className: r.className,
									children: r.label,
								},
								r.key,
							),
				),
		});
	}
	function Pc(e, t) {
		return e
			? m("div", {
					part: "bodyHtml",
					className: "body-content",
					dangerouslySetInnerHTML: { __html: e },
				})
			: t
				? m(Ze, { part: "description", className: "body-content", children: t })
				: null;
	}
	function h_({
		card: e,
		next: t,
		prev: n,
		sessionId: r,
		survey: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		Fe("top task card", e);
		const c = e.randomize ? Er(e.taskItems ?? [], r) : (e.taskItems ?? []),
			l = ze(o, e, { finalCard: a }),
			d = `skyra-card-${e.id}`,
			u = typeof i == "string" ? i : void 0,
			p = (f) => {
				const g = f && f.trim() !== "" ? f : "";
				t == null || t(g);
			};
		return m(
			Ie,
			{
				isForm: !1,
				heading: e.name,
				cardId: d,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: l,
				skipWrapperLabeling: !0,
				actions: [
					{
						key: "prev",
						action: n,
						label: l.back,
						type: "link",
						className: "mr-auto",
						if: !s,
					},
				],
				children: m("fieldset", {
					className: "m-0 border-0 p-0 min-w-0",
					"aria-labelledby": d,
					children: m(Or, {
						children: m("div", {
							part: "options",
							className: `flex ${e.optionsLayout === "horizontal" ? "flex-row flex-wrap gap-2 p-1" : "flex-col items-start gap-1 md:gap-2"}`,
							children: c.map((f) => {
								const y = X(f.task.id) === u;
								return m(
									gt,
									{
										type: "button",
										variant: "chip",
										"data-selected": y,
										"aria-pressed": y ? "true" : "false",
										onClick: () => {
											p(f.task.id);
										},
										children: [y && m(ci, { className: "mr-1.5" }), f.label],
									},
									f.task.id,
								);
							}),
						}),
					}),
				}),
			},
			e.id,
		);
	}
	function g_({
		card: e,
		next: t,
		prev: n,
		survey: r,
		finalCard: o,
		firstCard: i,
		close: s,
	}) {
		const a = ze(r, e, { finalCard: o }),
			c = Ql(r, e, { firstCard: i, finalCard: o }),
			l = r.surveyType === "Findability",
			u = [
				c
					? { key: "decline", type: "secondary", label: c, action: s }
					: i
						? "placeholder"
						: {
								key: "prev",
								type: "link",
								label: a.back,
								if: !l,
								className: "mr-auto",
								action: n,
							},
				{
					key: "next",
					type: "primary",
					label: a.next,
					action: () => t(),
					if: !l,
				},
			],
			p = `skyra-card-${e.id}`;
		return m(
			Ie,
			{
				isForm: !1,
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: a,
				actions: u,
				cardId: p,
			},
			e.id,
		);
	}
	function m_({
		card: e,
		next: t,
		minimize: n,
		survey: r,
		finalCard: o,
		isInline: i,
	}) {
		const s = ze(r, e, { finalCard: o }),
			a = `skyra-card-${e.id}`,
			c = e.optionsLayout === "horizontal";
		return c
			? m(
					Ie,
					{
						isForm: !1,
						heading: e.name,
						cardId: a,
						body: e.body,
						bodyHtml: e.bodyHtml,
						texts: s,
						actionsSpacing: "tight",
						actionsLayout: c ? "horizontal" : "vertical",
						actions: [
							{ key: "accept", action: () => t(!0), label: e.positive },
							{ key: "decline", action: () => t(!1), label: e.negative },
							{
								key: "wait",
								action: n,
								if: !i,
								label: s.replyLater,
								type: "link",
								className: "ml-auto",
							},
						],
					},
					e.id,
				)
			: m(
					Ie,
					{
						isForm: !1,
						heading: e.name,
						cardId: a,
						body: e.body,
						bodyHtml: e.bodyHtml,
						texts: s,
						children: m("div", {
							className: "flex w-full flex-col gap-2",
							children: [
								m(gt, {
									type: "button",
									className: "self-start",
									onClick: () => t(!0),
									children: e.positive,
								}),
								m("div", {
									className: "flex w-full items-center gap-4",
									children: [
										m(gt, {
											type: "button",
											onClick: () => t(!1),
											children: e.negative,
										}),
										!i &&
											m(gt, {
												type: "button",
												variant: "link",
												onClick: n,
												className: "ml-auto",
												children: s.replyLater,
											}),
									],
								}),
							],
						}),
					},
					e.id,
				);
	}
	function ui({
		id: e,
		message: t,
		type: n = "validation",
		color: r = "error",
		className: o = "",
	}) {
		return t
			? m(Ze, {
					id: e,
					color: r,
					type: "small",
					role: "alert",
					"aria-live": "polite",
					className: o,
					children: t,
				})
			: null;
	}
	function y_(e, t) {
		return (n) => {
			(e.value = n.target.value), t == null || t(e.value);
		};
	}
	function v_({
		card: e,
		next: t,
		prev: n,
		survey: r,
		value: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		const c = Re(!1),
			l = Re(!1),
			u = Re(typeof i == "string" ? i : typeof o == "string" ? o : ""),
			p = u.value.length,
			f = We(),
			g = kt(),
			y = (e == null ? void 0 : e.minLength) ?? 0,
			b = (e == null ? void 0 : e.maxLength) ?? void 0,
			v = Jl({
				content: u.value,
				card: { minLength: y, maxLength: b, validations: e.validations },
				hasBeenTouched: c.value,
				language: g,
			}),
			_ = v.valid,
			S = e.multiline ? p_ : Nr,
			x = ze(r, e, { finalCard: a }),
			C = `skyra-card-${e.id}`,
			I = `${C}-min-length`,
			P = `${C}-error`,
			N = v.status === "under-minimum",
			W = l.value && N,
			O = !_ && (N ? l.value : c.value);
		function A() {
			(c.value = !0), (l.value = !0), (f.value = _), _ && t(u.value);
		}
		const U = r.surveyType === "Findability";
		return m(
			Ie,
			{
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: x,
				cardId: C,
				actions: [
					{
						key: "prev",
						action: () => n(),
						type: "link",
						label: x.back,
						if: !(s || U),
					},
					{ key: "next", action: A, label: x.next },
				],
				children: [
					m(S, {
						id: e.id,
						label: e.label ?? void 0,
						"aria-invalid": O ? "true" : void 0,
						"aria-describedby": v.errorMessage
							? N && !l.value
								? I
								: P
							: typeof b == "number"
								? `${C}-char-count`
								: void 0,
						placeholder: e.placeholder,
						value: u.value,
						autoComplete: "off",
						onInput: y_(u, () => {
							c.value = !0;
						}),
						onKeyDown: (me) => {
							me.key === "Enter" &&
								(!e.multiline || me.metaKey) &&
								(me.preventDefault(), A());
						},
						required: y > 0,
						minLength: y,
						name: "value",
						type: "text",
					}),
					m("div", {
						className: "flex justify-between mt-1",
						children: [
							N
								? m(Ze, {
										id: W ? P : I,
										type: "small",
										color: W ? v.color : void 0,
										role: W ? "alert" : void 0,
										"aria-live": W ? "polite" : void 0,
										children: v.errorMessage,
									})
								: v.errorMessage
									? m(ui, {
											id: P,
											message: v.errorMessage,
											type: "character-limit",
											color: v.color,
										})
									: m("span", {}),
							typeof b == "number" &&
								m(Ze, {
									id: `${C}-char-count`,
									type: "small",
									color: v.color,
									role: v.shouldAnnounce ? "status" : void 0,
									children: [p, "/", b],
								}),
						],
					}),
				],
			},
			e.id,
		);
	}
	function Ac({
		className: e,
		onCheckedChange: t,
		checked: n,
		disabled: r,
		...o
	}) {
		const [i, s] = se(!1);
		return m("input", {
			className: `
          appearance-none
          m-0
          text-current size-5
          border-2 rounded-sm
          border-current
          shrink-0

          grid place-content-center

          focus-visible:ring-transparent
          focus-visible:outline-hidden
          before:content-['']
          before:size-2.5
          before:scale-0
          before:transition-all
          before:[transition-duration:100ms]
          before:rounded-xs
          before:shadow-[inset_1em_1em_currentcolor]
          checked:before:scale-100
          before:origin-bottom-left
          before:[clip-path:polygon(14%_44%,0_65%,50%_100%,100%_16%,80%_0%,43%_62%)]
          ${e ?? ""}
        `,
			type: "checkbox",
			checked: n !== void 0 ? n : i,
			onChange: (a) => {
				const c = a.target.checked;
				s(c), t == null || t(c);
			},
			disabled: r,
			...o,
		});
	}
	function b_({
		className: e,
		size: t,
		disabled: n,
		blocked: r,
		onCheckedChange: o,
		checked: i,
		children: s,
		...a
	}) {
		return m("label", {
			part: "list-item",
			class: `
      ${r ? "cursor-not-allowed" : "cursor-pointer"}
      flex items-center gap-3
      border
      rounded-sm p-2
      border-interface

      hover:bg-action/10

      ring-offset-[3px]
      focus-within:ring-2
      focus-within:ring-offset-bg
      focus-within:ring-action
    `,
			children: [
				m(Ac, {
					onCheckedChange: o,
					checked: i,
					disabled: n,
					"aria-disabled": r || void 0,
					className: "checked:bg-action checked:border-action checked:text-bg",
					...a,
				}),
				s,
			],
		});
	}
	function di(e = "", t = "text") {
		const n = Re({
				value: e,
				valid: e ? w_(e, t) : null,
				touched: e.length > 0,
				dirty: !1,
			}),
			r = (i) => {
				const s = i.target,
					a = s.value;
				n.value = {
					...n.value,
					value: a,
					valid: s.checkValidity(),
					touched: n.value.touched || a.length > 0,
				};
			},
			o = (i) => {
				n.value = { ...n.value, dirty: n.value.touched };
			};
		return {
			signal: n,
			value: n.value.value,
			valid: n.value.valid,
			touched: n.value.touched,
			dirty: n.value.dirty,
			onInput: r,
			onBlur: o,
		};
	}
	function w_(e, t) {
		return t === "email"
			? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
			: t === "tel"
				? e.length > 0
				: !0;
	}
	function __({
		card: e,
		survey: t,
		firstCard: n,
		finalCard: r,
		next: o,
		prev: i,
		close: s,
		storedValue: a,
	}) {
		const c = We(),
			l = kt(),
			d = typeof a == "object" && a !== null ? a : void 0,
			u = di((d == null ? void 0 : d.email) || "", "email"),
			p = di((d == null ? void 0 : d.phone) || "", "tel"),
			f = di((d == null ? void 0 : d.name) || "", "text"),
			g = Re((d == null ? void 0 : d.consented) ?? !1),
			y = Re(!1),
			b = ze(t, e, { finalCard: r }),
			v = Cr({
				email: { value: u.value, valid: u.valid ?? !1 },
				name: { value: f.value },
				phone: { value: p.value },
				consented: g.value,
				consentEnable: !!e.consentEnable,
				isRequired: !!e.isRequired,
				hasBeenSubmitted: y.value,
				language: l,
			}),
			_ = v.status === "email-invalid",
			S = v.status === "consent-required" || v.status === "email-required",
			x = u.value || f.value || p.value;
		function C() {
			const P = Cr({
				email: { value: u.value, valid: u.valid ?? !1 },
				name: { value: f.value },
				phone: { value: p.value },
				consented: g.value,
				consentEnable: !!e.consentEnable,
				isRequired: !!e.isRequired,
				hasBeenSubmitted: !0,
				language: l,
			});
			(y.value = !0),
				(c.value = P.valid),
				P.valid &&
					o(
						x
							? {
									email: u.value,
									phone: p.value,
									name: f.value,
									consented: g.value,
								}
							: void 0,
					);
		}
		const I = `skyra-card-${e.id}`;
		return m(
			Ie,
			{
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: b,
				skipWrapperLabeling: !0,
				cardId: I,
				actions: [
					{ key: "prev", action: i, type: "link", if: !n, label: b.back },
					{ key: "next", action: C, label: b.next },
				],
				children: m("fieldset", {
					"aria-labelledby": I,
					children: [
						m("legend", {
							className: "sr-only",
							children: "Enter your contact information",
						}),
						m("div", {
							className: "flex flex-col gap-2",
							children: [
								e.nameEnable &&
									m(Nr, {
										name: "name",
										autocomplete: "name",
										label: e.nameLabel ?? "Name",
										placeholder: e.namePlaceholder ?? void 0,
										value: f.value,
										onInput: f.onInput,
									}),
								e.email &&
									m(Nr, {
										label: e.email_label
											? `${e.email_label} ${e.isRequired || (e.consentEnable && g.value) ? "*" : ""}`
											: `Email ${e.isRequired || (e.consentEnable && g.value) ? "*" : ""}`,
										placeholder: e.email_placeholder ?? void 0,
										value: u.value,
										"aria-invalid": _ ? "true" : void 0,
										"aria-describedby": _ ? `${I}-email-error` : void 0,
										onInput: u.onInput,
										onBlur: u.onBlur,
										autocomplete: "email",
										name: "email",
										type: "email",
									}),
								e.phone &&
									m(Nr, {
										label: e.phone_label ?? "Phone",
										placeholder: e.phone_placeholder ?? void 0,
										value: p.value,
										onInput: p.onInput,
										autocomplete: "tel",
										name: "phone",
										type: "tel",
									}),
								_ &&
									m(ui, {
										id: `${I}-email-error`,
										message: v.errorMessage,
										type: "validation",
										color: v.color,
									}),
								e.consentEnable &&
									m(Ee, {
										children: [
											m(Ze, {
												type: "small",
												className:
													"flex flex-col gap-0 items-center text-center",
												children: [
													e.consentTermsText,
													e.consentTermsUrl &&
														m("a", {
															href: e.consentTermsUrl,
															target: "_blank",
															rel: "noopener noreferrer",
															className: Ic({
																variant: "link",
																size: "default",
																className:
																	"p-0! font-bold pl-0.5 whitespace-nowrap",
															}),
															children: e.consentTermsTitle,
														}),
												],
											}),
											m(Ze, {
												as: "label",
												type: "small",
												className: `
              mt-2 mb-2 inline-flex gap-1.5 items-center self-center
              font-semibold
              rounded-sm
              has-focus-visible:outline-2
              has-focus-visible:outline-offset-4
              has-focus-visible:outline-current
            `,
												children: [
													m(Ac, {
														name: "consent",
														checked: g.value,
														onCheckedChange: (P) => {
															g.value = P;
														},
													}),
													m("span", {
														children: [
															e.consentTermsLabel,
															(e.isRequired || x) &&
																m("span", {
																	className: "text-red-600",
																	"aria-label": "required",
																	children: [" ", "*"],
																}),
														],
													}),
												],
											}),
										],
									}),
							],
						}),
						S
							? m(ui, {
									id: `${I}-error`,
									message: v.errorMessage,
									type: "validation",
									color: v.color,
								})
							: m("div", { className: "h-4" }),
					],
				}),
			},
			e.id,
		);
	}
	function k_({
		card: e,
		next: t,
		prev: n,
		sessionId: r,
		survey: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		const c = e.randomize ? Er(e.items, r) : e.items,
			l = ze(o, e, { finalCard: a }),
			d = `skyra-card-${e.id}`,
			u = typeof i == "string" ? i : void 0,
			p = (f, g) => {
				const y = f && f.trim() !== "" ? f : "";
				t == null || t(y, g);
			};
		return m(
			Ie,
			{
				isForm: !1,
				heading: e.name,
				cardId: d,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: l,
				skipWrapperLabeling: !0,
				actions: [
					{
						key: "prev",
						action: n,
						label: l.back,
						type: "link",
						className: "mr-auto",
						if: !s,
					},
				],
				children: m("fieldset", {
					className: "m-0 border-0 p-0 min-w-0",
					"aria-labelledby": d,
					children: m(Or, {
						children: m("div", {
							part: "options",
							className: `flex ${e.optionsLayout === "horizontal" ? "flex-row flex-wrap gap-2 p-1" : "flex-col items-start gap-1 md:gap-2"}`,
							children: c.map((f) => {
								const y = X(f.value.id) === u;
								return m(
									gt,
									{
										type: "button",
										variant: "chip",
										"data-selected": y,
										"aria-pressed": y ? "true" : "false",
										onClick: () => {
											p(f.value.id, e.segment.id);
										},
										children: [y && m(ci, { className: "mr-1.5" }), f.label],
									},
									f.value.id,
								);
							}),
						}),
					}),
				}),
			},
			e.id,
		);
	}
	function S_({ className: e, value: { name: t, native: n } }) {
		return m("span", {
			className: `inline ${e}`,
			role: "img",
			"aria-label": t,
			"aria-hidden": t ? "false" : "true",
			children: n,
		});
	}
	const x_ = Lr(
		`
  appearance-none
  m-0 bg-transparent
  cursor-pointer
  font-normal

  aspect-square
  rounded-full
  border-2
  border-solid
  border-action
  text-text
  checked:border-8

  focus-visible:outline-action
  focus-visible:outline-2
  focus-visible:outline-offset-2

  disabled:cursor-not-allowed
  disabled:opacity-50

  hover:outline-action
  hover:outline-2
  hover:outline-offset-2
  `,
		{
			variants: {
				size: { small: "size-4", default: "size-6", large: "size-8" },
			},
			defaultVariants: { size: "default" },
		},
	);
	function Lc({ className: e, size: t, ...n }) {
		return m("input", {
			type: "radio",
			className: x_({ size: t, className: e }),
			...n,
		});
	}
	function C_({
		card: e,
		next: t,
		prev: n,
		survey: r,
		storedValue: o,
		firstCard: i,
		finalCard: s,
	}) {
		var x;
		const a = e.likertScale;
		if (!("likertItems" in a)) return null;
		const c = a.likertItems,
			l =
				(typeof o == "string" &&
					((x = c.find((C) => X(C.id) === o)) == null ? void 0 : x.id)) ||
				"",
			d = Re(l),
			u = ze(r, e, { finalCard: s }),
			p = e.showEmoji && c.every((C) => !!C.emoji),
			f = () => {
				const C = d.value && d.value.trim() !== "" ? d.value : "";
				t(C, e.id);
			},
			g = [
				{ key: "prev", action: () => n(), label: u.back, type: "link", if: !i },
				{ key: "next", action: f, label: u.next, type: "primary" },
			],
			y = e.optionsLayout === "horizontal";
		let b = "grid-cols-5";
		a.type === "LikertScaleThree"
			? (b = "grid-cols-3")
			: a.type === "LikertScaleSix"
				? (b = "grid-cols-6")
				: a.type === "LikertScaleSeven" && (b = "grid-cols-7");
		const v = y ? `grid ${b} gap-1 md:gap-2` : "flex flex-col gap-1 md:gap-2",
			_ = y
				? "flex flex-col items-center gap-1"
				: "flex flex-row items-center gap-2 justify-start",
			S = `skyra-card-${e.id}`;
		return m(
			Ie,
			{
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: u,
				actions: g,
				skipWrapperLabeling: !0,
				cardId: S,
				children: m("fieldset", {
					"aria-labelledby": S,
					children: [
						m("legend", {
							className: "sr-only",
							children: "Select your rating",
						}),
						m("div", {
							className: v,
							role: "radiogroup",
							"aria-labelledby": S,
							children: c.map((C, I) => {
								const P = C.id == d.value;
								return p
									? m(
											"label",
											{
												part: "list-item",
												className: `
                  cursor-pointer
                  ${y ? "flex flex-col items-center gap-0.5 text-center" : "flex flex-row items-center gap-2 justify-start"}
                  py-0.5
                  px-1
                  rounded-sm
                  ${P ? "bg-action text-bg" : ""}
                  hover:ring-action hover:ring-offset-2
                  hover:ring-offset-bg hover:ring-2

                  focus-within:ring-action focus-within:ring-offset-2
                  focus-within:ring-offset-bg focus-within:ring-2
                `,
												children: [
													C.emoji &&
														m(S_, {
															value: C.emoji,
															className: y ? "text-4xl" : "text-2xl",
														}),
													y
														? m("input", {
																type: "radio",
																id: C.id,
																name: e.id,
																value: C.id,
																className: "appearance-none",
																onClick: (N) => {
																	(d.value = C.id), (N.x > 0 || N.y > 0) && f();
																},
															})
														: m(Lc, {
																id: C.id,
																name: e.id,
																value: C.id,
																checked: P,
																onClick: (N) => {
																	(d.value = C.id), (N.x > 0 || N.y > 0) && f();
																},
															}),
													m("span", {
														className: "text-xs font-semibold",
														children: C.label,
													}),
												],
											},
											I,
										)
									: m(
											"label",
											{
												part: "list-item",
												className: `${_} cursor-pointer`,
												children: [
													m(Lc, {
														id: C.id,
														name: e.id,
														value: C.id,
														checked: P,
														onClick: (N) => {
															(d.value = C.id), (N.x > 0 || N.y > 0) && f();
														},
													}),
													m("span", {
														className: "text-xs font-semibold text-center",
														children: C.label,
													}),
												],
											},
											I,
										);
							}),
						}),
					],
				}),
			},
			e.id,
		);
	}
	function z_(e) {
		return m("kbd", {
			...e,
			class: `
        ml-auto
        shrink-0
        text-text
        bg-action/10
        text-xs
        font-medium
        rounded-xs border border-interface
        size-5 grid place-content-center
        pointer-coarse:hidden
      `,
		});
	}
	const Oc = "ABCDEFGHJKMNPQRSTVWXYZ".split("");
	function T_(e, t) {
		switch (t.type) {
			case "toggle": {
				const n = Kl({
					selectedValues: Array.from(e.selected),
					value: t.id,
					max: t.max,
				});
				return {
					...e,
					selected: new Set(n.values),
					dirty: !0,
					limitAttempted: n.limitReached,
				};
			}
			case "setDirty":
				return { ...e, dirty: !0 };
			default:
				throw new Error("Invalid action type");
		}
	}
	function I_({
		card: e,
		next: t,
		prev: n,
		sessionId: r,
		survey: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		Fe("multiselect card", e);
		const c = We(),
			l = kt(),
			u = (e.randomize ? Er(e.selectItems, r) : e.selectItems).map((O, A) => ({
				...O,
				order: A,
			})),
			p = Array.isArray(i)
				? new Set(
						i
							.map((O) => {
								var A;
								return (A = u.find((U) => X(U.id) === O)) == null
									? void 0
									: A.id;
							})
							.filter(Boolean),
					)
				: new Set(),
			[f, g] = Bi(T_, { selected: p, dirty: !1, limitAttempted: !1 }),
			[y, b] = se(!1),
			v = Di(
				(O) => {
					const A = O.currentTarget,
						U = O.target,
						me = O.key.toUpperCase();
					if (A.contains(U)) {
						const rt = Oc.indexOf(me);
						if (rt >= 0 && rt < u.length) {
							const Jt = u[rt];
							g({ type: "toggle", id: Jt.id, max: e.max ?? void 0 });
						}
					}
				},
				[e.max, u],
			),
			_ = xr({
				selectedCount: f.selected.size,
				card: { min: e.min ?? void 0, max: e.max ?? void 0 },
				hasBeenSubmitted: y,
				language: l,
			}),
			S = ql({
				min: e.min ?? void 0,
				max: e.max ?? void 0,
				totalOptions: u.length,
				language: l,
			}),
			x = e.max ? Wl({ max: e.max, language: l }) : null,
			C = f.limitAttempted
				? x
				: _.status === "over-max" || (y && !_.valid)
					? _.errorMessage
					: S,
			I = f.limitAttempted || _.status === "over-max" || (y && !_.valid),
			P = ze(o, e, { finalCard: a }),
			N = `skyra-card-${e.id}`;
		function W() {
			const O = xr({
				selectedCount: f.selected.size,
				card: { min: e.min ?? void 0, max: e.max ?? void 0 },
				hasBeenSubmitted: !0,
				language: l,
			});
			if ((b(!0), (c.value = O.valid), O.valid)) {
				const A = f.selected.size > 0 ? Array.from(f.selected) : [];
				t(A);
			}
		}
		return m(
			Ie,
			{
				onKeyUp: v,
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: P,
				skipWrapperLabeling: !0,
				cardId: N,
				actions: [
					{
						key: "prev",
						action: () => (n == null ? void 0 : n()),
						label: P.back,
						type: "link",
						if: !s,
					},
					{ key: "next", action: W, label: P.next },
				],
				children: m("fieldset", {
					"aria-labelledby": N,
					"aria-describedby": C ? `${N}-feedback` : void 0,
					"aria-invalid": I ? "true" : void 0,
					children: [
						m(Or, {
							children: m("div", {
								part: "options",
								className: `flex ${e.optionsLayout === "horizontal" ? "flex-row flex-wrap gap-2 p-1 -m-1" : "flex-col items-stretch gap-1 md:gap-2"}`,
								children: u.map((O) => {
									const A = f.selected.has(O.id),
										U = !!(e.max && f.selected.size >= e.max && !A);
									return m(
										b_,
										{
											checked: A,
											blocked: U,
											onCheckedChange: () => {
												g({ type: "toggle", id: O.id, max: e.max ?? void 0 });
											},
											children: [
												m("span", { children: O.label }),
												m(z_, { children: Oc[O.order] }),
											],
										},
										O.id,
									);
								}),
							}),
						}),
						C
							? m("div", {
									class: "my-2 shrink-0",
									children: m(Ze, {
										type: "small",
										color: I ? "error" : void 0,
										role: I ? "alert" : void 0,
										id: `${N}-feedback`,
										children: C,
									}),
								})
							: null,
					],
				}),
			},
			e.id,
		);
	}
	function $_({ card: e, next: t, survey: n, finalCard: r }) {
		const o = `skyra-card-${e.id}`;
		return m(
			Ie,
			{
				isForm: !1,
				heading: e.name,
				cardId: o,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: ze(n, e, { finalCard: r }),
				actionsSpacing: "tight",
				actions: [
					{ key: "accept", action: () => t(!0), label: e.positive },
					{ key: "decline", action: () => t(!1), label: e.negative },
				],
			},
			e.id,
		);
	}
	function E_({
		card: e,
		next: t,
		prev: n,
		sessionId: r,
		survey: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		const c = e.randomize ? Er(e.selectItems, r) : e.selectItems,
			l = ze(o, e, { finalCard: a }),
			d = `skyra-card-${e.id}`,
			u = typeof i == "string" ? i : void 0,
			p = (f) => {
				const g = f && f.trim() !== "" ? f : "";
				t == null || t(g);
			};
		return m(
			Ie,
			{
				heading: e.name,
				body: e.body,
				cardId: d,
				bodyHtml: e.bodyHtml,
				texts: l,
				skipWrapperLabeling: !0,
				actions: [
					{
						key: "prev",
						action: n,
						label: l.back,
						type: "link",
						className: "mr-auto",
						if: !s,
					},
				],
				children: m("fieldset", {
					className: "m-0 border-0 p-0 min-w-0",
					"aria-labelledby": d,
					children: m(Or, {
						children: m("div", {
							part: "options",
							className: `flex ${e.optionsLayout === "horizontal" ? "flex-row flex-wrap gap-2 p-1" : "flex-col items-start gap-1 md:gap-2"}`,
							children: c.map((f) => {
								const y = X(f.id) === u;
								return m(
									gt,
									{
										type: "button",
										variant: "chip",
										"data-selected": y,
										"aria-pressed": y ? "true" : "false",
										onClick: () => {
											p(f.id);
										},
										children: [y && m(ci, { className: "mr-1.5" }), f.label],
									},
									f.id,
								);
							}),
						}),
					}),
				}),
			},
			e.id,
		);
	}
	function R_({ card: e, ...t }) {
		const n = Fn(),
			r = n.renderType === "Inline",
			o = { ...t, survey: n };
		switch (e.type) {
			case "TopTaskCard":
				return m(h_, { card: e, ...o });
			case "MessageCard":
				return m(g_, { card: e, ...o });
			case "CompletionCard":
				return m(m_, { card: e, ...o, isInline: r });
			case "FindabilityCard":
				return m($_, { card: e, ...o });
			case "RecruitmentCard":
				return m(__, { card: e, ...o });
			case "InputCard":
				return m(v_, { card: e, ...o });
			case "SegmentCard":
				return m(k_, { card: e, ...o });
			case "LikertCard":
				return m(C_, { card: e, ...o });
			case "MultiSelectCard":
				return m(I_, { card: e, ...o });
			case "SingleSelectCard":
				return m(E_, { card: { ...e, type: "SingleSelectCard" }, ...o });
			default:
				throw new Error(`Unknown card type: ${e.type}`);
		}
	}
	const M_ = `/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:"";--tw-outline-style:solid}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--spacing:4px;--container-6xl:1152px;--text-xs--line-height:calc(1/.75);--text-sm--line-height:calc(1.25/.875);--text-base:16px;--text-base--line-height: 1.5 ;--text-lg--line-height:calc(1.75/1.125);--text-xl:20px;--text-xl--line-height:calc(1.75/1.25);--text-2xl:24px;--text-2xl--line-height:calc(2/1.5);--text-3xl:30px;--text-3xl--line-height: 1.2 ;--text-4xl:36px;--text-4xl--line-height:calc(2.5/2.25);--text-5xl:48px;--text-5xl--line-height:1;--text-6xl:60px;--text-6xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--leading-tight:1.25;--ease-out:cubic-bezier(0,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components{:host{--skyra-bg-color:#f5f7fa;--skyra-text-color:#012a53;--skyra-interface-color:#315386;--skyra-border-color:var(--skyra-interface-color);--skyra-action-color:#002052;--skyra-action-text-color:var(--skyra-bg-color);--skyra-minimized-bg:#002052;--skyra-minimized-text:#fff;--skyra-minimized-border:#106eff;--skyra-minimized-shadow:0px 0px 20px 4px #013d9666;--skyra-secondary-color:#dde7f7;--skyra-link-color:blue;--skyra-error-color:#ca0a15;--skyra-warning-color:#92400e;--skyra-focus-color:var(--skyra-action-color);--skyra-border-style:solid;--skyra-border-width:1px;--skyra-radius-sm:4px;--skyra-radius-md:6px;--skyra-radius-lg:8px;--skyra-radius-pill:999px;--skyra-focus-ring-style:solid;--skyra-focus-ring-width:2px;--skyra-focus-ring-offset:2px;--skyra-shadow-sm:none;--skyra-shadow-md:none;--skyra-shadow-lg:none;--skyra-z-index:2147480000;--skyra-font-heading:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--skyra-font-body:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--skyra-option-list-max-height:400px;--skyra-body-max-height:none;font-size:var(--skyra-font-size,16px);background:var(--skyra-bg-color)}:host li{margin-left:24px;list-style-type:disc}:host a{color:var(--skyra-link-color);text-decoration:underline}.body-content{max-height:var(--skyra-body-max-height,none);overflow-y:auto}}@layer utilities{.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-x-0{inset-inline:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.right-0{right:calc(var(--spacing)*0)}.right-auto{right:auto}.bottom-0{bottom:calc(var(--spacing)*0)}.left-0{left:calc(var(--spacing)*0)}.left-auto{left:auto}.z-0{z-index:0}.z-10{z-index:10}.z-50{z-index:50}.z-wrapper{z-index:var(--skyra-z-index)}.container{width:100%}@media(min-width:40rem){.container{max-width:640px}}@media(min-width:48rem){.container{max-width:768px}}@media(min-width:64rem){.container{max-width:1024px}}@media(min-width:80rem){.container{max-width:1280px}}@media(min-width:96rem){.container{max-width:1536px}}.-m-1{margin:calc(var(--spacing)*-1)}.m-0{margin:calc(var(--spacing)*0)}.m-2{margin:calc(var(--spacing)*2)}.m-auto{margin:auto}.mx-2{margin-inline:calc(var(--spacing)*2)}.mx-auto{margin-inline:auto}.my-2{margin-block:calc(var(--spacing)*2)}.my-4{margin-block:calc(var(--spacing)*4)}.my-5{margin-block:calc(var(--spacing)*5)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-8{margin-top:calc(var(--spacing)*8)}.mt-10{margin-top:calc(var(--spacing)*10)}.mt-12{margin-top:calc(var(--spacing)*12)}.mr-1\\.5{margin-right:calc(var(--spacing)*1.5)}.mr-auto{margin-right:auto}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.mb-10{margin-bottom:calc(var(--spacing)*10)}.ml-0\\.5{margin-left:calc(var(--spacing)*.5)}.ml-auto{margin-left:auto}.\\!inline{display:inline!important}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.list-item{display:list-item}.table{display:table}.aspect-square{aspect-ratio:1}.size-3\\.5{width:calc(var(--spacing)*3.5);height:calc(var(--spacing)*3.5)}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-8{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.size-11{width:calc(var(--spacing)*11);height:calc(var(--spacing)*11)}.h-2{height:calc(var(--spacing)*2)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-48{height:calc(var(--spacing)*48)}.h-\\[50px\\]{height:50px}.h-\\[100px\\]{height:100px}.h-full{height:100%}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-5{width:calc(var(--spacing)*5)}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-20{width:calc(var(--spacing)*20)}.w-32{width:calc(var(--spacing)*32)}.w-48{width:calc(var(--spacing)*48)}.w-\\[400px\\]{width:400px}.w-full{width:100%}.w-screen{width:100vw}.max-w-6xl{max-width:var(--container-6xl)}.max-w-\\[400px\\]{max-width:400px}.max-w-\\[450px\\]{max-width:450px}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-20{min-width:calc(var(--spacing)*20)}.min-w-\\[300px\\]{min-width:300px}.flex-1{flex:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.scale-1{--tw-scale-x:1%;--tw-scale-y:1%;--tw-scale-z:1%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-2{--tw-scale-x:2%;--tw-scale-y:2%;--tw-scale-z:2%;scale:var(--tw-scale-x)var(--tw-scale-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.list-inside{list-style-position:inside}.list-disc{list-style-type:disc}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-wrap{flex-wrap:wrap}.place-content-center{place-content:center}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing)*0)}.gap-0\\.5{gap:calc(var(--spacing)*.5)}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-5{gap:calc(var(--spacing)*5)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-3{-moz-column-gap:calc(var(--spacing)*3);column-gap:calc(var(--spacing)*3)}.gap-y-1{row-gap:calc(var(--spacing)*1)}.gap-y-1\\.5{row-gap:calc(var(--spacing)*1.5)}.self-center{align-self:center}.self-end{align-self:flex-end}.self-start{align-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.rounded{border-radius:var(--skyra-radius-md,6px)}.rounded-\\[99999px\\]{border-radius:99999px}.rounded-full{border-radius:var(--skyra-radius-pill,999px)}.rounded-lg{border-radius:var(--skyra-radius-lg,8px)}.rounded-md{border-radius:var(--skyra-radius-md,6px)}.rounded-none{border-radius:0}.rounded-sm{border-radius:var(--skyra-radius-sm,4px)}.rounded-xs{border-radius:var(--skyra-radius-sm,2px)}.rounded-br-md{border-bottom-right-radius:var(--skyra-radius-md,6px)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-solid{--tw-border-style:solid;border-style:solid}.border-action{border-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.border-action{border-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.border-current{border-color:currentColor}.border-interface{border-color:var(--skyra-interface-color)}@supports (color:color-mix(in lab,red,red)){.border-interface{border-color:color-mix(in srgb,var(--skyra-interface-color),transparent 0%)}}.border-transparent{border-color:#0000}.bg-action{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.bg-action{background-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.bg-action\\/10{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.bg-action\\/10{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)10%,transparent)}}.bg-bg{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.bg-bg{background-color:color-mix(in srgb,var(--skyra-bg-color),transparent 0%)}}.bg-minimized{background-color:var(--skyra-minimized-bg)}@supports (color:color-mix(in lab,red,red)){.bg-minimized{background-color:color-mix(in srgb,var(--skyra-minimized-bg),transparent 0%)}}.bg-transparent{background-color:#0000}.fill-\\[\\#003355\\]{fill:#035}.fill-transparent{fill:#0000}.stroke-current{stroke:currentColor}.object-cover{-o-object-fit:cover;object-fit:cover}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.p-8{padding:calc(var(--spacing)*8)}.px-0{padding-inline:calc(var(--spacing)*0)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-0{padding-block:calc(var(--spacing)*0)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-2{padding-block:calc(var(--spacing)*2)}.py-6{padding-block:calc(var(--spacing)*6)}.pt-4{padding-top:calc(var(--spacing)*4)}.pt-10{padding-top:calc(var(--spacing)*10)}.pr-5{padding-right:calc(var(--spacing)*5)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.pl-0\\.5{padding-left:calc(var(--spacing)*.5)}.pl-4{padding-left:calc(var(--spacing)*4)}.text-center{text-align:center}.text-left{text-align:left}.font-body{font-family:var(--skyra-font-body)}.font-heading{font-family:var(--skyra-font-heading)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:1.25em;line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:.875em;line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:.75em;line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-md{font-size:1.125em}.leading-4{--tw-leading:calc(var(--spacing)*4);line-height:calc(var(--spacing)*4)}.leading-none{--tw-leading:1;line-height:1}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#012A53\\]{color:#012a53}.text-action-text{color:var(--skyra-action-text-color)}@supports (color:color-mix(in lab,red,red)){.text-action-text{color:color-mix(in srgb,var(--skyra-action-text-color),transparent 0%)}}.text-bg{color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.text-bg{color:color-mix(in srgb,var(--skyra-bg-color),transparent 0%)}}.text-current{color:currentColor}.text-error{color:var(--skyra-error-color)}@supports (color:color-mix(in lab,red,red)){.text-error{color:color-mix(in srgb,var(--skyra-error-color),transparent 0%)}}.text-link{color:var(--skyra-link-color)}@supports (color:color-mix(in lab,red,red)){.text-link{color:color-mix(in srgb,var(--skyra-link-color),transparent 0%)}}.text-minimized-text{color:var(--skyra-minimized-text)}@supports (color:color-mix(in lab,red,red)){.text-minimized-text{color:color-mix(in srgb,var(--skyra-minimized-text),transparent 0%)}}.text-text{color:var(--skyra-text-color)}@supports (color:color-mix(in lab,red,red)){.text-text{color:color-mix(in srgb,var(--skyra-text-color),transparent 0%)}}.text-transparent{color:#0000}.text-warning{color:var(--skyra-warning-color)}@supports (color:color-mix(in lab,red,red)){.text-warning{color:color-mix(in srgb,var(--skyra-warning-color),transparent 0%)}}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.underline{text-decoration-line:underline}.underline-offset-4{text-underline-offset:4px}.opacity-50{opacity:.5}.opacity-85{opacity:.85}.shadow{--tw-shadow:var(--skyra-shadow,0 0 20px 4px rgb(from var(--skyra-action-color)r g b/.25));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-minimized{--tw-shadow:var(--skyra-minimized-shadow);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-\\[3px\\]{--tw-ring-offset-width:3px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.blur-\\[75px\\]{--tw-blur:blur(75px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.\\[background\\:linear-gradient\\(180deg\\,rgb\\(224\\,251\\,166\\)_0\\%\\,rgb\\(223\\.85\\,250\\.83\\,166\\.74\\)_11\\.79\\%\\,rgb\\(223\\.42\\,250\\.35\\,168\\.85\\)_21\\.38\\%\\,rgb\\(222\\.73\\,249\\.59\\,172\\.2\\)_29\\.12\\%\\,rgb\\(221\\.83\\,248\\.59\\,176\\.62\\)_35\\.34\\%\\,rgb\\(220\\.73\\,247\\.37\\,181\\.97\\)_40\\.37\\%\\,rgb\\(219\\.48\\,245\\.98\\,188\\.11\\)_44\\.56\\%\\,rgb\\(218\\.09\\,244\\.44\\,194\\.87\\)_48\\.24\\%\\,rgb\\(216\\.61\\,242\\.79\\,202\\.13\\)_51\\.76\\%\\,rgb\\(215\\.06\\,241\\.06\\,209\\.72\\)_55\\.44\\%\\,rgb\\(213\\.47\\,239\\.3\\,217\\.5\\)_59\\.63\\%\\,rgb\\(211\\.87\\,237\\.52\\,225\\.31\\)_64\\.66\\%\\,rgb\\(210\\.29\\,235\\.77\\,233\\.02\\)_70\\.88\\%\\,rgb\\(208\\.77\\,234\\.07\\,240\\.47\\)_78\\.62\\%\\,rgb\\(207\\.33\\,232\\.47\\,247\\.51\\)_88\\.21\\%\\,rgb\\(206\\,231\\,254\\)_100\\%\\)\\]{background:linear-gradient(#e0fba6,#e0fba7 11.79%,#dffaa9 21.38%,#dffaac 29.12%,#def9b1 35.34%,#ddf7b6 40.37%,#dbf6bc 44.56%,#daf4c3 48.24%,#d9f3ca 51.76%,#d7f1d2 55.44%,#d5efda 59.63%,#d4eee1 64.66%,#d2ece9 70.88%,#d1eaf0 78.62%,#cfe8f8 88.21%,#cee7fe)}.placeholder\\:text-text\\/60::-moz-placeholder{color:var(--skyra-text-color)}.placeholder\\:text-text\\/60::placeholder{color:var(--skyra-text-color)}@supports (color:color-mix(in lab,red,red)){.placeholder\\:text-text\\/60::-moz-placeholder{color:color-mix(in oklab,color-mix(in srgb,var(--skyra-text-color),transparent 0%)60%,transparent)}.placeholder\\:text-text\\/60::placeholder{color:color-mix(in oklab,color-mix(in srgb,var(--skyra-text-color),transparent 0%)60%,transparent)}}.before\\:size-2\\.5:before{content:var(--tw-content);width:calc(var(--spacing)*2.5);height:calc(var(--spacing)*2.5)}.before\\:origin-bottom-left:before{content:var(--tw-content);transform-origin:0 100%}.before\\:scale-0:before{content:var(--tw-content);--tw-scale-x:0%;--tw-scale-y:0%;--tw-scale-z:0%;scale:var(--tw-scale-x)var(--tw-scale-y)}.before\\:rounded-xs:before{content:var(--tw-content);border-radius:var(--skyra-radius-sm,2px)}.before\\:shadow-\\[inset_1em_1em_currentcolor\\]:before{content:var(--tw-content);--tw-shadow:inset 1em 1em var(--tw-shadow-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.before\\:transition-all:before{content:var(--tw-content);transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.before\\:\\[transition-duration\\:100ms\\]:before{content:var(--tw-content);transition-duration:.1s}.before\\:content-\\[\\'\\'\\]:before{--tw-content:"";content:var(--tw-content)}.before\\:\\[clip-path\\:polygon\\(14\\%_44\\%\\,0_65\\%\\,50\\%_100\\%\\,100\\%_16\\%\\,80\\%_0\\%\\,43\\%_62\\%\\)\\]:before{content:var(--tw-content);clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%)}.checked\\:border-8:checked{border-style:var(--tw-border-style);border-width:8px}.checked\\:border-action:checked{border-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.checked\\:border-action:checked{border-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.checked\\:bg-action:checked{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.checked\\:bg-action:checked{background-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.checked\\:text-bg:checked{color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.checked\\:text-bg:checked{color:color-mix(in srgb,var(--skyra-bg-color),transparent 0%)}}.checked\\:before\\:scale-100:checked:before{content:var(--tw-content);--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-within\\:ring-action:focus-within{--tw-ring-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.focus-within\\:ring-action:focus-within{--tw-ring-color:color-mix(in srgb,var(--skyra-action-color),transparent 0% )}}.focus-within\\:ring-offset-2:focus-within{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus-within\\:ring-offset-bg:focus-within{--tw-ring-offset-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.focus-within\\:ring-offset-bg:focus-within{--tw-ring-offset-color:color-mix(in srgb,var(--skyra-bg-color),transparent 0% )}}@media(hover:hover){.hover\\:border-action\\/80:hover{border-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:border-action\\/80:hover{border-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)80%,transparent)}}.hover\\:bg-action:hover{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-action:hover{background-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.hover\\:bg-action\\/10:hover{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-action\\/10:hover{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)10%,transparent)}}.hover\\:bg-action\\/80:hover{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-action\\/80:hover{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)80%,transparent)}}.hover\\:text-action-text:hover{color:var(--skyra-action-text-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:text-action-text:hover{color:color-mix(in srgb,var(--skyra-action-text-color),transparent 0%)}}.hover\\:text-link\\/80:hover{color:var(--skyra-link-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:text-link\\/80:hover{color:color-mix(in oklab,color-mix(in srgb,var(--skyra-link-color),transparent 0%)80%,transparent)}}.hover\\:ring-2:hover{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:ring-action:hover{--tw-ring-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:ring-action:hover{--tw-ring-color:color-mix(in srgb,var(--skyra-action-color),transparent 0% )}}.hover\\:ring-offset-2:hover{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.hover\\:ring-offset-bg:hover{--tw-ring-offset-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:ring-offset-bg:hover{--tw-ring-offset-color:color-mix(in srgb,var(--skyra-bg-color),transparent 0% )}}.hover\\:outline-2:hover{outline-style:var(--tw-outline-style);outline-width:2px}.hover\\:outline-offset-2:hover{outline-offset:2px}.hover\\:outline-action:hover{outline-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:outline-action:hover{outline-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}}.focus-visible\\:bg-action\\/10:focus-visible{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.focus-visible\\:bg-action\\/10:focus-visible{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)10%,transparent)}}.focus-visible\\:no-underline:focus-visible{text-decoration-line:none}.focus-visible\\:ring-transparent:focus-visible{--tw-ring-color:transparent}.focus-visible\\:outline-hidden:focus-visible{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.focus-visible\\:outline-hidden:focus-visible{outline-offset:2px;outline:2px solid #0000}}.focus-visible\\:outline-2:focus-visible{outline-style:var(--tw-outline-style);outline-width:2px}.focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.focus-visible\\:outline-action:focus-visible{outline-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.focus-visible\\:outline-action:focus-visible{outline-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.focus-visible\\:outline-current:focus-visible{outline-color:currentColor}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.has-focus-visible\\:outline-2:has(:focus-visible){outline-style:var(--tw-outline-style);outline-width:2px}.has-focus-visible\\:outline-offset-4:has(:focus-visible){outline-offset:4px}.has-focus-visible\\:outline-current:has(:focus-visible){outline-color:currentColor}.aria-\\[invalid\\=true\\]\\:border-error[aria-invalid=true]{border-color:var(--skyra-error-color)}@supports (color:color-mix(in lab,red,red)){.aria-\\[invalid\\=true\\]\\:border-error[aria-invalid=true]{border-color:color-mix(in srgb,var(--skyra-error-color),transparent 0%)}}@media(hover:hover){.aria-\\[invalid\\=true\\]\\:hover\\:border-error\\/50[aria-invalid=true]:hover{border-color:var(--skyra-error-color)}@supports (color:color-mix(in lab,red,red)){.aria-\\[invalid\\=true\\]\\:hover\\:border-error\\/50[aria-invalid=true]:hover{border-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-error-color),transparent 0%)50%,transparent)}}}.aria-\\[invalid\\=true\\]\\:focus-visible\\:ring-error\\/20[aria-invalid=true]:focus-visible{--tw-ring-color:var(--skyra-error-color)}@supports (color:color-mix(in lab,red,red)){.aria-\\[invalid\\=true\\]\\:focus-visible\\:ring-error\\/20[aria-invalid=true]:focus-visible{--tw-ring-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-error-color),transparent 0% )20%,transparent)}}.data-\\[selected\\=true\\]\\:border-action[data-selected=true]{border-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.data-\\[selected\\=true\\]\\:border-action[data-selected=true]{border-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.data-\\[selected\\=true\\]\\:bg-action[data-selected=true]{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.data-\\[selected\\=true\\]\\:bg-action[data-selected=true]{background-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.data-\\[selected\\=true\\]\\:font-semibold[data-selected=true]{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.data-\\[selected\\=true\\]\\:text-action-text[data-selected=true]{color:var(--skyra-action-text-color)}@supports (color:color-mix(in lab,red,red)){.data-\\[selected\\=true\\]\\:text-action-text[data-selected=true]{color:color-mix(in srgb,var(--skyra-action-text-color),transparent 0%)}}@media(prefers-reduced-motion:reduce){.motion-reduce\\:transition-none{transition-property:none}}@media(min-width:40rem){.sm\\:h-screen{height:100vh}.sm\\:w-4\\/12{width:33.3333%}.sm\\:w-8\\/12{width:66.6667%}.sm\\:p-10{padding:calc(var(--spacing)*10)}}@media(min-width:48rem){.md\\:col-span-2{grid-column:span 2/span 2}.md\\:m-4{margin:calc(var(--spacing)*4)}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:gap-2{gap:calc(var(--spacing)*2)}.md\\:gap-4{gap:calc(var(--spacing)*4)}.md\\:px-0{padding-inline:calc(var(--spacing)*0)}.md\\:px-6{padding-inline:calc(var(--spacing)*6)}.md\\:pt-6{padding-top:calc(var(--spacing)*6)}.md\\:pb-6{padding-bottom:calc(var(--spacing)*6)}.md\\:text-lg{font-size:1.25em;line-height:var(--tw-leading,var(--text-lg--line-height))}.md\\:text-sm{font-size:.875em;line-height:var(--tw-leading,var(--text-sm--line-height))}}@media(min-width:64rem){.lg\\:mt-0{margin-top:calc(var(--spacing)*0)}.lg\\:flex{display:flex}.lg\\:text-6xl{font-size:var(--text-6xl);line-height:var(--tw-leading,var(--text-6xl--line-height))}}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#000F0D\\]{background-color:#000f0d}.dark\\:text-\\[\\#FFFFFF\\]{color:#fff}}@media(pointer:coarse){.pointer-coarse\\:hidden{display:none}}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}}:host{--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-outline-style:solid;--tw-font-weight:initial;--tw-tracking:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:rotateX(0);--tw-rotate-y:rotateY(0);--tw-rotate-z:rotateZ(0);--tw-skew-x:skewX(0);--tw-skew-y:skewY(0);--tw-space-x-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-duration:initial;--tw-ease:initial}.scroll-area{scroll-timeline:--scroll-timeline y;scroll-timeline:--scroll-timeline vertical;max-height:min(var(--skyra-option-list-max-height,400px),35vh);position:relative;overflow-y:auto}@media(min-width:1024px){.scroll-area{max-height:clamp(20vh,var(--skyra-option-list-max-height,400px),35vh)}}.scroll-area .scroll-area-up,.scroll-area .scroll-area-down{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.scroll-area .scroll-area-up,.scroll-area .scroll-area-down{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-bg-color),transparent 0%)80%,transparent)}}.scroll-area .scroll-area-up,.scroll-area .scroll-area-down{-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);cursor:pointer;border:none;justify-content:center;align-items:center;width:100%;height:1.5em;transition:background-color .2s,transform .1s,opacity .2s;display:flex;position:sticky;left:0;right:0}.scroll-area .scroll-area-up:hover,.scroll-area .scroll-area-down:hover{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.scroll-area .scroll-area-up:hover,.scroll-area .scroll-area-down:hover{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-bg-color),transparent 0%)90%,transparent)}}.scroll-area .scroll-area-up:focus,.scroll-area .scroll-area-down:focus{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.scroll-area .scroll-area-up:focus,.scroll-area .scroll-area-down:focus{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-bg-color),transparent 0%)90%,transparent)}}.scroll-area .scroll-area-up:focus,.scroll-area .scroll-area-down:focus{outline:2px solid var(--color-interface);outline-offset:-2px}.scroll-area .scroll-area-up:active,.scroll-area .scroll-area-down:active{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.scroll-area .scroll-area-up:active,.scroll-area .scroll-area-down:active{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-bg-color),transparent 0%)95%,transparent)}}.scroll-area .scroll-area-up:active,.scroll-area .scroll-area-down:active{transform:scale(.98)}.scroll-area-up{opacity:1;pointer-events:auto;top:-2px}.scroll-area-down{opacity:1;pointer-events:auto;bottom:-1px}.scroll-area[data-scrollable=false] .scroll-area-up,.scroll-area[data-scrollable=false] .scroll-area-down,.scroll-area[data-scrollable=unknown] .scroll-area-up,.scroll-area[data-scrollable=unknown] .scroll-area-down{opacity:0!important;pointer-events:none!important;display:none!important}.scroll-area[data-at-top=true] .scroll-area-up,.scroll-area[data-at-bottom=true] .scroll-area-down{opacity:0!important;pointer-events:none!important}@supports (animation-timeline:scroll()){.scroll-area-up{opacity:1;pointer-events:auto;animation:linear reveal-top;animation-timeline:--scroll-timeline;animation-range:0 1px}.scroll-area-down{animation:linear reveal-bottom;animation-timeline:--scroll-timeline;animation-range:entry exit 0%}}@keyframes reveal-top{0%{opacity:0;pointer-events:none}to{opacity:1;pointer-events:auto}}@keyframes reveal-bottom{0%{opacity:1;pointer-events:auto}to{opacity:0;pointer-events:none}}:host{--ease-out:cubic-bezier(.16,1,.3,1);--ease-out-soft:cubic-bezier(.33,1,.68,1);--duration-fast:.15s;--duration:.28s;--duration-slow:.5s}@keyframes content-enter{0%{opacity:0;transform:translate(8px)}to{opacity:1;transform:translate(0)}}.survey-content-enter{animation:content-enter var(--duration-slow)var(--ease-out)both}@keyframes wrapper-enter-up{0%{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes wrapper-enter-down{0%{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}@keyframes shake{0%{transform:translate(0)}25%{transform:translate(-6px)}50%{transform:translate(6px)}75%{transform:translate(-6px)}to{transform:translate(0)}}.survey-enter-up{animation:wrapper-enter-up var(--duration)var(--ease-out)both}.survey-enter-down{animation:wrapper-enter-down var(--duration)var(--ease-out)both}.survey-shake{animation:shake var(--duration)ease-in-out}.survey-container{interpolate-size:allow-keywords;border:var(--skyra-border-width,1px)var(--skyra-border-style,solid)var(--skyra-border-color,var(--skyra-action-color));grid-template:1fr/1fr;display:grid}@supports (color:color-mix(in lab,red,red)){.survey-container{border:var(--skyra-border-width,1px)var(--skyra-border-style,solid)var(--skyra-border-color,color-mix(in srgb,var(--skyra-action-color)50%,transparent))}}.survey-container{background:var(--skyra-bg-color);border-radius:var(--skyra-radius-lg,8px);box-shadow:var(--skyra-shadow-md,var(--skyra-shadow,0 0 20px 4px rgb(from var(--skyra-action-color)r g b/.25)));transition:background-color 0s,border-color var(--duration-fast)var(--ease-out-soft),border-radius var(--duration)var(--ease-out-soft),box-shadow var(--duration-fast)var(--ease-out-soft);overflow:hidden}.survey-container[data-minimized=true]{background:var(--skyra-minimized-bg);border-color:var(--skyra-minimized-border);border-radius:var(--skyra-radius-sm,4px);box-shadow:var(--skyra-minimized-shadow);transition:background-color 0s,border-color var(--duration)var(--ease-out-soft),border-radius var(--duration)var(--ease-out-soft),box-shadow var(--duration)var(--ease-out-soft)}.survey-content,.survey-pill{grid-area:1/1}.survey-content{width:min(var(--card-max-width,400px),calc(100vw - 32px));opacity:1;visibility:visible;height:auto;transition:opacity var(--duration)var(--ease-out-soft),visibility 0s,width var(--duration-fast)var(--ease-out),height var(--duration-fast)var(--ease-out);overflow:visible}.survey-container[data-minimized=true] .survey-content{opacity:0;visibility:hidden;pointer-events:none;width:0;height:0;transition:opacity var(--duration-fast)var(--ease-out-soft),visibility 0s var(--duration-fast),width 0s,height 0s;overflow:hidden}.survey-pill{color:var(--skyra-minimized-text);cursor:pointer;white-space:nowrap;opacity:0;visibility:hidden;width:0;height:0;transition:opacity var(--duration-fast)var(--ease-out-soft),visibility 0s var(--duration-fast),width 0s var(--duration-fast),height 0s var(--duration-fast);background:0 0;border:none;align-items:center;gap:8px;padding:8px;display:flex;overflow:hidden}.survey-container[data-minimized=true] .survey-pill{opacity:1;visibility:visible;width:auto;height:auto;transition:opacity var(--duration)var(--ease-out-soft),visibility 0s,width 0s,height 0s;overflow:visible}.survey-pill:hover{background-color:#ffffff1a}.survey-pill:focus-visible{outline:2px solid var(--skyra-bg-color);outline-offset:2px}@media(prefers-reduced-motion:reduce){.survey-container,.survey-content,.survey-pill{transition-duration:.01ms!important}.survey-content-enter,.survey-enter-up,.survey-enter-down,.survey-shake{animation:none!important}}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}`,
		P_ = "",
		A_ =
			"@layer components{@media(prefers-color-scheme:dark){:host{--skyra-bg-color: #00173a;--skyra-text-color: white;--skyra-interface-color: white;--skyra-action-color: white;--skyra-secondary-color: #3d4e5f;--skyra-link-color: #d7f0fe;--skyra-error-color: #ff5555;--skyra-warning-color: #feb570;--skyra-z-index: 2147483647}}}";
	function L_({
		inline: e = !1,
		children: t,
		size: n = "Regular",
		customCss: r,
		theme: o,
		themeMode: i,
		...s
	}) {
		const a = We(),
			c = s.position ?? "BottomLeft",
			l = Re(!0);
		as(() => {
			l.value = !1;
		});
		const d = vt(
				() => (o ? Ha(o, { themeMode: i ?? "Auto", selector: ":host" }) : null),
				[o, i],
			),
			u = {
				TopLeft: "top-0 right-auto",
				TopRight: "top-0 left-auto items-end",
				BottomLeft: "bottom-0 right-auto",
				BottomRight: "bottom-0 left-auto items-end",
			},
			p = {
				TopLeft: "survey-enter-down",
				TopRight: "survey-enter-down",
				BottomLeft: "survey-enter-up",
				BottomRight: "survey-enter-up",
			};
		return m(Ee, {
			children: [
				m("style", { children: [M_, e ? P_ : A_] }),
				d && m("style", { children: d }),
				m("style", { children: r }),
				m(
					"aside",
					{
						"data-nosnippet": !0,
						part: "wrapper",
						"data-position": c,
						className: `
          ${
						e === !1 &&
						`
            fixed inset-x-0
            m-2 md:m-4
            z-wrapper
            ${c ? u[c] : ""}
          `
					}
          font-body
          ${a.value ? "" : "survey-shake"}
          ${l.value ? p[c] : ""}
        `,
						children: t,
					},
					"skyra-wrapper",
				),
			],
		});
	}
	function O_({
		card: e,
		capture: t,
		finalCard: n,
		firstCard: r,
		sessionId: o,
		size: i,
		storedValue: s,
		survey: a,
	}) {
		return m(L_, {
			size: i,
			inline: a.renderType === "Inline",
			position: a.surveyPosition,
			customCss: a.customCss,
			theme: a.theme,
			themeMode: a.themeMode,
			children: m(R_, {
				card: e,
				sessionId: o,
				storedValue: s,
				close: () => t.send({ type: "reject" }),
				minimize: () => t.send({ type: "minimize" }),
				maximize: () => t.send({ type: "maximize" }),
				next: (c, l) => {
					t.send({ type: "submit", cardId: e.id, key: l, value: c });
				},
				prev: () => {
					t.send({ type: "goBack" });
				},
				survey: a,
				firstCard: r,
				finalCard: n,
			}),
		});
	}
	const ge = new Dw();
	if (typeof window < "u") {
		window.skyra || (window.skyra = ge),
			window.SKYRA_CONFIG ||
				(window.SKYRA_CONFIG = {
					autoStart: !0,
					org: "",
					cookieConsent: !0,
					testMode: !1,
				});
		const e =
				((Bc = window.SKYRA_CONFIG) == null ? void 0 : Bc.autoStart) !== !1,
			t = !!((Dc = window.SKYRA_CONFIG) != null && Dc.org);
		e && t
			? ge.start()
			: e && !t && console.warn("Skyra: org is not specified in SKYRA_CONFIG");
	}
	function N_(e, t) {
		if (t === void 0) return { card: e[0], isFirstCard: !0, isLastCard: !1 };
		let n,
			r = !1,
			o = !1;
		for (let i = 0; i < e.length; i++) {
			const s = e[i];
			if (s.order === t) {
				(n = s), (r = i === 0), (o = i === e.length - 1);
				break;
			}
		}
		return { card: n, isFirstCard: r, isLastCard: o };
	}
	function j_(e, t) {
		var r, o, i, s, a, c, l, d, u, p, f, g;
		if (!e) return;
		const n = X(e.id);
		switch (e.type) {
			case "InputCard":
				return (r = t.values) == null ? void 0 : r[e.id];
			case "RecruitmentCard":
				return (o = t.values) == null ? void 0 : o[e.id];
			case "LikertCard":
				return (s = (i = t.variables) == null ? void 0 : i.scales) == null
					? void 0
					: s[n];
			case "MultiSelectCard":
				return (c = (a = t.variables) == null ? void 0 : a.multiSelect) == null
					? void 0
					: c[n];
			case "SingleSelectCard":
				return (d = (l = t.variables) == null ? void 0 : l.singleSelect) == null
					? void 0
					: d[n];
			case "SegmentCard": {
				const y = X(e.segment.id);
				return (p = (u = t.variables) == null ? void 0 : u.segments) == null
					? void 0
					: p[y];
			}
			case "TopTaskCard":
				return (f = t.variables) == null ? void 0 : f.task;
			case "CompletionCard":
				return (g = t.variables) == null ? void 0 : g.completion;
			default:
				return;
		}
	}
	function pi({ capture: e }) {
		const {
			survey: t,
			sessionId: n,
			capturing: r,
			currentCard: o,
		} = ye(e, (i) => {
			var s;
			return {
				capturing:
					(s = i == null ? void 0 : i.matches) == null
						? void 0
						: s.call(i, "Running"),
				sessionId: i == null ? void 0 : i.context.sessionId,
				state: i == null ? void 0 : i.context.state,
				survey: i == null ? void 0 : i.context.survey,
				currentCard: i == null ? void 0 : i.context.state.currentCard,
			};
		});
		return r && t && n
			? m($u, {
					api: ge,
					survey: t,
					state: e.getSnapshot().context.state,
					captureMachine: e,
					children: m(B_, { currentCard: o, sessionId: n, capture: e }),
				})
			: null;
	}
	function B_({ currentCard: e, sessionId: t, capture: n }) {
		const r = Fn(),
			o = Xr(),
			i = ye(o, (p) => p.context.language),
			s = ye(o, (p) => p.context.state),
			{ card: a, isFirstCard: c, isLastCard: l } = N_(r.cards, e);
		if (!a) return null;
		const d = j_(a, s),
			u =
				a.type === "LikertCard" && a.likertScale.likertItems.length >= 5
					? "Large"
					: "Regular";
		return ge.getRendererVariant(r.fullSlug, r.rendererVariant ?? "classic") ===
			"beta"
			? m(
					i_,
					{
						card: a,
						capture: n,
						finalCard: l,
						firstCard: c,
						sessionId: t,
						storedValue: d,
						survey: r,
					},
					`${a.id}-${i}`,
				)
			: m(
					O_,
					{
						card: a,
						capture: n,
						finalCard: l,
						firstCard: c,
						sessionId: t,
						size: u,
						storedValue: d,
						survey: r,
					},
					`${a.id}-${i}`,
				);
	}
	function Nc({
		slug: e,
		inline: t,
		cookieConsent: n,
		consent: r = !0,
		lang: o,
		onReady: i,
		onUnavailable: s,
		onError: a,
	}) {
		const [c, l] = se(0),
			d = 30,
			u = ne(null),
			p = ne({ ready: !1, terminal: !1 });
		te(() => {
			o && ge.setExplicitLanguage(e, o);
		}, [e, o]),
			te(() => {
				var v;
				if (!ge.controller && c < d) {
					const _ = setInterval(() => {
						ge.controller ? (clearInterval(_), l(0)) : l((S) => S + 1);
					}, 100);
					return () => clearInterval(_);
				}
				c >= d &&
					!ge.controller &&
					(((v = window.SKYRA_CONFIG) == null ? void 0 : v.autoStart) !== !1 &&
						Fe(`Skyra survey (${e}): No controller found after ${d} attempts`),
					$n(p.current, qt(u.current), "skyra-error", Uw(e), a));
			}, [e, c, ge.controller, a]),
			te(() => {
				var I, P;
				const v = ge.controller;
				if (!v) return;
				const _ = `${e}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
					S = (I = v.getSnapshot) == null ? void 0 : I.call(v);
				if ((S == null ? void 0 : S.value) === "Ready") {
					v.send({ type: "surveyMounted", slug: e, instanceId: _ });
					return;
				}
				const C = () => {
					v.send({ type: "surveyMounted", slug: e, instanceId: _ });
				};
				return (
					(P = v.on) == null || P.call(v, "ready", C),
					() => {
						var N;
						(N = v.off) == null || N.call(v, "ready", C);
					}
				);
			}, [e, ge.controller]);
		const f = ge.controller;
		if (!f) return m("span", { ref: u, hidden: !0 });
		const g = f.getVersion() === "v2";
		if (
			(te(() => {
				g ||
					p.current.terminal ||
					$n(p.current, qt(u.current), "skyra-unavailable", Vw(e), s);
			}, [g, e, s]),
			!g)
		)
			return m("span", { ref: u, hidden: !0 });
		const y = ye(f.getActor(), (v) => f.findCaptureBySlug(e)),
			b = ye(f.getActor(), (v) => {
				var x, C, I;
				const _ =
						(x = v.context.surveys) == null
							? void 0
							: x.find((P) => P.fullSlug === e),
					S =
						(C = v.context.inlineSurveys) == null
							? void 0
							: C.some((P) => P.fullSlug === e);
				return {
					ready: v.value === "Ready",
					survey: _,
					isInlineEligible: S,
					failure: (I = v.context.inlineFailures) == null ? void 0 : I[e],
				};
			});
		return (
			te(() => {
				if (!y || p.current.ready || p.current.terminal) return;
				const v = y.getSnapshot(),
					_ = v.context.survey,
					S = v.context.sessionId;
				!_ ||
					_.renderType !== "Inline" ||
					!S ||
					Fw(
						p.current,
						qt(u.current),
						{ slug: e, surveyId: _.id, sessionId: S },
						i,
					);
			}, [y, e, i]),
			te(() => {
				if (!b.failure || p.current.ready || p.current.terminal) return;
				const v = Hw(e, b.failure);
				v.name === "skyra-unavailable"
					? $n(p.current, qt(u.current), v.name, v.detail, s)
					: $n(p.current, qt(u.current), v.name, v.detail, a);
			}, [b.failure, e, s, a]),
			te(() => {
				if (!b.ready || y || b.failure || p.current.ready || p.current.terminal)
					return;
				const v = window.setTimeout(() => {
					if (p.current.ready || p.current.terminal) return;
					const _ = Zw(e, b.survey, b.isInlineEligible);
					_ && $n(p.current, qt(u.current), "skyra-unavailable", _, s);
				}, 100);
				return () => window.clearTimeout(v);
			}, [y, b, e, s]),
			m(Ee, {
				children: [
					m("span", { ref: u, hidden: !0 }),
					y ? m(pi, { capture: y }) : null,
				],
			})
		);
	}
	function jc({ slug: e }) {
		const t = ge.previewController,
			n = ye(t ?? void 0, (r) => (r == null ? void 0 : r.context.machine));
		return n ? m(pi, { capture: n }) : null;
	}
	return (
		typeof customElements.get("skyra-survey") < "u" ||
			Ui(
				Nc,
				"skyra-survey",
				[
					"slug",
					"inline",
					"consent",
					"cookieConsent",
					"lang",
					"onReady",
					"onUnavailable",
					"onError",
				],
				{ shadow: !0 },
			),
		typeof customElements.get("skyra-preview") < "u" ||
			Ui(jc, "skyra-preview", ["slug"], { shadow: !0 }),
		(Kt.Survey = Nc),
		(Kt.SurveyPreview = jc),
		(Kt.SurveyWidget = pi),
		Object.defineProperty(Kt, Symbol.toStringTag, { value: "Module" }),
		Kt
	);
})({});
