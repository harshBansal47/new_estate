


import dynamic from "next/dynamic";
import NotFound from "@/components/404";

export const metadata = {
  title: '404 Not Found || Realtors - Real Estate React Template',
  description:
    'Realtors - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <NotFound />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
