import React from 'react';
import logo1 from '../assets/logo1.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-info">
                <div className="footer-overview">
                    <span className='footer-heading'>Overview</span>
                    <ul className='list-of-terms'>
                        <li className='footer-list-of-terms'>Features</li>
                        <li className='footer-list-of-terms'>Blogs</li>
                        <li className='footer-list-of-terms'>Pages</li>
                        <li className='footer-list-of-terms'>Sign-in</li>
                    </ul>
                </div>
                <div className="footer-social-media">
                    <div className="footer-overview">
                        <span className="footer-heading">Follow us</span>
                        <ul className="social-media-list">
                            <li className="social-media-each-list">Facebook</li>
                            <li className="social-media-each-list">Linked</li>
                            <li className="social-media-each-list">Instagram</li>
                            <li className="social-media-each-list">Gmail</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-terms">
                    <div className="footer-overview">
                        <span className="footer-heading">About Us</span>
                        <ul className='list-of-terms'>
                            <li className='footer-list-of-terms'>Terms of Use</li>
                            <li className='footer-list-of-terms'>Privacy</li>
                            <li className='footer-list-of-terms'>Policy</li>
                            <li className='footer-list-of-terms'>Careers</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='copyrights'>@ 2022 Groupmania</div>


        </div>
    )
}

export default Footer;