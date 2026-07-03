/* @ds-bundle: {"format":3,"namespace":"CHLGroupDesignSystem_a19f76","components":[{"name":"MapShape","sourcePath":"components/brand/MapShape.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Newsletter","sourcePath":"components/feedback/Newsletter.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/MapShape.jsx":"d5c6fa28f62b","components/core/Avatar.jsx":"e326eb484c6c","components/core/Badge.jsx":"41d7c1532e6e","components/core/Button.jsx":"c5ce86588e54","components/core/Card.jsx":"bb879853203e","components/core/Eyebrow.jsx":"7dcbfbe3ce8f","components/core/IconButton.jsx":"87fc88f108f6","components/core/Stat.jsx":"c81088cbc1ea","components/feedback/Newsletter.jsx":"569500e93eca","components/forms/TextField.jsx":"3d0f4471e43a","components/navigation/Tabs.jsx":"a624161772c0","ui_kits/investor_hub/App.jsx":"4af020caa80e","ui_kits/investor_hub/Icons.jsx":"2d6b99771409"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CHLGroupDesignSystem_a19f76 = window.CHLGroupDesignSystem_a19f76 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/MapShape.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CHL Group — MapShape
 * The signature brand motif: a folded-map / journey shape (the same form
 * as the CHL logomark). Use it to mask a photo, or as a solid accent block
 * behind headings. Path + aspect ratio taken from the official logomark SVG.
 */
const MAP_PATH = 'M337.982 0.00794681C337.504 0.00794681 337.067 0.0881959 336.63 0.248694L226.647 39.8917L116.664 0.248694C115.67 -0.192676 114.398 0.0480713 113.92 0.248694L2.62535 40.3732C1.07462 40.9751 -0.0387304 42.5801 0.00103204 44.2653V276.988C0.00103204 279.555 2.94345 281.642 5.3292 280.759L115.312 241.116L225.295 280.759C226.17 281.08 227.164 281.08 228.039 280.759L339.373 240.635C340.884 240.073 341.998 238.508 341.998 236.863V4.14077C342.077 1.97405 340.129 0.00794681 338.021 0.00794681H337.982Z';
const VB_W = 342,
  VB_H = 281;
function MapShape({
  src,
  // image URL — if omitted, renders a solid fill
  alt = '',
  fill = 'var(--chl-bay-blue)',
  // used when no src (solid accent)
  outline = false,
  // outline-only variant (no fill)
  strokeWidth = 8,
  width = '100%',
  style = {},
  children,
  // optional overlay content (absolutely centered)
  ...rest
}) {
  const uid = React.useId().replace(/[:]/g, '');
  const clipId = `chl-map-${uid}`;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width,
      aspectRatio: `${VB_W} / ${VB_H}`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${VB_W} ${VB_H}`,
    preserveAspectRatio: "xMidYMid meet",
    style: {
      width: '100%',
      height: '100%',
      display: 'block'
    }
  }, src && /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: clipId
  }, /*#__PURE__*/React.createElement("path", {
    d: MAP_PATH
  }))), src ? /*#__PURE__*/React.createElement("image", {
    href: src,
    x: "0",
    y: "0",
    width: VB_W,
    height: VB_H,
    preserveAspectRatio: "xMidYMid slice",
    clipPath: `url(#${clipId})`
  }, /*#__PURE__*/React.createElement("title", null, alt)) : /*#__PURE__*/React.createElement("path", {
    d: MAP_PATH,
    fill: outline ? 'none' : fill,
    stroke: outline ? fill : 'none',
    strokeWidth: outline ? strokeWidth : 0,
    strokeLinejoin: "round"
  })), children && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, children));
}
Object.assign(__ds_scope, { MapShape });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/MapShape.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CHL Group — Avatar
 * Round photo avatar with a teal-tinted initials fallback (matches the
 * investor-hub team cards).
 */
