import React from 'react'


const Container =({children}) => (

    <div
    style={{
        display : 'grid',
        gridColumn: '2/3',
        gridTemplateColumns : 'repeat(12,1fr)',
    }}>
    {children}
    </div>

)

export default Container
