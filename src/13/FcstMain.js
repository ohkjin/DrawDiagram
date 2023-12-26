import { BrowserRouter,Routes,Route } from "react-router-dom"
import Fcst from "./Fcst"
import FcstHeader from "./FcstHeader"
import FcstDetail from "./FcstDetail"

export default function FcstMain() {
  return (
    <div>
        <BrowserRouter>
        <FcstHeader/>
        <Routes>
            <Route path="/" element={<Fcst/>}/>
            <Route path="/detail" element={<FcstDetail/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
