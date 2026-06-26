import{a7 as e,aa as f,c as k}from"./iframe-BlxKDeRn.js";import{a as D}from"./useMenu-BkS0Vn46.js";import{A as B}from"./Avatar-CNS7uviy.js";import{I as T}from"./ItemLabel-BJ4TUmk_.js";import{I as S}from"./ItemBase-C3ArhSiR.js";import{I as E}from"./ItemControls-DiLtTH9A.js";import{H as b}from"./Heading-PlHpJzKQ.js";import{S as N}from"./Checkmark-Bl2r91uW.js";import{S as _}from"./File-BK7UU44O.js";import{S as P}from"./Package-DdgH11kH.js";import{S as z}from"./Person-Ds42TcGW.js";import{s as A}from"./skatt-Eb53q4vT.js";import{S as x}from"./Plus-D-AEmb15.js";import{S as $}from"./SettingsModal-DtHl80GM.js";import{T as y}from"./Typography-CdulF3LZ.js";import"./preload-helper-PPVm8Dsz.js";import"./useHighlightedText-Cf7684f7.js";import"./ModalBody-BIhvolNB.js";import"./Section-phQiwh1A.js";import"./Flex-ETYKhAb5.js";import"./AvatarGroup-Cv5UWI0K.js";import"./ButtonGroup-WgKm7hCp.js";import"./ButtonIcon-COE5rocZ.js";import"./ButtonLabel-Cw-39_hF.js";const q="_evidence_fgrtk_1",C="_title_fgrtk_8",M="_list_fgrtk_16",v={evidence:q,title:C,list:M},V=({owner:t,service:a,items:r=[],groups:n={}})=>{const{menu:u}=D({items:r,groups:n,groupByKey:"groupId"});return e.jsxs("div",{children:[t&&e.jsx(J,{owner:t,service:a}),e.jsx("section",{className:v.evidence,children:u?.map((h,F)=>{const j=h.props||{};return e.jsxs(f.Fragment,{children:[j.title&&e.jsx(b,{className:v.title,children:j?.title}),e.jsx("ul",{className:v.list,children:h?.items?.map(R=>{const I=R.props||{};return e.jsx("li",{children:e.jsx(Y,{...I})},I.id)})})]},F)})})]})},H="_item_jhex4_1",L="_media_jhex4_12",w="_avatar_jhex4_19",K="_label_jhex4_25",O="_title_jhex4_31",G="_description_jhex4_37",s={item:H,media:L,avatar:w,label:K,title:O,description:G},J=({variant:t,owner:a,service:r,controls:n})=>e.jsxs(S,{as:"div",variant:t,className:s.item,children:[e.jsx("span",{className:s.media,children:e.jsx(B,{...a?.avatar,className:s.avatar})}),e.jsxs(T,{className:s.label,children:[e.jsx("strong",{className:s.title,children:r?.title}),e.jsx("span",{className:s.description,children:a?.name})]}),e.jsx(E,{children:n})]}),Q="_item_1q6pj_1",U="_media_1q6pj_12",W="_icon_1q6pj_19",X="_label_1q6pj_24",i={item:Q,media:U,icon:W,label:X},Y=({grantType:t,variant:a="tinted",controls:r,title:n})=>{const u=f.useMemo(()=>{switch(t){case"role":return z;case"package":return P;case"resource":return _;case"instance":return _;default:return N}},[t]);return e.jsxs(S,{as:"div",className:i.item,variant:a,children:[e.jsx("span",{className:i.media,children:e.jsx(u,{className:i.icon})}),e.jsx(T,{className:i.label,children:n}),r&&e.jsx(E,{children:r})]})},fe={title:"Inbox/Dialog/AuthEvidence",component:V,tags:[],decorators:[t=>e.jsxs($,{variant:"content",title:"Dialog title",open:!0,onClose:()=>alert("Close"),buttons:[{label:"Åpne tilgangsstyring"},{variant:"outline",label:"Lukk"},{as:"a",href:"//vg.no",variant:"ghost",label:"Finn innhold for tjenesten i innboks"}],children:[e.jsx(y,{children:e.jsx("p",{children:"Slik har du tilgang:"})}),e.jsx(t,{}),e.jsx(b,{size:"xs",variant:"subtle",weight:"normal",children:"Ressurs-id: RF-1453."}),e.jsx(y,{children:e.jsx("p",{children:"Du kan endre eller si fra deg tilganger gjennom tilgangsstyring."})})]})],args:{owner:{avatar:A,name:"Skatteetaten"},service:{title:"Endring av navn (RF-1453)"},groups:{package:{title:"Via tilgangspakker"},role:{title:"Via rolle"},resource:{title:"Via enkelttjeneste"},instance:{title:"Delt fra innboks"}},items:[{id:"1",groupId:"role",grantType:"role",title:"Daglig leder"},{id:"2",groupId:"role",grantType:"role",title:"Styremedlem"},{id:"3",groupId:"package",grantType:"package",title:"Folkeregisterets navnepakke"},{id:"5",groupId:"resource",grantType:"resource",title:"Endring av navn (RF-1453)"},{id:"6",groupId:"instance",grantType:"instance",title:"Dialog title"}]}},o={args:{}},l={args:{items:[{id:"1",groupId:"role",grantType:"role",title:"Daglig leder"},{id:"2",groupId:"role",grantType:"role",title:"Styremedlem"}]}},c={args:{items:[{id:"3",groupId:"package",grantType:"package",title:"Folkeregisterets navnepakke"}]}},g={args:{items:[{id:"5",groupId:"resource",grantType:"resource",title:"Endring av navn (RF-1453)"}]}},p={args:{items:[{id:"5",groupId:"package",grantType:"package",title:"Folkeregisterets navnepakke",variant:"default",controls:e.jsxs(k,{variant:"ghost",size:"xs",children:[e.jsx(x,{}),e.jsx("span",{children:"Be om tilgang"})]})},{id:"7",groupId:"resource",grantType:"resource",title:"Endring av navn (RF-1453)"}]}},d={args:{items:[{id:"5",groupId:"instance",grantType:"instance",title:"Dialog title"}]}},m={args:{groups:{package:{title:"Tilgangspakker"},resource:{title:"Tjeneste"},instance:{title:"Delt fra innboks"}},items:[{id:"5",groupId:"package",grantType:"package",title:"Folkeregisterets navnepakke",variant:"default",controls:e.jsxs(k,{variant:"ghost",size:"xs",children:[e.jsx(x,{}),e.jsx("span",{children:"Be om tilgang"})]})},{id:"7",groupId:"resource",grantType:"resource",variant:"default",title:"Endring av navn (RF-1453)",controls:e.jsxs(k,{variant:"ghost",size:"xs",children:[e.jsx(x,{}),e.jsx("span",{children:"Be om tilgang"})]})},{id:"5",groupId:"instance",grantType:"instance",title:"Dialog title"}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      groupId: 'role',
      grantType: 'role',
      title: 'Daglig leder'
    }, {
      id: '2',
      groupId: 'role',
      grantType: 'role',
      title: 'Styremedlem'
    }]
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '3',
      groupId: 'package',
      grantType: 'package',
      title: 'Folkeregisterets navnepakke'
    }]
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '5',
      groupId: 'resource',
      grantType: 'resource',
      title: 'Endring av navn (RF-1453)'
    }]
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '5',
      groupId: 'package',
      grantType: 'package',
      title: 'Folkeregisterets navnepakke',
      variant: 'default',
      controls: <Button variant="ghost" size="xs">
            <PlusIcon />
            <span>Be om tilgang</span>
          </Button>
    }, {
      id: '7',
      groupId: 'resource',
      grantType: 'resource',
      title: 'Endring av navn (RF-1453)'
    }]
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '5',
      groupId: 'instance',
      grantType: 'instance',
      title: 'Dialog title'
    }]
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    groups: {
      package: {
        title: 'Tilgangspakker'
      },
      resource: {
        title: 'Tjeneste'
      },
      instance: {
        title: 'Delt fra innboks'
      }
    },
    items: [{
      id: '5',
      groupId: 'package',
      grantType: 'package',
      title: 'Folkeregisterets navnepakke',
      variant: 'default',
      controls: <Button variant="ghost" size="xs">
            <PlusIcon />
            <span>Be om tilgang</span>
          </Button>
    }, {
      id: '7',
      groupId: 'resource',
      grantType: 'resource',
      variant: 'default',
      title: 'Endring av navn (RF-1453)',
      controls: <Button variant="ghost" size="xs">
            <PlusIcon />
            <span>Be om tilgang</span>
          </Button>
    }, {
      id: '5',
      groupId: 'instance',
      grantType: 'instance',
      title: 'Dialog title'
    }]
  }
}`,...m.parameters?.docs?.source}}};const Te=["Default","Role","Package","Resource","ResourceExtended","Instance","InstanceExtended"];export{o as Default,d as Instance,m as InstanceExtended,c as Package,g as Resource,p as ResourceExtended,l as Role,Te as __namedExportsOrder,fe as default};
