import { API_URL } from './../../../config/index';
import type { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not authorized' });
      return;
    }
    const { token } = cookie.parse(req.headers.cookie);
    const strapiRes = await axios.get(`${API_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const { data } = strapiRes;

    if (strapiRes.status === 200) {
      res.status(200).json({ user: data });
    } else {
      res.status(403).json({ message: 'User forbidden' });
    }
  } catch (error) {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
