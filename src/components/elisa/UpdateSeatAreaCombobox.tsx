"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "../shadcn-ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../shadcn-ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../shadcn-ui/command";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useUpdateReviewStore } from "@/store/ReviewStore";
import { fetchSeatsData } from "@/app/actions/seats";
import { useQuery } from "@tanstack/react-query";

const UpdateSeatAreaCombobox = ({ reviewInfo }: any) => {
  const [zones, setZones] = useState([]);

  const [areaNameOpen, setAreaNameOpen] = useState(false);
  const [zoneOpen, setZoneOpen] = useState(false);

  const areaName = useUpdateReviewStore((state) => state.areaName);
  const setAreaName = useUpdateReviewStore((state) => state.setAreaName);
  const zone = useUpdateReviewStore((state) => state.zone);
  const setZone = useUpdateReviewStore((state) => state.setZone);

  const { data, error } = useQuery({
    queryKey: ["seats"],
    queryFn: fetchSeatsData,
  });

  useEffect(() => {
    setAreaName(reviewInfo.area_name);
    setZone(reviewInfo.zone);
  }, [reviewInfo]);

  useEffect(() => {
    if (areaName) {
      const zones = data?.find(
        (seat: any) => seat.area_name === areaName,
      )?.zones;
      setZones(zones);
      // if (!zone) setZone("");
    } else {
      setZones([]);
      setZone("");
    }
  }, [areaName]);

  return (
    <>
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
            {areaName
              ? data?.find((seat: any) => seat.area_name === areaName)
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
                {data?.map((seat: any, i: number) => (
                  <CommandItem
                    key={i}
                    value={seat.area_name}
                    onSelect={(currentValue: string) => {
                      setAreaName(
                        currentValue === areaName ? "" : currentValue,
                      );
                      setAreaNameOpen(false);

                      console.log("hhhh", currentValue, areaName);
                    }}
                  >
                    {seat.area_name}
                    <Check
                      className={cn(
                        "ml-auto",
                        areaName === seat.area_name
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
            {zone
              ? zones?.find((zoneValue) => zoneValue === zone)
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
                {zones?.map((zoneValue, i) => (
                  <CommandItem
                    key={i}
                    value={zoneValue}
                    onSelect={(currentValue) => {
                      setZone(currentValue === zone ? "" : currentValue);
                      setZoneOpen(false);
                    }}
                  >
                    {zoneValue}
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
    </>
  );
};

export default UpdateSeatAreaCombobox;
