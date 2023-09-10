import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entity/User';

export class LoginAndSignupResponseDto {
  @ApiProperty({ type: () => User })
  profile: User;

  @ApiProperty({ type: String })
  accessToken: string;

  constructor(data?: Partial<LoginAndSignupResponseDto>) {
    Object.assign(this, data);
  }
}
