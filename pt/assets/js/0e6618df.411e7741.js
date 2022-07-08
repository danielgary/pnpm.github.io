"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6544],{9613:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>u});var t=a(9496);function p(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){p(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,p=function(e,n){if(null==e)return{};var a,t,p={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(p[a]=e[a]);return p}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var s=t.createContext({}),l=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,p=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=l(a),u=p,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return a?t.createElement(k,i(i({ref:n},d),{},{components:a})):t.createElement(k,i({ref:n},d))}));function u(e,n){var a=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=a.length,i=new Array(o);i[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:p,i[1]=r;for(var l=2;l<o;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3974:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=a(665),p=a(151),o=(a(9496),a(9613)),i=["components"],r={id:"package_json",title:"package.json"},s=void 0,l={unversionedId:"package_json",id:"package_json",title:"package.json",description:"O arquivo de manifesto de um pacote. Cont\xe9m todos os metadados do pacote, incluindo depend\xeancias, t\xedtulo, autor e etc. Este \xe9 um padr\xe3o preservado por todos os principais gerenciadores de pacotes do Node.JS, incluindo o pnpm.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/package_json.md",sourceDirName:".",slug:"/package_json",permalink:"/pt/next/package_json",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"package_json",title:"package.json"},sidebar:"docs",previous:{title:"deploy pnpm",permalink:"/pt/next/cli/deploy"},next:{title:".npmrc",permalink:"/pt/next/npmrc"}},d={},c=[{value:"engines",id:"engines",level:2},{value:"dependenciesMeta",id:"dependenciesmeta",level:2},{value:"dependenciesMeta.*.injected",id:"dependenciesmetainjected",level:3},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",level:2},{value:"peerDependenciesMeta.*.optional",id:"peerdependenciesmetaoptional",level:3},{value:"publishConfig",id:"publishconfig",level:2},{value:"publishConfig.executableFiles",id:"publishconfigexecutablefiles",level:3},{value:"publishConfig.directory",id:"publishconfigdirectory",level:3},{value:"pnpm.overrides",id:"pnpmoverrides",level:2},{value:"pnpm.packageExtensions",id:"pnpmpackageextensions",level:2},{value:"pnpm.peerDependencyRules",id:"pnpmpeerdependencyrules",level:2},{value:"pnpm.peerDependencyRules.ignoreMissing",id:"pnpmpeerdependencyrulesignoremissing",level:3},{value:"pnpm.peerDependencyRules.allowedVersions",id:"pnpmpeerdependencyrulesallowedversions",level:3},{value:"pnpm.peerDependencyRules.allowAny",id:"pnpmpeerdependencyrulesallowany",level:3},{value:"pnpm.neverBuiltDependencies",id:"pnpmneverbuiltdependencies",level:2},{value:"pnpm.onlyBuiltDependencies",id:"pnpmonlybuiltdependencies",level:2},{value:"pnpm.allowedDeprecatedVersions",id:"pnpmalloweddeprecatedversions",level:2},{value:"pnpm.patchedDependencies",id:"pnpmpatcheddependencies",level:2},{value:"resolutions",id:"resolutions",level:2}],m={toc:c};function u(e){var n=e.components,a=(0,p.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"O arquivo de manifesto de um pacote. Cont\xe9m todos os metadados do pacote, incluindo depend\xeancias, t\xedtulo, autor e etc. Este \xe9 um padr\xe3o preservado por todos os principais gerenciadores de pacotes do Node.JS, incluindo o pnpm."),(0,o.kt)("h2",{id:"engines"},"engines"),(0,o.kt)("p",null,"Voc\xea pode especificar a vers\xe3o do Node e do pnpm em que o seu software funciona:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),(0,o.kt)("p",null,"Durante o desenvolvimento local, o pnpm sempre falhar\xe1 com uma mensagem de erro se sua vers\xe3o n\xe3o corresponder \xe0 especificada no campo ",(0,o.kt)("inlineCode",{parentName:"p"},"engines"),"."),(0,o.kt)("p",null,"A menos que o usu\xe1rio tenha definido a flag de configura\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"engine-strict")," (veja ",(0,o.kt)("a",{parentName:"p",href:"/pt/next/npmrc#engine-strict"},".npmrc"),"), esse campo \xe9 apenas consultivo e s\xf3 produzir\xe1 avisos quando seu pacote for instalado como depend\xeancia."),(0,o.kt)("h2",{id:"dependenciesmeta"},"dependenciesMeta"),(0,o.kt)("h3",{id:"dependenciesmetainjected"},"dependenciesMeta.*.injected"),(0,o.kt)("p",null,"Se for definido como ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," para uma depend\xeancia local, o pacote ter\xe1 um link f\xedsico para o diret\xf3rio de m\xf3dulos, e n\xe3o um link simb\xf3lico."),(0,o.kt)("p",null,"Por exemplo, o seguinte ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," num espa\xe7o de trabalho criar\xe1 um link simb\xf3lico para ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," no diret\xf3rio ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," de ",(0,o.kt)("inlineCode",{parentName:"p"},"card"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "card",\n  "dependencies": {\n    "button": "workspace:1.0.0"\n  }\n}\n')),(0,o.kt)("p",null,"Mas e se ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," tiver ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," em suas depend\xeancias? Se todos os projetos no monorepo usarem as mesmas vers\xf5es de ",(0,o.kt)("inlineCode",{parentName:"p"},"react"),", ent\xe3o n\xe3o h\xe1 problema. Mas e se ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," for exigido por ",(0,o.kt)("inlineCode",{parentName:"p"},"card")," que usa ",(0,o.kt)("inlineCode",{parentName:"p"},"react@16")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"form")," com ",(0,o.kt)("inlineCode",{parentName:"p"},"react@17"),"? Sem usar ",(0,o.kt)("inlineCode",{parentName:"p"},"inject"),", voc\xea teria que escolher uma \xfanica vers\xe3o de ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," e instal\xe1-la como depend\xeancia de desenvolvimento de ",(0,o.kt)("inlineCode",{parentName:"p"},"button"),". Mas usando o campo ",(0,o.kt)("inlineCode",{parentName:"p"},"injected")," voc\xea pode injetar ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," em um pacote, e ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," ser\xe1 instalado com a vers\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," desse pacote."),(0,o.kt)("p",null,"Ent\xe3o esse ser\xe1 o ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," de ",(0,o.kt)("inlineCode",{parentName:"p"},"card"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "card",\n  "dependencies": {\n    "button": "workspace:1.0.0",\n    "react": "16"\n  },\n  "dependenciesMeta": {\n    "button": {\n      "injected": true\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"button")," ser\xe1 vinculado \xe0s depend\xeancias de ",(0,o.kt)("inlineCode",{parentName:"p"},"card"),", e ",(0,o.kt)("inlineCode",{parentName:"p"},"react@16")," ser\xe1 associado as depend\xeancias de ",(0,o.kt)("inlineCode",{parentName:"p"},"card/node_modules/button"),"."),(0,o.kt)("p",null,"E esse ser\xe1 o ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," de ",(0,o.kt)("inlineCode",{parentName:"p"},"card"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "form",\n  "dependencies": {\n    "button": "workspace:1.0.0",\n    "react": "17"\n  },\n  "dependenciesMeta": {\n    "button": {\n      "injected": true\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"button")," ser\xe1 vinculado \xe0s depend\xeancias de ",(0,o.kt)("inlineCode",{parentName:"p"},"card"),", e ",(0,o.kt)("inlineCode",{parentName:"p"},"react@17")," ser\xe1 associado as depend\xeancias de ",(0,o.kt)("inlineCode",{parentName:"p"},"card/node_modules/button"),"."),(0,o.kt)("h2",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),(0,o.kt)("p",null,"Esse campo lista algumas informa\xe7\xf5es extras relacionadas \xe0s depend\xeancias listadas no campo ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies"),"."),(0,o.kt)("h3",{id:"peerdependenciesmetaoptional"},"peerDependenciesMeta.*.optional"),(0,o.kt)("p",null,"Se for definido como ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", a depend\xeancia selecionada ser\xe1 marcada como opcional pelo gerenciador de pacotes. Portanto, o consumidor que o omitir n\xe3o ser\xe1 mais relatado como um erro."),(0,o.kt)("p",null,"Por exemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependencies": {\n        "foo": "1"\n    },\n    "peerDependenciesMeta": {\n        "foo": {\n            "optional": true\n        },\n        "bar": {\n            "optional": true\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Observe que, embora ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," n\xe3o tenha sido especificado em ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", \xe9 marcado como opcional. O pnpm, portanto, assumir\xe1 que qualquer vers\xe3o de ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," \xe9 v\xe1lida. No entanto, ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," \xe9 opcional, mas apenas para a especifica\xe7\xe3o da vers\xe3o necess\xe1ria."),(0,o.kt)("h2",{id:"publishconfig"},"publishConfig"),(0,o.kt)("p",null,"\xc9 poss\xedvel substituir alguns campos no manifesto antes que o pacote seja conclu\xeddo. Os seguintes campos podem ser substitu\xeddos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#bin"},(0,o.kt)("inlineCode",{parentName:"a"},"bin"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#main"},(0,o.kt)("inlineCode",{parentName:"a"},"main"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/esm.html#esm_package_exports"},(0,o.kt)("inlineCode",{parentName:"a"},"exports"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#types"},(0,o.kt)("inlineCode",{parentName:"a"},"types")," ou ",(0,o.kt)("inlineCode",{parentName:"a"},"typings"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#module"},(0,o.kt)("inlineCode",{parentName:"a"},"module"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#browser"},(0,o.kt)("inlineCode",{parentName:"a"},"browser"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#esnext"},(0,o.kt)("inlineCode",{parentName:"a"},"esnext"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#es2015"},(0,o.kt)("inlineCode",{parentName:"a"},"es2015"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#unpkg-1"},(0,o.kt)("inlineCode",{parentName:"a"},"unpkg"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#microbundle"},(0,o.kt)("inlineCode",{parentName:"a"},"umd:main"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions"},(0,o.kt)("inlineCode",{parentName:"a"},"typesVersions"))),(0,o.kt)("li",{parentName:"ul"},"cpu"),(0,o.kt)("li",{parentName:"ul"},"os")),(0,o.kt)("p",null,"Para subscrever um campo, adicione a vers\xe3o de publica\xe7\xe3o do campo para o ",(0,o.kt)("inlineCode",{parentName:"p"},"publishConfig"),"."),(0,o.kt)("p",null,"Por exemplo, o seguinte ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),(0,o.kt)("p",null,"Ser\xe1 publicado como:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')),(0,o.kt)("h3",{id:"publishconfigexecutablefiles"},"publishConfig.executableFiles"),(0,o.kt)("p",null,"Por padr\xe3o, por motivos de portabilidade, nenhum arquivo, exceto aqueles listados no campo ",(0,o.kt)("inlineCode",{parentName:"p"},"bin"),", ser\xe1 marcado como execut\xe1vel no arquivo de pacote resultante. O campo ",(0,o.kt)("inlineCode",{parentName:"p"},"executableFilles")," permite declarar campos adicionais que devem ter a flag execut\xe1vel (+x) definida mesmo que n\xe3o sejam diretamente acess\xedveis atrav\xe9s do campo ",(0,o.kt)("inlineCode",{parentName:"p"},"bin"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "publishConfig": {\n    "executableFiles": [\n      "./dist/shim.js"\n    ]\n  }\n}\n')),(0,o.kt)("h3",{id:"publishconfigdirectory"},"publishConfig.directory"),(0,o.kt)("p",null,"Voc\xea tamb\xe9m pode usar o campo ",(0,o.kt)("inlineCode",{parentName:"p"},"publishConfig.directory")," para customizar o subdiret\xf3rio publicado em rela\xe7\xe3o ao ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," atual."),(0,o.kt)("p",null,"Espera-se que tenha uma vers\xe3o modificada do pacote atual no diret\xf3rio especificado (geralmente usando ferramentas de compila\xe7\xe3o de terceiros)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Nesse exemplo, a pasta ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," deve conter um ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "publishConfig": {\n    "directory": "dist"\n  }\n}\n')),(0,o.kt)("h2",{id:"pnpmoverrides"},"pnpm.overrides"),(0,o.kt)("p",null,"Esse campo permite que voc\xea instrua o pnpm a substituir qualquer depend\xeancia no gr\xe1fico de depend\xeancias. Isso \xe9 \xfatil para for\xe7ar todos os seus pacotes a usar uma \xfanica vers\xe3o de uma depend\xeancia, fazer compatibilidade de uma corre\xe7\xe3o ou substituir uma depend\xeancia por um fork."),(0,o.kt)("p",null,"Observe que o campo de substitui\xe7\xf5es s\xf3 pode ser definido na raiz do projeto."),(0,o.kt)("p",null,"Um exemplo do campo ",(0,o.kt)("inlineCode",{parentName:"p"},'"pnpm"."overrides"'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "foo": "^1.0.0",\n      "quux": "npm:@myorg/quux@^1.0.0",\n      "bar@^2.1.0": "3.0.0",\n      "qar@1>zoo": "2"\n    }\n  }\n}\n')),(0,o.kt)("p",null,'Voc\xea pode especificar o pacote ao qual a depend\xeancia substitu\xedda pertence separando o seletor de pacotes do seletor da depend\xeancia com um ">", por exemplo ',(0,o.kt)("inlineCode",{parentName:"p"},"qar@1>zoo")," ir\xe1 apenas substituir a depend\xeancia ",(0,o.kt)("inlineCode",{parentName:"p"},"zoo")," de ",(0,o.kt)("inlineCode",{parentName:"p"},"qar@1"),", n\xe3o para quaisquer outras depend\xeancias."),(0,o.kt)("h2",{id:"pnpmpackageextensions"},"pnpm.packageExtensions"),(0,o.kt)("p",null,"Os campos ",(0,o.kt)("inlineCode",{parentName:"p"},"packageExtensions")," oferecem uma maneira de estender as defini\xe7\xf5es de pacotes existentes com informa\xe7\xf5es adicionais. Por exemplo, se ",(0,o.kt)("inlineCode",{parentName:"p"},"react-redux")," deve ter ",(0,o.kt)("inlineCode",{parentName:"p"},"react-dom")," em suas ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies")," mas n\xe3o tem, \xe9 poss\xedvel corrigir ",(0,o.kt)("inlineCode",{parentName:"p"},"react-redux")," usando ",(0,o.kt)("inlineCode",{parentName:"p"},"packageExtensions"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "react-redux": {\n        "peerDependencies": {\n          "react-dom": "*"\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"As chaves em ",(0,o.kt)("inlineCode",{parentName:"p"},"packageExtensions")," s\xe3o nomes de pacotes ou nomes de pacotes com intervalos semver, portanto, \xe9 poss\xedvel corrigir apenas algumas vers\xf5es de um pacote:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "react-redux@1": {\n        "peerDependencies": {\n          "react-dom": "*"\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Os campos a seguir podem ser extendidos usando ",(0,o.kt)("inlineCode",{parentName:"p"},"packageExtensions"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependenciesMeta"),"."),(0,o.kt)("p",null,"Um exemplo maior:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "express@1": {\n        "optionalDependencies": {\n          "typescript": "2"\n        }\n      },\n      "fork-ts-checker-webpack-plugin": {\n        "dependencies": {\n          "@babel/core": "1"\n        },\n        "peerDependencies": {\n          "eslint": ">= 6"\n        },\n        "peerDependenciesMeta": {\n          "eslint": {\n            "optional": true\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Com Yarn, mantemos uma base de dados de ",(0,o.kt)("inlineCode",{parentName:"p"},"packageExtensions")," para corre\xe7\xe3o de pacotes quebrados no ecossistema. Se voc\xea usa ",(0,o.kt)("inlineCode",{parentName:"p"},"packageExtensions"),", considere enviar um Pull Request e contribuir com a sua extens\xe3o para a base de dados ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yarnpkg/berry/blob/master/packages/yarnpkg-extensions/sources/index.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"@yarnpkg/extensions")),"."))),(0,o.kt)("h2",{id:"pnpmpeerdependencyrules"},"pnpm.peerDependencyRules"),(0,o.kt)("h3",{id:"pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing"),(0,o.kt)("p",null,"pnpm n\xe3o imprimir\xe1 avisos sobre depend\xeancias ausentes dessa lista."),(0,o.kt)("p",null,"Por exemplo, com a seguinte configura\xe7\xe3o, o pnpm n\xe3o imprimir\xe1 avisos se a depend\xeancia precisa do ",(0,o.kt)("inlineCode",{parentName:"p"},"react"),", mas ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," n\xe3o estiver instalado:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "ignoreMissing": ["react"]\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Padr\xf5es de nome de pacote tamb\xe9m podem ser usados:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "ignoreMissing": ["@babel/*", "@eslint/*"]\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions"),(0,o.kt)("p",null,"Os avisos de depend\xeancia n\xe3o atendidos n\xe3o ser\xe3o exibidos para depend\xeancias do intervalo espec\xedfico."),(0,o.kt)("p",null,"For instance, if you have some dependencies that need ",(0,o.kt)("inlineCode",{parentName:"p"},"react@16")," but you know that they work fine with ",(0,o.kt)("inlineCode",{parentName:"p"},"react@17"),", then you may use the following configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "allowedVersions": {\n        "react": "17"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"This will tell pnpm that any dependency that has react in its peer dependencies should allow ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," v17 to be installed."),(0,o.kt)("h3",{id:"pnpmpeerdependencyrulesallowany"},"pnpm.peerDependencyRules.allowAny"),(0,o.kt)("p",null,"Added in: v7.3.0"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"allowAny")," is an array of package name patterns, any peer dependency matching the pattern will be resolved from any version, regardless of the range specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies"),". For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "allowAny": ["@babel/*", "eslint"]\n    }\n  }\n}\n')),(0,o.kt)("p",null,"The above setting will mute any warnings about peer dependency version mismatches related to ",(0,o.kt)("inlineCode",{parentName:"p"},"@babel/")," packages or ",(0,o.kt)("inlineCode",{parentName:"p"},"eslint"),"."),(0,o.kt)("h2",{id:"pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),(0,o.kt)("p",null,'This field allows to ignore the builds of specific dependencies. The "preinstall", "install", and "postinstall" scripts of the listed packages will not be executed during installation.'),(0,o.kt)("p",null,"An example of the ",(0,o.kt)("inlineCode",{parentName:"p"},'"pnpm"."neverBuiltDependencies"')," field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "neverBuiltDependencies": ["fsevents", "level"]\n  }\n}\n')),(0,o.kt)("h2",{id:"pnpmonlybuiltdependencies"},"pnpm.onlyBuiltDependencies"),(0,o.kt)("p",null,"A list of package names that are allowed to be executed during installation. If this field exists, only the listed packages will be able to run install scripts."),(0,o.kt)("p",null,"Exemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "onlyBuiltDependencies": ["fsevents"]\n  }\n}\n')),(0,o.kt)("h2",{id:"pnpmalloweddeprecatedversions"},"pnpm.allowedDeprecatedVersions"),(0,o.kt)("p",null,"Adicionado em: v7.2.0"),(0,o.kt)("p",null,"Essa configura\xe7\xe3o permite silenciar avisos de descontinua\xe7\xe3o de pacotes espec\xedficos."),(0,o.kt)("p",null,"Exemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "allowedDeprecatedVersions": {\n      "express": "1",\n      "request": "*"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Com a configura\xe7\xe3o acima, o pnpm n\xe3o imprimir\xe1 avisos de descontinua\xe7\xe3o sobre qualquer vers\xe3o de ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," e sobre a vers\xe3o v1 de ",(0,o.kt)("inlineCode",{parentName:"p"},"express"),"."),(0,o.kt)("h2",{id:"pnpmpatcheddependencies"},"pnpm.patchedDependencies"),(0,o.kt)("p",null,"Added in: v7.4.0"),(0,o.kt)("p",null,"This field is added/updated automatically when you run ",(0,o.kt)("a",{parentName:"p",href:"/pt/next/cli/patch-commit"},"pnpm patch-commit"),". It is a dictionary where the key should be the package name and exact version. The value should be a relative path to a patch file."),(0,o.kt)("p",null,"Exemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "express@4.18.1": "patches/express@4.18.1.patch"\n  }\n}\n')),(0,o.kt)("h2",{id:"resolutions"},"resolutions"),(0,o.kt)("p",null,"Same as ",(0,o.kt)("a",{parentName:"p",href:"#pnpmoverrides"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm.overrides")),". We read it for easier migration from Yarn."))}u.isMDXComponent=!0}}]);