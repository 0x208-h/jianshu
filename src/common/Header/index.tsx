import React from "react";
// import { useDispatch, useSelector } from  'react-redux'
// import { onBlur, onFocus, selectFocused } from '../../toolkit/headerSlice'
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { stateTypes } from "./type";
import { handleBlur, handleFocus } from "./store";
import './index.css'

interface HeaderProps extends stateTypes {
  handleFocus?: () => void
  handleBlur?: () => void
}
const Header = (props: HeaderProps) => {

  // const [foused, setFoused] = useState<boolean>(false)
  // const disptch = useDispatch()

  // const focused = useSelector(selectFocused)
  const { focused, handleBlur, handleFocus } = props
  console.log(focused, 'focus')
  return (
    <div className="header-wrapper">
      <div className="header-logo" />
      <div className="header-nav">
        <div>
          <span className="header-home-page">首页</span>
          <span>下载App</span>
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
            <div className="header-search-info">
              <div className="header-search-info-title">热门搜索</div>
            </div>
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
  focused: state.header.focused
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleFocus(){
      dispatch(handleFocus())
    },
    handleBlur(){
      dispatch(handleBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)