import { useState, useEffect } from "react";

const svgModules = import.meta.glob("../Icons/*.svg");

export function useDynamicSVG({ svgPath }) {
  const [SVGComponent, setSVGComponent] = useState(() => null);

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
