import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC = 'isPublic';

export const PublicEndpoint = () => SetMetadata('isPublic', true);
