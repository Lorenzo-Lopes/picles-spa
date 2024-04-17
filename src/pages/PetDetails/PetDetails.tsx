import { Header } from "../../components/common/Header/Header";
import { Sidebar } from "../../components/common/Sidebar";
import { Grid } from "../../components/layout/Grid";
import styles from './PetDetails.module.css'

export function PetDetails(){
    return(
        <Grid>
            <div className={styles.container}>

            <Header showReturn={true} />
            <Sidebar></Sidebar>
            
            </div>
        </Grid>
    )
}