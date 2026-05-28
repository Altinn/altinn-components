import{p as t}from"./iframe-BBbEwSaq.js";import{B as a,u as n}from"./useBookmarks-1cEAb0Am.js";import{B as d}from"./BookmarkModal-97exq_Ui.js";import{L as c}from"./Layout-BmK41_ZG.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CP6B3JUk.js";import"./BookmarkSettingsItem-U0cJGAtd.js";import"./QueryLabel-CCla4rNK.js";import"./Plus-CmpsnneT.js";import"./useId-DZp72-eX.js";import"./Heading-DDkqEyV3.js";import"./index-awH0sXcw.js";import"./useHighlightedText-DORd4ETJ.js";import"./Skeleton-DFF9p8Mx.js";import"./SettingsItemBase-CVNbE6ML.js";import"./ItemMedia-DR-yuWlq.js";import"./XMark-Dw8JSfSd.js";import"./Avatar-RSQnlVTq.js";import"./AvatarGroup-DM7mpZJM.js";import"./Icon-Cx6QAjG2.js";import"./ChevronUp-BD5jqYZu.js";import"./ChevronDown-B-mDhRFL.js";import"./ChevronRight-Bj8DUJ8P.js";import"./ItemBase-Fqig4UIJ.js";import"./ItemLink-CUO1wpZw.js";import"./ItemControls-DaNsbzwN.js";import"./Badge-CZZB9VpQ.js";import"./Tooltip-BL1y86OR.js";import"./tooltip-D3G3Ewte.js";import"./Typography-41mT2wo8.js";import"./MagnifyingGlass-B6FIAadU.js";import"./ContextMenu-j2psK2Du.js";import"./useDropdownMenuController-e_G_Gi4i.js";import"./Dropdown-CQPIYrWf.js";import"./Button-DpW4Pu6O.js";import"./SearchField-D1R32ak6.js";import"./FieldBase-CbyxT5SM.js";import"./Label-DdMEJ83A.js";import"./Input-lqau07kD.js";import"./MenuListItem-UbII8Q2r.js";import"./MenuListHeading-C7xt4T8q.js";import"./MenuItem-CL2l3rp8.js";import"./Checkmark-BcTHEh83.js";import"./ItemLabel-B9gTJ9up.js";import"./index-BBId2cwS.js";import"./InformationSquare-BNlJiT0G.js";import"./MenuElipsisHorizontal-WptlvvL2.js";import"./Pencil-CLs6ekbJ.js";import"./Trash-Cq0lfucZ.js";import"./SettingsModal-CoQVwDnP.js";import"./ModalBody-OK8R4PDd.js";import"./Section-Dq0xs0Y_.js";import"./Flex-Cc0Ueohf.js";import"./ButtonGroup-oq7iIeFJ.js";import"./ButtonIcon-DIFqTzZe.js";import"./ButtonLabel-B0mhwuEU.js";import"./TextField-DWaQI9gc.js";import"./SkipLink-CR111jA5.js";import"./Banner-BzeJ5bPo.js";import"./GlobalHeader-CUOupkYg.js";import"./useIsDesktop-CDpRqHhY.js";import"./GlobalAccountButton-DXqQC7jn.js";import"./Enter-DAOjGrxw.js";import"./GlobalMenuButton-MWv-O7Eb.js";import"./MenuHamburger-CaVnn13l.js";import"./AccountSelector-BmSXSddp.js";import"./Switch-CtGtmSJw.js";import"./AccountMenu-D4H3ksbL.js";import"./GlobalMenu-DMVAj-0F.js";import"./ArrowUndo-B9HC4bPd.js";import"./Globe-CnuLYVOj.js";import"./BreadcrumbsLink-BWpQl82D.js";import"./ArrowRight-DScEIYh0.js";import"./Footer-VsXKVWSK.js";const _o={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const {
    expandedId,
    onClose,
    items
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <>
      <BookmarkSettingsList items={items} />
      {expandedId && <BookmarkModal {...modalProps} title="Rediger søk" open={expandedId !== ''} onClose={onClose} buttons={[{
      label: 'Lagre',
      onClick: () => onClose()
    }, {
      label: 'Slett',
      variant: 'outline',
      onClick: () => onClose()
    }]} />}
    </>;
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    expandedId,
    onClose,
    items
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  const groups = {
    '1': {
      title: 'Med tittel'
    },
    '2': {
      title: 'Uten tittel'
    }
  };
  return <>
      <BookmarkSettingsList items={items} groups={groups} />
      {expandedId && <BookmarkModal {...modalProps} title="Rediger søk" open={expandedId !== ''} onClose={onClose} buttons={[{
      label: 'Lagre',
      onClick: () => onClose()
    }, {
      label: 'Slett',
      variant: 'outline',
      onClick: () => onClose()
    }]} />}
    </>;
}`,...m.parameters?.docs?.source}}};const Oo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Oo as __namedExportsOrder,_o as default};
