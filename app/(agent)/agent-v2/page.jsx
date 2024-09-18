import dynamic from "next/dynamic";
import AgentV2 from "@/components/agent-view/agent-v2";

export const metadata = {
  title: 'Simple Listing – Agent V2 || Realtors - Realtors React Template',
  description:
    'Realtors - Realtors React Template',
}

const index = () => {
  return (
    <>
      <AgentV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
