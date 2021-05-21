import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Generic HTTP data service to be used by all other services
 */
@Injectable({
    providedIn: 'root'
})
export class HttpGenericService {

    constructor(private http: HttpClient) {

    }
    /**
     * Get List Of Data From Server 
     * @param resourceName 
     */
    fetchAll(resourceName: string) {
        return this.http.get<any[]>(resourceName);
    }
    /**
     * Get object From Server 
     * @param resourceName 
     */
    fetchSingle(resourceName: string) {
        return this.http.get<any>(resourceName);
    }
    /**
     * Get List of data From Server with promise
     * @param resourceName 
     */
    fetchAllPromise(resourceName: string): Promise<any[]> {
        return this.http.get(resourceName).toPromise().then();
    }

    /**
     * Post Data To Server Insert/Edit
     * @param resourceName Controller Name + Method Name
     * @param data Actual Data
     */
    postData(resourceName: string, data: any) {
       // data = JSON.stringify(data);
        return this.http.post<any>(resourceName, data);
    }

    /**
   * Post Data To Server Insert/Edit
   * @param resourceName Controller Name + Method Name
   * @param data Actual Data
   */
    updateData(resourceName: string, data: any) {
       // data = JSON.stringify(data);
        return this.http.put(resourceName, data);
    }
    /**
     * Post Data To Server Using Promise Insert/Edit
     * @param resourceName Controller Name + Method Name
     * @param data Actual Data
     */
    postDataPromise(resourceName: string, data: any): Promise<any> {
       // data = JSON.stringify(data);
        return this.http.post(resourceName, data).toPromise().then();
    }
    /**
     * Convert Object to Query String 
     * @param resourceName 
     */

     downLoadFile(resourceName: string, data: any, responseType: any){
        return this.http.post(resourceName, data, {responseType:responseType});
     }
    private objectToQueryString(obj: any): string {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    }
}
