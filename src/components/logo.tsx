import Image from "next/image";
import Link from "next/link";

export function Logo({ linked = true }: { linked?: boolean }) {
  const inner = ( 
    <Image
      src="/icons/alpha-logo.svg?v=2"
      alt="Alpha2Omega"
      width={72}
      height={48}
      priority
      className="brand-logo"
    />
  );

  if (!linked) {
    return <span className="brand">{inner}</span>;
  }

  return (
    <Link className="brand" href="/" aria-label="Alpha2Omega Home">
      {inner}
    </Link>
  );
}
