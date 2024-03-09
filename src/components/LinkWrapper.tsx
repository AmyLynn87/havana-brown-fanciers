/**
 * An adapter for framework-specific link components.
 *
 * If we ever switch to a different framework, we can just change this.
 *
 * Could separate the interface from the concrete implementation, but
 * for now, this is fine.
 */
import Link from "next/link";

type LinkInterface = {
  href: string;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<"a">;

type LinkWrapper = (props: LinkInterface) => JSX.Element;

/**
 * A wrapper for the Next.js Link component. Concrete implementation of LinkWrapper.
 *
 * Next.js can prefetch pages in the background, which is a performance optimization.
 */
const NextLink: LinkWrapper = ({ href, children, ...props }) => {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

const PlainLink: LinkWrapper = ({ href, children, ...props }) => {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export default NextLink;
