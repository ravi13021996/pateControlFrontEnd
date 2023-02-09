import React from 'react'
import AboutUs from '../components/AboutUs'
// import  from '../components/common/AppBar'
import HomeCmopo from '../components/HomeCmopo'
import DrawerAppBar from '../components/common/AppBar'

export default function AboutUsPage() {
    
  return (
    <div style={{maxWidth:"100%", height:"100%"}}>
        <DrawerAppBar component={<AboutUs/>}  />
        
    </div>
  )
}
