
import Link from 'next/link';
import countries from '../data/countries';

const CountryList = () => {
  return (
    <div>

      <h1 className='text-center text-6xl bg-slate-300 font-extrabold py-10'>ASSIGNMENT</h1>
      <h1 className='text-4xl text-center font-bold bg-slate-500 py-4'>Country List</h1>
      <ul className='text-center gap-8 text-3xl font-mono border-t-neutral-500 bg-slate-300 py-11 px-10'>
        <div/>
        {Object.keys(countries).map((key) => (
          <li key={key}>
            <Link  href={`/country/${key}`}>
              {countries[key].name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
