import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatNavbar } from './components/ChatNavBar';
import { ChatThread, ChatThreads } from './components/ChatThread';
import { ChatMessage, ChatWindow } from './components/ChatWindow';
 
import { servicesInjectables } from './services/services';


@NgModule({
  declarations: [
    AppComponent,
    ChatNavbar,
    ChatThread,
    ChatThreads,
    ChatMessage,
    ChatWindow

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ servicesInjectables ],
  bootstrap: [AppComponent]
})
export class AppModule { }
