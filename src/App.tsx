import { useQuery } from "./hooks/useQuery";

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  const { data: repositories, isQuery } = useQuery<Repository[]>(
    "https://api.github.com/users/tarikwataya/repos"
  );

  return (
    <ul>
      {isQuery && <p>Waiting...</p>}
      {repositories?.map((repo) => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
