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
import Swal from 'sweetalert2'
import { AddLanguage } from '../../store/action/LanguageAction'
import { AddHeaderLang } from '../../store/action/HeaderAction'

export const AddLanguagePage = () => {

  const mypage = ['Agency', "About", "Programs", 'Amadee-24', "Header"]
  const [step, setStep] = useState(0)
  const [countries, setCountries] = useState([]);
  const [countriesValue, setCountriesValue] = useState('');
  const [languages, setLanguages] = useState("US"); // Use useState hook
  const dispatch = useDispatch();
  const [loading,setLoading]= useState(false)
  const [loading1,setLoading1]= useState(false) 
  const [succes,setSucces]= useState('')
  const [loading2,setLoading2]= useState(false)
  const [loading3,setLoading3]= useState(false)
  const [loading4,setLoading4]= useState(false)


  // const sendMailMessage = async (e) => {
  //   e?.preventDefault();
  //   try {
  //     await dispatch(sendMail(email, setLoading, setSucces))
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  useEffect(() => {
    if (succes === 'ok') {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "OK",
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        setSucces("")
      });
    }
    if (succes?.response?.status < 200 || succes?.response?.status >= 400) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "ERROR!!!",
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        setSucces("")
      });
    }
  }, [succes, loading, dispatch]);

  useEffect(() => {
    if (loading || loading1 || loading2 || loading3) {
      Swal.fire({
        title: 'Loading...',
        showConfirmButton: false,
        allowOutsideClick: false,
      }).then(() => {
        setLoading(false);
      })
    }

  }, [loading,loading1,loading2,loading3])
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

  useEffect(() => {
    if (!countriesValue) {
      countries.map(el =>
        setCountriesValue(prevCountriesValue => ({ ...prevCountriesValue, [el]: el }))
      );
      console.log(countriesValue);
    }
  }, [countries])

  function changeLanguage(e) {
    setLanguages(e);
    dispatch(AddLanguage({text:e}))

    localStorage.setItem('selectLang', JSON.stringify(e))
  }
  async function saveData() {
    const data1 = localStorage.getItem('languageData1')
    const langData1 = JSON.parse(data1)
   await dispatch(AddHome(langData1,setLoading,setSucces));
    localStorage.removeItem("languageData1")

    const data2 = localStorage.getItem('languageData2')
    const langData2 = JSON.parse(data2)
   await dispatch(AddAbout(langData2,setLoading1,setSucces));
    localStorage.removeItem("languageData2")


    const data3 = localStorage.getItem('languageData3')
    const langData3 = JSON.parse(data3)
   await dispatch(AddPrograms(langData3,setLoading2,setSucces));
    localStorage.removeItem("languageData3")

    const data4 = localStorage.getItem('languageData4')
    const langData4 = JSON.parse(data4)
   await dispatch(AddAmade(langData4,setLoading3,setSucces));
    localStorage.removeItem("languageData4")

    const data5 = localStorage.getItem('languageData5')
    const langData5 = JSON.parse(data5)
   await dispatch(AddHeaderLang(langData5,setLoading4,setSucces));
    localStorage.removeItem("languageData5")
  }
  return (
    <div className=' flex flex-col items-center'>
      <h2 className='text-white text-[30px]'>{mypage[step]}</h2>
      {mypage[step] === "Agency" && <div className="text-blue-600">
        <p>select your preferred language</p>
        <ReactFlagsSelect countries={countries}
          customLabels={countriesValue} selected={languages} onSelect={(countryCode) => changeLanguage(countryCode)}

        />
      </div>}
      {mypage[step] === "Agency" && <Home />}
      {mypage[step] === "About" && <About />}
      {mypage[step] === "Programs" && <Programs />}
      {mypage[step] === "Amadee-24" && <Amadee24 />}
      {mypage[step] === "Header" && <HeaderChange />}
      <div className=' flex justify-between w-[300px] my-5 text-white'>
        {step > 0 && <button className='p-2 w-[100px] rounded-[20px] bg-slate-600' onClick={() => setStep(step - 1)}>Prev</button>}
        {step != 4 && <button className='p-2 w-[100px] rounded-[20px]  bg-slate-600' onClick={() => setStep(step + 1)}>next</button>}
        {step == 4 && <button className='p-2 w-[100px] rounded-[20px]  bg-slate-600' onClick={() => { saveData() }}>Save</button>}
      </div>
    </div>
  )
}
