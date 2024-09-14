import dynamic from "next/dynamic";
import AgencyV1 from "@/components/agency-view/agency-v1";

export const metadata = {
<<<<<<< HEAD
  title: 'Simple Listing – AgencyV1 ||Prop Trade Real Estate',
  description:
    'Prop Trade Real Estate',
=======
  title: 'Simple Listing – AgencyV1 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
>>>>>>> master
}

const index = () => {
  return (
    <>
      <AgencyV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
