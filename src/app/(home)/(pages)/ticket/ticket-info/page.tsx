import Link from "next/link";

const TicketInfoPage = () => {
  return (
    <>
      <div
        id="page-content-header"
        className=""
      >
        <div id="tab-header">
          <Link href="/">가격표</Link>
          <Link href="/">할인 혜택</Link>
        </div>
      </div>
    </>
  );
};

export default TicketInfoPage;
