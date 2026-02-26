import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class ForgotPasswordDto {
    @IsEmail({}, { message: 'E-mail inválido' })
    @IsNotEmpty({ message: 'E-mail é obrigatório' })
    email: string;
}

export class ResetPasswordDto {
    @IsNotEmpty({ message: 'Token é obrigatório' })
    token: string;

    @IsNotEmpty({ message: 'Nova senha é obrigatória' })
    @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
    passwordHash: string;
}
