import {Outlet} from "react-router-dom"
//lazy load error don't know why!
// const HeaderInnner=lazy(()=>import("./header/index-header"));
// const SiderInner=lazy(()=>import("./sider/index-sider"));

export default () => {
  return (
    <div className="layout-common">
      123
      <Outlet/>
    </div>
  );
};
// function Login(){
//   return (
//     <div>
//       <div>layout</div>
//       <Outlet/>
//     </div>
//   )
// }
// export default Login