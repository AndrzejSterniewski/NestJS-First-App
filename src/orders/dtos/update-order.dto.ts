import { Transform } from 'class-transformer';
import {
    IsNotEmpty,
    IsString,
    IsUUID
} from 'class-validator';

export class UpdateOrderDTO {
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    productId: string;

    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => (Array.isArray(value) ? value.join(' ') : ''))
    client: string;

    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
    address: string;
}