import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Portal({ children }) {
    const [wrapper, setWrapper] = useState();
    useEffect(() => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        setWrapper(div);
        return () => {
            document.body.removeChild(div);
        };
    }, []);
    if (!wrapper) return null;
    return ReactDOM.createPortal(children, wrapper);
}

export default Portal;
