import { Space, Spin } from 'antd';
const LoadingSpinner = () => {
    return (
        <Space className='d-flex justify-content-center align-items-center'>
            <Spin size='large'  className='d-flex justify-content-center align-items-center' />
        </Space>
    )
};
export default LoadingSpinner;