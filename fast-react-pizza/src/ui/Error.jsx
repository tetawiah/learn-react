import { useNavigate, useRouteError } from 'react-router-dom';
import Button from './Button.jsx';
import LinkButton from './LinkButton.jsx';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}
export default Error;
