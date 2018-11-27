const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

// requireAuthentication

const requireAuthentication = (WrappedComponent) => {
  return (props) => {
      if(!props.isAuthenticated) {
        return (<p>Please log in!</p>);
      }
      else {
        return <WrappedComponent {...props} />
      }
  }
};

const AuthInfo = requireAuthentication(Info);


ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));