import React from 'react'

export default function CalendarGrid({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(14, 60px)', border: '1px solid #ccc' }}>
      {children}
    </div>
  )
}
