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
import { useSeatsStore } from "@/store/SupabaseStore";
import { Badge, badgeVariants } from "../shadcn-ui/badge";

const ReviewTableHeader = ({ setEdit }: any) => {
  const seats = useSeatsStore((state) => state.data);
  const [zones, setZones] = useState([]);

  const [areaNameOpen, setAreaNameOpen] = useState(false);
  const [areaNameValue, setAreaNameValue] = useState("");
  const [zoneOpen, setZoneOpen] = useState(false);
  const [zoneValue, setZoneValue] = useState("");

  useEffect(() => {
    if (areaNameValue) {
      const zones = seats.find(
        (seat: any) => seat.area_name === areaNameValue,
      )?.zones;
      setZones(zones);
    }
  }, [areaNameValue]);

  //   const zonesd = seats.find(
  //     (seat: any) => seat.area_name === areaNameValue,
  //   )?.zones;

  //   console.log("kkk:", zonesd);

  //   console.log(
  //     "seats: ",
  //     seats,
  //     "zones: ",
  //     zones,
  //     "areaNameValue: ",
  //     areaNameValue,
  //   );

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
            <PopoverContent className="w-[180px] p-0">
              <Command>
                <CommandInput placeholder="구역 이름 검색..." />
                <CommandList>
                  <CommandEmpty>일치하는 구역 이름이 없습니다.</CommandEmpty>
                  <CommandGroup>
                    {seats.map((seat: any) => (
                      <CommandItem
                        key={seat.id}
                        value={seat.area_name}
                        onSelect={(currentValue) => {
                          setAreaNameValue(
                            currentValue === areaNameValue ? "" : currentValue,
                          );
                          setAreaNameOpen(false);
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
            <PopoverContent className="w-[180px] p-0">
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
                            currentValue === zoneValue ? "" : currentValue,
                          );
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
            variant="outline"
          >
            작성일순
          </Button>
          <Button
            className="rounded-full"
            variant="outline"
          >
            추천순
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

export default ReviewTableHeader;
