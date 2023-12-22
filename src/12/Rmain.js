import { BrowserRouter, Routes, Route } from "react-router-dom"
import Rhome from "./Rhome"
import Rpage1 from "./Rpage1"
import Rpage2 from "./Rpage2"
import Rnav from "./Rnav"


export default function Rmain() {
  return (
    <main className="container mx-auto px-4 h-screen">
        <BrowserRouter>
            <Rnav/>
            <Routes>
                {/* http://localhost:3000 + / */}
                <Route path ="/" element={<Rhome/>}/>
                {/* Nav엔 그저 page1이므로 item을 받지 않으면 page1으로 redirect되지 않음 */}
                <Route path ="/page1/:item" element={<Rpage1/>}/>
                <Route path ="/page2" element={<Rpage2/>}/>
            </Routes>
        </BrowserRouter>
    </main>
  )
}
