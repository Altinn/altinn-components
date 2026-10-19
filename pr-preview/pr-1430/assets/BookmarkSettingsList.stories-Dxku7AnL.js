var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-Bv9y2YZF.js";import{B as n,u as d}from"./useBookmarks-DFszSF7X.js";import{B as l}from"./BookmarkModal-DCP4AMdk.js";import{L as u}from"./Layout-C3QQC_y6.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-B94lF56c.js";import"./BookmarkSettingsItem-BsULhS3U.js";import"./QueryLabel-_hRDVL_a.js";import"./Plus-vOPLkYgp.js";import"./Heading-CDZ3_iYV.js";import"./useHighlightedText-B3SRW8uR.js";import"./SettingsItemBase-Chn0L4dt.js";import"./ItemMedia-DqG5JuI7.js";import"./Avatar-CJwf9igj.js";import"./AvatarGroup-DorKIyuC.js";import"./ChevronUp-5Z-Nijsh.js";import"./ChevronDown-CAvQitey.js";import"./ChevronRight-B_ztNHmN.js";import"./ItemBase-DiWDtFEx.js";import"./ItemLink-C-pnxU8M.js";import"./ItemControls-DeEkLGNj.js";import"./Badge-PIp_WKNx.js";import"./Tooltip-DATtufsq.js";import"./Typography-AZvc429m.js";import"./MagnifyingGlass-rds0MzVJ.js";import"./ContextMenu-Bv-yi6hM.js";import"./useDropdownMenuController-BYwkMXkD.js";import"./Dropdown-DQyu8KYK.js";import"./SearchField-Bk5qe-oT.js";import"./FieldBase-qKDj-2_C.js";import"./Field-T8_evT5x.js";import"./Label-O9M7TqIt.js";import"./Input-C95LaLCm.js";import"./MenuListItem-DxCoBxPm.js";import"./MenuListDivider-LPYMn92M.js";import"./MenuListHeading--KYKPYxZ.js";import"./MenuItem-CWh5VY2j.js";import"./Checkmark-CwfUY960.js";import"./ItemLabel-grT0gHhk.js";import"./InformationSquare-BoyRK6zF.js";import"./MenuElipsisHorizontal-BfbhNlCU.js";import"./Pencil-Bvm8lVLT.js";import"./Trash-D9cqJvdS.js";import"./SettingsModal-C7UV_pJj.js";import"./ModalBody-Bb-z6REP.js";import"./Section-SEwZH98m.js";import"./Flex-k0HwcErc.js";import"./ButtonGroup-DFBjPK-b.js";import"./ButtonIcon-BgohvzPZ.js";import"./ButtonLabel--Rsf9jsc.js";import"./TextField-BKY9Zb_n.js";import"./SkipLink-Bt2A0zmA.js";import"./CookieBanner-x3DERLN8.js";import"./Banner-DbqK-nbR.js";import"./GlobalHeader-OeFPbV6D.js";import"./useIsDesktop-DtqNBB9o.js";import"./GlobalAccountButton-qZohFw4c.js";import"./Enter-Dh8Hm6Mk.js";import"./GlobalMenuButton-CkOoAgh5.js";import"./MenuHamburger-Rv0EpLGA.js";import"./AccountSelector-nBuOEX0t.js";import"./Switch-CK1DZ9-L.js";import"./AccountMenu-B46jN_aJ.js";import"./GlobalMenu-C_1726fk.js";import"./ArrowUndo-BFPX-Hsc.js";import"./Globe-BL4BJF4r.js";import"./BreadcrumbsLink-9dv1Pynw.js";import"./ArrowRight-CkweDtTF.js";import"./Footer-CO8r1KiX.js";const Go={component:n,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),p=o&&e.find(a=>a.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),s=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),p=o&&e.find(c=>c.id===o),a={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e,groups:a}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const Uo=["BookmarksList","GroupedBookmarksList"];export{m as BookmarksList,s as GroupedBookmarksList,Uo as __namedExportsOrder,Go as default};
