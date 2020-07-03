import { DONE, START, ERROR, CLICKED_ITEM } from './action-types'

const initMenuState = {
  loading: true,
  data: [],
  error: false,
  modalVisible: false,
}

const menuReducer = (state = initMenuState, action) => {
  switch (action.type) {
    case START.type:
      return {
        ...state,
        loading: true,
      }
    case DONE.type:
      return {
        ...state,
        loading: false,
        error: false,
        ...action.payload,
      }
    case ERROR.type:
      return {
        ...state,
        error: true,
        loading: false,
      }
    case CLICKED_ITEM.type:
      return {
        ...state,
        ...action.payload,
      }
    case 'close':
      return {
        ...state,
        modalVisible: false,
      }
    default:
      return state
  }
}

export default menuReducer
