 
import "./index.scss";
function CardButton({title , onClick , disabled}) {

  return (
<button onClick={onClick} style={{borderColor: disabled && "#a1a3a1"}} disabled={disabled} className="Card-btn">{title}</button>
  )};
export default CardButton;









