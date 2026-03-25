import styles from './WhySection.module.css'
import { assets } from '../../assets/figmaAssets'

const FEATURES = [
  {
    icon: assets.iconCloud,
    title: 'Centralización en la nube',
    desc: 'Todo el proyecto accesible desde cualquier lugar y dispositivo, eliminando silos de información de forma instantánea.',
  },
  {
    icon: assets.iconVersion,
    title: 'Control de versiones',
    desc: 'Garantiza que cada miembro del equipo trabaje con el plano más reciente, evitando errores costosos y retrabajos.',
  },
  {
    icon: assets.iconRDI,
    title: 'Gestión de RDI',
    desc: 'Digitaliza y acelera las solicitudes de información, manteniendo un registro auditable e impecable para auditorías.',
  },
  {
    icon: assets.iconFlow,
    title: 'Flujos de revisión',
    desc: 'Automatiza las aprobaciones con flujos de trabajo personalizados que cumplen estrictamente con tus estándares corporativos.',
  },
  {
    icon: assets.iconLock,
    title: 'Acceso seguro',
    desc: 'Protege tu propiedad intelectual con roles y permisos granulares de alta seguridad para cada nivel de usuario.',
  },
]

export default function WhySection() {
  return (
    <section className={styles.section} id="why">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Diferenciales de Élite</p>
          <h2 className={styles.title}>¿POR QUÉ RAISEBOX?</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <div className={styles.card} key={feature.title}>
              <div className={styles.iconWrap}>
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
