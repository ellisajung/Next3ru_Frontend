"use client";

import { fetchUserData } from "@/app/actions/auth";
import { SidebarNav } from "@/components/elisa/SidebarNav";
import { Separator } from "@/components/shadcn-ui/separator";
import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";

const sidebarNavItems = [
  {
    title: "내 계정",
    href: "/user/account",
  },
  {
    title: "내 리뷰",
    href: "/user/reviews",
  },
];

const MyPageLayout = ({ children }: { children: ReactNode }) => {
  const { data: user, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUserData,
    // queryFn: async () => await fetchUserData(),
  });

  // console.log(user);

  // useEffect(() => {
  //   if (!user) {
  //     redirect("/sign-in");
  //   }
  // }, []); // 이러면 화면 보여진 후 리다이렉트

  return (
    <>
      <div className="absolute w-full h-5/6 px-4 py-1 sm:p-10 md:p-14 lg:p-20 xl:p-24 md:block">
        <div className="max-sm:hidden space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">마이 페이지</h2>
          <p className="max-sm:hidden text-muted-foreground">
            계정 정보와 내 활동을 관리하는 페이지입니다.
          </p>
        </div>
        <div className="max-sm:hidden mb-10">
          <Separator className="max-sm:hidden" />
        </div>
        <div className="h-full flex flex-col space-y-2 sm:space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5 px-4">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-5xl">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MyPageLayout;
