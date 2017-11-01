# lavanderia empresarial

## Install

    npm install git+ssh://git@gitlab.rindecuentas.org:2203/kevin/company-laundry.git

## Usage

    const dirty = "Alianzas Comerciales Casa S.a. De C.v.";
    const laundry = require('company-laundry');
    laundry(dirty);
    > Alianzas Comerciales Casa, S.A. de C.V.

## Ayudanos lavar los nombres de las empresas!

  * agregando empresas a la lista [nombres bajo prueba](test/data.csv)
  * mandando parches para [los regex que arreglan los nombres](lib/laundry.js)
