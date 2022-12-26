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
import { IUser } from "../../models/user";

const SuggestionList = () => {
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [dataList, setDataList] = useState<IUser[]>([]);

  useEffect(() => {
    getSuggestionList();

    // to refresh suggestion list evry one minute
    setInterval(() => {
      getSuggestionList();
      // console.log('Someone Scheduled me to run every minute');
    }, 60000);
  }, []);

  const getSuggestionList = async () => {
    setShowLoader(true);
    try {
      const { data } = await RequestService.getSuggestionList();
      setDataList(data || []);
      // console.log(sentRequest)
      // console.log("requestList",requestList)
    } catch (error: any) {
      setDataList([]);
      toast.error(error.message);
    } finally {
      setShowLoader(false);
    }
  };

  const onSentRequest = async (id: any, reqSlug: string) => {
    setShowLoader(true);
    try {
      dataList.splice(id, 1);
      setDataList(dataList);
      await RequestService.edit(id, reqSlug);
      toast.success("Request sent");
      getSuggestionList();
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
    listItems = dataList.map((element) => {
      return (
        <tr key={element.id}>
          <td>{element.firstName}</td>
          <td>{element.lastName}</td>
          <td>{element.userName}</td>
          <td>{element.email}</td>
          <td className="text-center">
            {" "}
            <Label
              style={{ color: "#007bff" }}
              className="cursor-pointer"
              size="30"
              onClick={() => onSentRequest(element.id, "R")}
            >
              Add Friend
            </Label>
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
          <CardTitle>Suggestion</CardTitle>
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
                <th className="cursor-pointer">Action</th>
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

export default SuggestionList;
