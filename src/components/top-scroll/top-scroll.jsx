import React, { useEffect } from 'react'

const topScroll = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

  return null;
}

export default React.memo(topScroll)