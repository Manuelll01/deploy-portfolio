import React, {useState} from "react";
import "./Form2.css"
export const Form2 = () => {
    
    return(
        <div className="Container-Form2">
            <form action="https://formsubmit.co/manuel.mircea20@gmail.com"  method="POST">

            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value="https://manuelll01.github.io/deploy-portfolio/Thank-You-page"></input>

                    <div className="container-input-Form2"  id="input1-Form2">
                        <input type='text' required='required' name="Full name" ></input>
                        <span><i class="fa-solid fa-user"></i><p>Full name*</p></span>
                    </div>
                     <div className="container-input-Form2" id="input2-Form2">
                        <input type='text' required='required' name="E-mail" ></input>
                        <span><i class="fa-solid fa-envelope"></i><p>E-mail*</p></span>
                    </div>
                    <div className="aceasi-linie">
                        <div className="container-input-Form2" id="input3-Form2">
                            <input type='text' required='required' name="Phone number" ></input>
                            <span><i class="fa-solid fa-phone"></i><p>Phone*</p></span>
                        </div>
                        <div className="container-input-Form2" id="input4-Form2">
                            <input type='text' required='required' name="Company name"  ></input>
                            <span><i class="fa-solid fa-hotel"></i><p>Company name*</p></span>
                        </div>
                    </div>
                    <div className="container-input-Form2">
                        <p className="checkbox-title">Level of experience*</p>
                        <div className="checkbox-form2">
                            <div className="checkbox-box">
                                <input type="radio" name="experience" required='required' value="Internship" ></input> <p>Internship</p>
                                {/* ca sa nu uit: ca sa se deselecteze automat o anumita optiune folosesc type: radio si acelasi name la toate inputurile*/}
                            </div>
                            <div className="checkbox-box">
                                <input type="radio" name="experience" required='required' value="Entry-level" ></input> <p>Entry-level</p>
                            </div>
                            <div className="checkbox-box">
                                <input type="radio" name="experience" required='required' value="Junior" ></input> <p>Junior</p>
                            </div>
                            
                            
                            
                        </div>
                    </div>
                    <div className="container-input-Form2" id="text-area">
                        <textarea className="text" type='text' name="message" ></textarea>
                        <span><i class="fa-solid fa-message"></i><p>Mesaj</p></span>
                    </div>
                    <div className="flex-checkbox-send">
                        <div className="container-input-Form2">
                            <p className="checkbox-title">Would you like to schedule an interview?</p>
                            <div className="checkbox-form2">
                                <div  className="checkbox-box">
                                    <input type="radio" name="interview" required='required' value="Yes"></input> <p>Yes, i would!</p>
                                </div>
                                <div  className="checkbox-box">
                                    <input type="radio" name="interview" required='required' value="No"></input> <p>I will think about it.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="container-input-Form2" id="submit">
                            <input type='submit' name="" value='Trimite'></input>
                        </div>
                    </div>
            </form>
        </div>
    )
}