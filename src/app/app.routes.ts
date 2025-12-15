
import { Routes } from '@angular/router';
import { Contact } from './Pages/contact/contact';
import { Card } from './card/card';
import { Aerospace } from './Pages/aerospace/aerospace';
import { Health } from './Pages/health/health';
import { Insurance } from './Pages/insurance/insurance';
import { Industrial } from './Pages/industrial/industrial';
import { Bank } from './Pages/bank/bank';
import { Locomotive } from './Pages/locomotive/locomotive';
import { Footer } from './footer/footer';

export const routes: Routes = [
  
  { path: 'contact', component: Contact },
  { path: 'business', component: Card },
  {path:'aerospace', component: Aerospace},
  {path:'health',component:Health},
  {path:'insurance',component:Insurance},
  {path:'industrial',component:Industrial},
  {path:'bank',component:Bank},
  {path:'locomotive',component:Locomotive},




];