import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api:ServiceService) { }

  ngOnInit() {
  }

  down(){
    // this.api.downloadww().subscribe((response:any)=>{
    //   console.log(response,'trtrtrrtrtrtrt');
    //   let fileName = response.headers.get('content-disposition')
    //   ?.split(';')[1].split('=')[1];
    //   let blob:Blob = response.body as Blob;
    //   let a = document.createElement('a');
    //   a.download = fileName;
    //   a.href = window.URL.createObjectURL(blob);
    //   a.click();
    // })
  }

}
