import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

type Props = {
  mapId?: string;
  initialCenter ?: Coordinates;
}

export default function Map() {
  const mapRef = useRef();

  useEffect(() => {
    return () => {
      mapRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
      />
      <div id={mapId} style={{ width: '100%', height: '100%' }}></div>
    </>
  );
}
