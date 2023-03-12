
import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton';

function Home() {

    return (
        <section className={styles.home_container}>
            <h1>Bem vindo a <span> Iberiabrands</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to="/Sales" text="Criar Venda" />

        </section>


    )
}

export default Home;