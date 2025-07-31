import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateSaleItemDto {
    @IsString()
    nombre_producto: string;
    
    // @IsUUID()
    // producto_id: string;

    @IsInt()
    @IsPositive()
    cantidad: number;
}
