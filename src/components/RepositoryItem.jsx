export function RepositoryItem(props) {
    console.log(props)
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>

            <a href={props.repository.url}>
                {props.repository.name}
            </a>
        </li>
    );
}