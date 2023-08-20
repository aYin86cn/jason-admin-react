import DashboardA from "./dashboard/dashboardA"
import DashboardB from "./dashboard/dashboardB"
import Info from "./user/info"
import Password from "./user/password"
import DashboardMain from "./dashboardMain"
import Developing from "./developing"
import Memo from "./memo"
import LayoutCom from "./layoutCom"

//typescript learn
import Ts01 from "./typeScript/ts01"
import Ts02 from "./typeScript/ts02"
import Ts03 from "./typeScript/ts03"

import Snake from "./snake"

//react advance
// import AdvComponent from "./adavcance/advComponent"
import UseCallbackDM from "./adavcance/useCallback"
import UseContextDM from "./adavcance/useContext/base"
import UseContextAuth from "./adavcance/useContext/auth"
import UseLayoutEffectDM from "./adavcance/useLayoutEffect"
import UseMemoDM from "./adavcance/useMemo"
import UseReducerDM from "./adavcance/useReducer/base"
import UseReducerImmer from "./adavcance/useReducer/immer"
import UseReducerSC from "./adavcance/useReducer/shoppingCart"
import UseRefDM from "./adavcance/useRef"
import UseImmerDM from "./adavcance/useImmer"


// import {lazy,Suspense} from "react"
// const lazyLoad=(comp:JSX.Element)=>(
//   <Suspense fallback={<div>Loading...</div>}>
//     {comp}
//   </Suspense>
// )

const element: { [key: string]: JSX.Element } = {
  dashboardA: <DashboardA/>,
  dashboardB: <DashboardB/>,
  info: <Info/>,
  password: <Password/>,
  dashboard: <DashboardMain/>,
  memo: <Memo/>,
  developing: <Developing/>,
  layout:<LayoutCom/>,
  ts01:<Ts01/>,
  ts02:<Ts02/>,
  ts03:<Ts03/>,
  snake:<Snake/>,
  // advComponent:<AdvComponent/>,
  useCallbackDM:<UseCallbackDM/>,
  useContextDM:<UseContextDM/>,
  useContextAuth:<UseContextAuth/>,
  useLayoutEffectDM:<UseLayoutEffectDM/>,
  useMemoDM:<UseMemoDM/>,
  useReducerDM:<UseReducerDM/>,
  useReducerImmer:<UseReducerImmer/>,
  useReducerSC:<UseReducerSC/>,
  useRefDM:<UseRefDM/>,
  useImmerDM:<UseImmerDM/>,
};

export default element