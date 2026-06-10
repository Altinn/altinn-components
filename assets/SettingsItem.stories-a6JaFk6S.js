"use client";import{aa as h,af as y,R as v,a7 as b}from"./iframe-BBxI6Qoj.js";import{S as f}from"./Bell-d-RrgfeX.js";import{S as x}from"./Pencil-DyXfKaaU.js";import{S as B}from"./Trash-DJ7iEv1M.js";import{S as M}from"./SettingsItem-DEeXS7ek.js";import{B as I}from"./BookmarkSettingsItem-DxkR421N.js";import{L as j}from"./List-DiWMXlPH.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsItemBase-DQaHfCrc.js";import"./ItemMedia-vu0P71y8.js";import"./Avatar-DrVCUDP7.js";import"./AvatarGroup-D15nbx4o.js";import"./ChevronUp-3jRKbU-M.js";import"./ChevronDown-BJPfgMjs.js";import"./ChevronRight-DVToFFYf.js";import"./ItemBase-z_U1AOBq.js";import"./ItemLink-Cj4Bv3sX.js";import"./Heading-D61lhVl1.js";import"./useHighlightedText-CESRz6Ap.js";import"./ItemControls-BooS5V5d.js";import"./Badge-BWCWk7xl.js";import"./Tooltip-DgvofOl5.js";import"./Typography-DsE98WBK.js";import"./SettingsModal-DAtA4H0Z.js";import"./ModalBody-p8b8lRFV.js";import"./Section-2oE2jyh4.js";import"./Flex-DehNIx1U.js";import"./ButtonGroup-xNpv9tyz.js";import"./ButtonIcon-__oVwPy4.js";import"./ButtonLabel-CtWAJHpe.js";import"./Input-C6iRvbsc.js";import"./QueryLabel-DQnX2ifk.js";import"./Plus-CVz3L4Fh.js";import"./MagnifyingGlass-BMZG2bcC.js";import"./ContextMenu-DnwF159F.js";import"./useDropdownMenuController-BP3UF-Yt.js";import"./Dropdown-BGDRJ2sL.js";import"./SearchField-CTzRwjSn.js";import"./FieldBase-De9CwOeM.js";import"./Field-CklQ3uRY.js";import"./Label-DAepOqrA.js";import"./useMenu-B76EeFEP.js";import"./MenuListItem-D68tduCT.js";import"./MenuListHeading-lkQwQf3s.js";import"./MenuItem-B1Q66lNx.js";import"./Checkmark-CSwkO33y.js";import"./ItemLabel-2sb7Udx3.js";import"./index-CrzqWcTU.js";import"./InformationSquare-DpMeWUxz.js";import"./MenuElipsisHorizontal-D2O7BZ44.js";import"./ListItem-B7vm1DNV.js";var w=function(t,a){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)a.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(o[e[r]]=t[e[r]]);return o};const S=h.forwardRef((t,a)=>{var{title:o,titleId:e}=t,r=w(t,["title","titleId"]);let n=y();return n=o?e||"title-"+n:void 0,v.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":n},r),o?v.createElement("title",{id:n},o):null,v.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.125 3.125c-1.35 0-2.726.602-4.125 1.844-1.4-1.242-2.776-1.844-4.125-1.844-1.52 0-2.824.763-3.905 1.845-2.373 2.372-2.207 6.354 1 9.56l6.5 6.5a.75.75 0 0 0 1.06 0l6.5-6.5c3.207-3.206 3.373-7.188 1-9.56-1.082-1.082-2.386-1.845-3.905-1.845m-4.569 15.87 1.556-5.6-3.447-1.724a.75.75 0 0 1-.361-.95l1.812-4.53C9.85 5.033 8.773 4.625 7.875 4.625c-.981 0-1.927.487-2.845 1.405-1.627 1.628-1.793 4.646 1 7.44zm1.815-.926 4.599-4.6c2.793-2.793 2.627-5.811 1-7.439-.919-.918-1.864-1.405-2.845-1.405-.956 0-2.116.463-3.487 1.798l-1.685 4.215 3.382 1.691a.75.75 0 0 1 .388.872z",clipRule:"evenodd"}))}),Me={title:"Settings/SettingsItem",component:M,tags:["beta","autodocs"],parameters:{},args:{id:"settings",variant:"default",ariaLabel:"Title",title:"Tittel"},decorators:[t=>b.jsx(j,{children:b.jsx(t,{})})]},i={args:{icon:f,linkIcon:!0,badge:{variant:"text",label:"Legg til "}}},l={args:{icon:f,value:"Alle varslinger",badge:{label:"SMS og e-post"},linkIcon:!0}},s={args:{icon:f,value:"Alle varslinger",badge:{label:"SMS og e-post"},linkIcon:!0,loading:!0}},c={args:{icon:S,title:"Vis skjulte enheter",variant:"switch"}},m={args:{icon:S,title:"Vis skjulte enheter",variant:"modal",children:"Modal content"}},p={args:{icon:S,title:"Vis skjulte enheter",variant:"modal",children:"Modal content",modalProps:{description:"En forklaring til hva som skal skje",buttons:[{label:"Lukk modalen",onClick:()=>{},close:!0},{variant:"outline",label:"Ikke lukk ",onClick:()=>{}}]}}},d={args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",value:"Alle varslinger",badge:{label:"SMS og e-post"},linkIcon:!0}},g={args:{icon:{type:"person",name:"Dolly Duck"},title:"Dolly Duck",badge:{variant:"text",label:"Legg til "},linkIcon:!0}},u=()=>b.jsx(I,{id:"bookmark-1",title:"Viktige dialoger om skatt",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"},{type:"filter",label:"Ikke sett"}]}),k=()=>b.jsx(I,{id:"bookmark-1",title:"Viktige dialoger om skatt",contextMenu:{items:[{icon:x,title:"Rediger tittel"},{icon:B,title:"Slett søk"}]},params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"},{type:"filter",label:"Ikke sett"}]});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: BellIcon,
    linkIcon: true,
    badge: {
      variant: 'text',
      label: 'Legg til '
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: BellIcon,
    value: 'Alle varslinger',
    badge: {
      label: 'SMS og e-post'
    },
    linkIcon: true
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: BellIcon,
    value: 'Alle varslinger',
    badge: {
      label: 'SMS og e-post'
    },
    linkIcon: true,
    loading: true
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: HeartBrokenIcon,
    title: 'Vis skjulte enheter',
    variant: 'switch'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    icon: HeartBrokenIcon,
    title: 'Vis skjulte enheter',
    variant: 'modal',
    children: 'Modal content'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    icon: HeartBrokenIcon,
    title: 'Vis skjulte enheter',
    variant: 'modal',
    children: 'Modal content',
    modalProps: {
      description: 'En forklaring til hva som skal skje',
      buttons: [{
        label: 'Lukk modalen',
        onClick: () => {},
        close: true
      }, {
        variant: 'outline',
        label: 'Ikke lukk ',
        onClick: () => {}
      }]
    }
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    icon: {
      type: 'company',
      name: 'Diaspora Bergensis'
    },
    title: 'Diaspora Bergensis',
    value: 'Alle varslinger',
    badge: {
      label: 'SMS og e-post'
    },
    linkIcon: true
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: {
      type: 'person',
      name: 'Dolly Duck'
    },
    title: 'Dolly Duck',
    badge: {
      variant: 'text',
      label: 'Legg til '
    },
    linkIcon: true
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <BookmarkSettingsItem id="bookmark-1" title="Viktige dialoger om skatt" params={[{
    type: 'search',
    label: 'skatt'
  }, {
    type: 'filter',
    label: 'Krever handling'
  }, {
    type: 'filter',
    label: 'Ikke sett'
  }]} />;
}`,...u.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <BookmarkSettingsItem id="bookmark-1" title="Viktige dialoger om skatt" contextMenu={{
    items: [{
      icon: PencilIcon,
      title: 'Rediger tittel'
    }, {
      icon: TrashIcon,
      title: 'Slett søk'
    }]
  }} params={[{
    type: 'search',
    label: 'skatt'
  }, {
    type: 'filter',
    label: 'Krever handling'
  }, {
    type: 'filter',
    label: 'Ikke sett'
  }]} />;
}`,...k.parameters?.docs?.source}}};const je=["Default","Value","Loading","Switch","Modal","ModalProps","Company","Person","Bookmark","BookmarkContextMenu"];export{u as Bookmark,k as BookmarkContextMenu,d as Company,i as Default,s as Loading,m as Modal,p as ModalProps,g as Person,c as Switch,l as Value,je as __namedExportsOrder,Me as default};
