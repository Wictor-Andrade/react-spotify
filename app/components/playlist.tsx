import Image from 'next/image';
import React from 'react';

export default function Playlists() {
    return (
        <>
            <div>
                <div className=''>
                    <Image className='rounded-md' width={64} height={40} src={'/joji/top_jojis.jpeg'} alt="Joji Tops Playlist"/>
                </div>
            </div>
        </>
    )
}