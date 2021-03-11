export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default names'}</strong>
      <p>{props.repository?.description ?? 'None'}</p>

      <a href={props.repository?.link ?? '#'}>
        Acessar repositório
      </a>

    </li>
  );
}