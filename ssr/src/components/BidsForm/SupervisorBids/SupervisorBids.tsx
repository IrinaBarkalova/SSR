import React from "react";

import SupervisorBidTile from "@components/SupervisorBidTile";
import { SupervisorBidsModel } from "@models/bid";
import { Space } from "antd";

type Props = {
  bids: SupervisorBidsModel;
};
const SupervisorBids: React.FC<Props> = ({ bids }: Props) => {
  return (
    <div>
      <Space direction="vertical">
        {bids.bids.map((bid) => (
          <SupervisorBidTile key={bid.id} bid={bid} />
        ))}
      </Space>
    </div>
  );
};

export default SupervisorBids;
