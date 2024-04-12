import { Transform } from 'class-transformer';
import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class CreateOrderDTO {
    @IsNotEmpty()
    @IsString()
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