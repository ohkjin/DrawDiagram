import React from "react"
function FrontArticle(probs) {
  return (
    <div>
        <article id="{divHtml}">
            <h2>{probs.title}</h2>
            <div>
                <div className="divImg">
                    <img src={probs.href} alt={probs.title}/>
                </div>
                <p>
                {probs.txt}
                </p>
            </div>
        </article>
    </div>
  )
}

export default FrontArticle