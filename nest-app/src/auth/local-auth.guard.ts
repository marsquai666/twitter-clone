import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * デコレータのエイリアス
 * @UseGuards(LocalAuthGuard)は@UseGuards(AuthGuard('local'))と同等
 */
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
