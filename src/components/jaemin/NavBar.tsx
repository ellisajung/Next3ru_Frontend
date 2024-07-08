"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

// import Logo from "";
// import Logo2 from "../../public/images/navbar/KtLogo2.svg";
// import Ktsports from "../../public/images/navbar/ktsports.svg";
// import KtsportsBlack from "../../public/images/navbar/ktsports_black.svg";
// import Hambugar from "../../public/images/navbar/Hambugar.svg";
// import Mypage from "../../public/images/navbar/Mypage.svg";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <header>
        <div className="gnb_header text-[#ffffff] gap-2 font-['KT'] xl:flex xl:justify-end xl:items-center xl:pr-3 xl:h-[39px] xl:bg-gradient-to-r xl:from-[#F69AA9] xl:via-[#E1ADED] xl:via-[#AAC6E5] xl:to-[#97D5E0] hidden">
          <a className="hover:text-black transition-color" href="/">
            로그인
          </a>
          &nbsp;
          <b>|</b>&nbsp;
          <a className="hover:text-black transition-color " href="/">
            회원가입
          </a>
          &nbsp;
          <b>
            <a
              href="https://www.ktwizstore.co.kr/"
              className="text-[#FF0000] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff71d9] hover:to-[#e09797] transition-color"
            >
              KT SHOP
            </a>
          </b>
        </div>
        <div className="lnb_header relative w-full h-[100px] bg-black text-center shadow-lg xl:h-[80px] xl:bg-black xl:shadow-xl">
          <div className="white_line w-full h-[2px] absolute inset-x-0 bottom-[6px] bg-white xl:h-[2px]"></div>

          <div className="nav_wrap relative flex w-full text-white items-center h-[96px] xl:h-[96px]">
            <ul className="left_nav font-['KT'] xl:flex xl:w-1/2 xl:text-right xl:pr-[50px] xl:justify-around xl:text-2xl hidden">
              <div className="flex justify-center items-center">
                <a href="http://kt-sports.co.kr/sports/site/main.do">
                  <Image
                    src={
                      isHovered ? "images/navbar/ktsports_black.svg" : "/images/navbar/ktsports.svg"
                    }
                    alt="스포츠로고"
                    className={`w-[80px] rounded-md p-1.5 ${
                      isHovered
                        ? "bg-[hsla(0,0%,100%,.7)]"
                        : "border-[1px] border-[hsla(0,0%,100%,.7)]"
                    } xl:w-[80px] xl:rounded-md xl:p-1.5`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    width={80} // width 추가
                    height={80} // height 추가
                  />
                </a>
              </div>
              <li>
                <a href="KT_wiz">KT wiz</a>
              </li>
              <li>
                <a href="wiz_park">wiz park</a>
              </li>
              <li>
                <a href="Game">Game</a>
              </li>
            </ul>

            <Link
              className="home_logo absolute left-1/2 transform -translate-x-1/2 top-[-37.2px] xl:top-[-28.5px]"
              href="https://www.ktwiz.co.kr/"
            >
              <div className="relative w-[125px] h-[180px] xl:w-[125px] xl:h-[140px]">
                <Image
                  src={"/images/navbar/KtLogo2.svg"}
                  alt="logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Link>

            <ul className="right_nav  font-['KT'] xl:flex xl:w-1/2 xl:text-left xl:pl-[100px] xl:justify-around xl:text-2xl hidden">
              <li>
                <a href="Player">Player</a>
              </li>
              <li>
                <a href="Media">Media</a>
              </li>
              <li>
                <a href="Sponser">스폰서</a>
              </li>
              <li className="text-[#FF0000] font-extrabold">
                <a href="ticket">티켓구매</a>
              </li>
            </ul>

            <div className="left_nav flex xl:hidden ">
              <button className="flex items-center">
                <Image
                  src={"images/navbar/Hambugar.svg"}
                  alt="Home Icon"
                  className="w-8 h-8"
                  width={32} // width 추가
                  height={32} // height 추가
                />
              </button>
            </div>
            <div className="right_nav  flex ml-auto xl:hidden ">
              <button className="flex items-center">
                <Image
                  src={"images/navbar/Mypage.svg"}
                  alt="Profile Icon"
                  className="w-10 h-10"
                  width={40} // width 추가
                  height={40} // height 추가
                />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
