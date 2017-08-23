import { combineReducers } from 'redux';
import { SET_ERROR, SET_TOKEN, SET_USER, INCR_LOADING, LOGOUT } from './actions';
import { connect } from 'react-redux';
import update from 'immutability-helper';

const initialState = {
     token: null,
     user: null,
     loading: 0,
     error: null,
     message: '',
     loading: false,
     loggedIn: false
}

export const reducer = (state = initialState, action) => {
     switch(action.type) {
          case SET_TOKEN:
               return update(state, {
                    token: {
                         $set: action.payload
                    }
               });
          case SET_USER:
               return update(state, {
                    user: {
                         $set: action.payload
                    }
               });
          case SET_ERROR:
               return update(state, {
                    error: {
                         $set: action.payload
                    }
               })
          case LOGOUT:
               return update(state, {
                    user: {
                         $set: null
                    },
                    token: {
                         $set: null
                    },
                    loggedIn: {
                         $set: false
                    }
               })
          case INCR_LOADING:
               return update(state, {
                    loading: {
                         $apply: (x) => x + action.payload
                    }
               })
          default:
               return state;
     }
}
