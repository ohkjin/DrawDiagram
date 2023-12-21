import { Link } from "react-router-dom"

export default function Rnav() {
  return (
    <div className="bg-blue-200">
        <ul>
            <li><Link to='./'>Home</Link></li>
            <li><Link to='./page1'>Page1</Link></li>
            <li><Link to='./page2'>Page2</Link></li>
        </ul>
    </div>
  )
}
