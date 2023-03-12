import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
import Container from "./Container";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Charges">Cobranças</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Customers">Clientes</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Sales">Vendas</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Users">Utilizadores</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Represented">Representadas</Link>
                    </li>
                </ul>
            </Container>
        </nav>


    )
}


export default Navbar