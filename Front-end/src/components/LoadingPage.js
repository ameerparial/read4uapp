const LoadingComponent = ({ isLoading }) => {
  return (
    isLoading && (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <div className="circular-loader"></div>
      </div>
    )
  );
};

export default LoadingComponent;
