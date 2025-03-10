import { Component } from '@angular/core';
import { PostListComponent } from "./components/post-list/post-list.component";
import { PostFormComponent } from "./components/post-form/post-form.component";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { IPost } from './interfaces/ipost.interface';

@Component({
  selector: 'app-root',
  imports: [PostListComponent, PostFormComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  blogList: IPost[] = [
    { "id": 1, "title": 'Desayuno de Boxty', "image": 'https://www.themealdb.com/images/media/meals/naqyel1608588563.jpg', "description": 'Paso 1\r\nAntes de comenzar, pon el horno a la temperatura más baja para mantener la comida caliente. Pela las patatas y ralla 2 de ellas, luego resérvalas. Corta las otras 2 en trozos grandes y hiérvelas durante 10-15 minutos o hasta que estén tiernas. Mientras tanto, exprime la mayor cantidad posible de líquido de las patatas ralladas usando un paño de cocina limpio. Tritura las patatas hervidas y mézclalas con las patatas ralladas, la cebolleta y la harina.\r\n\r\ Paso 2\r\nBate la clara de huevo en un bol grande hasta que forme picos suaves. Incorpora el suero de leche y luego añade el bicarbonato de sodio. Mezcla suavemente con la preparación de patatas.\r\n\r\ Paso 3\r\nCalienta una sartén grande antiadherente a fuego medio, luego añade 1 cucharada de mantequilla y un poco de aceite. Coloca 3-4 cucharadas de la mezcla de patatas en la sartén y cocina suavemente durante 3-5 minutos por cada lado hasta que estén doradas y crujientes. Manténlas calientes en un plato dentro del horno mientras cocinas el resto, añadiendo más mantequilla y aceite a la sartén según sea necesario. Con esta mezcla obtendrás 16 boxty del tamaño de un crumpet. Se pueden preparar con un día de antelación, escurrir sobre papel de cocina y recalentar en un horno a baja temperatura durante 20 minutos.\r\n\r\ Paso 4\r\nPrecalienta el grill a temperatura media y coloca los tomates en una sartén de base gruesa. Añade un buen trozo de mantequilla y un poco de aceite, luego fríelos durante unos 5 minutos hasta que estén blandos. Asa el bacon, luego colócalo en un plato y mantenlo caliente. Apila los boxty, el bacon y el huevo, y sirve los tomates a un lado.', "date": '2025-02-22' },
    { "id": 2, "title": 'Ensalada de Pasta Mediterránea', "image": 'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg', "description": 'Lleva a ebullición una cacerola grande con agua salada.\r\nAñade la pasta, remueve una vez y cocina durante unos 10 minutos o según las indicaciones del paquete.\r\nMientras tanto, lava los tomates y córtalos en cuartos. Corta las aceitunas en rodajas. Lava la albahaca.\r\nColoca los tomates en un bol para ensalada y desgarra las hojas de albahaca sobre ellos. Añade una cucharada de aceite de oliva y mezcla.\r\nCuando la pasta esté lista, escúrrela en un colador y pásala por agua fría para enfriarla rápidamente.\r\nAñade la pasta al bol con los tomates y la albahaca.\r\nIncorpora las aceitunas en rodajas, las bolas de mozzarella escurridas y los trozos de atún. Mezcla bien y deja reposar la ensalada al menos media hora para que los sabores se integren.\r\nAntes de servir, espolvorea con una buena cantidad de pimienta negra recién molida y rocía con el aceite de oliva restante.', "date": '2025-02-21' },
    { id: 3, "title": 'Pasteles de Desayuno con Fruta y Queso Crema', "image": 'https://www.themealdb.com/images/media/meals/1543774956.jpg', "description": 'En un bol, mezcla el queso crema, el azúcar y la vainilla hasta que estén completamente integrados.Espolvorea ligeramente harina sobre la superficie de trabajo y extiende la masa de hojaldre para aplanarla. Corta cada lámina de hojaldre en 9 cuadrados iguales.En la esquina superior derecha y en la inferior izquierda de cada cuadrado, haz un corte en forma de "L" aproximadamente a 1 cm (½ pulgada) del borde.\r\nNOTE: La forma de "L" debe llegar hasta el borde del cuadrado en ambas direcciones, pero las dos "L" no deben tocarse en las esquinas. El hojaldre debería parecer un marco con dos esquinas aún unidas.\r\nToma la esquina superior derecha y dóblala hacia abajo hasta la esquina interior inferior. Ahora tendrás una forma de diamante.\r\nColoca 1 o 2 cucharaditas del relleno de queso crema en el centro y luego añade las frutas encima.\r\nRepite el proceso con los demás cuadrados de hojaldre y colócalos en la bandeja con papel de hornear.\r\nHornea durante 15-20 minutos o hasta que el hojaldre esté dorado y haya subido.\r\Disfruta!\r\n.', "date": '2025-02-20' },
  ];
  ngOnInit() {
    this.sortPosts();
  }

  getDataForm(event: IPost) {
    this.blogList = [...this.blogList, event];
    this.sortPosts();
  }

  private sortPosts() {
    this.blogList = [...this.blogList].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  }
}
