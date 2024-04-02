import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const BubbleShooter: React.FC = () => {
  const [messages, setMessages] = useState<JSX.Element[]>([]);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [shoot, setShoot] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isScrolling) {
      interval = setInterval(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          <span className="bubble"></span>,
        ]);
      }, 500);
    }
  }, [isScrolling]);

  return (
    <div className="container.bubble">
      <AlertDialog>
        <AlertDialogTrigger>
          <span onClick={() => setIsScrolling(true)}>Open</span>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <div className="game-window">
            <h3 className="score">0</h3>
            <div>
              {messages
                .filter((bulle, index) => {
                  if (shoot) {
                    return bulle;
                  }
                })
                .map((message, index) => (
                  <span
                    key={index}
                    className="bubble"
                    onClick={() => setShoot(false)}
                  >
                    {message}
                  </span>
                ))}
            </div>
          </div>
          <AlertDialogCancel onClick={() => setIsScrolling(false)}>
            Close
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default BubbleShooter;
