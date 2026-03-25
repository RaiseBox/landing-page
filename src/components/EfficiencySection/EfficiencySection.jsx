import styles from './EfficiencySection.module.css'
import { assets } from '../../assets/figmaAssets'

const CARDS = [
  {
    icon: assets.iconDocs,
    title: 'Control Documental Centralizado',
    desc: 'Accede a una fuente única de verdad para todos los planos y especificaciones. Evita el uso de planos obsoletos en terreno.',
  },
  {
    icon: assets.iconClock,
    title: 'Seguimiento de RDI en Tiempo Real',
    desc: 'Convierte consultas en respuestas rápidamente. Automatiza recordatorios y resuelve conflictos antes de que afecten tu presupuesto.',
  },
  {
    icon: assets.iconChart,
    title: 'Analítica de Proyecto Inteligente',
    desc: 'Identifica cuellos de botella con reportes de alto nivel. Visualiza tendencias de progreso y predice retrasos potenciales.',
  },
]

export default function EfficiencySection() {
  return (
    <section className={styles.section} id="features">
      <div className="container">
        <div className={styles.box}>

          <div className={styles.header}>
            <p className={styles.eyebrow}>Cómo ayuda a tu proyecto</p>
            <h2 className={styles.title}>Eficiencia en cada etapa de la obra</h2>
            <p className={styles.subtitle}>
              Nuestras herramientas están diseñadas para eliminar la fricción administrativa
              y potenciar la productividad de tus equipos.
            </p>
          </div>

          <div className={styles.cards}>
            {CARDS.map((card) => (
              <div className={styles.card} key={card.title}>
                <div className={styles.cardIcon}>
                  <img src={card.icon} alt={card.title} />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
