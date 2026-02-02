# 🚀 Guía de Despliegue en Vercel - Focus Dance Studio

## Requisitos Previos
- ✅ Cuenta en Vercel (https://vercel.com)
- ✅ Vercel CLI instalado (`npm install -g vercel`)
- ✅ Repositorio en GitHub configurado

## Proceso de Despliegue

### Opción 1: Despliegue desde CLI (Recomendado)

#### 1. Autenticación
```bash
vercel login
```
- Visita la URL que aparece en la terminal
- Inicia sesión con tu cuenta de Vercel
- Autoriza el acceso
- Presiona ENTER en la terminal

#### 2. Primer Despliegue
```bash
vercel
```
Responde las preguntas:
- **Set up and deploy?** → Yes
- **Which scope?** → Selecciona tu cuenta
- **Link to existing project?** → No
- **What's your project's name?** → focus-dance-studio (o presiona ENTER)
- **In which directory is your code located?** → ./ (presiona ENTER)
- **Want to override the settings?** → No

#### 3. Configurar Variables de Entorno
```bash
vercel env add VITE_GEMINI_API_KEY
```
- Selecciona: **Production**, **Preview**, **Development**
- Pega tu API key de Gemini

#### 4. Despliegue a Producción
```bash
vercel --prod
```

### Opción 2: Despliegue desde Dashboard de Vercel

#### 1. Conectar Repositorio
1. Ve a https://vercel.com/new
2. Selecciona "Import Git Repository"
3. Conecta tu cuenta de GitHub
4. Selecciona el repositorio `focus-dance-studio`

#### 2. Configurar Proyecto
- **Framework Preset**: Vite
- **Root Directory**: ./
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### 3. Variables de Entorno
En "Environment Variables", agrega:
- **Name**: `VITE_GEMINI_API_KEY`
- **Value**: Tu API key de Gemini
- **Environments**: Production, Preview, Development

#### 4. Deploy
Haz clic en "Deploy" y espera a que termine el proceso.

## Configuración Post-Despliegue

### Dominio Personalizado (Opcional)
1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Configura los DNS según las instrucciones

### Configuración de Build
El archivo `vercel.json` ya está configurado con:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite"
}
```

### Variables de Entorno Necesarias
- `VITE_GEMINI_API_KEY`: API key de Google Gemini para el chatbot

## Comandos Útiles

```bash
# Ver lista de proyectos
vercel list

# Ver información del proyecto
vercel inspect

# Ver logs en tiempo real
vercel logs

# Eliminar un despliegue
vercel remove [deployment-url]

# Ver dominios
vercel domains

# Agregar variable de entorno
vercel env add [VARIABLE_NAME]

# Listar variables de entorno
vercel env ls

# Desplegar a preview
vercel

# Desplegar a producción
vercel --prod
```

## Integración Continua (CI/CD)

Vercel automáticamente:
- ✅ Despliega cada push a la rama principal (producción)
- ✅ Crea preview deployments para cada PR
- ✅ Ejecuta builds en cada commit
- ✅ Proporciona URLs únicas para cada despliegue

## URLs del Proyecto

Después del despliegue, tendrás:
- **Producción**: `https://focus-dance-studio.vercel.app`
- **Preview**: URLs únicas para cada rama/PR
- **Dashboard**: `https://vercel.com/[tu-usuario]/focus-dance-studio`

## Troubleshooting

### Error: Build Failed
- Verifica que todas las dependencias estén en `package.json`
- Asegúrate de que `npm run build` funcione localmente
- Revisa los logs en Vercel Dashboard

### Error: Environment Variables
- Verifica que `VITE_GEMINI_API_KEY` esté configurada
- Las variables deben tener el prefijo `VITE_` para ser accesibles en el frontend
- Redeploy después de agregar variables

### Error: 404 en Rutas
- Vercel maneja automáticamente el routing de SPAs
- Si usas React Router, no necesitas configuración adicional

### Build Timeout
- Vercel tiene un límite de 45 minutos para builds
- Si tu build es muy lento, optimiza las dependencias

## Monitoreo y Analytics

### Vercel Analytics (Opcional)
1. Ve a tu proyecto en Vercel
2. Analytics → Enable
3. Agrega el script a tu aplicación (ya incluido en Vite)

### Performance Monitoring
- Vercel proporciona métricas automáticas de:
  - Core Web Vitals
  - Tiempo de carga
  - Errores de runtime
  - Uso de ancho de banda

## Costos

### Plan Hobby (Gratis)
- ✅ Despliegues ilimitados
- ✅ 100 GB de ancho de banda/mes
- ✅ Certificados SSL automáticos
- ✅ Preview deployments
- ✅ Analytics básico

### Plan Pro ($20/mes)
- Todo lo del plan Hobby
- 1 TB de ancho de banda
- Más tiempo de build
- Soporte prioritario
- Analytics avanzado

## Recursos Adicionales

- 📚 [Documentación de Vercel](https://vercel.com/docs)
- 🎥 [Guía de Vite en Vercel](https://vercel.com/docs/frameworks/vite)
- 💬 [Comunidad de Vercel](https://github.com/vercel/vercel/discussions)
- 🐛 [Reportar Issues](https://github.com/vercel/vercel/issues)

## Contacto y Soporte

- **Vercel Support**: support@vercel.com
- **Status Page**: https://vercel-status.com
- **Twitter**: @vercel

---

**Última actualización**: 2026-02-02
**Versión**: 1.0.0
