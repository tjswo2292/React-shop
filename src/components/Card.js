function Card({shoes, i}) {
    return(
        <div className='col-md-4'>
            <img src={'https://codingapple1.github.io/shop/shoes' + i + '.jpg'} width='80%'/>
            <h4>{shoes.title}</h4>
            <p>{shoes.price}</p>
        </div>
    )
}

export default Card;