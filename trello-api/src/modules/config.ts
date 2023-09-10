import * as envalid from 'envalid';

export const config = envalid.cleanEnv(process.env, {
  PORT: envalid.num({ desc: 'Port the server will listen to', default: 4000 }),
});
