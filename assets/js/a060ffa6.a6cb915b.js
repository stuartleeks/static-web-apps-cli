"use strict";(self.webpackChunk_azure_static_web_apps_cli_docs=self.webpackChunk_azure_static_web_apps_cli_docs||[]).push([[107],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),N=o(n),k=r,g=N["".concat(d,".").concat(k)]||N[k]||m[k]||l;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},4139:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={sidebar_position:7,title:"Environment Variables"},d="Environment Variables",o={unversionedId:"cli/env-vars",id:"cli/env-vars",title:"Environment Variables",description:"General Settings",source:"@site/docs/cli/env-vars.md",sourceDirName:"cli",slug:"/cli/env-vars",permalink:"/static-web-apps-cli/docs/cli/env-vars",editUrl:"https://github.com/azure/static-web-apps-cli/tree/main/docs/www/docs/cli/env-vars.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Environment Variables"},sidebar:"tutorialSidebar",previous:{title:"swa deploy",permalink:"/static-web-apps-cli/docs/cli/swa-deploy"},next:{title:"Configuring file",permalink:"/static-web-apps-cli/docs/cli/swa-config"}},u={},m=[{value:"General Settings",id:"general-settings",level:2},{value:"Emulator Settings",id:"emulator-settings",level:2},{value:"Deploy settings",id:"deploy-settings",level:2},{value:"Runtime settings",id:"runtime-settings",level:2},{value:"Azure Identity",id:"azure-identity",level:2}],N={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"environment-variables"},"Environment Variables"),(0,l.kt)("h2",{id:"general-settings"},"General Settings"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,l.kt)("th",{parentName:"tr",align:null},"Read Only?"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_VERSION"),(0,l.kt)("td",{parentName:"tr",align:null},"CLI version"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_DEBUG"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable verbose logs (",(0,l.kt)("inlineCode",{parentName:"td"},"silly"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"silent"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"log"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"info")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"error"),")"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"log"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DEBUG"),(0,l.kt)("td",{parentName:"tr",align:null},"General purpose environment variable used to enable verbose logs for commong tools"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"emulator-settings"},"Emulator Settings"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,l.kt)("th",{parentName:"tr",align:null},"Read Only?"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_API_LOCATION"),(0,l.kt)("td",{parentName:"tr",align:null},"Folder containing the source code of the API application"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"./api"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_APP_LOCATION"),(0,l.kt)("td",{parentName:"tr",align:null},"Folder containing the source code of the front-end application"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"./"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_OUTPUT_LOCATION"),(0,l.kt)("td",{parentName:"tr",align:null},"Folder containing the front-end public files"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"./"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"Host address to use for the CLI dev server"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"localhost"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"Host port to use for the CLI dev server"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4280"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_API_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"API server port to use"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"7071"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_APP_SSL"),(0,l.kt)("td",{parentName:"tr",align:null},"Use HTTPS to serve the front-end application and API (",(0,l.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),")"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_APP_SSL_KEY"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL key (.key) to use when enabling HTTPS"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_APP_SSL_CERT"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL certificate (.crt) to use when enabling HTTPS"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_STARTUP_COMMAND"),(0,l.kt)("td",{parentName:"tr",align:null},"Run a custom shell command or script file at startup"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_OPEN_BROWSER"),(0,l.kt)("td",{parentName:"tr",align:null},"Automatically open the CLI dev server in the default browser (",(0,l.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),")"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_DEVSERVER_TIMEOUT"),(0,l.kt)("td",{parentName:"tr",align:null},"The time to wait (in ms) when connecting to a front-end application's dev server"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"30000"))))),(0,l.kt)("h2",{id:"deploy-settings"},"Deploy settings"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,l.kt)("th",{parentName:"tr",align:null},"Read Only?"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_APP_NAME"),(0,l.kt)("td",{parentName:"tr",align:null},"Project name"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_DEPLOYMENT_TOKEN"),(0,l.kt)("td",{parentName:"tr",align:null},"Secret token used to authenticate with the Static Web Apps"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_DEPLOY_DRY_RUN"),(0,l.kt)("td",{parentName:"tr",align:null},"Simulate a deploy process without actually running it (",(0,l.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),")"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_DEPLOY_BINARY_VERSION"),(0,l.kt)("td",{parentName:"tr",align:null},"Deployment binary version to use"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stable"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_DEPLOY_BINARY"),(0,l.kt)("td",{parentName:"tr",align:null},"Absoluate path to the deploy binary"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_CLI_DEPLOY_ENV"),(0,l.kt)("td",{parentName:"tr",align:null},"the type of deployment environment where to deploy the project"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"preview"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AZURE_REGION_LOCATION"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure region where to deploy the project"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"West US 2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AZURE_RESOURCE_GROUP"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure resource group"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AZURE_SUBSCRIPTION_ID"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure subscription ID"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"runtime-settings"},"Runtime settings"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,l.kt)("th",{parentName:"tr",align:null},"Read Only?"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_RUNTIME_CONFIG"),(0,l.kt)("td",{parentName:"tr",align:null},"Absolute path to ",(0,l.kt)("inlineCode",{parentName:"td"},"staticwebapp.config.json")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_RUNTIME_CONFIG_LOCATION"),(0,l.kt)("td",{parentName:"tr",align:null},"Folder containing the file ",(0,l.kt)("inlineCode",{parentName:"td"},"staticwebapp.config.json")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWA_RUNTIME_WORKFLOW_LOCATION"),(0,l.kt)("td",{parentName:"tr",align:null},"Absolute path to ",(0,l.kt)("inlineCode",{parentName:"td"},".github/workflows/azure-static-web-apps-xyz.yml")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"azure-identity"},"Azure Identity"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,l.kt)("th",{parentName:"tr",align:null},"Read Only?"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AZURE_CLIENT_ID"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure Active Directory client ID"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AZURE_CLIENT_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure Active Directory secret"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AZURE_TENANT_ID"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure Active Directory tenant ID"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);