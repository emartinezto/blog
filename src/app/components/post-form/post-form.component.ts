import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPost } from '../../interfaces/ipost.interface';

@Component({
  selector: 'app-post-form',
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  newPost: IPost = { id: 0, title: '', image: '', description: '', date: 0 };

  @Output() sendPost: EventEmitter<IPost> = new EventEmitter();

  getPost() {
    this.sendPost.emit(this.newPost);
    this.newPost = { id: 0, title: '', image: '', description: '', date: 0 };
  }
}
