import React from "react";
import Image from "next/image";

export default function NavBarSub() {
  return (
    <ul className="subMenu flex hidden  w-[2000px]  group-hover:block bg-opacity-80 bg-[#161616]  shadow-xl ">
      <div className="flex">
        <Image
          src={"images/navbar/SubLogo.svg"}
          alt="sublogo"
          className="w-[209px] h-[203px] mt-24"
          width={10}
          height={10}
        />
        <ul className="flex ">
          {" "}
          <li className="kt_wiz w-24 block p-2">
            <a href="#">kt wiz는?</a>
            <a href="#">구단 BI</a>
            <a href="#">회원 정책</a>
            <a href="#">스폰서</a>
            <a href="#">월페이퍼</a>
          </li>
          <li className="wiz_park w-24 block p-2">
            <a href="#">kt wiz park</a>
            <a href="#">주차 예약</a>
            <a href="#">찾아오기</a>
            <a href="#">익산야구장</a>
          </li>
          <li className="Game w-24 block p-2">
            <a href="#">정규 리그</a>
            <a href="#">퓨처스 리그</a>
          </li>
          <li className="w-24 block p-2">
            <a href="#">코칭 스텝</a>
            <a href="#">투수</a>
            <a href="#">타자</a>
            <a href="#">응원단</a>
            <a href="#">응원가</a>
            <a href="#">응원가 저작권</a>
          </li>
          <li className="w-24 block p-2">
            <a href="#">wiz 뉴스</a>
            <a href="#">wiz 스토리</a>
            <a href="#">시구자 정보</a>
            <a href="#">wiz 포토</a>
            <a href="#">하이라이트</a>
            <a href="#">Live 영상모음</a>
          </li>
          <li className="w-24 block p-2">
            <a href="#">티켓 예매</a>
            <a href="#">단체 관람</a>
            <a href="#">입장 및 좌석 정보</a>
          </li>
          <li className="w-24 block p-2">
            <a href="#">티켓 예매</a>
            <a href="#">단체 관람</a>
            <a href="#">입장 및 좌석 정보</a>
          </li>
          <li className="w-24 block p-2">
            <a href="#">컨디션 평점</a>
            <a href="#">AI 추천</a>
          </li>
        </ul>
      </div>
    </ul>
  );
}
