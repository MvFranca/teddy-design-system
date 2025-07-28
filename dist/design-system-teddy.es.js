import { jsx as l } from "react/jsx-runtime";
function d(r) {
  var o, e, t = "";
  if (typeof r == "string" || typeof r == "number") t += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var a = r.length;
    for (o = 0; o < a; o++) r[o] && (e = d(r[o])) && (t && (t += " "), t += e);
  } else for (e in r) r[e] && (t && (t += " "), t += e);
  return t;
}
function m() {
  for (var r, o, e = 0, t = "", a = arguments.length; e < a; e++) (r = arguments[e]) && (o = d(r)) && (t && (t += " "), t += o);
  return t;
}
const s = {
  primaryMain: "rgba(236, 103, 36, 1)",
  primaryContrast: "#FFFFFF",
  disabledOpacity: 0.5,
  borderDefault: "rgba(217, 217, 217, 1)",
  textPrimary: "#000000"
}, x = {
  fontWeightBold: 700
}, p = {
  sm: "h-[40px] px-4 text-sm sm:text-base",
  md: "h-[50px] px-6 text-base sm:text-lg",
  lg: "h-[60px] px-8 text-xl sm:text-2xl"
}, c = ({
  children: r,
  variant: o = "solid",
  size: e = "md",
  fullWidth: t = !1,
  className: a,
  ...i
}) => {
  const n = o === "outline";
  return /* @__PURE__ */ l(
    "button",
    {
      ...i,
      className: m(
        "rounded-[4px] font-medium border-2",
        p[e],
        t ? "w-full" : "w-fit",
        a
      ),
      style: {
        backgroundColor: n ? "transparent" : s.primaryMain,
        color: n ? s.primaryMain : s.primaryContrast,
        fontWeight: x.fontWeightBold,
        borderColor: s.primaryMain,
        borderRadius: "4px",
        opacity: i.disabled ? s.disabledOpacity : 1
      },
      children: r
    }
  );
}, u = {
  sm: "h-[40px] text-sm sm:text-base",
  md: "h-[50px] text-base sm:text-lg",
  lg: "h-[60px] text-xl sm:text-2xl"
}, f = ({
  inputSize: r = "md",
  fullWidth: o = !1,
  className: e,
  ...t
}) => /* @__PURE__ */ l(
  "input",
  {
    ...t,
    className: m(
      "rounded px-4 border-2 outline-none",
      u[r],
      o ? "w-full" : "w-fit",
      e
    ),
    style: {
      backgroundColor: s.primaryContrast,
      color: s.textPrimary,
      borderColor: s.borderDefault,
      opacity: t.disabled ? s.disabledOpacity : 1,
      borderWidth: "0.125rem",
      borderRadius: "0.25rem"
    }
  }
);
export {
  c as Button,
  f as Input
};
