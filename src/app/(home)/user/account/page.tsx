import UsernameField from "@/components/elisa/AccountForm";
import { Button } from "@/components/shadcn-ui/button";
import { Separator } from "@/components/shadcn-ui/separator";

const MyAccountPage = () => {
  return (
    <div className="h-full flex flex-col space-y-6">
      <div>
        <h3 className="text-lg font-medium">내 프로필</h3>
        <p className="text-sm text-muted-foreground">
          프로필 정보를 관리하는 페이지입니다. 유저 이름을 변경할 수 있습니다.
        </p>
      </div>
      <div>
        <Separator className="mb-10" />
      </div>
      <div className="grow">
        <UsernameField />
      </div>
      <div>
        <Button
          className="rounded-xl"
          // formAction={isValidUsername ? signUp : undefined}
          // disabled={!isValidUsername}
        >
          변경하기
        </Button>
      </div>
    </div>
  );
};

export default MyAccountPage;
