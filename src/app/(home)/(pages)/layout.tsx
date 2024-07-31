import Link from "next/link";

const PagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div id="body-wrap" className="relative h-full mx-auto">
      {children}
    </div>
  );
};

export default PagesLayout;
