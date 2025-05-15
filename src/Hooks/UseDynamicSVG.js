import { useState, useEffect } from "react";

export function useDynamicSVG({ svgPath }) {
  const [SVGComponent, setSVGComponent] = useState(() => null);

  // Preload all SVGs at build time
  const svgModules = import.meta.glob("../Icons/*.svg");

  useEffect(() => {
    const loadSVG = async () => {
      try {
        if (svgPath) {
          const modulePath = `../Icons/${svgPath}.svg`;
          if (svgModules[modulePath]) {
            const module = await svgModules[modulePath]();
            setSVGComponent(() => module.ReactComponent);
          }
        }
      } catch (error) {
        console.error("Failed to load SVG:", error);
        setSVGComponent(() => null);
      }
    };

    loadSVG();
  }, [svgPath, svgModules]);

  return SVGComponent;
}
