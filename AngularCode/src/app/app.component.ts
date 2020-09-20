import { Component } from '@angular/core';
import { FileService } from './services/file.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FileService]
})
export class AppComponent 
{
	constructor(private _fileService:FileService)
	{

	}

	downloadFile(file)
	{
		let fileName;
		if(file=='indicaciones') fileName = 'indicaciones_para_alumno_nuevo_ingreso.docx';
		else if(file == 'cedula') fileName = 'cedula_inscripcion.xlsx';
		else if(file == 'inscripcion') fileName = 'requisitos_de_inscripcion_2020_2021.docx';
		else if(file == 'cuenta') fileName = 'numero_de_cuenta.docx';
		else if(file == 'calendario') fileName = 'calendario_2020_2021.pdf';
		this._fileService.getFile(fileName).subscribe(response => saveAs(response, fileName));
	}
}
