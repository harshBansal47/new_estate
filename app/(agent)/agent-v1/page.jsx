import dynamic from "next/dynamic";
import AgentV1 from "@/components/agent-view/agent-v1";

export const metadata = {
<<<<<<< HEAD
  title: 'Simple Listing – Agent V1 Prop Trade Real Estate',
  description:
    'Prop Trade Real Estate',
=======
  title: 'Simple Listing – Agent V1 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
>>>>>>> master
}

const index = () => {
    return (
        <>
            <AgentV1 />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
