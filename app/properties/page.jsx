import dynamic from "next/dynamic";
import GridV6 from "@/components/listing-grid/grid-v6";

export const metadata = {
  title: 'Simple Listing – Grid V6 || Realtors - Realtors React Template',
  description:
    'Realtors - Realtors React Template',
}

const index = () => {
  return (
    <>
      <GridV6 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });