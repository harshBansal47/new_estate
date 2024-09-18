import dynamic from "next/dynamic";
import AgentDetails from "@/components/agent-details";

export const metadata = {
  title: 'Agent Details ||Prop Trade Realtors',
  description:
    'Prop Trade Realtors',
}

const index = () => {
  return (
    <>
      <AgentDetails />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
