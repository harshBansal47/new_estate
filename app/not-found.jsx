


import dynamic from "next/dynamic";
import NotFound from "../components/404";

export const metadata = {
<<<<<<< HEAD
  title: '404 Not Found || Prop Trade Real Estate',
  description:
    'Real Estate',
=======
  title: '404 Not Found || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
>>>>>>> master
}

const index = () => {
  return (
    <>
      <NotFound />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
