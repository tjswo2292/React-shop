import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import './App.css';

import { useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';

import data from './data.js';
import Card from './components/Card.js';
import Detail from './routes/Detail';

function App() {

  useEffect(() =>{
    axios.get('https://codingapple1.github.io/shop/data2.json')
    .then((response) => {
      setGetdata(response.data);
    })
    .catch(() => {
      alert('Error');
    })
  }, [])

  let [shoes] = useState(data);
  let [getData, setGetdata] = useState();
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
          <div>
            {
              getData.map((a, i) => {
                return (
                  <>
                    <span>{getData[i].title}</span>
                    <span>{getData[i].content}</span>
                    <span>{getData[i].price}</span>
                  </>
                )
              })
            }
          </div>
        </div>
        {/* <button onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result) => {console.log(result.data)})
          .catch(()=>{console.log('요청실패')})
        }}>버튼</button> */}
        </>
      }/>

      <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/> 

      <Route path='*' element={<div>Page Not Found</div>}/>
    </Routes>
    
  </div>
  );

}

export default App;


// 데이터 가져와서 html로 보여주기
// mock 서버, fake 서버, reqres