import React from 'react'

export default function Navbar(props){
  return (
    <>
    <a className="navbar-brand" href="/">{props.title}</a>
<a className="nav-link" href="/">{props.aboutText}</a>
    <div>
      hello this is a navbar
    </div>
    </>
  )
}
