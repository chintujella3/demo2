import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import Components here


const routes: Routes = [
    { path: '', redirectTo: '/orders', pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
