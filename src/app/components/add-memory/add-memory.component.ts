import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MemoryServiceService } from 'src/app/services/memory-service.service';

@Component({
  selector: 'app-add-memory',
  templateUrl: './add-memory.component.html',
  styleUrls: ['./add-memory.component.scss']
})
export class AddMemoryComponent {

  constructor(private memoSer: MemoryServiceService, private router: Router, private title: Title){
    this.title.setTitle("Add Task")
  }

  add_memory(title: string, text: string){
    this.memoSer.add(title, text);
    this.nav_to_home()
  }

  update_memory(){

    this.nav_to_home()
  }

  delete_memory(){
    this.nav_to_home()
  }

  nav_to_home(){
    this.router.navigate(['']);
  }
  isEmpty(value : string){
    if(value == '') return false;
    else return true
  }
}
