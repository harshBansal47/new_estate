import dynamic from "next/dynamic";
import AboutUs from "@/components/about-us";

export const metadata = {
  title: 'About Us || Realtors - Realtors React Template',
  description:
    'Realtors - Realtors React Template',
}

const index = () => {
  return (
    <>
      <AboutUs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
