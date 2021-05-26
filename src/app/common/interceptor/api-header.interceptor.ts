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
			let token = localStorage.getItem('auth')
			if (token) {
				request = request.clone({
					setHeaders: {
						Authorization: `Bearer ${token}`,
						responseType: "JSON",
					}, url: environment.endPoint + request.url,
				});
				request = request.clone({ url: request.url });
			} 
		}
		return next.handle(request);
	}
}
