import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  form
  constructor() {
    this.form = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'message': new FormControl('', [Validators.required, Validators.maxLength(500)]),
      'telefono': new FormControl('', [Validators.required, Validators.maxLength(9)]),
      'asunto': new FormControl('', [Validators.required]),
    });
  }
  
  onSubmit() {
    if (this.form.valid) {
        // Aquí puedes enviar los datos del formulario a tu servidor o realizar cualquier otra acción necesaria
        alert('Gracias por comunicarte con nosotros');
    } else {
        alert('Por favor verifica los campos');
    }
}

onClear() {
  this.form.reset();
}
}
