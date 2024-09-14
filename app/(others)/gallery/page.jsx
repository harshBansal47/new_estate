import dynamic from "next/dynamic";
import Gallery from "@/components/gallery";

export const metadata = {
  title: 'Gallery',
  description:
    '',
}

const index = () => {
  return (
    <>
      <Gallery />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
