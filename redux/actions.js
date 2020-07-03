import { DONE, START, ERROR, CLICKED_ITEM } from './action-types'

const fetchFood = () => dispatch => {
  dispatch({ ...START })
  fetch('https://jsonblob.com/api/jsonBlob/ecfad985-bc66-11ea-8cae-99a0660a95d6')
    .then(res => res.json())
    .then(res => {
      dispatch({ ...DONE, payload: { data: res } })
    })
    .catch(e => {
      console.log(e)
      dispatch({ ...ERROR })
    })
}

const getDetails = name => (dispatch, getState) => {
  const foods = getState().data
  const clickedItem = foods.find(item => name === item.item_name)
  dispatch({ ...CLICKED_ITEM, payload: { clickedItem, modalVisible: true } })
}
export { fetchFood, getDetails }
