import { useState, useEffect } from "react";
import { Status } from "../enums/Status";
import { SUGGESTION_API } from "../utils/constants";
import { useAppDispatch } from "../utils/store";
import { addSuggestions } from "../utils/slices/suggestionSlice";

export const useSuggestion = (query: string) => {
  const [status, setStatus] = useState(Status.pending);
  const dispatch=useAppDispatch()
  const fetchSuggestion = async () => {
    try {
      const data = await fetch(SUGGESTION_API(query));
      const result = await data.json();
      dispatch(addSuggestions({suggestions:result?.statusCode?[{text:`No Result Found for ${query}`}]:result?.data?.suggestions}))
      setStatus(Status.fulfiled);
    } catch (error) {
      setStatus(Status.rejected);
    }
  };

  useEffect(() => {
    setStatus(Status.pending)
    let timer: number;
    if (query) timer = setTimeout(() => fetchSuggestion(), 300);
    return () => clearTimeout(timer);
  }, [query]);

  return status
};
