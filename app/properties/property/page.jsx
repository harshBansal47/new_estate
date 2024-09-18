import dynamic from "next/dynamic";
import ListingDetailsV1 from "@/components/listing-details-v1";

export const metadata = {
  title: 'Listing Single – Details V1 || Realtors - Realtors React Template',
  description:
    'Realtors - Realtors React Template',
}

const index = () => {
  return (
    <>
      <ListingDetailsV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
