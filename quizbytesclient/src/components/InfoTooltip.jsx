import React, { useState, useRef } from "react";
import InfoIcon from '@mui/icons-material/Info';

function InfoTooltip({ text }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const isHovering = useRef(false);

  const handleMouseEnter = () => {
    isHovering.current = true;
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
    setShowTooltip(false);
  };

  const handleTouchStart = () => {
    isHovering.current = true;
    setShowTooltip(true);
  };

  const handleTouchEnd = () => {
    isHovering.current = false;
    setShowTooltip(false);
  };

  const handleMouseMove = () => {
    if (!isHovering.current) {
      setShowTooltip(false);
    }
  };

  return (
    <div className="info-tooltip">
      <InfoIcon
        className="info-tooltip__icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseMove={handleMouseMove}
      />
      {showTooltip && (
        <div className="info-tooltip__text">
          {text &&
            text.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
        </div>
      )}
    </div>
  );
}

export default InfoTooltip;