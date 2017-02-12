import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'chat-navbar',
	templateUrl: './chat_navbar.html'
})

export class ChatNavbar implements OnInit {

	unreadMessagesCount: number;

	constructor(){}

	ngOnInit(): void {

	}
}