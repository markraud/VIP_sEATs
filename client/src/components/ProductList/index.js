import React, {
  useEffect,
  useState
} from 'react';
import ProductItem from '../ProductItem';
import {
  useStoreContext
} from '../../utils/GlobalState';
import {
  UPDATE_PRODUCTS
} from '../../utils/actions';
import {
  useQuery
} from '@apollo/client';
import {
  QUERY_PRODUCTS
} from '../../utils/queries';
import {
  idbPromise
} from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';



function ProductList() {
  const [state, dispatch] = useStoreContext();

  // const [filteredProducts, setFilteredProducts] = useState(null);


  const {
    currentCategory
  } = state;

  const {
    loading,
    data
  } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {

    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
        currentCategory: null
      });

      console.log("current cat", state.currentCategory)
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      console.log("Loading complete")
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
          currentCategory: null
        });


      });
    }
  }, [data, loading, dispatch]);


  function filterProducts() {
    let products = state.products
    if (!currentCategory) {
      return state.products;
    }

    console.log(state.categories.length)
    return products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return ( <div className = "my-2" >
    <h2 > Our Products: </h2> {
      state.products ? ( <div className = "flex-row" > 
        {filterProducts().map((product) => (
          <ProductItem
            key={product._id}
            _id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </div>
    ) : (
      <h3>You haven't added any products yet!</h3>
    )}
    {loading ? <img src={spinner} alt="loading" /> : null}
  </div>
  );
}

export default ProductList;