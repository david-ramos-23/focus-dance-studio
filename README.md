# 💃 Focus Dance Studio

<div align="center">

![Focus Dance Studio](https://img.shields.io/badge/Focus-Dance%20Studio-FF1493?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=for-the-badge&logo=vite)

**Aplicación web moderna para la gestión y promoción de clases de baile**

[Demo en Vivo](https://focus-dance-studio.vercel.app) · [Reportar Bug](https://github.com/david-ramos-23/focus-dance-studio/issues) · [Solicitar Feature](https://github.com/david-ramos-23/focus-dance-studio/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Despliegue](#-despliegue)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🎯 Acerca del Proyecto

Focus Dance Studio es una aplicación web moderna y elegante diseñada para estudios de baile. Ofrece una experiencia de usuario premium con diseño responsivo, animaciones fluidas y un chatbot integrado con IA para atención al cliente.

### ✨ Características Principales

- 🎨 **Diseño Premium**: Interfaz moderna con efectos de glassmorphism y animaciones suaves
- 📱 **Totalmente Responsivo**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- 🤖 **Chatbot con IA**: Asistente virtual integrado con Google Gemini para atención 24/7
- 📅 **Sistema de Horarios**: Visualización clara de clases y horarios
- 👥 **Perfiles de Instructores**: Presentación profesional del equipo de profesores
- 💰 **Planes de Precios**: Información transparente de membresías y paquetes
- 📞 **Formulario de Contacto**: Sistema de contacto integrado
- ⚡ **Rendimiento Optimizado**: Carga rápida y experiencia fluida

---

## 🛠️ Tecnologías

### Frontend
- **React 18.3.1** - Biblioteca de UI
- **TypeScript 5.6.2** - Tipado estático
- **Vite 6.0.5** - Build tool y dev server

### Estilizado
- **CSS Modules** - Estilos encapsulados
- **Vanilla CSS** - Control total del diseño
- **Glassmorphism** - Efectos visuales modernos

### IA & APIs
- **Google Gemini AI** - Chatbot inteligente
- **Generative AI SDK** - Integración con modelos de IA

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **Git** - Control de versiones
- **GitHub** - Hosting del repositorio

---

## 🚀 Instalación

### Requisitos Previos

- **Node.js** (v18 o superior)
- **npm** o **yarn**
- **Git**

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/david-ramos-23/focus-dance-studio.git
   cd focus-dance-studio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crea un archivo `.env.local` en la raíz del proyecto:
   ```env
   VITE_GEMINI_API_KEY=tu_api_key_aqui
   ```

   > 💡 **Obtener API Key de Gemini**: Visita [Google AI Studio](https://makersuite.google.com/app/apikey)

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:5173`

---

## 💻 Uso

### Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Genera el build de producción
npm run preview      # Preview del build de producción

# Linting
npm run lint         # Ejecuta ESLint
```

### Configuración del Chatbot

El chatbot está configurado para responder preguntas sobre:
- Horarios de clases
- Información de instructores
- Planes de precios
- Ubicación del estudio
- Servicios disponibles

Puedes personalizar las respuestas editando el archivo `components/ChatBot.tsx`.

---

## 📁 Estructura del Proyecto

```
focus-dance-studio/
├── components/           # Componentes React
│   ├── ChatBot.tsx      # Chatbot con IA
│   ├── Classes.tsx      # Sección de clases
│   ├── Contact.tsx      # Formulario de contacto
│   ├── Hero.tsx         # Hero section
│   ├── Instructors.tsx  # Perfiles de instructores
│   ├── LiquidChrome.tsx # Efectos visuales
│   ├── Navbar.tsx       # Barra de navegación
│   ├── Pricing.tsx      # Planes de precios
│   └── Schedule.tsx     # Horarios
├── App.tsx              # Componente principal
├── constants.ts         # Datos y configuración
├── types.ts             # Definiciones de tipos
├── index.tsx            # Punto de entrada
├── index.html           # HTML principal
├── vite.config.ts       # Configuración de Vite
├── tsconfig.json        # Configuración de TypeScript
├── package.json         # Dependencias
└── README.md            # Este archivo
```

---

## 🌐 Despliegue

### Vercel (Recomendado)

1. **Instalar Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Desplegar**
   ```bash
   vercel
   ```

3. **Configurar variables de entorno** en el dashboard de Vercel:
   - `VITE_GEMINI_API_KEY`

### Netlify

1. **Conectar el repositorio** en [Netlify](https://netlify.com)
2. **Configurar build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Agregar variables de entorno** en Site settings

### GitHub Pages

```bash
npm run build
# Subir la carpeta dist/ a la rama gh-pages
```

---

## 🤝 Contribuir

Las contribuciones son bienvenidas y apreciadas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica increíble'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guía de Estilo

- Usa TypeScript para todo el código
- Sigue las convenciones de React Hooks
- Escribe código limpio y bien comentado
- Asegúrate de que el linting pase (`npm run lint`)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 📧 Contacto

**David Ramos**
- GitHub: [@david-ramos-23](https://github.com/david-ramos-23)
- Email: tu-email@ejemplo.com

**Focus Dance Studio**
- Website: [focus-dance-studio.vercel.app](https://focus-dance-studio.vercel.app)
- Instagram: [@focusdancestudio](https://instagram.com/focusdancestudio)

---

<div align="center">

**Hecho con ❤️ para la comunidad de baile**

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

</div>
