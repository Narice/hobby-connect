import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupsItemComponent } from './components/groups-item/groups-item.component';

import { ThemeListComponent } from './components/theme-list/theme-list.component';
import { ThemeItemComponent } from './components/theme-item/theme-item.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ThemeListComponent,
    ThemeItemComponent,
    GroupsComponent,
    GroupsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    HttpClientModule,
    GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