function Avatar({
  src,
  name = '',
  size = 48,
  onDark = false,
  style = {},
  ...rest
}) {
  const [failed, setFailed] = React.useState(false);
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const showImg = src && !failed;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-full, 9999px)',
      overflow: 'hidden',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--chl-reef-tint-15)',
      border: '2px solid var(--chl-reef-tint-30)',
      color: onDark ? 'var(--chl-bay-blue)' : 'var(--chl-reef-blue-deep)',
      fontFamily: 'var(--font-brand)',
      fontWeight: 700,
      fontSize: size * 0.36,
      ...style
    }
  }, rest), showImg ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    onError: () => setFailed(true),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top'
    }
  }) : /*#__PURE__*/React.createElement("span", null, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CHL Group — Badge / Tag
 * Small pill label. `tint` = teal glass (default), `solid` = filled teal,
 * `dark`, `outline`, plus semantic tones.
 */
function Badge({
  children,
  tone = 'tint',
  // 'tint' | 'solid' | 'dark' | 'outline' | 'success' | 'warning' | 'danger'
  onDark = false,
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    tint: {
      background: 'var(--chl-reef-tint-15)',
      color: onDark ? 'var(--chl-bay-blue)' : 'var(--chl-reef-blue-deep)',
      border: '1px solid var(--chl-reef-tint-30)'
    },
    solid: {
      background: 'var(--color-brand)',
      color: 'var(--color-brand-contrast)',
      border: '1px solid transparent'
    },
    dark: {
      background: 'var(--surface-dark)',
      color: 'var(--chl-white)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: onDark ? 'var(--chl-white)' : 'var(--color-ink)',
      border: `1px solid ${onDark ? 'var(--chl-white-10)' : 'var(--border-subtle)'}`
    },
    success: {
      background: 'rgba(46,158,107,0.12)',
      color: 'var(--color-success)',
      border: '1px solid rgba(46,158,107,0.3)'
    },
    warning: {
      background: 'rgba(230,162,60,0.14)',
      color: '#B47A1E',
      border: '1px solid rgba(230,162,60,0.35)'
    },
    danger: {
      background: 'rgba(217,83,79,0.12)',
      color: 'var(--color-danger)',
      border: '1px solid rgba(217,83,79,0.3)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-brand)',
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: 1,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill, 100px)',
      letterSpacing: '0.01em',
      whiteSpace: 'nowrap',
      ...(tones[tone] || tones.tint),
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CHL Group — Button
 * Pill-shaped brand button. Primary uses Great Barrier Reef Blue with
 * Southern Forests Black text (per brand UI kit); outline & text variants
 * for lower emphasis; dark for use on light grounds.
 */
function Button({
  children,
  variant = 'primary',
  // 'primary' | 'outline' | 'text' | 'dark' | 'ghost'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  onDark = false,
  // adjust outline/text colors for dark backgrounds
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: '8px 18px',
      font: '13px'
    },
    md: {
      padding: '12px 26px',
      font: 'var(--fs-label, 16px)'
    },
    lg: {
      padding: '16px 34px',
      font: '18px'
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-brand)',
    fontWeight: 600,
    fontSize: s.font,
    lineHeight: 1,
    padding: s.padding,
    borderRadius: 'var(--radius-pill, 100px)',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-base,.2s) var(--ease-standard), color var(--dur-base,.2s), border-color var(--dur-base,.2s), transform var(--dur-fast,.15s)',
    transform: active && !disabled ? 'scale(0.97)' : 'scale(1)',
    opacity: disabled ? 0.45 : 1,
    ...style
  };
  const skins = {
    primary: {
      background: hover ? 'var(--chl-bay-blue)' : 'var(--color-brand)',
      color: 'var(--color-brand-contrast)'
    },
    dark: {
      background: hover ? 'var(--chl-forest-black-80)' : 'var(--surface-dark)',
      color: 'var(--chl-white)'
    },
    outline: {
      background: hover ? onDark ? 'rgba(255,255,255,0.06)' : 'var(--surface-tint)' : 'transparent',
      color: onDark ? 'var(--chl-white)' : 'var(--color-ink)',
      borderColor: hover ? 'var(--color-brand)' : onDark ? 'var(--chl-white-10)' : 'var(--border-subtle)'
    },
    ghost: {
      background: hover ? onDark ? 'rgba(255,255,255,0.08)' : 'var(--surface-tint)' : 'transparent',
      color: onDark ? 'var(--chl-white)' : 'var(--color-ink)'
    },
    text: {
      background: 'transparent',
      color: hover ? 'var(--chl-reef-blue-deep)' : 'var(--color-brand)',
      padding: '4px 6px'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...(skins[variant] || skins.primary)
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CHL Group — Card
 * Rounded surface container. `surface` renders on light (white card,
 * hairline border, soft shadow on hover); `glass` renders on dark navy
 * (translucent, teal border on hover) — matching the investor-hub cards.
 */
function Card({
  children,
  variant = 'surface',
  // 'surface' | 'glass' | 'cream' | 'tint'
  interactive = false,
  padding = 'var(--pad-card, 28px)',
  radius = 'var(--radius-xl, 20px)',
  as = 'div',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const El = as;
  const variants = {
    surface: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: interactive && hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      color: 'var(--color-ink)'
    },
    cream: {
      background: 'var(--surface-cream)',
      border: '1px solid var(--border-subtle)',
      boxShadow: interactive && hover ? 'var(--shadow-md)' : 'none',
      color: 'var(--color-ink)'
    },
    tint: {
      background: 'var(--surface-tint)',
      border: '1px solid var(--chl-reef-tint-30)',
      color: 'var(--color-ink)'
    },
    glass: {
      background: interactive && hover ? 'rgba(68,176,191,0.06)' : 'var(--surface-glass-dark)',
      border: `1px solid ${interactive && hover ? 'var(--color-brand)' : 'var(--chl-white-10)'}`,
      color: 'var(--chl-white)',
      backdropFilter: 'blur(10px)'
    }
  };
  return /*#__PURE__*/React.createElement(El, _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      borderRadius: radius,
      padding,
      transition: 'transform var(--dur-base,.2s) var(--ease-standard), box-shadow var(--dur-base,.2s), border-color var(--dur-base,.2s), background var(--dur-base,.2s)',
      transform: interactive && hover ? 'translateY(-4px)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      ...(variants[variant] || variants.surface),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CHL Group — Eyebrow
 * Small uppercase teal kicker that sits above headings across the brand
 * ("Performance", "News & Media", "Portfolio", …).
 */
function Eyebrow({
  children,
  onDark = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-brand)',
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: 1.4,
      letterSpacing: 'var(--ls-eyebrow, 0.14em)',
      textTransform: 'uppercase',
      color: 'var(--color-brand)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CHL Group — IconButton
 * Circular icon-only button (the brand's "circle buttons"). Great for
 * play, arrows, close, socials.
 */
function IconButton({
  children,
  variant = 'primary',
  // 'primary' | 'dark' | 'outline' | 'glass'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  onDark = false,
  disabled = false,
  'aria-label': ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const dims = {
    sm: 36,
    md: 44,
    lg: 56
  }[size] || 44;
  const skins = {
    primary: {
      background: hover ? 'var(--chl-bay-blue)' : 'var(--color-brand)',
      color: 'var(--color-brand-contrast)',
      border: '1.5px solid transparent'
    },
    dark: {
      background: hover ? 'var(--chl-forest-black-80)' : 'var(--surface-dark)',
      color: 'var(--chl-white)',
      border: '1.5px solid transparent'
    },
    outline: {
      background: hover ? onDark ? 'rgba(255,255,255,0.06)' : 'var(--surface-tint)' : 'transparent',
      color: onDark ? 'var(--chl-white)' : 'var(--color-ink)',
      border: `1.5px solid ${hover ? 'var(--color-brand)' : onDark ? 'var(--chl-white-10)' : 'var(--border-subtle)'}`
    },
    glass: {
      background: hover ? 'rgba(255,255,255,0.14)' : 'var(--surface-glass-dark)',
      color: 'var(--chl-white)',
      border: '1px solid var(--chl-white-10)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      width: dims,
      height: dims,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-full, 9999px)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--dur-base,.2s), border-color var(--dur-base,.2s), transform var(--dur-fast,.15s)',
      transform: active && !disabled ? 'scale(0.94)' : 'scale(1)',
      opacity: disabled ? 0.45 : 1,
      ...(skins[variant] || skins.primary),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CHL Group — Stat
 * Big metric figure with a label, e.g. "$315m+ paid to owners".
 * The trailing unit/suffix is highlighted in teal (brand pattern).
 */
function Stat({
  value,
  // e.g. "$315"
  suffix,
  // e.g. "m+"  (rendered in teal)
  label,
  // supporting caption
  size = 'md',
  // 'sm' | 'md' | 'lg'
  onDark = false,
  align = 'left',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: '32px',
    md: '40px',
    lg: '56px'
  }[size] || '40px';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-brand)',
      fontWeight: 700,
      fontSize: sizes,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: onDark ? 'var(--chl-white)' : 'var(--color-ink)'
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-brand)'
    }
  }, suffix)), label && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '6px',
      fontFamily: 'var(--font-brand)',
      fontSize: '14px',
      lineHeight: 1.45,
      color: onDark ? 'var(--chl-white-50)' : 'var(--color-ink-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CHL Group — TextField
 * Pill or rounded input reflecting the brand UI kit states:
 * default / focused / entered / error / confirmed / disabled.
 * Works on light or dark (onDark) grounds.
 */
function TextField({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  shape = 'pill',
  // 'pill' | 'rounded'
  onDark = false,
  disabled = false,
  error,
  // string -> error state + message
  success,
  // string -> confirmed state + message
  hint,
  iconLeft = null,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const state = error ? 'error' : success ? 'success' : focus ? 'focus' : 'default';
  const borderColor = {
    default: onDark ? 'var(--chl-white-10)' : 'var(--border-subtle)',
    focus: 'var(--color-brand)',
    error: 'var(--color-danger)',
    success: 'var(--color-success)'
  }[state];
  const msg = error || success || hint;
  const msgColor = error ? 'var(--color-danger)' : success ? 'var(--color-success)' : onDark ? 'var(--chl-white-50)' : 'var(--color-ink-subtle)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontFamily: 'var(--font-brand)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      fontWeight: 500,
      color: onDark ? 'var(--chl-white-75)' : 'var(--color-ink)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: onDark ? focus ? 'rgba(255,255,255,0.10)' : 'var(--surface-glass-dark)' : 'var(--chl-white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: shape === 'pill' ? 'var(--radius-pill,100px)' : 'var(--radius-md,14px)',
      padding: '13px 20px',
      boxShadow: focus ? 'var(--ring-brand)' : 'none',
      transition: 'border-color var(--dur-base,.2s), box-shadow var(--dur-base,.2s), background var(--dur-base,.2s)',
      opacity: disabled ? 0.5 : 1
    }
  }, iconLeft, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-brand)',
      fontSize: '15px',
      color: onDark ? 'var(--chl-white)' : 'var(--color-ink)'
    }
  }, rest))), msg && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: msgColor
    }
  }, msg));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Newsletter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CHL Group — Newsletter
 * Inline email-capture block (the brand's core "subscribe to investor
 * updates" action). Works on light, cream, dark, or teal grounds.
 */
function Newsletter({
  title = 'Get shareholder updates direct to your inbox',
  note = 'ASX announcements · CEO videos · Quarterly reports. No spam.',
  placeholder = 'Your email address',
  cta = 'Subscribe',
  variant = 'dark',
  // 'dark' | 'light' | 'teal'
  onSubmit,
  style = {},
  ...rest
}) {
  const [email, setEmail] = React.useState('');
  const onDark = variant === 'dark';
  const submit = e => {
    e.preventDefault();
    onSubmit && onSubmit(email);
  };
  const labelColor = variant === 'teal' ? 'rgba(20,22,35,0.7)' : onDark ? 'var(--chl-white-50)' : 'var(--color-ink-muted)';
  return /*#__PURE__*/React.createElement("form", _extends({
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-brand)',
      fontSize: '12px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: labelColor
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    type: "email",
    placeholder: placeholder,
    value: email,
    onChange: e => setEmail(e.target.value),
    onDark: onDark,
    style: {
      flex: 1,
      minWidth: '220px'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: variant === 'teal' ? 'dark' : 'primary'
  }, cta)), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-brand)',
      fontSize: '12px',
      color: labelColor
    }
  }, note));
}
Object.assign(__ds_scope, { Newsletter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Newsletter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CHL Group — Tabs
 * Pill segmented control (as used for Board / Executive team toggle).
 * The active tab fills dark navy with white text on a cream track.
 */
function Tabs({
  tabs = [],
  // [{ id, label }]
  value,
  // controlled active id
  defaultValue,
  onChange,
  onDark = false,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? tabs[0]?.id);
  const active = value ?? internal;
  const select = id => {
    setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: '4px',
      padding: '4px',
      background: onDark ? 'var(--surface-glass-dark)' : 'var(--surface-cream)',
      border: onDark ? '1px solid var(--chl-white-10)' : 'none',
      borderRadius: 'var(--radius-pill, 100px)',
      ...style
    }
  }, rest), tabs.map(t => {
    const isActive = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => select(t.id),
      style: {
        padding: '10px 24px',
        borderRadius: 'var(--radius-pill, 100px)',
        border: 'none',
        fontFamily: 'var(--font-brand)',
        fontSize: '14px',
        fontWeight: 600,
        cursor: 'pointer',
        background: isActive ? 'var(--surface-dark)' : 'transparent',
        color: isActive ? 'var(--chl-white)' : onDark ? 'var(--chl-white-50)' : 'var(--color-ink-muted)',
        transition: 'background var(--dur-base,.2s), color var(--dur-base,.2s)',
        whiteSpace: 'nowrap'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/investor_hub/App.jsx
try { (() => {
/* CHL Group — Investor Hub · interactive recreation.
   Composes the CHL design-system components. Assigns window.InvestorHubApp. */
(function () {
  const React = window.React;
  const {
    useState
  } = React;
  const DS = window.CHLGroupDesignSystem_a19f76;
  const {
    Button,
    IconButton,
    Badge,
    Card,
    Avatar,
    Eyebrow,
    Stat,
    Newsletter,
    Tabs,
    MapShape
  } = DS;
  const I = window.CHLIcons;
  const LOGO = '../../assets/logos/CHL-Group-Wide.svg';
  const SECTION_X = 'clamp(24px, 5vw, 60px)';

  /* ---------------- NAV ---------------- */
  function Nav() {
    return React.createElement('nav', {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(20,22,35,0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-on-dark)'
      }
    }, React.createElement('div', {
      style: {
        background: 'var(--color-brand)',
        color: 'var(--color-brand-contrast)',
        fontSize: 11.5,
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        padding: '7px 24px',
        flexWrap: 'wrap'
      }
    }, React.createElement('span', null, 'ASX: CHL'), React.createElement('span', null, 'Share Price: ', React.createElement('strong', null, '$0.37 AUD'), '  ▲ +1.4%'), React.createElement('a', {
      href: '#subscribe',
      style: {
        color: 'inherit',
        fontWeight: 700,
        textDecoration: 'none'
      }
    }, 'Get investor updates →')), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px ' + SECTION_X,
        gap: 24
      }
    }, React.createElement('img', {
      src: LOGO,
      alt: 'CHL Group',
      style: {
        height: 34,
        filter: 'brightness(0) invert(1)'
      }
    }), React.createElement('ul', {
      style: {
        display: 'flex',
        gap: 30,
        listStyle: 'none',
        margin: 0,
        padding: 0
      }
    }, ['News', 'Performance', 'Why Invest', 'Our Brands', 'Investor Tools', 'Our Team'].map(t => React.createElement('li', {
      key: t
    }, React.createElement('a', {
      href: '#',
      style: {
        color: 'var(--chl-white-75)',
        fontSize: 13,
        fontWeight: 500,
        textDecoration: 'none'
      }
    }, t)))), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 10
      }
    }, React.createElement(Button, {
      variant: 'outline',
      onDark: true,
      size: 'sm'
    }, 'Shareholder Login'), React.createElement(Button, {
      variant: 'primary',
      size: 'sm'
    }, 'Get Updates'))));
  }

  /* ---------------- HERO ---------------- */
  function Hero() {
    const [subscribed, setSubscribed] = useState(false);
    return React.createElement('section', {
      style: {
        background: 'var(--surface-dark)',
        padding: `72px ${SECTION_X}`,
        position: 'relative',
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 80% at 82% 45%, rgba(68,176,191,0.14), transparent)',
        pointerEvents: 'none'
      }
    }), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)',
        gap: 56,
        alignItems: 'center',
        maxWidth: 1440,
        margin: '0 auto',
        position: 'relative'
      }
    }, React.createElement('div', null, React.createElement(Badge, {
      tone: 'tint',
      dot: true,
      onDark: true,
      style: {
        marginBottom: 22,
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }
    }, 'ASX Listed · CHL · Adventure Travel'), React.createElement('h1', {
      style: {
        font: 'var(--fw-bold) clamp(38px,5vw,62px)/1.08 var(--font-brand)',
        letterSpacing: '-0.02em',
        color: 'var(--chl-white)',
        margin: '0 0 18px'
      }
    }, 'Invest in the future of ', React.createElement('span', {
      style: {
        color: 'var(--color-brand)'
      }
    }, 'adventure'), ' travel.'), React.createElement('p', {
      style: {
        color: 'var(--chl-white-75)',
        fontSize: 17,
        lineHeight: 1.65,
        maxWidth: 480,
        margin: '0 0 30px'
      }
    }, 'CHL Group is reimagining how the world experiences the outdoors — connecting van owners with adventurers across seven countries through technology-led platforms.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        marginBottom: 30
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'lg'
    }, 'Why Invest in CHL'), React.createElement(Button, {
      variant: 'outline',
      onDark: true,
      size: 'lg'
    }, 'ASX Announcements')), subscribed ? React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: 'var(--chl-bay-blue)',
        fontSize: 14,
        fontWeight: 600
      }
    }, React.createElement(I.Check, {
      size: 20
    }), 'Thanks — you’re on the list.') : React.createElement(Newsletter, {
      variant: 'dark',
      onSubmit: () => setSubscribed(true)
    })), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, React.createElement(SharePriceCard, null), React.createElement(VideoCard, null))));
  }
  function SharePriceCard() {
    return React.createElement(Card, {
      variant: 'glass'
    }, React.createElement('div', {
      style: {
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: 'var(--chl-white-50)',
        marginBottom: 8
      }
    }, 'CHL Share Price · ASX'), React.createElement('div', {
      style: {
        fontSize: 40,
        fontWeight: 700,
        color: 'var(--chl-white)'
      }
    }, '$0.37 ', React.createElement('span', {
      style: {
        fontSize: 15,
        fontWeight: 400,
        color: 'var(--chl-white-50)'
      }
    }, 'AUD')), React.createElement('div', {
      style: {
        fontSize: 13,
        color: 'var(--chl-bay-blue)',
        marginTop: 4
      }
    }, '▲ +0.01 (+1.39%) today'), React.createElement('div', {
      style: {
        marginTop: 16,
        height: 60
      }
    }, React.createElement('svg', {
      viewBox: '0 0 300 60',
      preserveAspectRatio: 'none',
      style: {
        width: '100%',
        height: '100%'
      }
    }, React.createElement('defs', null, React.createElement('linearGradient', {
      id: 'cg',
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 1
    }, React.createElement('stop', {
      offset: '0%',
      stopColor: '#44B0BF',
      stopOpacity: 0.3
    }), React.createElement('stop', {
      offset: '100%',
      stopColor: '#44B0BF',
      stopOpacity: 0
    }))), React.createElement('path', {
      d: 'M0 40 L30 36 L60 42 L90 32 L110 38 L140 25 L170 30 L200 20 L230 28 L260 18 L300 22',
      stroke: '#44B0BF',
      strokeWidth: 2,
      fill: 'none',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }), React.createElement('path', {
      d: 'M0 40 L30 36 L60 42 L90 32 L110 38 L140 25 L170 30 L200 20 L230 28 L260 18 L300 22 L300 60 L0 60 Z',
      fill: 'url(#cg)'
    }))), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 14
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'sm'
    }, 'Shareholder Login'), React.createElement(Button, {
      variant: 'outline',
      onDark: true,
      size: 'sm'
    }, 'ASX Announcements')));
  }
  function VideoCard() {
    return React.createElement(Card, {
      variant: 'glass',
      interactive: true,
      padding: '0',
      style: {
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        height: 172,
        background: 'linear-gradient(135deg,#1a3040,#0d2030)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(IconButton, {
      variant: 'primary',
      size: 'lg',
      'aria-label': 'Play CEO update',
      style: {
        boxShadow: 'var(--glow-brand)'
      }
    }, React.createElement(I.Play, {
      size: 22
    }))), React.createElement('div', {
      style: {
        padding: '16px 20px'
      }
    }, React.createElement('div', {
      style: {
        fontSize: 10.5,
        fontWeight: 700,
        color: 'var(--color-brand)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }
    }, 'Latest CEO Update'), React.createElement('div', {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--chl-white)',
        marginTop: 4
      }
    }, 'CEO Justin Hales — Q3 Business Update'), React.createElement('div', {
      style: {
        fontSize: 12,
        color: 'var(--chl-white-50)',
        marginTop: 3
      }
    }, 'February 2025 · 8 min watch')));
  }

  /* ---------------- SECTION HELPERS ---------------- */
  function SectionHead({
    eyebrow,
    title,
    sub,
    action,
    onDark
  }) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 16,
        marginBottom: 44,
        flexWrap: 'wrap',
        maxWidth: 1440,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    }, React.createElement('div', null, React.createElement(Eyebrow, null, eyebrow), React.createElement('h2', {
      style: {
        font: 'var(--fw-bold) clamp(28px,3vw,40px)/1.12 var(--font-brand)',
        letterSpacing: '-0.02em',
        margin: '10px 0 0',
        color: onDark ? 'var(--chl-white)' : 'var(--color-ink)'
      }
    }, title), sub && React.createElement('p', {
      style: {
        fontSize: 16,
        lineHeight: 1.6,
        margin: '12px 0 0',
        maxWidth: 560,
        color: onDark ? 'var(--chl-white-50)' : 'var(--color-ink-muted)'
      }
    }, sub)), action);
  }

  /* ---------------- METRICS ---------------- */
  function Metrics() {
    const items = [['$315', 'm+', 'Total paid to van owner community'], ['29,300', '+', 'Unique vans listed globally'], ['4.5', 'm+', 'Nights under the stars facilitated'], ['7', '', 'Countries across AU, NZ, UK, DE, AT, ES, NL']];
    return React.createElement('section', {
      style: {
        background: 'var(--surface-dark)',
        padding: `80px ${SECTION_X}`
      }
    }, React.createElement(SectionHead, {
      eyebrow: 'Performance',
      title: 'Numbers that tell our story.',
      sub: 'CHL continues to grow its global community of adventurers and van owners.',
      onDark: true,
      action: React.createElement(Button, {
        variant: 'outline',
        onDark: true
      }, 'View ASX Announcements →')
    }), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 1,
        background: 'var(--border-on-dark)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        maxWidth: 1440,
        margin: '0 auto'
      }
    }, items.map(([v, s, l], i) => React.createElement('div', {
      key: i,
      style: {
        background: 'var(--surface-glass-dark)',
        padding: '36px 28px'
      }
    }, React.createElement(Stat, {
      value: v,
      suffix: s,
      label: l,
      size: 'md',
      onDark: true
    })))));
  }

  /* ---------------- NEWS ---------------- */
  function News() {
    const posts = [['Insurance', 'MyWay Australia Launches Domestic Travel Insurance for Hirers', '19 March 2025', I.Shield, '../../assets/images/RetroRv-19.jpg'], ['Growth', 'Camplify Secures #16 on AFR’s Fast Global Companies List', '13 June 2024', I.TrendingUp, '../../assets/images/DJI_0987.jpg'], ['Travel Trends', 'Camplify Supports Surge in Flexible Road-Trip Travel', '19 June 2024', I.Van, '../../assets/images/CamplifyXkeiranhammond-2.jpg']];
    return React.createElement('section', {
      style: {
        background: 'var(--surface-cream)',
        padding: `80px ${SECTION_X}`
      }
    }, React.createElement(SectionHead, {
      eyebrow: 'News & Media',
      title: 'Latest from CHL Group',
      action: React.createElement(Button, {
        variant: 'dark'
      }, 'View all news →')
    }), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24,
        maxWidth: 1440,
        margin: '0 auto'
      }
    }, posts.map(([cat, title, date, Ico, img], i) => React.createElement(Card, {
      key: i,
      variant: 'surface',
      interactive: true,
      padding: '0',
      style: {
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        height: 168,
        overflow: 'hidden'
      }
    }, React.createElement('img', {
      src: img,
      alt: '',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    })), React.createElement('div', {
      style: {
        padding: 20
      }
    }, React.createElement(Badge, {
      tone: 'tint'
    }, cat), React.createElement('div', {
      style: {
        fontSize: 15,
        fontWeight: 600,
        lineHeight: 1.4,
        margin: '12px 0 10px',
        color: 'var(--color-ink)'
      }
    }, title), React.createElement('div', {
      style: {
        fontSize: 12,
        color: 'var(--color-ink-subtle)'
      }
    }, date), React.createElement('div', {
      style: {
        marginTop: 12
      }
    }, React.createElement(Button, {
      variant: 'text',
      iconRight: React.createElement(I.ArrowRight, {
        size: 15
      })
    }, 'Read more')))))));
  }

  /* ---------------- WHY INVEST ---------------- */
  function WhyInvest() {
    const points = [[I.TrendingUp, 'Your earnings grow the platform', 'Every booking you take increases CHL’s GBV and strengthens the business you invest in.'], [I.Clock, 'Unique insight no analyst has', 'You experience the product first-hand — demand, seasonality, repeat hirers. A genuine edge.'], [I.Home, 'Community with skin in the game', 'As a shareholder you’re invested in features that benefit owners. Your feedback shapes the roadmap.'], [I.Monitor, 'Accessible from $500', 'CHL is listed on the ASX — buy shares through any standard broker account. Start small.']];
    const countries = ['🇦🇺 Australia', '🇳🇿 New Zealand', '🇬🇧 United Kingdom', '🇩🇪 Germany', '🇦🇹 Austria', '🇪🇸 Spain', '🇳🇱 Netherlands'];
    return React.createElement('section', {
      style: {
        background: 'var(--surface-page)',
        padding: `80px ${SECTION_X}`
      }
    }, React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 56,
        alignItems: 'center',
        maxWidth: 1440,
        margin: '0 auto'
      }
    }, React.createElement('div', null, React.createElement(Eyebrow, null, 'Van Owners & Investors'), React.createElement('h2', {
      style: {
        font: 'var(--fw-bold) clamp(28px,3vw,40px)/1.12 var(--font-brand)',
        letterSpacing: '-0.02em',
        margin: '10px 0 16px',
        color: 'var(--color-ink)'
      }
    }, 'You’re already part of the journey. Now own a piece of it.'), React.createElement('p', {
      style: {
        fontSize: 16,
        lineHeight: 1.65,
        color: 'var(--color-ink-muted)',
        margin: '0 0 28px',
        maxWidth: 520
      }
    }, 'If you’re listing your van on Camplify, you’re already growing the CHL business. As a shareholder, you can benefit from the platform’s growth.'), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, points.map(([Ico, t, d], i) => React.createElement('div', {
      key: i,
      style: {
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start'
      }
    }, React.createElement('div', {
      style: {
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-tint)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: 'var(--color-brand)'
      }
    }, React.createElement(Ico, {
      size: 22
    })), React.createElement('div', null, React.createElement('div', {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--color-ink)'
      }
    }, t), React.createElement('div', {
      style: {
        fontSize: 13,
        color: 'var(--color-ink-muted)',
        marginTop: 3,
        lineHeight: 1.5
      }
    }, d))))), React.createElement('div', {
      style: {
        marginTop: 30,
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, React.createElement(Button, {
      variant: 'primary'
    }, 'Get the Investor Kit'), React.createElement(Button, {
      variant: 'dark'
    }, 'Visit Camplify'))), React.createElement(Card, {
      variant: 'glass',
      style: {
        background: 'var(--surface-dark)',
        padding: 44,
        border: 'none'
      }
    }, React.createElement('div', {
      style: {
        position: 'relative',
        zIndex: 1
      }
    }, React.createElement(Stat, {
      value: '$315',
      suffix: 'm+',
      label: 'paid to van owners since launch',
      size: 'lg',
      onDark: true
    }), React.createElement('div', {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 22
      }
    }, countries.map(c => React.createElement(Badge, {
      key: c,
      tone: 'tint',
      onDark: true
    }, c))), React.createElement('div', {
      style: {
        marginTop: 32,
        paddingTop: 26,
        borderTop: '1px solid var(--border-on-dark)'
      }
    }, React.createElement('div', {
      style: {
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: 'var(--chl-white-50)',
        marginBottom: 12
      }
    }, 'Owner quote'), React.createElement('p', {
      style: {
        color: 'var(--chl-white-75)',
        fontSize: 14,
        lineHeight: 1.7,
        fontStyle: 'italic',
        margin: 0
      }
    }, '“I’ve made over $40k renting my motorhome through Camplify. When I heard it was ASX listed, buying shares was a no-brainer.”'), React.createElement('p', {
      style: {
        color: 'var(--color-brand)',
        fontSize: 13,
        marginTop: 10,
        fontWeight: 600
      }
    }, '— Sarah K., Camplify owner, QLD'))))));
  }

  /* ---------------- SUBSCRIBE ---------------- */
  function Subscribe() {
    const [done, setDone] = useState(false);
    return React.createElement('section', {
      id: 'subscribe',
      style: {
        background: 'var(--color-brand)',
        padding: `80px ${SECTION_X}`
      }
    }, React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 56,
        alignItems: 'center',
        maxWidth: 1440,
        margin: '0 auto'
      }
    }, React.createElement('div', null, React.createElement('h2', {
      style: {
        font: 'var(--fw-bold) clamp(28px,3vw,38px)/1.15 var(--font-brand)',
        letterSpacing: '-0.02em',
        color: 'var(--color-ink)',
        margin: 0
      }
    }, 'Stay ahead of the market.'), React.createElement('p', {
      style: {
        color: 'rgba(20,22,35,0.72)',
        marginTop: 12,
        fontSize: 15,
        lineHeight: 1.6,
        maxWidth: 440
      }
    }, 'Subscribe to receive CHL investor updates, ASX announcements, CEO video briefings, and quarterly performance summaries.')), React.createElement('div', null, done ? React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: 'var(--color-ink)',
        fontSize: 15,
        fontWeight: 600
      }
    }, React.createElement(I.Check, {
      size: 22
    }), 'Subscribed — welcome aboard.') : React.createElement(Newsletter, {
      variant: 'teal',
      title: null,
      note: 'No spam. Unsubscribe any time. CHL investor comms only.',
      onSubmit: () => setDone(true)
    }))));
  }

  /* ---------------- INVESTOR TOOLS ---------------- */
  function Tools() {
    const tools = [[I.File, 'ASX Announcements', 'Browse all regulatory filings and market disclosures lodged with the ASX.'], [I.User, 'My Shareholding', 'Log in to the Automic registry to view holdings, update details or elect DRP.'], [I.Download, 'Prospectus & Reports', 'Download the prospectus, annual reports and investor presentations.'], [I.Calendar, 'Investor Calendar', 'Key dates: AGM, half-year and full-year results, trading halts.'], [I.Mail, 'Email Alerts', 'Instant notifications of ASX announcements and CEO updates.'], [I.Monitor, 'Board & Governance', 'Meet the Board and review CHL’s corporate governance framework.']];
    return React.createElement('section', {
      style: {
        background: 'var(--surface-dark)',
        padding: `80px ${SECTION_X}`
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 1440,
        margin: '0 auto'
      }
    }, React.createElement(Eyebrow, null, 'Investor Centre'), React.createElement('h2', {
      style: {
        font: 'var(--fw-bold) clamp(28px,3vw,40px)/1.12 var(--font-brand)',
        letterSpacing: '-0.02em',
        margin: '10px 0 44px',
        color: 'var(--chl-white)'
      }
    }, 'Everything you need in one place.'), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      }
    }, tools.map(([Ico, t, d], i) => React.createElement(Card, {
      key: i,
      variant: 'glass',
      interactive: true,
      padding: '30px'
    }, React.createElement('div', {
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-md)',
        background: 'var(--chl-reef-tint-15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 18,
        color: 'var(--color-brand)'
      }
    }, React.createElement(Ico, {
      size: 24
    })), React.createElement('div', {
      style: {
        fontSize: 16,
        fontWeight: 600,
        color: 'var(--chl-white)'
      }
    }, t), React.createElement('div', {
      style: {
        fontSize: 13,
        color: 'var(--chl-white-50)',
        marginTop: 6,
        lineHeight: 1.5
      }
    }, d), React.createElement('div', {
      style: {
        marginTop: 14,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--color-brand)'
      }
    }, 'Open ', React.createElement(I.ArrowRight, {
      size: 14
    })))))));
  }

  /* ---------------- BRANDS ---------------- */
  function Brands() {
    const brands = [[I.Van, 'Camplify', 'The world’s largest van-sharing marketplace. Connecting owners with adventurers across AU, NZ, UK and ES.', 'Core Platform · AU · NZ · UK · ES'], [I.Home, 'PaulCamper', 'A leading European van-sharing platform based in Berlin, serving Germany, Austria and the Netherlands.', 'European Platform · DE · AT · NL'], [I.Shield, 'MyWay', 'CHL’s global insurance division, protecting hirers and owners across all markets with tailored coverage.', 'Insurance Division · Global']];
    return React.createElement('section', {
      style: {
        background: 'var(--surface-tint)',
        padding: `80px ${SECTION_X}`
      }
    }, React.createElement(SectionHead, {
      eyebrow: 'Portfolio',
      title: 'Three brands, one mission.',
      action: React.createElement(Button, {
        variant: 'dark'
      }, 'Our brands →')
    }), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24,
        maxWidth: 1440,
        margin: '0 auto'
      }
    }, brands.map(([Ico, name, desc, tag], i) => React.createElement(Card, {
      key: i,
      variant: 'surface',
      padding: '32px'
    }, React.createElement('div', {
      style: {
        width: 52,
        height: 52,
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-tint)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-brand)',
        marginBottom: 16
      }
    }, React.createElement(Ico, {
      size: 26
    })), React.createElement('div', {
      style: {
        fontSize: 22,
        fontWeight: 700,
        color: 'var(--color-ink)'
      }
    }, name), React.createElement('div', {
      style: {
        fontSize: 13,
        color: 'var(--color-ink-muted)',
        marginTop: 10,
        lineHeight: 1.6
      }
    }, desc), React.createElement('div', {
      style: {
        marginTop: 16
      }
    }, React.createElement(Badge, {
      tone: 'tint'
    }, tag))))));
  }

  /* ---------------- TEAM ---------------- */
  const BOARD = [['Justin Hales', 'CEO & Executive Director', 'Camplify and CHL’s founder — recognised as an expert in digital, e-commerce and marketplaces; Young Entrepreneur of the Year (Tourism & Hospitality).'], ['Andrew McEvoy', 'Chairperson & Non-Executive Director', 'Chair of Travello, director at Voyages Indigenous Tourism Australia, and former CEO of Tourism Australia.'], ['John Myler', 'Non-Executive Director', 'Experienced insurance executive; former CEO of Auto & General, RACQ Insurance, and Allianz Worldwide Partners.'], ['Mike Rosenbaum', 'Non-Executive Director', 'Founder & CEO of Spacer Technologies; 20+ years in the peer-to-peer and sharing economy.'], ['Karl Trouchet', 'Non-Executive Director', 'Former director of Apollo Tourism & Leisure (ASX:ATL); led six RV-business acquisitions as CFO.'], ['Sharon Xue', 'Non-Executive Director', 'Co-founder of JB Caravans; built a national ecosystem spanning 10+ RV brands.']];
  const EXEC = [['Justin Hales', 'Chief Executive Officer', 'Founder of Camplify and CHL; award-winning marketplace and e-commerce entrepreneur.'], ['Brett Edwards', 'Chief Financial Officer', '35+ years in accounting and financial leadership; former CFO & Company Secretary at ASX-listed Kip McGrath.'], ['Jeremy Gupta', 'Chief Technology Officer', '18+ years in technology, operations and strategy; launched Autotrader in Australia and scaled Loopit.']];
  function Team() {
    const [tab, setTab] = useState('board');
    const people = tab === 'board' ? BOARD : EXEC;
    return React.createElement('section', {
      style: {
        background: 'var(--surface-page)',
        padding: `80px ${SECTION_X}`
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 1440,
        margin: '0 auto'
      }
    }, React.createElement(Eyebrow, null, 'Leadership'), React.createElement('h2', {
      style: {
        font: 'var(--fw-bold) clamp(28px,3vw,40px)/1.12 var(--font-brand)',
        letterSpacing: '-0.02em',
        margin: '10px 0 24px',
        color: 'var(--color-ink)'
      }
    }, 'Meet the team behind CHL.'), React.createElement(Tabs, {
      tabs: [{
        id: 'board',
        label: 'Board of Directors'
      }, {
        id: 'exec',
        label: 'Executive Team'
      }],
      value: tab,
      onChange: setTab,
      style: {
        marginBottom: 40
      }
    }), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 24
      }
    }, people.map(([name, role, bio]) => React.createElement(Card, {
      key: name,
      variant: 'surface',
      interactive: true,
      padding: '0',
      style: {
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        height: 168,
        background: 'var(--surface-dark)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 60% 0%, rgba(68,176,191,0.22), transparent 70%)'
      }
    }), React.createElement(Avatar, {
      name: name,
      size: 88,
      onDark: true,
      style: {
        position: 'relative'
      }
    })), React.createElement('div', {
      style: {
        padding: '20px 22px 24px'
      }
    }, React.createElement('div', {
      style: {
        fontSize: 17,
        fontWeight: 700,
        color: 'var(--color-ink)'
      }
    }, name), React.createElement('div', {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--color-brand)',
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        marginTop: 4
      }
    }, role), React.createElement('div', {
      style: {
        width: 32,
        height: 2,
        background: 'var(--color-brand)',
        borderRadius: 2,
        margin: '14px 0'
      }
    }), React.createElement('div', {
      style: {
        fontSize: 13,
        color: 'var(--color-ink-muted)',
        lineHeight: 1.65
      }
    }, bio)))))));
  }

  /* ---------------- FOOTER ---------------- */
  function Footer() {
    const col = (h, links) => React.createElement('div', null, React.createElement('h4', {
      style: {
        color: 'var(--chl-white)',
        fontSize: 14,
        fontWeight: 600,
        margin: '0 0 16px'
      }
    }, h), links.map(l => React.createElement('a', {
      key: l,
      href: '#',
      style: {
        color: 'var(--chl-white-50)',
        textDecoration: 'none',
        display: 'block',
        marginBottom: 10,
        fontSize: 13
      }
    }, l)));
    return React.createElement('footer', {
      style: {
        background: 'var(--surface-dark-deep)'
      }
    }, React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: 40,
        padding: `60px ${SECTION_X}`,
        maxWidth: 1440,
        margin: '0 auto'
      }
    }, React.createElement('div', null, React.createElement('img', {
      src: LOGO,
      alt: 'CHL Group',
      style: {
        height: 30,
        filter: 'brightness(0) invert(1)',
        opacity: 0.85,
        marginBottom: 16
      }
    }), React.createElement('p', {
      style: {
        fontSize: 13,
        lineHeight: 1.7,
        color: 'var(--chl-white-50)',
        maxWidth: 280,
        margin: 0
      }
    }, 'Camplify Holdings Limited (ASX:CHL) is on a mission to make the outdoors accessible through innovative and scalable tech solutions.'), React.createElement('p', {
      style: {
        marginTop: 16,
        fontSize: 12,
        color: 'rgba(255,255,255,0.28)',
        lineHeight: 1.6
      }
    }, 'CHL was founded in Newcastle, NSW, on the traditional Country of the Awabakal and Worimi peoples.')), col('Company', ['About Us', 'Our Brands', 'Careers', 'Contact']), col('Investors', ['ASX Announcements', 'Shareholder Login', 'Investor Centre', 'Email Alerts']), col('Brands', ['Camplify AU', 'PaulCamper', 'MyWay Insurance', 'News Blog'])), React.createElement('div', {
      style: {
        borderTop: '1px solid var(--border-on-dark)',
        padding: `22px ${SECTION_X}`,
        color: 'rgba(255,255,255,0.3)',
        fontSize: 12,
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 8,
        maxWidth: 1440,
        margin: '0 auto'
      }
    }, React.createElement('span', null, '© 2025 Camplify Holdings Limited (ASX: CHL)'), React.createElement('span', null, 'Privacy · Terms · Governance')));
  }
  function App() {
    return React.createElement('div', {
      style: {
        fontFamily: 'var(--font-brand)',
        background: 'var(--surface-page)'
      }
    }, React.createElement(Nav), React.createElement(Hero), React.createElement(Metrics), React.createElement(News), React.createElement(WhyInvest), React.createElement(Subscribe), React.createElement(Tools), React.createElement(Brands), React.createElement(Team), React.createElement(Footer));
  }
  window.InvestorHubApp = App;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/investor_hub/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/investor_hub/Icons.jsx
