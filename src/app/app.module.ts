import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProdutoListarComponent } from "./pages/produto/produto-listar/produto-listar.component";
import { ProdutoCadastrarComponent } from './pages/produto/produto-cadastrar/produto-cadastrar.component';

@NgModule({
  declarations: [AppComponent, ProdutoListarComponent, ProdutoCadastrarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
