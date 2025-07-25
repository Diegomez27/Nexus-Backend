# Sistema Punto de Venta (POS) - API

Sistema de punto de venta desarrollado con NestJS, TypeORM y PostgreSQL.

## Características

- **Autenticación y autorización** con JWT
- **Roles de usuario**: Admin y Cajero
- **Gestión de productos** con stock
- **Sistema de ventas** con validación de inventario
- **Reportes básicos** de ventas
- **API RESTful** con documentación

## Instalación

1. Clonar el proyecto
```bash
git clone <repository-url>
cd Sistema-POS-API
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno
```bash
cp .env.template .env
# Editar .env con tus configuraciones
```

4. Levantar la base de datos
```bash
docker compose up -d
```

5. Iniciar la aplicación
```bash
npm run start:dev
```

6. Ejecutar seed para datos iniciales
```bash
curl http://localhost:3000/api/seed
```

## Endpoints Principales

### Autenticación
- `POST /auth/register` - Registrar usuario
- `POST /auth/login` - Iniciar sesión
- `GET /auth/check-status` - Verificar estado

### Productos
- `GET /products` - Listar productos
- `POST /products` - Crear producto (solo admin)
- `PATCH /products/:id` - Actualizar producto (solo admin)
- `DELETE /products/:id` - Eliminar producto (solo admin)

### Ventas
- `POST /sales` - Registrar venta
- `GET /sales` - Historial de ventas (solo admin)
- `GET /sales/:id` - Detalle de venta (solo admin)

## Roles de Usuario

- **Admin**: Acceso completo al sistema
- **Cajero**: Solo puede consultar productos y registrar ventas
