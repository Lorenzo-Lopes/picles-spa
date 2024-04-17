import { Link } from 'react-router-dom'
import styles from './Sidebar.module.css'
export function Sidebar(){
    return(
        <div className={styles.sidebar}>
            <Link to='/admin'><a href="#">Meu Abrigo</a></Link>
            <Link to='/admin/petlist'><a>Pets</a></Link>
            <Link to='/'>Sair</Link>

        </div>
    )
}