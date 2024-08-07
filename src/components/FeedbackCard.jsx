import React from 'react';
import { quotes } from '../assets';

const FeedbackCard = ({content, name, title, img}) =>  (
    <div className='flex justify-between flex-col px-10 py-12 rounded=[20px] max-w-[370px] md:mr-10 sm:-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="double_quotes" className='w-[420px] h-[27px] object-contain' />

    </div>
  )


export default FeedbackCard