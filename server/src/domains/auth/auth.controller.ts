import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}
    @Post('/login')
    singUp(@Body() userlogin: {username: string, password: string} ) {
      return this.authService.singUp(userlogin.username, userlogin.password);
    }
  
}
