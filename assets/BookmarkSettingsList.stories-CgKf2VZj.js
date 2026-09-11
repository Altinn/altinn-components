import{a7 as t}from"./iframe-O8cJNgnH.js";import{B as a,u as n}from"./useBookmarks-BBDzBCCz.js";import{B as d}from"./BookmarkModal-CwkqZMM_.js";import{L as c}from"./Layout-BPZkvh1k.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BDnyYHA1.js";import"./BookmarkSettingsItem-9xszkKMZ.js";import"./QueryLabel-BaiGIe-a.js";import"./Plus-B_TKpQ68.js";import"./Heading-BdhLm3SL.js";import"./useHighlightedText-CnUjn7TA.js";import"./SettingsItemBase-B45QdmHs.js";import"./ItemMedia-DQabxJtZ.js";import"./Avatar-D8-vsJJv.js";import"./AvatarGroup-Ra_TR9_v.js";import"./ChevronUp-C3suJ612.js";import"./ChevronDown-D0blAyPo.js";import"./ChevronRight-U0ooHRaY.js";import"./ItemBase-w8iqJ0BX.js";import"./ItemLink-BhEV87zL.js";import"./ItemControls-Crhi56hp.js";import"./Badge-BEBeTMrY.js";import"./Tooltip-BrWx-R_c.js";import"./Typography-DU3EjiaL.js";import"./MagnifyingGlass-DHpnscJf.js";import"./ContextMenu-Da0OMBba.js";import"./useDropdownMenuController-MyvXNyzM.js";import"./Dropdown-DmhW7MY5.js";import"./SearchField-bcjP3Rbv.js";import"./FieldBase-SXGcT6A1.js";import"./Field-C6gWhPtJ.js";import"./Label-Bx5yqb_Y.js";import"./Input-BfEZmvKD.js";import"./MenuListItem-CQjZkQSb.js";import"./MenuListDivider-B5yo7PZG.js";import"./MenuListHeading-kFnOp7Lr.js";import"./MenuItem--4S_Ij0p.js";import"./Checkmark-dNVTYLgC.js";import"./ItemLabel-C8aE3_ka.js";import"./InformationSquare-CwO_8hH0.js";import"./MenuElipsisHorizontal-BSU1V6yq.js";import"./Pencil-B9d5v-Vd.js";import"./Trash-BjtjrgTY.js";import"./SettingsModal-DKlAjCM8.js";import"./ModalBody-ClJuvryu.js";import"./Section-D1aETyw8.js";import"./Flex-oXvF6uEL.js";import"./ButtonGroup-BrPvP3j_.js";import"./ButtonIcon-BRVIbE9d.js";import"./ButtonLabel-DpkPepTV.js";import"./TextField-DRwLVtRf.js";import"./SkipLink-ZXmdgcQ7.js";import"./CookieBanner-JHp58kq2.js";import"./Banner-SKSmbGw2.js";import"./GlobalHeader-D7KpADKP.js";import"./useIsDesktop-gKruwT8Z.js";import"./GlobalAccountButton-WM-k1A8t.js";import"./Enter-BjA-K0sq.js";import"./GlobalMenuButton-C-ic7Lpw.js";import"./MenuHamburger-D2jzHCCp.js";import"./AccountSelector-BIznGGXq.js";import"./Switch-Bpp6Oj2m.js";import"./AccountMenu-BPF6z5-i.js";import"./GlobalMenu-Dg1_1F4i.js";import"./ArrowUndo-sS0AjGTk.js";import"./Globe-BXt_JmEe.js";import"./BreadcrumbsLink-BHwEYukp.js";import"./ArrowRight-CE4i7h6O.js";import"./Footer-BZWcJIYX.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
