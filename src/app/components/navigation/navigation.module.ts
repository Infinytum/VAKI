import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationViewComponent } from './views/navigation-view/navigation-view.component';
import { NavigationContentViewComponent } from './views/navigation-content-view/navigation-content-view.component';
import { NavigationContainerComponent } from './components/navigation-container/navigation-container.component';
import { NavigationItemComponent } from './components/navigation-item/navigation-item.component';

@NgModule({
  declarations: [
    NavigationViewComponent,
    NavigationContentViewComponent,
    NavigationContainerComponent,
    NavigationItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationViewComponent,
    NavigationContentViewComponent
  ]
})
export class NavigationModule { }
