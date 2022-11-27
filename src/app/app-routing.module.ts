import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { WeddingComponent } from './wedding/wedding.component';

const routes: Routes = [
  { path: '', component: WeddingComponent },
  { path: 'invitation', component: CardComponent },
  { path: 'invitation/:textmoi', component: CardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
