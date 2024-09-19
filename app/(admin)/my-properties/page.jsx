import dynamic from "next/dynamic";
import MyProperties from "@/components/dashboard/my-properties";

export const metadata = {
  title: 'Prop Trade Realtors',
  description:
    'Prop Trade Realtors',
}

const index = () => {
  return (
    <>
      <MyProperties />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
