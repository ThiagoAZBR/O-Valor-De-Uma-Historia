import { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Article } from './pages/Article';
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
import './styles/global.scss';

export const projectContext = createContext({});

function App() {
  const [showHome, setShowHome] = useState(true);
  return (
    <projectContext.Provider value={{
      showHome, setShowHome
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
