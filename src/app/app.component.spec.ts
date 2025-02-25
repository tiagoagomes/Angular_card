import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]) // Não há rotas no seu teste, então um array vazio está ótimo
      ],
      declarations: [
        AppComponent // Declarando o componente que será testado
      ],
    }).compileComponents(); // Compilando os componentes
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Criando uma instância do componente
    const app = fixture.componentInstance; // Pegando a instância do componente
    expect(app).toBeTruthy(); // Verificando se o componente foi criado corretamente
  });

  it(`should have as title 'angular-material'`, () => {
    const fixture = TestBed.createComponent(AppComponent); // Criando uma instância do componente
    const app = fixture.componentInstance; // Pegando a instância do componente
    expect(app.title).toEqual('angular-material'); // Verificando se o título do componente é 'angular-material'
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // Criando uma instância do componente
    fixture.detectChanges(); // Detectando mudanças no componente
    const compiled = fixture.nativeElement as HTMLElement; // Pegando o elemento DOM renderizado
    expect(compiled.querySelector('h1')?.textContent).toContain('angular-material'); // Verificando se o título é exibido corretamente no HTML
  });
});
