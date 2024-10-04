
export interface Country {
    name: string;
    population: string;
    capital: string;
  }
  
  const countries: Record<string, Country> = {
    canada: {
      name: "Canada",
      population: "38 million",
      capital: "Ottawa",
    },
    germany: {
      name: "Germany",
      population: "83 million",
      capital: "Berlin",
    },
    japan: {
      name: "Japan",
      population: "126 million",
      capital: "Tokyo",
    },
    brazil: {
      name: "Brazil",
      population: "213 million",
      capital: "Brasília",
    },
    australia: {
      name: "Australia",
      population: "25 million",
      capital: "Canberra",
    },
  };
  
  export default countries;
  