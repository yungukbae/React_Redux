import React, { Component } from 'react';

const Rainbow = (WrappedComponent) => {

    const colours = ['red','pink','orange','blue','green','yellow']
    const randomColour = colours[Math.random() * 5]
    const className = randomColour + '-text';

    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }


}

export default Rainbow