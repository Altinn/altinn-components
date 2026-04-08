"use client";import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./useId-HrPGyhy9.js";import{t as i}from"./Bell-Dy1Lu3cE.js";import{t as a}from"./Pencil-Cc5Fy69a.js";import{t as o}from"./Trash-CA--6OQp.js";import{t as s}from"./BookmarkSettingsItem-ByJd4tHe.js";import{t as c}from"./List-BNjZuxCc.js";import{t as l}from"./SettingsItem-BasSsBVp.js";var u=e(t()),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},f=(0,u.forwardRef)((e,t)=>{var{title:n,titleId:i}=e,a=d(e,[`title`,`titleId`]);let o=r();return o=n?i||`title-`+o:void 0,u.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,width:`1em`,height:`1em`,fill:`none`,viewBox:`0 0 24 24`,focusable:!1,role:`img`,ref:t,"aria-labelledby":o},a),n?u.createElement(`title`,{id:o},n):null,u.createElement(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M16.125 3.125c-1.35 0-2.726.602-4.125 1.844-1.4-1.242-2.776-1.844-4.125-1.844-1.52 0-2.824.763-3.905 1.845-2.373 2.372-2.207 6.354 1 9.56l6.5 6.5a.75.75 0 0 0 1.06 0l6.5-6.5c3.207-3.206 3.373-7.188 1-9.56-1.082-1.082-2.386-1.845-3.905-1.845m-4.569 15.87 1.556-5.6-3.447-1.724a.75.75 0 0 1-.361-.95l1.812-4.53C9.85 5.033 8.773 4.625 7.875 4.625c-.981 0-1.927.487-2.845 1.405-1.627 1.628-1.793 4.646 1 7.44zm1.815-.926 4.599-4.6c2.793-2.793 2.627-5.811 1-7.439-.919-.918-1.864-1.405-2.845-1.405-.956 0-2.116.463-3.487 1.798l-1.685 4.215 3.382 1.691a.75.75 0 0 1 .388.872z`,clipRule:`evenodd`}))}),p=n(),m={title:`Settings/SettingsItem`,component:l,tags:[`beta`,`autodocs`],parameters:{},args:{id:`settings`,variant:`default`,ariaLabel:`Title`,title:`Tittel`},decorators:[e=>(0,p.jsx)(c,{children:(0,p.jsx)(e,{})})]},h={args:{icon:i,linkIcon:!0,badge:{variant:`text`,label:`Legg til `}}},g={args:{icon:i,value:`Alle varslinger`,badge:{label:`SMS og e-post`},linkIcon:!0}},_={args:{icon:i,value:`Alle varslinger`,badge:{label:`SMS og e-post`},linkIcon:!0,loading:!0}},v={args:{icon:f,title:`Vis skjulte enheter`,variant:`switch`}},y={args:{icon:f,title:`Vis skjulte enheter`,variant:`modal`,children:`Modal content`}},b={args:{icon:f,title:`Vis skjulte enheter`,variant:`modal`,children:`Modal content`,modalProps:{description:`En forklaring til hva som skal skje`,buttons:[{label:`Lukk modalen`,onClick:()=>{},close:!0},{variant:`outline`,label:`Ikke lukk `,onClick:()=>{}}]}}},x={args:{icon:{type:`company`,name:`Diaspora Bergensis`},title:`Diaspora Bergensis`,value:`Alle varslinger`,badge:{label:`SMS og e-post`},linkIcon:!0}},S={args:{icon:{type:`person`,name:`Dolly Duck`},title:`Dolly Duck`,badge:{variant:`text`,label:`Legg til `},linkIcon:!0}},C=()=>(0,p.jsx)(s,{id:`bookmark-1`,title:`Viktige dialoger om skatt`,params:[{type:`search`,label:`skatt`},{type:`filter`,label:`Krever handling`},{type:`filter`,label:`Ikke sett`}]}),w=()=>(0,p.jsx)(s,{id:`bookmark-1`,title:`Viktige dialoger om skatt`,contextMenu:{items:[{icon:a,title:`Rediger tittel`},{icon:o,title:`Slett søk`}]},params:[{type:`search`,label:`skatt`},{type:`filter`,label:`Krever handling`},{type:`filter`,label:`Ikke sett`}]});h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    icon: BellIcon,
    linkIcon: true,
    badge: {
      variant: 'text',
      label: 'Legg til '
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: BellIcon,
    value: 'Alle varslinger',
    badge: {
      label: 'SMS og e-post'
    },
    linkIcon: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    icon: BellIcon,
    value: 'Alle varslinger',
    badge: {
      label: 'SMS og e-post'
    },
    linkIcon: true,
    loading: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    icon: HeartBrokenIcon,
    title: 'Vis skjulte enheter',
    variant: 'switch'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    icon: HeartBrokenIcon,
    title: 'Vis skjulte enheter',
    variant: 'modal',
    children: 'Modal content'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};var T=[`Default`,`Value`,`Loading`,`Switch`,`Modal`,`ModalProps`,`Company`,`Person`,`Bookmark`,`BookmarkContextMenu`];export{C as Bookmark,w as BookmarkContextMenu,x as Company,h as Default,_ as Loading,y as Modal,b as ModalProps,S as Person,v as Switch,g as Value,T as __namedExportsOrder,m as default};