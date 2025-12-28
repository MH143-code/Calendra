import React, { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import CalendarGrid from '../components/CalendarGrid'
import EventBlock from '../components/EventBlock'

export default function Home() {
  const [events, setEvents] = useState<any[]>([])

  useEffect(() => {
    async function fetchEvents() {
      const { data } = await supabase.from('events').select('*')
      setEvents(data || [])
    }
    fetchEvents()
  }, [])

  return (
    <div>
      <h1>Calendra Calendar</h1>
      <CalendarGrid>
        {events.map((e) => <EventBlock key={e.id} title={e.title} />)}
      </CalendarGrid>
    </div>
  )
}
