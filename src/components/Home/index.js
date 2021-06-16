import React from 'react'
import Pricing from '../Pricing'


export default function Home() {

    
    return(
        <>
        <head>

            <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" /> 

            <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.css" />

            <link rel="stylesheet" href="assets/css/templatemo-breezed.css" />

            <link rel="stylesheet" href="assets/css/owl-carousel.css" />

            <link rel="stylesheet" href="assets/css/lightbox.css" />

        </head>

            <header class="header-area header-sticky">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <nav class="main-nav">
                                <a href="/" class="logo">
                                    USBINCLOUD
                                </a>

                                <ul class="nav">
                                    <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                                    <li class="scroll-to-section"><a href="#about">About Us</a></li>
                                    <li class="scroll-to-section"><a href="#contact-us">Contact Us</a></li> 
                                    <li ><a href="/signin">Se Connecter</a></li>
                                </ul>        
                                <a class='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <div class="main-banner header-text" id="top">
                <div class="Modern-Slider">
                <div class="item">
                    <div class="img-fill">
                        <img src="assets/images/slide-01.jpg" alt="" />
                        <div class="text-content">
                        <h5>Welcome To USB IN CLOUD</h5>
                        <h3>You are "Start now" ahead of the next adventure</h3>
                        <a href="/signup" class="main-stroked-button">Start now</a>
                        </div>
                    </div>
                </div>
        
                </div>
            </div>

            <div class="scroll-down scroll-to-section"><a href="#about"><i class="fa fa-arrow-down"></i></a></div>
        
            <section class="section" id="about">

            <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-xs-12">
                            <div class="left-text-content">
                                <div class="section-heading">
                                    <h6>About Us</h6>
                                    <h2>USBINCLOUD offre plusieurs avantages</h2>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 col-sm-6">
                                        <div class="service-item">
                                            <img src="assets/images/service-item-01.png" alt="" />
                                            <h4>Fast</h4>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="service-item">
                                            <img src="assets/images/service-item-01.png" alt="" />
                                            <h4>Easy to use</h4>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="service-item">
                                            <img src="assets/images/contact-info-03.png" alt="" />
                                            <h4>2GO for free</h4>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="service-item">
                                            <img src="assets/images/contact-info-03.png" alt="" />
                                            <h4>Accessible from everywhere</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-xs-12">
                            <div class="right-text-content">
                                <p>Our app is a cloud file storage and sharing service. It offers you several features, moreover as its name suggests, it is your USB in the Cloud where you can upload all your files (images, documents, videos, etc.) with complete confidentiality and you can access these files by any browser, wherever and whenever you want. also you can share any file thanks to a link which will be generated automatically.</p>
                            </div>
                        </div>
                    </div>
            </div>
            </section>
            <Pricing />

            <section class="section" id="contact-us">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-xs-12">
                            <div class="left-text-content">
                                <div class="section-heading">
                                    <h6>Contact Us</h6>
                                    <h2>Feel free to keep in touch with us!</h2>
                                </div>
                                <ul class="contact-info">
                                    <li><img src="assets/images/contact-info-01.png" alt="" />010-020-0860</li>
                                    <li><img src="assets/images/contact-info-02.png" alt="" />usbincloud@company.com</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-8 col-xs-12">
                            <div class="contact-form">
                                <form id="contact" action="" method="get">
                                <div class="row">
                                    <div class="col-md-6 col-sm-12">
                                    <fieldset>
                                        <input name="name" type="text" id="name" placeholder="Your Name *" required="" />
                                    </fieldset>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                    <fieldset>
                                        <input name="phone" type="text" id="phone" placeholder="Your Phone" required="" />
                                    </fieldset>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                    <fieldset>
                                        <input name="email" type="email" id="email" placeholder="Your Email *" required="" />
                                    </fieldset>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                    <fieldset>
                                        <input name="subject" type="text" id="subject" placeholder="Subject" />
                                    </fieldset>
                                    </div>
                                    <div class="col-lg-12">
                                    <fieldset>
                                        <textarea name="message" rows="6" id="message" placeholder="Message" required=""></textarea>
                                    </fieldset>
                                    </div>
                                    <div class="col-lg-12">
                                    <fieldset>
                                        <button type="submit" id="form-submit" class="main-button-icon">Send Message Now <i class="fa fa-arrow-right"></i></button>
                                    </fieldset>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-xs-12">
                            <div class="left-text-content">
                                <p>Copyright &copy; 2021 usbincloud</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xs-12">
                            <div class="right-text-content">
                                    <ul class="social-icons">
                                        <li><p>Follow Us</p></li>
                                        <li><a rel="nofollow" href="https://fb.com"><i class="fa fa-facebook"></i></a></li>
                                        <li><a rel="nofollow" href="https://linkedin.com"><i class="fa fa-linkedin"></i></a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    
            <script src="assets/js/jquery-2.1.0.min.js"></script>
            <script src="assets/js/popper.js"></script>
            <script src="assets/js/bootstrap.min.js"></script>
            <script src="assets/js/owl-carousel.js"></script>
            <script src="assets/js/scrollreveal.min.js"></script>
            <script src="assets/js/waypoints.min.js"></script>
            <script src="assets/js/jquery.counterup.min.js"></script>
            <script src="assets/js/imgfix.min.js"></script> 
            <script src="assets/js/slick.js"></script> 
            <script src="assets/js/lightbox.js"></script> 
            <script src="assets/js/isotope.js"></script> 
            <script src="assets/js/custom.js"></script>

   
        </>

    )
}