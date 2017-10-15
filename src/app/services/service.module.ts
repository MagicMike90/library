import { NgModule } from "@angular/core";
import { HttpModule, JsonpModule } from "@angular/http"
import { BookService, REST_URL } from "./book.service";

@NgModule({
    imports: [HttpModule, JsonpModule],
    providers: [BookService,
        { provide: REST_URL, useValue: "http://localhost:3000/" }]

})
export class ServiceModule { }
