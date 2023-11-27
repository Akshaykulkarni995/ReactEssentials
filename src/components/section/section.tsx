import React from 'react'
//forward props ...props
//...props insidde props is rest operator grouping

const Section = ({title,children ,...props} : any) => {
  return (
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
  )
}

export default Section
