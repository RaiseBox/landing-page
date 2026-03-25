import styles from './Hero.module.css'
import { assets } from '../../assets/figmaAssets'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <div className={styles.grid}>

          {/* ── Left column ── */}
          <div>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span className={styles.badgeText}>Nuevo: Análisis Avanzado de RDI</span>
            </div>

            <h1 className={styles.title}>
              Control total de<br />
              documentos y<br />
              RDI
            </h1>

            <p className={styles.subtitle}>
              RaiseBox es la plataforma en la nube diseñada para centralizar planos y RDIs,
              optimizando la coordinación de tus equipos y reduciendo drásticamente los errores en obra.
            </p>

            <div className={styles.buttons}>
              <button className={styles.btnPrimary}>Empezar ahora</button>
              <button className={styles.btnSecondary}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#334155" strokeWidth="1.5" />
                  <path d="M10 8l6 4-6 4V8z" fill="#334155" />
                </svg>
                Ver Video
              </button>
            </div>

            <div className={styles.socialProof}>
              <div className={styles.avatars}>
                <img className={styles.avatar} src={assets.avatarA} alt="usuario" />
                <img className={styles.avatar} src={assets.avatarB} alt="usuario" />
                <img className={styles.avatar} src={assets.avatarC} alt="usuario" />
              </div>
              <p className={styles.socialText}>
                <strong>500+</strong>
                <span> equipos construyendo mejor</span>
              </p>
            </div>
          </div>

          {/* ── Right column – Dashboard Mockup ── */}
          <div className={styles.visual}>
            <div className={styles.glow} />
            <div className={styles.mockup}>
              <div className={styles.mockupInner}>

                {/* Sidebar */}
                <div className={styles.mockupSidebar}>
                  <div className={`${styles.sidebarItem} ${styles.sidebarActive}`} />
                  <div className={`${styles.sidebarItem} ${styles.sidebarInactive}`} />
                  <div className={`${styles.sidebarItem} ${styles.sidebarInactive}`} />
                </div>

                {/* Main content */}
                <div className={styles.mockupMain}>
                  <div className={styles.topbar}>
                    <div className={styles.topbarTitle} />
                    <div className={styles.topbarAvatar} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.cards}>
                      <div className={styles.card}>
                        <div className={styles.cardLabel} />
                        <div className={styles.cardValueGreen} />
                      </div>
                      <div className={styles.card}>
                        <div className={styles.cardLabel} />
                        <div className={styles.cardValueYellow} />
                      </div>
                    </div>
                    <div className={styles.chart}>
                      <div className={styles.chartHeader}>
                        <div className={styles.chartTitle} />
                        <div className={styles.chartFilter} />
                      </div>
                      <div className={styles.chartBars}>
                        <div className={styles.bar} style={{ height: '44%', background: 'rgba(0,168,150,0.2)' }} />
                        <div className={styles.bar} style={{ height: '66%', background: 'rgba(0,168,150,0.2)' }} />
                        <div className={styles.bar} style={{ height: '99%', background: 'rgba(0,168,150,0.4)' }} />
                        <div className={styles.bar} style={{ height: '55%', background: 'rgba(0,168,150,0.2)' }} />
                        <div className={styles.bar} style={{ height: '77%', background: 'rgba(0,168,150,0.6)' }} />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
