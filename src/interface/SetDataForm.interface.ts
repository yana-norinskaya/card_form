import {Dispatch} from "react";

export interface IForm{
    setName: Dispatch<string>,
    setNumber: Dispatch<string>,
    setMonth: Dispatch<string>,
    setYear: Dispatch<string>,
    setCvcName: Dispatch<string>
    setSuccess: Dispatch<boolean>
}