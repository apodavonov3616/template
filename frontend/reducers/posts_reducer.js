import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
} from '../actions/post_actions';
import merge from 'lodash/merge';
import { post } from 'jquery';

/*
Export a `PostsReducer` that takes in the old state and appropriately handles
all post actions.
*/


const PostsReducer = (oldState={}, action) => {
  Object.freeze(oldState)

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, oldState, action.posts)
    case RECEIVE_POST:
      return Object.assign({}, oldState, {[action.post.id]: action.post})
    case REMOVE_POST:
      const newState = Object.assign({}, oldState)
      delete newState[action.postId]
      return newState
    default:
      return oldState;
  }
}

export default PostsReducer