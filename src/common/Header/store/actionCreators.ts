import { Dispatch } from 'redux'
import axios from 'axios'
import { SEARCH_BLUR, SEARCH_FOCUS, HEADER_LIST } from './const'
import { getHeaderListData } from '../api'

export const handleFocus = () => ({
  type: SEARCH_FOCUS
})

export const handleBlur = () => ({
  type: SEARCH_BLUR
})

export const changeList = (payload: string[]) => ({
  type: HEADER_LIST,
  payload
})

// export const getList = () => async (dispatch: Dispatch) => {
//   const res = await getHeaderListData()
//   dispatch(changeList(res))
// }

export const getList = () => {
  return (dispatch: Dispatch) => {
    // axios.get('/api/headerList.json')
    // .then( (res) => {
    //   console.log(res, 'res')
    //   dispatch(changeList(res.data))
    // })
    // .catch( err => {
    //   console.log(err, 'err')
    //   dispatch(changeList([]))
    // })
    setTimeout(() => {
      dispatch(changeList(['vue']))
    }, 2000)
  }
} 

// export const getList = () => changeList(['vue'])