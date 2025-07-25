import { IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @MinLength(1)
    nombre: string;

    @IsNumber()
    @IsPositive()
    precio: number;

    @IsInt()
    @IsPositive()
    @IsOptional()
    stock?: number;

    @IsString()
    @MinLength(1)
    categoria: string;
}
