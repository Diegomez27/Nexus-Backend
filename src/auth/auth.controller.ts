import { Controller, Get, Post, Body, UseGuards, Req, Header, Headers, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-users.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from './entities/user.entity';
import { RawHeaders, GetUser} from './decorators';
import { IncomingHttpHeaders } from 'http';
import { UserRoleGuard } from './guards/use-role/user-role.guard';
import { RoleProtected } from './decorators/role-protected.decorator';
import { ValidRoles } from './interfaces/valid-roles';
import { Auth } from './decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser (@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('check-status') 
  @Auth()
  checkAuthStatus(
  @GetUser() user: User
  ){
    return this.authService.checkAuthStatus(user);
  }

  @Get('private')
  @UseGuards( AuthGuard())
  testingPrivateRout(
    @Req() request: Express.Request,
    @GetUser() user: User,
    @GetUser ('email') userEmail: string,

    @RawHeaders() rawHeaders: string[],
    @Headers() headers: IncomingHttpHeaders,
  ){
    
  
    return{
      ok: true,
      message: 'Hola mundo private',
      user, 
      userEmail,
      rawHeaders,
      headers,
    }
  }

  // @SetMetadata('roles', ['admin', 'super-user'])

  @Get('private2')
  @RoleProtected(ValidRoles.superUser, ValidRoles.admin)
  @UseGuards( AuthGuard(), UserRoleGuard )
  privateRoute2(
    @GetUser() user: User
  ){

    return{
      ok: true,
      user
    }
  }

  @Get ('private3')
  @Auth(ValidRoles.admin)
    privateRoute3(
    @GetUser() user: User
  ){

    return{
      ok: true,
      user
    }
  }
}

