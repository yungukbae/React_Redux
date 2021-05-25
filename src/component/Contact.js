import React from 'react';
import Rainbow from '../hoc/Rainbow'

const Contact = (props) => {
    console.log(props)
    setTimeout(() => {
        props.history.push('/')
    },2000)
    return(

        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Hey gang, in this React tutorial I'll introduce you tothe React Router and how we can use it to </p>
        </div>

    )
}

export default Rainbow(Contact)