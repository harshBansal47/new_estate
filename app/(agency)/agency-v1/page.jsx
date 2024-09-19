import dynamic from "next/dynamic";
import AgencyV1 from "@/components/agency-view/agency-v1";

export const metadata = {
  title: 'Simple Listing – AgencyV1 ||Prop Trade Realtors',
  description:
    'Prop Trade Realtors',
}

const index = () => {
  return (
    <>
      <AgencyV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
