import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 bg-gray-200 py-3 container mx-auto px-2 rounded-lg mt-4'>
            <button className='btn bg-red-700 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem laudantium rerum explicabo ipsam labore corporis, ullam debitis corrupti maiores, non recusandae rem minus. Corporis ducimus officiis rem adipisci magnam dolore autem, culpa reprehenderit sequi recusandae quasi esse neque excepturi molestias consequatur, impedit porro. Deserunt eaque optio voluptatem deleniti. Sint repudiandae laborum nostrum, praesentium ea dignissimos explicabo rem sit officia consequatur molestias omnis qui iusto similique ad. Temporibus eligendi, aliquam nihil quaerat sit adipisci officia saepe hic nesciunt deleniti dolores distinctio deserunt incidunt nemo commodi pariatur quisquam dolorum laboriosam accusamus velit quae dolorem! Eos voluptatum dolor exercitationem magnam ea aliquid, animi eaque enim distinctio perferendis natus quo delectus esse officiis illum molestiae dolores. Ea, dignissimos est. Repellendus corporis saepe natus ex perferendis vel maiores? Inventore consequuntur laborum excepturi perspiciatis quis quia eaque explicabo hic, dicta tenetur, eveniet ducimus animi harum repellendus eum nemo. Quas nesciunt fugit cum minus dolorum dolor molestiae. Beatae similique veniam saepe unde quaerat placeat, recusandae cumque totam nisi repudiandae. Odio corrupti soluta at ullam, necessitatibus nesciunt? Sint voluptates recusandae fuga nihil et veritatis dicta eveniet, omnis laboriosam non quibusdam officiis corporis sequi. Nostrum adipisci, illo voluptatibus possimus odit ipsum, eaque id amet earum delectus illum? Magnam sunt, necessitatibus placeat quasi est ut harum nisi error veritatis ullam, hic itaque libero architecto maxime ipsum nulla veniam. Quae placeat quidem sed necessitatibus labore cupiditate voluptatibus corrupti modi consequuntur. Illum dolor ipsa, adipisci ut error officiis expedita placeat! A odio ipsum quibusdam nesciunt accusantium consequuntur molestias unde tempore ab quo?</Marquee>
        </div>
    );
};

export default BreakingNews;