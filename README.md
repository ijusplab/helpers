# Helpers

General-purpose Javascript functions used by the Innovation Lab of the Federal Justice of São Paulo (iJuspLab).

The library was developed in Typescript and can be used both in Node and in the browser. Distribution files are located inside the folder `./dist` and type declaration files inside the folder `./types`.

## Installation:
```
npm install @ijuplab/helpers
```
or
```
yarn add @ijuplab/helpers
```

## Usage:
```javascript
const { CDate } = require('@ijusplab/helpers');

console.log(new CDate().toString());
```
or 
```javascript
ìmport { CDate } from '@ijusplab/helpers';

console.log(new CDate().toString());
```

## Usage in the browser through a CDN:

As a global object:
```html
<!-- Instalando no escopo global: -->
<script src="https://unpkg.com/@ijusplab/helpers/dist/index.umd.min.js"></script>

<script>
  // Os métodos da biblioteca estarão disponíveis por meio do objeto global Helpers.
  console.log(Helpers);
  console.log(new Helpers.CDate().toString());
</script>
```
As a ES2016 module:
```html
<!-- Instalando como um módulo: -->
<script type="module">
  import { CDate } from 'https://unpkg.com/@ijusplab/helpers/dist/index.esm.min.js';

  console.log(new CDate().toString());
</script>
```

## Licensing

### Code

All software files are distributed under the [MIT license](LICENSE). Copyright held by iJuspLab.

### Assets

Any institutional symbols, such as coats of arms, emblems, badges, logos etc. belonging to or representing the Federal Justice of São Paulo (Justiça Federal de São Paulo - JFSP), iJuspLab, Equipe de Gestão de Dados - EGD, Incubadora de Soluções Tecnológicas, Núcleo de Inovação Tecnológica - NUIT or any of their agencies, departments, sectors, branches, affiliates, partners or controlling organizations, either stored in this repository, or referenced herein by means of hyperlinks, are not licensed and may not be used without the prior written consent of the legal representatives of the Federal Justice of São Paulo.

<div style="display: flex; align-items: center; justify-content: space-around;">
  <img src="https://unpkg.com/@ijusplab/static-assets@latest/assets/ijusplab.png" height="80" />
  <img src="https://unpkg.com/@ijusplab/static-assets@latest/assets/incubadora.png" height="50" />
</div>


