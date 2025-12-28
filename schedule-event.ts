import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../utils/supabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title, description, start, end, preparation_minutes, travel_minutes } = req.body

  const { data, error } = await supabase
    .from('events')
    .insert([
      { title, description, start, end, preparation_minutes, travel_minutes }
    ])
    .select()

  if (error) return res.status(500).json({ error })
  res.status(200).json({ event: data[0] })
}
