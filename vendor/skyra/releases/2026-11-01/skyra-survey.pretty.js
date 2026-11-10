var hA = Object.defineProperty;
var gA = (dt, et, de) =>
	et in dt
		? hA(dt, et, { enumerable: !0, configurable: !0, writable: !0, value: de })
		: (dt[et] = de);
var W = (dt, et, de) => gA(dt, typeof et != "symbol" ? et + "" : et, de);
var skyraSurvey = (function (dt) {
	"use strict";
	var gv, wu, Ds, js, ku, _u, Su, xu, $u, Cu, Bs, Us, zu, Iu, mv, yv;
	var et,
		de,
		Tu,
		Eu,
		kr,
		Au,
		Ru,
		Ou,
		Pu,
		Hs,
		Vs,
		Zs,
		Mu,
		Zn = {},
		Lu = [],
		wv = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
		si = Array.isArray;
	function vt(e, t) {
		for (var r in t) e[r] = t[r];
		return e;
	}
	function qs(e) {
		e && e.parentNode && e.parentNode.removeChild(e);
	}
	function Gr(e, t, r) {
		var n,
			o,
			i,
			s = {};
		for (i in t)
			i == "key" ? (n = t[i]) : i == "ref" ? (o = t[i]) : (s[i] = t[i]);
		if (
			(arguments.length > 2 &&
				(s.children = arguments.length > 3 ? et.call(arguments, 2) : r),
			typeof e == "function" && e.defaultProps != null)
		)
			for (i in e.defaultProps) s[i] === void 0 && (s[i] = e.defaultProps[i]);
		return qn(e, s, n, o, null);
	}
	function qn(e, t, r, n, o) {
		var i = {
			type: e,
			props: t,
			key: r,
			ref: n,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__c: null,
			constructor: void 0,
			__v: o ?? ++Tu,
			__i: -1,
			__u: 0,
		};
		return o == null && de.vnode != null && de.vnode(i), i;
	}
	function bt(e) {
		return e.children;
	}
	function Wn(e, t) {
		(this.props = e), (this.context = t);
	}
	function Yr(e, t) {
		if (t == null) return e.__ ? Yr(e.__, e.__i + 1) : null;
		for (var r; t < e.__k.length; t++)
			if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
		return typeof e.type == "function" ? Yr(e) : null;
	}
	function Nu(e) {
		var t, r;
		if ((e = e.__) != null && e.__c != null) {
			for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
				if ((r = e.__k[t]) != null && r.__e != null) {
					e.__e = e.__c.base = r.__e;
					break;
				}
			return Nu(e);
		}
	}
	function Ws(e) {
		((!e.__d && (e.__d = !0) && kr.push(e) && !ai.__r++) ||
			Au != de.debounceRendering) &&
			((Au = de.debounceRendering) || Ru)(ai);
	}
	function ai() {
		for (var e, t, r, n, o, i, s, a = 1; kr.length; )
			kr.length > a && kr.sort(Ou),
				(e = kr.shift()),
				(a = kr.length),
				e.__d &&
					((r = void 0),
					(n = void 0),
					(o = (n = (t = e).__v).__e),
					(i = []),
					(s = []),
					t.__P &&
						(((r = vt({}, n)).__v = n.__v + 1),
						de.vnode && de.vnode(r),
						Ks(
							t.__P,
							r,
							n,
							t.__n,
							t.__P.namespaceURI,
							32 & n.__u ? [o] : null,
							i,
							o ?? Yr(n),
							!!(32 & n.__u),
							s,
						),
						(r.__v = n.__v),
						(r.__.__k[r.__i] = r),
						Fu(i, r, s),
						(n.__e = n.__ = null),
						r.__e != o && Nu(r)));
		ai.__r = 0;
	}
	function Du(e, t, r, n, o, i, s, a, l, u, d) {
		var c,
			f,
			p,
			h,
			g,
			y,
			v,
			b = (n && n.__k) || Lu,
			w = t.length;
		for (l = kv(r, t, b, l, w), c = 0; c < w; c++)
			(p = r.__k[c]) != null &&
				((f = p.__i == -1 ? Zn : b[p.__i] || Zn),
				(p.__i = c),
				(y = Ks(e, p, f, o, i, s, a, l, u, d)),
				(h = p.__e),
				p.ref &&
					f.ref != p.ref &&
					(f.ref && Gs(f.ref, null, p), d.push(p.ref, p.__c || h, p)),
				g == null && h != null && (g = h),
				(v = !!(4 & p.__u)) || f.__k === p.__k
					? (l = ju(p, l, e, v))
					: typeof p.type == "function" && y !== void 0
						? (l = y)
						: h && (l = h.nextSibling),
				(p.__u &= -7));
		return (r.__e = g), l;
	}
	function kv(e, t, r, n, o) {
		var i,
			s,
			a,
			l,
			u,
			d = r.length,
			c = d,
			f = 0;
		for (e.__k = new Array(o), i = 0; i < o; i++)
			(s = t[i]) != null && typeof s != "boolean" && typeof s != "function"
				? (typeof s == "string" ||
					typeof s == "number" ||
					typeof s == "bigint" ||
					s.constructor == String
						? (s = e.__k[i] = qn(null, s, null, null, null))
						: si(s)
							? (s = e.__k[i] = qn(bt, { children: s }, null, null, null))
							: s.constructor === void 0 && s.__b > 0
								? (s = e.__k[i] =
										qn(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v))
								: (e.__k[i] = s),
					(l = i + f),
					(s.__ = e),
					(s.__b = e.__b + 1),
					(a = null),
					(u = s.__i = _v(s, r, l, c)) != -1 &&
						(c--, (a = r[u]) && (a.__u |= 2)),
					a == null || a.__v == null
						? (u == -1 && (o > d ? f-- : o < d && f++),
							typeof s.type != "function" && (s.__u |= 4))
						: u != l &&
							(u == l - 1
								? f--
								: u == l + 1
									? f++
									: (u > l ? f-- : f++, (s.__u |= 4))))
				: (e.__k[i] = null);
		if (c)
			for (i = 0; i < d; i++)
				(a = r[i]) != null &&
					(2 & a.__u) == 0 &&
					(a.__e == n && (n = Yr(a)), Vu(a, a));
		return n;
	}
	function ju(e, t, r, n) {
		var o, i;
		if (typeof e.type == "function") {
			for (o = e.__k, i = 0; o && i < o.length; i++)
				o[i] && ((o[i].__ = e), (t = ju(o[i], t, r, n)));
			return t;
		}
		e.__e != t &&
			(n &&
				(t && e.type && !t.parentNode && (t = Yr(e)),
				r.insertBefore(e.__e, t || null)),
			(t = e.__e));
		do t = t && t.nextSibling;
		while (t != null && t.nodeType == 8);
		return t;
	}
	function _v(e, t, r, n) {
		var o,
			i,
			s,
			a = e.key,
			l = e.type,
			u = t[r],
			d = u != null && (2 & u.__u) == 0;
		if ((u === null && a == null) || (d && a == u.key && l == u.type)) return r;
		if (n > (d ? 1 : 0)) {
			for (o = r - 1, i = r + 1; o >= 0 || i < t.length; )
				if (
					(u = t[(s = o >= 0 ? o-- : i++)]) != null &&
					(2 & u.__u) == 0 &&
					a == u.key &&
					l == u.type
				)
					return s;
		}
		return -1;
	}
	function Bu(e, t, r) {
		t[0] == "-"
			? e.setProperty(t, r ?? "")
			: (e[t] =
					r == null ? "" : typeof r != "number" || wv.test(t) ? r : r + "px");
	}
	function li(e, t, r, n, o) {
		var i, s;
		e: if (t == "style")
			if (typeof r == "string") e.style.cssText = r;
			else {
				if ((typeof n == "string" && (e.style.cssText = n = ""), n))
					for (t in n) (r && t in r) || Bu(e.style, t, "");
				if (r) for (t in r) (n && r[t] == n[t]) || Bu(e.style, t, r[t]);
			}
		else if (t[0] == "o" && t[1] == "n")
			(i = t != (t = t.replace(Pu, "$1"))),
				(s = t.toLowerCase()),
				(t =
					s in e || t == "onFocusOut" || t == "onFocusIn"
						? s.slice(2)
						: t.slice(2)),
				e.l || (e.l = {}),
				(e.l[t + i] = r),
				r
					? n
						? (r.u = n.u)
						: ((r.u = Hs), e.addEventListener(t, i ? Zs : Vs, i))
					: e.removeEventListener(t, i ? Zs : Vs, i);
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
					e[t] = r ?? "";
					break e;
				} catch {}
			typeof r == "function" ||
				(r == null || (r === !1 && t[4] != "-")
					? e.removeAttribute(t)
					: e.setAttribute(t, t == "popover" && r == 1 ? "" : r));
		}
	}
	function Uu(e) {
		return function (t) {
			if (this.l) {
				var r = this.l[t.type + e];
				if (t.t == null) t.t = Hs++;
				else if (t.t < r.u) return;
				return r(de.event ? de.event(t) : t);
			}
		};
	}
	function Ks(e, t, r, n, o, i, s, a, l, u) {
		var d,
			c,
			f,
			p,
			h,
			g,
			y,
			v,
			b,
			w,
			S,
			T,
			O,
			N,
			D,
			I,
			P,
			_ = t.type;
		if (t.constructor !== void 0) return null;
		128 & r.__u && ((l = !!(32 & r.__u)), (i = [(a = t.__e = r.__e)])),
			(d = de.__b) && d(t);
		e: if (typeof _ == "function")
			try {
				if (
					((v = t.props),
					(b = "prototype" in _ && _.prototype.render),
					(w = (d = _.contextType) && n[d.__c]),
					(S = d ? (w ? w.props.value : d.__) : n),
					r.__c
						? (y = (c = t.__c = r.__c).__ = c.__E)
						: (b
								? (t.__c = c = new _(v, S))
								: ((t.__c = c = new Wn(v, S)),
									(c.constructor = _),
									(c.render = xv)),
							w && w.sub(c),
							c.state || (c.state = {}),
							(c.__n = n),
							(f = c.__d = !0),
							(c.__h = []),
							(c._sb = [])),
					b && c.__s == null && (c.__s = c.state),
					b &&
						_.getDerivedStateFromProps != null &&
						(c.__s == c.state && (c.__s = vt({}, c.__s)),
						vt(c.__s, _.getDerivedStateFromProps(v, c.__s))),
					(p = c.props),
					(h = c.state),
					(c.__v = t),
					f)
				)
					b &&
						_.getDerivedStateFromProps == null &&
						c.componentWillMount != null &&
						c.componentWillMount(),
						b && c.componentDidMount != null && c.__h.push(c.componentDidMount);
				else {
					if (
						(b &&
							_.getDerivedStateFromProps == null &&
							v !== p &&
							c.componentWillReceiveProps != null &&
							c.componentWillReceiveProps(v, S),
						t.__v == r.__v ||
							(!c.__e &&
								c.shouldComponentUpdate != null &&
								c.shouldComponentUpdate(v, c.__s, S) === !1))
					) {
						for (
							t.__v != r.__v &&
								((c.props = v), (c.state = c.__s), (c.__d = !1)),
								t.__e = r.__e,
								t.__k = r.__k,
								t.__k.some(function (A) {
									A && (A.__ = t);
								}),
								T = 0;
							T < c._sb.length;
							T++
						)
							c.__h.push(c._sb[T]);
						(c._sb = []), c.__h.length && s.push(c);
						break e;
					}
					c.componentWillUpdate != null && c.componentWillUpdate(v, c.__s, S),
						b &&
							c.componentDidUpdate != null &&
							c.__h.push(function () {
								c.componentDidUpdate(p, h, g);
							});
				}
				if (
					((c.context = S),
					(c.props = v),
					(c.__P = e),
					(c.__e = !1),
					(O = de.__r),
					(N = 0),
					b)
				) {
					for (
						c.state = c.__s,
							c.__d = !1,
							O && O(t),
							d = c.render(c.props, c.state, c.context),
							D = 0;
						D < c._sb.length;
						D++
					)
						c.__h.push(c._sb[D]);
					c._sb = [];
				} else
					do
						(c.__d = !1),
							O && O(t),
							(d = c.render(c.props, c.state, c.context)),
							(c.state = c.__s);
					while (c.__d && ++N < 25);
				(c.state = c.__s),
					c.getChildContext != null && (n = vt(vt({}, n), c.getChildContext())),
					b &&
						!f &&
						c.getSnapshotBeforeUpdate != null &&
						(g = c.getSnapshotBeforeUpdate(p, h)),
					(I = d),
					d != null &&
						d.type === bt &&
						d.key == null &&
						(I = Hu(d.props.children)),
					(a = Du(e, si(I) ? I : [I], t, r, n, o, i, s, a, l, u)),
					(c.base = t.__e),
					(t.__u &= -161),
					c.__h.length && s.push(c),
					y && (c.__E = c.__ = null);
			} catch (A) {
				if (((t.__v = null), l || i != null))
					if (A.then) {
						for (
							t.__u |= l ? 160 : 128;
							a && a.nodeType == 8 && a.nextSibling;
						)
							a = a.nextSibling;
						(i[i.indexOf(a)] = null), (t.__e = a);
					} else {
						for (P = i.length; P--; ) qs(i[P]);
						Js(t);
					}
				else (t.__e = r.__e), (t.__k = r.__k), A.then || Js(t);
				de.__e(A, t, r);
			}
		else
			i == null && t.__v == r.__v
				? ((t.__k = r.__k), (t.__e = r.__e))
				: (a = t.__e = Sv(r.__e, t, r, n, o, i, s, l, u));
		return (d = de.diffed) && d(t), 128 & t.__u ? void 0 : a;
	}
	function Js(e) {
		e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(Js);
	}
	function Fu(e, t, r) {
		for (var n = 0; n < r.length; n++) Gs(r[n], r[++n], r[++n]);
		de.__c && de.__c(t, e),
			e.some(function (o) {
				try {
					(e = o.__h),
						(o.__h = []),
						e.some(function (i) {
							i.call(o);
						});
				} catch (i) {
					de.__e(i, o.__v);
				}
			});
	}
	function Hu(e) {
		return typeof e != "object" || e == null || (e.__b && e.__b > 0)
			? e
			: si(e)
				? e.map(Hu)
				: vt({}, e);
	}
	function Sv(e, t, r, n, o, i, s, a, l) {
		var u,
			d,
			c,
			f,
			p,
			h,
			g,
			y = r.props || Zn,
			v = t.props,
			b = t.type;
		if (
			(b == "svg"
				? (o = "http://www.w3.org/2000/svg")
				: b == "math"
					? (o = "http://www.w3.org/1998/Math/MathML")
					: o || (o = "http://www.w3.org/1999/xhtml"),
			i != null)
		) {
			for (u = 0; u < i.length; u++)
				if (
					(p = i[u]) &&
					"setAttribute" in p == !!b &&
					(b ? p.localName == b : p.nodeType == 3)
				) {
					(e = p), (i[u] = null);
					break;
				}
		}
		if (e == null) {
			if (b == null) return document.createTextNode(v);
			(e = document.createElementNS(o, b, v.is && v)),
				a && (de.__m && de.__m(t, i), (a = !1)),
				(i = null);
		}
		if (b == null) y === v || (a && e.data == v) || (e.data = v);
		else {
			if (((i = i && et.call(e.childNodes)), !a && i != null))
				for (y = {}, u = 0; u < e.attributes.length; u++)
					y[(p = e.attributes[u]).name] = p.value;
			for (u in y)
				if (((p = y[u]), u != "children")) {
					if (u == "dangerouslySetInnerHTML") c = p;
					else if (!(u in v)) {
						if (
							(u == "value" && "defaultValue" in v) ||
							(u == "checked" && "defaultChecked" in v)
						)
							continue;
						li(e, u, null, p, o);
					}
				}
			for (u in v)
				(p = v[u]),
					u == "children"
						? (f = p)
						: u == "dangerouslySetInnerHTML"
							? (d = p)
							: u == "value"
								? (h = p)
								: u == "checked"
									? (g = p)
									: (a && typeof p != "function") ||
										y[u] === p ||
										li(e, u, p, y[u], o);
			if (d)
				a ||
					(c && (d.__html == c.__html || d.__html == e.innerHTML)) ||
					(e.innerHTML = d.__html),
					(t.__k = []);
			else if (
				(c && (e.innerHTML = ""),
				Du(
					t.type == "template" ? e.content : e,
					si(f) ? f : [f],
					t,
					r,
					n,
					b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o,
					i,
					s,
					i ? i[0] : r.__k && Yr(r, 0),
					a,
					l,
				),
				i != null)
			)
				for (u = i.length; u--; ) qs(i[u]);
			a ||
				((u = "value"),
				b == "progress" && h == null
					? e.removeAttribute("value")
					: h != null &&
						(h !== e[u] ||
							(b == "progress" && !h) ||
							(b == "option" && h != y[u])) &&
						li(e, u, h, y[u], o),
				(u = "checked"),
				g != null && g != e[u] && li(e, u, g, y[u], o));
		}
		return e;
	}
	function Gs(e, t, r) {
		try {
			if (typeof e == "function") {
				var n = typeof e.__u == "function";
				n && e.__u(), (n && t == null) || (e.__u = e(t));
			} else e.current = t;
		} catch (o) {
			de.__e(o, r);
		}
	}
	function Vu(e, t, r) {
		var n, o;
		if (
			(de.unmount && de.unmount(e),
			(n = e.ref) && ((n.current && n.current != e.__e) || Gs(n, null, t)),
			(n = e.__c) != null)
		) {
			if (n.componentWillUnmount)
				try {
					n.componentWillUnmount();
				} catch (i) {
					de.__e(i, t);
				}
			n.base = n.__P = null;
		}
		if ((n = e.__k))
			for (o = 0; o < n.length; o++)
				n[o] && Vu(n[o], t, r || typeof e.type != "function");
		r || qs(e.__e), (e.__c = e.__ = e.__e = void 0);
	}
	function xv(e, t, r) {
		return this.constructor(e, r);
	}
	function ui(e, t, r) {
		var n, o, i, s;
		t == document && (t = document.documentElement),
			de.__ && de.__(e, t),
			(o = (n = typeof r == "function") ? null : (r && r.__k) || t.__k),
			(i = []),
			(s = []),
			Ks(
				t,
				(e = ((!n && r) || t).__k = Gr(bt, null, [e])),
				o || Zn,
				Zn,
				t.namespaceURI,
				!n && r ? [r] : o ? null : t.firstChild ? et.call(t.childNodes) : null,
				i,
				!n && r ? r : o ? o.__e : t.firstChild,
				n,
				s,
			),
			Fu(i, e, s);
	}
	function Zu(e, t) {
		ui(e, t, Zu);
	}
	function qu(e, t, r) {
		var n,
			o,
			i,
			s,
			a = vt({}, e.props);
		for (i in (e.type && e.type.defaultProps && (s = e.type.defaultProps), t))
			i == "key"
				? (n = t[i])
				: i == "ref"
					? (o = t[i])
					: (a[i] = t[i] === void 0 && s != null ? s[i] : t[i]);
		return (
			arguments.length > 2 &&
				(a.children = arguments.length > 3 ? et.call(arguments, 2) : r),
			qn(e.type, a, n || e.key, o || e.ref, null)
		);
	}
	function $v(e) {
		function t(r) {
			var n, o;
			return (
				this.getChildContext ||
					((n = new Set()),
					((o = {})[t.__c] = this),
					(this.getChildContext = function () {
						return o;
					}),
					(this.componentWillUnmount = function () {
						n = null;
					}),
					(this.shouldComponentUpdate = function (i) {
						this.props.value != i.value &&
							n.forEach(function (s) {
								(s.__e = !0), Ws(s);
							});
					}),
					(this.sub = function (i) {
						n.add(i);
						var s = i.componentWillUnmount;
						i.componentWillUnmount = function () {
							n && n.delete(i), s && s.call(i);
						};
					})),
				r.children
			);
		}
		return (
			(t.__c = "__cC" + Mu++),
			(t.__ = e),
			(t.Provider =
				t.__l =
				(t.Consumer = function (r, n) {
					return r.children(n);
				}).contextType =
					t),
			t
		);
	}
	(et = Lu.slice),
		(de = {
			__e: function (e, t, r, n) {
				for (var o, i, s; (t = t.__); )
					if ((o = t.__c) && !o.__)
						try {
							if (
								((i = o.constructor) &&
									i.getDerivedStateFromError != null &&
									(o.setState(i.getDerivedStateFromError(e)), (s = o.__d)),
								o.componentDidCatch != null &&
									(o.componentDidCatch(e, n || {}), (s = o.__d)),
								s)
							)
								return (o.__E = o);
						} catch (a) {
							e = a;
						}
				throw e;
			},
		}),
		(Tu = 0),
		(Eu = function (e) {
			return e != null && e.constructor === void 0;
		}),
		(Wn.prototype.setState = function (e, t) {
			var r;
			(r =
				this.__s != null && this.__s != this.state
					? this.__s
					: (this.__s = vt({}, this.state))),
				typeof e == "function" && (e = e(vt({}, r), this.props)),
				e && vt(r, e),
				e != null && this.__v && (t && this._sb.push(t), Ws(this));
		}),
		(Wn.prototype.forceUpdate = function (e) {
			this.__v && ((this.__e = !0), e && this.__h.push(e), Ws(this));
		}),
		(Wn.prototype.render = bt),
		(kr = []),
		(Ru =
			typeof Promise == "function"
				? Promise.prototype.then.bind(Promise.resolve())
				: setTimeout),
		(Ou = function (e, t) {
			return e.__v.__b - t.__v.__b;
		}),
		(ai.__r = 0),
		(Pu = /(PointerCapture)$|Capture$/i),
		(Hs = 0),
		(Vs = Uu(!1)),
		(Zs = Uu(!0)),
		(Mu = 0);
	var _r,
		be,
		Ys,
		Wu,
		Kn = 0,
		Ku = [],
		Ae = de,
		Ju = Ae.__b,
		Gu = Ae.__r,
		Yu = Ae.diffed,
		Xu = Ae.__c,
		Qu = Ae.unmount,
		ec = Ae.__;
	function Jn(e, t) {
		Ae.__h && Ae.__h(be, e, Kn || t), (Kn = 0);
		var r = be.__H || (be.__H = { __: [], __h: [] });
		return e >= r.__.length && r.__.push({}), r.__[e];
	}
	function Fe(e) {
		return (Kn = 1), tc(oc, e);
	}
	function tc(e, t, r) {
		var n = Jn(_r++, 2);
		if (
			((n.t = e),
			!n.__c &&
				((n.__ = [
					oc(void 0, t),
					function (a) {
						var l = n.__N ? n.__N[0] : n.__[0],
							u = n.t(l, a);
						l !== u && ((n.__N = [u, n.__[1]]), n.__c.setState({}));
					},
				]),
				(n.__c = be),
				!be.__f))
		) {
			var o = function (a, l, u) {
				if (!n.__c.__H) return !0;
				var d = n.__c.__H.__.filter(function (f) {
					return !!f.__c;
				});
				if (
					d.every(function (f) {
						return !f.__N;
					})
				)
					return !i || i.call(this, a, l, u);
				var c = n.__c.props !== a;
				return (
					d.forEach(function (f) {
						if (f.__N) {
							var p = f.__[0];
							(f.__ = f.__N), (f.__N = void 0), p !== f.__[0] && (c = !0);
						}
					}),
					(i && i.call(this, a, l, u)) || c
				);
			};
			be.__f = !0;
			var i = be.shouldComponentUpdate,
				s = be.componentWillUpdate;
			(be.componentWillUpdate = function (a, l, u) {
				if (this.__e) {
					var d = i;
					(i = void 0), o(a, l, u), (i = d);
				}
				s && s.call(this, a, l, u);
			}),
				(be.shouldComponentUpdate = o);
		}
		return n.__N || n.__;
	}
	function Re(e, t) {
		var r = Jn(_r++, 3);
		!Ae.__s && Qs(r.__H, t) && ((r.__ = e), (r.u = t), be.__H.__h.push(r));
	}
	function Cv(e, t) {
		var r = Jn(_r++, 4);
		!Ae.__s && Qs(r.__H, t) && ((r.__ = e), (r.u = t), be.__h.push(r));
	}
	function Se(e) {
		return (
			(Kn = 5),
			Xr(function () {
				return { current: e };
			}, [])
		);
	}
	function Xr(e, t) {
		var r = Jn(_r++, 7);
		return Qs(r.__H, t) && ((r.__ = e()), (r.__H = t), (r.__h = e)), r.__;
	}
	function rc(e, t) {
		return (
			(Kn = 8),
			Xr(function () {
				return e;
			}, t)
		);
	}
	function ci(e) {
		var t = be.context[e.__c],
			r = Jn(_r++, 9);
		return (
			(r.c = e),
			t ? (r.__ == null && ((r.__ = !0), t.sub(be)), t.props.value) : e.__
		);
	}
	function zv() {
		for (var e; (e = Ku.shift()); )
			if (e.__P && e.__H)
				try {
					e.__H.__h.forEach(di), e.__H.__h.forEach(Xs), (e.__H.__h = []);
				} catch (t) {
					(e.__H.__h = []), Ae.__e(t, e.__v);
				}
	}
	(Ae.__b = function (e) {
		(be = null), Ju && Ju(e);
	}),
		(Ae.__ = function (e, t) {
			e && t.__k && t.__k.__m && (e.__m = t.__k.__m), ec && ec(e, t);
		}),
		(Ae.__r = function (e) {
			Gu && Gu(e), (_r = 0);
			var t = (be = e.__c).__H;
			t &&
				(Ys === be
					? ((t.__h = []),
						(be.__h = []),
						t.__.forEach(function (r) {
							r.__N && (r.__ = r.__N), (r.u = r.__N = void 0);
						}))
					: (t.__h.forEach(di), t.__h.forEach(Xs), (t.__h = []), (_r = 0))),
				(Ys = be);
		}),
		(Ae.diffed = function (e) {
			Yu && Yu(e);
			var t = e.__c;
			t &&
				t.__H &&
				(t.__H.__h.length &&
					((Ku.push(t) !== 1 && Wu === Ae.requestAnimationFrame) ||
						((Wu = Ae.requestAnimationFrame) || Iv)(zv)),
				t.__H.__.forEach(function (r) {
					r.u && (r.__H = r.u), (r.u = void 0);
				})),
				(Ys = be = null);
		}),
		(Ae.__c = function (e, t) {
			t.some(function (r) {
				try {
					r.__h.forEach(di),
						(r.__h = r.__h.filter(function (n) {
							return !n.__ || Xs(n);
						}));
				} catch (n) {
					t.some(function (o) {
						o.__h && (o.__h = []);
					}),
						(t = []),
						Ae.__e(n, r.__v);
				}
			}),
				Xu && Xu(e, t);
		}),
		(Ae.unmount = function (e) {
			Qu && Qu(e);
			var t,
				r = e.__c;
			r &&
				r.__H &&
				(r.__H.__.forEach(function (n) {
					try {
						di(n);
					} catch (o) {
						t = o;
					}
				}),
				(r.__H = void 0),
				t && Ae.__e(t, r.__v));
		});
	var nc = typeof requestAnimationFrame == "function";
	function Iv(e) {
		var t,
			r = function () {
				clearTimeout(n), nc && cancelAnimationFrame(t), setTimeout(e);
			},
			n = setTimeout(r, 35);
		nc && (t = requestAnimationFrame(r));
	}
	function di(e) {
		var t = be,
			r = e.__c;
		typeof r == "function" && ((e.__c = void 0), r()), (be = t);
	}
	function Xs(e) {
		var t = be;
		(e.__c = e.__()), (be = t);
	}
	function Qs(e, t) {
		return (
			!e ||
			e.length !== t.length ||
			t.some(function (r, n) {
				return r !== e[n];
			})
		);
	}
	function oc(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function pi() {
		return (
			(pi = Object.assign
				? Object.assign.bind()
				: function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var r = arguments[t];
							for (var n in r)
								Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
						}
						return e;
					}),
			pi.apply(this, arguments)
		);
	}
	function ic(e, t) {
		if (e == null) return {};
		var r,
			n,
			o = {},
			i = Object.keys(e);
		for (n = 0; n < i.length; n++) t.indexOf((r = i[n])) >= 0 || (o[r] = e[r]);
		return o;
	}
	var Tv = ["context", "children"],
		Ev = ["useFragment"];
	function sc(e, t, r, n) {
		function o() {
			var i,
				s = Reflect.construct(HTMLElement, [], o);
			return (
				(s._vdomComponent = e),
				n && n.shadow
					? ((s._root = s.attachShadow({
							mode: n.mode || "open",
							serializable: (i = n.serializable) != null && i,
						})),
						n.adoptedStyleSheets &&
							(s._root.adoptedStyleSheets = n.adoptedStyleSheets))
					: (s._root = s),
				s
			);
		}
		return (
			((o.prototype = Object.create(HTMLElement.prototype)).constructor = o),
			(o.prototype.connectedCallback = function () {
				Rv.call(this, n);
			}),
			(o.prototype.attributeChangedCallback = Ov),
			(o.prototype.disconnectedCallback = Pv),
			(r = r || e.observedAttributes || Object.keys(e.propTypes || {})),
			(o.observedAttributes = r),
			e.formAssociated && (o.formAssociated = !0),
			r.forEach(function (i) {
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
	function Av(e) {
		this.getChildContext = function () {
			return e.context;
		};
		var t = e.children,
			r = ic(e, Tv);
		return qu(t, r);
	}
	function Rv(e) {
		var t = new CustomEvent("_preact", {
			detail: {},
			bubbles: !0,
			cancelable: !0,
		});
		this.dispatchEvent(t),
			(this._vdom = Gr(
				Av,
				pi({}, this._props, { context: t.detail.context }),
				uc(this, this._vdomComponent, e),
			)),
			(this.hasAttribute("hydrate") ? Zu : ui)(this._vdom, this._root);
	}
	function ac(e) {
		return e.replace(/-(\w)/g, function (t, r) {
			return r ? r.toUpperCase() : "";
		});
	}
	function Ov(e, t, r) {
		if (this._vdom) {
			var n = {};
			(n[e] = r = r ?? void 0),
				(n[ac(e)] = r),
				(this._vdom = qu(this._vdom, n)),
				ui(this._vdom, this._root);
		}
	}
	function Pv() {
		ui((this._vdom = null), this._root);
	}
	function lc(e, t) {
		var r = this,
			n = e.useFragment,
			o = ic(e, Ev);
		return Gr(
			n ? bt : "slot",
			pi({}, o, {
				ref: function (i) {
					i
						? ((r.ref = i),
							r._listener ||
								((r._listener = function (s) {
									s.stopPropagation(), (s.detail.context = t);
								}),
								i.addEventListener("_preact", r._listener)))
						: r.ref.removeEventListener("_preact", r._listener);
				},
			}),
		);
	}
	function uc(e, t, r) {
		if (e.nodeType === 3) return e.data;
		if (e.nodeType !== 1) return null;
		var n = [],
			o = {},
			i = 0,
			s = e.attributes,
			a = e.childNodes;
		for (i = s.length; i--; )
			s[i].name !== "slot" &&
				((o[s[i].name] = s[i].value), (o[ac(s[i].name)] = s[i].value));
		for (i = a.length; i--; ) {
			var l = uc(a[i], null, r),
				u = a[i].slot;
			u ? (o[u] = Gr(lc, { name: u }, l)) : (n[i] = l);
		}
		var d = !(!r || !r.shadow),
			c = t ? Gr(lc, { useFragment: !d }, n) : n;
		return (
			!d && t && (e.innerHTML = ""), Gr(t || e.nodeName.toLowerCase(), o, c)
		);
	}
	function Mv(e) {
		return {
			all: (e = e || new Map()),
			on: function (t, r) {
				var n = e.get(t);
				n ? n.push(r) : e.set(t, [r]);
			},
			off: function (t, r) {
				var n = e.get(t);
				n && (r ? n.splice(n.indexOf(r) >>> 0, 1) : e.set(t, []));
			},
			emit: function (t, r) {
				var n = e.get(t);
				n &&
					n.slice().map(function (o) {
						o(r);
					}),
					(n = e.get("*")) &&
						n.slice().map(function (o) {
							o(t, r);
						});
			},
		};
	}
	function ea(e) {
		const t = Object.values(e).filter((n) => typeof n == "number");
		return Object.entries(e)
			.filter(([n, o]) => t.indexOf(+n) === -1)
			.map(([n, o]) => o);
	}
	function cc(e, t = "|") {
		return e.map((r) => mc(r)).join(t);
	}
	function ta(e, t) {
		return typeof t == "bigint" ? t.toString() : t;
	}
	class Lv {
		constructor(t) {
			(this._getter = t), (this._value = void 0);
		}
		get value() {
			const t = this._getter;
			return (
				t !== void 0 && ((this._value = t()), (this._getter = void 0)),
				this._value
			);
		}
	}
	function fi(e) {
		return new Lv(e);
	}
	function Nv(e) {
		return e == null;
	}
	function ra(e) {
		const t = e.startsWith("^") ? 1 : 0,
			r = e.endsWith("$") ? e.length - 1 : e.length;
		return e.slice(t, r);
	}
	function Dv(e, t) {
		const r = e / t,
			n = Math.round(r),
			o = 4 * Number.EPSILON * Math.max(Math.abs(r), 1);
		return Math.abs(r - n) < o ? 0 : r - n;
	}
	const dc = Symbol("evaluating");
	function jv(e, t, r) {
		let n;
		Object.defineProperty(e, t, {
			get() {
				if (n !== dc) return n === void 0 && ((n = dc), (n = r())), n;
			},
			set(o) {
				Object.defineProperty(e, t, { value: o });
			},
			configurable: !0,
		});
	}
	function Pt(e, t, r) {
		Object.defineProperty(e, t, {
			value: r,
			writable: !0,
			enumerable: !0,
			configurable: !0,
		});
	}
	function na(e) {
		const t = Object.getOwnPropertyDescriptor(e, "shape");
		return t != null && t.get ? t.get.raw : t == null ? void 0 : t.value;
	}
	function Mt(e) {
		return na(e._zod.def) ?? e._zod.def.shape;
	}
	function pc(e, t, r) {
		Object.defineProperty(e, t, {
			get() {
				const n = r();
				return Pt(this, t, n), n;
			},
			enumerable: !0,
			configurable: !0,
		});
	}
	function fc(e, t, r) {
		t in e ? Pt(e, t, r) : (e[t] = r);
	}
	function Sr(e, t, r, n) {
		const o = Mt(t);
		for (const i of r) {
			const s = Object.getOwnPropertyDescriptor(o, i);
			s.enumerable &&
				(s.get
					? pc(e, i, () => {
							const a = t._zod.def.shape[i];
							return n ? n(a, i) : a;
						})
					: fc(e, i, n ? n(s.value, i) : s.value));
		}
	}
	function Bv(e, t) {
		for (const r of Reflect.ownKeys(t)) {
			const n = Object.getOwnPropertyDescriptor(t, r);
			n.enumerable && (n.get ? pc(e, r, () => t[r]) : fc(e, r, n.value));
		}
	}
	function tt(...e) {
		const t = {};
		for (const r of e) {
			const n = Object.getOwnPropertyDescriptors(r);
			Object.assign(t, n);
		}
		return Object.defineProperties({}, t);
	}
	function Uv(e) {
		return JSON.stringify(e);
	}
	function Fv(e) {
		return e
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, "")
			.replace(/[\s_-]+/g, "-")
			.replace(/^-+|-+$/g, "");
	}
	const hc =
		"captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
	function Gn(e) {
		return typeof e == "object" && e !== null && !Array.isArray(e);
	}
	const Hv = fi(() => {
		var e;
		if (
			st.jitless ||
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
	function Qr(e) {
		if (Gn(e) === !1) return !1;
		const t = e.constructor;
		if (t === void 0 || typeof t != "function") return !0;
		const r = t.prototype;
		return !(
			Gn(r) === !1 ||
			Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1
		);
	}
	function gc(e) {
		return Qr(e)
			? { ...e }
			: Array.isArray(e)
				? [...e]
				: e instanceof Map
					? new Map(e)
					: e instanceof Set
						? new Set(e)
						: e;
	}
	const Vv = new Set(["string", "number", "symbol"]);
	function en(e) {
		return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
	function Wt(e, t, r) {
		const n = new e._zod.constr(t ?? e._zod.def);
		return (!t || (r != null && r.parent)) && (n._zod.parent = e), n;
	}
	function V(e) {
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
	function mc(e) {
		return typeof e == "bigint"
			? e.toString() + "n"
			: typeof e == "string"
				? `"${e}"`
				: `${e}`;
	}
	function Zv(e) {
		return Object.keys(e).filter(
			(t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional",
		);
	}
	const yc = {
			safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
			int32: [-2147483648, 2147483647],
			uint32: [0, 4294967295],
			float32: [-34028234663852886e22, 34028234663852886e22],
			float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
		},
		qv = {
			int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
			uint64: [BigInt(0), BigInt("18446744073709551615")],
		};
	function Wv(e, t) {
		const r = e._zod.def,
			n = r.checks;
		if (n && n.length > 0)
			throw new Error(
				".pick() cannot be used on object schemas containing refinements",
			);
		const i = {};
		return Sr(i, e, hi(e, t)), Wt(e, tt(r, { shape: i, checks: [] }));
	}
	function hi(e, t) {
		var o;
		const r = Mt(e),
			n = [];
		for (const i of Reflect.ownKeys(t)) {
			if (
				!((o = Object.getOwnPropertyDescriptor(r, i)) != null && o.enumerable)
			)
				throw new Error(`Unrecognized key: "${String(i)}"`);
			t[i] && n.push(i);
		}
		return n;
	}
	function Kv(e, t) {
		const r = e._zod.def,
			n = r.checks;
		if (n && n.length > 0)
			throw new Error(
				".omit() cannot be used on object schemas containing refinements",
			);
		const i = new Set(hi(e, t)),
			s = {};
		return (
			Sr(
				s,
				e,
				Reflect.ownKeys(Mt(e)).filter((a) => !i.has(a)),
			),
			Wt(e, tt(r, { shape: s, checks: [] }))
		);
	}
	function Jv(e, t) {
		if (!Qr(t))
			throw new Error("Invalid input to extend: expected a plain object");
		const r = e._zod.def.checks;
		if (r && r.length > 0) {
			const o = Mt(e);
			for (const i of Reflect.ownKeys(t))
				if (Object.getOwnPropertyDescriptor(o, i) !== void 0)
					throw new Error(
						"Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
					);
		}
		return Wt(e, tt(e._zod.def, { shape: vc(e, t) }));
	}
	function vc(e, t) {
		const r = {};
		return Sr(r, e, Reflect.ownKeys(Mt(e))), Bv(r, t), r;
	}
	function Gv(e, t) {
		if (!Qr(t))
			throw new Error("Invalid input to safeExtend: expected a plain object");
		return Wt(e, tt(e._zod.def, { shape: vc(e, t) }));
	}
	function Yv(e, t) {
		var o, i;
		if (!((o = t == null ? void 0 : t._zod) != null && o.def))
			throw new Error(
				"Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.",
			);
		if ((i = e._zod.def.checks) != null && i.length)
			throw new Error(
				".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.",
			);
		const r = {};
		Sr(r, e, Reflect.ownKeys(Mt(e))), Sr(r, t, Reflect.ownKeys(Mt(t)));
		const n = tt(e._zod.def, {
			shape: r,
			get catchall() {
				return t._zod.def.catchall;
			},
			checks: t._zod.def.checks ?? [],
		});
		return Wt(e, n);
	}
	function bc(e, t, r, n = "partial") {
		const i = t._zod.def.checks;
		if (i && i.length > 0)
			throw new Error(
				`.${n}() cannot be used on object schemas containing refinements`,
			);
		const a = r ? new Set(hi(t, r)) : void 0,
			l = {};
		return (
			Sr(
				l,
				t,
				Reflect.ownKeys(Mt(t)),
				e &&
					((u, d) =>
						a && !a.has(d) ? u : new e({ type: "optional", innerType: u })),
			),
			Wt(t, tt(t._zod.def, { shape: l, checks: [] }))
		);
	}
	function Xv(e, t, r) {
		const n = r ? new Set(hi(t, r)) : void 0,
			o = {};
		return (
			Sr(o, t, Reflect.ownKeys(Mt(t)), (i, s) =>
				n && !n.has(s) ? i : new e({ type: "nonoptional", innerType: i }),
			),
			Wt(t, tt(t._zod.def, { shape: o }))
		);
	}
	function pt(e, t = 0) {
		var r;
		if (e.aborted === !0) return !0;
		for (let n = t; n < e.issues.length; n++)
			if (((r = e.issues[n]) == null ? void 0 : r.continue) !== !0) return !0;
		return !1;
	}
	function Qv(e, t = 0) {
		var r;
		if (e.aborted === !0) return !0;
		for (let n = t; n < e.issues.length; n++)
			if (((r = e.issues[n]) == null ? void 0 : r.continue) === !1) return !0;
		return !1;
	}
	function Kt(e, t) {
		return t.map((r) => {
			var n;
			return (n = r).path ?? (n.path = []), r.path.unshift(e), r;
		});
	}
	function Yn(e) {
		return typeof e == "string" ? e : e == null ? void 0 : e.message;
	}
	function wc(e, t, r) {
		var n;
		for (let o = t; o < e.length; o++) (n = e[o]).schema ?? (n.schema = r);
	}
	function Jt(e, t, r) {
		var l, u, d, c, f, p, h, g, y, v;
		var n;
		const o =
			(u = (l = e.inst) == null ? void 0 : l._zod) == null ? void 0 : u.traits;
		o != null &&
			o.has("$ZodType") &&
			(o.has("$ZodCheck")
				? ((n = e).schema ?? (n.schema = e.inst))
				: (e.schema = e.inst));
		const i =
				e.schema !== e.inst
					? (c = (d = e.schema) == null ? void 0 : d._zod.def) == null
						? void 0
						: c.error
					: void 0,
			s = e.message
				? e.message
				: (Yn(
						(h =
							(p = (f = e.inst) == null ? void 0 : f._zod.def) == null
								? void 0
								: p.error) == null
							? void 0
							: h.call(p, e),
					) ??
					Yn(i == null ? void 0 : i(e)) ??
					Yn(
						(g = t == null ? void 0 : t.error) == null ? void 0 : g.call(t, e),
					) ??
					Yn((y = r.customError) == null ? void 0 : y.call(r, e)) ??
					Yn((v = r.localeError) == null ? void 0 : v.call(r, e)) ??
					"Invalid input"),
			a = {};
		for (const b of Object.keys(e))
			b === "inst" ||
				b === "schema" ||
				b === "continue" ||
				b === "input" ||
				b === "__proto__" ||
				(a[b] = e[b]);
		return (
			a.path ?? (a.path = []),
			(a.message = s),
			t != null && t.reportInput && (a.input = e.input),
			a
		);
	}
	const eb = /[\uD800-\uDBFF]/;
	function oa(e) {
		const t = e.length;
		if (!eb.test(e)) return t;
		let r = t;
		for (let n = 0; n < t - 1; n++)
			(e.charCodeAt(n) & 64512) === 55296 &&
				(e.charCodeAt(n + 1) & 64512) === 56320 &&
				(r--, n++);
		return r;
	}
	function ia(e) {
		return Array.isArray(e)
			? "array"
			: typeof e == "string"
				? "string"
				: "unknown";
	}
	function tb(e) {
		const t = typeof e;
		switch (t) {
			case "number":
				return Number.isNaN(e) ? "nan" : "number";
			case "object": {
				if (e === null) return "null";
				if (Array.isArray(e)) return "array";
				const r = e;
				if (
					r &&
					Object.getPrototypeOf(r) !== Object.prototype &&
					"constructor" in r &&
					r.constructor
				)
					return r.constructor.name;
			}
		}
		return t;
	}
	function Xn(...e) {
		const [t, r, n] = e;
		return typeof t == "string"
			? { message: t, code: "custom", input: r, inst: n }
			: { ...t };
	}
	function rb(e, t) {
		for (const r in t) {
			const n = Object.getOwnPropertyDescriptor(t, r);
			n.get
				? Object.defineProperty(e, r, { ...n, enumerable: !1 })
				: _c(e, r, n.value);
		}
		for (const r of Object.getOwnPropertySymbols(t)) _c(e, r, t[r]);
	}
	function Gt(e, t, r, n = !0) {
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				writable: !0,
				enumerable: n,
				value: r,
			}),
			r
		);
	}
	function kc(e, t, r) {
		return Gt(e, t, r, !1);
	}
	function sa(e, t) {
		for (const r in e) {
			const n = e[r];
			Object.defineProperty(t, r, {
				configurable: !0,
				enumerable: !0,
				get() {
					return Gt(this, r, n(this));
				},
				set(o) {
					Gt(this, r, o);
				},
			});
		}
		return t;
	}
	function _c(e, t, r) {
		Object.defineProperty(e, t, {
			configurable: !0,
			get() {
				return this == null ? r : Gt(this, t, r.bind(this));
			},
			set(n) {
				Gt(this, t, n);
			},
		});
	}
	function nb(e, t) {
		const r = Object.getPrototypeOf(e);
		return t in r ? void 0 : r;
	}
	let aa,
		Yt = !1;
	const ob = {
		configurable: !0,
		get() {
			Yt = !0;
		},
	};
	function ue(e, t, r) {
		const n = Object.getPrototypeOf(e._zod);
		if (t in n && aa !== e._zod) {
			aa = void 0;
			return;
		}
		(aa = e._zod),
			Object.defineProperty(n, t, {
				configurable: !0,
				get() {
					Object.defineProperty(this, t, ob);
					const o = Yt;
					Yt = !1;
					try {
						const i = r(this);
						return (
							Yt
								? delete this[t]
								: Object.defineProperty(this, t, {
										configurable: !0,
										writable: !0,
										value: i,
									}),
							(Yt = Yt || o),
							i
						);
					} catch (i) {
						throw (delete this[t], (Yt = Yt || o), i);
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
	function ib(e, t, r, n) {
		const o = nb(e, t);
		o &&
			Object.defineProperty(o, t, {
				configurable: !0,
				get() {
					const i = {
						configurable: !0,
						writable: !0,
						enumerable: n,
						value: void 0,
					};
					return (
						Object.defineProperty(this, t, i),
						(i.value = r(this)),
						Object.defineProperty(this, t, i),
						i.value
					);
				},
				set(i) {
					Object.defineProperty(this, t, {
						configurable: !0,
						writable: !0,
						enumerable: n,
						value: i,
					});
				},
			});
	}
	const sb = "~constantCatch";
	function ab(e) {
		const t = () => e;
		return (t[sb] = !0), t;
	}
	var Sc;
	const la = Object.freeze({ status: "aborted" }),
		ua = { value: void 0, enumerable: !1 };
	let xc = "captureStackTrace" in Error ? Error : null;
	function lb(e) {
		const t = xc;
		if (t) {
			const r = t.stackTraceLimit;
			if (typeof r == "number") {
				try {
					t.stackTraceLimit = 0;
				} catch {
					return (xc = null), new e();
				}
				try {
					return new e();
				} finally {
					t.stackTraceLimit = r;
				}
			}
		}
		return new e();
	}
	function x(e, t, r, n) {
		const o = {};
		function i(f) {
			(this.def = f), (this.constr = c), (this.traits = new Set());
		}
		i.prototype = o;
		const s = r,
			a = s && new WeakSet();
		function l(f, p) {
			if (!f._zod) {
				ua.value = new i(p);
				try {
					Object.defineProperty(f, "_zod", ua);
				} finally {
					ua.value = void 0;
				}
			}
			if (f._zod.traits.has(e)) return;
			if ((f._zod.traits.add(e), t(f, p), a)) {
				const g = Object.getPrototypeOf(f),
					y = f._zod.constr.prototype;
				let v = g;
				for (; v && v !== y; ) v = Object.getPrototypeOf(v);
				const b = v ?? g;
				a.has(b) || (a.add(b), rb(b, s));
			}
			const h = c.prototype;
			for (const g in h)
				Object.prototype.hasOwnProperty.call(h, g) &&
					(g in f || (f[g] = h[g].bind(f)));
		}
		const u = (n == null ? void 0 : n.Parent) ?? Object;
		class d extends u {}
		Object.defineProperty(d, "name", { value: e });
		function c(f) {
			var y;
			const p = n != null && n.Parent ? lb(d) : this;
			l(p, f);
			const h = p._zod.deferred;
			if (h) {
				for (const v of h) v();
				p._zod.deferred = void 0;
			}
			const g =
				(y = globalThis.__zod_globalConfig) == null ? void 0 : y.postProcessor;
			return g && g(p), p;
		}
		return (
			Object.defineProperty(c, "init", { value: l }),
			Object.defineProperty(c, Symbol.hasInstance, {
				value: (f) => {
					var p, h;
					return n != null && n.Parent && f instanceof n.Parent
						? !0
						: (h =
									(p = f == null ? void 0 : f._zod) == null
										? void 0
										: p.traits) == null
							? void 0
							: h.has(e);
				},
			}),
			Object.defineProperty(c, "name", { value: e }),
			c
		);
	}
	class xr extends Error {
		constructor() {
			super(
				"Encountered Promise during synchronous parse. Use .parseAsync() instead.",
			);
		}
	}
	class $c extends Error {
		constructor(t) {
			super(`Encountered unidirectional transform during encode: ${t}`),
				(this.name = "ZodEncodeError");
		}
	}
	(Sc = globalThis).__zod_globalConfig ?? (Sc.__zod_globalConfig = {});
	const st = globalThis.__zod_globalConfig;
	function wt(e) {
		return e && Object.assign(st, e), st;
	}
	function ub() {
		const e = this._zod;
		return e.message ?? (e.message = JSON.stringify(e.def, ta, 2)), e.message;
	}
	function cb(e) {
		this._zod.message = e;
	}
	const db = { get: ub, set: cb, enumerable: !0, configurable: !0 },
		ca = { value: void 0, enumerable: !1 },
		Cc = new WeakSet([Object.prototype, Error.prototype]),
		pb = x("$ZodError", (e, t) => {
			(e.name = "$ZodError"),
				(ca.value = t),
				Object.defineProperty(e, "issues", ca),
				(ca.value = void 0),
				Object.defineProperty(e, "message", db);
			const r = Object.getPrototypeOf(e);
			Cc.has(r) ||
				(Cc.add(r),
				Object.defineProperty(r, "toString", {
					configurable: !0,
					enumerable: !1,
					get() {
						const n = () => this.message;
						return (
							Object.defineProperty(this, "toString", {
								value: n,
								configurable: !0,
								writable: !0,
							}),
							n
						);
					},
					set(n) {
						Object.defineProperty(this, "toString", {
							value: n,
							configurable: !0,
							writable: !0,
						});
					},
				}));
		});
	function fb(e, t, r) {
		return (
			Object.prototype.hasOwnProperty.call(e, t) ||
				(t === "__proto__"
					? Object.defineProperty(e, t, {
							value: r(),
							writable: !0,
							enumerable: !0,
							configurable: !0,
						})
					: (e[t] = r())),
			e[t]
		);
	}
	function hb(e, t = (r) => r.message) {
		const r = {},
			n = [];
		for (const o of e.issues)
			o.path.length > 0 ? fb(r, o.path[0], () => []).push(t(o)) : n.push(t(o));
		return { formErrors: n, fieldErrors: r };
	}
	function gb(e, t = (r) => r.message) {
		const r = { _errors: [] },
			n = (o, i = []) => {
				for (const s of o.issues)
					if (s.code === "invalid_union" && s.errors.length)
						s.errors.map((a) => n({ issues: a }, [...i, ...s.path]));
					else if (s.code === "invalid_key")
						n({ issues: s.issues }, [...i, ...s.path]);
					else if (s.code === "invalid_element")
						n({ issues: s.issues }, [...i, ...s.path]);
					else {
						const a = [...i, ...s.path];
						if (a.length === 0) r._errors.push(t(s));
						else {
							let l = r,
								u = 0;
							for (; u < a.length; ) {
								const d = a[u],
									c = u === a.length - 1;
								if (d === "_errors") {
									c && l._errors.push(t(s)), u++;
									continue;
								}
								Object.prototype.hasOwnProperty.call(l, d) ||
									Object.defineProperty(l, d, {
										value: { _errors: [] },
										enumerable: !0,
										writable: !0,
										configurable: !0,
									});
								const f = l[d];
								c && f._errors.push(t(s)), (l = f), u++;
							}
						}
					}
			};
		return n(e), r;
	}
	function gi(e, t) {
		return {
			callee: (t == null ? void 0 : t.callee) ?? e,
			Err: t == null ? void 0 : t.Err,
		};
	}
	const da = (e) => {
			const t = (r, n, o, i) => {
				const s = o ? { ...o, async: !1 } : { async: !1 },
					a = r._zod.run({ value: n, issues: [] }, s);
				if (a instanceof Promise) throw new xr();
				if (a.issues.length) {
					const l = new ((i == null ? void 0 : i.Err) ?? e)(
						a.issues.map((u) => Jt(u, s, wt())),
					);
					throw (hc(l, (i == null ? void 0 : i.callee) ?? t), l);
				}
				return a.value;
			};
			return t;
		},
		pa = (e) => {
			const t = async (r, n, o, i) => {
				const s = o ? { ...o, async: !0 } : { async: !0 };
				let a = r._zod.run({ value: n, issues: [] }, s);
				if ((a instanceof Promise && (a = await a), a.issues.length)) {
					const l = new ((i == null ? void 0 : i.Err) ?? e)(
						a.issues.map((u) => Jt(u, s, wt())),
					);
					throw (hc(l, (i == null ? void 0 : i.callee) ?? t), l);
				}
				return a.value;
			};
			return t;
		},
		fa = (e) => (t, r, n) => {
			const o = n ? { ...n, async: !1 } : { async: !1 },
				i = t._zod.run({ value: r, issues: [] }, o);
			if (i instanceof Promise) throw new xr();
			return i.issues.length
				? zc(e, i.issues, o)
				: { success: !0, data: i.value };
		};
	function zc(e, t, r) {
		let n;
		return {
			success: !1,
			get error() {
				return (
					n ||
						((n = new e(t.map((o) => Jt(o, r, wt())))),
						(t = void 0),
						(r = void 0)),
					n
				);
			},
			set error(o) {
				(n = o), (t = void 0), (r = void 0);
			},
		};
	}
	const ha = (e) => async (t, r, n) => {
			const o = n ? { ...n, async: !0 } : { async: !0 };
			let i = t._zod.run({ value: r, issues: [] }, o);
			return (
				i instanceof Promise && (i = await i),
				i.issues.length ? zc(e, i.issues, o) : { success: !0, data: i.value }
			);
		},
		mb = Symbol.for("zod.compile.invalid"),
		yb = Symbol.for("zod.compile.fallback"),
		vb = (e, t, r) => {
			const n = e._zod.bag.validator;
			if (n !== void 0) {
				if (n(t) !== mb) return !0;
				if (n.definite === !0 && r === void 0) return !1;
			}
			return bb(e, t, r);
		};
	function bb(e, t, r) {
		const n = r
				? { ...r, async: !1, abortEarly: !0 }
				: { async: !1, abortEarly: !0 },
			o = e._zod.bag.fallbackRun;
		let i;
		if (
			(o
				? ((n[yb] = !0), (i = o({ value: t, issues: [] }, n)))
				: (i = e._zod.run({ value: t, issues: [] }, n)),
			i instanceof Promise)
		)
			throw new xr();
		return i.issues.length === 0;
	}
	const wb = async (e, t, r) => {
			const n = r
				? { ...r, async: !0, abortEarly: !0 }
				: { async: !0, abortEarly: !0 };
			let o = e._zod.run({ value: t, issues: [] }, n);
			return o instanceof Promise && (o = await o), o.issues.length === 0;
		},
		kb = (e) => {
			const t = da(e),
				r = (n, o, i, s) => {
					const a = i
						? { ...i, direction: "backward" }
						: { direction: "backward" };
					return t(n, o, a, gi(r, s));
				};
			return r;
		},
		_b = (e) => {
			const t = da(e),
				r = (n, o, i, s) => t(n, o, i, gi(r, s));
			return r;
		},
		Sb = (e) => {
			const t = pa(e),
				r = async (n, o, i, s) => {
					const a = i
						? { ...i, direction: "backward" }
						: { direction: "backward" };
					return await t(n, o, a, gi(r, s));
				};
			return r;
		},
		xb = (e) => {
			const t = pa(e),
				r = async (n, o, i, s) => await t(n, o, i, gi(r, s));
			return r;
		},
		$b = (e) => (t, r, n) => {
			const o = n ? { ...n, direction: "backward" } : { direction: "backward" };
			return fa(e)(t, r, o);
		},
		Cb = (e) => (t, r, n) => fa(e)(t, r, n),
		zb = (e) => async (t, r, n) => {
			const o = n ? { ...n, direction: "backward" } : { direction: "backward" };
			return ha(e)(t, r, o);
		},
		Ib = (e) => async (t, r, n) => ha(e)(t, r, n),
		Tb = /^[cC][0-9a-z]{6,}$/,
		Eb = /^[0-9a-z]+$/,
		Ab = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
		Rb = /^[0-9a-vA-V]{20}$/,
		Ob = /^[A-Za-z0-9]{27}$/,
		Pb = /^[a-zA-Z0-9_-]{21}$/;
	function Mb(e) {
		return new RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
	}
	const Lb =
			/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
		Nb =
			/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
		Ic = (e) =>
			e
				? new RegExp(
						`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
					)
				: /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
		Db =
			/^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
		jb =
			"^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
	function Bb() {
		return new RegExp(jb, "u");
	}
	const Ub =
			/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
		Fb =
			/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
		Hb =
			/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
		Vb =
			/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
		Zb =
			/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
		qb = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,
		Wb = /^https?$/,
		Kb = /^\+[1-9]\d{6,14}$/,
		Tc =
			"(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
	function Jb(e) {
		return new RegExp(`^${e}$`);
	}
	const Gb = Jb(Tc);
	function ga(e) {
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
	function Yb(e) {
		return new RegExp(`^${ga(e)}$`);
	}
	function Xb(e) {
		const t = ["Z"];
		e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
		const r = `${ga({ precision: e.precision, seconds: !0 })}(?:${t.join("|")})`,
			n = e.local ? `${r}|${ga({ precision: e.precision })}` : r;
		return new RegExp(`^${Tc}T(?:${n})$`);
	}
	const Qb = /^[\s\S]{0,}$/,
		ew = /^-?\d+$/,
		ma = /^-?\d+(?:\.\d+)?$/,
		tw = /^(?:true|false)$/i,
		rw = /^null$/i,
		nw = /^[^A-Z]*$/,
		ow = /^[^a-z]*$/,
		Ke = x("$ZodCheck", (e, t) => {
			var r;
			e._zod ?? (e._zod = {}),
				(e._zod.def = t),
				(r = e._zod).onattach ?? (r.onattach = []);
		}),
		ya = (e) => {
			const t = e.value;
			return !Nv(t) && t.length !== void 0;
		},
		mi = { number: "number", bigint: "bigint", object: "date" },
		Ec = x("$ZodCheckLessThan", (e, t) => {
			Ke.init(e, t);
			const r = mi[typeof t.value];
			e._zod.check = (n) => {
				(t.inclusive ? n.value <= t.value : n.value < t.value) ||
					n.issues.push({
						origin: mi[typeof n.value] ?? r,
						code: "too_big",
						maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
						input: n.value,
						inclusive: t.inclusive,
						inst: e,
						continue: !t.abort,
					});
			};
		}),
		Ac = x("$ZodCheckGreaterThan", (e, t) => {
			Ke.init(e, t);
			const r = mi[typeof t.value];
			e._zod.check = (n) => {
				(t.inclusive ? n.value >= t.value : n.value > t.value) ||
					n.issues.push({
						origin: mi[typeof n.value] ?? r,
						code: "too_small",
						minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
						input: n.value,
						inclusive: t.inclusive,
						inst: e,
						continue: !t.abort,
					});
			};
		}),
		iw = x("$ZodCheckMultipleOf", (e, t) => {
			Ke.init(e, t),
				(e._zod.check = (r) => {
					if (typeof r.value != typeof t.value)
						throw new Error(
							"Cannot mix number and bigint in multiple_of check.",
						);
					(typeof r.value == "bigint"
						? t.value !== BigInt(0) && r.value % t.value === BigInt(0)
						: Dv(r.value, t.value) === 0) ||
						r.issues.push({
							origin: typeof r.value,
							code: "not_multiple_of",
							divisor: t.value,
							input: r.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		sw = x("$ZodCheckNumberFormat", (e, t) => {
			var s;
			Ke.init(e, t), (t.format = t.format || "float64");
			const r = (s = t.format) == null ? void 0 : s.includes("int"),
				n = r ? "int" : "number",
				[o, i] = yc[t.format];
			e._zod.check = (a) => {
				const l = a.value;
				if (r) {
					if (!Number.isInteger(l)) {
						a.issues.push({
							expected: n,
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
									origin: n,
									inclusive: !0,
									continue: !t.abort,
								})
							: a.issues.push({
									input: l,
									code: "too_small",
									minimum: Number.MIN_SAFE_INTEGER,
									note: "Integers must be within the safe integer range.",
									inst: e,
									origin: n,
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
			};
		}),
		aw = x("$ZodCheckMaxLength", (e, t) => {
			var r;
			Ke.init(e, t),
				(r = e._zod.def).when ?? (r.when = ya),
				(e._zod.check = (n) => {
					const o = n.value,
						i = o.length;
					if ((typeof o == "string" && i > t.maximum ? oa(o) : i) <= t.maximum)
						return;
					const a = ia(o);
					n.issues.push({
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
		lw = x("$ZodCheckMinLength", (e, t) => {
			var r;
			Ke.init(e, t),
				(r = e._zod.def).when ?? (r.when = ya),
				(e._zod.check = (n) => {
					const o = n.value,
						i = o.length;
					if (
						(typeof o == "string" && i >= t.minimum && i < t.minimum * 2
							? oa(o)
							: i) >= t.minimum
					)
						return;
					const a = ia(o);
					n.issues.push({
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
		uw = x("$ZodCheckLengthEquals", (e, t) => {
			var r;
			Ke.init(e, t),
				(r = e._zod.def).when ?? (r.when = ya),
				(e._zod.check = (n) => {
					const o = n.value,
						i = o.length,
						s =
							typeof o == "string" && i >= t.length && i <= t.length * 2
								? oa(o)
								: i;
					if (s === t.length) return;
					const a = ia(o),
						l = s > t.length;
					n.issues.push({
						origin: a,
						...(l
							? { code: "too_big", maximum: t.length }
							: { code: "too_small", minimum: t.length }),
						inclusive: !0,
						exact: !0,
						input: n.value,
						inst: e,
						continue: !t.abort,
					});
				});
		}),
		yi = x("$ZodCheckStringFormat", (e, t) => {
			var r, n;
			Ke.init(e, t),
				t.pattern
					? ((r = e._zod).check ??
						(r.check = (o) => {
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
					: ((n = e._zod).check ?? (n.check = () => {}));
		}),
		cw = x("$ZodCheckRegex", (e, t) => {
			yi.init(e, t),
				(e._zod.check = (r) => {
					(t.pattern.lastIndex = 0),
						!t.pattern.test(r.value) &&
							r.issues.push({
								origin: "string",
								code: "invalid_format",
								format: "regex",
								input: r.value,
								pattern: t.pattern.toString(),
								inst: e,
								continue: !t.abort,
							});
				});
		}),
		dw = x("$ZodCheckLowerCase", (e, t) => {
			t.pattern ?? (t.pattern = nw), yi.init(e, t);
		}),
		pw = x("$ZodCheckUpperCase", (e, t) => {
			t.pattern ?? (t.pattern = ow), yi.init(e, t);
		}),
		fw = x("$ZodCheckIncludes", (e, t) => {
			Ke.init(e, t);
			const r = en(t.includes),
				n = new RegExp(
					typeof t.position == "number" ? `^.{${t.position},}${r}` : r,
				);
			(t.pattern = n),
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
		hw = x("$ZodCheckStartsWith", (e, t) => {
			Ke.init(e, t);
			const r = new RegExp(`^${en(t.prefix)}.*`);
			t.pattern ?? (t.pattern = r),
				(e._zod.check = (n) => {
					n.value.startsWith(t.prefix) ||
						n.issues.push({
							origin: "string",
							code: "invalid_format",
							format: "starts_with",
							prefix: t.prefix,
							input: n.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		gw = x("$ZodCheckEndsWith", (e, t) => {
			Ke.init(e, t);
			const r = new RegExp(`.*${en(t.suffix)}$`);
			t.pattern ?? (t.pattern = r),
				(e._zod.check = (n) => {
					n.value.endsWith(t.suffix) ||
						n.issues.push({
							origin: "string",
							code: "invalid_format",
							format: "ends_with",
							suffix: t.suffix,
							input: n.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		mw = x("$ZodCheckOverwrite", (e, t) => {
			Ke.init(e, t),
				(e._zod.check = (r) => {
					r.value = t.tx(r.value);
				});
		});
	class yw {
		constructor(t = [], r = {}) {
			(this.content = []),
				(this.indent = 0),
				(this.args = t),
				(this.closed = r);
		}
		indented(t) {
			this.indent += 1;
			try {
				t(this);
			} finally {
				this.indent -= 1;
			}
		}
		write(t) {
			if (typeof t == "function") {
				t(this, { execution: "sync" }), t(this, { execution: "async" });
				return;
			}
			const n = t
					.split(`
`)
					.filter((s) => s),
				o = Math.min(...n.map((s) => s.length - s.trimStart().length)),
				i = n
					.map((s) => s.slice(o))
					.map((s) => " ".repeat(this.indent * 2) + s);
			for (const s of i) this.content.push(s);
		}
		compile() {
			const t = Function,
				r = (this == null ? void 0 : this.content) ?? [""];
			return new t(
				...Object.keys(this.closed),
				`return function (${this.args.join(", ")}) {
${r.join(`
`)}
};`,
			)(...Object.values(this.closed));
		}
	}
	const vw = { major: 4, minor: 6, patch: 1 },
		he = x(
			"$ZodType",
			(e, t) => {
				var i;
				var r;
				e ?? (e = {}),
					(e._zod.def = t),
					(e._zod.bag = e._zod.bag || {}),
					(e._zod.version = vw);
				const n = e._zod.def.checks,
					o = e._zod.traits.has("$ZodCheck")
						? [e, ...(n ?? [])]
						: n != null && n.length
							? [...n]
							: [];
				for (const s of o) for (const a of s._zod.onattach) a(e);
				if (o.length === 0)
					(r = e._zod).deferred ?? (r.deferred = []),
						(i = e._zod.deferred) == null ||
							i.push(() => {
								e._zod.run = e._zod.parse;
							});
				else {
					const s = (l, u, d) => {
							if (l.memo) return l;
							let c = pt(l),
								f;
							for (const p of u) {
								if (p._zod.def.when) {
									if (Qv(l) || !p._zod.def.when(l)) continue;
								} else if (c) continue;
								const h = l.issues.length,
									g = p._zod.check(l);
								if (
									g instanceof Promise &&
									(d == null ? void 0 : d.async) === !1
								)
									throw new xr();
								if (f || g instanceof Promise)
									f = (f ?? Promise.resolve()).then(async () => {
										await g,
											l.issues.length !== h &&
												(wc(l.issues, h, e), c || (c = pt(l, h)));
									});
								else {
									if (l.issues.length === h) continue;
									wc(l.issues, h, e), c || (c = pt(l, h));
								}
							}
							return f ? f.then(() => l) : l;
						},
						a = (l, u, d) => {
							if (pt(l)) return (l.aborted = !0), l;
							const c = s(u, o, d);
							if (c instanceof Promise) {
								if (d.async === !1) throw new xr();
								return c.then((f) => e._zod.parse(f, d));
							}
							return e._zod.parse(c, d);
						};
					e._zod.run = (l, u) => {
						if (u.skipChecks) return e._zod.parse(l, u);
						if (u.direction === "backward") {
							const c = e._zod.parse(
								{ value: l.value, issues: [] },
								{ ...u, skipChecks: !0 },
							);
							return c instanceof Promise
								? c.then((f) => a(f, l, u))
								: a(c, l, u);
						}
						const d = e._zod.parse(l, u);
						if (d instanceof Promise) {
							if (u.async === !1) throw new xr();
							return d.then((c) => s(c, o, u));
						}
						return s(d, o, u);
					};
				}
			},
			{
				get "~standard"() {
					return kc(this, "~standard", Oc(this));
				},
				set "~standard"(e) {
					Gt(this, "~standard", e);
				},
			},
		),
		Rc = (e, t) =>
			e.issues.length
				? { issues: e.issues.map((r) => Jt(r, t, wt())) }
				: { value: e.value };
	async function bw(e, t) {
		const r = { async: !0 };
		return Rc(await e._zod.run({ value: t, issues: [] }, r), r);
	}
	function Oc(e) {
		return {
			validate: (t) => {
				const r = { async: !1 };
				try {
					const n = e._zod.run({ value: t, issues: [] }, r);
					if (!(n instanceof Promise)) return Rc(n, r);
				} catch {}
				return bw(e, t);
			},
			vendor: "zod",
			version: 1,
		};
	}
	const vi = x("$ZodString", (e, t) => {
			he.init(e, t),
				(e._zod.pattern = t.pattern ?? Qb),
				(e._zod.parse = (r, n) => {
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
		we = x("$ZodStringFormat", (e, t) => {
			yi.init(e, t), vi.init(e, t);
		}),
		ww = x("$ZodGUID", (e, t) => {
			t.pattern ?? (t.pattern = Nb), we.init(e, t);
		}),
		kw = x("$ZodUUID", (e, t) => {
			if (t.version) {
				const n = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
					t.version
				];
				if (n === void 0)
					throw new Error(`Invalid UUID version: "${t.version}"`);
				t.pattern ?? (t.pattern = Ic(n));
			} else t.pattern ?? (t.pattern = Ic());
			we.init(e, t);
		}),
		_w = x("$ZodEmail", (e, t) => {
			t.pattern ?? (t.pattern = Db), we.init(e, t);
		}),
		Pc = 1,
		Mc = 2;
	function Sw(e, t) {
		var r;
		if (
			!t.normalize &&
			((r = t.protocol) == null ? void 0 : r.source) === Wb.source &&
			!/^https?:\/\//i.test(e)
		)
			return Pc;
		try {
			return new URL(e);
		} catch {
			return Mc;
		}
	}
	const xw = /[\t\n\r]/g;
	function $w(e) {
		return e.replace(xw, "");
	}
	function Cw(e, t) {
		return (t.lastIndex = 0), t.test(e.hostname);
	}
	function zw(e, t) {
		return (
			(t.lastIndex = 0),
			t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol)
		);
	}
	const Iw = x("$ZodURL", (e, t) => {
			we.init(e, t),
				(e._zod.check = (r) => {
					try {
						const n = r.value.trim(),
							o = Sw(n, t);
						if (o === Pc) {
							r.issues.push({
								code: "invalid_format",
								format: "url",
								note: "Invalid URL format",
								input: r.value,
								inst: e,
								continue: !t.abort,
							});
							return;
						}
						if (o === Mc) {
							r.issues.push({
								code: "invalid_format",
								format: "url",
								input: r.value,
								inst: e,
								continue: !t.abort,
							});
							return;
						}
						t.hostname &&
							!Cw(o, t.hostname) &&
							r.issues.push({
								code: "invalid_format",
								format: "url",
								note: "Invalid hostname",
								pattern: t.hostname.source,
								input: r.value,
								inst: e,
								continue: !t.abort,
							}),
							t.protocol &&
								!zw(o, t.protocol) &&
								r.issues.push({
									code: "invalid_format",
									format: "url",
									note: "Invalid protocol",
									pattern: t.protocol.source,
									input: r.value,
									inst: e,
									continue: !t.abort,
								}),
							(r.value = t.normalize ? o.href : $w(n));
						return;
					} catch {
						r.issues.push({
							code: "invalid_format",
							format: "url",
							input: r.value,
							inst: e,
							continue: !t.abort,
						});
					}
				});
		}),
		Tw = x("$ZodEmoji", (e, t) => {
			t.pattern ?? (t.pattern = Bb()), we.init(e, t);
		}),
		Ew = x("$ZodNanoID", (e, t) => {
			if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1))
				throw new Error(`Invalid nanoid length: ${t.length}`);
			t.pattern ?? (t.pattern = t.length === void 0 ? Pb : Mb(t.length)),
				we.init(e, t);
		}),
		Aw = x("$ZodCUID", (e, t) => {
			t.pattern ?? (t.pattern = Tb), we.init(e, t);
		}),
		Rw = x("$ZodCUID2", (e, t) => {
			t.pattern ?? (t.pattern = Eb), we.init(e, t);
		}),
		Ow = x("$ZodULID", (e, t) => {
			t.pattern ?? (t.pattern = Ab), we.init(e, t);
		}),
		Pw = x("$ZodXID", (e, t) => {
			t.pattern ?? (t.pattern = Rb), we.init(e, t);
		}),
		Mw = x("$ZodKSUID", (e, t) => {
			t.pattern ?? (t.pattern = Ob), we.init(e, t);
		}),
		Lw = x("$ZodISODateTime", (e, t) => {
			t.pattern ?? (t.pattern = Xb(t)), we.init(e, t);
		}),
		Nw = x("$ZodISODate", (e, t) => {
			t.pattern ?? (t.pattern = Gb), we.init(e, t);
		}),
		Dw = x("$ZodISOTime", (e, t) => {
			t.pattern ?? (t.pattern = Yb(t)), we.init(e, t);
		}),
		jw = x("$ZodISODuration", (e, t) => {
			t.pattern ?? (t.pattern = Lb), we.init(e, t);
		}),
		Bw = x("$ZodIPv4", (e, t) => {
			t.pattern ?? (t.pattern = Ub), we.init(e, t);
		}),
		Uw = /^[0-9a-fA-F:.]+$/;
	function Lc(e) {
		if (!Uw.test(e)) return !1;
		try {
			return new URL(`http://[${e}]`), !0;
		} catch {
			return !1;
		}
	}
	const Fw = x("$ZodIPv6", (e, t) => {
			t.pattern ?? (t.pattern = Fb),
				we.init(e, t),
				(e._zod.check = (r) => {
					Lc(r.value) ||
						r.issues.push({
							code: "invalid_format",
							format: "ipv6",
							input: r.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		Hw = x("$ZodCIDRv4", (e, t) => {
			t.pattern ?? (t.pattern = Hb), we.init(e, t);
		});
	function Vw(e) {
		const t = e.split("/");
		if (t.length !== 2) return !1;
		const [r, n] = t;
		if (!n) return !1;
		const o = Number(n);
		return `${o}` !== n || o < 0 || o > 128 ? !1 : Lc(r);
	}
	const Zw = x("$ZodCIDRv6", (e, t) => {
		t.pattern ?? (t.pattern = Vb),
			we.init(e, t),
			(e._zod.check = (r) => {
				Vw(r.value) ||
					r.issues.push({
						code: "invalid_format",
						format: "cidrv6",
						input: r.value,
						inst: e,
						continue: !t.abort,
					});
			});
	});
	function Nc(e) {
		if (e === "") return !0;
		if (/\s/.test(e) || e.length % 4 !== 0) return !1;
		try {
			return atob(e), !0;
		} catch {
			return !1;
		}
	}
	const Dc = /^[0-9a-zA-Z+/]*={0,2}$/,
		qw = x("$ZodBase64", (e, t) => {
			t.pattern ?? (t.pattern = Dc),
				we.init(e, t),
				(e._zod.check = (r) => {
					Nc(r.value) ||
						r.issues.push({
							code: "invalid_format",
							format: "base64",
							input: r.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		va = /^[A-Za-z0-9_-]*$/;
	function Ww(e) {
		if (!va.test(e)) return !1;
		const t = e.replace(/[-_]/g, (n) => (n === "-" ? "+" : "/")),
			r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
		return Nc(r);
	}
	const Kw = x("$ZodBase64URL", (e, t) => {
			t.pattern ?? (t.pattern = va),
				we.init(e, t),
				(e._zod.check = (r) => {
					Ww(r.value) ||
						r.issues.push({
							code: "invalid_format",
							format: "base64url",
							input: r.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		Jw = x("$ZodE164", (e, t) => {
			t.pattern ?? (t.pattern = Kb), we.init(e, t);
		});
	function Gw(e, t = null) {
		try {
			const r = e.split(".");
			if (r.length !== 3) return !1;
			const [n] = r;
			if (!n) return !1;
			const o = JSON.parse(atob(n));
			return !(
				("typ" in o && (o == null ? void 0 : o.typ) !== "JWT") ||
				!o.alg ||
				(t && (!("alg" in o) || o.alg !== t))
			);
		} catch {
			return !1;
		}
	}
	const Yw = x("$ZodJWT", (e, t) => {
			we.init(e, t),
				(e._zod.check = (r) => {
					Gw(r.value, t.alg) ||
						r.issues.push({
							code: "invalid_format",
							format: "jwt",
							input: r.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		jc = x("$ZodNumber", (e, t) => {
			he.init(e, t),
				(e._zod.pattern = ma),
				(e._zod.parse = (r, n) => {
					if (t.coerce)
						try {
							r.value = Number(r.value);
						} catch {}
					const o = r.value;
					if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
						return r;
					const i =
						typeof o == "number"
							? Number.isNaN(o)
								? "NaN"
								: Number.isFinite(o)
									? void 0
									: String(o)
							: void 0;
					return (
						r.issues.push({
							expected: "number",
							code: "invalid_type",
							input: o,
							inst: e,
							...(i ? { received: i } : {}),
						}),
						r
					);
				});
		}),
		Xw = x("$ZodNumberFormat", (e, t) => {
			sw.init(e, t), jc.init(e, t);
		}),
		Bc = x("$ZodBoolean", (e, t) => {
			he.init(e, t),
				(e._zod.pattern = tw),
				(e._zod.parse = (r, n) => {
					if (t.coerce)
						try {
							r.value = !!r.value;
						} catch {}
					const o = r.value;
					return (
						typeof o == "boolean" ||
							r.issues.push({
								expected: "boolean",
								code: "invalid_type",
								input: o,
								inst: e,
							}),
						r
					);
				});
		}),
		Qw = x("$ZodNull", (e, t) => {
			he.init(e, t),
				(e._zod.pattern = rw),
				(e._zod.values = new Set([null])),
				(e._zod.parse = (r, n) => {
					const o = r.value;
					return (
						o === null ||
							r.issues.push({
								expected: "null",
								code: "invalid_type",
								input: o,
								inst: e,
							}),
						r
					);
				});
		}),
		e0 = x("$ZodAny", (e, t) => {
			he.init(e, t), (e._zod.parse = (r) => r);
		}),
		t0 = x("$ZodUnknown", (e, t) => {
			he.init(e, t), (e._zod.parse = (r) => r);
		}),
		r0 = x("$ZodNever", (e, t) => {
			he.init(e, t),
				(e._zod.parse = (r, n) => (
					r.issues.push({
						expected: "never",
						code: "invalid_type",
						input: r.value,
						inst: e,
					}),
					r
				));
		}),
		n0 = x("$ZodDate", (e, t) => {
			he.init(e, t),
				(e._zod.parse = (r, n) => {
					if (t.coerce)
						try {
							r.value = new Date(r.value);
						} catch {}
					const o = r.value,
						i = o instanceof Date;
					return (
						(i && !Number.isNaN(o.getTime())) ||
							r.issues.push({
								expected: "date",
								code: "invalid_type",
								input: o,
								...(i ? { received: "Invalid Date" } : {}),
								inst: e,
							}),
						r
					);
				});
		});
	function Uc(e, t, r) {
		e.issues.length && t.issues.push(...Kt(r, e.issues)),
			(t.value[r] = e.value);
	}
	const o0 = x("$ZodArray", (e, t) => {
		he.init(e, t);
		const r = st.memoizer;
		r == null || r.attach(e),
			(e._zod.parse = (n, o) => {
				const i = n.value;
				if (!Array.isArray(i))
					return (
						n.issues.push({
							expected: "array",
							code: "invalid_type",
							input: i,
							inst: e,
						}),
						n
					);
				n.value = r ? r.alloc(e, n, Array(i.length), o) : Array(i.length);
				const s = [],
					a = o == null ? void 0 : o.abortEarly;
				for (let l = 0; l < i.length; l++) {
					const u = i[l],
						d = t.element._zod.run({ value: u, issues: [] }, o);
					if (d instanceof Promise) s.push(d.then((c) => Uc(c, n, l)));
					else if ((Uc(d, n, l), a && d.issues.length !== 0 && pt(d))) break;
				}
				return s.length ? Promise.all(s).then(() => n) : n;
			});
	});
	function bi(e, t, r, n, o, i) {
		const s = r in n,
			a = i === "optional";
		if (!(!s && a && o === "optional")) {
			if (e.issues.length) {
				if (o !== void 0 && a && !s) return;
				t.issues.push(...Kt(r, e.issues));
			}
			if (!s && o === void 0) {
				e.issues.length ||
					t.issues.push({
						code: "invalid_type",
						expected: "nonoptional",
						input: void 0,
						path: [r],
					});
				return;
			}
			e.value === void 0 ? s && (t.value[r] = void 0) : (t.value[r] = e.value);
		}
	}
	const i0 = [];
	function Fc(e) {
		var s, a, l, u;
		const t = Object.keys(e.shape),
			r = Object.getOwnPropertySymbols(e.shape),
			n = r.length ? r : i0,
			o = n.length ? [...t, ...n] : t;
		for (const d of o)
			if (
				!(
					(u =
						(l =
							(a = (s = e.shape) == null ? void 0 : s[d]) == null
								? void 0
								: a._zod) == null
							? void 0
							: l.traits) != null && u.has("$ZodType")
				)
			)
				throw new Error(
					`Invalid element at key "${String(d)}": expected a Zod schema`,
				);
		const i = Zv(e.shape);
		return {
			...e,
			allKeys: o,
			symbolKeys: n,
			keySet: new Set(t),
			numKeys: t.length,
			optionalKeys: new Set(i),
		};
	}
	function Hc(e, t, r, n, o, i, s) {
		const a = [],
			l = o.keySet,
			u = o.catchall._zod,
			d = u.def.type,
			c = u.optin,
			f = u.optout;
		let p = 0;
		for (const h in t) {
			if (s && r.issues.length !== p) {
				if (pt(r, p)) break;
				p = r.issues.length;
			}
			if (l.has(h)) continue;
			if (h === "__proto__") {
				d === "never" && a.push(h);
				continue;
			}
			if (d === "never") {
				a.push(h);
				continue;
			}
			const g = u.run({ value: t[h], issues: [] }, n);
			g instanceof Promise
				? e.push(g.then((y) => bi(y, r, h, t, c, f)))
				: bi(g, r, h, t, c, f);
		}
		return (
			a.length &&
				r.issues.push({
					code: "unrecognized_keys",
					keys: a,
					input: t,
					inst: i,
					continue: !0,
				}),
			e.length ? Promise.all(e).then(() => r) : r
		);
	}
	const s0 = x("$ZodObject", (e, t) => {
			he.init(e, t);
			const r = Object.getOwnPropertyDescriptor(t, "shape"),
				n = r != null && r.get ? r.get.raw : (t.shape ?? {});
			if (n) {
				const u = () => {
					const d = { ...n };
					return (
						Object.defineProperty(t, "shape", { value: d }), (u.raw = d), d
					);
				};
				(u.raw = n), Object.defineProperty(t, "shape", { get: u });
			}
			const o = fi(() => Fc(t));
			ue(e, "propValues", (u) => {
				const d = u.def.shape,
					c = {};
				for (const f in d) {
					const p = d[f]._zod;
					if (p.values) {
						Object.prototype.hasOwnProperty.call(c, f) || Pt(c, f, new Set());
						for (const h of p.values) c[f].add(h);
						p.optin !== void 0 && c[f].add(void 0);
					}
				}
				return c;
			});
			const i = Gn,
				s = t.catchall;
			let a;
			const l = st.memoizer;
			l == null || l.attach(e),
				(e._zod.parse = (u, d) => {
					a ?? (a = o.value);
					const c = u.value;
					if (!i(c))
						return (
							u.issues.push({
								expected: "object",
								code: "invalid_type",
								input: c,
								inst: e,
							}),
							u
						);
					u.value = l ? l.alloc(e, u, {}, d) : {};
					const f = [],
						p = a.shape,
						h = d == null ? void 0 : d.abortEarly;
					let g = u.issues.length;
					for (const y of a.allKeys) {
						if (h && u.issues.length !== g) {
							if (pt(u, g)) break;
							g = u.issues.length;
						}
						if (y === "__proto__") continue;
						const v = p[y],
							b = v._zod.optin,
							w = v._zod.optout,
							S = v._zod.run({ value: c[y], issues: [] }, d);
						S instanceof Promise
							? f.push(S.then((T) => bi(T, u, y, c, b, w)))
							: bi(S, u, y, c, b, w);
					}
					return s
						? Hc(f, c, u, d, o.value, e, h === !0)
						: f.length
							? Promise.all(f).then(() => u)
							: u;
				});
		}),
		a0 = x("$ZodObjectJIT", (e, t) => {
			s0.init(e, t);
			const r = e._zod.parse,
				n = fi(() => Fc(t)),
				o = st.memoizer,
				i = (p) => {
					var T, O;
					const h = n.value,
						g = h.symbolKeys,
						y = new yw(["payload", "ctx"], {
							shape: p,
							inst: e,
							memo: o,
							syms: g,
						}),
						v = (N) =>
							`shape[${N}]._zod.run({ value: input[${N}], issues: [] }, ctx)`,
						b = (N, D) => `
          let ${N}_ab = false;
          for (let i = 0; i < ${N}.issues.length; i++) {
            const iss = ${N}.issues[i];
            iss.path = iss.path ? [${D}, ...iss.path] : [${D}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${N}_ab = true;
          }
          if (${N}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
					y.write("const input = payload.value;");
					const w = Object.create(null);
					let S = 0;
					for (const N of h.allKeys) w[N] = `key_${S++}`;
					y.write(
						o
							? "const newResult = memo.alloc(inst, payload, {}, ctx);"
							: "const newResult = {};",
					);
					for (const N of h.allKeys) {
						if (N === "__proto__") continue;
						const D = w[N],
							I = typeof N == "symbol" ? `syms[${g.indexOf(N)}]` : Uv(N),
							P = `${I} in input`,
							_ = p[N],
							A = (T = _ == null ? void 0 : _._zod) == null ? void 0 : T.optin,
							F = A !== void 0,
							re =
								((O = _ == null ? void 0 : _._zod) == null
									? void 0
									: O.optout) === "optional";
						if ((y.write(`const ${D} = ${v(I)};`), F && re)) {
							const ie =
								A === "optional"
									? `${D}_present`
									: `${D}.value !== undefined || ${D}_present`;
							y.write(`
        const ${D}_present = ${P};
        if (!${D}.issues.length || ${D}_present) {
          if (${D}.issues.length) {${b(D, I)}
          }

          if (${ie}) {
            newResult[${I}] = ${D}.value;
          }
        }

      `);
						} else
							F
								? y.write(`
        if (${D}.issues.length) {${b(D, I)}
        }
        
        if (${D}.value === undefined) {
          if (${P}) {
            newResult[${I}] = undefined;
          }
        } else {
          newResult[${I}] = ${D}.value;
        }

      `)
								: y.write(`
        const ${D}_present = ${P};
        if (${D}.issues.length) {${b(D, I)}
        }
        if (!${D}_present && !${D}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${I}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${D}_present) {
          newResult[${I}] = ${D}.value;
        }

      `);
					}
					return (
						y.write("payload.value = newResult;"),
						y.write("return payload;"),
						y.compile()
					);
				};
			let s;
			const a = Gn,
				l = !st.jitless,
				d = l && Hv.value,
				c = t.catchall;
			let f;
			e._zod.parse = (p, h) => {
				f ?? (f = n.value);
				const g = p.value;
				return a(g)
					? l && d && (h == null ? void 0 : h.async) === !1 && h.jitless !== !0
						? (s || (s = i(t.shape)),
							(p = s(p, h)),
							c
								? Hc(
										[],
										g,
										p,
										h,
										f,
										e,
										(h == null ? void 0 : h.abortEarly) === !0,
									)
								: p)
						: r(p, h)
					: (p.issues.push({
							expected: "object",
							code: "invalid_type",
							input: g,
							inst: e,
						}),
						p);
			};
		});
	function Vc(e, t, r, n) {
		for (const i of e) if (i.issues.length === 0) return (t.value = i.value), t;
		const o = e.filter((i) => !pt(i));
		return o.length === 1
			? ((t.value = o[0].value), o[0])
			: (t.issues.push({
					code: "invalid_union",
					input: t.value,
					inst: r,
					errors: e.map((i) => i.issues.map((s) => Jt(s, n, wt()))),
				}),
				t);
	}
	const Zc = x("$ZodUnion", (e, t) => {
		he.init(e, t),
			ue(e, "optin", (n) =>
				n.def.options.some((o) => o._zod.optin === "defaulted")
					? "defaulted"
					: n.def.options.some((o) => o._zod.optin !== void 0)
						? "optional"
						: void 0,
			),
			ue(e, "optout", (n) =>
				n.def.options.some((o) => o._zod.optout === "optional")
					? "optional"
					: void 0,
			),
			ue(e, "values", (n) => {
				if (n.def.options.every((o) => o._zod.values))
					return new Set(
						n.def.options.flatMap((o) => Array.from(o._zod.values)),
					);
			}),
			ue(e, "pattern", (n) => {
				if (n.def.options.every((o) => o._zod.pattern)) {
					const o = n.def.options.map((i) => i._zod.pattern);
					return new RegExp(`^(${o.map((i) => ra(i.source)).join("|")})$`);
				}
			});
		const r = t.options.length === 1 ? t.options[0]._zod.run : null;
		e._zod.parse = (n, o) => {
			if (r) return r(n, o);
			let i = !1;
			const s = [];
			for (const a of t.options) {
				const l = a._zod.run({ value: n.value, issues: [] }, o);
				if (l instanceof Promise) s.push(l), (i = !0);
				else {
					if (l.issues.length === 0) return l;
					s.push(l);
				}
			}
			return i ? Promise.all(s).then((a) => Vc(a, n, e, o)) : Vc(s, n, e, o);
		};
	});
	function l0(e) {
		var r;
		const t = new Map();
		for (const n of e.options) {
			const o = (r = n._zod.propValues) == null ? void 0 : r[e.discriminator];
			if (!o || o.size === 0)
				throw new Error(
					`Invalid discriminated union option at index "${e.options.indexOf(n)}"`,
				);
			for (const i of o)
				if (t.has(i)) {
					if (i !== void 0)
						throw new Error(`Duplicate discriminator value "${String(i)}"`);
					t.set(i, null);
				} else t.set(i, n);
		}
		return t;
	}
	const u0 = x("$ZodDiscriminatedUnion", (e, t) => {
			(t.inclusive = !1), Zc.init(e, t);
			const r = e._zod.parse;
			ue(e, "propValues", (o) => {
				var a, l;
				const i = {};
				let s = 0;
				for (const u of o.def.options) {
					const d = u._zod.propValues;
					if (!d || Object.keys(d).length === 0)
						throw new Error(
							`Invalid discriminated union option at index "${o.def.options.indexOf(u)}"`,
						);
					(a = d[o.def.discriminator]) != null && a.has(void 0) && s++;
					for (const [c, f] of Object.entries(d)) {
						Object.prototype.hasOwnProperty.call(i, c) || Pt(i, c, new Set());
						for (const p of f) i[c].add(p);
					}
				}
				return (
					!o.def.unionFallback &&
						s > 1 &&
						((l = i[o.def.discriminator]) == null || l.delete(void 0)),
					i
				);
			}),
				t.options.forEach((o, i) => {
					const s = na(o._zod.def);
					if (s && !Object.prototype.hasOwnProperty.call(s, t.discriminator))
						throw new Error(
							`Invalid discriminated union option at index "${i}"`,
						);
				});
			const n = fi(() => l0(t));
			e._zod.parse = (o, i) => {
				const s = o.value;
				if (!Gn(s))
					return (
						o.issues.push({
							code: "invalid_type",
							expected: "object",
							input: s,
							inst: e,
						}),
						o
					);
				const a = s == null ? void 0 : s[t.discriminator],
					l = n.value.get(a);
				return l && (a !== void 0 || i.direction !== "backward")
					? l._zod.run(o, i)
					: t.unionFallback || i.direction === "backward"
						? r(o, i)
						: (o.issues.push({
								code: "invalid_union",
								errors: [],
								note: "No matching discriminator",
								discriminator: t.discriminator,
								options: Array.from(n.value.keys()).filter(
									(u) => n.value.get(u) !== null,
								),
								input: s,
								path: [t.discriminator],
								inst: e,
							}),
							o);
			};
		}),
		c0 = x("$ZodIntersection", (e, t) => {
			he.init(e, t),
				(e._zod.parse = (r, n) => {
					const o = r.value,
						i = t.left._zod.run({ value: o, issues: [] }, n),
						s = t.right._zod.run({ value: o, issues: [] }, n);
					return i instanceof Promise || s instanceof Promise
						? Promise.all([i, s]).then(([l, u]) => qc(r, l, u))
						: qc(r, i, s);
				});
		});
	function ba(e, t) {
		if (e === t) return { valid: !0, data: e };
		if (e instanceof Date && t instanceof Date && +e == +t)
			return { valid: !0, data: e };
		if (Qr(e) && Qr(t)) {
			const r = Object.keys(t),
				n = Object.keys(e).filter((i) => r.indexOf(i) !== -1),
				o = { ...e, ...t };
			Object.prototype.hasOwnProperty.call(o, "__proto__") &&
				delete o.__proto__;
			for (const i of n) {
				if (i === "__proto__") continue;
				const s = ba(e[i], t[i]);
				if (!s.valid)
					return { valid: !1, mergeErrorPath: [i, ...s.mergeErrorPath] };
				o[i] = s.data;
			}
			return { valid: !0, data: o };
		}
		if (Array.isArray(e) && Array.isArray(t)) {
			if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
			const r = [];
			for (let n = 0; n < e.length; n++) {
				const o = e[n],
					i = t[n],
					s = ba(o, i);
				if (!s.valid)
					return { valid: !1, mergeErrorPath: [n, ...s.mergeErrorPath] };
				r.push(s.data);
			}
			return { valid: !0, data: r };
		}
		return { valid: !1, mergeErrorPath: [] };
	}
	function qc(e, t, r) {
		const n = new Map();
		let o;
		const i = new Map(),
			s = (u, d) => {
				var f, p;
				let c;
				if (
					u.code === "unrecognized_keys" &&
					!((f = u.path) != null && f.length)
				)
					o ?? (o = u), (c = u.keys);
				else if (
					u.code === "invalid_key" &&
					u.origin === "record" &&
					((p = u.path) == null ? void 0 : p.length) === 1
				) {
					const h = String(u.path[0]);
					i.has(h) || i.set(h, u), (c = [h]);
				} else return !1;
				for (const h of c) n.has(h) || n.set(h, {}), (n.get(h)[d] = !0);
				return !0;
			};
		for (const u of t.issues) s(u, "l") || e.issues.push(u);
		for (const u of r.issues) s(u, "r") || e.issues.push(u);
		const a = [...n].filter(([, u]) => u.l && u.r).map(([u]) => u);
		if (a.length) {
			const u = o ? a.filter((d) => o.keys.includes(d)) : [];
			u.length && e.issues.push({ ...o, keys: u });
			for (const d of a) !u.includes(d) && i.has(d) && e.issues.push(i.get(d));
		}
		const l = ba(t.value, r.value);
		if (!l.valid) {
			if (pt(e)) return e;
			throw new Error(
				`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`,
			);
		}
		return (e.value = l.data), e;
	}
	const d0 = x("$ZodTuple", (e, t) => {
		he.init(e, t);
		const r = t.items,
			n = st.memoizer;
		n == null || n.attach(e),
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
				o.value = n ? n.alloc(e, o, [], i) : [];
				const a = [],
					l = Wc(r, "optin"),
					u = Wc(r, "optout");
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
					s.length > r.length &&
						o.issues.push({
							code: "too_big",
							maximum: r.length,
							inclusive: !0,
							input: s,
							inst: e,
							origin: "array",
						});
				}
				const d = new Array(r.length),
					c = t.rest ? (i == null ? void 0 : i.abortEarly) : void 0;
				let f = !1;
				for (let p = 0; p < r.length; p++) {
					const h = r[p]._zod.run({ value: s[p], issues: [] }, i);
					h instanceof Promise
						? a.push(
								h.then((g) => {
									d[p] = g;
								}),
							)
						: ((d[p] = h), c && !f && h.issues.length && (f = pt(h)));
				}
				if (t.rest && !f) {
					let p = r.length - 1;
					const h = s.slice(r.length);
					let g = o.issues.length;
					for (const y of h) {
						if (c && o.issues.length !== g) {
							if (pt(o, g)) break;
							g = o.issues.length;
						}
						p++;
						const v = t.rest._zod.run({ value: y, issues: [] }, i);
						v instanceof Promise
							? a.push(v.then((b) => Kc(b, o, p)))
							: Kc(v, o, p);
					}
				}
				return a.length
					? Promise.all(a).then(() => Jc(d, o, r, s, u))
					: Jc(d, o, r, s, u);
			});
	});
	function Wc(e, t) {
		for (let r = e.length - 1; r >= 0; r--)
			if (
				!(t === "optin"
					? e[r]._zod.optin !== void 0
					: e[r]._zod.optout === "optional")
			)
				return r + 1;
		return 0;
	}
	function Kc(e, t, r) {
		e.issues.length && t.issues.push(...Kt(r, e.issues)),
			(t.value[r] = e.value);
	}
	function Jc(e, t, r, n, o) {
		for (let i = 0; i < r.length; i++) {
			const s = e[i],
				a = i < n.length;
			if (!a && i >= o && r[i]._zod.optin === "optional") {
				t.value.length = i;
				break;
			}
			if (s.issues.length) {
				if (!a && i >= o) {
					t.value.length = i;
					break;
				}
				t.issues.push(...Kt(i, s.issues));
			}
			t.value[i] = s.value;
		}
		for (
			let i = t.value.length - 1;
			i >= n.length && r[i]._zod.optout === "optional" && t.value[i] === void 0;
			i--
		)
			t.value.length = i;
		return t;
	}
	const p0 = x("$ZodRecord", (e, t) => {
			he.init(e, t);
			const r = st.memoizer;
			r == null || r.attach(e),
				(e._zod.parse = (n, o) => {
					const i = n.value;
					if (!Qr(i))
						return (
							n.issues.push({
								expected: "record",
								code: "invalid_type",
								input: i,
								inst: e,
							}),
							n
						);
					const s = [],
						a = t.keyType._zod.values;
					if (a && !t.partial) {
						n.value = r ? r.alloc(e, n, {}, o) : {};
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
								const c = t.keyType._zod.run({ value: d, issues: [] }, o);
								if (c instanceof Promise)
									throw new Error(
										"Async schemas not supported in object keys currently",
									);
								if (c.issues.length) {
									n.issues.push({
										code: "invalid_key",
										origin: "record",
										issues: c.issues.map((h) => Jt(h, o, wt())),
										input: d,
										path: [d],
										inst: e,
									});
									continue;
								}
								const f = c.value;
								if (f === "__proto__") continue;
								const p = t.valueType._zod.run({ value: i[d], issues: [] }, o);
								p instanceof Promise
									? s.push(
											p.then((h) => {
												h.issues.length && n.issues.push(...Kt(d, h.issues)),
													(n.value[f] = h.value);
											}),
										)
									: (p.issues.length && n.issues.push(...Kt(d, p.issues)),
										(n.value[f] = p.value));
							}
						let u;
						for (const d in i)
							if (!l.has(d))
								if (t.mode === "loose") {
									if (d === "__proto__") continue;
									n.value[d] = i[d];
								} else (u = u ?? []), u.push(d);
						u &&
							u.length > 0 &&
							n.issues.push({
								code: "unrecognized_keys",
								input: i,
								inst: e,
								keys: u,
								continue: !0,
							});
					} else {
						n.value = r ? r.alloc(e, n, {}, o) : {};
						let l;
						for (const u of Reflect.ownKeys(i)) {
							if (
								u === "__proto__" ||
								!Object.prototype.propertyIsEnumerable.call(i, u)
							)
								continue;
							let d = t.keyType._zod.run({ value: u, issues: [] }, o);
							if (d instanceof Promise)
								throw new Error(
									"Async schemas not supported in object keys currently",
								);
							if (typeof u == "string" && ma.test(u) && d.issues.length) {
								const h = t.keyType._zod.run(
									{ value: Number(u), issues: [] },
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
									? (n.value[u] = i[u])
									: a
										? ((l = l ?? []), l.push(u))
										: n.issues.push({
												code: "invalid_key",
												origin: "record",
												issues: d.issues.map((h) => Jt(h, o, wt())),
												input: u,
												path: [u],
												inst: e,
											});
								continue;
							}
							const f = d.value;
							if (f === "__proto__") continue;
							const p = t.valueType._zod.run({ value: i[u], issues: [] }, o);
							p instanceof Promise
								? s.push(
										p.then((h) => {
											h.issues.length && n.issues.push(...Kt(u, h.issues)),
												(n.value[f] = h.value);
										}),
									)
								: (p.issues.length && n.issues.push(...Kt(u, p.issues)),
									(n.value[f] = p.value));
						}
						l &&
							l.length > 0 &&
							n.issues.push({
								code: "unrecognized_keys",
								input: i,
								inst: e,
								keys: l,
								continue: !0,
							});
					}
					return s.length ? Promise.all(s).then(() => n) : n;
				});
		}),
		f0 = x("$ZodEnum", (e, t) => {
			he.init(e, t);
			const r = ea(t.entries),
				n = new Set(r);
			(e._zod.values = n),
				ue(e, "pattern", (o) => {
					const i = ea(o.def.entries).filter((s) => Vv.has(typeof s));
					return new RegExp(
						i.length
							? `^(${i.map((s) => en(s.toString())).join("|")})$`
							: "^[^\\s\\S]$",
					);
				}),
				(e._zod.parse = (o, i) => {
					const s = o.value;
					return (
						n.has(s) ||
							o.issues.push({
								code: "invalid_value",
								values: r,
								input: s,
								inst: e,
							}),
						o
					);
				});
		}),
		h0 = x("$ZodLiteral", (e, t) => {
			he.init(e, t);
			const r = new Set(t.values);
			(e._zod.values = r),
				ue(e, "pattern", (n) => {
					const o = n.def.values;
					return new RegExp(
						o.length
							? `^(${o.map((i) => (typeof i == "string" ? en(i) : i ? en(i.toString()) : String(i))).join("|")})$`
							: "^[^\\s\\S]$",
					);
				}),
				(e._zod.parse = (n, o) => {
					const i = n.value;
					return (
						r.has(i) ||
							n.issues.push({
								code: "invalid_value",
								values: t.values,
								input: i,
								inst: e,
							}),
						n
					);
				});
		}),
		g0 = x("$ZodTransform", (e, t) => {
			var r;
			he.init(e, t),
				(e._zod.optin = "optional"),
				(r = st.memoizer) == null || r.guard(e),
				(e._zod.parse = (n, o) => {
					if (o.direction === "backward") throw new $c(e.constructor.name);
					const i = t.transform(n.value, n);
					if (o.async)
						return (i instanceof Promise ? i : Promise.resolve(i)).then(
							(a) => ((n.value = a), n),
						);
					if (i instanceof Promise) throw new xr();
					return (n.value = i), n;
				});
		});
	function Gc(e, t) {
		return (e.value = t.issues.length ? void 0 : t.value), e;
	}
	const Yc = x("$ZodOptional", (e, t) => {
			he.init(e, t),
				ue(e, "optin", (r) =>
					r.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional",
				),
				(e._zod.optout = "optional"),
				ue(e, "values", (r) => {
					const n = r.def.innerType._zod.values;
					return n ? new Set([...n, void 0]) : void 0;
				}),
				ue(e, "pattern", (r) => {
					const n = r.def.innerType._zod.pattern;
					return n ? new RegExp(`^(${ra(n.source)})?$`) : void 0;
				}),
				(e._zod.parse = (r, n) => {
					if (r.value === void 0) {
						if (t.innerType._zod.optin !== "defaulted") return r;
						const o = t.innerType._zod.run({ value: r.value, issues: [] }, n);
						return o instanceof Promise ? o.then((i) => Gc(r, i)) : Gc(r, o);
					}
					return t.innerType._zod.run(r, n);
				});
		}),
		m0 = x("$ZodExactOptional", (e, t) => {
			Yc.init(e, t),
				ue(e, "values", (r) => r.def.innerType._zod.values),
				ue(e, "pattern", (r) => r.def.innerType._zod.pattern),
				(e._zod.parse = (r, n) => t.innerType._zod.run(r, n));
		}),
		y0 = x("$ZodNullable", (e, t) => {
			he.init(e, t),
				ue(e, "optin", (r) => r.def.innerType._zod.optin),
				ue(e, "optout", (r) => r.def.innerType._zod.optout),
				ue(e, "pattern", (r) => {
					const n = r.def.innerType._zod.pattern;
					return n ? new RegExp(`^(${ra(n.source)}|null)$`) : void 0;
				}),
				ue(e, "values", (r) =>
					r.def.innerType._zod.values
						? new Set([...r.def.innerType._zod.values, null])
						: void 0,
				),
				(e._zod.parse = (r, n) =>
					r.value === null ? r : t.innerType._zod.run(r, n));
		}),
		v0 = x("$ZodDefault", (e, t) => {
			he.init(e, t),
				(e._zod.optin = "defaulted"),
				ue(e, "values", (r) => r.def.innerType._zod.values),
				(e._zod.parse = (r, n) => {
					if (n.direction === "backward") return t.innerType._zod.run(r, n);
					if (r.value === void 0) return (r.value = t.defaultValue), r;
					const o = t.innerType._zod.run(r, n);
					return o instanceof Promise ? o.then((i) => Xc(i, t)) : Xc(o, t);
				});
		});
	function Xc(e, t) {
		return e.value === void 0 && (e.value = t.defaultValue), e;
	}
	const b0 = x("$ZodPrefault", (e, t) => {
			he.init(e, t),
				(e._zod.optin = "defaulted"),
				ue(e, "values", (r) => r.def.innerType._zod.values),
				(e._zod.parse = (r, n) => (
					n.direction === "backward" ||
						(r.value === void 0 && (r.value = t.defaultValue)),
					t.innerType._zod.run(r, n)
				));
		}),
		w0 = x("$ZodNonOptional", (e, t) => {
			he.init(e, t),
				ue(e, "values", (r) => {
					const n = r.def.innerType._zod.values;
					return n ? new Set([...n].filter((o) => o !== void 0)) : void 0;
				}),
				(e._zod.parse = (r, n) => {
					const o = t.innerType._zod.run(r, n);
					return o instanceof Promise ? o.then((i) => Qc(i, e)) : Qc(o, e);
				});
		});
	function Qc(e, t) {
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
	function ed(e, t, r, n) {
		return t.issues.length
			? ((e.value = r.catchValue({
					...t,
					value: e.value,
					error: { issues: t.issues.map((o) => Jt(o, n, wt())) },
					input: e.value,
				})),
				e)
			: ((e.value = t.value), t.memo && (e.memo = !0), e);
	}
	const k0 = x("$ZodCatch", (e, t) => {
			he.init(e, t),
				ue(e, "optin", (r) =>
					r.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional",
				),
				ue(e, "optout", (r) => r.def.innerType._zod.optout),
				ue(e, "values", (r) => r.def.innerType._zod.values),
				(e._zod.parse = (r, n) => {
					if (n.direction === "backward") return t.innerType._zod.run(r, n);
					const o = t.innerType._zod.run({ value: r.value, issues: [] }, n);
					return o instanceof Promise
						? o.then((i) => ed(r, i, t, n))
						: ed(r, o, t, n);
				});
		}),
		td = x("$ZodPipe", (e, t) => {
			he.init(e, t),
				ue(e, "values", (r) => r.def.in._zod.values),
				ue(e, "optin", (r) => r.def.in._zod.optin),
				ue(e, "optout", (r) => r.def.out._zod.optout),
				ue(e, "propValues", (r) => r.def.in._zod.propValues),
				(e._zod.parse = (r, n) => {
					if (n.direction === "backward") {
						const i = t.out._zod.run(r, n);
						return i instanceof Promise
							? i.then((s) => wi(s, t.in, n))
							: wi(i, t.in, n);
					}
					const o = t.in._zod.run(r, n);
					return o instanceof Promise
						? o.then((i) => wi(i, t.out, n))
						: wi(o, t.out, n);
				});
		});
	function wi(e, t, r) {
		return e.issues.some((n) => n.code !== "unrecognized_keys")
			? ((e.aborted = !0), e)
			: t._zod.run({ value: e.value, issues: e.issues }, r);
	}
	const rd = x("$ZodCodec", (e, t) => {
		he.init(e, t),
			ue(e, "values", (r) => r.def.in._zod.values),
			ue(e, "optin", (r) => r.def.in._zod.optin),
			ue(e, "optout", (r) => r.def.out._zod.optout),
			ue(e, "propValues", (r) => r.def.in._zod.propValues),
			(e._zod.parse = (r, n) => {
				if ((n.direction || "forward") === "forward") {
					const i = t.in._zod.run(r, n);
					return i instanceof Promise
						? i.then((s) => ki(s, t, n))
						: ki(i, t, n);
				} else {
					const i = t.out._zod.run(r, n);
					return i instanceof Promise
						? i.then((s) => ki(s, t, n))
						: ki(i, t, n);
				}
			});
	});
	function ki(e, t, r) {
		if (e.issues.length) return (e.aborted = !0), e;
		if ((r.direction || "forward") === "forward") {
			const o = t.transform(e.value, e);
			return o instanceof Promise
				? o.then((i) => _i(e, i, t.out, r))
				: _i(e, o, t.out, r);
		} else {
			const o = t.reverseTransform(e.value, e);
			return o instanceof Promise
				? o.then((i) => _i(e, i, t.in, r))
				: _i(e, o, t.in, r);
		}
	}
	function _i(e, t, r, n) {
		return e.issues.length
			? ((e.aborted = !0), e)
			: r._zod.run({ value: t, issues: e.issues }, n);
	}
	const _0 = x("$ZodPreprocess", (e, t) => {
			td.init(e, t);
		}),
		S0 = x("$ZodReadonly", (e, t) => {
			he.init(e, t),
				ue(e, "propValues", (r) => r.def.innerType._zod.propValues),
				ue(e, "values", (r) => r.def.innerType._zod.values),
				ue(e, "optin", (r) => {
					var n, o;
					return (o = (n = r.def.innerType) == null ? void 0 : n._zod) == null
						? void 0
						: o.optin;
				}),
				ue(e, "optout", (r) => {
					var n, o;
					return (o = (n = r.def.innerType) == null ? void 0 : n._zod) == null
						? void 0
						: o.optout;
				}),
				(e._zod.parse = (r, n) => {
					if (n.direction === "backward") return t.innerType._zod.run(r, n);
					const o = t.innerType._zod.run(r, n);
					return o instanceof Promise ? o.then(nd) : nd(o);
				});
		});
	function nd(e) {
		return e.memo || (e.value = Object.freeze(e.value)), e;
	}
	const x0 = x("$ZodLazy", (e, t) => {
			he.init(e, t),
				jv(e._zod, "innerType", () => {
					const r = t;
					return (
						r._cachedInner || (r._cachedInner = t.getter()), r._cachedInner
					);
				}),
				ue(e, "pattern", (r) => {
					var n, o;
					return (o = (n = r.innerType) == null ? void 0 : n._zod) == null
						? void 0
						: o.pattern;
				}),
				ue(e, "propValues", (r) => {
					var n, o;
					return (o = (n = r.innerType) == null ? void 0 : n._zod) == null
						? void 0
						: o.propValues;
				}),
				ue(e, "optin", (r) => {
					var n, o;
					return (
						((o = (n = r.innerType) == null ? void 0 : n._zod) == null
							? void 0
							: o.optin) ?? void 0
					);
				}),
				ue(e, "optout", (r) => {
					var n, o;
					return (
						((o = (n = r.innerType) == null ? void 0 : n._zod) == null
							? void 0
							: o.optout) ?? void 0
					);
				}),
				(e._zod.parse = (r, n) => e._zod.innerType._zod.run(r, n));
		}),
		$0 = x("$ZodCustom", (e, t) => {
			Ke.init(e, t),
				he.init(e, t),
				(e._zod.parse = (r, n) => r),
				(e._zod.check = (r) => {
					const n = r.value,
						o = t.fn(n);
					if (o instanceof Promise) return o.then((i) => od(i, r, n, e));
					od(o, r, n, e);
				});
		});
	function od(e, t, r, n) {
		if (!e) {
			const o = {
				code: "custom",
				input: r,
				inst: n,
				path: [...(n._zod.def.path ?? [])],
				continue: !n._zod.def.abort,
			};
			n._zod.def.params && (o.params = n._zod.def.params), t.issues.push(Xn(o));
		}
	}
	class C0 extends Error {
		constructor() {
			super("Cannot parse a reference cycle that closes through a transform"),
				(this.name = "ZodCyclicError");
		}
	}
	const wa = "~memo",
		id = [];
	function sd(e) {
		return e !== null && (typeof e == "object" || typeof e == "function");
	}
	function ka(e) {
		return e.map((t) => (t.path ? { ...t, path: t.path.slice() } : { ...t }));
	}
	const ad = new WeakMap(),
		Qn = 0,
		Si = 1,
		eo = 2;
	function xi(e, t, r) {
		const n = ad.get(e);
		if (n !== void 0) return n ? eo : Qn;
		if (t.has(e)) return eo;
		t.add(e);
		let o = Qn;
		const i = (d) => {
				if (o !== eo && d != null && d._zod) {
					const c = xi(d, t);
					c > o && (o = c);
				}
			},
			s = (d, c) => {
				var p;
				let f = Qn;
				for (const h of Reflect.ownKeys(d)) {
					const g = Object.getOwnPropertyDescriptor(d, h);
					if (c && !g.enumerable) continue;
					const y = g.get
						? Si
						: (p = g.value) != null && p._zod
							? xi(g.value, t)
							: Qn;
					y > f && (f = y);
				}
				return f;
			},
			a = (d) => {
				d > o && (o = d);
			},
			l = e._zod.def;
		switch (l.type) {
			case "object": {
				const d = na(l);
				a(d ? s(d, !0) : Si), i(l.catchall);
				break;
			}
			case "properties":
				a(s(l.shape, !1));
				break;
			case "array":
				i(l.element);
				break;
			case "tuple":
				for (const d of l.items) i(d);
				i(l.rest);
				break;
			case "record":
			case "map":
				i(l.keyType), i(l.valueType);
				break;
			case "set":
				i(l.valueType);
				break;
			case "union":
				for (const d of l.options) i(d);
				break;
			case "intersection":
				i(l.left), i(l.right);
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
				i(l.innerType);
				break;
			case "pipe":
				i(l.in), i(l.out);
				break;
			case "function":
				i(l.input), i(l.output);
				break;
			case "lazy": {
				const d = l._cachedInner ?? void 0;
				a(d ? xi(d, t) : Si);
				break;
			}
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
				for (const d in l) {
					const c = Object.getOwnPropertyDescriptor(l, d);
					if (!c || c.get) continue;
					const f = c.value;
					if (!(!f || typeof f != "object")) {
						if (f._zod) i(f);
						else if (Array.isArray(f)) for (const p of f) i(p);
					}
				}
		}
		return t.delete(e), z0(e, o);
	}
	function z0(e, t) {
		return t !== Si && ad.set(e, t === eo), t;
	}
	function I0(e, t) {
		let r = e.buckets.get(t);
		return r || ((r = new WeakMap()), e.buckets.set(t, r)), r;
	}
	let $i;
	const Ci = [],
		T0 = {
			alloc(e, t, r) {
				const n = $i;
				if (!n) return r;
				$i = void 0;
				const o = { value: r, issues: null };
				return n.set(t.value, o), Ci.push(o), r;
			},
			guard(e) {
				var t;
				(t = e._zod).deferred ?? (t.deferred = []),
					e._zod.deferred.push(() => {
						const r = e._zod.parse,
							n = (o, i) => {
								if (i.direction !== "backward" && A0(i, o.value))
									throw new C0();
								return r(o, i);
							};
						(e._zod.parse = n), e._zod.run === r && (e._zod.run = n);
					});
			},
			attach(e) {
				var t;
				let r,
					n = !1,
					o,
					i;
				(t = e._zod).deferred ?? (t.deferred = []),
					e._zod.deferred.push(() => {
						const s = e._zod.parse,
							a = (l, u) => {
								if (r === void 0) {
									const v = xi(e, new Set());
									if (v === Qn)
										return (
											(e._zod.parse = s),
											e._zod.run === a && (e._zod.run = s),
											s(l, u)
										);
									v === eo || n ? (r = !0) : (n = !0);
								}
								const d = l.value;
								if (!sd(d)) return s(l, u);
								let c = u[wa];
								c ||
									((c = { buckets: new WeakMap(), backEdges: void 0 }),
									(u[wa] = c));
								let f;
								o === u ? (f = i) : ((f = I0(c, e)), (o = u), (i = f));
								const p = f.get(d);
								if (p)
									return (
										(l.value = p.value),
										p.issues
											? p.issues.length && l.issues.push(...ka(p.issues))
											: ((l.memo = !0),
												c.backEdges ?? (c.backEdges = new WeakSet()),
												c.backEdges.add(p.value)),
										l
									);
								$i = f;
								const h = Ci.length,
									g = s(l, u);
								$i = void 0;
								const y = Ci.length > h ? Ci.pop() : void 0;
								return g instanceof Promise
									? g.then(
											(v) => (
												y && (y.issues = v.issues.length ? ka(v.issues) : id), v
											),
										)
									: (y && (y.issues = g.issues.length ? ka(g.issues) : id), g);
							};
						(e._zod.parse = a), e._zod.run === s && (e._zod.run = a);
					});
			},
		};
	function E0() {
		return T0;
	}
	function A0(e, t) {
		var n;
		const r = (n = e[wa]) == null ? void 0 : n.backEdges;
		return r !== void 0 && sd(t) && r.has(t);
	}
	const R0 = () => {
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
		const r = {
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
				iban: "IBAN",
				jwt: "JWT",
				template_literal: "input",
			},
			n = { nan: "NaN" };
		function o(i, s) {
			return i === "number" && typeof s == "number" && !Number.isFinite(s)
				? String(s)
				: (n[i] ?? i);
		}
		return (i) => {
			switch (i.code) {
				case "invalid_type": {
					const s = o(i.expected),
						a = tb(i.input),
						l = o(a, i.input);
					return `Invalid input: expected ${s}, received ${l}`;
				}
				case "invalid_value":
					return i.values.length === 1
						? `Invalid input: expected ${mc(i.values[0])}`
						: `Invalid option: expected one of ${cc(i.values, "|")}`;
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
									: `Invalid ${r[s.format] ?? i.format}`;
				}
				case "not_multiple_of":
					return `Invalid number: must be a multiple of ${i.divisor}`;
				case "unrecognized_keys":
					return `Unrecognized key${i.keys.length > 1 ? "s" : ""}: ${cc(i.keys, ", ")}`;
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
	function O0() {
		return { localeError: R0() };
	}
	var ld;
	class P0 {
		constructor() {
			(this._map = new WeakMap()), (this._idmap = new Map());
		}
		add(t, ...r) {
			const n = r[0];
			return (
				this._map.set(t, n),
				n && typeof n == "object" && "id" in n && this._idmap.set(n.id, t),
				this
			);
		}
		clear() {
			return (this._map = new WeakMap()), (this._idmap = new Map()), this;
		}
		remove(t) {
			const r = this._map.get(t);
			return (
				r && typeof r == "object" && "id" in r && this._idmap.delete(r.id),
				this._map.delete(t),
				this
			);
		}
		get(t) {
			const r = t._zod.parent;
			if (r) {
				const n = { ...(this.get(r) ?? {}) };
				delete n.id;
				const o = { ...n, ...this._map.get(t) };
				return Object.keys(o).length ? o : void 0;
			}
			return this._map.get(t);
		}
		has(t) {
			return this._map.has(t);
		}
	}
	function ud() {
		return new P0();
	}
	(ld = globalThis).__zod_globalRegistry ?? (ld.__zod_globalRegistry = ud());
	const to = globalThis.__zod_globalRegistry;
	function M0(e, t) {
		return new e({ type: "string", ...V(t) });
	}
	function cd(e, t) {
		return new e({
			type: "string",
			format: "email",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function L0(e, t) {
		return new e({
			type: "string",
			format: "guid",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function dd(e, t) {
		return new e({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function N0(e, t) {
		return new e({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v4",
			...V(t),
		});
	}
	function D0(e, t) {
		return new e({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v6",
			...V(t),
		});
	}
	function j0(e, t) {
		return new e({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v7",
			...V(t),
		});
	}
	function B0(e, t) {
		return new e({
			type: "string",
			format: "url",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function U0(e, t) {
		return new e({
			type: "string",
			format: "emoji",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function F0(e, t) {
		return new e({
			type: "string",
			format: "nanoid",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function H0(e, t) {
		return new e({
			type: "string",
			format: "cuid",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function V0(e, t) {
		return new e({
			type: "string",
			format: "cuid2",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function Z0(e, t) {
		return new e({
			type: "string",
			format: "ulid",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function q0(e, t) {
		return new e({
			type: "string",
			format: "xid",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function W0(e, t) {
		return new e({
			type: "string",
			format: "ksuid",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function K0(e, t) {
		return new e({
			type: "string",
			format: "ipv4",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function J0(e, t) {
		return new e({
			type: "string",
			format: "ipv6",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function G0(e, t) {
		return new e({
			type: "string",
			format: "cidrv4",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function Y0(e, t) {
		return new e({
			type: "string",
			format: "cidrv6",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function X0(e, t) {
		return new e({
			type: "string",
			format: "base64",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function Q0(e, t) {
		return new e({
			type: "string",
			format: "base64url",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function ek(e, t) {
		return new e({
			type: "string",
			format: "e164",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function tk(e, t) {
		return new e({
			type: "string",
			format: "jwt",
			check: "string_format",
			abort: !1,
			...V(t),
		});
	}
	function rk(e, t) {
		return new e({
			type: "string",
			format: "datetime",
			check: "string_format",
			offset: !1,
			local: !1,
			precision: null,
			...V(t),
		});
	}
	function nk(e, t) {
		return new e({
			type: "string",
			format: "date",
			check: "string_format",
			...V(t),
		});
	}
	function ok(e, t) {
		return new e({
			type: "string",
			format: "time",
			check: "string_format",
			precision: null,
			...V(t),
		});
	}
	function ik(e, t) {
		return new e({
			type: "string",
			format: "duration",
			check: "string_format",
			...V(t),
		});
	}
	function sk(e, t) {
		return new e({ type: "number", checks: [], ...V(t) });
	}
	function ak(e, t) {
		return new e({ type: "number", coerce: !0, checks: [], ...V(t) });
	}
	function lk(e, t) {
		return new e({
			type: "number",
			check: "number_format",
			abort: !1,
			format: "safeint",
			...V(t),
		});
	}
	function uk(e, t) {
		return new e({ type: "boolean", ...V(t) });
	}
	function ck(e, t) {
		return new e({ type: "boolean", coerce: !0, ...V(t) });
	}
	function dk(e, t) {
		return new e({ type: "null", ...V(t) });
	}
	function pk(e) {
		return new e({ type: "any" });
	}
	function fk(e) {
		return new e({ type: "unknown" });
	}
	function hk(e, t) {
		return new e({ type: "never", ...V(t) });
	}
	function gk(e, t) {
		return new e({ type: "date", ...V(t) });
	}
	function mk(e, t) {
		return new e({ type: "date", coerce: !0, ...V(t) });
	}
	function pd(e, t) {
		return new Ec({ check: "less_than", ...V(t), value: e, inclusive: !1 });
	}
	function zi(e, t) {
		return new Ec({ check: "less_than", ...V(t), value: e, inclusive: !0 });
	}
	function fd(e, t) {
		return new Ac({ check: "greater_than", ...V(t), value: e, inclusive: !1 });
	}
	function Ii(e, t) {
		return new Ac({ check: "greater_than", ...V(t), value: e, inclusive: !0 });
	}
	function hd(e, t) {
		return new iw({ check: "multiple_of", ...V(t), value: e });
	}
	function gd(e, t) {
		return new aw({ check: "max_length", ...V(t), maximum: e });
	}
	function Ti(e, t) {
		return new lw({ check: "min_length", ...V(t), minimum: e });
	}
	function md(e, t) {
		return new uw({ check: "length_equals", ...V(t), length: e });
	}
	function yk(e, t) {
		return new cw({
			check: "string_format",
			format: "regex",
			...V(t),
			pattern: e,
		});
	}
	function vk(e) {
		return new dw({ check: "string_format", format: "lowercase", ...V(e) });
	}
	function bk(e) {
		return new pw({ check: "string_format", format: "uppercase", ...V(e) });
	}
	function wk(e, t) {
		return new fw({
			check: "string_format",
			format: "includes",
			...V(t),
			includes: e,
		});
	}
	function kk(e, t) {
		return new hw({
			check: "string_format",
			format: "starts_with",
			...V(t),
			prefix: e,
		});
	}
	function _k(e, t) {
		return new gw({
			check: "string_format",
			format: "ends_with",
			...V(t),
			suffix: e,
		});
	}
	function tn(e) {
		return new mw({ check: "overwrite", tx: e });
	}
	function Sk(e) {
		return tn((t) => t.normalize(e));
	}
	function xk() {
		return tn((e) => e.trim());
	}
	function $k() {
		return tn((e) => e.toLowerCase());
	}
	function Ck() {
		return tn((e) => e.toUpperCase());
	}
	function zk() {
		return tn((e) => Fv(e));
	}
	function Ik(e, t, r) {
		return new e({ type: "array", element: t, ...V(r) });
	}
	function Tk(e, t, r) {
		return new e({ type: "custom", check: "custom", fn: t, ...V(r) });
	}
	function Ek(e, t) {
		const r = Ak(
			(n) => (
				(n.addIssue = (o) => {
					if (typeof o == "string") n.issues.push(Xn(o, n.value, r._zod.def));
					else {
						const i = o;
						i.fatal && (i.continue = !1),
							i.code ?? (i.code = "custom"),
							"input" in i || (i.input = n.value),
							i.inst ?? (i.inst = r),
							i.continue ?? (i.continue = !r._zod.def.abort),
							n.issues.push(Xn(i));
					}
				}),
				e(n.value, n)
			),
			t,
		);
		return r;
	}
	function Ak(e, t) {
		const r = new Ke({ check: "custom", ...V(t) });
		return (r._zod.check = e), r;
	}
	function Rk(e, t) {
		const r = V(t);
		let n = r.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
			o = r.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
		r.case !== "sensitive" &&
			((n = n.map((p) => (typeof p == "string" ? p.toLowerCase() : p))),
			(o = o.map((p) => (typeof p == "string" ? p.toLowerCase() : p))));
		const i = new Set(n),
			s = new Set(o),
			a = e.Codec ?? rd,
			l = e.Boolean ?? Bc,
			u = e.String ?? vi,
			d = new u({ type: "string", error: r.error }),
			c = new l({ type: "boolean", error: r.error }),
			f = new a({
				type: "pipe",
				in: d,
				out: c,
				transform: (p, h) => {
					let g = p;
					return (
						r.case !== "sensitive" && (g = g.toLowerCase()),
						i.has(g)
							? !0
							: s.has(g)
								? !1
								: (h.issues.push({
										code: "invalid_value",
										expected: "stringbool",
										values: [...i, ...s],
										input: h.value,
										inst: f,
										continue: !1,
									}),
									{})
					);
				},
				reverseTransform: (p, h) =>
					p === !0 ? n[0] || "true" : o[0] || "false",
				error: r.error,
			});
		return (
			(f._zod.bag.truthy = n),
			(f._zod.bag.falsy = o),
			(f._zod.bag.case = r.case ?? "insensitive"),
			f
		);
	}
	function ro(e, ...t) {
		for (const r of t)
			for (const n of Reflect.ownKeys(r))
				Object.prototype.propertyIsEnumerable.call(r, n) && Pt(e, n, r[n]);
		return e;
	}
	function yd(e) {
		let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
		return (
			t === "draft-4" && (t = "draft-04"),
			t === "draft-7" && (t = "draft-07"),
			{
				processors: e.processors ?? {},
				metadataRegistry: (e == null ? void 0 : e.metadata) ?? to,
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
	function Lt(e, t, r, n, o) {
		const i =
			typeof t.unrepresentable == "function"
				? t.unrepresentable({ zodSchema: e, path: n.path, message: o })
				: t.unrepresentable;
		if (i === "any") return !1;
		if (i === void 0 || i === "throw") throw new Error(o);
		return Object.assign(r, i), !0;
	}
	function xe(e, t, r = { path: [], schemaPath: [] }) {
		var d, c;
		var n;
		const o = e._zod.def,
			i = t.seen.get(e);
		if (i)
			return (
				i.count++, r.schemaPath.includes(e) && (i.cycle = r.path), i.schema
			);
		const s = { schema: {}, count: 1, cycle: void 0, path: r.path };
		t.seen.set(e, s),
			(t.sharedDefsExtractedFor = void 0),
			(t.sharedEmitDoneFor = void 0);
		const a = (c = (d = e._zod).toJSONSchema) == null ? void 0 : c.call(d);
		if (a) s.schema = a;
		else {
			const f = { ...r, schemaPath: [...r.schemaPath, e], path: r.path };
			if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, s.schema, f);
			else {
				const h = s.schema,
					g = t.processors[o.type];
				if (!g)
					throw new Error(
						`[toJSONSchema]: Non-representable type encountered: ${o.type}`,
					);
				g(e, t, h, f);
			}
			const p = e._zod.parent;
			p && (s.ref || (s.ref = p), xe(p, t, f), (t.seen.get(p).isParent = !0));
		}
		const l = t.metadataRegistry.get(e);
		return (
			l && ro(s.schema, l),
			t.io === "input" &&
				He(e) &&
				(delete s.schema.examples, delete s.schema.default),
			t.io === "input" &&
				"_prefault" in s.schema &&
				((n = s.schema).default ?? (n.default = s.schema._prefault)),
			delete s.schema._prefault,
			t.seen.get(e).schema
		);
	}
	function vd(e) {
		return e.replace(/~/g, "~0").replace(/\//g, "~1");
	}
	function bd(e, t) {
		var s, a, l, u;
		const r = e.seen.get(t);
		if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
		if (e.external && e.sharedDefsExtractedFor === e.external) return;
		const n = new Map();
		for (const d of e.seen.entries()) {
			const c = (s = e.metadataRegistry.get(d[0])) == null ? void 0 : s.id;
			if (c) {
				const f = n.get(c);
				if (f && f !== d[0])
					throw new Error(
						`Duplicate schema id "${c}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
					);
				n.set(c, d[0]);
			}
		}
		const o = (d) => {
				var g;
				const c = e.target === "draft-2020-12" ? "$defs" : "definitions";
				if (e.external) {
					const y = (g = e.external.registry.get(d[0])) == null ? void 0 : g.id,
						v = e.external.uri ?? ((w) => w);
					if (y) return { ref: v(y) };
					const b = d[1].defId ?? d[1].schema.id ?? `schema${e.counter++}`;
					return (
						(d[1].defId = b),
						{ defId: b, ref: `${v("__shared")}#/${c}/${vd(b)}` }
					);
				}
				const f = "#",
					p = `${f}/${c}/`;
				if (d[1] === r && !d[1].schema.id) return { ref: f };
				const h = d[1].schema.id ?? `__schema${e.counter++}`;
				return { defId: h, ref: p + vd(h) };
			},
			i = (d) => {
				if (d[1].schema.$ref) return;
				const c = d[1],
					{ ref: f, defId: p } = o(d);
				(c.def = { ...c.schema }), p && (c.defId = p);
				const h = c.schema;
				for (const g in h) delete h[g];
				h.$ref = f;
			};
		if (e.cycles === "throw")
			for (const d of e.seen.entries()) {
				const c = d[1];
				if (c.cycle)
					throw new Error(`Cycle detected: #/${((a = c.cycle)) == null ? void 0 : a.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
			}
		for (const d of e.seen.entries()) {
			const c = d[1];
			if (t === d[0]) {
				i(d);
				continue;
			}
			if (e.external) {
				const p = (l = e.external.registry.get(d[0])) == null ? void 0 : l.id;
				if (t !== d[0] && p) {
					i(d);
					continue;
				}
			}
			if ((u = e.metadataRegistry.get(d[0])) == null ? void 0 : u.id) {
				i(d);
				continue;
			}
			if (c.cycle) {
				i(d);
				continue;
			}
			c.count > 1 && e.reused === "ref" && i(d);
		}
		e.external && (e.sharedDefsExtractedFor = e.external);
	}
	function wd(e) {
		const t = e.anyOf;
		if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
		const r = [];
		for (const n of t) {
			if (!n || typeof n != "object") return;
			wd(n);
			const o = Object.keys(n);
			if (o.length !== 1 || o[0] !== "type") return;
			const i = n.type;
			for (const s of Array.isArray(i) ? i : [i]) {
				if (typeof s != "string") return;
				r.includes(s) || r.push(s);
			}
		}
		delete e.anyOf, (e.type = r.length === 1 ? r[0] : r);
	}
	const kd = new Set([
			"type",
			"properties",
			"required",
			"additionalProperties",
		]),
		_d = ["oneOf", "anyOf"];
	function Sd(e) {
		const t = e.additionalProperties;
		return t === void 0 || t === !1 || typeof t != "object" || t === null
			? null
			: Object.keys(t).length
				? t
				: null;
	}
	function _a(e) {
		var i;
		const t = [];
		for (const s of e) {
			if (typeof s != "object" || s.type !== "object") return null;
			for (const a in s) if (!kd.has(a)) return null;
			t.push(s);
		}
		const r = {},
			n = new Set();
		for (const s of t) {
			for (const a in s.properties) {
				if (Object.prototype.hasOwnProperty.call(r, a)) continue;
				const l = [];
				for (const d of t) {
					const c = ((i = d.properties) == null ? void 0 : i[a]) ?? Sd(d);
					c != null &&
						(l.some((f) => JSON.stringify(f) === JSON.stringify(c)) ||
							l.push(c));
				}
				const u = l.length === 1 ? l[0] : (_a(l) ?? { allOf: l });
				Pt(r, a, u);
			}
			for (const a of s.required ?? []) n.add(a);
		}
		const o = { type: "object", properties: r };
		if (
			(n.size && (o.required = [...n]),
			t.every((s) => s.additionalProperties === !1))
		)
			o.additionalProperties = !1;
		else {
			const s = [];
			for (const a of t) {
				const l = Sd(a);
				l &&
					!s.some((u) => JSON.stringify(u) === JSON.stringify(l)) &&
					s.push(l);
			}
			s.length === 1
				? (o.additionalProperties = s[0])
				: s.length > 1 && (o.additionalProperties = { allOf: s });
		}
		return o;
	}
	function Ok(e) {
		const t = e.allOf;
		if (!Array.isArray(t) || t.length < 2) return;
		for (const o of kd) if (o in e) return;
		const r = t.filter((o) => _d.some((i) => Array.isArray(o[i])));
		let n = null;
		if (!r.length) n = _a(t);
		else {
			const o = r[0],
				i = _d.find((l) => Array.isArray(o[l]));
			if (Object.keys(o).length !== 1) return;
			const s = t.filter((l) => l !== o),
				a = o[i].map((l) => _a([...s, l]));
			if (a.some((l) => !l)) return;
			n = { [i]: a };
		}
		n && (delete e.allOf, ro(e, n));
	}
	function xd(e, t) {
		var a, l, u, d;
		const r = e.seen.get(t);
		if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
		const n = (c) => {
			const f = e.seen.get(c);
			if (f.ref === null) return;
			const p = f.def ?? f.schema,
				h = { ...p },
				g = f.ref;
			if (((f.ref = null), g)) {
				n(g);
				const v = e.seen.get(g),
					b = v.schema;
				if (
					(b.$ref &&
					(e.target === "draft-07" ||
						e.target === "draft-04" ||
						e.target === "openapi-3.0")
						? ((p.allOf = p.allOf ?? []), p.allOf.push(b))
						: ro(p, b),
					ro(p, h),
					c._zod.parent === g)
				)
					for (const S in p)
						S === "$ref" || S === "allOf" || S in h || delete p[S];
				if (b.$ref && v.def)
					for (const S in p)
						S === "$ref" ||
							S === "allOf" ||
							(S in v.def &&
								JSON.stringify(p[S]) === JSON.stringify(v.def[S]) &&
								delete p[S]);
			}
			const y = c._zod.parent;
			if (y && y !== g) {
				n(y);
				const v = e.seen.get(y);
				if (v != null && v.schema.$ref && ((p.$ref = v.schema.$ref), v.def))
					for (const b in p)
						b === "$ref" ||
							b === "allOf" ||
							(b in v.def &&
								JSON.stringify(p[b]) === JSON.stringify(v.def[b]) &&
								delete p[b]);
			}
			e.override({ zodSchema: c, jsonSchema: p, path: f.path ?? [] });
		};
		if (!e.external || e.sharedEmitDoneFor !== e.external) {
			for (const c of [...e.seen.entries()].reverse()) n(c[0]);
			if (e.target !== "openapi-3.0")
				for (const c of e.seen.entries()) wd(c[1].def ?? c[1].schema);
			for (const c of e.deferred) c();
			if (e.intersections.length) {
				const c = new Map();
				for (const f of e.seen.values())
					for (const p of [f.schema, f.def]) {
						const h = p == null ? void 0 : p.allOf;
						if (!Array.isArray(h)) continue;
						const g = c.get(h);
						g ? g.push(p) : c.set(h, [p]);
					}
				for (const f of e.intersections) for (const p of c.get(f) ?? []) Ok(p);
			}
		}
		const o = {};
		if (
			(e.target === "draft-2020-12"
				? (o.$schema = "https://json-schema.org/draft/2020-12/schema")
				: e.target === "draft-07"
					? (o.$schema = "http://json-schema.org/draft-07/schema#")
					: e.target === "draft-04"
						? (o.$schema = "http://json-schema.org/draft-04/schema#")
						: e.target,
			(a = e.external) != null && a.uri)
		) {
			const c = (l = e.external.registry.get(t)) == null ? void 0 : l.id;
			if (!c) throw new Error("Schema is missing an `id` property");
			o.$id = e.external.uri(c);
		}
		ro(o, r.defId ? r.schema : (r.def ?? r.schema));
		const i = (u = e.metadataRegistry.get(t)) == null ? void 0 : u.id;
		i !== void 0 && o.id === i && delete o.id;
		const s = ((d = e.external) == null ? void 0 : d.defs) ?? {};
		if (!e.external || e.sharedEmitDoneFor !== e.external)
			for (const c of e.seen.entries()) {
				const f = c[1];
				f.def &&
					f.defId &&
					(f.def.id === f.defId && delete f.def.id, Pt(s, f.defId, f.def));
			}
		e.external && (e.sharedEmitDoneFor = e.external),
			e.external ||
				(Object.keys(s).length > 0 &&
					(e.target === "draft-2020-12" ? (o.$defs = s) : (o.definitions = s)));
		try {
			const c = JSON.parse(JSON.stringify(o));
			return (
				Object.defineProperty(c, "~standard", {
					value: {
						...t["~standard"],
						jsonSchema: {
							input: Ei(t, "input", e.processors),
							output: Ei(t, "output", e.processors),
						},
					},
					enumerable: !1,
					writable: !1,
				}),
				c
			);
		} catch {
			throw new Error("Error converting schema to JSON.");
		}
	}
	function He(e, t) {
		const r = t ?? { seen: new Set() };
		if (r.seen.has(e)) return !1;
		r.seen.add(e);
		const n = e._zod.def;
		if (n.type === "transform") return !0;
		if (n.type === "array") return He(n.element, r);
		if (n.type === "set") return He(n.valueType, r);
		if (n.type === "lazy") return He(n.getter(), r);
		if (
			n.type === "promise" ||
			n.type === "optional" ||
			n.type === "nonoptional" ||
			n.type === "nullable" ||
			n.type === "readonly" ||
			n.type === "default" ||
			n.type === "prefault" ||
			n.type === "catch"
		)
			return He(n.innerType, r);
		if (n.type === "intersection") return He(n.left, r) || He(n.right, r);
		if (n.type === "record" || n.type === "map")
			return He(n.keyType, r) || He(n.valueType, r);
		if (n.type === "pipe")
			return e._zod.traits.has("$ZodCodec") ? !0 : He(n.in, r) || He(n.out, r);
		if (n.type === "object") {
			for (const o in n.shape) if (He(n.shape[o], r)) return !0;
			return !1;
		}
		if (n.type === "union") {
			for (const o of n.options) if (He(o, r)) return !0;
			return !1;
		}
		if (n.type === "tuple") {
			for (const o of n.items) if (He(o, r)) return !0;
			return !!(n.rest && He(n.rest, r));
		}
		return !1;
	}
	const Pk =
			(e, t = {}) =>
			(r) => {
				const n = yd({ ...r, processors: t });
				return xe(e, n), bd(n, e), xd(n, e);
			},
		Ei =
			(e, t, r = {}) =>
			(n) => {
				const { libraryOptions: o, target: i } = n ?? {},
					s = yd({ ...(o ?? {}), target: i, io: t, processors: r });
				return xe(e, s), bd(s, e), xd(s, e);
			},
		rn = (e, t, r) => {
			(e[t] === void 0 || r > e[t]) && (e[t] = r);
		},
		nn = (e, t, r) => {
			(e[t] === void 0 || r < e[t]) && (e[t] = r);
		},
		$d = (e, t) => {
			rn(e, "minimum", t), nn(e, "maximum", t);
		},
		Cd = (e, t) => {
			e.multipleOf ?? (e.multipleOf = []),
				e.multipleOf.includes(t) || e.multipleOf.push(t);
		},
		zd = (e, t) => {
			e.patterns ?? (e.patterns = new Set()), e.patterns.add(t);
		},
		Id = (e, t) => {
			e.mime = e.mime ? e.mime.filter((r) => t.includes(r)) : [...t];
		},
		Td = (e, t) => {
			(e.format = t), t.includes("int") && (e.isInt = !0);
		},
		Ed = (e, t) => rn(e, "minimum", t.minimum),
		Ad = (e, t) => nn(e, "maximum", t.maximum),
		Rd = (e) => (t, r) => {
			Td(t, r.format);
			const [n, o] = e[r.format];
			rn(t, "minimum", n), nn(t, "maximum", o);
		},
		Sa = {
			greater_than: (e, t) =>
				rn(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
			less_than: (e, t) =>
				nn(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
			multiple_of: (e, t) => Cd(e, t.value),
			number_format: Rd(yc),
			bigint_format: Rd(qv),
			min_length: Ed,
			max_length: Ad,
			length_equals: (e, t) => $d(e, t.length),
			min_size: Ed,
			max_size: Ad,
			size_equals: (e, t) => $d(e, t.size),
			string_format: (e, t) => {
				Td(e, t.format),
					t.pattern && zd(e, t.pattern),
					(t.format === "base64" || t.format === "base64url") &&
						(e.contentEncoding = t.format),
					(t.local || t.precision === -1) && (e.laxFormat = !0);
			},
			mime_type: (e, t) => Id(e, t.mime),
		};
	function Je(e) {
		var i;
		const t = {},
			r = e._zod.def,
			n = e._zod.traits.has("$ZodCheck")
				? [e, ...(r.checks ?? [])]
				: (r.checks ?? []);
		for (const s of n)
			(i = Sa[s._zod.def.check]) == null || i.call(Sa, t, s._zod.def);
		const o = e._zod.bag;
		o.minimum !== void 0 && rn(t, "minimum", o.minimum),
			o.exclusiveMinimum !== void 0 &&
				rn(t, "exclusiveMinimum", o.exclusiveMinimum),
			o.maximum !== void 0 && nn(t, "maximum", o.maximum),
			o.exclusiveMaximum !== void 0 &&
				nn(t, "exclusiveMaximum", o.exclusiveMaximum),
			o.multipleOf !== void 0 && Cd(t, o.multipleOf),
			o.format !== void 0 &&
				(t.format ?? (t.format = o.format),
				o.format.includes("int") && (t.isInt = !0)),
			o.mime && Id(t, o.mime);
		for (const s of o.patterns ?? []) zd(t, s);
		return t;
	}
	const Mk = {
			guid: "uuid",
			url: "uri",
			datetime: "date-time",
			json_string: "json-string",
			regex: "",
		},
		Lk = new Map([
			[Dc, Zb],
			[va, qb],
		]),
		Od = (e) => Lk.get(e) ?? e,
		Nk = (e, t, r, n) => {
			const o = r;
			o.type = "string";
			const {
				minimum: i,
				maximum: s,
				format: a,
				patterns: l,
				contentEncoding: u,
				laxFormat: d,
			} = Je(e);
			if (
				(typeof i == "number" && (o.minLength = i),
				typeof s == "number" && (o.maxLength = s),
				a &&
					((o.format = Mk[a] ?? a),
					o.format === "" && delete o.format,
					(a === "time" || d) && delete o.format),
				u && (o.contentEncoding = u),
				l && l.size > 0)
			) {
				const c = [...l].map(Od);
				c.length === 1
					? (o.pattern = c[0].source)
					: c.length > 1 &&
						(o.allOf = [
							...c.map((f) => ({
								...(t.target === "draft-07" ||
								t.target === "draft-04" ||
								t.target === "openapi-3.0"
									? { type: "string" }
									: {}),
								pattern: f.source,
							})),
						]);
			}
		},
		Dk = (e, t, r, n) => {
			const o = r,
				{
					minimum: i,
					maximum: s,
					multipleOf: a,
					exclusiveMaximum: l,
					exclusiveMinimum: u,
					isInt: d,
				} = Je(e);
			o.type = d ? "integer" : "number";
			const c = typeof u == "number" && u >= (i ?? Number.NEGATIVE_INFINITY),
				f = typeof l == "number" && l <= (s ?? Number.POSITIVE_INFINITY),
				p = t.target === "draft-04" || t.target === "openapi-3.0";
			if (
				(c
					? p
						? ((o.minimum = u), (o.exclusiveMinimum = !0))
						: (o.exclusiveMinimum = u)
					: typeof i == "number" && (o.minimum = i),
				f
					? p
						? ((o.maximum = l), (o.exclusiveMaximum = !0))
						: (o.exclusiveMaximum = l)
					: typeof s == "number" && (o.maximum = s),
				a)
			) {
				const h = new Set();
				for (const v of a)
					Number.isFinite(v) && v !== 0
						? h.add(Math.abs(v))
						: Lt(
								e,
								t,
								o,
								n,
								`A multipleOf divisor of ${v} cannot be represented in JSON Schema`,
							);
				const [g, ...y] = h;
				g !== void 0 && (o.multipleOf = g),
					y.length &&
						(o.allOf = [
							...(o.allOf ?? []),
							...y.map((v) => ({ multipleOf: v })),
						]);
			}
		},
		jk = (e, t, r, n) => {
			r.type = "boolean";
		},
		Bk = (e, t, r, n) => {
			t.target === "openapi-3.0"
				? ((r.type = "string"), (r.nullable = !0), (r.enum = [null]))
				: (r.type = "null");
		},
		Uk = (e, t, r, n) => {
			r.not = {};
		},
		Fk = (e, t, r, n) => {},
		Hk = (e, t, r, n) => {},
		Vk = (e, t, r, n) => {
			Lt(e, t, r, n, "Date cannot be represented in JSON Schema");
		},
		Zk = (e, t, r, n) => {
			const o = e._zod.def,
				i = ea(o.entries);
			if (i.length === 0) {
				r.not = {};
				return;
			}
			i.every((s) => typeof s == "number") && (r.type = "number"),
				i.every((s) => typeof s == "string") && (r.type = "string"),
				(r.enum = i);
		},
		qk = (e, t, r, n) => {
			const o = e._zod.def;
			if (o.values.length === 0) {
				r.not = {};
				return;
			}
			const i = [];
			for (const s of o.values)
				if (s === void 0) {
					if (
						Lt(
							e,
							t,
							r,
							n,
							"Literal `undefined` cannot be represented in JSON Schema",
						)
					)
						return;
				} else if (typeof s == "bigint") {
					if (
						Lt(
							e,
							t,
							r,
							n,
							"BigInt literals cannot be represented in JSON Schema",
						)
					)
						return;
					i.push(Number(s));
				} else i.push(s);
			if (i.length !== 0)
				if (i.length === 1) {
					const s = i[0];
					(r.type = s === null ? "null" : typeof s),
						t.target === "draft-04" || t.target === "openapi-3.0"
							? (r.enum = [s])
							: (r.const = s);
				} else
					i.every((s) => typeof s == "number") && (r.type = "number"),
						i.every((s) => typeof s == "string") && (r.type = "string"),
						i.every((s) => typeof s == "boolean") && (r.type = "boolean"),
						i.every((s) => s === null) && (r.type = "null"),
						(r.enum = i);
		},
		Wk = (e, t, r, n) => {
			Lt(e, t, r, n, "Custom types cannot be represented in JSON Schema");
		},
		Kk = (e, t, r, n) => {
			Lt(e, t, r, n, "Transforms cannot be represented in JSON Schema");
		},
		Jk = (e, t, r, n) => {
			const o = r,
				i = e._zod.def,
				{ minimum: s, maximum: a } = Je(e);
			typeof s == "number" && (o.minItems = s),
				typeof a == "number" && (o.maxItems = a),
				(o.type = "array"),
				(o.items = xe(i.element, t, { ...n, path: [...n.path, "items"] }));
		};
	function no(e) {
		const t = e._zod.def;
		return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform")
			? no(t.out)
			: t.type === "catch"
				? no(t.innerType)
				: e._zod.optin;
	}
	const Gk = (e, t, r, n) => {
			var d;
			const o = r,
				i = e._zod.def,
				s = i.shape;
			if (
				Object.getOwnPropertySymbols(s).length &&
				Lt(e, t, o, n, "Symbol keys cannot be represented in JSON Schema")
			)
				return;
			(o.type = "object"), (o.properties = {});
			for (const c in s)
				Pt(
					o.properties,
					c,
					xe(s[c], t, { ...n, path: [...n.path, "properties", c] }),
				);
			const l = new Set(Object.keys(s)),
				u = new Set(
					[...l].filter((c) => {
						const f = i.shape[c];
						return t.io === "input"
							? no(f) === void 0
							: f._zod.optout === void 0;
					}),
				);
			u.size > 0 && (o.required = Array.from(u)),
				((d = i.catchall) == null ? void 0 : d._zod.def.type) === "never"
					? (o.additionalProperties = !1)
					: i.catchall
						? i.catchall &&
							(o.additionalProperties = xe(i.catchall, t, {
								...n,
								path: [...n.path, "additionalProperties"],
							}))
						: t.io === "output" && (o.additionalProperties = !1);
		},
		Yk = (e, t, r, n) => {
			const o = e._zod.def,
				i = o.inclusive === !1,
				s = o.options.map((a, l) =>
					xe(a, t, { ...n, path: [...n.path, i ? "oneOf" : "anyOf", l] }),
				);
			i ? (r.oneOf = s) : (r.anyOf = s);
		},
		Xk = (e, t, r, n) => {
			const o = e._zod.def,
				i = xe(o.left, t, { ...n, path: [...n.path, "allOf", 0] }),
				s = xe(o.right, t, { ...n, path: [...n.path, "allOf", 1] }),
				a = (u) => "allOf" in u && Object.keys(u).length === 1,
				l = [...(a(i) ? i.allOf : [i]), ...(a(s) ? s.allOf : [s])];
			(r.allOf = l), t.intersections.push(l);
		},
		Qk = (e, t, r, n) => {
			const o = r,
				i = e._zod.def;
			o.type = "array";
			const s = t.target === "draft-2020-12" ? "prefixItems" : "items",
				a =
					t.target === "draft-2020-12" || t.target === "openapi-3.0"
						? "items"
						: "additionalItems",
				l = i.items.map((g, y) => xe(g, t, { ...n, path: [...n.path, s, y] })),
				u = i.rest
					? xe(i.rest, t, {
							...n,
							path: [
								...n.path,
								a,
								...(t.target === "openapi-3.0" ? [i.items.length] : []),
							],
						})
					: null;
			let d = i.items.length;
			for (; d > 0; ) {
				const g = i.items[d - 1];
				if (
					!(t.io === "input" ? no(g) !== void 0 : g._zod.optout === "optional")
				)
					break;
				d--;
			}
			const c = i.items.length,
				f = !i.rest;
			t.target === "draft-2020-12"
				? ((o.prefixItems = l),
					f ? (o.items = !1) : u && (o.items = u),
					d > 0 && (o.minItems = d),
					f && (o.maxItems = c))
				: t.target === "openapi-3.0"
					? ((o.items = { anyOf: l }),
						u && o.items.anyOf.push(u),
						d > 0 && (o.minItems = d),
						f && (o.maxItems = c))
					: ((o.items = l),
						f ? (o.additionalItems = !1) : u && (o.additionalItems = u),
						d > 0 && (o.minItems = d),
						f && (o.maxItems = c));
			const { minimum: p, maximum: h } = Je(e);
			typeof p == "number" && (o.minItems = p),
				typeof h == "number" && (o.maxItems = h);
		};
	function xa(e, t, r) {
		var h;
		if (t.$ref) {
			if (r.has(t)) return t;
			r.add(t);
			const g = (h = e.get(t)) == null ? void 0 : h.def;
			if (!g) return t;
			const y = xa(e, g, r);
			return y === g ? t : y;
		}
		for (const g of ["anyOf", "oneOf"]) {
			const y = t[g];
			if (!Array.isArray(y)) continue;
			const v = y.map((b) => xa(e, b, r));
			v.some((b, w) => b !== y[w]) && (t = { ...t, [g]: v });
		}
		const n = Array.isArray(t.type) ? t.type : [t.type],
			o =
				!n.includes("string") &&
				n.some((g) => g === "number" || g === "integer"),
			i = t.enum ?? (t.const !== void 0 ? [t.const] : void 0);
		if (!o && !(i != null && i.some((g) => typeof g == "number"))) return t;
		const {
			minimum: s,
			maximum: a,
			exclusiveMinimum: l,
			exclusiveMaximum: u,
			multipleOf: d,
			format: c,
			id: f,
			...p
		} = t;
		return (
			p.enum
				? (p.enum = p.enum.map((g) => (typeof g == "number" ? String(g) : g)))
				: typeof p.const == "number" && (p.const = String(p.const)),
			o &&
				((p.type = "string"),
				i || (p.pattern = (n.includes("number") ? ma : ew).source)),
			p
		);
	}
	const $a = new WeakMap();
	function e_(e) {
		var n;
		const t = new Map();
		for (const o of e.seen.values())
			o.def && !t.has(o.schema) && t.set(o.schema, o);
		const r = new Map();
		for (const o of $a.get(e) ?? []) {
			const i = e.seen.get(o),
				s =
					(n =
						(i == null ? void 0 : i.def) ?? (i == null ? void 0 : i.schema)) ==
					null
						? void 0
						: n.propertyNames;
			if (!s || s === !0 || r.has(s)) continue;
			const a = xa(t, s, new Set());
			a !== s && r.set(s, a);
		}
		if (r.size)
			for (const o of e.seen.values())
				for (const i of [o.schema, o.def]) {
					const s = i && r.get(i.propertyNames);
					s && (i.propertyNames = s);
				}
	}
	const t_ = (e, t, r, n) => {
			const o = r,
				i = e._zod.def;
			o.type = "object";
			const s = i.keyType,
				a = Je(s).patterns;
			if (i.mode === "loose" && a && a.size > 0) {
				const d = xe(i.valueType, t, {
					...n,
					path: [...n.path, "patternProperties", "*"],
				});
				o.patternProperties = {};
				for (const c of a) Pt(o.patternProperties, Od(c).source, d);
			} else {
				if (t.target === "draft-07" || t.target === "draft-2020-12") {
					o.propertyNames = xe(i.keyType, t, {
						...n,
						path: [...n.path, "propertyNames"],
					});
					let d = $a.get(t);
					d || ((d = []), $a.set(t, d), t.deferred.push(() => e_(t))),
						d.push(e);
				}
				o.additionalProperties = xe(i.valueType, t, {
					...n,
					path: [...n.path, "additionalProperties"],
				});
			}
			const l = s._zod.values,
				u = t.io === "input" && no(i.valueType) !== void 0;
			if (l && !i.partial && !u) {
				const d = [...l].filter(
					(c) => typeof c == "string" || typeof c == "number",
				);
				d.length > 0 && (o.required = d.map(String));
			}
		},
		r_ = (e, t, r, n) => {
			const o = e._zod.def,
				i = xe(o.innerType, t, n),
				s = t.seen.get(e);
			t.target === "openapi-3.0"
				? ((s.ref = o.innerType), (r.nullable = !0))
				: (r.anyOf = [i, { type: "null" }]);
		},
		n_ = (e, t, r, n) => {
			const o = e._zod.def;
			xe(o.innerType, t, n);
			const i = t.seen.get(e);
			i.ref = o.innerType;
		},
		Ca = Symbol();
	function Pd(e, t, r, n, o) {
		let i = !1;
		const s = JSON.stringify(e, (a, l) =>
			typeof l != "bigint" ? l : ((i = !0), null),
		);
		return i
			? (Lt(t, r, n, o, "BigInt defaults cannot be represented in JSON Schema"),
				Ca)
			: JSON.parse(s);
	}
	const o_ = (e, t, r, n) => {
			const o = e._zod.def;
			xe(o.innerType, t, n);
			const i = t.seen.get(e);
			i.ref = o.innerType;
			const s = Pd(o.defaultValue, e, t, r, n);
			s !== Ca && (r.default = s);
		},
		i_ = (e, t, r, n) => {
			const o = e._zod.def;
			xe(o.innerType, t, n);
			const i = t.seen.get(e);
			if (((i.ref = o.innerType), t.io !== "input")) return;
			const s = Pd(o.defaultValue, e, t, r, n);
			s !== Ca && (r._prefault = s);
		},
		s_ = (e, t, r, n) => {
			const o = e._zod.def;
			xe(o.innerType, t, n);
			const i = t.seen.get(e);
			i.ref = o.innerType;
			let s;
			try {
				s = o.catchValue(void 0);
			} catch {
				Lt(e, t, r, n, "Dynamic catch values are not supported in JSON Schema");
				return;
			}
			r.default = s;
		},
		a_ = (e, t, r, n) => {
			const o = e._zod.def,
				i = o.in._zod.traits.has("$ZodTransform"),
				s = t.io === "input" ? (i ? o.out : o.in) : o.out;
			xe(s, t, n);
			const a = t.seen.get(e);
			a.ref = s;
		},
		l_ = (e, t, r, n) => {
			const o = e._zod.def;
			xe(o.innerType, t, n);
			const i = t.seen.get(e);
			(i.ref = o.innerType), (r.readOnly = !0);
		},
		Md = (e, t, r, n) => {
			const o = e._zod.def;
			xe(o.innerType, t, n);
			const i = t.seen.get(e);
			i.ref = o.innerType;
		},
		u_ = (e, t, r, n) => {
			const o = e._zod.innerType;
			xe(o, t, n);
			const i = t.seen.get(e);
			i.ref = o;
		},
		Ld = new WeakSet([Object.prototype, Error.prototype]);
	function Ai(e, t, r) {
		Object.defineProperty(e, t, {
			configurable: !0,
			enumerable: !1,
			get() {
				const n = r(this);
				return (
					Object.defineProperty(this, t, {
						value: n,
						configurable: !0,
						writable: !0,
					}),
					n
				);
			},
			set(n) {
				Object.defineProperty(this, t, {
					value: n,
					configurable: !0,
					writable: !0,
				});
			},
		});
	}
	const Nd = (e, t) => {
			pb.init(e, t), (e.name = "ZodError");
			const r = Object.getPrototypeOf(e);
			Ld.has(r) ||
				(Ld.add(r),
				Ai(r, "format", (n) => (o) => gb(n, o)),
				Ai(r, "flatten", (n) => (o) => hb(n, o)),
				Ai(r, "addIssue", (n) => (o) => {
					n.issues.push(o), (n.message = JSON.stringify(n.issues, ta, 2));
				}),
				Ai(r, "addIssues", (n) => (o) => {
					n.issues.push(...o), (n.message = JSON.stringify(n.issues, ta, 2));
				}),
				Object.defineProperty(r, "isEmpty", {
					configurable: !0,
					enumerable: !1,
					get() {
						return this.issues.length === 0;
					},
				}));
		},
		c_ = x("ZodError", Nd),
		at = x("ZodError", Nd, void 0, { Parent: Error }),
		d_ = da(at),
		p_ = pa(at),
		f_ = fa(at),
		h_ = ha(at),
		g_ = kb(at),
		m_ = _b(at),
		y_ = Sb(at),
		v_ = xb(at),
		b_ = $b(at),
		w_ = Cb(at),
		k_ = zb(at),
		__ = Ib(at);
	function S_() {
		st.localeError || wt(O0());
	}
	function oo() {
		st.memoizer || wt({ memoizer: E0() });
	}
	const ye = x(
			"ZodType",
			(e, t) => (S_(), he.init(e, t), (e.def = t), (e.type = t.type), e),
			{
				check(...e) {
					const t = this.def;
					return this.clone(
						tt(t, {
							checks: [
								...(t.checks ?? []),
								...e.map((r) =>
									typeof r == "function"
										? {
												_zod: {
													check: r,
													def: { check: "custom" },
													onattach: [],
												},
											}
										: r,
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
					return Wt(this, e, t);
				},
				brand() {
					return this;
				},
				register(e, t) {
					return e.add(this, t), this;
				},
				refine(e, t) {
					return this.check(xS(e, t));
				},
				superRefine(e, t) {
					return this.check($S(e, t));
				},
				overwrite(e) {
					return this.check(tn(e));
				},
				optional() {
					return Wd(this);
				},
				exactOptional() {
					return lS(this);
				},
				nullable() {
					return Jd(this);
				},
				nullish() {
					return Wd(Jd(this));
				},
				nonoptional(e) {
					return hS(this, e);
				},
				array() {
					return Z(this);
				},
				or(e) {
					return ke([this, e]);
				},
				and(e) {
					return nS(this, e);
				},
				transform(e) {
					return Yd(this, qd(e));
				},
				default(e) {
					return dS(this, e);
				},
				prefault(e) {
					return fS(this, e);
				},
				catch(e) {
					return mS(this, e);
				},
				pipe(e) {
					return Yd(this, e);
				},
				readonly() {
					return wS(this);
				},
				describe(e) {
					const t = this.clone();
					return to.add(t, { description: e }), t;
				},
				meta(...e) {
					if (e.length === 0) return to.get(this);
					const t = this.clone();
					return to.add(t, e[0]), t;
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
					return kc(this, "~standard", {
						...Oc(this),
						jsonSchema: {
							input: Ei(this, "input"),
							output: Ei(this, "output"),
						},
					});
				},
				set "~standard"(e) {
					Gt(this, "~standard", e);
				},
				parse: function e(t, r) {
					return d_(this, t, r, { callee: e });
				},
				parseAsync: async function e(t, r) {
					return await p_(this, t, r, { callee: e });
				},
				safeParse(e, t) {
					return f_(this, e, t);
				},
				async safeParseAsync(e, t) {
					return h_(this, e, t);
				},
				get spa() {
					return this == null ? void 0 : this.safeParseAsync;
				},
				set spa(e) {
					Gt(this, "spa", e);
				},
				validate(e, t) {
					return vb(this, e, t);
				},
				validateAsync(e, t) {
					return wb(this, e, t);
				},
				encode: function e(t, r) {
					return g_(this, t, r, { callee: e });
				},
				decode: function e(t, r) {
					return m_(this, t, r, { callee: e });
				},
				encodeAsync: async function e(t, r) {
					return await y_(this, t, r, { callee: e });
				},
				decodeAsync: async function e(t, r) {
					return await v_(this, t, r, { callee: e });
				},
				safeEncode(e, t) {
					return b_(this, e, t);
				},
				safeDecode(e, t) {
					return w_(this, e, t);
				},
				async safeEncodeAsync(e, t) {
					return k_(this, e, t);
				},
				async safeDecodeAsync(e, t) {
					return __(this, e, t);
				},
				toJSONSchema(e) {
					return Pk(this, {})(e);
				},
				get description() {
					var e;
					return (e = to.get(this)) == null ? void 0 : e.description;
				},
				get _def() {
					return this._zod.def;
				},
			},
		),
		Dd = x(
			"_ZodString",
			(e, t) => {
				vi.init(e, t),
					ye.init(e, t),
					(e._zod.processJSONSchema = (r, n, o) => Nk(e, r, n));
			},
			sa(
				{
					format: (e) => Je(e).format ?? null,
					minLength: (e) => Je(e).minimum ?? null,
					maxLength: (e) => Je(e).maximum ?? null,
				},
				{
					regex(...e) {
						return this.check(yk(...e));
					},
					includes(...e) {
						return this.check(wk(...e));
					},
					startsWith(...e) {
						return this.check(kk(...e));
					},
					endsWith(...e) {
						return this.check(_k(...e));
					},
					min(...e) {
						return this.check(Ti(...e));
					},
					max(...e) {
						return this.check(gd(...e));
					},
					length(...e) {
						return this.check(md(...e));
					},
					nonempty(...e) {
						return this.check(Ti(1, ...e));
					},
					lowercase(e) {
						return this.check(vk(e));
					},
					uppercase(e) {
						return this.check(bk(e));
					},
					trim() {
						return this.check(xk());
					},
					normalize(...e) {
						return this.check(Sk(...e));
					},
					toLowerCase() {
						return this.check($k());
					},
					toUpperCase() {
						return this.check(Ck());
					},
					slugify() {
						return this.check(zk());
					},
				},
			),
		),
		jd = x(
			"ZodString",
			(e, t) => {
				vi.init(e, t), Dd.init(e, t);
			},
			{
				email(e) {
					return this.check(cd(Bd, e));
				},
				url(e) {
					return this.check(B0(T_, e));
				},
				jwt(e) {
					return this.check(tk(V_, e));
				},
				emoji(e) {
					return this.check(U0(E_, e));
				},
				guid(e) {
					return this.check(L0(I_, e));
				},
				uuid(e) {
					return this.check(dd(io, e));
				},
				uuidv4(e) {
					return this.check(N0(io, e));
				},
				uuidv6(e) {
					return this.check(D0(io, e));
				},
				uuidv7(e) {
					return this.check(j0(io, e));
				},
				nanoid(e) {
					return this.check(F0(A_, e));
				},
				cuid(e) {
					return this.check(H0(R_, e));
				},
				cuid2(e) {
					return this.check(V0(O_, e));
				},
				ulid(e) {
					return this.check(Z0(P_, e));
				},
				base64(e) {
					return this.check(X0(U_, e));
				},
				base64url(e) {
					return this.check(Q0(F_, e));
				},
				xid(e) {
					return this.check(q0(M_, e));
				},
				ksuid(e) {
					return this.check(W0(L_, e));
				},
				ipv4(e) {
					return this.check(K0(N_, e));
				},
				ipv6(e) {
					return this.check(J0(D_, e));
				},
				cidrv4(e) {
					return this.check(G0(j_, e));
				},
				cidrv6(e) {
					return this.check(Y0(B_, e));
				},
				e164(e) {
					return this.check(ek(H_, e));
				},
				datetime(e) {
					return this.check(rk(x_, e));
				},
				date(e) {
					return this.check(nk($_, e));
				},
				time(e) {
					return this.check(ok(C_, e));
				},
				duration(e) {
					return this.check(ik(z_, e));
				},
			},
		);
	function m(e) {
		return M0(jd, e);
	}
	const $e = x("ZodStringFormat", (e, t) => {
			we.init(e, t), Dd.init(e, t);
		}),
		x_ = x("ZodISODateTime", (e, t) => {
			Lw.init(e, t), $e.init(e, t);
		}),
		$_ = x("ZodISODate", (e, t) => {
			Nw.init(e, t), $e.init(e, t);
		}),
		C_ = x("ZodISOTime", (e, t) => {
			Dw.init(e, t), $e.init(e, t);
		}),
		z_ = x("ZodISODuration", (e, t) => {
			jw.init(e, t), $e.init(e, t);
		}),
		Bd = x("ZodEmail", (e, t) => {
			_w.init(e, t), $e.init(e, t);
		});
	function Ud(e) {
		return cd(Bd, e);
	}
	const I_ = x("ZodGUID", (e, t) => {
			ww.init(e, t), $e.init(e, t);
		}),
		io = x("ZodUUID", (e, t) => {
			kw.init(e, t), $e.init(e, t);
		});
	function M(e) {
		return dd(io, e);
	}
	const T_ = x("ZodURL", (e, t) => {
			Iw.init(e, t), $e.init(e, t);
		}),
		E_ = x("ZodEmoji", (e, t) => {
			Tw.init(e, t), $e.init(e, t);
		}),
		A_ = x("ZodNanoID", (e, t) => {
			Ew.init(e, t), $e.init(e, t);
		}),
		R_ = x("ZodCUID", (e, t) => {
			Aw.init(e, t), $e.init(e, t);
		}),
		O_ = x("ZodCUID2", (e, t) => {
			Rw.init(e, t), $e.init(e, t);
		}),
		P_ = x("ZodULID", (e, t) => {
			Ow.init(e, t), $e.init(e, t);
		}),
		M_ = x("ZodXID", (e, t) => {
			Pw.init(e, t), $e.init(e, t);
		}),
		L_ = x("ZodKSUID", (e, t) => {
			Mw.init(e, t), $e.init(e, t);
		}),
		N_ = x("ZodIPv4", (e, t) => {
			Bw.init(e, t), $e.init(e, t);
		}),
		D_ = x("ZodIPv6", (e, t) => {
			Fw.init(e, t), $e.init(e, t);
		}),
		j_ = x("ZodCIDRv4", (e, t) => {
			Hw.init(e, t), $e.init(e, t);
		}),
		B_ = x("ZodCIDRv6", (e, t) => {
			Zw.init(e, t), $e.init(e, t);
		}),
		U_ = x("ZodBase64", (e, t) => {
			qw.init(e, t), $e.init(e, t);
		}),
		F_ = x("ZodBase64URL", (e, t) => {
			Kw.init(e, t), $e.init(e, t);
		}),
		H_ = x("ZodE164", (e, t) => {
			Jw.init(e, t), $e.init(e, t);
		}),
		V_ = x("ZodJWT", (e, t) => {
			Yw.init(e, t), $e.init(e, t);
		}),
		za = x(
			"ZodNumber",
			(e, t) => {
				jc.init(e, t),
					ye.init(e, t),
					(e._zod.processJSONSchema = (r, n, o) => Dk(e, r, n, o)),
					(e.isFinite = !0);
			},
			sa(
				{
					minValue: (e) => {
						const { minimum: t, exclusiveMinimum: r } = Je(e);
						return Math.max(
							t ?? Number.NEGATIVE_INFINITY,
							r ?? Number.NEGATIVE_INFINITY,
						);
					},
					maxValue: (e) => {
						const { maximum: t, exclusiveMaximum: r } = Je(e);
						return Math.min(
							t ?? Number.POSITIVE_INFINITY,
							r ?? Number.POSITIVE_INFINITY,
						);
					},
					isInt: (e) => {
						const { isInt: t, multipleOf: r } = Je(e);
						return !!t || !!(r != null && r.some(Number.isSafeInteger));
					},
					format: (e) => Je(e).format ?? null,
				},
				{
					gt(e, t) {
						return this.check(fd(e, t));
					},
					gte(e, t) {
						return this.check(Ii(e, t));
					},
					min(e, t) {
						return this.check(Ii(e, t));
					},
					lt(e, t) {
						return this.check(pd(e, t));
					},
					lte(e, t) {
						return this.check(zi(e, t));
					},
					max(e, t) {
						return this.check(zi(e, t));
					},
					int(e) {
						return this.check(Fd(e));
					},
					safe(e) {
						return this.check(Fd(e));
					},
					positive(e) {
						return this.check(fd(0, e));
					},
					nonnegative(e) {
						return this.check(Ii(0, e));
					},
					negative(e) {
						return this.check(pd(0, e));
					},
					nonpositive(e) {
						return this.check(zi(0, e));
					},
					multipleOf(e, t) {
						return this.check(hd(e, t));
					},
					step(e, t) {
						return this.check(hd(e, t));
					},
					finite() {
						return this;
					},
				},
			),
		);
	function te(e) {
		return sk(za, e);
	}
	const Z_ = x("ZodNumberFormat", (e, t) => {
		Xw.init(e, t), za.init(e, t);
	});
	function Fd(e) {
		return lk(Z_, e);
	}
	const Ia = x("ZodBoolean", (e, t) => {
		Bc.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => jk(e, r, n));
	});
	function B(e) {
		return uk(Ia, e);
	}
	const q_ = x("ZodNull", (e, t) => {
		Qw.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => Bk(e, r, n));
	});
	function W_(e) {
		return dk(q_, e);
	}
	const K_ = x("ZodAny", (e, t) => {
		e0.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => Fk());
	});
	function so() {
		return pk(K_);
	}
	const J_ = x("ZodUnknown", (e, t) => {
		t0.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => Hk());
	});
	function Ta() {
		return fk(J_);
	}
	const G_ = x("ZodNever", (e, t) => {
		r0.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => Uk(e, r, n));
	});
	function Y_(e) {
		return hk(G_, e);
	}
	const Hd = x(
		"ZodDate",
		(e, t) => {
			n0.init(e, t),
				ye.init(e, t),
				(e._zod.processJSONSchema = (r, n, o) => Vk(e, r, n, o)),
				(e.min = (r, n) => e.check(Ii(r, n))),
				(e.max = (r, n) => e.check(zi(r, n)));
		},
		sa(
			{
				minDate: (e) => {
					const { minimum: t } = Je(e);
					return t ? new Date(t) : null;
				},
				maxDate: (e) => {
					const { maximum: t } = Je(e);
					return t ? new Date(t) : null;
				},
			},
			{},
		),
	);
	function X_(e) {
		return gk(Hd, e);
	}
	const Q_ = x(
		"ZodArray",
		(e, t) => {
			oo(),
				o0.init(e, t),
				ye.init(e, t),
				(e._zod.processJSONSchema = (r, n, o) => Jk(e, r, n, o)),
				(e.element = t.element);
		},
		{
			min(e, t) {
				return this.check(Ti(e, t));
			},
			nonempty(e) {
				return this.check(Ti(1, e));
			},
			max(e, t) {
				return this.check(gd(e, t));
			},
			length(e, t) {
				return this.check(md(e, t));
			},
			unwrap() {
				return this.element;
			},
		},
	);
	function Z(e, t) {
		return Ik(Q_, e, t);
	}
	const eS = x(
		"ZodObject",
		(e, t) => {
			oo(),
				a0.init(e, t),
				ye.init(e, t),
				(e._zod.processJSONSchema = (r, n, o) => Gk(e, r, n, o)),
				ib(e, "shape", (r) => r._zod.def.shape, !1);
		},
		{
			keyof() {
				return X(Object.keys(this._zod.def.shape));
			},
			catchall(e) {
				return this.clone(tt(this._zod.def, { catchall: e }));
			},
			passthrough() {
				return this.clone(tt(this._zod.def, { catchall: Ta() }));
			},
			loose() {
				return this.clone(tt(this._zod.def, { catchall: Ta() }));
			},
			strict() {
				return this.clone(tt(this._zod.def, { catchall: Y_() }));
			},
			strip() {
				return this.clone(tt(this._zod.def, { catchall: void 0 }));
			},
			extend(e) {
				return Jv(this, e);
			},
			safeExtend(e) {
				return Gv(this, e);
			},
			merge(e) {
				return Yv(this, e);
			},
			pick(e) {
				return Wv(this, e);
			},
			omit(e) {
				return Kv(this, e);
			},
			partial(...e) {
				return bc(Aa, this, e[0]);
			},
			exactPartial(...e) {
				return bc(Kd, this, e[0], "exactPartial");
			},
			required(...e) {
				return Xv(Gd, this, e[0]);
			},
		},
	);
	function $(e, t) {
		const r = { type: "object", shape: e ?? {}, ...V(t) };
		return new eS(r);
	}
	const Vd = x("ZodUnion", (e, t) => {
		Zc.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => Yk(e, r, n, o)),
			(e.options = t.options);
	});
	function ke(e, t) {
		return new Vd({ type: "union", options: e, ...V(t) });
	}
	const tS = x("ZodDiscriminatedUnion", (e, t) => {
		Vd.init(e, t), u0.init(e, t);
	});
	function Nt(e, t, r) {
		return new tS({ type: "union", options: t, discriminator: e, ...V(r) });
	}
	const rS = x("ZodIntersection", (e, t) => {
		c0.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => Xk(e, r, n, o));
	});
	function nS(e, t) {
		return new rS({ type: "intersection", left: e, right: t });
	}
	const oS = x(
		"ZodTuple",
		(e, t) => {
			oo(),
				d0.init(e, t),
				ye.init(e, t),
				(e._zod.processJSONSchema = (r, n, o) => Qk(e, r, n, o));
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
					items: e.items.map((r) => new Aa({ type: "optional", innerType: r })),
				});
			},
		},
	);
	function iS(e, t, r) {
		const n = t instanceof he,
			o = n ? r : t,
			i = n ? t : null;
		return new oS({ type: "tuple", items: e, rest: i, ...V(o) });
	}
	const Zd = x("ZodRecord", (e, t) => {
		oo(),
			p0.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => t_(e, r, n, o)),
			(e.keyType = t.keyType),
			(e.valueType = t.valueType);
	});
	function Pe(e, t, r) {
		return !t || !t._zod
			? new Zd({ type: "record", keyType: m(), valueType: e, ...V(t) })
			: new Zd({ type: "record", keyType: e, valueType: t, ...V(r) });
	}
	const Ea = x("ZodEnum", (e, t) => {
		f0.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (n, o, i) => Zk(e, n, o)),
			(e.enum = t.entries),
			(e.options = [...e._zod.values]);
		const r = new Set(Object.keys(t.entries));
		(e.extract = (n, o) => {
			const i = {};
			for (const s of n)
				if (r.has(s)) i[s] = t.entries[s];
				else throw new Error(`Key ${s} not found in enum`);
			return new Ea({ ...t, checks: [], ...V(o), entries: i });
		}),
			(e.exclude = (n, o) => {
				const i = { ...t.entries };
				for (const s of n)
					if (r.has(s)) delete i[s];
					else throw new Error(`Key ${s} not found in enum`);
				return new Ea({ ...t, checks: [], ...V(o), entries: i });
			});
	});
	function X(e, t) {
		const r = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
		return new Ea({ type: "enum", entries: r, ...V(t) });
	}
	const sS = x("ZodLiteral", (e, t) => {
		h0.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => qk(e, r, n, o)),
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
	function j(e, t) {
		return new sS({
			type: "literal",
			values: Array.isArray(e) ? e : [e],
			...V(t),
		});
	}
	const aS = x("ZodTransform", (e, t) => {
		oo(),
			g0.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => Kk(e, r, n, o)),
			(e._zod.parse = (r, n) => {
				if (n.direction === "backward") throw new $c(e.constructor.name);
				r.addIssue = (i) => {
					if (typeof i == "string") r.issues.push(Xn(i, r.value, t));
					else {
						const s = i;
						s.fatal && (s.continue = !1),
							s.code ?? (s.code = "custom"),
							"input" in s || (s.input = r.value),
							s.inst ?? (s.inst = e),
							r.issues.push(Xn(s));
					}
				};
				const o = t.transform(r.value, r);
				return o instanceof Promise
					? o.then((i) => ((r.value = i), r))
					: ((r.value = o), r);
			});
	});
	function qd(e) {
		return new aS({ type: "transform", transform: e });
	}
	const Aa = x("ZodOptional", (e, t) => {
		Yc.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => Md(e, r, n, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function Wd(e) {
		return new Aa({ type: "optional", innerType: e });
	}
	const Kd = x("ZodExactOptional", (e, t) => {
		m0.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => Md(e, r, n, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function lS(e) {
		return new Kd({ type: "optional", innerType: e });
	}
	const uS = x("ZodNullable", (e, t) => {
		y0.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => r_(e, r, n, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function Jd(e) {
		return new uS({ type: "nullable", innerType: e });
	}
	const cS = x("ZodDefault", (e, t) => {
		v0.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => o_(e, r, n, o)),
			(e.unwrap = () => e._zod.def.innerType),
			(e.removeDefault = e.unwrap);
	});
	function dS(e, t) {
		return new cS({
			type: "default",
			innerType: e,
			get defaultValue() {
				return typeof t == "function" ? t() : gc(t);
			},
		});
	}
	const pS = x("ZodPrefault", (e, t) => {
		b0.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => i_(e, r, n, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function fS(e, t) {
		return new pS({
			type: "prefault",
			innerType: e,
			get defaultValue() {
				return typeof t == "function" ? t() : gc(t);
			},
		});
	}
	const Gd = x("ZodNonOptional", (e, t) => {
		w0.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => n_(e, r, n, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function hS(e, t) {
		return new Gd({ type: "nonoptional", innerType: e, ...V(t) });
	}
	const gS = x("ZodCatch", (e, t) => {
		k0.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => s_(e, r, n, o)),
			(e.unwrap = () => e._zod.def.innerType),
			(e.removeCatch = e.unwrap);
	});
	function mS(e, t) {
		return new gS({
			type: "catch",
			innerType: e,
			catchValue: typeof t == "function" ? t : ab(t),
		});
	}
	const Ra = x("ZodPipe", (e, t) => {
		td.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => a_(e, r, n, o)),
			(e.in = t.in),
			(e.out = t.out);
	});
	function Yd(e, t) {
		return new Ra({ type: "pipe", in: e, out: t });
	}
	const Xd = x("ZodCodec", (e, t) => {
		Ra.init(e, t), rd.init(e, t);
	});
	function yS(e, t, r) {
		return new Xd({
			type: "pipe",
			in: e,
			out: t,
			transform: r.decode,
			reverseTransform: r.encode,
		});
	}
	const vS = x("ZodPreprocess", (e, t) => {
			Ra.init(e, t), _0.init(e, t);
		}),
		bS = x("ZodReadonly", (e, t) => {
			S0.init(e, t),
				ye.init(e, t),
				(e._zod.processJSONSchema = (r, n, o) => l_(e, r, n, o)),
				(e.unwrap = () => e._zod.def.innerType);
		});
	function wS(e) {
		return new bS({ type: "readonly", innerType: e });
	}
	const kS = x("ZodLazy", (e, t) => {
		x0.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => u_(e, r, n, o)),
			(e.unwrap = () => e._zod.def.getter());
	});
	function _S(e) {
		return new kS({ type: "lazy", getter: e });
	}
	const SS = x("ZodCustom", (e, t) => {
		$0.init(e, t),
			ye.init(e, t),
			(e._zod.processJSONSchema = (r, n, o) => Wk(e, r, n, o));
	});
	function xS(e, t = {}) {
		return Tk(SS, e, t);
	}
	function $S(e, t) {
		return Ek(e, t);
	}
	const Xt = (...e) => Rk({ Codec: Xd, Boolean: Ia, String: jd }, ...e);
	function Qd(e, t) {
		return new vS({ type: "pipe", in: qd(e), out: t });
	}
	function Ie(e) {
		return ak(za, e);
	}
	function Me(e) {
		return ck(Ia, e);
	}
	function Te(e) {
		return mk(Hd, e);
	}
	function Oa(e) {
		return typeof e == "boolean"
			? e
			: e === "false" || e === "0" || e === "" || e === null
				? !1
				: !!e;
	}
	const $r = X(["Draft", "Published", "Paused", "Archived", "Deleted"]);
	X(["Published", "Archived"]);
	const ep = X(["Draft", "Published", "Paused", "Archived"]);
	$({ id: M(), status: $r });
	const lt = $({ id: M() }),
		Ri = $({ id: M(), name: m().optional() }),
		on = $({ id: m(), name: m(), native: m() }),
		CS = $({ id: M(), code: m().optional(), name: m().optional() });
	function Be(e, t) {
		const n = Object.fromEntries((t ?? []).map((i) => [i, m().nullish()])),
			o = CS.extend({ ...e, ...n });
		return Z(o).optional().nullable().default([]);
	}
	const zS = m().meta({ title: "Email label" }),
		IS = m().meta({
			title: "Email placeholder",
			description:
				"The placeholder to show in the input field before user writes anything",
		}),
		_e = ke([B(), m()]).optional().transform(Oa),
		tp = X([
			"LikertScaleThree",
			"LikertScaleFive",
			"LikertScaleSix",
			"LikertScaleSeven",
		]),
		rp = X([
			"Average",
			"Median",
			"Mode",
			"PositivePercentage",
			"NegativePercentage",
		]),
		np = $({
			id: M(),
			label: m(),
			value: Ie(),
			emoji: on.optional().nullable().default(null),
			tr: Be({}, ["@label"]),
		}),
		op = $({
			id: M(),
			name: m(),
			type: tp,
			aggregationMethod: rp,
			status: $r.optional(),
			description: m().optional().nullable(),
			likertItems: Z(np),
			defaultCardTitle: m().optional().nullable(),
			defaultLanguage: $({ id: M(), code: m(), name: m() })
				.optional()
				.nullable(),
			showInDashboard: B().or(m()).optional().transform(Oa),
		}),
		TS = op.omit({
			name: !0,
			status: !0,
			description: !0,
			defaultCardTitle: !0,
		});
	$({
		name: m(),
		type: tp,
		status: $r.optional(),
		description: m().optional().nullable(),
		aggregationMethod: rp.optional().nullable().default("Average"),
		likertItems: Z(np.omit({ id: !0, tr: !0 })),
		defaultCardTitle: m().optional().nullable(),
		showInDashboard: B().or(m()).optional().transform(Oa),
	});
	const ES = Be({ "@errMessage": m().nullish() }, []),
		ip = Pe(m(), m()).optional(),
		sp = ke([B(), m()]).transform((e) =>
			typeof e == "boolean" ? e : e === "true" || e === "1",
		),
		Pa = $({
			id: M(),
			type: m(),
			name: m(),
			errMessage: m(),
			negate: B(),
			enabled: B().nullish(),
			tr: ES,
		}),
		ap = Pa.extend({
			name: m(),
			description: m(),
			applyToAllInputCards: B(),
			enabled: B(),
			isOrgSpecific: B(),
			createdAt: Te(),
			updatedAt: Te().nullable(),
			cardCount: te(),
			cards: Z(
				$({
					id: M(),
					name: m(),
					survey: $({ id: M(), name: m(), slug: m() }).nullable(),
				}),
			),
		}),
		AS = $({
			id: M(),
			name: m(),
			description: m().optional(),
			errMessage: m(),
			negate: Me(),
			applyToAllInputCards: sp.optional().default(!1),
			translations: ip,
		});
	$({
		type: j("OrgValidationRegex"),
		name: m(),
		description: m().optional(),
		errMessage: m(),
		negate: Me(),
		applyToAllInputCards: sp.optional().default(!1),
		regex: m(),
		translations: ip,
	});
	const RS = Pa.extend({ regex: m().nullable(), type: j("ValidationRegex") }),
		OS = Pa.extend({ regex: m().nullable(), type: j("OrgValidationRegex") }),
		PS = Nt("type", [RS, OS]),
		MS = ap.extend({ regex: m().nullable(), type: j("ValidationRegex") }),
		LS = ap.extend({ regex: m().nullable(), type: j("OrgValidationRegex") }),
		NS = Nt("type", [MS, LS]);
	AS.extend({
		regex: m(),
		type: j("OrgValidationRegex"),
		enabled: Me().optional(),
	});
	const DS = X(["Include", "Exclude"]),
		lp = X(["and", "or"]),
		jS = X(["string", "number"]),
		BS = X([
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
		US = new Set([
			"greaterThan",
			"greaterThanOrEqual",
			"lessThan",
			"lessThanOrEqual",
		]),
		FS = new Set([
			"equals",
			"notEquals",
			"contains",
			"greaterThan",
			"greaterThanOrEqual",
			"lessThan",
			"lessThanOrEqual",
		]),
		HS = $({
			traitId: M(),
			traitSlug: m().min(1),
			valueType: jS,
			operator: BS,
			values: Z(m()),
		}).superRefine((e, t) => {
			if (
				(e.valueType === "string" &&
					US.has(e.operator) &&
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
					: FS.has(e.operator) &&
						e.values.length !== 1 &&
						t.addIssue({
							code: "custom",
							path: ["values"],
							message: "Scalar operators must include exactly one value",
						}),
				e.valueType === "number")
			) {
				for (const r of e.values)
					if (!Number.isFinite(Number(r))) {
						t.addIssue({
							code: "custom",
							path: ["values"],
							message: "Numeric trait values must be finite numbers",
						});
						return;
					}
			}
		}),
		VS = Qd((e) => {
			if (typeof e != "string") return e;
			try {
				return JSON.parse(e);
			} catch {
				return e;
			}
		}, Z(HS)),
		up = $({
			desktop: B()
				.nullish()
				.transform((e) => e ?? !0),
			mobile: B()
				.nullish()
				.transform((e) => e ?? !0),
			tablet: B()
				.nullish()
				.transform((e) => e ?? !0),
			languages: Z(m())
				.nullish()
				.transform((e) => e ?? []),
			locales: Z(m())
				.nullish()
				.transform((e) => e ?? []),
			traitConditions: VS.optional().default([]),
		}),
		cp = up.extend({ id: M(), type: DS }),
		Ma = X([
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
		ZS =
			/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
	function qS(e) {
		return typeof e == "string" && ZS.test(e);
	}
	const dp = X(["Viewer", "Curator", "Editor", "Admin"]);
	X(["Viewer", "Admin"]),
		$({
			id: M(),
			name: m().optional().nullable(),
			image: m().optional().nullable(),
		});
	const La = $({
			id: M(),
			name: m().optional().nullable(),
			email: Ud(),
			image: m().optional().nullable(),
			superAdmin: B().optional().nullable(),
		}),
		WS = X(["Minimal", "Regular", "Large"]),
		KS = $r.or(j("Paused")),
		pp = Date.parse("2026-01-27T14:29:10Z");
	function JS({ optionsLayout: e, createdAt: t, updatedAt: r }) {
		if (e !== "vertical" || !t) return e;
		const n = r ?? t;
		return t.getTime() < pp && n.getTime() < pp ? "horizontal" : e;
	}
	const fp = $({
		id: M(),
		errMessage: m().optional().nullable(),
		validation: PS,
		tr: Be({ "@errMessage": m().nullish() }, []).optional().nullable(),
	});
	$({
		id: M(),
		errMessage: m().optional().nullable(),
		validation: NS,
		tr: Be({ "@errMessage": m().nullish() }, []).optional().nullable(),
	});
	const GS = ke([m(), te(), B(), W_()]),
		Na = _S(() => ke([GS, Z(Na), Pe(m(), Na)])),
		hp = Na.optional()
			.nullable()
			.transform((e) => (typeof e == "string" ? JSON.parse(e) : e));
	$({ id: M(), errMessage: m().optional().nullable(), cardId: M() }),
		fp.extend({ card: lt, validation: lt }).omit({ id: !0 });
	function Dt(e) {
		return typeof e == "string" && e.length === 0 ? null : e;
	}
	const YS = up.extend({
			id: M().optional(),
			card: lt,
			type: X(["Include", "Exclude"]),
			segmentValues: Z(Ri),
			tasks: Z(Ri),
			multiSelectItems: Z(Ri).optional().default([]),
			singleSelectItems: Z(Ri).optional().default([]),
			likertSourceCards: Z(
				$({ id: M(), name: m().optional(), selectedItemIds: Z(M()) }),
			)
				.optional()
				.default([]),
			completion: B().optional().nullable(),
			recruited: B().optional().nullable(),
		}),
		XS = X(["and", "or"]),
		ao = {
			"@name": m().nullish(),
			"@body": m().nullish(),
			"@bodyHtml": m().nullish(),
			"@bodyJson": hp,
			"@textNext": m().nullish(),
			"@textPrev": m().nullish(),
			"@textClose": m().nullish(),
			"@textHide": m().nullish(),
			"@textMinimized": m().nullish(),
			"@textReplyLater": m().nullish(),
		},
		Da = Be(ao, []),
		ft = $({
			id: M(),
			revision: Ie().default(0),
			name: m().min(3, "Heading must be at least 3 characters"),
			icon: m().optional().nullable(),
			order: Ie(),
			textNext: m().optional().nullable().transform(Dt),
			textPrev: m().optional().nullable().transform(Dt),
			textHide: m().optional().nullable().transform(Dt),
			textMinimized: m().optional().nullable().transform(Dt),
			textReplyLater: m().optional().nullable().transform(Dt),
			textClose: m().optional().nullable().transform(Dt),
			tr: Da.optional().nullable(),
			field: ke([m(), $({ id: M() })])
				.optional()
				.nullable()
				.transform((e) =>
					typeof e == "string" ? (qS(e) ? e : null) : e == null ? void 0 : e.id,
				),
			page: lt.optional().nullable(),
			createdAt: Te().optional(),
			createdBy: La.optional().nullable(),
			updatedAt: Te().optional().nullable(),
			updatedBy: La.optional().nullable(),
			firstResponse: Te().optional().nullish(),
			lastResponse: Te().optional().nullish(),
			status: KS,
			statusSetAt: Te().optional().nullable(),
			statusSetBy: La.optional().nullable(),
			body: m().optional().nullable(),
			bodyHtml: m().optional().nullable(),
			bodyJson: hp,
			type: m(),
			size: WS.optional(),
			description: m().optional().nullable(),
			optionsLayout: X(["vertical", "horizontal"])
				.optional()
				.nullable()
				.transform((e) => e ?? "vertical"),
			ruleMode: XS.optional().default("and"),
			rules: Z(YS).optional().default([]),
			validations: Z(fp).optional().default([]),
			isRequired: Me()
				.optional()
				.nullable()
				.transform((e) => e ?? void 0),
		});
	ft.omit({
		id: !0,
		revision: !0,
		tr: !0,
		createdAt: !0,
		createdBy: !0,
		updatedAt: !0,
		updatedBy: !0,
		statusSetAt: !0,
		statusSetBy: !0,
	}).extend({ status: $r.optional().nullable() });
	const QS = $({
			id: M(),
			name: m(),
			tr: Be({ "@name": m().nullish(), "@description": m().nullish() }, [])
				.optional()
				.nullable(),
		}),
		ex = Be({ "@label": m().nullish() }, []),
		gp = $({
			id: M().optional(),
			label: m().optional().nullable().transform(Dt),
			order: Ie(),
			orderLocked: _e.default(!1),
			task: ke([QS, lt]),
			tr: ex.optional().nullable(),
		}),
		tx = ft.extend({
			type: j("TopTaskCard"),
			TopTaskCard: $({
				tr: Da,
				randomize: Me().optional().default(!1),
				taskItems: ke([
					Z(gp),
					Pe(m(), gp).transform((e) => Object.values(e)),
				]).nullable(),
			}),
		}),
		rx = ft.extend({
			type: j("LikertCard"),
			LikertCard: $({
				tr: Da,
				likertScale: ke([op, TS]),
				showEmoji: _e.default(!1),
			}),
		}),
		nx = ft.extend({ type: j("MessageCard") }),
		ox = ft.extend({
			type: j("CompletionCard"),
			CompletionCard: $({
				tr: Be(ao, ["@positive", "@negative"]),
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
		ix = ft.extend({
			type: j("FindabilityCard"),
			FindabilityCard: $({
				tr: Be(ao, ["@positive", "@negative"]),
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
		sx = ft.extend({
			type: j("InputCard"),
			InputCard: $({
				label: m().nullable().optional(),
				placeholder: m()
					.optional()
					.meta({
						description: "Dimmed text in the input field before user writes",
					}),
				maxLength: Ie()
					.optional()
					.nullable()
					.overwrite((e) => (!e || e <= 0 ? null : e))
					.meta({ description: "Maximum number of characters allowed" }),
				minLength: Ie()
					.optional()
					.nullable()
					.default(0)
					.meta({ description: "Minimum number of characters allowed" }),
				multiline: _e.meta({ description: "Allow multiline text input" }),
				tr: Be(ao, ["@label", "@placeholder"]),
			}),
		}),
		ax = ft.extend({
			type: j("RecruitmentCard"),
			RecruitmentCard: $({
				maxLeads: Qd(
					(e) => (e === "" ? null : e),
					Ie().int().positive().optional().nullable(),
				),
				email: _e.nullable(),
				email_label: zS.optional().nullable(),
				email_placeholder: IS.optional().nullable(),
				phone: _e.nullable(),
				phone_label: m().optional().nullable(),
				phone_placeholder: m().optional().nullable(),
				nameEnable: _e.nullable(),
				nameLabel: m().optional().nullable(),
				namePlaceholder: m().optional().nullable(),
				consentEnable: _e.nullable(),
				consentTermsUrl: m().optional().nullable(),
				consentTermsTitle: m().optional().nullable(),
				consentTermsText: m().optional().nullable(),
				consentTermsLabel: m().optional().nullable(),
				autoEmail: Me().default(!0),
				relatedCards: Z($({ id: M(), name: m(), type: m() }))
					.optional()
					.default([]),
				tr: Be(ao, [
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
		lx = $({
			id: M(),
			name: m(),
			tr: Be({ name: m().nullish(), description: m().nullish() }, [])
				.optional()
				.nullable(),
		}),
		ux = $({
			id: M(),
			name: m(),
			tr: Be({ "@name": m().nullish(), "@description": m().nullish() }, [])
				.optional()
				.nullable(),
		}),
		mp = $({
			id: M().optional(),
			name: m().optional(),
			label: m().optional().nullable().transform(Dt),
			labelIsInherited: B().optional(),
			tr: Be({ "@label": m().nullish() }, []),
			order: Ie(),
			orderLocked: _e.default(!1),
			value: ke([ux, lt]),
		}),
		cx = ft.extend({
			type: j("SegmentCard"),
			SegmentCard: $({
				randomize: Me().optional().nullable().default(!1),
				segment: ke([lx, lt]),
				items: ke([Z(mp), Pe(m(), mp).transform((e) => Object.values(e))]),
			}),
		}),
		yp = $({
			id: M(),
			createdAt: Te().default(() => new Date()),
			label: m(),
			order: Ie(),
			orderLocked: _e.default(!1),
			tr: Be({ "@label": m().nullish() }, []).optional().nullable(),
		}),
		vp = ke([Z(yp), Pe(m(), yp).transform((e) => Object.values(e))]),
		dx = ft.extend({
			type: j("SingleSelectCard"),
			SingleSelectCard: $({
				randomize: Me().optional().nullable().default(!1),
				selectItems: vp,
			}),
		}),
		px = ft.extend({
			type: j("MultiSelectCard"),
			MultiSelectCard: $({
				randomize: Me().optional().nullable().default(!1),
				min: ke([te(), m()])
					.optional()
					.nullable()
					.transform((e) => {
						if (typeof e > "u" || e === null) return null;
						if (typeof e == "number") return Math.max(0, e);
						const t = Number.parseInt(e, 10);
						return isNaN(t) ? null : Math.max(0, t);
					}),
				max: ke([te(), m()])
					.optional()
					.nullable()
					.transform((e) => {
						if (typeof e > "u" || e === null) return null;
						if (typeof e == "number") return Math.max(1, e);
						const t = Number.parseInt(e, 10);
						return isNaN(t) ? null : Math.max(1, t);
					}),
				selectItems: vp,
			}),
		});
	$({
		id: M(),
		name: m(),
		label: m().optional().nullable().transform(Dt),
		orderLocked: _e.default(!1),
		card: $({ id: M() }),
		value: $({ id: M() }),
	});
	const bp = ke([
			ax.transform((e) => ({ ...e, ...e.RecruitmentCard })),
			tx.transform((e) => ({ ...e, ...e.TopTaskCard })),
			nx,
			ox.transform((e) => ({
				...e,
				...e.CompletionCard,
				optionsLayout: JS(e),
			})),
			ix.transform((e) => ({ ...e, ...e.FindabilityCard })),
			sx.transform((e) => ({ ...e, ...e.InputCard })),
			cx.transform((e) => ({ ...e, ...e.SegmentCard })),
			px.transform((e) => ({ ...e, ...e.MultiSelectCard })),
			dx.transform((e) => ({ ...e, ...e.SingleSelectCard })),
			rx.transform((e) => ({ ...e, ...e.LikertCard })),
		]),
		fx = /^[0-9a-fA-F]{3}$/,
		hx = /^[0-9a-fA-F]{6}$/,
		wp = (e, t, r) => Math.min(r, Math.max(t, e));
	function gx(e) {
		const t = e.trim();
		if (!t.startsWith("#")) return null;
		const r = t.slice(1);
		return fx.test(r)
			? `#${r
					.split("")
					.map((n) => `${n}${n}`)
					.join("")}`.toLowerCase()
			: hx.test(r)
				? `#${r.toLowerCase()}`
				: null;
	}
	function mx(e) {
		const t = e.map((r) => ({
			color: gx(r.color) ?? "#000000",
			alpha: wp(r.alpha, 0, 1),
			position: wp(r.position, 0, 100),
		}));
		return t.length < 2
			? [
					{ color: "#1d4ed8", alpha: 1, position: 0 },
					{ color: "#7c3aed", alpha: 1, position: 100 },
				]
			: t.sort((r, n) => r.position - n.position);
	}
	function yx() {
		return {
			repeating: !1,
			type: "linear",
			angle: 180,
			conicFrom: 0,
			centerX: 50,
			centerY: 50,
			radialShape: "ellipse",
			radialSize: "farthest-corner",
			stops: [
				{ color: "#f5f7fa", alpha: 1, position: 0 },
				{ color: "#dde7f7", alpha: 1, position: 100 },
			],
		};
	}
	function Qt(e, t) {
		return { ...yx(), ...e, stops: mx(t) };
	}
	Qt({ type: "linear", angle: 180 }, [
		{ color: "#f8fafc", alpha: 1, position: 0 },
		{ color: "#e2e8f0", alpha: 1, position: 100 },
	]),
		Qt({ type: "linear", angle: 125 }, [
			{ color: "#0ea5e9", alpha: 0.25, position: 0 },
			{ color: "#22c55e", alpha: 0.22, position: 45 },
			{ color: "#a855f7", alpha: 0.24, position: 100 },
		]),
		Qt(
			{
				type: "radial",
				radialShape: "circle",
				radialSize: "farthest-corner",
				centerX: 50,
				centerY: 20,
			},
			[
				{ color: "#ffffff", alpha: 0.82, position: 0 },
				{ color: "#e2e8f0", alpha: 0.34, position: 38 },
				{ color: "#0f172a", alpha: 0.08, position: 100 },
			],
		),
		Qt({ type: "conic", conicFrom: 120 }, [
			{ color: "#1d4ed8", alpha: 0.3, position: 0 },
			{ color: "#0ea5e9", alpha: 0.22, position: 40 },
			{ color: "#7c3aed", alpha: 0.28, position: 100 },
		]),
		Qt({ type: "linear", repeating: !0, angle: 135 }, [
			{ color: "#0f172a", alpha: 0.06, position: 0 },
			{ color: "#0f172a", alpha: 0.06, position: 8 },
			{ color: "#ffffff", alpha: 0, position: 8 },
			{ color: "#ffffff", alpha: 0, position: 16 },
		]),
		Qt({ type: "linear", angle: 160 }, [
			{ color: "#7c2d12", alpha: 0.32, position: 0 },
			{ color: "#ea580c", alpha: 0.28, position: 42 },
			{ color: "#fde68a", alpha: 0.22, position: 100 },
		]),
		Qt({ type: "conic", conicFrom: 210 }, [
			{ color: "#082f49", alpha: 0.34, position: 0 },
			{ color: "#155e75", alpha: 0.3, position: 34 },
			{ color: "#67e8f9", alpha: 0.18, position: 72 },
			{ color: "#0f172a", alpha: 0.3, position: 100 },
		]),
		Qt(
			{
				type: "radial",
				radialShape: "circle",
				radialSize: "farthest-corner",
				centerX: 52,
				centerY: 18,
			},
			[
				{ color: "#fff7ed", alpha: 0.88, position: 0 },
				{ color: "#fb923c", alpha: 0.3, position: 33 },
				{ color: "#020617", alpha: 0.12, position: 100 },
			],
		);
	const Cr = [
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
		zr = [
			"minimizedBgColor",
			"minimizedTextColor",
			"minimizedBorderColor",
			"minimizedShadow",
		],
		Ir = ["shadowSm", "shadowMd", "shadowLg"],
		Oi = [
			"borderStyle",
			"borderWidth",
			"radiusSm",
			"radiusMd",
			"radiusLg",
			"radiusPill",
		],
		Pi = ["focusRingStyle", "focusRingWidth", "focusRingOffset"];
	function Oe(e, t) {
		return `${e}${t[0].toUpperCase()}${t.slice(1)}`;
	}
	const vx = Cr.map((e) => Oe("light", e)),
		bx = Cr.map((e) => Oe("dark", e)),
		wx = zr.map((e) => Oe("light", e)),
		kx = zr.map((e) => Oe("dark", e)),
		_x = Ir.map((e) => Oe("light", e)),
		Sx = Ir.map((e) => Oe("dark", e)),
		xx = [...vx, ...wx, ..._x],
		$x = [...bx, ...kx, ...Sx],
		Cx = [...xx, ...$x],
		zx = [
			["palette", Cr],
			["minimized", zr],
			["shadow", Ir],
			["border", Oi],
			["focus", Pi],
		],
		Ix = {
			minimizedBgColor: ["--skyra-minimized-bg"],
			minimizedTextColor: ["--skyra-minimized-text"],
			minimizedBorderColor: ["--skyra-minimized-border"],
			shadowMd: ["--skyra-shadow-md", "--skyra-shadow"],
		};
	function pe(e, t, r, n, o, i) {
		var a;
		const s =
			((a = zx.find(([, l]) => l.includes(e))) == null ? void 0 : a[0]) ??
			"root";
		return {
			scope: ["palette", "minimized", "shadow"].includes(s)
				? "appearance"
				: "shared",
			storageGroup: s,
			cssVars: Ix[e] ?? [
				`--skyra-${e.replace(/[A-Z]/g, (l) => `-${l.toLowerCase()}`)}`,
			],
			elements: t,
			support: { fullPage: r, classicWidget: n, betaWidget: o, hostedApp: i },
		};
	}
	const er = {
		bgColor: pe("bgColor", ["surface"], "used", "used", "used", "used"),
		textColor: pe(
			"textColor",
			["heading", "body", "answer", "input"],
			"used",
			"used",
			"used",
			"used",
		),
		interfaceColor: pe(
			"interfaceColor",
			["answer", "progressTrack"],
			"partial",
			"partial",
			"partial",
			"partial",
		),
		borderColor: pe(
			"borderColor",
			["container", "answer", "input", "coverImage", "passwordGate"],
			"partial",
			"partial",
			"partial",
			"partial",
		),
		actionColor: pe(
			"actionColor",
			["primaryButton", "selectedAnswer", "progressFill", "effects"],
			"used",
			"used",
			"used",
			"used",
		),
		actionTextColor: pe(
			"actionTextColor",
			["primaryButton", "selectedAnswer"],
			"used",
			"used",
			"used",
			"used",
		),
		secondaryColor: pe(
			"secondaryColor",
			["input", "secondarySurface", "effects"],
			"used",
			"used",
			"used",
			"used",
		),
		linkColor: pe(
			"linkColor",
			["link", "effects"],
			"used",
			"used",
			"used",
			"used",
		),
		errorColor: pe(
			"errorColor",
			["error", "input"],
			"used",
			"used",
			"used",
			"used",
		),
		warningColor: pe(
			"warningColor",
			["warning"],
			"used",
			"used",
			"used",
			"used",
		),
		successColor: pe(
			"successColor",
			[],
			"unused",
			"unused",
			"unused",
			"unused",
		),
		mutedTextColor: pe(
			"mutedTextColor",
			["helperText"],
			"used",
			"used",
			"used",
			"used",
		),
		focusColor: pe("focusColor", ["focus"], "used", "used", "used", "used"),
		minimizedBgColor: pe(
			"minimizedBgColor",
			["minimized"],
			"not-applicable",
			"used",
			"used",
			"used",
		),
		minimizedTextColor: pe(
			"minimizedTextColor",
			["minimized"],
			"not-applicable",
			"used",
			"used",
			"used",
		),
		minimizedBorderColor: pe(
			"minimizedBorderColor",
			["minimized"],
			"not-applicable",
			"used",
			"used",
			"used",
		),
		minimizedShadow: pe(
			"minimizedShadow",
			["minimized"],
			"not-applicable",
			"used",
			"used",
			"used",
		),
		fontSize: pe(
			"fontSize",
			[
				"heading",
				"body",
				"helperText",
				"answer",
				"input",
				"primaryButton",
				"link",
				"minimized",
			],
			"partial",
			"used",
			"partial",
			"partial",
		),
		fontBody: pe(
			"fontBody",
			[
				"body",
				"helperText",
				"answer",
				"input",
				"primaryButton",
				"link",
				"minimized",
			],
			"used",
			"used",
			"used",
			"used",
		),
		fontHeading: pe("fontHeading", ["heading"], "used", "used", "used", "used"),
		borderStyle: pe(
			"borderStyle",
			[
				"container",
				"answer",
				"input",
				"minimized",
				"coverImage",
				"passwordGate",
			],
			"partial",
			"partial",
			"partial",
			"partial",
		),
		borderWidth: pe(
			"borderWidth",
			[
				"container",
				"answer",
				"input",
				"minimized",
				"coverImage",
				"passwordGate",
			],
			"partial",
			"partial",
			"partial",
			"partial",
		),
		radiusSm: pe(
			"radiusSm",
			["minimized", "answer"],
			"partial",
			"used",
			"partial",
			"partial",
		),
		radiusMd: pe(
			"radiusMd",
			["answer", "selectedAnswer", "primaryButton", "input"],
			"used",
			"used",
			"used",
			"used",
		),
		radiusLg: pe(
			"radiusLg",
			["container", "coverImage", "passwordGate"],
			"used",
			"used",
			"used",
			"used",
		),
		radiusPill: pe(
			"radiusPill",
			["pillControl"],
			"unused",
			"partial",
			"unused",
			"partial",
		),
		focusRingStyle: pe(
			"focusRingStyle",
			["focus"],
			"used",
			"used",
			"used",
			"used",
		),
		focusRingWidth: pe(
			"focusRingWidth",
			["focus"],
			"used",
			"used",
			"used",
			"used",
		),
		focusRingOffset: pe(
			"focusRingOffset",
			["focus"],
			"used",
			"used",
			"used",
			"used",
		),
		shadowSm: pe("shadowSm", ["primaryButton"], "used", "used", "used", "used"),
		shadowMd: pe(
			"shadowMd",
			["container", "passwordGate"],
			"used",
			"used",
			"used",
			"used",
		),
		shadowLg: pe("shadowLg", [], "unused", "unused", "unused", "unused"),
	};
	function Tx(e, t) {
		return er[e].scope === "appearance" ? Oe(t, e) : e;
	}
	function Ex(e) {
		const t = Object.values(er[e].support).filter(
			(r) => r !== "not-applicable",
		);
		return t.every((r) => r === "unused")
			? "unused"
			: t.every((r) => r === "used")
				? "used"
				: "partial";
	}
	const kp = ["fontSize", "fontBody", "fontHeading", ...Oi, ...Pi],
		Mi = [...Cr, ...zr, ...Ir, ...kp],
		Ax = {
			bgColor: {
				key: "bgColor",
				label: "Background",
				category: "surface",
				valueKind: "background",
				description: "Primary background value for rendered survey surfaces.",
				semanticUsage: {
					fullPage:
						"Page background; authored fills replace built-in decoration.",
					survey:
						"Classic and beta outer surfaces in both appearances. Inline surfaces are transparent until a background is set, with inner padding for authored fills.",
				},
				helpText:
					"The background behind your survey content. Use a solid color or gradient.",
			},
			textColor: {
				key: "textColor",
				label: "Text",
				category: "content",
				valueKind: "color",
				description: "Primary readable text color for content and labels.",
				semanticUsage: {
					fullPage: "Body copy and labels in both appearances.",
					survey: "Classic and beta content text in both appearances.",
				},
				helpText: "Question headings, body text, and unselected answer labels.",
			},
			interfaceColor: {
				key: "interfaceColor",
				label: "Neutral accents",
				category: "content",
				valueKind: "color",
				description:
					"Neutral answer shading, hover accents, and progress-track tint.",
				semanticUsage: {
					fullPage:
						"Neutral answer shading, hover accents, and progress-track tint.",
					survey: "Neutral answer shading and hover accents.",
				},
				helpText:
					"Neutral answer shading and hover accents. Full-page surveys also use this for progress-bar tracks when shown. Selected answers use Action.",
				notes:
					"Untouched designs retain their existing tints; explicit Border and Muted text settings own outlines and helper copy independently.",
			},
			borderColor: {
				key: "borderColor",
				label: "Border",
				category: "surface",
				valueKind: "color",
				description: "Default border color for survey containers and controls.",
				semanticUsage: {
					fullPage:
						"Supported control outlines and image dividers; password-entry borders retain their own styling.",
					survey:
						"Container, answer, and input outlines; selected-state borders use Action.",
				},
				helpText:
					"Ordinary outlines around containers, answers, and inputs. Selected-state emphasis uses Action.",
			},
			actionColor: {
				key: "actionColor",
				label: "Action",
				category: "interaction",
				valueKind: "color",
				description:
					"Primary interactive accent for actions and selected states.",
				semanticUsage: {
					fullPage:
						"Buttons, active controls, focus accents, and visual effects.",
					survey: "Buttons, selected options, hover/focus accents, and rings.",
				},
				helpText:
					"Primary button fills and selected-answer highlights. Full-page surveys also use this for progress-bar fills and color-based page effects when enabled.",
			},
			actionTextColor: {
				key: "actionTextColor",
				label: "Action text",
				category: "interaction",
				valueKind: "color",
				description:
					"Foreground text color shown on action-colored backgrounds.",
				semanticUsage: {
					fullPage: "Button and selected-control text foreground.",
					survey: "Primary action label foreground text.",
				},
				helpText:
					"Text and selection marks on solid Action backgrounds, including buttons and selected answers.",
			},
			secondaryColor: {
				key: "secondaryColor",
				label: "Secondary background",
				category: "surface",
				valueKind: "color",
				description:
					"Secondary surface or accent tone for non-primary emphasis.",
				semanticUsage: {
					fullPage:
						"Input and secondary-button backgrounds and visual-effect palette; not the progress track.",
					survey:
						"Input fields, beta inner panels, and secondary-button backgrounds.",
				},
				helpText:
					"Background for text inputs and secondary buttons, plus Beta popup and app inner panels. Also contributes to color-based full-page effects when enabled.",
			},
			linkColor: {
				key: "linkColor",
				label: "Link",
				category: "content",
				valueKind: "color",
				description: "Hyperlink foreground color.",
				semanticUsage: {
					fullPage: "Anchor/link text and effect palette input.",
					survey: "Classic link controls and links in beta body copy.",
				},
				helpText:
					"Color for links and link-style controls. Also contributes to color-based full-page effects when enabled.",
			},
			errorColor: {
				key: "errorColor",
				label: "Error",
				category: "feedback",
				valueKind: "color",
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
				description: "Warning or caution feedback color.",
				semanticUsage: {
					fullPage: "Soft validation warnings such as nearing limits.",
					survey: "Approaching-limit input feedback.",
				},
				helpText: "Color for warning and caution states.",
			},
			successColor: {
				key: "successColor",
				label: "Success",
				category: "feedback",
				valueKind: "color",
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
				description: "Secondary/de-emphasized text color.",
				semanticUsage: {
					fullPage: "Input counters and selection-limit instructions.",
					survey: "Input feedback and selection-limit helper text.",
				},
				helpText:
					"Helper text such as input counters and selection-limit messages, where shown.",
			},
			focusColor: {
				key: "focusColor",
				label: "Focus",
				category: "focus",
				valueKind: "color",
				description:
					"Focus indicator color token for accessible keyboard focus.",
				semanticUsage: {
					fullPage: "Used by explicit focus ring/outline tokenized styles.",
					survey: "Keyboard focus outlines on controls and answer groups.",
				},
				helpText: "Color used by focus outlines and rings when applicable.",
			},
			minimizedBgColor: {
				key: "minimizedBgColor",
				label: "Minimized background",
				category: "minimized",
				valueKind: "color",
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
				description: "Global base font size applied across renderers.",
				semanticUsage: {
					fullPage:
						"Base font sizing for survey content and controls; some small labels and icons retain fixed sizes.",
					survey:
						"Classic typography and beta content/control sizes scale with the base size.",
				},
				helpText: "Base font size for survey text.",
			},
			fontBody: {
				key: "fontBody",
				label: "Body font",
				category: "typography",
				valueKind: "font",
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
				description: "Global border style for tokenized controls and surfaces.",
				semanticUsage: {
					fullPage:
						"Line style for supported control borders and image dividers; not password-entry borders.",
					survey: "Border style for widget controls and containers.",
				},
				helpText: "Style used for borders (solid, dashed, etc.).",
			},
			borderWidth: {
				key: "borderWidth",
				label: "Border width",
				category: "border",
				valueKind: "length",
				description: "Global border thickness token.",
				semanticUsage: {
					fullPage:
						"Thickness of supported control borders and image dividers; not password-entry borders.",
					survey: "Border thickness across widget controls and containers.",
				},
				helpText: "Thickness used for borders.",
			},
			radiusSm: {
				key: "radiusSm",
				label: "Small corners",
				category: "border",
				valueKind: "length",
				description: "Small corner radius token.",
				semanticUsage: {
					fullPage:
						"Checkbox squares, language selector, and validation-message backgrounds.",
					survey:
						"Checkbox squares, minimized surveys, and Beta or hosted App header buttons. Some Classic answer rows use it until control corners are authored.",
				},
				helpText:
					"Rounding for small controls such as checkbox squares and, where available, minimized surveys. Some Classic answer rows use it until control corners are authored.",
			},
			radiusMd: {
				key: "radiusMd",
				label: "Control corners",
				category: "border",
				valueKind: "length",
				description: "Medium corner radius token.",
				semanticUsage: {
					fullPage:
						"Answer options, text inputs, navigation buttons, and password-entry controls. Language selectors and checkbox squares use small corners.",
					survey:
						"Standard Classic and Beta buttons, answer rows, and text inputs. Small header controls and radio circles have separate rounding.",
				},
				helpText: "Corners of buttons, answer options, and text inputs.",
			},
			radiusLg: {
				key: "radiusLg",
				label: "Container corners",
				category: "border",
				valueKind: "length",
				description: "Large corner radius token.",
				semanticUsage: {
					fullPage:
						"Desktop cover images above or below the title, and the password-entry box. Mobile, banner, and split images retain square corners.",
					survey:
						"Outer corners of expanded popups, inline surveys, and hosted App survey cards.",
				},
				helpText:
					"Outer survey corners for popup, inline, and app formats. Full-page surveys use this for desktop cover images above or below the title and the password-entry box.",
			},
			radiusPill: {
				key: "radiusPill",
				label: "Pill corners",
				category: "border",
				valueKind: "length",
				description: "Pill corner radius token for rounded controls.",
				semanticUsage: {
					fullPage: "Not consumed by the main survey flow.",
					survey: "Classic rounded/radio controls; not beta controls.",
				},
				helpText: "Full rounded radius for pill-shaped controls.",
			},
			focusRingStyle: {
				key: "focusRingStyle",
				label: "Focus ring style",
				category: "focus",
				valueKind: "select",
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
				description: "Offset between element edge and focus ring.",
				semanticUsage: {
					fullPage: "Controls focus outline offset distance.",
					survey: "Controls tokenized focus ring offset.",
				},
				helpText: "Distance between component and focus ring.",
			},
			shadowSm: {
				key: "shadowSm",
				label: "Button shadow",
				category: "shadow",
				valueKind: "shadow",
				description: "Shadow around primary and secondary action buttons.",
				semanticUsage: {
					fullPage: "Controls navigation button shadows.",
					survey: "Controls primary and secondary action button shadows.",
				},
				helpText:
					"Shadow around primary and secondary action buttons where supported. Set to none to remove their shadow or glow.",
			},
			shadowMd: {
				key: "shadowMd",
				label: "Container shadow",
				category: "shadow",
				valueKind: "shadow",
				description: "Medium elevation shadow token.",
				semanticUsage: {
					fullPage:
						"Password-gate container only; not primary buttons or progress.",
					survey:
						"Expanded Classic and Beta popup, inline, and hosted App containers in both appearances.",
				},
				helpText:
					"Shadow around popup, inline, and app survey containers. For full-page surveys, only the password-entry box uses this shadow. Button shadows are separate.",
			},
			shadowLg: {
				key: "shadowLg",
				label: "Shadow lg",
				category: "shadow",
				valueKind: "shadow",
				description: "High-emphasis elevation shadow token for future use.",
				semanticUsage: {
					fullPage: "Reserved for future high-emphasis surfaces.",
					survey: "Reserved for future high-emphasis surfaces.",
				},
				helpText: "High-emphasis shadow reserved for future use cases.",
			},
		},
		Rx = Object.fromEntries(
			Mi.map((e) => [e, { ...Ax[e], ...er[e], status: Ex(e) }]),
		);
	function ja(e) {
		return Rx[e];
	}
	function tr(e) {
		if (typeof e != "string") return;
		const t = e.trim();
		return t && t.toLowerCase() !== "inherit" ? t : void 0;
	}
	function _p(e) {
		if (!e || typeof e != "object" || Array.isArray(e)) return {};
		const t = e,
			r = {};
		for (const [n, o] of Object.entries(t)) {
			const i = tr(o);
			i !== void 0 && (r[n] = i);
		}
		for (const n of Mi) {
			if (er[n].scope !== "shared") continue;
			const o = Oe("light", n),
				i = Oe("dark", n),
				s = Object.hasOwn(t, n) ? tr(t[n]) : (tr(t[o]) ?? tr(t[i]));
			delete r[o], delete r[i], s === void 0 ? delete r[n] : (r[n] = s);
		}
		return r;
	}
	function Ba(e, t, r) {
		const n = e[t];
		return n && typeof n == "object" && !Array.isArray(n) ? tr(n[r]) : void 0;
	}
	function Ox(e) {
		if (!e) return {};
		const t = {},
			r = [
				"light",
				"dark",
				"border",
				"focus",
				"lightMinimized",
				"darkMinimized",
				"lightShadow",
				"darkShadow",
			].some((i) => Object.hasOwn(e, i));
		for (const i of Mi) {
			const { scope: s, storageGroup: a } = er[i];
			if (s === "shared") {
				const c =
					r && (a === "border" || a === "focus") ? Ba(e, a, i) : tr(e[i]);
				c !== void 0 && (t[i] = c);
				continue;
			}
			const l =
					a === "minimized" ? "Minimized" : a === "shadow" ? "Shadow" : "",
				u = r ? Ba(e, `light${l}`, i) : tr(e[Oe("light", i)]),
				d = (r ? Ba(e, `dark${l}`, i) : tr(e[Oe("dark", i)])) ?? u;
			u !== void 0 && (t[Oe("light", i)] = u),
				d !== void 0 && (t[Oe("dark", i)] = d);
		}
		const n = t.fontBody ?? t.fontHeading,
			o = t.fontHeading ?? t.fontBody;
		return n && (t.fontBody = n), o && (t.fontHeading = o), t;
	}
	function Sp(e, t) {
		return Object.fromEntries(Mi.map((r) => [r, e[Tx(r, t)]]));
	}
	function xp(e) {
		const t = Ox(e);
		return { light: Sp(t, "light"), dark: Sp(t, "dark") };
	}
	const sn = [...Cr, ...kp, ...Ir, ...zr].flatMap((e) =>
		er[e].cssVars.map((t) => ({ key: e, cssVar: t })),
	);
	function Li(e, t, r = !0) {
		if (!t) return null;
		const n = [];
		for (const { key: o, cssVar: i } of sn) {
			const s = t[o];
			typeof s != "string" ||
				!s ||
				(n.push(`${i}: ${s};`), r && n.push(`${Ua(i)}: var(${i});`));
		}
		return n.length === 0
			? null
			: (r && sn.some(({ key: o }) => Nx(o) && t[o]) && n.push(...Fa),
				r && t.bgColor && n.push(Ip(t.bgColor)),
				r && sn.some(({ key: o }) => Dx(o) && t[o]) && n.push(zp),
				`${e} {
  ${n.join(`
  `)}
}`);
	}
	function Px(e) {
		return xp(e);
	}
	function $p(e) {
		return Mx(
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
			{ ...e, authored: !1 },
		);
	}
	function Cp(e, t) {
		const { themeMode: r, selector: n = ":host", authored: o = !0 } = t ?? {},
			{ light: i, dark: s } = Px(e),
			a = Li(n, i, o),
			l = Li(n, s, o);
		return r === "Dark"
			? l
			: r === "Auto"
				? [
						a,
						l &&
							`@media (prefers-color-scheme: dark) {
${l}
}`,
					]
						.filter(Boolean)
						.join(`
`) || null
				: a;
	}
	function Mx(e, t) {
		const { themeMode: r, selector: n = ":host", authored: o = !0 } = t ?? {},
			{ light: i, dark: s } = xp(e),
			a = Li(n, i, o),
			l = Li(n, s, o);
		return r === "Dark"
			? l
			: r === "Auto"
				? [
						a,
						l &&
							`@media (prefers-color-scheme: dark) {
${l}
}`,
					]
						.filter(Boolean)
						.join(`
`) || null
				: a;
	}
	const Lx = /[;{}<>]/;
	function Ua(e) {
		return e.replace("--skyra-", "--skyra-authored-");
	}
	const Fa = [
			"--skyra-authored-focus-outline: var(--skyra-focus-ring-width, 2px) var(--skyra-focus-ring-style, solid) var(--skyra-focus-color, var(--skyra-action-color));",
			"--skyra-authored-focus-shadow: none;",
		],
		zp =
			"--skyra-authored-container-border: var(--skyra-border-width, 1px) var(--skyra-border-style, solid) var(--skyra-border-color, currentColor);";
	function Ip(e) {
		return `--skyra-authored-inline-padding: ${e.trim().toLowerCase() === "transparent" ? "0px" : "24px"};`;
	}
	[
		...new Set([
			...sn.map(({ cssVar: e }) => Ua(e)),
			...Fa.map((e) => e.slice(0, e.indexOf(":"))),
			"--skyra-authored-inline-padding",
			"--skyra-authored-container-border",
		]),
	];
	function Nx(e) {
		return e === "focusColor" || e.startsWith("focusRing");
	}
	function Dx(e) {
		return e === "borderColor" || e === "borderStyle" || e === "borderWidth";
	}
	function Tp(e) {
		const t = e.find((n) => n.startsWith("--skyra-bg-color: ")),
			r = e.map((n) => n.slice(0, n.indexOf(":")));
		e.push(...r.map((n) => `${Ua(n)}: var(${n});`)),
			r.some((n) => n.startsWith("--skyra-focus-")) && e.push(...Fa),
			t && e.push(Ip(t.slice(18, -1))),
			r.some((n) => /^--skyra-border-(color|style|width)$/.test(n)) &&
				e.push(zp);
	}
	function Ha(e) {
		if (!e) return "";
		const t = e.trim();
		return Lx.test(t) ? "" : t;
	}
	const jx = sn
		.filter(({ key: e }) => er[e].scope === "shared")
		.map(({ key: e, cssVar: t }) => ({ overrideKey: e, cssVar: t }));
	function Bx(e, t) {
		const r = [],
			n = [];
		for (const o of sn)
			er[o.key].scope === "appearance" && Ux(e, o.key, o.cssVar, r, n);
		for (const { overrideKey: o, cssVar: i } of jx) {
			const s = Ha(e[o]);
			s && (r.push(`${i}: ${s};`), n.push(`${i}: ${s};`));
		}
		return t && (Tp(r), Tp(n)), { lightVars: r, darkVars: n };
	}
	function Ux(e, t, r, n, o) {
		const i = Ha(e[Oe("light", t)]);
		i && n.push(`${r}: ${i};`);
		const s = Ha(e[Oe("dark", t)]);
		s && o.push(`${r}: ${s};`);
	}
	function Fx(e, t, r, n) {
		if (t.length === 0 && r.length === 0) return null;
		const o = t.length
				? `${e} {
  ${t.join(`
  `)}
}`
				: null,
			i = r.length
				? `${e} {
  ${r.join(`
  `)}
}`
				: null;
		return n === "Dark"
			? i
			: n === "Auto"
				? [
						o &&
							`@media (prefers-color-scheme: light) {
${o}
}`,
						i &&
							`@media (prefers-color-scheme: dark) {
${i}
}`,
					]
						.filter(Boolean)
						.join(`
`) || null
				: o;
	}
	function Ep(e, t) {
		if (!e) return null;
		const { themeMode: r, selector: n = ":root", authored: o = !0 } = t ?? {},
			i = _p(e),
			{ lightVars: s, darkVars: a } = Bx(i, o);
		return Fx(n, s, a, r);
	}
	const an = {};
	for (const e of Cr)
		(an[Oe("light", e)] = { group: "light", field: e }),
			(an[Oe("dark", e)] = { group: "dark", field: e });
	for (const e of zr)
		(an[Oe("light", e)] = { group: "lightMinimized", field: e }),
			(an[Oe("dark", e)] = { group: "darkMinimized", field: e });
	for (const e of Ir)
		(an[Oe("light", e)] = { group: "lightShadow", field: e }),
			(an[Oe("dark", e)] = { group: "darkShadow", field: e });
	const Ap = [
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
					"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
				fontHeading:
					"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
				border: {
					borderStyle: "solid",
					borderWidth: "1px",
					radiusSm: "4px",
					radiusMd: "4px",
					radiusLg: "8px",
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
					shadowMd: "0 0 80px rgba(5, 155, 255, 0.21)",
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
					bgColor: "#0a1222",
					textColor: "#e5eaf2",
					interfaceColor: "#4e9aff",
					borderColor: "rgba(0, 96, 180, 0.45)",
					actionColor: "#e8edf4",
					actionTextColor: "#101827",
					secondaryColor: "#0a1222",
					linkColor: "#adc7e8",
					errorColor: "#ff9494",
					warningColor: "#f3c779",
					successColor: "#8cdcb5",
					mutedTextColor: "#9eacc0",
					focusColor: "#69abff",
				},
				lightMinimized: {
					minimizedBgColor: "#081f4f",
					minimizedTextColor: "#ffffff",
					minimizedBorderColor: "#081f4f",
					minimizedShadow:
						"inset 0 2px 0 rgba(255, 255, 255, 0.08), 0 6px 16px rgba(0, 95, 243, 0.15), 0 4px 10px rgba(3, 24, 74, 0.1), 0 0 24px rgba(0, 95, 243, 0.15)",
				},
				darkMinimized: {
					minimizedBgColor: "#0a1222",
					minimizedTextColor: "#e5eaf2",
					minimizedBorderColor: "#2e69b8",
					minimizedShadow: "0 0 80px rgba(5, 155, 255, 0.21)",
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
				fontBody: "Arial, Helvetica, sans-serif",
				fontHeading: "Georgia, serif",
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
				fontBody: "'Courier New', Courier, monospace",
				fontHeading: "Tahoma, Geneva, sans-serif",
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
				fontBody: "'Trebuchet MS', Helvetica, sans-serif",
				fontHeading: "'Trebuchet MS', Helvetica, sans-serif",
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
				fontBody: "Verdana, Geneva, sans-serif",
				fontHeading: "'Trebuchet MS', Helvetica, sans-serif",
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
				fontBody: "Arial, Helvetica, sans-serif",
				fontHeading: "Verdana, Geneva, sans-serif",
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
		Hx = ud();
	function rt(e) {
		const t = ja(e);
		return m()
			.nullable()
			.optional()
			.register(Hx, t)
			.meta({ title: t.label, description: t.helpText });
	}
	function lo(e) {
		const t = Object.fromEntries(e.map((r) => [r, rt(r)]));
		return $(t);
	}
	const Vx = Oi,
		Zx = Pi,
		qx = Ir,
		ut = ["fontSize", "fontBody", "fontHeading"];
	function Wx(e) {
		return typeof e == "boolean"
			? e
			: e === "false" || e === "0" || e === "" || e === null
				? !1
				: !!e;
	}
	const Va = ke([B(), m()]).optional().transform(Wx),
		ln = X(["Auto", "Light", "Dark"]),
		un = lo(Cr),
		cn = lo(zr),
		Za = lo(Vx),
		qa = lo(Zx),
		dn = lo(qx),
		Rp = $({
			name: m().min(1).max(120),
			slug: m().min(1).max(120),
			description: m().max(4e3).nullable().optional(),
			archived: Va.optional(),
			sourceId: m().max(200).nullable().optional(),
			sourceVersion: m().max(64).nullable().optional(),
			installedFrom: m().max(32).nullable().optional(),
			fontSize: rt(ut[0]),
			fontBody: rt(ut[1]),
			fontHeading: rt(ut[2]),
			border: Za.partial().optional(),
			focus: qa.partial().optional(),
			lightShadow: dn.partial().optional(),
			darkShadow: dn.partial().optional(),
			light: un.partial().optional(),
			dark: un.partial().optional(),
			lightMinimized: cn.partial().optional(),
			darkMinimized: cn.partial().optional(),
		});
	Rp.extend({
		slug: m().min(1).max(120).optional(),
		archived: Va.optional().default(!1),
		installedFrom: X(["catalog", "import", "manual"]).nullable().optional(),
	}),
		Rp.partial().extend({
			id: m().uuid().optional(),
			archived: Va.optional(),
			installedFrom: X(["catalog", "import", "manual"]).nullable().optional(),
		}),
		$({
			id: m().min(1).max(200),
			version: m().min(1).max(64),
			name: m().min(1).max(120),
			slug: m().min(1).max(120),
			description: m().max(4e3).nullable().optional(),
			tags: Z(m().min(1).max(40)).max(30).optional(),
			fontSize: rt(ut[0]),
			fontBody: rt(ut[1]),
			fontHeading: rt(ut[2]),
			border: Za.partial().optional(),
			focus: qa.partial().optional(),
			lightShadow: dn.partial().optional(),
			darkShadow: dn.partial().optional(),
			light: un.partial().optional(),
			dark: un.partial().optional(),
			lightMinimized: cn.partial().optional(),
			darkMinimized: cn.partial().optional(),
		});
	const Kx = $({
			id: m().uuid(),
			name: m(),
			slug: m(),
			description: m().nullable().optional(),
			archived: B().optional(),
			sourceId: m().nullable().optional(),
			sourceVersion: m().nullable().optional(),
			installedFrom: m().nullable().optional(),
			fontSize: rt(ut[0]),
			fontBody: rt(ut[1]),
			fontHeading: rt(ut[2]),
			border: Za.partial().optional(),
			focus: qa.partial().optional(),
			lightShadow: dn.partial().optional(),
			darkShadow: dn.partial().optional(),
			light: un.partial().optional(),
			dark: un.partial().optional(),
			lightMinimized: cn.partial().optional(),
			darkMinimized: cn.partial().optional(),
		}),
		Jx = Object.fromEntries(Cx.map((e) => [e, m().nullable().optional()])),
		Gx = Object.fromEntries(
			[...Oi, ...Pi].map((e) => [e, m().nullable().optional()]),
		),
		Yx = $({
			id: m().uuid(),
			name: m(),
			slug: m(),
			description: m().nullable().optional(),
			archived: B().optional(),
			sourceId: m().nullable().optional(),
			sourceVersion: m().nullable().optional(),
			installedFrom: m().nullable().optional(),
			fontSize: rt(ut[0]),
			fontBody: rt(ut[1]),
			fontHeading: rt(ut[2]),
			...Gx,
			...Jx,
		}),
		uo = Pe(m(), m()).transform(_p).nullable().optional();
	function Ee(e, t, r, n, o, i = ja(t[0]).label) {
		const s = t.map(ja),
			a = new Set(s.map((l) => l.scope));
		return {
			id: e,
			tokens: t,
			editor: r,
			group: n,
			label: i,
			description: s.map((l) => l.helpText).join(" "),
			searchAliases: o,
			scope: a.size > 1 ? "mixed" : s[0].scope,
			elements: [...new Set(s.flatMap((l) => l.elements))],
		};
	}
	const Xx = [
		Ee("background", ["bgColor"], "fill", "surfaces", [
			"background",
			"fill",
			"gradient",
		]),
		Ee("text", ["textColor"], "color", "content", ["foreground", "copy"]),
		Ee("mutedText", ["mutedTextColor"], "color", "content", [
			"helper",
			"hint",
			"de-emphasized",
		]),
		Ee(
			"font",
			["fontSize", "fontBody", "fontHeading"],
			"font",
			"content",
			["typeface", "typography", "size"],
			"Font",
		),
		Ee("action", ["actionColor"], "color", "interaction", [
			"accent",
			"button",
			"selected",
			"progress",
		]),
		Ee("actionText", ["actionTextColor"], "color", "interaction", [
			"button label",
			"selected text",
			"checkmark",
		]),
		Ee("link", ["linkColor"], "color", "content", ["anchor", "hyperlink"]),
		Ee("interface", ["interfaceColor"], "color", "interaction", [
			"interface",
			"neutral",
			"shading",
			"hover",
			"track",
		]),
		Ee("secondary", ["secondaryColor"], "color", "surfaces", [
			"secondary",
			"input background",
			"content background",
			"effects",
		]),
		Ee("error", ["errorColor"], "color", "feedback", ["validation", "invalid"]),
		Ee("warning", ["warningColor"], "color", "feedback", ["limit", "caution"]),
		Ee("radiusWidget", ["radiusLg"], "radius", "shape", [
			"widget",
			"container",
			"cover",
			"rounded",
		]),
		Ee("radiusButtons", ["radiusMd"], "radius", "shape", [
			"buttons",
			"answers",
			"inputs",
			"rounded",
		]),
		Ee("radiusMinimized", ["radiusSm"], "radius", "shape", [
			"minimized",
			"small controls",
			"rounded",
		]),
		Ee(
			"border",
			["borderStyle", "borderWidth", "borderColor"],
			"border",
			"shape",
			["outline", "stroke", "thickness"],
			"Border",
		),
		Ee(
			"focus",
			["focusRingStyle", "focusRingWidth", "focusRingOffset", "focusColor"],
			"focus",
			"feedback",
			["keyboard", "outline", "ring"],
			"Focus ring",
		),
		Ee("shadow", ["shadowMd"], "shadow", "shape", [
			"elevation",
			"container glow",
		]),
		Ee("buttonShadow", ["shadowSm"], "shadow", "shape", [
			"button glow",
			"small shadow",
		]),
		Ee("minimizedBg", ["minimizedBgColor"], "color", "minimized", [
			"collapsed background",
		]),
		Ee("minimizedText", ["minimizedTextColor"], "color", "minimized", [
			"collapsed text",
		]),
		Ee("minimizedBorder", ["minimizedBorderColor"], "color", "minimized", [
			"collapsed outline",
		]),
		Ee("minimizedShadow", ["minimizedShadow"], "shadow", "minimized", [
			"collapsed shadow",
			"collapsed glow",
		]),
	];
	new Map(Xx.flatMap((e) => e.tokens.map((t) => [t, e])));
	const Wa = ke([Kx, Yx]),
		Ni = X(["AllAtOnce", "OneAtATime"]),
		co = X(["Public", "InvitationOnly", "Password"]),
		Qx = X(["Visible", "Hidden", "Published"]).transform((e) =>
			e === "Published" ? "Visible" : e,
		),
		e1 = X([
			"Pending",
			"Sent",
			"Opened",
			"Started",
			"Completed",
			"Bounced",
			"Expired",
		]),
		Di = X(["Bar", "Percentage", "Fraction", "None"]),
		rr = X(["End", "Restart", "Redirect"]),
		nr = X([
			"below-title",
			"above-title",
			"split-left",
			"split-right",
			"split-top",
			"background",
		]),
		ji = X(["cover", "contain"]),
		Ka = $({
			imageLayout: nr.nullable().optional(),
			imageLayoutMobile: nr.nullable().optional(),
			imageBrightness: te().min(0).max(1).nullable().optional(),
			imageFit: ji.nullable().optional(),
		}),
		Op = X([
			"confetti",
			"fireworks",
			"emojis",
			"balloons",
			"sparkles",
			"snow",
			"bubbles",
			"stars",
		]),
		Pp = X(["low", "medium", "high"]),
		Mp = X(["burst", "continuous", "burst-then-ambient"]),
		Lp = $({
			pageEffect: Op.nullable().optional(),
			pageEffectIntensity: Pp.nullable().optional(),
			pageEffectBehavior: Mp.nullable().optional(),
			pageEffectEmojis: Z(m()).min(1).max(10).nullable().optional(),
		}),
		Ge = $({
			id: m().uuid(),
			key: m(),
			filename: m(),
			mimeType: m(),
			width: te().int().nullable().optional(),
			height: te().int().nullable().optional(),
			altText: m().nullable().optional(),
			focalX: te().min(0).max(1).nullable().optional(),
			focalY: te().min(0).max(1).nullable().optional(),
		})
			.nullable()
			.optional(),
		Ye = $({ id: m().uuid() }).nullable().optional();
	$({
		displayMode: Ni.nullable().optional(),
		themeId: m().uuid().nullable().optional(),
		themeMode: ln.nullable().optional(),
		showProgressBar: _e.nullable().optional(),
		progressBarStyle: Di.nullable().optional(),
		showQuestionNumbers: _e.nullable().optional(),
		allowBackNavigation: _e.nullable().optional(),
		completionBehavior: rr.nullable().optional(),
		completionRedirectUrl: m().nullable().optional(),
		completionRedirectDelay: Ie().int().nullable().optional(),
		ogTitle: m().nullable().optional(),
		ogDescription: m().nullable().optional(),
		ogImage: Ye,
		logo: Ye,
		logoDark: Ye,
		headerImage: Ye,
		backgroundImage: Ye,
		favicon: Ye,
		...Ka.shape,
	});
	const t1 = $({
			displayMode: Ni.nullable().optional(),
			theme: X(["Light", "Dark"]).nullable().optional(),
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
			logo: Ye,
			logoDark: Ye,
			headerImage: Ye,
			backgroundImage: Ye,
			favicon: Ye,
			showProgressBar: _e.nullable().optional(),
			progressBarStyle: Di.nullable().optional(),
			showQuestionNumbers: _e.nullable().optional(),
			allowBackNavigation: _e.nullable().optional(),
			completionBehavior: rr.nullable().optional(),
			completionRedirectUrl: m().nullable().optional(),
			completionRedirectDelay: Ie().int().nullable().optional(),
			ogTitle: m().nullable().optional(),
			ogDescription: m().nullable().optional(),
			ogImage: Ye,
		}),
		Np = $({
			id: m().uuid().optional(),
			displayMode: Ni.nullable().optional(),
			theme: X(["Light", "Dark"]).nullable().optional(),
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
			logo: Ge,
			logoDark: Ge,
			headerImage: Ge,
			backgroundImage: Ge,
			favicon: Ge,
			showProgressBar: B().nullable().optional(),
			progressBarStyle: Di.nullable().optional(),
			showQuestionNumbers: B().nullable().optional(),
			allowBackNavigation: B().nullable().optional(),
			completionBehavior: rr.nullable().optional(),
			completionRedirectUrl: m().nullable().optional(),
			completionRedirectDelay: te().int().nullable().optional(),
			ogTitle: m().nullable().optional(),
			ogDescription: m().nullable().optional(),
			ogImage: Ge,
		});
	$({
		themeId: m().uuid().nullable().optional(),
		themeMode: ln.nullable().optional(),
		textNext: m().nullable().optional(),
		textPrev: m().nullable().optional(),
		headerImage: Ye,
		...Ka.shape,
		...Lp.shape,
		themeOverrides: uo,
	});
	const r1 = $({
			theme: Wa.nullable().optional(),
			themeMode: ln.nullable().optional(),
			textNext: m().nullable().optional(),
			textPrev: m().nullable().optional(),
			headerImage: Ge,
			...Ka.shape,
			...Lp.shape,
			themeOverrides: uo,
		}),
		n1 = Be(
			{
				"@title": m().nullish(),
				"@description": m().nullish(),
				"@textNext": m().nullish(),
				"@textPrev": m().nullish(),
			},
			[],
		),
		o1 = $({
			id: m().uuid(),
			name: m(),
			title: m().nullable().optional(),
			description: m().nullable().optional(),
			tr: n1.optional().nullable(),
			order: te().int(),
			pageStatus: Qx.nullable().optional(),
			presentation: r1.nullable().optional(),
			config: Np.nullable().optional(),
			theme: Wa.nullable().optional(),
			themeMode: ln.nullable().optional(),
			textNext: m().nullable().optional(),
			textPrev: m().nullable().optional(),
			headerImage: Ge,
			imageLayout: nr.nullable().optional(),
			imageLayoutMobile: nr.nullable().optional(),
			imageBrightness: te().nullable().optional(),
			imageFit: ji.nullable().optional(),
			themeOverrides: uo,
			pageEffect: Op.nullable().optional(),
			pageEffectIntensity: Pp.nullable().optional(),
			pageEffectBehavior: Mp.nullable().optional(),
			pageEffectEmojis: Z(m()).nullable().optional(),
		});
	$({
		id: m().uuid(),
		surveyId: m().uuid(),
		code: m(),
		email: m().email().nullable().optional(),
		phone: m().nullable().optional(),
		recipientName: m().nullable().optional(),
		status: e1.nullable().optional(),
		sentAt: Te().nullable().optional(),
		openedAt: Te().nullable().optional(),
		startedAt: Te().nullable().optional(),
		completedAt: Te().nullable().optional(),
		maxResponses: te().int().nullable().optional(),
		expiresAt: Te().nullable().optional(),
		responseCount: te().int().nullable().optional(),
	});
	const i1 = X([
			"Queued",
			"Running",
			"Done",
			"Failed",
			"Paused",
			"Cancelled",
			"Interrupted",
		]),
		s1 = $({
			stage: X(["processing", "cleanup"]).optional(),
			orphanedUrlsDeleted: te().optional(),
		}),
		a1 = $({
			checkpoint: $({
				lastProcessedCreatedAt: m(),
				lastProcessedId: m(),
				processed: te(),
			}).optional(),
		}),
		Dp = (e) =>
			yS(m(), e, {
				decode: (t, r) => {
					try {
						return JSON.parse(t);
					} catch (n) {
						return (
							r.issues.push({
								code: "invalid_format",
								format: "json",
								input: t,
								message: n.message,
							}),
							la
						);
					}
				},
				encode: (t) => JSON.stringify(t),
			}),
		l1 = Dp(s1).optional().nullable(),
		u1 = Dp(a1).optional().nullable(),
		c1 = lt.extend({
			name: m(),
			type: m(),
			pattern: m().nullable(),
			format: X(["Brackets", "Curly", "Colon", "Generic"])
				.optional()
				.nullable(),
			replacer: m().optional().nullable(),
			redactGroups: Z(m()).optional().nullable(),
			globalMatch: B().optional().nullable(),
			segmentOnly: B().optional().nullable(),
		}),
		po = $({
			id: M(),
			type: m(),
			status: i1,
			organisation: lt.extend({ slug: m().optional() }),
			createdBy: lt.optional(),
			createdAt: Te(),
			startedAt: Te().optional().nullable(),
			updatedAt: Te().optional().nullable(),
			finishedAt: Te().optional().nullable(),
			claimedBy: m().optional().nullable(),
			claimedAt: Te().optional().nullable(),
			progress: te().optional().nullable(),
			error: m().optional().nullable(),
		}),
		d1 = po.extend({
			type: j("DailySurveyStatsJob"),
			survey: lt.extend({ name: m().optional(), slug: m().optional() }),
		}),
		p1 = po.extend({
			type: j("UrlRedactionJob"),
			name: m().optional().nullable(),
			totalUrls: te().optional().nullable(),
			processedUrls: te().optional().nullable(),
			matchedUrls: te().optional().nullable(),
			redactedUrls: te().optional().nullable(),
			rules: Z(c1).optional().nullable(),
			metadata: l1,
		}),
		jp = lt.extend({ type: m() }),
		f1 = po.extend({
			type: j("UrlRebalanceJob"),
			name: m().optional().nullable(),
			totalUrls: te().optional().nullable(),
			processedUrls: te().optional().nullable(),
			dependsOn: jp.optional().nullable(),
		}),
		h1 = po.extend({
			type: j("LookupUrlPopulatorJob"),
			name: m().optional().nullable(),
			totalLookups: te().optional().nullable(),
			processedLookups: te().optional().nullable(),
			dependsOn: jp.optional().nullable(),
			metadata: u1,
		});
	Nt("type", [d1, p1, f1, h1]),
		po
			.pick({ id: !0, status: !0, progress: !0, error: !0 })
			.extend({
				processedUrls: te().optional(),
				matchedUrls: te().optional(),
				redactedUrls: te().optional(),
				processedLookups: te().optional(),
				metadata: m().optional(),
			});
	const g1 = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
		Ja = m()
			.min(1)
			.refine((e) => !g1.test(e), "Session IDs must not be UUID-shaped")
			.brand();
	M().brand(), Z(Ja).readonly();
	const m1 = $({ eventId: M(), sessionId: Ja, surveyId: M() }).readonly();
	Z(m1).readonly(), Z(Ma).min(1).readonly();
	const Tr = $({
			submissionId: m().ulid().optional(),
			event: m(),
			survey: m(),
			session: Ja,
			url: m().optional(),
			visitor: m().ulid(),
		}),
		y1 = Tr.extend({ event: j("CardView"), type: Ma }),
		v1 = Tr.extend({ event: j("PageView"), value: m() }),
		jt = Tr.extend({
			event: j("CardValue"),
			card: m(),
			type: Ma,
			value: ke([m(), B(), Pe(m(), Ta()), Z(m())]),
			languageCode: m().optional(),
			cardOrder: te().int().nonnegative().optional(),
		}),
		b1 = jt.extend({ type: j("InputCard") }),
		w1 = jt.extend({ type: j("TopTaskCard") }),
		k1 = jt.extend({ type: j("CompletionCard") }),
		_1 = jt.extend({ type: j("SegmentCard") }),
		S1 = jt.extend({ type: j("LikertCard") }),
		x1 = jt.extend({
			type: j("RecruitmentCard"),
			value: $({
				email: m().optional().nullable(),
				phone: m().optional().nullable(),
				name: m().optional().nullable(),
				consented: B().optional(),
				autoEmail: B().optional(),
				optedOut: B().optional(),
			}),
		}),
		$1 = jt.extend({ type: j("MultiSelectCard"), value: Z(M()) }),
		C1 = jt.extend({ type: j("SingleSelectCard"), value: M() }),
		z1 = jt.extend({ type: j("FindabilityCard") }),
		I1 = Tr.extend({ event: j("Value"), value: ke([m(), B()]) }),
		T1 = Tr.extend({
			event: j("SessionInit"),
			ua: m(),
			screenSize: iS([te(), te()]),
			pixelRatio: te(),
			connection: m(),
			traits: Pe(m(), m()).optional(),
			languageCode: m().optional(),
		}),
		E1 = Tr.extend({ event: j("Custom"), key: m(), value: m() }),
		A1 = Tr.extend({ event: j("SessionTraits"), traits: Pe(m(), m()) }),
		Bi = Nt("type", [b1, x1, _1, w1, k1, z1, S1, $1, C1]);
	ke([Bi, y1, v1, I1, E1, T1, A1]);
	const Ui = {
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
		Bp = /[\\*+{}[\]()|^$]/;
	function R1(e) {
		var u;
		const t = e.trim();
		if (!t) throw new Error("Enter a website address");
		if (/\s/.test(t))
			throw new Error("Website addresses cannot contain spaces");
		if (Bp.test(t))
			throw new Error("Wildcards and regular expressions are not supported");
		if (t.includes("?") || t.includes("#"))
			throw new Error("Query strings and fragments are not supported");
		const r = /^([a-z][a-z\d+.-]*):/i.exec(t),
			n = /^[a-z][a-z\d+.-]*:\/\//i.test(t);
		if (r && !n) {
			const d = (u = r[1]) == null ? void 0 : u.toLowerCase();
			if (d === "http" || d === "https")
				throw new Error("Enter a valid website address");
		}
		if (/^https?\/\//i.test(t) || /^https?:\/\/\//i.test(t))
			throw new Error("Enter a valid website address");
		let o;
		try {
			o = new URL(n ? t : `https://${t}`);
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
		if (Bp.test(s))
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
	const O1 = m().transform((e, t) => {
			try {
				return R1(e);
			} catch (r) {
				return (
					t.addIssue({
						code: "custom",
						message:
							r instanceof Error ? r.message : "Enter a valid website address",
					}),
					la
				);
			}
		}),
		P1 = $({
			id: M(),
			domain: m().min(1),
			pathPrefix: m(),
			allowSurveyFollowOutside: B(),
		});
	$({ websiteAddress: O1, allowSurveyFollowOutside: B() });
	function Ga(e, t) {
		if (e === t) return !0;
		const r = (n) => (n.startsWith("www.") ? n.slice(4) : n);
		return r(e) === r(t);
	}
	$({
		name: m().min(1),
		slug: m().min(1),
		description: m().optional(),
		canCreateTasks: _e,
		canCreateSegments: _e,
		canCreateScales: _e,
		canCreateLabels: _e,
	}),
		$({
			id: M(),
			name: m().min(1),
			slug: m()
				.min(1)
				.optional()
				.transform((e) => e || ""),
			canCreateTasks: _e,
			canCreateSegments: _e,
			canCreateScales: _e,
			canCreateLabels: _e,
			description: m().optional(),
		});
	const M1 = $({
			id: M(),
			user: $({
				id: M(),
				name: m().nullable().optional(),
				email: Ud().optional(),
			}),
			role: dp,
		}),
		Up = ke([j("View"), j("Edit")]),
		L1 = $({ id: M(), survey: $({ id: M(), name: m().optional() }), role: Up });
	$({ team: M(), survey: M(), role: Up }),
		$({ team: M(), survey: M() }),
		$({ team: M(), user: M(), role: dp }),
		$({ team: M(), user: M() }),
		$({
			id: M(),
			name: m().min(1),
			slug: m().min(1),
			description: m().nullable(),
			emoji: on.nullable().optional(),
			createdAt: Te(),
			updatedAt: Te().nullable(),
			members: Z(M1),
			surveys: Z(L1),
			websiteAreas: Z(P1),
			canCreateTasks: B().optional().default(!1),
			canCreateSegments: B().optional().default(!1),
			canCreateScales: B().optional().default(!1),
			canCreateLabels: B().optional().default(!0),
		});
	const ct = m().nullable(),
		Fi = m().min(3),
		Ya = m()
			.min(3)
			.regex(/^[a-z0-9-.]+$/),
		Fp = X(["Popup", "Inline", "Headless", "FullPage", "App"]),
		Xa = X(["Survey", "Discovery", "TopTask", "Findability"]),
		fo = X(["BottomRight", "BottomLeft", "TopRight", "TopLeft"]),
		N1 = X(["default", "floating-controls"]),
		Hi = B().or(Xt()).optional(),
		Qa = Ie().min(0).max(100),
		ho = Ie().min(0),
		el = Ie().min(0),
		tl = Ie()
			.min(0)
			.max(3600 * 1e3)
			.optional()
			.default(0),
		rl = Ie().min(0).optional(),
		D1 = X(
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
		j1 = 100,
		go = new Map();
	function B1(e) {
		try {
			return new RegExp(e);
		} catch {
			return null;
		}
	}
	function U1(e) {
		return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
	function F1(e, t) {
		try {
			const r = e.indexOf("?"),
				o =
					(r >= 0 ? e.slice(0, r) : e)
						.split("/")
						.filter(Boolean)
						.reduce((i, s) => `${i}\\/${B1(s) ? `(${s})` : U1(s)}`, "^") +
					(t ? "(\\/.*)?" : "") +
					"$";
			return new RegExp(o);
		} catch {
			return null;
		}
	}
	function nl(e, t, r, n) {
		if (!t) return !1;
		if (n) {
			const a = `${t}:${r}`,
				l = go.get(a);
			if (l) return l.test(e);
			const u = F1(t, r);
			if (!u) return !1;
			if (go.size >= j1) {
				const d = go.keys().next().value;
				d && go.delete(d);
			}
			return go.set(a, u), u.test(e);
		}
		const o = (a) => (a.length > 1 && a.endsWith("/") ? a.slice(0, -1) : a),
			i = o(e),
			s = o(t);
		return r
			? s === "/"
				? i.startsWith("/")
				: i === s || i.startsWith(`${s}/`)
			: i === s;
	}
	function Hp(e, t) {
		try {
			const r = new URL(t),
				n = e.domain ? Ga(e.domain.name, r.hostname) : !0,
				o =
					e.path &&
					nl(
						decodeURI(r.pathname),
						decodeURI(e.path),
						e.applyBelow,
						e.isRegex ?? !1,
					);
			return !!(n && o);
		} catch {
			return !1;
		}
	}
	const Vp = $({
			textClose: ct,
			textHide: ct,
			textNext: ct,
			textPrev: ct,
			textMinimized: ct,
			textReplyLater: ct,
		}),
		H1 = $({
			id: M(),
			isRegexp: B().default(!1),
			negate: B().default(!1),
			type: D1,
			value: m(),
			domains: Z($({ id: M(), name: m() })),
		}),
		ol = $({
			id: M(),
			ruleType: X(["Show", "Hide", "FollowOnly"]),
			path: m().optional(),
			desktop: B(),
			mobile: B(),
			tablet: B(),
			applyBelow: B(),
			follow: B(),
			isRegex: B().optional().default(!1),
			domain: $({ id: M(), name: m() }).optional().nullable(),
		}),
		kt = Vp.partial().extend({
			mode: j("create"),
			name: Fi,
			slug: Ya,
			description: m().optional().nullable(),
			emoji: on.optional(),
			active: Me().optional(),
			status: $r.optional(),
			surveyType: Xa.optional(),
			capturePercent: Qa.optional(),
			minTimeForRetake: ho.optional(),
			minTimeForRetrigger: el.optional(),
			allowedOrigins: Z(m()).optional(),
			initialDelay: tl,
			autoCloseAfter: rl,
			path: m()
				.optional()
				.overwrite((e) => (e === "" ? void 0 : e)),
			domain: m().optional(),
			applyBelow: Me().optional().default(!1),
			follow: Me().optional().default(!1),
			language: M(),
			editTeams: Pe(M(), B().or(Xt())).default({}),
			visibleToAllTeams: B().or(Xt()).optional().default(!1),
		}),
		Vi = m()
			.min(1, "Enter a password to protect this survey")
			.max(256, "Password must be 256 characters or fewer"),
		Zp = Nt("generalType", [
			kt.extend({ generalType: j("App"), renderType: j("App") }).strict(),
			kt
				.extend({
					generalType: j("Popup"),
					renderType: j("Popup"),
					surveyPosition: fo.optional(),
					showCloseButton: Hi,
				})
				.strict(),
			kt.extend({ generalType: j("Inline"), renderType: j("Inline") }).strict(),
			kt
				.extend({ generalType: j("Headless"), renderType: j("Headless") })
				.strict(),
			kt
				.extend({
					generalType: j("FullPage"),
					renderType: j("FullPage"),
					accessMode: co.optional().nullable(),
					password: Vi.optional().nullable(),
					completionBehavior: rr.optional(),
					completionRedirectUrl: m().optional().nullable(),
					completionRedirectDelay: Ie().int().optional().nullable(),
				})
				.strict(),
		]),
		V1 = Nt("generalType", [
			kt.extend({ generalType: j("App"), renderType: j("App") }),
			kt.extend({
				generalType: j("Popup"),
				renderType: j("Popup"),
				surveyPosition: fo.optional(),
				showCloseButton: Hi,
			}),
			kt.extend({ generalType: j("Inline"), renderType: j("Inline") }),
			kt.extend({ generalType: j("Headless"), renderType: j("Headless") }),
			kt.extend({
				generalType: j("FullPage"),
				renderType: j("FullPage"),
				accessMode: co.optional().nullable(),
				password: Vi.optional().nullable(),
				completionBehavior: rr.optional(),
				completionRedirectUrl: m().optional().nullable(),
				completionRedirectDelay: Ie().int().optional().nullable(),
			}),
		]).transform((e, t) => {
			const r = Zp.safeParse(e);
			if (r.success) return r.data;
			const [n] = r.error.issues;
			return (
				t.addIssue({
					code: "custom",
					message:
						(n == null ? void 0 : n.message) ?? "Invalid survey create payload",
					path: n == null ? void 0 : n.path,
				}),
				la
			);
		}),
		qp = $({
			mode: j("copy"),
			name: Fi,
			slug: Ya,
			emoji: on.optional(),
			copySurvey: M(),
			keepRules: B().or(Xt()).optional().default(!0),
			cards: Pe(M(), B().or(Xt())).optional(),
			editTeams: Pe(M(), B().or(Xt())).default({}),
			visibleToAllTeams: B().or(Xt()).optional().default(!1),
			description: m().optional().nullable(),
			accessMode: co.optional().nullable(),
			password: Vi.optional().nullable(),
			completionBehavior: rr.optional(),
			minTimeForRetake: ho.optional(),
			completionRedirectUrl: m().optional().nullable(),
			completionRedirectDelay: Ie().int().optional().nullable(),
		});
	Nt("mode", [Zp, qp]),
		ke([V1, qp]),
		X(["Completion", "Demand"]),
		X(["Absolute", "Relative"]);
	const Z1 = $({
			name: Fi.optional(),
			emoji: on.nullable().optional(),
			description: m().optional().nullable(),
			language: M().optional(),
			timezone: m().optional(),
			surveyType: Xa.optional(),
		}),
		q1 = $({
			accessMode: co.optional().nullable(),
			password: Vi.optional().nullable(),
			completionBehavior: rr.optional(),
			minTimeForRetake: ho.optional(),
			completionRedirectUrl: m().optional().nullable(),
			completionRedirectDelay: Ie().int().optional().nullable(),
		}),
		mo = $({ id: M(), visibleToAllTeams: B().or(Xt()).optional() }).merge(Z1),
		Wp = mo.extend({
			generalType: j("Popup"),
			renderType: j("Popup").optional(),
			surveyPosition: fo.optional(),
			showCloseButton: Hi,
		}),
		Kp = mo.extend({
			generalType: j("Inline"),
			renderType: j("Inline").optional(),
		}),
		Jp = mo.extend({
			generalType: j("Headless"),
			renderType: j("Headless").optional(),
		}),
		Gp = mo.extend({ generalType: j("App"), renderType: j("App").optional() }),
		Yp = mo
			.extend({
				generalType: j("FullPage"),
				renderType: j("FullPage").optional(),
			})
			.merge(q1);
	Nt("generalType", [Wp, Kp, Jp, Gp, Yp]),
		Nt("generalType", [
			Wp.strict(),
			Kp.strict(),
			Jp.strict(),
			Gp.strict(),
			Yp.strict(),
		]);
	const W1 = $({
		capturePercent: Qa.optional(),
		minTimeForRetake: ho.optional(),
		minTimeForRetrigger: el.optional(),
		allowedOrigins: Z(m()).optional(),
		initialDelay: tl,
		autoCloseAfter: rl,
	});
	$({ id: M() }).merge(W1).strict();
	const K1 = $({
		ogTitle: m().optional().nullable(),
		ogDescription: m().optional().nullable(),
		ogImage: Ye,
	});
	$({ id: M() }).merge(K1).strict();
	const J1 = $({
		surveyPosition: fo.optional(),
		showCloseButton: Hi,
		themeId: M().optional().nullable(),
		themeMode: ln.optional().nullable(),
		themeOverrides: uo,
		fullPageConfig: t1.optional(),
		imageLayout: nr.optional().nullable(),
		imageLayoutMobile: nr.optional().nullable(),
		imageBrightness: te().min(0).max(1).optional().nullable(),
		imageFit: ji.optional().nullable(),
	});
	$({ id: M() }).merge(J1).strict();
	const G1 = $({ language: M().optional(), languages: Z(M()).optional() });
	$({ id: M() }).merge(G1).strict();
	const Y1 = Vp.partial();
	$({ id: M() }).merge(Y1).strict(),
		$({
			publishingState: ep,
			publishStartAt: Te().nullable(),
			publishEndAt: Te().nullable(),
		});
	const X1 = M().brand(),
		Q1 = $({
			id: X1,
			revision: Ie().default(0),
			name: Fi,
			slug: Ya,
			fullSlug: m(),
			status: $r.nullable().optional(),
			publishingState: ep.optional(),
			isLive: B().optional(),
			description: m().optional().nullable(),
			renderType: Fp,
			accessMode: co.optional().nullable(),
			displayMode: Ni.optional().nullable(),
			themeMode: ln.optional().nullable(),
			themeOverrides: uo,
			showProgressBar: Me().optional().nullable(),
			progressBarStyle: Di.optional().nullable(),
			showQuestionNumbers: Me().optional().nullable(),
			allowBackNavigation: Me().optional().nullable(),
			completionBehavior: rr.optional().nullable(),
			completionRedirectUrl: m().optional().nullable(),
			completionRedirectDelay: Ie().int().optional().nullable(),
			ogTitle: m().optional().nullable(),
			ogDescription: m().optional().nullable(),
			ogImage: Ge,
			logo: Ge,
			logoDark: Ge,
			headerImage: Ge,
			backgroundImage: Ge,
			favicon: Ge,
			imageLayout: nr.optional().nullable(),
			imageLayoutMobile: nr.optional().nullable(),
			imageBrightness: te().optional().nullable(),
			imageFit: ji.optional().nullable(),
			theme: Wa.optional().nullable(),
			fullPageConfig: Np.optional().nullable(),
			surveyType: Xa,
			surveyPosition: fo,
			showCloseButton: B(),
			popupLayout: N1,
			capturePercent: Qa,
			minTimeForRetake: ho,
			minTimeForRetrigger: el,
			initialDelay: tl,
			autoCloseAfter: rl,
			allowedOrigins: Z(m()).optional(),
			trackPageViews: Me().optional().nullable(),
			debugEnabled: Me().optional().nullable(),
			urlRules: Z(H1),
			showRules: Z(ol).default([]),
			followRules: Z(ol).default([]),
			hideRules: Z(ol).default([]),
			audienceRuleMode: lp.optional().default("and"),
			audienceRules: Z(cp).optional().default([]),
			language: $({ id: M(), name: m(), code: m() }).nullable(),
			languages: Z($({ id: M(), name: m(), code: m() }))
				.optional()
				.nullable(),
			tr: Z(
				$({
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
			ipBlacklist: Z($({ id: M(), ip: m() })).optional(),
			textClose: ct.optional(),
			textHide: ct.optional(),
			textNext: ct.optional(),
			textPrev: ct.optional(),
			textMinimized: ct.optional(),
			textReplyLater: ct.optional(),
			pages: Z(o1).optional().nullable(),
		});
	$({
		autoClose: B().optional().default(!0),
		constrainHeight: B().optional().default(!0),
		testMode: B().optional().default(!1),
		apiHost: m().optional(),
	});
	const e$ = m()
			.min(3)
			.regex(/^[a-z0-9-\.]+$/),
		t$ = X(["Task", "Category"]);
	$({
		name: m().min(3),
		slug: e$.optional(),
		emoji: on.optional().nullable(),
		description: m().optional().nullable(),
		parentTask: M().optional().nullable(),
		autoIncludeInCards: Me().optional(),
		type: t$.optional().default("Task"),
	}).extend({ id: M() }),
		$({ id: m(), organisation: M() });
	function Zi(e) {
		const t = new Error(e);
		return (t.source = "ulid"), t;
	}
	const il = "0123456789ABCDEFGHJKMNPQRSTVWXYZ",
		yo = il.length,
		Xp = Math.pow(2, 48) - 1,
		r$ = 10,
		n$ = 16;
	function o$(e) {
		let t = Math.floor(e() * yo);
		return t === yo && (t = yo - 1), il.charAt(t);
	}
	function i$(e, t) {
		if (isNaN(e)) throw new Error(e + " must be a number");
		if (e > Xp) throw Zi("cannot encode time greater than " + Xp);
		if (e < 0) throw Zi("time must be positive");
		if (Number.isInteger(Number(e)) === !1) throw Zi("time must be an integer");
		let r,
			n = "";
		for (; t > 0; t--) (r = e % yo), (n = il.charAt(r) + n), (e = (e - r) / yo);
		return n;
	}
	function s$(e, t) {
		let r = "";
		for (; e > 0; e--) r = o$(t) + r;
		return r;
	}
	function a$(e = !1, t) {
		t || (t = typeof window < "u" ? window : null);
		const r = t && (t.crypto || t.msCrypto);
		if (r)
			return () => {
				const n = new Uint8Array(1);
				return r.getRandomValues(n), n[0] / 255;
			};
		try {
			const n = require("crypto");
			return () => n.randomBytes(1).readUInt8() / 255;
		} catch {}
		if (e) {
			try {
				console.error(
					"secure crypto unusable, falling back to insecure Math.random()!",
				);
			} catch {}
			return () => Math.random();
		}
		throw Zi("secure crypto unusable, insecure Math.random not allowed");
	}
	function l$(e) {
		return (
			e || (e = a$()),
			function (r) {
				return isNaN(r) && (r = Date.now()), i$(r, r$) + s$(n$, e);
			}
		);
	}
	const Le = l$();
	function u$() {
		if (typeof globalThis < "u") return globalThis;
		if (typeof self < "u") return self;
		if (typeof window < "u") return window;
		if (typeof global < "u") return global;
	}
	function c$() {
		const e = u$();
		if (e.__xstate__) return e.__xstate__;
	}
	const d$ = (e) => {
		if (typeof window > "u") return;
		const t = c$();
		t && t.register(e);
	};
	class Qp {
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
			const r = { value: t, next: null };
			if (this._current) {
				(this._last.next = r), (this._last = r);
				return;
			}
			(this._current = r), (this._last = r), this._active && this.flush();
		}
		flush() {
			for (; this._current; ) {
				const t = this._current;
				this._process(t.value), (this._current = t.next);
			}
			this._last = null;
		}
	}
	const ef = ".",
		p$ = "",
		tf = "",
		f$ = "#",
		h$ = "*",
		rf = "xstate.init",
		g$ = "xstate.error",
		Er = "xstate.stop";
	function m$(e, t) {
		return { type: `xstate.after.${e}.${t}` };
	}
	function sl(e, t) {
		return { type: `xstate.done.state.${e}`, output: t };
	}
	function y$(e, t) {
		return { type: `xstate.done.actor.${e}`, output: t, actorId: e };
	}
	function nf(e, t) {
		return { type: `xstate.error.actor.${e}`, error: t, actorId: e };
	}
	function of(e) {
		return { type: rf, input: e };
	}
	function _t(e) {
		setTimeout(() => {
			throw e;
		});
	}
	const v$ =
		(typeof Symbol == "function" && Symbol.observable) || "@@observable";
	function al(e, t) {
		const r = sf(e),
			n = sf(t);
		return typeof n == "string"
			? typeof r == "string"
				? n === r
				: !1
			: typeof r == "string"
				? r in n
				: Object.keys(r).every((o) => (o in n ? al(r[o], n[o]) : !1));
	}
	function ll(e) {
		if (cf(e)) return e;
		const t = [];
		let r = "";
		for (let n = 0; n < e.length; n++) {
			switch (e.charCodeAt(n)) {
				case 92:
					(r += e[n + 1]), n++;
					continue;
				case 46:
					t.push(r), (r = "");
					continue;
			}
			r += e[n];
		}
		return t.push(r), t;
	}
	function sf(e) {
		if (zf(e)) return e.value;
		if (typeof e != "string") return e;
		const t = ll(e);
		return af(t);
	}
	function af(e) {
		if (e.length === 1) return e[0];
		const t = {};
		let r = t;
		for (let n = 0; n < e.length - 1; n++)
			if (n === e.length - 2) r[e[n]] = e[n + 1];
			else {
				const o = r;
				(r = {}), (o[e[n]] = r);
			}
		return t;
	}
	function lf(e, t) {
		const r = {},
			n = Object.keys(e);
		for (let o = 0; o < n.length; o++) {
			const i = n[o];
			r[i] = t(e[i], i, e, o);
		}
		return r;
	}
	function uf(e) {
		return cf(e) ? e : [e];
	}
	function Bt(e) {
		return e === void 0 ? [] : uf(e);
	}
	function ul(e, t, r, n) {
		return typeof e == "function" ? e({ context: t, event: r, self: n }) : e;
	}
	function cf(e) {
		return Array.isArray(e);
	}
	function b$(e) {
		return e.type.startsWith("xstate.error.actor");
	}
	function pn(e) {
		return uf(e).map((t) =>
			typeof t > "u" || typeof t == "string" ? { target: t } : t,
		);
	}
	function df(e) {
		if (!(e === void 0 || e === p$)) return Bt(e);
	}
	function qi(e, t, r) {
		var i, s, a;
		const n = typeof e == "object",
			o = n ? e : void 0;
		return {
			next: (i = n ? e.next : e) == null ? void 0 : i.bind(o),
			error: (s = n ? e.error : t) == null ? void 0 : s.bind(o),
			complete: (a = n ? e.complete : r) == null ? void 0 : a.bind(o),
		};
	}
	function pf(e, t) {
		return `${t}.${e}`;
	}
	function cl(e, t) {
		const r = t.match(/^xstate\.invoke\.(\d+)\.(.*)/);
		if (!r) return e.implementations.actors[t];
		const [, n, o] = r,
			s = e.getStateNodeById(o).config.invoke;
		return (Array.isArray(s) ? s[n] : s).src;
	}
	function w$(e) {
		return [...new Set([...e._nodes.flatMap((t) => t.ownEvents)])];
	}
	function ff(e, t) {
		return `${e.sessionId}.${t}`;
	}
	let k$ = 0;
	function _$(e, t) {
		const r = new Map(),
			n = new Map(),
			o = new WeakMap(),
			i = new Set(),
			s = {},
			{ clock: a, logger: l } = t,
			u = {
				schedule: (f, p, h, g, y = Math.random().toString(36).slice(2)) => {
					const v = {
							source: f,
							target: p,
							event: h,
							delay: g,
							id: y,
							startedAt: Date.now(),
						},
						b = ff(f, y);
					c._snapshot._scheduledEvents[b] = v;
					const w = a.setTimeout(() => {
						delete s[b],
							delete c._snapshot._scheduledEvents[b],
							c._relay(f, p, h);
					}, g);
					s[b] = w;
				},
				cancel: (f, p) => {
					const h = ff(f, p),
						g = s[h];
					delete s[h],
						delete c._snapshot._scheduledEvents[h],
						g !== void 0 && a.clearTimeout(g);
				},
				cancelAll: (f) => {
					for (const p in c._snapshot._scheduledEvents) {
						const h = c._snapshot._scheduledEvents[p];
						h.source === f && u.cancel(f, h.id);
					}
				},
			},
			d = (f) => {
				if (!i.size) return;
				const p = { ...f, rootId: e.sessionId };
				i.forEach((h) => {
					var g;
					return (g = h.next) == null ? void 0 : g.call(h, p);
				});
			},
			c = {
				_snapshot: {
					_scheduledEvents:
						((t == null ? void 0 : t.snapshot) && t.snapshot.scheduler) ?? {},
				},
				_bookId: () => `x:${k$++}`,
				_register: (f, p) => (r.set(f, p), f),
				_unregister: (f) => {
					r.delete(f.sessionId);
					const p = o.get(f);
					p !== void 0 && (n.delete(p), o.delete(f));
				},
				get: (f) => n.get(f),
				_set: (f, p) => {
					const h = n.get(f);
					if (h && h !== p)
						throw new Error(`Actor with system ID '${f}' already exists.`);
					n.set(f, p), o.set(p, f);
				},
				inspect: (f) => {
					const p = qi(f);
					return (
						i.add(p),
						{
							unsubscribe() {
								i.delete(p);
							},
						}
					);
				},
				_sendInspectionEvent: d,
				_relay: (f, p, h) => {
					c._sendInspectionEvent({
						type: "@xstate.event",
						sourceRef: f,
						actorRef: p,
						event: h,
					}),
						p._send(h);
				},
				scheduler: u,
				getSnapshot: () => ({
					_scheduledEvents: { ...c._snapshot._scheduledEvents },
				}),
				start: () => {
					const f = c._snapshot._scheduledEvents;
					c._snapshot._scheduledEvents = {};
					for (const p in f) {
						const { source: h, target: g, event: y, delay: v, id: b } = f[p];
						u.schedule(h, g, y, v, b);
					}
				},
				_clock: a,
				_logger: l,
			};
		return c;
	}
	let dl = !1;
	const pl = 1;
	let Xe = (function (e) {
		return (
			(e[(e.NotStarted = 0)] = "NotStarted"),
			(e[(e.Running = 1)] = "Running"),
			(e[(e.Stopped = 2)] = "Stopped"),
			e
		);
	})({});
	const S$ = {
		clock: {
			setTimeout: (e, t) => setTimeout(e, t),
			clearTimeout: (e) => clearTimeout(e),
		},
		logger: console.log.bind(console),
		devTools: !1,
	};
	class hf {
		constructor(t, r) {
			(this.logic = t),
				(this._snapshot = void 0),
				(this.clock = void 0),
				(this.options = void 0),
				(this.id = void 0),
				(this.mailbox = new Qp(this._process.bind(this))),
				(this.observers = new Set()),
				(this.eventListeners = new Map()),
				(this.logger = void 0),
				(this._processingStatus = Xe.NotStarted),
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
			const n = { ...S$, ...r },
				{
					clock: o,
					logger: i,
					parent: s,
					syncSnapshot: a,
					id: l,
					systemId: u,
					inspect: d,
				} = n;
			(this.system = s ? s.system : _$(this, { clock: o, logger: i })),
				d && !s && this.system.inspect(qi(d)),
				(this.sessionId = this.system._bookId()),
				(this.id = l ?? this.sessionId),
				(this.logger = (r == null ? void 0 : r.logger) ?? this.system._logger),
				(this.clock = (r == null ? void 0 : r.clock) ?? this.system._clock),
				(this._parent = s),
				(this._syncSnapshot = a),
				(this.options = n),
				(this.src = n.src ?? t),
				(this.ref = this),
				(this._actorScope = {
					self: this,
					id: this.id,
					sessionId: this.sessionId,
					logger: this.logger,
					defer: (c) => {
						this._deferred.push(c);
					},
					system: this.system,
					stopChild: (c) => {
						if (c._parent !== this)
							throw new Error(
								`Cannot stop child actor ${c.id} of ${this.id} because it is not a child`,
							);
						c._stop();
					},
					emit: (c) => {
						const f = this.eventListeners.get(c.type),
							p = this.eventListeners.get("*");
						if (!f && !p) return;
						const h = [...(f ? f.values() : []), ...(p ? p.values() : [])];
						for (const g of h)
							try {
								g(c);
							} catch (y) {
								_t(y);
							}
					},
					actionExecutor: (c) => {
						const f = () => {
							if (
								(this._actorScope.system._sendInspectionEvent({
									type: "@xstate.action",
									actorRef: this,
									action: { type: c.type, params: c.params },
								}),
								!c.exec)
							)
								return;
							const p = dl;
							try {
								(dl = !0), c.exec(c.info, c.params);
							} finally {
								dl = p;
							}
						};
						this._processingStatus === Xe.Running
							? f()
							: this._deferred.push(f);
					},
				}),
				(this.send = this.send.bind(this)),
				this.system._sendInspectionEvent({
					type: "@xstate.actor",
					actorRef: this,
				}),
				u && ((this._systemId = u), this.system._set(u, this)),
				this._initState(
					(r == null ? void 0 : r.snapshot) ?? (r == null ? void 0 : r.state),
				),
				u &&
					this._snapshot.status !== "active" &&
					this.system._unregister(this);
		}
		_initState(t) {
			var r;
			try {
				this._snapshot = t
					? this.logic.restoreSnapshot
						? this.logic.restoreSnapshot(t, this._actorScope)
						: t
					: this.logic.getInitialSnapshot(
							this._actorScope,
							(r = this.options) == null ? void 0 : r.input,
						);
			} catch (n) {
				this._snapshot = { status: "error", output: void 0, error: n };
			}
		}
		update(t, r) {
			var o, i;
			this._snapshot = t;
			let n;
			for (; (n = this._deferred.shift()); )
				try {
					n();
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
							_t(a);
						}
					break;
				case "done":
					for (const s of this.observers)
						try {
							(i = s.next) == null || i.call(s, t);
						} catch (a) {
							_t(a);
						}
					this._stopProcedure(),
						this._complete(),
						(this._doneEvent = y$(this.id, this._snapshot.output)),
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
				event: r,
				snapshot: t,
			});
		}
		subscribe(t, r, n) {
			var i;
			const o = qi(t, r, n);
			if (this._processingStatus !== Xe.Stopped) this.observers.add(o);
			else
				switch (this._snapshot.status) {
					case "done":
						try {
							(i = o.complete) == null || i.call(o);
						} catch (s) {
							_t(s);
						}
						break;
					case "error": {
						const s = this._snapshot.error;
						if (!o.error) _t(s);
						else
							try {
								o.error(s);
							} catch (a) {
								_t(a);
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
		on(t, r) {
			let n = this.eventListeners.get(t);
			n || ((n = new Set()), this.eventListeners.set(t, n));
			const o = r.bind(void 0);
			return (
				n.add(o),
				{
					unsubscribe: () => {
						n.delete(o);
					},
				}
			);
		}
		start() {
			if (this._processingStatus === Xe.Running) return this;
			this._syncSnapshot &&
				this.subscribe({
					next: (n) => {
						n.status === "active" &&
							this.system._relay(this, this._parent, {
								type: `xstate.snapshot.${this.id}`,
								snapshot: n,
							});
					},
					error: () => {},
				}),
				this.system._register(this.sessionId, this),
				this._systemId && this.system._set(this._systemId, this),
				(this._processingStatus = Xe.Running);
			const t = of(this.options.input);
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
				} catch (n) {
					return (
						(this._snapshot = { ...this._snapshot, status: "error", error: n }),
						this._error(n),
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
			let r, n;
			try {
				r = this.logic.transition(this._snapshot, t, this._actorScope);
			} catch (o) {
				n = { err: o };
			}
			if (n) {
				const { err: o } = n;
				(this._snapshot = { ...this._snapshot, status: "error", error: o }),
					this._error(o);
				return;
			}
			this.update(r, t),
				t.type === Er && (this._stopProcedure(), this._complete());
		}
		_stop() {
			return this._processingStatus === Xe.Stopped
				? this
				: (this.mailbox.clear(),
					this._processingStatus === Xe.NotStarted
						? ((this._processingStatus = Xe.Stopped), this)
						: (this.mailbox.enqueue({ type: Er }), this));
		}
		stop() {
			if (this._parent)
				throw new Error("A non-root actor cannot be stopped directly.");
			return this._stop();
		}
		_complete() {
			var t;
			for (const r of this.observers)
				try {
					(t = r.complete) == null || t.call(r);
				} catch (n) {
					_t(n);
				}
			this.observers.clear();
		}
		_reportError(t) {
			if (!this.observers.size) {
				this._parent || _t(t);
				return;
			}
			let r = !1;
			for (const n of this.observers) {
				const o = n.error;
				r || (r = !o);
				try {
					o == null || o(t);
				} catch (i) {
					_t(i);
				}
			}
			this.observers.clear(), r && _t(t);
		}
		_error(t) {
			this._stopProcedure(),
				this._reportError(t),
				this._parent && this.system._relay(this, this._parent, nf(this.id, t));
		}
		_stopProcedure() {
			return this._processingStatus !== Xe.Running
				? this
				: (this.system.scheduler.cancelAll(this),
					this.mailbox.clear(),
					(this.mailbox = new Qp(this._process.bind(this))),
					(this._processingStatus = Xe.Stopped),
					this.system._unregister(this),
					this);
		}
		_send(t) {
			this._processingStatus !== Xe.Stopped && this.mailbox.enqueue(t);
		}
		send(t) {
			this.system._relay(void 0, this, t);
		}
		attachDevTools() {
			const { devTools: t } = this.options;
			t && (typeof t == "function" ? t : d$)(this);
		}
		toJSON() {
			return { xstate$$type: pl, id: this.id };
		}
		getPersistedSnapshot(t) {
			return this.logic.getPersistedSnapshot(this._snapshot, t);
		}
		[v$]() {
			return this;
		}
		getSnapshot() {
			return this._snapshot;
		}
	}
	function St(e, ...[t]) {
		return new hf(e, t);
	}
	const x$ = St;
	function $$(e, t, r, n, { sendId: o }) {
		const i = typeof o == "function" ? o(r, n) : o;
		return [t, { sendId: i }, void 0];
	}
	function C$(e, t) {
		e.defer(() => {
			e.system.scheduler.cancel(e.self, t.sendId);
		});
	}
	function fl(e) {
		function t(r, n) {}
		return (
			(t.type = "xstate.cancel"),
			(t.sendId = e),
			(t.resolve = $$),
			(t.execute = C$),
			t
		);
	}
	function z$(
		e,
		t,
		r,
		n,
		{ id: o, systemId: i, src: s, input: a, syncSnapshot: l },
	) {
		const u = typeof s == "string" ? cl(t.machine, s) : s,
			d = typeof o == "function" ? o(r) : o;
		let c, f;
		return (
			u &&
				((f =
					typeof a == "function"
						? a({ context: t.context, event: r.event, self: e.self })
						: a),
				(c = St(u, {
					id: d,
					src: s,
					parent: e.self,
					syncSnapshot: l,
					systemId: i,
					input: f,
				}))),
			[
				Pr(t, { children: { ...t.children, [d]: c } }),
				{ id: o, systemId: i, actorRef: c, src: s, input: f },
				void 0,
			]
		);
	}
	function I$(e, { actorRef: t }) {
		t &&
			e.defer(() => {
				t._processingStatus !== Xe.Stopped && t.start();
			});
	}
	function hl(
		...[e, { id: t, systemId: r, input: n, syncSnapshot: o = !1 } = {}]
	) {
		function i(s, a) {}
		return (
			(i.type = "xstate.spawnChild"),
			(i.id = t),
			(i.systemId = r),
			(i.src = e),
			(i.input = n),
			(i.syncSnapshot = o),
			(i.resolve = z$),
			(i.execute = I$),
			i
		);
	}
	function T$(e, t, r, n, { actorRef: o }) {
		const i = typeof o == "function" ? o(r, n) : o,
			s = typeof i == "string" ? t.children[i] : i;
		let a = t.children;
		return (
			s && ((a = { ...a }), delete a[s.id]), [Pr(t, { children: a }), s, void 0]
		);
	}
	function E$(e, t) {
		if (t) {
			if ((e.system._unregister(t), t._processingStatus !== Xe.Running)) {
				e.stopChild(t);
				return;
			}
			e.defer(() => {
				e.stopChild(t);
			});
		}
	}
	function nt(e) {
		function t(r, n) {}
		return (
			(t.type = "xstate.stopChild"),
			(t.actorRef = e),
			(t.resolve = T$),
			(t.execute = E$),
			t
		);
	}
	const A$ = nt;
	function R$(e, t, { stateValue: r }) {
		if (typeof r == "string" && wo(r)) {
			const n = e.machine.getStateNodeById(r);
			return e._nodes.some((o) => o === n);
		}
		return e.matches(r);
	}
	function O$(e) {
		function t() {
			return !1;
		}
		return (t.check = R$), (t.stateValue = e), t;
	}
	function P$(e, { context: t, event: r }, { guards: n }) {
		return !Ar(n[0], t, r, e);
	}
	function vo(e) {
		function t(r, n) {
			return !1;
		}
		return (t.check = P$), (t.guards = [e]), t;
	}
	function M$(e, { context: t, event: r }, { guards: n }) {
		return n.every((o) => Ar(o, t, r, e));
	}
	function Ut(e) {
		function t(r, n) {
			return !1;
		}
		return (t.check = M$), (t.guards = e), t;
	}
	function L$(e, { context: t, event: r }, { guards: n }) {
		return n.some((o) => Ar(o, t, r, e));
	}
	function N$(e) {
		function t(r, n) {
			return !1;
		}
		return (t.check = L$), (t.guards = e), t;
	}
	function Ar(e, t, r, n) {
		const { machine: o } = n,
			i = typeof e == "function",
			s = i ? e : o.implementations.guards[typeof e == "string" ? e : e.type];
		if (!i && !s)
			throw new Error(
				`Guard '${typeof e == "string" ? e : e.type}' is not implemented.'.`,
			);
		if (typeof s != "function") return Ar(s, t, r, n);
		const a = { context: t, event: r },
			l =
				i || typeof e == "string"
					? void 0
					: "params" in e
						? typeof e.params == "function"
							? e.params({ context: t, event: r })
							: e.params
						: void 0;
		return "check" in s ? s.check(n, a, s) : s(a, l);
	}
	const gl = (e) => e.type === "atomic" || e.type === "final";
	function fn(e) {
		return Object.values(e.states).filter((t) => t.type !== "history");
	}
	function bo(e, t) {
		const r = [];
		if (t === e) return r;
		let n = e.parent;
		for (; n && n !== t; ) r.push(n), (n = n.parent);
		return r;
	}
	function Wi(e) {
		const t = new Set(e),
			r = mf(t);
		for (const n of t)
			if (n.type === "compound" && (!r.get(n) || !r.get(n).length))
				bf(n).forEach((o) => t.add(o));
			else if (n.type === "parallel") {
				for (const o of fn(n))
					if (o.type !== "history" && !t.has(o)) {
						const i = bf(o);
						for (const s of i) t.add(s);
					}
			}
		for (const n of t) {
			let o = n.parent;
			for (; o; ) t.add(o), (o = o.parent);
		}
		return t;
	}
	function gf(e, t) {
		const r = t.get(e);
		if (!r) return {};
		if (e.type === "compound") {
			const o = r[0];
			if (o) {
				if (gl(o)) return o.key;
			} else return {};
		}
		const n = {};
		for (const o of r) n[o.key] = gf(o, t);
		return n;
	}
	function mf(e) {
		const t = new Map();
		for (const r of e)
			t.has(r) || t.set(r, []),
				r.parent &&
					(t.has(r.parent) || t.set(r.parent, []), t.get(r.parent).push(r));
		return t;
	}
	function yf(e, t) {
		const r = Wi(t);
		return gf(e, mf(r));
	}
	function ml(e, t) {
		return t.type === "compound"
			? fn(t).some((r) => r.type === "final" && e.has(r))
			: t.type === "parallel"
				? fn(t).every((r) => ml(e, r))
				: t.type === "final";
	}
	const wo = (e) => e[0] === f$;
	function D$(e, t) {
		return (
			e.transitions.get(t) ||
			[...e.transitions.keys()]
				.filter((n) => {
					if (n === h$) return !0;
					if (!n.endsWith(".*")) return !1;
					const o = n.split("."),
						i = t.split(".");
					for (let s = 0; s < o.length; s++) {
						const a = o[s],
							l = i[s];
						if (a === "*") return s === o.length - 1;
						if (a !== l) return !1;
					}
					return !0;
				})
				.sort((n, o) => o.length - n.length)
				.flatMap((n) => e.transitions.get(n))
		);
	}
	function j$(e) {
		const t = e.config.after;
		if (!t) return [];
		const r = (o) => {
			const i = m$(o, e.id),
				s = i.type;
			return e.entry.push(_o(i, { id: s, delay: o })), e.exit.push(fl(s)), s;
		};
		return Object.keys(t)
			.flatMap((o) => {
				const i = t[o],
					s = typeof i == "string" ? { target: i } : i,
					a = Number.isNaN(+o) ? o : +o,
					l = r(a);
				return Bt(s).map((u) => ({ ...u, event: l, delay: a }));
			})
			.map((o) => {
				const { delay: i } = o;
				return { ...Rr(e, o.event, o), delay: i };
			});
	}
	function Rr(e, t, r) {
		const n = df(r.target),
			o = r.reenter ?? !1,
			i = F$(e, n),
			s = {
				...r,
				actions: Bt(r.actions),
				guard: r.guard,
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
	function B$(e) {
		const t = new Map();
		if (e.config.on)
			for (const r of Object.keys(e.config.on)) {
				if (r === tf)
					throw new Error(
						'Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.',
					);
				const n = e.config.on[r];
				t.set(
					r,
					pn(n).map((o) => Rr(e, r, o)),
				);
			}
		if (e.config.onDone) {
			const r = `xstate.done.state.${e.id}`;
			t.set(
				r,
				pn(e.config.onDone).map((n) => Rr(e, r, n)),
			);
		}
		for (const r of e.invoke) {
			if (r.onDone) {
				const n = `xstate.done.actor.${r.id}`;
				t.set(
					n,
					pn(r.onDone).map((o) => Rr(e, n, o)),
				);
			}
			if (r.onError) {
				const n = `xstate.error.actor.${r.id}`;
				t.set(
					n,
					pn(r.onError).map((o) => Rr(e, n, o)),
				);
			}
			if (r.onSnapshot) {
				const n = `xstate.snapshot.${r.id}`;
				t.set(
					n,
					pn(r.onSnapshot).map((o) => Rr(e, n, o)),
				);
			}
		}
		for (const r of e.after) {
			let n = t.get(r.eventType);
			n || ((n = []), t.set(r.eventType, n)), n.push(r);
		}
		return t;
	}
	function U$(e, t) {
		const r =
			typeof t == "string" ? e.states[t] : t ? e.states[t.target] : void 0;
		if (!r && t)
			throw new Error(
				`Initial state node "${t}" not found on parent state node #${e.id}`,
			);
		const n = {
			source: e,
			actions: !t || typeof t == "string" ? [] : Bt(t.actions),
			eventType: null,
			reenter: !1,
			target: r ? [r] : [],
			toJSON: () => ({
				...n,
				source: `#${e.id}`,
				target: r ? [`#${r.id}`] : [],
			}),
		};
		return n;
	}
	function F$(e, t) {
		if (t !== void 0)
			return t.map((r) => {
				if (typeof r != "string") return r;
				if (wo(r)) return e.machine.getStateNodeById(r);
				const n = r[0] === ef;
				if (n && !e.parent) return Ki(e, r.slice(1));
				const o = n ? e.key + r : r;
				if (e.parent)
					try {
						return Ki(e.parent, o);
					} catch (i) {
						throw new Error(`Invalid transition definition for state node '${e.id}':
${i.message}`);
					}
				else
					throw new Error(
						`Invalid target: "${r}" is not a valid target from the root node. Did you mean ".${r}"?`,
					);
			});
	}
	function vf(e) {
		const t = df(e.config.target);
		return t
			? { target: t.map((r) => (typeof r == "string" ? Ki(e.parent, r) : r)) }
			: e.parent.initial;
	}
	function Or(e) {
		return e.type === "history";
	}
	function bf(e) {
		const t = wf(e);
		for (const r of t) for (const n of bo(r, e)) t.add(n);
		return t;
	}
	function wf(e) {
		const t = new Set();
		function r(n) {
			if (!t.has(n)) {
				if ((t.add(n), n.type === "compound")) r(n.initial.target[0]);
				else if (n.type === "parallel") for (const o of fn(n)) r(o);
			}
		}
		return r(e), t;
	}
	function hn(e, t) {
		if (wo(t)) return e.machine.getStateNodeById(t);
		if (!e.states)
			throw new Error(
				`Unable to retrieve child state '${t}' from '${e.id}'; no child states exist.`,
			);
		const r = e.states[t];
		if (!r) throw new Error(`Child state '${t}' does not exist on '${e.id}'`);
		return r;
	}
	function Ki(e, t) {
		if (typeof t == "string" && wo(t))
			try {
				return e.machine.getStateNodeById(t);
			} catch {}
		const r = ll(t).slice();
		let n = e;
		for (; r.length; ) {
			const o = r.shift();
			if (!o.length) break;
			n = hn(n, o);
		}
		return n;
	}
	function ko(e, t) {
		if (typeof t == "string") {
			const o = e.states[t];
			if (!o) throw new Error(`State '${t}' does not exist on '${e.id}'`);
			return [e, o];
		}
		const r = Object.keys(t),
			n = r.map((o) => hn(e, o)).filter(Boolean);
		return [e.machine.root, e].concat(
			n,
			r.reduce((o, i) => {
				const s = hn(e, i);
				if (!s) return o;
				const a = ko(s, t[i]);
				return o.concat(a);
			}, []),
		);
	}
	function H$(e, t, r, n) {
		const i = hn(e, t).next(r, n);
		return !i || !i.length ? e.next(r, n) : i;
	}
	function V$(e, t, r, n) {
		const o = Object.keys(t),
			i = hn(e, o[0]),
			s = yl(i, t[o[0]], r, n);
		return !s || !s.length ? e.next(r, n) : s;
	}
	function Z$(e, t, r, n) {
		const o = [];
		for (const i of Object.keys(t)) {
			const s = t[i];
			if (!s) continue;
			const a = hn(e, i),
				l = yl(a, s, r, n);
			l && o.push(...l);
		}
		return o.length ? o : e.next(r, n);
	}
	function yl(e, t, r, n) {
		return typeof t == "string"
			? H$(e, t, r, n)
			: Object.keys(t).length === 1
				? V$(e, t, r, n)
				: Z$(e, t, r, n);
	}
	function q$(e) {
		return Object.keys(e.states)
			.map((t) => e.states[t])
			.filter((t) => t.type === "history");
	}
	function or(e, t) {
		let r = e;
		for (; r.parent && r.parent !== t; ) r = r.parent;
		return r.parent === t;
	}
	function W$(e, t) {
		const r = new Set(e),
			n = new Set(t);
		for (const o of r) if (n.has(o)) return !0;
		for (const o of n) if (r.has(o)) return !0;
		return !1;
	}
	function kf(e, t, r) {
		const n = new Set();
		for (const o of e) {
			let i = !1;
			const s = new Set();
			for (const a of n)
				if (W$(bl([o], t, r), bl([a], t, r)))
					if (or(o.source, a.source)) s.add(a);
					else {
						i = !0;
						break;
					}
			if (!i) {
				for (const a of s) n.delete(a);
				n.add(o);
			}
		}
		return Array.from(n);
	}
	function K$(e) {
		const [t, ...r] = e;
		for (const n of bo(t, void 0)) if (r.every((o) => or(o, n))) return n;
	}
	function vl(e, t) {
		if (!e.target) return [];
		const r = new Set();
		for (const n of e.target)
			if (Or(n))
				if (t[n.id]) for (const o of t[n.id]) r.add(o);
				else for (const o of vl(vf(n), t)) r.add(o);
			else r.add(n);
		return [...r];
	}
	function _f(e, t) {
		const r = vl(e, t);
		if (!r) return;
		if (!e.reenter && r.every((o) => o === e.source || or(o, e.source)))
			return e.source;
		const n = K$(r.concat(e.source));
		if (n) return n;
		if (!e.reenter) return e.source.machine.root;
	}
	function bl(e, t, r) {
		var o;
		const n = new Set();
		for (const i of e)
			if ((o = i.target) != null && o.length) {
				const s = _f(i, r);
				i.reenter && i.source === s && n.add(s);
				for (const a of t) or(a, s) && n.add(a);
			}
		return [...n];
	}
	function J$(e, t) {
		if (e.length !== t.size) return !1;
		for (const r of e) if (!t.has(r)) return !1;
		return !0;
	}
	function wl(e, t, r, n, o, i) {
		if (!e.length) return t;
		const s = new Set(t._nodes);
		let a = t.historyValue;
		const l = kf(e, s, a);
		let u = t;
		o || ([u, a] = Q$(u, n, r, l, s, a, i, r.actionExecutor)),
			(u = mn(
				u,
				n,
				r,
				l.flatMap((c) => c.actions),
				i,
				void 0,
			)),
			(u = Y$(u, n, r, l, s, i, a, o));
		const d = [...s];
		u.status === "done" &&
			(u = mn(
				u,
				n,
				r,
				d.sort((c, f) => f.order - c.order).flatMap((c) => c.exit),
				i,
				void 0,
			));
		try {
			return a === t.historyValue && J$(t._nodes, s)
				? u
				: Pr(u, { _nodes: d, historyValue: a });
		} catch (c) {
			throw c;
		}
	}
	function G$(e, t, r, n, o) {
		if (n.output === void 0) return;
		const i = sl(
			o.id,
			o.output !== void 0 && o.parent
				? ul(o.output, e.context, t, r.self)
				: void 0,
		);
		return ul(n.output, e.context, i, r.self);
	}
	function Y$(e, t, r, n, o, i, s, a) {
		let l = e;
		const u = new Set(),
			d = new Set();
		X$(n, s, d, u), a && d.add(e.machine.root);
		const c = new Set();
		for (const f of [...u].sort((p, h) => p.order - h.order)) {
			o.add(f);
			const p = [];
			p.push(...f.entry);
			for (const h of f.invoke)
				p.push(hl(h.src, { ...h, syncSnapshot: !!h.onSnapshot }));
			if (d.has(f)) {
				const h = f.initial.actions;
				p.push(...h);
			}
			if (
				((l = mn(
					l,
					t,
					r,
					p,
					i,
					f.invoke.map((h) => h.id),
				)),
				f.type === "final")
			) {
				const h = f.parent;
				let g =
						(h == null ? void 0 : h.type) === "parallel"
							? h
							: h == null
								? void 0
								: h.parent,
					y = g || f;
				for (
					(h == null ? void 0 : h.type) === "compound" &&
					i.push(
						sl(
							h.id,
							f.output !== void 0 ? ul(f.output, l.context, t, r.self) : void 0,
						),
					);
					(g == null ? void 0 : g.type) === "parallel" && !c.has(g) && ml(o, g);
				)
					c.add(g), i.push(sl(g.id)), (y = g), (g = g.parent);
				if (g) continue;
				l = Pr(l, { status: "done", output: G$(l, t, r, l.machine.root, y) });
			}
		}
		return l;
	}
	function X$(e, t, r, n) {
		for (const o of e) {
			const i = _f(o, t);
			for (const a of o.target || [])
				!Or(a) &&
					(o.source !== a || o.source !== i || o.reenter) &&
					(n.add(a), r.add(a)),
					gn(a, t, r, n);
			const s = vl(o, t);
			for (const a of s) {
				const l = bo(a, i);
				(i == null ? void 0 : i.type) === "parallel" && l.push(i),
					Sf(n, t, r, l, !o.source.parent && o.reenter ? void 0 : i);
			}
		}
	}
	function gn(e, t, r, n) {
		var o;
		if (Or(e))
			if (t[e.id]) {
				const i = t[e.id];
				for (const s of i) n.add(s), gn(s, t, r, n);
				for (const s of i) kl(s, e.parent, n, t, r);
			} else {
				const i = vf(e);
				for (const s of i.target)
					n.add(s),
						i === ((o = e.parent) == null ? void 0 : o.initial) &&
							r.add(e.parent),
						gn(s, t, r, n);
				for (const s of i.target) kl(s, e.parent, n, t, r);
			}
		else if (e.type === "compound") {
			const [i] = e.initial.target;
			Or(i) || (n.add(i), r.add(i)), gn(i, t, r, n), kl(i, e, n, t, r);
		} else if (e.type === "parallel")
			for (const i of fn(e).filter((s) => !Or(s)))
				[...n].some((s) => or(s, i)) ||
					(Or(i) || (n.add(i), r.add(i)), gn(i, t, r, n));
	}
	function Sf(e, t, r, n, o) {
		for (const i of n)
			if (((!o || or(i, o)) && e.add(i), i.type === "parallel"))
				for (const s of fn(i).filter((a) => !Or(a)))
					[...e].some((a) => or(a, s)) || (e.add(s), gn(s, t, r, e));
	}
	function kl(e, t, r, n, o) {
		Sf(r, n, o, bo(e, t));
	}
	function Q$(e, t, r, n, o, i, s, a) {
		let l = e;
		const u = bl(n, o, i);
		u.sort((c, f) => f.order - c.order);
		let d;
		for (const c of u)
			for (const f of q$(c)) {
				let p;
				f.history === "deep"
					? (p = (h) => gl(h) && or(h, c))
					: (p = (h) => h.parent === c),
					d ?? (d = { ...i }),
					(d[f.id] = Array.from(o).filter(p));
			}
		for (const c of u)
			(l = mn(
				l,
				t,
				r,
				[...c.exit, ...c.invoke.map((f) => nt(f.id))],
				s,
				void 0,
			)),
				o.delete(c);
		return [l, d || i];
	}
	function eC(e, t) {
		return e.implementations.actions[t];
	}
	function xf(e, t, r, n, o, i) {
		const { machine: s } = e;
		let a = e;
		for (const l of n) {
			const u = typeof l == "function",
				d = u ? l : eC(s, typeof l == "string" ? l : l.type),
				c = { context: a.context, event: t, self: r.self, system: r.system },
				f =
					u || typeof l == "string"
						? void 0
						: "params" in l
							? typeof l.params == "function"
								? l.params({ context: a.context, event: t })
								: l.params
							: void 0;
			if (!d || !("resolve" in d)) {
				r.actionExecutor({
					type:
						typeof l == "string"
							? l
							: typeof l == "object"
								? l.type
								: l.name || "(anonymous)",
					info: c,
					params: f,
					exec: d,
				});
				continue;
			}
			const p = d,
				[h, g, y] = p.resolve(r, a, c, f, d, o);
			(a = h),
				"retryResolve" in p && (i == null || i.push([p, g])),
				"execute" in p &&
					r.actionExecutor({
						type: p.type,
						info: c,
						params: g,
						exec: p.execute.bind(null, r, g),
					}),
				y && (a = xf(a, t, r, y, o, i));
		}
		return a;
	}
	function mn(e, t, r, n, o, i) {
		const s = i ? [] : void 0,
			a = xf(e, t, r, n, { internalQueue: o, deferredActorIds: i }, s);
		return (
			s == null ||
				s.forEach(([l, u]) => {
					l.retryResolve(r, a, u);
				}),
			a
		);
	}
	function _l(e, t, r, n) {
		let o = e;
		const i = [];
		function s(u, d, c) {
			r.system._sendInspectionEvent({
				type: "@xstate.microstep",
				actorRef: r.self,
				event: d,
				snapshot: u,
				_transitions: c,
			}),
				i.push(u);
		}
		if (t.type === Er)
			return (
				(o = Pr($f(o, t, r), { status: "stopped" })),
				s(o, t, []),
				{ snapshot: o, microstates: i }
			);
		let a = t;
		if (a.type !== rf) {
			const u = a,
				d = b$(u),
				c = Cf(u, o);
			if (d && !c.length)
				return (
					(o = Pr(e, { status: "error", error: u.error })),
					s(o, u, []),
					{ snapshot: o, microstates: i }
				);
			(o = wl(c, e, r, a, !1, n)), s(o, u, c);
		}
		let l = !0;
		for (; o.status === "active"; ) {
			let u = l ? tC(o, a) : [];
			const d = u.length ? o : void 0;
			if (!u.length) {
				if (!n.length) break;
				(a = n.shift()), (u = Cf(a, o));
			}
			(o = wl(u, o, r, a, !1, n)), (l = o !== d), s(o, a, u);
		}
		return (
			o.status !== "active" && $f(o, a, r), { snapshot: o, microstates: i }
		);
	}
	function $f(e, t, r) {
		return mn(
			e,
			t,
			r,
			Object.values(e.children).map((n) => nt(n)),
			[],
			void 0,
		);
	}
	function Cf(e, t) {
		return t.machine.getTransitionData(t, e);
	}
	function tC(e, t) {
		const r = new Set(),
			n = e._nodes.filter(gl);
		for (const o of n)
			e: for (const i of [o].concat(bo(o, void 0)))
				if (i.always) {
					for (const s of i.always)
						if (s.guard === void 0 || Ar(s.guard, e.context, t, e)) {
							r.add(s);
							break e;
						}
				}
		return kf(Array.from(r), new Set(e._nodes), e.historyValue);
	}
	function rC(e, t) {
		const r = Wi(ko(e, t));
		return yf(e, [...r]);
	}
	function zf(e) {
		return !!e && typeof e == "object" && "machine" in e && "value" in e;
	}
	const nC = function (t) {
			return al(t, this.value);
		},
		oC = function (t) {
			return this.tags.has(t);
		},
		iC = function (t) {
			const r = this.machine.getTransitionData(this, t);
			return (
				!!(r != null && r.length) &&
				r.some((n) => n.target !== void 0 || n.actions.length)
			);
		},
		sC = function () {
			const {
				_nodes: t,
				tags: r,
				machine: n,
				getMeta: o,
				toJSON: i,
				can: s,
				hasTag: a,
				matches: l,
				...u
			} = this;
			return { ...u, tags: Array.from(r) };
		},
		aC = function () {
			return this._nodes.reduce(
				(t, r) => (r.meta !== void 0 && (t[r.id] = r.meta), t),
				{},
			);
		};
	function Ji(e, t) {
		return {
			status: e.status,
			output: e.output,
			error: e.error,
			machine: t,
			context: e.context,
			_nodes: e._nodes,
			value: yf(t.root, e._nodes),
			tags: new Set(e._nodes.flatMap((r) => r.tags)),
			children: e.children,
			historyValue: e.historyValue || {},
			matches: nC,
			hasTag: oC,
			can: iC,
			getMeta: aC,
			toJSON: sC,
		};
	}
	function Pr(e, t = {}) {
		return Ji({ ...e, ...t }, e.machine);
	}
	function lC(e) {
		if (typeof e != "object" || e === null) return {};
		const t = {};
		for (const r in e) {
			const n = e[r];
			Array.isArray(n) && (t[r] = n.map((o) => ({ id: o.id })));
		}
		return t;
	}
	function uC(e, t) {
		const {
				_nodes: r,
				tags: n,
				machine: o,
				children: i,
				context: s,
				can: a,
				hasTag: l,
				matches: u,
				getMeta: d,
				toJSON: c,
				...f
			} = e,
			p = {};
		for (const g in i) {
			const y = i[g];
			p[g] = {
				snapshot: y.getPersistedSnapshot(t),
				src: y.src,
				systemId: y._systemId,
				syncSnapshot: y._syncSnapshot,
			};
		}
		return {
			...f,
			context: If(s),
			children: p,
			historyValue: lC(f.historyValue),
		};
	}
	function If(e) {
		let t;
		for (const r in e) {
			const n = e[r];
			if (n && typeof n == "object")
				if ("sessionId" in n && "send" in n && "ref" in n)
					t ?? (t = Array.isArray(e) ? e.slice() : { ...e }),
						(t[r] = { xstate$$type: pl, id: n.id });
				else {
					const o = If(n);
					o !== n &&
						(t ?? (t = Array.isArray(e) ? e.slice() : { ...e }), (t[r] = o));
				}
		}
		return t ?? e;
	}
	function cC(e, t, r, n, { event: o, id: i, delay: s }, { internalQueue: a }) {
		const l = t.machine.implementations.delays;
		if (typeof o == "string")
			throw new Error(
				`Only event objects may be used with raise; use raise({ type: "${o}" }) instead`,
			);
		const u = typeof o == "function" ? o(r, n) : o;
		let d;
		if (typeof s == "string") {
			const c = l && l[s];
			d = typeof c == "function" ? c(r, n) : c;
		} else d = typeof s == "function" ? s(r, n) : s;
		return (
			typeof d != "number" && a.push(u),
			[t, { event: u, id: i, delay: d }, void 0]
		);
	}
	function dC(e, t) {
		const { event: r, delay: n, id: o } = t;
		if (typeof n == "number") {
			e.defer(() => {
				const i = e.self;
				e.system.scheduler.schedule(i, i, r, n, o);
			});
			return;
		}
	}
	function _o(e, t) {
		function r(n, o) {}
		return (
			(r.type = "xstate.raise"),
			(r.event = e),
			(r.id = t == null ? void 0 : t.id),
			(r.delay = t == null ? void 0 : t.delay),
			(r.resolve = cC),
			(r.execute = dC),
			r
		);
	}
	function Tf(e, t) {
		return {
			config: e,
			transition: (r, n, o) => ({ ...r, context: e(r.context, n, o) }),
			getInitialSnapshot: (r, n) => ({
				status: "active",
				output: void 0,
				error: void 0,
				context: typeof t == "function" ? t({ input: n }) : t,
			}),
			getPersistedSnapshot: (r) => r,
			restoreSnapshot: (r) => r,
		};
	}
	const Ef = new WeakMap();
	function pC(e) {
		return {
			config: e,
			start: (r, n) => {
				const { self: o, system: i, emit: s } = n,
					a = { receivers: void 0, dispose: void 0 };
				Ef.set(o, a),
					(a.dispose = e({
						input: r.input,
						system: i,
						self: o,
						sendBack: (l) => {
							o.getSnapshot().status !== "stopped" &&
								o._parent &&
								i._relay(o, o._parent, l);
						},
						receive: (l) => {
							a.receivers ?? (a.receivers = new Set()), a.receivers.add(l);
						},
						emit: s,
					}));
			},
			transition: (r, n, o) => {
				var s, a;
				const i = Ef.get(o.self);
				return n.type === Er
					? ((r = { ...r, status: "stopped", error: void 0 }),
						(s = i.dispose) == null || s.call(i),
						r)
					: ((a = i.receivers) == null || a.forEach((l) => l(n)), r);
			},
			getInitialSnapshot: (r, n) => ({
				status: "active",
				output: void 0,
				error: void 0,
				input: n,
			}),
			getPersistedSnapshot: (r) => r,
			restoreSnapshot: (r) => r,
		};
	}
	const Af = "xstate.observable.next",
		Gi = "xstate.observable.error",
		Yi = "xstate.observable.complete";
	function fC(e) {
		return {
			config: e,
			transition: (r, n) => {
				if (r.status !== "active") return r;
				switch (n.type) {
					case Af:
						return { ...r, context: n.data };
					case Gi:
						return {
							...r,
							status: "error",
							error: n.data,
							input: void 0,
							_subscription: void 0,
						};
					case Yi:
						return {
							...r,
							status: "done",
							input: void 0,
							_subscription: void 0,
						};
					case Er:
						return (
							r._subscription.unsubscribe(),
							{ ...r, status: "stopped", input: void 0, _subscription: void 0 }
						);
					default:
						return r;
				}
			},
			getInitialSnapshot: (r, n) => ({
				status: "active",
				output: void 0,
				error: void 0,
				context: void 0,
				input: n,
				_subscription: void 0,
			}),
			start: (r, { self: n, system: o, emit: i }) => {
				r.status !== "done" &&
					(r._subscription = e({
						input: r.input,
						system: o,
						self: n,
						emit: i,
					}).subscribe({
						next: (s) => {
							o._relay(n, n, { type: Af, data: s });
						},
						error: (s) => {
							o._relay(n, n, { type: Gi, data: s });
						},
						complete: () => {
							o._relay(n, n, { type: Yi });
						},
					}));
			},
			getPersistedSnapshot: ({ _subscription: r, ...n }) => n,
			restoreSnapshot: (r) => ({ ...r, _subscription: void 0 }),
		};
	}
	function hC(e) {
		return {
			config: e,
			transition: (r, n) => {
				if (r.status !== "active") return r;
				switch (n.type) {
					case Gi:
						return {
							...r,
							status: "error",
							error: n.data,
							input: void 0,
							_subscription: void 0,
						};
					case Yi:
						return {
							...r,
							status: "done",
							input: void 0,
							_subscription: void 0,
						};
					case Er:
						return (
							r._subscription.unsubscribe(),
							{ ...r, status: "stopped", input: void 0, _subscription: void 0 }
						);
					default:
						return r;
				}
			},
			getInitialSnapshot: (r, n) => ({
				status: "active",
				output: void 0,
				error: void 0,
				context: void 0,
				input: n,
				_subscription: void 0,
			}),
			start: (r, { self: n, system: o, emit: i }) => {
				r.status !== "done" &&
					(r._subscription = e({
						input: r.input,
						system: o,
						self: n,
						emit: i,
					}).subscribe({
						next: (s) => {
							n._parent && o._relay(n, n._parent, s);
						},
						error: (s) => {
							o._relay(n, n, { type: Gi, data: s });
						},
						complete: () => {
							o._relay(n, n, { type: Yi });
						},
					}));
			},
			getPersistedSnapshot: ({ _subscription: r, ...n }) => n,
			restoreSnapshot: (r) => ({ ...r, _subscription: void 0 }),
		};
	}
	const Rf = "xstate.promise.resolve",
		Of = "xstate.promise.reject",
		Xi = new WeakMap();
	function Ve(e) {
		return {
			config: e,
			transition: (r, n, o) => {
				var i;
				if (r.status !== "active") return r;
				switch (n.type) {
					case Rf: {
						const s = n.data;
						return { ...r, status: "done", output: s, input: void 0 };
					}
					case Of:
						return { ...r, status: "error", error: n.data, input: void 0 };
					case Er:
						return (
							(i = Xi.get(o.self)) == null || i.abort(),
							{ ...r, status: "stopped", input: void 0 }
						);
					default:
						return r;
				}
			},
			start: (r, { self: n, system: o, emit: i }) => {
				if (r.status !== "active") return;
				const s = new AbortController();
				Xi.set(n, s),
					Promise.resolve(
						e({
							input: r.input,
							system: o,
							self: n,
							signal: s.signal,
							emit: i,
						}),
					).then(
						(l) => {
							n.getSnapshot().status === "active" &&
								(Xi.delete(n), o._relay(n, n, { type: Rf, data: l }));
						},
						(l) => {
							n.getSnapshot().status === "active" &&
								(Xi.delete(n), o._relay(n, n, { type: Of, data: l }));
						},
					);
			},
			getInitialSnapshot: (r, n) => ({
				status: "active",
				output: void 0,
				error: void 0,
				input: n,
			}),
			getPersistedSnapshot: (r) => r,
			restoreSnapshot: (r) => r,
		};
	}
	const gC = Tf((e) => {}, void 0);
	function mC() {
		return St(gC);
	}
	function yC(e, { machine: t, context: r }, n, o) {
		const i = (s, a) => {
			if (typeof s == "string") {
				const l = cl(t, s);
				if (!l)
					throw new Error(
						`Actor logic '${s}' not implemented in machine '${t.id}'`,
					);
				const u = St(l, {
					id: a == null ? void 0 : a.id,
					parent: e.self,
					syncSnapshot: a == null ? void 0 : a.syncSnapshot,
					input:
						typeof (a == null ? void 0 : a.input) == "function"
							? a.input({ context: r, event: n, self: e.self })
							: a == null
								? void 0
								: a.input,
					src: s,
					systemId: a == null ? void 0 : a.systemId,
				});
				return (o[u.id] = u), u;
			} else
				return St(s, {
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
					l._processingStatus !== Xe.Stopped && l.start();
				}),
				l
			);
		};
	}
	function vC(e, t, r, n, { assignment: o }) {
		if (!t.context)
			throw new Error(
				"Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.",
			);
		const i = {},
			s = {
				context: t.context,
				event: r.event,
				spawn: yC(e, t, r.event, i),
				self: e.self,
				system: e.system,
			};
		let a = {};
		if (typeof o == "function") a = o(s, n);
		else
			for (const u of Object.keys(o)) {
				const d = o[u];
				a[u] = typeof d == "function" ? d(s, n) : d;
			}
		const l = Object.assign({}, t.context, a);
		return [
			Pr(t, {
				context: l,
				children: Object.keys(i).length ? { ...t.children, ...i } : t.children,
			}),
			void 0,
			void 0,
		];
	}
	function L(e) {
		function t(r, n) {}
		return (t.type = "xstate.assign"), (t.assignment = e), (t.resolve = vC), t;
	}
	const Pf = new WeakMap();
	function yn(e, t, r) {
		let n = Pf.get(e);
		return (
			n ? t in n || (n[t] = r()) : ((n = { [t]: r() }), Pf.set(e, n)), n[t]
		);
	}
	const bC = {},
		So = (e) =>
			typeof e == "string"
				? { type: e }
				: typeof e == "function"
					? "resolve" in e
						? { type: e.type }
						: { type: e.name }
					: e;
	class xo {
		constructor(t, r) {
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
				(this.parent = r._parent),
				(this.key = r._key),
				(this.machine = r._machine),
				(this.path = this.parent ? this.parent.path.concat(this.key) : []),
				(this.id = this.config.id || [this.machine.id, ...this.path].join(ef)),
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
					? lf(
							this.config.states,
							(n, o) =>
								new xo(n, { _parent: this, _key: o, _machine: this.machine }),
						)
					: bC),
				this.type === "compound" && !this.config.initial)
			)
				throw new Error(
					`No initial state specified for compound state node "#${this.id}". Try adding { initial: "${Object.keys(this.states)[0]}" } to the state config.`,
				);
			(this.history =
				this.config.history === !0 ? "shallow" : this.config.history || !1),
				(this.entry = Bt(this.config.entry).slice()),
				(this.exit = Bt(this.config.exit).slice()),
				(this.meta = this.config.meta),
				(this.output =
					this.type === "final" || !this.parent ? this.config.output : void 0),
				(this.tags = Bt(t.tags).slice());
		}
		_initialize() {
			(this.transitions = B$(this)),
				this.config.always &&
					(this.always = pn(this.config.always).map((t) => Rr(this, tf, t))),
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
							actions: this.initial.actions.map(So),
							eventType: null,
							reenter: !1,
							toJSON: () => ({
								target: this.initial.target.map((t) => `#${t.id}`),
								source: `#${this.id}`,
								actions: this.initial.actions.map(So),
								eventType: null,
							}),
						}
					: void 0,
				history: this.history,
				states: lf(this.states, (t) => t.definition),
				on: this.on,
				transitions: [...this.transitions.values()]
					.flat()
					.map((t) => ({ ...t, actions: t.actions.map(So) })),
				entry: this.entry.map(So),
				exit: this.exit.map(So),
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
			return yn(this, "invoke", () =>
				Bt(this.config.invoke).map((t, r) => {
					const { src: n, systemId: o } = t,
						i = t.id ?? pf(this.id, r),
						s = typeof n == "string" ? n : `xstate.invoke.${pf(this.id, r)}`;
					return {
						...t,
						src: s,
						id: i,
						systemId: o,
						toJSON() {
							const { onDone: a, onError: l, ...u } = t;
							return { ...u, type: "xstate.invoke", src: s, id: i };
						},
					};
				}),
			);
		}
		get on() {
			return yn(this, "on", () =>
				[...this.transitions]
					.flatMap(([r, n]) => n.map((o) => [r, o]))
					.reduce((r, [n, o]) => ((r[n] = r[n] || []), r[n].push(o), r), {}),
			);
		}
		get after() {
			return yn(this, "delayedTransitions", () => j$(this));
		}
		get initial() {
			return yn(this, "initial", () => U$(this, this.config.initial));
		}
		next(t, r) {
			const n = r.type,
				o = [];
			let i;
			const s = yn(this, `candidates-${n}`, () => D$(this, n));
			for (const a of s) {
				const { guard: l } = a,
					u = t.context;
				let d = !1;
				try {
					d = !l || Ar(l, u, r, t);
				} catch (c) {
					const f =
						typeof l == "string" ? l : typeof l == "object" ? l.type : void 0;
					throw new Error(`Unable to evaluate guard ${f ? `'${f}' ` : ""}in transition for event '${n}' in state node '${this.id}':
${c.message}`);
				}
				if (d) {
					o.push(...a.actions), (i = a);
					break;
				}
			}
			return i ? [i] : void 0;
		}
		get events() {
			return yn(this, "events", () => {
				const { states: t } = this,
					r = new Set(this.ownEvents);
				if (t)
					for (const n of Object.keys(t)) {
						const o = t[n];
						if (o.states) for (const i of o.events) r.add(`${i}`);
					}
				return Array.from(r);
			});
		}
		get ownEvents() {
			const t = new Set(
				[...this.transitions.keys()].filter((r) =>
					this.transitions
						.get(r)
						.some((n) => !(!n.target && !n.actions.length && !n.reenter)),
				),
			);
			return Array.from(t);
		}
	}
	const wC = "#";
	class Qi {
		constructor(t, r) {
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
					actors: (r == null ? void 0 : r.actors) ?? {},
					actions: (r == null ? void 0 : r.actions) ?? {},
					delays: (r == null ? void 0 : r.delays) ?? {},
					guards: (r == null ? void 0 : r.guards) ?? {},
				}),
				(this.version = this.config.version),
				(this.schemas = this.config.schemas),
				(this.transition = this.transition.bind(this)),
				(this.getInitialSnapshot = this.getInitialSnapshot.bind(this)),
				(this.getPersistedSnapshot = this.getPersistedSnapshot.bind(this)),
				(this.restoreSnapshot = this.restoreSnapshot.bind(this)),
				(this.start = this.start.bind(this)),
				(this.root = new xo(t, { _key: this.id, _machine: this })),
				this.root._initialize(),
				(this.states = this.root.states),
				(this.events = this.root.events);
		}
		provide(t) {
			const {
				actions: r,
				guards: n,
				actors: o,
				delays: i,
			} = this.implementations;
			return new Qi(this.config, {
				actions: { ...r, ...t.actions },
				guards: { ...n, ...t.guards },
				actors: { ...o, ...t.actors },
				delays: { ...i, ...t.delays },
			});
		}
		resolveState(t) {
			const r = rC(this.root, t.value),
				n = Wi(ko(this.root, r));
			return Ji(
				{
					_nodes: [...n],
					context: t.context || {},
					children: {},
					status: ml(n, this.root) ? "done" : t.status || "active",
					output: t.output,
					error: t.error,
					historyValue: t.historyValue,
				},
				this,
			);
		}
		transition(t, r, n) {
			return _l(t, r, n, []).snapshot;
		}
		microstep(t, r, n) {
			return _l(t, r, n, []).microstates;
		}
		getTransitionData(t, r) {
			return yl(this.root, t.value, t, r) || [];
		}
		getPreInitialState(t, r, n) {
			const { context: o } = this.config,
				i = Ji(
					{
						context: typeof o != "function" && o ? o : {},
						_nodes: [this.root],
						children: {},
						status: "active",
					},
					this,
				);
			return typeof o == "function"
				? mn(
						i,
						r,
						t,
						[
							L(({ spawn: a, event: l, self: u }) =>
								o({ spawn: a, input: l.input, self: u }),
							),
						],
						n,
						void 0,
					)
				: i;
		}
		getInitialSnapshot(t, r) {
			const n = of(r),
				o = [],
				i = this.getPreInitialState(t, n, o),
				s = wl(
					[
						{
							target: [...wf(this.root)],
							source: this.root,
							reenter: !0,
							actions: [],
							eventType: null,
							toJSON: null,
						},
					],
					i,
					t,
					n,
					!0,
					o,
				),
				{ snapshot: a } = _l(s, n, t, o);
			return a;
		}
		start(t) {
			Object.values(t.children).forEach((r) => {
				r.getSnapshot().status === "active" && r.start();
			});
		}
		getStateNodeById(t) {
			const r = ll(t),
				n = r.slice(1),
				o = wo(r[0]) ? r[0].slice(wC.length) : r[0],
				i = this.idMap.get(o);
			if (!i)
				throw new Error(
					`Child state node '#${o}' does not exist on machine '${this.id}'`,
				);
			return Ki(i, n);
		}
		get definition() {
			return this.root.definition;
		}
		toJSON() {
			return this.definition;
		}
		getPersistedSnapshot(t, r) {
			return uC(t, r);
		}
		restoreSnapshot(t, r) {
			const n = {},
				o = t.children;
			Object.keys(o).forEach((c) => {
				const f = o[c],
					p = f.snapshot,
					h = f.src,
					g = typeof h == "string" ? cl(this, h) : h;
				if (!g) return;
				const y = St(g, {
					id: c,
					parent: r.self,
					syncSnapshot: f.syncSnapshot,
					snapshot: p,
					src: h,
					systemId: f.systemId,
				});
				n[c] = y;
			});
			function i(c, f) {
				if (f instanceof xo) return f;
				try {
					return c.machine.getStateNodeById(f.id);
				} catch {}
			}
			function s(c, f) {
				if (!f || typeof f != "object") return {};
				const p = {};
				for (const h in f) {
					const g = f[h];
					for (const y of g) {
						const v = i(c, y);
						v && (p[h] ?? (p[h] = []), p[h].push(v));
					}
				}
				return p;
			}
			const a = s(this.root, t.historyValue),
				l = Ji(
					{
						...t,
						children: n,
						_nodes: Array.from(Wi(ko(this.root, t.value))),
						historyValue: a,
					},
					this,
				),
				u = new Set();
			function d(c, f) {
				if (!u.has(c)) {
					u.add(c);
					for (const p in c) {
						const h = c[p];
						if (h && typeof h == "object") {
							if ("xstate$$type" in h && h.xstate$$type === pl) {
								c[p] = f[h.id];
								continue;
							}
							d(h, f);
						}
					}
				}
			}
			return d(l.context, n), l;
		}
	}
	function kC(e, t, r, n, { event: o }) {
		const i = typeof o == "function" ? o(r, n) : o;
		return [t, { event: i }, void 0];
	}
	function _C(e, { event: t }) {
		e.defer(() => e.emit(t));
	}
	function Ne(e) {
		function t(r, n) {}
		return (
			(t.type = "xstate.emit"),
			(t.event = e),
			(t.resolve = kC),
			(t.execute = _C),
			t
		);
	}
	let es = (function (e) {
		return (e.Parent = "#_parent"), (e.Internal = "#_internal"), e;
	})({});
	function SC(e, t, r, n, { to: o, event: i, id: s, delay: a }, l) {
		var h;
		const u = t.machine.implementations.delays;
		if (typeof i == "string")
			throw new Error(
				`Only event objects may be used with sendTo; use sendTo({ type: "${i}" }) instead`,
			);
		const d = typeof i == "function" ? i(r, n) : i;
		let c;
		if (typeof a == "string") {
			const g = u && u[a];
			c = typeof g == "function" ? g(r, n) : g;
		} else c = typeof a == "function" ? a(r, n) : a;
		const f = typeof o == "function" ? o(r, n) : o;
		let p;
		if (typeof f == "string") {
			if (
				(f === es.Parent
					? (p = e.self._parent)
					: f === es.Internal
						? (p = e.self)
						: f.startsWith("#_")
							? (p = t.children[f.slice(2)])
							: (p =
									(h = l.deferredActorIds) != null && h.includes(f)
										? f
										: t.children[f]),
				!p)
			)
				throw new Error(
					`Unable to send event to actor '${f}' from machine '${t.machine.id}'.`,
				);
		} else p = f || e.self;
		return [
			t,
			{
				to: p,
				targetId: typeof f == "string" ? f : void 0,
				event: d,
				id: s,
				delay: c,
			},
			void 0,
		];
	}
	function xC(e, t, r) {
		typeof r.to == "string" && (r.to = t.children[r.to]);
	}
	function $C(e, t) {
		e.defer(() => {
			const { to: r, event: n, delay: o, id: i } = t;
			if (typeof o == "number") {
				e.system.scheduler.schedule(e.self, r, n, o, i);
				return;
			}
			e.system._relay(e.self, r, n.type === g$ ? nf(e.self.id, n.data) : n);
		});
	}
	function $o(e, t, r) {
		function n(o, i) {}
		return (
			(n.type = "xstate.sendTo"),
			(n.to = e),
			(n.event = t),
			(n.id = r == null ? void 0 : r.id),
			(n.delay = r == null ? void 0 : r.delay),
			(n.resolve = SC),
			(n.retryResolve = xC),
			(n.execute = $C),
			n
		);
	}
	function Sl(e, t) {
		return $o(es.Parent, e, t);
	}
	function CC(e, t) {
		return $o(e, ({ event: r }) => r, t);
	}
	function zC(e, t, r, n, { collect: o }) {
		const i = [],
			s = function (l) {
				i.push(l);
			};
		return (
			(s.assign = (...a) => {
				i.push(L(...a));
			}),
			(s.cancel = (...a) => {
				i.push(fl(...a));
			}),
			(s.raise = (...a) => {
				i.push(_o(...a));
			}),
			(s.sendTo = (...a) => {
				i.push($o(...a));
			}),
			(s.sendParent = (...a) => {
				i.push(Sl(...a));
			}),
			(s.spawnChild = (...a) => {
				i.push(hl(...a));
			}),
			(s.stopChild = (...a) => {
				i.push(nt(...a));
			}),
			(s.emit = (...a) => {
				i.push(Ne(...a));
			}),
			o(
				{
					context: r.context,
					event: r.event,
					enqueue: s,
					check: (a) => Ar(a, t.context, r.event, t),
					self: e.self,
					system: e.system,
				},
				n,
			),
			[t, void 0, i]
		);
	}
	function Mf(e) {
		function t(r, n) {}
		return (
			(t.type = "xstate.enqueueActions"), (t.collect = e), (t.resolve = zC), t
		);
	}
	function IC(e, t, r, n, { value: o, label: i }) {
		return [
			t,
			{ value: typeof o == "function" ? o(r, n) : o, label: i },
			void 0,
		];
	}
	function TC({ logger: e }, { value: t, label: r }) {
		r ? e(r, t) : e(t);
	}
	function EC(e = ({ context: r, event: n }) => ({ context: r, event: n }), t) {
		function r(n, o) {}
		return (
			(r.type = "xstate.log"),
			(r.value = e),
			(r.label = t),
			(r.resolve = IC),
			(r.execute = TC),
			r
		);
	}
	function ir(e, t) {
		const r = Bt(t);
		if (!r.includes(e.type)) {
			const n =
				r.length === 1 ? `type "${r[0]}"` : `one of types "${r.join('", "')}"`;
			throw new Error(`Expected event ${JSON.stringify(e)} to have ${n}`);
		}
	}
	function Lf(e, t) {
		return new Qi(e, t);
	}
	function ts(e) {
		const t = St(e);
		return {
			self: t,
			defer: () => {},
			id: "",
			logger: () => {},
			sessionId: "",
			stopChild: () => {},
			system: t.system,
			emit: () => {},
			actionExecutor: () => {},
		};
	}
	function AC(e, ...[t]) {
		const r = ts(e);
		return e.getInitialSnapshot(r, t);
	}
	function RC(e, t, r) {
		const n = ts(e);
		return (n.self._snapshot = t), e.transition(t, r, n);
	}
	function vn({ schemas: e, actors: t, actions: r, guards: n, delays: o }) {
		return {
			createStateConfig: (i) => i,
			createMachine: (i) =>
				Lf(
					{ ...i, schemas: e },
					{ actors: t, actions: r, guards: n, delays: o },
				),
		};
	}
	class OC {
		constructor() {
			(this.timeouts = new Map()),
				(this._now = 0),
				(this._id = 0),
				(this._flushing = !1),
				(this._flushingInvalidated = !1);
		}
		now() {
			return this._now;
		}
		getId() {
			return this._id++;
		}
		setTimeout(t, r) {
			this._flushingInvalidated = this._flushing;
			const n = this.getId();
			return this.timeouts.set(n, { start: this.now(), timeout: r, fn: t }), n;
		}
		clearTimeout(t) {
			(this._flushingInvalidated = this._flushing), this.timeouts.delete(t);
		}
		set(t) {
			if (this._now > t) throw new Error("Unable to travel back in time");
			(this._now = t), this.flushTimeouts();
		}
		flushTimeouts() {
			if (this._flushing) {
				this._flushingInvalidated = !0;
				return;
			}
			this._flushing = !0;
			const t = [...this.timeouts].sort(([r, n], [o, i]) => {
				const s = n.start + n.timeout;
				return i.start + i.timeout > s ? -1 : 1;
			});
			for (const [r, n] of t) {
				if (this._flushingInvalidated) {
					(this._flushingInvalidated = !1),
						(this._flushing = !1),
						this.flushTimeouts();
					return;
				}
				this.now() - n.start >= n.timeout &&
					(this.timeouts.delete(r), n.fn.call(null));
			}
			this._flushing = !1;
		}
		increment(t) {
			(this._now += t), this.flushTimeouts();
		}
	}
	function PC(e) {
		return new Promise((t, r) => {
			e.subscribe({
				complete: () => {
					t(e.getSnapshot().output);
				},
				error: r,
			});
		});
	}
	function MC(e, t, r) {
		const n = [],
			o = ts(e);
		return (
			(o.actionExecutor = (s) => {
				n.push(s);
			}),
			[e.transition(t, r, o), n]
		);
	}
	function LC(e, ...[t]) {
		const r = [],
			n = ts(e);
		return (
			(n.actionExecutor = (i) => {
				r.push(i);
			}),
			[e.getInitialSnapshot(n, t), r]
		);
	}
	const NC = { timeout: 1 / 0 };
	function DC(e, t, r) {
		const n = { ...NC, ...r };
		return new Promise((o, i) => {
			const { signal: s } = n;
			if (s != null && s.aborted) {
				i(s.reason);
				return;
			}
			let a = !1;
			const l =
					n.timeout === 1 / 0
						? void 0
						: setTimeout(() => {
								u(), i(new Error(`Timeout of ${n.timeout} ms exceeded`));
							}, n.timeout),
				u = () => {
					clearTimeout(l),
						(a = !0),
						f == null || f.unsubscribe(),
						c && s.removeEventListener("abort", c);
				};
			function d(p) {
				t(p) && (u(), o(p));
			}
			let c, f;
			d(e.getSnapshot()),
				!a &&
					(s &&
						((c = () => {
							u(), i(s.reason);
						}),
						s.addEventListener("abort", c)),
					(f = e.subscribe({
						next: d,
						error: (p) => {
							u(), i(p);
						},
						complete: () => {
							u(),
								i(new Error("Actor terminated without satisfying predicate"));
						},
					})),
					a && f.unsubscribe());
		});
	}
	const jC = Object.freeze(
			Object.defineProperty(
				{
					__proto__: null,
					Actor: hf,
					SimulatedClock: OC,
					SpecialTargets: es,
					StateMachine: Qi,
					StateNode: xo,
					__unsafe_getAllOwnEventDescriptors: w$,
					and: Ut,
					assertEvent: ir,
					assign: L,
					cancel: fl,
					createActor: St,
					createEmptyActor: mC,
					createMachine: Lf,
					emit: Ne,
					enqueueActions: Mf,
					forwardTo: CC,
					fromCallback: pC,
					fromEventObservable: hC,
					fromObservable: fC,
					fromPromise: Ve,
					fromTransition: Tf,
					getInitialSnapshot: AC,
					getNextSnapshot: RC,
					getStateNodes: ko,
					initialTransition: LC,
					interpret: x$,
					isMachineSnapshot: zf,
					log: EC,
					matchesState: al,
					not: vo,
					or: N$,
					pathToStateValue: af,
					raise: _o,
					sendParent: Sl,
					sendTo: $o,
					setup: vn,
					spawnChild: hl,
					stateIn: O$,
					stop: A$,
					stopChild: nt,
					toObserver: qi,
					toPromise: PC,
					transition: MC,
					waitFor: DC,
				},
				Symbol.toStringTag,
				{ value: "Module" },
			),
		),
		bn = { device: "desktop", traits: {} };
	function Nf(e) {
		return e === "or" ? "or" : "and";
	}
	function wn(e) {
		const t = e == null ? void 0 : e.trim().toLowerCase();
		return t || null;
	}
	function rs(e) {
		return (
			(e == null
				? void 0
				: e.map((t) => t.trim().toLowerCase()).filter(Boolean)) ?? []
		);
	}
	function BC(e, t) {
		return e[t] ?? !0;
	}
	function Df(e, t) {
		return BC(e, t);
	}
	function UC(e, t) {
		const r = rs(e.languages),
			n = rs(e.locales),
			o = wn(t.language),
			i = wn(t.locale),
			s = r.length === 0 || (o != null && r.includes(o)),
			a = n.length === 0 || (i != null && n.includes(i));
		return s && a;
	}
	function FC(e) {
		if (typeof e != "object" || e == null) return !1;
		const t = e;
		return (
			typeof t.traitId == "string" &&
			typeof t.traitSlug == "string" &&
			(t.valueType === "string" || t.valueType === "number") &&
			typeof t.operator == "string" &&
			Array.isArray(t.values) &&
			t.values.every((r) => typeof r == "string")
		);
	}
	function HC(e) {
		return Array.isArray(e.traitConditions) ? e.traitConditions.filter(FC) : [];
	}
	function ns(e) {
		return typeof e == "string" && e.trim().length > 0;
	}
	function xl(e) {
		if (!ns(e)) return null;
		const t = Number(e);
		return Number.isFinite(t) ? t : null;
	}
	function VC(e, t) {
		const r = xl(t);
		if (r == null) return !1;
		if (e.operator === "in")
			return e.values.some((o) => {
				const i = xl(o);
				return i != null && r === i;
			});
		const n = xl(e.values[0]);
		if (n == null) return !1;
		switch (e.operator) {
			case "equals":
				return r === n;
			case "notEquals":
				return r !== n;
			case "greaterThan":
				return r > n;
			case "greaterThanOrEqual":
				return r >= n;
			case "lessThan":
				return r < n;
			case "lessThanOrEqual":
				return r <= n;
			default:
				return !1;
		}
	}
	function ZC(e, t) {
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
	function qC(e, t) {
		const r = t[e.traitSlug];
		return e.operator === "exists"
			? ns(r)
			: e.operator === "notExists"
				? !ns(r)
				: ns(r)
					? e.valueType === "number"
						? VC(e, r)
						: ZC(e, r)
					: !1;
	}
	function jf(e, t) {
		return HC(e).every((n) => qC(n, t));
	}
	function Bf(e, t) {
		const r = [],
			n = rs(e.languages),
			o = rs(e.locales);
		return (
			Df(e, t.device) || r.push("blocked_by_device"),
			((n.length > 0 && !wn(t.language)) ||
				(n.length > 0 && !n.includes(wn(t.language) ?? ""))) &&
				r.push("blocked_by_language"),
			((o.length > 0 && !wn(t.locale)) ||
				(o.length > 0 && !o.includes(wn(t.locale) ?? ""))) &&
				r.push("blocked_by_locale"),
			jf(e, t.traits) || r.push("blocked_by_trait"),
			r
		);
	}
	function Uf(e) {
		return [...new Set(e)];
	}
	function kn(e, t) {
		return Df(e, t.device) && UC(e, t) && jf(e, t.traits);
	}
	function $l(e, t = bn, r = "and") {
		if (!e || e.length === 0) return !0;
		const n = { ...bn, ...t, traits: t.traits ?? bn.traits },
			o = e.filter((s) => s.type !== "Exclude");
		return e.filter((s) => s.type === "Exclude").some((s) => kn(s, n))
			? !1
			: o.length === 0
				? !0
				: Nf(r) === "or"
					? o.some((s) => kn(s, n))
					: o.every((s) => kn(s, n));
	}
	function Ff(e, t = bn, r = "and") {
		if (!e || e.length === 0) return [];
		const n = { ...bn, ...t, traits: t.traits ?? bn.traits },
			o = e.filter((s) => s.type !== "Exclude");
		return e.filter((s) => s.type === "Exclude").some((s) => kn(s, n))
			? ["blocked_by_audience_rule"]
			: o.length === 0
				? []
				: Nf(r) === "or"
					? o.some((s) => kn(s, n))
						? []
						: Uf(o.flatMap((s) => Bf(s, n)))
					: Uf(o.flatMap((s) => Bf(s, n)));
	}
	function Hf(e, t) {
		return e === t;
	}
	function WC(e) {
		return e === "or" ? "or" : "and";
	}
	function Cl(e, t, r) {
		const n = e.completion == null || e.completion === t.completion,
			o = e.recruited == null || e.recruited === t.recruited,
			i = t.taskIds ?? (t.task != null ? [t.task] : []),
			s =
				e.tasks.length === 0 || e.tasks.some((f) => i.some((p) => r(f.id, p))),
			a =
				e.segmentValues.length === 0 ||
				e.segmentValues.some((f) => t.segments.some((p) => r(f.id, p))),
			l =
				e.singleSelectItems.length === 0 ||
				e.singleSelectItems.some((f) => t.singleSelect.some((p) => r(f.id, p))),
			u =
				e.multiSelectItems.length === 0 ||
				e.multiSelectItems.some((f) => t.multiSelect.some((p) => r(f.id, p))),
			d =
				e.likertSourceCards.length === 0 ||
				e.likertSourceCards.some((f) =>
					f.selectedItemIds.some((p) =>
						t.likertAnswers.some((h) => r(f.id, h.cardId) && r(p, h.itemId)),
					),
				),
			c = kn(e, t);
		return n && o && s && a && l && u && d && c;
	}
	function Vf(e, t, r = Hf, n = "and") {
		if (e.length === 0) return !0;
		const o = typeof r == "function" ? r : Hf,
			i = WC(typeof r == "string" ? r : n),
			s = e.filter((u) => u.type === "Include");
		return e.filter((u) => u.type === "Exclude").some((u) => Cl(u, t, o))
			? !1
			: s.length === 0
				? !0
				: i === "or"
					? s.some((u) => Cl(u, t, o))
					: s.every((u) => Cl(u, t, o));
	}
	const Zf = {
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
	function _n(e) {
		return Zf[e || "no"] || Zf.no;
	}
	function qf(e) {
		const {
			dirty: t,
			minValid: r,
			maxValid: n,
			min: o,
			max: i,
			language: s,
		} = e;
		if (!t) return null;
		const a = _n(s);
		return (!r || !n) && o && i
			? a.selectionRange(o, i)
			: !r && o
				? a.selectionMin(o)
				: !n && i
					? a.selectionMax(i)
					: null;
	}
	function zl(e, t) {
		if (!(t === void 0 || t <= 0)) {
			if (e > t) return "error";
			if (e >= t * 0.9) return "warning";
		}
	}
	function Wf(e) {
		const { min: t = 0, max: r, language: n } = e,
			o = t > 0,
			i = typeof r == "number" && r > 0;
		if (!(o || i)) return null;
		const s = _n(n);
		return o && i
			? s.inputLengthRange(t, r)
			: o
				? s.minLength(t)
				: s.inputLengthMaximum(r ?? 0);
	}
	function Kf(e) {
		return _n(e.language).selectionMax(e.max);
	}
	function Jf(e) {
		const { min: t = 0, max: r, totalOptions: n, language: o } = e,
			i = t > 0,
			s = r !== void 0 && r < n;
		if (!(i || s)) return null;
		const a = _n(o);
		return i && s
			? a.selectionBetween(t, r)
			: i
				? a.selectionAtLeast(t)
				: a.selectionUpTo(r ?? n);
	}
	function Gf(e, t) {
		var n;
		if (!t) return;
		const r =
			(n = e == null ? void 0 : e.find((o) => o.code === t)) == null
				? void 0
				: n["@errMessage"];
		return r != null && r.trim() ? r : void 0;
	}
	function KC(e, t) {
		const r = e.validation;
		return (
			Gf(e.tr, t) ??
			((r == null ? void 0 : r.type) === "OrgValidationRegex"
				? Gf(r.tr, t)
				: void 0) ??
			e.errMessage ??
			(r == null ? void 0 : r.errMessage) ??
			"Pattern validation failed"
		);
	}
	function Yf(e) {
		const { content: t, card: r, hasBeenTouched: n, language: o } = e,
			{ minLength: i = 0, maxLength: s, validations: a } = r,
			l = _n(o);
		for (const u of a) {
			const d = u.validation;
			let c = !0;
			if (
				(d.type === "ValidationRegex" || d.type === "OrgValidationRegex") &&
				((c = new RegExp(d.regex ?? "").test(t)), !(d.negate !== c))
			)
				return {
					status: "validation-regex-failed",
					valid: !1,
					color: "error",
					shouldAnnounce: !1,
					errorMessage: KC(u, o),
				};
		}
		if (i > 0 && t.length < i)
			return {
				status: "under-minimum",
				valid: !1,
				color: n ? "error" : "warning",
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
	function os(e) {
		const { selectedCount: t, card: r, hasBeenSubmitted: n, language: o } = e,
			{ min: i = 0, max: s } = r;
		return s && t > s
			? {
					status: "over-max",
					valid: !1,
					color: "error",
					shouldAnnounce: !0,
					errorMessage:
						qf({
							dirty: !0,
							minValid: !0,
							maxValid: !1,
							min: i,
							max: s,
							language: o,
						}) || `Please select no more than ${s} option${s > 1 ? "s" : ""}`,
				}
			: n && i > 0 && t < i
				? {
						status: "under-minimum",
						valid: !1,
						color: "error",
						shouldAnnounce: !1,
						errorMessage:
							qf({
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
	function is(e) {
		const {
			email: t,
			name: r,
			phone: n,
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
		const u = _n(l),
			d = t.value.trim() || r.value.trim() || n.value.trim();
		return !s && !d
			? {
					status: "valid",
					valid: !0,
					color: void 0,
					shouldAnnounce: !1,
					errorMessage: null,
				}
			: t.value && !t.valid
				? {
						status: "email-invalid",
						valid: !1,
						color: "error",
						shouldAnnounce: !1,
						errorMessage: u.invalidEmail,
					}
				: i && !o && d
					? {
							status: "consent-required",
							valid: !1,
							color: "error",
							shouldAnnounce: !1,
							errorMessage: u.consentRequired,
						}
					: i && o && !t.value
						? {
								status: "email-required",
								valid: !1,
								color: "error",
								shouldAnnounce: !1,
								errorMessage: u.emailRequired,
							}
						: s && !t.value
							? {
									status: "email-required",
									valid: !1,
									color: "error",
									shouldAnnounce: !1,
									errorMessage: u.emailRequired,
								}
							: s && i && !o
								? {
										status: "consent-required",
										valid: !1,
										color: "error",
										shouldAnnounce: !1,
										errorMessage: u.consentRequired,
									}
								: {
										status: "valid",
										valid: !0,
										color: void 0,
										shouldAnnounce: !1,
										errorMessage: null,
									};
	}
	const Xf = { nb: "no" };
	function Qf(e) {
		return e.trim().toLowerCase().split(/[-_]/)[0] ?? "";
	}
	function JC(e, t) {
		if (!e) return null;
		const r = Qf(e),
			n = t.find((i) => i === r);
		if (n) return n;
		const o = Xf[r] ?? r;
		return t.find((i) => (Xf[i] ?? i) === o) ?? null;
	}
	Uint8Array.from([
		128, 183, 48, 81, 178, 139, 67, 77, 204, 177, 134, 229, 90, 100, 189, 21,
	]);
	function Sn(e) {
		if (!(typeof e == "object" && e !== null && "name" in e)) return !1;
		const t = e.name;
		return typeof t == "string" || t === null;
	}
	function eh(e, t) {
		return e == null ? void 0 : e.find((r) => r.code === t);
	}
	function ae(e, t, r, n) {
		const o = eh(t, r),
			i = o == null ? void 0 : o[n];
		return i == null || i === "" ? e : i;
	}
	function sr(e, t, r, n, o, i) {
		const s = eh(t, r),
			a = s == null ? void 0 : s[n],
			l = n.slice(1);
		return a != null && a !== ""
			? a
			: i && (e == null || e === (o == null ? void 0 : o[l]))
				? i[l]
				: e;
	}
	function GC(e, t) {
		var o, i;
		if (((o = e.language) == null ? void 0 : o.code) === t) return e;
		if (e.generalType === "App" || e.renderType === "App")
			return {
				...e,
				textNext: ae(e.textNext, e.tr, t, "@textNext"),
				textPrev: ae(e.textPrev, e.tr, t, "@textPrev"),
				textClose: ae(e.textClose, e.tr, t, "@textClose"),
				textHide: ae(e.textHide, e.tr, t, "@textHide"),
				textMinimized: ae(e.textMinimized, e.tr, t, "@textMinimized"),
				textReplyLater: ae(e.textReplyLater, e.tr, t, "@textReplyLater"),
			};
		const r = (i = e.language) != null && i.code ? Ui[e.language.code] : void 0,
			n = Ui[t];
		return {
			...e,
			textNext: sr(e.textNext, e.tr, t, "@textNext", r, n),
			textPrev: sr(e.textPrev, e.tr, t, "@textPrev", r, n),
			textClose: sr(e.textClose, e.tr, t, "@textClose", r, n),
			textHide: sr(e.textHide, e.tr, t, "@textHide", r, n),
			textMinimized: sr(e.textMinimized, e.tr, t, "@textMinimized", r, n),
			textReplyLater: sr(e.textReplyLater, e.tr, t, "@textReplyLater", r, n),
		};
	}
	function xt(e, t) {
		const r = e.tr;
		return {
			...e,
			name: ae(e.name, r, t, "@name"),
			body: ae(e.body, r, t, "@body"),
			bodyHtml: ae(e.bodyHtml, r, t, "@bodyHtml"),
			bodyJson: ae(e.bodyJson, r, t, "@bodyJson"),
			textNext: ae(e.textNext, r, t, "@textNext"),
			textPrev: ae(e.textPrev, r, t, "@textPrev"),
			textClose: ae(e.textClose, r, t, "@textClose"),
			textHide: ae(e.textHide, r, t, "@textHide"),
			textMinimized: ae(e.textMinimized, r, t, "@textMinimized"),
			textReplyLater: ae(e.textReplyLater, r, t, "@textReplyLater"),
		};
	}
	function YC(e, t) {
		const r = xt(e, t),
			n = e.tr;
		return {
			...r,
			label: ae(e.label, n, t, "@label"),
			placeholder: ae(e.placeholder, n, t, "@placeholder"),
		};
	}
	function XC(e, t) {
		const r = xt(e, t),
			n = e.tr;
		return {
			...r,
			positive: ae(e.positive, n, t, "@positive"),
			negative: ae(e.negative, n, t, "@negative"),
		};
	}
	function QC(e, t) {
		const r = xt(e, t),
			n = e.tr;
		return {
			...r,
			positive: ae(e.positive, n, t, "@positive"),
			negative: ae(e.negative, n, t, "@negative"),
		};
	}
	function ez(e, t) {
		const r = xt(e, t),
			n = e.tr;
		return {
			...r,
			email_label: ae(e.email_label, n, t, "@email_label"),
			email_placeholder: ae(e.email_placeholder, n, t, "@email_placeholder"),
			phone_label: ae(e.phone_label, n, t, "@phone_label"),
			phone_placeholder: ae(e.phone_placeholder, n, t, "@phone_placeholder"),
			nameLabel: ae(e.nameLabel, n, t, "@nameLabel"),
			namePlaceholder: ae(e.namePlaceholder, n, t, "@namePlaceholder"),
			consentTermsUrl: ae(e.consentTermsUrl, n, t, "@consentTermsUrl"),
			consentTermsTitle: ae(e.consentTermsTitle, n, t, "@consentTermsTitle"),
			consentTermsText: ae(e.consentTermsText, n, t, "@consentTermsText"),
			consentTermsLabel: ae(e.consentTermsLabel, n, t, "@consentTermsLabel"),
		};
	}
	function tz(e, t) {
		return {
			...xt(e, t),
			selectItems: e.selectItems.map((n) => ({
				...n,
				label: ae(n.label, n.tr, t, "@label"),
			})),
		};
	}
	function rz(e, t) {
		return {
			...xt(e, t),
			selectItems: e.selectItems.map((n) => ({
				...n,
				label: ae(n.label, n.tr, t, "@label"),
			})),
		};
	}
	function nz(e, t) {
		var i;
		const r = xt(e, t),
			n =
				((i = e.LikertCard) == null ? void 0 : i.likertScale) ?? e.likertScale;
		if (!n) return r;
		const o = {
			...n,
			likertItems: n.likertItems.map((s) => ({
				...s,
				label: ae(s.label, s.tr, t, "@label"),
			})),
		};
		return {
			...r,
			likertScale: o,
			...(e.LikertCard
				? { LikertCard: { ...e.LikertCard, likertScale: o } }
				: {}),
		};
	}
	function oz(e, t, r) {
		const n = xt(e, t);
		return e.taskItems
			? {
					...n,
					taskItems: e.taskItems.map((o) => {
						var f;
						const i = o.task.id,
							s =
								typeof i == "string"
									? (f = r == null ? void 0 : r.tasksById) == null
										? void 0
										: f.get(i)
									: void 0,
							a = s ? { ...o.task, ...s } : o.task,
							l = Sn(a) ? a.name : "",
							u = Sn(a) ? ae(a.name, a.tr, t, "@name") : l,
							d = Sn(a) ? { ...a, name: u } : a,
							c = ae(o.label, "tr" in o ? o.tr : void 0, t, "@label");
						return { ...o, label: c || u || o.label || l, task: d };
					}),
				}
			: n;
	}
	function iz(e, t, r) {
		return {
			...xt(e, t),
			segment: Sn(e.segment)
				? { ...e.segment, name: ae(e.segment.name, e.segment.tr, t, "@name") }
				: e.segment,
			items: e.items.map((o) => {
				var c;
				const i = o.value.id,
					s =
						typeof i == "string"
							? (c = r == null ? void 0 : r.segmentValuesById) == null
								? void 0
								: c.get(i)
							: void 0,
					a = s ? { ...o.value, ...s } : o.value,
					l = Sn(a) ? { ...a, name: ae(a.name, a.tr, t, "@name") } : a,
					u = ae(o.label, "tr" in o ? o.tr : void 0, t, "@label"),
					d = Sn(l) ? l.name : void 0;
				return {
					...o,
					label:
						o.labelIsInherited === !0
							? ae(d, o.tr, t, "@label") || o.label
							: u || d || o.label,
					value: l,
				};
			}),
		};
	}
	function th(e, t, r) {
		switch (e.type) {
			case "InputCard":
				return YC(e, t);
			case "RecruitmentCard":
				return ez(e, t);
			case "CompletionCard":
				return XC(e, t);
			case "FindabilityCard":
				return QC(e, t);
			case "SingleSelectCard":
				return tz(e, t);
			case "MultiSelectCard":
				return rz(e, t);
			case "LikertCard":
				return nz(e, t);
			case "TopTaskCard":
				return oz(e, t, r);
			case "SegmentCard":
				return iz(e, t, r);
			default:
				return xt(e, t);
		}
	}
	function sz(e, t, r) {
		var s, a, l;
		const n = GC(e, t),
			o = (s = e.language) != null && s.code ? Ui[e.language.code] : void 0,
			i = Ui[t];
		return {
			...n,
			cards:
				((a = n.cards) == null ? void 0 : a.map((u) => th(u, t, r))) ?? n.cards,
			pages:
				(l = n.pages) == null
					? void 0
					: l.map((u) => {
							var d;
							return {
								...u,
								title: ae(u.title, u.tr, t, "@title"),
								textNext: sr(
									u.textNext,
									u.tr,
									t,
									"@textNext",
									o,
									u.textNext == null ? void 0 : i,
								),
								textPrev: sr(
									u.textPrev,
									u.tr,
									t,
									"@textPrev",
									o,
									u.textPrev == null ? void 0 : i,
								),
								cards:
									((d = u.cards) == null
										? void 0
										: d.map((c) => th(c, t, r))) ?? u.cards,
							};
						}),
		};
	}
	function rh(e) {
		const { selectedValues: t, value: r, max: n } = e;
		return t.includes(r)
			? { values: t.filter((o) => o !== r), changed: !0, limitReached: !1 }
			: n && t.length >= n
				? { values: [...t], changed: !1, limitReached: !0 }
				: { values: [...t, r], changed: !0, limitReached: !1 };
	}
	const az = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
	function ss(e, t) {
		const n = t
				.substring(20)
				.split("")
				.reduce((a, l) => {
					const u = az.indexOf(l);
					return a * (u || 1);
				}, 1),
			o = e.filter((a) => a.orderLocked !== !0),
			i = lz([...o], n),
			s = [];
		for (let a = 0; a < e.length; a++)
			if (e[a].orderLocked) s.push(e[a]);
			else {
				const l = i.shift();
				l && s.push(l);
			}
		return s;
	}
	function lz(e, t) {
		let r = e.length,
			n,
			o;
		for (; r; )
			(o = Math.floor(uz(t) * r--)), (n = e[r]), (e[r] = e[o]), (e[o] = n), t++;
		return e;
	}
	function uz(e) {
		const t = Math.sin(e++) * 1e4;
		return t - Math.floor(t);
	}
	function cz(e) {
		if (e.length >= 255) throw new TypeError("Alphabet too long");
		const t = new Uint8Array(256);
		for (let u = 0; u < t.length; u++) t[u] = 255;
		for (let u = 0; u < e.length; u++) {
			const d = e.charAt(u),
				c = d.charCodeAt(0);
			if (t[c] !== 255) throw new TypeError(d + " is ambiguous");
			t[c] = u;
		}
		const r = e.length,
			n = e.charAt(0),
			o = Math.log(r) / Math.log(256),
			i = Math.log(256) / Math.log(r);
		function s(u) {
			if (
				(u instanceof Uint8Array ||
					(ArrayBuffer.isView(u)
						? (u = new Uint8Array(u.buffer, u.byteOffset, u.byteLength))
						: Array.isArray(u) && (u = Uint8Array.from(u))),
				!(u instanceof Uint8Array))
			)
				throw new TypeError("Expected Uint8Array");
			if (u.length === 0) return "";
			let d = 0,
				c = 0,
				f = 0;
			const p = u.length;
			for (; f !== p && u[f] === 0; ) f++, d++;
			const h = ((p - f) * i + 1) >>> 0,
				g = new Uint8Array(h);
			for (; f !== p; ) {
				let b = u[f],
					w = 0;
				for (let S = h - 1; (b !== 0 || w < c) && S !== -1; S--, w++)
					(b += (256 * g[S]) >>> 0),
						(g[S] = (b % r) >>> 0),
						(b = (b / r) >>> 0);
				if (b !== 0) throw new Error("Non-zero carry");
				(c = w), f++;
			}
			let y = h - c;
			for (; y !== h && g[y] === 0; ) y++;
			let v = n.repeat(d);
			for (; y < h; ++y) v += e.charAt(g[y]);
			return v;
		}
		function a(u) {
			if (typeof u != "string") throw new TypeError("Expected String");
			if (u.length === 0) return new Uint8Array();
			let d = 0,
				c = 0,
				f = 0;
			for (; u[d] === n; ) c++, d++;
			const p = ((u.length - d) * o + 1) >>> 0,
				h = new Uint8Array(p);
			for (; d < u.length; ) {
				const b = u.charCodeAt(d);
				if (b > 255) return;
				let w = t[b];
				if (w === 255) return;
				let S = 0;
				for (let T = p - 1; (w !== 0 || S < f) && T !== -1; T--, S++)
					(w += (r * h[T]) >>> 0),
						(h[T] = (w % 256) >>> 0),
						(w = (w / 256) >>> 0);
				if (w !== 0) throw new Error("Non-zero carry");
				(f = S), d++;
			}
			let g = p - f;
			for (; g !== p && h[g] === 0; ) g++;
			const y = new Uint8Array(c + (p - g));
			let v = c;
			for (; g !== p; ) y[v++] = h[g++];
			return y;
		}
		function l(u) {
			const d = a(u);
			if (d) return d;
			throw new Error("Non-base" + r + " character");
		}
		return { encode: s, decodeUnsafe: a, decode: l };
	}
	const dz = cz(
		"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
	);
	function Ce(e) {
		const t = e.replace(/-/g, "").match(/.{2}/g);
		if (!t) return e;
		const r = t.map((o) => Number.parseInt(o, 16)),
			n = new Uint8Array(r);
		return dz.encode(n);
	}
	function nh(e, t) {
		const r = t.length === 36 ? Ce(t) : t;
		return (e.length === 36 ? Ce(e) : e) === r;
	}
	async function xn(e, t = {}) {
		const r = (t == null ? void 0 : t.apiHost) ?? "https://ingest.skyra.no";
		return fetch(`${r}/response`, {
			method: "POST",
			body: JSON.stringify(e),
			headers: { "Content-Type": "application/json" },
		});
	}
	function pz(e, t = {}) {
		const r = (t == null ? void 0 : t.apiHost) ?? "https://ingest.skyra.no";
		fetch(`${r}/diagnostics`, {
			method: "POST",
			body: JSON.stringify(e),
			headers: { "Content-Type": "application/json" },
			keepalive: !0,
		}).catch(() => {});
	}
	const fz = $({ id: m(), code: m(), name: m() }),
		hz = $({
			code: m().nullish(),
			name: m().nullish(),
			"@textNext": m().nullish(),
			"@textPrev": m().nullish(),
			"@textClose": m().nullish(),
			"@textHide": m().nullish(),
			"@textMinimized": m().nullish(),
			"@textReplyLater": m().nullish(),
		}),
		as = Q1.extend({
			cards: Z(bp),
			confineToDomain: B().optional().default(!1),
			rendererVariant: X(["classic", "beta"]).optional(),
			languages: Z(fz).optional().nullable(),
			tr: Z(hz).optional().nullable(),
		});
	as.array();
	const gz = m().brand("VisitorId");
	X(["open", "minimized", "closed", "loading", "hidden"]),
		X(["init", "capture", "completed", "closed", "blocked", "noconsent"]);
	const mz = $({
			task: m().nullable().default(null),
			segments: Pe(m(), m()).nullable().default({}),
			completion: B().nullable().default(null),
			scales: Pe(m(), m()).nullable().default({}),
			traits: Pe(m(), m()).nullable().default({}),
			multiSelect: Pe(m(), Z(m())).nullable().default({}),
			singleSelect: Pe(m(), m()).nullable().default({}),
			recruited: B().nullable().default(null),
		}),
		$n = $({
			values: Pe(
				m(),
				m()
					.or(B())
					.or(Pe(m(), m().or(B()))),
			).default({}),
			variables: mz.partial().default({}),
			history: Z(te().int()).default([]),
			currentCard: te().min(0).optional(),
			path: m().optional(),
			state: m().optional(),
			lastSync: te().optional(),
		});
	$({ i: gz, c: te() });
	function Ft(...e) {
		var t;
		(t = window.skyra) != null && t._debugEnabled && console.log(...e);
	}
	const yz = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
	function ls(e, t) {
		const n = t
				.substring(20)
				.split("")
				.reduce((a, l) => {
					const u = yz.indexOf(l);
					return a * u;
				}, 1),
			o = e.filter((a) => a.orderLocked !== !0),
			i = vz(o, n);
		let s = [];
		for (let a = 0; a < e.length; a++)
			if (e[a].orderLocked) s.push(e[a]);
			else {
				const l = i.shift();
				l && s.push(l);
			}
		return s;
	}
	function vz(e, t) {
		let r = e.length,
			n,
			o;
		for (; r; )
			(o = Math.floor(bz(t) * r--)), (n = e[r]), (e[r] = e[o]), (e[o] = n), t++;
		return e;
	}
	function bz(e) {
		let t = Math.sin(e++) * 1e4;
		return t - Math.floor(t);
	}
	function oh(e, t, { firstCard: r, finalCard: n }) {
		var s;
		const o = (s = t.textClose) == null ? void 0 : s.trim(),
			i = e.renderType !== "Inline" && e.surveyType !== "Findability";
		return r && !n && i && o ? o : null;
	}
	function ht(e, t, r = {}) {
		return {
			next:
				[
					t.textNext,
					r.finalCard && t.type !== "MessageCard" ? t.textClose : null,
					r.finalCard ? e.textClose : null,
					e.textNext,
				].find(Boolean) ?? (r.finalCard ? "Close" : "Next"),
			back: t.textPrev ?? e.textPrev ?? "Back",
			minimized: t.textMinimized ?? e.textMinimized ?? "Continue",
			hide: t.textHide ?? e.textHide ?? "Hide",
			close: t.textClose ?? e.textClose ?? "Close",
			replyLater: t.textReplyLater ?? e.textReplyLater ?? "Reply later",
		};
	}
	const wz = /^(Trigger|Path)/;
	$({
		id: M().optional(),
		ruleType: X(["Show", "Hide", "FollowOnly"]),
		desktop: B().default(!1),
		mobile: B().default(!1),
		tablet: B().default(!1),
		path: m().nullable().optional(),
		follow: B().default(!1),
		applyBelow: B().default(!1),
		isRegex: B().default(!1).optional(),
		domain: $({ id: M(), name: m() }).optional().nullable(),
	});
	function us(e) {
		return [e.showRules, e.followRules, e.hideRules].some(
			(t) => t && t.length > 0,
		);
	}
	function kz(e, t, r, n) {
		const o = new URL(t),
			i = o.hostname,
			s = o.pathname,
			a = e.domain ? Ga(e.domain.name, i) : !0,
			l =
				e.path &&
				nl(decodeURI(s), decodeURI(e.path), e.applyBelow, e.isRegex ?? !1),
			u = r && e.follow;
		return [e[n], a, l || u].every(Boolean);
	}
	function _z(e, t, r, n) {
		return e.follow && r ? !1 : Hp(e, t) && e[n];
	}
	function cs({
		urlString: e,
		surveyStarted: t,
		showRules: r,
		followRules: n = [],
		hideRules: o,
		device: i,
		isInline: s,
	}) {
		const a = r.some((c) => kz(c, e, t, i)),
			l = n.some((c) => {
				const f = new URL(e),
					p = f.hostname,
					h = f.pathname,
					g = c.domain ? Ga(c.domain.name, p) : !0,
					y =
						c.path &&
						nl(decodeURI(h), decodeURI(c.path), c.applyBelow, c.isRegex ?? !1);
				return c[i] && g && y;
			});
		return o.some((c) => _z(c, e, t, i))
			? !1
			: a
				? !0
				: l
					? t
					: !!(r.length === 0 && n.length === 0 && o.length === 0 && s);
	}
	function ds(e, t, r, n) {
		if (r) return new RegExp(t).test(e);
		const o = t.at(-1) === "/" && t.length > 1 ? t.slice(0, -1) : t,
			i = e.at(-1) === "/" && e.length > 1 ? e.slice(0, -1) : e;
		return n ? i === o : i.startsWith(o);
	}
	function Il(e, t, r) {
		if (e.domains.length > 0 && !e.domains.some((n) => r.hostname === n.name))
			return !1;
		if (t === "Trigger") {
			if (["PathBeginsWith", "TriggerPathBeginsWith"].includes(e.type))
				return ds(r.pathname, e.value, e.isRegexp, !1);
			if (["PathIs", "TriggerPathIs"].includes(e.type))
				return ds(r.pathname, e.value, e.isRegexp, !0);
		} else if (t === "Follow")
			return e.type === "FollowPathBeginsWith"
				? ds(r.pathname, e.value, e.isRegexp, !1)
				: e.type === "FollowPathIs"
					? ds(r.pathname, e.value, e.isRegexp, !0)
					: !1;
		return !1;
	}
	function Tl(e, t, r) {
		if (r.length === 0) return !0;
		const n = new URL(e);
		for (const i of r) if (i.negate && Il(i, t, n)) return !1;
		const o = r.filter((i) => !i.negate);
		if (o.length === 0) return !0;
		if (t === "Trigger") {
			const i = o.filter((s) => s.type.match(wz));
			for (const s of i) if (Il(s, t, n)) return !0;
		} else if (t === "Follow") {
			const i = o.filter((s) => s.type.startsWith("Follow"));
			if (i.length === 0) return !0;
			for (const s of i) if (Il(s, t, n)) return !0;
			return !1;
		}
		return !1;
	}
	const Sz = m(),
		xz = m(),
		$z = m(),
		Cz = m(),
		zz = m(),
		Iz = B(),
		Tz = Fp,
		Ez = m(),
		Az = te(),
		Rz = te().nullable(),
		Oz = te().nullable(),
		Pz = ke([m(), X_()]).transform((e) =>
			e instanceof Date ? e : new Date(e),
		),
		Mz = $({ name: m(), code: m() }).nullable(),
		Lz = Z($({ id: m(), name: m(), code: m() }))
			.optional()
			.nullable(),
		Nz = Z(so()).optional(),
		Dz = Z(so()).optional(),
		jz = Z(so()).optional(),
		Bz = Z(so()).optional(),
		Uz = lp.optional().default("and"),
		Fz = Z(cp).optional().default([]),
		Hz = Z(m()).optional(),
		Vz = te().gte(0).lte(1).default(1),
		Zz = te(),
		ih = $({
			id: Sz,
			fullSlug: xz,
			name: $z,
			status: Cz,
			publishingState: zz,
			isLive: Iz,
			urlRules: Nz,
			showRules: Dz,
			followRules: jz,
			hideRules: Bz,
			audienceRuleMode: Uz,
			audienceRules: Fz,
			renderType: Tz,
			surveyType: Ez,
			capturePercent: Az,
			minTimeForRetake: Rz,
			minTimeForRetrigger: Oz,
			updatedAt: Pz,
			language: Mz,
			languages: Lz,
			blockedIps: Hz,
			priorityScore: Vz,
			numCards: Zz,
		});
	$({ survey: as });
	const qz = Z(ih),
		Wz = Z(as),
		Kz = $({
			id: m(),
			slug: m(),
			valueType: X(["string", "number"]).optional().nullable(),
		}),
		sh = $({
			surveys: Z(ih),
			traits: Z(Kz).optional().default([]),
			organisation: $({
				completionTimeout: te().optional().nullable(),
				rejectionTimeout: te().optional().nullable(),
			}).optional(),
		});
	function ah(e, t) {
		return t && e.minTimeForRetake != null
			? Date.now() - t >= e.minTimeForRetake * 1e3
			: !1;
	}
	function El(e, t) {
		return t && e.minTimeForRetrigger != null
			? Date.now() - t >= e.minTimeForRetrigger * 1e3
			: !1;
	}
	const Jz = $({ _owner: $({ visitorId: m(), sessionId: m() }) });
	function Gz(e, t, r) {
		const n = `skyra.${t.replace(/\//g, ".")}`,
			o = e.getItem(n),
			i = o ? JSON.parse(o) : {};
		if (r && i && Object.hasOwn(i, "_owner")) {
			const a = Jz.safeParse(i);
			if (
				!a.success ||
				a.data._owner.visitorId !== r.visitorId ||
				a.data._owner.sessionId !== r.sessionId
			)
				return $n.parse({});
		}
		const s = $n.safeParse(i);
		return s.success ? s.data : $n.parse({});
	}
	const Yz = Ve(async ({ input: e }) => {
			const t = new URLSearchParams();
			e.testMode && t.append("mode", "test"),
				Ft("Load survey summaries", { ...e });
			const n = await (
					await fetch(`${e.apiHost}/survey/${e.orgSlug}?` + t.toString())
				).json(),
				o = sh.safeParse(n);
			if (o.success)
				return o.data.surveys.filter((s) => s.renderType !== "App");
			const i = qz.safeParse(n);
			if (!i.success) {
				const s = new Error("Invalid response");
				throw ((s.cause = i.error), s);
			}
			return i.data.filter((s) => s.renderType !== "App");
		}),
		Xz = Ve(async ({ input: e }) => {
			const t = new URLSearchParams();
			e.testMode && t.append("mode", "test"),
				Ft("Load org with surveys", { ...e });
			const n = await (
					await fetch(`${e.apiHost}/survey/${e.orgSlug}?` + t.toString())
				).json(),
				o = sh.safeParse(n);
			if (!o.success) {
				const i = new Error("Invalid response");
				throw ((i.cause = o.error), i);
			}
			return {
				...o.data,
				surveys: o.data.surveys.filter((i) => i.renderType !== "App"),
			};
		}),
		Al = Ve(async ({ input: e }) => {
			if (e.slugs.length === 0) return [];
			const t = new URLSearchParams();
			for (const s of e.slugs) t.append("slug", s.split("/")[1]);
			e.testMode && t.append("mode", "test");
			const r = `${e.apiHost}/survey/${e.orgSlug}/fullSurveys?`,
				o = await (await fetch(r + t.toString())).json(),
				i = Wz.safeParse(o);
			if (!i.success)
				throw (
					(console.error("Invalid survey response", i.error, o),
					new Error("Invalid survey response"))
				);
			return i.data;
		});
	function lh(e) {
		return !!e && Object.keys(e).length > 0;
	}
	function Rl(e) {
		return Promise.all(
			e.map(async (t) => {
				var o;
				if (t.sessionId) {
					if (lh(t.traits))
						try {
							await xn(
								{
									submissionId: Le(),
									event: "SessionTraits",
									survey: t.surveyId,
									visitor: t.visitorId,
									session: t.sessionId,
									traits: t.traits,
								},
								{ apiHost: t.apiHost },
							);
						} catch (i) {
							Ft(
								"[sessionInit] Failed to sync SessionTraits for reused session",
								{ sessionId: t.sessionId, surveyId: t.surveyId, error: i },
							);
						}
					return { sessionId: t.sessionId, slug: t.slug };
				}
				let r = "unknown";
				"connection" in navigator &&
					(r =
						(o = navigator == null ? void 0 : navigator.connection) == null
							? void 0
							: o.effectiveType);
				const n = Le();
				return (
					await xn(
						{
							submissionId: Le(),
							event: "SessionInit",
							survey: t.surveyId,
							visitor: t.visitorId,
							session: n,
							ua: t.ua,
							screenSize: t.screenSize,
							pixelRatio: t.pixelRatio,
							traits: t.traits,
							connection: r,
							languageCode: t.languageCode,
						},
						{ apiHost: t.apiHost },
					),
					{ sessionId: n, slug: t.slug }
				);
			}),
		);
	}
	const Qz = Ve(({ input: e }) => Rl(e));
	function uh(e) {
		const t = e.survey.fullSlug,
			r = e.customElementName ?? "skyra-survey";
		return document.querySelector(e.selector)
			? document.querySelector(`${r}[slug="${t}"]`)
				? "existing_element"
				: null
			: "missing_container";
	}
	const eI = Ve(async ({ input: e }) => {
			let t = uh(e);
			return (
				t === "missing_container" &&
					e.retryDelayMs !== 0 &&
					(await new Promise((r) => setTimeout(r, e.retryDelayMs ?? 100)),
					(t = uh(e))),
				t ? { canRender: !1, reason: t } : { canRender: !0 }
			);
		}),
		ch = Ve(({ input: e }) => {
			const t = e.survey.fullSlug,
				r = document.querySelector(e.selector),
				n = e.customElementName ?? "skyra-survey",
				o = e.replace ?? !1;
			r ||
				console.error(
					`[Skyra] Could not find DOM element with selector "${e.selector}"`,
				);
			const i = document.querySelector(`${n}[slug="${t}"]`);
			if (i) {
				if (o) {
					const a = document.createElement(n);
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
			const s = document.createElement(n);
			return (
				s.setAttribute("slug", t),
				r == null || r.appendChild(s),
				Promise.resolve({ survey: e.survey, selector: e.selector })
			);
		});
	function dh(e) {
		Cn({
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
	function Cn(e) {
		pz(
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
	const tI = Ve(({ input: e }) => {
		if (!e.consent) return Promise.reject(new Error("Cookies not supported"));
		const t = "skyra._test";
		return (
			(document.cookie = `${t}=1`),
			new Promise((r, n) => {
				setTimeout(() => {
					try {
						const o = document.cookie.indexOf(`${t}=`) !== -1;
						(document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`),
							o ? r(o) : n(new Error("Cookies not supported"));
					} catch {
						n(new Error("Cookies not supported"));
					}
				}, 5);
			})
		);
	});
	async function rI(e) {
		let t = e.path ?? "/",
			r = e.expires ?? 3600 * 2;
		switch (e.renderType) {
			case "Inline":
				(r = 0), (t = window.location.pathname);
				break;
			case "Popup":
				r = 7200;
				break;
		}
		const n = `skyra.${e.slug.replace(/\//g, ".")}`;
		e.state.lastSync = Date.now();
		const { values: o, ...i } = e.state,
			s = JSON.stringify({ ...i, ...(e.owner && { _owner: e.owner }) }),
			a = e.confineToDomain
				? { domain: void 0, expires: r, path: t }
				: { expires: r, path: t };
		return e.storage.setItem(n, s, a), e.state;
	}
	function ph(e) {
		return e.split("/").filter(Boolean).length;
	}
	function fh(e, t) {
		const r = ph(t);
		return e === t ? 3 : e.startsWith(t + "/") ? Math.min(1 + r * 0.5, 2.9) : 0;
	}
	const ps = /\/$/;
	function nI(e, t, r, n = [], o = []) {
		var a;
		let i = 1,
			s;
		try {
			s = new URL(e).pathname.replace(ps, "");
		} catch {
			s = e.replace(ps, "");
		}
		if (!us({ showRules: r, followRules: n, hideRules: o }))
			for (const l of t) {
				const u = l.value.replace(ps, "");
				if (l.isRegexp)
					try {
						new RegExp(l.value).test(s) && (i += 0.5);
					} catch {}
				else i += fh(s, u);
			}
		for (const l of r) {
			const u = ((a = l.path) == null ? void 0 : a.replace(ps, "")) ?? "";
			if (l.isRegex && l.path)
				try {
					const c =
						l.path
							.split("/")
							.filter(Boolean)
							.reduce((p, h) => {
								const g = (v) => {
										try {
											return new RegExp(v);
										} catch {
											return null;
										}
									},
									y = (v) => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
								return p + "\\/" + (g(h) ? `(${h})` : y(h));
							}, "^") +
						(l.applyBelow ? "(\\/.*)?" : "") +
						"$";
					if (new RegExp(c).test(s)) {
						const h = 1 + ph(l.path) * 0.5 + 0.5;
						i += h;
					}
				} catch {}
			else l.applyBelow && (i += fh(s, u));
		}
		return i;
	}
	function oI(e) {
		const t = new Map();
		return {
			invalidate(r) {
				for (const [n, o] of t) r(o.input) && t.delete(n);
			},
			initialize(r) {
				const n = JSON.stringify([
						r.surveyId,
						r.visitorId,
						r.slug,
						r.sessionId,
					]),
					o = t.get(n);
				if (o) return o.request;
				const i = Rl([r])
					.then(([s]) => {
						var a;
						if (((a = t.get(n)) == null ? void 0 : a.request) !== i)
							throw new Error("Popup initialization superseded");
						if (
							!e({
								...s,
								visitorId: r.visitorId,
								requestedSessionId: r.sessionId,
							})
						)
							throw new Error("Popup initialization superseded");
						return s;
					})
					.finally(() => {
						var s;
						((s = t.get(n)) == null ? void 0 : s.request) === i && t.delete(n);
					});
				return t.set(n, { input: r, request: i }), i;
			},
		};
	}
	const iI = Ve(({ input: e }) =>
		Promise.all(
			e.map(({ sessionRegistry: t, ...r }) =>
				t ? t.initialize(r) : Rl([r]).then(([n]) => n),
			),
		),
	);
	function sI(e, t) {
		const r = JC(e, t);
		return r || (e && Qf(e) === "nn" && t.includes("no") ? "no" : null);
	}
	function fs(e) {
		const t = [
			e.explicitLanguage,
			e.savedLanguage,
			e.htmlLang,
			e.browserLanguage,
		];
		for (const r of t) {
			const n = sI(r, e.enabledLanguages);
			if (n) return n;
		}
		return e.surveyDefault;
	}
	function hh(e) {
		var n, o;
		const t = (n = e.language) == null ? void 0 : n.code,
			r = ((o = e.languages) == null ? void 0 : o.map((i) => i.code)) || [];
		return t ? [t, ...r] : r;
	}
	function gh(e) {
		const t = [];
		return (
			e.language && t.push(e.language), e.languages && t.push(...e.languages), t
		);
	}
	function zn() {
		return typeof window > "u"
			? "desktop"
			: window.innerWidth < 768
				? "mobile"
				: window.innerWidth < 1024
					? "tablet"
					: "desktop";
	}
	function hs() {
		return typeof navigator < "u" ? navigator.language : void 0;
	}
	function Co(e) {
		return {
			device: zn(),
			traits: e.traits ?? {},
			language: e.language,
			locale: e.locale ?? hs(),
		};
	}
	function gs(e, t) {
		const r = e[t.slug];
		return (
			e._id === t.visitorId &&
			(r == null ? void 0 : r.sessionId) === t.sessionId &&
			(r == null ? void 0 : r.state) !== "Completed" &&
			(r == null ? void 0 : r.state) !== "Rejected" &&
			(r == null ? void 0 : r.state) !== "NotSelected"
		);
	}
	const aI = 6e4;
	function lI(e, t) {
		if (
			typeof document > "u" ||
			Array.from(document.querySelectorAll("skyra-survey")).some(
				(i) => i.getAttribute("slug") === e,
			)
		)
			return;
		const n = document.querySelector(t);
		if (!n) return;
		const o = document.createElement("skyra-survey");
		o.setAttribute("slug", e), n.appendChild(o);
	}
	function Ol(e) {
		if (!(typeof document > "u"))
			for (const t of document.querySelectorAll("skyra-survey"))
				t.getAttribute("slug") === e && t.remove();
	}
	function uI(e, t, r) {
		if (e._id !== t._id) return !0;
		const n = e[r],
			o = t[r];
		return (n == null ? void 0 : n.sessionId) !==
			(o == null ? void 0 : o.sessionId)
			? !0
			: ((o == null ? void 0 : o.state) === "Completed" ||
					(o == null ? void 0 : o.state) === "Rejected" ||
					(o == null ? void 0 : o.state) === "NotSelected") &&
					((n == null ? void 0 : n.state) !== o.state ||
						(n == null ? void 0 : n.lastSync) !== o.lastSync);
	}
	function cI(e) {
		var n, o, i;
		let t;
		typeof document < "u" &&
			document.documentElement &&
			((t = document.documentElement.lang),
			!t &&
				typeof document.documentElement.getAttribute == "function" &&
				(t = document.documentElement.getAttribute("lang") || void 0));
		const r = [
			(n = e.language) == null ? void 0 : n.code,
			...(((o = e.languages) == null ? void 0 : o.map((s) => s.code)) || []),
		].filter(Boolean);
		return fs({
			explicitLanguage: void 0,
			savedLanguage: void 0,
			htmlLang: t,
			browserLanguage: typeof navigator < "u" ? navigator.language : void 0,
			surveyDefault: ((i = e.language) == null ? void 0 : i.code) || "en",
			enabledLanguages: r,
		});
	}
	function dI(e) {
		var o;
		if (e.state._l) return e.state._l;
		let t;
		typeof document < "u" &&
			document.documentElement &&
			((t = document.documentElement.lang),
			!t &&
				typeof document.documentElement.getAttribute == "function" &&
				(t = document.documentElement.getAttribute("lang") || void 0));
		const r = e.surveys[0];
		if (!r) return "en";
		const n = Array.from(
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
		return fs({
			explicitLanguage: void 0,
			savedLanguage: void 0,
			htmlLang: t,
			browserLanguage: typeof navigator < "u" ? navigator.language : void 0,
			surveyDefault: ((o = r.language) == null ? void 0 : o.code) || "en",
			enabledLanguages: n,
		});
	}
	function Pl(e, t) {
		const r = e.getItem("skyra.state");
		if (!r) return Nr.parse({ _id: Le() });
		try {
			const n = JSON.parse(r);
			return Nr.parse(n);
		} catch (n) {
			return (
				t &&
					Cn({
						apiHost: t.apiHost,
						event: "cookie_state_parse_failed",
						reason:
							n instanceof SyntaxError ? "invalid_json" : "invalid_schema",
						org: t.org,
						url: t.url,
					}),
				Nr.parse({ _id: Le() })
			);
		}
	}
	function pI(e, t) {
		e.setItem("skyra.state", JSON.stringify(t));
	}
	function fI(e, t) {
		const r =
			e.consent && e.cookieStorage.getItem("skyra.state")
				? Pl(e.cookieStorage, e)
				: e.state;
		if (
			t.visitorId !== e.visitorId ||
			!gs(r, {
				slug: t.slug,
				visitorId: t.visitorId,
				sessionId: t.requestedSessionId,
			})
		)
			return null;
		const n = r[t.slug];
		return {
			...r,
			[t.slug]: {
				...n,
				state:
					(n == null ? void 0 : n.state) === "Capture" ? "Capture" : "Selected",
				sessionId: t.sessionId,
			},
		};
	}
	function mh(e, t) {
		const r = us(e),
			n = e.urlRules && e.urlRules.length > 0;
		if (!r && n && !Tl(t, "Follow", e.urlRules)) return !1;
		const o = zn(),
			i = (e.hideRules || []).filter((s) => s[o] && Hp(s, t));
		return i.some((s) => !s.follow)
			? !1
			: r
				? cs({
						urlString: t,
						surveyStarted: !0,
						showRules: e.showRules || [],
						followRules: e.followRules || [],
						hideRules: e.hideRules || [],
						device: o,
						isInline: !1,
					}) || i.some((s) => s.follow)
				: !!n;
	}
	function zo(e) {
		var r, n, o;
		if (e.popupCapture)
			return (
				e.activePopupSurvey ??
				((r = e.popupCapture.getSnapshot().context) == null
					? void 0
					: r.survey) ??
				null
			);
		const t =
			(o =
				(n = e.popupCoordinator) == null ? void 0 : n.getSnapshot().context) ==
			null
				? void 0
				: o.selectedSurvey;
		return t ? (e.surveys.find((i) => i.fullSlug === t) ?? null) : null;
	}
	function In(e, t) {
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
	function Tn(e) {
		return !e.id && !e.slug && (!e.renderType || e.renderType === "Popup");
	}
	function hI(e, t) {
		return e.id === t.id || e.fullSlug === t.fullSlug;
	}
	function Ml(e, t) {
		return t.some((r) => hI(e, r));
	}
	function gI(e) {
		return e.popupHidden
			? []
			: e.hiddenPopupSurveys.length === 0
				? e.popupSurveys
				: e.popupSurveys.filter((t) => !Ml(t, e.hiddenPopupSurveys));
	}
	function yh(e) {
		return e.popupCapture
			? e.popupHidden
				? !0
				: e.activePopupSurvey
					? Ml(e.activePopupSurvey, e.hiddenPopupSurveys)
					: !1
			: !1;
	}
	function mI(e, t) {
		return Tn(t) ? [] : e.filter((r) => In(t, r) === !1);
	}
	function vh(e, t, r) {
		return r === "replace" ? t : { ...e, ...t };
	}
	const yI = 8e3,
		vI = 3,
		bI = $({
			success: j(!0),
			degraded: B().optional(),
			recruitmentAccepted: B().optional(),
		});
	class Mr extends Error {
		constructor(t, r) {
			super(t), (this.code = t), (this.retryable = r);
		}
	}
	async function wI(e, t) {
		if (!Bi.safeParse(JSON.parse(e.body)).success)
			throw new Mr("invalid_answer", !1);
		const n = new AbortController(),
			o = () => n.abort();
		t.throwIfAborted(), t.addEventListener("abort", o, { once: !0 });
		const i = setTimeout(o, yI);
		try {
			const s = await fetch(`${e.apiHost}/response`, {
				method: "POST",
				body: e.body,
				headers: { "Content-Type": "application/json" },
				signal: n.signal,
			});
			if (!s.ok)
				throw new Mr(
					"answer_rejected",
					s.status === 408 || s.status === 429 || s.status >= 500,
				);
			const a = await s.json().catch(() => null);
			if (!bI.safeParse(a).success) throw new Mr("invalid_acceptance", !1);
			t.throwIfAborted();
		} catch (s) {
			throw t.aborted || s instanceof Mr
				? s
				: new Mr(n.signal.aborted ? "save_timeout" : "network_error", !0);
		} finally {
			clearTimeout(i), t.removeEventListener("abort", o);
		}
	}
	function bh(e, t) {
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
				([r, n]) => ({ cardId: r, itemId: n }),
			),
		};
	}
	function Io(e, t, r) {
		const n = e.findIndex((s) => s.order === t.currentCard),
			o = e.slice(n + 1),
			i = bh(t.variables, r);
		for (const s of o) if (Vf(s.rules, i, nh, s.ruleMode ?? "and")) return s;
		return null;
	}
	function kI(e, t, r) {
		const n = bh(t.variables, r);
		for (const o of e) if (Vf(o.rules, n, nh, o.ruleMode ?? "and")) return o;
		return null;
	}
	function wh(e, t, r, n, o) {
		const i = e.find((s) => s.order === t.currentCard);
		if (!i) return t;
		if (i.type === "TopTaskCard") t.variables.task = Ce(o);
		else if (i.type === "SegmentCard" && n) {
			const s = Ce(n),
				a = Ce(o);
			t.variables.segments = { ...t.variables.segments, [s]: a };
		} else if (i.type === "CompletionCard") t.variables.completion = o;
		else if (i.type === "LikertCard" && "likertItems" in i.likertScale) {
			if (i.likertScale.likertItems.find((a) => a.id === o)) {
				const a = Ce(i.id),
					l = Ce(o);
				t.variables.scales = { ...t.variables.scales, [a]: l };
			}
		} else if (i.type === "MultiSelectCard") {
			const s = Ce(i.id),
				a = o.map(Ce);
			t.variables.multiSelect = { ...t.variables.multiSelect, [s]: a };
		} else if (i.type === "InputCard") t.values[i.id] = o;
		else if (i.type === "RecruitmentCard") {
			const s = o;
			(t.variables.recruited = s !== void 0),
				s !== void 0 && (t.values[i.id] = s);
		} else if (i.type === "SingleSelectCard") {
			const s = Ce(i.id),
				a = Ce(o);
			t.variables.singleSelect = { ...t.variables.singleSelect, [s]: a };
		}
		return t;
	}
	function _I(e, t, r) {
		const n = Io(e, t, r);
		return t.currentCard !== void 0 && n
			? {
					...t,
					history: [...t.history, t.currentCard],
					currentCard: (n == null ? void 0 : n.order) ?? t.currentCard,
				}
			: t;
	}
	function SI(e) {
		if (e.history.length === 0) return e;
		const [t, ...r] = [...e.history].reverse();
		return { ...e, currentCard: t, history: r.reverse() };
	}
	function xI(e, t, r) {
		return !!Io(e, t, r);
	}
	function $I(e, t, r) {
		const n = Io(e, t, r);
		if (!n) return !1;
		const o = e.find((i) => i.order === n.order);
		return (o == null ? void 0 : o.size) === "Minimal";
	}
	function CI(e, t, r) {
		return !Io(e, t, r);
	}
	function zI(e, t) {
		const r = t.currentCard,
			n = e.find((o) => o.order === r);
		return (n == null ? void 0 : n.type) === "MessageCard";
	}
	const II = Ve(({ input: e }) => {
		const t = {
				submissionId: Le(),
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
			r = Bi.parse(t);
		return xn(r, { apiHost: e.apiHost }), Promise.resolve();
	});
	function TI(e) {
		const t = e.path ?? "/",
			r = `skyra.${e.slug.replace(/\//g, ".")}`;
		e.storage.removeItem(r, { path: t });
	}
	const kh = vn({
			actors: {
				postCardValue: II,
				postAcceptedAnswer: Ve(({ input: e, signal: t }) => wI(e, t)),
			},
			delays: {
				initial: 0,
				autoClose: ({ context: e }) => e.survey.autoCloseAfter ?? 0,
				saveRetry: ({ context: e }) => e.saveAttempts * 500,
			},
			actions: {
				prepareAnswer: L(({ context: e, event: t }) => {
					ir(t, "submit");
					const r = e.survey.cards.find((o) => o.order === e.state.currentCard),
						n = structuredClone(t);
					return {
						saveAttempts: 0,
						saveError: void 0,
						pendingAnswer: {
							event: n,
							apiHost: e.apiHost,
							body: JSON.stringify({
								submissionId: Le(),
								event: "CardValue",
								survey: e.survey.id,
								session: e.sessionId,
								visitor: e.visitorId,
								card: r.id,
								type: r.type,
								cardOrder: r.order,
								value: n.value,
								languageCode: e.language,
								url: e.url,
							}),
						},
					};
				}),
				acceptAnswer: L(({ context: e }) => {
					const t = e.pendingAnswer.event;
					return {
						state: wh(
							e.survey.cards,
							structuredClone(e.state),
							t.cardId,
							t.key,
							t.value,
						),
					};
				}),
				setNextCards: L({
					state: ({ context: e }) =>
						_I(e.survey.cards, e.state, e.audienceContext),
				}),
				setPrevCard: L({ state: ({ context: e }) => SI(e.state) }),
				clearCookieState: ({ context: e }) => {
					const t = e.survey.renderType === "Popup";
					TI({
						storage: e.cookieStorage,
						path: t ? void 0 : window.location.pathname,
						slug: e.survey.fullSlug,
					});
				},
				setMinimized: L({
					state: ({ context: e }) => ({ ...e.state, state: "Minimized" }),
				}),
				setShowCard: L({
					state: ({ context: e }) => ({ ...e.state, state: "ShowCard" }),
				}),
				storeCookieState: ({ context: e }) => {
					const { survey: t, cookieConsent: r } = e;
					r &&
						t.renderType === "Popup" &&
						rI({
							storage: e.cookieStorage,
							state: e.state,
							owner: { visitorId: e.visitorId, sessionId: e.sessionId },
							slug: e.survey.fullSlug,
							surveyType: e.survey.surveyType,
							renderType: e.survey.renderType,
							confineToDomain: e.survey.confineToDomain,
						});
				},
				setCardValue: L({
					state: ({ context: e, event: t }) => (
						ir(t, "submit"),
						wh(e.survey.cards, e.state, t.cardId, t.key, t.value)
					),
				}),
				diagnoseCurrentCardMissing: ({ context: e, event: t }) => {
					ir(t, "submit"),
						Cn({
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
					Cn({
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
					var r;
					return (
						ir(t, "submit"),
						((r = e.survey.cards.find(
							(n) => n.order === e.state.currentCard,
						)) == null
							? void 0
							: r.id) === t.cardId
					);
				},
				submittedCardExists: ({ context: e, event: t }) => (
					ir(t, "submit"), e.survey.cards.some((r) => r.id === t.cardId)
				),
				hasEmptyValue: ({ event: e }) => {
					ir(e, "submit");
					const t = e.value;
					return typeof t == "string"
						? t.trim() === ""
						: Array.isArray(t)
							? t.length === 0
							: t === void 0;
				},
				hasNextCard: ({ context: e }) =>
					xI(e.survey.cards, e.state, e.audienceContext),
				nextCardStartsMinimized: ({ context: e }) =>
					$I(e.survey.cards, e.state, e.audienceContext),
				isLastCard: ({ context: e }) =>
					CI(e.survey.cards, e.state, e.audienceContext),
				isMessageCard: ({ context: e }) => zI(e.survey.cards, e.state),
				isPopup: ({ context: e }) => e.survey.renderType === "Popup",
				isInline: ({ context: e }) => e.survey.renderType === "Inline",
				isMinimized: ({ context: e }) => e.state.state === "Minimized",
				wasPreviouslyVisible: ({ context: e }) => e.state.state === "ShowCard",
				cookieConsented: ({ context: e }) => e.cookieConsent,
			},
		}).createMachine({
			id: "Capture",
			context: ({ input: e }) => {
				var y, v, b, w, S, T, O;
				const t = (y = e.state) == null ? void 0 : y.state;
				let r = t;
				if (typeof t == "string") {
					const N = t.toLowerCase();
					N === "minimized"
						? (r = "Minimized")
						: N === "showcard" && (r = "ShowCard");
				}
				const n =
						e.language ||
						((v = e.survey.language) == null ? void 0 : v.code) ||
						"en",
					o = {
						device: e.device ?? "desktop",
						traits: e.traits ?? {},
						language: n,
						locale: e.locale,
					},
					i = ((b = e.survey.cards[0]) == null ? void 0 : b.order) ?? 0,
					s = ((w = e.state) == null ? void 0 : w.currentCard) ?? i,
					a = window.location.pathname,
					l = e.survey.renderType === "Inline",
					u = a === ((S = e.state) == null ? void 0 : S.path),
					d =
						((T = e.state) == null ? void 0 : T.currentCard) === void 0 ||
						(l && !u),
					c = $n.parse(
						!l || u
							? { ...e.state, state: r, currentCard: s }
							: { currentCard: i },
					),
					f = d
						? $n.parse({
								...c,
								currentCard:
									((O = kI(e.survey.cards, c, o)) == null ? void 0 : O.order) ??
									i,
							})
						: c,
					p = e.survey.cards.find((N) => N.order === f.currentCard),
					h =
						e.survey.renderType !== "App" &&
						r === void 0 &&
						(p == null ? void 0 : p.size) === "Minimal",
					g = $n.parse({ ...f, state: h ? "Minimized" : f.state, path: a });
				return {
					url: e.url,
					survey: e.survey,
					language: n,
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
						actions: [L({ cookieConsent: ({ event: e }) => e.value })],
						guard: Ut(["isPopup", ({ event: e }) => e.value === !1]),
					},
					{ actions: L({ cookieConsent: ({ event: e }) => e.value }) },
				],
				setUrl: { actions: L({ url: ({ event: e }) => e.url }) },
				updateSurvey: { actions: L({ survey: ({ event: e }) => e.survey }) },
				setLanguage: {
					actions: [
						L({
							language: ({ event: e }) => e.language,
							audienceContext: ({ context: e, event: t }) => ({
								...e.audienceContext,
								language: t.language,
							}),
						}),
						Mf(({ context: e, event: t, enqueue: r }) => {
							e.survey.renderType !== "App" &&
								r(Sl({ type: "setLanguage", language: t.language }));
						}),
					],
				},
				setTraits: {
					actions: L({
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
								guard: Ut([
									"isApp",
									"isLastCard",
									"isMessageCard",
									({ context: e }) => e.state.history.length > 0,
								]),
								target: "Confirming",
							},
							after: {
								500: {
									guard: Ut(["isInline", "isLastCard", "isMessageCard"]),
									actions: "clearCookieState",
								},
								autoClose: {
									guard: Ut([
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
								completeSurvey: { target: "#Done", guard: vo("isApp") },
								submit: [
									{
										guard: Ut(["isApp", vo("submittedCurrentCard")]),
										actions: "diagnoseCurrentCardMissing",
									},
									{
										guard: Ut([
											"isApp",
											"hasEmptyValue",
											({ context: e }) => {
												var t;
												return (
													((t = e.survey.cards.find(
														(r) => r.order === e.state.currentCard,
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
										guard: Ut(["isApp", "hasEmptyValue"]),
									},
									{
										target: "GoToNextCard",
										guard: "hasEmptyValue",
										actions: ["setCardValue", "storeCookieState"],
									},
									{
										target: "GoToNextCard",
										guard: vo("submittedCardExists"),
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
											Ne(({ event: e, context: t }) => {
												var s, a;
												const r = t.state,
													n = t.survey.cards.find(
														(l) => l.order === r.currentCard,
													),
													o = bp.parse(n);
												if (!n) throw new Error("Card found");
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
														u =
															(s = o.taskItems) == null
																? void 0
																: s.find((d) => d.task.id === l);
													return {
														...i,
														cardType: "TopTaskCard",
														value: {
															id: l,
															name:
																u && "name" in u.task ? u.task.name : "Unknown",
															label: u == null ? void 0 : u.label,
														},
													};
												}
												if (o.type === "RecruitmentCard") {
													const l = e.value;
													return { ...i, cardType: o.type, value: l };
												}
												if (o.type === "LikertCard") {
													const l = n,
														u = e.value,
														d = l.likertScale.likertItems.find(
															(c) => c.id === u,
														);
													return {
														...i,
														cardType: "LikertCard",
														value: {
															id: u,
															name: (d == null ? void 0 : d.label) ?? "Unknown",
															emoji:
																(a = d == null ? void 0 : d.emoji) == null
																	? void 0
																	: a.native,
														},
													};
												}
												if (o.type === "SegmentCard") {
													const l = n,
														u = e.value,
														d = l.items.find((c) => c.value.id === u);
													return {
														...i,
														cardType: "SegmentCard",
														value: {
															id: u,
															name: (d == null ? void 0 : d.name) ?? "Unknown",
															label: d == null ? void 0 : d.label,
														},
													};
												}
												if (o.type === "SingleSelectCard") {
													const l = n,
														u = e.value,
														d = l.selectItems.find((c) => c.id === u);
													return {
														...i,
														cardType: "SingleSelectCard",
														value: {
															id: u,
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
									guard: Ut([vo("isApp"), "nextCardStartsMinimized"]),
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
							entry: L({
								saveAttempts: ({ context: e }) => e.saveAttempts + 1,
							}),
							invoke: {
								src: "postAcceptedAnswer",
								input: ({ context: e }) => e.pendingAnswer,
								onDone: {
									target: "GoToNextCard",
									actions: [
										"acceptAnswer",
										Ne(({ context: e }) => ({
											type: "answerAccepted",
											cardId: e.pendingAnswer.event.cardId,
										})),
										L({ pendingAnswer: void 0, saveError: void 0 }),
									],
								},
								onError: [
									{
										guard: ({ context: e, event: t }) =>
											t.error instanceof Mr &&
											t.error.retryable &&
											e.saveAttempts < vI,
										target: "WaitToRetryAnswer",
									},
									{
										target: "SaveFailed",
										actions: L({
											saveError: ({ event: e }) =>
												e.error instanceof Mr ? e.error.code : "save_failed",
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
									actions: L({ saveAttempts: 0, saveError: void 0 }),
								},
							},
						},
						SubmitCard: {
							invoke: {
								src: "postCardValue",
								input: ({ context: e, event: t }) => {
									ir(t, "submit");
									const r = e.survey.cards.find((n) => n.id === t.cardId);
									if (!r)
										throw (
											(Cn({
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
										cardType: r.type,
										cardOrder: r.order,
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
					entry: ["clearCookieState", L({ output: { type: "rejected" } })],
				},
				Done: {
					id: "Done",
					type: "final",
					entry: ["clearCookieState", L({ output: { type: "completed" } })],
				},
			},
			output: ({ context: e }) => e.output,
		}),
		_h = (e) => {
			var t, r, n;
			return e.surveyAlreadyCaptured ||
				(e.testMode &&
					e.selectedSurvey &&
					(r =
						(t = e.surveyOverrides) == null ? void 0 : t[e.selectedSurvey]) !=
						null &&
					r.only)
				? 0
				: (((n = e.fullSurvey) == null ? void 0 : n.initialDelay) ?? 0);
		},
		ar = (e, t, r) => {
			var n;
			return fs({
				savedLanguage: t,
				browserLanguage: r,
				surveyDefault: ((n = e.language) == null ? void 0 : n.code) || "en",
				enabledLanguages: hh(e),
			});
		},
		EI = vn({
			actors: {
				checkCookieSupport: tI,
				loadFullSurveys: Al,
				sessionInit: iI,
				renderSurvey: ch,
				canRenderSurvey: eI,
				sleepActor: Ve(
					({ input: e }) => new Promise((t) => setTimeout(t, e.delay)),
				),
				checkCaptureRate: Ve(
					({ input: e }) =>
						new Promise((t) => {
							const r = e.rate > 0 ? e.rate / 100 : 0,
								n = e.capture || Math.random() < r;
							t({ selected: n });
						}),
				),
			},
			guards: {
				selectedDrawLostForVisit: ({ context: e }) => {
					var n;
					const t = e.eligibleSurveys.find(
						(o) => o.fullSlug === e.selectedSurvey,
					);
					if (!t) return !1;
					const r = (n = e.rejectedDraws) == null ? void 0 : n[t.fullSlug];
					return (
						r !== void 0 && ((t.minTimeForRetrigger ?? 0) <= 0 || !El(t, r))
					);
				},
				selectedInteractionContinues: ({ context: e, event: t }) => {
					if (t.type === "reconcile" && t.interactionChanged) return !1;
					const r = e.selectedSurvey && e.cookieState[e.selectedSurvey];
					return e.sessionId &&
						r &&
						(r.state === "Completed" ||
							r.state === "Rejected" ||
							r.state === "NotSelected")
						? !1
						: e.eligibleSurveys.some((n) => n.fullSlug === e.selectedSurvey);
				},
			},
			actions: {
				updateReloadContext: L(({ context: e, event: t }) => {
					if (t.type !== "reload") return {};
					const r = t.language ?? e.language,
						n =
							e.fullSurvey ??
							e.surveys.find((o) => o.fullSlug === e.selectedSurvey);
					return {
						url: t.url,
						cookieState: t.cookieState ?? e.cookieState,
						rejectedDraws:
							t.rejectedDraws ??
							(new URL(e.url).pathname === new URL(t.url).pathname
								? e.rejectedDraws
								: {}),
						language: r,
						resolvedLanguage: n ? ar(n, r, e.locale) : null,
					};
				}),
				clearSelection: L({
					selectedSurvey: null,
					surveyAlreadyCaptured: !1,
					fullSurvey: null,
					sessionId: null,
					resolvedLanguage: null,
					error: void 0,
				}),
				removePendingElement: ({ context: e }) => {
					e.selectedSurvey && Ol(e.selectedSurvey);
				},
				rememberInitializedSession: L(({ context: e }) => {
					if (!e.selectedSurvey || !e.sessionId) return {};
					const t = e.cookieState[e.selectedSurvey];
					return (t == null ? void 0 : t.state) === "Completed" ||
						(t == null ? void 0 : t.state) === "Rejected" ||
						(t == null ? void 0 : t.state) === "NotSelected"
						? {}
						: {
								cookieState: {
									...e.cookieState,
									[e.selectedSurvey]: {
										...t,
										state:
											(t == null ? void 0 : t.state) === "Capture"
												? "Capture"
												: "Selected",
										sessionId: e.sessionId,
									},
								},
							};
				}),
				updateTraits: L(({ context: e, event: t }) =>
					t.type !== "setTraits"
						? {}
						: {
								traits:
									t.mode === "replace"
										? t.traits
										: { ...e.traits, ...t.traits },
							},
				),
				filterEligibleSurveys: L(({ context: e }) => {
					var n;
					const t =
						(n = Object.entries(e.surveyOverrides || {}).find(([, o]) =>
							o == null ? void 0 : o.only,
						)) == null
							? void 0
							: n[0];
					if (t) {
						const o = e.surveys.find((i) => i.fullSlug === t);
						return { eligibleSurveys: o ? [o] : [] };
					}
					return {
						eligibleSurveys: e.surveys.filter((o) => {
							var u;
							const i = (u = e.cookieState) == null ? void 0 : u[o.fullSlug],
								s = Co({
									traits: e.traits,
									language: ar(o, e.language, e.locale),
									locale: e.locale,
								}),
								a = o.urlRules && o.urlRules.length > 0,
								l = us(o);
							if (!a && !l) return !1;
							if (!l && a && o.urlRules) {
								const d =
									(i == null ? void 0 : i.state) === "Capture"
										? "Follow"
										: "Trigger";
								if (!Tl(e.url, d, o.urlRules)) return !1;
							}
							return (l &&
								!cs({
									urlString: e.url,
									surveyStarted: (i == null ? void 0 : i.state) === "Capture",
									showRules: o.showRules || [],
									followRules: o.followRules || [],
									hideRules: o.hideRules || [],
									device: zn(),
									isInline: !1,
								})) ||
								!$l(o.audienceRules, s, o.audienceRuleMode)
								? !1
								: i
									? i.state === "Completed"
										? ah(o, i.lastSync)
										: i.state === "Rejected" || i.state === "NotSelected"
											? El(o, i.lastSync)
											: i.state === "Capture" || i.state === "Selected"
									: !0;
						}),
					};
				}),
				selectFirstEligibleSurvey: L(({ context: e }) => {
					const t = e.eligibleSurveys.find((s) => {
						var l;
						const a = (l = e.cookieState) == null ? void 0 : l[s.fullSlug];
						return (a == null ? void 0 : a.state) === "Capture";
					});
					if (t)
						return {
							selectedSurvey: t.fullSlug,
							resolvedLanguage: ar(t, e.language, e.locale),
							surveyAlreadyCaptured: !0,
						};
					let r = !1;
					if (e.requestedSurvey) {
						const s = e.eligibleSurveys.find(
							(a) => a.fullSlug === e.requestedSurvey,
						);
						if (s)
							return {
								selectedSurvey: s.fullSlug,
								resolvedLanguage: ar(s, e.language, e.locale),
								requestedSurvey: void 0,
							};
						r = !0;
					}
					const i = e.eligibleSurveys
						.map((s) => {
							const a = nI(
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
						resolvedLanguage: i ? ar(i, e.language, e.locale) : null,
						...(r && { requestedSurvey: void 0 }),
					};
				}),
				rememberSelection: L(({ context: e }) =>
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
				rememberLostDraw: L(({ context: e }) => ({
					rejectedDraws: e.selectedSurvey
						? { ...e.rejectedDraws, [e.selectedSurvey]: Date.now() }
						: e.rejectedDraws,
				})),
				emitSurveySelected: Ne(({ context: e }) => {
					if (!e.selectedSurvey) throw new Error("No survey selected");
					return { type: "surveySelected", slug: e.selectedSurvey };
				}),
				postPreflightDiagnostic: ({ context: e, event: t }) => {
					if (!("output" in t)) return;
					const r = t.output;
					if (r.canRender) return;
					const n = e.selectedSurvey;
					if (!n) return;
					const o = e.surveys.find((i) => i.fullSlug === n);
					dh({
						apiHost: e.apiHost,
						org: e.org,
						slug: n,
						surveyId: o == null ? void 0 : o.id,
						visitorId: e.visitorId,
						reason: r.reason,
						url: e.url,
					});
				},
				postRenderReturnedFalseDiagnostic: ({ context: e }) => {
					var r;
					const t = e.selectedSurvey;
					t &&
						dh({
							apiHost: e.apiHost,
							org: e.org,
							slug: t,
							surveyId: (r = e.fullSurvey) == null ? void 0 : r.id,
							visitorId: e.visitorId,
							sessionId: e.sessionId ?? void 0,
							reason: "render_returned_false",
							url: e.url,
						});
				},
				postMissingFullSurveyDiagnostic: ({ context: e }) => {
					const t = e.selectedSurvey;
					if (!t) return;
					const r = e.surveys.find((n) => n.fullSlug === t);
					Cn({
						apiHost: e.apiHost,
						event: "selected_survey_missing_full_survey",
						org: e.org,
						slug: t,
						surveyId: r == null ? void 0 : r.id,
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
				reload: {
					actions: [
						_o(({ context: e, event: t }) => ({
							type: "reconcile",
							interactionChanged:
								!!e.selectedSurvey &&
								!!t.cookieState &&
								uI(e.cookieState, t.cookieState, e.selectedSurvey),
						})),
						"updateReloadContext",
						"filterEligibleSurveys",
					],
				},
				syncCookieState: {
					actions: L({
						cookieState: ({ event: e }) => e.cookieState,
						rejectedDraws: ({ context: e, event: t }) =>
							t.rejectedDraws ?? e.rejectedDraws,
					}),
				},
				reconcile: { target: ".FilterEligible", actions: "clearSelection" },
				startSurvey: {
					actions: L({ requestedSurvey: ({ event: e }) => e.slug }),
				},
				setTraits: { actions: "updateTraits" },
				setConsent: [
					{
						target: ".NoConsent",
						guard: ({ event: e }) => e.value === !1,
						actions: L({ consent: ({ event: e }) => e.value }),
					},
					{ actions: L({ consent: ({ event: e }) => e.value }) },
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
						reconcile: {},
						setConsent: {
							target: "CheckCookieSupport",
							guard: ({ event: e }) => e.value === !0,
							actions: L({ consent: ({ event: e }) => e.value }),
						},
					},
				},
				CheckCookieSupport: {
					description: "Verify cookies work",
					on: { reconcile: {} },
					invoke: {
						src: "checkCookieSupport",
						input: ({ context: e }) => ({ consent: e.consent }),
						onDone: { target: "FilterEligible" },
						onError: {
							target: "Failed",
							actions: L({ error: ({ event: e }) => e.error }),
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
								var c, f, p;
								if (e.eligibleSurveys.length === 0) return !1;
								const t = Date.now(),
									r = e.eligibleSurveys.filter((h) => {
										var y;
										const g =
											(y = e.cookieState) == null ? void 0 : y[h.fullSlug];
										return (
											!g || g.state === "Capture" || g.state === "Selected"
										);
									}),
									n = r
										.map((h) => h.minTimeForRetake)
										.filter((h) => h !== null)
										.map((h) => h * 1e3),
									o =
										(((c = e.organisation) == null
											? void 0
											: c.completionTimeout) ?? 14400) * 1e3,
									i =
										(((f = e.organisation) == null
											? void 0
											: f.rejectionTimeout) ?? 28800) * 1e3,
									s = n.length > 0 ? Math.min(...n, o) : o,
									a = r
										.map((h) => h.minTimeForRetrigger)
										.filter((h) => h !== null)
										.map((h) => h * 1e3),
									l = a.length > 0 ? Math.min(...a, i) : i;
								let u = null,
									d = null;
								for (const h of e.surveys) {
									const g =
										(p = e.cookieState) == null ? void 0 : p[h.fullSlug];
									g &&
										g.lastSync &&
										h.renderType !== "Inline" &&
										(g.state === "Completed" &&
											(u = Math.max(u ?? 0, g.lastSync)),
										g.state === "Rejected" &&
											(d = Math.max(d ?? 0, g.lastSync)));
								}
								return !((u && t - u < s) || (d && t - d < l));
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
						{ guard: "selectedDrawLostForVisit", target: "Idle" },
						{
							target: "CheckCaptureRate",
							guard: ({ context: e }) => e.selectedSurvey !== null,
						},
						{ target: "Idle" },
					],
				},
				CheckCaptureRate: {
					description: "Random selection based on capturePercent",
					on: {
						reconcile: [
							{ guard: "selectedInteractionContinues" },
							{ target: "FilterEligible", actions: "clearSelection" },
						],
					},
					invoke: {
						src: "checkCaptureRate",
						input: ({ context: e }) => {
							const t = e.selectedSurvey,
								r = e.surveys.find((n) => n.fullSlug === t);
							if (!r) throw new Error("No survey selected");
							return { capture: e.testMode, rate: r.capturePercent };
						},
						onDone: [
							{
								target: "LoadAndInit",
								guard: ({ event: e }) => e.output.selected === !0,
								actions: ["rememberSelection", "emitSurveySelected"],
							},
							{
								target: "Idle",
								actions: [
									"rememberLostDraw",
									Ne(({ context: e }) => {
										const t = e.selectedSurvey;
										if (!t)
											throw new Error(
												"Invalid state: selectedSurvey is required for surveyNotSelected event",
											);
										return { type: "surveyNotSelected", slug: t };
									}),
								],
							},
						],
					},
				},
				LoadAndInit: {
					description: "Load full survey + initialize session",
					on: {
						reconcile: [
							{ guard: "selectedInteractionContinues" },
							{ target: "FilterEligible", actions: "clearSelection" },
						],
					},
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
										actions: L({
											fullSurvey: ({ event: e }) => e.output[0] || null,
											resolvedLanguage: ({ context: e, event: t }) => {
												const r = t.output[0];
												return r ? ar(r, e.language, e.locale) : null;
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
									actions: L({ error: ({ event: e }) => e.error }),
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
									const r = e.surveys.find((n) => n.fullSlug === t);
									if (!r) throw new Error("No survey found for slug: " + t);
									return { survey: r, selector: e.selector };
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
									actions: L({ error: ({ event: e }) => e.error }),
								},
							},
						},
						InitialDelay: {
							description:
								"Wait until the popup is allowed to appear before recording an impression",
							always: {
								target: "SessionInit",
								guard: ({ context: e }) => _h(e) <= 0,
							},
							invoke: {
								src: "sleepActor",
								input: ({ context: e }) => ({ delay: _h(e) }),
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
									const r = e.surveys.find((i) => i.fullSlug === t);
									if (!r) throw new Error("No survey found for slug: " + t);
									const n =
										(o = e.cookieState) == null ? void 0 : o[r.fullSlug];
									return [
										{
											apiHost: e.apiHost,
											surveyId: r.id,
											visitorId: e.visitorId,
											sessionId: n == null ? void 0 : n.sessionId,
											slug: r.fullSlug,
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
											sessionRegistry: e.sessionRegistry,
										},
									];
								},
								onDone: {
									target: "SessionInitialized",
									actions: [
										L({
											sessionId: ({ event: e }) => {
												var t;
												return (
													((t = e.output[0]) == null ? void 0 : t.sessionId) ||
													null
												);
											},
										}),
										"rememberInitializedSession",
									],
								},
								onError: {
									target: "#popupCoordinator.Idle",
									actions: L({ error: ({ event: e }) => e.error }),
								},
							},
						},
						Done: { type: "final" },
						SessionInitialized: {
							always: [
								{ guard: "selectedInteractionContinues", target: "Done" },
								{
									target: "#popupCoordinator.FilterEligible",
									actions: "clearSelection",
								},
							],
						},
					},
					onDone: "Render",
				},
				Render: {
					description: "Inject survey DOM element",
					on: {
						reconcile: [
							{ guard: "selectedInteractionContinues" },
							{
								target: "FilterEligible",
								actions: ["removePendingElement", "clearSelection"],
							},
						],
					},
					invoke: {
						src: "renderSurvey",
						input: ({ context: e }) => {
							const t = e.selectedSurvey;
							if (!t)
								throw new Error(
									"Invalid state: selectedSurvey is required for Render",
								);
							const r = e.surveys.find((n) => n.fullSlug === t);
							if (!r) throw new Error("No survey found for slug: " + t);
							return { survey: r, selector: e.selector };
						},
						onDone: [
							{ target: "Done", guard: ({ event: e }) => e.output !== !1 },
							{ target: "Idle", actions: "postRenderReturnedFalseDiagnostic" },
						],
						onError: {
							target: "Failed",
							actions: L({ error: ({ event: e }) => e.error }),
						},
					},
				},
				Done: {
					description: "Survey ready, emit to controller",
					entry: [
						Ne(({ context: e }) => {
							const t = e.selectedSurvey,
								r = e.fullSurvey,
								n = e.sessionId;
							if (!(t && r && n))
								throw new Error(
									"Invalid state: selectedSurvey, fullSurvey, and sessionId are required for readyToCapture",
								);
							return {
								type: "readyToCapture",
								slug: t,
								survey: r,
								sessionId: n,
								language: e.resolvedLanguage ?? ar(r, e.language, e.locale),
							};
						}),
					],
					type: "final",
				},
				Idle: {
					description: "No survey to show",
					on: {
						reconcile: { target: "FilterEligible", actions: "clearSelection" },
						setTraits: { target: "FilterEligible", actions: "updateTraits" },
						startSurvey: {
							target: "SelectSurvey",
							actions: L({ requestedSurvey: ({ event: e }) => e.slug }),
						},
					},
				},
				Failed: { description: "Error occurred", type: "final" },
			},
		});
	function Sh(e, t) {
		return e instanceof Error ? e.message : t;
	}
	function xh(e, t) {
		var o, i, s;
		const r =
				typeof window < "u"
					? (i = (o = window.skyra) == null ? void 0 : o.getExplicitLanguage) ==
						null
						? void 0
						: i.call(o, t)
					: void 0,
			n =
				(typeof document < "u" &&
					(document.documentElement.lang ||
						document.documentElement.getAttribute("lang"))) ||
				void 0;
		return fs({
			explicitLanguage: r,
			htmlLang: n,
			browserLanguage: hs(),
			surveyDefault: ((s = e.language) == null ? void 0 : s.code) || "en",
			enabledLanguages: hh(e),
		});
	}
	const AI = vn({
			actors: { loadFullSurveys: Al, sessionInit: Qz },
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
					actions: L({
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
							actions: L({
								fullSurvey: ({ event: e }) => e.output[0],
								language: ({ context: e, event: t }) => {
									const r = t.output[0];
									return r ? xh(r, e.slug) : null;
								},
							}),
							target: "CheckEligibility",
						},
						onError: {
							target: "Failed",
							actions: Ne(({ context: e, event: t }) => ({
								type:
									e.kind === "headless"
										? "headlessInitializationFailed"
										: "inlineInitializationFailed",
								slug: e.slug,
								code: "load_failed",
								message: Sh(t.error, `Failed to load ${e.kind} survey.`),
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
										? $l(
												e.fullSurvey.audienceRules,
												Co({
													traits: e.traits,
													language: e.language ?? void 0,
												}),
												e.fullSurvey.audienceRuleMode,
											)
										: t === "Inline"
											? e.testMode && e.selectedForTest
												? !0
												: cs({
															urlString: e.url,
															surveyStarted: !1,
															showRules: e.fullSurvey.showRules,
															followRules: e.fullSurvey.followRules || [],
															hideRules: e.fullSurvey.hideRules,
															device: zn(),
															isInline: !0,
														})
													? $l(
															e.fullSurvey.audienceRules,
															Co({
																traits: e.traits,
																language: e.language ?? void 0,
															}),
															e.fullSurvey.audienceRuleMode,
														)
													: !1
											: !1;
							},
							target: "SessionInit",
						},
						{
							target: "Failed",
							actions: Ne(({ context: e }) => ({
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
								L({ sessionId: ({ event: e }) => e.output[0].sessionId }),
								Ne(({ context: e, event: t }) => {
									var o, i;
									const r =
											typeof window < "u"
												? (i =
														(o = window.skyra) == null
															? void 0
															: o.getExplicitLanguage) == null
													? void 0
													: i.call(o, e.slug)
												: void 0,
										n = e.fullSurvey;
									if (!n)
										throw new Error(
											"Invalid state: fullSurvey is required for readyToCapture",
										);
									return {
										type: "readyToCapture",
										slug: e.slug,
										survey: n,
										sessionId: t.output[0].sessionId,
										language: e.language ?? xh(n, e.slug),
										explicitLanguage: r,
									};
								}),
							],
							target: "Done",
						},
						onError: {
							target: "Failed",
							actions: Ne(({ context: e, event: t }) => ({
								type:
									e.kind === "headless"
										? "headlessInitializationFailed"
										: "inlineInitializationFailed",
								slug: e.slug,
								code: "session_init_failed",
								message: Sh(
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
		}),
		RI = ({ context: e, spawn: t, self: r }) => {
			const n = gI(e);
			if (n.length === 0) return {};
			if (e.popupCoordinator) return {};
			const o = t("popupCoordinator", {
				id: "popup-coordinator",
				input: {
					surveys: n,
					url: e.url,
					org: e.org,
					apiHost: e.apiHost,
					visitorId: e.visitorId,
					cookieStorage: e.cookieStorage,
					cookieState: e.state,
					traits: e.traits,
					language: e.state._l,
					locale: hs(),
					testMode: e.testMode,
					surveyOverrides: e.surveyOverrides,
					selector: e.selector,
					requestedSurvey: e.requestedSurvey,
					consent: e.consent,
					organisation: e.organisation,
					sessionRegistry: e.popupSessionRegistry,
					rejectedDraws: e.rejectedPopupDraws,
				},
				systemId: "popup-coordinator",
			});
			return (
				o.on("*", (i) => {
					r.send(i);
				}),
				{ popupCoordinator: o }
			);
		},
		OI = ({ context: e, event: t, spawn: r, self: n }) => {
			var a, l;
			if (t.type !== "surveyMounted") return {};
			if (!e.inlineSurveys.some((u) => u.fullSlug === t.slug)) return {};
			const i = `inline-${t.slug}-${t.instanceId}`;
			if (e.surveySessionInitializers[i]) return {};
			const s = r("surveySessionInitializer", {
				id: i,
				input: {
					kind: "inline",
					slug: t.slug,
					selectedForTest: !!(
						(l = (a = e.surveyOverrides) == null ? void 0 : a[t.slug]) !=
							null && l.only
					),
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
				s.on("*", (u) => {
					n.send(u);
				}),
				{
					inlineFailures: Object.fromEntries(
						Object.entries(e.inlineFailures).filter(([u]) => u !== t.slug),
					),
					surveySessionInitializers: { ...e.surveySessionInitializers, [i]: s },
				}
			);
		},
		PI = ({ context: e, event: t, spawn: r, self: n }) => {
			if (t.type !== "headlessSessionRequested") return {};
			if (
				!e.headlessSurveys.some((a) => a.fullSlug === t.slug) ||
				e.headlessCaptures[t.slug]
			)
				return {};
			const i = `headless-${t.slug}`;
			if (e.surveySessionInitializers[i]) return {};
			const s = r("surveySessionInitializer", {
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
					n.send(a);
				}),
				{
					headlessFailures: Object.fromEntries(
						Object.entries(e.headlessFailures).filter(([a]) => a !== t.slug),
					),
					surveySessionInitializers: { ...e.surveySessionInitializers, [i]: s },
				}
			);
		},
		MI = ({ context: e, event: t, spawn: r, self: n }) => {
			if (t.type !== "readyToCapture") return {};
			const {
					slug: o,
					survey: i,
					sessionId: s,
					language: a,
					explicitLanguage: l,
				} = t,
				u = `capture-${o}-${s}`,
				d = e.suspendedPopupProgress[o],
				c =
					(d == null ? void 0 : d.sessionId) === s
						? d.state
						: Gz(
								e.cookieStorage,
								o,
								i.renderType === "Popup"
									? { visitorId: e.visitorId, sessionId: s }
									: void 0,
							),
				f = i.renderType === "Inline" || i.renderType === "Headless",
				p = a ?? (f ? l || cI(i) : e.state._l),
				h = r("captureMachine", {
					id: u,
					input: {
						url: e.url,
						survey: i,
						state: c,
						sessionId: s,
						visitorId: e.visitorId,
						parentRef: n,
						cookieStorage: e.cookieStorage,
						cookieConsent: e.consent,
						apiHost: e.apiHost,
						language: p,
						traits: e.traits,
						device: zn(),
						locale: hs(),
					},
					systemId: u,
				});
			h.subscribe({
				complete() {
					const S = h.getSnapshot().output;
					(S == null ? void 0 : S.type) === "rejected"
						? n.send({ type: "surveyRejected", slug: o, captureId: u })
						: (S == null ? void 0 : S.type) === "completed" &&
							n.send({ type: "surveyDone", slug: o, captureId: u });
				},
			}),
				h.on("cardSaved", (w) => {
					n.send(w);
				});
			const g = i.renderType === "Inline",
				y = i.renderType === "Headless",
				{ [o]: v, ...b } = e.suspendedPopupProgress;
			return {
				popupCapture: g || y ? e.popupCapture : h,
				suspendedPopupProgress: g || y ? e.suspendedPopupProgress : b,
				activePopupSurvey: g || y ? e.activePopupSurvey : i,
				inlineCaptures: g ? { ...e.inlineCaptures, [u]: h } : e.inlineCaptures,
				headlessCaptures: y
					? { ...e.headlessCaptures, [o]: h }
					: e.headlessCaptures,
			};
		},
		LI = ({ context: e, event: t }) => {
			var a;
			if (t.type !== "surveyDone" && t.type !== "surveyRejected") return {};
			const r = t.captureId,
				n = t.slug;
			let o = e.popupCapture;
			const i = { ...e.inlineCaptures },
				s = { ...e.headlessCaptures };
			if (r) {
				((a = e.popupCapture) == null ? void 0 : a.id) === r && (o = null),
					r in i && delete i[r];
				for (const [l, u] of Object.entries(s)) u.id === r && delete s[l];
			} else {
				for (const [l, u] of Object.entries(e.inlineCaptures))
					l.startsWith(`capture-${n}-`) && delete i[l];
				e.popupCapture &&
					e.popupCapture.id.startsWith(`capture-${n}-`) &&
					(o = null),
					delete s[n];
			}
			return (
				e.popupCapture && !o && Ol(n),
				{
					popupCapture: o,
					activePopupSurvey: o ? e.activePopupSurvey : null,
					inlineCaptures: i,
					headlessCaptures: s,
				}
			);
		},
		NI = vn({
			actors: {
				loadSurveys: Xz,
				popupCoordinator: EI,
				surveySessionInitializer: AI,
				captureMachine: kh,
			},
			guards: {
				popupOwnerChangedOnReload: ({ context: e, event: t }) => {
					var n;
					if (t.type !== "reconcileReload") return !1;
					if (t.previousState._id !== e.visitorId) return !0;
					const r =
						(n = e.popupCapture) == null ? void 0 : n.getSnapshot().context;
					return (
						!!r &&
						!gs(e.state, {
							slug: r.survey.fullSlug,
							visitorId: r.visitorId,
							sessionId: r.sessionId,
						})
					);
				},
				hasRunningPopupCoordinator: ({ context: e }) => {
					var t;
					return (
						((t = e.popupCoordinator) == null
							? void 0
							: t.getSnapshot().status) === "active"
					);
				},
				configurationNeedsRefresh: ({ context: e }) => {
					var n;
					const t = (n = e.popupCoordinator) == null ? void 0 : n.getSnapshot();
					return (
						!(
							(t == null ? void 0 : t.status) === "active" &&
							!t.matches("Idle") &&
							!t.matches("NoConsent")
						) && Date.now() - e.surveysLoadedAt >= aI
					);
				},
				activePopupBlockedOnReload: ({ context: e, event: t }) => {
					if (t.type !== "reconcileReload" || !e.popupCapture) return !1;
					if (yh(e)) return !0;
					const r = e.popupCapture.getSnapshot().context.survey;
					return !mh(r, e.url);
				},
				activePopupAllowedOnReload: ({ context: e, event: t }) => {
					if (t.type !== "reconcileReload" || !e.popupCapture || yh(e))
						return !1;
					const r = e.popupCapture.getSnapshot().context.survey;
					return mh(r, e.url);
				},
				hideTargetsPopup: ({ context: e, event: t }) =>
					t.type !== "hideSurveys" ? !1 : In(t, zo(e)),
				showTargetsPopup: ({ context: e, event: t }) =>
					t.type !== "showSurveys"
						? !1
						: Tn(t) || e.hiddenPopupSurveys.some((r) => In(t, r))
							? !0
							: In(t, zo(e)),
				noActivePopupCapture: ({ context: e }) => !e.popupCapture,
				removeSurveyTargetsActiveOrPendingPopup: ({ context: e, event: t }) => {
					if (t.type !== "removeSurvey" || !t.slug) return !1;
					const r = zo(e);
					return (r == null ? void 0 : r.fullSlug) === t.slug;
				},
				removeSurveyTargetsKnownPopup: ({ context: e, event: t }) => {
					if (t.type !== "removeSurvey" || !t.slug) return !1;
					const r = e.surveys.find((n) => n.fullSlug === t.slug);
					return (r == null ? void 0 : r.renderType) === "Popup";
				},
			},
			actions: {
				writeCookieState: ({ context: e }) => {
					e.consent && pI(e.cookieStorage, e.state);
				},
				initializeContext: L(({ context: e }) => ({ visitorId: e.state._id })),
				readCookieState: L(({ context: e }) => {
					if (!e.consent || !e.cookieStorage.getItem("skyra.state")) return {};
					const t = Pl(e.cookieStorage, {
							apiHost: e.apiHost,
							org: e.org,
							url: e.url,
						}),
						r = t._id;
					return (
						e.popupSessionRegistry.invalidate((n) => !gs(t, n)),
						{
							state: t,
							visitorId: r,
							suspendedPopupProgress: Object.fromEntries(
								Object.entries(e.suspendedPopupProgress).filter(([n, o]) =>
									gs(t, {
										slug: n,
										visitorId: e.visitorId,
										sessionId: o.sessionId,
									}),
								),
							),
							...(r !== e.visitorId
								? { suspendedPopupProgress: {}, rejectedPopupDraws: {} }
								: {}),
						}
					);
				}),
				separateSurveysByRenderType: L(({ context: e }) => {
					const t = e.surveys.filter((o) => o.renderType === "Popup"),
						r = e.surveys.filter((o) => o.renderType === "Inline"),
						n = e.surveys.filter((o) => o.renderType === "Headless");
					return { popupSurveys: t, inlineSurveys: r, headlessSurveys: n };
				}),
				detectAndSetLanguage: L(({ context: e }) => {
					const t = dI(e);
					return { state: Nr.parse({ ...e.state, _l: t }) };
				}),
				spawnPopupCoordinator: L(RI),
				spawnInlineInitializer: L(OI),
				spawnHeadlessInitializer: L(PI),
				clearHeadlessInitializer: L(({ context: e, event: t }) => {
					if (t.type !== "readyToCapture" || t.survey.renderType !== "Headless")
						return {};
					const r = `headless-${t.slug}`;
					return {
						surveySessionInitializers: Object.fromEntries(
							Object.entries(e.surveySessionInitializers).filter(
								([n]) => n !== r,
							),
						),
					};
				}),
				storeInlineFailure: L(({ context: e, event: t }) =>
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
				storeHeadlessFailure: L(({ context: e, event: t }) =>
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
										([r]) => r !== `headless-${t.slug}`,
									),
								),
							},
				),
				saveCaptureStateToContext: L(({ context: e, event: t }) => {
					if (t.type !== "readyToCapture") return {};
					const { slug: r, sessionId: n } = t;
					return {
						state: {
							...e.state,
							[r]: { state: "Capture", sessionId: n, lastSync: Date.now() },
						},
					};
				}),
				spawnCaptureMachine: L(MI),
				updateCookieState: L(({ context: e, event: t }) => {
					var s;
					if (t.type !== "surveyDone" && t.type !== "surveyRejected") return {};
					const r = t.slug;
					if (e.inlineSurveys.some((a) => a.fullSlug === r)) return {};
					e.popupSessionRegistry.invalidate((a) => a.slug === r);
					const o = (s = e.state[r]) == null ? void 0 : s.sessionId;
					return (
						o ||
							console.warn(
								`[Skyra V2] Survey ${t.type} event received without sessionId in state for ${r}. This indicates a bug in the coordinator flow.`,
							),
						{
							state: {
								...e.state,
								[r]: {
									state: t.type === "surveyDone" ? "Completed" : "Rejected",
									lastSync: Date.now(),
									...(o && { sessionId: o }),
								},
							},
						}
					);
				}),
				updateCookieStateSelected: L(({ context: e, event: t }) =>
					t.type !== "surveySelected"
						? {}
						: {
								state: {
									...e.state,
									[t.slug]: { state: "Selected", lastSync: Date.now() },
								},
							},
				),
				updateCookieStateNotSelected: L(({ context: e, event: t }) => {
					if (t.type !== "surveyNotSelected") return {};
					const r = t.slug;
					return (
						e.popupSessionRegistry.invalidate((o) => o.slug === r),
						{
							state: {
								...e.state,
								[r]: { state: "NotSelected", lastSync: Date.now() },
							},
							rejectedPopupDraws: { ...e.rejectedPopupDraws, [r]: Date.now() },
						}
					);
				}),
				removeCompletedCaptureMachine: L(LI),
				updateUrl: L(({ context: e, event: t }) =>
					t.type !== "reload"
						? {}
						: {
								url: t.url,
								rejectedPopupDraws:
									new URL(e.url).pathname === new URL(t.url).pathname
										? e.rejectedPopupDraws
										: {},
							},
				),
				updateActivePopupUrlOnReload: ({ context: e }) => {
					var t;
					(t = e.popupCapture) == null ||
						t.send({ type: "setUrl", url: e.url });
				},
				restoreActivePopupElement: ({ context: e }) => {
					var r;
					const t =
						(r = e.popupCapture) == null
							? void 0
							: r.getSnapshot().context.survey;
					t && lI(t.fullSlug, e.selector);
				},
				reconcilePopupCoordinator: ({ context: e }) => {
					var t;
					(t = e.popupCoordinator) == null ||
						t.send({
							type: "reload",
							url: e.url,
							cookieState: e.state,
							language: e.state._l,
							rejectedDraws: e.rejectedPopupDraws,
						});
				},
				syncPopupCookieState: ({ context: e, event: t }) => {
					var r;
					if (
						!(
							t.type !== "popupSessionAccepted" &&
							t.type !== "surveySelected" &&
							t.type !== "surveyNotSelected"
						) &&
						((r = e.popupCoordinator) == null
							? void 0
							: r.getSnapshot().status) === "active"
					) {
						const n = {
							...e.popupCoordinator.getSnapshot().context.cookieState,
							[t.slug]: e.state[t.slug],
						};
						e.popupCoordinator.send({
							type: "syncCookieState",
							cookieState: n,
							rejectedDraws: e.rejectedPopupDraws,
						});
					}
				},
				discardPopupInteraction: L(({ context: e }) => {
					var r;
					const t = (r = zo(e)) == null ? void 0 : r.fullSlug;
					return t && Ol(t), { popupCapture: null, activePopupSurvey: null };
				}),
				removeBlockedActivePopupOnReload: L(({ context: e, event: t }) => {
					if (t.type !== "reconcileReload") return {};
					if (!e.popupCapture) return {};
					const r = e.popupCapture.getSnapshot(),
						n = r.context.survey;
					if (typeof document < "u") {
						const o = document.querySelector(
							`skyra-survey[slug="${n.fullSlug}"]`,
						);
						o == null || o.remove();
					}
					return {
						popupCapture: null,
						activePopupSurvey: null,
						suspendedPopupProgress: {
							...e.suspendedPopupProgress,
							[n.fullSlug]: {
								sessionId: r.context.sessionId,
								state: structuredClone(r.context.state),
							},
						},
					};
				}),
				updateConsent: L(({ event: e }) =>
					e.type !== "setConsent" ? {} : { consent: e.value },
				),
				updateTraits: L(({ context: e, event: t }) =>
					t.type !== "setTraits"
						? {}
						: { traits: vh(e.traits, t.traits, t.mode) },
				),
				clearPopupCoordinator: L(() => ({ popupCoordinator: null })),
				hidePopupSurveys: L(({ context: e, event: t }) => {
					var o;
					if (t.type !== "hideSurveys") return {};
					const r = zo(e);
					return (
						(o = e.popupCapture) == null || o.send({ type: "minimize" }),
						Tn(t)
							? { popupHidden: !0, hiddenPopupSurveys: [] }
							: {
									hiddenPopupSurveys:
										r && !Ml(r, e.hiddenPopupSurveys)
											? [...e.hiddenPopupSurveys, r]
											: e.hiddenPopupSurveys,
								}
					);
				}),
				showPopupSurveys: L(({ context: e, event: t }) => {
					var n;
					if (t.type !== "showSurveys") return {};
					const r = e.popupCapture ? e.activePopupSurvey : null;
					return (
						r &&
							(Tn(t) || In(t, r)) &&
							((n = e.popupCapture) == null || n.send({ type: "maximize" })),
						{
							popupHidden: Tn(t) ? !1 : e.popupHidden,
							hiddenPopupSurveys: mI(e.hiddenPopupSurveys, t),
						}
					);
				}),
				removePopupSurveyElement: ({ event: e }) => {
					if (e.type !== "removeSurvey") return;
					const t = e.slug;
					if (t && typeof document < "u") {
						const r = document.querySelector(`skyra-survey[slug="${t}"]`);
						r == null || r.remove();
					}
				},
				forwardConsentToChildren: ({ context: e, event: t }) => {
					if (t.type === "setConsent") {
						e.popupCapture &&
							e.popupCapture.send({ type: "setConsent", value: t.value });
						for (const r of Object.values(e.inlineCaptures))
							r.send({ type: "setConsent", value: t.value });
						for (const r of Object.values(e.headlessCaptures))
							r.send({ type: "setConsent", value: t.value });
						e.popupCoordinator &&
							e.popupCoordinator.send({ type: "setConsent", value: t.value });
					}
				},
				forwardTraitsToChildren: ({ context: e, event: t }) => {
					var r, n;
					if (t.type === "setTraits") {
						(r = e.popupCoordinator) == null || r.send(t),
							(n = e.popupCapture) == null || n.send(t);
						for (const o of Object.values(e.inlineCaptures)) o.send(t);
						for (const o of Object.values(e.headlessCaptures)) o.send(t);
						for (const o of Object.values(e.surveySessionInitializers))
							o.send(t);
					}
				},
				syncTraitsForActiveCaptures: ({ context: e, event: t }) => {
					if (t.type !== "setTraits") return;
					const r = vh(e.traits, t.traits, t.mode);
					if (!lh(r)) return;
					const n = [
						...(e.popupCapture ? [e.popupCapture] : []),
						...Object.values(e.inlineCaptures),
						...Object.values(e.headlessCaptures),
					];
					for (const o of n) {
						const i = o.getSnapshot().context;
						xn(
							{
								submissionId: Le(),
								event: "SessionTraits",
								survey: i.survey.id,
								visitor: i.visitorId,
								session: i.sessionId,
								traits: r,
							},
							{ apiHost: e.apiHost },
						).catch((s) => {
							console.warn("[Skyra] Failed to sync updated traits", s);
						});
					}
				},
				updateTestMode: L(({ event: e }) =>
					e.type !== "setTestMode" ? {} : { testMode: e.value },
				),
				emitReady: Ne({ type: "ready" }),
				emitSurveyStarted: Ne(({ event: e }) =>
					e.type !== "readyToCapture"
						? { type: "ready" }
						: { type: "surveyStarted", slug: e.slug },
				),
				emitSurveyCompleted: Ne(({ event: e }) =>
					e.type !== "surveyDone"
						? { type: "ready" }
						: { type: "surveyCompleted", slug: e.slug },
				),
				emitSurveyRejected: Ne(({ event: e }) => {
					if (e.type !== "surveyRejected")
						throw new Error("Unexpected event type");
					return { type: "surveyRejected", slug: e.slug };
				}),
				emitSurveyNotSelected: Ne(({ event: e }) => {
					if (e.type !== "surveyNotSelected")
						throw new Error("Unexpected event type");
					return { type: "surveyNotSelected", slug: e.slug };
				}),
			},
		}).createMachine({
			id: "controllerV2",
			context: ({ input: e, self: t }) => ({
				url: e.url,
				org: e.org,
				cookieStorage: e.cookieStorage,
				consent: e.consent ?? e.cookieConsent ?? !0,
				apiHost: e.apiHost,
				testMode: e.testMode ?? !1,
				traits: e.traits,
				state:
					e.state ||
					Pl(e.cookieStorage, { apiHost: e.apiHost, org: e.org, url: e.url }),
				visitorId: "",
				surveys: [],
				popupSurveys: [],
				inlineSurveys: [],
				headlessSurveys: [],
				requestedSurvey: void 0,
				surveyOverrides: e.surveyOverrides,
				selector: e.cssSelector || "#skyra-widget",
				ready: !1,
				surveysLoadedAt: 0,
				popupCoordinator: null,
				popupSessionRegistry: oI((r) => {
					const n = t.getSnapshot();
					if (n.status !== "active") return !1;
					const o = fI(n.context, r);
					return o
						? (t.send({ type: "popupSessionAccepted", slug: r.slug, state: o }),
							!0)
						: !1;
				}),
				rejectedPopupDraws: {},
				surveySessionInitializers: {},
				inlineFailures: {},
				headlessFailures: {},
				popupCapture: null,
				suspendedPopupProgress: {},
				activePopupSurvey: null,
				inlineCaptures: {},
				headlessCaptures: {},
				popupHidden: !1,
				hiddenPopupSurveys: [],
			}),
			initial: "Startup",
			on: {
				popupSessionAccepted: {
					actions: [
						L({ state: ({ event: e }) => e.state }),
						"writeCookieState",
						"syncPopupCookieState",
					],
				},
				reload: {
					actions: [
						_o(({ context: e }) => ({
							type: "reconcileReload",
							previousState: e.state,
						})),
						"updateUrl",
						"readCookieState",
					],
				},
				reconcileReload: [
					{
						guard: "popupOwnerChangedOnReload",
						actions: [
							nt(({ context: e }) => {
								var t;
								return ((t = e.popupCapture) == null ? void 0 : t.id) ?? "";
							}),
							"discardPopupInteraction",
							nt("popup-coordinator"),
							"clearPopupCoordinator",
							"detectAndSetLanguage",
							"spawnPopupCoordinator",
						],
					},
					{
						guard: "activePopupBlockedOnReload",
						actions: [
							nt(({ context: e }) => {
								var t;
								return ((t = e.popupCapture) == null ? void 0 : t.id) ?? "";
							}),
							"removeBlockedActivePopupOnReload",
							nt("popup-coordinator"),
							"clearPopupCoordinator",
							"detectAndSetLanguage",
							"spawnPopupCoordinator",
						],
					},
					{
						guard: "activePopupAllowedOnReload",
						actions: [
							"updateActivePopupUrlOnReload",
							"restoreActivePopupElement",
						],
					},
					{
						guard: "configurationNeedsRefresh",
						actions: [nt("popup-coordinator"), "clearPopupCoordinator"],
						target: ".Startup",
					},
					{
						guard: "hasRunningPopupCoordinator",
						actions: ["detectAndSetLanguage", "reconcilePopupCoordinator"],
					},
					{
						actions: [
							"detectAndSetLanguage",
							nt("popup-coordinator"),
							"clearPopupCoordinator",
							"spawnPopupCoordinator",
						],
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
					on: { reload: { actions: ["updateUrl", "readCookieState"] } },
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
									actions: L({
										surveys: ({ event: e }) => e.output.surveys,
										organisation: ({ event: e }) => e.output.organisation,
										surveysLoadedAt: () => Date.now(),
									}),
								},
								onError: {
									target: "#controllerV2.Failed",
									actions: L({ error: ({ event: e }) => e.error }),
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
							actions: $o("popup-coordinator", ({ event: e }) => ({
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
							actions: [
								"updateCookieStateSelected",
								"writeCookieState",
								"syncPopupCookieState",
							],
						},
						surveyNotSelected: {
							actions: [
								"updateCookieStateNotSelected",
								"writeCookieState",
								"syncPopupCookieState",
								"emitSurveyNotSelected",
							],
						},
						setLanguage: {
							actions: [
								L({
									state: ({ event: e, context: t }) =>
										Nr.parse({ ...t.state, _l: e.language }),
								}),
								"writeCookieState",
							],
						},
						hideSurveys: {
							guard: "hideTargetsPopup",
							actions: [
								"hidePopupSurveys",
								nt("popup-coordinator"),
								"clearPopupCoordinator",
							],
						},
						showSurveys: [
							{
								guard: ({ context: e, event: t }) =>
									t.type === "showSurveys" &&
									!e.popupCapture &&
									(Tn(t) || e.hiddenPopupSurveys.some((r) => In(t, r))),
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
									nt("popup-coordinator"),
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
				Failed: {
					on: {
						reload: {
							target: "Startup",
							actions: ["updateUrl", "readCookieState"],
						},
					},
				},
			},
		});
	function DI(e, t, r) {
		var s;
		const n = [],
			o = !!((s = e.urlRules) != null && s.length),
			i = us(e);
		return (
			!o && !i
				? n.push("No popup URL target is configured")
				: i
					? cs({
							urlString: t,
							surveyStarted: (r == null ? void 0 : r.state) === "Capture",
							showRules: e.showRules || [],
							followRules: e.followRules || [],
							hideRules: e.hideRules || [],
							device: zn(),
							isInline: !1,
						}) || n.push("URL targeting does not match this page or device")
					: e.urlRules &&
						!Tl(
							t,
							(r == null ? void 0 : r.state) === "Capture"
								? "Follow"
								: "Trigger",
							e.urlRules,
						) &&
						n.push("URL targeting does not match this page"),
			(r == null ? void 0 : r.state) === "Completed" && !ah(e, r.lastSync)
				? n.push("Retake window has not elapsed")
				: ((r == null ? void 0 : r.state) === "Rejected" ||
							(r == null ? void 0 : r.state) === "NotSelected") &&
						!El(e, r.lastSync)
					? n.push("Retrigger window has not elapsed")
					: r &&
						![
							"Completed",
							"Rejected",
							"NotSelected",
							"Capture",
							"Selected",
						].includes(r.state) &&
						n.push("Visitor state is not eligible for this popup"),
			n
		);
	}
	class jI {
		constructor(t, r, n) {
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
			(this.actor = St(n || NI, { input: o, inspect: r })),
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
		on(t, r) {
			var n;
			this.eventHandlers.has(t) || this.eventHandlers.set(t, new Set()),
				(n = this.eventHandlers.get(t)) == null || n.add(r);
		}
		off(t, r) {
			const n = this.eventHandlers.get(t);
			n && n.delete(r);
		}
		findCaptureBySlug(t) {
			const r = this.actor.getSnapshot();
			if (
				r.context.popupCapture &&
				r.context.popupCapture.id.startsWith(`capture-${t}-`)
			)
				return r.context.popupCapture;
			for (const [n, o] of Object.entries(r.context.inlineCaptures))
				if (n.startsWith(`capture-${t}-`)) return o;
			if (r.context.headlessCaptures[t]) return r.context.headlessCaptures[t];
		}
		getActor() {
			return this.actor;
		}
		getVersion() {
			return "v2";
		}
		getDebugInfo(t, r) {
			var f, p;
			const n = this.actor.getSnapshot(),
				o = n.context,
				i = n.value,
				s = typeof i == "string" ? i : JSON.stringify(i),
				a = [
					...(o.popupCapture ? [o.popupCapture] : []),
					...Object.values(o.inlineCaptures),
					...Object.values(o.headlessCaptures),
				],
				l = (f = o.popupCoordinator) == null ? void 0 : f.getSnapshot(),
				u = (l == null ? void 0 : l.context.eligibleSurveys) ?? [],
				d =
					!!l &&
					!["Init", "NoConsent", "CheckCookieSupport", "Failed"].includes(
						String(l.value),
					),
				c =
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
					language: (p = o.state) == null ? void 0 : p._l,
					currentState: s,
					cookieSupport: !!t.getItem("skyra.state"),
				},
				details: o.surveys
					.filter((h) => !r || h.fullSlug === r)
					.map((h) => {
						var _, A, F, re, ie, z, H, J, ne;
						const g = (_ = o.state) == null ? void 0 : _[h.fullSlug],
							y =
								(A = l == null ? void 0 : l.context.cookieState) == null
									? void 0
									: A[h.fullSlug],
							v =
								y && typeof y.state == "string"
									? { state: y.state, lastSync: y.lastSync }
									: void 0,
							b = Co({
								traits: o.traits,
								language: (F = o.state) == null ? void 0 : F._l,
								locale: (re = o.state) == null ? void 0 : re._l,
							}),
							w = Ff(h.audienceRules, b, h.audienceRuleMode),
							S = a.find((q) => q.id.startsWith(`capture-${h.fullSlug}-`));
						let T = null;
						if (S) {
							const q = S.getSnapshot();
							T = {
								id: S.id,
								state:
									typeof q.value == "string"
										? q.value
										: JSON.stringify(q.value),
								status: q.status,
								currentCard:
									(z = (ie = q.context) == null ? void 0 : ie.state) == null
										? void 0
										: z.currentCard,
								totalCards:
									(ne =
										(J = (H = q.context) == null ? void 0 : H.survey) == null
											? void 0
											: J.cards) == null
										? void 0
										: ne.length,
							};
						}
						const O = u.some((q) => q.fullSlug === h.fullSlug),
							N = o.inlineSurveys.some((q) => q.fullSlug === h.fullSlug),
							D =
								h.renderType === "Popup" && d
									? O
										? "eligible"
										: "ineligible"
									: "not-evaluated",
							I = h.renderType === "Popup" && c === h.fullSlug,
							P =
								h.renderType === "Popup" && l
									? [
											...DI(h, l.context.url, v),
											...Ff(
												h.audienceRules,
												Co({
													traits: l.context.traits,
													language: ar(h, l.context.language, l.context.locale),
													locale: l.context.locale,
												}),
												h.audienceRuleMode,
											),
										]
									: w;
						return (
							h.renderType === "Popup" &&
								!o.consent &&
								P.unshift("Waiting for cookie consent"),
							h.renderType === "Popup" &&
								(o.popupHidden ||
									o.hiddenPopupSurveys.some(
										(q) => q.id === h.id || q.fullSlug === h.fullSlug,
									)) &&
								P.unshift("Popup hidden by the host page"),
							h.renderType === "Popup" &&
								O &&
								!I &&
								c &&
								P.push("Another popup is the current candidate"),
							{
								slug: h.fullSlug,
								id: h.id,
								name: h.name,
								renderType: h.renderType,
								isLive: h.isLive,
								publishingState: h.publishingState,
								numCards: h.numCards,
								eligible: O || N,
								eligibility: D,
								popupCandidate: I,
								capturePercent: h.capturePercent,
								priorityScore: h.priorityScore,
								reasons: P,
								state: g
									? {
											state: String(g.state),
											sessionId: g.sessionId,
											lastSync: g.lastSync
												? new Date(g.lastSync).toISOString()
												: void 0,
										}
									: null,
								captureMachine: T,
							}
						);
					}),
			};
		}
		surveyById(t) {
			var n;
			return (n = this.actor.getSnapshot().context.surveys) == null
				? void 0
				: n.find((o) => o.id === t);
		}
		surveyIdBySlug(t) {
			var n, o;
			return (o =
				(n = this.actor.getSnapshot().context.surveys) == null
					? void 0
					: n.find((i) => i.fullSlug === t)) == null
				? void 0
				: o.id;
		}
	}
	function $h(e, t) {
		return new jI(e, t);
	}
	const BI = vn({
		actors: {
			captureMachine: kh.provide({
				actions: { storeCookieState: () => {}, clearCookieState: () => {} },
				actors: {
					postCardValue: Ve(async () => {}),
					postAcceptedAnswer: Ve(async () => {}),
				},
			}),
			loadSurveys: Yz,
			loadFullSurveys: Al,
			renderSurvey: ch,
		},
		actions: {
			removeSurvey: (e, t) => {
				const r = t.slug;
				if (!r) return !1;
				const n = document.querySelector(`skyra-preview[slug="${r}"]`);
				return n ? (n.remove(), !0) : !1;
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
			visitorId: Le(),
			apiHost: e.apiHost ?? "https://ingest.skyra.no",
			ready: !1,
			previewTarget: e.previewTarget,
			captureMachines: [],
		}),
		id: "Controller machine",
		on: {
			setOrg: {
				target: "#Startup",
				actions: L({ org: ({ event: e }) => e.org }),
			},
			previewSurvey: [
				{
					target: "#PreviewSurvey",
					actions: [
						L({
							previewSlug: ({ event: e }) => e.slug,
							previewTarget: ({ event: e }) => e.target ?? void 0,
						}),
					],
					guard: ({ context: e, event: t }) =>
						!!e.surveys.find((n) => n.fullSlug === t.slug),
				},
				{
					target: "#Startup",
					actions: [
						L({
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
							actions: L({ surveys: ({ event: e }) => e.output }),
							guard: ({ context: e }) => !!e.previewSlug,
						},
						{
							target: "#Ready",
							actions: L({ surveys: ({ event: e }) => e.output }),
						},
					],
					onError: {
						target: "#Idle",
						actions: L({ surveys: [], error: ({ event: e }) => e.error }),
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
										actions: L({
											fullSurveys: ({ event: e, context: t }) => {
												const r = t.fullSurveys;
												for (const n of e.output) r[n.fullSlug] = n;
												return r;
											},
										}),
									},
								},
							},
							run: {
								entry: [
									L(({ self: e, context: t, spawn: r }) => {
										const n = t.previewSlug;
										if (!n) return {};
										const o = t.fullSurveys[n];
										if (!o) return { machine: void 0 };
										const i = r("captureMachine", {
											id: n,
											input: {
												url: t.url,
												survey: o,
												parentRef: e,
												cookieStorage: t.cookieStorage,
												cookieConsent: !0,
												apiHost: t.apiHost,
												visitorId: Le(),
												sessionId: Le(),
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
										const r = e.surveys.find((n) => n.fullSlug === t.id);
										if (!r)
											throw new Error(`Survey summary not found [${t.id}]`);
										return {
											survey: r,
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
											Ne(({ event: e }) => {
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
	function UI(e, t) {
		return t === "classic" || t === "beta" ? t : "classic";
	}
	function FI(e, t, r = "classic") {
		var o, i;
		const n = t
			? (i = (o = e.surveyOverrides) == null ? void 0 : o[t]) == null
				? void 0
				: i.rendererVariant
			: void 0;
		return n === "classic" || n === "beta"
			? n
			: e.rendererVariantExplicit
				? e.rendererVariant
				: r;
	}
	function Ll(e, t) {
		const r = { ...e, ...t },
			n = r.org || "";
		if (!n)
			throw new Error(
				'[Skyra] No organization specified. Set it via window.SKYRA_CONFIG = { org: "your-org" } or pass as parameter to start().',
			);
		return {
			org: n,
			selector: r.cssSelector || "body",
			consent: r.cookieConsent ?? r.consent ?? !0,
			testMode: r.testMode ?? !1,
			rendererVariant: UI(n, r.rendererVariant),
			rendererVariantExplicit: r.rendererVariant !== void 0,
			traits: r.traits,
			surveyOverrides: r.surveyOverrides,
		};
	}
	function Ch(e) {
		return e.split("/")[0];
	}
	const HI = [
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
	function VI(e) {
		const t = e.split(".");
		if (t.length === 1) return t[0];
		if (t.length === 2) return t.join(".");
		if (t.length > 2)
			return HI.includes(t.slice(-2).join(".")) ||
				["com", "net", "org", "gov", "edu", "mil", "co"].includes(t.at(-2))
				? t.slice(-3).join(".")
				: t.slice(-2).join(".");
		console.error("Invalid hostname:", e);
	}
	class ZI {
		constructor(t) {
			this.api = t;
		}
		async init(t) {
			var l;
			const r = t.survey,
				n = r.split("/");
			if (n.length !== 2 || n.some((u) => !u))
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
					: l.find((u) => u.fullSlug === r);
			if (!i) throw new Error(`Survey "${r}" was not found`);
			if (i.renderType !== "Headless")
				throw new Error(`Survey "${r}" is not a headless survey`);
			const s = o.findCaptureBySlug(r);
			if (s) return this.wrapCaptureMachine(s);
			o.send({ type: "headlessSessionRequested", slug: r });
			const a = await this.waitForCaptureMachine(o, r, 5e3);
			return this.wrapCaptureMachine(a);
		}
		getController(t) {
			const r = t.survey,
				n = this.api.controller;
			if (!n) return null;
			const o = n.findCaptureBySlug(r);
			return o ? this.wrapCaptureMachine(o) : null;
		}
		wrapCaptureMachine(t) {
			return {
				getCurrentCard: () => {
					const r = t.getSnapshot();
					if (r.status === "done") return;
					const n = r.context.state.currentCard;
					return r.context.survey.cards.find((i) => i.order === n);
				},
				getNextCard: () => {
					const r = t.getSnapshot(),
						n = r.context.survey,
						o = Io(n.cards, r.context.state, r.context.audienceContext);
					return (
						n.cards.find((i) => i.id === (o == null ? void 0 : o.id)) ?? null
					);
				},
				postValue: (r) =>
					new Promise((n, o) => {
						const i = t.getSnapshot();
						if (i.status === "done") {
							o(new Error("Cannot submit a value after the survey has ended"));
							return;
						}
						const s = i.context.state.currentCard,
							a = i.context.survey.cards.find((u) => u.order === s);
						if ((a == null ? void 0 : a.id) !== r.cardId) {
							o(new Error(`Card "${r.cardId}" is not the current card`));
							return;
						}
						const l = t.subscribe((u) => {
							(u.status === "done" || u.context.state.currentCard !== s) &&
								(l.unsubscribe(), n());
						});
						t.send({ type: "submit", cardId: r.cardId, value: r.value });
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
		waitForReady(t, r = 5e3) {
			return new Promise((n, o) => {
				const i = t.getSnapshot();
				if (
					i.value === "Ready" ||
					(typeof i.value == "object" && "Ready" in i.value)
				) {
					n();
					return;
				}
				const s = Date.now(),
					a = setInterval(() => {
						const l = t.getSnapshot();
						if (
							l.value === "Ready" ||
							(typeof l.value == "object" && "Ready" in l.value)
						) {
							clearInterval(a), n();
							return;
						}
						Date.now() - s > r &&
							(clearInterval(a),
							o(new Error("Timeout waiting for controller to be ready")));
					}, 50);
			});
		}
		waitForCaptureMachine(t, r, n = 5e3) {
			return new Promise((o, i) => {
				const s = t.findCaptureBySlug(r);
				if (s) {
					o(s);
					return;
				}
				const a = Date.now(),
					l = setInterval(() => {
						var c;
						const u =
							(c = t.getSnapshot().context.headlessFailures) == null
								? void 0
								: c[r];
						if (u) {
							clearInterval(l), i(new Error(u.message));
							return;
						}
						const d = t.findCaptureBySlug(r);
						if (d) {
							clearInterval(l), o(d);
							return;
						}
						Date.now() - a > n &&
							(clearInterval(l),
							i(
								new Error(
									`Timeout waiting for capture machine for survey ${r}`,
								),
							));
					}, 50);
			});
		}
	}
	class qI {
		constructor(t = {}) {
			(this.config = {}), this.configure(t);
		}
		configure(t) {
			return (this.config = { ...this.config, ...t }), this.config;
		}
		getItem(t) {
			const n = decodeURIComponent(document.cookie).split(";");
			for (const o of n) {
				const [i, s] = o.trim().split("=");
				if (i === t) return s;
			}
			return null;
		}
		setItem(t, r, n) {
			const o = encodeURIComponent(t),
				i = encodeURIComponent(r),
				s = { ...this.config, ...n };
			let a = `${o}=${i}`;
			if (s.expires) {
				const l = new Date(Date.now() + s.expires * 1e3);
				a += `; Expires=${l.toUTCString()}`;
			}
			s.path && (a += `; Path=${s.path}`),
				s.domain && (a += `; Domain=${s.domain}`),
				Ft(`Cookie size: ${a.length} bytes`),
				Ft(r),
				(document.cookie = a);
		}
		removeItem(t, r) {
			this.setItem(t, "", { ...r, expires: -1 });
		}
	}
	function zh(e) {
		const t = window.navigation;
		if (!t) return () => {};
		let r = window.location.pathname;
		const n = () => {
			const o = window.location.pathname;
			o !== r && ((r = o), e());
		};
		return (
			t.addEventListener("currententrychange", n),
			() => t.removeEventListener("currententrychange", n)
		);
	}
	function Nl(e) {
		if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
		var t = e.default;
		if (typeof t == "function") {
			var r = function n() {
				return this instanceof n
					? Reflect.construct(t, arguments, this.constructor)
					: t.apply(this, arguments);
			};
			r.prototype = t.prototype;
		} else r = {};
		return (
			Object.defineProperty(r, "__esModule", { value: !0 }),
			Object.keys(e).forEach(function (n) {
				var o = Object.getOwnPropertyDescriptor(e, n);
				Object.defineProperty(
					r,
					n,
					o.get
						? o
						: {
								enumerable: !0,
								get: function () {
									return e[n];
								},
							},
				);
			}),
			r
		);
	}
	var Dl, Ih;
	function WI() {
		if (Ih) return Dl;
		(Ih = 1),
			(Dl = i),
			(i.default = i),
			(i.stable = u),
			(i.stableStringify = u);
		var e = "[...]",
			t = "[Circular]",
			r = [],
			n = [];
		function o() {
			return {
				depthLimit: Number.MAX_SAFE_INTEGER,
				edgesLimit: Number.MAX_SAFE_INTEGER,
			};
		}
		function i(f, p, h, g) {
			typeof g > "u" && (g = o()), a(f, "", 0, [], void 0, 0, g);
			var y;
			try {
				n.length === 0
					? (y = JSON.stringify(f, p, h))
					: (y = JSON.stringify(f, c(p), h));
			} catch {
				return JSON.stringify(
					"[unable to serialize, circular reference is too complex to analyze]",
				);
			} finally {
				for (; r.length !== 0; ) {
					var v = r.pop();
					v.length === 4
						? Object.defineProperty(v[0], v[1], v[3])
						: (v[0][v[1]] = v[2]);
				}
			}
			return y;
		}
		function s(f, p, h, g) {
			var y = Object.getOwnPropertyDescriptor(g, h);
			y.get !== void 0
				? y.configurable
					? (Object.defineProperty(g, h, { value: f }), r.push([g, h, p, y]))
					: n.push([p, h, f])
				: ((g[h] = f), r.push([g, h, p]));
		}
		function a(f, p, h, g, y, v, b) {
			v += 1;
			var w;
			if (typeof f == "object" && f !== null) {
				for (w = 0; w < g.length; w++)
					if (g[w] === f) {
						s(t, f, p, y);
						return;
					}
				if (typeof b.depthLimit < "u" && v > b.depthLimit) {
					s(e, f, p, y);
					return;
				}
				if (typeof b.edgesLimit < "u" && h + 1 > b.edgesLimit) {
					s(e, f, p, y);
					return;
				}
				if ((g.push(f), Array.isArray(f)))
					for (w = 0; w < f.length; w++) a(f[w], w, w, g, f, v, b);
				else {
					var S = Object.keys(f);
					for (w = 0; w < S.length; w++) {
						var T = S[w];
						a(f[T], T, w, g, f, v, b);
					}
				}
				g.pop();
			}
		}
		function l(f, p) {
			return f < p ? -1 : f > p ? 1 : 0;
		}
		function u(f, p, h, g) {
			typeof g > "u" && (g = o());
			var y = d(f, "", 0, [], void 0, 0, g) || f,
				v;
			try {
				n.length === 0
					? (v = JSON.stringify(y, p, h))
					: (v = JSON.stringify(y, c(p), h));
			} catch {
				return JSON.stringify(
					"[unable to serialize, circular reference is too complex to analyze]",
				);
			} finally {
				for (; r.length !== 0; ) {
					var b = r.pop();
					b.length === 4
						? Object.defineProperty(b[0], b[1], b[3])
						: (b[0][b[1]] = b[2]);
				}
			}
			return v;
		}
		function d(f, p, h, g, y, v, b) {
			v += 1;
			var w;
			if (typeof f == "object" && f !== null) {
				for (w = 0; w < g.length; w++)
					if (g[w] === f) {
						s(t, f, p, y);
						return;
					}
				try {
					if (typeof f.toJSON == "function") return;
				} catch {
					return;
				}
				if (typeof b.depthLimit < "u" && v > b.depthLimit) {
					s(e, f, p, y);
					return;
				}
				if (typeof b.edgesLimit < "u" && h + 1 > b.edgesLimit) {
					s(e, f, p, y);
					return;
				}
				if ((g.push(f), Array.isArray(f)))
					for (w = 0; w < f.length; w++) d(f[w], w, w, g, f, v, b);
				else {
					var S = {},
						T = Object.keys(f).sort(l);
					for (w = 0; w < T.length; w++) {
						var O = T[w];
						d(f[O], O, w, g, f, v, b), (S[O] = f[O]);
					}
					if (typeof y < "u") r.push([y, p, f]), (y[p] = S);
					else return S;
				}
				g.pop();
			}
		}
		function c(f) {
			return (
				(f =
					typeof f < "u"
						? f
						: function (p, h) {
								return h;
							}),
				function (p, h) {
					if (n.length > 0)
						for (var g = 0; g < n.length; g++) {
							var y = n[g];
							if (y[1] === p && y[0] === h) {
								(h = y[2]), n.splice(g, 1);
								break;
							}
						}
					return f.call(this, p, h);
				}
			);
		}
		return Dl;
	}
	const Th = Nl(jC);
	var ms = { exports: {} },
		Eh;
	function Ah() {
		return (
			Eh ||
				((Eh = 1),
				(function (e, t) {
					const { hasOwnProperty: r } = Object.prototype,
						n = v();
					(n.configure = v),
						(n.stringify = n),
						(n.default = n),
						(t.stringify = n),
						(t.configure = v),
						(e.exports = n);
					const o = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;
					function i(b) {
						return b.length < 5e3 && !o.test(b) ? `"${b}"` : JSON.stringify(b);
					}
					function s(b, w) {
						if (b.length > 200 || w) return b.sort(w);
						for (let S = 1; S < b.length; S++) {
							const T = b[S];
							let O = S;
							for (; O !== 0 && b[O - 1] > T; ) (b[O] = b[O - 1]), O--;
							b[O] = T;
						}
						return b;
					}
					const a = Object.getOwnPropertyDescriptor(
						Object.getPrototypeOf(Object.getPrototypeOf(new Int8Array())),
						Symbol.toStringTag,
					).get;
					function l(b) {
						return a.call(b) !== void 0 && b.length !== 0;
					}
					function u(b, w, S) {
						b.length < S && (S = b.length);
						const T = w === "," ? "" : " ";
						let O = `"0":${T}${b[0]}`;
						for (let N = 1; N < S; N++) O += `${w}"${N}":${T}${b[N]}`;
						return O;
					}
					function d(b) {
						if (r.call(b, "circularValue")) {
							const w = b.circularValue;
							if (typeof w == "string") return `"${w}"`;
							if (w == null) return w;
							if (w === Error || w === TypeError)
								return {
									toString() {
										throw new TypeError(
											"Converting circular structure to JSON",
										);
									},
								};
							throw new TypeError(
								'The "circularValue" argument must be of type string or the value null or undefined',
							);
						}
						return '"[Circular]"';
					}
					function c(b) {
						let w;
						if (
							r.call(b, "deterministic") &&
							((w = b.deterministic),
							typeof w != "boolean" && typeof w != "function")
						)
							throw new TypeError(
								'The "deterministic" argument must be of type boolean or comparator function',
							);
						return w === void 0 ? !0 : w;
					}
					function f(b, w) {
						let S;
						if (r.call(b, w) && ((S = b[w]), typeof S != "boolean"))
							throw new TypeError(
								`The "${w}" argument must be of type boolean`,
							);
						return S === void 0 ? !0 : S;
					}
					function p(b, w) {
						let S;
						if (r.call(b, w)) {
							if (((S = b[w]), typeof S != "number"))
								throw new TypeError(
									`The "${w}" argument must be of type number`,
								);
							if (!Number.isInteger(S))
								throw new TypeError(`The "${w}" argument must be an integer`);
							if (S < 1)
								throw new RangeError(`The "${w}" argument must be >= 1`);
						}
						return S === void 0 ? 1 / 0 : S;
					}
					function h(b) {
						return b === 1 ? "1 item" : `${b} items`;
					}
					function g(b) {
						const w = new Set();
						for (const S of b)
							(typeof S == "string" || typeof S == "number") &&
								w.add(String(S));
						return w;
					}
					function y(b) {
						if (r.call(b, "strict")) {
							const w = b.strict;
							if (typeof w != "boolean")
								throw new TypeError(
									'The "strict" argument must be of type boolean',
								);
							if (w)
								return (S) => {
									let T = `Object can not safely be stringified. Received type ${typeof S}`;
									throw (
										(typeof S != "function" && (T += ` (${S.toString()})`),
										new Error(T))
									);
								};
						}
					}
					function v(b) {
						b = { ...b };
						const w = y(b);
						w &&
							(b.bigint === void 0 && (b.bigint = !1),
							"circularValue" in b || (b.circularValue = Error));
						const S = d(b),
							T = f(b, "bigint"),
							O = c(b),
							N = typeof O == "function" ? O : void 0,
							D = p(b, "maximumDepth"),
							I = p(b, "maximumBreadth");
						function P(ie, z, H, J, ne, q) {
							let Y = z[ie];
							switch (
								(typeof Y == "object" &&
									Y !== null &&
									typeof Y.toJSON == "function" &&
									(Y = Y.toJSON(ie)),
								(Y = J.call(z, ie, Y)),
								typeof Y)
							) {
								case "string":
									return i(Y);
								case "object": {
									if (Y === null) return "null";
									if (H.indexOf(Y) !== -1) return S;
									let le = "",
										ve = ",";
									const se = q;
									if (Array.isArray(Y)) {
										if (Y.length === 0) return "[]";
										if (D < H.length + 1) return '"[Array]"';
										H.push(Y),
											ne !== "" &&
												((q += ne),
												(le += `
${q}`),
												(ve = `,
${q}`));
										const U = Math.min(Y.length, I);
										let oe = 0;
										for (; oe < U - 1; oe++) {
											const me = P(String(oe), Y, H, J, ne, q);
											(le += me !== void 0 ? me : "null"), (le += ve);
										}
										const Q = P(String(oe), Y, H, J, ne, q);
										if (((le += Q !== void 0 ? Q : "null"), Y.length - 1 > I)) {
											const me = Y.length - I - 1;
											le += `${ve}"... ${h(me)} not stringified"`;
										}
										return (
											ne !== "" &&
												(le += `
${se}`),
											H.pop(),
											`[${le}]`
										);
									}
									let fe = Object.keys(Y);
									const C = fe.length;
									if (C === 0) return "{}";
									if (D < H.length + 1) return '"[Object]"';
									let E = "",
										K = "";
									ne !== "" &&
										((q += ne),
										(ve = `,
${q}`),
										(E = " "));
									const ce = Math.min(C, I);
									O && !l(Y) && (fe = s(fe, N)), H.push(Y);
									for (let U = 0; U < ce; U++) {
										const oe = fe[U],
											Q = P(oe, Y, H, J, ne, q);
										Q !== void 0 && ((le += `${K}${i(oe)}:${E}${Q}`), (K = ve));
									}
									if (C > I) {
										const U = C - I;
										(le += `${K}"...":${E}"${h(U)} not stringified"`), (K = ve);
									}
									return (
										ne !== "" &&
											K.length > 1 &&
											(le = `
${q}${le}
${se}`),
										H.pop(),
										`{${le}}`
									);
								}
								case "number":
									return isFinite(Y) ? String(Y) : w ? w(Y) : "null";
								case "boolean":
									return Y === !0 ? "true" : "false";
								case "undefined":
									return;
								case "bigint":
									if (T) return String(Y);
								default:
									return w ? w(Y) : void 0;
							}
						}
						function _(ie, z, H, J, ne, q) {
							switch (
								(typeof z == "object" &&
									z !== null &&
									typeof z.toJSON == "function" &&
									(z = z.toJSON(ie)),
								typeof z)
							) {
								case "string":
									return i(z);
								case "object": {
									if (z === null) return "null";
									if (H.indexOf(z) !== -1) return S;
									const Y = q;
									let le = "",
										ve = ",";
									if (Array.isArray(z)) {
										if (z.length === 0) return "[]";
										if (D < H.length + 1) return '"[Array]"';
										H.push(z),
											ne !== "" &&
												((q += ne),
												(le += `
${q}`),
												(ve = `,
${q}`));
										const C = Math.min(z.length, I);
										let E = 0;
										for (; E < C - 1; E++) {
											const ce = _(String(E), z[E], H, J, ne, q);
											(le += ce !== void 0 ? ce : "null"), (le += ve);
										}
										const K = _(String(E), z[E], H, J, ne, q);
										if (((le += K !== void 0 ? K : "null"), z.length - 1 > I)) {
											const ce = z.length - I - 1;
											le += `${ve}"... ${h(ce)} not stringified"`;
										}
										return (
											ne !== "" &&
												(le += `
${Y}`),
											H.pop(),
											`[${le}]`
										);
									}
									H.push(z);
									let se = "";
									ne !== "" &&
										((q += ne),
										(ve = `,
${q}`),
										(se = " "));
									let fe = "";
									for (const C of J) {
										const E = _(C, z[C], H, J, ne, q);
										E !== void 0 &&
											((le += `${fe}${i(C)}:${se}${E}`), (fe = ve));
									}
									return (
										ne !== "" &&
											fe.length > 1 &&
											(le = `
${q}${le}
${Y}`),
										H.pop(),
										`{${le}}`
									);
								}
								case "number":
									return isFinite(z) ? String(z) : w ? w(z) : "null";
								case "boolean":
									return z === !0 ? "true" : "false";
								case "undefined":
									return;
								case "bigint":
									if (T) return String(z);
								default:
									return w ? w(z) : void 0;
							}
						}
						function A(ie, z, H, J, ne) {
							switch (typeof z) {
								case "string":
									return i(z);
								case "object": {
									if (z === null) return "null";
									if (typeof z.toJSON == "function") {
										if (((z = z.toJSON(ie)), typeof z != "object"))
											return A(ie, z, H, J, ne);
										if (z === null) return "null";
									}
									if (H.indexOf(z) !== -1) return S;
									const q = ne;
									if (Array.isArray(z)) {
										if (z.length === 0) return "[]";
										if (D < H.length + 1) return '"[Array]"';
										H.push(z), (ne += J);
										let E = `
${ne}`;
										const K = `,
${ne}`,
											ce = Math.min(z.length, I);
										let U = 0;
										for (; U < ce - 1; U++) {
											const Q = A(String(U), z[U], H, J, ne);
											(E += Q !== void 0 ? Q : "null"), (E += K);
										}
										const oe = A(String(U), z[U], H, J, ne);
										if (
											((E += oe !== void 0 ? oe : "null"), z.length - 1 > I)
										) {
											const Q = z.length - I - 1;
											E += `${K}"... ${h(Q)} not stringified"`;
										}
										return (
											(E += `
${q}`),
											H.pop(),
											`[${E}]`
										);
									}
									let Y = Object.keys(z);
									const le = Y.length;
									if (le === 0) return "{}";
									if (D < H.length + 1) return '"[Object]"';
									ne += J;
									const ve = `,
${ne}`;
									let se = "",
										fe = "",
										C = Math.min(le, I);
									l(z) &&
										((se += u(z, ve, I)),
										(Y = Y.slice(z.length)),
										(C -= z.length),
										(fe = ve)),
										O && (Y = s(Y, N)),
										H.push(z);
									for (let E = 0; E < C; E++) {
										const K = Y[E],
											ce = A(K, z[K], H, J, ne);
										ce !== void 0 && ((se += `${fe}${i(K)}: ${ce}`), (fe = ve));
									}
									if (le > I) {
										const E = le - I;
										(se += `${fe}"...": "${h(E)} not stringified"`), (fe = ve);
									}
									return (
										fe !== "" &&
											(se = `
${ne}${se}
${q}`),
										H.pop(),
										`{${se}}`
									);
								}
								case "number":
									return isFinite(z) ? String(z) : w ? w(z) : "null";
								case "boolean":
									return z === !0 ? "true" : "false";
								case "undefined":
									return;
								case "bigint":
									if (T) return String(z);
								default:
									return w ? w(z) : void 0;
							}
						}
						function F(ie, z, H) {
							switch (typeof z) {
								case "string":
									return i(z);
								case "object": {
									if (z === null) return "null";
									if (typeof z.toJSON == "function") {
										if (((z = z.toJSON(ie)), typeof z != "object"))
											return F(ie, z, H);
										if (z === null) return "null";
									}
									if (H.indexOf(z) !== -1) return S;
									let J = "";
									const ne = z.length !== void 0;
									if (ne && Array.isArray(z)) {
										if (z.length === 0) return "[]";
										if (D < H.length + 1) return '"[Array]"';
										H.push(z);
										const se = Math.min(z.length, I);
										let fe = 0;
										for (; fe < se - 1; fe++) {
											const E = F(String(fe), z[fe], H);
											(J += E !== void 0 ? E : "null"), (J += ",");
										}
										const C = F(String(fe), z[fe], H);
										if (((J += C !== void 0 ? C : "null"), z.length - 1 > I)) {
											const E = z.length - I - 1;
											J += `,"... ${h(E)} not stringified"`;
										}
										return H.pop(), `[${J}]`;
									}
									let q = Object.keys(z);
									const Y = q.length;
									if (Y === 0) return "{}";
									if (D < H.length + 1) return '"[Object]"';
									let le = "",
										ve = Math.min(Y, I);
									ne &&
										l(z) &&
										((J += u(z, ",", I)),
										(q = q.slice(z.length)),
										(ve -= z.length),
										(le = ",")),
										O && (q = s(q, N)),
										H.push(z);
									for (let se = 0; se < ve; se++) {
										const fe = q[se],
											C = F(fe, z[fe], H);
										C !== void 0 && ((J += `${le}${i(fe)}:${C}`), (le = ","));
									}
									if (Y > I) {
										const se = Y - I;
										J += `${le}"...":"${h(se)} not stringified"`;
									}
									return H.pop(), `{${J}}`;
								}
								case "number":
									return isFinite(z) ? String(z) : w ? w(z) : "null";
								case "boolean":
									return z === !0 ? "true" : "false";
								case "undefined":
									return;
								case "bigint":
									if (T) return String(z);
								default:
									return w ? w(z) : void 0;
							}
						}
						function re(ie, z, H) {
							if (arguments.length > 1) {
								let J = "";
								if (
									(typeof H == "number"
										? (J = " ".repeat(Math.min(H, 10)))
										: typeof H == "string" && (J = H.slice(0, 10)),
									z != null)
								) {
									if (typeof z == "function")
										return P("", { "": ie }, [], z, J, "");
									if (Array.isArray(z)) return _("", ie, [], g(z), J, "");
								}
								if (J.length !== 0) return A("", ie, [], J, "");
							}
							return F("", ie, []);
						}
						return re;
					}
				})(ms, ms.exports)),
			ms.exports
		);
	}
	var jl, Rh;
	function KI() {
		var D;
		if (Rh) return jl;
		Rh = 1;
		var e = Object.defineProperty,
			t = Object.getOwnPropertyDescriptor,
			r = Object.getOwnPropertyNames,
			n = Object.prototype.hasOwnProperty,
			o = (I, P) => {
				for (var _ in P) e(I, _, { get: P[_], enumerable: !0 });
			},
			i = (I, P, _, A) => {
				if ((P && typeof P == "object") || typeof P == "function")
					for (let F of r(P))
						!n.call(I, F) &&
							F !== _ &&
							e(I, F, {
								get: () => P[F],
								enumerable: !(A = t(P, F)) || A.enumerable,
							});
				return I;
			},
			s = (I) => i(e({}, "__esModule", { value: !0 }), I),
			a = {};
		o(a, { WebSocket: () => b, default: () => O }),
			(jl = s(a)),
			(!globalThis.EventTarget || !globalThis.Event) &&
				console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);
		var l = class extends Event {
				constructor(P, _) {
					super("error", _);
					W(this, "message");
					W(this, "error");
					(this.message = P.message), (this.error = P);
				}
			},
			u = class extends Event {
				constructor(P = 1e3, _ = "", A) {
					super("close", A);
					W(this, "code");
					W(this, "reason");
					W(this, "wasClean", !0);
					(this.code = P), (this.reason = _);
				}
			},
			d = { Event, ErrorEvent: l, CloseEvent: u };
		function c(I, P) {
			if (!I) throw new Error(P);
		}
		function f(I) {
			return new I.constructor(I.type, I);
		}
		function p(I) {
			return "data" in I
				? new MessageEvent(I.type, I)
				: "code" in I || "reason" in I
					? new u(I.code || 1999, I.reason || "unknown reason", I)
					: "error" in I
						? new l(I.error, I)
						: new Event(I.type, I);
		}
		var h =
				typeof process < "u" &&
				typeof ((D = process.versions) == null ? void 0 : D.node) < "u" &&
				typeof document > "u",
			g = h ? p : f,
			y = {
				maxReconnectionDelay: 1e4,
				minReconnectionDelay: 1e3 + Math.random() * 4e3,
				minUptime: 5e3,
				reconnectionDelayGrowFactor: 1.3,
				connectionTimeout: 4e3,
				maxRetries: 1 / 0,
				maxEnqueuedMessages: 1 / 0,
			},
			v = !1,
			b = class Jr extends EventTarget {
				constructor(_, A, F = {}) {
					super();
					W(this, "_ws");
					W(this, "_retryCount", -1);
					W(this, "_uptimeTimeout");
					W(this, "_connectTimeout");
					W(this, "_shouldReconnect", !0);
					W(this, "_connectLock", !1);
					W(this, "_binaryType", "blob");
					W(this, "_closeCalled", !1);
					W(this, "_messageQueue", []);
					W(this, "_debugLogger", console.log.bind(console));
					W(this, "_url");
					W(this, "_protocols");
					W(this, "_options");
					W(this, "onclose", null);
					W(this, "onerror", null);
					W(this, "onmessage", null);
					W(this, "onopen", null);
					W(this, "_handleOpen", (_) => {
						this._debug("open event");
						const { minUptime: A = y.minUptime } = this._options;
						clearTimeout(this._connectTimeout),
							(this._uptimeTimeout = setTimeout(() => this._acceptOpen(), A)),
							c(this._ws, "WebSocket is not defined"),
							(this._ws.binaryType = this._binaryType),
							this._messageQueue.forEach((F) => {
								var re;
								return (re = this._ws) == null ? void 0 : re.send(F);
							}),
							(this._messageQueue = []),
							this.onopen && this.onopen(_),
							this.dispatchEvent(g(_));
					});
					W(this, "_handleMessage", (_) => {
						this._debug("message event"),
							this.onmessage && this.onmessage(_),
							this.dispatchEvent(g(_));
					});
					W(this, "_handleError", (_) => {
						this._debug("error event", _.message),
							this._disconnect(
								void 0,
								_.message === "TIMEOUT" ? "timeout" : void 0,
							),
							this.onerror && this.onerror(_),
							this._debug("exec error listeners"),
							this.dispatchEvent(g(_)),
							this._connect();
					});
					W(this, "_handleClose", (_) => {
						this._debug("close event"),
							this._clearTimeouts(),
							this._shouldReconnect && this._connect(),
							this.onclose && this.onclose(_),
							this.dispatchEvent(g(_));
					});
					(this._url = _),
						(this._protocols = A),
						(this._options = F),
						this._options.startClosed && (this._shouldReconnect = !1),
						this._options.debugLogger &&
							(this._debugLogger = this._options.debugLogger),
						this._connect();
				}
				static get CONNECTING() {
					return 0;
				}
				static get OPEN() {
					return 1;
				}
				static get CLOSING() {
					return 2;
				}
				static get CLOSED() {
					return 3;
				}
				get CONNECTING() {
					return Jr.CONNECTING;
				}
				get OPEN() {
					return Jr.OPEN;
				}
				get CLOSING() {
					return Jr.CLOSING;
				}
				get CLOSED() {
					return Jr.CLOSED;
				}
				get binaryType() {
					return this._ws ? this._ws.binaryType : this._binaryType;
				}
				set binaryType(_) {
					(this._binaryType = _), this._ws && (this._ws.binaryType = _);
				}
				get retryCount() {
					return Math.max(this._retryCount, 0);
				}
				get bufferedAmount() {
					return (
						this._messageQueue.reduce(
							(A, F) => (
								typeof F == "string"
									? (A += F.length)
									: F instanceof Blob
										? (A += F.size)
										: (A += F.byteLength),
								A
							),
							0,
						) + (this._ws ? this._ws.bufferedAmount : 0)
					);
				}
				get extensions() {
					return this._ws ? this._ws.extensions : "";
				}
				get protocol() {
					return this._ws ? this._ws.protocol : "";
				}
				get readyState() {
					return this._ws
						? this._ws.readyState
						: this._options.startClosed
							? Jr.CLOSED
							: Jr.CONNECTING;
				}
				get url() {
					return this._ws ? this._ws.url : "";
				}
				get shouldReconnect() {
					return this._shouldReconnect;
				}
				close(_ = 1e3, A) {
					if (
						((this._closeCalled = !0),
						(this._shouldReconnect = !1),
						this._clearTimeouts(),
						!this._ws)
					) {
						this._debug("close enqueued: no ws instance");
						return;
					}
					if (this._ws.readyState === this.CLOSED) {
						this._debug("close: already closed");
						return;
					}
					this._ws.close(_, A);
				}
				reconnect(_, A) {
					(this._shouldReconnect = !0),
						(this._closeCalled = !1),
						(this._retryCount = -1),
						!this._ws || this._ws.readyState === this.CLOSED
							? this._connect()
							: (this._disconnect(_, A), this._connect());
				}
				send(_) {
					if (this._ws && this._ws.readyState === this.OPEN)
						this._debug("send", _), this._ws.send(_);
					else {
						const { maxEnqueuedMessages: A = y.maxEnqueuedMessages } =
							this._options;
						this._messageQueue.length < A &&
							(this._debug("enqueue", _), this._messageQueue.push(_));
					}
				}
				_debug(..._) {
					this._options.debug && this._debugLogger("RWS>", ..._);
				}
				_getNextDelay() {
					const {
						reconnectionDelayGrowFactor: _ = y.reconnectionDelayGrowFactor,
						minReconnectionDelay: A = y.minReconnectionDelay,
						maxReconnectionDelay: F = y.maxReconnectionDelay,
					} = this._options;
					let re = 0;
					return (
						this._retryCount > 0 &&
							((re = A * Math.pow(_, this._retryCount - 1)),
							re > F && (re = F)),
						this._debug("next delay", re),
						re
					);
				}
				_wait() {
					return new Promise((_) => {
						setTimeout(_, this._getNextDelay());
					});
				}
				_getNextProtocols(_) {
					if (!_) return Promise.resolve(null);
					if (typeof _ == "string" || Array.isArray(_))
						return Promise.resolve(_);
					if (typeof _ == "function") {
						const A = _();
						if (!A) return Promise.resolve(null);
						if (typeof A == "string" || Array.isArray(A))
							return Promise.resolve(A);
						if (A.then) return A;
					}
					throw Error("Invalid protocols");
				}
				_getNextUrl(_) {
					if (typeof _ == "string") return Promise.resolve(_);
					if (typeof _ == "function") {
						const A = _();
						if (typeof A == "string") return Promise.resolve(A);
						if (A.then) return A;
					}
					throw Error("Invalid URL");
				}
				_connect() {
					if (this._connectLock || !this._shouldReconnect) return;
					this._connectLock = !0;
					const {
						maxRetries: _ = y.maxRetries,
						connectionTimeout: A = y.connectionTimeout,
					} = this._options;
					if (this._retryCount >= _) {
						this._debug("max retries reached", this._retryCount, ">=", _);
						return;
					}
					this._retryCount++,
						this._debug("connect", this._retryCount),
						this._removeListeners(),
						this._wait()
							.then(() =>
								Promise.all([
									this._getNextUrl(this._url),
									this._getNextProtocols(this._protocols || null),
								]),
							)
							.then(([F, re]) => {
								if (this._closeCalled) {
									this._connectLock = !1;
									return;
								}
								!this._options.WebSocket &&
									typeof WebSocket > "u" &&
									!v &&
									(console.error(`‼️ No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`),
									(v = !0));
								const ie = this._options.WebSocket || WebSocket;
								this._debug("connect", { url: F, protocols: re }),
									(this._ws = re ? new ie(F, re) : new ie(F)),
									(this._ws.binaryType = this._binaryType),
									(this._connectLock = !1),
									this._addListeners(),
									(this._connectTimeout = setTimeout(
										() => this._handleTimeout(),
										A,
									));
							})
							.catch((F) => {
								(this._connectLock = !1),
									this._handleError(new d.ErrorEvent(Error(F.message), this));
							});
				}
				_handleTimeout() {
					this._debug("timeout event"),
						this._handleError(new d.ErrorEvent(Error("TIMEOUT"), this));
				}
				_disconnect(_ = 1e3, A) {
					if ((this._clearTimeouts(), !!this._ws)) {
						this._removeListeners();
						try {
							this._ws.close(_, A),
								this._handleClose(new d.CloseEvent(_, A, this));
						} catch {}
					}
				}
				_acceptOpen() {
					this._debug("accept open"), (this._retryCount = 0);
				}
				_removeListeners() {
					this._ws &&
						(this._debug("removeListeners"),
						this._ws.removeEventListener("open", this._handleOpen),
						this._ws.removeEventListener("close", this._handleClose),
						this._ws.removeEventListener("message", this._handleMessage),
						this._ws.removeEventListener("error", this._handleError));
				}
				_addListeners() {
					this._ws &&
						(this._debug("addListeners"),
						this._ws.addEventListener("open", this._handleOpen),
						this._ws.addEventListener("close", this._handleClose),
						this._ws.addEventListener("message", this._handleMessage),
						this._ws.addEventListener("error", this._handleError));
				}
				_clearTimeouts() {
					clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout);
				}
			},
			w = (I) => I[1] !== null && I[1] !== void 0;
		function S() {
			if (typeof crypto < "u" && crypto.randomUUID) return crypto.randomUUID();
			let I = new Date().getTime(),
				P =
					(typeof performance < "u" &&
						performance.now &&
						performance.now() * 1e3) ||
					0;
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
				/[xy]/g,
				function (_) {
					let A = Math.random() * 16;
					return (
						I > 0
							? ((A = ((I + A) % 16) | 0), (I = Math.floor(I / 16)))
							: ((A = ((P + A) % 16) | 0), (P = Math.floor(P / 16))),
						(_ === "x" ? A : (A & 3) | 8).toString(16)
					);
				},
			);
		}
		function T(I, P, _ = {}) {
			const {
				host: A,
				path: F,
				protocol: re,
				room: ie,
				party: z,
				query: H,
			} = I;
			let J = A.replace(/^(http|https|ws|wss):\/\//, "");
			if ((J.endsWith("/") && (J = J.slice(0, -1)), F && F.startsWith("/")))
				throw new Error("path must not start with a slash");
			const ne = z ?? "main",
				q = F ? `/${F}` : "",
				Y =
					re ||
					(J.startsWith("localhost:") ||
					J.startsWith("127.0.0.1:") ||
					J.startsWith("192.168.") ||
					J.startsWith("10.") ||
					(J.startsWith("172.") &&
						J.split(".")[1] >= "16" &&
						J.split(".")[1] <= "31") ||
					J.startsWith("[::ffff:7f00:1]:")
						? P
						: P + "s"),
				le = `${Y}://${J}/${z ? `parties/${z}` : "party"}/${ie}${q}`,
				ve = (fe = {}) =>
					`${le}?${new URLSearchParams([...Object.entries(_), ...Object.entries(fe).filter(w)])}`,
				se = typeof H == "function" ? async () => ve(await H()) : ve(H);
			return {
				host: J,
				path: q,
				room: ie,
				name: ne,
				protocol: Y,
				partyUrl: le,
				urlProvider: se,
			};
		}
		var O = class extends b {
			constructor(P) {
				const _ = N(P);
				super(_.urlProvider, _.protocols, _.socketOptions);
				W(this, "_pk");
				W(this, "_pkurl");
				W(this, "name");
				W(this, "room");
				W(this, "host");
				W(this, "path");
				(this.partySocketOptions = P), this.setWSProperties(_);
			}
			updateProperties(P) {
				const _ = N({
					...this.partySocketOptions,
					...P,
					host: P.host ?? this.host,
					room: P.room ?? this.room,
					path: P.path ?? this.path,
				});
				(this._url = _.urlProvider),
					(this._protocols = _.protocols),
					(this._options = _.socketOptions),
					this.setWSProperties(_);
			}
			setWSProperties(P) {
				const { _pk: _, _pkurl: A, name: F, room: re, host: ie, path: z } = P;
				(this._pk = _),
					(this._pkurl = A),
					(this.name = F),
					(this.room = re),
					(this.host = ie),
					(this.path = z);
			}
			reconnect(P, _) {
				if (!this.room || !this.host)
					throw new Error(
						"The room and host must be set before connecting, use `updateProperties` method to set them or pass them to the constructor.",
					);
				super.reconnect(P, _);
			}
			get id() {
				return this._pk;
			}
			get roomUrl() {
				return this._pkurl;
			}
			static async fetch(P, _) {
				const A = T(P, "http"),
					F =
						typeof A.urlProvider == "string"
							? A.urlProvider
							: await A.urlProvider();
				return (P.fetch ?? fetch)(F, _);
			}
		};
		function N(I) {
			const {
					id: P,
					host: _,
					path: A,
					party: F,
					room: re,
					protocol: ie,
					query: z,
					protocols: H,
					...J
				} = I,
				ne = P || S(),
				q = T(I, "ws", { _pk: ne });
			return {
				_pk: ne,
				_pkurl: q.partyUrl,
				name: q.name,
				room: q.room,
				host: q.host,
				path: q.path,
				protocols: H,
				socketOptions: J,
				urlProvider: q.urlProvider,
			};
		} /*!
		 * Reconnecting WebSocket
		 * by Pedro Ladaria <pedro.ladaria@gmail.com>
		 * https://github.com/pladaria/reconnecting-websocket
		 * License MIT
		 */
		return jl;
	}
	var JI = (function () {
			function e() {
				(this.keyToValue = new Map()), (this.valueToKey = new Map());
			}
			return (
				(e.prototype.set = function (t, r) {
					this.keyToValue.set(t, r), this.valueToKey.set(r, t);
				}),
				(e.prototype.getByKey = function (t) {
					return this.keyToValue.get(t);
				}),
				(e.prototype.getByValue = function (t) {
					return this.valueToKey.get(t);
				}),
				(e.prototype.clear = function () {
					this.keyToValue.clear(), this.valueToKey.clear();
				}),
				e
			);
		})(),
		Oh = (function () {
			function e(t) {
				(this.generateIdentifier = t), (this.kv = new JI());
			}
			return (
				(e.prototype.register = function (t, r) {
					this.kv.getByValue(t) ||
						(r || (r = this.generateIdentifier(t)), this.kv.set(r, t));
				}),
				(e.prototype.clear = function () {
					this.kv.clear();
				}),
				(e.prototype.getIdentifier = function (t) {
					return this.kv.getByValue(t);
				}),
				(e.prototype.getValue = function (t) {
					return this.kv.getByKey(t);
				}),
				e
			);
		})(),
		GI = (function () {
			var e = function (t, r) {
				return (
					(e =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (n, o) {
								n.__proto__ = o;
							}) ||
						function (n, o) {
							for (var i in o)
								Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
						}),
					e(t, r)
				);
			};
			return function (t, r) {
				if (typeof r != "function" && r !== null)
					throw new TypeError(
						"Class extends value " +
							String(r) +
							" is not a constructor or null",
					);
				e(t, r);
				function n() {
					this.constructor = t;
				}
				t.prototype =
					r === null
						? Object.create(r)
						: ((n.prototype = r.prototype), new n());
			};
		})(),
		YI = (function (e) {
			GI(t, e);
			function t() {
				var r =
					e.call(this, function (n) {
						return n.name;
					}) || this;
				return (r.classToAllowedProps = new Map()), r;
			}
			return (
				(t.prototype.register = function (r, n) {
					typeof n == "object"
						? (n.allowProps && this.classToAllowedProps.set(r, n.allowProps),
							e.prototype.register.call(this, r, n.identifier))
						: e.prototype.register.call(this, r, n);
				}),
				(t.prototype.getAllowedProps = function (r) {
					return this.classToAllowedProps.get(r);
				}),
				t
			);
		})(Oh),
		XI = function (e, t) {
			var r = typeof Symbol == "function" && e[Symbol.iterator];
			if (!r) return e;
			var n = r.call(e),
				o,
				i = [],
				s;
			try {
				for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
					i.push(o.value);
			} catch (a) {
				s = { error: a };
			} finally {
				try {
					o && !o.done && (r = n.return) && r.call(n);
				} finally {
					if (s) throw s.error;
				}
			}
			return i;
		};
	function QI(e) {
		if ("values" in Object) return Object.values(e);
		var t = [];
		for (var r in e) e.hasOwnProperty(r) && t.push(e[r]);
		return t;
	}
	function eT(e, t) {
		var r = QI(e);
		if ("find" in r) return r.find(t);
		for (var n = r, o = 0; o < n.length; o++) {
			var i = n[o];
			if (t(i)) return i;
		}
	}
	function En(e, t) {
		Object.entries(e).forEach(function (r) {
			var n = XI(r, 2),
				o = n[0],
				i = n[1];
			return t(i, o);
		});
	}
	function ys(e, t) {
		return e.indexOf(t) !== -1;
	}
	function Ph(e, t) {
		for (var r = 0; r < e.length; r++) {
			var n = e[r];
			if (t(n)) return n;
		}
	}
	var tT = (function () {
			function e() {
				this.transfomers = {};
			}
			return (
				(e.prototype.register = function (t) {
					this.transfomers[t.name] = t;
				}),
				(e.prototype.findApplicable = function (t) {
					return eT(this.transfomers, function (r) {
						return r.isApplicable(t);
					});
				}),
				(e.prototype.findByName = function (t) {
					return this.transfomers[t];
				}),
				e
			);
		})(),
		rT = function (e) {
			return Object.prototype.toString.call(e).slice(8, -1);
		},
		Mh = function (e) {
			return typeof e > "u";
		},
		nT = function (e) {
			return e === null;
		},
		To = function (e) {
			return typeof e != "object" || e === null || e === Object.prototype
				? !1
				: Object.getPrototypeOf(e) === null
					? !0
					: Object.getPrototypeOf(e) === Object.prototype;
		},
		Bl = function (e) {
			return To(e) && Object.keys(e).length === 0;
		},
		lr = function (e) {
			return Array.isArray(e);
		},
		oT = function (e) {
			return typeof e == "string";
		},
		iT = function (e) {
			return typeof e == "number" && !isNaN(e);
		},
		sT = function (e) {
			return typeof e == "boolean";
		},
		aT = function (e) {
			return e instanceof RegExp;
		},
		Eo = function (e) {
			return e instanceof Map;
		},
		Ao = function (e) {
			return e instanceof Set;
		},
		Lh = function (e) {
			return rT(e) === "Symbol";
		},
		lT = function (e) {
			return e instanceof Date && !isNaN(e.valueOf());
		},
		uT = function (e) {
			return e instanceof Error;
		},
		Nh = function (e) {
			return typeof e == "number" && isNaN(e);
		},
		cT = function (e) {
			return sT(e) || nT(e) || Mh(e) || iT(e) || oT(e) || Lh(e);
		},
		dT = function (e) {
			return typeof e == "bigint";
		},
		pT = function (e) {
			return e === 1 / 0 || e === -1 / 0;
		},
		fT = function (e) {
			return ArrayBuffer.isView(e) && !(e instanceof DataView);
		},
		hT = function (e) {
			return e instanceof URL;
		},
		Dh = function (e) {
			return e.replace(/\./g, "\\.");
		},
		Ul = function (e) {
			return e.map(String).map(Dh).join(".");
		},
		Ro = function (e) {
			for (var t = [], r = "", n = 0; n < e.length; n++) {
				var o = e.charAt(n),
					i = o === "\\" && e.charAt(n + 1) === ".";
				if (i) {
					(r += "."), n++;
					continue;
				}
				var s = o === ".";
				if (s) {
					t.push(r), (r = "");
					continue;
				}
				r += o;
			}
			var a = r;
			return t.push(a), t;
		},
		Fl = function () {
			return (
				(Fl =
					Object.assign ||
					function (e) {
						for (var t, r = 1, n = arguments.length; r < n; r++) {
							t = arguments[r];
							for (var o in t)
								Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						}
						return e;
					}),
				Fl.apply(this, arguments)
			);
		},
		Hl = function (e, t) {
			var r = typeof Symbol == "function" && e[Symbol.iterator];
			if (!r) return e;
			var n = r.call(e),
				o,
				i = [],
				s;
			try {
				for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
					i.push(o.value);
			} catch (a) {
				s = { error: a };
			} finally {
				try {
					o && !o.done && (r = n.return) && r.call(n);
				} finally {
					if (s) throw s.error;
				}
			}
			return i;
		},
		Vl = function (e, t) {
			for (var r = 0, n = t.length, o = e.length; r < n; r++, o++) e[o] = t[r];
			return e;
		};
	function $t(e, t, r, n) {
		return { isApplicable: e, annotation: t, transform: r, untransform: n };
	}
	var jh = [
		$t(
			Mh,
			"undefined",
			function () {
				return null;
			},
			function () {},
		),
		$t(
			dT,
			"bigint",
			function (e) {
				return e.toString();
			},
			function (e) {
				return typeof BigInt < "u"
					? BigInt(e)
					: (console.error("Please add a BigInt polyfill."), e);
			},
		),
		$t(
			lT,
			"Date",
			function (e) {
				return e.toISOString();
			},
			function (e) {
				return new Date(e);
			},
		),
		$t(
			uT,
			"Error",
			function (e, t) {
				var r = { name: e.name, message: e.message };
				return (
					t.allowedErrorProps.forEach(function (n) {
						r[n] = e[n];
					}),
					r
				);
			},
			function (e, t) {
				var r = new Error(e.message);
				return (
					(r.name = e.name),
					(r.stack = e.stack),
					t.allowedErrorProps.forEach(function (n) {
						r[n] = e[n];
					}),
					r
				);
			},
		),
		$t(
			aT,
			"regexp",
			function (e) {
				return "" + e;
			},
			function (e) {
				var t = e.slice(1, e.lastIndexOf("/")),
					r = e.slice(e.lastIndexOf("/") + 1);
				return new RegExp(t, r);
			},
		),
		$t(
			Ao,
			"set",
			function (e) {
				return Vl([], Hl(e.values()));
			},
			function (e) {
				return new Set(e);
			},
		),
		$t(
			Eo,
			"map",
			function (e) {
				return Vl([], Hl(e.entries()));
			},
			function (e) {
				return new Map(e);
			},
		),
		$t(
			function (e) {
				return Nh(e) || pT(e);
			},
			"number",
			function (e) {
				return Nh(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity";
			},
			Number,
		),
		$t(
			function (e) {
				return e === 0 && 1 / e === -1 / 0;
			},
			"number",
			function () {
				return "-0";
			},
			Number,
		),
		$t(
			hT,
			"URL",
			function (e) {
				return e.toString();
			},
			function (e) {
				return new URL(e);
			},
		),
	];
	function vs(e, t, r, n) {
		return { isApplicable: e, annotation: t, transform: r, untransform: n };
	}
	var Bh = vs(
			function (e, t) {
				if (Lh(e)) {
					var r = !!t.symbolRegistry.getIdentifier(e);
					return r;
				}
				return !1;
			},
			function (e, t) {
				var r = t.symbolRegistry.getIdentifier(e);
				return ["symbol", r];
			},
			function (e) {
				return e.description;
			},
			function (e, t, r) {
				var n = r.symbolRegistry.getValue(t[1]);
				if (!n) throw new Error("Trying to deserialize unknown symbol");
				return n;
			},
		),
		gT = [
			Int8Array,
			Uint8Array,
			Int16Array,
			Uint16Array,
			Int32Array,
			Uint32Array,
			Float32Array,
			Float64Array,
			Uint8ClampedArray,
		].reduce(function (e, t) {
			return (e[t.name] = t), e;
		}, {}),
		Uh = vs(
			fT,
			function (e) {
				return ["typed-array", e.constructor.name];
			},
			function (e) {
				return Vl([], Hl(e));
			},
			function (e, t) {
				var r = gT[t[1]];
				if (!r) throw new Error("Trying to deserialize unknown typed array");
				return new r(e);
			},
		);
	function Fh(e, t) {
		if (e != null && e.constructor) {
			var r = !!t.classRegistry.getIdentifier(e.constructor);
			return r;
		}
		return !1;
	}
	var Hh = vs(
			Fh,
			function (e, t) {
				var r = t.classRegistry.getIdentifier(e.constructor);
				return ["class", r];
			},
			function (e, t) {
				var r = t.classRegistry.getAllowedProps(e.constructor);
				if (!r) return Fl({}, e);
				var n = {};
				return (
					r.forEach(function (o) {
						n[o] = e[o];
					}),
					n
				);
			},
			function (e, t, r) {
				var n = r.classRegistry.getValue(t[1]);
				if (!n)
					throw new Error(
						"Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564",
					);
				return Object.assign(Object.create(n.prototype), e);
			},
		),
		Vh = vs(
			function (e, t) {
				return !!t.customTransformerRegistry.findApplicable(e);
			},
			function (e, t) {
				var r = t.customTransformerRegistry.findApplicable(e);
				return ["custom", r.name];
			},
			function (e, t) {
				var r = t.customTransformerRegistry.findApplicable(e);
				return r.serialize(e);
			},
			function (e, t, r) {
				var n = r.customTransformerRegistry.findByName(t[1]);
				if (!n) throw new Error("Trying to deserialize unknown custom value");
				return n.deserialize(e);
			},
		),
		mT = [Hh, Bh, Vh, Uh],
		Zh = function (e, t) {
			var r = Ph(mT, function (o) {
				return o.isApplicable(e, t);
			});
			if (r) return { value: r.transform(e, t), type: r.annotation(e, t) };
			var n = Ph(jh, function (o) {
				return o.isApplicable(e, t);
			});
			if (n) return { value: n.transform(e, t), type: n.annotation };
		},
		qh = {};
	jh.forEach(function (e) {
		qh[e.annotation] = e;
	});
	var yT = function (e, t, r) {
			if (lr(t))
				switch (t[0]) {
					case "symbol":
						return Bh.untransform(e, t, r);
					case "class":
						return Hh.untransform(e, t, r);
					case "custom":
						return Vh.untransform(e, t, r);
					case "typed-array":
						return Uh.untransform(e, t, r);
					default:
						throw new Error("Unknown transformation: " + t);
				}
			else {
				var n = qh[t];
				if (!n) throw new Error("Unknown transformation: " + t);
				return n.untransform(e, r);
			}
		},
		An = function (e, t) {
			for (var r = e.keys(); t > 0; ) r.next(), t--;
			return r.next().value;
		};
	function Wh(e) {
		if (ys(e, "__proto__"))
			throw new Error("__proto__ is not allowed as a property");
		if (ys(e, "prototype"))
			throw new Error("prototype is not allowed as a property");
		if (ys(e, "constructor"))
			throw new Error("constructor is not allowed as a property");
	}
	var vT = function (e, t) {
			Wh(t);
			for (var r = 0; r < t.length; r++) {
				var n = t[r];
				if (Ao(e)) e = An(e, +n);
				else if (Eo(e)) {
					var o = +n,
						i = +t[++r] == 0 ? "key" : "value",
						s = An(e, o);
					switch (i) {
						case "key":
							e = s;
							break;
						case "value":
							e = e.get(s);
							break;
					}
				} else e = e[n];
			}
			return e;
		},
		Zl = function (e, t, r) {
			if ((Wh(t), t.length === 0)) return r(e);
			for (var n = e, o = 0; o < t.length - 1; o++) {
				var i = t[o];
				if (lr(n)) {
					var s = +i;
					n = n[s];
				} else if (To(n)) n = n[i];
				else if (Ao(n)) {
					var a = +i;
					n = An(n, a);
				} else if (Eo(n)) {
					var l = o === t.length - 2;
					if (l) break;
					var a = +i,
						u = +t[++o] == 0 ? "key" : "value",
						d = An(n, a);
					switch (u) {
						case "key":
							n = d;
							break;
						case "value":
							n = n.get(d);
							break;
					}
				}
			}
			var c = t[t.length - 1];
			if ((lr(n) ? (n[+c] = r(n[+c])) : To(n) && (n[c] = r(n[c])), Ao(n))) {
				var f = An(n, +c),
					p = r(f);
				f !== p && (n.delete(f), n.add(p));
			}
			if (Eo(n)) {
				var a = +t[t.length - 2],
					h = An(n, a),
					u = +c == 0 ? "key" : "value";
				switch (u) {
					case "key": {
						var g = r(h);
						n.set(g, n.get(h)), g !== h && n.delete(h);
						break;
					}
					case "value": {
						n.set(h, r(n.get(h)));
						break;
					}
				}
			}
			return e;
		},
		Ht = function (e, t) {
			var r = typeof Symbol == "function" && e[Symbol.iterator];
			if (!r) return e;
			var n = r.call(e),
				o,
				i = [],
				s;
			try {
				for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
					i.push(o.value);
			} catch (a) {
				s = { error: a };
			} finally {
				try {
					o && !o.done && (r = n.return) && r.call(n);
				} finally {
					if (s) throw s.error;
				}
			}
			return i;
		},
		ur = function (e, t) {
			for (var r = 0, n = t.length, o = e.length; r < n; r++, o++) e[o] = t[r];
			return e;
		};
	function ql(e, t, r) {
		if ((r === void 0 && (r = []), !!e)) {
			if (!lr(e)) {
				En(e, function (s, a) {
					return ql(s, t, ur(ur([], Ht(r)), Ht(Ro(a))));
				});
				return;
			}
			var n = Ht(e, 2),
				o = n[0],
				i = n[1];
			i &&
				En(i, function (s, a) {
					ql(s, t, ur(ur([], Ht(r)), Ht(Ro(a))));
				}),
				t(o, r);
		}
	}
	function bT(e, t, r) {
		return (
			ql(t, function (n, o) {
				e = Zl(e, o, function (i) {
					return yT(i, n, r);
				});
			}),
			e
		);
	}
	function wT(e, t) {
		function r(s, a) {
			var l = vT(e, Ro(a));
			s.map(Ro).forEach(function (u) {
				e = Zl(e, u, function () {
					return l;
				});
			});
		}
		if (lr(t)) {
			var n = Ht(t, 2),
				o = n[0],
				i = n[1];
			o.forEach(function (s) {
				e = Zl(e, Ro(s), function () {
					return e;
				});
			}),
				i && En(i, r);
		} else En(t, r);
		return e;
	}
	var kT = function (e, t) {
		return To(e) || lr(e) || Eo(e) || Ao(e) || Fh(e, t);
	};
	function _T(e, t, r) {
		var n = r.get(e);
		n ? n.push(t) : r.set(e, [t]);
	}
	function ST(e, t) {
		var r = {},
			n = void 0;
		return (
			e.forEach(function (o) {
				if (!(o.length <= 1)) {
					t ||
						(o = o
							.map(function (l) {
								return l.map(String);
							})
							.sort(function (l, u) {
								return l.length - u.length;
							}));
					var i = Ht(o),
						s = i[0],
						a = i.slice(1);
					s.length === 0 ? (n = a.map(Ul)) : (r[Ul(s)] = a.map(Ul));
				}
			}),
			n ? (Bl(r) ? [n] : [n, r]) : Bl(r) ? void 0 : r
		);
	}
	var Kh = function (e, t, r, n, o, i, s) {
		var a;
		o === void 0 && (o = []),
			i === void 0 && (i = []),
			s === void 0 && (s = new Map());
		var l = cT(e);
		if (!l) {
			_T(e, o, t);
			var u = s.get(e);
			if (u) return n ? { transformedValue: null } : u;
		}
		if (!kT(e, r)) {
			var d = Zh(e, r),
				c = d
					? { transformedValue: d.value, annotations: [d.type] }
					: { transformedValue: e };
			return l || s.set(e, c), c;
		}
		if (ys(i, e)) return { transformedValue: null };
		var f = Zh(e, r),
			p = (a = f == null ? void 0 : f.value) !== null && a !== void 0 ? a : e,
			h = lr(p) ? [] : {},
			g = {};
		En(p, function (v, b) {
			var w = Kh(v, t, r, n, ur(ur([], Ht(o)), [b]), ur(ur([], Ht(i)), [e]), s);
			(h[b] = w.transformedValue),
				lr(w.annotations)
					? (g[b] = w.annotations)
					: To(w.annotations) &&
						En(w.annotations, function (S, T) {
							g[Dh(b) + "." + T] = S;
						});
		});
		var y = Bl(g)
			? { transformedValue: h, annotations: f ? [f.type] : void 0 }
			: { transformedValue: h, annotations: f ? [f.type, g] : g };
		return l || s.set(e, y), y;
	};
	function Jh(e) {
		return Object.prototype.toString.call(e).slice(8, -1);
	}
	function Gh(e) {
		return Jh(e) === "Array";
	}
	function xT(e) {
		if (Jh(e) !== "Object") return !1;
		const t = Object.getPrototypeOf(e);
		return !!t && t.constructor === Object && t === Object.prototype;
	}
	function $T(e, t, r, n, o) {
		const i = {}.propertyIsEnumerable.call(n, t)
			? "enumerable"
			: "nonenumerable";
		i === "enumerable" && (e[t] = r),
			o &&
				i === "nonenumerable" &&
				Object.defineProperty(e, t, {
					value: r,
					enumerable: !1,
					writable: !0,
					configurable: !0,
				});
	}
	function Wl(e, t = {}) {
		if (Gh(e)) return e.map((o) => Wl(o, t));
		if (!xT(e)) return e;
		const r = Object.getOwnPropertyNames(e),
			n = Object.getOwnPropertySymbols(e);
		return [...r, ...n].reduce((o, i) => {
			if (Gh(t.props) && !t.props.includes(i)) return o;
			const s = e[i],
				a = Wl(s, t);
			return $T(o, i, a, e, t.nonenumerable), o;
		}, {});
	}
	var Lr = function () {
			return (
				(Lr =
					Object.assign ||
					function (e) {
						for (var t, r = 1, n = arguments.length; r < n; r++) {
							t = arguments[r];
							for (var o in t)
								Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
						}
						return e;
					}),
				Lr.apply(this, arguments)
			);
		},
		CT = function (e, t) {
			var r = typeof Symbol == "function" && e[Symbol.iterator];
			if (!r) return e;
			var n = r.call(e),
				o,
				i = [],
				s;
			try {
				for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
					i.push(o.value);
			} catch (a) {
				s = { error: a };
			} finally {
				try {
					o && !o.done && (r = n.return) && r.call(n);
				} finally {
					if (s) throw s.error;
				}
			}
			return i;
		},
		zT = function (e, t) {
			for (var r = 0, n = t.length, o = e.length; r < n; r++, o++) e[o] = t[r];
			return e;
		},
		Ct = (function () {
			function e(t) {
				var r = t === void 0 ? {} : t,
					n = r.dedupe,
					o = n === void 0 ? !1 : n;
				(this.classRegistry = new YI()),
					(this.symbolRegistry = new Oh(function (i) {
						var s;
						return (s = i.description) !== null && s !== void 0 ? s : "";
					})),
					(this.customTransformerRegistry = new tT()),
					(this.allowedErrorProps = []),
					(this.dedupe = o);
			}
			return (
				(e.prototype.serialize = function (t) {
					var r = new Map(),
						n = Kh(t, r, this, this.dedupe),
						o = { json: n.transformedValue };
					n.annotations &&
						(o.meta = Lr(Lr({}, o.meta), { values: n.annotations }));
					var i = ST(r, this.dedupe);
					return (
						i && (o.meta = Lr(Lr({}, o.meta), { referentialEqualities: i })), o
					);
				}),
				(e.prototype.deserialize = function (t) {
					var r = t.json,
						n = t.meta,
						o = Wl(r);
					return (
						n != null && n.values && (o = bT(o, n.values, this)),
						n != null &&
							n.referentialEqualities &&
							(o = wT(o, n.referentialEqualities)),
						o
					);
				}),
				(e.prototype.stringify = function (t) {
					return JSON.stringify(this.serialize(t));
				}),
				(e.prototype.parse = function (t) {
					return this.deserialize(JSON.parse(t));
				}),
				(e.prototype.registerClass = function (t, r) {
					this.classRegistry.register(t, r);
				}),
				(e.prototype.registerSymbol = function (t, r) {
					this.symbolRegistry.register(t, r);
				}),
				(e.prototype.registerCustom = function (t, r) {
					this.customTransformerRegistry.register(Lr({ name: r }, t));
				}),
				(e.prototype.allowErrorProps = function () {
					for (var t, r = [], n = 0; n < arguments.length; n++)
						r[n] = arguments[n];
					(t = this.allowedErrorProps).push.apply(t, zT([], CT(r)));
				}),
				(e.defaultInstance = new e()),
				(e.serialize = e.defaultInstance.serialize.bind(e.defaultInstance)),
				(e.deserialize = e.defaultInstance.deserialize.bind(e.defaultInstance)),
				(e.stringify = e.defaultInstance.stringify.bind(e.defaultInstance)),
				(e.parse = e.defaultInstance.parse.bind(e.defaultInstance)),
				(e.registerClass = e.defaultInstance.registerClass.bind(
					e.defaultInstance,
				)),
				(e.registerSymbol = e.defaultInstance.registerSymbol.bind(
					e.defaultInstance,
				)),
				(e.registerCustom = e.defaultInstance.registerCustom.bind(
					e.defaultInstance,
				)),
				(e.allowErrorProps = e.defaultInstance.allowErrorProps.bind(
					e.defaultInstance,
				)),
				e
			);
		})(),
		IT = Ct.serialize,
		TT = Ct.deserialize,
		ET = Ct.stringify,
		AT = Ct.parse,
		RT = Ct.registerClass,
		OT = Ct.registerCustom,
		PT = Ct.registerSymbol,
		MT = Ct.allowErrorProps;
	const LT = Nl(
		Object.freeze(
			Object.defineProperty(
				{
					__proto__: null,
					SuperJSON: Ct,
					allowErrorProps: MT,
					default: Ct,
					deserialize: TT,
					parse: AT,
					registerClass: RT,
					registerCustom: OT,
					registerSymbol: PT,
					serialize: IT,
					stringify: ET,
				},
				Symbol.toStringTag,
				{ value: "Module" },
			),
		),
	);
	var Kl = {},
		Oo = {},
		bs = {},
		Yh;
	function Xh() {
		if (Yh) return bs;
		(Yh = 1),
			Object.defineProperty(bs, "__esModule", { value: !0 }),
			(bs.default = r);
		let e;
		const t = new Uint8Array(16);
		function r() {
			if (
				!e &&
				((e =
					typeof crypto < "u" &&
					crypto.getRandomValues &&
					crypto.getRandomValues.bind(crypto)),
				!e)
			)
				throw new Error(
					"crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
				);
			return e(t);
		}
		return bs;
	}
	var Rn = {},
		Po = {},
		Mo = {},
		Qh;
	function NT() {
		if (Qh) return Mo;
		(Qh = 1),
			Object.defineProperty(Mo, "__esModule", { value: !0 }),
			(Mo.default = void 0);
		var e =
			/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
		return (Mo.default = e), Mo;
	}
	var eg;
	function ws() {
		if (eg) return Po;
		(eg = 1),
			Object.defineProperty(Po, "__esModule", { value: !0 }),
			(Po.default = void 0);
		var e = t(NT());
		function t(o) {
			return o && o.__esModule ? o : { default: o };
		}
		function r(o) {
			return typeof o == "string" && e.default.test(o);
		}
		var n = r;
		return (Po.default = n), Po;
	}
	var tg;
	function ks() {
		if (tg) return Rn;
		(tg = 1),
			Object.defineProperty(Rn, "__esModule", { value: !0 }),
			(Rn.default = void 0),
			(Rn.unsafeStringify = n);
		var e = t(ws());
		function t(s) {
			return s && s.__esModule ? s : { default: s };
		}
		const r = [];
		for (let s = 0; s < 256; ++s) r.push((s + 256).toString(16).slice(1));
		function n(s, a = 0) {
			return (
				r[s[a + 0]] +
				r[s[a + 1]] +
				r[s[a + 2]] +
				r[s[a + 3]] +
				"-" +
				r[s[a + 4]] +
				r[s[a + 5]] +
				"-" +
				r[s[a + 6]] +
				r[s[a + 7]] +
				"-" +
				r[s[a + 8]] +
				r[s[a + 9]] +
				"-" +
				r[s[a + 10]] +
				r[s[a + 11]] +
				r[s[a + 12]] +
				r[s[a + 13]] +
				r[s[a + 14]] +
				r[s[a + 15]]
			);
		}
		function o(s, a = 0) {
			const l = n(s, a);
			if (!(0, e.default)(l)) throw TypeError("Stringified UUID is invalid");
			return l;
		}
		var i = o;
		return (Rn.default = i), Rn;
	}
	var rg;
	function DT() {
		if (rg) return Oo;
		(rg = 1),
			Object.defineProperty(Oo, "__esModule", { value: !0 }),
			(Oo.default = void 0);
		var e = r(Xh()),
			t = ks();
		function r(u) {
			return u && u.__esModule ? u : { default: u };
		}
		let n,
			o,
			i = 0,
			s = 0;
		function a(u, d, c) {
			let f = (d && c) || 0;
			const p = d || new Array(16);
			u = u || {};
			let h = u.node || n,
				g = u.clockseq !== void 0 ? u.clockseq : o;
			if (h == null || g == null) {
				const T = u.random || (u.rng || e.default)();
				h == null && (h = n = [T[0] | 1, T[1], T[2], T[3], T[4], T[5]]),
					g == null && (g = o = ((T[6] << 8) | T[7]) & 16383);
			}
			let y = u.msecs !== void 0 ? u.msecs : Date.now(),
				v = u.nsecs !== void 0 ? u.nsecs : s + 1;
			const b = y - i + (v - s) / 1e4;
			if (
				(b < 0 && u.clockseq === void 0 && (g = (g + 1) & 16383),
				(b < 0 || y > i) && u.nsecs === void 0 && (v = 0),
				v >= 1e4)
			)
				throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
			(i = y), (s = v), (o = g), (y += 122192928e5);
			const w = ((y & 268435455) * 1e4 + v) % 4294967296;
			(p[f++] = (w >>> 24) & 255),
				(p[f++] = (w >>> 16) & 255),
				(p[f++] = (w >>> 8) & 255),
				(p[f++] = w & 255);
			const S = ((y / 4294967296) * 1e4) & 268435455;
			(p[f++] = (S >>> 8) & 255),
				(p[f++] = S & 255),
				(p[f++] = ((S >>> 24) & 15) | 16),
				(p[f++] = (S >>> 16) & 255),
				(p[f++] = (g >>> 8) | 128),
				(p[f++] = g & 255);
			for (let T = 0; T < 6; ++T) p[f + T] = h[T];
			return d || (0, t.unsafeStringify)(p);
		}
		var l = a;
		return (Oo.default = l), Oo;
	}
	var Lo = {},
		cr = {},
		No = {},
		ng;
	function og() {
		if (ng) return No;
		(ng = 1),
			Object.defineProperty(No, "__esModule", { value: !0 }),
			(No.default = void 0);
		var e = t(ws());
		function t(o) {
			return o && o.__esModule ? o : { default: o };
		}
		function r(o) {
			if (!(0, e.default)(o)) throw TypeError("Invalid UUID");
			let i;
			const s = new Uint8Array(16);
			return (
				(s[0] = (i = parseInt(o.slice(0, 8), 16)) >>> 24),
				(s[1] = (i >>> 16) & 255),
				(s[2] = (i >>> 8) & 255),
				(s[3] = i & 255),
				(s[4] = (i = parseInt(o.slice(9, 13), 16)) >>> 8),
				(s[5] = i & 255),
				(s[6] = (i = parseInt(o.slice(14, 18), 16)) >>> 8),
				(s[7] = i & 255),
				(s[8] = (i = parseInt(o.slice(19, 23), 16)) >>> 8),
				(s[9] = i & 255),
				(s[10] = ((i = parseInt(o.slice(24, 36), 16)) / 1099511627776) & 255),
				(s[11] = (i / 4294967296) & 255),
				(s[12] = (i >>> 24) & 255),
				(s[13] = (i >>> 16) & 255),
				(s[14] = (i >>> 8) & 255),
				(s[15] = i & 255),
				s
			);
		}
		var n = r;
		return (No.default = n), No;
	}
	var ig;
	function sg() {
		if (ig) return cr;
		(ig = 1),
			Object.defineProperty(cr, "__esModule", { value: !0 }),
			(cr.URL = cr.DNS = void 0),
			(cr.default = s);
		var e = ks(),
			t = r(og());
		function r(a) {
			return a && a.__esModule ? a : { default: a };
		}
		function n(a) {
			a = unescape(encodeURIComponent(a));
			const l = [];
			for (let u = 0; u < a.length; ++u) l.push(a.charCodeAt(u));
			return l;
		}
		const o = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
		cr.DNS = o;
		const i = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
		cr.URL = i;
		function s(a, l, u) {
			function d(c, f, p, h) {
				var g;
				if (
					(typeof c == "string" && (c = n(c)),
					typeof f == "string" && (f = (0, t.default)(f)),
					((g = f) === null || g === void 0 ? void 0 : g.length) !== 16)
				)
					throw TypeError(
						"Namespace must be array-like (16 iterable integer values, 0-255)",
					);
				let y = new Uint8Array(16 + c.length);
				if (
					(y.set(f),
					y.set(c, f.length),
					(y = u(y)),
					(y[6] = (y[6] & 15) | l),
					(y[8] = (y[8] & 63) | 128),
					p)
				) {
					h = h || 0;
					for (let v = 0; v < 16; ++v) p[h + v] = y[v];
					return p;
				}
				return (0, e.unsafeStringify)(y);
			}
			try {
				d.name = a;
			} catch {}
			return (d.DNS = o), (d.URL = i), d;
		}
		return cr;
	}
	var Do = {},
		ag;
	function jT() {
		if (ag) return Do;
		(ag = 1),
			Object.defineProperty(Do, "__esModule", { value: !0 }),
			(Do.default = void 0);
		function e(p) {
			if (typeof p == "string") {
				const h = unescape(encodeURIComponent(p));
				p = new Uint8Array(h.length);
				for (let g = 0; g < h.length; ++g) p[g] = h.charCodeAt(g);
			}
			return t(n(o(p), p.length * 8));
		}
		function t(p) {
			const h = [],
				g = p.length * 32,
				y = "0123456789abcdef";
			for (let v = 0; v < g; v += 8) {
				const b = (p[v >> 5] >>> (v % 32)) & 255,
					w = parseInt(y.charAt((b >>> 4) & 15) + y.charAt(b & 15), 16);
				h.push(w);
			}
			return h;
		}
		function r(p) {
			return (((p + 64) >>> 9) << 4) + 14 + 1;
		}
		function n(p, h) {
			(p[h >> 5] |= 128 << (h % 32)), (p[r(h) - 1] = h);
			let g = 1732584193,
				y = -271733879,
				v = -1732584194,
				b = 271733878;
			for (let w = 0; w < p.length; w += 16) {
				const S = g,
					T = y,
					O = v,
					N = b;
				(g = l(g, y, v, b, p[w], 7, -680876936)),
					(b = l(b, g, y, v, p[w + 1], 12, -389564586)),
					(v = l(v, b, g, y, p[w + 2], 17, 606105819)),
					(y = l(y, v, b, g, p[w + 3], 22, -1044525330)),
					(g = l(g, y, v, b, p[w + 4], 7, -176418897)),
					(b = l(b, g, y, v, p[w + 5], 12, 1200080426)),
					(v = l(v, b, g, y, p[w + 6], 17, -1473231341)),
					(y = l(y, v, b, g, p[w + 7], 22, -45705983)),
					(g = l(g, y, v, b, p[w + 8], 7, 1770035416)),
					(b = l(b, g, y, v, p[w + 9], 12, -1958414417)),
					(v = l(v, b, g, y, p[w + 10], 17, -42063)),
					(y = l(y, v, b, g, p[w + 11], 22, -1990404162)),
					(g = l(g, y, v, b, p[w + 12], 7, 1804603682)),
					(b = l(b, g, y, v, p[w + 13], 12, -40341101)),
					(v = l(v, b, g, y, p[w + 14], 17, -1502002290)),
					(y = l(y, v, b, g, p[w + 15], 22, 1236535329)),
					(g = u(g, y, v, b, p[w + 1], 5, -165796510)),
					(b = u(b, g, y, v, p[w + 6], 9, -1069501632)),
					(v = u(v, b, g, y, p[w + 11], 14, 643717713)),
					(y = u(y, v, b, g, p[w], 20, -373897302)),
					(g = u(g, y, v, b, p[w + 5], 5, -701558691)),
					(b = u(b, g, y, v, p[w + 10], 9, 38016083)),
					(v = u(v, b, g, y, p[w + 15], 14, -660478335)),
					(y = u(y, v, b, g, p[w + 4], 20, -405537848)),
					(g = u(g, y, v, b, p[w + 9], 5, 568446438)),
					(b = u(b, g, y, v, p[w + 14], 9, -1019803690)),
					(v = u(v, b, g, y, p[w + 3], 14, -187363961)),
					(y = u(y, v, b, g, p[w + 8], 20, 1163531501)),
					(g = u(g, y, v, b, p[w + 13], 5, -1444681467)),
					(b = u(b, g, y, v, p[w + 2], 9, -51403784)),
					(v = u(v, b, g, y, p[w + 7], 14, 1735328473)),
					(y = u(y, v, b, g, p[w + 12], 20, -1926607734)),
					(g = d(g, y, v, b, p[w + 5], 4, -378558)),
					(b = d(b, g, y, v, p[w + 8], 11, -2022574463)),
					(v = d(v, b, g, y, p[w + 11], 16, 1839030562)),
					(y = d(y, v, b, g, p[w + 14], 23, -35309556)),
					(g = d(g, y, v, b, p[w + 1], 4, -1530992060)),
					(b = d(b, g, y, v, p[w + 4], 11, 1272893353)),
					(v = d(v, b, g, y, p[w + 7], 16, -155497632)),
					(y = d(y, v, b, g, p[w + 10], 23, -1094730640)),
					(g = d(g, y, v, b, p[w + 13], 4, 681279174)),
					(b = d(b, g, y, v, p[w], 11, -358537222)),
					(v = d(v, b, g, y, p[w + 3], 16, -722521979)),
					(y = d(y, v, b, g, p[w + 6], 23, 76029189)),
					(g = d(g, y, v, b, p[w + 9], 4, -640364487)),
					(b = d(b, g, y, v, p[w + 12], 11, -421815835)),
					(v = d(v, b, g, y, p[w + 15], 16, 530742520)),
					(y = d(y, v, b, g, p[w + 2], 23, -995338651)),
					(g = c(g, y, v, b, p[w], 6, -198630844)),
					(b = c(b, g, y, v, p[w + 7], 10, 1126891415)),
					(v = c(v, b, g, y, p[w + 14], 15, -1416354905)),
					(y = c(y, v, b, g, p[w + 5], 21, -57434055)),
					(g = c(g, y, v, b, p[w + 12], 6, 1700485571)),
					(b = c(b, g, y, v, p[w + 3], 10, -1894986606)),
					(v = c(v, b, g, y, p[w + 10], 15, -1051523)),
					(y = c(y, v, b, g, p[w + 1], 21, -2054922799)),
					(g = c(g, y, v, b, p[w + 8], 6, 1873313359)),
					(b = c(b, g, y, v, p[w + 15], 10, -30611744)),
					(v = c(v, b, g, y, p[w + 6], 15, -1560198380)),
					(y = c(y, v, b, g, p[w + 13], 21, 1309151649)),
					(g = c(g, y, v, b, p[w + 4], 6, -145523070)),
					(b = c(b, g, y, v, p[w + 11], 10, -1120210379)),
					(v = c(v, b, g, y, p[w + 2], 15, 718787259)),
					(y = c(y, v, b, g, p[w + 9], 21, -343485551)),
					(g = i(g, S)),
					(y = i(y, T)),
					(v = i(v, O)),
					(b = i(b, N));
			}
			return [g, y, v, b];
		}
		function o(p) {
			if (p.length === 0) return [];
			const h = p.length * 8,
				g = new Uint32Array(r(h));
			for (let y = 0; y < h; y += 8) g[y >> 5] |= (p[y / 8] & 255) << (y % 32);
			return g;
		}
		function i(p, h) {
			const g = (p & 65535) + (h & 65535);
			return (((p >> 16) + (h >> 16) + (g >> 16)) << 16) | (g & 65535);
		}
		function s(p, h) {
			return (p << h) | (p >>> (32 - h));
		}
		function a(p, h, g, y, v, b) {
			return i(s(i(i(h, p), i(y, b)), v), g);
		}
		function l(p, h, g, y, v, b, w) {
			return a((h & g) | (~h & y), p, h, v, b, w);
		}
		function u(p, h, g, y, v, b, w) {
			return a((h & y) | (g & ~y), p, h, v, b, w);
		}
		function d(p, h, g, y, v, b, w) {
			return a(h ^ g ^ y, p, h, v, b, w);
		}
		function c(p, h, g, y, v, b, w) {
			return a(g ^ (h | ~y), p, h, v, b, w);
		}
		var f = e;
		return (Do.default = f), Do;
	}
	var lg;
	function BT() {
		if (lg) return Lo;
		(lg = 1),
			Object.defineProperty(Lo, "__esModule", { value: !0 }),
			(Lo.default = void 0);
		var e = r(sg()),
			t = r(jT());
		function r(i) {
			return i && i.__esModule ? i : { default: i };
		}
		var o = (0, e.default)("v3", 48, t.default);
		return (Lo.default = o), Lo;
	}
	var jo = {},
		Bo = {},
		ug;
	function UT() {
		if (ug) return Bo;
		(ug = 1),
			Object.defineProperty(Bo, "__esModule", { value: !0 }),
			(Bo.default = void 0);
		var t = {
			randomUUID:
				typeof crypto < "u" &&
				crypto.randomUUID &&
				crypto.randomUUID.bind(crypto),
		};
		return (Bo.default = t), Bo;
	}
	var cg;
	function FT() {
		if (cg) return jo;
		(cg = 1),
			Object.defineProperty(jo, "__esModule", { value: !0 }),
			(jo.default = void 0);
		var e = n(UT()),
			t = n(Xh()),
			r = ks();
		function n(s) {
			return s && s.__esModule ? s : { default: s };
		}
		function o(s, a, l) {
			if (e.default.randomUUID && !a && !s) return e.default.randomUUID();
			s = s || {};
			const u = s.random || (s.rng || t.default)();
			if (((u[6] = (u[6] & 15) | 64), (u[8] = (u[8] & 63) | 128), a)) {
				l = l || 0;
				for (let d = 0; d < 16; ++d) a[l + d] = u[d];
				return a;
			}
			return (0, r.unsafeStringify)(u);
		}
		var i = o;
		return (jo.default = i), jo;
	}
	var Uo = {},
		Fo = {},
		dg;
	function HT() {
		if (dg) return Fo;
		(dg = 1),
			Object.defineProperty(Fo, "__esModule", { value: !0 }),
			(Fo.default = void 0);
		function e(o, i, s, a) {
			switch (o) {
				case 0:
					return (i & s) ^ (~i & a);
				case 1:
					return i ^ s ^ a;
				case 2:
					return (i & s) ^ (i & a) ^ (s & a);
				case 3:
					return i ^ s ^ a;
			}
		}
		function t(o, i) {
			return (o << i) | (o >>> (32 - i));
		}
		function r(o) {
			const i = [1518500249, 1859775393, 2400959708, 3395469782],
				s = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
			if (typeof o == "string") {
				const d = unescape(encodeURIComponent(o));
				o = [];
				for (let c = 0; c < d.length; ++c) o.push(d.charCodeAt(c));
			} else Array.isArray(o) || (o = Array.prototype.slice.call(o));
			o.push(128);
			const a = o.length / 4 + 2,
				l = Math.ceil(a / 16),
				u = new Array(l);
			for (let d = 0; d < l; ++d) {
				const c = new Uint32Array(16);
				for (let f = 0; f < 16; ++f)
					c[f] =
						(o[d * 64 + f * 4] << 24) |
						(o[d * 64 + f * 4 + 1] << 16) |
						(o[d * 64 + f * 4 + 2] << 8) |
						o[d * 64 + f * 4 + 3];
				u[d] = c;
			}
			(u[l - 1][14] = ((o.length - 1) * 8) / Math.pow(2, 32)),
				(u[l - 1][14] = Math.floor(u[l - 1][14])),
				(u[l - 1][15] = ((o.length - 1) * 8) & 4294967295);
			for (let d = 0; d < l; ++d) {
				const c = new Uint32Array(80);
				for (let v = 0; v < 16; ++v) c[v] = u[d][v];
				for (let v = 16; v < 80; ++v)
					c[v] = t(c[v - 3] ^ c[v - 8] ^ c[v - 14] ^ c[v - 16], 1);
				let f = s[0],
					p = s[1],
					h = s[2],
					g = s[3],
					y = s[4];
				for (let v = 0; v < 80; ++v) {
					const b = Math.floor(v / 20),
						w = (t(f, 5) + e(b, p, h, g) + y + i[b] + c[v]) >>> 0;
					(y = g), (g = h), (h = t(p, 30) >>> 0), (p = f), (f = w);
				}
				(s[0] = (s[0] + f) >>> 0),
					(s[1] = (s[1] + p) >>> 0),
					(s[2] = (s[2] + h) >>> 0),
					(s[3] = (s[3] + g) >>> 0),
					(s[4] = (s[4] + y) >>> 0);
			}
			return [
				(s[0] >> 24) & 255,
				(s[0] >> 16) & 255,
				(s[0] >> 8) & 255,
				s[0] & 255,
				(s[1] >> 24) & 255,
				(s[1] >> 16) & 255,
				(s[1] >> 8) & 255,
				s[1] & 255,
				(s[2] >> 24) & 255,
				(s[2] >> 16) & 255,
				(s[2] >> 8) & 255,
				s[2] & 255,
				(s[3] >> 24) & 255,
				(s[3] >> 16) & 255,
				(s[3] >> 8) & 255,
				s[3] & 255,
				(s[4] >> 24) & 255,
				(s[4] >> 16) & 255,
				(s[4] >> 8) & 255,
				s[4] & 255,
			];
		}
		var n = r;
		return (Fo.default = n), Fo;
	}
	var pg;
	function VT() {
		if (pg) return Uo;
		(pg = 1),
			Object.defineProperty(Uo, "__esModule", { value: !0 }),
			(Uo.default = void 0);
		var e = r(sg()),
			t = r(HT());
		function r(i) {
			return i && i.__esModule ? i : { default: i };
		}
		var o = (0, e.default)("v5", 80, t.default);
		return (Uo.default = o), Uo;
	}
	var Ho = {},
		fg;
	function ZT() {
		if (fg) return Ho;
		(fg = 1),
			Object.defineProperty(Ho, "__esModule", { value: !0 }),
			(Ho.default = void 0);
		var e = "00000000-0000-0000-0000-000000000000";
		return (Ho.default = e), Ho;
	}
	var Vo = {},
		hg;
	function qT() {
		if (hg) return Vo;
		(hg = 1),
			Object.defineProperty(Vo, "__esModule", { value: !0 }),
			(Vo.default = void 0);
		var e = t(ws());
		function t(o) {
			return o && o.__esModule ? o : { default: o };
		}
		function r(o) {
			if (!(0, e.default)(o)) throw TypeError("Invalid UUID");
			return parseInt(o.slice(14, 15), 16);
		}
		var n = r;
		return (Vo.default = n), Vo;
	}
	var gg;
	function WT() {
		return (
			gg ||
				((gg = 1),
				(function (e) {
					Object.defineProperty(e, "__esModule", { value: !0 }),
						Object.defineProperty(e, "NIL", {
							enumerable: !0,
							get: function () {
								return i.default;
							},
						}),
						Object.defineProperty(e, "parse", {
							enumerable: !0,
							get: function () {
								return u.default;
							},
						}),
						Object.defineProperty(e, "stringify", {
							enumerable: !0,
							get: function () {
								return l.default;
							},
						}),
						Object.defineProperty(e, "v1", {
							enumerable: !0,
							get: function () {
								return t.default;
							},
						}),
						Object.defineProperty(e, "v3", {
							enumerable: !0,
							get: function () {
								return r.default;
							},
						}),
						Object.defineProperty(e, "v4", {
							enumerable: !0,
							get: function () {
								return n.default;
							},
						}),
						Object.defineProperty(e, "v5", {
							enumerable: !0,
							get: function () {
								return o.default;
							},
						}),
						Object.defineProperty(e, "validate", {
							enumerable: !0,
							get: function () {
								return a.default;
							},
						}),
						Object.defineProperty(e, "version", {
							enumerable: !0,
							get: function () {
								return s.default;
							},
						});
					var t = d(DT()),
						r = d(BT()),
						n = d(FT()),
						o = d(VT()),
						i = d(ZT()),
						s = d(qT()),
						a = d(ws()),
						l = d(ks()),
						u = d(og());
					function d(c) {
						return c && c.__esModule ? c : { default: c };
					}
				})(Kl)),
			Kl
		);
	}
	var On = null;
	typeof WebSocket < "u"
		? (On = WebSocket)
		: typeof MozWebSocket < "u"
			? (On = MozWebSocket)
			: typeof global < "u"
				? (On = global.WebSocket || global.MozWebSocket)
				: typeof window < "u"
					? (On = window.WebSocket || window.MozWebSocket)
					: typeof self < "u" && (On = self.WebSocket || self.MozWebSocket);
	const mg = Nl(
		Object.freeze(
			Object.defineProperty(
				{ __proto__: null, default: On },
				Symbol.toStringTag,
				{ value: "Module" },
			),
		),
	);
	var Jl, yg;
	function KT() {
		var fe;
		if (yg) return Jl;
		yg = 1;
		var e = Object.create,
			t = Object.defineProperty,
			r = Object.getOwnPropertyDescriptor,
			n = Object.getOwnPropertyNames,
			o = Object.getPrototypeOf,
			i = Object.prototype.hasOwnProperty,
			s = (C, E) => {
				for (var K in E) t(C, K, { get: E[K], enumerable: !0 });
			},
			a = (C, E, K, ce) => {
				if ((E && typeof E == "object") || typeof E == "function")
					for (let U of n(E))
						!i.call(C, U) &&
							U !== K &&
							t(C, U, {
								get: () => E[U],
								enumerable: !(ce = r(E, U)) || ce.enumerable,
							});
				return C;
			},
			l = (C, E, K) => (
				(K = C != null ? e(o(C)) : {}),
				a(
					!C || !C.__esModule
						? t(K, "default", { value: C, enumerable: !0 })
						: K,
					C,
				)
			),
			u = (C) => a(t({}, "__esModule", { value: !0 }), C),
			d = {};
		s(d, {
			createBrowserInspector: () => _,
			createBrowserReceiver: () => F,
			createInspector: () => T,
			createSkyInspector: () => J,
			createWebSocketInspector: () => ve,
			createWebSocketReceiver: () => se,
		}),
			(Jl = u(d));
		var c = l(WI()),
			f = Th;
		function p(C) {
			return typeof C == "string" ? { type: C } : C;
		}
		var h =
				typeof process < "u" &&
				typeof ((fe = process.versions) == null ? void 0 : fe.node) < "u" &&
				typeof document > "u",
			g = { version: "0.4.0" };
		function y(C) {
			typeof window < "u"
				? (window.requestIdleCallback || window.requestAnimationFrame)(C)
				: setTimeout(C, 0);
		}
		var v = l(Ah());
		function b(C) {
			let E = C;
			do E = E._parent;
			while (E != null && E._parent);
			return E;
		}
		function w(C) {
			var K;
			return (
				(typeof C == "string" || (K = b(C)) == null ? void 0 : K.sessionId) ??
				void 0
			);
		}
		var S = {
			filter: () => !0,
			serialize: (C) => C,
			autoStart: !0,
			maxDeferredEvents: 200,
			sanitizeEvent: (C) => C,
			sanitizeContext: (C) => C,
		};
		function T(C, E) {
			function K(U) {
				var me;
				if (E != null && E.filter && !E.filter(U)) return;
				const oe =
					(E != null && E.sanitizeContext) || (E != null && E.sanitizeEvent)
						? U
						: { ...U };
				E != null &&
					E.sanitizeContext &&
					(oe.type === "@xstate.actor" || oe.type === "@xstate.snapshot") &&
					(oe.snapshot = {
						...oe.snapshot,
						context: E.sanitizeContext(oe.snapshot.context),
					}),
					E != null &&
						E.sanitizeEvent &&
						(oe.type === "@xstate.event" || oe.type === "@xstate.snapshot") &&
						(oe.event = E.sanitizeEvent(oe.event));
				const Q =
					((me = E == null ? void 0 : E.serialize) == null
						? void 0
						: me.call(E, oe)) ?? oe;
				C.send(Q);
			}
			return {
				adapter: C,
				actor: (U, oe, Q) => {
					var vv, bv;
					const me = typeof U == "string" ? U : U.sessionId,
						We =
							(vv = U == null ? void 0 : U.logic) == null ? void 0 : vv.config,
						Ot = We ? (0, v.default)(We) : void 0,
						Fs =
							((Q == null ? void 0 : Q.rootId) ?? typeof U == "string")
								? void 0
								: w(U),
						Kr =
							((Q == null ? void 0 : Q.parentId) ?? typeof U == "string") ||
							(bv = U._parent) == null
								? void 0
								: bv.sessionId,
						ii = We ? We.id : me;
					K({
						type: "@xstate.actor",
						name: ii,
						sessionId: me,
						createdAt: Date.now().toString(),
						_version: g.version,
						rootId: Fs,
						parentId: Kr,
						id: null,
						definition: Ot,
						snapshot: oe ?? { status: "active" },
					});
				},
				event: (U, oe, Q) => {
					const me = typeof U == "string" ? U : U.sessionId,
						We =
							Q != null && Q.source
								? typeof Q.source == "string"
									? Q.source
									: Q.source.sessionId
								: void 0;
					K({
						type: "@xstate.event",
						sourceId: We,
						sessionId: me,
						event: p(oe),
						id: Math.random().toString(),
						createdAt: Date.now().toString(),
						rootId: "anonymous",
						_version: g.version,
					});
				},
				snapshot: (U, oe, Q) => {
					const me = typeof U == "string" ? U : U.sessionId;
					K({
						type: "@xstate.snapshot",
						snapshot: { status: "active", ...oe },
						event: (Q == null ? void 0 : Q.event) ?? { type: "" },
						sessionId: me,
						id: null,
						createdAt: Date.now().toString(),
						rootId: "anonymous",
						_version: g.version,
					});
				},
				inspect: {
					next: (U) => {
						y(function () {
							const Q = O(U);
							Q && K(Q);
						});
					},
				},
				start() {
					var U;
					(U = C.start) == null || U.call(C);
				},
				stop() {
					var U;
					(U = C.stop) == null || U.call(C);
				},
			};
		}
		function O(C) {
			var E, K;
			switch (C.type) {
				case "@xstate.actor": {
					const ce = C.actorRef,
						U = ce == null ? void 0 : ce.logic,
						oe = U == null ? void 0 : U.config;
					let Q = ce.id;
					Q === ce.sessionId && oe && (Q = oe.id);
					const me =
						typeof oe == "object"
							? (0, v.default)(oe, (We, Ot) =>
									typeof Ot == "function" ? { type: Ot.name } : Ot,
								)
							: (0, v.default)({ id: Q });
					return {
						name: Q,
						type: "@xstate.actor",
						definition: me,
						_version: g.version,
						createdAt: Date.now().toString(),
						id: null,
						rootId: C.rootId,
						parentId: (E = C.actorRef._parent) == null ? void 0 : E.sessionId,
						sessionId: C.actorRef.sessionId,
						snapshot: C.actorRef.getSnapshot(),
					};
				}
				case "@xstate.event":
					return {
						type: "@xstate.event",
						event: C.event,
						sourceId: (K = C.sourceRef) == null ? void 0 : K.sessionId,
						sessionId: C.actorRef.sessionId,
						_version: g.version,
						createdAt: Date.now().toString(),
						id: null,
						rootId: C.rootId,
					};
				case "@xstate.snapshot":
					return {
						type: "@xstate.snapshot",
						event: C.event,
						snapshot: JSON.parse((0, v.default)(C.snapshot)),
						sessionId: C.actorRef.sessionId,
						_version: g.version,
						createdAt: Date.now().toString(),
						id: null,
						rootId: C.rootId,
					};
				default: {
					if (C.type.startsWith("@xstate.")) return;
					console.warn(`Unhandled inspection event type: ${C.type}`);
					return;
				}
			}
		}
		var N = class {
				constructor() {}
				start() {}
				stop() {}
				send(C) {}
			},
			D = "@statelyai.connected";
		function I(C) {
			return typeof C == "object" && C !== null && typeof C.type == "string";
		}
		function P(C) {
			return (
				typeof C == "object" &&
				C !== null &&
				typeof C.type == "string" &&
				typeof C._version == "string"
			);
		}
		function _(C) {
			const E =
				(C == null ? void 0 : C.window) ??
				(typeof window > "u" ? void 0 : window);
			if (!E)
				return (
					console.error("Window does not exist; inspector cannot be started."),
					new N()
				);
			const K = {
					...S,
					url: "https://stately.ai/inspect",
					filter: () => !0,
					serialize: (oe) => JSON.parse((0, c.default)(oe)),
					autoStart: !0,
					iframe: null,
					...C,
					window: E,
				},
				ce = new re(K),
				U = T(ce, K);
			return K.autoStart && U.start(), U;
		}
		var A = { replayCount: 0, window: typeof window < "u" ? window : void 0 };
		function F(C) {
			const K = { ...A, ...C }.window,
				ce = K.self === K.top ? K.opener : K.parent,
				U = new Set();
			K.addEventListener("message", (Q) => {
				P(Q.data) &&
					U.forEach((me) => {
						var We;
						return (We = me.next) == null ? void 0 : We.call(me, Q.data);
					});
			});
			const oe = {
				subscribe(Q) {
					const me = (0, f.toObserver)(Q);
					return (
						U.add(me),
						{
							unsubscribe() {
								U.delete(me);
							},
						}
					);
				},
			};
			return ce && ce.postMessage({ type: D }, "*"), oe;
		}
		var re = class {
				constructor(C) {
					W(this, "status", "disconnected");
					W(this, "deferredEvents", []);
					W(this, "targetWindow", null);
					this.options = C;
				}
				start() {
					var C;
					(this.targetWindow = this.options.iframe
						? null
						: this.options.window.open(
								String(this.options.url),
								"xstateinspector",
							)),
						this.options.iframe &&
							(this.options.iframe.addEventListener("load", () => {
								var E;
								this.targetWindow =
									((E = this.options.iframe) == null
										? void 0
										: E.contentWindow) ?? null;
							}),
							(C = this.options.iframe) == null ||
								C.setAttribute("src", String(this.options.url))),
						this.options.window.addEventListener("message", (E) => {
							I(E.data) &&
								E.data.type === "@statelyai.connected" &&
								((this.status = "connected"),
								this.deferredEvents.forEach((K) => {
									var U;
									const ce = this.options.serialize(K);
									(U = this.targetWindow) == null || U.postMessage(ce, "*");
								}));
						});
				}
				stop() {
					var C;
					(C = this.targetWindow) == null ||
						C.postMessage({ type: "@statelyai.disconnected" }, "*"),
						(this.status = "disconnected");
				}
				send(C) {
					var K;
					if (this.options.filter(C)) {
						if (this.options.send) this.options.send(C);
						else if (this.status === "connected") {
							const ce = this.options.serialize(C);
							(K = this.targetWindow) == null || K.postMessage(ce, "*");
						}
						this.deferredEvents.push(C),
							this.deferredEvents.length > this.options.maxDeferredEvents &&
								this.deferredEvents.shift();
					}
				}
			},
			ie = l(KI()),
			z = LT,
			H = WT();
		function J(C = {}) {
			const { host: E, apiBaseURL: K } = {
					host: "stately-sky-beta.mellson.partykit.dev",
					apiBaseURL: "https://stately.ai/registry/api/sky",
				},
				ce = K.replace("/api/sky", ""),
				{ apiKey: U, onerror: oe, ...Q } = C,
				me = (0, H.v4)(),
				We = `inspect-${me}`,
				Ot = new ie.default({ host: E, room: We, WebSocket: h ? mg : void 0 }),
				Fs = `${ce}/inspect/${me}`;
			return (
				(Ot.onerror = oe ?? console.error),
				(Ot.onopen = () => {
					console.log("Connected to Sky, link to your live inspect session:"),
						console.log(Fs);
				}),
				h
					? T({
							...Q,
							send(Kr) {
								const ii = U ? { apiKey: U, ...Kr } : Kr;
								Ot.send((0, z.stringify)(ii));
							},
						})
					: _({
							...Q,
							url: Fs,
							send(Kr) {
								const ii = U ? { apiKey: U, ...Kr } : Kr;
								Ot.send((0, z.stringify)(ii));
							},
						})
			);
		}
		var ne = l(mg),
			q = l(Ah()),
			Y = Th,
			le = class {
				constructor(C) {
					W(this, "ws");
					W(this, "status", "closed");
					W(this, "deferredEvents", []);
					W(this, "options");
					this.options = {
						...S,
						filter: () => !0,
						serialize: (E) => JSON.parse((0, q.default)(E)),
						autoStart: !0,
						url: "ws://localhost:8080",
						...C,
					};
				}
				start() {
					const C = () => {
						(this.ws = new ne.default(this.options.url)),
							(this.ws.onopen = () => {
								console.log("websocket open"),
									(this.status = "open"),
									this.deferredEvents.forEach((E) => {
										const K = S.serialize(E),
											ce = this.options.serialize(K);
										this.ws.send((0, q.default)(ce));
									});
							}),
							(this.ws.onclose = () => {
								console.log("websocket closed");
							}),
							(this.ws.onerror = async (E) => {
								console.error("websocket error", E),
									await new Promise((K) => setTimeout(K, 5e3)),
									console.warn("restarting"),
									C();
							}),
							(this.ws.onmessage = (E) => {
								typeof E.data == "string" && console.log("message", E.data);
							});
					};
					C();
				}
				stop() {
					this.ws.close(), (this.status = "closed");
				}
				send(C) {
					this.status === "open"
						? this.ws.send((0, q.default)(C))
						: (this.deferredEvents.push(C),
							this.deferredEvents.length > this.options.maxDeferredEvents &&
								this.deferredEvents.shift());
				}
			};
		function ve(C) {
			const E = new le(C);
			return T(E, C);
		}
		function se(C) {
			const E = { server: "ws://localhost:8080", ...C },
				K = new Set(),
				ce = new ne.default(E.server);
			return (
				(ce.onopen = () => {
					console.log("websocket open"),
						(ce.onmessage = (oe) => {
							if (typeof oe.data != "string") return;
							console.log("message", oe.data);
							const Q = JSON.parse(oe.data);
							K.forEach((me) => {
								var We;
								(We = me.next) == null || We.call(me, Q);
							});
						});
				}),
				{
					subscribe(oe) {
						const Q = (0, Y.toObserver)(oe);
						return (
							K.add(Q),
							{
								unsubscribe() {
									K.delete(Q);
								},
							}
						);
					},
				}
			);
		}
		return Jl;
	}
	KT();
	function JT(e, t, r = "REDACTED") {
		return t.reduce((n, o) => {
			var s;
			const i = new URL(n);
			if (o.type === "Path") {
				const a = i.pathname.split("/"),
					l = o.path.split("/");
				if (
					l.every((d, c) =>
						d === ":redacted" || d === ":keep" ? !0 : a[c] === d,
					)
				) {
					const d = a.map((c, f) =>
						l[f] === ":redacted" ? r : (l[f] === ":keep", c),
					);
					i.pathname = d.join("/");
				}
			} else
				o.type === "SearchParam" &&
					o.param &&
					(!((s = o.options) != null && s.path) ||
						i.pathname.startsWith(o.options.path)) &&
					i.searchParams.has(o.param) &&
					i.searchParams.set(o.param, r);
			return i.toString();
		}, e);
	}
	const GT = !1;
	let Gl;
	const Zo = $({
			state: X([
				"Completed",
				"Capture",
				"Selected",
				"Rejected",
				"NotSelected",
			]).or(Pe(m(), so())),
			sessionId: m().optional(),
			lastSync: te().optional(),
		}),
		Nr = $({ _id: m(), _l: m().optional() }).catchall(Zo.optional());
	class YT {
		constructor() {
			(this.config = {}),
				(this.urlRedactions = []),
				(this.explicitLanguages = new Map()),
				(this.events = Mv()),
				(this._debugEnabled = GT),
				(this.injectUsed = !1);
			const t = window.location.hostname,
				r = t.match(/^\d+\.\d+\.\d+\.\d+$/),
				n = window.SKYRA_CONFIG || {},
				o = (n == null ? void 0 : n.cookieDomain) ?? VI(t);
			Ft("Cookie settings:", { isIp: r, tld: o }),
				(this.cookieStorage = new qI({
					domain: r ? void 0 : o,
					expires: 31536e3,
					path: "/",
				})),
				"skyraStart" in window &&
					typeof window.skyraStart == "function" &&
					setTimeout(() => {
						window.skyraStart();
					}, 0),
				(this.unstable_headless = new ZI(this));
		}
		on(t, r) {
			this.events.on(t, r);
		}
		off(t, r) {
			this.events.off(t, r);
		}
		setConfig(t) {
			this.config = t;
		}
		getRendererVariant(t, r = "classic") {
			return this.normalizedConfig
				? FI(this.normalizedConfig, t, r)
				: "classic";
		}
		setTraits(t, r) {
			const n = typeof t == "string" ? r : t;
			if (!n) {
				console.warn("[Skyra] setTraits() called without traits");
				return;
			}
			const o = this.getAdapter("setTraits");
			o && o.send({ type: "setTraits", traits: n, mode: "merge" });
		}
		hideSurveys(t) {
			const r = this.getAdapter("hideSurveys");
			r && r.send({ type: "hideSurveys", ...t });
		}
		showSurveys(t) {
			const r = this.getAdapter("showSurveys");
			r && r.send({ type: "showSurveys", ...t });
		}
		async syncTraits(t, r) {}
		setLanguage(t) {
			const r = this.getAdapter("setLanguage");
			r && r.send({ type: "setLanguage", language: t });
		}
		getLanguage() {
			const t = this.getAdapter("getLanguage");
			if (t) return t.getSnapshot().context.state._l;
		}
		getAvailableLanguages() {
			const t = this.getAdapter("getAvailableLanguages");
			if (!t) return [];
			const r = t.getSnapshot().context.surveys;
			if (r.length === 0) return [];
			const n = r[0],
				o = [];
			if ((n.language && o.push(n.language), n.languages))
				for (const i of n.languages) o.push({ code: i.code, name: i.name });
			return o;
		}
		debug(...t) {
			this._debugEnabled && console.log(...t);
		}
		surveyById(t) {
			const r = this.getAdapter("surveyById");
			return r == null ? void 0 : r.surveyById(t);
		}
		surveyIdBySlug(t) {
			const r = this.getAdapter("surveyIdBySlug");
			return r == null ? void 0 : r.surveyIdBySlug(t);
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
			const r = window.SKYRA_CONFIG || {},
				n = Ll(r, t);
			this.normalizedConfig = n;
			const o = window.location.href;
			return (
				document.querySelector(n.selector) ||
					console.error(
						`[Skyra] Could not find DOM element with selector "${n.selector}"`,
					),
				(this._adapter = $h(
					{
						org: n.org,
						url: o,
						cookieStorage: this.cookieStorage,
						apiHost: this.apiHost,
						traits: n.traits,
						testMode: n.testMode,
						surveyOverrides: n.surveyOverrides,
						selector: n.selector,
						consent: n.consent,
					},
					Gl,
				)),
				this._adapter.on("*", (s) => {
					this.events.emit(s.type, s);
				}),
				(this.stopObservingNavigation = zh(() => this.reload())),
				this._adapter.start(),
				this._adapter
			);
		}
		stop() {
			var r;
			(r = this.stopObservingNavigation) == null || r.call(this),
				(this.stopObservingNavigation = void 0),
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
			const r = this.getAdapter("setConsent");
			r && r.send({ type: "setConsent", value: t });
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
		preview({ slug: t, target: r }) {
			var o;
			console.log("preview", t, this._adapter, this.config);
			const n = Ch(t);
			if (
				((this.normalizedConfig = Ll(window.SKYRA_CONFIG || {}, { org: n })),
				this.previewMachine)
			)
				this.previewMachine.send({ type: "setOrg", org: n });
			else {
				const i = window.location.href;
				(this.previewMachine = St(BI, {
					inspect: Gl,
					input: {
						url: i,
						org: n,
						apiHost: this.apiHost,
						cookieStorage: this.cookieStorage,
						previewTarget: r,
					},
				})),
					this.previewMachine.start();
			}
			(o = this.previewMachine) == null ||
				o.send({ type: "previewSurvey", slug: t, target: r });
		}
		inject({
			slug: t,
			traits: r,
			selector: n = "body",
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
			const s = Ch(t),
				a = window.location.href,
				l = window.SKYRA_CONFIG || {};
			this.normalizedConfig = Ll(l, { org: s });
			const u = $h(
				{
					org: s,
					url: a,
					cookieStorage: this.cookieStorage,
					apiHost: this.apiHost,
					traits: r,
					testMode: !1,
					selector: n,
					consent: i,
				},
				Gl,
			);
			(this._adapter = u),
				(this.stopObservingNavigation = zh(() => this.reload())),
				u.start(),
				u.on("ready", () => {
					u.send({ type: "startSurvey", slug: t });
				});
		}
		redactPathname(t) {
			this.urlRedactions.push({ type: "Path", path: t });
		}
		redactSearchParam(t, r) {
			this.urlRedactions.push({ type: "SearchParam", param: t, options: r });
		}
		setExplicitLanguage(t, r) {
			this.explicitLanguages.set(t, r);
		}
		getExplicitLanguage(t) {
			return this.explicitLanguages.get(t);
		}
		getUrl() {
			return JT(window.location.href, this.urlRedactions);
		}
		debugInfo(t) {
			var s;
			const r = (t == null ? void 0 : t.format) ?? "console",
				n = t == null ? void 0 : t.survey,
				o = this.getAdapter("debugInfo");
			if (!o) return null;
			const i = o.getDebugInfo(this.cookieStorage, n);
			if (r === "json") return i;
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
				const f = {
					id: a.id,
					name: a.name,
					isLive: a.isLive,
					publishingState: a.publishingState,
					numCards: a.numCards,
					eligible: a.eligible,
					capturePercent: `${a.capturePercent}%`,
					priorityScore: a.priorityScore,
				};
				a.renderType === "Inline" && (f.domElement = a.domElement),
					console.table(f),
					a.state && console.log("State:", a.state),
					a.reasons &&
						(console.log("❌ Not eligible because:"),
						a.reasons.forEach((p) => console.log(`  • ${p}`))),
					a.issues &&
						(console.log("! Issues:"),
						a.issues.forEach((p) => console.log(`  • ${p}`))),
					console.groupEnd();
			}
			return console.groupEnd(), console.groupEnd(), i;
		}
		async fetchSurvey(t) {
			const n = await (await fetch(`${this.apiHost}/survey/${t}`)).json();
			return as.parse(n.survey);
		}
		async unstable_sessionInit(t) {
			var p;
			const r = t.survey,
				[n, o] = r.split("/");
			if (!n || !o)
				throw new Error(
					'Invalid survey slug format. Expected "org/survey-name"',
				);
			const i = `skyra.${r.replace(/\//g, ".")}`,
				s = this.cookieStorage.getItem(i);
			if (s)
				try {
					const h = Zo.parse(JSON.parse(s));
					if (h.sessionId) {
						const g = await this.fetchSurvey(r);
						return { sessionId: h.sessionId, surveyId: g.id };
					}
				} catch {}
			const a = this.cookieStorage.getItem("skyra.state");
			let l;
			if (a)
				try {
					l = Nr.parse(JSON.parse(a))._id || Le();
				} catch {
					l = Le();
				}
			else
				(l = Le()),
					this.cookieStorage.setItem("skyra.state", JSON.stringify({ _id: l }));
			const u = await this.fetchSurvey(r),
				d = Le();
			let c = "unknown";
			"connection" in navigator &&
				(c =
					(p = navigator == null ? void 0 : navigator.connection) == null
						? void 0
						: p.effectiveType),
				await xn(
					{
						submissionId: Le(),
						event: "SessionInit",
						survey: u.id,
						visitor: l,
						session: d,
						ua: navigator.userAgent,
						screenSize: [window.screen.width, window.screen.height],
						pixelRatio: window.devicePixelRatio,
						connection: c,
						languageCode: this.getLanguage(),
					},
					{ apiHost: this.apiHost },
				);
			const f = Zo.parse({
				sessionId: d,
				state: "Capture",
				lastSync: Date.now(),
			});
			return (
				this.cookieStorage.setItem(i, JSON.stringify(f)),
				{ sessionId: d, surveyId: u.id }
			);
		}
		async unstable_postCardValue(t) {
			const { survey: r, card: n, value: o, complete: i } = t,
				[s, a] = r.split("/");
			if (!s || !a)
				throw new Error(
					'Invalid survey slug format. Expected "org/survey-name"',
				);
			const l = `skyra.${r.replace(/\//g, ".")}`,
				u = this.cookieStorage.getItem(l);
			if (!u)
				throw new Error("No session found. Call unstable_sessionInit first.");
			let d;
			try {
				if (((d = Zo.parse(JSON.parse(u)).sessionId ?? ""), !d))
					throw new Error("Invalid session state");
			} catch {
				throw new Error(
					"Invalid session state. Call unstable_sessionInit first.",
				);
			}
			const c = this.cookieStorage.getItem("skyra.state");
			if (!c) throw new Error("No visitor ID found");
			const { _id: f } = Nr.parse(JSON.parse(c)),
				p = await this.fetchSurvey(r),
				h = p.cards.find((v) => v.id === n);
			if (!h) throw new Error(`Card ${n} not found in survey ${r}`);
			const { type: g, order: y } = h;
			if (!g) throw new Error(`Card ${n} is missing type information`);
			try {
				const v = {
						submissionId: Le(),
						event: "CardValue",
						survey: p.id,
						visitor: f,
						session: d,
						card: n,
						type: g,
						url: this.getUrl(),
						value: o,
						languageCode: this.getLanguage(),
						cardOrder: y,
					},
					b = Bi.parse(v);
				await xn(b, { apiHost: this.apiHost });
				const w = Zo.parse({
					sessionId: d,
					state: "Capture",
					lastSync: Date.now(),
				});
				this.cookieStorage.setItem(l, JSON.stringify(w)),
					i && this.cookieStorage.removeItem(l);
			} catch (v) {
				if (v instanceof c_) {
					const b = v.issues.map((w) => w.message).join(", ");
					throw new Error(`Invalid card value: ${b}`);
				}
				throw v;
			}
		}
	}
	var XT = Symbol.for("preact-signals");
	function _s() {
		if (dr > 1) dr--;
		else {
			for (var e, t = !1; qo !== void 0; ) {
				var r = qo;
				for (qo = void 0, Yl++; r !== void 0; ) {
					var n = r.o;
					if (((r.o = void 0), (r.f &= -3), !(8 & r.f) && _g(r)))
						try {
							r.c();
						} catch (o) {
							t || ((e = o), (t = !0));
						}
					r = n;
				}
			}
			if (((Yl = 0), dr--, t)) throw e;
		}
	}
	function vg(e) {
		if (dr > 0) return e();
		dr++;
		try {
			return e();
		} finally {
			_s();
		}
	}
	var ge = void 0;
	function bg(e) {
		var t = ge;
		ge = void 0;
		try {
			return e();
		} finally {
			ge = t;
		}
	}
	var qo = void 0,
		dr = 0,
		Yl = 0,
		Ss = 0;
	function wg(e) {
		if (ge !== void 0) {
			var t = e.n;
			if (t === void 0 || t.t !== ge)
				return (
					(t = {
						i: 0,
						S: e,
						p: ge.s,
						n: void 0,
						t: ge,
						e: void 0,
						x: void 0,
						r: t,
					}),
					ge.s !== void 0 && (ge.s.n = t),
					(ge.s = t),
					(e.n = t),
					32 & ge.f && e.S(t),
					t
				);
			if (t.i === -1)
				return (
					(t.i = 0),
					t.n !== void 0 &&
						((t.n.p = t.p),
						t.p !== void 0 && (t.p.n = t.n),
						(t.p = ge.s),
						(t.n = void 0),
						(ge.s.n = t),
						(ge.s = t)),
					t
				);
		}
	}
	function De(e, t) {
		(this.v = e),
			(this.i = 0),
			(this.n = void 0),
			(this.t = void 0),
			(this.W = t == null ? void 0 : t.watched),
			(this.Z = t == null ? void 0 : t.unwatched),
			(this.name = t == null ? void 0 : t.name);
	}
	(De.prototype.brand = XT),
		(De.prototype.h = function () {
			return !0;
		}),
		(De.prototype.S = function (e) {
			var t = this,
				r = this.t;
			r !== e &&
				e.e === void 0 &&
				((e.x = r),
				(this.t = e),
				r !== void 0
					? (r.e = e)
					: bg(function () {
							var n;
							(n = t.W) == null || n.call(t);
						}));
		}),
		(De.prototype.U = function (e) {
			var t = this;
			if (this.t !== void 0) {
				var r = e.e,
					n = e.x;
				r !== void 0 && ((r.x = n), (e.e = void 0)),
					n !== void 0 && ((n.e = r), (e.x = void 0)),
					e === this.t &&
						((this.t = n),
						n === void 0 &&
							bg(function () {
								var o;
								(o = t.Z) == null || o.call(t);
							}));
			}
		}),
		(De.prototype.subscribe = function (e) {
			var t = this;
			return Mn(
				function () {
					var r = t.value,
						n = ge;
					ge = void 0;
					try {
						e(r);
					} finally {
						ge = n;
					}
				},
				{ name: "sub" },
			);
		}),
		(De.prototype.valueOf = function () {
			return this.value;
		}),
		(De.prototype.toString = function () {
			return this.value + "";
		}),
		(De.prototype.toJSON = function () {
			return this.value;
		}),
		(De.prototype.peek = function () {
			var e = ge;
			ge = void 0;
			try {
				return this.value;
			} finally {
				ge = e;
			}
		}),
		Object.defineProperty(De.prototype, "value", {
			get: function () {
				var e = wg(this);
				return e !== void 0 && (e.i = this.i), this.v;
			},
			set: function (e) {
				if (e !== this.v) {
					if (Yl > 100) throw new Error("Cycle detected");
					(this.v = e), this.i++, Ss++, dr++;
					try {
						for (var t = this.t; t !== void 0; t = t.x) t.t.N();
					} finally {
						_s();
					}
				}
			},
		});
	function kg(e, t) {
		return new De(e, t);
	}
	function _g(e) {
		for (var t = e.s; t !== void 0; t = t.n)
			if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
		return !1;
	}
	function Sg(e) {
		for (var t = e.s; t !== void 0; t = t.n) {
			var r = t.S.n;
			if (
				(r !== void 0 && (t.r = r), (t.S.n = t), (t.i = -1), t.n === void 0)
			) {
				e.s = t;
				break;
			}
		}
	}
	function xg(e) {
		for (var t = e.s, r = void 0; t !== void 0; ) {
			var n = t.p;
			t.i === -1
				? (t.S.U(t), n !== void 0 && (n.n = t.n), t.n !== void 0 && (t.n.p = n))
				: (r = t),
				(t.S.n = t.r),
				t.r !== void 0 && (t.r = void 0),
				(t = n);
		}
		e.s = r;
	}
	function Dr(e, t) {
		De.call(this, void 0),
			(this.x = e),
			(this.s = void 0),
			(this.g = Ss - 1),
			(this.f = 4),
			(this.W = t == null ? void 0 : t.watched),
			(this.Z = t == null ? void 0 : t.unwatched),
			(this.name = t == null ? void 0 : t.name);
	}
	(Dr.prototype = new De()),
		(Dr.prototype.h = function () {
			if (((this.f &= -3), 1 & this.f)) return !1;
			if ((36 & this.f) == 32 || ((this.f &= -5), this.g === Ss)) return !0;
			if (((this.g = Ss), (this.f |= 1), this.i > 0 && !_g(this)))
				return (this.f &= -2), !0;
			var e = ge;
			try {
				Sg(this), (ge = this);
				var t = this.x();
				(16 & this.f || this.v !== t || this.i === 0) &&
					((this.v = t), (this.f &= -17), this.i++);
			} catch (r) {
				(this.v = r), (this.f |= 16), this.i++;
			}
			return (ge = e), xg(this), (this.f &= -2), !0;
		}),
		(Dr.prototype.S = function (e) {
			if (this.t === void 0) {
				this.f |= 36;
				for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
			}
			De.prototype.S.call(this, e);
		}),
		(Dr.prototype.U = function (e) {
			if (
				this.t !== void 0 &&
				(De.prototype.U.call(this, e), this.t === void 0)
			) {
				this.f &= -33;
				for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
			}
		}),
		(Dr.prototype.N = function () {
			if (!(2 & this.f)) {
				this.f |= 6;
				for (var e = this.t; e !== void 0; e = e.x) e.t.N();
			}
		}),
		Object.defineProperty(Dr.prototype, "value", {
			get: function () {
				if (1 & this.f) throw new Error("Cycle detected");
				var e = wg(this);
				if ((this.h(), e !== void 0 && (e.i = this.i), 16 & this.f))
					throw this.v;
				return this.v;
			},
		});
	function $g(e, t) {
		return new Dr(e, t);
	}
	function Cg(e) {
		var t = e.u;
		if (((e.u = void 0), typeof t == "function")) {
			dr++;
			var r = ge;
			ge = void 0;
			try {
				t();
			} catch (n) {
				throw ((e.f &= -2), (e.f |= 8), Xl(e), n);
			} finally {
				(ge = r), _s();
			}
		}
	}
	function Xl(e) {
		for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
		(e.x = void 0), (e.s = void 0), Cg(e);
	}
	function QT(e) {
		if (ge !== this) throw new Error("Out-of-order effect");
		xg(this), (ge = e), (this.f &= -2), 8 & this.f && Xl(this), _s();
	}
	function Pn(e, t) {
		(this.x = e),
			(this.u = void 0),
			(this.s = void 0),
			(this.o = void 0),
			(this.f = 32),
			(this.name = t == null ? void 0 : t.name);
	}
	(Pn.prototype.c = function () {
		var e = this.S();
		try {
			if (8 & this.f || this.x === void 0) return;
			var t = this.x();
			typeof t == "function" && (this.u = t);
		} finally {
			e();
		}
	}),
		(Pn.prototype.S = function () {
			if (1 & this.f) throw new Error("Cycle detected");
			(this.f |= 1), (this.f &= -9), Cg(this), Sg(this), dr++;
			var e = ge;
			return (ge = this), QT.bind(this, e);
		}),
		(Pn.prototype.N = function () {
			2 & this.f || ((this.f |= 2), (this.o = qo), (qo = this));
		}),
		(Pn.prototype.d = function () {
			(this.f |= 8), 1 & this.f || Xl(this);
		}),
		(Pn.prototype.dispose = function () {
			this.d();
		});
	function Mn(e, t) {
		var r = new Pn(e, t);
		try {
			r.c();
		} catch (o) {
			throw (r.d(), o);
		}
		var n = r.d.bind(r);
		return (n[Symbol.dispose] = n), n;
	}
	var Ql,
		xs,
		e2 = typeof window < "u" && !!window.__PREACT_SIGNALS_DEVTOOLS__,
		zg = [],
		Ig = [];
	Mn(function () {
		Ql = this.N;
	})();
	function Ln(e, t) {
		de[e] = t.bind(null, de[e] || function () {});
	}
	function $s(e) {
		if (xs) {
			var t = xs;
			(xs = void 0), t();
		}
		xs = e && e.S();
	}
	function Tg(e) {
		var t = this,
			r = e.data,
			n = zt(r);
		n.value = r;
		var o = Xr(function () {
				for (var a = t, l = t.__v; (l = l.__); )
					if (l.__c) {
						l.__c.__$f |= 4;
						break;
					}
				var u = $g(function () {
						var p = n.value.value;
						return p === 0 ? 0 : p === !0 ? "" : p || "";
					}),
					d = $g(function () {
						return !Array.isArray(u.value) && !Eu(u.value);
					}),
					c = Mn(function () {
						if (((this.N = Eg), d.value)) {
							var p = u.value;
							a.__v &&
								a.__v.__e &&
								a.__v.__e.nodeType === 3 &&
								(a.__v.__e.data = p);
						}
					}),
					f = t.__$u.d;
				return (
					(t.__$u.d = function () {
						c(), f.call(this);
					}),
					[d, u]
				);
			}, []),
			i = o[0],
			s = o[1];
		return i.value ? s.peek() : s.value;
	}
	(Tg.displayName = "ReactiveTextNode"),
		Object.defineProperties(De.prototype, {
			constructor: { configurable: !0, value: void 0 },
			type: { configurable: !0, value: Tg },
			props: {
				configurable: !0,
				get: function () {
					return { data: this };
				},
			},
			__b: { configurable: !0, value: 1 },
		}),
		Ln("__b", function (e, t) {
			if (typeof t.type == "string") {
				var r,
					n = t.props;
				for (var o in n)
					if (o !== "children") {
						var i = n[o];
						i instanceof De &&
							(r || (t.__np = r = {}), (r[o] = i), (n[o] = i.peek()));
					}
			}
			e(t);
		}),
		Ln("__r", function (e, t) {
			if ((e(t), t.type !== bt)) {
				$s();
				var r,
					n = t.__c;
				n &&
					((n.__$f &= -2),
					(r = n.__$u) === void 0 &&
						(n.__$u = r =
							(function (o, i) {
								var s;
								return (
									Mn(
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
									e2 && ((o = r.y) == null || o.call(r)),
										(n.__$f |= 1),
										n.setState({});
								},
								typeof t.type == "function"
									? t.type.displayName || t.type.name
									: "",
							))),
					$s(r);
			}
		}),
		Ln("__e", function (e, t, r, n) {
			$s(), e(t, r, n);
		}),
		Ln("diffed", function (e, t) {
			$s();
			var r;
			if (typeof t.type == "string" && (r = t.__e)) {
				var n = t.__np,
					o = t.props;
				if (n) {
					var i = r.U;
					if (i)
						for (var s in i) {
							var a = i[s];
							a !== void 0 && !(s in n) && (a.d(), (i[s] = void 0));
						}
					else (i = {}), (r.U = i);
					for (var l in n) {
						var u = i[l],
							d = n[l];
						u === void 0 ? ((u = t2(r, l, d, o)), (i[l] = u)) : u.o(d, o);
					}
				}
			}
			e(t);
		});
	function t2(e, t, r, n) {
		var o = t in e && e.ownerSVGElement === void 0,
			i = kg(r);
		return {
			o: function (s, a) {
				(i.value = s), (n = a);
			},
			d: Mn(function () {
				this.N = Eg;
				var s = i.value.value;
				n[t] !== s &&
					((n[t] = s),
					o
						? (e[t] = s)
						: s != null && (s !== !1 || t[4] === "-")
							? e.setAttribute(t, s)
							: e.removeAttribute(t));
			}),
		};
	}
	Ln("unmount", function (e, t) {
		if (typeof t.type == "string") {
			var r = t.__e;
			if (r) {
				var n = r.U;
				if (n) {
					r.U = void 0;
					for (var o in n) {
						var i = n[o];
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
		Ln("__h", function (e, t, r, n) {
			(n < 3 || n === 9) && (t.__$f |= 2), e(t, r, n);
		}),
		(Wn.prototype.shouldComponentUpdate = function (e, t) {
			if (this.__R) return !0;
			var r = this.__$u,
				n = r && r.s !== void 0;
			for (var o in t) return !0;
			if (this.__f || (typeof this.u == "boolean" && this.u === !0)) {
				var i = 2 & this.__$f;
				if (!(n || i || 4 & this.__$f) || 1 & this.__$f) return !0;
			} else if (!(n || 4 & this.__$f) || 3 & this.__$f) return !0;
			for (var s in e)
				if (s !== "__source" && e[s] !== this.props[s]) return !0;
			for (var a in this.props) if (!(a in e)) return !0;
			return !1;
		});
	function zt(e, t) {
		return Xr(function () {
			return kg(e, t);
		}, []);
	}
	var r2 =
			typeof requestAnimationFrame > "u"
				? setTimeout
				: function (e) {
						var t = function () {
								clearTimeout(r), cancelAnimationFrame(n), e();
							},
							r = setTimeout(t, 35),
							n = requestAnimationFrame(t);
					},
		n2 = function (e) {
			queueMicrotask(function () {
				queueMicrotask(e);
			});
		};
	function o2() {
		vg(function () {
			for (var e; (e = zg.shift()); ) Ql.call(e);
		});
	}
	function i2() {
		zg.push(this) === 1 && (de.requestAnimationFrame || r2)(o2);
	}
	function s2() {
		vg(function () {
			for (var e; (e = Ig.shift()); ) Ql.call(e);
		});
	}
	function Eg() {
		Ig.push(this) === 1 && (de.requestAnimationFrame || n2)(s2);
	}
	function Ag(e, t) {
		var r = Se(e);
		(r.current = e),
			Re(function () {
				return Mn(function () {
					return (this.N = i2), r.current();
				}, t);
			}, []);
	}
	function a2(e, t) {
		return e === t;
	}
	function Qe(e, t, r = a2) {
		const n = Se(t),
			o = Se(r);
		(n.current = t), (o.current = r);
		const [i, s] = Fe(() => (e ? t(e.getSnapshot()) : void 0));
		return (
			Re(() => {
				if (!e) return;
				const a = () => {
					const u = n.current(e.getSnapshot());
					s((d) => (o.current(d, u) ? d : u));
				};
				a();
				const { unsubscribe: l } = e.subscribe(a);
				return l;
			}, [e]),
			i
		);
	}
	var l2 = 0;
	function k(e, t, r, n, o, i) {
		t || (t = {});
		var s,
			a,
			l = t;
		if ("ref" in l)
			for (a in ((l = {}), t)) a == "ref" ? (s = t[a]) : (l[a] = t[a]);
		var u = {
			type: e,
			props: l,
			key: r,
			ref: s,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__c: null,
			constructor: void 0,
			__v: --l2,
			__i: -1,
			__u: 0,
			__source: o,
			__self: i,
		};
		if (typeof e == "function" && (s = e.defaultProps))
			for (a in s) l[a] === void 0 && (l[a] = s[a]);
		return de.vnode && de.vnode(u), u;
	}
	const Wo = $v(void 0),
		u2 = ({ survey: e, state: t, children: r, api: n, captureMachine: o }) => {
			const i = zt(!0);
			Ag(() => {
				if (i.value === !1) {
					const l = setTimeout(() => {
						i.value = !0;
					}, 500);
					return () => clearTimeout(l);
				}
			});
			const s = Qe(o, (l) => l.context.language),
				a = Xr(() => sz(e, s), [e, s]);
			return k(Wo.Provider, {
				value: {
					api: n,
					survey: a,
					state: t,
					captureMachine: o,
					cardValidState: i,
				},
				children: r,
			});
		};
	function Cs() {
		const e = ci(Wo);
		if (!e) throw new Error("useSurvey must be used within a SkyraProvider");
		return e.survey;
	}
	function c2() {
		const e = ci(Wo);
		if (!e)
			throw new Error("useSessionState must be used within a SkyraProvider");
		return e.state;
	}
	function eu() {
		const e = ci(Wo);
		if (!e)
			throw new Error("useCaptureMachine must be used within a SkyraProvider");
		return e.captureMachine;
	}
	function pr() {
		const e = ci(Wo);
		if (!e)
			throw new Error("useCardValidState must be used within a SkyraProvider");
		return e.cardValidState;
	}
	function Nn() {
		const e = eu();
		return Qe(e, (r) => r.context.language);
	}
	const It =
			':host(.skyra-ui-host){box-sizing:border-box;color-scheme:inherit;--skyra-app-font-unit: calc(var(--skyra-font-size, 16px) * var(--skyra-app-text-scale, 1) / 16);--skyra-app-base-font-size: var(--skyra-font-size, 16px);--skyra-ui-surface: var(--skyra-bg-color, #f2fafc);--skyra-ui-default-text: var(--skyra-text-color, light-dark(#151515, #e5eaf2));--skyra-ui-text: var(--skyra-authored-text-color, var(--skyra-ui-default-text));--skyra-ui-muted: var(--skyra-muted-text-color, var(--skyra-interface-color, #4a4a4a));--skyra-ui-interface: var(--skyra-interface-color, var(--skyra-ui-muted));--skyra-ui-border: var(--skyra-border-color, var(--skyra-interface-color, #151515));--skyra-ui-action: var(--skyra-action-color, #151515);--skyra-ui-action-text: var(--skyra-action-text-color, #ffffff);--skyra-ui-secondary: var(--skyra-secondary-color, #ffffff);--skyra-ui-focus: var(--skyra-focus-color, var(--skyra-action-color, #151515));--skyra-ui-error: var(--skyra-error-color, #b42318);--skyra-ui-warning: var(--skyra-warning-color, #b54708);--skyra-ui-default-card-border: var(--skyra-app-border, light-dark(rgba(255, 255, 255, .4), rgba(0, 96, 180, .45)));--skyra-ui-default-card-background: var(--skyra-app-surface, linear-gradient(to bottom right, light-dark(#ffffff, #101827) 0%, light-dark(#f2fafc, #0d1421) 100%));--skyra-ui-default-content-background: var(--skyra-app-surface, linear-gradient(119deg, light-dark(rgba(255, 255, 255, 0), rgba(10, 18, 34, 0)) 0%, light-dark(rgba(0, 120, 198, .03), rgba(10, 18, 34, 0)) 100%), var(--skyra-ui-secondary));--skyra-ui-default-content-divider: light-dark(rgba(202, 217, 246, .4), rgba(99, 123, 157, .16));--skyra-ui-default-button-border: light-dark(rgba(13, 71, 161, .1), transparent);--skyra-ui-default-button-background: var(--skyra-app-secondary, linear-gradient(to bottom right, light-dark(#ffffff, rgba(0, 96, 180, .4)), light-dark(#f6f9ff, rgba(0, 96, 180, .4))));--skyra-ui-button-shadow: inset 0 1px 0 light-dark(rgba(255, 255, 255, .7), transparent), 0 2px 8px light-dark(rgba(15, 23, 42, .06), transparent), 0 8px 24px -6px light-dark(rgba(76, 132, 255, .08), transparent);--skyra-ui-primary-button-shadow: inset 0 2px 0 light-dark(rgba(255, 255, 255, .08), rgba(255, 255, 255, .4)), 0 6px 16px light-dark(rgba(0, 95, 243, .15), rgba(0, 0, 0, .2)), 0 4px 10px light-dark(rgba(3, 24, 74, .1), rgba(0, 0, 0, .15)), 0 0 24px light-dark(rgba(0, 95, 243, .15), rgba(87, 120, 168, .04));--skyra-ui-default-soft-border: light-dark(color-mix(in srgb, var(--skyra-ui-interface) 7%, transparent), rgba(0, 96, 180, .45));--skyra-ui-default-soft-interface: light-dark(color-mix(in srgb, var(--skyra-ui-interface) 5%, transparent), transparent);--skyra-ui-default-selected-interface: light-dark(color-mix(in srgb, var(--skyra-ui-interface) 20%, transparent), #080f1b);--skyra-ui-language-highlight: light-dark(var(--skyra-ui-selected-interface), rgba(26, 83, 158, .7));--skyra-ui-default-option-background: light-dark(color-mix(in srgb, var(--skyra-ui-interface) 6%, transparent), transparent);--skyra-ui-default-control-background: light-dark(var(--skyra-ui-secondary), #0c1523);--skyra-ui-default-control-border: light-dark(#9bbbdb, var(--skyra-ui-card-border));--skyra-ui-default-control-focus: light-dark(#4082c5, #69abff);--skyra-ui-control-placeholder: light-dark(color-mix(in srgb, var(--skyra-ui-text) 55%, transparent), #6b86a6);--skyra-ui-consent-background: #ffffff;--skyra-ui-kbd-border: light-dark(var(--skyra-ui-border), #315f9e);--skyra-ui-kbd-background: light-dark(#f0f7fe, #121d2d);--skyra-ui-kbd-text: var(--skyra-ui-text);--skyra-ui-kbd-shadow: 2px 2px 0 color-mix(in srgb, var(--skyra-ui-border) 24%, transparent);--skyra-ui-checkbox-border: light-dark(var(--skyra-ui-action), #548bce);--skyra-ui-checkbox-background: light-dark(transparent, #0c1523);--skyra-ui-checkbox-selected-background: var(--skyra-ui-action);--skyra-ui-checkbox-selected-text: var(--skyra-ui-action-text);--skyra-ui-default-option-scroll-fade: var(--skyra-ui-secondary);--skyra-ui-default-shadow: var(--skyra-shadow-md, 0 3px 8px rgba(15, 18, 114, .12), 0 0 32px rgba(36, 204, 255, .1), 0 0 80px rgba(154, 154, 154, .18));--skyra-ui-card-border: var(--skyra-authored-border-color, var(--skyra-ui-default-card-border));--skyra-ui-card-background: var(--skyra-authored-bg-color, var(--skyra-ui-default-card-background));--skyra-ui-content-background: var(--skyra-authored-secondary-color, var(--skyra-ui-default-content-background));--skyra-ui-content-divider: var(--skyra-authored-border-color, var(--skyra-ui-default-content-divider));--skyra-ui-button-border: var(--skyra-authored-border-color, var(--skyra-ui-default-button-border));--skyra-ui-button-background: var(--skyra-authored-secondary-color, var(--skyra-ui-default-button-background));--skyra-ui-soft-border: var(--skyra-authored-border-color, var(--skyra-ui-default-soft-border));--skyra-ui-soft-interface: var(--skyra-ui-default-soft-interface);--skyra-ui-selected-interface: var(--skyra-ui-default-selected-interface);--skyra-ui-soft-action: var(--skyra-ui-default-selected-interface);--skyra-ui-option-background: var(--skyra-ui-default-option-background);--skyra-ui-control-background: var(--skyra-authored-secondary-color, var(--skyra-ui-default-control-background));--skyra-ui-control-border: var(--skyra-authored-border-color, var(--skyra-ui-default-control-border));--skyra-ui-control-focus: var(--skyra-ui-default-control-focus);--skyra-ui-option-scroll-fade: var(--skyra-authored-secondary-color, var(--skyra-ui-default-option-scroll-fade));--skyra-ui-shadow: var(--skyra-authored-shadow-md, var(--skyra-ui-default-shadow));font-family:var(--skyra-font-body, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);font-size:calc(var(--skyra-font-size, 16px) * var(--skyra-app-text-scale, 1));-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--skyra-ui-text)}:host(.skyra-ui-host),:host(.skyra-ui-host) *,:host(.skyra-ui-host) *:before,:host(.skyra-ui-host) *:after{box-sizing:inherit}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}:host(.skyra-ui-host)[hidden]{display:none}',
		d2 = `${It}
:host(.skyra-ui-host){display:flex;justify-content:space-between;gap:8px}:host(.skyra-ui-host[align="end"]){justify-content:flex-end}:host(.skyra-ui-host[stacked]){flex-direction:column}:host(.skyra-ui-host[stacked]) skyra-survey-button{width:100%}`,
		p2 = `${It}
:host(.skyra-ui-host){display:inline-block}:host(.skyra-ui-host) button{box-sizing:border-box;height:auto;min-height:32px;min-width:75px;padding:6px 14px;border:var(--skyra-border-width, 1px) var(--skyra-border-style, solid) var(--skyra-ui-button-border);border-radius:var(--skyra-radius-md, 4px);background:var(--skyra-ui-button-background, var(--skyra-ui-secondary));box-shadow:var(--skyra-authored-shadow-sm, var(--skyra-ui-button-shadow));color:var(--skyra-ui-text);font:inherit;font-size:calc(var(--skyra-app-font-unit, 1px) * 13);line-height:1.2;overflow-wrap:anywhere;cursor:pointer}:host([variant="primary"]) button{border-color:var(--skyra-ui-action);background:var(--skyra-authored-action-color, radial-gradient(circle at 50% 0%, light-dark(rgba(255, 255, 255, .16), rgba(255, 255, 255, 0)), rgba(255, 255, 255, 0) 100%), var(--skyra-ui-action));box-shadow:var(--skyra-authored-shadow-sm, var(--skyra-ui-primary-button-shadow));color:var(--skyra-ui-action-text);text-shadow:0 1px 0 light-dark(rgba(0,0,0,.15),transparent)}:host([variant="chrome"]) button{display:inline-grid;width:24px;height:24px;min-width:24px;min-height:24px;padding:0;place-items:center;border:0;background:transparent;box-shadow:none;color:var(--skyra-ui-text);text-shadow:none}:host([variant="chrome"]) slot::slotted(svg){width:15px;height:15px;color:var(--skyra-ui-text);fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}:host([variant="chrome"][label="Hide"]) slot::slotted(svg),:host([variant="chrome"]) slot::slotted(.workbench-icon-minimize){transform:translateY(3px)}:host([variant="chrome"][label="Close"]) slot::slotted(svg){stroke-width:2.5}:host([disabled]) button{cursor:not-allowed;opacity:.45}:host button:focus-visible{outline:var(--skyra-focus-ring-width, 2px) var(--skyra-focus-ring-style, solid) var(--skyra-ui-focus);outline-offset:var(--skyra-focus-ring-offset, 2px)}`,
		f2 = `${It}
:host(.skyra-ui-host){display:block;width:100%}:host(.skyra-ui-host) .card{position:relative;box-sizing:border-box;display:grid;gap:0;width:100%;overflow:hidden;padding:0;border:var(--skyra-border-width, 1px) var(--skyra-border-style, solid) var(--skyra-ui-card-border);border-radius:var(--skyra-card-radius, var(--skyra-radius-lg, 10px));background:var(--skyra-ui-card-background);box-shadow:var(--skyra-card-shadow, var(--skyra-ui-shadow))}::slotted(.chrome){display:flex;align-items:center;justify-content:space-between;gap:12px;height:var(--skyra-app-chrome-height, 39px);min-height:var(--skyra-app-control-size, 39px);padding:0 6px 0 24px}:host([mode="inline"]:not([has-language-picker])) ::slotted(.chrome){position:var(--skyra-app-chrome-position, absolute);top:0;right:0;z-index:1;width:auto}:host(.skyra-ui-host) .content{display:grid;gap:0;padding:var(--skyra-card-padding, 24px);background:var(--skyra-ui-content-background);box-shadow:0 -1px 0 var(--skyra-ui-content-divider)}:host([mode="inline"]:not([has-language-picker])) .content{box-shadow:none}:host([mode="popup"]) .card{background:var(--skyra-ui-content-background)}:host([mode="popup"]) .content{background:transparent}:host([mode="popup"]:not([has-language-picker])) .content{margin-top:-15px;padding-top:0;box-shadow:none}:host(.skyra-ui-host) .content>::slotted(skyra-survey-body){margin-bottom:20px}:host([mode="inline"]) .card{overflow:visible;padding:var(--skyra-authored-inline-padding, 0);border:var(--skyra-authored-container-border, 0 solid transparent);background:var(--skyra-authored-bg-color, transparent);box-shadow:var(--skyra-authored-shadow-md, none)}:host([mode="inline"]) .content{padding:0;background:transparent;box-shadow:none}:host([mode="inline"]) ::slotted(.chrome){padding-inline:0}:host([mode="link"]) .card{max-width:var(--skyra-link-card-max-width, 672px);margin:0 auto;box-shadow:var(--skyra-link-card-shadow, none)}:host([highlight~="surface"]) .card{outline:2px dashed color-mix(in srgb,var(--skyra-ui-action) 65%,transparent);outline-offset:4px}`,
		h2 = `${It}
:host(.skyra-ui-host){display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%}:host(.skyra-ui-host) .actions{display:flex;align-items:center;justify-content:flex-end;gap:2px;margin-left:auto}:host(.skyra-ui-host) button{display:inline-grid;width:var(--skyra-app-control-size, 24px);height:var(--skyra-app-control-size, 24px);border-radius:var(--skyra-radius-sm, 4px);padding:0;place-items:center;border:0;background:transparent;color:var(--skyra-ui-text);cursor:pointer}:host(.skyra-ui-host) button svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}:host(.skyra-ui-host) .minimize svg{transform:translateY(3px)}:host(.skyra-ui-host) .close svg{stroke-width:2.5}:host(.skyra-ui-host) button:focus-visible{outline:var(--skyra-focus-ring-width, 2px) var(--skyra-focus-ring-style, solid) var(--skyra-ui-focus);outline-offset:var(--skyra-focus-ring-offset, 2px)}`,
		tu = `${It}
:host(.skyra-ui-host){display:block}:host(.skyra-ui-host) input,:host(.skyra-ui-host) textarea,:host(.skyra-ui-host) select{box-sizing:border-box;width:100%;min-height:36px;padding:7px 12px;border:var(--skyra-border-width, 1px) var(--skyra-border-style, solid) var(--skyra-ui-control-border);border-radius:var(--skyra-radius-md, 4px);background:var(--skyra-ui-control-background);color:var(--skyra-ui-text);font:inherit;font-size:calc(var(--skyra-app-font-unit, 1px) * 13)}:host(.skyra-ui-host) input::-moz-placeholder,:host(.skyra-ui-host) textarea::-moz-placeholder{color:var(--skyra-ui-control-placeholder)}:host(.skyra-ui-host) input::placeholder,:host(.skyra-ui-host) textarea::placeholder{color:var(--skyra-ui-control-placeholder)}:host(.skyra-ui-host) textarea{height:72px;min-height:72px;resize:vertical}:host(.skyra-ui-host) input{height:36px}:host(.skyra-ui-host) input,:host(.skyra-ui-host) textarea{font-weight:400;line-height:normal;letter-spacing:0}:host(.skyra-ui-host) input:focus-visible,:host(.skyra-ui-host) textarea:focus-visible,:host(.skyra-ui-host) select:focus-visible{outline:var(--skyra-authored-focus-outline, none);outline-offset:var(--skyra-focus-ring-offset, 2px);border-color:var(--skyra-ui-control-focus);background:var(--skyra-ui-control-background)}:host([invalid]) input,:host([invalid]) textarea,:host([invalid]) select{border-color:var(--skyra-ui-error)}:host(.skyra-ui-host) label{position:relative;display:inline-flex;align-items:center}:host(.skyra-ui-host) label select{max-width:160px;min-height:24px;padding:0 18px 0 0;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:transparent;color:var(--skyra-ui-text);font:inherit;font-size:calc(var(--skyra-app-font-unit, 1px) * 12);line-height:1}:host(.skyra-ui-host) .chevron{position:absolute;right:0;width:12px;height:12px;color:var(--skyra-ui-text);stroke-linecap:round;stroke-linejoin:round;pointer-events:none;stroke-width:1.5}`,
		g2 = `${It}
:host(.skyra-ui-host){display:block;color:var(--skyra-ui-error);font-size:calc(var(--skyra-app-font-unit, 1px) * 13);line-height:1.35}:host([tone="warning"]){color:var(--skyra-ui-warning)}`,
		m2 = `${It}
:host(.skyra-ui-host){display:block}:host(.skyra-ui-host) button{box-sizing:border-box;display:flex;align-items:center;gap:8px;width:100%;min-height:var(--skyra-app-control-size, 24px);padding:5px 10px;border:var(--skyra-border-width, 1px) var(--skyra-border-style, solid) var(--skyra-ui-soft-border);border-radius:var(--skyra-radius-md, 4px);background:var(--skyra-ui-option-background);color:var(--skyra-ui-text);font:inherit;font-size:calc(var(--skyra-app-font-unit, 1px) * 13);font-weight:400;line-height:1.2;text-align:left;cursor:pointer}:host([variant="single"][layout="horizontal"]) button,:host([variant="multi"][layout="horizontal"]) button{width:auto;max-width:100%;white-space:var(--skyra-app-option-white-space, nowrap)}:host([variant="likert"][layout="horizontal"]) button{flex-direction:column;justify-content:flex-start;height:100%;min-width:0;min-height:64px;padding:8px 6px;background:var(--skyra-ui-soft-interface);text-align:center}:host([variant="likert"][layout="horizontal"][has-emoji]) button{min-height:84px}:host([variant="multi"]) button{gap:7px;background:var(--skyra-ui-soft-interface)}:host([variant="multi"]) button:hover{background:var(--skyra-ui-selected-interface)}:host(.skyra-ui-host) button:hover{border-color:var(--skyra-ui-soft-border);background:var(--skyra-ui-soft-action)}:host([selected]) button,:host([selected]) button:hover{border-color:var(--skyra-ui-action);background:var(--skyra-ui-action);color:var(--skyra-ui-action-text)}:host([variant="single"][selected]) button,:host([variant="single"][selected]) button:hover{border-color:light-dark(var(--skyra-ui-soft-border),var(--skyra-ui-interface));background:var(--skyra-ui-selected-interface);color:var(--skyra-ui-text)}:host([variant="multi"][selected]) button,:host([variant="multi"][selected]) button:hover{border-color:light-dark(var(--skyra-ui-soft-border),var(--skyra-ui-interface));background:var(--skyra-ui-selected-interface);color:var(--skyra-ui-text)}:host([variant="likert"][selected]) button,:host([variant="likert"][selected]) button:hover{border-color:light-dark(var(--skyra-ui-soft-border),var(--skyra-ui-interface));background:var(--skyra-ui-selected-interface);color:var(--skyra-ui-text)}:host([disabled]) button{cursor:not-allowed;opacity:.45}:host([blocked]) button{cursor:not-allowed}:host(.skyra-ui-host) button:focus-visible{outline:var(--skyra-focus-ring-width, 2px) var(--skyra-focus-ring-style, solid) var(--skyra-ui-focus);outline-offset:var(--skyra-focus-ring-offset, 2px)}:host(.skyra-ui-host) .indicator{width:16px;height:16px;margin-left:auto;color:inherit;opacity:0}:host([selected]) .indicator{opacity:1}:host(.skyra-ui-host) .checkbox{display:inline-grid;width:14px;height:14px;flex:0 0 auto;place-items:center;border:var(--skyra-authored-border-width, 1.5px) var(--skyra-border-style, solid) var(--skyra-authored-border-color, var(--skyra-ui-checkbox-border));border-radius:var(--skyra-authored-radius-sm, 3px);background:var(--skyra-ui-checkbox-background)}:host(.skyra-ui-host) .checkbox[data-checked=true]{border-color:var(--skyra-ui-action);background:var(--skyra-ui-checkbox-selected-background)}:host(.skyra-ui-host) .checkbox-check{width:11px;height:11px;color:var(--skyra-ui-checkbox-selected-text);fill:transparent;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:3}:host(.skyra-ui-host) .radio-mark{box-sizing:border-box;display:inline-grid;width:16px;height:16px;flex:0 0 auto;place-items:center;border:1px solid currentColor;border-radius:999px}:host(.skyra-ui-host) .radio-mark:after{width:6px;height:6px;border-radius:999px;background:currentColor;content:"";opacity:0}:host([selected]) .radio-mark:after{opacity:1}:host(.skyra-ui-host) .shortcut{display:inline-grid;width:18px;height:18px;margin-left:auto;place-items:center;border:1px solid var(--skyra-ui-kbd-border);border-radius:3px;background:var(--skyra-ui-kbd-background);box-shadow:var(--skyra-ui-kbd-shadow);color:var(--skyra-ui-kbd-text);font:inherit;font-size:calc(var(--skyra-app-font-unit, 1px) * 11);font-weight:600;line-height:1}:host([variant="likert"]) .likert-label{min-width:0;overflow-wrap:anywhere}:host([variant="likert"][layout="horizontal"]) .likert-label{min-height:calc(12px * 1.2 * 3);font-size:calc(var(--skyra-app-font-unit, 1px) * 12);font-weight:600;line-height:1.2}:host([variant="likert"][layout="vertical"]) .likert-label{font-size:inherit;font-weight:inherit;line-height:inherit}:host(.skyra-ui-host) .emoji{display:block;font-size:calc(var(--skyra-app-font-unit, 1px) * 24);line-height:1}:host([variant="likert"][layout="horizontal"]) .emoji{font-size:calc(var(--skyra-app-font-unit, 1px) * 34)}`,
		y2 = `${It}
:host(.skyra-ui-host){box-sizing:border-box;display:block}:host(.skyra-ui-host) button{box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;height:auto;min-width:75px;min-height:var(--skyra-app-control-size, 0px);padding:8px 14px;border:var(--skyra-border-width, 1px) var(--skyra-border-style, solid) var(--skyra-minimized-border, var(--skyra-ui-border));border-radius:var(--skyra-radius-sm, 6px);background:var(--skyra-authored-minimized-bg, radial-gradient(circle at 50% 0%, light-dark(rgba(255, 255, 255, .16), rgba(255, 255, 255, 0)), rgba(255, 255, 255, 0) 100%), var(--skyra-minimized-bg, var(--skyra-ui-action)));color:var(--skyra-minimized-text, var(--skyra-ui-action-text));box-shadow:var(--skyra-minimized-shadow, var(--skyra-ui-primary-button-shadow));font:inherit;font-size:calc(var(--skyra-app-font-unit, 1px) * 14);line-height:1.4;text-shadow:0 1px 0 rgba(0,0,0,.15);cursor:pointer}:host(.skyra-ui-host) .icon{width:18px;height:18px;flex:0 0 auto}:host(.skyra-ui-host) .icon-stroke{fill:transparent;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}:host(.skyra-ui-host) button:focus-visible{outline:var(--skyra-focus-ring-width, 2px) var(--skyra-focus-ring-style, solid) var(--skyra-ui-focus);outline-offset:var(--skyra-focus-ring-offset, 2px)}`,
		v2 = `${It}
:host(.skyra-ui-host){display:block}:host(.skyra-ui-host) .fields{display:grid;gap:10px}:host(.skyra-ui-host) .field{display:grid;gap:5px}:host(.skyra-ui-host) .label,:host(.skyra-ui-host) .consent,:host(.skyra-ui-host) .terms{color:var(--skyra-ui-text);font-size:calc(13px * var(--skyra-app-text-scale, 1));line-height:1.35}:host(.skyra-ui-host) .label,:host(.skyra-ui-host) .consent{font-weight:500}:host(.skyra-ui-host) .consent-section{display:grid;gap:8px;padding-top:2px}:host(.skyra-ui-host) .terms{margin:0}:host(.skyra-ui-host) .terms a{color:inherit;font-weight:600;text-decoration:underline;text-underline-offset:2px}:host(.skyra-ui-host) .consent{display:inline-flex;align-items:center;gap:8px}:host(.skyra-ui-host) .consent input{width:16px;height:16px;flex:0 0 auto;color-scheme:light;accent-color:var(--skyra-ui-consent-background);background-color:var(--skyra-ui-consent-background)}`,
		Rg = `${It}
:host(.skyra-ui-host){display:block}:host(.skyra-ui-host) .heading{margin:0 0 10px;font-family:var(--skyra-font-heading, inherit);font-size:calc(var(--skyra-heading-size, calc(var(--skyra-app-base-font-size, 16px) * 1.25)) * var(--skyra-app-text-scale, 1));line-height:1.3;font-weight:600;letter-spacing:normal;color:var(--skyra-ui-text);text-wrap:balance}:host(.skyra-ui-host) .body{margin:0;color:var(--skyra-ui-text);font-size:calc(var(--skyra-body-size, calc(var(--skyra-app-base-font-size, 16px) * .875)) * var(--skyra-app-text-scale, 1));font-weight:400;line-height:1.5;letter-spacing:0;text-wrap:pretty}:host(.skyra-ui-host) .body a{color:var(--skyra-link-color, inherit)}:host(.skyra-ui-host) .body ::slotted(:first-child){margin-top:0}:host(.skyra-ui-host) .body ::slotted(:last-child){margin-bottom:0}`; /**
	 * @license
	 * Copyright 2019 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const zs = globalThis,
		ru =
			zs.ShadowRoot &&
			(zs.ShadyCSS === void 0 || zs.ShadyCSS.nativeShadow) &&
			"adoptedStyleSheets" in Document.prototype &&
			"replace" in CSSStyleSheet.prototype,
		Og = Symbol(),
		Pg = new WeakMap();
	let b2 = class {
		constructor(t, r, n) {
			if (((this._$cssResult$ = !0), n !== Og))
				throw Error(
					"CSSResult is not constructable. Use `unsafeCSS` or `css` instead.",
				);
			(this.cssText = t), (this.t = r);
		}
		get styleSheet() {
			let t = this.o;
			const r = this.t;
			if (ru && t === void 0) {
				const n = r !== void 0 && r.length === 1;
				n && (t = Pg.get(r)),
					t === void 0 &&
						((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
						n && Pg.set(r, t));
			}
			return t;
		}
		toString() {
			return this.cssText;
		}
	};
	const Ue = (e) => new b2(typeof e == "string" ? e : e + "", void 0, Og),
		w2 = (e, t) => {
			if (ru)
				e.adoptedStyleSheets = t.map((r) =>
					r instanceof CSSStyleSheet ? r : r.styleSheet,
				);
			else
				for (const r of t) {
					const n = document.createElement("style"),
						o = zs.litNonce;
					o !== void 0 && n.setAttribute("nonce", o),
						(n.textContent = r.cssText),
						e.appendChild(n);
				}
		},
		Mg = ru
			? (e) => e
			: (e) =>
					e instanceof CSSStyleSheet
						? ((t) => {
								let r = "";
								for (const n of t.cssRules) r += n.cssText;
								return Ue(r);
							})(e)
						: e; /**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const {
			is: k2,
			defineProperty: _2,
			getOwnPropertyDescriptor: S2,
			getOwnPropertyNames: x2,
			getOwnPropertySymbols: $2,
			getPrototypeOf: C2,
		} = Object,
		fr = globalThis,
		Lg = fr.trustedTypes,
		z2 = Lg ? Lg.emptyScript : "",
		nu = fr.reactiveElementPolyfillSupport,
		Ko = (e, t) => e,
		Is = {
			toAttribute(e, t) {
				switch (t) {
					case Boolean:
						e = e ? z2 : null;
						break;
					case Object:
					case Array:
						e = e == null ? e : JSON.stringify(e);
				}
				return e;
			},
			fromAttribute(e, t) {
				let r = e;
				switch (t) {
					case Boolean:
						r = e !== null;
						break;
					case Number:
						r = e === null ? null : Number(e);
						break;
					case Object:
					case Array:
						try {
							r = JSON.parse(e);
						} catch {
							r = null;
						}
				}
				return r;
			},
		},
		ou = (e, t) => !k2(e, t),
		Ng = {
			attribute: !0,
			type: String,
			converter: Is,
			reflect: !1,
			useDefault: !1,
			hasChanged: ou,
		};
	Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")),
		fr.litPropertyMetadata ?? (fr.litPropertyMetadata = new WeakMap());
	let Dn = class extends HTMLElement {
		static addInitializer(t) {
			this._$Ei(), (this.l ?? (this.l = [])).push(t);
		}
		static get observedAttributes() {
			return this.finalize(), this._$Eh && [...this._$Eh.keys()];
		}
		static createProperty(t, r = Ng) {
			if (
				(r.state && (r.attribute = !1),
				this._$Ei(),
				this.prototype.hasOwnProperty(t) &&
					((r = Object.create(r)).wrapped = !0),
				this.elementProperties.set(t, r),
				!r.noAccessor)
			) {
				const n = Symbol(),
					o = this.getPropertyDescriptor(t, n, r);
				o !== void 0 && _2(this.prototype, t, o);
			}
		}
		static getPropertyDescriptor(t, r, n) {
			const { get: o, set: i } = S2(this.prototype, t) ?? {
				get() {
					return this[r];
				},
				set(s) {
					this[r] = s;
				},
			};
			return {
				get: o,
				set(s) {
					const a = o == null ? void 0 : o.call(this);
					i == null || i.call(this, s), this.requestUpdate(t, a, n);
				},
				configurable: !0,
				enumerable: !0,
			};
		}
		static getPropertyOptions(t) {
			return this.elementProperties.get(t) ?? Ng;
		}
		static _$Ei() {
			if (this.hasOwnProperty(Ko("elementProperties"))) return;
			const t = C2(this);
			t.finalize(),
				t.l !== void 0 && (this.l = [...t.l]),
				(this.elementProperties = new Map(t.elementProperties));
		}
		static finalize() {
			if (this.hasOwnProperty(Ko("finalized"))) return;
			if (
				((this.finalized = !0),
				this._$Ei(),
				this.hasOwnProperty(Ko("properties")))
			) {
				const r = this.properties,
					n = [...x2(r), ...$2(r)];
				for (const o of n) this.createProperty(o, r[o]);
			}
			const t = this[Symbol.metadata];
			if (t !== null) {
				const r = litPropertyMetadata.get(t);
				if (r !== void 0)
					for (const [n, o] of r) this.elementProperties.set(n, o);
			}
			this._$Eh = new Map();
			for (const [r, n] of this.elementProperties) {
				const o = this._$Eu(r, n);
				o !== void 0 && this._$Eh.set(o, r);
			}
			this.elementStyles = this.finalizeStyles(this.styles);
		}
		static finalizeStyles(t) {
			const r = [];
			if (Array.isArray(t)) {
				const n = new Set(t.flat(1 / 0).reverse());
				for (const o of n) r.unshift(Mg(o));
			} else t !== void 0 && r.push(Mg(t));
			return r;
		}
		static _$Eu(t, r) {
			const n = r.attribute;
			return n === !1
				? void 0
				: typeof n == "string"
					? n
					: typeof t == "string"
						? t.toLowerCase()
						: void 0;
		}
		constructor() {
			super(),
				(this._$Ep = void 0),
				(this.isUpdatePending = !1),
				(this.hasUpdated = !1),
				(this._$Em = null),
				this._$Ev();
		}
		_$Ev() {
			var t;
			(this._$ES = new Promise((r) => (this.enableUpdating = r))),
				(this._$AL = new Map()),
				this._$E_(),
				this.requestUpdate(),
				(t = this.constructor.l) == null || t.forEach((r) => r(this));
		}
		addController(t) {
			var r;
			(this._$EO ?? (this._$EO = new Set())).add(t),
				this.renderRoot !== void 0 &&
					this.isConnected &&
					((r = t.hostConnected) == null || r.call(t));
		}
		removeController(t) {
			var r;
			(r = this._$EO) == null || r.delete(t);
		}
		_$E_() {
			const t = new Map(),
				r = this.constructor.elementProperties;
			for (const n of r.keys())
				this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
			t.size > 0 && (this._$Ep = t);
		}
		createRenderRoot() {
			const t =
				this.shadowRoot ??
				this.attachShadow(this.constructor.shadowRootOptions);
			return w2(t, this.constructor.elementStyles), t;
		}
		connectedCallback() {
			var t;
			this.renderRoot ?? (this.renderRoot = this.createRenderRoot()),
				this.enableUpdating(!0),
				(t = this._$EO) == null ||
					t.forEach((r) => {
						var n;
						return (n = r.hostConnected) == null ? void 0 : n.call(r);
					});
		}
		enableUpdating(t) {}
		disconnectedCallback() {
			var t;
			(t = this._$EO) == null ||
				t.forEach((r) => {
					var n;
					return (n = r.hostDisconnected) == null ? void 0 : n.call(r);
				});
		}
		attributeChangedCallback(t, r, n) {
			this._$AK(t, n);
		}
		_$ET(t, r) {
			var i;
			const n = this.constructor.elementProperties.get(t),
				o = this.constructor._$Eu(t, n);
			if (o !== void 0 && n.reflect === !0) {
				const s = (
					((i = n.converter) == null ? void 0 : i.toAttribute) !== void 0
						? n.converter
						: Is
				).toAttribute(r, n.type);
				(this._$Em = t),
					s == null ? this.removeAttribute(o) : this.setAttribute(o, s),
					(this._$Em = null);
			}
		}
		_$AK(t, r) {
			var i, s;
			const n = this.constructor,
				o = n._$Eh.get(t);
			if (o !== void 0 && this._$Em !== o) {
				const a = n.getPropertyOptions(o),
					l =
						typeof a.converter == "function"
							? { fromAttribute: a.converter }
							: ((i = a.converter) == null ? void 0 : i.fromAttribute) !==
									void 0
								? a.converter
								: Is;
				this._$Em = o;
				const u = l.fromAttribute(r, a.type);
				(this[o] = u ?? ((s = this._$Ej) == null ? void 0 : s.get(o)) ?? u),
					(this._$Em = null);
			}
		}
		requestUpdate(t, r, n, o = !1, i) {
			var s;
			if (t !== void 0) {
				const a = this.constructor;
				if (
					(o === !1 && (i = this[t]),
					n ?? (n = a.getPropertyOptions(t)),
					!(
						(n.hasChanged ?? ou)(i, r) ||
						(n.useDefault &&
							n.reflect &&
							i === ((s = this._$Ej) == null ? void 0 : s.get(t)) &&
							!this.hasAttribute(a._$Eu(t, n)))
					))
				)
					return;
				this.C(t, r, n);
			}
			this.isUpdatePending === !1 && (this._$ES = this._$EP());
		}
		C(t, r, { useDefault: n, reflect: o, wrapped: i }, s) {
			(n &&
				!(this._$Ej ?? (this._$Ej = new Map())).has(t) &&
				(this._$Ej.set(t, s ?? r ?? this[t]), i !== !0 || s !== void 0)) ||
				(this._$AL.has(t) ||
					(this.hasUpdated || n || (r = void 0), this._$AL.set(t, r)),
				o === !0 &&
					this._$Em !== t &&
					(this._$Eq ?? (this._$Eq = new Set())).add(t));
		}
		async _$EP() {
			this.isUpdatePending = !0;
			try {
				await this._$ES;
			} catch (r) {
				Promise.reject(r);
			}
			const t = this.scheduleUpdate();
			return t != null && (await t), !this.isUpdatePending;
		}
		scheduleUpdate() {
			return this.performUpdate();
		}
		performUpdate() {
			var n;
			if (!this.isUpdatePending) return;
			if (!this.hasUpdated) {
				if (
					(this.renderRoot ?? (this.renderRoot = this.createRenderRoot()),
					this._$Ep)
				) {
					for (const [i, s] of this._$Ep) this[i] = s;
					this._$Ep = void 0;
				}
				const o = this.constructor.elementProperties;
				if (o.size > 0)
					for (const [i, s] of o) {
						const { wrapped: a } = s,
							l = this[i];
						a !== !0 ||
							this._$AL.has(i) ||
							l === void 0 ||
							this.C(i, void 0, s, l);
					}
			}
			let t = !1;
			const r = this._$AL;
			try {
				(t = this.shouldUpdate(r)),
					t
						? (this.willUpdate(r),
							(n = this._$EO) == null ||
								n.forEach((o) => {
									var i;
									return (i = o.hostUpdate) == null ? void 0 : i.call(o);
								}),
							this.update(r))
						: this._$EM();
			} catch (o) {
				throw ((t = !1), this._$EM(), o);
			}
			t && this._$AE(r);
		}
		willUpdate(t) {}
		_$AE(t) {
			var r;
			(r = this._$EO) == null ||
				r.forEach((n) => {
					var o;
					return (o = n.hostUpdated) == null ? void 0 : o.call(n);
				}),
				this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
				this.updated(t);
		}
		_$EM() {
			(this._$AL = new Map()), (this.isUpdatePending = !1);
		}
		get updateComplete() {
			return this.getUpdateComplete();
		}
		getUpdateComplete() {
			return this._$ES;
		}
		shouldUpdate(t) {
			return !0;
		}
		update(t) {
			this._$Eq &&
				(this._$Eq = this._$Eq.forEach((r) => this._$ET(r, this[r]))),
				this._$EM();
		}
		updated(t) {}
		firstUpdated(t) {}
	};
	(Dn.elementStyles = []),
		(Dn.shadowRootOptions = { mode: "open" }),
		(Dn[Ko("elementProperties")] = new Map()),
		(Dn[Ko("finalized")] = new Map()),
		nu == null || nu({ ReactiveElement: Dn }),
		(fr.reactiveElementVersions ?? (fr.reactiveElementVersions = [])).push(
			"2.1.2",
		); /**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const Jo = globalThis,
		Dg = (e) => e,
		Ts = Jo.trustedTypes,
		jg = Ts ? Ts.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
		Bg = "$lit$",
		hr = `lit$${Math.random().toFixed(9).slice(2)}$`,
		Ug = "?" + hr,
		I2 = `<${Ug}>`,
		jr = document,
		Go = () => jr.createComment(""),
		Yo = (e) => e === null || (typeof e != "object" && typeof e != "function"),
		iu = Array.isArray,
		T2 = (e) =>
			iu(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function",
		su = `[ 	
\f\r]`,
		Xo = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
		Fg = /-->/g,
		Hg = />/g,
		Br = RegExp(
			`>|${su}(?:([^\\s"'>=/]+)(${su}*=${su}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
			"g",
		),
		Vg = /'/g,
		Zg = /"/g,
		qg = /^(?:script|style|textarea|title)$/i,
		E2 =
			(e) =>
			(t, ...r) => ({ _$litType$: e, strings: t, values: r }),
		G = E2(1),
		Ur = Symbol.for("lit-noChange"),
		ee = Symbol.for("lit-nothing"),
		Wg = new WeakMap(),
		Fr = jr.createTreeWalker(jr, 129);
	function Kg(e, t) {
		if (!iu(e) || !e.hasOwnProperty("raw"))
			throw Error("invalid template strings array");
		return jg !== void 0 ? jg.createHTML(t) : t;
	}
	const A2 = (e, t) => {
		const r = e.length - 1,
			n = [];
		let o,
			i = t === 2 ? "<svg>" : t === 3 ? "<math>" : "",
			s = Xo;
		for (let a = 0; a < r; a++) {
			const l = e[a];
			let u,
				d,
				c = -1,
				f = 0;
			for (; f < l.length && ((s.lastIndex = f), (d = s.exec(l)), d !== null); )
				(f = s.lastIndex),
					s === Xo
						? d[1] === "!--"
							? (s = Fg)
							: d[1] !== void 0
								? (s = Hg)
								: d[2] !== void 0
									? (qg.test(d[2]) && (o = RegExp("</" + d[2], "g")), (s = Br))
									: d[3] !== void 0 && (s = Br)
						: s === Br
							? d[0] === ">"
								? ((s = o ?? Xo), (c = -1))
								: d[1] === void 0
									? (c = -2)
									: ((c = s.lastIndex - d[2].length),
										(u = d[1]),
										(s = d[3] === void 0 ? Br : d[3] === '"' ? Zg : Vg))
							: s === Zg || s === Vg
								? (s = Br)
								: s === Fg || s === Hg
									? (s = Xo)
									: ((s = Br), (o = void 0));
			const p = s === Br && e[a + 1].startsWith("/>") ? " " : "";
			i +=
				s === Xo
					? l + I2
					: c >= 0
						? (n.push(u), l.slice(0, c) + Bg + l.slice(c) + hr + p)
						: l + hr + (c === -2 ? a : p);
		}
		return [
			Kg(
				e,
				i + (e[r] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : ""),
			),
			n,
		];
	};
	class Qo {
		constructor({ strings: t, _$litType$: r }, n) {
			let o;
			this.parts = [];
			let i = 0,
				s = 0;
			const a = t.length - 1,
				l = this.parts,
				[u, d] = A2(t, r);
			if (
				((this.el = Qo.createElement(u, n)),
				(Fr.currentNode = this.el.content),
				r === 2 || r === 3)
			) {
				const c = this.el.content.firstChild;
				c.replaceWith(...c.childNodes);
			}
			for (; (o = Fr.nextNode()) !== null && l.length < a; ) {
				if (o.nodeType === 1) {
					if (o.hasAttributes())
						for (const c of o.getAttributeNames())
							if (c.endsWith(Bg)) {
								const f = d[s++],
									p = o.getAttribute(c).split(hr),
									h = /([.?@])?(.*)/.exec(f);
								l.push({
									type: 1,
									index: i,
									name: h[2],
									strings: p,
									ctor:
										h[1] === "."
											? O2
											: h[1] === "?"
												? P2
												: h[1] === "@"
													? M2
													: Es,
								}),
									o.removeAttribute(c);
							} else
								c.startsWith(hr) &&
									(l.push({ type: 6, index: i }), o.removeAttribute(c));
					if (qg.test(o.tagName)) {
						const c = o.textContent.split(hr),
							f = c.length - 1;
						if (f > 0) {
							o.textContent = Ts ? Ts.emptyScript : "";
							for (let p = 0; p < f; p++)
								o.append(c[p], Go()),
									Fr.nextNode(),
									l.push({ type: 2, index: ++i });
							o.append(c[f], Go());
						}
					}
				} else if (o.nodeType === 8)
					if (o.data === Ug) l.push({ type: 2, index: i });
					else {
						let c = -1;
						for (; (c = o.data.indexOf(hr, c + 1)) !== -1; )
							l.push({ type: 7, index: i }), (c += hr.length - 1);
					}
				i++;
			}
		}
		static createElement(t, r) {
			const n = jr.createElement("template");
			return (n.innerHTML = t), n;
		}
	}
	function jn(e, t, r = e, n) {
		var s, a;
		if (t === Ur) return t;
		let o = n !== void 0 ? ((s = r._$Co) == null ? void 0 : s[n]) : r._$Cl;
		const i = Yo(t) ? void 0 : t._$litDirective$;
		return (
			(o == null ? void 0 : o.constructor) !== i &&
				((a = o == null ? void 0 : o._$AO) == null || a.call(o, !1),
				i === void 0 ? (o = void 0) : ((o = new i(e)), o._$AT(e, r, n)),
				n !== void 0 ? ((r._$Co ?? (r._$Co = []))[n] = o) : (r._$Cl = o)),
			o !== void 0 && (t = jn(e, o._$AS(e, t.values), o, n)),
			t
		);
	}
	class R2 {
		constructor(t, r) {
			(this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = r);
		}
		get parentNode() {
			return this._$AM.parentNode;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		u(t) {
			const {
					el: { content: r },
					parts: n,
				} = this._$AD,
				o = ((t == null ? void 0 : t.creationScope) ?? jr).importNode(r, !0);
			Fr.currentNode = o;
			let i = Fr.nextNode(),
				s = 0,
				a = 0,
				l = n[0];
			for (; l !== void 0; ) {
				if (s === l.index) {
					let u;
					l.type === 2
						? (u = new ei(i, i.nextSibling, this, t))
						: l.type === 1
							? (u = new l.ctor(i, l.name, l.strings, this, t))
							: l.type === 6 && (u = new L2(i, this, t)),
						this._$AV.push(u),
						(l = n[++a]);
				}
				s !== (l == null ? void 0 : l.index) && ((i = Fr.nextNode()), s++);
			}
			return (Fr.currentNode = jr), o;
		}
		p(t) {
			let r = 0;
			for (const n of this._$AV)
				n !== void 0 &&
					(n.strings !== void 0
						? (n._$AI(t, n, r), (r += n.strings.length - 2))
						: n._$AI(t[r])),
					r++;
		}
	}
	class ei {
		get _$AU() {
			var t;
			return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
		}
		constructor(t, r, n, o) {
			(this.type = 2),
				(this._$AH = ee),
				(this._$AN = void 0),
				(this._$AA = t),
				(this._$AB = r),
				(this._$AM = n),
				(this.options = o),
				(this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0);
		}
		get parentNode() {
			let t = this._$AA.parentNode;
			const r = this._$AM;
			return (
				r !== void 0 &&
					(t == null ? void 0 : t.nodeType) === 11 &&
					(t = r.parentNode),
				t
			);
		}
		get startNode() {
			return this._$AA;
		}
		get endNode() {
			return this._$AB;
		}
		_$AI(t, r = this) {
			(t = jn(this, t, r)),
				Yo(t)
					? t === ee || t == null || t === ""
						? (this._$AH !== ee && this._$AR(), (this._$AH = ee))
						: t !== this._$AH && t !== Ur && this._(t)
					: t._$litType$ !== void 0
						? this.$(t)
						: t.nodeType !== void 0
							? this.T(t)
							: T2(t)
								? this.k(t)
								: this._(t);
		}
		O(t) {
			return this._$AA.parentNode.insertBefore(t, this._$AB);
		}
		T(t) {
			this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
		}
		_(t) {
			this._$AH !== ee && Yo(this._$AH)
				? (this._$AA.nextSibling.data = t)
				: this.T(jr.createTextNode(t)),
				(this._$AH = t);
		}
		$(t) {
			var i;
			const { values: r, _$litType$: n } = t,
				o =
					typeof n == "number"
						? this._$AC(t)
						: (n.el === void 0 &&
								(n.el = Qo.createElement(Kg(n.h, n.h[0]), this.options)),
							n);
			if (((i = this._$AH) == null ? void 0 : i._$AD) === o) this._$AH.p(r);
			else {
				const s = new R2(o, this),
					a = s.u(this.options);
				s.p(r), this.T(a), (this._$AH = s);
			}
		}
		_$AC(t) {
			let r = Wg.get(t.strings);
			return r === void 0 && Wg.set(t.strings, (r = new Qo(t))), r;
		}
		k(t) {
			iu(this._$AH) || ((this._$AH = []), this._$AR());
			const r = this._$AH;
			let n,
				o = 0;
			for (const i of t)
				o === r.length
					? r.push((n = new ei(this.O(Go()), this.O(Go()), this, this.options)))
					: (n = r[o]),
					n._$AI(i),
					o++;
			o < r.length && (this._$AR(n && n._$AB.nextSibling, o), (r.length = o));
		}
		_$AR(t = this._$AA.nextSibling, r) {
			var n;
			for (
				(n = this._$AP) == null ? void 0 : n.call(this, !1, !0, r);
				t !== this._$AB;
			) {
				const o = Dg(t).nextSibling;
				Dg(t).remove(), (t = o);
			}
		}
		setConnected(t) {
			var r;
			this._$AM === void 0 &&
				((this._$Cv = t), (r = this._$AP) == null || r.call(this, t));
		}
	}
	class Es {
		get tagName() {
			return this.element.tagName;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		constructor(t, r, n, o, i) {
			(this.type = 1),
				(this._$AH = ee),
				(this._$AN = void 0),
				(this.element = t),
				(this.name = r),
				(this._$AM = o),
				(this.options = i),
				n.length > 2 || n[0] !== "" || n[1] !== ""
					? ((this._$AH = Array(n.length - 1).fill(new String())),
						(this.strings = n))
					: (this._$AH = ee);
		}
		_$AI(t, r = this, n, o) {
			const i = this.strings;
			let s = !1;
			if (i === void 0)
				(t = jn(this, t, r, 0)),
					(s = !Yo(t) || (t !== this._$AH && t !== Ur)),
					s && (this._$AH = t);
			else {
				const a = t;
				let l, u;
				for (t = i[0], l = 0; l < i.length - 1; l++)
					(u = jn(this, a[n + l], r, l)),
						u === Ur && (u = this._$AH[l]),
						s || (s = !Yo(u) || u !== this._$AH[l]),
						u === ee ? (t = ee) : t !== ee && (t += (u ?? "") + i[l + 1]),
						(this._$AH[l] = u);
			}
			s && !o && this.j(t);
		}
		j(t) {
			t === ee
				? this.element.removeAttribute(this.name)
				: this.element.setAttribute(this.name, t ?? "");
		}
	}
	class O2 extends Es {
		constructor() {
			super(...arguments), (this.type = 3);
		}
		j(t) {
			this.element[this.name] = t === ee ? void 0 : t;
		}
	}
	class P2 extends Es {
		constructor() {
			super(...arguments), (this.type = 4);
		}
		j(t) {
			this.element.toggleAttribute(this.name, !!t && t !== ee);
		}
	}
	class M2 extends Es {
		constructor(t, r, n, o, i) {
			super(t, r, n, o, i), (this.type = 5);
		}
		_$AI(t, r = this) {
			if ((t = jn(this, t, r, 0) ?? ee) === Ur) return;
			const n = this._$AH,
				o =
					(t === ee && n !== ee) ||
					t.capture !== n.capture ||
					t.once !== n.once ||
					t.passive !== n.passive,
				i = t !== ee && (n === ee || o);
			o && this.element.removeEventListener(this.name, this, n),
				i && this.element.addEventListener(this.name, this, t),
				(this._$AH = t);
		}
		handleEvent(t) {
			var r;
			typeof this._$AH == "function"
				? this._$AH.call(
						((r = this.options) == null ? void 0 : r.host) ?? this.element,
						t,
					)
				: this._$AH.handleEvent(t);
		}
	}
	class L2 {
		constructor(t, r, n) {
			(this.element = t),
				(this.type = 6),
				(this._$AN = void 0),
				(this._$AM = r),
				(this.options = n);
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		_$AI(t) {
			jn(this, t);
		}
	}
	const au = Jo.litHtmlPolyfillSupport;
	au == null || au(Qo, ei),
		(Jo.litHtmlVersions ?? (Jo.litHtmlVersions = [])).push("3.3.3");
	const N2 = (e, t, r) => {
		const n = (r == null ? void 0 : r.renderBefore) ?? t;
		let o = n._$litPart$;
		if (o === void 0) {
			const i = (r == null ? void 0 : r.renderBefore) ?? null;
			n._$litPart$ = o = new ei(t.insertBefore(Go(), i), i, void 0, r ?? {});
		}
		return o._$AI(e), o;
	}; /**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const Hr = globalThis;
	let ze = class extends Dn {
		constructor() {
			super(...arguments),
				(this.renderOptions = { host: this }),
				(this._$Do = void 0);
		}
		createRenderRoot() {
			var r;
			const t = super.createRenderRoot();
			return (
				(r = this.renderOptions).renderBefore ??
					(r.renderBefore = t.firstChild),
				t
			);
		}
		update(t) {
			const r = this.render();
			this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
				super.update(t),
				(this._$Do = N2(r, this.renderRoot, this.renderOptions));
		}
		connectedCallback() {
			var t;
			super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
		}
		disconnectedCallback() {
			var t;
			super.disconnectedCallback(),
				(t = this._$Do) == null || t.setConnected(!1);
		}
		render() {
			return Ur;
		}
	};
	(ze._$litElement$ = !0),
		(ze.finalized = !0),
		(gv = Hr.litElementHydrateSupport) == null ||
			gv.call(Hr, { LitElement: ze });
	const lu = Hr.litElementPolyfillSupport;
	lu == null || lu({ LitElement: ze }),
		(Hr.litElementVersions ?? (Hr.litElementVersions = [])).push("4.2.2");
	class Jg extends ze {
		render() {
			return G`<p class="body" part="body"><slot></slot></p>`;
		}
	}
	W(Jg, "styles", Ue(Rg)); /**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const D2 = {
			attribute: !0,
			type: String,
			converter: Is,
			reflect: !1,
			hasChanged: ou,
		},
		j2 = (e = D2, t, r) => {
			const { kind: n, metadata: o } = r;
			let i = globalThis.litPropertyMetadata.get(o);
			if (
				(i === void 0 && globalThis.litPropertyMetadata.set(o, (i = new Map())),
				n === "setter" && ((e = Object.create(e)).wrapped = !0),
				i.set(r.name, e),
				n === "accessor")
			) {
				const { name: s } = r;
				return {
					set(a) {
						const l = t.get.call(this);
						t.set.call(this, a), this.requestUpdate(s, l, e, !0, a);
					},
					init(a) {
						return a !== void 0 && this.C(s, void 0, e, a), a;
					},
				};
			}
			if (n === "setter") {
				const { name: s } = r;
				return function (a) {
					const l = this[s];
					t.call(this, a), this.requestUpdate(s, l, e, !0, a);
				};
			}
			throw Error("Unsupported decorator location: " + n);
		};
	function R(e) {
		return (t, r) =>
			typeof r == "object"
				? j2(e, t, r)
				: ((n, o, i) => {
						const s = o.hasOwnProperty(i);
						return (
							o.constructor.createProperty(i, n),
							s ? Object.getOwnPropertyDescriptor(o, i) : void 0
						);
					})(e, t, r);
	} /**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	function B2(e) {
		return R({ ...e, state: !0, attribute: !1 });
	}
	var Gg, Yg, As;
	function Xg(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let U2 =
		((Gg = R({ reflect: !0 })),
		(Yg = R({ type: Boolean, reflect: !0 })),
		(As =
			((wu = class extends ze {
				constructor() {
					super(), (this.align = "between"), (this.stacked = !1);
				}
				render() {
					return G`<slot></slot>`;
				}
			}),
			W(wu, "styles", Ue(d2)),
			wu)),
		Xg(As.prototype, "align", [Gg], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Xg(As.prototype, "stacked", [Yg], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		As);
	var Qg, em, tm, ti;
	function uu(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let F2 =
		((Qg = R({ type: Boolean, reflect: !0 })),
		(em = R({ reflect: !0 })),
		(tm = R({ reflect: !0 })),
		(ti =
			((Ds = class extends ze {
				constructor() {
					super(), (this.disabled = !1), (this.variant = ""), (this.label = "");
				}
				render() {
					return G`<button part="button" type="button" aria-label=${this.label || ee} ?disabled=${this.disabled}>
      <slot></slot>
    </button>`;
				}
			}),
			W(Ds, "styles", Ue(p2)),
			W(Ds, "shadowRootOptions", {
				...ze.shadowRootOptions,
				delegatesFocus: !0,
			}),
			Ds)),
		uu(ti.prototype, "disabled", [Qg], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		uu(ti.prototype, "variant", [em], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		uu(ti.prototype, "label", [tm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ti);
	var rm, nm, Rs;
	function om(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let H2 =
		((rm = R({ reflect: !0 })),
		(nm = R({ reflect: !0 })),
		(Rs =
			((js = class extends ze {
				constructor() {
					super(), (this.mode = "popup"), (this.highlight = "");
				}
				render() {
					return G`<article class="card" part="card" data-render-region="surface">
      <slot name="chrome"></slot>
      <div class="content" part="content"><slot></slot></div>
    </article>`;
				}
			}),
			W(js, "styles", Ue(f2)),
			W(js, "shadowRootOptions", {
				...ze.shadowRootOptions,
				delegatesFocus: !0,
			}),
			js)),
		om(Rs.prototype, "mode", [rm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		om(Rs.prototype, "highlight", [nm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Rs);
	function je(e, t, r) {
		e.dispatchEvent(
			new CustomEvent(t, { bubbles: !0, composed: !0, detail: r }),
		);
	}
	var im, sm, am, lm, um, cm, dm, pm, Tt;
	function gr(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let V2 =
		((im = R({ attribute: !1 })),
		(sm = R({ reflect: !0 })),
		(am = R({ attribute: "minimize-label", reflect: !0 })),
		(lm = R({ attribute: "close-label", reflect: !0 })),
		(um = R({ attribute: "language-label", reflect: !0 })),
		(cm = R({ attribute: "show-minimize", type: Boolean, reflect: !0 })),
		(dm = R({ attribute: "show-close", type: Boolean, reflect: !0 })),
		(pm = R({ attribute: "actions-disabled", type: Boolean, reflect: !0 })),
		(Tt =
			((ku = class extends ze {
				constructor() {
					super(),
						(this.languages = []),
						(this.value = ""),
						(this.minimizeLabel = "Hide"),
						(this.closeLabel = "Close"),
						(this.languageLabel = "Language"),
						(this.showMinimize = !1),
						(this.showClose = !1),
						(this.actionsDisabled = !1);
				}
				render() {
					const t = this.languages
							.map(({ code: n, name: o }) => `${n}:${o}`)
							.join(","),
						r = this.languages.length > 1;
					return G`
      ${
				r
					? G`<skyra-survey-language-select
            .languages=${t}
            .value=${this.value}
            label=${this.languageLabel}
            @skyra-language-change=${this.changeLanguage}
          ></skyra-survey-language-select>`
					: ee
			}
      ${
				this.showMinimize || this.showClose
					? G`<div class="actions">
            ${
							this.showMinimize
								? G`<button class="minimize" type="button" aria-label=${this.minimizeLabel} ?disabled=${this.actionsDisabled} @click=${this.minimize}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h18" /></svg>
                </button>`
								: ee
						}
            ${
							this.showClose
								? G`<button class="close" type="button" aria-label=${this.closeLabel} ?disabled=${this.actionsDisabled} @click=${this.close}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>`
								: ee
						}
          </div>`
					: ee
			}
    `;
				}
				changeLanguage(t) {
					(this.value = t.detail.language),
						je(this, "skyra-language-change", t.detail);
				}
				minimize() {
					this.actionsDisabled || je(this, "skyra-minimize", void 0);
				}
				close() {
					this.actionsDisabled || je(this, "skyra-close", void 0);
				}
			}),
			W(ku, "styles", Ue(h2)),
			ku)),
		gr(Tt.prototype, "languages", [im], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		gr(Tt.prototype, "value", [sm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		gr(Tt.prototype, "minimizeLabel", [am], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		gr(Tt.prototype, "closeLabel", [lm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		gr(Tt.prototype, "languageLabel", [um], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		gr(Tt.prototype, "showMinimize", [cm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		gr(Tt.prototype, "showClose", [dm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		gr(Tt.prototype, "actionsDisabled", [pm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Tt); /**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const Z2 = { CHILD: 2 },
		q2 =
			(e) =>
			(...t) => ({ _$litDirective$: e, values: t });
	class W2 {
		constructor(t) {}
		get _$AU() {
			return this._$AM._$AU;
		}
		_$AT(t, r, n) {
			(this._$Ct = t), (this._$AM = r), (this._$Ci = n);
		}
		_$AS(t, r) {
			return this.update(t, r);
		}
		update(t, r) {
			return this.render(...r);
		}
	} /**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	class cu extends W2 {
		constructor(t) {
			if ((super(t), (this.it = ee), t.type !== Z2.CHILD))
				throw Error(
					this.constructor.directiveName +
						"() can only be used in child bindings",
				);
		}
		render(t) {
			if (t === ee || t == null) return (this._t = void 0), (this.it = t);
			if (t === Ur) return t;
			if (typeof t != "string")
				throw Error(
					this.constructor.directiveName + "() called with a non-string value",
				);
			if (t === this.it) return this._t;
			this.it = t;
			const r = [t];
			return (
				(r.raw = r),
				(this._t = {
					_$litType$: this.constructor.resultType,
					strings: r,
					values: [],
				})
			);
		}
	}
	(cu.directiveName = "unsafeHTML"), (cu.resultType = 1);
	const K2 = q2(cu),
		fm =
			':host(.skyra-ui-host){display:grid;gap:0;container-type:inline-size}:host(.skyra-ui-host) .content-header{display:block;margin-bottom:24px}:host(.skyra-ui-host) .content-header>skyra-survey-heading:last-child::part(heading){margin-bottom:0}:host(.skyra-ui-host) .content-body{display:grid;gap:8px;padding-bottom:30px}:host(.skyra-ui-host) .input-feedback{display:flex;padding-inline:5px;align-items:baseline;justify-content:space-between;gap:8px;color:var(--skyra-authored-muted-text-color, inherit);font-size:calc((var(--skyra-font-size-small, 14px) - 2px) * var(--skyra-app-text-scale, 1));line-height:1.4}:host(.skyra-ui-host) .input-instruction{color:inherit}:host(.skyra-ui-host[instruction-invalid]) .input-instruction{color:var(--skyra-ui-error)}:host(.skyra-ui-host) .character-count{margin-left:auto;white-space:nowrap}:host([character-count-tone="warning"]) .character-count{color:var(--skyra-ui-warning)}:host([character-count-tone="error"]) .character-count{color:var(--skyra-ui-error)}:host(.skyra-ui-host) .options{display:grid;gap:8px}:host(.skyra-ui-host) .options[data-layout=horizontal]{display:flex;flex-wrap:wrap;align-items:stretch}:host(.skyra-ui-host) .options[data-layout=horizontal] skyra-survey-option{flex:0 0 auto;width:-moz-fit-content;width:fit-content;max-width:100%}:host(skyra-survey-choice-content) .options[data-layout=vertical]{justify-items:start}:host(skyra-survey-choice-content) .options[data-layout=vertical] skyra-survey-option{max-width:100%}:host(.skyra-ui-host) .selection-limits{display:flex;justify-content:flex-start;gap:8px;color:var(--skyra-ui-muted, currentColor);font-size:calc((var(--skyra-font-size-small, 14px) - 2px) * var(--skyra-app-text-scale, 1));line-height:1.4}:host([invalid]) .selection-limits{color:var(--skyra-ui-error)}:host(.skyra-ui-host) .likert-options[data-layout=horizontal]{display:grid;grid-template-columns:var(--skyra-app-likert-columns, repeat(var(--skyra-likert-columns, 5), minmax(0, 1fr)));align-items:stretch;gap:4px}:host(.skyra-ui-host) .likert-options[data-layout=horizontal] skyra-survey-option{width:100%}:host(.skyra-ui-host) .completion-actions{display:flex;align-items:center;gap:8px;padding-top:10px}:host(.skyra-ui-host) .completion-secondary-actions{display:flex;flex:1 1 auto;align-items:center;gap:8px;min-width:0}:host(.skyra-ui-host) .completion-reply-later{margin-left:auto}:host(.skyra-ui-host) .completion-actions[data-layout=vertical]{align-items:flex-start;flex-direction:column}:host(.skyra-ui-host) .completion-actions[data-layout=vertical] .completion-secondary-actions{width:100%}:host(.skyra-ui-host[variant="findability"]) .completion-actions{flex-wrap:wrap;gap:16px}@media(max-width:480px){:host(.skyra-ui-host) .likert-options[data-layout=horizontal]{grid-template-columns:var(--skyra-app-likert-columns, 1fr)}}';
	var hm, gm, mm, ym, vm, bm, mr;
	function Bn(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let Vr =
		((hm = R()),
		(gm = R()),
		(mm = R({ attribute: "body-html" })),
		(ym = R({ attribute: "hide-header", type: Boolean })),
		(vm = R({ type: Boolean, reflect: !0 })),
		(bm = R()),
		(mr =
			((_u = class extends ze {
				constructor() {
					super(),
						(this.heading = ""),
						(this.body = ""),
						(this.bodyHtml = ""),
						(this.hideHeader = !1),
						(this.invalid = !1),
						(this.error = "");
				}
				renderHeader() {
					var o;
					const t = document.createElement("template");
					t.innerHTML = this.bodyHtml;
					const r = !!(
							((o = t.content.textContent) != null &&
								o.replace(/[\s\u200b]/g, "")) ||
							t.content.querySelector(
								"img, video, audio, iframe, svg, canvas, hr, table",
							)
						),
						n = !!this.body.trim();
					return this.hideHeader || (!this.heading && !n && !r)
						? ee
						: G`<header class="content-header" part="header">
      ${this.heading ? G`<skyra-survey-heading id="content-heading" part="heading">${this.heading}</skyra-survey-heading>` : ee}
      ${r ? G`<skyra-survey-body id="content-body" part="body">${K2(this.bodyHtml)}</skyra-survey-body>` : n ? G`<skyra-survey-body id="content-body" part="body">${this.body}</skyra-survey-body>` : ee}
    </header>`;
				}
				renderError() {
					return this.error
						? G`<skyra-survey-error part="error">${this.error}</skyra-survey-error>`
						: ee;
				}
			}),
			W(_u, "styles", Ue(fm)),
			_u)),
		Bn(mr.prototype, "heading", [hm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Bn(mr.prototype, "body", [gm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Bn(mr.prototype, "bodyHtml", [mm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Bn(mr.prototype, "hideHeader", [ym], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Bn(mr.prototype, "invalid", [vm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Bn(mr.prototype, "error", [bm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		mr);
	var wm, km, _m, Sm, xm, $m, Cm, Vt;
	function Zr(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let J2 =
		((wm = R({ attribute: !1 })),
		(km = R({ attribute: "selected-value", reflect: !0 })),
		(_m = R({ reflect: !0 })),
		(Sm = R({ type: Boolean, reflect: !0 })),
		(xm = R({ type: Boolean, reflect: !0 })),
		($m = R({ attribute: "scroll-up-label" })),
		(Cm = R({ attribute: "scroll-down-label" })),
		(Vt = class extends Vr {
			constructor() {
				super(),
					(this.options = []),
					(this.selectedValue = ""),
					(this.layout = "vertical"),
					(this.disabled = !1),
					(this.inline = !1),
					(this.scrollUpLabel = "Scroll up"),
					(this.scrollDownLabel = "Scroll down");
			}
			render() {
				return G`${this.renderHeader()}
      <div class="content-body" part="body-region">
        <skyra-survey-options-scroller ?inline=${this.inline} up-label=${this.scrollUpLabel} down-label=${this.scrollDownLabel}>
        <div class="options" data-layout=${this.layout} part="options" role="radiogroup" aria-label=${this.heading}>
          ${this.options.map(
						(t) => G`<skyra-survey-option
            value=${t.id}
            variant="single"
            layout=${this.layout}
            ?selected=${this.selectedValue === t.id}
            ?disabled=${this.disabled || !!t.disabled}
            @skyra-option-select=${this.selectOption}
          >${t.label}</skyra-survey-option>`,
					)}
        </div>
        </skyra-survey-options-scroller>
        ${this.renderError()}
      </div>`;
			}
			selectOption(t) {
				t.detail.value &&
					je(this, "skyra-choice-select", { value: t.detail.value });
			}
		}),
		Zr(Vt.prototype, "options", [wm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Zr(Vt.prototype, "selectedValue", [km], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Zr(Vt.prototype, "layout", [_m], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Zr(Vt.prototype, "disabled", [Sm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Zr(Vt.prototype, "inline", [xm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Zr(Vt.prototype, "scrollUpLabel", [$m], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Zr(Vt.prototype, "scrollDownLabel", [Cm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Vt);
	var zm, Im, Tm, Em, Am, Rm, yr;
	function Un(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let G2 =
		((zm = R({ reflect: !0 })),
		(Im = R({ attribute: "positive-label" })),
		(Tm = R({ attribute: "negative-label" })),
		(Em = R({ attribute: "reply-later-label" })),
		(Am = R({ reflect: !0 })),
		(Rm = R({ type: Boolean, reflect: !0 })),
		(yr = class extends Vr {
			constructor() {
				super(),
					(this.variant = "completion"),
					(this.positiveLabel = "Yes"),
					(this.negativeLabel = "No"),
					(this.replyLaterLabel = ""),
					(this.layout = "horizontal"),
					(this.disabled = !1);
			}
			render() {
				return G`${this.renderHeader()}
      <div
        class="completion-actions"
        data-layout=${this.variant === "findability" ? "horizontal" : this.layout}
        part="actions"
        role="group"
        aria-labelledby="content-heading"
        aria-describedby=${this.body || this.bodyHtml ? "content-body" : ee}
      >
        <skyra-survey-button
          variant="primary"
          ?disabled=${this.disabled}
          @click=${() => this.selectCompletion(!0)}
        >${this.positiveLabel}</skyra-survey-button>
        <div class="completion-secondary-actions">
          <skyra-survey-button
            variant=${this.variant === "findability" ? "primary" : ee}
            ?disabled=${this.disabled}
            @click=${() => this.selectCompletion(!1)}
          >${this.negativeLabel}</skyra-survey-button>
          ${
						this.replyLaterLabel
							? G`<skyra-survey-button
                class="completion-reply-later"
                ?disabled=${this.disabled}
                @click=${this.replyLater}
              >${this.replyLaterLabel}</skyra-survey-button>`
							: ee
					}
        </div>
      </div>
      ${this.renderError()}`;
			}
			selectCompletion(t) {
				je(this, "skyra-completion-select", { value: t });
			}
			replyLater() {
				je(this, "skyra-completion-reply-later", {});
			}
		}),
		Un(yr.prototype, "variant", [zm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Un(yr.prototype, "positiveLabel", [Im], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Un(yr.prototype, "negativeLabel", [Tm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Un(yr.prototype, "replyLaterLabel", [Em], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Un(yr.prototype, "layout", [Am], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Un(yr.prototype, "disabled", [Rm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		yr);
	var Om, Pm, Mm, Lm, Nm, Dm, jm, Bm, Um, Fm, Hm, Vm, Zm, Ze;
	function ot(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let Y2 =
		((Om = R()),
		(Pm = R({ reflect: !0 })),
		(Mm = R()),
		(Lm = R({ reflect: !0 })),
		(Nm = R()),
		(Dm = R()),
		(jm = R()),
		(Bm = R({ attribute: "instruction-invalid", type: Boolean, reflect: !0 })),
		(Um = R({ attribute: "character-count" })),
		(Fm = R({ attribute: "character-count-tone", reflect: !0 })),
		(Hm = R({ attribute: "max-length", type: Number })),
		(Vm = R({ type: Boolean, reflect: !0 })),
		(Zm = R({ type: Boolean, reflect: !0 })),
		(Ze = class extends Vr {
			constructor() {
				super(),
					(this.value = ""),
					(this.label = ""),
					(this.placeholder = ""),
					(this.type = "text"),
					(this.name = ""),
					(this.autocomplete = ""),
					(this.instruction = ""),
					(this.instructionInvalid = !1),
					(this.characterCount = ""),
					(this.characterCountTone = ""),
					(this.maxLength = void 0),
					(this.disabled = !1),
					(this.multiline = !1);
			}
			render() {
				return G`${this.renderHeader()}
      <div class="content-body" part="body-region">
        ${
					this.multiline
						? G`<skyra-survey-textarea
              value=${this.value}
              placeholder=${this.placeholder}
              name=${this.name}
              label=${this.label || this.heading}
              autocomplete=${this.autocomplete}
              .maxLength=${this.maxLength}
              ?invalid=${this.invalid}
              ?disabled=${this.disabled}
              @skyra-input=${this.changeInput}
            ></skyra-survey-textarea>`
						: G`<skyra-survey-input
          value=${this.value}
          placeholder=${this.placeholder}
          type=${this.type}
          name=${this.name}
          label=${this.label || this.heading}
          autocomplete=${this.autocomplete}
          .maxLength=${this.maxLength}
          ?invalid=${this.invalid}
          ?disabled=${this.disabled}
          @skyra-input=${this.changeInput}
        ></skyra-survey-input>`
				}
        ${
					this.instruction || this.characterCount
						? G`<div class="input-feedback" part="feedback">
              ${
								this.instruction
									? G`<span
                    class="input-instruction"
                    part="instruction"
                    role=${this.instructionInvalid ? "alert" : ee}
                    aria-live=${this.instructionInvalid ? "polite" : ee}
                    >${this.instruction}</span
                  >`
									: ee
							}
              ${
								this.characterCount
									? G`<span class="character-count" part="character-count"
                    >${this.characterCount}</span
                  >`
									: ee
							}
            </div>`
						: ee
				}
        ${this.renderError()}
      </div>`;
			}
			changeInput(t) {
				(this.value = t.detail.value),
					je(this, "skyra-input-change", { value: t.detail.value });
			}
		}),
		ot(Ze.prototype, "label", [Om], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ot(Ze.prototype, "value", [Pm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ot(Ze.prototype, "placeholder", [Mm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ot(Ze.prototype, "type", [Lm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ot(Ze.prototype, "name", [Nm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ot(Ze.prototype, "autocomplete", [Dm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ot(Ze.prototype, "instruction", [jm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ot(Ze.prototype, "instructionInvalid", [Bm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ot(Ze.prototype, "characterCount", [Um], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ot(Ze.prototype, "characterCountTone", [Fm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ot(Ze.prototype, "maxLength", [Hm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ot(Ze.prototype, "disabled", [Vm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ot(Ze.prototype, "multiline", [Zm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Ze);
	var qm, Wm, Km, Jm, Fn;
	function Os(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let X2 =
		((qm = R({ attribute: !1 })),
		(Wm = R({ attribute: "selected-value", reflect: !0 })),
		(Km = R({ reflect: !0 })),
		(Jm = R({ type: Boolean, reflect: !0 })),
		(Fn = class extends Vr {
			constructor() {
				super(),
					(this.choices = []),
					(this.selectedValue = ""),
					(this.layout = "vertical"),
					(this.disabled = !1);
			}
			render() {
				const t = Math.max(this.choices.length, 1);
				return G`${this.renderHeader()}
      <div class="content-body" part="body-region">
        <div
          class="options likert-options"
          data-layout=${this.layout}
          part="options"
          role="radiogroup"
          aria-label=${this.heading}
          style=${`--skyra-likert-columns: ${t}`}
        >
          ${this.choices.map(
						(r) => G`<skyra-survey-option
            value=${r.id}
            variant="likert"
            layout=${this.layout}
            emoji=${r.emoji ?? ""}
            ?has-emoji=${!!r.emoji}
            ?selected=${this.selectedValue === r.id}
            ?disabled=${this.disabled || !!r.disabled}
            @skyra-option-select=${this.selectChoice}
          >${r.label}</skyra-survey-option>`,
					)}
        </div>
        ${this.renderError()}
      </div>`;
			}
			selectChoice(t) {
				t.detail.value &&
					je(this, "skyra-likert-select", { value: t.detail.value });
			}
		}),
		Os(Fn.prototype, "choices", [qm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Os(Fn.prototype, "selectedValue", [Wm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Os(Fn.prototype, "layout", [Km], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Os(Fn.prototype, "disabled", [Jm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Fn);
	class Q2 extends Vr {
		render() {
			return G`${this.renderHeader()}${this.renderError()}`;
		}
	}
	var Gm, Ym, Xm, Qm, ey, ty, ry, ny, oy, iy, sy, ay, ly, qe;
	function it(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let eE =
		((Gm = R({ attribute: !1 })),
		(Ym = R({ attribute: !1 })),
		(Xm = R({ reflect: !0 })),
		(Qm = R({ type: Boolean, reflect: !0 })),
		(ey = R({ type: Boolean, reflect: !0 })),
		(ty = R({ type: Number })),
		(ry = R({ type: Number })),
		(ny = R()),
		(oy = R({ attribute: "minimum-label" })),
		(iy = R({ attribute: "maximum-label" })),
		(sy = R({ attribute: "maximum-only-label" })),
		(ay = R({ attribute: "scroll-up-label" })),
		(ly = R({ attribute: "scroll-down-label" })),
		(qe = class extends Vr {
			constructor() {
				super(),
					(this.options = []),
					(this.selectedValues = []),
					(this.layout = "vertical"),
					(this.disabled = !1),
					(this.inline = !1),
					(this.min = 0),
					(this.max = 0),
					(this.instruction = ""),
					(this.minimumLabel = "Minimum"),
					(this.maximumLabel = "Maximum"),
					(this.maximumOnlyLabel = "Maximum"),
					(this.scrollUpLabel = "Scroll up"),
					(this.scrollDownLabel = "Scroll down");
			}
			render() {
				const t = this.max > 0 && this.selectedValues.length >= this.max,
					r =
						this.instruction ||
						(this.min && this.max
							? `${this.minimumLabel} ${this.min}, ${this.maximumLabel} ${this.max}`
							: this.min
								? `${this.minimumLabel} ${this.min}`
								: this.max
									? `${this.maximumOnlyLabel} ${this.max}`
									: ""),
					n = this.error || r;
				return G`${this.renderHeader()}
      <div class="content-body" part="body-region">
        <skyra-survey-options-scroller ?inline=${this.inline} up-label=${this.scrollUpLabel} down-label=${this.scrollDownLabel}>
        <div
          class="options"
          data-layout=${this.layout}
          part="options"
          role="group"
          aria-label=${this.heading}
          aria-invalid=${this.invalid ? "true" : "false"}
          aria-describedby=${n ? "skyra-selection-limits" : ee}
        >
          ${this.options.map((o) => {
						const i = this.selectedValues.includes(o.id);
						return G`<skyra-survey-option
              value=${o.id}
              variant="multi"
              layout=${this.layout}
              shortcut=${o.shortcut ?? ""}
              ?selected=${i}
              ?disabled=${this.disabled || !!o.disabled}
              ?blocked=${t && !i}
              @skyra-option-select=${this.toggleOption}
              @skyra-option-blocked=${this.limitReached}
            >${o.label}</skyra-survey-option>`;
					})}
        </div>
        </skyra-survey-options-scroller>
        ${
					n
						? G`<div
              id="skyra-selection-limits"
              class="selection-limits"
              part="selection-limits"
              role=${this.invalid || this.error ? "alert" : ee}
              aria-live="polite"
              aria-atomic="true"
            >
              <span>${n}</span>
            </div>`
						: null
				}
      </div>`;
			}
			toggleOption(t) {
				const r = t.detail.value;
				if (!r) return;
				const n = !this.selectedValues.includes(r),
					o = n
						? [...this.selectedValues, r]
						: this.selectedValues.filter((i) => i !== r);
				je(this, "skyra-multiselect-toggle", { value: r, selected: n }),
					je(this, "skyra-multiselect-change", { values: o });
			}
			limitReached() {
				je(this, "skyra-multiselect-limit-reached", void 0);
			}
		}),
		it(qe.prototype, "options", [Gm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		it(qe.prototype, "selectedValues", [Ym], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		it(qe.prototype, "layout", [Xm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		it(qe.prototype, "disabled", [Qm], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		it(qe.prototype, "inline", [ey], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		it(qe.prototype, "min", [ty], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		it(qe.prototype, "max", [ry], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		it(qe.prototype, "instruction", [ny], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		it(qe.prototype, "minimumLabel", [oy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		it(qe.prototype, "maximumLabel", [iy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		it(qe.prototype, "maximumOnlyLabel", [sy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		it(qe.prototype, "scrollUpLabel", [ay], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		it(qe.prototype, "scrollDownLabel", [ly], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		qe);
	var uy, du;
	function tE(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let rE =
		((uy = R({ reflect: !0 })),
		(du =
			((Su = class extends ze {
				constructor() {
					super(), (this.tone = "");
				}
				render() {
					return G`<div part="message" role="alert" aria-live="polite"><slot></slot></div>`;
				}
			}),
			W(Su, "styles", Ue(g2)),
			Su)),
		tE(du.prototype, "tone", [uy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		du);
	var cy, pu;
	function nE(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let oE =
		((cy = R()),
		(pu =
			((xu = class extends ze {
				constructor() {
					super(), (this.level = "2");
				}
				render() {
					switch (this.level) {
						case "1":
							return G`<h1 class="heading" part="heading"><slot></slot></h1>`;
						case "3":
							return G`<h3 class="heading" part="heading"><slot></slot></h3>`;
						case "4":
							return G`<h4 class="heading" part="heading"><slot></slot></h4>`;
						case "5":
							return G`<h5 class="heading" part="heading"><slot></slot></h5>`;
						case "6":
							return G`<h6 class="heading" part="heading"><slot></slot></h6>`;
						default:
							return G`<h2 class="heading" part="heading"><slot></slot></h2>`;
					}
				}
			}),
			W(xu, "styles", Ue(Rg)),
			xu)),
		nE(pu.prototype, "level", [cy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		pu); /**
	 * @license
	 * Copyright 2018 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const dy = (e) => e ?? ee;
	var py, fy, hy, gy, my, yy, vy, by, Et;
	function vr(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let wy =
		((py = R({ reflect: !0 })),
		(fy = R()),
		(hy = R()),
		(gy = R()),
		(my = R()),
		(yy = R({ attribute: "max-length", type: Number })),
		(vy = R({ type: Boolean, reflect: !0 })),
		(by = R({ type: Boolean, reflect: !0 })),
		(Et =
			(($u = class extends ze {
				constructor() {
					super(),
						(this.value = ""),
						(this.placeholder = ""),
						(this.name = ""),
						(this.autocomplete = ""),
						(this.label = ""),
						(this.maxLength = void 0),
						(this.disabled = !1),
						(this.invalid = !1);
				}
				emitInput(t) {
					(this.value = t), je(this, "skyra-input", { value: t });
				}
			}),
			W($u, "shadowRootOptions", {
				...ze.shadowRootOptions,
				delegatesFocus: !0,
			}),
			$u)),
		vr(Et.prototype, "value", [py], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		vr(Et.prototype, "placeholder", [fy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		vr(Et.prototype, "name", [hy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		vr(Et.prototype, "autocomplete", [gy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		vr(Et.prototype, "label", [my], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		vr(Et.prototype, "maxLength", [yy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		vr(Et.prototype, "disabled", [vy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		vr(Et.prototype, "invalid", [by], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Et);
	var ky, fu;
	function iE(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let sE =
		((ky = R({ reflect: !0 })),
		(fu =
			((Cu = class extends wy {
				constructor() {
					super(), (this.type = "text");
				}
				render() {
					return G`<input
      part="input"
      type=${this.type}
      name=${this.name}
      autocomplete=${this.autocomplete}
      maxlength=${dy(this.maxLength)}
      .value=${this.value}
      placeholder=${this.placeholder}
      aria-label=${this.label || this.placeholder}
      ?disabled=${this.disabled}
      aria-invalid=${this.invalid ? "true" : "false"}
      @input=${(t) => this.emitInput(t.currentTarget.value)}
    />`;
				}
			}),
			W(Cu, "styles", Ue(tu)),
			Cu)),
		iE(fu.prototype, "type", [ky], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		fu);
	const aE =
		":host(.skyra-ui-host) .language-trigger{display:inline-flex;align-items:center;gap:4px;max-width:160px;min-height:24px;padding:0;border:0;background:transparent;color:var(--skyra-ui-text);font:inherit;font-size:calc(var(--skyra-app-font-unit, 1px) * 12);cursor:pointer}:host(.skyra-ui-host) .language-trigger span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.skyra-ui-host) .language-chevron{width:12px;height:12px;flex:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5}:host(.skyra-ui-host) .language-menu{position:fixed;inset:auto;box-sizing:border-box;margin:0;padding:0;overflow-y:auto;overscroll-behavior:contain;border:1px solid light-dark(color-mix(in srgb,var(--skyra-ui-text) 16%,var(--skyra-ui-secondary)),color-mix(in srgb,var(--skyra-ui-interface) 70%,var(--skyra-ui-secondary)));border-radius:var(--skyra-radius-md, 4px);background:var(--skyra-ui-secondary);box-shadow:var(--skyra-authored-shadow-sm, 0 2px 4px light-dark(rgb(0 0 0 / 8%), rgb(0 0 0 / 35%)), 0 8px 20px light-dark(rgb(0 0 0 / 14%), rgb(0 0 0 / 60%)));color:var(--skyra-ui-text)}:host(.skyra-ui-host) .language-option{display:flex;align-items:center;justify-content:space-between;gap:16px;width:100%;min-height:30px;padding:6px 12px;border:0;border-bottom:1px solid color-mix(in srgb,var(--skyra-ui-text) 10%,transparent);border-radius:0;background:transparent;color:inherit;font:inherit;font-size:calc(var(--skyra-app-font-unit, 1px) * 12);line-height:1.4;text-align:left;cursor:pointer}:host(.skyra-ui-host) .language-option:last-child{border-bottom:0}:host(.skyra-ui-host) .language-name{overflow-wrap:anywhere;text-align:start}:host(.skyra-ui-host) .language-option:hover,:host(.skyra-ui-host) .language-option[aria-selected=true]{background:var(--skyra-ui-language-highlight)}:host(.skyra-ui-host) .language-check{width:12px;height:12px;flex:none;visibility:hidden;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}:host(.skyra-ui-host) .language-option[aria-selected=true] .language-check{visibility:visible}:host(.skyra-ui-host) .language-trigger:focus-visible{outline:var(--skyra-focus-ring-width, 2px) var(--skyra-focus-ring-style, solid) var(--skyra-ui-focus);outline-offset:2px}:host(.skyra-ui-host) .language-option:focus-visible{outline:none;background:var(--skyra-ui-action);color:var(--skyra-ui-action-text)}@media(forced-colors:active){:host(.skyra-ui-host) .language-option:focus-visible{outline:2px solid Highlight;outline-offset:-2px}}";
	var _y, Sy, xy, $y, Cy, qr;
	function ri(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let lE =
		((_y = R({ type: Boolean, reflect: !0 })),
		(Sy = R()),
		(xy = R({ reflect: !0 })),
		($y = R()),
		(Cy = B2()),
		(qr =
			((Bs = class extends ze {
				constructor() {
					super();
					W(this, "positionMenu", (r) => {
						var w;
						const n = this.menu,
							o = this.trigger;
						if (
							!n ||
							!o ||
							!n.matches(":popover-open") ||
							(r != null && r.composedPath().includes(n))
						)
							return;
						const i = o.getBoundingClientRect(),
							s = 8,
							a = Math.max(0, window.innerWidth - s * 2),
							l = Math.max(0, window.innerHeight - s * 2);
						(n.style.maxWidth = `${a}px`),
							(n.style.maxHeight = `${l}px`),
							(n.style.width = "max-content");
						const u = Math.min(Math.max(168, i.width, n.offsetWidth), a);
						(n.style.width = `${u}px`),
							(n.style.left = "0px"),
							(n.style.top = "0px"),
							(n.scrollTop = 0);
						const d = n.querySelector('[aria-selected="true"]'),
							c = d == null ? void 0 : d.querySelector(".language-name"),
							f =
								((w = o.querySelector("span")) == null
									? void 0
									: w.getBoundingClientRect()) ?? i,
							p = n.getBoundingClientRect(),
							h = (c == null ? void 0 : c.getBoundingClientRect()) ?? p,
							g = f.top + f.height / 2,
							y = h.top + h.height / 2 - p.top,
							v = Math.max(
								s,
								Math.min(g - y, window.innerHeight - p.height - s),
							),
							b = f.left - (h.left - p.left);
						(n.style.left = `${Math.max(s, Math.min(b, window.innerWidth - u - s))}px`),
							(n.style.top = `${v}px`),
							(n.scrollTop = Math.max(0, y - (g - v)));
					});
					(this.disabled = !1),
						(this.languages = ""),
						(this.value = ""),
						(this.label = "Language"),
						(this.open = !1);
				}
				render() {
					const r = uE(this.languages),
						n = r.find((o) => o.code === this.value) ?? r[0];
					return G`<button class="language-trigger" part="select" type="button"
      aria-label=${`${this.label}: ${(n == null ? void 0 : n.name) ?? ""}`} aria-haspopup="listbox"
      aria-expanded=${this.open ? "true" : "false"} aria-controls="language-options" popovertarget="language-options" ?disabled=${this.disabled}
      @click=${this.toggleMenu} @keydown=${this.triggerKeydown} @keyup=${this.stopAnswerShortcut}>
      <span>${(n == null ? void 0 : n.name) ?? ""}</span>
      <svg class="language-chevron" part="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
    </button>
    <div id="language-options" class="language-menu" part="menu" popover="auto" role="listbox" aria-label=${this.label}
      @toggle=${this.menuToggle} @keydown=${this.menuKeydown} @keyup=${this.stopAnswerShortcut}>
      ${r.map(
				(o) => G`<button type="button" class="language-option" role="option"
        aria-selected=${o.code === (n == null ? void 0 : n.code) ? "true" : "false"} tabindex="-1"
        data-code=${o.code} @click=${this.chooseLanguage}>
        <span class="language-name">${o.name}</span>
        <svg class="language-check" viewBox="0 0 16 16" fill="none" stroke="currentColor" aria-hidden="true"><path d="m3 8 3 3 7-7" /></svg>
      </button>`,
			)}
    </div>`;
				}
				get menu() {
					return this.renderRoot.querySelector(".language-menu");
				}
				get trigger() {
					return this.renderRoot.querySelector(".language-trigger");
				}
				connectedCallback() {
					super.connectedCallback(),
						window.addEventListener("resize", this.positionMenu),
						window.addEventListener("scroll", this.positionMenu, !0);
				}
				disconnectedCallback() {
					window.removeEventListener("resize", this.positionMenu),
						window.removeEventListener("scroll", this.positionMenu, !0),
						super.disconnectedCallback();
				}
				toggleMenu(r) {
					var n;
					r.preventDefault(),
						(n = this.menu) != null && n.matches(":popover-open")
							? this.closeMenu(!0)
							: this.openMenu();
				}
				openMenu(r = !1) {
					if (this.disabled || !this.menu || this.menu.matches(":popover-open"))
						return;
					this.menu.showPopover(), this.positionMenu();
					const n = this.options(),
						i =
							n.find((s) => s.dataset.code === this.value) ??
							(r ? n.at(-1) : n[0]);
					i == null || i.focus({ preventScroll: !0 });
				}
				closeMenu(r) {
					var n, o;
					(n = this.menu) != null &&
						n.matches(":popover-open") &&
						this.menu.hidePopover(),
						r && ((o = this.trigger) == null || o.focus());
				}
				menuToggle() {
					var r;
					this.open = !!((r = this.menu) != null && r.matches(":popover-open"));
				}
				options() {
					return Array.from(
						this.renderRoot.querySelectorAll(".language-option"),
					);
				}
				triggerKeydown(r) {
					(r.key === "ArrowDown" || r.key === "ArrowUp") &&
						(r.preventDefault(), this.openMenu(r.key === "ArrowUp"));
				}
				stopAnswerShortcut(r) {
					r.stopPropagation();
				}
				menuKeydown(r) {
					var s, a;
					if (r.key === "Escape") {
						r.preventDefault(), this.closeMenu(!0);
						return;
					}
					if (r.key === "Tab") {
						this.closeMenu(!0);
						return;
					}
					const n = this.options(),
						o = n.indexOf(
							(s = this.shadowRoot) == null ? void 0 : s.activeElement,
						);
					let i = o;
					if (r.key === "ArrowDown") i = (o + 1) % n.length;
					else if (r.key === "ArrowUp") i = (o - 1 + n.length) % n.length;
					else if (r.key === "Home") i = 0;
					else if (r.key === "End") i = n.length - 1;
					else if (
						r.key.length === 1 &&
						!r.ctrlKey &&
						!r.metaKey &&
						!r.altKey &&
						r.key !== " "
					) {
						const l = r.key.toLocaleLowerCase();
						i = n.findIndex((u) => {
							var d;
							return (d = u.textContent) == null
								? void 0
								: d.trim().toLocaleLowerCase().startsWith(l);
						});
					} else return;
					r.preventDefault(), (a = n[i]) == null || a.focus();
				}
				chooseLanguage(r) {
					const n = r.currentTarget.dataset.code;
					n &&
						(this.closeMenu(!0),
						n !== this.value &&
							((this.value = n),
							je(this, "skyra-language-change", { language: n })));
				}
			}),
			W(
				Bs,
				"styles",
				Ue(`${tu}
${aE}`),
			),
			W(Bs, "shadowRootOptions", {
				...ze.shadowRootOptions,
				delegatesFocus: !0,
			}),
			Bs)),
		ri(qr.prototype, "disabled", [_y], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ri(qr.prototype, "languages", [Sy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ri(qr.prototype, "value", [xy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ri(qr.prototype, "label", [$y], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ri(qr.prototype, "open", [Cy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		qr);
	function uE(e) {
		return e
			? e.split(",").flatMap((t) => {
					const [r, n] = t.split(":");
					return !r || !n ? [] : [{ code: r.trim(), name: n.trim() }];
				})
			: [
					{ code: "en", name: "English" },
					{ code: "no", name: "Norsk bokmål" },
					{ code: "nn", name: "Norsk nynorsk" },
				];
	}
	var zy, Iy, Ty, Ey, Ay, Ry, Oy, Py, My, gt;
	function Zt(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let cE =
		((zy = R()),
		(Iy = R({ reflect: !0 })),
		(Ty = R({ reflect: !0 })),
		(Ey = R()),
		(Ay = R()),
		(Ry = R({ attribute: "has-emoji", type: Boolean, reflect: !0 })),
		(Oy = R({ type: Boolean, reflect: !0 })),
		(Py = R({ type: Boolean, reflect: !0 })),
		(My = R({ type: Boolean, reflect: !0 })),
		(gt =
			((Us = class extends ze {
				constructor() {
					super(),
						(this.value = ""),
						(this.variant = "single"),
						(this.layout = "vertical"),
						(this.shortcut = ""),
						(this.emoji = ""),
						(this.hasEmoji = !1),
						(this.selected = !1),
						(this.disabled = !1),
						(this.blocked = !1);
				}
				render() {
					return G`<button
      part="option"
      type="button"
      data-render-region="option"
      role=${this.variant === "multi" ? "checkbox" : "radio"}
      aria-checked=${this.selected ? "true" : "false"}
      aria-disabled=${this.blocked ? "true" : ee}
      aria-keyshortcuts=${this.shortcut || ee}
      ?disabled=${this.disabled}
      @click=${this.select}
    >
      ${this.renderPrefix()}
      <span class=${this.variant === "likert" ? "likert-label" : ""} part="label"><slot></slot></span>
      ${this.shortcut ? G`<kbd class="shortcut" part="shortcut">${this.shortcut}</kbd>` : null}
    </button>`;
				}
				renderPrefix() {
					return this.variant === "multi"
						? G`<span class="checkbox" part="checkbox" data-checked=${this.selected ? "true" : "false"}>
        ${this.selected ? G`<svg class="checkbox-check" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 12 4 4 8-9" /></svg>` : null}
      </span>`
						: this.variant === "likert"
							? G`${this.emoji ? G`<span class="emoji" part="emoji" aria-hidden="true">${this.emoji}</span>` : null}${this.emoji ? null : G`<span class="radio-mark" part="radio" aria-hidden="true"></span>`}`
							: null;
				}
				select() {
					if (!this.disabled) {
						if (this.blocked) {
							je(this, "skyra-option-blocked", { value: this.value || null });
							return;
						}
						je(this, "skyra-option-select", {
							value: this.value || null,
							selected: this.selected,
						});
					}
				}
			}),
			W(Us, "styles", Ue(m2)),
			W(Us, "shadowRootOptions", {
				...ze.shadowRootOptions,
				delegatesFocus: !0,
			}),
			Us)),
		Zt(gt.prototype, "value", [zy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Zt(gt.prototype, "variant", [Iy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Zt(gt.prototype, "layout", [Ty], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Zt(gt.prototype, "shortcut", [Ey], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Zt(gt.prototype, "emoji", [Ay], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Zt(gt.prototype, "hasEmoji", [Ry], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Zt(gt.prototype, "selected", [Oy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Zt(gt.prototype, "disabled", [Py], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Zt(gt.prototype, "blocked", [My], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		gt);
	const dE =
		":host(.skyra-ui-host){display:block;position:relative}:host(.skyra-ui-host) .scroll-content{max-height:var(--skyra-app-scroll-height, min(var(--skyra-option-list-max-height, 400px), 35vh));overflow-y:auto;scrollbar-color:var(--skyra-ui-soft-border) transparent;scrollbar-width:thin}:host([inline]) .scroll-content{max-height:none;overflow:visible}:host(.skyra-ui-host) .scroll-control{position:absolute;z-index:1;display:grid;width:100%;height:28px;place-items:center;border:0;color:var(--skyra-ui-text);cursor:pointer}:host(.skyra-ui-host) .scroll-control svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}:host(.skyra-ui-host) .scroll-up{top:0;background:linear-gradient(to bottom,var(--skyra-ui-option-scroll-fade) 42%,transparent)}:host(.skyra-ui-host) .scroll-down{right:0;bottom:0;background:linear-gradient(to top,var(--skyra-ui-option-scroll-fade) 42%,transparent)}:host([inline]) .scroll-control,:host(:not([data-scrollable])) .scroll-control,:host([data-at-top]) .scroll-up,:host([data-at-bottom]) .scroll-down{display:none}:host(.skyra-ui-host) .scroll-control:focus-visible{outline:var(--skyra-focus-ring-width, 2px) var(--skyra-focus-ring-style, solid) var(--skyra-ui-focus);outline-offset:-2px}@media(min-width:1024px){:host(.skyra-ui-host) .scroll-content{max-height:var(--skyra-app-scroll-height, clamp(20vh, var(--skyra-option-list-max-height, 400px), 35vh))}}";
	var Ly, Ny, Dy, jy, By, Uy, br;
	function Hn(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let pE =
		((Ly = R({ type: Boolean, reflect: !0 })),
		(Ny = R({ type: Boolean, reflect: !0, attribute: "data-scrollable" })),
		(Dy = R({ type: Boolean, reflect: !0, attribute: "data-at-top" })),
		(jy = R({ type: Boolean, reflect: !0, attribute: "data-at-bottom" })),
		(By = R({ attribute: "up-label" })),
		(Uy = R({ attribute: "down-label" })),
		(br =
			((zu = class extends ze {
				constructor() {
					super();
					W(this, "resizeObserver");
					W(this, "updateScrollState", () => {
						const r = this.viewport;
						if (!r || this.inline) {
							(this.scrollable = !1), (this.atTop = !0), (this.atBottom = !0);
							return;
						}
						(this.scrollable = r.scrollHeight > r.clientHeight + 1),
							(this.atTop = r.scrollTop <= 1),
							(this.atBottom =
								r.scrollTop + r.clientHeight >= r.scrollHeight - 1);
					});
					(this.inline = !1),
						(this.scrollable = !1),
						(this.atTop = !0),
						(this.atBottom = !0),
						(this.upLabel = "Scroll up"),
						(this.downLabel = "Scroll down");
				}
				firstUpdated() {
					const r = this.viewport;
					r &&
						(r.addEventListener("scroll", this.updateScrollState, {
							passive: !0,
						}),
						(this.resizeObserver = new ResizeObserver(this.updateScrollState)),
						this.resizeObserver.observe(r),
						this.updateScrollState());
				}
				disconnectedCallback() {
					var r, n;
					(r = this.resizeObserver) == null || r.disconnect(),
						(n = this.viewport) == null ||
							n.removeEventListener("scroll", this.updateScrollState),
						super.disconnectedCallback();
				}
				render() {
					return G`
      <button class="scroll-control scroll-up" type="button" aria-label=${this.upLabel} @click=${this.scrollUp}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 14 6-6 6 6" /></svg>
      </button>
      <div class="scroll-content"><slot @slotchange=${this.updateScrollState}></slot></div>
      <button class="scroll-control scroll-down" type="button" aria-label=${this.downLabel} @click=${this.scrollDown}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 10 6 6 6-6" /></svg>
      </button>
    `;
				}
				get viewport() {
					return this.renderRoot.querySelector(".scroll-content");
				}
				scrollUp() {
					this.scrollOptionsBy(-1);
				}
				scrollDown() {
					this.scrollOptionsBy(1);
				}
				scrollOptionsBy(r) {
					const n = this.viewport;
					n &&
						n.scrollBy({
							top: r * Math.max(n.clientHeight * 0.75, 72),
							behavior: "smooth",
						});
				}
			}),
			W(zu, "styles", Ue(dE)),
			zu)),
		Hn(br.prototype, "inline", [Ly], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Hn(br.prototype, "scrollable", [Ny], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Hn(br.prototype, "atTop", [Dy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Hn(br.prototype, "atBottom", [jy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Hn(br.prototype, "upLabel", [By], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		Hn(br.prototype, "downLabel", [Uy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		br);
	class hu extends ze {
		render() {
			return G`<button part="pill" type="button">
      <span part="label"><slot></slot></span>
      <svg part="icon" class="icon" width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M15.084 3.5H21.084V9.5" class="icon-stroke" />
        <path d="M9.08398 21.5H3.08398V15.5" class="icon-stroke" />
        <path d="M21.084 3.5L14.084 10.5" class="icon-stroke" />
        <path d="M3.08398 21.5L10.084 14.5" class="icon-stroke" />
      </svg>
    </button>`;
		}
	}
	W(hu, "styles", Ue(y2)),
		W(hu, "shadowRootOptions", { ...ze.shadowRootOptions, delegatesFocus: !0 });
	class Fy extends wy {
		render() {
			return G`<textarea
      part="textarea"
      name=${this.name}
      autocomplete=${this.autocomplete}
      maxlength=${dy(this.maxLength)}
      .value=${this.value}
      placeholder=${this.placeholder}
      aria-label=${this.label || this.placeholder}
      ?disabled=${this.disabled}
      aria-invalid=${this.invalid ? "true" : "false"}
      @input=${(t) => this.emitInput(t.currentTarget.value)}
    ></textarea>`;
		}
	}
	W(Fy, "styles", Ue(tu));
	var Hy, Vy, Zy, ni;
	function gu(e, t, r, n, o) {
		var i = {};
		return (
			Object.keys(n).forEach(function (s) {
				i[s] = n[s];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = r
				.slice()
				.reverse()
				.reduce(function (s, a) {
					return a(e, t, s) || s;
				}, i)),
			i.initializer === void 0 ? (Object.defineProperty(e, t, i), null) : i
		);
	}
	let fE =
		((Hy = R({ attribute: !1 })),
		(Vy = R({ attribute: !1 })),
		(Zy = R({ type: Boolean, reflect: !0 })),
		(ni =
			((Iu = class extends Vr {
				constructor() {
					super(), (this.fields = {}), (this.value = {}), (this.disabled = !1);
				}
				render() {
					const { fields: t, value: r } = this;
					return G`${this.renderHeader()}
      <div class="content-body" part="body-region">
        <div class="fields">
          ${t.name ? this.renderInput("name", t.nameLabel ?? "Name", t.namePlaceholder, "text", "name") : ee}
          ${t.email ? this.renderInput("email", t.emailLabel ?? "Email", t.emailPlaceholder, "email", "email") : ee}
          ${t.phone ? this.renderInput("phone", t.phoneLabel ?? "Phone", t.phonePlaceholder, "tel", "tel") : ee}
          ${t.consent ? this.renderConsent(r.consented ?? !1) : ee}
          ${this.renderError()}
        </div>
      </div>`;
				}
				renderInput(t, r, n, o, i) {
					return G`<label class="field">
      <span class="label">${r}</span>
      <skyra-survey-input ?disabled=${this.disabled} name=${t} label=${r} type=${o} autocomplete=${i} placeholder=${n ?? ""} value=${this.value[t] ?? ""} ?invalid=${this.invalid && t === "email"} @skyra-input=${(s) => this.changeValue(t, s.detail.value)}></skyra-survey-input>
    </label>`;
				}
				renderConsent(t) {
					const { fields: r } = this;
					return G`<div class="consent-section">
      ${r.consentTermsText || r.consentTermsUrl ? G`<p class="terms">${r.consentTermsText ?? ""}${r.consentTermsUrl ? G` <a href=${r.consentTermsUrl} target="_blank" rel="noopener noreferrer">${r.consentTermsTitle ?? r.consentTermsUrl}</a>` : ee}</p>` : ee}
      <label class="consent"><input type="checkbox" ?disabled=${this.disabled} .checked=${t} @change=${this.changeConsent} /><span>${r.consentLabel ?? "I agree to be contacted"}</span></label>
    </div>`;
				}
				changeValue(t, r) {
					this.disabled ||
						((this.value = { ...this.value, [t]: r }),
						je(this, "skyra-recruitment-change", { value: this.value }));
				}
				changeConsent(t) {
					this.disabled ||
						((this.value = {
							...this.value,
							consented: t.currentTarget.checked,
						}),
						je(this, "skyra-recruitment-change", { value: this.value }));
				}
			}),
			W(
				Iu,
				"styles",
				Ue(`${fm}
${v2}`),
			),
			Iu)),
		gu(ni.prototype, "fields", [Hy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		gu(ni.prototype, "value", [Vy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		gu(ni.prototype, "disabled", [Zy], {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			initializer: null,
		}),
		ni);
	const hE = [
		["skyra-survey-actions", U2],
		["skyra-survey-card", H2],
		["skyra-survey-chrome", V2],
		["skyra-survey-heading", oE],
		["skyra-survey-body", Jg],
		["skyra-survey-option", cE],
		["skyra-survey-options-scroller", pE],
		["skyra-survey-button", F2],
		["skyra-survey-input", sE],
		["skyra-survey-textarea", Fy],
		["skyra-survey-error", rE],
		["skyra-survey-pill", hu],
		["skyra-survey-language-select", lE],
		["skyra-survey-message-content", Q2],
		["skyra-survey-input-content", Y2],
		["skyra-survey-choice-content", J2],
		["skyra-survey-multiselect-content", eE],
		["skyra-survey-likert-content", X2],
		["skyra-survey-completion-content", G2],
		["skyra-survey-recruitment-content", fE],
	];
	function qy(e = customElements) {
		for (const [t, r] of hE)
			if (!e.get(t)) {
				const n = r.prototype.connectedCallback;
				e.define(
					t,
					class extends r {
						connectedCallback() {
							n == null || n.call(this), this.classList.add("skyra-ui-host");
						}
					},
				);
			}
	}
	qy(), qy();
	function At({
		card: e,
		children: t,
		chrome: r,
		showHeader: n = !0,
		inline: o = !1,
	}) {
		const i = Se(null),
			s = Se(null);
		return (
			Re(() => {
				var c;
				(c = i.current) == null ||
					c.toggleAttribute(
						"has-language-picker",
						r.enabledLanguages.length > 1,
					);
				const a = s.current;
				if (!a) return;
				(a.languages = r.enabledLanguages.map(({ code: f, name: p }) => ({
					code: f,
					name: p,
				}))),
					(a.showMinimize = r.showMinimizeButton),
					(a.showClose = r.showCloseButton);
				const l = (f) => r.onLanguageChange(f.detail.language),
					u = () => r.onMinimize(),
					d = () => r.onClose();
				return (
					a.addEventListener("skyra-language-change", l),
					a.addEventListener("skyra-minimize", u),
					a.addEventListener("skyra-close", d),
					() => {
						a.removeEventListener("skyra-language-change", l),
							a.removeEventListener("skyra-minimize", u),
							a.removeEventListener("skyra-close", d);
					}
				);
			}, [r]),
			k("skyra-survey-card", {
				ref: i,
				mode: o ? "inline" : "popup",
				children: [
					k("skyra-survey-chrome", {
						ref: s,
						className: "chrome",
						slot: "chrome",
						value: r.currentLanguage,
						"language-label": r.languageLabel,
						"minimize-label": r.minimizeLabel,
						"close-label": r.closeLabel,
					}),
					n
						? k("skyra-survey-message-content", {
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
	const Wy = {
		en: { up: "Scroll up", down: "Scroll down" },
		no: { up: "Rull opp", down: "Rull ned" },
		nn: { up: "Rull opp", down: "Rull ned" },
		sv: { up: "Rulla upp", down: "Rulla ned" },
		de: { up: "Nach oben scrollen", down: "Nach unten scrollen" },
		pt: { up: "Rolar para cima", down: "Rolar para baixo" },
	};
	function Ps(e) {
		return Wy[e ?? "en"] ?? Wy.en;
	}
	function mt(e, t, r) {
		Re(() => {
			const n = e.current;
			if (!n) return;
			const o = (i) => r(i.detail);
			return n.addEventListener(t, o), () => n.removeEventListener(t, o);
		}, [r, t, e]);
	}
	function wr(e, t, r) {
		Cv(() => {
			const n = e.current;
			n && (n[t] = r);
		}, [t, e, r]);
	}
	function gE({ card: e, chrome: t, next: r, survey: n, texts: o }) {
		const i = Se(null);
		return (
			mt(i, "skyra-completion-select", ({ value: s }) => r(s)),
			mt(i, "skyra-completion-reply-later", () => t.onMinimize()),
			k(At, {
				card: e,
				chrome: t,
				inline: n.renderType === "Inline",
				showHeader: !1,
				children: k("skyra-survey-completion-content", {
					ref: i,
					heading: e.name,
					body: e.body ?? "",
					"body-html": e.bodyHtml ?? "",
					"positive-label": e.positive,
					"negative-label": e.negative,
					"reply-later-label":
						n.renderType === "Inline" ? void 0 : o.replyLater,
					layout: e.optionsLayout === "vertical" ? "vertical" : "horizontal",
				}),
			})
		);
	}
	function mE({ card: e, chrome: t, next: r, survey: n }) {
		const o = Se(null);
		return (
			mt(o, "skyra-completion-select", ({ value: i }) => r(i)),
			k(At, {
				card: e,
				chrome: t,
				inline: n.renderType === "Inline",
				showHeader: !1,
				children: k("skyra-survey-completion-content", {
					ref: o,
					variant: "findability",
					heading: e.name,
					body: e.body ?? "",
					"body-html": e.bodyHtml ?? "",
					"positive-label": e.positive,
					"negative-label": e.negative,
				}),
			})
		);
	}
	function Ky(e) {
		var t,
			r,
			n = "";
		if (typeof e == "string" || typeof e == "number") n += e;
		else if (typeof e == "object")
			if (Array.isArray(e)) {
				var o = e.length;
				for (t = 0; t < o; t++)
					e[t] && (r = Ky(e[t])) && (n && (n += " "), (n += r));
			} else for (r in e) e[r] && (n && (n += " "), (n += r));
		return n;
	}
	function yE() {
		for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
			(e = arguments[r]) && (t = Ky(e)) && (n && (n += " "), (n += t));
		return n;
	}
	const Jy = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
		Gy = yE,
		Ms = (e, t) => (r) => {
			var n;
			if ((t == null ? void 0 : t.variants) == null)
				return Gy(
					e,
					r == null ? void 0 : r.class,
					r == null ? void 0 : r.className,
				);
			const { variants: o, defaultVariants: i } = t,
				s = Object.keys(o).map((u) => {
					const d = r == null ? void 0 : r[u],
						c = i == null ? void 0 : i[u];
					if (d === null) return null;
					const f = Jy(d) || Jy(c);
					return o[u][f];
				}),
				a =
					r &&
					Object.entries(r).reduce((u, d) => {
						let [c, f] = d;
						return f === void 0 || (u[c] = f), u;
					}, {}),
				l =
					t == null || (n = t.compoundVariants) === null || n === void 0
						? void 0
						: n.reduce((u, d) => {
								let { class: c, className: f, ...p } = d;
								return Object.entries(p).every((h) => {
									let [g, y] = h;
									return Array.isArray(y)
										? y.includes({ ...i, ...a }[g])
										: { ...i, ...a }[g] === y;
								})
									? [...u, c, f]
									: u;
							}, []);
			return Gy(
				e,
				s,
				l,
				r == null ? void 0 : r.class,
				r == null ? void 0 : r.className,
			);
		};
	function Yy({ label: e, placeholder: t, heading: r, usePlaceholder: n }) {
		return (
			(n ? (t == null ? void 0 : t.trim()) : e == null ? void 0 : e.trim()) ||
			(e == null ? void 0 : e.trim()) ||
			r
		);
	}
	const Xy = Ms(
		`
  skyra-input rounded-sm
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
	function Qy(e) {
		return e
			? {
					onKeyDown: (t) => {
						t.key === "Enter" && t.metaKey && e && e();
					},
				}
			: {};
	}
	function Ls({
		label: e,
		labelHidden: t = !1,
		className: r,
		metaEnter: n,
		style: o,
		...i
	}) {
		return k("label", {
			class: "flex flex-col gap-1",
			children: [
				k("span", {
					className: t ? "sr-only" : "font-bold text-xs",
					children: e,
				}),
				k("input", {
					className: Xy({ className: r }),
					style: {
						borderRadius: "var(--skyra-radius-md, var(--skyra-radius-lg, 4px))",
						...(typeof o == "object" ? o : {}),
					},
					...Qy(n),
					...i,
				}),
			],
		});
	}
	const vE = ({
		label: e,
		labelHidden: t = !1,
		className: r,
		metaEnter: n,
		style: o,
		...i
	}) =>
		k("label", {
			class: "flex flex-col gap-1",
			children: [
				k("span", {
					className: t ? "sr-only" : "font-bold text-xs",
					children: e,
				}),
				k("textarea", {
					className: Xy({ className: r }),
					style: {
						borderRadius: "var(--skyra-radius-md, var(--skyra-radius-lg, 4px))",
						...(typeof o == "object" ? o : {}),
					},
					...Qy(n),
					...i,
				}),
			],
		});
	function bE({
		card: e,
		chrome: t,
		firstCard: r,
		next: n,
		prev: o,
		storedValue: i,
		survey: s,
		texts: a,
	}) {
		const [l, u] = Fe(typeof i == "string" ? i : ""),
			[d, c] = Fe(!1),
			f = pr(),
			p = Nn(),
			h = Se(null);
		mt(h, "skyra-input-change", ({ value: T }) => u(T));
		const g = Yf({
				content: l,
				card: {
					minLength: e.minLength ?? 0,
					maxLength: e.maxLength ?? void 0,
					validations: e.validations ?? [],
				},
				hasBeenTouched: d,
				language: p,
			}),
			y = e.maxLength ?? void 0,
			v =
				(e.minLength ?? 0) > 0
					? Wf({ min: e.minLength ?? 0, max: y, language: p })
					: null,
			b = d && g.status === "under-minimum",
			w = d && !g.valid && g.status !== "under-minimum";
		function S() {
			c(!0), (f.value = g.valid), g.valid && n(l);
		}
		return k(At, {
			card: e,
			chrome: t,
			inline: s.renderType === "Inline",
			showHeader: !1,
			children: [
				k("skyra-survey-input-content", {
					ref: h,
					heading: e.name,
					label: Yy({
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
					"instruction-invalid": b,
					"character-count": typeof y == "number" ? `${l.length}/${y}` : "",
					"character-count-tone": zl(l.length, y) ?? "",
					"max-length": y,
					error: w ? g.errorMessage : "",
				}),
				k("skyra-survey-actions", {
					align: r ? "end" : "between",
					children: [
						!r && k("skyra-survey-button", { onClick: o, children: a.back }),
						k("skyra-survey-button", {
							variant: "primary",
							onClick: S,
							children: a.next,
						}),
					],
				}),
			],
		});
	}
	function wE({
		card: e,
		chrome: t,
		firstCard: r,
		prev: n,
		storedValue: o,
		survey: i,
		texts: s,
		next: a,
	}) {
		var p;
		const l = "likertItems" in e.likertScale ? e.likertScale.likertItems : [],
			u =
				typeof o == "string"
					? (p = l.find((h) => h.id === o || Ce(h.id) === o)) == null
						? void 0
						: p.id
					: void 0,
			[d, c] = Fe(u),
			f = Se(null);
		return (
			wr(
				f,
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
			mt(f, "skyra-likert-select", ({ value: h }) => {
				c(h), a(h, e.id);
			}),
			Re(() => c(u), [u]),
			k(At, {
				card: e,
				chrome: t,
				inline: i.renderType === "Inline",
				showHeader: !1,
				children: [
					k("skyra-survey-likert-content", {
						ref: f,
						heading: e.name,
						body: e.body ?? "",
						"body-html": e.bodyHtml ?? "",
						"selected-value": d ?? "",
						layout:
							e.optionsLayout === "horizontal" ? "horizontal" : "vertical",
					}),
					!r &&
						k("skyra-survey-actions", {
							children: k("skyra-survey-button", {
								onClick: n,
								children: s.back,
							}),
						}),
				],
			})
		);
	}
	function kE({
		card: e,
		chrome: t,
		finalCard: r,
		firstCard: n,
		next: o,
		prev: i,
		survey: s,
		texts: a,
	}) {
		const l = oh(s, e, { firstCard: n, finalCard: r }),
			u = !l && !n;
		return k(At, {
			card: e,
			chrome: t,
			inline: s.renderType === "Inline",
			children: k("skyra-survey-actions", {
				align: l || u ? "between" : "end",
				children: [
					l
						? k("skyra-survey-button", { onClick: t.onClose, children: l })
						: u
							? k("skyra-survey-button", { onClick: i, children: a.back })
							: null,
					k("skyra-survey-button", {
						variant: "primary",
						onClick: () => o(),
						children: a.next,
					}),
				],
			}),
		});
	}
	const ev = "ABCDEFGHJKMNPQRSTVWXYZ".split(""),
		tv = {
			en: { min: "Select at least", max: "max", maxOnly: "Max" },
			pt: { min: "Selecione pelo menos", max: "máx.", maxOnly: "Máx." },
			de: { min: "Wählen Sie mindestens", max: "max.", maxOnly: "Max." },
			no: { min: "Velg minst", max: "maks", maxOnly: "Maks" },
			nn: { min: "Vel minst", max: "maks", maxOnly: "Maks" },
			sv: { min: "Välj minst", max: "max", maxOnly: "Max" },
		};
	function _E({
		card: e,
		chrome: t,
		firstCard: r,
		next: n,
		prev: o,
		sessionId: i,
		storedValue: s,
		survey: a,
		texts: l,
	}) {
		const u = e.randomize ? ss(e.selectItems, i) : e.selectItems,
			[d, c] = Fe(
				Array.isArray(s)
					? s
							.filter((_) => typeof _ == "string")
							.map((_) => {
								var A;
								return (A = u.find((F) => F.id === _ || Ce(F.id) === _)) == null
									? void 0
									: A.id;
							})
							.filter((_) => !!_)
					: [],
			),
			[f, p] = Fe(!1),
			[h, g] = Fe(!1),
			y = pr(),
			v = Nn(),
			b = tv[v ?? "en"] ?? tv.en,
			w = Ps(v),
			S = Se(null);
		wr(
			S,
			"options",
			u.map((_, A) => ({ id: _.id, label: _.label, shortcut: ev[A] })),
		),
			wr(S, "selectedValues", d),
			mt(S, "skyra-multiselect-change", ({ values: _ }) => {
				g(!1), c(_);
			}),
			mt(S, "skyra-multiselect-limit-reached", () => {
				g(!0);
			});
		const T = os({
				selectedCount: d.length,
				card: { min: e.min ?? void 0, max: e.max ?? void 0 },
				hasBeenSubmitted: f,
				language: v,
			}),
			O = h || T.status === "over-max" || (f && !T.valid),
			N = Jf({
				min: e.min ?? void 0,
				max: e.max ?? void 0,
				totalOptions: u.length,
				language: v,
			}),
			D =
				h && e.max
					? Kf({ max: e.max, language: v })
					: O
						? T.errorMessage
						: null,
			I = rc(
				(_) => {
					if (_.defaultPrevented || _.altKey || _.ctrlKey || _.metaKey) return;
					const A = _.target;
					if (
						A instanceof HTMLInputElement ||
						A instanceof HTMLTextAreaElement ||
						A instanceof HTMLSelectElement
					)
						return;
					const F = ev.indexOf(_.key.toUpperCase());
					if (F < 0 || F >= u.length) return;
					const re = u[F].id,
						ie = rh({ selectedValues: d, value: re, max: e.max ?? void 0 });
					if (ie.limitReached) {
						g(!0);
						return;
					}
					g(!1), c(ie.values);
				},
				[e.max, u, d],
			);
		Re(() => {
			var A;
			const _ = (A = S.current) == null ? void 0 : A.closest(".beta-wrapper");
			if (_)
				return (
					_.addEventListener("keyup", I),
					() => _.removeEventListener("keyup", I)
				);
		}, [I]);
		function P() {
			const _ = os({
				selectedCount: d.length,
				card: { min: e.min ?? void 0, max: e.max ?? void 0 },
				hasBeenSubmitted: !0,
				language: v,
			});
			p(!0), (y.value = _.valid), _.valid && n(d);
		}
		return k(At, {
			card: e,
			chrome: t,
			inline: a.renderType === "Inline",
			showHeader: !1,
			children: [
				k("skyra-survey-multiselect-content", {
					ref: S,
					heading: e.name,
					body: e.body ?? "",
					"body-html": e.bodyHtml ?? "",
					layout: e.optionsLayout === "horizontal" ? "horizontal" : "vertical",
					inline: a.renderType === "Inline",
					min: e.min ?? 0,
					max: e.max ?? 0,
					instruction: N ?? "",
					"minimum-label": b.min,
					"maximum-label": b.max,
					"maximum-only-label": b.maxOnly,
					"scroll-up-label": w.up,
					"scroll-down-label": w.down,
					invalid: O,
					error: D ?? "",
				}),
				k("skyra-survey-actions", {
					align: r ? "end" : "between",
					children: [
						!r && k("skyra-survey-button", { onClick: o, children: l.back }),
						k("skyra-survey-button", {
							variant: "primary",
							onClick: P,
							children: l.next,
						}),
					],
				}),
			],
		});
	}
	function SE({
		card: e,
		chrome: t,
		firstCard: r,
		next: n,
		prev: o,
		storedValue: i,
		survey: s,
		texts: a,
	}) {
		const l = typeof i == "object" && i !== null ? i : void 0,
			[u, d] = Fe(l ?? {}),
			[c, f] = Fe(!1),
			p = pr(),
			h = Nn(),
			g = Se(null),
			y = u.email ?? "",
			v = y ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y) : !1,
			b = !!(u.email || u.phone || u.name),
			w = is({
				email: { value: y, valid: v },
				name: { value: u.name ?? "" },
				phone: { value: u.phone ?? "" },
				consented: !!u.consented,
				consentEnable: !!e.consentEnable,
				isRequired: !!e.isRequired,
				hasBeenSubmitted: c,
				language: h,
			});
		wr(g, "fields", {
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
			wr(g, "value", u),
			mt(g, "skyra-recruitment-change", ({ value: T }) => d(T));
		function S() {
			const T = is({
				email: { value: y, valid: v },
				name: { value: u.name ?? "" },
				phone: { value: u.phone ?? "" },
				consented: !!u.consented,
				consentEnable: !!e.consentEnable,
				isRequired: !!e.isRequired,
				hasBeenSubmitted: !0,
				language: h,
			});
			f(!0), (p.value = T.valid), T.valid && n(b ? u : void 0);
		}
		return k(At, {
			card: e,
			chrome: t,
			inline: s.renderType === "Inline",
			showHeader: !1,
			children: [
				k("skyra-survey-recruitment-content", {
					ref: g,
					heading: e.name,
					body: e.body ?? "",
					"body-html": e.bodyHtml ?? "",
					invalid: w.status === "email-invalid",
					error:
						w.status === "email-invalid" ||
						w.status === "consent-required" ||
						w.status === "email-required"
							? w.errorMessage
							: "",
				}),
				k("skyra-survey-actions", {
					align: r ? "end" : "between",
					children: [
						!r && k("skyra-survey-button", { onClick: o, children: a.back }),
						k("skyra-survey-button", {
							variant: "primary",
							onClick: S,
							children: a.next,
						}),
					],
				}),
			],
		});
	}
	function xE({
		card: e,
		chrome: t,
		firstCard: r,
		prev: n,
		sessionId: o,
		storedValue: i,
		survey: s,
		texts: a,
		next: l,
	}) {
		var p, h;
		const u = Se(null),
			d = e.randomize ? ss(e.items, o) : e.items,
			c = Ps((p = s.language) == null ? void 0 : p.code),
			f =
				typeof i == "string"
					? (((h = d.find((g) => g.value.id === i || Ce(g.value.id) === i)) ==
						null
							? void 0
							: h.value.id) ?? "")
					: "";
		return (
			wr(
				u,
				"options",
				d.map((g) => ({ id: g.value.id, label: g.label })),
			),
			mt(u, "skyra-choice-select", ({ value: g }) => l(g, e.segment.id)),
			k(At, {
				card: e,
				chrome: t,
				inline: s.renderType === "Inline",
				showHeader: !1,
				children: [
					k("skyra-survey-choice-content", {
						ref: u,
						heading: e.name,
						body: e.body ?? "",
						"body-html": e.bodyHtml ?? "",
						layout:
							e.optionsLayout === "horizontal" ? "horizontal" : "vertical",
						inline: s.renderType === "Inline",
						"scroll-up-label": c.up,
						"scroll-down-label": c.down,
						"selected-value": f,
					}),
					!r &&
						k("skyra-survey-actions", {
							children: k("skyra-survey-button", {
								onClick: n,
								children: a.back,
							}),
						}),
				],
			})
		);
	}
	function $E({
		card: e,
		chrome: t,
		firstCard: r,
		prev: n,
		sessionId: o,
		storedValue: i,
		survey: s,
		texts: a,
		next: l,
	}) {
		var p, h;
		const u = Se(null),
			d = e.randomize ? ss(e.selectItems, o) : e.selectItems,
			c = Ps((p = s.language) == null ? void 0 : p.code),
			f =
				typeof i == "string"
					? (((h = d.find((g) => g.id === i || Ce(g.id) === i)) == null
							? void 0
							: h.id) ?? "")
					: "";
		return (
			wr(
				u,
				"options",
				d.map((g) => ({ id: g.id, label: g.label })),
			),
			mt(u, "skyra-choice-select", ({ value: g }) => l(g)),
			k(At, {
				card: e,
				chrome: t,
				inline: s.renderType === "Inline",
				showHeader: !1,
				children: [
					k("skyra-survey-choice-content", {
						ref: u,
						heading: e.name,
						body: e.body ?? "",
						"body-html": e.bodyHtml ?? "",
						layout:
							e.optionsLayout === "horizontal" ? "horizontal" : "vertical",
						"selected-value": f,
						inline: s.renderType === "Inline",
						"scroll-up-label": c.up,
						"scroll-down-label": c.down,
					}),
					!r &&
						k("skyra-survey-actions", {
							children: k("skyra-survey-button", {
								onClick: n,
								children: a.back,
							}),
						}),
				],
			})
		);
	}
	function CE({
		card: e,
		chrome: t,
		firstCard: r,
		prev: n,
		sessionId: o,
		storedValue: i,
		survey: s,
		texts: a,
		next: l,
	}) {
		var p, h;
		const u = Se(null),
			d = e.randomize ? ss(e.taskItems ?? [], o) : (e.taskItems ?? []),
			c = Ps((p = s.language) == null ? void 0 : p.code),
			f =
				typeof i == "string"
					? (((h = d.find((g) => g.task.id === i || Ce(g.task.id) === i)) ==
						null
							? void 0
							: h.task.id) ?? "")
					: "";
		return (
			wr(
				u,
				"options",
				d.map((g) => ({ id: g.task.id, label: g.label })),
			),
			mt(u, "skyra-choice-select", ({ value: g }) => l(g)),
			k(At, {
				card: e,
				chrome: t,
				inline: s.renderType === "Inline",
				showHeader: !1,
				children: [
					k("skyra-survey-choice-content", {
						ref: u,
						heading: e.name,
						body: e.body ?? "",
						"body-html": e.bodyHtml ?? "",
						layout:
							e.optionsLayout === "horizontal" ? "horizontal" : "vertical",
						inline: s.renderType === "Inline",
						"selected-value": f,
						"scroll-up-label": c.up,
						"scroll-down-label": c.down,
					}),
					!r &&
						k("skyra-survey-actions", {
							children: k("skyra-survey-button", {
								onClick: n,
								children: a.back,
							}),
						}),
				],
			})
		);
	}
	const rv = {
		en: "Language",
		no: "Språk",
		nn: "Språk",
		sv: "Språk",
		de: "Sprache",
		pt: "Idioma",
	};
	function zE({
		card: e,
		currentLanguage: t,
		enabledLanguages: r,
		finalCard: n,
		firstCard: o,
		minimized: i,
		next: s,
		onClose: a,
		onLanguageChange: l,
		onMaximize: u,
		onMinimize: d,
		prev: c,
		showCloseButton: f,
		showMinimizeButton: p,
		sessionId: h,
		storedValue: g,
		survey: y,
	}) {
		const v = ht(y, e, { finalCard: n }),
			w = {
				chrome: {
					closeLabel: v.close,
					currentLanguage: t,
					enabledLanguages: r,
					languageLabel: rv[t] ?? rv.en,
					minimizeLabel: v.hide,
					onClose: a,
					onLanguageChange: l,
					onMinimize: d,
					showCloseButton: f,
					showMinimizeButton: p,
				},
				finalCard: n,
				firstCard: o,
				next: s,
				prev: c,
				storedValue: g,
				survey: y,
				sessionId: h,
				texts: v,
			};
		let S;
		switch (e.type) {
			case "CompletionCard":
				S = k(gE, { card: e, ...w });
				break;
			case "FindabilityCard":
				S = k(mE, { card: e, ...w });
				break;
			case "InputCard":
				S = k(bE, { card: e, ...w });
				break;
			case "LikertCard":
				S = k(wE, { card: e, ...w });
				break;
			case "MessageCard":
				S = k(kE, { card: e, ...w });
				break;
			case "MultiSelectCard":
				S = k(_E, { card: e, ...w });
				break;
			case "RecruitmentCard":
				S = k(SE, { card: e, ...w });
				break;
			case "SegmentCard":
				S = k(xE, { card: e, ...w });
				break;
			case "SingleSelectCard":
				S = k($E, { card: e, ...w });
				break;
			case "TopTaskCard":
				S = k(CE, { card: e, ...w });
				break;
			default:
				return null;
		}
		return y.renderType === "Inline"
			? S
			: k("div", {
					className: "beta-transition-container",
					"data-minimized": i ? "true" : "false",
					children: [
						k("div", { className: "beta-transition-content", children: S }),
						k("skyra-survey-pill", {
							className: "beta-transition-pill",
							onClick: u,
							children: v.minimized,
						}),
					],
				});
	}
	const IE =
			':host{color-scheme:light dark}.beta-wrapper{box-sizing:border-box;color:var(--skyra-text-color, #151515);font-family:var(--skyra-font-body, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);font-size:var(--skyra-font-size, 16px);outline:none;color-scheme:light dark}.beta-wrapper[data-theme-mode=light]{color-scheme:light}.beta-wrapper[data-theme-mode=dark]{color-scheme:dark}.beta-wrapper[data-inline=false]{position:fixed;right:0;bottom:0;left:0;display:flex;align-items:flex-end;justify-content:flex-end;margin:8px;z-index:2147483647;pointer-events:none}.beta-wrapper[data-inline=false][data-position=BottomLeft]{justify-content:flex-start}.beta-wrapper[data-inline=false][data-position=TopLeft]{top:0;bottom:auto;align-items:flex-start;justify-content:flex-start}.beta-wrapper[data-inline=false][data-position=TopRight]{top:0;bottom:auto;align-items:flex-start}@media(min-width:768px){.beta-wrapper[data-inline=false]{margin:16px}}.beta-wrapper[data-inline=true]{width:100%}@keyframes beta-enter-up{0%{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes beta-enter-down{0%{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}.beta-wrapper.beta-enter-up{animation:beta-enter-up var(--duration, .3s) ease-out both}.beta-wrapper.beta-enter-down{animation:beta-enter-down var(--duration, .3s) ease-out both}@keyframes beta-content-enter{0%{opacity:0}to{opacity:1}}.beta-transition-content{animation:beta-content-enter var(--duration, .3s) ease-out both}.beta-transition-container{width:min(420px,100%);pointer-events:auto}.beta-transition-pill{display:none;flex:0 1 auto;inline-size:-moz-fit-content;inline-size:fit-content;max-inline-size:100%;min-inline-size:0}.beta-transition-container[data-minimized=true]{display:flex;justify-content:flex-end}.beta-transition-container[data-minimized=true] .beta-transition-content{display:none}.beta-transition-container[data-minimized=true] .beta-transition-pill{display:block;animation:beta-content-enter var(--duration, .3s) ease-out both}.beta-transition-pill::part(label){min-inline-size:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@keyframes beta-shake{0%{transform:translate(0)}25%{transform:translate(-6px)}50%{transform:translate(6px)}75%{transform:translate(-6px)}to{transform:translate(0)}}.beta-wrapper.survey-shake{animation:beta-shake var(--duration, .3s) ease-in-out}@media(prefers-reduced-motion:reduce){.beta-wrapper.survey-shake,.beta-wrapper.beta-enter-up,.beta-wrapper.beta-enter-down,.beta-wrapper[data-inline=false],.beta-transition-content,.beta-transition-pill{animation:none}}',
		nv =
			":host{background:transparent}[data-flow]{--duration: .25s;--duration-fast: .25s;--skyra-app-font-unit: calc(var(--skyra-font-size, 16px) * var(--skyra-app-text-scale, 1) / 16);--skyra-app-base-font-size: var(--skyra-font-size, 16px);--skyra-app-surface: var(--skyra-bg-color);--skyra-app-secondary: var(--skyra-secondary-color, var(--skyra-bg-color));--skyra-app-border: var(--skyra-border-color, var(--skyra-interface-color));--skyra-app-chrome-position: static;--skyra-app-chrome-height: auto;--skyra-app-control-size: 44px;--skyra-app-scroll-height: none;--skyra-app-option-white-space: normal;--skyra-app-likert-columns: repeat(auto-fit, minmax(min(100%, 5em), 1fr));font-size:calc(var(--skyra-font-size, 16px) * var(--skyra-app-text-scale, 1));min-width:0;width:100%}.beta-wrapper[data-flow]{position:static;display:block;margin:0}[data-flow] .survey-container,[data-flow] .beta-transition-container{width:100%;max-width:100%}[data-flow] .survey-container:not([data-minimized=true]){grid-template-columns:minmax(0,1fr);border-radius:var(--skyra-card-radius, var(--skyra-radius-lg, 10px));box-shadow:var(--skyra-card-shadow, var(--skyra-shadow-md, var(--skyra-shadow, none)))}[data-flow] .survey-container[data-minimized=true],[data-flow] .beta-transition-container[data-minimized=true]{box-sizing:border-box;width:-moz-min-content;width:min-content;min-width:75px;max-width:320px}[data-flow] .survey-container[data-minimized=true]{display:block}[data-flow] .beta-transition-pill{flex-shrink:0;inline-size:-moz-min-content;inline-size:min-content;max-inline-size:320px}[data-flow] .beta-transition-pill::part(pill){width:-moz-max-content;width:max-content;max-width:320px}[data-flow] .survey-container[data-minimized=true] .survey-pill{width:-moz-max-content;width:max-content;max-width:100%}[data-flow] .survey-content{min-width:0;width:100%}[data-flow] .survey-container[data-minimized=true] .survey-content{display:none}[data-flow] .survey-container:not([data-minimized=true]) .survey-pill{display:none}[data-flow] .survey-content header{position:relative;min-height:44px}[data-flow] header button{min-width:44px;min-height:44px;border-radius:var(--skyra-radius-sm, 4px)}[data-flow] [data-icon-control]{font-size:20px;line-height:1}[data-flow] [data-card-focus-target]{padding:var(--skyra-card-padding, 22px);animation:survey-content-enter .25s ease-out both}[data-flow] .survey-pill{min-width:0;min-height:44px;font:inherit}[data-flow] .survey-pill svg{flex-shrink:0}[data-flow] .survey-pill span,[data-flow] .beta-transition-pill::part(label){min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}[data-flow] [role=radiogroup].grid{grid-template-columns:repeat(auto-fit,minmax(min(100%,5em),1fr))}[data-flow] .scroll-area{max-height:none}[data-flow] fieldset{min-inline-size:0}[data-flow] input:not([type=checkbox],[type=radio],[type=range]),[data-flow] textarea{min-width:0;width:100%;max-width:100%;font-size:max(16px,calc(var(--skyra-font-size, 16px) * var(--skyra-app-text-scale, 1)));line-height:1.5}[data-flow] [data-survey-actions]{flex-wrap:wrap}[data-flow] [data-survey-actions]>button{flex-shrink:0;max-width:100%;white-space:normal}[data-flow] [data-input-feedback]{flex-wrap:wrap;align-items:flex-start;gap:4px 8px}[data-flow] [data-input-feedback]>*{min-width:0;max-width:100%}[data-flow] [data-input-feedback]>:first-child{flex:1 1 auto}[data-flow] [data-input-counter]{flex-shrink:0;margin-inline-start:auto}[data-flow] [role=radiogroup] label{min-width:0;min-height:44px;overflow-wrap:anywhere}@media(prefers-reduced-motion:reduce){[data-flow] [data-card-focus-target]{animation:none}}";
	function ov(e, t, r = !1) {
		const n = Se(null),
			o = Se(r ? void 0 : e);
		return (
			Re(() => {
				if (o.current === e) return;
				o.current = e;
				const i = requestAnimationFrame(() => {
					var a;
					const s = t
						? (a = n.current) == null
							? void 0
							: a.querySelector(t)
						: n.current;
					s == null || s.focus({ preventScroll: !0 });
				});
				return () => cancelAnimationFrame(i);
			}, [e, t]),
			n
		);
	}
	function TE({
		cardKey: e,
		children: t,
		label: r,
		inline: n = !1,
		flow: o = !1,
		position: i,
		themeOverrides: s,
		theme: a,
		themeMode: l,
		minimized: u = !1,
	}) {
		const d = pr(),
			c = ov(e, void 0, o),
			f = Se(u),
			[p, h] = Fe(!0),
			g = (l ?? "Auto").toLowerCase(),
			y = Cp(a ?? Ap[0], {
				authored: !!a,
				themeMode: l ?? "Auto",
				selector: ":host",
			}),
			v =
				i === "TopLeft" || i === "TopRight"
					? " beta-enter-down"
					: " beta-enter-up";
		return (
			Re(() => {
				h(!1);
			}, []),
			Re(() => {
				if (f.current === u || ((f.current = u), n)) return;
				const b = requestAnimationFrame(() => {
					var w, S, T;
					u
						? (S =
								(w = c.current) == null
									? void 0
									: w.querySelector("skyra-survey-pill")) == null ||
							S.focus({ preventScroll: !0 })
						: (T = c.current) == null || T.focus({ preventScroll: !0 });
				});
				return () => cancelAnimationFrame(b);
			}, [n, u]),
			k(bt, {
				children: [
					k("style", { "data-beta-styles": !0, children: IE }),
					k("style", { children: $p({ themeMode: l ?? "Auto" }) }),
					y && k("style", { children: y }),
					k("style", {
						children: Ep(s, { selector: ":host", themeMode: l ?? "Auto" }),
					}),
					o && k("style", { children: nv }),
					k("aside", {
						ref: c,
						className: `beta-wrapper${d.value ? "" : " survey-shake"}${p && !n ? v : ""}`,
						"data-inline": n ? "true" : "false",
						"data-flow": o || void 0,
						"data-minimized": u ? "true" : "false",
						"data-position": i,
						"data-theme-mode": g,
						role: n ? void 0 : "dialog",
						"aria-label": r,
						tabIndex: -1,
						children: t,
					}),
				],
			})
		);
	}
	function EE({
		card: e,
		capture: t,
		finalCard: r,
		firstCard: n,
		sessionId: o,
		storedValue: i,
		survey: s,
	}) {
		const a = Qe(t, (p) => p.context.language),
			l = Qe(t, (p) => p.matches({ Running: "Minimized" })),
			u = gh(s),
			d = s.renderType === "Inline" || s.surveyType === "Findability",
			c = (r && e.type === "MessageCard") || d,
			f = s.showCloseButton !== !1 && !d;
		return k(TE, {
			cardKey: e.id,
			label: e.name,
			inline: s.renderType === "Inline",
			flow: s.renderType === "App",
			position: s.surveyPosition,
			themeOverrides: s.themeOverrides,
			theme: s.theme,
			themeMode: s.themeMode,
			minimized: l,
			children: k(
				zE,
				{
					card: e,
					currentLanguage: a,
					enabledLanguages: u,
					finalCard: r,
					firstCard: n,
					onClose: () => t.send({ type: "reject" }),
					onLanguageChange: (p) => t.send({ type: "setLanguage", language: p }),
					onMaximize: () => t.send({ type: "maximize" }),
					onMinimize: () => t.send({ type: "minimize" }),
					next: (p, h) => {
						t.send({ type: "submit", cardId: e.id, key: h, value: p });
					},
					prev: () => t.send({ type: "goBack" }),
					minimized: l,
					showCloseButton: f,
					showMinimizeButton: !c,
					sessionId: o,
					storedValue: i,
					survey: s,
				},
				`${e.id}-${a}`,
			),
		});
	}
	const iv = Ms(
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
	function Wr({
		className: e,
		variant: t,
		size: r,
		rounded: n,
		disabled: o,
		style: i,
		...s
	}) {
		let a = "var(--skyra-radius-md, var(--skyra-radius-lg, 4px))";
		return (
			n === "none"
				? (a = "0")
				: n === "full" && (a = "var(--skyra-radius-pill, 999px)"),
			k("button", {
				part: `button-${t ?? "primary"}`,
				className: iv({
					variant: t,
					size: r,
					rounded: n,
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
	function sv(e) {
		const t = e.querySelector("div > *:first-child");
		if (t) {
			const r = window.getComputedStyle(t),
				n = t.offsetHeight,
				o = Number.parseInt(r.marginTop) || 0,
				i = Number.parseInt(r.marginBottom) || 0;
			return n + o + i;
		}
		return 48;
	}
	function Ns({ className: e, children: t, scrollAmount: r = 2.5 }) {
		const o = Cs().renderType === "Inline",
			i = Se(null),
			[s, a] = Fe(null);
		Re(() => {
			if (o) return;
			const d = i.current;
			if (!d) return;
			const c = () => {
				const p = d.scrollHeight > d.clientHeight;
				a(p);
			};
			c();
			const f = new ResizeObserver(c);
			return f.observe(d), () => f.disconnect();
		}, [o]),
			Re(() => {
				if (o) return;
				const d = i.current;
				if (!(d && s)) return;
				if (!CSS.supports("animation-timeline: scroll()")) {
					const f = () => {
						const { scrollTop: p, scrollHeight: h, clientHeight: g } = d,
							y = p <= 5,
							v = p + g >= h - 5;
						d.setAttribute("data-at-top", y.toString()),
							d.setAttribute("data-at-bottom", v.toString());
					};
					return (
						f(),
						d.addEventListener("scroll", f, { passive: !0 }),
						() => d.removeEventListener("scroll", f)
					);
				}
			}, [o, s]);
		const l = () => {
				if (i.current) {
					const c = sv(i.current) * r;
					i.current.scrollBy({ top: -c, behavior: "smooth" });
				}
			},
			u = () => {
				if (i.current) {
					const c = sv(i.current) * r;
					i.current.scrollBy({ top: c, behavior: "smooth" });
				}
			};
		return o
			? k("div", { className: e, children: t })
			: k("div", {
					ref: i,
					className: `scroll-area ${e || ""}`,
					"data-scrollable": s === null ? "unknown" : s.toString(),
					children: [
						k("button", {
							className: "scroll-area-up",
							onClick: l,
							"aria-label": "Scroll up",
							type: "button",
							children: k("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								fill: "none",
								viewBox: "0 0 24 24",
								"stroke-width": "1.5",
								stroke: "currentColor",
								width: "20",
								role: "img",
								"aria-hidden": "true",
								children: k("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									d: "M4.5 15.75l7.5-7.5 7.5 7.5",
								}),
							}),
						}),
						t,
						k("button", {
							className: "scroll-area-down",
							onClick: u,
							"aria-label": "Scroll down",
							type: "button",
							children: k("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								fill: "none",
								viewBox: "0 0 24 24",
								"stroke-width": "1.5",
								stroke: "currentColor",
								width: "20",
								role: "img",
								"aria-hidden": "true",
								children: k("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
								}),
							}),
						}),
					],
				});
	}
	const AE = ({ className: e, ...t }) =>
			k("svg", {
				width: "18",
				height: "18",
				viewBox: "0 0 25 25",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				role: "img",
				...t,
				children: [
					k("title", { children: "Maximize" }),
					k("path", { d: "M15.084 3.5H21.084V9.5", className: e }),
					k("path", { d: "M9.08398 21.5H3.08398V15.5", className: e }),
					k("path", { d: "M21.084 3.5L14.084 10.5", className: e }),
					k("path", { d: "M3.08398 21.5L10.084 14.5", className: e }),
				],
			}),
		RE = ({ className: e }) =>
			k("svg", {
				width: "18",
				height: "18",
				viewBox: "0 0 16 17",
				xmlns: "http://www.w3.org/2000/svg",
				"aria-hidden": "true",
				focusable: "false",
				className: e,
				children: k("path", {
					d: "M4 6.5L8 10.5L12 6.5",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
				}),
			}),
		mu = ({ className: e, ...t }) =>
			k("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				fill: "currentColor",
				className: `size-4 inline-block ${e ?? ""}`,
				"aria-hidden": "true",
				...t,
				children: k("path", {
					fillRule: "evenodd",
					d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
					clipRule: "evenodd",
				}),
			});
	function OE({ onClose: e, visible: t, label: r = "Close" }) {
		return t
			? k("button", {
					type: "button",
					"aria-label": r,
					"data-icon-control": !0,
					className:
						" p-2 h-10 w-10 flex items-center justify-center text-text text-lg hover:bg-action/10 focus-visible:outline-action focus-visible:outline-2 focus-visible:outline-offset-2 ",
					onClick: e,
					children: "×",
				})
			: null;
	}
	function PE({ languages: e, currentLanguage: t, onChange: r }) {
		const [n, o] = Fe(!1),
			i = Se(null),
			s = Se(null),
			a = Se(null);
		Re(() => {
			if (!n) return;
			const d = (c) => {
				var f;
				i.current &&
					!i.current.contains(c.target) &&
					!((f = a.current) != null && f.contains(c.target)) &&
					o(!1);
			};
			return (
				document.addEventListener("click", d),
				() => document.removeEventListener("click", d)
			);
		}, [n]),
			Re(() => {
				if (!n) return;
				const d = (c) => {
					c.key === "Escape" && o(!1);
				};
				return (
					document.addEventListener("keydown", d),
					() => document.removeEventListener("keydown", d)
				);
			}, [n]);
		const l = e.find((d) => d.code === t),
			u = e.filter((d) => d.code !== t);
		return (
			Re(() => {
				const d = a.current,
					c = s.current;
				if (!d || !c) return;
				if (!n) {
					d.matches(":popover-open") && d.hidePopover();
					return;
				}
				d.showPopover();
				const f = () => {
					var re;
					const g = c.getBoundingClientRect(),
						y = 4,
						v = 8,
						b = g.top - y - v,
						w = window.innerHeight - g.bottom - y - v,
						S =
							(re = c.closest(".survey-content")) == null
								? void 0
								: re.getBoundingClientRect(),
						T = S ? S.bottom - g.bottom - y : 0,
						O = Math.min(d.scrollHeight, 256),
						N = T >= O,
						D = b >= O,
						I = N || (!D && w > b),
						P = I ? Math.min(w, T || w) : b;
					(d.style.maxHeight = `${Math.max(64, P)}px`),
						(d.style.minWidth = `${g.width}px`);
					const _ = d.getBoundingClientRect(),
						A = I ? g.bottom + y : g.top - _.height - y,
						F = Math.min(Math.max(v, g.left), window.innerWidth - _.width - v);
					(d.style.top = `${Math.max(v, A)}px`),
						(d.style.left = `${Math.max(v, F)}px`);
				};
				f();
				const p = requestAnimationFrame(f),
					h = new ResizeObserver(f);
				return (
					h.observe(d),
					window.addEventListener("resize", f),
					window.addEventListener("scroll", f, !0),
					() => {
						cancelAnimationFrame(p),
							h.disconnect(),
							window.removeEventListener("resize", f),
							window.removeEventListener("scroll", f, !0);
					}
				);
			}, [n]),
			e.length <= 1
				? null
				: k("div", {
						ref: i,
						className: "min-w-0 max-w-[calc(100%-5rem)] text-sm text-text",
						children: [
							k("button", {
								ref: s,
								type: "button",
								onClick: () => o((d) => !d),
								className:
									" h-8 max-w-full w-max pl-4 pr-5 flex items-center gap-2 bg-bg rounded-br-md border-b border-r hover:bg-action/10 focus-visible:outline-action focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer ",
								"aria-haspopup": "menu",
								"aria-expanded": n,
								children: [
									k("span", { "aria-hidden": "true", children: "🌐" }),
									k("span", {
										className: "font-medium whitespace-nowrap truncate",
										children: (l == null ? void 0 : l.name) || t,
									}),
								],
							}),
							k("div", {
								ref: a,
								popover: "manual",
								role: "menu",
								style: { boxShadow: "0 8px 24px rgb(0 0 0 / 0.18)" },
								className:
									" fixed m-0 p-0 z-50 w-max max-w-[calc(100vw-1rem)] overflow-x-hidden overflow-y-auto text-sm text-text bg-bg rounded-md border ",
								children: u.map((d) =>
									k(
										"button",
										{
											type: "button",
											onClick: () => {
												r(d.code), o(!1);
											},
											className:
												" h-8 min-w-full px-4 flex items-center gap-2 whitespace-nowrap hover:bg-action/10 focus-visible:outline-action focus-visible:outline-2 focus-visible:outline-offset-[-2px] cursor-pointer ",
											role: "menuitem",
											children: [
												k("span", { "aria-hidden": "true", children: "🌐" }),
												k("span", { children: d.name }),
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
	const ME = Ms("", {
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
	function qt({ className: e, type: t, color: r, size: n, as: o = "p", ...i }) {
		return k(o, {
			className: ME({ type: t, color: r, size: n, className: e }),
			...i,
		});
	}
	const yt = ({
		heading: e,
		isForm: t = !0,
		body: r,
		bodyHtml: n,
		children: o,
		texts: i,
		actionsSpacing: s,
		actionsLayout: a,
		actions: l = [],
		closeable: u,
		onKeyUp: d,
		skipWrapperLabeling: c = !1,
		cardId: f,
		groupActionsWithContent: p = !1,
	}) => {
		var ve;
		const h = eu(),
			{ currentCard: g } = c2(),
			y = Qe(h, (se) => se.context.language),
			v = Cs(),
			b = Qe(h, (se) => se.hasTag("saving") || se.hasTag("saveFailed")),
			w = v.renderType === "App" ? "fieldset" : "div",
			S = gh(v),
			T = v.renderType === "Inline",
			O = t ? "form" : "div",
			N = Qe(h, (se) => se.matches({ Running: "Minimized" })),
			D = v.cards.find(({ order: se }) => se === g);
		if (!D) return null;
		const I = ((ve = v.cards.at(-1)) == null ? void 0 : ve.id) === D.id,
			P = v.renderType === "Inline",
			_ = v.renderType === "Inline" || v.surveyType === "Findability",
			A = (I && D.type === "MessageCard") || _,
			F = v.showCloseButton !== !1 && (u ?? !0) && !N && !_,
			re = f || `skyra-card-${v.slug}`,
			ie = `${re}-body`,
			H = {
				onKeyUp: d,
				tabIndex: -1,
				"data-card-focus-target": !0,
				...(!c && { "aria-labelledby": re }),
				...(t && { onSubmit: (se) => se.preventDefault(), name: v.name }),
			},
			J = () => {
				h.send({ type: "minimize" });
			},
			ne = () => {
				h.send({ type: "maximize" });
			},
			q = !T && (!A || (v.renderType === "App" && F)),
			Y =
				D.type === "LikertCard" && D.likertScale.likertItems.length >= 5
					? "Large"
					: "Regular",
			le = { Minimal: 300, Large: 500, Regular: 400 };
		return P
			? k("div", {
					className: "survey-inline-surface flex flex-col",
					children: k(O, {
						...H,
						className:
							"flex flex-col gap-2 md:gap-4 w-full text-text focus:outline-none",
						children: [
							k(qt, {
								part: "heading",
								as: "h2",
								type: "heading",
								id: re,
								tabIndex: -1,
								children: e,
							}),
							lv(n, r, ie),
							o && k(w, { disabled: b, children: o }),
							l.length > 0 &&
								k(av, {
									spacing: s,
									layout: a,
									actions: l.map((se) => ({
										...se,
										disabled: b || se.disabled,
									})),
									labelledBy: p ? re : void 0,
									describedBy: p && (r || n) ? ie : void 0,
								}),
						],
					}),
				})
			: k("div", {
					"data-minimized": N,
					className: "survey-container",
					style: { "--card-max-width": `${le[Y]}px` },
					children: [
						k("div", {
							className: "survey-content relative",
							children: [
								q &&
									k("header", {
										className:
											"absolute top-0 right-0 left-0 flex justify-between items-start z-10",
										children: [
											S.length > 1 &&
												k(PE, {
													languages: S,
													currentLanguage: y,
													onChange: (se) => {
														h.send({ type: "setLanguage", language: se });
													},
												}),
											k("div", {
												className: "flex ml-auto",
												children: [
													!A && k(LE, { onMinimize: J, texts: i }),
													k(OE, {
														label: i.close,
														onClose: () => h.send({ type: "reject" }),
														visible: F,
													}),
												],
											}),
										],
									}),
								k(O, {
									...H,
									className: `flex flex-col gap-2 md:gap-4 w-full text-text px-4 md:px-6 pb-4 md:pb-6 focus:outline-none ${q ? "pt-10" : "pt-4 md:pt-6"}`,
									children: [
										k(qt, {
											part: "heading",
											as: "h2",
											type: "heading",
											id: re,
											tabIndex: -1,
											children: e,
										}),
										lv(n, r, ie),
										o && k(w, { disabled: b, children: o }),
										l.length > 0 &&
											k(av, {
												spacing: s,
												layout: a,
												actions: l.map((se) => ({
													...se,
													disabled: b || se.disabled,
												})),
												labelledBy: p ? re : void 0,
												describedBy: p && (r || n) ? ie : void 0,
											}),
									],
								}),
							],
						}),
						k("button", {
							type: "button",
							className: "survey-pill",
							onClick: ne,
							children: [
								k("span", {
									className: "flex-1 text-left whitespace-nowrap",
									children: (i == null ? void 0 : i.minimized) ?? e,
								}),
								k(AE, { className: "stroke-current fill-transparent" }),
							],
						}),
					],
				});
	};
	function LE({ onMinimize: e, texts: t }) {
		return k("button", {
			type: "button",
			"aria-label": t.hide,
			"data-icon-control": !0,
			className:
				" p-2 h-10 w-10 flex items-center justify-center text-text text-lg hover:bg-action/10 focus-visible:outline-action focus-visible:outline-2 focus-visible:outline-offset-2 ",
			onClick: e,
			children: k(RE, { className: "stroke-current fill-transparent" }),
		});
	}
	function av({
		spacing: e = "between",
		layout: t = "horizontal",
		actions: r = [],
		labelledBy: n,
		describedBy: o,
	}) {
		const i = r.filter((s) => s.if !== !1);
		return k("div", {
			"data-survey-actions": !0,
			role: n ? "group" : void 0,
			"aria-labelledby": n,
			"aria-describedby": o,
			className: `
        flex w-full items-center
        ${t === "vertical" ? "flex-col gap-2 items-start" : "flex-row"}
        ${e === "between" ? "flex-wrap gap-3" : "gap-4"}
      `,
			children: i.map((s) => {
				const a = (s.type ?? "primary") === "primary",
					l = e === "between" && t === "horizontal" && a;
				return k(
					Wr,
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
	function lv(e, t, r) {
		return e
			? k("div", {
					id: r,
					part: "bodyHtml",
					className: "body-content",
					dangerouslySetInnerHTML: { __html: e },
				})
			: t
				? k(qt, {
						id: r,
						part: "description",
						className: "body-content",
						children: t,
					})
				: null;
	}
	function NE({
		card: e,
		next: t,
		prev: r,
		sessionId: n,
		survey: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		Ft("top task card", e);
		const l = e.randomize ? ls(e.taskItems ?? [], n) : (e.taskItems ?? []),
			u = ht(o, e, { finalCard: a }),
			d = `skyra-card-${e.id}`,
			c = typeof i == "string" ? i : void 0,
			f = (p) => {
				const h = p && p.trim() !== "" ? p : "";
				t == null || t(h);
			};
		return k(
			yt,
			{
				isForm: !1,
				heading: e.name,
				cardId: d,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: u,
				skipWrapperLabeling: !0,
				actions: [
					{
						key: "prev",
						action: r,
						label: u.back,
						type: "link",
						className: "mr-auto",
						if: !s,
					},
				],
				children: k("fieldset", {
					className: "m-0 border-0 p-0 min-w-0",
					"aria-labelledby": d,
					children: k(Ns, {
						children: k("div", {
							part: "options",
							className: `flex ${e.optionsLayout === "horizontal" ? "flex-row flex-wrap gap-2 p-1" : "flex-col items-start gap-1 md:gap-2"}`,
							children: l.map((p) => {
								const g = Ce(p.task.id) === c;
								return k(
									Wr,
									{
										type: "button",
										variant: "chip",
										"data-selected": g,
										"aria-pressed": g ? "true" : "false",
										onClick: () => {
											f(p.task.id);
										},
										children: [g && k(mu, { className: "mr-1.5" }), p.label],
									},
									p.task.id,
								);
							}),
						}),
					}),
				}),
			},
			e.id,
		);
	}
	function DE({
		card: e,
		next: t,
		prev: r,
		survey: n,
		finalCard: o,
		firstCard: i,
		close: s,
	}) {
		const a = ht(n, e, { finalCard: o }),
			l = oh(n, e, { firstCard: i, finalCard: o }),
			u = n.surveyType === "Findability",
			d = l
				? { key: "decline", type: "secondary", label: l, action: s }
				: i
					? null
					: {
							key: "prev",
							type: "link",
							label: a.back,
							if: !u,
							className: "mr-auto",
							action: r,
						},
			c = [
				...(d ? [d] : []),
				{
					key: "next",
					type: "primary",
					label: a.next,
					action: () => t(),
					if: !u,
				},
			],
			f = `skyra-card-${e.id}`;
		return k(
			yt,
			{
				isForm: !1,
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: a,
				actions: c,
				cardId: f,
			},
			e.id,
		);
	}
	function jE({
		card: e,
		next: t,
		minimize: r,
		survey: n,
		finalCard: o,
		isInline: i,
	}) {
		const s = ht(n, e, { finalCard: o }),
			a = `skyra-card-${e.id}`,
			l = e.optionsLayout === "horizontal";
		return l
			? k(
					yt,
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
								action: r,
								if: !i,
								label: s.replyLater,
								type: "link",
								className: "ml-auto",
							},
						],
					},
					e.id,
				)
			: k(
					yt,
					{
						isForm: !1,
						heading: e.name,
						cardId: a,
						body: e.body,
						bodyHtml: e.bodyHtml,
						texts: s,
						children: k("div", {
							className: "flex w-full flex-col gap-2",
							children: [
								k(Wr, {
									type: "button",
									className: "self-start",
									onClick: () => t(!0),
									children: e.positive,
								}),
								k("div", {
									className: "flex w-full items-center gap-4",
									children: [
										k(Wr, {
											type: "button",
											onClick: () => t(!1),
											children: e.negative,
										}),
										!i &&
											k(Wr, {
												type: "button",
												variant: "link",
												onClick: r,
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
	function yu({
		id: e,
		message: t,
		type: r = "validation",
		color: n = "error",
		className: o = "",
	}) {
		return t
			? k(qt, {
					id: e,
					color: n,
					type: "small",
					role: "alert",
					"aria-live": "polite",
					className: o,
					children: t,
				})
			: null;
	}
	function BE(e, t) {
		return (r) => {
			(e.value = r.target.value), t == null || t(e.value);
		};
	}
	function UE({
		card: e,
		next: t,
		prev: r,
		survey: n,
		value: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		var H;
		const l = zt(!1),
			u = zt(!1),
			c = zt(typeof i == "string" ? i : typeof o == "string" ? o : ""),
			f = c.value.length,
			p = pr(),
			h = Nn(),
			g = (e == null ? void 0 : e.minLength) ?? 0,
			y = (e == null ? void 0 : e.maxLength) ?? void 0,
			v = Yf({
				content: c.value,
				card: { minLength: g, maxLength: y, validations: e.validations },
				hasBeenSubmitted: u.value,
				hasBeenTouched: l.value,
				language: h,
			}),
			b = v.valid,
			w = e.multiline ? vE : Ls,
			S = ht(n, e, { finalCard: a }),
			T = `skyra-card-${e.id}`,
			O = `${T}-length-instruction`,
			N = `${T}-error`,
			D = v.status === "under-minimum",
			I = u.value && D,
			P = !b && u.value,
			_ = u.value && !D && !!v.errorMessage,
			A = Wf({ min: g, max: y, language: h });
		function F() {
			(l.value = !0), (u.value = !0), (p.value = b), b && t(c.value);
		}
		const re = n.surveyType === "Findability",
			ie = (H = e.label) == null ? void 0 : H.trim(),
			z = Yy({
				label: ie,
				placeholder: e.placeholder,
				heading: e.name,
				usePlaceholder: re,
			});
		return k(
			yt,
			{
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: S,
				cardId: T,
				actions: [
					{
						key: "prev",
						action: () => r(),
						type: "link",
						label: S.back,
						if: !(s || re),
					},
					{ key: "next", action: F, label: S.next },
				],
				children: [
					k(w, {
						id: e.id,
						label: z,
						labelHidden: re || !ie,
						"aria-invalid": P ? "true" : void 0,
						"aria-describedby":
							D && A
								? O
								: _
									? N
									: A
										? O
										: typeof y == "number"
											? `${T}-char-count`
											: void 0,
						placeholder: e.placeholder,
						value: c.value,
						autoComplete: "off",
						onInput: BE(c, () => {
							l.value = !0;
						}),
						onKeyDown: (J) => {
							J.key === "Enter" &&
								(!e.multiline || J.metaKey) &&
								(J.preventDefault(), F());
						},
						required: g > 0,
						minLength: g,
						maxLength: y,
						name: "value",
						type: "text",
					}),
					k("div", {
						"data-input-feedback": !0,
						className: "flex justify-between mt-1",
						children: [
							A && !_
								? k(qt, {
										id: O,
										type: "small",
										color: I ? v.color : void 0,
										role: I ? "alert" : void 0,
										"aria-live": I ? "polite" : void 0,
										children: A,
									})
								: _ && v.errorMessage
									? k(yu, {
											id: N,
											message: v.errorMessage,
											type: "character-limit",
											color: v.color,
										})
									: k("span", {}),
							typeof y == "number" &&
								k(qt, {
									id: `${T}-char-count`,
									"data-input-counter": !0,
									type: "small",
									color: zl(f, y),
									role: zl(f, y) ? "status" : void 0,
									children: [f, "/", y],
								}),
						],
					}),
				],
			},
			e.id,
		);
	}
	function uv({
		className: e,
		onCheckedChange: t,
		checked: r,
		disabled: n,
		...o
	}) {
		const [i, s] = Fe(!1);
		return k("input", {
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
			checked: r !== void 0 ? r : i,
			onChange: (a) => {
				const l = a.target.checked;
				s(l), t == null || t(l);
			},
			disabled: n,
			...o,
		});
	}
	function FE({
		className: e,
		size: t,
		disabled: r,
		blocked: n,
		onCheckedChange: o,
		checked: i,
		children: s,
		...a
	}) {
		return k("label", {
			part: "list-item",
			class: `
      ${n ? "cursor-not-allowed" : "cursor-pointer"}
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
				k(uv, {
					onCheckedChange: o,
					checked: i,
					disabled: r,
					"aria-disabled": n || void 0,
					className: "checked:bg-action checked:border-action checked:text-bg",
					...a,
				}),
				s,
			],
		});
	}
	function vu(e = "", t = "text") {
		const r = zt({
				value: e,
				valid: e ? HE(e, t) : null,
				touched: e.length > 0,
				dirty: !1,
			}),
			n = (i) => {
				const s = i.target,
					a = s.value;
				r.value = {
					...r.value,
					value: a,
					valid: s.checkValidity(),
					touched: r.value.touched || a.length > 0,
				};
			},
			o = (i) => {
				r.value = { ...r.value, dirty: r.value.touched };
			};
		return {
			signal: r,
			value: r.value.value,
			valid: r.value.valid,
			touched: r.value.touched,
			dirty: r.value.dirty,
			onInput: n,
			onBlur: o,
		};
	}
	function HE(e, t) {
		return t === "email"
			? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
			: t === "tel"
				? e.length > 0
				: !0;
	}
	function VE({
		card: e,
		survey: t,
		firstCard: r,
		finalCard: n,
		next: o,
		prev: i,
		close: s,
		storedValue: a,
	}) {
		const l = pr(),
			u = Nn(),
			d = typeof a == "object" && a !== null ? a : void 0,
			c = vu((d == null ? void 0 : d.email) || "", "email"),
			f = vu((d == null ? void 0 : d.phone) || "", "tel"),
			p = vu((d == null ? void 0 : d.name) || "", "text"),
			h = zt((d == null ? void 0 : d.consented) ?? !1),
			g = zt(!1),
			y = ht(t, e, { finalCard: n }),
			v = is({
				email: { value: c.value, valid: c.valid ?? !1 },
				name: { value: p.value },
				phone: { value: f.value },
				consented: h.value,
				consentEnable: !!e.consentEnable,
				isRequired: !!e.isRequired,
				hasBeenSubmitted: g.value,
				language: u,
			});
		v.valid;
		const b = v.status === "email-invalid",
			w = v.status === "consent-required" || v.status === "email-required",
			S = c.value || p.value || f.value;
		function T() {
			const N = is({
				email: { value: c.value, valid: c.valid ?? !1 },
				name: { value: p.value },
				phone: { value: f.value },
				consented: h.value,
				consentEnable: !!e.consentEnable,
				isRequired: !!e.isRequired,
				hasBeenSubmitted: !0,
				language: u,
			});
			(g.value = !0),
				(l.value = N.valid),
				N.valid &&
					o(
						S
							? {
									email: c.value,
									phone: f.value,
									name: p.value,
									consented: h.value,
								}
							: void 0,
					);
		}
		const O = `skyra-card-${e.id}`;
		return k(
			yt,
			{
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: y,
				skipWrapperLabeling: !0,
				cardId: O,
				actions: [
					{ key: "prev", action: i, type: "link", if: !r, label: y.back },
					{ key: "next", action: T, label: y.next },
				],
				children: k("fieldset", {
					"aria-labelledby": O,
					children: [
						k("legend", {
							className: "sr-only",
							children: "Enter your contact information",
						}),
						k("div", {
							className: "flex flex-col gap-2",
							children: [
								e.nameEnable &&
									k(Ls, {
										name: "name",
										autocomplete: "name",
										label: e.nameLabel ?? "Name",
										placeholder: e.namePlaceholder ?? void 0,
										value: p.value,
										onInput: p.onInput,
									}),
								e.email &&
									k(Ls, {
										label: e.email_label
											? `${e.email_label} ${e.isRequired || (e.consentEnable && h.value) ? "*" : ""}`
											: `Email ${e.isRequired || (e.consentEnable && h.value) ? "*" : ""}`,
										placeholder: e.email_placeholder ?? void 0,
										value: c.value,
										"aria-invalid": b ? "true" : void 0,
										"aria-describedby": b ? `${O}-email-error` : void 0,
										onInput: c.onInput,
										onBlur: c.onBlur,
										autocomplete: "email",
										name: "email",
										type: "email",
									}),
								e.phone &&
									k(Ls, {
										label: e.phone_label ?? "Phone",
										placeholder: e.phone_placeholder ?? void 0,
										value: f.value,
										onInput: f.onInput,
										autocomplete: "tel",
										name: "phone",
										type: "tel",
									}),
								b &&
									k(yu, {
										id: `${O}-email-error`,
										message: v.errorMessage,
										type: "validation",
										color: v.color,
									}),
								e.consentEnable &&
									k(bt, {
										children: [
											k(qt, {
												type: "small",
												className:
													"flex flex-col gap-0 items-center text-center",
												children: [
													e.consentTermsText,
													e.consentTermsUrl &&
														k("a", {
															href: e.consentTermsUrl,
															target: "_blank",
															rel: "noopener noreferrer",
															className: iv({
																variant: "link",
																size: "default",
																className:
																	"p-0! font-bold pl-0.5 whitespace-nowrap",
															}),
															children: e.consentTermsTitle,
														}),
												],
											}),
											k(qt, {
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
													k(uv, {
														name: "consent",
														checked: h.value,
														onCheckedChange: (N) => {
															h.value = N;
														},
													}),
													k("span", {
														children: [
															e.consentTermsLabel,
															(e.isRequired || S) &&
																k("span", {
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
						w
							? k(yu, {
									id: `${O}-error`,
									message: v.errorMessage,
									type: "validation",
									color: v.color,
								})
							: k("div", { className: "h-4" }),
					],
				}),
			},
			e.id,
		);
	}
	function ZE({
		card: e,
		next: t,
		prev: r,
		sessionId: n,
		survey: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		const l = e.randomize ? ls(e.items, n) : e.items,
			u = ht(o, e, { finalCard: a }),
			d = `skyra-card-${e.id}`,
			c = typeof i == "string" ? i : void 0,
			f = (p, h) => {
				const g = p && p.trim() !== "" ? p : "";
				t == null || t(g, h);
			};
		return k(
			yt,
			{
				isForm: !1,
				heading: e.name,
				cardId: d,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: u,
				skipWrapperLabeling: !0,
				actions: [
					{
						key: "prev",
						action: r,
						label: u.back,
						type: "link",
						className: "mr-auto",
						if: !s,
					},
				],
				children: k("fieldset", {
					className: "m-0 border-0 p-0 min-w-0",
					"aria-labelledby": d,
					children: k(Ns, {
						children: k("div", {
							part: "options",
							className: `flex ${e.optionsLayout === "horizontal" ? "flex-row flex-wrap gap-2 p-1" : "flex-col items-start gap-1 md:gap-2"}`,
							children: l.map((p) => {
								const g = Ce(p.value.id) === c;
								return k(
									Wr,
									{
										type: "button",
										variant: "chip",
										"data-selected": g,
										"aria-pressed": g ? "true" : "false",
										onClick: () => {
											f(p.value.id, e.segment.id);
										},
										children: [g && k(mu, { className: "mr-1.5" }), p.label],
									},
									p.value.id,
								);
							}),
						}),
					}),
				}),
			},
			e.id,
		);
	}
	function qE({
		className: e,
		decorative: t = !1,
		value: { name: r, native: n },
	}) {
		return k("span", {
			className: `inline ${e}`,
			role: t ? void 0 : "img",
			"aria-label": t ? void 0 : r,
			"aria-hidden": t || !r ? "true" : "false",
			children: n,
		});
	}
	const WE = Ms(
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
	function cv({ className: e, size: t, ...r }) {
		return k("input", {
			type: "radio",
			className: WE({ size: t, className: e }),
			...r,
		});
	}
	function KE({
		card: e,
		next: t,
		prev: r,
		survey: n,
		storedValue: o,
		firstCard: i,
		finalCard: s,
	}) {
		var T;
		const a = e.likertScale;
		if (!("likertItems" in a)) return null;
		const l = a.likertItems,
			u =
				(typeof o == "string" &&
					((T = l.find((O) => Ce(O.id) === o)) == null ? void 0 : T.id)) ||
				"",
			d = zt(u),
			c = ht(n, e, { finalCard: s }),
			f = e.showEmoji && l.every((O) => !!O.emoji),
			p = (O) => {
				(d.value = O), t(O, e.id);
			},
			h = (O, N) => {
				var P, _;
				let D;
				switch (O.key) {
					case "ArrowLeft":
					case "ArrowUp":
						D = (N - 1 + l.length) % l.length;
						break;
					case "ArrowRight":
					case "ArrowDown":
						D = (N + 1) % l.length;
						break;
					case "Home":
						D = 0;
						break;
					case "End":
						D = l.length - 1;
						break;
					case "Enter":
						O.preventDefault(), p(l[N].id);
						return;
					default:
						return;
				}
				O.preventDefault(), (d.value = l[D].id);
				const I =
					(P = O.currentTarget.closest('[role="radiogroup"]')) == null
						? void 0
						: P.querySelectorAll('input[type="radio"]');
				(_ = I == null ? void 0 : I[D]) == null || _.focus();
			},
			g = [
				{ key: "prev", action: () => r(), label: c.back, type: "link", if: !i },
			],
			y = e.optionsLayout === "horizontal";
		let v = "grid-cols-5";
		a.type === "LikertScaleThree"
			? (v = "grid-cols-3")
			: a.type === "LikertScaleSix"
				? (v = "grid-cols-6")
				: a.type === "LikertScaleSeven" && (v = "grid-cols-7");
		const b = y ? `grid ${v} gap-1 md:gap-2` : "flex flex-col gap-1 md:gap-2",
			w = y
				? "flex flex-col items-center gap-1"
				: "flex flex-row items-center gap-2 justify-start",
			S = `skyra-card-${e.id}`;
		return k(
			yt,
			{
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: c,
				actions: g,
				skipWrapperLabeling: !0,
				cardId: S,
				children: k("fieldset", {
					"aria-labelledby": S,
					children: [
						k("legend", {
							className: "sr-only",
							children: "Select your rating",
						}),
						k("div", {
							className: b,
							role: "radiogroup",
							"aria-labelledby": S,
							children: l.map((O, N) => {
								const D = O.id == d.value;
								return f
									? k(
											"label",
											{
												part: "list-item",
												className: `
                  cursor-pointer
                  ${y ? "flex flex-col items-center gap-0.5 text-center" : "flex flex-row items-center gap-2 justify-start"}
                  py-0.5
                  px-1
                  rounded-sm
                  ${D ? "bg-action text-bg" : ""}
                  hover:ring-action hover:ring-offset-2
                  hover:ring-offset-bg hover:ring-2

                  focus-within:ring-action focus-within:ring-offset-2
                  focus-within:ring-offset-bg focus-within:ring-2
                `,
												children: [
													O.emoji &&
														k(qE, {
															decorative: !0,
															value: O.emoji,
															className: y ? "text-4xl" : "text-2xl",
														}),
													y
														? k("input", {
																type: "radio",
																id: O.id,
																name: e.id,
																value: O.id,
																checked: D,
																className: "appearance-none",
																onClick: () => p(O.id),
																onKeyDown: (I) => h(I, N),
															})
														: k(cv, {
																id: O.id,
																name: e.id,
																value: O.id,
																checked: D,
																onClick: () => p(O.id),
																onKeyDown: (I) => h(I, N),
															}),
													k("span", {
														className: "text-xs font-semibold",
														children: O.label,
													}),
												],
											},
											N,
										)
									: k(
											"label",
											{
												part: "list-item",
												className: `${w} cursor-pointer`,
												children: [
													k(cv, {
														id: O.id,
														name: e.id,
														value: O.id,
														checked: D,
														onClick: () => p(O.id),
														onKeyDown: (I) => h(I, N),
													}),
													k("span", {
														className: "text-xs font-semibold text-center",
														children: O.label,
													}),
												],
											},
											N,
										);
							}),
						}),
					],
				}),
			},
			e.id,
		);
	}
	function JE(e) {
		return k("kbd", {
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
	const dv = "ABCDEFGHJKMNPQRSTVWXYZ".split("");
	function GE(e, t) {
		switch (t.type) {
			case "toggle": {
				const r = rh({
					selectedValues: Array.from(e.selected),
					value: t.id,
					max: t.max,
				});
				return {
					...e,
					selected: new Set(r.values),
					dirty: !0,
					limitAttempted: r.limitReached,
				};
			}
			case "setDirty":
				return { ...e, dirty: !0 };
			default:
				throw new Error("Invalid action type");
		}
	}
	function YE({
		card: e,
		next: t,
		prev: r,
		sessionId: n,
		survey: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		Ft("multiselect card", e);
		const l = pr(),
			u = Nn(),
			c = (e.randomize ? ls(e.selectItems, n) : e.selectItems).map((P, _) => ({
				...P,
				order: _,
			})),
			f = Array.isArray(i)
				? new Set(
						i
							.map((P) => {
								var _;
								return (_ = c.find((A) => Ce(A.id) === P)) == null
									? void 0
									: _.id;
							})
							.filter(Boolean),
					)
				: new Set(),
			[p, h] = tc(GE, { selected: f, dirty: !1, limitAttempted: !1 }),
			[g, y] = Fe(!1),
			v = rc(
				(P) => {
					const _ = P.currentTarget,
						A = P.target,
						F = P.key.toUpperCase();
					if (_.contains(A)) {
						const re = dv.indexOf(F);
						if (re >= 0 && re < c.length) {
							const ie = c[re];
							h({ type: "toggle", id: ie.id, max: e.max ?? void 0 });
						}
					}
				},
				[e.max, c],
			),
			b = os({
				selectedCount: p.selected.size,
				card: { min: e.min ?? void 0, max: e.max ?? void 0 },
				hasBeenSubmitted: g,
				language: u,
			}),
			w = Jf({
				min: e.min ?? void 0,
				max: e.max ?? void 0,
				totalOptions: c.length,
				language: u,
			}),
			S = e.max ? Kf({ max: e.max, language: u }) : null,
			T = p.limitAttempted
				? S
				: b.status === "over-max" || (g && !b.valid)
					? b.errorMessage
					: w,
			O = p.limitAttempted || b.status === "over-max" || (g && !b.valid),
			N = ht(o, e, { finalCard: a }),
			D = `skyra-card-${e.id}`;
		function I() {
			const P = os({
				selectedCount: p.selected.size,
				card: { min: e.min ?? void 0, max: e.max ?? void 0 },
				hasBeenSubmitted: !0,
				language: u,
			});
			if ((y(!0), (l.value = P.valid), P.valid)) {
				const _ = p.selected.size > 0 ? Array.from(p.selected) : [];
				t(_);
			}
		}
		return k(
			yt,
			{
				onKeyUp: v,
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: N,
				skipWrapperLabeling: !0,
				cardId: D,
				actions: [
					{
						key: "prev",
						action: () => (r == null ? void 0 : r()),
						label: N.back,
						type: "link",
						if: !s,
					},
					{ key: "next", action: I, label: N.next },
				],
				children: k("fieldset", {
					"aria-labelledby": D,
					"aria-describedby": T ? `${D}-feedback` : void 0,
					"aria-invalid": O ? "true" : void 0,
					children: [
						k(Ns, {
							children: k("div", {
								part: "options",
								className: `flex ${e.optionsLayout === "horizontal" ? "flex-row flex-wrap gap-2 p-1 -m-1" : "flex-col items-stretch gap-1 md:gap-2"}`,
								children: c.map((P) => {
									const _ = p.selected.has(P.id),
										A = !!(e.max && p.selected.size >= e.max && !_);
									return k(
										FE,
										{
											checked: _,
											blocked: A,
											onCheckedChange: () => {
												h({ type: "toggle", id: P.id, max: e.max ?? void 0 });
											},
											children: [
												k("span", { children: P.label }),
												k(JE, { children: dv[P.order] }),
											],
										},
										P.id,
									);
								}),
							}),
						}),
						T
							? k("div", {
									"data-input-feedback": !0,
									class: "my-2 shrink-0",
									children: k(qt, {
										type: "small",
										color: O ? "error" : void 0,
										role: O ? "alert" : void 0,
										id: `${D}-feedback`,
										children: T,
									}),
								})
							: null,
					],
				}),
			},
			e.id,
		);
	}
	function XE({ card: e, next: t, survey: r, finalCard: n }) {
		const o = `skyra-card-${e.id}`;
		return k(
			yt,
			{
				isForm: !1,
				heading: e.name,
				cardId: o,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: ht(r, e, { finalCard: n }),
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
	function QE({
		card: e,
		next: t,
		prev: r,
		sessionId: n,
		survey: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		const l = e.randomize ? ls(e.selectItems, n) : e.selectItems,
			u = ht(o, e, { finalCard: a }),
			d = `skyra-card-${e.id}`,
			c = typeof i == "string" ? i : void 0,
			f = (p) => {
				const h = p && p.trim() !== "" ? p : "";
				t == null || t(h);
			};
		return k(
			yt,
			{
				heading: e.name,
				body: e.body,
				cardId: d,
				bodyHtml: e.bodyHtml,
				texts: u,
				skipWrapperLabeling: !0,
				actions: [
					{
						key: "prev",
						action: r,
						label: u.back,
						type: "link",
						className: "mr-auto",
						if: !s,
					},
				],
				children: k("fieldset", {
					className: "m-0 border-0 p-0 min-w-0",
					"aria-labelledby": d,
					children: k(Ns, {
						children: k("div", {
							part: "options",
							className: `flex ${e.optionsLayout === "horizontal" ? "flex-row flex-wrap gap-2 p-1" : "flex-col items-start gap-1 md:gap-2"}`,
							children: l.map((p) => {
								const g = Ce(p.id) === c;
								return k(
									Wr,
									{
										type: "button",
										variant: "chip",
										"data-selected": g,
										"aria-pressed": g ? "true" : "false",
										onClick: () => {
											f(p.id);
										},
										children: [g && k(mu, { className: "mr-1.5" }), p.label],
									},
									p.id,
								);
							}),
						}),
					}),
				}),
			},
			e.id,
		);
	}
	function eA({ card: e, ...t }) {
		const r = Cs(),
			n = r.renderType === "Inline",
			o = { ...t, survey: r };
		switch (e.type) {
			case "TopTaskCard":
				return k(NE, { card: e, ...o });
			case "MessageCard":
				return k(DE, { card: e, ...o });
			case "CompletionCard":
				return k(jE, { card: e, ...o, isInline: n });
			case "FindabilityCard":
				return k(XE, { card: e, ...o });
			case "RecruitmentCard":
				return k(VE, { card: e, ...o });
			case "InputCard":
				return k(UE, { card: e, ...o });
			case "SegmentCard":
				return k(ZE, { card: e, ...o });
			case "LikertCard":
				return k(KE, { card: e, ...o });
			case "MultiSelectCard":
				return k(YE, { card: e, ...o });
			case "SingleSelectCard":
				return k(QE, { card: { ...e, type: "SingleSelectCard" }, ...o });
			default:
				throw new Error(`Unknown card type: ${e.type}`);
		}
	}
	const tA = `/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:"";--tw-outline-style:solid}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--spacing:4px;--container-6xl:1152px;--text-xs--line-height:calc(1/.75);--text-sm--line-height:calc(1.25/.875);--text-base:16px;--text-base--line-height: 1.5 ;--text-lg--line-height:calc(1.75/1.125);--text-xl:20px;--text-xl--line-height:calc(1.75/1.25);--text-2xl:24px;--text-2xl--line-height:calc(2/1.5);--text-3xl:30px;--text-3xl--line-height: 1.2 ;--text-4xl:36px;--text-4xl--line-height:calc(2.5/2.25);--text-5xl:48px;--text-5xl--line-height:1;--text-6xl:60px;--text-6xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--leading-tight:1.25;--ease-out:cubic-bezier(0,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components{:host{--skyra-bg-color:#f5f7fa;--skyra-text-color:#012a53;--skyra-interface-color:#315386;--skyra-border-color:var(--skyra-interface-color);--skyra-action-color:#002052;--skyra-action-text-color:var(--skyra-bg-color);--skyra-minimized-bg:#002052;--skyra-minimized-text:#fff;--skyra-minimized-border:#106eff;--skyra-minimized-shadow:0px 0px 20px 4px #013d9666;--skyra-secondary-color:#dde7f7;--skyra-link-color:blue;--skyra-error-color:#ca0a15;--skyra-warning-color:#92400e;--skyra-focus-color:var(--skyra-action-color);--skyra-border-style:solid;--skyra-border-width:1px;--skyra-radius-sm:4px;--skyra-radius-md:6px;--skyra-radius-lg:8px;--skyra-radius-pill:999px;--skyra-focus-ring-style:solid;--skyra-focus-ring-width:2px;--skyra-focus-ring-offset:2px;--skyra-shadow-sm:none;--skyra-shadow-md:none;--skyra-shadow-lg:none;--skyra-z-index:2147480000;--skyra-font-heading:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--skyra-font-body:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--skyra-option-list-max-height:400px;--skyra-body-max-height:none;font-size:var(--skyra-font-size,16px);background:var(--skyra-bg-color)}:host li{margin-left:24px;list-style-type:disc}:host a{color:var(--skyra-link-color);text-decoration:underline}.body-content{max-height:var(--skyra-body-max-height,none);overflow-y:auto}}@layer utilities{.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-x-0{inset-inline:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.right-0{right:calc(var(--spacing)*0)}.right-auto{right:auto}.bottom-0{bottom:calc(var(--spacing)*0)}.left-0{left:calc(var(--spacing)*0)}.left-auto{left:auto}.z-0{z-index:0}.z-10{z-index:10}.z-50{z-index:50}.z-wrapper{z-index:var(--skyra-z-index)}.container{width:100%}@media(min-width:40rem){.container{max-width:640px}}@media(min-width:48rem){.container{max-width:768px}}@media(min-width:64rem){.container{max-width:1024px}}@media(min-width:80rem){.container{max-width:1280px}}@media(min-width:96rem){.container{max-width:1536px}}.-m-1{margin:calc(var(--spacing)*-1)}.m-0{margin:calc(var(--spacing)*0)}.m-2{margin:calc(var(--spacing)*2)}.m-auto{margin:auto}.mx-2{margin-inline:calc(var(--spacing)*2)}.mx-auto{margin-inline:auto}.my-2{margin-block:calc(var(--spacing)*2)}.my-4{margin-block:calc(var(--spacing)*4)}.my-5{margin-block:calc(var(--spacing)*5)}.ms-auto{margin-inline-start:auto}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-8{margin-top:calc(var(--spacing)*8)}.mt-10{margin-top:calc(var(--spacing)*10)}.mt-12{margin-top:calc(var(--spacing)*12)}.mr-1\\.5{margin-right:calc(var(--spacing)*1.5)}.mr-auto{margin-right:auto}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.mb-10{margin-bottom:calc(var(--spacing)*10)}.ml-0\\.5{margin-left:calc(var(--spacing)*.5)}.ml-auto{margin-left:auto}.\\!inline{display:inline!important}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.list-item{display:list-item}.table{display:table}.aspect-square{aspect-ratio:1}.size-3\\.5{width:calc(var(--spacing)*3.5);height:calc(var(--spacing)*3.5)}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-8{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.size-11{width:calc(var(--spacing)*11);height:calc(var(--spacing)*11)}.h-2{height:calc(var(--spacing)*2)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-48{height:calc(var(--spacing)*48)}.h-\\[50px\\]{height:50px}.h-\\[100px\\]{height:100px}.h-full{height:100%}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-5{width:calc(var(--spacing)*5)}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-20{width:calc(var(--spacing)*20)}.w-32{width:calc(var(--spacing)*32)}.w-48{width:calc(var(--spacing)*48)}.w-\\[400px\\]{width:400px}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.w-screen{width:100vw}.max-w-6xl{max-width:var(--container-6xl)}.max-w-\\[400px\\]{max-width:400px}.max-w-\\[450px\\]{max-width:450px}.max-w-\\[calc\\(100\\%-5rem\\)\\]{max-width:calc(100% - 80px)}.max-w-\\[calc\\(100vw-1rem\\)\\]{max-width:calc(100vw - 16px)}.max-w-full{max-width:100%}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-20{min-width:calc(var(--spacing)*20)}.min-w-\\[300px\\]{min-width:300px}.min-w-full{min-width:100%}.flex-1{flex:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.scale-1{--tw-scale-x:1%;--tw-scale-y:1%;--tw-scale-z:1%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-2{--tw-scale-x:2%;--tw-scale-y:2%;--tw-scale-z:2%;scale:var(--tw-scale-x)var(--tw-scale-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.list-inside{list-style-position:inside}.list-disc{list-style-type:disc}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-wrap{flex-wrap:wrap}.place-content-center{place-content:center}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing)*0)}.gap-0\\.5{gap:calc(var(--spacing)*.5)}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-5{gap:calc(var(--spacing)*5)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-3{-moz-column-gap:calc(var(--spacing)*3);column-gap:calc(var(--spacing)*3)}.gap-y-1{row-gap:calc(var(--spacing)*1)}.gap-y-1\\.5{row-gap:calc(var(--spacing)*1.5)}.self-center{align-self:center}.self-end{align-self:flex-end}.self-start{align-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:var(--skyra-radius-md,6px)}.rounded-\\[99999px\\]{border-radius:99999px}.rounded-full{border-radius:var(--skyra-radius-pill,999px)}.rounded-lg{border-radius:var(--skyra-radius-lg,8px)}.rounded-md{border-radius:var(--skyra-radius-md,6px)}.rounded-none{border-radius:0}.rounded-sm{border-radius:var(--skyra-radius-sm,4px)}.rounded-xs{border-radius:var(--skyra-radius-sm,2px)}.rounded-br-md{border-bottom-right-radius:var(--skyra-radius-md,6px)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-solid{--tw-border-style:solid;border-style:solid}.border-action{border-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.border-action{border-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.border-current{border-color:currentColor}.border-interface{border-color:var(--skyra-interface-color)}@supports (color:color-mix(in lab,red,red)){.border-interface{border-color:color-mix(in srgb,var(--skyra-interface-color),transparent 0%)}}.border-transparent{border-color:#0000}.bg-action{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.bg-action{background-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.bg-action\\/10{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.bg-action\\/10{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)10%,transparent)}}.bg-bg{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.bg-bg{background-color:color-mix(in srgb,var(--skyra-bg-color),transparent 0%)}}.bg-minimized{background-color:var(--skyra-minimized-bg)}@supports (color:color-mix(in lab,red,red)){.bg-minimized{background-color:color-mix(in srgb,var(--skyra-minimized-bg),transparent 0%)}}.bg-transparent{background-color:#0000}.fill-\\[\\#003355\\]{fill:#035}.fill-transparent{fill:#0000}.stroke-current{stroke:currentColor}.object-cover{-o-object-fit:cover;object-fit:cover}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.p-8{padding:calc(var(--spacing)*8)}.px-0{padding-inline:calc(var(--spacing)*0)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-0{padding-block:calc(var(--spacing)*0)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-2{padding-block:calc(var(--spacing)*2)}.py-6{padding-block:calc(var(--spacing)*6)}.pt-4{padding-top:calc(var(--spacing)*4)}.pt-10{padding-top:calc(var(--spacing)*10)}.pr-5{padding-right:calc(var(--spacing)*5)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.pl-0\\.5{padding-left:calc(var(--spacing)*.5)}.pl-4{padding-left:calc(var(--spacing)*4)}.text-center{text-align:center}.text-left{text-align:left}.font-body{font-family:var(--skyra-font-body)}.font-heading{font-family:var(--skyra-font-heading)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:1.25em;line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:.875em;line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:.75em;line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-md{font-size:1.125em}.leading-4{--tw-leading:calc(var(--spacing)*4);line-height:calc(var(--spacing)*4)}.leading-none{--tw-leading:1;line-height:1}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#012A53\\]{color:#012a53}.text-action-text{color:var(--skyra-action-text-color)}@supports (color:color-mix(in lab,red,red)){.text-action-text{color:color-mix(in srgb,var(--skyra-action-text-color),transparent 0%)}}.text-bg{color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.text-bg{color:color-mix(in srgb,var(--skyra-bg-color),transparent 0%)}}.text-current{color:currentColor}.text-error{color:var(--skyra-error-color)}@supports (color:color-mix(in lab,red,red)){.text-error{color:color-mix(in srgb,var(--skyra-error-color),transparent 0%)}}.text-link{color:var(--skyra-link-color)}@supports (color:color-mix(in lab,red,red)){.text-link{color:color-mix(in srgb,var(--skyra-link-color),transparent 0%)}}.text-minimized-text{color:var(--skyra-minimized-text)}@supports (color:color-mix(in lab,red,red)){.text-minimized-text{color:color-mix(in srgb,var(--skyra-minimized-text),transparent 0%)}}.text-text{color:var(--skyra-text-color)}@supports (color:color-mix(in lab,red,red)){.text-text{color:color-mix(in srgb,var(--skyra-text-color),transparent 0%)}}.text-transparent{color:#0000}.text-warning{color:var(--skyra-warning-color)}@supports (color:color-mix(in lab,red,red)){.text-warning{color:color-mix(in srgb,var(--skyra-warning-color),transparent 0%)}}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.underline{text-decoration-line:underline}.underline-offset-4{text-underline-offset:4px}.opacity-50{opacity:.5}.opacity-85{opacity:.85}.shadow{--tw-shadow:var(--skyra-shadow,0 0 20px 4px rgb(from var(--skyra-action-color)r g b/.25));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-minimized{--tw-shadow:var(--skyra-minimized-shadow);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-\\[3px\\]{--tw-ring-offset-width:3px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.blur-\\[75px\\]{--tw-blur:blur(75px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.\\[background\\:linear-gradient\\(180deg\\,rgb\\(224\\,251\\,166\\)_0\\%\\,rgb\\(223\\.85\\,250\\.83\\,166\\.74\\)_11\\.79\\%\\,rgb\\(223\\.42\\,250\\.35\\,168\\.85\\)_21\\.38\\%\\,rgb\\(222\\.73\\,249\\.59\\,172\\.2\\)_29\\.12\\%\\,rgb\\(221\\.83\\,248\\.59\\,176\\.62\\)_35\\.34\\%\\,rgb\\(220\\.73\\,247\\.37\\,181\\.97\\)_40\\.37\\%\\,rgb\\(219\\.48\\,245\\.98\\,188\\.11\\)_44\\.56\\%\\,rgb\\(218\\.09\\,244\\.44\\,194\\.87\\)_48\\.24\\%\\,rgb\\(216\\.61\\,242\\.79\\,202\\.13\\)_51\\.76\\%\\,rgb\\(215\\.06\\,241\\.06\\,209\\.72\\)_55\\.44\\%\\,rgb\\(213\\.47\\,239\\.3\\,217\\.5\\)_59\\.63\\%\\,rgb\\(211\\.87\\,237\\.52\\,225\\.31\\)_64\\.66\\%\\,rgb\\(210\\.29\\,235\\.77\\,233\\.02\\)_70\\.88\\%\\,rgb\\(208\\.77\\,234\\.07\\,240\\.47\\)_78\\.62\\%\\,rgb\\(207\\.33\\,232\\.47\\,247\\.51\\)_88\\.21\\%\\,rgb\\(206\\,231\\,254\\)_100\\%\\)\\]{background:linear-gradient(#e0fba6,#e0fba7 11.79%,#dffaa9 21.38%,#dffaac 29.12%,#def9b1 35.34%,#ddf7b6 40.37%,#dbf6bc 44.56%,#daf4c3 48.24%,#d9f3ca 51.76%,#d7f1d2 55.44%,#d5efda 59.63%,#d4eee1 64.66%,#d2ece9 70.88%,#d1eaf0 78.62%,#cfe8f8 88.21%,#cee7fe)}.placeholder\\:text-text\\/60::-moz-placeholder{color:var(--skyra-text-color)}.placeholder\\:text-text\\/60::placeholder{color:var(--skyra-text-color)}@supports (color:color-mix(in lab,red,red)){.placeholder\\:text-text\\/60::-moz-placeholder{color:color-mix(in oklab,color-mix(in srgb,var(--skyra-text-color),transparent 0%)60%,transparent)}.placeholder\\:text-text\\/60::placeholder{color:color-mix(in oklab,color-mix(in srgb,var(--skyra-text-color),transparent 0%)60%,transparent)}}.before\\:size-2\\.5:before{content:var(--tw-content);width:calc(var(--spacing)*2.5);height:calc(var(--spacing)*2.5)}.before\\:origin-bottom-left:before{content:var(--tw-content);transform-origin:0 100%}.before\\:scale-0:before{content:var(--tw-content);--tw-scale-x:0%;--tw-scale-y:0%;--tw-scale-z:0%;scale:var(--tw-scale-x)var(--tw-scale-y)}.before\\:rounded-xs:before{content:var(--tw-content);border-radius:var(--skyra-radius-sm,2px)}.before\\:shadow-\\[inset_1em_1em_currentcolor\\]:before{content:var(--tw-content);--tw-shadow:inset 1em 1em var(--tw-shadow-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.before\\:transition-all:before{content:var(--tw-content);transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.before\\:\\[transition-duration\\:100ms\\]:before{content:var(--tw-content);transition-duration:.1s}.before\\:content-\\[\\'\\'\\]:before{--tw-content:"";content:var(--tw-content)}.before\\:\\[clip-path\\:polygon\\(14\\%_44\\%\\,0_65\\%\\,50\\%_100\\%\\,100\\%_16\\%\\,80\\%_0\\%\\,43\\%_62\\%\\)\\]:before{content:var(--tw-content);clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%)}.checked\\:border-8:checked{border-style:var(--tw-border-style);border-width:8px}.checked\\:border-action:checked{border-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.checked\\:border-action:checked{border-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.checked\\:bg-action:checked{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.checked\\:bg-action:checked{background-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.checked\\:text-bg:checked{color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.checked\\:text-bg:checked{color:color-mix(in srgb,var(--skyra-bg-color),transparent 0%)}}.checked\\:before\\:scale-100:checked:before{content:var(--tw-content);--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-within\\:ring-action:focus-within{--tw-ring-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.focus-within\\:ring-action:focus-within{--tw-ring-color:color-mix(in srgb,var(--skyra-action-color),transparent 0% )}}.focus-within\\:ring-offset-2:focus-within{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus-within\\:ring-offset-bg:focus-within{--tw-ring-offset-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.focus-within\\:ring-offset-bg:focus-within{--tw-ring-offset-color:color-mix(in srgb,var(--skyra-bg-color),transparent 0% )}}@media(hover:hover){.hover\\:border-action\\/80:hover{border-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:border-action\\/80:hover{border-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)80%,transparent)}}.hover\\:bg-action:hover{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-action:hover{background-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.hover\\:bg-action\\/10:hover{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-action\\/10:hover{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)10%,transparent)}}.hover\\:bg-action\\/80:hover{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-action\\/80:hover{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)80%,transparent)}}.hover\\:text-action-text:hover{color:var(--skyra-action-text-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:text-action-text:hover{color:color-mix(in srgb,var(--skyra-action-text-color),transparent 0%)}}.hover\\:text-link\\/80:hover{color:var(--skyra-link-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:text-link\\/80:hover{color:color-mix(in oklab,color-mix(in srgb,var(--skyra-link-color),transparent 0%)80%,transparent)}}.hover\\:ring-2:hover{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:ring-action:hover{--tw-ring-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:ring-action:hover{--tw-ring-color:color-mix(in srgb,var(--skyra-action-color),transparent 0% )}}.hover\\:ring-offset-2:hover{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.hover\\:ring-offset-bg:hover{--tw-ring-offset-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:ring-offset-bg:hover{--tw-ring-offset-color:color-mix(in srgb,var(--skyra-bg-color),transparent 0% )}}.hover\\:outline-2:hover{outline-style:var(--tw-outline-style);outline-width:2px}.hover\\:outline-offset-2:hover{outline-offset:2px}.hover\\:outline-action:hover{outline-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:outline-action:hover{outline-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:bg-action\\/10:focus-visible{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.focus-visible\\:bg-action\\/10:focus-visible{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)10%,transparent)}}.focus-visible\\:no-underline:focus-visible{text-decoration-line:none}.focus-visible\\:ring-transparent:focus-visible{--tw-ring-color:transparent}.focus-visible\\:outline-hidden:focus-visible{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.focus-visible\\:outline-hidden:focus-visible{outline-offset:2px;outline:2px solid #0000}}.focus-visible\\:outline-2:focus-visible{outline-style:var(--tw-outline-style);outline-width:2px}.focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.focus-visible\\:outline-offset-\\[-2px\\]:focus-visible{outline-offset:-2px}.focus-visible\\:outline-action:focus-visible{outline-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.focus-visible\\:outline-action:focus-visible{outline-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.focus-visible\\:outline-current:focus-visible{outline-color:currentColor}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.has-focus-visible\\:outline-2:has(:focus-visible){outline-style:var(--tw-outline-style);outline-width:2px}.has-focus-visible\\:outline-offset-4:has(:focus-visible){outline-offset:4px}.has-focus-visible\\:outline-current:has(:focus-visible){outline-color:currentColor}.aria-\\[invalid\\=true\\]\\:border-error[aria-invalid=true]{border-color:var(--skyra-error-color)}@supports (color:color-mix(in lab,red,red)){.aria-\\[invalid\\=true\\]\\:border-error[aria-invalid=true]{border-color:color-mix(in srgb,var(--skyra-error-color),transparent 0%)}}@media(hover:hover){.aria-\\[invalid\\=true\\]\\:hover\\:border-error\\/50[aria-invalid=true]:hover{border-color:var(--skyra-error-color)}@supports (color:color-mix(in lab,red,red)){.aria-\\[invalid\\=true\\]\\:hover\\:border-error\\/50[aria-invalid=true]:hover{border-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-error-color),transparent 0%)50%,transparent)}}}.aria-\\[invalid\\=true\\]\\:focus-visible\\:ring-error\\/20[aria-invalid=true]:focus-visible{--tw-ring-color:var(--skyra-error-color)}@supports (color:color-mix(in lab,red,red)){.aria-\\[invalid\\=true\\]\\:focus-visible\\:ring-error\\/20[aria-invalid=true]:focus-visible{--tw-ring-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-error-color),transparent 0% )20%,transparent)}}.data-\\[selected\\=true\\]\\:border-action[data-selected=true]{border-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.data-\\[selected\\=true\\]\\:border-action[data-selected=true]{border-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.data-\\[selected\\=true\\]\\:bg-action[data-selected=true]{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.data-\\[selected\\=true\\]\\:bg-action[data-selected=true]{background-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.data-\\[selected\\=true\\]\\:font-semibold[data-selected=true]{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.data-\\[selected\\=true\\]\\:text-action-text[data-selected=true]{color:var(--skyra-action-text-color)}@supports (color:color-mix(in lab,red,red)){.data-\\[selected\\=true\\]\\:text-action-text[data-selected=true]{color:color-mix(in srgb,var(--skyra-action-text-color),transparent 0%)}}@media(min-width:40rem){.sm\\:h-screen{height:100vh}.sm\\:w-4\\/12{width:33.3333%}.sm\\:w-8\\/12{width:66.6667%}.sm\\:p-10{padding:calc(var(--spacing)*10)}}@media(min-width:48rem){.md\\:col-span-2{grid-column:span 2/span 2}.md\\:m-4{margin:calc(var(--spacing)*4)}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:gap-2{gap:calc(var(--spacing)*2)}.md\\:gap-4{gap:calc(var(--spacing)*4)}.md\\:px-0{padding-inline:calc(var(--spacing)*0)}.md\\:px-6{padding-inline:calc(var(--spacing)*6)}.md\\:pt-6{padding-top:calc(var(--spacing)*6)}.md\\:pb-6{padding-bottom:calc(var(--spacing)*6)}.md\\:text-lg{font-size:1.25em;line-height:var(--tw-leading,var(--text-lg--line-height))}.md\\:text-sm{font-size:.875em;line-height:var(--tw-leading,var(--text-sm--line-height))}}@media(min-width:64rem){.lg\\:mt-0{margin-top:calc(var(--spacing)*0)}.lg\\:flex{display:flex}.lg\\:text-6xl{font-size:var(--text-6xl);line-height:var(--tw-leading,var(--text-6xl--line-height))}}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#000F0D\\]{background-color:#000f0d}.dark\\:text-\\[\\#FFFFFF\\]{color:#fff}}@media(pointer:coarse){.pointer-coarse\\:hidden{display:none}}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}}:host{--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-outline-style:solid;--tw-font-weight:initial;--tw-tracking:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:rotateX(0);--tw-rotate-y:rotateY(0);--tw-rotate-z:rotateZ(0);--tw-skew-x:skewX(0);--tw-skew-y:skewY(0);--tw-space-x-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-duration:initial;--tw-ease:initial}.scroll-area{scroll-timeline:--scroll-timeline y;scroll-timeline:--scroll-timeline vertical;max-height:min(var(--skyra-option-list-max-height,400px),35vh);position:relative;overflow-y:auto}:host{--skyra-classic-neutral-hover:var(--skyra-authored-interface-color)}@supports (color:color-mix(in lab,red,red)){:host{--skyra-classic-neutral-hover:color-mix(in srgb,var(--skyra-authored-interface-color)10%,transparent)}}:host{--skyra-classic-neutral-hover-text:var(--skyra-authored-interface-color)}@supports (color:color-mix(in lab,red,red)){:host{--skyra-classic-neutral-hover-text:color-mix(in srgb,var(--skyra-authored-interface-color)0%,var(--skyra-text-color))}}:is(button,a,input,textarea,select):focus-visible,[part=list-item]:has(input:focus-visible){outline:var(--skyra-authored-focus-outline,revert-layer);outline-offset:var(--skyra-authored-focus-ring-offset,revert-layer)}[part=list-item]:has(input:focus-visible){box-shadow:var(--skyra-authored-focus-shadow,revert-layer)}[part=button-primary],[part=button-secondary]{box-shadow:var(--skyra-authored-shadow-sm,none)}[part=button-secondary]{background:var(--skyra-authored-secondary-color,revert-layer)}[part=button-secondary]:hover,[part=button-chip]:not([data-selected=true]):hover,[part=list-item]:not(:has(input:checked)):hover{background:var(--skyra-classic-neutral-hover,revert-layer);color:var(--skyra-classic-neutral-hover-text,revert-layer)}[part=button-chip],[part=button-secondary],[part=list-item],input:not([type=radio],[type=checkbox]),textarea{border-color:var(--skyra-authored-border-color,revert-layer);border-width:var(--skyra-authored-border-width,revert-layer);border-style:var(--skyra-authored-border-style,revert-layer)}[part=list-item]{border-radius:var(--skyra-authored-radius-md,revert-layer)}[part=list-item]:has(input:checked),[part=button-chip][data-selected=true]{background:var(--skyra-action-color);color:var(--skyra-action-text-color);border-color:var(--skyra-action-color)}[part=list-item] input:checked{color:var(--skyra-action-text-color);border-color:var(--skyra-action-text-color)}[part=list-item] input:not(:checked){border-color:var(--skyra-authored-border-color,revert-layer)}[data-input-feedback]{color:var(--skyra-authored-muted-text-color,inherit)}.skyra-input{background:var(--skyra-authored-secondary-color,revert-layer)}.skyra-input:focus-visible{background:var(--skyra-authored-secondary-color,var(--skyra-classic-neutral-hover,revert-layer))}.skyra-input[aria-invalid=true]{border-color:var(--skyra-error-color)}@media(min-width:1024px){.scroll-area{max-height:clamp(20vh,var(--skyra-option-list-max-height,400px),35vh)}}.scroll-area .scroll-area-up,.scroll-area .scroll-area-down{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.scroll-area .scroll-area-up,.scroll-area .scroll-area-down{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-bg-color),transparent 0%)80%,transparent)}}.scroll-area .scroll-area-up,.scroll-area .scroll-area-down{-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);cursor:pointer;border:none;justify-content:center;align-items:center;width:100%;height:1.5em;transition:background-color .2s,transform .1s,opacity .2s;display:flex;position:sticky;left:0;right:0}.scroll-area .scroll-area-up:hover,.scroll-area .scroll-area-down:hover{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.scroll-area .scroll-area-up:hover,.scroll-area .scroll-area-down:hover{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-bg-color),transparent 0%)90%,transparent)}}.scroll-area .scroll-area-up:focus,.scroll-area .scroll-area-down:focus{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.scroll-area .scroll-area-up:focus,.scroll-area .scroll-area-down:focus{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-bg-color),transparent 0%)90%,transparent)}}.scroll-area .scroll-area-up:focus,.scroll-area .scroll-area-down:focus{outline:var(--skyra-authored-focus-outline,2px solid var(--color-interface));outline-offset:var(--skyra-authored-focus-ring-offset,-2px)}.scroll-area .scroll-area-up:active,.scroll-area .scroll-area-down:active{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.scroll-area .scroll-area-up:active,.scroll-area .scroll-area-down:active{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-bg-color),transparent 0%)95%,transparent)}}.scroll-area .scroll-area-up:active,.scroll-area .scroll-area-down:active{transform:scale(.98)}.scroll-area-up{opacity:1;pointer-events:auto;top:-2px}.scroll-area-down{opacity:1;pointer-events:auto;bottom:-1px}.scroll-area[data-scrollable=false] .scroll-area-up,.scroll-area[data-scrollable=false] .scroll-area-down,.scroll-area[data-scrollable=unknown] .scroll-area-up,.scroll-area[data-scrollable=unknown] .scroll-area-down{opacity:0!important;pointer-events:none!important;display:none!important}.scroll-area[data-at-top=true] .scroll-area-up,.scroll-area[data-at-bottom=true] .scroll-area-down{opacity:0!important;pointer-events:none!important}@supports (animation-timeline:scroll()){.scroll-area-up{opacity:1;pointer-events:auto;animation:linear reveal-top;animation-timeline:--scroll-timeline;animation-range:0 1px}.scroll-area-down{animation:linear reveal-bottom;animation-timeline:--scroll-timeline;animation-range:entry exit 0%}}@keyframes reveal-top{0%{opacity:0;pointer-events:none}to{opacity:1;pointer-events:auto}}@keyframes reveal-bottom{0%{opacity:1;pointer-events:auto}to{opacity:0;pointer-events:none}}:host{--ease-out:cubic-bezier(.16,1,.3,1);--ease-out-soft:cubic-bezier(.33,1,.68,1);--duration-fast:.15s;--duration:.28s;--duration-slow:.5s}@keyframes content-enter{0%{opacity:0;transform:translate(8px)}to{opacity:1;transform:translate(0)}}.survey-content-enter{animation:content-enter var(--duration-slow)var(--ease-out)both}@keyframes wrapper-enter-up{0%{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes wrapper-enter-down{0%{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}@keyframes shake{0%{transform:translate(0)}25%{transform:translate(-6px)}50%{transform:translate(6px)}75%{transform:translate(-6px)}to{transform:translate(0)}}.survey-enter-up{animation:wrapper-enter-up var(--duration)var(--ease-out)both}.survey-enter-down{animation:wrapper-enter-down var(--duration)var(--ease-out)both}.survey-shake{animation:shake var(--duration)ease-in-out}.survey-container{interpolate-size:allow-keywords;border:var(--skyra-border-width,1px)var(--skyra-border-style,solid)var(--skyra-border-color,var(--skyra-action-color));grid-template:1fr/1fr;display:grid}@supports (color:color-mix(in lab,red,red)){.survey-container{border:var(--skyra-border-width,1px)var(--skyra-border-style,solid)var(--skyra-border-color,color-mix(in srgb,var(--skyra-action-color)50%,transparent))}}.survey-container{background:var(--skyra-bg-color);border-radius:var(--skyra-radius-lg,8px);box-shadow:var(--skyra-shadow-md,var(--skyra-shadow,0 0 20px 4px rgb(from var(--skyra-action-color)r g b/.25)));transition:background-color 0s,border-color var(--duration-fast)var(--ease-out-soft),border-radius var(--duration)var(--ease-out-soft),box-shadow var(--duration-fast)var(--ease-out-soft);overflow:hidden}.survey-container[data-minimized=true]{background:var(--skyra-minimized-bg);border-color:var(--skyra-minimized-border);border-radius:var(--skyra-radius-sm,4px);box-shadow:var(--skyra-minimized-shadow);transition:background-color 0s,border-color var(--duration)var(--ease-out-soft),border-radius var(--duration)var(--ease-out-soft),box-shadow var(--duration)var(--ease-out-soft)}.survey-content,.survey-pill{grid-area:1/1}.survey-content{width:min(var(--card-max-width,400px),calc(100vw - 32px));opacity:1;visibility:visible;height:auto;transition:opacity var(--duration)var(--ease-out-soft),visibility 0s,width var(--duration-fast)var(--ease-out),height var(--duration-fast)var(--ease-out);overflow:visible}.survey-container[data-minimized=true] .survey-content{opacity:0;visibility:hidden;pointer-events:none;width:0;height:0;transition:opacity var(--duration-fast)var(--ease-out-soft),visibility 0s var(--duration-fast),width 0s,height 0s;overflow:hidden}.survey-pill{color:var(--skyra-minimized-text);cursor:pointer;white-space:nowrap;opacity:0;visibility:hidden;width:0;height:0;transition:opacity var(--duration-fast)var(--ease-out-soft),visibility 0s var(--duration-fast),width 0s var(--duration-fast),height 0s var(--duration-fast);background:0 0;border:none;align-items:center;gap:8px;padding:8px;display:flex;overflow:hidden}.survey-container[data-minimized=true] .survey-pill{opacity:1;visibility:visible;width:auto;height:auto;transition:opacity var(--duration)var(--ease-out-soft),visibility 0s,width 0s,height 0s;overflow:visible}.survey-pill:hover{background-color:#ffffff1a}.survey-pill:focus-visible{outline:var(--skyra-authored-focus-outline,2px solid var(--skyra-bg-color));outline-offset:var(--skyra-authored-focus-ring-offset,2px)}@media(prefers-reduced-motion:reduce){.survey-container,.survey-content,.survey-pill{transition-duration:.01ms!important}.survey-content-enter,.survey-enter-up,.survey-enter-down,.survey-shake{animation:none!important}}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}`,
		rA =
			":host{background:transparent;--skyra-action-text-color: #f5f7fa}.survey-inline-surface{box-sizing:border-box;background:var(--skyra-authored-bg-color, transparent);padding:var(--skyra-authored-inline-padding, 0);border:var(--skyra-authored-container-border, 0 solid transparent);border-radius:var(--skyra-radius-lg, 10px);box-shadow:var(--skyra-authored-shadow-md, none)}",
		nA =
			"@layer components{@media(prefers-color-scheme:dark){:host{--skyra-bg-color: #00173a;--skyra-text-color: white;--skyra-interface-color: white;--skyra-action-color: white;--skyra-secondary-color: #3d4e5f;--skyra-link-color: #d7f0fe;--skyra-error-color: #ff5555;--skyra-warning-color: #feb570;--skyra-z-index: 2147483647}}}";
	function oA({
		cardKey: e,
		inline: t = !1,
		flow: r = !1,
		minimized: n = !1,
		children: o,
		size: i = "Regular",
		themeOverrides: s,
		theme: a,
		themeMode: l,
		...u
	}) {
		const d = pr(),
			c = u.position ?? "BottomLeft",
			f = zt(!0),
			p = ov(
				r ? `${e}-${n}` : e,
				n
					? ".survey-pill"
					: r
						? '[part="heading"]'
						: "[data-card-focus-target]",
				r,
			);
		Ag(() => {
			f.value = !1;
		});
		const h = Xr(() => {
				const v = a ?? (r ? Ap[0] : void 0);
				return v
					? Cp(v, { themeMode: l ?? "Auto", selector: ":host", authored: !!a })
					: null;
			}, [a, l, r]),
			g = {
				TopLeft: "top-0 right-auto",
				TopRight: "top-0 left-auto items-end",
				BottomLeft: "bottom-0 right-auto",
				BottomRight: "bottom-0 left-auto items-end",
			},
			y = {
				TopLeft: "survey-enter-down",
				TopRight: "survey-enter-down",
				BottomLeft: "survey-enter-up",
				BottomRight: "survey-enter-up",
			};
		return k(bt, {
			children: [
				k("style", { children: [tA, t ? rA : nA] }),
				k("style", { children: $p({ themeMode: l ?? "Auto" }) }),
				h && k("style", { children: h }),
				k("style", {
					children: Ep(s, { selector: ":host", themeMode: l ?? "Auto" }),
				}),
				r && k("style", { children: nv }),
				k(
					"aside",
					{
						ref: p,
						"data-nosnippet": !0,
						part: "wrapper",
						"data-position": c,
						"data-flow": r || void 0,
						className: `
          ${
						t === !1 &&
						!r &&
						`
            fixed inset-x-0
            m-2 md:m-4
            z-wrapper
            ${c ? g[c] : ""}
          `
					}
          font-body
          ${d.value ? "" : "survey-shake"}
          ${f.value ? y[c] : ""}
        `,
						children: o,
					},
					"skyra-wrapper",
				),
			],
		});
	}
	function iA({
		card: e,
		capture: t,
		finalCard: r,
		firstCard: n,
		sessionId: o,
		size: i,
		storedValue: s,
		survey: a,
	}) {
		const l = Qe(t, (d) => d.context.language),
			u = Qe(t, (d) => d.matches({ Running: "Minimized" }));
		return k(oA, {
			cardKey: e.id,
			size: i,
			inline: a.renderType === "Inline",
			flow: a.renderType === "App",
			minimized: u,
			position: a.surveyPosition,
			themeOverrides: a.themeOverrides,
			theme: a.theme,
			themeMode: a.themeMode,
			children: k(
				eA,
				{
					card: e,
					sessionId: o,
					storedValue: s,
					close: () => t.send({ type: "reject" }),
					minimize: () => t.send({ type: "minimize" }),
					maximize: () => t.send({ type: "maximize" }),
					next: (d, c) => {
						t.send({ type: "submit", cardId: e.id, key: c, value: d });
					},
					prev: () => {
						t.send({ type: "goBack" });
					},
					survey: a,
					firstCard: n,
					finalCard: r,
				},
				`${e.id}-${l}`,
			),
		});
	}
	function sA(e, t) {
		var n, o, i, s, a, l, u, d, c, f, p;
		const r = Ce(e.id);
		switch (e.type) {
			case "InputCard":
			case "RecruitmentCard":
				return (n = t.values) == null ? void 0 : n[e.id];
			case "LikertCard":
				return (i = (o = t.variables) == null ? void 0 : o.scales) == null
					? void 0
					: i[r];
			case "MultiSelectCard":
				return (a = (s = t.variables) == null ? void 0 : s.multiSelect) == null
					? void 0
					: a[r];
			case "SingleSelectCard":
				return (u = (l = t.variables) == null ? void 0 : l.singleSelect) == null
					? void 0
					: u[r];
			case "SegmentCard":
				return (c = (d = t.variables) == null ? void 0 : d.segments) == null
					? void 0
					: c[Ce(e.segment.id)];
			case "TopTaskCard":
				return (f = t.variables) == null ? void 0 : f.task;
			case "CompletionCard":
				return (p = t.variables) == null ? void 0 : p.completion;
			default:
				return;
		}
	}
	function aA({ capture: e, api: t }) {
		const r = Qe(e, (a) => a),
			{ survey: n, sessionId: o, state: i } = r.context;
		return !r.matches("Running") || !o
			? null
			: k(u2, {
					api: t,
					survey: n,
					state: i,
					captureMachine: e,
					children: k(lA, { capture: e, api: t }),
				});
	}
	function lA({ capture: e, api: t }) {
		const r = Cs(),
			n = eu(),
			{ state: o, sessionId: i } = Qe(n, (d) => d.context),
			s =
				o.currentCard === void 0
					? 0
					: r.cards.findIndex((d) => d.order === o.currentCard),
			a = r.cards[s];
		if (!a) return null;
		const l = {
			card: a,
			capture: e,
			sessionId: i,
			survey: r,
			firstCard: s === 0,
			finalCard: s === r.cards.length - 1,
			storedValue: sA(a, o),
		};
		return ((t == null
			? void 0
			: t.getRendererVariant(r.fullSlug, r.rendererVariant ?? "classic")) ??
			r.rendererVariant) === "beta"
			? k(EE, { ...l })
			: k(iA, {
					...l,
					size:
						a.type === "LikertCard" && a.likertScale.likertItems.length >= 5
							? "Large"
							: "Regular",
				});
	}
	function pv(e, t, r, n) {
		if (!e) return;
		const o = new CustomEvent(t, { detail: r, bubbles: !0, composed: !0 });
		e.dispatchEvent(o), n == null || n(o);
	}
	function uA(e, t, r, n) {
		return e.ready || e.terminal
			? !1
			: (pv(t, "skyra-ready", r, n), (e.ready = !0), !0);
	}
	function oi(e, t, r, n, o) {
		return e.ready || e.terminal ? !1 : (pv(t, r, n, o), (e.terminal = !0), !0);
	}
	function cA(e, t, r) {
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
		if (!r)
			return {
				slug: e,
				code: "not_eligible",
				message: `Inline survey "${e}" is not eligible on this page.`,
			};
	}
	function dA(e, t) {
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
	function pA(e) {
		return {
			slug: e,
			code: "controller_unavailable",
			message:
				"Skyra controller was not available before the inline survey timed out.",
		};
	}
	function fA(e) {
		return {
			slug: e,
			code: "unsupported_controller_version",
			message: "Inline lifecycle events require the Skyra V2 controller.",
		};
	}
	function Vn(e) {
		const t = e == null ? void 0 : e.getRootNode();
		return typeof ShadowRoot < "u" && t instanceof ShadowRoot ? t.host : null;
	}
	const Rt = new YT();
	if (typeof window < "u") {
		window.skyra || (window.skyra = Rt),
			window.SKYRA_CONFIG ||
				(window.SKYRA_CONFIG = {
					autoStart: !0,
					org: "",
					cookieConsent: !0,
					testMode: !1,
				});
		const e =
				((mv = window.SKYRA_CONFIG) == null ? void 0 : mv.autoStart) !== !1,
			t = !!((yv = window.SKYRA_CONFIG) != null && yv.org);
		e && t
			? Rt.start()
			: e && !t && console.warn("Skyra: org is not specified in SKYRA_CONFIG");
	}
	function bu({ capture: e }) {
		return k(aA, { capture: e, api: Rt });
	}
	function fv({
		slug: e,
		inline: t,
		cookieConsent: r,
		consent: n = !0,
		lang: o,
		onReady: i,
		onUnavailable: s,
		onError: a,
	}) {
		const [l, u] = Fe(0),
			d = 30,
			c = Se(null),
			f = Se({ ready: !1, terminal: !1 }),
			p = Rt.controller;
		if (
			(Re(() => {
				o && Rt.setExplicitLanguage(e, o);
			}, [e, o]),
			Re(() => {
				var v;
				if (!p && Rt.controller) {
					u((b) => b + 1);
					return;
				}
				if (!Rt.controller && l < d) {
					const b = setInterval(() => {
						Rt.controller ? (clearInterval(b), u(0)) : u((w) => w + 1);
					}, 100);
					return () => clearInterval(b);
				}
				l >= d &&
					!Rt.controller &&
					(((v = window.SKYRA_CONFIG) == null ? void 0 : v.autoStart) !== !1 &&
						Ft(`Skyra survey (${e}): No controller found after ${d} attempts`),
					oi(f.current, Vn(c.current), "skyra-error", pA(e), a));
			}, [e, l, p, a]),
			Re(() => {
				var S, T;
				if (!p) return;
				const v = `${e}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
				let b = !1;
				const w = () => {
					b ||
						((b = !0),
						p.send({ type: "surveyMounted", slug: e, instanceId: v }));
				};
				return (
					(S = p.on) == null || S.call(p, "ready", w),
					((T = p.getSnapshot) == null ? void 0 : T.call(p).value) ===
						"Ready" && w(),
					() => {
						var O;
						(O = p.off) == null || O.call(p, "ready", w);
					}
				);
			}, [e, p]),
			!p)
		)
			return k("span", { ref: c, hidden: !0 });
		const h = p.getVersion() === "v2";
		if (
			(Re(() => {
				h ||
					f.current.terminal ||
					oi(f.current, Vn(c.current), "skyra-unavailable", fA(e), s);
			}, [h, e, s]),
			!h)
		)
			return k("span", { ref: c, hidden: !0 });
		const g = Qe(p.getActor(), (v) => p.findCaptureBySlug(e)),
			y = Qe(p.getActor(), (v) => {
				var S, T, O;
				const b =
						(S = v.context.surveys) == null
							? void 0
							: S.find((N) => N.fullSlug === e),
					w =
						(T = v.context.inlineSurveys) == null
							? void 0
							: T.some((N) => N.fullSlug === e);
				return {
					ready: v.value === "Ready",
					survey: b,
					isInlineEligible: w,
					failure: (O = v.context.inlineFailures) == null ? void 0 : O[e],
				};
			});
		return (
			Re(() => {
				if (!g || f.current.ready || f.current.terminal) return;
				const v = g.getSnapshot(),
					b = v.context.survey,
					w = v.context.sessionId;
				!b ||
					b.renderType !== "Inline" ||
					!w ||
					uA(
						f.current,
						Vn(c.current),
						{ slug: e, surveyId: b.id, sessionId: w },
						i,
					);
			}, [g, e, i]),
			Re(() => {
				if (!y.failure || f.current.ready || f.current.terminal) return;
				const v = dA(e, y.failure);
				v.name === "skyra-unavailable"
					? oi(f.current, Vn(c.current), v.name, v.detail, s)
					: oi(f.current, Vn(c.current), v.name, v.detail, a);
			}, [y.failure, e, s, a]),
			Re(() => {
				if (!y.ready || g || y.failure || f.current.ready || f.current.terminal)
					return;
				const v = window.setTimeout(() => {
					if (f.current.ready || f.current.terminal) return;
					const b = cA(e, y.survey, y.isInlineEligible);
					b && oi(f.current, Vn(c.current), "skyra-unavailable", b, s);
				}, 100);
				return () => window.clearTimeout(v);
			}, [g, y, e, s]),
			k(bt, {
				children: [
					k("span", { ref: c, hidden: !0 }),
					g ? k(bu, { capture: g }) : null,
				],
			})
		);
	}
	function hv({ slug: e }) {
		const t = Rt.previewController,
			r = Qe(t ?? void 0, (n) => (n == null ? void 0 : n.context.machine));
		return r ? k(bu, { capture: r }) : null;
	}
	return (
		typeof customElements.get("skyra-survey") < "u" ||
			sc(
				fv,
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
			sc(hv, "skyra-preview", ["slug"], { shadow: !0 }),
		(dt.Survey = fv),
		(dt.SurveyPreview = hv),
		(dt.SurveyWidget = bu),
		Object.defineProperty(dt, Symbol.toStringTag, { value: "Module" }),
		dt
	);
})({});
