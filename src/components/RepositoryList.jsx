import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

// Repositorios RocketSeat
// https://api.github.com/orgs/rocketseat/repos

// Repositorios GuilhermeAL
// https://api.github.com/users/guilhermeal/repos

// Perfil GuilhermeAL
// https://api.github.com/users/guilhermeal

const repository = {
  name: 'Unform X',
  description: 'Forms in React',
  link: "https://github.com/unform/unform",
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(()=> {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}