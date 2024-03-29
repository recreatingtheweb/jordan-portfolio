import React from "react";

function Contactform(){

    // <form name="contact-form" netlify netlify-honeypot="bot-field" hidden>
    //   <input type="text" name="name" />
    //   <input type="email" name="email" />
    //   <textarea name="message"></textarea>
    // </form>

    return <div>

    
<section  style={{marginLeft: "10px"}} id="contact-section" class="mb-4">

    <h2 id="contactme"  class="h1-responsive font-weight-bold  ">Contact me</h2>
    {/* <p id="contactme"   class=" w-responsive ">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p> */}

    <div class="row">

        <div class="col-md-9 mb-md-0 mb-5">
            <form action="/" id="contact-form" name="contact-form"   method="POST" data-netlify="true" >
            {/* The input is for javascript to work with the netlify attribute */}
            <input type="hidden" name="form-name" value="contact-form" />


                <div class="row">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="email" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>

                <div id="send-button" class="text-center text-md-left">
                    <button type="submit" class="btn btn-primary bg-dark" >Send</button>
                 </div>

            </form>

            

            <div class="status"></div>
        </div>

        {/* <div id="contact-logos" class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@mdbootstrap.com</p>
                </li>
            </ul>
        </div> */}

    </div>

</section>


    </div>
    
}

export default Contactform;