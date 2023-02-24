import axios from "axios";
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
import { HYDRATE } from "next-redux-wrapper";

export const getProduct = createAsyncThunk('product', async (id) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/product/${id}`);
      return { ...res.data._doc, related: res.data.related, reviews: res.data.reviews  };
    } catch (err) {
      throw err.response.data;
    }
  });

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        product: {
            related: [],
            reviews: []
        },
        homepage: {
            productFeat: [],
            productNew: [],
            productPopular: [],
            productDiscount: [],
        }
    },
    reducers: {
        setProducts(state, action) {
            return {
                ...state,
                products: action.payload
            }
        },
        setMoreProducts(state, action) {
            return {
                ...state,
                products: [...state.products, ...action.payload]
            }
        },
        setHomepage(state, action) {
            return {
                ...state,
                homepage: action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(HYDRATE, (state, action) => {
                return {
                    ...state,
                    ...action.payload.products,
                };
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                return { ...state, product: action.payload };
              }).addCase(getProduct.rejected, (state, action) => {
                throw action.error.message;
              })
    },
});

export const { setProducts, setMoreProducts, setHomepage } = productSlice.actions;
export default productSlice.reducer;