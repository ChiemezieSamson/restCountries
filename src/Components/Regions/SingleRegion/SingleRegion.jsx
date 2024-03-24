import React from 'react'
import {RegionListComponent, total, useApiFetchingComponent} from "./../../sharedComponent/sharedComponent"
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { regionByLanguage, singleRegionData, useFetchCountriesByRegion } from './data';
import Error from '../../Error/Error';
import Loading from '../../Loading/Loading';

const SingleRegion = () => {
  const [lang, login] = useOutletContext();
  const { regionsId } = useParams();
  // fetching the countries from rest countries api
  const { data, loading, error } = useApiFetchingComponent(login)
  const {countries} = useFetchCountriesByRegion(regionsId, data, lang) // fetching countries by rehion provided in the url
  const { RegionName, OtherRegion } = regionByLanguage(regionsId, lang) // get the the name of the present region and remove it from the rest of the regions

  return (
    <div className='py-32'>
      <h1 className='headTitle1'>
        <span className='normal-case'>
          {lang === "en" ? `${singleRegionData.title[lang]} ${RegionName}` : `${RegionName}${singleRegionData.title[lang]}`}
        </span>
      </h1>
      <h4 className='headSubTitle1'><strong>{total[lang]} :</strong> {countries ? countries.length : 0}</h4>

      {/* loading handling */}
      <Loading loading={loading}/>

      <ul className='mt-20 px-4 gap-4 grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'>
        {countries?.map((country, index) => {				
          return (
            <li key={country?.id + index.toString()} className='inline-block relative group hover:scale-105 focus-within:scale-110 transitionEffect' title={country?.name[lang]?.length > 13 ? country?.name[lang] : ""}>
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
                  <div className='group-hover:backdrop-blur-[5px] dark:group-hover:backdrop-blur-[5px] w-full'>
                    {country?.name[lang] === undefined ? country?.id?.slice(0, 13) : country?.name[lang]?.slice(0, 13)}
                    {country?.name[lang]?.length > 13 && "..."}
                  </div>
              </Link>
            </li>
          )
        })}
      </ul>

      <div className='mt-20'>
        <p className='font-semibold'><strong>{singleRegionData.others[lang]}:</strong></p>

        <RegionListComponent region={OtherRegion} lang={lang}/>
      </div>  

      {/* Error handling */}    
      <Error customId={"singleregion"} error1={error}/>
    </div>
  )
}

export default SingleRegion
