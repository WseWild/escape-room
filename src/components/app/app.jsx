import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import { AppRoute } from '../../const';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={AppRoute.DetailedQuest}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route path={AppRoute.Root}>
          <Home />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
