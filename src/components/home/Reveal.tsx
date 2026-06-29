"use client";

import {
  createElement,
  CSSProperties,
  ElementType,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

/* Entrance animation — visible by default, animates additively (transform only)
   when JS adds .anim, so content can never be left invisible. Ported from the
   Claude Design project's shared-data.jsx <Reveal>. */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  style = {},
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const go = () => {
      if (!done) {
        done = true;
        setAnim(true);
      }
    };
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            go();
            io.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
      );
      io.observe(el);
      const r = el.getBoundingClientRect();
      if (r.top < (window.innerHeight || 800) * 1.05) {
        requestAnimationFrame(() => requestAnimationFrame(go));
      }
      const t = setTimeout(go, 900);
      return () => {
        io.disconnect();
        clearTimeout(t);
      };
    }
    go();
  }, []);

  // createElement (with a permissive tag) avoids the "props collapse to never"
  // error TS hits when a polymorphic ElementType is combined with a ref.
  return createElement(
    Tag as ElementType,
    {
      ref,
      className: `reveal ${anim ? "anim" : ""} ${className}`,
      style: { animationDelay: `${delay}ms`, ...style },
    },
    children
  );
}
