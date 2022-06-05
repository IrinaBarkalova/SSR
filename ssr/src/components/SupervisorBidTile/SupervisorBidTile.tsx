import React from "react";

import { useReposContext } from "@App/App";
import { SupervisorBidModel } from "@models/bid";
type Props = {
  bid: SupervisorBidModel;
};

const SupervisorBidTile: React.FC<Props> = ({ bid }: Props) => {
  const repoContext = useReposContext();

  const handleClickOK = React.useCallback(() => {
    repoContext
      .resolveBid(bid.id, true, repoContext.id, repoContext.token)
      .then((r) =>
        // eslint-disable-next-line no-console
        console.log(r.success, "bid_accept")
      );
  }, [repoContext]);
  const handleClickNot = React.useCallback(() => {
    repoContext
      .resolveBid(bid.id, false, repoContext.id, repoContext.token)
      .then((r) =>
        // eslint-disable-next-line no-console
        console.log(r.success, "bid_accept")
      );
  }, [repoContext]);
  return (
    <div>
      у вас есть студент {bid.student.lastName} с работой {bid.work.name}
      {bid.status !== "accepted" && bid.status !== "rejected" && (
        <>
          <button onClick={handleClickOK}>Принять</button>
          <button onClick={handleClickNot}>Отказать</button>
        </>
      )}
    </div>
  );
};

export default SupervisorBidTile;
