import React, { useEffect, useState } from "react";
import { ArrowLeft } from "react-feather";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table,
} from "reactstrap";
import Loader from "../../components/Loader";
import {
  NoRecordsFound,
  TableLoadingText,
} from "../../components/TableLoadingText";
import { UserService } from "../../services/api.service";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { IUser } from "../../models/user";

const MutualList = () => {
    type ID = {
        id: string
      };
  const navigate = useNavigate();
  const { id } = useParams<ID>();
  
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [dataList, setDataList] = useState<IUser[]>([]);

  useEffect(() => {
    getMutualList();
  }, []);

  const getMutualList = async () => {
    setShowLoader(true);
    try {
      const { data } = await UserService.getByID(id);
      setDataList(data || []);
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
        </tr>
      );
    });
  } else {
    listItems = <NoRecordsFound colSpan={8} />;
  }
  return (
    <Card className="col-lg-10 list_wrapper m-5 row justify-content-center">
      {showLoader && <Loader />}
      <CardHeader className="table-title">
        <CardTitle>Mutual List</CardTitle>
        <div>
          <Button outline color="warning" onClick={() => navigate("/user")}>
            <ArrowLeft size={16} /> Back
          </Button>
        </div>
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
            </tr>
          </thead>
          <tbody>
            {showLoader ? <TableLoadingText colSpan={8} /> : listItems}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default MutualList;
