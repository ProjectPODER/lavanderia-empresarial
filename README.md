# lavanderia empresarial

[![build status](http://gitlab.rindecuentas.org/kevin/company-laundry/badges/master/build.svg)](http://gitlab.rindecuentas.org/kevin/company-laundry/commits/master)

## Installation

    npm install git+ssh://git@gitlab.rindecuentas.org:2203/kevin/company-laundry.git

## Usage

    const dirty = "Alianzas Comerciales Casa S.a. De C.v.";
    const laundry = require('company-laundry');
    laundry(dirty);
    > Alianzas Comerciales Casa, S.A. de C.V.

## Boot as REST API

You can also boot as a REST API from the cli. Then you can serve it on your network
and people can clean there data.

    node apps -e

### tira una cadena de caracters

    https://laundry-company.herokuapp.com/Alianzas Comerciales Casa S.a. De C.v.

### te la cambiamos por otra

    Alianzas Comerciales Casa, S.A. de C.V.

## Ayudanos lavar los nombres de las empresas!

  * agregando empresas a la lista [nombres bajo prueba](test/data.csv)
  * mandando parches para [los regex que arreglan los nombres](lib/laundry.js)
