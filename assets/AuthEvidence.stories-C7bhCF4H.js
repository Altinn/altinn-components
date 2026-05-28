import{p as e,s as f}from"./iframe-BBbEwSaq.js";import{a as B}from"./useMenu-CP6B3JUk.js";import{A as D}from"./Avatar-RSQnlVTq.js";import{I as T}from"./ItemLabel-B9gTJ9up.js";import{I as S}from"./ItemBase-Fqig4UIJ.js";import{I as E}from"./ItemControls-DaNsbzwN.js";import{H as b}from"./Heading-DDkqEyV3.js";import{S as N}from"./Checkmark-BcTHEh83.js";import{S as _}from"./File-Bh6eAgDO.js";import{S as P}from"./Package-BHVu11lV.js";import{S as z}from"./Person-CC7pE7Pl.js";import{s as A}from"./skatt-Eb53q4vT.js";import{S as k}from"./Plus-CmpsnneT.js";import{B as x}from"./Button-DpW4Pu6O.js";import{S as $}from"./SettingsModal-CoQVwDnP.js";import{T as y}from"./Typography-41mT2wo8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-awH0sXcw.js";import"./Skeleton-DFF9p8Mx.js";import"./useId-DZp72-eX.js";import"./useHighlightedText-DORd4ETJ.js";import"./tooltip-D3G3Ewte.js";import"./ModalBody-OK8R4PDd.js";import"./Section-Dq0xs0Y_.js";import"./Flex-Cc0Ueohf.js";import"./XMark-Dw8JSfSd.js";import"./Icon-Cx6QAjG2.js";import"./AvatarGroup-DM7mpZJM.js";import"./ButtonGroup-oq7iIeFJ.js";import"./ButtonIcon-DIFqTzZe.js";import"./ButtonLabel-B0mhwuEU.js";const q="_item_jhex4_1",C="_media_jhex4_12",M="_avatar_jhex4_19",V="_label_jhex4_25",H="_title_jhex4_31",L="_description_jhex4_37",s={item:q,media:C,avatar:M,label:V,title:H,description:L},w=({variant:t,owner:r,service:a,controls:n})=>e.jsxs(S,{as:"div",variant:t,className:s.item,children:[e.jsx("span",{className:s.media,children:e.jsx(D,{...r?.avatar,className:s.avatar})}),e.jsxs(T,{className:s.label,children:[e.jsx("strong",{className:s.title,children:a?.title}),e.jsx("span",{className:s.description,children:r?.name})]}),e.jsx(E,{children:n})]}),K="_item_1q6pj_1",O="_media_1q6pj_12",G="_icon_1q6pj_19",J="_label_1q6pj_24",i={item:K,media:O,icon:G,label:J},Q=({grantType:t,variant:r="tinted",controls:a,title:n})=>{const u=f.useMemo(()=>{switch(t){case"role":return z;case"package":return P;case"resource":return _;case"instance":return _;default:return N}},[t]);return e.jsxs(S,{as:"div",className:i.item,variant:r,children:[e.jsx("span",{className:i.media,children:e.jsx(u,{className:i.icon})}),e.jsx(T,{className:i.label,children:n}),a&&e.jsx(E,{children:a})]})},U="_evidence_fgrtk_1",W="_title_fgrtk_8",X="_list_fgrtk_16",v={evidence:U,title:W,list:X},Y=({owner:t,service:r,items:a=[],groups:n={}})=>{const{menu:u}=B({items:a,groups:n,groupByKey:"groupId"});return e.jsxs("div",{children:[t&&e.jsx(w,{owner:t,service:r}),e.jsx("section",{className:v.evidence,children:u?.map((h,F)=>{const j=h.props||{};return e.jsxs(f.Fragment,{children:[j.title&&e.jsx(b,{className:v.title,children:j?.title}),e.jsx("ul",{className:v.list,children:h?.items?.map(R=>{const I=R.props||{};return e.jsx("li",{children:e.jsx(Q,{...I})},I.id)})})]},F)})})]})},Be={title:"Inbox/Dialog/AuthEvidence",component:Y,tags:[],decorators:[t=>e.jsxs($,{variant:"content",title:"Dialog title",open:!0,onClose:()=>alert("Close"),buttons:[{label:"Åpne tilgangsstyring"},{variant:"outline",label:"Lukk"},{as:"a",href:"//vg.no",variant:"ghost",label:"Finn innhold for tjenesten i innboks"}],children:[e.jsx(y,{children:e.jsx("p",{children:"Slik har du tilgang:"})}),e.jsx(t,{}),e.jsx(b,{size:"xs",variant:"subtle",weight:"normal",children:"Ressurs-id: RF-1453."}),e.jsx(y,{children:e.jsx("p",{children:"Du kan endre eller si fra deg tilganger gjennom tilgangsstyring."})})]})],args:{owner:{avatar:A,name:"Skatteetaten"},service:{title:"Endring av navn (RF-1453)"},groups:{package:{title:"Via tilgangspakker"},role:{title:"Via rolle"},resource:{title:"Via enkelttjeneste"},instance:{title:"Delt fra innboks"}},items:[{id:"1",groupId:"role",grantType:"role",title:"Daglig leder"},{id:"2",groupId:"role",grantType:"role",title:"Styremedlem"},{id:"3",groupId:"package",grantType:"package",title:"Folkeregisterets navnepakke"},{id:"5",groupId:"resource",grantType:"resource",title:"Endring av navn (RF-1453)"},{id:"6",groupId:"instance",grantType:"instance",title:"Dialog title"}]}},o={args:{}},l={args:{items:[{id:"1",groupId:"role",grantType:"role",title:"Daglig leder"},{id:"2",groupId:"role",grantType:"role",title:"Styremedlem"}]}},c={args:{items:[{id:"3",groupId:"package",grantType:"package",title:"Folkeregisterets navnepakke"}]}},p={args:{items:[{id:"5",groupId:"resource",grantType:"resource",title:"Endring av navn (RF-1453)"}]}},g={args:{items:[{id:"5",groupId:"package",grantType:"package",title:"Folkeregisterets navnepakke",variant:"default",controls:e.jsxs(x,{variant:"ghost",size:"xs",children:[e.jsx(k,{}),e.jsx("span",{children:"Be om tilgang"})]})},{id:"7",groupId:"resource",grantType:"resource",title:"Endring av navn (RF-1453)"}]}},d={args:{items:[{id:"5",groupId:"instance",grantType:"instance",title:"Dialog title"}]}},m={args:{groups:{package:{title:"Tilgangspakker"},resource:{title:"Tjeneste"},instance:{title:"Delt fra innboks"}},items:[{id:"5",groupId:"package",grantType:"package",title:"Folkeregisterets navnepakke",variant:"default",controls:e.jsxs(x,{variant:"ghost",size:"xs",children:[e.jsx(k,{}),e.jsx("span",{children:"Be om tilgang"})]})},{id:"7",groupId:"resource",grantType:"resource",variant:"default",title:"Endring av navn (RF-1453)",controls:e.jsxs(x,{variant:"ghost",size:"xs",children:[e.jsx(k,{}),e.jsx("span",{children:"Be om tilgang"})]})},{id:"5",groupId:"instance",grantType:"instance",title:"Dialog title"}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '5',
      groupId: 'resource',
      grantType: 'resource',
      title: 'Endring av navn (RF-1453)'
    }]
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const De=["Default","Role","Package","Resource","ResourceExtended","Instance","InstanceExtended"];export{o as Default,d as Instance,m as InstanceExtended,c as Package,p as Resource,g as ResourceExtended,l as Role,De as __namedExportsOrder,Be as default};
