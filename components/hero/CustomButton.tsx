import React from 'react';
import style from "@/styles/CustomButton.module.css";

const CustomButton: React.FC = () => {
  return (
    <div className={style.button_container}>
      <span className={style.button_text}>Get a Custom Quote Today</span>
      <div className={style.arrow_circle}>
        <span className={style.arrow}>→</span>
      </div>
    </div>
  );
};

export default CustomButton;