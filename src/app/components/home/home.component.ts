import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MemoryServiceService } from 'src/app/services/memory-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  new_memories: any;

  constructor(private router: Router, private memoSer: MemoryServiceService, private title: Title){
    this.title.setTitle("Home")
  }
  navigate(){
    this.router.navigate(['add-memory'])
  }
  ngOnInit(){
    this.new_memories = this.memoSer.memories_arr;
    // this.new_memories = this.memoSer.memories_arr.map(obj => {

    //   return {
    //     ...obj,
    //     title: obj.title?.replace(/\\/g, '/'),
    //     description: obj.description,
    //   };
    // });
  }
  Isempty(){
    return this.new_memories.length == 0 ;
  }
}
