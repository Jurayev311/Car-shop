import React, { useEffect } from 'react'

const TopScroll = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

  return null;
}

export default React.memo(TopScroll)