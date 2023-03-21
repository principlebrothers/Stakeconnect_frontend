import { useLocation } from 'react-router-dom';
import Header from '../components/administrator/Header';
import Sidebar from '../components/administrator/Sidebar';

function Admin() {
  const location = useLocation();
  const {
    name = '',
    image = '',
    email = '',
    role = '',
  } = location?.state || {};

  return (
    <>
      <Sidebar />
      <Header
        name={name}
        email={email}
        image={image}
        role={role}
      />
    </>
  );
}

export default Admin;
