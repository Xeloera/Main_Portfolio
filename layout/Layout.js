import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import BackgroundAnimation from '@/components/BackgrooundAnimation/BackgroundAnimation'
import  {TracingBeam}  from '@/components/ui/tracing-beam'

export const Layout = ({children}) => {
  return (
    <Container>
      <BackgroundAnimation />
      <TracingBeam className="overflow-auto padding-2">
      <Header className=''/>
        <div className="  antialiased pt-10 relative">
          <main>{children}</main> 
        </div>
        <Footer />
      </TracingBeam>
      <BackgroundAnimation className="h-4 w-4 "/>
    </Container>
  )
}


