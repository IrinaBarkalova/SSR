import React from "react";

import { useReposContext } from "@App/App";
import { StudentBidsApiModel } from "@models/bid";
import { Card } from "antd";
type Props = {
  bids: StudentBidsApiModel;
};
const StudentBids: React.FC<Props> = ({ bids }: Props) => {
  const repoContext = useReposContext();

  const handleClick = React.useCallback(
    (bidId: number) => {
      repoContext.ssr(bidId, repoContext.id, repoContext.token).then((r) =>
        // eslint-disable-next-line no-console
        console.log(r.success, "Подтверждение заявки")
      );
    },
    [repoContext]
  );
  return (
    <div>
      {bids.bids.map((w) => (
        <Card
          title={`${w.work.name}`}
          bordered={true}
          style={{ width: "auto" }}
        >
          <p>Статус: {w.status}</p>
          <p>Описание работы: {w.work.description}</p>
          <p>
            Преподаватель: {w.supervisor.firstName} {w.supervisor.lastName}
          </p>
          <p>Почта преподавателя: {w.supervisor.email}</p>
          {w.status === "accepted" && (
            <button onClick={(e) => handleClick(w.id)}>
              Подтвердить заявку
            </button>
          )}
        </Card>
      ))}
    </div>
  );
};

export default React.memo(StudentBids);
