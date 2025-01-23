import { useEffect } from "react";

export function useCustomCursor(setCursorVariant: (variant: string) => void) {
    useEffect(() => {
        const cursorDot = document.querySelector(
          "[data-cursor-dot]"
        ) as HTMLElement;
        const cursorOutline = document.querySelector(
          "[data-cursor-outline]"
        ) as HTMLElement;
    
        if (!window.matchMedia("(pointer: fine)").matches) {
          if (cursorDot) cursorDot.style.display = "none";
          if (cursorOutline) cursorOutline.style.display = "none";
          return;
        }
    
        if (cursorDot && cursorOutline) {
          window.addEventListener("mousemove", function (e) {
            const posX = e.clientX;
            const posY = e.clientY;
    
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
    
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
    
            cursorOutline.animate(
              {
                left: `${posX}px`,
                top: `${posY}px`,
              },
              { duration: 500, fill: "forwards" }
            );
    
            const target = e.target as HTMLElement;
            if (target.closest("a, button")) {
              setCursorVariant("cursor-pointer");
            } else if (target.closest("textarea, h1, h2, h3 ,p,input")) {
              setCursorVariant("cursor-text");
            } else {
              setCursorVariant("");
            }
          });
        }
      }, [setCursorVariant]);
}