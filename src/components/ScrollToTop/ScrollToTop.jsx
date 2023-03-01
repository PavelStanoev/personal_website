import React, { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";
import { RiArrowUpLine } from "react-icons/ri";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      <div className={styles.top_to_btm}>
        {showTopBtn && (
          <RiArrowUpLine
            onClick={(e) => {
              let hero = document.getElementById("navbar");
              e.preventDefault();
              hero &&
                hero.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              window.history.pushState("navbar", "navbar", "/navbar");
            }}
            className={styles.icon_style}
          />
        )}
      </div>
    </>
  );
};

export default ScrollToTop;
