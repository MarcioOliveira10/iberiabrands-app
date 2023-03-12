import SalesForm from '../project/SalesForm';
import styles from './Sales.module.css'
function Sales() {

    return (

        <div className={styles.sales_container}>

            <h1>Criar uma venda</h1>
            <p>Crie uma venda para futuramente adicionar a fatura. </p>
            <SalesForm btnText="Criar Venda" />
        </div>


    )
}

export default Sales;