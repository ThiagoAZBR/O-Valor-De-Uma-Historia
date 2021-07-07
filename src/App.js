import { createContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Article } from './pages/Article';
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';

export const projectContext = createContext({});

function App() {
  return (
    <projectContext.Provider value={{

    }} >
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/pages/settings' exact component={Settings} />
          <Route path='/pages/article' exact component={Article} />
        </Switch>
      </BrowserRouter>
    </projectContext.Provider>
  );
}

export default App;
