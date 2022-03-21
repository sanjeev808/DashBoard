import React from 'react'
import "../../style/TopBar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function TopBar() {
  return (
    <div className='topbar'>
      <div className="topbarwrapper">
        <div className="topLeft">
          <span className='logo'>Sanjeev</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className="topbarIconsContainer">
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className="topbarIconsContainer">
            <Settings />
            <span className='topIconBadge'>2</span>
          </div>
          
        </div>
      </div>
    </div>
  )
  }
