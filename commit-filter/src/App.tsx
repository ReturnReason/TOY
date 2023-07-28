import { useEffect, useState } from "react";

// import { commitData } from "./datas/commitData";

import "./App.css";
import CommitMessage from "./components/CommitMessage";

type TargetType = {
  target: { value: string };
};

function App() {
  const [commitPrefix, setCommitPrefix] = useState<string>("");
  const [commits, setCommits] = useState<null | []>(null);

  const changeCommitPrefix = ({ target: { value } }: TargetType) => {
    setCommitPrefix(value);
  };

  // 외부에 있는 값을 비동기적으로 가져올 때는 useEffect를 사용
  useEffect(() => {
    (async function getData() {
      try {
        const res = await fetch(
          `https://api.github.com/repos/ReturnReason/TOY/commits`
        );
        const data = await res.json();
        setCommits(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <>
      <h1>Commit filter</h1>
      <input
        type="text"
        name="commitFilterInput"
        id="commitFilterInput"
        onChange={changeCommitPrefix}
      />
      <CommitMessage {...{ commits, commitPrefix }} />
    </>
  );
}

export default App;
