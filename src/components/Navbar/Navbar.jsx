import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.inner}>

          {/* Brand */}
          <a href="#hero" className={styles.brand}>
            <div className={styles.brandIcon}>
              <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 9l1.5 11h15L21 9z" opacity="0.3"/>
                <path d="M12 2L3 9h18L12 2z"/>
                <path d="M9 20v-6h6v6" strokeWidth="1.5" stroke="white" fill="none"/>
              </svg>
            </div>
            <span className={styles.brandName}>RaiseBox</span>
          </a>

          {/* Nav Links */}
          <div className={styles.navLinks}>
            <a href="#hero">INICIO</a>
            <a href="#why">¿POR QUÉ?</a>
            <a href="#features">SOLUCIONES</a>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <button className={styles.btnGhost}>Ingresar</button>
            <button className={styles.btnPrimary}>Solicitar Demo</button>
          </div>

        </div>
      </div>
    </nav>
  )
}
