import { useState, useEffect } from "react";

export function useDynamicSVG({ svgPath }) {
  const [SVGComponent, setSVGComponent] = useState(() => null);

  useEffect(() => {
    const loadSVG = async () => {
      try {
        if (svgPath) {
          const module = await import(
            /* @vite-ignore */ `../Icons/${svgPath}.svg`
          );
          setSVGComponent(() => module.ReactComponent);
        }
      } catch (error) {
        console.error("Failed to load SVG:", error);
        setSVGComponent(() => null);
      }
    };

    loadSVG();
  }, [svgPath]);

  return SVGComponent;
}
