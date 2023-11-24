
// import LogoImg from './LogoImg';
import LogoP from './LogoP';
import LogoA from './LogoA';

function LogoHeader(){
    return(
        <header className="App-header">
            {/* <LogoImg/> */}
            <LogoP emoji={"🐋".repeat(5)}/>
            <LogoP msg={"부산대학교 K-digital 5기"}/>
            <LogoP msg={"Jihyeon Ohk"}/>
            <LogoP emoji={"(❁´◡`❁)"}/>
            <LogoA/>
        </header>
    );
}
export default LogoHeader;