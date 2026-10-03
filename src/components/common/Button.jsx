import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  as = "button",
  href,
  to,
  target,
  rel,
  onClick,
  fullWidthMobile = true,
  type = "button",
}) {
  const [ripples, setRipples] = useState([]);
  const navigate = useNavigate();

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now();
    setRipples((r) => [...r, { id, x, y, size }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 650);
    onClick?.(e);
    // Support in-app navigation directly from Button via the `to` prop
    // (e.g. <Button to="/contact">Start a Project</Button>). Hash-only
    // targets (e.g. "#open-positions") smooth-scroll to that section on
    // the current page instead of pushing a router navigation, since a
    // programmatic history change doesn't trigger the browser's native
    // anchor-jump behavior.
    if (to) {
      if (to.startsWith("#")) {
        document.getElementById(to.slice(1))?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(to);
      }
    }
  };

  const base =
    "relative overflow-hidden inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 select-none";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm sm:text-base",
    lg: "px-8 py-4 text-base sm:text-lg",
  };
  const variants = {
    primary:
      "bg-royal-gradient text-white shadow-lg shadow-royal-500/30 hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-white text-royal-700 border border-royal-200 hover:border-royal-400 hover:-translate-y-0.5 shadow-sm",
    outline:
      "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:-translate-y-0.5",
    ghost: "bg-royal-50 text-royal-700 hover:bg-royal-100",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${
    fullWidthMobile ? "w-full sm:w-auto" : ""
  } ${className}`;

  const content = (
    <>
      {children}
      {icon && <Icon name={icon} className="w-4 h-4" />}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/40 pointer-events-none animate-ping-once"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
          }}
        />
      ))}
    </>
  );

  const MotionTag = motion[as === "a" ? "a" : "button"];

  return (
    <MotionTag
      whileTap={{ scale: 0.97 }}
      className={classes}
      onClick={handleClick}
      href={as === "a" ? href : undefined}
      target={as === "a" ? target : undefined}
      rel={as === "a" ? rel : undefined}
      type={as === "button" ? type : undefined}
    >
      {content}
    </MotionTag>
  );
}
