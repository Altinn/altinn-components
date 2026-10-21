var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-BXiLaIo1.js";import{B as n,u as d}from"./useBookmarks-BUrBK-IV.js";import{B as l}from"./BookmarkModal-BHuFdXj_.js";import{L as u}from"./Layout-sOVL6IGc.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CtVMoXgj.js";import"./BookmarkSettingsItem-Ca2oejRW.js";import"./QueryLabel-CBNrAuYb.js";import"./Plus-CrLkghCi.js";import"./Heading-BSdWQg6G.js";import"./useHighlightedText-K6CHyIcM.js";import"./SettingsItemBase-oEYueedx.js";import"./ItemMedia-VY1kKFwh.js";import"./Avatar-C8Pz6Y-5.js";import"./AvatarGroup-DEeDgfDf.js";import"./ChevronUp-yA5Flpqo.js";import"./ChevronDown-DR7pfG2a.js";import"./ChevronRight-CsaEnGk6.js";import"./ItemBase-vbQ8A6x6.js";import"./ItemLink-DethJfu5.js";import"./ItemControls-DC8itQ-R.js";import"./Badge-Dv1wWeY2.js";import"./Tooltip-Cd6x2nLz.js";import"./Typography-DfF7AP8y.js";import"./MagnifyingGlass-c64YmjJ0.js";import"./ContextMenu-D2k96V01.js";import"./useDropdownMenuController-CL8Sjosp.js";import"./Dropdown-By03aGa-.js";import"./SearchField-CdRvOe5p.js";import"./FieldBase-jDY5NJAX.js";import"./Field-B6gapKpe.js";import"./Label-CW_mCZHf.js";import"./Input-BQGhDE8-.js";import"./MenuListItem-DfRmTFq2.js";import"./MenuListDivider-BxB7qLGS.js";import"./MenuListHeading-HYCXR4_8.js";import"./MenuItem-B-mwma_U.js";import"./Checkmark-V6stw9rv.js";import"./ItemLabel-CTUta9rO.js";import"./InformationSquare-BMwsKYTB.js";import"./MenuElipsisHorizontal-CQ64RhHl.js";import"./Pencil-CpAbauY9.js";import"./Trash-B6SMwBsT.js";import"./SettingsModal-C9wR8a3u.js";import"./ModalBody-BqZQ8xjv.js";import"./Section-SFy5BcqJ.js";import"./Flex-BVJPbTQ_.js";import"./ButtonGroup-z8aQXTJr.js";import"./ButtonIcon-ChRdPhqI.js";import"./ButtonLabel-D7cBpyjL.js";import"./TextField-BHvjvFbO.js";import"./SkipLink-DaC0LeIO.js";import"./CookieBanner-B4iTVKqj.js";import"./Link-XYoTrfy1.js";import"./Banner-X2XN2Q0_.js";import"./GlobalHeader-DAAk2KFu.js";import"./useIsDesktop-CGJs0Kta.js";import"./GlobalAccountButton-ccJJusFF.js";import"./Enter-sU-4-Yk9.js";import"./GlobalMenuButton-BzcX9jV2.js";import"./MenuHamburger-B9U3aeuO.js";import"./AccountSelector-BV3kbG0K.js";import"./Switch-Bnjvc7E2.js";import"./AccountMenu-Bv0t82Mk.js";import"./GlobalMenu-CNUQKa8k.js";import"./ArrowUndo-DN0pdREV.js";import"./Globe-CHDFv98W.js";import"./BreadcrumbsLink-DAFn3i82.js";import"./ArrowRight-C1Cbh0Eb.js";import"./Footer-B5K3QluN.js";const Uo={component:n,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),p=o&&e.find(a=>a.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),s=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),p=o&&e.find(c=>c.id===o),a={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e,groups:a}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const _o=["BookmarksList","GroupedBookmarksList"];export{m as BookmarksList,s as GroupedBookmarksList,_o as __namedExportsOrder,Uo as default};
