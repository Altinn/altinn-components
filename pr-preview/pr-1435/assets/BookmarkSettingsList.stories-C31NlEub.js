var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-C_3qWz8U.js";import{B as n,u as d}from"./useBookmarks-B5vE9wVc.js";import{B as l}from"./BookmarkModal-TZzFCD2b.js";import{L as u}from"./Layout-Da8EBPKg.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DHyqVfH8.js";import"./BookmarkSettingsItem-DwAPr73y.js";import"./QueryLabel-ca-OtExV.js";import"./Plus-DHsDmPUd.js";import"./Heading-mFc3Xe1m.js";import"./useHighlightedText-ChiMW-L8.js";import"./SettingsItemBase-Df9MmMMP.js";import"./ItemMedia-Cj3xkQia.js";import"./Avatar-DoTE2KMY.js";import"./AvatarGroup-CYCsQlmU.js";import"./ChevronUp-CK8aUJr_.js";import"./ChevronDown-Du2hGOu_.js";import"./ChevronRight-Cfc1KVT6.js";import"./ItemBase-DGBv8zFK.js";import"./ItemLink-BlWZTpmg.js";import"./ItemControls-B-e7R4IL.js";import"./Badge-BBubxNU6.js";import"./Tooltip-oYeDkYvf.js";import"./Typography-BcJ8Dd08.js";import"./MagnifyingGlass-h5bwwa2w.js";import"./ContextMenu-d1Kruqes.js";import"./useDropdownMenuController-B_MLek_v.js";import"./Dropdown-C4WgdX01.js";import"./SearchField-wVxLElBM.js";import"./FieldBase-2HPCGFYx.js";import"./Field-D_aQ-GwQ.js";import"./Label-El1js8iZ.js";import"./Input-BnIvU9G4.js";import"./MenuListItem-BXhczEyE.js";import"./MenuListDivider-HcjopcmV.js";import"./MenuListHeading-CcIf8Q21.js";import"./MenuItem-Dx8f33T4.js";import"./Checkmark-BxM9iGty.js";import"./ItemLabel-D1WDG3AN.js";import"./InformationSquare-BJVzaHsz.js";import"./MenuElipsisHorizontal-D39QN37D.js";import"./Pencil-De-3etwL.js";import"./Trash-CF3fiEwO.js";import"./SettingsModal-DErnX0V6.js";import"./ModalBody-BKf16YWY.js";import"./Section-CCH9N23g.js";import"./Flex-BTfeLS8w.js";import"./ButtonGroup-Byo6nBQS.js";import"./ButtonIcon-CkJ7s5gA.js";import"./ButtonLabel-IXPMuGu0.js";import"./TextField-Zt09XX06.js";import"./SkipLink-DwFjfjL6.js";import"./CookieBanner-D6uat3gK.js";import"./Banner-DjQkzI6t.js";import"./GlobalHeader-Bne5W4yd.js";import"./useIsDesktop-DKESkq3h.js";import"./GlobalAccountButton-Dlx_zq3B.js";import"./Enter-2WPn9LKN.js";import"./GlobalMenuButton-DZuoYZet.js";import"./MenuHamburger-DihebW8m.js";import"./AccountSelector-6kku4Vx_.js";import"./Switch-Br6FtIP2.js";import"./AccountMenu-BoZildmP.js";import"./GlobalMenu-Dl-f4PBe.js";import"./ArrowUndo-VSyd97tJ.js";import"./Globe-DuJDLN5K.js";import"./BreadcrumbsLink-DTRccQS2.js";import"./ArrowRight-BfdhXNgV.js";import"./Footer-DCF1wHcb.js";const Go={component:n,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),p=o&&e.find(a=>a.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),s=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),p=o&&e.find(c=>c.id===o),a={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e,groups:a}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
