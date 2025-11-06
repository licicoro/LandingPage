# Mi E-commerce App

Este es un proyecto de e-commerce desarrollado con React y TypeScript. La aplicación permite a los usuarios navegar por productos, agregarlos al carrito y realizar compras.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
mi-ecommerce-app
├── src
│   ├── components
│   │   ├── Header.tsx         # Componente de cabecera
│   │   ├── Footer.tsx         # Componente de pie de página
│   │   ├── ProductCard.tsx     # Componente para mostrar un producto
│   │   ├── ProductList.tsx     # Componente para listar productos
│   │   └── Cart.tsx            # Componente para mostrar el carrito
│   ├── pages
│   │   ├── Home.tsx            # Página principal
│   │   └── ProductPage.tsx     # Página de detalles del producto
│   ├── hooks
│   │   └── useCart.ts          # Hook personalizado para manejar el carrito
│   ├── context
│   │   └── CartContext.tsx     # Contexto para el estado del carrito
│   ├── styles
│   │   └── globals.css         # Estilos globales
│   ├── types
│   │   └── index.ts            # Tipos e interfaces
│   ├── App.tsx                 # Punto de entrada de la aplicación
│   └── index.tsx               # Renderiza el componente App
├── public
│   └── index.html              # Plantilla HTML principal
├── package.json                # Configuración de npm
├── tsconfig.json               # Configuración de TypeScript
├── vite.config.ts              # Configuración de Vite
└── README.md                   # Documentación del proyecto
```

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```
npm install
```

## Ejecución

Para iniciar la aplicación en modo de desarrollo, utiliza:

```
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.