import DashboardA from "./dashboard/dashboardA"
import DashboardB from "./dashboard/dashboardB"
import Info from "./user/info"
import Password from "./user/password"
import DashboardMain from "./dashboardMain"
import Developing from "./developing"
import Memo from "./memo"
import LayoutCom from "./layoutCom"

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
  dashboardMain: <DashboardMain/>,
  memo: <Memo/>,
  developing: <Developing/>,
  layout:<LayoutCom/>
};

export default element