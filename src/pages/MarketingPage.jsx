import React from 'react'
import DrawerAppBar from '../components/common/AppBar'
import HomeCmopo from '../components/HomeCmopo'
import Marketing from '../components/Marketing'

export default function MarketingPage() {
  return (
    <div style={{height:"100%",backgroundImage:`url(https://thumbs.dreamstime.com/b/garden-pest-control-service-services-men-gasoline-spraying-equipment-professional-gardening-76429799.jpg)`,
    backgroundRepeat:"no-repeat", backgroundSize:"cover" ,opacity:"0.9"}}>
        <DrawerAppBar component={<Marketing/>}  />
    </div>
  )
}
