import { Injectable } from '@nestjs/common';
import { CustomHttpService } from '../custom-http/custom-http.service';

@Injectable()
export class TransactionSplitService {
  constructor(private readonly httpService: CustomHttpService) {}

  // createSplit() {}
}
