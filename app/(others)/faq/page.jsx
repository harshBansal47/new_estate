import dynamic from "next/dynamic";
import Faq from "@/components/faq";

export const metadata = {
  title: 'Faq || Realtors - Real Estate React Template',
  description:
    'Realtors - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <Faq />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
