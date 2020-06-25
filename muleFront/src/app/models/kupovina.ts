import { Zaposleni } from './zaposleni';
import { Automobil } from './automobil';
import { Osiguranje } from './osiguranje';
import { Kupac } from './kupac';

export class Kupovina{
    kupovinaID:number;
    tipKupovine:string;
    brojUgovora:string;
    kupovinaOpis:string;
    kupovinaDatum:Date;
    popust:number;
    zaposleni:Zaposleni;
    automobil:Automobil;
    brojPolise:Osiguranje;
    kupac:Kupac;
}