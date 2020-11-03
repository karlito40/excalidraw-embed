import React, { useEffect } from "react";

import { InitializeApp } from "./components/InitializeApp";
import App from "./components/App";

import "../public/fonts.css";
import "./css/app.scss";
import "./css/styles.scss";

import { ExcalidrawProps } from "./types";

const Excalidraw = (props: ExcalidrawProps) => {
  const {
    width,
    height,
    onChange,
    initialData,
    user,
    onUsernameChange,
    options,
  } = props;

  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      // @ts-ignore
      if (event.scale !== 1) {
        event.preventDefault();
      }
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      // @ts-ignore
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <InitializeApp>
      <App
        width={width}
        height={height}
        onChange={onChange}
        initialData={initialData}
        user={user}
        onUsernameChange={onUsernameChange}
        options={options}
      />
    </InitializeApp>
  );
};
export default Excalidraw;
