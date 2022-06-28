import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllSpots, getSpot } from './SpotsApi';

export const initialState = {
    data: [],
    filters: {
        city: {
            id: 184,
            name: "Ciudad de México",
        },
        spot_type_id: '',
        term: '',
        squareSpace: [1, 100],
    },
    status: 'idle',
};

export const iniSpotsAsync = createAsyncThunk(
    'spots',
    async () => await getAllSpots(),
    {
        condition: (filters, { getState, extra }) => (getState().spots.status === 'idle'),
    }
);
export const findSpotsAsync = createAsyncThunk(
    'spot/fetchByIdStatus',
    async (spotId, thunkAPI) => {
        const response = await getSpot(spotId)
        return response.data
    }
)

export const spotsSlice = createSlice({
    name: 'spots',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(iniSpotsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(iniSpotsAsync.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.data = action.payload;
            })
            .addCase(findSpotsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(findSpotsAsync.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.data = state.data.map(spot => (spot.id === action.payload.id ? action.payload : spot));
            });
    },
});

export const { setFilters } = spotsSlice.actions;


export const selectFilters = (state) => state.spots.filters;
export const selectFilteredData = (state) => {
    const { city, spot_type_id, term, squareSpace } = state.spots.filters;
    const minSquareSpace = squareSpace[0];
    const maxSquareSpace = squareSpace[1] || squareSpace[0];

    return state.spots.data.filter((spot) => {
        const filter1 = (!city || !city.id) || city.id === spot.city_id;
        const filter2 = !term || term === spot.term;
        const filter3 = !spot_type_id || spot_type_id === spot.spot_type_id;
        const filter4 = !minSquareSpace || minSquareSpace <= spot.square_space;
        const filter5 = !maxSquareSpace || maxSquareSpace >= spot.square_space;

        return (filter1 && filter2 && filter3 && filter4 && filter5);
    })
};
export const selectSpot = (state, spotId) => {
    return state.spots.data.find((spot) => spot.id === spotId)
};
export const groupByCoordinates = (spots) => {
    return Object.values(spots.reduce((group, spot) => {
        const { location } = spot;
        const key = location.coordinates.join(',');
        group[key] = group[key] ?? [];
        group[key].push(spot);
        return group;
    }, {}));
}

export default spotsSlice.reducer;