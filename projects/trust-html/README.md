trust-html-pipe
=====
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Methods](#methods)
5. [Git repository](#git)
6. [Build](#build)
7. [Publish to npm](#publish)
8. [Version](#version)

### <a name="description"></a>1. Description
`trust-html-pipe` or `TrustHtmlPipe` is a pipe for angular2 projects 
which allows you to inject the HTML content into your templates.
  
### <a name="installation"></a>2. Installation
Install the module into your application and save it as a dev 
dependency in your `package.json` file  
```
npm install trust-html-pipe --save-dev
```

### <a name="usage"></a>3. Usage
In order to use the `TrustHtmlPipe` you have to include/import 
the `TrustHtmlModule` into your application:

```typescript
import {TrustHtmlModule} from 'trust-html-pipe';

@NgModule({
  //...
  imports: [
    //...
    TrustHtmlModule
  ],
  //...
})
```
  
Or you can include the pipe directly in your components declarations list in your `@NgModule(...)`:
```typescript
import {TrustHtmlPipe} from "trust-html-pipe";

@NgModule({
  //...
  declarations: [TrustHtmlPipe],
  //...
})
```

Use it in your template to "inject" trusted HTML content:
```angular2html
<div [innerHTML]="'<strong>test html content</strong>' | trustHtml"></div>
```
  
Output:
```html
<div>
  <strong>test html content</strong>
</div>
```
  
  
### <a name="methods"></a>4. Methods
  
#### transform(htmlString: string): any
Bypass security and trust the given value to be safe HTML. 
The sanitizer will leave safe HTML intact.  
**WARNING:** in Angular version 2.x, calling this method with untrusted user data exposes your 
application to XSS security risks!
  
*Parameters:*  
**htmlString** - HTML string which should not be escaped.  
  
*Return:*  
Method returns the intact HTML string.  
  
  
### <a name="git"></a>5. Git repository
[https://github.com/tvicpe/trust-html-pipe](https://github.com/tvicpe/trust-html-pipe)

### <a name="build"></a>6. Build
To build the final package run this command:
```
ng build trust-html
```
The build process will generate the packed sources into the `dist` folder.  

### <a name="publish"></a>7. Publish to npm
To publish the new version to `npm`, go into the `dist` folder:
```
cd ./dist/trust-html
```
and publish it to npm:
```
npm publish
```

### <a name="version"></a>8. Version
1.0.0
