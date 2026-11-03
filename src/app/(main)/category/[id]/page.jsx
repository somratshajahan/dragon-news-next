import React, { Suspense } from 'react';


async function NewsDetailsContent({ params }) {
    const { id } = await params;
    console.log(id);

    return (
        <div>
            <h2>this is news details page</h2>
            <p>News ID: {id}</p>
        </div>
    );
}


const NewsDetailsPage = ({ params }) => {
    return (
        <Suspense fallback={<div className="text-center py-10">Loading news details...</div>}>
            <NewsDetailsContent params={params} />
        </Suspense>
    );
};

export default NewsDetailsPage;