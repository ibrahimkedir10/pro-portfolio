// HomePage.js
import React, { useEffect } from 'react';
import EmailIcon from "@material-ui/icons/Email";
import '../style/Home.css'; // Assuming your CSS file is in the style folder
import buildingImg from "../assets/buildingImg.png";
import profilePicture from "../assets/logo-no-background.png";

const HomePage = () => {
    useEffect(() => {
        const image = document.querySelector('.subimg');

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust this threshold based on when you want the effect to trigger
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    image.classList.add('float-up'); // Add a class when the image is in view
                } else {
                    image.classList.remove('float-up'); // Remove the class when the image is out of view
                }
            });
        }, options);

        observer.observe(image);

        return () => {
            observer.disconnect(); // Clean up the observer when the component is unmounted
        };
    }, []);

    return (
        <div className="wrapper">
            <div className="about">
                <img src={profilePicture} alt="Ibrahim Kedir" className='mainimg' />
                <div className="prompt">
                    <p className="font">Advance Your Web Profolio With Just 1 Click </p>
                </div>
            </div>
            <div className="about1">
                <div className="image-container">
                    <img src={buildingImg} alt="Ibrahim Kedir" className='subimg' />
                </div>
                <div className="text">
                    <h1 className='header1'>At Pro Portfolio,</h1>
                    <p className='p1'> we specialize in creating unique and personalized websites that not only reflect your brand
                        identity but also elevate your online presence. Our team of experienced developers and designers is
                        dedicated to turning your vision into a stunning reality.

                    </p>


                </div>
            </div>
            <div className="about2">
                <h1 className='header2'> Why Choose Us?</h1>


                <h2 className='subheader2'> Customization</h2>
                <span className='p2'>
                    Your website is as unique as your business. We tailor every aspect, from design to functionality, to meet your specific needs and goals.
                </span>


                <h2 className='subheader2'>Cutting-Edge Technology</h2>
                <span className='p2'>
                    Stay ahead of the curve with the latest technologies and trends. We leverage advanced tools and frameworks to ensure your website is modern, fast, and user-friendly.        </span>


                <h2 className='subheader2'>SEO Optimization</h2>
                <span className='p2'>
                    Boost your online visibility with our SEO-optimized websites. We implement best practices to improve your search engine rankings and attract more organic traffic.               </span>


                <h2 className='subheader2'>Reliable Support</h2>
                <span className='p2'>
                    Our commitment doesn't end with the launch of your website. We provide ongoing support and maintenance to keep your site running smoothly and up-to-date.              </span>


            </div>
            <div className="about3">
                <div className="prompt">
                    <p className="header3">Send An Email To Connect And Start Building Your Dream Website Today !</p>
                    <a href="mailto:ibrahim.kedir@outlook.com">
                        <EmailIcon />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
