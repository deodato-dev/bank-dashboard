import { IsString, IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';

export class UserDto {

    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Exclude()
    password: string;
}
