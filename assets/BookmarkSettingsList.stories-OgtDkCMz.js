var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-ITS-2hJr.js";import{B as n,u as d}from"./useBookmarks-CNw8t-lG.js";import{B as l}from"./BookmarkModal-CQt_78Wi.js";import{L as u}from"./Layout-CBbeUtmm.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Cz88jtED.js";import"./BookmarkSettingsItem-DM1kvNsY.js";import"./QueryLabel-DAaw7gXL.js";import"./Plus-CqSWQ4ND.js";import"./Heading-Bdv6LYG9.js";import"./useHighlightedText-B2HymlD1.js";import"./SettingsItemBase-BhuktrHX.js";import"./ItemMedia-pMPhCUmI.js";import"./Avatar-BB-8uFGa.js";import"./AvatarGroup-BWnxkhGl.js";import"./ChevronUp-fEa8K7DU.js";import"./ChevronDown-Ca0tEUL8.js";import"./ChevronRight-DGdpC6SO.js";import"./ItemBase-3_cP2lbl.js";import"./ItemLink-Ck57Gq-9.js";import"./ItemControls-f_wXUIix.js";import"./Badge-BVHpVrLu.js";import"./Tooltip-4yQO3AdC.js";import"./Typography-8PAPF6ji.js";import"./MagnifyingGlass-CFIOBciK.js";import"./ContextMenu-CNjz3p0p.js";import"./useDropdownMenuController-CM_xdbKo.js";import"./Dropdown-wTA40yAo.js";import"./SearchField-BL8KL877.js";import"./FieldBase-CQGaRX-e.js";import"./Field-D1z-R59Q.js";import"./Label-o7Cne8nH.js";import"./Input-eieVqTh_.js";import"./MenuListItem-miDecag1.js";import"./MenuListDivider-BBgMhND-.js";import"./MenuListHeading-9OnaDQ2l.js";import"./MenuItem-D7bepgio.js";import"./Checkmark-BcDZo_1U.js";import"./ItemLabel-CppZedji.js";import"./InformationSquare-Cv25qdYy.js";import"./MenuElipsisHorizontal-C0z8jRtS.js";import"./Pencil-Bawvj4bp.js";import"./Trash-Cy_ISLKx.js";import"./SettingsModal-CxN7IwrT.js";import"./ModalBody-Cqe55Y6K.js";import"./Section-b3xCS6xU.js";import"./Flex-D_HsLLCq.js";import"./ButtonGroup-B79-xqIF.js";import"./ButtonIcon-DIolnyFl.js";import"./ButtonLabel-DKPFiNkA.js";import"./TextField-CtDQb2Ds.js";import"./SkipLink-D4Kpl2dS.js";import"./CookieBanner-DxNubZBJ.js";import"./Banner-DYXRQz4j.js";import"./GlobalHeader-CvUZHDa3.js";import"./useIsDesktop-Bu2cAKIc.js";import"./GlobalAccountButton-C85eO_si.js";import"./Enter-CJk0vgPg.js";import"./GlobalMenuButton-sD15wkBf.js";import"./MenuHamburger-DVI6d3MD.js";import"./AccountSelector-D1hYOr9_.js";import"./Switch-rM7WLXe7.js";import"./AccountMenu-DqOUox-s.js";import"./GlobalMenu-BWBO1TWH.js";import"./ArrowUndo-ByH49GWX.js";import"./Globe-THAXL2bb.js";import"./BreadcrumbsLink-DWVXaTsd.js";import"./ArrowRight-DmXcgtO1.js";import"./Footer-DnRjpv9q.js";const Go={component:n,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),p=o&&e.find(a=>a.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),s=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),p=o&&e.find(c=>c.id===o),a={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e,groups:a}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
