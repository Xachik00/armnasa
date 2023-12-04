import React from 'react';
import './Contact2.css'

const Contact2 = () => {
  return (
    <div className=' w-full relative flex justify-center' style={{backgroundImage:`url('./Images/gif4.gif')`}}>
         <div className=' w-[1600px]'>
         <section>
        <div class="container">
            <div class="contactInfo">
                <div>
                    <h2>Contact Info</h2>
                    <ul class="info">
                        <li>
                            <span><img src="https://i.ibb.co/cbnfrDF/location.png" /></span>
                            <span>
                            15 A.Mikoyan str, <br/>
                            Yerevan, Armenia
                            </span>
                        </li>
                        <li>
                            <span><img src="https://i.ibb.co/rbbwDkP/mail.png"/></span>
                            <span>info@armenianasa.org</span>
                        </li>
                        {/* <li>
                            <span><img src="https://i.ibb.co/DGGjsW7/call.png"/></span>
                            <span>310-286-162</span>
                        </li> */}
                    </ul>
                </div>
                <ul class="sci">
                    <li><a href=""><img src="https://i.ibb.co/vxjnyw0/1.png"/></a></li>
                    <li><a href=""><img src="https://i.ibb.co/xsXK3zW/2.png"/></a></li>
                    <li><a href=""><img src="https://i.ibb.co/5jFR49X/3.png"/></a></li>
                    {/* <li><a href=""><img src="https://i.ibb.co/1Msgr4S/4.png"/></a></li> */}
                    <li><a href=""><img src="https://i.ibb.co/GtnC2C8/5.png"/></a></li>
                </ul>

            </div>
            <div class="contactForm">
                <h2>Send a Message</h2>
                <div class="formBox">
                    <div class="inputBox w50">
                        <input type="text" required />
                        <span>Name</span>
                    </div>
                    {/* <div class="inputBox w50">
                        <input type="text" required />
                        <span>Last Name</span>
                    </div> */}
                    <div class="inputBox w50">
                        <input type="email" required />
                        <span>Email Address</span>
                    </div>
                    {/* <div class="inputBox w50">
                        <input type="text" required />
                        <span>Mobile Number</span>
                    </div> */}
                    <div class="inputBox w100">
                        <textarea required></textarea>
                        <span>Write Your Massage Here...</span>
                    </div>
                    <div class="inputBox w100">
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