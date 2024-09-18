import dynamic from "next/dynamic";
import Service from "@/components/service";

export const metadata = {
  title: 'Service || Realtors - Realtors React Template',
  description:
    'Realtors - Realtors React Template',
}

const index = () => {
  return (
    <>
      <Service />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
