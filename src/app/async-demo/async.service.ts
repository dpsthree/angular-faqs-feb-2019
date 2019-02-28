import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface YouTubeResults {
  items: Video[];
}

export interface Video {
  snippet: {
    title: string;
    description: string;
    thumbnails: { default: { url: string; width: number; height: number; } }[]
  };
}

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor(private http: HttpClient) { }

  getVideos() {
    const url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCqsMwaEyq-Zhij3BU-tk4EYQqX-Bb0BkA&channelId=UC4fiBcLILQscg3LO8dtpdgA&part=snippet,id&order=date&maxResults=20';
    return this.http.get<YouTubeResults>(url).pipe(
      map(results => {
        return results.items;
      })
    );
  }
}
