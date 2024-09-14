import dynamic from "next/dynamic";
import CreateListing from "@/components/dashboard/create-listing";

export const metadata = {
<<<<<<< HEAD
  title: 'Create Listing ||Prop Trade Real Estate',
  description:
    'Prop Trade Real Estate',
=======
  title: 'Create Listing || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
>>>>>>> master
}

const index = () => {
  return (
    <>
      <CreateListing />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
