var B=Object.defineProperty;var i=(t,n)=>B(t,"name",{value:n,configurable:!0});import{a5 as e,a8 as T,b as x}from"./iframe-BfD7syly.js";import{a as N}from"./useMenu-o9JsDoVb.js";import{A as P}from"./Avatar-DzXDYKXO.js";import{I as S}from"./ItemLabel-C4QOzGgW.js";import{I as b}from"./ItemBase-ns7uWmGI.js";import{I as E}from"./ItemControls-CvMksNjC.js";import{H as F}from"./Heading-M_gD0nhY.js";import{S as z}from"./Checkmark-DS2-cyTF.js";import{S as y}from"./File-BJcaXPQb.js";import{S as A}from"./Package-DZaryZnk.js";import{S as $}from"./Person-KIlkGhyi.js";import{s as q}from"./skatt-Eb53q4vT.js";import{S as h}from"./Plus-Oie_r0eR.js";import{S as C}from"./SettingsModal-BAff8Jkt.js";import{T as f}from"./Typography-EJ3Vxj-4.js";import"./preload-helper-Cc2_yIPf.js";import"./useHighlightedText-BiU1Xaf8.js";import"./ModalBody-BG0TjSSS.js";import"./Section-r6HY9TNV.js";import"./Flex-B7LQuBXt.js";import"./AvatarGroup-x9OrqdJM.js";import"./ButtonGroup-DFsWLoyK.js";import"./ButtonIcon-15F_DJjK.js";import"./ButtonLabel-Btjg_m5y.js";const M="_evidence_fgrtk_1",V="_title_fgrtk_8",H="_list_fgrtk_16",k={evidence:M,title:V,list:H},L=i(({owner:t,service:n,items:a=[],groups:s={}})=>{const{menu:v}=N({items:a,groups:s,groupByKey:"groupId"});return e.jsxs("div",{children:[t&&e.jsx(U,{owner:t,service:n}),e.jsx("section",{className:k.evidence,children:v?.map((j,R)=>{const I=j.props||{};return e.jsxs(T.Fragment,{children:[I.title&&e.jsx(F,{className:k.title,children:I?.title}),e.jsx("ul",{className:k.list,children:j?.items?.map(D=>{const _=D.props||{};return e.jsx("li",{children:e.jsx(ee,{..._})},_.id)})})]},R)})})]})},"AuthEvidence"),w="_item_jhex4_1",K="_media_jhex4_12",O="_avatar_jhex4_19",G="_label_jhex4_25",J="_title_jhex4_31",Q="_description_jhex4_37",r={item:w,media:K,avatar:O,label:G,title:J,description:Q},U=i(({variant:t,owner:n,service:a,controls:s})=>e.jsxs(b,{as:"div",variant:t,className:r.item,children:[e.jsx("span",{className:r.media,children:e.jsx(P,{...n?.avatar,className:r.avatar})}),e.jsxs(S,{className:r.label,children:[e.jsx("strong",{className:r.title,children:a?.title}),e.jsx("span",{className:r.description,children:n?.name})]}),e.jsx(E,{children:s})]}),"AuthEvidenceParent"),W="_item_1q6pj_1",X="_media_1q6pj_12",Y="_icon_1q6pj_19",Z="_label_1q6pj_24",o={item:W,media:X,icon:Y,label:Z},ee=i(({grantType:t,variant:n="tinted",controls:a,title:s})=>{const v=T.useMemo(()=>{switch(t){case"role":return $;case"package":return A;case"resource":return y;case"instance":return y;default:return z}},[t]);return e.jsxs(b,{as:"div",className:o.item,variant:n,children:[e.jsx("span",{className:o.media,children:e.jsx(v,{className:o.icon})}),e.jsx(S,{className:o.label,children:s}),a&&e.jsx(E,{children:a})]})},"AuthEvidenceItem"),be={title:"Inbox/Dialog/AuthEvidence",component:L,tags:[],decorators:[t=>e.jsxs(C,{variant:"content",title:"Dialog title",open:!0,onClose:i(()=>alert("Close"),"onClose"),buttons:[{label:"Åpne tilgangsstyring"},{variant:"outline",label:"Lukk"},{as:"a",href:"//vg.no",variant:"ghost",label:"Finn innhold for tjenesten i innboks"}],children:[e.jsx(f,{children:e.jsx("p",{children:"Slik har du tilgang:"})}),e.jsx(t,{}),e.jsx(F,{size:"xs",variant:"subtle",weight:"normal",children:"Ressurs-id: RF-1453."}),e.jsx(f,{children:e.jsx("p",{children:"Du kan endre eller si fra deg tilganger gjennom tilgangsstyring."})})]})],args:{owner:{avatar:q,name:"Skatteetaten"},service:{title:"Endring av navn (RF-1453)"},groups:{package:{title:"Via tilgangspakker"},role:{title:"Via rolle"},resource:{title:"Via enkelttjeneste"},instance:{title:"Delt fra innboks"}},items:[{id:"1",groupId:"role",grantType:"role",title:"Daglig leder"},{id:"2",groupId:"role",grantType:"role",title:"Styremedlem"},{id:"3",groupId:"package",grantType:"package",title:"Folkeregisterets navnepakke"},{id:"5",groupId:"resource",grantType:"resource",title:"Endring av navn (RF-1453)"},{id:"6",groupId:"instance",grantType:"instance",title:"Dialog title"}]}},l={args:{}},c={args:{items:[{id:"1",groupId:"role",grantType:"role",title:"Daglig leder"},{id:"2",groupId:"role",grantType:"role",title:"Styremedlem"}]}},g={args:{items:[{id:"3",groupId:"package",grantType:"package",title:"Folkeregisterets navnepakke"}]}},p={args:{items:[{id:"5",groupId:"resource",grantType:"resource",title:"Endring av navn (RF-1453)"}]}},d={args:{items:[{id:"5",groupId:"package",grantType:"package",title:"Folkeregisterets navnepakke",variant:"default",controls:e.jsxs(x,{variant:"ghost",size:"xs",children:[e.jsx(h,{}),e.jsx("span",{children:"Be om tilgang"})]})},{id:"7",groupId:"resource",grantType:"resource",title:"Endring av navn (RF-1453)"}]}},m={args:{items:[{id:"5",groupId:"instance",grantType:"instance",title:"Dialog title"}]}},u={args:{groups:{package:{title:"Tilgangspakker"},resource:{title:"Tjeneste"},instance:{title:"Delt fra innboks"}},items:[{id:"5",groupId:"package",grantType:"package",title:"Folkeregisterets navnepakke",variant:"default",controls:e.jsxs(x,{variant:"ghost",size:"xs",children:[e.jsx(h,{}),e.jsx("span",{children:"Be om tilgang"})]})},{id:"7",groupId:"resource",grantType:"resource",variant:"default",title:"Endring av navn (RF-1453)",controls:e.jsxs(x,{variant:"ghost",size:"xs",children:[e.jsx(h,{}),e.jsx("span",{children:"Be om tilgang"})]})},{id:"5",groupId:"instance",grantType:"instance",title:"Dialog title"}]}},Ee=["Default","Role","Package","Resource","ResourceExtended","Instance","InstanceExtended"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};export{l as Default,m as Instance,u as InstanceExtended,g as Package,p as Resource,d as ResourceExtended,c as Role,Ee as __namedExportsOrder,be as default};
