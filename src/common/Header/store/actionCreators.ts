import { Dispatch } from 'redux'
// import axios from 'axios'
import { SEARCH_BLUR, SEARCH_FOCUS, HEADER_LIST, MOUSE_ENTER, MOUSE_LEAVE, PAGE_CHANGE } from './const'
import { getHeaderListData } from '../api'

const changeList = (payload: string[]) => ({
  type: HEADER_LIST,
  payload,
  totalPage: Math.ceil(payload.length / 5)
})

export const handleFocus = () => ({
  type: SEARCH_FOCUS
})

export const handleBlur = () => ({
  type: SEARCH_BLUR
})

export const handleMouseEnter = () => ({
  type: MOUSE_ENTER
})

export const handleMouseLeave = () => ({
  type: MOUSE_LEAVE
})

export const handlePageChange =(payload: number) => ({
  type: PAGE_CHANGE,
  payload
})

export const getList = () => async (dispatch: Dispatch) => {
  try {
    const res = await getHeaderListData()
    if(res.success) {
      dispatch(changeList(res.data))
    }
  } catch {
    dispatch(changeList([]))
  }
 
}

// export const getList = () => {
//   return (dispatch: Dispatch) => {
//     axios.get('/api/headerList.json')
//     .then( (res) => {
//       console.log(res.data, 'res')
//       dispatch(changeList(res.data))
//     })
//     .catch( err => {
//       console.log(err, 'err')
//       dispatch(changeList([]))
//     })
//   }
// } 