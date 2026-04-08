export const MainSkeleton = () => {
    const chat = [
      {
        role: "user",
        text: "hello there",
      },
      {
        role: "assistant",
        text: "hello there! How can I help you today?",
      },
      {
        role: "user",
        text: "I want to create a new workflow",
      },
    ];
  
    const UserMessage = ({ text }: { text: string }) => {
      return (
        <div className="w-fit ml-auto flex justify-end items-start gap-2 bg-blue-500 rounded-tr-full rounded-tl-full rounded-bl-full rounded-br-lg p-2">
          <p className="text-sm text-white">{text}</p>
          <div className="rounded-full size-6 bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>
      );
    };
    const AIMessage = ({ text }: { text: string }) => {
      return (
        <div className="flex w-fit mr-auto justify-start items-start gap-2 bg-gray-100 rounded-tr-full rounded-tl-full rounded-bl-lg rounded-br-full  p-2">
          <div className="rounded-full size-6 shrink-0 bg-gradient-to-r from-green-500 to-emerald-500" />
          <p className="text-sm text-black">{text}</p>
        </div>
      );
    };
    return (
      <div className="h-full relative w-full px-12 flex flex-col gap-4 z-20">
        <input
          type="text"
          placeholder="Type your message here..."
          className="w-[calc(100%-4rem)] h-10 bg-white border border-neutral-200 mx-auto  absolute bottom-4 inset-x-0 px-4 text-xs rounded-md placeholder-neutral-600"
        />
        {chat.map((message, index) => {
          return message.role === "user" ? (
            <UserMessage text={message.text} />
          ) : (
            <AIMessage text={message.text} />
          );
        })}
      </div>
    );
  };
  