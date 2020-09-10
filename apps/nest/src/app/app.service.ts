import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService extends PrismaClient {
  getData(): { message: string } {
    if (this.$connect()) {
      return { message: 'Prisma Client Works! 👍' };
    }
    return {
      message: 'Prisma Client Not Working... ☹️',
    };
  }
}
