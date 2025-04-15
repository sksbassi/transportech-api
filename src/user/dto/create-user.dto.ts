import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  id: string;
  @IsString()
  document: string;
  @IsString()
  password: string;
  @IsString()
  name: string;
  @IsString()
  phone: string;

  @IsString()
  @IsEmail()
  email: string;
  @IsBoolean()
  status: boolean;
}
