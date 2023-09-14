import React from 'react'
import { star } from '../assets/icons'

const CustomerReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img src={imgURL} alt="customer" width={100} height={100} 
        className=' rounded-full object-cover'/>
        <p className='mt-6 text-center max-w-sm info-text'>{feedback}</p>
        <div className='flex mt-3 justify-center items-center gap-2.5 '>
            <img src={star} alt="rating" width={24}/> 
            <p className='text-xl font-montserrat text-slate-gray'>{rating}</p>
        </div>
        <p className='mt-1 font-bold text-3xl font-palaquin'>{customerName}</p>

    </div>
  )
}

export default CustomerReviewCard