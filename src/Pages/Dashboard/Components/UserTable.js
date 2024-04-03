import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shadcnComponents/ui/table";
import { CaretSortIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "../../../shadcnComponents/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../shadcnComponents/ui/select";
import { Input } from "../../../shadcnComponents/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedCourses } from "../../../store/actions/courseAction";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../shadcnComponents/ui/avatar";
import { getCourseStudentsAction } from "../../../store/actions/courseAction";
import Anonyme from "../../../img/anonyme.jpg"
const columns = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      return (
        <div className="d-flex justify-content-center align-items-center">
          <Avatar>
            <AvatarImage src={row.getValue('image') !== '' ? row.getValue('image') : Anonyme } />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          firstName
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("firstName")}</div>
    ),
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          lastName
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("lastName")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
];

const DataTableContent = React.memo(({ selects, students, selectedCourse, setSelectedCourse }) => {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState();
  const [rowSelection, setRowSelection] = React.useState({});
  const [filteredStudents, setFilteredStudents] = React.useState(students);
  React.useEffect(() => {
    if (selectedCourse && selectedCourse !== "all") {
      const filtered = students.filter(user =>
        user.classes.courses.find(course => course._id === selectedCourse)
      );
      setFilteredStudents(filtered);
    } else {
      setFilteredStudents(students);
    }
  }, [selectedCourse, students]);
  const table = useReactTable({
    data: filteredStudents,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  const totalColumns = table.getHeaderGroups()[0].headers.length;
  const columnWidth = `${100 / totalColumns}%`;
  const firstCellWidth = "10%";
  return (
    <div className="w-full">
      <div className="flex justify-between py-4">
        <Input
          placeholder="Filter emails..."
          value={table.getColumn("email")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <div>
          <Select
            onValueChange={(selected) => {
              setSelectedCourse(selected);
            }}
          >
            <SelectTrigger className="w-[200px] flex justify-center">
              <SelectValue placeholder="All"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" className="flex justify-center">All</SelectItem>
              {selects.length &&
                selects.map((course) => (
                  <SelectItem
                    className="flex justify-center"
                    value={course._id}
                  >
                    {course.title}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} style={{ textAlign: "center" }}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell, index) => (
                    <TableCell
                      key={cell.id}
                      style={{
                        width: index === 0 ? firstCellWidth : columnWidth,
                        textAlign: "center",
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length} row(s).
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
})

function UserTable() {
  const dispatch = useDispatch();
  const [selectedCourse, setSelectedCourse] = React.useState("");
  React.useEffect(() => {
    dispatch(getRelatedCourses());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(getCourseStudentsAction())
  }, [dispatch]);
  const students = useSelector((state) => state.courseReducer.students);
  const courses = useSelector((state) => state.courseReducer.relatedCourses);
  if (!courses || !courses.courses) {
    return <div>Loading...</div>;
  }
  return <DataTableContent selects={courses.courses} students={students} selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} />;
}
export default UserTable;
