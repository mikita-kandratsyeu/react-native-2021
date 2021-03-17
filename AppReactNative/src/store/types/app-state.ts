import createRootReducer from '../root-reducer';

const rootReducer = createRootReducer();

export type AppState = ReturnType<typeof rootReducer>;
