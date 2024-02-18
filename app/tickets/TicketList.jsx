import Link from 'next/link'
import React from 'react'

async function getTickets(){
    const res=await fetch('http://localhost:4000/tickets',{
        next:{
            revalidate: 0
        }
    })

    return res.json()
}


export default async function TicketList() {
    const tickets=await getTickets()


  return (
    <>
    {tickets.map((t)=>(
        <div key={t.id} className='card my-5'>
            <Link href={`/tickets/${t.id}`}>
            <h3>{t.title}</h3>
            <p>{t.body.slice(0,200)}...</p>
            <div className={`pill ${t.priority}`}>
                {t.priority} priority
            </div>
            </Link>
        </div>
    ))}
    {tickets.length===0 && (
        <p className='text-centre'>There are no open tickets</p>
    )}
    </>
  )
}
