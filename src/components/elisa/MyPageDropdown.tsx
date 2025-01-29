import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/shadcn-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/shadcn-ui/dropdown-menu";
import Link from "next/link";

interface MyPageDropdownProps {
  handleSignOut: () => void;
}

const MyPageDropdown = ({ handleSignOut }: MyPageDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Button variant="ghost"> */}
        {/* <p className="hover:text-black transition-color">{username} 님</p> */}
        <div className="h-9 flex justify-center items-center text-white hover:text-black transition-color">
          반가워요, eli 님
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
