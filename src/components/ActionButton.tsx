import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  setSelectedPage: (value: string) => void;
}

const ActionButtonComponent = ({ children, setSelectedPage }: Props) => {
  return (
    <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500">
      <Link href={`#contactus`} onClick={() => setSelectedPage("contactus")}>
        {children}
      </Link>
    </button>
  );
};

export default ActionButtonComponent;
