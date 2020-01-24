import { Component, OnInit } from '@angular/core';
import {ClientService} from '../client.service';
import {Client} from '../Client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
clients: [Client];
  constructor(private clientService: ClientService) { }
  ngOnInit() {
    this.clientService.getClientList().subscribe(
      data => {
        this.clients = data;
      }
    );
  }

  otVille() {
    this.clients[0].ville = 'test';
    const cl: Client = {id: 0, name: '', ville: ''};
    cl.id = 888;
    cl.name = 'salah';
    cl.ville = 'here';
    this.clients.push(cl);
  }
}
