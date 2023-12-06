import React, { useState } from 'react'
import AdminDashboard from '../components/Admin/AdminDashboard'
import Home from './Home'
import About from './About/About'
import Programs from './Programs'
import Amadee24 from './Amadee24'
import ContactUs from './Contact/ContactUs'
import { useEffect } from 'react'
import { AddLanguagePage } from '../components/AddLanguagePage/AddLanguagePage'

const Admin = () => {
    const [page,setPage]=useState('')
    useEffect(()=>{
        if(page==="Language"){
            localStorage.setItem('addLang',JSON.stringify(page))
        }
    },[page])
    return (
        
        <div className=' w-full flex justify-center' style={{ background: `url('/Images/gif3.gif')` }}>
            <div className=' flex w-[1600px]  '>
                <AdminDashboard page={page} setPage={setPage}/>
                <div className=' w-[1300px]'>
                    {page==="Home"&&<Home/>}
                    {page==="About"&&<About/>}
                    {page==="Programs"&&<Programs/>}
                    {page==="Amadee-24"&&<Amadee24/>}
                    {page==="Contact"&&<ContactUs/>}
                    {page==="Header"&&<div>Header</div>}
                    {page==="Footer"&&<div>Footer</div>}
                    {page==="Backraund"&&<div>Backraund</div>}
                    {page==="Language"&& <AddLanguagePage/> }
                </div>
            </div>
        </div>
    )
}

export default Admin