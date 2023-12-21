import React, { useEffect, useState, useRef } from 'react'
import Tailh1 from '../UI/Tailh1';
import {FcMultipleCameras} from 'react-icons/fc'
import TailCard from '../UI/TailCard';
//https://react-icons.github.io/react-icons/icons/fc/

export default function Gallery() {
    //keyword검색
    const urlKey = useRef(`%EB%B6%80%EC%82%B0%EC%97%AD`);
    //data of array of item
    const [gdata, setGdata] = useState();
    const [gtag, setGtag] = useState();
 

    const urlFetch=async(urlKey)=>{
        let apikey=process.env.REACT_APP_APIKEY;
        let url= "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?"
        url+= `serviceKey=${apikey}`
        url+= `&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
        url+= `&keyword=`+urlKey;
        // 부산역: %EB%B6%80%EC%82%B0%EC%97%AD
        url+=`&_type=json`
        console.log(urlKey);
        const resp= await fetch(url);
        const data = await resp.json();

        console.log(url);
        // console.log(data);
        setGdata(data.response.body.items.item);
        
    }

    useEffect(()=>{
  
    },[])

    //gdata변경
    useEffect(()=>{
        if(gdata===undefined) return;
        // console.log(gdata);
        if (gdata!==null){
            let gtm = gdata.map((g,idx)=><TailCard k={`gal${idx}`}
                                        imgSrc={g.galWebImageUrl.replace("http://","https://")}
                                        title= {g["galTitle"]}
                                        subtitle={g["galPhotographyLocation"]}
                                        by={g["galPhotographer"]}
                                        tags={g["galSearchKeyword"]}
                                        />
                                )
        setGtag(gtm);
        }
        
    },[gdata])

    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
          handleSearchClick(); // Enter 입력이 되면 클릭 이벤트 실행
        }
    };

    const handleSearchClick=(e)=>{
        if(e.key!=="Enter") e.preventDefault();
        e.preventDefault();
        if(urlKey.current.value!=="")  urlFetch(urlKey.current.value);
        else urlFetch(`%EC%84%9C%EC%9A%B8`)
    }
    const handleResetClick=(e)=>{
        e.preventDefault();
        setGtag('');
        urlKey.current.value='';
    }
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className='container max-w-7xl px-6 lg:px-8 mx-auto'>
            <div className='flex flex-col justify-top items-center w-full h-full my-8'>
                <div className="flex max-w-xl lg:max-w-lg">
                    <Tailh1 title={"한국관광 공사 사진정보"}/>
                    <FcMultipleCameras className='text-4xl mx-5'/>
                </div>
                <div className="max-w-xl lg:max-w-lg">
                    <form>
                    <div className="mt-6 flex max-w-md gap-x-4">
                        <label htmlFor="keyword" className="sr-only">keyword</label>
                        <input id="keyword-input" ref={urlKey} name="keyword" type="url" autoComplete="url" required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter place"/>
                        <button type="submit" onKeyPress={handleOnKeyPress} onClick={handleSearchClick} className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Search</button>
                        <button type="reset" onClick={handleResetClick} className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Reset</button>
                    </div>
                    </form>
                </div>
            </div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-400/40">Search Result</h2>
                {/* <div className="mt-6 grid grid-flow-row auto-cols-max  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"> */}
                <div className="mt-6 grid grid-flow-row-dense gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-5">
                    {gtag}
                </div>
            </div>
        </div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#c2ff80] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
        </div>
    </div>
  )
}
