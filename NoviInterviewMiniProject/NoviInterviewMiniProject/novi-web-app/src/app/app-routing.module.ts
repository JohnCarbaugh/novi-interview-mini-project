import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './feature/events/events.component';
import { MembersComponent } from './feature/members/members.component';

const routes: Routes = [
  { path: 'members', component: MembersComponent },
  { path: 'events', component: EventsComponent },
  { path: '', redirectTo: 'members', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
