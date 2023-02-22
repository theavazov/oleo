import Image from "next/image";

type Props = {
  source: any;
  alt: string;
};

export function CustomImage({ source, alt }: Props) {
  return <Image src={source} alt={alt} quality={100} className="image" />;
}
