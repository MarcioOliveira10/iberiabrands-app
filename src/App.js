
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home'
import Charges from './components/pages/Charges';
import Sales from './components/pages/Sales'
import Users from './components/pages/Users';
import Represented from './components/pages/Represented';
import Customers from './components/pages/Customers';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Charges" element={<Charges />} />
          <Route exact path="/Sales" element={<Sales />} />
          <Route exact path="/Users" element={<Users />} />
          <Route exact path="/Represented" element={<Represented />} />
          <Route exact path="/Customers" element={<Customers />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
