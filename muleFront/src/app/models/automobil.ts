import { Marka } from './marka'
import { Model } from './model'
import { TipAutomobila } from './tipAutomobila'
import { Oprema } from './oprema'


export class Automobil{
    automobilID :number;
    brojSasije :string;
    kubikaza :number;
    vrstaGoriva :string;
    konjskaSnaga :string;
    godinaProizvodnje  :string;
    cenaAutomobila :number;
    bojaAutomobila :string;
    prodat  :boolean;
    marka:Marka;
    model:Model;
    tipAutomobila:TipAutomobila;
    oprema:Oprema

}