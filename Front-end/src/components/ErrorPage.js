const ErrorComponent = ({ errors }) => {
  if (errors && errors.length > 0)
    return (
      <>
        <div className="alert alert-danger d-flex p-0 m-0">
          <ul>
            {errors.map((err, index) => (
              <li key={index}>{err}</li>
            ))}
          </ul>
        </div>
      </>
    );
  return null;
};

export default ErrorComponent;
