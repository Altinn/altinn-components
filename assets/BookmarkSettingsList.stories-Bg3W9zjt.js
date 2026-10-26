var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a7 as r}from"./iframe-DZEBeon6.js";import{B as n,u as d}from"./useBookmarks-DJyuxN2q.js";import{B as l}from"./BookmarkModal-CjQn4Z-g.js";import{L as u}from"./Layout-BaW_UD3P.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BVHVYpiB.js";import"./BookmarkSettingsItem-Do-QoVZh.js";import"./QueryLabel-7J6HrgVy.js";import"./Plus-CVzkbDMT.js";import"./Heading-DnxwPqg0.js";import"./useHighlightedText-C02Ewits.js";import"./SettingsItemBase-BMpCw6WZ.js";import"./ItemMedia-6pV5l8vT.js";import"./Avatar-D6PHcyLs.js";import"./AvatarGroup-BkVQ_49o.js";import"./ChevronUp-Bz_NdsyW.js";import"./ChevronDown-CwSFKLVt.js";import"./ChevronRight-USTqc2u1.js";import"./ItemBase-DCtI5RfF.js";import"./ItemLink-DvbWzZwV.js";import"./ItemControls-uBubo23m.js";import"./Badge-DyKbmjLd.js";import"./Tooltip-DxZByRjV.js";import"./Typography-4TCMsL9d.js";import"./MagnifyingGlass-CTxcpUID.js";import"./ContextMenu-D02kvEHP.js";import"./useDropdownMenuController-D_jzgNs_.js";import"./Dropdown-CX71Aqrg.js";import"./SearchField-GPsGdyh4.js";import"./MenuListItem-DfeXcHT9.js";import"./MenuListHeading-BypPBxNY.js";import"./MenuItem-BGB4ycnF.js";import"./Checkmark-HYeuFO73.js";import"./ItemLabel-DltkMrM4.js";import"./FieldBase-Ba-trh_u.js";import"./Field-C3XB-y4b.js";import"./Label-BuWFr_Nf.js";import"./Input-mPEfjr4P.js";import"./MenuListDivider-C1mJKicD.js";import"./InformationSquare-YKe2AoWI.js";import"./MenuElipsisHorizontal-BQulQNdY.js";import"./Pencil-fAGHp4AW.js";import"./Trash-E83sjO2G.js";import"./SettingsModal-CxFafKkC.js";import"./ModalBody-DIhMkcvy.js";import"./Section-4shCViQn.js";import"./Flex-OuhsGVSH.js";import"./ButtonGroup-DaIoZCPY.js";import"./ButtonIcon-BqERaHvl.js";import"./ButtonLabel-B39oCvE4.js";import"./TextField-CMUYKHRm.js";import"./SkipLink-CbubRj_m.js";import"./CookieBanner-CbGrokyH.js";import"./Link-yhVjaZ8U.js";import"./Banner-DND1fBYB.js";import"./GlobalHeader-C1xyeVjl.js";import"./useIsDesktop-BUvzy5Tw.js";import"./GlobalAccountButton-DrQ2S6cJ.js";import"./Enter-CJQnKqa0.js";import"./GlobalMenuButton-DhRFdWpD.js";import"./MenuHamburger-CTz_AmqV.js";import"./AccountSelector-DcQ2IQJ1.js";import"./Switch-CokB6aYL.js";import"./AccountMenu-yMcU8t-x.js";import"./GlobalMenu-C9Ky5rIY.js";import"./ArrowUndo-DkISv7pM.js";import"./Globe-B65d8Gq3.js";import"./BreadcrumbsLink-BsktVsbb.js";import"./ArrowRight-DaI-IGDJ.js";import"./Footer-CiLaHqZO.js";const Uo={component:n,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),p=o&&e.find(a=>a.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),s=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),p=o&&e.find(c=>c.id===o),a={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(n,{items:e,groups:a}),o&&r.jsx(l,{...p,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
