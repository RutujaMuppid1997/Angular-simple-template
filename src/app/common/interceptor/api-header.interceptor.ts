import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { utf8Encode } from '@angular/compiler/src/util';
import { API } from 'src/app/const/api';
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

		if (request.url.includes(API.nodeEndPoint)) {
			let token = localStorage.getItem('auth')
			if (token) {
				request = request.clone({
					setHeaders: {
						auth: `${token}`,
						responseType: "JSON",
					}, url:  request.url,
				});
				request = request.clone({ url: request.url });
			} else {
				request = request.clone({ url: request.url  });
			}
		}
	

		// if (request.url.includes("api/v2/")) {
		// 	if (true) {
		// 		request = request.clone({
		// 			setHeaders: {
		// 				Authorization: 'Basic ' + btoa(environment.username + ':' + environment.password),
		// 				responseType: "JSON",
		// 			}, url: environment.endPoint2 + request.url,
		// 		});
		// 		request = request.clone({ url: request.url });
		// 	} 
		// }

		if (request.url.includes(API.web3EndPoint)) {
			request = request.clone({ url: request.url  });
		}
		return next.handle(request);
	}
}
