import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ChildItemComponent } from './child-item/child-item.component';
=======
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './list/list.component';
import { IfComponent } from './if/if.component';
import { SwitchComponent } from './switch/switch.component';
>>>>>>> 5ed20cd2ea4f61e9f3adeb1b5368fa57c95b368d

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ParentListComponent,
    ChildItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ListComponent,
    IfComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule
>>>>>>> 5ed20cd2ea4f61e9f3adeb1b5368fa57c95b368d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
