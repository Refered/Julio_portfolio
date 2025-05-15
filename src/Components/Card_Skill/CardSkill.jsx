import { useRef, useEffect, useState } from "react";
import "./CardSkill.css";
import { useDynamicSVG } from "../../Hooks/UseDynamicSVG.js";

const CardSkill = ({ card_icon, card_title, card_text }) => {
  const Icon = useDynamicSVG({
    svgPath: card_icon,
  });
  const svgRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (svgRef.current) {
      const width = svgRef.current.getAttribute("width");
      const height = svgRef.current.getAttribute("height");

      setDimensions({
        width: width || 0,
        height: height || 0,
      });
    }
  }, [Icon]);

  return (
    <div className="card_skill_container">
      {Icon && (
        <div className="icon_container">
          <Icon
            ref={svgRef}
            viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          />
        </div>
      )}
      <div className="text_container">
        <h3>{card_title}</h3>
        <p>{card_text}</p>
      </div>
    </div>
  );
};

export default CardSkill;
