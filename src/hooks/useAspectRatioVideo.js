import { useEffect, useState } from 'react';

function useAspectRatioVideo(meta) {
    const [aspectRaito, setAspectRaito] = useState({});

    const gcd = (a, b) => {
        // Nếu a bằng 0, trả về b. Ngược lại, nếu b bằng 0, trả về a.
        if (a === 0) {
            return b;
        } else if (b === 0) {
            return a;
        }

        // Chia a cho b và lấy dư. Gán a bằng b và b bằng dư.
        let remainder = a % b;
        a = b;
        b = remainder;

        // Lặp lại cho đến khi a hoặc b bằng 0.
        return gcd(a, b);
    };

    useEffect(() => {
        let x = meta.video.resolution_x;
        let y = meta.video.resolution_y;
        let devide = gcd(x, y);
        setAspectRaito({ x: x / devide, y: y / devide });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [meta]);

    return aspectRaito;
}

export default useAspectRatioVideo;
