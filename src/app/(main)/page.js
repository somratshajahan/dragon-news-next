import LeftSideBar from "@/components/HomePage/LeftSideBar.jsx/LeftSideBar";
import RightSidebar from "@/components/HomePage/RightSidebar";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaShareAlt } from "react-icons/fa";
import { IoBookmarkSharp } from "react-icons/io5";
// export const dynamic = "force-dynamic";
async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
    { cache: "force-cache" },
  );
  const data = await res.json();
  return data.data;
}
async function getNewsByCategoryId() {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/categories/04`,
    { cache: "force-cache" },
  );
  const data = await res.json();
  return data.news;
}
export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category);

  const news = await getNewsByCategoryId("04");
  const newsItems = news.sort((a, b) => b.total_view - a.total_view);
  console.log(news);
  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto mt-5">
      <div className=" col-span-3">
        <h2 className="font-bold text-3xl "> All Categories</h2>
        <LeftSideBar categories={categories} />
      </div>
      <div className="font-bold text-3xl col-span-6">
        All News
        {newsItems.map((newsItem) => (
          <div
            key={newsItem._id}
            className="border p-4 my-4 rounded-lg shadow-md"
          >
            {/* base 100 section */}
            <div className="flex justify-between bg-slate-100">
              <div className="flex">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={newsItem.author.img}
                  alt={newsItem.title || "News Image"}
                  width={600}
                  height={400}
                />
                <div className="ml-2">
                  <h2 className="text-[16px]">{newsItem.author.name}</h2>
                  <p className="text-sm text-gray-600">
                    {newsItem.author.published_date}
                  </p>
                </div>
              </div>
              {/* 2nd section */}
              <div className="flex gap-2 justify-center items-center">
                <IoBookmarkSharp className="h-6 w-6" />
                <FaShareAlt className="h-6 w-6" />
              </div>
            </div>
            {/* title section */}
            <div>
              <h2 className="text-xl font-bold mt-4">{newsItem.title}</h2>
              <Image
                className="h-65.5 w-130 mx-auto mt-2"
                alt="thumbnail"
                src={newsItem.thumbnail_url}
                width={600}
                height={400}
              />
              <p className="text-md text-gray-600 mt-2">
                {newsItem.details.length > 100
                  ? `${newsItem.details.slice(0, 100)}...`
                  : newsItem.details}
                <br />
                <Link
                  href={`/category/${newsItem._id}`}
                  className="text-amber-500 hover:underline"
                >
                  Read More
                </Link>
              </p>
            </div>
            <div className="divider"></div>
            {/* Rating Section */}
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="1 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="2 star"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="3 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="4 star"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="5 star"
                  />
                </div>
                <span className="text-2xl">{newsItem.rating.number}/5</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <FaEye />
                <span>{newsItem.total_view}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="font-bold text-xl col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}
