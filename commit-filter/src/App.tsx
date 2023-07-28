import { useEffect, useState } from "react";

import { commitData } from "./datas/commitData";

import "./App.css";

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
  // (서버에서 가져온다고 가정하자.)
  useEffect(() => {
    setCommits(commitData as []);
  }, []);

  return (
    <>
      <h1>Hello commit filter</h1>
      <input
        type="text"
        name="commitFilterInput"
        id="commitFilterInput"
        onChange={changeCommitPrefix}
      />
      <ul>
        {commits &&
          commits
            .filter(({ commit: { message } }) => {
              const match =
                commitPrefix && RegExp(`^${commitPrefix}.+`).test(message);
              return match;
            })
            .map(({ commit: { message }, idx }) => (
              <li key={idx}>{message}</li>
            ))}
      </ul>
    </>
  );
}

export default App;
