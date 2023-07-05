import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MemoryServiceService } from 'src/app/services/memory-service.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent {

  memory: any;
  memory_id: any;

  constructor(private actRoute: ActivatedRoute,
              private memoSer: MemoryServiceService,
              private router: Router,
              private title: Title){

    if(this.memory_id) this.title.setTitle(`Memory | ${this.memory_id + 1}`)
    else this.title.setTitle(`Memory`)

  }

  ngOnInit(){
    this.memory_id = this.actRoute.snapshot.paramMap.get('id')
    this.memory = this.memoSer.memories_arr[this.memory_id];
  }

  add_memory(title: string, text: string){
    this.memoSer.add(title, text);
    this.nav_to_home()
  }

  update_memory(){
    this.memoSer.update(this.memory_id, this.memory)
    this.nav_to_home()
  }

  delete_memory(){
    this.memoSer.delete(this.memory_id)
    this.nav_to_home()
  }

  nav_to_home(){
    this.router.navigate(['']);
  }
}
