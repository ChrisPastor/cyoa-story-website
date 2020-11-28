import React from 'react';
import {Switch, Route} from "react-router-dom";
import MyToolbar from './common/MainToolbar';
import {HomePage} from './pages/home/HomePage';
import './assets/index.scss';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import ProtectedRoute from './auth/protected-route';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './pages/UserProfile/Profile';
import ProfileSettings from './pages/UserProfile/ProfileComponents/ProfileSettings';
import SearchPage from './pages/SearchPage/SearchPage';
import {ProgressSpinner} from "primereact/progressspinner";
import StoryOverview from './pages/home/StoryOverview';

const App = (): JSX.Element => {
    const { isLoading } = useAuth0();

    if(isLoading) {
        return <ProgressSpinner />;
    }

    return (
        <React.Fragment>
            <MyToolbar />
            <Switch>
                <Route exact path="/" >
                    <HomePage />
                </Route>
                <Route path="/home" >
                    <HomePage />
                </Route>
                <Route path="/SearchPage">
                    <SearchPage />
                </Route>
                <Route path="/StoryOverview">
                    <StoryOverview />
                </Route>
                <ProtectedRoute path="/Profile" component={Profile}/>
                <ProtectedRoute path="/ProfileSettings" component={ProfileSettings}/>
            </Switch>
        </React.Fragment>
    );
};

export default App;
