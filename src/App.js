import "./App.css";
import styles from "./custom.module.css";
import { useState } from "react";

function App() {
  const [disable, setDisable] = useState(false);
  const [answer, setAnswer] = useState(false);
  const data = {
    operation: "addition",
    type: "hundreds_chart",
    rows: 1,
    cols: 70,
    questionName: "Find the missing number.",
    questionContent: [{ row: 1, col: 62, value: "62", isMissed: "true" }],
    solution: { model: [{ val: "The missing number is 62." }], sidebyside: [] },
    choices: ["65", "56", "62", "61"],
    choiceType: "selectchoice",
    choiceCount: 4,
    answer: "56",
  };
  const handleClick = (id) => {
    if (Number(id) === Number(data.answer)) {
      setAnswer(true);
      setDisable(true);
    } else {
      setAnswer(false);
      setDisable(true);
    }
  };
  let arr = [];
  for (let i = 0; i < data.cols / 10; i++) {
    let temp = Array(10)
      .fill(0)
      .map((e, j) => j + 1 + 10 * i);

    arr.push(
      <div className={styles.flex}>
        {temp.map((e, j) => {
          if (e === Number(data.answer)) {
            return <div className={styles.brown1}>{"??"}</div>;
          } else {
            return <div className={styles.brown}>{e}</div>;
          }
        })}
      </div>
    );
  }

  return (
    <div className={styles.outer}>
      <div className={styles.bottom}>{arr}</div>

      {data.choices.map((k, i) => (
        <div className={disable ? styles.answer1 : styles.answer}>
          <div
            className={styles.circle}
            onClick={() => {
              handleClick(k);
            }}
          >
            {String.fromCharCode(65 + i)}
          </div>
          <div className={styles.ans}>{Number(k)}</div>
        </div>
      ))}
      {disable ? (
        answer ? (
          <div className={styles.green}>Your Answer is correct</div>
        ) : (
          <div className={styles.red}>Your Answer is incorrect</div>
        )
      ) : null}
    </div>
  );
}

export default App;
