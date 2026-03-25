import './Button.css'

function Button({texto, color}) {

    return(
        <>
            <button className={color}>
                {texto}
            </button>
        </>
    )
}
export default Button;