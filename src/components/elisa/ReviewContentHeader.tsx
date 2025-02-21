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
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchSeatsData } from "@/app/actions/seats";

interface ReviewContentHeaderProps {
  // setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  updateSearchParams: (key: string, value: string) => void;
}

const ReviewContentHeader = ({
  updateSearchParams,
}: ReviewContentHeaderProps) => {
  // 좌석 콤보박스 로직
  const [zones, setZones] = useState([]);

  const [areaNameOpen, setAreaNameOpen] = useState(false);
  const [areaNameValue, setAreaNameValue] = useState("");
  const [zoneOpen, setZoneOpen] = useState(false);
  const [zoneValue, setZoneValue] = useState("");

  const { data: seats, error } = useQuery({
    queryKey: ["seats"],
    queryFn: fetchSeatsData,
  });

  useEffect(() => {
    setZoneValue("");
    if (areaNameValue) {
      const zones = seats?.find(
        (seat: any) => seat.area_name === areaNameValue,
      )?.zones;
      setZones(zones);
    } else {
      setZoneValue("");
      setZones([]);
    }
  }, [areaNameValue]);

  // 여기부터
  const sortParam = useSearchParams().get("sort");

  // const urlSearchParams = new URLSearchParams(searchParams + "");
  // const updateSearchParams = (key: string, value: string) => {
  //   urlSearchParams.set(key, value);
  //   return urlSearchParams + "";
  // };

  // console.log("searchParams: ", searchParams);

  console.log("areaNameValue: ", areaNameValue);

  return (
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
                ? seats?.find((seat: any) => seat.area_name === areaNameValue)
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
                  {seats?.map((seat: any, i: number) => (
                    <CommandItem
                      key={i}
                      value={seat.area_name}
                      onSelect={(currentValue: string) => {
                        if (currentValue === areaNameValue) {
                          setAreaNameValue("");
                          updateSearchParams("area", "");
                        } else {
                          setAreaNameValue(currentValue);
                          updateSearchParams("area", currentValue);
                        }

                        setAreaNameOpen(false);
                        // console.log("currentValue: ", currentValue);
                      }}
                    >
                      {seat.area_name}
                      <Check
                        className={cn(
                          "ml-auto",
                          seat.area_name === areaNameValue
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
                ? zones?.find((zone) => zone === zoneValue)
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
                  {zones?.map((zone, i) => (
                    <CommandItem
                      key={i}
                      value={zone}
                      onSelect={(currentValue) => {
                        if (currentValue === zoneValue) {
                          setZoneValue("");
                          updateSearchParams("zone", "");
                        } else {
                          setZoneValue(currentValue);
                          updateSearchParams("zone", currentValue);
                        }

                        setZoneOpen(false);
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
          variant={sortParam === "created_at" ? "outline" : "secondary"}
          onClick={() => updateSearchParams("sort", "created_at")}
        >
          작성일순
        </Button>
        <Button
          className="rounded-full"
          variant={sortParam === "likes" ? "outline" : "secondary"}
          onClick={() => updateSearchParams("sort", "likes")}
        >
          추천순
        </Button>
      </div>
    </div>
  );
};

export default ReviewContentHeader;
