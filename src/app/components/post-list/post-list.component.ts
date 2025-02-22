import { Component, input } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts = input<IPost[]>([]);
}
