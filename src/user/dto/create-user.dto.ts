import { IsBoolean, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  idUser: string;
  @IsString()
  Document: string;
  @IsString()
  Password: string;
  @IsString()
  Name: string;
  @IsString()
  Phone: string;
  @IsString()
  Email: string;
  @IsBoolean()
  Status: boolean;
}
