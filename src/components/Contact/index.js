﻿import { useEffect, useState } from 'react'
import React from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import { Breakpoint } from 'react-socks';
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_dox0ma5',
                'template_j4hr81e',
                form.current,
                '90zt7fwk6DsMLBaLl'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in internship opportunities to get hands on experience and  expand my skillset. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>
                    <Breakpoint small up>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                        </div>
                    </Breakpoint>
                </div>

               
                <div className="info-map">
                    Bryan Soriano,
                    <br />
                    Orlando, FL,
                    <br />
                    4000 Central Florida Blvd, 32816 <br />
                    <span>Bryansoriano@knights.ucf.edu</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[28.602377, -81.200298]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[28.602377, -81.200298]}>
                            <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
               
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact
