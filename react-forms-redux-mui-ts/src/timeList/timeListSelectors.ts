import { AppState } from "../store";
import { timeListAdapter } from "./timeListAdapter";

export namespace UITimeListSelectors {

    export const { selectEntities, selectAll, selectById } = timeListAdapter?.getSelectors((state: AppState) => state?.timeList);

}