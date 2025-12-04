import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log web vitals to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vital:', body);
    }
    
    // In production, you could send this to your analytics service
    // Example: Send to DataDog, New Relic, or custom analytics
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing web vitals:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
