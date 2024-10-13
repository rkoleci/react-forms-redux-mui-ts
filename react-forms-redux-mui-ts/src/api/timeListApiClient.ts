import { UITimeList } from "../types";

export namespace TimeListApiClient {

    export interface TimeListRequest {
        timeList: UITimeList.TimeList[]
    }

    export interface TimeListResponse {
        timeList: UITimeList.TimeList[]
    }

    export const updateTimeListReqest = async(request:  TimeListRequest): Promise<TimeListApiClient.TimeListResponse> => {
        const url = ``;
    
       
      return {
        timeList: []
      }
      
      }
}