import { IAction } from '../../types';
import { addToFilters, removeFromFilters } from './reducer';
// interfaces

export type Filter = string;

export type UnionFilter = Filter | Filter[];

// Action Types
export const ADD_FILTER = 'react-case-study/filter/add_filter';
export const REMOVE_FILTER = 'react-case-study/filter/remove_filter';

const initalState: Filter[] = [];

// Reducer
export default function reducer(state = initalState, action: IAction<UnionFilter>): Filter[] {
  switch (action.type) {
    case ADD_FILTER:
      if (action.payload) return addToFilters(state, action.payload);
      throw new Error('Action Payload is empty @addToCartReducer');
    case REMOVE_FILTER:
      if (action.payload) return removeFromFilters(state, action.payload);
      throw new Error('Action Payload is empty @removeFromCartReducer');
    default:
      return state;
  }
}

// Action Creators
export function addToCart(filter: UnionFilter): IAction<UnionFilter> {
  return { type: ADD_FILTER, payload: filter };
}

export function removeFromCart(item: UnionFilter): IAction<UnionFilter> {
  return { type: REMOVE_FILTER, payload: item };
}