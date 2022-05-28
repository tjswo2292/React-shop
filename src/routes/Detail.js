import { useParams } from "react-router-dom";


function Detail({ shoes }) {

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
    </div> 
    )
}

export default Detail;

// 상품 id 값으로 상품 보여주기