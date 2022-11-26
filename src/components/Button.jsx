import "../style.css";

export const Button = ({ imgSrc, children, variant }) => {
  return (
    <a
      href="#"
      className={
        "btns__btn " +
        (variant === "white" ? "btns_btn_white" : "btns_btn_blue")
      }
    >
      <img className="btns__icon" src={imgSrc} />
      {children}
    </a>
  );
};
