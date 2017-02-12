import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'chat-thread',
	templateUrl: './chat_thread.html'
})

export class ChatThread implements OnInit {

	ngOnInit(): void {

	}

	clicked(event: any): void {
		event.preventDefault();
	}
}

@Component({
	selector: 'chat-threads',
	templateUrl: './chat_threads.html'
})

export class ChatThreads {}