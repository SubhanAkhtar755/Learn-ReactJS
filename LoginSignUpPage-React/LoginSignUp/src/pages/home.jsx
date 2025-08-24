
import "../App.css";
import { Link } from "react-router-dom";
import Login from '../components/loginregister/login'
import FabButton from '../components/fabButton/fabButton'
function HomePage() {
  return (
    <div>
     <Login />
     <FabButton />
    </div>
  );
}

export default HomePage;
