import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Product, Separator, Header } from '..';
import { ColorSelect, Description } from './components';
import { StackParamsList } from '../../types';

export const ProductDetails: React.FC = () => {
  const route = useRoute<RouteProp<StackParamsList, 'productDetailsMock'>>();

  const { product } = route.params;

  return (
    <ScrollView>
      {product ? (
        <>
          <Header />
          <Product product={product} isExtend />
          <Separator />
          <ColorSelect colors={product.colors} />
          <Separator />
          <Description description={product.description} />
        </>
      ) : null}
    </ScrollView>
  );
};
