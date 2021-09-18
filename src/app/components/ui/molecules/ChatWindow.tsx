import React, { RefObject, useEffect, useRef } from "react";
import { formatDistanceToNow } from "date-fns";
import { ChatWindowWrapper } from "../../styles/ChatWindow.style";
import useGetCollection from "../../../api/useGetCollection";
import { Backdrop, Spinner } from "../../styles/Backdrop.style";

export default function ChatWindow() {
  const { error, documents } = useGetCollection("messages");
  const messageRef = useRef(null) as RefObject<HTMLDivElement> | null;

  useEffect(() => {
    console.log(documents);
    messageRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [documents]);

  return (
    <ChatWindowWrapper>
      {error && <div>{error}</div>}
      {documents.length > 0 && (
        <div className="messages">
          {documents.map((doc) => (
            <div key={doc.id} className="single" ref={messageRef}>
              <span className="created-at">
                {doc.createdAt
                  ? formatDistanceToNow(doc.createdAt.toDate())
                  : "now"}
              </span>
              <span className="name">{doc.name}</span>
              <span className="message">{doc.message}</span>
            </div>
          ))}
        </div>
      )}
      {documents.length === 0 && !error && (
        <Backdrop>
          <Spinner />
        </Backdrop>
      )}
    </ChatWindowWrapper>
  );
}
