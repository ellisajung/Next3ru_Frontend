import { LogOut } from "lucide-react";
import { Button } from "@/components/shadcn-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn-ui/dropdown-menu";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchUserData } from "@/app/(auth)/actions";
import { use } from "react";

interface MyPageDropdownProps {
  handleSignOut: () => void;
}

const MyPageDropdown = ({ handleSignOut }: MyPageDropdownProps) => {
  const { data: user, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUserData,
  });

  const username = user?.user_metadata.username;

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
        className="w-36"
        align="end"
      >
        <DropdownMenuItem>
          <Link href="/user/account">내 계정</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/user/reviews">내 리뷰</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut
            className="mr-1"
            size={14}
          />
          <form>
            <Button
              className="p-0 h-5"
              variant="ghost"
              onClick={handleSignOut}
            >
              로그아웃
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MyPageDropdown;
