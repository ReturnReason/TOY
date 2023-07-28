interface CommitMessageProps {
  commits:
    | {
        commit: {
          message: string;
        };
      }[]
    | null;
  commitPrefix: string;
}

export default function CommitMessage({
  commits,
  commitPrefix,
}: CommitMessageProps) {
  return (
    <ul>
      {commits &&
        commits
          .filter(({ commit: { message } }) => {
            const match =
              commitPrefix && RegExp(`^${commitPrefix}.+`).test(message);
            return match;
          })
          .map(({ commit: { message } }, idx) => (
            <li key={`${message} ${idx}`}>{message}</li>
          ))}
    </ul>
  );
}
