import { IOrder } from '../interfaces';

export type StackParamsList = {
  ProductDetails: {
    productId: string;
  };

  OrderDetails: {
    order: IOrder;
  };

  MapView: {
    shippingAddress: {
      name: string;
      coordinates: {
        longitude: number;
        latitude: number;
      };
    };
  };
};
