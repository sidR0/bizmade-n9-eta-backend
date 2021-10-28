const apiEnum = {
    products: "products",
    users: "users",
};


const initialState = {
    products: [],
    users: []
};

// const apiType = apiEnum.products;


export const createDataReducer = (apiType) => (
    (state = initialState, { type, payload }) => {
        switch (type) {
            case `${apiType}_list_request`:
                return { ...state, loading: true, [apiType]: [] }
            case `${apiType}_list_success`:
                return { ...state, loading: false, [apiType]: payload }
            case `${apiType}_list_fail`:
                return { ...state, loading: false, error: payload }
            default:
                return state
        }
    }
);
