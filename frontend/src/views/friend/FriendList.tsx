import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table,
  Label,
} from "reactstrap";
import Loader from "../../components/Loader";
import {
  NoRecordsFound,
  TableLoadingText,
} from "../../components/TableLoadingText";
import { RequestService } from "../../services/api.service";
import { toast } from "react-toastify";
import NavBar from "../NavBar";
import { useLocation } from "react-router-dom";
import { Check, X } from "react-feather";
import { IUser } from "../../models/user";

const FriendList = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];

  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [dataList, setDataList] = useState<IUser[]>([]);
  let slug: string = pathName;
  useEffect(() => {
    getFriendList();
  }, [pathName]);

  const getFriendList = async () => {
    setShowLoader(true);
    try {
      const { data } = await RequestService.getList(slug);
      
      setDataList(
        data.data?.friends || data.data?.recieveRequest || data.data?.sentRequest || []
      );
      // sample data to test

      // setDataList([
      //   {
      //     email: "sahil@ymail.com",
      //     firstName: "Sahil",
      //     id: "62b056abac379e07762c68d7",
      //     lastName: "Pathan",
      //     userName: "Mr_Sahil",
      //   },
      //   {
      //     email: "san@gmail.com",
      //     firstName: "Sanjay",
      //     id: "62b056deac379e07762c68d8",
      //     lastName: "Bhawsar",
      //     userName: "San",
      //   },
      //   {
      //     email: "rakesh@ymail.com",
      //     firstName: "Rakesh",
      //     id: "62b05709ac379e07762c68d9",
      //     lastName: "Maurya",
      //     userName: "Rakesh043",
      //   },
      // ]);
    } catch (error: any) {
      setDataList([]);
      toast.error(error.message);
    } finally {
      setShowLoader(false);
    }
  };

  const onChangeRequest = async (id: any, reqSlug: string) => {
    setShowLoader(true);
    try {
      console.log("Before",dataList)
      dataList.splice(id, 1);
      console.log("After",dataList)

      setDataList(dataList);
      await RequestService.edit(id, reqSlug);
      if (reqSlug === "A") {
        toast.success("Request accepted");
      }
      toast.error("Request decline");

      // getFriendList();
      //   setDataList(data || []);
    } catch (error: any) {
      setDataList([]);
      toast.error(error.message);
    } finally {
      setShowLoader(false);
    }
  };
  let listItems;
  if (dataList.length > 0) {
    listItems = dataList.map((element, index) => {
      return (
        <tr key={index}>
          <td>{element.firstName}</td>
          <td>{element.lastName}</td>
          <td>{element.userName}</td>
          <td>{element.email}</td>
          {slug === "recieve-request" ? (
            <td className="text-center">
              {" "}
              <Check
                style={{ color: "#007bff", marginRight: "10px" }}
                className="cursor-pointer"
                size={30}
                onClick={() => onChangeRequest(element.id, "A")}
              />
              <X
                style={{ color: "#ff0000" }}
                className="cursor-pointer"
                size={30}
                onClick={() => onChangeRequest(element.id, "D")}
              />
            </td>
          ) : slug === "sent-request" ? (
            <td className="text-center">
              {" "}
              <Label
                style={{ color: "#007bff" }}
                className="cursor-pointer"
                size="30"
              >
                Requested...
              </Label>
            </td>
          ) : (
            ""
          )}
        </tr>
      );
    });
  } else {
    listItems = <NoRecordsFound colSpan={8} />;
  }
  return (
    <>
      <NavBar />
      <Card className="col-lg-10 list_wrapper m-5 row justify-content-center">
        {showLoader && <Loader />}
        <CardHeader className="table-title">
          <CardTitle>
            {pathName === "sent-request"
              ? "Sent Request"
              : pathName === "recieve-request"
              ? "Recieve Request"
              : "Friends"}
          </CardTitle>
        </CardHeader>
        <hr />
        <CardBody>
          <Table className="table-fill w-100">
            <thead>
              <tr className="table-active">
                <th className="cursor-pointer">First Name</th>
                <th className="cursor-pointer">Last Name</th>
                <th className="cursor-pointer">User Name</th>
                <th>Email</th>
                {slug !== "friends" ? (
                  <th className="cursor-pointer">Action</th>
                ) : (
                  ""
                )}
              </tr>
            </thead>
            <tbody>
              {showLoader ? <TableLoadingText colSpan={8} /> : listItems}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
};

export default FriendList;
