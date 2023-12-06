import React, { useEffect } from 'react'
import { useState } from 'react'
import Home from '../../pages/Home'
import About from '../../pages/About/About'
import Programs from '../../pages/Programs'
import Amadee24 from '../../pages/Amadee24'
import ReactFlagsSelect from 'react-flags-select'

export const AddLanguagePage = () => {

    const mypage= ['Agency',"About","Programs",'Amade']
    const [step,setStep]= useState(0)
    const [countries, setCountries] = useState([]);
    const [countriesValue, setCountriesValue] = useState('');
    const [languages, setLanguages] = useState("US"); // Use useState hook

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
   

  }
  return (
    <div className=' flex flex-col items-center'>
       <h2 className='text-white text-[30px]'>{mypage[step]}</h2> 
       <div className="text-blue-600">
         <p>select your preferred language</p>
         <ReactFlagsSelect   countries={countries}
               customLabels={countriesValue} selected={languages} onSelect={(countryCode)=>changeLanguage(countryCode)} 
                 
                />
       </div>
       <h2 className='text-white text-[20px]'>Write your text</h2> 
       {mypage[step]==="Agency"&&<Home/>}
       {mypage[step]==="About"&&<About/>}
       {mypage[step]==="Programs"&&<Programs/>}
       {mypage[step]==="Amadee-24"&&<Amadee24/>}
       <button className='p-2 bg-slate-600' onClick={()=>setStep(step+1)}>next</button>
    </div>
  )
}