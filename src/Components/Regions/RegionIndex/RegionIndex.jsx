import React from 'react'
import { worldRegions } from './data'
import { Link, useOutletContext } from 'react-router-dom'
import { worldRegionsData } from '../../sharedComponent/sharedComponent';

const RegionIndex = () => {
  const [lang] = useOutletContext();
  return (
    <div className='py-44 mb-20'>
      <h1 className='text-center capitalize text-balance font-poppins text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-semibold mt-0 px-2'>{worldRegions.title[lang]}</h1>
      <h4 className='px-2 py-1 my-2 font-semibold sm:text-lg md:text-xl lg:text-2xl text-center text-balance'>{worldRegions.sub_title[lang]}</h4>
       
       <ul className='grid sm:grid-cols-2 lg:grid-cols-3 mt-40 gap-8 px-4'>
        {worldRegionsData.map(region => {
          return (
            <li key={region.id} className='lg:text-lg hover:scale-105 focus-within:scale-110 transitionEffect bg-slate-300/300 textLight dark:dark_text font-semibold dark:bgLight rounded-xl shadow-md dark:shadow-slate-50/50 
            shadow-slate-800/50 backdrop-blur-[1px] dark:backdrop-blur-0'>
              <Link to={region.url} className='block w-full p-2 h-full rounded-xl text-center'>
                <figure className='inline-block text-center'>
                  <img src={region.image} alt={region.name[lang]} className='w-full xl:size-60 xl:object-fill'/>
                  <figcaption className='inline-block mt-3 font-poppins font-semibold capitalize'>{region.name[lang]}</figcaption>
                </figure>
              </Link>
            </li>
          )
        })}
       </ul>
    </div>
  )
}

export default RegionIndex
