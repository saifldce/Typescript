import React from "react";

type Props = {
  colSpan: number;
};
export const TableLoadingText: React.FC<Props> = (props) => {
  const { colSpan } = props;
  return (
    <tr>
      <td colSpan={colSpan}>Loading Data....</td>
    </tr>
  );
};

export const NoRecordsFound: React.FC<Props> = (props) => {
  const { colSpan } = props;
  return (
    <tr>
      <td colSpan={colSpan}>No Records Found</td>
    </tr>
  );
};
