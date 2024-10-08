import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shadcnComponents/ui/table";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "../../../shadcnComponents/ui/button";
import { Checkbox } from "../../../shadcnComponents/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../shadcnComponents/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../shadcnComponents/ui/select";
import { Input } from "../../../shadcnComponents/ui/input";
import { useDispatch, useSelector } from "react-redux";
import {
  getRelatedCourses,
  addRelatedCourseAction,
  updateCourseAction,
  addVideoAction
} from "../../../store/actions/courseAction";
import Modal from "./Modal";
import FileBase from "react-file-base64";
import {useNavigate} from 'react-router-dom'
import { addVideo } from "../../../api/index";
function DataTableContent({ data }) {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [modalIsShown, setModalIsShown] = React.useState(false);
  const [videoModalIsShown, setVideoModalIsShown] = React.useState(false);
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState();
  const [rowSelection, setRowSelection] = React.useState({});
  const [courseId, setCourseId] = React.useState(null);
  const [isValid, setIsValid] = React.useState(false);
  const [isVideoValid, setVideoIsValid] = React.useState(false);
  const [inputFields, setInputFields] = React.useState({
    title: "",
    image: "",
    theme: "",
    price: 0,
    description: "",
  });
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [file, setFile] = React.useState(null);
  React.useEffect(() => {
    if (!modalIsShown) {
      setInputFields({
        image: "",
        title: "",
        theme: "",
        price: 0,
        description: "",
      });
      setIsValid(false);
    }
    if (!videoModalIsShown) {
      setTitle("")
      setFile("")
      setImage(null)
      setDescription(null)
      setVideoIsValid(false);
    }
  }, [modalIsShown]);
  React.useEffect(() => {
    if (courseId) {
      const course = data.courses.find((course) => course._id == courseId);
      setInputFields({
        image: course?.image,
        title: course?.title,
        description: course?.description,
      });
    }
  }, [courseId])
  const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }) => {
        return (
          <div>
            <img
              src={row.getValue("image")}
              style={{ width: "200px", height: "100px" }}
            />
          </div>
        );
      },
    },
    {
      accessorKey: "title",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Title
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("title")}</div>
      ),
    },
    {
      accessorKey: "price",
      header: () => <div>Price</div>,
      cell: ({ row }) => {
        const price = parseFloat(row.getValue("price"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price);
        return <div className="font-medium">{formatted}</div>;
      },
    },
    {
      id: "options",
      enableHiding: false,
      header: () => <div>options</div>,
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  setCourseId(row.original._id);
                  setModalIsShown(true);
                }}
              >
                Update Course
              </DropdownMenuItem>
              <DropdownMenuItem>Send Delete Request</DropdownMenuItem>
              <DropdownMenuItem onClick={() => {
                  setCourseId(row.original._id);
                  setVideoModalIsShown(true);
                }}
              >
                Add Video
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  const table = useReactTable({
    data: data.courses,
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
  const cellHeight = "6rem";
  const firstCellWidth = "5%";
  const lastCellWidth = "10%";
  const showModalHandler = (e) => {
    e.preventDefault();
    setModalIsShown(true);
  };
  const checkValidity = () => {
    setInputFields((prevInputFields) => {
      if (!courseId) {
        const { title, image, theme, price, description } = prevInputFields;
        const isValid =
          title.trim().length > 0 &&
          image.trim().length > 0 &&
          theme.trim().length > 0 &&
          !isNaN(Number(price)) &&
          Number(price) > 0 &&
          description.trim().length > 0;
        setIsValid(isValid);
      } else {
        const { title, image, description } = prevInputFields;
        const isValid =
          title.trim().length > 0 &&
          image.trim().length > 0 &&
          description.trim().length > 0;
        setIsValid(isValid);
      }
      return prevInputFields; // Return the unchanged inputFields
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isValid) {
      try {
        if (!courseId) {
          dispatch(addRelatedCourseAction(inputFields));
        } else {
          dispatch(updateCourseAction(courseId, inputFields));
        }
        // After successfully updating or adding the course, fetch the updated course data
        dispatch(getRelatedCourses());
        setModalIsShown(false); // Close the modal after successful submission
        setInputFields({
          image: "",
          title: "",
          price: 0,
          theme: "",
          description: "",
        });
        setCourseId(null);
      } catch (error) {
        console.error('Error updating or adding course:', error);
      }
    }
  };
  const submitVideoHandler = async (e) => {
    e.preventDefault();
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('image', image);
        formData.append('title', title);
        formData.append('description', description);
        console.log(file)
        console.log(image)
        console.log(title)
        console.log(description)
        await addVideo(courseId, formData)
        setVideoModalIsShown(false); // Close the modal after successful submission
        setImage(null)
        setFile(null)
        setTitle("")
        setDescription("")
        setCourseId(null);
      } catch (error) {
        console.error('Error adding video:', error);
      }
  };
  
  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter Titles..."
          value={table.getColumn("title")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="outline"
          className="ml-auto"
          onClick={showModalHandler}
        >
          AddCourse&nbsp;&nbsp;&nbsp;<i className="fa fa-plus"></i>
        </Button>
      </div>
      {modalIsShown && (
        <Modal
          onClose={() => {
            setModalIsShown(false)
            setInputFields({
              image: "",
              title: "",
              price: 0,
              theme: "",
              description: "",
            });
            setCourseId(null)
          }}
          className="modal fade"
          id="createModal"
          tabindex="-1"
          aria-labelledby="createModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="createModalLabel">
                  {courseId ? "Update Course" : "New Course"}
                </h1>
              </div>
              <div className="modal-body">
                <form
                  action=""
                  method="post"
                  id="formAdd"
                  onSubmit={submitHandler}
                >
                  <div
                    className="form-floating mb-3"
                    style={{ height: "40px" }}
                  >
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) => {
                        setInputFields({ ...inputFields, image: base64 });
                        checkValidity();
                      }}
                    />
                  </div>
                  <div
                    className="form-floating mb-3"
                    style={{ height: "70px" }}
                  >
                    <Input
                      type="text"
                      id="title"
                      className="form-control"
                      name="title"
                      value={inputFields.title}
                      required
                      style={{ height: "100%" }}
                      onChange={(e) => {
                        setInputFields({
                          ...inputFields,
                          title: e.target.value,
                        });
                        checkValidity();
                      }}
                    />
                    <label for="title">Title</label>
                  </div>
                  {!courseId && (
                    <div
                      className="form-floating mb-3"
                      style={{ height: "70px" }}
                    >
                      <Select
                        onValueChange={(selected) => {
                          setInputFields({ ...inputFields, theme: selected });
                          checkValidity();
                        }}
                      >
                        <SelectTrigger style={{ height: "100%" }}>
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web development">
                            web development
                          </SelectItem>
                          <SelectItem value="UI-UX design">
                            UI-UX design
                          </SelectItem>
                          <SelectItem value="video editing">
                            video editing
                          </SelectItem>
                          <SelectItem value="marketing">marketing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  {!courseId && (
                    <div
                      className="form-floating mb-3"
                      style={{ height: "70px" }}
                    >
                      <Input
                        type="number"
                        id="price"
                        className="form-control"
                        name="price"
                        required
                        style={{ height: "100%" }}
                        onChange={(e) => {
                          setInputFields({
                            ...inputFields,
                            price: e.target.value,
                          });
                          checkValidity();
                        }}
                      />
                      <label for="price">Price</label>
                    </div>
                  )}
                  <div
                    className="form-floating mb-3"
                    style={{ height: "70px" }}
                  >
                    <Input
                      type="text"
                      value={inputFields.description}
                      id="description"
                      className="form-control"
                      name="description"
                      required
                      style={{ height: "100%" }}
                      onChange={(e) => {
                        setInputFields({
                          ...inputFields,
                          description: e.target.value,
                        });
                        checkValidity();
                      }}
                    />
                    <label for="description">Description</label>
                  </div>
                  <div className="modal-footer">
                    {!courseId && <button
                      type="submit"
                      className={`btn ${
                        isValid ? "btn-primary" : "btn-secondary"
                      }`}
                      id="confirmAddbtn"
                      name="confirmAddbtn"
                      disabled={!isValid}
                    >
                      Add
                      <i className="fas fa-plus"></i>
                    </button>}
                    {courseId && <button
                      type="submit"
                      className={`btn ${
                        isValid ? "btn-primary" : "btn-secondary"
                      }`}
                      id="confirmUpdatebtn"
                      name="confirmUpdatebtn"
                      disabled={!isValid}
                    >
                      Update
                    </button>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {videoModalIsShown && (
        <Modal
          onClose={() => {
            setVideoModalIsShown(false)
            setFile(null)
            setImage(null)
            setDescription("")
            setTitle("")
            setCourseId(null)
          }}
          className="modal fade"
          id="createModal"
          tabindex="-1"
          aria-labelledby="createModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="createModalLabel">
                  Add Video
                </h1>
              </div>
              <div className="modal-body">
                <form
                  method="post"
                  id="formVideo"
                  onSubmit={submitVideoHandler}
                  encType="multipart/form-data"
                >
                  <div
                    className="form-floating mb-3"
                    style={{ height: "40px" }}
                  >
                    <FileBase
                      type="file"
                      placeholder="video photo"
                      name="image"
                      multiple={false}
                      onDone={({ base64 }) => {
                        setImage(base64)
                      }}
                    />
                  </div>
                  <div
                    className="form-floating mb-3"
                    style={{ height: "40px" }}
                  >
                    <input
                      type="file"
                      placeholder="video file"
                      name="file"
                      onChange={(e) => {
                        setFile(e.target.files[0])
                      }}
                    />
                  </div>
                  <div
                    className="form-floating mb-3"
                    style={{ height: "70px" }}
                  >
                    <Input
                      type="text"
                      id="title"
                      className="form-control"
                      name="title"
                      required
                      style={{ height: "100%" }}
                      onChange={(e) => {
                        setTitle(e.target.value)
                      }}
                    />
                    <label for="title">Title</label>
                  </div>
                  <div
                    className="form-floating mb-3"
                    style={{ height: "70px" }}
                  >
                    <Input
                      type="text"
                      id="description"
                      className="form-control"
                      name="description"
                      style={{ height: "100%" }}
                      onChange={(e) => {
                        setDescription(e.target.value)
                      }}
                    />
                    <label for="description">Description</label>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="submit"
                      className={`btn btn-primary`}
                      id="confirmAddbtn"
                      name="confirmAddbtn"
                    >
                      Add
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      )}
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
                        width:
                          index === 0
                            ? firstCellWidth
                            : index === totalColumns - 1
                            ? lastCellWidth
                            : columnWidth,
                        height: cellHeight,
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
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
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
}

function DataTableDemo() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getRelatedCourses());
  }, [dispatch]);
  const data = useSelector((state) => state.courseReducer.relatedCourses);

  if (!data || !data.courses) {
    return <div>Loading...</div>;
  }
  return <DataTableContent data={data} />;
}
export default DataTableDemo;
