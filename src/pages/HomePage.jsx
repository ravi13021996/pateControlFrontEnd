import React from 'react'
import DrawerAppBar from '../components/common/AppBar'
import HomeCmopo from '../components/HomeCmopo'

export default function HomePage() {
  return (
    <div style={{maxWidth:"100%", height:"100%"}}>
        <DrawerAppBar component={<HomeCmopo/>}  />

        
    </div>
  )
}
