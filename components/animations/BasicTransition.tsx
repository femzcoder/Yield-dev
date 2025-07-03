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
  const [phase, setPhase] = useState<"enter" | "exit">(
    show ? "enter" : "exit"
  );
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
    if (phase === "enter" && nodeRef.current) {
      nodeRef.current.style.opacity = "0";
      nodeRef.current.offsetHeight;
      nodeRef.current.style.transition = `opacity ${duration}ms ease-in-out`;
      nodeRef.current.style.opacity = "1";
    }

    if (phase === "exit" && nodeRef.current) {
      nodeRef.current.style.transition = `opacity ${duration}ms ease-in-out`;
      nodeRef.current.style.opacity = "0";
    }
  }, [phase, duration]);

  useEffect(() => {
    if (phase === "exit" && nodeRef.current) {
      const handle = (e: TransitionEvent) => {
        if (e.propertyName === "opacity") {
          setRendered(false);
        }
      };
      const el = nodeRef.current;
      el.addEventListener("transitionend", handle);
      return () => el.removeEventListener("transitionend", handle);
    }
  }, [phase]);

  if (!rendered) return null;

  return (
    <div ref={nodeRef} style={{ opacity: 0 }} className={className}>
      {children}
    </div>
  );
}
