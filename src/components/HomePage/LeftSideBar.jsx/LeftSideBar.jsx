import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories, activeId}) => {
    return (
        <div>
              <ul className="flex flex-col gap-3 mt-3">
          {categories.news_category.map((category) => {
            return (
              <li
                className={`
                    ${activeId === category.category_id && "bg-slate-100" }
                     p-2 rounded-md text-center font-bold text-xl`}
                key={category.category_id}
              >
               <Link href={`/category/${category.category_id}`}> {category.category_name}</Link>
              </li>
            );
          })}
        </ul>
        </div>
    );
};

export default LeftSideBar;