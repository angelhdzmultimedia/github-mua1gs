import { IncomingMessage, ServerResponse } from 'http';

export default (req: IncomingMessage, res: ServerResponse) => {
  return [
    {
      name: 'Angel',
      email: 'angel@live.com',
      id: '0abpasd03asd034as0d32F',
    },
    {
      name: 'Nuxt',
      email: 'nuxt@live.com',
      id: 'sdf908asdkj23sad09asd',
    },
    {
      name: 'Vue',
      email: 'vue@live.com',
      id: '09as0d92349asd990as',
    },
  ];
};
