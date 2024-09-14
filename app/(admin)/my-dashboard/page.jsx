import dynamic from "next/dynamic";
import MyDashboard from "@/components/dashboard/my-dashboard";

export const metadata = {
<<<<<<< HEAD
  title: 'Dashboard ||Prop Trade Real Estate',
  description:
    'Prop Trade Real Estate',
=======
  title: 'Dashboard || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
>>>>>>> master
}


const index = () => {
  return (
    <>
      <MyDashboard />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
