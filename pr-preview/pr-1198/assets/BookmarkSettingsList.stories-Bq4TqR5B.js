import{j as t}from"./iframe-DXwGEFZf.js";import{B as a,u as n}from"./useBookmarks-C0Dg8Gdc.js";import{L as c}from"./Layout-dpikFLST.js";import{B as d}from"./BookmarkModal-NDKl0Crt.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-g85aWTYI.js";import"./QueryLabel-CpHrmLeu.js";import"./Plus-6DEjvg57.js";import"./useId-Df52yuGg.js";import"./Heading-D1SypAUR.js";import"./index-DpQTH4Pc.js";import"./useHighlightedText-NV3gg9HW.js";import"./Skeleton-CD7VUCi3.js";import"./SettingsItemBase-DH0-F2ub.js";import"./ChevronUp-CJwhEbs5.js";import"./ChevronDown-Cc2tQRQQ.js";import"./ChevronRight-B7NrC3Rp.js";import"./ItemLink-BttCTuhw.js";import"./ItemMedia-C0bSIjdI.js";import"./XMark-BspkucHC.js";import"./Avatar-OxvpOCq4.js";import"./AvatarGroup-vB7eodsE.js";import"./Icon-DEVqj2eM.js";import"./ItemControls-DXxKFox6.js";import"./Badge-CBgj_4MY.js";import"./Tooltip-DxtRZp3O.js";import"./tooltip-OQNLf2nv.js";import"./Typography-CegVoZkA.js";import"./MagnifyingGlass-CllD3bzP.js";import"./ContextMenu-9EBdvE_8.js";import"./useDropdownMenuController-3S7tUMR-.js";import"./Dropdown-BZOF64eO.js";import"./Button-BcOfKjgE.js";import"./MenuElipsisHorizontal-lS07k2bO.js";import"./SearchField-BCjbtpiQ.js";import"./FieldBase-BwCMZAv_.js";import"./Label-ChoE5xRO.js";import"./Input-CjRvyA41.js";import"./MenuListItem-BMkFPPC3.js";import"./MenuListHeading-G6YR-18r.js";import"./MenuItem-COBQQf6N.js";import"./Checkmark-DpC6lRZL.js";import"./useMenu-DnVZQPIX.js";import"./index-BmZUBcCg.js";import"./InformationSquare-CathhXXw.js";import"./Pencil-BXGESWIH.js";import"./Trash-Bhi8vMFl.js";import"./SkipLink-5RaXEbt6.js";import"./Banner-CmjuEN-t.js";import"./GlobalHeader-BZWdeDsN.js";import"./useIsDesktop-DryvnYFP.js";import"./GlobalAccountButton-CzYHDvba.js";import"./Enter-ChEXP26q.js";import"./GlobalMenuButton-DtcMXKiU.js";import"./MenuHamburger-DYibhKnt.js";import"./AccountSelector-CQ_7NSi-.js";import"./AccountMenu-9MAQjkAM.js";import"./Switch-BjC1I4Sd.js";import"./GlobalMenu-Ce9_HjH6.js";import"./ArrowUndo-BcOnJrBl.js";import"./Globe-omLHimzm.js";import"./BreadcrumbsLink-DRHJSkrR.js";import"./ArrowRight-NS2W46Jl.js";import"./Footer-DPYpLt8b.js";import"./SettingsModal-W0duOVpO.js";import"./ModalBody-v2jc6j_q.js";import"./Section-BSKZ_Frt.js";import"./Flex-U6liI5ZR.js";import"./ButtonGroup-BgmjkJuw.js";import"./ButtonIcon-DRE8-f_V.js";import"./ButtonLabel-pSIef_EU.js";import"./TextField-DxbXRgx4.js";const Go={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Uo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Uo as __namedExportsOrder,Go as default};
