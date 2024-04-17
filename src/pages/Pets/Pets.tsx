import { Link } from "react-router-dom";
import { Header } from "../../components/common/Header/Header";
import { Grid } from "../../components/layout/Grid";
import styles from './Pets.module.css'
import { TextArea } from "../../components/common/TextArea";


export function Pets(){
    return(
        <Grid>
            <div className={styles.container}>

            <Header />
            <Link to='/pets/20'>vai dar erro</Link>
            <Grid children={TextArea()}/>
            </div>

        </Grid>
    )
}