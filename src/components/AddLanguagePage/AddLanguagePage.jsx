import React, { useEffect } from 'react'
import { useState } from 'react'
import Home from '../../pages/Home'
import About from '../../pages/About/About'
import Programs from '../../pages/Programs'
import Amadee24 from '../../pages/Amadee24'
import ReactFlagsSelect from 'react-flags-select'
import HeaderChange from '../Admin/HeaderChange'
import { AddAbout } from '../../store/action/AboutAction'
import { AddAmade } from '../../store/action/AmadeAction'
import { AddPrograms } from '../../store/action/ProgramsAction'
import { AddHome } from '../../store/action/HomeAction'
import { useDispatch } from 'react-redux'

export const AddLanguagePage = () => {

    const mypage= ['Agency',"About","Programs",'Amadee-24',"Header"]
    const [step,setStep]= useState(0)
    const [countries, setCountries] = useState([]);
    const [countriesValue, setCountriesValue] = useState('');
    const [languages, setLanguages] = useState("US"); // Use useState hook
    const dispatch = useDispatch();

    useEffect(() => {
      // Fetch country data
      fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
          setCountries(prevCountries => [
            ...prevCountries,
            ...data.map(el => el?.cca2)
          ]);
        })
        .catch(error => {
          console.error('Error fetching country data:', error);
        });
    }, []);
  
  useEffect(()=>{
  if(!countriesValue){
    countries.map(el => 
      setCountriesValue(prevCountriesValue => ({ ...prevCountriesValue, [el]: el }))
      );
      console.log(countriesValue);
  }
  },[countries])
  
  function changeLanguage(e) {
    setLanguages(e);
    localStorage.setItem('selectLang',JSON.stringify(e))
   }
  function getData(){
   const data = localStorage.getItem('languageData')
   const langData = JSON.parse(data)
   if(langData[1]==='Home'){
     dispatch(AddHome(langData[0]));
     localStorage.removeItem("languageData")
    }
    if(langData[1]==='About'){
      dispatch(AddAbout(langData[0]));
     localStorage.removeItem("languageData")

     }
     if(langData[1]==='Programs'){
      dispatch(AddPrograms(langData[0]));
      localStorage.removeItem("languageData")
    }
     if(langData[1]==='Amade'){
      dispatch(AddAmade(langData[0]));
      localStorage.removeItem("languageData")
    }
    setStep(step+1)
  }
  return (
    <div className=' flex flex-col items-center'>
       <h2 className='text-white text-[30px]'>{mypage[step]}</h2> 
     { mypage[step]==="Agency"&& <div className="text-blue-600">
         <p>select your preferred language</p>
         <ReactFlagsSelect   countries={countries}
               customLabels={countriesValue} selected={languages} onSelect={(countryCode)=>changeLanguage(countryCode)} 
                 
                />
       </div>}
       {mypage[step]==="Agency"&&<Home/>}
       {mypage[step]==="About"&&<About/>}
       {mypage[step]==="Programs"&&<Programs/>}
       {mypage[step]==="Amadee-24"&&<Amadee24/>}
       {mypage[step]==="Header"&&<HeaderChange />}
       <div className=' flex justify-between w-[300px] my-5 text-white'>
       {step>0&& <button className='p-2 w-[100px] rounded-[20px] bg-slate-600' onClick={()=>setStep(step-1)}>Prev</button>}
       {step!=4&& <button className='p-2 w-[100px] rounded-[20px]  bg-slate-600' onClick={()=>getData()}>next</button>}
      {step==4&& <button className='p-2 w-[100px] rounded-[20px]  bg-slate-600' onClick={()=>{}}>Save</button>}
      </div>
    </div>
  )
}
