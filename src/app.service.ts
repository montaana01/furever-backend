import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getFurEver(): string {
    return 'FurEver Backend!';
  }
}
