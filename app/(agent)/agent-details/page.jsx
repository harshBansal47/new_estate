import dynamic from "next/dynamic";
import AgentDetails from "@/components/agent-details";

export const metadata = {
<<<<<<< HEAD
  title: 'Agent Details ||Prop Trade Real Estate',
  description:
    'Prop Trade Real Estate',
=======
  title: 'Agent Details || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
>>>>>>> master
}

const index = () => {
  return (
    <>
      <AgentDetails />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
