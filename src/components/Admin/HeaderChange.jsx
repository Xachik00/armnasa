import React, { useEffect, useState } from 'react'

const HeaderChange = () => {
  const [lng, setLng] = useState(localStorage.getItem("addLang"));

    const [headarArray,setHeadaerArray] = useState([{
        id: 1,
        title: "ARMENIAN AEROSPACE AGENCY"
    },
    {
        id: 2,
        title: "ABOUT"
    },
    {
        id: 3,
        title: "PROGRAMS"
    },
    {
        id: 4,
        title: "AMADEE-24"
    },
    {
        id: 5,
        title: "CONTACT"
    }])
    const [colors, setColors] = useState(JSON.parse(localStorage.getItem('color'))||{
        color: '#ffffff',
        backroundBG: '#000',
        border: "#2196F3"
    })


  useEffect(() => {
    handleLanguageChange();
  }, [localStorage.getItem("addLang")]);

  function handleLanguageChange() {
    let language = localStorage.getItem("addLang");
    let item = JSON.parse(language)

    setLng(item);
  }
    function changeTitle(e,id){
        let newArray=headarArray?.map((el)=>{
            if(el.id===id){
                el.title=e
            }
            return el
        })
        setHeadaerArray(newArray)
        
    }
    console.log(colors);
    return (
        <div className={`px-5 min-h-20 w-full`} style={{backgroundColor:colors.backroundBG}}>
            {lng && <div className='gap-5 grid lg:grid-cols-2 xl:grid-cols-4 p-5 justify-center'>
            {
                    headarArray?.map((el)=><div key={el.id}>
                        <h2 className={`p-2 w-40 sm:w-72 bg-[#ff000000]  rounded-xl text-[${colors?.color}] `} style={{borderColor:colors.border,color:colors.color}} >
                            {el.title}
                        </h2>
                        <input type="text"  onChange={(e)=>{}} className={`p-2 w-40 sm:w-72 bg-[#ff000000] border-b-[1px] border-[${colors?.border}] rounded-xl text-[${colors?.color}] `} style={{borderColor:colors.border,color:colors.color}} />

                    </div>)
                }
            </div> }
            { !lng && <div className='gap-5 grid lg:grid-cols-2 xl:grid-cols-4 p-5 justify-center'>
                {
                    headarArray?.map((el)=><div key={el.id}>
                        <input type="text" value={el.title} onChange={(e)=>{changeTitle(e.target.value,el.id)}} className={`p-2 w-40 sm:w-72 bg-[#ff000000] border-b-[1px] border-[${colors?.border}] rounded-xl text-[${colors?.color}] `} style={{borderColor:colors.border,color:colors.color}} />
                    </div>)
                }
            </div>}
         { !lng &&   <div className=' flex justify-center mt-4 '>
                <button className=' p-2 bg-green-500 min-w-[150px] rounded-xl text-white'>Save</button>
            </div>}
        </div>
    )
}

export default HeaderChange