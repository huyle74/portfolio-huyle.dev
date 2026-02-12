import "./Screen.css";
import { useRef, useCallback, useState, ReactElement, useEffect } from "react";

interface ScreenProps {
  opacity: number;
  width?: number;
  height?: number;
  display?: string;
  zIndex?: number;
}

export default function Screen({
  opacity,
  width = 100,
  height = 100,
  display = "flex",
  zIndex = 1,
}: ScreenProps) {
  const [newInput, setNewInput] = useState<ReactElement | null>(null);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const handleClickOverlay = useCallback(() => {
    const input = inputRef.current as unknown as HTMLInputElement;
    input.focus();
  }, []);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    [],
  );

  useEffect(() => {
    const input = inputRef.current as unknown as HTMLInputElement;
    const command = input.value.trim().toLowerCase();

    if (command === "about") {
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          setNewInput(<Introduction key={Date.now()} />);
        }
      });
    } else {
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          setNewInput(<CommandNotFound key={Date.now()} />);
        }
      });
    }

    return () => {
      input.removeEventListener("keydown", () => {});
    };
  }, [inputValue]);

  const CommandNotFound = () => {
    return (
      <div className="input-container">
        <p className="gold-neon">
          User:~$
          <span className="error-text">Command not found.</span>
        </p>
      </div>
    );
  };

  return (
    <div
      id="home"
      className="body"
      style={{ opacity, width: `${width}vw`, height: `${height}vh`, display, zIndex }}
      onClick={handleClickOverlay}
    >
      <div className="container screen" ref={infoRef}>
        {newInput ? (
          newInput
        ) : (
          <div className="information">
            <div className="intro-section">
              <div className="intro-text">
                <p className="gold-neon">Hi There,</p>
                <p className="name">I'm Huy Le</p>
                <div className="profession">
                  <p className="gold-neon">Web Developer</p>
                  <p className="gold-neon">FullStack</p>
                </div>
              </div>
              <img
                src="/profile_pic.png"
                alt="Profile Picture"
                className="profile-pic"
                loading="eager"
              />
            </div>
            <div className="welcome-section">
              <p className="gold-neon">Welcome to Huy le Portfolio</p>
              <p className="gold-neon">Type "about" or Scroll</p>
            </div>
            <div className="input-container">
              <p className="gold-neon">User:~$</p>
              <input
                type="text"
                className="input gold-neon"
                autoFocus
                ref={inputRef}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const Introduction = () => {
  return (
    <div className="introduction-container">
      <p className="gold-neon">
        User:~$
        <span>
          Huy Le – Fullstack Web Developer
          <br />
          <span className="white-neon">• Experience</span>
          <br />
          2 years of experience in fullstack web application development
          <br />
          Building scalable, maintainable, and user-focused applications
          <br />
          <span className="white-neon">• Tech Stack</span>
          <br />
          Languages: <span className="yellow-neon">JavaScript</span>,{" "}
          <span className="blue-neon">TypeScript</span>
          <br />
          Frontend: <span className="blue-neon">React</span>,{" "}
          <span className="black-neon">Next.js</span>,{" "}
          <span className="rainbow-neon">Remix</span>, TanStack,{" "}
          <span className="orange-neon">HTML</span>,{" "}
          <span className="deep-blue-neon">CSS</span>
          <br />
          Backend: <span className="green-neon">Node.js</span>,
          <span className="black-neon"> Express</span>,{" "}
          <span className="pink-neon">NestJS</span>
          <br />
          <span className="white-neon">• Additional Strengths</span>
          <br />
          Developing RESTful APIs
          <br />
          Responsive and modern UI development
          <br />
          Writing clean, maintainable, and scalable code
          <br />
          Continuous learning and staying updated with modern web technologies
          <br />
        </span>
      </p>
    </div>
  );
};
