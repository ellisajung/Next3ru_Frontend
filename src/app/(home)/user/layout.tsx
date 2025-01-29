"use client";

import { fetchUserData } from "@/app/(auth)/actions";
import { SidebarNav } from "@/components/elisa/SidebarNav";
import { Separator } from "@/components/shadcn-ui/separator";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";
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
    <div className="h-5/6 hidden space-y-6 p-24 pb-30 md:block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">마이 페이지</h2>
        <p className="text-muted-foreground">
          계정 정보와 내 활동을 관리하는 페이지입니다.
        </p>
      </div>
      <div>
        <Separator className="mb-10" />
      </div>
      <div className="h-5/6 flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-5xl">{children}</div>
      </div>
    </div>
  );
};

export default MyPageLayout;
