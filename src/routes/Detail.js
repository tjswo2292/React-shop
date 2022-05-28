import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail({ shoes }) {
    let [alert ,setAlert] = useState(true);
    // mount, update 때 실행이 됨
    useEffect(() => {
        setTimeout(() => {setAlert(false)}, 2000);
    })
    
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
        {
            alert === true ?
            <div style={{backgroundColor: 'yellow'}}>2초 안에 누르면 구매 쌉가능</div>
            : null
        }
    </div>
    )
}

export default Detail;

// 상품 id 값으로 상품 보여주기
// Detail 페이지에 노란색 박스를 만들고, 2초 후에 사라지게 하기
// 동적인 ui는 useState로 관리하고, 2초 후에 사라지게 하는 조건문