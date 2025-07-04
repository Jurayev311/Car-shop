import React from 'react'
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import TopScroll from '../../components/top-scroll/top-scroll';

const NotFound = () => {
    return (
        <>
            <TopScroll />
            <div className='w-full h-screen flex justify-center items-center mt-[100px]'>
                <Result
                    status="404"
                    title="404"
                    subTitle="Kechirasiz, bunday sahifa topilmadi."
                    extra={<Link to={'/'}><Button type="primary">Bosh sahifa</Button></Link>}
                />
            </div>
        </>
    )
}

export default React.memo(NotFound)