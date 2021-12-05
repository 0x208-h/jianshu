import axios from "axios"

export const getHeaderListData = () => axios.get('/api/headerList.json').then(res => res.data).catch(res => res)