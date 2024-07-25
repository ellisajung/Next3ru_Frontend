import Link from "next/link";

const PagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      id="body-wrap"
      className="relative w-4/5 h-full mx-auto"
    >
      {children}
    </div>
  );
};

export default PagesLayout;
