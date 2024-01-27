import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: "app-servers",
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  serverName: string = "TestServer";
  allowNewServer = false;
  serverCreationStatus = "No server was created"
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } , 5000);
  }
  ngOnInit(): void {
    
  }
  onCreateServer() {
    if(this.serverName !== undefined) {
      this.serverCreated = true;
      this.serverCreationStatus = `server was created! Server Name: ${this.serverName}`;
    }
  }

  onServerUpdateName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
