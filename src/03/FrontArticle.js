import React from "react"
// import "./FrontCSS.css" //전체에 다 적용
import style from "./FrontArtCSS.module.css" // 여기만 적용
function FrontArticle({div_id,title,href,txt}) {
  return (
    <div>
        <article id={div_id} className={style.divArticle}>
            <h2>{title}</h2>
            <div>
                <div className={style.divImg}>
                    <img src={href} alt={title}/>
                </div>
                <p>
                {txt}
                </p>
            </div>
        </article>
    </div>
  )
}

export default FrontArticle