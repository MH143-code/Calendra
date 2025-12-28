import React from 'react'

export default function EventBlock({ title }: { title: string }) {
  return (
    <div style={{ backgroundColor: '#4f46e5', color: 'white', margin: '1px', padding: '2px', borderRadius: '4px' }}>
      {title}
    </div>
  )
}
