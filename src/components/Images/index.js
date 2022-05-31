import { forwardRef, useState } from 'react';

function Images({ src, alt, fallBack, ...props }, ref) {
    const [_fallBack, setFallBack] = useState('');
    function handleErrorImg() {
        setFallBack(fallBack);
    }
    return <img src={_fallBack ? fallBack : src} alt={alt} ref={ref} {...props} onError={handleErrorImg} />;
}

export default forwardRef(Images);
