import { useParams } from "react-router-dom";
import DashboardComponent from "./Dashboard";

const Container = () => {
  const { route } = useParams();

  switch (route) {
    case "dashboard":
      return <h1>Dashboard</h1>;
    case "orders":
      return <h1>Orders</h1>;
    case "products":
      return <h1>Products</h1>;
    case "customers":
      return <h1>Customers</h1>;
    case "reports":
      return <h1>Reports</h1>;
    case "integrations":
      return <h1>Integrations</h1>;
    default:
      return <h1>Page not found!</h1>;
  }
};

export default Container;
