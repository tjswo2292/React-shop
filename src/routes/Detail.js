import { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";

// import {Context1} from './../App.js';

function Detail({ shoes }) {

    // distructure 문법, 쉽게 가져다 쓰기 위해서
    // let {stock, shoes} = useContext(Context1); // state 들이 object 자료형 형식으로 남아 있다.

    let [inputValue, setInputvalue] = useState('');
    
    let {id} = useParams();
    let findPro = shoes.find(x => x.id == id);
    let [tab, setTab] = useState(0);

    // useEffect(() => {
    //     // setTimeout(() => {setAlert(false)}, 2000)
        
    //     // 숫자가 아닐 경우 true 반환
    //     // if(isNaN(inputValue) === true){
    //     //     alert('그러지마');
    //     // }
    // }, []) // 1회만 동작하기 원하면 [] 넣기 

    // let [alert, setAlert] = useState();

    return(
    <div className="container">
        <div className="row">
                <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
                <h4 className="pt-5">{findPro.title}</h4>
                <p>{findPro.content}</p>
                <p>{findPro.price}</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
        {/* {
            alert === true ?
            <div style={{backgroundColor: 'yellow'}}>2초 동안 구매 가능</div>
            : null
        } */}  
        {/* <input onChange={(e) =>{setInputvalue(e.target.value)}}/> */}

        <Nav variant="tabs" defaultActiveKey='link0'>
            <Nav.Item>
                <Nav.Link onClick={() => {setTab(0)}} eventKey='link0'>버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => {setTab(1)}} eventKey='link1'>버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => {setTab(2)}} eventKey='link2'>버튼2</Nav.Link>
            </Nav.Item>
        </Nav>
        
        <TabContent tab={tab}/>
    </div>
    )
}

function TabContent({tab}) {
    // if(tab === 0)
    //     return <div>내용 0</div>
    // else if(tab === 1)
    //     return <div>내용 1</div> 
    // else if(tab === 2)
    //     return <div>내용 2</div>
    let [fade, setFade] = useState('');

    useEffect(() =>{
        let a = setTimeout(() => {setFade('end')}, 100)

        // useEffect 실행하기 전에 실행됨, clean up function
        return () => {
            clearTimeout(a);
            setFade('');
        }
    }, [tab]) // tab state가 변경 될 때 마다 안의 코드를 실행해줌

    return (<div className={`start ${fade}`}>
            {[<div>내용 0</div>, <div>내용 1</div>, <div>내용 2</div>][tab]}
    </div>)
        
}
export default Detail;

// 상품 id 값으로 상품 보여주기
// Detail 페이지에 노란색 박스를 만들고, 2초 후에 사라지게 하기
// 동적인 ui는 useState로 관리하고, 2초 후에 사라지게 하는 조건문

// input에 숫자말고 다른거 입력하면 그러지말라고 안내 메세지 띄우기


// detail component 로드시 animation 효과