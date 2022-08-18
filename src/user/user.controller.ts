import { Controller, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Controller('api/users')
export class UserController {}
