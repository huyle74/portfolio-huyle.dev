import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import "../App.css";
import Screen from "@/components/Screen/Screen";
import Introduction from "@/components/Introduction/Introduction";
import Project from "@/components/Projects/Project";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const [screenHeight, setScreenHeight] = useState(0);
  const [ratio, setRatio] = useState(0);
  const [screenAnimated, setScreenAnimated] = useState({
    opacity: 1,
    zIndex: 0,
  });
  const [menuOpacity, setMenuOpacity] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const height = window.innerHeight;
    setScreenHeight(height);

    const app = appRef.current;
    if (!app) return;

    const handleScroll = () => {
      setScrollY(app.scrollTop);
    };

    app.addEventListener("scroll", handleScroll);
    return () => {
      app.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (screenHeight === 0) return;
    const newRatio = Math.min(scrollY / screenHeight, 1);

    if (newRatio === 0) {
      setMenuOpacity(0);
    }
    setRatio(newRatio);

    if (newRatio > 0.2) {
      setMenuOpacity(1);
      return;
    }
    setMenuOpacity(newRatio);
  }, [scrollY, screenHeight]);

  useEffect(() => {
    setScreenAnimated((prev) => ({
      ...prev,
      opacity: 1 - ratio,
      zIndex: ratio >= 1 ? -1 : 0,
    }));
  }, [ratio]);

  return (
    <div className="App" ref={appRef}>
      <Header opacity={menuOpacity} />
      <Screen
        height={100}
        width={100}
        opacity={screenAnimated.opacity}
        zIndex={screenAnimated.zIndex}
      />
      <div
        style={{
          zIndex: 100000,
          width: "100%",
          backgroundColor: "var(--background-color)",
        }}
      >
        <Introduction />
        <Project />
        <Footer />
      </div>
    </div>
  );
}
