
// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import { ReactNode } from "react";

// Define the type for the props
interface ProviderProps {
    children: ReactNode;
  }

export default function Provider({children}: ProviderProps) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}