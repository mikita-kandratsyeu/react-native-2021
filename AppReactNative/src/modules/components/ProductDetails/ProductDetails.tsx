import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { Product, Separator, Header, LoadingIndicator } from '..';
import { Description } from './components';
import { StackParamsList } from '../../types';
import { getCurrentProduct, setCurrentProductAction } from '../../../actions';
import { getCurrentProductSelector } from '../../../selectors';
import { defaultStyles, spinner, StackRouters } from '../../../constans';

export const ProductDetails: React.FC = () => {
  const dispatch = useDispatch();
  const route = useRoute<
    RouteProp<StackParamsList, StackRouters.productDetails>
  >();

  const currentProductData = useSelector(getCurrentProductSelector);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { productId } = route.params;

  useEffect(() => {
    setIsLoading(true);

    getCurrentProduct(productId).then(product => {
      dispatch(setCurrentProductAction(product));

      setIsLoading(false);
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: defaultStyles.colors.white }}>
      <Header isShoppingCartVisible isSearchIconVisible />
      {isLoading ? (
        <View style={spinner}>
          <LoadingIndicator color={defaultStyles.colors.blue} />
        </View>
      ) : (
        <>
          <Product product={currentProductData} isExtend />
          <Separator />
          <Description product={currentProductData} />
        </>
      )}
    </ScrollView>
  );
};
