import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncService, Video } from './async.service';

const baseUrl = 'https://api.angularbootcamp.com';

@Component({
  selector: 'app-async-demo',
  templateUrl: './async-demo.component.html',
  styleUrls: ['./async-demo.component.css']
})
export class AsyncDemoComponent {

  videos: Observable<Video[]>;

  constructor(service: AsyncService) {
    this.videos = service.getVideos();
  }

}
