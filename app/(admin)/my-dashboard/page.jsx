import dynamic from "next/dynamic";
import MyDashboard from "@/components/dashboard/my-dashboard";

export const metadata = {
  title: 'Dashboard ||Prop Trade Realtors',
  description:
    'Prop Trade Realtors',
}


const index = () => {
  return (
    <>
      <MyDashboard />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
