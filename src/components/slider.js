import '../styles/slider.css'

function Slider(props){
    const onClickHandle = props.onChangeSlider
    return (
        <div >
            <p className="switch"><br/><br/>Mudar carrinho</p>
            <label className="switch">
            <input type="checkbox" onClick={onClickHandle} />
            <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Slider