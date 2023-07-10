import { Component, OnInit } from '@angular/core';
import { User } from '../interface/httpInterface';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public list: User[];

  public search: String;

  constructor(private userService: UserService) {
    this.list = [];
    this.search = ""
   }

  ngOnInit(): void {
    this.getList();
  }

  public getInitials(name: string){
    var array = name.split(' ');

    console.log(array);

    return array[0][0].toUpperCase() + array[1][0].toUpperCase()
  }

  public getDataList(){
    return this.list;
  }

  private getList(){
    this.userService.list()
    .subscribe((list:User[]) =>{
      this.list = list;
      console.log(list);
      //this.list.push(...list);

    }, err => {
      console.log(err);
    });
  }


}
