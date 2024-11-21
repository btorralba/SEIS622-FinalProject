import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users = [
   {
    username: 'alice',
    password: 'pass',
    name: 'Alice User'
   },
   {
    username: 'bob',
    password: 'qwerty',
    name: 'Bob Smith'
   }
  ]

  authenticateCredentials(user: any) {
    let userItem = this.users.filter(userItem => userItem.username === user.username && userItem.password === user.password);
    if (userItem) {
      return userItem[0].name;
    } else {
      return null;
    }
  }

}
