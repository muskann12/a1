// src/app/country/[country_name]/page.tsx
import { notFound } from 'next/navigation';
import countries from '../../../data/countries';

interface CountryDetailsProps {
  params: {
    country_name: string;
  };
}

const CountryDetails = ({ params }: CountryDetailsProps) => {
  const { country_name } = params;

  const country = countries[country_name as keyof typeof countries];

  if (!country) {
    notFound(); // This will trigger a 404 page if the country is not found
  }

  return (
    <div className='text-center text-3xl py-11 font-bold align-text-bottom justify-center px-5'>
      <h1>{country.name}</h1>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
};

export default CountryDetails;
