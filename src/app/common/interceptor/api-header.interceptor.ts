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

		if (!request.url.includes("assets/")) {
            // let token = localStorage.getItem("APICRED");
            let token = "ABCD"
			if (token) {
				// request = request.clone({
				// 	setHeaders: {
				// 		Authorization: `Bearer ${token}`,
				// 		responseType: "JSON",
				// 		ContentSecurityPolicy: "default-src 'self'",
				// 		 segment: currentUser != null ? this.credentialsService.encryptdata(currentUser.userName) : this.credentialsService.encryptdata("44reyy") ,
				// 		CacheControl: "no-cache, no-store, must-revalidate, post- check=0, pre-check=0",
				// 		Pragma: 'no-cache', Expires: '0'
				// 	}, url: environment.endPoint + request.url,
				// });
				request = request.clone({ url: environment.endPoint + request.url });
			} else {
				request = request.clone({ url: environment.endPoint + request.url  });
			}
		}
		return next.handle(request);
	}
}
