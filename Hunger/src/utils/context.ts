import React, { createContext,SetStateAction ,Dispatch} from "react";

type FilterContextProps = {
  onlyVeg:boolean,
  setOnlyVeg:Dispatch<SetStateAction<boolean>>
};

type SearchContextProps = {
  open:boolean,
  setOpen:Dispatch<SetStateAction<boolean>>
};

type LoginContextProps = {
  show:boolean,
  setShow:Dispatch<SetStateAction<boolean>>
};
type UserLoggedContextProps={
  loggedUser:{email:string,name:string}|null,
  setLoggedUser:Dispatch<SetStateAction<{email:string,name:string}|null>>
}

export const filterContext = createContext<FilterContextProps>({
  onlyVeg: false,
  setOnlyVeg:()=>{}
});

export const searchContext = createContext<SearchContextProps>({
  open: false,
  setOpen:()=>{}
});

export const loginContext=createContext<LoginContextProps>({
  show:false,
  setShow:()=>{}
})

export const userLoggedContext=createContext<UserLoggedContextProps>({
  loggedUser:null,
  setLoggedUser:()=>{}
})
