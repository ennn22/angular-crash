import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'test1',
      email: 'test1@mail.com',
      message: 'test1'
    });
    this.insert({
      name: 'test2',
      email: 'test2@mail.com',
      message: 'test2'
    });
    this.insert({
      name: 'test3',
      email: 'test3@mail.com',
      message: 'test3'
    });
  }

  insert(message: {name: string, email: string, message: string}): void {
    this.messages.push(message);
  }

  getAllMessages() {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
