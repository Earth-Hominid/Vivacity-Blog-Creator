const NotFound = () => {
  return (
    <>
      <header className="m-2 p-2">
        <b>404.</b> <ins className="text-stone-600 no-underline">Not Found</ins>
      </header>
      <p className="m-2 p-2">
        It appears the page you are looking for is not on this server.{' '}
        <ins className="text-stone-600 no-underline">
          Click the logo to navigate to our homepage.
        </ins>
      </p>
    </>
  );
};

export default NotFound;
