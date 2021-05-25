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
		

		if (!request.url.includes("company/")) {
			let token = "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..6qZOPHrFCM20LMF_tzZviQ.Zw1hrHtUyStw_Dwq7rH0oGKK3-6aXK2kpr20Hl4Ck86Z2dILtl21LKkmP4VHrZYgvaovTxT_Kd5rpV6qaqvleIewSkSaBPx32WlZiTejLrHmOy3vb9hrQV6W3Whv1ECqdH4ZnNxyOy4lKzxx2V92q271J7It6J-1YVWpLui9TMI1sxjNjYzYfuSaABCuaULTWYn3XiSmmXgENLfNWFrpQQAdrzfWL3fVfjTTOP4eGIUgGpHidMhOC7hEyJqzoXTiDWNU8q08RB2qmwHvX6J80pSGMwmDlFqPpzJlS8SPhm39jcmVe63cg1ywRPrTNmOwgA8OtgRxYrwqT23cnI-J3YZtKFvEwT6btv9YCk6ZwxXNBtoNUZqa3EAz7HehuAKz2f51DyEuWCd3pPmToyZLw9eRS0p48wfue5Kp782LXjb5DqgEHlbMXwZhQIpHQVspYxFheQsV1b8VSXTQ4pnO9JpAKH2VfYj44kaC3sbx7-EjQnv-ThPsmz4lH6iqMS4PplLDChoTsLa0PJ8xekeKtN2NXx7m1SH_b8gFQVAm2oldWL_BulZDha2XYKcXjodvAH_0kY5q1IYujzL2pRfhsSU8uSGmyaEcYvVQAncF4ApLma-w2s6kiO9-c0DKY84urrJCTBBbvkKOdeyu6MC93oZxZujVrbONdCPCgswQJlQfTiHEydFSr5QZzs7n5yz-D10hO9au1B3VF3hMyUP1-S6EhEHaQJwpzxs4kHsv1P7qn9mJIkPPZS5xENUE2vgU.jSp1pM8XFZfRjIYs2HVYcw"
			if (token) {
				request = request.clone({
					setHeaders: {
						Authorization: `Bearer ${token}`,
						responseType: "JSON",
						// ContentSecurityPolicy: "default-src 'self'",
						//  segment: currentUser != null ? this.credentialsService.encryptdata(currentUser.userName) : this.credentialsService.encryptdata("44reyy") ,
						// CacheControl: "no-cache, no-store, must-revalidate, post- check=0, pre-check=0",
						// Pragma: 'no-cache', Expires: '0'
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
