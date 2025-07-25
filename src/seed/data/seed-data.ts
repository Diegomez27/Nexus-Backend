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
        }
    ]
};
