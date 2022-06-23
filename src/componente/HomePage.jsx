import React from 'react'
import {Link} from "react-router-dom"

const HomePage = () => {
  return (
    <div>
<Link to={'/signUp'}> <button>Sign Up</button> </Link>
<Link to={'/login'}> <button>login</button> </Link>
    </div>
  )
}

export default HomePage