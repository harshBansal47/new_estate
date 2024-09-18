import dynamic from "next/dynamic";
import Terms from "@/components/terms-conditions";

export const metadata = {
  title: 'Terms & Conditions || Realtors - Real Estate React Template',
  description:
    'Realtors - Real Estate React Template',
}

const index = () => {
  return (
    <>
      <Terms />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
