import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaCategoriaComponent } from './modifica-categoria.component';

describe('ModificaCategoriaComponent', () => {
  let component: ModificaCategoriaComponent;
  let fixture: ComponentFixture<ModificaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
