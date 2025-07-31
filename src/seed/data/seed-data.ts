import * as bcrypt from 'bcrypt';

interface SeedProduct {
    nombre: string;
    precio: number;
    stock: number;
    categoria: string;
}

interface SeedUser {
    email: string;
    fullName: string;
    password: string;
    roles: string[];
}

interface SeedData {
    users: SeedUser[];
    products: SeedProduct[];
}

export const initialData: SeedData = {
    users: [
        {
            email: 'admin@pos.com',
            fullName: 'Administrador POS',
            password: bcrypt.hashSync('Admin123', 10),
            roles: ['admin']
        },
        {
            email: 'cajero1@pos.com',
            fullName: 'Cajero Uno',
            password: bcrypt.hashSync('Cajero123', 10),
            roles: ['cajero']
        },
        {
            email: 'cajero2@pos.com',
            fullName: 'Cajero Dos',
            password: bcrypt.hashSync('Cajero123', 10),
            roles: ['cajero']
        },
    ],

    products: [
        {
            nombre: "Coca Cola 500ml",
            precio: 2.50,
            stock: 100,
            categoria: "Bebidas"
        },
        {
            nombre: "Pan Integral",
            precio: 1.20,
            stock: 50,
            categoria: "Panadería"
        },
        {
            nombre: "Leche Entera 1L",
            precio: 3.00,
            stock: 30,
            categoria: "Lácteos"
        },
        {
            nombre: "Arroz 1kg",
            precio: 4.50,
            stock: 25,
            categoria: "Granos"
        },
        {
            nombre: "Jabón de Manos",
            precio: 2.80,
            stock: 40,
            categoria: "Higiene"
        },
        {
            nombre: "Papel Higiénico 4 rollos",
            precio: 5.20,
            stock: 35,
            categoria: "Higiene"
        },
        {
            nombre: "Huevos Docena",
            precio: 3.80,
            stock: 20,
            categoria: "Proteínas"
        },
        {
            nombre: "Café Molido 250g",
            precio: 8.90,
            stock: 15,
            categoria: "Bebidas"
        },
        {
            nombre: "Galletas Oreo",
            precio: 2.20,
            stock: 60,
            categoria: "Snacks"
        },
        {
            nombre: "Shampoo 400ml",
            precio: 7.50,
            stock: 25,
            categoria: "Higiene"
        },
        {
            nombre: "Queso Manchego 200g",
            precio: 6.50,
            stock: 18,
            categoria: "Lácteos"
        },
        {
            nombre: "Mantequilla 90g",
            precio: 2.10,
            stock: 22,
            categoria: "Lácteos"
        },
        {
            nombre: "Azúcar 1kg",
            precio: 2.80,
            stock: 40,
            categoria: "Granos"
        },
        {
            nombre: "Sal 1kg",
            precio: 1.10,
            stock: 35,
            categoria: "Granos"
        },
        {
            nombre: "Aceite Vegetal 900ml",
            precio: 4.20,
            stock: 28,
            categoria: "Despensa"
        },
        {
            nombre: "Atún en Agua",
            precio: 2.60,
            stock: 30,
            categoria: "Enlatados"
        },
        {
            nombre: "Frijoles Negros 900g",
            precio: 3.40,
            stock: 25,
            categoria: "Granos"
        },
        {
            nombre: "Sopa de Pasta",
            precio: 1.00,
            stock: 50,
            categoria: "Despensa"
        },
        {
            nombre: "Mayonesa 400g",
            precio: 3.90,
            stock: 20,
            categoria: "Despensa"
        },
        {
            nombre: "Kétchup 350g",
            precio: 2.70,
            stock: 18,
            categoria: "Despensa"
        },
        {
            nombre: "Cereal de Maíz 500g",
            precio: 5.60,
            stock: 15,
            categoria: "Desayuno"
        },
        {
            nombre: "Yogur Natural 1L",
            precio: 4.80,
            stock: 17,
            categoria: "Lácteos"
        },
        {
            nombre: "Jugo de Naranja 1L",
            precio: 3.50,
            stock: 20,
            categoria: "Bebidas"
        },
        {
            nombre: "Agua Mineral 1.5L",
            precio: 1.90,
            stock: 40,
            categoria: "Bebidas"
        },
        {
            nombre: "Galletas María",
            precio: 1.80,
            stock: 45,
            categoria: "Snacks"
        },
        {
            nombre: "Barra de Granola",
            precio: 0.90,
            stock: 60,
            categoria: "Snacks"
        },
        {
            nombre: "Chocolate en Polvo 400g",
            precio: 4.30,
            stock: 18,
            categoria: "Despensa"
        },
        {
            nombre: "Pollo Entero",
            precio: 12.00,
            stock: 10,
            categoria: "Proteínas"
        },
        {
            nombre: "Carne Molida 500g",
            precio: 7.50,
            stock: 12,
            categoria: "Proteínas"
        },
        {
            nombre: "Manzanas 1kg",
            precio: 3.90,
            stock: 25,
            categoria: "Frutas"
        },
        {
            nombre: "Plátanos 1kg",
            precio: 2.70,
            stock: 30,
            categoria: "Frutas"
        },
        {
            nombre: "Zanahorias 1kg",
            precio: 2.10,
            stock: 22,
            categoria: "Verduras"
        },
        {
            nombre: "Papas 1kg",
            precio: 2.50,
            stock: 28,
            categoria: "Verduras"
        },
        {
            nombre: "Cebollas 1kg",
            precio: 2.30,
            stock: 20,
            categoria: "Verduras"
        },
        {
            nombre: "Tomates 1kg",
            precio: 2.80,
            stock: 25,
            categoria: "Verduras"
        },
        {
            nombre: "Lechuga Romana",
            precio: 1.50,
            stock: 18,
            categoria: "Verduras"
        },
        {
            nombre: "Desodorante Roll-On",
            precio: 3.20,
            stock: 20,
            categoria: "Higiene"
        },
        {
            nombre: "Pasta Dental 100ml",
            precio: 2.60,
            stock: 25,
            categoria: "Higiene"
        },
        {
            nombre: "Toallas Femeninas 10pzas",
            precio: 3.80,
            stock: 15,
            categoria: "Higiene"
        },
        {
            nombre: "Servilletas 100pzas",
            precio: 1.90,
            stock: 30,
            categoria: "Despensa"
        },
        {
            nombre: "Refresco de Manzana 600ml",
            precio: 2.30,
            stock: 35,
            categoria: "Bebidas"
        },
        {
            nombre: "Galletas Saladas",
            precio: 1.70,
            stock: 40,
            categoria: "Snacks"
        },
        {
            nombre: "Sardinas en Salsa",
            precio: 2.90,
            stock: 18,
            categoria: "Enlatados"
        },
        {
            nombre: "Chiles Jalapeños Enlatados",
            precio: 2.20,
            stock: 22,
            categoria: "Enlatados"
        },
        {
            nombre: "Mermelada de Fresa 250g",
            precio: 3.10,
            stock: 16,
            categoria: "Despensa"
        }
        // ...puedes agregar más si lo deseas
    ]
};
