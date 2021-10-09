import "./App.css";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";
import ViewArtists from "./pages/ViewArtists";
import User from "./pages/User";
import CreateConcert from "./pages/CreateConcert";
import EditUser from "./components/userComponents/EditUser";
import ViewVenues from "./pages/ViewVenues";
import Tickets from "./pages/Tickets";

function App() {
  return (
    <>
      <NavBar />
      <FetchUser>
        <Container>
          <Switch>

            <Route exact path="/user" component={User} />
            <Route exact path="/user/edit" component={EditUser} />
            <Route exact path="/createconcert" component={CreateConcert} />
            {/* <ProtectedRoute exact path="/maketickets" component={MakeTickets} /> */}
            
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path='/artists' component={ViewArtists} />
            {/* <Route exact path='/graphs' component={Graphs} /> */}
            {/* <Route exact path='/artist/:id' component={ViewArtist} /> */}
            <Route exact path='/venues' component={ViewVenues} />
            {/* <Route exact path='/venue/:id' component={VenueCalendar} /> */}

            <Route component={() => <p>react router 404 path not found</p>} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;