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
import { useSeatsStore } from "@/store/SeatsStore";
import { cn } from "@/lib/utils";

const SeatAreaCombobox = () => {
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
      setZoneValue("");
    } else {
      setZones([]);
      setZoneValue("");
    }
  }, [areaNameValue]);

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
                        currentValue === areaNameValue ? "" : currentValue,
                      );
                      setAreaNameOpen(false);

                      console.log("hhhh", currentValue, areaNameValue);
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
    </>
  );
};

export default SeatAreaCombobox;
