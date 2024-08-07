import { Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <>
        <Outlet />
        <footer className="contendor text-center padding-25">by cesarpgasuz</footer>
    </>
  )
}
export default Layout