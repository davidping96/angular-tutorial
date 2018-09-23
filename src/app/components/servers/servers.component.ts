import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  serverName = 'Test Server';
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverCreated = false;
  servers = ['Test server', 'Test server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created, name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
