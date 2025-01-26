"use client";

import { Button } from "../shadcn-ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/shadcn-ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn-ui/popover";
import { FaPen } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSeatsStore } from "@/store/SeatsStore";
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Link from "next/link";

interface ReviewContentHeaderProps {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  searchParams: ReadonlyURLSearchParams;
}

const ReviewContentHeader = ({
  setEdit,
  searchParams,
}: ReviewContentHeaderProps) => {
  // 좌석 콤보 박스
  const seats = useSeatsStore((state) => state.data);
  const [zones, setZones] = useState([]);

  const [areaNameOpen, setAreaNameOpen] = useState(false);
  const [areaNameValue, setAreaNameValue] = useState("");
  const [zoneOpen, setZoneOpen] = useState(false);
  const [zoneValue, setZoneValue] = useState("");

  // 여기부터
  const router = useRouter();
  const sortParam = searchParams.get("sort");

  useEffect(() => {
    if (areaNameValue) {
      const zones = seats.find(
        (seat: any) => seat.area_name === areaNameValue,
      )?.zones;
      setZones(zones);
    }
  }, [areaNameValue]);

  // const urlSearchParams = new URLSearchParams(searchParams + "");
  // const updateSearchParams = (key: string, value: string) => {
  //   urlSearchParams.set(key, value);
  //   return urlSearchParams + "";
  // };

  // console.log("searchParams: ", searchParams);

  return (
    <div className="flex justify-between mb-4">
      <div className="flex gap-5">
        <div className="flex gap-2">
          {/* 구역 이름 선택*/}
          <Popover
            open={areaNameOpen}
            onOpenChange={setAreaNameOpen}
          >
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={areaNameOpen}
                className="w-[180px] justify-between"
              >
                {areaNameValue
                  ? seats.find((seat: any) => seat.area_name === areaNameValue)
                      ?.area_name
                  : "구역 이름 선택"}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[200px] p-0"
              align="start"
            >
              <Command>
                <CommandInput placeholder="구역 이름 검색..." />
                <CommandList>
                  <CommandEmpty>일치하는 구역 이름이 없습니다.</CommandEmpty>
                  <CommandGroup>
                    {seats.map((seat: any, i: number) => (
                      <CommandItem
                        key={i}
                        value={seat.area_name}
                        onSelect={(currentValue: string) => {
                          setAreaNameValue(
                            currentValue === areaNameValue
                              ? "구역 이름 선택"
                              : currentValue, // 같은거 다시 클릭시 초기화
                          );
                          setAreaNameOpen(false);
                          // router.push(
                          //   `?area=${seat.area_name}&sort=${sortParam}&asc=${ascParam}&page=${pageParam}`,
                          // );
                          const newUrlSearchParams =
                            updateSearchParams("area", seat.area_name) + "";
                          router.push(`?${newUrlSearchParams}`);
                        }}
                      >
                        {seat.area_name}
                        <Check
                          className={cn(
                            "ml-auto",
                            areaNameValue === seat.area_name
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {/* 구역 번호 선택 */}
          <Popover
            open={zoneOpen}
            onOpenChange={setZoneOpen}
          >
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={zoneOpen}
                className="w-[180px] justify-between"
              >
                {zoneValue
                  ? zones.find((zone) => zone === zoneValue)
                  : "구역 번호 선택"}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[200px] p-0"
              align="start"
            >
              <Command>
                <CommandInput placeholder="Search framework..." />
                <CommandList>
                  <CommandEmpty>일치하는 구역 번호가 없습니다.</CommandEmpty>
                  <CommandGroup>
                    {zones.map((zone, i) => (
                      <CommandItem
                        key={i}
                        value={zone}
                        onSelect={(currentValue) => {
                          setZoneValue(
                            currentValue === zoneValue
                              ? "구역 번호 선택"
                              : currentValue,
                          );
                          setZoneOpen(false);
                          // router.push(
                          //   `?area=${areaParam}&zone=${zone}&sort=${sortParam}&asc=${ascParam}&page=${pageParam}`,
                          // );
                          const newUrlSearchParams =
                            updateSearchParams("zone", zone) + "";
                          router.push(`?${newUrlSearchParams}`);
                        }}
                      >
                        {zone}
                        <Check
                          className={cn(
                            "ml-auto",
                            zoneValue === zone ? "opacity-100" : "opacity-0",
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex gap-2">
          <Button
            className="rounded-full"
            variant={sortParam === "created-at" ? "secondary" : "outline"}
            asChild
          >
            <Link
              // href={`?area=${areaParam}&zone=${zoneParam}&sort=created-at&asc=false`}
              href={updateSearchParams("sort", "created_at")}
            >
              작성일순
            </Link>
          </Button>
          <Button
            className="rounded-full"
            variant={sortParam === "likes" ? "secondary" : "outline"}
            asChild
          >
            <Link href={updateSearchParams("sort", "likes")}>추천순</Link>
          </Button>
        </div>
      </div>
      <Button
        className="rounded-xl"
        onClick={() => setEdit(true)}
      >
        <FaPen className="mr-2 size-3" />
        리뷰 쓰기
      </Button>
    </div>
  );
};

export default ReviewContentHeader;
