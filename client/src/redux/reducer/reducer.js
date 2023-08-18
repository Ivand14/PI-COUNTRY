import { ALL_COUNTRY, CREATE_ACTIVITY, DELETE_ACTIVITY, DETAIL, FILTER, GET_ACTIVITY, ORDER, SEARCH_COUNTRY } from "../action/action";

const initialState = {
    resultSearch : [],
    Countries:[],
    filterByContinent:[],
    Activity:[],
    CountryDetail:[],
}

const rootReducer = (state = initialState,action) =>{
    switch(action.type) {
        case SEARCH_COUNTRY:
            return {...state,resultSearch:action.payload}
        case ALL_COUNTRY:
            return {...state,Countries:action.payload,filterByContinent:action.payload}
        case DETAIL:
            return{...state,CountryDetail:action.payload}
        case FILTER:
            let filteredCountries = state.Countries;
            
            if (action.payload.continent !== 'All') {
                filteredCountries = filteredCountries.filter(ct =>
                    ct.continent === action.payload.continent
                );
            }
            
            if (action.payload.activityFilter !== 'All') {
                filteredCountries = filteredCountries.filter(ct =>
                    ct.Activities.some(act => act.name === action.payload.activityFilter)
                );
            }
            
            return {
                ...state,
                filterByContinent: filteredCountries
            };
            
        case ORDER:
            const order = [...state.filterByContinent]

            if(action.payload === 'AscName') return {...state,filterByContinent:order.sort((a,b)=>a.name.localeCompare(b.name))}

            if(action.payload === 'DescName') return {...state,filterByContinent:order.sort((a,b)=>b.name.localeCompare(a.name))}

            if(action.payload === 'DescPopulation') return {...state,filterByContinent:order.sort((a,b)=>parseInt(a.population,10)-parseInt(b.population,10))}

            if(action.payload === 'AscPopulation') return {...state,filterByContinent:order.sort((a,b)=>parseInt(b.population,10)-parseInt(a.population,10))}
        case GET_ACTIVITY:
            return{...state,Activity:action.payload}
        case CREATE_ACTIVITY:
            return{...state}
        case DELETE_ACTIVITY:
            return{...state,Activity:state.Activity.filter(act => act.name !== action.payload)}
        default:
            return state;
    }
}

export default rootReducer