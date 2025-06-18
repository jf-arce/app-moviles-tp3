# Recipe Finder App

## Descripción del Proyecto

**Recipe Finder** es una aplicación móvil desarrollada como proyecto académico para la asignatura de Aplicaciones Móviles. La aplicación permite a los usuarios buscar, visualizar y gestionar recetas de cocina mediante la integración con una API externa.

### Funcionalidades Implementadas

- **Búsqueda de Recetas**: Sistema de búsqueda por nombre de recetas
- **Gestión de Favoritos**: Almacenamiento local de recetas favoritas
- **Gestión de Ingredientes**: CRUD completo para listas de ingredientes personalizadas
- **Navegación por Pestañas**: Interfaz de usuario intuitiva con navegación tabular
- **Detalles de Recetas**: Visualización completa de ingredientes e instrucciones

### Arquitectura Técnica

La aplicación sigue el patrón de arquitectura de componentes de React Native, implementando:
- Gestión de estado global mediante Context API
- Navegación basada en archivos con Expo Router
- Persistencia de datos local con AsyncStorage
- Integración REST con API externa

## Tecnologías y Librerías Utilizadas

### Framework Principal
- **React Native 0.79.3** - Framework de desarrollo móvil multiplataforma
- **Expo SDK 53** - Plataforma de desarrollo y herramientas

### Navegación y UI
- **Expo Router 5.0.7** - Sistema de navegación declarativo
- **React Navigation 7** - Navegación entre pantallas
- **@expo/vector-icons** - Biblioteca de iconos

### Gestión de Datos
- **Axios 1.9.0** - Cliente HTTP para comunicación con API
- **AsyncStorage 2.1.2** - Almacenamiento persistente local
- **Expo Secure Store** - Almacenamiento seguro de datos sensibles

### Desarrollo
- **TypeScript 5.8.3** - Tipado estático para mayor robustez
- **ESLint** - Análisis estático de código

## Instrucciones de Instalación y Ejecución

### Requisitos del Sistema
- Node.js versión 18 o superior
- npm o yarn como gestor de paquetes
- Expo CLI instalado globalmente
- Dispositivo móvil con Expo Go o emulador configurado

### Proceso de Instalación

1. **Clonación del repositorio**
   ```bash
   git clone https://github.com/jf-arce/app-moviles-tp3.git .
   
   ```

2. **Instalación de dependencias**
   ```bash
   npm install
   ```

3. **Ejecución del proyecto**
   ```bash
   npm start
   ```

### Comandos de Desarrollo

- `npm start` - Inicia el servidor de desarrollo Expo
- `npm run android` - Ejecuta la aplicación en emulador Android
- `npm run ios` - Ejecuta la aplicación en simulador iOS
- `npm run web` - Ejecuta la aplicación en navegador web
- `npm run lint` - Ejecuta análisis estático del código


```

### Consideraciones Técnicas

- La aplicación requiere conexión a internet para funcionar correctamente
- Se utiliza la API pública de TheMealDB para obtener datos de recetas
- El almacenamiento local se realiza mediante AsyncStorage para persistencia de datos
- La aplicación es compatible con iOS y Android

---

**Proyecto desarrollado para la asignatura de Aplicaciones Móviles**