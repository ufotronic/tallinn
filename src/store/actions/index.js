
import api from "../../api/api"

export const fetchProducts = (queryString) => async (dispatch) => {

    try{

        const { data } = await api.get(`/public/products?${queryString}`);

        dispatch({type: "IS_FETCHING"});


        dispatch({
            type: "FETCH_PRODUCTS",
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage,

        });

        dispatch({type: "IS_SUCCESS"});
    
    } catch (error) {

        console.log(error);
        dispatch({
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "Failed to fetch products",


        });
    }

};


export const fetchCategories = () => async (dispatch) => {

    try{

        const { data } = await api.get(`/public/categories`);

        dispatch({type: "CATEGORY_LOADER"});


        dispatch({
            type: "FETCH_CATEGORIES",
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage,

        });

        dispatch({type: "IS_ERROR"});
    
    } catch (error) {

        console.log(error);
        dispatch({
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "Failed to fetch categories",


        });
    }

};