import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import './App.css';

import { createContext, useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';

import data from './data.js';
import Card from './components/Card.js';
import Detail from './routes/Detail.js';
import Cart from './components/Cart.js';

// context를 하나 만들어준다. 보관함을 만들어준다
// 내가 state 공유를 원하는 컴포넌트를 감싸면 된다. 
// export let Context1 = createContext(); 

function App() {

  useEffect(() =>{
    axios.get('https://codingapple1.github.io/shop/data2.json')
    .then((response) => {
      setGetdata(response.data);
    })
    .catch(() => {
      alert('Error');
    })

  // 원래는 서버뢍 문자만 주고받을 수 있습니다
  }, [])

  let [shoes] = useState(data);
  let [stock, setStock] = useState([10, 11, 12]);
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
              getData && getData.map((a, i) => {
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
        </>
      }/>

      <Route path='/detail/:id' element={
        // <Context1.Provider value={{stock}}>
          <Detail shoes={shoes}/>
        // </Context1.Provider>
      }/> 

      <Route path='/cart' element={<Cart />}/>

      <Route path='*' element={<div>Page Not Found</div>}/>
    </Routes>
    
  </div>
  );

}

export default App;


// 데이터 가져와서 html로 보여주기 -> shoes state에 데이터를 추가하는 방법
// mock 서버, fake 서버, reqres