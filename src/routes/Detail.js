import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail({ shoes }) {
    useEffect(() => {
        // setTimeout(() => {setAlert(false)}, 2000)
        
        // 숫자가 아닐 경우 true 반환
        // if(isNaN(inputValue) === true){
        //     alert('그러지마');
        // }
    }, []) // 1회만 동작하기 원하면 [] 넣기 

    // let [alert, setAlert] = useState();
    let [inputValue, setInputvalue] = useState('');
    
    let {id} = useParams();
    let findPro = shoes.find(x => x.id == id);

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
    </div>
    )
}

export default Detail;

// 상품 id 값으로 상품 보여주기
// Detail 페이지에 노란색 박스를 만들고, 2초 후에 사라지게 하기
// 동적인 ui는 useState로 관리하고, 2초 후에 사라지게 하는 조건문

// input에 숫자말고 다른거 입력하면 그러지말라고 안내 메세지 띄우기