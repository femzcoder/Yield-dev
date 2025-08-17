import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

type BasicTransitionProps = {
  show: boolean;
  children: React.ReactNode;
  duration?: number;
  className?: string;
};

export default function BasicTransition({
  show,
  duration = 300,
  children,
  className
}: BasicTransitionProps) {
  const [rendered, setRendered] = useState(show);
  const [phase, setPhase] = useState<"enter" | "exit">(show ? "enter" : "exit");
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      setRendered(true);
      setPhase("enter");
    } else {
      setPhase("exit");
    }
  }, [show]);

  useLayoutEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    if (phase === "enter") {
      node.style.opacity = "0";
      // node.offsetHeight; 
      node.style.transition = `opacity ${duration}ms ease-in-out`;
      node.style.opacity = "1";
    }

    if (phase === "exit") {
      node.style.transition = `opacity ${duration}ms ease-in-out`;
      node.style.opacity = "0";
    }
  }, [phase, duration]);

  useEffect(() => {
    const node = nodeRef.current;
    if (phase === "exit" && node) {
      const handle = (e: TransitionEvent) => {
        if (e.propertyName === "opacity" && e.target === node) {
          setRendered(false);
        }
      };
      node.addEventListener("transitionend", handle);
      return () => node.removeEventListener("transitionend", handle);
    }
  }, [phase]);

  if (!rendered) return null;

  return (
    <div
      ref={nodeRef}
      style={{ opacity: phase === "enter" ? 1 : 0 }}
      className={className}
    >
      {children}
    </div>
  );
}
