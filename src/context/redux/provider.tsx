"use client"
import { Provider } from "react-redux"
import { store } from "./store"


const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
   return (
      <Provider store={store as any}>
         {children}
      </Provider>
   )
}

export default ReduxProvider;