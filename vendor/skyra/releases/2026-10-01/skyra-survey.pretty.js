var skyraSurvey = (function (pn) {
	"use strict";
	var pd, fd;
	var fn,
		H,
		Qi,
		es,
		mt,
		ts,
		ns,
		rs,
		os,
		fo,
		ho,
		mo,
		is,
		hn = {},
		ss = [],
		gd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
		Yn = Array.isArray;
	function Oe(e, t) {
		for (var n in t) e[n] = t[n];
		return e;
	}
	function go(e) {
		e && e.parentNode && e.parentNode.removeChild(e);
	}
	function It(e, t, n) {
		var r,
			o,
			i,
			s = {};
		for (i in t)
			i == "key" ? (r = t[i]) : i == "ref" ? (o = t[i]) : (s[i] = t[i]);
		if (
			(arguments.length > 2 &&
				(s.children = arguments.length > 3 ? fn.call(arguments, 2) : n),
			typeof e == "function" && e.defaultProps != null)
		)
			for (i in e.defaultProps) s[i] === void 0 && (s[i] = e.defaultProps[i]);
		return mn(e, s, r, o, null);
	}
	function mn(e, t, n, r, o) {
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
			__v: o ?? ++Qi,
			__i: -1,
			__u: 0,
		};
		return o == null && H.vnode != null && H.vnode(i), i;
	}
	function Le(e) {
		return e.children;
	}
	function gn(e, t) {
		(this.props = e), (this.context = t);
	}
	function $t(e, t) {
		if (t == null) return e.__ ? $t(e.__, e.__i + 1) : null;
		for (var n; t < e.__k.length; t++)
			if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
		return typeof e.type == "function" ? $t(e) : null;
	}
	function as(e) {
		var t, n;
		if ((e = e.__) != null && e.__c != null) {
			for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
				if ((n = e.__k[t]) != null && n.__e != null) {
					e.__e = e.__c.base = n.__e;
					break;
				}
			return as(e);
		}
	}
	function yo(e) {
		((!e.__d && (e.__d = !0) && mt.push(e) && !Xn.__r++) ||
			ts != H.debounceRendering) &&
			((ts = H.debounceRendering) || ns)(Xn);
	}
	function Xn() {
		for (var e, t, n, r, o, i, s, a = 1; mt.length; )
			mt.length > a && mt.sort(rs),
				(e = mt.shift()),
				(a = mt.length),
				e.__d &&
					((n = void 0),
					(r = void 0),
					(o = (r = (t = e).__v).__e),
					(i = []),
					(s = []),
					t.__P &&
						(((n = Oe({}, r)).__v = r.__v + 1),
						H.vnode && H.vnode(n),
						vo(
							t.__P,
							n,
							r,
							t.__n,
							t.__P.namespaceURI,
							32 & r.__u ? [o] : null,
							i,
							o ?? $t(r),
							!!(32 & r.__u),
							s,
						),
						(n.__v = r.__v),
						(n.__.__k[n.__i] = n),
						ps(i, n, s),
						(r.__e = r.__ = null),
						n.__e != o && as(n)));
		Xn.__r = 0;
	}
	function ls(e, t, n, r, o, i, s, a, l, c, d) {
		var u,
			p,
			f,
			h,
			g,
			b,
			v,
			_ = (r && r.__k) || ss,
			x = t.length;
		for (l = yd(n, t, _, l, x), u = 0; u < x; u++)
			(f = n.__k[u]) != null &&
				((p = f.__i == -1 ? hn : _[f.__i] || hn),
				(f.__i = u),
				(b = vo(e, f, p, o, i, s, a, l, c, d)),
				(h = f.__e),
				f.ref &&
					p.ref != f.ref &&
					(p.ref && wo(p.ref, null, f), d.push(f.ref, f.__c || h, f)),
				g == null && h != null && (g = h),
				(v = !!(4 & f.__u)) || p.__k === f.__k
					? (l = cs(f, l, e, v))
					: typeof f.type == "function" && b !== void 0
						? (l = b)
						: h && (l = h.nextSibling),
				(f.__u &= -7));
		return (n.__e = g), l;
	}
	function yd(e, t, n, r, o) {
		var i,
			s,
			a,
			l,
			c,
			d = n.length,
			u = d,
			p = 0;
		for (e.__k = new Array(o), i = 0; i < o; i++)
			(s = t[i]) != null && typeof s != "boolean" && typeof s != "function"
				? (typeof s == "string" ||
					typeof s == "number" ||
					typeof s == "bigint" ||
					s.constructor == String
						? (s = e.__k[i] = mn(null, s, null, null, null))
						: Yn(s)
							? (s = e.__k[i] = mn(Le, { children: s }, null, null, null))
							: s.constructor === void 0 && s.__b > 0
								? (s = e.__k[i] =
										mn(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v))
								: (e.__k[i] = s),
					(l = i + p),
					(s.__ = e),
					(s.__b = e.__b + 1),
					(a = null),
					(c = s.__i = vd(s, n, l, u)) != -1 &&
						(u--, (a = n[c]) && (a.__u |= 2)),
					a == null || a.__v == null
						? (c == -1 && (o > d ? p-- : o < d && p++),
							typeof s.type != "function" && (s.__u |= 4))
						: c != l &&
							(c == l - 1
								? p--
								: c == l + 1
									? p++
									: (c > l ? p-- : p++, (s.__u |= 4))))
				: (e.__k[i] = null);
		if (u)
			for (i = 0; i < d; i++)
				(a = n[i]) != null &&
					(2 & a.__u) == 0 &&
					(a.__e == r && (r = $t(a)), hs(a, a));
		return r;
	}
	function cs(e, t, n, r) {
		var o, i;
		if (typeof e.type == "function") {
			for (o = e.__k, i = 0; o && i < o.length; i++)
				o[i] && ((o[i].__ = e), (t = cs(o[i], t, n, r)));
			return t;
		}
		e.__e != t &&
			(r &&
				(t && e.type && !t.parentNode && (t = $t(e)),
				n.insertBefore(e.__e, t || null)),
			(t = e.__e));
		do t = t && t.nextSibling;
		while (t != null && t.nodeType == 8);
		return t;
	}
	function vd(e, t, n, r) {
		var o,
			i,
			s,
			a = e.key,
			l = e.type,
			c = t[n],
			d = c != null && (2 & c.__u) == 0;
		if ((c === null && a == null) || (d && a == c.key && l == c.type)) return n;
		if (r > (d ? 1 : 0)) {
			for (o = n - 1, i = n + 1; o >= 0 || i < t.length; )
				if (
					(c = t[(s = o >= 0 ? o-- : i++)]) != null &&
					(2 & c.__u) == 0 &&
					a == c.key &&
					l == c.type
				)
					return s;
		}
		return -1;
	}
	function us(e, t, n) {
		t[0] == "-"
			? e.setProperty(t, n ?? "")
			: (e[t] =
					n == null ? "" : typeof n != "number" || gd.test(t) ? n : n + "px");
	}
	function Qn(e, t, n, r, o) {
		var i, s;
		e: if (t == "style")
			if (typeof n == "string") e.style.cssText = n;
			else {
				if ((typeof r == "string" && (e.style.cssText = r = ""), r))
					for (t in r) (n && t in n) || us(e.style, t, "");
				if (n) for (t in n) (r && n[t] == r[t]) || us(e.style, t, n[t]);
			}
		else if (t[0] == "o" && t[1] == "n")
			(i = t != (t = t.replace(os, "$1"))),
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
						: ((n.u = fo), e.addEventListener(t, i ? mo : ho, i))
					: e.removeEventListener(t, i ? mo : ho, i);
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
	function ds(e) {
		return function (t) {
			if (this.l) {
				var n = this.l[t.type + e];
				if (t.t == null) t.t = fo++;
				else if (t.t < n.u) return;
				return n(H.event ? H.event(t) : t);
			}
		};
	}
	function vo(e, t, n, r, o, i, s, a, l, c) {
		var d,
			u,
			p,
			f,
			h,
			g,
			b,
			v,
			_,
			x,
			S,
			A,
			I,
			O,
			M,
			N,
			B,
			$ = t.type;
		if (t.constructor !== void 0) return null;
		128 & n.__u && ((l = !!(32 & n.__u)), (i = [(a = t.__e = n.__e)])),
			(d = H.__b) && d(t);
		e: if (typeof $ == "function")
			try {
				if (
					((v = t.props),
					(_ = "prototype" in $ && $.prototype.render),
					(x = (d = $.contextType) && r[d.__c]),
					(S = d ? (x ? x.props.value : d.__) : r),
					n.__c
						? (b = (u = t.__c = n.__c).__ = u.__E)
						: (_
								? (t.__c = u = new $(v, S))
								: ((t.__c = u = new gn(v, S)),
									(u.constructor = $),
									(u.render = wd)),
							x && x.sub(u),
							u.state || (u.state = {}),
							(u.__n = r),
							(p = u.__d = !0),
							(u.__h = []),
							(u._sb = [])),
					_ && u.__s == null && (u.__s = u.state),
					_ &&
						$.getDerivedStateFromProps != null &&
						(u.__s == u.state && (u.__s = Oe({}, u.__s)),
						Oe(u.__s, $.getDerivedStateFromProps(v, u.__s))),
					(f = u.props),
					(h = u.state),
					(u.__v = t),
					p)
				)
					_ &&
						$.getDerivedStateFromProps == null &&
						u.componentWillMount != null &&
						u.componentWillMount(),
						_ && u.componentDidMount != null && u.__h.push(u.componentDidMount);
				else {
					if (
						(_ &&
							$.getDerivedStateFromProps == null &&
							v !== f &&
							u.componentWillReceiveProps != null &&
							u.componentWillReceiveProps(v, S),
						t.__v == n.__v ||
							(!u.__e &&
								u.shouldComponentUpdate != null &&
								u.shouldComponentUpdate(v, u.__s, S) === !1))
					) {
						for (
							t.__v != n.__v &&
								((u.props = v), (u.state = u.__s), (u.__d = !1)),
								t.__e = n.__e,
								t.__k = n.__k,
								t.__k.some(function (D) {
									D && (D.__ = t);
								}),
								A = 0;
							A < u._sb.length;
							A++
						)
							u.__h.push(u._sb[A]);
						(u._sb = []), u.__h.length && s.push(u);
						break e;
					}
					u.componentWillUpdate != null && u.componentWillUpdate(v, u.__s, S),
						_ &&
							u.componentDidUpdate != null &&
							u.__h.push(function () {
								u.componentDidUpdate(f, h, g);
							});
				}
				if (
					((u.context = S),
					(u.props = v),
					(u.__P = e),
					(u.__e = !1),
					(I = H.__r),
					(O = 0),
					_)
				) {
					for (
						u.state = u.__s,
							u.__d = !1,
							I && I(t),
							d = u.render(u.props, u.state, u.context),
							M = 0;
						M < u._sb.length;
						M++
					)
						u.__h.push(u._sb[M]);
					u._sb = [];
				} else
					do
						(u.__d = !1),
							I && I(t),
							(d = u.render(u.props, u.state, u.context)),
							(u.state = u.__s);
					while (u.__d && ++O < 25);
				(u.state = u.__s),
					u.getChildContext != null && (r = Oe(Oe({}, r), u.getChildContext())),
					_ &&
						!p &&
						u.getSnapshotBeforeUpdate != null &&
						(g = u.getSnapshotBeforeUpdate(f, h)),
					(N = d),
					d != null &&
						d.type === Le &&
						d.key == null &&
						(N = fs(d.props.children)),
					(a = ls(e, Yn(N) ? N : [N], t, n, r, o, i, s, a, l, c)),
					(u.base = t.__e),
					(t.__u &= -161),
					u.__h.length && s.push(u),
					b && (u.__E = u.__ = null);
			} catch (D) {
				if (((t.__v = null), l || i != null))
					if (D.then) {
						for (
							t.__u |= l ? 160 : 128;
							a && a.nodeType == 8 && a.nextSibling;
						)
							a = a.nextSibling;
						(i[i.indexOf(a)] = null), (t.__e = a);
					} else {
						for (B = i.length; B--; ) go(i[B]);
						bo(t);
					}
				else (t.__e = n.__e), (t.__k = n.__k), D.then || bo(t);
				H.__e(D, t, n);
			}
		else
			i == null && t.__v == n.__v
				? ((t.__k = n.__k), (t.__e = n.__e))
				: (a = t.__e = bd(n.__e, t, n, r, o, i, s, l, c));
		return (d = H.diffed) && d(t), 128 & t.__u ? void 0 : a;
	}
	function bo(e) {
		e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(bo);
	}
	function ps(e, t, n) {
		for (var r = 0; r < n.length; r++) wo(n[r], n[++r], n[++r]);
		H.__c && H.__c(t, e),
			e.some(function (o) {
				try {
					(e = o.__h),
						(o.__h = []),
						e.some(function (i) {
							i.call(o);
						});
				} catch (i) {
					H.__e(i, o.__v);
				}
			});
	}
	function fs(e) {
		return typeof e != "object" || e == null || (e.__b && e.__b > 0)
			? e
			: Yn(e)
				? e.map(fs)
				: Oe({}, e);
	}
	function bd(e, t, n, r, o, i, s, a, l) {
		var c,
			d,
			u,
			p,
			f,
			h,
			g,
			b = n.props || hn,
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
			for (c = 0; c < i.length; c++)
				if (
					(f = i[c]) &&
					"setAttribute" in f == !!_ &&
					(_ ? f.localName == _ : f.nodeType == 3)
				) {
					(e = f), (i[c] = null);
					break;
				}
		}
		if (e == null) {
			if (_ == null) return document.createTextNode(v);
			(e = document.createElementNS(o, _, v.is && v)),
				a && (H.__m && H.__m(t, i), (a = !1)),
				(i = null);
		}
		if (_ == null) b === v || (a && e.data == v) || (e.data = v);
		else {
			if (((i = i && fn.call(e.childNodes)), !a && i != null))
				for (b = {}, c = 0; c < e.attributes.length; c++)
					b[(f = e.attributes[c]).name] = f.value;
			for (c in b)
				if (((f = b[c]), c != "children")) {
					if (c == "dangerouslySetInnerHTML") u = f;
					else if (!(c in v)) {
						if (
							(c == "value" && "defaultValue" in v) ||
							(c == "checked" && "defaultChecked" in v)
						)
							continue;
						Qn(e, c, null, f, o);
					}
				}
			for (c in v)
				(f = v[c]),
					c == "children"
						? (p = f)
						: c == "dangerouslySetInnerHTML"
							? (d = f)
							: c == "value"
								? (h = f)
								: c == "checked"
									? (g = f)
									: (a && typeof f != "function") ||
										b[c] === f ||
										Qn(e, c, f, b[c], o);
			if (d)
				a ||
					(u && (d.__html == u.__html || d.__html == e.innerHTML)) ||
					(e.innerHTML = d.__html),
					(t.__k = []);
			else if (
				(u && (e.innerHTML = ""),
				ls(
					t.type == "template" ? e.content : e,
					Yn(p) ? p : [p],
					t,
					n,
					r,
					_ == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o,
					i,
					s,
					i ? i[0] : n.__k && $t(n, 0),
					a,
					l,
				),
				i != null)
			)
				for (c = i.length; c--; ) go(i[c]);
			a ||
				((c = "value"),
				_ == "progress" && h == null
					? e.removeAttribute("value")
					: h != null &&
						(h !== e[c] ||
							(_ == "progress" && !h) ||
							(_ == "option" && h != b[c])) &&
						Qn(e, c, h, b[c], o),
				(c = "checked"),
				g != null && g != e[c] && Qn(e, c, g, b[c], o));
		}
		return e;
	}
	function wo(e, t, n) {
		try {
			if (typeof e == "function") {
				var r = typeof e.__u == "function";
				r && e.__u(), (r && t == null) || (e.__u = e(t));
			} else e.current = t;
		} catch (o) {
			H.__e(o, n);
		}
	}
	function hs(e, t, n) {
		var r, o;
		if (
			(H.unmount && H.unmount(e),
			(r = e.ref) && ((r.current && r.current != e.__e) || wo(r, null, t)),
			(r = e.__c) != null)
		) {
			if (r.componentWillUnmount)
				try {
					r.componentWillUnmount();
				} catch (i) {
					H.__e(i, t);
				}
			r.base = r.__P = null;
		}
		if ((r = e.__k))
			for (o = 0; o < r.length; o++)
				r[o] && hs(r[o], t, n || typeof e.type != "function");
		n || go(e.__e), (e.__c = e.__ = e.__e = void 0);
	}
	function wd(e, t, n) {
		return this.constructor(e, n);
	}
	function er(e, t, n) {
		var r, o, i, s;
		t == document && (t = document.documentElement),
			H.__ && H.__(e, t),
			(o = (r = typeof n == "function") ? null : (n && n.__k) || t.__k),
			(i = []),
			(s = []),
			vo(
				t,
				(e = ((!r && n) || t).__k = It(Le, null, [e])),
				o || hn,
				hn,
				t.namespaceURI,
				!r && n ? [n] : o ? null : t.firstChild ? fn.call(t.childNodes) : null,
				i,
				!r && n ? n : o ? o.__e : t.firstChild,
				r,
				s,
			),
			ps(i, e, s);
	}
	function ms(e, t) {
		er(e, t, ms);
	}
	function gs(e, t, n) {
		var r,
			o,
			i,
			s,
			a = Oe({}, e.props);
		for (i in (e.type && e.type.defaultProps && (s = e.type.defaultProps), t))
			i == "key"
				? (r = t[i])
				: i == "ref"
					? (o = t[i])
					: (a[i] = t[i] === void 0 && s != null ? s[i] : t[i]);
		return (
			arguments.length > 2 &&
				(a.children = arguments.length > 3 ? fn.call(arguments, 2) : n),
			mn(e.type, a, r || e.key, o || e.ref, null)
		);
	}
	function _d(e) {
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
								(s.__e = !0), yo(s);
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
			(t.__c = "__cC" + is++),
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
	(fn = ss.slice),
		(H = {
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
		(Qi = 0),
		(es = function (e) {
			return e != null && e.constructor === void 0;
		}),
		(gn.prototype.setState = function (e, t) {
			var n;
			(n =
				this.__s != null && this.__s != this.state
					? this.__s
					: (this.__s = Oe({}, this.state))),
				typeof e == "function" && (e = e(Oe({}, n), this.props)),
				e && Oe(n, e),
				e != null && this.__v && (t && this._sb.push(t), yo(this));
		}),
		(gn.prototype.forceUpdate = function (e) {
			this.__v && ((this.__e = !0), e && this.__h.push(e), yo(this));
		}),
		(gn.prototype.render = Le),
		(mt = []),
		(ns =
			typeof Promise == "function"
				? Promise.prototype.then.bind(Promise.resolve())
				: setTimeout),
		(rs = function (e, t) {
			return e.__v.__b - t.__v.__b;
		}),
		(Xn.__r = 0),
		(os = /(PointerCapture)$|Capture$/i),
		(fo = 0),
		(ho = ds(!1)),
		(mo = ds(!0)),
		(is = 0);
	var gt,
		q,
		_o,
		ys,
		yn = 0,
		vs = [],
		oe = H,
		bs = oe.__b,
		ws = oe.__r,
		_s = oe.diffed,
		ks = oe.__c,
		Ss = oe.unmount,
		xs = oe.__;
	function vn(e, t) {
		oe.__h && oe.__h(q, e, yn || t), (yn = 0);
		var n = q.__H || (q.__H = { __: [], __h: [] });
		return e >= n.__.length && n.__.push({}), n.__[e];
	}
	function ge(e) {
		return (yn = 1), Cs(Is, e);
	}
	function Cs(e, t, n) {
		var r = vn(gt++, 2);
		if (
			((r.t = e),
			!r.__c &&
				((r.__ = [
					Is(void 0, t),
					function (a) {
						var l = r.__N ? r.__N[0] : r.__[0],
							c = r.t(l, a);
						l !== c && ((r.__N = [c, r.__[1]]), r.__c.setState({}));
					},
				]),
				(r.__c = q),
				!q.__f))
		) {
			var o = function (a, l, c) {
				if (!r.__c.__H) return !0;
				var d = r.__c.__H.__.filter(function (p) {
					return !!p.__c;
				});
				if (
					d.every(function (p) {
						return !p.__N;
					})
				)
					return !i || i.call(this, a, l, c);
				var u = r.__c.props !== a;
				return (
					d.forEach(function (p) {
						if (p.__N) {
							var f = p.__[0];
							(p.__ = p.__N), (p.__N = void 0), f !== p.__[0] && (u = !0);
						}
					}),
					(i && i.call(this, a, l, c)) || u
				);
			};
			q.__f = !0;
			var i = q.shouldComponentUpdate,
				s = q.componentWillUpdate;
			(q.componentWillUpdate = function (a, l, c) {
				if (this.__e) {
					var d = i;
					(i = void 0), o(a, l, c), (i = d);
				}
				s && s.call(this, a, l, c);
			}),
				(q.shouldComponentUpdate = o);
		}
		return r.__N || r.__;
	}
	function ie(e, t) {
		var n = vn(gt++, 3);
		!oe.__s && So(n.__H, t) && ((n.__ = e), (n.u = t), q.__H.__h.push(n));
	}
	function kd(e, t) {
		var n = vn(gt++, 4);
		!oe.__s && So(n.__H, t) && ((n.__ = e), (n.u = t), q.__h.push(n));
	}
	function X(e) {
		return (
			(yn = 5),
			Et(function () {
				return { current: e };
			}, [])
		);
	}
	function Et(e, t) {
		var n = vn(gt++, 7);
		return So(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
	}
	function zs(e, t) {
		return (
			(yn = 8),
			Et(function () {
				return e;
			}, t)
		);
	}
	function tr(e) {
		var t = q.context[e.__c],
			n = vn(gt++, 9);
		return (
			(n.c = e),
			t ? (n.__ == null && ((n.__ = !0), t.sub(q)), t.props.value) : e.__
		);
	}
	function Sd() {
		for (var e; (e = vs.shift()); )
			if (e.__P && e.__H)
				try {
					e.__H.__h.forEach(nr), e.__H.__h.forEach(ko), (e.__H.__h = []);
				} catch (t) {
					(e.__H.__h = []), oe.__e(t, e.__v);
				}
	}
	(oe.__b = function (e) {
		(q = null), bs && bs(e);
	}),
		(oe.__ = function (e, t) {
			e && t.__k && t.__k.__m && (e.__m = t.__k.__m), xs && xs(e, t);
		}),
		(oe.__r = function (e) {
			ws && ws(e), (gt = 0);
			var t = (q = e.__c).__H;
			t &&
				(_o === q
					? ((t.__h = []),
						(q.__h = []),
						t.__.forEach(function (n) {
							n.__N && (n.__ = n.__N), (n.u = n.__N = void 0);
						}))
					: (t.__h.forEach(nr), t.__h.forEach(ko), (t.__h = []), (gt = 0))),
				(_o = q);
		}),
		(oe.diffed = function (e) {
			_s && _s(e);
			var t = e.__c;
			t &&
				t.__H &&
				(t.__H.__h.length &&
					((vs.push(t) !== 1 && ys === oe.requestAnimationFrame) ||
						((ys = oe.requestAnimationFrame) || xd)(Sd)),
				t.__H.__.forEach(function (n) {
					n.u && (n.__H = n.u), (n.u = void 0);
				})),
				(_o = q = null);
		}),
		(oe.__c = function (e, t) {
			t.some(function (n) {
				try {
					n.__h.forEach(nr),
						(n.__h = n.__h.filter(function (r) {
							return !r.__ || ko(r);
						}));
				} catch (r) {
					t.some(function (o) {
						o.__h && (o.__h = []);
					}),
						(t = []),
						oe.__e(r, n.__v);
				}
			}),
				ks && ks(e, t);
		}),
		(oe.unmount = function (e) {
			Ss && Ss(e);
			var t,
				n = e.__c;
			n &&
				n.__H &&
				(n.__H.__.forEach(function (r) {
					try {
						nr(r);
					} catch (o) {
						t = o;
					}
				}),
				(n.__H = void 0),
				t && oe.__e(t, n.__v));
		});
	var Ts = typeof requestAnimationFrame == "function";
	function xd(e) {
		var t,
			n = function () {
				clearTimeout(r), Ts && cancelAnimationFrame(t), setTimeout(e);
			},
			r = setTimeout(n, 35);
		Ts && (t = requestAnimationFrame(n));
	}
	function nr(e) {
		var t = q,
			n = e.__c;
		typeof n == "function" && ((e.__c = void 0), n()), (q = t);
	}
	function ko(e) {
		var t = q;
		(e.__c = e.__()), (q = t);
	}
	function So(e, t) {
		return (
			!e ||
			e.length !== t.length ||
			t.some(function (n, r) {
				return n !== e[r];
			})
		);
	}
	function Is(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function rr() {
		return (
			(rr = Object.assign
				? Object.assign.bind()
				: function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
					}),
			rr.apply(this, arguments)
		);
	}
	function $s(e, t) {
		if (e == null) return {};
		var n,
			r,
			o = {},
			i = Object.keys(e);
		for (r = 0; r < i.length; r++) t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
		return o;
	}
	var Cd = ["context", "children"],
		zd = ["useFragment"];
	function Es(e, t, n, r) {
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
				Id.call(this, r);
			}),
			(o.prototype.attributeChangedCallback = $d),
			(o.prototype.disconnectedCallback = Ed),
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
	function Td(e) {
		this.getChildContext = function () {
			return e.context;
		};
		var t = e.children,
			n = $s(e, Cd);
		return gs(t, n);
	}
	function Id(e) {
		var t = new CustomEvent("_preact", {
			detail: {},
			bubbles: !0,
			cancelable: !0,
		});
		this.dispatchEvent(t),
			(this._vdom = It(
				Td,
				rr({}, this._props, { context: t.detail.context }),
				As(this, this._vdomComponent, e),
			)),
			(this.hasAttribute("hydrate") ? ms : er)(this._vdom, this._root);
	}
	function Rs(e) {
		return e.replace(/-(\w)/g, function (t, n) {
			return n ? n.toUpperCase() : "";
		});
	}
	function $d(e, t, n) {
		if (this._vdom) {
			var r = {};
			(r[e] = n = n ?? void 0),
				(r[Rs(e)] = n),
				(this._vdom = gs(this._vdom, r)),
				er(this._vdom, this._root);
		}
	}
	function Ed() {
		er((this._vdom = null), this._root);
	}
	function Ms(e, t) {
		var n = this,
			r = e.useFragment,
			o = $s(e, zd);
		return It(
			r ? Le : "slot",
			rr({}, o, {
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
	function As(e, t, n) {
		if (e.nodeType === 3) return e.data;
		if (e.nodeType !== 1) return null;
		var r = [],
			o = {},
			i = 0,
			s = e.attributes,
			a = e.childNodes;
		for (i = s.length; i--; )
			s[i].name !== "slot" &&
				((o[s[i].name] = s[i].value), (o[Rs(s[i].name)] = s[i].value));
		for (i = a.length; i--; ) {
			var l = As(a[i], null, n),
				c = a[i].slot;
			c ? (o[c] = It(Ms, { name: c }, l)) : (r[i] = l);
		}
		var d = !(!n || !n.shadow),
			u = t ? It(Ms, { useFragment: !d }, r) : r;
		return (
			!d && t && (e.innerHTML = ""), It(t || e.nodeName.toLowerCase(), o, u)
		);
	}
	function Rd(e) {
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
	function Ps(e) {
		const t = Object.values(e).filter((r) => typeof r == "number");
		return Object.entries(e)
			.filter(([r, o]) => t.indexOf(+r) === -1)
			.map(([r, o]) => o);
	}
	function Os(e, t = "|") {
		return e.map((n) => Bs(n)).join(t);
	}
	function xo(e, t) {
		return typeof t == "bigint" ? t.toString() : t;
	}
	function or(e) {
		return {
			get value() {
				{
					const t = e();
					return Object.defineProperty(this, "value", { value: t }), t;
				}
			},
		};
	}
	function Md(e) {
		return e == null;
	}
	function Co(e) {
		const t = e.startsWith("^") ? 1 : 0,
			n = e.endsWith("$") ? e.length - 1 : e.length;
		return e.slice(t, n);
	}
	function Ad(e, t) {
		const n = e / t,
			r = Math.round(n),
			o = 4 * Number.EPSILON * Math.max(Math.abs(n), 1);
		return Math.abs(n - r) < o ? 0 : n - r;
	}
	const Ls = Symbol("evaluating");
	function Pd(e, t, n) {
		let r;
		Object.defineProperty(e, t, {
			get() {
				if (r !== Ls) return r === void 0 && ((r = Ls), (r = n())), r;
			},
			set(o) {
				Object.defineProperty(e, t, { value: o });
			},
			configurable: !0,
		});
	}
	function ye(e, t, n) {
		Object.defineProperty(e, t, {
			value: n,
			writable: !0,
			enumerable: !0,
			configurable: !0,
		});
	}
	function Ye(...e) {
		const t = {};
		for (const n of e) {
			const r = Object.getOwnPropertyDescriptors(n);
			Object.assign(t, r);
		}
		return Object.defineProperties({}, t);
	}
	function Od(e) {
		return JSON.stringify(e);
	}
	function Ld(e) {
		return e
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, "")
			.replace(/[\s_-]+/g, "-")
			.replace(/^-+|-+$/g, "");
	}
	const Ns =
		"captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
	function bn(e) {
		return typeof e == "object" && e !== null && !Array.isArray(e);
	}
	const Nd = or(() => {
		var e;
		if (
			xe.jitless ||
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
	function Rt(e) {
		if (bn(e) === !1) return !1;
		const t = e.constructor;
		if (t === void 0 || typeof t != "function") return !0;
		const n = t.prototype;
		return !(
			bn(n) === !1 ||
			Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1
		);
	}
	function js(e) {
		return Rt(e)
			? { ...e }
			: Array.isArray(e)
				? [...e]
				: e instanceof Map
					? new Map(e)
					: e instanceof Set
						? new Set(e)
						: e;
	}
	const jd = new Set(["string", "number", "symbol"]);
	function Mt(e) {
		return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
	function Xe(e, t, n) {
		const r = new e._zod.constr(t ?? e._zod.def);
		return (!t || (n != null && n.parent)) && (r._zod.parent = e), r;
	}
	function R(e) {
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
	function Bs(e) {
		return typeof e == "bigint"
			? e.toString() + "n"
			: typeof e == "string"
				? `"${e}"`
				: `${e}`;
	}
	function Bd(e) {
		return Object.keys(e).filter(
			(t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional",
		);
	}
	const Dd = {
		safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
		int32: [-2147483648, 2147483647],
		uint32: [0, 4294967295],
		float32: [-34028234663852886e22, 34028234663852886e22],
		float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
	};
	function Fd(e, t) {
		const n = e._zod.def,
			r = n.checks;
		if (r && r.length > 0)
			throw new Error(
				".pick() cannot be used on object schemas containing refinements",
			);
		const i = Ye(e._zod.def, {
			get shape() {
				const s = {};
				for (const a of Reflect.ownKeys(t)) {
					if (!Object.prototype.hasOwnProperty.call(n.shape, a))
						throw new Error(`Unrecognized key: "${String(a)}"`);
					t[a] && ye(s, a, n.shape[a]);
				}
				return ye(this, "shape", s), s;
			},
			checks: [],
		});
		return Xe(e, i);
	}
	function Ud(e, t) {
		const n = e._zod.def,
			r = n.checks;
		if (r && r.length > 0)
			throw new Error(
				".omit() cannot be used on object schemas containing refinements",
			);
		const i = Ye(e._zod.def, {
			get shape() {
				const s = { ...e._zod.def.shape };
				for (const a of Reflect.ownKeys(t)) {
					if (!Object.prototype.hasOwnProperty.call(n.shape, a))
						throw new Error(`Unrecognized key: "${String(a)}"`);
					t[a] && delete s[a];
				}
				return ye(this, "shape", s), s;
			},
			checks: [],
		});
		return Xe(e, i);
	}
	function Hd(e, t) {
		if (!Rt(t))
			throw new Error("Invalid input to extend: expected a plain object");
		const n = e._zod.def.checks;
		if (n && n.length > 0) {
			const i = e._zod.def.shape;
			for (const s of Reflect.ownKeys(t))
				if (Object.getOwnPropertyDescriptor(i, s) !== void 0)
					throw new Error(
						"Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
					);
		}
		const o = Ye(e._zod.def, {
			get shape() {
				const i = { ...e._zod.def.shape, ...t };
				return ye(this, "shape", i), i;
			},
		});
		return Xe(e, o);
	}
	function Zd(e, t) {
		if (!Rt(t))
			throw new Error("Invalid input to safeExtend: expected a plain object");
		const n = Ye(e._zod.def, {
			get shape() {
				const r = { ...e._zod.def.shape, ...t };
				return ye(this, "shape", r), r;
			},
		});
		return Xe(e, n);
	}
	function Vd(e, t) {
		var r, o;
		if (!((r = t == null ? void 0 : t._zod) != null && r.def))
			throw new Error(
				"Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.",
			);
		if ((o = e._zod.def.checks) != null && o.length)
			throw new Error(
				".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.",
			);
		const n = Ye(e._zod.def, {
			get shape() {
				const i = { ...e._zod.def.shape, ...t._zod.def.shape };
				return ye(this, "shape", i), i;
			},
			get catchall() {
				return t._zod.def.catchall;
			},
			checks: t._zod.def.checks ?? [],
		});
		return Xe(e, n);
	}
	function Ds(e, t, n, r = "partial") {
		const i = t._zod.def.checks;
		if (i && i.length > 0)
			throw new Error(
				`.${r}() cannot be used on object schemas containing refinements`,
			);
		const a = Ye(t._zod.def, {
			get shape() {
				const l = t._zod.def.shape,
					c = { ...l };
				if (n)
					for (const d of Reflect.ownKeys(n)) {
						if (!Object.prototype.hasOwnProperty.call(l, d))
							throw new Error(`Unrecognized key: "${String(d)}"`);
						n[d] &&
							(c[d] = e ? new e({ type: "optional", innerType: l[d] }) : l[d]);
					}
				else
					for (const d of Reflect.ownKeys(l))
						c[d] = e ? new e({ type: "optional", innerType: l[d] }) : l[d];
				return ye(this, "shape", c), c;
			},
			checks: [],
		});
		return Xe(t, a);
	}
	function Wd(e, t, n) {
		const r = Ye(t._zod.def, {
			get shape() {
				const o = t._zod.def.shape,
					i = { ...o };
				if (n)
					for (const s of Reflect.ownKeys(n)) {
						if (!Object.prototype.hasOwnProperty.call(i, s))
							throw new Error(`Unrecognized key: "${String(s)}"`);
						n[s] && (i[s] = new e({ type: "nonoptional", innerType: o[s] }));
					}
				else
					for (const s of Reflect.ownKeys(o))
						i[s] = new e({ type: "nonoptional", innerType: o[s] });
				return ye(this, "shape", i), i;
			},
		});
		return Xe(t, r);
	}
	function At(e, t = 0) {
		var n;
		if (e.aborted === !0) return !0;
		for (let r = t; r < e.issues.length; r++)
			if (((n = e.issues[r]) == null ? void 0 : n.continue) !== !0) return !0;
		return !1;
	}
	function qd(e, t = 0) {
		var n;
		if (e.aborted === !0) return !0;
		for (let r = t; r < e.issues.length; r++)
			if (((n = e.issues[r]) == null ? void 0 : n.continue) === !1) return !0;
		return !1;
	}
	function Qe(e, t) {
		return t.map((n) => {
			var r;
			return (r = n).path ?? (r.path = []), n.path.unshift(e), n;
		});
	}
	function wn(e) {
		return typeof e == "string" ? e : e == null ? void 0 : e.message;
	}
	function Fs(e, t, n) {
		var r;
		for (let o = t; o < e.length; o++) (r = e[o]).schema ?? (r.schema = n);
	}
	function et(e, t, n) {
		var p, f, h, g, b, v, _, x, S, A;
		var r;
		const o =
			(f = (p = e.inst) == null ? void 0 : p._zod) == null ? void 0 : f.traits;
		o != null &&
			o.has("$ZodType") &&
			(o.has("$ZodCheck")
				? ((r = e).schema ?? (r.schema = e.inst))
				: (e.schema = e.inst));
		const i =
				e.schema !== e.inst
					? (g = (h = e.schema) == null ? void 0 : h._zod.def) == null
						? void 0
						: g.error
					: void 0,
			s = e.message
				? e.message
				: (wn(
						(_ =
							(v = (b = e.inst) == null ? void 0 : b._zod.def) == null
								? void 0
								: v.error) == null
							? void 0
							: _.call(v, e),
					) ??
					wn(i == null ? void 0 : i(e)) ??
					wn(
						(x = t == null ? void 0 : t.error) == null ? void 0 : x.call(t, e),
					) ??
					wn((S = n.customError) == null ? void 0 : S.call(n, e)) ??
					wn((A = n.localeError) == null ? void 0 : A.call(n, e)) ??
					"Invalid input"),
			{ inst: a, schema: l, continue: c, input: d, ...u } = e;
		return (
			u.path ?? (u.path = []),
			(u.message = s),
			t != null && t.reportInput && (u.input = d),
			u
		);
	}
	const Kd = /[\uD800-\uDBFF]/;
	function zo(e) {
		const t = e.length;
		if (!Kd.test(e)) return t;
		let n = t;
		for (let r = 0; r < t - 1; r++)
			(e.charCodeAt(r) & 64512) === 55296 &&
				(e.charCodeAt(r + 1) & 64512) === 56320 &&
				(n--, r++);
		return n;
	}
	function To(e) {
		return Array.isArray(e)
			? "array"
			: typeof e == "string"
				? "string"
				: "unknown";
	}
	function Jd(e) {
		const t = typeof e;
		switch (t) {
			case "number":
				return Number.isNaN(e) ? "nan" : "number";
			case "object": {
				if (e === null) return "null";
				if (Array.isArray(e)) return "array";
				const n = e;
				if (
					n &&
					Object.getPrototypeOf(n) !== Object.prototype &&
					"constructor" in n &&
					n.constructor
				)
					return n.constructor.name;
			}
		}
		return t;
	}
	function _n(...e) {
		const [t, n, r] = e;
		return typeof t == "string"
			? { message: t, code: "custom", input: n, inst: r }
			: { ...t };
	}
	function Gd(e, t) {
		for (const n in t) {
			const r = Object.getOwnPropertyDescriptor(t, n);
			r.get
				? Object.defineProperty(e, n, { ...r, enumerable: !1 })
				: Yd(e, n, r.value);
		}
	}
	function Pt(e, t, n, r = !0) {
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: n,
			}),
			n
		);
	}
	function Us(e, t, n) {
		return Pt(e, t, n, !1);
	}
	function Yd(e, t, n) {
		Object.defineProperty(e, t, {
			configurable: !0,
			get() {
				return this == null ? n : Pt(this, t, n.bind(this));
			},
			set(r) {
				Pt(this, t, r);
			},
		});
	}
	function Xd(e, t) {
		const n = Object.getPrototypeOf(e);
		return t in n ? void 0 : n;
	}
	let Io,
		tt = !1;
	const Qd = {
		configurable: !0,
		get() {
			tt = !0;
		},
	};
	function F(e, t, n) {
		const r = Object.getPrototypeOf(e._zod);
		if (t in r && Io !== e._zod) {
			Io = void 0;
			return;
		}
		(Io = e._zod),
			Object.defineProperty(r, t, {
				configurable: !0,
				get() {
					Object.defineProperty(this, t, Qd);
					const o = tt;
					tt = !1;
					try {
						const i = n(this);
						return (
							tt
								? delete this[t]
								: Object.defineProperty(this, t, {
										configurable: !0,
										writable: !0,
										value: i,
									}),
							(tt = tt || o),
							i
						);
					} catch (i) {
						throw (delete this[t], (tt = tt || o), i);
					}
				},
				set(o) {
					Object.defineProperty(this, t, {
						configurable: !0,
						writable: !0,
						value: o,
					});
				},
			});
	}
	function ep(e, t, n, r) {
		const o = Xd(e, t);
		o &&
			Object.defineProperty(o, t, {
				configurable: !0,
				get() {
					const i = {
						configurable: !0,
						writable: !0,
						enumerable: r,
						value: void 0,
					};
					return (
						Object.defineProperty(this, t, i),
						(i.value = n(this)),
						Object.defineProperty(this, t, i),
						i.value
					);
				},
				set(i) {
					Object.defineProperty(this, t, {
						configurable: !0,
						writable: !0,
						enumerable: r,
						value: i,
					});
				},
			});
	}
	const tp = "~constantCatch";
	function np(e) {
		const t = () => e;
		return (t[tp] = !0), t;
	}
	var Hs;
	const Zs = Object.freeze({ status: "aborted" }),
		$o = { value: void 0, enumerable: !1 };
	let Vs = "captureStackTrace" in Error ? Error : null;
	function rp(e) {
		const t = Vs;
		if (t) {
			const n = t.stackTraceLimit;
			if (typeof n == "number") {
				try {
					t.stackTraceLimit = 0;
				} catch {
					return (Vs = null), new e();
				}
				try {
					return new e();
				} finally {
					t.stackTraceLimit = n;
				}
			}
		}
		return new e();
	}
	function w(e, t, n, r) {
		const o = {};
		function i(p) {
			(this.def = p), (this.constr = u), (this.traits = new Set());
		}
		i.prototype = o;
		const s = n,
			a = s && new WeakSet();
		function l(p, f) {
			if (!p._zod) {
				$o.value = new i(f);
				try {
					Object.defineProperty(p, "_zod", $o);
				} finally {
					$o.value = void 0;
				}
			}
			if (p._zod.traits.has(e)) return;
			if ((p._zod.traits.add(e), t(p, f), a)) {
				const g = Object.getPrototypeOf(p),
					b = p._zod.constr.prototype;
				let v = g;
				for (; v && v !== b; ) v = Object.getPrototypeOf(v);
				const _ = v ?? g;
				a.has(_) || (a.add(_), Gd(_, s));
			}
			const h = u.prototype;
			for (const g in h)
				Object.prototype.hasOwnProperty.call(h, g) &&
					(g in p || (p[g] = h[g].bind(p)));
		}
		const c = (r == null ? void 0 : r.Parent) ?? Object;
		class d extends c {}
		Object.defineProperty(d, "name", { value: e });
		function u(p) {
			var b;
			const f = r != null && r.Parent ? rp(d) : this;
			l(f, p);
			const h = f._zod.deferred;
			if (h) {
				for (const v of h) v();
				f._zod.deferred = void 0;
			}
			const g =
				(b = globalThis.__zod_globalConfig) == null ? void 0 : b.postProcessor;
			return g && g(f), f;
		}
		return (
			Object.defineProperty(u, "init", { value: l }),
			Object.defineProperty(u, Symbol.hasInstance, {
				value: (p) => {
					var f, h;
					return r != null && r.Parent && p instanceof r.Parent
						? !0
						: (h =
									(f = p == null ? void 0 : p._zod) == null
										? void 0
										: f.traits) == null
							? void 0
							: h.has(e);
				},
			}),
			Object.defineProperty(u, "name", { value: e }),
			u
		);
	}
	class Ot extends Error {
		constructor() {
			super(
				"Encountered Promise during synchronous parse. Use .parseAsync() instead.",
			);
		}
	}
	class Ws extends Error {
		constructor(t) {
			super(`Encountered unidirectional transform during encode: ${t}`),
				(this.name = "ZodEncodeError");
		}
	}
	(Hs = globalThis).__zod_globalConfig ?? (Hs.__zod_globalConfig = {});
	const xe = globalThis.__zod_globalConfig;
	function Ne(e) {
		return e && Object.assign(xe, e), xe;
	}
	function op() {
		const e = this._zod;
		return e.message ?? (e.message = JSON.stringify(e.def, xo, 2)), e.message;
	}
	function ip(e) {
		this._zod.message = e;
	}
	const sp = { get: op, set: ip, enumerable: !0, configurable: !0 },
		Eo = { value: void 0, enumerable: !1 },
		Ro = { value: void 0, enumerable: !1 },
		qs = new WeakSet([Object.prototype, Error.prototype]),
		Ks = (e, t) => {
			(e.name = "$ZodError"),
				(Eo.value = e._zod),
				Object.defineProperty(e, "_zod", Eo),
				(Ro.value = t),
				Object.defineProperty(e, "issues", Ro),
				(Eo.value = void 0),
				(Ro.value = void 0),
				Object.defineProperty(e, "message", sp);
			const n = Object.getPrototypeOf(e);
			qs.has(n) ||
				(qs.add(n),
				Object.defineProperty(n, "toString", {
					configurable: !0,
					enumerable: !1,
					get() {
						const r = () => this.message;
						return (
							Object.defineProperty(this, "toString", {
								value: r,
								configurable: !0,
								writable: !0,
							}),
							r
						);
					},
					set(r) {
						Object.defineProperty(this, "toString", {
							value: r,
							configurable: !0,
							writable: !0,
						});
					},
				}));
		},
		Js = w("$ZodError", Ks),
		Gs = w("$ZodError", Ks, void 0, { Parent: Error });
	function ap(e, t, n) {
		return (
			Object.prototype.hasOwnProperty.call(e, t) ||
				(t === "__proto__"
					? Object.defineProperty(e, t, {
							value: n(),
							writable: !0,
							enumerable: !0,
							configurable: !0,
						})
					: (e[t] = n())),
			e[t]
		);
	}
	function lp(e, t = (n) => n.message) {
		const n = {},
			r = [];
		for (const o of e.issues)
			o.path.length > 0 ? ap(n, o.path[0], () => []).push(t(o)) : r.push(t(o));
		return { formErrors: r, fieldErrors: n };
	}
	function cp(e, t = (n) => n.message) {
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
							let l = n,
								c = 0;
							for (; c < a.length; ) {
								const d = a[c],
									u = c === a.length - 1;
								if (d === "_errors") {
									u && l._errors.push(t(s)), c++;
									continue;
								}
								Object.prototype.hasOwnProperty.call(l, d) ||
									Object.defineProperty(l, d, {
										value: { _errors: [] },
										enumerable: !0,
										writable: !0,
										configurable: !0,
									});
								const p = l[d];
								u && p._errors.push(t(s)), (l = p), c++;
							}
						}
					}
			};
		return r(e), n;
	}
	function ir(e, t) {
		return {
			callee: (t == null ? void 0 : t.callee) ?? e,
			Err: t == null ? void 0 : t.Err,
		};
	}
	const Mo = (e) => {
			const t = (n, r, o, i) => {
				const s = o ? { ...o, async: !1 } : { async: !1 },
					a = n._zod.run({ value: r, issues: [] }, s);
				if (a instanceof Promise) throw new Ot();
				if (a.issues.length) {
					const l = new ((i == null ? void 0 : i.Err) ?? e)(
						a.issues.map((c) => et(c, s, Ne())),
					);
					throw (Ns(l, (i == null ? void 0 : i.callee) ?? t), l);
				}
				return a.value;
			};
			return t;
		},
		Ao = (e) => {
			const t = async (n, r, o, i) => {
				const s = o ? { ...o, async: !0 } : { async: !0 };
				let a = n._zod.run({ value: r, issues: [] }, s);
				if ((a instanceof Promise && (a = await a), a.issues.length)) {
					const l = new ((i == null ? void 0 : i.Err) ?? e)(
						a.issues.map((c) => et(c, s, Ne())),
					);
					throw (Ns(l, (i == null ? void 0 : i.callee) ?? t), l);
				}
				return a.value;
			};
			return t;
		},
		sr = (e) => (t, n, r) => {
			const o = r ? { ...r, async: !1 } : { async: !1 },
				i = t._zod.run({ value: n, issues: [] }, o);
			if (i instanceof Promise) throw new Ot();
			return i.issues.length
				? {
						success: !1,
						error: new (e ?? Js)(i.issues.map((s) => et(s, o, Ne()))),
					}
				: { success: !0, data: i.value };
		},
		up = sr(Gs),
		ar = (e) => async (t, n, r) => {
			const o = r ? { ...r, async: !0 } : { async: !0 };
			let i = t._zod.run({ value: n, issues: [] }, o);
			return (
				i instanceof Promise && (i = await i),
				i.issues.length
					? { success: !1, error: new e(i.issues.map((s) => et(s, o, Ne()))) }
					: { success: !0, data: i.value }
			);
		},
		dp = ar(Gs),
		pp = (e) => {
			const t = Mo(e),
				n = (r, o, i, s) => {
					const a = i
						? { ...i, direction: "backward" }
						: { direction: "backward" };
					return t(r, o, a, ir(n, s));
				};
			return n;
		},
		fp = (e) => {
			const t = Mo(e),
				n = (r, o, i, s) => t(r, o, i, ir(n, s));
			return n;
		},
		hp = (e) => {
			const t = Ao(e),
				n = async (r, o, i, s) => {
					const a = i
						? { ...i, direction: "backward" }
						: { direction: "backward" };
					return await t(r, o, a, ir(n, s));
				};
			return n;
		},
		mp = (e) => {
			const t = Ao(e),
				n = async (r, o, i, s) => await t(r, o, i, ir(n, s));
			return n;
		},
		gp = (e) => (t, n, r) => {
			const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
			return sr(e)(t, n, o);
		},
		yp = (e) => (t, n, r) => sr(e)(t, n, r),
		vp = (e) => async (t, n, r) => {
			const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
			return ar(e)(t, n, o);
		},
		bp = (e) => async (t, n, r) => ar(e)(t, n, r),
		wp = /^[cC][0-9a-z]{6,}$/,
		_p = /^[0-9a-z]+$/,
		kp = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
		Sp = /^[0-9a-vA-V]{20}$/,
		xp = /^[A-Za-z0-9]{27}$/,
		Cp = /^[a-zA-Z0-9_-]{21}$/;
	function zp(e) {
		return new RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
	}
	const Tp =
			/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
		Ip =
			/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
		Ys = (e) =>
			e
				? new RegExp(
						`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
					)
				: /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
		$p =
			/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
		Ep = "^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
	function Rp() {
		return new RegExp(Ep, "u");
	}
	const Mp =
			/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
		Ap =
			/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
		Pp =
			/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
		Op =
			/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
		Lp =
			/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
		Xs = /^[A-Za-z0-9_-]*$/,
		Np = /^https?$/,
		jp = /^\+[1-9]\d{6,14}$/,
		Qs =
			"(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
	function Bp(e) {
		return new RegExp(`^${e}$`);
	}
	const Dp = Bp(Qs);
	function Po(e) {
		const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
		return typeof e.precision == "number"
			? e.precision === -1
				? `${t}`
				: e.precision === 0
					? `${t}:[0-5]\\d`
					: `${t}:[0-5]\\d\\.\\d{${e.precision}}`
			: e.seconds
				? `${t}:[0-5]\\d(?:\\.\\d+)?`
				: `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
	}
	function Fp(e) {
		return new RegExp(`^${Po(e)}$`);
	}
	function Up(e) {
		const t = ["Z"];
		e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
		const n = `${Po({ precision: e.precision, seconds: !0 })}(?:${t.join("|")})`,
			r = e.local ? `${n}|${Po({ precision: e.precision })}` : n;
		return new RegExp(`^${Qs}T(?:${r})$`);
	}
	const Hp = (e) => {
			const t = e
				? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}`
				: "[\\s\\S]*";
			return new RegExp(`^${t}$`);
		},
		ea = /^-?\d+$/,
		Oo = /^-?\d+(?:\.\d+)?$/,
		Zp = /^(?:true|false)$/i,
		Vp = /^null$/i,
		Wp = /^[^A-Z]*$/,
		qp = /^[^a-z]*$/,
		be = w("$ZodCheck", (e, t) => {
			var n;
			e._zod ?? (e._zod = {}),
				(e._zod.def = t),
				(n = e._zod).onattach ?? (n.onattach = []);
		}),
		Lo = (e) => {
			const t = e.value;
			return !Md(t) && t.length !== void 0;
		},
		lr = { number: "number", bigint: "bigint", object: "date" },
		ta = w("$ZodCheckLessThan", (e, t) => {
			be.init(e, t);
			const n = lr[typeof t.value];
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
							origin: lr[typeof r.value] ?? n,
							code: "too_big",
							maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
							input: r.value,
							inclusive: t.inclusive,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		na = w("$ZodCheckGreaterThan", (e, t) => {
			be.init(e, t);
			const n = lr[typeof t.value];
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
							origin: lr[typeof r.value] ?? n,
							code: "too_small",
							minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
							input: r.value,
							inclusive: t.inclusive,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		Kp = w("$ZodCheckMultipleOf", (e, t) => {
			be.init(e, t),
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
						? t.value !== BigInt(0) && n.value % t.value === BigInt(0)
						: Ad(n.value, t.value) === 0) ||
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
		Jp = w("$ZodCheckNumberFormat", (e, t) => {
			var s;
			be.init(e, t), (t.format = t.format || "float64");
			const n = (s = t.format) == null ? void 0 : s.includes("int"),
				r = n ? "int" : "number",
				[o, i] = Dd[t.format];
			e._zod.onattach.push((a) => {
				const l = a._zod.bag;
				(l.format = t.format),
					(l.minimum = o),
					(l.maximum = i),
					n && (l.pattern = ea);
			}),
				(e._zod.check = (a) => {
					const l = a.value;
					if (n) {
						if (!Number.isInteger(l)) {
							a.issues.push({
								expected: r,
								format: t.format,
								code: "invalid_type",
								continue: !1,
								input: l,
								inst: e,
							});
							return;
						}
						if (!Number.isSafeInteger(l)) {
							l > 0
								? a.issues.push({
										input: l,
										code: "too_big",
										maximum: Number.MAX_SAFE_INTEGER,
										note: "Integers must be within the safe integer range.",
										inst: e,
										origin: r,
										inclusive: !0,
										continue: !t.abort,
									})
								: a.issues.push({
										input: l,
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
					l < o &&
						a.issues.push({
							origin: "number",
							input: l,
							code: "too_small",
							minimum: o,
							inclusive: !0,
							inst: e,
							continue: !t.abort,
						}),
						l > i &&
							a.issues.push({
								origin: "number",
								input: l,
								code: "too_big",
								maximum: i,
								inclusive: !0,
								inst: e,
								continue: !t.abort,
							});
				});
		}),
		Gp = w("$ZodCheckMaxLength", (e, t) => {
			var n;
			be.init(e, t),
				(n = e._zod.def).when ?? (n.when = Lo),
				e._zod.onattach.push((r) => {
					const o = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
					t.maximum < o && (r._zod.bag.maximum = t.maximum);
				}),
				(e._zod.check = (r) => {
					const o = r.value,
						i = o.length;
					if ((typeof o == "string" && i > t.maximum ? zo(o) : i) <= t.maximum)
						return;
					const a = To(o);
					r.issues.push({
						origin: a,
						code: "too_big",
						maximum: t.maximum,
						inclusive: !0,
						input: o,
						inst: e,
						continue: !t.abort,
					});
				});
		}),
		Yp = w("$ZodCheckMinLength", (e, t) => {
			var n;
			be.init(e, t),
				(n = e._zod.def).when ?? (n.when = Lo),
				e._zod.onattach.push((r) => {
					const o = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
					t.minimum > o && (r._zod.bag.minimum = t.minimum);
				}),
				(e._zod.check = (r) => {
					const o = r.value,
						i = o.length;
					if (
						(typeof o == "string" && i >= t.minimum && i < t.minimum * 2
							? zo(o)
							: i) >= t.minimum
					)
						return;
					const a = To(o);
					r.issues.push({
						origin: a,
						code: "too_small",
						minimum: t.minimum,
						inclusive: !0,
						input: o,
						inst: e,
						continue: !t.abort,
					});
				});
		}),
		Xp = w("$ZodCheckLengthEquals", (e, t) => {
			var n;
			be.init(e, t),
				(n = e._zod.def).when ?? (n.when = Lo),
				e._zod.onattach.push((r) => {
					const o = r._zod.bag;
					(o.minimum = t.length), (o.maximum = t.length), (o.length = t.length);
				}),
				(e._zod.check = (r) => {
					const o = r.value,
						i = o.length,
						s =
							typeof o == "string" && i >= t.length && i <= t.length * 2
								? zo(o)
								: i;
					if (s === t.length) return;
					const a = To(o),
						l = s > t.length;
					r.issues.push({
						origin: a,
						...(l
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
		cr = w("$ZodCheckStringFormat", (e, t) => {
			var n, r;
			be.init(e, t),
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
		Qp = w("$ZodCheckRegex", (e, t) => {
			cr.init(e, t),
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
		ef = w("$ZodCheckLowerCase", (e, t) => {
			t.pattern ?? (t.pattern = Wp), cr.init(e, t);
		}),
		tf = w("$ZodCheckUpperCase", (e, t) => {
			t.pattern ?? (t.pattern = qp), cr.init(e, t);
		}),
		nf = w("$ZodCheckIncludes", (e, t) => {
			be.init(e, t);
			const n = Mt(t.includes),
				r = new RegExp(
					typeof t.position == "number" ? `^.{${t.position},}${n}` : n,
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
		rf = w("$ZodCheckStartsWith", (e, t) => {
			be.init(e, t);
			const n = new RegExp(`^${Mt(t.prefix)}.*`);
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
		of = w("$ZodCheckEndsWith", (e, t) => {
			be.init(e, t);
			const n = new RegExp(`.*${Mt(t.suffix)}$`);
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
		sf = w("$ZodCheckOverwrite", (e, t) => {
			be.init(e, t),
				(e._zod.check = (n) => {
					n.value = t.tx(n.value);
				});
		});
	class af {
		constructor(t = [], n = {}) {
			(this.content = []),
				(this.indent = 0),
				(this.args = t),
				(this.closed = n);
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
				n = (this == null ? void 0 : this.content) ?? [""];
			return new t(
				...Object.keys(this.closed),
				`return function (${this.args.join(", ")}) {
${n.join(`
`)}
};`,
			)(...Object.values(this.closed));
		}
	}
	const lf = { major: 4, minor: 5, patch: 4 },
		Z = w(
			"$ZodType",
			(e, t) => {
				var i;
				var n;
				e ?? (e = {}),
					(e._zod.def = t),
					(e._zod.bag = e._zod.bag || {}),
					(e._zod.version = lf);
				const r = e._zod.def.checks,
					o = e._zod.traits.has("$ZodCheck")
						? [e, ...(r ?? [])]
						: r != null && r.length
							? [...r]
							: [];
				for (const s of o) for (const a of s._zod.onattach) a(e);
				if (o.length === 0)
					(n = e._zod).deferred ?? (n.deferred = []),
						(i = e._zod.deferred) == null ||
							i.push(() => {
								e._zod.run = e._zod.parse;
							});
				else {
					const s = (l, c, d) => {
							if (l.memo) return l;
							let u = At(l),
								p;
							for (const f of c) {
								if (f._zod.def.when) {
									if (qd(l) || !f._zod.def.when(l)) continue;
								} else if (u) continue;
								const h = l.issues.length,
									g = f._zod.check(l);
								if (
									g instanceof Promise &&
									(d == null ? void 0 : d.async) === !1
								)
									throw new Ot();
								if (p || g instanceof Promise)
									p = (p ?? Promise.resolve()).then(async () => {
										await g,
											l.issues.length !== h &&
												(Fs(l.issues, h, e), u || (u = At(l, h)));
									});
								else {
									if (l.issues.length === h) continue;
									Fs(l.issues, h, e), u || (u = At(l, h));
								}
							}
							return p ? p.then(() => l) : l;
						},
						a = (l, c, d) => {
							if (At(l)) return (l.aborted = !0), l;
							const u = s(c, o, d);
							if (u instanceof Promise) {
								if (d.async === !1) throw new Ot();
								return u.then((p) => e._zod.parse(p, d));
							}
							return e._zod.parse(u, d);
						};
					e._zod.run = (l, c) => {
						if (c.skipChecks) return e._zod.parse(l, c);
						if (c.direction === "backward") {
							const u = e._zod.parse(
								{ value: l.value, issues: [] },
								{ ...c, skipChecks: !0 },
							);
							return u instanceof Promise
								? u.then((p) => a(p, l, c))
								: a(u, l, c);
						}
						const d = e._zod.parse(l, c);
						if (d instanceof Promise) {
							if (c.async === !1) throw new Ot();
							return d.then((u) => s(u, o, c));
						}
						return s(d, o, c);
					};
				}
			},
			{
				get "~standard"() {
					return Us(this, "~standard", oa(this));
				},
				set "~standard"(e) {
					Pt(this, "~standard", e);
				},
			},
		),
		ra = (e) => {
			var t;
			return e.success
				? { value: e.data }
				: { issues: (t = e.error) == null ? void 0 : t.issues };
		};
	function oa(e) {
		return {
			validate: (t) => {
				try {
					return ra(up(e, t));
				} catch {
					return dp(e, t).then(ra);
				}
			},
			vendor: "zod",
			version: 1,
		};
	}
	const ur = w("$ZodString", (e, t) => {
			var n;
			Z.init(e, t),
				(e._zod.pattern =
					[
						...(((n = e == null ? void 0 : e._zod.bag) == null
							? void 0
							: n.patterns) ?? []),
					].pop() ?? Hp(e._zod.bag)),
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
		K = w("$ZodStringFormat", (e, t) => {
			cr.init(e, t), ur.init(e, t);
		}),
		cf = w("$ZodGUID", (e, t) => {
			t.pattern ?? (t.pattern = Ip), K.init(e, t);
		}),
		uf = w("$ZodUUID", (e, t) => {
			if (t.version) {
				const r = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
					t.version
				];
				if (r === void 0)
					throw new Error(`Invalid UUID version: "${t.version}"`);
				t.pattern ?? (t.pattern = Ys(r));
			} else t.pattern ?? (t.pattern = Ys());
			K.init(e, t);
		}),
		df = w("$ZodEmail", (e, t) => {
			t.pattern ?? (t.pattern = $p), K.init(e, t);
		}),
		ia = 1,
		sa = 2;
	function pf(e, t) {
		var n;
		if (
			!t.normalize &&
			((n = t.protocol) == null ? void 0 : n.source) === Np.source &&
			!/^https?:\/\//i.test(e)
		)
			return ia;
		try {
			return new URL(e);
		} catch {
			return sa;
		}
	}
	const ff = /[\t\n\r]/g;
	function hf(e) {
		return e.replace(ff, "");
	}
	function mf(e, t) {
		return (t.lastIndex = 0), t.test(e.hostname);
	}
	function gf(e, t) {
		return (
			(t.lastIndex = 0),
			t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol)
		);
	}
	const yf = w("$ZodURL", (e, t) => {
			K.init(e, t),
				(e._zod.check = (n) => {
					try {
						const r = n.value.trim(),
							o = pf(r, t);
						if (o === ia) {
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
						if (o === sa) {
							n.issues.push({
								code: "invalid_format",
								format: "url",
								input: n.value,
								inst: e,
								continue: !t.abort,
							});
							return;
						}
						t.hostname &&
							!mf(o, t.hostname) &&
							n.issues.push({
								code: "invalid_format",
								format: "url",
								note: "Invalid hostname",
								pattern: t.hostname.source,
								input: n.value,
								inst: e,
								continue: !t.abort,
							}),
							t.protocol &&
								!gf(o, t.protocol) &&
								n.issues.push({
									code: "invalid_format",
									format: "url",
									note: "Invalid protocol",
									pattern: t.protocol.source,
									input: n.value,
									inst: e,
									continue: !t.abort,
								}),
							(n.value = t.normalize ? o.href : hf(r));
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
		vf = w("$ZodEmoji", (e, t) => {
			t.pattern ?? (t.pattern = Rp()), K.init(e, t);
		}),
		bf = w("$ZodNanoID", (e, t) => {
			if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1))
				throw new Error(`Invalid nanoid length: ${t.length}`);
			t.pattern ?? (t.pattern = t.length === void 0 ? Cp : zp(t.length)),
				K.init(e, t);
		}),
		wf = w("$ZodCUID", (e, t) => {
			t.pattern ?? (t.pattern = wp), K.init(e, t);
		}),
		_f = w("$ZodCUID2", (e, t) => {
			t.pattern ?? (t.pattern = _p), K.init(e, t);
		}),
		kf = w("$ZodULID", (e, t) => {
			t.pattern ?? (t.pattern = kp), K.init(e, t);
		}),
		Sf = w("$ZodXID", (e, t) => {
			t.pattern ?? (t.pattern = Sp), K.init(e, t);
		}),
		xf = w("$ZodKSUID", (e, t) => {
			t.pattern ?? (t.pattern = xp), K.init(e, t);
		}),
		Cf = w("$ZodISODateTime", (e, t) => {
			t.pattern ?? (t.pattern = Up(t)),
				K.init(e, t),
				(t.local || t.precision === -1) &&
					((e._zod.bag.laxFormat = !0),
					e._zod.onattach.push((n) => {
						n._zod.bag.laxFormat = !0;
					}));
		}),
		zf = w("$ZodISODate", (e, t) => {
			t.pattern ?? (t.pattern = Dp), K.init(e, t);
		}),
		Tf = w("$ZodISOTime", (e, t) => {
			t.pattern ?? (t.pattern = Fp(t)), K.init(e, t);
		}),
		If = w("$ZodISODuration", (e, t) => {
			t.pattern ?? (t.pattern = Tp), K.init(e, t);
		}),
		$f = w("$ZodIPv4", (e, t) => {
			t.pattern ?? (t.pattern = Mp), K.init(e, t), (e._zod.bag.format = "ipv4");
		}),
		Ef = /^[0-9a-fA-F:.]+$/;
	function aa(e) {
		if (!Ef.test(e)) return !1;
		try {
			return new URL(`http://[${e}]`), !0;
		} catch {
			return !1;
		}
	}
	const Rf = w("$ZodIPv6", (e, t) => {
			t.pattern ?? (t.pattern = Ap),
				K.init(e, t),
				(e._zod.bag.format = "ipv6"),
				(e._zod.check = (n) => {
					aa(n.value) ||
						n.issues.push({
							code: "invalid_format",
							format: "ipv6",
							input: n.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		Mf = w("$ZodCIDRv4", (e, t) => {
			t.pattern ?? (t.pattern = Pp), K.init(e, t);
		});
	function Af(e) {
		const t = e.split("/");
		if (t.length !== 2) return !1;
		const [n, r] = t;
		if (!r) return !1;
		const o = Number(r);
		return `${o}` !== r || o < 0 || o > 128 ? !1 : aa(n);
	}
	const Pf = w("$ZodCIDRv6", (e, t) => {
		t.pattern ?? (t.pattern = Op),
			K.init(e, t),
			(e._zod.check = (n) => {
				Af(n.value) ||
					n.issues.push({
						code: "invalid_format",
						format: "cidrv6",
						input: n.value,
						inst: e,
						continue: !t.abort,
					});
			});
	});
	function la(e) {
		if (e === "") return !0;
		if (/\s/.test(e) || e.length % 4 !== 0) return !1;
		try {
			return atob(e), !0;
		} catch {
			return !1;
		}
	}
	const Of = w("$ZodBase64", (e, t) => {
		t.pattern ?? (t.pattern = Lp),
			K.init(e, t),
			(e._zod.bag.contentEncoding = "base64"),
			(e._zod.check = (n) => {
				la(n.value) ||
					n.issues.push({
						code: "invalid_format",
						format: "base64",
						input: n.value,
						inst: e,
						continue: !t.abort,
					});
			});
	});
	function Lf(e) {
		if (!Xs.test(e)) return !1;
		const t = e.replace(/[-_]/g, (r) => (r === "-" ? "+" : "/")),
			n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
		return la(n);
	}
	const Nf = w("$ZodBase64URL", (e, t) => {
			t.pattern ?? (t.pattern = Xs),
				K.init(e, t),
				(e._zod.bag.contentEncoding = "base64url"),
				(e._zod.check = (n) => {
					Lf(n.value) ||
						n.issues.push({
							code: "invalid_format",
							format: "base64url",
							input: n.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		jf = w("$ZodE164", (e, t) => {
			t.pattern ?? (t.pattern = jp), K.init(e, t);
		});
	function Bf(e, t = null) {
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
	const Df = w("$ZodJWT", (e, t) => {
			K.init(e, t),
				(e._zod.check = (n) => {
					Bf(n.value, t.alg) ||
						n.issues.push({
							code: "invalid_format",
							format: "jwt",
							input: n.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		ca = w("$ZodNumber", (e, t) => {
			Z.init(e, t),
				(e._zod.pattern = e._zod.bag.pattern ?? Oo),
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
									: String(o)
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
		Ff = w("$ZodNumberFormat", (e, t) => {
			Jp.init(e, t), ca.init(e, t);
		}),
		ua = w("$ZodBoolean", (e, t) => {
			Z.init(e, t),
				(e._zod.pattern = Zp),
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
		Uf = w("$ZodNull", (e, t) => {
			Z.init(e, t),
				(e._zod.pattern = Vp),
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
		Hf = w("$ZodAny", (e, t) => {
			Z.init(e, t), (e._zod.parse = (n) => n);
		}),
		Zf = w("$ZodUnknown", (e, t) => {
			Z.init(e, t), (e._zod.parse = (n) => n);
		}),
		Vf = w("$ZodNever", (e, t) => {
			Z.init(e, t),
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
		Wf = w("$ZodDate", (e, t) => {
			Z.init(e, t),
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
	function da(e, t, n) {
		e.issues.length && t.issues.push(...Qe(n, e.issues)),
			(t.value[n] = e.value);
	}
	const qf = w("$ZodArray", (e, t) => {
		Z.init(e, t);
		const n = xe.memoizer;
		n == null || n.attach(e),
			(e._zod.parse = (r, o) => {
				const i = r.value;
				if (!Array.isArray(i))
					return (
						r.issues.push({
							expected: "array",
							code: "invalid_type",
							input: i,
							inst: e,
						}),
						r
					);
				r.value = n ? n.alloc(e, r, Array(i.length), o) : Array(i.length);
				const s = [];
				for (let a = 0; a < i.length; a++) {
					const l = i[a],
						c = t.element._zod.run({ value: l, issues: [] }, o);
					c instanceof Promise
						? s.push(c.then((d) => da(d, r, a)))
						: da(c, r, a);
				}
				return s.length ? Promise.all(s).then(() => r) : r;
			});
	});
	function dr(e, t, n, r, o, i) {
		const s = n in r,
			a = i === "optional";
		if (!(!s && a && o === "optional")) {
			if (e.issues.length) {
				if (o !== void 0 && a && !s) return;
				t.issues.push(...Qe(n, e.issues));
			}
			if (!s && o === void 0) {
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
	}
	const Kf = [];
	function pa(e) {
		var s, a, l, c;
		const t = Object.keys(e.shape),
			n = Object.getOwnPropertySymbols(e.shape),
			r = n.length ? n : Kf,
			o = r.length ? [...t, ...r] : t;
		for (const d of o)
			if (
				!(
					(c =
						(l =
							(a = (s = e.shape) == null ? void 0 : s[d]) == null
								? void 0
								: a._zod) == null
							? void 0
							: l.traits) != null && c.has("$ZodType")
				)
			)
				throw new Error(
					`Invalid element at key "${String(d)}": expected a Zod schema`,
				);
		const i = Bd(e.shape);
		return {
			...e,
			allKeys: o,
			symbolKeys: r,
			keySet: new Set(t),
			numKeys: t.length,
			optionalKeys: new Set(i),
		};
	}
	function fa(e, t, n, r, o, i) {
		const s = [],
			a = o.keySet,
			l = o.catchall._zod,
			c = l.def.type,
			d = l.optin,
			u = l.optout;
		for (const p in t) {
			if (a.has(p)) continue;
			if (p === "__proto__") {
				c === "never" && s.push(p);
				continue;
			}
			if (c === "never") {
				s.push(p);
				continue;
			}
			const f = l.run({ value: t[p], issues: [] }, r);
			f instanceof Promise
				? e.push(f.then((h) => dr(h, n, p, t, d, u)))
				: dr(f, n, p, t, d, u);
		}
		return (
			s.length &&
				n.issues.push({
					code: "unrecognized_keys",
					keys: s,
					input: t,
					inst: i,
					continue: !0,
				}),
			e.length ? Promise.all(e).then(() => n) : n
		);
	}
	const No = new WeakMap(),
		Jf = w("$ZodObject", (e, t) => {
			Z.init(e, t);
			const n = Object.getOwnPropertyDescriptor(t, "shape");
			if (!(n != null && n.get)) {
				const l = t.shape;
				No.set(t, l),
					Object.defineProperty(t, "shape", {
						get: () => {
							const c = { ...l };
							return (
								Object.defineProperty(t, "shape", { value: c }), No.set(t, c), c
							);
						},
					});
			}
			const r = or(() => pa(t));
			F(e, "propValues", (l) => {
				const c = l.def.shape,
					d = {};
				for (const u in c) {
					const p = c[u]._zod;
					if (p.values) {
						Object.prototype.hasOwnProperty.call(d, u) || ye(d, u, new Set());
						for (const f of p.values) d[u].add(f);
						p.optin !== void 0 && d[u].add(void 0);
					}
				}
				return d;
			});
			const o = bn,
				i = t.catchall;
			let s;
			const a = xe.memoizer;
			a == null || a.attach(e),
				(e._zod.parse = (l, c) => {
					s ?? (s = r.value);
					const d = l.value;
					if (!o(d))
						return (
							l.issues.push({
								expected: "object",
								code: "invalid_type",
								input: d,
								inst: e,
							}),
							l
						);
					l.value = a ? a.alloc(e, l, {}, c) : {};
					const u = [],
						p = s.shape;
					for (const f of s.allKeys) {
						if (f === "__proto__") continue;
						const h = p[f],
							g = h._zod.optin,
							b = h._zod.optout,
							v = h._zod.run({ value: d[f], issues: [] }, c);
						v instanceof Promise
							? u.push(v.then((_) => dr(_, l, f, d, g, b)))
							: dr(v, l, f, d, g, b);
					}
					return i
						? fa(u, d, l, c, r.value, e)
						: u.length
							? Promise.all(u).then(() => l)
							: l;
				});
		}),
		Gf = w("$ZodObjectJIT", (e, t) => {
			Jf.init(e, t);
			const n = e._zod.parse,
				r = or(() => pa(t)),
				o = xe.memoizer,
				i = (f) => {
					var A, I;
					const h = r.value,
						g = h.symbolKeys,
						b = new af(["payload", "ctx"], {
							shape: f,
							inst: e,
							memo: o,
							syms: g,
						}),
						v = (O) =>
							`shape[${O}]._zod.run({ value: input[${O}], issues: [] }, ctx)`,
						_ = (O, M) => `
          for (let i = 0; i < ${O}.issues.length; i++) {
            const iss = ${O}.issues[i];
            iss.path = iss.path ? [${M}, ...iss.path] : [${M}];
            payload.issues.push(iss);
          }`;
					b.write("const input = payload.value;");
					const x = Object.create(null);
					let S = 0;
					for (const O of h.allKeys) x[O] = `key_${S++}`;
					b.write(
						o
							? "const newResult = memo.alloc(inst, payload, {}, ctx);"
							: "const newResult = {};",
					);
					for (const O of h.allKeys) {
						if (O === "__proto__") continue;
						const M = x[O],
							N = typeof O == "symbol" ? `syms[${g.indexOf(O)}]` : Od(O),
							B = `${N} in input`,
							$ = f[O],
							D = (A = $ == null ? void 0 : $._zod) == null ? void 0 : A.optin,
							re = D !== void 0,
							Y =
								((I = $ == null ? void 0 : $._zod) == null
									? void 0
									: I.optout) === "optional";
						if ((b.write(`const ${M} = ${v(N)};`), re && Y)) {
							const fe =
								D === "optional"
									? `${M}_present`
									: `${M}.value !== undefined || ${M}_present`;
							b.write(`
        const ${M}_present = ${B};
        if (!${M}.issues.length || ${M}_present) {
          if (${M}.issues.length) {${_(M, N)}
          }

          if (${fe}) {
            newResult[${N}] = ${M}.value;
          }
        }

      `);
						} else
							re
								? b.write(`
        if (${M}.issues.length) {${_(M, N)}
        }
        
        if (${M}.value === undefined) {
          if (${B}) {
            newResult[${N}] = undefined;
          }
        } else {
          newResult[${N}] = ${M}.value;
        }

      `)
								: b.write(`
        const ${M}_present = ${B};
        if (${M}.issues.length) {${_(M, N)}
        }
        if (!${M}_present && !${M}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${N}]
          });
        }

        if (${M}_present) {
          newResult[${N}] = ${M}.value;
        }

      `);
					}
					return (
						b.write("payload.value = newResult;"),
						b.write("return payload;"),
						b.compile()
					);
				};
			let s;
			const a = bn,
				l = !xe.jitless,
				d = l && Nd.value,
				u = t.catchall;
			let p;
			e._zod.parse = (f, h) => {
				p ?? (p = r.value);
				const g = f.value;
				return a(g)
					? l && d && (h == null ? void 0 : h.async) === !1 && h.jitless !== !0
						? (s || (s = i(t.shape)),
							(f = s(f, h)),
							u ? fa([], g, f, h, p, e) : f)
						: n(f, h)
					: (f.issues.push({
							expected: "object",
							code: "invalid_type",
							input: g,
							inst: e,
						}),
						f);
			};
		});
	function ha(e, t, n, r) {
		for (const i of e) if (i.issues.length === 0) return (t.value = i.value), t;
		const o = e.filter((i) => !At(i));
		return o.length === 1
			? ((t.value = o[0].value), o[0])
			: (t.issues.push({
					code: "invalid_union",
					input: t.value,
					inst: n,
					errors: e.map((i) => i.issues.map((s) => et(s, r, Ne()))),
				}),
				t);
	}
	const ma = w("$ZodUnion", (e, t) => {
			Z.init(e, t),
				F(e, "optin", (r) =>
					r.def.options.some((o) => o._zod.optin === "defaulted")
						? "defaulted"
						: r.def.options.some((o) => o._zod.optin !== void 0)
							? "optional"
							: void 0,
				),
				F(e, "optout", (r) =>
					r.def.options.some((o) => o._zod.optout === "optional")
						? "optional"
						: void 0,
				),
				F(e, "values", (r) => {
					if (r.def.options.every((o) => o._zod.values))
						return new Set(
							r.def.options.flatMap((o) => Array.from(o._zod.values)),
						);
				}),
				F(e, "pattern", (r) => {
					if (r.def.options.every((o) => o._zod.pattern)) {
						const o = r.def.options.map((i) => i._zod.pattern);
						return new RegExp(`^(${o.map((i) => Co(i.source)).join("|")})$`);
					}
				});
			const n = t.options.length === 1 ? t.options[0]._zod.run : null;
			e._zod.parse = (r, o) => {
				if (n) return n(r, o);
				let i = !1;
				const s = [];
				for (const a of t.options) {
					const l = a._zod.run({ value: r.value, issues: [] }, o);
					if (l instanceof Promise) s.push(l), (i = !0);
					else {
						if (l.issues.length === 0) return l;
						s.push(l);
					}
				}
				return i ? Promise.all(s).then((a) => ha(a, r, e, o)) : ha(s, r, e, o);
			};
		}),
		Yf = w("$ZodDiscriminatedUnion", (e, t) => {
			(t.inclusive = !1), ma.init(e, t);
			const n = e._zod.parse;
			F(e, "propValues", (o) => {
				const i = {};
				for (const s of o.def.options) {
					const a = s._zod.propValues;
					if (!a || Object.keys(a).length === 0)
						throw new Error(
							`Invalid discriminated union option at index "${o.def.options.indexOf(s)}"`,
						);
					for (const [l, c] of Object.entries(a)) {
						Object.prototype.hasOwnProperty.call(i, l) || ye(i, l, new Set());
						for (const d of c) i[l].add(d);
					}
				}
				return i;
			}),
				t.options.forEach((o, i) => {
					const s = No.get(o._zod.def);
					if (s && !Object.prototype.hasOwnProperty.call(s, t.discriminator))
						throw new Error(
							`Invalid discriminated union option at index "${i}"`,
						);
				});
			const r = or(() => {
				var s;
				const o = t.options,
					i = new Map();
				for (const a of o) {
					const l =
						(s = a._zod.propValues) == null ? void 0 : s[t.discriminator];
					if (!l || l.size === 0)
						throw new Error(
							`Invalid discriminated union option at index "${t.options.indexOf(a)}"`,
						);
					for (const c of l) {
						if (i.has(c))
							throw new Error(`Duplicate discriminator value "${String(c)}"`);
						i.set(c, a);
					}
				}
				return i;
			});
			e._zod.parse = (o, i) => {
				const s = o.value;
				if (!bn(s))
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
		Xf = w("$ZodIntersection", (e, t) => {
			Z.init(e, t),
				(e._zod.parse = (n, r) => {
					const o = n.value,
						i = t.left._zod.run({ value: o, issues: [] }, r),
						s = t.right._zod.run({ value: o, issues: [] }, r);
					return i instanceof Promise || s instanceof Promise
						? Promise.all([i, s]).then(([l, c]) => ga(n, l, c))
						: ga(n, i, s);
				});
		});
	function jo(e, t) {
		if (e === t) return { valid: !0, data: e };
		if (e instanceof Date && t instanceof Date && +e == +t)
			return { valid: !0, data: e };
		if (Rt(e) && Rt(t)) {
			const n = Object.keys(t),
				r = Object.keys(e).filter((i) => n.indexOf(i) !== -1),
				o = { ...e, ...t };
			Object.prototype.hasOwnProperty.call(o, "__proto__") &&
				delete o.__proto__;
			for (const i of r) {
				if (i === "__proto__") continue;
				const s = jo(e[i], t[i]);
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
					s = jo(o, i);
				if (!s.valid)
					return { valid: !1, mergeErrorPath: [r, ...s.mergeErrorPath] };
				n.push(s.data);
			}
			return { valid: !0, data: n };
		}
		return { valid: !1, mergeErrorPath: [] };
	}
	function ga(e, t, n) {
		const r = new Map();
		let o;
		const i = new Map(),
			s = (c, d) => {
				var p, f;
				let u;
				if (
					c.code === "unrecognized_keys" &&
					!((p = c.path) != null && p.length)
				)
					o ?? (o = c), (u = c.keys);
				else if (
					c.code === "invalid_key" &&
					c.origin === "record" &&
					((f = c.path) == null ? void 0 : f.length) === 1
				) {
					const h = String(c.path[0]);
					i.has(h) || i.set(h, c), (u = [h]);
				} else return !1;
				for (const h of u) r.has(h) || r.set(h, {}), (r.get(h)[d] = !0);
				return !0;
			};
		for (const c of t.issues) s(c, "l") || e.issues.push(c);
		for (const c of n.issues) s(c, "r") || e.issues.push(c);
		const a = [...r].filter(([, c]) => c.l && c.r).map(([c]) => c);
		if (a.length) {
			const c = o ? a.filter((d) => o.keys.includes(d)) : [];
			c.length && e.issues.push({ ...o, keys: c });
			for (const d of a) !c.includes(d) && i.has(d) && e.issues.push(i.get(d));
		}
		const l = jo(t.value, n.value);
		if (!l.valid) {
			if (At(e)) return e;
			throw new Error(
				`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`,
			);
		}
		return (e.value = l.data), e;
	}
	const Qf = w("$ZodTuple", (e, t) => {
		Z.init(e, t);
		const n = t.items,
			r = xe.memoizer;
		r == null || r.attach(e),
			(e._zod.parse = (o, i) => {
				const s = o.value;
				if (!Array.isArray(s))
					return (
						o.issues.push({
							input: s,
							inst: e,
							expected: "tuple",
							code: "invalid_type",
						}),
						o
					);
				o.value = r ? r.alloc(e, o, [], i) : [];
				const a = [],
					l = ya(n, "optin"),
					c = ya(n, "optout");
				if (!t.rest) {
					if (s.length < l)
						return (
							o.issues.push({
								code: "too_small",
								minimum: l,
								inclusive: !0,
								input: s,
								inst: e,
								origin: "array",
							}),
							o
						);
					s.length > n.length &&
						o.issues.push({
							code: "too_big",
							maximum: n.length,
							inclusive: !0,
							input: s,
							inst: e,
							origin: "array",
						});
				}
				const d = new Array(n.length);
				for (let u = 0; u < n.length; u++) {
					const p = n[u]._zod.run({ value: s[u], issues: [] }, i);
					p instanceof Promise
						? a.push(
								p.then((f) => {
									d[u] = f;
								}),
							)
						: (d[u] = p);
				}
				if (t.rest) {
					let u = n.length - 1;
					const p = s.slice(n.length);
					for (const f of p) {
						u++;
						const h = t.rest._zod.run({ value: f, issues: [] }, i);
						h instanceof Promise
							? a.push(h.then((g) => va(g, o, u)))
							: va(h, o, u);
					}
				}
				return a.length
					? Promise.all(a).then(() => ba(d, o, n, s, c))
					: ba(d, o, n, s, c);
			});
	});
	function ya(e, t) {
		for (let n = e.length - 1; n >= 0; n--)
			if (
				!(t === "optin"
					? e[n]._zod.optin !== void 0
					: e[n]._zod.optout === "optional")
			)
				return n + 1;
		return 0;
	}
	function va(e, t, n) {
		e.issues.length && t.issues.push(...Qe(n, e.issues)),
			(t.value[n] = e.value);
	}
	function ba(e, t, n, r, o) {
		for (let i = 0; i < n.length; i++) {
			const s = e[i],
				a = i < r.length;
			if (!a && i >= o && n[i]._zod.optin === "optional") {
				t.value.length = i;
				break;
			}
			if (s.issues.length) {
				if (!a && i >= o) {
					t.value.length = i;
					break;
				}
				t.issues.push(...Qe(i, s.issues));
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
	const eh = w("$ZodRecord", (e, t) => {
			Z.init(e, t);
			const n = xe.memoizer;
			n == null || n.attach(e),
				(e._zod.parse = (r, o) => {
					const i = r.value;
					if (!Rt(i))
						return (
							r.issues.push({
								expected: "record",
								code: "invalid_type",
								input: i,
								inst: e,
							}),
							r
						);
					const s = [],
						a = t.keyType._zod.values;
					if (a && !t.partial) {
						r.value = n ? n.alloc(e, r, {}, o) : {};
						const l = new Set();
						for (const d of a)
							if (
								typeof d == "string" ||
								typeof d == "number" ||
								typeof d == "symbol"
							) {
								if (
									(l.add(typeof d == "number" ? d.toString() : d),
									d === "__proto__")
								)
									continue;
								const u = t.keyType._zod.run({ value: d, issues: [] }, o);
								if (u instanceof Promise)
									throw new Error(
										"Async schemas not supported in object keys currently",
									);
								if (u.issues.length) {
									r.issues.push({
										code: "invalid_key",
										origin: "record",
										issues: u.issues.map((h) => et(h, o, Ne())),
										input: d,
										path: [d],
										inst: e,
									});
									continue;
								}
								const p = u.value;
								if (p === "__proto__") continue;
								const f = t.valueType._zod.run({ value: i[d], issues: [] }, o);
								f instanceof Promise
									? s.push(
											f.then((h) => {
												h.issues.length && r.issues.push(...Qe(d, h.issues)),
													(r.value[p] = h.value);
											}),
										)
									: (f.issues.length && r.issues.push(...Qe(d, f.issues)),
										(r.value[p] = f.value));
							}
						let c;
						for (const d in i)
							if (!l.has(d))
								if (t.mode === "loose") {
									if (d === "__proto__") continue;
									r.value[d] = i[d];
								} else (c = c ?? []), c.push(d);
						c &&
							c.length > 0 &&
							r.issues.push({
								code: "unrecognized_keys",
								input: i,
								inst: e,
								keys: c,
								continue: !0,
							});
					} else {
						r.value = n ? n.alloc(e, r, {}, o) : {};
						let l;
						for (const c of Reflect.ownKeys(i)) {
							if (
								c === "__proto__" ||
								!Object.prototype.propertyIsEnumerable.call(i, c)
							)
								continue;
							let d = t.keyType._zod.run({ value: c, issues: [] }, o);
							if (d instanceof Promise)
								throw new Error(
									"Async schemas not supported in object keys currently",
								);
							if (typeof c == "string" && Oo.test(c) && d.issues.length) {
								const h = t.keyType._zod.run(
									{ value: Number(c), issues: [] },
									o,
								);
								if (h instanceof Promise)
									throw new Error(
										"Async schemas not supported in object keys currently",
									);
								h.issues.length === 0 && (d = h);
							}
							if (d.issues.length) {
								t.mode === "loose"
									? (r.value[c] = i[c])
									: a
										? ((l = l ?? []), l.push(c))
										: r.issues.push({
												code: "invalid_key",
												origin: "record",
												issues: d.issues.map((h) => et(h, o, Ne())),
												input: c,
												path: [c],
												inst: e,
											});
								continue;
							}
							const p = d.value;
							if (p === "__proto__") continue;
							const f = t.valueType._zod.run({ value: i[c], issues: [] }, o);
							f instanceof Promise
								? s.push(
										f.then((h) => {
											h.issues.length && r.issues.push(...Qe(c, h.issues)),
												(r.value[p] = h.value);
										}),
									)
								: (f.issues.length && r.issues.push(...Qe(c, f.issues)),
									(r.value[p] = f.value));
						}
						l &&
							l.length > 0 &&
							r.issues.push({
								code: "unrecognized_keys",
								input: i,
								inst: e,
								keys: l,
								continue: !0,
							});
					}
					return s.length ? Promise.all(s).then(() => r) : r;
				});
		}),
		th = w("$ZodEnum", (e, t) => {
			Z.init(e, t);
			const n = Ps(t.entries),
				r = new Set(n);
			e._zod.values = r;
			const o = n.filter((i) => jd.has(typeof i));
			(e._zod.pattern = new RegExp(
				o.length
					? `^(${o.map((i) => Mt(i.toString())).join("|")})$`
					: "^[^\\s\\S]$",
			)),
				(e._zod.parse = (i, s) => {
					const a = i.value;
					return (
						r.has(a) ||
							i.issues.push({
								code: "invalid_value",
								values: n,
								input: a,
								inst: e,
							}),
						i
					);
				});
		}),
		nh = w("$ZodLiteral", (e, t) => {
			Z.init(e, t);
			const n = new Set(t.values);
			(e._zod.values = n),
				(e._zod.pattern = new RegExp(
					t.values.length
						? `^(${t.values.map((r) => (typeof r == "string" ? Mt(r) : r ? Mt(r.toString()) : String(r))).join("|")})$`
						: "^[^\\s\\S]$",
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
		rh = w("$ZodTransform", (e, t) => {
			var n;
			Z.init(e, t),
				(e._zod.optin = "optional"),
				(n = xe.memoizer) == null || n.guard(e),
				(e._zod.parse = (r, o) => {
					if (o.direction === "backward") throw new Ws(e.constructor.name);
					const i = t.transform(r.value, r);
					if (o.async)
						return (i instanceof Promise ? i : Promise.resolve(i)).then(
							(a) => ((r.value = a), r),
						);
					if (i instanceof Promise) throw new Ot();
					return (r.value = i), r;
				});
		});
	function wa(e, t) {
		return (e.value = t.issues.length ? void 0 : t.value), e;
	}
	const _a = w("$ZodOptional", (e, t) => {
			Z.init(e, t),
				F(e, "optin", (n) =>
					n.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional",
				),
				(e._zod.optout = "optional"),
				F(e, "values", (n) => {
					const r = n.def.innerType._zod.values;
					return r ? new Set([...r, void 0]) : void 0;
				}),
				F(e, "pattern", (n) => {
					const r = n.def.innerType._zod.pattern;
					return r ? new RegExp(`^(${Co(r.source)})?$`) : void 0;
				}),
				(e._zod.parse = (n, r) => {
					if (n.value === void 0) {
						if (t.innerType._zod.optin !== "defaulted") return n;
						const o = t.innerType._zod.run({ value: n.value, issues: [] }, r);
						return o instanceof Promise ? o.then((i) => wa(n, i)) : wa(n, o);
					}
					return t.innerType._zod.run(n, r);
				});
		}),
		oh = w("$ZodExactOptional", (e, t) => {
			_a.init(e, t),
				F(e, "values", (n) => n.def.innerType._zod.values),
				F(e, "pattern", (n) => n.def.innerType._zod.pattern),
				(e._zod.parse = (n, r) => t.innerType._zod.run(n, r));
		}),
		ih = w("$ZodNullable", (e, t) => {
			Z.init(e, t),
				F(e, "optin", (n) => n.def.innerType._zod.optin),
				F(e, "optout", (n) => n.def.innerType._zod.optout),
				F(e, "pattern", (n) => {
					const r = n.def.innerType._zod.pattern;
					return r ? new RegExp(`^(${Co(r.source)}|null)$`) : void 0;
				}),
				F(e, "values", (n) =>
					n.def.innerType._zod.values
						? new Set([...n.def.innerType._zod.values, null])
						: void 0,
				),
				(e._zod.parse = (n, r) =>
					n.value === null ? n : t.innerType._zod.run(n, r));
		}),
		sh = w("$ZodDefault", (e, t) => {
			Z.init(e, t),
				(e._zod.optin = "defaulted"),
				F(e, "values", (n) => n.def.innerType._zod.values),
				(e._zod.parse = (n, r) => {
					if (r.direction === "backward") return t.innerType._zod.run(n, r);
					if (n.value === void 0) return (n.value = t.defaultValue), n;
					const o = t.innerType._zod.run(n, r);
					return o instanceof Promise ? o.then((i) => ka(i, t)) : ka(o, t);
				});
		});
	function ka(e, t) {
		return e.value === void 0 && (e.value = t.defaultValue), e;
	}
	const ah = w("$ZodPrefault", (e, t) => {
			Z.init(e, t),
				(e._zod.optin = "defaulted"),
				F(e, "values", (n) => n.def.innerType._zod.values),
				(e._zod.parse = (n, r) => (
					r.direction === "backward" ||
						(n.value === void 0 && (n.value = t.defaultValue)),
					t.innerType._zod.run(n, r)
				));
		}),
		lh = w("$ZodNonOptional", (e, t) => {
			Z.init(e, t),
				F(e, "values", (n) => {
					const r = n.def.innerType._zod.values;
					return r ? new Set([...r].filter((o) => o !== void 0)) : void 0;
				}),
				(e._zod.parse = (n, r) => {
					const o = t.innerType._zod.run(n, r);
					return o instanceof Promise ? o.then((i) => Sa(i, e)) : Sa(o, e);
				});
		});
	function Sa(e, t) {
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
	function xa(e, t, n, r) {
		return t.issues.length
			? ((e.value = n.catchValue({
					...t,
					value: e.value,
					error: { issues: t.issues.map((o) => et(o, r, Ne())) },
					input: e.value,
				})),
				e)
			: ((e.value = t.value), t.memo && (e.memo = !0), e);
	}
	const ch = w("$ZodCatch", (e, t) => {
			Z.init(e, t),
				F(e, "optin", (n) =>
					n.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional",
				),
				F(e, "optout", (n) => n.def.innerType._zod.optout),
				F(e, "values", (n) => n.def.innerType._zod.values),
				(e._zod.parse = (n, r) => {
					if (r.direction === "backward") return t.innerType._zod.run(n, r);
					const o = t.innerType._zod.run({ value: n.value, issues: [] }, r);
					return o instanceof Promise
						? o.then((i) => xa(n, i, t, r))
						: xa(n, o, t, r);
				});
		}),
		Ca = w("$ZodPipe", (e, t) => {
			Z.init(e, t),
				F(e, "values", (n) => n.def.in._zod.values),
				F(e, "optin", (n) => n.def.in._zod.optin),
				F(e, "optout", (n) => n.def.out._zod.optout),
				F(e, "propValues", (n) => n.def.in._zod.propValues),
				(e._zod.parse = (n, r) => {
					if (r.direction === "backward") {
						const i = t.out._zod.run(n, r);
						return i instanceof Promise
							? i.then((s) => pr(s, t.in, r))
							: pr(i, t.in, r);
					}
					const o = t.in._zod.run(n, r);
					return o instanceof Promise
						? o.then((i) => pr(i, t.out, r))
						: pr(o, t.out, r);
				});
		});
	function pr(e, t, n) {
		return e.issues.some((r) => r.code !== "unrecognized_keys")
			? ((e.aborted = !0), e)
			: t._zod.run({ value: e.value, issues: e.issues }, n);
	}
	const za = w("$ZodCodec", (e, t) => {
		Z.init(e, t),
			F(e, "values", (n) => n.def.in._zod.values),
			F(e, "optin", (n) => n.def.in._zod.optin),
			F(e, "optout", (n) => n.def.out._zod.optout),
			F(e, "propValues", (n) => n.def.in._zod.propValues),
			(e._zod.parse = (n, r) => {
				if ((r.direction || "forward") === "forward") {
					const i = t.in._zod.run(n, r);
					return i instanceof Promise
						? i.then((s) => fr(s, t, r))
						: fr(i, t, r);
				} else {
					const i = t.out._zod.run(n, r);
					return i instanceof Promise
						? i.then((s) => fr(s, t, r))
						: fr(i, t, r);
				}
			});
	});
	function fr(e, t, n) {
		if (e.issues.length) return (e.aborted = !0), e;
		if ((n.direction || "forward") === "forward") {
			const o = t.transform(e.value, e);
			return o instanceof Promise
				? o.then((i) => hr(e, i, t.out, n))
				: hr(e, o, t.out, n);
		} else {
			const o = t.reverseTransform(e.value, e);
			return o instanceof Promise
				? o.then((i) => hr(e, i, t.in, n))
				: hr(e, o, t.in, n);
		}
	}
	function hr(e, t, n, r) {
		return e.issues.length
			? ((e.aborted = !0), e)
			: n._zod.run({ value: t, issues: e.issues }, r);
	}
	const uh = w("$ZodPreprocess", (e, t) => {
			Ca.init(e, t);
		}),
		dh = w("$ZodReadonly", (e, t) => {
			Z.init(e, t),
				F(e, "propValues", (n) => n.def.innerType._zod.propValues),
				F(e, "values", (n) => n.def.innerType._zod.values),
				F(e, "optin", (n) => {
					var r, o;
					return (o = (r = n.def.innerType) == null ? void 0 : r._zod) == null
						? void 0
						: o.optin;
				}),
				F(e, "optout", (n) => {
					var r, o;
					return (o = (r = n.def.innerType) == null ? void 0 : r._zod) == null
						? void 0
						: o.optout;
				}),
				(e._zod.parse = (n, r) => {
					if (r.direction === "backward") return t.innerType._zod.run(n, r);
					const o = t.innerType._zod.run(n, r);
					return o instanceof Promise ? o.then(Ta) : Ta(o);
				});
		});
	function Ta(e) {
		return e.memo || (e.value = Object.freeze(e.value)), e;
	}
	const ph = w("$ZodLazy", (e, t) => {
			Z.init(e, t),
				Pd(e._zod, "innerType", () => {
					const n = t;
					return (
						n._cachedInner || (n._cachedInner = t.getter()), n._cachedInner
					);
				}),
				F(e, "pattern", (n) => {
					var r, o;
					return (o = (r = n.innerType) == null ? void 0 : r._zod) == null
						? void 0
						: o.pattern;
				}),
				F(e, "propValues", (n) => {
					var r, o;
					return (o = (r = n.innerType) == null ? void 0 : r._zod) == null
						? void 0
						: o.propValues;
				}),
				F(e, "optin", (n) => {
					var r, o;
					return (
						((o = (r = n.innerType) == null ? void 0 : r._zod) == null
							? void 0
							: o.optin) ?? void 0
					);
				}),
				F(e, "optout", (n) => {
					var r, o;
					return (
						((o = (r = n.innerType) == null ? void 0 : r._zod) == null
							? void 0
							: o.optout) ?? void 0
					);
				}),
				(e._zod.parse = (n, r) => e._zod.innerType._zod.run(n, r));
		}),
		fh = w("$ZodCustom", (e, t) => {
			be.init(e, t),
				Z.init(e, t),
				(e._zod.parse = (n, r) => n),
				(e._zod.check = (n) => {
					const r = n.value,
						o = t.fn(r);
					if (o instanceof Promise) return o.then((i) => Ia(i, n, r, e));
					Ia(o, n, r, e);
				});
		});
	function Ia(e, t, n, r) {
		if (!e) {
			const o = {
				code: "custom",
				input: n,
				inst: r,
				path: [...(r._zod.def.path ?? [])],
				continue: !r._zod.def.abort,
			};
			r._zod.def.params && (o.params = r._zod.def.params), t.issues.push(_n(o));
		}
	}
	class hh extends Error {
		constructor() {
			super("Cannot parse a reference cycle that closes through a transform"),
				(this.name = "ZodCyclicError");
		}
	}
	const Bo = "~memo",
		$a = [];
	function Do(e) {
		return e.map((t) => (t.path ? { ...t, path: t.path.slice() } : { ...t }));
	}
	const Ea = new WeakMap();
	function Ra(e, t) {
		const n = Ea.get(e);
		if (n !== void 0) return n;
		if (t.has(e)) return !0;
		t.add(e);
		let r = !1;
		const o = (a) => {
				!r && a != null && a._zod && Ra(a, t) && (r = !0);
			},
			i = e._zod.def;
		switch (i.type) {
			case "object": {
				for (const a of Reflect.ownKeys(i.shape)) o(i.shape[a]);
				o(i.catchall);
				break;
			}
			case "array":
				o(i.element);
				break;
			case "tuple":
				for (const a of i.items) o(a);
				o(i.rest);
				break;
			case "record":
			case "map":
				o(i.keyType), o(i.valueType);
				break;
			case "set":
				o(i.valueType);
				break;
			case "union":
				for (const a of i.options) o(a);
				break;
			case "intersection":
				o(i.left), o(i.right);
				break;
			case "optional":
			case "nullable":
			case "default":
			case "prefault":
			case "catch":
			case "readonly":
			case "nonoptional":
			case "promise":
			case "success":
				o(i.innerType);
				break;
			case "pipe":
				o(i.in), o(i.out);
				break;
			case "function":
				o(i.input), o(i.output);
				break;
			case "lazy":
				o(e._zod.innerType);
				break;
			case "template_literal":
			case "string":
			case "number":
			case "int":
			case "boolean":
			case "bigint":
			case "symbol":
			case "undefined":
			case "null":
			case "void":
			case "never":
			case "any":
			case "unknown":
			case "date":
			case "nan":
			case "enum":
			case "literal":
			case "file":
			case "transform":
			case "custom":
				break;
			default:
				for (const a in i) {
					const l = Object.getOwnPropertyDescriptor(i, a);
					if (!l || l.get) continue;
					const c = l.value;
					if (!(!c || typeof c != "object")) {
						if (c._zod) o(c);
						else if (Array.isArray(c)) for (const d of c) o(d);
					}
				}
		}
		return t.delete(e), Ea.set(e, r), r;
	}
	function mh(e, t) {
		let n = e.buckets.get(t);
		return n || ((n = new Map()), e.buckets.set(t, n)), n;
	}
	let mr;
	const gr = [],
		gh = {
			alloc(e, t, n) {
				const r = mr;
				if (!r) return n;
				mr = void 0;
				const o = { value: n, issues: null };
				return r.set(t.value, o), gr.push(o), n;
			},
			guard(e) {
				var t;
				(t = e._zod).deferred ?? (t.deferred = []),
					e._zod.deferred.push(() => {
						const n = e._zod.parse,
							r = (o, i) => {
								if (i.direction !== "backward" && vh(i, o.value))
									throw new hh();
								return n(o, i);
							};
						(e._zod.parse = r), e._zod.run === n && (e._zod.run = r);
					});
			},
			attach(e) {
				var t;
				let n, r, o;
				(t = e._zod).deferred ?? (t.deferred = []),
					e._zod.deferred.push(() => {
						const i = e._zod.parse,
							s = (a, l) => {
								if (n === void 0 && ((n = Ra(e, new Set())), !n))
									return (
										(e._zod.parse = i),
										e._zod.run === s && (e._zod.run = i),
										i(a, l)
									);
								const c = a.value;
								if (c === null || typeof c != "object") return i(a, l);
								let d = l[Bo];
								d ||
									((d = { buckets: new Map(), backEdges: void 0 }),
									(l[Bo] = d));
								let u;
								r === l ? (u = o) : ((u = mh(d, e)), (r = l), (o = u));
								const p = u.get(c);
								if (p)
									return (
										(a.value = p.value),
										p.issues
											? p.issues.length && a.issues.push(...Do(p.issues))
											: ((a.memo = !0),
												d.backEdges ?? (d.backEdges = new Set()),
												d.backEdges.add(p.value)),
										a
									);
								mr = u;
								const f = gr.length,
									h = i(a, l);
								mr = void 0;
								const g = gr.length > f ? gr.pop() : void 0;
								return h instanceof Promise
									? h.then(
											(b) => (
												g && (g.issues = b.issues.length ? Do(b.issues) : $a), b
											),
										)
									: (g && (g.issues = h.issues.length ? Do(h.issues) : $a), h);
							};
						(e._zod.parse = s), e._zod.run === i && (e._zod.run = s);
					});
			},
		};
	function yh() {
		return gh;
	}
	function vh(e, t) {
		var r;
		const n = (r = e[Bo]) == null ? void 0 : r.backEdges;
		return n !== void 0 && t !== null && typeof t == "object" && n.has(t);
	}
	const bh = () => {
		const e = {
			string: { unit: "characters", verb: "to have" },
			file: { unit: "bytes", verb: "to have" },
			array: { unit: "items", verb: "to have" },
			set: { unit: "items", verb: "to have" },
			map: { unit: "entries", verb: "to have" },
		};
		function t(i) {
			return e[i] ?? null;
		}
		const n = {
				regex: "input",
				email: "email address",
				url: "URL",
				emoji: "emoji",
				uuid: "UUID",
				uuidv4: "UUIDv4",
				uuidv6: "UUIDv6",
				nanoid: "nanoid",
				guid: "GUID",
				cuid: "cuid",
				cuid2: "cuid2",
				ulid: "ULID",
				xid: "XID",
				ksuid: "KSUID",
				datetime: "ISO datetime",
				date: "ISO date",
				time: "ISO time",
				duration: "ISO duration",
				ipv4: "IPv4 address",
				ipv6: "IPv6 address",
				mac: "MAC address",
				cidrv4: "IPv4 range",
				cidrv6: "IPv6 range",
				base64: "base64-encoded string",
				base64url: "base64url-encoded string",
				json_string: "JSON string",
				e164: "E.164 number",
				credit_card: "credit card number",
				jwt: "JWT",
				template_literal: "input",
			},
			r = { nan: "NaN" };
		function o(i, s) {
			return i === "number" && typeof s == "number" && !Number.isFinite(s)
				? String(s)
				: (r[i] ?? i);
		}
		return (i) => {
			switch (i.code) {
				case "invalid_type": {
					const s = o(i.expected),
						a = Jd(i.input),
						l = o(a, i.input);
					return `Invalid input: expected ${s}, received ${l}`;
				}
				case "invalid_value":
					return i.values.length === 1
						? `Invalid input: expected ${Bs(i.values[0])}`
						: `Invalid option: expected one of ${Os(i.values, "|")}`;
				case "too_big": {
					const s = i.exact ? "exactly " : i.inclusive ? "<=" : "<",
						a = t(i.origin);
					return a
						? `Too big: expected ${i.origin ?? "value"} to have ${s}${i.maximum.toString()} ${a.unit ?? "elements"}`
						: `Too big: expected ${i.origin ?? "value"} to be ${s}${i.maximum.toString()}`;
				}
				case "too_small": {
					const s = i.exact ? "exactly " : i.inclusive ? ">=" : ">",
						a = t(i.origin);
					return a
						? `Too small: expected ${i.origin} to have ${s}${i.minimum.toString()} ${a.unit}`
						: `Too small: expected ${i.origin} to be ${s}${i.minimum.toString()}`;
				}
				case "invalid_format": {
					const s = i;
					return s.format === "starts_with"
						? `Invalid string: must start with "${s.prefix}"`
						: s.format === "ends_with"
							? `Invalid string: must end with "${s.suffix}"`
							: s.format === "includes"
								? `Invalid string: must include "${s.includes}"`
								: s.format === "regex"
									? `Invalid string: must match pattern ${s.pattern}`
									: `Invalid ${n[s.format] ?? i.format}`;
				}
				case "not_multiple_of":
					return `Invalid number: must be a multiple of ${i.divisor}`;
				case "unrecognized_keys":
					return `Unrecognized key${i.keys.length > 1 ? "s" : ""}: ${Os(i.keys, ", ")}`;
				case "invalid_key":
					return `Invalid key in ${i.origin}`;
				case "invalid_union":
					return i.options && Array.isArray(i.options) && i.options.length > 0
						? `Invalid discriminator value. Expected ${i.options.map((a) => `'${a}'`).join(" | ")}`
						: i.inclusive === !1
							? "Invalid input: more than one option matched"
							: "Invalid input";
				case "invalid_element":
					return `Invalid value in ${i.origin}`;
				default:
					return "Invalid input";
			}
		};
	};
	function wh() {
		return { localeError: bh() };
	}
	var Ma;
	class _h {
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
	function Aa() {
		return new _h();
	}
	(Ma = globalThis).__zod_globalRegistry ?? (Ma.__zod_globalRegistry = Aa());
	const kn = globalThis.__zod_globalRegistry;
	function kh(e, t) {
		return new e({ type: "string", ...R(t) });
	}
	function Pa(e, t) {
		return new e({
			type: "string",
			format: "email",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function Sh(e, t) {
		return new e({
			type: "string",
			format: "guid",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function Oa(e, t) {
		return new e({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function xh(e, t) {
		return new e({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v4",
			...R(t),
		});
	}
	function Ch(e, t) {
		return new e({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v6",
			...R(t),
		});
	}
	function zh(e, t) {
		return new e({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v7",
			...R(t),
		});
	}
	function Th(e, t) {
		return new e({
			type: "string",
			format: "url",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function Ih(e, t) {
		return new e({
			type: "string",
			format: "emoji",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function $h(e, t) {
		return new e({
			type: "string",
			format: "nanoid",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function Eh(e, t) {
		return new e({
			type: "string",
			format: "cuid",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function Rh(e, t) {
		return new e({
			type: "string",
			format: "cuid2",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function Mh(e, t) {
		return new e({
			type: "string",
			format: "ulid",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function Ah(e, t) {
		return new e({
			type: "string",
			format: "xid",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function Ph(e, t) {
		return new e({
			type: "string",
			format: "ksuid",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function Oh(e, t) {
		return new e({
			type: "string",
			format: "ipv4",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function Lh(e, t) {
		return new e({
			type: "string",
			format: "ipv6",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function Nh(e, t) {
		return new e({
			type: "string",
			format: "cidrv4",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function jh(e, t) {
		return new e({
			type: "string",
			format: "cidrv6",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function Bh(e, t) {
		return new e({
			type: "string",
			format: "base64",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function Dh(e, t) {
		return new e({
			type: "string",
			format: "base64url",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function Fh(e, t) {
		return new e({
			type: "string",
			format: "e164",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function Uh(e, t) {
		return new e({
			type: "string",
			format: "jwt",
			check: "string_format",
			abort: !1,
			...R(t),
		});
	}
	function Hh(e, t) {
		return new e({
			type: "string",
			format: "datetime",
			check: "string_format",
			offset: !1,
			local: !1,
			precision: null,
			...R(t),
		});
	}
	function Zh(e, t) {
		return new e({
			type: "string",
			format: "date",
			check: "string_format",
			...R(t),
		});
	}
	function Vh(e, t) {
		return new e({
			type: "string",
			format: "time",
			check: "string_format",
			precision: null,
			...R(t),
		});
	}
	function Wh(e, t) {
		return new e({
			type: "string",
			format: "duration",
			check: "string_format",
			...R(t),
		});
	}
	function qh(e, t) {
		return new e({ type: "number", checks: [], ...R(t) });
	}
	function Kh(e, t) {
		return new e({ type: "number", coerce: !0, checks: [], ...R(t) });
	}
	function Jh(e, t) {
		return new e({
			type: "number",
			check: "number_format",
			abort: !1,
			format: "safeint",
			...R(t),
		});
	}
	function Gh(e, t) {
		return new e({ type: "boolean", ...R(t) });
	}
	function Yh(e, t) {
		return new e({ type: "boolean", coerce: !0, ...R(t) });
	}
	function Xh(e, t) {
		return new e({ type: "null", ...R(t) });
	}
	function Qh(e) {
		return new e({ type: "any" });
	}
	function em(e) {
		return new e({ type: "unknown" });
	}
	function tm(e, t) {
		return new e({ type: "never", ...R(t) });
	}
	function nm(e, t) {
		return new e({ type: "date", ...R(t) });
	}
	function rm(e, t) {
		return new e({ type: "date", coerce: !0, ...R(t) });
	}
	function La(e, t) {
		return new ta({ check: "less_than", ...R(t), value: e, inclusive: !1 });
	}
	function yr(e, t) {
		return new ta({ check: "less_than", ...R(t), value: e, inclusive: !0 });
	}
	function Na(e, t) {
		return new na({ check: "greater_than", ...R(t), value: e, inclusive: !1 });
	}
	function vr(e, t) {
		return new na({ check: "greater_than", ...R(t), value: e, inclusive: !0 });
	}
	function ja(e, t) {
		return new Kp({ check: "multiple_of", ...R(t), value: e });
	}
	function Ba(e, t) {
		return new Gp({ check: "max_length", ...R(t), maximum: e });
	}
	function br(e, t) {
		return new Yp({ check: "min_length", ...R(t), minimum: e });
	}
	function Da(e, t) {
		return new Xp({ check: "length_equals", ...R(t), length: e });
	}
	function om(e, t) {
		return new Qp({
			check: "string_format",
			format: "regex",
			...R(t),
			pattern: e,
		});
	}
	function im(e) {
		return new ef({ check: "string_format", format: "lowercase", ...R(e) });
	}
	function sm(e) {
		return new tf({ check: "string_format", format: "uppercase", ...R(e) });
	}
	function am(e, t) {
		return new nf({
			check: "string_format",
			format: "includes",
			...R(t),
			includes: e,
		});
	}
	function lm(e, t) {
		return new rf({
			check: "string_format",
			format: "starts_with",
			...R(t),
			prefix: e,
		});
	}
	function cm(e, t) {
		return new of({
			check: "string_format",
			format: "ends_with",
			...R(t),
			suffix: e,
		});
	}
	function Lt(e) {
		return new sf({ check: "overwrite", tx: e });
	}
	function um(e) {
		return Lt((t) => t.normalize(e));
	}
	function dm() {
		return Lt((e) => e.trim());
	}
	function pm() {
		return Lt((e) => e.toLowerCase());
	}
	function fm() {
		return Lt((e) => e.toUpperCase());
	}
	function hm() {
		return Lt((e) => Ld(e));
	}
	function mm(e, t, n) {
		return new e({ type: "array", element: t, ...R(n) });
	}
	function gm(e, t, n) {
		return new e({ type: "custom", check: "custom", fn: t, ...R(n) });
	}
	function ym(e, t) {
		const n = vm(
			(r) => (
				(r.addIssue = (o) => {
					if (typeof o == "string") r.issues.push(_n(o, r.value, n._zod.def));
					else {
						const i = o;
						i.fatal && (i.continue = !1),
							i.code ?? (i.code = "custom"),
							"input" in i || (i.input = r.value),
							i.inst ?? (i.inst = n),
							i.continue ?? (i.continue = !n._zod.def.abort),
							r.issues.push(_n(i));
					}
				}),
				e(r.value, r)
			),
			t,
		);
		return n;
	}
	function vm(e, t) {
		const n = new be({ check: "custom", ...R(t) });
		return (n._zod.check = e), n;
	}
	function bm(e, t) {
		const n = R(t);
		let r = n.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
			o = n.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
		n.case !== "sensitive" &&
			((r = r.map((f) => (typeof f == "string" ? f.toLowerCase() : f))),
			(o = o.map((f) => (typeof f == "string" ? f.toLowerCase() : f))));
		const i = new Set(r),
			s = new Set(o),
			a = e.Codec ?? za,
			l = e.Boolean ?? ua,
			c = e.String ?? ur,
			d = new c({ type: "string", error: n.error }),
			u = new l({ type: "boolean", error: n.error }),
			p = new a({
				type: "pipe",
				in: d,
				out: u,
				transform: (f, h) => {
					let g = f;
					return (
						n.case !== "sensitive" && (g = g.toLowerCase()),
						i.has(g)
							? !0
							: s.has(g)
								? !1
								: (h.issues.push({
										code: "invalid_value",
										expected: "stringbool",
										values: [...i, ...s],
										input: h.value,
										inst: p,
										continue: !1,
									}),
									{})
					);
				},
				reverseTransform: (f, h) =>
					f === !0 ? r[0] || "true" : o[0] || "false",
				error: n.error,
			});
		return (
			(p._zod.bag.truthy = r),
			(p._zod.bag.falsy = o),
			(p._zod.bag.case = n.case ?? "insensitive"),
			p
		);
	}
	function Sn(e, ...t) {
		for (const n of t)
			for (const r of Reflect.ownKeys(n))
				Object.prototype.propertyIsEnumerable.call(n, r) && ye(e, r, n[r]);
		return e;
	}
	function Fa(e) {
		let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
		return (
			t === "draft-4" && (t = "draft-04"),
			t === "draft-7" && (t = "draft-07"),
			{
				processors: e.processors ?? {},
				metadataRegistry: (e == null ? void 0 : e.metadata) ?? kn,
				target: t,
				unrepresentable: (e == null ? void 0 : e.unrepresentable) ?? "throw",
				override: (e == null ? void 0 : e.override) ?? (() => {}),
				io: (e == null ? void 0 : e.io) ?? "output",
				counter: 0,
				seen: new Map(),
				sharedDefsExtractedFor: void 0,
				sharedEmitDoneFor: void 0,
				cycles: (e == null ? void 0 : e.cycles) ?? "ref",
				reused: (e == null ? void 0 : e.reused) ?? "inline",
				intersections: [],
				deferred: [],
				external: (e == null ? void 0 : e.external) ?? void 0,
			}
		);
	}
	function Ze(e, t, n, r, o) {
		const i =
			typeof t.unrepresentable == "function"
				? t.unrepresentable({ zodSchema: e, path: r.path, message: o })
				: t.unrepresentable;
		if (i === "any") return !1;
		if (i === void 0 || i === "throw") throw new Error(o);
		return Object.assign(n, i), !0;
	}
	function Q(e, t, n = { path: [], schemaPath: [] }) {
		var d, u;
		var r;
		const o = e._zod.def,
			i = t.seen.get(e);
		if (i)
			return (
				i.count++, n.schemaPath.includes(e) && (i.cycle = n.path), i.schema
			);
		const s = { schema: {}, count: 1, cycle: void 0, path: n.path };
		t.seen.set(e, s),
			(t.sharedDefsExtractedFor = void 0),
			(t.sharedEmitDoneFor = void 0);
		const a = (u = (d = e._zod).toJSONSchema) == null ? void 0 : u.call(d);
		if (a) s.schema = a;
		else {
			const p = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
			if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, s.schema, p);
			else {
				const h = s.schema,
					g = t.processors[o.type];
				if (!g)
					throw new Error(
						`[toJSONSchema]: Non-representable type encountered: ${o.type}`,
					);
				g(e, t, h, p);
			}
			const f = e._zod.parent;
			f && (s.ref || (s.ref = f), Q(f, t, p), (t.seen.get(f).isParent = !0));
		}
		const l = t.metadataRegistry.get(e);
		return (
			l && Sn(s.schema, l),
			t.io === "input" &&
				ve(e) &&
				(delete s.schema.examples, delete s.schema.default),
			t.io === "input" &&
				"_prefault" in s.schema &&
				((r = s.schema).default ?? (r.default = s.schema._prefault)),
			delete s.schema._prefault,
			t.seen.get(e).schema
		);
	}
	function Ua(e) {
		return e.replace(/~/g, "~0").replace(/\//g, "~1");
	}
	function Ha(e, t) {
		var s, a, l, c;
		const n = e.seen.get(t);
		if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
		if (e.external && e.sharedDefsExtractedFor === e.external) return;
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
				var g;
				const u = e.target === "draft-2020-12" ? "$defs" : "definitions";
				if (e.external) {
					const b = (g = e.external.registry.get(d[0])) == null ? void 0 : g.id,
						v = e.external.uri ?? ((x) => x);
					if (b) return { ref: v(b) };
					const _ = d[1].defId ?? d[1].schema.id ?? `schema${e.counter++}`;
					return (
						(d[1].defId = _),
						{ defId: _, ref: `${v("__shared")}#/${u}/${Ua(_)}` }
					);
				}
				const p = "#",
					f = `${p}/${u}/`;
				if (d[1] === n && !d[1].schema.id) return { ref: p };
				const h = d[1].schema.id ?? `__schema${e.counter++}`;
				return { defId: h, ref: f + Ua(h) };
			},
			i = (d) => {
				if (d[1].schema.$ref) return;
				const u = d[1],
					{ ref: p, defId: f } = o(d);
				(u.def = { ...u.schema }), f && (u.defId = f);
				const h = u.schema;
				for (const g in h) delete h[g];
				h.$ref = p;
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
				const f = (l = e.external.registry.get(d[0])) == null ? void 0 : l.id;
				if (t !== d[0] && f) {
					i(d);
					continue;
				}
			}
			if ((c = e.metadataRegistry.get(d[0])) == null ? void 0 : c.id) {
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
		e.external && (e.sharedDefsExtractedFor = e.external);
	}
	function Za(e) {
		const t = e.anyOf;
		if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
		const n = [];
		for (const r of t) {
			if (!r || typeof r != "object") return;
			Za(r);
			const o = Object.keys(r);
			if (o.length !== 1 || o[0] !== "type") return;
			const i = r.type;
			for (const s of Array.isArray(i) ? i : [i]) {
				if (typeof s != "string") return;
				n.includes(s) || n.push(s);
			}
		}
		delete e.anyOf, (e.type = n.length === 1 ? n[0] : n);
	}
	const Va = new Set([
			"type",
			"properties",
			"required",
			"additionalProperties",
		]),
		Wa = ["oneOf", "anyOf"];
	function qa(e) {
		const t = e.additionalProperties;
		return t === void 0 || t === !1 || typeof t != "object" || t === null
			? null
			: Object.keys(t).length
				? t
				: null;
	}
	function Fo(e) {
		var i;
		const t = [];
		for (const s of e) {
			if (typeof s != "object" || s.type !== "object") return null;
			for (const a in s) if (!Va.has(a)) return null;
			t.push(s);
		}
		const n = {},
			r = new Set();
		for (const s of t) {
			for (const a in s.properties) {
				if (Object.prototype.hasOwnProperty.call(n, a)) continue;
				const l = [];
				for (const d of t) {
					const u = ((i = d.properties) == null ? void 0 : i[a]) ?? qa(d);
					u != null &&
						(l.some((p) => JSON.stringify(p) === JSON.stringify(u)) ||
							l.push(u));
				}
				const c = l.length === 1 ? l[0] : (Fo(l) ?? { allOf: l });
				ye(n, a, c);
			}
			for (const a of s.required ?? []) r.add(a);
		}
		const o = { type: "object", properties: n };
		if (
			(r.size && (o.required = [...r]),
			t.every((s) => s.additionalProperties === !1))
		)
			o.additionalProperties = !1;
		else {
			const s = [];
			for (const a of t) {
				const l = qa(a);
				l &&
					!s.some((c) => JSON.stringify(c) === JSON.stringify(l)) &&
					s.push(l);
			}
			s.length === 1
				? (o.additionalProperties = s[0])
				: s.length > 1 && (o.additionalProperties = { allOf: s });
		}
		return o;
	}
	function wm(e) {
		const t = e.allOf;
		if (!Array.isArray(t) || t.length < 2) return;
		for (const o of Va) if (o in e) return;
		const n = t.filter((o) => Wa.some((i) => Array.isArray(o[i])));
		let r = null;
		if (!n.length) r = Fo(t);
		else {
			const o = n[0],
				i = Wa.find((l) => Array.isArray(o[l]));
			if (Object.keys(o).length !== 1) return;
			const s = t.filter((l) => l !== o),
				a = o[i].map((l) => Fo([...s, l]));
			if (a.some((l) => !l)) return;
			r = { [i]: a };
		}
		r && (delete e.allOf, Sn(e, r));
	}
	function Ka(e, t) {
		var a, l, c, d;
		const n = e.seen.get(t);
		if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
		const r = (u) => {
			const p = e.seen.get(u);
			if (p.ref === null) return;
			const f = p.def ?? p.schema,
				h = { ...f },
				g = p.ref;
			if (((p.ref = null), g)) {
				r(g);
				const v = e.seen.get(g),
					_ = v.schema;
				if (
					(_.$ref &&
					(e.target === "draft-07" ||
						e.target === "draft-04" ||
						e.target === "openapi-3.0")
						? ((f.allOf = f.allOf ?? []), f.allOf.push(_))
						: Sn(f, _),
					Sn(f, h),
					u._zod.parent === g)
				)
					for (const S in f)
						S === "$ref" || S === "allOf" || S in h || delete f[S];
				if (_.$ref && v.def)
					for (const S in f)
						S === "$ref" ||
							S === "allOf" ||
							(S in v.def &&
								JSON.stringify(f[S]) === JSON.stringify(v.def[S]) &&
								delete f[S]);
			}
			const b = u._zod.parent;
			if (b && b !== g) {
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
		if (!e.external || e.sharedEmitDoneFor !== e.external) {
			for (const u of [...e.seen.entries()].reverse()) r(u[0]);
			if (e.target !== "openapi-3.0")
				for (const u of e.seen.entries()) Za(u[1].def ?? u[1].schema);
			for (const u of e.deferred) u();
			if (e.intersections.length) {
				const u = new Map();
				for (const p of e.seen.values())
					for (const f of [p.schema, p.def]) {
						const h = f == null ? void 0 : f.allOf;
						if (!Array.isArray(h)) continue;
						const g = u.get(h);
						g ? g.push(f) : u.set(h, [f]);
					}
				for (const p of e.intersections) for (const f of u.get(p) ?? []) wm(f);
			}
		}
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
			const u = (l = e.external.registry.get(t)) == null ? void 0 : l.id;
			if (!u) throw new Error("Schema is missing an `id` property");
			o.$id = e.external.uri(u);
		}
		Sn(o, n.defId ? n.schema : (n.def ?? n.schema));
		const i = (c = e.metadataRegistry.get(t)) == null ? void 0 : c.id;
		i !== void 0 && o.id === i && delete o.id;
		const s = ((d = e.external) == null ? void 0 : d.defs) ?? {};
		if (!e.external || e.sharedEmitDoneFor !== e.external)
			for (const u of e.seen.entries()) {
				const p = u[1];
				p.def &&
					p.defId &&
					(p.def.id === p.defId && delete p.def.id, ye(s, p.defId, p.def));
			}
		e.external && (e.sharedEmitDoneFor = e.external),
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
							input: wr(t, "input", e.processors),
							output: wr(t, "output", e.processors),
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
	function ve(e, t) {
		const n = t ?? { seen: new Set() };
		if (n.seen.has(e)) return !1;
		n.seen.add(e);
		const r = e._zod.def;
		if (r.type === "transform") return !0;
		if (r.type === "array") return ve(r.element, n);
		if (r.type === "set") return ve(r.valueType, n);
		if (r.type === "lazy") return ve(r.getter(), n);
		if (
			r.type === "promise" ||
			r.type === "optional" ||
			r.type === "nonoptional" ||
			r.type === "nullable" ||
			r.type === "readonly" ||
			r.type === "default" ||
			r.type === "prefault" ||
			r.type === "catch"
		)
			return ve(r.innerType, n);
		if (r.type === "intersection") return ve(r.left, n) || ve(r.right, n);
		if (r.type === "record" || r.type === "map")
			return ve(r.keyType, n) || ve(r.valueType, n);
		if (r.type === "pipe")
			return e._zod.traits.has("$ZodCodec") ? !0 : ve(r.in, n) || ve(r.out, n);
		if (r.type === "object") {
			for (const o in r.shape) if (ve(r.shape[o], n)) return !0;
			return !1;
		}
		if (r.type === "union") {
			for (const o of r.options) if (ve(o, n)) return !0;
			return !1;
		}
		if (r.type === "tuple") {
			for (const o of r.items) if (ve(o, n)) return !0;
			return !!(r.rest && ve(r.rest, n));
		}
		return !1;
	}
	const _m =
			(e, t = {}) =>
			(n) => {
				const r = Fa({ ...n, processors: t });
				return Q(e, r), Ha(r, e), Ka(r, e);
			},
		wr =
			(e, t, n = {}) =>
			(r) => {
				const { libraryOptions: o, target: i } = r ?? {},
					s = Fa({ ...(o ?? {}), target: i, io: t, processors: n });
				return Q(e, s), Ha(s, e), Ka(s, e);
			},
		km = {
			guid: "uuid",
			url: "uri",
			datetime: "date-time",
			json_string: "json-string",
			regex: "",
		},
		Sm = (e, t, n, r) => {
			const o = n;
			o.type = "string";
			const {
				minimum: i,
				maximum: s,
				format: a,
				patterns: l,
				contentEncoding: c,
				laxFormat: d,
			} = e._zod.bag;
			if (
				(typeof i == "number" && (o.minLength = i),
				typeof s == "number" && (o.maxLength = s),
				a &&
					((o.format = km[a] ?? a),
					o.format === "" && delete o.format,
					(a === "time" || d) && delete o.format),
				c && (o.contentEncoding = c),
				l && l.size > 0)
			) {
				const u = [...l];
				u.length === 1
					? (o.pattern = u[0].source)
					: u.length > 1 &&
						(o.allOf = [
							...u.map((p) => ({
								...(t.target === "draft-07" ||
								t.target === "draft-04" ||
								t.target === "openapi-3.0"
									? { type: "string" }
									: {}),
								pattern: p.source,
							})),
						]);
			}
		},
		xm = (e, t, n, r) => {
			const o = n,
				{
					minimum: i,
					maximum: s,
					format: a,
					multipleOf: l,
					exclusiveMaximum: c,
					exclusiveMinimum: d,
				} = e._zod.bag;
			typeof a == "string" && a.includes("int")
				? (o.type = "integer")
				: (o.type = "number");
			const u = typeof d == "number" && d >= (i ?? Number.NEGATIVE_INFINITY),
				p = typeof c == "number" && c <= (s ?? Number.POSITIVE_INFINITY),
				f = t.target === "draft-04" || t.target === "openapi-3.0";
			u
				? f
					? ((o.minimum = d), (o.exclusiveMinimum = !0))
					: (o.exclusiveMinimum = d)
				: typeof i == "number" && (o.minimum = i),
				p
					? f
						? ((o.maximum = c), (o.exclusiveMaximum = !0))
						: (o.exclusiveMaximum = c)
					: typeof s == "number" && (o.maximum = s),
				typeof l == "number" &&
					(Number.isFinite(l) && l !== 0
						? (o.multipleOf = Math.abs(l))
						: Ze(
								e,
								t,
								o,
								r,
								`A multipleOf divisor of ${l} cannot be represented in JSON Schema`,
							));
		},
		Cm = (e, t, n, r) => {
			n.type = "boolean";
		},
		zm = (e, t, n, r) => {
			t.target === "openapi-3.0"
				? ((n.type = "string"), (n.nullable = !0), (n.enum = [null]))
				: (n.type = "null");
		},
		Tm = (e, t, n, r) => {
			n.not = {};
		},
		Im = (e, t, n, r) => {},
		$m = (e, t, n, r) => {},
		Em = (e, t, n, r) => {
			Ze(e, t, n, r, "Date cannot be represented in JSON Schema");
		},
		Rm = (e, t, n, r) => {
			const o = e._zod.def,
				i = Ps(o.entries);
			if (i.length === 0) {
				n.not = {};
				return;
			}
			i.every((s) => typeof s == "number") && (n.type = "number"),
				i.every((s) => typeof s == "string") && (n.type = "string"),
				(n.enum = i);
		},
		Mm = (e, t, n, r) => {
			const o = e._zod.def;
			if (o.values.length === 0) {
				n.not = {};
				return;
			}
			const i = [];
			for (const s of o.values)
				if (s === void 0) {
					if (
						Ze(
							e,
							t,
							n,
							r,
							"Literal `undefined` cannot be represented in JSON Schema",
						)
					)
						return;
				} else if (typeof s == "bigint") {
					if (
						Ze(
							e,
							t,
							n,
							r,
							"BigInt literals cannot be represented in JSON Schema",
						)
					)
						return;
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
		Am = (e, t, n, r) => {
			Ze(e, t, n, r, "Custom types cannot be represented in JSON Schema");
		},
		Pm = (e, t, n, r) => {
			Ze(e, t, n, r, "Transforms cannot be represented in JSON Schema");
		},
		Om = (e, t, n, r) => {
			const o = n,
				i = e._zod.def,
				{ minimum: s, maximum: a } = e._zod.bag;
			typeof s == "number" && (o.minItems = s),
				typeof a == "number" && (o.maxItems = a),
				(o.type = "array"),
				(o.items = Q(i.element, t, { ...r, path: [...r.path, "items"] }));
		};
	function xn(e) {
		const t = e._zod.def;
		return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform")
			? xn(t.out)
			: t.type === "catch"
				? xn(t.innerType)
				: e._zod.optin;
	}
	const Lm = (e, t, n, r) => {
			var d;
			const o = n,
				i = e._zod.def,
				s = i.shape;
			if (
				Object.getOwnPropertySymbols(s).length &&
				Ze(e, t, o, r, "Symbol keys cannot be represented in JSON Schema")
			)
				return;
			(o.type = "object"), (o.properties = {});
			for (const u in s)
				ye(
					o.properties,
					u,
					Q(s[u], t, { ...r, path: [...r.path, "properties", u] }),
				);
			const l = new Set(Object.keys(s)),
				c = new Set(
					[...l].filter((u) => {
						const p = i.shape[u];
						return t.io === "input"
							? xn(p) === void 0
							: p._zod.optout === void 0;
					}),
				);
			c.size > 0 && (o.required = Array.from(c)),
				((d = i.catchall) == null ? void 0 : d._zod.def.type) === "never"
					? (o.additionalProperties = !1)
					: i.catchall
						? i.catchall &&
							(o.additionalProperties = Q(i.catchall, t, {
								...r,
								path: [...r.path, "additionalProperties"],
							}))
						: t.io === "output" && (o.additionalProperties = !1);
		},
		Nm = (e, t, n, r) => {
			const o = e._zod.def,
				i = o.inclusive === !1,
				s = o.options.map((a, l) =>
					Q(a, t, { ...r, path: [...r.path, i ? "oneOf" : "anyOf", l] }),
				);
			i ? (n.oneOf = s) : (n.anyOf = s);
		},
		jm = (e, t, n, r) => {
			const o = e._zod.def,
				i = Q(o.left, t, { ...r, path: [...r.path, "allOf", 0] }),
				s = Q(o.right, t, { ...r, path: [...r.path, "allOf", 1] }),
				a = (c) => "allOf" in c && Object.keys(c).length === 1,
				l = [...(a(i) ? i.allOf : [i]), ...(a(s) ? s.allOf : [s])];
			(n.allOf = l), t.intersections.push(l);
		},
		Bm = (e, t, n, r) => {
			const o = n,
				i = e._zod.def;
			o.type = "array";
			const s = t.target === "draft-2020-12" ? "prefixItems" : "items",
				a =
					t.target === "draft-2020-12" || t.target === "openapi-3.0"
						? "items"
						: "additionalItems",
				l = i.items.map((g, b) => Q(g, t, { ...r, path: [...r.path, s, b] })),
				c = i.rest
					? Q(i.rest, t, {
							...r,
							path: [
								...r.path,
								a,
								...(t.target === "openapi-3.0" ? [i.items.length] : []),
							],
						})
					: null;
			let d = i.items.length;
			for (; d > 0; ) {
				const g = i.items[d - 1];
				if (
					!(t.io === "input" ? xn(g) !== void 0 : g._zod.optout === "optional")
				)
					break;
				d--;
			}
			const u = i.items.length,
				p = !i.rest;
			t.target === "draft-2020-12"
				? ((o.prefixItems = l),
					p ? (o.items = !1) : c && (o.items = c),
					d > 0 && (o.minItems = d),
					p && (o.maxItems = u))
				: t.target === "openapi-3.0"
					? ((o.items = { anyOf: l }),
						c && o.items.anyOf.push(c),
						d > 0 && (o.minItems = d),
						p && (o.maxItems = u))
					: ((o.items = l),
						p ? (o.additionalItems = !1) : c && (o.additionalItems = c),
						d > 0 && (o.minItems = d),
						p && (o.maxItems = u));
			const { minimum: f, maximum: h } = e._zod.bag;
			typeof f == "number" && (o.minItems = f),
				typeof h == "number" && (o.maxItems = h);
		};
	function Uo(e, t, n) {
		var h;
		if (t.$ref) {
			if (n.has(t)) return t;
			n.add(t);
			const g = (h = e.get(t)) == null ? void 0 : h.def;
			if (!g) return t;
			const b = Uo(e, g, n);
			return b === g ? t : b;
		}
		for (const g of ["anyOf", "oneOf"]) {
			const b = t[g];
			if (!Array.isArray(b)) continue;
			const v = b.map((_) => Uo(e, _, n));
			v.some((_, x) => _ !== b[x]) && (t = { ...t, [g]: v });
		}
		const r = Array.isArray(t.type) ? t.type : [t.type],
			o =
				!r.includes("string") &&
				r.some((g) => g === "number" || g === "integer"),
			i = t.enum ?? (t.const !== void 0 ? [t.const] : void 0);
		if (!o && !(i != null && i.some((g) => typeof g == "number"))) return t;
		const {
			minimum: s,
			maximum: a,
			exclusiveMinimum: l,
			exclusiveMaximum: c,
			multipleOf: d,
			format: u,
			id: p,
			...f
		} = t;
		return (
			f.enum
				? (f.enum = f.enum.map((g) => (typeof g == "number" ? String(g) : g)))
				: typeof f.const == "number" && (f.const = String(f.const)),
			o &&
				((f.type = "string"),
				i || (f.pattern = (r.includes("number") ? Oo : ea).source)),
			f
		);
	}
	const Ho = new WeakMap();
	function Dm(e) {
		var r;
		const t = new Map();
		for (const o of e.seen.values())
			o.def && !t.has(o.schema) && t.set(o.schema, o);
		const n = new Map();
		for (const o of Ho.get(e) ?? []) {
			const i = e.seen.get(o),
				s =
					(r =
						(i == null ? void 0 : i.def) ?? (i == null ? void 0 : i.schema)) ==
					null
						? void 0
						: r.propertyNames;
			if (!s || s === !0 || n.has(s)) continue;
			const a = Uo(t, s, new Set());
			a !== s && n.set(s, a);
		}
		if (n.size)
			for (const o of e.seen.values())
				for (const i of [o.schema, o.def]) {
					const s = i && n.get(i.propertyNames);
					s && (i.propertyNames = s);
				}
	}
	const Fm = (e, t, n, r) => {
			const o = n,
				i = e._zod.def;
			o.type = "object";
			const s = i.keyType,
				a = s._zod.bag,
				l = a == null ? void 0 : a.patterns;
			if (i.mode === "loose" && l && l.size > 0) {
				const u = Q(i.valueType, t, {
					...r,
					path: [...r.path, "patternProperties", "*"],
				});
				o.patternProperties = {};
				for (const p of l) ye(o.patternProperties, p.source, u);
			} else {
				if (t.target === "draft-07" || t.target === "draft-2020-12") {
					o.propertyNames = Q(i.keyType, t, {
						...r,
						path: [...r.path, "propertyNames"],
					});
					let u = Ho.get(t);
					u || ((u = []), Ho.set(t, u), t.deferred.push(() => Dm(t))),
						u.push(e);
				}
				o.additionalProperties = Q(i.valueType, t, {
					...r,
					path: [...r.path, "additionalProperties"],
				});
			}
			const c = s._zod.values,
				d = t.io === "input" && xn(i.valueType) !== void 0;
			if (c && !i.partial && !d) {
				const u = [...c].filter(
					(p) => typeof p == "string" || typeof p == "number",
				);
				u.length > 0 && (o.required = u.map(String));
			}
		},
		Um = (e, t, n, r) => {
			const o = e._zod.def,
				i = Q(o.innerType, t, r),
				s = t.seen.get(e);
			t.target === "openapi-3.0"
				? ((s.ref = o.innerType), (n.nullable = !0))
				: (n.anyOf = [i, { type: "null" }]);
		},
		Hm = (e, t, n, r) => {
			const o = e._zod.def;
			Q(o.innerType, t, r);
			const i = t.seen.get(e);
			i.ref = o.innerType;
		},
		Zo = Symbol();
	function Ja(e, t, n, r, o) {
		let i = !1;
		const s = JSON.stringify(e, (a, l) =>
			typeof l != "bigint" ? l : ((i = !0), null),
		);
		return i
			? (Ze(t, n, r, o, "BigInt defaults cannot be represented in JSON Schema"),
				Zo)
			: JSON.parse(s);
	}
	const Zm = (e, t, n, r) => {
			const o = e._zod.def;
			Q(o.innerType, t, r);
			const i = t.seen.get(e);
			i.ref = o.innerType;
			const s = Ja(o.defaultValue, e, t, n, r);
			s !== Zo && (n.default = s);
		},
		Vm = (e, t, n, r) => {
			const o = e._zod.def;
			Q(o.innerType, t, r);
			const i = t.seen.get(e);
			if (((i.ref = o.innerType), t.io !== "input")) return;
			const s = Ja(o.defaultValue, e, t, n, r);
			s !== Zo && (n._prefault = s);
		},
		Wm = (e, t, n, r) => {
			const o = e._zod.def;
			Q(o.innerType, t, r);
			const i = t.seen.get(e);
			i.ref = o.innerType;
			let s;
			try {
				s = o.catchValue(void 0);
			} catch {
				Ze(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
				return;
			}
			n.default = s;
		},
		qm = (e, t, n, r) => {
			const o = e._zod.def,
				i = o.in._zod.traits.has("$ZodTransform"),
				s = t.io === "input" ? (i ? o.out : o.in) : o.out;
			Q(s, t, r);
			const a = t.seen.get(e);
			a.ref = s;
		},
		Km = (e, t, n, r) => {
			const o = e._zod.def;
			Q(o.innerType, t, r);
			const i = t.seen.get(e);
			(i.ref = o.innerType), (n.readOnly = !0);
		},
		Ga = (e, t, n, r) => {
			const o = e._zod.def;
			Q(o.innerType, t, r);
			const i = t.seen.get(e);
			i.ref = o.innerType;
		},
		Jm = (e, t, n, r) => {
			const o = e._zod.innerType;
			Q(o, t, r);
			const i = t.seen.get(e);
			i.ref = o;
		},
		Ya = new WeakSet([Object.prototype, Error.prototype]);
	function _r(e, t, n) {
		Object.defineProperty(e, t, {
			configurable: !0,
			enumerable: !1,
			get() {
				const r = n(this);
				return (
					Object.defineProperty(this, t, {
						value: r,
						configurable: !0,
						writable: !0,
					}),
					r
				);
			},
			set(r) {
				Object.defineProperty(this, t, {
					value: r,
					configurable: !0,
					writable: !0,
				});
			},
		});
	}
	const Xa = (e, t) => {
			Js.init(e, t), (e.name = "ZodError");
			const n = Object.getPrototypeOf(e);
			Ya.has(n) ||
				(Ya.add(n),
				_r(n, "format", (r) => (o) => cp(r, o)),
				_r(n, "flatten", (r) => (o) => lp(r, o)),
				_r(n, "addIssue", (r) => (o) => {
					r.issues.push(o), (r.message = JSON.stringify(r.issues, xo, 2));
				}),
				_r(n, "addIssues", (r) => (o) => {
					r.issues.push(...o), (r.message = JSON.stringify(r.issues, xo, 2));
				}),
				Object.defineProperty(n, "isEmpty", {
					configurable: !0,
					enumerable: !1,
					get() {
						return this.issues.length === 0;
					},
				}));
		},
		Gm = w("ZodError", Xa),
		Ce = w("ZodError", Xa, void 0, { Parent: Error }),
		Ym = Mo(Ce),
		Xm = Ao(Ce),
		Qm = sr(Ce),
		eg = ar(Ce),
		tg = pp(Ce),
		ng = fp(Ce),
		rg = hp(Ce),
		og = mp(Ce),
		ig = gp(Ce),
		sg = yp(Ce),
		ag = vp(Ce),
		lg = bp(Ce);
	function cg() {
		xe.localeError || Ne(wh());
	}
	function Cn() {
		xe.memoizer || Ne({ memoizer: yh() });
	}
	const W = w(
			"ZodType",
			(e, t) => (cg(), Z.init(e, t), (e.def = t), (e.type = t.type), e),
			{
				check(...e) {
					const t = this.def;
					return this.clone(
						Ye(t, {
							checks: [
								...(t.checks ?? []),
								...e.map((n) =>
									typeof n == "function"
										? {
												_zod: {
													check: n,
													def: { check: "custom" },
													onattach: [],
												},
											}
										: n,
								),
							],
						}),
						{ parent: !0 },
					);
				},
				with(...e) {
					return this.check(...e);
				},
				clone(e, t) {
					return Xe(this, e, t);
				},
				brand() {
					return this;
				},
				register(e, t) {
					return e.add(this, t), this;
				},
				refine(e, t) {
					return this.check(uy(e, t));
				},
				superRefine(e, t) {
					return this.check(dy(e, t));
				},
				overwrite(e) {
					return this.check(Lt(e));
				},
				optional() {
					return ll(this);
				},
				exactOptional() {
					return Kg(this);
				},
				nullable() {
					return ul(this);
				},
				nullish() {
					return ll(ul(this));
				},
				nonoptional(e) {
					return ey(this, e);
				},
				array() {
					return P(this);
				},
				or(e) {
					return J([this, e]);
				},
				and(e) {
					return Hg(this, e);
				},
				transform(e) {
					return pl(this, al(e));
				},
				default(e) {
					return Yg(this, e);
				},
				prefault(e) {
					return Qg(this, e);
				},
				catch(e) {
					return ny(this, e);
				},
				pipe(e) {
					return pl(this, e);
				},
				readonly() {
					return sy(this);
				},
				describe(e) {
					const t = this.clone();
					return kn.add(t, { description: e }), t;
				},
				meta(...e) {
					if (e.length === 0) return kn.get(this);
					const t = this.clone();
					return kn.add(t, e[0]), t;
				},
				isOptional() {
					return this.safeParse(void 0).success;
				},
				isNullable() {
					return this.safeParse(null).success;
				},
				apply(e, ...t) {
					return t.length === 0 ? e(this) : e(this, ...t);
				},
				get "~standard"() {
					return Us(this, "~standard", {
						...oa(this),
						jsonSchema: {
							input: wr(this, "input"),
							output: wr(this, "output"),
						},
					});
				},
				set "~standard"(e) {
					Pt(this, "~standard", e);
				},
				parse: function e(t, n) {
					return Ym(this, t, n, { callee: e });
				},
				parseAsync: async function e(t, n) {
					return await Xm(this, t, n, { callee: e });
				},
				safeParse(e, t) {
					return Qm(this, e, t);
				},
				async safeParseAsync(e, t) {
					return eg(this, e, t);
				},
				get spa() {
					return this == null ? void 0 : this.safeParseAsync;
				},
				set spa(e) {
					Pt(this, "spa", e);
				},
				encode: function e(t, n) {
					return tg(this, t, n, { callee: e });
				},
				decode: function e(t, n) {
					return ng(this, t, n, { callee: e });
				},
				encodeAsync: async function e(t, n) {
					return await rg(this, t, n, { callee: e });
				},
				decodeAsync: async function e(t, n) {
					return await og(this, t, n, { callee: e });
				},
				safeEncode(e, t) {
					return ig(this, e, t);
				},
				safeDecode(e, t) {
					return sg(this, e, t);
				},
				async safeEncodeAsync(e, t) {
					return ag(this, e, t);
				},
				async safeDecodeAsync(e, t) {
					return lg(this, e, t);
				},
				toJSONSchema(e) {
					return _m(this, {})(e);
				},
				get description() {
					var e;
					return (e = kn.get(this)) == null ? void 0 : e.description;
				},
				get _def() {
					return this._zod.def;
				},
			},
		),
		Qa = w(
			"_ZodString",
			(e, t) => {
				ur.init(e, t),
					W.init(e, t),
					(e._zod.processJSONSchema = (r, o, i) => Sm(e, r, o));
				const n = e._zod.bag;
				(e.format = n.format ?? null),
					(e.minLength = n.minimum ?? null),
					(e.maxLength = n.maximum ?? null);
			},
			{
				regex(...e) {
					return this.check(om(...e));
				},
				includes(...e) {
					return this.check(am(...e));
				},
				startsWith(...e) {
					return this.check(lm(...e));
				},
				endsWith(...e) {
					return this.check(cm(...e));
				},
				min(...e) {
					return this.check(br(...e));
				},
				max(...e) {
					return this.check(Ba(...e));
				},
				length(...e) {
					return this.check(Da(...e));
				},
				nonempty(...e) {
					return this.check(br(1, ...e));
				},
				lowercase(e) {
					return this.check(im(e));
				},
				uppercase(e) {
					return this.check(sm(e));
				},
				trim() {
					return this.check(dm());
				},
				normalize(...e) {
					return this.check(um(...e));
				},
				toLowerCase() {
					return this.check(pm());
				},
				toUpperCase() {
					return this.check(fm());
				},
				slugify() {
					return this.check(hm());
				},
			},
		),
		el = w(
			"ZodString",
			(e, t) => {
				ur.init(e, t), Qa.init(e, t);
			},
			{
				email(e) {
					return this.check(Pa(tl, e));
				},
				url(e) {
					return this.check(Th(mg, e));
				},
				jwt(e) {
					return this.check(Uh(Eg, e));
				},
				emoji(e) {
					return this.check(Ih(gg, e));
				},
				guid(e) {
					return this.check(Sh(hg, e));
				},
				uuid(e) {
					return this.check(Oa(zn, e));
				},
				uuidv4(e) {
					return this.check(xh(zn, e));
				},
				uuidv6(e) {
					return this.check(Ch(zn, e));
				},
				uuidv7(e) {
					return this.check(zh(zn, e));
				},
				nanoid(e) {
					return this.check($h(yg, e));
				},
				cuid(e) {
					return this.check(Eh(vg, e));
				},
				cuid2(e) {
					return this.check(Rh(bg, e));
				},
				ulid(e) {
					return this.check(Mh(wg, e));
				},
				base64(e) {
					return this.check(Bh(Tg, e));
				},
				base64url(e) {
					return this.check(Dh(Ig, e));
				},
				xid(e) {
					return this.check(Ah(_g, e));
				},
				ksuid(e) {
					return this.check(Ph(kg, e));
				},
				ipv4(e) {
					return this.check(Oh(Sg, e));
				},
				ipv6(e) {
					return this.check(Lh(xg, e));
				},
				cidrv4(e) {
					return this.check(Nh(Cg, e));
				},
				cidrv6(e) {
					return this.check(jh(zg, e));
				},
				e164(e) {
					return this.check(Fh($g, e));
				},
				datetime(e) {
					return this.check(Hh(ug, e));
				},
				date(e) {
					return this.check(Zh(dg, e));
				},
				time(e) {
					return this.check(Vh(pg, e));
				},
				duration(e) {
					return this.check(Wh(fg, e));
				},
			},
		);
	function m(e) {
		return kh(el, e);
	}
	const ee = w("ZodStringFormat", (e, t) => {
			K.init(e, t), Qa.init(e, t);
		}),
		ug = w("ZodISODateTime", (e, t) => {
			Cf.init(e, t), ee.init(e, t);
		}),
		dg = w("ZodISODate", (e, t) => {
			zf.init(e, t), ee.init(e, t);
		}),
		pg = w("ZodISOTime", (e, t) => {
			Tf.init(e, t), ee.init(e, t);
		}),
		fg = w("ZodISODuration", (e, t) => {
			If.init(e, t), ee.init(e, t);
		}),
		tl = w("ZodEmail", (e, t) => {
			df.init(e, t), ee.init(e, t);
		});
	function nl(e) {
		return Pa(tl, e);
	}
	const hg = w("ZodGUID", (e, t) => {
			cf.init(e, t), ee.init(e, t);
		}),
		zn = w("ZodUUID", (e, t) => {
			uf.init(e, t), ee.init(e, t);
		});
	function C(e) {
		return Oa(zn, e);
	}
	const mg = w("ZodURL", (e, t) => {
			yf.init(e, t), ee.init(e, t);
		}),
		gg = w("ZodEmoji", (e, t) => {
			vf.init(e, t), ee.init(e, t);
		}),
		yg = w("ZodNanoID", (e, t) => {
			bf.init(e, t), ee.init(e, t);
		}),
		vg = w("ZodCUID", (e, t) => {
			wf.init(e, t), ee.init(e, t);
		}),
		bg = w("ZodCUID2", (e, t) => {
			_f.init(e, t), ee.init(e, t);
		}),
		wg = w("ZodULID", (e, t) => {
			kf.init(e, t), ee.init(e, t);
		}),
		_g = w("ZodXID", (e, t) => {
			Sf.init(e, t), ee.init(e, t);
		}),
		kg = w("ZodKSUID", (e, t) => {
			xf.init(e, t), ee.init(e, t);
		}),
		Sg = w("ZodIPv4", (e, t) => {
			$f.init(e, t), ee.init(e, t);
		}),
		xg = w("ZodIPv6", (e, t) => {
			Rf.init(e, t), ee.init(e, t);
		}),
		Cg = w("ZodCIDRv4", (e, t) => {
			Mf.init(e, t), ee.init(e, t);
		}),
		zg = w("ZodCIDRv6", (e, t) => {
			Pf.init(e, t), ee.init(e, t);
		}),
		Tg = w("ZodBase64", (e, t) => {
			Of.init(e, t), ee.init(e, t);
		}),
		Ig = w("ZodBase64URL", (e, t) => {
			Nf.init(e, t), ee.init(e, t);
		}),
		$g = w("ZodE164", (e, t) => {
			jf.init(e, t), ee.init(e, t);
		}),
		Eg = w("ZodJWT", (e, t) => {
			Df.init(e, t), ee.init(e, t);
		}),
		Vo = w(
			"ZodNumber",
			(e, t) => {
				ca.init(e, t),
					W.init(e, t),
					(e._zod.processJSONSchema = (r, o, i) => xm(e, r, o, i));
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
			},
			{
				gt(e, t) {
					return this.check(Na(e, t));
				},
				gte(e, t) {
					return this.check(vr(e, t));
				},
				min(e, t) {
					return this.check(vr(e, t));
				},
				lt(e, t) {
					return this.check(La(e, t));
				},
				lte(e, t) {
					return this.check(yr(e, t));
				},
				max(e, t) {
					return this.check(yr(e, t));
				},
				int(e) {
					return this.check(rl(e));
				},
				safe(e) {
					return this.check(rl(e));
				},
				positive(e) {
					return this.check(Na(0, e));
				},
				nonnegative(e) {
					return this.check(vr(0, e));
				},
				negative(e) {
					return this.check(La(0, e));
				},
				nonpositive(e) {
					return this.check(yr(0, e));
				},
				multipleOf(e, t) {
					return this.check(ja(e, t));
				},
				step(e, t) {
					return this.check(ja(e, t));
				},
				finite() {
					return this;
				},
			},
		);
	function U(e) {
		return qh(Vo, e);
	}
	const Rg = w("ZodNumberFormat", (e, t) => {
		Ff.init(e, t), Vo.init(e, t);
	});
	function rl(e) {
		return Jh(Rg, e);
	}
	const Wo = w("ZodBoolean", (e, t) => {
		ua.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Cm(e, n, r));
	});
	function E(e) {
		return Gh(Wo, e);
	}
	const Mg = w("ZodNull", (e, t) => {
		Uf.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => zm(e, n, r));
	});
	function Ag(e) {
		return Xh(Mg, e);
	}
	const Pg = w("ZodAny", (e, t) => {
		Hf.init(e, t), W.init(e, t), (e._zod.processJSONSchema = (n, r, o) => Im());
	});
	function Tn() {
		return Qh(Pg);
	}
	const Og = w("ZodUnknown", (e, t) => {
		Zf.init(e, t), W.init(e, t), (e._zod.processJSONSchema = (n, r, o) => $m());
	});
	function qo() {
		return em(Og);
	}
	const Lg = w("ZodNever", (e, t) => {
		Vf.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Tm(e, n, r));
	});
	function Ng(e) {
		return tm(Lg, e);
	}
	const ol = w("ZodDate", (e, t) => {
		Wf.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (r, o, i) => Em(e, r, o, i)),
			(e.min = (r, o) => e.check(vr(r, o))),
			(e.max = (r, o) => e.check(yr(r, o)));
		const n = e._zod.bag;
		(e.minDate = n.minimum ? new Date(n.minimum) : null),
			(e.maxDate = n.maximum ? new Date(n.maximum) : null);
	});
	function jg(e) {
		return nm(ol, e);
	}
	const Bg = w(
		"ZodArray",
		(e, t) => {
			Cn(),
				qf.init(e, t),
				W.init(e, t),
				(e._zod.processJSONSchema = (n, r, o) => Om(e, n, r, o)),
				(e.element = t.element);
		},
		{
			min(e, t) {
				return this.check(br(e, t));
			},
			nonempty(e) {
				return this.check(br(1, e));
			},
			max(e, t) {
				return this.check(Ba(e, t));
			},
			length(e, t) {
				return this.check(Da(e, t));
			},
			unwrap() {
				return this.element;
			},
		},
	);
	function P(e, t) {
		return mm(Bg, e, t);
	}
	const Dg = w(
		"ZodObject",
		(e, t) => {
			Cn(),
				Gf.init(e, t),
				W.init(e, t),
				(e._zod.processJSONSchema = (n, r, o) => Lm(e, n, r, o)),
				ep(e, "shape", (n) => n._zod.def.shape, !1);
		},
		{
			keyof() {
				return L(Object.keys(this._zod.def.shape));
			},
			catchall(e) {
				return this.clone({ ...this._zod.def, catchall: e });
			},
			passthrough() {
				return this.clone({ ...this._zod.def, catchall: qo() });
			},
			loose() {
				return this.clone({ ...this._zod.def, catchall: qo() });
			},
			strict() {
				return this.clone({ ...this._zod.def, catchall: Ng() });
			},
			strip() {
				return this.clone({ ...this._zod.def, catchall: void 0 });
			},
			extend(e) {
				return Hd(this, e);
			},
			safeExtend(e) {
				return Zd(this, e);
			},
			merge(e) {
				return Vd(this, e);
			},
			pick(e) {
				return Fd(this, e);
			},
			omit(e) {
				return Ud(this, e);
			},
			partial(...e) {
				return Ds(Jo, this, e[0]);
			},
			exactPartial(...e) {
				return Ds(cl, this, e[0], "exactPartial");
			},
			required(...e) {
				return Wd(dl, this, e[0]);
			},
		},
	);
	function k(e, t) {
		const n = { type: "object", shape: e ?? {}, ...R(t) };
		return new Dg(n);
	}
	const il = w("ZodUnion", (e, t) => {
		ma.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Nm(e, n, r, o)),
			(e.options = t.options);
	});
	function J(e, t) {
		return new il({ type: "union", options: e, ...R(t) });
	}
	const Fg = w("ZodDiscriminatedUnion", (e, t) => {
		il.init(e, t), Yf.init(e, t);
	});
	function Ve(e, t, n) {
		return new Fg({ type: "union", options: t, discriminator: e, ...R(n) });
	}
	const Ug = w("ZodIntersection", (e, t) => {
		Xf.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => jm(e, n, r, o));
	});
	function Hg(e, t) {
		return new Ug({ type: "intersection", left: e, right: t });
	}
	const Zg = w(
		"ZodTuple",
		(e, t) => {
			Cn(),
				Qf.init(e, t),
				W.init(e, t),
				(e._zod.processJSONSchema = (n, r, o) => Bm(e, n, r, o));
		},
		{
			rest(e) {
				return this.clone({ ...this._zod.def, rest: e });
			},
			partial() {
				var t;
				const e = this._zod.def;
				if ((t = e.checks) != null && t.length)
					throw new Error(
						".partial() cannot be used on tuple schemas containing refinements",
					);
				return this.clone({
					...e,
					items: e.items.map((n) => new Jo({ type: "optional", innerType: n })),
				});
			},
		},
	);
	function Vg(e, t, n) {
		const r = t instanceof Z,
			o = r ? n : t,
			i = r ? t : null;
		return new Zg({ type: "tuple", items: e, rest: i, ...R(o) });
	}
	const sl = w("ZodRecord", (e, t) => {
		Cn(),
			eh.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Fm(e, n, r, o)),
			(e.keyType = t.keyType),
			(e.valueType = t.valueType);
	});
	function se(e, t, n) {
		return !t || !t._zod
			? new sl({ type: "record", keyType: m(), valueType: e, ...R(t) })
			: new sl({ type: "record", keyType: e, valueType: t, ...R(n) });
	}
	const Ko = w("ZodEnum", (e, t) => {
		th.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (r, o, i) => Rm(e, r, o)),
			(e.enum = t.entries),
			(e.options = Object.values(t.entries));
		const n = new Set(Object.keys(t.entries));
		(e.extract = (r, o) => {
			const i = {};
			for (const s of r)
				if (n.has(s)) i[s] = t.entries[s];
				else throw new Error(`Key ${s} not found in enum`);
			return new Ko({ ...t, checks: [], ...R(o), entries: i });
		}),
			(e.exclude = (r, o) => {
				const i = { ...t.entries };
				for (const s of r)
					if (n.has(s)) delete i[s];
					else throw new Error(`Key ${s} not found in enum`);
				return new Ko({ ...t, checks: [], ...R(o), entries: i });
			});
	});
	function L(e, t) {
		const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
		return new Ko({ type: "enum", entries: n, ...R(t) });
	}
	const Wg = w("ZodLiteral", (e, t) => {
		nh.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Mm(e, n, r, o)),
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
	function T(e, t) {
		return new Wg({
			type: "literal",
			values: Array.isArray(e) ? e : [e],
			...R(t),
		});
	}
	const qg = w("ZodTransform", (e, t) => {
		Cn(),
			rh.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Pm(e, n, r, o)),
			(e._zod.parse = (n, r) => {
				if (r.direction === "backward") throw new Ws(e.constructor.name);
				n.addIssue = (i) => {
					if (typeof i == "string") n.issues.push(_n(i, n.value, t));
					else {
						const s = i;
						s.fatal && (s.continue = !1),
							s.code ?? (s.code = "custom"),
							"input" in s || (s.input = n.value),
							s.inst ?? (s.inst = e),
							n.issues.push(_n(s));
					}
				};
				const o = t.transform(n.value, n);
				return o instanceof Promise
					? o.then((i) => ((n.value = i), n))
					: ((n.value = o), n);
			});
	});
	function al(e) {
		return new qg({ type: "transform", transform: e });
	}
	const Jo = w("ZodOptional", (e, t) => {
		_a.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Ga(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function ll(e) {
		return new Jo({ type: "optional", innerType: e });
	}
	const cl = w("ZodExactOptional", (e, t) => {
		oh.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Ga(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function Kg(e) {
		return new cl({ type: "optional", innerType: e });
	}
	const Jg = w("ZodNullable", (e, t) => {
		ih.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Um(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function ul(e) {
		return new Jg({ type: "nullable", innerType: e });
	}
	const Gg = w("ZodDefault", (e, t) => {
		sh.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Zm(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType),
			(e.removeDefault = e.unwrap);
	});
	function Yg(e, t) {
		return new Gg({
			type: "default",
			innerType: e,
			get defaultValue() {
				return typeof t == "function" ? t() : js(t);
			},
		});
	}
	const Xg = w("ZodPrefault", (e, t) => {
		ah.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Vm(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function Qg(e, t) {
		return new Xg({
			type: "prefault",
			innerType: e,
			get defaultValue() {
				return typeof t == "function" ? t() : js(t);
			},
		});
	}
	const dl = w("ZodNonOptional", (e, t) => {
		lh.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Hm(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function ey(e, t) {
		return new dl({ type: "nonoptional", innerType: e, ...R(t) });
	}
	const ty = w("ZodCatch", (e, t) => {
		ch.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Wm(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType),
			(e.removeCatch = e.unwrap);
	});
	function ny(e, t) {
		return new ty({
			type: "catch",
			innerType: e,
			catchValue: typeof t == "function" ? t : np(t),
		});
	}
	const Go = w("ZodPipe", (e, t) => {
		Ca.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => qm(e, n, r, o)),
			(e.in = t.in),
			(e.out = t.out);
	});
	function pl(e, t) {
		return new Go({ type: "pipe", in: e, out: t });
	}
	const ry = w("ZodCodec", (e, t) => {
			Go.init(e, t), za.init(e, t);
		}),
		oy = w("ZodPreprocess", (e, t) => {
			Go.init(e, t), uh.init(e, t);
		}),
		iy = w("ZodReadonly", (e, t) => {
			dh.init(e, t),
				W.init(e, t),
				(e._zod.processJSONSchema = (n, r, o) => Km(e, n, r, o)),
				(e.unwrap = () => e._zod.def.innerType);
		});
	function sy(e) {
		return new iy({ type: "readonly", innerType: e });
	}
	const ay = w("ZodLazy", (e, t) => {
		ph.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Jm(e, n, r, o)),
			(e.unwrap = () => e._zod.def.getter());
	});
	function ly(e) {
		return new ay({ type: "lazy", getter: e });
	}
	const cy = w("ZodCustom", (e, t) => {
		fh.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Am(e, n, r, o));
	});
	function uy(e, t = {}) {
		return gm(cy, e, t);
	}
	function dy(e, t) {
		return ym(e, t);
	}
	const nt = (...e) => bm({ Codec: ry, Boolean: Wo, String: el }, ...e);
	function fl(e, t) {
		return new oy({ type: "pipe", in: al(e), out: t });
	}
	function ne(e) {
		return Kh(Vo, e);
	}
	function ue(e) {
		return Yh(Wo, e);
	}
	function de(e) {
		return rm(ol, e);
	}
	function Yo(e) {
		return typeof e == "boolean"
			? e
			: e === "false" || e === "0" || e === "" || e === null
				? !1
				: !!e;
	}
	const rt = L(["Draft", "Published", "Paused", "Archived", "Deleted"]),
		py = L(["Published", "Archived"]),
		hl = L(["Draft", "Published", "Paused", "Archived"]),
		fy = k({ id: C(), type: T("TopTask"), status: py }),
		hy = k({ id: C(), type: T("Tag"), status: rt }),
		my = k({ id: C(), type: T("Card"), status: rt });
	Ve("type", [fy, hy, my]);
	const yt = k({ id: C() }),
		kr = k({ id: C(), name: m().optional() }),
		In = k({ id: m(), name: m(), native: m() }),
		gy = k({ id: C(), code: m().optional(), name: m().optional() });
	function he(e, t) {
		const r = Object.fromEntries((t ?? []).map((i) => [i, m().nullish()])),
			o = gy.extend({ ...e, ...r });
		return P(o).optional().nullable().default([]);
	}
	const yy = m().meta({ title: "Email label" }),
		vy = m().meta({
			title: "Email placeholder",
			description:
				"The placeholder to show in the input field before user writes anything",
		}),
		G = J([E(), m()]).optional().transform(Yo),
		ml = L([
			"LikertScaleThree",
			"LikertScaleFive",
			"LikertScaleSix",
			"LikertScaleSeven",
		]),
		gl = L([
			"Average",
			"Median",
			"Mode",
			"PositivePercentage",
			"NegativePercentage",
		]),
		yl = k({
			id: C(),
			label: m(),
			value: ne(),
			emoji: In.optional().nullable().default(null),
			tr: he({}, ["@label"]),
		}),
		vl = k({
			id: C(),
			name: m(),
			type: ml,
			aggregationMethod: gl,
			status: rt.optional(),
			description: m().optional().nullable(),
			likertItems: P(yl),
			defaultCardTitle: m().optional().nullable(),
			defaultLanguage: k({ id: C(), code: m(), name: m() })
				.optional()
				.nullable(),
			showInDashboard: E().or(m()).optional().transform(Yo),
		}),
		by = vl.omit({
			name: !0,
			status: !0,
			description: !0,
			defaultCardTitle: !0,
		});
	k({
		name: m(),
		type: ml,
		status: rt.optional(),
		description: m().optional().nullable(),
		aggregationMethod: gl.optional().nullable().default("Average"),
		likertItems: P(yl.omit({ id: !0, tr: !0 })),
		defaultCardTitle: m().optional().nullable(),
		showInDashboard: E().or(m()).optional().transform(Yo),
	});
	const wy = he({ "@errMessage": m().nullish() }, []),
		bl = se(m(), m()).optional(),
		wl = J([E(), m()]).transform((e) =>
			typeof e == "boolean" ? e : e === "true" || e === "1",
		),
		Xo = k({
			id: C(),
			type: m(),
			name: m(),
			errMessage: m(),
			negate: E(),
			enabled: E().nullish(),
			tr: wy,
		}),
		_l = Xo.extend({
			name: m(),
			description: m(),
			applyToAllInputCards: E(),
			enabled: E(),
			isOrgSpecific: E(),
			createdAt: de(),
			updatedAt: de().nullable(),
			cardCount: U(),
			cards: P(
				k({
					id: C(),
					name: m(),
					survey: k({ id: C(), name: m(), slug: m() }).nullable(),
				}),
			),
		}),
		_y = k({
			id: C(),
			name: m(),
			description: m().optional(),
			errMessage: m(),
			negate: ue(),
			applyToAllInputCards: wl.optional().default(!1),
			translations: bl,
		});
	k({
		type: T("OrgValidationRegex"),
		name: m(),
		description: m().optional(),
		errMessage: m(),
		negate: ue(),
		applyToAllInputCards: wl.optional().default(!1),
		regex: m(),
		translations: bl,
	});
	const ky = Xo.extend({ regex: m().nullable(), type: T("ValidationRegex") }),
		Sy = Xo.extend({ regex: m().nullable(), type: T("OrgValidationRegex") }),
		xy = Ve("type", [ky, Sy]),
		Cy = _l.extend({ regex: m().nullable(), type: T("ValidationRegex") }),
		zy = _l.extend({ regex: m().nullable(), type: T("OrgValidationRegex") }),
		Ty = Ve("type", [Cy, zy]);
	_y.extend({
		regex: m(),
		type: T("OrgValidationRegex"),
		enabled: ue().optional(),
	});
	const Iy = L(["Include", "Exclude"]),
		kl = L(["and", "or"]),
		$y = L(["string", "number"]),
		Ey = L([
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
		Ry = new Set([
			"greaterThan",
			"greaterThanOrEqual",
			"lessThan",
			"lessThanOrEqual",
		]),
		My = new Set([
			"equals",
			"notEquals",
			"contains",
			"greaterThan",
			"greaterThanOrEqual",
			"lessThan",
			"lessThanOrEqual",
		]),
		Ay = k({
			traitId: C(),
			traitSlug: m().min(1),
			valueType: $y,
			operator: Ey,
			values: P(m()),
		}).superRefine((e, t) => {
			if (
				(e.valueType === "string" &&
					Ry.has(e.operator) &&
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
					: My.has(e.operator) &&
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
		Py = fl((e) => {
			if (typeof e != "string") return e;
			try {
				return JSON.parse(e);
			} catch {
				return e;
			}
		}, P(Ay)),
		Sl = k({
			desktop: E()
				.nullish()
				.transform((e) => e ?? !0),
			mobile: E()
				.nullish()
				.transform((e) => e ?? !0),
			tablet: E()
				.nullish()
				.transform((e) => e ?? !0),
			languages: P(m())
				.nullish()
				.transform((e) => e ?? []),
			locales: P(m())
				.nullish()
				.transform((e) => e ?? []),
			traitConditions: Py.optional().default([]),
		}),
		xl = Sl.extend({ id: C(), type: Iy }),
		Oy =
			/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
	function Ly(e) {
		return typeof e == "string" && Oy.test(e);
	}
	const Cl = L(["Viewer", "Curator", "Editor", "Admin"]);
	L(["Viewer", "Admin"]),
		k({
			id: C(),
			name: m().optional().nullable(),
			image: m().optional().nullable(),
		});
	const Qo = k({
			id: C(),
			name: m().optional().nullable(),
			email: nl(),
			image: m().optional().nullable(),
			superAdmin: E().optional().nullable(),
		}),
		Ny = L(["Minimal", "Regular", "Large"]),
		jy = rt.or(T("Paused")),
		zl = Date.parse("2026-01-27T14:29:10Z");
	function By({ optionsLayout: e, createdAt: t, updatedAt: n }) {
		if (e !== "vertical" || !t) return e;
		const r = n ?? t;
		return t.getTime() < zl && r.getTime() < zl ? "horizontal" : e;
	}
	const Tl = k({
		id: C(),
		errMessage: m().optional().nullable(),
		validation: xy,
		tr: he({ "@errMessage": m().nullish() }, []).optional().nullable(),
	});
	k({
		id: C(),
		errMessage: m().optional().nullable(),
		validation: Ty,
		tr: he({ "@errMessage": m().nullish() }, []).optional().nullable(),
	});
	const Dy = J([m(), U(), E(), Ag()]),
		ei = ly(() => J([Dy, P(ei), se(m(), ei)])),
		Il = ei
			.optional()
			.nullable()
			.transform((e) => (typeof e == "string" ? JSON.parse(e) : e));
	k({ id: C(), errMessage: m().optional().nullable(), cardId: C() }),
		Tl.extend({ card: yt, validation: yt }).omit({ id: !0 });
	function We(e) {
		return typeof e == "string" && e.length === 0 ? null : e;
	}
	const Fy = Sl.extend({
			id: C().optional(),
			card: yt,
			type: L(["Include", "Exclude"]),
			segmentValues: P(kr),
			tasks: P(kr),
			multiSelectItems: P(kr).optional().default([]),
			singleSelectItems: P(kr).optional().default([]),
			likertSourceCards: P(
				k({ id: C(), name: m().optional(), selectedItemIds: P(C()) }),
			)
				.optional()
				.default([]),
			completion: E().optional().nullable(),
			recruited: E().optional().nullable(),
		}),
		Uy = L(["and", "or"]),
		$n = {
			"@name": m().nullish(),
			"@body": m().nullish(),
			"@bodyHtml": m().nullish(),
			"@bodyJson": Il,
			"@textNext": m().nullish(),
			"@textPrev": m().nullish(),
			"@textClose": m().nullish(),
			"@textHide": m().nullish(),
			"@textMinimized": m().nullish(),
			"@textReplyLater": m().nullish(),
		},
		ti = he($n, []),
		Re = k({
			id: C(),
			revision: ne().default(0),
			name: m().min(3, "Heading must be at least 3 characters"),
			icon: m().optional().nullable(),
			order: ne(),
			textNext: m().optional().nullable().transform(We),
			textPrev: m().optional().nullable().transform(We),
			textHide: m().optional().nullable().transform(We),
			textMinimized: m().optional().nullable().transform(We),
			textReplyLater: m().optional().nullable().transform(We),
			textClose: m().optional().nullable().transform(We),
			tr: ti.optional().nullable(),
			field: J([m(), k({ id: C() })])
				.optional()
				.nullable()
				.transform((e) =>
					typeof e == "string" ? (Ly(e) ? e : null) : e == null ? void 0 : e.id,
				),
			page: yt.optional().nullable(),
			createdAt: de().optional(),
			createdBy: Qo.optional().nullable(),
			updatedAt: de().optional().nullable(),
			updatedBy: Qo.optional().nullable(),
			firstResponse: de().optional().nullish(),
			lastResponse: de().optional().nullish(),
			status: jy,
			statusSetAt: de().optional().nullable(),
			statusSetBy: Qo.optional().nullable(),
			body: m().optional().nullable(),
			bodyHtml: m().optional().nullable(),
			bodyJson: Il,
			type: m(),
			size: Ny.optional(),
			description: m().optional().nullable(),
			optionsLayout: L(["vertical", "horizontal"])
				.optional()
				.nullable()
				.transform((e) => e ?? "vertical"),
			ruleMode: Uy.optional().default("and"),
			rules: P(Fy).optional().default([]),
			validations: P(Tl).optional().default([]),
			isRequired: ue()
				.optional()
				.nullable()
				.transform((e) => e ?? void 0),
		});
	Re.omit({
		id: !0,
		revision: !0,
		tr: !0,
		createdAt: !0,
		createdBy: !0,
		updatedAt: !0,
		updatedBy: !0,
		statusSetAt: !0,
		statusSetBy: !0,
	}).extend({ status: rt.optional().nullable() });
	const Hy = k({
			id: C(),
			name: m(),
			tr: he({ "@name": m().nullish(), "@description": m().nullish() }, [])
				.optional()
				.nullable(),
		}),
		Zy = he({ "@label": m().nullish() }, []),
		$l = k({
			id: C().optional(),
			label: m().optional().nullable().transform(We),
			order: ne(),
			orderLocked: G.default(!1),
			task: J([Hy, yt]),
			tr: Zy.optional().nullable(),
		}),
		Vy = Re.extend({
			type: T("TopTaskCard"),
			TopTaskCard: k({
				tr: ti,
				randomize: ue().optional().default(!1),
				taskItems: J([
					P($l),
					se(m(), $l).transform((e) => Object.values(e)),
				]).nullable(),
			}),
		}),
		Wy = Re.extend({
			type: T("LikertCard"),
			LikertCard: k({
				tr: ti,
				likertScale: J([vl, by]),
				showEmoji: G.default(!1),
			}),
		}),
		qy = Re.extend({ type: T("MessageCard") }),
		Ky = Re.extend({
			type: T("CompletionCard"),
			CompletionCard: k({
				tr: he($n, ["@positive", "@negative"]),
				positive: m()
					.optional()
					.nullable()
					.meta({ description: "Text on button to signal task was completed" }),
				negative: m()
					.optional()
					.nullable()
					.meta({ description: "Text on button to signal task was failed" }),
			}),
		}),
		Jy = Re.extend({
			type: T("FindabilityCard"),
			FindabilityCard: k({
				tr: he($n, ["@positive", "@negative"]),
				positive: m()
					.optional()
					.nullable()
					.meta({ description: "Text on button to signal task was completed" }),
				negative: m()
					.optional()
					.nullable()
					.meta({ description: "Text on button to signal task was failed" }),
			}),
		}),
		Gy = Re.extend({
			type: T("InputCard"),
			InputCard: k({
				label: m().nullable().optional(),
				placeholder: m()
					.optional()
					.meta({
						description: "Dimmed text in the input field before user writes",
					}),
				maxLength: ne()
					.optional()
					.nullable()
					.overwrite((e) => (!e || e <= 0 ? null : e))
					.meta({ description: "Maximum number of characters allowed" }),
				minLength: ne()
					.optional()
					.nullable()
					.default(0)
					.meta({ description: "Minimum number of characters allowed" }),
				multiline: G.meta({ description: "Allow multiline text input" }),
				tr: he($n, ["@label", "@placeholder"]),
			}),
		}),
		Yy = Re.extend({
			type: T("RecruitmentCard"),
			RecruitmentCard: k({
				maxLeads: fl(
					(e) => (e === "" ? null : e),
					ne().int().positive().optional().nullable(),
				),
				email: G.nullable(),
				email_label: yy.optional().nullable(),
				email_placeholder: vy.optional().nullable(),
				phone: G.nullable(),
				phone_label: m().optional().nullable(),
				phone_placeholder: m().optional().nullable(),
				nameEnable: G.nullable(),
				nameLabel: m().optional().nullable(),
				namePlaceholder: m().optional().nullable(),
				consentEnable: G.nullable(),
				consentTermsUrl: m().optional().nullable(),
				consentTermsTitle: m().optional().nullable(),
				consentTermsText: m().optional().nullable(),
				consentTermsLabel: m().optional().nullable(),
				autoEmail: ue().default(!0),
				relatedCards: P(k({ id: C(), name: m(), type: m() }))
					.optional()
					.default([]),
				tr: he($n, [
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
		Xy = k({
			id: C(),
			name: m(),
			tr: he({ name: m().nullish(), description: m().nullish() }, [])
				.optional()
				.nullable(),
		}),
		Qy = k({
			id: C(),
			name: m(),
			tr: he({ "@name": m().nullish(), "@description": m().nullish() }, [])
				.optional()
				.nullable(),
		}),
		El = k({
			id: C().optional(),
			name: m().optional(),
			label: m().optional().nullable().transform(We),
			tr: he({ "@label": m().nullish() }, []),
			order: ne(),
			orderLocked: G.default(!1),
			value: J([Qy, yt]),
		}),
		ev = Re.extend({
			type: T("SegmentCard"),
			SegmentCard: k({
				randomize: ue().optional().nullable().default(!1),
				segment: J([Xy, yt]),
				items: J([P(El), se(m(), El).transform((e) => Object.values(e))]),
			}),
		}),
		Rl = k({
			id: C(),
			createdAt: de().default(() => new Date()),
			label: m(),
			order: ne(),
			orderLocked: G.default(!1),
			tr: he({ "@label": m().nullish() }, []).optional().nullable(),
		}),
		Ml = J([P(Rl), se(m(), Rl).transform((e) => Object.values(e))]),
		tv = Re.extend({
			type: T("SingleSelectCard"),
			SingleSelectCard: k({
				randomize: ue().optional().nullable().default(!1),
				selectItems: Ml,
			}),
		}),
		nv = Re.extend({
			type: T("MultiSelectCard"),
			MultiSelectCard: k({
				randomize: ue().optional().nullable().default(!1),
				min: J([U(), m()])
					.optional()
					.nullable()
					.transform((e) => {
						if (typeof e > "u" || e === null) return null;
						if (typeof e == "number") return Math.max(0, e);
						const t = Number.parseInt(e, 10);
						return isNaN(t) ? null : Math.max(0, t);
					}),
				max: J([U(), m()])
					.optional()
					.nullable()
					.transform((e) => {
						if (typeof e > "u" || e === null) return null;
						if (typeof e == "number") return Math.max(1, e);
						const t = Number.parseInt(e, 10);
						return isNaN(t) ? null : Math.max(1, t);
					}),
				selectItems: Ml,
			}),
		});
	k({
		id: C(),
		name: m(),
		label: m().optional().nullable().transform(We),
		orderLocked: G.default(!1),
		card: k({ id: C() }),
		value: k({ id: C() }),
	});
	const Al = J([
			Yy.transform((e) => ({ ...e, ...e.RecruitmentCard })),
			Vy.transform((e) => ({ ...e, ...e.TopTaskCard })),
			qy,
			Ky.transform((e) => ({
				...e,
				...e.CompletionCard,
				optionsLayout: By(e),
			})),
			Jy.transform((e) => ({ ...e, ...e.FindabilityCard })),
			Gy.transform((e) => ({ ...e, ...e.InputCard })),
			ev.transform((e) => ({ ...e, ...e.SegmentCard })),
			nv.transform((e) => ({ ...e, ...e.MultiSelectCard })),
			tv.transform((e) => ({ ...e, ...e.SingleSelectCard })),
			Wy.transform((e) => ({ ...e, ...e.LikertCard })),
		]),
		Pl = L([
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
		En = [
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
		Rn = [
			"minimizedBgColor",
			"minimizedTextColor",
			"minimizedBorderColor",
			"minimizedShadow",
		],
		Mn = ["shadowSm", "shadowMd", "shadowLg"],
		rv = [
			"borderStyle",
			"borderWidth",
			"radiusSm",
			"radiusMd",
			"radiusLg",
			"radiusPill",
		],
		ov = ["focusRingStyle", "focusRingWidth", "focusRingOffset"];
	function ae(e, t) {
		return `${e}${t[0].toUpperCase()}${t.slice(1)}`;
	}
	const iv = En.map((e) => ae("light", e)),
		sv = En.map((e) => ae("dark", e)),
		av = Rn.map((e) => ae("light", e)),
		lv = Rn.map((e) => ae("dark", e)),
		cv = Mn.map((e) => ae("light", e)),
		uv = Mn.map((e) => ae("dark", e)),
		dv = [...iv, ...av, ...cv],
		pv = [...sv, ...lv, ...uv],
		fv = [...dv, ...pv];
	function ni(e, t) {
		const n = {};
		for (const r of Object.keys(e)) n[r] = e[r] ?? t[r];
		return n;
	}
	function hv(e) {
		const t = {},
			n = {};
		for (const r of En) (t[r] = e[ae("light", r)]), (n[r] = e[ae("dark", r)]);
		return { light: t, dark: ni(n, t) };
	}
	function mv(e) {
		const t = {},
			n = {};
		for (const r of Rn) (t[r] = e[ae("light", r)]), (n[r] = e[ae("dark", r)]);
		return { lightMinimized: t, darkMinimized: ni(n, t) };
	}
	function gv(e) {
		const t = {},
			n = {};
		for (const r of Mn) (t[r] = e[ae("light", r)]), (n[r] = e[ae("dark", r)]);
		return { lightShadow: t, darkShadow: ni(n, t) };
	}
	function yv(e) {
		const t = e,
			{ light: n, dark: r } = hv(t),
			{ lightMinimized: o, darkMinimized: i } = mv(t),
			{ lightShadow: s, darkShadow: a } = gv(t);
		return {
			...vv(t),
			border: bv(t),
			focus: wv(t),
			lightShadow: s,
			darkShadow: a,
			light: n,
			dark: r,
			lightMinimized: o,
			darkMinimized: i,
		};
	}
	function vv(e) {
		return {
			id: e.id,
			name: e.name,
			slug: e.slug,
			description: e.description ?? void 0,
			archived: e.archived ?? !1,
			sourceId: e.sourceId ?? void 0,
			sourceVersion: e.sourceVersion ?? void 0,
			installedFrom: e.installedFrom ?? void 0,
			fontSize: e.fontSize ?? void 0,
			fontBody: e.fontBody ?? void 0,
			fontHeading: e.fontHeading ?? void 0,
		};
	}
	function bv(e) {
		return {
			borderStyle: e.borderStyle ?? void 0,
			borderWidth: e.borderWidth ?? void 0,
			radiusSm: e.radiusSm ?? void 0,
			radiusMd: e.radiusMd ?? void 0,
			radiusLg: e.radiusLg ?? void 0,
			radiusPill: e.radiusPill ?? void 0,
		};
	}
	function wv(e) {
		return {
			focusRingStyle: e.focusRingStyle ?? void 0,
			focusRingWidth: e.focusRingWidth ?? void 0,
			focusRingOffset: e.focusRingOffset ?? void 0,
		};
	}
	function _v(e) {
		var c, d, u, p, f, h, g, b, v;
		const t = yv(e),
			n = t.light ?? {},
			r = t.dark ?? {},
			o = t.lightMinimized ?? {},
			i = t.darkMinimized ?? {},
			s = t.lightShadow ?? {},
			a = t.darkShadow ?? {},
			l = {
				fontSize: t.fontSize,
				fontBody: t.fontBody ?? t.fontHeading,
				fontHeading: t.fontHeading ?? t.fontBody,
				borderStyle: (c = t.border) == null ? void 0 : c.borderStyle,
				borderWidth: (d = t.border) == null ? void 0 : d.borderWidth,
				radiusSm: (u = t.border) == null ? void 0 : u.radiusSm,
				radiusMd: (p = t.border) == null ? void 0 : p.radiusMd,
				radiusLg: (f = t.border) == null ? void 0 : f.radiusLg,
				radiusPill: (h = t.border) == null ? void 0 : h.radiusPill,
				focusRingStyle: (g = t.focus) == null ? void 0 : g.focusRingStyle,
				focusRingWidth: (b = t.focus) == null ? void 0 : b.focusRingWidth,
				focusRingOffset: (v = t.focus) == null ? void 0 : v.focusRingOffset,
			};
		return {
			light: {
				...l,
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
			dark: {
				...l,
				shadowSm: a.shadowSm,
				shadowMd: a.shadowMd,
				shadowLg: a.shadowLg,
				bgColor: r.bgColor,
				textColor: r.textColor,
				interfaceColor: r.interfaceColor,
				borderColor: r.borderColor,
				actionColor: r.actionColor,
				actionTextColor: r.actionTextColor,
				secondaryColor: r.secondaryColor,
				linkColor: r.linkColor,
				errorColor: r.errorColor,
				warningColor: r.warningColor,
				successColor: r.successColor,
				mutedTextColor: r.mutedTextColor,
				focusColor: r.focusColor,
				minimizedBgColor: i.minimizedBgColor,
				minimizedTextColor: i.minimizedTextColor,
				minimizedBorderColor: i.minimizedBorderColor,
				minimizedShadow: i.minimizedShadow,
			},
		};
	}
	const kv = [
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
	function Sr(e, t) {
		if (!t) return null;
		const n = [];
		for (const { key: r, cssVar: o } of kv) {
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
	function Sv(e) {
		var l, c, d, u, p, f, h, g, b;
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
				borderStyle: (l = e.border) == null ? void 0 : l.borderStyle,
				borderWidth: (c = e.border) == null ? void 0 : c.borderWidth,
				radiusSm: (d = e.border) == null ? void 0 : d.radiusSm,
				radiusMd: (u = e.border) == null ? void 0 : u.radiusMd,
				radiusLg: (p = e.border) == null ? void 0 : p.radiusLg,
				radiusPill: (f = e.border) == null ? void 0 : f.radiusPill,
				focusRingStyle: (h = e.focus) == null ? void 0 : h.focusRingStyle,
				focusRingWidth: (g = e.focus) == null ? void 0 : g.focusRingWidth,
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
	function Ol(e) {
		return xv(
			{
				lightErrorColor: "#ca0a15",
				lightWarningColor: "#92400e",
				lightSuccessColor: "#166534",
				lightMutedTextColor: "var(--skyra-text-color)",
				lightFocusColor: "var(--skyra-action-color)",
				darkErrorColor: "#ff5555",
				darkWarningColor: "#feb570",
				darkSuccessColor: "#86efac",
				darkMutedTextColor: "var(--skyra-text-color)",
				darkFocusColor: "var(--skyra-action-color)",
			},
			e,
		);
	}
	function Ll(e, t) {
		const { themeMode: n, selector: r = ":host" } = t ?? {},
			{ light: o, dark: i } = Sv(e),
			s = Sr(r, o),
			a = Sr(r, i);
		return n === "Dark"
			? a
			: n === "Auto" && s && a
				? `${s}
@media (prefers-color-scheme: dark) {
${a}
}`
				: (s ?? a);
	}
	function xv(e, t) {
		const { themeMode: n, selector: r = ":host" } = t ?? {},
			{ light: o, dark: i } = _v(e),
			s = Sr(r, o),
			a = Sr(r, i);
		return n === "Dark"
			? a
			: n === "Auto" && s && a
				? `${s}
@media (prefers-color-scheme: dark) {
${a}
}`
				: (s ?? a);
	}
	const Nt = {};
	for (const e of En)
		(Nt[ae("light", e)] = { group: "light", field: e }),
			(Nt[ae("dark", e)] = { group: "dark", field: e });
	for (const e of Rn)
		(Nt[ae("light", e)] = { group: "lightMinimized", field: e }),
			(Nt[ae("dark", e)] = { group: "darkMinimized", field: e });
	for (const e of Mn)
		(Nt[ae("light", e)] = { group: "lightShadow", field: e }),
			(Nt[ae("dark", e)] = { group: "darkShadow", field: e });
	const Nl = [
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
		Cv = {
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
	function zv(e) {
		return Cv[e];
	}
	const Tv = Aa();
	function ke(e) {
		const t = zv(e);
		return m()
			.nullable()
			.optional()
			.register(Tv, t)
			.meta({ title: t.label, description: t.helpText });
	}
	function An(e) {
		const t = Object.fromEntries(e.map((n) => [n, ke(n)]));
		return k(t);
	}
	const Iv = [
			"borderStyle",
			"borderWidth",
			"radiusSm",
			"radiusMd",
			"radiusLg",
			"radiusPill",
		],
		$v = ["focusRingStyle", "focusRingWidth", "focusRingOffset"],
		Ev = Mn,
		ze = ["fontSize", "fontBody", "fontHeading"];
	function Rv(e) {
		return typeof e == "boolean"
			? e
			: e === "false" || e === "0" || e === "" || e === null
				? !1
				: !!e;
	}
	const ri = J([E(), m()]).optional().transform(Rv),
		jt = L(["Auto", "Light", "Dark"]),
		Bt = An(En),
		Dt = An(Rn),
		oi = An(Iv),
		ii = An($v),
		Ft = An(Ev),
		jl = k({
			name: m().min(1).max(120),
			slug: m().min(1).max(120),
			description: m().max(4e3).nullable().optional(),
			archived: ri.optional(),
			sourceId: m().max(200).nullable().optional(),
			sourceVersion: m().max(64).nullable().optional(),
			installedFrom: m().max(32).nullable().optional(),
			fontSize: ke(ze[0]),
			fontBody: ke(ze[1]),
			fontHeading: ke(ze[2]),
			border: oi.partial().optional(),
			focus: ii.partial().optional(),
			lightShadow: Ft.partial().optional(),
			darkShadow: Ft.partial().optional(),
			light: Bt.partial().optional(),
			dark: Bt.partial().optional(),
			lightMinimized: Dt.partial().optional(),
			darkMinimized: Dt.partial().optional(),
		});
	jl.extend({
		slug: m().min(1).max(120).optional(),
		archived: ri.optional().default(!1),
		installedFrom: L(["catalog", "import", "manual"]).nullable().optional(),
	}),
		jl
			.partial()
			.extend({
				id: m().uuid().optional(),
				archived: ri.optional(),
				installedFrom: L(["catalog", "import", "manual"]).nullable().optional(),
			}),
		k({
			id: m().min(1).max(200),
			version: m().min(1).max(64),
			name: m().min(1).max(120),
			slug: m().min(1).max(120),
			description: m().max(4e3).nullable().optional(),
			tags: P(m().min(1).max(40)).max(30).optional(),
			fontSize: ke(ze[0]),
			fontBody: ke(ze[1]),
			fontHeading: ke(ze[2]),
			border: oi.partial().optional(),
			focus: ii.partial().optional(),
			lightShadow: Ft.partial().optional(),
			darkShadow: Ft.partial().optional(),
			light: Bt.partial().optional(),
			dark: Bt.partial().optional(),
			lightMinimized: Dt.partial().optional(),
			darkMinimized: Dt.partial().optional(),
		});
	const Mv = k({
			id: m().uuid(),
			name: m(),
			slug: m(),
			description: m().nullable().optional(),
			archived: E().optional(),
			sourceId: m().nullable().optional(),
			sourceVersion: m().nullable().optional(),
			installedFrom: m().nullable().optional(),
			fontSize: ke(ze[0]),
			fontBody: ke(ze[1]),
			fontHeading: ke(ze[2]),
			border: oi.partial().optional(),
			focus: ii.partial().optional(),
			lightShadow: Ft.partial().optional(),
			darkShadow: Ft.partial().optional(),
			light: Bt.partial().optional(),
			dark: Bt.partial().optional(),
			lightMinimized: Dt.partial().optional(),
			darkMinimized: Dt.partial().optional(),
		}),
		Av = Object.fromEntries(fv.map((e) => [e, m().nullable().optional()])),
		Pv = Object.fromEntries(
			[...rv, ...ov].map((e) => [e, m().nullable().optional()]),
		),
		Ov = k({
			id: m().uuid(),
			name: m(),
			slug: m(),
			description: m().nullable().optional(),
			archived: E().optional(),
			sourceId: m().nullable().optional(),
			sourceVersion: m().nullable().optional(),
			installedFrom: m().nullable().optional(),
			fontSize: ke(ze[0]),
			fontBody: ke(ze[1]),
			fontHeading: ke(ze[2]),
			...Pv,
			...Av,
		}),
		Pn = se(m(), m()).nullable().optional(),
		si = J([Mv, Ov]),
		xr = L(["AllAtOnce", "OneAtATime"]),
		On = L(["Public", "InvitationOnly", "Password"]),
		Lv = L(["Visible", "Hidden", "Published"]).transform((e) =>
			e === "Published" ? "Visible" : e,
		),
		Nv = L([
			"Pending",
			"Sent",
			"Opened",
			"Started",
			"Completed",
			"Bounced",
			"Expired",
		]),
		Cr = L(["Bar", "Percentage", "Fraction", "None"]),
		ot = L(["End", "Restart", "Redirect"]),
		it = L([
			"below-title",
			"above-title",
			"split-left",
			"split-right",
			"split-top",
			"background",
		]),
		zr = L(["cover", "contain"]),
		ai = k({
			imageLayout: it.nullable().optional(),
			imageLayoutMobile: it.nullable().optional(),
			imageBrightness: U().min(0).max(1).nullable().optional(),
			imageFit: zr.nullable().optional(),
		}),
		Bl = L([
			"confetti",
			"fireworks",
			"emojis",
			"balloons",
			"sparkles",
			"snow",
			"bubbles",
			"stars",
		]),
		Dl = L(["low", "medium", "high"]),
		Fl = L(["burst", "continuous", "burst-then-ambient"]),
		Ul = k({
			pageEffect: Bl.nullable().optional(),
			pageEffectIntensity: Dl.nullable().optional(),
			pageEffectBehavior: Fl.nullable().optional(),
			pageEffectEmojis: P(m()).min(1).max(10).nullable().optional(),
		}),
		Te = k({
			id: m().uuid(),
			key: m(),
			filename: m(),
			mimeType: m(),
			width: U().int().nullable().optional(),
			height: U().int().nullable().optional(),
			altText: m().nullable().optional(),
			focalX: U().min(0).max(1).nullable().optional(),
			focalY: U().min(0).max(1).nullable().optional(),
		})
			.nullable()
			.optional(),
		Ie = k({ id: m().uuid() }).nullable().optional();
	k({
		displayMode: xr.nullable().optional(),
		themeId: m().uuid().nullable().optional(),
		themeMode: jt.nullable().optional(),
		showProgressBar: G.nullable().optional(),
		progressBarStyle: Cr.nullable().optional(),
		showQuestionNumbers: G.nullable().optional(),
		allowBackNavigation: G.nullable().optional(),
		completionBehavior: ot.nullable().optional(),
		completionRedirectUrl: m().nullable().optional(),
		completionRedirectDelay: ne().int().nullable().optional(),
		ogTitle: m().nullable().optional(),
		ogDescription: m().nullable().optional(),
		ogImage: Ie,
		logo: Ie,
		headerImage: Ie,
		backgroundImage: Ie,
		favicon: Ie,
		...ai.shape,
	});
	const jv = k({
			displayMode: xr.nullable().optional(),
			theme: L(["Light", "Dark"]).nullable().optional(),
			bgColor: m().nullable().optional(),
			textColor: m().nullable().optional(),
			interfaceColor: m().nullable().optional(),
			actionColor: m().nullable().optional(),
			actionTextColor: m().nullable().optional(),
			secondaryColor: m().nullable().optional(),
			linkColor: m().nullable().optional(),
			errorColor: m().nullable().optional(),
			warningColor: m().nullable().optional(),
			fontSize: m().nullable().optional(),
			fontBody: m().nullable().optional(),
			fontHeading: m().nullable().optional(),
			logo: Ie,
			headerImage: Ie,
			backgroundImage: Ie,
			favicon: Ie,
			showProgressBar: G.nullable().optional(),
			progressBarStyle: Cr.nullable().optional(),
			showQuestionNumbers: G.nullable().optional(),
			allowBackNavigation: G.nullable().optional(),
			completionBehavior: ot.nullable().optional(),
			completionRedirectUrl: m().nullable().optional(),
			completionRedirectDelay: ne().int().nullable().optional(),
			ogTitle: m().nullable().optional(),
			ogDescription: m().nullable().optional(),
			ogImage: Ie,
		}),
		Hl = k({
			id: m().uuid().optional(),
			displayMode: xr.nullable().optional(),
			theme: L(["Light", "Dark"]).nullable().optional(),
			bgColor: m().nullable().optional(),
			textColor: m().nullable().optional(),
			interfaceColor: m().nullable().optional(),
			actionColor: m().nullable().optional(),
			actionTextColor: m().nullable().optional(),
			secondaryColor: m().nullable().optional(),
			linkColor: m().nullable().optional(),
			errorColor: m().nullable().optional(),
			warningColor: m().nullable().optional(),
			fontSize: m().nullable().optional(),
			fontBody: m().nullable().optional(),
			fontHeading: m().nullable().optional(),
			logo: Te,
			headerImage: Te,
			backgroundImage: Te,
			favicon: Te,
			showProgressBar: E().nullable().optional(),
			progressBarStyle: Cr.nullable().optional(),
			showQuestionNumbers: E().nullable().optional(),
			allowBackNavigation: E().nullable().optional(),
			completionBehavior: ot.nullable().optional(),
			completionRedirectUrl: m().nullable().optional(),
			completionRedirectDelay: U().int().nullable().optional(),
			ogTitle: m().nullable().optional(),
			ogDescription: m().nullable().optional(),
			ogImage: Te,
		});
	k({
		themeId: m().uuid().nullable().optional(),
		themeMode: jt.nullable().optional(),
		textNext: m().nullable().optional(),
		textPrev: m().nullable().optional(),
		headerImage: Ie,
		...ai.shape,
		...Ul.shape,
		themeOverrides: Pn,
	});
	const Bv = k({
			theme: si.nullable().optional(),
			themeMode: jt.nullable().optional(),
			textNext: m().nullable().optional(),
			textPrev: m().nullable().optional(),
			headerImage: Te,
			...ai.shape,
			...Ul.shape,
			themeOverrides: Pn,
		}),
		Dv = he(
			{
				"@title": m().nullish(),
				"@description": m().nullish(),
				"@textNext": m().nullish(),
				"@textPrev": m().nullish(),
			},
			[],
		),
		Fv = k({
			id: m().uuid(),
			name: m(),
			title: m().nullable().optional(),
			description: m().nullable().optional(),
			tr: Dv.optional().nullable(),
			order: U().int(),
			pageStatus: Lv.nullable().optional(),
			presentation: Bv.nullable().optional(),
			config: Hl.nullable().optional(),
			theme: si.nullable().optional(),
			themeMode: jt.nullable().optional(),
			textNext: m().nullable().optional(),
			textPrev: m().nullable().optional(),
			headerImage: Te,
			imageLayout: it.nullable().optional(),
			imageLayoutMobile: it.nullable().optional(),
			imageBrightness: U().nullable().optional(),
			imageFit: zr.nullable().optional(),
			themeOverrides: Pn,
			pageEffect: Bl.nullable().optional(),
			pageEffectIntensity: Dl.nullable().optional(),
			pageEffectBehavior: Fl.nullable().optional(),
			pageEffectEmojis: P(m()).nullable().optional(),
		});
	k({
		id: m().uuid(),
		surveyId: m().uuid(),
		code: m(),
		email: m().email().nullable().optional(),
		phone: m().nullable().optional(),
		recipientName: m().nullable().optional(),
		status: Nv.nullable().optional(),
		sentAt: de().nullable().optional(),
		openedAt: de().nullable().optional(),
		startedAt: de().nullable().optional(),
		completedAt: de().nullable().optional(),
		maxResponses: U().int().nullable().optional(),
		expiresAt: de().nullable().optional(),
		responseCount: U().int().nullable().optional(),
	});
	const vt = k({
			event: m(),
			survey: m(),
			session: m(),
			url: m().optional(),
			visitor: m().ulid(),
		}),
		Uv = vt.extend({ event: T("CardView"), type: Pl }),
		Hv = vt.extend({ event: T("PageView"), value: m() }),
		qe = vt.extend({
			event: T("CardValue"),
			card: m(),
			type: Pl,
			value: J([m(), E(), se(m(), qo()), P(m())]),
			languageCode: m().optional(),
			cardOrder: U().int().nonnegative().optional(),
		}),
		Zv = qe.extend({ type: T("InputCard") }),
		Vv = qe.extend({ type: T("TopTaskCard") }),
		Wv = qe.extend({ type: T("CompletionCard") }),
		qv = qe.extend({ type: T("SegmentCard") }),
		Kv = qe.extend({ type: T("LikertCard") }),
		Jv = qe.extend({
			type: T("RecruitmentCard"),
			value: k({
				email: m().optional().nullable(),
				phone: m().optional().nullable(),
				name: m().optional().nullable(),
				consented: E().optional(),
				autoEmail: E().optional(),
				optedOut: E().optional(),
			}),
		}),
		Gv = qe.extend({ type: T("MultiSelectCard"), value: P(C()) }),
		Yv = qe.extend({ type: T("SingleSelectCard"), value: C() }),
		Xv = qe.extend({ type: T("FindabilityCard") }),
		Qv = vt.extend({ event: T("Value"), value: J([m(), E()]) }),
		eb = vt.extend({
			event: T("SessionInit"),
			ua: m(),
			screenSize: Vg([U(), U()]),
			pixelRatio: U(),
			connection: m(),
			traits: se(m(), m()).optional(),
			languageCode: m().optional(),
		}),
		tb = vt.extend({ event: T("Custom"), key: m(), value: m() }),
		nb = vt.extend({ event: T("SessionTraits"), traits: se(m(), m()) }),
		Tr = Ve("type", [Zv, Jv, qv, Vv, Wv, Xv, Kv, Gv, Yv]);
	J([Tr, Uv, Hv, Qv, tb, eb, nb]);
	const Ir = {
			en: {
				textClose: "Close",
				textNext: "Next",
				textPrev: "Back",
				textMinimized: "Continue survey",
				textHide: "Hide",
				textReplyLater: "Reply later",
			},
			no: {
				textClose: "Lukk",
				textNext: "Neste",
				textPrev: "Tilbake",
				textMinimized: "Fortsett undersøkelsen",
				textHide: "Skjul",
				textReplyLater: "Svar senere",
			},
			nn: {
				textClose: "Lukk",
				textNext: "Neste",
				textPrev: "Tilbake",
				textMinimized: "Hald fram med undersøkinga",
				textHide: "Gøym",
				textReplyLater: "Svar seinare",
			},
			pt: {
				textClose: "Fechar",
				textNext: "Próximo",
				textPrev: "Anterior",
				textMinimized: "Continuar pesquisa",
				textHide: "Esconder",
				textReplyLater: "Responder mais tarde",
			},
			de: {
				textClose: "Schließen",
				textNext: "Weiter",
				textPrev: "Zurück",
				textMinimized: "Umfrage fortsetzen",
				textHide: "Verbergen",
				textReplyLater: "Später antworten",
			},
			sv: {
				textClose: "Stäng",
				textNext: "Nästa",
				textPrev: "Tillbaka",
				textMinimized: "Fortsätt undersökningen",
				textHide: "Dölj",
				textReplyLater: "Svara senare",
			},
		},
		Zl = /[\\*+{}[\]()|^$]/;
	function rb(e) {
		var c;
		const t = e.trim();
		if (!t) throw new Error("Enter a website address");
		if (/\s/.test(t))
			throw new Error("Website addresses cannot contain spaces");
		if (Zl.test(t))
			throw new Error("Wildcards and regular expressions are not supported");
		if (t.includes("?") || t.includes("#"))
			throw new Error("Query strings and fragments are not supported");
		const n = /^([a-z][a-z\d+.-]*):/i.exec(t),
			r = /^[a-z][a-z\d+.-]*:\/\//i.test(t);
		if (n && !r) {
			const d = (c = n[1]) == null ? void 0 : c.toLowerCase();
			if (d === "http" || d === "https")
				throw new Error("Enter a valid website address");
		}
		if (/^https?\/\//i.test(t) || /^https?:\/\/\//i.test(t))
			throw new Error("Enter a valid website address");
		let o;
		try {
			o = new URL(r ? t : `https://${t}`);
		} catch {
			throw new Error("Enter a valid website address");
		}
		if (!["http:", "https:"].includes(o.protocol))
			throw new Error("Only HTTP and HTTPS website addresses are supported");
		if (o.username || o.password)
			throw new Error("Credentials are not supported");
		const i = o.hostname.toLowerCase().replace(/\.$/, "");
		if (!i || i.includes("*")) throw new Error("Enter a valid website domain");
		let s;
		try {
			s = decodeURIComponent(o.pathname);
		} catch {
			throw new Error("Enter a valid website path");
		}
		if (Zl.test(s))
			throw new Error("Wildcards and regular expressions are not supported");
		if (/\s/.test(s))
			throw new Error("Website addresses cannot contain spaces");
		const a = s
			.replace(/\/{2,}/g, "/")
			.replace(/\/$/, "")
			.split("/")
			.map((d) => encodeURIComponent(d))
			.join("/");
		return { domain: i, pathPrefix: a === "/" ? "" : a };
	}
	const ob = m().transform((e, t) => {
			try {
				return rb(e);
			} catch (n) {
				return (
					t.addIssue({
						code: "custom",
						message:
							n instanceof Error ? n.message : "Enter a valid website address",
					}),
					Zs
				);
			}
		}),
		ib = k({
			id: C(),
			domain: m().min(1),
			pathPrefix: m(),
			allowSurveyFollowOutside: E(),
		});
	k({ websiteAddress: ob, allowSurveyFollowOutside: E() });
	function li(e, t) {
		if (e === t) return !0;
		const n = (r) => (r.startsWith("www.") ? r.slice(4) : r);
		return n(e) === n(t);
	}
	k({
		name: m().min(1),
		slug: m().min(1),
		description: m().optional(),
		canCreateTasks: G,
		canCreateSegments: G,
		canCreateScales: G,
		canCreateLabels: G,
	}),
		k({
			id: C(),
			name: m().min(1),
			slug: m()
				.min(1)
				.optional()
				.transform((e) => e || ""),
			canCreateTasks: G,
			canCreateSegments: G,
			canCreateScales: G,
			canCreateLabels: G,
			description: m().optional(),
		});
	const sb = k({
			id: C(),
			user: k({
				id: C(),
				name: m().nullable().optional(),
				email: nl().optional(),
			}),
			role: Cl,
		}),
		Vl = J([T("View"), T("Edit")]),
		ab = k({ id: C(), survey: k({ id: C(), name: m().optional() }), role: Vl });
	k({ team: C(), survey: C(), role: Vl }),
		k({ team: C(), survey: C() }),
		k({ team: C(), user: C(), role: Cl }),
		k({ team: C(), user: C() }),
		k({
			id: C(),
			name: m().min(1),
			slug: m().min(1),
			description: m().nullable(),
			emoji: In.nullable().optional(),
			createdAt: de(),
			updatedAt: de().nullable(),
			members: P(sb),
			surveys: P(ab),
			websiteAreas: P(ib),
			canCreateTasks: E().optional().default(!1),
			canCreateSegments: E().optional().default(!1),
			canCreateScales: E().optional().default(!1),
			canCreateLabels: E().optional().default(!0),
		});
	const $e = m().nullable(),
		$r = m().min(3),
		ci = m()
			.min(3)
			.regex(/^[a-z0-9-.]+$/),
		Wl = L(["Popup", "Inline", "Headless", "FullPage", "App"]),
		ui = L(["Survey", "Discovery", "TopTask", "Findability"]),
		Er = L(["BottomRight", "BottomLeft", "TopRight", "TopLeft"]),
		lb = L(["default", "floating-controls"]),
		di = E().or(nt()).optional(),
		pi = ne().min(0).max(100),
		Ln = ne().min(0),
		fi = ne().min(0),
		hi = ne()
			.min(0)
			.max(3600 * 1e3)
			.optional()
			.default(0),
		mi = ne().min(0).optional(),
		cb = L(
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
		ub = 100,
		Nn = new Map();
	function db(e) {
		try {
			return new RegExp(e);
		} catch {
			return null;
		}
	}
	function pb(e) {
		return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
	function fb(e, t) {
		try {
			const n = e.indexOf("?"),
				o =
					(n >= 0 ? e.slice(0, n) : e)
						.split("/")
						.filter(Boolean)
						.reduce((i, s) => `${i}\\/${db(s) ? `(${s})` : pb(s)}`, "^") +
					(t ? "(\\/.*)?" : "") +
					"$";
			return new RegExp(o);
		} catch {
			return null;
		}
	}
	function gi(e, t, n, r) {
		if (!t) return !1;
		if (r) {
			const a = `${t}:${n}`,
				l = Nn.get(a);
			if (l) return l.test(e);
			const c = fb(t, n);
			if (!c) return !1;
			if (Nn.size >= ub) {
				const d = Nn.keys().next().value;
				d && Nn.delete(d);
			}
			return Nn.set(a, c), c.test(e);
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
	function ql(e, t) {
		try {
			const n = new URL(t),
				r = e.domain ? li(e.domain.name, n.hostname) : !0,
				o =
					e.path &&
					gi(
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
	const Kl = k({
			textClose: $e,
			textHide: $e,
			textNext: $e,
			textPrev: $e,
			textMinimized: $e,
			textReplyLater: $e,
		}),
		hb = k({
			id: C(),
			isRegexp: E().default(!1),
			negate: E().default(!1),
			type: cb,
			value: m(),
			domains: P(k({ id: C(), name: m() })),
		}),
		yi = k({
			id: C(),
			ruleType: L(["Show", "Hide", "FollowOnly"]),
			path: m().optional(),
			desktop: E(),
			mobile: E(),
			tablet: E(),
			applyBelow: E(),
			follow: E(),
			isRegex: E().optional().default(!1),
			domain: k({ id: C(), name: m() }).optional().nullable(),
		}),
		je = Kl.partial().extend({
			mode: T("create"),
			name: $r,
			slug: ci,
			description: m().optional().nullable(),
			emoji: In.optional(),
			active: ue().optional(),
			status: rt.optional(),
			surveyType: ui.optional(),
			capturePercent: pi.optional(),
			minTimeForRetake: Ln.optional(),
			minTimeForRetrigger: fi.optional(),
			allowedOrigins: P(m()).optional(),
			initialDelay: hi,
			autoCloseAfter: mi,
			path: m()
				.optional()
				.overwrite((e) => (e === "" ? void 0 : e)),
			domain: m().optional(),
			applyBelow: ue().optional().default(!1),
			follow: ue().optional().default(!1),
			language: C(),
			editTeams: se(C(), E().or(nt())).default({}),
			visibleToAllTeams: E().or(nt()).optional().default(!1),
		}),
		Rr = m()
			.min(1, "Enter a password to protect this survey")
			.max(256, "Password must be 256 characters or fewer"),
		Jl = Ve("generalType", [
			je.extend({ generalType: T("App"), renderType: T("App") }).strict(),
			je
				.extend({
					generalType: T("Popup"),
					renderType: T("Popup"),
					surveyPosition: Er.optional(),
					showCloseButton: di,
				})
				.strict(),
			je.extend({ generalType: T("Inline"), renderType: T("Inline") }).strict(),
			je
				.extend({ generalType: T("Headless"), renderType: T("Headless") })
				.strict(),
			je
				.extend({
					generalType: T("FullPage"),
					renderType: T("FullPage"),
					accessMode: On.optional().nullable(),
					password: Rr.optional().nullable(),
					completionBehavior: ot.optional(),
					completionRedirectUrl: m().optional().nullable(),
					completionRedirectDelay: ne().int().optional().nullable(),
				})
				.strict(),
		]),
		mb = Ve("generalType", [
			je.extend({ generalType: T("App"), renderType: T("App") }),
			je.extend({
				generalType: T("Popup"),
				renderType: T("Popup"),
				surveyPosition: Er.optional(),
				showCloseButton: di,
			}),
			je.extend({ generalType: T("Inline"), renderType: T("Inline") }),
			je.extend({ generalType: T("Headless"), renderType: T("Headless") }),
			je.extend({
				generalType: T("FullPage"),
				renderType: T("FullPage"),
				accessMode: On.optional().nullable(),
				password: Rr.optional().nullable(),
				completionBehavior: ot.optional(),
				completionRedirectUrl: m().optional().nullable(),
				completionRedirectDelay: ne().int().optional().nullable(),
			}),
		]).transform((e, t) => {
			const n = Jl.safeParse(e);
			if (n.success) return n.data;
			const [r] = n.error.issues;
			return (
				t.addIssue({
					code: "custom",
					message:
						(r == null ? void 0 : r.message) ?? "Invalid survey create payload",
					path: r == null ? void 0 : r.path,
				}),
				Zs
			);
		}),
		Gl = k({
			mode: T("copy"),
			name: $r,
			slug: ci,
			emoji: In.optional(),
			copySurvey: C(),
			keepRules: E().or(nt()).optional().default(!0),
			cards: se(C(), E().or(nt())).optional(),
			editTeams: se(C(), E().or(nt())).default({}),
			visibleToAllTeams: E().or(nt()).optional().default(!1),
			description: m().optional().nullable(),
			accessMode: On.optional().nullable(),
			password: Rr.optional().nullable(),
			completionBehavior: ot.optional(),
			minTimeForRetake: Ln.optional(),
			completionRedirectUrl: m().optional().nullable(),
			completionRedirectDelay: ne().int().optional().nullable(),
		});
	Ve("mode", [Jl, Gl]),
		J([mb, Gl]),
		L(["Completion", "Demand"]),
		L(["Absolute", "Relative"]);
	const gb = k({
			name: $r.optional(),
			emoji: In.nullable().optional(),
			description: m().optional().nullable(),
			language: C().optional(),
			timezone: m().optional(),
			surveyType: ui.optional(),
		}),
		yb = k({
			accessMode: On.optional().nullable(),
			password: Rr.optional().nullable(),
			completionBehavior: ot.optional(),
			minTimeForRetake: Ln.optional(),
			completionRedirectUrl: m().optional().nullable(),
			completionRedirectDelay: ne().int().optional().nullable(),
		}),
		jn = k({ id: C(), visibleToAllTeams: E().or(nt()).optional() }).merge(gb),
		Yl = jn.extend({
			generalType: T("Popup"),
			renderType: T("Popup").optional(),
			surveyPosition: Er.optional(),
			showCloseButton: di,
		}),
		Xl = jn.extend({
			generalType: T("Inline"),
			renderType: T("Inline").optional(),
		}),
		Ql = jn.extend({
			generalType: T("Headless"),
			renderType: T("Headless").optional(),
		}),
		ec = jn.extend({ generalType: T("App"), renderType: T("App").optional() }),
		tc = jn
			.extend({
				generalType: T("FullPage"),
				renderType: T("FullPage").optional(),
			})
			.merge(yb);
	Ve("generalType", [Yl, Xl, Ql, ec, tc]),
		Ve("generalType", [
			Yl.strict(),
			Xl.strict(),
			Ql.strict(),
			ec.strict(),
			tc.strict(),
		]);
	const vb = k({
		capturePercent: pi.optional(),
		minTimeForRetake: Ln.optional(),
		minTimeForRetrigger: fi.optional(),
		allowedOrigins: P(m()).optional(),
		initialDelay: hi,
		autoCloseAfter: mi,
	});
	k({ id: C() }).merge(vb).strict();
	const bb = k({
		ogTitle: m().optional().nullable(),
		ogDescription: m().optional().nullable(),
		ogImage: Ie,
	});
	k({ id: C() }).merge(bb).strict();
	const wb = k({
		themeId: C().optional().nullable(),
		themeMode: jt.optional().nullable(),
		themeOverrides: Pn,
		fullPageConfig: jv.optional(),
		imageLayout: it.optional().nullable(),
		imageLayoutMobile: it.optional().nullable(),
		imageBrightness: U().min(0).max(1).optional().nullable(),
		imageFit: zr.optional().nullable(),
	});
	k({ id: C() }).merge(wb).strict();
	const _b = k({ language: C().optional(), languages: P(C()).optional() });
	k({ id: C() }).merge(_b).strict();
	const kb = Kl.partial();
	k({ id: C() }).merge(kb).strict(),
		k({
			publishingState: hl,
			publishStartAt: de().nullable(),
			publishEndAt: de().nullable(),
		});
	const Sb = C().brand(),
		xb = k({
			id: Sb,
			revision: ne().default(0),
			name: $r,
			slug: ci,
			fullSlug: m(),
			status: rt.nullable().optional(),
			publishingState: hl.optional(),
			isLive: E().optional(),
			description: m().optional().nullable(),
			customCss: m().nullish(),
			renderType: Wl,
			accessMode: On.optional().nullable(),
			displayMode: xr.optional().nullable(),
			themeMode: jt.optional().nullable(),
			themeOverrides: Pn,
			showProgressBar: ue().optional().nullable(),
			progressBarStyle: Cr.optional().nullable(),
			showQuestionNumbers: ue().optional().nullable(),
			allowBackNavigation: ue().optional().nullable(),
			completionBehavior: ot.optional().nullable(),
			completionRedirectUrl: m().optional().nullable(),
			completionRedirectDelay: ne().int().optional().nullable(),
			ogTitle: m().optional().nullable(),
			ogDescription: m().optional().nullable(),
			ogImage: Te,
			logo: Te,
			headerImage: Te,
			backgroundImage: Te,
			favicon: Te,
			imageLayout: it.optional().nullable(),
			imageLayoutMobile: it.optional().nullable(),
			imageBrightness: U().optional().nullable(),
			imageFit: zr.optional().nullable(),
			theme: si.optional().nullable(),
			fullPageConfig: Hl.optional().nullable(),
			surveyType: ui,
			surveyPosition: Er,
			showCloseButton: E(),
			popupLayout: lb,
			capturePercent: pi,
			minTimeForRetake: Ln,
			minTimeForRetrigger: fi,
			initialDelay: hi,
			autoCloseAfter: mi,
			allowedOrigins: P(m()).optional(),
			trackPageViews: ue().optional().nullable(),
			debugEnabled: ue().optional().nullable(),
			urlRules: P(hb),
			showRules: P(yi).default([]),
			followRules: P(yi).default([]),
			hideRules: P(yi).default([]),
			audienceRuleMode: kl.optional().default("and"),
			audienceRules: P(xl).optional().default([]),
			language: k({ id: C(), name: m(), code: m() }).nullable(),
			languages: P(k({ id: C(), name: m(), code: m() }))
				.optional()
				.nullable(),
			tr: P(
				k({
					code: m().nullish(),
					name: m().nullish(),
					"@textNext": m().nullish(),
					"@textPrev": m().nullish(),
					"@textClose": m().nullish(),
					"@textHide": m().nullish(),
					"@textMinimized": m().nullish(),
					"@textReplyLater": m().nullish(),
				}),
			)
				.optional()
				.nullable(),
			ipBlacklist: P(k({ id: C(), ip: m() })).optional(),
			textClose: $e.optional(),
			textHide: $e.optional(),
			textNext: $e.optional(),
			textPrev: $e.optional(),
			textMinimized: $e.optional(),
			textReplyLater: $e.optional(),
			pages: P(Fv).optional().nullable(),
		});
	k({
		autoClose: E().optional().default(!0),
		constrainHeight: E().optional().default(!0),
		testMode: E().optional().default(!1),
		apiHost: m().optional(),
	});
	function Mr(e) {
		const t = new Error(e);
		return (t.source = "ulid"), t;
	}
	const vi = "0123456789ABCDEFGHJKMNPQRSTVWXYZ",
		Bn = vi.length,
		nc = Math.pow(2, 48) - 1,
		Cb = 10,
		zb = 16;
	function Tb(e) {
		let t = Math.floor(e() * Bn);
		return t === Bn && (t = Bn - 1), vi.charAt(t);
	}
	function Ib(e, t) {
		if (isNaN(e)) throw new Error(e + " must be a number");
		if (e > nc) throw Mr("cannot encode time greater than " + nc);
		if (e < 0) throw Mr("time must be positive");
		if (Number.isInteger(Number(e)) === !1) throw Mr("time must be an integer");
		let n,
			r = "";
		for (; t > 0; t--) (n = e % Bn), (r = vi.charAt(n) + r), (e = (e - n) / Bn);
		return r;
	}
	function $b(e, t) {
		let n = "";
		for (; e > 0; e--) n = Tb(t) + n;
		return n;
	}
	function Eb(e = !1, t) {
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
		throw Mr("secure crypto unusable, insecure Math.random not allowed");
	}
	function Rb(e) {
		return (
			e || (e = Eb()),
			function (n) {
				return isNaN(n) && (n = Date.now()), Ib(n, Cb) + $b(zb, e);
			}
		);
	}
	const Be = Rb();
	function Mb() {
		if (typeof globalThis < "u") return globalThis;
		if (typeof self < "u") return self;
		if (typeof window < "u") return window;
		if (typeof global < "u") return global;
	}
	function Ab() {
		const e = Mb();
		if (e.__xstate__) return e.__xstate__;
	}
	const Pb = (e) => {
		if (typeof window > "u") return;
		const t = Ab();
		t && t.register(e);
	};
	class rc {
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
	const oc = ".",
		Ob = "",
		ic = "",
		Lb = "#",
		Nb = "*",
		sc = "xstate.init",
		jb = "xstate.error",
		Ar = "xstate.stop";
	function Bb(e, t) {
		return { type: `xstate.after.${e}.${t}` };
	}
	function bi(e, t) {
		return { type: `xstate.done.state.${e}`, output: t };
	}
	function Db(e, t) {
		return { type: `xstate.done.actor.${e}`, output: t, actorId: e };
	}
	function ac(e, t) {
		return { type: `xstate.error.actor.${e}`, error: t, actorId: e };
	}
	function lc(e) {
		return { type: sc, input: e };
	}
	function De(e) {
		setTimeout(() => {
			throw e;
		});
	}
	const Fb =
		(typeof Symbol == "function" && Symbol.observable) || "@@observable";
	function cc(e, t) {
		const n = uc(e),
			r = uc(t);
		return typeof r == "string"
			? typeof n == "string"
				? r === n
				: !1
			: typeof n == "string"
				? n in r
				: Object.keys(n).every((o) => (o in r ? cc(n[o], r[o]) : !1));
	}
	function wi(e) {
		if (fc(e)) return e;
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
	function uc(e) {
		if (_w(e)) return e.value;
		if (typeof e != "string") return e;
		const t = wi(e);
		return Ub(t);
	}
	function Ub(e) {
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
	function dc(e, t) {
		const n = {},
			r = Object.keys(e);
		for (let o = 0; o < r.length; o++) {
			const i = r[o];
			n[i] = t(e[i], i, e, o);
		}
		return n;
	}
	function pc(e) {
		return fc(e) ? e : [e];
	}
	function Ke(e) {
		return e === void 0 ? [] : pc(e);
	}
	function _i(e, t, n, r) {
		return typeof e == "function" ? e({ context: t, event: n, self: r }) : e;
	}
	function fc(e) {
		return Array.isArray(e);
	}
	function Hb(e) {
		return e.type.startsWith("xstate.error.actor");
	}
	function Ut(e) {
		return pc(e).map((t) =>
			typeof t > "u" || typeof t == "string" ? { target: t } : t,
		);
	}
	function hc(e) {
		if (!(e === void 0 || e === Ob)) return Ke(e);
	}
	function ki(e, t, n) {
		var i, s, a;
		const r = typeof e == "object",
			o = r ? e : void 0;
		return {
			next: (i = r ? e.next : e) == null ? void 0 : i.bind(o),
			error: (s = r ? e.error : t) == null ? void 0 : s.bind(o),
			complete: (a = r ? e.complete : n) == null ? void 0 : a.bind(o),
		};
	}
	function mc(e, t) {
		return `${t}.${e}`;
	}
	function Si(e, t) {
		const n = t.match(/^xstate\.invoke\.(\d+)\.(.*)/);
		if (!n) return e.implementations.actors[t];
		const [, r, o] = n,
			s = e.getStateNodeById(o).config.invoke;
		return (Array.isArray(s) ? s[r] : s).src;
	}
	function gc(e, t) {
		return `${e.sessionId}.${t}`;
	}
	let Zb = 0;
	function Vb(e, t) {
		const n = new Map(),
			r = new Map(),
			o = new WeakMap(),
			i = new Set(),
			s = {},
			{ clock: a, logger: l } = t,
			c = {
				schedule: (p, f, h, g, b = Math.random().toString(36).slice(2)) => {
					const v = {
							source: p,
							target: f,
							event: h,
							delay: g,
							id: b,
							startedAt: Date.now(),
						},
						_ = gc(p, b);
					u._snapshot._scheduledEvents[_] = v;
					const x = a.setTimeout(() => {
						delete s[_],
							delete u._snapshot._scheduledEvents[_],
							u._relay(p, f, h);
					}, g);
					s[_] = x;
				},
				cancel: (p, f) => {
					const h = gc(p, f),
						g = s[h];
					delete s[h],
						delete u._snapshot._scheduledEvents[h],
						g !== void 0 && a.clearTimeout(g);
				},
				cancelAll: (p) => {
					for (const f in u._snapshot._scheduledEvents) {
						const h = u._snapshot._scheduledEvents[f];
						h.source === p && c.cancel(p, h.id);
					}
				},
			},
			d = (p) => {
				if (!i.size) return;
				const f = { ...p, rootId: e.sessionId };
				i.forEach((h) => {
					var g;
					return (g = h.next) == null ? void 0 : g.call(h, f);
				});
			},
			u = {
				_snapshot: {
					_scheduledEvents:
						((t == null ? void 0 : t.snapshot) && t.snapshot.scheduler) ?? {},
				},
				_bookId: () => `x:${Zb++}`,
				_register: (p, f) => (n.set(p, f), p),
				_unregister: (p) => {
					n.delete(p.sessionId);
					const f = o.get(p);
					f !== void 0 && (r.delete(f), o.delete(p));
				},
				get: (p) => r.get(p),
				_set: (p, f) => {
					const h = r.get(p);
					if (h && h !== f)
						throw new Error(`Actor with system ID '${p}' already exists.`);
					r.set(p, f), o.set(f, p);
				},
				inspect: (p) => {
					const f = ki(p);
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
				_relay: (p, f, h) => {
					u._sendInspectionEvent({
						type: "@xstate.event",
						sourceRef: p,
						actorRef: f,
						event: h,
					}),
						f._send(h);
				},
				scheduler: c,
				getSnapshot: () => ({
					_scheduledEvents: { ...u._snapshot._scheduledEvents },
				}),
				start: () => {
					const p = u._snapshot._scheduledEvents;
					u._snapshot._scheduledEvents = {};
					for (const f in p) {
						const { source: h, target: g, event: b, delay: v, id: _ } = p[f];
						c.schedule(h, g, b, v, _);
					}
				},
				_clock: a,
				_logger: l,
			};
		return u;
	}
	const xi = 1;
	let we = (function (e) {
		return (
			(e[(e.NotStarted = 0)] = "NotStarted"),
			(e[(e.Running = 1)] = "Running"),
			(e[(e.Stopped = 2)] = "Stopped"),
			e
		);
	})({});
	const Wb = {
		clock: {
			setTimeout: (e, t) => setTimeout(e, t),
			clearTimeout: (e) => clearTimeout(e),
		},
		logger: console.log.bind(console),
		devTools: !1,
	};
	class qb {
		constructor(t, n) {
			(this.logic = t),
				(this._snapshot = void 0),
				(this.clock = void 0),
				(this.options = void 0),
				(this.id = void 0),
				(this.mailbox = new rc(this._process.bind(this))),
				(this.observers = new Set()),
				(this.eventListeners = new Map()),
				(this.logger = void 0),
				(this._processingStatus = we.NotStarted),
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
			const r = { ...Wb, ...n },
				{
					clock: o,
					logger: i,
					parent: s,
					syncSnapshot: a,
					id: l,
					systemId: c,
					inspect: d,
				} = r;
			(this.system = s ? s.system : Vb(this, { clock: o, logger: i })),
				d && !s && this.system.inspect(ki(d)),
				(this.sessionId = this.system._bookId()),
				(this.id = l ?? this.sessionId),
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
						const h = [...(p ? p.values() : []), ...(f ? f.values() : [])];
						for (const g of h)
							try {
								g(u);
							} catch (b) {
								De(b);
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
						this._processingStatus === we.Running
							? p()
							: this._deferred.push(p);
					},
				}),
				(this.send = this.send.bind(this)),
				this.system._sendInspectionEvent({
					type: "@xstate.actor",
					actorRef: this,
				}),
				c && ((this._systemId = c), this.system._set(c, this)),
				this._initState(
					(n == null ? void 0 : n.snapshot) ?? (n == null ? void 0 : n.state),
				),
				c &&
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
							De(a);
						}
					break;
				case "done":
					for (const s of this.observers)
						try {
							(i = s.next) == null || i.call(s, t);
						} catch (a) {
							De(a);
						}
					this._stopProcedure(),
						this._complete(),
						(this._doneEvent = Db(this.id, this._snapshot.output)),
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
			const o = ki(t, n, r);
			if (this._processingStatus !== we.Stopped) this.observers.add(o);
			else
				switch (this._snapshot.status) {
					case "done":
						try {
							(i = o.complete) == null || i.call(o);
						} catch (s) {
							De(s);
						}
						break;
					case "error": {
						const s = this._snapshot.error;
						if (!o.error) De(s);
						else
							try {
								o.error(s);
							} catch (a) {
								De(a);
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
			if (this._processingStatus === we.Running) return this;
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
				(this._processingStatus = we.Running);
			const t = lc(this.options.input);
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
				t.type === Ar && (this._stopProcedure(), this._complete());
		}
		_stop() {
			return this._processingStatus === we.Stopped
				? this
				: (this.mailbox.clear(),
					this._processingStatus === we.NotStarted
						? ((this._processingStatus = we.Stopped), this)
						: (this.mailbox.enqueue({ type: Ar }), this));
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
					De(r);
				}
			this.observers.clear();
		}
		_reportError(t) {
			if (!this.observers.size) {
				this._parent || De(t);
				return;
			}
			let n = !1;
			for (const r of this.observers) {
				const o = r.error;
				n || (n = !o);
				try {
					o == null || o(t);
				} catch (i) {
					De(i);
				}
			}
			this.observers.clear(), n && De(t);
		}
		_error(t) {
			this._stopProcedure(),
				this._reportError(t),
				this._parent && this.system._relay(this, this._parent, ac(this.id, t));
		}
		_stopProcedure() {
			return this._processingStatus !== we.Running
				? this
				: (this.system.scheduler.cancelAll(this),
					this.mailbox.clear(),
					(this.mailbox = new rc(this._process.bind(this))),
					(this._processingStatus = we.Stopped),
					this.system._unregister(this),
					this);
		}
		_send(t) {
			this._processingStatus !== we.Stopped && this.mailbox.enqueue(t);
		}
		send(t) {
			this.system._relay(void 0, this, t);
		}
		attachDevTools() {
			const { devTools: t } = this.options;
			t && (typeof t == "function" ? t : Pb)(this);
		}
		toJSON() {
			return { xstate$$type: xi, id: this.id };
		}
		getPersistedSnapshot(t) {
			return this.logic.getPersistedSnapshot(this._snapshot, t);
		}
		[Fb]() {
			return this;
		}
		getSnapshot() {
			return this._snapshot;
		}
	}
	function Ht(e, ...[t]) {
		return new qb(e, t);
	}
	function Kb(e, t, n, r, { sendId: o }) {
		const i = typeof o == "function" ? o(n, r) : o;
		return [t, { sendId: i }, void 0];
	}
	function Jb(e, t) {
		e.defer(() => {
			e.system.scheduler.cancel(e.self, t.sendId);
		});
	}
	function yc(e) {
		function t(n, r) {}
		return (
			(t.type = "xstate.cancel"),
			(t.sendId = e),
			(t.resolve = Kb),
			(t.execute = Jb),
			t
		);
	}
	function Gb(
		e,
		t,
		n,
		r,
		{ id: o, systemId: i, src: s, input: a, syncSnapshot: l },
	) {
		const c = typeof s == "string" ? Si(t.machine, s) : s,
			d = typeof o == "function" ? o(n) : o;
		let u, p;
		return (
			c &&
				((p =
					typeof a == "function"
						? a({ context: t.context, event: n.event, self: e.self })
						: a),
				(u = Ht(c, {
					id: d,
					src: s,
					parent: e.self,
					syncSnapshot: l,
					systemId: i,
					input: p,
				}))),
			[
				_t(t, { children: { ...t.children, [d]: u } }),
				{ id: o, systemId: i, actorRef: u, src: s, input: p },
				void 0,
			]
		);
	}
	function Yb(e, { actorRef: t }) {
		t &&
			e.defer(() => {
				t._processingStatus !== we.Stopped && t.start();
			});
	}
	function vc(
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
			(i.resolve = Gb),
			(i.execute = Yb),
			i
		);
	}
	function Xb(e, t, n, r, { actorRef: o }) {
		const i = typeof o == "function" ? o(n, r) : o,
			s = typeof i == "string" ? t.children[i] : i;
		let a = t.children;
		return (
			s && ((a = { ...a }), delete a[s.id]), [_t(t, { children: a }), s, void 0]
		);
	}
	function Qb(e, t) {
		if (t) {
			if ((e.system._unregister(t), t._processingStatus !== we.Running)) {
				e.stopChild(t);
				return;
			}
			e.defer(() => {
				e.stopChild(t);
			});
		}
	}
	function st(e) {
		function t(n, r) {}
		return (
			(t.type = "xstate.stopChild"),
			(t.actorRef = e),
			(t.resolve = Xb),
			(t.execute = Qb),
			t
		);
	}
	function ew(e, { context: t, event: n }, { guards: r }) {
		return !Zt(r[0], t, n, e);
	}
	function Pr(e) {
		function t(n, r) {
			return !1;
		}
		return (t.check = ew), (t.guards = [e]), t;
	}
	function tw(e, { context: t, event: n }, { guards: r }) {
		return r.every((o) => Zt(o, t, n, e));
	}
	function at(e) {
		function t(n, r) {
			return !1;
		}
		return (t.check = tw), (t.guards = e), t;
	}
	function Zt(e, t, n, r) {
		const { machine: o } = r,
			i = typeof e == "function",
			s = i ? e : o.implementations.guards[typeof e == "string" ? e : e.type];
		if (!i && !s)
			throw new Error(
				`Guard '${typeof e == "string" ? e : e.type}' is not implemented.'.`,
			);
		if (typeof s != "function") return Zt(s, t, n, r);
		const a = { context: t, event: n },
			l =
				i || typeof e == "string"
					? void 0
					: "params" in e
						? typeof e.params == "function"
							? e.params({ context: t, event: n })
							: e.params
						: void 0;
		return "check" in s ? s.check(r, a, s) : s(a, l);
	}
	const Ci = (e) => e.type === "atomic" || e.type === "final";
	function Vt(e) {
		return Object.values(e.states).filter((t) => t.type !== "history");
	}
	function Dn(e, t) {
		const n = [];
		if (t === e) return n;
		let r = e.parent;
		for (; r && r !== t; ) n.push(r), (r = r.parent);
		return n;
	}
	function Or(e) {
		const t = new Set(e),
			n = wc(t);
		for (const r of t)
			if (r.type === "compound" && (!n.get(r) || !n.get(r).length))
				Sc(r).forEach((o) => t.add(o));
			else if (r.type === "parallel") {
				for (const o of Vt(r))
					if (o.type !== "history" && !t.has(o)) {
						const i = Sc(o);
						for (const s of i) t.add(s);
					}
			}
		for (const r of t) {
			let o = r.parent;
			for (; o; ) t.add(o), (o = o.parent);
		}
		return t;
	}
	function bc(e, t) {
		const n = t.get(e);
		if (!n) return {};
		if (e.type === "compound") {
			const o = n[0];
			if (o) {
				if (Ci(o)) return o.key;
			} else return {};
		}
		const r = {};
		for (const o of n) r[o.key] = bc(o, t);
		return r;
	}
	function wc(e) {
		const t = new Map();
		for (const n of e)
			t.has(n) || t.set(n, []),
				n.parent &&
					(t.has(n.parent) || t.set(n.parent, []), t.get(n.parent).push(n));
		return t;
	}
	function _c(e, t) {
		const n = Or(t);
		return bc(e, wc(n));
	}
	function zi(e, t) {
		return t.type === "compound"
			? Vt(t).some((n) => n.type === "final" && e.has(n))
			: t.type === "parallel"
				? Vt(t).every((n) => zi(e, n))
				: t.type === "final";
	}
	const Lr = (e) => e[0] === Lb;
	function nw(e, t) {
		return (
			e.transitions.get(t) ||
			[...e.transitions.keys()]
				.filter((r) => {
					if (r === Nb) return !0;
					if (!r.endsWith(".*")) return !1;
					const o = r.split("."),
						i = t.split(".");
					for (let s = 0; s < o.length; s++) {
						const a = o[s],
							l = i[s];
						if (a === "*") return s === o.length - 1;
						if (a !== l) return !1;
					}
					return !0;
				})
				.sort((r, o) => o.length - r.length)
				.flatMap((r) => e.transitions.get(r))
		);
	}
	function rw(e) {
		const t = e.config.after;
		if (!t) return [];
		const n = (o) => {
			const i = Bb(o, e.id),
				s = i.type;
			return e.entry.push(Mc(i, { id: s, delay: o })), e.exit.push(yc(s)), s;
		};
		return Object.keys(t)
			.flatMap((o) => {
				const i = t[o],
					s = typeof i == "string" ? { target: i } : i,
					a = Number.isNaN(+o) ? o : +o,
					l = n(a);
				return Ke(s).map((c) => ({ ...c, event: l, delay: a }));
			})
			.map((o) => {
				const { delay: i } = o;
				return { ...bt(e, o.event, o), delay: i };
			});
	}
	function bt(e, t, n) {
		const r = hc(n.target),
			o = n.reenter ?? !1,
			i = sw(e, r),
			s = {
				...n,
				actions: Ke(n.actions),
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
	function ow(e) {
		const t = new Map();
		if (e.config.on)
			for (const n of Object.keys(e.config.on)) {
				if (n === ic)
					throw new Error(
						'Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.',
					);
				const r = e.config.on[n];
				t.set(
					n,
					Ut(r).map((o) => bt(e, n, o)),
				);
			}
		if (e.config.onDone) {
			const n = `xstate.done.state.${e.id}`;
			t.set(
				n,
				Ut(e.config.onDone).map((r) => bt(e, n, r)),
			);
		}
		for (const n of e.invoke) {
			if (n.onDone) {
				const r = `xstate.done.actor.${n.id}`;
				t.set(
					r,
					Ut(n.onDone).map((o) => bt(e, r, o)),
				);
			}
			if (n.onError) {
				const r = `xstate.error.actor.${n.id}`;
				t.set(
					r,
					Ut(n.onError).map((o) => bt(e, r, o)),
				);
			}
			if (n.onSnapshot) {
				const r = `xstate.snapshot.${n.id}`;
				t.set(
					r,
					Ut(n.onSnapshot).map((o) => bt(e, r, o)),
				);
			}
		}
		for (const n of e.after) {
			let r = t.get(n.eventType);
			r || ((r = []), t.set(n.eventType, r)), r.push(n);
		}
		return t;
	}
	function iw(e, t) {
		const n =
			typeof t == "string" ? e.states[t] : t ? e.states[t.target] : void 0;
		if (!n && t)
			throw new Error(
				`Initial state node "${t}" not found on parent state node #${e.id}`,
			);
		const r = {
			source: e,
			actions: !t || typeof t == "string" ? [] : Ke(t.actions),
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
	function sw(e, t) {
		if (t !== void 0)
			return t.map((n) => {
				if (typeof n != "string") return n;
				if (Lr(n)) return e.machine.getStateNodeById(n);
				const r = n[0] === oc;
				if (r && !e.parent) return Nr(e, n.slice(1));
				const o = r ? e.key + n : n;
				if (e.parent)
					try {
						return Nr(e.parent, o);
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
	function kc(e) {
		const t = hc(e.config.target);
		return t
			? { target: t.map((n) => (typeof n == "string" ? Nr(e.parent, n) : n)) }
			: e.parent.initial;
	}
	function wt(e) {
		return e.type === "history";
	}
	function Sc(e) {
		const t = xc(e);
		for (const n of t) for (const r of Dn(n, e)) t.add(r);
		return t;
	}
	function xc(e) {
		const t = new Set();
		function n(r) {
			if (!t.has(r)) {
				if ((t.add(r), r.type === "compound")) n(r.initial.target[0]);
				else if (r.type === "parallel") for (const o of Vt(r)) n(o);
			}
		}
		return n(e), t;
	}
	function Wt(e, t) {
		if (Lr(t)) return e.machine.getStateNodeById(t);
		if (!e.states)
			throw new Error(
				`Unable to retrieve child state '${t}' from '${e.id}'; no child states exist.`,
			);
		const n = e.states[t];
		if (!n) throw new Error(`Child state '${t}' does not exist on '${e.id}'`);
		return n;
	}
	function Nr(e, t) {
		if (typeof t == "string" && Lr(t))
			try {
				return e.machine.getStateNodeById(t);
			} catch {}
		const n = wi(t).slice();
		let r = e;
		for (; n.length; ) {
			const o = n.shift();
			if (!o.length) break;
			r = Wt(r, o);
		}
		return r;
	}
	function jr(e, t) {
		if (typeof t == "string") {
			const o = e.states[t];
			if (!o) throw new Error(`State '${t}' does not exist on '${e.id}'`);
			return [e, o];
		}
		const n = Object.keys(t),
			r = n.map((o) => Wt(e, o)).filter(Boolean);
		return [e.machine.root, e].concat(
			r,
			n.reduce((o, i) => {
				const s = Wt(e, i);
				if (!s) return o;
				const a = jr(s, t[i]);
				return o.concat(a);
			}, []),
		);
	}
	function aw(e, t, n, r) {
		const i = Wt(e, t).next(n, r);
		return !i || !i.length ? e.next(n, r) : i;
	}
	function lw(e, t, n, r) {
		const o = Object.keys(t),
			i = Wt(e, o[0]),
			s = Ti(i, t[o[0]], n, r);
		return !s || !s.length ? e.next(n, r) : s;
	}
	function cw(e, t, n, r) {
		const o = [];
		for (const i of Object.keys(t)) {
			const s = t[i];
			if (!s) continue;
			const a = Wt(e, i),
				l = Ti(a, s, n, r);
			l && o.push(...l);
		}
		return o.length ? o : e.next(n, r);
	}
	function Ti(e, t, n, r) {
		return typeof t == "string"
			? aw(e, t, n, r)
			: Object.keys(t).length === 1
				? lw(e, t, n, r)
				: cw(e, t, n, r);
	}
	function uw(e) {
		return Object.keys(e.states)
			.map((t) => e.states[t])
			.filter((t) => t.type === "history");
	}
	function lt(e, t) {
		let n = e;
		for (; n.parent && n.parent !== t; ) n = n.parent;
		return n.parent === t;
	}
	function dw(e, t) {
		const n = new Set(e),
			r = new Set(t);
		for (const o of n) if (r.has(o)) return !0;
		for (const o of r) if (n.has(o)) return !0;
		return !1;
	}
	function Cc(e, t, n) {
		const r = new Set();
		for (const o of e) {
			let i = !1;
			const s = new Set();
			for (const a of r)
				if (dw($i([o], t, n), $i([a], t, n)))
					if (lt(o.source, a.source)) s.add(a);
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
	function pw(e) {
		const [t, ...n] = e;
		for (const r of Dn(t, void 0)) if (n.every((o) => lt(o, r))) return r;
	}
	function Ii(e, t) {
		if (!e.target) return [];
		const n = new Set();
		for (const r of e.target)
			if (wt(r))
				if (t[r.id]) for (const o of t[r.id]) n.add(o);
				else for (const o of Ii(kc(r), t)) n.add(o);
			else n.add(r);
		return [...n];
	}
	function zc(e, t) {
		const n = Ii(e, t);
		if (!n) return;
		if (!e.reenter && n.every((o) => o === e.source || lt(o, e.source)))
			return e.source;
		const r = pw(n.concat(e.source));
		if (r) return r;
		if (!e.reenter) return e.source.machine.root;
	}
	function $i(e, t, n) {
		var o;
		const r = new Set();
		for (const i of e)
			if ((o = i.target) != null && o.length) {
				const s = zc(i, n);
				i.reenter && i.source === s && r.add(s);
				for (const a of t) lt(a, s) && r.add(a);
			}
		return [...r];
	}
	function fw(e, t) {
		if (e.length !== t.size) return !1;
		for (const n of e) if (!t.has(n)) return !1;
		return !0;
	}
	function Ei(e, t, n, r, o, i) {
		if (!e.length) return t;
		const s = new Set(t._nodes);
		let a = t.historyValue;
		const l = Cc(e, s, a);
		let c = t;
		o || ([c, a] = yw(c, r, n, l, s, a, i)),
			(c = Kt(
				c,
				r,
				n,
				l.flatMap((u) => u.actions),
				i,
				void 0,
			)),
			(c = mw(c, r, n, l, s, i, a, o));
		const d = [...s];
		c.status === "done" &&
			(c = Kt(
				c,
				r,
				n,
				d.sort((u, p) => p.order - u.order).flatMap((u) => u.exit),
				i,
				void 0,
			));
		try {
			return a === t.historyValue && fw(t._nodes, s)
				? c
				: _t(c, { _nodes: d, historyValue: a });
		} catch (u) {
			throw u;
		}
	}
	function hw(e, t, n, r, o) {
		if (r.output === void 0) return;
		const i = bi(
			o.id,
			o.output !== void 0 && o.parent
				? _i(o.output, e.context, t, n.self)
				: void 0,
		);
		return _i(r.output, e.context, i, n.self);
	}
	function mw(e, t, n, r, o, i, s, a) {
		let l = e;
		const c = new Set(),
			d = new Set();
		gw(r, s, d, c), a && d.add(e.machine.root);
		const u = new Set();
		for (const p of [...c].sort((f, h) => f.order - h.order)) {
			o.add(p);
			const f = [];
			f.push(...p.entry);
			for (const h of p.invoke)
				f.push(vc(h.src, { ...h, syncSnapshot: !!h.onSnapshot }));
			if (d.has(p)) {
				const h = p.initial.actions;
				f.push(...h);
			}
			if (
				((l = Kt(
					l,
					t,
					n,
					f,
					i,
					p.invoke.map((h) => h.id),
				)),
				p.type === "final")
			) {
				const h = p.parent;
				let g =
						(h == null ? void 0 : h.type) === "parallel"
							? h
							: h == null
								? void 0
								: h.parent,
					b = g || p;
				for (
					(h == null ? void 0 : h.type) === "compound" &&
					i.push(
						bi(
							h.id,
							p.output !== void 0 ? _i(p.output, l.context, t, n.self) : void 0,
						),
					);
					(g == null ? void 0 : g.type) === "parallel" && !u.has(g) && zi(o, g);
				)
					u.add(g), i.push(bi(g.id)), (b = g), (g = g.parent);
				if (g) continue;
				l = _t(l, { status: "done", output: hw(l, t, n, l.machine.root, b) });
			}
		}
		return l;
	}
	function gw(e, t, n, r) {
		for (const o of e) {
			const i = zc(o, t);
			for (const a of o.target || [])
				!wt(a) &&
					(o.source !== a || o.source !== i || o.reenter) &&
					(r.add(a), n.add(a)),
					qt(a, t, n, r);
			const s = Ii(o, t);
			for (const a of s) {
				const l = Dn(a, i);
				(i == null ? void 0 : i.type) === "parallel" && l.push(i),
					Tc(r, t, n, l, !o.source.parent && o.reenter ? void 0 : i);
			}
		}
	}
	function qt(e, t, n, r) {
		var o;
		if (wt(e))
			if (t[e.id]) {
				const i = t[e.id];
				for (const s of i) r.add(s), qt(s, t, n, r);
				for (const s of i) Ri(s, e.parent, r, t, n);
			} else {
				const i = kc(e);
				for (const s of i.target)
					r.add(s),
						i === ((o = e.parent) == null ? void 0 : o.initial) &&
							n.add(e.parent),
						qt(s, t, n, r);
				for (const s of i.target) Ri(s, e.parent, r, t, n);
			}
		else if (e.type === "compound") {
			const [i] = e.initial.target;
			wt(i) || (r.add(i), n.add(i)), qt(i, t, n, r), Ri(i, e, r, t, n);
		} else if (e.type === "parallel")
			for (const i of Vt(e).filter((s) => !wt(s)))
				[...r].some((s) => lt(s, i)) ||
					(wt(i) || (r.add(i), n.add(i)), qt(i, t, n, r));
	}
	function Tc(e, t, n, r, o) {
		for (const i of r)
			if (((!o || lt(i, o)) && e.add(i), i.type === "parallel"))
				for (const s of Vt(i).filter((a) => !wt(a)))
					[...e].some((a) => lt(a, s)) || (e.add(s), qt(s, t, n, e));
	}
	function Ri(e, t, n, r, o) {
		Tc(n, r, o, Dn(e, t));
	}
	function yw(e, t, n, r, o, i, s, a) {
		let l = e;
		const c = $i(r, o, i);
		c.sort((u, p) => p.order - u.order);
		let d;
		for (const u of c)
			for (const p of uw(u)) {
				let f;
				p.history === "deep"
					? (f = (h) => Ci(h) && lt(h, u))
					: (f = (h) => h.parent === u),
					d ?? (d = { ...i }),
					(d[p.id] = Array.from(o).filter(f));
			}
		for (const u of c)
			(l = Kt(
				l,
				t,
				n,
				[...u.exit, ...u.invoke.map((p) => st(p.id))],
				s,
				void 0,
			)),
				o.delete(u);
		return [l, d || i];
	}
	function vw(e, t) {
		return e.implementations.actions[t];
	}
	function Ic(e, t, n, r, o, i) {
		const { machine: s } = e;
		let a = e;
		for (const l of r) {
			const c = typeof l == "function",
				d = c ? l : vw(s, typeof l == "string" ? l : l.type),
				u = { context: a.context, event: t, self: n.self, system: n.system },
				p =
					c || typeof l == "string"
						? void 0
						: "params" in l
							? typeof l.params == "function"
								? l.params({ context: a.context, event: t })
								: l.params
							: void 0;
			if (!d || !("resolve" in d)) {
				n.actionExecutor({
					type:
						typeof l == "string"
							? l
							: typeof l == "object"
								? l.type
								: l.name || "(anonymous)",
					info: u,
					params: p,
					exec: d,
				});
				continue;
			}
			const f = d,
				[h, g, b] = f.resolve(n, a, u, p, d, o);
			(a = h),
				"retryResolve" in f && (i == null || i.push([f, g])),
				"execute" in f &&
					n.actionExecutor({
						type: f.type,
						info: u,
						params: g,
						exec: f.execute.bind(null, n, g),
					}),
				b && (a = Ic(a, t, n, b, o, i));
		}
		return a;
	}
	function Kt(e, t, n, r, o, i) {
		const s = i ? [] : void 0,
			a = Ic(e, t, n, r, { internalQueue: o, deferredActorIds: i }, s);
		return (
			s == null ||
				s.forEach(([l, c]) => {
					l.retryResolve(n, a, c);
				}),
			a
		);
	}
	function Mi(e, t, n, r) {
		let o = e;
		const i = [];
		function s(c, d, u) {
			n.system._sendInspectionEvent({
				type: "@xstate.microstep",
				actorRef: n.self,
				event: d,
				snapshot: c,
				_transitions: u,
			}),
				i.push(c);
		}
		if (t.type === Ar)
			return (
				(o = _t($c(o, t, n), { status: "stopped" })),
				s(o, t, []),
				{ snapshot: o, microstates: i }
			);
		let a = t;
		if (a.type !== sc) {
			const c = a,
				d = Hb(c),
				u = Ec(c, o);
			if (d && !u.length)
				return (
					(o = _t(e, { status: "error", error: c.error })),
					s(o, c, []),
					{ snapshot: o, microstates: i }
				);
			(o = Ei(u, e, n, a, !1, r)), s(o, c, u);
		}
		let l = !0;
		for (; o.status === "active"; ) {
			let c = l ? bw(o, a) : [];
			const d = c.length ? o : void 0;
			if (!c.length) {
				if (!r.length) break;
				(a = r.shift()), (c = Ec(a, o));
			}
			(o = Ei(c, o, n, a, !1, r)), (l = o !== d), s(o, a, c);
		}
		return (
			o.status !== "active" && $c(o, a, n), { snapshot: o, microstates: i }
		);
	}
	function $c(e, t, n) {
		return Kt(
			e,
			t,
			n,
			Object.values(e.children).map((r) => st(r)),
			[],
			void 0,
		);
	}
	function Ec(e, t) {
		return t.machine.getTransitionData(t, e);
	}
	function bw(e, t) {
		const n = new Set(),
			r = e._nodes.filter(Ci);
		for (const o of r)
			e: for (const i of [o].concat(Dn(o, void 0)))
				if (i.always) {
					for (const s of i.always)
						if (s.guard === void 0 || Zt(s.guard, e.context, t, e)) {
							n.add(s);
							break e;
						}
				}
		return Cc(Array.from(n), new Set(e._nodes), e.historyValue);
	}
	function ww(e, t) {
		const n = Or(jr(e, t));
		return _c(e, [...n]);
	}
	function _w(e) {
		return !!e && typeof e == "object" && "machine" in e && "value" in e;
	}
	const kw = function (t) {
			return cc(t, this.value);
		},
		Sw = function (t) {
			return this.tags.has(t);
		},
		xw = function (t) {
			const n = this.machine.getTransitionData(this, t);
			return (
				!!(n != null && n.length) &&
				n.some((r) => r.target !== void 0 || r.actions.length)
			);
		},
		Cw = function () {
			const {
				_nodes: t,
				tags: n,
				machine: r,
				getMeta: o,
				toJSON: i,
				can: s,
				hasTag: a,
				matches: l,
				...c
			} = this;
			return { ...c, tags: Array.from(n) };
		},
		zw = function () {
			return this._nodes.reduce(
				(t, n) => (n.meta !== void 0 && (t[n.id] = n.meta), t),
				{},
			);
		};
	function Br(e, t) {
		return {
			status: e.status,
			output: e.output,
			error: e.error,
			machine: t,
			context: e.context,
			_nodes: e._nodes,
			value: _c(t.root, e._nodes),
			tags: new Set(e._nodes.flatMap((n) => n.tags)),
			children: e.children,
			historyValue: e.historyValue || {},
			matches: kw,
			hasTag: Sw,
			can: xw,
			getMeta: zw,
			toJSON: Cw,
		};
	}
	function _t(e, t = {}) {
		return Br({ ...e, ...t }, e.machine);
	}
	function Tw(e) {
		if (typeof e != "object" || e === null) return {};
		const t = {};
		for (const n in e) {
			const r = e[n];
			Array.isArray(r) && (t[n] = r.map((o) => ({ id: o.id })));
		}
		return t;
	}
	function Iw(e, t) {
		const {
				_nodes: n,
				tags: r,
				machine: o,
				children: i,
				context: s,
				can: a,
				hasTag: l,
				matches: c,
				getMeta: d,
				toJSON: u,
				...p
			} = e,
			f = {};
		for (const g in i) {
			const b = i[g];
			f[g] = {
				snapshot: b.getPersistedSnapshot(t),
				src: b.src,
				systemId: b._systemId,
				syncSnapshot: b._syncSnapshot,
			};
		}
		return {
			...p,
			context: Rc(s),
			children: f,
			historyValue: Tw(p.historyValue),
		};
	}
	function Rc(e) {
		let t;
		for (const n in e) {
			const r = e[n];
			if (r && typeof r == "object")
				if ("sessionId" in r && "send" in r && "ref" in r)
					t ?? (t = Array.isArray(e) ? e.slice() : { ...e }),
						(t[n] = { xstate$$type: xi, id: r.id });
				else {
					const o = Rc(r);
					o !== r &&
						(t ?? (t = Array.isArray(e) ? e.slice() : { ...e }), (t[n] = o));
				}
		}
		return t ?? e;
	}
	function $w(e, t, n, r, { event: o, id: i, delay: s }, { internalQueue: a }) {
		const l = t.machine.implementations.delays;
		if (typeof o == "string")
			throw new Error(
				`Only event objects may be used with raise; use raise({ type: "${o}" }) instead`,
			);
		const c = typeof o == "function" ? o(n, r) : o;
		let d;
		if (typeof s == "string") {
			const u = l && l[s];
			d = typeof u == "function" ? u(n, r) : u;
		} else d = typeof s == "function" ? s(n, r) : s;
		return (
			typeof d != "number" && a.push(c),
			[t, { event: c, id: i, delay: d }, void 0]
		);
	}
	function Ew(e, t) {
		const { event: n, delay: r, id: o } = t;
		if (typeof r == "number") {
			e.defer(() => {
				const i = e.self;
				e.system.scheduler.schedule(i, i, n, r, o);
			});
			return;
		}
	}
	function Mc(e, t) {
		function n(r, o) {}
		return (
			(n.type = "xstate.raise"),
			(n.event = e),
			(n.id = t == null ? void 0 : t.id),
			(n.delay = t == null ? void 0 : t.delay),
			(n.resolve = $w),
			(n.execute = Ew),
			n
		);
	}
	const Ac = "xstate.promise.resolve",
		Pc = "xstate.promise.reject",
		Dr = new WeakMap();
	function Se(e) {
		return {
			config: e,
			transition: (n, r, o) => {
				var i;
				if (n.status !== "active") return n;
				switch (r.type) {
					case Ac: {
						const s = r.data;
						return { ...n, status: "done", output: s, input: void 0 };
					}
					case Pc:
						return { ...n, status: "error", error: r.data, input: void 0 };
					case Ar:
						return (
							(i = Dr.get(o.self)) == null || i.abort(),
							{ ...n, status: "stopped", input: void 0 }
						);
					default:
						return n;
				}
			},
			start: (n, { self: r, system: o, emit: i }) => {
				if (n.status !== "active") return;
				const s = new AbortController();
				Dr.set(r, s),
					Promise.resolve(
						e({
							input: n.input,
							system: o,
							self: r,
							signal: s.signal,
							emit: i,
						}),
					).then(
						(l) => {
							r.getSnapshot().status === "active" &&
								(Dr.delete(r), o._relay(r, r, { type: Ac, data: l }));
						},
						(l) => {
							r.getSnapshot().status === "active" &&
								(Dr.delete(r), o._relay(r, r, { type: Pc, data: l }));
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
	function Rw(e, { machine: t, context: n }, r, o) {
		const i = (s, a) => {
			if (typeof s == "string") {
				const l = Si(t, s);
				if (!l)
					throw new Error(
						`Actor logic '${s}' not implemented in machine '${t.id}'`,
					);
				const c = Ht(l, {
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
				return (o[c.id] = c), c;
			} else
				return Ht(s, {
					id: a == null ? void 0 : a.id,
					parent: e.self,
					syncSnapshot: a == null ? void 0 : a.syncSnapshot,
					input: a == null ? void 0 : a.input,
					src: s,
					systemId: a == null ? void 0 : a.systemId,
				});
		};
		return (s, a) => {
			const l = i(s, a);
			return (
				(o[l.id] = l),
				e.defer(() => {
					l._processingStatus !== we.Stopped && l.start();
				}),
				l
			);
		};
	}
	function Mw(e, t, n, r, { assignment: o }) {
		if (!t.context)
			throw new Error(
				"Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.",
			);
		const i = {},
			s = {
				context: t.context,
				event: n.event,
				spawn: Rw(e, t, n.event, i),
				self: e.self,
				system: e.system,
			};
		let a = {};
		if (typeof o == "function") a = o(s, r);
		else
			for (const c of Object.keys(o)) {
				const d = o[c];
				a[c] = typeof d == "function" ? d(s, r) : d;
			}
		const l = Object.assign({}, t.context, a);
		return [
			_t(t, {
				context: l,
				children: Object.keys(i).length ? { ...t.children, ...i } : t.children,
			}),
			void 0,
			void 0,
		];
	}
	function z(e) {
		function t(n, r) {}
		return (t.type = "xstate.assign"), (t.assignment = e), (t.resolve = Mw), t;
	}
	const Oc = new WeakMap();
	function Jt(e, t, n) {
		let r = Oc.get(e);
		return (
			r ? t in r || (r[t] = n()) : ((r = { [t]: n() }), Oc.set(e, r)), r[t]
		);
	}
	const Aw = {},
		Fn = (e) =>
			typeof e == "string"
				? { type: e }
				: typeof e == "function"
					? "resolve" in e
						? { type: e.type }
						: { type: e.name }
					: e;
	class Fr {
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
				(this.id = this.config.id || [this.machine.id, ...this.path].join(oc)),
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
					? dc(
							this.config.states,
							(r, o) =>
								new Fr(r, { _parent: this, _key: o, _machine: this.machine }),
						)
					: Aw),
				this.type === "compound" && !this.config.initial)
			)
				throw new Error(
					`No initial state specified for compound state node "#${this.id}". Try adding { initial: "${Object.keys(this.states)[0]}" } to the state config.`,
				);
			(this.history =
				this.config.history === !0 ? "shallow" : this.config.history || !1),
				(this.entry = Ke(this.config.entry).slice()),
				(this.exit = Ke(this.config.exit).slice()),
				(this.meta = this.config.meta),
				(this.output =
					this.type === "final" || !this.parent ? this.config.output : void 0),
				(this.tags = Ke(t.tags).slice());
		}
		_initialize() {
			(this.transitions = ow(this)),
				this.config.always &&
					(this.always = Ut(this.config.always).map((t) => bt(this, ic, t))),
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
							actions: this.initial.actions.map(Fn),
							eventType: null,
							reenter: !1,
							toJSON: () => ({
								target: this.initial.target.map((t) => `#${t.id}`),
								source: `#${this.id}`,
								actions: this.initial.actions.map(Fn),
								eventType: null,
							}),
						}
					: void 0,
				history: this.history,
				states: dc(this.states, (t) => t.definition),
				on: this.on,
				transitions: [...this.transitions.values()]
					.flat()
					.map((t) => ({ ...t, actions: t.actions.map(Fn) })),
				entry: this.entry.map(Fn),
				exit: this.exit.map(Fn),
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
			return Jt(this, "invoke", () =>
				Ke(this.config.invoke).map((t, n) => {
					const { src: r, systemId: o } = t,
						i = t.id ?? mc(this.id, n),
						s = typeof r == "string" ? r : `xstate.invoke.${mc(this.id, n)}`;
					return {
						...t,
						src: s,
						id: i,
						systemId: o,
						toJSON() {
							const { onDone: a, onError: l, ...c } = t;
							return { ...c, type: "xstate.invoke", src: s, id: i };
						},
					};
				}),
			);
		}
		get on() {
			return Jt(this, "on", () =>
				[...this.transitions]
					.flatMap(([n, r]) => r.map((o) => [n, o]))
					.reduce((n, [r, o]) => ((n[r] = n[r] || []), n[r].push(o), n), {}),
			);
		}
		get after() {
			return Jt(this, "delayedTransitions", () => rw(this));
		}
		get initial() {
			return Jt(this, "initial", () => iw(this, this.config.initial));
		}
		next(t, n) {
			const r = n.type;
			let o;
			const i = Jt(this, `candidates-${r}`, () => nw(this, r));
			for (const s of i) {
				const { guard: a } = s,
					l = t.context;
				let c = !1;
				try {
					c = !a || Zt(a, l, n, t);
				} catch (d) {
					const u =
						typeof a == "string" ? a : typeof a == "object" ? a.type : void 0;
					throw new Error(`Unable to evaluate guard ${u ? `'${u}' ` : ""}in transition for event '${r}' in state node '${this.id}':
${d.message}`);
				}
				if (c) {
					o = s;
					break;
				}
			}
			return o ? [o] : void 0;
		}
		get events() {
			return Jt(this, "events", () => {
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
	const Pw = "#";
	class Ai {
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
				(this.root = new Fr(t, { _key: this.id, _machine: this })),
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
			return new Ai(this.config, {
				actions: { ...n, ...t.actions },
				guards: { ...r, ...t.guards },
				actors: { ...o, ...t.actors },
				delays: { ...i, ...t.delays },
			});
		}
		resolveState(t) {
			const n = ww(this.root, t.value),
				r = Or(jr(this.root, n));
			return Br(
				{
					_nodes: [...r],
					context: t.context || {},
					children: {},
					status: zi(r, this.root) ? "done" : t.status || "active",
					output: t.output,
					error: t.error,
					historyValue: t.historyValue,
				},
				this,
			);
		}
		transition(t, n, r) {
			return Mi(t, n, r, []).snapshot;
		}
		microstep(t, n, r) {
			return Mi(t, n, r, []).microstates;
		}
		getTransitionData(t, n) {
			return Ti(this.root, t.value, t, n) || [];
		}
		getPreInitialState(t, n, r) {
			const { context: o } = this.config,
				i = Br(
					{
						context: typeof o != "function" && o ? o : {},
						_nodes: [this.root],
						children: {},
						status: "active",
					},
					this,
				);
			return typeof o == "function"
				? Kt(
						i,
						n,
						t,
						[
							z(({ spawn: a, event: l, self: c }) =>
								o({ spawn: a, input: l.input, self: c }),
							),
						],
						r,
						void 0,
					)
				: i;
		}
		getInitialSnapshot(t, n) {
			const r = lc(n),
				o = [],
				i = this.getPreInitialState(t, r, o),
				s = Ei(
					[
						{
							target: [...xc(this.root)],
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
				{ snapshot: a } = Mi(s, r, t, o);
			return a;
		}
		start(t) {
			Object.values(t.children).forEach((n) => {
				n.getSnapshot().status === "active" && n.start();
			});
		}
		getStateNodeById(t) {
			const n = wi(t),
				r = n.slice(1),
				o = Lr(n[0]) ? n[0].slice(Pw.length) : n[0],
				i = this.idMap.get(o);
			if (!i)
				throw new Error(
					`Child state node '#${o}' does not exist on machine '${this.id}'`,
				);
			return Nr(i, r);
		}
		get definition() {
			return this.root.definition;
		}
		toJSON() {
			return this.definition;
		}
		getPersistedSnapshot(t, n) {
			return Iw(t, n);
		}
		restoreSnapshot(t, n) {
			const r = {},
				o = t.children;
			Object.keys(o).forEach((u) => {
				const p = o[u],
					f = p.snapshot,
					h = p.src,
					g = typeof h == "string" ? Si(this, h) : h;
				if (!g) return;
				const b = Ht(g, {
					id: u,
					parent: n.self,
					syncSnapshot: p.syncSnapshot,
					snapshot: f,
					src: h,
					systemId: p.systemId,
				});
				r[u] = b;
			});
			function i(u, p) {
				if (p instanceof Fr) return p;
				try {
					return u.machine.getStateNodeById(p.id);
				} catch {}
			}
			function s(u, p) {
				if (!p || typeof p != "object") return {};
				const f = {};
				for (const h in p) {
					const g = p[h];
					for (const b of g) {
						const v = i(u, b);
						v && (f[h] ?? (f[h] = []), f[h].push(v));
					}
				}
				return f;
			}
			const a = s(this.root, t.historyValue),
				l = Br(
					{
						...t,
						children: r,
						_nodes: Array.from(Or(jr(this.root, t.value))),
						historyValue: a,
					},
					this,
				),
				c = new Set();
			function d(u, p) {
				if (!c.has(u)) {
					c.add(u);
					for (const f in u) {
						const h = u[f];
						if (h && typeof h == "object") {
							if ("xstate$$type" in h && h.xstate$$type === xi) {
								u[f] = p[h.id];
								continue;
							}
							d(h, p);
						}
					}
				}
			}
			return d(l.context, r), l;
		}
	}
	function Ow(e, t, n, r, { event: o }) {
		const i = typeof o == "function" ? o(n, r) : o;
		return [t, { event: i }, void 0];
	}
	function Lw(e, { event: t }) {
		e.defer(() => e.emit(t));
	}
	function me(e) {
		function t(n, r) {}
		return (
			(t.type = "xstate.emit"),
			(t.event = e),
			(t.resolve = Ow),
			(t.execute = Lw),
			t
		);
	}
	let Pi = (function (e) {
		return (e.Parent = "#_parent"), (e.Internal = "#_internal"), e;
	})({});
	function Nw(e, t, n, r, { to: o, event: i, id: s, delay: a }, l) {
		var h;
		const c = t.machine.implementations.delays;
		if (typeof i == "string")
			throw new Error(
				`Only event objects may be used with sendTo; use sendTo({ type: "${i}" }) instead`,
			);
		const d = typeof i == "function" ? i(n, r) : i;
		let u;
		if (typeof a == "string") {
			const g = c && c[a];
			u = typeof g == "function" ? g(n, r) : g;
		} else u = typeof a == "function" ? a(n, r) : a;
		const p = typeof o == "function" ? o(n, r) : o;
		let f;
		if (typeof p == "string") {
			if (
				(p === Pi.Parent
					? (f = e.self._parent)
					: p === Pi.Internal
						? (f = e.self)
						: p.startsWith("#_")
							? (f = t.children[p.slice(2)])
							: (f =
									(h = l.deferredActorIds) != null && h.includes(p)
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
	function jw(e, t, n) {
		typeof n.to == "string" && (n.to = t.children[n.to]);
	}
	function Bw(e, t) {
		e.defer(() => {
			const { to: n, event: r, delay: o, id: i } = t;
			if (typeof o == "number") {
				e.system.scheduler.schedule(e.self, n, r, o, i);
				return;
			}
			e.system._relay(e.self, n, r.type === jb ? ac(e.self.id, r.data) : r);
		});
	}
	function Oi(e, t, n) {
		function r(o, i) {}
		return (
			(r.type = "xstate.sendTo"),
			(r.to = e),
			(r.event = t),
			(r.id = n == null ? void 0 : n.id),
			(r.delay = n == null ? void 0 : n.delay),
			(r.resolve = Nw),
			(r.retryResolve = jw),
			(r.execute = Bw),
			r
		);
	}
	function Lc(e, t) {
		return Oi(Pi.Parent, e, t);
	}
	function Dw(e, t, n, r, { collect: o }) {
		const i = [],
			s = function (l) {
				i.push(l);
			};
		return (
			(s.assign = (...a) => {
				i.push(z(...a));
			}),
			(s.cancel = (...a) => {
				i.push(yc(...a));
			}),
			(s.raise = (...a) => {
				i.push(Mc(...a));
			}),
			(s.sendTo = (...a) => {
				i.push(Oi(...a));
			}),
			(s.sendParent = (...a) => {
				i.push(Lc(...a));
			}),
			(s.spawnChild = (...a) => {
				i.push(vc(...a));
			}),
			(s.stopChild = (...a) => {
				i.push(st(...a));
			}),
			(s.emit = (...a) => {
				i.push(me(...a));
			}),
			o(
				{
					context: n.context,
					event: n.event,
					enqueue: s,
					check: (a) => Zt(a, t.context, n.event, t),
					self: e.self,
					system: e.system,
				},
				r,
			),
			[t, void 0, i]
		);
	}
	function Fw(e) {
		function t(n, r) {}
		return (
			(t.type = "xstate.enqueueActions"), (t.collect = e), (t.resolve = Dw), t
		);
	}
	function kt(e, t) {
		const n = Ke(t);
		if (!n.includes(e.type)) {
			const r =
				n.length === 1 ? `type "${n[0]}"` : `one of types "${n.join('", "')}"`;
			throw new Error(`Expected event ${JSON.stringify(e)} to have ${r}`);
		}
	}
	function Uw(e, t) {
		return new Ai(e, t);
	}
	function Un({ schemas: e, actors: t, actions: n, guards: r, delays: o }) {
		return {
			createStateConfig: (i) => i,
			createMachine: (i) =>
				Uw(
					{ ...i, schemas: e },
					{ actors: t, actions: n, guards: r, delays: o },
				),
		};
	}
	const Gt = { device: "desktop", traits: {} };
	function Nc(e) {
		return e === "or" ? "or" : "and";
	}
	function Yt(e) {
		const t = e == null ? void 0 : e.trim().toLowerCase();
		return t || null;
	}
	function Ur(e) {
		return (
			(e == null
				? void 0
				: e.map((t) => t.trim().toLowerCase()).filter(Boolean)) ?? []
		);
	}
	function Hw(e, t) {
		return e[t] ?? !0;
	}
	function jc(e, t) {
		return Hw(e, t);
	}
	function Zw(e, t) {
		const n = Ur(e.languages),
			r = Ur(e.locales),
			o = Yt(t.language),
			i = Yt(t.locale),
			s = n.length === 0 || (o != null && n.includes(o)),
			a = r.length === 0 || (i != null && r.includes(i));
		return s && a;
	}
	function Vw(e) {
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
	function Ww(e) {
		return Array.isArray(e.traitConditions) ? e.traitConditions.filter(Vw) : [];
	}
	function Hr(e) {
		return typeof e == "string" && e.trim().length > 0;
	}
	function Li(e) {
		if (!Hr(e)) return null;
		const t = Number(e);
		return Number.isFinite(t) ? t : null;
	}
	function qw(e, t) {
		const n = Li(t);
		if (n == null) return !1;
		if (e.operator === "in")
			return e.values.some((o) => {
				const i = Li(o);
				return i != null && n === i;
			});
		const r = Li(e.values[0]);
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
	function Kw(e, t) {
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
	function Jw(e, t) {
		const n = t[e.traitSlug];
		return e.operator === "exists"
			? Hr(n)
			: e.operator === "notExists"
				? !Hr(n)
				: Hr(n)
					? e.valueType === "number"
						? qw(e, n)
						: Kw(e, n)
					: !1;
	}
	function Bc(e, t) {
		return Ww(e).every((r) => Jw(r, t));
	}
	function Dc(e, t) {
		const n = [],
			r = Ur(e.languages),
			o = Ur(e.locales);
		return (
			jc(e, t.device) || n.push("blocked_by_device"),
			((r.length > 0 && !Yt(t.language)) ||
				(r.length > 0 && !r.includes(Yt(t.language) ?? ""))) &&
				n.push("blocked_by_language"),
			((o.length > 0 && !Yt(t.locale)) ||
				(o.length > 0 && !o.includes(Yt(t.locale) ?? ""))) &&
				n.push("blocked_by_locale"),
			Bc(e, t.traits) || n.push("blocked_by_trait"),
			n
		);
	}
	function Fc(e) {
		return [...new Set(e)];
	}
	function Xt(e, t) {
		return jc(e, t.device) && Zw(e, t) && Bc(e, t.traits);
	}
	function Ni(e, t = Gt, n = "and") {
		if (!e || e.length === 0) return !0;
		const r = { ...Gt, ...t, traits: t.traits ?? Gt.traits },
			o = e.filter((s) => s.type !== "Exclude");
		return e.filter((s) => s.type === "Exclude").some((s) => Xt(s, r))
			? !1
			: o.length === 0
				? !0
				: Nc(n) === "or"
					? o.some((s) => Xt(s, r))
					: o.every((s) => Xt(s, r));
	}
	function Uc(e, t = Gt, n = "and") {
		if (!e || e.length === 0) return [];
		const r = { ...Gt, ...t, traits: t.traits ?? Gt.traits },
			o = e.filter((s) => s.type !== "Exclude");
		return e.filter((s) => s.type === "Exclude").some((s) => Xt(s, r))
			? ["blocked_by_audience_rule"]
			: o.length === 0
				? []
				: Nc(n) === "or"
					? o.some((s) => Xt(s, r))
						? []
						: Fc(o.flatMap((s) => Dc(s, r)))
					: Fc(o.flatMap((s) => Dc(s, r)));
	}
	function Hc(e, t) {
		return e === t;
	}
	function Gw(e) {
		return e === "or" ? "or" : "and";
	}
	function ji(e, t, n) {
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
			l =
				e.multiSelectItems.length === 0 ||
				e.multiSelectItems.some((u) => t.multiSelect.some((p) => n(u.id, p))),
			c =
				e.likertSourceCards.length === 0 ||
				e.likertSourceCards.some((u) =>
					u.selectedItemIds.some((p) =>
						t.likertAnswers.some((f) => n(u.id, f.cardId) && n(p, f.itemId)),
					),
				),
			d = Xt(e, t);
		return r && o && i && s && a && l && c && d;
	}
	function Zc(e, t, n = Hc, r = "and") {
		if (e.length === 0) return !0;
		const o = typeof n == "function" ? n : Hc,
			i = Gw(typeof n == "string" ? n : r),
			s = e.filter((c) => c.type === "Include");
		return e.filter((c) => c.type === "Exclude").some((c) => ji(c, t, o))
			? !1
			: s.length === 0
				? !0
				: i === "or"
					? s.some((c) => ji(c, t, o))
					: s.every((c) => ji(c, t, o));
	}
	const Vc = {
		en: {
			minLength: (e) => `At least ${e} character${e > 1 ? "s" : ""}`,
			inputLengthMaximum: (e) => `Up to ${e} character${e > 1 ? "s" : ""}`,
			inputLengthRange: (e, t) => `At least ${e}, max ${t} characters`,
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
			inputLengthMaximum: (e) => `Máximo ${e} caractere${e > 1 ? "s" : ""}`,
			inputLengthRange: (e, t) => `Mínimo ${e}, máximo ${t} caracteres`,
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
			inputLengthMaximum: (e) => `Höchstens ${e} Zeichen`,
			inputLengthRange: (e, t) => `Mindestens ${e}, höchstens ${t} Zeichen`,
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
			inputLengthMaximum: (e) => `Maks ${e} tegn`,
			inputLengthRange: (e, t) => `Minst ${e}, maks ${t} tegn`,
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
		nn: {
			minLength: (e) => `Minst ${e} teikn`,
			inputLengthMaximum: (e) => `Maks ${e} teikn`,
			inputLengthRange: (e, t) => `Minst ${e}, maks ${t} teikn`,
			maxLength: (e) => `Teksten er lengre enn grensa på ${e} teikn`,
			selectionMin: (e) => `Vel minst ${e} alternativ`,
			selectionMax: (e) => `Vel maksimalt ${e} alternativ`,
			selectionRange: (e, t) => `Vel minst ${e} alternativ, maks ${t}`,
			selectionBetween: (e, t) => `Vel mellom ${e} og ${t} alternativ`,
			selectionAtLeast: (e) => `Vel minst ${e} alternativ`,
			selectionUpTo: (e) => `Vel opptil ${e} alternativ`,
			optionRequired: "Vel eit alternativ",
			invalidEmail: "Ugyldig e-postadresse",
			consentRequired: "Samtykk til at vi lagrar informasjonen din",
			contactInfoRequired: "Oppgi kontaktinformasjonen din",
			emailRequired: "Oppgi e-postadressa di",
		},
		sv: {
			minLength: (e) => `Minst ${e} tecken`,
			inputLengthMaximum: (e) => `Högst ${e} tecken`,
			inputLengthRange: (e, t) => `Minst ${e}, högst ${t} tecken`,
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
	function Qt(e) {
		return Vc[e || "no"] || Vc.no;
	}
	function Wc(e) {
		const {
			dirty: t,
			minValid: n,
			maxValid: r,
			min: o,
			max: i,
			language: s,
		} = e;
		if (!t) return null;
		const a = Qt(s);
		return (!n || !r) && o && i
			? a.selectionRange(o, i)
			: !n && o
				? a.selectionMin(o)
				: !r && i
					? a.selectionMax(i)
					: null;
	}
	function qc(e) {
		const { min: t = 0, max: n, language: r } = e,
			o = t > 0,
			i = typeof n == "number" && n > 0;
		if (!(o || i)) return null;
		const s = Qt(r);
		return o && i
			? s.inputLengthRange(t, n)
			: o
				? s.minLength(t)
				: s.inputLengthMaximum(n ?? 0);
	}
	function Kc(e) {
		return Qt(e.language).selectionMax(e.max);
	}
	function Jc(e) {
		const { min: t = 0, max: n, totalOptions: r, language: o } = e,
			i = t > 0,
			s = n !== void 0 && n < r;
		if (!(i || s)) return null;
		const a = Qt(o);
		return i && s
			? a.selectionBetween(t, n)
			: i
				? a.selectionAtLeast(t)
				: a.selectionUpTo(n ?? r);
	}
	function Gc(e, t) {
		var r;
		if (!t) return;
		const n =
			(r = e == null ? void 0 : e.find((o) => o.code === t)) == null
				? void 0
				: r["@errMessage"];
		return n != null && n.trim() ? n : void 0;
	}
	function Yw(e, t) {
		const n = e.validation;
		return (
			Gc(e.tr, t) ??
			((n == null ? void 0 : n.type) === "OrgValidationRegex"
				? Gc(n.tr, t)
				: void 0) ??
			e.errMessage ??
			(n == null ? void 0 : n.errMessage) ??
			"Pattern validation failed"
		);
	}
	function Yc(e) {
		const { content: t, card: n, hasBeenTouched: r, language: o } = e,
			{ minLength: i = 0, maxLength: s, validations: a } = n,
			l = Qt(o);
		for (const c of a) {
			const d = c.validation;
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
					errorMessage: Yw(c, o),
				};
		}
		if (i > 0 && t.length < i)
			return {
				status: "under-minimum",
				valid: !1,
				color: r ? "error" : "warning",
				shouldAnnounce: !1,
				errorMessage: l.minLength(i),
			};
		if (s && s > 10) {
			if (t.length > s)
				return {
					status: "over-limit",
					valid: !1,
					color: "error",
					shouldAnnounce: !0,
					errorMessage: l.maxLength(s),
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
	function Zr(e) {
		const { selectedCount: t, card: n, hasBeenSubmitted: r, language: o } = e,
			{ min: i = 0, max: s } = n;
		return s && t > s
			? {
					status: "over-max",
					valid: !1,
					color: "error",
					shouldAnnounce: !0,
					errorMessage:
						Wc({
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
							Wc({
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
	function Vr(e) {
		const {
			email: t,
			name: n,
			phone: r,
			consented: o,
			consentEnable: i,
			isRequired: s,
			hasBeenSubmitted: a,
			language: l,
		} = e;
		if (!a)
			return {
				status: "valid",
				valid: !0,
				color: void 0,
				shouldAnnounce: !1,
				errorMessage: null,
			};
		const c = Qt(l),
			d = t.value || n.value || r.value;
		return t.value && !t.valid
			? {
					status: "email-invalid",
					valid: !1,
					color: "error",
					shouldAnnounce: !1,
					errorMessage: c.invalidEmail,
				}
			: i && !o && d
				? {
						status: "consent-required",
						valid: !1,
						color: "error",
						shouldAnnounce: !1,
						errorMessage: c.consentRequired,
					}
				: i && o && !t.value
					? {
							status: "email-required",
							valid: !1,
							color: "error",
							shouldAnnounce: !1,
							errorMessage: c.emailRequired,
						}
					: s && !t.value
						? {
								status: "email-required",
								valid: !1,
								color: "error",
								shouldAnnounce: !1,
								errorMessage: c.emailRequired,
							}
						: s && i && !o
							? {
									status: "consent-required",
									valid: !1,
									color: "error",
									shouldAnnounce: !1,
									errorMessage: c.consentRequired,
								}
							: {
									status: "valid",
									valid: !0,
									color: void 0,
									shouldAnnounce: !1,
									errorMessage: null,
								};
	}
	const Xc = { nb: "no" };
	function Qc(e) {
		return e.trim().toLowerCase().split(/[-_]/)[0] ?? "";
	}
	function Xw(e, t) {
		if (!e) return null;
		const n = Qc(e),
			r = t.find((i) => i === n);
		if (r) return r;
		const o = Xc[n] ?? n;
		return t.find((i) => (Xc[i] ?? i) === o) ?? null;
	}
	function en(e) {
		if (!(typeof e == "object" && e !== null && "name" in e)) return !1;
		const t = e.name;
		return typeof t == "string" || t === null;
	}
	function eu(e, t) {
		return e == null ? void 0 : e.find((n) => n.code === t);
	}
	function j(e, t, n, r) {
		const o = eu(t, n),
			i = o == null ? void 0 : o[r];
		return i == null || i === "" ? e : i;
	}
	function ct(e, t, n, r, o, i) {
		const s = eu(t, n),
			a = s == null ? void 0 : s[r],
			l = r.slice(1);
		return a != null && a !== ""
			? a
			: i && (e == null || e === (o == null ? void 0 : o[l]))
				? i[l]
				: e;
	}
	function Qw(e, t) {
		var o, i;
		if (((o = e.language) == null ? void 0 : o.code) === t) return e;
		if (e.generalType === "App" || e.renderType === "App")
			return {
				...e,
				textNext: j(e.textNext, e.tr, t, "@textNext"),
				textPrev: j(e.textPrev, e.tr, t, "@textPrev"),
				textClose: j(e.textClose, e.tr, t, "@textClose"),
				textHide: j(e.textHide, e.tr, t, "@textHide"),
				textMinimized: j(e.textMinimized, e.tr, t, "@textMinimized"),
				textReplyLater: j(e.textReplyLater, e.tr, t, "@textReplyLater"),
			};
		const n = (i = e.language) != null && i.code ? Ir[e.language.code] : void 0,
			r = Ir[t];
		return {
			...e,
			textNext: ct(e.textNext, e.tr, t, "@textNext", n, r),
			textPrev: ct(e.textPrev, e.tr, t, "@textPrev", n, r),
			textClose: ct(e.textClose, e.tr, t, "@textClose", n, r),
			textHide: ct(e.textHide, e.tr, t, "@textHide", n, r),
			textMinimized: ct(e.textMinimized, e.tr, t, "@textMinimized", n, r),
			textReplyLater: ct(e.textReplyLater, e.tr, t, "@textReplyLater", n, r),
		};
	}
	function Fe(e, t) {
		const n = e.tr;
		return {
			...e,
			name: j(e.name, n, t, "@name"),
			body: j(e.body, n, t, "@body"),
			bodyHtml: j(e.bodyHtml, n, t, "@bodyHtml"),
			bodyJson: j(e.bodyJson, n, t, "@bodyJson"),
			textNext: j(e.textNext, n, t, "@textNext"),
			textPrev: j(e.textPrev, n, t, "@textPrev"),
			textClose: j(e.textClose, n, t, "@textClose"),
			textHide: j(e.textHide, n, t, "@textHide"),
			textMinimized: j(e.textMinimized, n, t, "@textMinimized"),
			textReplyLater: j(e.textReplyLater, n, t, "@textReplyLater"),
		};
	}
	function e0(e, t) {
		const n = Fe(e, t),
			r = e.tr;
		return {
			...n,
			label: j(e.label, r, t, "@label"),
			placeholder: j(e.placeholder, r, t, "@placeholder"),
		};
	}
	function t0(e, t) {
		const n = Fe(e, t),
			r = e.tr;
		return {
			...n,
			positive: j(e.positive, r, t, "@positive"),
			negative: j(e.negative, r, t, "@negative"),
		};
	}
	function n0(e, t) {
		const n = Fe(e, t),
			r = e.tr;
		return {
			...n,
			positive: j(e.positive, r, t, "@positive"),
			negative: j(e.negative, r, t, "@negative"),
		};
	}
	function r0(e, t) {
		const n = Fe(e, t),
			r = e.tr;
		return {
			...n,
			email_label: j(e.email_label, r, t, "@email_label"),
			email_placeholder: j(e.email_placeholder, r, t, "@email_placeholder"),
			phone_label: j(e.phone_label, r, t, "@phone_label"),
			phone_placeholder: j(e.phone_placeholder, r, t, "@phone_placeholder"),
			nameLabel: j(e.nameLabel, r, t, "@nameLabel"),
			namePlaceholder: j(e.namePlaceholder, r, t, "@namePlaceholder"),
			consentTermsUrl: j(e.consentTermsUrl, r, t, "@consentTermsUrl"),
			consentTermsTitle: j(e.consentTermsTitle, r, t, "@consentTermsTitle"),
			consentTermsText: j(e.consentTermsText, r, t, "@consentTermsText"),
			consentTermsLabel: j(e.consentTermsLabel, r, t, "@consentTermsLabel"),
		};
	}
	function o0(e, t) {
		return {
			...Fe(e, t),
			selectItems: e.selectItems.map((r) => ({
				...r,
				label: j(r.label, r.tr, t, "@label"),
			})),
		};
	}
	function i0(e, t) {
		return {
			...Fe(e, t),
			selectItems: e.selectItems.map((r) => ({
				...r,
				label: j(r.label, r.tr, t, "@label"),
			})),
		};
	}
	function s0(e, t) {
		var i;
		const n = Fe(e, t),
			r =
				((i = e.LikertCard) == null ? void 0 : i.likertScale) ?? e.likertScale;
		if (!r) return n;
		const o = {
			...r,
			likertItems: r.likertItems.map((s) => ({
				...s,
				label: j(s.label, s.tr, t, "@label"),
			})),
		};
		return {
			...n,
			likertScale: o,
			...(e.LikertCard
				? { LikertCard: { ...e.LikertCard, likertScale: o } }
				: {}),
		};
	}
	function a0(e, t, n) {
		const r = Fe(e, t);
		return e.taskItems
			? {
					...r,
					taskItems: e.taskItems.map((o) => {
						const i = o.task,
							s = en(i) ? i.name : "",
							a = en(i) ? j(i.name, i.tr, t, "@name") : s,
							l = en(i) ? { ...i, name: a } : i,
							c = j(o.label, "tr" in o ? o.tr : void 0, t, "@label");
						return { ...o, label: c || a || o.label || s, task: l };
					}),
				}
			: r;
	}
	function l0(e, t, n) {
		return {
			...Fe(e, t),
			segment: en(e.segment)
				? { ...e.segment, name: j(e.segment.name, e.segment.tr, t, "@name") }
				: e.segment,
			items: e.items.map((o) => {
				const i = o.value,
					s = en(i) ? { ...i, name: j(i.name, i.tr, t, "@name") } : i,
					a = j(o.label, "tr" in o ? o.tr : void 0, t, "@label"),
					l = en(s) ? s.name : void 0;
				return { ...o, label: a || l || o.label, value: s };
			}),
		};
	}
	function tu(e, t, n) {
		switch (e.type) {
			case "InputCard":
				return e0(e, t);
			case "RecruitmentCard":
				return r0(e, t);
			case "CompletionCard":
				return t0(e, t);
			case "FindabilityCard":
				return n0(e, t);
			case "SingleSelectCard":
				return o0(e, t);
			case "MultiSelectCard":
				return i0(e, t);
			case "LikertCard":
				return s0(e, t);
			case "TopTaskCard":
				return a0(e, t);
			case "SegmentCard":
				return l0(e, t);
			default:
				return Fe(e, t);
		}
	}
	function c0(e, t, n) {
		var s, a, l;
		const r = Qw(e, t),
			o = (s = e.language) != null && s.code ? Ir[e.language.code] : void 0,
			i = Ir[t];
		return {
			...r,
			cards:
				((a = r.cards) == null ? void 0 : a.map((c) => tu(c, t))) ?? r.cards,
			pages:
				(l = r.pages) == null
					? void 0
					: l.map((c) => {
							var d;
							return {
								...c,
								title: j(c.title, c.tr, t, "@title"),
								textNext: ct(c.textNext, c.tr, t, "@textNext", o, i),
								textPrev: ct(c.textPrev, c.tr, t, "@textPrev", o, i),
								cards:
									((d = c.cards) == null ? void 0 : d.map((u) => tu(u, t))) ??
									c.cards,
							};
						}),
		};
	}
	function nu(e) {
		const { selectedValues: t, value: n, max: r } = e;
		return t.includes(n)
			? { values: t.filter((o) => o !== n), changed: !0, limitReached: !1 }
			: r && t.length >= r
				? { values: [...t], changed: !1, limitReached: !0 }
				: { values: [...t, n], changed: !0, limitReached: !1 };
	}
	const u0 = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
	function Wr(e, t) {
		const r = t
				.substring(20)
				.split("")
				.reduce((a, l) => {
					const c = u0.indexOf(l);
					return a * (c || 1);
				}, 1),
			o = e.filter((a) => a.orderLocked !== !0),
			i = d0([...o], r),
			s = [];
		for (let a = 0; a < e.length; a++)
			if (e[a].orderLocked) s.push(e[a]);
			else {
				const l = i.shift();
				l && s.push(l);
			}
		return s;
	}
	function d0(e, t) {
		let n = e.length,
			r,
			o;
		for (; n; )
			(o = Math.floor(p0(t) * n--)), (r = e[n]), (e[n] = e[o]), (e[o] = r), t++;
		return e;
	}
	function p0(e) {
		const t = Math.sin(e++) * 1e4;
		return t - Math.floor(t);
	}
	function f0(e) {
		if (e.length >= 255) throw new TypeError("Alphabet too long");
		const t = new Uint8Array(256);
		for (let c = 0; c < t.length; c++) t[c] = 255;
		for (let c = 0; c < e.length; c++) {
			const d = e.charAt(c),
				u = d.charCodeAt(0);
			if (t[u] !== 255) throw new TypeError(d + " is ambiguous");
			t[u] = c;
		}
		const n = e.length,
			r = e.charAt(0),
			o = Math.log(n) / Math.log(256),
			i = Math.log(256) / Math.log(n);
		function s(c) {
			if (
				(c instanceof Uint8Array ||
					(ArrayBuffer.isView(c)
						? (c = new Uint8Array(c.buffer, c.byteOffset, c.byteLength))
						: Array.isArray(c) && (c = Uint8Array.from(c))),
				!(c instanceof Uint8Array))
			)
				throw new TypeError("Expected Uint8Array");
			if (c.length === 0) return "";
			let d = 0,
				u = 0,
				p = 0;
			const f = c.length;
			for (; p !== f && c[p] === 0; ) p++, d++;
			const h = ((f - p) * i + 1) >>> 0,
				g = new Uint8Array(h);
			for (; p !== f; ) {
				let _ = c[p],
					x = 0;
				for (let S = h - 1; (_ !== 0 || x < u) && S !== -1; S--, x++)
					(_ += (256 * g[S]) >>> 0),
						(g[S] = (_ % n) >>> 0),
						(_ = (_ / n) >>> 0);
				if (_ !== 0) throw new Error("Non-zero carry");
				(u = x), p++;
			}
			let b = h - u;
			for (; b !== h && g[b] === 0; ) b++;
			let v = r.repeat(d);
			for (; b < h; ++b) v += e.charAt(g[b]);
			return v;
		}
		function a(c) {
			if (typeof c != "string") throw new TypeError("Expected String");
			if (c.length === 0) return new Uint8Array();
			let d = 0,
				u = 0,
				p = 0;
			for (; c[d] === r; ) u++, d++;
			const f = ((c.length - d) * o + 1) >>> 0,
				h = new Uint8Array(f);
			for (; d < c.length; ) {
				const _ = c.charCodeAt(d);
				if (_ > 255) return;
				let x = t[_];
				if (x === 255) return;
				let S = 0;
				for (let A = f - 1; (x !== 0 || S < p) && A !== -1; A--, S++)
					(x += (n * h[A]) >>> 0),
						(h[A] = (x % 256) >>> 0),
						(x = (x / 256) >>> 0);
				if (x !== 0) throw new Error("Non-zero carry");
				(p = S), d++;
			}
			let g = f - p;
			for (; g !== f && h[g] === 0; ) g++;
			const b = new Uint8Array(u + (f - g));
			let v = u;
			for (; g !== f; ) b[v++] = h[g++];
			return b;
		}
		function l(c) {
			const d = a(c);
			if (d) return d;
			throw new Error("Non-base" + n + " character");
		}
		return { encode: s, decodeUnsafe: a, decode: l };
	}
	const h0 = f0(
		"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
	);
	function te(e) {
		const t = e.replace(/-/g, "").match(/.{2}/g);
		if (!t) return e;
		const n = t.map((o) => Number.parseInt(o, 16)),
			r = new Uint8Array(n);
		return h0.encode(r);
	}
	function ru(e, t) {
		const n = t.length === 36 ? te(t) : t;
		return (e.length === 36 ? te(e) : e) === n;
	}
	async function tn(e, t = {}) {
		const n = (t == null ? void 0 : t.apiHost) ?? "https://ingest.skyra.no";
		return fetch(`${n}/response`, {
			method: "POST",
			body: JSON.stringify(e),
			headers: { "Content-Type": "application/json" },
		});
	}
	function m0(e, t = {}) {
		const n = (t == null ? void 0 : t.apiHost) ?? "https://ingest.skyra.no";
		fetch(`${n}/diagnostics`, {
			method: "POST",
			body: JSON.stringify(e),
			headers: { "Content-Type": "application/json" },
			keepalive: !0,
		}).catch(() => {});
	}
	function g0(e, t) {
		const n = Xw(e, t);
		return n || (e && Qc(e) === "nn" && t.includes("no") ? "no" : null);
	}
	function qr(e) {
		const t = [
			e.explicitLanguage,
			e.savedLanguage,
			e.htmlLang,
			e.browserLanguage,
		];
		for (const n of t) {
			const r = g0(n, e.enabledLanguages);
			if (r) return r;
		}
		return e.surveyDefault;
	}
	function ou(e) {
		var r, o;
		const t = (r = e.language) == null ? void 0 : r.code,
			n = ((o = e.languages) == null ? void 0 : o.map((i) => i.code)) || [];
		return t ? [t, ...n] : n;
	}
	function iu(e) {
		const t = [];
		return (
			e.language && t.push(e.language), e.languages && t.push(...e.languages), t
		);
	}
	function nn() {
		return typeof window > "u"
			? "desktop"
			: window.innerWidth < 768
				? "mobile"
				: window.innerWidth < 1024
					? "tablet"
					: "desktop";
	}
	function Kr() {
		return typeof navigator < "u" ? navigator.language : void 0;
	}
	function Hn(e) {
		return {
			device: nn(),
			traits: e.traits ?? {},
			language: e.language,
			locale: e.locale ?? Kr(),
		};
	}
	const y0 = 8e3,
		v0 = 3,
		b0 = k({
			success: T(!0),
			degraded: E().optional(),
			recruitmentAccepted: E().optional(),
		});
	class St extends Error {
		constructor(t, n) {
			super(t), (this.code = t), (this.retryable = n);
		}
	}
	async function w0(e, t) {
		if (!Tr.safeParse(JSON.parse(e.body)).success)
			throw new St("invalid_answer", !1);
		const r = new AbortController(),
			o = () => r.abort();
		t.throwIfAborted(), t.addEventListener("abort", o, { once: !0 });
		const i = setTimeout(o, y0);
		try {
			const s = await fetch(`${e.apiHost}/response`, {
				method: "POST",
				body: e.body,
				headers: { "Content-Type": "application/json" },
				signal: r.signal,
			});
			if (!s.ok)
				throw new St(
					"answer_rejected",
					s.status === 408 || s.status === 429 || s.status >= 500,
				);
			const a = await s.json().catch(() => null);
			if (!b0.safeParse(a).success) throw new St("invalid_acceptance", !1);
			t.throwIfAborted();
		} catch (s) {
			throw t.aborted || s instanceof St
				? s
				: new St(r.signal.aborted ? "save_timeout" : "network_error", !0);
		} finally {
			clearTimeout(i), t.removeEventListener("abort", o);
		}
	}
	function su(e, t) {
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
			likertAnswers: Object.entries((e == null ? void 0 : e.scales) ?? {}).map(
				([n, r]) => ({ cardId: n, itemId: r }),
			),
		};
	}
	function Zn(e, t, n) {
		const r = e.findIndex((s) => s.order === t.currentCard),
			o = e.slice(r + 1),
			i = su(t.variables, n);
		for (const s of o) if (Zc(s.rules, i, ru, s.ruleMode ?? "and")) return s;
		return null;
	}
	function _0(e, t, n) {
		const r = su(t.variables, n);
		for (const o of e) if (Zc(o.rules, r, ru, o.ruleMode ?? "and")) return o;
		return null;
	}
	function au(e, t, n, r, o) {
		const i = e.find((s) => s.order === t.currentCard);
		if (!i) return t;
		if (i.type === "TopTaskCard") t.variables.task = te(o);
		else if (i.type === "SegmentCard" && r) {
			const s = te(r),
				a = te(o);
			t.variables.segments = { ...t.variables.segments, [s]: a };
		} else if (i.type === "CompletionCard") t.variables.completion = o;
		else if (i.type === "LikertCard" && "likertItems" in i.likertScale) {
			if (i.likertScale.likertItems.find((a) => a.id === o)) {
				const a = te(i.id),
					l = te(o);
				t.variables.scales = { ...t.variables.scales, [a]: l };
			}
		} else if (i.type === "MultiSelectCard") {
			const s = te(i.id),
				a = o.map(te);
			t.variables.multiSelect = { ...t.variables.multiSelect, [s]: a };
		} else if (i.type === "InputCard") t.values[i.id] = o;
		else if (i.type === "RecruitmentCard") {
			const s = o;
			(t.variables.recruited = s !== void 0),
				s !== void 0 && (t.values[i.id] = s);
		} else if (i.type === "SingleSelectCard") {
			const s = te(i.id),
				a = te(o);
			t.variables.singleSelect = { ...t.variables.singleSelect, [s]: a };
		}
		return t;
	}
	function k0(e, t, n) {
		const r = Zn(e, t, n);
		return t.currentCard !== void 0 && r
			? {
					...t,
					history: [...t.history, t.currentCard],
					currentCard: (r == null ? void 0 : r.order) ?? t.currentCard,
				}
			: t;
	}
	function S0(e) {
		if (e.history.length === 0) return e;
		const [t, ...n] = [...e.history].reverse();
		return { ...e, currentCard: t, history: n.reverse() };
	}
	function x0(e, t, n) {
		return !!Zn(e, t, n);
	}
	function C0(e, t, n) {
		const r = Zn(e, t, n);
		if (!r) return !1;
		const o = e.find((i) => i.order === r.order);
		return (o == null ? void 0 : o.size) === "Minimal";
	}
	function z0(e, t, n) {
		return !Zn(e, t, n);
	}
	function T0(e, t) {
		const n = t.currentCard,
			r = e.find((o) => o.order === n);
		return (r == null ? void 0 : r.type) === "MessageCard";
	}
	const I0 = k({ id: m(), code: m(), name: m() }),
		$0 = k({
			code: m().nullish(),
			name: m().nullish(),
			"@textNext": m().nullish(),
			"@textPrev": m().nullish(),
			"@textClose": m().nullish(),
			"@textHide": m().nullish(),
			"@textMinimized": m().nullish(),
			"@textReplyLater": m().nullish(),
		}),
		Jr = xb.extend({
			cards: P(Al),
			confineToDomain: E().optional().default(!1),
			rendererVariant: L(["classic", "beta"]).optional(),
			languages: P(I0).optional().nullable(),
			tr: P($0).optional().nullable(),
		});
	Jr.array(), m().brand("SessionId");
	const E0 = m().brand("VisitorId");
	L(["open", "minimized", "closed", "loading", "hidden"]),
		L(["init", "capture", "completed", "closed", "blocked", "noconsent"]);
	const R0 = k({
			task: m().nullable().default(null),
			segments: se(m(), m()).nullable().default({}),
			completion: E().nullable().default(null),
			scales: se(m(), m()).nullable().default({}),
			traits: se(m(), m()).nullable().default({}),
			multiSelect: se(m(), P(m())).nullable().default({}),
			singleSelect: se(m(), m()).nullable().default({}),
			recruited: E().nullable().default(null),
		}),
		Vn = k({
			values: se(
				m(),
				m()
					.or(E())
					.or(se(m(), m().or(E()))),
			).default({}),
			variables: R0.partial().default({}),
			history: P(U().int()).default([]),
			currentCard: U().min(0).optional(),
			path: m().optional(),
			state: m().optional(),
			lastSync: U().optional(),
		});
	k({ i: E0, c: U() });
	function Je(...e) {
		var t;
		(t = window.skyra) != null && t._debugEnabled && console.log(...e);
	}
	const M0 = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
	function Gr(e, t) {
		const r = t
				.substring(20)
				.split("")
				.reduce((a, l) => {
					const c = M0.indexOf(l);
					return a * c;
				}, 1),
			o = e.filter((a) => a.orderLocked !== !0),
			i = A0(o, r);
		let s = [];
		for (let a = 0; a < e.length; a++)
			if (e[a].orderLocked) s.push(e[a]);
			else {
				const l = i.shift();
				l && s.push(l);
			}
		return s;
	}
	function A0(e, t) {
		let n = e.length,
			r,
			o;
		for (; n; )
			(o = Math.floor(P0(t) * n--)), (r = e[n]), (e[n] = e[o]), (e[o] = r), t++;
		return e;
	}
	function P0(e) {
		let t = Math.sin(e++) * 1e4;
		return t - Math.floor(t);
	}
	function lu(e, t, { firstCard: n, finalCard: r }) {
		var s;
		const o = (s = t.textClose) == null ? void 0 : s.trim(),
			i = e.renderType !== "Inline" && e.surveyType !== "Findability";
		return n && !r && i && o ? o : null;
	}
	function Me(e, t, n = {}) {
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
	const O0 = /^(Trigger|Path)/;
	k({
		id: C().optional(),
		ruleType: L(["Show", "Hide", "FollowOnly"]),
		desktop: E().default(!1),
		mobile: E().default(!1),
		tablet: E().default(!1),
		path: m().nullable().optional(),
		follow: E().default(!1),
		applyBelow: E().default(!1),
		isRegex: E().default(!1).optional(),
		domain: k({ id: C(), name: m() }).optional().nullable(),
	});
	function Yr(e) {
		return [e.showRules, e.followRules, e.hideRules].some(
			(t) => t && t.length > 0,
		);
	}
	function L0(e, t, n, r) {
		const o = new URL(t),
			i = o.hostname,
			s = o.pathname,
			a = e.domain ? li(e.domain.name, i) : !0,
			l =
				e.path &&
				gi(decodeURI(s), decodeURI(e.path), e.applyBelow, e.isRegex ?? !1),
			c = n && e.follow;
		return [e[r], a, l || c].every(Boolean);
	}
	function N0(e, t, n, r) {
		return e.follow && n ? !1 : ql(e, t) && e[r];
	}
	function Xr({
		urlString: e,
		surveyStarted: t,
		showRules: n,
		followRules: r = [],
		hideRules: o,
		device: i,
		isInline: s,
	}) {
		const a = n.some((u) => L0(u, e, t, i)),
			l = r.some((u) => {
				const p = new URL(e),
					f = p.hostname,
					h = p.pathname,
					g = u.domain ? li(u.domain.name, f) : !0,
					b =
						u.path &&
						gi(decodeURI(h), decodeURI(u.path), u.applyBelow, u.isRegex ?? !1);
				return u[i] && g && b;
			});
		return o.some((u) => N0(u, e, t, i))
			? !1
			: a
				? !0
				: l
					? t
					: !!(n.length === 0 && r.length === 0 && o.length === 0 && s);
	}
	function Qr(e, t, n, r) {
		if (n) return new RegExp(t).test(e);
		const o = t.at(-1) === "/" && t.length > 1 ? t.slice(0, -1) : t,
			i = e.at(-1) === "/" && e.length > 1 ? e.slice(0, -1) : e;
		return r ? i === o : i.startsWith(o);
	}
	function Bi(e, t, n) {
		if (e.domains.length > 0 && !e.domains.some((r) => n.hostname === r.name))
			return !1;
		if (t === "Trigger") {
			if (["PathBeginsWith", "TriggerPathBeginsWith"].includes(e.type))
				return Qr(n.pathname, e.value, e.isRegexp, !1);
			if (["PathIs", "TriggerPathIs"].includes(e.type))
				return Qr(n.pathname, e.value, e.isRegexp, !0);
		} else if (t === "Follow")
			return e.type === "FollowPathBeginsWith"
				? Qr(n.pathname, e.value, e.isRegexp, !1)
				: e.type === "FollowPathIs"
					? Qr(n.pathname, e.value, e.isRegexp, !0)
					: !1;
		return !1;
	}
	function Di(e, t, n) {
		if (n.length === 0) return !0;
		const r = new URL(e);
		for (const i of n) if (i.negate && Bi(i, t, r)) return !1;
		const o = n.filter((i) => !i.negate);
		if (o.length === 0) return !0;
		if (t === "Trigger") {
			const i = o.filter((s) => s.type.match(O0));
			for (const s of i) if (Bi(s, t, r)) return !0;
		} else if (t === "Follow") {
			const i = o.filter((s) => s.type.startsWith("Follow"));
			if (i.length === 0) return !0;
			for (const s of i) if (Bi(s, t, r)) return !0;
			return !1;
		}
		return !1;
	}
	const j0 = m(),
		B0 = m(),
		D0 = m(),
		F0 = m(),
		U0 = m(),
		H0 = E(),
		Z0 = Wl,
		V0 = m(),
		W0 = U(),
		q0 = U().nullable(),
		K0 = U().nullable(),
		J0 = J([m(), jg()]).transform((e) => (e instanceof Date ? e : new Date(e))),
		G0 = k({ name: m(), code: m() }).nullable(),
		Y0 = P(k({ id: m(), name: m(), code: m() }))
			.optional()
			.nullable(),
		X0 = P(Tn()).optional(),
		Q0 = P(Tn()).optional(),
		e_ = P(Tn()).optional(),
		t_ = P(Tn()).optional(),
		n_ = kl.optional().default("and"),
		r_ = P(xl).optional().default([]),
		o_ = P(m()).optional(),
		i_ = U().gte(0).lte(1).default(1),
		s_ = U(),
		cu = k({
			id: j0,
			fullSlug: B0,
			name: D0,
			status: F0,
			publishingState: U0,
			isLive: H0,
			urlRules: X0,
			showRules: Q0,
			followRules: e_,
			hideRules: t_,
			audienceRuleMode: n_,
			audienceRules: r_,
			renderType: Z0,
			surveyType: V0,
			capturePercent: W0,
			minTimeForRetake: q0,
			minTimeForRetrigger: K0,
			updatedAt: J0,
			language: G0,
			languages: Y0,
			blockedIps: o_,
			priorityScore: i_,
			numCards: s_,
		});
	k({ survey: Jr });
	const a_ = P(cu),
		l_ = P(Jr),
		c_ = k({
			id: m(),
			slug: m(),
			valueType: L(["string", "number"]).optional().nullable(),
		}),
		uu = k({
			surveys: P(cu),
			traits: P(c_).optional().default([]),
			organisation: k({
				completionTimeout: U().optional().nullable(),
				rejectionTimeout: U().optional().nullable(),
			}).optional(),
		});
	function du(e, t) {
		return t && e.minTimeForRetake != null
			? Date.now() - t >= e.minTimeForRetake * 1e3
			: !1;
	}
	function pu(e, t) {
		return t && e.minTimeForRetrigger != null
			? Date.now() - t >= e.minTimeForRetrigger * 1e3
			: !1;
	}
	function u_(e, t) {
		const n = `skyra.${t.replace(/\//g, ".")}`,
			r = e.getItem(n),
			o = r ? JSON.parse(r) : {},
			i = Vn.safeParse(o);
		return i.success ? i.data : Vn.parse({});
	}
	const d_ = Se(async ({ input: e }) => {
			const t = new URLSearchParams();
			e.testMode && t.append("mode", "test"),
				Je("Load survey summaries", { ...e });
			const r = await (
					await fetch(`${e.apiHost}/survey/${e.orgSlug}?` + t.toString())
				).json(),
				o = uu.safeParse(r);
			if (o.success)
				return o.data.surveys.filter((s) => s.renderType !== "App");
			const i = a_.safeParse(r);
			if (!i.success) {
				const s = new Error("Invalid response");
				throw ((s.cause = i.error), s);
			}
			return i.data.filter((s) => s.renderType !== "App");
		}),
		p_ = Se(async ({ input: e }) => {
			const t = new URLSearchParams();
			e.testMode && t.append("mode", "test"),
				Je("Load org with surveys", { ...e });
			const r = await (
					await fetch(`${e.apiHost}/survey/${e.orgSlug}?` + t.toString())
				).json(),
				o = uu.safeParse(r);
			if (!o.success) {
				const i = new Error("Invalid response");
				throw ((i.cause = o.error), i);
			}
			return {
				...o.data,
				surveys: o.data.surveys.filter((i) => i.renderType !== "App"),
			};
		}),
		Fi = Se(async ({ input: e }) => {
			if (e.slugs.length === 0) return [];
			const t = new URLSearchParams();
			for (const s of e.slugs) t.append("slug", s.split("/")[1]);
			e.testMode && t.append("mode", "test");
			const n = `${e.apiHost}/survey/${e.orgSlug}/fullSurveys?`,
				o = await (await fetch(n + t.toString())).json(),
				i = l_.safeParse(o);
			if (!i.success)
				throw (
					(console.error("Invalid survey response", i.error, o),
					new Error("Invalid survey response"))
				);
			return i.data;
		});
	function fu(e) {
		return !!e && Object.keys(e).length > 0;
	}
	const hu = Se(({ input: e }) =>
		Promise.all(
			e.map(async (t) => {
				var o;
				if (t.sessionId) {
					if (fu(t.traits))
						try {
							await tn(
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
							Je(
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
				const r = Be();
				return (
					await tn(
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
	function mu(e) {
		const t = e.survey.fullSlug,
			n = e.customElementName ?? "skyra-survey";
		return document.querySelector(e.selector)
			? document.querySelector(`${n}[slug="${t}"]`)
				? "existing_element"
				: null
			: "missing_container";
	}
	const f_ = Se(async ({ input: e }) => {
			let t = mu(e);
			return (
				t === "missing_container" &&
					e.retryDelayMs !== 0 &&
					(await new Promise((n) => setTimeout(n, e.retryDelayMs ?? 100)),
					(t = mu(e))),
				t ? { canRender: !1, reason: t } : { canRender: !0 }
			);
		}),
		gu = Se(({ input: e }) => {
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
	function yu(e) {
		rn({
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
	function rn(e) {
		m0(
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
	const h_ = Se(({ input: e }) => {
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
	async function m_(e) {
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
	function vu(e) {
		return e.split("/").filter(Boolean).length;
	}
	function bu(e, t) {
		const n = vu(t);
		return e === t ? 3 : e.startsWith(t + "/") ? Math.min(1 + n * 0.5, 2.9) : 0;
	}
	const eo = /\/$/;
	function g_(e, t, n, r = [], o = []) {
		var a;
		let i = 1,
			s;
		try {
			s = new URL(e).pathname.replace(eo, "");
		} catch {
			s = e.replace(eo, "");
		}
		if (!Yr({ showRules: n, followRules: r, hideRules: o }))
			for (const l of t) {
				const c = l.value.replace(eo, "");
				if (l.isRegexp)
					try {
						new RegExp(l.value).test(s) && (i += 0.5);
					} catch {}
				else i += bu(s, c);
			}
		for (const l of n) {
			const c = ((a = l.path) == null ? void 0 : a.replace(eo, "")) ?? "";
			if (l.isRegex && l.path)
				try {
					const u =
						l.path
							.split("/")
							.filter(Boolean)
							.reduce((f, h) => {
								const g = (v) => {
										try {
											return new RegExp(v);
										} catch {
											return null;
										}
									},
									b = (v) => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
								return f + "\\/" + (g(h) ? `(${h})` : b(h));
							}, "^") +
						(l.applyBelow ? "(\\/.*)?" : "") +
						"$";
					if (new RegExp(u).test(s)) {
						const h = 1 + vu(l.path) * 0.5 + 0.5;
						i += h;
					}
				} catch {}
			else l.applyBelow && (i += bu(s, c));
		}
		return i;
	}
	const y_ = Se(({ input: e }) => {
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
			n = Tr.parse(t);
		return tn(n, { apiHost: e.apiHost }), Promise.resolve();
	});
	function v_(e) {
		const t = e.path ?? "/",
			n = `skyra.${e.slug.replace(/\//g, ".")}`;
		e.storage.removeItem(n, { path: t });
	}
	const wu = Un({
			actors: {
				postCardValue: y_,
				postAcceptedAnswer: Se(({ input: e, signal: t }) => w0(e, t)),
			},
			delays: {
				initial: 0,
				autoClose: ({ context: e }) => e.survey.autoCloseAfter ?? 0,
				saveRetry: ({ context: e }) => e.saveAttempts * 500,
			},
			actions: {
				prepareAnswer: z(({ context: e, event: t }) => {
					kt(t, "submit");
					const n = e.survey.cards.find((o) => o.order === e.state.currentCard),
						r = structuredClone(t);
					return {
						saveAttempts: 0,
						saveError: void 0,
						pendingAnswer: {
							event: r,
							apiHost: e.apiHost,
							body: JSON.stringify({
								event: "CardValue",
								survey: e.survey.id,
								session: e.sessionId,
								visitor: e.visitorId,
								card: n.id,
								type: n.type,
								cardOrder: n.order,
								value: r.value,
								languageCode: e.language,
								url: e.url,
							}),
						},
					};
				}),
				acceptAnswer: z(({ context: e }) => {
					const t = e.pendingAnswer.event;
					return {
						state: au(
							e.survey.cards,
							structuredClone(e.state),
							t.cardId,
							t.key,
							t.value,
						),
					};
				}),
				setNextCards: z({
					state: ({ context: e }) =>
						k0(e.survey.cards, e.state, e.audienceContext),
				}),
				setPrevCard: z({ state: ({ context: e }) => S0(e.state) }),
				clearCookieState: ({ context: e }) => {
					const t = e.survey.renderType === "Popup";
					v_({
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
						m_({
							storage: e.cookieStorage,
							state: e.state,
							slug: e.survey.fullSlug,
							renderType: e.survey.renderType,
							confineToDomain: e.survey.confineToDomain,
						});
				},
				setCardValue: z({
					state: ({ context: e, event: t }) => (
						kt(t, "submit"),
						au(e.survey.cards, e.state, t.cardId, t.key, t.value)
					),
				}),
				diagnoseCurrentCardMissing: ({ context: e, event: t }) => {
					kt(t, "submit"),
						rn({
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
					rn({
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
				isApp: ({ context: e }) => e.survey.renderType === "App",
				submittedCurrentCard: ({ context: e, event: t }) => {
					var n;
					return (
						kt(t, "submit"),
						((n = e.survey.cards.find(
							(r) => r.order === e.state.currentCard,
						)) == null
							? void 0
							: n.id) === t.cardId
					);
				},
				submittedCardExists: ({ context: e, event: t }) => (
					kt(t, "submit"), e.survey.cards.some((n) => n.id === t.cardId)
				),
				hasEmptyValue: ({ event: e }) => {
					kt(e, "submit");
					const t = e.value;
					return typeof t == "string"
						? t.trim() === ""
						: Array.isArray(t)
							? t.length === 0
							: t === void 0;
				},
				hasNextCard: ({ context: e }) =>
					x0(e.survey.cards, e.state, e.audienceContext),
				nextCardStartsMinimized: ({ context: e }) =>
					C0(e.survey.cards, e.state, e.audienceContext),
				isLastCard: ({ context: e }) =>
					z0(e.survey.cards, e.state, e.audienceContext),
				isMessageCard: ({ context: e }) => T0(e.survey.cards, e.state),
				isPopup: ({ context: e }) => e.survey.renderType === "Popup",
				isInline: ({ context: e }) => e.survey.renderType === "Inline",
				isMinimized: ({ context: e }) => e.state.state === "Minimized",
				wasPreviouslyVisible: ({ context: e }) => e.state.state === "ShowCard",
				cookieConsented: ({ context: e }) => e.cookieConsent,
			},
		}).createMachine({
			id: "Capture",
			context: ({ input: e }) => {
				var b, v, _, x, S, A, I;
				const t = (b = e.state) == null ? void 0 : b.state;
				let n = t;
				if (typeof t == "string") {
					const O = t.toLowerCase();
					O === "minimized"
						? (n = "Minimized")
						: O === "showcard" && (n = "ShowCard");
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
					s = ((x = e.state) == null ? void 0 : x.currentCard) ?? i,
					a = window.location.pathname,
					l = e.survey.renderType === "Inline",
					c = a === ((S = e.state) == null ? void 0 : S.path),
					d =
						((A = e.state) == null ? void 0 : A.currentCard) === void 0 ||
						(l && !c),
					u = Vn.parse(
						!l || c
							? { ...e.state, state: n, currentCard: s }
							: { currentCard: i },
					),
					p = d
						? Vn.parse({
								...u,
								currentCard:
									((I = _0(e.survey.cards, u, o)) == null ? void 0 : I.order) ??
									i,
							})
						: u,
					f = e.survey.cards.find((O) => O.order === p.currentCard),
					h =
						e.survey.renderType !== "App" &&
						n === void 0 &&
						(f == null ? void 0 : f.size) === "Minimal",
					g = Vn.parse({ ...p, state: h ? "Minimized" : p.state, path: a });
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
					saveAttempts: 0,
					state: g,
					audienceContext: o,
				};
			},
			on: {
				setConsent: [
					{
						target: "#Done",
						actions: [z({ cookieConsent: ({ event: e }) => e.value })],
						guard: at(["isPopup", ({ event: e }) => e.value === !1]),
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
						Fw(({ context: e, event: t, enqueue: n }) => {
							e.survey.renderType !== "App" &&
								n(Lc({ type: "setLanguage", language: t.language }));
						}),
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
							always: {
								guard: at([
									"isApp",
									"isLastCard",
									"isMessageCard",
									({ context: e }) => e.state.history.length > 0,
								]),
								target: "Confirming",
							},
							after: {
								500: {
									guard: at(["isInline", "isLastCard", "isMessageCard"]),
									actions: "clearCookieState",
								},
								autoClose: {
									guard: at([
										({ context: e }) =>
											e.survey.renderType === "Popup" ||
											e.survey.renderType === "App",
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
								completeSurvey: { target: "#Done", guard: Pr("isApp") },
								submit: [
									{
										guard: at(["isApp", Pr("submittedCurrentCard")]),
										actions: "diagnoseCurrentCardMissing",
									},
									{
										guard: at([
											"isApp",
											"hasEmptyValue",
											({ context: e }) => {
												var t;
												return (
													((t = e.survey.cards.find(
														(n) => n.order === e.state.currentCard,
													)) == null
														? void 0
														: t.isRequired) === !0
												);
											},
										]),
									},
									{ target: "GoToNextCard", guard: "isMessageCard" },
									{
										target: "GoToNextCard",
										guard: at(["isApp", "hasEmptyValue"]),
									},
									{
										target: "GoToNextCard",
										guard: "hasEmptyValue",
										actions: ["setCardValue", "storeCookieState"],
									},
									{
										target: "GoToNextCard",
										guard: Pr("submittedCardExists"),
										actions: "diagnoseCurrentCardMissing",
									},
									{
										target: "SaveAppAnswer",
										guard: "isApp",
										actions: "prepareAnswer",
									},
									{
										target: "SubmitCard",
										actions: [
											"setCardValue",
											"storeCookieState",
											me(({ event: e, context: t }) => {
												var s, a;
												const n = t.state,
													r = t.survey.cards.find(
														(l) => l.order === n.currentCard,
													),
													o = Al.parse(r);
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
													const l = e.value,
														c =
															(s = o.taskItems) == null
																? void 0
																: s.find((d) => d.task.id === l);
													return {
														...i,
														cardType: "TopTaskCard",
														value: {
															id: l,
															name:
																c && "name" in c.task ? c.task.name : "Unknown",
															label: c == null ? void 0 : c.label,
														},
													};
												}
												if (o.type === "RecruitmentCard") {
													const l = e.value;
													return { ...i, cardType: o.type, value: l };
												}
												if (o.type === "LikertCard") {
													const l = r,
														c = e.value,
														d = l.likertScale.likertItems.find(
															(u) => u.id === c,
														);
													return {
														...i,
														cardType: "LikertCard",
														value: {
															id: c,
															name: (d == null ? void 0 : d.label) ?? "Unknown",
															emoji:
																(a = d == null ? void 0 : d.emoji) == null
																	? void 0
																	: a.native,
														},
													};
												}
												if (o.type === "SegmentCard") {
													const l = r,
														c = e.value,
														d = l.items.find((u) => u.value.id === c);
													return {
														...i,
														cardType: "SegmentCard",
														value: {
															id: c,
															name: (d == null ? void 0 : d.name) ?? "Unknown",
															label: d == null ? void 0 : d.label,
														},
													};
												}
												if (o.type === "SingleSelectCard") {
													const l = r,
														c = e.value,
														d = l.selectItems.find((u) => u.id === c);
													return {
														...i,
														cardType: "SingleSelectCard",
														value: {
															id: c,
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
						Confirming: {
							tags: ["acceptedCompletion"],
							after: {
								autoClose: {
									guard: ({ context: e }) =>
										typeof e.survey.autoCloseAfter == "number" &&
										e.survey.autoCloseAfter > 0,
									target: "#Done",
								},
							},
							on: {
								reject: { target: "#Done" },
								completeSurvey: { target: "#Done" },
								submit: { guard: "submittedCurrentCard", target: "#Done" },
								goBack: {},
							},
						},
						GoToNextCard: {
							always: [
								{
									guard: at([Pr("isApp"), "nextCardStartsMinimized"]),
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
						SaveAppAnswer: {
							tags: ["saving"],
							on: { setLanguage: {} },
							entry: z({
								saveAttempts: ({ context: e }) => e.saveAttempts + 1,
							}),
							invoke: {
								src: "postAcceptedAnswer",
								input: ({ context: e }) => e.pendingAnswer,
								onDone: {
									target: "GoToNextCard",
									actions: [
										"acceptAnswer",
										me(({ context: e }) => ({
											type: "answerAccepted",
											cardId: e.pendingAnswer.event.cardId,
										})),
										z({ pendingAnswer: void 0, saveError: void 0 }),
									],
								},
								onError: [
									{
										guard: ({ context: e, event: t }) =>
											t.error instanceof St &&
											t.error.retryable &&
											e.saveAttempts < v0,
										target: "WaitToRetryAnswer",
									},
									{
										target: "SaveFailed",
										actions: z({
											saveError: ({ event: e }) =>
												e.error instanceof St ? e.error.code : "save_failed",
										}),
									},
								],
							},
						},
						WaitToRetryAnswer: {
							tags: ["saving"],
							on: { setLanguage: {} },
							after: { saveRetry: { target: "SaveAppAnswer" } },
						},
						SaveFailed: {
							tags: ["saveFailed"],
							on: {
								setLanguage: {},
								retrySave: {
									target: "SaveAppAnswer",
									actions: z({ saveAttempts: 0, saveError: void 0 }),
								},
							},
						},
						SubmitCard: {
							invoke: {
								src: "postCardValue",
								input: ({ context: e, event: t }) => {
									kt(t, "submit");
									const n = e.survey.cards.find((r) => r.id === t.cardId);
									if (!n)
										throw (
											(rn({
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
		_u = (e) => {
			var t;
			return e.surveyAlreadyCaptured
				? 0
				: (((t = e.fullSurvey) == null ? void 0 : t.initialDelay) ?? 0);
		},
		xt = (e, t, n) => {
			var r;
			return qr({
				savedLanguage: t,
				browserLanguage: n,
				surveyDefault: ((r = e.language) == null ? void 0 : r.code) || "en",
				enabledLanguages: ou(e),
			});
		},
		b_ = Un({
			actors: {
				checkCookieSupport: h_,
				loadFullSurveys: Fi,
				sessionInit: hu,
				renderSurvey: gu,
				canRenderSurvey: f_,
				sleepActor: Se(
					({ input: e }) => new Promise((t) => setTimeout(t, e.delay)),
				),
				checkCaptureRate: Se(
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
							var c;
							const i = (c = e.cookieState) == null ? void 0 : c[o.fullSlug],
								s = Hn({
									traits: e.traits,
									language: xt(o, e.language, e.locale),
									locale: e.locale,
								}),
								a = o.urlRules && o.urlRules.length > 0,
								l = Yr(o);
							if (!a && !l) return !1;
							if (!l && a && o.urlRules) {
								const d =
									(i == null ? void 0 : i.state) === "Capture"
										? "Follow"
										: "Trigger";
								if (!Di(e.url, d, o.urlRules)) return !1;
							}
							return (l &&
								!Xr({
									urlString: e.url,
									surveyStarted: (i == null ? void 0 : i.state) === "Capture",
									showRules: o.showRules || [],
									followRules: o.followRules || [],
									hideRules: o.hideRules || [],
									device: nn(),
									isInline: !1,
								})) ||
								!Ni(o.audienceRules, s, o.audienceRuleMode)
								? !1
								: i
									? i.state === "Completed"
										? du(o, i.lastSync)
										: i.state === "Rejected" || i.state === "NotSelected"
											? pu(o, i.lastSync)
											: i.state === "Capture" || i.state === "Selected"
									: !0;
						}),
					};
				}),
				selectFirstEligibleSurvey: z(({ context: e }) => {
					const t = e.eligibleSurveys.find((s) => {
						var l;
						const a = (l = e.cookieState) == null ? void 0 : l[s.fullSlug];
						return (a == null ? void 0 : a.state) === "Capture";
					});
					if (t)
						return {
							selectedSurvey: t.fullSlug,
							resolvedLanguage: xt(t, e.language, e.locale),
							surveyAlreadyCaptured: !0,
						};
					let n = !1;
					if (e.requestedSurvey) {
						const s = e.eligibleSurveys.find(
							(a) => a.fullSlug === e.requestedSurvey,
						);
						if (s)
							return {
								selectedSurvey: s.fullSlug,
								resolvedLanguage: xt(s, e.language, e.locale),
								requestedSurvey: void 0,
							};
						n = !0;
					}
					const i = e.eligibleSurveys
						.map((s) => {
							const a = g_(
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
						resolvedLanguage: i ? xt(i, e.language, e.locale) : null,
						...(n && { requestedSurvey: void 0 }),
					};
				}),
				rememberSelection: z(({ context: e }) =>
					e.selectedSurvey
						? {
								cookieState: {
									...e.cookieState,
									[e.selectedSurvey]: {
										state: "Selected",
										lastSync: Date.now(),
									},
								},
							}
						: {},
				),
				emitSurveySelected: me(({ context: e }) => {
					if (!e.selectedSurvey) throw new Error("No survey selected");
					return { type: "surveySelected", slug: e.selectedSurvey };
				}),
				postPreflightDiagnostic: ({ context: e, event: t }) => {
					if (!("output" in t)) return;
					const n = t.output;
					if (n.canRender) return;
					const r = e.selectedSurvey;
					if (!r) return;
					const o = e.surveys.find((i) => i.fullSlug === r);
					yu({
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
						yu({
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
					rn({
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
				resolvedLanguage: null,
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
									n = e.eligibleSurveys.filter((h) => {
										var b;
										const g =
											(b = e.cookieState) == null ? void 0 : b[h.fullSlug];
										return (
											!g || g.state === "Capture" || g.state === "Selected"
										);
									}),
									r = n
										.map((h) => h.minTimeForRetake)
										.filter((h) => h !== null)
										.map((h) => h * 1e3),
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
										.map((h) => h.minTimeForRetrigger)
										.filter((h) => h !== null)
										.map((h) => h * 1e3),
									l = a.length > 0 ? Math.min(...a, i) : i;
								let c = null,
									d = null;
								for (const h of e.surveys) {
									const g =
										(f = e.cookieState) == null ? void 0 : f[h.fullSlug];
									g &&
										g.lastSync &&
										h.renderType !== "Inline" &&
										(g.state === "Completed" &&
											(c = Math.max(c ?? 0, g.lastSync)),
										g.state === "Rejected" &&
											(d = Math.max(d ?? 0, g.lastSync)));
								}
								return !((c && t - c < s) || (d && t - d < l));
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
							guard: ({ context: e }) => {
								var t;
								return (
									e.selectedSurvey !== null &&
									(e.surveyAlreadyCaptured ||
										((t = e.cookieState[e.selectedSurvey]) == null
											? void 0
											: t.state) === "Selected")
								);
							},
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
								actions: ["rememberSelection", "emitSurveySelected"],
							},
							{
								target: "Idle",
								actions: me(({ context: e }) => {
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
											resolvedLanguage: ({ context: e, event: t }) => {
												const n = t.output[0];
												return n ? xt(n, e.language, e.locale) : null;
											},
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
								guard: ({ context: e }) => _u(e) <= 0,
							},
							invoke: {
								src: "sleepActor",
								input: ({ context: e }) => ({ delay: _u(e) }),
								onDone: { target: "SessionInit" },
							},
						},
						SessionInit: {
							description: "Initialize session with API",
							invoke: {
								src: "sessionInit",
								input: ({ context: e }) => {
									var o;
									const t = e.selectedSurvey;
									if (!t)
										throw new Error(
											"Invalid state: selectedSurvey is required for SessionInit",
										);
									const n = e.surveys.find((i) => i.fullSlug === t);
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
											languageCode: e.resolvedLanguage ?? void 0,
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
						me(({ context: e }) => {
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
								language: e.resolvedLanguage ?? xt(n, e.language, e.locale),
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
	function ku(e, t) {
		return e instanceof Error ? e.message : t;
	}
	function Su(e, t) {
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
		return qr({
			explicitLanguage: n,
			htmlLang: r,
			browserLanguage: Kr(),
			surveyDefault: ((s = e.language) == null ? void 0 : s.code) || "en",
			enabledLanguages: ou(e),
		});
	}
	const w_ = Un({
		actors: { loadFullSurveys: Fi, sessionInit: hu },
	}).createMachine({
		id: "surveySessionInitializer",
		context: ({ input: e }) => ({
			...e,
			kind: e.kind ?? "inline",
			fullSurvey: null,
			language: null,
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
						actions: z({
							fullSurvey: ({ event: e }) => e.output[0],
							language: ({ context: e, event: t }) => {
								const n = t.output[0];
								return n ? Su(n, e.slug) : null;
							},
						}),
						target: "CheckEligibility",
					},
					onError: {
						target: "Failed",
						actions: me(({ context: e, event: t }) => ({
							type:
								e.kind === "headless"
									? "headlessInitializationFailed"
									: "inlineInitializationFailed",
							slug: e.slug,
							code: "load_failed",
							message: ku(t.error, `Failed to load ${e.kind} survey.`),
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
							return t !== "Inline" && t !== "Headless"
								? !1
								: t === "Headless"
									? Ni(
											e.fullSurvey.audienceRules,
											Hn({ traits: e.traits, language: e.language ?? void 0 }),
											e.fullSurvey.audienceRuleMode,
										)
									: t === "Inline" &&
											Xr({
												urlString: e.url,
												surveyStarted: !1,
												showRules: e.fullSurvey.showRules,
												followRules: e.fullSurvey.followRules || [],
												hideRules: e.fullSurvey.hideRules,
												device: nn(),
												isInline: !0,
											})
										? Ni(
												e.fullSurvey.audienceRules,
												Hn({
													traits: e.traits,
													language: e.language ?? void 0,
												}),
												e.fullSurvey.audienceRuleMode,
											)
										: !1;
						},
						target: "SessionInit",
					},
					{
						target: "Failed",
						actions: me(({ context: e }) => ({
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
								languageCode: e.language ?? void 0,
							},
						];
					},
					onDone: {
						actions: [
							z({ sessionId: ({ event: e }) => e.output[0].sessionId }),
							me(({ context: e, event: t }) => {
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
									language: e.language ?? Su(r, e.slug),
									explicitLanguage: n,
								};
							}),
						],
						target: "Done",
					},
					onError: {
						target: "Failed",
						actions: me(({ context: e, event: t }) => ({
							type:
								e.kind === "headless"
									? "headlessInitializationFailed"
									: "inlineInitializationFailed",
							slug: e.slug,
							code: "session_init_failed",
							message: ku(
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
	function __(e) {
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
		return qr({
			explicitLanguage: void 0,
			savedLanguage: void 0,
			htmlLang: t,
			browserLanguage: typeof navigator < "u" ? navigator.language : void 0,
			surveyDefault: ((i = e.language) == null ? void 0 : i.code) || "en",
			enabledLanguages: n,
		});
	}
	function k_(e) {
		var o;
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
		const r = Array.from(
			new Set(
				e.surveys.flatMap((i) => {
					var s, a;
					return [
						(s = i.language) == null ? void 0 : s.code,
						...(((a = i.languages) == null ? void 0 : a.map((l) => l.code)) ||
							[]),
					];
				}),
			),
		).filter(Boolean);
		return qr({
			explicitLanguage: void 0,
			savedLanguage: void 0,
			htmlLang: t,
			browserLanguage: typeof navigator < "u" ? navigator.language : void 0,
			surveyDefault: ((o = n.language) == null ? void 0 : o.code) || "en",
			enabledLanguages: r,
		});
	}
	function xu(e, t) {
		const n = e.getItem("skyra.state");
		if (!n) return Ct.parse({ _id: Be() });
		try {
			const r = JSON.parse(n);
			return Ct.parse(r);
		} catch (r) {
			return (
				t &&
					rn({
						apiHost: t.apiHost,
						event: "cookie_state_parse_failed",
						reason:
							r instanceof SyntaxError ? "invalid_json" : "invalid_schema",
						org: t.org,
						url: t.url,
					}),
				Ct.parse({ _id: Be() })
			);
		}
	}
	function S_(e, t) {
		e.setItem("skyra.state", JSON.stringify(t));
	}
	function Cu(e, t) {
		const n = Yr(e),
			r = e.urlRules && e.urlRules.length > 0;
		if (!n && r && !Di(t, "Follow", e.urlRules)) return !1;
		const o = nn(),
			i = (e.hideRules || []).filter((s) => s[o] && ql(s, t));
		return i.some((s) => !s.follow)
			? !1
			: n
				? Xr({
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
	function to(e) {
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
	function on(e, t) {
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
	function sn(e) {
		return !e.id && !e.slug && (!e.renderType || e.renderType === "Popup");
	}
	function x_(e, t) {
		return e.id === t.id || e.fullSlug === t.fullSlug;
	}
	function Ui(e, t) {
		return t.some((n) => x_(e, n));
	}
	function C_(e) {
		return e.popupHidden
			? []
			: e.hiddenPopupSurveys.length === 0
				? e.popupSurveys
				: e.popupSurveys.filter((t) => !Ui(t, e.hiddenPopupSurveys));
	}
	function zu(e) {
		return e.popupCapture
			? e.popupHidden
				? !0
				: e.activePopupSurvey
					? Ui(e.activePopupSurvey, e.hiddenPopupSurveys)
					: !1
			: !1;
	}
	function z_(e, t) {
		return sn(t) ? [] : e.filter((n) => on(t, n) === !1);
	}
	function Tu(e, t, n) {
		return n === "replace" ? t : { ...e, ...t };
	}
	const T_ = Un({
		actors: {
			loadSurveys: p_,
			popupCoordinator: b_,
			surveySessionInitializer: w_,
			captureMachine: wu,
		},
		guards: {
			activePopupBlockedOnReload: ({ context: e, event: t }) => {
				if (t.type !== "reload" || !e.popupCapture) return !1;
				if (zu(e)) return !0;
				const n = e.popupCapture.getSnapshot().context.survey;
				return !Cu(n, t.url);
			},
			activePopupAllowedOnReload: ({ context: e, event: t }) => {
				if (t.type !== "reload" || !e.popupCapture || zu(e)) return !1;
				const n = e.popupCapture.getSnapshot().context.survey;
				return Cu(n, t.url);
			},
			hideTargetsPopup: ({ context: e, event: t }) =>
				t.type !== "hideSurveys" ? !1 : on(t, to(e)),
			showTargetsPopup: ({ context: e, event: t }) =>
				t.type !== "showSurveys"
					? !1
					: sn(t) || e.hiddenPopupSurveys.some((n) => on(t, n))
						? !0
						: on(t, to(e)),
			noActivePopupCapture: ({ context: e }) => !e.popupCapture,
			removeSurveyTargetsActiveOrPendingPopup: ({ context: e, event: t }) => {
				if (t.type !== "removeSurvey" || !t.slug) return !1;
				const n = to(e);
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
				e.consent && S_(e.cookieStorage, e.state);
			},
			initializeContext: z(({ context: e }) => ({ visitorId: e.state._id })),
			readCookieState: z(({ context: e }) => {
				const t = xu(e.cookieStorage, {
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
				const t = k_(e);
				return { state: Ct.parse({ ...e.state, _l: t }) };
			}),
			spawnPopupCoordinator: z(({ context: e, spawn: t, self: n }) => {
				const r = C_(e);
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
						locale: Kr(),
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
				const {
						slug: o,
						survey: i,
						sessionId: s,
						language: a,
						explicitLanguage: l,
					} = t,
					c = `capture-${o}-${s}`,
					d = u_(e.cookieStorage, o),
					u = i.renderType === "Inline" || i.renderType === "Headless",
					p = a ?? (u ? l || __(i) : e.state._l),
					f = n("captureMachine", {
						id: c,
						input: {
							url: e.url,
							survey: i,
							state: d,
							sessionId: s,
							visitorId: e.visitorId,
							parentRef: r,
							cookieStorage: e.cookieStorage,
							cookieConsent: e.consent,
							apiHost: e.apiHost,
							language: p,
							traits: e.traits,
							device: nn(),
							locale: Kr(),
						},
						systemId: c,
					});
				f.subscribe({
					complete() {
						const v = f.getSnapshot().output;
						(v == null ? void 0 : v.type) === "rejected"
							? r.send({ type: "surveyRejected", slug: o, captureId: c })
							: (v == null ? void 0 : v.type) === "completed" &&
								r.send({ type: "surveyDone", slug: o, captureId: c });
					},
				}),
					f.on("cardSaved", (b) => {
						r.send(b);
					});
				const h = i.renderType === "Inline",
					g = i.renderType === "Headless";
				return {
					popupCapture: h || g ? e.popupCapture : f,
					activePopupSurvey: h || g ? e.activePopupSurvey : i,
					inlineCaptures: h
						? { ...e.inlineCaptures, [c]: f }
						: e.inlineCaptures,
					headlessCaptures: g
						? { ...e.headlessCaptures, [o]: f }
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
			updateCookieStateSelected: z(({ context: e, event: t }) =>
				t.type !== "surveySelected"
					? {}
					: {
							state: {
								...e.state,
								[t.slug]: { state: "Selected", lastSync: Date.now() },
							},
						},
			),
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
					for (const [l, c] of Object.entries(s)) c.id === n && delete s[l];
				} else {
					for (const [l, c] of Object.entries(e.inlineCaptures))
						l.startsWith(`capture-${r}-`) && delete i[l];
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
					: { traits: Tu(e.traits, t.traits, t.mode) },
			),
			clearPopupCoordinator: z(() => ({ popupCoordinator: null })),
			hidePopupSurveys: z(({ context: e, event: t }) => {
				var o;
				if (t.type !== "hideSurveys") return {};
				const n = to(e);
				return (
					(o = e.popupCapture) == null || o.send({ type: "minimize" }),
					sn(t)
						? { popupHidden: !0, hiddenPopupSurveys: [] }
						: {
								hiddenPopupSurveys:
									n && !Ui(n, e.hiddenPopupSurveys)
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
						(sn(t) || on(t, n)) &&
						((r = e.popupCapture) == null || r.send({ type: "maximize" })),
					{
						popupHidden: sn(t) ? !1 : e.popupHidden,
						hiddenPopupSurveys: z_(e.hiddenPopupSurveys, t),
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
				const n = Tu(e.traits, t.traits, t.mode);
				if (!fu(n)) return;
				const r = [
					...(e.popupCapture ? [e.popupCapture] : []),
					...Object.values(e.inlineCaptures),
					...Object.values(e.headlessCaptures),
				];
				for (const o of r) {
					const i = o.getSnapshot().context;
					tn(
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
			emitReady: me({ type: "ready" }),
			emitSurveyStarted: me(({ event: e }) =>
				e.type !== "readyToCapture"
					? { type: "ready" }
					: { type: "surveyStarted", slug: e.slug },
			),
			emitSurveyCompleted: me(({ event: e }) =>
				e.type !== "surveyDone"
					? { type: "ready" }
					: { type: "surveyCompleted", slug: e.slug },
			),
			emitSurveyRejected: me(({ event: e }) => {
				if (e.type !== "surveyRejected")
					throw new Error("Unexpected event type");
				return { type: "surveyRejected", slug: e.slug };
			}),
			emitSurveyNotSelected: me(({ event: e }) => {
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
				xu(e.cookieStorage, { apiHost: e.apiHost, org: e.org, url: e.url }),
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
						st(({ context: e }) => {
							var t;
							return ((t = e.popupCapture) == null ? void 0 : t.id) ?? "";
						}),
						"removeBlockedActivePopupOnReload",
						st("popup-coordinator"),
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
						st("popup-coordinator"),
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
						actions: Oi("popup-coordinator", ({ event: e }) => ({
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
					surveySelected: {
						actions: ["updateCookieStateSelected", "writeCookieState"],
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
									Ct.parse({ ...t.state, _l: e.language }),
							}),
							"writeCookieState",
						],
					},
					hideSurveys: {
						guard: "hideTargetsPopup",
						actions: [
							"hidePopupSurveys",
							st("popup-coordinator"),
							"clearPopupCoordinator",
						],
					},
					showSurveys: [
						{
							guard: ({ context: e, event: t }) =>
								t.type === "showSurveys" &&
								!e.popupCapture &&
								(sn(t) || e.hiddenPopupSurveys.some((n) => on(t, n))),
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
								st("popup-coordinator"),
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
	function I_(e, t, n) {
		var s;
		const r = [],
			o = !!((s = e.urlRules) != null && s.length),
			i = Yr(e);
		return (
			!o && !i
				? r.push("No popup URL target is configured")
				: i
					? Xr({
							urlString: t,
							surveyStarted: (n == null ? void 0 : n.state) === "Capture",
							showRules: e.showRules || [],
							followRules: e.followRules || [],
							hideRules: e.hideRules || [],
							device: nn(),
							isInline: !1,
						}) || r.push("URL targeting does not match this page or device")
					: e.urlRules &&
						!Di(
							t,
							(n == null ? void 0 : n.state) === "Capture"
								? "Follow"
								: "Trigger",
							e.urlRules,
						) &&
						r.push("URL targeting does not match this page"),
			(n == null ? void 0 : n.state) === "Completed" && !du(e, n.lastSync)
				? r.push("Retake window has not elapsed")
				: ((n == null ? void 0 : n.state) === "Rejected" ||
							(n == null ? void 0 : n.state) === "NotSelected") &&
						!pu(e, n.lastSync)
					? r.push("Retrigger window has not elapsed")
					: n &&
						![
							"Completed",
							"Rejected",
							"NotSelected",
							"Capture",
							"Selected",
						].includes(n.state) &&
						r.push("Visitor state is not eligible for this popup"),
			r
		);
	}
	class $_ {
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
			(this.actor = Ht(r || T_, { input: o, inspect: n })),
				this.actor.on("*", (i) => {
					const s = this.eventHandlers.get(i.type);
					s && s.forEach((l) => l(i));
					const a = this.eventHandlers.get("*");
					a && a.forEach((l) => l(i));
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
			var p, f;
			const r = this.actor.getSnapshot(),
				o = r.context,
				i = r.value,
				s = typeof i == "string" ? i : JSON.stringify(i),
				a = [
					...(o.popupCapture ? [o.popupCapture] : []),
					...Object.values(o.inlineCaptures),
					...Object.values(o.headlessCaptures),
				],
				l = (p = o.popupCoordinator) == null ? void 0 : p.getSnapshot(),
				c = (l == null ? void 0 : l.context.eligibleSurveys) ?? [],
				d =
					!!l &&
					!["Init", "NoConsent", "CheckCookieSupport", "Failed"].includes(
						String(l.value),
					),
				u =
					(l == null ? void 0 : l.value) === "Idle"
						? null
						: l == null
							? void 0
							: l.context.selectedSurvey;
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
					language: (f = o.state) == null ? void 0 : f._l,
					currentState: s,
					cookieSupport: !!t.getItem("skyra.state"),
				},
				details: o.surveys
					.filter((h) => !n || h.fullSlug === n)
					.map((h) => {
						var $, D, re, Y, fe, Gn, ft, ht, po;
						const g = ($ = o.state) == null ? void 0 : $[h.fullSlug],
							b =
								(D = l == null ? void 0 : l.context.cookieState) == null
									? void 0
									: D[h.fullSlug],
							v =
								b && typeof b.state == "string"
									? { state: b.state, lastSync: b.lastSync }
									: void 0,
							_ = Hn({
								traits: o.traits,
								language: (re = o.state) == null ? void 0 : re._l,
								locale: (Y = o.state) == null ? void 0 : Y._l,
							}),
							x = Uc(h.audienceRules, _, h.audienceRuleMode),
							S = a.find((le) => le.id.startsWith(`capture-${h.fullSlug}-`));
						let A = null;
						if (S) {
							const le = S.getSnapshot();
							A = {
								id: S.id,
								state:
									typeof le.value == "string"
										? le.value
										: JSON.stringify(le.value),
								status: le.status,
								currentCard:
									(Gn = (fe = le.context) == null ? void 0 : fe.state) == null
										? void 0
										: Gn.currentCard,
								totalCards:
									(po =
										(ht = (ft = le.context) == null ? void 0 : ft.survey) ==
										null
											? void 0
											: ht.cards) == null
										? void 0
										: po.length,
							};
						}
						const I = c.some((le) => le.fullSlug === h.fullSlug),
							O = o.inlineSurveys.some((le) => le.fullSlug === h.fullSlug),
							M =
								h.renderType === "Popup" && d
									? I
										? "eligible"
										: "ineligible"
									: "not-evaluated",
							N = h.renderType === "Popup" && u === h.fullSlug,
							B =
								h.renderType === "Popup" && l
									? [
											...I_(h, l.context.url, v),
											...Uc(
												h.audienceRules,
												Hn({
													traits: l.context.traits,
													language: xt(h, l.context.language, l.context.locale),
													locale: l.context.locale,
												}),
												h.audienceRuleMode,
											),
										]
									: x;
						return (
							h.renderType === "Popup" &&
								!o.consent &&
								B.unshift("Waiting for cookie consent"),
							h.renderType === "Popup" &&
								(o.popupHidden ||
									o.hiddenPopupSurveys.some(
										(le) => le.id === h.id || le.fullSlug === h.fullSlug,
									)) &&
								B.unshift("Popup hidden by the host page"),
							h.renderType === "Popup" &&
								I &&
								!N &&
								u &&
								B.push("Another popup is the current candidate"),
							{
								slug: h.fullSlug,
								id: h.id,
								name: h.name,
								renderType: h.renderType,
								isLive: h.isLive,
								publishingState: h.publishingState,
								numCards: h.numCards,
								eligible: I || O,
								eligibility: M,
								popupCandidate: N,
								capturePercent: h.capturePercent,
								priorityScore: h.priorityScore,
								reasons: B,
								state: g
									? {
											state: String(g.state),
											sessionId: g.sessionId,
											lastSync: g.lastSync
												? new Date(g.lastSync).toISOString()
												: void 0,
										}
									: null,
								captureMachine: A,
							}
						);
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
	function Iu(e, t) {
		return new $_(e, t);
	}
	const E_ = Un({
		actors: {
			captureMachine: wu.provide({
				actions: { storeCookieState: () => {}, clearCookieState: () => {} },
				actors: {
					postCardValue: Se(async () => {}),
					postAcceptedAnswer: Se(async () => {}),
				},
			}),
			loadSurveys: d_,
			loadFullSurveys: Fi,
			renderSurvey: gu,
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
			visitorId: Be(),
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
												visitorId: Be(),
												sessionId: Be(),
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
											me(({ event: e }) => {
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
	function R_(e, t) {
		return t === "classic" || t === "beta" ? t : "classic";
	}
	function M_(e, t, n = "classic") {
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
	function Hi(e, t) {
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
			rendererVariant: R_(r, n.rendererVariant),
			rendererVariantExplicit: n.rendererVariant !== void 0,
			traits: n.traits,
			surveyOverrides: n.surveyOverrides,
		};
	}
	function $u(e) {
		return e.split("/")[0];
	}
	const A_ = [
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
	function P_(e) {
		const t = e.split(".");
		if (t.length === 1) return t[0];
		if (t.length === 2) return t.join(".");
		if (t.length > 2)
			return A_.includes(t.slice(-2).join(".")) ||
				["com", "net", "org", "gov", "edu", "mil", "co"].includes(t.at(-2))
				? t.slice(-3).join(".")
				: t.slice(-2).join(".");
		console.error("Invalid hostname:", e);
	}
	class O_ {
		constructor(t) {
			this.api = t;
		}
		async init(t) {
			var l;
			const n = t.survey,
				r = n.split("/");
			if (r.length !== 2 || r.some((c) => !c))
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
				(l = o.getSnapshot().context.surveys) == null
					? void 0
					: l.find((c) => c.fullSlug === n);
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
						o = Zn(r.cards, n.context.state, n.context.audienceContext);
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
							a = i.context.survey.cards.find((c) => c.order === s);
						if ((a == null ? void 0 : a.id) !== n.cardId) {
							o(new Error(`Card "${n.cardId}" is not the current card`));
							return;
						}
						const l = t.subscribe((c) => {
							(c.status === "done" || c.context.state.currentCard !== s) &&
								(l.unsubscribe(), r());
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
						const l = t.getSnapshot();
						if (
							l.value === "Ready" ||
							(typeof l.value == "object" && "Ready" in l.value)
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
					l = setInterval(() => {
						var u;
						const c =
							(u = t.getSnapshot().context.headlessFailures) == null
								? void 0
								: u[n];
						if (c) {
							clearInterval(l), i(new Error(c.message));
							return;
						}
						const d = t.findCaptureBySlug(n);
						if (d) {
							clearInterval(l), o(d);
							return;
						}
						Date.now() - a > r &&
							(clearInterval(l),
							i(
								new Error(
									`Timeout waiting for capture machine for survey ${n}`,
								),
							));
					}, 50);
			});
		}
	}
	class L_ {
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
				const l = new Date(Date.now() + s.expires * 1e3);
				a += `; Expires=${l.toUTCString()}`;
			}
			s.path && (a += `; Path=${s.path}`),
				s.domain && (a += `; Domain=${s.domain}`),
				Je(`Cookie size: ${a.length} bytes`),
				Je(n),
				(document.cookie = a);
		}
		removeItem(t, n) {
			this.setItem(t, "", { ...n, expires: -1 });
		}
	}
	function N_(e, t, n = "REDACTED") {
		return t.reduce((r, o) => {
			var s;
			const i = new URL(r);
			if (o.type === "Path") {
				const a = i.pathname.split("/"),
					l = o.path.split("/");
				if (
					l.every((d, u) =>
						d === ":redacted" || d === ":keep" ? !0 : a[u] === d,
					)
				) {
					const d = a.map((u, p) =>
						l[p] === ":redacted" ? n : (l[p] === ":keep", u),
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
	const j_ = !1;
	let Zi;
	const Wn = k({
			state: L([
				"Completed",
				"Capture",
				"Selected",
				"Rejected",
				"NotSelected",
			]).or(se(m(), Tn())),
			sessionId: m().optional(),
			lastSync: U().optional(),
		}),
		Ct = k({ _id: m(), _l: m().optional() }).catchall(Wn.optional());
	class B_ {
		constructor() {
			(this.config = {}),
				(this.urlRedactions = []),
				(this.explicitLanguages = new Map()),
				(this.events = Rd()),
				(this._debugEnabled = j_),
				(this.injectUsed = !1);
			const t = window.location.hostname,
				n = t.match(/^\d+\.\d+\.\d+\.\d+$/),
				r = window.SKYRA_CONFIG || {},
				o = (r == null ? void 0 : r.cookieDomain) ?? P_(t);
			Je("Cookie settings:", { isIp: n, tld: o }),
				(this.cookieStorage = new L_({
					domain: n ? void 0 : o,
					expires: 31536e3,
					path: "/",
				})),
				"skyraStart" in window &&
					typeof window.skyraStart == "function" &&
					setTimeout(() => {
						window.skyraStart();
					}, 0),
				(this.unstable_headless = new O_(this));
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
				? M_(this.normalizedConfig, t, n)
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
				r = Hi(n, t);
			this.normalizedConfig = r;
			const o = window.location.href;
			return (
				document.querySelector(r.selector) ||
					console.error(
						`[Skyra] Could not find DOM element with selector "${r.selector}"`,
					),
				(this._adapter = Iu(
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
					Zi,
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
			const r = $u(t);
			if (
				((this.normalizedConfig = Hi(window.SKYRA_CONFIG || {}, { org: r })),
				this.previewMachine)
			)
				this.previewMachine.send({ type: "setOrg", org: r });
			else {
				const i = window.location.href;
				(this.previewMachine = Ht(E_, {
					inspect: Zi,
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
			const s = $u(t),
				a = window.location.href,
				l = window.SKYRA_CONFIG || {};
			this.normalizedConfig = Hi(l, { org: s });
			const c = Iu(
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
				Zi,
			);
			(this._adapter = c),
				c.start(),
				c.on("ready", () => {
					c.send({ type: "startSurvey", slug: t });
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
			return N_(window.location.href, this.urlRedactions);
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
				const l = a.eligible ? "✅" : "❌",
					d =
						(((s = a.issues) == null ? void 0 : s.length) ?? 0) > 0 ? "!" : "";
				(a.eligible ? console.group : console.groupCollapsed)(
					`${l} ${d} ${a.slug} (${a.renderType})`,
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
			return Jr.parse(r.survey);
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
					const h = Wn.parse(JSON.parse(s));
					if (h.sessionId) {
						const g = await this.fetchSurvey(n);
						return { sessionId: h.sessionId, surveyId: g.id };
					}
				} catch {}
			const a = this.cookieStorage.getItem("skyra.state");
			let l;
			if (a)
				try {
					l = Ct.parse(JSON.parse(a))._id || Be();
				} catch {
					l = Be();
				}
			else
				(l = Be()),
					this.cookieStorage.setItem("skyra.state", JSON.stringify({ _id: l }));
			const c = await this.fetchSurvey(n),
				d = Be();
			let u = "unknown";
			"connection" in navigator &&
				(u =
					(f = navigator == null ? void 0 : navigator.connection) == null
						? void 0
						: f.effectiveType),
				await tn(
					{
						event: "SessionInit",
						survey: c.id,
						visitor: l,
						session: d,
						ua: navigator.userAgent,
						screenSize: [window.screen.width, window.screen.height],
						pixelRatio: window.devicePixelRatio,
						connection: u,
						languageCode: this.getLanguage(),
					},
					{ apiHost: this.apiHost },
				);
			const p = Wn.parse({
				sessionId: d,
				state: "Capture",
				lastSync: Date.now(),
			});
			return (
				this.cookieStorage.setItem(i, JSON.stringify(p)),
				{ sessionId: d, surveyId: c.id }
			);
		}
		async unstable_postCardValue(t) {
			const { survey: n, card: r, value: o, complete: i } = t,
				[s, a] = n.split("/");
			if (!s || !a)
				throw new Error(
					'Invalid survey slug format. Expected "org/survey-name"',
				);
			const l = `skyra.${n.replace(/\//g, ".")}`,
				c = this.cookieStorage.getItem(l);
			if (!c)
				throw new Error("No session found. Call unstable_sessionInit first.");
			let d;
			try {
				if (((d = Wn.parse(JSON.parse(c)).sessionId ?? ""), !d))
					throw new Error("Invalid session state");
			} catch {
				throw new Error(
					"Invalid session state. Call unstable_sessionInit first.",
				);
			}
			const u = this.cookieStorage.getItem("skyra.state");
			if (!u) throw new Error("No visitor ID found");
			const { _id: p } = Ct.parse(JSON.parse(u)),
				f = await this.fetchSurvey(n),
				h = f.cards.find((v) => v.id === r);
			if (!h) throw new Error(`Card ${r} not found in survey ${n}`);
			const { type: g, order: b } = h;
			if (!g) throw new Error(`Card ${r} is missing type information`);
			try {
				const v = {
						event: "CardValue",
						survey: f.id,
						visitor: p,
						session: d,
						card: r,
						type: g,
						url: this.getUrl(),
						value: o,
						languageCode: this.getLanguage(),
						cardOrder: b,
					},
					_ = Tr.parse(v);
				await tn(_, { apiHost: this.apiHost });
				const x = Wn.parse({
					sessionId: d,
					state: "Capture",
					lastSync: Date.now(),
				});
				this.cookieStorage.setItem(l, JSON.stringify(x)),
					i && this.cookieStorage.removeItem(l);
			} catch (v) {
				if (v instanceof Gm) {
					const _ = v.issues.map((x) => x.message).join(", ");
					throw new Error(`Invalid card value: ${_}`);
				}
				throw v;
			}
		}
	}
	var D_ = Symbol.for("preact-signals");
	function no() {
		if (ut > 1) ut--;
		else {
			for (var e, t = !1; qn !== void 0; ) {
				var n = qn;
				for (qn = void 0, Vi++; n !== void 0; ) {
					var r = n.o;
					if (((n.o = void 0), (n.f &= -3), !(8 & n.f) && Pu(n)))
						try {
							n.c();
						} catch (o) {
							t || ((e = o), (t = !0));
						}
					n = r;
				}
			}
			if (((Vi = 0), ut--, t)) throw e;
		}
	}
	function Eu(e) {
		if (ut > 0) return e();
		ut++;
		try {
			return e();
		} finally {
			no();
		}
	}
	var V = void 0;
	function Ru(e) {
		var t = V;
		V = void 0;
		try {
			return e();
		} finally {
			V = t;
		}
	}
	var qn = void 0,
		ut = 0,
		Vi = 0,
		ro = 0;
	function Mu(e) {
		if (V !== void 0) {
			var t = e.n;
			if (t === void 0 || t.t !== V)
				return (
					(t = {
						i: 0,
						S: e,
						p: V.s,
						n: void 0,
						t: V,
						e: void 0,
						x: void 0,
						r: t,
					}),
					V.s !== void 0 && (V.s.n = t),
					(V.s = t),
					(e.n = t),
					32 & V.f && e.S(t),
					t
				);
			if (t.i === -1)
				return (
					(t.i = 0),
					t.n !== void 0 &&
						((t.n.p = t.p),
						t.p !== void 0 && (t.p.n = t.n),
						(t.p = V.s),
						(t.n = void 0),
						(V.s.n = t),
						(V.s = t)),
					t
				);
		}
	}
	function pe(e, t) {
		(this.v = e),
			(this.i = 0),
			(this.n = void 0),
			(this.t = void 0),
			(this.W = t == null ? void 0 : t.watched),
			(this.Z = t == null ? void 0 : t.unwatched),
			(this.name = t == null ? void 0 : t.name);
	}
	(pe.prototype.brand = D_),
		(pe.prototype.h = function () {
			return !0;
		}),
		(pe.prototype.S = function (e) {
			var t = this,
				n = this.t;
			n !== e &&
				e.e === void 0 &&
				((e.x = n),
				(this.t = e),
				n !== void 0
					? (n.e = e)
					: Ru(function () {
							var r;
							(r = t.W) == null || r.call(t);
						}));
		}),
		(pe.prototype.U = function (e) {
			var t = this;
			if (this.t !== void 0) {
				var n = e.e,
					r = e.x;
				n !== void 0 && ((n.x = r), (e.e = void 0)),
					r !== void 0 && ((r.e = n), (e.x = void 0)),
					e === this.t &&
						((this.t = r),
						r === void 0 &&
							Ru(function () {
								var o;
								(o = t.Z) == null || o.call(t);
							}));
			}
		}),
		(pe.prototype.subscribe = function (e) {
			var t = this;
			return ln(
				function () {
					var n = t.value,
						r = V;
					V = void 0;
					try {
						e(n);
					} finally {
						V = r;
					}
				},
				{ name: "sub" },
			);
		}),
		(pe.prototype.valueOf = function () {
			return this.value;
		}),
		(pe.prototype.toString = function () {
			return this.value + "";
		}),
		(pe.prototype.toJSON = function () {
			return this.value;
		}),
		(pe.prototype.peek = function () {
			var e = V;
			V = void 0;
			try {
				return this.value;
			} finally {
				V = e;
			}
		}),
		Object.defineProperty(pe.prototype, "value", {
			get: function () {
				var e = Mu(this);
				return e !== void 0 && (e.i = this.i), this.v;
			},
			set: function (e) {
				if (e !== this.v) {
					if (Vi > 100) throw new Error("Cycle detected");
					(this.v = e), this.i++, ro++, ut++;
					try {
						for (var t = this.t; t !== void 0; t = t.x) t.t.N();
					} finally {
						no();
					}
				}
			},
		});
	function Au(e, t) {
		return new pe(e, t);
	}
	function Pu(e) {
		for (var t = e.s; t !== void 0; t = t.n)
			if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
		return !1;
	}
	function Ou(e) {
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
	function Lu(e) {
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
	function zt(e, t) {
		pe.call(this, void 0),
			(this.x = e),
			(this.s = void 0),
			(this.g = ro - 1),
			(this.f = 4),
			(this.W = t == null ? void 0 : t.watched),
			(this.Z = t == null ? void 0 : t.unwatched),
			(this.name = t == null ? void 0 : t.name);
	}
	(zt.prototype = new pe()),
		(zt.prototype.h = function () {
			if (((this.f &= -3), 1 & this.f)) return !1;
			if ((36 & this.f) == 32 || ((this.f &= -5), this.g === ro)) return !0;
			if (((this.g = ro), (this.f |= 1), this.i > 0 && !Pu(this)))
				return (this.f &= -2), !0;
			var e = V;
			try {
				Ou(this), (V = this);
				var t = this.x();
				(16 & this.f || this.v !== t || this.i === 0) &&
					((this.v = t), (this.f &= -17), this.i++);
			} catch (n) {
				(this.v = n), (this.f |= 16), this.i++;
			}
			return (V = e), Lu(this), (this.f &= -2), !0;
		}),
		(zt.prototype.S = function (e) {
			if (this.t === void 0) {
				this.f |= 36;
				for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
			}
			pe.prototype.S.call(this, e);
		}),
		(zt.prototype.U = function (e) {
			if (
				this.t !== void 0 &&
				(pe.prototype.U.call(this, e), this.t === void 0)
			) {
				this.f &= -33;
				for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
			}
		}),
		(zt.prototype.N = function () {
			if (!(2 & this.f)) {
				this.f |= 6;
				for (var e = this.t; e !== void 0; e = e.x) e.t.N();
			}
		}),
		Object.defineProperty(zt.prototype, "value", {
			get: function () {
				if (1 & this.f) throw new Error("Cycle detected");
				var e = Mu(this);
				if ((this.h(), e !== void 0 && (e.i = this.i), 16 & this.f))
					throw this.v;
				return this.v;
			},
		});
	function Nu(e, t) {
		return new zt(e, t);
	}
	function ju(e) {
		var t = e.u;
		if (((e.u = void 0), typeof t == "function")) {
			ut++;
			var n = V;
			V = void 0;
			try {
				t();
			} catch (r) {
				throw ((e.f &= -2), (e.f |= 8), Wi(e), r);
			} finally {
				(V = n), no();
			}
		}
	}
	function Wi(e) {
		for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
		(e.x = void 0), (e.s = void 0), ju(e);
	}
	function F_(e) {
		if (V !== this) throw new Error("Out-of-order effect");
		Lu(this), (V = e), (this.f &= -2), 8 & this.f && Wi(this), no();
	}
	function an(e, t) {
		(this.x = e),
			(this.u = void 0),
			(this.s = void 0),
			(this.o = void 0),
			(this.f = 32),
			(this.name = t == null ? void 0 : t.name);
	}
	(an.prototype.c = function () {
		var e = this.S();
		try {
			if (8 & this.f || this.x === void 0) return;
			var t = this.x();
			typeof t == "function" && (this.u = t);
		} finally {
			e();
		}
	}),
		(an.prototype.S = function () {
			if (1 & this.f) throw new Error("Cycle detected");
			(this.f |= 1), (this.f &= -9), ju(this), Ou(this), ut++;
			var e = V;
			return (V = this), F_.bind(this, e);
		}),
		(an.prototype.N = function () {
			2 & this.f || ((this.f |= 2), (this.o = qn), (qn = this));
		}),
		(an.prototype.d = function () {
			(this.f |= 8), 1 & this.f || Wi(this);
		}),
		(an.prototype.dispose = function () {
			this.d();
		});
	function ln(e, t) {
		var n = new an(e, t);
		try {
			n.c();
		} catch (o) {
			throw (n.d(), o);
		}
		var r = n.d.bind(n);
		return (r[Symbol.dispose] = r), r;
	}
	var qi,
		oo,
		U_ = typeof window < "u" && !!window.__PREACT_SIGNALS_DEVTOOLS__,
		Bu = [],
		Du = [];
	ln(function () {
		qi = this.N;
	})();
	function cn(e, t) {
		H[e] = t.bind(null, H[e] || function () {});
	}
	function io(e) {
		if (oo) {
			var t = oo;
			(oo = void 0), t();
		}
		oo = e && e.S();
	}
	function Fu(e) {
		var t = this,
			n = e.data,
			r = Ue(n);
		r.value = n;
		var o = Et(function () {
				for (var a = t, l = t.__v; (l = l.__); )
					if (l.__c) {
						l.__c.__$f |= 4;
						break;
					}
				var c = Nu(function () {
						var f = r.value.value;
						return f === 0 ? 0 : f === !0 ? "" : f || "";
					}),
					d = Nu(function () {
						return !Array.isArray(c.value) && !es(c.value);
					}),
					u = ln(function () {
						if (((this.N = Uu), d.value)) {
							var f = c.value;
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
					[d, c]
				);
			}, []),
			i = o[0],
			s = o[1];
		return i.value ? s.peek() : s.value;
	}
	(Fu.displayName = "ReactiveTextNode"),
		Object.defineProperties(pe.prototype, {
			constructor: { configurable: !0, value: void 0 },
			type: { configurable: !0, value: Fu },
			props: {
				configurable: !0,
				get: function () {
					return { data: this };
				},
			},
			__b: { configurable: !0, value: 1 },
		}),
		cn("__b", function (e, t) {
			if (typeof t.type == "string") {
				var n,
					r = t.props;
				for (var o in r)
					if (o !== "children") {
						var i = r[o];
						i instanceof pe &&
							(n || (t.__np = n = {}), (n[o] = i), (r[o] = i.peek()));
					}
			}
			e(t);
		}),
		cn("__r", function (e, t) {
			if ((e(t), t.type !== Le)) {
				io();
				var n,
					r = t.__c;
				r &&
					((r.__$f &= -2),
					(n = r.__$u) === void 0 &&
						(r.__$u = n =
							(function (o, i) {
								var s;
								return (
									ln(
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
									U_ && ((o = n.y) == null || o.call(n)),
										(r.__$f |= 1),
										r.setState({});
								},
								typeof t.type == "function"
									? t.type.displayName || t.type.name
									: "",
							))),
					io(n);
			}
		}),
		cn("__e", function (e, t, n, r) {
			io(), e(t, n, r);
		}),
		cn("diffed", function (e, t) {
			io();
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
					for (var l in r) {
						var c = i[l],
							d = r[l];
						c === void 0 ? ((c = H_(n, l, d, o)), (i[l] = c)) : c.o(d, o);
					}
				}
			}
			e(t);
		});
	function H_(e, t, n, r) {
		var o = t in e && e.ownerSVGElement === void 0,
			i = Au(n);
		return {
			o: function (s, a) {
				(i.value = s), (r = a);
			},
			d: ln(function () {
				this.N = Uu;
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
	cn("unmount", function (e, t) {
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
		cn("__h", function (e, t, n, r) {
			(r < 3 || r === 9) && (t.__$f |= 2), e(t, n, r);
		}),
		(gn.prototype.shouldComponentUpdate = function (e, t) {
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
	function Ue(e, t) {
		return Et(function () {
			return Au(e, t);
		}, []);
	}
	var Z_ =
			typeof requestAnimationFrame > "u"
				? setTimeout
				: function (e) {
						var t = function () {
								clearTimeout(n), cancelAnimationFrame(r), e();
							},
							n = setTimeout(t, 35),
							r = requestAnimationFrame(t);
					},
		V_ = function (e) {
			queueMicrotask(function () {
				queueMicrotask(e);
			});
		};
	function W_() {
		Eu(function () {
			for (var e; (e = Bu.shift()); ) qi.call(e);
		});
	}
	function q_() {
		Bu.push(this) === 1 && (H.requestAnimationFrame || Z_)(W_);
	}
	function K_() {
		Eu(function () {
			for (var e; (e = Du.shift()); ) qi.call(e);
		});
	}
	function Uu() {
		Du.push(this) === 1 && (H.requestAnimationFrame || V_)(K_);
	}
	function Hu(e, t) {
		var n = X(e);
		(n.current = e),
			ie(function () {
				return ln(function () {
					return (this.N = q_), n.current();
				}, t);
			}, []);
	}
	function J_(e, t) {
		return e === t;
	}
	function _e(e, t, n = J_) {
		const r = X(t),
			o = X(n);
		(r.current = t), (o.current = n);
		const [i, s] = ge(() => (e ? t(e.getSnapshot()) : void 0));
		return (
			ie(() => {
				if (!e) return;
				const a = () => {
					const c = r.current(e.getSnapshot());
					s((d) => (o.current(d, c) ? d : c));
				};
				a();
				const { unsubscribe: l } = e.subscribe(a);
				return l;
			}, [e]),
			i
		);
	}
	var G_ = 0;
	function y(e, t, n, r, o, i) {
		t || (t = {});
		var s,
			a,
			l = t;
		if ("ref" in l)
			for (a in ((l = {}), t)) a == "ref" ? (s = t[a]) : (l[a] = t[a]);
		var c = {
			type: e,
			props: l,
			key: n,
			ref: s,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__c: null,
			constructor: void 0,
			__v: --G_,
			__i: -1,
			__u: 0,
			__source: o,
			__self: i,
		};
		if (typeof e == "function" && (s = e.defaultProps))
			for (a in s) l[a] === void 0 && (l[a] = s[a]);
		return H.vnode && H.vnode(c), c;
	}
	const Kn = _d(void 0),
		Y_ = ({ survey: e, state: t, children: n, api: r, captureMachine: o }) => {
			const i = Ue(!0);
			Hu(() => {
				if (i.value === !1) {
					const l = setTimeout(() => {
						i.value = !0;
					}, 500);
					return () => clearTimeout(l);
				}
			});
			const s = _e(o, (l) => l.context.language),
				a = Et(() => c0(e, s), [e, s]);
			return y(Kn.Provider, {
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
	function so() {
		const e = tr(Kn);
		if (!e) throw new Error("useSurvey must be used within a SkyraProvider");
		return e.survey;
	}
	function X_() {
		const e = tr(Kn);
		if (!e)
			throw new Error("useSessionState must be used within a SkyraProvider");
		return e.state;
	}
	function Ki() {
		const e = tr(Kn);
		if (!e)
			throw new Error("useCaptureMachine must be used within a SkyraProvider");
		return e.captureMachine;
	}
	function dt() {
		const e = tr(Kn);
		if (!e)
			throw new Error("useCardValidState must be used within a SkyraProvider");
		return e.cardValidState;
	}
	function un() {
		const e = Ki();
		return _e(e, (n) => n.context.language);
	}
	function He({
		card: e,
		children: t,
		chrome: n,
		showHeader: r = !0,
		inline: o = !1,
	}) {
		const i = X(null),
			s = X(null);
		return (
			ie(() => {
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
				const l = (p) => n.onLanguageChange(p.detail.language),
					c = () => n.onMinimize(),
					d = () => n.onClose();
				return (
					a.addEventListener("skyra-language-change", l),
					a.addEventListener("skyra-minimize", c),
					a.addEventListener("skyra-close", d),
					() => {
						a.removeEventListener("skyra-language-change", l),
							a.removeEventListener("skyra-minimize", c),
							a.removeEventListener("skyra-close", d);
					}
				);
			}, [n]),
			y("skyra-survey-card", {
				ref: i,
				mode: o ? "inline" : "popup",
				children: [
					y("skyra-survey-chrome", {
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
						? y("skyra-survey-message-content", {
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
	const Zu = {
		en: { up: "Scroll up", down: "Scroll down" },
		no: { up: "Rull opp", down: "Rull ned" },
		nn: { up: "Rull opp", down: "Rull ned" },
		sv: { up: "Rulla upp", down: "Rulla ned" },
		de: { up: "Nach oben scrollen", down: "Nach unten scrollen" },
		pt: { up: "Rolar para cima", down: "Rolar para baixo" },
	};
	function ao(e) {
		return Zu[e ?? "en"] ?? Zu.en;
	}
	function Ae(e, t, n) {
		ie(() => {
			const r = e.current;
			if (!r) return;
			const o = (i) => n(i.detail);
			return r.addEventListener(t, o), () => r.removeEventListener(t, o);
		}, [n, t, e]);
	}
	function pt(e, t, n) {
		kd(() => {
			const r = e.current;
			r && (r[t] = n);
		}, [t, e, n]);
	}
	function Q_({ card: e, chrome: t, next: n, survey: r, texts: o }) {
		const i = X(null);
		return (
			Ae(i, "skyra-completion-select", ({ value: s }) => n(s)),
			Ae(i, "skyra-completion-reply-later", () => t.onMinimize()),
			y(He, {
				card: e,
				chrome: t,
				inline: r.renderType === "Inline",
				showHeader: !1,
				children: y("skyra-survey-completion-content", {
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
	function ek({ card: e, chrome: t, next: n, survey: r }) {
		const o = X(null);
		return (
			Ae(o, "skyra-completion-select", ({ value: i }) => n(i)),
			y(He, {
				card: e,
				chrome: t,
				inline: r.renderType === "Inline",
				showHeader: !1,
				children: y("skyra-survey-completion-content", {
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
	function Vu(e) {
		var t,
			n,
			r = "";
		if (typeof e == "string" || typeof e == "number") r += e;
		else if (typeof e == "object")
			if (Array.isArray(e)) {
				var o = e.length;
				for (t = 0; t < o; t++)
					e[t] && (n = Vu(e[t])) && (r && (r += " "), (r += n));
			} else for (n in e) e[n] && (r && (r += " "), (r += n));
		return r;
	}
	function tk() {
		for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
			(e = arguments[n]) && (t = Vu(e)) && (r && (r += " "), (r += t));
		return r;
	}
	const Wu = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
		qu = tk,
		lo = (e, t) => (n) => {
			var r;
			if ((t == null ? void 0 : t.variants) == null)
				return qu(
					e,
					n == null ? void 0 : n.class,
					n == null ? void 0 : n.className,
				);
			const { variants: o, defaultVariants: i } = t,
				s = Object.keys(o).map((c) => {
					const d = n == null ? void 0 : n[c],
						u = i == null ? void 0 : i[c];
					if (d === null) return null;
					const p = Wu(d) || Wu(u);
					return o[c][p];
				}),
				a =
					n &&
					Object.entries(n).reduce((c, d) => {
						let [u, p] = d;
						return p === void 0 || (c[u] = p), c;
					}, {}),
				l =
					t == null || (r = t.compoundVariants) === null || r === void 0
						? void 0
						: r.reduce((c, d) => {
								let { class: u, className: p, ...f } = d;
								return Object.entries(f).every((h) => {
									let [g, b] = h;
									return Array.isArray(b)
										? b.includes({ ...i, ...a }[g])
										: { ...i, ...a }[g] === b;
								})
									? [...c, u, p]
									: c;
							}, []);
			return qu(
				e,
				s,
				l,
				n == null ? void 0 : n.class,
				n == null ? void 0 : n.className,
			);
		};
	function Ku({ label: e, placeholder: t, heading: n, usePlaceholder: r }) {
		return (
			(r ? (t == null ? void 0 : t.trim()) : e == null ? void 0 : e.trim()) ||
			(e == null ? void 0 : e.trim()) ||
			n
		);
	}
	const Ju = lo(
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
	function Gu(e) {
		return e
			? {
					onKeyDown: (t) => {
						t.key === "Enter" && t.metaKey && e && e();
					},
				}
			: {};
	}
	function co({
		label: e,
		labelHidden: t = !1,
		className: n,
		metaEnter: r,
		style: o,
		...i
	}) {
		return y("label", {
			class: "flex flex-col gap-1",
			children: [
				y("span", {
					className: t ? "sr-only" : "font-bold text-xs",
					children: e,
				}),
				y("input", {
					className: Ju({ className: n }),
					style: {
						borderRadius: "var(--skyra-radius-md, var(--skyra-radius-lg, 4px))",
						...(typeof o == "object" ? o : {}),
					},
					...Gu(r),
					...i,
				}),
			],
		});
	}
	const nk = ({
		label: e,
		labelHidden: t = !1,
		className: n,
		metaEnter: r,
		style: o,
		...i
	}) =>
		y("label", {
			class: "flex flex-col gap-1",
			children: [
				y("span", {
					className: t ? "sr-only" : "font-bold text-xs",
					children: e,
				}),
				y("textarea", {
					className: Ju({ className: n }),
					style: {
						borderRadius: "var(--skyra-radius-md, var(--skyra-radius-lg, 4px))",
						...(typeof o == "object" ? o : {}),
					},
					...Gu(r),
					...i,
				}),
			],
		});
	function rk({
		card: e,
		chrome: t,
		firstCard: n,
		next: r,
		prev: o,
		storedValue: i,
		survey: s,
		texts: a,
	}) {
		const [l, c] = ge(typeof i == "string" ? i : ""),
			[d, u] = ge(!1),
			p = dt(),
			f = un(),
			h = X(null);
		Ae(h, "skyra-input-change", ({ value: A }) => c(A));
		const g = Yc({
				content: l,
				card: {
					minLength: e.minLength ?? 0,
					maxLength: e.maxLength ?? void 0,
					validations: e.validations ?? [],
				},
				hasBeenTouched: d,
				language: f,
			}),
			b = e.maxLength ?? void 0,
			v = qc({ min: e.minLength ?? 0, max: b, language: f }),
			_ = d && g.status === "under-minimum",
			x = d && !g.valid && g.status !== "under-minimum";
		function S() {
			u(!0), (p.value = g.valid), g.valid && r(l);
		}
		return y(He, {
			card: e,
			chrome: t,
			inline: s.renderType === "Inline",
			showHeader: !1,
			children: [
				y("skyra-survey-input-content", {
					ref: h,
					heading: e.name,
					label: Ku({
						label: e.label,
						placeholder: e.placeholder,
						heading: e.name,
						usePlaceholder: s.surveyType === "Findability",
					}),
					body: e.body ?? "",
					"body-html": e.bodyHtml ?? "",
					name: "value",
					placeholder: e.placeholder ?? "",
					value: l,
					multiline: !!e.multiline,
					invalid: d && !g.valid,
					instruction: v ?? "",
					"instruction-invalid": _,
					"character-count": typeof b == "number" ? `${l.length}/${b}` : "",
					"max-length": b,
					error: x ? g.errorMessage : "",
				}),
				y("skyra-survey-actions", {
					align: n ? "end" : "between",
					children: [
						!n && y("skyra-survey-button", { onClick: o, children: a.back }),
						y("skyra-survey-button", {
							variant: "primary",
							onClick: S,
							children: a.next,
						}),
					],
				}),
			],
		});
	}
	function ok({
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
		const l = "likertItems" in e.likertScale ? e.likertScale.likertItems : [],
			c =
				typeof o == "string"
					? (f = l.find((h) => h.id === o || te(h.id) === o)) == null
						? void 0
						: f.id
					: void 0,
			[d, u] = ge(c),
			p = X(null);
		return (
			pt(
				p,
				"choices",
				l.map((h) => {
					var g;
					return {
						id: h.id,
						label: h.label,
						emoji: e.showEmoji
							? (((g = h.emoji) == null ? void 0 : g.native) ?? void 0)
							: void 0,
					};
				}),
			),
			Ae(p, "skyra-likert-select", ({ value: h }) => {
				u(h), a(h, e.id);
			}),
			ie(() => u(c), [c]),
			y(He, {
				card: e,
				chrome: t,
				inline: i.renderType === "Inline",
				showHeader: !1,
				children: [
					y("skyra-survey-likert-content", {
						ref: p,
						heading: e.name,
						body: e.body ?? "",
						"body-html": e.bodyHtml ?? "",
						"selected-value": d ?? "",
						layout:
							e.optionsLayout === "horizontal" ? "horizontal" : "vertical",
					}),
					!n &&
						y("skyra-survey-actions", {
							children: y("skyra-survey-button", {
								onClick: r,
								children: s.back,
							}),
						}),
				],
			})
		);
	}
	function ik({
		card: e,
		chrome: t,
		finalCard: n,
		firstCard: r,
		next: o,
		prev: i,
		survey: s,
		texts: a,
	}) {
		const l = lu(s, e, { firstCard: r, finalCard: n }),
			c = !l && !r;
		return y(He, {
			card: e,
			chrome: t,
			inline: s.renderType === "Inline",
			children: y("skyra-survey-actions", {
				align: l || c ? "between" : "end",
				children: [
					l
						? y("skyra-survey-button", { onClick: t.onClose, children: l })
						: c
							? y("skyra-survey-button", { onClick: i, children: a.back })
							: null,
					y("skyra-survey-button", {
						variant: "primary",
						onClick: () => o(),
						children: a.next,
					}),
				],
			}),
		});
	}
	const Yu = "ABCDEFGHJKMNPQRSTVWXYZ".split(""),
		Xu = {
			en: { min: "Select at least", max: "max", maxOnly: "Max" },
			pt: { min: "Selecione pelo menos", max: "máx.", maxOnly: "Máx." },
			de: { min: "Wählen Sie mindestens", max: "max.", maxOnly: "Max." },
			no: { min: "Velg minst", max: "maks", maxOnly: "Maks" },
			nn: { min: "Vel minst", max: "maks", maxOnly: "Maks" },
			sv: { min: "Välj minst", max: "max", maxOnly: "Max" },
		};
	function sk({
		card: e,
		chrome: t,
		firstCard: n,
		next: r,
		prev: o,
		sessionId: i,
		storedValue: s,
		survey: a,
		texts: l,
	}) {
		const c = e.randomize ? Wr(e.selectItems, i) : e.selectItems,
			[d, u] = ge(
				Array.isArray(s)
					? s
							.filter(($) => typeof $ == "string")
							.map(($) => {
								var D;
								return (D = c.find((re) => re.id === $ || te(re.id) === $)) ==
									null
									? void 0
									: D.id;
							})
							.filter(($) => !!$)
					: [],
			),
			[p, f] = ge(!1),
			[h, g] = ge(!1),
			b = dt(),
			v = un(),
			_ = Xu[v ?? "en"] ?? Xu.en,
			x = ao(v),
			S = X(null);
		pt(
			S,
			"options",
			c.map(($, D) => ({ id: $.id, label: $.label, shortcut: Yu[D] })),
		),
			pt(S, "selectedValues", d),
			Ae(S, "skyra-multiselect-change", ({ values: $ }) => {
				g(!1), u($);
			}),
			Ae(S, "skyra-multiselect-limit-reached", () => {
				g(!0);
			});
		const A = Zr({
				selectedCount: d.length,
				card: { min: e.min ?? void 0, max: e.max ?? void 0 },
				hasBeenSubmitted: p,
				language: v,
			}),
			I = h || A.status === "over-max" || (p && !A.valid),
			O = Jc({
				min: e.min ?? void 0,
				max: e.max ?? void 0,
				totalOptions: c.length,
				language: v,
			}),
			M =
				h && e.max
					? Kc({ max: e.max, language: v })
					: I
						? A.errorMessage
						: null,
			N = zs(
				($) => {
					if ($.defaultPrevented || $.altKey || $.ctrlKey || $.metaKey) return;
					const D = $.target;
					if (
						D instanceof HTMLInputElement ||
						D instanceof HTMLTextAreaElement ||
						D instanceof HTMLSelectElement
					)
						return;
					const re = Yu.indexOf($.key.toUpperCase());
					if (re < 0 || re >= c.length) return;
					const Y = c[re].id,
						fe = nu({ selectedValues: d, value: Y, max: e.max ?? void 0 });
					if (fe.limitReached) {
						g(!0);
						return;
					}
					g(!1), u(fe.values);
				},
				[e.max, c, d],
			);
		ie(() => {
			var D;
			const $ = (D = S.current) == null ? void 0 : D.closest(".beta-wrapper");
			if ($)
				return (
					$.addEventListener("keyup", N),
					() => $.removeEventListener("keyup", N)
				);
		}, [N]);
		function B() {
			const $ = Zr({
				selectedCount: d.length,
				card: { min: e.min ?? void 0, max: e.max ?? void 0 },
				hasBeenSubmitted: !0,
				language: v,
			});
			f(!0), (b.value = $.valid), $.valid && r(d);
		}
		return y(He, {
			card: e,
			chrome: t,
			inline: a.renderType === "Inline",
			showHeader: !1,
			children: [
				y("skyra-survey-multiselect-content", {
					ref: S,
					heading: e.name,
					body: e.body ?? "",
					"body-html": e.bodyHtml ?? "",
					layout: e.optionsLayout === "horizontal" ? "horizontal" : "vertical",
					inline: a.renderType === "Inline",
					min: e.min ?? 0,
					max: e.max ?? 0,
					instruction: O ?? "",
					"minimum-label": _.min,
					"maximum-label": _.max,
					"maximum-only-label": _.maxOnly,
					"scroll-up-label": x.up,
					"scroll-down-label": x.down,
					invalid: I,
					error: M ?? "",
				}),
				y("skyra-survey-actions", {
					align: n ? "end" : "between",
					children: [
						!n && y("skyra-survey-button", { onClick: o, children: l.back }),
						y("skyra-survey-button", {
							variant: "primary",
							onClick: B,
							children: l.next,
						}),
					],
				}),
			],
		});
	}
	function ak({
		card: e,
		chrome: t,
		firstCard: n,
		next: r,
		prev: o,
		storedValue: i,
		survey: s,
		texts: a,
	}) {
		const l = typeof i == "object" && i !== null ? i : void 0,
			[c, d] = ge(l ?? {}),
			[u, p] = ge(!1),
			f = dt(),
			h = un(),
			g = X(null),
			b = c.email ?? "",
			v = b ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b) : !1,
			_ = !!(c.email || c.phone || c.name),
			x = Vr({
				email: { value: b, valid: v },
				name: { value: c.name ?? "" },
				phone: { value: c.phone ?? "" },
				consented: !!c.consented,
				consentEnable: !!e.consentEnable,
				isRequired: !!e.isRequired,
				hasBeenSubmitted: u,
				language: h,
			});
		pt(g, "fields", {
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
			pt(g, "value", c),
			Ae(g, "skyra-recruitment-change", ({ value: A }) => d(A));
		function S() {
			const A = Vr({
				email: { value: b, valid: v },
				name: { value: c.name ?? "" },
				phone: { value: c.phone ?? "" },
				consented: !!c.consented,
				consentEnable: !!e.consentEnable,
				isRequired: !!e.isRequired,
				hasBeenSubmitted: !0,
				language: h,
			});
			p(!0), (f.value = A.valid), A.valid && r(_ ? c : void 0);
		}
		return y(He, {
			card: e,
			chrome: t,
			inline: s.renderType === "Inline",
			showHeader: !1,
			children: [
				y("skyra-survey-recruitment-content", {
					ref: g,
					heading: e.name,
					body: e.body ?? "",
					"body-html": e.bodyHtml ?? "",
					invalid: x.status === "email-invalid",
					error:
						x.status === "email-invalid" ||
						x.status === "consent-required" ||
						x.status === "email-required"
							? x.errorMessage
							: "",
				}),
				y("skyra-survey-actions", {
					align: n ? "end" : "between",
					children: [
						!n && y("skyra-survey-button", { onClick: o, children: a.back }),
						y("skyra-survey-button", {
							variant: "primary",
							onClick: S,
							children: a.next,
						}),
					],
				}),
			],
		});
	}
	function lk({
		card: e,
		chrome: t,
		firstCard: n,
		prev: r,
		sessionId: o,
		storedValue: i,
		survey: s,
		texts: a,
		next: l,
	}) {
		var f, h;
		const c = X(null),
			d = e.randomize ? Wr(e.items, o) : e.items,
			u = ao((f = s.language) == null ? void 0 : f.code),
			p =
				typeof i == "string"
					? (((h = d.find((g) => g.value.id === i || te(g.value.id) === i)) ==
						null
							? void 0
							: h.value.id) ?? "")
					: "";
		return (
			pt(
				c,
				"options",
				d.map((g) => ({ id: g.value.id, label: g.label })),
			),
			Ae(c, "skyra-choice-select", ({ value: g }) => l(g, e.segment.id)),
			y(He, {
				card: e,
				chrome: t,
				inline: s.renderType === "Inline",
				showHeader: !1,
				children: [
					y("skyra-survey-choice-content", {
						ref: c,
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
					!n &&
						y("skyra-survey-actions", {
							children: y("skyra-survey-button", {
								onClick: r,
								children: a.back,
							}),
						}),
				],
			})
		);
	}
	function ck({
		card: e,
		chrome: t,
		firstCard: n,
		prev: r,
		sessionId: o,
		storedValue: i,
		survey: s,
		texts: a,
		next: l,
	}) {
		var f, h;
		const c = X(null),
			d = e.randomize ? Wr(e.selectItems, o) : e.selectItems,
			u = ao((f = s.language) == null ? void 0 : f.code),
			p =
				typeof i == "string"
					? (((h = d.find((g) => g.id === i || te(g.id) === i)) == null
							? void 0
							: h.id) ?? "")
					: "";
		return (
			pt(
				c,
				"options",
				d.map((g) => ({ id: g.id, label: g.label })),
			),
			Ae(c, "skyra-choice-select", ({ value: g }) => l(g)),
			y(He, {
				card: e,
				chrome: t,
				inline: s.renderType === "Inline",
				showHeader: !1,
				children: [
					y("skyra-survey-choice-content", {
						ref: c,
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
					!n &&
						y("skyra-survey-actions", {
							children: y("skyra-survey-button", {
								onClick: r,
								children: a.back,
							}),
						}),
				],
			})
		);
	}
	function uk({
		card: e,
		chrome: t,
		firstCard: n,
		prev: r,
		sessionId: o,
		storedValue: i,
		survey: s,
		texts: a,
		next: l,
	}) {
		var f, h;
		const c = X(null),
			d = e.randomize ? Wr(e.taskItems ?? [], o) : (e.taskItems ?? []),
			u = ao((f = s.language) == null ? void 0 : f.code),
			p =
				typeof i == "string"
					? (((h = d.find((g) => g.task.id === i || te(g.task.id) === i)) ==
						null
							? void 0
							: h.task.id) ?? "")
					: "";
		return (
			pt(
				c,
				"options",
				d.map((g) => ({ id: g.task.id, label: g.label })),
			),
			Ae(c, "skyra-choice-select", ({ value: g }) => l(g)),
			y(He, {
				card: e,
				chrome: t,
				inline: s.renderType === "Inline",
				showHeader: !1,
				children: [
					y("skyra-survey-choice-content", {
						ref: c,
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
					!n &&
						y("skyra-survey-actions", {
							children: y("skyra-survey-button", {
								onClick: r,
								children: a.back,
							}),
						}),
				],
			})
		);
	}
	const Qu = {
		en: "Language",
		no: "Språk",
		nn: "Språk",
		sv: "Språk",
		de: "Sprache",
		pt: "Idioma",
	};
	function dk({
		card: e,
		currentLanguage: t,
		enabledLanguages: n,
		finalCard: r,
		firstCard: o,
		minimized: i,
		next: s,
		onClose: a,
		onLanguageChange: l,
		onMaximize: c,
		onMinimize: d,
		prev: u,
		showCloseButton: p,
		showMinimizeButton: f,
		sessionId: h,
		storedValue: g,
		survey: b,
	}) {
		const v = Me(b, e, { finalCard: r }),
			x = {
				chrome: {
					closeLabel: v.close,
					currentLanguage: t,
					enabledLanguages: n,
					languageLabel: Qu[t] ?? Qu.en,
					minimizeLabel: v.hide,
					onClose: a,
					onLanguageChange: l,
					onMinimize: d,
					showCloseButton: p,
					showMinimizeButton: f,
				},
				finalCard: r,
				firstCard: o,
				next: s,
				prev: u,
				storedValue: g,
				survey: b,
				sessionId: h,
				texts: v,
			};
		let S;
		switch (e.type) {
			case "CompletionCard":
				S = y(Q_, { card: e, ...x });
				break;
			case "FindabilityCard":
				S = y(ek, { card: e, ...x });
				break;
			case "InputCard":
				S = y(rk, { card: e, ...x });
				break;
			case "LikertCard":
				S = y(ok, { card: e, ...x });
				break;
			case "MessageCard":
				S = y(ik, { card: e, ...x });
				break;
			case "MultiSelectCard":
				S = y(sk, { card: e, ...x });
				break;
			case "RecruitmentCard":
				S = y(ak, { card: e, ...x });
				break;
			case "SegmentCard":
				S = y(lk, { card: e, ...x });
				break;
			case "SingleSelectCard":
				S = y(ck, { card: e, ...x });
				break;
			case "TopTaskCard":
				S = y(uk, { card: e, ...x });
				break;
			default:
				return null;
		}
		return b.renderType === "Inline"
			? S
			: y("div", {
					className: "beta-transition-container",
					"data-minimized": i ? "true" : "false",
					children: [
						y("div", { className: "beta-transition-content", children: S }),
						y("skyra-survey-pill", {
							className: "beta-transition-pill",
							onClick: c,
							children: v.minimized,
						}),
					],
				});
	}
	const pk =
			':host{color-scheme:light dark}.beta-wrapper{box-sizing:border-box;color:var(--skyra-text-color, #151515);font-family:var(--skyra-font-body, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);font-size:var(--skyra-font-size, 16px);outline:none}.beta-wrapper[data-inline=false]{position:fixed;right:0;bottom:0;left:0;display:flex;align-items:flex-end;justify-content:flex-end;margin:8px;z-index:2147483647}.beta-wrapper[data-inline=false][data-position=BottomLeft]{justify-content:flex-start}.beta-wrapper[data-inline=false][data-position=TopLeft]{top:0;bottom:auto;align-items:flex-start;justify-content:flex-start}.beta-wrapper[data-inline=false][data-position=TopRight]{top:0;bottom:auto;align-items:flex-start}@media(min-width:768px){.beta-wrapper[data-inline=false]{margin:16px}}.beta-wrapper[data-inline=true]{width:100%}@keyframes beta-enter-up{0%{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes beta-enter-down{0%{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}.beta-wrapper.beta-enter-up{animation:beta-enter-up var(--duration, .3s) ease-out both}.beta-wrapper.beta-enter-down{animation:beta-enter-down var(--duration, .3s) ease-out both}@keyframes beta-content-enter{0%{opacity:0}to{opacity:1}}.beta-transition-content{animation:beta-content-enter var(--duration, .3s) ease-out both}.beta-transition-container{width:min(420px,100%)}.beta-transition-pill{display:none;flex:0 1 auto;inline-size:-moz-fit-content;inline-size:fit-content;max-inline-size:100%;min-inline-size:0}.beta-transition-container[data-minimized=true]{display:flex;justify-content:flex-end}.beta-transition-container[data-minimized=true] .beta-transition-content{display:none}.beta-transition-container[data-minimized=true] .beta-transition-pill{display:block;animation:beta-content-enter var(--duration, .3s) ease-out both}.beta-transition-pill::part(label){min-inline-size:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@keyframes beta-shake{0%{transform:translate(0)}25%{transform:translate(-6px)}50%{transform:translate(6px)}75%{transform:translate(-6px)}to{transform:translate(0)}}.beta-wrapper.survey-shake{animation:beta-shake var(--duration, .3s) ease-in-out}@media(prefers-reduced-motion:reduce){.beta-wrapper.survey-shake,.beta-wrapper.beta-enter-up,.beta-wrapper.beta-enter-down,.beta-wrapper[data-inline=false],.beta-transition-content,.beta-transition-pill{animation:none}}',
		ed =
			":host{background:transparent}[data-flow]{--duration: .25s;--duration-fast: .25s;--skyra-app-font-unit: calc(var(--skyra-font-size, 16px) * var(--skyra-app-text-scale, 1) / 16);--skyra-app-base-font-size: var(--skyra-font-size, 16px);--skyra-app-surface: var(--skyra-bg-color);--skyra-app-secondary: var(--skyra-secondary-color, var(--skyra-bg-color));--skyra-app-border: var(--skyra-border-color, var(--skyra-interface-color));--skyra-app-chrome-position: static;--skyra-app-chrome-height: auto;--skyra-app-control-size: 44px;--skyra-app-scroll-height: none;--skyra-app-option-white-space: normal;--skyra-app-likert-columns: repeat(auto-fit, minmax(min(100%, 5em), 1fr));font-size:calc(var(--skyra-font-size, 16px) * var(--skyra-app-text-scale, 1));min-width:0;width:100%}.beta-wrapper[data-flow]{position:static;display:block;margin:0}[data-flow] .survey-container,[data-flow] .beta-transition-container{width:100%;max-width:100%}[data-flow] .survey-container:not([data-minimized=true]){grid-template-columns:minmax(0,1fr);border-radius:var(--skyra-card-radius, var(--skyra-radius-lg, 10px));box-shadow:var(--skyra-card-shadow, var(--skyra-shadow-md, var(--skyra-shadow, none)))}[data-flow] .survey-container[data-minimized=true],[data-flow] .beta-transition-container[data-minimized=true]{box-sizing:border-box;width:-moz-min-content;width:min-content;min-width:75px;max-width:320px}[data-flow] .survey-container[data-minimized=true]{display:block}[data-flow] .beta-transition-pill{flex-shrink:0;inline-size:-moz-min-content;inline-size:min-content;max-inline-size:320px}[data-flow] .beta-transition-pill::part(pill){width:-moz-max-content;width:max-content;max-width:320px}[data-flow] .survey-container[data-minimized=true] .survey-pill{width:-moz-max-content;width:max-content;max-width:100%}[data-flow] .survey-content{min-width:0;width:100%}[data-flow] .survey-container[data-minimized=true] .survey-content{display:none}[data-flow] .survey-container:not([data-minimized=true]) .survey-pill{display:none}[data-flow] .survey-content header{position:relative;min-height:44px}[data-flow] header button{min-width:44px;min-height:44px;border-radius:var(--skyra-radius-sm, 4px)}[data-flow] [data-icon-control]{font-size:20px;line-height:1}[data-flow] [data-card-focus-target]{padding:var(--skyra-card-padding, 22px);animation:survey-content-enter .25s ease-out both}[data-flow] .survey-pill{min-width:0;min-height:44px;font:inherit}[data-flow] .survey-pill svg{flex-shrink:0}[data-flow] .survey-pill span,[data-flow] .beta-transition-pill::part(label){min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}[data-flow] [role=radiogroup].grid{grid-template-columns:repeat(auto-fit,minmax(min(100%,5em),1fr))}[data-flow] .scroll-area{max-height:none}[data-flow] fieldset{min-inline-size:0}[data-flow] input:not([type=checkbox],[type=radio],[type=range]),[data-flow] textarea{min-width:0;width:100%;max-width:100%;font-size:max(16px,calc(var(--skyra-font-size, 16px) * var(--skyra-app-text-scale, 1)));line-height:1.5}[data-flow] [data-survey-actions]{flex-wrap:wrap}[data-flow] [data-survey-actions]>button{flex-shrink:0;max-width:100%;white-space:normal}[data-flow] [data-input-feedback]{flex-wrap:wrap;align-items:flex-start;gap:4px 8px}[data-flow] [data-input-feedback]>*{min-width:0;max-width:100%}[data-flow] [data-input-feedback]>:first-child{flex:1 1 auto}[data-flow] [data-input-counter]{flex-shrink:0;margin-inline-start:auto}[data-flow] [role=radiogroup] label{min-width:0;min-height:44px;overflow-wrap:anywhere}@media(prefers-reduced-motion:reduce){[data-flow] [data-card-focus-target]{animation:none}}";
	function td(e, t, n = !1) {
		const r = X(null),
			o = X(n ? void 0 : e);
		return (
			ie(() => {
				if (o.current === e) return;
				o.current = e;
				const i = requestAnimationFrame(() => {
					var a;
					const s = t
						? (a = r.current) == null
							? void 0
							: a.querySelector(t)
						: r.current;
					s == null || s.focus({ preventScroll: !0 });
				});
				return () => cancelAnimationFrame(i);
			}, [e, t]),
			r
		);
	}
	function fk({
		cardKey: e,
		children: t,
		label: n,
		inline: r = !1,
		flow: o = !1,
		position: i,
		customCss: s,
		theme: a,
		themeMode: l,
		minimized: c = !1,
	}) {
		const d = dt(),
			u = td(e, void 0, o),
			p = X(c),
			[f, h] = ge(!0),
			g = (l ?? "Auto").toLowerCase(),
			b = Ll(a ?? Nl[0], { themeMode: l ?? "Auto", selector: ":host" }),
			v =
				i === "TopLeft" || i === "TopRight"
					? " beta-enter-down"
					: " beta-enter-up";
		return (
			ie(() => {
				h(!1);
			}, []),
			ie(() => {
				if (p.current === c || ((p.current = c), r)) return;
				const _ = requestAnimationFrame(() => {
					var x, S, A;
					c
						? (S =
								(x = u.current) == null
									? void 0
									: x.querySelector("skyra-survey-pill")) == null ||
							S.focus({ preventScroll: !0 })
						: (A = u.current) == null || A.focus({ preventScroll: !0 });
				});
				return () => cancelAnimationFrame(_);
			}, [r, c]),
			y(Le, {
				children: [
					y("style", { "data-beta-styles": !0, children: pk }),
					y("style", { children: Ol({ themeMode: l ?? "Auto" }) }),
					b && y("style", { children: b }),
					s && y("style", { children: s }),
					o && y("style", { children: ed }),
					y("aside", {
						ref: u,
						className: `beta-wrapper${d.value ? "" : " survey-shake"}${f && !r ? v : ""}`,
						"data-inline": r ? "true" : "false",
						"data-flow": o || void 0,
						"data-minimized": c ? "true" : "false",
						"data-position": i,
						"data-theme-mode": g,
						role: r ? void 0 : "dialog",
						"aria-label": n,
						tabIndex: -1,
						children: t,
					}),
				],
			})
		);
	}
	function hk({
		card: e,
		capture: t,
		finalCard: n,
		firstCard: r,
		sessionId: o,
		storedValue: i,
		survey: s,
	}) {
		const a = _e(t, (f) => f.context.language),
			l = _e(t, (f) => f.matches({ Running: "Minimized" })),
			c = iu(s),
			d = s.renderType === "Inline" || s.surveyType === "Findability",
			u = (n && e.type === "MessageCard") || d,
			p = s.showCloseButton !== !1 && !d;
		return y(fk, {
			cardKey: e.id,
			label: e.name,
			inline: s.renderType === "Inline",
			flow: s.renderType === "App",
			position: s.surveyPosition,
			customCss: s.customCss,
			theme: s.theme,
			themeMode: s.themeMode,
			minimized: l,
			children: y(
				dk,
				{
					card: e,
					currentLanguage: a,
					enabledLanguages: c,
					finalCard: n,
					firstCard: r,
					onClose: () => t.send({ type: "reject" }),
					onLanguageChange: (f) => t.send({ type: "setLanguage", language: f }),
					onMaximize: () => t.send({ type: "maximize" }),
					onMinimize: () => t.send({ type: "minimize" }),
					next: (f, h) => {
						t.send({ type: "submit", cardId: e.id, key: h, value: f });
					},
					prev: () => t.send({ type: "goBack" }),
					minimized: l,
					showCloseButton: p,
					showMinimizeButton: !u,
					sessionId: o,
					storedValue: i,
					survey: s,
				},
				`${e.id}-${a}`,
			),
		});
	}
	const nd = lo(
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
			defaultVariants: { size: "small", variant: "primary", rounded: "small" },
		},
	);
	function Tt({
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
			y("button", {
				part: `button-${t}`,
				className: nd({
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
	function rd(e) {
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
	function uo({ className: e, children: t, scrollAmount: n = 2.5 }) {
		const o = so().renderType === "Inline",
			i = X(null),
			[s, a] = ge(null);
		ie(() => {
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
			ie(() => {
				if (o) return;
				const d = i.current;
				if (!(d && s)) return;
				if (!CSS.supports("animation-timeline: scroll()")) {
					const p = () => {
						const { scrollTop: f, scrollHeight: h, clientHeight: g } = d,
							b = f <= 5,
							v = f + g >= h - 5;
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
		const l = () => {
				if (i.current) {
					const u = rd(i.current) * n;
					i.current.scrollBy({ top: -u, behavior: "smooth" });
				}
			},
			c = () => {
				if (i.current) {
					const u = rd(i.current) * n;
					i.current.scrollBy({ top: u, behavior: "smooth" });
				}
			};
		return o
			? y("div", { className: e, children: t })
			: y("div", {
					ref: i,
					className: `scroll-area ${e || ""}`,
					"data-scrollable": s === null ? "unknown" : s.toString(),
					children: [
						y("button", {
							className: "scroll-area-up",
							onClick: l,
							"aria-label": "Scroll up",
							type: "button",
							children: y("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								fill: "none",
								viewBox: "0 0 24 24",
								"stroke-width": "1.5",
								stroke: "currentColor",
								width: "20",
								role: "img",
								"aria-hidden": "true",
								children: y("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									d: "M4.5 15.75l7.5-7.5 7.5 7.5",
								}),
							}),
						}),
						t,
						y("button", {
							className: "scroll-area-down",
							onClick: c,
							"aria-label": "Scroll down",
							type: "button",
							children: y("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								fill: "none",
								viewBox: "0 0 24 24",
								"stroke-width": "1.5",
								stroke: "currentColor",
								width: "20",
								role: "img",
								"aria-hidden": "true",
								children: y("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
								}),
							}),
						}),
					],
				});
	}
	const mk = ({ className: e, ...t }) =>
			y("svg", {
				width: "18",
				height: "18",
				viewBox: "0 0 25 25",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				role: "img",
				...t,
				children: [
					y("title", { children: "Maximize" }),
					y("path", { d: "M15.084 3.5H21.084V9.5", className: e }),
					y("path", { d: "M9.08398 21.5H3.08398V15.5", className: e }),
					y("path", { d: "M21.084 3.5L14.084 10.5", className: e }),
					y("path", { d: "M3.08398 21.5L10.084 14.5", className: e }),
				],
			}),
		gk = ({ className: e }) =>
			y("svg", {
				width: "18",
				height: "18",
				viewBox: "0 0 16 17",
				xmlns: "http://www.w3.org/2000/svg",
				"aria-hidden": "true",
				focusable: "false",
				className: e,
				children: y("path", {
					d: "M4 6.5L8 10.5L12 6.5",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
				}),
			}),
		Ji = ({ className: e, ...t }) =>
			y("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				fill: "currentColor",
				className: `size-4 inline-block ${e ?? ""}`,
				"aria-hidden": "true",
				...t,
				children: y("path", {
					fillRule: "evenodd",
					d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
					clipRule: "evenodd",
				}),
			});
	function yk({ onClose: e, visible: t, label: n = "Close" }) {
		return t
			? y("button", {
					type: "button",
					"aria-label": n,
					"data-icon-control": !0,
					className:
						" p-2 h-10 w-10 flex items-center justify-center text-text text-lg hover:bg-action/10 focus-visible:outline-action focus-visible:outline-2 focus-visible:outline-offset-2 ",
					onClick: e,
					children: "×",
				})
			: null;
	}
	function vk({ languages: e, currentLanguage: t, onChange: n }) {
		const [r, o] = ge(!1),
			i = X(null),
			s = X(null),
			a = X(null);
		ie(() => {
			if (!r) return;
			const d = (u) => {
				var p;
				i.current &&
					!i.current.contains(u.target) &&
					!((p = a.current) != null && p.contains(u.target)) &&
					o(!1);
			};
			return (
				document.addEventListener("click", d),
				() => document.removeEventListener("click", d)
			);
		}, [r]),
			ie(() => {
				if (!r) return;
				const d = (u) => {
					u.key === "Escape" && o(!1);
				};
				return (
					document.addEventListener("keydown", d),
					() => document.removeEventListener("keydown", d)
				);
			}, [r]);
		const l = e.find((d) => d.code === t),
			c = e.filter((d) => d.code !== t);
		return (
			ie(() => {
				const d = a.current,
					u = s.current;
				if (!d || !u) return;
				if (!r) {
					d.matches(":popover-open") && d.hidePopover();
					return;
				}
				d.showPopover();
				const p = () => {
					var Y;
					const g = u.getBoundingClientRect(),
						b = 4,
						v = 8,
						_ = g.top - b - v,
						x = window.innerHeight - g.bottom - b - v,
						S =
							(Y = u.closest(".survey-content")) == null
								? void 0
								: Y.getBoundingClientRect(),
						A = S ? S.bottom - g.bottom - b : 0,
						I = Math.min(d.scrollHeight, 256),
						O = A >= I,
						M = _ >= I,
						N = O || (!M && x > _),
						B = N ? Math.min(x, A || x) : _;
					(d.style.maxHeight = `${Math.max(64, B)}px`),
						(d.style.minWidth = `${g.width}px`);
					const $ = d.getBoundingClientRect(),
						D = N ? g.bottom + b : g.top - $.height - b,
						re = Math.min(Math.max(v, g.left), window.innerWidth - $.width - v);
					(d.style.top = `${Math.max(v, D)}px`),
						(d.style.left = `${Math.max(v, re)}px`);
				};
				p();
				const f = requestAnimationFrame(p),
					h = new ResizeObserver(p);
				return (
					h.observe(d),
					window.addEventListener("resize", p),
					window.addEventListener("scroll", p, !0),
					() => {
						cancelAnimationFrame(f),
							h.disconnect(),
							window.removeEventListener("resize", p),
							window.removeEventListener("scroll", p, !0);
					}
				);
			}, [r]),
			e.length <= 1
				? null
				: y("div", {
						ref: i,
						className: "min-w-0 max-w-[calc(100%-5rem)] text-sm text-text",
						children: [
							y("button", {
								ref: s,
								type: "button",
								onClick: () => o((d) => !d),
								className:
									" h-8 max-w-full w-max pl-4 pr-5 flex items-center gap-2 bg-bg rounded-br-md border-b border-r hover:bg-action/10 focus-visible:outline-action focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer ",
								"aria-haspopup": "menu",
								"aria-expanded": r,
								children: [
									y("span", { "aria-hidden": "true", children: "🌐" }),
									y("span", {
										className: "font-medium whitespace-nowrap truncate",
										children: (l == null ? void 0 : l.name) || t,
									}),
								],
							}),
							y("div", {
								ref: a,
								popover: "manual",
								role: "menu",
								style: { boxShadow: "0 8px 24px rgb(0 0 0 / 0.18)" },
								className:
									" fixed m-0 p-0 z-50 w-max max-w-[calc(100vw-1rem)] overflow-x-hidden overflow-y-auto text-sm text-text bg-bg rounded-md border ",
								children: c.map((d) =>
									y(
										"button",
										{
											type: "button",
											onClick: () => {
												n(d.code), o(!1);
											},
											className:
												" h-8 min-w-full px-4 flex items-center gap-2 whitespace-nowrap hover:bg-action/10 focus-visible:outline-action focus-visible:outline-2 focus-visible:outline-offset-[-2px] cursor-pointer ",
											role: "menuitem",
											children: [
												y("span", { "aria-hidden": "true", children: "🌐" }),
												y("span", { children: d.name }),
											],
										},
										d.code,
									),
								),
							}),
						],
					})
		);
	}
	const bk = lo("", {
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
	function Ge({ className: e, type: t, color: n, size: r, as: o = "p", ...i }) {
		return y(o, {
			className: bk({ type: t, color: n, size: r, className: e }),
			...i,
		});
	}
	const Pe = ({
		heading: e,
		isForm: t = !0,
		body: n,
		bodyHtml: r,
		children: o,
		texts: i,
		actionsSpacing: s,
		actionsLayout: a,
		actions: l = [],
		closeable: c,
		onKeyUp: d,
		skipWrapperLabeling: u = !1,
		cardId: p,
		groupActionsWithContent: f = !1,
	}) => {
		var md;
		const h = Ki(),
			{ currentCard: g } = X_(),
			b = _e(h, (ce) => ce.context.language),
			v = so(),
			_ = _e(h, (ce) => ce.hasTag("saving") || ce.hasTag("saveFailed")),
			x = v.renderType === "App" ? "fieldset" : "div",
			S = iu(v),
			A = v.renderType === "Inline",
			I = t ? "form" : "div",
			O = _e(h, (ce) => ce.matches({ Running: "Minimized" })),
			M = v.cards.find(({ order: ce }) => ce === g);
		if (!M) return null;
		const N = ((md = v.cards.at(-1)) == null ? void 0 : md.id) === M.id,
			B = v.renderType === "Inline",
			$ = v.renderType === "Inline" || v.surveyType === "Findability",
			D = (N && M.type === "MessageCard") || $,
			re = v.showCloseButton !== !1 && (c ?? !0) && !O && !$,
			Y = p || `skyra-card-${v.slug}`,
			fe = `${Y}-body`,
			ft = {
				onKeyUp: d,
				tabIndex: -1,
				"data-card-focus-target": !0,
				...(!u && { "aria-labelledby": Y }),
				...(t && { onSubmit: (ce) => ce.preventDefault(), name: v.name }),
			},
			ht = () => {
				h.send({ type: "minimize" });
			},
			po = () => {
				h.send({ type: "maximize" });
			},
			le = !A && (!D || (v.renderType === "App" && re)),
			hd =
				M.type === "LikertCard" && M.likertScale.likertItems.length >= 5
					? "Large"
					: "Regular",
			Xk = { Minimal: 300, Large: 500, Regular: 400 };
		return B
			? y("div", {
					className: "flex flex-col",
					children: y(I, {
						...ft,
						className:
							"flex flex-col gap-2 md:gap-4 w-full text-text focus:outline-none",
						children: [
							y(Ge, {
								part: "heading",
								as: "h2",
								type: "heading",
								id: Y,
								tabIndex: -1,
								children: e,
							}),
							id(r, n, fe),
							o && y(x, { disabled: _, children: o }),
							l.length > 0 &&
								y(od, {
									spacing: s,
									layout: a,
									actions: l.map((ce) => ({
										...ce,
										disabled: _ || ce.disabled,
									})),
									labelledBy: f ? Y : void 0,
									describedBy: f && (n || r) ? fe : void 0,
								}),
						],
					}),
				})
			: y("div", {
					"data-minimized": O,
					className: "survey-container",
					style: { "--card-max-width": `${Xk[hd]}px` },
					children: [
						y("div", {
							className: "survey-content relative",
							children: [
								le &&
									y("header", {
										className:
											"absolute top-0 right-0 left-0 flex justify-between items-start z-10",
										children: [
											S.length > 1 &&
												y(vk, {
													languages: S,
													currentLanguage: b,
													onChange: (ce) => {
														h.send({ type: "setLanguage", language: ce });
													},
												}),
											y("div", {
												className: "flex ml-auto",
												children: [
													!D && y(wk, { onMinimize: ht, texts: i }),
													y(yk, {
														label: i.close,
														onClose: () => h.send({ type: "reject" }),
														visible: re,
													}),
												],
											}),
										],
									}),
								y(I, {
									...ft,
									className: `flex flex-col gap-2 md:gap-4 w-full text-text px-4 md:px-6 pb-4 md:pb-6 focus:outline-none ${le ? "pt-10" : "pt-4 md:pt-6"}`,
									children: [
										y(Ge, {
											part: "heading",
											as: "h2",
											type: "heading",
											id: Y,
											tabIndex: -1,
											children: e,
										}),
										id(r, n, fe),
										o && y(x, { disabled: _, children: o }),
										l.length > 0 &&
											y(od, {
												spacing: s,
												layout: a,
												actions: l.map((ce) => ({
													...ce,
													disabled: _ || ce.disabled,
												})),
												labelledBy: f ? Y : void 0,
												describedBy: f && (n || r) ? fe : void 0,
											}),
									],
								}),
							],
						}),
						y("button", {
							type: "button",
							className: "survey-pill",
							onClick: po,
							children: [
								y("span", {
									className: "flex-1 text-left whitespace-nowrap",
									children: (i == null ? void 0 : i.minimized) ?? e,
								}),
								y(mk, { className: "stroke-current fill-transparent" }),
							],
						}),
					],
				});
	};
	function wk({ onMinimize: e, texts: t }) {
		return y("button", {
			type: "button",
			"aria-label": t.hide,
			"data-icon-control": !0,
			className:
				" p-2 h-10 w-10 flex items-center justify-center text-text text-lg hover:bg-action/10 focus-visible:outline-action focus-visible:outline-2 focus-visible:outline-offset-2 ",
			onClick: e,
			children: y(gk, { className: "stroke-current fill-transparent" }),
		});
	}
	function od({
		spacing: e = "between",
		layout: t = "horizontal",
		actions: n = [],
		labelledBy: r,
		describedBy: o,
	}) {
		const i = n.filter((s) => s.if !== !1);
		return y("div", {
			"data-survey-actions": !0,
			role: r ? "group" : void 0,
			"aria-labelledby": r,
			"aria-describedby": o,
			className: `
        flex w-full items-center
        ${t === "vertical" ? "flex-col gap-2 items-start" : "flex-row"}
        ${e === "between" ? "flex-wrap gap-3" : "gap-4"}
      `,
			children: i.map((s) => {
				const a = (s.type ?? "primary") === "primary",
					l = e === "between" && t === "horizontal" && a;
				return y(
					Tt,
					{
						type: "button",
						variant: s.type ?? "primary",
						disabled: s.disabled,
						onClick: s.action,
						className: `${l ? "ms-auto" : ""} ${s.className ?? ""}`.trim(),
						children: s.label,
					},
					s.key,
				);
			}),
		});
	}
	function id(e, t, n) {
		return e
			? y("div", {
					id: n,
					part: "bodyHtml",
					className: "body-content",
					dangerouslySetInnerHTML: { __html: e },
				})
			: t
				? y(Ge, {
						id: n,
						part: "description",
						className: "body-content",
						children: t,
					})
				: null;
	}
	function _k({
		card: e,
		next: t,
		prev: n,
		sessionId: r,
		survey: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		Je("top task card", e);
		const l = e.randomize ? Gr(e.taskItems ?? [], r) : (e.taskItems ?? []),
			c = Me(o, e, { finalCard: a }),
			d = `skyra-card-${e.id}`,
			u = typeof i == "string" ? i : void 0,
			p = (f) => {
				const h = f && f.trim() !== "" ? f : "";
				t == null || t(h);
			};
		return y(
			Pe,
			{
				isForm: !1,
				heading: e.name,
				cardId: d,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: c,
				skipWrapperLabeling: !0,
				actions: [
					{
						key: "prev",
						action: n,
						label: c.back,
						type: "link",
						className: "mr-auto",
						if: !s,
					},
				],
				children: y("fieldset", {
					className: "m-0 border-0 p-0 min-w-0",
					"aria-labelledby": d,
					children: y(uo, {
						children: y("div", {
							part: "options",
							className: `flex ${e.optionsLayout === "horizontal" ? "flex-row flex-wrap gap-2 p-1" : "flex-col items-start gap-1 md:gap-2"}`,
							children: l.map((f) => {
								const g = te(f.task.id) === u;
								return y(
									Tt,
									{
										type: "button",
										variant: "chip",
										"data-selected": g,
										"aria-pressed": g ? "true" : "false",
										onClick: () => {
											p(f.task.id);
										},
										children: [g && y(Ji, { className: "mr-1.5" }), f.label],
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
	function kk({
		card: e,
		next: t,
		prev: n,
		survey: r,
		finalCard: o,
		firstCard: i,
		close: s,
	}) {
		const a = Me(r, e, { finalCard: o }),
			l = lu(r, e, { firstCard: i, finalCard: o }),
			c = r.surveyType === "Findability",
			d = l
				? { key: "decline", type: "secondary", label: l, action: s }
				: i
					? null
					: {
							key: "prev",
							type: "link",
							label: a.back,
							if: !c,
							className: "mr-auto",
							action: n,
						},
			u = [
				...(d ? [d] : []),
				{
					key: "next",
					type: "primary",
					label: a.next,
					action: () => t(),
					if: !c,
				},
			],
			p = `skyra-card-${e.id}`;
		return y(
			Pe,
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
	function Sk({
		card: e,
		next: t,
		minimize: n,
		survey: r,
		finalCard: o,
		isInline: i,
	}) {
		const s = Me(r, e, { finalCard: o }),
			a = `skyra-card-${e.id}`,
			l = e.optionsLayout === "horizontal";
		return l
			? y(
					Pe,
					{
						isForm: !1,
						heading: e.name,
						cardId: a,
						body: e.body,
						bodyHtml: e.bodyHtml,
						texts: s,
						actionsSpacing: "tight",
						actionsLayout: l ? "horizontal" : "vertical",
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
			: y(
					Pe,
					{
						isForm: !1,
						heading: e.name,
						cardId: a,
						body: e.body,
						bodyHtml: e.bodyHtml,
						texts: s,
						children: y("div", {
							className: "flex w-full flex-col gap-2",
							children: [
								y(Tt, {
									type: "button",
									className: "self-start",
									onClick: () => t(!0),
									children: e.positive,
								}),
								y("div", {
									className: "flex w-full items-center gap-4",
									children: [
										y(Tt, {
											type: "button",
											onClick: () => t(!1),
											children: e.negative,
										}),
										!i &&
											y(Tt, {
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
	function Gi({
		id: e,
		message: t,
		type: n = "validation",
		color: r = "error",
		className: o = "",
	}) {
		return t
			? y(Ge, {
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
	function xk(e, t) {
		return (n) => {
			(e.value = n.target.value), t == null || t(e.value);
		};
	}
	function Ck({
		card: e,
		next: t,
		prev: n,
		survey: r,
		value: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		var ft;
		const l = Ue(!1),
			c = Ue(!1),
			u = Ue(typeof i == "string" ? i : typeof o == "string" ? o : ""),
			p = u.value.length,
			f = dt(),
			h = un(),
			g = (e == null ? void 0 : e.minLength) ?? 0,
			b = (e == null ? void 0 : e.maxLength) ?? void 0,
			v = Yc({
				content: u.value,
				card: { minLength: g, maxLength: b, validations: e.validations },
				hasBeenTouched: l.value,
				language: h,
			}),
			_ = v.valid,
			x = e.multiline ? nk : co,
			S = Me(r, e, { finalCard: a }),
			A = `skyra-card-${e.id}`,
			I = `${A}-length-instruction`,
			O = `${A}-error`,
			M = v.status === "under-minimum",
			N = c.value && M,
			B = !_ && c.value,
			$ = c.value && !M && !!v.errorMessage,
			D = qc({ min: g, max: b, language: h });
		function re() {
			(l.value = !0), (c.value = !0), (f.value = _), _ && t(u.value);
		}
		const Y = r.surveyType === "Findability",
			fe = (ft = e.label) == null ? void 0 : ft.trim(),
			Gn = Ku({
				label: fe,
				placeholder: e.placeholder,
				heading: e.name,
				usePlaceholder: Y,
			});
		return y(
			Pe,
			{
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: S,
				cardId: A,
				actions: [
					{
						key: "prev",
						action: () => n(),
						type: "link",
						label: S.back,
						if: !(s || Y),
					},
					{ key: "next", action: re, label: S.next },
				],
				children: [
					y(x, {
						id: e.id,
						label: Gn,
						labelHidden: Y || !fe,
						"aria-invalid": B ? "true" : void 0,
						"aria-describedby":
							M && D
								? I
								: $
									? O
									: D
										? I
										: typeof b == "number"
											? `${A}-char-count`
											: void 0,
						placeholder: e.placeholder,
						value: u.value,
						autoComplete: "off",
						onInput: xk(u, () => {
							l.value = !0;
						}),
						onKeyDown: (ht) => {
							ht.key === "Enter" &&
								(!e.multiline || ht.metaKey) &&
								(ht.preventDefault(), re());
						},
						required: g > 0,
						minLength: g,
						maxLength: b,
						name: "value",
						type: "text",
					}),
					y("div", {
						"data-input-feedback": !0,
						className: "flex justify-between mt-1",
						children: [
							D && !$
								? y(Ge, {
										id: I,
										type: "small",
										color: N ? v.color : void 0,
										role: N ? "alert" : void 0,
										"aria-live": N ? "polite" : void 0,
										children: D,
									})
								: $ && v.errorMessage
									? y(Gi, {
											id: O,
											message: v.errorMessage,
											type: "character-limit",
											color: v.color,
										})
									: y("span", {}),
							typeof b == "number" &&
								y(Ge, {
									id: `${A}-char-count`,
									"data-input-counter": !0,
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
	function sd({
		className: e,
		onCheckedChange: t,
		checked: n,
		disabled: r,
		...o
	}) {
		const [i, s] = ge(!1);
		return y("input", {
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
				const l = a.target.checked;
				s(l), t == null || t(l);
			},
			disabled: r,
			...o,
		});
	}
	function zk({
		className: e,
		size: t,
		disabled: n,
		blocked: r,
		onCheckedChange: o,
		checked: i,
		children: s,
		...a
	}) {
		return y("label", {
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
				y(sd, {
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
	function Yi(e = "", t = "text") {
		const n = Ue({
				value: e,
				valid: e ? Tk(e, t) : null,
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
	function Tk(e, t) {
		return t === "email"
			? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
			: t === "tel"
				? e.length > 0
				: !0;
	}
	function Ik({
		card: e,
		survey: t,
		firstCard: n,
		finalCard: r,
		next: o,
		prev: i,
		close: s,
		storedValue: a,
	}) {
		const l = dt(),
			c = un(),
			d = typeof a == "object" && a !== null ? a : void 0,
			u = Yi((d == null ? void 0 : d.email) || "", "email"),
			p = Yi((d == null ? void 0 : d.phone) || "", "tel"),
			f = Yi((d == null ? void 0 : d.name) || "", "text"),
			h = Ue((d == null ? void 0 : d.consented) ?? !1),
			g = Ue(!1),
			b = Me(t, e, { finalCard: r }),
			v = Vr({
				email: { value: u.value, valid: u.valid ?? !1 },
				name: { value: f.value },
				phone: { value: p.value },
				consented: h.value,
				consentEnable: !!e.consentEnable,
				isRequired: !!e.isRequired,
				hasBeenSubmitted: g.value,
				language: c,
			}),
			_ = v.status === "email-invalid",
			x = v.status === "consent-required" || v.status === "email-required",
			S = u.value || f.value || p.value;
		function A() {
			const O = Vr({
				email: { value: u.value, valid: u.valid ?? !1 },
				name: { value: f.value },
				phone: { value: p.value },
				consented: h.value,
				consentEnable: !!e.consentEnable,
				isRequired: !!e.isRequired,
				hasBeenSubmitted: !0,
				language: c,
			});
			(g.value = !0),
				(l.value = O.valid),
				O.valid &&
					o(
						S
							? {
									email: u.value,
									phone: p.value,
									name: f.value,
									consented: h.value,
								}
							: void 0,
					);
		}
		const I = `skyra-card-${e.id}`;
		return y(
			Pe,
			{
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: b,
				skipWrapperLabeling: !0,
				cardId: I,
				actions: [
					{ key: "prev", action: i, type: "link", if: !n, label: b.back },
					{ key: "next", action: A, label: b.next },
				],
				children: y("fieldset", {
					"aria-labelledby": I,
					children: [
						y("legend", {
							className: "sr-only",
							children: "Enter your contact information",
						}),
						y("div", {
							className: "flex flex-col gap-2",
							children: [
								e.nameEnable &&
									y(co, {
										name: "name",
										autocomplete: "name",
										label: e.nameLabel ?? "Name",
										placeholder: e.namePlaceholder ?? void 0,
										value: f.value,
										onInput: f.onInput,
									}),
								e.email &&
									y(co, {
										label: e.email_label
											? `${e.email_label} ${e.isRequired || (e.consentEnable && h.value) ? "*" : ""}`
											: `Email ${e.isRequired || (e.consentEnable && h.value) ? "*" : ""}`,
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
									y(co, {
										label: e.phone_label ?? "Phone",
										placeholder: e.phone_placeholder ?? void 0,
										value: p.value,
										onInput: p.onInput,
										autocomplete: "tel",
										name: "phone",
										type: "tel",
									}),
								_ &&
									y(Gi, {
										id: `${I}-email-error`,
										message: v.errorMessage,
										type: "validation",
										color: v.color,
									}),
								e.consentEnable &&
									y(Le, {
										children: [
											y(Ge, {
												type: "small",
												className:
													"flex flex-col gap-0 items-center text-center",
												children: [
													e.consentTermsText,
													e.consentTermsUrl &&
														y("a", {
															href: e.consentTermsUrl,
															target: "_blank",
															rel: "noopener noreferrer",
															className: nd({
																variant: "link",
																size: "default",
																className:
																	"p-0! font-bold pl-0.5 whitespace-nowrap",
															}),
															children: e.consentTermsTitle,
														}),
												],
											}),
											y(Ge, {
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
													y(sd, {
														name: "consent",
														checked: h.value,
														onCheckedChange: (O) => {
															h.value = O;
														},
													}),
													y("span", {
														children: [
															e.consentTermsLabel,
															(e.isRequired || S) &&
																y("span", {
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
						x
							? y(Gi, {
									id: `${I}-error`,
									message: v.errorMessage,
									type: "validation",
									color: v.color,
								})
							: y("div", { className: "h-4" }),
					],
				}),
			},
			e.id,
		);
	}
	function $k({
		card: e,
		next: t,
		prev: n,
		sessionId: r,
		survey: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		const l = e.randomize ? Gr(e.items, r) : e.items,
			c = Me(o, e, { finalCard: a }),
			d = `skyra-card-${e.id}`,
			u = typeof i == "string" ? i : void 0,
			p = (f, h) => {
				const g = f && f.trim() !== "" ? f : "";
				t == null || t(g, h);
			};
		return y(
			Pe,
			{
				isForm: !1,
				heading: e.name,
				cardId: d,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: c,
				skipWrapperLabeling: !0,
				actions: [
					{
						key: "prev",
						action: n,
						label: c.back,
						type: "link",
						className: "mr-auto",
						if: !s,
					},
				],
				children: y("fieldset", {
					className: "m-0 border-0 p-0 min-w-0",
					"aria-labelledby": d,
					children: y(uo, {
						children: y("div", {
							part: "options",
							className: `flex ${e.optionsLayout === "horizontal" ? "flex-row flex-wrap gap-2 p-1" : "flex-col items-start gap-1 md:gap-2"}`,
							children: l.map((f) => {
								const g = te(f.value.id) === u;
								return y(
									Tt,
									{
										type: "button",
										variant: "chip",
										"data-selected": g,
										"aria-pressed": g ? "true" : "false",
										onClick: () => {
											p(f.value.id, e.segment.id);
										},
										children: [g && y(Ji, { className: "mr-1.5" }), f.label],
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
	function Ek({
		className: e,
		decorative: t = !1,
		value: { name: n, native: r },
	}) {
		return y("span", {
			className: `inline ${e}`,
			role: t ? void 0 : "img",
			"aria-label": t ? void 0 : n,
			"aria-hidden": t || !n ? "true" : "false",
			children: r,
		});
	}
	const Rk = lo(
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
	function ad({ className: e, size: t, ...n }) {
		return y("input", {
			type: "radio",
			className: Rk({ size: t, className: e }),
			...n,
		});
	}
	function Mk({
		card: e,
		next: t,
		prev: n,
		survey: r,
		storedValue: o,
		firstCard: i,
		finalCard: s,
	}) {
		var A;
		const a = e.likertScale;
		if (!("likertItems" in a)) return null;
		const l = a.likertItems,
			c =
				(typeof o == "string" &&
					((A = l.find((I) => te(I.id) === o)) == null ? void 0 : A.id)) ||
				"",
			d = Ue(c),
			u = Me(r, e, { finalCard: s }),
			p = e.showEmoji && l.every((I) => !!I.emoji),
			f = (I) => {
				(d.value = I), t(I, e.id);
			},
			h = (I, O) => {
				var B, $;
				let M;
				switch (I.key) {
					case "ArrowLeft":
					case "ArrowUp":
						M = (O - 1 + l.length) % l.length;
						break;
					case "ArrowRight":
					case "ArrowDown":
						M = (O + 1) % l.length;
						break;
					case "Home":
						M = 0;
						break;
					case "End":
						M = l.length - 1;
						break;
					case "Enter":
						I.preventDefault(), f(l[O].id);
						return;
					default:
						return;
				}
				I.preventDefault(), (d.value = l[M].id);
				const N =
					(B = I.currentTarget.closest('[role="radiogroup"]')) == null
						? void 0
						: B.querySelectorAll('input[type="radio"]');
				($ = N == null ? void 0 : N[M]) == null || $.focus();
			},
			g = [
				{ key: "prev", action: () => n(), label: u.back, type: "link", if: !i },
			],
			b = e.optionsLayout === "horizontal";
		let v = "grid-cols-5";
		a.type === "LikertScaleThree"
			? (v = "grid-cols-3")
			: a.type === "LikertScaleSix"
				? (v = "grid-cols-6")
				: a.type === "LikertScaleSeven" && (v = "grid-cols-7");
		const _ = b ? `grid ${v} gap-1 md:gap-2` : "flex flex-col gap-1 md:gap-2",
			x = b
				? "flex flex-col items-center gap-1"
				: "flex flex-row items-center gap-2 justify-start",
			S = `skyra-card-${e.id}`;
		return y(
			Pe,
			{
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: u,
				actions: g,
				skipWrapperLabeling: !0,
				cardId: S,
				children: y("fieldset", {
					"aria-labelledby": S,
					children: [
						y("legend", {
							className: "sr-only",
							children: "Select your rating",
						}),
						y("div", {
							className: _,
							role: "radiogroup",
							"aria-labelledby": S,
							children: l.map((I, O) => {
								const M = I.id == d.value;
								return p
									? y(
											"label",
											{
												part: "list-item",
												className: `
                  cursor-pointer
                  ${b ? "flex flex-col items-center gap-0.5 text-center" : "flex flex-row items-center gap-2 justify-start"}
                  py-0.5
                  px-1
                  rounded-sm
                  ${M ? "bg-action text-bg" : ""}
                  hover:ring-action hover:ring-offset-2
                  hover:ring-offset-bg hover:ring-2

                  focus-within:ring-action focus-within:ring-offset-2
                  focus-within:ring-offset-bg focus-within:ring-2
                `,
												children: [
													I.emoji &&
														y(Ek, {
															decorative: !0,
															value: I.emoji,
															className: b ? "text-4xl" : "text-2xl",
														}),
													b
														? y("input", {
																type: "radio",
																id: I.id,
																name: e.id,
																value: I.id,
																checked: M,
																className: "appearance-none",
																onClick: () => f(I.id),
																onKeyDown: (N) => h(N, O),
															})
														: y(ad, {
																id: I.id,
																name: e.id,
																value: I.id,
																checked: M,
																onClick: () => f(I.id),
																onKeyDown: (N) => h(N, O),
															}),
													y("span", {
														className: "text-xs font-semibold",
														children: I.label,
													}),
												],
											},
											O,
										)
									: y(
											"label",
											{
												part: "list-item",
												className: `${x} cursor-pointer`,
												children: [
													y(ad, {
														id: I.id,
														name: e.id,
														value: I.id,
														checked: M,
														onClick: () => f(I.id),
														onKeyDown: (N) => h(N, O),
													}),
													y("span", {
														className: "text-xs font-semibold text-center",
														children: I.label,
													}),
												],
											},
											O,
										);
							}),
						}),
					],
				}),
			},
			e.id,
		);
	}
	function Ak(e) {
		return y("kbd", {
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
	const ld = "ABCDEFGHJKMNPQRSTVWXYZ".split("");
	function Pk(e, t) {
		switch (t.type) {
			case "toggle": {
				const n = nu({
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
	function Ok({
		card: e,
		next: t,
		prev: n,
		sessionId: r,
		survey: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		Je("multiselect card", e);
		const l = dt(),
			c = un(),
			u = (e.randomize ? Gr(e.selectItems, r) : e.selectItems).map((B, $) => ({
				...B,
				order: $,
			})),
			p = Array.isArray(i)
				? new Set(
						i
							.map((B) => {
								var $;
								return ($ = u.find((D) => te(D.id) === B)) == null
									? void 0
									: $.id;
							})
							.filter(Boolean),
					)
				: new Set(),
			[f, h] = Cs(Pk, { selected: p, dirty: !1, limitAttempted: !1 }),
			[g, b] = ge(!1),
			v = zs(
				(B) => {
					const $ = B.currentTarget,
						D = B.target,
						re = B.key.toUpperCase();
					if ($.contains(D)) {
						const Y = ld.indexOf(re);
						if (Y >= 0 && Y < u.length) {
							const fe = u[Y];
							h({ type: "toggle", id: fe.id, max: e.max ?? void 0 });
						}
					}
				},
				[e.max, u],
			),
			_ = Zr({
				selectedCount: f.selected.size,
				card: { min: e.min ?? void 0, max: e.max ?? void 0 },
				hasBeenSubmitted: g,
				language: c,
			}),
			x = Jc({
				min: e.min ?? void 0,
				max: e.max ?? void 0,
				totalOptions: u.length,
				language: c,
			}),
			S = e.max ? Kc({ max: e.max, language: c }) : null,
			A = f.limitAttempted
				? S
				: _.status === "over-max" || (g && !_.valid)
					? _.errorMessage
					: x,
			I = f.limitAttempted || _.status === "over-max" || (g && !_.valid),
			O = Me(o, e, { finalCard: a }),
			M = `skyra-card-${e.id}`;
		function N() {
			const B = Zr({
				selectedCount: f.selected.size,
				card: { min: e.min ?? void 0, max: e.max ?? void 0 },
				hasBeenSubmitted: !0,
				language: c,
			});
			if ((b(!0), (l.value = B.valid), B.valid)) {
				const $ = f.selected.size > 0 ? Array.from(f.selected) : [];
				t($);
			}
		}
		return y(
			Pe,
			{
				onKeyUp: v,
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: O,
				skipWrapperLabeling: !0,
				cardId: M,
				actions: [
					{
						key: "prev",
						action: () => (n == null ? void 0 : n()),
						label: O.back,
						type: "link",
						if: !s,
					},
					{ key: "next", action: N, label: O.next },
				],
				children: y("fieldset", {
					"aria-labelledby": M,
					"aria-describedby": A ? `${M}-feedback` : void 0,
					"aria-invalid": I ? "true" : void 0,
					children: [
						y(uo, {
							children: y("div", {
								part: "options",
								className: `flex ${e.optionsLayout === "horizontal" ? "flex-row flex-wrap gap-2 p-1 -m-1" : "flex-col items-stretch gap-1 md:gap-2"}`,
								children: u.map((B) => {
									const $ = f.selected.has(B.id),
										D = !!(e.max && f.selected.size >= e.max && !$);
									return y(
										zk,
										{
											checked: $,
											blocked: D,
											onCheckedChange: () => {
												h({ type: "toggle", id: B.id, max: e.max ?? void 0 });
											},
											children: [
												y("span", { children: B.label }),
												y(Ak, { children: ld[B.order] }),
											],
										},
										B.id,
									);
								}),
							}),
						}),
						A
							? y("div", {
									class: "my-2 shrink-0",
									children: y(Ge, {
										type: "small",
										color: I ? "error" : void 0,
										role: I ? "alert" : void 0,
										id: `${M}-feedback`,
										children: A,
									}),
								})
							: null,
					],
				}),
			},
			e.id,
		);
	}
	function Lk({ card: e, next: t, survey: n, finalCard: r }) {
		const o = `skyra-card-${e.id}`;
		return y(
			Pe,
			{
				isForm: !1,
				heading: e.name,
				cardId: o,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: Me(n, e, { finalCard: r }),
				actionsSpacing: "tight",
				groupActionsWithContent: !0,
				actions: [
					{ key: "accept", action: () => t(!0), label: e.positive },
					{ key: "decline", action: () => t(!1), label: e.negative },
				],
			},
			e.id,
		);
	}
	function Nk({
		card: e,
		next: t,
		prev: n,
		sessionId: r,
		survey: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		const l = e.randomize ? Gr(e.selectItems, r) : e.selectItems,
			c = Me(o, e, { finalCard: a }),
			d = `skyra-card-${e.id}`,
			u = typeof i == "string" ? i : void 0,
			p = (f) => {
				const h = f && f.trim() !== "" ? f : "";
				t == null || t(h);
			};
		return y(
			Pe,
			{
				heading: e.name,
				body: e.body,
				cardId: d,
				bodyHtml: e.bodyHtml,
				texts: c,
				skipWrapperLabeling: !0,
				actions: [
					{
						key: "prev",
						action: n,
						label: c.back,
						type: "link",
						className: "mr-auto",
						if: !s,
					},
				],
				children: y("fieldset", {
					className: "m-0 border-0 p-0 min-w-0",
					"aria-labelledby": d,
					children: y(uo, {
						children: y("div", {
							part: "options",
							className: `flex ${e.optionsLayout === "horizontal" ? "flex-row flex-wrap gap-2 p-1" : "flex-col items-start gap-1 md:gap-2"}`,
							children: l.map((f) => {
								const g = te(f.id) === u;
								return y(
									Tt,
									{
										type: "button",
										variant: "chip",
										"data-selected": g,
										"aria-pressed": g ? "true" : "false",
										onClick: () => {
											p(f.id);
										},
										children: [g && y(Ji, { className: "mr-1.5" }), f.label],
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
	function jk({ card: e, ...t }) {
		const n = so(),
			r = n.renderType === "Inline",
			o = { ...t, survey: n };
		switch (e.type) {
			case "TopTaskCard":
				return y(_k, { card: e, ...o });
			case "MessageCard":
				return y(kk, { card: e, ...o });
			case "CompletionCard":
				return y(Sk, { card: e, ...o, isInline: r });
			case "FindabilityCard":
				return y(Lk, { card: e, ...o });
			case "RecruitmentCard":
				return y(Ik, { card: e, ...o });
			case "InputCard":
				return y(Ck, { card: e, ...o });
			case "SegmentCard":
				return y($k, { card: e, ...o });
			case "LikertCard":
				return y(Mk, { card: e, ...o });
			case "MultiSelectCard":
				return y(Ok, { card: e, ...o });
			case "SingleSelectCard":
				return y(Nk, { card: { ...e, type: "SingleSelectCard" }, ...o });
			default:
				throw new Error(`Unknown card type: ${e.type}`);
		}
	}
	const Bk = `/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:"";--tw-outline-style:solid}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--spacing:4px;--container-6xl:1152px;--text-xs--line-height:calc(1/.75);--text-sm--line-height:calc(1.25/.875);--text-base:16px;--text-base--line-height: 1.5 ;--text-lg--line-height:calc(1.75/1.125);--text-xl:20px;--text-xl--line-height:calc(1.75/1.25);--text-2xl:24px;--text-2xl--line-height:calc(2/1.5);--text-3xl:30px;--text-3xl--line-height: 1.2 ;--text-4xl:36px;--text-4xl--line-height:calc(2.5/2.25);--text-5xl:48px;--text-5xl--line-height:1;--text-6xl:60px;--text-6xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--leading-tight:1.25;--ease-out:cubic-bezier(0,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components{:host{--skyra-bg-color:#f5f7fa;--skyra-text-color:#012a53;--skyra-interface-color:#315386;--skyra-border-color:var(--skyra-interface-color);--skyra-action-color:#002052;--skyra-action-text-color:var(--skyra-bg-color);--skyra-minimized-bg:#002052;--skyra-minimized-text:#fff;--skyra-minimized-border:#106eff;--skyra-minimized-shadow:0px 0px 20px 4px #013d9666;--skyra-secondary-color:#dde7f7;--skyra-link-color:blue;--skyra-error-color:#ca0a15;--skyra-warning-color:#92400e;--skyra-focus-color:var(--skyra-action-color);--skyra-border-style:solid;--skyra-border-width:1px;--skyra-radius-sm:4px;--skyra-radius-md:6px;--skyra-radius-lg:8px;--skyra-radius-pill:999px;--skyra-focus-ring-style:solid;--skyra-focus-ring-width:2px;--skyra-focus-ring-offset:2px;--skyra-shadow-sm:none;--skyra-shadow-md:none;--skyra-shadow-lg:none;--skyra-z-index:2147480000;--skyra-font-heading:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--skyra-font-body:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--skyra-option-list-max-height:400px;--skyra-body-max-height:none;font-size:var(--skyra-font-size,16px);background:var(--skyra-bg-color)}:host li{margin-left:24px;list-style-type:disc}:host a{color:var(--skyra-link-color);text-decoration:underline}.body-content{max-height:var(--skyra-body-max-height,none);overflow-y:auto}}@layer utilities{.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-x-0{inset-inline:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.right-0{right:calc(var(--spacing)*0)}.right-auto{right:auto}.bottom-0{bottom:calc(var(--spacing)*0)}.left-0{left:calc(var(--spacing)*0)}.left-auto{left:auto}.z-0{z-index:0}.z-10{z-index:10}.z-50{z-index:50}.z-wrapper{z-index:var(--skyra-z-index)}.container{width:100%}@media(min-width:40rem){.container{max-width:640px}}@media(min-width:48rem){.container{max-width:768px}}@media(min-width:64rem){.container{max-width:1024px}}@media(min-width:80rem){.container{max-width:1280px}}@media(min-width:96rem){.container{max-width:1536px}}.-m-1{margin:calc(var(--spacing)*-1)}.m-0{margin:calc(var(--spacing)*0)}.m-2{margin:calc(var(--spacing)*2)}.m-auto{margin:auto}.mx-2{margin-inline:calc(var(--spacing)*2)}.mx-auto{margin-inline:auto}.my-2{margin-block:calc(var(--spacing)*2)}.my-4{margin-block:calc(var(--spacing)*4)}.my-5{margin-block:calc(var(--spacing)*5)}.ms-auto{margin-inline-start:auto}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-8{margin-top:calc(var(--spacing)*8)}.mt-10{margin-top:calc(var(--spacing)*10)}.mt-12{margin-top:calc(var(--spacing)*12)}.mr-1\\.5{margin-right:calc(var(--spacing)*1.5)}.mr-auto{margin-right:auto}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.mb-10{margin-bottom:calc(var(--spacing)*10)}.ml-0\\.5{margin-left:calc(var(--spacing)*.5)}.ml-auto{margin-left:auto}.\\!inline{display:inline!important}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.list-item{display:list-item}.table{display:table}.aspect-square{aspect-ratio:1}.size-3\\.5{width:calc(var(--spacing)*3.5);height:calc(var(--spacing)*3.5)}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-8{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.size-11{width:calc(var(--spacing)*11);height:calc(var(--spacing)*11)}.h-2{height:calc(var(--spacing)*2)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-48{height:calc(var(--spacing)*48)}.h-\\[50px\\]{height:50px}.h-\\[100px\\]{height:100px}.h-full{height:100%}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-5{width:calc(var(--spacing)*5)}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-20{width:calc(var(--spacing)*20)}.w-32{width:calc(var(--spacing)*32)}.w-48{width:calc(var(--spacing)*48)}.w-\\[400px\\]{width:400px}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.w-screen{width:100vw}.max-w-6xl{max-width:var(--container-6xl)}.max-w-\\[400px\\]{max-width:400px}.max-w-\\[450px\\]{max-width:450px}.max-w-\\[calc\\(100\\%-5rem\\)\\]{max-width:calc(100% - 80px)}.max-w-\\[calc\\(100vw-1rem\\)\\]{max-width:calc(100vw - 16px)}.max-w-full{max-width:100%}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-20{min-width:calc(var(--spacing)*20)}.min-w-\\[300px\\]{min-width:300px}.min-w-full{min-width:100%}.flex-1{flex:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.scale-1{--tw-scale-x:1%;--tw-scale-y:1%;--tw-scale-z:1%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-2{--tw-scale-x:2%;--tw-scale-y:2%;--tw-scale-z:2%;scale:var(--tw-scale-x)var(--tw-scale-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.list-inside{list-style-position:inside}.list-disc{list-style-type:disc}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-wrap{flex-wrap:wrap}.place-content-center{place-content:center}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing)*0)}.gap-0\\.5{gap:calc(var(--spacing)*.5)}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-5{gap:calc(var(--spacing)*5)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-3{-moz-column-gap:calc(var(--spacing)*3);column-gap:calc(var(--spacing)*3)}.gap-y-1{row-gap:calc(var(--spacing)*1)}.gap-y-1\\.5{row-gap:calc(var(--spacing)*1.5)}.self-center{align-self:center}.self-end{align-self:flex-end}.self-start{align-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:var(--skyra-radius-md,6px)}.rounded-\\[99999px\\]{border-radius:99999px}.rounded-full{border-radius:var(--skyra-radius-pill,999px)}.rounded-lg{border-radius:var(--skyra-radius-lg,8px)}.rounded-md{border-radius:var(--skyra-radius-md,6px)}.rounded-none{border-radius:0}.rounded-sm{border-radius:var(--skyra-radius-sm,4px)}.rounded-xs{border-radius:var(--skyra-radius-sm,2px)}.rounded-br-md{border-bottom-right-radius:var(--skyra-radius-md,6px)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-solid{--tw-border-style:solid;border-style:solid}.border-action{border-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.border-action{border-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.border-current{border-color:currentColor}.border-interface{border-color:var(--skyra-interface-color)}@supports (color:color-mix(in lab,red,red)){.border-interface{border-color:color-mix(in srgb,var(--skyra-interface-color),transparent 0%)}}.border-transparent{border-color:#0000}.bg-action{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.bg-action{background-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.bg-action\\/10{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.bg-action\\/10{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)10%,transparent)}}.bg-bg{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.bg-bg{background-color:color-mix(in srgb,var(--skyra-bg-color),transparent 0%)}}.bg-minimized{background-color:var(--skyra-minimized-bg)}@supports (color:color-mix(in lab,red,red)){.bg-minimized{background-color:color-mix(in srgb,var(--skyra-minimized-bg),transparent 0%)}}.bg-transparent{background-color:#0000}.fill-\\[\\#003355\\]{fill:#035}.fill-transparent{fill:#0000}.stroke-current{stroke:currentColor}.object-cover{-o-object-fit:cover;object-fit:cover}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.p-8{padding:calc(var(--spacing)*8)}.px-0{padding-inline:calc(var(--spacing)*0)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-0{padding-block:calc(var(--spacing)*0)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-2{padding-block:calc(var(--spacing)*2)}.py-6{padding-block:calc(var(--spacing)*6)}.pt-4{padding-top:calc(var(--spacing)*4)}.pt-10{padding-top:calc(var(--spacing)*10)}.pr-5{padding-right:calc(var(--spacing)*5)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.pl-0\\.5{padding-left:calc(var(--spacing)*.5)}.pl-4{padding-left:calc(var(--spacing)*4)}.text-center{text-align:center}.text-left{text-align:left}.font-body{font-family:var(--skyra-font-body)}.font-heading{font-family:var(--skyra-font-heading)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:1.25em;line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:.875em;line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:.75em;line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-md{font-size:1.125em}.leading-4{--tw-leading:calc(var(--spacing)*4);line-height:calc(var(--spacing)*4)}.leading-none{--tw-leading:1;line-height:1}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#012A53\\]{color:#012a53}.text-action-text{color:var(--skyra-action-text-color)}@supports (color:color-mix(in lab,red,red)){.text-action-text{color:color-mix(in srgb,var(--skyra-action-text-color),transparent 0%)}}.text-bg{color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.text-bg{color:color-mix(in srgb,var(--skyra-bg-color),transparent 0%)}}.text-current{color:currentColor}.text-error{color:var(--skyra-error-color)}@supports (color:color-mix(in lab,red,red)){.text-error{color:color-mix(in srgb,var(--skyra-error-color),transparent 0%)}}.text-link{color:var(--skyra-link-color)}@supports (color:color-mix(in lab,red,red)){.text-link{color:color-mix(in srgb,var(--skyra-link-color),transparent 0%)}}.text-minimized-text{color:var(--skyra-minimized-text)}@supports (color:color-mix(in lab,red,red)){.text-minimized-text{color:color-mix(in srgb,var(--skyra-minimized-text),transparent 0%)}}.text-text{color:var(--skyra-text-color)}@supports (color:color-mix(in lab,red,red)){.text-text{color:color-mix(in srgb,var(--skyra-text-color),transparent 0%)}}.text-transparent{color:#0000}.text-warning{color:var(--skyra-warning-color)}@supports (color:color-mix(in lab,red,red)){.text-warning{color:color-mix(in srgb,var(--skyra-warning-color),transparent 0%)}}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.underline{text-decoration-line:underline}.underline-offset-4{text-underline-offset:4px}.opacity-50{opacity:.5}.opacity-85{opacity:.85}.shadow{--tw-shadow:var(--skyra-shadow,0 0 20px 4px rgb(from var(--skyra-action-color)r g b/.25));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-minimized{--tw-shadow:var(--skyra-minimized-shadow);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-\\[3px\\]{--tw-ring-offset-width:3px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.blur-\\[75px\\]{--tw-blur:blur(75px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.\\[background\\:linear-gradient\\(180deg\\,rgb\\(224\\,251\\,166\\)_0\\%\\,rgb\\(223\\.85\\,250\\.83\\,166\\.74\\)_11\\.79\\%\\,rgb\\(223\\.42\\,250\\.35\\,168\\.85\\)_21\\.38\\%\\,rgb\\(222\\.73\\,249\\.59\\,172\\.2\\)_29\\.12\\%\\,rgb\\(221\\.83\\,248\\.59\\,176\\.62\\)_35\\.34\\%\\,rgb\\(220\\.73\\,247\\.37\\,181\\.97\\)_40\\.37\\%\\,rgb\\(219\\.48\\,245\\.98\\,188\\.11\\)_44\\.56\\%\\,rgb\\(218\\.09\\,244\\.44\\,194\\.87\\)_48\\.24\\%\\,rgb\\(216\\.61\\,242\\.79\\,202\\.13\\)_51\\.76\\%\\,rgb\\(215\\.06\\,241\\.06\\,209\\.72\\)_55\\.44\\%\\,rgb\\(213\\.47\\,239\\.3\\,217\\.5\\)_59\\.63\\%\\,rgb\\(211\\.87\\,237\\.52\\,225\\.31\\)_64\\.66\\%\\,rgb\\(210\\.29\\,235\\.77\\,233\\.02\\)_70\\.88\\%\\,rgb\\(208\\.77\\,234\\.07\\,240\\.47\\)_78\\.62\\%\\,rgb\\(207\\.33\\,232\\.47\\,247\\.51\\)_88\\.21\\%\\,rgb\\(206\\,231\\,254\\)_100\\%\\)\\]{background:linear-gradient(#e0fba6,#e0fba7 11.79%,#dffaa9 21.38%,#dffaac 29.12%,#def9b1 35.34%,#ddf7b6 40.37%,#dbf6bc 44.56%,#daf4c3 48.24%,#d9f3ca 51.76%,#d7f1d2 55.44%,#d5efda 59.63%,#d4eee1 64.66%,#d2ece9 70.88%,#d1eaf0 78.62%,#cfe8f8 88.21%,#cee7fe)}.placeholder\\:text-text\\/60::-moz-placeholder{color:var(--skyra-text-color)}.placeholder\\:text-text\\/60::placeholder{color:var(--skyra-text-color)}@supports (color:color-mix(in lab,red,red)){.placeholder\\:text-text\\/60::-moz-placeholder{color:color-mix(in oklab,color-mix(in srgb,var(--skyra-text-color),transparent 0%)60%,transparent)}.placeholder\\:text-text\\/60::placeholder{color:color-mix(in oklab,color-mix(in srgb,var(--skyra-text-color),transparent 0%)60%,transparent)}}.before\\:size-2\\.5:before{content:var(--tw-content);width:calc(var(--spacing)*2.5);height:calc(var(--spacing)*2.5)}.before\\:origin-bottom-left:before{content:var(--tw-content);transform-origin:0 100%}.before\\:scale-0:before{content:var(--tw-content);--tw-scale-x:0%;--tw-scale-y:0%;--tw-scale-z:0%;scale:var(--tw-scale-x)var(--tw-scale-y)}.before\\:rounded-xs:before{content:var(--tw-content);border-radius:var(--skyra-radius-sm,2px)}.before\\:shadow-\\[inset_1em_1em_currentcolor\\]:before{content:var(--tw-content);--tw-shadow:inset 1em 1em var(--tw-shadow-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.before\\:transition-all:before{content:var(--tw-content);transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.before\\:\\[transition-duration\\:100ms\\]:before{content:var(--tw-content);transition-duration:.1s}.before\\:content-\\[\\'\\'\\]:before{--tw-content:"";content:var(--tw-content)}.before\\:\\[clip-path\\:polygon\\(14\\%_44\\%\\,0_65\\%\\,50\\%_100\\%\\,100\\%_16\\%\\,80\\%_0\\%\\,43\\%_62\\%\\)\\]:before{content:var(--tw-content);clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%)}.checked\\:border-8:checked{border-style:var(--tw-border-style);border-width:8px}.checked\\:border-action:checked{border-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.checked\\:border-action:checked{border-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.checked\\:bg-action:checked{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.checked\\:bg-action:checked{background-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.checked\\:text-bg:checked{color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.checked\\:text-bg:checked{color:color-mix(in srgb,var(--skyra-bg-color),transparent 0%)}}.checked\\:before\\:scale-100:checked:before{content:var(--tw-content);--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-within\\:ring-action:focus-within{--tw-ring-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.focus-within\\:ring-action:focus-within{--tw-ring-color:color-mix(in srgb,var(--skyra-action-color),transparent 0% )}}.focus-within\\:ring-offset-2:focus-within{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus-within\\:ring-offset-bg:focus-within{--tw-ring-offset-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.focus-within\\:ring-offset-bg:focus-within{--tw-ring-offset-color:color-mix(in srgb,var(--skyra-bg-color),transparent 0% )}}@media(hover:hover){.hover\\:border-action\\/80:hover{border-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:border-action\\/80:hover{border-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)80%,transparent)}}.hover\\:bg-action:hover{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-action:hover{background-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.hover\\:bg-action\\/10:hover{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-action\\/10:hover{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)10%,transparent)}}.hover\\:bg-action\\/80:hover{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-action\\/80:hover{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)80%,transparent)}}.hover\\:text-action-text:hover{color:var(--skyra-action-text-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:text-action-text:hover{color:color-mix(in srgb,var(--skyra-action-text-color),transparent 0%)}}.hover\\:text-link\\/80:hover{color:var(--skyra-link-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:text-link\\/80:hover{color:color-mix(in oklab,color-mix(in srgb,var(--skyra-link-color),transparent 0%)80%,transparent)}}.hover\\:ring-2:hover{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:ring-action:hover{--tw-ring-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:ring-action:hover{--tw-ring-color:color-mix(in srgb,var(--skyra-action-color),transparent 0% )}}.hover\\:ring-offset-2:hover{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.hover\\:ring-offset-bg:hover{--tw-ring-offset-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:ring-offset-bg:hover{--tw-ring-offset-color:color-mix(in srgb,var(--skyra-bg-color),transparent 0% )}}.hover\\:outline-2:hover{outline-style:var(--tw-outline-style);outline-width:2px}.hover\\:outline-offset-2:hover{outline-offset:2px}.hover\\:outline-action:hover{outline-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:outline-action:hover{outline-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:bg-action\\/10:focus-visible{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.focus-visible\\:bg-action\\/10:focus-visible{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)10%,transparent)}}.focus-visible\\:no-underline:focus-visible{text-decoration-line:none}.focus-visible\\:ring-transparent:focus-visible{--tw-ring-color:transparent}.focus-visible\\:outline-hidden:focus-visible{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.focus-visible\\:outline-hidden:focus-visible{outline-offset:2px;outline:2px solid #0000}}.focus-visible\\:outline-2:focus-visible{outline-style:var(--tw-outline-style);outline-width:2px}.focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.focus-visible\\:outline-offset-\\[-2px\\]:focus-visible{outline-offset:-2px}.focus-visible\\:outline-action:focus-visible{outline-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.focus-visible\\:outline-action:focus-visible{outline-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.focus-visible\\:outline-current:focus-visible{outline-color:currentColor}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.has-focus-visible\\:outline-2:has(:focus-visible){outline-style:var(--tw-outline-style);outline-width:2px}.has-focus-visible\\:outline-offset-4:has(:focus-visible){outline-offset:4px}.has-focus-visible\\:outline-current:has(:focus-visible){outline-color:currentColor}.aria-\\[invalid\\=true\\]\\:border-error[aria-invalid=true]{border-color:var(--skyra-error-color)}@supports (color:color-mix(in lab,red,red)){.aria-\\[invalid\\=true\\]\\:border-error[aria-invalid=true]{border-color:color-mix(in srgb,var(--skyra-error-color),transparent 0%)}}@media(hover:hover){.aria-\\[invalid\\=true\\]\\:hover\\:border-error\\/50[aria-invalid=true]:hover{border-color:var(--skyra-error-color)}@supports (color:color-mix(in lab,red,red)){.aria-\\[invalid\\=true\\]\\:hover\\:border-error\\/50[aria-invalid=true]:hover{border-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-error-color),transparent 0%)50%,transparent)}}}.aria-\\[invalid\\=true\\]\\:focus-visible\\:ring-error\\/20[aria-invalid=true]:focus-visible{--tw-ring-color:var(--skyra-error-color)}@supports (color:color-mix(in lab,red,red)){.aria-\\[invalid\\=true\\]\\:focus-visible\\:ring-error\\/20[aria-invalid=true]:focus-visible{--tw-ring-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-error-color),transparent 0% )20%,transparent)}}.data-\\[selected\\=true\\]\\:border-action[data-selected=true]{border-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.data-\\[selected\\=true\\]\\:border-action[data-selected=true]{border-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.data-\\[selected\\=true\\]\\:bg-action[data-selected=true]{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.data-\\[selected\\=true\\]\\:bg-action[data-selected=true]{background-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.data-\\[selected\\=true\\]\\:font-semibold[data-selected=true]{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.data-\\[selected\\=true\\]\\:text-action-text[data-selected=true]{color:var(--skyra-action-text-color)}@supports (color:color-mix(in lab,red,red)){.data-\\[selected\\=true\\]\\:text-action-text[data-selected=true]{color:color-mix(in srgb,var(--skyra-action-text-color),transparent 0%)}}@media(min-width:40rem){.sm\\:h-screen{height:100vh}.sm\\:w-4\\/12{width:33.3333%}.sm\\:w-8\\/12{width:66.6667%}.sm\\:p-10{padding:calc(var(--spacing)*10)}}@media(min-width:48rem){.md\\:col-span-2{grid-column:span 2/span 2}.md\\:m-4{margin:calc(var(--spacing)*4)}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:gap-2{gap:calc(var(--spacing)*2)}.md\\:gap-4{gap:calc(var(--spacing)*4)}.md\\:px-0{padding-inline:calc(var(--spacing)*0)}.md\\:px-6{padding-inline:calc(var(--spacing)*6)}.md\\:pt-6{padding-top:calc(var(--spacing)*6)}.md\\:pb-6{padding-bottom:calc(var(--spacing)*6)}.md\\:text-lg{font-size:1.25em;line-height:var(--tw-leading,var(--text-lg--line-height))}.md\\:text-sm{font-size:.875em;line-height:var(--tw-leading,var(--text-sm--line-height))}}@media(min-width:64rem){.lg\\:mt-0{margin-top:calc(var(--spacing)*0)}.lg\\:flex{display:flex}.lg\\:text-6xl{font-size:var(--text-6xl);line-height:var(--tw-leading,var(--text-6xl--line-height))}}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#000F0D\\]{background-color:#000f0d}.dark\\:text-\\[\\#FFFFFF\\]{color:#fff}}@media(pointer:coarse){.pointer-coarse\\:hidden{display:none}}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}}:host{--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-outline-style:solid;--tw-font-weight:initial;--tw-tracking:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:rotateX(0);--tw-rotate-y:rotateY(0);--tw-rotate-z:rotateZ(0);--tw-skew-x:skewX(0);--tw-skew-y:skewY(0);--tw-space-x-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-duration:initial;--tw-ease:initial}.scroll-area{scroll-timeline:--scroll-timeline y;scroll-timeline:--scroll-timeline vertical;max-height:min(var(--skyra-option-list-max-height,400px),35vh);position:relative;overflow-y:auto}@media(min-width:1024px){.scroll-area{max-height:clamp(20vh,var(--skyra-option-list-max-height,400px),35vh)}}.scroll-area .scroll-area-up,.scroll-area .scroll-area-down{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.scroll-area .scroll-area-up,.scroll-area .scroll-area-down{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-bg-color),transparent 0%)80%,transparent)}}.scroll-area .scroll-area-up,.scroll-area .scroll-area-down{-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);cursor:pointer;border:none;justify-content:center;align-items:center;width:100%;height:1.5em;transition:background-color .2s,transform .1s,opacity .2s;display:flex;position:sticky;left:0;right:0}.scroll-area .scroll-area-up:hover,.scroll-area .scroll-area-down:hover{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.scroll-area .scroll-area-up:hover,.scroll-area .scroll-area-down:hover{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-bg-color),transparent 0%)90%,transparent)}}.scroll-area .scroll-area-up:focus,.scroll-area .scroll-area-down:focus{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.scroll-area .scroll-area-up:focus,.scroll-area .scroll-area-down:focus{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-bg-color),transparent 0%)90%,transparent)}}.scroll-area .scroll-area-up:focus,.scroll-area .scroll-area-down:focus{outline:2px solid var(--color-interface);outline-offset:-2px}.scroll-area .scroll-area-up:active,.scroll-area .scroll-area-down:active{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.scroll-area .scroll-area-up:active,.scroll-area .scroll-area-down:active{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-bg-color),transparent 0%)95%,transparent)}}.scroll-area .scroll-area-up:active,.scroll-area .scroll-area-down:active{transform:scale(.98)}.scroll-area-up{opacity:1;pointer-events:auto;top:-2px}.scroll-area-down{opacity:1;pointer-events:auto;bottom:-1px}.scroll-area[data-scrollable=false] .scroll-area-up,.scroll-area[data-scrollable=false] .scroll-area-down,.scroll-area[data-scrollable=unknown] .scroll-area-up,.scroll-area[data-scrollable=unknown] .scroll-area-down{opacity:0!important;pointer-events:none!important;display:none!important}.scroll-area[data-at-top=true] .scroll-area-up,.scroll-area[data-at-bottom=true] .scroll-area-down{opacity:0!important;pointer-events:none!important}@supports (animation-timeline:scroll()){.scroll-area-up{opacity:1;pointer-events:auto;animation:linear reveal-top;animation-timeline:--scroll-timeline;animation-range:0 1px}.scroll-area-down{animation:linear reveal-bottom;animation-timeline:--scroll-timeline;animation-range:entry exit 0%}}@keyframes reveal-top{0%{opacity:0;pointer-events:none}to{opacity:1;pointer-events:auto}}@keyframes reveal-bottom{0%{opacity:1;pointer-events:auto}to{opacity:0;pointer-events:none}}:host{--ease-out:cubic-bezier(.16,1,.3,1);--ease-out-soft:cubic-bezier(.33,1,.68,1);--duration-fast:.15s;--duration:.28s;--duration-slow:.5s}@keyframes content-enter{0%{opacity:0;transform:translate(8px)}to{opacity:1;transform:translate(0)}}.survey-content-enter{animation:content-enter var(--duration-slow)var(--ease-out)both}@keyframes wrapper-enter-up{0%{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes wrapper-enter-down{0%{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}@keyframes shake{0%{transform:translate(0)}25%{transform:translate(-6px)}50%{transform:translate(6px)}75%{transform:translate(-6px)}to{transform:translate(0)}}.survey-enter-up{animation:wrapper-enter-up var(--duration)var(--ease-out)both}.survey-enter-down{animation:wrapper-enter-down var(--duration)var(--ease-out)both}.survey-shake{animation:shake var(--duration)ease-in-out}.survey-container{interpolate-size:allow-keywords;border:var(--skyra-border-width,1px)var(--skyra-border-style,solid)var(--skyra-border-color,var(--skyra-action-color));grid-template:1fr/1fr;display:grid}@supports (color:color-mix(in lab,red,red)){.survey-container{border:var(--skyra-border-width,1px)var(--skyra-border-style,solid)var(--skyra-border-color,color-mix(in srgb,var(--skyra-action-color)50%,transparent))}}.survey-container{background:var(--skyra-bg-color);border-radius:var(--skyra-radius-lg,8px);box-shadow:var(--skyra-shadow-md,var(--skyra-shadow,0 0 20px 4px rgb(from var(--skyra-action-color)r g b/.25)));transition:background-color 0s,border-color var(--duration-fast)var(--ease-out-soft),border-radius var(--duration)var(--ease-out-soft),box-shadow var(--duration-fast)var(--ease-out-soft);overflow:hidden}.survey-container[data-minimized=true]{background:var(--skyra-minimized-bg);border-color:var(--skyra-minimized-border);border-radius:var(--skyra-radius-sm,4px);box-shadow:var(--skyra-minimized-shadow);transition:background-color 0s,border-color var(--duration)var(--ease-out-soft),border-radius var(--duration)var(--ease-out-soft),box-shadow var(--duration)var(--ease-out-soft)}.survey-content,.survey-pill{grid-area:1/1}.survey-content{width:min(var(--card-max-width,400px),calc(100vw - 32px));opacity:1;visibility:visible;height:auto;transition:opacity var(--duration)var(--ease-out-soft),visibility 0s,width var(--duration-fast)var(--ease-out),height var(--duration-fast)var(--ease-out);overflow:visible}.survey-container[data-minimized=true] .survey-content{opacity:0;visibility:hidden;pointer-events:none;width:0;height:0;transition:opacity var(--duration-fast)var(--ease-out-soft),visibility 0s var(--duration-fast),width 0s,height 0s;overflow:hidden}.survey-pill{color:var(--skyra-minimized-text);cursor:pointer;white-space:nowrap;opacity:0;visibility:hidden;width:0;height:0;transition:opacity var(--duration-fast)var(--ease-out-soft),visibility 0s var(--duration-fast),width 0s var(--duration-fast),height 0s var(--duration-fast);background:0 0;border:none;align-items:center;gap:8px;padding:8px;display:flex;overflow:hidden}.survey-container[data-minimized=true] .survey-pill{opacity:1;visibility:visible;width:auto;height:auto;transition:opacity var(--duration)var(--ease-out-soft),visibility 0s,width 0s,height 0s;overflow:visible}.survey-pill:hover{background-color:#ffffff1a}.survey-pill:focus-visible{outline:2px solid var(--skyra-bg-color);outline-offset:2px}@media(prefers-reduced-motion:reduce){.survey-container,.survey-content,.survey-pill{transition-duration:.01ms!important}.survey-content-enter,.survey-enter-up,.survey-enter-down,.survey-shake{animation:none!important}}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}`,
		Dk = "",
		Fk =
			"@layer components{@media(prefers-color-scheme:dark){:host{--skyra-bg-color: #00173a;--skyra-text-color: white;--skyra-interface-color: white;--skyra-action-color: white;--skyra-secondary-color: #3d4e5f;--skyra-link-color: #d7f0fe;--skyra-error-color: #ff5555;--skyra-warning-color: #feb570;--skyra-z-index: 2147483647}}}";
	function Uk({
		cardKey: e,
		inline: t = !1,
		flow: n = !1,
		minimized: r = !1,
		children: o,
		size: i = "Regular",
		customCss: s,
		theme: a,
		themeMode: l,
		...c
	}) {
		const d = dt(),
			u = c.position ?? "BottomLeft",
			p = Ue(!0),
			f = td(
				n ? `${e}-${r}` : e,
				r
					? ".survey-pill"
					: n
						? '[part="heading"]'
						: "[data-card-focus-target]",
				n,
			);
		Hu(() => {
			p.value = !1;
		});
		const h = Et(() => {
				const v = a ?? (n ? Nl[0] : void 0);
				return v ? Ll(v, { themeMode: l ?? "Auto", selector: ":host" }) : null;
			}, [a, l, n]),
			g = {
				TopLeft: "top-0 right-auto",
				TopRight: "top-0 left-auto items-end",
				BottomLeft: "bottom-0 right-auto",
				BottomRight: "bottom-0 left-auto items-end",
			},
			b = {
				TopLeft: "survey-enter-down",
				TopRight: "survey-enter-down",
				BottomLeft: "survey-enter-up",
				BottomRight: "survey-enter-up",
			};
		return y(Le, {
			children: [
				y("style", { children: [Bk, t ? Dk : Fk] }),
				y("style", { children: Ol({ themeMode: l ?? "Auto" }) }),
				h && y("style", { children: h }),
				y("style", { children: s }),
				n && y("style", { children: ed }),
				y(
					"aside",
					{
						ref: f,
						"data-nosnippet": !0,
						part: "wrapper",
						"data-position": u,
						"data-flow": n || void 0,
						className: `
          ${
						t === !1 &&
						!n &&
						`
            fixed inset-x-0
            m-2 md:m-4
            z-wrapper
            ${u ? g[u] : ""}
          `
					}
          font-body
          ${d.value ? "" : "survey-shake"}
          ${p.value ? b[u] : ""}
        `,
						children: o,
					},
					"skyra-wrapper",
				),
			],
		});
	}
	function Hk({
		card: e,
		capture: t,
		finalCard: n,
		firstCard: r,
		sessionId: o,
		size: i,
		storedValue: s,
		survey: a,
	}) {
		const l = _e(t, (d) => d.context.language),
			c = _e(t, (d) => d.matches({ Running: "Minimized" }));
		return y(Uk, {
			cardKey: e.id,
			size: i,
			inline: a.renderType === "Inline",
			flow: a.renderType === "App",
			minimized: c,
			position: a.surveyPosition,
			customCss: a.customCss,
			theme: a.theme,
			themeMode: a.themeMode,
			children: y(
				jk,
				{
					card: e,
					sessionId: o,
					storedValue: s,
					close: () => t.send({ type: "reject" }),
					minimize: () => t.send({ type: "minimize" }),
					maximize: () => t.send({ type: "maximize" }),
					next: (d, u) => {
						t.send({ type: "submit", cardId: e.id, key: u, value: d });
					},
					prev: () => {
						t.send({ type: "goBack" });
					},
					survey: a,
					firstCard: r,
					finalCard: n,
				},
				`${e.id}-${l}`,
			),
		});
	}
	function Zk(e, t) {
		var r, o, i, s, a, l, c, d, u, p, f;
		const n = te(e.id);
		switch (e.type) {
			case "InputCard":
			case "RecruitmentCard":
				return (r = t.values) == null ? void 0 : r[e.id];
			case "LikertCard":
				return (i = (o = t.variables) == null ? void 0 : o.scales) == null
					? void 0
					: i[n];
			case "MultiSelectCard":
				return (a = (s = t.variables) == null ? void 0 : s.multiSelect) == null
					? void 0
					: a[n];
			case "SingleSelectCard":
				return (c = (l = t.variables) == null ? void 0 : l.singleSelect) == null
					? void 0
					: c[n];
			case "SegmentCard":
				return (u = (d = t.variables) == null ? void 0 : d.segments) == null
					? void 0
					: u[te(e.segment.id)];
			case "TopTaskCard":
				return (p = t.variables) == null ? void 0 : p.task;
			case "CompletionCard":
				return (f = t.variables) == null ? void 0 : f.completion;
			default:
				return;
		}
	}
	function Vk({ capture: e, api: t }) {
		const n = _e(e, (s) => s),
			{ survey: r, sessionId: o, state: i } = n.context;
		return !n.matches("Running") || !o
			? null
			: y(Y_, {
					api: t,
					survey: r,
					state: i,
					captureMachine: e,
					children: y(Wk, { capture: e, api: t }),
				});
	}
	function Wk({ capture: e, api: t }) {
		const n = so(),
			r = Ki(),
			{ state: o, sessionId: i } = _e(r, (d) => d.context),
			s =
				o.currentCard === void 0
					? 0
					: n.cards.findIndex((d) => d.order === o.currentCard),
			a = n.cards[s];
		if (!a) return null;
		const l = {
			card: a,
			capture: e,
			sessionId: i,
			survey: n,
			firstCard: s === 0,
			finalCard: s === n.cards.length - 1,
			storedValue: Zk(a, o),
		};
		return ((t == null
			? void 0
			: t.getRendererVariant(n.fullSlug, n.rendererVariant ?? "classic")) ??
			n.rendererVariant) === "beta"
			? y(hk, { ...l })
			: y(Hk, {
					...l,
					size:
						a.type === "LikertCard" && a.likertScale.likertItems.length >= 5
							? "Large"
							: "Regular",
				});
	}
	function cd(e, t, n, r) {
		if (!e) return;
		const o = new CustomEvent(t, { detail: n, bubbles: !0, composed: !0 });
		e.dispatchEvent(o), r == null || r(o);
	}
	function qk(e, t, n, r) {
		return e.ready || e.terminal
			? !1
			: (cd(t, "skyra-ready", n, r), (e.ready = !0), !0);
	}
	function Jn(e, t, n, r, o) {
		return e.ready || e.terminal ? !1 : (cd(t, n, r, o), (e.terminal = !0), !0);
	}
	function Kk(e, t, n) {
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
	function Jk(e, t) {
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
	function Gk(e) {
		return {
			slug: e,
			code: "controller_unavailable",
			message:
				"Skyra controller was not available before the inline survey timed out.",
		};
	}
	function Yk(e) {
		return {
			slug: e,
			code: "unsupported_controller_version",
			message: "Inline lifecycle events require the Skyra V2 controller.",
		};
	}
	function dn(e) {
		const t = e == null ? void 0 : e.getRootNode();
		return typeof ShadowRoot < "u" && t instanceof ShadowRoot ? t.host : null;
	}
	const Ee = new B_();
	if (typeof window < "u") {
		window.skyra || (window.skyra = Ee),
			window.SKYRA_CONFIG ||
				(window.SKYRA_CONFIG = {
					autoStart: !0,
					org: "",
					cookieConsent: !0,
					testMode: !1,
				});
		const e =
				((pd = window.SKYRA_CONFIG) == null ? void 0 : pd.autoStart) !== !1,
			t = !!((fd = window.SKYRA_CONFIG) != null && fd.org);
		e && t
			? Ee.start()
			: e && !t && console.warn("Skyra: org is not specified in SKYRA_CONFIG");
	}
	function Xi({ capture: e }) {
		return y(Vk, { capture: e, api: Ee });
	}
	function ud({
		slug: e,
		inline: t,
		cookieConsent: n,
		consent: r = !0,
		lang: o,
		onReady: i,
		onUnavailable: s,
		onError: a,
	}) {
		const [l, c] = ge(0),
			d = 30,
			u = X(null),
			p = X({ ready: !1, terminal: !1 });
		ie(() => {
			o && Ee.setExplicitLanguage(e, o);
		}, [e, o]),
			ie(() => {
				var v;
				if (!Ee.controller && l < d) {
					const _ = setInterval(() => {
						Ee.controller ? (clearInterval(_), c(0)) : c((x) => x + 1);
					}, 100);
					return () => clearInterval(_);
				}
				l >= d &&
					!Ee.controller &&
					(((v = window.SKYRA_CONFIG) == null ? void 0 : v.autoStart) !== !1 &&
						Je(`Skyra survey (${e}): No controller found after ${d} attempts`),
					Jn(p.current, dn(u.current), "skyra-error", Gk(e), a));
			}, [e, l, Ee.controller, a]),
			ie(() => {
				var A, I;
				const v = Ee.controller;
				if (!v) return;
				const _ = `${e}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
				let x = !1;
				const S = () => {
					x ||
						((x = !0),
						v.send({ type: "surveyMounted", slug: e, instanceId: _ }));
				};
				return (
					(A = v.on) == null || A.call(v, "ready", S),
					((I = v.getSnapshot) == null ? void 0 : I.call(v).value) ===
						"Ready" && S(),
					() => {
						var O;
						(O = v.off) == null || O.call(v, "ready", S);
					}
				);
			}, [e, Ee.controller]);
		const f = Ee.controller;
		if (!f) return y("span", { ref: u, hidden: !0 });
		const h = f.getVersion() === "v2";
		if (
			(ie(() => {
				h ||
					p.current.terminal ||
					Jn(p.current, dn(u.current), "skyra-unavailable", Yk(e), s);
			}, [h, e, s]),
			!h)
		)
			return y("span", { ref: u, hidden: !0 });
		const g = _e(f.getActor(), (v) => f.findCaptureBySlug(e)),
			b = _e(f.getActor(), (v) => {
				var S, A, I;
				const _ =
						(S = v.context.surveys) == null
							? void 0
							: S.find((O) => O.fullSlug === e),
					x =
						(A = v.context.inlineSurveys) == null
							? void 0
							: A.some((O) => O.fullSlug === e);
				return {
					ready: v.value === "Ready",
					survey: _,
					isInlineEligible: x,
					failure: (I = v.context.inlineFailures) == null ? void 0 : I[e],
				};
			});
		return (
			ie(() => {
				if (!g || p.current.ready || p.current.terminal) return;
				const v = g.getSnapshot(),
					_ = v.context.survey,
					x = v.context.sessionId;
				!_ ||
					_.renderType !== "Inline" ||
					!x ||
					qk(
						p.current,
						dn(u.current),
						{ slug: e, surveyId: _.id, sessionId: x },
						i,
					);
			}, [g, e, i]),
			ie(() => {
				if (!b.failure || p.current.ready || p.current.terminal) return;
				const v = Jk(e, b.failure);
				v.name === "skyra-unavailable"
					? Jn(p.current, dn(u.current), v.name, v.detail, s)
					: Jn(p.current, dn(u.current), v.name, v.detail, a);
			}, [b.failure, e, s, a]),
			ie(() => {
				if (!b.ready || g || b.failure || p.current.ready || p.current.terminal)
					return;
				const v = window.setTimeout(() => {
					if (p.current.ready || p.current.terminal) return;
					const _ = Kk(e, b.survey, b.isInlineEligible);
					_ && Jn(p.current, dn(u.current), "skyra-unavailable", _, s);
				}, 100);
				return () => window.clearTimeout(v);
			}, [g, b, e, s]),
			y(Le, {
				children: [
					y("span", { ref: u, hidden: !0 }),
					g ? y(Xi, { capture: g }) : null,
				],
			})
		);
	}
	function dd({ slug: e }) {
		const t = Ee.previewController,
			n = _e(t ?? void 0, (r) => (r == null ? void 0 : r.context.machine));
		return n ? y(Xi, { capture: n }) : null;
	}
	return (
		typeof customElements.get("skyra-survey") < "u" ||
			Es(
				ud,
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
			Es(dd, "skyra-preview", ["slug"], { shadow: !0 }),
		(pn.Survey = ud),
		(pn.SurveyPreview = dd),
		(pn.SurveyWidget = Xi),
		Object.defineProperty(pn, Symbol.toStringTag, { value: "Module" }),
		pn
	);
})({});
