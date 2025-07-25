import { IsInt, IsPositive, IsUUID } from 'class-validator';

export class CreateSaleItemDto {
    @IsUUID()
    producto_id: string;

    @IsInt()
    @IsPositive()
    cantidad: number;
}
