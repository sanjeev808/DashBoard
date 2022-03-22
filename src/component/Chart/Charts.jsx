import React from 'react'
import '../../style/Home/Charts.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Charts() {
    const data = [
        {
          name: 'jan',
        "Active User": 4000,
     
        },
        {
          name: 'Feb',
          "Active User": 3000,
   
        },
        {
          name: 'March',
          "Active User": 2000,
      
        },
        {
          name: 'Apr',
          "Active User": 2780,
       
        },
        {
          name: 'May',
          "Active User": 1890,

        },
        {
          name: 'June',
          "Active User": 2390,
     
        },
        {
          name: 'July',
          "Active User": 3490,
       
        },
        {
            name: 'Aug',
            "Active User": 6590,
         
          },
          {
            name: 'sept',
            "Active User": 2516,
         
          },
          {
            name: 'Oct',
            "Active User": 5453,
         
          },
          {
            name: 'Nav',
            "Active User": 5248,
         
          }, {
            name: 'Dec',
            "Active User": 6524,
         
          },
      ];
  return (
    <div className='charts'>
        <h3 className='chartTitle'>Sales Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"/>
            <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
            <Tooltip/>
            <CartesianGrid stroke='#e0dfdf'/>
        </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
