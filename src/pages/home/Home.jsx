import React from 'react';
import { useGetAdministratorsQuery } from '../../components/api/apiSlice';

function Home() {
  const {
    data: Administrators, error, isLoading, isError,
  } = useGetAdministratorsQuery();

  return (
    <>
      <div>{isLoading && <h1>Loading</h1>}</div>
      {isError && <h1>{error.message}</h1>}
      <div>
        {Administrators?.map((administrator) => (
          <div key={administrator.id}>
            <h2>{administrator.name}</h2>
            <p>{administrator.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
