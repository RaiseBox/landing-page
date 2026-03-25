import styles from './CTASection.module.css'

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.glowTR} />
          <div className={styles.glowBL} />

          <h2 className={styles.title}>¿Listo para transformar tu flujo de trabajo?</h2>
          <p className={styles.subtitle}>
            Únete a los profesionales de la construcción que ahorran hasta 15<br />
            horas semanales en la gestión de documentos.
          </p>

          <div className={styles.buttons}>
            <button className={styles.btnPrimary}>Empezar ahora</button>
            <button className={styles.btnSecondary}>Contactar Ventas</button>
          </div>

          <p className={styles.fine}>
            Sin tarjeta de crédito &nbsp;•&nbsp; 14 días de prueba &nbsp;•&nbsp; Cancela cuando quieras
          </p>
        </div>
      </div>
    </section>
  )
}
