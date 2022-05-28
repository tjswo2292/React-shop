import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import './App.css';

import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';

import data from './data.js';
import Card from './components/Card.js';
import Detail from './routes/Detail';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
  <div className='app'>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
          <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Routes>
      <Route path='/' element={
        <>
        <div className='main-bg'></div>
          <div className='container'>
          <div className='row'>
            {
              shoes.map((a, i) => {
                return(
                  <Card shoes={shoes[i]} i={i+1} />
                )
              })
            }
          </div>
        </div>
        </>
      }/>

      <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/> 

      <Route path='*' element={<div>Page Not Found</div>}/>
    </Routes>
    
  </div>
  );

}

export default App;


