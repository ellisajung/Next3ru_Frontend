// "use client";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/shadcn-ui/table";
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table";
// import { Button } from "../shadcn-ui/button";
// import { ArrowUpDown } from "lucide-react";
// import { useState } from "react";
// import * as React from "react";
// import { useReviewsStore } from "@/store/SupabaseStore";
// import { ReviewRow } from "../../../database.types";

// // const data: ReviewTable[] = [
// //   {
// //     username: "success",
// //     content: "success",
// //     created_at: "ken99@yahoo.com",
// //   },
// //   {
// //     username: "success",
// //     content: "success",
// //     created_at: "ken99@yahoo.com",
// //   },
// //   {
// //     username: "success",
// //     content: "success",
// //     created_at: "ken99@yahoo.com",
// //   },
// //   {
// //     username: "success",
// //     content: "success",
// //     created_at: "ken99@yahoo.com",
// //   },
// //   {
// //     username: "success",
// //     content: "success",
// //     created_at: "ken99@yahoo.com",
// //   },
// // ];

// // export const columns: ColumnDef<ReviewTable>[] = [
// //   {
// //     accessorKey: "username",
// //     header: "작성자",
// //     cell: ({ row }) => (
// //       <div className="capitalize">{row.getValue("username")}</div>
// //     ),
// //   },
// //   {
// //     accessorKey: "content",
// //     header: "리뷰 내용",
// //     cell: ({ row }) => (
// //       <div className="capitalize">{row.getValue("content")}</div>
// //     ),
// //   },
// //   {
// //     accessorKey: "created_at",
// //     header: ({ column }) => {
// //       return (
// //         <Button
// //           variant="ghost"
// //           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
// //         >
// //           작성 일자
// //           <ArrowUpDown className="ml-2 h-4 w-4" />
// //         </Button>
// //       );
// //     },
// //     cell: ({ row }) => (
// //       <div className="lowercase">{row.getValue("created_at")}</div>
// //     ),
// //   },
// // ];

// interface CustomReviewRow {
//   username: string;
//   content: string;
//   created_at: string;
// }

// const ReviewTable = () => {
//   const reviews = useReviewsStore((state) => state.data);

//   const [sorting, setSorting] = React.useState<SortingState>([]);
//   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
//     [],
//   );
//   const [columnVisibility, setColumnVisibility] =
//     React.useState<VisibilityState>({});
//   const [rowSelection, setRowSelection] = React.useState({});

//   const table = useReactTable({
//     reviews,
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//   });

//   const columns: ColumnDef<CustomReviewRow>[] = [
//     {
//       accessorKey: "username",
//       header: "작성자",
//       cell: ({ row }) => (
//         <div className="capitalize">{row.getValue("username")}</div>
//       ),
//     },
//     {
//       accessorKey: "content",
//       header: "리뷰 내용",
//       cell: ({ row }) => (
//         <div className="capitalize">{row.getValue("content")}</div>
//       ),
//     },
//     {
//       accessorKey: "created_at",
//       header: ({ column }) => {
//         return (
//           <Button
//             variant="ghost"
//             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//           >
//             작성 일자
//             <ArrowUpDown className="ml-2 h-4 w-4" />
//           </Button>
//         );
//       },
//       cell: ({ row }) => (
//         <div className="lowercase">{row.getValue("created_at")}</div>
//       ),
//     },
//   ];

//   return (
//     <div className="rounded-md border">
//       <Table>
//         <TableHeader>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <TableRow key={headerGroup.id}>
//               {headerGroup.headers.map((header) => {
//                 return (
//                   <TableHead key={header.id}>
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(
//                           header.column.columnDef.header,
//                           header.getContext(),
//                         )}
//                   </TableHead>
//                 );
//               })}
//             </TableRow>
//           ))}
//         </TableHeader>
//         <TableBody>
//           {table.getRowModel().rows?.length ? (
//             table.getRowModel().rows.map((row) => (
//               <TableRow
//                 key={row.id}
//                 data-state={row.getIsSelected() && "selected"}
//               >
//                 {row.getVisibleCells().map((cell) => (
//                   <TableCell key={cell.id}>
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell
//                 colSpan={columns.length}
//                 className="h-24 text-center"
//               >
//                 No results.
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default ReviewTable;
