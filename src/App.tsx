import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Home from './pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from './theme/theme';
import './theme/App.global.css';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
