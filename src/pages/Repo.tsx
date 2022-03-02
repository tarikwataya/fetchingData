import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Repository } from "./Repos";

export function Repo() {
  const params = useParams();
  const currentRepository = params["*"] as string;

  const queryClient = useQueryClient();

  function handleChange() {
    // Chamada API para atualizar o repo

    const previousRepos = queryClient.getQueryData<Repository[]>("repos");

    if (previousRepos) {
      const nextRepos = previousRepos.map((repo) => {
        if (repo.full_name === currentRepository) {
          return { ...repo, description: "TESTE" };
        } else {
          return repo;
        }
      });

      queryClient.setQueryData("repos", nextRepos);
    }
  }
  return (
    <div>
      <h1>{currentRepository}</h1>
      <button onClick={handleChange}>Alterar</button>
    </div>
  );
}
