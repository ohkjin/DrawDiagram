import FrontArticle from "./FrontArticle"
// import "./FrontCSS.css"
function FrontEnd(){
    return (
    <>
    <FrontArticle div_id = "divHTML"
                  title="HTML" 
                  href="./img/roadmap/html.png"
                  txt="HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용"/>
  
    
    <FrontArticle div_id = "divCSS"
                  title="CSS" 
                  href="./img/roadmap/css.png"  
                  txt="Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어"/>
    </>
    );
}

export default FrontEnd;