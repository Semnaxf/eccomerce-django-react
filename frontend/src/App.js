import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './componentes/Header'
import Footer from './componentes/Footer'
import PaginaInicio from './pantallas/PaginaInicio'
import PaginaProducto from './pantallas/PaginaProducto'

function App() {
  return (
    <Router>
      <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={PaginaInicio} exact />
            <Route path="/producto/:id" component={PaginaProducto} />
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;