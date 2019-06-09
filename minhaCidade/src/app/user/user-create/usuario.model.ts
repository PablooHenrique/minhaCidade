import {Desafio} from '../../desafio/create/desafio.model';

export interface Usuario {
	id?: number;
	nome?: string;
	cpf?: string;
	senha?: string;

	desafiosRealizados?: Desafio[];
}
