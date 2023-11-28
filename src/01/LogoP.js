import style from './Font.module.css'
function LogoP({msg,emoji}){
    return (
        <p className={style.font}>
            {/* JSX표현식 */}
            {msg}
            {emoji}
        </p>
    );
}
export default LogoP;