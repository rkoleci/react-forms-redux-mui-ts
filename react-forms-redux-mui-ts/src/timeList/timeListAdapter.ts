import { createEntityAdapter } from "@reduxjs/toolkit";
import { UITimeList } from "../types";


export const timeListAdapter = createEntityAdapter<UITimeList.TimeList, string>({
    selectId: (i) => i.id
})