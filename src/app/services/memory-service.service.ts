import { Injectable } from '@angular/core';
import { Memory } from '../interfaces/memory';

@Injectable({
  providedIn: 'root'
})
export class MemoryServiceService {

  constructor() {
    let saved_memories = localStorage.getItem('memories');
    if(saved_memories) this.memories_arr = JSON.parse(saved_memories)
    else this.memories_arr = []
  }
  memories_arr: Array<Memory> = []

  add(title: string, description: string){
    this.memories_arr.push({
      title,
      description
    })
    this.saveAll()
  }
  delete(i: number){
    this.memories_arr.splice(i, 1)
    this.saveAll()
  }
  update(i: number, data: Memory){
    this.memories_arr[i] = data
    this.saveAll()
  }
  saveAll(){
    localStorage.setItem('memories', JSON.stringify(this.memories_arr))
  }
}
