# RaiseBox Landing Page

Landing page one-page generada desde Figma, construida con **React + Vite + CSS Modules**.

## Stack

- React 18
- Vite 5
- CSS Modules (sin dependencias de CSS externas)
- Fuente: Inter (Google Fonts)

## Estructura

```
src/
├── main.jsx                  # Entry point
├── App.jsx                   # Composición de secciones
├── index.css                 # Reset, tokens CSS globales y .container
├── assets/
│   └── figmaAssets.js        # URLs de imágenes exportadas desde Figma
└── components/
    ├── Navbar/
    ├── Hero/
    ├── InfoSection/
    ├── WhySection/
    ├── EfficiencySection/
    ├── MVSection/
    ├── CTASection/
    └── Footer/
```

## Cómo correr

```bash
npm install
npm run dev
```

## Notas

- Las URLs en `src/assets/figmaAssets.js` son válidas ~7 días desde la exportación de Figma.
  Reemplazalas con los assets finales (guardados en `/src/assets/`) antes de ir a producción.
- Los colores y tokens de diseño están centralizados como variables CSS en `src/index.css`.
