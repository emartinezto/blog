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
  today: string = new Date().toISOString().split('T')[0];

  newPost: IPost = { id: 0, title: '', image: '', description: '', date: this.today };

  @Output() sendPost: EventEmitter<IPost> = new EventEmitter();

  hasError = false;

  getPost() {

    this.hasError = !this.newPost.title || !this.newPost.image || !this.newPost.date || !this.newPost.description;

    if (this.hasError) {
      return;
    }

    this.sendPost.emit(this.newPost);
    this.newPost = { id: 0, title: '', image: '', description: '', date: this.today };
  }
}
