import React from 'react'
import logo from '../logo.svg';
import Card from './Card';



function Cards({testemonial}) {
    return (
        <div >

            <div className="cards-content">
                {testemonial.map((data)=>{
                    return <Card key={data.id}{...data}/>
                })}
            </div>

           

        </div>
    )
}




export default Cards