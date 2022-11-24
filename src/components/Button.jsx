import "../style.css"

export const Button = ({imgSrc, children}) => {
    return(
<a href="#" className="btns__btn">
        <img className="btns__icon" src={imgSrc}/>
        {children}
        </a>
    )
}