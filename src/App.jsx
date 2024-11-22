import { Outlet } from "react-router-dom";
import Header from "./Components/React router/components/Header";
import Footer from "./Components/React router/components/Footer";

const App = () => {

return (

<>
  <Header/>
  <Outlet
  />
  <Footer/>
</>

)
}


export default App;
