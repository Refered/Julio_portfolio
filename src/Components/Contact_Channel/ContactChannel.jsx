import { useRef, useEffect, useState } from "react";
import "./ContactChannel.css";
import { useDynamicSVG } from "../../Hooks/UseDynamicSVG.js";

const ContactChannel = ({ card_icon, card_text, card_link }) => {
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
    <div className="contact_channel_container">
      {Icon && (
        <a className="icon_container" href={card_link} target="blank">
          <Icon
            ref={svgRef}
            viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          />
        </a>
      )}
      <div className="text_container">
        <p>{card_text}</p>
      </div>
    </div>
  );
};

export default ContactChannel;
