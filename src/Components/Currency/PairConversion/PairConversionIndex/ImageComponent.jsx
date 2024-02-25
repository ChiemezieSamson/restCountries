import React from "react";
import { useFetchCountry } from "../../../sharedComponent/sharedComponent";
import { pairConversionData } from "./data";

const ImageComponent = ({countryId, countryCurrencyCode, lang, number, firstPair}) => {
	const { foundCountry } = useFetchCountry(countryId, countryCurrencyCode); // get the country using the countryId

	return (
		<>
			<div className="rounded-lg overflow-clip mb-5 hidden sm:block">
				<div className='relative isolate after:absolute after:inset-0 after:bg-zinc-950/40 after:backdrop-blur-sm after:backdrop-brightness-125'>
					<img src={foundCountry?.flag?.svg ? foundCountry?.flag?.svg : foundCountry?.flag?.png} loading="lazy" alt={foundCountry?.flag?.alt} 
					className='aspect-video inline-block hover:scale-[1.03] focus-within:scale-[1.03] transitionEffect'/>
					
					<div className="absolute inset-0 grid justify-center items-center z-20 dark_text font-poppins font-extrabold">
						<span className="px-1">
							<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase textShawdo backdrop-blur-[1px]'>
								{foundCountry?.name[lang]}
							</h1>
							<h4 className="headSubTitle1 textShawdo backdrop-blur-[1px]">
								{foundCountry?.currency_name[lang]} - {foundCountry?.currency_symbol}
							</h4>
						</span>
					</div>
				</div>
			</div>

			<div className={!number || number === 0 ? "hidden" : "block"}>
				<p className="sm:text-lg md:text-xl lg:text-2xl relative">
					<span className="inline-block mx-3">
						{number}
					</span>
						{foundCountry?.currency_name[lang]} 
					<span className="mx-3 absolute inset-y-0 right-0 grid items-center justify-center">
						{firstPair ? pairConversionData.equals[lang] : ""}
					</span>
				</p>
			</div>
		</>
	);
};

export default ImageComponent;
