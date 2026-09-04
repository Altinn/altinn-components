var skyraSurvey = (function (Qt) {
	"use strict";
	var Gc, Yc;
	var en,
		H,
		yi,
		vi,
		st,
		bi,
		wi,
		_i,
		ki,
		Hr,
		Ur,
		Vr,
		Si,
		tn = {},
		xi = [],
		eu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
		Pn = Array.isArray;
	function Re(e, t) {
		for (var n in t) e[n] = t[n];
		return e;
	}
	function Wr(e) {
		e && e.parentNode && e.parentNode.removeChild(e);
	}
	function vt(e, t, n) {
		var r,
			o,
			i,
			s = {};
		for (i in t)
			i == "key" ? (r = t[i]) : i == "ref" ? (o = t[i]) : (s[i] = t[i]);
		if (
			(arguments.length > 2 &&
				(s.children = arguments.length > 3 ? en.call(arguments, 2) : n),
			typeof e == "function" && e.defaultProps != null)
		)
			for (i in e.defaultProps) s[i] === void 0 && (s[i] = e.defaultProps[i]);
		return nn(e, s, r, o, null);
	}
	function nn(e, t, n, r, o) {
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
			__v: o ?? ++yi,
			__i: -1,
			__u: 0,
		};
		return o == null && H.vnode != null && H.vnode(i), i;
	}
	function Ee(e) {
		return e.children;
	}
	function rn(e, t) {
		(this.props = e), (this.context = t);
	}
	function bt(e, t) {
		if (t == null) return e.__ ? bt(e.__, e.__i + 1) : null;
		for (var n; t < e.__k.length; t++)
			if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
		return typeof e.type == "function" ? bt(e) : null;
	}
	function Ci(e) {
		var t, n;
		if ((e = e.__) != null && e.__c != null) {
			for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
				if ((n = e.__k[t]) != null && n.__e != null) {
					e.__e = e.__c.base = n.__e;
					break;
				}
			return Ci(e);
		}
	}
	function qr(e) {
		((!e.__d && (e.__d = !0) && st.push(e) && !Ln.__r++) ||
			bi != H.debounceRendering) &&
			((bi = H.debounceRendering) || wi)(Ln);
	}
	function Ln() {
		for (var e, t, n, r, o, i, s, a = 1; st.length; )
			st.length > a && st.sort(_i),
				(e = st.shift()),
				(a = st.length),
				e.__d &&
					((n = void 0),
					(r = void 0),
					(o = (r = (t = e).__v).__e),
					(i = []),
					(s = []),
					t.__P &&
						(((n = Re({}, r)).__v = r.__v + 1),
						H.vnode && H.vnode(n),
						Kr(
							t.__P,
							n,
							r,
							t.__n,
							t.__P.namespaceURI,
							32 & r.__u ? [o] : null,
							i,
							o ?? bt(r),
							!!(32 & r.__u),
							s,
						),
						(n.__v = r.__v),
						(n.__.__k[n.__i] = n),
						Ri(i, n, s),
						(r.__e = r.__ = null),
						n.__e != o && Ci(n)));
		Ln.__r = 0;
	}
	function zi(e, t, n, r, o, i, s, a, c, l, d) {
		var u,
			p,
			f,
			m,
			y,
			b,
			v,
			_ = (r && r.__k) || xi,
			x = t.length;
		for (c = tu(n, t, _, c, x), u = 0; u < x; u++)
			(f = n.__k[u]) != null &&
				((p = f.__i == -1 ? tn : _[f.__i] || tn),
				(f.__i = u),
				(b = Kr(e, f, p, o, i, s, a, c, l, d)),
				(m = f.__e),
				f.ref &&
					p.ref != f.ref &&
					(p.ref && Gr(p.ref, null, f), d.push(f.ref, f.__c || m, f)),
				y == null && m != null && (y = m),
				(v = !!(4 & f.__u)) || p.__k === f.__k
					? (c = Ti(f, c, e, v))
					: typeof f.type == "function" && b !== void 0
						? (c = b)
						: m && (c = m.nextSibling),
				(f.__u &= -7));
		return (n.__e = y), c;
	}
	function tu(e, t, n, r, o) {
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
						? (s = e.__k[i] = nn(null, s, null, null, null))
						: Pn(s)
							? (s = e.__k[i] = nn(Ee, { children: s }, null, null, null))
							: s.constructor === void 0 && s.__b > 0
								? (s = e.__k[i] =
										nn(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v))
								: (e.__k[i] = s),
					(c = i + p),
					(s.__ = e),
					(s.__b = e.__b + 1),
					(a = null),
					(l = s.__i = nu(s, n, c, u)) != -1 &&
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
					(a.__e == r && (r = bt(a)), Mi(a, a));
		return r;
	}
	function Ti(e, t, n, r) {
		var o, i;
		if (typeof e.type == "function") {
			for (o = e.__k, i = 0; o && i < o.length; i++)
				o[i] && ((o[i].__ = e), (t = Ti(o[i], t, n, r)));
			return t;
		}
		e.__e != t &&
			(r &&
				(t && e.type && !t.parentNode && (t = bt(e)),
				n.insertBefore(e.__e, t || null)),
			(t = e.__e));
		do t = t && t.nextSibling;
		while (t != null && t.nodeType == 8);
		return t;
	}
	function nu(e, t, n, r) {
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
	function Ii(e, t, n) {
		t[0] == "-"
			? e.setProperty(t, n ?? "")
			: (e[t] =
					n == null ? "" : typeof n != "number" || eu.test(t) ? n : n + "px");
	}
	function An(e, t, n, r, o) {
		var i, s;
		e: if (t == "style")
			if (typeof n == "string") e.style.cssText = n;
			else {
				if ((typeof r == "string" && (e.style.cssText = r = ""), r))
					for (t in r) (n && t in n) || Ii(e.style, t, "");
				if (n) for (t in n) (r && n[t] == r[t]) || Ii(e.style, t, n[t]);
			}
		else if (t[0] == "o" && t[1] == "n")
			(i = t != (t = t.replace(ki, "$1"))),
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
						: ((n.u = Hr), e.addEventListener(t, i ? Vr : Ur, i))
					: e.removeEventListener(t, i ? Vr : Ur, i);
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
	function $i(e) {
		return function (t) {
			if (this.l) {
				var n = this.l[t.type + e];
				if (t.t == null) t.t = Hr++;
				else if (t.t < n.u) return;
				return n(H.event ? H.event(t) : t);
			}
		};
	}
	function Kr(e, t, n, r, o, i, s, a, c, l) {
		var d,
			u,
			p,
			f,
			m,
			y,
			b,
			v,
			_,
			x,
			C,
			I,
			S,
			$,
			N,
			B,
			O,
			M = t.type;
		if (t.constructor !== void 0) return null;
		128 & n.__u && ((c = !!(32 & n.__u)), (i = [(a = t.__e = n.__e)])),
			(d = H.__b) && d(t);
		e: if (typeof M == "function")
			try {
				if (
					((v = t.props),
					(_ = "prototype" in M && M.prototype.render),
					(x = (d = M.contextType) && r[d.__c]),
					(C = d ? (x ? x.props.value : d.__) : r),
					n.__c
						? (b = (u = t.__c = n.__c).__ = u.__E)
						: (_
								? (t.__c = u = new M(v, C))
								: ((t.__c = u = new rn(v, C)),
									(u.constructor = M),
									(u.render = ou)),
							x && x.sub(u),
							u.state || (u.state = {}),
							(u.__n = r),
							(p = u.__d = !0),
							(u.__h = []),
							(u._sb = [])),
					_ && u.__s == null && (u.__s = u.state),
					_ &&
						M.getDerivedStateFromProps != null &&
						(u.__s == u.state && (u.__s = Re({}, u.__s)),
						Re(u.__s, M.getDerivedStateFromProps(v, u.__s))),
					(f = u.props),
					(m = u.state),
					(u.__v = t),
					p)
				)
					_ &&
						M.getDerivedStateFromProps == null &&
						u.componentWillMount != null &&
						u.componentWillMount(),
						_ && u.componentDidMount != null && u.__h.push(u.componentDidMount);
				else {
					if (
						(_ &&
							M.getDerivedStateFromProps == null &&
							v !== f &&
							u.componentWillReceiveProps != null &&
							u.componentWillReceiveProps(v, C),
						t.__v == n.__v ||
							(!u.__e &&
								u.shouldComponentUpdate != null &&
								u.shouldComponentUpdate(v, u.__s, C) === !1))
					) {
						for (
							t.__v != n.__v &&
								((u.props = v), (u.state = u.__s), (u.__d = !1)),
								t.__e = n.__e,
								t.__k = n.__k,
								t.__k.some(function (F) {
									F && (F.__ = t);
								}),
								I = 0;
							I < u._sb.length;
							I++
						)
							u.__h.push(u._sb[I]);
						(u._sb = []), u.__h.length && s.push(u);
						break e;
					}
					u.componentWillUpdate != null && u.componentWillUpdate(v, u.__s, C),
						_ &&
							u.componentDidUpdate != null &&
							u.__h.push(function () {
								u.componentDidUpdate(f, m, y);
							});
				}
				if (
					((u.context = C),
					(u.props = v),
					(u.__P = e),
					(u.__e = !1),
					(S = H.__r),
					($ = 0),
					_)
				) {
					for (
						u.state = u.__s,
							u.__d = !1,
							S && S(t),
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
							S && S(t),
							(d = u.render(u.props, u.state, u.context)),
							(u.state = u.__s);
					while (u.__d && ++$ < 25);
				(u.state = u.__s),
					u.getChildContext != null && (r = Re(Re({}, r), u.getChildContext())),
					_ &&
						!p &&
						u.getSnapshotBeforeUpdate != null &&
						(y = u.getSnapshotBeforeUpdate(f, m)),
					(B = d),
					d != null &&
						d.type === Ee &&
						d.key == null &&
						(B = Ei(d.props.children)),
					(a = zi(e, Pn(B) ? B : [B], t, n, r, o, i, s, a, c, l)),
					(u.base = t.__e),
					(t.__u &= -161),
					u.__h.length && s.push(u),
					b && (u.__E = u.__ = null);
			} catch (F) {
				if (((t.__v = null), c || i != null))
					if (F.then) {
						for (
							t.__u |= c ? 160 : 128;
							a && a.nodeType == 8 && a.nextSibling;
						)
							a = a.nextSibling;
						(i[i.indexOf(a)] = null), (t.__e = a);
					} else {
						for (O = i.length; O--; ) Wr(i[O]);
						Jr(t);
					}
				else (t.__e = n.__e), (t.__k = n.__k), F.then || Jr(t);
				H.__e(F, t, n);
			}
		else
			i == null && t.__v == n.__v
				? ((t.__k = n.__k), (t.__e = n.__e))
				: (a = t.__e = ru(n.__e, t, n, r, o, i, s, c, l));
		return (d = H.diffed) && d(t), 128 & t.__u ? void 0 : a;
	}
	function Jr(e) {
		e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(Jr);
	}
	function Ri(e, t, n) {
		for (var r = 0; r < n.length; r++) Gr(n[r], n[++r], n[++r]);
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
	function Ei(e) {
		return typeof e != "object" || e == null || (e.__b && e.__b > 0)
			? e
			: Pn(e)
				? e.map(Ei)
				: Re({}, e);
	}
	function ru(e, t, n, r, o, i, s, a, c) {
		var l,
			d,
			u,
			p,
			f,
			m,
			y,
			b = n.props || tn,
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
				a && (H.__m && H.__m(t, i), (a = !1)),
				(i = null);
		}
		if (_ == null) b === v || (a && e.data == v) || (e.data = v);
		else {
			if (((i = i && en.call(e.childNodes)), !a && i != null))
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
						An(e, l, null, f, o);
					}
				}
			for (l in v)
				(f = v[l]),
					l == "children"
						? (p = f)
						: l == "dangerouslySetInnerHTML"
							? (d = f)
							: l == "value"
								? (m = f)
								: l == "checked"
									? (y = f)
									: (a && typeof f != "function") ||
										b[l] === f ||
										An(e, l, f, b[l], o);
			if (d)
				a ||
					(u && (d.__html == u.__html || d.__html == e.innerHTML)) ||
					(e.innerHTML = d.__html),
					(t.__k = []);
			else if (
				(u && (e.innerHTML = ""),
				zi(
					t.type == "template" ? e.content : e,
					Pn(p) ? p : [p],
					t,
					n,
					r,
					_ == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o,
					i,
					s,
					i ? i[0] : n.__k && bt(n, 0),
					a,
					c,
				),
				i != null)
			)
				for (l = i.length; l--; ) Wr(i[l]);
			a ||
				((l = "value"),
				_ == "progress" && m == null
					? e.removeAttribute("value")
					: m != null &&
						(m !== e[l] ||
							(_ == "progress" && !m) ||
							(_ == "option" && m != b[l])) &&
						An(e, l, m, b[l], o),
				(l = "checked"),
				y != null && y != e[l] && An(e, l, y, b[l], o));
		}
		return e;
	}
	function Gr(e, t, n) {
		try {
			if (typeof e == "function") {
				var r = typeof e.__u == "function";
				r && e.__u(), (r && t == null) || (e.__u = e(t));
			} else e.current = t;
		} catch (o) {
			H.__e(o, n);
		}
	}
	function Mi(e, t, n) {
		var r, o;
		if (
			(H.unmount && H.unmount(e),
			(r = e.ref) && ((r.current && r.current != e.__e) || Gr(r, null, t)),
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
				r[o] && Mi(r[o], t, n || typeof e.type != "function");
		n || Wr(e.__e), (e.__c = e.__ = e.__e = void 0);
	}
	function ou(e, t, n) {
		return this.constructor(e, n);
	}
	function On(e, t, n) {
		var r, o, i, s;
		t == document && (t = document.documentElement),
			H.__ && H.__(e, t),
			(o = (r = typeof n == "function") ? null : (n && n.__k) || t.__k),
			(i = []),
			(s = []),
			Kr(
				t,
				(e = ((!r && n) || t).__k = vt(Ee, null, [e])),
				o || tn,
				tn,
				t.namespaceURI,
				!r && n ? [n] : o ? null : t.firstChild ? en.call(t.childNodes) : null,
				i,
				!r && n ? n : o ? o.__e : t.firstChild,
				r,
				s,
			),
			Ri(i, e, s);
	}
	function Pi(e, t) {
		On(e, t, Pi);
	}
	function Li(e, t, n) {
		var r,
			o,
			i,
			s,
			a = Re({}, e.props);
		for (i in (e.type && e.type.defaultProps && (s = e.type.defaultProps), t))
			i == "key"
				? (r = t[i])
				: i == "ref"
					? (o = t[i])
					: (a[i] = t[i] === void 0 && s != null ? s[i] : t[i]);
		return (
			arguments.length > 2 &&
				(a.children = arguments.length > 3 ? en.call(arguments, 2) : n),
			nn(e.type, a, r || e.key, o || e.ref, null)
		);
	}
	function iu(e) {
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
								(s.__e = !0), qr(s);
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
			(t.__c = "__cC" + Si++),
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
	(en = xi.slice),
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
		(yi = 0),
		(vi = function (e) {
			return e != null && e.constructor === void 0;
		}),
		(rn.prototype.setState = function (e, t) {
			var n;
			(n =
				this.__s != null && this.__s != this.state
					? this.__s
					: (this.__s = Re({}, this.state))),
				typeof e == "function" && (e = e(Re({}, n), this.props)),
				e && Re(n, e),
				e != null && this.__v && (t && this._sb.push(t), qr(this));
		}),
		(rn.prototype.forceUpdate = function (e) {
			this.__v && ((this.__e = !0), e && this.__h.push(e), qr(this));
		}),
		(rn.prototype.render = Ee),
		(st = []),
		(wi =
			typeof Promise == "function"
				? Promise.prototype.then.bind(Promise.resolve())
				: setTimeout),
		(_i = function (e, t) {
			return e.__v.__b - t.__v.__b;
		}),
		(Ln.__r = 0),
		(ki = /(PointerCapture)$|Capture$/i),
		(Hr = 0),
		(Ur = $i(!1)),
		(Vr = $i(!0)),
		(Si = 0);
	var at,
		q,
		Yr,
		Ai,
		on = 0,
		Oi = [],
		te = H,
		Ni = te.__b,
		ji = te.__r,
		Bi = te.diffed,
		Di = te.__c,
		Fi = te.unmount,
		Zi = te.__;
	function sn(e, t) {
		te.__h && te.__h(q, e, on || t), (on = 0);
		var n = q.__H || (q.__H = { __: [], __h: [] });
		return e >= n.__.length && n.__.push({}), n.__[e];
	}
	function ae(e) {
		return (on = 1), Hi(Wi, e);
	}
	function Hi(e, t, n) {
		var r = sn(at++, 2);
		if (
			((r.t = e),
			!r.__c &&
				((r.__ = [
					Wi(void 0, t),
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
	function ne(e, t) {
		var n = sn(at++, 3);
		!te.__s && Qr(n.__H, t) && ((n.__ = e), (n.u = t), q.__H.__h.push(n));
	}
	function su(e, t) {
		var n = sn(at++, 4);
		!te.__s && Qr(n.__H, t) && ((n.__ = e), (n.u = t), q.__h.push(n));
	}
	function Q(e) {
		return (
			(on = 5),
			wt(function () {
				return { current: e };
			}, [])
		);
	}
	function wt(e, t) {
		var n = sn(at++, 7);
		return Qr(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
	}
	function Ui(e, t) {
		return (
			(on = 8),
			wt(function () {
				return e;
			}, t)
		);
	}
	function Nn(e) {
		var t = q.context[e.__c],
			n = sn(at++, 9);
		return (
			(n.c = e),
			t ? (n.__ == null && ((n.__ = !0), t.sub(q)), t.props.value) : e.__
		);
	}
	function au() {
		for (var e; (e = Oi.shift()); )
			if (e.__P && e.__H)
				try {
					e.__H.__h.forEach(jn), e.__H.__h.forEach(Xr), (e.__H.__h = []);
				} catch (t) {
					(e.__H.__h = []), te.__e(t, e.__v);
				}
	}
	(te.__b = function (e) {
		(q = null), Ni && Ni(e);
	}),
		(te.__ = function (e, t) {
			e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Zi && Zi(e, t);
		}),
		(te.__r = function (e) {
			ji && ji(e), (at = 0);
			var t = (q = e.__c).__H;
			t &&
				(Yr === q
					? ((t.__h = []),
						(q.__h = []),
						t.__.forEach(function (n) {
							n.__N && (n.__ = n.__N), (n.u = n.__N = void 0);
						}))
					: (t.__h.forEach(jn), t.__h.forEach(Xr), (t.__h = []), (at = 0))),
				(Yr = q);
		}),
		(te.diffed = function (e) {
			Bi && Bi(e);
			var t = e.__c;
			t &&
				t.__H &&
				(t.__H.__h.length &&
					((Oi.push(t) !== 1 && Ai === te.requestAnimationFrame) ||
						((Ai = te.requestAnimationFrame) || lu)(au)),
				t.__H.__.forEach(function (n) {
					n.u && (n.__H = n.u), (n.u = void 0);
				})),
				(Yr = q = null);
		}),
		(te.__c = function (e, t) {
			t.some(function (n) {
				try {
					n.__h.forEach(jn),
						(n.__h = n.__h.filter(function (r) {
							return !r.__ || Xr(r);
						}));
				} catch (r) {
					t.some(function (o) {
						o.__h && (o.__h = []);
					}),
						(t = []),
						te.__e(r, n.__v);
				}
			}),
				Di && Di(e, t);
		}),
		(te.unmount = function (e) {
			Fi && Fi(e);
			var t,
				n = e.__c;
			n &&
				n.__H &&
				(n.__H.__.forEach(function (r) {
					try {
						jn(r);
					} catch (o) {
						t = o;
					}
				}),
				(n.__H = void 0),
				t && te.__e(t, n.__v));
		});
	var Vi = typeof requestAnimationFrame == "function";
	function lu(e) {
		var t,
			n = function () {
				clearTimeout(r), Vi && cancelAnimationFrame(t), setTimeout(e);
			},
			r = setTimeout(n, 35);
		Vi && (t = requestAnimationFrame(n));
	}
	function jn(e) {
		var t = q,
			n = e.__c;
		typeof n == "function" && ((e.__c = void 0), n()), (q = t);
	}
	function Xr(e) {
		var t = q;
		(e.__c = e.__()), (q = t);
	}
	function Qr(e, t) {
		return (
			!e ||
			e.length !== t.length ||
			t.some(function (n, r) {
				return n !== e[r];
			})
		);
	}
	function Wi(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Bn() {
		return (
			(Bn = Object.assign
				? Object.assign.bind()
				: function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
					}),
			Bn.apply(this, arguments)
		);
	}
	function qi(e, t) {
		if (e == null) return {};
		var n,
			r,
			o = {},
			i = Object.keys(e);
		for (r = 0; r < i.length; r++) t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
		return o;
	}
	var cu = ["context", "children"],
		uu = ["useFragment"];
	function Ki(e, t, n, r) {
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
				pu.call(this, r);
			}),
			(o.prototype.attributeChangedCallback = fu),
			(o.prototype.disconnectedCallback = hu),
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
	function du(e) {
		this.getChildContext = function () {
			return e.context;
		};
		var t = e.children,
			n = qi(e, cu);
		return Li(t, n);
	}
	function pu(e) {
		var t = new CustomEvent("_preact", {
			detail: {},
			bubbles: !0,
			cancelable: !0,
		});
		this.dispatchEvent(t),
			(this._vdom = vt(
				du,
				Bn({}, this._props, { context: t.detail.context }),
				Yi(this, this._vdomComponent, e),
			)),
			(this.hasAttribute("hydrate") ? Pi : On)(this._vdom, this._root);
	}
	function Ji(e) {
		return e.replace(/-(\w)/g, function (t, n) {
			return n ? n.toUpperCase() : "";
		});
	}
	function fu(e, t, n) {
		if (this._vdom) {
			var r = {};
			(r[e] = n = n ?? void 0),
				(r[Ji(e)] = n),
				(this._vdom = Li(this._vdom, r)),
				On(this._vdom, this._root);
		}
	}
	function hu() {
		On((this._vdom = null), this._root);
	}
	function Gi(e, t) {
		var n = this,
			r = e.useFragment,
			o = qi(e, uu);
		return vt(
			r ? Ee : "slot",
			Bn({}, o, {
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
	function Yi(e, t, n) {
		if (e.nodeType === 3) return e.data;
		if (e.nodeType !== 1) return null;
		var r = [],
			o = {},
			i = 0,
			s = e.attributes,
			a = e.childNodes;
		for (i = s.length; i--; )
			s[i].name !== "slot" &&
				((o[s[i].name] = s[i].value), (o[Ji(s[i].name)] = s[i].value));
		for (i = a.length; i--; ) {
			var c = Yi(a[i], null, n),
				l = a[i].slot;
			l ? (o[l] = vt(Gi, { name: l }, c)) : (r[i] = c);
		}
		var d = !(!n || !n.shadow),
			u = t ? vt(Gi, { useFragment: !d }, r) : r;
		return (
			!d && t && (e.innerHTML = ""), vt(t || e.nodeName.toLowerCase(), o, u)
		);
	}
	var mu = Symbol.for("preact-signals");
	function Dn() {
		if (qe > 1) qe--;
		else {
			for (var e, t = !1; an !== void 0; ) {
				var n = an;
				for (an = void 0, eo++; n !== void 0; ) {
					var r = n.o;
					if (((n.o = void 0), (n.f &= -3), !(8 & n.f) && ns(n)))
						try {
							n.c();
						} catch (o) {
							t || ((e = o), (t = !0));
						}
					n = r;
				}
			}
			if (((eo = 0), qe--, t)) throw e;
		}
	}
	function Xi(e) {
		if (qe > 0) return e();
		qe++;
		try {
			return e();
		} finally {
			Dn();
		}
	}
	var U = void 0;
	function Qi(e) {
		var t = U;
		U = void 0;
		try {
			return e();
		} finally {
			U = t;
		}
	}
	var an = void 0,
		qe = 0,
		eo = 0,
		Fn = 0;
	function es(e) {
		if (U !== void 0) {
			var t = e.n;
			if (t === void 0 || t.t !== U)
				return (
					(t = {
						i: 0,
						S: e,
						p: U.s,
						n: void 0,
						t: U,
						e: void 0,
						x: void 0,
						r: t,
					}),
					U.s !== void 0 && (U.s.n = t),
					(U.s = t),
					(e.n = t),
					32 & U.f && e.S(t),
					t
				);
			if (t.i === -1)
				return (
					(t.i = 0),
					t.n !== void 0 &&
						((t.n.p = t.p),
						t.p !== void 0 && (t.p.n = t.n),
						(t.p = U.s),
						(t.n = void 0),
						(U.s.n = t),
						(U.s = t)),
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
	(oe.prototype.brand = mu),
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
					: Qi(function () {
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
							Qi(function () {
								var o;
								(o = t.Z) == null || o.call(t);
							}));
			}
		}),
		(oe.prototype.subscribe = function (e) {
			var t = this;
			return kt(
				function () {
					var n = t.value,
						r = U;
					U = void 0;
					try {
						e(n);
					} finally {
						U = r;
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
			var e = U;
			U = void 0;
			try {
				return this.value;
			} finally {
				U = e;
			}
		}),
		Object.defineProperty(oe.prototype, "value", {
			get: function () {
				var e = es(this);
				return e !== void 0 && (e.i = this.i), this.v;
			},
			set: function (e) {
				if (e !== this.v) {
					if (eo > 100) throw new Error("Cycle detected");
					(this.v = e), this.i++, Fn++, qe++;
					try {
						for (var t = this.t; t !== void 0; t = t.x) t.t.N();
					} finally {
						Dn();
					}
				}
			},
		});
	function ts(e, t) {
		return new oe(e, t);
	}
	function ns(e) {
		for (var t = e.s; t !== void 0; t = t.n)
			if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
		return !1;
	}
	function rs(e) {
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
	function os(e) {
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
	function lt(e, t) {
		oe.call(this, void 0),
			(this.x = e),
			(this.s = void 0),
			(this.g = Fn - 1),
			(this.f = 4),
			(this.W = t == null ? void 0 : t.watched),
			(this.Z = t == null ? void 0 : t.unwatched),
			(this.name = t == null ? void 0 : t.name);
	}
	(lt.prototype = new oe()),
		(lt.prototype.h = function () {
			if (((this.f &= -3), 1 & this.f)) return !1;
			if ((36 & this.f) == 32 || ((this.f &= -5), this.g === Fn)) return !0;
			if (((this.g = Fn), (this.f |= 1), this.i > 0 && !ns(this)))
				return (this.f &= -2), !0;
			var e = U;
			try {
				rs(this), (U = this);
				var t = this.x();
				(16 & this.f || this.v !== t || this.i === 0) &&
					((this.v = t), (this.f &= -17), this.i++);
			} catch (n) {
				(this.v = n), (this.f |= 16), this.i++;
			}
			return (U = e), os(this), (this.f &= -2), !0;
		}),
		(lt.prototype.S = function (e) {
			if (this.t === void 0) {
				this.f |= 36;
				for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
			}
			oe.prototype.S.call(this, e);
		}),
		(lt.prototype.U = function (e) {
			if (
				this.t !== void 0 &&
				(oe.prototype.U.call(this, e), this.t === void 0)
			) {
				this.f &= -33;
				for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
			}
		}),
		(lt.prototype.N = function () {
			if (!(2 & this.f)) {
				this.f |= 6;
				for (var e = this.t; e !== void 0; e = e.x) e.t.N();
			}
		}),
		Object.defineProperty(lt.prototype, "value", {
			get: function () {
				if (1 & this.f) throw new Error("Cycle detected");
				var e = es(this);
				if ((this.h(), e !== void 0 && (e.i = this.i), 16 & this.f))
					throw this.v;
				return this.v;
			},
		});
	function is(e, t) {
		return new lt(e, t);
	}
	function ss(e) {
		var t = e.u;
		if (((e.u = void 0), typeof t == "function")) {
			qe++;
			var n = U;
			U = void 0;
			try {
				t();
			} catch (r) {
				throw ((e.f &= -2), (e.f |= 8), to(e), r);
			} finally {
				(U = n), Dn();
			}
		}
	}
	function to(e) {
		for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
		(e.x = void 0), (e.s = void 0), ss(e);
	}
	function gu(e) {
		if (U !== this) throw new Error("Out-of-order effect");
		os(this), (U = e), (this.f &= -2), 8 & this.f && to(this), Dn();
	}
	function _t(e, t) {
		(this.x = e),
			(this.u = void 0),
			(this.s = void 0),
			(this.o = void 0),
			(this.f = 32),
			(this.name = t == null ? void 0 : t.name);
	}
	(_t.prototype.c = function () {
		var e = this.S();
		try {
			if (8 & this.f || this.x === void 0) return;
			var t = this.x();
			typeof t == "function" && (this.u = t);
		} finally {
			e();
		}
	}),
		(_t.prototype.S = function () {
			if (1 & this.f) throw new Error("Cycle detected");
			(this.f |= 1), (this.f &= -9), ss(this), rs(this), qe++;
			var e = U;
			return (U = this), gu.bind(this, e);
		}),
		(_t.prototype.N = function () {
			2 & this.f || ((this.f |= 2), (this.o = an), (an = this));
		}),
		(_t.prototype.d = function () {
			(this.f |= 8), 1 & this.f || to(this);
		}),
		(_t.prototype.dispose = function () {
			this.d();
		});
	function kt(e, t) {
		var n = new _t(e, t);
		try {
			n.c();
		} catch (o) {
			throw (n.d(), o);
		}
		var r = n.d.bind(n);
		return (r[Symbol.dispose] = r), r;
	}
	var no,
		Zn,
		yu = typeof window < "u" && !!window.__PREACT_SIGNALS_DEVTOOLS__,
		as = [],
		ls = [];
	kt(function () {
		no = this.N;
	})();
	function St(e, t) {
		H[e] = t.bind(null, H[e] || function () {});
	}
	function Hn(e) {
		if (Zn) {
			var t = Zn;
			(Zn = void 0), t();
		}
		Zn = e && e.S();
	}
	function cs(e) {
		var t = this,
			n = e.data,
			r = Me(n);
		r.value = n;
		var o = wt(function () {
				for (var a = t, c = t.__v; (c = c.__); )
					if (c.__c) {
						c.__c.__$f |= 4;
						break;
					}
				var l = is(function () {
						var f = r.value.value;
						return f === 0 ? 0 : f === !0 ? "" : f || "";
					}),
					d = is(function () {
						return !Array.isArray(l.value) && !vi(l.value);
					}),
					u = kt(function () {
						if (((this.N = us), d.value)) {
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
	(cs.displayName = "ReactiveTextNode"),
		Object.defineProperties(oe.prototype, {
			constructor: { configurable: !0, value: void 0 },
			type: { configurable: !0, value: cs },
			props: {
				configurable: !0,
				get: function () {
					return { data: this };
				},
			},
			__b: { configurable: !0, value: 1 },
		}),
		St("__b", function (e, t) {
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
		St("__r", function (e, t) {
			if ((e(t), t.type !== Ee)) {
				Hn();
				var n,
					r = t.__c;
				r &&
					((r.__$f &= -2),
					(n = r.__$u) === void 0 &&
						(r.__$u = n =
							(function (o, i) {
								var s;
								return (
									kt(
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
									yu && ((o = n.y) == null || o.call(n)),
										(r.__$f |= 1),
										r.setState({});
								},
								typeof t.type == "function"
									? t.type.displayName || t.type.name
									: "",
							))),
					Hn(n);
			}
		}),
		St("__e", function (e, t, n, r) {
			Hn(), e(t, n, r);
		}),
		St("diffed", function (e, t) {
			Hn();
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
						l === void 0 ? ((l = vu(n, c, d, o)), (i[c] = l)) : l.o(d, o);
					}
				}
			}
			e(t);
		});
	function vu(e, t, n, r) {
		var o = t in e && e.ownerSVGElement === void 0,
			i = ts(n);
		return {
			o: function (s, a) {
				(i.value = s), (r = a);
			},
			d: kt(function () {
				this.N = us;
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
	St("unmount", function (e, t) {
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
		St("__h", function (e, t, n, r) {
			(r < 3 || r === 9) && (t.__$f |= 2), e(t, n, r);
		}),
		(rn.prototype.shouldComponentUpdate = function (e, t) {
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
	function Me(e, t) {
		return wt(function () {
			return ts(e, t);
		}, []);
	}
	var bu =
			typeof requestAnimationFrame > "u"
				? setTimeout
				: function (e) {
						var t = function () {
								clearTimeout(n), cancelAnimationFrame(r), e();
							},
							n = setTimeout(t, 35),
							r = requestAnimationFrame(t);
					},
		wu = function (e) {
			queueMicrotask(function () {
				queueMicrotask(e);
			});
		};
	function _u() {
		Xi(function () {
			for (var e; (e = as.shift()); ) no.call(e);
		});
	}
	function ku() {
		as.push(this) === 1 && (H.requestAnimationFrame || bu)(_u);
	}
	function Su() {
		Xi(function () {
			for (var e; (e = ls.shift()); ) no.call(e);
		});
	}
	function us() {
		ls.push(this) === 1 && (H.requestAnimationFrame || wu)(Su);
	}
	function ds(e, t) {
		var n = Q(e);
		(n.current = e),
			ne(function () {
				return kt(function () {
					return (this.N = ku), n.current();
				}, t);
			}, []);
	}
	const xt = { device: "desktop", traits: {} };
	function ps(e) {
		return e === "or" ? "or" : "and";
	}
	function Ct(e) {
		const t = e == null ? void 0 : e.trim().toLowerCase();
		return t || null;
	}
	function Un(e) {
		return (
			(e == null
				? void 0
				: e.map((t) => t.trim().toLowerCase()).filter(Boolean)) ?? []
		);
	}
	function xu(e, t) {
		return e[t] ?? !0;
	}
	function fs(e, t) {
		return xu(e, t);
	}
	function Cu(e, t) {
		const n = Un(e.languages),
			r = Un(e.locales),
			o = Ct(t.language),
			i = Ct(t.locale),
			s = n.length === 0 || (o != null && n.includes(o)),
			a = r.length === 0 || (i != null && r.includes(i));
		return s && a;
	}
	function zu(e) {
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
	function Tu(e) {
		return Array.isArray(e.traitConditions) ? e.traitConditions.filter(zu) : [];
	}
	function Vn(e) {
		return typeof e == "string" && e.trim().length > 0;
	}
	function ro(e) {
		if (!Vn(e)) return null;
		const t = Number(e);
		return Number.isFinite(t) ? t : null;
	}
	function Iu(e, t) {
		const n = ro(t);
		if (n == null) return !1;
		if (e.operator === "in")
			return e.values.some((o) => {
				const i = ro(o);
				return i != null && n === i;
			});
		const r = ro(e.values[0]);
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
	function $u(e, t) {
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
	function Ru(e, t) {
		const n = t[e.traitSlug];
		return e.operator === "exists"
			? Vn(n)
			: e.operator === "notExists"
				? !Vn(n)
				: Vn(n)
					? e.valueType === "number"
						? Iu(e, n)
						: $u(e, n)
					: !1;
	}
	function hs(e, t) {
		return Tu(e).every((r) => Ru(r, t));
	}
	function ms(e, t) {
		const n = [],
			r = Un(e.languages),
			o = Un(e.locales);
		return (
			fs(e, t.device) || n.push("blocked_by_device"),
			((r.length > 0 && !Ct(t.language)) ||
				(r.length > 0 && !r.includes(Ct(t.language) ?? ""))) &&
				n.push("blocked_by_language"),
			((o.length > 0 && !Ct(t.locale)) ||
				(o.length > 0 && !o.includes(Ct(t.locale) ?? ""))) &&
				n.push("blocked_by_locale"),
			hs(e, t.traits) || n.push("blocked_by_trait"),
			n
		);
	}
	function gs(e) {
		return [...new Set(e)];
	}
	function zt(e, t) {
		return fs(e, t.device) && Cu(e, t) && hs(e, t.traits);
	}
	function oo(e, t = xt, n = "and") {
		if (!e || e.length === 0) return !0;
		const r = { ...xt, ...t, traits: t.traits ?? xt.traits },
			o = e.filter((s) => s.type !== "Exclude");
		return e.filter((s) => s.type === "Exclude").some((s) => zt(s, r))
			? !1
			: o.length === 0
				? !0
				: ps(n) === "or"
					? o.some((s) => zt(s, r))
					: o.every((s) => zt(s, r));
	}
	function Eu(e, t = xt, n = "and") {
		if (!e || e.length === 0) return [];
		const r = { ...xt, ...t, traits: t.traits ?? xt.traits },
			o = e.filter((s) => s.type !== "Exclude");
		return e.filter((s) => s.type === "Exclude").some((s) => zt(s, r))
			? ["blocked_by_audience_rule"]
			: o.length === 0
				? []
				: ps(n) === "or"
					? o.some((s) => zt(s, r))
						? []
						: gs(o.flatMap((s) => ms(s, r)))
					: gs(o.flatMap((s) => ms(s, r)));
	}
	function ys(e, t) {
		return e === t;
	}
	function Mu(e) {
		return e === "or" ? "or" : "and";
	}
	function io(e, t, n) {
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
			d = zt(e, t);
		return r && o && i && s && a && c && l && d;
	}
	function vs(e, t, n = ys, r = "and") {
		if (e.length === 0) return !0;
		const o = typeof n == "function" ? n : ys,
			i = Mu(typeof n == "string" ? n : r),
			s = e.filter((l) => l.type === "Include");
		return e.filter((l) => l.type === "Exclude").some((l) => io(l, t, o))
			? !1
			: s.length === 0
				? !0
				: i === "or"
					? s.some((l) => io(l, t, o))
					: s.every((l) => io(l, t, o));
	}
	const bs = {
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
	function Tt(e) {
		return bs[e || "no"] || bs.no;
	}
	function ws(e) {
		const {
			dirty: t,
			minValid: n,
			maxValid: r,
			min: o,
			max: i,
			language: s,
		} = e;
		if (!t) return null;
		const a = Tt(s);
		return (!n || !r) && o && i
			? a.selectionRange(o, i)
			: !n && o
				? a.selectionMin(o)
				: !r && i
					? a.selectionMax(i)
					: null;
	}
	function _s(e) {
		const { min: t = 0, max: n, language: r } = e,
			o = t > 0,
			i = typeof n == "number" && n > 0;
		if (!(o || i)) return null;
		const s = Tt(r);
		return o && i
			? s.inputLengthRange(t, n)
			: o
				? s.minLength(t)
				: s.inputLengthMaximum(n ?? 0);
	}
	function ks(e) {
		return Tt(e.language).selectionMax(e.max);
	}
	function Ss(e) {
		const { min: t = 0, max: n, totalOptions: r, language: o } = e,
			i = t > 0,
			s = n !== void 0 && n < r;
		if (!(i || s)) return null;
		const a = Tt(o);
		return i && s
			? a.selectionBetween(t, n)
			: i
				? a.selectionAtLeast(t)
				: a.selectionUpTo(n ?? r);
	}
	function xs(e, t) {
		var r;
		if (!t) return;
		const n =
			(r = e == null ? void 0 : e.find((o) => o.code === t)) == null
				? void 0
				: r["@errMessage"];
		return n != null && n.trim() ? n : void 0;
	}
	function Pu(e, t) {
		const n = e.validation;
		return (
			xs(e.tr, t) ??
			((n == null ? void 0 : n.type) === "OrgValidationRegex"
				? xs(n.tr, t)
				: void 0) ??
			e.errMessage ??
			(n == null ? void 0 : n.errMessage) ??
			"Pattern validation failed"
		);
	}
	function Cs(e) {
		const { content: t, card: n, hasBeenTouched: r, language: o } = e,
			{ minLength: i = 0, maxLength: s, validations: a } = n,
			c = Tt(o);
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
					errorMessage: Pu(l, o),
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
	function Wn(e) {
		const { selectedCount: t, card: n, hasBeenSubmitted: r, language: o } = e,
			{ min: i = 0, max: s } = n;
		return s && t > s
			? {
					status: "over-max",
					valid: !1,
					color: "error",
					shouldAnnounce: !0,
					errorMessage:
						ws({
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
							ws({
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
	function qn(e) {
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
		const l = Tt(c),
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
	const Lu = { nb: "no" };
	function zs(e) {
		return e.trim().toLowerCase().split(/[-_]/)[0] ?? "";
	}
	function Au(e, t) {
		if (!e) return null;
		const n = zs(e);
		if (t.includes(n)) return n;
		const r = Lu[n];
		return r && t.includes(r) ? r : null;
	}
	const Kn = {
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
	};
	function It(e) {
		if (!(typeof e == "object" && e !== null && "name" in e)) return !1;
		const t = e.name;
		return typeof t == "string" || t === null;
	}
	function Ts(e, t) {
		return e == null ? void 0 : e.find((n) => n.code === t);
	}
	function D(e, t, n, r) {
		const o = Ts(t, n),
			i = o == null ? void 0 : o[r];
		return i == null || i === "" ? e : i;
	}
	function Ke(e, t, n, r, o, i) {
		const s = Ts(t, n),
			a = s == null ? void 0 : s[r],
			c = r.slice(1);
		return a != null && a !== ""
			? a
			: i && (e == null || e === (o == null ? void 0 : o[c]))
				? i[c]
				: e;
	}
	function Ou(e, t) {
		var o, i;
		if (((o = e.language) == null ? void 0 : o.code) === t) return e;
		const n = (i = e.language) != null && i.code ? Kn[e.language.code] : void 0,
			r = Kn[t];
		return {
			...e,
			textNext: Ke(e.textNext, e.tr, t, "@textNext", n, r),
			textPrev: Ke(e.textPrev, e.tr, t, "@textPrev", n, r),
			textClose: Ke(e.textClose, e.tr, t, "@textClose", n, r),
			textHide: Ke(e.textHide, e.tr, t, "@textHide", n, r),
			textMinimized: Ke(e.textMinimized, e.tr, t, "@textMinimized", n, r),
			textReplyLater: Ke(e.textReplyLater, e.tr, t, "@textReplyLater", n, r),
		};
	}
	function Pe(e, t) {
		const n = e.tr;
		return {
			...e,
			name: D(e.name, n, t, "@name"),
			body: D(e.body, n, t, "@body"),
			bodyHtml: D(e.bodyHtml, n, t, "@bodyHtml"),
			bodyJson: D(e.bodyJson, n, t, "@bodyJson"),
			textNext: D(e.textNext, n, t, "@textNext"),
			textPrev: D(e.textPrev, n, t, "@textPrev"),
			textClose: D(e.textClose, n, t, "@textClose"),
			textHide: D(e.textHide, n, t, "@textHide"),
			textMinimized: D(e.textMinimized, n, t, "@textMinimized"),
			textReplyLater: D(e.textReplyLater, n, t, "@textReplyLater"),
		};
	}
	function Nu(e, t) {
		const n = Pe(e, t),
			r = e.tr;
		return {
			...n,
			label: D(e.label, r, t, "@label"),
			placeholder: D(e.placeholder, r, t, "@placeholder"),
		};
	}
	function ju(e, t) {
		const n = Pe(e, t),
			r = e.tr;
		return {
			...n,
			positive: D(e.positive, r, t, "@positive"),
			negative: D(e.negative, r, t, "@negative"),
		};
	}
	function Bu(e, t) {
		const n = Pe(e, t),
			r = e.tr;
		return {
			...n,
			positive: D(e.positive, r, t, "@positive"),
			negative: D(e.negative, r, t, "@negative"),
		};
	}
	function Du(e, t) {
		const n = Pe(e, t),
			r = e.tr;
		return {
			...n,
			email_label: D(e.email_label, r, t, "@email_label"),
			email_placeholder: D(e.email_placeholder, r, t, "@email_placeholder"),
			phone_label: D(e.phone_label, r, t, "@phone_label"),
			phone_placeholder: D(e.phone_placeholder, r, t, "@phone_placeholder"),
			nameLabel: D(e.nameLabel, r, t, "@nameLabel"),
			namePlaceholder: D(e.namePlaceholder, r, t, "@namePlaceholder"),
			consentTermsUrl: D(e.consentTermsUrl, r, t, "@consentTermsUrl"),
			consentTermsTitle: D(e.consentTermsTitle, r, t, "@consentTermsTitle"),
			consentTermsText: D(e.consentTermsText, r, t, "@consentTermsText"),
			consentTermsLabel: D(e.consentTermsLabel, r, t, "@consentTermsLabel"),
		};
	}
	function Fu(e, t) {
		return {
			...Pe(e, t),
			selectItems: e.selectItems.map((r) => ({
				...r,
				label: D(r.label, r.tr, t, "@label"),
			})),
		};
	}
	function Zu(e, t) {
		return {
			...Pe(e, t),
			selectItems: e.selectItems.map((r) => ({
				...r,
				label: D(r.label, r.tr, t, "@label"),
			})),
		};
	}
	function Hu(e, t) {
		var i;
		const n = Pe(e, t),
			r =
				((i = e.LikertCard) == null ? void 0 : i.likertScale) ?? e.likertScale;
		if (!r) return n;
		const o = {
			...r,
			likertItems: r.likertItems.map((s) => ({
				...s,
				label: D(s.label, s.tr, t, "@label"),
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
	function Uu(e, t) {
		const n = Pe(e, t);
		return e.taskItems
			? {
					...n,
					taskItems: e.taskItems.map((r) => {
						const o = r.task,
							i = It(o) ? o.name : "",
							s = It(o) ? D(o.name, o.tr, t, "@name") : i,
							a = It(o) ? { ...o, name: s } : o,
							c = D(r.label, "tr" in r ? r.tr : void 0, t, "@label");
						return { ...r, label: c || s || r.label || i, task: a };
					}),
				}
			: n;
	}
	function Vu(e, t) {
		return {
			...Pe(e, t),
			segment: It(e.segment)
				? { ...e.segment, name: D(e.segment.name, e.segment.tr, t, "@name") }
				: e.segment,
			items: e.items.map((r) => {
				const o = It(r.value)
						? { ...r.value, name: D(r.value.name, r.value.tr, t, "@name") }
						: r.value,
					i = D(r.label, "tr" in r ? r.tr : void 0, t, "@label"),
					s = It(o) ? o.name : void 0;
				return { ...r, label: i || s || r.label, value: o };
			}),
		};
	}
	function Is(e, t) {
		switch (e.type) {
			case "InputCard":
				return Nu(e, t);
			case "RecruitmentCard":
				return Du(e, t);
			case "CompletionCard":
				return ju(e, t);
			case "FindabilityCard":
				return Bu(e, t);
			case "SingleSelectCard":
				return Fu(e, t);
			case "MultiSelectCard":
				return Zu(e, t);
			case "LikertCard":
				return Hu(e, t);
			case "TopTaskCard":
				return Uu(e, t);
			case "SegmentCard":
				return Vu(e, t);
			default:
				return Pe(e, t);
		}
	}
	function Wu(e, t) {
		var i, s, a;
		const n = Ou(e, t),
			r = (i = e.language) != null && i.code ? Kn[e.language.code] : void 0,
			o = Kn[t];
		return {
			...n,
			cards:
				((s = n.cards) == null ? void 0 : s.map((c) => Is(c, t))) ?? n.cards,
			pages:
				(a = n.pages) == null
					? void 0
					: a.map((c) => {
							var l;
							return {
								...c,
								title: D(c.title, c.tr, t, "@title"),
								textNext: Ke(c.textNext, c.tr, t, "@textNext", r, o),
								textPrev: Ke(c.textPrev, c.tr, t, "@textPrev", r, o),
								cards:
									((l = c.cards) == null ? void 0 : l.map((d) => Is(d, t))) ??
									c.cards,
							};
						}),
		};
	}
	function $s(e) {
		const { selectedValues: t, value: n, max: r } = e;
		return t.includes(n)
			? { values: t.filter((o) => o !== n), changed: !0, limitReached: !1 }
			: r && t.length >= r
				? { values: [...t], changed: !1, limitReached: !0 }
				: { values: [...t, n], changed: !0, limitReached: !1 };
	}
	const qu = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
	function Jn(e, t) {
		const r = t
				.substring(20)
				.split("")
				.reduce((a, c) => {
					const l = qu.indexOf(c);
					return a * (l || 1);
				}, 1),
			o = e.filter((a) => a.orderLocked !== !0),
			i = Ku([...o], r),
			s = [];
		for (let a = 0; a < e.length; a++)
			if (e[a].orderLocked) s.push(e[a]);
			else {
				const c = i.shift();
				c && s.push(c);
			}
		return s;
	}
	function Ku(e, t) {
		let n = e.length,
			r,
			o;
		for (; n; )
			(o = Math.floor(Ju(t) * n--)), (r = e[n]), (e[n] = e[o]), (e[o] = r), t++;
		return e;
	}
	function Ju(e) {
		const t = Math.sin(e++) * 1e4;
		return t - Math.floor(t);
	}
	function Gu(e) {
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
			const m = ((f - p) * i + 1) >>> 0,
				y = new Uint8Array(m);
			for (; p !== f; ) {
				let _ = l[p],
					x = 0;
				for (let C = m - 1; (_ !== 0 || x < u) && C !== -1; C--, x++)
					(_ += (256 * y[C]) >>> 0),
						(y[C] = (_ % n) >>> 0),
						(_ = (_ / n) >>> 0);
				if (_ !== 0) throw new Error("Non-zero carry");
				(u = x), p++;
			}
			let b = m - u;
			for (; b !== m && y[b] === 0; ) b++;
			let v = r.repeat(d);
			for (; b < m; ++b) v += e.charAt(y[b]);
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
				m = new Uint8Array(f);
			for (; d < l.length; ) {
				const _ = l.charCodeAt(d);
				if (_ > 255) return;
				let x = t[_];
				if (x === 255) return;
				let C = 0;
				for (let I = f - 1; (x !== 0 || C < p) && I !== -1; I--, C++)
					(x += (n * m[I]) >>> 0),
						(m[I] = (x % 256) >>> 0),
						(x = (x / 256) >>> 0);
				if (x !== 0) throw new Error("Non-zero carry");
				(p = C), d++;
			}
			let y = f - p;
			for (; y !== f && m[y] === 0; ) y++;
			const b = new Uint8Array(u + (f - y));
			let v = u;
			for (; y !== f; ) b[v++] = m[y++];
			return b;
		}
		function c(l) {
			const d = a(l);
			if (d) return d;
			throw new Error("Non-base" + n + " character");
		}
		return { encode: s, decodeUnsafe: a, decode: c };
	}
	const Yu = Gu(
		"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
	);
	function J(e) {
		const t = e.replace(/-/g, "").match(/.{2}/g);
		if (!t) return e;
		const n = t.map((o) => Number.parseInt(o, 16)),
			r = new Uint8Array(n);
		return Yu.encode(r);
	}
	function Rs(e, t) {
		const n = t.length === 36 ? J(t) : t;
		return (e.length === 36 ? J(e) : e) === n;
	}
	function Xu(e, t) {
		return e === t;
	}
	function ve(e, t, n = Xu) {
		const r = Q(t),
			o = Q(n);
		(r.current = t), (o.current = n);
		const [i, s] = ae(() => (e ? t(e.getSnapshot()) : void 0));
		return (
			ne(() => {
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
	var Qu = 0;
	function g(e, t, n, r, o, i) {
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
			__v: --Qu,
			__i: -1,
			__u: 0,
			__source: o,
			__self: i,
		};
		if (typeof e == "function" && (s = e.defaultProps))
			for (a in s) c[a] === void 0 && (c[a] = s[a]);
		return H.vnode && H.vnode(l), l;
	}
	const ln = iu(void 0),
		ed = ({ survey: e, state: t, children: n, api: r, captureMachine: o }) => {
			const i = Me(!0);
			ds(() => {
				if (i.value === !1) {
					const c = setTimeout(() => {
						i.value = !0;
					}, 500);
					return () => clearTimeout(c);
				}
			});
			const s = ve(o, (c) => c.context.language),
				a = wt(() => Wu(e, s), [e, s]);
			return g(ln.Provider, {
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
	function Gn() {
		const e = Nn(ln);
		if (!e) throw new Error("useSurvey must be used within a SkyraProvider");
		return e.survey;
	}
	function td() {
		const e = Nn(ln);
		if (!e)
			throw new Error("useSessionState must be used within a SkyraProvider");
		return e.state;
	}
	function so() {
		const e = Nn(ln);
		if (!e)
			throw new Error("useCaptureMachine must be used within a SkyraProvider");
		return e.captureMachine;
	}
	function Je() {
		const e = Nn(ln);
		if (!e)
			throw new Error("useCardValidState must be used within a SkyraProvider");
		return e.cardValidState;
	}
	function $t() {
		const e = so();
		return ve(e, (n) => n.context.language);
	}
	function nd(e) {
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
	var Es;
	const rd = Object.freeze({ status: "aborted" });
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
	class Rt extends Error {
		constructor() {
			super(
				"Encountered Promise during synchronous parse. Use .parseAsync() instead.",
			);
		}
	}
	class Ms extends Error {
		constructor(t) {
			super(`Encountered unidirectional transform during encode: ${t}`),
				(this.name = "ZodEncodeError");
		}
	}
	(Es = globalThis).__zod_globalConfig ?? (Es.__zod_globalConfig = {});
	const ao = globalThis.__zod_globalConfig;
	function je(e) {
		return ao;
	}
	function Ps(e) {
		const t = Object.values(e).filter((r) => typeof r == "number");
		return Object.entries(e)
			.filter(([r, o]) => t.indexOf(+r) === -1)
			.map(([r, o]) => o);
	}
	function lo(e, t) {
		return typeof t == "bigint" ? t.toString() : t;
	}
	function Yn(e) {
		return {
			get value() {
				{
					const t = e();
					return Object.defineProperty(this, "value", { value: t }), t;
				}
			},
		};
	}
	function co(e) {
		return e == null;
	}
	function uo(e) {
		const t = e.startsWith("^") ? 1 : 0,
			n = e.endsWith("$") ? e.length - 1 : e.length;
		return e.slice(t, n);
	}
	function od(e, t) {
		const n = e / t,
			r = Math.round(n),
			o = Number.EPSILON * Math.max(Math.abs(n), 1);
		return Math.abs(n - r) < o ? 0 : n - r;
	}
	const Ls = Symbol("evaluating");
	function j(e, t, n) {
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
	function ct(e, t, n) {
		Object.defineProperty(e, t, {
			value: n,
			writable: !0,
			enumerable: !0,
			configurable: !0,
		});
	}
	function Ge(...e) {
		const t = {};
		for (const n of e) {
			const r = Object.getOwnPropertyDescriptors(n);
			Object.assign(t, r);
		}
		return Object.defineProperties({}, t);
	}
	function As(e) {
		return JSON.stringify(e);
	}
	function id(e) {
		return e
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, "")
			.replace(/[\s_-]+/g, "-")
			.replace(/^-+|-+$/g, "");
	}
	const Os =
		"captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
	function cn(e) {
		return typeof e == "object" && e !== null && !Array.isArray(e);
	}
	const sd = Yn(() => {
		var e;
		if (
			ao.jitless ||
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
	function Et(e) {
		if (cn(e) === !1) return !1;
		const t = e.constructor;
		if (t === void 0 || typeof t != "function") return !0;
		const n = t.prototype;
		return !(
			cn(n) === !1 ||
			Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1
		);
	}
	function Ns(e) {
		return Et(e)
			? { ...e }
			: Array.isArray(e)
				? [...e]
				: e instanceof Map
					? new Map(e)
					: e instanceof Set
						? new Set(e)
						: e;
	}
	const ad = new Set(["string", "number", "symbol"]);
	function Mt(e) {
		return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
	function Ye(e, t, n) {
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
	function ld(e) {
		return Object.keys(e).filter(
			(t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional",
		);
	}
	const cd = {
		safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
		int32: [-2147483648, 2147483647],
		uint32: [0, 4294967295],
		float32: [-34028234663852886e22, 34028234663852886e22],
		float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
	};
	function ud(e, t) {
		const n = e._zod.def,
			r = n.checks;
		if (r && r.length > 0)
			throw new Error(
				".pick() cannot be used on object schemas containing refinements",
			);
		const i = Ge(e._zod.def, {
			get shape() {
				const s = {};
				for (const a in t) {
					if (!(a in n.shape)) throw new Error(`Unrecognized key: "${a}"`);
					t[a] && (s[a] = n.shape[a]);
				}
				return ct(this, "shape", s), s;
			},
			checks: [],
		});
		return Ye(e, i);
	}
	function dd(e, t) {
		const n = e._zod.def,
			r = n.checks;
		if (r && r.length > 0)
			throw new Error(
				".omit() cannot be used on object schemas containing refinements",
			);
		const i = Ge(e._zod.def, {
			get shape() {
				const s = { ...e._zod.def.shape };
				for (const a in t) {
					if (!(a in n.shape)) throw new Error(`Unrecognized key: "${a}"`);
					t[a] && delete s[a];
				}
				return ct(this, "shape", s), s;
			},
			checks: [],
		});
		return Ye(e, i);
	}
	function pd(e, t) {
		if (!Et(t))
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
		const o = Ge(e._zod.def, {
			get shape() {
				const i = { ...e._zod.def.shape, ...t };
				return ct(this, "shape", i), i;
			},
		});
		return Ye(e, o);
	}
	function fd(e, t) {
		if (!Et(t))
			throw new Error("Invalid input to safeExtend: expected a plain object");
		const n = Ge(e._zod.def, {
			get shape() {
				const r = { ...e._zod.def.shape, ...t };
				return ct(this, "shape", r), r;
			},
		});
		return Ye(e, n);
	}
	function hd(e, t) {
		var r;
		if ((r = e._zod.def.checks) != null && r.length)
			throw new Error(
				".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.",
			);
		const n = Ge(e._zod.def, {
			get shape() {
				const o = { ...e._zod.def.shape, ...t._zod.def.shape };
				return ct(this, "shape", o), o;
			},
			get catchall() {
				return t._zod.def.catchall;
			},
			checks: t._zod.def.checks ?? [],
		});
		return Ye(e, n);
	}
	function md(e, t, n) {
		const o = t._zod.def.checks;
		if (o && o.length > 0)
			throw new Error(
				".partial() cannot be used on object schemas containing refinements",
			);
		const s = Ge(t._zod.def, {
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
				return ct(this, "shape", c), c;
			},
			checks: [],
		});
		return Ye(t, s);
	}
	function gd(e, t, n) {
		const r = Ge(t._zod.def, {
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
				return ct(this, "shape", i), i;
			},
		});
		return Ye(t, r);
	}
	function Pt(e, t = 0) {
		var n;
		if (e.aborted === !0) return !0;
		for (let r = t; r < e.issues.length; r++)
			if (((n = e.issues[r]) == null ? void 0 : n.continue) !== !0) return !0;
		return !1;
	}
	function yd(e, t = 0) {
		var n;
		if (e.aborted === !0) return !0;
		for (let r = t; r < e.issues.length; r++)
			if (((n = e.issues[r]) == null ? void 0 : n.continue) === !1) return !0;
		return !1;
	}
	function Xe(e, t) {
		return t.map((n) => {
			var r;
			return (r = n).path ?? (r.path = []), n.path.unshift(e), n;
		});
	}
	function Xn(e) {
		return typeof e == "string" ? e : e == null ? void 0 : e.message;
	}
	function Be(e, t, n) {
		var c, l, d, u, p, f;
		const r = e.message
				? e.message
				: (Xn(
						(d =
							(l = (c = e.inst) == null ? void 0 : c._zod.def) == null
								? void 0
								: l.error) == null
							? void 0
							: d.call(l, e),
					) ??
					Xn(
						(u = t == null ? void 0 : t.error) == null ? void 0 : u.call(t, e),
					) ??
					Xn((p = n.customError) == null ? void 0 : p.call(n, e)) ??
					Xn((f = n.localeError) == null ? void 0 : f.call(n, e)) ??
					"Invalid input"),
			{ inst: o, continue: i, input: s, ...a } = e;
		return (
			a.path ?? (a.path = []),
			(a.message = r),
			t != null && t.reportInput && (a.input = s),
			a
		);
	}
	function po(e) {
		return Array.isArray(e)
			? "array"
			: typeof e == "string"
				? "string"
				: "unknown";
	}
	function un(...e) {
		const [t, n, r] = e;
		return typeof t == "string"
			? { message: t, code: "custom", input: n, inst: r }
			: { ...t };
	}
	const js = (e, t) => {
			(e.name = "$ZodError"),
				Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
				Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
				(e.message = JSON.stringify(t, lo, 2)),
				Object.defineProperty(e, "toString", {
					value: () => e.message,
					enumerable: !1,
				});
		},
		Bs = w("$ZodError", js),
		Ds = w("$ZodError", js, { Parent: Error });
	function vd(e, t = (n) => n.message) {
		const n = {},
			r = [];
		for (const o of e.issues)
			o.path.length > 0
				? ((n[o.path[0]] = n[o.path[0]] || []), n[o.path[0]].push(t(o)))
				: r.push(t(o));
		return { formErrors: r, fieldErrors: n };
	}
	function bd(e, t = (n) => n.message) {
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
	const fo = (e) => (t, n, r, o) => {
			const i = r ? { ...r, async: !1 } : { async: !1 },
				s = t._zod.run({ value: n, issues: [] }, i);
			if (s instanceof Promise) throw new Rt();
			if (s.issues.length) {
				const a = new ((o == null ? void 0 : o.Err) ?? e)(
					s.issues.map((c) => Be(c, i, je())),
				);
				throw (Os(a, o == null ? void 0 : o.callee), a);
			}
			return s.value;
		},
		ho = (e) => async (t, n, r, o) => {
			const i = r ? { ...r, async: !0 } : { async: !0 };
			let s = t._zod.run({ value: n, issues: [] }, i);
			if ((s instanceof Promise && (s = await s), s.issues.length)) {
				const a = new ((o == null ? void 0 : o.Err) ?? e)(
					s.issues.map((c) => Be(c, i, je())),
				);
				throw (Os(a, o == null ? void 0 : o.callee), a);
			}
			return s.value;
		},
		Qn = (e) => (t, n, r) => {
			const o = r ? { ...r, async: !1 } : { async: !1 },
				i = t._zod.run({ value: n, issues: [] }, o);
			if (i instanceof Promise) throw new Rt();
			return i.issues.length
				? {
						success: !1,
						error: new (e ?? Bs)(i.issues.map((s) => Be(s, o, je()))),
					}
				: { success: !0, data: i.value };
		},
		wd = Qn(Ds),
		er = (e) => async (t, n, r) => {
			const o = r ? { ...r, async: !0 } : { async: !0 };
			let i = t._zod.run({ value: n, issues: [] }, o);
			return (
				i instanceof Promise && (i = await i),
				i.issues.length
					? { success: !1, error: new e(i.issues.map((s) => Be(s, o, je()))) }
					: { success: !0, data: i.value }
			);
		},
		_d = er(Ds),
		kd = (e) => (t, n, r) => {
			const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
			return fo(e)(t, n, o);
		},
		Sd = (e) => (t, n, r) => fo(e)(t, n, r),
		xd = (e) => async (t, n, r) => {
			const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
			return ho(e)(t, n, o);
		},
		Cd = (e) => async (t, n, r) => ho(e)(t, n, r),
		zd = (e) => (t, n, r) => {
			const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
			return Qn(e)(t, n, o);
		},
		Td = (e) => (t, n, r) => Qn(e)(t, n, r),
		Id = (e) => async (t, n, r) => {
			const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
			return er(e)(t, n, o);
		},
		$d = (e) => async (t, n, r) => er(e)(t, n, r),
		Rd = /^[cC][0-9a-z]{6,}$/,
		Ed = /^[0-9a-z]+$/,
		Md = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
		Pd = /^[0-9a-vA-V]{20}$/,
		Ld = /^[A-Za-z0-9]{27}$/,
		Ad = /^[a-zA-Z0-9_-]{21}$/,
		Od =
			/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
		Nd =
			/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
		Fs = (e) =>
			e
				? new RegExp(
						`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
					)
				: /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
		jd =
			/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
		Bd = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
	function Dd() {
		return new RegExp(Bd, "u");
	}
	const Fd =
			/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
		Zd =
			/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
		Hd =
			/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
		Ud =
			/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
		Vd =
			/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
		Zs = /^[A-Za-z0-9_-]*$/,
		Wd = /^https?$/,
		qd = /^\+[1-9]\d{6,14}$/,
		Hs =
			"(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
		Kd = new RegExp(`^${Hs}$`);
	function Us(e) {
		const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
		return typeof e.precision == "number"
			? e.precision === -1
				? `${t}`
				: e.precision === 0
					? `${t}:[0-5]\\d`
					: `${t}:[0-5]\\d\\.\\d{${e.precision}}`
			: `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
	}
	function Jd(e) {
		return new RegExp(`^${Us(e)}$`);
	}
	function Gd(e) {
		const t = Us({ precision: e.precision }),
			n = ["Z"];
		e.local && n.push(""),
			e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
		const r = `${t}(?:${n.join("|")})`;
		return new RegExp(`^${Hs}T(?:${r})$`);
	}
	const Yd = (e) => {
			const t = e
				? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}`
				: "[\\s\\S]*";
			return new RegExp(`^${t}$`);
		},
		Xd = /^-?\d+$/,
		Vs = /^-?\d+(?:\.\d+)?$/,
		Qd = /^(?:true|false)$/i,
		ep = /^null$/i,
		tp = /^[^A-Z]*$/,
		np = /^[^a-z]*$/,
		de = w("$ZodCheck", (e, t) => {
			var n;
			e._zod ?? (e._zod = {}),
				(e._zod.def = t),
				(n = e._zod).onattach ?? (n.onattach = []);
		}),
		Ws = { number: "number", bigint: "bigint", object: "date" },
		qs = w("$ZodCheckLessThan", (e, t) => {
			de.init(e, t);
			const n = Ws[typeof t.value];
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
		Ks = w("$ZodCheckGreaterThan", (e, t) => {
			de.init(e, t);
			const n = Ws[typeof t.value];
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
		rp = w("$ZodCheckMultipleOf", (e, t) => {
			de.init(e, t),
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
						: od(n.value, t.value) === 0) ||
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
		op = w("$ZodCheckNumberFormat", (e, t) => {
			var s;
			de.init(e, t), (t.format = t.format || "float64");
			const n = (s = t.format) == null ? void 0 : s.includes("int"),
				r = n ? "int" : "number",
				[o, i] = cd[t.format];
			e._zod.onattach.push((a) => {
				const c = a._zod.bag;
				(c.format = t.format),
					(c.minimum = o),
					(c.maximum = i),
					n && (c.pattern = Xd);
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
		ip = w("$ZodCheckMaxLength", (e, t) => {
			var n;
			de.init(e, t),
				(n = e._zod.def).when ??
					(n.when = (r) => {
						const o = r.value;
						return !co(o) && o.length !== void 0;
					}),
				e._zod.onattach.push((r) => {
					const o = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
					t.maximum < o && (r._zod.bag.maximum = t.maximum);
				}),
				(e._zod.check = (r) => {
					const o = r.value;
					if (o.length <= t.maximum) return;
					const s = po(o);
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
		sp = w("$ZodCheckMinLength", (e, t) => {
			var n;
			de.init(e, t),
				(n = e._zod.def).when ??
					(n.when = (r) => {
						const o = r.value;
						return !co(o) && o.length !== void 0;
					}),
				e._zod.onattach.push((r) => {
					const o = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
					t.minimum > o && (r._zod.bag.minimum = t.minimum);
				}),
				(e._zod.check = (r) => {
					const o = r.value;
					if (o.length >= t.minimum) return;
					const s = po(o);
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
		ap = w("$ZodCheckLengthEquals", (e, t) => {
			var n;
			de.init(e, t),
				(n = e._zod.def).when ??
					(n.when = (r) => {
						const o = r.value;
						return !co(o) && o.length !== void 0;
					}),
				e._zod.onattach.push((r) => {
					const o = r._zod.bag;
					(o.minimum = t.length), (o.maximum = t.length), (o.length = t.length);
				}),
				(e._zod.check = (r) => {
					const o = r.value,
						i = o.length;
					if (i === t.length) return;
					const s = po(o),
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
		tr = w("$ZodCheckStringFormat", (e, t) => {
			var n, r;
			de.init(e, t),
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
		lp = w("$ZodCheckRegex", (e, t) => {
			tr.init(e, t),
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
		cp = w("$ZodCheckLowerCase", (e, t) => {
			t.pattern ?? (t.pattern = tp), tr.init(e, t);
		}),
		up = w("$ZodCheckUpperCase", (e, t) => {
			t.pattern ?? (t.pattern = np), tr.init(e, t);
		}),
		dp = w("$ZodCheckIncludes", (e, t) => {
			de.init(e, t);
			const n = Mt(t.includes),
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
		pp = w("$ZodCheckStartsWith", (e, t) => {
			de.init(e, t);
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
		fp = w("$ZodCheckEndsWith", (e, t) => {
			de.init(e, t);
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
		hp = w("$ZodCheckOverwrite", (e, t) => {
			de.init(e, t),
				(e._zod.check = (n) => {
					n.value = t.tx(n.value);
				});
		});
	class mp {
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
	const gp = { major: 4, minor: 4, patch: 3 },
		V = w("$ZodType", (e, t) => {
			var o;
			var n;
			e ?? (e = {}),
				(e._zod.def = t),
				(e._zod.bag = e._zod.bag || {}),
				(e._zod.version = gp);
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
						let d = Pt(a),
							u;
						for (const p of c) {
							if (p._zod.def.when) {
								if (yd(a) || !p._zod.def.when(a)) continue;
							} else if (d) continue;
							const f = a.issues.length,
								m = p._zod.check(a);
							if (m instanceof Promise && (l == null ? void 0 : l.async) === !1)
								throw new Rt();
							if (u || m instanceof Promise)
								u = (u ?? Promise.resolve()).then(async () => {
									await m, a.issues.length !== f && (d || (d = Pt(a, f)));
								});
							else {
								if (a.issues.length === f) continue;
								d || (d = Pt(a, f));
							}
						}
						return u ? u.then(() => a) : a;
					},
					s = (a, c, l) => {
						if (Pt(a)) return (a.aborted = !0), a;
						const d = i(c, r, l);
						if (d instanceof Promise) {
							if (l.async === !1) throw new Rt();
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
						if (c.async === !1) throw new Rt();
						return l.then((d) => i(d, r, c));
					}
					return i(l, r, c);
				};
			}
			j(e, "~standard", () => ({
				validate: (i) => {
					var s;
					try {
						const a = wd(e, i);
						return a.success
							? { value: a.data }
							: { issues: (s = a.error) == null ? void 0 : s.issues };
					} catch {
						return _d(e, i).then((c) => {
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
		nr = w("$ZodString", (e, t) => {
			var n;
			V.init(e, t),
				(e._zod.pattern =
					[
						...(((n = e == null ? void 0 : e._zod.bag) == null
							? void 0
							: n.patterns) ?? []),
					].pop() ?? Yd(e._zod.bag)),
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
			tr.init(e, t), nr.init(e, t);
		}),
		yp = w("$ZodGUID", (e, t) => {
			t.pattern ?? (t.pattern = Nd), K.init(e, t);
		}),
		vp = w("$ZodUUID", (e, t) => {
			if (t.version) {
				const r = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
					t.version
				];
				if (r === void 0)
					throw new Error(`Invalid UUID version: "${t.version}"`);
				t.pattern ?? (t.pattern = Fs(r));
			} else t.pattern ?? (t.pattern = Fs());
			K.init(e, t);
		}),
		bp = w("$ZodEmail", (e, t) => {
			t.pattern ?? (t.pattern = jd), K.init(e, t);
		}),
		wp = w("$ZodURL", (e, t) => {
			K.init(e, t),
				(e._zod.check = (n) => {
					var r;
					try {
						const o = n.value.trim();
						if (
							!t.normalize &&
							((r = t.protocol) == null ? void 0 : r.source) === Wd.source &&
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
		_p = w("$ZodEmoji", (e, t) => {
			t.pattern ?? (t.pattern = Dd()), K.init(e, t);
		}),
		kp = w("$ZodNanoID", (e, t) => {
			t.pattern ?? (t.pattern = Ad), K.init(e, t);
		}),
		Sp = w("$ZodCUID", (e, t) => {
			t.pattern ?? (t.pattern = Rd), K.init(e, t);
		}),
		xp = w("$ZodCUID2", (e, t) => {
			t.pattern ?? (t.pattern = Ed), K.init(e, t);
		}),
		Cp = w("$ZodULID", (e, t) => {
			t.pattern ?? (t.pattern = Md), K.init(e, t);
		}),
		zp = w("$ZodXID", (e, t) => {
			t.pattern ?? (t.pattern = Pd), K.init(e, t);
		}),
		Tp = w("$ZodKSUID", (e, t) => {
			t.pattern ?? (t.pattern = Ld), K.init(e, t);
		}),
		Ip = w("$ZodISODateTime", (e, t) => {
			t.pattern ?? (t.pattern = Gd(t)), K.init(e, t);
		}),
		$p = w("$ZodISODate", (e, t) => {
			t.pattern ?? (t.pattern = Kd), K.init(e, t);
		}),
		Rp = w("$ZodISOTime", (e, t) => {
			t.pattern ?? (t.pattern = Jd(t)), K.init(e, t);
		}),
		Ep = w("$ZodISODuration", (e, t) => {
			t.pattern ?? (t.pattern = Od), K.init(e, t);
		}),
		Mp = w("$ZodIPv4", (e, t) => {
			t.pattern ?? (t.pattern = Fd), K.init(e, t), (e._zod.bag.format = "ipv4");
		}),
		Pp = w("$ZodIPv6", (e, t) => {
			t.pattern ?? (t.pattern = Zd),
				K.init(e, t),
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
		Lp = w("$ZodCIDRv4", (e, t) => {
			t.pattern ?? (t.pattern = Hd), K.init(e, t);
		}),
		Ap = w("$ZodCIDRv6", (e, t) => {
			t.pattern ?? (t.pattern = Ud),
				K.init(e, t),
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
	function Js(e) {
		if (e === "") return !0;
		if (/\s/.test(e) || e.length % 4 !== 0) return !1;
		try {
			return atob(e), !0;
		} catch {
			return !1;
		}
	}
	const Op = w("$ZodBase64", (e, t) => {
		t.pattern ?? (t.pattern = Vd),
			K.init(e, t),
			(e._zod.bag.contentEncoding = "base64"),
			(e._zod.check = (n) => {
				Js(n.value) ||
					n.issues.push({
						code: "invalid_format",
						format: "base64",
						input: n.value,
						inst: e,
						continue: !t.abort,
					});
			});
	});
	function Np(e) {
		if (!Zs.test(e)) return !1;
		const t = e.replace(/[-_]/g, (r) => (r === "-" ? "+" : "/")),
			n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
		return Js(n);
	}
	const jp = w("$ZodBase64URL", (e, t) => {
			t.pattern ?? (t.pattern = Zs),
				K.init(e, t),
				(e._zod.bag.contentEncoding = "base64url"),
				(e._zod.check = (n) => {
					Np(n.value) ||
						n.issues.push({
							code: "invalid_format",
							format: "base64url",
							input: n.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		Bp = w("$ZodE164", (e, t) => {
			t.pattern ?? (t.pattern = qd), K.init(e, t);
		});
	function Dp(e, t = null) {
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
	const Fp = w("$ZodJWT", (e, t) => {
			K.init(e, t),
				(e._zod.check = (n) => {
					Dp(n.value, t.alg) ||
						n.issues.push({
							code: "invalid_format",
							format: "jwt",
							input: n.value,
							inst: e,
							continue: !t.abort,
						});
				});
		}),
		Gs = w("$ZodNumber", (e, t) => {
			V.init(e, t),
				(e._zod.pattern = e._zod.bag.pattern ?? Vs),
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
		Zp = w("$ZodNumberFormat", (e, t) => {
			op.init(e, t), Gs.init(e, t);
		}),
		Ys = w("$ZodBoolean", (e, t) => {
			V.init(e, t),
				(e._zod.pattern = Qd),
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
		Hp = w("$ZodNull", (e, t) => {
			V.init(e, t),
				(e._zod.pattern = ep),
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
		Up = w("$ZodAny", (e, t) => {
			V.init(e, t), (e._zod.parse = (n) => n);
		}),
		Vp = w("$ZodUnknown", (e, t) => {
			V.init(e, t), (e._zod.parse = (n) => n);
		}),
		Wp = w("$ZodNever", (e, t) => {
			V.init(e, t),
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
		qp = w("$ZodDate", (e, t) => {
			V.init(e, t),
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
	function Xs(e, t, n) {
		e.issues.length && t.issues.push(...Xe(n, e.issues)),
			(t.value[n] = e.value);
	}
	const Kp = w("$ZodArray", (e, t) => {
		V.init(e, t),
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
						? i.push(c.then((l) => Xs(l, n, s)))
						: Xs(c, n, s);
				}
				return i.length ? Promise.all(i).then(() => n) : n;
			});
	});
	function rr(e, t, n, r, o, i) {
		const s = n in r;
		if (e.issues.length) {
			if (o && i && !s) return;
			t.issues.push(...Xe(n, e.issues));
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
	function Qs(e) {
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
		const n = ld(e.shape);
		return {
			...e,
			keys: t,
			keySet: new Set(t),
			numKeys: t.length,
			optionalKeys: new Set(n),
		};
	}
	function ea(e, t, n, r, o, i) {
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
				? e.push(f.then((m) => rr(m, n, p, t, d, u)))
				: rr(f, n, p, t, d, u);
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
	const Jp = w("$ZodObject", (e, t) => {
			V.init(e, t);
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
			const r = Yn(() => Qs(t));
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
			const o = cn,
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
						m = f._zod.optin === "optional",
						y = f._zod.optout === "optional",
						b = f._zod.run({ value: l[p], issues: [] }, c);
					b instanceof Promise
						? d.push(b.then((v) => rr(v, a, p, l, m, y)))
						: rr(b, a, p, l, m, y);
				}
				return i
					? ea(d, l, a, c, r.value, e)
					: d.length
						? Promise.all(d).then(() => a)
						: a;
			};
		}),
		Gp = w("$ZodObjectJIT", (e, t) => {
			Jp.init(e, t);
			const n = e._zod.parse,
				r = Yn(() => Qs(t)),
				o = (p) => {
					var x, C;
					const f = new mp(["shape", "payload", "ctx"]),
						m = r.value,
						y = (I) => {
							const S = As(I);
							return `shape[${S}]._zod.run({ value: input[${S}], issues: [] }, ctx)`;
						};
					f.write("const input = payload.value;");
					const b = Object.create(null);
					let v = 0;
					for (const I of m.keys) b[I] = `key_${v++}`;
					f.write("const newResult = {};");
					for (const I of m.keys) {
						const S = b[I],
							$ = As(I),
							N = p[I],
							B =
								((x = N == null ? void 0 : N._zod) == null
									? void 0
									: x.optin) === "optional",
							O =
								((C = N == null ? void 0 : N._zod) == null
									? void 0
									: C.optout) === "optional";
						f.write(`const ${S} = ${y(I)};`),
							B && O
								? f.write(`
        if (${S}.issues.length) {
          if (${$} in input) {
            payload.issues = payload.issues.concat(${S}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${$}, ...iss.path] : [${$}]
            })));
          }
        }
        
        if (${S}.value === undefined) {
          if (${$} in input) {
            newResult[${$}] = undefined;
          }
        } else {
          newResult[${$}] = ${S}.value;
        }
        
      `)
								: B
									? f.write(`
        if (${S}.issues.length) {
          payload.issues = payload.issues.concat(${S}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${$}, ...iss.path] : [${$}]
          })));
        }
        
        if (${S}.value === undefined) {
          if (${$} in input) {
            newResult[${$}] = undefined;
          }
        } else {
          newResult[${$}] = ${S}.value;
        }
        
      `)
									: f.write(`
        const ${S}_present = ${$} in input;
        if (${S}.issues.length) {
          payload.issues = payload.issues.concat(${S}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${$}, ...iss.path] : [${$}]
          })));
        }
        if (!${S}_present && !${S}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${$}]
          });
        }

        if (${S}_present) {
          if (${S}.value === undefined) {
            newResult[${$}] = undefined;
          } else {
            newResult[${$}] = ${S}.value;
          }
        }

      `);
					}
					f.write("payload.value = newResult;"), f.write("return payload;");
					const _ = f.compile();
					return (I, S) => _(p, I, S);
				};
			let i;
			const s = cn,
				a = !ao.jitless,
				l = a && sd.value,
				d = t.catchall;
			let u;
			e._zod.parse = (p, f) => {
				u ?? (u = r.value);
				const m = p.value;
				return s(m)
					? a && l && (f == null ? void 0 : f.async) === !1 && f.jitless !== !0
						? (i || (i = o(t.shape)),
							(p = i(p, f)),
							d ? ea([], m, p, f, u, e) : p)
						: n(p, f)
					: (p.issues.push({
							expected: "object",
							code: "invalid_type",
							input: m,
							inst: e,
						}),
						p);
			};
		});
	function ta(e, t, n, r) {
		for (const i of e) if (i.issues.length === 0) return (t.value = i.value), t;
		const o = e.filter((i) => !Pt(i));
		return o.length === 1
			? ((t.value = o[0].value), o[0])
			: (t.issues.push({
					code: "invalid_union",
					input: t.value,
					inst: n,
					errors: e.map((i) => i.issues.map((s) => Be(s, r, je()))),
				}),
				t);
	}
	const na = w("$ZodUnion", (e, t) => {
			V.init(e, t),
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
						return new RegExp(`^(${r.map((o) => uo(o.source)).join("|")})$`);
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
				return i ? Promise.all(s).then((a) => ta(a, r, e, o)) : ta(s, r, e, o);
			};
		}),
		Yp = w("$ZodDiscriminatedUnion", (e, t) => {
			(t.inclusive = !1), na.init(e, t);
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
			const r = Yn(() => {
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
				if (!cn(s))
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
		Xp = w("$ZodIntersection", (e, t) => {
			V.init(e, t),
				(e._zod.parse = (n, r) => {
					const o = n.value,
						i = t.left._zod.run({ value: o, issues: [] }, r),
						s = t.right._zod.run({ value: o, issues: [] }, r);
					return i instanceof Promise || s instanceof Promise
						? Promise.all([i, s]).then(([c, l]) => ra(n, c, l))
						: ra(n, i, s);
				});
		});
	function mo(e, t) {
		if (e === t) return { valid: !0, data: e };
		if (e instanceof Date && t instanceof Date && +e == +t)
			return { valid: !0, data: e };
		if (Et(e) && Et(t)) {
			const n = Object.keys(t),
				r = Object.keys(e).filter((i) => n.indexOf(i) !== -1),
				o = { ...e, ...t };
			for (const i of r) {
				const s = mo(e[i], t[i]);
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
					s = mo(o, i);
				if (!s.valid)
					return { valid: !1, mergeErrorPath: [r, ...s.mergeErrorPath] };
				n.push(s.data);
			}
			return { valid: !0, data: n };
		}
		return { valid: !1, mergeErrorPath: [] };
	}
	function ra(e, t, n) {
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
		if ((i.length && o && e.issues.push({ ...o, keys: i }), Pt(e))) return e;
		const s = mo(t.value, n.value);
		if (!s.valid)
			throw new Error(
				`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`,
			);
		return (e.value = s.data), e;
	}
	const Qp = w("$ZodTuple", (e, t) => {
		V.init(e, t);
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
				a = oa(n, "optin"),
				c = oa(n, "optout");
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
						? s.push(f.then((m) => ia(m, r, d)))
						: ia(f, r, d);
				}
			}
			return s.length
				? Promise.all(s).then(() => sa(l, r, n, i, c))
				: sa(l, r, n, i, c);
		};
	});
	function oa(e, t) {
		for (let n = e.length - 1; n >= 0; n--)
			if (e[n]._zod[t] !== "optional") return n + 1;
		return 0;
	}
	function ia(e, t, n) {
		e.issues.length && t.issues.push(...Xe(n, e.issues)),
			(t.value[n] = e.value);
	}
	function sa(e, t, n, r, o) {
		for (let i = 0; i < n.length; i++) {
			const s = e[i],
				a = i < r.length;
			if (s.issues.length) {
				if (!a && i >= o) {
					t.value.length = i;
					break;
				}
				t.issues.push(...Xe(i, s.issues));
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
	const ef = w("$ZodRecord", (e, t) => {
			V.init(e, t),
				(e._zod.parse = (n, r) => {
					const o = n.value;
					if (!Et(o))
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
										issues: d.issues.map((f) => Be(f, r, je())),
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
												f.issues.length && n.issues.push(...Xe(l, f.issues)),
													(n.value[u] = f.value);
											}),
										)
									: (p.issues.length && n.issues.push(...Xe(l, p.issues)),
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
							if (typeof a == "string" && Vs.test(a) && c.issues.length) {
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
											issues: c.issues.map((u) => Be(u, r, je())),
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
											u.issues.length && n.issues.push(...Xe(a, u.issues)),
												(n.value[c.value] = u.value);
										}),
									)
								: (d.issues.length && n.issues.push(...Xe(a, d.issues)),
									(n.value[c.value] = d.value));
						}
					}
					return i.length ? Promise.all(i).then(() => n) : n;
				});
		}),
		tf = w("$ZodEnum", (e, t) => {
			V.init(e, t);
			const n = Ps(t.entries),
				r = new Set(n);
			(e._zod.values = r),
				(e._zod.pattern = new RegExp(
					`^(${n
						.filter((o) => ad.has(typeof o))
						.map((o) => (typeof o == "string" ? Mt(o) : o.toString()))
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
		nf = w("$ZodLiteral", (e, t) => {
			if ((V.init(e, t), t.values.length === 0))
				throw new Error("Cannot create literal schema with no valid values");
			const n = new Set(t.values);
			(e._zod.values = n),
				(e._zod.pattern = new RegExp(
					`^(${t.values.map((r) => (typeof r == "string" ? Mt(r) : r ? Mt(r.toString()) : String(r))).join("|")})$`,
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
		rf = w("$ZodTransform", (e, t) => {
			V.init(e, t),
				(e._zod.optin = "optional"),
				(e._zod.parse = (n, r) => {
					if (r.direction === "backward") throw new Ms(e.constructor.name);
					const o = t.transform(n.value, n);
					if (r.async)
						return (o instanceof Promise ? o : Promise.resolve(o)).then(
							(s) => ((n.value = s), (n.fallback = !0), n),
						);
					if (o instanceof Promise) throw new Rt();
					return (n.value = o), (n.fallback = !0), n;
				});
		});
	function aa(e, t) {
		return t === void 0 && (e.issues.length || e.fallback)
			? { issues: [], value: void 0 }
			: e;
	}
	const la = w("$ZodOptional", (e, t) => {
			V.init(e, t),
				(e._zod.optin = "optional"),
				(e._zod.optout = "optional"),
				j(e._zod, "values", () =>
					t.innerType._zod.values
						? new Set([...t.innerType._zod.values, void 0])
						: void 0,
				),
				j(e._zod, "pattern", () => {
					const n = t.innerType._zod.pattern;
					return n ? new RegExp(`^(${uo(n.source)})?$`) : void 0;
				}),
				(e._zod.parse = (n, r) => {
					if (t.innerType._zod.optin === "optional") {
						const o = n.value,
							i = t.innerType._zod.run(n, r);
						return i instanceof Promise ? i.then((s) => aa(s, o)) : aa(i, o);
					}
					return n.value === void 0 ? n : t.innerType._zod.run(n, r);
				});
		}),
		of = w("$ZodExactOptional", (e, t) => {
			la.init(e, t),
				j(e._zod, "values", () => t.innerType._zod.values),
				j(e._zod, "pattern", () => t.innerType._zod.pattern),
				(e._zod.parse = (n, r) => t.innerType._zod.run(n, r));
		}),
		sf = w("$ZodNullable", (e, t) => {
			V.init(e, t),
				j(e._zod, "optin", () => t.innerType._zod.optin),
				j(e._zod, "optout", () => t.innerType._zod.optout),
				j(e._zod, "pattern", () => {
					const n = t.innerType._zod.pattern;
					return n ? new RegExp(`^(${uo(n.source)}|null)$`) : void 0;
				}),
				j(e._zod, "values", () =>
					t.innerType._zod.values
						? new Set([...t.innerType._zod.values, null])
						: void 0,
				),
				(e._zod.parse = (n, r) =>
					n.value === null ? n : t.innerType._zod.run(n, r));
		}),
		af = w("$ZodDefault", (e, t) => {
			V.init(e, t),
				(e._zod.optin = "optional"),
				j(e._zod, "values", () => t.innerType._zod.values),
				(e._zod.parse = (n, r) => {
					if (r.direction === "backward") return t.innerType._zod.run(n, r);
					if (n.value === void 0) return (n.value = t.defaultValue), n;
					const o = t.innerType._zod.run(n, r);
					return o instanceof Promise ? o.then((i) => ca(i, t)) : ca(o, t);
				});
		});
	function ca(e, t) {
		return e.value === void 0 && (e.value = t.defaultValue), e;
	}
	const lf = w("$ZodPrefault", (e, t) => {
			V.init(e, t),
				(e._zod.optin = "optional"),
				j(e._zod, "values", () => t.innerType._zod.values),
				(e._zod.parse = (n, r) => (
					r.direction === "backward" ||
						(n.value === void 0 && (n.value = t.defaultValue)),
					t.innerType._zod.run(n, r)
				));
		}),
		cf = w("$ZodNonOptional", (e, t) => {
			V.init(e, t),
				j(e._zod, "values", () => {
					const n = t.innerType._zod.values;
					return n ? new Set([...n].filter((r) => r !== void 0)) : void 0;
				}),
				(e._zod.parse = (n, r) => {
					const o = t.innerType._zod.run(n, r);
					return o instanceof Promise ? o.then((i) => ua(i, e)) : ua(o, e);
				});
		});
	function ua(e, t) {
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
	const uf = w("$ZodCatch", (e, t) => {
			V.init(e, t),
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
											error: { issues: i.issues.map((s) => Be(s, r, je())) },
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
									error: { issues: o.issues.map((i) => Be(i, r, je())) },
									input: n.value,
								})),
								(n.issues = []),
								(n.fallback = !0)),
							n);
				});
		}),
		da = w("$ZodPipe", (e, t) => {
			V.init(e, t),
				j(e._zod, "values", () => t.in._zod.values),
				j(e._zod, "optin", () => t.in._zod.optin),
				j(e._zod, "optout", () => t.out._zod.optout),
				j(e._zod, "propValues", () => t.in._zod.propValues),
				(e._zod.parse = (n, r) => {
					if (r.direction === "backward") {
						const i = t.out._zod.run(n, r);
						return i instanceof Promise
							? i.then((s) => or(s, t.in, r))
							: or(i, t.in, r);
					}
					const o = t.in._zod.run(n, r);
					return o instanceof Promise
						? o.then((i) => or(i, t.out, r))
						: or(o, t.out, r);
				});
		});
	function or(e, t, n) {
		return e.issues.length
			? ((e.aborted = !0), e)
			: t._zod.run(
					{ value: e.value, issues: e.issues, fallback: e.fallback },
					n,
				);
	}
	const pa = w("$ZodCodec", (e, t) => {
		V.init(e, t),
			j(e._zod, "values", () => t.in._zod.values),
			j(e._zod, "optin", () => t.in._zod.optin),
			j(e._zod, "optout", () => t.out._zod.optout),
			j(e._zod, "propValues", () => t.in._zod.propValues),
			(e._zod.parse = (n, r) => {
				if ((r.direction || "forward") === "forward") {
					const i = t.in._zod.run(n, r);
					return i instanceof Promise
						? i.then((s) => ir(s, t, r))
						: ir(i, t, r);
				} else {
					const i = t.out._zod.run(n, r);
					return i instanceof Promise
						? i.then((s) => ir(s, t, r))
						: ir(i, t, r);
				}
			});
	});
	function ir(e, t, n) {
		if (e.issues.length) return (e.aborted = !0), e;
		if ((n.direction || "forward") === "forward") {
			const o = t.transform(e.value, e);
			return o instanceof Promise
				? o.then((i) => sr(e, i, t.out, n))
				: sr(e, o, t.out, n);
		} else {
			const o = t.reverseTransform(e.value, e);
			return o instanceof Promise
				? o.then((i) => sr(e, i, t.in, n))
				: sr(e, o, t.in, n);
		}
	}
	function sr(e, t, n, r) {
		return e.issues.length
			? ((e.aborted = !0), e)
			: n._zod.run({ value: t, issues: e.issues }, r);
	}
	const df = w("$ZodPreprocess", (e, t) => {
			da.init(e, t);
		}),
		pf = w("$ZodReadonly", (e, t) => {
			V.init(e, t),
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
					return o instanceof Promise ? o.then(fa) : fa(o);
				});
		});
	function fa(e) {
		return (e.value = Object.freeze(e.value)), e;
	}
	const ff = w("$ZodLazy", (e, t) => {
			V.init(e, t),
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
		hf = w("$ZodCustom", (e, t) => {
			de.init(e, t),
				V.init(e, t),
				(e._zod.parse = (n, r) => n),
				(e._zod.check = (n) => {
					const r = n.value,
						o = t.fn(r);
					if (o instanceof Promise) return o.then((i) => ha(i, n, r, e));
					ha(o, n, r, e);
				});
		});
	function ha(e, t, n, r) {
		if (!e) {
			const o = {
				code: "custom",
				input: n,
				inst: r,
				path: [...(r._zod.def.path ?? [])],
				continue: !r._zod.def.abort,
			};
			r._zod.def.params && (o.params = r._zod.def.params), t.issues.push(un(o));
		}
	}
	var ma;
	class mf {
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
	function ga() {
		return new mf();
	}
	(ma = globalThis).__zod_globalRegistry ?? (ma.__zod_globalRegistry = ga());
	const dn = globalThis.__zod_globalRegistry;
	function gf(e, t) {
		return new e({ type: "string", ...T(t) });
	}
	function ya(e, t) {
		return new e({
			type: "string",
			format: "email",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function va(e, t) {
		return new e({
			type: "string",
			format: "guid",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function ba(e, t) {
		return new e({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function yf(e, t) {
		return new e({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v4",
			...T(t),
		});
	}
	function vf(e, t) {
		return new e({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v6",
			...T(t),
		});
	}
	function bf(e, t) {
		return new e({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: !1,
			version: "v7",
			...T(t),
		});
	}
	function wf(e, t) {
		return new e({
			type: "string",
			format: "url",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function _f(e, t) {
		return new e({
			type: "string",
			format: "emoji",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function kf(e, t) {
		return new e({
			type: "string",
			format: "nanoid",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Sf(e, t) {
		return new e({
			type: "string",
			format: "cuid",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function xf(e, t) {
		return new e({
			type: "string",
			format: "cuid2",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Cf(e, t) {
		return new e({
			type: "string",
			format: "ulid",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function zf(e, t) {
		return new e({
			type: "string",
			format: "xid",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Tf(e, t) {
		return new e({
			type: "string",
			format: "ksuid",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function If(e, t) {
		return new e({
			type: "string",
			format: "ipv4",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function $f(e, t) {
		return new e({
			type: "string",
			format: "ipv6",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Rf(e, t) {
		return new e({
			type: "string",
			format: "cidrv4",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Ef(e, t) {
		return new e({
			type: "string",
			format: "cidrv6",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Mf(e, t) {
		return new e({
			type: "string",
			format: "base64",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Pf(e, t) {
		return new e({
			type: "string",
			format: "base64url",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Lf(e, t) {
		return new e({
			type: "string",
			format: "e164",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Af(e, t) {
		return new e({
			type: "string",
			format: "jwt",
			check: "string_format",
			abort: !1,
			...T(t),
		});
	}
	function Of(e, t) {
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
	function Nf(e, t) {
		return new e({
			type: "string",
			format: "date",
			check: "string_format",
			...T(t),
		});
	}
	function jf(e, t) {
		return new e({
			type: "string",
			format: "time",
			check: "string_format",
			precision: null,
			...T(t),
		});
	}
	function Bf(e, t) {
		return new e({
			type: "string",
			format: "duration",
			check: "string_format",
			...T(t),
		});
	}
	function Df(e, t) {
		return new e({ type: "number", checks: [], ...T(t) });
	}
	function Ff(e, t) {
		return new e({ type: "number", coerce: !0, checks: [], ...T(t) });
	}
	function Zf(e, t) {
		return new e({
			type: "number",
			check: "number_format",
			abort: !1,
			format: "safeint",
			...T(t),
		});
	}
	function Hf(e, t) {
		return new e({ type: "boolean", ...T(t) });
	}
	function Uf(e, t) {
		return new e({ type: "boolean", coerce: !0, ...T(t) });
	}
	function Vf(e, t) {
		return new e({ type: "null", ...T(t) });
	}
	function Wf(e) {
		return new e({ type: "any" });
	}
	function qf(e) {
		return new e({ type: "unknown" });
	}
	function Kf(e, t) {
		return new e({ type: "never", ...T(t) });
	}
	function Jf(e, t) {
		return new e({ type: "date", ...T(t) });
	}
	function Gf(e, t) {
		return new e({ type: "date", coerce: !0, ...T(t) });
	}
	function wa(e, t) {
		return new qs({ check: "less_than", ...T(t), value: e, inclusive: !1 });
	}
	function ar(e, t) {
		return new qs({ check: "less_than", ...T(t), value: e, inclusive: !0 });
	}
	function _a(e, t) {
		return new Ks({ check: "greater_than", ...T(t), value: e, inclusive: !1 });
	}
	function lr(e, t) {
		return new Ks({ check: "greater_than", ...T(t), value: e, inclusive: !0 });
	}
	function ka(e, t) {
		return new rp({ check: "multiple_of", ...T(t), value: e });
	}
	function Sa(e, t) {
		return new ip({ check: "max_length", ...T(t), maximum: e });
	}
	function cr(e, t) {
		return new sp({ check: "min_length", ...T(t), minimum: e });
	}
	function xa(e, t) {
		return new ap({ check: "length_equals", ...T(t), length: e });
	}
	function Yf(e, t) {
		return new lp({
			check: "string_format",
			format: "regex",
			...T(t),
			pattern: e,
		});
	}
	function Xf(e) {
		return new cp({ check: "string_format", format: "lowercase", ...T(e) });
	}
	function Qf(e) {
		return new up({ check: "string_format", format: "uppercase", ...T(e) });
	}
	function eh(e, t) {
		return new dp({
			check: "string_format",
			format: "includes",
			...T(t),
			includes: e,
		});
	}
	function th(e, t) {
		return new pp({
			check: "string_format",
			format: "starts_with",
			...T(t),
			prefix: e,
		});
	}
	function nh(e, t) {
		return new fp({
			check: "string_format",
			format: "ends_with",
			...T(t),
			suffix: e,
		});
	}
	function Lt(e) {
		return new hp({ check: "overwrite", tx: e });
	}
	function rh(e) {
		return Lt((t) => t.normalize(e));
	}
	function oh() {
		return Lt((e) => e.trim());
	}
	function ih() {
		return Lt((e) => e.toLowerCase());
	}
	function sh() {
		return Lt((e) => e.toUpperCase());
	}
	function ah() {
		return Lt((e) => id(e));
	}
	function lh(e, t, n) {
		return new e({ type: "array", element: t, ...T(n) });
	}
	function ch(e, t, n) {
		return new e({ type: "custom", check: "custom", fn: t, ...T(n) });
	}
	function uh(e, t) {
		const n = dh(
			(r) => (
				(r.addIssue = (o) => {
					if (typeof o == "string") r.issues.push(un(o, r.value, n._zod.def));
					else {
						const i = o;
						i.fatal && (i.continue = !1),
							i.code ?? (i.code = "custom"),
							i.input ?? (i.input = r.value),
							i.inst ?? (i.inst = n),
							i.continue ?? (i.continue = !n._zod.def.abort),
							r.issues.push(un(i));
					}
				}),
				e(r.value, r)
			),
			t,
		);
		return n;
	}
	function dh(e, t) {
		const n = new de({ check: "custom", ...T(t) });
		return (n._zod.check = e), n;
	}
	function ph(e, t) {
		const n = T(t);
		let r = n.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
			o = n.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
		n.case !== "sensitive" &&
			((r = r.map((f) => (typeof f == "string" ? f.toLowerCase() : f))),
			(o = o.map((f) => (typeof f == "string" ? f.toLowerCase() : f))));
		const i = new Set(r),
			s = new Set(o),
			a = e.Codec ?? pa,
			c = e.Boolean ?? Ys,
			l = e.String ?? nr,
			d = new l({ type: "string", error: n.error }),
			u = new c({ type: "boolean", error: n.error }),
			p = new a({
				type: "pipe",
				in: d,
				out: u,
				transform: (f, m) => {
					let y = f;
					return (
						n.case !== "sensitive" && (y = y.toLowerCase()),
						i.has(y)
							? !0
							: s.has(y)
								? !1
								: (m.issues.push({
										code: "invalid_value",
										expected: "stringbool",
										values: [...i, ...s],
										input: m.value,
										inst: p,
										continue: !1,
									}),
									{})
					);
				},
				reverseTransform: (f, m) =>
					f === !0 ? r[0] || "true" : o[0] || "false",
				error: n.error,
			});
		return p;
	}
	function Ca(e) {
		let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
		return (
			t === "draft-4" && (t = "draft-04"),
			t === "draft-7" && (t = "draft-07"),
			{
				processors: e.processors ?? {},
				metadataRegistry: (e == null ? void 0 : e.metadata) ?? dn,
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
	function G(e, t, n = { path: [], schemaPath: [] }) {
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
				const m = s.schema,
					y = t.processors[o.type];
				if (!y)
					throw new Error(
						`[toJSONSchema]: Non-representable type encountered: ${o.type}`,
					);
				y(e, t, m, p);
			}
			const f = e._zod.parent;
			f && (s.ref || (s.ref = f), G(f, t, p), (t.seen.get(f).isParent = !0));
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
	function za(e, t) {
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
						v = e.external.uri ?? ((x) => x);
					if (b) return { ref: v(b) };
					const _ = d[1].defId ?? d[1].schema.id ?? `schema${e.counter++}`;
					return (
						(d[1].defId = _), { defId: _, ref: `${v("__shared")}#/${u}/${_}` }
					);
				}
				if (d[1] === n) return { ref: "#" };
				const f = `#/${u}/`,
					m = d[1].schema.id ?? `__schema${e.counter++}`;
				return { defId: m, ref: f + m };
			},
			i = (d) => {
				if (d[1].schema.$ref) return;
				const u = d[1],
					{ ref: p, defId: f } = o(d);
				(u.def = { ...u.schema }), f && (u.defId = f);
				const m = u.schema;
				for (const y in m) delete m[y];
				m.$ref = p;
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
	function Ta(e, t) {
		var a, c, l, d;
		const n = e.seen.get(t);
		if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
		const r = (u) => {
			const p = e.seen.get(u);
			if (p.ref === null) return;
			const f = p.def ?? p.schema,
				m = { ...f },
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
					Object.assign(f, m),
					u._zod.parent === y)
				)
					for (const C in f)
						C === "$ref" || C === "allOf" || C in m || delete f[C];
				if (_.$ref && v.def)
					for (const C in f)
						C === "$ref" ||
							C === "allOf" ||
							(C in v.def &&
								JSON.stringify(f[C]) === JSON.stringify(v.def[C]) &&
								delete f[C]);
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
							input: ur(t, "input", e.processors),
							output: ur(t, "output", e.processors),
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
	const fh =
			(e, t = {}) =>
			(n) => {
				const r = Ca({ ...n, processors: t });
				return G(e, r), za(r, e), Ta(r, e);
			},
		ur =
			(e, t, n = {}) =>
			(r) => {
				const { libraryOptions: o, target: i } = r ?? {},
					s = Ca({ ...(o ?? {}), target: i, io: t, processors: n });
				return G(e, s), za(s, e), Ta(s, e);
			},
		hh = {
			guid: "uuid",
			url: "uri",
			datetime: "date-time",
			json_string: "json-string",
			regex: "",
		},
		mh = (e, t, n, r) => {
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
					((o.format = hh[a] ?? a),
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
		gh = (e, t, n, r) => {
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
		yh = (e, t, n, r) => {
			n.type = "boolean";
		},
		vh = (e, t, n, r) => {
			t.target === "openapi-3.0"
				? ((n.type = "string"), (n.nullable = !0), (n.enum = [null]))
				: (n.type = "null");
		},
		bh = (e, t, n, r) => {
			n.not = {};
		},
		wh = (e, t, n, r) => {},
		_h = (e, t, n, r) => {},
		kh = (e, t, n, r) => {
			if (t.unrepresentable === "throw")
				throw new Error("Date cannot be represented in JSON Schema");
		},
		Sh = (e, t, n, r) => {
			const o = e._zod.def,
				i = Ps(o.entries);
			i.every((s) => typeof s == "number") && (n.type = "number"),
				i.every((s) => typeof s == "string") && (n.type = "string"),
				(n.enum = i);
		},
		xh = (e, t, n, r) => {
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
		Ch = (e, t, n, r) => {
			if (t.unrepresentable === "throw")
				throw new Error("Custom types cannot be represented in JSON Schema");
		},
		zh = (e, t, n, r) => {
			if (t.unrepresentable === "throw")
				throw new Error("Transforms cannot be represented in JSON Schema");
		},
		Th = (e, t, n, r) => {
			const o = n,
				i = e._zod.def,
				{ minimum: s, maximum: a } = e._zod.bag;
			typeof s == "number" && (o.minItems = s),
				typeof a == "number" && (o.maxItems = a),
				(o.type = "array"),
				(o.items = G(i.element, t, { ...r, path: [...r.path, "items"] }));
		},
		Ih = (e, t, n, r) => {
			var l;
			const o = n,
				i = e._zod.def;
			(o.type = "object"), (o.properties = {});
			const s = i.shape;
			for (const d in s)
				o.properties[d] = G(s[d], t, {
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
							(o.additionalProperties = G(i.catchall, t, {
								...r,
								path: [...r.path, "additionalProperties"],
							}))
						: t.io === "output" && (o.additionalProperties = !1);
		},
		$h = (e, t, n, r) => {
			const o = e._zod.def,
				i = o.inclusive === !1,
				s = o.options.map((a, c) =>
					G(a, t, { ...r, path: [...r.path, i ? "oneOf" : "anyOf", c] }),
				);
			i ? (n.oneOf = s) : (n.anyOf = s);
		},
		Rh = (e, t, n, r) => {
			const o = e._zod.def,
				i = G(o.left, t, { ...r, path: [...r.path, "allOf", 0] }),
				s = G(o.right, t, { ...r, path: [...r.path, "allOf", 1] }),
				a = (l) => "allOf" in l && Object.keys(l).length === 1,
				c = [...(a(i) ? i.allOf : [i]), ...(a(s) ? s.allOf : [s])];
			n.allOf = c;
		},
		Eh = (e, t, n, r) => {
			const o = n,
				i = e._zod.def;
			o.type = "array";
			const s = t.target === "draft-2020-12" ? "prefixItems" : "items",
				a =
					t.target === "draft-2020-12" || t.target === "openapi-3.0"
						? "items"
						: "additionalItems",
				c = i.items.map((p, f) => G(p, t, { ...r, path: [...r.path, s, f] })),
				l = i.rest
					? G(i.rest, t, {
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
		Mh = (e, t, n, r) => {
			const o = n,
				i = e._zod.def;
			o.type = "object";
			const s = i.keyType,
				a = s._zod.bag,
				c = a == null ? void 0 : a.patterns;
			if (i.mode === "loose" && c && c.size > 0) {
				const d = G(i.valueType, t, {
					...r,
					path: [...r.path, "patternProperties", "*"],
				});
				o.patternProperties = {};
				for (const u of c) o.patternProperties[u.source] = d;
			} else
				(t.target === "draft-07" || t.target === "draft-2020-12") &&
					(o.propertyNames = G(i.keyType, t, {
						...r,
						path: [...r.path, "propertyNames"],
					})),
					(o.additionalProperties = G(i.valueType, t, {
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
		Ph = (e, t, n, r) => {
			const o = e._zod.def,
				i = G(o.innerType, t, r),
				s = t.seen.get(e);
			t.target === "openapi-3.0"
				? ((s.ref = o.innerType), (n.nullable = !0))
				: (n.anyOf = [i, { type: "null" }]);
		},
		Lh = (e, t, n, r) => {
			const o = e._zod.def;
			G(o.innerType, t, r);
			const i = t.seen.get(e);
			i.ref = o.innerType;
		},
		Ah = (e, t, n, r) => {
			const o = e._zod.def;
			G(o.innerType, t, r);
			const i = t.seen.get(e);
			(i.ref = o.innerType),
				(n.default = JSON.parse(JSON.stringify(o.defaultValue)));
		},
		Oh = (e, t, n, r) => {
			const o = e._zod.def;
			G(o.innerType, t, r);
			const i = t.seen.get(e);
			(i.ref = o.innerType),
				t.io === "input" &&
					(n._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
		},
		Nh = (e, t, n, r) => {
			const o = e._zod.def;
			G(o.innerType, t, r);
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
		jh = (e, t, n, r) => {
			const o = e._zod.def,
				i = o.in._zod.traits.has("$ZodTransform"),
				s = t.io === "input" ? (i ? o.out : o.in) : o.out;
			G(s, t, r);
			const a = t.seen.get(e);
			a.ref = s;
		},
		Bh = (e, t, n, r) => {
			const o = e._zod.def;
			G(o.innerType, t, r);
			const i = t.seen.get(e);
			(i.ref = o.innerType), (n.readOnly = !0);
		},
		Ia = (e, t, n, r) => {
			const o = e._zod.def;
			G(o.innerType, t, r);
			const i = t.seen.get(e);
			i.ref = o.innerType;
		},
		Dh = (e, t, n, r) => {
			const o = e._zod.innerType;
			G(o, t, r);
			const i = t.seen.get(e);
			i.ref = o;
		},
		Fh = w("ZodISODateTime", (e, t) => {
			Ip.init(e, t), Y.init(e, t);
		});
	function Zh(e) {
		return Of(Fh, e);
	}
	const Hh = w("ZodISODate", (e, t) => {
		$p.init(e, t), Y.init(e, t);
	});
	function Uh(e) {
		return Nf(Hh, e);
	}
	const Vh = w("ZodISOTime", (e, t) => {
		Rp.init(e, t), Y.init(e, t);
	});
	function Wh(e) {
		return jf(Vh, e);
	}
	const qh = w("ZodISODuration", (e, t) => {
		Ep.init(e, t), Y.init(e, t);
	});
	function Kh(e) {
		return Bf(qh, e);
	}
	const $a = (e, t) => {
			Bs.init(e, t),
				(e.name = "ZodError"),
				Object.defineProperties(e, {
					format: { value: (n) => bd(e, n) },
					flatten: { value: (n) => vd(e, n) },
					addIssue: {
						value: (n) => {
							e.issues.push(n), (e.message = JSON.stringify(e.issues, lo, 2));
						},
					},
					addIssues: {
						value: (n) => {
							e.issues.push(...n),
								(e.message = JSON.stringify(e.issues, lo, 2));
						},
					},
					isEmpty: {
						get() {
							return e.issues.length === 0;
						},
					},
				});
		},
		Jh = w("ZodError", $a),
		be = w("ZodError", $a, { Parent: Error }),
		Gh = fo(be),
		Yh = ho(be),
		Xh = Qn(be),
		Qh = er(be),
		em = kd(be),
		tm = Sd(be),
		nm = xd(be),
		rm = Cd(be),
		om = zd(be),
		im = Td(be),
		sm = Id(be),
		am = $d(be),
		Ra = new WeakMap();
	function pn(e, t, n) {
		const r = Object.getPrototypeOf(e);
		let o = Ra.get(r);
		if ((o || ((o = new Set()), Ra.set(r, o)), !o.has(t))) {
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
	const W = w(
			"ZodType",
			(e, t) => (
				V.init(e, t),
				Object.assign(e["~standard"], {
					jsonSchema: { input: ur(e, "input"), output: ur(e, "output") },
				}),
				(e.toJSONSchema = fh(e, {})),
				(e.def = t),
				(e.type = t.type),
				Object.defineProperty(e, "_def", { value: t }),
				(e.parse = (n, r) => Gh(e, n, r, { callee: e.parse })),
				(e.safeParse = (n, r) => Xh(e, n, r)),
				(e.parseAsync = async (n, r) => Yh(e, n, r, { callee: e.parseAsync })),
				(e.safeParseAsync = async (n, r) => Qh(e, n, r)),
				(e.spa = e.safeParseAsync),
				(e.encode = (n, r) => em(e, n, r)),
				(e.decode = (n, r) => tm(e, n, r)),
				(e.encodeAsync = async (n, r) => nm(e, n, r)),
				(e.decodeAsync = async (n, r) => rm(e, n, r)),
				(e.safeEncode = (n, r) => om(e, n, r)),
				(e.safeDecode = (n, r) => im(e, n, r)),
				(e.safeEncodeAsync = async (n, r) => sm(e, n, r)),
				(e.safeDecodeAsync = async (n, r) => am(e, n, r)),
				pn(e, "ZodType", {
					check(...n) {
						const r = this.def;
						return this.clone(
							Ge(r, {
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
						return Ye(this, n, r);
					},
					brand() {
						return this;
					},
					register(n, r) {
						return n.add(this, r), this;
					},
					refine(n, r) {
						return this.check(ig(n, r));
					},
					superRefine(n, r) {
						return this.check(sg(n, r));
					},
					overwrite(n) {
						return this.check(Lt(n));
					},
					optional() {
						return Fa(this);
					},
					exactOptional() {
						return Hm(this);
					},
					nullable() {
						return Za(this);
					},
					nullish() {
						return Fa(Za(this));
					},
					nonoptional(n) {
						return Jm(this, n);
					},
					array() {
						return L(this);
					},
					or(n) {
						return X([this, n]);
					},
					and(n) {
						return Nm(this, n);
					},
					transform(n) {
						return Ua(this, Ba(n));
					},
					default(n) {
						return Wm(this, n);
					},
					prefault(n) {
						return Km(this, n);
					},
					catch(n) {
						return Ym(this, n);
					},
					pipe(n) {
						return Ua(this, n);
					},
					readonly() {
						return tg(this);
					},
					describe(n) {
						const r = this.clone();
						return dn.add(r, { description: n }), r;
					},
					meta(...n) {
						if (n.length === 0) return dn.get(this);
						const r = this.clone();
						return dn.add(r, n[0]), r;
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
						return (n = dn.get(e)) == null ? void 0 : n.description;
					},
					configurable: !0,
				}),
				e
			),
		),
		Ea = w("_ZodString", (e, t) => {
			nr.init(e, t),
				W.init(e, t),
				(e._zod.processJSONSchema = (r, o, i) => mh(e, r, o));
			const n = e._zod.bag;
			(e.format = n.format ?? null),
				(e.minLength = n.minimum ?? null),
				(e.maxLength = n.maximum ?? null),
				pn(e, "_ZodString", {
					regex(...r) {
						return this.check(Yf(...r));
					},
					includes(...r) {
						return this.check(eh(...r));
					},
					startsWith(...r) {
						return this.check(th(...r));
					},
					endsWith(...r) {
						return this.check(nh(...r));
					},
					min(...r) {
						return this.check(cr(...r));
					},
					max(...r) {
						return this.check(Sa(...r));
					},
					length(...r) {
						return this.check(xa(...r));
					},
					nonempty(...r) {
						return this.check(cr(1, ...r));
					},
					lowercase(r) {
						return this.check(Xf(r));
					},
					uppercase(r) {
						return this.check(Qf(r));
					},
					trim() {
						return this.check(oh());
					},
					normalize(...r) {
						return this.check(rh(...r));
					},
					toLowerCase() {
						return this.check(ih());
					},
					toUpperCase() {
						return this.check(sh());
					},
					slugify() {
						return this.check(ah());
					},
				});
		}),
		Ma = w("ZodString", (e, t) => {
			nr.init(e, t),
				Ea.init(e, t),
				(e.email = (n) => e.check(ya(Pa, n))),
				(e.url = (n) => e.check(wf(cm, n))),
				(e.jwt = (n) => e.check(Af(xm, n))),
				(e.emoji = (n) => e.check(_f(um, n))),
				(e.guid = (n) => e.check(va(La, n))),
				(e.uuid = (n) => e.check(ba(fn, n))),
				(e.uuidv4 = (n) => e.check(yf(fn, n))),
				(e.uuidv6 = (n) => e.check(vf(fn, n))),
				(e.uuidv7 = (n) => e.check(bf(fn, n))),
				(e.nanoid = (n) => e.check(kf(dm, n))),
				(e.guid = (n) => e.check(va(La, n))),
				(e.cuid = (n) => e.check(Sf(pm, n))),
				(e.cuid2 = (n) => e.check(xf(fm, n))),
				(e.ulid = (n) => e.check(Cf(hm, n))),
				(e.base64 = (n) => e.check(Mf(_m, n))),
				(e.base64url = (n) => e.check(Pf(km, n))),
				(e.xid = (n) => e.check(zf(mm, n))),
				(e.ksuid = (n) => e.check(Tf(gm, n))),
				(e.ipv4 = (n) => e.check(If(ym, n))),
				(e.ipv6 = (n) => e.check($f(vm, n))),
				(e.cidrv4 = (n) => e.check(Rf(bm, n))),
				(e.cidrv6 = (n) => e.check(Ef(wm, n))),
				(e.e164 = (n) => e.check(Lf(Sm, n))),
				(e.datetime = (n) => e.check(Zh(n))),
				(e.date = (n) => e.check(Uh(n))),
				(e.time = (n) => e.check(Wh(n))),
				(e.duration = (n) => e.check(Kh(n)));
		});
	function h(e) {
		return gf(Ma, e);
	}
	const Y = w("ZodStringFormat", (e, t) => {
			K.init(e, t), Ea.init(e, t);
		}),
		Pa = w("ZodEmail", (e, t) => {
			bp.init(e, t), Y.init(e, t);
		});
	function lm(e) {
		return ya(Pa, e);
	}
	const La = w("ZodGUID", (e, t) => {
			yp.init(e, t), Y.init(e, t);
		}),
		fn = w("ZodUUID", (e, t) => {
			vp.init(e, t), Y.init(e, t);
		});
	function E(e) {
		return ba(fn, e);
	}
	const cm = w("ZodURL", (e, t) => {
			wp.init(e, t), Y.init(e, t);
		}),
		um = w("ZodEmoji", (e, t) => {
			_p.init(e, t), Y.init(e, t);
		}),
		dm = w("ZodNanoID", (e, t) => {
			kp.init(e, t), Y.init(e, t);
		}),
		pm = w("ZodCUID", (e, t) => {
			Sp.init(e, t), Y.init(e, t);
		}),
		fm = w("ZodCUID2", (e, t) => {
			xp.init(e, t), Y.init(e, t);
		}),
		hm = w("ZodULID", (e, t) => {
			Cp.init(e, t), Y.init(e, t);
		}),
		mm = w("ZodXID", (e, t) => {
			zp.init(e, t), Y.init(e, t);
		}),
		gm = w("ZodKSUID", (e, t) => {
			Tp.init(e, t), Y.init(e, t);
		}),
		ym = w("ZodIPv4", (e, t) => {
			Mp.init(e, t), Y.init(e, t);
		}),
		vm = w("ZodIPv6", (e, t) => {
			Pp.init(e, t), Y.init(e, t);
		}),
		bm = w("ZodCIDRv4", (e, t) => {
			Lp.init(e, t), Y.init(e, t);
		}),
		wm = w("ZodCIDRv6", (e, t) => {
			Ap.init(e, t), Y.init(e, t);
		}),
		_m = w("ZodBase64", (e, t) => {
			Op.init(e, t), Y.init(e, t);
		}),
		km = w("ZodBase64URL", (e, t) => {
			jp.init(e, t), Y.init(e, t);
		}),
		Sm = w("ZodE164", (e, t) => {
			Bp.init(e, t), Y.init(e, t);
		}),
		xm = w("ZodJWT", (e, t) => {
			Fp.init(e, t), Y.init(e, t);
		}),
		go = w("ZodNumber", (e, t) => {
			Gs.init(e, t),
				W.init(e, t),
				(e._zod.processJSONSchema = (r, o, i) => gh(e, r, o)),
				pn(e, "ZodNumber", {
					gt(r, o) {
						return this.check(_a(r, o));
					},
					gte(r, o) {
						return this.check(lr(r, o));
					},
					min(r, o) {
						return this.check(lr(r, o));
					},
					lt(r, o) {
						return this.check(wa(r, o));
					},
					lte(r, o) {
						return this.check(ar(r, o));
					},
					max(r, o) {
						return this.check(ar(r, o));
					},
					int(r) {
						return this.check(Aa(r));
					},
					safe(r) {
						return this.check(Aa(r));
					},
					positive(r) {
						return this.check(_a(0, r));
					},
					nonnegative(r) {
						return this.check(lr(0, r));
					},
					negative(r) {
						return this.check(wa(0, r));
					},
					nonpositive(r) {
						return this.check(ar(0, r));
					},
					multipleOf(r, o) {
						return this.check(ka(r, o));
					},
					step(r, o) {
						return this.check(ka(r, o));
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
	function Z(e) {
		return Df(go, e);
	}
	const Cm = w("ZodNumberFormat", (e, t) => {
		Zp.init(e, t), go.init(e, t);
	});
	function Aa(e) {
		return Zf(Cm, e);
	}
	const yo = w("ZodBoolean", (e, t) => {
		Ys.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => yh(e, n, r));
	});
	function P(e) {
		return Hf(yo, e);
	}
	const zm = w("ZodNull", (e, t) => {
		Hp.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => vh(e, n, r));
	});
	function Tm(e) {
		return Vf(zm, e);
	}
	const Im = w("ZodAny", (e, t) => {
		Up.init(e, t), W.init(e, t), (e._zod.processJSONSchema = (n, r, o) => wh());
	});
	function hn() {
		return Wf(Im);
	}
	const $m = w("ZodUnknown", (e, t) => {
		Vp.init(e, t), W.init(e, t), (e._zod.processJSONSchema = (n, r, o) => _h());
	});
	function vo() {
		return qf($m);
	}
	const Rm = w("ZodNever", (e, t) => {
		Wp.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => bh(e, n, r));
	});
	function Em(e) {
		return Kf(Rm, e);
	}
	const Oa = w("ZodDate", (e, t) => {
		qp.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (r, o, i) => kh(e, r)),
			(e.min = (r, o) => e.check(lr(r, o))),
			(e.max = (r, o) => e.check(ar(r, o)));
		const n = e._zod.bag;
		(e.minDate = n.minimum ? new Date(n.minimum) : null),
			(e.maxDate = n.maximum ? new Date(n.maximum) : null);
	});
	function Mm(e) {
		return Jf(Oa, e);
	}
	const Pm = w("ZodArray", (e, t) => {
		Kp.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Th(e, n, r, o)),
			(e.element = t.element),
			pn(e, "ZodArray", {
				min(n, r) {
					return this.check(cr(n, r));
				},
				nonempty(n) {
					return this.check(cr(1, n));
				},
				max(n, r) {
					return this.check(Sa(n, r));
				},
				length(n, r) {
					return this.check(xa(n, r));
				},
				unwrap() {
					return this.element;
				},
			});
	});
	function L(e, t) {
		return lh(Pm, e, t);
	}
	const Lm = w("ZodObject", (e, t) => {
		Gp.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Ih(e, n, r, o)),
			j(e, "shape", () => t.shape),
			pn(e, "ZodObject", {
				keyof() {
					return A(Object.keys(this._zod.def.shape));
				},
				catchall(n) {
					return this.clone({ ...this._zod.def, catchall: n });
				},
				passthrough() {
					return this.clone({ ...this._zod.def, catchall: vo() });
				},
				loose() {
					return this.clone({ ...this._zod.def, catchall: vo() });
				},
				strict() {
					return this.clone({ ...this._zod.def, catchall: Em() });
				},
				strip() {
					return this.clone({ ...this._zod.def, catchall: void 0 });
				},
				extend(n) {
					return pd(this, n);
				},
				safeExtend(n) {
					return fd(this, n);
				},
				merge(n) {
					return hd(this, n);
				},
				pick(n) {
					return ud(this, n);
				},
				omit(n) {
					return dd(this, n);
				},
				partial(...n) {
					return md(Da, this, n[0]);
				},
				required(...n) {
					return gd(Ha, this, n[0]);
				},
			});
	});
	function k(e, t) {
		const n = { type: "object", shape: e ?? {}, ...T(t) };
		return new Lm(n);
	}
	const Na = w("ZodUnion", (e, t) => {
		na.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => $h(e, n, r, o)),
			(e.options = t.options);
	});
	function X(e, t) {
		return new Na({ type: "union", options: e, ...T(t) });
	}
	const Am = w("ZodDiscriminatedUnion", (e, t) => {
		Na.init(e, t), Yp.init(e, t);
	});
	function De(e, t, n) {
		return new Am({ type: "union", options: t, discriminator: e, ...T(n) });
	}
	const Om = w("ZodIntersection", (e, t) => {
		Xp.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Rh(e, n, r, o));
	});
	function Nm(e, t) {
		return new Om({ type: "intersection", left: e, right: t });
	}
	const jm = w("ZodTuple", (e, t) => {
		Qp.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Eh(e, n, r, o)),
			(e.rest = (n) => e.clone({ ...e._zod.def, rest: n }));
	});
	function Bm(e, t, n) {
		const r = t instanceof V,
			o = r ? n : t,
			i = r ? t : null;
		return new jm({ type: "tuple", items: e, rest: i, ...T(o) });
	}
	const ja = w("ZodRecord", (e, t) => {
		ef.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Mh(e, n, r, o)),
			(e.keyType = t.keyType),
			(e.valueType = t.valueType);
	});
	function re(e, t, n) {
		return !t || !t._zod
			? new ja({ type: "record", keyType: h(), valueType: e, ...T(t) })
			: new ja({ type: "record", keyType: e, valueType: t, ...T(n) });
	}
	const bo = w("ZodEnum", (e, t) => {
		tf.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (r, o, i) => Sh(e, r, o)),
			(e.enum = t.entries),
			(e.options = Object.values(t.entries));
		const n = new Set(Object.keys(t.entries));
		(e.extract = (r, o) => {
			const i = {};
			for (const s of r)
				if (n.has(s)) i[s] = t.entries[s];
				else throw new Error(`Key ${s} not found in enum`);
			return new bo({ ...t, checks: [], ...T(o), entries: i });
		}),
			(e.exclude = (r, o) => {
				const i = { ...t.entries };
				for (const s of r)
					if (n.has(s)) delete i[s];
					else throw new Error(`Key ${s} not found in enum`);
				return new bo({ ...t, checks: [], ...T(o), entries: i });
			});
	});
	function A(e, t) {
		const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
		return new bo({ type: "enum", entries: n, ...T(t) });
	}
	const Dm = w("ZodLiteral", (e, t) => {
		nf.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => xh(e, n, r)),
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
	function R(e, t) {
		return new Dm({
			type: "literal",
			values: Array.isArray(e) ? e : [e],
			...T(t),
		});
	}
	const Fm = w("ZodTransform", (e, t) => {
		rf.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => zh(e, n)),
			(e._zod.parse = (n, r) => {
				if (r.direction === "backward") throw new Ms(e.constructor.name);
				n.addIssue = (i) => {
					if (typeof i == "string") n.issues.push(un(i, n.value, t));
					else {
						const s = i;
						s.fatal && (s.continue = !1),
							s.code ?? (s.code = "custom"),
							s.input ?? (s.input = n.value),
							s.inst ?? (s.inst = e),
							n.issues.push(un(s));
					}
				};
				const o = t.transform(n.value, n);
				return o instanceof Promise
					? o.then((i) => ((n.value = i), (n.fallback = !0), n))
					: ((n.value = o), (n.fallback = !0), n);
			});
	});
	function Ba(e) {
		return new Fm({ type: "transform", transform: e });
	}
	const Da = w("ZodOptional", (e, t) => {
		la.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Ia(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function Fa(e) {
		return new Da({ type: "optional", innerType: e });
	}
	const Zm = w("ZodExactOptional", (e, t) => {
		of.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Ia(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function Hm(e) {
		return new Zm({ type: "optional", innerType: e });
	}
	const Um = w("ZodNullable", (e, t) => {
		sf.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Ph(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function Za(e) {
		return new Um({ type: "nullable", innerType: e });
	}
	const Vm = w("ZodDefault", (e, t) => {
		af.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Ah(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType),
			(e.removeDefault = e.unwrap);
	});
	function Wm(e, t) {
		return new Vm({
			type: "default",
			innerType: e,
			get defaultValue() {
				return typeof t == "function" ? t() : Ns(t);
			},
		});
	}
	const qm = w("ZodPrefault", (e, t) => {
		lf.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Oh(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function Km(e, t) {
		return new qm({
			type: "prefault",
			innerType: e,
			get defaultValue() {
				return typeof t == "function" ? t() : Ns(t);
			},
		});
	}
	const Ha = w("ZodNonOptional", (e, t) => {
		cf.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Lh(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType);
	});
	function Jm(e, t) {
		return new Ha({ type: "nonoptional", innerType: e, ...T(t) });
	}
	const Gm = w("ZodCatch", (e, t) => {
		uf.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Nh(e, n, r, o)),
			(e.unwrap = () => e._zod.def.innerType),
			(e.removeCatch = e.unwrap);
	});
	function Ym(e, t) {
		return new Gm({
			type: "catch",
			innerType: e,
			catchValue: typeof t == "function" ? t : () => t,
		});
	}
	const wo = w("ZodPipe", (e, t) => {
		da.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => jh(e, n, r, o)),
			(e.in = t.in),
			(e.out = t.out);
	});
	function Ua(e, t) {
		return new wo({ type: "pipe", in: e, out: t });
	}
	const Xm = w("ZodCodec", (e, t) => {
			wo.init(e, t), pa.init(e, t);
		}),
		Qm = w("ZodPreprocess", (e, t) => {
			wo.init(e, t), df.init(e, t);
		}),
		eg = w("ZodReadonly", (e, t) => {
			pf.init(e, t),
				W.init(e, t),
				(e._zod.processJSONSchema = (n, r, o) => Bh(e, n, r, o)),
				(e.unwrap = () => e._zod.def.innerType);
		});
	function tg(e) {
		return new eg({ type: "readonly", innerType: e });
	}
	const ng = w("ZodLazy", (e, t) => {
		ff.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Dh(e, n, r, o)),
			(e.unwrap = () => e._zod.def.getter());
	});
	function rg(e) {
		return new ng({ type: "lazy", getter: e });
	}
	const og = w("ZodCustom", (e, t) => {
		hf.init(e, t),
			W.init(e, t),
			(e._zod.processJSONSchema = (n, r, o) => Ch(e, n));
	});
	function ig(e, t = {}) {
		return ch(og, e, t);
	}
	function sg(e, t) {
		return uh(e, t);
	}
	const Qe = (...e) => ph({ Codec: Xm, Boolean: yo, String: Ma }, ...e);
	function Va(e, t) {
		return new Qm({ type: "pipe", in: Ba(e), out: t });
	}
	function ee(e) {
		return Ff(go, e);
	}
	function ie(e) {
		return Uf(yo, e);
	}
	function ce(e) {
		return Gf(Oa, e);
	}
	function _o(e) {
		return typeof e == "boolean"
			? e
			: e === "false" || e === "0" || e === "" || e === null
				? !1
				: !!e;
	}
	const et = A(["Draft", "Published", "Paused", "Archived", "Deleted"]),
		ag = A(["Published", "Archived"]),
		Wa = A(["Draft", "Published", "Paused", "Archived"]),
		lg = k({ id: E(), type: R("TopTask"), status: ag }),
		cg = k({ id: E(), type: R("Tag"), status: et }),
		ug = k({ id: E(), type: R("Card"), status: et });
	De("type", [lg, cg, ug]);
	const ut = k({ id: E() }),
		mn = k({ id: E(), name: h().optional() }),
		dr = k({ id: h(), name: h(), native: h() }),
		dg = k({ id: E(), code: h().optional(), name: h().optional() });
	function ue(e, t) {
		const r = Object.fromEntries((t ?? []).map((i) => [i, h().nullish()])),
			o = dg.extend({ ...e, ...r });
		return L(o).optional().nullable().default([]);
	}
	const pg = h().meta({ title: "Email label" }),
		fg = h().meta({
			title: "Email placeholder",
			description:
				"The placeholder to show in the input field before user writes anything",
		}),
		se = X([P(), h()]).optional().transform(_o),
		qa = A([
			"LikertScaleThree",
			"LikertScaleFive",
			"LikertScaleSix",
			"LikertScaleSeven",
		]),
		Ka = A([
			"Average",
			"Median",
			"Mode",
			"PositivePercentage",
			"NegativePercentage",
		]),
		Ja = k({
			id: E(),
			label: h(),
			value: ee(),
			emoji: dr.optional().nullable().default(null),
			tr: ue({}, ["@label"]),
		}),
		Ga = k({
			id: E(),
			name: h(),
			type: qa,
			aggregationMethod: Ka,
			status: et.optional(),
			description: h().optional().nullable(),
			likertItems: L(Ja),
			defaultCardTitle: h().optional().nullable(),
			defaultLanguage: k({ id: E(), code: h(), name: h() })
				.optional()
				.nullable(),
			showInDashboard: P().or(h()).optional().transform(_o),
		}),
		hg = Ga.omit({
			name: !0,
			status: !0,
			description: !0,
			defaultCardTitle: !0,
		});
	k({
		name: h(),
		type: qa,
		status: et.optional(),
		description: h().optional().nullable(),
		aggregationMethod: Ka.optional().nullable().default("Average"),
		likertItems: L(Ja.omit({ id: !0, tr: !0 })),
		defaultCardTitle: h().optional().nullable(),
		showInDashboard: P().or(h()).optional().transform(_o),
	});
	const mg = ue({ "@errMessage": h().nullish() }, []),
		Ya = re(h(), h()).optional(),
		Xa = X([P(), h()]).transform((e) =>
			typeof e == "boolean" ? e : e === "true" || e === "1",
		),
		ko = k({
			id: E(),
			type: h(),
			name: h(),
			errMessage: h(),
			negate: P(),
			enabled: P().nullish(),
			tr: mg,
		}),
		Qa = ko.extend({
			name: h(),
			description: h(),
			applyToAllInputCards: P(),
			enabled: P(),
			isOrgSpecific: P(),
			createdAt: ce(),
			updatedAt: ce().nullable(),
			cardCount: Z(),
			cards: L(
				k({
					id: E(),
					name: h(),
					survey: k({ id: E(), name: h(), slug: h() }).nullable(),
				}),
			),
		}),
		gg = k({
			id: E(),
			name: h(),
			description: h().optional(),
			errMessage: h(),
			negate: ie(),
			applyToAllInputCards: Xa.optional().default(!1),
			translations: Ya,
		});
	k({
		type: R("OrgValidationRegex"),
		name: h(),
		description: h().optional(),
		errMessage: h(),
		negate: ie(),
		applyToAllInputCards: Xa.optional().default(!1),
		regex: h(),
		translations: Ya,
	});
	const yg = ko.extend({ regex: h().nullable(), type: R("ValidationRegex") }),
		vg = ko.extend({ regex: h().nullable(), type: R("OrgValidationRegex") }),
		bg = De("type", [yg, vg]),
		wg = Qa.extend({ regex: h().nullable(), type: R("ValidationRegex") }),
		_g = Qa.extend({ regex: h().nullable(), type: R("OrgValidationRegex") }),
		kg = De("type", [wg, _g]);
	gg.extend({
		regex: h(),
		type: R("OrgValidationRegex"),
		enabled: ie().optional(),
	});
	const Sg = A(["Include", "Exclude"]),
		el = A(["and", "or"]),
		xg = A(["string", "number"]),
		Cg = A([
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
		zg = new Set([
			"greaterThan",
			"greaterThanOrEqual",
			"lessThan",
			"lessThanOrEqual",
		]),
		Tg = new Set([
			"equals",
			"notEquals",
			"contains",
			"greaterThan",
			"greaterThanOrEqual",
			"lessThan",
			"lessThanOrEqual",
		]),
		Ig = k({
			traitId: E(),
			traitSlug: h().min(1),
			valueType: xg,
			operator: Cg,
			values: L(h()),
		}).superRefine((e, t) => {
			if (
				(e.valueType === "string" &&
					zg.has(e.operator) &&
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
					: Tg.has(e.operator) &&
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
		$g = Va((e) => {
			if (typeof e != "string") return e;
			try {
				return JSON.parse(e);
			} catch {
				return e;
			}
		}, L(Ig)),
		tl = k({
			desktop: P()
				.nullish()
				.transform((e) => e ?? !0),
			mobile: P()
				.nullish()
				.transform((e) => e ?? !0),
			tablet: P()
				.nullish()
				.transform((e) => e ?? !0),
			languages: L(h())
				.nullish()
				.transform((e) => e ?? []),
			locales: L(h())
				.nullish()
				.transform((e) => e ?? []),
			traitConditions: $g.optional().default([]),
		}),
		nl = tl.extend({ id: E(), type: Sg }),
		Rg =
			/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
	function Eg(e) {
		return typeof e == "string" && Rg.test(e);
	}
	A(["Viewer", "Curator", "Editor", "Admin"]),
		A(["Viewer", "Admin"]),
		k({
			id: E(),
			name: h().optional().nullable(),
			image: h().optional().nullable(),
		});
	const So = k({
			id: E(),
			name: h().optional().nullable(),
			email: lm(),
			image: h().optional().nullable(),
			superAdmin: P().optional().nullable(),
		}),
		Mg = A(["Minimal", "Regular", "Large"]),
		Pg = et.or(R("Paused")),
		rl = Date.parse("2026-01-27T14:29:10Z");
	function Lg({ optionsLayout: e, createdAt: t, updatedAt: n }) {
		if (e !== "vertical" || !t) return e;
		const r = n ?? t;
		return t.getTime() < rl && r.getTime() < rl ? "horizontal" : e;
	}
	const ol = k({
		id: E(),
		errMessage: h().optional().nullable(),
		validation: bg,
		tr: ue({ "@errMessage": h().nullish() }, []).optional().nullable(),
	});
	k({
		id: E(),
		errMessage: h().optional().nullable(),
		validation: kg,
		tr: ue({ "@errMessage": h().nullish() }, []).optional().nullable(),
	});
	const Ag = X([h(), Z(), P(), Tm()]),
		xo = rg(() => X([Ag, L(xo), re(h(), xo)])),
		il = xo
			.optional()
			.nullable()
			.transform((e) => (typeof e == "string" ? JSON.parse(e) : e));
	k({ id: E(), errMessage: h().optional().nullable(), cardId: E() }),
		ol.extend({ card: ut, validation: ut }).omit({ id: !0 });
	function Fe(e) {
		return typeof e == "string" && e.length === 0 ? null : e;
	}
	const Og = tl.extend({
			id: E().optional(),
			card: ut,
			type: A(["Include", "Exclude"]),
			segmentValues: L(mn),
			tasks: L(mn),
			multiSelectItems: L(mn).optional().default([]),
			singleSelectItems: L(mn).optional().default([]),
			likertScaleItems: L(mn).optional().default([]),
			completion: P().optional().nullable(),
			recruited: P().optional().nullable(),
		}),
		Ng = A(["and", "or"]),
		gn = {
			"@name": h().nullish(),
			"@body": h().nullish(),
			"@bodyHtml": h().nullish(),
			"@bodyJson": il,
			"@textNext": h().nullish(),
			"@textPrev": h().nullish(),
			"@textClose": h().nullish(),
			"@textHide": h().nullish(),
			"@textMinimized": h().nullish(),
			"@textReplyLater": h().nullish(),
		},
		Co = ue(gn, []),
		Ce = k({
			id: E(),
			revision: ee().default(0),
			name: h().min(3, "Heading must be at least 3 characters"),
			icon: h().optional().nullable(),
			order: ee(),
			textNext: h().optional().nullable().transform(Fe),
			textPrev: h().optional().nullable().transform(Fe),
			textHide: h().optional().nullable().transform(Fe),
			textMinimized: h().optional().nullable().transform(Fe),
			textReplyLater: h().optional().nullable().transform(Fe),
			textClose: h().optional().nullable().transform(Fe),
			tr: Co.optional().nullable(),
			field: X([h(), k({ id: E() })])
				.optional()
				.nullable()
				.transform((e) =>
					typeof e == "string" ? (Eg(e) ? e : null) : e == null ? void 0 : e.id,
				),
			page: ut.optional().nullable(),
			createdAt: ce().optional(),
			createdBy: So.optional().nullable(),
			updatedAt: ce().optional().nullable(),
			updatedBy: So.optional().nullable(),
			firstResponse: ce().optional().nullish(),
			lastResponse: ce().optional().nullish(),
			status: Pg,
			statusSetAt: ce().optional().nullable(),
			statusSetBy: So.optional().nullable(),
			body: h().optional().nullable(),
			bodyHtml: h().optional().nullable(),
			bodyJson: il,
			type: h(),
			size: Mg.optional(),
			description: h().optional().nullable(),
			optionsLayout: A(["vertical", "horizontal"])
				.optional()
				.nullable()
				.transform((e) => e ?? "vertical"),
			ruleMode: Ng.optional().default("and"),
			rules: L(Og).optional().default([]),
			validations: L(ol).optional().default([]),
			isRequired: ie()
				.optional()
				.nullable()
				.transform((e) => e ?? void 0),
		});
	Ce.omit({
		id: !0,
		revision: !0,
		tr: !0,
		createdAt: !0,
		createdBy: !0,
		updatedAt: !0,
		updatedBy: !0,
		statusSetAt: !0,
		statusSetBy: !0,
	}).extend({ status: et.optional().nullable() });
	const jg = k({
			id: E(),
			name: h(),
			tr: ue({ "@name": h().nullish(), "@description": h().nullish() }, [])
				.optional()
				.nullable(),
		}),
		Bg = ue({ "@label": h().nullish() }, []),
		sl = k({
			id: E().optional(),
			label: h().optional().nullable().transform(Fe),
			order: ee(),
			orderLocked: se.default(!1),
			task: X([jg, ut]),
			tr: Bg.optional().nullable(),
		}),
		Dg = Ce.extend({
			type: R("TopTaskCard"),
			TopTaskCard: k({
				tr: Co,
				randomize: ie().optional().default(!1),
				taskItems: X([
					L(sl),
					re(h(), sl).transform((e) => Object.values(e)),
				]).nullable(),
			}),
		}),
		Fg = Ce.extend({
			type: R("LikertCard"),
			LikertCard: k({
				tr: Co,
				likertScale: X([Ga, hg]),
				showEmoji: se.default(!1),
			}),
		}),
		Zg = Ce.extend({ type: R("MessageCard") }),
		Hg = Ce.extend({
			type: R("CompletionCard"),
			CompletionCard: k({
				tr: ue(gn, ["@positive", "@negative"]),
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
		Ug = Ce.extend({
			type: R("FindabilityCard"),
			FindabilityCard: k({
				tr: ue(gn, ["@positive", "@negative"]),
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
		Vg = Ce.extend({
			type: R("InputCard"),
			InputCard: k({
				label: h().nullable().optional(),
				placeholder: h()
					.optional()
					.meta({
						description: "Dimmed text in the input field before user writes",
					}),
				maxLength: ee()
					.optional()
					.nullable()
					.overwrite((e) => (!e || e <= 0 ? null : e))
					.meta({ description: "Maximum number of characters allowed" }),
				minLength: ee()
					.optional()
					.nullable()
					.default(0)
					.meta({ description: "Minimum number of characters allowed" }),
				multiline: se.meta({ description: "Allow multiline text input" }),
				tr: ue(gn, ["@label", "@placeholder"]),
			}),
		}),
		Wg = Ce.extend({
			type: R("RecruitmentCard"),
			RecruitmentCard: k({
				maxLeads: Va(
					(e) => (e === "" ? null : e),
					ee().int().positive().optional().nullable(),
				),
				email: se.nullable(),
				email_label: pg.optional().nullable(),
				email_placeholder: fg.optional().nullable(),
				phone: se.nullable(),
				phone_label: h().optional().nullable(),
				phone_placeholder: h().optional().nullable(),
				nameEnable: se.nullable(),
				nameLabel: h().optional().nullable(),
				namePlaceholder: h().optional().nullable(),
				consentEnable: se.nullable(),
				consentTermsUrl: h().optional().nullable(),
				consentTermsTitle: h().optional().nullable(),
				consentTermsText: h().optional().nullable(),
				consentTermsLabel: h().optional().nullable(),
				autoEmail: ie().default(!0),
				relatedCards: L(k({ id: E(), name: h(), type: h() }))
					.optional()
					.default([]),
				tr: ue(gn, [
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
		qg = k({
			id: E(),
			name: h(),
			tr: ue({ name: h().nullish(), description: h().nullish() }, [])
				.optional()
				.nullable(),
		}),
		Kg = k({
			id: E(),
			name: h(),
			tr: ue({ name: h().nullish(), description: h().nullish() }, [])
				.optional()
				.nullable(),
		}),
		al = k({
			id: E().optional(),
			name: h().optional(),
			label: h().optional().nullable().transform(Fe),
			order: ee(),
			orderLocked: se.default(!1),
			value: X([Kg, ut]),
		}),
		Jg = Ce.extend({
			type: R("SegmentCard"),
			SegmentCard: k({
				randomize: ie().optional().nullable().default(!1),
				segment: X([qg, ut]),
				items: X([L(al), re(h(), al).transform((e) => Object.values(e))]),
			}),
		}),
		ll = k({
			id: E(),
			createdAt: ce().default(() => new Date()),
			label: h(),
			order: ee(),
			orderLocked: se.default(!1),
			tr: ue({ "@label": h().nullish() }, []).optional().nullable(),
		}),
		cl = X([L(ll), re(h(), ll).transform((e) => Object.values(e))]),
		Gg = Ce.extend({
			type: R("SingleSelectCard"),
			SingleSelectCard: k({
				randomize: ie().optional().nullable().default(!1),
				selectItems: cl,
			}),
		}),
		Yg = Ce.extend({
			type: R("MultiSelectCard"),
			MultiSelectCard: k({
				randomize: ie().optional().nullable().default(!1),
				min: X([Z(), h()])
					.optional()
					.nullable()
					.transform((e) => {
						if (typeof e > "u" || e === null) return null;
						if (typeof e == "number") return Math.max(0, e);
						const t = Number.parseInt(e, 10);
						return isNaN(t) ? null : Math.max(0, t);
					}),
				max: X([Z(), h()])
					.optional()
					.nullable()
					.transform((e) => {
						if (typeof e > "u" || e === null) return null;
						if (typeof e == "number") return Math.max(1, e);
						const t = Number.parseInt(e, 10);
						return isNaN(t) ? null : Math.max(1, t);
					}),
				selectItems: cl,
			}),
		});
	k({
		id: E(),
		name: h(),
		label: h().optional().nullable().transform(Fe),
		orderLocked: se.default(!1),
		card: k({ id: E() }),
		value: k({ id: E() }),
	});
	const ul = X([
			Wg.transform((e) => ({ ...e, ...e.RecruitmentCard })),
			Dg.transform((e) => ({ ...e, ...e.TopTaskCard })),
			Zg,
			Hg.transform((e) => ({
				...e,
				...e.CompletionCard,
				optionsLayout: Lg(e),
			})),
			Ug.transform((e) => ({ ...e, ...e.FindabilityCard })),
			Vg.transform((e) => ({ ...e, ...e.InputCard })),
			Jg.transform((e) => ({ ...e, ...e.SegmentCard })),
			Yg.transform((e) => ({ ...e, ...e.MultiSelectCard })),
			Gg.transform((e) => ({ ...e, ...e.SingleSelectCard })),
			Fg.transform((e) => ({ ...e, ...e.LikertCard })),
		]),
		dl = A([
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
		pr = [
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
		fr = [
			"minimizedBgColor",
			"minimizedTextColor",
			"minimizedBorderColor",
			"minimizedShadow",
		],
		hr = ["shadowSm", "shadowMd", "shadowLg"],
		Xg = [
			"borderStyle",
			"borderWidth",
			"radiusSm",
			"radiusMd",
			"radiusLg",
			"radiusPill",
		],
		Qg = ["focusRingStyle", "focusRingWidth", "focusRingOffset"];
	function we(e, t) {
		return `${e}${t[0].toUpperCase()}${t.slice(1)}`;
	}
	const ey = pr.map((e) => we("light", e)),
		ty = pr.map((e) => we("dark", e)),
		ny = fr.map((e) => we("light", e)),
		ry = fr.map((e) => we("dark", e)),
		oy = hr.map((e) => we("light", e)),
		iy = hr.map((e) => we("dark", e)),
		sy = [...ey, ...ny, ...oy],
		ay = [...ty, ...ry, ...iy],
		ly = [...sy, ...ay],
		cy = [
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
	function pl(e, t) {
		if (!t) return null;
		const n = [];
		for (const { key: r, cssVar: o } of cy) {
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
	function uy(e) {
		var c, l, d, u, p, f, m, y, b;
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
				focusRingStyle: (m = e.focus) == null ? void 0 : m.focusRingStyle,
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
	function fl(e, t) {
		const { themeMode: n, selector: r = ":host" } = t ?? {},
			{ light: o, dark: i } = uy(e),
			s = pl(r, o),
			a = pl(r, i);
		return n === "Dark"
			? a
			: n === "Auto" && s && a
				? `${s}
@media (prefers-color-scheme: dark) {
${a}
}`
				: (s ?? a);
	}
	const At = {};
	for (const e of pr)
		(At[we("light", e)] = { group: "light", field: e }),
			(At[we("dark", e)] = { group: "dark", field: e });
	for (const e of fr)
		(At[we("light", e)] = { group: "lightMinimized", field: e }),
			(At[we("dark", e)] = { group: "darkMinimized", field: e });
	for (const e of hr)
		(At[we("light", e)] = { group: "lightShadow", field: e }),
			(At[we("dark", e)] = { group: "darkShadow", field: e });
	const dy = [
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
		py = {
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
	function fy(e) {
		return py[e];
	}
	const hy = ga();
	function he(e) {
		const t = fy(e);
		return h()
			.nullable()
			.optional()
			.register(hy, t)
			.meta({ title: t.label, description: t.helpText });
	}
	function yn(e) {
		const t = Object.fromEntries(e.map((n) => [n, he(n)]));
		return k(t);
	}
	const my = [
			"borderStyle",
			"borderWidth",
			"radiusSm",
			"radiusMd",
			"radiusLg",
			"radiusPill",
		],
		gy = ["focusRingStyle", "focusRingWidth", "focusRingOffset"],
		yy = hr,
		_e = ["fontSize", "fontBody", "fontHeading"];
	function vy(e) {
		return typeof e == "boolean"
			? e
			: e === "false" || e === "0" || e === "" || e === null
				? !1
				: !!e;
	}
	const zo = X([P(), h()]).optional().transform(vy),
		Ot = A(["Auto", "Light", "Dark"]),
		Nt = yn(pr),
		jt = yn(fr),
		To = yn(my),
		Io = yn(gy),
		Bt = yn(yy),
		hl = k({
			name: h().min(1).max(120),
			slug: h().min(1).max(120),
			description: h().max(4e3).nullable().optional(),
			archived: zo.optional(),
			sourceId: h().max(200).nullable().optional(),
			sourceVersion: h().max(64).nullable().optional(),
			installedFrom: h().max(32).nullable().optional(),
			fontSize: he(_e[0]),
			fontBody: he(_e[1]),
			fontHeading: he(_e[2]),
			border: To.partial().optional(),
			focus: Io.partial().optional(),
			lightShadow: Bt.partial().optional(),
			darkShadow: Bt.partial().optional(),
			light: Nt.partial().optional(),
			dark: Nt.partial().optional(),
			lightMinimized: jt.partial().optional(),
			darkMinimized: jt.partial().optional(),
		});
	hl.extend({
		slug: h().min(1).max(120).optional(),
		archived: zo.optional().default(!1),
		installedFrom: A(["catalog", "import", "manual"]).nullable().optional(),
	}),
		hl
			.partial()
			.extend({
				id: h().uuid().optional(),
				archived: zo.optional(),
				installedFrom: A(["catalog", "import", "manual"]).nullable().optional(),
			}),
		k({
			id: h().min(1).max(200),
			version: h().min(1).max(64),
			name: h().min(1).max(120),
			slug: h().min(1).max(120),
			description: h().max(4e3).nullable().optional(),
			tags: L(h().min(1).max(40)).max(30).optional(),
			fontSize: he(_e[0]),
			fontBody: he(_e[1]),
			fontHeading: he(_e[2]),
			border: To.partial().optional(),
			focus: Io.partial().optional(),
			lightShadow: Bt.partial().optional(),
			darkShadow: Bt.partial().optional(),
			light: Nt.partial().optional(),
			dark: Nt.partial().optional(),
			lightMinimized: jt.partial().optional(),
			darkMinimized: jt.partial().optional(),
		});
	const by = k({
			id: h().uuid(),
			name: h(),
			slug: h(),
			description: h().nullable().optional(),
			archived: P().optional(),
			sourceId: h().nullable().optional(),
			sourceVersion: h().nullable().optional(),
			installedFrom: h().nullable().optional(),
			fontSize: he(_e[0]),
			fontBody: he(_e[1]),
			fontHeading: he(_e[2]),
			border: To.partial().optional(),
			focus: Io.partial().optional(),
			lightShadow: Bt.partial().optional(),
			darkShadow: Bt.partial().optional(),
			light: Nt.partial().optional(),
			dark: Nt.partial().optional(),
			lightMinimized: jt.partial().optional(),
			darkMinimized: jt.partial().optional(),
		}),
		wy = Object.fromEntries(ly.map((e) => [e, h().nullable().optional()])),
		_y = Object.fromEntries(
			[...Xg, ...Qg].map((e) => [e, h().nullable().optional()]),
		),
		ky = k({
			id: h().uuid(),
			name: h(),
			slug: h(),
			description: h().nullable().optional(),
			archived: P().optional(),
			sourceId: h().nullable().optional(),
			sourceVersion: h().nullable().optional(),
			installedFrom: h().nullable().optional(),
			fontSize: he(_e[0]),
			fontBody: he(_e[1]),
			fontHeading: he(_e[2]),
			..._y,
			...wy,
		}),
		vn = re(h(), h()).nullable().optional(),
		$o = X([by, ky]),
		mr = A(["AllAtOnce", "OneAtATime"]),
		bn = A(["Public", "InvitationOnly", "Password"]),
		Sy = A(["Visible", "Hidden", "Published"]).transform((e) =>
			e === "Published" ? "Visible" : e,
		),
		xy = A([
			"Pending",
			"Sent",
			"Opened",
			"Started",
			"Completed",
			"Bounced",
			"Expired",
		]),
		gr = A(["Bar", "Percentage", "Fraction", "None"]),
		tt = A(["End", "Restart", "Redirect"]),
		nt = A([
			"below-title",
			"above-title",
			"split-left",
			"split-right",
			"split-top",
			"background",
		]),
		yr = A(["cover", "contain"]),
		Ro = k({
			imageLayout: nt.nullable().optional(),
			imageLayoutMobile: nt.nullable().optional(),
			imageBrightness: Z().min(0).max(1).nullable().optional(),
			imageFit: yr.nullable().optional(),
		}),
		ml = A([
			"confetti",
			"fireworks",
			"emojis",
			"balloons",
			"sparkles",
			"snow",
			"bubbles",
			"stars",
		]),
		gl = A(["low", "medium", "high"]),
		yl = A(["burst", "continuous", "burst-then-ambient"]),
		vl = k({
			pageEffect: ml.nullable().optional(),
			pageEffectIntensity: gl.nullable().optional(),
			pageEffectBehavior: yl.nullable().optional(),
			pageEffectEmojis: L(h()).min(1).max(10).nullable().optional(),
		}),
		ke = k({
			id: h().uuid(),
			key: h(),
			filename: h(),
			mimeType: h(),
			width: Z().int().nullable().optional(),
			height: Z().int().nullable().optional(),
			altText: h().nullable().optional(),
			focalX: Z().min(0).max(1).nullable().optional(),
			focalY: Z().min(0).max(1).nullable().optional(),
		})
			.nullable()
			.optional(),
		Se = k({ id: h().uuid() }).nullable().optional();
	k({
		displayMode: mr.nullable().optional(),
		themeId: h().uuid().nullable().optional(),
		themeMode: Ot.nullable().optional(),
		showProgressBar: se.nullable().optional(),
		progressBarStyle: gr.nullable().optional(),
		showQuestionNumbers: se.nullable().optional(),
		allowBackNavigation: se.nullable().optional(),
		completionBehavior: tt.nullable().optional(),
		completionRedirectUrl: h().nullable().optional(),
		completionRedirectDelay: ee().int().nullable().optional(),
		ogTitle: h().nullable().optional(),
		ogDescription: h().nullable().optional(),
		ogImage: Se,
		logo: Se,
		headerImage: Se,
		backgroundImage: Se,
		favicon: Se,
		...Ro.shape,
	});
	const Cy = k({
			displayMode: mr.nullable().optional(),
			theme: A(["Light", "Dark"]).nullable().optional(),
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
			logo: Se,
			headerImage: Se,
			backgroundImage: Se,
			favicon: Se,
			showProgressBar: se.nullable().optional(),
			progressBarStyle: gr.nullable().optional(),
			showQuestionNumbers: se.nullable().optional(),
			allowBackNavigation: se.nullable().optional(),
			completionBehavior: tt.nullable().optional(),
			completionRedirectUrl: h().nullable().optional(),
			completionRedirectDelay: ee().int().nullable().optional(),
			ogTitle: h().nullable().optional(),
			ogDescription: h().nullable().optional(),
			ogImage: Se,
		}),
		bl = k({
			id: h().uuid().optional(),
			displayMode: mr.nullable().optional(),
			theme: A(["Light", "Dark"]).nullable().optional(),
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
			showProgressBar: P().nullable().optional(),
			progressBarStyle: gr.nullable().optional(),
			showQuestionNumbers: P().nullable().optional(),
			allowBackNavigation: P().nullable().optional(),
			completionBehavior: tt.nullable().optional(),
			completionRedirectUrl: h().nullable().optional(),
			completionRedirectDelay: Z().int().nullable().optional(),
			ogTitle: h().nullable().optional(),
			ogDescription: h().nullable().optional(),
			ogImage: ke,
		});
	k({
		themeId: h().uuid().nullable().optional(),
		themeMode: Ot.nullable().optional(),
		textNext: h().nullable().optional(),
		textPrev: h().nullable().optional(),
		headerImage: Se,
		...Ro.shape,
		...vl.shape,
		themeOverrides: vn,
	});
	const zy = k({
			theme: $o.nullable().optional(),
			themeMode: Ot.nullable().optional(),
			textNext: h().nullable().optional(),
			textPrev: h().nullable().optional(),
			headerImage: ke,
			...Ro.shape,
			...vl.shape,
			themeOverrides: vn,
		}),
		Ty = ue(
			{
				"@title": h().nullish(),
				"@description": h().nullish(),
				"@textNext": h().nullish(),
				"@textPrev": h().nullish(),
			},
			[],
		),
		Iy = k({
			id: h().uuid(),
			name: h(),
			title: h().nullable().optional(),
			description: h().nullable().optional(),
			tr: Ty.optional().nullable(),
			order: Z().int(),
			pageStatus: Sy.nullable().optional(),
			presentation: zy.nullable().optional(),
			config: bl.nullable().optional(),
			theme: $o.nullable().optional(),
			themeMode: Ot.nullable().optional(),
			textNext: h().nullable().optional(),
			textPrev: h().nullable().optional(),
			headerImage: ke,
			imageLayout: nt.nullable().optional(),
			imageLayoutMobile: nt.nullable().optional(),
			imageBrightness: Z().nullable().optional(),
			imageFit: yr.nullable().optional(),
			themeOverrides: vn,
			pageEffect: ml.nullable().optional(),
			pageEffectIntensity: gl.nullable().optional(),
			pageEffectBehavior: yl.nullable().optional(),
			pageEffectEmojis: L(h()).nullable().optional(),
		});
	k({
		id: h().uuid(),
		surveyId: h().uuid(),
		code: h(),
		email: h().email().nullable().optional(),
		phone: h().nullable().optional(),
		recipientName: h().nullable().optional(),
		status: xy.nullable().optional(),
		sentAt: ce().nullable().optional(),
		openedAt: ce().nullable().optional(),
		startedAt: ce().nullable().optional(),
		completedAt: ce().nullable().optional(),
		maxResponses: Z().int().nullable().optional(),
		expiresAt: ce().nullable().optional(),
		responseCount: Z().int().nullable().optional(),
	});
	const dt = k({
			event: h(),
			survey: h(),
			session: h(),
			url: h().optional(),
			visitor: h().ulid(),
		}),
		$y = dt.extend({ event: R("CardView"), type: dl }),
		Ry = dt.extend({ event: R("PageView"), value: h() }),
		Ze = dt.extend({
			event: R("CardValue"),
			card: h(),
			type: dl,
			value: X([h(), P(), re(h(), vo()), L(h())]),
			languageCode: h().optional(),
			cardOrder: Z().int().nonnegative().optional(),
		}),
		Ey = Ze.extend({ type: R("InputCard") }),
		My = Ze.extend({ type: R("TopTaskCard") }),
		Py = Ze.extend({ type: R("CompletionCard") }),
		Ly = Ze.extend({ type: R("SegmentCard") }),
		Ay = Ze.extend({ type: R("LikertCard") }),
		Oy = Ze.extend({
			type: R("RecruitmentCard"),
			value: k({
				email: h().optional().nullable(),
				phone: h().optional().nullable(),
				name: h().optional().nullable(),
				consented: P().optional(),
				autoEmail: P().optional(),
				optedOut: P().optional(),
			}),
		}),
		Ny = Ze.extend({ type: R("MultiSelectCard"), value: L(E()) }),
		jy = Ze.extend({ type: R("SingleSelectCard"), value: E() }),
		By = Ze.extend({ type: R("FindabilityCard") }),
		Dy = dt.extend({ event: R("Value"), value: X([h(), P()]) }),
		Fy = dt.extend({
			event: R("SessionInit"),
			ua: h(),
			screenSize: Bm([Z(), Z()]),
			pixelRatio: Z(),
			connection: h(),
			traits: re(h(), h()).optional(),
			languageCode: h().optional(),
		}),
		Zy = dt.extend({ event: R("Custom"), key: h(), value: h() }),
		Hy = dt.extend({ event: R("SessionTraits"), traits: re(h(), h()) }),
		Eo = De("type", [Ey, Oy, Ly, My, Py, By, Ay, Ny, jy]);
	X([Eo, $y, Ry, Dy, Zy, Fy, Hy]);
	const xe = h().nullable(),
		vr = h().min(3),
		Mo = h()
			.min(3)
			.regex(/^[a-z0-9-.]+$/),
		wl = A(["Popup", "Inline", "Headless", "FullPage"]),
		Po = A(["Survey", "Discovery", "TopTask", "Findability"]),
		br = A(["BottomRight", "BottomLeft", "TopRight", "TopLeft"]),
		Uy = A(["default", "floating-controls"]),
		Lo = P().or(Qe()).optional(),
		Ao = ee().min(0).max(100),
		wn = ee().min(0),
		Oo = ee().min(0),
		No = ee().min(0).max(6e4).optional().default(0),
		jo = ee().min(0).optional(),
		Vy = A(
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
		Wy = 100,
		_n = new Map();
	function qy(e) {
		try {
			return new RegExp(e);
		} catch {
			return null;
		}
	}
	function Ky(e) {
		return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
	function Jy(e, t) {
		try {
			const n = e.indexOf("?"),
				o =
					(n >= 0 ? e.slice(0, n) : e)
						.split("/")
						.filter(Boolean)
						.reduce((i, s) => `${i}\\/${qy(s) ? `(${s})` : Ky(s)}`, "^") +
					(t ? "(\\/.*)?" : "") +
					"$";
			return new RegExp(o);
		} catch {
			return null;
		}
	}
	function Bo(e, t) {
		if (e === t) return !0;
		const n = (r) => (r.startsWith("www.") ? r.slice(4) : r);
		return n(e) === n(t);
	}
	function Do(e, t, n, r) {
		if (!t) return !1;
		if (r) {
			const a = `${t}:${n}`,
				c = _n.get(a);
			if (c) return c.test(e);
			const l = Jy(t, n);
			if (!l) return !1;
			if (_n.size >= Wy) {
				const d = _n.keys().next().value;
				d && _n.delete(d);
			}
			return _n.set(a, l), l.test(e);
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
	function _l(e, t) {
		try {
			const n = new URL(t),
				r = e.domain ? Bo(e.domain.name, n.hostname) : !0,
				o =
					e.path &&
					Do(
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
	const kl = k({
			textClose: xe,
			textHide: xe,
			textNext: xe,
			textPrev: xe,
			textMinimized: xe,
			textReplyLater: xe,
		}),
		Gy = k({
			id: E(),
			isRegexp: P().default(!1),
			negate: P().default(!1),
			type: Vy,
			value: h(),
			domains: L(k({ id: E(), name: h() })),
		}),
		Fo = k({
			id: E(),
			ruleType: A(["Show", "Hide", "FollowOnly"]),
			path: h().optional(),
			desktop: P(),
			mobile: P(),
			tablet: P(),
			applyBelow: P(),
			follow: P(),
			isRegex: P().optional().default(!1),
			domain: k({ id: E(), name: h() }).optional().nullable(),
		}),
		rt = kl.partial().extend({
			mode: R("create"),
			name: vr,
			slug: Mo,
			description: h().optional().nullable(),
			emoji: dr.optional(),
			active: ie().optional(),
			status: et.optional(),
			surveyType: Po.optional(),
			capturePercent: Ao.optional(),
			minTimeForRetake: wn.optional(),
			minTimeForRetrigger: Oo.optional(),
			allowedOrigins: L(h()).optional(),
			initialDelay: No,
			autoCloseAfter: jo,
			path: h()
				.optional()
				.overwrite((e) => (e === "" ? void 0 : e)),
			domain: h().optional(),
			applyBelow: ie().optional().default(!1),
			follow: ie().optional().default(!1),
			language: E(),
			editTeams: re(E(), P().or(Qe())).default({}),
			visibleToAllTeams: P().or(Qe()).optional().default(!1),
		}),
		wr = h()
			.min(1, "Enter a password to protect this survey")
			.max(256, "Password must be 256 characters or fewer"),
		Sl = De("generalType", [
			rt
				.extend({
					generalType: R("Popup"),
					renderType: R("Popup"),
					surveyPosition: br.optional(),
					showCloseButton: Lo,
				})
				.strict(),
			rt.extend({ generalType: R("Inline"), renderType: R("Inline") }).strict(),
			rt
				.extend({ generalType: R("Headless"), renderType: R("Headless") })
				.strict(),
			rt
				.extend({
					generalType: R("FullPage"),
					renderType: R("FullPage"),
					accessMode: bn.optional().nullable(),
					password: wr.optional().nullable(),
					completionBehavior: tt.optional(),
					completionRedirectUrl: h().optional().nullable(),
					completionRedirectDelay: ee().int().optional().nullable(),
				})
				.strict(),
		]),
		Yy = De("generalType", [
			rt.extend({
				generalType: R("Popup"),
				renderType: R("Popup"),
				surveyPosition: br.optional(),
				showCloseButton: Lo,
			}),
			rt.extend({ generalType: R("Inline"), renderType: R("Inline") }),
			rt.extend({ generalType: R("Headless"), renderType: R("Headless") }),
			rt.extend({
				generalType: R("FullPage"),
				renderType: R("FullPage"),
				accessMode: bn.optional().nullable(),
				password: wr.optional().nullable(),
				completionBehavior: tt.optional(),
				completionRedirectUrl: h().optional().nullable(),
				completionRedirectDelay: ee().int().optional().nullable(),
			}),
		]).transform((e, t) => {
			const n = Sl.safeParse(e);
			if (n.success) return n.data;
			const [r] = n.error.issues;
			return (
				t.addIssue({
					code: "custom",
					message:
						(r == null ? void 0 : r.message) ?? "Invalid survey create payload",
					path: r == null ? void 0 : r.path,
				}),
				rd
			);
		}),
		xl = k({
			mode: R("copy"),
			name: vr,
			slug: Mo,
			emoji: dr.optional(),
			copySurvey: E(),
			keepRules: P().or(Qe()).optional().default(!0),
			cards: re(E(), P().or(Qe())).optional(),
			editTeams: re(E(), P().or(Qe())).default({}),
			visibleToAllTeams: P().or(Qe()).optional().default(!1),
			description: h().optional().nullable(),
			accessMode: bn.optional().nullable(),
			password: wr.optional().nullable(),
			completionBehavior: tt.optional(),
			minTimeForRetake: wn.optional(),
			completionRedirectUrl: h().optional().nullable(),
			completionRedirectDelay: ee().int().optional().nullable(),
		});
	De("mode", [Sl, xl]),
		X([Yy, xl]),
		A(["Completion", "Demand"]),
		A(["Absolute", "Relative"]);
	const Xy = k({
			name: vr.optional(),
			emoji: dr.nullable().optional(),
			description: h().optional().nullable(),
			language: E().optional(),
			timezone: h().optional(),
			surveyType: Po.optional(),
		}),
		Qy = k({
			accessMode: bn.optional().nullable(),
			password: wr.optional().nullable(),
			completionBehavior: tt.optional(),
			minTimeForRetake: wn.optional(),
			completionRedirectUrl: h().optional().nullable(),
			completionRedirectDelay: ee().int().optional().nullable(),
		}),
		_r = k({ id: E(), visibleToAllTeams: P().or(Qe()).optional() }).merge(Xy),
		Cl = _r.extend({
			generalType: R("Popup"),
			renderType: R("Popup").optional(),
			surveyPosition: br.optional(),
			showCloseButton: Lo,
		}),
		zl = _r.extend({
			generalType: R("Inline"),
			renderType: R("Inline").optional(),
		}),
		Tl = _r.extend({
			generalType: R("Headless"),
			renderType: R("Headless").optional(),
		}),
		Il = _r
			.extend({
				generalType: R("FullPage"),
				renderType: R("FullPage").optional(),
			})
			.merge(Qy);
	De("generalType", [Cl, zl, Tl, Il]),
		De("generalType", [Cl.strict(), zl.strict(), Tl.strict(), Il.strict()]);
	const ev = k({
		capturePercent: Ao.optional(),
		minTimeForRetake: wn.optional(),
		minTimeForRetrigger: Oo.optional(),
		allowedOrigins: L(h()).optional(),
		initialDelay: No,
		autoCloseAfter: jo,
	});
	k({ id: E() }).merge(ev).strict();
	const tv = k({
		ogTitle: h().optional().nullable(),
		ogDescription: h().optional().nullable(),
		ogImage: Se,
	});
	k({ id: E() }).merge(tv).strict();
	const nv = k({
		themeId: E().optional().nullable(),
		themeMode: Ot.optional().nullable(),
		themeOverrides: vn,
		fullPageConfig: Cy.optional(),
		imageLayout: nt.optional().nullable(),
		imageLayoutMobile: nt.optional().nullable(),
		imageBrightness: Z().min(0).max(1).optional().nullable(),
		imageFit: yr.optional().nullable(),
	});
	k({ id: E() }).merge(nv).strict();
	const rv = k({ language: E().optional(), languages: L(E()).optional() });
	k({ id: E() }).merge(rv).strict();
	const ov = kl.partial();
	k({ id: E() }).merge(ov).strict(),
		k({
			publishingState: Wa,
			publishStartAt: ce().nullable(),
			publishEndAt: ce().nullable(),
		});
	const iv = E().brand(),
		sv = k({
			id: iv,
			revision: ee().default(0),
			name: vr,
			slug: Mo,
			fullSlug: h(),
			status: et.nullable().optional(),
			publishingState: Wa.optional(),
			isLive: P().optional(),
			description: h().optional().nullable(),
			customCss: h().nullish(),
			renderType: wl,
			accessMode: bn.optional().nullable(),
			displayMode: mr.optional().nullable(),
			themeMode: Ot.optional().nullable(),
			themeOverrides: vn,
			showProgressBar: ie().optional().nullable(),
			progressBarStyle: gr.optional().nullable(),
			showQuestionNumbers: ie().optional().nullable(),
			allowBackNavigation: ie().optional().nullable(),
			completionBehavior: tt.optional().nullable(),
			completionRedirectUrl: h().optional().nullable(),
			completionRedirectDelay: ee().int().optional().nullable(),
			ogTitle: h().optional().nullable(),
			ogDescription: h().optional().nullable(),
			ogImage: ke,
			logo: ke,
			headerImage: ke,
			backgroundImage: ke,
			favicon: ke,
			imageLayout: nt.optional().nullable(),
			imageLayoutMobile: nt.optional().nullable(),
			imageBrightness: Z().optional().nullable(),
			imageFit: yr.optional().nullable(),
			theme: $o.optional().nullable(),
			fullPageConfig: bl.optional().nullable(),
			surveyType: Po,
			surveyPosition: br,
			showCloseButton: P(),
			popupLayout: Uy,
			capturePercent: Ao,
			minTimeForRetake: wn,
			minTimeForRetrigger: Oo,
			initialDelay: No,
			autoCloseAfter: jo,
			allowedOrigins: L(h()).optional(),
			trackPageViews: ie().optional().nullable(),
			debugEnabled: ie().optional().nullable(),
			urlRules: L(Gy),
			showRules: L(Fo).default([]),
			followRules: L(Fo).default([]),
			hideRules: L(Fo).default([]),
			audienceRuleMode: el.optional().default("and"),
			audienceRules: L(nl).optional().default([]),
			language: k({ id: E(), name: h(), code: h() }).nullable(),
			languages: L(k({ id: E(), name: h(), code: h() }))
				.optional()
				.nullable(),
			tr: L(
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
			ipBlacklist: L(k({ id: E(), ip: h() })).optional(),
			textClose: xe.optional(),
			textHide: xe.optional(),
			textNext: xe.optional(),
			textPrev: xe.optional(),
			textMinimized: xe.optional(),
			textReplyLater: xe.optional(),
			pages: L(Iy).optional().nullable(),
		});
	k({
		autoClose: P().optional().default(!0),
		constrainHeight: P().optional().default(!0),
		testMode: P().optional().default(!1),
		apiHost: h().optional(),
	});
	function kr(e) {
		const t = new Error(e);
		return (t.source = "ulid"), t;
	}
	const Zo = "0123456789ABCDEFGHJKMNPQRSTVWXYZ",
		kn = Zo.length,
		$l = Math.pow(2, 48) - 1,
		av = 10,
		lv = 16;
	function cv(e) {
		let t = Math.floor(e() * kn);
		return t === kn && (t = kn - 1), Zo.charAt(t);
	}
	function uv(e, t) {
		if (isNaN(e)) throw new Error(e + " must be a number");
		if (e > $l) throw kr("cannot encode time greater than " + $l);
		if (e < 0) throw kr("time must be positive");
		if (Number.isInteger(Number(e)) === !1) throw kr("time must be an integer");
		let n,
			r = "";
		for (; t > 0; t--) (n = e % kn), (r = Zo.charAt(n) + r), (e = (e - n) / kn);
		return r;
	}
	function dv(e, t) {
		let n = "";
		for (; e > 0; e--) n = cv(t) + n;
		return n;
	}
	function pv(e = !1, t) {
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
		throw kr("secure crypto unusable, insecure Math.random not allowed");
	}
	function fv(e) {
		return (
			e || (e = pv()),
			function (n) {
				return isNaN(n) && (n = Date.now()), uv(n, av) + dv(lv, e);
			}
		);
	}
	const Le = fv();
	function hv() {
		if (typeof globalThis < "u") return globalThis;
		if (typeof self < "u") return self;
		if (typeof window < "u") return window;
		if (typeof global < "u") return global;
	}
	function mv() {
		const e = hv();
		if (e.__xstate__) return e.__xstate__;
	}
	const gv = (e) => {
		if (typeof window > "u") return;
		const t = mv();
		t && t.register(e);
	};
	class Rl {
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
	const El = ".",
		yv = "",
		Ml = "",
		vv = "#",
		bv = "*",
		Pl = "xstate.init",
		wv = "xstate.error",
		Sr = "xstate.stop";
	function _v(e, t) {
		return { type: `xstate.after.${e}.${t}` };
	}
	function Ho(e, t) {
		return { type: `xstate.done.state.${e}`, output: t };
	}
	function kv(e, t) {
		return { type: `xstate.done.actor.${e}`, output: t, actorId: e };
	}
	function Ll(e, t) {
		return { type: `xstate.error.actor.${e}`, error: t, actorId: e };
	}
	function Al(e) {
		return { type: Pl, input: e };
	}
	function Ae(e) {
		setTimeout(() => {
			throw e;
		});
	}
	const Sv =
		(typeof Symbol == "function" && Symbol.observable) || "@@observable";
	function Ol(e, t) {
		const n = Nl(e),
			r = Nl(t);
		return typeof r == "string"
			? typeof n == "string"
				? r === n
				: !1
			: typeof n == "string"
				? n in r
				: Object.keys(n).every((o) => (o in r ? Ol(n[o], r[o]) : !1));
	}
	function Uo(e) {
		if (Dl(e)) return e;
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
	function Nl(e) {
		if (sb(e)) return e.value;
		if (typeof e != "string") return e;
		const t = Uo(e);
		return xv(t);
	}
	function xv(e) {
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
	function jl(e, t) {
		const n = {},
			r = Object.keys(e);
		for (let o = 0; o < r.length; o++) {
			const i = r[o];
			n[i] = t(e[i], i, e, o);
		}
		return n;
	}
	function Bl(e) {
		return Dl(e) ? e : [e];
	}
	function He(e) {
		return e === void 0 ? [] : Bl(e);
	}
	function Vo(e, t, n, r) {
		return typeof e == "function" ? e({ context: t, event: n, self: r }) : e;
	}
	function Dl(e) {
		return Array.isArray(e);
	}
	function Cv(e) {
		return e.type.startsWith("xstate.error.actor");
	}
	function Dt(e) {
		return Bl(e).map((t) =>
			typeof t > "u" || typeof t == "string" ? { target: t } : t,
		);
	}
	function Fl(e) {
		if (!(e === void 0 || e === yv)) return He(e);
	}
	function Wo(e, t, n) {
		var i, s, a;
		const r = typeof e == "object",
			o = r ? e : void 0;
		return {
			next: (i = r ? e.next : e) == null ? void 0 : i.bind(o),
			error: (s = r ? e.error : t) == null ? void 0 : s.bind(o),
			complete: (a = r ? e.complete : n) == null ? void 0 : a.bind(o),
		};
	}
	function Zl(e, t) {
		return `${t}.${e}`;
	}
	function qo(e, t) {
		const n = t.match(/^xstate\.invoke\.(\d+)\.(.*)/);
		if (!n) return e.implementations.actors[t];
		const [, r, o] = n,
			s = e.getStateNodeById(o).config.invoke;
		return (Array.isArray(s) ? s[r] : s).src;
	}
	function Hl(e, t) {
		return `${e.sessionId}.${t}`;
	}
	let zv = 0;
	function Tv(e, t) {
		const n = new Map(),
			r = new Map(),
			o = new WeakMap(),
			i = new Set(),
			s = {},
			{ clock: a, logger: c } = t,
			l = {
				schedule: (p, f, m, y, b = Math.random().toString(36).slice(2)) => {
					const v = {
							source: p,
							target: f,
							event: m,
							delay: y,
							id: b,
							startedAt: Date.now(),
						},
						_ = Hl(p, b);
					u._snapshot._scheduledEvents[_] = v;
					const x = a.setTimeout(() => {
						delete s[_],
							delete u._snapshot._scheduledEvents[_],
							u._relay(p, f, m);
					}, y);
					s[_] = x;
				},
				cancel: (p, f) => {
					const m = Hl(p, f),
						y = s[m];
					delete s[m],
						delete u._snapshot._scheduledEvents[m],
						y !== void 0 && a.clearTimeout(y);
				},
				cancelAll: (p) => {
					for (const f in u._snapshot._scheduledEvents) {
						const m = u._snapshot._scheduledEvents[f];
						m.source === p && l.cancel(p, m.id);
					}
				},
			},
			d = (p) => {
				if (!i.size) return;
				const f = { ...p, rootId: e.sessionId };
				i.forEach((m) => {
					var y;
					return (y = m.next) == null ? void 0 : y.call(m, f);
				});
			},
			u = {
				_snapshot: {
					_scheduledEvents:
						((t == null ? void 0 : t.snapshot) && t.snapshot.scheduler) ?? {},
				},
				_bookId: () => `x:${zv++}`,
				_register: (p, f) => (n.set(p, f), p),
				_unregister: (p) => {
					n.delete(p.sessionId);
					const f = o.get(p);
					f !== void 0 && (r.delete(f), o.delete(p));
				},
				get: (p) => r.get(p),
				_set: (p, f) => {
					const m = r.get(p);
					if (m && m !== f)
						throw new Error(`Actor with system ID '${p}' already exists.`);
					r.set(p, f), o.set(f, p);
				},
				inspect: (p) => {
					const f = Wo(p);
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
				_relay: (p, f, m) => {
					u._sendInspectionEvent({
						type: "@xstate.event",
						sourceRef: p,
						actorRef: f,
						event: m,
					}),
						f._send(m);
				},
				scheduler: l,
				getSnapshot: () => ({
					_scheduledEvents: { ...u._snapshot._scheduledEvents },
				}),
				start: () => {
					const p = u._snapshot._scheduledEvents;
					u._snapshot._scheduledEvents = {};
					for (const f in p) {
						const { source: m, target: y, event: b, delay: v, id: _ } = p[f];
						l.schedule(m, y, b, v, _);
					}
				},
				_clock: a,
				_logger: c,
			};
		return u;
	}
	const Ko = 1;
	let pe = (function (e) {
		return (
			(e[(e.NotStarted = 0)] = "NotStarted"),
			(e[(e.Running = 1)] = "Running"),
			(e[(e.Stopped = 2)] = "Stopped"),
			e
		);
	})({});
	const Iv = {
		clock: {
			setTimeout: (e, t) => setTimeout(e, t),
			clearTimeout: (e) => clearTimeout(e),
		},
		logger: console.log.bind(console),
		devTools: !1,
	};
	class $v {
		constructor(t, n) {
			(this.logic = t),
				(this._snapshot = void 0),
				(this.clock = void 0),
				(this.options = void 0),
				(this.id = void 0),
				(this.mailbox = new Rl(this._process.bind(this))),
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
			const r = { ...Iv, ...n },
				{
					clock: o,
					logger: i,
					parent: s,
					syncSnapshot: a,
					id: c,
					systemId: l,
					inspect: d,
				} = r;
			(this.system = s ? s.system : Tv(this, { clock: o, logger: i })),
				d && !s && this.system.inspect(Wo(d)),
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
						const m = [...(p ? p.values() : []), ...(f ? f.values() : [])];
						for (const y of m)
							try {
								y(u);
							} catch (b) {
								Ae(b);
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
							Ae(a);
						}
					break;
				case "done":
					for (const s of this.observers)
						try {
							(i = s.next) == null || i.call(s, t);
						} catch (a) {
							Ae(a);
						}
					this._stopProcedure(),
						this._complete(),
						(this._doneEvent = kv(this.id, this._snapshot.output)),
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
			const o = Wo(t, n, r);
			if (this._processingStatus !== pe.Stopped) this.observers.add(o);
			else
				switch (this._snapshot.status) {
					case "done":
						try {
							(i = o.complete) == null || i.call(o);
						} catch (s) {
							Ae(s);
						}
						break;
					case "error": {
						const s = this._snapshot.error;
						if (!o.error) Ae(s);
						else
							try {
								o.error(s);
							} catch (a) {
								Ae(a);
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
			const t = Al(this.options.input);
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
				t.type === Sr && (this._stopProcedure(), this._complete());
		}
		_stop() {
			return this._processingStatus === pe.Stopped
				? this
				: (this.mailbox.clear(),
					this._processingStatus === pe.NotStarted
						? ((this._processingStatus = pe.Stopped), this)
						: (this.mailbox.enqueue({ type: Sr }), this));
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
					Ae(r);
				}
			this.observers.clear();
		}
		_reportError(t) {
			if (!this.observers.size) {
				this._parent || Ae(t);
				return;
			}
			let n = !1;
			for (const r of this.observers) {
				const o = r.error;
				n || (n = !o);
				try {
					o == null || o(t);
				} catch (i) {
					Ae(i);
				}
			}
			this.observers.clear(), n && Ae(t);
		}
		_error(t) {
			this._stopProcedure(),
				this._reportError(t),
				this._parent && this.system._relay(this, this._parent, Ll(this.id, t));
		}
		_stopProcedure() {
			return this._processingStatus !== pe.Running
				? this
				: (this.system.scheduler.cancelAll(this),
					this.mailbox.clear(),
					(this.mailbox = new Rl(this._process.bind(this))),
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
			t && (typeof t == "function" ? t : gv)(this);
		}
		toJSON() {
			return { xstate$$type: Ko, id: this.id };
		}
		getPersistedSnapshot(t) {
			return this.logic.getPersistedSnapshot(this._snapshot, t);
		}
		[Sv]() {
			return this;
		}
		getSnapshot() {
			return this._snapshot;
		}
	}
	function Ft(e, ...[t]) {
		return new $v(e, t);
	}
	function Rv(e, t, n, r, { sendId: o }) {
		const i = typeof o == "function" ? o(n, r) : o;
		return [t, { sendId: i }, void 0];
	}
	function Ev(e, t) {
		e.defer(() => {
			e.system.scheduler.cancel(e.self, t.sendId);
		});
	}
	function Mv(e) {
		function t(n, r) {}
		return (
			(t.type = "xstate.cancel"),
			(t.sendId = e),
			(t.resolve = Rv),
			(t.execute = Ev),
			t
		);
	}
	function Pv(
		e,
		t,
		n,
		r,
		{ id: o, systemId: i, src: s, input: a, syncSnapshot: c },
	) {
		const l = typeof s == "string" ? qo(t.machine, s) : s,
			d = typeof o == "function" ? o(n) : o;
		let u, p;
		return (
			l &&
				((p =
					typeof a == "function"
						? a({ context: t.context, event: n.event, self: e.self })
						: a),
				(u = Ft(l, {
					id: d,
					src: s,
					parent: e.self,
					syncSnapshot: c,
					systemId: i,
					input: p,
				}))),
			[
				mt(t, { children: { ...t.children, [d]: u } }),
				{ id: o, systemId: i, actorRef: u, src: s, input: p },
				void 0,
			]
		);
	}
	function Lv(e, { actorRef: t }) {
		t &&
			e.defer(() => {
				t._processingStatus !== pe.Stopped && t.start();
			});
	}
	function Av(
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
			(i.resolve = Pv),
			(i.execute = Lv),
			i
		);
	}
	function Ov(e, t, n, r, { actorRef: o }) {
		const i = typeof o == "function" ? o(n, r) : o,
			s = typeof i == "string" ? t.children[i] : i;
		let a = t.children;
		return (
			s && ((a = { ...a }), delete a[s.id]), [mt(t, { children: a }), s, void 0]
		);
	}
	function Nv(e, t) {
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
	function pt(e) {
		function t(n, r) {}
		return (
			(t.type = "xstate.stopChild"),
			(t.actorRef = e),
			(t.resolve = Ov),
			(t.execute = Nv),
			t
		);
	}
	function jv(e, { context: t, event: n }, { guards: r }) {
		return !Sn(r[0], t, n, e);
	}
	function Bv(e) {
		function t(n, r) {
			return !1;
		}
		return (t.check = jv), (t.guards = [e]), t;
	}
	function Dv(e, { context: t, event: n }, { guards: r }) {
		return r.every((o) => Sn(o, t, n, e));
	}
	function Jo(e) {
		function t(n, r) {
			return !1;
		}
		return (t.check = Dv), (t.guards = e), t;
	}
	function Sn(e, t, n, r) {
		const { machine: o } = r,
			i = typeof e == "function",
			s = i ? e : o.implementations.guards[typeof e == "string" ? e : e.type];
		if (!i && !s)
			throw new Error(
				`Guard '${typeof e == "string" ? e : e.type}' is not implemented.'.`,
			);
		if (typeof s != "function") return Sn(s, t, n, r);
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
	const Go = (e) => e.type === "atomic" || e.type === "final";
	function Zt(e) {
		return Object.values(e.states).filter((t) => t.type !== "history");
	}
	function xn(e, t) {
		const n = [];
		if (t === e) return n;
		let r = e.parent;
		for (; r && r !== t; ) n.push(r), (r = r.parent);
		return n;
	}
	function xr(e) {
		const t = new Set(e),
			n = Vl(t);
		for (const r of t)
			if (r.type === "compound" && (!n.get(r) || !n.get(r).length))
				Kl(r).forEach((o) => t.add(o));
			else if (r.type === "parallel") {
				for (const o of Zt(r))
					if (o.type !== "history" && !t.has(o)) {
						const i = Kl(o);
						for (const s of i) t.add(s);
					}
			}
		for (const r of t) {
			let o = r.parent;
			for (; o; ) t.add(o), (o = o.parent);
		}
		return t;
	}
	function Ul(e, t) {
		const n = t.get(e);
		if (!n) return {};
		if (e.type === "compound") {
			const o = n[0];
			if (o) {
				if (Go(o)) return o.key;
			} else return {};
		}
		const r = {};
		for (const o of n) r[o.key] = Ul(o, t);
		return r;
	}
	function Vl(e) {
		const t = new Map();
		for (const n of e)
			t.has(n) || t.set(n, []),
				n.parent &&
					(t.has(n.parent) || t.set(n.parent, []), t.get(n.parent).push(n));
		return t;
	}
	function Wl(e, t) {
		const n = xr(t);
		return Ul(e, Vl(n));
	}
	function Yo(e, t) {
		return t.type === "compound"
			? Zt(t).some((n) => n.type === "final" && e.has(n))
			: t.type === "parallel"
				? Zt(t).every((n) => Yo(e, n))
				: t.type === "final";
	}
	const Cr = (e) => e[0] === vv;
	function Fv(e, t) {
		return (
			e.transitions.get(t) ||
			[...e.transitions.keys()]
				.filter((r) => {
					if (r === bv) return !0;
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
	function Zv(e) {
		const t = e.config.after;
		if (!t) return [];
		const n = (o) => {
			const i = _v(o, e.id),
				s = i.type;
			return e.entry.push(gb(i, { id: s, delay: o })), e.exit.push(Mv(s)), s;
		};
		return Object.keys(t)
			.flatMap((o) => {
				const i = t[o],
					s = typeof i == "string" ? { target: i } : i,
					a = Number.isNaN(+o) ? o : +o,
					c = n(a);
				return He(s).map((l) => ({ ...l, event: c, delay: a }));
			})
			.map((o) => {
				const { delay: i } = o;
				return { ...ft(e, o.event, o), delay: i };
			});
	}
	function ft(e, t, n) {
		const r = Fl(n.target),
			o = n.reenter ?? !1,
			i = Vv(e, r),
			s = {
				...n,
				actions: He(n.actions),
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
	function Hv(e) {
		const t = new Map();
		if (e.config.on)
			for (const n of Object.keys(e.config.on)) {
				if (n === Ml)
					throw new Error(
						'Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.',
					);
				const r = e.config.on[n];
				t.set(
					n,
					Dt(r).map((o) => ft(e, n, o)),
				);
			}
		if (e.config.onDone) {
			const n = `xstate.done.state.${e.id}`;
			t.set(
				n,
				Dt(e.config.onDone).map((r) => ft(e, n, r)),
			);
		}
		for (const n of e.invoke) {
			if (n.onDone) {
				const r = `xstate.done.actor.${n.id}`;
				t.set(
					r,
					Dt(n.onDone).map((o) => ft(e, r, o)),
				);
			}
			if (n.onError) {
				const r = `xstate.error.actor.${n.id}`;
				t.set(
					r,
					Dt(n.onError).map((o) => ft(e, r, o)),
				);
			}
			if (n.onSnapshot) {
				const r = `xstate.snapshot.${n.id}`;
				t.set(
					r,
					Dt(n.onSnapshot).map((o) => ft(e, r, o)),
				);
			}
		}
		for (const n of e.after) {
			let r = t.get(n.eventType);
			r || ((r = []), t.set(n.eventType, r)), r.push(n);
		}
		return t;
	}
	function Uv(e, t) {
		const n =
			typeof t == "string" ? e.states[t] : t ? e.states[t.target] : void 0;
		if (!n && t)
			throw new Error(
				`Initial state node "${t}" not found on parent state node #${e.id}`,
			);
		const r = {
			source: e,
			actions: !t || typeof t == "string" ? [] : He(t.actions),
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
	function Vv(e, t) {
		if (t !== void 0)
			return t.map((n) => {
				if (typeof n != "string") return n;
				if (Cr(n)) return e.machine.getStateNodeById(n);
				const r = n[0] === El;
				if (r && !e.parent) return zr(e, n.slice(1));
				const o = r ? e.key + n : n;
				if (e.parent)
					try {
						return zr(e.parent, o);
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
	function ql(e) {
		const t = Fl(e.config.target);
		return t
			? { target: t.map((n) => (typeof n == "string" ? zr(e.parent, n) : n)) }
			: e.parent.initial;
	}
	function ht(e) {
		return e.type === "history";
	}
	function Kl(e) {
		const t = Jl(e);
		for (const n of t) for (const r of xn(n, e)) t.add(r);
		return t;
	}
	function Jl(e) {
		const t = new Set();
		function n(r) {
			if (!t.has(r)) {
				if ((t.add(r), r.type === "compound")) n(r.initial.target[0]);
				else if (r.type === "parallel") for (const o of Zt(r)) n(o);
			}
		}
		return n(e), t;
	}
	function Ht(e, t) {
		if (Cr(t)) return e.machine.getStateNodeById(t);
		if (!e.states)
			throw new Error(
				`Unable to retrieve child state '${t}' from '${e.id}'; no child states exist.`,
			);
		const n = e.states[t];
		if (!n) throw new Error(`Child state '${t}' does not exist on '${e.id}'`);
		return n;
	}
	function zr(e, t) {
		if (typeof t == "string" && Cr(t))
			try {
				return e.machine.getStateNodeById(t);
			} catch {}
		const n = Uo(t).slice();
		let r = e;
		for (; n.length; ) {
			const o = n.shift();
			if (!o.length) break;
			r = Ht(r, o);
		}
		return r;
	}
	function Tr(e, t) {
		if (typeof t == "string") {
			const o = e.states[t];
			if (!o) throw new Error(`State '${t}' does not exist on '${e.id}'`);
			return [e, o];
		}
		const n = Object.keys(t),
			r = n.map((o) => Ht(e, o)).filter(Boolean);
		return [e.machine.root, e].concat(
			r,
			n.reduce((o, i) => {
				const s = Ht(e, i);
				if (!s) return o;
				const a = Tr(s, t[i]);
				return o.concat(a);
			}, []),
		);
	}
	function Wv(e, t, n, r) {
		const i = Ht(e, t).next(n, r);
		return !i || !i.length ? e.next(n, r) : i;
	}
	function qv(e, t, n, r) {
		const o = Object.keys(t),
			i = Ht(e, o[0]),
			s = Xo(i, t[o[0]], n, r);
		return !s || !s.length ? e.next(n, r) : s;
	}
	function Kv(e, t, n, r) {
		const o = [];
		for (const i of Object.keys(t)) {
			const s = t[i];
			if (!s) continue;
			const a = Ht(e, i),
				c = Xo(a, s, n, r);
			c && o.push(...c);
		}
		return o.length ? o : e.next(n, r);
	}
	function Xo(e, t, n, r) {
		return typeof t == "string"
			? Wv(e, t, n, r)
			: Object.keys(t).length === 1
				? qv(e, t, n, r)
				: Kv(e, t, n, r);
	}
	function Jv(e) {
		return Object.keys(e.states)
			.map((t) => e.states[t])
			.filter((t) => t.type === "history");
	}
	function ot(e, t) {
		let n = e;
		for (; n.parent && n.parent !== t; ) n = n.parent;
		return n.parent === t;
	}
	function Gv(e, t) {
		const n = new Set(e),
			r = new Set(t);
		for (const o of n) if (r.has(o)) return !0;
		for (const o of r) if (n.has(o)) return !0;
		return !1;
	}
	function Gl(e, t, n) {
		const r = new Set();
		for (const o of e) {
			let i = !1;
			const s = new Set();
			for (const a of r)
				if (Gv(ei([o], t, n), ei([a], t, n)))
					if (ot(o.source, a.source)) s.add(a);
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
	function Yv(e) {
		const [t, ...n] = e;
		for (const r of xn(t, void 0)) if (n.every((o) => ot(o, r))) return r;
	}
	function Qo(e, t) {
		if (!e.target) return [];
		const n = new Set();
		for (const r of e.target)
			if (ht(r))
				if (t[r.id]) for (const o of t[r.id]) n.add(o);
				else for (const o of Qo(ql(r), t)) n.add(o);
			else n.add(r);
		return [...n];
	}
	function Yl(e, t) {
		const n = Qo(e, t);
		if (!n) return;
		if (!e.reenter && n.every((o) => o === e.source || ot(o, e.source)))
			return e.source;
		const r = Yv(n.concat(e.source));
		if (r) return r;
		if (!e.reenter) return e.source.machine.root;
	}
	function ei(e, t, n) {
		var o;
		const r = new Set();
		for (const i of e)
			if ((o = i.target) != null && o.length) {
				const s = Yl(i, n);
				i.reenter && i.source === s && r.add(s);
				for (const a of t) ot(a, s) && r.add(a);
			}
		return [...r];
	}
	function Xv(e, t) {
		if (e.length !== t.size) return !1;
		for (const n of e) if (!t.has(n)) return !1;
		return !0;
	}
	function ti(e, t, n, r, o, i) {
		if (!e.length) return t;
		const s = new Set(t._nodes);
		let a = t.historyValue;
		const c = Gl(e, s, a);
		let l = t;
		o || ([l, a] = nb(l, r, n, c, s, a, i)),
			(l = Vt(
				l,
				r,
				n,
				c.flatMap((u) => u.actions),
				i,
				void 0,
			)),
			(l = eb(l, r, n, c, s, i, a, o));
		const d = [...s];
		l.status === "done" &&
			(l = Vt(
				l,
				r,
				n,
				d.sort((u, p) => p.order - u.order).flatMap((u) => u.exit),
				i,
				void 0,
			));
		try {
			return a === t.historyValue && Xv(t._nodes, s)
				? l
				: mt(l, { _nodes: d, historyValue: a });
		} catch (u) {
			throw u;
		}
	}
	function Qv(e, t, n, r, o) {
		if (r.output === void 0) return;
		const i = Ho(
			o.id,
			o.output !== void 0 && o.parent
				? Vo(o.output, e.context, t, n.self)
				: void 0,
		);
		return Vo(r.output, e.context, i, n.self);
	}
	function eb(e, t, n, r, o, i, s, a) {
		let c = e;
		const l = new Set(),
			d = new Set();
		tb(r, s, d, l), a && d.add(e.machine.root);
		const u = new Set();
		for (const p of [...l].sort((f, m) => f.order - m.order)) {
			o.add(p);
			const f = [];
			f.push(...p.entry);
			for (const m of p.invoke)
				f.push(Av(m.src, { ...m, syncSnapshot: !!m.onSnapshot }));
			if (d.has(p)) {
				const m = p.initial.actions;
				f.push(...m);
			}
			if (
				((c = Vt(
					c,
					t,
					n,
					f,
					i,
					p.invoke.map((m) => m.id),
				)),
				p.type === "final")
			) {
				const m = p.parent;
				let y =
						(m == null ? void 0 : m.type) === "parallel"
							? m
							: m == null
								? void 0
								: m.parent,
					b = y || p;
				for (
					(m == null ? void 0 : m.type) === "compound" &&
					i.push(
						Ho(
							m.id,
							p.output !== void 0 ? Vo(p.output, c.context, t, n.self) : void 0,
						),
					);
					(y == null ? void 0 : y.type) === "parallel" && !u.has(y) && Yo(o, y);
				)
					u.add(y), i.push(Ho(y.id)), (b = y), (y = y.parent);
				if (y) continue;
				c = mt(c, { status: "done", output: Qv(c, t, n, c.machine.root, b) });
			}
		}
		return c;
	}
	function tb(e, t, n, r) {
		for (const o of e) {
			const i = Yl(o, t);
			for (const a of o.target || [])
				!ht(a) &&
					(o.source !== a || o.source !== i || o.reenter) &&
					(r.add(a), n.add(a)),
					Ut(a, t, n, r);
			const s = Qo(o, t);
			for (const a of s) {
				const c = xn(a, i);
				(i == null ? void 0 : i.type) === "parallel" && c.push(i),
					Xl(r, t, n, c, !o.source.parent && o.reenter ? void 0 : i);
			}
		}
	}
	function Ut(e, t, n, r) {
		var o;
		if (ht(e))
			if (t[e.id]) {
				const i = t[e.id];
				for (const s of i) r.add(s), Ut(s, t, n, r);
				for (const s of i) ni(s, e.parent, r, t, n);
			} else {
				const i = ql(e);
				for (const s of i.target)
					r.add(s),
						i === ((o = e.parent) == null ? void 0 : o.initial) &&
							n.add(e.parent),
						Ut(s, t, n, r);
				for (const s of i.target) ni(s, e.parent, r, t, n);
			}
		else if (e.type === "compound") {
			const [i] = e.initial.target;
			ht(i) || (r.add(i), n.add(i)), Ut(i, t, n, r), ni(i, e, r, t, n);
		} else if (e.type === "parallel")
			for (const i of Zt(e).filter((s) => !ht(s)))
				[...r].some((s) => ot(s, i)) ||
					(ht(i) || (r.add(i), n.add(i)), Ut(i, t, n, r));
	}
	function Xl(e, t, n, r, o) {
		for (const i of r)
			if (((!o || ot(i, o)) && e.add(i), i.type === "parallel"))
				for (const s of Zt(i).filter((a) => !ht(a)))
					[...e].some((a) => ot(a, s)) || (e.add(s), Ut(s, t, n, e));
	}
	function ni(e, t, n, r, o) {
		Xl(n, r, o, xn(e, t));
	}
	function nb(e, t, n, r, o, i, s, a) {
		let c = e;
		const l = ei(r, o, i);
		l.sort((u, p) => p.order - u.order);
		let d;
		for (const u of l)
			for (const p of Jv(u)) {
				let f;
				p.history === "deep"
					? (f = (m) => Go(m) && ot(m, u))
					: (f = (m) => m.parent === u),
					d ?? (d = { ...i }),
					(d[p.id] = Array.from(o).filter(f));
			}
		for (const u of l)
			(c = Vt(
				c,
				t,
				n,
				[...u.exit, ...u.invoke.map((p) => pt(p.id))],
				s,
				void 0,
			)),
				o.delete(u);
		return [c, d || i];
	}
	function rb(e, t) {
		return e.implementations.actions[t];
	}
	function Ql(e, t, n, r, o, i) {
		const { machine: s } = e;
		let a = e;
		for (const c of r) {
			const l = typeof c == "function",
				d = l ? c : rb(s, typeof c == "string" ? c : c.type),
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
				[m, y, b] = f.resolve(n, a, u, p, d, o);
			(a = m),
				"retryResolve" in f && (i == null || i.push([f, y])),
				"execute" in f &&
					n.actionExecutor({
						type: f.type,
						info: u,
						params: y,
						exec: f.execute.bind(null, n, y),
					}),
				b && (a = Ql(a, t, n, b, o, i));
		}
		return a;
	}
	function Vt(e, t, n, r, o, i) {
		const s = i ? [] : void 0,
			a = Ql(e, t, n, r, { internalQueue: o, deferredActorIds: i }, s);
		return (
			s == null ||
				s.forEach(([c, l]) => {
					c.retryResolve(n, a, l);
				}),
			a
		);
	}
	function ri(e, t, n, r) {
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
		if (t.type === Sr)
			return (
				(o = mt(ec(o, t, n), { status: "stopped" })),
				s(o, t, []),
				{ snapshot: o, microstates: i }
			);
		let a = t;
		if (a.type !== Pl) {
			const l = a,
				d = Cv(l),
				u = tc(l, o);
			if (d && !u.length)
				return (
					(o = mt(e, { status: "error", error: l.error })),
					s(o, l, []),
					{ snapshot: o, microstates: i }
				);
			(o = ti(u, e, n, a, !1, r)), s(o, l, u);
		}
		let c = !0;
		for (; o.status === "active"; ) {
			let l = c ? ob(o, a) : [];
			const d = l.length ? o : void 0;
			if (!l.length) {
				if (!r.length) break;
				(a = r.shift()), (l = tc(a, o));
			}
			(o = ti(l, o, n, a, !1, r)), (c = o !== d), s(o, a, l);
		}
		return (
			o.status !== "active" && ec(o, a, n), { snapshot: o, microstates: i }
		);
	}
	function ec(e, t, n) {
		return Vt(
			e,
			t,
			n,
			Object.values(e.children).map((r) => pt(r)),
			[],
			void 0,
		);
	}
	function tc(e, t) {
		return t.machine.getTransitionData(t, e);
	}
	function ob(e, t) {
		const n = new Set(),
			r = e._nodes.filter(Go);
		for (const o of r)
			e: for (const i of [o].concat(xn(o, void 0)))
				if (i.always) {
					for (const s of i.always)
						if (s.guard === void 0 || Sn(s.guard, e.context, t, e)) {
							n.add(s);
							break e;
						}
				}
		return Gl(Array.from(n), new Set(e._nodes), e.historyValue);
	}
	function ib(e, t) {
		const n = xr(Tr(e, t));
		return Wl(e, [...n]);
	}
	function sb(e) {
		return !!e && typeof e == "object" && "machine" in e && "value" in e;
	}
	const ab = function (t) {
			return Ol(t, this.value);
		},
		lb = function (t) {
			return this.tags.has(t);
		},
		cb = function (t) {
			const n = this.machine.getTransitionData(this, t);
			return (
				!!(n != null && n.length) &&
				n.some((r) => r.target !== void 0 || r.actions.length)
			);
		},
		ub = function () {
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
		db = function () {
			return this._nodes.reduce(
				(t, n) => (n.meta !== void 0 && (t[n.id] = n.meta), t),
				{},
			);
		};
	function Ir(e, t) {
		return {
			status: e.status,
			output: e.output,
			error: e.error,
			machine: t,
			context: e.context,
			_nodes: e._nodes,
			value: Wl(t.root, e._nodes),
			tags: new Set(e._nodes.flatMap((n) => n.tags)),
			children: e.children,
			historyValue: e.historyValue || {},
			matches: ab,
			hasTag: lb,
			can: cb,
			getMeta: db,
			toJSON: ub,
		};
	}
	function mt(e, t = {}) {
		return Ir({ ...e, ...t }, e.machine);
	}
	function pb(e) {
		if (typeof e != "object" || e === null) return {};
		const t = {};
		for (const n in e) {
			const r = e[n];
			Array.isArray(r) && (t[n] = r.map((o) => ({ id: o.id })));
		}
		return t;
	}
	function fb(e, t) {
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
			context: nc(s),
			children: f,
			historyValue: pb(p.historyValue),
		};
	}
	function nc(e) {
		let t;
		for (const n in e) {
			const r = e[n];
			if (r && typeof r == "object")
				if ("sessionId" in r && "send" in r && "ref" in r)
					t ?? (t = Array.isArray(e) ? e.slice() : { ...e }),
						(t[n] = { xstate$$type: Ko, id: r.id });
				else {
					const o = nc(r);
					o !== r &&
						(t ?? (t = Array.isArray(e) ? e.slice() : { ...e }), (t[n] = o));
				}
		}
		return t ?? e;
	}
	function hb(e, t, n, r, { event: o, id: i, delay: s }, { internalQueue: a }) {
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
	function mb(e, t) {
		const { event: n, delay: r, id: o } = t;
		if (typeof r == "number") {
			e.defer(() => {
				const i = e.self;
				e.system.scheduler.schedule(i, i, n, r, o);
			});
			return;
		}
	}
	function gb(e, t) {
		function n(r, o) {}
		return (
			(n.type = "xstate.raise"),
			(n.event = e),
			(n.id = t == null ? void 0 : t.id),
			(n.delay = t == null ? void 0 : t.delay),
			(n.resolve = hb),
			(n.execute = mb),
			n
		);
	}
	const rc = "xstate.promise.resolve",
		oc = "xstate.promise.reject",
		$r = new WeakMap();
	function ze(e) {
		return {
			config: e,
			transition: (n, r, o) => {
				var i;
				if (n.status !== "active") return n;
				switch (r.type) {
					case rc: {
						const s = r.data;
						return { ...n, status: "done", output: s, input: void 0 };
					}
					case oc:
						return { ...n, status: "error", error: r.data, input: void 0 };
					case Sr:
						return (
							(i = $r.get(o.self)) == null || i.abort(),
							{ ...n, status: "stopped", input: void 0 }
						);
					default:
						return n;
				}
			},
			start: (n, { self: r, system: o, emit: i }) => {
				if (n.status !== "active") return;
				const s = new AbortController();
				$r.set(r, s),
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
								($r.delete(r), o._relay(r, r, { type: rc, data: c }));
						},
						(c) => {
							r.getSnapshot().status === "active" &&
								($r.delete(r), o._relay(r, r, { type: oc, data: c }));
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
	function yb(e, { machine: t, context: n }, r, o) {
		const i = (s, a) => {
			if (typeof s == "string") {
				const c = qo(t, s);
				if (!c)
					throw new Error(
						`Actor logic '${s}' not implemented in machine '${t.id}'`,
					);
				const l = Ft(c, {
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
				return Ft(s, {
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
	function vb(e, t, n, r, { assignment: o }) {
		if (!t.context)
			throw new Error(
				"Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.",
			);
		const i = {},
			s = {
				context: t.context,
				event: n.event,
				spawn: yb(e, t, n.event, i),
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
			mt(t, {
				context: c,
				children: Object.keys(i).length ? { ...t.children, ...i } : t.children,
			}),
			void 0,
			void 0,
		];
	}
	function z(e) {
		function t(n, r) {}
		return (t.type = "xstate.assign"), (t.assignment = e), (t.resolve = vb), t;
	}
	const ic = new WeakMap();
	function Wt(e, t, n) {
		let r = ic.get(e);
		return (
			r ? t in r || (r[t] = n()) : ((r = { [t]: n() }), ic.set(e, r)), r[t]
		);
	}
	const bb = {},
		Cn = (e) =>
			typeof e == "string"
				? { type: e }
				: typeof e == "function"
					? "resolve" in e
						? { type: e.type }
						: { type: e.name }
					: e;
	class Rr {
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
				(this.id = this.config.id || [this.machine.id, ...this.path].join(El)),
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
					? jl(
							this.config.states,
							(r, o) =>
								new Rr(r, { _parent: this, _key: o, _machine: this.machine }),
						)
					: bb),
				this.type === "compound" && !this.config.initial)
			)
				throw new Error(
					`No initial state specified for compound state node "#${this.id}". Try adding { initial: "${Object.keys(this.states)[0]}" } to the state config.`,
				);
			(this.history =
				this.config.history === !0 ? "shallow" : this.config.history || !1),
				(this.entry = He(this.config.entry).slice()),
				(this.exit = He(this.config.exit).slice()),
				(this.meta = this.config.meta),
				(this.output =
					this.type === "final" || !this.parent ? this.config.output : void 0),
				(this.tags = He(t.tags).slice());
		}
		_initialize() {
			(this.transitions = Hv(this)),
				this.config.always &&
					(this.always = Dt(this.config.always).map((t) => ft(this, Ml, t))),
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
							actions: this.initial.actions.map(Cn),
							eventType: null,
							reenter: !1,
							toJSON: () => ({
								target: this.initial.target.map((t) => `#${t.id}`),
								source: `#${this.id}`,
								actions: this.initial.actions.map(Cn),
								eventType: null,
							}),
						}
					: void 0,
				history: this.history,
				states: jl(this.states, (t) => t.definition),
				on: this.on,
				transitions: [...this.transitions.values()]
					.flat()
					.map((t) => ({ ...t, actions: t.actions.map(Cn) })),
				entry: this.entry.map(Cn),
				exit: this.exit.map(Cn),
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
			return Wt(this, "invoke", () =>
				He(this.config.invoke).map((t, n) => {
					const { src: r, systemId: o } = t,
						i = t.id ?? Zl(this.id, n),
						s = typeof r == "string" ? r : `xstate.invoke.${Zl(this.id, n)}`;
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
			return Wt(this, "on", () =>
				[...this.transitions]
					.flatMap(([n, r]) => r.map((o) => [n, o]))
					.reduce((n, [r, o]) => ((n[r] = n[r] || []), n[r].push(o), n), {}),
			);
		}
		get after() {
			return Wt(this, "delayedTransitions", () => Zv(this));
		}
		get initial() {
			return Wt(this, "initial", () => Uv(this, this.config.initial));
		}
		next(t, n) {
			const r = n.type;
			let o;
			const i = Wt(this, `candidates-${r}`, () => Fv(this, r));
			for (const s of i) {
				const { guard: a } = s,
					c = t.context;
				let l = !1;
				try {
					l = !a || Sn(a, c, n, t);
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
			return Wt(this, "events", () => {
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
	const wb = "#";
	class oi {
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
				(this.root = new Rr(t, { _key: this.id, _machine: this })),
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
			return new oi(this.config, {
				actions: { ...n, ...t.actions },
				guards: { ...r, ...t.guards },
				actors: { ...o, ...t.actors },
				delays: { ...i, ...t.delays },
			});
		}
		resolveState(t) {
			const n = ib(this.root, t.value),
				r = xr(Tr(this.root, n));
			return Ir(
				{
					_nodes: [...r],
					context: t.context || {},
					children: {},
					status: Yo(r, this.root) ? "done" : t.status || "active",
					output: t.output,
					error: t.error,
					historyValue: t.historyValue,
				},
				this,
			);
		}
		transition(t, n, r) {
			return ri(t, n, r, []).snapshot;
		}
		microstep(t, n, r) {
			return ri(t, n, r, []).microstates;
		}
		getTransitionData(t, n) {
			return Xo(this.root, t.value, t, n) || [];
		}
		getPreInitialState(t, n, r) {
			const { context: o } = this.config,
				i = Ir(
					{
						context: typeof o != "function" && o ? o : {},
						_nodes: [this.root],
						children: {},
						status: "active",
					},
					this,
				);
			return typeof o == "function"
				? Vt(
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
			const r = Al(n),
				o = [],
				i = this.getPreInitialState(t, r, o),
				s = ti(
					[
						{
							target: [...Jl(this.root)],
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
				{ snapshot: a } = ri(s, r, t, o);
			return a;
		}
		start(t) {
			Object.values(t.children).forEach((n) => {
				n.getSnapshot().status === "active" && n.start();
			});
		}
		getStateNodeById(t) {
			const n = Uo(t),
				r = n.slice(1),
				o = Cr(n[0]) ? n[0].slice(wb.length) : n[0],
				i = this.idMap.get(o);
			if (!i)
				throw new Error(
					`Child state node '#${o}' does not exist on machine '${this.id}'`,
				);
			return zr(i, r);
		}
		get definition() {
			return this.root.definition;
		}
		toJSON() {
			return this.definition;
		}
		getPersistedSnapshot(t, n) {
			return fb(t, n);
		}
		restoreSnapshot(t, n) {
			const r = {},
				o = t.children;
			Object.keys(o).forEach((u) => {
				const p = o[u],
					f = p.snapshot,
					m = p.src,
					y = typeof m == "string" ? qo(this, m) : m;
				if (!y) return;
				const b = Ft(y, {
					id: u,
					parent: n.self,
					syncSnapshot: p.syncSnapshot,
					snapshot: f,
					src: m,
					systemId: p.systemId,
				});
				r[u] = b;
			});
			function i(u, p) {
				if (p instanceof Rr) return p;
				try {
					return u.machine.getStateNodeById(p.id);
				} catch {}
			}
			function s(u, p) {
				if (!p || typeof p != "object") return {};
				const f = {};
				for (const m in p) {
					const y = p[m];
					for (const b of y) {
						const v = i(u, b);
						v && (f[m] ?? (f[m] = []), f[m].push(v));
					}
				}
				return f;
			}
			const a = s(this.root, t.historyValue),
				c = Ir(
					{
						...t,
						children: r,
						_nodes: Array.from(xr(Tr(this.root, t.value))),
						historyValue: a,
					},
					this,
				),
				l = new Set();
			function d(u, p) {
				if (!l.has(u)) {
					l.add(u);
					for (const f in u) {
						const m = u[f];
						if (m && typeof m == "object") {
							if ("xstate$$type" in m && m.xstate$$type === Ko) {
								u[f] = p[m.id];
								continue;
							}
							d(m, p);
						}
					}
				}
			}
			return d(c.context, r), c;
		}
	}
	function _b(e, t, n, r, { event: o }) {
		const i = typeof o == "function" ? o(n, r) : o;
		return [t, { event: i }, void 0];
	}
	function kb(e, { event: t }) {
		e.defer(() => e.emit(t));
	}
	function me(e) {
		function t(n, r) {}
		return (
			(t.type = "xstate.emit"),
			(t.event = e),
			(t.resolve = _b),
			(t.execute = kb),
			t
		);
	}
	let ii = (function (e) {
		return (e.Parent = "#_parent"), (e.Internal = "#_internal"), e;
	})({});
	function Sb(e, t, n, r, { to: o, event: i, id: s, delay: a }, c) {
		var m;
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
				(p === ii.Parent
					? (f = e.self._parent)
					: p === ii.Internal
						? (f = e.self)
						: p.startsWith("#_")
							? (f = t.children[p.slice(2)])
							: (f =
									(m = c.deferredActorIds) != null && m.includes(p)
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
	function xb(e, t, n) {
		typeof n.to == "string" && (n.to = t.children[n.to]);
	}
	function Cb(e, t) {
		e.defer(() => {
			const { to: n, event: r, delay: o, id: i } = t;
			if (typeof o == "number") {
				e.system.scheduler.schedule(e.self, n, r, o, i);
				return;
			}
			e.system._relay(e.self, n, r.type === wv ? Ll(e.self.id, r.data) : r);
		});
	}
	function sc(e, t, n) {
		function r(o, i) {}
		return (
			(r.type = "xstate.sendTo"),
			(r.to = e),
			(r.event = t),
			(r.id = n == null ? void 0 : n.id),
			(r.delay = n == null ? void 0 : n.delay),
			(r.resolve = Sb),
			(r.retryResolve = xb),
			(r.execute = Cb),
			r
		);
	}
	function zb(e, t) {
		return sc(ii.Parent, e, t);
	}
	function zn(e, t) {
		const n = He(t);
		if (!n.includes(e.type)) {
			const r =
				n.length === 1 ? `type "${n[0]}"` : `one of types "${n.join('", "')}"`;
			throw new Error(`Expected event ${JSON.stringify(e)} to have ${r}`);
		}
	}
	function Tb(e, t) {
		return new oi(e, t);
	}
	function Tn({ schemas: e, actors: t, actions: n, guards: r, delays: o }) {
		return {
			createStateConfig: (i) => i,
			createMachine: (i) =>
				Tb(
					{ ...i, schemas: e },
					{ actors: t, actions: n, guards: r, delays: o },
				),
		};
	}
	async function qt(e, t = {}) {
		const n = (t == null ? void 0 : t.apiHost) ?? "https://ingest.skyra.no";
		return fetch(`${n}/response`, {
			method: "POST",
			body: JSON.stringify(e),
			headers: { "Content-Type": "application/json" },
		});
	}
	function Ib(e, t = {}) {
		const n = (t == null ? void 0 : t.apiHost) ?? "https://ingest.skyra.no";
		fetch(`${n}/diagnostics`, {
			method: "POST",
			body: JSON.stringify(e),
			headers: { "Content-Type": "application/json" },
			keepalive: !0,
		}).catch(() => {});
	}
	function $b(e, t) {
		const n = Au(e, t);
		return n || (e && zs(e) === "nn" && t.includes("no") ? "no" : null);
	}
	function Er(e) {
		const t = [
			e.explicitLanguage,
			e.savedLanguage,
			e.htmlLang,
			e.browserLanguage,
		];
		for (const n of t) {
			const r = $b(n, e.enabledLanguages);
			if (r) return r;
		}
		return e.surveyDefault;
	}
	function ac(e) {
		var r, o;
		const t = (r = e.language) == null ? void 0 : r.code,
			n = ((o = e.languages) == null ? void 0 : o.map((i) => i.code)) || [];
		return t ? [t, ...n] : n;
	}
	function lc(e) {
		const t = [];
		return (
			e.language && t.push(e.language), e.languages && t.push(...e.languages), t
		);
	}
	function In() {
		return typeof window > "u"
			? "desktop"
			: window.innerWidth < 768
				? "mobile"
				: window.innerWidth < 1024
					? "tablet"
					: "desktop";
	}
	function Mr() {
		return typeof navigator < "u" ? navigator.language : void 0;
	}
	function Pr(e) {
		return {
			device: In(),
			traits: e.traits ?? {},
			language: e.language,
			locale: e.locale ?? Mr(),
		};
	}
	function cc(e, t) {
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
	function $n(e, t, n) {
		const r = e.findIndex((s) => s.order === t.currentCard),
			o = e.slice(r + 1),
			i = cc(t.variables, n);
		for (const s of o) if (vs(s.rules, i, Rs, s.ruleMode ?? "and")) return s;
		return null;
	}
	function Rb(e, t, n) {
		const r = cc(t.variables, n);
		for (const o of e) if (vs(o.rules, r, Rs, o.ruleMode ?? "and")) return o;
		return null;
	}
	function Eb(e, t, n, r, o) {
		const i = e.find((s) => s.order === t.currentCard);
		if (!i) return t;
		if (i.type === "TopTaskCard") t.variables.task = J(o);
		else if (i.type === "SegmentCard" && r) {
			const s = J(r),
				a = J(o);
			t.variables.segments = { ...t.variables.segments, [s]: a };
		} else if (i.type === "CompletionCard") t.variables.completion = o;
		else if (i.type === "LikertCard" && "likertItems" in i.likertScale) {
			if (i.likertScale.likertItems.find((a) => a.id === o)) {
				const a = J(i.id),
					c = J(o);
				t.variables.scales = { ...t.variables.scales, [a]: c };
			}
		} else if (i.type === "MultiSelectCard") {
			const s = J(i.id),
				a = o.map(J);
			t.variables.multiSelect = { ...t.variables.multiSelect, [s]: a };
		} else if (i.type === "InputCard") t.values[i.id] = o;
		else if (i.type === "RecruitmentCard") {
			const s = o;
			(t.variables.recruited = s !== void 0),
				s !== void 0 && (t.values[i.id] = s);
		} else if (i.type === "SingleSelectCard") {
			const s = J(i.id),
				a = J(o);
			t.variables.singleSelect = { ...t.variables.singleSelect, [s]: a };
		}
		return t;
	}
	function Mb(e, t, n) {
		const r = $n(e, t, n);
		return t.currentCard !== void 0 && r
			? {
					...t,
					history: [...t.history, t.currentCard],
					currentCard: (r == null ? void 0 : r.order) ?? t.currentCard,
				}
			: t;
	}
	function Pb(e) {
		if (e.history.length === 0) return e;
		const [t, ...n] = [...e.history].reverse();
		return { ...e, currentCard: t, history: n.reverse() };
	}
	function Lb(e, t, n) {
		return !!$n(e, t, n);
	}
	function Ab(e, t, n) {
		const r = $n(e, t, n);
		if (!r) return !1;
		const o = e.find((i) => i.order === r.order);
		return (o == null ? void 0 : o.size) === "Minimal";
	}
	function Ob(e, t, n) {
		return !$n(e, t, n);
	}
	function Nb(e, t) {
		const n = t.currentCard,
			r = e.find((o) => o.order === n);
		return (r == null ? void 0 : r.type) === "MessageCard";
	}
	const jb = k({ id: h(), code: h(), name: h() }),
		Bb = k({
			code: h().nullish(),
			name: h().nullish(),
			"@textNext": h().nullish(),
			"@textPrev": h().nullish(),
			"@textClose": h().nullish(),
			"@textHide": h().nullish(),
			"@textMinimized": h().nullish(),
			"@textReplyLater": h().nullish(),
		}),
		Lr = sv.extend({
			cards: L(ul),
			confineToDomain: P().optional().default(!1),
			rendererVariant: A(["classic", "beta"]).optional(),
			languages: L(jb).optional().nullable(),
			tr: L(Bb).optional().nullable(),
		});
	Lr.array(), h().brand("SessionId");
	const Db = h().brand("VisitorId");
	A(["open", "minimized", "closed", "loading", "hidden"]),
		A(["init", "capture", "completed", "closed", "blocked", "noconsent"]);
	const Fb = k({
			task: h().nullable().default(null),
			segments: re(h(), h()).nullable().default({}),
			completion: P().nullable().default(null),
			scales: re(h(), h()).nullable().default({}),
			traits: re(h(), h()).nullable().default({}),
			multiSelect: re(h(), L(h())).nullable().default({}),
			singleSelect: re(h(), h()).nullable().default({}),
			recruited: P().nullable().default(null),
		}),
		Rn = k({
			values: re(
				h(),
				h()
					.or(P())
					.or(re(h(), h().or(P()))),
			).default({}),
			variables: Fb.partial().default({}),
			history: L(Z().int()).default([]),
			currentCard: Z().min(0).optional(),
			path: h().optional(),
			state: h().optional(),
			lastSync: Z().optional(),
		});
	k({ i: Db, c: Z() });
	function Ue(...e) {
		var t;
		(t = window.skyra) != null && t._debugEnabled && console.log(...e);
	}
	const Zb = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
	function Ar(e, t) {
		const r = t
				.substring(20)
				.split("")
				.reduce((a, c) => {
					const l = Zb.indexOf(c);
					return a * l;
				}, 1),
			o = e.filter((a) => a.orderLocked !== !0),
			i = Hb(o, r);
		let s = [];
		for (let a = 0; a < e.length; a++)
			if (e[a].orderLocked) s.push(e[a]);
			else {
				const c = i.shift();
				c && s.push(c);
			}
		return s;
	}
	function Hb(e, t) {
		let n = e.length,
			r,
			o;
		for (; n; )
			(o = Math.floor(Ub(t) * n--)), (r = e[n]), (e[n] = e[o]), (e[o] = r), t++;
		return e;
	}
	function Ub(e) {
		let t = Math.sin(e++) * 1e4;
		return t - Math.floor(t);
	}
	function uc(e, t, { firstCard: n, finalCard: r }) {
		var s;
		const o = (s = t.textClose) == null ? void 0 : s.trim(),
			i = e.renderType !== "Inline" && e.surveyType !== "Findability";
		return n && !r && i && o ? o : null;
	}
	function Te(e, t, n = {}) {
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
	const Vb = /^(Trigger|Path)/;
	k({
		id: E().optional(),
		ruleType: A(["Show", "Hide", "FollowOnly"]),
		desktop: P().default(!1),
		mobile: P().default(!1),
		tablet: P().default(!1),
		path: h().nullable().optional(),
		follow: P().default(!1),
		applyBelow: P().default(!1),
		isRegex: P().default(!1).optional(),
		domain: k({ id: E(), name: h() }).optional().nullable(),
	});
	function si(e) {
		return [e.showRules, e.followRules, e.hideRules].some(
			(t) => t && t.length > 0,
		);
	}
	function Wb(e, t, n, r) {
		const o = new URL(t),
			i = o.hostname,
			s = o.pathname,
			a = e.domain ? Bo(e.domain.name, i) : !0,
			c =
				e.path &&
				Do(decodeURI(s), decodeURI(e.path), e.applyBelow, e.isRegex ?? !1),
			l = n && e.follow;
		return [e[r], a, c || l].every(Boolean);
	}
	function qb(e, t, n, r) {
		return e.follow && n ? !1 : _l(e, t) && e[r];
	}
	function ai({
		urlString: e,
		surveyStarted: t,
		showRules: n,
		followRules: r = [],
		hideRules: o,
		device: i,
		isInline: s,
	}) {
		const a = n.some((u) => Wb(u, e, t, i)),
			c = r.some((u) => {
				const p = new URL(e),
					f = p.hostname,
					m = p.pathname,
					y = u.domain ? Bo(u.domain.name, f) : !0,
					b =
						u.path &&
						Do(decodeURI(m), decodeURI(u.path), u.applyBelow, u.isRegex ?? !1);
				return u[i] && y && b;
			});
		return o.some((u) => qb(u, e, t, i))
			? !1
			: a
				? !0
				: c
					? t
					: !!(n.length === 0 && r.length === 0 && o.length === 0 && s);
	}
	function Or(e, t, n, r) {
		if (n) return new RegExp(t).test(e);
		const o = t.at(-1) === "/" && t.length > 1 ? t.slice(0, -1) : t,
			i = e.at(-1) === "/" && e.length > 1 ? e.slice(0, -1) : e;
		return r ? i === o : i.startsWith(o);
	}
	function li(e, t, n) {
		if (e.domains.length > 0 && !e.domains.some((r) => n.hostname === r.name))
			return !1;
		if (t === "Trigger") {
			if (["PathBeginsWith", "TriggerPathBeginsWith"].includes(e.type))
				return Or(n.pathname, e.value, e.isRegexp, !1);
			if (["PathIs", "TriggerPathIs"].includes(e.type))
				return Or(n.pathname, e.value, e.isRegexp, !0);
		} else if (t === "Follow")
			return e.type === "FollowPathBeginsWith"
				? Or(n.pathname, e.value, e.isRegexp, !1)
				: e.type === "FollowPathIs"
					? Or(n.pathname, e.value, e.isRegexp, !0)
					: !1;
		return !1;
	}
	function dc(e, t, n) {
		if (n.length === 0) return !0;
		const r = new URL(e);
		for (const i of n) if (i.negate && li(i, t, r)) return !1;
		const o = n.filter((i) => !i.negate);
		if (o.length === 0) return !0;
		if (t === "Trigger") {
			const i = o.filter((s) => s.type.match(Vb));
			for (const s of i) if (li(s, t, r)) return !0;
		} else if (t === "Follow") {
			const i = o.filter((s) => s.type.startsWith("Follow"));
			if (i.length === 0) return !0;
			for (const s of i) if (li(s, t, r)) return !0;
			return !1;
		}
		return !1;
	}
	const Kb = h(),
		Jb = h(),
		Gb = h(),
		Yb = h(),
		Xb = h(),
		Qb = P(),
		ew = wl,
		tw = h(),
		nw = Z(),
		rw = Z().nullable(),
		ow = Z().nullable(),
		iw = X([h(), Mm()]).transform((e) => (e instanceof Date ? e : new Date(e))),
		sw = k({ name: h(), code: h() }).nullable(),
		aw = L(k({ id: h(), name: h(), code: h() }))
			.optional()
			.nullable(),
		lw = L(hn()).optional(),
		cw = L(hn()).optional(),
		uw = L(hn()).optional(),
		dw = L(hn()).optional(),
		pw = el.optional().default("and"),
		fw = L(nl).optional().default([]),
		hw = L(h()).optional(),
		mw = Z().gte(0).lte(1).default(1),
		gw = Z(),
		pc = k({
			id: Kb,
			fullSlug: Jb,
			name: Gb,
			status: Yb,
			publishingState: Xb,
			isLive: Qb,
			urlRules: lw,
			showRules: cw,
			followRules: uw,
			hideRules: dw,
			audienceRuleMode: pw,
			audienceRules: fw,
			renderType: ew,
			surveyType: tw,
			capturePercent: nw,
			minTimeForRetake: rw,
			minTimeForRetrigger: ow,
			updatedAt: iw,
			language: sw,
			languages: aw,
			blockedIps: hw,
			priorityScore: mw,
			numCards: gw,
		});
	k({ survey: Lr });
	const yw = L(pc),
		vw = L(Lr),
		bw = k({
			id: h(),
			slug: h(),
			valueType: A(["string", "number"]).optional().nullable(),
		}),
		fc = k({
			surveys: L(pc),
			traits: L(bw).optional().default([]),
			organisation: k({
				completionTimeout: Z().optional().nullable(),
				rejectionTimeout: Z().optional().nullable(),
			}).optional(),
		});
	function ww(e, t) {
		return t && e.minTimeForRetake != null
			? Date.now() - t > e.minTimeForRetake * 1e3
			: !1;
	}
	function _w(e, t) {
		return t && e.minTimeForRetrigger != null
			? Date.now() - t > e.minTimeForRetrigger * 1e3
			: !1;
	}
	function kw(e, t) {
		const n = `skyra.${t.replace(/\//g, ".")}`,
			r = e.getItem(n),
			o = r ? JSON.parse(r) : {},
			i = Rn.safeParse(o);
		return i.success ? i.data : Rn.parse({});
	}
	const Sw = ze(async ({ input: e }) => {
			const t = new URLSearchParams();
			e.testMode && t.append("mode", "test"),
				Ue("Load survey summaries", { ...e });
			const r = await (
					await fetch(`${e.apiHost}/survey/${e.orgSlug}?` + t.toString())
				).json(),
				o = fc.safeParse(r);
			if (o.success) return o.data.surveys;
			const i = yw.safeParse(r);
			if (!i.success) {
				const s = new Error("Invalid response");
				throw ((s.cause = i.error), s);
			}
			return i.data;
		}),
		xw = ze(async ({ input: e }) => {
			const t = new URLSearchParams();
			e.testMode && t.append("mode", "test"),
				Ue("Load org with surveys", { ...e });
			const r = await (
					await fetch(`${e.apiHost}/survey/${e.orgSlug}?` + t.toString())
				).json(),
				o = fc.safeParse(r);
			if (!o.success) {
				const i = new Error("Invalid response");
				throw ((i.cause = o.error), i);
			}
			return o.data;
		}),
		ci = ze(async ({ input: e }) => {
			if (e.slugs.length === 0) return [];
			const t = new URLSearchParams();
			for (const s of e.slugs) t.append("slug", s.split("/")[1]);
			e.testMode && t.append("mode", "test");
			const n = `${e.apiHost}/survey/${e.orgSlug}/fullSurveys?`,
				o = await (await fetch(n + t.toString())).json(),
				i = vw.safeParse(o);
			if (!i.success)
				throw (
					(console.error("Invalid survey response", i.error, o),
					new Error("Invalid survey response"))
				);
			return i.data;
		});
	function hc(e) {
		return !!e && Object.keys(e).length > 0;
	}
	const mc = ze(({ input: e }) =>
		Promise.all(
			e.map(async (t) => {
				var o;
				if (t.sessionId) {
					if (hc(t.traits))
						try {
							await qt(
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
							Ue(
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
				const r = Le();
				return (
					await qt(
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
	function gc(e) {
		const t = e.survey.fullSlug,
			n = e.customElementName ?? "skyra-survey";
		return document.querySelector(e.selector)
			? document.querySelector(`${n}[slug="${t}"]`)
				? "existing_element"
				: null
			: "missing_container";
	}
	const Cw = ze(async ({ input: e }) => {
			let t = gc(e);
			return (
				t === "missing_container" &&
					e.retryDelayMs !== 0 &&
					(await new Promise((n) => setTimeout(n, e.retryDelayMs ?? 100)),
					(t = gc(e))),
				t ? { canRender: !1, reason: t } : { canRender: !0 }
			);
		}),
		yc = ze(({ input: e }) => {
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
	function vc(e) {
		Kt({
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
	function Kt(e) {
		Ib(
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
	const zw = ze(({ input: e }) => {
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
	async function Tw(e) {
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
	function bc(e) {
		return e.split("/").filter(Boolean).length;
	}
	function wc(e, t) {
		const n = bc(t);
		return e === t ? 3 : e.startsWith(t + "/") ? Math.min(1 + n * 0.5, 2.9) : 0;
	}
	const Nr = /\/$/;
	function Iw(e, t, n, r = [], o = []) {
		var a;
		let i = 1,
			s;
		try {
			s = new URL(e).pathname.replace(Nr, "");
		} catch {
			s = e.replace(Nr, "");
		}
		if (!si({ showRules: n, followRules: r, hideRules: o }))
			for (const c of t) {
				const l = c.value.replace(Nr, "");
				if (c.isRegexp)
					try {
						new RegExp(c.value).test(s) && (i += 0.5);
					} catch {}
				else i += wc(s, l);
			}
		for (const c of n) {
			const l = ((a = c.path) == null ? void 0 : a.replace(Nr, "")) ?? "";
			if (c.isRegex && c.path)
				try {
					const u =
						c.path
							.split("/")
							.filter(Boolean)
							.reduce((f, m) => {
								const y = (v) => {
										try {
											return new RegExp(v);
										} catch {
											return null;
										}
									},
									b = (v) => v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
								return f + "\\/" + (y(m) ? `(${m})` : b(m));
							}, "^") +
						(c.applyBelow ? "(\\/.*)?" : "") +
						"$";
					if (new RegExp(u).test(s)) {
						const m = 1 + bc(c.path) * 0.5 + 0.5;
						i += m;
					}
				} catch {}
			else c.applyBelow && (i += wc(s, l));
		}
		return i;
	}
	const $w = ze(({ input: e }) => {
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
			n = Eo.parse(t);
		return qt(n, { apiHost: e.apiHost }), Promise.resolve();
	});
	function Rw(e) {
		const t = e.path ?? "/",
			n = `skyra.${e.slug.replace(/\//g, ".")}`;
		e.storage.removeItem(n, { path: t });
	}
	const _c = Tn({
			actors: { postCardValue: $w },
			delays: {
				initial: 0,
				autoClose: ({ context: e }) => e.survey.autoCloseAfter ?? 0,
			},
			actions: {
				setNextCards: z({
					state: ({ context: e }) =>
						Mb(e.survey.cards, e.state, e.audienceContext),
				}),
				setPrevCard: z({ state: ({ context: e }) => Pb(e.state) }),
				clearCookieState: ({ context: e }) => {
					const t = e.survey.renderType === "Popup";
					Rw({
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
						Tw({
							storage: e.cookieStorage,
							state: e.state,
							slug: e.survey.fullSlug,
							renderType: e.survey.renderType,
							confineToDomain: e.survey.confineToDomain,
						});
				},
				setCardValue: z({
					state: ({ context: e, event: t }) => (
						zn(t, "submit"),
						Eb(e.survey.cards, e.state, t.cardId, t.key, t.value)
					),
				}),
				diagnoseCurrentCardMissing: ({ context: e, event: t }) => {
					zn(t, "submit"),
						Kt({
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
					Kt({
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
					zn(t, "submit"), e.survey.cards.some((n) => n.id === t.cardId)
				),
				hasEmptyValue: ({ event: e }) => {
					zn(e, "submit");
					const t = e.value;
					return typeof t == "string"
						? t.trim() === ""
						: Array.isArray(t)
							? t.length === 0
							: t === void 0;
				},
				hasNextCard: ({ context: e }) =>
					Lb(e.survey.cards, e.state, e.audienceContext),
				nextCardStartsMinimized: ({ context: e }) =>
					Ab(e.survey.cards, e.state, e.audienceContext),
				isLastCard: ({ context: e }) =>
					Ob(e.survey.cards, e.state, e.audienceContext),
				isMessageCard: ({ context: e }) => Nb(e.survey.cards, e.state),
				isPopup: ({ context: e }) => e.survey.renderType === "Popup",
				isInline: ({ context: e }) => e.survey.renderType === "Inline",
				isMinimized: ({ context: e }) => e.state.state === "Minimized",
				wasPreviouslyVisible: ({ context: e }) => e.state.state === "ShowCard",
				cookieConsented: ({ context: e }) => e.cookieConsent,
			},
		}).createMachine({
			id: "Capture",
			context: ({ input: e }) => {
				var b, v, _, x, C, I, S;
				const t = (b = e.state) == null ? void 0 : b.state;
				let n = t;
				if (typeof t == "string") {
					const $ = t.toLowerCase();
					$ === "minimized"
						? (n = "Minimized")
						: $ === "showcard" && (n = "ShowCard");
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
					c = e.survey.renderType === "Inline",
					l = a === ((C = e.state) == null ? void 0 : C.path),
					d =
						((I = e.state) == null ? void 0 : I.currentCard) === void 0 ||
						(c && !l),
					u = Rn.parse(
						!c || l
							? { ...e.state, state: n, currentCard: s }
							: { currentCard: i },
					),
					p = d
						? Rn.parse({
								...u,
								currentCard:
									((S = Rb(e.survey.cards, u, o)) == null ? void 0 : S.order) ??
									i,
							})
						: u,
					f = e.survey.cards.find(($) => $.order === p.currentCard),
					m = n === void 0 && (f == null ? void 0 : f.size) === "Minimal",
					y = Rn.parse({ ...p, state: m ? "Minimized" : p.state, path: a });
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
						guard: Jo(["isPopup", ({ event: e }) => e.value === !1]),
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
						zb(({ event: e }) => ({
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
									guard: Jo(["isInline", "isLastCard", "isMessageCard"]),
									actions: "clearCookieState",
								},
								autoClose: {
									guard: Jo([
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
										guard: Bv("submittedCardExists"),
										actions: "diagnoseCurrentCardMissing",
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
														(c) => c.order === n.currentCard,
													),
													o = ul.parse(r);
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
									zn(t, "submit");
									const n = e.survey.cards.find((r) => r.id === t.cardId);
									if (!n)
										throw (
											(Kt({
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
		kc = (e) => {
			var t;
			return e.surveyAlreadyCaptured
				? 0
				: (((t = e.fullSurvey) == null ? void 0 : t.initialDelay) ?? 0);
		},
		Jt = (e, t, n) => {
			var r;
			return Er({
				savedLanguage: t,
				browserLanguage: n,
				surveyDefault: ((r = e.language) == null ? void 0 : r.code) || "en",
				enabledLanguages: ac(e),
			});
		},
		Ew = Tn({
			actors: {
				checkCookieSupport: zw,
				loadFullSurveys: ci,
				sessionInit: mc,
				renderSurvey: yc,
				canRenderSurvey: Cw,
				sleepActor: ze(
					({ input: e }) => new Promise((t) => setTimeout(t, e.delay)),
				),
				checkCaptureRate: ze(
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
								s = Pr({
									traits: e.traits,
									language: Jt(o, e.language, e.locale),
									locale: e.locale,
								}),
								a = o.urlRules && o.urlRules.length > 0,
								c = si(o);
							if (!a && !c) return !1;
							if (!c && a && o.urlRules) {
								const d =
									(i == null ? void 0 : i.state) === "Capture"
										? "Follow"
										: "Trigger";
								if (!dc(e.url, d, o.urlRules)) return !1;
							}
							return (c &&
								!ai({
									urlString: e.url,
									surveyStarted: (i == null ? void 0 : i.state) === "Capture",
									showRules: o.showRules || [],
									followRules: o.followRules || [],
									hideRules: o.hideRules || [],
									device: In(),
									isInline: !1,
								})) ||
								!oo(o.audienceRules, s, o.audienceRuleMode)
								? !1
								: i
									? i.state === "Completed"
										? ww(o, i.lastSync)
										: i.state === "Rejected" || i.state === "NotSelected"
											? _w(o, i.lastSync)
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
						return {
							selectedSurvey: t.fullSlug,
							resolvedLanguage: Jt(t, e.language, e.locale),
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
								resolvedLanguage: Jt(s, e.language, e.locale),
								requestedSurvey: void 0,
							};
						n = !0;
					}
					const i = e.eligibleSurveys
						.map((s) => {
							const a = Iw(
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
						resolvedLanguage: i ? Jt(i, e.language, e.locale) : null,
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
					vc({
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
						vc({
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
					Kt({
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
									n = e.eligibleSurveys.filter((m) => {
										var b;
										const y =
											(b = e.cookieState) == null ? void 0 : b[m.fullSlug];
										return !y || y.state === "Capture";
									}),
									r = n
										.map((m) => m.minTimeForRetake)
										.filter((m) => m !== null)
										.map((m) => m * 1e3),
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
										.map((m) => m.minTimeForRetrigger)
										.filter((m) => m !== null)
										.map((m) => m * 1e3),
									c = a.length > 0 ? Math.min(...a, i) : i;
								let l = null,
									d = null;
								for (const m of e.surveys) {
									const y =
										(f = e.cookieState) == null ? void 0 : f[m.fullSlug];
									y &&
										y.lastSync &&
										m.renderType !== "Inline" &&
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
												return n ? Jt(n, e.language, e.locale) : null;
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
								guard: ({ context: e }) => kc(e) <= 0,
							},
							invoke: {
								src: "sleepActor",
								input: ({ context: e }) => ({ delay: kc(e) }),
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
								language: e.resolvedLanguage ?? Jt(n, e.language, e.locale),
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
	function Sc(e, t) {
		return e instanceof Error ? e.message : t;
	}
	function xc(e, t) {
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
		return Er({
			explicitLanguage: n,
			htmlLang: r,
			browserLanguage: Mr(),
			surveyDefault: ((s = e.language) == null ? void 0 : s.code) || "en",
			enabledLanguages: ac(e),
		});
	}
	const Mw = Tn({
		actors: { loadFullSurveys: ci, sessionInit: mc },
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
								return n ? xc(n, e.slug) : null;
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
							message: Sc(t.error, `Failed to load ${e.kind} survey.`),
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
									? oo(
											e.fullSurvey.audienceRules,
											Pr({ traits: e.traits, language: e.language ?? void 0 }),
											e.fullSurvey.audienceRuleMode,
										)
									: t === "Inline" &&
											ai({
												urlString: e.url,
												surveyStarted: !1,
												showRules: e.fullSurvey.showRules,
												followRules: e.fullSurvey.followRules || [],
												hideRules: e.fullSurvey.hideRules,
												device: In(),
												isInline: !0,
											})
										? oo(
												e.fullSurvey.audienceRules,
												Pr({
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
									language: e.language ?? xc(r, e.slug),
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
							message: Sc(
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
	function Pw(e) {
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
		return Er({
			explicitLanguage: void 0,
			savedLanguage: void 0,
			htmlLang: t,
			browserLanguage: typeof navigator < "u" ? navigator.language : void 0,
			surveyDefault: ((i = e.language) == null ? void 0 : i.code) || "en",
			enabledLanguages: n,
		});
	}
	function Lw(e) {
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
						...(((a = i.languages) == null ? void 0 : a.map((c) => c.code)) ||
							[]),
					];
				}),
			),
		).filter(Boolean);
		return Er({
			explicitLanguage: void 0,
			savedLanguage: void 0,
			htmlLang: t,
			browserLanguage: typeof navigator < "u" ? navigator.language : void 0,
			surveyDefault: ((o = n.language) == null ? void 0 : o.code) || "en",
			enabledLanguages: r,
		});
	}
	function Cc(e, t) {
		const n = e.getItem("skyra.state");
		if (!n) return gt.parse({ _id: Le() });
		try {
			const r = JSON.parse(n);
			return gt.parse(r);
		} catch (r) {
			return (
				t &&
					Kt({
						apiHost: t.apiHost,
						event: "cookie_state_parse_failed",
						reason:
							r instanceof SyntaxError ? "invalid_json" : "invalid_schema",
						org: t.org,
						url: t.url,
					}),
				gt.parse({ _id: Le() })
			);
		}
	}
	function Aw(e, t) {
		e.setItem("skyra.state", JSON.stringify(t));
	}
	function zc(e, t) {
		const n = si(e),
			r = e.urlRules && e.urlRules.length > 0;
		if (!n && r && !dc(t, "Follow", e.urlRules)) return !1;
		const o = In(),
			i = (e.hideRules || []).filter((s) => s[o] && _l(s, t));
		return i.some((s) => !s.follow)
			? !1
			: n
				? ai({
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
	function jr(e) {
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
	function Gt(e, t) {
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
	function Yt(e) {
		return !e.id && !e.slug && (!e.renderType || e.renderType === "Popup");
	}
	function Ow(e, t) {
		return e.id === t.id || e.fullSlug === t.fullSlug;
	}
	function ui(e, t) {
		return t.some((n) => Ow(e, n));
	}
	function Nw(e) {
		return e.popupHidden
			? []
			: e.hiddenPopupSurveys.length === 0
				? e.popupSurveys
				: e.popupSurveys.filter((t) => !ui(t, e.hiddenPopupSurveys));
	}
	function Tc(e) {
		return e.popupCapture
			? e.popupHidden
				? !0
				: e.activePopupSurvey
					? ui(e.activePopupSurvey, e.hiddenPopupSurveys)
					: !1
			: !1;
	}
	function jw(e, t) {
		return Yt(t) ? [] : e.filter((n) => Gt(t, n) === !1);
	}
	function Ic(e, t, n) {
		return n === "replace" ? t : { ...e, ...t };
	}
	const Bw = Tn({
		actors: {
			loadSurveys: xw,
			popupCoordinator: Ew,
			surveySessionInitializer: Mw,
			captureMachine: _c,
		},
		guards: {
			activePopupBlockedOnReload: ({ context: e, event: t }) => {
				if (t.type !== "reload" || !e.popupCapture) return !1;
				if (Tc(e)) return !0;
				const n = e.popupCapture.getSnapshot().context.survey;
				return !zc(n, t.url);
			},
			activePopupAllowedOnReload: ({ context: e, event: t }) => {
				if (t.type !== "reload" || !e.popupCapture || Tc(e)) return !1;
				const n = e.popupCapture.getSnapshot().context.survey;
				return zc(n, t.url);
			},
			hideTargetsPopup: ({ context: e, event: t }) =>
				t.type !== "hideSurveys" ? !1 : Gt(t, jr(e)),
			showTargetsPopup: ({ context: e, event: t }) =>
				t.type !== "showSurveys"
					? !1
					: Yt(t) || e.hiddenPopupSurveys.some((n) => Gt(t, n))
						? !0
						: Gt(t, jr(e)),
			noActivePopupCapture: ({ context: e }) => !e.popupCapture,
			removeSurveyTargetsActiveOrPendingPopup: ({ context: e, event: t }) => {
				if (t.type !== "removeSurvey" || !t.slug) return !1;
				const n = jr(e);
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
				e.consent && Aw(e.cookieStorage, e.state);
			},
			initializeContext: z(({ context: e }) => ({ visitorId: e.state._id })),
			readCookieState: z(({ context: e }) => {
				const t = Cc(e.cookieStorage, {
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
				const t = Lw(e);
				return { state: gt.parse({ ...e.state, _l: t }) };
			}),
			spawnPopupCoordinator: z(({ context: e, spawn: t, self: n }) => {
				const r = Nw(e);
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
						locale: Mr(),
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
						explicitLanguage: c,
					} = t,
					l = `capture-${o}-${s}`,
					d = kw(e.cookieStorage, o),
					u = i.renderType === "Inline" || i.renderType === "Headless",
					p = a ?? (u ? c || Pw(i) : e.state._l),
					f = n("captureMachine", {
						id: l,
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
							device: In(),
							locale: Mr(),
						},
						systemId: l,
					});
				f.subscribe({
					complete() {
						const v = f.getSnapshot().output;
						(v == null ? void 0 : v.type) === "rejected"
							? r.send({ type: "surveyRejected", slug: o, captureId: l })
							: (v == null ? void 0 : v.type) === "completed" &&
								r.send({ type: "surveyDone", slug: o, captureId: l });
					},
				}),
					f.on("cardSaved", (b) => {
						r.send(b);
					});
				const m = i.renderType === "Inline",
					y = i.renderType === "Headless";
				return {
					popupCapture: m || y ? e.popupCapture : f,
					activePopupSurvey: m || y ? e.activePopupSurvey : i,
					inlineCaptures: m
						? { ...e.inlineCaptures, [l]: f }
						: e.inlineCaptures,
					headlessCaptures: y
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
					: { traits: Ic(e.traits, t.traits, t.mode) },
			),
			clearPopupCoordinator: z(() => ({ popupCoordinator: null })),
			hidePopupSurveys: z(({ context: e, event: t }) => {
				var o;
				if (t.type !== "hideSurveys") return {};
				const n = jr(e);
				return (
					(o = e.popupCapture) == null || o.send({ type: "minimize" }),
					Yt(t)
						? { popupHidden: !0, hiddenPopupSurveys: [] }
						: {
								hiddenPopupSurveys:
									n && !ui(n, e.hiddenPopupSurveys)
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
						(Yt(t) || Gt(t, n)) &&
						((r = e.popupCapture) == null || r.send({ type: "maximize" })),
					{
						popupHidden: Yt(t) ? !1 : e.popupHidden,
						hiddenPopupSurveys: jw(e.hiddenPopupSurveys, t),
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
				const n = Ic(e.traits, t.traits, t.mode);
				if (!hc(n)) return;
				const r = [
					...(e.popupCapture ? [e.popupCapture] : []),
					...Object.values(e.inlineCaptures),
					...Object.values(e.headlessCaptures),
				];
				for (const o of r) {
					const i = o.getSnapshot().context;
					qt(
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
				Cc(e.cookieStorage, { apiHost: e.apiHost, org: e.org, url: e.url }),
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
						pt(({ context: e }) => {
							var t;
							return ((t = e.popupCapture) == null ? void 0 : t.id) ?? "";
						}),
						"removeBlockedActivePopupOnReload",
						pt("popup-coordinator"),
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
						pt("popup-coordinator"),
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
						actions: sc("popup-coordinator", ({ event: e }) => ({
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
									gt.parse({ ...t.state, _l: e.language }),
							}),
							"writeCookieState",
						],
					},
					hideSurveys: {
						guard: "hideTargetsPopup",
						actions: [
							"hidePopupSurveys",
							pt("popup-coordinator"),
							"clearPopupCoordinator",
						],
					},
					showSurveys: [
						{
							guard: ({ context: e, event: t }) =>
								t.type === "showSurveys" &&
								!e.popupCapture &&
								(Yt(t) || e.hiddenPopupSurveys.some((n) => Gt(t, n))),
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
								pt("popup-coordinator"),
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
	class Dw {
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
			(this.actor = Ft(r || Bw, { input: o, inspect: n })),
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
						var _, x, C, I, S, $, N, B;
						const u = (_ = o.state) == null ? void 0 : _[d.fullSlug],
							p = Pr({
								traits: o.traits,
								language: (x = o.state) == null ? void 0 : x._l,
								locale: (C = o.state) == null ? void 0 : C._l,
							}),
							f = Eu(d.audienceRules, p, d.audienceRuleMode),
							m = a.find((O) => O.id.startsWith(`capture-${d.fullSlug}-`));
						let y = null;
						if (m) {
							const O = m.getSnapshot();
							y = {
								id: m.id,
								state:
									typeof O.value == "string"
										? O.value
										: JSON.stringify(O.value),
								status: O.status,
								currentCard:
									(S = (I = O.context) == null ? void 0 : I.state) == null
										? void 0
										: S.currentCard,
								totalCards:
									(B =
										(N = ($ = O.context) == null ? void 0 : $.survey) == null
											? void 0
											: N.cards) == null
										? void 0
										: B.length,
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
	function $c(e, t) {
		return new Dw(e, t);
	}
	const Fw = Tn({
		actors: {
			captureMachine: _c.provide({
				actions: { storeCookieState: () => {}, clearCookieState: () => {} },
				actors: { postCardValue: ze(async () => {}) },
			}),
			loadSurveys: Sw,
			loadFullSurveys: ci,
			renderSurvey: yc,
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
	function Zw(e, t) {
		return t === "classic" || t === "beta" ? t : "classic";
	}
	function Hw(e, t, n = "classic") {
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
	function di(e, t) {
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
			rendererVariant: Zw(r, n.rendererVariant),
			rendererVariantExplicit: n.rendererVariant !== void 0,
			traits: n.traits,
			surveyOverrides: n.surveyOverrides,
		};
	}
	function Rc(e) {
		return e.split("/")[0];
	}
	const Uw = [
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
	function Vw(e) {
		const t = e.split(".");
		if (t.length === 1) return t[0];
		if (t.length === 2) return t.join(".");
		if (t.length > 2)
			return Uw.includes(t.slice(-2).join(".")) ||
				["com", "net", "org", "gov", "edu", "mil", "co"].includes(t.at(-2))
				? t.slice(-3).join(".")
				: t.slice(-2).join(".");
		console.error("Invalid hostname:", e);
	}
	class Ww {
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
						o = $n(r.cards, n.context.state, n.context.audienceContext);
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
	class qw {
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
				Ue(`Cookie size: ${a.length} bytes`),
				Ue(n),
				(document.cookie = a);
		}
		removeItem(t, n) {
			this.setItem(t, "", { ...n, expires: -1 });
		}
	}
	function Kw(e, t, n = "REDACTED") {
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
	const Jw = !1;
	let pi;
	const En = k({
			state: A(["Completed", "Capture", "Rejected", "NotSelected"]).or(
				re(h(), hn()),
			),
			sessionId: h().optional(),
			lastSync: Z().optional(),
		}),
		gt = k({ _id: h(), _l: h().optional() }).catchall(En.optional());
	class Gw {
		constructor() {
			(this.config = {}),
				(this.urlRedactions = []),
				(this.explicitLanguages = new Map()),
				(this.events = nd()),
				(this._debugEnabled = Jw),
				(this.injectUsed = !1);
			const t = window.location.hostname,
				n = t.match(/^\d+\.\d+\.\d+\.\d+$/),
				r = window.SKYRA_CONFIG || {},
				o = (r == null ? void 0 : r.cookieDomain) ?? Vw(t);
			Ue("Cookie settings:", { isIp: n, tld: o }),
				(this.cookieStorage = new qw({
					domain: n ? void 0 : o,
					expires: 31536e3,
					path: "/",
				})),
				"skyraStart" in window &&
					typeof window.skyraStart == "function" &&
					setTimeout(() => {
						window.skyraStart();
					}, 0),
				(this.unstable_headless = new Ww(this));
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
				? Hw(this.normalizedConfig, t, n)
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
				r = di(n, t);
			this.normalizedConfig = r;
			const o = window.location.href;
			return (
				document.querySelector(r.selector) ||
					console.error(
						`[Skyra] Could not find DOM element with selector "${r.selector}"`,
					),
				(this._adapter = $c(
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
					pi,
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
			const r = Rc(t);
			if (
				((this.normalizedConfig = di(window.SKYRA_CONFIG || {}, { org: r })),
				this.previewMachine)
			)
				this.previewMachine.send({ type: "setOrg", org: r });
			else {
				const i = window.location.href;
				(this.previewMachine = Ft(Fw, {
					inspect: pi,
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
			const s = Rc(t),
				a = window.location.href,
				c = window.SKYRA_CONFIG || {};
			this.normalizedConfig = di(c, { org: s });
			const l = $c(
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
				pi,
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
			return Kw(window.location.href, this.urlRedactions);
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
			return Lr.parse(r.survey);
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
					const m = En.parse(JSON.parse(s));
					if (m.sessionId) {
						const y = await this.fetchSurvey(n);
						return { sessionId: m.sessionId, surveyId: y.id };
					}
				} catch {}
			const a = this.cookieStorage.getItem("skyra.state");
			let c;
			if (a)
				try {
					c = gt.parse(JSON.parse(a))._id || Le();
				} catch {
					c = Le();
				}
			else
				(c = Le()),
					this.cookieStorage.setItem("skyra.state", JSON.stringify({ _id: c }));
			const l = await this.fetchSurvey(n),
				d = Le();
			let u = "unknown";
			"connection" in navigator &&
				(u =
					(f = navigator == null ? void 0 : navigator.connection) == null
						? void 0
						: f.effectiveType),
				await qt(
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
			const p = En.parse({
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
				if (((d = En.parse(JSON.parse(l)).sessionId ?? ""), !d))
					throw new Error("Invalid session state");
			} catch {
				throw new Error(
					"Invalid session state. Call unstable_sessionInit first.",
				);
			}
			const u = this.cookieStorage.getItem("skyra.state");
			if (!u) throw new Error("No visitor ID found");
			const { _id: p } = gt.parse(JSON.parse(u)),
				f = await this.fetchSurvey(n),
				m = f.cards.find((v) => v.id === r);
			if (!m) throw new Error(`Card ${r} not found in survey ${n}`);
			const { type: y, order: b } = m;
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
					_ = Eo.parse(v);
				await qt(_, { apiHost: this.apiHost });
				const x = En.parse({
					sessionId: d,
					state: "Capture",
					lastSync: Date.now(),
				});
				this.cookieStorage.setItem(c, JSON.stringify(x)),
					i && this.cookieStorage.removeItem(c);
			} catch (v) {
				if (v instanceof Jh) {
					const _ = v.issues.map((x) => x.message).join(", ");
					throw new Error(`Invalid card value: ${_}`);
				}
				throw v;
			}
		}
	}
	function Ec(e, t, n, r) {
		if (!e) return;
		const o = new CustomEvent(t, { detail: n, bubbles: !0, composed: !0 });
		e.dispatchEvent(o), r == null || r(o);
	}
	function Yw(e, t, n, r) {
		return e.ready || e.terminal
			? !1
			: (Ec(t, "skyra-ready", n, r), (e.ready = !0), !0);
	}
	function Mn(e, t, n, r, o) {
		return e.ready || e.terminal ? !1 : (Ec(t, n, r, o), (e.terminal = !0), !0);
	}
	function Xw(e, t, n) {
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
	function Qw(e, t) {
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
	function e0(e) {
		return {
			slug: e,
			code: "controller_unavailable",
			message:
				"Skyra controller was not available before the inline survey timed out.",
		};
	}
	function t0(e) {
		return {
			slug: e,
			code: "unsupported_controller_version",
			message: "Inline lifecycle events require the Skyra V2 controller.",
		};
	}
	function Xt(e) {
		const t = e == null ? void 0 : e.getRootNode();
		return typeof ShadowRoot < "u" && t instanceof ShadowRoot ? t.host : null;
	}
	function Oe({
		card: e,
		children: t,
		chrome: n,
		showHeader: r = !0,
		inline: o = !1,
	}) {
		const i = Q(null),
			s = Q(null);
		return (
			ne(() => {
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
			g("skyra-survey-card", {
				ref: i,
				mode: o ? "inline" : "popup",
				children: [
					g("skyra-survey-chrome", {
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
						? g("skyra-survey-message-content", {
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
	const Mc = {
		en: { up: "Scroll up", down: "Scroll down" },
		no: { up: "Rull opp", down: "Rull ned" },
		nn: { up: "Rull opp", down: "Rull ned" },
		sv: { up: "Rulla upp", down: "Rulla ned" },
		de: { up: "Nach oben scrollen", down: "Nach unten scrollen" },
		pt: { up: "Rolar para cima", down: "Rolar para baixo" },
	};
	function Br(e) {
		return Mc[e ?? "en"] ?? Mc.en;
	}
	function Ie(e, t, n) {
		ne(() => {
			const r = e.current;
			if (!r) return;
			const o = (i) => n(i.detail);
			return r.addEventListener(t, o), () => r.removeEventListener(t, o);
		}, [n, t, e]);
	}
	function it(e, t, n) {
		su(() => {
			const r = e.current;
			r && (r[t] = n);
		}, [t, e, n]);
	}
	function n0({ card: e, chrome: t, next: n, survey: r, texts: o }) {
		const i = Q(null);
		return (
			Ie(i, "skyra-completion-select", ({ value: s }) => n(s)),
			Ie(i, "skyra-completion-reply-later", () => t.onMinimize()),
			g(Oe, {
				card: e,
				chrome: t,
				inline: r.renderType === "Inline",
				showHeader: !1,
				children: g("skyra-survey-completion-content", {
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
	function r0({ card: e, chrome: t, next: n, survey: r }) {
		const o = Q(null);
		return (
			Ie(o, "skyra-completion-select", ({ value: i }) => n(i)),
			g(Oe, {
				card: e,
				chrome: t,
				inline: r.renderType === "Inline",
				showHeader: !1,
				children: g("skyra-survey-completion-content", {
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
	function o0({
		card: e,
		chrome: t,
		firstCard: n,
		next: r,
		prev: o,
		storedValue: i,
		survey: s,
		texts: a,
	}) {
		const [c, l] = ae(typeof i == "string" ? i : ""),
			[d, u] = ae(!1),
			p = Je(),
			f = $t(),
			m = Q(null);
		Ie(m, "skyra-input-change", ({ value: I }) => l(I));
		const y = Cs({
				content: c,
				card: {
					minLength: e.minLength ?? 0,
					maxLength: e.maxLength ?? void 0,
					validations: e.validations ?? [],
				},
				hasBeenTouched: d,
				language: f,
			}),
			b = e.maxLength ?? void 0,
			v = _s({ min: e.minLength ?? 0, max: b, language: f }),
			_ = d && y.status === "under-minimum",
			x = d && !y.valid && y.status !== "under-minimum";
		function C() {
			u(!0), (p.value = y.valid), y.valid && r(c);
		}
		return g(Oe, {
			card: e,
			chrome: t,
			inline: s.renderType === "Inline",
			showHeader: !1,
			children: [
				g("skyra-survey-input-content", {
					ref: m,
					heading: e.name,
					body: e.body ?? "",
					"body-html": e.bodyHtml ?? "",
					name: "value",
					placeholder: e.placeholder ?? "",
					value: c,
					multiline: !!e.multiline,
					invalid: d && !y.valid,
					instruction: v ?? "",
					"instruction-invalid": _,
					"character-count": typeof b == "number" ? `${c.length}/${b}` : "",
					"max-length": b,
					error: x ? y.errorMessage : "",
				}),
				g("skyra-survey-actions", {
					align: n ? "end" : "between",
					children: [
						!n && g("skyra-survey-button", { onClick: o, children: a.back }),
						g("skyra-survey-button", {
							variant: "primary",
							onClick: C,
							children: a.next,
						}),
					],
				}),
			],
		});
	}
	function i0({
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
					? (f = c.find((m) => m.id === o || J(m.id) === o)) == null
						? void 0
						: f.id
					: void 0,
			[d, u] = ae(l),
			p = Q(null);
		return (
			it(
				p,
				"choices",
				c.map((m) => {
					var y;
					return {
						id: m.id,
						label: m.label,
						emoji: e.showEmoji
							? (((y = m.emoji) == null ? void 0 : y.native) ?? void 0)
							: void 0,
					};
				}),
			),
			Ie(p, "skyra-likert-select", ({ value: m }) => {
				u(m), a(m, e.id);
			}),
			ne(() => u(l), [l]),
			g(Oe, {
				card: e,
				chrome: t,
				inline: i.renderType === "Inline",
				showHeader: !1,
				children: [
					g("skyra-survey-likert-content", {
						ref: p,
						heading: e.name,
						body: e.body ?? "",
						"body-html": e.bodyHtml ?? "",
						"selected-value": d ?? "",
						layout:
							e.optionsLayout === "horizontal" ? "horizontal" : "vertical",
					}),
					!n &&
						g("skyra-survey-actions", {
							children: g("skyra-survey-button", {
								onClick: r,
								children: s.back,
							}),
						}),
				],
			})
		);
	}
	function s0({
		card: e,
		chrome: t,
		finalCard: n,
		firstCard: r,
		next: o,
		prev: i,
		survey: s,
		texts: a,
	}) {
		const c = uc(s, e, { firstCard: r, finalCard: n }),
			l = !c && !r;
		return g(Oe, {
			card: e,
			chrome: t,
			inline: s.renderType === "Inline",
			children: g("skyra-survey-actions", {
				align: c || l ? "between" : "end",
				children: [
					c
						? g("skyra-survey-button", { onClick: t.onClose, children: c })
						: l
							? g("skyra-survey-button", { onClick: i, children: a.back })
							: null,
					g("skyra-survey-button", {
						variant: "primary",
						onClick: () => o(),
						children: a.next,
					}),
				],
			}),
		});
	}
	const Pc = "ABCDEFGHJKMNPQRSTVWXYZ".split(""),
		Lc = {
			en: { min: "Select at least", max: "max", maxOnly: "Max" },
			pt: { min: "Selecione pelo menos", max: "máx.", maxOnly: "Máx." },
			de: { min: "Wählen Sie mindestens", max: "max.", maxOnly: "Max." },
			no: { min: "Velg minst", max: "maks", maxOnly: "Maks" },
			nn: { min: "Vel minst", max: "maks", maxOnly: "Maks" },
			sv: { min: "Välj minst", max: "max", maxOnly: "Max" },
		};
	function a0({
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
		const l = e.randomize ? Jn(e.selectItems, i) : e.selectItems,
			[d, u] = ae(
				Array.isArray(s)
					? s
							.filter((M) => typeof M == "string")
							.map((M) => {
								var F;
								return (F = l.find((fe) => fe.id === M || J(fe.id) === M)) ==
									null
									? void 0
									: F.id;
							})
							.filter((M) => !!M)
					: [],
			),
			[p, f] = ae(!1),
			[m, y] = ae(!1),
			b = Je(),
			v = $t(),
			_ = Lc[v ?? "en"] ?? Lc.en,
			x = Br(v),
			C = Q(null);
		it(
			C,
			"options",
			l.map((M, F) => ({ id: M.id, label: M.label, shortcut: Pc[F] })),
		),
			it(C, "selectedValues", d),
			Ie(C, "skyra-multiselect-change", ({ values: M }) => {
				y(!1), u(M);
			}),
			Ie(C, "skyra-multiselect-limit-reached", () => {
				y(!0);
			});
		const I = Wn({
				selectedCount: d.length,
				card: { min: e.min ?? void 0, max: e.max ?? void 0 },
				hasBeenSubmitted: p,
				language: v,
			}),
			S = m || I.status === "over-max" || (p && !I.valid),
			$ = Ss({
				min: e.min ?? void 0,
				max: e.max ?? void 0,
				totalOptions: l.length,
				language: v,
			}),
			N =
				m && e.max
					? ks({ max: e.max, language: v })
					: S
						? I.errorMessage
						: null,
			B = Ui(
				(M) => {
					if (M.defaultPrevented || M.altKey || M.ctrlKey || M.metaKey) return;
					const F = M.target;
					if (
						F instanceof HTMLInputElement ||
						F instanceof HTMLTextAreaElement ||
						F instanceof HTMLSelectElement
					)
						return;
					const fe = Pc.indexOf(M.key.toUpperCase());
					if (fe < 0 || fe >= l.length) return;
					const ye = l[fe].id,
						Ne = $s({ selectedValues: d, value: ye, max: e.max ?? void 0 });
					if (Ne.limitReached) {
						y(!0);
						return;
					}
					y(!1), u(Ne.values);
				},
				[e.max, l, d],
			);
		ne(() => {
			var F;
			const M = (F = C.current) == null ? void 0 : F.closest(".beta-wrapper");
			if (M)
				return (
					M.addEventListener("keyup", B),
					() => M.removeEventListener("keyup", B)
				);
		}, [B]);
		function O() {
			const M = Wn({
				selectedCount: d.length,
				card: { min: e.min ?? void 0, max: e.max ?? void 0 },
				hasBeenSubmitted: !0,
				language: v,
			});
			f(!0), (b.value = M.valid), M.valid && r(d);
		}
		return g(Oe, {
			card: e,
			chrome: t,
			inline: a.renderType === "Inline",
			showHeader: !1,
			children: [
				g("skyra-survey-multiselect-content", {
					ref: C,
					heading: e.name,
					body: e.body ?? "",
					"body-html": e.bodyHtml ?? "",
					layout: e.optionsLayout === "horizontal" ? "horizontal" : "vertical",
					inline: a.renderType === "Inline",
					min: e.min ?? 0,
					max: e.max ?? 0,
					instruction: $ ?? "",
					"minimum-label": _.min,
					"maximum-label": _.max,
					"maximum-only-label": _.maxOnly,
					"scroll-up-label": x.up,
					"scroll-down-label": x.down,
					invalid: S,
					error: N ?? "",
				}),
				g("skyra-survey-actions", {
					align: n ? "end" : "between",
					children: [
						!n && g("skyra-survey-button", { onClick: o, children: c.back }),
						g("skyra-survey-button", {
							variant: "primary",
							onClick: O,
							children: c.next,
						}),
					],
				}),
			],
		});
	}
	function l0({
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
			[l, d] = ae(c ?? {}),
			[u, p] = ae(!1),
			f = Je(),
			m = $t(),
			y = Q(null),
			b = l.email ?? "",
			v = b ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b) : !1,
			_ = !!(l.email || l.phone || l.name),
			x = qn({
				email: { value: b, valid: v },
				name: { value: l.name ?? "" },
				phone: { value: l.phone ?? "" },
				consented: !!l.consented,
				consentEnable: !!e.consentEnable,
				isRequired: !!e.isRequired,
				hasBeenSubmitted: u,
				language: m,
			});
		it(y, "fields", {
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
			it(y, "value", l),
			Ie(y, "skyra-recruitment-change", ({ value: I }) => d(I));
		function C() {
			const I = qn({
				email: { value: b, valid: v },
				name: { value: l.name ?? "" },
				phone: { value: l.phone ?? "" },
				consented: !!l.consented,
				consentEnable: !!e.consentEnable,
				isRequired: !!e.isRequired,
				hasBeenSubmitted: !0,
				language: m,
			});
			p(!0), (f.value = I.valid), I.valid && r(_ ? l : void 0);
		}
		return g(Oe, {
			card: e,
			chrome: t,
			inline: s.renderType === "Inline",
			showHeader: !1,
			children: [
				g("skyra-survey-recruitment-content", {
					ref: y,
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
				g("skyra-survey-actions", {
					align: n ? "end" : "between",
					children: [
						!n && g("skyra-survey-button", { onClick: o, children: a.back }),
						g("skyra-survey-button", {
							variant: "primary",
							onClick: C,
							children: a.next,
						}),
					],
				}),
			],
		});
	}
	function c0({
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
		var f, m;
		const l = Q(null),
			d = e.randomize ? Jn(e.items, o) : e.items,
			u = Br((f = s.language) == null ? void 0 : f.code),
			p =
				typeof i == "string"
					? (((m = d.find((y) => y.value.id === i || J(y.value.id) === i)) ==
						null
							? void 0
							: m.value.id) ?? "")
					: "";
		return (
			it(
				l,
				"options",
				d.map((y) => ({ id: y.value.id, label: y.label })),
			),
			Ie(l, "skyra-choice-select", ({ value: y }) => c(y, e.segment.id)),
			g(Oe, {
				card: e,
				chrome: t,
				inline: s.renderType === "Inline",
				showHeader: !1,
				children: [
					g("skyra-survey-choice-content", {
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
					!n &&
						g("skyra-survey-actions", {
							children: g("skyra-survey-button", {
								onClick: r,
								children: a.back,
							}),
						}),
				],
			})
		);
	}
	function u0({
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
		var f, m;
		const l = Q(null),
			d = e.randomize ? Jn(e.selectItems, o) : e.selectItems,
			u = Br((f = s.language) == null ? void 0 : f.code),
			p =
				typeof i == "string"
					? (((m = d.find((y) => y.id === i || J(y.id) === i)) == null
							? void 0
							: m.id) ?? "")
					: "";
		return (
			it(
				l,
				"options",
				d.map((y) => ({ id: y.id, label: y.label })),
			),
			Ie(l, "skyra-choice-select", ({ value: y }) => c(y)),
			g(Oe, {
				card: e,
				chrome: t,
				inline: s.renderType === "Inline",
				showHeader: !1,
				children: [
					g("skyra-survey-choice-content", {
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
					!n &&
						g("skyra-survey-actions", {
							children: g("skyra-survey-button", {
								onClick: r,
								children: a.back,
							}),
						}),
				],
			})
		);
	}
	function d0({
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
		var f, m;
		const l = Q(null),
			d = e.randomize ? Jn(e.taskItems ?? [], o) : (e.taskItems ?? []),
			u = Br((f = s.language) == null ? void 0 : f.code),
			p =
				typeof i == "string"
					? (((m = d.find((y) => y.task.id === i || J(y.task.id) === i)) == null
							? void 0
							: m.task.id) ?? "")
					: "";
		return (
			it(
				l,
				"options",
				d.map((y) => ({ id: y.task.id, label: y.label })),
			),
			Ie(l, "skyra-choice-select", ({ value: y }) => c(y)),
			g(Oe, {
				card: e,
				chrome: t,
				inline: s.renderType === "Inline",
				showHeader: !1,
				children: [
					g("skyra-survey-choice-content", {
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
					!n &&
						g("skyra-survey-actions", {
							children: g("skyra-survey-button", {
								onClick: r,
								children: a.back,
							}),
						}),
				],
			})
		);
	}
	const Ac = {
		en: "Language",
		no: "Språk",
		nn: "Språk",
		sv: "Språk",
		de: "Sprache",
		pt: "Idioma",
	};
	function p0({
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
		sessionId: m,
		storedValue: y,
		survey: b,
	}) {
		const v = Te(b, e, { finalCard: r }),
			x = {
				chrome: {
					closeLabel: v.close,
					currentLanguage: t,
					enabledLanguages: n,
					languageLabel: Ac[t] ?? Ac.en,
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
				sessionId: m,
				texts: v,
			};
		let C;
		switch (e.type) {
			case "CompletionCard":
				C = g(n0, { card: e, ...x });
				break;
			case "FindabilityCard":
				C = g(r0, { card: e, ...x });
				break;
			case "InputCard":
				C = g(o0, { card: e, ...x });
				break;
			case "LikertCard":
				C = g(i0, { card: e, ...x });
				break;
			case "MessageCard":
				C = g(s0, { card: e, ...x });
				break;
			case "MultiSelectCard":
				C = g(a0, { card: e, ...x });
				break;
			case "RecruitmentCard":
				C = g(l0, { card: e, ...x });
				break;
			case "SegmentCard":
				C = g(c0, { card: e, ...x });
				break;
			case "SingleSelectCard":
				C = g(u0, { card: e, ...x });
				break;
			case "TopTaskCard":
				C = g(d0, { card: e, ...x });
				break;
			default:
				return null;
		}
		return b.renderType === "Inline"
			? C
			: g("div", {
					className: "beta-transition-container",
					"data-minimized": i ? "true" : "false",
					children: [
						g("div", { className: "beta-transition-content", children: C }),
						g("skyra-survey-pill", {
							className: "beta-transition-pill",
							onClick: l,
							children: v.minimized,
						}),
					],
				});
	}
	const f0 =
		':host{color-scheme:light dark}.beta-wrapper{box-sizing:border-box;color:var(--skyra-text-color, #151515);font-family:var(--skyra-font-body, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);font-size:var(--skyra-font-size, 16px);outline:none}.beta-wrapper[data-inline=false]{position:fixed;right:0;bottom:0;left:0;display:flex;align-items:flex-end;justify-content:flex-end;margin:8px;z-index:2147483647}.beta-wrapper[data-inline=false][data-position=BottomLeft]{justify-content:flex-start}.beta-wrapper[data-inline=false][data-position=TopLeft]{top:0;bottom:auto;align-items:flex-start;justify-content:flex-start}.beta-wrapper[data-inline=false][data-position=TopRight]{top:0;bottom:auto;align-items:flex-start}@media(min-width:768px){.beta-wrapper[data-inline=false]{margin:16px}}.beta-wrapper[data-inline=true]{width:100%}@keyframes beta-enter-up{0%{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes beta-enter-down{0%{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}.beta-wrapper.beta-enter-up{animation:beta-enter-up var(--duration, .3s) ease-out both}.beta-wrapper.beta-enter-down{animation:beta-enter-down var(--duration, .3s) ease-out both}@keyframes beta-content-enter{0%{opacity:0}to{opacity:1}}.beta-transition-content{animation:beta-content-enter var(--duration, .3s) ease-out both}.beta-transition-container{width:min(420px,100%)}.beta-transition-pill{display:none;flex:0 1 auto;inline-size:-moz-fit-content;inline-size:fit-content;max-inline-size:100%;min-inline-size:0}.beta-transition-container[data-minimized=true]{display:flex;justify-content:flex-end}.beta-transition-container[data-minimized=true] .beta-transition-content{display:none}.beta-transition-container[data-minimized=true] .beta-transition-pill{display:block;animation:beta-content-enter var(--duration, .3s) ease-out both}.beta-transition-pill::part(label){min-inline-size:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@keyframes beta-shake{0%{transform:translate(0)}25%{transform:translate(-6px)}50%{transform:translate(6px)}75%{transform:translate(-6px)}to{transform:translate(0)}}.beta-wrapper.survey-shake{animation:beta-shake var(--duration, .3s) ease-in-out}@media(prefers-reduced-motion:reduce){.beta-wrapper.survey-shake,.beta-wrapper.beta-enter-up,.beta-wrapper.beta-enter-down,.beta-wrapper[data-inline=false],.beta-transition-content,.beta-transition-pill{animation:none}}';
	function h0({
		children: e,
		label: t,
		inline: n = !1,
		position: r,
		customCss: o,
		theme: i,
		themeMode: s,
		minimized: a = !1,
	}) {
		const c = Je(),
			l = Q(null),
			[d, u] = ae(!0),
			p = (s ?? "Auto").toLowerCase(),
			f = fl(i ?? dy[0], { themeMode: s ?? "Auto", selector: ":host" }),
			m =
				r === "TopLeft" || r === "TopRight"
					? " beta-enter-down"
					: " beta-enter-up";
		return (
			ne(() => {
				u(!1);
			}, []),
			ne(() => {
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
			g(Ee, {
				children: [
					g("style", { "data-beta-styles": !0, children: f0 }),
					f && g("style", { children: f }),
					o && g("style", { children: o }),
					g("aside", {
						ref: l,
						className: `beta-wrapper${c.value ? "" : " survey-shake"}${d && !n ? m : ""}`,
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
	function m0({
		card: e,
		capture: t,
		finalCard: n,
		firstCard: r,
		sessionId: o,
		storedValue: i,
		survey: s,
	}) {
		const a = ve(t, (f) => f.context.language),
			c = ve(t, (f) => f.matches({ Running: "Minimized" })),
			l = lc(s),
			d = s.renderType === "Inline" || s.surveyType === "Findability",
			u = (n && e.type === "MessageCard") || d,
			p = s.showCloseButton !== !1 && !d;
		return g(h0, {
			label: e.name,
			inline: s.renderType === "Inline",
			position: s.surveyPosition,
			customCss: s.customCss,
			theme: s.theme,
			themeMode: s.themeMode,
			minimized: c,
			children: g(
				p0,
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
					next: (f, m) => {
						t.send({ type: "submit", cardId: e.id, key: m, value: f });
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
	function Oc(e) {
		var t,
			n,
			r = "";
		if (typeof e == "string" || typeof e == "number") r += e;
		else if (typeof e == "object")
			if (Array.isArray(e)) {
				var o = e.length;
				for (t = 0; t < o; t++)
					e[t] && (n = Oc(e[t])) && (r && (r += " "), (r += n));
			} else for (n in e) e[n] && (r && (r += " "), (r += n));
		return r;
	}
	function g0() {
		for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
			(e = arguments[n]) && (t = Oc(e)) && (r && (r += " "), (r += t));
		return r;
	}
	const Nc = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
		jc = g0,
		Dr = (e, t) => (n) => {
			var r;
			if ((t == null ? void 0 : t.variants) == null)
				return jc(
					e,
					n == null ? void 0 : n.class,
					n == null ? void 0 : n.className,
				);
			const { variants: o, defaultVariants: i } = t,
				s = Object.keys(o).map((l) => {
					const d = n == null ? void 0 : n[l],
						u = i == null ? void 0 : i[l];
					if (d === null) return null;
					const p = Nc(d) || Nc(u);
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
								return Object.entries(f).every((m) => {
									let [y, b] = m;
									return Array.isArray(b)
										? b.includes({ ...i, ...a }[y])
										: { ...i, ...a }[y] === b;
								})
									? [...l, u, p]
									: l;
							}, []);
			return jc(
				e,
				s,
				c,
				n == null ? void 0 : n.class,
				n == null ? void 0 : n.className,
			);
		},
		Bc = Dr(
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
	function yt({
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
			g("button", {
				part: `button-${t}`,
				className: Bc({
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
	function Dc(e) {
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
	function Fr({ className: e, children: t, scrollAmount: n = 2.5 }) {
		const o = Gn().renderType === "Inline",
			i = Q(null),
			[s, a] = ae(null);
		ne(() => {
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
			ne(() => {
				if (o) return;
				const d = i.current;
				if (!(d && s)) return;
				if (!CSS.supports("animation-timeline: scroll()")) {
					const p = () => {
						const { scrollTop: f, scrollHeight: m, clientHeight: y } = d,
							b = f <= 5,
							v = f + y >= m - 5;
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
					const u = Dc(i.current) * n;
					i.current.scrollBy({ top: -u, behavior: "smooth" });
				}
			},
			l = () => {
				if (i.current) {
					const u = Dc(i.current) * n;
					i.current.scrollBy({ top: u, behavior: "smooth" });
				}
			};
		return o
			? g("div", { className: e, children: t })
			: g("div", {
					ref: i,
					className: `scroll-area ${e || ""}`,
					"data-scrollable": s === null ? "unknown" : s.toString(),
					children: [
						g("button", {
							className: "scroll-area-up",
							onClick: c,
							"aria-label": "Scroll up",
							type: "button",
							children: g("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								fill: "none",
								viewBox: "0 0 24 24",
								"stroke-width": "1.5",
								stroke: "currentColor",
								width: "20",
								role: "img",
								"aria-hidden": "true",
								children: g("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									d: "M4.5 15.75l7.5-7.5 7.5 7.5",
								}),
							}),
						}),
						t,
						g("button", {
							className: "scroll-area-down",
							onClick: l,
							"aria-label": "Scroll down",
							type: "button",
							children: g("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								fill: "none",
								viewBox: "0 0 24 24",
								"stroke-width": "1.5",
								stroke: "currentColor",
								width: "20",
								role: "img",
								"aria-hidden": "true",
								children: g("path", {
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
								}),
							}),
						}),
					],
				});
	}
	const y0 = ({ className: e, ...t }) =>
			g("svg", {
				width: "18",
				height: "18",
				viewBox: "0 0 25 25",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				role: "img",
				...t,
				children: [
					g("title", { children: "Maximize" }),
					g("path", { d: "M15.084 3.5H21.084V9.5", className: e }),
					g("path", { d: "M9.08398 21.5H3.08398V15.5", className: e }),
					g("path", { d: "M21.084 3.5L14.084 10.5", className: e }),
					g("path", { d: "M3.08398 21.5L10.084 14.5", className: e }),
				],
			}),
		v0 = ({ className: e, title: t }) =>
			g("svg", {
				width: "18",
				height: "18",
				viewBox: "0 0 16 17",
				xmlns: "http://www.w3.org/2000/svg",
				role: "img",
				className: e,
				children: [
					g("title", { children: t ?? "Minimize" }),
					g("path", {
						d: "M4 6.5L8 10.5L12 6.5",
						"stroke-width": "2",
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
					}),
				],
			}),
		fi = ({ className: e, ...t }) =>
			g("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				fill: "currentColor",
				className: `size-4 inline-block ${e ?? ""}`,
				"aria-hidden": "true",
				...t,
				children: g("path", {
					fillRule: "evenodd",
					d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
					clipRule: "evenodd",
				}),
			});
	function b0({ onClose: e, visible: t }) {
		return t
			? g("button", {
					type: "button",
					className:
						" p-2 h-10 w-10 flex items-center justify-center text-text text-lg hover:bg-action/10 focus-visible:outline-action focus-visible:outline-2 focus-visible:outline-offset-2 ",
					onClick: e,
					children: "×",
				})
			: null;
	}
	function w0({ languages: e, currentLanguage: t, onChange: n }) {
		const [r, o] = ae(!1),
			i = Q(null),
			s = Q(null),
			a = Q(null);
		ne(() => {
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
			ne(() => {
				if (!r) return;
				const d = (u) => {
					u.key === "Escape" && o(!1);
				};
				return (
					document.addEventListener("keydown", d),
					() => document.removeEventListener("keydown", d)
				);
			}, [r]);
		const c = e.find((d) => d.code === t),
			l = e.filter((d) => d.code !== t);
		return (
			ne(() => {
				const d = a.current,
					u = s.current;
				if (!d || !u) return;
				if (!r) {
					d.matches(":popover-open") && d.hidePopover();
					return;
				}
				d.showPopover();
				const p = () => {
					var ye;
					const y = u.getBoundingClientRect(),
						b = 4,
						v = 8,
						_ = y.top - b - v,
						x = window.innerHeight - y.bottom - b - v,
						C =
							(ye = u.closest(".survey-content")) == null
								? void 0
								: ye.getBoundingClientRect(),
						I = C ? C.bottom - y.bottom - b : 0,
						S = Math.min(d.scrollHeight, 256),
						$ = I >= S,
						N = _ >= S,
						B = $ || (!N && x > _),
						O = B ? Math.min(x, I || x) : _;
					(d.style.maxHeight = `${Math.max(64, O)}px`),
						(d.style.minWidth = `${y.width}px`);
					const M = d.getBoundingClientRect(),
						F = B ? y.bottom + b : y.top - M.height - b,
						fe = Math.min(Math.max(v, y.left), window.innerWidth - M.width - v);
					(d.style.top = `${Math.max(v, F)}px`),
						(d.style.left = `${Math.max(v, fe)}px`);
				};
				p();
				const f = requestAnimationFrame(p),
					m = new ResizeObserver(p);
				return (
					m.observe(d),
					window.addEventListener("resize", p),
					window.addEventListener("scroll", p, !0),
					() => {
						cancelAnimationFrame(f),
							m.disconnect(),
							window.removeEventListener("resize", p),
							window.removeEventListener("scroll", p, !0);
					}
				);
			}, [r]),
			e.length <= 1
				? null
				: g("div", {
						ref: i,
						className: "min-w-0 max-w-[calc(100%-5rem)] text-sm text-text",
						children: [
							g("button", {
								ref: s,
								type: "button",
								onClick: () => o((d) => !d),
								className:
									" h-8 max-w-full w-max pl-4 pr-5 flex items-center gap-2 bg-bg rounded-br-md border-b border-r hover:bg-action/10 focus-visible:outline-action focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer ",
								"aria-label": "Select language",
								"aria-haspopup": "menu",
								"aria-expanded": r,
								children: [
									g("span", { "aria-hidden": "true", children: "🌐" }),
									g("span", {
										className: "font-medium whitespace-nowrap truncate",
										children: (c == null ? void 0 : c.name) || t,
									}),
								],
							}),
							g("div", {
								ref: a,
								popover: "manual",
								role: "menu",
								style: { boxShadow: "0 8px 24px rgb(0 0 0 / 0.18)" },
								className:
									" fixed m-0 p-0 z-50 w-max max-w-[calc(100vw-1rem)] overflow-x-hidden overflow-y-auto text-sm text-text bg-bg rounded-md border ",
								children: l.map((d) =>
									g(
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
												g("span", { "aria-hidden": "true", children: "🌐" }),
												g("span", { children: d.name }),
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
	const _0 = Dr("", {
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
	function Ve({ className: e, type: t, color: n, size: r, as: o = "p", ...i }) {
		return g(o, {
			className: _0({ type: t, color: n, size: r, className: e }),
			...i,
		});
	}
	const Fc = Dr(
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
	function Zc(e) {
		return e
			? {
					onKeyDown: (t) => {
						t.key === "Enter" && t.metaKey && e && e();
					},
				}
			: {};
	}
	function Zr({ label: e, className: t, metaEnter: n, style: r, ...o }) {
		return g("label", {
			class: "flex flex-col gap-1",
			children: [
				g("span", { className: "font-bold text-xs", children: e }),
				g("input", {
					className: Fc({ className: t }),
					style: {
						borderRadius: "var(--skyra-radius-md, var(--skyra-radius-lg, 4px))",
						...(typeof r == "object" ? r : {}),
					},
					...Zc(n),
					...o,
				}),
			],
		});
	}
	const k0 = ({ label: e, className: t, metaEnter: n, style: r, ...o }) =>
			g("label", {
				class: "flex flex-col gap-1",
				children: [
					g("span", { className: "font-bold text-xs", children: e }),
					g("textarea", {
						className: Fc({ className: t }),
						style: {
							borderRadius:
								"var(--skyra-radius-md, var(--skyra-radius-lg, 4px))",
							...(typeof r == "object" ? r : {}),
						},
						...Zc(n),
						...o,
					}),
				],
			}),
		$e = ({
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
			var Qc;
			const f = so(),
				{ currentCard: m } = td(),
				y = ve(f, (We) => We.context.language),
				b = Gn(),
				v = lc(b),
				_ = b.renderType === "Inline",
				x = t ? "form" : "div",
				C = Q(null);
			ne(() => {
				C.current && C.current.focus();
			}, [m]);
			const I = ve(f, (We) => We.matches({ Running: "Minimized" })),
				S = b.cards.find(({ order: We }) => We === m);
			if (!S) return null;
			const $ = ((Qc = b.cards.at(-1)) == null ? void 0 : Qc.id) === S.id,
				N = b.renderType === "Inline",
				B = b.renderType === "Inline" || b.surveyType === "Findability",
				O = ($ && S.type === "MessageCard") || B,
				M = b.showCloseButton !== !1 && (l ?? !0) && !I && !B,
				F = p || `skyra-card-${b.slug}`,
				ye = {
					onKeyUp: d,
					tabIndex: -1,
					...(!u && { "aria-labelledby": F }),
					...(t && { onSubmit: (We) => We.preventDefault(), name: b.name }),
				},
				Ne = () => {
					f.send({ type: "minimize" });
				},
				G0 = () => {
					f.send({ type: "maximize" });
				},
				Xc = !(_ || O),
				Y0 =
					S.type === "LikertCard" && S.likertScale.likertItems.length >= 5
						? "Large"
						: "Regular",
				X0 = { Minimal: 300, Large: 500, Regular: 400 };
			return N
				? g("div", {
						ref: C,
						className: "flex flex-col",
						children: g(x, {
							...ye,
							className: "flex flex-col gap-2 md:gap-4 w-full text-text",
							children: [
								g(Ve, {
									part: "heading",
									as: "h2",
									type: "heading",
									id: F,
									children: e,
								}),
								Uc(r, n),
								o && g("div", { children: o }),
								c.length > 0 && g(Hc, { spacing: s, layout: a, actions: c }),
							],
						}),
					})
				: g("div", {
						ref: C,
						"data-minimized": I,
						className: "survey-container",
						style: { "--card-max-width": `${X0[Y0]}px` },
						children: [
							g("div", {
								className: "survey-content relative",
								children: [
									Xc &&
										g("header", {
											className:
												"absolute top-0 right-0 left-0 flex justify-between items-start z-10",
											children: [
												v.length > 1 &&
													g(w0, {
														languages: v,
														currentLanguage: y,
														onChange: (We) => {
															f.send({ type: "setLanguage", language: We });
														},
													}),
												g("div", {
													className: "flex ml-auto",
													children: [
														g(S0, { onMinimize: Ne, texts: i }),
														g(b0, {
															onClose: () => f.send({ type: "reject" }),
															visible: M,
														}),
													],
												}),
											],
										}),
									g(x, {
										...ye,
										className: `flex flex-col gap-2 md:gap-4 w-full text-text px-4 md:px-6 pb-4 md:pb-6 ${Xc ? "pt-10" : "pt-4 md:pt-6"}`,
										children: [
											g(Ve, {
												part: "heading",
												as: "h2",
												type: "heading",
												id: F,
												children: e,
											}),
											Uc(r, n),
											o && g("div", { children: o }),
											c.length > 0 &&
												g(Hc, { spacing: s, layout: a, actions: c }),
										],
									}),
								],
							}),
							g("button", {
								type: "button",
								className: "survey-pill",
								onClick: G0,
								children: [
									g("span", {
										className: "flex-1 text-left whitespace-nowrap",
										children: (i == null ? void 0 : i.minimized) ?? e,
									}),
									g(y0, { className: "stroke-current fill-transparent" }),
								],
							}),
						],
					});
		};
	function S0({ onMinimize: e, texts: t }) {
		return g("button", {
			type: "button",
			className:
				" p-2 h-10 w-10 flex items-center justify-center text-text text-lg hover:bg-action/10 focus-visible:outline-action focus-visible:outline-2 focus-visible:outline-offset-2 ",
			onClick: e,
			children: g(v0, {
				title: (t == null ? void 0 : t.hide) ?? "Minimize",
				className: "stroke-current fill-transparent",
			}),
		});
	}
	function Hc({
		spacing: e = "between",
		layout: t = "horizontal",
		actions: n = [],
	}) {
		const r = n.filter((o) => o.if !== !1);
		return g("div", {
			className: `
        flex w-full items-center
        ${t === "vertical" ? "flex-col gap-2 items-start" : "flex-row"}
        ${e === "between" ? "flex-wrap gap-3" : "gap-4"}
      `,
			children: r.map((o) => {
				const i = (o.type ?? "primary") === "primary",
					s = e === "between" && t === "horizontal" && i;
				return g(
					yt,
					{
						type: "button",
						variant: o.type ?? "primary",
						disabled: o.disabled,
						onClick: o.action,
						className: `${s ? "ms-auto" : ""} ${o.className ?? ""}`.trim(),
						children: o.label,
					},
					o.key,
				);
			}),
		});
	}
	function Uc(e, t) {
		return e
			? g("div", {
					part: "bodyHtml",
					className: "body-content",
					dangerouslySetInnerHTML: { __html: e },
				})
			: t
				? g(Ve, { part: "description", className: "body-content", children: t })
				: null;
	}
	function x0({
		card: e,
		next: t,
		prev: n,
		sessionId: r,
		survey: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		Ue("top task card", e);
		const c = e.randomize ? Ar(e.taskItems ?? [], r) : (e.taskItems ?? []),
			l = Te(o, e, { finalCard: a }),
			d = `skyra-card-${e.id}`,
			u = typeof i == "string" ? i : void 0,
			p = (f) => {
				const m = f && f.trim() !== "" ? f : "";
				t == null || t(m);
			};
		return g(
			$e,
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
				children: g("fieldset", {
					className: "m-0 border-0 p-0 min-w-0",
					"aria-labelledby": d,
					children: g(Fr, {
						children: g("div", {
							part: "options",
							className: `flex ${e.optionsLayout === "horizontal" ? "flex-row flex-wrap gap-2 p-1" : "flex-col items-start gap-1 md:gap-2"}`,
							children: c.map((f) => {
								const y = J(f.task.id) === u;
								return g(
									yt,
									{
										type: "button",
										variant: "chip",
										"data-selected": y,
										"aria-pressed": y ? "true" : "false",
										onClick: () => {
											p(f.task.id);
										},
										children: [y && g(fi, { className: "mr-1.5" }), f.label],
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
	function C0({
		card: e,
		next: t,
		prev: n,
		survey: r,
		finalCard: o,
		firstCard: i,
		close: s,
	}) {
		const a = Te(r, e, { finalCard: o }),
			c = uc(r, e, { firstCard: i, finalCard: o }),
			l = r.surveyType === "Findability",
			d = c
				? { key: "decline", type: "secondary", label: c, action: s }
				: i
					? null
					: {
							key: "prev",
							type: "link",
							label: a.back,
							if: !l,
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
					if: !l,
				},
			],
			p = `skyra-card-${e.id}`;
		return g(
			$e,
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
	function z0({
		card: e,
		next: t,
		minimize: n,
		survey: r,
		finalCard: o,
		isInline: i,
	}) {
		const s = Te(r, e, { finalCard: o }),
			a = `skyra-card-${e.id}`,
			c = e.optionsLayout === "horizontal";
		return c
			? g(
					$e,
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
			: g(
					$e,
					{
						isForm: !1,
						heading: e.name,
						cardId: a,
						body: e.body,
						bodyHtml: e.bodyHtml,
						texts: s,
						children: g("div", {
							className: "flex w-full flex-col gap-2",
							children: [
								g(yt, {
									type: "button",
									className: "self-start",
									onClick: () => t(!0),
									children: e.positive,
								}),
								g("div", {
									className: "flex w-full items-center gap-4",
									children: [
										g(yt, {
											type: "button",
											onClick: () => t(!1),
											children: e.negative,
										}),
										!i &&
											g(yt, {
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
	function hi({
		id: e,
		message: t,
		type: n = "validation",
		color: r = "error",
		className: o = "",
	}) {
		return t
			? g(Ve, {
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
	function T0(e, t) {
		return (n) => {
			(e.value = n.target.value), t == null || t(e.value);
		};
	}
	function I0({
		card: e,
		next: t,
		prev: n,
		survey: r,
		value: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		const c = Me(!1),
			l = Me(!1),
			u = Me(typeof i == "string" ? i : typeof o == "string" ? o : ""),
			p = u.value.length,
			f = Je(),
			m = $t(),
			y = (e == null ? void 0 : e.minLength) ?? 0,
			b = (e == null ? void 0 : e.maxLength) ?? void 0,
			v = Cs({
				content: u.value,
				card: { minLength: y, maxLength: b, validations: e.validations },
				hasBeenTouched: c.value,
				language: m,
			}),
			_ = v.valid,
			x = e.multiline ? k0 : Zr,
			C = Te(r, e, { finalCard: a }),
			I = `skyra-card-${e.id}`,
			S = `${I}-length-instruction`,
			$ = `${I}-error`,
			N = v.status === "under-minimum",
			B = l.value && N,
			O = !_ && l.value,
			M = l.value && !N && !!v.errorMessage,
			F = _s({ min: y, max: b, language: m });
		function fe() {
			(c.value = !0), (l.value = !0), (f.value = _), _ && t(u.value);
		}
		const ye = r.surveyType === "Findability";
		return g(
			$e,
			{
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: C,
				cardId: I,
				actions: [
					{
						key: "prev",
						action: () => n(),
						type: "link",
						label: C.back,
						if: !(s || ye),
					},
					{ key: "next", action: fe, label: C.next },
				],
				children: [
					g(x, {
						id: e.id,
						label: e.label ?? void 0,
						"aria-invalid": O ? "true" : void 0,
						"aria-describedby":
							N && F
								? S
								: M
									? $
									: F
										? S
										: typeof b == "number"
											? `${I}-char-count`
											: void 0,
						placeholder: e.placeholder,
						value: u.value,
						autoComplete: "off",
						onInput: T0(u, () => {
							c.value = !0;
						}),
						onKeyDown: (Ne) => {
							Ne.key === "Enter" &&
								(!e.multiline || Ne.metaKey) &&
								(Ne.preventDefault(), fe());
						},
						required: y > 0,
						minLength: y,
						maxLength: b,
						name: "value",
						type: "text",
					}),
					g("div", {
						className: "flex justify-between mt-1",
						children: [
							F && !M
								? g(Ve, {
										id: S,
										type: "small",
										color: B ? v.color : void 0,
										role: B ? "alert" : void 0,
										"aria-live": B ? "polite" : void 0,
										children: F,
									})
								: M && v.errorMessage
									? g(hi, {
											id: $,
											message: v.errorMessage,
											type: "character-limit",
											color: v.color,
										})
									: g("span", {}),
							typeof b == "number" &&
								g(Ve, {
									id: `${I}-char-count`,
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
	function Vc({
		className: e,
		onCheckedChange: t,
		checked: n,
		disabled: r,
		...o
	}) {
		const [i, s] = ae(!1);
		return g("input", {
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
	function $0({
		className: e,
		size: t,
		disabled: n,
		blocked: r,
		onCheckedChange: o,
		checked: i,
		children: s,
		...a
	}) {
		return g("label", {
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
				g(Vc, {
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
	function mi(e = "", t = "text") {
		const n = Me({
				value: e,
				valid: e ? R0(e, t) : null,
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
	function R0(e, t) {
		return t === "email"
			? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
			: t === "tel"
				? e.length > 0
				: !0;
	}
	function E0({
		card: e,
		survey: t,
		firstCard: n,
		finalCard: r,
		next: o,
		prev: i,
		close: s,
		storedValue: a,
	}) {
		const c = Je(),
			l = $t(),
			d = typeof a == "object" && a !== null ? a : void 0,
			u = mi((d == null ? void 0 : d.email) || "", "email"),
			p = mi((d == null ? void 0 : d.phone) || "", "tel"),
			f = mi((d == null ? void 0 : d.name) || "", "text"),
			m = Me((d == null ? void 0 : d.consented) ?? !1),
			y = Me(!1),
			b = Te(t, e, { finalCard: r }),
			v = qn({
				email: { value: u.value, valid: u.valid ?? !1 },
				name: { value: f.value },
				phone: { value: p.value },
				consented: m.value,
				consentEnable: !!e.consentEnable,
				isRequired: !!e.isRequired,
				hasBeenSubmitted: y.value,
				language: l,
			}),
			_ = v.status === "email-invalid",
			x = v.status === "consent-required" || v.status === "email-required",
			C = u.value || f.value || p.value;
		function I() {
			const $ = qn({
				email: { value: u.value, valid: u.valid ?? !1 },
				name: { value: f.value },
				phone: { value: p.value },
				consented: m.value,
				consentEnable: !!e.consentEnable,
				isRequired: !!e.isRequired,
				hasBeenSubmitted: !0,
				language: l,
			});
			(y.value = !0),
				(c.value = $.valid),
				$.valid &&
					o(
						C
							? {
									email: u.value,
									phone: p.value,
									name: f.value,
									consented: m.value,
								}
							: void 0,
					);
		}
		const S = `skyra-card-${e.id}`;
		return g(
			$e,
			{
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: b,
				skipWrapperLabeling: !0,
				cardId: S,
				actions: [
					{ key: "prev", action: i, type: "link", if: !n, label: b.back },
					{ key: "next", action: I, label: b.next },
				],
				children: g("fieldset", {
					"aria-labelledby": S,
					children: [
						g("legend", {
							className: "sr-only",
							children: "Enter your contact information",
						}),
						g("div", {
							className: "flex flex-col gap-2",
							children: [
								e.nameEnable &&
									g(Zr, {
										name: "name",
										autocomplete: "name",
										label: e.nameLabel ?? "Name",
										placeholder: e.namePlaceholder ?? void 0,
										value: f.value,
										onInput: f.onInput,
									}),
								e.email &&
									g(Zr, {
										label: e.email_label
											? `${e.email_label} ${e.isRequired || (e.consentEnable && m.value) ? "*" : ""}`
											: `Email ${e.isRequired || (e.consentEnable && m.value) ? "*" : ""}`,
										placeholder: e.email_placeholder ?? void 0,
										value: u.value,
										"aria-invalid": _ ? "true" : void 0,
										"aria-describedby": _ ? `${S}-email-error` : void 0,
										onInput: u.onInput,
										onBlur: u.onBlur,
										autocomplete: "email",
										name: "email",
										type: "email",
									}),
								e.phone &&
									g(Zr, {
										label: e.phone_label ?? "Phone",
										placeholder: e.phone_placeholder ?? void 0,
										value: p.value,
										onInput: p.onInput,
										autocomplete: "tel",
										name: "phone",
										type: "tel",
									}),
								_ &&
									g(hi, {
										id: `${S}-email-error`,
										message: v.errorMessage,
										type: "validation",
										color: v.color,
									}),
								e.consentEnable &&
									g(Ee, {
										children: [
											g(Ve, {
												type: "small",
												className:
													"flex flex-col gap-0 items-center text-center",
												children: [
													e.consentTermsText,
													e.consentTermsUrl &&
														g("a", {
															href: e.consentTermsUrl,
															target: "_blank",
															rel: "noopener noreferrer",
															className: Bc({
																variant: "link",
																size: "default",
																className:
																	"p-0! font-bold pl-0.5 whitespace-nowrap",
															}),
															children: e.consentTermsTitle,
														}),
												],
											}),
											g(Ve, {
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
													g(Vc, {
														name: "consent",
														checked: m.value,
														onCheckedChange: ($) => {
															m.value = $;
														},
													}),
													g("span", {
														children: [
															e.consentTermsLabel,
															(e.isRequired || C) &&
																g("span", {
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
							? g(hi, {
									id: `${S}-error`,
									message: v.errorMessage,
									type: "validation",
									color: v.color,
								})
							: g("div", { className: "h-4" }),
					],
				}),
			},
			e.id,
		);
	}
	function M0({
		card: e,
		next: t,
		prev: n,
		sessionId: r,
		survey: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		const c = e.randomize ? Ar(e.items, r) : e.items,
			l = Te(o, e, { finalCard: a }),
			d = `skyra-card-${e.id}`,
			u = typeof i == "string" ? i : void 0,
			p = (f, m) => {
				const y = f && f.trim() !== "" ? f : "";
				t == null || t(y, m);
			};
		return g(
			$e,
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
				children: g("fieldset", {
					className: "m-0 border-0 p-0 min-w-0",
					"aria-labelledby": d,
					children: g(Fr, {
						children: g("div", {
							part: "options",
							className: `flex ${e.optionsLayout === "horizontal" ? "flex-row flex-wrap gap-2 p-1" : "flex-col items-start gap-1 md:gap-2"}`,
							children: c.map((f) => {
								const y = J(f.value.id) === u;
								return g(
									yt,
									{
										type: "button",
										variant: "chip",
										"data-selected": y,
										"aria-pressed": y ? "true" : "false",
										onClick: () => {
											p(f.value.id, e.segment.id);
										},
										children: [y && g(fi, { className: "mr-1.5" }), f.label],
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
	function P0({ className: e, value: { name: t, native: n } }) {
		return g("span", {
			className: `inline ${e}`,
			role: "img",
			"aria-label": t,
			"aria-hidden": t ? "false" : "true",
			children: n,
		});
	}
	const L0 = Dr(
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
	function Wc({ className: e, size: t, ...n }) {
		return g("input", {
			type: "radio",
			className: L0({ size: t, className: e }),
			...n,
		});
	}
	function A0({
		card: e,
		next: t,
		prev: n,
		survey: r,
		storedValue: o,
		firstCard: i,
		finalCard: s,
	}) {
		var I;
		const a = e.likertScale;
		if (!("likertItems" in a)) return null;
		const c = a.likertItems,
			l =
				(typeof o == "string" &&
					((I = c.find((S) => J(S.id) === o)) == null ? void 0 : I.id)) ||
				"",
			d = Me(l),
			u = Te(r, e, { finalCard: s }),
			p = e.showEmoji && c.every((S) => !!S.emoji),
			f = (S) => {
				(d.value = S), t(S, e.id);
			},
			m = (S, $) => {
				var O, M;
				let N;
				switch (S.key) {
					case "ArrowLeft":
					case "ArrowUp":
						N = ($ - 1 + c.length) % c.length;
						break;
					case "ArrowRight":
					case "ArrowDown":
						N = ($ + 1) % c.length;
						break;
					case "Home":
						N = 0;
						break;
					case "End":
						N = c.length - 1;
						break;
					case "Enter":
						S.preventDefault(), f(c[$].id);
						return;
					default:
						return;
				}
				S.preventDefault(), (d.value = c[N].id);
				const B =
					(O = S.currentTarget.closest('[role="radiogroup"]')) == null
						? void 0
						: O.querySelectorAll('input[type="radio"]');
				(M = B == null ? void 0 : B[N]) == null || M.focus();
			},
			y = [
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
			C = `skyra-card-${e.id}`;
		return g(
			$e,
			{
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: u,
				actions: y,
				skipWrapperLabeling: !0,
				cardId: C,
				children: g("fieldset", {
					"aria-labelledby": C,
					children: [
						g("legend", {
							className: "sr-only",
							children: "Select your rating",
						}),
						g("div", {
							className: _,
							role: "radiogroup",
							"aria-labelledby": C,
							children: c.map((S, $) => {
								const N = S.id == d.value;
								return p
									? g(
											"label",
											{
												part: "list-item",
												className: `
                  cursor-pointer
                  ${b ? "flex flex-col items-center gap-0.5 text-center" : "flex flex-row items-center gap-2 justify-start"}
                  py-0.5
                  px-1
                  rounded-sm
                  ${N ? "bg-action text-bg" : ""}
                  hover:ring-action hover:ring-offset-2
                  hover:ring-offset-bg hover:ring-2

                  focus-within:ring-action focus-within:ring-offset-2
                  focus-within:ring-offset-bg focus-within:ring-2
                `,
												children: [
													S.emoji &&
														g(P0, {
															value: S.emoji,
															className: b ? "text-4xl" : "text-2xl",
														}),
													b
														? g("input", {
																type: "radio",
																id: S.id,
																name: e.id,
																value: S.id,
																checked: N,
																className: "appearance-none",
																onClick: () => f(S.id),
																onKeyDown: (B) => m(B, $),
															})
														: g(Wc, {
																id: S.id,
																name: e.id,
																value: S.id,
																checked: N,
																onClick: () => f(S.id),
																onKeyDown: (B) => m(B, $),
															}),
													g("span", {
														className: "text-xs font-semibold",
														children: S.label,
													}),
												],
											},
											$,
										)
									: g(
											"label",
											{
												part: "list-item",
												className: `${x} cursor-pointer`,
												children: [
													g(Wc, {
														id: S.id,
														name: e.id,
														value: S.id,
														checked: N,
														onClick: () => f(S.id),
														onKeyDown: (B) => m(B, $),
													}),
													g("span", {
														className: "text-xs font-semibold text-center",
														children: S.label,
													}),
												],
											},
											$,
										);
							}),
						}),
					],
				}),
			},
			e.id,
		);
	}
	function O0(e) {
		return g("kbd", {
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
	const qc = "ABCDEFGHJKMNPQRSTVWXYZ".split("");
	function N0(e, t) {
		switch (t.type) {
			case "toggle": {
				const n = $s({
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
	function j0({
		card: e,
		next: t,
		prev: n,
		sessionId: r,
		survey: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		Ue("multiselect card", e);
		const c = Je(),
			l = $t(),
			u = (e.randomize ? Ar(e.selectItems, r) : e.selectItems).map((O, M) => ({
				...O,
				order: M,
			})),
			p = Array.isArray(i)
				? new Set(
						i
							.map((O) => {
								var M;
								return (M = u.find((F) => J(F.id) === O)) == null
									? void 0
									: M.id;
							})
							.filter(Boolean),
					)
				: new Set(),
			[f, m] = Hi(N0, { selected: p, dirty: !1, limitAttempted: !1 }),
			[y, b] = ae(!1),
			v = Ui(
				(O) => {
					const M = O.currentTarget,
						F = O.target,
						fe = O.key.toUpperCase();
					if (M.contains(F)) {
						const ye = qc.indexOf(fe);
						if (ye >= 0 && ye < u.length) {
							const Ne = u[ye];
							m({ type: "toggle", id: Ne.id, max: e.max ?? void 0 });
						}
					}
				},
				[e.max, u],
			),
			_ = Wn({
				selectedCount: f.selected.size,
				card: { min: e.min ?? void 0, max: e.max ?? void 0 },
				hasBeenSubmitted: y,
				language: l,
			}),
			x = Ss({
				min: e.min ?? void 0,
				max: e.max ?? void 0,
				totalOptions: u.length,
				language: l,
			}),
			C = e.max ? ks({ max: e.max, language: l }) : null,
			I = f.limitAttempted
				? C
				: _.status === "over-max" || (y && !_.valid)
					? _.errorMessage
					: x,
			S = f.limitAttempted || _.status === "over-max" || (y && !_.valid),
			$ = Te(o, e, { finalCard: a }),
			N = `skyra-card-${e.id}`;
		function B() {
			const O = Wn({
				selectedCount: f.selected.size,
				card: { min: e.min ?? void 0, max: e.max ?? void 0 },
				hasBeenSubmitted: !0,
				language: l,
			});
			if ((b(!0), (c.value = O.valid), O.valid)) {
				const M = f.selected.size > 0 ? Array.from(f.selected) : [];
				t(M);
			}
		}
		return g(
			$e,
			{
				onKeyUp: v,
				heading: e.name,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: $,
				skipWrapperLabeling: !0,
				cardId: N,
				actions: [
					{
						key: "prev",
						action: () => (n == null ? void 0 : n()),
						label: $.back,
						type: "link",
						if: !s,
					},
					{ key: "next", action: B, label: $.next },
				],
				children: g("fieldset", {
					"aria-labelledby": N,
					"aria-describedby": I ? `${N}-feedback` : void 0,
					"aria-invalid": S ? "true" : void 0,
					children: [
						g(Fr, {
							children: g("div", {
								part: "options",
								className: `flex ${e.optionsLayout === "horizontal" ? "flex-row flex-wrap gap-2 p-1 -m-1" : "flex-col items-stretch gap-1 md:gap-2"}`,
								children: u.map((O) => {
									const M = f.selected.has(O.id),
										F = !!(e.max && f.selected.size >= e.max && !M);
									return g(
										$0,
										{
											checked: M,
											blocked: F,
											onCheckedChange: () => {
												m({ type: "toggle", id: O.id, max: e.max ?? void 0 });
											},
											children: [
												g("span", { children: O.label }),
												g(O0, { children: qc[O.order] }),
											],
										},
										O.id,
									);
								}),
							}),
						}),
						I
							? g("div", {
									class: "my-2 shrink-0",
									children: g(Ve, {
										type: "small",
										color: S ? "error" : void 0,
										role: S ? "alert" : void 0,
										id: `${N}-feedback`,
										children: I,
									}),
								})
							: null,
					],
				}),
			},
			e.id,
		);
	}
	function B0({ card: e, next: t, survey: n, finalCard: r }) {
		const o = `skyra-card-${e.id}`;
		return g(
			$e,
			{
				isForm: !1,
				heading: e.name,
				cardId: o,
				body: e.body,
				bodyHtml: e.bodyHtml,
				texts: Te(n, e, { finalCard: r }),
				actionsSpacing: "tight",
				actions: [
					{ key: "accept", action: () => t(!0), label: e.positive },
					{ key: "decline", action: () => t(!1), label: e.negative },
				],
			},
			e.id,
		);
	}
	function D0({
		card: e,
		next: t,
		prev: n,
		sessionId: r,
		survey: o,
		storedValue: i,
		firstCard: s,
		finalCard: a,
	}) {
		const c = e.randomize ? Ar(e.selectItems, r) : e.selectItems,
			l = Te(o, e, { finalCard: a }),
			d = `skyra-card-${e.id}`,
			u = typeof i == "string" ? i : void 0,
			p = (f) => {
				const m = f && f.trim() !== "" ? f : "";
				t == null || t(m);
			};
		return g(
			$e,
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
				children: g("fieldset", {
					className: "m-0 border-0 p-0 min-w-0",
					"aria-labelledby": d,
					children: g(Fr, {
						children: g("div", {
							part: "options",
							className: `flex ${e.optionsLayout === "horizontal" ? "flex-row flex-wrap gap-2 p-1" : "flex-col items-start gap-1 md:gap-2"}`,
							children: c.map((f) => {
								const y = J(f.id) === u;
								return g(
									yt,
									{
										type: "button",
										variant: "chip",
										"data-selected": y,
										"aria-pressed": y ? "true" : "false",
										onClick: () => {
											p(f.id);
										},
										children: [y && g(fi, { className: "mr-1.5" }), f.label],
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
	function F0({ card: e, ...t }) {
		const n = Gn(),
			r = n.renderType === "Inline",
			o = { ...t, survey: n };
		switch (e.type) {
			case "TopTaskCard":
				return g(x0, { card: e, ...o });
			case "MessageCard":
				return g(C0, { card: e, ...o });
			case "CompletionCard":
				return g(z0, { card: e, ...o, isInline: r });
			case "FindabilityCard":
				return g(B0, { card: e, ...o });
			case "RecruitmentCard":
				return g(E0, { card: e, ...o });
			case "InputCard":
				return g(I0, { card: e, ...o });
			case "SegmentCard":
				return g(M0, { card: e, ...o });
			case "LikertCard":
				return g(A0, { card: e, ...o });
			case "MultiSelectCard":
				return g(j0, { card: e, ...o });
			case "SingleSelectCard":
				return g(D0, { card: { ...e, type: "SingleSelectCard" }, ...o });
			default:
				throw new Error(`Unknown card type: ${e.type}`);
		}
	}
	const Z0 = `/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:"";--tw-outline-style:solid}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--spacing:4px;--container-6xl:1152px;--text-xs--line-height:calc(1/.75);--text-sm--line-height:calc(1.25/.875);--text-base:16px;--text-base--line-height: 1.5 ;--text-lg--line-height:calc(1.75/1.125);--text-xl:20px;--text-xl--line-height:calc(1.75/1.25);--text-2xl:24px;--text-2xl--line-height:calc(2/1.5);--text-3xl:30px;--text-3xl--line-height: 1.2 ;--text-4xl:36px;--text-4xl--line-height:calc(2.5/2.25);--text-5xl:48px;--text-5xl--line-height:1;--text-6xl:60px;--text-6xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--leading-tight:1.25;--ease-out:cubic-bezier(0,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentColor}::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components{:host{--skyra-bg-color:#f5f7fa;--skyra-text-color:#012a53;--skyra-interface-color:#315386;--skyra-border-color:var(--skyra-interface-color);--skyra-action-color:#002052;--skyra-action-text-color:var(--skyra-bg-color);--skyra-minimized-bg:#002052;--skyra-minimized-text:#fff;--skyra-minimized-border:#106eff;--skyra-minimized-shadow:0px 0px 20px 4px #013d9666;--skyra-secondary-color:#dde7f7;--skyra-link-color:blue;--skyra-error-color:#ca0a15;--skyra-warning-color:#92400e;--skyra-focus-color:var(--skyra-action-color);--skyra-border-style:solid;--skyra-border-width:1px;--skyra-radius-sm:4px;--skyra-radius-md:6px;--skyra-radius-lg:8px;--skyra-radius-pill:999px;--skyra-focus-ring-style:solid;--skyra-focus-ring-width:2px;--skyra-focus-ring-offset:2px;--skyra-shadow-sm:none;--skyra-shadow-md:none;--skyra-shadow-lg:none;--skyra-z-index:2147480000;--skyra-font-heading:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--skyra-font-body:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--skyra-option-list-max-height:400px;--skyra-body-max-height:none;font-size:var(--skyra-font-size,16px);background:var(--skyra-bg-color)}:host li{margin-left:24px;list-style-type:disc}:host a{color:var(--skyra-link-color);text-decoration:underline}.body-content{max-height:var(--skyra-body-max-height,none);overflow-y:auto}}@layer utilities{.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-x-0{inset-inline:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.right-0{right:calc(var(--spacing)*0)}.right-auto{right:auto}.bottom-0{bottom:calc(var(--spacing)*0)}.left-0{left:calc(var(--spacing)*0)}.left-auto{left:auto}.z-0{z-index:0}.z-10{z-index:10}.z-50{z-index:50}.z-wrapper{z-index:var(--skyra-z-index)}.container{width:100%}@media(min-width:40rem){.container{max-width:640px}}@media(min-width:48rem){.container{max-width:768px}}@media(min-width:64rem){.container{max-width:1024px}}@media(min-width:80rem){.container{max-width:1280px}}@media(min-width:96rem){.container{max-width:1536px}}.-m-1{margin:calc(var(--spacing)*-1)}.m-0{margin:calc(var(--spacing)*0)}.m-2{margin:calc(var(--spacing)*2)}.m-auto{margin:auto}.mx-2{margin-inline:calc(var(--spacing)*2)}.mx-auto{margin-inline:auto}.my-2{margin-block:calc(var(--spacing)*2)}.my-4{margin-block:calc(var(--spacing)*4)}.my-5{margin-block:calc(var(--spacing)*5)}.ms-auto{margin-inline-start:auto}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-8{margin-top:calc(var(--spacing)*8)}.mt-10{margin-top:calc(var(--spacing)*10)}.mt-12{margin-top:calc(var(--spacing)*12)}.mr-1\\.5{margin-right:calc(var(--spacing)*1.5)}.mr-auto{margin-right:auto}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.mb-10{margin-bottom:calc(var(--spacing)*10)}.ml-0\\.5{margin-left:calc(var(--spacing)*.5)}.ml-auto{margin-left:auto}.\\!inline{display:inline!important}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.list-item{display:list-item}.table{display:table}.aspect-square{aspect-ratio:1}.size-3\\.5{width:calc(var(--spacing)*3.5);height:calc(var(--spacing)*3.5)}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-8{width:calc(var(--spacing)*8);height:calc(var(--spacing)*8)}.size-11{width:calc(var(--spacing)*11);height:calc(var(--spacing)*11)}.h-2{height:calc(var(--spacing)*2)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-48{height:calc(var(--spacing)*48)}.h-\\[50px\\]{height:50px}.h-\\[100px\\]{height:100px}.h-full{height:100%}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-5{width:calc(var(--spacing)*5)}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-20{width:calc(var(--spacing)*20)}.w-32{width:calc(var(--spacing)*32)}.w-48{width:calc(var(--spacing)*48)}.w-\\[400px\\]{width:400px}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.w-screen{width:100vw}.max-w-6xl{max-width:var(--container-6xl)}.max-w-\\[400px\\]{max-width:400px}.max-w-\\[450px\\]{max-width:450px}.max-w-\\[calc\\(100\\%-5rem\\)\\]{max-width:calc(100% - 80px)}.max-w-\\[calc\\(100vw-1rem\\)\\]{max-width:calc(100vw - 16px)}.max-w-full{max-width:100%}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-20{min-width:calc(var(--spacing)*20)}.min-w-\\[300px\\]{min-width:300px}.min-w-full{min-width:100%}.flex-1{flex:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.scale-1{--tw-scale-x:1%;--tw-scale-y:1%;--tw-scale-z:1%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-2{--tw-scale-x:2%;--tw-scale-y:2%;--tw-scale-z:2%;scale:var(--tw-scale-x)var(--tw-scale-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.list-inside{list-style-position:inside}.list-disc{list-style-type:disc}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-wrap{flex-wrap:wrap}.place-content-center{place-content:center}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing)*0)}.gap-0\\.5{gap:calc(var(--spacing)*.5)}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-5{gap:calc(var(--spacing)*5)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-3{-moz-column-gap:calc(var(--spacing)*3);column-gap:calc(var(--spacing)*3)}.gap-y-1{row-gap:calc(var(--spacing)*1)}.gap-y-1\\.5{row-gap:calc(var(--spacing)*1.5)}.self-center{align-self:center}.self-end{align-self:flex-end}.self-start{align-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:var(--skyra-radius-md,6px)}.rounded-\\[99999px\\]{border-radius:99999px}.rounded-full{border-radius:var(--skyra-radius-pill,999px)}.rounded-lg{border-radius:var(--skyra-radius-lg,8px)}.rounded-md{border-radius:var(--skyra-radius-md,6px)}.rounded-none{border-radius:0}.rounded-sm{border-radius:var(--skyra-radius-sm,4px)}.rounded-xs{border-radius:var(--skyra-radius-sm,2px)}.rounded-br-md{border-bottom-right-radius:var(--skyra-radius-md,6px)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-solid{--tw-border-style:solid;border-style:solid}.border-action{border-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.border-action{border-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.border-current{border-color:currentColor}.border-interface{border-color:var(--skyra-interface-color)}@supports (color:color-mix(in lab,red,red)){.border-interface{border-color:color-mix(in srgb,var(--skyra-interface-color),transparent 0%)}}.border-transparent{border-color:#0000}.bg-action{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.bg-action{background-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.bg-action\\/10{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.bg-action\\/10{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)10%,transparent)}}.bg-bg{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.bg-bg{background-color:color-mix(in srgb,var(--skyra-bg-color),transparent 0%)}}.bg-minimized{background-color:var(--skyra-minimized-bg)}@supports (color:color-mix(in lab,red,red)){.bg-minimized{background-color:color-mix(in srgb,var(--skyra-minimized-bg),transparent 0%)}}.bg-transparent{background-color:#0000}.fill-\\[\\#003355\\]{fill:#035}.fill-transparent{fill:#0000}.stroke-current{stroke:currentColor}.object-cover{-o-object-fit:cover;object-fit:cover}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.p-8{padding:calc(var(--spacing)*8)}.px-0{padding-inline:calc(var(--spacing)*0)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-0{padding-block:calc(var(--spacing)*0)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-2{padding-block:calc(var(--spacing)*2)}.py-6{padding-block:calc(var(--spacing)*6)}.pt-4{padding-top:calc(var(--spacing)*4)}.pt-10{padding-top:calc(var(--spacing)*10)}.pr-5{padding-right:calc(var(--spacing)*5)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.pl-0\\.5{padding-left:calc(var(--spacing)*.5)}.pl-4{padding-left:calc(var(--spacing)*4)}.text-center{text-align:center}.text-left{text-align:left}.font-body{font-family:var(--skyra-font-body)}.font-heading{font-family:var(--skyra-font-heading)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:1.25em;line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:.875em;line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:.75em;line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-md{font-size:1.125em}.leading-4{--tw-leading:calc(var(--spacing)*4);line-height:calc(var(--spacing)*4)}.leading-none{--tw-leading:1;line-height:1}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#012A53\\]{color:#012a53}.text-action-text{color:var(--skyra-action-text-color)}@supports (color:color-mix(in lab,red,red)){.text-action-text{color:color-mix(in srgb,var(--skyra-action-text-color),transparent 0%)}}.text-bg{color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.text-bg{color:color-mix(in srgb,var(--skyra-bg-color),transparent 0%)}}.text-current{color:currentColor}.text-error{color:var(--skyra-error-color)}@supports (color:color-mix(in lab,red,red)){.text-error{color:color-mix(in srgb,var(--skyra-error-color),transparent 0%)}}.text-link{color:var(--skyra-link-color)}@supports (color:color-mix(in lab,red,red)){.text-link{color:color-mix(in srgb,var(--skyra-link-color),transparent 0%)}}.text-minimized-text{color:var(--skyra-minimized-text)}@supports (color:color-mix(in lab,red,red)){.text-minimized-text{color:color-mix(in srgb,var(--skyra-minimized-text),transparent 0%)}}.text-text{color:var(--skyra-text-color)}@supports (color:color-mix(in lab,red,red)){.text-text{color:color-mix(in srgb,var(--skyra-text-color),transparent 0%)}}.text-transparent{color:#0000}.text-warning{color:var(--skyra-warning-color)}@supports (color:color-mix(in lab,red,red)){.text-warning{color:color-mix(in srgb,var(--skyra-warning-color),transparent 0%)}}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.underline{text-decoration-line:underline}.underline-offset-4{text-underline-offset:4px}.opacity-50{opacity:.5}.opacity-85{opacity:.85}.shadow{--tw-shadow:var(--skyra-shadow,0 0 20px 4px rgb(from var(--skyra-action-color)r g b/.25));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-minimized{--tw-shadow:var(--skyra-minimized-shadow);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-offset-\\[3px\\]{--tw-ring-offset-width:3px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.blur-\\[75px\\]{--tw-blur:blur(75px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,backdrop-filter,display,content-visibility,overlay,pointer-events!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.\\[background\\:linear-gradient\\(180deg\\,rgb\\(224\\,251\\,166\\)_0\\%\\,rgb\\(223\\.85\\,250\\.83\\,166\\.74\\)_11\\.79\\%\\,rgb\\(223\\.42\\,250\\.35\\,168\\.85\\)_21\\.38\\%\\,rgb\\(222\\.73\\,249\\.59\\,172\\.2\\)_29\\.12\\%\\,rgb\\(221\\.83\\,248\\.59\\,176\\.62\\)_35\\.34\\%\\,rgb\\(220\\.73\\,247\\.37\\,181\\.97\\)_40\\.37\\%\\,rgb\\(219\\.48\\,245\\.98\\,188\\.11\\)_44\\.56\\%\\,rgb\\(218\\.09\\,244\\.44\\,194\\.87\\)_48\\.24\\%\\,rgb\\(216\\.61\\,242\\.79\\,202\\.13\\)_51\\.76\\%\\,rgb\\(215\\.06\\,241\\.06\\,209\\.72\\)_55\\.44\\%\\,rgb\\(213\\.47\\,239\\.3\\,217\\.5\\)_59\\.63\\%\\,rgb\\(211\\.87\\,237\\.52\\,225\\.31\\)_64\\.66\\%\\,rgb\\(210\\.29\\,235\\.77\\,233\\.02\\)_70\\.88\\%\\,rgb\\(208\\.77\\,234\\.07\\,240\\.47\\)_78\\.62\\%\\,rgb\\(207\\.33\\,232\\.47\\,247\\.51\\)_88\\.21\\%\\,rgb\\(206\\,231\\,254\\)_100\\%\\)\\]{background:linear-gradient(#e0fba6,#e0fba7 11.79%,#dffaa9 21.38%,#dffaac 29.12%,#def9b1 35.34%,#ddf7b6 40.37%,#dbf6bc 44.56%,#daf4c3 48.24%,#d9f3ca 51.76%,#d7f1d2 55.44%,#d5efda 59.63%,#d4eee1 64.66%,#d2ece9 70.88%,#d1eaf0 78.62%,#cfe8f8 88.21%,#cee7fe)}.placeholder\\:text-text\\/60::-moz-placeholder{color:var(--skyra-text-color)}.placeholder\\:text-text\\/60::placeholder{color:var(--skyra-text-color)}@supports (color:color-mix(in lab,red,red)){.placeholder\\:text-text\\/60::-moz-placeholder{color:color-mix(in oklab,color-mix(in srgb,var(--skyra-text-color),transparent 0%)60%,transparent)}.placeholder\\:text-text\\/60::placeholder{color:color-mix(in oklab,color-mix(in srgb,var(--skyra-text-color),transparent 0%)60%,transparent)}}.before\\:size-2\\.5:before{content:var(--tw-content);width:calc(var(--spacing)*2.5);height:calc(var(--spacing)*2.5)}.before\\:origin-bottom-left:before{content:var(--tw-content);transform-origin:0 100%}.before\\:scale-0:before{content:var(--tw-content);--tw-scale-x:0%;--tw-scale-y:0%;--tw-scale-z:0%;scale:var(--tw-scale-x)var(--tw-scale-y)}.before\\:rounded-xs:before{content:var(--tw-content);border-radius:var(--skyra-radius-sm,2px)}.before\\:shadow-\\[inset_1em_1em_currentcolor\\]:before{content:var(--tw-content);--tw-shadow:inset 1em 1em var(--tw-shadow-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.before\\:transition-all:before{content:var(--tw-content);transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.before\\:\\[transition-duration\\:100ms\\]:before{content:var(--tw-content);transition-duration:.1s}.before\\:content-\\[\\'\\'\\]:before{--tw-content:"";content:var(--tw-content)}.before\\:\\[clip-path\\:polygon\\(14\\%_44\\%\\,0_65\\%\\,50\\%_100\\%\\,100\\%_16\\%\\,80\\%_0\\%\\,43\\%_62\\%\\)\\]:before{content:var(--tw-content);clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%)}.checked\\:border-8:checked{border-style:var(--tw-border-style);border-width:8px}.checked\\:border-action:checked{border-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.checked\\:border-action:checked{border-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.checked\\:bg-action:checked{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.checked\\:bg-action:checked{background-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.checked\\:text-bg:checked{color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.checked\\:text-bg:checked{color:color-mix(in srgb,var(--skyra-bg-color),transparent 0%)}}.checked\\:before\\:scale-100:checked:before{content:var(--tw-content);--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.focus-within\\:ring-2:focus-within{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-within\\:ring-action:focus-within{--tw-ring-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.focus-within\\:ring-action:focus-within{--tw-ring-color:color-mix(in srgb,var(--skyra-action-color),transparent 0% )}}.focus-within\\:ring-offset-2:focus-within{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus-within\\:ring-offset-bg:focus-within{--tw-ring-offset-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.focus-within\\:ring-offset-bg:focus-within{--tw-ring-offset-color:color-mix(in srgb,var(--skyra-bg-color),transparent 0% )}}@media(hover:hover){.hover\\:border-action\\/80:hover{border-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:border-action\\/80:hover{border-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)80%,transparent)}}.hover\\:bg-action:hover{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-action:hover{background-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.hover\\:bg-action\\/10:hover{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-action\\/10:hover{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)10%,transparent)}}.hover\\:bg-action\\/80:hover{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-action\\/80:hover{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)80%,transparent)}}.hover\\:text-action-text:hover{color:var(--skyra-action-text-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:text-action-text:hover{color:color-mix(in srgb,var(--skyra-action-text-color),transparent 0%)}}.hover\\:text-link\\/80:hover{color:var(--skyra-link-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:text-link\\/80:hover{color:color-mix(in oklab,color-mix(in srgb,var(--skyra-link-color),transparent 0%)80%,transparent)}}.hover\\:ring-2:hover{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:ring-action:hover{--tw-ring-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:ring-action:hover{--tw-ring-color:color-mix(in srgb,var(--skyra-action-color),transparent 0% )}}.hover\\:ring-offset-2:hover{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.hover\\:ring-offset-bg:hover{--tw-ring-offset-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:ring-offset-bg:hover{--tw-ring-offset-color:color-mix(in srgb,var(--skyra-bg-color),transparent 0% )}}.hover\\:outline-2:hover{outline-style:var(--tw-outline-style);outline-width:2px}.hover\\:outline-offset-2:hover{outline-offset:2px}.hover\\:outline-action:hover{outline-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.hover\\:outline-action:hover{outline-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}}.focus-visible\\:bg-action\\/10:focus-visible{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.focus-visible\\:bg-action\\/10:focus-visible{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-action-color),transparent 0%)10%,transparent)}}.focus-visible\\:no-underline:focus-visible{text-decoration-line:none}.focus-visible\\:ring-transparent:focus-visible{--tw-ring-color:transparent}.focus-visible\\:outline-hidden:focus-visible{--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.focus-visible\\:outline-hidden:focus-visible{outline-offset:2px;outline:2px solid #0000}}.focus-visible\\:outline-2:focus-visible{outline-style:var(--tw-outline-style);outline-width:2px}.focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.focus-visible\\:outline-offset-\\[-2px\\]:focus-visible{outline-offset:-2px}.focus-visible\\:outline-action:focus-visible{outline-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.focus-visible\\:outline-action:focus-visible{outline-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.focus-visible\\:outline-current:focus-visible{outline-color:currentColor}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.has-focus-visible\\:outline-2:has(:focus-visible){outline-style:var(--tw-outline-style);outline-width:2px}.has-focus-visible\\:outline-offset-4:has(:focus-visible){outline-offset:4px}.has-focus-visible\\:outline-current:has(:focus-visible){outline-color:currentColor}.aria-\\[invalid\\=true\\]\\:border-error[aria-invalid=true]{border-color:var(--skyra-error-color)}@supports (color:color-mix(in lab,red,red)){.aria-\\[invalid\\=true\\]\\:border-error[aria-invalid=true]{border-color:color-mix(in srgb,var(--skyra-error-color),transparent 0%)}}@media(hover:hover){.aria-\\[invalid\\=true\\]\\:hover\\:border-error\\/50[aria-invalid=true]:hover{border-color:var(--skyra-error-color)}@supports (color:color-mix(in lab,red,red)){.aria-\\[invalid\\=true\\]\\:hover\\:border-error\\/50[aria-invalid=true]:hover{border-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-error-color),transparent 0%)50%,transparent)}}}.aria-\\[invalid\\=true\\]\\:focus-visible\\:ring-error\\/20[aria-invalid=true]:focus-visible{--tw-ring-color:var(--skyra-error-color)}@supports (color:color-mix(in lab,red,red)){.aria-\\[invalid\\=true\\]\\:focus-visible\\:ring-error\\/20[aria-invalid=true]:focus-visible{--tw-ring-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-error-color),transparent 0% )20%,transparent)}}.data-\\[selected\\=true\\]\\:border-action[data-selected=true]{border-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.data-\\[selected\\=true\\]\\:border-action[data-selected=true]{border-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.data-\\[selected\\=true\\]\\:bg-action[data-selected=true]{background-color:var(--skyra-action-color)}@supports (color:color-mix(in lab,red,red)){.data-\\[selected\\=true\\]\\:bg-action[data-selected=true]{background-color:color-mix(in srgb,var(--skyra-action-color),transparent 0%)}}.data-\\[selected\\=true\\]\\:font-semibold[data-selected=true]{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.data-\\[selected\\=true\\]\\:text-action-text[data-selected=true]{color:var(--skyra-action-text-color)}@supports (color:color-mix(in lab,red,red)){.data-\\[selected\\=true\\]\\:text-action-text[data-selected=true]{color:color-mix(in srgb,var(--skyra-action-text-color),transparent 0%)}}@media(min-width:40rem){.sm\\:h-screen{height:100vh}.sm\\:w-4\\/12{width:33.3333%}.sm\\:w-8\\/12{width:66.6667%}.sm\\:p-10{padding:calc(var(--spacing)*10)}}@media(min-width:48rem){.md\\:col-span-2{grid-column:span 2/span 2}.md\\:m-4{margin:calc(var(--spacing)*4)}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:gap-2{gap:calc(var(--spacing)*2)}.md\\:gap-4{gap:calc(var(--spacing)*4)}.md\\:px-0{padding-inline:calc(var(--spacing)*0)}.md\\:px-6{padding-inline:calc(var(--spacing)*6)}.md\\:pt-6{padding-top:calc(var(--spacing)*6)}.md\\:pb-6{padding-bottom:calc(var(--spacing)*6)}.md\\:text-lg{font-size:1.25em;line-height:var(--tw-leading,var(--text-lg--line-height))}.md\\:text-sm{font-size:.875em;line-height:var(--tw-leading,var(--text-sm--line-height))}}@media(min-width:64rem){.lg\\:mt-0{margin-top:calc(var(--spacing)*0)}.lg\\:flex{display:flex}.lg\\:text-6xl{font-size:var(--text-6xl);line-height:var(--tw-leading,var(--text-6xl--line-height))}}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#000F0D\\]{background-color:#000f0d}.dark\\:text-\\[\\#FFFFFF\\]{color:#fff}}@media(pointer:coarse){.pointer-coarse\\:hidden{display:none}}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}}:host{--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-outline-style:solid;--tw-font-weight:initial;--tw-tracking:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:rotateX(0);--tw-rotate-y:rotateY(0);--tw-rotate-z:rotateZ(0);--tw-skew-x:skewX(0);--tw-skew-y:skewY(0);--tw-space-x-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-duration:initial;--tw-ease:initial}.scroll-area{scroll-timeline:--scroll-timeline y;scroll-timeline:--scroll-timeline vertical;max-height:min(var(--skyra-option-list-max-height,400px),35vh);position:relative;overflow-y:auto}@media(min-width:1024px){.scroll-area{max-height:clamp(20vh,var(--skyra-option-list-max-height,400px),35vh)}}.scroll-area .scroll-area-up,.scroll-area .scroll-area-down{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.scroll-area .scroll-area-up,.scroll-area .scroll-area-down{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-bg-color),transparent 0%)80%,transparent)}}.scroll-area .scroll-area-up,.scroll-area .scroll-area-down{-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);cursor:pointer;border:none;justify-content:center;align-items:center;width:100%;height:1.5em;transition:background-color .2s,transform .1s,opacity .2s;display:flex;position:sticky;left:0;right:0}.scroll-area .scroll-area-up:hover,.scroll-area .scroll-area-down:hover{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.scroll-area .scroll-area-up:hover,.scroll-area .scroll-area-down:hover{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-bg-color),transparent 0%)90%,transparent)}}.scroll-area .scroll-area-up:focus,.scroll-area .scroll-area-down:focus{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.scroll-area .scroll-area-up:focus,.scroll-area .scroll-area-down:focus{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-bg-color),transparent 0%)90%,transparent)}}.scroll-area .scroll-area-up:focus,.scroll-area .scroll-area-down:focus{outline:2px solid var(--color-interface);outline-offset:-2px}.scroll-area .scroll-area-up:active,.scroll-area .scroll-area-down:active{background-color:var(--skyra-bg-color)}@supports (color:color-mix(in lab,red,red)){.scroll-area .scroll-area-up:active,.scroll-area .scroll-area-down:active{background-color:color-mix(in oklab,color-mix(in srgb,var(--skyra-bg-color),transparent 0%)95%,transparent)}}.scroll-area .scroll-area-up:active,.scroll-area .scroll-area-down:active{transform:scale(.98)}.scroll-area-up{opacity:1;pointer-events:auto;top:-2px}.scroll-area-down{opacity:1;pointer-events:auto;bottom:-1px}.scroll-area[data-scrollable=false] .scroll-area-up,.scroll-area[data-scrollable=false] .scroll-area-down,.scroll-area[data-scrollable=unknown] .scroll-area-up,.scroll-area[data-scrollable=unknown] .scroll-area-down{opacity:0!important;pointer-events:none!important;display:none!important}.scroll-area[data-at-top=true] .scroll-area-up,.scroll-area[data-at-bottom=true] .scroll-area-down{opacity:0!important;pointer-events:none!important}@supports (animation-timeline:scroll()){.scroll-area-up{opacity:1;pointer-events:auto;animation:linear reveal-top;animation-timeline:--scroll-timeline;animation-range:0 1px}.scroll-area-down{animation:linear reveal-bottom;animation-timeline:--scroll-timeline;animation-range:entry exit 0%}}@keyframes reveal-top{0%{opacity:0;pointer-events:none}to{opacity:1;pointer-events:auto}}@keyframes reveal-bottom{0%{opacity:1;pointer-events:auto}to{opacity:0;pointer-events:none}}:host{--ease-out:cubic-bezier(.16,1,.3,1);--ease-out-soft:cubic-bezier(.33,1,.68,1);--duration-fast:.15s;--duration:.28s;--duration-slow:.5s}@keyframes content-enter{0%{opacity:0;transform:translate(8px)}to{opacity:1;transform:translate(0)}}.survey-content-enter{animation:content-enter var(--duration-slow)var(--ease-out)both}@keyframes wrapper-enter-up{0%{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes wrapper-enter-down{0%{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}@keyframes shake{0%{transform:translate(0)}25%{transform:translate(-6px)}50%{transform:translate(6px)}75%{transform:translate(-6px)}to{transform:translate(0)}}.survey-enter-up{animation:wrapper-enter-up var(--duration)var(--ease-out)both}.survey-enter-down{animation:wrapper-enter-down var(--duration)var(--ease-out)both}.survey-shake{animation:shake var(--duration)ease-in-out}.survey-container{interpolate-size:allow-keywords;border:var(--skyra-border-width,1px)var(--skyra-border-style,solid)var(--skyra-border-color,var(--skyra-action-color));grid-template:1fr/1fr;display:grid}@supports (color:color-mix(in lab,red,red)){.survey-container{border:var(--skyra-border-width,1px)var(--skyra-border-style,solid)var(--skyra-border-color,color-mix(in srgb,var(--skyra-action-color)50%,transparent))}}.survey-container{background:var(--skyra-bg-color);border-radius:var(--skyra-radius-lg,8px);box-shadow:var(--skyra-shadow-md,var(--skyra-shadow,0 0 20px 4px rgb(from var(--skyra-action-color)r g b/.25)));transition:background-color 0s,border-color var(--duration-fast)var(--ease-out-soft),border-radius var(--duration)var(--ease-out-soft),box-shadow var(--duration-fast)var(--ease-out-soft);overflow:hidden}.survey-container[data-minimized=true]{background:var(--skyra-minimized-bg);border-color:var(--skyra-minimized-border);border-radius:var(--skyra-radius-sm,4px);box-shadow:var(--skyra-minimized-shadow);transition:background-color 0s,border-color var(--duration)var(--ease-out-soft),border-radius var(--duration)var(--ease-out-soft),box-shadow var(--duration)var(--ease-out-soft)}.survey-content,.survey-pill{grid-area:1/1}.survey-content{width:min(var(--card-max-width,400px),calc(100vw - 32px));opacity:1;visibility:visible;height:auto;transition:opacity var(--duration)var(--ease-out-soft),visibility 0s,width var(--duration-fast)var(--ease-out),height var(--duration-fast)var(--ease-out);overflow:visible}.survey-container[data-minimized=true] .survey-content{opacity:0;visibility:hidden;pointer-events:none;width:0;height:0;transition:opacity var(--duration-fast)var(--ease-out-soft),visibility 0s var(--duration-fast),width 0s,height 0s;overflow:hidden}.survey-pill{color:var(--skyra-minimized-text);cursor:pointer;white-space:nowrap;opacity:0;visibility:hidden;width:0;height:0;transition:opacity var(--duration-fast)var(--ease-out-soft),visibility 0s var(--duration-fast),width 0s var(--duration-fast),height 0s var(--duration-fast);background:0 0;border:none;align-items:center;gap:8px;padding:8px;display:flex;overflow:hidden}.survey-container[data-minimized=true] .survey-pill{opacity:1;visibility:visible;width:auto;height:auto;transition:opacity var(--duration)var(--ease-out-soft),visibility 0s,width 0s,height 0s;overflow:visible}.survey-pill:hover{background-color:#ffffff1a}.survey-pill:focus-visible{outline:2px solid var(--skyra-bg-color);outline-offset:2px}@media(prefers-reduced-motion:reduce){.survey-container,.survey-content,.survey-pill{transition-duration:.01ms!important}.survey-content-enter,.survey-enter-up,.survey-enter-down,.survey-shake{animation:none!important}}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}`,
		H0 = "",
		U0 =
			"@layer components{@media(prefers-color-scheme:dark){:host{--skyra-bg-color: #00173a;--skyra-text-color: white;--skyra-interface-color: white;--skyra-action-color: white;--skyra-secondary-color: #3d4e5f;--skyra-link-color: #d7f0fe;--skyra-error-color: #ff5555;--skyra-warning-color: #feb570;--skyra-z-index: 2147483647}}}";
	function V0({
		inline: e = !1,
		children: t,
		size: n = "Regular",
		customCss: r,
		theme: o,
		themeMode: i,
		...s
	}) {
		const a = Je(),
			c = s.position ?? "BottomLeft",
			l = Me(!0);
		ds(() => {
			l.value = !1;
		});
		const d = wt(
				() => (o ? fl(o, { themeMode: i ?? "Auto", selector: ":host" }) : null),
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
		return g(Ee, {
			children: [
				g("style", { children: [Z0, e ? H0 : U0] }),
				d && g("style", { children: d }),
				g("style", { children: r }),
				g(
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
	function W0({
		card: e,
		capture: t,
		finalCard: n,
		firstCard: r,
		sessionId: o,
		size: i,
		storedValue: s,
		survey: a,
	}) {
		return g(V0, {
			size: i,
			inline: a.renderType === "Inline",
			position: a.surveyPosition,
			customCss: a.customCss,
			theme: a.theme,
			themeMode: a.themeMode,
			children: g(F0, {
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
	const ge = new Gw();
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
				((Gc = window.SKYRA_CONFIG) == null ? void 0 : Gc.autoStart) !== !1,
			t = !!((Yc = window.SKYRA_CONFIG) != null && Yc.org);
		e && t
			? ge.start()
			: e && !t && console.warn("Skyra: org is not specified in SKYRA_CONFIG");
	}
	function q0(e, t) {
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
	function K0(e, t) {
		var r, o, i, s, a, c, l, d, u, p, f, m;
		if (!e) return;
		const n = J(e.id);
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
				const y = J(e.segment.id);
				return (p = (u = t.variables) == null ? void 0 : u.segments) == null
					? void 0
					: p[y];
			}
			case "TopTaskCard":
				return (f = t.variables) == null ? void 0 : f.task;
			case "CompletionCard":
				return (m = t.variables) == null ? void 0 : m.completion;
			default:
				return;
		}
	}
	function gi({ capture: e }) {
		const {
			survey: t,
			sessionId: n,
			capturing: r,
			currentCard: o,
		} = ve(e, (i) => {
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
			? g(ed, {
					api: ge,
					survey: t,
					state: e.getSnapshot().context.state,
					captureMachine: e,
					children: g(J0, { currentCard: o, sessionId: n, capture: e }),
				})
			: null;
	}
	function J0({ currentCard: e, sessionId: t, capture: n }) {
		const r = Gn(),
			o = so(),
			i = ve(o, (p) => p.context.language),
			s = ve(o, (p) => p.context.state),
			{ card: a, isFirstCard: c, isLastCard: l } = q0(r.cards, e);
		if (!a) return null;
		const d = K0(a, s),
			u =
				a.type === "LikertCard" && a.likertScale.likertItems.length >= 5
					? "Large"
					: "Regular";
		return ge.getRendererVariant(r.fullSlug, r.rendererVariant ?? "classic") ===
			"beta"
			? g(
					m0,
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
			: g(
					W0,
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
	function Kc({
		slug: e,
		inline: t,
		cookieConsent: n,
		consent: r = !0,
		lang: o,
		onReady: i,
		onUnavailable: s,
		onError: a,
	}) {
		const [c, l] = ae(0),
			d = 30,
			u = Q(null),
			p = Q({ ready: !1, terminal: !1 });
		ne(() => {
			o && ge.setExplicitLanguage(e, o);
		}, [e, o]),
			ne(() => {
				var v;
				if (!ge.controller && c < d) {
					const _ = setInterval(() => {
						ge.controller ? (clearInterval(_), l(0)) : l((x) => x + 1);
					}, 100);
					return () => clearInterval(_);
				}
				c >= d &&
					!ge.controller &&
					(((v = window.SKYRA_CONFIG) == null ? void 0 : v.autoStart) !== !1 &&
						Ue(`Skyra survey (${e}): No controller found after ${d} attempts`),
					Mn(p.current, Xt(u.current), "skyra-error", e0(e), a));
			}, [e, c, ge.controller, a]),
			ne(() => {
				var S, $;
				const v = ge.controller;
				if (!v) return;
				const _ = `${e}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
					x = (S = v.getSnapshot) == null ? void 0 : S.call(v);
				if ((x == null ? void 0 : x.value) === "Ready") {
					v.send({ type: "surveyMounted", slug: e, instanceId: _ });
					return;
				}
				const I = () => {
					v.send({ type: "surveyMounted", slug: e, instanceId: _ });
				};
				return (
					($ = v.on) == null || $.call(v, "ready", I),
					() => {
						var N;
						(N = v.off) == null || N.call(v, "ready", I);
					}
				);
			}, [e, ge.controller]);
		const f = ge.controller;
		if (!f) return g("span", { ref: u, hidden: !0 });
		const m = f.getVersion() === "v2";
		if (
			(ne(() => {
				m ||
					p.current.terminal ||
					Mn(p.current, Xt(u.current), "skyra-unavailable", t0(e), s);
			}, [m, e, s]),
			!m)
		)
			return g("span", { ref: u, hidden: !0 });
		const y = ve(f.getActor(), (v) => f.findCaptureBySlug(e)),
			b = ve(f.getActor(), (v) => {
				var C, I, S;
				const _ =
						(C = v.context.surveys) == null
							? void 0
							: C.find(($) => $.fullSlug === e),
					x =
						(I = v.context.inlineSurveys) == null
							? void 0
							: I.some(($) => $.fullSlug === e);
				return {
					ready: v.value === "Ready",
					survey: _,
					isInlineEligible: x,
					failure: (S = v.context.inlineFailures) == null ? void 0 : S[e],
				};
			});
		return (
			ne(() => {
				if (!y || p.current.ready || p.current.terminal) return;
				const v = y.getSnapshot(),
					_ = v.context.survey,
					x = v.context.sessionId;
				!_ ||
					_.renderType !== "Inline" ||
					!x ||
					Yw(
						p.current,
						Xt(u.current),
						{ slug: e, surveyId: _.id, sessionId: x },
						i,
					);
			}, [y, e, i]),
			ne(() => {
				if (!b.failure || p.current.ready || p.current.terminal) return;
				const v = Qw(e, b.failure);
				v.name === "skyra-unavailable"
					? Mn(p.current, Xt(u.current), v.name, v.detail, s)
					: Mn(p.current, Xt(u.current), v.name, v.detail, a);
			}, [b.failure, e, s, a]),
			ne(() => {
				if (!b.ready || y || b.failure || p.current.ready || p.current.terminal)
					return;
				const v = window.setTimeout(() => {
					if (p.current.ready || p.current.terminal) return;
					const _ = Xw(e, b.survey, b.isInlineEligible);
					_ && Mn(p.current, Xt(u.current), "skyra-unavailable", _, s);
				}, 100);
				return () => window.clearTimeout(v);
			}, [y, b, e, s]),
			g(Ee, {
				children: [
					g("span", { ref: u, hidden: !0 }),
					y ? g(gi, { capture: y }) : null,
				],
			})
		);
	}
	function Jc({ slug: e }) {
		const t = ge.previewController,
			n = ve(t ?? void 0, (r) => (r == null ? void 0 : r.context.machine));
		return n ? g(gi, { capture: n }) : null;
	}
	return (
		typeof customElements.get("skyra-survey") < "u" ||
			Ki(
				Kc,
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
			Ki(Jc, "skyra-preview", ["slug"], { shadow: !0 }),
		(Qt.Survey = Kc),
		(Qt.SurveyPreview = Jc),
		(Qt.SurveyWidget = gi),
		Object.defineProperty(Qt, Symbol.toStringTag, { value: "Module" }),
		Qt
	);
})({});
