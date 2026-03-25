import styles from './MVSection.module.css'
import { assets } from '../../assets/figmaAssets'

const CARDS = [
  {
    icon: assets.iconMission,
    title: 'Nuestra Misión',
    text: 'Proveer las herramientas de control documental más avanzadas y eficientes para la industria de la construcción, permitiendo que ingenieros y arquitectos se enfoquen en lo que realmente importa: construir el futuro con precisión.',
  },
  {
    icon: assets.iconVision,
    title: 'Nuestra Visión',
    text: 'Ser el estándar global de la industria en gestión de proyectos y eficiencia operativa, transformando la forma en que los equipos colaboran y eliminando por completo la incertidumbre documental en las obras de gran escala.',
  },
]

export default function MVSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {CARDS.map((card) => (
            <div className={styles.card} key={card.title}>
              <div className={styles.cardBg} />
              <div className={styles.iconWrap}>
                <img src={card.icon} alt={card.title} />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
