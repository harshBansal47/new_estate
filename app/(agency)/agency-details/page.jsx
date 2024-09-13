import dynamic from "next/dynamic";
import AgencyDetails from "@/components/agency-details";

export const metadata = {
  title: 'Agency Details ||Prop Trade Real Estate',
  description:
    'Prop Trade Real Estate',
}

const index = () => {
  return (
    <>
      <AgencyDetails />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
