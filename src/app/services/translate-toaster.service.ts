import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';
import {IndividualConfig} from 'ngx-toastr/toastr/toastr-config';
import {ActiveToast} from 'ngx-toastr/toastr/toastr.service';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslateToasterService {

  constructor(
      private toastr: ToastrService,
      private translateService: TranslateService
  ) { }

  show(msgKey?: string, titleKey?: string, override?: Partial<IndividualConfig>, type?: string): Observable<ActiveToast<any>> {
    return forkJoin([
        this.translateService.get(msgKey),
        this.translateService.get(titleKey)
    ]).pipe(
      map(([msg, title]) => {
        return this.toastr.show(msg, title, override, type);
      })
    );
  }
  /** show successful toast */
  success(msgKey?: string, titleKey?: string, override?: Partial<IndividualConfig>): Observable<ActiveToast<any>> {
    return this.show(msgKey, titleKey, override, 'toast-success');
  }

  /** show error toast */
  error(msgKey?: string, titleKey?: string, override?: Partial<IndividualConfig>): Observable<ActiveToast<any>> {
    return this.show(msgKey, titleKey, override, 'toast-error');
  }

  /** show info toast */
  info(msgKey?: string, titleKey?: string, override?: Partial<IndividualConfig>): Observable<ActiveToast<any>> {
    return this.show(msgKey, titleKey, override, 'toast-info');
  }

  /** show warning toast */
  warning(msgKey?: string, titleKey?: string, override?: Partial<IndividualConfig>): Observable<ActiveToast<any>> {
    return this.show(msgKey, titleKey, override, 'toast-warning');
  }

  /**
   * Remove all or a single toast by id
   */
  clear(toastId?: number): void {
    this.toastr.clear(toastId);
  }
  /**
   * Remove and destroy a single toast by id
   */
  remove(toastId: number): boolean {
    return this.toastr.remove(toastId);
  }
}
