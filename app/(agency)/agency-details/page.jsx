import dynamic from "next/dynamic";
import AgencyDetails from "@/components/agency-details";

export const metadata = {
<<<<<<< HEAD
  title: 'Agency Details ||Prop Trade Real Estate',
  description:
    'Prop Trade Real Estate',
=======
  title: 'Agency Details || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
>>>>>>> master
}

const index = () => {
  return (
    <>
      <AgencyDetails />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
