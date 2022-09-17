import React from "react";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <p>
        Hata durumunda ve butonların çalışmaması durumunda sayfayı yenileyiniz
      </p>
    </div>
  );
}

export default Footer;
