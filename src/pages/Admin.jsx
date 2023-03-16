import { useNavigate, useLocation } from 'react-router-dom';
import { useSignOutAdministratorMutation } from '../components/api/apiSlice';
import { getToken, clearToken } from '..//components/utilities/Utilities';

function Admin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [signOutAdministrator, { isLoading, error }] =
    useSignOutAdministratorMutation();

  const handleSignOut = async () => {
    const token = getToken();
    await signOutAdministrator({ headers: { Authorization: token } })
      .unwrap()
      .then(() => {
        clearToken();
        navigate('/');
      })
      .catch((error) => console.log(error));
  };
  const {name, image, email, role} = location?.state;

  return (
    <>
      <div>
        <div>{`Welcome, ${name}`}</div>
        {
          <>
            <div>{email}</div>
            <div>{image}</div>
            <div>{role}</div>
          </>
        }
      </div>
      <button type='button' disabled={isLoading} onClick={handleSignOut}>
        {isLoading ? 'Signing out...' : 'Sign out'}
      </button>
      {error && <div>Failed to sign out: {error.message}</div>}
    </>
  );
}

export default Admin;
