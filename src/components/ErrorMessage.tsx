interface Props {
  message: string;
}
function ErrorMessage({ message }: Props) {
  return (
    <div>
      <h2>⚠️ Error</h2>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
