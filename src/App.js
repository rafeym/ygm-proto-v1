import { Navbar, Footer } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GlobalStyle from './globalStyles'
import Home from './pages/Home/Home'

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App
