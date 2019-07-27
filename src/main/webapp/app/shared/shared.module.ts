import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProyectoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ProyectoSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ProyectoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectoSharedModule {
  static forRoot() {
    return {
      ngModule: ProyectoSharedModule
    };
  }
}
