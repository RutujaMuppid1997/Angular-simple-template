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
			let token = "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..6jtVK7Po5Tc4e5pXL3rn2g.spaqS_XIsWmt3a2wxEAuCFLe0lvk14T_lJ6EFZh8h6_gjOUlKoxZkgsZtP-tr553xNeWYn3_laguXP12weU8z8JVv3fmF46P0F2LeBqRmG9WTvSXD70PQrqxiH-udf4c3F-hfBr4szgE5E0e1eGqbKfPlmuqciEFTyNKSgenViqFrnssUFQiAwFfilRydx8v9lPPrmXVz9eJOEzWFYnPMlPb-jKum5OIcrQPk378nC4NaVsw59q6cJs_wOnun8nwJcDot6vOQgQuJJ4QTm0VK83UY5ELI05HnB-v_ZXnVaQLZU9K4AAfHjhVwp32m8BDsxqZQnI0UgNpn13IpLdPhMUra-9qdZtW1IwkGxipdVbI9PHhYd2Gy7KIuKzao61wQTge6sDbEBUjlMhZi1UJke87rh1nI8nJC4U-wYflVjDTxw1QI2X4iEYY1tFfuf_XIBFsBwA9DhQk8j_qJBC8_RvFfBhlYLDhixH6Ifi9X42YgQQUPfKDVTk8vbRr_HifmS-iXdeW8LeuWlgWC8e4_D6LahgOMVNG43FbH-UAhyWbpV16UwFeRs-pFQm16V61YSv-mHLEQJOteqothrDdMmcKpGVSacLM-KUY_1jUEHf_e3ph87ZC4hGGwoLhYbg23C3L0JkaLchKg_8-bHeSdPB5x2plPXWv4qse-GFgLCDIGxTjnuoF_7gZq48KP2rpJ0cPTvAbeysVz_-CwFWRSuJ48-mGAD6PHcMigTXEPTqfRWYYHa-udrG9wN7OXb-E.LqJojuwv1bv6C7KJQ1Tjtw"
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
