import React, { useState } from "react";
//import styled from "styled-components";
import styles from "./App.module.css"

const ColorPicker: React.FC = () => {
  const [red, setRed] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);
  const [alpha, setAlpha] = useState<number>(1);

  const handleRedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRed(parseInt(event.target.value));
  };

  const handleGreenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGreen(parseInt(event.target.value));
  };

  const handleBlueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlue(parseInt(event.target.value));
  };

  const handleAlphaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlpha(parseFloat(event.target.value));
  };

  const rgbaString = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  

  return (
    <div className={styles.container} >
      <preview style={{ backgroundColor: rgbaString }} />
      <label>Red</label>
      <input type="range" min="0" max="255" value={red} onChange={handleRedChange} />
      <value>{red}</value>
      <label>Green</label>
      <input type="range" min="0" max="255" value={green} onChange={handleGreenChange} />
      <Value>{green}</Value>
      <label>Blue</label>
      <input type="range" min="0" max="255" value={blue} onChange={handleBlueChange} />
      <Value>{blue}</Value>
      <label>Alpha</label>
      <input type="range" min="0" max="1" step="0.01" value={alpha} onChange={handleAlphaChange} />
      <Value>{alpha}</Value>
    </div>
  );
};


export default ColorPicker;
