import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFFFFF', // Apple icons require a solid background
        }}
      >
        {/* Scaled up SVG symbol */}
        <svg width="120" height="120" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="12" width="8" height="16" rx="2" fill="#1F4D3D" />
          <rect x="4" y="4" width="8" height="6" rx="2" fill="#C48A2C" />
          <rect x="14" y="12" width="14" height="8" rx="2" fill="#1F4D3D" />
          <rect x="14" y="22" width="8" height="6" rx="2" fill="#1F4D3D" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
