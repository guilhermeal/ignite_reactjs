export function RepositoryItem(props) {
  return (
    <li>
      <strong>
        <a href={props.repository?.owner.html_url ?? '#'}>{props.repository?.owner.login ?? 'InvalidLogin'}</a>
        <span> / </span>
        {props.repository?.name ?? 'Invalid project name'}
      </strong>
      <p>{props.repository?.description ?? ''}</p>

      <a href={props.repository?.html_url ?? '#'}>
        Acessar repositório
      </a>

    </li>
  );
}