import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const body = await request.json()
    const { status, counterOffer } = body

    const response = await fetch(`https://formspree.io/api/0/forms/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}/submissions/${params.id}`, {
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const response = await fetch(
      `https://formspree.io/api/0/forms/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}/submissions/${params.id}`,
      {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_FORMSPREE_API_KEY}`,
          'Accept': 'application/json'
        }
      }
    )

    if (!response.ok) {
      throw new Error('Failed to delete submission')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to delete submission' },
      { status: 500 }
    )
  }
}