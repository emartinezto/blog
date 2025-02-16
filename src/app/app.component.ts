import { Component } from '@angular/core';
import { PostListComponent } from "./components/post-list/post-list.component";
import { PostFormComponent } from "./components/post-form/post-form.component";

@Component({
  selector: 'app-root',
  imports: [PostListComponent, PostFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
