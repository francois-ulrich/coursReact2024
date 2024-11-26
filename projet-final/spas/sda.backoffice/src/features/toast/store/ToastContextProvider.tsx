import { PropsWithChildren, useRef } from "react";
import { MutableToastContext, ToastContext } from "./toastContext";
import { Toast, ToastMessageOptions } from "primereact/toast";

export const ToastContextProvider = (props: PropsWithChildren) => {
  const toast = useRef<Toast>(null);

  const show = (options: ToastMessageOptions) => {
    toast.current?.show(options);
  };

  const context: MutableToastContext = {
    show,
  };

  return (
    <ToastContext.Provider value={context}>
      {props.children}
      <Toast ref={toast} />
    </ToastContext.Provider>
  );
};
