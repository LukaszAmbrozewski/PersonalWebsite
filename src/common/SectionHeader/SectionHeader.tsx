import React from "react";
import "./SectionHeader.css";

interface Props {
  text: string;
  marginTop: string;
}

export const SectionHeader = (props: Props) => {
  return (
    <div className="section-header-box">
      <h2 className="section-header" style={{ marginTop: props.marginTop }}>
        {props.text}
      </h2>
    </div>
  );
};
