/* eslint-disable */
declare module 'redux-immutablejs' {
  import { ReducersMapObject, Reducer, Action } from 'redux';
  import { Collection } from 'immutable';

  export declare function combineReducers<S, A extends Action, T>(reducers: ReducersMapObject<S, A>, getDefaultState?: () => Collection.Keyed<T, S>): Reducer<S, A>;
  export declare function combineReducers<S, A extends Action>(reducers: ReducersMapObject<S, A>, getDefaultState?: () => Collection.Indexed<S>): Reducer<S, A>;
  export declare function combineReducers<S>(reducers: ReducersMapObject<S, any>, getDefaultState?: () => Collection.Indexed<S>): Reducer<S>;
}
