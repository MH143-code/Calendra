import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt } = req.body

  if (!prompt) return res.status(400).json({ error: 'No prompt provided' })

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }]
    })
    const text = response.choices[0].message?.content || ''
    res.status(200).json({ result: text })
  } catch (error) {
    res.status(500).json({ error: 'OpenAI request failed' })
  }
}