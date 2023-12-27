import React, { ReactElement, ReactNode,PropsWithChildren } from 'react'
import { JsxElement } from 'typescript';

interface Props {
    children: ReactNode | ReactElement ;
  }

const Container: React.FC<Props> = ({children}) => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>
      {children}
    </div>
  )
}

export default Container
