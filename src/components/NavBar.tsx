"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./elisa/ThemeToggle";
import MyPageDropdown from "./elisa/MyPageDropdown";
import { useQuery } from "@tanstack/react-query";
import { fetchUserData } from "@/app/actions/auth";
import SubNavbar from "@/components/SubNavbar";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import { useTheme } from "next-themes";
import ThemeSwitch from "./elisa/ThemeSwitch";

const NavBar = () => {
  const { theme } = useTheme();
  const [rotate, setRotate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { data: user, error } = useQuery({
    queryKey: ["user"],
    // queryFn: async () => fetchUserData(),
    queryFn: () => fetchUserData(),
    // 왜 그냥 fetchUserData 하면 안됨?
  });

  const username = user?.user_metadata.username;

  // console.log("user: ", user);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY > 0 &&
        window.matchMedia("(min-width: 1280px)").matches
      ) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.matchMedia("(min-width: 1280px)").matches) {
        handleScroll();
      } else {
        setIsScrolled(false);
      }
    };

    handleResize(); // 초기 설정

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* 데스크탑 네브바 */}
      <header
        onResize={() => {
          setRotate(false);
        }}
        className="max-pc:hidden font-['KT'] sticky top-0 w-full z-[100]"
      >
        {/* 프로필 네브바 */}
        <div
          className={`gnb_header ${
            isScrolled ? "slide-up" : "slide-down"
          } gap-4 flex justify-end items-center pr-3 h-[30px] bg-[linear-gradient(to_right,#F69AA9,#E1ADED,#AAC6E5,#97D5E0)]`}
        >
          {/* <div className="flex justify-center items-center text-black dark:text-white">
            <ThemeToggle />
          </div> */}
          <div className="flex justify-center items-center gap-1 text-black">
            <ThemeSwitch
              rotate={rotate}
              setRotate={setRotate}
            />
          </div>
          {user ? (
            <MyPageDropdown username={username} />
          ) : (
            <>
              <Link
                className="text-[#ffffff] hover:text-black transition-color"
                href="/sign-in"
              >
                로그인
              </Link>
              <b className="text-[#ffffff]">|</b>
              <Link
                className="text-[#ffffff] hover:text-black transition-color"
                href="/sign-up"
              >
                회원가입
              </Link>
            </>
          )}
          <b>
            <Link
              href="https://www.ktwizstore.co.kr/"
              className="text-[#FF0000] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff71d9] hover:to-[#e09797] transition-color"
            >
              KT SHOP
            </Link>
          </b>
        </div>
        {/* 메인 네브바 */}
        <div
          className={`navbar lnb_header group relative w-full bg-black text-center h-[54px] shadow-xl ${
            isScrolled ? "slide-up" : "slide-down"
          }`}
        >
          <div className="white_line w-full absolute inset-x-0 bottom-0 bg-white pc:h-[2px]"></div>
          <div className="nav_wrap relative flex w-full text-white items-center h-[60px] pc:h-[90%] pc:justify-center">
            <ul className="left_nav pc:flex pc:w-1/3 pc:text-right pc:pl-2 pc:pr-[50px]  pc:text-base hidden">
              <li className="">
                <Link href="http://kt-sports.co.kr/sports/site/main.do">
                  <Image
                    src="/images/navbar/ktsports.svg"
                    alt="스포츠로고"
                    className="w-[80px] rounded-[8px] p-1.5 border-[1px] border-[hsla(0,0%,100%,.7)] pc:w-[80px] pc:rounded-[8px] pc:p-1.5"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    width={40}
                    height={40}
                  />
                </Link>
              </li>
              <li className="mt-1">
                <Link href="/KT_wiz">KT wiz</Link>
              </li>
              <li className="mt-1">
                <Link href="/wiz_park">wiz park</Link>
              </li>
              <li className="mt-1">
                <Link href="/Game">Game</Link>
              </li>
            </ul>
            <Link
              href="/"
              className="home_logo absolute z-[100] left-1/2 transform -translate-x-1/2"
            >
              <Image
                src="/images/navbar/KtLogo2.svg"
                alt="kt wiz logo"
                className="h-[86px]"
                width={200}
                height={200}
              />
            </Link>
            <ul className="right_nav pc:flex pc:w-1/3 pc:text-left pc:pr-2 pc:pl-[70px] pc:justify-between pc:text-base hidden">
              <li>
                <Link href="/Player">Player</Link>
              </li>
              <li>
                <Link href="/Media">Media</Link>
              </li>
              <li>
                <Link href="/Sponser">스폰서</Link>
              </li>
              <li>
                <Link
                  className="text-[#FF0000] font-extrabold"
                  href="/ticket"
                >
                  티켓구매
                </Link>
              </li>
              <li>
                <Link
                  href="/ticket"
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #f69bab 0%, #9bc4f6 100%)",
                  }}
                >
                  AI
                </Link>
              </li>
            </ul>
          </div>
          <SubNavbar />
        </div>
      </header>
      {/* 모바일 & 테블릿 네브바 */}
      <header className="pc:hidden min-w-fit sticky z-[100] top-0 px-5 py-3 w-full h-[60px] bg-white dark:bg-black">
        <div className="flex justify-between items-center ">
          <LeftNav />
          <Link href="/">
            <Image
              src={
                theme === "light"
                  ? "/images/navbar/logo-mb-black.svg"
                  : "/images/navbar/logo-mb.svg"
              }
              alt="logo"
              className="w-[70px] h-[40px]"
              width={120}
              height={90}
            />
          </Link>
          {username ? (
            <RightNav username={username} />
          ) : (
            <Link href="sign-in">
              <Image
                src="/images/navbar/log-in.svg"
                className="w-[34px] h-[34px]"
                alt="Login Icon"
                width={50}
                height={50}
              />
            </Link>
          )}
        </div>
      </header>
    </>
  );
};

export default NavBar;
