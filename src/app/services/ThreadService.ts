import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Thread, Message } from '../Models';
import { MessagesService } from './MessageService';

import * as _ from 'underscore';



@Injectable()
export class ThreadsService {
	// `threads` is a observable that contains the most up to date list of threads
	threads: Observable<{ [key: string]: Thread}>;

	// `orderedThreads` contains a newest-first chronological list of threads
	orderedThreads: Observable<Thread[]>;

	// `currentThread` contains the currently selected thread
	currentThread: Subject<Thread> = 
		new BehaviorSubject<Thread>(new Thread());

	// `currentThreadMessages` contains the set of messages for the currently
	// selected thread
	currentThreadMessages: Observable<Message[]>;

	constructor(private messagesService: MessagesService){
		this.threads = messagesService.messages
			.map( (messages: Message[]) => {
				let threads: {[key: string]: Thread} = {};
		// Store the message's thread in our accumulator `threads`
			messages.map( (message: Message) => {
				threads[message.thread.id] = threads[message.thread.id] ||
				message.thread;
			// Cache the most recent message for each thread
				let messageThread: Thread = threads[message.thread.id];
				if(!messageThread.lastMessage ||
					messageThread.lastMessage.sentAt < message.sentAt){
					messageThread.lastMessage = message;
				}
			});	
			return threads;			
		});

		this.orderedThreads = this.threads
			.map( (threadGroups: { [key: string ]: Thread}) => {
				let threads: Thread[] = _.values(threadGroups);
				return _.sortBy(threads, (t: Thread) => t.lastMessage.sentAt).reverse();
			});

		this.currentThreadMessages = this.currentThread
			.combineLatest(messagesService.messages,
				(currentThread: Thread, messages: Message[]) => {
					if (currentThread && messages.length > 0) {
						return _.chain(messages)
							.filter( (message: Message) => (message.thread.id === currentThread.id))
							.map( (message: Message) => {
								message.isRead = true;
								return message;
							}).value();
					} else {
						return [];
					}
				});

		this.currentThread.subscribe(this.messagesService.markThreadAsRead);

	}//constructor

	setCurrentThread(newThread: Thread): void {
		this.currentThread.next(newThread);
	}

}

export var threadsServiceInjectables: Array<any> = [
	ThreadsService
];