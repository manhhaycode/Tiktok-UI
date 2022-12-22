import { forwardRef } from 'react';
import images from '~/assets/image';

function Image({ className, src, fallback = images.tiktok, alt }, ref) {
    return (
        <img
            style={{ backgroundColor: 'black', objectFit: 'cover' }}
            className={className}
            ref={ref}
            src={src || fallback}
            alt={alt}
            onError={(e) => {
                e.target.src = fallback;
            }}
        ></img>
    );
}

export default forwardRef(Image);
