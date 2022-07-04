export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <br />
      <span>{props.content}</span>
    </div>
  );
}
