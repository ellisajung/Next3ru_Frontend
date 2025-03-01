import { LogOut } from "lucide-react";
import { Button } from "@/components/shadcn-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn-ui/dropdown-menu";
import Link from "next/link";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchUserData, signOut } from "@/app/actions/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const MyPageDropdown = ({ username }: { username: string }) => {
  const queryClient = useQueryClient();

  // const { data: user, error } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: fetchUserData,
  // });

  const mutation = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"], refetchType: "all" });
      revalidatePath("/");
      // redirect("/");
    },
  });

  // const username = user?.user_metadata.username;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Button variant="ghost"> */}
        {/* <p className="hover:text-black transition-color">{username} 님</p> */}
        <div className="h-9 flex justify-center items-center text-white hover:text-black transition-color">
          반가워요, {username} 님
        </div>
        {/* </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-36 font-['KT']"
        align="end"
      >
        <Link href="/user/account">
          <DropdownMenuItem>내 계정</DropdownMenuItem>
        </Link>
        <Link href="/user/reviews">
          <DropdownMenuItem>내 리뷰</DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <Button
            className="flex justify-start items-center w-full p-0 h-5"
            variant="ghost"
            onClick={() => {
              mutation.mutate();
            }}
          >
            <LogOut
              className="mr-1"
              size={14}
            />
            로그아웃
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MyPageDropdown;