try { (() => {
/* CHL outline icon set — single-weight, rounded-join, feather/Lucide style.
   Assigned to window.CHLIcons for use across the Investor Hub UI kit. */
(function () {
  const React = window.React;
  const S = ({
    children,
    size = 24,
    sw = 2,
    ...p
  }) => React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: sw,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...p
  }, children);
  const path = d => React.createElement('path', {
    d
  });
  const el = (t, a) => React.createElement(t, a);
  const Icons = {
    Play: p => S({
      ...p,
      fill: 'currentColor',
      stroke: 'none',
      children: path('M8 5v14l11-7z')
    }),
    ArrowRight: p => S({
      ...p,
      children: path('M5 12h14M13 6l6 6-6 6')
    }),
    TrendingUp: p => S({
      ...p,
      children: [el('polyline', {
        key: 1,
        points: '23 6 13.5 15.5 8.5 10.5 1 18'
      }), el('polyline', {
        key: 2,
        points: '17 6 23 6 23 12'
      })]
    }),
    Clock: p => S({
      ...p,
      children: [el('circle', {
        key: 1,
        cx: 12,
        cy: 12,
        r: 10
      }), path('M12 6v6l4 2')]
    }),
    Home: p => S({
      ...p,
      children: [path('M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z'), el('polyline', {
        key: 2,
        points: '9 22 9 12 15 12 15 22'
      })]
    }),
    Monitor: p => S({
      ...p,
      children: [el('rect', {
        key: 1,
        x: 2,
        y: 3,
        width: 20,
        height: 14,
        rx: 2
      }), path('M8 21h8M12 17v4')]
    }),
    Globe: p => S({
      ...p,
      children: [el('circle', {
        key: 1,
        cx: 12,
        cy: 12,
        r: 10
      }), el('line', {
        key: 2,
        x1: 2,
        y1: 12,
        x2: 22,
        y2: 12
      }), path('M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z')]
    }),
    Users: p => S({
      ...p,
      children: [path('M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'), el('circle', {
        key: 2,
        cx: 9,
        cy: 7,
        r: 4
      }), path('M23 21v-2a4 4 0 00-3-3.87'), path('M16 3.13a4 4 0 010 7.75')]
    }),
    File: p => S({
      ...p,
      children: [path('M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z'), el('polyline', {
        key: 2,
        points: '14 2 14 8 20 8'
      }), el('line', {
        key: 3,
        x1: 16,
        y1: 13,
        x2: 8,
        y2: 13
      }), el('line', {
        key: 4,
        x1: 16,
        y1: 17,
        x2: 8,
        y2: 17
      })]
    }),
    User: p => S({
      ...p,
      children: [path('M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'), el('circle', {
        key: 2,
        cx: 12,
        cy: 7,
        r: 4
      })]
    }),
    Download: p => S({
      ...p,
      children: [path('M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4'), el('polyline', {
        key: 2,
        points: '7 10 12 15 17 10'
      }), el('line', {
        key: 3,
        x1: 12,
        y1: 15,
        x2: 12,
        y2: 3
      })]
    }),
    Calendar: p => S({
      ...p,
      children: [el('rect', {
        key: 1,
        x: 3,
        y: 4,
        width: 18,
        height: 18,
        rx: 2
      }), el('line', {
        key: 2,
        x1: 16,
        y1: 2,
        x2: 16,
        y2: 6
      }), el('line', {
        key: 3,
        x1: 8,
        y1: 2,
        x2: 8,
        y2: 6
      }), el('line', {
        key: 4,
        x1: 3,
        y1: 10,
        x2: 21,
        y2: 10
      })]
    }),
    Mail: p => S({
      ...p,
      children: [path('M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'), el('polyline', {
        key: 2,
        points: '22,6 12,13 2,6'
      })]
    }),
    Shield: p => S({
      ...p,
      children: path('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z')
    }),
    Van: p => S({
      ...p,
      children: [path('M1 3h15v13H1z'), path('M16 8h4l3 3v5h-7'), el('circle', {
        key: 3,
        cx: 5.5,
        cy: 18.5,
        r: 2.5
      }), el('circle', {
        key: 4,
        cx: 18.5,
        cy: 18.5,
        r: 2.5
      })]
    }),
    Check: p => S({
      ...p,
      children: path('M20 6L9 17l-5-5')
    })
  };
  window.CHLIcons = Icons;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/investor_hub/Icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.MapShape = __ds_scope.MapShape;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Newsletter = __ds_scope.Newsletter;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
