import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  project=[
    {
    heding:'MONET DIY',
    text:'Monet is an AI-based content performance analytics platform. It offers a solution for video content rating, message testing, non-verbal cues (NVCs), real-time emotion capture, content analytics, consumer insights, facial coding, creating strategy, and understanding consumer behavior.',
    image:'assets/image/monetdiy.png',
    url:'https://corporate.monetanalytics.com/'
  },
  {
    heding:'EEMO',
    text:'eemo is the safe place to try out your videos, win more hearts, and go from hope to dope in blazing speed. See how this patented emotionAI science maps facial expressions and predicts viewers emotional reactions, frame-by-frame, with profund accuracy.',
    image:'assets/image/eemo.png',
    url:'https://www.eemo.live/'
  }
]

  ngOnInit() {
  }

}
