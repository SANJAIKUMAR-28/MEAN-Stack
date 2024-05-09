import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProvidersComponent } from './add-providers/add-providers.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteProvidersComponent } from './delete-providers/delete-providers.component';
import { DetailProvidersComponent } from './detail-providers/detail-providers.component';
import { ProvidersComponent } from './providers.component';
import { EditProvidersComponent } from './edit-providers/edit-providers.component';

@NgModule({
    declarations: [
        AddProvidersComponent,
        DeleteProvidersComponent,
        DetailProvidersComponent,
        ProvidersComponent,
        EditProvidersComponent
    ],
    imports: [ CommonModule,RouterModule,ReactiveFormsModule ],
    exports: [
        ReactiveFormsModule,
        RouterModule,
        AddProvidersComponent,
        DeleteProvidersComponent,
        DetailProvidersComponent,
        ProvidersComponent,
        EditProvidersComponent
    ],
    providers: [],
})
export class ProvidersModule {}