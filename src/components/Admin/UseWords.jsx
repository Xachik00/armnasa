import React, { useState } from 'react'

 const UseWords = () => {
    const [colors, setColors] = useState(JSON.parse(localStorage.getItem('color'))||{
        color: '#ffffff',
        backroundBG: '#000',
        border: "#2196F3"
    })
const words= [
   {
    language:"US",
    select:"Select your preferred language",
  }, 
  {
    language:"US",
    prev:"Prev",
  }, 
  {
    language:"US",
    next:"next"
  }, 
  {
    language:"US",
    save:"save",
  }, 
  {
    language:"US",
    Home:"Home",
  }, 
  {
    language:"US",
    About:"About",
  }, 
  {
    language:"US",
    Programs:"Programs",
  }, 
  {
    language:"US",
    Amadee_24:"Amadee_24",
  }, 
  {
    language:"US",
    Agency:"Agency",
  }, 
  {
    language:"US",
    Contact:"Contact",
  }, 

  {
    language:"US",
    Login:"Login",
  }, 
  {
    language:"US",
    Language:"Language",
  },
  {
    language:"US",
    Footer:"Footer",
  }, 
  {
    language:"US",
    Background:"Background Image",
  }, 
  {
    language:"US",
    Exit:"Exit",
  }, 
  {
    language:"US",
    TextColor:"Text Color",
  }, 
  {
    language:"US",
    BorderColor:"BorderColor",
  },
  {
    language:"US",
    Company:"ARMENIAN AEROSPACE AGENCY",
  },
  {
    language:"US",
    AddPartner:"Add Partner",
  },
  {
    language:"US",
    OurPartner:"Our Partner",
  },
  {
    language:"US",
    AddTraslate:"Add Traslate Data",
  },
  
  {
    language:"US",
    AddData:"Add Data",
  },
  {
    language:"US",
    Better:"Better yet,see us in person!",
  },
  {
    language:"US",
    address:"15 A.Mikoyan str, Yerevan, Armenia",
  },
  {
    language:"US",
    CompanyEmail:"info@armenianasa.org",
  },
  {
    language:"US",
    FullName:"FullName",
  },
  {
    language:"US",
    email:"Email",
  },
  {
    language:"US",
    Message:"Message",
  },
  {
    language:"US",
    SendMessage:"Send Message",
  },
  {
    language:"US",
    SignIn:"Sign In",
  },
  {
    language:"US",
    Remember:"Remember",
  },
  {
    language:"US",
    Password:"Password",
  }
]
const [useWords,setWords] = useState([])
for (let i = 0; i < words.length; i++) {
  let x = Object?.keys(words[i])[1]
  console.log(x);
//  setWords([...useWords,{title:words[i].x[1]}])
  
}
console.log(useWords);
  return (
    <div className={`px-5 min-h-20 w-full`} style={{backgroundColor:colors.backroundBG}}>

    <div className='gap-5 grid lg:grid-cols-2 xl:grid-cols-4 p-5 justify-center'>
    {
            words?.map((el)=><div key={el.id}>
                <h2 className={`p-2 w-40 sm:w-72 bg-[#ff000000]  rounded-xl text-[${colors?.color}] `} style={{borderColor:colors.border,color:colors.color}} >
                    {el.Object.keys(el)[1]}
                </h2>
                <input type="text"  onChange={(e)=>{}} className={`p-2 w-40 sm:w-72 bg-[#ff000000] border-b-[1px] border-[${colors?.border}] rounded-xl text-[${colors?.color}] `} style={{borderColor:colors.border,color:colors.color}} />

            </div>)
        }
    </div>
    </div>
  )
}
export default UseWords