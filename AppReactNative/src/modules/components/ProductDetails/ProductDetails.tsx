import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { getProductsSelector } from '../../../selectors';
import { setProducts } from '../../../actions';
import { products } from '../../../mock';
import { Product, Separator, Header } from '..';
import { ColorSelect, Description } from './components';

export const ProductDetails: React.FC = () => {
  // TODO: In the future task "product" will pass through props.
  const dispatch = useDispatch();

  const productsData = useSelector(getProductsSelector);

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch]);

  return (
    <ScrollView>
      {productsData.length && productsData[0].items ? (
        <>
          <Header />
          <Product product={productsData[0].items[0]} isExtend />
          <Separator />
          <ColorSelect colors={productsData[0].items[0].colors} />
          <Separator />
          <Description description={productsData[0].items[0].description} />
        </>
      ) : null}
    </ScrollView>
  );
};
