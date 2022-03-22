import React from 'react'
// import '../../style/Home/Home.css'
import '../../style/Home.css'
import Featuredinfo from '../../component/Featuredinfo/Featuredinfo'
import Charts from '../../component/Chart/Charts'
import TopBar from '../../component/TopBar/TopBar'
import SideBar from '../../component/SideBar/SideBar'

export default function Home() {
  return (
    <div className='home'>
      <TopBar />
      <SideBar />
      <Featuredinfo />
      <Charts/>
    </div>
  )
}
