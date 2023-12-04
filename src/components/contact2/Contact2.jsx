import React from 'react';
import './Contact2.css'

const Contact2 = () => {
  return (
    <div className=' w-full relative flex justify-center' style={{backgroundImage:`url('./Images/gif4.gif')`}}>
         <div className=' w-[1600px]'>
         <section className='section'>
        <div className="container contact2 ">
            <div className="contactInfo">
                <div>
                    <h2>Contact Info</h2>
                    <p className=' text-2xl mt-2 text-white'>Better yet, see us in person!</p>
                    <ul className="info">
                        <li>
                            <span><img src="https://i.ibb.co/cbnfrDF/location.png" /></span>
                            <span>
                            15 A.Mikoyan str, <br/>
                            Yerevan, Armenia
                            </span>
                        </li>
                        <li>
                            <span><img src="https://i.ibb.co/rbbwDkP/mail.png"/></span>
                            <span>                  <a rel="" role="link" aria-haspopup="false" data-ux="Link" data-aid="CONTACT_INFO_EMAIL_REND" href="mailto:info@armenianasa.org" data-typography="LinkAlpha" className="x-el x-el-a c1-1j c1-1k c1-1l c1-1m c1-1a c1-1n c1-1o c1-b c1-1v c1-c c1-1w c1-1x c1-1y c1-d c1-e c1-f c1-g" data-tccl="ux2.CONTACT.contact7.Content.Default.Link.Default.30534.click,click">info@armenianasa.org</a></span>
                        </li>
                        {/* <li>
                            <span><img src="https://i.ibb.co/DGGjsW7/call.png"/></span>
                            <span>310-286-162</span>
                        </li> */}
                    </ul>
                </div>
                <ul className="sci">
                    <li><a href=""><img src="https://i.ibb.co/vxjnyw0/1.png"/></a></li>
                    <li><a href=""><img src="https://i.ibb.co/xsXK3zW/2.png"/></a></li>
                    <li><a href=""><img src="https://i.ibb.co/5jFR49X/3.png"/></a></li>
                    {/* <li><a href=""><img src="https://i.ibb.co/1Msgr4S/4.png"/></a></li> */}
                    <li><a href=""><img src="https://i.ibb.co/GtnC2C8/5.png"/></a></li>
                </ul>

            </div>
            <div className="contactForm">
                <h2>Send a Message</h2>
                <div className="formBox">
                    <div className="inputBox w50">
                        <input type="text" required />
                        <span>Name</span>
                    </div>
                    {/* <div className="inputBox w50">
                        <input type="text" required />
                        <span>Last Name</span>
                    </div> */}
                    <div className="inputBox w50">
                        <input type="email" required />
                        <span>Email Address</span>
                    </div>
                    {/* <div className="inputBox w50">
                        <input type="text" required />
                        <span>Mobile Number</span>
                    </div> */}
                    <div className="inputBox w100">
                        <textarea required></textarea>
                        <span>Write Your Massage Here...</span>
                    </div>
                    <div className="inputBox w100">
                        <input type="submit" value="Send" />
                    </div>
                </div>
            </div>
        </div>
    </section>
         </div>
    </div>
  )
}

export default Contact2