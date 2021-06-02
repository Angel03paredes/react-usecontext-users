import logo from './logo.svg';
import './App.css';
import Profile from './components/profile';
import UserList from './components/listUsers';

import UserState from './context/user/userState';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <UserState>
      <div className="container m-4">

        <div className="row">

          <div className="col-md-6" >
            <UserList/>
          </div>

          <div className="col-md-6" >
          <Profile/>
          </div>

        </div>

      </div>
   </UserState>
  );
}

export default App;
