import React, { useState, useRef } from 'react';

const Contact = () => {
  const nameInput = useRef('');
  const phoneInput = useRef('');
  const emailInput = useRef('');
  const msgInput = useRef('');

  const [warringName, setWarringName] = useState('');
  const [warringPhone, setWarringPhone] = useState('');
  const [warringEmail, setWarringEmail] = useState('');
  const [warringMsg, setWarringMsg] = useState('');

  const handleSubmit = () => {
    if ((nameInput.current.value).length === 0) {
      return setWarringName('value invalid')
    }
    if ((phoneInput.current.value).length === 0) {
      return setWarringPhone('value invalid')
    }
    if ((emailInput.current.value).length === 0) {
      return setWarringEmail('value invalid')
    }
    if ((msgInput.current.value).length === 0) {
      return setWarringMsg('value invalid')
    }
  }

  const handleOnChange = () => {

  }
  return (
    <div id="CONTACT" className="contact-div">
    <form>
      <h2 style={{margin: "1em"}}>Contact Us</h2>
      <label> Name
        <input type="text" ref={nameInput}
        onChange={(e) => {
          if ((e.target.value).length) {
            setWarringName('')
          }
        }}></input>
      </label>
      {warringName}
      <label> Cellphone
        <input type="text" ref={phoneInput}
        onChange={(e) => {
          if ((e.target.value).length) {
            setWarringPhone('')
          }
        }}></input>
      </label>
      {warringPhone}
      <label>Email
        <input type="text" ref={emailInput}
        onChange={(e) => {
          if ((e.target.value).length) {
            setWarringEmail('')
          }
        }}></input>
      </label>
      {warringEmail}
      <label>Message
        <input type="text"
          onChange={(e) => {
            if ((e.target.value).length) {
              setWarringMsg('')
            }
          }}
        ref={msgInput}
        style={{
          width: "100%", verticalAlign: "top",resize: "vertical", height: "8em",
          display: "inline-block", outline: "none"
        }}
      ></input>
      </label>
      {warringMsg}
      <div style={{display: "flex", justifyContent:"center", margin: "3em"}}>
      <button onClick={handleSubmit}>Submit</button>
      </div>
    </form>
    </div>
  )
}

export default Contact;