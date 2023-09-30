import styles from './styles.module.css';

const  DocsIdPage = ({ params }) => {
    return <div className={styles.title}>Id {params.id}</div>
}

export default DocsIdPage