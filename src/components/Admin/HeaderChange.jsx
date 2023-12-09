import React, { useEffect, useState } from 'react'
import { getFetchHeader } from '../../store/action/HeaderAction';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const HeaderChange = () => {
  const [lng, setLng] = useState(localStorage.getItem("addLang"));
  const dispatch = useDispatch();

  const { Header } = useSelector((state) => state.Header);
  useEffect(() => {
    dispatch(getFetchHeader());
  }, [dispatch]);
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
    const [colors, setColors] = useState(JSON?.parse(localStorage.getItem('color'))||{
        color: '#ffffff',
        backroundBG: '#000',
        border: "#2196F3"
    })

const [langHeader,setLangHeader]= useState(JSON?.parse(localStorage.getItem('languageData5'))||[]);
  useEffect(() => {
    handleLanguageChange();
  }, [localStorage.getItem("selectLang")]);

    async function getItemCount() {
        const element = [...langHeader]
    for (let i = 0; i < Header.length; i++) {
        let item = localStorage.getItem("selectLang");
        let language = JSON?.parse(item)
        element.push({title:'',language})
    }
    setLangHeader(element)
}
console.log(langHeader);
async function addLang(e,index){
    if (!langHeader.length) {
        await getItemCount();
      }
      if (langHeader?.length === Header?.length) {
    const element = [...langHeader]
    element[index].title = e;
     setLangHeader(element)
      }
    localStorage.setItem('languageData5',JSON.stringify(langHeader))

}
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
                    Header?.map((el,index)=><div key={el?.id}>
                        <h2 className={`p-2 w-40 sm:w-72 bg-[#ff000000]  rounded-xl text-[${colors?.color}] `} style={{borderColor:colors.border,color:colors.color}} >
                            {el?.title}
                        </h2>
                        <input type="text" value={langHeader[index]?.title}  onChange={(e)=>{addLang(e.target.value,index)}} className={`p-2 w-40 sm:w-72 bg-[#ff000000] border-b-[1px] border-[${colors?.border}] rounded-xl text-[${colors?.color}] `} style={{borderColor:colors.border,color:colors.color}} />

                    </div>)
                }
            </div> }
            { !lng && <div className='gap-5 grid lg:grid-cols-2 xl:grid-cols-4 p-5 justify-center'>
                {
                    Header?.map((el)=><div key={el?.id}>
                        <input type="text"  value={el?.title} onChange={(e)=>{changeTitle(e.target.value,el.id)}} className={`p-2 w-40 sm:w-72 bg-[#ff000000] border-b-[1px] border-[${colors?.border}] rounded-xl text-[${colors?.color}] `} style={{borderColor:colors.border,color:colors.color}} />
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