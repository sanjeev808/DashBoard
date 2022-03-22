import React from 'react'
import {ArrowDownward} from '@material-ui/icons';
import '../../style/Home/Featuredfinfo.css'


export default function Featuredinfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revanue
            </span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$2,415</span>
                <span className='featuredMoneyRate'>-11.4 <ArrowDownward className='featuredIcon negative'/></span>
            </div>
            <div className='featuredSub'> compare to last Month</div>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Sale
            </span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$4,145</span>
                <span className='featuredMoneyRate'> <ArrowDownward className='featuredIcon negative'/></span>
            </div>
            <div className='featuredSub'> compare to last Month</div>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Cost
            </span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$2,225</span>
                <span className='featuredMoneyRate'>+2.4 <ArrowDownward className='featuredIcon'/></span>
            </div>
            <div className='featuredSub'> compare to last Month</div>
        </div>
    </div>
  )
}
