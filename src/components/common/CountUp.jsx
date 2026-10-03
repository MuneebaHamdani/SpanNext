import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export default function CountUp({ value, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    const isFloat = value % 1 !== 0;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      setDisplay(isFloat ? Number(current.toFixed(1)) : Math.round(current));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {display}
      {suffix}
    </motion.span>
  );
}
