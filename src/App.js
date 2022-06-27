import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/Homepage";
import SinglePage from "./pages/Singlepage";

const App = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <div className="container">
            <Switch>
               <Route exact path="/" component={HomePage} />
               <Route path="/singleshow/:id" component={SinglePage} />
            </Switch>
         </div>
      </BrowserRouter>
   );
};

export default App;
