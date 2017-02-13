import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';


@Component({
	selector: 'chat-navbar',
	templateUrl: './chat_navbar.html'
})

export class ChatNavbar implements OnInit {

	unreadMessagesCount: number;


	constructor(){
		// let arr = [1,2,3,4,5];
		// _.each(arr, alert);
	}

	ngOnInit(): void {

	}
}