import React from 'react'
import {RegionListComponent, total, useApiFetchingComponent} from "./../../sharedComponent/sharedComponent"
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { regionByLanguage, singleRegionData, useFetchCountriesByRegion } from './data';

const SingleRegion = () => {
  const [lang, login] = useOutletContext();
  const { regionsId } = useParams();
  const { data, loading, error } = useApiFetchingComponent(login)
  const {countries} = useFetchCountriesByRegion(regionsId, data)
  const { RegionName, OtherRegion } = regionByLanguage(regionsId, lang)

  return (
    <div className='py-44 mb-20'>
      <h1 className='headTitle1'>
        {lang === "en" ? `${singleRegionData.title[lang]} ${RegionName}` : `${RegionName}${singleRegionData.title[lang]}`}
      </h1>
      <h4 className='headSubTitle1'><strong>{total[lang]} :</strong> {countries ? countries.length : 0}</h4>

      <ul className='mt-20 px-4 gap-4 grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'>
        {countries?.map((country, index) => {				
          return (
            <li key={country?.id + index.toString()} className='inline-block relative group hover:scale-105 focus-within:scale-110 transitionEffect' title={country?.name[lang]?.length > 10 ? country?.name[lang] : ""}>
              <div className='absolute left-0 inset-y-0 grid items-center justify-center -z-10'>
                <img 
                  src={country?.flag?.svg} 
                  alt={country?.flag?.alt} 
                  loading="lazy"
                  className='aspect-[8/3] max-w-28 mx-auto object-contain invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:opacity-100 group-focus-within:visible transitionEffect'
                />
              </div>

              <Link to={`/countries/${country?.id}`} 
                className='lg:text-lg font-poppins grid items-center justify-center bg-slate-300/300 textLight dark:dark_text font-semibold dark:bgLight p-2 rounded-xl shadow-md dark:shadow-slate-50/50 
                shadow-slate-800/50 uppercase tracking-widest transitionEffect dark:group-hover:textShawdo'>
                  <span className='group-hover:backdrop-blur-[5px] dark:group-hover:backdrop-blur-[5px]'>
                    {country?.name[lang] === undefined ? country?.id?.slice(0, 10) : country?.name[lang]?.slice(0, 10)}
                    {country?.name[lang]?.length > 10 && "..."}
                  </span>
              </Link>
            </li>
          )
        })}
      </ul>

      <div className='mt-20'>
        <p className='font-semibold'><strong>{singleRegionData.others[lang]}:</strong></p>

        <RegionListComponent region={OtherRegion} lang={lang}/>
      </div>      
    </div>
  )
}

export default SingleRegion
