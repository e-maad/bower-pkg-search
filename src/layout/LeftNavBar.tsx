import { useEffect, useState } from "react";
import Sponsors from "./Sponsors";

export default function LeftNavBar() {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMenuVisible(true);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="left-nav-bar">
      <div
        className="left-nav-bar-toggle"
        onClick={() => setIsMenuVisible((value) => !value)}
      >
        Menu
      </div>
      {isMenuVisible && (
        <>
          <ul className="left-nav-bar-internal">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/docs/creating-packages/">Creating Packages</a>
            </li>
            <li>
              <a href="/docs/api/">API</a>
            </li>
            <li>
              <a href="/docs/config/">Configuration</a>
            </li>
            <li>
              <a href="/docs/pluggable-resolvers/">Pluggable Resolvers</a>
            </li>
            <li>
              <a href="/docs/tools/">Tools</a>
            </li>
            <li>
              <a href="/docs/about/">About</a>
            </li>
          </ul>
          <Sponsors />
          <ul className="left-nav-bar-external">
            <li>
              <a href="https://github.com/bower/bower">
                <svg>
                  <use xlinkHref="#symbol-github-logo"></use>
                </svg>{" "}
                Bower on GitHub
              </a>
            </li>
            <li>
              <a href="https://twitter.com/bower">
                <svg>
                  <use xlinkHref="#symbol-twitter-logo"></use>
                </svg>{" "}
                @bower
              </a>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
