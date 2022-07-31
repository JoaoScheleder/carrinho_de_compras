import { useState } from 'react'
import carrinhoAbaixo from '../database/abaixo-10-reais.json'
import carrinhoAcima from '../database/acima-10-reais.json'
import Produto from './produto'
import Slider from './slider'
import utils from '../utils/utils'

import '../styles/carrinho.css'

function Carrinho() {

    const [carrinho, setCarrinho] = useState(false)
    function toggler() {
        setCarrinho(prevcarrinho => !prevcarrinho)
    }
    let totalPrice = 0
    let totalSellingPrice = 0
    let dataSource = carrinho ? carrinhoAcima.items : carrinhoAbaixo.items
    return (
        <>
            <Slider onChangeSlider={toggler} />
            <div className='carrinhoContainer'>
                <div className='header'>
                    <div></div>
                    <div><h1>Meu carrinho</h1></div>
                    <div className='close'>X</div>
                </div>
                <div className='line'></div>
                <div className='produtosContainer'>
                    {
                        dataSource.map((produto) => {
                            totalPrice += produto.price
                            totalSellingPrice += produto.sellingPrice
                            return (
                                <Produto data={produto} />
                            )
                        })
                    }
                </div>
                <div className='line'></div>
                <div className='footer'>
                    <div>
                        <h1>Total</h1>
                    </div>
                    <div>
                        <div>
                            <p className='finalPrice'>{utils.toMoney(totalPrice)}</p>
                            <p className='finalSelling'>{utils.toMoney(totalSellingPrice)}</p>
                        </div>
                    </div>
                </div>
                {totalSellingPrice / 100 > 10 ?
                <p className='frete-gratis'>Parabéns, sua compra tem frete grátis !</p>:<></>}
                <div className='line'></div>
                <div className='finish'>
                    <button>Finalizar compra</button>
                </div>
            </div>
        </>
    )
}


export default Carrinho