const TicketLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      id="body-wrap"
      className="relative w-11/12 h-[90%] mx-auto"
    >
      {children}
    </div>
  );
};

export default TicketLayout;
