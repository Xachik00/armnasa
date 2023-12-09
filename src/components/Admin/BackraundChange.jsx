import React, { useEffect, useState } from 'react'
import { Upload } from './Upload'

const BackraundChange = () => {
    const [background, setBackground] = useState(
        [{
            id: 1,
            pageName: 'ARMENIAN AEROSPACE AGENCY',
            background: './Images/gif1.gif'
        }, {
            id: 2,
            pageName: 'About',
            background: './Images/gif2.gif'
        },
        {
            id: 3,
            pageName: 'Programs',
            background: './Images/gif3.gif'
        },
        {
            id: 4,
            pageName: 'Amadee-24',
            background: './Images/gif4.gif'
        },
        {
            id: 5,
            pageName: 'Contact',
            background: './Images/gif1.gif'
        }
        ]
    )
    const [id, setId] = useState()
    const [img, setImg] = useState()


    useEffect(() => {
        console.log(id, 'id');
        if (img) {
            console.log(img, 'img');

            const newBack = background?.map((el) => {
                if (el.id === id) {
                    el.background = img
                }
                return el
            })
            setBackground(newBack)
            setId(-1)
            setImg('')
        }
    }, [img, id])

    const [colors, setColors] = useState(JSON.parse(localStorage.getItem('color'))||{
        color: '#ffffff',
        backroundBG: '#000',
        border: "#2196F3"
    })

    function saveColor(){
        localStorage.setItem('color',JSON.stringify(colors))
    }

    return (
        <div >
            <div className='md:grid-cols-2 xl:grid grid-cols-3'>
                {
                    background?.map((el) => <div key={el.id} onClick={() => { setId(el.id) }} className=' p-3 flex flex-col items-center text-center justify-between'>
                        <h2>{el.pageName}</h2>
                        <img src={el.background} className=' sm:max-w-[450px] sm:max-h-[200px]' alt="" />
                        <div className=' w-[200px] flex justify-center mt-2  ' >
                            <Upload name={'Upload Backround '} setImg={setImg} id={el.id} />
                        </div>
                    </div>)
                }
            </div>

            <div className=' flex justify-center mt-4 '>
                <button className=' p-2 bg-green-500 min-w-[150px] rounded-xl text-white'>Save</button>
            </div>

            <h2 className=' mt-10 flex justify-center text-[40px]'>Colors</h2>
            <div className=' grid sm:grid-cols-3 items-center justify-center [&>*]:flex   [&>*]:justify-center   mt-4'>
                <div>
                    <span>Background Color</span>
                    <input  type="color" value={colors.backroundBG} name="" id="" onChange={(e) => { setColors({ ...colors, backroundBG: e.target.value }); console.log(e.target.value); }} />
                </div>

                <div>
                    <span>Text Color</span>
                    <input type="color" value={colors.color} name="" id="" onChange={(e) => { setColors({ ...colors, color: e.target.value }); console.log(e.target.value); }} />
                </div>
                <div>
                    <span>Border Color</span>
                    <input type="color" value={colors.border} name="" id="" onChange={(e) => { setColors({ ...colors, border: e.target.value }); console.log(e.target.value); }} />
                </div>
            </div>
            <div className=' flex justify-center mt-4 '>
                <button className=' p-2 bg-green-500 min-w-[150px] rounded-xl text-white' onClick={()=>{saveColor()}}>Save</button>
            </div>
        </div>
    )
}

export default BackraundChange