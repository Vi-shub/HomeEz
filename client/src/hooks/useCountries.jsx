// import countries from "indian-states-cities-list";

// const formattedCountries = Object.keys(countries).map((state) => ({
//   value: state,
//   label: state,
//   cities: countries[state],
// }));

// const useCountries = () => {
//   const getAll = () => formattedCountries;
//   return { getAll };
// };

// export default useCountries;

import Indian_states_cities_list from "indian-states-cities-list";

const formattedStates = Indian_states_cities_list.STATES_OBJECT.map((state) => ({
  value: state.name,
  label: state.label,
  cities: Indian_states_cities_list.STATE_WISE_CITIES[state.name].map((city) => ({
    value: city,
    label: city,
  })),
}));

const useCountries = () => {
  const getAll = () => formattedStates;
  return { getAll };
};

export default useCountries;
