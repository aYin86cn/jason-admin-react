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
  ts03:<Ts03/>
};

export default element