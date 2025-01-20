import {
  MessageService,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RIN3RA4U.js";

// src/app/service/success-handling.service.ts
var SuccessHandlingService = class _SuccessHandlingService {
  constructor(_message) {
    this._message = _message;
    console.log(`Service ${this.constructor.name} is working`);
  }
  showSuccessMessage(message) {
    this._message.add({ severity: "success", summary: "Success", detail: message });
  }
  static {
    this.\u0275fac = function SuccessHandlingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SuccessHandlingService)(\u0275\u0275inject(MessageService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SuccessHandlingService, factory: _SuccessHandlingService.\u0275fac, providedIn: "root" });
  }
};

export {
  SuccessHandlingService
};
//# sourceMappingURL=chunk-QSCOQFII.js.map
