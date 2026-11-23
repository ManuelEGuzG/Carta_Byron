# 🎉 Amigo Secreto para Byron Josué

Una aplicación web moderna, seria y profesional que funciona como la **respuesta del intercambio de amigo secreto** para Byron Josué. Incluye un mensaje de fe y respaldo con tono de "bro", y una sección competitiva de vacilón con clips de juegos (Free Fire y Clash Royale).

Construida con **React + TypeScript + Tailwind CSS + Framer Motion**.

---

## 🎯 ¿Qué Incluye?

✨ **Portada Elegante**
- Presentación cuidada explicando que tu papelito me tocó a mí
- Botón CTA fluido para acceder al mensaje

💌 **Mensaje de Fe y Respaldo (Tono "Bro")**
- Saludo cercano y auténtico
- Oración por tu hermano, amigos y por ti
- Lenguaje natural, firme y sin ser meloso
- Animaciones suaves de entrada

🎮 **Sección de Juegos y Vacilón**
- Clips de Free Fire y Clash Royale
- Tarjetas hermosas con títulos, etiquetas y frases de carrilla
- Grid responsivo (1 → 2 → 3 columnas)
- Fácil de personalizar con tus propias capturas

---

## 🚀 Stack Tecnológico

```json
{
  "frontend": "React 19 + TypeScript",
  "styling": "Tailwind CSS",
  "animations": "Framer Motion",
  "icons": "Lucide React",
  "build": "Vite",
  "package_manager": "npm"
}
```

---

## 📋 Instalación Local

### Requisitos
- Node.js 18+
- npm 9+

### Pasos

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en navegador
# → http://localhost:5173
```

### Build para Producción

```bash
npm run build

# Output: dist/ (listo para desplegar)
```

---

## 🌐 Deploy en Vercel

### Opción 1: Desde CLI

```bash
# Instalar Vercel CLI (si no la tienes)
npm install -g vercel

# Deploy desde la raíz del proyecto
vercel --prod
```

### Opción 2: Desde GitHub

1. Sube el proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio
4. Vercel detectará Vite automáticamente
5. ¡Click "Deploy"! ✨

---

## 📁 Estructura del Proyecto

```
src/
├── App.tsx                           Componente raíz con estado (cover/main)
├── components/
│   ├── CoverPage.tsx                 Portada elegante
│   ├── MainContent.tsx               Contenedor principal
│   ├── MessageCard.tsx               Tarjeta de mensaje/carta
│   ├── GamingSection.tsx             Sección de juegos (DATA EDITABLE ⭐)
│   └── GameCard.tsx                  Tarjeta individual de clip
├── index.css                         Tailwind + estilos globales
└── main.tsx                          Entry point
```

---

## 🎨 Paleta de Colores

| Uso | Color | Código |
|-----|-------|--------|
| Fondo principal | Oscuro profundo | `#0B0F19` |
| Superficie | Gris azulado | `#111827` / `#1E293B` |
| Texto principal | Claro | `#F8FAFC` |
| Texto secundario | Gris claro | `#CBD5E1` |
| Acento 1 (Dorado) | Ámbar/Oro | `#D97706` |
| Acento 2 (Azul) | Acero | `#38BDF8` |
| Bordes | Sutil | `slate-700/50` |

---

## 🎯 Flujo de la Aplicación

### 1️⃣ Portada
```
┌─────────────────────┐
│   Amigo Secreto     │
│   Para Byron Josué  │
│                     │
│  Explicación cálida │
│                     │
│ [Abrir mensaje]     │
└─────────────────────┘
```

### 2️⃣ Mensaje
```
┌──────────────────────────────────┐
│ Qué tal, bro,                    │
│                                  │
│ Leí tu petición...               │
│                                  │
│ Por tu hermano                   │
│ Por tus amigos y amigas          │
│ Por ti                           │
│                                  │
│ Firma con apoyo                  │
└──────────────────────────────────┘
```

### 3️⃣ Juegos (Free Fire + Clash Royale)
```
┌──────────┬──────────┬──────────┐
│ Clip 1   │ Clip 2   │ Clip 3   │
├──────────┼──────────┼──────────┤
│ Clip 4   │ Clip 5   │ Clip 6   │
└──────────┴──────────┴──────────┘
```

---

## ✏️ Personalización

### 🎮 Cambiar Clips de Juegos (MÁS IMPORTANTE)

Edita **`src/components/GamingSection.tsx`** y busca:

```tsx
const GAMES_DATA: Game[] = [
  {
    id: 'freefire',
    name: 'Free Fire',
    subtitle: 'Sin excusas.',
    icon: Flame,
    clips: [
      {
        id: 'ff1',
        title: 'Headshot de precisión',    // ← CAMBIAR
        tag: 'Le gané',                     // ← CAMBIAR (ej: "Acarreado", "Torre abajo")
        roast: 'Viste eso? Así se siente ganar, bro.',  // ← CAMBIAR
        imageUrl: 'https://images.unsplash.com/photo-...', // ← CAMBIAR POR TU URL
      },
      // ... más clips
    ]
  },
  // Clash Royale similar
]
```

**Pasos para personalizar:**

1. **Reemplazar imagen**: Usa una URL de tu captura o Unsplash
2. **Cambiar título**: Describe la jugada
3. **Cambiar tag**: Etiqueta corta (ej: "Le gané", "Acarreado", "Lo saqué del apuro")
4. **Cambiar roast**: Frase de vacilón/carrilla corta y jocosa

### 💌 Cambiar Mensaje

Edita **`src/components/MessageCard.tsx`**:

```tsx
// Busca estas secciones y personaliza:
<motion.p>Qué tal, bro,</motion.p>
<motion.p>Leí tu petición y de verdad me llegó...</motion.p>
// ... etc
```

### 🎨 Cambiar Colores

Edita **`tailwind.config.js`**:

```js
theme: {
  extend: {
    colors: {
      'dark-bg': '#0B0F19',      // Fondo
      'dark-surface': '#111827',  // Contenedores
      'accent-amber': '#D97706',  // Dorado
      'accent-blue': '#38BDF8',   // Azul
    }
  }
}
```

---

## 🔧 Comandos Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo (http://localhost:5173)
npm run build    # Compila para producción
npm run preview  # Previsualiza la build
```

---

## 📱 Responsividad

| Pantalla | Columnas | Estado |
|----------|----------|--------|
| Móvil (<768px) | 1 | ✅ |
| Tablet (768-1024px) | 2 | ✅ |
| Desktop (>1024px) | 3 | ✅ |

---

## 🎓 Stack Usado

- **React 19**: Librería de UI
- **TypeScript**: Tipado estricto
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animaciones suaves
- **Lucide React**: Iconos modernos
- **Vite**: Build tool rápido
- **npm**: Package manager

---

## 📝 Notas

- Componentes totalmente tipados en TypeScript
- Cero CSS custom - todo con Tailwind
- Animaciones automáticas con Framer Motion
- Data en arrays - fácil de modificar sin tocar lógica
- 100% responsivo y optimizado para mobile

---

## 🐛 Troubleshooting

**Servidor no inicia:**
```bash
rm -rf node_modules .vite
npm install
npm run dev
```

**Cambios no se ven:**
```bash
# Hard refresh del navegador
Ctrl+Shift+R (Windows) o Cmd+Shift+R (Mac)
```

---

## 📄 Licencia

Uso personal. Modifica libremente para tus necesidades.

---

**Versión**: 1.0 Rediseño Completo  
**Estado**: ✅ Listo para Vercel

*Hecho con ❤️ usando React, TypeScript y Tailwind CSS.*
