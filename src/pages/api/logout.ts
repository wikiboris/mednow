import type { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        expires: new Date(0),
        sameSite: 'strict',
        path: '/',
      })
    );
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
