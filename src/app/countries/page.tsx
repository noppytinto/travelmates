"use client";
import styles from "@/app/App.module.scss";
import { Country, parseCountry } from "@/entities/country/country";
import Flag from "@/components/FlagImage/Flag";
import { FormEvent, useEffect, useRef, useState } from "react";

function CountriesPage() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  /************************************************
   * FUNCTIONS
   ************************************************/
  const searchCountry = (e: FormEvent) => {
    e.preventDefault();
    const query = inputRef.current?.value;
    if (!query) return;

    setQuery(query);
  };

  /************************************************
   * EFFECTS
   ************************************************/
  useEffect(() => {
    (async () => {
      // const response = await fetch(
      //   process.env.NEXT_PUBLIC_LOCAL_BASE_URL + "/api/countries",
      // );
      // const result = await response.json();
      // console.log(
      //   "fffffffffffffffffffffffffffffffffffffffffff result:",
      //   result,
      // );
      // const parsed = result.data.map(parseCountry) as Country[];
      // setCountries(parsed);
    })();
  }, []);

  useEffect(() => {
    if (!query) return;
    // (async () => {
    //   const response = await fetch(
    //     process.env.NEXT_PUBLIC_LOCAL_BASE_URL + "/api/country/?q=" + query,
    //   );
    //   const result = await response.json();
    //   const parsed = result.data.map(parseCountry) as Country[];
    //   setCountries(parsed);
    // })();
  }, [query]);

  /************************************************
   * JSX
   ************************************************/
  return (
    <div>
      <form
        onSubmit={searchCountry}
        className="m-10 flex flex-col items-center justify-center gap-2"
      >
        <div className="flex items-center justify-center gap-2">
          <input
            type="text"
            placeholder="search country"
            className="rounded-md border-2 border-solid"
            ref={inputRef}
          />
          <button
            type="submit"
            className="rounded-md border-2 border-solid border-neutral-300 px-4 py-1"
          >
            search
          </button>
        </div>
      </form>

      <div>
        <ul className={styles.countriesGrid}>
          {countries.map((c: Country) => (
            <li key={c.name} className={styles.countriesGridListItem}>
              <Flag src={c.flag} name={c.name} alt={c.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CountriesPage;
