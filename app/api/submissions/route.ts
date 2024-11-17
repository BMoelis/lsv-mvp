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
      throw new Error('Failed to fetch submissions')
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 })
  }
}
