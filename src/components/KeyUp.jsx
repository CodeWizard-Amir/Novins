import React, { useEffect } from "react";

const KeyUp = () => {
  const goToUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const KeyUpBtn = document.getElementById("KeyUpBtn");
      if (window.scrollY >= 300) {
        KeyUpBtn.classList.add("lg:top-[92%]");
        KeyUpBtn.classList.add("top-[85%]");
        KeyUpBtn.classList.remove("-top-[92%]");
      } else {
        KeyUpBtn.classList.remove("lg:top-[92%]");
        KeyUpBtn.classList.remove("top-[85%]");
        KeyUpBtn.classList.add("-top-[92%]");
      }
    });
  }, []);
  return (
    <button
      id='KeyUpBtn'
      onClick={() => goToUp()}
      className='fixed flex justify-center z-[100] items-center rounded-md duration-[1s] -top-[92%] ring-4 ring-red-200 left-[1%] w-12 h-12 bg-red-500 text-white fas fa-arrow-up text-xl font-bold'
    ></button>
  );
};

export default KeyUp;
