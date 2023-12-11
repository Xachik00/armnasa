import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/AdminHooks/useAuth'
import { useNavigate, useLocation } from 'react-router-dom';
import useInput from '../hooks/AdminHooks/useInput';
import useToggle from '../hooks/AdminHooks/useToggle';
import axios from 'axios';

const URL=process.env.REACT_APP_BASE_URL

const Login = () => {

    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const userRef = useRef();
    const errRef = useRef();
    const [password, setpassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [check, toggleCheck] = useToggle('persist', true);
    const from = location.state?.from?.pathname || "/Admin";
    const [adminname, resetUser, userAttribs] = useInput('admin', '')

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [adminname, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${URL}auth/login`,
                JSON.stringify({ adminname, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            const res = JSON.stringify(response.data)
            localStorage.setItem('auth', res);
            // localStorage.setItem('token', response.data.accessToken)
            resetUser();
            setpassword('');
            const resp= localStorage.getItem('auth')
            navigate(from, { replace: true });
            const respons = JSON.parse(resp)
            setAuth(respons);
            
            // axioss.interceptors.request.use(function (config) {
            //         config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            //     return config;
            // });  
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Սերվերից պատասխան չկա');
            } else if (err.response?.status === 400) {
                setErrMsg('Սխալ մուտքանուն կամ գաղտնաբառ');
            } else if (err.response?.status === 401) {
                setErrMsg('Սխալ մուտքանուն կամ գաղտնաբառ');
            } else {
                setErrMsg('Անհաջող մուտք');
            }
            errRef.current.focus();
        }
    }



    return (
<div className=' w-full bg-slate-500 flex justify-center items-center' style={{backgroundImage:'url("./Images/gif1.gif")'}}>
<section className='  w-[1600px] m-0 h-[699px] flex '>
            <div style={{backgroundImage:'url("./Images/gif4.gif")'}} className='hidden sm:bg-[length:1200px_700px]  bg-no-repeat w-[50%]  sm:flex flex-col  justify-center pt-8'>
                {/* <div className=' w-24 h-24 bg-slate-700 rounded-[50%] flex items-center justify-start border-[1px] border-[#fff] mb-36'><img src='./Images/gerb.png' className=' w-[80%]' alt='' /></div> */}
                <div className=''>
                    <img src='./Images/logo.webp' alt='' className=' w-[180px]' />
                    {/* <h2 className=' text-[35px] text-white'>Ազգային Ժողով</h2> */}
                </div>
            </div>
            <div className='w-full sm:w-[70%] flex justify-center items-center ' >
                <div className=' w-[60%] h-80 bg-[#26384996] flex flex-col items-center p-2 text-white' >
                    <p ref={errRef} className={errMsg ? " mt-2 text-[16px] text-[#c0d2e3]" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className=' mt-10'>Մուտք</h1>
                    <form  className=' mt-5 flex flex-col items-center h-52 justify-around'
                    onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            id="adminname"
                            className=' w-56 h-8 p-1 rounded-lg text-[#263849] text-[16px] bg-[rgb(255,255,255)]'
                            ref={userRef}
                            placeholder='Մուտքանուն...'
                            autoComplete="off"
                            {...userAttribs}
                            required
                        />

                        <input
                            type="password"
                            id="password"
                            className=' w-56 h-8 p-1 rounded-lg text-[#263849] text-[16px] bg-[rgb(255,255,255)]'
                            placeholder='Գաղտնաբառ'
                            onChange={(e) => setpassword(e.target.value)}
                            value={password}
                            required
                        />
                        <div className="persistCheck w-full flex items-center justify-end">
                            <input
                                type="checkbox"
                                id="persist"
                                className=' w-4'
                                onChange={toggleCheck}
                                checked={check}
                            />
                            <label htmlFor="persist" className=' ml-4'>Հիշել</label>
                        </div>
                        <button className='button flex items-center mt-1 h-14 w-56 justify-center bg-[#263849] rounded-md text-white text-[19px] hover:bg-[#2638495b] hover:text-[22px]'
                        // onClick={()=>navigate('/admin')}
                         >Մուտք </button>
                    </form>
                </div>
            </div>
        </section>
</div>

     
    )
}

export default Login
