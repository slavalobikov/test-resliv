import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Employees from "./components/Employees";

import {Route} from "react-router-dom";
import Preloader from "./components/Preloader";



function App({isFething, employess, DeleteUser,AddUser}) {


  return (
  <div>
    <Header/>
    {!isFething && <>
      <Route path={'/'} exact component={Main}/>
      <Route path={'/employees'}  render={() => <Employees
          DeleteUser={DeleteUser}
          AddUser={AddUser}
          employess={employess} />}/>
    </>
    }

    {!!isFething && <div className="preloader">
        <Preloader />
    </div>}

  </div>
  );
}

export default App;
