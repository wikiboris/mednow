import { API_URL } from './../../../config/index';
import type { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      identifier,
      password,
    }: { identifier: string; password: string } = req.body;

    const strapiRes = await axios.post(`${API_URL}/auth/local`, {
      identifier,
      password,
    });
    const { data } = strapiRes;

    if (strapiRes.status === 200) {
      // Set Cookie
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', data.jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: 'strict',
          path: '/',
        })
      );

      res.status(200).json({ user: data.user });
    } else {
      res.status(strapiRes.status).json({ message: data });
    }
  } catch (error) {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
