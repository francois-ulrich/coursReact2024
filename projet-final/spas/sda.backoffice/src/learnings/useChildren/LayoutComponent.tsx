import { ReactNode } from "react";

type PropsWithChildren<P = unknown> = P & { children: ReactNode };
// type MyPropsWithChildren = PropsWithChildren & { item: string };

export const LayoutComponent = (props: PropsWithChildren) => {
  return (
    <>
      <h1>Layout</h1>
      <div>{props.children}</div>
    </>
  );
};
