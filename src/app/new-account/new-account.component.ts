import { AccountsService } from './../accounts.service';
import { LoggingService } from './../logging.service';
import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnDestroy{
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService){
        this.accountsService.statusUpdated.subscribe(
          (status: string) => alert('New Status' + status)
        );
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // this.loggingService.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }

  ngOnDestroy(){
    this.accountsService.statusUpdated.unsubscribe();
  }
}
