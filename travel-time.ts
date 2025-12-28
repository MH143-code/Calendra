import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { destination } = req.body
  const origin = 'Kostverlorenweg 1'
  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&mode=bicycling&key=${apiKey}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    const duration = data.rows[0].elements[0].duration.value / 60 // minutes
    res.status(200).json({ travel_minutes: duration })
  } catch (error) {
    res.status(500).json({ error })
  }
}
