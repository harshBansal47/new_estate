import dynamic from "next/dynamic";
import HomeMain from "../components/home";
import Wrapper from "../components/layout/Wrapper";
export const metadata = {
  title: 'Home-4 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const index = () => {
  return (
    <>
    <Wrapper>
      <HomeMain />  
    </Wrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });