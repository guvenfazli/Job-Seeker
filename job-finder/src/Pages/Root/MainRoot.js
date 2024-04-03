import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useNavigation } from "react-router-dom";
import Loading from "../../Components/UI/Loading";
import classes from "./root.module.css"
import SaveContext from "../../Store/context";
import { useContext } from "react";

import SavedJobs from "../../Components/UI/SavedJobs/SavedJobs";


export default function MainRoot() {

  const saveContext = useContext(SaveContext)

  console.log(saveContext.isSavedJobs)

  const nav = useNavigation()
  const isLoading = nav.state === "loading"

  return <>
    <Header />
    {saveContext.savedJobs && <SavedJobs isOpen={saveContext.isSavedJobs} setIsOpen={saveContext.setIsSavedJobs}/>}


    {isLoading ?
      <div className={classes.loadingCont}>
        <Loading />
      </div> :
      <Outlet />
    }

  </>
}