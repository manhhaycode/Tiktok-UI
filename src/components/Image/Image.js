import { forwardRef } from 'react';
import images from '~/assets/image';

function Image({ className, src, fallback = images.noImage, alt }, ref) {
    return <img className={className} ref={ref} src={src || fallback} alt={alt}></img>;
}

export default forwardRef(Image);
