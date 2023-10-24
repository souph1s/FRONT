import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Produto } from "src/app/models/produto.model";

@Component({
  selector: "app-produto-listar",
  templateUrl: "./produto-listar.component.html",
  styleUrls: ["./produto-listar.component.css"],
})
export class ProdutoListarComponent {
  produtos!: Produto[];

  constructor(private client: HttpClient) {
    //um problema de cors ao fazer uma requisicao para a nossa api
  }

  ngOnInit(): void {
    console.log("O componente foi carregado.");

    this.client
      .get<Produto[]>("https://localhost:7195/api/produto/listar")
      .subscribe({
        next: (prod) => {
          this.produtos = prod;
          console.table(prod);
        },
        error: (erro) => {
          console.log("Erro: " + erro);
        },
      });
  }
}
