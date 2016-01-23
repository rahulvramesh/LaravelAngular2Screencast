import { XHR } from 'angular2/src/compiler/xhr';
import { WebWorkerXHRImpl } from 'angular2/src/web_workers/worker/xhr_impl';
import { WebWorkerRenderer } from 'angular2/src/web_workers/worker/renderer';
import { print, CONST_EXPR } from 'angular2/src/facade/lang';
import { Renderer } from 'angular2/src/core/render/api';
import { PLATFORM_DIRECTIVES, PLATFORM_PIPES, ExceptionHandler, APPLICATION_COMMON_PROVIDERS, PLATFORM_COMMON_PROVIDERS } from 'angular2/core';
import { COMMON_DIRECTIVES, COMMON_PIPES, FORM_PROVIDERS } from "angular2/common";
import { ClientMessageBrokerFactory, ClientMessageBrokerFactory_ } from 'angular2/src/web_workers/shared/client_message_broker';
import { ServiceMessageBrokerFactory, ServiceMessageBrokerFactory_ } from 'angular2/src/web_workers/shared/service_message_broker';
import { COMPILER_PROVIDERS } from 'angular2/src/compiler/compiler';
import { Serializer } from "angular2/src/web_workers/shared/serializer";
import { ON_WEB_WORKER } from "angular2/src/web_workers/shared/api";
import { Provider } from 'angular2/src/core/di';
import { RenderProtoViewRefStore } from 'angular2/src/web_workers/shared/render_proto_view_ref_store';
import { RenderViewWithFragmentsStore } from 'angular2/src/web_workers/shared/render_view_with_fragments_store';
import { WebWorkerEventDispatcher } from 'angular2/src/web_workers/worker/event_dispatcher';
class PrintLogger {
    constructor() {
        this.log = print;
        this.logError = print;
        this.logGroup = print;
    }
    logGroupEnd() { }
}
export const WORKER_APP_PLATFORM = CONST_EXPR([PLATFORM_COMMON_PROVIDERS]);
export const WORKER_APP_APPLICATION_COMMON = CONST_EXPR([
    APPLICATION_COMMON_PROVIDERS,
    COMPILER_PROVIDERS,
    FORM_PROVIDERS,
    Serializer,
    new Provider(PLATFORM_PIPES, { useValue: COMMON_PIPES, multi: true }),
    new Provider(PLATFORM_DIRECTIVES, { useValue: COMMON_DIRECTIVES, multi: true }),
    new Provider(ClientMessageBrokerFactory, { useClass: ClientMessageBrokerFactory_ }),
    new Provider(ServiceMessageBrokerFactory, { useClass: ServiceMessageBrokerFactory_ }),
    WebWorkerRenderer,
    new Provider(Renderer, { useExisting: WebWorkerRenderer }),
    new Provider(ON_WEB_WORKER, { useValue: true }),
    RenderViewWithFragmentsStore,
    RenderProtoViewRefStore,
    new Provider(ExceptionHandler, { useFactory: _exceptionHandler, deps: [] }),
    WebWorkerXHRImpl,
    new Provider(XHR, { useExisting: WebWorkerXHRImpl }),
    WebWorkerEventDispatcher
]);
function _exceptionHandler() {
    return new ExceptionHandler(new PrintLogger());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyX2FwcF9jb21tb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcGxhdGZvcm0vd29ya2VyX2FwcF9jb21tb24udHMiXSwibmFtZXMiOlsiUHJpbnRMb2dnZXIiLCJQcmludExvZ2dlci5jb25zdHJ1Y3RvciIsIlByaW50TG9nZ2VyLmxvZ0dyb3VwRW5kIiwiX2V4Y2VwdGlvbkhhbmRsZXIiXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sMkJBQTJCO09BQ3RDLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwwQ0FBMEM7T0FDbEUsRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQztPQUNuRSxFQUFDLEtBQUssRUFBUSxVQUFVLEVBQVksTUFBTSwwQkFBMEI7T0FDcEUsRUFBQyxRQUFRLEVBQUMsTUFBTSw4QkFBOEI7T0FDOUMsRUFDTCxtQkFBbUIsRUFDbkIsY0FBYyxFQUNkLGdCQUFnQixFQUNoQiw0QkFBNEIsRUFDNUIseUJBQXlCLEVBQzFCLE1BQU0sZUFBZTtPQUNmLEVBQUMsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBQyxNQUFNLGlCQUFpQjtPQUN4RSxFQUNMLDBCQUEwQixFQUMxQiwyQkFBMkIsRUFDNUIsTUFBTSx1REFBdUQ7T0FDdkQsRUFDTCwyQkFBMkIsRUFDM0IsNEJBQTRCLEVBQzdCLE1BQU0sd0RBQXdEO09BQ3hELEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxnQ0FBZ0M7T0FDMUQsRUFBQyxVQUFVLEVBQUMsTUFBTSw0Q0FBNEM7T0FDOUQsRUFBQyxhQUFhLEVBQUMsTUFBTSxxQ0FBcUM7T0FDMUQsRUFBQyxRQUFRLEVBQUMsTUFBTSxzQkFBc0I7T0FDdEMsRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZEQUE2RDtPQUM1RixFQUNMLDRCQUE0QixFQUM3QixNQUFNLGtFQUFrRTtPQUNsRSxFQUFDLHdCQUF3QixFQUFDLE1BQU0sa0RBQWtEO0FBRXpGO0lBQUFBO1FBQ0VDLFFBQUdBLEdBQUdBLEtBQUtBLENBQUNBO1FBQ1pBLGFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO1FBQ2pCQSxhQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtJQUVuQkEsQ0FBQ0E7SUFEQ0QsV0FBV0EsS0FBSUUsQ0FBQ0E7QUFDbEJGLENBQUNBO0FBRUQsYUFBYSxtQkFBbUIsR0FDNUIsVUFBVSxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO0FBRTVDLGFBQWEsNkJBQTZCLEdBQTJDLFVBQVUsQ0FBQztJQUM5Riw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsSUFBSSxRQUFRLENBQUMsY0FBYyxFQUFFLEVBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDbkUsSUFBSSxRQUFRLENBQUMsbUJBQW1CLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO0lBQzdFLElBQUksUUFBUSxDQUFDLDBCQUEwQixFQUFFLEVBQUMsUUFBUSxFQUFFLDJCQUEyQixFQUFDLENBQUM7SUFDakYsSUFBSSxRQUFRLENBQUMsMkJBQTJCLEVBQUUsRUFBQyxRQUFRLEVBQUUsNEJBQTRCLEVBQUMsQ0FBQztJQUNuRixpQkFBaUI7SUFDakIsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUMsV0FBVyxFQUFFLGlCQUFpQixFQUFDLENBQUM7SUFDeEQsSUFBSSxRQUFRLENBQUMsYUFBYSxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO0lBQzdDLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBQ3pFLGdCQUFnQjtJQUNoQixJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQztJQUNsRCx3QkFBd0I7Q0FDekIsQ0FBQyxDQUFDO0FBRUg7SUFDRUcsTUFBTUEsQ0FBQ0EsSUFBSUEsZ0JBQWdCQSxDQUFDQSxJQUFJQSxXQUFXQSxFQUFFQSxDQUFDQSxDQUFDQTtBQUNqREEsQ0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1hIUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3hocic7XG5pbXBvcnQge1dlYldvcmtlclhIUkltcGx9IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy93b3JrZXIveGhyX2ltcGwnO1xuaW1wb3J0IHtXZWJXb3JrZXJSZW5kZXJlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3dvcmtlci9yZW5kZXJlcic7XG5pbXBvcnQge3ByaW50LCBUeXBlLCBDT05TVF9FWFBSLCBpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge1JlbmRlcmVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9yZW5kZXIvYXBpJztcbmltcG9ydCB7XG4gIFBMQVRGT1JNX0RJUkVDVElWRVMsXG4gIFBMQVRGT1JNX1BJUEVTLFxuICBFeGNlcHRpb25IYW5kbGVyLFxuICBBUFBMSUNBVElPTl9DT01NT05fUFJPVklERVJTLFxuICBQTEFURk9STV9DT01NT05fUFJPVklERVJTLFxufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q09NTU9OX0RJUkVDVElWRVMsIENPTU1PTl9QSVBFUywgRk9STV9QUk9WSURFUlN9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7XG4gIENsaWVudE1lc3NhZ2VCcm9rZXJGYWN0b3J5LFxuICBDbGllbnRNZXNzYWdlQnJva2VyRmFjdG9yeV9cbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9jbGllbnRfbWVzc2FnZV9icm9rZXInO1xuaW1wb3J0IHtcbiAgU2VydmljZU1lc3NhZ2VCcm9rZXJGYWN0b3J5LFxuICBTZXJ2aWNlTWVzc2FnZUJyb2tlckZhY3RvcnlfXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvc2VydmljZV9tZXNzYWdlX2Jyb2tlcic7XG5pbXBvcnQge0NPTVBJTEVSX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL2NvbXBpbGVyJztcbmltcG9ydCB7U2VyaWFsaXplcn0gZnJvbSBcImFuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvc2VyaWFsaXplclwiO1xuaW1wb3J0IHtPTl9XRUJfV09SS0VSfSBmcm9tIFwiYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9hcGlcIjtcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7UmVuZGVyUHJvdG9WaWV3UmVmU3RvcmV9IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvcmVuZGVyX3Byb3RvX3ZpZXdfcmVmX3N0b3JlJztcbmltcG9ydCB7XG4gIFJlbmRlclZpZXdXaXRoRnJhZ21lbnRzU3RvcmVcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9yZW5kZXJfdmlld193aXRoX2ZyYWdtZW50c19zdG9yZSc7XG5pbXBvcnQge1dlYldvcmtlckV2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3dvcmtlci9ldmVudF9kaXNwYXRjaGVyJztcblxuY2xhc3MgUHJpbnRMb2dnZXIge1xuICBsb2cgPSBwcmludDtcbiAgbG9nRXJyb3IgPSBwcmludDtcbiAgbG9nR3JvdXAgPSBwcmludDtcbiAgbG9nR3JvdXBFbmQoKSB7fVxufVxuXG5leHBvcnQgY29uc3QgV09SS0VSX0FQUF9QTEFURk9STTogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4gPVxuICAgIENPTlNUX0VYUFIoW1BMQVRGT1JNX0NPTU1PTl9QUk9WSURFUlNdKTtcblxuZXhwb3J0IGNvbnN0IFdPUktFUl9BUFBfQVBQTElDQVRJT05fQ09NTU9OOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9IENPTlNUX0VYUFIoW1xuICBBUFBMSUNBVElPTl9DT01NT05fUFJPVklERVJTLFxuICBDT01QSUxFUl9QUk9WSURFUlMsXG4gIEZPUk1fUFJPVklERVJTLFxuICBTZXJpYWxpemVyLFxuICBuZXcgUHJvdmlkZXIoUExBVEZPUk1fUElQRVMsIHt1c2VWYWx1ZTogQ09NTU9OX1BJUEVTLCBtdWx0aTogdHJ1ZX0pLFxuICBuZXcgUHJvdmlkZXIoUExBVEZPUk1fRElSRUNUSVZFUywge3VzZVZhbHVlOiBDT01NT05fRElSRUNUSVZFUywgbXVsdGk6IHRydWV9KSxcbiAgbmV3IFByb3ZpZGVyKENsaWVudE1lc3NhZ2VCcm9rZXJGYWN0b3J5LCB7dXNlQ2xhc3M6IENsaWVudE1lc3NhZ2VCcm9rZXJGYWN0b3J5X30pLFxuICBuZXcgUHJvdmlkZXIoU2VydmljZU1lc3NhZ2VCcm9rZXJGYWN0b3J5LCB7dXNlQ2xhc3M6IFNlcnZpY2VNZXNzYWdlQnJva2VyRmFjdG9yeV99KSxcbiAgV2ViV29ya2VyUmVuZGVyZXIsXG4gIG5ldyBQcm92aWRlcihSZW5kZXJlciwge3VzZUV4aXN0aW5nOiBXZWJXb3JrZXJSZW5kZXJlcn0pLFxuICBuZXcgUHJvdmlkZXIoT05fV0VCX1dPUktFUiwge3VzZVZhbHVlOiB0cnVlfSksXG4gIFJlbmRlclZpZXdXaXRoRnJhZ21lbnRzU3RvcmUsXG4gIFJlbmRlclByb3RvVmlld1JlZlN0b3JlLFxuICBuZXcgUHJvdmlkZXIoRXhjZXB0aW9uSGFuZGxlciwge3VzZUZhY3Rvcnk6IF9leGNlcHRpb25IYW5kbGVyLCBkZXBzOiBbXX0pLFxuICBXZWJXb3JrZXJYSFJJbXBsLFxuICBuZXcgUHJvdmlkZXIoWEhSLCB7dXNlRXhpc3Rpbmc6IFdlYldvcmtlclhIUkltcGx9KSxcbiAgV2ViV29ya2VyRXZlbnREaXNwYXRjaGVyXG5dKTtcblxuZnVuY3Rpb24gX2V4Y2VwdGlvbkhhbmRsZXIoKTogRXhjZXB0aW9uSGFuZGxlciB7XG4gIHJldHVybiBuZXcgRXhjZXB0aW9uSGFuZGxlcihuZXcgUHJpbnRMb2dnZXIoKSk7XG59XG4iXX0=