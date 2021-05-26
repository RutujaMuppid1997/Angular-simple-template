import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { utf8Encode } from '@angular/compiler/src/util';
/**
 * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
 */
@Injectable({
	providedIn: 'root' 
})
export class ApiHeaderInterceptorApiHeaderInterceptor implements HttpInterceptor {
	constructor() {

	}
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		if (request.url.includes("http://localhost:8000/")) {
			let token = "abc"
			if (token) {
				// request = request.clone({
				// 	setHeaders: {
				// 		Authorization: `Bearer ${token}`,
				// 		responseType: "JSON",
				// 	}, url: environment.endPoint + request.url,
				// });
				request = request.clone({ url: request.url });
			} else {
				request = request.clone({ url: request.url  });
			}
		}
		

		if (request.url.includes("company/")) {
			let token = "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..EcO-WGzyBm_yLGrWrHO_YQ.al6L5A9o3jFPeWSzgipwd7BgK-io5yZl96GWtihnIDewYHthbQ2Biz2Nz7deD6TIH_QQYMibaHcDmAFGY9YfPzcfxBNvW8yYwl_CoZCrNDEjGBKJC7t6ccW-nnZ9TbxP9_OaCLgqsXJ9pcN7SPZtDm807siW_ueIFSh24tLzZvBZRJqxnl3JWWo2di8PKyaKxaTv4XaKnPrU9i_RSivd1t6WP_xwXvsINhemLs3v5g59XtlZye2_4pqt8rJsa3aAfz3micDb4IToM-EHn6ybfIMGLHCZ8DcK1kMUVY8qi048uqgaCe3pJrSrjayNawViesemKUGD5PPYXuyTndyGsKfnWFsI4GtYi2Uiw2qkuXNEuCl4e_MKfYAhYuM1J_bXxV_DfUOwx8emS4aKzjy4pREUbritu6XE4smzBrBsJkrcI7u-U_BWXcZYcKG94GVO20vkKh5hKiHFWmKbvY-O-xy2IRf9-Km-cyvj2aCtjx_nocA--93xr8HdE0tSh_D09Nebjyb0rT3GbUIwqWz2JRJDMoV_8lxvp2G-NlyrPIMmVPOgIRMYwdpgarROsWtlBX2PTSwwePZ8QcBR_p63el4SIlXypDrkOuB3On2kOACnPoLAZ-4BeOgou1VB1Pjxz9cKj5WdjrDtRALxKDodx06dZ_wJmdQRocFcfZayaNNwl-uCEidejuiteWU_UkPoq5gYAxYjjD-PNYeluna0FA898mR64asljOV-ZPmBoRkRWmGOge1wS5_ZQXseVLge.sUQUyXA-VuSqhqNSx4Z-GQ"
			if (token) {
				request = request.clone({
					setHeaders: {
						Authorization: `Bearer ${token}`,
						responseType: "JSON",
					}, url: environment.endPoint + request.url,
				});
				request = request.clone({ url: request.url });
			} else {
				request = request.clone({ url: request.url  });
			}
		}
		return next.handle(request);
	}
}
