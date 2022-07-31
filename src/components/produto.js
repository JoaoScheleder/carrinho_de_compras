import utils from '../utils/utils'

function Produto(props){
    const {imageUrl,name,price,sellingPrice,quantity} = props.data
    return (
        <div className='produto'>
            <div className='info'>
                <div className='imgContainer'>
                    <img src={imageUrl}></img>
                </div>
                <div className='princeAndName'>
                    <h2>{utils.formatProduct(name)}</h2>
                    <p className='price'>{utils.toMoney(price)}</p>
                    <p className='sellingPrice'>{utils.toMoney(sellingPrice)}</p>
                </div>
            </div>
            <div className='quantity'>
                <p>X {quantity}</p>
            </div>
        </div>
    )
}



export default Produto