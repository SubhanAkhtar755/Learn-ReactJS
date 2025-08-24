 
import "./index.scss";
 function TextArea({placeholder , onChange}) {
const rezizeTextArea = ()=>{
    const textarea = document.querySelector('.text-area');
    textarea.style.height = "24px";
    textarea.style.height = textarea.scrollHeight + 12 + "px";
    console.log(textarea.scrollHeight);
 
}
   return (

    <textarea onInput={rezizeTextArea} onChange={onChange} placeholder={placeholder} className="text-area"></textarea>
   )};
 export default TextArea;









