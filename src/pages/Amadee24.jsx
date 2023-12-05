import React, { useState, useEffect } from 'react'
import LargeImg from '../components/LargeImg'
import Slide from '../components/partnerSlide/Slide'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AddAmade, DeleteAmade, EditAmade, getFetchAmade } from '../store/action/AmadeAction'
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { DeleteItem, uploadImageHandleradd } from '../store/action/HomeAction'

const Amadee24 = () => {
    document.title = 'Amadee24 | Armenian Nasa '
    const { Amade } = useSelector((state) => state.Amade);
    const [indexArray, setIndexArray] = useState([0]);
    const [img, setImg] = useState("")
    const [edit, setEdit] = useState('');
    const [addShow, setAddShow] = useState(false);
    const [add, setAdd] = useState({
        text: "",
        title: "",
    })



    useEffect(() => {
        if (img) {
            setEdit({ ...edit, picture: img });
        }
    }, [img]);




    const dispatch = useDispatch();
    async function deleteItem(id) {
        DeleteItem({
            title: "Ցանկանում եք ջնջել՞",
            text: "Ջնջելու դեպքում վերականգնել չեք կարող",
            deleteItem: () => DeleteAmade(id),
        });
    }
    function editAmade() {
        const obj = {
            ...edit,
            picture: img
        }
        dispatch(EditAmade(obj))
        dispatch(getFetchAmade());
        setEdit('')
    }

    useEffect(() => {
        dispatch(getFetchAmade());
    }, [dispatch]);

    let imgArr = [
        'https://img1.wsimg.com/isteam/ip/84ef5e22-d42d-488e-a41a-026dcc3db38f/AMADEE-24%20Mission%20Patch.png/:/rs=w:1280,h:1388',
        'https://img1.wsimg.com/isteam/ip/84ef5e22-d42d-488e-a41a-026dcc3db38f/AMADEE-Poster.jpg/:/rs=w:1280,h:853',
        'https://img1.wsimg.com/isteam/ip/84ef5e22-d42d-488e-a41a-026dcc3db38f/1.png/:/rs=w:1160,h:459'
    ]
    const [largeImg, setLargeImg] = useState(-1)

    async function addData() {
        const obj = {
            ...add,
            picture: img,
        }
        await dispatch(AddAmade(obj))
        setAddShow(false)
        setAdd({
            title: "",
            text: "",
        })
        await dispatch(getFetchAmade());

    }
    return (
        <div className=' w-full min-h-[80vh] flex justify-center' style={{ background: `url('/Images/gif2.gif')` }}>
            {!addShow ? <div className='w-[1600px] bg-[#4949598b] p-4 '>
                <div className=' flex gap-5 flex-col text-white   items-center mt-5'>
                    <h1 className=' text-blue-500 text-[45px]'>AMADEE 24</h1>
                    <div className=" grid grid-cols-2  justify-center  gap-10 sm:gap-[110px] p-5">
                        {!edit  &&

                            Amade?.map((el, index) => (
                                <div
                                    key={index}
                                    className={`${    ( index===0 || index%3===0)
                                        ? "col-span-2"
                                        : "sm:col-span-1 col-span-2"
                                        } flex flex-col gap-2 sm:gap-5  justify-start  `}
                                >
                                    <img src={el?.picture} alt="" className=" rounded-[12px]" />
                                    <h2 className=" text-[20px] sm:text-[24px]">{el?.title}</h2>
                                    <p className=" text-4 sm:text-[18px]">{el?.text}</p>
                                    {
                                        <div>
                                            <EditOutlined onClick={() => setEdit(el)} />{" "}
                                            <DeleteOutlined onClick={() => DeleteItem(el.id)} />
                                        </div>
                                    }
                                </div>
                            ))}

                    </div>

                    {edit && (
                        <div className="flex flex-col justify-center items-center w-[100%] mx-auto text-red-500">
                            {/* <img src={edit?.picture} alt="" className=" rounded-[12px]" /> */}
                            {edit?.picture && (
                                <label className=" w-[40%] flex justify-center" htmlFor="EditLogo">
                                    <img className="" src={img ? img : edit?.picture} alt="logo" />
                                </label>
                            )}
                            <input
                                className="hidden"
                                type="file"
                                name="EditLogo"
                                id="EditLogo"
                                onChange={(e) => {
                                    uploadImageHandleradd(e, setImg);
                                }}
                                accept="image/*"
                            />
                            <textarea
                                name="title"
                                className=" text-[20px] sm:text-[18px] w-[60%] m-5 resize-none"
                                type="text"
                                value={edit?.title}
                                onChange={(e) => setEdit({ ...edit, [e.target.name]: e.target.value })}
                            />
                            <textarea
                                name="text"
                                className=" text-4 sm:text-[18px]  w-[60%] h-[10rem] resize-none"
                                value={edit?.text}
                                onChange={(e) => setEdit({ ...edit, [e.target.name]: e.target.value })}

                            />
                            {
                                <div>
                                    <CheckOutlined
                                        onClick={() => {
                                            editAmade()
                                        }}
                                    />
                                    <CloseOutlined onClick={() => setEdit('')} />
                                </div>
                            }
                        </div>
                    )}
                    <PlusOutlined className=" flex justify-center items-center hover:scale-150 cursor-pointer transition ease-out duration-700" onClick={() => setAddShow(true)} />


                </div>



                <div className=' grid grid-cols-3 items-center gap-8 mt-5 [&>*]:cursor-pointer [&>*]:scale-[.7] [&>*:hover]:scale-[.8] [&>*]:ease [&>*]:duration-500'>
                    {
                        Amade?.map((el, index) => <div key={el} onClick={() => setLargeImg(index)}><img src={el} alt='' className=' rounded-lg ' /></div>)
                    }
                </div>

                <Slide />
            </div>
                :
                <div className="container">
                    <h1 className="text-white text-lg text-center mt-4" >Add Data</h1>
                    <div className="flex flex-col justify-center items-center w-[100%] mx-auto text-red-500">

                        <label className=" w-[40%] h-60 flex justify-center" htmlFor="EditLogo">
                            {img ? <img className="" src={img} alt="logo" />
                                : <div className=" w-[40%] flex mt-4 justify-center border-2 border-red-600  cursor-pointer" >
                                    <span className="flex items-center" >upload Image</span>
                                </div>
                            }
                        </label>

                        <input
                            className="hidden"
                            type="file"
                            name="EditLogo"
                            id="EditLogo"
                            onChange={(e) => {
                                uploadImageHandleradd(e, setImg);
                            }}
                            accept="image/*"
                        />
                        <textarea
                            name="title"
                            className=" text-[20px] sm:text-[18px] w-[60%] m-5 resize-none"
                            type="text"
                            value={add?.title}
                            placeholder="Title"
                            onChange={(e) => { setAdd({ ...add, title: e.target.value }) }}
                        />
                        <textarea
                            name="text"
                            placeholder="Text"
                            className=" text-4 sm:text-[18px]  w-[60%] h-[10rem] resize-none placeholder-opacity-75 placeholder-px-4"
                            value={add?.text}
                            onChange={(e) => { setAdd({ ...add, text: e.target.value }) }}
                        />
                        {
                            <div className=" w-[30%] mt-4 flex justify-between text-white " >
                                <CheckOutlined
                                    onClick={() => {
                                        addData()
                                    }}
                                    className="hover:scale-150 cursor-pointer transition ease-out duration-700"
                                />
                                <CloseOutlined onClick={() => setAddShow(false)} className="hover:scale-150 cursor-pointer transition ease-out duration-700" />
                            </div>
                        }
                    </div>
                </div>
            }
            {
                largeImg !== -1 && <LargeImg Img={largeImg} setLargeImg={setLargeImg} imgArr={imgArr} />
            }
        </div>
    )
}

export default Amadee24