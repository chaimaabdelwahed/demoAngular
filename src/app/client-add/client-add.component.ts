import { Component, OnInit } from '@angular/core';
import {Client} from '../Client';
import {ClientService} from '../client.service';
import {Router} from '@angular/router';
import {Employee} from '../../Client';


@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  client: Client = new Client();

  constructor(private clientService: ClientService,
              private router: Router) {

  }

  ngOnInit() {}

    newClient(): void {
    // this.client = new Employee();

  }
  save() {
    /*
    this.clientService.createClient(this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    this.client = new Client();
    this.gotoList();
     */
  }


  gotoList() {
    this.router.navigate(['/employees']);
  }
}
