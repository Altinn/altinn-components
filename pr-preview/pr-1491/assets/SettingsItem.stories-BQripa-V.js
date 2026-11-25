"use client";var y=Object.defineProperty;var a=(e,o)=>y(e,"name",{value:o,configurable:!0});import{a9 as x,af as B,R as f,a6 as v}from"./iframe-CjTVLX0J.js";import{S}from"./Bell-BL9bPd5p.js";import{S as M}from"./Pencil-Ds4gSOcY.js";import{S as j}from"./Trash-f0oxT1Hh.js";import{S as w}from"./SettingsItem-C-B-6W83.js";import{B as h}from"./BookmarkSettingsItem-DZbyOdVn.js";import{L as D}from"./List-D_f5-yc3.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsItemBase-B1Ukcnj2.js";import"./ItemMedia-DnpNAz5S.js";import"./Avatar-Bte94cY6.js";import"./AvatarGroup-C543ATGD.js";import"./ChevronUp-BaW30cb9.js";import"./ChevronDown-mX34rd4T.js";import"./ChevronRight-B7WfXeCo.js";import"./ItemBase-DigRLYQR.js";import"./ItemLink-Dxgw-kvc.js";import"./Heading-iGdZKzrq.js";import"./useHighlightedText-DSpkTug-.js";import"./ItemControls-DdDcRIJg.js";import"./Badge-5qYmbB4A.js";import"./Tooltip-D-ZO89_f.js";import"./Typography-D5LJyQSI.js";import"./SettingsModal-Bh9cutIH.js";import"./ModalBody-Bv7CSic6.js";import"./Section-Srp_Bqeg.js";import"./Flex-DPGhARfx.js";import"./ButtonGroup-CI4WR3eO.js";import"./ButtonIcon-DqZCck6e.js";import"./ButtonLabel-Bj2vcKLA.js";import"./Input-B0rqselK.js";import"./QueryLabel-B1UB3cfm.js";import"./Plus-DW7oopwP.js";import"./MagnifyingGlass-DkbBbRdW.js";import"./ContextMenu-txLONgGE.js";import"./useDropdownMenuController-D0Z68xmE.js";import"./Dropdown-Dh6j_cOd.js";import"./SearchField-BoWCGyO9.js";import"./MenuListItem-Db90m9cT.js";import"./MenuListDivider-D1F-iYgs.js";import"./MenuItem-BHJaEqQ5.js";import"./CheckboxUncheckedIcon-BI8H0dji.js";import"./RadioUncheckedIcon-BkjXdcpz.js";import"./ItemLabel-QKtbke7Z.js";import"./FieldBase-C5zYRo5L.js";import"./Field-DCjNXD15.js";import"./Label-em-S6i9n.js";import"./useMenu-DyQl0UH7.js";import"./InformationSquare-DA1l9Dlv.js";import"./ListItem-BsQLulwX.js";var V=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const I=x.forwardRef((e,o)=>{var{title:n,titleId:t}=e,r=V(e,["title","titleId"]);let i=B();return i=n?t||"title-"+i:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:o,"aria-labelledby":i},r),n?f.createElement("title",{id:i},n):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.125 3.125c-1.35 0-2.726.602-4.125 1.844-1.4-1.242-2.776-1.844-4.125-1.844-1.52 0-2.824.763-3.905 1.845-2.373 2.372-2.207 6.354 1 9.56l6.5 6.5a.75.75 0 0 0 1.06 0l6.5-6.5c3.207-3.206 3.373-7.188 1-9.56-1.082-1.082-2.386-1.845-3.905-1.845m-4.569 15.87 1.556-5.6-3.447-1.724a.75.75 0 0 1-.361-.95l1.812-4.53C9.85 5.033 8.773 4.625 7.875 4.625c-.981 0-1.927.487-2.845 1.405-1.627 1.628-1.793 4.646 1 7.44zm1.815-.926 4.599-4.6c2.793-2.793 2.627-5.811 1-7.439-.919-.918-1.864-1.405-2.845-1.405-.956 0-2.116.463-3.487 1.798l-1.685 4.215 3.382 1.691a.75.75 0 0 1 .388.872z",clipRule:"evenodd"}))}),we={title:"Settings/SettingsItem",component:w,tags:["autodocs"],parameters:{},args:{id:"settings",variant:"default",ariaLabel:"Title",title:"Tittel"},decorators:[e=>v.jsx(D,{children:v.jsx(e,{})})]},l={args:{icon:S,linkIcon:!0,badge:{variant:"text",label:"Legg til "}}},s={args:{icon:S,value:"Alle varslinger",badge:{label:"SMS og e-post"},linkIcon:!0}},c={args:{icon:S,value:"Alle varslinger",badge:{label:"SMS og e-post"},linkIcon:!0,loading:!0}},m={args:{icon:I,title:"Vis skjulte enheter",variant:"switch"}},p={args:{icon:I,title:"Vis skjulte enheter",variant:"modal",children:"Modal content"}},d={args:{icon:I,title:"Vis skjulte enheter",variant:"modal",children:"Modal content",modalProps:{description:"En forklaring til hva som skal skje",buttons:[{label:"Lukk modalen",onClick:a(()=>{},"onClick"),close:!0},{variant:"outline",label:"Ikke lukk ",onClick:a(()=>{},"onClick")}]}}},g={args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",value:"Alle varslinger",badge:{label:"SMS og e-post"},linkIcon:!0}},u={args:{icon:{type:"person",name:"Dolly Duck"},title:"Dolly Duck",badge:{variant:"text",label:"Legg til "},linkIcon:!0}},k=a(()=>v.jsx(h,{id:"bookmark-1",title:"Viktige dialoger om skatt",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"},{type:"filter",label:"Ikke sett"}]}),"Bookmark"),b=a(()=>v.jsx(h,{id:"bookmark-1",title:"Viktige dialoger om skatt",contextMenu:{items:[{icon:M,title:"Rediger tittel"},{icon:j,title:"Slett søk"}]},params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"},{type:"filter",label:"Ikke sett"}]}),"BookmarkContextMenu"),De=["Default","Value","Loading","Switch","Modal","ModalProps","Company","Person","Bookmark","BookmarkContextMenu"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: BellIcon,
    linkIcon: true,
    badge: {
      variant: 'text',
      label: 'Legg til '
    }
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: BellIcon,
    value: 'Alle varslinger',
    badge: {
      label: 'SMS og e-post'
    },
    linkIcon: true
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: BellIcon,
    value: 'Alle varslinger',
    badge: {
      label: 'SMS og e-post'
    },
    linkIcon: true,
    loading: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    icon: HeartBrokenIcon,
    title: 'Vis skjulte enheter',
    variant: 'switch'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    icon: HeartBrokenIcon,
    title: 'Vis skjulte enheter',
    variant: 'modal',
    children: 'Modal content'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};export{k as Bookmark,b as BookmarkContextMenu,g as Company,l as Default,c as Loading,p as Modal,d as ModalProps,u as Person,m as Switch,s as Value,De as __namedExportsOrder,we as default};
