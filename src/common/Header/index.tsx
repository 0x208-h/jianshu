import React from "react";
// import { useDispatch, useSelector } from  'react-redux'
// import { onBlur, onFocus, selectFocused } from '../../toolkit/headerSlice'
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { stateTypes } from "./type";
import { handleBlur, handleFocus, getList } from "./store";
import './index.css'

interface HeaderProps extends stateTypes {
  handleFocus?: () => void
  handleBlur?: () => void
}
const Header = (props: HeaderProps) => {

  // const [foused, setFoused] = useState<boolean>(false)
  // const disptch = useDispatch()

  // const focused = useSelector(selectFocused)
  const { focused, handleBlur, handleFocus, list } = props

  console.log(focused, 'focus')

  const getListArea = (show: boolean) => {
    if(show) {
      return (
        <div className="header-search-info">
          <div className="header-search-info-title">
            热门搜索
            <span className="header-search-info-switch">换一批</span>
          </div>
          <div className="header-search-info-item-wrapper">
            <a className="header-search-info-item" href="/">教育</a>
            <a className="header-search-info-item" href="/">教育</a>
            <a className="header-search-info-item" href="/">教育</a>
            <a className="header-search-info-item" href="/">教育</a>
            <a className="header-search-info-item" href="/">教育</a>
          </div>
        </div>
      )
    } else {
      return (<></>)
    }
  }

  return (
    <div className="header-wrapper">
      <div className="header-logo" />
      <div className="header-nav">
        <div>
          <span className="header-home-page">首页</span>
          <span className="heder-download">下载App</span>
          <div className="header-search-wrapper">
            <input 
              type="text"
              className={ focused ? 'header-search input-foused' : 'header-search input-blur'}
              placeholder="搜索" 
              // onFocus={() => disptch(onFocus())}
              // onBlur={() => disptch(onBlur())}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {getListArea(focused)}
          </div>
          
        </div>
        <div className="header-right">
          <span>Aa</span>
          <span>登陆</span>
        </div>
      </div>
      <div className="header-right-btns">
        <button className="header-btn reg">注册</button>
        <button className="header-btn write">写文章</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state: { header: stateTypes}) => ({
  focused: state.header.focused,
  list: state.header.list
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleFocus(){
      dispatch(getList())
      dispatch(handleFocus())
    },
    handleBlur(){
      dispatch(handleBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)