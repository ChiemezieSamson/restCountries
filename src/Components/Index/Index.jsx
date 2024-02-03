import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link, useOutletContext } from 'react-router-dom'
import { Indexdata } from './data';

const Index = () => {
  const [isLanguage] = useOutletContext();
  return (
    <div className='h-dvh grid items-center justify-center'>
      <div className='p-4 max-w-3xl mx-auto'>
        <span className='inline-block my-5 font-poppins'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>{Indexdata.title[isLanguage]}</h1>
          <h4 className='px-2 py-1 my-2 font-semibold sm:text-lg md:text-xl lg:text-2xl'>{Indexdata.sub_title[isLanguage]}</h4>
        </span>
        <div>
          <p>
            {Indexdata.text[isLanguage]}
          </p>
          <Link to="/countries" className='button'>
          {Indexdata.button_text[isLanguage]}
            <FaLongArrowAltRight  className='inline-block ml-4'/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Index
