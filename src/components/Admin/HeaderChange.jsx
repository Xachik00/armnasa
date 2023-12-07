import React, { useState } from 'react'

const HeaderChange = () => {
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
    const colors={
        color:'white',
        backroundBG:'black',
        border:"blue"
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
    return (
        <div className={`px-5 bg-[${colors.backroundBG}] min-h-20 w-full`}>
            <div className='gap-5 grid grid-cols-4 p-5'>
                {
                    headarArray?.map((el)=><div className=' sca'>
                        {/* <h2>{el.title}</h2> */}
                        <input type="text" value={el.title} onChange={(e)=>{changeTitle(e.target.value,el.id)}} className={`p-2 bg-[#ff000000] border-b-2 border-[${colors.border}] rounded-xl text-[${colors.color}] `} />
                    </div>)
                }

            </div>

        </div>
    )
}

export default HeaderChange