import { userServiceInjectables } from './UserService';
import { messagesServiceInjectables } from './MessageService';
import { threadsServiceInjectables } from './ThreadService';

export * from './MessageService';
export * from './ThreadService';
export * from './UserService';

export var servicesInjectables: Array<any> = [
	userServiceInjectables,
	messagesServiceInjectables,
	threadsServiceInjectables
];