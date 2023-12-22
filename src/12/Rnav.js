import { Link } from "react-router-dom"

export default function Rnav() {
  const linkCss = "inline-block p-2 mx-5 hover:bg-sky-400";
  return (
    <div className="bg-slate-200 flex justify-center items-center h-10">
        <ul className="flex">
            <li className={`${linkCss}`}><Link to='./'>Home</Link></li>
            <li className={`${linkCss}`}><Link to='./page1'>Page1</Link></li>
            <li className={`${linkCss}`}><Link to='./page2'>Page2</Link></li>
        </ul>
    </div>
  )
}
