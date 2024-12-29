"use client";

import { ReactNode, useEffect, useState } from "react";

type Props = { children: ReactNode; modal?: ReactNode };
export default function BeforeLoginLayout({ children, modal }: Props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      비포 로그인 레이아웃
      {isClient && modal}
      {children}
    </div>
  );
}
