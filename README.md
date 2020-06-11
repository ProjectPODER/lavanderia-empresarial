# lavanderia empresarial

## Install

    npm install git+http://git@gitlab.rindecuentas.org/equipo-qqw/company-laundry.git

## Usage

```
const dirty = "Alianzas Comerciales Casa S.a. De C.v.";
const laundry = require('company-laundry');

laundry.launder(dirty);
> Alianzas Comerciales Casa, S.A. de C.V.

laundry.simpleName(laundry.launder(dirty))
>> alianzas-comerciales-casa-sa-de-cv

laundry.isCompany(dirty)
>> true

laundry.companyType(dirty)
>> profit
```

## Test

```
cat test/testdata.csv | npm test
```


## Ayúdanos a lavar los nombres de las empresas!

  * agregando empresas a la lista [nombres bajo prueba](test/data.csv)
  * mandando parches para [los regex que arreglan los nombres](lib/laundry.js)
