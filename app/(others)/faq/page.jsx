import dynamic from "next/dynamic";
import Faq from "@/components/faq";

export const metadata = {
  title: 'Faq || Realtors - Realtors React Template',
  description:
    'Realtors - Realtors React Template',
}

const index = () => {
  return (
    <>
      <Faq />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
