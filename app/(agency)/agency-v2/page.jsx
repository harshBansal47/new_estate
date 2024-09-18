import dynamic from "next/dynamic";
import AgencyV2 from "@/components/agency-view/agency-v2";

export const metadata = {
  title: 'Simple Listing – Agency ||V2 Prop Trade Realtors',
  description:
    'Prop Trade Realtors',
}

const index = () => {
  return (
    <>
      <AgencyV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
