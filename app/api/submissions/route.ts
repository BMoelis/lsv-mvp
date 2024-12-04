import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch(`https://formspree.io/api/0/forms/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}/submissions`, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_FORMSPREE_API_KEY}`,
        'Accept': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json()
    const { status, id, counterOffer } = body
    
    const response = await fetch(`https://formspree.io/api/0/forms/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}/submissions/${id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_FORMSPREE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        status,
        counterOffer: counterOffer || null
      })
    })

    if (!response.ok) {
      throw new Error('Failed to update submission')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to update submission' },
      { status: 500 }
    )
  }
}