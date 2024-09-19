import dynamic from "next/dynamic";
import CreateListing from "@/components/dashboard/create-listing";

export const metadata = {
  title: "Create Listing ||Prop Trade Real Estate",
  description: "Prop Trade Real Estate",
};

const index = () => {
  return (
    <>
      <CreateListing />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
