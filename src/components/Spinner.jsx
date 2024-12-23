import React from 'react';

const Spinner = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center'>
            <span className="loading loading-dots loading-lg"></span>
            <p>Loading...</p>
        </div>
    );
};

export default Spinner;