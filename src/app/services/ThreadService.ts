import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Thread, Message } from '../Models';
import { MessagesService } from './MessageService';

import * as _ from 'underscore';



@Injectable()
export class ThreadsService {
	

}

export var threadsServiceInjectables: Array<any> = [
	ThreadsService
];