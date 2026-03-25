import styles from './InfoSection.module.css'

export default function InfoSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          Información centralizada para proyectos reales
        </h2>
        <p className={styles.text}>
          Sabemos que en la construcción el cambio es la única constante. Raisebox resuelve el
          problema de los cambios de información recurrentes y los riesgos de retrabajo, asegurando
          que todos los involucrados trabajen siempre con la versión más reciente y aprobada.
        </p>
      </div>
    </section>
  )
}
