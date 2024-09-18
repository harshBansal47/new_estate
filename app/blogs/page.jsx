import dynamic from "next/dynamic";
import BlogV1 from "../../components/blog-list-1";

export const metadata = {
  title: 'Blog List 1 || Realtors - Real Estate React Template',
  description:
    'Realtors - Real Estate React Template',
}

const Blog = () => {
  return (
    <>
      <BlogV1/>
    </>
  );
};

export default dynamic(() => Promise.resolve(Blog), { ssr: false })