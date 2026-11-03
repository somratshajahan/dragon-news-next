import React from 'react';

const NewsDetailsPage = async ({params}) => {
    const res  = await params;
    const id = res.id;
    console.log(id)
    return (
        <div>
          
        </div>
    );
};

export default NewsDetailsPage;