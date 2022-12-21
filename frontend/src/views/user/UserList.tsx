import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye } from "react-feather";
import { Card, CardHeader, CardTitle, CardBody, Table } from "reactstrap";
import Loader from "../../components/Loader";
import {
  NoRecordsFound,
  TableLoadingText,
} from "../../components/TableLoadingText";
import { UserService } from "../../services/api.service";
import { toast } from "react-toastify";
import NavBar from "../NavBar";
import { IUser } from "../../models/user";

const UserList = () => {
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [dataList, setDataList] = useState<IUser[]>([]);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    setShowLoader(true);
    try {
      const { data }: any = await UserService.getList();
      setDataList(data.data || []);
    } catch (error: any) {
      setDataList([]);
      toast.error(error.message);
    } finally {
      setShowLoader(false);
    }
  };

  let listItems;
  if (dataList.length > 0) {
    listItems = dataList.map((element) => {
      return (
        <tr key={element.id}>
          <td>{element.firstName}</td>
          <td>{element.lastName}</td>
          <td>{element.userName}</td>
          <td>{element.email}</td>
          <td className="text-center">
            {" "}
            <Eye
              style={{ color: "#007bff" }}
              className="cursor-pointer"
              size={30}
              onClick={() => navigate(`/mutual/${element.id}`)}
            />
          </td>
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
          <CardTitle>User List</CardTitle>
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
                <th className="cursor-pointer">Mutual</th>
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

export default UserList;
