import { NextApiRequest, NextApiResponse } from 'next';
import { executeSeleniumScript } from './seleniumScript';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await executeSeleniumScript();
    res.status(200).json({ success: true });
  } catch (error:any) {
    res.status(500).json({ success: false, error: error.message });
  }
}