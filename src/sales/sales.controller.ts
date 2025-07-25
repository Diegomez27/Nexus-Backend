import { Controller, Get, Post, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { Auth } from '../auth/decorators/auth.decorator';
import { GetUser } from '../auth/decorators';
import { ValidRoles } from '../auth/interfaces/valid-roles';
import { User } from '../auth/entities/user.entity';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  @Auth(ValidRoles.admin, ValidRoles.cajero)
  create(
    @Body() createSaleDto: CreateSaleDto,
    @GetUser() user: User
  ) {
    return this.salesService.create(createSaleDto, user);
  }

  @Get()
  @Auth(ValidRoles.admin)
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  @Auth(ValidRoles.admin)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.salesService.findOne(id);
  }
}
