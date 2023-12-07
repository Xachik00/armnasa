import { MenuOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import ReactFlagsSelect from 'react-flags-select';
import { useNavigate } from 'react-router-dom';
import { getCountryCode } from 'countries-list';
const Header = () => {
  const [languages, setLanguages] = useState("US"); // Use useState hook
  const [scrollHeader, setScrollHeader] = useState(false)
  let bb = window.location.pathname;
  window.onscroll = function () { myFunction() };
  const navigate = useNavigate();

  function myFunction() {
    if (window.pageYOffset > 0) {
      setScrollHeader(true)
    } else {
      setScrollHeader(false)
    }
  }

  useEffect(() => {
    handleLanguageChange();
  }, [languages, bb]);

  function handleLanguageChange() {
    let language = localStorage.getItem("language");
    if (language === null) {
      localStorage.setItem("language", JSON.stringify(languages || "am"));
      setLanguages(languages);
      window.location.hash = languages;
    } else {
      setLanguages(JSON.parse(language));
      window.location.hash = JSON.parse(language);
    }
  }

  function changeLanguage(e) {
    localStorage.setItem("language", JSON.stringify(e));
    setLanguages(e);
    navigate("/");
    window.location.reload();

  }
  // const countryOptions = Object.entries(countriesList?.countries)?.map(([code, country]) => ({
  //   value: code,
  //   label: country.name,
  // }));
  const [countries, setCountries] = useState([]);
  const [countriesValue, setCountriesValue] = useState('');
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

  return (
    <div className={` ${scrollHeader ? "fixed z-50 sm:h-[80px]" : ""} w-full p-3 sm:p-0  bg-black sm:h-[120px] flex justify-center items-center border-b-[.5px] border-blue-500`}>
      <div className=' w-full sm:w-[1600px] bg-black sm:h-[50px] flex text-white justify-between items-center'>
        <div>
          <a href='/'><img src="./Images/logo.webp" alt="" className={`${scrollHeader ? "w-[70px] sm:w-[80px]" : " w-[70px] sm:w-[120px]"}`} /></a>
        </div>
        <div className="flex gap-5">

        <div className=' text-[15px] sm:text-[18px] hidden sm:flex gap-6  [&>*:hover]:border-t-[1px]   [&>*]:border-b-[1px] [&>*]:ease-in [&>*]:duration-200 [&>*]:p-2  [&>*]:rounded-[12px]   '>
          <a href="/" className={`${window?.location?.pathname === '/' ? "border-green-500 hover:text-green-500" : "border-blue-500 hover:text-blue-500"}`}>ARMENIAN AEROSPACE AGENCY</a>
          <a href="/about" className={`${window?.location?.pathname === '/about' ? "border-green-500 hover:text-green-500" : "border-blue-500 hover:text-blue-500"}`}>{languages === "US" ? "ABOUT" :
            languages === "AM" ? "Մեր Մասին" :
              languages === "RU" ? "О нас" :
                ''}</a>
          <a href="/programs" className={`${window?.location?.pathname === '/programs' ? "border-green-500 hover:text-green-500" : "border-blue-500 hover:text-blue-500"}`}>PROGRAMS</a>
          <a href="/amadee" className={`${window?.location?.pathname === '/amadee' ? "border-green-500 hover:text-green-500" : "border-blue-500 hover:text-blue-500"}`}>AMADEE-24</a>
          <a href="/contact" className={`${window?.location?.pathname === '/contact' ? "border-green-500 hover:text-green-500" : "border-blue-500 hover:text-blue-500"}`}>CONTACT</a>
        </div>

            <ReactFlagsSelect countries={countries}
              customLabels={countriesValue} selected={languages} onSelect={(countryCode) => changeLanguage(countryCode)}

            />
          </div>
        <div className=' sm:hidden'>
          <MenuOutlined className=' text-white text-[30px]' />
        </div>
      </div>
    </div>
  )
}

export default Header