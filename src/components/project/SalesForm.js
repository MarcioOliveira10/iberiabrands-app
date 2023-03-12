import styles from './SalesForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function SalesForm({ btnText }) {
    return (
        <form className={styles.form}>
            <Input type="text"
                text="Nome do cliente"
                name="name"
                placeholder="Insira o nome do cliente"
            />
            <Select name="vendedor_id" text="Selecione o vendedor"
            />

            <Select name="representada_id" text="Selecione a representada" />

            <Input type="number"
                text="Valor da venda"
                placeholder="Insira o valor da venda" />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default SalesForm