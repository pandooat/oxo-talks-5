import { NextResponse } from 'next/server';
import crypto from 'crypto';

// Fungsi wajib dari Meta: Data pengguna (email/phone) HARUS di-hash menggunakan SHA-256
const hashData = (data: string | undefined | null) => {
    if (!data) return undefined;
    return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
};

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { eventName, eventId, email, phone, url, userAgent, clientIp, fbp, fbc } = body;

        const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
        const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;

        if (!PIXEL_ID || !ACCESS_TOKEN) {
            console.error("Meta Pixel ID or Access Token is missing from env");
            return NextResponse.json({ success: false, error: "Missing Environment Variables" }, { status: 500 });
        }

        // Format User_Data parameters correctly per Meta standard. E.g phone should be hashed if it starts with 62 instead of 0 etc, but user can manage that externally.
        const payload = {
            data: [
                {
                    event_name: eventName,
                    event_time: Math.floor(Date.now() / 1000), // Current time in seconds
                    action_source: 'website',
                    event_id: eventId, // IMPORTANT FOR DEDUPLICATION
                    event_source_url: url,
                    user_data: {
                        em: email ? [hashData(email)] : undefined,
                        ph: phone ? [hashData(phone)] : undefined,
                        client_ip_address: clientIp, // Use IP if available
                        client_user_agent: userAgent,
                        fbp: fbp,
                        fbc: fbc
                    }
                }
            ],
            test_event_code: 'TEST93430'
        };

        const response = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (!response.ok) {
            console.error("Meta API Error:", result);
            return NextResponse.json({ success: false, error: result }, { status: response.status });
        }

        return NextResponse.json({ success: true, metaResponse: result });

    } catch (error: any) {
        console.error("CAPI Serverless Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
