import { useEffect, useState } from "react";
import "./App.scss";
import useWindowSize from "./utils/UseWindowSize";

function App() {
  const windowSize = useWindowSize();
  const [column, setColumn] = useState<number>(0);
  const [row, setRow] = useState<number>(0);
  useEffect(() => {
    if (
      windowSize &&
      !!windowSize.height &&
      !!windowSize.width &&
      windowSize.height > 0 &&
      windowSize.width > 0
    ) {
      setColumn(Math.trunc(windowSize.width / (windowSize.width * 0.06)));
      setRow(Math.trunc(windowSize.height / (windowSize.width * 0.06)));
    }
  }, [windowSize]);

  return (
    <div className="App">
      <h1>Under Construction</h1>
      {column > 0 &&
        row > 0 &&
        Array.from(Array(Math.trunc(row)).keys()).map((eachLigne) => (
          <div
            style={{ animationDelay: eachLigne + 2 + "s" }}
            key={eachLigne}
            className="squares-container"
          >
            {Array.from(Array(Math.trunc(column - eachLigne - 5)).keys()).map(
              (eachSquare) => (
                <div
                  style={{ animationDelay: eachSquare + 2 + "s" }}
                  key={eachSquare}
                  className="lego-square"
                ></div>
              )
            )}
          </div>
        ))}
    </div>
  );
}

export default App;
