import FrontArticle from "./FrontArticle"
import Like from "../04/Like";
// import "./FrontCSS.css"
function FrontEnd() {
    const data = [
        {
            div_id: "divHTML",
            title: 'HTML',
            href: "./img/roadmap/html.png",
            txt: "HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용"
        },
        {
            div_id: "divCSS",
            title: "CSS",
            href: "./img/roadmap/css.png",
            txt: "Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어"
        },
        {
            div_id: "divJS",
            title: 'JavaScript',
            href: "../img/roadmap/js.png",
            txt: "웹 페이지를 위한 스크립트 언어로 가벼운, 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어로, 일급 함수를 지원"
        },
        {
            div_id: "divNextJS",
            title: 'NextJS',
            href: "../img/roadmap/nextjs_cropped.png",
            txt: "웹 페이지를 위한 스크립트 언어로 가벼운, 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어로, 일급 함수를 지원"
        },
    ]
    return (
        <>
        {
            data.map((item, idx) =>
            <>
                <FrontArticle 
                    key={`article${idx}`}
                    div_id={item.div_id}
                    title={item.title}
                    href={item.href}
                    txt={item.txt}
                />
                <Like key={`like${idx}`}/>
            </>
            )
        }
        </>
    );
}

export default FrontEnd;