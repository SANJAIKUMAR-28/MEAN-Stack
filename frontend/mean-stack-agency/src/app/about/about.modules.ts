import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AboutComponent], //components, directives, pipes
    imports: [CommonModule,RouterModule], //modules
    exports: [AboutComponent], //items from declaration and imports
    providers: [], //services
})
export class AboutModule {}