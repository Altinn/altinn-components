import{a7 as t}from"./iframe-CTaNoWWa.js";import{B as a,u as n}from"./useBookmarks-Crmf6BBq.js";import{B as d}from"./BookmarkModal-CjBQTn1l.js";import{L as c}from"./Layout-ztqvTzZz.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CpFtChbI.js";import"./BookmarkSettingsItem-cshCFLbG.js";import"./QueryLabel-DCH_638I.js";import"./Plus-B6k-0-JZ.js";import"./Heading-C1mUjHlh.js";import"./useHighlightedText-B1ZF3HFO.js";import"./SettingsItemBase-CvuyejAQ.js";import"./ItemMedia-wY5sofun.js";import"./Avatar-Jcwep2-d.js";import"./AvatarGroup-BYP40V--.js";import"./ChevronUp-0PuCoJui.js";import"./ChevronDown-BHW7W_eE.js";import"./ChevronRight-CohjqIQG.js";import"./ItemBase-DKpUUlFO.js";import"./ItemLink-B-O_qCzl.js";import"./ItemControls-DMuz6Cbk.js";import"./Badge-Dtect8U8.js";import"./Tooltip-ClBwCS6W.js";import"./Typography-CN45st3d.js";import"./MagnifyingGlass-DGspW_mh.js";import"./ContextMenu-DJ_K9wJs.js";import"./useDropdownMenuController-BJZIrHL7.js";import"./Dropdown-CgaJWkpX.js";import"./SearchField-ybvTeITK.js";import"./FieldBase-CgdWEw7I.js";import"./Field-BInLTKbx.js";import"./Label-yw6hdd5b.js";import"./Input-CTz4y9O9.js";import"./MenuListItem-DQ_58J0s.js";import"./MenuListDivider-CkCLDcCQ.js";import"./MenuListHeading-Gc6ll2v1.js";import"./MenuItem-CimdO91p.js";import"./Checkmark-BhX8-1Sr.js";import"./ItemLabel-BrNBIEws.js";import"./index-CftdW1E-.js";import"./InformationSquare-BkCx_Sj6.js";import"./MenuElipsisHorizontal-eegx-ga-.js";import"./Pencil-uwXsOhra.js";import"./Trash-B7D9F4yI.js";import"./SettingsModal-BQMqrzAH.js";import"./ModalBody-Dfwh0Tur.js";import"./Section-Gj9AU1UQ.js";import"./Flex-CN3B00B1.js";import"./ButtonGroup-DcAUocsW.js";import"./ButtonIcon-TLZW9XLN.js";import"./ButtonLabel-5YzgT7kC.js";import"./TextField-CWdssTLQ.js";import"./SkipLink-DYV97W-p.js";import"./Banner-D-_QvWr0.js";import"./GlobalHeader-CCGV5ANq.js";import"./useIsDesktop-fev8-fWE.js";import"./GlobalAccountButton-D8lpf3UF.js";import"./Enter-DBB7L9Uo.js";import"./GlobalMenuButton-B-xdr2iA.js";import"./MenuHamburger-BbgaFBH2.js";import"./AccountSelector-Co_y5qQr.js";import"./Switch-DjhkD9Ne.js";import"./AccountMenu-CRjFTbkQ.js";import"./GlobalMenu-LxQFpZ-0.js";import"./ArrowUndo-BPYh_xVN.js";import"./Globe-SZm5TK6g.js";import"./BreadcrumbsLink-BRrGCOt_.js";import"./ArrowRight-BDFixAM4.js";import"./Footer-Jto7sDAp.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Eo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Eo as __namedExportsOrder,yo as default};
