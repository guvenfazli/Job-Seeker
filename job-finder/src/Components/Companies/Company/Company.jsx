import classes from "./companyList.module.css"

export default function CompanyCase({comp}){
  return (
    <div className={classes.companyImageCont}>
      <img src={comp.img}/>
    </div>
  )
}