import {FC, ReactNode, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import Auth from "../components/Auth";

export const AdminAuthProvider: FC<{ children: ReactNode }> = ({children}) => {
    // localStorage.removeItem('ADMIN_TOKEN')
    const token = localStorage.getItem('ADMIN_TOKEN')

    const [ACCESS_TOKEN, setACCESS_TOKEN] = useState<string>(token)

    const auth = (token: string)=> {
        setACCESS_TOKEN(token);
        localStorage.setItem('ADMIN_TOKEN', token);
    }

    if (token) {
        return <>{children}</>
    }
    return <Auth onOk={(token)=> auth(token)}/>
}