import { Link } from "react-router-dom";
import Tailh1 from "../UI/Tailh1";

export default function FcstHeader() {
  return (
    <div className='container mx-auto w-full'>
        <div className='flex flex-col justify-center items-center w-full my-8'>
            <div className='flex'>
                <Tailh1 title="단기예보 선택"/>
            </div>
            <div className="flex w-4/5 justify-end bg-slate-200 rounded-md">
                <div className="mr-8 font-bold">
                    <Link to='/'>Home</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
