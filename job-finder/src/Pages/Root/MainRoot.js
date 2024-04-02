import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useNavigation } from "react-router-dom";
import Loading from "../../Components/UI/Loading";
import classes from "./root.module.css"
export default function MainRoot() {

  const nav = useNavigation()
  const isLoading = nav.state === "loading"

  return <>
    <Header />

    {isLoading ?
      <div className={classes.loadingCont}>
        <Loading />
      </div> :
      <Outlet />
    }
  </>
}