import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';
import { Product, Separator, Header } from '..';
import { Description } from './components';
import { StackParamsList } from '../../types';
import { getCurrentProduct, setCurrentProductAction } from '../../../actions';
import { defaultStyles, spinner, StackRouters } from '../../../constans';
import { getCurrentProductSelector } from '../../../selectors';

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
      <Header />
      {!isLoading ? (
        <>
          <Product product={currentProductData} isExtend />
          <Separator />
          <Description
            description={
              currentProductData.description || 'Description is empty'
            }
          />
        </>
      ) : (
        <View style={spinner}>
          <ActivityIndicator color={defaultStyles.colors.blue} size="large" />
        </View>
      )}
    </ScrollView>
  );
};
