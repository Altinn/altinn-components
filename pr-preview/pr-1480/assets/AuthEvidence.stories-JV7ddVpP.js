var B=Object.defineProperty;var i=(t,n)=>B(t,"name",{value:n,configurable:!0});import{a6 as e,a9 as T,c as x}from"./iframe-CqoHfDH7.js";import{u as N}from"./useMenu-DC909dob.js";import{A as P}from"./Avatar-Co74uJ_O.js";import{I as S}from"./ItemLabel-Bv-toCFX.js";import{I as E}from"./ItemBase-BUrta6st.js";import{I as b}from"./ItemControls-BKR8KplG.js";import{H as F}from"./Heading-CDVcG6kV.js";import{S as z}from"./Checkmark-6oHZmwOe.js";import{S as y}from"./File-BV07hQ9P.js";import{S as A}from"./Package-C-r-xDhk.js";import{S as $}from"./Person-B8YDLyfZ.js";import{s as q}from"./skatt-Eb53q4vT.js";import{S as h}from"./Plus-DQZnEDJR.js";import{S as C}from"./SettingsModal-BNLp4N0e.js";import{T as f}from"./Typography-rh9OwAWr.js";import"./preload-helper-Cc2_yIPf.js";import"./useHighlightedText-CSyjuktp.js";import"./ModalBody-CiSC6mzB.js";import"./Section-DzgRr51L.js";import"./Flex-zJBPm08F.js";import"./AvatarGroup-DYss91lm.js";import"./ButtonGroup-Cf6Ux1xO.js";import"./ButtonIcon-CRl4eaFH.js";import"./ButtonLabel-DpOqQbl0.js";const M="_evidence_fgrtk_1",V="_title_fgrtk_8",H="_list_fgrtk_16",k={evidence:M,title:V,list:H},L=i(({owner:t,service:n,items:r=[],groups:s={}})=>{const{menu:v}=N({items:r,groups:s,groupByKey:"groupId"});return e.jsxs("div",{children:[t&&e.jsx(U,{owner:t,service:n}),e.jsx("section",{className:k.evidence,children:v?.map((j,R)=>{const I=j.props||{};return e.jsxs(T.Fragment,{children:[I.title&&e.jsx(F,{className:k.title,children:I?.title}),e.jsx("ul",{className:k.list,children:j?.items?.map(D=>{const _=D.props||{};return e.jsx("li",{children:e.jsx(ee,{..._})},_.id)})})]},R)})})]})},"AuthEvidence"),w="_item_jhex4_1",K="_media_jhex4_12",O="_avatar_jhex4_19",G="_label_jhex4_25",J="_title_jhex4_31",Q="_description_jhex4_37",a={item:w,media:K,avatar:O,label:G,title:J,description:Q},U=i(({variant:t,owner:n,service:r,controls:s})=>e.jsxs(E,{as:"div",variant:t,className:a.item,children:[e.jsx("span",{className:a.media,children:e.jsx(P,{...n?.avatar,className:a.avatar})}),e.jsxs(S,{className:a.label,children:[e.jsx("strong",{className:a.title,children:r?.title}),e.jsx("span",{className:a.description,children:n?.name})]}),e.jsx(b,{children:s})]}),"AuthEvidenceParent"),W="_item_1q6pj_1",X="_media_1q6pj_12",Y="_icon_1q6pj_19",Z="_label_1q6pj_24",o={item:W,media:X,icon:Y,label:Z},ee=i(({grantType:t,variant:n="tinted",controls:r,title:s})=>{const v=T.useMemo(()=>{switch(t){case"role":return $;case"package":return A;case"resource":return y;case"instance":return y;default:return z}},[t]);return e.jsxs(E,{as:"div",className:o.item,variant:n,children:[e.jsx("span",{className:o.media,children:e.jsx(v,{className:o.icon})}),e.jsx(S,{className:o.label,children:s}),r&&e.jsx(b,{children:r})]})},"AuthEvidenceItem"),Ee={title:"Inbox/Dialog/AuthEvidence",component:L,tags:[],decorators:[t=>e.jsxs(C,{variant:"content",title:"Dialog title",open:!0,onClose:i(()=>alert("Close"),"onClose"),buttons:[{label:"Åpne tilgangsstyring"},{variant:"outline",label:"Lukk"},{as:"a",href:"//vg.no",variant:"ghost",label:"Finn innhold for tjenesten i innboks"}],children:[e.jsx(f,{children:e.jsx("p",{children:"Slik har du tilgang:"})}),e.jsx(t,{}),e.jsx(F,{size:"xs",variant:"subtle",weight:"normal",children:"Ressurs-id: RF-1453."}),e.jsx(f,{children:e.jsx("p",{children:"Du kan endre eller si fra deg tilganger gjennom tilgangsstyring."})})]})],args:{owner:{avatar:q,name:"Skatteetaten"},service:{title:"Endring av navn (RF-1453)"},groups:{package:{title:"Via tilgangspakker"},role:{title:"Via rolle"},resource:{title:"Via enkelttjeneste"},instance:{title:"Delt fra innboks"}},items:[{id:"1",groupId:"role",grantType:"role",title:"Daglig leder"},{id:"2",groupId:"role",grantType:"role",title:"Styremedlem"},{id:"3",groupId:"package",grantType:"package",title:"Folkeregisterets navnepakke"},{id:"5",groupId:"resource",grantType:"resource",title:"Endring av navn (RF-1453)"},{id:"6",groupId:"instance",grantType:"instance",title:"Dialog title"}]}},l={args:{}},c={args:{items:[{id:"1",groupId:"role",grantType:"role",title:"Daglig leder"},{id:"2",groupId:"role",grantType:"role",title:"Styremedlem"}]}},g={args:{items:[{id:"3",groupId:"package",grantType:"package",title:"Folkeregisterets navnepakke"}]}},p={args:{items:[{id:"5",groupId:"resource",grantType:"resource",title:"Endring av navn (RF-1453)"}]}},d={args:{items:[{id:"5",groupId:"package",grantType:"package",title:"Folkeregisterets navnepakke",variant:"default",controls:e.jsxs(x,{variant:"ghost",size:"xs",children:[e.jsx(h,{}),e.jsx("span",{children:"Be om tilgang"})]})},{id:"7",groupId:"resource",grantType:"resource",title:"Endring av navn (RF-1453)"}]}},m={args:{items:[{id:"5",groupId:"instance",grantType:"instance",title:"Dialog title"}]}},u={args:{groups:{package:{title:"Tilgangspakker"},resource:{title:"Tjeneste"},instance:{title:"Delt fra innboks"}},items:[{id:"5",groupId:"package",grantType:"package",title:"Folkeregisterets navnepakke",variant:"default",controls:e.jsxs(x,{variant:"ghost",size:"xs",children:[e.jsx(h,{}),e.jsx("span",{children:"Be om tilgang"})]})},{id:"7",groupId:"resource",grantType:"resource",variant:"default",title:"Endring av navn (RF-1453)",controls:e.jsxs(x,{variant:"ghost",size:"xs",children:[e.jsx(h,{}),e.jsx("span",{children:"Be om tilgang"})]})},{id:"5",groupId:"instance",grantType:"instance",title:"Dialog title"}]}},be=["Default","Role","Package","Resource","ResourceExtended","Instance","InstanceExtended"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '3',
      groupId: 'package',
      grantType: 'package',
      title: 'Folkeregisterets navnepakke'
    }]
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '5',
      groupId: 'resource',
      grantType: 'resource',
      title: 'Endring av navn (RF-1453)'
    }]
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '5',
      groupId: 'instance',
      grantType: 'instance',
      title: 'Dialog title'
    }]
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};export{l as Default,m as Instance,u as InstanceExtended,g as Package,p as Resource,d as ResourceExtended,c as Role,be as __namedExportsOrder,Ee as default};
