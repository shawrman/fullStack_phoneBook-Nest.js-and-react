import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import RemoveUser from './deleteUser';
import UpdateUser from './updateUser';
const Contact = ({ contact }) => {
    return (
        <Popup trigger={<button><div key={contact.userId} 
        position='top left' >
            {(contact.nickName ? <div>{contact.nickName}</div> : <div>{contact.firstName} {contact.lastName}</div>)}
            <img src={contact.photo.slice(0,-9)} style={{filter:`blur(${contact.photo.slice(-6,-3)
                }px) grayscale(${contact.photo.slice(-9,-6)}%) saturate(${contact.photo.slice(-3)}%)`}}/>
        </div></button>} position="right center" >
            <div >
                <p>
                    first name: {contact.firstName}
                    <br />
                    last name: {contact.lastName}
                    <br />
                    address: {contact.address}
                    <br />
                    phone numbers: {contact.phoneNumbers}
                    <br />
                   
                </p>
                <RemoveUser props={ contact.userId}/>
                <br/>
                <UpdateUser props={contact}/>
            </div>
        </Popup>
    )
}

export default Contact
