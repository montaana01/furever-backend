import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly introductionMessage: string = 'FurEver Backend!';

  getFurEver(): string {
    return this.introductionMessage;
  }
}
