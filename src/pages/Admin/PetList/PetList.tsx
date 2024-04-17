import { Sidebar } from '../../../components/common/Sidebar'
import styles from './PetList.module.css'

export function PetList(){
    return(
        <div className={styles.container}>
            <Sidebar></Sidebar>
        </div>
    )
}