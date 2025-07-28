import { jsx as p } from "react/jsx-runtime";
function l(t) {
  var a, o, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (a = 0; a < i; a++) t[a] && (o = l(t[a])) && (r && (r += " "), r += o);
  } else for (o in t) t[o] && (r && (r += " "), r += o);
  return r;
}
function m() {
  for (var t, a, o = 0, r = "", i = arguments.length; o < i; o++) (t = arguments[o]) && (a = l(t)) && (r && (r += " "), r += a);
  return r;
}
const s = {
  primaryMain: "rgba(236, 103, 36, 1)",
  primaryContrast: "#FFFFFF",
  disabledOpacity: 0.5
}, d = {
  fontWeightBold: 700
}, x = {
  sm: "h-[40px] px-4 text-sm sm:text-base",
  md: "h-[50px] px-6 text-base sm:text-lg",
  lg: "h-[60px] px-8 text-xl sm:text-2xl"
}, c = ({ children: t, variant: a = "solid", size: o = "md", fullWidth: r = !1, className: i, ...n }) => {
  const e = a === "outline";
  return p("button", { ...n, className: m("rounded-[4px] font-medium border-2", x[o], r ? "w-full" : "w-fit", i), style: {
    backgroundColor: e ? "transparent" : s.primaryMain,
    color: e ? s.primaryMain : s.primaryContrast,
    fontWeight: d.fontWeightBold,
    borderColor: s.primaryMain,
    borderRadius: "4px",
    opacity: n.disabled ? s.disabledOpacity : 1
  }, children: t });
};
export {
  c as Button
};
