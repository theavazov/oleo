import Image from "next/image";

type Props = {
  source: any;
  alt: string;
  width?: number;
  height?: number;
};

export function CustomImage({ source, alt, width, height }: Props) {
  return (
    <Image
      src={source}
      alt={alt}
      quality={100}
      className="image"
      width={width}
      height={height}
      priority
    />
  );
}
