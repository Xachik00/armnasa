import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getContact } from '../../store/action/ContactAction';

const ContactChange = () => {
    const [lng, setLng] = useState(localStorage.getItem("addLang"));
    const dispatch = useDispatch();

    const { Contact } = useSelector((state) => state.Contact);
    console.log(Contact, "cccccccccccccccccccccCCCCCCccccccccccccc");
    useEffect(() => {
        dispatch(getContact());
    }, [dispatch]);
    const [colors, setColors] = useState(JSON.parse(localStorage.getItem('color')) || {
        color: '#ffffff',
        backroundBG: '#000',
        border: "#2196F3"
    })

    const [langContact, setLangContact] = useState(JSON.parse(localStorage.getItem('languageData6')) || []);
    useEffect(() => {
        handleLanguageChange();
    }, [localStorage.getItem("selectLang")]);

    async function getItemCount() {
        let item = localStorage.getItem("selectLang");
            let language = JSON.parse(item)
        const element = [...langContact]
        element.push({ title: '', text:'',mail:Contact[0]?.mail,language })
        for (let i = 1; i < Contact.length; i++) {
            
            element.push({ title: '', text:'',language })
        }
        setLangContact(element)
    }
    console.log(langContact);
    async function addLang(e, index) {
        if (!langContact.length) {
            await getItemCount();
        }
        if (langContact?.length === Contact?.length) {
            const element = [...langContact]
            element[index][e.name] = e.value;
            setLangContact(element)
        }
        localStorage.setItem('languageData6', JSON.stringify(langContact))

    }
    function handleLanguageChange() {
        let language = localStorage.getItem("addLang");
        let item = JSON.parse(language)

        setLng(item);
    }
  
    console.log(colors);
    return (
        <div className={`px-5 min-h-20 w-full`} style={{ backgroundColor: colors.backroundBG }}>
            {lng && <div className='gap-5 grid lg:grid-cols-2 xl:grid-cols-4 p-5 justify-center'>
                {
                    Contact?.map((el, index) => <div key={el.id}>
                        <h2 className={`p-2 w-40 sm:w-72 bg-[#ff000000]  rounded-xl text-[${colors?.color}] `} style={{ borderColor: colors.border, color: colors.color }} >
                            {el?.title}
                        </h2>
                        <input name='title' type="text" value={langContact[index]?.title} onChange={(e) => { addLang(e.target, index) }} className={`p-2 w-40 sm:w-72 bg-[#ff000000] border-b-[1px] border-[${colors?.border}] rounded-xl text-[${colors?.color}] `} style={{ borderColor: colors.border, color: colors.color }} />

                       {el?.text&&
                       <>
                       <h4 className={`p-2 w-40 sm:w-72 bg-[#ff000000]  rounded-xl text-[${colors?.color}] `} style={{ borderColor: colors.border, color: colors.color }} >
                            {el?.text}
                        </h4>
                        
                        <input type="text" name='text' value={langContact[index]?.text} onChange={(e) => { addLang(e.target, index) }} className={`p-2 w-40 sm:w-72 bg-[#ff000000] border-b-[1px] border-[${colors?.border}] rounded-xl text-[${colors?.color}] `} style={{ borderColor: colors.border, color: colors.color }} />
                        </>} 
                    </div>)
                }
            </div>}

        </div>
    )
}

export default ContactChange