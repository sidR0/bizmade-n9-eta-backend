import axios from 'axios'

export const listDataCreator = (apiType) => (

    () => async (dispatch) => {

        try {

            dispatch({ type: `${apiType}_list_request` })
            console.log(apiType);
            const { data } = await axios.get(`/api/${apiType}`)

            dispatch({
                type: `${apiType}_list_success`,
                payload: data,
            })

        } catch (error) {

            dispatch({
                type: `${apiType}_list_fail`,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            })

        }
    }
);
