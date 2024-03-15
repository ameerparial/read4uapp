const ErrorComponent = ({ errors }) => {
  if (errors && errors.length > 0)
    return (
      <>
        <div class="alert alert-danger">
          <ul>
            {errors.map((err) => (
              <li>{err}</li>
            ))}
          </ul>
        </div>
      </>
    );
  return null;
};

export default ErrorComponent;
