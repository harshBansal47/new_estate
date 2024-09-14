import dynamic from "next/dynamic";
import AgencyV2 from "@/components/agency-view/agency-v2";

export const metadata = {
<<<<<<< HEAD
  title: 'Simple Listing – Agency ||V2 Prop Trade Real Estate',
  description:
    'Prop Trade Real Estate',
=======
  title: 'Simple Listing – AgencyV2 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
>>>>>>> master
}

const index = () => {
  return (
    <>
      <AgencyV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
