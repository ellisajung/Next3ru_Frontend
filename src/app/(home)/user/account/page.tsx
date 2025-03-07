import UsernameForm from "@/components/elisa/UsernameForm";
import { Separator } from "@/components/shadcn-ui/separator";

const MyAccountPage = () => {
  return (
    <div className="h-full flex flex-col space-y-10 sm:space-y-2">
      <div className="max-sm:hidden">
        <h3 className="text-lg font-medium">내 계정</h3>
        <p className="text-sm text-muted-foreground">
          계정 정보를 관리하는 페이지입니다. 유저 이름을 변경할 수 있습니다.
        </p>
      </div>
      <div className="max-sm:hidden">
        <Separator className="mb-10" />
      </div>
      <div className="grow flex flex-col justify-between max-sm:px-8">
        <UsernameForm />
      </div>
    </div>
  );
};

export default MyAccountPage;
