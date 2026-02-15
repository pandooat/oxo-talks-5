import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'OXO Talks - Web3 Wealth Mastery';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #020617, #0f172a)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    color: 'white',
                    position: 'relative',
                }}
            >
                {/* Background decorative elements */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-100px',
                        right: '-100px',
                        width: '400px',
                        height: '400px',
                        background: 'rgba(245, 158, 11, 0.1)',
                        borderRadius: '50%',
                        filter: 'blur(80px)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-50px',
                        left: '-50px',
                        width: '300px',
                        height: '300px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        borderRadius: '50%',
                        filter: 'blur(60px)',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '50px',
                        padding: '10px 30px',
                        marginBottom: '40px',
                        boxShadow: '0 0 20px rgba(0,0,0,0.5)',
                    }}
                >
                    <div
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '8px',
                            background: 'linear-gradient(135deg, #fcd34d 0%, #d97706 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: '24px',
                            marginRight: '15px',
                        }}
                    >
                        O
                    </div>
                    <span style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>OXO TALKS</span>
                </div>

                <h1
                    style={{
                        fontSize: '80px',
                        fontWeight: 800,
                        textAlign: 'center',
                        lineHeight: 1.1,
                        margin: '0 0 20px 0',
                        background: 'linear-gradient(to right, #ffffff, #94a3b8)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    }}
                >
                    Web3 Wealth<br />Mastery
                </h1>

                <div
                    style={{
                        fontSize: '32px',
                        color: '#f59e0b',
                        fontWeight: 'bold',
                        marginTop: '20px',
                        padding: '10px 20px',
                        border: '2px solid rgba(245, 158, 11, 0.3)',
                        borderRadius: '12px',
                        background: 'rgba(245, 158, 11, 0.05)',
                    }}
                >
                    Webinar Gratis & Eksklusif
                </div>

                <div style={{ position: 'absolute', bottom: '40px', fontSize: '20px', color: '#64748b' }}>
                    Limited Seats Available
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
