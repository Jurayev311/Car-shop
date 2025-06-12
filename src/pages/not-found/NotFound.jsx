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
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Link to={'/'}><Button type="primary">Back Home</Button></Link>}
                />
            </div>
        </>
    )
}

export default React.memo(NotFound)