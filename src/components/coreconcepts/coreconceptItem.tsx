import React from 'react'
import CoreConcepts from './CoreConcepts'
import { CORE_CONCEPTS } from '../../data'

const coreconceptItem = () => {
  return (
    <div>
      <section id="core-concepts"><ul>
        {CORE_CONCEPTS.map((item)=><CoreConcepts key={item.title} {...item} />
        )}</ul>
        </section>
        {/* <CoreConcepts
          title={CORE_CONCEPTS[0].title}
          desc={CORE_CONCEPTS[0].description}
          id="1"
        /> */}
    </div>
  )
}

export default coreconceptItem
