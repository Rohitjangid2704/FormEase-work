/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconInside14 } from "../../icons/IconInside14";
import { IconErrorWarning } from "../IconErrorWarning";
import { PropertyDefault } from "../PropertyDefault";
import "./style.css";

export const Base = ({
  className,
  emailClassName,
  text = "Label",
  formFieldClassName,
  inputTextClassName,
  text1 = "Input",
  icon = <IconInside14 className="icon-inside" />,
  visible = true,
  frameClassName,
  frameClassNameOverride,
  visible1 = true,
  visible2 = true,
  hasFrame = true,
  hasFormField = true,
  hasInputText = true,
  inputType = "text",
}) => {
  return (
    <div className={`base ${className}`}>
      <div className={`email ${emailClassName}`}>{text}</div>
      <div className={`frame ${frameClassName}`}>
        {hasFormField && (
          <div className={`form-field ${formFieldClassName}`}>
            {hasFrame && (
              <div className={`div ${frameClassNameOverride}`}>
                {hasInputText && (
                  <input className={`input-text ${inputTextClassName}`} placeholder={text1} type={inputType} />
                )}

                {visible1 && <PropertyDefault className="cursor" />}
              </div>
            )}

            {visible2 && <>{icon}</>}
          </div>
        )}

        {visible && <IconErrorWarning className="icon-outside" />}
      </div>
    </div>
  );
};

Base.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
  visible2: PropTypes.bool,
  hasFrame: PropTypes.bool,
  hasFormField: PropTypes.bool,
  hasInputText: PropTypes.bool,
  inputType: PropTypes.string,
};
