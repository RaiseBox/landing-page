import styles from './Footer.module.css'

const LINKS = {
  Plataforma: ['Características', 'Integraciones', 'App Móvil', 'Seguridad'],
  Compañía:   ['Sobre Nosotros', 'Carreras', 'Blog', 'Prensa'],
  Soporte:    ['Centro de Ayuda', 'Documentación API', 'Comunidad', 'Contacto'],
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">

        <div className={styles.grid}>
          {/* Brand column */}
          <div>
            <a href="#hero" className={styles.brand}>
              <div className={styles.brandIcon}>
                <svg viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L3 9h18L12 2z"/>
                  <path d="M9 20v-7h6v7" strokeWidth="1.5" stroke="white" fill="none"/>
                </svg>
              </div>
              <span className={styles.brandName}>RaiseBox</span>
            </a>
            <p className={styles.tagline}>
              La forma más inteligente de gestionar documentos de construcción y RDIs.
              Construido para la fiabilidad, diseñado para la velocidad.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" className={`${styles.socialLink} ${styles.socialX}`} aria-label="X / Twitter">
                𝕏
              </a>
              <a href="#" className={styles.socialLink} aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h4 className={styles.colTitle}>{heading}</h4>
              <nav className={styles.links}>
                {items.map((item) => (
                  <a key={item} href="#">{item}</a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © 2024 RaiseBox Technologies Inc. Todos los derechos reservados.
          </p>
          <div className={styles.legal}>
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos de Servicio</a>
            <a href="#">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
