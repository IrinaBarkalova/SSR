import React from "react";

import { useReposContext } from "@App/App";
import { SupervisorBidModel } from "@models/bid";
type Props = {
  bid: SupervisorBidModel;
};

const SupervisorBidTile: React.FC<Props> = ({ bid }: Props) => {
  const repoContext = useReposContext();
  const [status, setStatus] = React.useState("");

  const handleClickOK = React.useCallback(() => {
    repoContext
      .resolveBid(bid.id, true, repoContext.id, repoContext.token)
      .then((r) => {
        // eslint-disable-next-line no-console
        console.log(r.success, "bid_accept");
        setStatus(r.data.new_status);
      });
  }, [repoContext, bid.id]);
  const handleClickNot = React.useCallback(() => {
    repoContext
      .resolveBid(bid.id, false, repoContext.id, repoContext.token)
      .then((r) => {
        // eslint-disable-next-line no-console
        console.log(r.success, "bid_rejected");
        setStatus(r.data.new_status);
      });
  }, [repoContext, bid.id]);
  return (
    <div>
      У вас есть студент {bid.student.lastName} с работой {bid.work.name},
      {(status === "" && <div>со статусом {bid.status}</div>) || (
        <div>со статусом {status}</div>
      )}
      {status !== "accepted" &&
        status !== "rejected" &&
        bid.status !== "accepted" &&
        bid.status !== "rejected" && (
          <>
            <button onClick={handleClickOK}>Принять</button>
            <button onClick={handleClickNot}>Отказать</button>
          </>
        )}
    </div>
  );
};

export default React.memo(SupervisorBidTile);
